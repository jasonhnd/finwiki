#!/usr/bin/env bun

import { copyFile, lstat, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { parseDomainMap } from "../lib/markdown_helpers";

const ROOT = path.resolve(import.meta.dir, "..");
const SITE_DIST = path.join(ROOT, "site", "dist");

export const APPROVED_OUTPUT_DIR_NAMES = new Set(["_site", "_vercel_public"]);

export const PUBLIC_ROOT_FILES = new Set([
  "CNAME",
  "CHANGELOG.md",
  "HOW-TO-NAVIGATE.md",
  "INDEX.md",
  "OBSIDIAN-SETUP.md",
  "README.md",
  "SCHEMA.md",
  "ai-index.json",
  "cross-domain-anchor-convention.md",
  "domain-bridge-navigation-guide.md",
  "entity-mirror-page-policy.md",
  "llms-full.txt",
  "llms-tasks.txt",
  "llms.txt",
  "robots.txt",
  "sitemap.xml",
  "topic-cluster-reference.md",
]);

const PUBLIC_STATIC_FILES = [
  "CNAME",
  "ai-index.json",
  "llms-full.txt",
  "llms-tasks.txt",
  "llms.txt",
  "robots.txt",
  "sitemap.xml",
] as const;

export interface AssembleStaticPublishOptions {
  rootDir: string;
  outDir: string;
  siteDistDir?: string;
  manifestFiles?: readonly string[];
  domainDirs?: readonly string[];
}

export interface AssembleStaticPublishResult {
  outDir: string;
  astroFiles: number;
  rawPublicFiles: number;
}

interface CliOptions {
  outDir: string;
}

interface CopySource {
  absolutePath: string;
  relativePath: string;
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

export function resolveApprovedOutputDir(rootDir: string, requestedOutDir: string): string {
  const absoluteRoot = path.resolve(rootDir);
  const absoluteOut = path.resolve(absoluteRoot, requestedOutDir);
  const approved = [...APPROVED_OUTPUT_DIR_NAMES].map((name) => path.join(absoluteRoot, name));

  if (!approved.includes(absoluteOut)) {
    throw new Error(
      `unsafe publish output: ${requestedOutDir}; expected one of ${[...APPROVED_OUTPUT_DIR_NAMES].join(", ")}`,
    );
  }
  return absoluteOut;
}

function normalizeManifestPath(value: string): string | null {
  if (!value || value.includes("\\") || path.posix.isAbsolute(value)) {
    return null;
  }
  const normalized = path.posix.normalize(value);
  if (
    normalized !== value ||
    normalized === "." ||
    normalized.startsWith("../") ||
    normalized.split("/").some((part) => !part || part === "." || part === "..")
  ) {
    return null;
  }
  return normalized;
}

export function isApprovedPublicFile(
  manifestPath: string,
  domainDirs: ReadonlySet<string>,
): boolean {
  const relativePath = normalizeManifestPath(manifestPath);
  if (!relativePath) {
    return false;
  }
  if (PUBLIC_ROOT_FILES.has(relativePath)) {
    return true;
  }

  const parts = relativePath.split("/");
  if (parts.some((part) => part.startsWith("."))) {
    return false;
  }
  if (parts.length >= 2 && domainDirs.has(parts[0])) {
    return relativePath.endsWith(".md");
  }
  if (parts.length >= 2 && parts[0] === "releases") {
    return relativePath.endsWith(".md");
  }
  if (parts.length >= 2 && parts[0] === "api") {
    return relativePath.endsWith(".json");
  }
  return false;
}

async function domainDirsFromIndex(rootDir: string): Promise<string[]> {
  const domains = await parseDomainMap(rootDir);
  const names = domains.map((domain) => domain.domain);
  for (const name of names) {
    if (!/^[A-Za-z0-9][A-Za-z0-9-]*$/.test(name)) {
      throw new Error(`invalid domain name in INDEX.md: ${name}`);
    }
  }
  return names;
}

async function readJsonObject(filePath: string, label: string): Promise<Record<string, unknown>> {
  let raw: string;
  try {
    raw = await readFile(filePath, "utf8");
  } catch {
    throw new Error(`${label} missing: ${filePath}`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`${label} is not valid JSON: ${filePath}`);
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`${label} must contain a JSON object: ${filePath}`);
  }
  return parsed as Record<string, unknown>;
}

async function publicManifestFiles(
  rootDir: string,
  domainDirs: ReadonlySet<string>,
): Promise<string[]> {
  const manifest = new Set<string>(PUBLIC_STATIC_FILES);
  const aiIndex = await readJsonObject(path.join(rootDir, "ai-index.json"), "AI index");
  if (!Array.isArray(aiIndex.entries)) {
    throw new Error("AI index entries must be an array");
  }
  for (const entry of aiIndex.entries) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      throw new Error("AI index contains an invalid entry");
    }
    const sourcePath = (entry as Record<string, unknown>).source_path;
    if (typeof sourcePath !== "string") {
      throw new Error("AI index entry is missing source_path");
    }
    if (isApprovedPublicFile(sourcePath, domainDirs)) {
      manifest.add(sourcePath);
    }
  }

  const apiIndexPath = path.join(rootDir, "api", "entries", "index.json");
  const apiIndex = await readJsonObject(apiIndexPath, "API entry index");
  if (!Array.isArray(apiIndex.entries)) {
    throw new Error("API entry index entries must be an array");
  }
  manifest.add("api/entries/index.json");
  for (const entry of apiIndex.entries) {
    if (typeof entry !== "object" || entry === null || Array.isArray(entry)) {
      throw new Error("API entry index contains an invalid entry");
    }
    const slug = (entry as Record<string, unknown>).slug;
    if (typeof slug !== "string") {
      throw new Error("API entry index entry is missing slug");
    }
    const normalizedSlug = normalizeManifestPath(slug);
    const domain = normalizedSlug?.split("/", 1)[0];
    if (
      !normalizedSlug ||
      !domain ||
      !domainDirs.has(domain) ||
      normalizedSlug.split("/").some((part) => part.startsWith("."))
    ) {
      throw new Error(`API entry index contains an unsafe slug: ${slug}`);
    }
    manifest.add(`api/entries/${normalizedSlug}.json`);
  }
  return [...manifest].sort();
}

async function assertDirectoryWithoutSymlinks(directory: string, label: string): Promise<void> {
  let directoryStat;
  try {
    directoryStat = await lstat(directory);
  } catch {
    throw new Error(`${label} missing: ${directory}`);
  }
  if (!directoryStat.isDirectory() || directoryStat.isSymbolicLink()) {
    throw new Error(`${label} is not a real directory: ${directory}`);
  }
}

async function collectTreeFiles(rootDir: string, relativeDir = ""): Promise<CopySource[]> {
  const directory = path.join(rootDir, relativeDir);
  const sources: CopySource[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relativePath = path.posix.join(relativeDir.replaceAll("\\", "/"), entry.name);
    const absolutePath = path.join(rootDir, relativePath);
    if (relativePath.split("/").some((part) => part.startsWith("."))) {
      throw new Error(`hidden files are not allowed in Astro output: ${relativePath}`);
    }
    if (entry.isSymbolicLink()) {
      throw new Error(`symbolic links are not allowed in Astro output: ${relativePath}`);
    }
    if (entry.isDirectory()) {
      sources.push(...(await collectTreeFiles(rootDir, relativePath)));
      continue;
    }
    if (!entry.isFile()) {
      throw new Error(`unsupported Astro output entry: ${relativePath}`);
    }
    sources.push({ absolutePath, relativePath });
  }
  return sources;
}

async function collectApprovedManifestFiles(
  rootDir: string,
  manifestFiles: readonly string[],
  domainDirs: ReadonlySet<string>,
): Promise<CopySource[]> {
  const sources: CopySource[] = [];
  for (const manifestPath of manifestFiles) {
    if (!isApprovedPublicFile(manifestPath, domainDirs)) {
      continue;
    }
    const relativePath = normalizeManifestPath(manifestPath);
    if (!relativePath) {
      throw new Error(`invalid manifest path selected for publishing: ${manifestPath}`);
    }
    const absolutePath = path.join(rootDir, relativePath);
    let sourceStat;
    try {
      sourceStat = await lstat(absolutePath);
    } catch {
      throw new Error(`approved manifest file missing from worktree: ${relativePath}`);
    }
    if (!sourceStat.isFile() || sourceStat.isSymbolicLink()) {
      throw new Error(`approved public source is not a real file: ${relativePath}`);
    }
    sources.push({ absolutePath, relativePath });
  }
  sources.sort((left, right) => left.relativePath.localeCompare(right.relativePath));
  return sources;
}

async function assertOutputIsNotSymlink(outDir: string): Promise<void> {
  try {
    const outStat = await lstat(outDir);
    if (outStat.isSymbolicLink()) {
      throw new Error(`publish output must not be a symbolic link: ${outDir}`);
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
}

async function copySources(
  sources: readonly CopySource[],
  outDir: string,
  options: { keepExisting?: boolean } = {},
): Promise<number> {
  let copied = 0;
  for (const source of sources) {
    const destination = path.join(outDir, source.relativePath);
    if (options.keepExisting) {
      try {
        await lstat(destination);
        continue;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
          throw error;
        }
      }
    }
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(source.absolutePath, destination);
    copied += 1;
  }
  return copied;
}

export async function assembleStaticPublish(
  options: AssembleStaticPublishOptions,
): Promise<AssembleStaticPublishResult> {
  const rootDir = path.resolve(options.rootDir);
  const outDir = resolveApprovedOutputDir(rootDir, options.outDir);
  const siteDistDir = path.resolve(options.siteDistDir ?? path.join(rootDir, "site", "dist"));
  const expectedSiteDist = path.join(rootDir, "site", "dist");
  if (siteDistDir !== expectedSiteDist) {
    throw new Error(`unsafe Astro output: ${siteDistDir}; expected ${expectedSiteDist}`);
  }

  await assertOutputIsNotSymlink(outDir);
  await assertDirectoryWithoutSymlinks(siteDistDir, "Astro output");

  const domainDirs = new Set(options.domainDirs ?? (await domainDirsFromIndex(rootDir)));
  const manifestFiles = options.manifestFiles ?? (await publicManifestFiles(rootDir, domainDirs));

  // Collect and validate every source before deleting an existing output tree.
  const astroSources = await collectTreeFiles(siteDistDir);
  const rawPublicSources = await collectApprovedManifestFiles(rootDir, manifestFiles, domainDirs);

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const astroFiles = await copySources(astroSources, outDir);
  const rawPublicFiles = await copySources(rawPublicSources, outDir, { keepExisting: true });
  await writeFile(path.join(outDir, ".nojekyll"), "", { encoding: "utf8" });

  return { outDir, astroFiles, rawPublicFiles };
}

async function main(): Promise<void> {
  const cli = parseCliArgs(process.argv.slice(2));
  const result = await assembleStaticPublish({
    rootDir: ROOT,
    siteDistDir: SITE_DIST,
    outDir: cli.outDir,
  });
  console.log(
    `assembled static publish dir: out=${path.relative(ROOT, result.outDir)} ` +
      `astro_files=${result.astroFiles} raw_public_files=${result.rawPublicFiles}`,
  );
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.stack : error);
    process.exit(1);
  });
}
