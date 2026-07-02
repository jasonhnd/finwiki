import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { ENTRY_DOMAIN_DIRS, resolveWiki } from './siteIndex.mjs';

const SITE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(SITE_ROOT, '..');
const WIKILINK_RE = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

let reverseLinkIndex = null;

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

function walk(dir, rel = '') {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const nextRel = rel ? `${rel}/${entry.name}` : entry.name;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(fullPath, nextRel));
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'INDEX.md') {
      out.push(nextRel);
    }
  }
  return out;
}

function stripFrontmatter(text) {
  const match = String(text ?? '').match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? text.slice(match[0].length) : String(text ?? '');
}

function resolvedWikilinkTargets(markdown) {
  const targets = new Set();
  const body = stripFrontmatter(markdown);
  let match;
  WIKILINK_RE.lastIndex = 0;

  while ((match = WIKILINK_RE.exec(body))) {
    const resolved = normalizeRoute(resolveWiki(match[1]));
    if (resolved) targets.add(resolved);
  }

  return targets;
}

function buildReverseLinkIndex() {
  const index = new Map();

  for (const domain of ENTRY_DOMAIN_DIRS) {
    const domainRoot = path.join(REPO_ROOT, domain);
    if (!existsSync(domainRoot)) continue;

    for (const rel of walk(domainRoot)) {
      const fromRoute = normalizeRoute(`${domain}/${rel}`);
      let text = '';
      try {
        text = readFileSync(path.join(domainRoot, rel), 'utf8');
      } catch {
        continue;
      }

      for (const targetRoute of resolvedWikilinkTargets(text)) {
        if (!targetRoute || targetRoute === fromRoute) continue;
        if (!index.has(targetRoute)) index.set(targetRoute, new Set());
        index.get(targetRoute).add(fromRoute);
      }
    }
  }

  return new Map(
    [...index.entries()]
      .map(([route, fromRoutes]) => [route, [...fromRoutes].sort((a, b) => a.localeCompare(b, 'en'))])
      .sort(([a], [b]) => a.localeCompare(b, 'en')),
  );
}

export function backlinksForRoute(route) {
  if (!reverseLinkIndex) reverseLinkIndex = buildReverseLinkIndex();
  return reverseLinkIndex.get(normalizeRoute(route)) ?? [];
}

