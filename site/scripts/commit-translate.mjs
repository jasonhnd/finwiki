// 対話内翻訳の後処理: subagent が .cache/jobs/{flat}.{zh,en}.md に書いた訳文を
// verify(占位符整合/杂质) + unmask して site/src/content/i18n/{lang}/{rel} へ確定書込。
//   bun scripts/commit-translate.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { unmask, verify } from './protect.mjs';

const HERE = import.meta.dir;
const I18N = join(HERE, '..', 'src', 'content', 'i18n');
const JOBS = join(HERE, '..', '.cache', 'jobs');
const LANGS = ['zh', 'en'];

const titleOf = (body) => {
  const m = body.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : '';
};

let ok = 0;
let rev = 0;
let miss = 0;
for (const f of readdirSync(JOBS)) {
  if (!f.endsWith('.json')) continue;
  const flat = f.replace(/\.json$/, '');
  const { rel, hash, masks } = JSON.parse(readFileSync(join(JOBS, f), 'utf8'));
  const masked = readFileSync(join(JOBS, `${flat}.masked.md`), 'utf8');
  for (const lang of LANGS) {
    const trp = join(JOBS, `${flat}.${lang}.md`);
    if (!existsSync(trp)) {
      miss++;
      console.log(`MISS ${lang}  ${rel}`);
      continue;
    }
    const tr = readFileSync(trp, 'utf8');
    const v = verify(masked, tr);
    const body = unmask(tr, masks);
    const fidelity = v.ok ? 'ok' : 'needs_review';
    if (fidelity === 'ok') ok++;
    else {
      rev++;
      console.log(`REV  ${lang}  ${rel}  (placeholders ${v.gotCount}/${v.wantCount} junk=${v.junk})`);
    }
    const head =
      `---\n` +
      `source: ${rel.replace(/\.md$/, '')}\n` +
      `source_hash: ${hash}\n` +
      `lang: ${lang}\n` +
      `status: machine\n` +
      `fidelity: ${fidelity}\n` +
      `title: ${JSON.stringify(titleOf(body))}\n` +
      `translated_at: ${new Date().toISOString()}\n` +
      `---\n`;
    const outPath = join(I18N, lang, rel);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, head + body.replace(/\n*$/, '') + '\n', 'utf8');
  }
}
console.log(`\ncommitted: ok=${ok} needs_review=${rev} missing=${miss}`);
