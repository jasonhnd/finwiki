import type { Lang } from '../i18n/ui';

type EntryLike = {
  id: string;
  data?: Record<string, unknown>;
};

function normalizeRoute(value: unknown): string {
  return String(value ?? '')
    .replace(/\\/g, '/')
    .replace(/\.md$/i, '')
    .replace(/\/INDEX$/i, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();
}

function normalizeDomain(value: unknown): string {
  return normalizeRoute(value).split('/').filter(Boolean)[0] ?? '';
}

export function entryRoute(entry: EntryLike): string {
  const id = normalizeRoute(entry.id);
  if (id.includes('/')) return id;

  const domain = normalizeDomain(entry.data?.domain);
  const slug = normalizeRoute(entry.data?.slug ?? id);

  if (!domain) return slug || id;
  if (!slug || slug === domain) return domain;
  if (slug.startsWith(`${domain}/`)) return slug;
  return `${domain}/${slug}`;
}

export function entryDomain(entry: EntryLike): string {
  return normalizeDomain(entry.data?.domain) || entryRoute(entry).split('/')[0] || '';
}

export function i18nEntryId(lang: Lang | string, entry: EntryLike): string {
  return `${lang}/${entryRoute(entry)}`;
}

export function compareEntryRoute(left: EntryLike, right: EntryLike): number {
  return entryRoute(left).localeCompare(entryRoute(right));
}
