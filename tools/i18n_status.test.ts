import { describe, expect, test } from "bun:test";
import {
  blockingIssueCount,
  parseCliArgs,
  type LangReport,
} from "./i18n_status";

function report(overrides: Partial<LangReport> = {}): LangReport {
  return {
    lang: "en",
    mirrors: 1,
    current: 1,
    stale: 0,
    orphaned: 0,
    missing: 0,
    source_pointer_drift: 0,
    status_counts: { machine: 1 },
    fidelity_counts: { ok: 1 },
    missing_by_domain: {},
    samples: { stale: [], orphaned: [], missing: [] },
    ...overrides,
  };
}

describe("i18n status strict mode", () => {
  test("keeps report mode separate from the explicit release gate", () => {
    expect(parseCliArgs([])).toEqual({ asJson: false, failOnIssues: false });
    expect(parseCliArgs(["--json", "--fail-on-issues"])).toEqual({
      asJson: true,
      failOnIssues: true,
    });
    expect(() => parseCliArgs(["--unknown"])).toThrow("unknown argument");
  });

  test("treats missing, stale, orphaned, pointer drift, and review fidelity as blocking", () => {
    expect(blockingIssueCount(report())).toBe(0);
    expect(blockingIssueCount(report({ missing: 1 }))).toBe(1);
    expect(
      blockingIssueCount(
        report({
          stale: 1,
          orphaned: 1,
          source_pointer_drift: 1,
          fidelity_counts: { needs_review: 1 },
        }),
      ),
    ).toBe(4);
  });
});
