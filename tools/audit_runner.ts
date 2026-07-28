#!/usr/bin/env bun

import {
  closeSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { AUDIT_ARTIFACT_DIR_NAME } from "../lib/markdown_helpers";

export type Status = "tripped" | "not_tripped" | "monitor";

export type CliOptions = {
  asOf: string;
  historyDir: string | null;
  outDir: string;
  rootDir: string;
};

export type AuditRun = {
  name: string;
  command: string[];
  rows: Record<string, unknown>[];
};

export type ThresholdCheck = {
  audit: string;
  status: Status;
  count: number;
  threshold: string;
  details: string;
};

type AuditCounts = Record<string, number>;

export type TrendPoint = {
  as_of: string;
  count: number;
};

export type Summary = {
  generated_at: string;
  as_of: string;
  audits: {
    factual_consistency: AuditCounts;
    provenance_completeness: AuditCounts;
    fact_freshness: AuditCounts;
  };
  trends: {
    fact_freshness_actionable_rows: TrendPoint[];
  };
  checks: ThresholdCheck[];
  never_actions: string[];
};

const REPOSITORY_ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
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

export function main() {
  const options = parseArgs(process.argv.slice(2));
  mkdirSync(options.outDir, { recursive: true });
  assertArtifactOutputLocation(options.rootDir, realpathSync(options.outDir));

  const consistency = runAudit(
    "factual_consistency",
    [
      process.execPath,
      path.join(REPOSITORY_ROOT, "tools", "factual_consistency_audit.ts"),
      "--json",
      "--root-dir",
      options.rootDir,
    ],
    REPOSITORY_ROOT,
  );
  const provenance = runAudit(
    "provenance_completeness",
    [
      process.execPath,
      path.join(REPOSITORY_ROOT, "tools", "provenance_completeness_audit.ts"),
      "--json",
      "--root-dir",
      options.rootDir,
    ],
    REPOSITORY_ROOT,
  );
  const freshness = runAudit(
    "fact_freshness",
    [
      process.execPath,
      path.join(REPOSITORY_ROOT, "tools", "fact_freshness_audit.ts"),
      "--json",
      "--as-of",
      options.asOf,
      "--root-dir",
      options.rootDir,
    ],
    REPOSITORY_ROOT,
  );

  const history = options.historyDir
    ? loadHistoricalTrend(options.historyDir)
    : [];
  const summary = buildSummary(
    options,
    consistency,
    provenance,
    freshness,
    history,
  );
  writeArtifacts(options.outDir, consistency, provenance, freshness, summary);
  printSummary(summary, options.outDir);
}

export function parseArgs(argv: string[]): CliOptions {
  let asOf = todayIso();
  let requestedHistoryDir: string | null = null;
  let requestedOutDir: string | null = null;
  let rootDir = REPOSITORY_ROOT;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--as-of") {
      asOf = requireValue(arg, argv[index + 1]);
      index += 1;
    } else if (arg.startsWith("--as-of=")) {
      asOf = arg.slice("--as-of=".length);
    } else if (arg === "--out") {
      requestedOutDir = requireValue(arg, argv[index + 1]);
      index += 1;
    } else if (arg.startsWith("--out=")) {
      requestedOutDir = arg.slice("--out=".length);
    } else if (arg === "--history-dir") {
      requestedHistoryDir = requireValue(arg, argv[index + 1]);
      index += 1;
    } else if (arg.startsWith("--history-dir=")) {
      requestedHistoryDir = arg.slice("--history-dir=".length);
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

  return {
    asOf,
    historyDir: requestedHistoryDir
      ? path.resolve(rootDir, requestedHistoryDir).replaceAll("\\", "/")
      : null,
    outDir: resolveArtifactOutput(rootDir, requestedOutDir, asOf),
    rootDir,
  };
}

export function assertArtifactOutputLocation(rootDir: string, outDir: string): void {
  const absoluteRoot = path.resolve(rootDir);
  const absoluteOut = path.resolve(outDir);
  const relativeOut = path.relative(absoluteRoot, absoluteOut);
  const isInsideRoot =
    relativeOut === "" ||
    (!relativeOut.startsWith(`..${path.sep}`) &&
      relativeOut !== ".." &&
      !path.isAbsolute(relativeOut));
  if (!isInsideRoot) return;

  const topLevel = relativeOut.split(path.sep)[0];
  if (!relativeOut || topLevel !== AUDIT_ARTIFACT_DIR_NAME) {
    throw new Error(
      `unsafe in-repository audit output: ${outDir}; use ${AUDIT_ARTIFACT_DIR_NAME}/ or a directory outside the repository`,
    );
  }
}

export function resolveArtifactOutput(
  rootDir: string,
  requestedOutDir: string | null,
  asOf: string,
): string {
  const artifactRoot = requestedOutDir
    ? path.resolve(rootDir, requestedOutDir)
    : path.join(os.tmpdir(), "finwiki-audit-runner", `truthfulness-${asOf}`);
  assertArtifactOutputLocation(rootDir, artifactRoot);
  return artifactRoot.replaceAll("\\", "/");
}

function printHelp() {
  console.log(`Usage: bun tools/audit_runner.ts [--as-of YYYY-MM-DD] [--out DIR] [--history-dir DIR]

Runs the read-only FinWiki truthfulness audits and writes artifacts:
- factual-consistency.json
- provenance-completeness.json
- fact-freshness.json
- summary.json
- summary.md

The default output is outside the repository under the operating-system temp directory.
An explicit in-repository output must stay under ${AUDIT_ARTIFACT_DIR_NAME}/.
When --history-dir is supplied, prior summary.json artifacts are loaded recursively
to evaluate two-cycle queue growth. Only dates and counts enter the new summary.
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

export function runAudit(
  name: string,
  command: string[],
  cwd: string,
): AuditRun {
  // Bun 1.3.14 truncates spawnSync pipe output at 768 KiB even when maxBuffer
  // is larger. Provenance JSON is already multiple MiB, so capture stdout in a
  // private temporary file and read it only after the child exits.
  const captureDir = mkdtempSync(
    path.join(os.tmpdir(), "finwiki-audit-child-"),
  );
  const stdoutPath = path.join(captureDir, `${name}.json`);
  let stdoutFd = openSync(stdoutPath, "w");
  try {
    const result = spawnSync(command[0]!, command.slice(1), {
      cwd,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 80,
      stdio: ["ignore", stdoutFd, "pipe"],
    });
    closeSync(stdoutFd);
    stdoutFd = -1;
    const stdout = readFileSync(stdoutPath, "utf8");
    if (result.status !== 0) {
      const stderr = String(result.stderr ?? "").trim();
      throw new Error(
        `${name} failed with exit ${result.status}: ${stderr || stdout}`,
      );
    }
    return { name, command, rows: parseJsonRows(stdout, name) };
  } finally {
    if (stdoutFd >= 0) closeSync(stdoutFd);
    rmSync(captureDir, { recursive: true, force: true });
  }
}

function parseJsonRows(stdout: string, name: string): Record<string, unknown>[] {
  const text = stdout.replace(/^\uFEFF/, "").trim();
  const parsed = JSON.parse(text);
  if (!Array.isArray(parsed)) {
    throw new Error(`${name} did not return a JSON array`);
  }
  return parsed as Record<string, unknown>[];
}

export function loadHistoricalTrend(historyDir: string): TrendPoint[] {
  if (!existsSync(historyDir)) {
    throw new Error(`audit history directory does not exist: ${historyDir}`);
  }

  const candidates = new Map<
    string,
    { point: TrendPoint; generatedAt: string }
  >();
  for (const summaryPath of findSummaryFiles(historyDir)) {
    const parsed = JSON.parse(readFileSync(summaryPath, "utf8")) as {
      as_of?: unknown;
      generated_at?: unknown;
      audits?: {
        fact_freshness?: {
          actionable_rows?: unknown;
        };
      };
    };
    const asOf = String(parsed.as_of ?? "");
    const count = parsed.audits?.fact_freshness?.actionable_rows;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(asOf)) {
      throw new Error(`historical summary has invalid as_of: ${summaryPath}`);
    }
    if (typeof count !== "number" || !Number.isInteger(count) || count < 0) {
      throw new Error(
        `historical summary has invalid fact_freshness.actionable_rows: ${summaryPath}`,
      );
    }
    const generatedAt = String(parsed.generated_at ?? "");
    const existing = candidates.get(asOf);
    if (!existing || generatedAt.localeCompare(existing.generatedAt) > 0) {
      candidates.set(asOf, {
        point: { as_of: asOf, count },
        generatedAt,
      });
    }
  }

  return [...candidates.values()]
    .map((candidate) => candidate.point)
    .sort((left, right) => left.as_of.localeCompare(right.as_of));
}

function findSummaryFiles(rootDir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(rootDir, { withFileTypes: true })) {
    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findSummaryFiles(entryPath));
    } else if (entry.isFile() && entry.name === "summary.json") {
      files.push(entryPath);
    }
  }
  return files.sort();
}

export function evaluateTwoCycleGrowth(points: TrendPoint[]): {
  status: Status;
  details: string;
  points: TrendPoint[];
} {
  const latest = [...points]
    .sort((left, right) => left.as_of.localeCompare(right.as_of))
    .slice(-3);
  const trend = latest
    .map((point) => `${point.as_of}=${point.count}`)
    .join(" -> ");

  if (latest.length < 3) {
    return {
      status: "monitor",
      details: `need two prior summaries; observed ${latest.length - 1} prior cycle(s); trend=${trend}`,
      points: latest,
    };
  }

  const firstChange = latest[1]!.count - latest[0]!.count;
  const secondChange = latest[2]!.count - latest[1]!.count;
  const status =
    firstChange > 0 && secondChange > 0 ? "tripped" : "not_tripped";
  const signed = (value: number) => (value >= 0 ? `+${value}` : String(value));
  return {
    status,
    details: `trend=${trend}; changes=${signed(firstChange)},${signed(secondChange)}`,
    points: latest,
  };
}

export function buildSummary(
  options: CliOptions,
  consistency: AuditRun,
  provenance: AuditRun,
  freshness: AuditRun,
  history: TrendPoint[] = [],
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
  const historicalFreshness = history
    .filter((point) => point.as_of < options.asOf)
    .sort((left, right) => left.as_of.localeCompare(right.as_of))
    .slice(-2);
  const freshnessGrowth = evaluateTwoCycleGrowth([
    ...historicalFreshness,
    { as_of: options.asOf, count: freshnessCounts.actionable_rows },
  ]);

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
      status:
        consistencyRepeatedNeedsReview > 0 ? "tripped" : "not_tripped",
      count: consistencyRepeatedNeedsReview,
      threshold:
        "trip when a needs_review entity/metric group spans multiple source paths",
      details:
        "the threshold is advisory and includes paths from both sides of each consistency row",
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
      status: freshnessGrowth.status,
      count: freshness.rows.length,
      threshold:
        "trip when total actionable rows grow across two consecutive cycles",
      details: freshnessGrowth.details,
    },
  ];

  return {
    generated_at: new Date().toISOString(),
    as_of: options.asOf,
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
    trends: {
      fact_freshness_actionable_rows: freshnessGrowth.points,
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

export function repeatedConsistencyNeedsReview(
  rows: Record<string, unknown>[],
): number {
  const groups = new Map<string, Set<string>>();
  for (const row of rows) {
    if (row.severity !== "needs_review") continue;
    const key = `${String(row.entity_key ?? "")}::${String(row.metric_key ?? "")}`;
    if (!groups.has(key)) groups.set(key, new Set());
    const paths = [
      row.path,
      asRecord(row.left)?.path,
      asRecord(row.right)?.path,
    ]
      .map((value) => String(value ?? ""))
      .filter(Boolean);
    for (const sourcePath of paths) {
      groups.get(key)!.add(sourcePath);
    }
  }
  let repeated = 0;
  for (const paths of groups.values()) {
    if (paths.size > 1) repeated += 1;
  }
  return repeated;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
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

export function renderMarkdown(summary: Summary): string {
  const lines = [
    "# Truthfulness Audit Summary",
    "",
    `- Generated at: ${summary.generated_at}`,
    `- As of: ${summary.as_of}`,
    "",
    "## Counts",
    "",
    "| Audit | Total | Key counts |",
    "|---|---:|---|",
    `| factual_consistency | ${summary.audits.factual_consistency.total} | conflict=${summary.audits.factual_consistency.conflict ?? 0}; needs_review=${summary.audits.factual_consistency.needs_review ?? 0} |`,
    `| provenance_completeness | ${summary.audits.provenance_completeness.total} | needs_review=${summary.audits.provenance_completeness.needs_review ?? 0}; warning=${summary.audits.provenance_completeness.warning ?? 0} |`,
    `| fact_freshness | ${summary.audits.fact_freshness.total} | tier1_review_by_due=${summary.audits.fact_freshness.tier1_review_by_due}; actionable=${summary.audits.fact_freshness.actionable_rows} |`,
    "",
    "## Trends",
    "",
    "| Metric | Recent cycles |",
    "|---|---|",
    `| fact_freshness_actionable_rows | ${summary.trends.fact_freshness_actionable_rows.map((point) => `${point.as_of}=${point.count}`).join(" -> ")} |`,
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

function printSummary(summary: Summary, artifactDir: string) {
  console.log("truthfulness_audit_runner=ok");
  console.log(`as_of=${summary.as_of}`);
  console.log(`artifact_dir=${artifactDir}`);
  console.log("audit\tstatus\tcount\tthreshold");
  for (const check of summary.checks) {
    console.log(`${check.audit}\t${check.status}\t${check.count}\t${check.threshold}`);
  }
}

if (import.meta.main) {
  main();
}
