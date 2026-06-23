#!/usr/bin/env bun

import { mkdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

type Status = "tripped" | "not_tripped" | "monitor";

type CliOptions = {
  asOf: string;
  outDir: string;
  rootDir: string;
};

type AuditRun = {
  name: string;
  command: string[];
  rows: Record<string, unknown>[];
};

type ThresholdCheck = {
  audit: string;
  status: Status;
  count: number;
  threshold: string;
  details: string;
};

type AuditCounts = Record<string, number>;

type Summary = {
  generated_at: string;
  as_of: string;
  root_dir: string;
  artifact_dir: string;
  audits: {
    factual_consistency: AuditCounts;
    provenance_completeness: AuditCounts;
    fact_freshness: AuditCounts;
  };
  checks: ThresholdCheck[];
  never_actions: string[];
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const DEFAULT_NEEDS_REVIEW_THRESHOLD = 10;

const TIER_ONE_DOMAINS = new Set([
  "asset-managers",
  "banking",
  "card-issuers",
  "consumer-finance",
  "cooperative-banks",
  "exchanges",
  "financial-licenses",
  "financial-regulators",
  "fintech",
  "foreign-financial-institutions",
  "leasing-firms",
  "life-insurers",
  "megabanks",
  "non-life-insurers",
  "payment-firms",
  "regional-banks",
  "securities-firms",
  "systems",
  "trust-banks",
]);

const NEVER_ACTIONS = [
  "no corpus edits",
  "no translation or i18n writes",
  "no generated-surface rewrites",
  "no issue creation or closure",
  "no facts marked verified",
  "no private context used as evidence",
  "no LLM in the default runner",
  "no hard release gate",
];

function main() {
  const options = parseArgs(process.argv.slice(2));
  mkdirSync(options.outDir, { recursive: true });

  const consistency = runAudit(
    "factual_consistency",
    ["bun", "tools/factual_consistency_audit.ts", "--json"],
    options.rootDir,
  );
  const provenance = runAudit(
    "provenance_completeness",
    ["bun", "tools/provenance_completeness_audit.ts", "--json"],
    options.rootDir,
  );
  const freshness = runAudit(
    "fact_freshness",
    ["bun", "tools/fact_freshness_audit.ts", "--json", "--as-of", options.asOf],
    options.rootDir,
  );

  const summary = buildSummary(options, consistency, provenance, freshness);
  writeArtifacts(options.outDir, consistency, provenance, freshness, summary);
  printSummary(summary);
}

function parseArgs(argv: string[]): CliOptions {
  let asOf = todayIso();
  let outDir: string | null = null;
  let rootDir = ROOT;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--as-of") {
      asOf = requireValue(arg, argv[index + 1]);
      index += 1;
    } else if (arg.startsWith("--as-of=")) {
      asOf = arg.slice("--as-of=".length);
    } else if (arg === "--out") {
      outDir = requireValue(arg, argv[index + 1]);
      index += 1;
    } else if (arg.startsWith("--out=")) {
      outDir = arg.slice("--out=".length);
    } else if (arg === "--root-dir") {
      rootDir = path.resolve(requireValue(arg, argv[index + 1])).replaceAll("\\", "/");
      index += 1;
    } else if (arg.startsWith("--root-dir=")) {
      rootDir = path.resolve(arg.slice("--root-dir=".length)).replaceAll("\\", "/");
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(asOf)) {
    throw new Error(`--as-of must be YYYY-MM-DD, got ${asOf}`);
  }

  const artifactRoot = outDir
    ? path.resolve(outDir)
    : path.join(os.tmpdir(), "finwiki-audit-runner", `truthfulness-${asOf}`);
  return {
    asOf,
    outDir: artifactRoot.replaceAll("\\", "/"),
    rootDir,
  };
}

function printHelp() {
  console.log(`Usage: bun tools/audit_runner.ts [--as-of YYYY-MM-DD] [--out DIR]

Runs the read-only FinWiki truthfulness audits and writes artifacts:
- factual-consistency.json
- provenance-completeness.json
- fact-freshness.json
- summary.json
- summary.md

The runner does not edit corpus pages, i18n mirrors, generated surfaces, or GitHub issues.`);
}

function requireValue(flag: string, value: string | undefined): string {
  if (!value || value.startsWith("--")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function runAudit(name: string, command: string[], cwd: string): AuditRun {
  const result = spawnSync(command[0]!, command.slice(1), {
    cwd,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 80,
  });
  if (result.status !== 0) {
    const stderr = result.stderr.trim();
    throw new Error(`${name} failed with exit ${result.status}: ${stderr || result.stdout}`);
  }
  return { name, command, rows: parseJsonRows(result.stdout, name) };
}

function parseJsonRows(stdout: string, name: string): Record<string, unknown>[] {
  const text = stdout.replace(/^\uFEFF/, "").trim();
  const parsed = JSON.parse(text);
  if (!Array.isArray(parsed)) {
    throw new Error(`${name} did not return a JSON array`);
  }
  return parsed as Record<string, unknown>[];
}

function buildSummary(
  options: CliOptions,
  consistency: AuditRun,
  provenance: AuditRun,
  freshness: AuditRun,
): Summary {
  const consistencyCounts = countBy(consistency.rows, "severity");
  const provenanceCounts = countBy(provenance.rows, "severity");
  const freshnessCounts = {
    total: freshness.rows.length,
    tier1_review_by_due: freshness.rows.filter(isTierOneReviewByDue).length,
    actionable_rows: freshness.rows.length,
  };

  const consistencyConflicts = consistencyCounts.conflict ?? 0;
  const consistencyRepeatedNeedsReview = repeatedConsistencyNeedsReview(consistency.rows);
  const provenanceNeedsReview = provenanceCounts.needs_review ?? 0;
  const tierOneFreshnessDue = freshnessCounts.tier1_review_by_due;

  const checks: ThresholdCheck[] = [
    {
      audit: "factual_consistency",
      status: consistencyConflicts > 0 ? "tripped" : "not_tripped",
      count: consistencyConflicts,
      threshold: "trip when severity=conflict > 0",
      details:
        consistencyConflicts > 0
          ? "confirmed conflict rows require a remediation issue"
          : `no conflict rows; repeated needs_review groups observed=${consistencyRepeatedNeedsReview}`,
    },
    {
      audit: "factual_consistency_needs_review_pattern",
      status: consistencyRepeatedNeedsReview > 0 ? "monitor" : "not_tripped",
      count: consistencyRepeatedNeedsReview,
      threshold: "monitor repeated needs_review entity/metric groups; do not gate before calibration",
      details: "cadence design mentions repeated needs_review patterns, but the runner keeps this advisory",
    },
    {
      audit: "provenance_completeness",
      status: provenanceNeedsReview > DEFAULT_NEEDS_REVIEW_THRESHOLD ? "tripped" : "not_tripped",
      count: provenanceNeedsReview,
      threshold: `trip when needs_review > ${DEFAULT_NEEDS_REVIEW_THRESHOLD}`,
      details: "warnings remain visible in artifacts but are non-gating",
    },
    {
      audit: "fact_freshness_tier1_review_by_due",
      status: tierOneFreshnessDue > 0 ? "tripped" : "not_tripped",
      count: tierOneFreshnessDue,
      threshold: "trip when any Tier-1 row has review_by_due",
      details: "Tier-1 is inferred from high-signal domains until entity metadata is universal",
    },
    {
      audit: "fact_freshness_queue_growth",
      status: "monitor",
      count: freshness.rows.length,
      threshold: "monitor two-cycle growth; requires a previous artifact for comparison",
      details: "no historical artifact was supplied, so growth cannot be determined in this run",
    },
  ];

  return {
    generated_at: new Date().toISOString(),
    as_of: options.asOf,
    root_dir: options.rootDir,
    artifact_dir: options.outDir,
    audits: {
      factual_consistency: {
        total: consistency.rows.length,
        ...consistencyCounts,
      },
      provenance_completeness: {
        total: provenance.rows.length,
        ...provenanceCounts,
      },
      fact_freshness: freshnessCounts,
    },
    checks,
    never_actions: NEVER_ACTIONS,
  };
}

function countBy(rows: Record<string, unknown>[], field: string): AuditCounts {
  const counts: AuditCounts = {};
  for (const row of rows) {
    const value = String(row[field] ?? "unknown");
    counts[value] = (counts[value] ?? 0) + 1;
  }
  return counts;
}

function repeatedConsistencyNeedsReview(rows: Record<string, unknown>[]): number {
  const groups = new Map<string, Set<string>>();
  for (const row of rows) {
    if (row.severity !== "needs_review") continue;
    const key = `${String(row.entity_key ?? "")}::${String(row.metric_key ?? "")}`;
    if (!groups.has(key)) groups.set(key, new Set());
    groups.get(key)!.add(String(row.path ?? ""));
  }
  let repeated = 0;
  for (const paths of groups.values()) {
    if (paths.size > 1) repeated += 1;
  }
  return repeated;
}

function isTierOneReviewByDue(row: Record<string, unknown>): boolean {
  const domain = String(row.domain ?? "");
  const reasons = Array.isArray(row.reasons) ? row.reasons.map(String) : [];
  return TIER_ONE_DOMAINS.has(domain) && reasons.includes("review_by_due");
}

function writeArtifacts(
  outDir: string,
  consistency: AuditRun,
  provenance: AuditRun,
  freshness: AuditRun,
  summary: Summary,
) {
  writeJson(path.join(outDir, "factual-consistency.json"), consistency.rows);
  writeJson(path.join(outDir, "provenance-completeness.json"), provenance.rows);
  writeJson(path.join(outDir, "fact-freshness.json"), freshness.rows);
  writeJson(path.join(outDir, "summary.json"), summary);
  writeFileSync(path.join(outDir, "summary.md"), renderMarkdown(summary), "utf8");
}

function writeJson(filePath: string, data: unknown) {
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function renderMarkdown(summary: Summary): string {
  const lines = [
    "# Truthfulness Audit Summary",
    "",
    `- Generated at: ${summary.generated_at}`,
    `- As of: ${summary.as_of}`,
    `- Artifact directory: \`${summary.artifact_dir}\``,
    "",
    "## Counts",
    "",
    "| Audit | Total | Key counts |",
    "|---|---:|---|",
    `| factual_consistency | ${summary.audits.factual_consistency.total} | conflict=${summary.audits.factual_consistency.conflict ?? 0}; needs_review=${summary.audits.factual_consistency.needs_review ?? 0} |`,
    `| provenance_completeness | ${summary.audits.provenance_completeness.total} | needs_review=${summary.audits.provenance_completeness.needs_review ?? 0}; warning=${summary.audits.provenance_completeness.warning ?? 0} |`,
    `| fact_freshness | ${summary.audits.fact_freshness.total} | tier1_review_by_due=${summary.audits.fact_freshness.tier1_review_by_due}; actionable=${summary.audits.fact_freshness.actionable_rows} |`,
    "",
    "## Threshold Status",
    "",
    "| Audit | Status | Count | Threshold | Details |",
    "|---|---|---:|---|---|",
  ];
  for (const check of summary.checks) {
    lines.push(`| ${check.audit} | ${check.status} | ${check.count} | ${check.threshold} | ${check.details} |`);
  }
  lines.push("");
  lines.push("## Never Actions");
  lines.push("");
  for (const action of summary.never_actions) {
    lines.push(`- ${action}`);
  }
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function printSummary(summary: Summary) {
  console.log("truthfulness_audit_runner=ok");
  console.log(`as_of=${summary.as_of}`);
  console.log(`artifact_dir=${summary.artifact_dir}`);
  console.log("audit\tstatus\tcount\tthreshold");
  for (const check of summary.checks) {
    console.log(`${check.audit}\t${check.status}\t${check.count}\t${check.threshold}`);
  }
}

main();
