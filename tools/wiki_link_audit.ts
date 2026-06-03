#!/usr/bin/env bun

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dir, "..");

const IGNORED_DIRS = new Set([
  ".git",
  ".templates",
  ".opinions",
  "docs",
  "releases",
  "tools",
  "site",
  "app",
  ".vercel",
  "_site",
  "_vercel_public",
  ".cache",
]);

const CONTROL_DOCS = new Set([
  "README.md",
  "CHANGELOG.md",
  "AGENTS.md",
  "SCHEMA.md",
  "OBSIDIAN-SETUP.md",
  "wiki-link-improvement-plan.md",
]);

const SYSTEM_KEYWORDS = [
  "act",
  "boundary",
  "clearing",
  "framework",
  "index",
  "law",
  "license",
  "market",
  "policy",
  "regulation",
  "registry",
  "rule",
  "settlement",
  "system",
] as const;

const DOMAIN_SYSTEM_CANDIDATES: Record<string, string[]> = {
  JapanFG: [
    "JapanFG/INDEX",
    "banking/INDEX",
    "securities/INDEX",
    "payments/INDEX",
    "insurance/INDEX",
    "policy-finance/INDEX",
    "JapanFG/legal-financial-licenses/INDEX",
  ],
  banking: [
    "banking/INDEX",
    "banking/cooperative-banking-japan",
    "banking/regional-bank-consolidation-pattern",
  ],
  payments: [
    "payments/INDEX",
    "payments/funds-transfer-vs-prepaid-boundary",
    "payments/card-acquiring-japan-stack",
    "fintech/japan-stablecoin-regulatory-landscape",
  ],
  securities: [
    "securities/INDEX",
    "securities/financial-instruments-business-operators-japan-index",
    "JapanFG/legal-financial-licenses/INDEX",
  ],
  "policy-finance": [
    "policy-finance/INDEX",
    "policy-finance/japan-policy-finance-system",
    "banking/INDEX",
  ],
  insurance: [
    "insurance/INDEX",
    "JapanFG/INDEX",
    "JapanFG/legal-financial-licenses/INDEX",
  ],
  fintech: [
    "fintech/INDEX",
    "fintech/japan-financial-regulation",
    "fintech/japan-stablecoin-regulatory-landscape",
  ],
  exchanges: [
    "exchanges/INDEX",
    "exchanges/fsa-vasp-registration-system",
    "fintech/japan-financial-regulation",
  ],
  security: [
    "security/bytecode-forensic-three-tier-verify",
    "security/fork-and-rebrand-5-layer-audit-framework",
    "systems/INDEX",
  ],
  finance: ["finance/INDEX", "securities/INDEX", "money-market/INDEX"],
  systems: [
    "systems/INDEX",
    "fintech/INDEX",
    "security/bytecode-forensic-three-tier-verify",
  ],
  "agent-economy": [
    "agent-economy/ai-agent-payment-protocols-overview",
    "payments/INDEX",
    "systems/INDEX",
    "fintech/INDEX",
  ],
  business: [
    "business/gmo-internet-group",
    "fintech/INDEX",
    "systems/INDEX",
    "JapanFG/INDEX",
  ],
  "corporate-strategy": [
    "corporate-strategy/partial-spinoff-tax-deferral",
    "business/gmo-internet-group",
    "JapanFG/INDEX",
  ],
  "non-profit": [
    "non-profit/japan-general-foundation-establishment-requirements",
    "policy-finance/INDEX",
    "JapanFG/INDEX",
  ],
  loyalty: ["loyalty/INDEX", "retail/INDEX", "payments/INDEX"],
  "manufacturer-finance": [
    "manufacturer-finance/INDEX",
    "JapanFG/INDEX",
    "business/gmo-internet-group",
  ],
  retail: ["retail/INDEX", "payments/INDEX", "loyalty/INDEX"],
  trade: ["trade/jetro-organization-structure", "policy-finance/INDEX", "JapanFG/INDEX"],
};

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type FrontmatterValue = string | string[];

type Args = {
  report?: string;
  json?: string;
  minBodyLinks: number;
  failOnIssues: boolean;
  failOnLowBodyLinks: boolean;
  unsupportedMutations: string[];
};

type WikiLink = {
  raw: string;
  target: string;
  line: number;
  resolved?: string | null;
};

type Entry = {
  path: string;
  rel: string;
  domain: string;
  title: string;
  aliases: string[];
  tags: string[];
  canonicalAnchor: string;
  body: string;
  coreBody: string;
  allLinks: WikiLink[];
  bodyLinks: WikiLink[];
  inlinks: number;
  gitState: string;
};

// Report-only canonical_anchor integrity check (proposal Phase 1, audit-only).
// Intentionally isolated from the AuditRow/issues pipeline: drift here is purely
// informational and must never affect entries_with_issues, dead_wikilink_*,
// or any exit-code path.
type CanonicalAnchorDrift = {
  rel: string;
  domain: string;
  declared: string;
  resolved: string | null;
  brokenAnchor: boolean;
  missingBodyLink: boolean;
};

type CanonicalAnchorSummary = {
  checked: number;
  drift: CanonicalAnchorDrift[];
};

type DeadLink = {
  raw: string;
  target: string;
  line: number;
};

type AuditRow = {
  path: string;
  domain: string;
  title: string;
  git_state: string;
  suggestions: string[];
  body_links: number;
  all_links: number;
  inlinks: number;
  h1: boolean;
  route: boolean;
  peer: boolean;
  system: boolean;
  dead_links: DeadLink[];
  issues: string[];
};

let cachedDomainRoutes: Record<string, string> | null = null;

function main(): number {
  const args = parseArgs(process.argv.slice(2));
  if (args.unsupportedMutations.length > 0) {
    console.error(
      `unsupported_flags=${args.unsupportedMutations.join(",")} audit-only draft intentionally omits in-place scaffold writes`,
    );
    return 2;
  }

  const entries = loadEntriesSync();
  attachResolvedLinks(entries);
  attachGitState(entries);
  const rows = audit(entries, args.minBodyLinks);
  // Report-only canonical_anchor integrity layer (does not feed `rows`/issues).
  const canonicalAnchors = auditCanonicalAnchors(entries);

  if (args.report) {
    writeMarkdownReport(
      rows,
      path.resolve(ROOT, args.report),
      args.minBodyLinks,
      canonicalAnchors,
    );
  }
  if (args.json) {
    writeFileSync(
      path.resolve(ROOT, args.json),
      `${JSON.stringify(rows, null, 2)}\n`,
      "utf8",
    );
  }

  const failures = rows.filter((row) => row.issues.length > 0);
  const deadRefs = rows.reduce((sum, row) => sum + row.dead_links.length, 0);
  const deadTargets = new Set(rows.flatMap((row) => row.dead_links.map((link) => link.target))).size;
  console.log(`entries_checked=${rows.length}`);
  console.log(`entries_with_issues=${failures.length}`);
  console.log(`dead_wikilink_references=${deadRefs}`);
  console.log(`dead_wikilink_targets=${deadTargets}`);
  console.log(`body_link_threshold=${args.minBodyLinks}`);
  if (args.report) {
    console.log(`report=${args.report}`);
  }
  // Informational only: canonical_anchor integrity never gates the release.
  console.log(`canonical_anchor_checked=${canonicalAnchors.checked}`);
  console.log(`canonical_anchor_drift=${canonicalAnchors.drift.length}`);

  if (args.failOnLowBodyLinks) {
    const lowIssue = `body_links<${args.minBodyLinks}`;
    if (rows.some((row) => row.issues.includes(lowIssue))) {
      return 1;
    }
  }
  if (args.failOnIssues && failures.length > 0) {
    return 1;
  }
  return 0;
}

function parseArgs(argv: string[]): Args {
  const args: Args = {
    minBodyLinks: 3,
    failOnIssues: false,
    failOnLowBodyLinks: false,
    unsupportedMutations: [],
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    const next = argv[index + 1];
    switch (token) {
      case "--report":
        args.report = requireValue(token, next);
        index += 1;
        break;
      case "--json":
        args.json = requireValue(token, next);
        index += 1;
        break;
      case "--min-body-links":
        args.minBodyLinks = Number.parseInt(requireValue(token, next), 10);
        index += 1;
        break;
      case "--fail-on-issues":
        args.failOnIssues = true;
        break;
      case "--fail-on-low-body-links":
        args.failOnLowBodyLinks = true;
        break;
      case "--apply-scaffold":
      case "--apply-semantic-scaffold":
        args.unsupportedMutations.push(token);
        break;
      default:
        throw new Error(`unknown argument: ${token}`);
    }
  }
  if (!Number.isInteger(args.minBodyLinks) || args.minBodyLinks < 0) {
    throw new Error(`invalid --min-body-links: ${args.minBodyLinks}`);
  }
  return args;
}

function requireValue(flag: string, value: string | undefined): string {
  if (!value || value.startsWith("--")) {
    throw new Error(`missing value for ${flag}`);
  }
  return value;
}

function loadEntriesSync(): Map<string, Entry> {
  const files = listMarkdownFilesSync(ROOT);
  const entries = new Map<string, Entry>();
  for (const filePath of files) {
    const text = readFileSync(filePath, "utf8");
    const { frontmatter, body } = parseFrontmatter(text);
    const rel = toPosix(path.relative(ROOT, filePath));
    const domain = asString(frontmatter.domain) || path.basename(path.dirname(filePath));
    const title = asString(frontmatter.title) || path.basename(filePath, ".md");
    const aliases = asList(frontmatter.aliases);
    const tags = asList(frontmatter.tags);
    const canonicalAnchor = asString(frontmatter.canonical_anchor).trim();
    const core = coreBody(body);
    entries.set(rel, {
      path: filePath,
      rel,
      domain,
      title,
      aliases,
      tags,
      canonicalAnchor,
      body,
      coreBody: core,
      allLinks: extractWikilinks(body),
      bodyLinks: extractWikilinks(core),
      inlinks: 0,
      gitState: "",
    });
  }
  return entries;
}

function listMarkdownFilesSync(root: string): string[] {
  const stack = [root];
  const files: string[] = [];
  while (stack.length > 0) {
    const current = stack.pop()!;
    const entries = readdirSyncSafe(current);
    for (const dirent of entries) {
      const fullPath = path.join(current, dirent.name);
      const relParts = toPosix(path.relative(root, fullPath)).split("/");
      if (dirent.isDirectory()) {
        if (relParts.some((part) => IGNORED_DIRS.has(part))) {
          continue;
        }
        stack.push(fullPath);
        continue;
      }
      if (!dirent.isFile() || !dirent.name.endsWith(".md")) {
        continue;
      }
      if (relParts.some((part) => IGNORED_DIRS.has(part))) {
        continue;
      }
      if (path.dirname(fullPath) === root && CONTROL_DOCS.has(dirent.name)) {
        continue;
      }
      files.push(fullPath);
    }
  }
  files.sort((left, right) => toPosix(path.relative(root, left)).localeCompare(toPosix(path.relative(root, right))));
  return files;
}

function readdirSyncSafe(dir: string): Array<{ name: string; isDirectory(): boolean; isFile(): boolean }> {
  return readdirSync(dir, { withFileTypes: true }) as Array<{
    name: string;
    isDirectory(): boolean;
    isFile(): boolean;
  }>;
}

function parseFrontmatter(text: string): {
  frontmatter: Record<string, FrontmatterValue>;
  body: string;
} {
  if (!text.startsWith("---")) {
    return { frontmatter: {}, body: text };
  }
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match || match.index !== 0) {
    return { frontmatter: {}, body: text };
  }
  const frontmatter = match[1];
  const body = text.slice(match[0].length);
  const data: Record<string, FrontmatterValue> = {};
  let currentKey: string | null = null;
  for (const line of frontmatter.split(/\r?\n/)) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      data[currentKey] = parseValue(keyMatch[2].trim());
      continue;
    }
    const listMatch = line.match(/^\s*-\s*(.*)$/);
    if (listMatch && currentKey) {
      const value = stripQuotes(listMatch[1].trim());
      const current = data[currentKey];
      if (Array.isArray(current)) {
        current.push(value);
      } else if (typeof current === "string" && current.length > 0) {
        data[currentKey] = [current, value];
      } else {
        data[currentKey] = [value];
      }
    }
  }
  return { frontmatter: data, body };
}

function parseValue(value: string): FrontmatterValue {
  if (value === "") {
    return [];
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) {
      return [];
    }
    return inner.split(",").map((part) => stripQuotes(part.trim()));
  }
  return stripQuotes(value);
}

function stripQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function coreBody(body: string): string {
  let stop = body.length;
  for (const marker of [/^##\s+Related\b/m, /^##\s+Sources\b/m, /^##\s+Source\b/m]) {
    const match = marker.exec(body);
    if (match && match.index < stop) {
      stop = match.index;
    }
  }
  return body.slice(0, stop);
}

function extractWikilinks(text: string): WikiLink[] {
  const links: WikiLink[] = [];
  let inFence = false;
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      continue;
    }
    const searchLine = line.replace(/`[^`]*`/g, "");
    const matches = searchLine.matchAll(/\[\[([^\]]+)\]\]/g);
    for (const match of matches) {
      const raw = match[1];
      let target = raw.split("|", 1)[0].split("#", 1)[0].trim();
      target = target.replace(/\\+$/g, "");
      if (!target) {
        continue;
      }
      if (
        target.startsWith("http://") ||
        target.startsWith("https://") ||
        target.startsWith("mailto:")
      ) {
        continue;
      }
      links.push({
        raw,
        target,
        line: index + 1,
      });
    }
  }
  return links;
}

function asString(value: FrontmatterValue | undefined): string {
  return typeof value === "string" ? value : "";
}

function asList(value: FrontmatterValue | undefined): string[] {
  if (Array.isArray(value)) {
    return value.filter((item) => item.length > 0);
  }
  if (typeof value === "string" && value.length > 0) {
    return [value];
  }
  return [];
}

function attachResolvedLinks(entries: Map<string, Entry>): void {
  const aliasMap = buildAliasMap(entries);
  for (const entry of entries.values()) {
    entry.allLinks = entry.allLinks.map((link) => ({
      ...link,
      resolved: resolveLink(entry, link.target, entries, aliasMap),
    }));
    entry.bodyLinks = entry.bodyLinks.map((link) => ({
      ...link,
      resolved: resolveLink(entry, link.target, entries, aliasMap),
    }));
  }
  for (const entry of entries.values()) {
    for (const link of entry.allLinks) {
      if (!link.resolved) {
        continue;
      }
      const resolved = normalizeRel(link.resolved);
      if (resolved !== entry.rel && entries.has(resolved)) {
        entries.get(resolved)!.inlinks += 1;
      }
    }
  }
}

function buildAliasMap(entries: Map<string, Entry>): Map<string, string> {
  const aliasMap = new Map<string, string>();
  for (const [rel, entry] of entries) {
    const stem = path.basename(rel, ".md");
    registerAlias(aliasMap, stem, rel);
    registerAlias(aliasMap, rel.slice(0, -3), rel);
    registerAlias(aliasMap, entry.title, rel);
    for (const alias of entry.aliases) {
      registerAlias(aliasMap, alias, rel);
    }
  }
  return aliasMap;
}

function registerAlias(aliasMap: Map<string, string>, key: string, rel: string): void {
  if (!key) {
    return;
  }
  if (!aliasMap.has(key)) {
    aliasMap.set(key, rel);
  }
  const lower = key.toLowerCase();
  if (!aliasMap.has(lower)) {
    aliasMap.set(lower, rel);
  }
}

function resolveLink(
  entry: Entry,
  target: string,
  entries: Map<string, Entry>,
  aliasMap: Map<string, string>,
): string | null {
  const normalized = stripMd(target);
  if (isExistingFile(target) || isExistingFile(normalized)) {
    return normalizeRel(normalized);
  }

  const candidates: string[] = [];
  if (normalized.includes("/")) {
    candidates.push(`${normalized}.md`, `${normalized}/INDEX.md`);
  } else {
    const parent = toPosix(path.relative(ROOT, path.dirname(entry.path))) || ".";
    candidates.push(
      `${parent}/${normalized}.md`,
      `${normalized}.md`,
      `${parent}/${normalized}/INDEX.md`,
      `${normalized}/INDEX.md`,
    );
  }

  for (const candidate of candidates) {
    const clean = normalizeRel(candidate);
    if (entries.has(clean)) {
      return clean;
    }
    if (isExistingFile(candidate)) {
      return clean;
    }
  }

  return (
    aliasMap.get(target) ??
    aliasMap.get(normalized) ??
    aliasMap.get(target.toLowerCase()) ??
    aliasMap.get(normalized.toLowerCase()) ??
    aliasMap.get(lastSlug(normalized).toLowerCase()) ??
    null
  );
}

function stripMd(value: string): string {
  return value.endsWith(".md") ? value.slice(0, -3) : value;
}

function lastSlug(value: string): string {
  const parts = value.split("/");
  return parts[parts.length - 1] ?? value;
}

function isExistingFile(relOrAbs: string): boolean {
  return existsSync(path.resolve(ROOT, relOrAbs));
}

function attachGitState(entries: Map<string, Entry>): void {
  const result = spawnSync("git", ["status", "--short"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  if (result.status !== 0 || !result.stdout) {
    return;
  }
  for (const line of result.stdout.split(/\r?\n/)) {
    if (!line.trim()) {
      continue;
    }
    const state = line.slice(0, 2).trim() || line.slice(0, 2);
    let rel = line.slice(3);
    if (rel.includes(" -> ")) {
      rel = rel.split(" -> ", 2)[1];
    }
    rel = normalizeRel(rel);
    const entry = entries.get(rel);
    if (entry) {
      entry.gitState = state;
    }
  }
}

function audit(entries: Map<string, Entry>, minBodyLinks: number): AuditRow[] {
  const rows: AuditRow[] = [];
  for (const rel of [...entries.keys()].sort()) {
    const entry = entries.get(rel)!;
    const status = entryStatus(entry, entries, minBodyLinks);
    rows.push({
      path: rel,
      domain: entry.domain,
      title: entry.title,
      git_state: entry.gitState,
      suggestions: suggestLinks(entry, entries),
      ...status,
    });
  }
  return rows;
}

// Report-only: verify each declared canonical_anchor (a) resolves to an existing
// entry via the shared alias/resolve machinery, and (b) is cross-linked from the
// declaring page's core body. Returns informational counters only; never mutates
// AuditRow.issues and never influences any exit code.
function auditCanonicalAnchors(entries: Map<string, Entry>): CanonicalAnchorSummary {
  const aliasMap = buildAliasMap(entries);
  const drift: CanonicalAnchorDrift[] = [];
  let checked = 0;
  for (const rel of [...entries.keys()].sort()) {
    const entry = entries.get(rel)!;
    const declared = entry.canonicalAnchor;
    if (!declared) {
      continue;
    }
    checked += 1;
    const resolvedRaw = resolveLink(entry, declared, entries, aliasMap);
    const resolved = resolvedRaw ? normalizeRel(resolvedRaw) : null;
    const brokenAnchor = !resolved || !entries.has(resolved);
    // Self-pointing anchors (a canonical page declaring itself) satisfy the
    // body-link requirement by definition.
    const selfPointing = resolved !== null && resolved === entry.rel;
    const missingBodyLink =
      !brokenAnchor &&
      !selfPointing &&
      !entry.bodyLinks.some(
        (link) => link.resolved && normalizeRel(link.resolved) === resolved,
      );
    if (brokenAnchor || missingBodyLink) {
      drift.push({
        rel,
        domain: entry.domain,
        declared,
        resolved: brokenAnchor ? null : resolved,
        brokenAnchor,
        missingBodyLink,
      });
    }
  }
  return { checked, drift };
}

function entryStatus(entry: Entry, entries: Map<string, Entry>, minBodyLinks: number): Omit<AuditRow, "path" | "domain" | "title" | "git_state" | "suggestions"> {
  const bodyCount = entry.bodyLinks.length;
  const hasH1 = /^#\s+.+/m.test(entry.body);
  const route = hasRouteLink(entry, entries);
  const peer = hasPeerLink(entry, entries);
  const system = hasSystemLink(entry);
  const deadLinks = entry.allLinks
    .filter((link) => !link.resolved)
    .map((link) => ({
      raw: link.raw,
      target: link.target,
      line: link.line,
    }));
  const issues: string[] = [];
  if (!hasH1 && !isIndex(entry)) {
    issues.push("missing_h1");
  }
  if (deadLinks.length > 0) {
    issues.push(`dead_wikilinks:${deadLinks.length}`);
  }
  if (bodyCount < minBodyLinks) {
    issues.push(`body_links<${minBodyLinks}`);
  }
  if (!route) {
    issues.push("missing_route_link");
  }
  if (!peer && !isIndex(entry)) {
    issues.push("missing_peer_link");
  }
  if (!system) {
    issues.push("missing_system_or_regulatory_link");
  }
  return {
    body_links: bodyCount,
    all_links: entry.allLinks.length,
    inlinks: entry.inlinks,
    h1: hasH1,
    route,
    peer,
    system,
    dead_links: deadLinks,
    issues,
  };
}

function isIndex(entry: Entry): boolean {
  return path.basename(entry.path) === "INDEX.md";
}

function domainRoutes(): Record<string, string> {
  if (cachedDomainRoutes) {
    return cachedDomainRoutes;
  }
  const routes: Record<string, string> = {};
  const indexPath = path.join(ROOT, "INDEX.md");
  if (!existsSync(indexPath)) {
    cachedDomainRoutes = routes;
    return routes;
  }
  const text = readFileSync(indexPath, "utf8");
  let inTable = false;
  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("| Domain | Entries | Route |")) {
      inTable = true;
      continue;
    }
    if (!inTable) {
      continue;
    }
    if (!line.startsWith("|")) {
      break;
    }
    if (/^\|[-: ]+\|/.test(line)) {
      continue;
    }
    const cells = line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
    if (cells.length < 3) {
      continue;
    }
    const match = cells[2].match(/\[\[([^\]|#]+)/);
    if (match) {
      routes[cells[0]] = stripMd(match[1].trim());
    }
  }
  cachedDomainRoutes = routes;
  return routes;
}

function uniqueExistingCandidates(candidates: string[], entries: Map<string, Entry>, entry: Entry): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const candidate of candidates) {
    const normalized = stripMd(candidate);
    if (seen.has(normalized)) {
      continue;
    }
    if (normalized === stripMd(entry.rel)) {
      seen.add(normalized);
      result.push(normalized);
      continue;
    }
    if (candidateExists(normalized, entries)) {
      seen.add(normalized);
      result.push(normalized);
    }
  }
  return result;
}

function routeCandidates(entry: Entry, entries: Map<string, Entry>): string[] {
  const candidates: string[] = [];
  const indexRoute = domainRoutes()[entry.domain];
  if (indexRoute) {
    candidates.push(indexRoute);
  }
  candidates.push(`${entry.domain}/INDEX`);
  candidates.push(...(DOMAIN_SYSTEM_CANDIDATES[entry.domain] ?? []));
  return uniqueExistingCandidates(candidates, entries, entry);
}

function linkMatchesCandidate(link: WikiLink, candidate: string): boolean {
  const normalized = stripMd(candidate);
  if (stripMd(link.target) === normalized) {
    return true;
  }
  if (link.resolved && stripMd(normalizeRel(link.resolved)) === normalized) {
    return true;
  }
  if (normalized.endsWith("/INDEX") && stripMd(link.target) === normalized.slice(0, -6)) {
    return true;
  }
  return false;
}

function hasRouteLink(entry: Entry, entries: Map<string, Entry>): boolean {
  for (const candidate of routeCandidates(entry, entries)) {
    if (candidate === stripMd(entry.rel)) {
      return true;
    }
    if (entry.bodyLinks.some((link) => linkMatchesCandidate(link, candidate))) {
      return true;
    }
  }
  for (const link of entry.bodyLinks) {
    if (!link.resolved) {
      continue;
    }
    const target = normalizeRel(link.resolved).split("/");
    const name = target[target.length - 1] ?? "";
    const first = target[0] ?? "";
    if (name === "INDEX.md") {
      return true;
    }
    if (first === entry.domain && name === "INDEX.md") {
      return true;
    }
  }
  return false;
}

function hasPeerLink(entry: Entry, entries: Map<string, Entry>): boolean {
  for (const link of entry.bodyLinks) {
    if (!link.resolved || normalizeRel(link.resolved) === entry.rel) {
      continue;
    }
    const targetParts = normalizeRel(link.resolved).split("/");
    if (targetParts[0] === entry.domain && targetParts[targetParts.length - 1] !== "INDEX.md") {
      return true;
    }
  }
  let peerCount = 0;
  for (const [rel, other] of entries) {
    if (rel !== entry.rel && other.domain === entry.domain && !isIndex(other)) {
      peerCount += 1;
    }
  }
  return peerCount === 0;
}

function hasSystemLink(entry: Entry): boolean {
  for (const link of entry.bodyLinks) {
    if (!link.resolved) {
      continue;
    }
    const normalized = normalizeRel(link.resolved);
    const parts = normalized.split("/");
    const stem = path.basename(normalized, ".md").toLowerCase();
    if (parts[0] && parts[0] !== entry.domain) {
      return true;
    }
    if (SYSTEM_KEYWORDS.some((keyword) => stem.includes(keyword))) {
      return true;
    }
  }
  return false;
}

function suggestLinks(entry: Entry, entries: Map<string, Entry>): string[] {
  const suggestions: string[] = [];
  for (const candidate of routeCandidates(entry, entries)) {
    if (candidate !== stripMd(entry.rel)) {
      suggestions.push(candidate);
    }
  }
  for (const candidate of DOMAIN_SYSTEM_CANDIDATES[entry.domain] ?? []) {
    const resolved = `${candidate}.md`;
    if (entries.has(normalizeRel(resolved)) && normalizeRel(resolved) !== entry.rel) {
      suggestions.push(candidate);
    }
  }
  const tagSet = new Set(entry.tags);
  const peers: Array<[number, number, string]> = [];
  for (const [rel, other] of entries) {
    if (rel === entry.rel || other.domain !== entry.domain || isIndex(other)) {
      continue;
    }
    const score = other.tags.filter((tag) => tagSet.has(tag)).length;
    if (score > 0) {
      peers.push([score, other.inlinks, stripMd(rel)]);
    }
  }
  peers.sort((left, right) => {
    if (right[0] !== left[0]) {
      return right[0] - left[0];
    }
    if (right[1] !== left[1]) {
      return right[1] - left[1];
    }
    return right[2].localeCompare(left[2]);
  });
  for (const [, , rel] of peers.slice(0, 3)) {
    if (!suggestions.includes(rel)) {
      suggestions.push(rel);
    }
  }
  return suggestions.slice(0, 6);
}

function candidateExists(candidate: string, entries: Map<string, Entry>): boolean {
  return (
    entries.has(normalizeRel(`${candidate}.md`)) ||
    entries.has(normalizeRel(`${candidate}/INDEX.md`)) ||
    candidate === "INDEX"
  );
}

function writeMarkdownReport(
  rows: AuditRow[],
  reportPath: string,
  minBodyLinks: number,
  canonicalAnchors: CanonicalAnchorSummary,
): void {
  const total = rows.length;
  const failures = rows.filter((row) => row.issues.length > 0);
  const deadRows = rows.filter((row) => row.dead_links.length > 0);
  const deadByTarget = new Map<string, Array<[string, number, string]>>();
  for (const row of deadRows) {
    for (const link of row.dead_links) {
      const refs = deadByTarget.get(link.target) ?? [];
      refs.push([row.path, link.line, link.raw]);
      deadByTarget.set(link.target, refs);
    }
  }
  const lowBody = rows.filter((row) => row.issues.includes(`body_links<${minBodyLinks}`));
  const missingRoute = rows.filter((row) => row.issues.includes("missing_route_link"));
  const missingPeer = rows.filter((row) => row.issues.includes("missing_peer_link"));
  const missingSystem = rows.filter((row) => row.issues.includes("missing_system_or_regulatory_link"));
  const missingH1 = rows.filter((row) => row.issues.includes("missing_h1"));
  const changed = rows.filter((row) => ["M", "A", "??"].includes(row.git_state));

  const lines: string[] = [];
  lines.push("# FinWiki Internal Link Improvement Plan");
  lines.push("");
  lines.push("> Generated by `bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md`.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push("| Metric | Count |");
  lines.push("|---|---:|");
  lines.push(`| Entries checked | ${total} |`);
  lines.push(`| Entries with any issue | ${failures.length} |`);
  lines.push(`| Dead wikilink references | ${deadRows.reduce((sum, row) => sum + row.dead_links.length, 0)} |`);
  lines.push(`| Unique dead wikilink targets | ${deadByTarget.size} |`);
  lines.push(`| Body links below ${minBodyLinks} | ${lowBody.length} |`);
  lines.push(`| Missing H1 | ${missingH1.length} |`);
  lines.push(`| Missing route link | ${missingRoute.length} |`);
  lines.push(`| Missing peer link | ${missingPeer.length} |`);
  lines.push(`| Missing system / regulatory link | ${missingSystem.length} |`);
  lines.push(`| Changed or new entries in current worktree | ${changed.length} |`);
  lines.push(`| canonical_anchor declarations checked (informational) | ${canonicalAnchors.checked} |`);
  lines.push(`| canonical_anchor drift (informational, non-gating) | ${canonicalAnchors.drift.length} |`);
  lines.push("");
  lines.push("## Wiki Linking Standard");
  lines.push("");
  lines.push("- Each entry should have at least three body wikilinks before `## Related` / `## Sources`.");
  lines.push("- Every `[[wikilink]]` target anywhere in the public entry body must resolve to an existing entry, domain index, or explicit alias.");
  lines.push("- Body links should include one route link, one peer / contrast link, and one system / regulatory link.");
  lines.push("- `## Related` remains useful as a footer, but it does not count as body linkage.");
  lines.push("- Registry-control pages may link to official workbooks in Sources, but should still connect to wiki routes in prose.");
  lines.push("");
  lines.push("## Priority A0: Dead Wikilink Targets");
  lines.push("");
  lines.push("| Target | Refs | Example source |");
  lines.push("|---|---:|---|");
  const deadEntries = [...deadByTarget.entries()].sort((left, right) => {
    if (right[1].length !== left[1].length) {
      return right[1].length - left[1].length;
    }
    return left[0].localeCompare(right[0]);
  });
  for (const [target, refs] of deadEntries.slice(0, 240)) {
    const [examplePath, exampleLine, exampleRaw] = refs[0];
    lines.push(`| \`[[${target}]]\` | ${refs.length} | \`${examplePath}:${exampleLine}\` (\`[[${exampleRaw}]]\`) |`);
  }
  if (deadEntries.length > 240) {
    lines.push(`| ... | ... | ${deadEntries.length - 240} more targets omitted |`);
  }
  lines.push("");
  lines.push("## Priority A: Failing Entries");
  lines.push("");
  lines.push("| Path | Body | In | Dead | Issues | Suggested links |");
  lines.push("|---|---:|---:|---:|---|---|");
  const failureRows = [...failures].sort((left, right) => {
    if (left.dead_links.length !== right.dead_links.length) {
      return left.dead_links.length - right.dead_links.length;
    }
    if (left.issues.length !== right.issues.length) {
      return left.issues.length - right.issues.length;
    }
    if (left.body_links !== right.body_links) {
      return left.body_links - right.body_links;
    }
    return left.path.localeCompare(right.path);
  });
  for (const row of failureRows.slice(0, 200)) {
    const suggestions = row.suggestions.map((item) => `\`[[${item}]]\``).join(", ") || "-";
    const issues = row.issues.map((item) => `\`${item}\``).join(", ");
    lines.push(`| \`${row.path}\` | ${row.body_links} | ${row.inlinks} | ${row.dead_links.length} | ${issues} | ${suggestions} |`);
  }
  if (failureRows.length > 200) {
    lines.push(`| ... | ... | ... | ... | ${failureRows.length - 200} more entries omitted | ... |`);
  }
  lines.push("");
  lines.push("## Priority B: Current Worktree Entries To Review");
  lines.push("");
  lines.push("| Path | State | Body | Issues |");
  lines.push("|---|---:|---:|---|");
  const changedRows = [...changed].sort((left, right) => {
    const stateCompare = left.git_state.localeCompare(right.git_state);
    if (stateCompare !== 0) {
      return stateCompare;
    }
    return left.path.localeCompare(right.path);
  });
  for (const row of changedRows.slice(0, 240)) {
    const issues = row.issues.map((item) => `\`${item}\``).join(", ") || "ok";
    lines.push(`| \`${row.path}\` | \`${row.git_state}\` | ${row.body_links} | ${issues} |`);
  }
  if (changedRows.length > 240) {
    lines.push(`| ... | ... | ... | ${changedRows.length - 240} more entries omitted |`);
  }
  lines.push("");
  lines.push("## Domain Snapshot");
  lines.push("");
  lines.push("| Domain | Entries | Failing | Avg body links |");
  lines.push("|---|---:|---:|---:|");
  const domains = [...new Set(rows.map((row) => row.domain))].sort();
  for (const domain of domains) {
    const domainRows = rows.filter((row) => row.domain === domain);
    const failing = domainRows.filter((row) => row.issues.length > 0);
    const avg = domainRows.reduce((sum, row) => sum + row.body_links, 0) / domainRows.length;
    lines.push(`| \`${domain}\` | ${domainRows.length} | ${failing.length} | ${avg.toFixed(1)} |`);
  }
  lines.push("");
  lines.push("## Informational: canonical_anchor Integrity");
  lines.push("");
  lines.push("> Report-only (proposal Phase 1, audit-only). These rows never increment");
  lines.push("> entries-with-issues and never fail the release gate. They flag pages whose");
  lines.push("> `canonical_anchor:` frontmatter either points at a non-existent entry or is");
  lines.push("> not cross-linked from the declaring page's core body (before `## Related`).");
  lines.push("");
  lines.push(`Declarations checked: ${canonicalAnchors.checked}. Drift: ${canonicalAnchors.drift.length}.`);
  lines.push("");
  lines.push("| Path | Declared anchor | Resolves | Core-body link | Issue |");
  lines.push("|---|---|---|---|---|");
  const driftRows = [...canonicalAnchors.drift].sort((left, right) =>
    left.rel.localeCompare(right.rel),
  );
  if (driftRows.length === 0) {
    lines.push("| _none_ | - | - | - | - |");
  }
  for (const row of driftRows) {
    const resolves = row.brokenAnchor ? "no" : "yes";
    const coreBodyLink = row.brokenAnchor ? "-" : row.missingBodyLink ? "no" : "yes";
    const issue = row.brokenAnchor ? "broken_anchor" : "missing_core_body_link";
    lines.push(`| \`${row.rel}\` | \`${row.declared}\` | ${resolves} | ${coreBodyLink} | \`${issue}\` |`);
  }
  lines.push("");
  lines.push("## Execution Notes");
  lines.push("");
  lines.push("1. Fix Priority A first with hand-written body sentences, not footer-only links.");
  lines.push("2. For large registry pages, add one short prose paragraph that names the registry route, the nearest domain index, and one adjacent system page.");
  lines.push("3. Re-run `bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues` before push.");

  writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");
}

function normalizeRel(value: string): string {
  const normalized = toPosix(path.normalize(value));
  return normalized.replace(/^\.\//, "");
}

function toPosix(value: string): string {
  return value.replace(/\\/g, "/");
}

try {
  process.exitCode = main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
}
