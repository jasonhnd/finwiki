#!/usr/bin/env bun

import path, { posix as pathPosix } from "node:path";
import {
  extractFrontmatter,
  iterMarkdownFiles,
  normalizeEntityPath,
  readTextUtf8,
} from "../lib/markdown_helpers";

type ClaimType = "registration_number" | "date" | "numeric_metric" | "status" | "relationship";
type Severity = "conflict" | "needs_review" | "informational";

type Args = {
  json: boolean;
  failOnConflicts: boolean;
  entity: string | null;
  type: ClaimType | null;
  withSeededConflictFixture: boolean;
};

type Claim = {
  claim_type: ClaimType;
  entity_key: string;
  metric_key: string;
  value: string;
  normalized_value: string;
  period: string | null;
  label: string;
  source_path: string;
  line: number;
  evidence: "body" | "seeded_fixture";
};

type Finding = {
  severity: Severity;
  claim_type: ClaimType;
  entity_key: string;
  metric_key: string;
  left: Claim;
  right: Claim;
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

const MONTHS = new Map<string, string>([
  ["january", "01"],
  ["february", "02"],
  ["march", "03"],
  ["april", "04"],
  ["may", "05"],
  ["june", "06"],
  ["july", "07"],
  ["august", "08"],
  ["september", "09"],
  ["october", "10"],
  ["november", "11"],
  ["december", "12"],
]);

function parseArgs(argv: string[]): Args {
  const args: Args = {
    json: false,
    failOnConflicts: false,
    entity: null,
    type: null,
    withSeededConflictFixture: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--fail-on-conflicts") {
      args.failOnConflicts = true;
      continue;
    }
    if (arg === "--with-seeded-conflict-fixture") {
      args.withSeededConflictFixture = true;
      continue;
    }
    if (arg === "--entity") {
      args.entity = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (arg === "--type") {
      const value = argv[index + 1] as ClaimType | undefined;
      if (!value || !["registration_number", "date", "numeric_metric", "status", "relationship"].includes(value)) {
        throw new Error(`unknown --type value: ${String(value)}`);
      }
      args.type = value;
      index += 1;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      console.log("Usage: bun tools/factual_consistency_audit.ts [--json] [--fail-on-conflicts] [--entity <slug>] [--type <kind>]");
      process.exit(0);
    }
    throw new Error(`unknown arg: ${arg}`);
  }
  return args;
}

function shouldScan(relPath: string): boolean {
  if (CONTROL_DOCS.has(relPath)) return false;
  if (!relPath.includes("/")) return false;
  if (relPath.endsWith("/INDEX.md")) return false;
  if (relPath.startsWith("releases/")) return false;
  if (relPath.startsWith("tools/")) return false;
  if (relPath.startsWith("api/")) return false;
  if (relPath.includes("/i18n/")) return false;
  if (relPath.split("/").some((part) => part.startsWith("."))) return false;
  return true;
}

function bodyLines(text: string): Array<{ line: number; text: string }> {
  const lines = text.split(/\r?\n/);
  let start = 0;
  if (lines[0]?.trim() === "---") {
    for (let index = 1; index < lines.length; index += 1) {
      if (lines[index]?.trim() === "---") {
        start = index + 1;
        break;
      }
    }
  }
  return lines.slice(start).map((line, index) => ({ line: start + index + 1, text: line }));
}

function normalizeLine(line: string): string {
  return line
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (_match, target: string, label: string | undefined) => label ?? target)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\^\[[^\]]+\]/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function canonicalEntityKey(relPath: string, text: string): string {
  const frontmatter = extractFrontmatter(text);
  const anchor = typeof frontmatter.canonical_anchor === "string" ? normalizeEntityPath(frontmatter.canonical_anchor) : "";
  return anchor || normalizeEntityPath(relPath.replace(/\.md$/, ""));
}

function metricForRegistration(line: string): string | null {
  const lower = line.toLowerCase();
  if (/funds?\s+transfer|資金移動|雉・≡遘/.test(lower)) return "funds_transfer_registration_number";
  if (/prepaid|前払|蜑肴/.test(lower)) return "prepaid_registration_number";
  if (/financial instruments|fibo|金融商品取引|金商|髢｢譚ｱ雋｡/.test(lower)) return "fibo_registration_number";
  if (/credit purchase|installment|割賦|蛹・峡/.test(lower)) return "credit_purchase_registration_number";
  if (/money lending|貸金|kashikin/.test(lower)) return "money_lending_registration_number";
  if (/registration|registered|licen[cs]e|登録|免許|許可|no\.|number/.test(lower)) return "registration_number";
  return null;
}

function extractRegistrationValue(line: string): string | null {
  const noMatch = /(?:no\.?|number|registration|registered|登録番号|第)\s*[:：#-]?\s*([A-Z]?\d[\dA-Z-]{2,})/i.exec(line);
  if (noMatch) return noMatch[1];
  const plainMatch = /\b[A-Z]?\d[\d-]{2,}[A-Z]?\b/.exec(line);
  return plainMatch?.[0] ?? null;
}

function metricForDate(line: string): string | null {
  const lower = line.toLowerCase();
  if (/establish|incorporat|founded|設立/.test(lower)) return "established_date";
  if (/merger effective|effective date|合併|統合/.test(lower)) return "merger_effective_date";
  if (/announc|発表|公表/.test(lower)) return "announcement_date";
  if (/licen[cs]e|registration|registered|登録|免許|許可/.test(lower)) return "registration_date";
  if (/listed|listing|上場/.test(lower)) return "listing_date";
  if (/delisted|delisting|上場廃止/.test(lower)) return "delisting_date";
  if (/revoked|revocation|取消|廃止/.test(lower)) return "revocation_date";
  return null;
}

function normalizeDate(line: string): string | null {
  const iso = /\b((?:19|20)\d{2})[-/](\d{1,2})[-/](\d{1,2})\b/.exec(line);
  if (iso) return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;

  const jp = /((?:19|20)\d{2})年\s*(\d{1,2})月\s*(\d{1,2})日/.exec(line);
  if (jp) return `${jp[1]}-${jp[2].padStart(2, "0")}-${jp[3].padStart(2, "0")}`;

  const month = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*((?:19|20)\d{2})\b/i.exec(line);
  if (month) return `${month[3]}-${MONTHS.get(month[1].toLowerCase())}-${month[2].padStart(2, "0")}`;

  return null;
}

function metricForNumeric(line: string): string | null {
  const lower = line.toLowerCase();
  if (/\baum\b|assets under management|残高|運用資産/.test(lower)) return "aum";
  if (/capital|資本金/.test(lower)) return "capital";
  if (/market share|シェア/.test(lower)) return "market_share";
  if (/branch|branches|店舗|拠点/.test(lower)) return "branch_count";
  if (/store|stores|店舗/.test(lower)) return "store_count";
  if (/member|members|会員/.test(lower)) return "member_count";
  if (/ownership|stake|shareholding|owned|出資|持分/.test(lower)) return "ownership_percentage";
  if (/\bltv\b/.test(lower)) return "ltv";
  return null;
}

function extractNumericValue(line: string): string | null {
  const match = /([+-]?\d[\d,.]*\s*(?:%|percent|JPY|yen|million|billion|trillion|bn|tn|兆円|億円|万人|人|branches|stores|members))/i.exec(line);
  return match?.[1] ?? null;
}

function extractPeriod(line: string): string | null {
  const fy = /\bFY\s?((?:19|20)\d{2})\b/i.exec(line);
  if (fy) return `FY${fy[1]}`;
  const asOf = /as of\s+((?:19|20)\d{2}[-/]\d{1,2}[-/]\d{1,2})/i.exec(line);
  if (asOf) return normalizeDate(asOf[1]);
  const jpAsOf = /((?:19|20)\d{2})年\s*(\d{1,2})月\s*(\d{1,2})日(?:時点|現在)/.exec(line);
  if (jpAsOf) return `${jpAsOf[1]}-${jpAsOf[2].padStart(2, "0")}-${jpAsOf[3].padStart(2, "0")}`;
  return null;
}

function extractStatusValue(line: string): string | null {
  const lower = line.toLowerCase();
  if (/revoked|取消|抹消/.test(lower)) return "revoked";
  if (/pending|申請中|未承認/.test(lower)) return "pending";
  if (/delisted|上場廃止/.test(lower)) return "delisted";
  if (/completed|完了|成立/.test(lower)) return "completed";
  if (/cancelled|canceled|中止|キャンセル/.test(lower)) return "cancelled";
  if (/\bactive\b|有効|登録済/.test(lower)) return "active";
  return null;
}

function extractParentValue(line: string): string | null {
  const cleaned = normalizeLine(line);
  const match =
    /(?:subsidiary of|parent(?: company)?[:：]|shareholder[:：]|owned by|sponsor[:：])\s*([^.;。|]+)/i.exec(cleaned);
  return match?.[1]?.trim() ?? null;
}

function normalizeValue(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/[,\u3000]/g, "")
    .trim()
    .toLowerCase();
}

function claimsFromLine(relPath: string, entityKey: string, lineNo: number, rawLine: string): Claim[] {
  const line = normalizeLine(rawLine);
  if (!line || line.startsWith("#")) return [];
  const claims: Claim[] = [];

  const registrationMetric = metricForRegistration(line);
  if (registrationMetric) {
    const value = extractRegistrationValue(line);
    if (value) {
      claims.push({
        claim_type: "registration_number",
        entity_key: entityKey,
        metric_key: registrationMetric,
        value,
        normalized_value: normalizeValue(value),
        period: null,
        label: registrationMetric,
        source_path: relPath,
        line: lineNo,
        evidence: "body",
      });
    }
  }

  const dateMetric = metricForDate(line);
  if (dateMetric) {
    const value = normalizeDate(line);
    if (value) {
      claims.push({
        claim_type: "date",
        entity_key: entityKey,
        metric_key: dateMetric,
        value,
        normalized_value: value,
        period: null,
        label: dateMetric,
        source_path: relPath,
        line: lineNo,
        evidence: "body",
      });
    }
  }

  const numericMetric = metricForNumeric(line);
  if (numericMetric) {
    const value = extractNumericValue(line);
    if (value) {
      claims.push({
        claim_type: "numeric_metric",
        entity_key: entityKey,
        metric_key: numericMetric,
        value,
        normalized_value: normalizeValue(value),
        period: extractPeriod(line),
        label: numericMetric,
        source_path: relPath,
        line: lineNo,
        evidence: "body",
      });
    }
  }

  const status = extractStatusValue(line);
  if (status && /status|registered|registration|listed|active|revoked|pending|delisted|登録|上場|取消|有効/.test(line.toLowerCase())) {
    claims.push({
      claim_type: "status",
      entity_key: entityKey,
      metric_key: "entity_status",
      value: status,
      normalized_value: status,
      period: extractPeriod(line),
      label: "entity_status",
      source_path: relPath,
      line: lineNo,
      evidence: "body",
    });
  }

  const parent = extractParentValue(line);
  if (parent) {
    claims.push({
      claim_type: "relationship",
      entity_key: entityKey,
      metric_key: "parent_entity",
      value: parent,
      normalized_value: normalizeValue(parent),
      period: extractPeriod(line),
      label: "parent_entity",
      source_path: relPath,
      line: lineNo,
      evidence: "body",
    });
  }

  return claims;
}

async function loadClaims(): Promise<Claim[]> {
  const claims: Claim[] = [];
  for (const filePath of await iterMarkdownFiles(ROOT)) {
    const normalizedPath = filePath.replaceAll("\\", "/");
    const relPath = pathPosix.relative(ROOT, normalizedPath);
    if (!shouldScan(relPath)) continue;
    const text = await readTextUtf8(normalizedPath);
    const entityKey = canonicalEntityKey(relPath, text);
    for (const line of bodyLines(text)) {
      claims.push(...claimsFromLine(relPath, entityKey, line.line, line.text));
    }
  }
  return claims;
}

function seededConflictClaims(): Claim[] {
  const base = {
    claim_type: "registration_number" as const,
    entity_key: "fixtures/paypay",
    metric_key: "funds_transfer_registration_number",
    period: null,
    label: "funds_transfer_registration_number",
    evidence: "seeded_fixture" as const,
  };
  return [
    {
      ...base,
      value: "00068",
      normalized_value: "00068",
      source_path: "tools/fixtures/factual-left.md",
      line: 10,
    },
    {
      ...base,
      value: "00086",
      normalized_value: "00086",
      source_path: "tools/fixtures/factual-right.md",
      line: 12,
    },
  ];
}

function compareClaims(claims: readonly Claim[], args: Args): Finding[] {
  const filtered = claims.filter((claim) => {
    if (args.entity && claim.entity_key !== normalizeEntityPath(args.entity)) return false;
    if (args.type && claim.claim_type !== args.type) return false;
    return true;
  });

  const byMetric = new Map<string, Claim[]>();
  for (const claim of filtered) {
    const key = `${claim.entity_key}\u0000${claim.metric_key}`;
    const bucket = byMetric.get(key) ?? [];
    bucket.push(claim);
    byMetric.set(key, bucket);
  }

  const findings: Finding[] = [];
  const seen = new Set<string>();
  for (const bucket of byMetric.values()) {
    bucket.sort((a, b) => `${a.source_path}:${a.line}`.localeCompare(`${b.source_path}:${b.line}`));
    for (let leftIndex = 0; leftIndex < bucket.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < bucket.length; rightIndex += 1) {
        const left = bucket[leftIndex];
        const right = bucket[rightIndex];
        if (left.source_path === right.source_path) continue;
        if (left.normalized_value === right.normalized_value) continue;
        const periodsComparable = !left.period || !right.period || left.period === right.period;
        if (!periodsComparable) continue;
        const key = `${left.entity_key}\u0000${left.metric_key}\u0000${left.source_path}:${left.line}\u0000${right.source_path}:${right.line}`;
        if (seen.has(key)) continue;
        seen.add(key);
        findings.push({
          severity: "conflict",
          claim_type: left.claim_type,
          entity_key: left.entity_key,
          metric_key: left.metric_key,
          left,
          right,
          reason: left.claim_type === "status" ? "same_entity_different_status" : "same_metric_different_value",
          suggested_action: "Recheck the cited public source route and update or label the stale/historical page.",
        });
      }
    }
  }

  findings.sort((a, b) =>
    `${a.entity_key}:${a.metric_key}:${a.left.source_path}:${a.left.line}:${a.right.source_path}:${a.right.line}`.localeCompare(
      `${b.entity_key}:${b.metric_key}:${b.left.source_path}:${b.left.line}:${b.right.source_path}:${b.right.line}`,
    ),
  );
  return findings;
}

async function main(): Promise<number> {
  const args = parseArgs(Bun.argv.slice(2));
  const claims = await loadClaims();
  if (args.withSeededConflictFixture) claims.push(...seededConflictClaims());
  const findings = compareClaims(claims, args);

  if (args.json) {
    console.log(JSON.stringify(findings, null, 2));
  }

  if (args.failOnConflicts && findings.some((finding) => finding.severity === "conflict")) {
    return 1;
  }
  return 0;
}

process.exitCode = await main();
