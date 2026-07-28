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

type BlockType = "paragraph" | "list_item" | "table_row" | "table";
type Severity = "needs_review" | "warning" | "informational";
type ClaimSignal = "numeric" | "date" | "registration" | "relationship" | "status";
type TableEvidence =
  | "section_heading"
  | "lead_or_caption"
  | "table_header"
  | "table_footer"
  | "section_source_block";

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
  end_line: number;
  block_type: BlockType;
  text: string;
  marker_count: number;
  nearby_marker_count: number;
  source_link_count: number;
  source_count: number;
  confidence: string;
  section_id: number;
  table_id: number | null;
  is_table_header: boolean;
};

export type ReportRow = {
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

type DocumentPart = {
  kind: "heading" | "paragraph" | "list_item" | "table";
  line: number;
  end_line: number;
  section_id: number;
  text: string;
  marker_count: number;
  source_link_count: number;
  table_id: number | null;
};

type ParsedTable = {
  id: number;
  path: string;
  line: number;
  end_line: number;
  section_id: number;
  part_index: number;
  rows: TextBlock[];
  has_separator: boolean;
};

type ParsedDocument = {
  blocks: TextBlock[];
  parts: DocumentPart[];
  tables: ParsedTable[];
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const DEFAULT_THRESHOLD = 0.7;
const MARKER_RE = /\^\[[^\]]+\]/g;
const SOURCE_LINK_RE =
  /(?:\[[^\]]+\]\(https?:\/\/[^)\s]+\)|https?:\/\/[^\s<>)\]]+)/gi;
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
const TABLE_SCOPE_RE =
  /(?:\b(?:table|matrix|rows?|columns?|below|following|tabulation)\b|(?:\u8868|\u4e00\u89a7|\u30de\u30c8\u30ea\u30af\u30b9|\u4e0b\u8a18|\u4ee5\u4e0b|\u5404\u884c|\u5168\u884c|\u6bd4\u8f03\u8868)|(?:\u8868\u683c|\u77e9\u9635|\u6e05\u5355|\u4e0b\u5217|\u6bcf\u884c|\u6240\u6709\u884c))/iu;
const SOURCE_NOTE_RE =
  /^(?:[-*+]\s*)?(?:source(?:s| note| hierarchy)?|sources used|\u51fa\u5178|\u6765\u6e90|\u4f86\u6e90|\u53c2\u8003(?:\u8cc7\u6599|\u8d44\u6599)?|\u8cc7\u6599|\u8d44\u6599|\u6839\u62e0|\u6839\u64da)\s*[:\uff1a]/iu;
const MAX_SECTION_SOURCE_BLOCK_DISTANCE = 3;
const MAX_SECTION_SOURCE_LINE_DISTANCE = 12;

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

function sourceLinkCount(text: string): number {
  return [...text.matchAll(SOURCE_LINK_RE)].length;
}

function cleanText(text: string): string {
  return stripInlineMarkdown(text)
    .replaceAll(MARKER_RE, "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim();
}

function makeTextBlock(
  doc: SourceDoc,
  blockType: Exclude<BlockType, "table">,
  text: string,
  line: number,
  endLine: number,
  sectionId: number,
  tableId: number | null = null,
): TextBlock {
  const markers = markerCount(text);
  return {
    path: doc.entry.source_path,
    line,
    end_line: endLine,
    block_type: blockType,
    text,
    marker_count: markers,
    nearby_marker_count: markers,
    source_link_count: sourceLinkCount(text),
    source_count: doc.sourceCount,
    confidence: doc.confidence,
    section_id: sectionId,
    table_id: tableId,
    is_table_header: false,
  };
}

function parseDocument(doc: SourceDoc): ParsedDocument {
  const blocks: TextBlock[] = [];
  const parts: DocumentPart[] = [];
  const tables: ParsedTable[] = [];
  let inFrontmatter = false;
  let inFence = false;
  let stopped = false;
  let paragraph: string[] = [];
  let paragraphLine = 0;
  let paragraphEndLine = 0;
  let sectionId = 0;
  let nextTableId = 1;
  let table: ParsedTable | null = null;
  const lines = doc.text.split(/\r?\n/);

  const flushParagraph = (): void => {
    if (paragraph.length === 0) return;
    const raw = paragraph.join(" ");
    const block = makeTextBlock(
      doc,
      "paragraph",
      raw,
      paragraphLine,
      paragraphEndLine,
      sectionId,
    );
    blocks.push(block);
    parts.push({
      kind: "paragraph",
      line: block.line,
      end_line: block.end_line,
      section_id: block.section_id,
      text: block.text,
      marker_count: block.marker_count,
      source_link_count: block.source_link_count,
      table_id: null,
    });
    paragraph = [];
    paragraphLine = 0;
    paragraphEndLine = 0;
  };

  const flushTable = (): void => {
    if (!table) return;
    if (table.has_separator && table.rows.length > 0) {
      table.rows[0].is_table_header = true;
    }
    table.part_index = parts.length;
    blocks.push(...table.rows);
    parts.push({
      kind: "table",
      line: table.line,
      end_line: table.end_line,
      section_id: table.section_id,
      text: table.rows.map((row) => row.text).join("\n"),
      marker_count: table.rows.reduce(
        (total, row) => total + row.marker_count,
        0,
      ),
      source_link_count: table.rows.reduce(
        (total, row) => total + row.source_link_count,
        0,
      ),
      table_id: table.id,
    });
    tables.push(table);
    table = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const lineNumber = index + 1;
    const line = lines[index];
    const trimmed = line.trim();

    if (lineNumber === 1 && trimmed === "---") {
      flushParagraph();
      flushTable();
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (trimmed === "---") inFrontmatter = false;
      continue;
    }
    if (trimmed.startsWith("```")) {
      flushParagraph();
      flushTable();
      inFence = !inFence;
      continue;
    }
    if (inFence || stopped) continue;
    if (/^#{2,6}\s+(Related|Sources)\b/i.test(trimmed)) {
      flushParagraph();
      flushTable();
      stopped = true;
      continue;
    }
    if (!trimmed) {
      flushParagraph();
      flushTable();
      continue;
    }
    if (/^#{1,6}\s+/.test(trimmed)) {
      flushParagraph();
      flushTable();
      sectionId += 1;
      parts.push({
        kind: "heading",
        line: lineNumber,
        end_line: lineNumber,
        section_id: sectionId,
        text: line,
        marker_count: markerCount(line),
        source_link_count: sourceLinkCount(line),
        table_id: null,
      });
      continue;
    }
    if (TABLE_SEPARATOR_RE.test(trimmed)) {
      flushParagraph();
      if (table) {
        table.has_separator = true;
        table.end_line = lineNumber;
      }
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph();
      if (!table) {
        table = {
          id: nextTableId,
          path: doc.entry.source_path,
          line: lineNumber,
          end_line: lineNumber,
          section_id: sectionId,
          part_index: -1,
          rows: [],
          has_separator: false,
        };
        nextTableId += 1;
      }
      const row = makeTextBlock(
        doc,
        "table_row",
        line,
        lineNumber,
        lineNumber,
        sectionId,
        table.id,
      );
      table.rows.push(row);
      table.end_line = lineNumber;
      continue;
    }

    flushTable();
    if (/^[-*+]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      const block = makeTextBlock(
        doc,
        "list_item",
        line,
        lineNumber,
        lineNumber,
        sectionId,
      );
      blocks.push(block);
      parts.push({
        kind: "list_item",
        line: block.line,
        end_line: block.end_line,
        section_id: block.section_id,
        text: block.text,
        marker_count: block.marker_count,
        source_link_count: block.source_link_count,
        table_id: null,
      });
      continue;
    }

    if (paragraph.length === 0) paragraphLine = lineNumber;
    paragraph.push(line);
    paragraphEndLine = lineNumber;
  }
  flushParagraph();
  flushTable();

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    block.nearby_marker_count =
      block.table_id === null
        ? block.marker_count +
          (blocks[index - 1]?.marker_count ?? 0) +
          (blocks[index + 1]?.marker_count ?? 0)
        : block.marker_count;
  }

  return { blocks, parts, tables };
}

function hasDirectEvidence(part: DocumentPart): boolean {
  return part.marker_count > 0 || part.source_link_count > 0;
}

function isSourceNote(text: string): boolean {
  return SOURCE_NOTE_RE.test(text.trim());
}

function isTableScopedLead(part: DocumentPart): boolean {
  if (!hasDirectEvidence(part)) return false;
  const text = cleanText(part.text);
  return TABLE_SCOPE_RE.test(text) || /[:\uff1a]\s*$/.test(text);
}

function isSourceNoteWithInventory(
  part: DocumentPart,
  doc: SourceDoc,
): boolean {
  return (
    isSourceNote(part.text) &&
    (hasDirectEvidence(part) || doc.sourceCount > 0)
  );
}

function tableEvidenceFor(
  parsed: ParsedDocument,
  table: ParsedTable,
  doc: SourceDoc,
): TableEvidence[] {
  const evidence = new Set<TableEvidence>();
  const header = table.rows.find((row) => row.is_table_header);
  if (header && header.marker_count > 0) {
    evidence.add("table_header");
  }

  const previous = parsed.parts[table.part_index - 1];
  if (previous?.section_id === table.section_id) {
    if (previous.kind === "heading" && hasDirectEvidence(previous)) {
      evidence.add("section_heading");
    } else if (
      previous.kind !== "table" &&
      (isTableScopedLead(previous) ||
        isSourceNoteWithInventory(previous, doc))
    ) {
      evidence.add("lead_or_caption");
    }
  }

  for (const direction of [-1, 1] as const) {
    let blockDistance = 0;
    for (
      let index = table.part_index + direction;
      index >= 0 && index < parsed.parts.length;
      index += direction
    ) {
      const part = parsed.parts[index];
      if (
        part.section_id !== table.section_id ||
        part.kind === "heading"
      ) {
        break;
      }

      blockDistance += 1;
      const lineDistance =
        direction < 0
          ? table.line - part.end_line - 1
          : part.line - table.end_line - 1;
      if (
        blockDistance > MAX_SECTION_SOURCE_BLOCK_DISTANCE ||
        lineDistance > MAX_SECTION_SOURCE_LINE_DISTANCE
      ) {
        break;
      }
      if (
        part.kind === "table" ||
        !isSourceNoteWithInventory(part, doc)
      ) {
        continue;
      }

      if (direction > 0 && blockDistance === 1) {
        evidence.add("table_footer");
      } else if (direction < 0 && blockDistance === 1) {
        evidence.add("lead_or_caption");
      } else {
        evidence.add("section_source_block");
      }
    }
  }

  return [...evidence].sort();
}

function rowHasEvidence(block: TextBlock): boolean {
  return block.marker_count > 0 || block.source_link_count > 0;
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
  if (block.block_type === "table") return "table_without_provenance";
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
  if (reason === "table_without_provenance") {
    return "add one scoped marker / public source link in the table caption, lead, footer, or section source note; use row markers when sources differ";
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

function reportRow(
  block: TextBlock,
  signals: ClaimSignal[],
  score: number,
): ReportRow {
  const reason = reasonFor(block, signals, score);
  return {
    severity: severityFor(score),
    path: block.path,
    line: block.line,
    block_type: block.block_type,
    claim_signals: [...signals].sort(),
    marker_count: block.nearby_marker_count,
    source_count: block.source_count,
    score,
    reason,
    suggested_action: suggestedAction(reason),
  };
}

function tableReportBlock(
  table: ParsedTable,
  doc: SourceDoc,
  claimRows: TextBlock[],
): TextBlock {
  return {
    path: table.path,
    line: table.line,
    end_line: table.end_line,
    block_type: "table",
    text: claimRows.map((row) => row.text).join("\n"),
    marker_count: 0,
    nearby_marker_count: 0,
    source_link_count: 0,
    source_count: doc.sourceCount,
    confidence: doc.confidence,
    section_id: table.section_id,
    table_id: table.id,
    is_table_header: false,
  };
}

function unprovenancedTableScore(sourceCount: number): number {
  return sourceCount > 0 ? 0.68 : 0.21;
}

function unprovenancedTableRowScore(
  block: TextBlock,
  signals: ClaimSignal[],
): number {
  const score = scoreBlock(block, signals);
  return block.source_count > 0 ? Math.max(0.5, score) : score;
}

function rowsForDocs(docs: SourceDoc[], threshold: number): ReportRow[] {
  const rows: ReportRow[] = [];
  for (const doc of docs) {
    const parsed = parseDocument(doc);
    for (const block of parsed.blocks) {
      if (block.table_id !== null) continue;
      const signals = claimSignals(block);
      if (signals.length === 0) continue;
      const score = scoreBlock(block, signals);
      if (score >= threshold) continue;
      rows.push(reportRow(block, signals, score));
    }

    for (const table of parsed.tables) {
      const claimRows = table.rows.filter(
        (row) =>
          !row.is_table_header && claimSignals(row).length > 0,
      );
      if (claimRows.length === 0) continue;
      if (tableEvidenceFor(parsed, table, doc).length > 0) continue;

      const uncoveredRows = claimRows.filter(
        (row) => !rowHasEvidence(row),
      );
      if (uncoveredRows.length === 0) continue;

      if (uncoveredRows.length === claimRows.length) {
        const block = tableReportBlock(table, doc, claimRows);
        const signals = [
          ...new Set(claimRows.flatMap((row) => claimSignals(row))),
        ].sort();
        const score = unprovenancedTableScore(doc.sourceCount);
        if (score < threshold) {
          rows.push(reportRow(block, signals, score));
        }
        continue;
      }

      for (const block of uncoveredRows) {
        const signals = claimSignals(block);
        const score = unprovenancedTableRowScore(block, signals);
        if (score < threshold) {
          rows.push(reportRow(block, signals, score));
        }
      }
    }
  }
  return rows.sort(compareRows);
}

export function auditMarkdownForTest(
  text: string,
  options: {
    path?: string;
    sourceCount?: number;
    confidence?: string;
    threshold?: number;
  } = {},
): ReportRow[] {
  const sourcePath = options.path ?? "finance/provenance-fixture.md";
  const doc: SourceDoc = {
    entry: { source_path: sourcePath } as Entry,
    text,
    sourceCount: options.sourceCount ?? 1,
    confidence: options.confidence ?? "likely",
  };
  return rowsForDocs(
    [doc],
    options.threshold ?? DEFAULT_THRESHOLD,
  );
}

function compareRows(left: ReportRow, right: ReportRow): number {
  return (
    left.path.localeCompare(right.path) ||
    left.line - right.line ||
    left.block_type.localeCompare(right.block_type) ||
    left.reason.localeCompare(right.reason)
  );
}

async function writeStdout(text: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    process.stdout.write(text, (error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  const threshold = options.failUnder ?? DEFAULT_THRESHOLD;
  const docs = await loadSourceDocs(options);
  const rows = rowsForDocs(docs, threshold);

  if (options.json) {
    await writeStdout(`${JSON.stringify(rows, null, 2)}\n`);
  } else if (options.failUnder !== null && rows.length > 0) {
    console.error(`provenance_rows_below_threshold=${rows.length}`);
    for (const row of rows.slice(0, 40)) {
      console.error(`${row.reason}: ${row.path}:${row.line} score=${row.score} signals=${row.claim_signals.join(",")}`);
    }
  }

  if (options.failUnder !== null && rows.length > 0) return 1;
  return 0;
}

if (import.meta.main) {
  process.exitCode = await main();
}
