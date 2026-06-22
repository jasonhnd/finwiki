#!/usr/bin/env bun

import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { EXCLUDED_WALK_DIRS } from "../lib/markdown_helpers";

type Surface = "root_domain_map" | "domain_index_prose";

type CliOptions = {
  rootDir: string;
  json: boolean;
  write: boolean;
};

type CountRow = {
  domain: string;
  path: string;
  surface: Surface;
  line: number;
  declared_entries: number;
  actual_entries: number;
  delta: number;
  status: "ok" | "drift";
  rewrite_supported: boolean;
};

type DomainDeclaration = {
  declared: number;
  line: number;
  rewriteLine: (actual: number) => string;
};

const ROOT = path.resolve(import.meta.dir, "..");
const ROOT_INDEX = "INDEX.md";
const NUMBER_WORDS: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const NUMBER_TOKEN = String.raw`(?:\d[\d,]*|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)`;
const LOCAL_COUNT_PATTERNS = [
  new RegExp(
    String.raw`(\b(?:contains|holds|holding)\s+\*\*)(${NUMBER_TOKEN})([^*\n]{0,120}\b(?:entries|entry|pages|page)\*\*)`,
    "i",
  ),
  new RegExp(String.raw`^(\s*)(?:\*\*)?(${NUMBER_TOKEN})(\s+(?:active\s+)?entries\.?)(?:\*\*)?`, "i"),
];

function usage(): string {
  return [
    "Usage: bun tools/index_count_audit.ts [--json] [--write] [--root-dir <path>]",
    "",
    "Checks root INDEX.md Domain Map counts and parsable domain/INDEX.md prose counts",
    "against the direct non-INDEX .md file count in each domain directory.",
  ].join("\n");
}

function parseArgs(argv: string[]): CliOptions {
  let rootDir = ROOT;
  let json = false;
  let write = false;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      json = true;
    } else if (arg === "--write") {
      write = true;
    } else if (arg === "--root-dir") {
      rootDir = path.resolve(String(argv[index + 1] ?? "."));
      index += 1;
    } else if (arg.startsWith("--root-dir=")) {
      rootDir = path.resolve(arg.slice("--root-dir=".length));
    } else if (arg === "--help" || arg === "-h") {
      console.log(usage());
      process.exit(0);
    } else {
      throw new Error(`unknown arg: ${arg}`);
    }
  }

  return { rootDir, json, write };
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

function normalizeText(text: string): string {
  return text.replace(/\r?\n/g, "\n");
}

async function readUtf8(filePath: string): Promise<string> {
  return readFile(filePath, "utf8");
}

async function writeUtf8Lf(filePath: string, text: string): Promise<void> {
  await writeFile(filePath, normalizeText(text), "utf8");
}

function relativePath(rootDir: string, filePath: string): string {
  return path.relative(rootDir, filePath).replaceAll("\\", "/");
}

function parseCountToken(value: string): number | null {
  const normalized = value.trim().toLowerCase();
  if (/^\d[\d,]*$/.test(normalized)) return Number(normalized.replaceAll(",", ""));
  return NUMBER_WORDS[normalized] ?? null;
}

function formatCount(value: number): string {
  return String(value);
}

function splitMarkdownTableLine(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isExcludedDomainDir(name: string): boolean {
  return name.startsWith(".") || EXCLUDED_WALK_DIRS.has(name) || name === "releases";
}

async function listDomainDirs(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir, { withFileTypes: true });
  const domains: string[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (isExcludedDomainDir(entry.name)) continue;
    if (await exists(path.join(rootDir, entry.name, ROOT_INDEX))) {
      domains.push(entry.name);
    }
  }
  return domains.sort((left, right) => left.localeCompare(right));
}

async function countDomainEntries(rootDir: string, domain: string): Promise<number> {
  const entries = await readdir(path.join(rootDir, domain), { withFileTypes: true });
  return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== ROOT_INDEX).length;
}

async function buildActualCountMap(rootDir: string, domains: readonly string[]): Promise<Map<string, number>> {
  const actual = new Map<string, number>();
  for (const domain of domains) {
    actual.set(domain, await countDomainEntries(rootDir, domain));
  }
  return actual;
}

function rootMapRowFor(line: string, lineNumber: number, actualCounts: ReadonlyMap<string, number>): CountRow | null {
  if (!line.startsWith("|")) return null;
  const cells = splitMarkdownTableLine(line);
  if (cells.length < 4 || cells[0] === "Domain" || cells[0] === "---") return null;
  if (!/^\d[\d,]*$/.test(cells[1])) return null;

  const domain = cells[0];
  const actual = actualCounts.get(domain);
  if (actual === undefined) return null;
  const declared = Number(cells[1].replaceAll(",", ""));
  return {
    domain,
    path: ROOT_INDEX,
    surface: "root_domain_map",
    line: lineNumber,
    declared_entries: declared,
    actual_entries: actual,
    delta: declared - actual,
    status: declared === actual ? "ok" : "drift",
    rewrite_supported: true,
  };
}

function localDeclarationForLine(line: string, lineNumber: number): DomainDeclaration | null {
  for (const pattern of LOCAL_COUNT_PATTERNS) {
    const match = pattern.exec(line);
    if (!match) continue;
    const declared = parseCountToken(match[2]);
    if (declared === null) continue;

    return {
      declared,
      line: lineNumber,
      rewriteLine: (actual) => line.replace(pattern, (_full, prefix: string, _count: string, suffix: string) => {
        return `${prefix}${formatCount(actual)}${suffix}`;
      }),
    };
  }
  return null;
}

async function readRootMapRows(rootDir: string, actualCounts: ReadonlyMap<string, number>): Promise<CountRow[]> {
  const text = await readUtf8(path.join(rootDir, ROOT_INDEX));
  return text
    .split(/\r?\n/)
    .map((line, index) => rootMapRowFor(line, index + 1, actualCounts))
    .filter((row): row is CountRow => row !== null);
}

async function readLocalCountRow(rootDir: string, domain: string, actual: number): Promise<CountRow | null> {
  const indexPath = path.join(rootDir, domain, ROOT_INDEX);
  const text = await readUtf8(indexPath);
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const declaration = localDeclarationForLine(lines[index], index + 1);
    if (!declaration) continue;
    return {
      domain,
      path: relativePath(rootDir, indexPath),
      surface: "domain_index_prose",
      line: declaration.line,
      declared_entries: declaration.declared,
      actual_entries: actual,
      delta: declaration.declared - actual,
      status: declaration.declared === actual ? "ok" : "drift",
      rewrite_supported: true,
    };
  }
  return null;
}

async function readLocalCountRows(rootDir: string, actualCounts: ReadonlyMap<string, number>): Promise<CountRow[]> {
  const rows: CountRow[] = [];
  for (const [domain, actual] of [...actualCounts.entries()].sort(([left], [right]) => left.localeCompare(right))) {
    const row = await readLocalCountRow(rootDir, domain, actual);
    if (row) rows.push(row);
  }
  return rows;
}

function compareRows(left: CountRow, right: CountRow): number {
  return (
    left.status.localeCompare(right.status) ||
    left.domain.localeCompare(right.domain) ||
    left.surface.localeCompare(right.surface) ||
    left.path.localeCompare(right.path) ||
    left.line - right.line
  );
}

async function collectRows(rootDir: string): Promise<CountRow[]> {
  const domains = await listDomainDirs(rootDir);
  const actualCounts = await buildActualCountMap(rootDir, domains);
  const rows = [...await readRootMapRows(rootDir, actualCounts), ...await readLocalCountRows(rootDir, actualCounts)];
  return rows.sort(compareRows);
}

function rewriteRootMapText(text: string, rows: readonly CountRow[]): string {
  const rootRows = new Map(rows.filter((row) => row.surface === "root_domain_map").map((row) => [row.domain, row.actual_entries]));
  return text
    .split(/\r?\n/)
    .map((line) => {
      if (!line.startsWith("|")) return line;
      const cells = splitMarkdownTableLine(line);
      if (cells.length < 2) return line;
      const actual = rootRows.get(cells[0]);
      if (actual === undefined) return line;
      return line.replace(
        new RegExp(`^(\\|\\s*${escapeRegExp(cells[0])}\\s*\\|\\s*)\\d[\\d,]*(\\s*\\|)`),
        `$1${formatCount(actual)}$2`,
      );
    })
    .join("\n");
}

function rewriteLocalText(text: string, actual: number): string {
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const declaration = localDeclarationForLine(lines[index], index + 1);
    if (!declaration) continue;
    lines[index] = declaration.rewriteLine(actual);
    break;
  }
  return lines.join("\n");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function writeDrift(rootDir: string, rows: readonly CountRow[]): Promise<number> {
  const driftRows = rows.filter((row) => row.status === "drift");
  if (driftRows.length === 0) return 0;

  const rootRows = driftRows.filter((row) => row.surface === "root_domain_map");
  if (rootRows.length > 0) {
    const rootPath = path.join(rootDir, ROOT_INDEX);
    const original = await readUtf8(rootPath);
    await writeUtf8Lf(rootPath, rewriteRootMapText(original, rootRows));
  }

  for (const row of driftRows.filter((item) => item.surface === "domain_index_prose")) {
    const indexPath = path.join(rootDir, row.domain, ROOT_INDEX);
    const original = await readUtf8(indexPath);
    await writeUtf8Lf(indexPath, rewriteLocalText(original, row.actual_entries));
  }
  return driftRows.length;
}

function printHuman(rows: readonly CountRow[], written: number): void {
  const driftRows = rows.filter((row) => row.status === "drift");
  console.log(`index_count_drift=${driftRows.length}`);
  if (written > 0) console.log(`index_count_written=${written}`);
  for (const row of driftRows) {
    console.log(
      `${row.path}:${row.line} ${row.surface} domain=${row.domain} declared=${row.declared_entries} actual=${row.actual_entries} delta=${row.delta}`,
    );
  }
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  const rootDir = path.resolve(options.rootDir);
  const rows = await collectRows(rootDir);
  const driftRows = rows.filter((row) => row.status === "drift");
  const written = options.write ? await writeDrift(rootDir, rows) : 0;

  if (options.json) {
    console.log(JSON.stringify({
      ok: options.write ? true : driftRows.length === 0,
      drift_count: driftRows.length,
      written_count: written,
      rows: driftRows,
    }, null, 2));
  } else {
    printHuman(rows, written);
  }

  return !options.write && driftRows.length > 0 ? 1 : 0;
}

process.exitCode = await main();
