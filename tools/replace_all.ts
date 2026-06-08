import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, resolve, extname } from "node:path";

const ROOT = resolve(".");
const REPLACEMENTS = [
  { old: "asset-management/", new: "asset-managers/" },
  { old: "regulators-japan/", new: "financial-regulators/" }
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

const allFiles = getAllFiles(ROOT);
let totalUpdated = 0;

for (const filePath of allFiles) {
  const content = readFileSync(filePath, "utf-8");
  let updatedContent = content;
  
  for (const rep of REPLACEMENTS) {
    // Escape for regex
    const escapedOld = rep.old.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedOld, "g");
    updatedContent = updatedContent.replace(regex, rep.new);
  }

  if (updatedContent !== content) {
    writeFileSync(filePath, updatedContent, "utf-8");
    totalUpdated++;
    console.log(`Updated ${relative(ROOT, filePath)}`);
  }
}

console.log(`Done. Total files updated: ${totalUpdated}`);
