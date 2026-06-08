#!/usr/bin/env bun

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { iterMarkdownFiles, isPublicPage, SITE_URL } from "../lib/markdown_helpers";

/**
 * Generated-Surface Drift Scan
 *
 * Field-aware checks that the generated public surfaces stay aligned with the
 * current corpus and never leak `docs/` (which is intentionally excluded from
 * the public surface). Complements release.ts --check; see
 * docs/05-functional-specs/ai-discovery-surface.md and release-gate.md.
 *
 * Two failure classes (release-gate.md "Failure Handling"):
 *   - docs leakage: a docs/ path appears as a route / source / API entry / link.
 *   - stale API residue: an api/entries/*.json without a current corpus entry
 *     (or a corpus entry without its API file / manifest row).
 *
 * Read-only: never rewrites any surface. Exits non-zero on drift.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const API_DIR = path.join(ROOT, "api", "entries");

const ANSI_RED = "\x1b[31m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_DIM = "\x1b[2m";
const ANSI_RESET = "\x1b[0m";

interface Finding {
  surface: string;
  kind: string;
  detail: string;
}

const findings: Finding[] = [];
function report(surface: string, kind: string, detail: string): void {
  findings.push({ surface, kind, detail });
}

function toPosix(value: string): string {
  return value.split(path.sep).join("/");
}

// Internal docs/ leak only — an internal/relative docs path or our own public
// docs route. External URLs that merely contain "/docs/" (e.g. a third-party
// docs site cited in a body link, https://docs.sourcify.dev/docs/...) are not
// leakage and must not be flagged.
function isInternalDocsRef(value: string): boolean {
  return (
    value.startsWith("docs/") ||
    value.startsWith("/docs/") ||
    /^(?:\.{1,2}\/)+docs\//.test(value) ||
    value.startsWith(`${SITE_URL}docs/`)
  );
}

// Per-entry API inclusion mirrors writeApiEntries in generate_ai_discovery.ts:
// a public page with a domain prefix, excluding release notes and templates.
async function expectedApiSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>();
  for (const absPath of await iterMarkdownFiles(ROOT)) {
    const rel = toPosix(path.relative(ROOT, absPath));
    if (!isPublicPage(rel)) continue;
    if (!rel.includes("/")) continue;
    if (rel.startsWith("releases/") || rel.startsWith(".templates/")) continue;
    slugs.add(rel.replace(/\.md$/, ""));
  }
  return slugs;
}

function actualApiSlugs(): Set<string> {
  const slugs = new Set<string>();
  if (!existsSync(API_DIR)) return slugs;
  const walk = (dir: string): void => {
    for (const name of readdirSync(dir)) {
      const full = path.join(dir, name);
      if (statSync(full).isDirectory()) {
        walk(full);
      } else if (name.endsWith(".json")) {
        const rel = toPosix(path.relative(API_DIR, full));
        if (rel === "index.json") continue;
        slugs.add(rel.replace(/\.json$/, ""));
      }
    }
  };
  walk(API_DIR);
  return slugs;
}

function checkApiAlignment(expected: Set<string>): void {
  if (!existsSync(API_DIR)) {
    report("api/entries", "missing-dir", "api/entries directory not found");
    return;
  }
  const actual = actualApiSlugs();
  for (const slug of expected) {
    if (!actual.has(slug)) report("api/entries", "missing-api-file", `${slug}.json missing for corpus entry ${slug}.md`);
  }
  for (const slug of actual) {
    if (!expected.has(slug)) report(`api/entries/${slug}.json`, "stale-api-residue", `no corpus entry for slug "${slug}"`);
  }

  const indexPath = path.join(API_DIR, "index.json");
  if (!existsSync(indexPath)) {
    report("api/entries/index.json", "missing-manifest", "manifest not found");
    return;
  }
  const manifest = JSON.parse(readFileSync(indexPath, "utf-8")) as {
    total_entries?: number;
    entries?: Array<{ slug?: string }>;
  };
  const manifestSlugs = new Set((manifest.entries ?? []).map((row) => String(row.slug)));
  if (Number(manifest.total_entries) !== expected.size) {
    report("api/entries/index.json", "count-drift", `total_entries=${manifest.total_entries} but corpus expects ${expected.size}`);
  }
  for (const slug of expected) {
    if (!manifestSlugs.has(slug)) report("api/entries/index.json", "manifest-missing", `entry "${slug}" absent from manifest`);
  }
  for (const slug of manifestSlugs) {
    if (!expected.has(slug)) report("api/entries/index.json", "manifest-stale", `manifest lists non-corpus slug "${slug}"`);
  }
  scanJsonForDocs(manifest, "api/entries/index.json");
}

// URL- and path-bearing keys. Free-text keys (summary, headings, scope, title)
// are intentionally not checked, so a historical prose mention of "docs/" never
// false-fails — only structured route/source/link fields do.
const URLISH_KEYS = new Set([
  "source_path",
  "slug",
  "url",
  "github_url",
  "raw_markdown_url",
  "api_url",
  "html_url",
  "anchor_url",
  "sitemap",
  "ai_index_json",
  "llms",
  "llms_full",
  "robots",
  "global_index",
  "global_index_markdown",
  "human_homepage",
]);
const URL_ARRAY_KEYS = new Set(["resolved_wikilinks", "markdown_links", "external_links"]);

function scanJsonForDocs(node: unknown, surface: string, keyPath = ""): void {
  if (Array.isArray(node)) {
    node.forEach((item, index) => scanJsonForDocs(item, surface, `${keyPath}[${index}]`));
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      const childPath = keyPath ? `${keyPath}.${key}` : key;
      if (typeof value === "string") {
        if (URLISH_KEYS.has(key) && isInternalDocsRef(value)) report(surface, "docs-leak", `${childPath} = ${value}`);
      } else if (Array.isArray(value) && URL_ARRAY_KEYS.has(key)) {
        value.forEach((item, index) => {
          if (typeof item === "string" && isInternalDocsRef(item)) report(surface, "docs-leak", `${childPath}[${index}] = ${item}`);
        });
      } else {
        scanJsonForDocs(value, surface, childPath);
      }
    }
  }
}

function checkAiIndex(): void {
  const aiIndexPath = path.join(ROOT, "ai-index.json");
  if (!existsSync(aiIndexPath)) {
    report("ai-index.json", "missing", "ai-index.json not found");
    return;
  }
  scanJsonForDocs(JSON.parse(readFileSync(aiIndexPath, "utf-8")), "ai-index.json");
}

function checkSitemap(): void {
  const sitemapPath = path.join(ROOT, "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    report("sitemap.xml", "missing", "sitemap.xml not found");
    return;
  }
  const text = readFileSync(sitemapPath, "utf-8");
  const locRe = /<loc>([^<]*)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = locRe.exec(text)) !== null) {
    if (isInternalDocsRef(match[1])) report("sitemap.xml", "docs-leak", `<loc>${match[1]}</loc>`);
  }
}

// Text surfaces: flag docs/ only where it is a real route (full URL) or a
// crawlable markdown link, and — for llms-full.txt — in the structured per-entry
// field lines. Prose ("- Summary:", "- Headings:") is left untouched.
function checkTextSurface(file: string, options: { fieldLines?: boolean }): void {
  const filePath = path.join(ROOT, file);
  if (!existsSync(filePath)) {
    report(file, "missing", `${file} not found`);
    return;
  }
  const lines = readFileSync(filePath, "utf-8").split(/\r?\n/);
  const docsUrl = `${SITE_URL}docs/`;
  const fieldRe = /^- (URL|Source path|GitHub source|Canonical anchor):/;
  lines.forEach((line, index) => {
    const trimmed = line.trim().slice(0, 140);
    if (line.includes(docsUrl) || /\]\((?:\.{0,2}\/)*docs\//.test(line)) {
      report(file, "docs-leak", `:${index + 1} ${trimmed}`);
      return;
    }
    if (options.fieldLines && fieldRe.test(line) && line.includes("/docs/")) {
      report(file, "docs-leak", `:${index + 1} ${trimmed}`);
    }
  });
}

async function main(): Promise<void> {
  console.log(`${ANSI_YELLOW}🔍 Scanning generated public surfaces for drift...${ANSI_RESET}`);

  const expected = await expectedApiSlugs();
  checkApiAlignment(expected);
  checkAiIndex();
  checkSitemap();
  checkTextSurface("llms.txt", {});
  checkTextSurface("llms-full.txt", { fieldLines: true });
  checkTextSurface("robots.txt", {});

  if (findings.length > 0) {
    for (const finding of findings) {
      console.error(`${ANSI_RED}❌ [${finding.kind}] ${finding.surface}${ANSI_RESET}`);
      console.error(`   ${ANSI_DIM}${finding.detail}${ANSI_RESET}`);
    }
    console.error(`\n${ANSI_RED}Generated-surface drift scan failed: ${findings.length} issue(s).${ANSI_RESET}`);
    console.error(
      `${ANSI_DIM}docs leakage -> verify EXCLUDED_WALK_DIRS / link filtering. stale API / count drift -> run \`bun tools/release.ts --write\` and recommit the regenerated surface.${ANSI_RESET}`,
    );
    process.exit(1);
  }

  console.log(
    `\n${ANSI_GREEN}Generated-surface drift scan passed: API aligned (${expected.size} entries), no docs leakage across ai-index / api / sitemap / llms / llms-full / robots.${ANSI_RESET}`,
  );
  process.exit(0);
}

main();
