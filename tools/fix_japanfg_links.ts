import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, resolve, extname } from "node:path";

const ROOT = resolve(".");
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

function getAllFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);
  for (const file of files) {
    const name = join(dir, file);
    if (statSync(name).isDirectory()) {
      if (file !== ".git" && file !== "node_modules" && file !== "site" && file !== "docs" && file !== "releases") {
        getAllFiles(name, fileList);
      }
    } else {
      if (extname(name) === ".md" || name.endsWith(".txt")) {
        fileList.push(name);
      }
    }
  }
  return fileList;
}

const fileMap = new Map<string, string>(); // slug -> domain/slug

// Build the map of existing files
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

// Special case for JapanFG/INDEX
fileMap.set("JapanFG/INDEX", "JapanFG/INDEX");

const allFiles = getAllFiles(ROOT);
let totalUpdated = 0;

for (const filePath of allFiles) {
  const content = readFileSync(filePath, "utf-8");
  let updatedContent = content;
  
  // Replace [[JapanFG/slug]] or [[JapanFG/slug|text]]
  const wikilinkRegex = /\[\[(JapanFG\/([^\]|#]+))(\|[^\]]+)?\]\]/g;
  updatedContent = updatedContent.replace(wikilinkRegex, (match, fullTarget, slug, text) => {
    if (slug === "INDEX") return match;
    const newTarget = fileMap.get(slug) || fileMap.get(`JapanFG/${slug}`);
    if (newTarget && newTarget !== fullTarget) {
      totalUpdated++;
      return `[[${newTarget}${text || ""}]]`;
    }
    return match;
  });

  // Replace [text](JapanFG/slug)
  const mdLinkRegex = /\[([^\]]+)\]\((JapanFG\/([^)]+))\)/g;
  updatedContent = updatedContent.replace(mdLinkRegex, (match, text, fullTarget, slug) => {
    if (slug === "INDEX") return match;
    const newTarget = fileMap.get(slug) || fileMap.get(`JapanFG/${slug}`);
    if (newTarget && newTarget !== fullTarget) {
      totalUpdated++;
      return `[${text}](${newTarget})`;
    }
    return match;
  });

  if (updatedContent !== content) {
    writeFileSync(filePath, updatedContent, "utf-8");
    console.log(`Updated links in ${relative(ROOT, filePath)}`);
  }
}

console.log(`Done. Total links updated: ${totalUpdated}`);
