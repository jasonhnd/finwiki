import { createHash } from 'node:crypto';
import { localizedEntryPreview } from './entryPreviewIndex.mjs';
import { backlinksForRoute as defaultBacklinksForRoute } from './reverseLinks.mjs';
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
let cachedGraph = null;

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

function relatedTargets(entry) {
  const related = entry?.data?.related;
  const values = Array.isArray(related) ? related : related ? [related] : [];
  return values.map((value) => cleanRelatedTarget(value)).map((value) => String(value).trim());
}

function loaderBody(entry) {
  for (const value of [entry?.body, entry?.rawBody, entry?.raw, entry?.rendered?.html]) {
    if (typeof value === 'string') return value;
  }
  return '';
}

function updateLengthPrefixed(hash, value) {
  const text = String(value ?? '');
  hash.update(`${Buffer.byteLength(text, 'utf8')}:`);
  hash.update(text);
}

export function entryDiscoverySignature(entries) {
  const descriptors = entries
    .map((entry) => ({
      route: entryRoute(entry),
      domain: entryDomain(entry),
      slug: normalizeRoute(entry?.data?.slug ?? ''),
      title: String(entry?.data?.title ?? '').trim(),
      tags: [...normalizedTags(entry)].sort((a, b) => a.localeCompare(b, 'en')),
      related: relatedTargets(entry),
      body: loaderBody(entry),
    }))
    .sort(
      (left, right) =>
        left.route.localeCompare(right.route, 'en') ||
        left.domain.localeCompare(right.domain, 'en') ||
        left.slug.localeCompare(right.slug, 'en') ||
        left.title.localeCompare(right.title, 'en'),
    );

  const hash = createHash('sha256');
  updateLengthPrefixed(hash, descriptors.length);
  for (const descriptor of descriptors) {
    updateLengthPrefixed(hash, descriptor.route);
    updateLengthPrefixed(hash, descriptor.domain);
    updateLengthPrefixed(hash, descriptor.slug);
    updateLengthPrefixed(hash, descriptor.title);
    updateLengthPrefixed(hash, descriptor.tags.length);
    for (const tag of descriptor.tags) updateLengthPrefixed(hash, tag);
    updateLengthPrefixed(hash, descriptor.related.length);
    for (const target of descriptor.related) updateLengthPrefixed(hash, target);
    updateLengthPrefixed(hash, descriptor.body);
  }
  return hash.digest('hex');
}

function canonicalScore(record) {
  const haystack = `${record.route} ${record.entry?.data?.title ?? ''}`.toLowerCase();
  return CANONICAL_TERMS.reduce(
    (score, term, index) => (haystack.includes(term) ? score + CANONICAL_TERMS.length - index : score),
    0,
  );
}

function entryIndex(entries) {
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

  return { records, byRoute, byDomain };
}

function resolveCandidateRoute(target, index) {
  const cleaned = cleanRelatedTarget(target);
  const resolved = normalizeRoute(resolveWiki(cleaned));
  if (resolved && index.byRoute.has(resolved)) return resolved;

  const direct = normalizeRoute(cleaned);
  return index.byRoute.has(direct) ? direct : '';
}

function explicitRelatedRoutes(entry, index, currentRoute) {
  const out = [];
  const seen = new Set([currentRoute]);

  for (const value of relatedTargets(entry)) {
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

function routeLanes(current, index, backlinkLookup) {
  const used = new Set([current.route]);
  const explicitRoutes = explicitRelatedRoutes(current.entry, index, current.route).slice(0, RELATED_LIMIT);
  for (const explicitRoute of explicitRoutes) used.add(explicitRoute);

  const backlinkRecords = takeRecords(
    backlinkLookup(current.route)
      .map((backlinkRoute) => index.byRoute.get(normalizeRoute(backlinkRoute)))
      .filter(Boolean),
    BACKLINK_LIMIT,
    used,
  );

  const sharedRecords = takeRecords(sharedTagRecords(current, index, used), RELATED_LIMIT - explicitRoutes.length, used);
  const nextRecords = takeRecords(readNextRecords(current, index, used), NEXT_LIMIT, used);
  const siblingSlots = RELATED_LIMIT - explicitRoutes.length - sharedRecords.length;
  const siblingRelatedRecords = takeRecords(siblingRecords(current, index, used), Math.max(0, siblingSlots), used);

  return Object.freeze({
    related: Object.freeze([
      ...explicitRoutes,
      ...sharedRecords.map((record) => record.route),
      ...siblingRelatedRecords.map((record) => record.route),
    ].slice(0, RELATED_LIMIT)),
    next: Object.freeze(nextRecords.map((record) => record.route)),
    backlinks: Object.freeze(backlinkRecords.map((record) => record.route)),
  });
}

export function buildEntryDiscoveryGraph(entries, options = {}) {
  const signature = entryDiscoverySignature(entries);
  const customBacklinkLookup = typeof options.backlinksForRoute === 'function';
  const useCache = options.cache !== false && !customBacklinkLookup;
  if (useCache && cachedGraph && cachedSignature === signature) return cachedGraph;

  const index = entryIndex(entries);
  const backlinkLookup = customBacklinkLookup ? options.backlinksForRoute : defaultBacklinksForRoute;
  const byRoute = new Map();
  for (const current of index.records) {
    if (byRoute.has(current.route)) continue;
    byRoute.set(current.route, routeLanes(current, index, backlinkLookup));
  }

  const graph = Object.freeze({ signature, byRoute });
  if (useCache) {
    cachedSignature = signature;
    cachedGraph = graph;
  }
  return graph;
}

function itemsForRoutes(lang, routes, previewForRoute) {
  const safeLang = LANGS.has(lang) ? lang : 'ja';
  return routes
    .map((route) => previewForRoute(safeLang, route))
    .filter((preview) => preview && preview.title && preview.lead && preview.domain && preview.route);
}

export function entryDiscoveryForRoute({
  lang,
  route,
  graph,
  previewForRoute = localizedEntryPreview,
}) {
  const routeSet = graph?.byRoute?.get(normalizeRoute(route));
  if (!routeSet) return { lanes: [] };

  const relatedItems = itemsForRoutes(lang, routeSet.related, previewForRoute);
  const nextItems = itemsForRoutes(lang, routeSet.next, previewForRoute);
  const backlinkItems = itemsForRoutes(lang, routeSet.backlinks, previewForRoute);

  return {
    lanes: [
      relatedItems.length ? { id: 'related', items: relatedItems } : null,
      nextItems.length ? { id: 'next', items: nextItems } : null,
      backlinkItems.length ? { id: 'backlinks', items: backlinkItems } : null,
    ].filter(Boolean),
  };
}

export function buildEntryDiscovery({
  lang,
  entry,
  entries = [],
  graph = null,
  previewForRoute = localizedEntryPreview,
}) {
  const activeGraph = graph ?? buildEntryDiscoveryGraph(entries);
  return entryDiscoveryForRoute({
    lang,
    route: entryRoute(entry),
    graph: activeGraph,
    previewForRoute,
  });
}
