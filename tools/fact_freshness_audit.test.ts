import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

type FreshnessRow = {
  path: string;
  freshness_class: "event" | "high" | "medium" | "low";
  reasons: string[];
};

const REPOSITORY_ROOT = path.resolve(import.meta.dir, "..");
const temporaryRoots: string[] = [];

async function putEntry(
  rootDir: string,
  relativePath: string,
  {
    title,
    status = "candidate",
    body,
  }: {
    title: string;
    status?: string;
    body: string;
  },
): Promise<void> {
  const filePath = path.join(rootDir, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(
    filePath,
    [
      "---",
      `title: ${title}`,
      `domain: ${relativePath.split("/")[0]}`,
      `status: ${status}`,
      "confidence: certain",
      "last_updated: 2026-05-25",
      "last_tended: 2026-05-25",
      "review_by: 2027-01-03",
      "sources:",
      "  - https://example.com/public-source",
      "---",
      "",
      `# ${title}`,
      "",
      body,
      "",
    ].join("\n"),
    "utf8",
  );
}

function runFreshness(rootDir: string): FreshnessRow[] {
  const result = Bun.spawnSync({
    cmd: [
      process.execPath,
      path.join(REPOSITORY_ROOT, "tools", "fact_freshness_audit.ts"),
      "--json",
      "--as-of",
      "2026-07-29",
      "--root-dir",
      rootDir,
    ],
    cwd: REPOSITORY_ROOT,
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env },
  });
  if (result.exitCode !== 0) {
    throw new Error(result.stderr.toString("utf8"));
  }
  return JSON.parse(result.stdout.toString("utf8")) as FreshnessRow[];
}

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("fact freshness inference", () => {
  test("keeps generic body mentions out of event classification while preserving strong metadata cues", async () => {
    const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-freshness-test-"));
    temporaryRoots.push(rootDir);

    await putEntry(rootDir, "example/generic-profile.md", {
      title: "Generic profile",
      body: "One ordinary use case mentions an IPO and acquisition only as background context.",
    });
    await putEntry(rootDir, "example/acquisition-deadline.md", {
      title: "Acquisition deadline",
      body: "This page tracks a dated transaction milestone.",
    });
    await putEntry(rootDir, "example/historical-case-study.md", {
      title: "Historical operating case study",
      body: "This is a stable retrospective, not a live transaction.",
    });
    await putEntry(rootDir, "example/merger-process.md", {
      title: "Merger process",
      body: "This page explains a durable transaction mechanism.",
    });
    await putEntry(rootDir, "example/operator-registry.md", {
      title: "Operator registry",
      body: "The registered operator list is a public snapshot.",
    });
    await putEntry(rootDir, "example/future-reviewed-profile.md", {
      title: "Future reviewed profile",
      status: "current",
      body: "This ordinary use case has an explicit future review date.",
    });

    const rows = runFreshness(rootDir);
    const byPath = new Map(rows.map((row) => [row.path, row]));

    expect(byPath.get("example/generic-profile.md")).toMatchObject({
      freshness_class: "high",
      reasons: ["candidate_status"],
    });
    expect(byPath.get("example/generic-profile.md")?.reasons).not.toContain("event_keyword");

    expect(byPath.get("example/acquisition-deadline.md")).toMatchObject({
      freshness_class: "event",
    });
    expect(byPath.get("example/acquisition-deadline.md")?.reasons).toContain("event_keyword");

    expect(byPath.get("example/historical-case-study.md")).toMatchObject({
      freshness_class: "high",
    });
    expect(byPath.get("example/historical-case-study.md")?.reasons).toContain("case_study_keyword");
    expect(byPath.get("example/historical-case-study.md")?.reasons).not.toContain("event_keyword");

    expect(byPath.get("example/merger-process.md")).toMatchObject({
      freshness_class: "high",
    });
    expect(byPath.get("example/merger-process.md")?.reasons).toContain(
      "volatile_topic_keyword",
    );
    expect(byPath.get("example/merger-process.md")?.reasons).not.toContain("event_keyword");

    expect(byPath.get("example/operator-registry.md")).toMatchObject({
      freshness_class: "high",
    });
    expect(byPath.get("example/operator-registry.md")?.reasons).toContain(
      "registry_or_statistics_keyword",
    );

    expect(byPath.has("example/future-reviewed-profile.md")).toBe(false);
  });
});
