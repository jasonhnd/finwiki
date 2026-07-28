#!/usr/bin/env bun

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { resolveApprovedOutputDir } from "./assemble_static_publish";

const ROOT = path.resolve(import.meta.dir, "..");
const SITE = path.join(ROOT, "site");
const BUN_EXECUTABLE = process.execPath;

type Step = {
  label: string;
  cwd?: string;
  command: string[];
  env?: Record<string, string>;
  note?: string;
};

export interface VerificationOptions {
  outDir?: string;
}

interface CliOptions {
  outDir: string;
}

export function parseCliArgs(argv: readonly string[]): CliOptions {
  let outDir = "_vercel_public";

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--out") {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error("--out requires a directory value");
      }
      outDir = value;
      index += 1;
      continue;
    }
    if (arg.startsWith("--out=")) {
      const value = arg.slice("--out=".length);
      if (!value) {
        throw new Error("--out requires a directory value");
      }
      outDir = value;
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }

  const approvedOutDir = resolveApprovedOutputDir(ROOT, outDir);
  return { outDir: path.basename(approvedOutDir) };
}

export async function assertPinnedBun(
  rootDir = ROOT,
  runtimeVersion = Bun.version,
): Promise<string> {
  const pinnedVersion = (await readFile(path.join(rootDir, ".bun-version"), "utf8")).trim();
  if (!pinnedVersion) {
    throw new Error(".bun-version must contain an exact Bun version");
  }
  if (runtimeVersion !== pinnedVersion) {
    throw new Error(
      `Bun version mismatch: running ${runtimeVersion}, repository requires ${pinnedVersion}`,
    );
  }

  const packageJson = JSON.parse(
    await readFile(path.join(rootDir, "package.json"), "utf8"),
  ) as { packageManager?: unknown };
  const expectedPackageManager = `bun@${pinnedVersion}`;
  if (packageJson.packageManager !== expectedPackageManager) {
    throw new Error(
      `packageManager mismatch: expected ${expectedPackageManager}, got ${String(
        packageJson.packageManager,
      )}`,
    );
  }

  const vercelConfig = JSON.parse(
    await readFile(path.join(rootDir, "vercel.json"), "utf8"),
  ) as { installCommand?: unknown; buildCommand?: unknown };
  const exactVercelBun = `bunx bun@${pinnedVersion}`;
  for (const [field, command] of [
    ["installCommand", vercelConfig.installCommand],
    ["buildCommand", vercelConfig.buildCommand],
  ] as const) {
    if (typeof command !== "string" || !command.includes(exactVercelBun)) {
      throw new Error(
        `Vercel ${field} must use the repository Bun pin via "${exactVercelBun}"`,
      );
    }
  }
  return pinnedVersion;
}

function bunCommand(...args: string[]): string[] {
  return [BUN_EXECUTABLE, ...args];
}

export function verificationPipeline(outDir: string): Step[] {
  return [
    {
      label: "Install site dependencies from the frozen lockfile",
      cwd: SITE,
      command: bunCommand("install", "--frozen-lockfile"),
    },
    {
      label: "Audit trilingual release documentation",
      command: bunCommand("run", "release:docs"),
    },
    {
      label: "Run strict release consistency checks",
      command: bunCommand("run", "release:check"),
    },
    {
      label: "Audit developer-document links",
      command: bunCommand("run", "docs:audit"),
    },
    {
      label: "Scan active developer documents for stale facts",
      command: bunCommand("run", "docs:stale"),
    },
    {
      label: "Check generated public-surface drift",
      command: bunCommand("run", "surface:drift"),
    },
    {
      label: "Check translation completeness and freshness",
      command: bunCommand("run", "i18n:check"),
    },
    {
      label: "Audit index and domain counts",
      command: bunCommand("run", "index:counts"),
    },
    {
      label: "Audit wiki links",
      command: bunCommand("run", "wiki:audit:ci"),
    },
    {
      label: "Audit production dependencies",
      cwd: SITE,
      command: bunCommand("audit", "--production"),
    },
    {
      label: "Typecheck the Astro site",
      cwd: SITE,
      command: bunCommand("run", "check"),
      env: { CI: "1" },
    },
    {
      label: "Run all repository tests",
      command: bunCommand("test"),
    },
    {
      label: "Build the Astro site",
      cwd: SITE,
      command: bunCommand("run", "build"),
    },
    {
      label: "Check duplicate HTML ids",
      command: bunCommand("run", "html:check"),
    },
    {
      label: "Audit entry HTML metadata and route-level alternates",
      command: bunCommand("run", "html:metadata"),
    },
    {
      label: "Build the Pagefind index",
      cwd: SITE,
      command: bunCommand("run", "index:search"),
    },
    {
      label: "Assemble the static publish directory",
      command: bunCommand(
        "tools/assemble_static_publish.ts",
        "--out",
        outDir,
      ),
    },
    {
      label: "Check required routes in the assembled artifact",
      command: bunCommand(
        "tools/required_publish_routes.ts",
        "--out",
        outDir,
      ),
    },
    {
      label: "Audit every final HTML href against the assembled artifact",
      command: bunCommand("run", "html:routes", "--out", outDir),
    },
    {
      label: "Audit generated URLs against the assembled artifact",
      command: bunCommand("run", "ai:audit", "--out", outDir),
    },
    {
      label: "Check patch whitespace",
      command: ["git", "diff", "--check"],
    },
  ];
}

async function runStep(step: Step): Promise<void> {
  const cwd = step.cwd ?? ROOT;
  const commandLabel = step.command.join(" ");
  console.log(`\n[step] ${step.label}`);
  console.log(`$ ${commandLabel}`);
  if (step.note) {
    console.log(`note: ${step.note}`);
  }

  const proc = Bun.spawn({
    cmd: step.command,
    cwd,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    env: { ...process.env, ...step.env },
  });
  const code = await proc.exited;
  if (code !== 0) {
    throw new Error(`${commandLabel} failed with exit code ${code}`);
  }
}

export async function runVerification(
  options: VerificationOptions = {},
): Promise<void> {
  const outDir = options.outDir ?? "_vercel_public";
  const cli = parseCliArgs(["--out", outDir]);
  const pinnedVersion = await assertPinnedBun();

  console.log(
    `FinWiki required verification: Bun ${pinnedVersion}, output ${cli.outDir}`,
  );
  for (const step of verificationPipeline(cli.outDir)) {
    await runStep(step);
  }
  console.log("\nFinWiki required verification: PASS");
}

async function main(): Promise<void> {
  const cli = parseCliArgs(process.argv.slice(2));
  await runVerification(cli);
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.stack : error);
    process.exit(1);
  });
}
