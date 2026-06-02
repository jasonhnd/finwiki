#!/usr/bin/env bun
import { constants as fsConstants } from "node:fs";
import {
  access,
  copyFile,
  mkdir,
  readdir,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dir, "..");
const SITE_DIST = path.join(ROOT, "site", "dist");

const SKIP_DIRS = new Set([
  ".git",
  ".github",
  ".opinions",
  ".templates",
  ".vercel",
  ".vscode",
  "app",
  "node_modules",
  "releases",
  "site",
  "tools",
  "_site",
  "_vercel_public",
  ".cache",
  ".ruff_cache",
  "__pycache__",
]);

function argValue(name: string, fallback: string): string {
  const idx = process.argv.indexOf(name);
  if (idx === -1) {
    return fallback;
  }
  return process.argv[idx + 1] ?? fallback;
}

async function exists(file: string): Promise<boolean> {
  try {
    await access(file, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function copyTree(
  src: string,
  dest: string,
  options: { ignoreExisting?: boolean } = {},
): Promise<number> {
  let files = 0;
  for (const entry of await readdir(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await mkdir(to, { recursive: true });
      files += await copyTree(from, to, options);
    } else if (entry.isFile()) {
      if (options.ignoreExisting && (await exists(to))) {
        continue;
      }
      await mkdir(path.dirname(to), { recursive: true });
      await copyFile(from, to);
      files += 1;
    }
  }
  return files;
}

async function copyRootSurface(outDir: string): Promise<number> {
  let files = 0;
  for (const entry of await readdir(ROOT, { withFileTypes: true })) {
    if (entry.name === "index.html") {
      continue;
    }
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name === path.basename(outDir)) {
        continue;
      }
      const from = path.join(ROOT, entry.name);
      const to = path.join(outDir, entry.name);
      await mkdir(to, { recursive: true });
      files += await copyTree(from, to, { ignoreExisting: true });
    } else if (entry.isFile()) {
      const from = path.join(ROOT, entry.name);
      const to = path.join(outDir, entry.name);
      if (await exists(to)) {
        continue;
      }
      await copyFile(from, to);
      files += 1;
    }
  }
  return files;
}

async function main(): Promise<void> {
  const outDir = path.resolve(ROOT, argValue("--out", "_vercel_public"));
  if (!(await exists(SITE_DIST))) {
    throw new Error(`Astro output missing: ${SITE_DIST}`);
  }
  const siteStat = await stat(SITE_DIST);
  if (!siteStat.isDirectory()) {
    throw new Error(`Astro output is not a directory: ${SITE_DIST}`);
  }

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const astroFiles = await copyTree(SITE_DIST, outDir);
  const rootFiles = await copyRootSurface(outDir);
  await writeFile(path.join(outDir, ".nojekyll"), "", { encoding: "utf8" });

  console.log(
    `assembled static publish dir: out=${path.relative(ROOT, outDir)} ` +
      `astro_files=${astroFiles} root_surface_files=${rootFiles}`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
});
