#!/usr/bin/env bun

import {
  existsSync,
  lstatSync,
  readFileSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import path from "node:path";
import process from "node:process";
import { SITE_URL } from "../lib/markdown_helpers";
import { resolveApprovedOutputDir } from "./assemble_static_publish";
import { assembledRouteFailure } from "./txt_route_audit";

const ROOT = path.resolve(import.meta.dir, "..");
const SITE_ORIGIN = new URL(SITE_URL).origin;

interface CliOptions {
  outDir: string;
}

interface RewriterElement {
  tagName: string;
  getAttribute(name: string): string | null;
}

interface ExtractedHref {
  tag: string;
  href: string;
}

export interface HtmlRouteFinding {
  sourceFile: string;
  tag: string;
  href: string;
  resolvedUrl: string;
  reason: string;
}

export interface HtmlRouteAuditResult {
  htmlFiles: number;
  hrefs: number;
  internalHrefs: number;
  checkedRoutes: number;
  findings: HtmlRouteFinding[];
}

export interface HtmlRouteAuditOptions {
  rootDir: string;
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
      outDir = arg.slice("--out=".length);
      if (!outDir) throw new Error("--out requires a directory value");
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }
  return { outDir };
}

function walkHtmlFiles(directory: string): string[] {
  const results: string[] = [];
  const walk = (current: string): void => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        results.push(fullPath);
      }
    }
  };
  walk(directory);
  return results.sort();
}

function publicUrlForHtmlFile(relativePath: string): URL {
  const normalized = relativePath.split(path.sep).join("/");
  let pathname: string;
  if (normalized === "index.html") {
    pathname = "/";
  } else if (normalized.endsWith("/index.html")) {
    pathname = `/${normalized.slice(0, -"index.html".length)}`;
  } else {
    pathname = `/${normalized}`;
  }
  return new URL(pathname, SITE_URL);
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_match, token: string) => {
      const radix = token[0].toLowerCase() === "x" ? 16 : 10;
      const digits = radix === 16 ? token.slice(1) : token;
      const codePoint = Number.parseInt(digits, radix);
      return Number.isFinite(codePoint) && codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : _match;
    })
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

async function extractHrefs(html: string): Promise<ExtractedHref[]> {
  const hrefs: ExtractedHref[] = [];
  const rewriter = new HTMLRewriter().on("[href]", {
    element(element: RewriterElement) {
      const href = element.getAttribute("href");
      if (href !== null) {
        hrefs.push({
          tag: element.tagName.toLowerCase(),
          href: decodeHtmlEntities(href),
        });
      }
    },
  });
  await rewriter.transform(new Response(html)).text();
  return hrefs;
}

function internalUrl(href: string, sourceUrl: URL): URL | null {
  let resolved: URL;
  try {
    resolved = new URL(href, sourceUrl);
  } catch {
    return null;
  }
  if (
    (resolved.protocol !== "http:" && resolved.protocol !== "https:") ||
    resolved.origin !== SITE_ORIGIN
  ) {
    return null;
  }
  resolved.hash = "";
  resolved.search = "";
  return resolved;
}

export async function auditHtmlRoutes(
  options: HtmlRouteAuditOptions,
): Promise<HtmlRouteAuditResult> {
  const rootDir = path.resolve(options.rootDir);
  const outDir = resolveApprovedOutputDir(rootDir, options.outDir);
  if (!existsSync(outDir)) {
    throw new Error(
      `assembled output missing: ${path.relative(rootDir, outDir)}; build and assemble before running the HTML route audit`,
    );
  }
  const outStat = lstatSync(outDir);
  if (!outStat.isDirectory() || outStat.isSymbolicLink()) {
    throw new Error(`assembled output is not a regular directory: ${options.outDir}`);
  }
  const canonicalOutDir = realpathSync.native(outDir);
  const htmlFiles = walkHtmlFiles(outDir);
  const findingsByContext = new Map<string, HtmlRouteFinding>();
  const checkedUrls = new Set<string>();
  let hrefCount = 0;
  let internalHrefCount = 0;

  for (const htmlFile of htmlFiles) {
    const sourceFile = path.relative(outDir, htmlFile).split(path.sep).join("/");
    const sourceUrl = publicUrlForHtmlFile(sourceFile);
    const hrefs = await extractHrefs(readFileSync(htmlFile, "utf8"));
    hrefCount += hrefs.length;

    for (const { tag, href } of hrefs) {
      const resolved = internalUrl(href, sourceUrl);
      if (!resolved) continue;
      internalHrefCount += 1;
      checkedUrls.add(resolved.toString());
      const reason = assembledRouteFailure(
        outDir,
        canonicalOutDir,
        resolved.toString(),
      );
      if (!reason) continue;
      const key = `${sourceFile}\0${tag}\0${href}\0${resolved.toString()}`;
      findingsByContext.set(key, {
        sourceFile,
        tag,
        href,
        resolvedUrl: resolved.toString(),
        reason,
      });
    }
  }

  const findings = [...findingsByContext.values()].sort(
    (left, right) =>
      left.sourceFile.localeCompare(right.sourceFile) ||
      left.href.localeCompare(right.href),
  );
  return {
    htmlFiles: htmlFiles.length,
    hrefs: hrefCount,
    internalHrefs: internalHrefCount,
    checkedRoutes: checkedUrls.size,
    findings,
  };
}

function failureMessage(result: HtmlRouteAuditResult): string {
  const details = result.findings
    .slice(0, 80)
    .map(
      (finding) =>
        `- ${finding.sourceFile}: <${finding.tag} href="${finding.href}"> -> ` +
        `${finding.resolvedUrl} (${finding.reason})`,
    );
  if (result.findings.length > 80) {
    details.push(`- ... ${result.findings.length - 80} more broken href(s)`);
  }
  return (
    `final HTML route audit failed: ${result.findings.length} broken href(s) ` +
    `across ${result.htmlFiles} HTML file(s)\n${details.join("\n")}`
  );
}

export async function checkHtmlRoutes(
  options: HtmlRouteAuditOptions,
): Promise<HtmlRouteAuditResult> {
  const result = await auditHtmlRoutes(options);
  if (result.findings.length > 0) {
    throw new Error(failureMessage(result));
  }
  return result;
}

async function main(): Promise<void> {
  const cli = parseCliArgs(process.argv.slice(2));
  const result = await checkHtmlRoutes({ rootDir: ROOT, outDir: cli.outDir });
  console.log(
    `final HTML route audit: PASS ` +
      `(html=${result.htmlFiles}, hrefs=${result.hrefs}, ` +
      `internal=${result.internalHrefs}, routes=${result.checkedRoutes}, ` +
      `out=${cli.outDir})`,
  );
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
