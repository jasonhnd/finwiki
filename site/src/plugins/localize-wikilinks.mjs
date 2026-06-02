import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const LANGS = ['en', 'zh'];
const WIKILINK_JA_HREF = /<a class="wl" href="\/ja\//g;

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

  console.log(
    `[finwiki] localized wikilink hrefs: ${LANGS.map((lang) => `${lang}=${totals.get(lang) ?? 0}`).join(' ')}`,
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
