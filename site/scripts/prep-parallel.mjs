// 並列翻訳の前処理: 未翻訳条目を N 个 worker 子目录(.cache/jobs/w0..w{N-1})へ分配。
// 各 worker を 1 个 opus subagent が担当 → commit-translate.mjs(递归)が回収。
//   bun scripts/prep-parallel.mjs --workers 10 --size 13
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { mask } from './protect.mjs';
import { I18N, REPO, walkEntries } from './corpus-roots.mjs';

const HERE = import.meta.dir;
const JOBS = join(HERE, '..', '.cache', 'jobs');
const LANGS = ['zh', 'en'];

const args = process.argv.slice(2);
const opt = (n, d) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};
const WORKERS = Number(opt('workers', '10'));
const SIZE = Number(opt('size', '13'));
const TOTAL = WORKERS * SIZE;

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
for (let w = 0; w < WORKERS; w++) mkdirSync(join(JOBS, `w${w}`), { recursive: true });

const todo = [];
for (const rel of walkEntries(walk)) {
  if (todo.length >= TOTAL) break;
  const relLc = rel.toLowerCase();
  const body = stripFm(readFileSync(join(REPO, rel), 'utf8'));
  const h = sha(body);
  const done = LANGS.every((lang) => {
    const p = join(I18N, lang, relLc);
    return existsSync(p) && readFileSync(p, 'utf8').includes(`source_hash: ${h}`);
  });
  if (done) continue;
  todo.push({ rel: relLc, body, h });
}

const counts = new Array(WORKERS).fill(0);
todo.forEach((job, idx) => {
  const w = idx % WORKERS;
  const { masked, masks } = mask(job.body);
  const flat = job.rel.replace(/\.md$/, '').replace(/\//g, '__');
  writeFileSync(join(JOBS, `w${w}`, `${flat}.masked.md`), masked);
  writeFileSync(join(JOBS, `w${w}`, `${flat}.json`), JSON.stringify({ rel: job.rel, hash: job.h, masks }));
  counts[w]++;
});
console.log(`prepared ${todo.length} jobs into ${WORKERS} workers (size≈${SIZE}):`);
counts.forEach((c, w) => console.log(`  w${w}: ${c}`));
if (todo.length === 0) console.log('(全部翻译完成 — 无未翻条目)');
