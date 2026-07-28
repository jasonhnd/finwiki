export type EntryHeadLang = 'ja' | 'en';

export interface FinWikiMetaTag {
  name: string;
  content: string;
}

export interface EntryHeadMetadata {
  canonical: string;
  languageAlternates: Record<EntryHeadLang | 'x-default', string>;
  resourceAlternates: {
    api: string;
    markdown: string;
  };
  finwikiMeta: FinWikiMetaTag[];
  jsonLd: Record<string, unknown>;
}

interface EntryHeadInput {
  lang: EntryHeadLang;
  route: string;
  title: unknown;
  description?: unknown;
  frontmatter?: Record<string, unknown>;
  site?: string | URL | null;
}

const DEFAULT_SITE = 'https://finwiki.zksc.io/';
const SCALAR_FIELDS = ['domain', 'confidence', 'status', 'last_updated', 'review_by'] as const;
const LIST_FIELDS = ['tags', 'aliases', 'sources'] as const;

function cleanRoute(value: unknown): string {
  return String(value ?? '')
    .replace(/\\/g, '/')
    .replace(/\.md$/i, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();
}

function absoluteUrl(pathname: string, site: EntryHeadInput['site']): string {
  const base = site ? new URL(String(site)) : new URL(DEFAULT_SITE);
  return new URL(pathname.replace(/^\/?/, '/'), base).href;
}

function scalar(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value).trim();
  }
  return '';
}

function objectValue(value: Record<string, unknown>): string {
  for (const key of ['url', 'href', 'source', 'title', 'name']) {
    const candidate = scalar(value[key]);
    if (candidate) return candidate;
  }
  return Object.entries(value)
    .map(([key, item]) => {
      const candidate = scalar(item);
      return candidate ? `${key}: ${candidate}` : '';
    })
    .filter(Boolean)
    .join(', ');
}

export function frontmatterValues(value: unknown): string[] {
  const raw = Array.isArray(value) ? value : value == null ? [] : [value];
  const values = raw
    .flatMap((item) => (Array.isArray(item) ? item : [item]))
    .map((item) => {
      if (item && typeof item === 'object' && !(item instanceof Date)) {
        return objectValue(item as Record<string, unknown>);
      }
      return scalar(item);
    })
    .filter(Boolean);
  return [...new Set(values)];
}

export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value)
    .replaceAll('<', '\\u003c')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
}

export function buildEntryHead({
  lang,
  route,
  title,
  description,
  frontmatter = {},
  site,
}: EntryHeadInput): EntryHeadMetadata {
  const normalizedRoute = cleanRoute(route);
  if (!normalizedRoute || !normalizedRoute.includes('/')) {
    throw new Error(`entry route must be a non-empty domain/slug path: ${String(route)}`);
  }

  const localizedUrls = {
    ja: absoluteUrl(`/ja/${normalizedRoute}/`, site),
    en: absoluteUrl(`/en/${normalizedRoute}/`, site),
  };
  const resourceAlternates = {
    api: absoluteUrl(`/api/entries/${normalizedRoute}.json`, site),
    markdown: absoluteUrl(`/${normalizedRoute}.md`, site),
  };

  const metadata = new Map<string, string[]>();
  for (const field of SCALAR_FIELDS) {
    const values = frontmatterValues(frontmatter[field]).slice(0, 1);
    if (values.length > 0) metadata.set(field, values);
  }
  for (const field of LIST_FIELDS) {
    const values = frontmatterValues(frontmatter[field]);
    if (values.length > 0) metadata.set(field, values);
  }

  const routeDomain = normalizedRoute.split('/')[0] ?? '';
  if (!metadata.has('domain') && routeDomain) metadata.set('domain', [routeDomain]);

  const finwikiMeta = [...metadata.entries()].flatMap(([name, values]) =>
    values.map((content) => ({ name: `finwiki:${name}`, content })),
  );
  const additionalProperty = [...metadata.entries()].map(([name, values]) => ({
    '@type': 'PropertyValue',
    name: `finwiki:${name}`,
    value: values.length === 1 ? values[0] : values,
  }));

  const headline = scalar(title) || normalizedRoute.split('/').at(-1) || normalizedRoute;
  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${localizedUrls[lang]}#article`,
    url: localizedUrls[lang],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': localizedUrls[lang],
    },
    headline,
    inLanguage: lang,
    isPartOf: {
      '@type': 'WebSite',
      name: 'FinWiki',
      url: absoluteUrl('/', site),
    },
  };

  const cleanDescription = scalar(description ?? frontmatter.description);
  const aliases = metadata.get('aliases') ?? [];
  const tags = metadata.get('tags') ?? [];
  const sources = metadata.get('sources') ?? [];
  const created = frontmatterValues(frontmatter.created)[0];
  const lastUpdated = metadata.get('last_updated')?.[0];
  if (cleanDescription) article.description = cleanDescription;
  if (aliases.length > 0) article.alternateName = aliases;
  if (tags.length > 0) article.keywords = tags;
  if (sources.length > 0) article.citation = sources;
  if (created) article.datePublished = created;
  if (lastUpdated) article.dateModified = lastUpdated;
  if (additionalProperty.length > 0) article.additionalProperty = additionalProperty;

  return {
    canonical: localizedUrls[lang],
    languageAlternates: {
      ...localizedUrls,
      'x-default': localizedUrls.ja,
    },
    resourceAlternates,
    finwikiMeta,
    jsonLd: article,
  };
}
