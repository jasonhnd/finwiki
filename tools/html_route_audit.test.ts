import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  auditHtmlRoutes,
  checkHtmlRoutes,
  parseCliArgs,
} from "./html_route_audit";

const temporaryRoots: string[] = [];

async function writeFixture(
  rootDir: string,
  relativePath: string,
  content: string,
): Promise<void> {
  const filePath = path.join(rootDir, "_site", relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
}

async function makePublishTree(): Promise<string> {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-html-routes-"));
  temporaryRoots.push(rootDir);
  await writeFixture(
    rootDir,
    "index.html",
    [
      '<a href="/about/">about</a>',
      '<a href="relative/?view=all#top">relative</a>',
      '<a href="https://finwiki.zksc.io/about/#details">same origin</a>',
      '<a href="#main">fragment</a>',
      '<a href="mailto:public@example.com">mail</a>',
      '<a href="https://example.com/">external</a>',
      '<link rel="stylesheet" href="/assets/site.css?rev=1">',
    ].join(""),
  );
  await writeFixture(rootDir, "about/index.html", '<a href="../">home</a>');
  await writeFixture(rootDir, "relative/index.html", '<a href="/">home</a>');
  await writeFixture(rootDir, "assets/site.css", "body {}\n");
  return rootDir;
}

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("final HTML route audit", () => {
  test("accepts internal hrefs that resolve in the assembled tree", async () => {
    const rootDir = await makePublishTree();
    const result = await checkHtmlRoutes({ rootDir, outDir: "_site" });
    expect(result.htmlFiles).toBe(3);
    expect(result.hrefs).toBe(9);
    expect(result.internalHrefs).toBe(7);
    expect(result.findings).toEqual([]);
  });

  test("fails on a committed negative fixture with a missing route", async () => {
    const rootDir = await makePublishTree();
    await writeFixture(
      rootDir,
      "broken/index.html",
      '<a href="../../missing/">missing</a>',
    );

    const result = await auditHtmlRoutes({ rootDir, outDir: "_site" });
    expect(result.findings).toHaveLength(1);
    expect(result.findings[0]).toMatchObject({
      sourceFile: "broken/index.html",
      href: "../../missing/",
      resolvedUrl: "https://finwiki.zksc.io/missing/",
    });
    await expect(
      checkHtmlRoutes({ rootDir, outDir: "_site" }),
    ).rejects.toThrow("final HTML route audit failed: 1 broken href");
  });

  test("accepts only approved assembled output directories", () => {
    expect(parseCliArgs([])).toEqual({ outDir: "_vercel_public" });
    expect(parseCliArgs(["--out", "_site"])).toEqual({ outDir: "_site" });
    expect(parseCliArgs(["--out=_vercel_public"])).toEqual({
      outDir: "_vercel_public",
    });
    expect(() => parseCliArgs(["--out"])).toThrow("--out requires");
    expect(() => parseCliArgs(["--unknown"])).toThrow("unknown argument");
  });
});
