import { describe, expect, test } from 'bun:test';
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

const titleByRoute = new Map([
  ['payments/funds-transfer-vs-prepaid-boundary', new Set([normalizeCrossRefTitle('Funds transfer vs prepaid boundary in Japan')])],
]);

describe('translation protection', () => {
  for (const file of files) {
    test(`mask/unmask is lossless for ${file}`, () => {
      const body = stripFm(readFileSync(join(repo, file), 'utf8'));
      const { masked, masks } = mask(body);
      expect(unmask(masked, masks)).toBe(body);
    });
  }

  test('protects wikilink targets while preserving translatable labels', () => {
    const guard =
      'PayPay is the consumer wallet and code-payment operator in the SoftBank-LY ecosystem. ' +
      'See [[megabanks/paypay-fg|PayPay FG ecosystem operator]], ' +
      '[[payment-firms/paypay\\|PayPay consumer wallet operator]], and [[payments/funds-transfer-vs-prepaid-boundary]].';
    const result = mask(guard);

    expect(result.masked).toContain('consumer wallet');
    expect(result.masked).toContain('code-payment operator');
    expect(result.masked).toContain('ecosystem operator');
    expect(result.masked).toContain('PayPay consumer wallet operator');
    expect(result.masked).not.toContain('megabanks/paypay-fg');
    expect(result.masked).not.toContain('payment-firms/paypay');
    expect(result.masked).not.toContain('payments/funds-transfer-vs-prepaid-boundary');
    expect(result.masked).toContain('\\|PayPay consumer wallet operator');
    expect(unmask(result.masked, result.masks)).toBe(guard);
  });

  test('localizes Japanese business terms without changing protected references', () => {
    const localized = localizeJapaneseBusinessTerms(
      'The consumer wallet operator sits in the SoftBank ecosystem with a merchant acquirer. ' +
        'Circle acquired Hashnote and code payments remain a live example. ' +
        'See [[payment-firms/paypay|PayPay consumer wallet operator]], ' +
        '[[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]], ' +
        'and ^[source:example].\n\n## 出典\n- Keep operator, wallet, funds-transfer, code payments, and acquired source titles unchanged.',
      { titleByRoute },
    );

    expect(localized).toContain('消費者向けウォレット事業者');
    expect(localized).toContain('経済圏');
    expect(localized).toContain('加盟店アクワイアラ');
    expect(localized).toContain('Circle 買収した Hashnote');
    expect(localized).toContain('コード決済');
    expect(localized).toContain('[[payment-firms/paypay|PayPay 消費者向けウォレット事業者]]');
    expect(localized).toContain(
      '[[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]]',
    );
    expect(localized).toContain('^[source:example]');
    expect(localized).toContain(
      'Keep operator, wallet, funds-transfer, code payments, and acquired source titles unchanged.',
    );
  });

  test('skips English prose', () => {
    const englishProse =
      'the operator settles the funds via the merchant while wallet risk remains with the issuer.';
    expect(localizeJapaneseBusinessTerms(englishProse, { titleByRoute })).toBe(englishProse);
  });
});
