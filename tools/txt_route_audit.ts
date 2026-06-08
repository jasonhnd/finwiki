#!/usr/bin/env bun

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * Txt Route Audit
 * 
 * This tool validates that all internal routes and relative links
 * referenced in AI discovery files (llms.txt, llms-full.txt, llms-tasks.txt)
 * actually correspond to existing files in the repository.
 */

const ROOT = path.resolve(import.meta.dir, "..");
const TARGET_FILES = ["llms.txt", "llms-full.txt", "llms-tasks.txt"];
const BASE_URL = "https://finwiki.zksc.io/";

const ANSI_RED = "\x1b[31m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_RESET = "\x1b[0m";

function main() {
  console.log(`${ANSI_YELLOW}🔍 Auditing .txt route/link references...${ANSI_RESET}`);
  let totalBroken = 0;

  for (const filename of TARGET_FILES) {
    const filePath = path.join(ROOT, filename);
    if (!existsSync(filePath)) {
      console.warn(`${ANSI_YELLOW}⚠️ Warning: ${filename} not found, skipping.${ANSI_RESET}`);
      continue;
    }

    const content = readFileSync(filePath, "utf-8");
    const seenLinks = new Set<string>();
    const brokenLinks: string[] = [];

    // Pattern 1: Full URLs (https://finwiki.zksc.io/...)
    const fullUrlRegex = new RegExp(`${BASE_URL.replace(/\//g, "\\/")}([a-zA-Z0-9\\-_/.]+)`, "g");
    for (const match of content.matchAll(fullUrlRegex)) {
      checkLink(match[1], `Full URL: ${match[0]}`);
    }

    // Pattern 2: Markdown-style relative links [text](path)
    const mdLinkRegex = /\[[^\]]*\]\(([^)]+)\)/g;
    for (const match of content.matchAll(mdLinkRegex)) {
      const link = match[1];
      // Only check internal links (not starting with http)
      if (!link.startsWith("http")) {
        checkLink(link, `Markdown link: ${match[0]}`);
      }
    }

    function checkLink(link: string, context: string) {
      // Clean up fragment/query
      let cleanLink = link.split("#")[0].split("?")[0];
      if (cleanLink.endsWith("/")) cleanLink = cleanLink.slice(0, -1);
      if (!cleanLink || seenLinks.has(cleanLink)) return;
      seenLinks.add(cleanLink);

      // Check existence
      const potentialPaths = [
        path.join(ROOT, cleanLink),
        path.join(ROOT, `${cleanLink}.md`),
      ];

      // If it's a domain-like path, check for INDEX.md
      if (!cleanLink.includes(".") && !cleanLink.endsWith("INDEX")) {
        potentialPaths.push(path.join(ROOT, cleanLink, "INDEX.md"));
      }

      const exists = potentialPaths.some((p) => existsSync(p));
      if (!exists) {
        brokenLinks.push(`${cleanLink} (${context})`);
      }
    }

    if (brokenLinks.length > 0) {
      console.error(`${ANSI_RED}❌ Found ${brokenLinks.length} broken links in ${filename}:${ANSI_RESET}`);
      for (const msg of brokenLinks) {
        console.error(`   - ${msg}`);
      }
      totalBroken += brokenLinks.length;
    } else {
      console.log(`${ANSI_GREEN}✅ ${filename}: No broken internal links found. (${seenLinks.size} unique links checked)${ANSI_RESET}`);
    }
  }

  if (totalBroken > 0) {
    console.error(`\n${ANSI_RED}Audit failed with ${totalBroken} errors.${ANSI_RESET}`);
    process.exit(1);
  } else {
    console.log(`\n${ANSI_GREEN}Audit passed successfully.${ANSI_RESET}`);
    process.exit(0);
  }
}

main();
