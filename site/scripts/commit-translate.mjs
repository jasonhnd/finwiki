// subagent が .cache/jobs/(及び子目录 w*/) に書いた訳文を verify+unmask して
// site/src/content/i18n/{lang}/{rel} へ確定書込。子目录(並列 worker)も再帰回収。
//   bun scripts/commit-translate.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { unmask, verify } from './protect.mjs';

const HERE = import.meta.dir;
const I18N = join(HERE, '..', 'src', 'content', 'i18n');
const JOBS = join(HERE, '..', '.cache', 'jobs');

const args = process.argv.slice(2);
const optLangs = args.indexOf('--langs');
const CLI_LANGS = optLangs >= 0 && args[optLangs + 1]
  ? args[optLangs + 1].split(',').map((s) => s.trim()).filter(Boolean)
  : null;
const SUPPORTED_LANGS = new Set(['en']);
if (CLI_LANGS) {
  for (const lang of CLI_LANGS) {
    if (!SUPPORTED_LANGS.has(lang)) throw new Error(`unsupported translation target: ${lang}`);
  }
}

const titleOf = (body) => {
  const m = body.match(/^#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : '';
};

function* walkJson(dir) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walkJson(p);
    else if (e.name.endsWith('.json')) yield p;
  }
}

let ok = 0;
let rev = 0;
let miss = 0;
for (const jsonPath of walkJson(JOBS)) {
  const dir = dirname(jsonPath);
  const flat = jsonPath.slice(dir.length + 1).replace(/\.json$/, '');
  const { rel, hash, masks, langs } = JSON.parse(readFileSync(jsonPath, 'utf8'));
  const masked = readFileSync(join(dir, `${flat}.masked.md`), 'utf8');
  const targetLangs = (CLI_LANGS ?? langs ?? ['en']).filter((lang) => SUPPORTED_LANGS.has(lang));
  for (const lang of targetLangs) {
    const trp = join(dir, `${flat}.${lang}.md`);
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
