#!/usr/bin/env bun

import path, { posix as pathPosix } from "node:path";
import {
  buildEntry,
  isPublicPage,
  iterMarkdownFiles,
  normalizeEntityPath,
  readTextUtf8,
  stripInlineMarkdown,
  type Entry,
} from "../lib/markdown_helpers";

type ClaimType =
  | "registration_number"
  | "date"
  | "numeric_metric"
  | "status"
  | "relationship";

type Severity = "conflict" | "needs_review" | "informational";

type CliOptions = {
  rootDir: string;
  json: boolean;
  failOnConflicts: boolean;
  entity: string | null;
  type: ClaimType | null;
};

type SourceDoc = {
  entry: Entry;
  text: string;
  entityKey: string;
};

type Claim = {
  claim_type: ClaimType;
  entity_key: string;
  metric_key: string;
  path: string;
  line: number;
  value: string;
  normalized_value: string;
  period: string | null;
  label: string;
  evidence: "body";
};

type ReportRow = {
  severity: Severity;
  claim_type: ClaimType;
  entity_key: string;
  metric_key: string;
  path: string;
  line: number;
  left: Claim;
  right: Claim;
  reason: string;
  suggested_action: string;
};

type MetricPattern = {
  metric_key: string;
  label: string;
  pattern: RegExp;
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const DATE_RE = /(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?/g;
const MARKDOWN_TABLE_SEPARATOR_RE = /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/;

const REGISTRATION_METRICS: MetricPattern[] = [
  {
    metric_key: "funds_transfer_registration_number",
    label: "funds transfer registration",
    pattern: /資金移動|funds\s+transfer/i,
  },
  {
    metric_key: "prepaid_registration_number",
    label: "prepaid payment instrument registration",
    pattern: /前払式支払手段|prepaid/i,
  },
  {
    metric_key: "fibo_registration_number",
    label: "financial instruments business operator registration",
    pattern: /金融商品取引|金商|financial\s+instruments\s+business|FIBO/i,
  },
  {
    metric_key: "credit_purchase_registration_number",
    label: "comprehensive credit purchase registration",
    pattern: /包括信用購入|credit\s+purchase/i,
  },
  {
    metric_key: "crypto_asset_exchange_registration_number",
    label: "crypto asset exchange registration",
    pattern: /暗号資産交換|crypto-?asset\s+exchange|VASP/i,
  },
  {
    metric_key: "money_lending_registration_number",
    label: "money lending registration",
    pattern: /貸金業|money\s+lending/i,
  },
  {
    metric_key: "trust_business_registration_number",
    label: "trust business registration",
    pattern: /信託業|trust\s+business/i,
  },
];

const DATE_METRICS: MetricPattern[] = [
  { metric_key: "established_date", label: "established", pattern: /設立|創業|established|incorporated|founded/i },
  { metric_key: "merger_effective_date", label: "merger effective", pattern: /合併効力|merger\s+effective/i },
  { metric_key: "announcement_date", label: "announcement", pattern: /発表|公表|announcement|announced/i },
  { metric_key: "licence_date", label: "licence date", pattern: /登録日|免許日|licen[cs]e\s+date|registration\s+date/i },
  { metric_key: "delisting_date", label: "delisting", pattern: /上場廃止|delisting|delisted/i },
];

const NUMERIC_METRICS: MetricPattern[] = [
  { metric_key: "capital", label: "capital", pattern: /資本金|capital/i },
  { metric_key: "aum", label: "AUM", pattern: /運用資産|預かり資産|AUM|assets\s+under\s+management/i },
  { metric_key: "branch_count", label: "branch count", pattern: /店舗数|拠点数|branches|branch\s+count/i },
  { metric_key: "member_count", label: "member count", pattern: /会員数|加盟社数|members|member\s+count/i },
  { metric_key: "market_share", label: "market share", pattern: /市場シェア|market\s+share/i },
];

const STATUS_VALUES = [
  { value: "active", pattern: /active|有効|登録済|登録中/i },
  { value: "revoked", pattern: /revoked|取消|失効/i },
  { value: "pending", pattern: /pending|申請中|未登録/i },
  { value: "completed", pattern: /completed|完了/i },
  { value: "cancelled", pattern: /cancelled|canceled|中止/i },
  { value: "deprecated", pattern: /deprecated|廃止/i },
];

function parseArgs(argv: string[]): CliOptions {
  let rootDir = ROOT;
  let json = false;
  let failOnConflicts = false;
  let entity: string | null = null;
  let type: ClaimType | null = null;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      json = true;
    } else if (arg === "--fail-on-conflicts") {
      failOnConflicts = true;
    } else if (arg === "--entity") {
      entity = normalizeEntityPath(String(argv[index + 1] ?? ""));
      index += 1;
    } else if (arg.startsWith("--entity=")) {
      entity = normalizeEntityPath(arg.slice("--entity=".length));
    } else if (arg === "--type") {
      type = parseClaimType(String(argv[index + 1] ?? ""));
      index += 1;
    } else if (arg.startsWith("--type=")) {
      type = parseClaimType(arg.slice("--type=".length));
    } else if (arg === "--root-dir") {
      rootDir = path.resolve(String(argv[index + 1] ?? ".")).replaceAll("\\", "/");
      index += 1;
    } else if (arg.startsWith("--root-dir=")) {
      rootDir = path.resolve(arg.slice("--root-dir=".length)).replaceAll("\\", "/");
    }
  }

  return { rootDir, json, failOnConflicts, entity, type };
}

function parseClaimType(value: string): ClaimType | null {
  const normalized = value.trim();
  if (
    normalized === "registration_number" ||
    normalized === "date" ||
    normalized === "numeric_metric" ||
    normalized === "status" ||
    normalized === "relationship"
  ) {
    return normalized;
  }
  return null;
}

function isAuditSource(relPath: string): boolean {
  if (!isPublicPage(relPath)) return false;
  if (relPath === "CHANGELOG.md") return false;
  if (relPath.startsWith("releases/")) return false;
  if (relPath.startsWith("site/src/content/i18n/")) return false;
  if (relPath.endsWith("/INDEX.md")) return false;
  if (!relPath.includes("/")) return false;
  return relPath.endsWith(".md");
}

function sourceEntityKey(entry: Entry): string {
  const anchor = normalizeEntityPath(entry.canonical_anchor);
  if (anchor) return anchor;
  return normalizeEntityPath(entry.source_path);
}

async function loadSourceDocs(rootDir: string): Promise<SourceDoc[]> {
  const markdownFiles = await iterMarkdownFiles(rootDir);
  const docs: SourceDoc[] = [];
  for (const filePath of markdownFiles) {
    const relPath = pathPosix.relative(rootDir, filePath);
    if (!isAuditSource(relPath)) continue;
    const text = await readTextUtf8(filePath);
    const entry = await buildEntry(rootDir, relPath, text);
    docs.push({ entry, text, entityKey: sourceEntityKey(entry) });
  }
  return docs;
}

function normalizeLine(line: string): string {
  return stripInlineMarkdown(line).normalize("NFKC").replace(/\s+/g, " ").trim();
}

function stripFencesAndFrontmatter(text: string): Array<{ line: string; lineNumber: number }> {
  const result: Array<{ line: string; lineNumber: number }> = [];
  let inFence = false;
  let inFrontmatter = false;
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const lineNumber = index + 1;
    const line = lines[index];
    if (lineNumber === 1 && line.trim() === "---") {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (line.trim() === "---") inFrontmatter = false;
      continue;
    }
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (MARKDOWN_TABLE_SEPARATOR_RE.test(line)) continue;
    result.push({ line, lineNumber });
  }
  return result;
}

function matchingMetric(line: string, metrics: MetricPattern[]): MetricPattern | null {
  for (const metric of metrics) {
    if (metric.pattern.test(line)) return metric;
  }
  return null;
}

function registrationMetric(line: string): MetricPattern | null {
  const direct = matchingMetric(line, REGISTRATION_METRICS);
  if (direct) return direct;
  if (/登録番号|registration\s*(?:number|no\.?)|licen[cs]e\s*(?:number|no\.?)|免許番号/i.test(line)) {
    return {
      metric_key: "registration_number",
      label: "registration number",
      pattern: /./,
    };
  }
  return null;
}

function normalizeRegistrationValue(value: string): string {
  const compact = value.normalize("NFKC").replace(/[^\p{L}\p{N}]/gu, "").toUpperCase();
  return /^\d+$/.test(compact) ? compact.replace(/^0+(?=\d)/, "") : compact;
}

function extractRegistrationClaims(doc: SourceDoc, line: string, lineNumber: number): Claim[] {
  const metric = registrationMetric(line);
  if (!metric) return [];
  const claims: Claim[] = [];
  const patterns = [
    /第\s*([0-9０-９]{1,8})\s*号/g,
    /(?:registration\s*(?:number|no\.?)|licen[cs]e\s*(?:number|no\.?)|免許番号|登録番号)\s*[:：#]?\s*(?:No\.?\s*)?([A-Z]?\d[\d-]{1,})/gi,
    /\bNo\.?\s*([A-Z]?\d[\d-]{1,})\b/gi,
  ];
  for (const pattern of patterns) {
    for (const match of line.matchAll(pattern)) {
      const rawValue = match[1]?.trim();
      if (!rawValue) continue;
      claims.push({
        claim_type: "registration_number",
        entity_key: doc.entityKey,
        metric_key: metric.metric_key,
        path: doc.entry.source_path,
        line: lineNumber,
        value: rawValue,
        normalized_value: normalizeRegistrationValue(rawValue),
        period: extractPeriod(line),
        label: metric.label,
        evidence: "body",
      });
    }
  }
  return dedupeClaims(claims);
}

function normalizeDateValue(value: string): string {
  const match = /^(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?$/.exec(value.normalize("NFKC"));
  if (!match) return value;
  return `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}`;
}

function extractDateClaims(doc: SourceDoc, line: string, lineNumber: number): Claim[] {
  const metric = matchingMetric(line, DATE_METRICS);
  if (!metric) return [];
  const claims: Claim[] = [];
  for (const match of line.matchAll(DATE_RE)) {
    const rawValue = match[0];
    claims.push({
      claim_type: "date",
      entity_key: doc.entityKey,
      metric_key: metric.metric_key,
      path: doc.entry.source_path,
      line: lineNumber,
      value: rawValue,
      normalized_value: normalizeDateValue(rawValue),
      period: null,
      label: metric.label,
      evidence: "body",
    });
  }
  return dedupeClaims(claims);
}

function normalizeNumericValue(value: string, unit: string): string {
  const number = value.replaceAll(",", "");
  return `${number} ${unit.normalize("NFKC").toLowerCase()}`;
}

function extractNumericClaims(doc: SourceDoc, line: string, lineNumber: number): Claim[] {
  const metric = matchingMetric(line, NUMERIC_METRICS);
  if (!metric) return [];
  const claims: Claim[] = [];
  const amountRe = /([0-9][0-9,]*(?:\.\d+)?)\s*(兆円|億円|百万円|万円|円|JPY|yen|million|billion|%|branches|stores|members|店舗|店|社|人)/gi;
  for (const match of line.matchAll(amountRe)) {
    const rawNumber = match[1]?.trim();
    const rawUnit = match[2]?.trim();
    if (!rawNumber || !rawUnit) continue;
    claims.push({
      claim_type: "numeric_metric",
      entity_key: doc.entityKey,
      metric_key: metric.metric_key,
      path: doc.entry.source_path,
      line: lineNumber,
      value: `${rawNumber} ${rawUnit}`,
      normalized_value: normalizeNumericValue(rawNumber, rawUnit),
      period: extractPeriod(line),
      label: metric.label,
      evidence: "body",
    });
  }
  return dedupeClaims(claims);
}

function extractStatusClaims(doc: SourceDoc, line: string, lineNumber: number): Claim[] {
  if (!/(status|ステータス|登録状況|registration|登録)/i.test(line)) return [];
  for (const status of STATUS_VALUES) {
    if (!status.pattern.test(line)) continue;
    return [
      {
        claim_type: "status",
        entity_key: doc.entityKey,
        metric_key: /登録|registration/i.test(line) ? "registration_status" : "status",
        path: doc.entry.source_path,
        line: lineNumber,
        value: status.value,
        normalized_value: status.value,
        period: extractPeriod(line),
        label: "status",
        evidence: "body",
      },
    ];
  }
  return [];
}

function extractRelationshipClaims(doc: SourceDoc, line: string, lineNumber: number): Claim[] {
  if (!/(parent|subsidiary|shareholder|owned by|親会社|子会社|株主|完全子会社|100%)/i.test(line)) return [];
  const rawTarget = firstEntityLink(line);
  const normalizedTarget = normalizeEntityPath(rawTarget.replace(/^\.\//, "").replace(/\.md$/, ""));
  if (!normalizedTarget) return [];
  return [
    {
      claim_type: "relationship",
      entity_key: doc.entityKey,
      metric_key: "parent_entity",
      path: doc.entry.source_path,
      line: lineNumber,
      value: normalizedTarget,
      normalized_value: normalizedTarget.toLowerCase(),
      period: extractPeriod(line),
      label: "parent entity",
      evidence: "body",
    },
  ];
}

function firstEntityLink(line: string): string {
  const candidates: string[] = [];
  for (const match of line.matchAll(/\[\[([^|\]#]+)(?:[|#][^\]]*)?\]\]/g)) {
    candidates.push(match[1] ?? "");
  }
  for (const match of line.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    candidates.push(match[2] ?? "");
  }
  for (const candidate of candidates) {
    const normalized = normalizeEntityPath(candidate.replace(/^\.\//, "").replace(/\.md$/, ""));
    if (!normalized || normalized.endsWith("/INDEX") || normalized.toLowerCase().endsWith("/index")) continue;
    return candidate;
  }
  return "";
}

function extractPeriod(line: string): string | null {
  const normalized = line.normalize("NFKC");
  const fy = /\bFY\s?(\d{4})\b/i.exec(normalized);
  if (fy) return `FY${fy[1]}`;
  const fiscalYear = /(\d{4})\s*(?:年度|fiscal year)/i.exec(normalized);
  if (fiscalYear) return `FY${fiscalYear[1]}`;
  const asOf = /(?:as of|as-of|基準日|時点)[^\d]*(\d{4}[-/.年]\d{1,2}[-/.月]\d{1,2}日?)/i.exec(normalized);
  if (asOf) return normalizeDateValue(asOf[1]);
  return null;
}

function dedupeClaims(claims: Claim[]): Claim[] {
  const seen = new Set<string>();
  const result: Claim[] = [];
  for (const claim of claims) {
    const key = `${claim.claim_type}|${claim.metric_key}|${claim.path}|${claim.line}|${claim.normalized_value}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(claim);
  }
  return result;
}

function extractClaims(doc: SourceDoc): Claim[] {
  const claims: Claim[] = [];
  for (const { line, lineNumber } of stripFencesAndFrontmatter(doc.text)) {
    const normalized = normalizeLine(line);
    if (!normalized) continue;
    claims.push(...extractRegistrationClaims(doc, normalized, lineNumber));
    claims.push(...extractDateClaims(doc, normalized, lineNumber));
    claims.push(...extractNumericClaims(doc, normalized, lineNumber));
    claims.push(...extractStatusClaims(doc, normalized, lineNumber));
    claims.push(...extractRelationshipClaims(doc, line, lineNumber));
  }
  return claims;
}

function compareClaims(claims: Claim[]): ReportRow[] {
  const groups = new Map<string, Claim[]>();
  for (const claim of claims) {
    const key = `${claim.entity_key}\u0000${claim.metric_key}\u0000${claim.claim_type}`;
    const list = groups.get(key) ?? [];
    list.push(claim);
    groups.set(key, list);
  }

  const rows: ReportRow[] = [];
  for (const list of groups.values()) {
    const sorted = list.sort(compareClaim);
    for (let leftIndex = 0; leftIndex < sorted.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < sorted.length; rightIndex += 1) {
        const left = sorted[leftIndex];
        const right = sorted[rightIndex];
        if (left.path === right.path) continue;
        if (left.normalized_value === right.normalized_value) continue;
        if (left.period && right.period && left.period !== right.period) continue;
        rows.push(buildRow(left, right));
      }
    }
  }
  return rows.sort(compareRows);
}

function buildRow(left: Claim, right: Claim): ReportRow {
  const periodMissing = left.period !== right.period && (!left.period || !right.period);
  const reason = periodMissing ? "period_missing_on_one_side" : reasonFor(left.claim_type);
  const severity = severityFor(left.claim_type, reason);
  return {
    severity,
    claim_type: left.claim_type,
    entity_key: left.entity_key,
    metric_key: left.metric_key,
    path: left.path,
    line: left.line,
    left,
    right,
    reason,
    suggested_action: suggestedAction(left.claim_type, left.metric_key),
  };
}

function reasonFor(claimType: ClaimType): string {
  if (claimType === "status") return "same_entity_different_status";
  if (claimType === "relationship") return "same_entity_different_parent";
  if (claimType === "date") return "date_label_collision";
  return "same_metric_different_value";
}

function severityFor(claimType: ClaimType, reason: string): Severity {
  if (reason === "period_missing_on_one_side") return "needs_review";
  if (claimType === "numeric_metric" || claimType === "relationship") return "needs_review";
  return "conflict";
}

function suggestedAction(claimType: ClaimType, metricKey: string): string {
  if (claimType === "registration_number") {
    return `recheck the public registry for ${metricKey} and update the stale page`;
  }
  if (claimType === "date") {
    return "verify the labelled date against public source context and add period/event wording if both values are valid";
  }
  if (claimType === "status") {
    return "recheck current public status and mark historical status explicitly if needed";
  }
  if (claimType === "relationship") {
    return "verify the public ownership relationship and add period/as-of context before treating as a conflict";
  }
  return "review the labelled metric, unit and period before editing content";
}

function compareClaim(left: Claim, right: Claim): number {
  return (
    left.path.localeCompare(right.path) ||
    left.line - right.line ||
    left.metric_key.localeCompare(right.metric_key) ||
    left.normalized_value.localeCompare(right.normalized_value)
  );
}

function compareRows(left: ReportRow, right: ReportRow): number {
  return (
    left.entity_key.localeCompare(right.entity_key) ||
    left.metric_key.localeCompare(right.metric_key) ||
    left.claim_type.localeCompare(right.claim_type) ||
    left.left.path.localeCompare(right.left.path) ||
    left.left.line - right.left.line ||
    left.right.path.localeCompare(right.right.path) ||
    left.right.line - right.right.line
  );
}

function applyFilters(rows: ReportRow[], options: CliOptions): ReportRow[] {
  return rows.filter((row) => {
    if (options.entity && row.entity_key !== options.entity) return false;
    if (options.type && row.claim_type !== options.type) return false;
    return true;
  });
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  const docs = await loadSourceDocs(options.rootDir);
  const claims = docs.flatMap(extractClaims);
  const rows = applyFilters(compareClaims(claims), options);
  const conflictCount = rows.filter((row) => row.severity === "conflict").length;

  if (options.json) {
    console.log(JSON.stringify(rows, null, 2));
  } else if (options.failOnConflicts && conflictCount > 0) {
    console.error(`factual_consistency_conflicts=${conflictCount}`);
    for (const row of rows.filter((item) => item.severity === "conflict").slice(0, 40)) {
      console.error(
        `${row.reason}: ${row.entity_key} ${row.metric_key} ${row.left.path}:${row.left.line}=${row.left.value} ${row.right.path}:${row.right.line}=${row.right.value}`,
      );
    }
  }

  if (options.failOnConflicts && conflictCount > 0) return 1;
  return 0;
}

process.exitCode = await main();
