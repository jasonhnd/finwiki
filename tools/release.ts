#!/usr/bin/env bun

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import {
  countWordLikeTokens,
  iterMarkdownFiles,
  parseDomainMap,
} from "../lib/markdown_helpers";
import { type AuditResult, type Counts, type ReleaseArgs, countsView, formatInt } from "./release.helpers";

const ROOT = resolve(import.meta.dir, "..");
const README = join(ROOT, "README.md");
const INDEX_HTML = join(ROOT, "index.html");
const CHANGELOG = join(ROOT, "CHANGELOG.md");
const AI_INDEX = join(ROOT, "ai-index.json");

type ToolRun = {
  ok: boolean;
  stdout: string;
  stderr: string;
  exitCode: number | null;
  lastLine: string;
};

function parseReleaseArgs(argv: string[]): ReleaseArgs {
  const args: ReleaseArgs = {
    check: false,
    write: false,
    strict: false,
    skipAudit: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--check") args.check = true;
    else if (arg === "--write") args.write = true;
    else if (arg === "--strict") args.strict = true;
    else if (arg === "--skip-audit") args.skipAudit = true;
    else if (arg === "--changelog") {
      args.changelogTitle = argv[i + 1];
      i += 1;
    } else {
      throw new Error(`unknown arg: ${arg}`);
    }
  }
  if (args.check && args.write) {
    throw new Error("--check and --write are mutually exclusive");
  }
  return args;
}

function todayJst(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function nowJstDisplay(): string {
  return `${new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date())} JST`;
}

function readUtf8(path: string): string {
  return readFileSync(path, "utf8");
}

function writeUtf8Lf(path: string, text: string): void {
  writeFileSync(path, text.replace(/\r?\n/g, "\n"), "utf8");
}

function run(command: string[]): ToolRun {
  const proc = Bun.spawnSync({
    cmd: command,
    cwd: ROOT,
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env },
  });
  const stdout = proc.stdout.toString("utf8");
  const stderr = proc.stderr.toString("utf8");
  const merged = `${stdout}${stderr}`.trim();
  return {
    ok: proc.exitCode === 0,
    stdout,
    stderr,
    exitCode: proc.exitCode,
    lastLine: merged ? merged.split(/\r?\n/).at(-1) ?? "" : "",
  };
}

function grabInt(text: string, pattern: RegExp): number {
  const match = text.match(pattern);
  return match ? Number(match[1]) : 0;
}

function runWikiLinkAudit(writeReport: boolean): AuditResult {
  const args = ["bun", "tools/wiki_link_audit.ts", "--fail-on-issues", "--fail-on-canonical-drift"];
  if (writeReport) args.push("--report", "wiki-link-improvement-plan.md");
  const proc = run(args);
  const merged = `${proc.stdout}${proc.stderr}`;
  return {
    ok: proc.ok,
    entriesChecked: grabInt(merged, /entries_checked=(\d+)/),
    issues: grabInt(merged, /entries_with_issues=(\d+)/),
    canonicalDrift: grabInt(merged, /canonical_anchor_drift=(\d+)/),
    stdout: proc.stdout,
    stderr: proc.stderr,
    exitCode: proc.exitCode ?? 1,
  };
}

function readCountsFromAiIndex(): Counts {
  const data = JSON.parse(readUtf8(AI_INDEX)).counts;
  return {
    markdownFiles: Number(data.markdown_files),
    topicalDomains: Number(data.topical_domains),
    linkAuditedEntries: Number(data.link_audited_entries ?? 0),
    unresolvedIssues: Number(data.unresolved_link_issues ?? 0),
    nonspaceChars: Number(data.nonspace_utf8_chars),
    wordTokens: Number(data.word_like_tokens),
  };
}

async function computeCounts(entriesChecked: number, issues: number): Promise<Counts> {
  const mdPaths = await iterMarkdownFiles(ROOT.replaceAll("\\", "/"));
  const allText = await Promise.all(mdPaths.map((path) => Bun.file(path).text()));
  const domains = await parseDomainMap(ROOT.replaceAll("\\", "/"));
  const aiCounts = existsSync(AI_INDEX) ? readCountsFromAiIndex() : null;
  return {
    markdownFiles: mdPaths.length,
    topicalDomains: domains.length,
    linkAuditedEntries: entriesChecked || aiCounts?.linkAuditedEntries || 0,
    unresolvedIssues: issues || aiCounts?.unresolvedIssues || 0,
    nonspaceChars: allText.join("\n").replace(/\s+/g, "").length,
    wordTokens: countWordLikeTokens(allText.join("\n")),
  };
}

function syncReadmeText(text: string, counts: Counts, snapshotDate: string): string {
  const { charsMan, tokensMan, charsM, tokensM } = countsView(counts);
  const out: string[] = [];
  for (const line of text.split("\n")) {
    let next = line;
    next = next.replace(/(\| Markdown files \| )[\d,]+( \|)/, `$1${counts.markdownFiles}$2`);
    next = next.replace(/(\| Topical domains \| )[\d,]+( \|)/, `$1${counts.topicalDomains}$2`);
    next = next.replace(/(\| Link-audited entries \| )[\d,]+( \|)/, `$1${counts.linkAuditedEntries}$2`);
    next = next.replace(/(\| Unresolved link issues \| )[\d,]+( \|)/, `$1${counts.unresolvedIssues}$2`);
    if (next.startsWith("| Text volume |")) {
      if (next.includes("~")) {
        next = `| Text volume | ~${charsM}M chars | ~${formatInt(counts.nonspaceChars)} non-space UTF-8 characters across Markdown |`;
      } else if (next.includes("约")) {
        next = `| Text volume | 约${charsMan}万字 | 全库 Markdown 空白除外 UTF-8 字符数（约 ${formatInt(counts.nonspaceChars)}） |`;
      } else {
        next = `| Text volume | 約${charsMan}万字 | Markdown 全体の空白除外 UTF-8 文字数（約 ${formatInt(counts.nonspaceChars)}） |`;
      }
    }
    if (next.startsWith("| Word-like tokens |")) {
      if (next.includes("~")) {
        next = `| Word-like tokens | ~${tokensM}M | Approximate English / CJK mixed-corpus token count |`;
      } else if (next.includes("约")) {
        next = `| Word-like tokens | 约${tokensMan}万 | English / CJK mixed corpus 的近似 token count |`;
      } else {
        next = `| Word-like tokens | 約${tokensMan}万 | English / CJK mixed corpus の近似 token count |`;
      }
    }
    if (next.includes("current repository snapshot")) {
      next = next.replace(/\d{4}-\d{2}-\d{2}(?= JST)/, snapshotDate);
    }
    out.push(next);
  }
  return out.join("\n");
}

function replaceMetricStrong(html: string, label: string, value: string): string {
  return html.replace(
    new RegExp(`(<span>${label}</span>\\s*<strong>)[^<]+(</strong>)`, "g"),
    `$1${value}$2`,
  );
}

function replaceLanguageMetricStrong(html: string, languageClass: string, label: string, value: string): string {
  return html.replace(
    new RegExp(`(<article class="card metric-card ${languageClass}">\\s*<span>${label}</span>\\s*<strong>)[^<]+(</strong>)`, "g"),
    `$1${value}$2`,
  );
}

function syncIndexHtmlText(text: string, counts: Counts, snapshotDate: string): string {
  const { charsMan, charsM } = countsView(counts);
  let next = text
    .replace(
      /\d[\d,]* Markdown files, \d[\d,]* link-audited entries, \d+ topical domains, and about [\d.]+ million non-space characters/g,
      `${counts.markdownFiles} Markdown files, ${counts.linkAuditedEntries} link-audited entries, ${counts.topicalDomains} topical domains, and about ${charsM} million non-space characters`,
    )
    .replace(
      /[\d,]+ files \/ [\d,]+ link-audited entries \/ \d+ domains \/ ~[\d.]+M non-space chars/g,
      `${formatInt(counts.markdownFiles)} files / ${formatInt(counts.linkAuditedEntries)} link-audited entries / ${counts.topicalDomains} domains / ~${charsM}M non-space chars`,
    )
    .replace(
      /<strong>\d[\d,]* files \/ \d[\d,]* link-audited entries \/ \d+ domains \/ ~[\d.]+M non-space chars<\/strong>/g,
      `<strong>${formatInt(counts.markdownFiles)} files / ${formatInt(counts.linkAuditedEntries)} link-audited entries / ${counts.topicalDomains} domains / ~${charsM}M non-space chars</strong>`,
    )
    .replace(/(\b)\d[\d,]*(?= files \/)/g, `${formatInt(counts.markdownFiles)}`)
    .replace(/(\b)\d[\d,]*(?= link-audited entries)/g, `${formatInt(counts.linkAuditedEntries)}`)
    .replace(/(\b)\d+(?= domains)/g, `${counts.topicalDomains}`)
    // Japanese og/meta count phrasing (og:description, og:image:alt, twitter:*).
    .replace(/[\d,]+(?=\s*ファイル)/g, `${formatInt(counts.markdownFiles)}`)
    .replace(/[\d,]+(?=\s*リンク監査済エントリー)/g, `${formatInt(counts.linkAuditedEntries)}`)
    .replace(/[\d,]+(?=\s*エントリー)/g, `${formatInt(counts.linkAuditedEntries)}`)
    .replace(/[\d,]+(?=\s*領域)/g, `${counts.topicalDomains}`)
    .replace(/約[\d,]+\s*万字/g, `約${charsMan}万字`)
    .replace(/约[\d,]+\s*万字/g, `约${charsMan}万字`)
    // Entry counters that are not "link-audited entries": JP 件 / EN bare entries / ZH 个条目.
    .replace(/[\d,]+(?=\s*件のエントリー)/g, `${formatInt(counts.linkAuditedEntries)}`)
    .replace(/[\d,]+(?=件\s*\/)/g, `${formatInt(counts.linkAuditedEntries)}`)
    .replace(/[\d,]+(?=\s*entries)/g, `${formatInt(counts.linkAuditedEntries)}`)
    .replace(/[\d,]+(?=\s*个条目)/g, `${formatInt(counts.linkAuditedEntries)}`)
    // ZH domain counter (simplified): 个领域.
    .replace(/[\d,]+(?=\s*个领域)/g, `${counts.topicalDomains}`);
  next = replaceMetricStrong(next, "Markdown files", String(counts.markdownFiles));
  next = replaceMetricStrong(next, "Topical domains", String(counts.topicalDomains));
  next = replaceMetricStrong(next, "Audited entries", String(counts.linkAuditedEntries));
  next = replaceLanguageMetricStrong(next, "jp", "Text volume", `約${charsMan}万字`);
  next = replaceLanguageMetricStrong(next, "en", "Text volume", `~${charsM}M chars`);
  next = replaceLanguageMetricStrong(next, "zh", "Text volume", `约${charsMan}万字`);
  next = next.replace(/\d{4}-\d{2}-\d{2}(?= JST[^<]*current repository snapshot)/g, snapshotDate);
  next = next.replace(/~[\d.]+M non-space chars/g, `~${charsM}M non-space chars`);
  next = next.replace(/about [\d.]+ million non-space characters/g, `about ${charsM} million non-space characters`);
  return next;
}

function diffLines(oldText: string, newText: string, label: string): string[] {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  const out: string[] = [];
  const limit = Math.max(oldLines.length, newLines.length);
  for (let i = 0; i < limit; i += 1) {
    if ((oldLines[i] ?? "") !== (newLines[i] ?? "")) {
      out.push(`  [${label}:${i + 1}] - ${(oldLines[i] ?? "").trim().slice(0, 160)}`);
      out.push(`  [${label}:${i + 1}] + ${(newLines[i] ?? "").trim().slice(0, 160)}`);
    }
  }
  return out;
}

function scaffoldChangelog(text: string, title: string, snapshotDate: string, nowDisplay: string): string | null {
  const block = [
    `## ${snapshotDate} - ${title}`,
    "",
    "### Japanese",
    "",
    `- **${nowDisplay} / Context:** <fill public context, scope, files, steps, validation, follow-up.>`,
    "",
    "### English",
    "",
    `- **${nowDisplay} / Context:** <fill public context, scope, files, steps, validation, follow-up.>`,
    "",
    "### Chinese",
    "",
    `- **${nowDisplay} / Context:** <fill public context, scope, files, steps, validation, follow-up.>`,
    "",
  ].join("\n");
  const match = text.match(/^## \d{4}-\d{2}-\d{2}/m);
  if (!match || match.index == null) return null;
  return text.slice(0, match.index) + block + text.slice(match.index);
}

function verifyJsonFiles(): string[] {
  const problems: string[] = [];
  const excluded = new Set([".git", ".cache", "site", "app", ".vercel", "_site", "_vercel_public"]);
  const stack = [ROOT];
  while (stack.length > 0) {
    const dir = stack.pop()!;
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      const rel = relative(ROOT, full).split(sep).join("/");
      const parts = rel.split("/");
      if (parts.some((part) => excluded.has(part))) continue;
      const st = statSync(full);
      if (st.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (!name.endsWith(".json")) continue;
      try {
        JSON.parse(readUtf8(full));
      } catch (error) {
        problems.push(`invalid JSON: ${rel} (${String(error)})`);
      }
    }
  }
  return problems;
}

function verifyLfEndings(): string[] {
  const problems: string[] = [];
  const proc = run(["git", "ls-files", "--eol"]);
  for (const line of proc.stdout.split(/\r?\n/)) {
    if (line.includes("w/crlf")) {
      problems.push(`CRLF in working tree: ${line.split("\t").at(-1) ?? line}`);
    }
  }
  return problems;
}

function verifyDuplicateHtmlIds(): string[] {
  const distDir = join(ROOT, "site", "dist");
  if (!existsSync(distDir)) return [];
  const proc = run(["bun", "tools/check_duplicate_html_ids.ts", "site/dist"]);
  return proc.ok ? [] : [`duplicate HTML ids: ${`${proc.stdout}${proc.stderr}`.trim().slice(0, 800)}`];
}

function printCounts(counts: Counts): void {
  const { charsMan, charsM, tokensMan, tokensM } = countsView(counts);
  console.log(
    `[2] canonical counts: md=${counts.markdownFiles} domains=${counts.topicalDomains} entries=${counts.linkAuditedEntries} issues=${counts.unresolvedIssues} chars=${formatInt(counts.nonspaceChars)} (~${charsMan}man, ${charsM}M) tokens=${formatInt(counts.wordTokens)} (~${tokensMan}man, ${tokensM}M)`,
  );
}

function runRequiredTool(command: string[], label: string): void {
  const proc = run(command);
  console.log(`  [${proc.ok ? "ok" : "FAILED"}] ${label}: ${proc.lastLine}`.slice(0, 220));
  if (!proc.ok) {
    throw new Error(`${label} failed:\n${proc.stderr || proc.stdout}`);
  }
}

async function main(): Promise<number> {
  const args = parseReleaseArgs(process.argv.slice(2));
  const mode = args.write ? "WRITE" : "CHECK";
  console.log(`=== FinWiki release (${mode}) ===`);

  let entries = 0;
  let issues = 0;
  if (args.skipAudit) {
    console.log("[1] link audit: skipped");
  } else {
    const audit = runWikiLinkAudit(args.write);
    entries = audit.entriesChecked;
    issues = audit.issues;
    console.log(`[1] link audit: entries=${entries} issues=${issues} canonical_drift=${audit.canonicalDrift} -> ${audit.ok ? "PASS" : "FAIL"}`);
    if (!audit.ok) {
      if (issues > 0) {
        console.log("    broken links present; fix before releasing. See wiki-link-improvement-plan.md");
      }
      if (audit.canonicalDrift > 0) {
        console.log(`    canonical_anchor drift=${audit.canonicalDrift}: a declared canonical_anchor does not resolve or is not core-body cross-linked. See wiki-link-improvement-plan.md.`);
      }
      return 2;
    }
  }

  let counts: Counts;
  if (args.write) {
    console.log("[2] regenerating discovery surface + footer timestamp");
    runRequiredTool(["bun", "tools/generate_ai_discovery.ts"], "generate_ai_discovery.ts");
    runRequiredTool(["bun", "tools/update_footer_timestamp.ts"], "update_footer_timestamp.ts");
    counts = readCountsFromAiIndex();
  } else {
    counts = await computeCounts(entries, issues);
  }
  printCounts(counts);

  const snapshotDate = todayJst();
  const readmeOld = readUtf8(README);
  const indexOld = readUtf8(INDEX_HTML);
  const readmeNew = syncReadmeText(readmeOld, counts, snapshotDate);
  const indexNew = syncIndexHtmlText(indexOld, counts, snapshotDate);
  const drift = [...diffLines(readmeOld, readmeNew, "README"), ...diffLines(indexOld, indexNew, "index.html")];

  if (args.write) {
    if (readmeOld !== readmeNew) writeUtf8Lf(README, readmeNew);
    if (indexOld !== indexNew) writeUtf8Lf(INDEX_HTML, indexNew);
    console.log(`[3] counts synced: ${Math.floor(drift.length / 2)} line(s) updated across README + index.html`);
  } else if (drift.length > 0) {
    console.log(`[3] count DRIFT detected (${Math.floor(drift.length / 2)} line(s)) - run --write to sync:`);
    console.log(drift.slice(0, 40).join("\n"));
    if (drift.length > 40) console.log(`  ... ${drift.length - 40} more diff line(s)`);
  } else {
    console.log("[3] counts: in sync");
  }

  if (args.write && args.changelogTitle) {
    const original = readUtf8(CHANGELOG);
    const next = scaffoldChangelog(original, args.changelogTitle, snapshotDate, nowJstDisplay());
    if (next !== null) writeUtf8Lf(CHANGELOG, next);
    console.log(`[4] CHANGELOG scaffold: ${next !== null ? "inserted" : "SKIPPED (no dated record found)"}`);
  }

  const problems = [...verifyJsonFiles(), ...verifyLfEndings(), ...verifyDuplicateHtmlIds()];
  console.log(`[5] verify: ${problems.length === 0 ? "OK (JSON valid, LF endings, duplicate IDs if dist exists)" : `${problems.length} problem(s)`}`);
  for (const problem of problems.slice(0, 20)) console.log(`    - ${problem}`);

  console.log("\n--- remaining manual steps ---");
  if (args.write) {
    console.log("  1. Review `git diff` for generated surfaces and docs.");
    console.log("  2. Write the real CHANGELOG / release note narrative.");
    console.log("  3. Run `bun tools/release.ts --check --strict` and the site build.");
  } else {
    console.log("  Run `bun tools/release.ts --write` to regenerate + sync, then commit/push.");
  }

  if (problems.length > 0) return 2;
  if (!args.write && args.strict && drift.length > 0) return 2;
  return 0;
}

main()
  .then((code) => process.exit(code))
  .catch((error) => {
    console.error(error instanceof Error ? error.stack : error);
    process.exit(2);
  });
