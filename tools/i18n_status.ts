#!/usr/bin/env bun

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { iterMarkdownFiles, isPublicPage } from "../lib/markdown_helpers";

/**
 * i18n Status (read-only)
 *
 * Reports translation-layer freshness without touching any file: per-locale
 * mirror counts, current vs stale (via source_hash), missing source entries,
 * orphaned mirrors (source moved/deleted), source-pointer drift, and
 * status/fidelity distribution (including needs_review).
 *
 * Spec: docs/04-architecture/i18n-architecture.md, docs/05-functional-specs/
 * i18n-pipeline.md, docs/01-strategy/next-development-plan.md (C1).
 *
 * Read-only: never writes mirrors, source_hash, or generated surfaces. Exits 0
 * (it is a status report, not a gate). Pass --json for machine output.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const I18N_DIR = path.join(ROOT, "site", "src", "content", "i18n");
const LANGS = ["ja", "zh", "en"] as const;

const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_RED = "\x1b[31m";
const ANSI_DIM = "\x1b[2m";
const ANSI_BOLD = "\x1b[1m";
const ANSI_RESET = "\x1b[0m";

function toPosix(value: string): string {
  return value.split(path.sep).join("/");
}

// Matches the source_hash contract in site/scripts (prep-parallel.mjs,
// translate.mjs, commit-translate.mjs): sha256 of the body with the leading
// frontmatter block stripped, truncated to 16 hex chars.
function stripFrontmatter(text: string): string {
  const match = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return match ? text.slice(match[0].length) : text;
}

function sourceHash(text: string): string {
  return createHash("sha256").update(stripFrontmatter(text)).digest("hex").slice(0, 16);
}

function parseFrontmatter(text: string): Record<string, string> {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const frontmatter: Record<string, string> = {};
  if (!match) return frontmatter;
  for (const line of match[1].split(/\r?\n/)) {
    const field = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (field) frontmatter[field[1]] = field[2].trim();
  }
  return frontmatter;
}

interface SourceEntry {
  hash: string;
}

// Translatable corpus entries (the denominator for "missing"): public,
// domain-prefixed content pages, excluding domain INDEX, releases and templates.
// Keyed by lowercased rel-without-.md to match the lowercased mirror paths.
async function buildSourceIndex(): Promise<Map<string, SourceEntry>> {
  const index = new Map<string, SourceEntry>();
  for (const absPath of await iterMarkdownFiles(ROOT)) {
    const rel = toPosix(path.relative(ROOT, absPath));
    if (!isPublicPage(rel)) continue;
    if (!rel.includes("/")) continue;
    if (rel.startsWith("releases/") || rel.startsWith(".templates/")) continue;
    if (rel.endsWith("/INDEX.md")) continue;
    index.set(rel.replace(/\.md$/, "").toLowerCase(), { hash: sourceHash(readFileSync(absPath, "utf8")) });
  }
  return index;
}

function listMirrors(lang: string): string[] {
  const dir = path.join(I18N_DIR, lang);
  const mirrors: string[] = [];
  if (!existsSync(dir)) return mirrors;
  const walk = (current: string): void => {
    for (const name of readdirSync(current)) {
      const full = path.join(current, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (name.endsWith(".md")) mirrors.push(toPosix(path.relative(dir, full)).replace(/\.md$/, ""));
    }
  };
  walk(dir);
  return mirrors;
}

interface LangReport {
  lang: string;
  mirrors: number;
  current: number;
  stale: number;
  orphaned: number;
  missing: number;
  source_pointer_drift: number;
  status_counts: Record<string, number>;
  fidelity_counts: Record<string, number>;
  missing_by_domain: Record<string, number>;
  samples: { stale: string[]; orphaned: string[]; missing: string[] };
}

function bump(counts: Record<string, number>, key: string): void {
  counts[key] = (counts[key] ?? 0) + 1;
}

function analyzeLang(lang: string, sourceIndex: Map<string, SourceEntry>): LangReport {
  const mirrors = listMirrors(lang);
  const mirrorSet = new Set(mirrors);
  const statusCounts: Record<string, number> = {};
  const fidelityCounts: Record<string, number> = {};
  let current = 0;
  let stale = 0;
  let orphaned = 0;
  let pointerDrift = 0;
  const staleSamples: string[] = [];
  const orphanSamples: string[] = [];

  for (const rel of mirrors) {
    const frontmatter = parseFrontmatter(readFileSync(path.join(I18N_DIR, lang, `${rel}.md`), "utf8"));
    bump(statusCounts, frontmatter.status || "(none)");
    bump(fidelityCounts, frontmatter.fidelity || "(none)");

    const declared = (frontmatter.source || rel).toLowerCase();
    if (declared !== rel) pointerDrift += 1;

    const source = sourceIndex.get(declared) ?? sourceIndex.get(rel);
    if (!source) {
      orphaned += 1;
      if (orphanSamples.length < 5) orphanSamples.push(rel);
      continue;
    }
    if (frontmatter.source_hash === source.hash) {
      current += 1;
    } else {
      stale += 1;
      if (staleSamples.length < 5) staleSamples.push(rel);
    }
  }

  let missing = 0;
  const missingByDomain: Record<string, number> = {};
  const missingSamples: string[] = [];
  for (const key of sourceIndex.keys()) {
    if (mirrorSet.has(key)) continue;
    missing += 1;
    bump(missingByDomain, key.split("/")[0]);
    if (missingSamples.length < 8) missingSamples.push(key);
  }

  return {
    lang,
    mirrors: mirrors.length,
    current,
    stale,
    orphaned,
    missing,
    source_pointer_drift: pointerDrift,
    status_counts: statusCounts,
    fidelity_counts: fidelityCounts,
    missing_by_domain: missingByDomain,
    samples: { stale: staleSamples, orphaned: orphanSamples, missing: missingSamples },
  };
}

function formatCounts(counts: Record<string, number>): string {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return entries.length > 0 ? entries.map(([key, value]) => `${key}=${value}`).join(" ") : "(none)";
}

function printHuman(sourceCount: number, reports: LangReport[]): void {
  console.log(`${ANSI_BOLD}i18n status (read-only)${ANSI_RESET}`);
  console.log(`Translatable source entries (corpus, excluding INDEX): ${sourceCount}`);
  console.log("");
  for (const report of reports) {
    const reviewish = (report.fidelity_counts.needs_review ?? 0) + (report.fidelity_counts["(none)"] ?? 0);
    const flag = report.stale + report.orphaned + report.missing + reviewish > 0 ? ANSI_YELLOW : ANSI_GREEN;
    console.log(`${flag}[${report.lang}]${ANSI_RESET} mirrors=${report.mirrors}  current=${report.current}  stale=${report.stale}  orphaned=${report.orphaned}  missing=${report.missing}`);
    console.log(`    status: ${formatCounts(report.status_counts)}`);
    console.log(`    fidelity: ${formatCounts(report.fidelity_counts)}`);
    if (report.source_pointer_drift > 0) {
      console.log(`    ${ANSI_RED}source-pointer drift: ${report.source_pointer_drift}${ANSI_RESET} (mirror frontmatter source != mirror path)`);
    }
    const missingDomains = Object.entries(report.missing_by_domain).sort((a, b) => b[1] - a[1]);
    if (missingDomains.length > 0) {
      const top = missingDomains.slice(0, 8).map(([domain, count]) => `${domain}(${count})`).join(", ");
      console.log(`    ${ANSI_DIM}missing by domain: ${top}${missingDomains.length > 8 ? " …" : ""}${ANSI_RESET}`);
    }
    if (report.samples.stale.length > 0) console.log(`    ${ANSI_DIM}stale e.g.: ${report.samples.stale.join(", ")}${ANSI_RESET}`);
    if (report.samples.orphaned.length > 0) console.log(`    ${ANSI_DIM}orphaned e.g.: ${report.samples.orphaned.join(", ")}${ANSI_RESET}`);
    if (report.samples.missing.length > 0) console.log(`    ${ANSI_DIM}missing e.g.: ${report.samples.missing.join(", ")}${ANSI_RESET}`);
    console.log("");
  }
  console.log(`${ANSI_DIM}Read-only report. To act on stale/missing items, run the site/scripts translation pipeline (prep -> translate -> commit).${ANSI_RESET}`);
}

async function main(): Promise<void> {
  const asJson = process.argv.includes("--json");
  if (!existsSync(I18N_DIR)) {
    console.error(`i18n directory not found: ${toPosix(path.relative(ROOT, I18N_DIR))}`);
    process.exit(1);
  }
  const sourceIndex = await buildSourceIndex();
  const reports = LANGS.map((lang) => analyzeLang(lang, sourceIndex));

  if (asJson) {
    console.log(JSON.stringify({ source_entries: sourceIndex.size, locales: reports }, null, 2));
  } else {
    printHuman(sourceIndex.size, reports);
  }
  process.exit(0);
}

main();
