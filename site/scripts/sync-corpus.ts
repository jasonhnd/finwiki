// build 前把 repo root 的 corpus MD 同步进 site/src/content/entries/
// （避开 Astro 跨目录读取的不确定性，最稳的地基做法）
import { readdir, mkdir, copyFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const HERE = import.meta.dir;              // .../site/scripts
const REPO = join(HERE, '..', '..');       // repo root
const OUT = join(HERE, '..', 'src', 'content', 'entries');
const SKIP = new Set([
  '.git', '.opinions', 'site', 'tools', 'api', 'releases',
  '.templates', '.github', 'node_modules', '.cache', '.vscode', 'dist',
  '.vercel', '_site', '_vercel_public', 'app',
]);

async function* walk(dir: string): AsyncGenerator<string> {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP.has(e.name)) continue;
      yield* walk(join(dir, e.name));
    } else if (e.isFile() && e.name.endsWith('.md') && e.name !== 'INDEX.md') {
      yield join(dir, e.name);
    }
  }
}

await rm(OUT, { recursive: true, force: true });
let count = 0;
for await (const file of walk(REPO)) {
  const rel = file.slice(REPO.length + 1).replaceAll('\\', '/');
  if (!rel.includes('/')) continue; // 跳过 root 级控制文档 (README/CHANGELOG/...)
  const dest = join(OUT, rel);
  await mkdir(dirname(dest), { recursive: true });
  await copyFile(file, dest);
  count++;
}
console.log(`synced ${count} entries -> src/content/entries/`);
