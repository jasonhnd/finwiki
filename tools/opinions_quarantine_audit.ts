#!/usr/bin/env bun
/**
 * Enforce the public quarantine contract for .opinions/** (Issue #193).
 *
 * - Policy file .opinions/QUARANTINE.md must exist and state GitHub visibility.
 * - Every tracked markdown under .opinions/ (except QUARANTINE.md) must declare
 *   type: opinion-quarantine.
 * - Policy text must not equate site non-deploy with non-public.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const OPINIONS = path.join(ROOT, ".opinions");
const POLICY = path.join(OPINIONS, "QUARANTINE.md");

type Problem = { path: string; message: string };

function walk(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (name.endsWith(".md")) out.push(full.replaceAll("\\", "/"));
  }
  return out;
}

function frontmatter(text: string): Record<string, string> {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm: Record<string, string> = {};
  if (!m) return fm;
  for (const line of m[1].split(/\r?\n/)) {
    const field = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (field) fm[field[1]] = field[2].trim().replace(/^["']|["']$/g, "");
  }
  return fm;
}

function main(): number {
  const problems: Problem[] = [];
  if (!existsSync(POLICY)) {
    problems.push({ path: ".opinions/QUARANTINE.md", message: "missing quarantine policy file" });
  } else {
    const policy = readFileSync(POLICY, "utf8");
    const requiredSnippets = [
      "directly visible",
      "GitHub",
      "site corpus",
      "opinion-quarantine",
    ];
    for (const snip of requiredSnippets) {
      if (!policy.includes(snip)) {
        problems.push({
          path: ".opinions/QUARANTINE.md",
          message: `policy missing required visibility language: ${snip}`,
        });
      }
    }
    // Require an explicit separation of site exclusion vs GitHub visibility.
    if (!/does not mean not public|≠|不等于|意味しない/i.test(policy)) {
      problems.push({
        path: ".opinions/QUARANTINE.md",
        message: "policy must explicitly separate site exclusion from GitHub visibility",
      });
    }
  }

  const files = walk(OPINIONS).filter((f) => !f.endsWith("/QUARANTINE.md"));
  for (const abs of files) {
    const rel = path.relative(ROOT, abs).replaceAll("\\", "/");
    const text = readFileSync(abs, "utf8");
    const fm = frontmatter(text);
    if (fm.type !== "opinion-quarantine") {
      problems.push({ path: rel, message: `expected type: opinion-quarantine, got ${fm.type || "(missing)"}` });
    }
    if (!fm.source_entry) {
      problems.push({ path: rel, message: "missing source_entry frontmatter field" });
    }
  }

  console.log(
    `opinions_quarantine_audit files=${files.length} problems=${problems.length}`,
  );
  for (const p of problems.slice(0, 40)) {
    console.log(`- ${p.path}: ${p.message}`);
  }
  if (problems.length > 40) console.log(`... and ${problems.length - 40} more`);
  return problems.length === 0 ? 0 : 1;
}

if (import.meta.main) process.exitCode = main();
