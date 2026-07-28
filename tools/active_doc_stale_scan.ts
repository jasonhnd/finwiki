#!/usr/bin/env bun

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Active-Doc Stale Scan
 *
 * Flags stale implementation facts that must not appear in *active* developer
 * docs: copied issue-state snapshots, drifted generated metrics, pre-split
 * domain counts, removed implementation paths, obsolete release guidance, and
 * repository-license mismatches.
 *
 * This turns the maintainer's one-off `rg` (see docs/07-quality/test-plan.md and
 * docs/07-quality/documentation-drift-audit.md) into a reusable, allowlist-aware
 * gate. Spec: docs/01-strategy/next-development-plan.md (B2) and the Link Rules in
 * docs/00-governance/documentation-system.md — old facts may live only in dated
 * release history, ADR history, or docs/99-archive/.
 *
 * The scan is read-only: it never rewrites Markdown.
 */

const ROOT = path.resolve(import.meta.dir, "..");

interface StalePattern {
  id: string;
  regex: RegExp;
  // What is wrong and the current fact, so a reader can repair quickly.
  reason: string;
  fix: string;
}

interface MetricSnapshot {
  linkAuditedEntries: number;
  markdownFiles: number;
  topicalDomains: number;
}

interface MetricPattern {
  id: string;
  regex: RegExp;
  expected: (snapshot: MetricSnapshot) => number;
  label: string;
}

interface Exemption {
  // Repo-relative POSIX path. A value with no extension matches that path and
  // anything beneath it (directory prefix); a file path matches that file.
  file: string;
  // When set, suppress only lines containing this substring (otherwise the
  // whole file is exempt).
  contains?: string;
  // When set, restrict the exemption to a single pattern id.
  patternId?: string;
  reason: string;
}

// Configurable stale patterns. Derived from next-development-plan.md (B2) and
// the canonical `rg` in test-plan.md / documentation-drift-audit.md.
const STALE_PATTERNS: StalePattern[] = [
  {
    id: "domain-count-23",
    regex: /\b23[\s-]*domains?\b|領域数\s*23|领域数\s*23/i,
    reason: "FinWiki now has 40 domains; 23 is the pre-JapanFG-split count.",
    fix: "State the current count (40 domains), or move the 23-domain fact into dated release history / ADR history.",
  },
  {
    id: "old-site-mirror",
    regex: /site\/src\/content\/entries/,
    reason: "The site/src/content/entries mirror was removed; the site reads the root corpus plus site/src/content/i18n/{ja,en}/.",
    fix: "Reference the current content collections (root corpus + site/src/content/i18n/**).",
  },
  {
    id: "python-postbuild",
    regex: /\bpostbuild\b|post-build|python\s+tools\/|tools\/release\.py|wiki_link_audit\.py|generate_ai_discovery\.py/i,
    reason: "The toolchain is Bun + TypeScript; there is no Python tool or postbuild step.",
    fix: "Reference the Bun tools (e.g. tools/release.ts, tools/wiki_link_audit.ts, tools/generate_ai_discovery.ts).",
  },
  {
    id: "canonical-report-only",
    regex: /canonical[^\n]{0,60}report[\s-]?only|report[\s-]?only[^\n]{0,60}canonical/i,
    reason: "canonical_anchor drift is a hard gate: release.ts always runs with --fail-on-canonical-drift.",
    fix: "Describe canonical drift as release-gated, or scope the report-only mention to ADR/roadmap history.",
  },
  {
    id: "handwritten-current-issue-state",
    regex: /(?:current(?:ly)?|当前)\s+(?:open|active)[^#\n]{0,80}#\d+/i,
    reason: "GitHub is the live issue-state source; a numbered current-open snapshot in Markdown becomes stale as soon as issues move.",
    fix: "Link to the live GitHub issue query and keep this document limited to durable priorities or clearly dated history.",
  },
  {
    id: "active-queue-row",
    regex: /\|\s*🔴\s*(?:next|later)\s*\|\s*#\d+/i,
    reason: "Active issue queues must come from GitHub labels, not a hand-maintained Markdown table.",
    fix: "Remove the live-state row or rewrite it as clearly dated completion history.",
  },
  {
    id: "future-planning-status",
    regex: /Status:\s*planning document for issue #\d+|the next planning bridge is[^\n]{0,100}\(#\d+\)/i,
    reason: "An implemented plan must be labeled as a historical implementation/design record, not as current future work.",
    fix: "Record the shipped outcome and point current work intake to the live issue tracker.",
  },
  {
    id: "restore-mtime-guidance",
    regex: /^(?![^\n]*(?:\bdo not\b|\bdon't\b|\bmust not\b|禁止|不要))[^\n]*?(?:(?:fresh\s+clone|clone)[^\n]{0,80}(?:restore\s+(?:file(?:system)?\s+)?mtimes?|恢复\s*mtime)|(?:restore\s+(?:file(?:system)?\s+)?mtimes?|恢复\s*mtime)[^\n]{0,80}(?:fresh\s+clone|clone))/i,
    reason: "Release last_modified is Git-history first; restoring filesystem mtimes is obsolete and can hide the real source of drift.",
    fix: "Require full history, committed discovery fallback, post-source-commit regeneration, and use mtime only as the terminal fallback.",
  },
];

const CURRENT_METRIC_PATTERNS: MetricPattern[] = [
  {
    id: "link-audited-entry-count",
    regex: /\|\s*Link-audited(?: public wiki)? entries\s*\|\s*(\d[\d,]*)\b/i,
    expected: (snapshot) => snapshot.linkAuditedEntries,
    label: "link-audited entries",
  },
  {
    id: "link-audited-entry-count",
    regex: /\b(\d[\d,]*)\s+(?:link-audited(?: public wiki)? entries|wiki entries checked by (?:the )?link audit)\b/i,
    expected: (snapshot) => snapshot.linkAuditedEntries,
    label: "link-audited entries",
  },
  {
    id: "link-audited-entry-count",
    regex: /当前\s*(\d[\d,]*)\s*条由\s*link audit/i,
    expected: (snapshot) => snapshot.linkAuditedEntries,
    label: "link-audited entries",
  },
  {
    id: "markdown-file-count",
    regex: /\|\s*Markdown files(?: counted by release tooling)?\s*\|\s*(\d[\d,]*)\b/i,
    expected: (snapshot) => snapshot.markdownFiles,
    label: "release Markdown files",
  },
  {
    id: "markdown-file-count",
    regex: /\bcurrent(?:ly)?[^\n]{0,30}\b(\d[\d,]*)\s+(?:corpus\s+)?Markdown (?:files|count)\b/i,
    expected: (snapshot) => snapshot.markdownFiles,
    label: "release Markdown files",
  },
  {
    id: "markdown-file-count",
    regex: /当前\s*(\d[\d,]*)[^。\n]{0,20}(?:corpus\s*)?\.md/i,
    expected: (snapshot) => snapshot.markdownFiles,
    label: "release Markdown files",
  },
  {
    id: "topical-domain-count",
    regex: /\|\s*Topical domains\s*\|\s*(\d[\d,]*)\b/i,
    expected: (snapshot) => snapshot.topicalDomains,
    label: "topical domains",
  },
];

// Reviewable allowlist. Every entry explains why a historical reference is
// acceptable. Whole-file entries cover docs whose purpose is to record old state
// (archive, ADR history, dated release history, drift-audit evidence). Line-level
// entries cover active docs that legitimately *name* the patterns this scan targets.
const ALLOWLIST: Exemption[] = [
  {
    file: "docs/99-archive",
    reason: "Archive: superseded historical plans (documentation-system.md §Layers).",
  },
  {
    file: "docs/04-architecture/adr.md",
    reason: "ADR history may record superseded states (documentation-system.md §Link Rules).",
  },
  {
    file: "docs/07-quality/code-doc-alignment-audit.md",
    contains: "Previously stale",
    reason: "Code/doc alignment history explicitly identifies a corrected old fact.",
  },
  {
    file: "docs/07-quality/documentation-drift-audit.md",
    contains: "Old 23-domain state",
    reason: "Drift-audit history names a corrected old fact.",
  },
  {
    file: "docs/07-quality/documentation-drift-audit.md",
    contains: "23 domains|23-domain",
    reason: "The audit command intentionally names the forbidden phrase it scans.",
  },
  {
    file: "docs/07-quality/test-plan.md",
    contains: "23 domains|23-domain",
    reason: "Documents the stale-pattern rg command this scan implements.",
  },
  {
    file: "docs/01-strategy/next-development-plan.md",
    contains: "stale facts such as",
    reason: "B2 spec text naming the stale facts to prevent.",
  },
  {
    file: "docs/01-strategy/next-development-plan.md",
    contains: "The scan catches active-doc references",
    reason: "B2 acceptance text enumerating the target patterns.",
  },
  {
    file: "docs/01-strategy/backlog.md",
    contains: "active-doc stale scan",
    reason: "Backlog item describing this scan's purpose.",
  },
  {
    file: "docs/04-architecture/astro-site-architecture.md",
    contains: "should not carry old",
    reason: "Meta-instruction forbidding stale facts (not a stale claim).",
  },
  {
    file: "docs/04-architecture/fact-freshness-source-recheck.md",
    contains: "`release.ts --check --strict`",
    patternId: "link-audited-entry-count",
    reason: "Dated design evidence records the issue #28 baseline rather than a current metric.",
  },
  {
    file: "docs/04-architecture/fact-freshness-source-recheck.md",
    contains: "Source-side public wiki entries",
    patternId: "link-audited-entry-count",
    reason: "Dated design evidence records the issue #28 migration estimate rather than a current metric.",
  },
  {
    file: "docs/06-implementation/toolchain.md",
    contains: "发布门禁会在 drift",
    reason: "Correctly explains canonical drift is release-gated; not a report-only claim.",
  },
];

const ANSI_RED = "\x1b[31m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_DIM = "\x1b[2m";
const ANSI_RESET = "\x1b[0m";

export interface Finding {
  relFile: string;
  line: number;
  patternId: string;
  reason: string;
  fix: string;
  text: string;
}

export interface ActiveDocScanResult {
  fileCount: number;
  patternCount: number;
  findings: Finding[];
}

function toPosix(relPath: string): string {
  return relPath.split(path.sep).join("/");
}

function isExempt(relFile: string, lineText: string, patternId: string): Exemption | undefined {
  return ALLOWLIST.find((entry) => {
    const fileMatches =
      relFile === entry.file ||
      relFile.startsWith(entry.file.endsWith("/") ? entry.file : `${entry.file}/`);
    if (!fileMatches) return false;
    if (entry.patternId && entry.patternId !== patternId) return false;
    if (entry.contains && !lineText.includes(entry.contains)) return false;
    return true;
  });
}

function walk(dir: string, callback: (file: string) => void): void {
  for (const name of readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      if (name !== "node_modules" && name !== ".git") {
        walk(fullPath, callback);
      }
    } else if (name.endsWith(".md")) {
      callback(fullPath);
    }
  }
}

function loadMetricSnapshot(rootDir: string): MetricSnapshot {
  const indexPath = path.join(rootDir, "ai-index.json");
  const parsed = JSON.parse(readFileSync(indexPath, "utf8")) as {
    counts?: Record<string, unknown>;
  };
  const counts = parsed.counts ?? {};
  const rawSnapshot = {
    linkAuditedEntries: {
      key: "link_audited_entries",
      value: counts.link_audited_entries,
    },
    markdownFiles: {
      key: "markdown_files",
      value: counts.markdown_files,
    },
    topicalDomains: {
      key: "topical_domains",
      value: counts.topical_domains,
    },
  };
  for (const { key, value } of Object.values(rawSnapshot)) {
    if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
      throw new Error(`ai-index.json counts.${key} must be a non-negative integer`);
    }
  }
  return {
    linkAuditedEntries: rawSnapshot.linkAuditedEntries.value as number,
    markdownFiles: rawSnapshot.markdownFiles.value as number,
    topicalDomains: rawSnapshot.topicalDomains.value as number,
  };
}

function scanFile(
  rootDir: string,
  filePath: string,
  metrics: MetricSnapshot,
  findings: Finding[],
): void {
  const relFile = toPosix(path.relative(rootDir, filePath));
  const lines = readFileSync(filePath, "utf-8").split(/\r?\n/);

  lines.forEach((lineText, index) => {
    for (const pattern of STALE_PATTERNS) {
      if (!pattern.regex.test(lineText)) continue;
      if (isExempt(relFile, lineText, pattern.id)) continue;
      findings.push({
        relFile,
        line: index + 1,
        patternId: pattern.id,
        reason: pattern.reason,
        fix: pattern.fix,
        text: lineText.trim(),
      });
    }

    for (const pattern of CURRENT_METRIC_PATTERNS) {
      const match = pattern.regex.exec(lineText);
      if (!match) continue;
      const declared = Number(match[1].replaceAll(",", ""));
      const expected = pattern.expected(metrics);
      if (declared === expected) continue;
      if (isExempt(relFile, lineText, pattern.id)) continue;
      findings.push({
        relFile,
        line: index + 1,
        patternId: pattern.id,
        reason: `Current ${pattern.label} are ${expected}, but this line declares ${declared}.`,
        fix: `Use ${expected}, or remove the volatile snapshot and point to ai-index.json / the canonical release gate.`,
        text: lineText.trim(),
      });
    }
  });
}

function scanRepositoryLicense(rootDir: string, findings: Finding[]): void {
  const packagePath = path.join(rootDir, "package.json");
  const licensePath = path.join(rootDir, "LICENSE");
  const packageText = readFileSync(packagePath, "utf8");
  const packageJson = JSON.parse(packageText) as { license?: unknown };
  const licenseText = readFileSync(licensePath, "utf8");
  const expected = /Apache License\s+Version 2\.0/i.test(licenseText)
    ? "Apache-2.0"
    : null;
  if (!expected || packageJson.license === expected) return;
  const licenseLine =
    packageText.split(/\r?\n/).findIndex((line) => line.includes('"license"')) + 1;
  findings.push({
    relFile: "package.json",
    line: Math.max(licenseLine, 1),
    patternId: "repository-license",
    reason: `package.json declares ${String(packageJson.license)}, while LICENSE is ${expected}.`,
    fix: `Set package.json license to ${expected}.`,
    text: `"license": ${JSON.stringify(packageJson.license)}`,
  });
}

export function scanActiveDocs(rootDir = ROOT): ActiveDocScanResult {
  const docsDir = path.join(rootDir, "docs");
  const metrics = loadMetricSnapshot(rootDir);
  const findings: Finding[] = [];
  let fileCount = 0;

  walk(docsDir, (file) => {
    fileCount += 1;
    scanFile(rootDir, file, metrics, findings);
  });
  for (const rootFile of ["INDEX.md"]) {
    const filePath = path.join(rootDir, rootFile);
    if (!statSync(filePath).isFile()) continue;
    fileCount += 1;
    scanFile(rootDir, filePath, metrics, findings);
  }
  scanRepositoryLicense(rootDir, findings);

  return {
    fileCount,
    patternCount: STALE_PATTERNS.length + CURRENT_METRIC_PATTERNS.length + 1,
    findings,
  };
}

function main(): number {
  console.log(`${ANSI_YELLOW}🔍 Scanning active docs for stale implementation facts...${ANSI_RESET}`);

  const { findings, fileCount, patternCount } = scanActiveDocs();

  if (findings.length > 0) {
    for (const f of findings) {
      console.error(`${ANSI_RED}❌ Stale [${f.patternId}] in ${f.relFile}:${f.line}${ANSI_RESET}`);
      console.error(`   ${ANSI_DIM}${f.text}${ANSI_RESET}`);
      console.error(`   why: ${f.reason}`);
      console.error(`   fix: ${f.fix}`);
    }
    console.error(
      `\n${ANSI_RED}Stale-doc scan failed: ${findings.length} stale reference(s) in active docs.${ANSI_RESET}`,
    );
    console.error(
      `${ANSI_DIM}If a reference is genuinely historical, move it to dated history/ADR/archive or add a reviewed ALLOWLIST entry in tools/active_doc_stale_scan.ts.${ANSI_RESET}`,
    );
    return 1;
  }

  console.log(
    `\n${ANSI_GREEN}Stale-doc scan passed: ${fileCount} active docs clean across ${patternCount} checks.${ANSI_RESET}`,
  );
  return 0;
}

if (import.meta.main) {
  process.exitCode = main();
}
