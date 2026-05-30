// 構築時に corpus（src/content/entries）を一度だけ走査し、wikilink 解決用の
// alias / slug / path → 正規パス（小文字、URL と一致）マップを作る。
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'src', 'content', 'entries');
let map = null;

function walk(dir, rel = '') {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...walk(join(dir, e.name), r));
    else if (e.name.endsWith('.md')) out.push(r);
  }
  return out;
}

function build() {
  const m = new Map();
  let files = [];
  try {
    files = walk(ROOT);
  } catch {
    return m;
  }
  for (const rel of files) {
    const path = rel.replace(/\.md$/, '');
    const lc = path.toLowerCase(); // URL と一致（Astro は id を小文字化）
    const stem = path.split('/').pop().toLowerCase();
    m.set(lc, lc);
    if (!m.has(stem)) m.set(stem, lc);
    try {
      const txt = readFileSync(join(ROOT, rel), 'utf8');
      const fm = txt.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (fm) {
        const vals = [];
        const inline = fm[1].match(/^aliases:\s*\[([^\]]*)\]/m);
        if (inline) vals.push(...inline[1].split(','));
        const block = fm[1].match(/^aliases:\s*\n((?:[ \t]*-[ \t]*.+\n?)+)/m);
        if (block)
          for (const line of block[1].split('\n')) {
            const mm = line.match(/^[ \t]*-[ \t]*(.+?)[ \t]*$/);
            if (mm) vals.push(mm[1]);
          }
        for (const a of vals) {
          const key = a.trim().replace(/^["']|["']$/g, '').toLowerCase();
          if (key && !m.has(key)) m.set(key, lc);
        }
      }
    } catch {
      /* ignore unreadable */
    }
  }
  return m;
}

// wikilink target → 正規パス（小文字）/ null（未解決）。domain/INDEX は domain ホームへ。
export function resolveWiki(target) {
  if (!map) map = build();
  const t = String(target || '').trim();
  const idx = t.match(/^(.+)\/INDEX$/i);
  if (idx) return `browse/#${idx[1].toLowerCase()}`; // domain/INDEX → browse の域アンカー
  const key = t.toLowerCase();
  return map.get(key) ?? map.get(key.split('/').pop()) ?? null;
}
