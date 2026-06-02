#!/usr/bin/env bun

import { resolve } from "node:path";

function formatJstParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = Object.fromEntries(
    formatter.formatToParts(date).map((part) => [part.type, part.value]),
  );

  const base = `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
  return {
    iso: `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+09:00`,
    display: `${base} JST`,
  };
}

function parseArgs(argv: string[]) {
  let file = "index.html";
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      console.log("usage: bun tools/update_footer_timestamp.ts [--file index.html]");
      process.exit(0);
    }
    if (arg === "--file") {
      file = argv[i + 1];
      if (!file) {
        throw new Error("missing value for --file");
      }
      i += 1;
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }
  return { file };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const repoRoot = process.cwd();
  const htmlPath = resolve(repoRoot, options.file);
  const html = await Bun.file(htmlPath).text();
  const { iso, display } = formatJstParts();

  const pattern = /<time id="last-updated-ts" datetime="[^"]*">[^<]*<\/time>/;
  const matches = html.match(new RegExp(pattern.source, "g")) ?? [];

  if (matches.length !== 1) {
    throw new Error(
      `ERROR: expected exactly 1 #last-updated-ts <time> in index.html, found ${matches.length}. Footer markup may have changed.`,
    );
  }

  const replacement = `<time id="last-updated-ts" datetime="${iso}">${display}</time>`;
  const newHtml = html.replace(pattern, replacement);

  if (newHtml === html) {
    console.log(`no-op: footer timestamp already ${display}`);
    return;
  }

  await Bun.write(htmlPath, newHtml.replace(/\r?\n/g, "\n"));
  console.log(`updated footer timestamp -> ${display}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
