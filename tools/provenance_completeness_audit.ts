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

type BlockType = "paragraph" | "list_item" | "table_row";
type Severity = "needs_review" | "warning" | "informational";
type ClaimSignal = "numeric" | "date" | "registration" | "relationship" | "status";

type CliOptions = {
  rootDir: string;
  json: boolean;
  domain: string | null;
  failUnder: number | null;
};

type SourceDoc = {
  entry: Entry;
  text: string;
  sourceCount: number;
  confidence: string;
};

type TextBlock = {
  path: string;
  line: number;
  block_type: BlockType;
  text: string;
  marker_count: number;
  nearby_marker_count: number;
  source_count: number;
  confidence: string;
};

type ReportRow = {
  severity: Severity;
  path: string;
  line: number;
  block_type: BlockType;
  claim_signals: ClaimSignal[];
  marker_count: number;
  source_count: number;
  score: number;
  reason: string;
  suggested_action: string;
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const DEFAULT_THRESHOLD = 0.7;
const MARKER_RE = /\^\[[^\]]+\]/g;
const ISO_DATE_RE = /\b\d{4}[-/.]\d{1,2}[-/.]\d{1,2}\b/;
const JP_DATE_RE = /\d{4}\s*\u5e74\s*\d{1,2}\s*\u6708\s*\d{1,2}\s*\u65e5/;
const NUMERIC_WITH_UNIT_RE =
  /(?:\b\d[\d,]*(?:\.\d+)?\s?(?:%|bps|bp|x|times|million|billion|trillion|JPY|USD|yen|members|stores|branches|companies)\b|[A-Z]{3}\s?\d[\d,]*(?:\.\d+)?|\d[\d,]*(?:\.\d+)?\s?(?:\u5186|\u4e07\u5186|\u5104\u5186|\u5146\u5186|\u793e|\u4eba|\u5e97|\u62e0\u70b9|\u5e97\u8217))/i;
const REGULATORY_RE =
  /(?:registration|registered|license|licence|licensed|FIBO|funds transfer|crypto-?asset exchange|Type I|Type II|\u767b\u9332|\u514d\u8a31|\u8a31\u53ef|\u8cc7\u91d1\u79fb\u52d5|\u6697\u53f7\u8cc7\u7523|\u91d1\u878d\u5546\u54c1\u53d6\u5f15|\u7b2c\s*\d+\s*\u53f7)/i;
const RELATIONSHIP_RE =
  /(?:parent|subsidiary|affiliate|shareholder|owned by|group company|custody role|trust role|\u89aa\u4f1a\u793e|\u5b50\u4f1a\u793e|\u682a\u4e3b|\u30b0\u30eb\u30fc\u30d7|\u4fe1\u8a17|\u30ab\u30b9\u30c8\u30c7\u30a3)/i;
const STATUS_RE =
  /(?:active|revoked|pending|listed|delisted|approved|completed|cancelled|canceled|\u53d6\u6d88|\u672a\u767b\u9332|\u4e0a\u5834|\u4e0a\u5834\u5ec3\u6b62|\u627f\u8a8d|\u5b8c\u4e86|\u4e2d\u6b62)/i;
const TABLE_SEPARATOR_RE = /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/;

function parseArgs(argv: string[]): CliOptions {
  let rootDir = ROOT;
  let json = false;
  let domain: string | null = null;
  let failUnder: number | null = null;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      json = true;
    } else if (arg === "--domain") {
      domain = String(argv[index + 1] ?? "").trim() || null;
      index += 1;
    } else if (arg.startsWith("--domain=")) {
      domain = arg.slice("--domain=".length).trim() || null;
    } else if (arg === "--fail-under") {
      failUnder = parseThreshold(String(argv[index + 1] ?? ""));
      index += 1;
    } else if (arg.startsWith("--fail-under=")) {
      failUnder = parseThreshold(arg.slice("--fail-under=".length));
    } else if (arg === "--root-dir") {
      rootDir = path.resolve(String(argv[index + 1] ?? ".")).replaceAll("\\", "/");
      index += 1;
    } else if (arg.startsWith("--root-dir=")) {
      rootDir = path.resolve(arg.slice("--root-dir=".length)).replaceAll("\\", "/");
    }
  }

  return { rootDir, json, domain, failUnder };
}

function parseThreshold(value: string): number | null {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;
  if (parsed < 0 || parsed > 1) return null;
  return parsed;
}

function isAuditSource(relPath: string): boolean {
  if (!isPublicPage(relPath)) return false;
  if (relPath === "CHANGELOG.md") return false;
  if (relPath.startsWith("docs/")) return false;
  if (relPath.startsWith("releases/")) return false;
  if (relPath.startsWith("site/")) return false;
  if (relPath.startsWith("api/")) return false;
  if (relPath.startsWith("app/")) return false;
  if (relPath.startsWith("_vercel_public/")) return false;
  if (relPath.endsWith("/INDEX.md")) return false;
  if (!relPath.includes("/")) return false;
  return relPath.endsWith(".md");
}

async function loadSourceDocs(options: CliOptions): Promise<SourceDoc[]> {
  const markdownFiles = await iterMarkdownFiles(options.rootDir);
  const docs: SourceDoc[] = [];
  for (const filePath of markdownFiles) {
    const relPath = pathPosix.relative(options.rootDir, filePath);
    if (!isAuditSource(relPath)) continue;
    if (options.domain && !relPath.startsWith(`${options.domain}/`)) continue;
    const text = await readTextUtf8(filePath);
    const frontmatter = extractFrontmatter(text);
    const entry = await buildEntry(options.rootDir, relPath, text);
    const sources = frontmatter.sources;
    docs.push({
      entry,
      text,
      sourceCount: Array.isArray(sources) ? sources.length : 0,
      confidence: typeof frontmatter.confidence === "string" ? frontmatter.confidence : "",
    });
  }
  return docs;
}

function markerCount(text: string): number {
  return [...text.matchAll(MARKER_RE)].length;
}

function cleanText(text: string): string {
  return stripInlineMarkdown(text)
    .replaceAll(MARKER_RE, "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();
}

function splitBlocks(doc: SourceDoc): TextBlock[] {
  const blocks: TextBlock[] = [];
  let inFrontmatter = false;
  let inFence = false;
  let stopped = false;
  let paragraph: string[] = [];
  let paragraphLine = 0;
  const lines = doc.text.split(/\r?\n/);

  const flushParagraph = (): void => {
    if (paragraph.length === 0) return;
    const raw = paragraph.join(" ");
    blocks.push({
      path: doc.entry.source_path,
      line: paragraphLine,
      block_type: "paragraph",
      text: raw,
      marker_count: markerCount(raw),
      nearby_marker_count: 0,
      source_count: doc.sourceCount,
      confidence: doc.confidence,
    });
    paragraph = [];
    paragraphLine = 0;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const lineNumber = index + 1;
    const line = lines[index];
    const trimmed = line.trim();

    if (lineNumber === 1 && trimmed === "---") {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (trimmed === "---") inFrontmatter = false;
      continue;
    }
    if (trimmed.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence || stopped) continue;
    if (/^##\s+(Related|Sources)\b/i.test(trimmed)) {
      flushParagraph();
      stopped = true;
      continue;
    }
    if (!trimmed) {
      flushParagraph();
      continue;
    }
    if (/^#{1,6}\s+/.test(trimmed)) {
      flushParagraph();
      continue;
    }
    if (TABLE_SEPARATOR_RE.test(trimmed)) continue;

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph();
      blocks.push({
        path: doc.entry.source_path,
        line: lineNumber,
        block_type: "table_row",
        text: line,
        marker_count: markerCount(line),
        nearby_marker_count: 0,
        source_count: doc.sourceCount,
        confidence: doc.confidence,
      });
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      blocks.push({
        path: doc.entry.source_path,
        line: lineNumber,
        block_type: "list_item",
        text: line,
        marker_count: markerCount(line),
        nearby_marker_count: 0,
        source_count: doc.sourceCount,
        confidence: doc.confidence,
      });
      continue;
    }

    if (paragraph.length === 0) paragraphLine = lineNumber;
    paragraph.push(line);
  }
  flushParagraph();

  return blocks.map((block, index) => ({
    ...block,
    nearby_marker_count:
      block.marker_count +
      (blocks[index - 1]?.marker_count ?? 0) +
      (blocks[index + 1]?.marker_count ?? 0),
  }));
}

function claimSignals(block: TextBlock): ClaimSignal[] {
  const text = cleanText(block.text);
  const signals: ClaimSignal[] = [];
  if (NUMERIC_WITH_UNIT_RE.test(text)) signals.push("numeric");
  if (ISO_DATE_RE.test(text) || JP_DATE_RE.test(text)) signals.push("date");
  if (REGULATORY_RE.test(text)) signals.push("registration");
  if (RELATIONSHIP_RE.test(text)) signals.push("relationship");
  if (STATUS_RE.test(text)) signals.push("status");
  return signals;
}

function scoreBlock(block: TextBlock, signals: ClaimSignal[]): number {
  if (signals.length === 0) return 1;
  if (block.marker_count > 0) return 1;
  if (block.nearby_marker_count > 0) return 0.9;

  let score = block.source_count > 0 ? 0.82 : 0.35;
  if (block.block_type === "table_row") score -= 0.14;
  if (signals.length >= 3) score -= 0.12;
  if (signals.length >= 4) score -= 0.08;
  if (block.source_count <= 1 && signals.length >= 2) score -= 0.08;
  return Math.max(0, Math.min(1, Number(score.toFixed(2))));
}

function reasonFor(block: TextBlock, signals: ClaimSignal[], score: number): string {
  if (block.source_count === 0) return "frontmatter_sources_missing";
  if (block.block_type === "table_row" && block.marker_count === 0) return "table_row_without_marker";
  if (signals.length >= 3) return "low_marker_density";
  if (
    (block.confidence === "likely" || block.confidence === "certain") &&
    block.marker_count === 0 &&
    block.source_count <= 1 &&
    signals.length >= 2 &&
    score < DEFAULT_THRESHOLD
  ) {
    return "confidence_marker_mismatch";
  }
  if (signals.includes("registration") || signals.includes("status")) return "regulatory_status_without_marker";
  if (signals.includes("relationship")) return "relationship_without_marker";
  if (signals.includes("date")) return "date_claim_without_marker";
  return "numeric_claim_without_marker";
}

function suggestedAction(reason: string): string {
  if (reason === "frontmatter_sources_missing") {
    return "add public source URLs to frontmatter sources and mirror them in ## Sources";
  }
  if (reason === "table_row_without_marker") {
    return "add a marker to the row or a nearby table caption / lead sentence that sources the row";
  }
  if (reason === "confidence_marker_mismatch") {
    return "add or move a provenance marker near the high-confidence factual claim";
  }
  if (reason === "relationship_without_marker") {
    return "add a public-source marker near the relationship claim or mark the block as non-claim prose";
  }
  if (reason === "regulatory_status_without_marker") {
    return "add a public registry / official-source marker near the regulatory status claim";
  }
  return "add or move a public-source marker near the claim block, or mark as false positive during review";
}

function severityFor(score: number): Severity {
  if (score < 0.5) return "needs_review";
  if (score < DEFAULT_THRESHOLD) return "warning";
  return "informational";
}

function rowsForDocs(docs: SourceDoc[], threshold: number): ReportRow[] {
  const rows: ReportRow[] = [];
  for (const doc of docs) {
    for (const block of splitBlocks(doc)) {
      const signals = claimSignals(block);
      if (signals.length === 0) continue;
      const score = scoreBlock(block, signals);
      if (score >= threshold) continue;
      const reason = reasonFor(block, signals, score);
      rows.push({
        severity: severityFor(score),
        path: block.path,
        line: block.line,
        block_type: block.block_type,
        claim_signals: signals.sort(),
        marker_count: block.nearby_marker_count,
        source_count: block.source_count,
        score,
        reason,
        suggested_action: suggestedAction(reason),
      });
    }
  }
  return rows.sort(compareRows);
}

function compareRows(left: ReportRow, right: ReportRow): number {
  return (
    left.path.localeCompare(right.path) ||
    left.line - right.line ||
    left.block_type.localeCompare(right.block_type) ||
    left.reason.localeCompare(right.reason)
  );
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  const threshold = options.failUnder ?? DEFAULT_THRESHOLD;
  const docs = await loadSourceDocs(options);
  const rows = rowsForDocs(docs, threshold);

  if (options.json) {
    console.log(JSON.stringify(rows, null, 2));
  } else if (options.failUnder !== null && rows.length > 0) {
    console.error(`provenance_rows_below_threshold=${rows.length}`);
    for (const row of rows.slice(0, 40)) {
      console.error(`${row.reason}: ${row.path}:${row.line} score=${row.score} signals=${row.claim_signals.join(",")}`);
    }
  }

  if (options.failUnder !== null && rows.length > 0) return 1;
  return 0;
}

process.exitCode = await main();
