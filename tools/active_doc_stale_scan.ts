#!/usr/bin/env bun

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Active-Doc Stale Scan
 *
 * Flags stale implementation facts that must not appear in *active* developer
 * docs: pre-split domain counts, the removed Astro mirror path, Python/postbuild
 * build assumptions, and report-only canonical-drift claims.
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
const DOCS_DIR = path.join(ROOT, "docs");

interface StalePattern {
  id: string;
  regex: RegExp;
  // What is wrong and the current fact, so a reader can repair quickly.
  reason: string;
  fix: string;
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
    reason: "The site/src/content/entries mirror was removed; the site reads the root corpus plus site/src/content/i18n/{ja,en,zh}/.",
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
    file: "docs/01-strategy/roadmap.md",
    reason: "Dated version/release history.",
  },
  {
    file: "docs/07-quality/code-doc-alignment-audit.md",
    reason: "Code/doc alignment audit evidence: enumerates corrected stale facts by design.",
  },
  {
    file: "docs/07-quality/documentation-drift-audit.md",
    reason: "Drift audit evidence: defines the canonical stale-pattern rg and the facts it prevents.",
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

interface Finding {
  relFile: string;
  line: number;
  patternId: string;
  reason: string;
  fix: string;
  text: string;
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

function scanFile(filePath: string, findings: Finding[]): void {
  const relFile = toPosix(path.relative(ROOT, filePath));
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
  });
}

function main(): void {
  console.log(`${ANSI_YELLOW}🔍 Scanning active docs for stale implementation facts...${ANSI_RESET}`);

  const findings: Finding[] = [];
  let fileCount = 0;
  walk(DOCS_DIR, (file) => {
    fileCount++;
    scanFile(file, findings);
  });

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
    process.exit(1);
  }

  console.log(
    `\n${ANSI_GREEN}Stale-doc scan passed: ${fileCount} active docs clean across ${STALE_PATTERNS.length} patterns.${ANSI_RESET}`,
  );
  process.exit(0);
}

main();
