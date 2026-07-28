// 対話内翻訳(段階実行)の前処理: 一批の条目を mask して .cache/jobs/ に出す。
// subagent が *.masked.md を翻訳 → commit-translate.mjs が verify+unmask+i18n 書込。
//   bun scripts/prep-translate.mjs --domain money-market
//   bun scripts/prep-translate.mjs --limit 20 [--force]
//   bun scripts/prep-translate.mjs --langs en --domain payment-firms --force
//   bun scripts/prep-translate.mjs --force --dry-run
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
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
const SUPPORTED_LANGS = new Set(['en']);
const LANGS = opt('langs', 'en').split(',').map((s) => s.trim()).filter(Boolean);
for (const lang of LANGS) {
  if (!SUPPORTED_LANGS.has(lang)) throw new Error(`unsupported translation target: ${lang}`);
}
const ONLY = opt('domain');
const DOMAINS = ONLY ? ONLY.toLowerCase().split(',').map((s) => s.trim()) : null;
const LIMIT = Number(opt('limit', '0')) || Infinity;
const FORCE = args.includes('--force');
const DRY_RUN = args.includes('--dry-run');

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const stripFm = (t) => {
  const m = t.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return m ? t.slice(m[0].length) : t;
};
if (!DRY_RUN) {
  rmSync(JOBS, { recursive: true, force: true });
  mkdirSync(JOBS, { recursive: true });
}

let n = 0;
const list = [];
for await (const rel of walkEntries()) {
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
  if (!DRY_RUN) {
    writeFileSync(join(JOBS, `${flat}.masked.md`), masked);
    writeFileSync(join(JOBS, `${flat}.json`), JSON.stringify({ rel: relLc, hash: h, masks }));
  }
  list.push(`${flat}.masked.md`);
  n++;
}
console.log(
  DRY_RUN
    ? `prepared ${n} jobs (dry run; no files written)  (langs: ${LANGS.join(',')})`
    : `prepared ${n} jobs → site/.cache/jobs/  (langs: ${LANGS.join(',')})`,
);
for (const f of list.slice(0, 60)) console.log('  ' + f);
