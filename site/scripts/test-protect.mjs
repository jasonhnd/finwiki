import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mask, unmask } from './protect.mjs';

const repo = join(import.meta.dir, '..', '..');
const files = [
  'JapanFG/custody-bank.md',
  'JapanFG/yucho.md',
  'JapanFG/mebuki-lease.md',
  'exchanges/fsa-snapshot-delta-log.md',
  'banking/japan-banking-license-tier-comparison-matrix.md',
];

const stripFm = (t) => t.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

let allLossless = true;
for (const f of files) {
  const body = stripFm(readFileSync(join(repo, f), 'utf8'));
  const { masked, masks } = mask(body);
  const restored = unmask(masked, masks);
  const lossless = restored === body;
  if (!lossless) {
    allLossless = false;
    for (let i = 0; i < Math.max(body.length, restored.length); i++) {
      if (body[i] !== restored[i]) {
        console.log(`  DIFF @${i}: ${JSON.stringify(body.slice(i - 15, i + 15))} != ${JSON.stringify(restored.slice(i - 15, i + 15))}`);
        break;
      }
    }
  }
  console.log(`${lossless ? 'OK ' : 'FAIL'}  masks=${String(masks.length).padStart(4)}  ${f}`);
}
console.log(`\nall lossless: ${allLossless}`);

// custody TL;DR を mask した見本（数字/専名/リンクが占位符になり、散文だけ残るか確認）
const body = stripFm(readFileSync(join(repo, 'JapanFG/custody-bank.md'), 'utf8'));
const { masked } = mask(body);
const sample = masked.split('\n').find((l) => l.includes('信託カストディ') || l.includes('合弁')) || '';
console.log('\n=== masked TL;DR 見本（LLM に渡る形） ===\n' + sample.slice(0, 360));
