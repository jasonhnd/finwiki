#!/usr/bin/env bun

import {
  existsSync,
  lstatSync,
  realpathSync,
  readFileSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import { SITE_URL } from "../lib/markdown_helpers";
import { resolveApprovedOutputDir } from "./assemble_static_publish";

/**
 * Generated route audit
 *
 * Validates internal URLs from the AI text, sitemap, structured index, and API
 * surfaces against the final assembled publish tree. Source-file existence is
 * intentionally insufficient: rendered entry routes live below /ja/ and /en/,
 * while raw Markdown keeps its explicit .md suffix.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const TARGET_TEXT_FILES = ["llms.txt", "llms-full.txt", "llms-tasks.txt"] as const;
const SITE_ORIGIN = new URL(SITE_URL).origin;
const SITE_HOSTNAME = new URL(SITE_URL).hostname;

const ANSI_RED = "\x1b[31m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_RESET = "\x1b[0m";

const URL_VALUE_KEYS = new Set([
  "url",
  "html_url",
  "raw_markdown_url",
  "github_url",
  "api_url",
  "anchor_url",
  "source_url",
  "target_url",
  "site",
  "site_url",
  "human_homepage",
  "global_index",
  "global_index_markdown",
  "llms",
  "llms_full",
  "ai_index_json",
  "sitemap",
  "robots",
  "github_repository",
]);
const URL_ARRAY_KEYS = new Set(["resolved_wikilinks", "external_links"]);
const URL_CONTAINER_KEYS = new Set(["alternate_html_urls"]);

export interface RouteAuditFinding {
  url: string;
  reason: string;
  contexts: string[];
}

export interface GeneratedRouteAuditResult {
  checkedUrls: number;
  findings: RouteAuditFinding[];
  referencesBySurface: Record<string, number>;
}

interface AuditOptions {
  rootDir: string;
  outDir: string;
}

interface CliOptions {
  outDir: string;
}

function parseCliArgs(argv: readonly string[]): CliOptions {
  let outDir = "_vercel_public";
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--out") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) throw new Error("--out requires a directory value");
      outDir = value;
      index += 1;
      continue;
    }
    if (arg.startsWith("--out=")) {
      outDir = arg.slice("--out=".length);
      if (!outDir) throw new Error("--out requires a directory value");
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }
  return { outDir };
}

function trimUrlToken(value: string): string {
  return value.trim().replace(/[),.;:\]}]+$/g, "");
}

function internalUrl(value: string): string | null {
  const token = trimUrlToken(value);
  if (!token || token.startsWith("#") || token.includes("<") || token.includes(">")) {
    return null;
  }
  let parsed: URL;
  try {
    parsed = new URL(token, SITE_URL);
  } catch {
    return null;
  }
  if (parsed.hostname !== SITE_HOSTNAME) return null;
  parsed.hash = "";
  parsed.search = "";
  return parsed.toString();
}

function collectTextReferences(
  text: string,
  surface: string,
  add: (url: string, context: string) => void,
): number {
  let count = 0;
  const record = (candidate: string, context: string): void => {
    const url = internalUrl(candidate);
    if (!url) return;
    add(url, `${surface}:${context}`);
    count += 1;
  };

  for (const match of text.matchAll(/https?:\/\/[^\s"'`]+/g)) {
    record(match[0], `absolute@${match.index ?? 0}`);
  }
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    record(match[1], `markdown@${match.index ?? 0}`);
  }
  for (const match of text.matchAll(/`(\/[^`]+)`/g)) {
    record(match[1], `code@${match.index ?? 0}`);
  }
  return count;
}

function collectStructuredReferences(
  node: unknown,
  surface: string,
  add: (url: string, context: string) => void,
  keyPath = "",
  captureStrings = false,
): number {
  if (typeof node === "string") {
    if (!captureStrings) return 0;
    const url = internalUrl(node);
    if (!url) return 0;
    add(url, `${surface}:${keyPath}`);
    return 1;
  }
  if (Array.isArray(node)) {
    return node.reduce(
      (sum, item, index) =>
        sum +
        collectStructuredReferences(
          item,
          surface,
          add,
          `${keyPath}[${index}]`,
          captureStrings,
        ),
      0,
    );
  }
  if (!node || typeof node !== "object") return 0;

  let count = 0;
  for (const [key, value] of Object.entries(node)) {
    const childPath = keyPath ? `${keyPath}.${key}` : key;
    const capture =
      captureStrings ||
      URL_VALUE_KEYS.has(key) ||
      URL_ARRAY_KEYS.has(key) ||
      URL_CONTAINER_KEYS.has(key);
    count += collectStructuredReferences(value, surface, add, childPath, capture);
  }
  return count;
}

function walkJsonFiles(rootDir: string): string[] {
  if (!existsSync(rootDir)) return [];
  const results: string[] = [];
  const walk = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (entry.isFile() && entry.name.endsWith(".json")) results.push(fullPath);
    }
  };
  walk(rootDir);
  return results.sort();
}

export function assembledRouteCandidates(urlValue: string): string[] {
  const parsed = new URL(urlValue);
  const decodedPath = decodeURIComponent(parsed.pathname);
  const relativePath = decodedPath.replace(/^\/+/, "");
  if (!relativePath) return ["index.html"];
  if (decodedPath.endsWith("/")) return [path.posix.join(relativePath, "index.html")];
  return [relativePath, path.posix.join(relativePath, "index.html")];
}

function routeFailure(
  outDir: string,
  canonicalOutDir: string,
  url: string,
): string | null {
  const parsed = new URL(url);
  if (parsed.origin !== SITE_ORIGIN) {
    return `wrong site origin: expected ${SITE_ORIGIN}`;
  }
  let candidates: string[];
  try {
    candidates = assembledRouteCandidates(url);
  } catch (error) {
    return `invalid URL path: ${String(error)}`;
  }
  let exactPathMismatch: string | null = null;
  for (const relativePath of candidates) {
    const absolutePath = path.resolve(outDir, relativePath);
    if (
      absolutePath !== outDir &&
      !absolutePath.startsWith(`${outDir}${path.sep}`)
    ) {
      return "path escapes the assembled output";
    }
    if (!existsSync(absolutePath)) continue;
    const fileStat = lstatSync(absolutePath);
    if (fileStat.isFile() && !fileStat.isSymbolicLink() && fileStat.size > 0) {
      const actualRelativePath = path
        .relative(canonicalOutDir, realpathSync.native(absolutePath))
        .split(path.sep)
        .join("/");
      if (actualRelativePath !== relativePath) {
        exactPathMismatch =
          `path case or symlink mismatch: requested ${relativePath}, ` +
          `resolved ${actualRelativePath}`;
        continue;
      }
      return null;
    }
  }
  return (
    exactPathMismatch ??
    `no non-empty regular file at ${candidates.join(" or ")}`
  );
}

export function auditGeneratedRoutes(
  options: AuditOptions,
): GeneratedRouteAuditResult {
  const rootDir = path.resolve(options.rootDir);
  const outDir = resolveApprovedOutputDir(rootDir, options.outDir);
  if (!existsSync(outDir)) {
    throw new Error(
      `assembled output missing: ${path.relative(rootDir, outDir)}; build and assemble before running the route audit`,
    );
  }
  const canonicalOutDir = realpathSync.native(outDir);

  const contextsByUrl = new Map<string, Set<string>>();
  const referencesBySurface: Record<string, number> = {};
  const add = (url: string, context: string): void => {
    const contexts = contextsByUrl.get(url) ?? new Set<string>();
    contexts.add(context);
    contextsByUrl.set(url, contexts);
  };

  for (const filename of TARGET_TEXT_FILES) {
    const filePath = path.join(outDir, filename);
    if (!existsSync(filePath)) {
      throw new Error(`required AI text surface missing: ${filename}`);
    }
    referencesBySurface[filename] = collectTextReferences(
      readFileSync(filePath, "utf8"),
      filename,
      add,
    );
  }

  const sitemapPath = path.join(outDir, "sitemap.xml");
  if (!existsSync(sitemapPath)) throw new Error("required surface missing: sitemap.xml");
  const sitemap = readFileSync(sitemapPath, "utf8");
  let sitemapReferences = 0;
  const sitemapMatches = [
    ...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
    ...sitemap.matchAll(/<xhtml:link\b[^>]*\bhref="([^"]+)"/g),
  ];
  for (const match of sitemapMatches) {
    const url = internalUrl(match[1]);
    if (!url) continue;
    add(url, `sitemap.xml:@${match.index ?? 0}`);
    sitemapReferences += 1;
  }
  referencesBySurface["sitemap.xml"] = sitemapReferences;

  for (const relativePath of ["ai-index.json", "api/entries/index.json"]) {
    const filePath = path.join(outDir, relativePath);
    if (!existsSync(filePath)) throw new Error(`required surface missing: ${relativePath}`);
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as unknown;
    referencesBySurface[relativePath] = collectStructuredReferences(
      parsed,
      relativePath,
      add,
    );
  }

  const apiRoot = path.join(outDir, "api", "entries");
  let apiReferences = 0;
  for (const filePath of walkJsonFiles(apiRoot)) {
    const relativePath = path.relative(outDir, filePath).split(path.sep).join("/");
    if (relativePath === "api/entries/index.json") continue;
    const parsed = JSON.parse(readFileSync(filePath, "utf8")) as unknown;
    apiReferences += collectStructuredReferences(parsed, relativePath, add);
  }
  referencesBySurface["api/entries/*.json"] = apiReferences;

  const findings: RouteAuditFinding[] = [];
  for (const [url, contexts] of contextsByUrl) {
    const reason = routeFailure(outDir, canonicalOutDir, url);
    if (reason) {
      findings.push({
        url,
        reason,
        contexts: [...contexts].sort().slice(0, 6),
      });
    }
  }
  findings.sort((left, right) => left.url.localeCompare(right.url));
  return { checkedUrls: contextsByUrl.size, findings, referencesBySurface };
}

function main(): void {
  const cli = parseCliArgs(process.argv.slice(2));
  console.log(`${ANSI_YELLOW}🔍 Auditing generated URLs against the assembled artifact...${ANSI_RESET}`);
  const result = auditGeneratedRoutes({ rootDir: ROOT, outDir: cli.outDir });
  for (const [surface, count] of Object.entries(result.referencesBySurface)) {
    console.log(`- ${surface}: ${count} route reference(s)`);
  }
  if (result.findings.length > 0) {
    for (const finding of result.findings.slice(0, 80)) {
      console.error(`${ANSI_RED}❌ ${finding.url}${ANSI_RESET}`);
      console.error(`   ${finding.reason}`);
      console.error(`   ${finding.contexts.join(", ")}`);
    }
    if (result.findings.length > 80) {
      console.error(`... ${result.findings.length - 80} more broken route(s)`);
    }
    throw new Error(
      `generated route audit failed: ${result.findings.length} of ${result.checkedUrls} internal URL(s) do not resolve`,
    );
  }
  console.log(
    `${ANSI_GREEN}Generated route audit passed: ${result.checkedUrls} unique internal URL(s) resolve in the assembled artifact.${ANSI_RESET}`,
  );
}

if (import.meta.main) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}
