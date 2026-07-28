// subagent が .cache/jobs/(及び子目录 w*/) に書いた訳文を verify+unmask して
// site/src/content/i18n/{lang}/{rel} へ確定書込。検証失敗は正式 mirror を上書きせず、
// site/.cache/translation-review/ へ隔離する。子目录(並列 worker)も再帰回収。
//   bun scripts/commit-translate.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { commitMaskedTranslation } from './translation-output.mjs';

const HERE = import.meta.dir;
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
    const result = commitMaskedTranslation({
      lang,
      rel,
      hash,
      masked,
      masks,
      translatedMasked: tr,
    });
    const v = result.verification;
    if (result.committed) {
      ok++;
    } else {
      rev++;
      console.log(
        `REV  ${lang}  ${rel}  (placeholders ${v.gotCount}/${v.wantCount} ` +
          `reordered=${v.reordered} missing=${v.missing.length} unknown=${v.unknown.length} ` +
          `duplicates=${v.duplicates.length} junk=${v.junk}; formal mirror unchanged)`,
      );
    }
  }
}
console.log(`\ncommitted: ok=${ok} quarantined=${rev} missing=${miss}`);
