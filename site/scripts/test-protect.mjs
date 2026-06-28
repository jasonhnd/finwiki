import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mask, unmask } from './protect.mjs';
import { localizeJapaneseBusinessTerms, normalizeCrossRefTitle } from './ja-business-term-localizer.mjs';

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

const titleByRoute = new Map([
  ['payments/funds-transfer-vs-prepaid-boundary', new Set([normalizeCrossRefTitle('Funds transfer vs prepaid boundary in Japan')])],
]);
const localized = localizeJapaneseBusinessTerms(
  'The consumer wallet operator sits in the SoftBank ecosystem with a merchant acquirer. ' +
    'Circle acquired Hashnote and code payments remain a live example. ' +
    'See [[payment-firms/paypay|PayPay consumer wallet operator]], ' +
    '[[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]], ' +
    'and ^[source:example].\n\n## 出典\n- Keep operator, wallet, funds-transfer, code payments, and acquired source titles unchanged.',
  { titleByRoute },
);
const localizerOk =
  localized.includes('消費者向けウォレット事業者') &&
  localized.includes('経済圏') &&
  localized.includes('加盟店アクワイアラ') &&
  localized.includes('Circle 買収した Hashnote') &&
  localized.includes('コード決済') &&
  localized.includes('[[payment-firms/paypay|PayPay 消費者向けウォレット事業者]]') &&
  localized.includes('[[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]]') &&
  localized.includes('^[source:example]') &&
  localized.includes('Keep operator, wallet, funds-transfer, code payments, and acquired source titles unchanged.');
console.log(`ja business-term localizer guard: ${localizerOk}`);
if (!localizerOk) allLossless = false;

const englishProse =
  'the operator settles the funds via the merchant while wallet risk remains with the issuer.';
const englishProseUnchanged = localizeJapaneseBusinessTerms(englishProse, { titleByRoute }) === englishProse;
console.log(`ja business-term localizer skips English prose: ${englishProseUnchanged}`);
if (!englishProseUnchanged) allLossless = false;

// custody TL;DR を mask した見本（数字/専名/リンクが占位符になり、散文だけ残るか確認）
const body = stripFm(readFileSync(join(repo, 'banking/custody-bank-operating-model.md'), 'utf8'));
const { masked } = mask(body);
const sample = masked.split('\n').find((l) => l.includes('信託カストディ') || l.includes('合弁')) || '';
console.log('\n=== masked TL;DR 見本（LLM に渡る形） ===\n' + sample.slice(0, 360));

if (!allLossless) process.exit(1);
