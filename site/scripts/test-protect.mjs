import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mask, unmask } from './protect.mjs';

const repo = join(import.meta.dir, '..', '..');
const files = [
  'banking/custody-bank-operating-model.md',
  'regional-banks/japan-post-bank.md',
  'leasing-firms/mebuki-lease.md',
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

const guard =
  'PayPay is the consumer wallet and code-payment operator in the SoftBank-LY ecosystem. ' +
  'See [[megabanks/paypay-fg|PayPay FG ecosystem operator]], ' +
  '[[payment-firms/paypay\\|PayPay consumer wallet operator]], and [[payments/funds-transfer-vs-prepaid-boundary]].';
const g = mask(guard);
const genericTermsVisible =
  g.masked.includes('consumer wallet') &&
  g.masked.includes('code-payment operator') &&
  g.masked.includes('ecosystem operator') &&
  g.masked.includes('PayPay consumer wallet operator');
const targetProtected =
  !g.masked.includes('megabanks/paypay-fg') &&
  !g.masked.includes('payment-firms/paypay') &&
  !g.masked.includes('payments/funds-transfer-vs-prepaid-boundary');
const routeOnlyProtected = !g.masked.includes('[[payments/funds-transfer-vs-prepaid-boundary]]');
const escapedPipePreserved = g.masked.includes('\\|PayPay consumer wallet operator');
const guardLossless = unmask(g.masked, g.masks) === guard;

console.log(
  `generic terms exposed for translation: ${genericTermsVisible}  wikilink targets protected: ${targetProtected && routeOnlyProtected}  escaped pipe preserved: ${escapedPipePreserved}  guard lossless: ${guardLossless}`,
);
if (!genericTermsVisible || !targetProtected || !routeOnlyProtected || !escapedPipePreserved || !guardLossless) allLossless = false;

// custody TL;DR を mask した見本（数字/専名/リンクが占位符になり、散文だけ残るか確認）
const body = stripFm(readFileSync(join(repo, 'banking/custody-bank-operating-model.md'), 'utf8'));
const { masked } = mask(body);
const sample = masked.split('\n').find((l) => l.includes('信託カストディ') || l.includes('合弁')) || '';
console.log('\n=== masked TL;DR 見本（LLM に渡る形） ===\n' + sample.slice(0, 360));

if (!allLossless) process.exit(1);
