#!/usr/bin/env bun

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import {
  buildEntryHead,
  frontmatterValues,
  type EntryHeadLang,
} from '../site/src/lib/entryHead';

type Frontmatter = Record<string, unknown>;

export interface EntryMetadataExpectation {
  lang: EntryHeadLang;
  route: string;
  frontmatter: Frontmatter;
  site?: string;
}

interface ParsedEntryHead {
  canonicals: string[];
  languageAlternates: Map<string, string[]>;
  resourceAlternates: Map<string, string[]>;
  finwikiMeta: Map<string, string[]>;
  jsonLd: unknown[];
}

interface ApiIndexEntry {
  slug?: unknown;
}

interface ApiIndex {
  entries?: ApiIndexEntry[];
}

const META_FIELDS = [
  'domain',
  'tags',
  'aliases',
  'sources',
  'confidence',
  'status',
  'last_updated',
  'review_by',
] as const;

function append(map: Map<string, string[]>, key: string, value: string): void {
  const values = map.get(key) ?? [];
  values.push(value);
  map.set(key, values);
}

function decodeHtmlAttribute(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, decimal: string) =>
      String.fromCodePoint(Number.parseInt(decimal, 10)),
    )
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&');
}

async function parseEntryHead(html: string): Promise<ParsedEntryHead> {
  const parsed: ParsedEntryHead = {
    canonicals: [],
    languageAlternates: new Map(),
    resourceAlternates: new Map(),
    finwikiMeta: new Map(),
    jsonLd: [],
  };
  const jsonLdText: string[] = [];

  await new HTMLRewriter()
    .on('head link', {
      element(element) {
        const rel = element.getAttribute('rel')?.toLowerCase();
        const href = decodeHtmlAttribute(element.getAttribute('href') ?? '');
        if (rel === 'canonical') parsed.canonicals.push(href);
        if (rel !== 'alternate') return;

        const hreflang = element.getAttribute('hreflang')?.toLowerCase();
        const type = element.getAttribute('type')?.toLowerCase();
        if (hreflang) append(parsed.languageAlternates, hreflang, href);
        if (type) append(parsed.resourceAlternates, type, href);
      },
    })
    .on('head meta', {
      element(element) {
        const name = element.getAttribute('name') ?? '';
        if (!name.startsWith('finwiki:')) return;
        append(parsed.finwikiMeta, name, decodeHtmlAttribute(element.getAttribute('content') ?? ''));
      },
    })
    .on('head script[type="application/ld+json"]', {
      element() {
        jsonLdText.push('');
      },
      text(chunk) {
        const index = jsonLdText.length - 1;
        if (index >= 0) jsonLdText[index] += chunk.text;
      },
    })
    .transform(new Response(html))
    .text();

  for (const text of jsonLdText) {
    try {
      parsed.jsonLd.push(JSON.parse(text));
    } catch {
      parsed.jsonLd.push({ __invalid_json_ld: text });
    }
  }
  return parsed;
}

function sameValues(actual: readonly string[], expected: readonly string[]): boolean {
  const left = [...new Set(actual)].sort();
  const right = [...new Set(expected)].sort();
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function articleFrom(values: unknown[]): Record<string, unknown> | null {
  for (const value of values) {
    const candidates = Array.isArray(value) ? value : [value];
    for (const candidate of candidates) {
      if (!candidate || typeof candidate !== 'object') continue;
      const record = candidate as Record<string, unknown>;
      const types = Array.isArray(record['@type']) ? record['@type'] : [record['@type']];
      if (types.includes('Article')) return record;

      const graph = Array.isArray(record['@graph']) ? record['@graph'] : [];
      const nested = articleFrom(graph);
      if (nested) return nested;
    }
  }
  return null;
}

function recordId(value: unknown): string {
  if (!value || typeof value !== 'object') return '';
  return String((value as Record<string, unknown>)['@id'] ?? '');
}

function additionalProperties(value: unknown): Map<string, string[]> {
  const properties = new Map<string, string[]>();
  if (!Array.isArray(value)) return properties;
  for (const item of value) {
    if (!item || typeof item !== 'object') continue;
    const record = item as Record<string, unknown>;
    const name = String(record.name ?? '');
    if (!name) continue;
    properties.set(name, frontmatterValues(record.value));
  }
  return properties;
}

export async function auditEntryHtml(
  html: string,
  expectation: EntryMetadataExpectation,
): Promise<string[]> {
  const issues: string[] = [];
  const expected = buildEntryHead({
    lang: expectation.lang,
    route: expectation.route,
    title: 'audit placeholder',
    frontmatter: expectation.frontmatter,
    site: expectation.site,
  });
  const parsed = await parseEntryHead(html);

  if (!sameValues(parsed.canonicals, [expected.canonical])) {
    issues.push(`canonical expected=${expected.canonical} actual=${JSON.stringify(parsed.canonicals)}`);
  }
  for (const hreflang of ['ja', 'en', 'x-default'] as const) {
    const actual = parsed.languageAlternates.get(hreflang) ?? [];
    const expectedUrl = expected.languageAlternates[hreflang];
    if (!sameValues(actual, [expectedUrl])) {
      issues.push(`hreflang=${hreflang} expected=${expectedUrl} actual=${JSON.stringify(actual)}`);
    }
  }
  for (const [type, expectedUrl] of [
    ['application/json', expected.resourceAlternates.api],
    ['text/markdown', expected.resourceAlternates.markdown],
  ] as const) {
    const actual = parsed.resourceAlternates.get(type) ?? [];
    if (!sameValues(actual, [expectedUrl])) {
      issues.push(`alternate type=${type} expected=${expectedUrl} actual=${JSON.stringify(actual)}`);
    }
  }

  for (const field of META_FIELDS) {
    const expectedValues =
      field === 'domain'
        ? expected.finwikiMeta
            .filter(({ name }) => name === 'finwiki:domain')
            .map(({ content }) => content)
        : frontmatterValues(expectation.frontmatter[field]);
    const actual = parsed.finwikiMeta.get(`finwiki:${field}`) ?? [];
    if (field === 'aliases' || field === 'sources') {
      if ((expectedValues.length > 0) !== (actual.length > 0)) {
        issues.push(`meta finwiki:${field} presence does not match declared frontmatter`);
      }
      continue;
    }
    if (!sameValues(actual, expectedValues)) {
      issues.push(
        `meta finwiki:${field} expected=${JSON.stringify(expectedValues)} actual=${JSON.stringify(actual)}`,
      );
    }
  }

  const article = articleFrom(parsed.jsonLd);
  if (!article) {
    issues.push('schema.org Article JSON-LD is missing or invalid');
    return issues;
  }
  if (article['@context'] !== 'https://schema.org') issues.push('Article @context is not schema.org');
  if (article.url !== expected.canonical) issues.push(`Article url is not ${expected.canonical}`);
  if (article['@id'] !== `${expected.canonical}#article`) {
    issues.push(`Article @id is not ${expected.canonical}#article`);
  }
  if (article.inLanguage !== expectation.lang) {
    issues.push(`Article inLanguage is not ${expectation.lang}`);
  }
  if (!String(article.headline ?? '').trim()) issues.push('Article headline is empty');
  if (recordId(article.mainEntityOfPage) !== expected.canonical) {
    issues.push(`Article mainEntityOfPage is not ${expected.canonical}`);
  }

  for (const [field, property] of [
    ['tags', 'keywords'],
    ['aliases', 'alternateName'],
    ['sources', 'citation'],
  ] as const) {
    const expectedValues = parsed.finwikiMeta.get(`finwiki:${field}`) ?? [];
    const actual = frontmatterValues(article[property]);
    if (!sameValues(actual, expectedValues)) {
      issues.push(
        `Article ${property} expected=${JSON.stringify(expectedValues)} actual=${JSON.stringify(actual)}`,
      );
    }
  }

  const properties = additionalProperties(article.additionalProperty);
  for (const [name, values] of parsed.finwikiMeta) {
    const actual = properties.get(name) ?? [];
    if (!sameValues(actual, values)) {
      issues.push(
        `Article additionalProperty ${name} expected=${JSON.stringify(values)} actual=${JSON.stringify(actual)}`,
      );
    }
  }
  return issues;
}

async function readJson(pathname: string): Promise<unknown> {
  return JSON.parse(await readFile(pathname, 'utf8'));
}

async function main(): Promise<number> {
  if (process.argv.length > 3) {
    console.error('usage: bun tools/entry_metadata_audit.ts [site_dist]');
    return 2;
  }

  const root = path.resolve(import.meta.dir, '..');
  const dist = path.resolve(process.argv[2] ?? path.join(root, 'site', 'dist'));
  const apiIndex = (await readJson(path.join(root, 'api', 'entries', 'index.json'))) as ApiIndex;
  const routes = (Array.isArray(apiIndex.entries) ? apiIndex.entries : [])
    .map((entry) => String(entry.slug ?? '').replace(/\\/g, '/'))
    .filter((slug) => slug.includes('/') && !/\/INDEX$/i.test(slug))
    .sort((left, right) => left.localeCompare(right, 'en'));

  const findings: string[] = [];
  let checked = 0;
  const jobs = routes.flatMap((sourceRoute) =>
    (['ja', 'en'] as const).map((lang) => async () => {
      const route = sourceRoute.toLowerCase();
      const htmlPath = path.join(dist, lang, ...route.split('/'), 'index.html');
      const apiPath = path.join(root, 'api', 'entries', ...sourceRoute.split('/')) + '.json';
      try {
        const [html, apiRecord] = await Promise.all([
          readFile(htmlPath, 'utf8'),
          readJson(apiPath) as Promise<{ frontmatter?: Frontmatter }>,
        ]);
        const issues = await auditEntryHtml(html, {
          lang,
          route,
          frontmatter: apiRecord.frontmatter ?? {},
        });
        return { path: path.relative(dist, htmlPath), issues };
      } catch (error) {
        return {
          path: path.relative(dist, htmlPath),
          issues: [error instanceof Error ? error.message : String(error)],
        };
      }
    }),
  );

  const batchSize = 32;
  for (let index = 0; index < jobs.length; index += batchSize) {
    const results = await Promise.all(jobs.slice(index, index + batchSize).map((job) => job()));
    for (const result of results) {
      checked += 1;
      for (const issue of result.issues) findings.push(`${result.path}: ${issue}`);
    }
  }

  console.log(`checked=${checked} entry_metadata_issues=${findings.length}`);
  for (const finding of findings.slice(0, 100)) console.log(finding);
  if (findings.length > 100) console.log(`... ${findings.length - 100} more issue(s)`);
  return findings.length === 0 ? 0 : 1;
}

if (import.meta.main) {
  process.exit(await main());
}
