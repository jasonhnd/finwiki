#!/usr/bin/env bun

import { readdir, stat } from "node:fs/promises";
import { relative, resolve } from "node:path";

type DuplicateId = {
  path: string;
  htmlId: string;
  count: number;
};

async function collectHtmlFiles(root: string): Promise<string[]> {
  const files: string[] = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop()!;
    const entries = await readdir(current, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name, "en"));

    for (const entry of entries) {
      const fullPath = resolve(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".html")) {
        files.push(fullPath);
      }
    }
  }

  files.sort((a, b) => a.localeCompare(b, "en"));
  return files;
}

async function collectIds(path: string): Promise<string[]> {
  const html = await Bun.file(path).text();
  const ids: string[] = [];
  await new HTMLRewriter()
    .on("*", {
      element(element) {
        const id = element.getAttribute("id");
        if (id) ids.push(id);
      },
    })
    .transform(new Response(html))
    .text();
  return ids;
}

async function findDuplicateIds(root: string): Promise<{ checked: number; duplicates: DuplicateId[] }> {
  let checked = 0;
  const duplicates: DuplicateId[] = [];

  for (const path of await collectHtmlFiles(root)) {
    let ids: string[];
    try {
      ids = await collectIds(path);
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "ENOENT") {
        continue;
      }
      throw error;
    }

    checked += 1;
    const counts = new Map<string, number>();
    for (const htmlId of ids) {
      counts.set(htmlId, (counts.get(htmlId) ?? 0) + 1);
    }

    for (const htmlId of [...counts.keys()].sort((a, b) => a.localeCompare(b, "en"))) {
      const count = counts.get(htmlId)!;
      if (count > 1) {
        duplicates.push({ path, htmlId, count });
      }
    }
  }

  return { checked, duplicates };
}

function printUsageAndExit(): never {
  console.error("usage: bun tools/check_duplicate_html_ids.ts <html_root>");
  process.exit(2);
}

async function main(): Promise<number> {
  const [, , htmlRootArg] = process.argv;
  if (!htmlRootArg || process.argv.length !== 3) {
    printUsageAndExit();
  }

  const root = resolve(htmlRootArg);
  let rootStat;
  try {
    rootStat = await stat(root);
  } catch {
    console.error(`html root not found: ${htmlRootArg}`);
    return 2;
  }

  if (!rootStat.isDirectory()) {
    console.error(`html root is not a directory: ${htmlRootArg}`);
    return 2;
  }

  const { checked, duplicates } = await findDuplicateIds(root);
  if (duplicates.length > 0) {
    const duplicatePages = new Set(duplicates.map((issue) => issue.path)).size;
    console.log(`checked=${checked} duplicate_id_pages=${duplicatePages} duplicate_ids=${duplicates.length}`);
    for (const issue of duplicates.slice(0, 100)) {
      console.log(`${relative(root, issue.path)}: id=${JSON.stringify(issue.htmlId)} count=${issue.count}`);
    }
    if (duplicates.length > 100) {
      console.log(`... ${duplicates.length - 100} more duplicate id issue(s)`);
    }
    return 1;
  }

  console.log(`checked=${checked} duplicate_id_pages=0 duplicate_ids=0`);
  return 0;
}

const exitCode = await main();
process.exit(exitCode);
