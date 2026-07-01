// subagent が翻訳した .cache/tr/{slug}.{lang}.txt を検証:
// 占位符の整合(全生存)+ ジャンク + unmask 後に数字/リンクが原値へ正しく復元されるか。
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { unmask, verify } from './protect.mjs';

const HERE = import.meta.dir;
const cache = join(HERE, '..', '.cache');

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const SUPPORTED_LANGS = new Set(['en']);
const LANGS = opt('langs', 'en')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
for (const lang of LANGS) {
  if (!SUPPORTED_LANGS.has(lang)) throw new Error(`unsupported translation target: ${lang}`);
}

for (const slug of ['custody', 'yucho']) {
  const masked = readFileSync(join(cache, 'masked', `${slug}.txt`), 'utf8');
  const masks = JSON.parse(readFileSync(join(cache, 'masks', `${slug}.json`), 'utf8'));
  for (const lang of LANGS) {
    let tr;
    try {
      tr = readFileSync(join(cache, 'tr', `${slug}.${lang}.txt`), 'utf8');
    } catch {
      console.log(`${slug}.${lang}: (missing)`);
      continue;
    }
    const v = verify(masked, tr);
    const restored = unmask(tr, masks);
    const leftover = (restored.match(/❰[a-j]+❱/g) || []).length;
    console.log(
      `${slug}.${lang}: placeholders ${v.gotCount}/${v.wantCount} ok=${v.placeholdersOk} junk=${v.junk} leftover=${leftover}`,
    );
    console.log('  unmask 头部: ' + JSON.stringify(restored.split('\n').slice(0, 4).join(' ⏎ ').slice(0, 260)));
  }
}
