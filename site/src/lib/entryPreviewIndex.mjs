import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { domainFromRoute, localizedDomainTitle, localizedTitle } from './siteIndex.mjs';

const SITE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(SITE_ROOT, '..');
const LANGS = ['ja', 'en'];

const ENTRY_DOMAIN_DIRS = [
  'agent-economy',
  'asset-managers',
  'banking',
  'business',
  'card-issuers',
  'consumer-finance',
  'cooperative-banks',
  'corporate-strategy',
  'derivatives',
  'exchanges',
  'finance',
  'financial-conglomerates',
  'financial-licenses',
  'financial-regulators',
  'fintech',
  'foreign-financial-institutions',
  'insurance',
  'JapanFG',
  'leasing-firms',
  'life-insurers',
  'loyalty',
  'manufacturer-finance',
  'megabanks',
  'money-market',
  'non-life-insurers',
  'non-profit',
  'payment-firms',
  'payments',
  'policy-finance',
  'real-estate-finance',
  'regional-banks',
  'retail',
  'securities',
  'securities-firms',
  'security',
  'structured-finance',
  'systems',
  'trade',
  'trading-company-finance',
  'trust-banks',
];

const markdownMaps = new Map();
const previewCache = new Map();
const leadCache = new Map();

function toPosix(value) {
  return String(value).replace(/\\/g, '/');
}

function routePath(value) {
  return toPosix(value)
    .replace(/\.md$/i, '')
    .replace(/\/INDEX$/i, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();
}

function walk(dir, rel = '') {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const nextRel = rel ? `${rel}/${entry.name}` : entry.name;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(fullPath, nextRel));
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'INDEX.md') {
      out.push([routePath(nextRel), fullPath]);
    }
  }
  return out;
}

function canonicalMarkdownMap() {
  const key = 'canonical';
  if (markdownMaps.has(key)) return markdownMaps.get(key);

  const map = new Map();
  for (const domain of ENTRY_DOMAIN_DIRS) {
    const domainRoot = path.join(REPO_ROOT, domain);
    if (!existsSync(domainRoot)) continue;
    for (const [route, fullPath] of walk(domainRoot, domain)) {
      if (!map.has(route)) map.set(route, fullPath);
    }
  }
  markdownMaps.set(key, map);
  return map;
}

function localizedMarkdownMap(lang) {
  const safeLang = LANGS.includes(lang) ? lang : 'ja';
  const key = `i18n:${safeLang}`;
  if (markdownMaps.has(key)) return markdownMaps.get(key);

  const root = path.join(SITE_ROOT, 'src', 'content', 'i18n', safeLang);
  const map = new Map(existsSync(root) ? walk(root) : []);
  markdownMaps.set(key, map);
  return map;
}

function readMarkdownForRoute(lang, route) {
  const normalized = routePath(route);
  if (!normalized || normalized.startsWith('domains/')) return '';
  const localized = localizedMarkdownMap(lang).get(normalized);
  const canonical = canonicalMarkdownMap().get(normalized);
  const file = localized || canonical;
  if (!file) return '';

  try {
    return readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function stripFrontmatter(text) {
  const match = String(text ?? '').match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? text.slice(match[0].length) : String(text ?? '');
}

function cleanWikilinkTarget(value) {
  const route = routePath(value).split('#', 1)[0];
  const stem = route.split('/').filter(Boolean).pop() || value;
  return stem.replace(/[-_]+/g, ' ');
}

export function cleanExcerpt(value) {
  return String(value ?? '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, (_match, target) => cleanWikilinkTarget(target))
    .replace(/\^\[[^\]\r\n]+\]/g, '')
    .replace(/\[source:[^\]\r\n]+\]/gi, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/[*_~]+/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateExcerpt(value, maxLength) {
  const clean = cleanExcerpt(value);
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength).replace(/[\s、。，,.。:：;；-]+$/g, '')}...`;
}

export function resolveEntryLead(lang, route, maxLength = 190) {
  const safeLang = LANGS.includes(lang) ? lang : 'ja';
  const normalized = routePath(route);
  const cacheKey = `${safeLang}:${normalized}:${maxLength}`;
  if (leadCache.has(cacheKey)) return leadCache.get(cacheKey);

  const body = stripFrontmatter(readMarkdownForRoute(safeLang, normalized));
  const paragraphs = [];
  let current = [];
  let inFence = false;

  for (const line of body.split(/\r?\n/)) {
    const stripped = line.trim();
    if (stripped.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!stripped) {
      if (current.length) {
        paragraphs.push(current.join(' '));
        current = [];
      }
      continue;
    }
    if (/^[#|>\-*<]/.test(stripped)) continue;
    current.push(stripped);
  }

  if (current.length) paragraphs.push(current.join(' '));

  const lead = paragraphs.map((paragraph) => truncateExcerpt(paragraph, maxLength)).find((paragraph) => paragraph.length >= 32) || '';
  leadCache.set(cacheKey, lead);
  return lead;
}

function routeLabel(route) {
  const stem = routePath(route).split('/').filter(Boolean).pop() || route;
  return stem
    .split(/[-_]+/)
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}

function domainLead(lang, domain) {
  const name = localizedDomainTitle(lang, domain);
  if (lang === 'en') return `Domain index for ${name}.`;
  return `${name} の領域インデックスです。`;
}

export function localizedEntryPreview(lang, route) {
  const safeLang = LANGS.includes(lang) ? lang : 'ja';
  const normalized = routePath(route);
  const cacheKey = `${safeLang}:${normalized}`;
  if (previewCache.has(cacheKey)) return previewCache.get(cacheKey);

  const domain = domainFromRoute(normalized);
  const isDomainRoute = normalized.startsWith('domains/');
  const title = localizedTitle(safeLang, normalized) || (isDomainRoute && domain ? localizedDomainTitle(safeLang, domain) : '') || routeLabel(normalized);
  const lead = isDomainRoute ? domainLead(safeLang, domain) : resolveEntryLead(safeLang, normalized);
  const preview = title && lead
    ? {
        title,
        lead,
        domain: domain ? localizedDomainTitle(safeLang, domain) : '',
        route: normalized,
      }
    : null;

  previewCache.set(cacheKey, preview);
  return preview;
}

export function entryPreviewPayload(route) {
  const normalized = routePath(route);
  if (!normalized) return null;
  const ja = localizedEntryPreview('ja', normalized);
  const en = localizedEntryPreview('en', normalized);
  if (!ja && !en) return null;
  return { route: normalized, ja, en };
}
