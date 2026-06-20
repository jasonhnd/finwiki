#!/usr/bin/env bun

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { iterMarkdownFiles, parseDomainMap } from "../lib/markdown_helpers";

type Args = {
  write: boolean;
};

type Finding = {
  file: string;
  domain: string;
  kind: "root-domain-map" | "domain-index-summary" | "missing-domain-index";
  current: number | null;
  actual: number;
  line: number | null;
  detail: string;
  fixed: boolean;
};

const ROOT = path.resolve(import.meta.dir, "..");
const ROOT_INDEX = path.join(ROOT, "INDEX.md");

const COUNT_WORDS = new Map<string, number>([
  ["zero", 0],
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
  ["ten", 10],
  ["eleven", 11],
  ["twelve", 12],
  ["thirteen", 13],
  ["fourteen", 14],
  ["fifteen", 15],
  ["sixteen", 16],
  ["seventeen", 17],
  ["eighteen", 18],
  ["nineteen", 19],
  ["twenty", 20],
]);

const COUNT_TOKEN = "(\\d[\\d,]*|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)";
const DOMAIN_INDEX_COUNT_RE = new RegExp(
  `\\b(?:contains|holds|holding)\\s+\\*\\*${COUNT_TOKEN}\\s+(?:(?:active|content|thematic|license-stack|entity|institution|registry|member)\\s+){0,6}(?:entries|member pages)\\*\\*`,
  "i",
);
const TOTAL_RE = /(excluding(?: this)? INDEX,\s*)\d[\d,]*(\s+total)/i;

function parseArgs(argv: string[]): Args {
  const args: Args = { write: false };
  for (const arg of argv) {
    if (arg === "--write") {
      args.write = true;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      console.log("Usage: bun tools/index_count_audit.ts [--write]");
      process.exit(0);
    }
    throw new Error(`unknown arg: ${arg}`);
  }
  return args;
}

function toPosix(value: string): string {
  return value.split(path.sep).join("/");
}

function readUtf8(filePath: string): string {
  return readFileSync(filePath, "utf8");
}

function writeUtf8Lf(filePath: string, text: string): void {
  writeFileSync(filePath, text.replace(/\r?\n/g, "\n"), "utf8");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseCountToken(token: string): number | null {
  if (/^\d[\d,]*$/.test(token)) return Number(token.replaceAll(",", ""));
  return COUNT_WORDS.get(token.toLowerCase()) ?? null;
}

async function actualCounts(domains: readonly string[]): Promise<Map<string, number>> {
  const counts = new Map(domains.map((domain) => [domain, 0]));
  for (const absPath of await iterMarkdownFiles(ROOT)) {
    const rel = toPosix(path.relative(ROOT, absPath));
    if (!rel.includes("/") || rel.endsWith("/INDEX.md")) continue;
    const domain = rel.split("/", 1)[0];
    if (!counts.has(domain)) continue;
    counts.set(domain, (counts.get(domain) ?? 0) + 1);
  }
  return counts;
}

function updateRootDomainMap(
  text: string,
  expectedByDomain: ReadonlyMap<string, number>,
  actualByDomain: ReadonlyMap<string, number>,
  write: boolean,
  findings: Finding[],
): string {
  const lines = text.split(/\r?\n/);
  let changed = false;

  const nextLines = lines.map((line, index) => {
    if (!line.startsWith("|")) return line;
    const cells = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
    if (cells.length < 4) return line;
    const domain = cells[0];
    if (!expectedByDomain.has(domain)) return line;
    const actual = actualByDomain.get(domain) ?? 0;
    const current = expectedByDomain.get(domain) ?? 0;
    if (current === actual) return line;

    findings.push({
      file: "INDEX.md",
      domain,
      kind: "root-domain-map",
      current,
      actual,
      line: index + 1,
      detail: `root Domain Map lists ${current}, disk has ${actual} non-INDEX markdown entries`,
      fixed: write,
    });

    if (!write) return line;
    const rowCountRe = new RegExp(`^(\\|\\s*${escapeRegExp(domain)}\\s*\\|\\s*)\\d[\\d,]*(\\s*\\|)`);
    changed = true;
    return line.replace(rowCountRe, `$1${actual}$2`);
  });

  return changed ? nextLines.join("\n") : text;
}

function updateDomainIndexSummary(
  domain: string,
  actual: number,
  write: boolean,
  findings: Finding[],
): void {
  const relPath = `${domain}/INDEX.md`;
  const filePath = path.join(ROOT, domain, "INDEX.md");
  if (!existsSync(filePath)) {
    findings.push({
      file: relPath,
      domain,
      kind: "missing-domain-index",
      current: null,
      actual,
      line: null,
      detail: "domain is listed in root INDEX.md but has no domain INDEX.md",
      fixed: false,
    });
    return;
  }

  const text = readUtf8(filePath);
  const lines = text.split(/\r?\n/);
  let changed = false;

  const nextLines = lines.map((line, index) => {
    const match = DOMAIN_INDEX_COUNT_RE.exec(line);
    if (!match) return line;

    const token = match[1];
    const current = parseCountToken(token);
    if (current === null || current === actual) return line;

    findings.push({
      file: relPath,
      domain,
      kind: "domain-index-summary",
      current,
      actual,
      line: index + 1,
      detail: `domain INDEX summary lists ${current}, disk has ${actual} non-INDEX markdown entries`,
      fixed: write,
    });

    if (!write) return line;
    changed = true;
    const withEntryCount = line.replace(DOMAIN_INDEX_COUNT_RE, (full, countToken: string) =>
      full.replace(countToken, String(actual)),
    );
    return withEntryCount.replace(TOTAL_RE, `$1${actual + 1}$2`);
  });

  if (changed) writeUtf8Lf(filePath, nextLines.join("\n"));
}

function printFindings(findings: readonly Finding[]): void {
  for (const finding of findings) {
    const location = finding.line === null ? finding.file : `${finding.file}:${finding.line}`;
    const current = finding.current === null ? "missing" : String(finding.current);
    const status = finding.fixed ? "fixed" : "drift";
    console.error(`[${status}] ${finding.kind} ${location}`);
    console.error(`  domain=${finding.domain} current=${current} actual=${finding.actual}`);
    console.error(`  ${finding.detail}`);
  }
}

async function main(): Promise<void> {
  const args = parseArgs(Bun.argv.slice(2));
  const domains = await parseDomainMap(ROOT);
  const domainNames = domains.map((row) => row.domain);
  const expectedByDomain = new Map(domains.map((row) => [row.domain, row.entries]));
  const actualByDomain = await actualCounts(domainNames);
  const findings: Finding[] = [];

  const rootText = readUtf8(ROOT_INDEX);
  const nextRootText = updateRootDomainMap(rootText, expectedByDomain, actualByDomain, args.write, findings);
  if (args.write && nextRootText !== rootText) writeUtf8Lf(ROOT_INDEX, nextRootText);

  for (const domain of domainNames) {
    updateDomainIndexSummary(domain, actualByDomain.get(domain) ?? 0, args.write, findings);
  }

  if (findings.length === 0) {
    console.log(`Index count audit passed: ${domainNames.length} domains match on-disk non-INDEX markdown counts.`);
    return;
  }

  printFindings(findings);

  const unfixed = findings.filter((finding) => !finding.fixed);
  if (args.write && unfixed.length === 0) {
    console.log(`Index count audit wrote ${findings.length} deterministic count correction(s).`);
    return;
  }

  if (args.write) {
    console.error(`Index count audit still has ${unfixed.length} unfixed issue(s).`);
  } else {
    console.error(`Index count audit failed: ${findings.length} count drift issue(s). Run with --write to sync fixable counts.`);
  }
  process.exit(1);
}

main();
