import { afterEach, describe, expect, test } from "bun:test";
import {
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  assembleStaticPublish,
  parseCliArgs,
  resolveApprovedOutputDir,
} from "./assemble_static_publish";

const temporaryRoots: string[] = [];

async function makeWorkspace(): Promise<{ workspace: string; rootDir: string }> {
  const workspace = await mkdtemp(path.join(os.tmpdir(), "finwiki-publish-test-"));
  temporaryRoots.push(workspace);
  const rootDir = path.join(workspace, "repo");
  await mkdir(path.join(rootDir, "site", "dist"), { recursive: true });
  return { workspace, rootDir };
}

async function put(rootDir: string, relativePath: string, content = relativePath): Promise<void> {
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

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("static publish assembly", () => {
  test("copies Astro output and only approved manifest-selected raw surfaces", async () => {
    const { rootDir } = await makeWorkspace();
    await put(rootDir, "site/dist/index.html", "astro-home");
    await put(rootDir, "site/dist/assets/app.js", "astro-app");

    const approvedFiles = [
      "CNAME",
      "INDEX.md",
      "README.md",
      "SCHEMA.md",
      "robots.txt",
      "JapanFG/INDEX.md",
      "JapanFG/example.md",
      "api/entries/index.json",
      "releases/v2026.07.27.md",
    ];
    const rejectedFiles = [
      ".DS_Store",
      ".delivery.yml",
      "AGENTS.md",
      "audit-artifacts/summary.md",
      "docs/private.md",
      "lib/private.ts",
      "package.json",
      "tools/private.ts",
      "unknown-root.txt",
      "JapanFG/.DS_Store",
      "JapanFG/untracked.md",
    ];
    for (const file of [...approvedFiles, ...rejectedFiles]) {
      await put(rootDir, file);
    }

    const result = await assembleStaticPublish({
      rootDir,
      outDir: "_site",
      manifestFiles: [...approvedFiles, ...rejectedFiles.filter((file) => file !== "JapanFG/untracked.md")],
      domainDirs: ["JapanFG"],
    });

    expect(result.astroFiles).toBe(2);
    expect(result.rawPublicFiles).toBe(9);
    expect(await readFile(path.join(rootDir, "_site", "index.html"), "utf8")).toBe("astro-home");
    expect(await listFiles(path.join(rootDir, "_site"))).toEqual([
      ".nojekyll",
      "CNAME",
      "INDEX.md",
      "JapanFG/INDEX.md",
      "JapanFG/example.md",
      "README.md",
      "SCHEMA.md",
      "api/entries/index.json",
      "assets/app.js",
      "index.html",
      "releases/v2026.07.27.md",
      "robots.txt",
    ]);
  });

  test("uses generated indexes as the production raw-file manifest", async () => {
    const { rootDir } = await makeWorkspace();
    await put(rootDir, "site/dist/index.html", "astro-home");
    await put(rootDir, "CNAME");
    await put(rootDir, "llms-full.txt");
    await put(rootDir, "llms-tasks.txt");
    await put(rootDir, "llms.txt");
    await put(rootDir, "robots.txt");
    await put(rootDir, "sitemap.xml");
    await put(rootDir, "README.md");
    await put(rootDir, "JapanFG/example.md");
    await put(rootDir, "releases/v2026.07.27.md");
    await put(rootDir, "AGENTS.md");
    await put(rootDir, "docs/private.md");
    await put(rootDir, "JapanFG/unmanifested.md");
    await put(rootDir, "api/entries/JapanFG/example.json", "{}");
    await put(rootDir, "api/entries/unmanifested.json", "{}");
    await put(
      rootDir,
      "ai-index.json",
      JSON.stringify({
        entries: [
          { source_path: "README.md" },
          { source_path: "JapanFG/example.md" },
          { source_path: "releases/v2026.07.27.md" },
          { source_path: "AGENTS.md" },
          { source_path: "docs/private.md" },
        ],
      }),
    );
    await put(
      rootDir,
      "api/entries/index.json",
      JSON.stringify({ entries: [{ slug: "JapanFG/example" }] }),
    );

    await assembleStaticPublish({
      rootDir,
      outDir: "_site",
      domainDirs: ["JapanFG"],
    });

    const published = await listFiles(path.join(rootDir, "_site"));
    expect(published).toContain("JapanFG/example.md");
    expect(published).toContain("api/entries/JapanFG/example.json");
    expect(published).not.toContain("AGENTS.md");
    expect(published).not.toContain("audit-artifacts/summary.md");
    expect(published).not.toContain("docs/private.md");
    expect(published).not.toContain("JapanFG/unmanifested.md");
    expect(published).not.toContain("api/entries/unmanifested.json");
  });

  test("rejects unsafe output paths before deleting any existing files", async () => {
    const { workspace, rootDir } = await makeWorkspace();
    await put(rootDir, "site/dist/index.html", "astro-home");
    await put(rootDir, "keep.txt", "repo-sentinel");
    await put(workspace, "outside/keep.txt", "outside-sentinel");

    const unsafeOutputs = [
      ".",
      "..",
      path.join(workspace, "outside"),
      "docs",
      "_site/nested",
      "site/dist",
    ];
    for (const outDir of unsafeOutputs) {
      await expect(
        assembleStaticPublish({
          rootDir,
          outDir,
          manifestFiles: [],
          domainDirs: [],
        }),
      ).rejects.toThrow("unsafe publish output");
      expect(await readFile(path.join(rootDir, "keep.txt"), "utf8")).toBe("repo-sentinel");
      expect(await readFile(path.join(workspace, "outside", "keep.txt"), "utf8")).toBe(
        "outside-sentinel",
      );
    }
  });

  test("rejects an output symlink without touching its target", async () => {
    const { workspace, rootDir } = await makeWorkspace();
    await put(rootDir, "site/dist/index.html", "astro-home");
    await put(workspace, "outside/keep.txt", "outside-sentinel");
    await symlink(path.join(workspace, "outside"), path.join(rootDir, "_site"));

    await expect(
      assembleStaticPublish({
        rootDir,
        outDir: "_site",
        manifestFiles: [],
        domainDirs: [],
      }),
    ).rejects.toThrow("must not be a symbolic link");
    expect(await readFile(path.join(workspace, "outside", "keep.txt"), "utf8")).toBe(
      "outside-sentinel",
    );
    expect((await lstat(path.join(rootDir, "_site"))).isSymbolicLink()).toBe(true);
  });

  test("rejects hidden Astro output before replacing an existing publish tree", async () => {
    const { rootDir } = await makeWorkspace();
    await put(rootDir, "site/dist/index.html", "astro-home");
    await put(rootDir, "site/dist/.DS_Store", "finder-metadata");
    await put(rootDir, "_site/keep.txt", "publish-sentinel");

    await expect(
      assembleStaticPublish({
        rootDir,
        outDir: "_site",
        manifestFiles: [],
        domainDirs: [],
      }),
    ).rejects.toThrow("hidden files are not allowed");
    expect(await readFile(path.join(rootDir, "_site", "keep.txt"), "utf8")).toBe(
      "publish-sentinel",
    );
  });

  test("rejects audit artifacts emitted into Astro output", async () => {
    const { rootDir } = await makeWorkspace();
    await put(rootDir, "site/dist/index.html", "astro-home");
    await put(rootDir, "site/dist/audit-artifacts/summary.md", "private-build-artifact");

    await expect(
      assembleStaticPublish({
        rootDir,
        outDir: "_site",
        manifestFiles: [],
        domainDirs: [],
      }),
    ).rejects.toThrow("audit artifacts are not allowed");
  });
});

describe("static publish CLI", () => {
  test("accepts only approved output locations", () => {
    const rootDir = path.resolve("/tmp/finwiki-root");
    expect(resolveApprovedOutputDir(rootDir, "_site")).toBe(path.join(rootDir, "_site"));
    expect(resolveApprovedOutputDir(rootDir, "./_vercel_public")).toBe(
      path.join(rootDir, "_vercel_public"),
    );
    expect(() => resolveApprovedOutputDir(rootDir, ".")).toThrow("unsafe publish output");
    expect(() => resolveApprovedOutputDir(rootDir, "../escape")).toThrow("unsafe publish output");
  });

  test("rejects missing and unknown arguments", () => {
    expect(parseCliArgs([])).toEqual({ outDir: "_vercel_public" });
    expect(parseCliArgs(["--out", "_site"])).toEqual({ outDir: "_site" });
    expect(parseCliArgs(["--out=_vercel_public"])).toEqual({ outDir: "_vercel_public" });
    expect(() => parseCliArgs(["--out"])).toThrow("--out requires");
    expect(() => parseCliArgs(["--unknown"])).toThrow("unknown argument");
  });
});
