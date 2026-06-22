#!/usr/bin/env bun

import path, { posix as pathPosix } from "node:path";
import {
  buildEntry,
  extractFrontmatter,
  isPublicPage,
  iterMarkdownFiles,
  readTextUtf8,
  stripInlineMarkdown,
  type Entry,
} from "../lib/markdown_helpers";

type FreshnessClass = "event" | "high" | "medium" | "low";
type ReasonCode =
  | "missing_last_tended"
  | "missing_review_by"
  | "review_by_due"
  | "cadence_due"
  | "low_confidence"
  | "borderline_status"
  | "candidate_status"
  | "empty_sources"
  | "event_keyword"
  | "registry_or_statistics_keyword";

type CliOptions = {
  rootDir: string;
  json: boolean;
  overdue: boolean;
  asOf: Date;
  domain: string | null;
  failUnder: number | null;
};

type SourceDoc = {
  entry: Entry;
  frontmatter: Record<string, unknown>;
  text: string;
};

type ReportRow = {
  path: string;
  domain: string;
  title: string;
  freshness_class: FreshnessClass;
  last_tended: string | null;
  review_by: string | null;
  days_since_tended: number | null;
  days_overdue: number | null;
  reasons: ReasonCode[];
  sources_count: number;
  suggested_next_review_by: string;
  freshness_score: number;
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const CADENCE_DAYS: Record<FreshnessClass, number> = {
  event: 45,
  high: 90,
  medium: 180,
  low: 365,
};

const MEDIUM_PLUS_DOMAINS = new Set([
  "asset-managers",
  "banking",
  "business",
  "card-issuers",
  "cooperative-banks",
  "corporate-strategy",
  "derivatives",
  "exchanges",
  "finance",
  "financial-licenses",
  "financial-regulators",
  "fintech",
  "foreign-financial-institutions",
  "insurance",
  "leasing-firms",
  "life-insurers",
  "manufacturer-finance",
  "megabanks",
  "money-market",
  "non-life-insurers",
  "payment-firms",
  "payments",
  "policy-finance",
  "real-estate-finance",
  "regional-banks",
  "securities",
  "securities-firms",
  "structured-finance",
  "systems",
  "trust-banks",
]);

const EVENT_RE =
  /\b(?:case|TOB|MBO|IPO|spinoff|spin-off|bankruptcy|closure|revocation|deadline|enforcement|migration|announced|completed|cancelled|canceled)\b|買収|合併|上場|廃止|取消|処分|期限/i;
const REGISTRY_OR_STATS_RE =
  /\b(?:market share|registry|statistics|ranking|rankings|snapshot|implementation|status|licen[cs]ing|registration|register|operator list|member list|AUM|solvency|branch count|employee count)\b|登録|免許|許可|統計|一覧|市場シェア|会員|資産残高|店舗|従業員/i;

function parseArgs(argv: string[]): CliOptions {
  let rootDir = ROOT;
  let json = false;
  let overdue = false;
  let asOf = dateOnly(new Date());
  let domain: string | null = null;
  let failUnder: number | null = null;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      json = true;
    } else if (arg === "--overdue") {
      overdue = true;
    } else if (arg === "--as-of") {
      asOf = parseIsoDate(String(argv[index + 1] ?? "")) ?? asOf;
      index += 1;
    } else if (arg.startsWith("--as-of=")) {
      asOf = parseIsoDate(arg.slice("--as-of=".length)) ?? asOf;
    } else if (arg === "--domain") {
      domain = String(argv[index + 1] ?? "").trim() || null;
      index += 1;
    } else if (arg.startsWith("--domain=")) {
      domain = arg.slice("--domain=".length).trim() || null;
    } else if (arg === "--fail-under") {
      failUnder = parseScore(String(argv[index + 1] ?? ""));
      index += 1;
    } else if (arg.startsWith("--fail-under=")) {
      failUnder = parseScore(arg.slice("--fail-under=".length));
    } else if (arg === "--root-dir") {
      rootDir = path.resolve(String(argv[index + 1] ?? ".")).replaceAll("\\", "/");
      index += 1;
    } else if (arg.startsWith("--root-dir=")) {
      rootDir = path.resolve(arg.slice("--root-dir=".length)).replaceAll("\\", "/");
    }
  }

  return { rootDir, json, overdue, asOf, domain, failUnder };
}

function parseScore(value: string): number | null {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0 || parsed > 1) return null;
  return parsed;
}

function parseIsoDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
}

function formatIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function dateOnly(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * MS_PER_DAY);
}

function daysBetween(later: Date, earlier: Date): number {
  return Math.floor((later.getTime() - earlier.getTime()) / MS_PER_DAY);
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean);
}

function isAuditSource(relPath: string): boolean {
  if (!isPublicPage(relPath)) return false;
  if (!relPath.endsWith(".md")) return false;
  if (!relPath.includes("/")) return false;
  if (relPath === "CHANGELOG.md") return false;
  if (relPath.startsWith("docs/")) return false;
  if (relPath.startsWith("releases/")) return false;
  if (relPath.startsWith("site/")) return false;
  if (relPath.endsWith("/INDEX.md")) return false;
  return true;
}

async function loadSourceDocs(options: CliOptions): Promise<SourceDoc[]> {
  const markdownFiles = await iterMarkdownFiles(options.rootDir);
  const docs: SourceDoc[] = [];
  for (const filePath of markdownFiles) {
    const relPath = pathPosix.relative(options.rootDir, filePath);
    if (!isAuditSource(relPath)) continue;
    if (options.domain && !relPath.startsWith(`${options.domain}/`)) continue;
    const text = await readTextUtf8(filePath);
    docs.push({
      entry: await buildEntry(options.rootDir, relPath, text),
      frontmatter: extractFrontmatter(text),
      text,
    });
  }
  return docs;
}

function inferFreshnessClass(doc: SourceDoc): { value: FreshnessClass; keywordReasons: ReasonCode[] } {
  const fm = doc.frontmatter;
  const status = asString(fm.status).toLowerCase();
  const confidence = asString(fm.confidence).toLowerCase();
  const tags = asStringList(fm.tags).join(" ");
  const title = asString(fm.title) || doc.entry.title;
  const haystack = stripInlineMarkdown(`${doc.entry.source_path} ${title} ${tags} ${doc.text.slice(0, 4000)}`).normalize("NFKC");
  const keywordReasons: ReasonCode[] = [];
  let value: FreshnessClass = MEDIUM_PLUS_DOMAINS.has(doc.entry.domain) ? "medium" : "low";

  if (status === "candidate" || confidence === "possible" || confidence === "unlikely") {
    value = "high";
  }
  if (EVENT_RE.test(haystack)) {
    value = "event";
    keywordReasons.push("event_keyword");
  } else if (REGISTRY_OR_STATS_RE.test(haystack)) {
    if (value === "low" || value === "medium") value = "high";
    keywordReasons.push("registry_or_statistics_keyword");
  }
  return { value, keywordReasons };
}

function sourceCount(frontmatter: Record<string, unknown>): number {
  return asStringList(frontmatter.sources).length;
}

function scoreFor(reasons: ReasonCode[]): number {
  let score = 1;
  for (const reason of reasons) {
    if (reason === "missing_review_by" || reason === "missing_last_tended") score -= 0.2;
    else if (reason === "review_by_due" || reason === "cadence_due") score -= 0.18;
    else if (reason === "empty_sources") score -= 0.18;
    else if (reason === "low_confidence" || reason === "borderline_status") score -= 0.14;
    else if (reason === "candidate_status") score -= 0.12;
    else score -= 0.06;
  }
  return Math.max(0, Math.min(1, Number(score.toFixed(2))));
}

function rowForDoc(doc: SourceDoc, asOf: Date): ReportRow | null {
  const fm = doc.frontmatter;
  const status = asString(fm.status).toLowerCase();
  if (status === "deprecated") return null;

  const lastTendedRaw = asString(fm.last_tended);
  const reviewByRaw = asString(fm.review_by);
  const lastTended = parseIsoDate(lastTendedRaw);
  const reviewBy = parseIsoDate(reviewByRaw);
  const confidence = asString(fm.confidence).toLowerCase();
  const inferred = inferFreshnessClass(doc);
  const cadenceDays = CADENCE_DAYS[inferred.value];
  const sourcesCount = sourceCount(fm);
  const reasons: ReasonCode[] = [];

  if (!lastTended) reasons.push("missing_last_tended");
  if (!reviewBy) {
    reasons.push("missing_review_by");
  } else if (daysBetween(asOf, reviewBy) >= 0) {
    reasons.push("review_by_due");
  }
  if (lastTended && daysBetween(asOf, lastTended) > cadenceDays) {
    reasons.push("cadence_due");
  }
  if (confidence === "possible" || confidence === "unlikely" || confidence === "impossible") {
    reasons.push("low_confidence");
  }
  if (status === "borderline") reasons.push("borderline_status");
  if (status === "candidate") reasons.push("candidate_status");
  if (sourcesCount === 0) reasons.push("empty_sources");
  for (const reason of inferred.keywordReasons) {
    if (!reasons.includes(reason)) reasons.push(reason);
  }

  const actionableReasons = reasons.filter((reason) => reason !== "event_keyword" && reason !== "registry_or_statistics_keyword");
  if (actionableReasons.length === 0) return null;

  const daysSinceTended = lastTended ? daysBetween(asOf, lastTended) : null;
  const daysOverdue = reviewBy ? Math.max(0, daysBetween(asOf, reviewBy)) : null;
  const suggestedBase = asOf;
  return {
    path: doc.entry.source_path,
    domain: doc.entry.domain,
    title: doc.entry.title,
    freshness_class: inferred.value,
    last_tended: lastTendedRaw || null,
    review_by: reviewByRaw || null,
    days_since_tended: daysSinceTended,
    days_overdue: daysOverdue,
    reasons,
    sources_count: sourcesCount,
    suggested_next_review_by: formatIsoDate(addDays(suggestedBase, cadenceDays)),
    freshness_score: scoreFor(reasons),
  };
}

function compareRows(left: ReportRow, right: ReportRow): number {
  return (
    left.freshness_score - right.freshness_score ||
    left.path.localeCompare(right.path) ||
    left.title.localeCompare(right.title)
  );
}

function filterRows(rows: ReportRow[], options: CliOptions): ReportRow[] {
  const filtered = options.overdue
    ? rows.filter((row) =>
        row.reasons.some((reason) =>
          ["missing_last_tended", "missing_review_by", "review_by_due", "cadence_due", "borderline_status", "candidate_status"].includes(reason),
        ),
      )
    : rows;
  return [...filtered].sort(compareRows);
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  const docs = await loadSourceDocs(options);
  const rows = filterRows(docs.map((doc) => rowForDoc(doc, options.asOf)).filter((row): row is ReportRow => row !== null), options);

  if (options.json) {
    console.log(JSON.stringify(rows, null, 2));
  } else if (options.overdue) {
    console.log(`fact_freshness_rows=${rows.length}`);
    for (const row of rows.slice(0, 80)) {
      console.log(`${row.path} score=${row.freshness_score} class=${row.freshness_class} reasons=${row.reasons.join(",")}`);
    }
    if (rows.length > 80) console.log(`... ${rows.length - 80} more row(s) omitted`);
  }

  if (options.failUnder !== null && rows.some((row) => row.freshness_score < options.failUnder!)) {
    return 1;
  }
  return 0;
}

process.exitCode = await main();
