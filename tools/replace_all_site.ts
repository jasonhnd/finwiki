import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, resolve, extname } from "node:path";

const ROOT = resolve(".");
const TARGET_DIR = join(ROOT, "site/src/content");
const REPLACEMENTS = [
  { old: "asset-management/", new: "asset-managers/" },
  { old: "regulators-japan/", new: "financial-regulators/" },
  { old: "JapanFG/", new: "JapanFG/" } // Placeholder for JapanFG fix
];

function getAllFiles(dir: string, fileList: string[] = []): string[] {
  if (!existsSync(dir)) return fileList;
  const files = readdirSync(dir);
  for (const file of files) {
    const name = join(dir, file);
    const stats = statSync(name);
    if (stats.isDirectory()) {
      getAllFiles(name, fileList);
    } else {
      if (extname(name) === ".md") {
        fileList.push(name);
      }
    }
  }
  return fileList;
}

// Reuse JapanFG mapping from earlier
const DOMAINS = [
  "agent-economy", "asset-managers", "banking", "business", "card-issuers",
  "consumer-finance", "cooperative-banks", "corporate-strategy", "derivatives",
  "exchanges", "finance", "financial-conglomerates", "financial-licenses",
  "financial-regulators", "fintech", "foreign-financial-institutions",
  "insurance", "leasing-firms", "life-insurers", "loyalty", "manufacturer-finance",
  "megabanks", "money-market", "non-life-insurers", "non-profit", "payment-firms",
  "payments", "policy-finance", "real-estate-finance", "regional-banks",
  "retail", "securities", "securities-firms", "security", "structured-finance",
  "systems", "trade", "trading-company-finance", "trust-banks"
];
const fileMap = new Map<string, string>();
for (const domain of DOMAINS) {
  const domainDir = join(ROOT, domain);
  if (existsSync(domainDir) && statSync(domainDir).isDirectory()) {
    const files = readdirSync(domainDir);
    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.slice(0, -3);
        fileMap.set(slug, `${domain}/${slug}`);
        fileMap.set(`JapanFG/${slug}`, `${domain}/${slug}`);
      }
    }
  }
}

const allFiles = getAllFiles(TARGET_DIR);
let totalUpdated = 0;

for (const filePath of allFiles) {
  const content = readFileSync(filePath, "utf-8");
  let updatedContent = content;
  
  // Apply explicit replacements
  for (const rep of REPLACEMENTS) {
    const escapedOld = rep.old.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedOld, "g");
    updatedContent = updatedContent.replace(regex, rep.new);
  }

  // Apply JapanFG fix
  const wikilinkRegex = /\[\[(JapanFG\/([^\]|#]+))(\|[^\]]+)?\]\]/g;
  updatedContent = updatedContent.replace(wikilinkRegex, (match, fullTarget, slug, text) => {
    if (slug === "INDEX") return match;
    const newTarget = fileMap.get(slug) || fileMap.get(`JapanFG/${slug}`);
    if (newTarget && newTarget !== fullTarget) {
      return `[[${newTarget}${text || ""}]]`;
    }
    return match;
  });

  const mdLinkRegex = /\[([^\]]+)\]\((JapanFG\/([^)]+))\)/g;
  updatedContent = updatedContent.replace(mdLinkRegex, (match, text, fullTarget, slug) => {
    if (slug === "INDEX") return match;
    const newTarget = fileMap.get(slug) || fileMap.get(`JapanFG/${slug}`);
    if (newTarget && newTarget !== fullTarget) {
      return `[${text}](${newTarget})`;
    }
    return match;
  });

  if (updatedContent !== content) {
    writeFileSync(filePath, updatedContent, "utf-8");
    totalUpdated++;
    console.log(`Updated ${relative(ROOT, filePath)}`);
  }
}

console.log(`Done. Total site files updated: ${totalUpdated}`);
