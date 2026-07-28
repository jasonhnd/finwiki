import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildSummary,
  evaluateTwoCycleGrowth,
  loadHistoricalTrend,
  parseArgs,
  renderMarkdown,
  repeatedConsistencyNeedsReview,
  runAudit,
  type AuditRun,
  type CliOptions,
} from "./audit_runner";

const REPOSITORY_ROOT = path.resolve(import.meta.dir, "..");
const HISTORY_FIXTURE = path.join(
  import.meta.dir,
  "fixtures",
  "audit-history",
);

function auditRun(
  name: string,
  rows: Record<string, unknown>[],
): AuditRun {
  return { name, command: [], rows };
}

function options(asOf: string): CliOptions {
  return {
    asOf,
    historyDir: HISTORY_FIXTURE,
    outDir: path.join(REPOSITORY_ROOT, "audit-artifacts", "test"),
    rootDir: REPOSITORY_ROOT,
  };
}

describe("truthfulness audit history", () => {
  test("captures child JSON larger than the Bun synchronous pipe limit", () => {
    const run = runAudit(
      "large_fixture",
      [
        process.execPath,
        "-e",
        "console.log(JSON.stringify(Array.from({length: 120000}, (_, index) => ({index, value: 'abcdefghij'}))))",
      ],
      REPOSITORY_ROOT,
    );

    expect(run.rows).toHaveLength(120000);
    expect(run.rows.at(-1)).toEqual({
      index: 119999,
      value: "abcdefghij",
    });
  });

  test("reproduces the observed 49 -> 415 -> 417 freshness trend", () => {
    const trend = loadHistoricalTrend(HISTORY_FIXTURE);
    expect(trend).toEqual([
      { as_of: "2026-07-06", count: 49 },
      { as_of: "2026-07-13", count: 415 },
      { as_of: "2026-07-14", count: 417 },
    ]);

    expect(evaluateTwoCycleGrowth(trend)).toEqual({
      status: "tripped",
      details:
        "trend=2026-07-06=49 -> 2026-07-13=415 -> 2026-07-14=417; changes=+366,+2",
      points: trend,
    });
  });

  test("uses two prior summaries to trip current queue growth", () => {
    const history = loadHistoricalTrend(HISTORY_FIXTURE).slice(0, 2);
    const summary = buildSummary(
      options("2026-07-14"),
      auditRun("factual_consistency", []),
      auditRun("provenance_completeness", []),
      auditRun(
        "fact_freshness",
        Array.from({ length: 417 }, () => ({})),
      ),
      history,
    );
    const growth = summary.checks.find(
      (check) => check.audit === "fact_freshness_queue_growth",
    );

    expect(growth?.status).toBe("tripped");
    expect(growth?.details).toContain(
      "2026-07-06=49 -> 2026-07-13=415 -> 2026-07-14=417",
    );
    expect(summary.trends.fact_freshness_actionable_rows).toEqual([
      { as_of: "2026-07-06", count: 49 },
      { as_of: "2026-07-13", count: 415 },
      { as_of: "2026-07-14", count: 417 },
    ]);
  });

  test("monitors insufficient history and clears a non-growing second cycle", () => {
    expect(
      evaluateTwoCycleGrowth([{ as_of: "2026-07-14", count: 417 }]).status,
    ).toBe("monitor");
    expect(
      evaluateTwoCycleGrowth([
        { as_of: "2026-07-06", count: 49 },
        { as_of: "2026-07-13", count: 415 },
        { as_of: "2026-07-14", count: 410 },
      ]).status,
    ).toBe("not_tripped");
  });

  test("resolves history after the final root-dir option regardless of argument order", () => {
    const parsed = parseArgs([
      "--history-dir",
      "history",
      "--root-dir",
      "/tmp/finwiki-history-root",
      "--as-of",
      "2026-07-14",
    ]);
    expect(parsed.historyDir).toBe(
      "/tmp/finwiki-history-root/history",
    );
  });
});

describe("truthfulness consistency patterns", () => {
  test("counts a needs_review group across left and right source paths", () => {
    const row = {
      severity: "needs_review",
      entity_key: "payments/example",
      metric_key: "market_share",
      path: "payments/left.md",
      left: { path: "payments/left.md" },
      right: { path: "payments/right.md" },
    };

    expect(repeatedConsistencyNeedsReview([row])).toBe(1);

    const summary = buildSummary(
      options("2026-07-14"),
      auditRun("factual_consistency", [row]),
      auditRun("provenance_completeness", []),
      auditRun("fact_freshness", []),
    );
    const repeated = summary.checks.find(
      (check) =>
        check.audit === "factual_consistency_needs_review_pattern",
    );
    expect(repeated?.count).toBe(1);
    expect(repeated?.status).toBe("tripped");
  });

  test("keeps summary artifacts free of history-directory paths", () => {
    const summary = buildSummary(
      options("2026-07-14"),
      auditRun("factual_consistency", []),
      auditRun("provenance_completeness", []),
      auditRun("fact_freshness", []),
      loadHistoricalTrend(HISTORY_FIXTURE).slice(0, 2),
    );
    const serialized = JSON.stringify(summary);
    const markdown = renderMarkdown(summary);

    expect(serialized).not.toContain(HISTORY_FIXTURE);
    expect(markdown).not.toContain(HISTORY_FIXTURE);
    expect(markdown).toContain(
      "2026-07-06=49 -> 2026-07-13=415 -> 2026-07-14=0",
    );
  });

  test("workflow downloads scheduled history and passes it to the runner", () => {
    const workflow = readFileSync(
      path.join(
        REPOSITORY_ROOT,
        ".github",
        "workflows",
        "truthfulness-audit.yml",
      ),
      "utf8",
    );

    expect(workflow).toContain("actions: read");
    expect(workflow).toContain("--event schedule");
    expect(workflow).toContain("--status success");
    expect(workflow).toContain("--limit 2");
    expect(workflow).toContain('--history-dir "$AUDIT_HISTORY_DIR"');
  });
});
