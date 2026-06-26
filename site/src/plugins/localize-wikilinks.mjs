import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { localizedTitle, resolveWiki } from '../lib/siteIndex.mjs';

const LANGS = ['en', 'zh'];
const WIKILINK_JA_HREF = /<a class="wl" href="\/ja\//g;
const WIKILINK_ANCHOR = /<a class="wl" href="([^"]+)" data-wl="([^"]+)">([^<]*)<\/a>/g;
const WIKI_TARGET = '[A-Za-z0-9_./#-]+';
const SPLIT_TABLE_WIKILINK = new RegExp(`\\[\\[(${WIKI_TARGET})<\\/td><td>([^<]*?)\\]\\]`, 'g');
const COMPLETE_WIKILINK = new RegExp(`\\[\\[(${WIKI_TARGET})(?:\\\\?\\|([^\\]]+?))?\\]\\]`, 'g');
const INCOMPLETE_WIKILINK = new RegExp(`\\[\\[(${WIKI_TARGET})(?=<|\\s|$)`, 'g');
const PROVENANCE_MARKER = /\^(?:\\)?\[([^\]<\r\n]+?)(?:\\)?\]|\[source:([^\]<\r\n]+?)\]/g;
const ENCODED_MARKER_HREF = /href="([^"]*?)(?:%EF%BC%89|%E3%80%82|[)\uFF09\u3002])?%5E%5B[^"]*"/gi;
const BAD_AUTOLINK_MARKER = /<a href="([^"]*?(?:%5E%5B|\^\[)[^"]*)">([^<]*?)\^(?:\\)?\[([^\]<\r\n]+?)(?:<\/a>)\]/gi;

async function* walkHtml(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkHtml(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      yield full;
    }
  }
}

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toPosix(value) {
  return String(value).replace(/\\/g, '/');
}

function routePath(value) {
  return toPosix(value).replace(/\.md$/i, '').replace(/\/index\.html$/i, '').replace(/\/index$/i, '').toLowerCase();
}

function routeFromHtmlFile(root, lang, file) {
  const rel = routePath(path.relative(path.join(root, lang), file));
  return rel === 'index.html' ? '' : rel;
}

function relativeHref(fromRoute, resolvedPath) {
  const fromDepth = fromRoute ? fromRoute.split('/').filter(Boolean).length : 0;
  const prefix = '../'.repeat(Math.max(fromDepth, 1));
  const target = routePath(resolvedPath);
  if (target.includes('#')) return `${prefix}${target}`;
  return `${prefix}${target}/`;
}

function routeLabel(route) {
  const stem = String(route ?? '')
    .split('#', 1)[0]
    .split('/')
    .filter(Boolean)
    .pop();
  if (!stem) return '';
  return stem.split(/[-_]+/).filter(Boolean).map(titleCaseToken).join(' ');
}

function renderedWikilink(target, label, lang, fromRoute) {
  const rawTarget = String(target ?? '').trim();
  const resolved = resolveWiki(rawTarget);
  const cleanLabel = String(label ?? '').replace(/<[^>]+>/g, '').trim();
  const localized = resolved ? cleanLocalizedTitle(lang, resolved, localizedTitle(lang, resolved)) : null;
  const safeLabel = cleanLabel || localized || routeLabel(rawTarget) || rawTarget;
  if (!resolved) return `<span class="wl wl-broken" title="${esc(rawTarget)}">${esc(safeLabel)}</span>`;
  const href = fromRoute ? relativeHref(fromRoute, resolved) : `/${lang}/${routePath(resolved)}/`;
  return `<a class="wl" href="${esc(href)}" data-wl="${esc(resolved)}">${esc(safeLabel)}</a>`;
}

function cleanMarkerHref(value) {
  return String(value ?? '')
    .replace(/(?:%EF%BC%89|%E3%80%82|[)\uFF09\u3002])?%5E%5B.*$/i, '')
    .replace(/(?:%EF%BC%89|%E3%80%82|[)\uFF09\u3002])+$/i, '')
    .replace(/(?:[)\uFF09\u3002])?\^\\?\[.*$/i, '')
    .replace(/(?:[)\uFF09\u3002])+$/i, '');
}

function provenanceSource(value) {
  const raw = String(value ?? '').trim();
  const title = `Source: ${raw}`;
  if (/^https?:\/\//i.test(raw)) {
    return `<sup class="prov prov-source" title="${esc(title)}" aria-label="${esc(title)}"><a href="${esc(raw)}" target="_blank" rel="noopener noreferrer">↗</a></sup>`;
  }
  return `<sup class="prov prov-source" title="${esc(title)}" aria-label="${esc(title)}"><a href="#sources">↗</a></sup>`;
}

function provenanceMarker(payload) {
  const raw = String(payload ?? '').trim();
  const lower = raw.toLowerCase();
  if (lower.startsWith('source:')) return provenanceSource(raw.slice('source:'.length));
  if (lower.startsWith('verified-')) {
    const date = raw.slice('verified-'.length);
    const title = /^\d{4}-\d{2}-\d{2}$/.test(date) ? `Verified on ${date}` : `Verified: ${date}`;
    return `<sup class="prov prov-verified" title="${esc(title)}" aria-label="${esc(title)}">✓</sup>`;
  }
  if (lower.startsWith('extracted')) {
    const title = lower === 'extracted' ? 'Extracted from cited source' : raw;
    return `<sup class="prov prov-extracted" title="${esc(title)}" aria-label="${esc(title)}">•</sup>`;
  }
  if (lower === 'likely' || lower === 'inferred') {
    const title = lower === 'likely' ? 'Likely; source support is partial' : 'Inferred from cited sources';
    return `<sup class="prov prov-inferred" title="${esc(title)}" aria-label="${esc(title)}">•</sup>`;
  }
  if (lower === 'ambiguous' || lower.includes('needs-verification')) {
    const title = lower === 'ambiguous' ? 'Ambiguous source support' : 'Needs verification';
    return `<sup class="prov prov-ambiguous" title="${esc(title)}" aria-label="${esc(title)}">?</sup>`;
  }
  return `<sup class="prov prov-note" title="${esc(raw)}" aria-label="${esc(raw)}">•</sup>`;
}

function repairProvenanceMarkers(html) {
  let out = html.replace(BAD_AUTOLINK_MARKER, (_match, href, label, marker) => {
    const cleanedHref = cleanMarkerHref(href);
    const cleanedLabel = String(label).replace(/[)\uFF09\u3002]+$/, '');
    return `<a href="${esc(cleanedHref)}">${cleanedLabel}</a>${provenanceMarker(marker)}`;
  });

  out = out.replace(ENCODED_MARKER_HREF, (_match, href) => `href="${esc(cleanMarkerHref(href))}"`);

  let last = 0;
  let match;
  let previousWasMarker = false;
  const parts = [];
  PROVENANCE_MARKER.lastIndex = 0;
  while ((match = PROVENANCE_MARKER.exec(out))) {
    const payload = match[1] ?? (match[2] ? `source:${match[2]}` : '');
    const bareSource = !match[1] && !!match[2];
    if (bareSource && (!previousWasMarker || match.index !== last)) {
      previousWasMarker = false;
      continue;
    }
    if (match.index > last) parts.push(out.slice(last, match.index));
    parts.push(provenanceMarker(payload));
    last = match.index + match[0].length;
    previousWasMarker = true;
  }
  if (!parts.length) return out;
  if (last < out.length) parts.push(out.slice(last));
  return parts.join('').replace(/(<\/a>)\]/g, '$1');
}

function repairRenderedMarkup(html, lang, fromRoute) {
  let repairs = 0;
  let out = html;

  for (;;) {
    const next = out.replace(SPLIT_TABLE_WIKILINK, (_match, target, label) => {
      repairs += 1;
      return renderedWikilink(target, label, lang, fromRoute);
    });
    if (next === out) break;
    out = next;
  }

  out = out.replace(COMPLETE_WIKILINK, (_match, target, label) => {
    repairs += 1;
    return renderedWikilink(target, label, lang, fromRoute);
  });

  out = out.replace(INCOMPLETE_WIKILINK, (_match, target) => {
    repairs += 1;
    return renderedWikilink(target, '', lang, fromRoute);
  });

  const withProv = repairProvenanceMarkers(out);
  if (withProv !== out) repairs += 1;
  return { html: withProv, repairs };
}

function japaneseCount(value) {
  return (String(value).match(/[\u3040-\u30ff\u3400-\u9fff]/g) ?? []).length;
}

function kanaCount(value) {
  return (String(value).match(/[\u3040-\u30ff]/g) ?? []).length;
}

function asciiLetterCount(value) {
  return (String(value).match(/[A-Za-z]/g) ?? []).length;
}

function shouldUseJapaneseLabel(label, localized) {
  if (!localized || japaneseCount(localized) === 0) return false;

  const raw = label.trim();
  if (/^[A-Z0-9&.+/\- ]{2,10}$/.test(raw)) return false;

  const descriptor =
    /\b(index|structure|model|matrix|diagram|overview|comparison|landscape|stack|route|framework|gateway|history|mechanics|primer|architecture|deep[- ]?dive|case|template|operator|market|protocol)\b/i.test(raw);
  const ascii = asciiLetterCount(raw);
  const japanese = japaneseCount(raw);
  return localized.length <= 96 && (descriptor || (ascii >= 12 && ascii > japanese));
}

function titleCaseToken(token) {
  const upper = new Set(['ai', 'api', 'atm', 'bft', 'bpo', 'ccip', 'cctp', 'dlt', 'fg', 'fx', 'gmo', 'hd', 'ibc', 'ipo', 'ir', 'jcb', 'jpx', 'jsf', 'l1', 'l2', 'llm', 'mufg', 'nft', 'odx', 'sbi', 'smbc', 'spv', 'stb', 'ui', 'vasp']);
  const lower = token.toLowerCase();
  if (upper.has(lower)) return lower.toUpperCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function cleanLocalizedTitle(lang, route, localized) {
  const value = String(localized ?? '').trim();
  if (!value) return null;
  if (lang === 'en' && japaneseCount(value) > 0) return routeLabel(route) || null;
  if (lang === 'zh' && kanaCount(value) > 0) return routeLabel(route) || null;
  return value;
}

function localizedLabelFor(lang, route, label) {
  const localized = localizedTitle(lang, route);
  if (lang === 'ja') return shouldUseJapaneseLabel(label, localized) ? localized : null;
  if (japaneseCount(label) === 0) return null;
  const cleaned = cleanLocalizedTitle(lang, route, localized);
  if (cleaned) return cleaned;
  return routeLabel(route) || null;
}

async function localizeWikilinkLabels(root, lang) {
  let replacements = 0;
  let renderedRepairs = 0;
  const langRoot = path.join(root, lang);

  for await (const file of walkHtml(langRoot)) {
    const html = await readFile(file, 'utf8');
    const labeled = html.replace(WIKILINK_ANCHOR, (match, href, route, label) => {
      const localized = localizedLabelFor(lang, route, label);
      if (!localized) return match;
      replacements += 1;
      return `<a class="wl" href="${href}" data-wl="${route}">${esc(localized)}</a>`;
    });
    const repaired = repairRenderedMarkup(labeled, lang, routeFromHtmlFile(root, lang, file));
    renderedRepairs += repaired.repairs;
    const updated = repaired.html;
    if (updated !== html) await writeFile(file, updated);
  }

  return { labels: replacements, repairs: renderedRepairs };
}

export async function localizeWikilinkHrefs(distDir) {
  const root = typeof distDir === 'string' ? distDir : fileURLToPath(distDir);
  const totals = new Map();

  for (const lang of LANGS) {
    let replacements = 0;
    const langRoot = path.join(root, lang);
    for await (const file of walkHtml(langRoot)) {
      const html = await readFile(file, 'utf8');
      const updated = html.replace(WIKILINK_JA_HREF, () => {
        replacements += 1;
        return `<a class="wl" href="/${lang}/`;
      });
      if (updated !== html) await writeFile(file, updated);
    }
    totals.set(lang, replacements);
  }

  const labelTotals = new Map();
  const repairTotals = new Map();
  for (const lang of ['ja', ...LANGS]) {
    const result = await localizeWikilinkLabels(root, lang);
    labelTotals.set(lang, result.labels);
    repairTotals.set(lang, result.repairs);
  }

  console.log(
    `[finwiki] localized wikilink hrefs: ${LANGS.map((lang) => `${lang}=${totals.get(lang) ?? 0}`).join(' ')} labels: ${['ja', ...LANGS].map((lang) => `${lang}=${labelTotals.get(lang) ?? 0}`).join(' ')} rendered-repairs: ${['ja', ...LANGS].map((lang) => `${lang}=${repairTotals.get(lang) ?? 0}`).join(' ')}`,
  );
}

export default function localizeWikilinks() {
  return {
    name: 'finwiki-localize-wikilinks',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        await localizeWikilinkHrefs(dir);
      },
    },
  };
}
