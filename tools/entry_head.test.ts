import { describe, expect, test } from 'bun:test';
import { buildEntryHead, frontmatterValues, serializeJsonLd } from '../site/src/lib/entryHead';

describe('entry head metadata', () => {
  test('keeps canonical and language alternates on the same entry route', () => {
    const head = buildEntryHead({
      lang: 'en',
      route: '/Banking/Example.md',
      title: 'Example entry',
      frontmatter: {
        domain: 'banking',
        aliases: ['Example', 'Sample, Inc.'],
        tags: ['banking', 'settlement'],
        sources: ['https://example.com/a', 'https://example.com/b'],
        confidence: 'likely',
        status: 'active',
        last_updated: new Date('2026-07-28T00:00:00Z'),
        review_by: '2027-01-28',
      },
    });

    expect(head.canonical).toBe('https://finwiki.zksc.io/en/banking/example/');
    expect(head.languageAlternates).toEqual({
      ja: 'https://finwiki.zksc.io/ja/banking/example/',
      en: 'https://finwiki.zksc.io/en/banking/example/',
      'x-default': 'https://finwiki.zksc.io/ja/banking/example/',
    });
    expect(head.resourceAlternates).toEqual({
      api: 'https://finwiki.zksc.io/api/entries/banking/example.json',
      markdown: 'https://finwiki.zksc.io/banking/example.md',
    });
    expect(head.finwikiMeta).toContainEqual({
      name: 'finwiki:last_updated',
      content: '2026-07-28',
    });
    expect(head.finwikiMeta.filter(({ name }) => name === 'finwiki:sources')).toHaveLength(2);
    expect(head.jsonLd).toMatchObject({
      '@type': 'Article',
      url: 'https://finwiki.zksc.io/en/banking/example/',
      headline: 'Example entry',
      inLanguage: 'en',
      keywords: ['banking', 'settlement'],
      alternateName: ['Example', 'Sample, Inc.'],
      citation: ['https://example.com/a', 'https://example.com/b'],
    });
  });

  test('normalizes list values and uses the route domain as a truthful fallback', () => {
    expect(
      frontmatterValues([
        'one',
        'one',
        { url: 'https://example.com/source' },
        { title: 'Named source' },
        { 'Public press': 'Example, Wire' },
        null,
      ]),
    ).toEqual([
      'one',
      'https://example.com/source',
      'Named source',
      'Public press: Example, Wire',
    ]);

    const head = buildEntryHead({
      lang: 'ja',
      route: 'fintech/example',
      title: '例',
      frontmatter: {},
      site: 'https://preview.example/',
    });
    expect(head.finwikiMeta).toEqual([{ name: 'finwiki:domain', content: 'fintech' }]);
    expect(head.canonical).toBe('https://preview.example/ja/fintech/example/');
  });

  test('escapes markup-sensitive JSON-LD content', () => {
    const serialized = serializeJsonLd({ headline: '</script><script>alert(1)</script>' });
    expect(serialized).not.toContain('</script>');
    expect(JSON.parse(serialized)).toEqual({ headline: '</script><script>alert(1)</script>' });
  });

  test('rejects non-entry routes', () => {
    expect(() =>
      buildEntryHead({ lang: 'ja', route: 'home', title: 'Home', frontmatter: {} }),
    ).toThrow('domain/slug');
  });
});
