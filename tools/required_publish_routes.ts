#!/usr/bin/env bun

import { lstat, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { resolveApprovedOutputDir } from "./assemble_static_publish";

export interface RequiredPublishRoute {
  route: string;
  relativePath: string;
}

export const REQUIRED_PUBLISH_ROUTES: readonly RequiredPublishRoute[] = [
  { route: "/", relativePath: "index.html" },
  { route: "/ja/", relativePath: "ja/index.html" },
  { route: "/en/", relativePath: "en/index.html" },
  { route: "/CNAME", relativePath: "CNAME" },
  { route: "/robots.txt", relativePath: "robots.txt" },
  { route: "/sitemap.xml", relativePath: "sitemap.xml" },
  { route: "/llms.txt", relativePath: "llms.txt" },
  { route: "/llms-full.txt", relativePath: "llms-full.txt" },
  { route: "/ai-index.json", relativePath: "ai-index.json" },
  { route: "/api/entries/index.json", relativePath: "api/entries/index.json" },
  {
    route: "/pagefind/pagefind.js",
    relativePath: "pagefind/pagefind.js",
  },
  {
    route: "/pagefind/pagefind-component-ui.js",
    relativePath: "pagefind/pagefind-component-ui.js",
  },
  {
    route: "/pagefind/pagefind-component-ui.css",
    relativePath: "pagefind/pagefind-component-ui.css",
  },
];

export interface CheckRequiredPublishRoutesOptions {
  rootDir: string;
  outDir: string;
  routes?: readonly RequiredPublishRoute[];
}

interface CliOptions {
  outDir: string;
}

export function parseCliArgs(argv: readonly string[]): CliOptions {
  let outDir = "_vercel_public";

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--out") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("--out requires a directory value");
      }
      outDir = value;
      index += 1;
      continue;
    }
    if (arg.startsWith("--out=")) {
      const value = arg.slice("--out=".length);
      if (!value) {
        throw new Error("--out requires a directory value");
      }
      outDir = value;
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }

  return { outDir };
}

export async function checkRequiredPublishRoutes(
  options: CheckRequiredPublishRoutesOptions,
): Promise<void> {
  const rootDir = path.resolve(options.rootDir);
  const outDir = resolveApprovedOutputDir(rootDir, options.outDir);
  const routes = options.routes ?? REQUIRED_PUBLISH_ROUTES;
  const failures: string[] = [];

  for (const route of routes) {
    const filePath = path.join(outDir, route.relativePath);
    try {
      const fileStat = await lstat(filePath);
      if (!fileStat.isFile() || fileStat.isSymbolicLink()) {
        failures.push(`${route.route} is not a regular file (${route.relativePath})`);
        continue;
      }
      if ((await readFile(filePath)).byteLength === 0) {
        failures.push(`${route.route} is empty (${route.relativePath})`);
      }
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        failures.push(`${route.route} is missing (${route.relativePath})`);
        continue;
      }
      throw error;
    }
  }

  if (failures.length > 0) {
    throw new Error(`required publish route check failed:\n- ${failures.join("\n- ")}`);
  }
}

async function main(): Promise<void> {
  const rootDir = path.resolve(import.meta.dir, "..");
  const cli = parseCliArgs(process.argv.slice(2));
  await checkRequiredPublishRoutes({ rootDir, outDir: cli.outDir });
  console.log(
    `required publish routes: PASS (${REQUIRED_PUBLISH_ROUTES.length} routes, out=${cli.outDir})`,
  );
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.stack : error);
    process.exit(1);
  });
}
