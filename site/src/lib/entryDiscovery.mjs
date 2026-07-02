import { localizedEntryPreview } from './entryPreviewIndex.mjs';
import { backlinksForRoute } from './reverseLinks.mjs';
import { resolveWiki } from './siteIndex.mjs';

const LANGS = new Set(['ja', 'en']);
const RELATED_LIMIT = 5;
const BACKLINK_LIMIT = 5;
const NEXT_LIMIT = 3;
const CANONICAL_TERMS = [
  'overview',
  'map',
  'matrix',
  'comparison',
  'system',
  'landscape',
  'operating-model',
  'registry',
  'timeline',
  'framework',
  'index',
];

let cachedSignature = '';
let cachedIndex = null;

function toPosix(value) {
  return String(value ?? '').replace(/\\/g, '/');
}

function normalizeRoute(value) {
  return toPosix(value)
    .split('#', 1)[0]
    .replace(/\.md$/i, '')
    .replace(/\/INDEX$/i, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();
}

function normalizeDomain(value) {
  return normalizeRoute(value).split('/').filter(Boolean)[0] ?? '';
}

function entryRoute(entry) {
  const id = normalizeRoute(entry?.id);
  if (id.includes('/')) return id;

  const domain = normalizeDomain(entry?.data?.domain);
  const slug = normalizeRoute(entry?.data?.slug ?? id);

  if (!domain) return slug || id;
  if (!slug || slug === domain) return domain;
  if (slug.startsWith(`${domain}/`)) return slug;
  return `${domain}/${slug}`;
}

function entryDomain(entry) {
  return normalizeDomain(entry?.data?.domain) || entryRoute(entry).split('/')[0] || '';
}

function normalizedTags(entry) {
  const tags = Array.isArray(entry?.data?.tags) ? entry.data.tags : [];
  return tags.map((tag) => String(tag).trim().toLowerCase()).filter(Boolean);
}

function canonicalScore(record) {
  const haystack = `${record.route} ${record.entry?.data?.title ?? ''}`.toLowerCase();
  return CANONICAL_TERMS.reduce(
    (score, term, index) => (haystack.includes(term) ? score + CANONICAL_TERMS.length - index : score),
    0,
  );
}

function signatureFor(entries) {
  const routes = entries.map((entry) => entryRoute(entry)).sort((a, b) => a.localeCompare(b, 'en'));
  return `${routes.length}:${routes[0] ?? ''}:${routes.at(-1) ?? ''}`;
}

function entryIndex(entries) {
  const signature = signatureFor(entries);
  if (cachedIndex && cachedSignature === signature) return cachedIndex;

  const records = entries
    .map((entry) => {
      const route = entryRoute(entry);
      const domain = entryDomain(entry);
      return {
        entry,
        route,
        domain,
        tags: normalizedTags(entry),
      };
    })
    .filter((record) => record.route && record.domain)
    .sort((a, b) => a.route.localeCompare(b.route, 'en'));

  const byRoute = new Map();
  const byDomain = new Map();
  for (const record of records) {
    if (!byRoute.has(record.route)) byRoute.set(record.route, record);
    if (!byDomain.has(record.domain)) byDomain.set(record.domain, []);
    byDomain.get(record.domain).push(record);
  }

  cachedSignature = signature;
  cachedIndex = { records, byRoute, byDomain };
  return cachedIndex;
}

function cleanRelatedTarget(value) {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    const wikilink = trimmed.match(/^\[\[([^\]]+)\]\]$/)?.[1] ?? trimmed.match(/\[\[([^\]]+)\]\]/)?.[1];
    return wikilink ?? trimmed;
  }
  if (value && typeof value === 'object') {
    return value.route ?? value.target ?? value.entry ?? value.slug ?? '';
  }
  return '';
}

function resolveCandidateRoute(target, index) {
  const cleaned = cleanRelatedTarget(target);
  const resolved = normalizeRoute(resolveWiki(cleaned));
  if (resolved && index.byRoute.has(resolved)) return resolved;

  const direct = normalizeRoute(cleaned);
  return index.byRoute.has(direct) ? direct : '';
}

function explicitRelatedRoutes(entry, index, currentRoute) {
  const related = entry?.data?.related;
  const values = Array.isArray(related) ? related : related ? [related] : [];
  const out = [];
  const seen = new Set([currentRoute]);

  for (const value of values) {
    const route = resolveCandidateRoute(value, index);
    if (!route || seen.has(route)) continue;
    seen.add(route);
    out.push(route);
  }

  return out;
}

function sortByRoute(left, right) {
  return left.route.localeCompare(right.route, 'en');
}

function sharedTagRecords(current, index, used) {
  if (!current.tags.length) return [];
  const currentTags = new Set(current.tags);
  return index.records
    .filter((record) => record.route !== current.route && !used.has(record.route))
    .map((record) => ({
      record,
      score: record.tags.reduce((count, tag) => count + (currentTags.has(tag) ? 1 : 0), 0),
      canonical: canonicalScore(record),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score || b.canonical - a.canonical || sortByRoute(a.record, b.record))
    .map((candidate) => candidate.record);
}

function siblingRecords(current, index, used) {
  return (index.byDomain.get(current.domain) ?? [])
    .filter((record) => record.route !== current.route && !used.has(record.route))
    .map((record) => ({ record, canonical: canonicalScore(record) }))
    .sort((a, b) => b.canonical - a.canonical || sortByRoute(a.record, b.record))
    .map((candidate) => candidate.record);
}

function readNextRecords(current, index, used) {
  const records = index.byDomain.get(current.domain) ?? [];
  if (records.length <= 1) return [];

  const currentIndex = records.findIndex((record) => record.route === current.route);
  return records
    .map((record, index) => ({
      record,
      distance: currentIndex === -1 ? index + 1 : (index - currentIndex + records.length) % records.length || records.length,
      canonical: canonicalScore(record),
    }))
    .filter((candidate) => candidate.record.route !== current.route && !used.has(candidate.record.route))
    .sort((a, b) => a.distance - b.distance || b.canonical - a.canonical || sortByRoute(a.record, b.record))
    .map((candidate) => candidate.record);
}

function takeRecords(records, limit, used) {
  const out = [];
  for (const record of records) {
    if (out.length >= limit) break;
    if (used.has(record.route)) continue;
    used.add(record.route);
    out.push(record);
  }
  return out;
}

function itemsForRoutes(lang, routes) {
  const safeLang = LANGS.has(lang) ? lang : 'ja';
  return routes
    .map((route) => localizedEntryPreview(safeLang, route))
    .filter((preview) => preview && preview.title && preview.lead && preview.domain && preview.route);
}

function itemsForRecords(lang, records) {
  return itemsForRoutes(lang, records.map((record) => record.route));
}

export function buildEntryDiscovery({ lang, entry, entries }) {
  const index = entryIndex(entries);
  const route = entryRoute(entry);
  const current = index.byRoute.get(route);
  if (!current) return { lanes: [] };

  const used = new Set([route]);
  const explicitRoutes = explicitRelatedRoutes(entry, index, route).slice(0, RELATED_LIMIT);
  for (const explicitRoute of explicitRoutes) used.add(explicitRoute);

  const backlinkRecords = takeRecords(
    backlinksForRoute(route).map((backlinkRoute) => index.byRoute.get(backlinkRoute)).filter(Boolean),
    BACKLINK_LIMIT,
    used,
  );

  const sharedRecords = takeRecords(sharedTagRecords(current, index, used), RELATED_LIMIT - explicitRoutes.length, used);
  const nextRecords = takeRecords(readNextRecords(current, index, used), NEXT_LIMIT, used);
  const siblingSlots = RELATED_LIMIT - explicitRoutes.length - sharedRecords.length;
  const siblingRelatedRecords = takeRecords(siblingRecords(current, index, used), Math.max(0, siblingSlots), used);

  const relatedItems = [
    ...itemsForRoutes(lang, explicitRoutes),
    ...itemsForRecords(lang, sharedRecords),
    ...itemsForRecords(lang, siblingRelatedRecords),
  ].slice(0, RELATED_LIMIT);
  const nextItems = itemsForRecords(lang, nextRecords);
  const backlinkItems = itemsForRecords(lang, backlinkRecords);

  return {
    lanes: [
      relatedItems.length ? { id: 'related', items: relatedItems } : null,
      nextItems.length ? { id: 'next', items: nextItems } : null,
      backlinkItems.length ? { id: 'backlinks', items: backlinkItems } : null,
    ].filter(Boolean),
  };
}

