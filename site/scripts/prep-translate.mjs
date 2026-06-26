// 対話内翻訳(段階実行)の前処理: 一批の条目を mask して .cache/jobs/ に出す。
// subagent が *.masked.md を翻訳 → commit-translate.mjs が verify+unmask+i18n 書込。
//   bun scripts/prep-translate.mjs --domain money-market
//   bun scripts/prep-translate.mjs --limit 20 [--force]
//   bun scripts/prep-translate.mjs --langs ja --domain payment-firms --force
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { mask } from './protect.mjs';
import { I18N, REPO, walkEntries } from './corpus-roots.mjs';

const HERE = import.meta.dir;
const JOBS = join(HERE, '..', '.cache', 'jobs');
const args = process.argv.slice(2);
const opt = (n, d = null) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};
const LANGS = opt('langs', 'zh,en').split(',').map((s) => s.trim()).filter(Boolean);
const ONLY = opt('domain');
const DOMAINS = ONLY ? ONLY.toLowerCase().split(',').map((s) => s.trim()) : null;
const LIMIT = Number(opt('limit', '0')) || Infinity;
const FORCE = args.includes('--force');

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const stripFm = (t) => {
  const m = t.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return m ? t.slice(m[0].length) : t;
};
function* walk(dir, rel = '') {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) yield* walk(join(dir, e.name), r);
    else if (e.name.endsWith('.md') && e.name !== 'INDEX.md') yield r;
  }
}

rmSync(JOBS, { recursive: true, force: true });
mkdirSync(JOBS, { recursive: true });

let n = 0;
const list = [];
for (const rel of walkEntries(walk)) {
  if (n >= LIMIT) break;
  const relLc = rel.toLowerCase();
  if (DOMAINS && !DOMAINS.some((d) => relLc.startsWith(d + '/'))) continue;
  const body = stripFm(readFileSync(join(REPO, rel), 'utf8'));
  const h = sha(body);
  const allDone =
    !FORCE &&
    LANGS.every((lang) => {
      const p = join(I18N, lang, relLc);
      return existsSync(p) && readFileSync(p, 'utf8').includes(`source_hash: ${h}`);
    });
  if (allDone) continue;
  const { masked, masks } = mask(body);
  const flat = relLc.replace(/\.md$/, '').replace(/\//g, '__');
  writeFileSync(join(JOBS, `${flat}.masked.md`), masked);
  writeFileSync(join(JOBS, `${flat}.json`), JSON.stringify({ rel: relLc, hash: h, masks }));
  list.push(`${flat}.masked.md`);
  n++;
}
console.log(`prepared ${n} jobs → site/.cache/jobs/  (langs: ${LANGS.join(',')})`);
for (const f of list.slice(0, 60)) console.log('  ' + f);
