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

// 退避パターン（優先順: 特殊・長いものから。先に処理した占位符は英字のみなので後続に拾われない）
const PATTERNS = [
  /\[\[[^\]\n]+\]\]/g, // wikilink
  /\^\[[^\]\n]+\]/g, // provenance marker
  /\d{4}-\d{2}-\d{2}/g, // ISO 日付
  /(?:令和|平成|昭和)\s*\d+\s*年(?:\s*\d+\s*月)?(?:\s*\d+\s*日)?/g, // 和暦
  /\d{4}\s*年(?:\s*\d+\s*月)?(?:\s*\d+\s*日)?/g, // 西暦 年月日
  /第\s*[\d,]+\s*号/g, // 登録番号
  /\d[\d,]*(?:\.\d+)?\s*(?:兆円|億円|万円|百万円|千万|百万|兆|億|万|円|ドル|％|%|社|局|名|口座|店|歳|位|件|号|行)?/g, // 数値(+単位)
];

export function mask(text) {
  const masks = [];
  let out = text;
  for (const re of PATTERNS) {
    out = out.replace(re, (m) => {
      const i = masks.length;
      masks.push(m);
      return ph(i);
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

// 翻訳後の検証: 占位符の整合（全て生存・脱落/重複なし）+ 翻訳ジャンク（メタ注記）検出。
// 数字/リンク/標記は mask で守られているので、ここは「占位符が壊れていないか」が主眼。
export function verify(masked, translatedMasked) {
  const want = (masked.match(PH_RE) || []).slice().sort();
  const got = (translatedMasked.match(PH_RE) || []).slice().sort();
  const placeholdersOk = want.length === got.length && want.every((v, k) => v === got[k]);
  // 翻訳ジャンク(LLM 自己纠正/译者注)のみ検出。本文に合法的に出る「改回」「（注：」等は
  // 拾わないよう、最も特異な自己纠正パターンに絞る(spike の「——此处改回」+ 明示的译者注)。
  const junk = /——\s*此处改回|译者注\s*[:：]|訳者注\s*[:：]|translator'?s?\s+note/i.test(translatedMasked);
  return {
    placeholdersOk,
    junk,
    ok: placeholdersOk && !junk,
    wantCount: want.length,
    gotCount: got.length,
  };
}
