#!/usr/bin/env bun

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Docs Link Audit
 * 
 * This tool validates relative Markdown links in developer documentation
 * and root control docs (README, CHANGELOG, etc.).
 */

const ROOT = path.resolve(import.meta.dir, "..");
const DOCS_DIR = path.join(ROOT, "docs");
const CONTROL_DOCS = [
  "README.md",
  "CHANGELOG.md",
  "AGENTS.md",
  "CONTRIBUTING.md",
  "SCHEMA.md",
  "OBSIDIAN-SETUP.md",
  "INDEX.md",
  "INDEX",
  "HOW-TO-NAVIGATE.md",
];

const ALLOWLIST = new Set([
  "path", // Used in CHANGELOG as illustrative [text](path)
]);

const ANSI_RED = "\x1b[31m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_YELLOW = "\x1b[33m";
const ANSI_RESET = "\x1b[0m";

let totalErrors = 0;

function walk(dir: string, callback: (file: string) => void) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      if (file !== "node_modules" && file !== ".git") {
        walk(fullPath, callback);
      }
    } else if (file.endsWith(".md")) {
      callback(fullPath);
    }
  }
}

function checkFile(filePath: string) {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const dir = path.dirname(filePath);

  // Pattern: [text](link)
  const mdLinkRegex = /\[[^\]]*\]\(([^)]+)\)/g;

  lines.forEach((line, index) => {
    // Simple heuristic to ignore links inside backticks
    // This is not perfect but covers most cases like `[text](path)`
    
    let match;
    while ((match = mdLinkRegex.exec(line)) !== null) {
      const link = match[1];
      const matchIndex = match.index;
      
      // Check if inside backticks on this line
      const before = line.slice(0, matchIndex);
      const after = line.slice(matchIndex + match[0].length);
      const backticksBefore = (before.match(/`/g) || []).length;
      const backticksAfter = (after.match(/`/g) || []).length;
      
      if (backticksBefore % 2 !== 0 && backticksAfter % 2 !== 0) {
        continue; // Likely inside inline code
      }

      // Skip external links, fragments, mailto, or custom protocols (e.g. obsidian://)
      if (link.startsWith("http") || link.startsWith("#") || link.startsWith("mailto:") || link.includes("://")) continue;

      // Clean up fragment/query
      const cleanLink = link.split("#")[0].split("?")[0];
      if (!cleanLink || ALLOWLIST.has(cleanLink)) continue;

      const targetPath = path.resolve(dir, cleanLink);
      
      // Check if target exists as-is
      let exists = existsSync(targetPath);

      // If not exists, try with common extensions if missing
      if (!exists && !path.extname(cleanLink)) {
        const extensions = [".md", ".txt", ".json", ".xml", ".html"];
        for (const ext of extensions) {
          if (existsSync(`${targetPath}${ext}`)) {
            exists = true;
            break;
          }
        }
      }

      // If directory, check for INDEX.md or README.md
      if (exists && existsSync(targetPath) && statSync(targetPath).isDirectory()) {
        const indexMd = path.join(targetPath, "INDEX.md");
        const readmeMd = path.join(targetPath, "README.md");
        if (!existsSync(indexMd) && !existsSync(readmeMd)) {
          exists = false;
        }
      }

      if (!exists) {
        const relFile = path.relative(ROOT, filePath);
        console.error(`${ANSI_RED}❌ Broken link in ${relFile}:${index + 1}${ANSI_RESET}`);
        console.error(`   - Link: ${link}`);
        console.error(`   - Resolved to: ${path.relative(ROOT, targetPath)}`);
        totalErrors++;
      }
    }
  });
}

function main() {
  console.log(`${ANSI_YELLOW}🔍 Auditing documentation links...${ANSI_RESET}`);

  // 1. Audit docs/ directory
  if (existsSync(DOCS_DIR)) {
    walk(DOCS_DIR, (file) => checkFile(file));
  }

  // 2. Audit root control docs
  for (const doc of CONTROL_DOCS) {
    const fullPath = path.join(ROOT, doc);
    if (existsSync(fullPath) && !statSync(fullPath).isDirectory()) {
      checkFile(fullPath);
    }
  }

  if (totalErrors > 0) {
    console.error(`\n${ANSI_RED}Audit failed with ${totalErrors} errors.${ANSI_RESET}`);
    process.exit(1);
  } else {
    console.log(`\n${ANSI_GREEN}Audit passed successfully.${ANSI_RESET}`);
    process.exit(0);
  }
}

main();
