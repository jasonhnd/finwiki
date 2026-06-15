#!/usr/bin/env bun

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { mask } from "../site/scripts/protect.mjs";

/**
 * i18n link-only target remap (deterministic, no LLM) — Issue #21 (Batch C-2a).
 *
 * Handles the `link_only` mirrors that C-1 (i18n_resync_linkonly.ts) left stale
 * because their masked-token multiset still differs from the current source: they
 * still hold OLD wikilink targets (e.g. [[JapanFG/<entity>]] from before the JapanFG
 * domain split), even though the translatable PROSE is unchanged.
 *
 * Strategy (no git archaeology — compare the mirror against the CURRENT source):
 *   1. staleOnly = mirror tokens not in current source;  freshOnly = current tokens
 *      not in the mirror  (both as multisets).
 *   2. Require every leftover token on both sides to be a wikilink and the counts to
 *      match; otherwise a NUMBER/date/label changed -> defer to C-2b.
 *   3. Pair each stale wikilink to a fresh one by (basename, label) — the split
 *      migration signature (only the domain/path prefix moved). Ambiguous (0 or >1
 *      candidate) -> defer to C-2b.
 *   4. Rewrite just those wikilink tokens in the body (literal replace; fresh tokens
 *      never equal any stale token, so replacements cannot chain).
 *   5. PROVE it: write + bump source_hash IFF mask(newBody).masks multiset === the
 *      current source's. This post-state check is the safety net the earlier
 *      diff-based re-sync lacked; any mirror that fails is left untouched for C-2b.
 *
 * Flags: --manifest <path> (default site/.cache/i18n_stale_manifest.json),
 *        --lang ja|zh|en (default all), --limit N (0=all), --dry-run.
 */

const ROOT = path.resolve(import.meta.dir, "..");

function flag(name: string, def: string): string {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const MANIFEST = flag("manifest", "site/.cache/i18n_stale_manifest.json");
const ONLY_LANG = flag("lang", "all");
const LIMIT = Number(flag("limit", "0")) || Infinity;
const DRY = process.argv.includes("--dry-run");
const EMIT_DEFERRED = flag("emit-deferred", ""); // write ambiguous-pairing mirrors as a manifest for C-2b

const stripFm = (t: string): string => {
  const m = t.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return m ? t.slice(m[0].length) : t;
};
const sha16 = (s: string): string => createHash("sha256").update(s).digest("hex").slice(0, 16);
const masksOf = (body: string): string[] => mask(body).masks as string[];
const sortedKey = (arr: string[]): string => arr.slice().sort().join(" ");

interface Wl {
  token: string;
  basename: string;
  label: string;
}
function parseWl(token: string): Wl | null {
  const m = /^\[\[([^\]\n|]+)(?:\|([^\]\n]*))?\]\]$/.exec(token);
  if (!m) return null;
  const target = m[1].trim();
  const label = (m[2] ?? "").trim();
  const basename = target.split("/").pop() ?? target;
  return { token, basename, label };
}

/** Elements of `a` not covered by `b`, with multiplicity. */
function multisetDiff(a: string[], b: string[]): string[] {
  const counts = new Map<string, number>();
  for (const x of b) counts.set(x, (counts.get(x) ?? 0) + 1);
  const out: string[] = [];
  for (const x of a) {
    const c = counts.get(x) ?? 0;
    if (c > 0) counts.set(x, c - 1);
    else out.push(x);
  }
  return out;
}

interface Entry {
  mirror: string;
  lang: string;
  source: string;
  klass: string;
}

const skips: Record<string, number> = {};
const skipSamples: Record<string, string[]> = {};
const deferred: Array<{ mirror: string; lang: string; source: string; klass: string }> = [];
function skip(reason: string, mirror: string): void {
  skips[reason] = (skips[reason] ?? 0) + 1;
  const s = (skipSamples[reason] ??= []);
  if (s.length < 4) s.push(mirror);
}

interface Cur {
  masks: string[];
  hash: string;
  key: string;
}

function main(): void {
  const manifest = JSON.parse(readFileSync(path.join(ROOT, MANIFEST), "utf8")) as Entry[];
  let linkOnly = manifest.filter((e) => e.klass === "link_only");
  if (ONLY_LANG !== "all") linkOnly = linkOnly.filter((e) => e.lang === ONLY_LANG);
  console.log(`link_only mirrors in manifest${ONLY_LANG === "all" ? "" : ` (${ONLY_LANG})`}: ${linkOnly.length}${DRY ? "  (dry-run)" : ""}`);

  const curCache = new Map<string, Cur | null>();
  const remapSamples: string[] = [];
  let remapped = 0;
  let hashOnly = 0;
  let processed = 0;

  for (const entry of linkOnly) {
    if (processed >= LIMIT) break;
    processed += 1;
    const mirrorAbs = path.join(ROOT, entry.mirror);
    const sourceRel = `${entry.source}.md`;
    const sourceAbs = path.join(ROOT, sourceRel);
    if (!existsSync(mirrorAbs) || !existsSync(sourceAbs)) {
      skip("missing-file", entry.mirror);
      continue;
    }
    let cur = curCache.get(sourceRel);
    if (cur === undefined) {
      const sbody = stripFm(readFileSync(sourceAbs, "utf8"));
      const sm = masksOf(sbody);
      cur = { masks: sm, hash: sha16(sbody), key: sortedKey(sm) };
      curCache.set(sourceRel, cur);
    }
    if (!cur) {
      skip("missing-file", entry.mirror);
      continue;
    }

    const mirrorText = readFileSync(mirrorAbs, "utf8");
    const fmMatch = mirrorText.match(/^(---\r?\n)([\s\S]*?)(\r?\n---\r?\n)([\s\S]*)$/);
    if (!fmMatch) {
      skip("no-frontmatter", entry.mirror);
      continue;
    }
    const [, fmOpen, fmInner, fmClose, body] = fmMatch;
    const fmHash = (fmInner.match(/^source_hash:\s*(.*)$/m)?.[1] ?? "").trim();
    if (fmHash === cur.hash) {
      skip("already-current", entry.mirror); // C-1 already handled this one
      continue;
    }

    const mMasks = masksOf(body);
    const writeWith = (newBody: string): void => {
      const newInner = fmInner.replace(/^source_hash:\s*.*$/m, `source_hash: ${cur!.hash}`);
      if (!DRY) writeFileSync(mirrorAbs, fmOpen + newInner + fmClose + newBody, "utf8");
    };

    // Tokens already match the current source (only the hash is stale) -> hash-only bump.
    if (sortedKey(mMasks) === cur.key) {
      writeWith(body);
      hashOnly += 1;
      continue;
    }

    const staleOnly = multisetDiff(mMasks, cur.masks);
    const freshOnly = multisetDiff(cur.masks, mMasks);
    const staleWl = staleOnly.map(parseWl);
    const freshWl = freshOnly.map(parseWl);
    if (staleOnly.length !== freshOnly.length || staleWl.some((w) => !w) || freshWl.some((w) => !w)) {
      skip("non-wikilink-or-count-mismatch", entry.mirror); // a number/date/label changed -> C-2b
      continue;
    }

    // Pair stale -> fresh by (basename, label).
    const freshByKey = new Map<string, Set<string>>();
    for (const w of freshWl as Wl[]) {
      const k = `${w.basename}${w.label}`;
      const set = freshByKey.get(k) ?? freshByKey.set(k, new Set()).get(k)!;
      set.add(w.token);
    }
    const remap = new Map<string, string>();
    let ambiguous = false;
    for (const s of new Set(staleOnly)) {
      const sw = parseWl(s)!;
      const cands = [...(freshByKey.get(`${sw.basename}${sw.label}`) ?? [])];
      if (cands.length === 1) remap.set(s, cands[0]);
      else {
        ambiguous = true;
        break;
      }
    }
    if (ambiguous || remap.size === 0) {
      skip("ambiguous-pairing", entry.mirror);
      deferred.push({ mirror: entry.mirror, lang: entry.lang, source: entry.source, klass: "ambiguous" });
      continue;
    }

    let newBody = body;
    for (const [oldT, newT] of remap) newBody = newBody.split(oldT).join(newT);

    // PROVE correctness: the remapped mirror must carry exactly the current source's tokens.
    if (sortedKey(masksOf(newBody)) !== cur.key) {
      skip("post-verify-failed", entry.mirror);
      continue;
    }
    writeWith(newBody);
    remapped += 1;
    if (remapSamples.length < 6) {
      const [oldT, newT] = [...remap][0];
      remapSamples.push(`${entry.mirror}  (${remap.size} link(s): ${oldT} -> ${newT})`);
    }
  }

  const verb = DRY ? "would remap" : "remapped";
  console.log(`\n${verb} (links + hash): ${remapped}`);
  if (hashOnly) console.log(`${DRY ? "would hash-only" : "hash-only"}: ${hashOnly}`);
  for (const s of remapSamples) console.log(`  e.g. ${s}`);
  const skipTotal = Object.values(skips).reduce((a, b) => a + b, 0);
  console.log(`skipped: ${skipTotal}${skipTotal ? "  (" + Object.entries(skips).map(([k, v]) => `${k}=${v}`).join(", ") + ")" : ""}`);
  for (const [reason, samples] of Object.entries(skipSamples)) {
    if (reason === "already-current") continue;
    console.log(`  ${reason} e.g.: ${samples.join(", ")}`);
  }
  if (EMIT_DEFERRED) {
    writeFileSync(path.join(ROOT, EMIT_DEFERRED), `${JSON.stringify(deferred, null, 2)}\n`, "utf8");
    console.log(`emitted ${deferred.length} deferred (ambiguous) entries -> ${EMIT_DEFERRED}`);
  }
  if (!DRY) console.log(`\nUn-remapped mirrors (non-wikilink/ambiguous/post-verify) remain stale for Batch C-2b retranslation.`);
}

main();
