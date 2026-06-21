#!/usr/bin/env bun

import path, { posix as pathPosix } from "node:path";
import {
  extractFrontmatter,
  iterMarkdownFiles,
  readTextUtf8,
} from "../lib/markdown_helpers";

type Severity = "needs_review" | "warning" | "informational";
type BlockType = "paragraph" | "list_item" | "table_row";

type Args = {
  json: boolean;
  domain: string | null;
  failUnder: number | null;
  withSeededLowScoreFixture: boolean;
};

type Block = {
  path: string;
  line: number;
  block_type: BlockType;
  text: string;
  source_count: number;
};

type Finding = {
  severity: Severity;
  path: string;
  line: number;
  block_type: BlockType;
  claim_signals: string[];
  marker_count: number;
  source_count: number;
  score: number;
  reason: string;
  suggested_action: string;
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");

const CONTROL_DOCS = new Set([
  "README.md",
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "AGENTS.md",
  "SCHEMA.md",
  "OBSIDIAN-SETUP.md",
  "INDEX.md",
  "wiki-link-improvement-plan.md",
]);

function parseArgs(argv: string[]): Args {
  const args: Args = {
    json: false,
    domain: null,
    failUnder: null,
    withSeededLowScoreFixture: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--domain") {
      args.domain = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (arg === "--fail-under") {
      const value = Number(argv[index + 1]);
      if (!Number.isFinite(value) || value < 0 || value > 1) {
        throw new Error("--fail-under expects a number from 0 to 1");
      }
      args.failUnder = value;
      index += 1;
      continue;
    }
    if (arg === "--with-seeded-low-score-fixture") {
      args.withSeededLowScoreFixture = true;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      console.log("Usage: bun tools/provenance_completeness_audit.ts [--json] [--domain <domain>] [--fail-under <0-1>]");
      process.exit(0);
    }
    throw new Error(`unknown arg: ${arg}`);
  }
  return args;
}

function shouldScan(relPath: string, args: Args): boolean {
  if (CONTROL_DOCS.has(relPath)) return false;
  if (!relPath.includes("/")) return false;
  if (relPath.startsWith("releases/")) return false;
  if (relPath.startsWith("tools/")) return false;
  if (relPath.startsWith("api/")) return false;
  if (relPath.includes("/i18n/")) return false;
  if (relPath.split("/").some((part) => part.startsWith("."))) return false;
  if (args.domain && !relPath.startsWith(`${args.domain}/`)) return false;
  return true;
}

function bodyStartLine(lines: readonly string[]): number {
  if (lines[0]?.trim() !== "---") return 0;
  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index]?.trim() === "---") return index + 1;
  }
  return 0;
}

function sourceCount(text: string): number {
  const frontmatter = extractFrontmatter(text);
  return Array.isArray(frontmatter.sources)
    ? frontmatter.sources.filter((item) => typeof item === "string" && item.trim()).length
    : 0;
}

function markerCount(text: string): number {
  return [...text.matchAll(/\^\[[^\]]+\]/g)].length;
}

function cleanBlockText(text: string): string {
  return text
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (_match, target: string, label: string | undefined) => label ?? target)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function isIgnoredHeading(line: string): boolean {
  return /^#{2,3}\s+(related|sources?|wiki route|see also|出典|参考|関連)/i.test(line.trim());
}

function parseBlocks(relPath: string, text: string): Block[] {
  const lines = text.split(/\r?\n/);
  const start = bodyStartLine(lines);
  const blocks: Block[] = [];
  const sources = sourceCount(text);
  let inCode = false;
  let ignoredSection = false;
  let paragraph: string[] = [];
  let paragraphStart = 0;

  function flushParagraph(): void {
    if (paragraph.length === 0) return;
    const text = cleanBlockText(paragraph.join(" "));
    if (text) {
      blocks.push({
        path: relPath,
        line: paragraphStart,
        block_type: "paragraph",
        text,
        source_count: sources,
      });
    }
    paragraph = [];
    paragraphStart = 0;
  }

  for (let index = start; index < lines.length; index += 1) {
    const lineNo = index + 1;
    const raw = lines[index] ?? "";
    const trimmed = raw.trim();

    if (trimmed.startsWith("```")) {
      flushParagraph();
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    if (/^#{1,6}\s+/.test(trimmed)) {
      flushParagraph();
      ignoredSection = isIgnoredHeading(trimmed);
      continue;
    }
    if (ignoredSection) continue;

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    if (/^\|.*\|$/.test(trimmed) && !/^\|\s*:?-{3,}:?\s*\|/.test(trimmed)) {
      flushParagraph();
      blocks.push({
        path: relPath,
        line: lineNo,
        block_type: "table_row",
        text: cleanBlockText(trimmed),
        source_count: sources,
      });
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      blocks.push({
        path: relPath,
        line: lineNo,
        block_type: "list_item",
        text: cleanBlockText(trimmed.replace(/^[-*+]\s+/, "").replace(/^\d+\.\s+/, "")),
        source_count: sources,
      });
      continue;
    }

    if (paragraph.length === 0) paragraphStart = lineNo;
    paragraph.push(trimmed);
  }

  flushParagraph();
  return blocks;
}

function claimSignals(text: string): string[] {
  const lower = text.toLowerCase();
  const signals = new Set<string>();

  if (/\d[\d,.]*\s*(?:%|percent|JPY|yen|million|billion|trillion|bn|tn|兆円|億円|万人|人)\b/i.test(text)) {
    signals.add("numeric");
  }
  if (/\b(?:19|20)\d{2}[-/]\d{1,2}[-/]\d{1,2}\b|(?:19|20)\d{2}年\s*\d{1,2}月\s*\d{1,2}日/.test(text)) {
    signals.add("date");
  }
  if (/registered|registration|licen[cs]e|revoked|approved|fibo|funds?\s+transfer|prepaid|金融商品取引|登録|免許|許可|取消/.test(lower)) {
    signals.add("regulatory_status");
  }
  if (/subsidiary|parent|affiliate|shareholder|owned by|sponsor|group company|子会社|親会社|株主|出資/.test(lower)) {
    signals.add("relationship");
  }
  if (/clearing|settlement|custody|trustee|benchmark|index provider|operator|issuer|system|決済|清算|信託|指数/.test(lower)) {
    signals.add("product_system_attribute");
  }
  return [...signals].sort();
}

function scoreBlock(block: Block, signals: readonly string[]): number {
  const markers = markerCount(block.text);
  if (markers > 0) return 1;
  if (block.block_type === "table_row" && block.source_count > 0) return 0.55;
  if (block.source_count > 0 && signals.length === 1) return 0.65;
  if (block.source_count > 0) return 0.45;
  return 0.15;
}

function reasonFor(signals: readonly string[], blockType: BlockType, markers: number, sourceCountValue: number): string {
  if (blockType === "table_row" && markers === 0) return "table_row_without_marker";
  if (sourceCountValue === 0) return "frontmatter_sources_missing";
  if (signals.includes("numeric")) return "numeric_claim_without_marker";
  if (signals.includes("date")) return "date_claim_without_marker";
  if (signals.includes("regulatory_status")) return "regulatory_status_without_marker";
  if (signals.includes("relationship")) return "relationship_without_marker";
  return "low_marker_density";
}

function findingFor(block: Block): Finding | null {
  const signals = claimSignals(block.text);
  if (signals.length === 0) return null;
  const markers = markerCount(block.text);
  const score = scoreBlock(block, signals);
  if (score >= 0.70) return null;
  return {
    severity: score < 0.50 ? "needs_review" : "warning",
    path: block.path,
    line: block.line,
    block_type: block.block_type,
    claim_signals: signals,
    marker_count: markers,
    source_count: block.source_count,
    score,
    reason: reasonFor(signals, block.block_type, markers, block.source_count),
    suggested_action: "Add or move a public-source marker near the claim, or mark the block as non-claim prose during triage.",
  };
}

async function loadBlocks(args: Args): Promise<Block[]> {
  const blocks: Block[] = [];
  for (const filePath of await iterMarkdownFiles(ROOT)) {
    const normalizedPath = filePath.replaceAll("\\", "/");
    const relPath = pathPosix.relative(ROOT, normalizedPath);
    if (!shouldScan(relPath, args)) continue;
    const text = await readTextUtf8(normalizedPath);
    blocks.push(...parseBlocks(relPath, text));
  }
  return blocks;
}

function seededLowScoreBlock(): Block {
  return {
    path: "tools/fixtures/provenance-low-score.md",
    line: 7,
    block_type: "paragraph",
    text: "Example Operator is a registered funds transfer operator with capital of JPY 100 million as of 2026-06-01.",
    source_count: 0,
  };
}

function analyze(blocks: readonly Block[]): Finding[] {
  const findings = blocks
    .map((block) => findingFor(block))
    .filter((finding): finding is Finding => finding !== null);
  findings.sort((a, b) => `${a.path}:${a.line}:${a.reason}`.localeCompare(`${b.path}:${b.line}:${b.reason}`));
  return findings;
}

async function main(): Promise<number> {
  const args = parseArgs(Bun.argv.slice(2));
  const blocks = await loadBlocks(args);
  if (args.withSeededLowScoreFixture) blocks.push(seededLowScoreBlock());
  const findings = analyze(blocks);

  if (args.json) {
    console.log(JSON.stringify(findings, null, 2));
  }

  if (args.failUnder !== null && findings.some((finding) => finding.score < (args.failUnder ?? 0))) {
    return 1;
  }
  return 0;
}

process.exitCode = await main();
