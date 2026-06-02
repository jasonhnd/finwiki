#!/usr/bin/env bun
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dir, "..");
const SITE = path.join(ROOT, "site");

type Step = {
  label: string;
  cwd?: string;
  command: string[];
  note?: string;
};

async function runStep(step: Step): Promise<void> {
  const cwd = step.cwd ?? ROOT;
  const label = step.command.join(" ");
  console.log(`\n[step] ${step.label}`);
  console.log(`$ ${label}`);
  if (step.note) {
    console.log(`note: ${step.note}`);
  }

  const proc = Bun.spawn({
    cmd: step.command,
    cwd,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    env: { ...process.env },
  });
  const code = await proc.exited;
  if (code !== 0) {
    throw new Error(`${label} failed with exit code ${code}`);
  }
}

function pipeline(): Step[] {
  return [
    {
      label: "Audit wiki links",
      command: ["bun", "tools/wiki_link_audit.ts", "--fail-on-issues"],
    },
    {
      label: "Run release consistency checks",
      command: ["bun", "tools/release.ts", "--check", "--strict"],
    },
    {
      label: "Build Astro site",
      cwd: SITE,
      command: ["bun", "run", "build"],
    },
    {
      label: "Check duplicate HTML ids",
      command: ["bun", "tools/check_duplicate_html_ids.ts", "site/dist"],
    },
    {
      label: "Build Pagefind index",
      cwd: SITE,
      command: ["bun", "run", "index:search"],
    },
    {
      label: "Assemble Vercel output",
      command: ["bun", "tools/assemble_static_publish.ts", "--out", "_vercel_public"],
    },
  ];
}

async function main(): Promise<void> {
  for (const step of pipeline()) {
    await runStep(step);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
});
