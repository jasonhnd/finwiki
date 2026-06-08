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
    const stats = statSync(name);
    if (stats.isDirectory()) {
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

const slugToDomain = new Map<string, string>(); // slug -> domain

// Build the map of existing files
for (const domain of DOMAINS) {
  const domainDir = join(ROOT, domain);
  if (existsSync(domainDir) && statSync(domainDir).isDirectory()) {
    const files = readdirSync(domainDir);
    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.slice(0, -3);
        if (slug === "INDEX") continue;
        if (slugToDomain.has(slug)) {
          // Duplicate slug across domains! (e.g. au-jibun-bank might be in banking and regional-banks)
          // We might need to be careful here. 
          // For now, let is prefer the one already in the map or log it.
          console.warn(`Duplicate slug: ${slug} in ${slugToDomain.get(slug)} and ${domain}`);
        } else {
          slugToDomain.set(slug, domain);
        }
      }
    }
  }
}

// Also check root for INDEX, README
const rootFiles = readdirSync(ROOT);
for (const file of rootFiles) {
  if (file.endsWith(".md")) {
    const slug = file.slice(0, -3);
    slugToDomain.set(slug, ""); // root
  }
}

const allFiles = getAllFiles(ROOT);
let totalUpdated = 0;

for (const filePath of allFiles) {
  const content = readFileSync(filePath, "utf-8");
  let updatedContent = content;
  
  // Replace [[slug]] or [[slug|text]] where slug has no /
  const wikilinkRegex = /\[\[([^\]|/#]+)(\|[^\]]+)?\]\]/g;
  updatedContent = updatedContent.replace(wikilinkRegex, (match, slug, text) => {
    const domain = slugToDomain.get(slug);
    if (domain !== undefined && domain !== "") {
      const newTarget = `${domain}/${slug}`;
      totalUpdated++;
      return `[[${newTarget}${text || ""}]]`;
    }
    return match;
  });

  // Replace [text](slug) where slug has no /
  const mdLinkRegex = /\[([^\]]+)\]\(([^)/#]+)\)/g;
  updatedContent = updatedContent.replace(mdLinkRegex, (match, text, slug) => {
    const domain = slugToDomain.get(slug);
    if (domain !== undefined && domain !== "") {
      const newTarget = `${domain}/${slug}`;
      totalUpdated++;
      return `[${text}](${newTarget})`;
    }
    return match;
  });

  if (updatedContent !== content) {
    writeFileSync(filePath, updatedContent, "utf-8");
    console.log(`Updated flat links in ${relative(ROOT, filePath)}`);
  }
}

console.log(`Done. Total flat links updated: ${totalUpdated}`);
