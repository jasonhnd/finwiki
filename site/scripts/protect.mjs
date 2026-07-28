// 翻訳の事実破壊を防ぐ mask / unmask + verify。
// 数値・金額・%・日付・和暦・登録番号・[[wikilink]]・^[marker] を占位符へ退避し、
// 翻訳後に原値を復元する。これらは LLM に渡らないため破壊され得ない（spike で判明した
// 数字単位ミス / 専名混淆 / リンク捏造の大半を構造的に封じる）。

// 占位符は「数字を含まない」こと（後続の数値パターンに拾われないため）。❰letters❱ 形式。
// index の各桁 0-9 を a-j に写像（純粋に英字、可逆）。
function enc(i) {
  return String(i)
    .split('')
    .map((d) => String.fromCharCode(97 + Number(d)))
    .join('');
}
function dec(s) {
  return Number(s.split('').map((c) => String(c.charCodeAt(0) - 97)).join(''));
}
const ph = (i) => `❰${enc(i)}❱`;
const PH_RE = /❰([a-j]+)❱/g;
const ANY_PH_RE = /❰[a-z]+❱/gi;

const WIKILINK_RE = /\[\[([^\]\n|]+?)(?:(\\?\|)([^\]\n]+))?\]\]/g;

function pushMask(masks, value) {
  const i = masks.length;
  masks.push(value);
  return ph(i);
}

function maskInlineMarkdownDestinations(text, masks) {
  const openings = [...text.matchAll(/!?\[[^\]\n]*\]\(/g)];
  if (openings.length === 0) return text;

  const ranges = [];
  for (const opening of openings) {
    let start = opening.index + opening[0].length;
    while (start < text.length && /[ \t\n]/.test(text[start])) start++;
    if (start >= text.length) continue;

    let end = start;
    if (text[start] === '<') {
      const close = text.indexOf('>', start + 1);
      if (close === -1) continue;
      end = close + 1;
    } else {
      let depth = 0;
      let escaped = false;
      while (end < text.length) {
        const char = text[end];
        if (escaped) {
          escaped = false;
          end++;
          continue;
        }
        if (char === '\\') {
          escaped = true;
          end++;
          continue;
        }
        if (char === '(') {
          depth++;
          end++;
          continue;
        }
        if (char === ')') {
          if (depth === 0) break;
          depth--;
          end++;
          continue;
        }
        if (depth === 0 && /[ \t\n]/.test(char)) break;
        end++;
      }
    }
    if (end > start) ranges.push({ start, end });
  }

  if (ranges.length === 0) return text;
  let out = '';
  let cursor = 0;
  for (const range of ranges.sort((left, right) => left.start - right.start)) {
    if (range.start < cursor) continue;
    out += text.slice(cursor, range.start);
    out += pushMask(masks, text.slice(range.start, range.end));
    cursor = range.end;
  }
  return out + text.slice(cursor);
}

function trimBareUrlSuffix(value) {
  let end = value.length;
  while (end > 0 && /[.,;:!?]/.test(value[end - 1])) end--;

  const pairs = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ];
  for (const [open, close] of pairs) {
    while (end > 0 && value[end - 1] === close) {
      const candidate = value.slice(0, end);
      const opens = candidate.split(open).length - 1;
      const closes = candidate.split(close).length - 1;
      if (closes <= opens) break;
      end--;
    }
  }
  return [value.slice(0, end), value.slice(end)];
}

function maskMarkdownUrls(text, masks) {
  let out = maskInlineMarkdownDestinations(text, masks);

  out = out.replace(
    /^([ \t]{0,3}\[[^\]\n]+\]:[ \t]*)(<[^>\n]+>|[^ \t\n]+)(.*)$/gm,
    (_match, prefix, destination, suffix) => `${prefix}${pushMask(masks, destination)}${suffix}`,
  );

  out = out.replace(/<(?:https?:\/\/|mailto:)[^>\n]+>/gi, (value) => pushMask(masks, value));

  out = out.replace(/https?:\/\/[^\s<>"'`]+/gi, (value) => {
    const [url, suffix] = trimBareUrlSuffix(value);
    return url ? `${pushMask(masks, url)}${suffix}` : value;
  });

  return out;
}

// 退避パターン（優先順: 特殊・長いものから。先に処理した占位符は英字のみなので後続に拾われない）
const PATTERNS = [
  /\^\[[^\]\n]+\]/g, // provenance marker
  /\d{4}-\d{2}-\d{2}/g, // ISO 日付
  /(?:令和|平成|昭和)\s*\d+\s*年(?:\s*\d+\s*月)?(?:\s*\d+\s*日)?/g, // 和暦
  /\d{4}\s*年(?:\s*\d+\s*月)?(?:\s*\d+\s*日)?/g, // 西暦 年月日
  /第\s*[\d,]+\s*号/g, // 登録番号
  /\d[\d,]*(?:\.\d+)?\s*(?:兆円|億円|万円|百万円|千万|百万|兆|億|万|円|ドル|％|%|社|局|名|口座|店|歳|位|件|号|行)?/g, // 数値(+単位)
];

export function mask(text) {
  const masks = [];
  let out = text.replace(WIKILINK_RE, (match, target, sep, label) => {
    if (label == null) return pushMask(masks, match);
    return `[[${pushMask(masks, target)}${sep}${label}]]`;
  });
  out = maskMarkdownUrls(out, masks);
  for (const re of PATTERNS) {
    out = out.replace(re, (m) => {
      return pushMask(masks, m);
    });
  }
  return { masked: out, masks };
}

export function unmask(masked, masks) {
  return masked.replace(PH_RE, (full, letters) => {
    const i = dec(letters);
    return i >= 0 && i < masks.length ? masks[i] : full;
  });
}

function placeholderSequence(text) {
  return text.match(ANY_PH_RE) || [];
}

function counts(values) {
  const result = new Map();
  for (const value of values) result.set(value, (result.get(value) ?? 0) + 1);
  return result;
}

// 翻訳後の検証: 占位符の完全な順序整合（全て生存・並べ替え/脱落/重複/未知なし）
// + 翻訳ジャンク（メタ注記）検出。
// 数字/リンク/標記は mask で守られているので、ここは「占位符が壊れていないか」が主眼。
export function verify(masked, translatedMasked) {
  const want = placeholderSequence(masked);
  const got = placeholderSequence(translatedMasked);
  const wantCounts = counts(want);
  const gotCounts = counts(got);
  const sequenceOk = want.length === got.length && want.every((value, index) => value === got[index]);
  const sameMultiset =
    wantCounts.size === gotCounts.size &&
    [...wantCounts].every(([value, count]) => gotCounts.get(value) === count);
  const missing = [...wantCounts]
    .filter(([value, count]) => (gotCounts.get(value) ?? 0) < count)
    .map(([value]) => value);
  const unknown = [...gotCounts]
    .filter(([value]) => !wantCounts.has(value))
    .map(([value]) => value);
  const duplicates = [...gotCounts]
    .filter(([value, count]) => count > (wantCounts.get(value) ?? 0))
    .map(([value]) => value);
  // 翻訳ジャンク(LLM 自己纠正/译者注)のみ検出。本文に合法的に出る「改回」「（注：」等は
  // 拾わないよう、最も特異な自己纠正パターンに絞る(spike の「——此处改回」+ 明示的译者注)。
  const junk = /——\s*此处改回|译者注\s*[:：]|訳者注\s*[:：]|translator'?s?\s+note/i.test(translatedMasked);
  return {
    placeholdersOk: sequenceOk,
    sequenceOk,
    reordered: sameMultiset && !sequenceOk,
    missing,
    unknown,
    duplicates,
    junk,
    ok: sequenceOk && !junk,
    wantCount: want.length,
    gotCount: got.length,
  };
}
