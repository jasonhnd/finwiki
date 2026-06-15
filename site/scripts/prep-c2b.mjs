// C-2b 前処理(manifest 駆動): 分類器の stale manifest から prose_changed / unknown の
// mirror を選び、CURRENT source を mask して .cache/jobs/w0..w{N-1} へ分配。
// 各 worker を 1 个 opus subagent が担当 → commit-translate.mjs が verify+unmask 回収。
// prep-parallel.mjs と違い walkEntries を使わず manifest の source パスを直接辿るため、
// JapanFG 分割後の新 domain(cooperative-banks 等)にも到達できる。
//   bun scripts/prep-c2b.mjs --workers 10 --size 13 [--manifest <path>] [--klass prose_changed,unknown]
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { mask } from './protect.mjs';
import { I18N, REPO } from './corpus-roots.mjs';

const HERE = import.meta.dir;
const JOBS = join(HERE, '..', '.cache', 'jobs');

const args = process.argv.slice(2);
const opt = (n, d) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};
const MANIFEST = opt('manifest', join(HERE, '..', '.cache', 'i18n_stale_manifest.json'));
const WORKERS = Number(opt('workers', '10'));
const SIZE = Number(opt('size', '13'));
const TOTAL = WORKERS * SIZE;
const KLASS = opt('klass', 'prose_changed,unknown').split(',').map((s) => s.trim()).filter(Boolean);

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const stripFm = (t) => {
  const m = t.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return m ? t.slice(m[0].length) : t;
};

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));

// source(.md) -> set of stale langs, filtered by klass
const bySource = new Map();
for (const e of manifest) {
  if (!KLASS.includes(e.klass)) continue;
  const rel = e.source.endsWith('.md') ? e.source : `${e.source}.md`;
  if (!bySource.has(rel)) bySource.set(rel, new Set());
  bySource.get(rel).add(e.lang);
}

// Build todo, skipping (source,lang) that are already current (re-runnable: drains remaining).
const todo = [];
for (const [rel, langSet] of bySource) {
  const srcAbs = join(REPO, rel);
  if (!existsSync(srcAbs)) continue; // orphaned source -> i18n_status surfaces it
  const body = stripFm(readFileSync(srcAbs, 'utf8'));
  const h = sha(body);
  const relLc = rel.toLowerCase();
  const langs = [...langSet].filter((lang) => {
    const p = join(I18N, lang, relLc);
    return !(existsSync(p) && readFileSync(p, 'utf8').includes(`source_hash: ${h}`));
  });
  if (langs.length === 0) continue;
  todo.push({ rel: relLc, body, h, langs });
}
todo.sort((a, b) => a.rel.localeCompare(b.rel)); // deterministic wave order

rmSync(JOBS, { recursive: true, force: true });
for (let w = 0; w < WORKERS; w++) mkdirSync(join(JOBS, `w${w}`), { recursive: true });

const wave = todo.slice(0, TOTAL);
const counts = new Array(WORKERS).fill(0);
wave.forEach((job, idx) => {
  const w = idx % WORKERS;
  const { masked, masks } = mask(job.body);
  const flat = job.rel.replace(/\.md$/, '').replace(/\//g, '__');
  writeFileSync(join(JOBS, `w${w}`, `${flat}.masked.md`), masked);
  writeFileSync(join(JOBS, `w${w}`, `${flat}.json`), JSON.stringify({ rel: job.rel, hash: job.h, masks, langs: job.langs }));
  counts[w]++;
});

const pairs = (arr) => arr.reduce((n, j) => n + j.langs.length, 0);
console.log(`C-2b targets (klass=${KLASS.join('+')}): ${bySource.size} sources; still-stale ${todo.length} sources / ${pairs(todo)} (source,lang) pairs`);
console.log(`this wave: ${wave.length} sources / ${pairs(wave)} pairs into ${WORKERS} workers (size≈${SIZE})`);
counts.forEach((c, w) => console.log(`  w${w}: ${c}`));
const remaining = todo.length - wave.length;
if (remaining > 0) console.log(`remaining after this wave: ${remaining} sources (re-run prep-c2b after commit-translate)`);
if (todo.length === 0) console.log('(no stale prose_changed/unknown remaining)');
