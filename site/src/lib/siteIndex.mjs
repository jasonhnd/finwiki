import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const SITE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(SITE_ROOT, '..');

const ENTRY_DOMAIN_DIRS = [
  'agent-economy',
  'banking',
  'business',
  'corporate-strategy',
  'derivatives',
  'exchanges',
  'finance',
  'fintech',
  'governance',
  'insurance',
  'JapanFG',
  'loyalty',
  'manufacturing',
  'money-market',
  'payments',
  'policy-finance',
  'real-estate-finance',
  'retail',
  'securities',
  'security',
  'structured-finance',
  'systems',
  'trade',
];

let map = null;

function toPosix(value) {
  return String(value).replace(/\\/g, '/');
}

function routePath(value) {
  return toPosix(value).replace(/\.md$/i, '').toLowerCase();
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

function parseAliases(text) {
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return [];

  const values = [];
  const inline = frontmatter[1].match(/^aliases:\s*\[([^\]]*)\]/m);
  if (inline) values.push(...inline[1].split(','));

  const block = frontmatter[1].match(/^aliases:\s*\n((?:[ \t]*-[ \t]*.+\n?)+)/m);
  if (block) {
    for (const line of block[1].split('\n')) {
      const match = line.match(/^[ \t]*-[ \t]*(.+?)[ \t]*$/);
      if (match) values.push(match[1]);
    }
  }

  return values
    .map((item) => item.trim().replace(/^["']|["']$/g, '').toLowerCase())
    .filter(Boolean);
}

function register(index, key, target) {
  if (!key) return;
  const normalized = String(key).trim().toLowerCase();
  if (normalized && !index.has(normalized)) index.set(normalized, target);
}

function build() {
  const index = new Map();
  for (const domain of ENTRY_DOMAIN_DIRS) {
    const domainRoot = path.join(REPO_ROOT, domain);
    if (!existsSync(domainRoot)) continue;

    for (const rel of walk(domainRoot)) {
      const sourcePath = `${domain}/${rel}`;
      const target = routePath(sourcePath);
      const stem = target.split('/').pop();
      register(index, target, target);
      register(index, sourcePath.replace(/\.md$/i, ''), target);
      register(index, stem, target);

      try {
        const text = readFileSync(path.join(domainRoot, rel), 'utf8');
        for (const alias of parseAliases(text)) {
          register(index, alias, target);
        }
      } catch {
        // Ignore unreadable files; the audit gate catches real corpus issues.
      }
    }
  }
  return index;
}

export function resolveWiki(target) {
  if (!map) map = build();
  const raw = String(target || '').trim();
  if (!raw) return null;

  const normalized = raw.split('|', 1)[0].split('#', 1)[0].trim();
  const indexMatch = normalized.match(/^([^/]+)(?:\/.*)?\/INDEX$/i);
  if (indexMatch) {
    return `domains/${indexMatch[1].toLowerCase()}`;
  }

  const key = normalized.toLowerCase();
  return map.get(key) ?? map.get(key.split('/').pop()) ?? null;
}
