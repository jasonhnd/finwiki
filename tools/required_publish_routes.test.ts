import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import {
  checkRequiredPublishRoutes,
  parseCliArgs,
  REQUIRED_PUBLISH_ROUTES,
} from "./required_publish_routes";

const temporaryRoots: string[] = [];

async function makePublishTree(outDir = "_site"): Promise<string> {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "finwiki-required-routes-"));
  temporaryRoots.push(rootDir);

  for (const route of REQUIRED_PUBLISH_ROUTES) {
    const filePath = path.join(rootDir, outDir, route.relativePath);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, `fixture for ${route.route}\n`, "utf8");
  }

  return rootDir;
}

afterEach(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((temporaryRoot) =>
      rm(temporaryRoot, { recursive: true, force: true }),
    ),
  );
});

describe("required publish routes", () => {
  test("accepts an assembled tree containing every required public route", async () => {
    const rootDir = await makePublishTree();
    await expect(
      checkRequiredPublishRoutes({ rootDir, outDir: "_site" }),
    ).resolves.toBeUndefined();
  });

  test("blocks a deliberately broken final route", async () => {
    const rootDir = await makePublishTree();
    await rm(path.join(rootDir, "_site", "en", "index.html"));

    await expect(
      checkRequiredPublishRoutes({ rootDir, outDir: "_site" }),
    ).rejects.toThrow("/en/ is missing");
  });

  test("blocks an empty route artifact", async () => {
    const rootDir = await makePublishTree();
    await writeFile(path.join(rootDir, "_site", "llms.txt"), "", "utf8");

    await expect(
      checkRequiredPublishRoutes({ rootDir, outDir: "_site" }),
    ).rejects.toThrow("/llms.txt is empty");
  });

  test("accepts only approved output directories", () => {
    expect(parseCliArgs([])).toEqual({ outDir: "_vercel_public" });
    expect(parseCliArgs(["--out", "_site"])).toEqual({ outDir: "_site" });
    expect(parseCliArgs(["--out=_vercel_public"])).toEqual({
      outDir: "_vercel_public",
    });
    expect(() => parseCliArgs(["--out"])).toThrow("--out requires");
    expect(() => parseCliArgs(["--unknown"])).toThrow("unknown argument");
  });
});
