import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

type ConsistencyRow = {
  claim_type: "registration_number" | "date" | "numeric_metric" | "status" | "relationship";
  entity_key: string;
  metric_key: string;
  left: { value: string; path: string };
  right: { value: string; path: string };
};

const REPOSITORY_ROOT = path.resolve(import.meta.dir, "..");
const temporaryRoots: string[] = [];

async function putEntry(
  rootDir: string,
  relativePath: string,
  body: string,
  canonicalAnchor?: string,
): Promise<void> {
  const filePath = path.join(rootDir, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(
    filePath,
    [
      "---",
      `title: ${path.basename(relativePath, ".md")}`,
      `domain: ${relativePath.split("/")[0]}`,
      "status: active",
      "confidence: certain",
      ...(canonicalAnchor ? [`canonical_anchor: ${canonicalAnchor}`] : []),
      "sources:",
      "  - https://example.com/public-source",
      "---",
      "",
      body,
      "",
    ].join("\n"),
    "utf8",
  );
}

function runConsistency(rootDir: string): ConsistencyRow[] {
  const result = Bun.spawnSync({
    cmd: [
      process.execPath,
      path.join(REPOSITORY_ROOT, "tools", "factual_consistency_audit.ts"),
      "--json",
      "--root-dir",
      rootDir,
    ],
    cwd: REPOSITORY_ROOT,
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env },
  });
  if (result.exitCode !== 0) throw new Error(result.stderr.toString("utf8"));
  return JSON.parse(result.stdout.toString("utf8")) as ConsistencyRow[];
}

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("factual consistency extraction", () => {
  test("keeps directional parent claims and the amount nearest a metric label", async () => {
    const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-consistency-test-"));
    temporaryRoots.push(rootDir);

    await putEntry(
      rootDir,
      "entities/example-bank.md",
      [
        "# Example Bank",
        "",
        "This entry is the companion to [[profiles/example-bank|the entity anchor]] and a peer of [[peers/other-bank]].",
        "",
        "Example Bank is the wholly-owned banking subsidiary of [[groups/real-parent|Real Parent]].",
        "",
        "Example Bank は [[groups/real-parent|Real Parent]] の子会社である。",
        "",
        "The group announced an agreement to make [[targets/acquired-bank|Acquired Bank]] a wholly-owned subsidiary.",
        "",
        "Owner Real Parent 100%; capital 1,190 億円.",
      ].join("\n"),
      "profiles/example-bank",
    );
    await putEntry(
      rootDir,
      "profiles/example-bank.md",
      [
        "# Example Bank profile",
        "",
        "| Parent boundary | [[groups/real-parent|Real Parent]] 100% bank subsidiary |",
        "| Capital | 1,190 億円 |",
        "",
        "- [[peers/other-bank|Other Bank]] is the parent group's primary regional-bank peer.",
        "- [[groups/former-parent|Former Parent]]（旧親会社）",
      ].join("\n"),
    );

    expect(runConsistency(rootDir)).toEqual([]);
  });

  test("still reports genuine parent and capital differences", async () => {
    const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-consistency-test-"));
    temporaryRoots.push(rootDir);

    await putEntry(
      rootDir,
      "entities/example-bank.md",
      [
        "# Example Bank",
        "",
        "| Parent | [[groups/parent-a|Parent A]] (100%) |",
        "| Capital | 1,190 億円 |",
      ].join("\n"),
      "profiles/example-bank",
    );
    await putEntry(
      rootDir,
      "profiles/example-bank.md",
      [
        "# Example Bank profile",
        "",
        "| Parent | [[groups/parent-b|Parent B]] (100%) |",
        "| Capital | 500 億円 |",
      ].join("\n"),
    );

    const rows = runConsistency(rootDir);
    expect(rows).toHaveLength(2);
    expect(rows.map((row) => `${row.claim_type}:${row.metric_key}`).sort()).toEqual([
      "numeric_metric:capital",
      "relationship:parent_entity",
    ]);
  });
});
