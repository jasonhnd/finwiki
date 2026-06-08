import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, resolve, extname } from "node:path";

const ROOT = resolve(".");
const TARGET_DIR = join(ROOT, "site/src/content");
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

const slugToDomain = new Map<string, string>();
for (const domain of DOMAINS) {
  const domainDir = join(ROOT, domain);
  if (existsSync(domainDir) && statSync(domainDir).isDirectory()) {
    const files = readdirSync(domainDir);
    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.slice(0, -3);
        if (slug === "INDEX") continue;
        slugToDomain.set(slug, domain);
      }
    }
  }
}

const allFiles = getAllFiles(TARGET_DIR);
let totalUpdated = 0;

for (const filePath of allFiles) {
  const content = readFileSync(filePath, "utf-8");
  let updatedContent = content;
  
  const wikilinkRegex = /\[\[([^\]|/#]+)(\|[^\]]+)?\]\]/g;
  updatedContent = updatedContent.replace(wikilinkRegex, (match, slug, text) => {
    const domain = slugToDomain.get(slug);
    if (domain !== undefined && domain !== "") {
      totalUpdated++;
      return `[[${domain}/${slug}${text || ""}]]`;
    }
    return match;
  });

  const mdLinkRegex = /\[([^\]]+)\]\(([^)/#]+)\)/g;
  updatedContent = updatedContent.replace(mdLinkRegex, (match, text, slug) => {
    const domain = slugToDomain.get(slug);
    if (domain !== undefined && domain !== "") {
      totalUpdated++;
      return `[${text}](${domain}/${slug})`;
    }
    return match;
  });

  if (updatedContent !== content) {
    writeFileSync(filePath, updatedContent, "utf-8");
    console.log(`Updated flat links in ${relative(ROOT, filePath)}`);
  }
}

console.log(`Done. Total flat site links updated: ${totalUpdated}`);
