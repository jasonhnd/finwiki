import path from 'node:path';
import { visit } from 'unist-util-visit';
import { resolveWiki } from '../lib/siteIndex.mjs';

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
    return rel.replace(/^(?:ja|en|zh)\//, '');
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

function relativeHref(fromId, resolvedPath) {
  const fromDepth = fromId ? fromId.split('/').filter(Boolean).length : 0;
  const prefix = '../'.repeat(Math.max(fromDepth, 1));
  const target = routePath(resolvedPath);
  if (target.includes('#')) {
    return `${prefix}${target}`;
  }
  return `${prefix}${target}/`;
}

export default function remarkWikilink() {
  return (tree, file) => {
    const fromId = currentEntryId(file);
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null || !node.value.includes('[[')) return;
      const out = [];
      let last = 0;
      let match;
      RE.lastIndex = 0;

      while ((match = RE.exec(node.value))) {
        if (match.index > last) {
          out.push({ type: 'text', value: node.value.slice(last, match.index) });
        }
        const target = match[1].trim();
        const label = (match[2] ?? target.split('/').pop() ?? target).trim();
        const resolved = resolveWiki(target);
        if (resolved && fromId) {
          out.push({
            type: 'html',
            value: `<a class="wl" href="${esc(relativeHref(fromId, resolved))}" data-wl="${esc(resolved)}">${esc(label)}</a>`,
          });
        } else if (resolved) {
          out.push({
            type: 'html',
            value: `<a class="wl" href="/ja/${esc(routePath(resolved))}/" data-wl="${esc(resolved)}">${esc(label)}</a>`,
          });
        } else {
          out.push({
            type: 'html',
            value: `<span class="wl wl-broken" title="${esc(target)}">${esc(label)}</span>`,
          });
        }
        last = match.index + match[0].length;
      }

      if (!out.length) return;
      if (last < node.value.length) {
        out.push({ type: 'text', value: node.value.slice(last) });
      }
      parent.children.splice(index, 1, ...out);
    });
  };
}
