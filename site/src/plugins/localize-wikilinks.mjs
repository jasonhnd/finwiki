import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { localizedTitle } from '../lib/siteIndex.mjs';

const LANGS = ['en', 'zh'];
const WIKILINK_JA_HREF = /<a class="wl" href="\/ja\//g;
const WIKILINK_ANCHOR = /<a class="wl" href="([^"]+)" data-wl="([^"]+)">([^<]*)<\/a>/g;

async function* walkHtml(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkHtml(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      yield full;
    }
  }
}

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function japaneseCount(value) {
  return (String(value).match(/[\u3040-\u30ff\u3400-\u9fff]/g) ?? []).length;
}

function kanaCount(value) {
  return (String(value).match(/[\u3040-\u30ff]/g) ?? []).length;
}

function asciiLetterCount(value) {
  return (String(value).match(/[A-Za-z]/g) ?? []).length;
}

function shouldUseJapaneseLabel(label, localized) {
  if (!localized || japaneseCount(localized) === 0) return false;

  const raw = label.trim();
  if (/^[A-Z0-9&.+/\- ]{2,10}$/.test(raw)) return false;

  const descriptor =
    /\b(index|structure|model|matrix|diagram|overview|comparison|landscape|stack|route|framework|gateway|history|mechanics|primer|architecture|deep[- ]?dive|case|template|operator|market|protocol)\b/i.test(raw);
  const ascii = asciiLetterCount(raw);
  const japanese = japaneseCount(raw);
  return localized.length <= 96 && (descriptor || (ascii >= 12 && ascii > japanese));
}

function titleCaseToken(token) {
  const upper = new Set(['ai', 'api', 'atm', 'bft', 'bpo', 'ccip', 'cctp', 'dlt', 'fg', 'fx', 'gmo', 'hd', 'ibc', 'ipo', 'ir', 'jcb', 'jpx', 'jsf', 'l1', 'l2', 'llm', 'mufg', 'nft', 'odx', 'sbi', 'smbc', 'spv', 'stb', 'ui', 'vasp']);
  const lower = token.toLowerCase();
  if (upper.has(lower)) return lower.toUpperCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function routeLabel(route) {
  const stem = String(route ?? '')
    .split('#', 1)[0]
    .split('/')
    .filter(Boolean)
    .pop();
  if (!stem) return '';
  return stem.split(/[-_]+/).filter(Boolean).map(titleCaseToken).join(' ');
}

function cleanLocalizedTitle(lang, route, localized) {
  const value = String(localized ?? '').trim();
  if (!value) return null;
  if (lang === 'en' && japaneseCount(value) > 0) return routeLabel(route) || null;
  if (lang === 'zh' && kanaCount(value) > 0) return routeLabel(route) || null;
  return value;
}

function localizedLabelFor(lang, route, label) {
  const localized = localizedTitle(lang, route);
  if (lang === 'ja') return shouldUseJapaneseLabel(label, localized) ? localized : null;
  if (japaneseCount(label) === 0) return null;
  const cleaned = cleanLocalizedTitle(lang, route, localized);
  if (cleaned) return cleaned;
  return routeLabel(route) || null;
}

async function localizeWikilinkLabels(root, lang) {
  let replacements = 0;
  const langRoot = path.join(root, lang);

  for await (const file of walkHtml(langRoot)) {
    const html = await readFile(file, 'utf8');
    const updated = html.replace(WIKILINK_ANCHOR, (match, href, route, label) => {
      const localized = localizedLabelFor(lang, route, label);
      if (!localized) return match;
      replacements += 1;
      return `<a class="wl" href="${href}" data-wl="${route}">${esc(localized)}</a>`;
    });
    if (updated !== html) await writeFile(file, updated);
  }

  return replacements;
}

export async function localizeWikilinkHrefs(distDir) {
  const root = typeof distDir === 'string' ? distDir : fileURLToPath(distDir);
  const totals = new Map();

  for (const lang of LANGS) {
    let replacements = 0;
    const langRoot = path.join(root, lang);
    for await (const file of walkHtml(langRoot)) {
      const html = await readFile(file, 'utf8');
      const updated = html.replace(WIKILINK_JA_HREF, () => {
        replacements += 1;
        return `<a class="wl" href="/${lang}/`;
      });
      if (updated !== html) await writeFile(file, updated);
    }
    totals.set(lang, replacements);
  }

  const labelTotals = new Map();
  for (const lang of ['ja', ...LANGS]) {
    labelTotals.set(lang, await localizeWikilinkLabels(root, lang));
  }

  console.log(
    `[finwiki] localized wikilink hrefs: ${LANGS.map((lang) => `${lang}=${totals.get(lang) ?? 0}`).join(' ')} labels: ${['ja', ...LANGS].map((lang) => `${lang}=${labelTotals.get(lang) ?? 0}`).join(' ')}`,
  );
}

export default function localizeWikilinks() {
  return {
    name: 'finwiki-localize-wikilinks',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        await localizeWikilinkHrefs(dir);
      },
    },
  };
}
