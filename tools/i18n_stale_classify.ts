#!/usr/bin/env bun

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import path from "node:path";
import { mask } from "../site/scripts/protect.mjs";

/**
 * i18n Stale Classifier (read-only) — Issue #21 (Batch C) planning aid.
 *
 * For each STALE mirror (frontmatter source_hash != current source hash), find the
 * source blob in git history whose stripped-frontmatter body hashes to the mirror's
 * source_hash, then compare mask(oldBody).masked vs mask(currentBody).masked:
 *   - equal  -> link-only  : the change since translation is confined to masked
 *               tokens (wikilink targets / numbers / dates), so the translated PROSE
 *               is still valid -> cheap re-sync (refresh links + source_hash, no LLM).
 *   - differ -> prose-changed: translatable prose changed -> needs retranslation.
 *   - old blob not found in recent history -> unknown (treat as retranslate, safest).
 *
 * Writes nothing except an optional --json manifest. Never mutates mirrors/sources.
 * Flags: --lang ja|en|all (default all), --limit N (0=all), --json <path>.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const I18N = path.join(ROOT, "site", "src", "content", "i18n");
const LANGS = ["ja", "en"] as const;
const GIT_DEPTH = "120";

function flag(name: string, def: string): string {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const ONLY_LANG = flag("lang", "all");
const LIMIT = Number(flag("limit", "0")) || Infinity;
const JSON_OUT = flag("json", "");

const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_RED = "\x1b[31m";
const ANSI_DIM = "\x1b[2m";
const ANSI_RESET = "\x1b[0m";

const stripFm = (t: string): string => {
  const m = t.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return m ? t.slice(m[0].length) : t;
};
const sha16 = (s: string): string => createHash("sha256").update(s).digest("hex").slice(0, 16);
const maskedOf = (body: string): string => mask(body).masked as string;
const toPosix = (p: string): string => p.split(path.sep).join("/");

function parseFrontmatter(text: string): Record<string, string> {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const out: Record<string, string> = {};
  if (!m) return out;
  for (const line of m[1].split(/\r?\n/)) {
    const mm = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (mm) out[mm[1]] = mm[2].trim();
  }
  return out;
}

const currentCache = new Map<string, { hash: string; masked: string } | null>();
function currentSource(sourceRel: string): { hash: string; masked: string } | null {
  if (currentCache.has(sourceRel)) return currentCache.get(sourceRel)!;
  const abs = path.join(ROOT, sourceRel);
  let result: { hash: string; masked: string } | null = null;
  if (existsSync(abs)) {
    const body = stripFm(readFileSync(abs, "utf8"));
    result = { hash: sha16(body), masked: maskedOf(body) };
  }
  currentCache.set(sourceRel, result);
  return result;
}

const matchCache = new Map<string, string | null>();
function oldMaskedForHash(sourceRel: string, wantHash: string): string | null {
  const key = `${sourceRel}@${wantHash}`;
  if (matchCache.has(key)) return matchCache.get(key)!;
  // --follow + --name-only so JapanFG-split-migrated sources (git mv'd into new
  // domains) are tracked across renames; git show must use the path AS OF each commit.
  let raw = "";
  try {
    raw = execFileSync("git", ["log", "--follow", "--format=@@@%H", "--name-only", "-n", GIT_DEPTH, "--", sourceRel], {
      cwd: ROOT,
      encoding: "utf8",
    });
  } catch {
    /* file may be new / not in history */
  }
  const pairs: Array<{ commit: string; p: string }> = [];
  let cur: string | null = null;
  for (const line of raw.split("\n")) {
    if (line.startsWith("@@@")) cur = line.slice(3);
    else if (cur && line.trim()) {
      pairs.push({ commit: cur, p: line.trim() });
      cur = null;
    }
  }
  let result: string | null = null;
  for (const { commit, p } of pairs) {
    let blob: string;
    try {
      blob = execFileSync("git", ["show", `${commit}:${p}`], { cwd: ROOT, encoding: "utf8" });
    } catch {
      continue;
    }
    const body = stripFm(blob);
    if (sha16(body) === wantHash) {
      result = maskedOf(body);
      break;
    }
  }
  matchCache.set(key, result);
  return result;
}

function listMirrors(lang: string): string[] {
  const dir = path.join(I18N, lang);
  const out: string[] = [];
  if (!existsSync(dir)) return out;
  const walk = (cur: string): void => {
    for (const name of readdirSync(cur)) {
      const full = path.join(cur, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (name.endsWith(".md")) out.push(full);
    }
  };
  walk(dir);
  return out;
}

type Klass = "current" | "link_only" | "prose_changed" | "unknown" | "orphaned";

interface LangResult {
  lang: string;
  counts: Record<Klass, number>;
  samples: { link_only: string[]; prose_changed: string[]; unknown: string[] };
}

const manifest: Array<{ mirror: string; lang: string; source: string; klass: Klass }> = [];

function classifyLang(lang: string): LangResult {
  const counts: Record<Klass, number> = { current: 0, link_only: 0, prose_changed: 0, unknown: 0, orphaned: 0 };
  const samples = { link_only: [] as string[], prose_changed: [] as string[], unknown: [] as string[] };
  let processed = 0;
  for (const abs of listMirrors(lang)) {
    if (processed >= LIMIT) break;
    const fm = parseFrontmatter(readFileSync(abs, "utf8"));
    const sourceRel = `${(fm.source || "").trim()}.md`;
    const wantHash = (fm.source_hash || "").trim();
    const mirrorRel = toPosix(path.relative(ROOT, abs));
    const cur = currentSource(sourceRel);
    if (!cur) {
      counts.orphaned += 1;
      continue;
    }
    if (cur.hash === wantHash) {
      counts.current += 1;
      continue;
    }
    processed += 1;
    const oldMasked = oldMaskedForHash(sourceRel, wantHash);
    const klass: Klass = oldMasked === null ? "unknown" : oldMasked === cur.masked ? "link_only" : "prose_changed";
    counts[klass] += 1;
    if (samples[klass] && samples[klass].length < 6) samples[klass].push(fm.source || mirrorRel);
    manifest.push({ mirror: mirrorRel, lang, source: fm.source || "", klass });
  }
  return { lang, counts, samples };
}

function main(): void {
  const langs = ONLY_LANG === "all" ? [...LANGS] : ONLY_LANG.split(",").map((s) => s.trim());
  console.log(`${ANSI_YELLOW}🔍 Classifying stale i18n mirrors (link-only vs prose-changed)...${ANSI_RESET}`);
  if (LIMIT !== Infinity) console.log(`${ANSI_DIM}sample mode: up to ${LIMIT} stale mirror(s) per locale${ANSI_RESET}`);
  const results = langs.map((lang) => classifyLang(lang));
  console.log("");
  for (const r of results) {
    const c = r.counts;
    console.log(
      `${ANSI_GREEN}[${r.lang}]${ANSI_RESET} current=${c.current}  ${ANSI_GREEN}link_only=${c.link_only}${ANSI_RESET}  ${ANSI_RED}prose_changed=${c.prose_changed}${ANSI_RESET}  unknown=${c.unknown}  orphaned=${c.orphaned}`,
    );
    if (r.samples.link_only.length) console.log(`    ${ANSI_DIM}link_only e.g.: ${r.samples.link_only.join(", ")}${ANSI_RESET}`);
    if (r.samples.prose_changed.length) console.log(`    ${ANSI_DIM}prose_changed e.g.: ${r.samples.prose_changed.join(", ")}${ANSI_RESET}`);
    if (r.samples.unknown.length) console.log(`    ${ANSI_DIM}unknown e.g.: ${r.samples.unknown.join(", ")}${ANSI_RESET}`);
  }
  if (JSON_OUT) {
    mkdirSync(path.dirname(path.join(ROOT, JSON_OUT)), { recursive: true });
    writeFileSync(path.join(ROOT, JSON_OUT), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    console.log(`\n${ANSI_DIM}manifest: ${JSON_OUT} (${manifest.length} stale mirrors)${ANSI_RESET}`);
  }
  console.log(`\n${ANSI_DIM}Read-only. link_only -> cheap re-sync; prose_changed/unknown -> retranslate.${ANSI_RESET}`);
}

main();
