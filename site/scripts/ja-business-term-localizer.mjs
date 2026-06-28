import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const WIKILINK_RE = /\[\[([^\]\n|]+?)(?:(\\?\|)([^\]\n]+))?\]\]/g;

const EXACT_REPLACEMENTS = [
  ['consumer wallet', '消費者向けウォレット'],
  ['consumer wallets', '消費者向けウォレット'],
  ['wallet-style code payments', 'ウォレット型コード決済'],
  ['code-payment', 'コード決済'],
  ['code payment', 'コード決済'],
  ['code payments', 'コード決済'],
  ['funds-transfer', '資金移動'],
  ['funds transfer', '資金移動'],
  ['stored value', 'バリュー残高'],
  ['business model', '事業モデル'],
  ['retail investor', '個人投資家'],
  ['retail investors', '個人投資家'],
  ['net operating revenue', '純営業収益'],
];

const WORD_REPLACEMENTS = [
  [/\b([A-Z][A-Za-z0-9 .&-]+?) \(acquired by ([A-Z][A-Za-z0-9 .&-]+?) (\d{4}-\d{2})\)/g, '$1 ($2 が $3 に買収)'],
  [/\bacquired by\b/gi, 'に買収された'],
  [/\bacquired\b/gi, '買収した'],
  [/wallets?\b/gi, 'ウォレット'],
  [/operators?\b/gi, '事業者'],
  [/ecosystems?\b/gi, '経済圏'],
  [/merchants?\b/gi, '加盟店'],
  [/issuers?\b/gi, '発行会社'],
  [/acquirers?\b/gi, 'アクワイアラ'],
  [/acquiring\b/gi, 'アクワイアリング'],
  [/settlement\b/gi, '決済'],
  [/brokerage\b/gi, '証券仲介'],
  [/custody\b/gi, 'カストディ'],
  [/prepaid\b/gi, '前払式'],
  [/underwriting\b/gi, '引受'],
  [/solvency\b/gi, 'ソルベンシー'],
];

const KEEP_ENGLISH_PATTERNS = [
  /\bCustody Bank of Japan\b/g,
  /\bMaster Trust Bank of Japan\b/g,
  /\bTrust & Custody Services Bank\b/g,
  /Wallet\+/g,
  /\bLynk wallet\b/g,
  /\bbitWallet\b/g,
  /\bWalletConnect\b/g,
];

const SOURCE_SECTION_RE =
  /\n##\s+(?:Sources?|ソース|出典|参考資料|参照資料|公開データソース)\s*(?:\([^)\n]*\))?\s*(?:\n|$)/m;

function withoutNonProse(markdown) {
  const sourceMatch = SOURCE_SECTION_RE.exec(markdown);
  const sourcesIndex = sourceMatch?.index ?? -1;
  const head = sourcesIndex >= 0 ? markdown.slice(0, sourcesIndex) : markdown;
  return head
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/\^\[[^\]\n]+\]/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(WIKILINK_RE, ' ')
    .replace(/\s+/g, ' ');
}

export function hasSubstantialEnglishProse(markdown) {
  const prose = ` ${withoutNonProse(markdown).toLowerCase()} `;
  return (prose.match(/ the /g) ?? []).length >= 3;
}

function pushMask(masks, value) {
  const key = `@@JA_TERM_MASK_${masks.length}@@`;
  masks.push(value);
  return key;
}

function restoreMasks(text, masks) {
  return text.replace(/@@JA_TERM_MASK_(\d+)@@/g, (_, i) => masks[Number(i)] ?? _);
}

export function normalizeCrossRefTitle(value) {
  return value
    .replace(/[`*_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function titleFromMarkdown(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const fmTitle = fm?.[1]?.match(/^title:\s*(.+?)\s*$/m)?.[1];
  if (fmTitle) return fmTitle.trim().replace(/^["']|["']$/g, '');
  return text.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim() ?? '';
}

function* walkMarkdown(dir, rel = '') {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const nextRel = rel ? `${rel}/${entry.name}` : entry.name;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkMarkdown(path, nextRel);
    else if (entry.name.endsWith('.md') && entry.name !== 'INDEX.md') yield nextRel;
  }
}

export function buildTitleByRoute(repoRoot, jaMirrorRoot = null) {
  const titleByRoute = new Map();
  const add = (route, title) => {
    if (!route || !title) return;
    const normalized = normalizeCrossRefTitle(title);
    if (!normalized) return;
    if (!titleByRoute.has(route)) titleByRoute.set(route, new Set());
    titleByRoute.get(route).add(normalized);
  };
  for (const rel of walkMarkdown(repoRoot)) {
    const route = rel.replace(/\\/g, '/').replace(/\.md$/, '').toLowerCase();
    add(route, titleFromMarkdown(readFileSync(join(repoRoot, rel), 'utf8')));
  }
  if (jaMirrorRoot) {
    for (const rel of walkMarkdown(jaMirrorRoot)) {
      const route = rel.replace(/\\/g, '/').replace(/\.md$/, '').toLowerCase();
      add(route, titleFromMarkdown(readFileSync(join(jaMirrorRoot, rel), 'utf8')));
    }
  }
  return titleByRoute;
}

function isExactCrossRefTitle(target, label, titleByRoute) {
  if (!titleByRoute || !target || !label) return false;
  return titleByRoute.get(target.toLowerCase())?.has(normalizeCrossRefTitle(label)) ?? false;
}

function localizeSegment(input, options) {
  const masks = [];
  let text = input;
  text = text.replace(/```[\s\S]*?```/g, (m) => pushMask(masks, m));
  text = text.replace(/`[^`\n]*`/g, (m) => pushMask(masks, m));
  text = text.replace(/\^\[[^\]\n]+\]/g, (m) => pushMask(masks, m));
  text = text.replace(/https?:\/\/\S+/g, (m) => pushMask(masks, m));
  for (const keep of KEEP_ENGLISH_PATTERNS) text = text.replace(keep, (m) => pushMask(masks, m));
  text = text.replace(WIKILINK_RE, (match, target, sep, label) => {
    if (label == null) return pushMask(masks, match);
    if (isExactCrossRefTitle(target, label, options?.titleByRoute)) return pushMask(masks, match);
    return `[[${pushMask(masks, target)}${sep}${localizeSegment(label, options)}]]`;
  });

  for (const [from, to] of EXACT_REPLACEMENTS) {
    text = text.replace(new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), to);
  }
  for (const [pattern, to] of WORD_REPLACEMENTS) text = text.replace(pattern, to);
  text = text.replace(/([ァ-ン一-龯])\s+([ァ-ン一-龯])/g, '$1$2');
  text = text.replace(/\s+([、。；：）])/g, '$1');
  return restoreMasks(text, masks);
}

export function localizeJapaneseBusinessTerms(markdown, options = {}) {
  if (hasSubstantialEnglishProse(markdown)) return markdown;
  const sourceMatch = SOURCE_SECTION_RE.exec(markdown);
  const sourcesIndex = sourceMatch?.index ?? -1;
  const head = sourcesIndex >= 0 ? markdown.slice(0, sourcesIndex) : markdown;
  const tail = sourcesIndex >= 0 ? markdown.slice(sourcesIndex) : '';
  return localizeSegment(head, options) + tail;
}
