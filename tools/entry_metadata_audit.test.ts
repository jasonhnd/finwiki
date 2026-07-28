import { describe, expect, test } from 'bun:test';
import { buildEntryHead, serializeJsonLd } from '../site/src/lib/entryHead';
import { auditEntryHtml } from './entry_metadata_audit';

const frontmatter = {
  domain: 'banking',
  aliases: ['Example'],
  tags: ['banking', 'settlement'],
  sources: ['https://example.com/source'],
  confidence: 'likely',
  status: 'active',
  last_updated: '2026-07-28',
  review_by: '2027-01-28',
};

function validHtml(): string {
  const head = buildEntryHead({
    lang: 'en',
    route: 'banking/example',
    title: 'Example entry',
    frontmatter,
  });
  const languageLinks = Object.entries(head.languageAlternates)
    .map(([hreflang, href]) => `<link rel="alternate" hreflang="${hreflang}" href="${href}">`)
    .join('');
  const meta = head.finwikiMeta
    .map(({ name, content }) => `<meta name="${name}" content="${content}">`)
    .join('');
  return `<!doctype html><html><head>
    <link rel="canonical" href="${head.canonical}">
    ${languageLinks}
    <link rel="alternate" type="application/json" href="${head.resourceAlternates.api}">
    <link rel="alternate" type="text/markdown" href="${head.resourceAlternates.markdown}">
    ${meta}
    <script type="application/ld+json">${serializeJsonLd(head.jsonLd)}</script>
  </head><body></body></html>`;
}

describe('built entry metadata audit', () => {
  test('accepts a route-preserving, frontmatter-backed entry head', async () => {
    await expect(
      auditEntryHtml(validHtml(), {
        lang: 'en',
        route: 'banking/example',
        frontmatter,
      }),
    ).resolves.toEqual([]);
  });

  test('rejects homepage hreflang and a missing Article contract', async () => {
    const html = validHtml()
      .replace(
        'hreflang="ja" href="https://finwiki.zksc.io/ja/banking/example/"',
        'hreflang="ja" href="https://finwiki.zksc.io/ja/"',
      )
      .replace('type="application/ld+json"', 'type="application/json"');
    const issues = await auditEntryHtml(html, {
      lang: 'en',
      route: 'banking/example',
      frontmatter,
    });
    expect(issues.some((issue) => issue.startsWith('hreflang=ja'))).toBeTrue();
    expect(issues).toContain('schema.org Article JSON-LD is missing or invalid');
  });
});
