import { describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mask, unmask, verify } from './protect.mjs';
import { commitMaskedTranslation } from './translation-output.mjs';
import { localizeJapaneseBusinessTerms, normalizeCrossRefTitle } from './ja-business-term-localizer.mjs';
import {
  isPublishableTranslation,
  isPublishableTranslationText,
} from '../src/lib/translations.ts';

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

  test('protects inline, reference, autolink, and bare Markdown URLs', () => {
    const source =
      '[FSA guidance](https://www.fsa.go.jp/policy/example(2026)?view=1 "official")\n' +
      '[release]: <https://github.com/jasonhnd/finwiki/releases/tag/v2026.07.28>\n' +
      '<https://example.com/report/2026-07-28>\n' +
      'Raw source: https://example.com/data?id=42.';
    const result = mask(source);

    expect(result.masked).toContain('[FSA guidance](');
    expect(result.masked).not.toContain('https://');
    expect(unmask(result.masked, result.masks)).toBe(source);
  });

  test('requires the exact ordered placeholder sequence', () => {
    const masked = 'First ❰a❱ then ❰b❱ and finally ❰c❱.';
    expect(verify(masked, 'Uno ❰a❱ dos ❰b❱ tres ❰c❱.').ok).toBe(true);

    const reordered = verify(masked, 'Uno ❰b❱ dos ❰a❱ tres ❰c❱.');
    expect(reordered.ok).toBe(false);
    expect(reordered.reordered).toBe(true);

    const duplicated = verify(masked, 'Uno ❰a❱ dos ❰a❱ tres ❰c❱.');
    expect(duplicated.ok).toBe(false);
    expect(duplicated.duplicates).toEqual(['❰a❱']);
    expect(duplicated.missing).toEqual(['❰b❱']);

    const missing = verify(masked, 'Uno ❰a❱ tres ❰c❱.');
    expect(missing.ok).toBe(false);
    expect(missing.missing).toEqual(['❰b❱']);

    const unknown = verify(masked, 'Uno ❰a❱ dos ❰z❱ tres ❰c❱.');
    expect(unknown.ok).toBe(false);
    expect(unknown.unknown).toEqual(['❰z❱']);
  });

  test('quarantines invalid output without overwriting the formal mirror', () => {
    const root = mkdtempSync(join(tmpdir(), 'finwiki-translation-review-'));
    const i18nRoot = join(root, 'i18n');
    const reviewRoot = join(root, 'review');
    const outPath = join(i18nRoot, 'en', 'banking', 'example.md');
    mkdirSync(join(i18nRoot, 'en', 'banking'), { recursive: true });
    writeFileSync(outPath, 'existing published mirror\n', 'utf8');

    try {
      const result = commitMaskedTranslation({
        i18nRoot,
        reviewRoot,
        lang: 'en',
        rel: 'banking/example.md',
        hash: 'abc123',
        masked: '# Example\nFirst ❰a❱ then ❰b❱.',
        masks: ['100', '2026-07-28'],
        translatedMasked: '# Example\nFirst ❰b❱ then ❰a❱.',
        translatedAt: '2026-07-28T00:00:00.000Z',
      });

      expect(result.committed).toBe(false);
      expect(result.verification.reordered).toBe(true);
      expect(readFileSync(outPath, 'utf8')).toBe('existing published mirror\n');
      expect(existsSync(result.review.candidatePath)).toBe(true);
      expect(existsSync(result.review.metadataPath)).toBe(true);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  test('only fidelity ok translations are publishable', () => {
    expect(isPublishableTranslation({ data: { fidelity: 'ok' } })).toBe(true);
    expect(isPublishableTranslation({ data: { fidelity: 'needs_review' } })).toBe(false);
    expect(isPublishableTranslation({ data: {} })).toBe(false);
    expect(
      isPublishableTranslationText('---\nsource: banking/example\nfidelity: ok\n---\n# Example\n'),
    ).toBe(true);
    expect(
      isPublishableTranslationText(
        '---\nsource: banking/example\nfidelity: needs_review\n---\n# Example\n',
      ),
    ).toBe(false);
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
