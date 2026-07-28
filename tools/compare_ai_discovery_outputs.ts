#!/usr/bin/env bun

import { readdir, readFile } from "node:fs/promises";
import { posix as pathPosix } from "node:path";

export const AI_DISCOVERY_TARGET_FILES = [
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "llms-full.txt",
  "ai-index.json",
  "api/entries/index.json",
];

function parseArgs(argv: string[]): { expected: string; actual: string } {
  let expected = "";
  let actual = "";
  for (const arg of argv) {
    if (arg.startsWith("--expected=")) expected = arg.slice("--expected=".length).replaceAll("\\", "/");
    else if (arg.startsWith("--actual=")) actual = arg.slice("--actual=".length).replaceAll("\\", "/");
  }
  if (!expected || !actual) {
    throw new Error("Usage: bun compare_ai_discovery_outputs.ts --expected=<dir> --actual=<dir>");
  }
  return { expected, actual };
}

async function listJsonFiles(rootDir: string): Promise<string[]> {
  const results: string[] = [];
  async function walk(dirPath: string): Promise<void> {
    const entries = await readdir(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = pathPosix.join(dirPath, entry.name);
      if (entry.isDirectory()) await walk(fullPath);
      else if (entry.isFile() && entry.name.endsWith(".json")) {
        results.push(pathPosix.relative(rootDir, fullPath));
      }
    }
  }
  await walk(rootDir);
  results.sort();
  return results;
}

async function assertEqualFile(baseA: string, baseB: string, relPath: string): Promise<void> {
  const [a, b] = await Promise.all([
    readFile(pathPosix.join(baseA, relPath), "utf8"),
    readFile(pathPosix.join(baseB, relPath), "utf8"),
  ]);
  if (a !== b) {
    throw new Error(`Mismatch: ${relPath}`);
  }
}

export async function compareAiDiscoveryOutputs(
  expected: string,
  actual: string,
): Promise<{ surfaceFiles: number; apiJsonFiles: number }> {
  for (const relPath of AI_DISCOVERY_TARGET_FILES) {
    await assertEqualFile(expected, actual, relPath);
  }

  const expectedApiRoot = pathPosix.join(expected, "api/entries");
  const actualApiRoot = pathPosix.join(actual, "api/entries");
  const [expectedJsons, actualJsons] = await Promise.all([
    listJsonFiles(expectedApiRoot),
    listJsonFiles(actualApiRoot),
  ]);
  if (JSON.stringify(expectedJsons) !== JSON.stringify(actualJsons)) {
    throw new Error("api/entries JSON file set mismatch");
  }
  for (const relPath of expectedJsons) {
    await assertEqualFile(expectedApiRoot, actualApiRoot, relPath);
  }
  return {
    surfaceFiles: AI_DISCOVERY_TARGET_FILES.length,
    apiJsonFiles: expectedJsons.length,
  };
}

async function main(): Promise<void> {
  const { expected, actual } = parseArgs(process.argv.slice(2));
  const result = await compareAiDiscoveryOutputs(expected, actual);
  console.log(
    `compare-ok files=${result.surfaceFiles} api_jsons=${result.apiJsonFiles}`,
  );
}

if (import.meta.main) {
  await main();
}
