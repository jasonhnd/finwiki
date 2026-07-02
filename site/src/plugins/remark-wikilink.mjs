import path from 'node:path';
import { visit } from 'unist-util-visit';
import { entryPreviewPayload } from '../lib/entryPreviewIndex.mjs';
import { localizedTitle, resolveWiki, wikiTargetKind } from '../lib/siteIndex.mjs';

const RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const SITE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(SITE_ROOT, '..');

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
  return toPosix(value).replace(/\.md$/i, '').toLowerCase();
}

function titleCaseToken(token) {
  const upper = new Set(['ai', 'api', 'atm', 'bft', 'bpo', 'ccip', 'cctp', 'dlt', 'fg', 'fx', 'gmo', 'hd', 'ibc', 'ipo', 'ir', 'jcb', 'jpx', 'jsf', 'l1', 'l2', 'llm', 'mufg', 'nft', 'odx', 'sbi', 'smbc', 'spv', 'stb', 'ui', 'vasp']);
  const lower = token.toLowerCase();
  if (upper.has(lower)) return lower.toUpperCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
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

function japaneseCount(value) {
  return (String(value).match(/[\u3040-\u30ff\u3400-\u9fff]/g) ?? []).length;
}

function asciiLetterCount(value) {
  return (String(value).match(/[A-Za-z]/g) ?? []).length;
}

function cleanLocalizedTitle(lang, route, localized) {
  const value = String(localized ?? '').trim();
  if (!value) return null;
  if (lang === 'en' && japaneseCount(value) > 0) return routeLabel(route) || null;
  return value;
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

function localizedLabelFor(lang, route, label) {
  const localized = localizedTitle(lang, route);
  if (lang === 'ja') return shouldUseJapaneseLabel(label, localized) ? localized : null;
  if (japaneseCount(label) === 0) return null;
  const cleaned = cleanLocalizedTitle(lang, route, localized);
  if (cleaned) return cleaned;
  return routeLabel(route) || null;
}

function textContent(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(textContent).join('');
  return '';
}

function setText(node, value) {
  node.children = [{ type: 'text', value }];
}

function routeFromMeta(meta) {
  if (!meta || typeof meta !== 'object') return '';
  if (meta.source) return routePath(meta.source);
  if (meta.domain && meta.slug) return routePath(`${meta.domain}/${meta.slug}`);
  return '';
}

function routeFromValue(file) {
  const value = String(file?.value ?? '');
  if (!value.startsWith('---')) return '';

  const source = value.match(/^source:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1];
  if (source) return routePath(source);

  const domain = value.match(/^domain:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1];
  const slug = value.match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1];
  if (domain && slug) return routePath(`${domain}/${slug}`);

  return '';
}

function currentEntryId(file) {
  const fromMeta =
    routeFromMeta(file?.data?.astro?.frontmatter) ||
    routeFromMeta(file?.data?.frontmatter) ||
    routeFromMeta(file?.data?.matter) ||
    routeFromMeta(file?.data);
  if (fromMeta) return fromMeta;

  const fromValue = routeFromValue(file);
  if (fromValue) return fromValue;

  const rawPath = file?.path || file?.history?.[0] || '';
  if (!rawPath) return '';
  const normalized = toPosix(path.resolve(rawPath));

  const i18nMarker = '/site/src/content/i18n/';
  const i18nIndex = normalized.indexOf(i18nMarker);
  if (i18nIndex !== -1) {
    const rel = routePath(normalized.slice(i18nIndex + i18nMarker.length));
    return rel.replace(/^(?:ja|en)\//, '');
  }

  const generatedMarker = '/site/src/content/entries/';
  const generatedIndex = normalized.indexOf(generatedMarker);
  if (generatedIndex !== -1) {
    return routePath(normalized.slice(generatedIndex + generatedMarker.length));
  }

  const repoRelative = toPosix(path.relative(REPO_ROOT, normalized));
  if (repoRelative && !repoRelative.startsWith('..') && !repoRelative.startsWith('site/')) {
    return routePath(repoRelative);
  }
  return '';
}

function currentLang(file) {
  const rawPath = file?.path || file?.history?.[0] || '';
  const normalized = toPosix(rawPath);
  const match = normalized.match(/\/site\/src\/content\/i18n\/(ja|en)\//);
  return match?.[1] || 'ja';
}

function relativeHref(fromId, resolvedPath) {
  const fromDepth = fromId ? fromId.split('/').filter(Boolean).length : 0;
  const prefix = '../'.repeat(Math.max(fromDepth, 1));
  const target = routePath(resolvedPath);
  if (target.includes('#')) {
    return `${prefix}${target}`;
  }
  return `${prefix}${target}/`;
}

function previewAttrs(resolvedPath) {
  const payload = entryPreviewPayload(resolvedPath);
  if (!payload) return '';

  const attrs = [`data-wl-route="${esc(payload.route)}"`];
  for (const lang of ['ja', 'en']) {
    const preview = payload[lang];
    if (!preview) continue;
    attrs.push(`data-wl-title-${lang}="${esc(preview.title)}"`);
    attrs.push(`data-wl-lead-${lang}="${esc(preview.lead)}"`);
    attrs.push(`data-wl-domain-${lang}="${esc(preview.domain)}"`);
  }
  return attrs.length ? ` ${attrs.join(' ')}` : '';
}

function wikilinkHtml(target, label, fromId, lang) {
  const resolved = resolveWiki(target);
  const safeLabel = resolved ? localizedLabelFor(lang, resolved, label) || label : label;
  const kind = resolved ? wikiTargetKind(fromId, resolved) : 'route';
  const kindAttrs = ` data-wl-kind="${esc(kind)}"${resolved ? previewAttrs(resolved) : ''}`;
  if (resolved && fromId) {
    return `<a class="wl wl--${esc(kind)}" href="${esc(relativeHref(fromId, resolved))}" data-wl="${esc(resolved)}"${kindAttrs}>${esc(safeLabel)}</a>`;
  }
  if (resolved) {
    return `<a class="wl wl--${esc(kind)}" href="/ja/${esc(routePath(resolved))}/" data-wl="${esc(resolved)}"${kindAttrs}>${esc(safeLabel)}</a>`;
  }
  return `<span class="wl wl-broken" title="${esc(target)}">${esc(safeLabel)}</span>`;
}

function wikilinkParts(value, fromId, lang) {
  const source = String(value ?? '');
  const out = [];
  let last = 0;
  let match;
  RE.lastIndex = 0;

  while ((match = RE.exec(source))) {
    if (match.index > last) {
      out.push({ type: 'text', value: source.slice(last, match.index) });
    }
    const target = match[1].trim();
    const label = (match[2] ?? target.split('/').pop() ?? target).trim();
    out.push({ type: 'html', value: wikilinkHtml(target, label, fromId, lang) });
    last = match.index + match[0].length;
  }

  if (!out.length) return null;
  if (last < source.length) {
    out.push({ type: 'text', value: source.slice(last) });
  }
  return out;
}

function wikilinkHtmlString(value, fromId, lang) {
  const parts = wikilinkParts(value, fromId, lang);
  if (!parts) return esc(value);
  return parts.map((part) => (part.type === 'html' ? part.value : esc(part.value))).join('');
}

function repairSplitTableWikilinks(tree) {
  visit(tree, 'tableRow', (row) => {
    if (!Array.isArray(row.children)) return;

    for (let index = 0; index < row.children.length - 1; index += 1) {
      const current = textContent(row.children[index]);
      const open = current.lastIndexOf('[[');
      if (open === -1 || current.slice(open).includes(']]')) continue;

      const target = current.slice(open + 2).trim();
      if (!target || target.includes('|') || /\s/.test(target)) continue;

      const next = textContent(row.children[index + 1]);
      const close = next.indexOf(']]');
      if (close === -1) continue;

      const label = next.slice(0, close).trim();
      if (!label) continue;

      const merged = `${current.slice(0, open)}[[${target}|${label}]]${next.slice(close + 2)}`;
      setText(row.children[index], merged);
      row.children.splice(index + 1, 1);
      index -= 1;
    }
  });
}

export default function remarkWikilink() {
  return (tree, file) => {
    const fromId = currentEntryId(file);
    const lang = currentLang(file);
    repairSplitTableWikilinks(tree);

    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null || !node.value.includes('[[')) return;
      const out = wikilinkParts(node.value, fromId, lang);
      if (!out) return;
      parent.children.splice(index, 1, ...out);
    });

    visit(tree, 'code', (node, index, parent) => {
      const value = String(node.value ?? '');
      if (!parent || index == null || !value.includes('[[')) return;
      const codeLang = esc(node.lang || 'plaintext');
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<pre class="astro-code wl-code" tabindex="0" data-language="${codeLang}"><code>${wikilinkHtmlString(value, fromId, lang)}</code></pre>`,
      });
    });
  };
}
