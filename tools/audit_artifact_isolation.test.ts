import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  AUDIT_ARTIFACT_DIR_NAME,
  iterMarkdownFiles,
} from "../lib/markdown_helpers";
import { resolveArtifactOutput } from "./audit_runner";

const REPOSITORY_ROOT = path.resolve(import.meta.dir, "..");
const temporaryRoots: string[] = [];
const FIXED_GENERATED_AT = "2026-07-27T12:00:00+09:00";

async function put(rootDir: string, relativePath: string, content: string): Promise<void> {
  const filePath = path.join(rootDir, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
}

async function listFiles(rootDir: string, relativeDir = ""): Promise<string[]> {
  const files: string[] = [];
  for (const entry of await readdir(path.join(rootDir, relativeDir), { withFileTypes: true })) {
    const relativePath = path.posix.join(relativeDir.replaceAll("\\", "/"), entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(rootDir, relativePath)));
    } else {
      files.push(relativePath);
    }
  }
  return files.sort();
}

async function snapshotFiles(rootDir: string): Promise<Record<string, string>> {
  const snapshot: Record<string, string> = {};
  for (const relativePath of await listFiles(rootDir)) {
    snapshot[relativePath] = await readFile(path.join(rootDir, relativePath), "utf8");
  }
  return snapshot;
}

function runTool(command: string[]): string {
  const result = Bun.spawnSync({
    cmd: command,
    cwd: REPOSITORY_ROOT,
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env },
  });
  const stdout = result.stdout.toString("utf8");
  const stderr = result.stderr.toString("utf8");
  if (result.exitCode !== 0) {
    throw new Error(`command failed (${result.exitCode}): ${command.join(" ")}\n${stdout}${stderr}`);
  }
  return stdout;
}

function generateDiscovery(rootDir: string, outDir: string): void {
  runTool([
    process.execPath,
    path.join(REPOSITORY_ROOT, "tools", "generate_ai_discovery.ts"),
    `--root=${rootDir}`,
    `--out-dir=${outDir}`,
    `--generated-at=${FIXED_GENERATED_AT}`,
    `--api-index-generated-at=${FIXED_GENERATED_AT}`,
  ]);
}

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("truthfulness audit artifact isolation", () => {
  test("allows only the ignored artifact directory for in-repository output", async () => {
    const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-audit-output-test-"));
    temporaryRoots.push(rootDir);

    expect(resolveArtifactOutput(rootDir, AUDIT_ARTIFACT_DIR_NAME, "2026-07-27")).toBe(
      path.join(rootDir, AUDIT_ARTIFACT_DIR_NAME),
    );
    expect(
      resolveArtifactOutput(
        rootDir,
        `${AUDIT_ARTIFACT_DIR_NAME}/truthfulness-2026-07-27`,
        "2026-07-27",
      ),
    ).toBe(path.join(rootDir, AUDIT_ARTIFACT_DIR_NAME, "truthfulness-2026-07-27"));
    expect(() => resolveArtifactOutput(rootDir, ".", "2026-07-27")).toThrow(
      "unsafe in-repository audit output",
    );
    expect(() => resolveArtifactOutput(rootDir, "example-domain", "2026-07-27")).toThrow(
      "unsafe in-repository audit output",
    );

    const defaultOutput = resolveArtifactOutput(rootDir, null, "2026-07-27");
    expect(path.relative(rootDir, defaultOutput).startsWith("..")).toBe(true);
  });

  test("keeps generated audit artifacts out of corpus and discovery regeneration", async () => {
    const workspace = await mkdtemp(path.join(os.tmpdir(), "finwiki-audit-isolation-test-"));
    temporaryRoots.push(workspace);
    const rootDir = path.join(workspace, "repo");
    const beforeDir = path.join(workspace, "before");
    const afterDir = path.join(workspace, "after");
    const auditDir = path.join(rootDir, AUDIT_ARTIFACT_DIR_NAME);

    await put(
      rootDir,
      "INDEX.md",
      [
        "# Fixture index",
        "",
        "## Domain Map",
        "",
        "| Domain | Entries | Route | Scope |",
        "|---|---:|---|---|",
        "| example | 1 | [[example/INDEX]] | Regression fixture |",
        "",
      ].join("\n"),
    );
    await put(rootDir, "example/INDEX.md", "# Example domain\n");
    await put(
      rootDir,
      "example/entry.md",
      [
        "---",
        "title: Example entry",
        "domain: example",
        "last_updated: 2026-07-27",
        "last_tended: 2026-07-27",
        "review_by: 2027-07-27",
        "confidence: verified",
        "sources:",
        "  - https://example.com/public-source",
        "---",
        "",
        "# Example entry",
        "",
        "A public-source fixture entry.",
        "",
      ].join("\n"),
    );

    const corpusBefore = (await iterMarkdownFiles(rootDir)).map((filePath) =>
      path.relative(rootDir, filePath).replaceAll("\\", "/"),
    );
    generateDiscovery(rootDir, beforeDir);

    runTool([
      process.execPath,
      path.join(REPOSITORY_ROOT, "tools", "audit_runner.ts"),
      "--root-dir",
      rootDir,
      "--out",
      auditDir,
      "--as-of",
      "2026-07-27",
    ]);

    const corpusAfter = (await iterMarkdownFiles(rootDir)).map((filePath) =>
      path.relative(rootDir, filePath).replaceAll("\\", "/"),
    );
    expect(corpusAfter).toEqual(corpusBefore);
    expect(corpusAfter.every((relativePath) => !relativePath.includes(AUDIT_ARTIFACT_DIR_NAME))).toBe(
      true,
    );

    const summaryJsonText = await readFile(path.join(auditDir, "summary.json"), "utf8");
    const summaryMarkdown = await readFile(path.join(auditDir, "summary.md"), "utf8");
    const summaryJson = JSON.parse(summaryJsonText) as Record<string, unknown>;
    expect(summaryJson.root_dir).toBeUndefined();
    expect(summaryJson.artifact_dir).toBeUndefined();
    expect(summaryJsonText).not.toContain(rootDir);
    expect(summaryMarkdown).not.toContain(rootDir);
    expect(summaryMarkdown).not.toContain(auditDir);

    generateDiscovery(rootDir, afterDir);
    expect(await snapshotFiles(afterDir)).toEqual(await snapshotFiles(beforeDir));

    const publicSnapshot = await snapshotFiles(afterDir);
    const allPublicOutput = Object.values(publicSnapshot).join("\n");
    expect(allPublicOutput).not.toContain(AUDIT_ARTIFACT_DIR_NAME);
    expect(allPublicOutput).not.toContain(rootDir);
    expect(Object.keys(publicSnapshot)).toContain("ai-index.json");
    expect(Object.keys(publicSnapshot)).toContain("api/entries/index.json");
    expect(Object.keys(publicSnapshot)).toContain("llms.txt");
    expect(Object.keys(publicSnapshot)).toContain("llms-full.txt");
    expect(Object.keys(publicSnapshot)).toContain("sitemap.xml");
  });
});
