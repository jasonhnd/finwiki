import { afterEach, describe, expect, test } from "bun:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  assertPinnedBun,
  parseCliArgs,
  verificationPipeline,
} from "./verify";

const temporaryRoots: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("required verification pipeline", () => {
  test("accepts only the approved publish outputs", () => {
    expect(parseCliArgs([])).toEqual({ outDir: "_vercel_public" });
    expect(parseCliArgs(["--out", "_site"])).toEqual({ outDir: "_site" });
    expect(parseCliArgs(["--out=./_vercel_public"])).toEqual({
      outDir: "_vercel_public",
    });
    expect(() => parseCliArgs(["--out", "../_site"])).toThrow(
      "unsafe publish output",
    );
    expect(() => parseCliArgs(["--unknown"])).toThrow("unknown argument");
  });

  test("rejects a Bun runtime that differs from the repository pin", async () => {
    const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-bun-pin-"));
    temporaryRoots.push(rootDir);
    await writeFile(path.join(rootDir, ".bun-version"), "1.3.14\n", "utf8");
    await writeFile(
      path.join(rootDir, "package.json"),
      JSON.stringify({ packageManager: "bun@1.3.14" }),
      "utf8",
    );
    await writeFile(
      path.join(rootDir, "vercel.json"),
      JSON.stringify({
        installCommand: "cd site && bunx bun@1.3.14 install --frozen-lockfile",
        buildCommand: "bunx bun@1.3.14 tools/verify.ts --out _vercel_public",
      }),
      "utf8",
    );

    await expect(assertPinnedBun(rootDir, "1.3.14")).resolves.toBe("1.3.14");
    await expect(assertPinnedBun(rootDir, "1.3.13")).rejects.toThrow(
      "running 1.3.13, repository requires 1.3.14",
    );
  });

  test("rejects drift between the version file, package metadata, and Vercel", async () => {
    const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-bun-pin-drift-"));
    temporaryRoots.push(rootDir);
    await writeFile(path.join(rootDir, ".bun-version"), "1.3.14\n", "utf8");
    await writeFile(
      path.join(rootDir, "package.json"),
      JSON.stringify({ packageManager: "bun@1.3.13" }),
      "utf8",
    );
    await writeFile(
      path.join(rootDir, "vercel.json"),
      JSON.stringify({
        installCommand: "bunx bun@1.3.13 install",
        buildCommand: "bunx bun@1.3.13 tools/verify.ts",
      }),
      "utf8",
    );

    await expect(assertPinnedBun(rootDir, "1.3.14")).rejects.toThrow(
      "packageManager mismatch",
    );
    await writeFile(
      path.join(rootDir, "package.json"),
      JSON.stringify({ packageManager: "bun@1.3.14" }),
      "utf8",
    );
    await expect(assertPinnedBun(rootDir, "1.3.14")).rejects.toThrow(
      "Vercel installCommand",
    );
  });

  test("contains every required gate and forwards the requested output", () => {
    const pipeline = verificationPipeline("_site");
    const commands = pipeline.map((step) => step.command.join(" "));
    const allCommands = commands.join("\n");

    for (const requiredScript of [
      "release:docs",
      "release:check",
      "docs:audit",
      "docs:stale",
      "surface:drift",
      "ai:audit",
      "i18n:check",
      "index:counts",
      "wiki:audit:ci",
      "html:check",
      "html:metadata",
    ]) {
      expect(allCommands).toContain(requiredScript);
    }
    expect(allCommands).toContain("install --frozen-lockfile");
    expect(allCommands).toContain("audit --production");
    expect(allCommands).toContain("run check");
    expect(allCommands).toContain(" test");
    expect(allCommands).toContain("run build");
    expect(allCommands).toContain("run index:search");
    expect(allCommands).toContain("assemble_static_publish.ts --out _site");
    expect(allCommands).toContain("required_publish_routes.ts --out _site");
    expect(allCommands).toContain("run ai:audit --out _site");
    expect(
      commands.findIndex((command) => command.includes("run ai:audit")),
    ).toBeGreaterThan(
      commands.findIndex((command) =>
        command.includes("assemble_static_publish.ts"),
      ),
    );
    expect(commands.at(-1)).toBe("git diff --check");
  });
});
