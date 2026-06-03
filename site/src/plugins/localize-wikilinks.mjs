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

async function localizeJapaneseWikilinkLabels(root) {
  let replacements = 0;
  const langRoot = path.join(root, 'ja');

  for await (const file of walkHtml(langRoot)) {
    const html = await readFile(file, 'utf8');
    const updated = html.replace(WIKILINK_ANCHOR, (match, href, route, label) => {
      const localized = localizedTitle('ja', route);
      if (!shouldUseJapaneseLabel(label, localized)) return match;
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

  const jaLabels = await localizeJapaneseWikilinkLabels(root);

  console.log(
    `[finwiki] localized wikilink hrefs: ${LANGS.map((lang) => `${lang}=${totals.get(lang) ?? 0}`).join(' ')} ja-labels=${jaLabels}`,
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
