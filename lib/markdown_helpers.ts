import { readdir, readFile, stat } from "node:fs/promises";
import { posix as pathPosix } from "node:path";

export const SITE_URL = "https://finwiki.zksc.io/";
export const GITHUB_BLOB = "https://github.com/jasonhnd/finwiki/blob/main/";

export const CONTROL_DOCS = new Set([
  "README.md",
  "CHANGELOG.md",
  "AGENTS.md",
  "SCHEMA.md",
  "OBSIDIAN-SETUP.md",
  "wiki-link-improvement-plan.md",
  "INDEX.md",
]);

export const EXCLUDED_WALK_DIRS = new Set([
  ".git",
  ".cache",
  ".opinions",
  "site",
  "app",
  ".vercel",
  "_site",
  "_vercel_public",
]);

export const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;
export const MARKDOWN_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
export const HEADING_RE = /^(#{1,3})\s+(.+?)\s*$/;

export interface Entry {
  source_path: string;
  url: string;
  github_url: string;
  title: string;
  domain: string;
  entry_type: string;
  summary: string;
  headings: string[];
  wikilinks: string[];
  resolved_wikilinks: string[];
  markdown_links: string[];
  nonspace_chars: number;
  word_like_tokens: number;
  last_modified: string;
}

export interface DomainRecord {
  domain: string;
  entries: number;
  route: string;
  url: string;
  scope: string;
}

export function siteUrl(pathname = ""): string {
  return SITE_URL + pathname.replace(/^\/+/, "");
}

export function publicUrlFor(relPath: string): string {
  if (relPath === "README.md") {
    return siteUrl("README.md");
  }
  return siteUrl(relPath.endsWith(".md") ? relPath.slice(0, -3) : relPath);
}

export function githubUrlFor(relPath: string): string {
  return GITHUB_BLOB + relPath;
}

export function wikilinkToUrl(target: string): string {
  const normalized = target.split("|", 1)[0].split("#", 1)[0].trim();
  if (!normalized) return "";
  if (normalized === "README") return siteUrl("README.md");
  return siteUrl(normalized.endsWith(".md") ? normalized.slice(0, -3) : normalized);
}

export async function readTextUtf8(filePath: string): Promise<string> {
  return readFile(filePath, "utf8");
}

export async function iterMarkdownFiles(rootDir: string): Promise<string[]> {
  const results: string[] = [];
  async function walk(dirPath: string): Promise<void> {
    const entries = await readdir(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = pathPosix.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (EXCLUDED_WALK_DIRS.has(entry.name)) continue;
        await walk(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".md")) {
        results.push(fullPath);
      }
    }
  }
  await walk(rootDir);
  results.sort();
  return results;
}

export function isPublicPage(relPath: string): boolean {
  return relPath.split("/").every((part) => !part.startsWith("."));
}

export function stripFrontmatter(text: string): string {
  if (!text.startsWith("---\n")) return text;
  const end = text.indexOf("\n---", 4);
  if (end === -1) return text;
  return text.slice(end + 4).replace(/^\s+/, "");
}

function stripEdgeQuotes(value: string): string {
  return value.replace(/^["']/, "").replace(/["']$/, "");
}

export function extractFrontmatter(text: string): Record<string, unknown> {
  if (!text.startsWith("---\n")) return {};
  const end = text.indexOf("\n---", 4);
  if (end === -1) return {};
  const block = text.slice(4, end);
  const result: Record<string, unknown> = {};
  let currentList: string[] | null = null;

  for (const raw of block.split("\n")) {
    if (!raw.trim()) continue;
    if (raw.startsWith("  - ") || raw.startsWith("- ")) {
      const value = stripEdgeQuotes(raw.replace(/^[\s-]+/, "").trim());
      if (currentList) currentList.push(value);
      continue;
    }
    const separator = raw.indexOf(":");
    if (separator === -1) continue;
    const key = raw.slice(0, separator).trim();
    const value = raw.slice(separator + 1).trim();
    if (!value) {
      currentList = [];
      result[key] = currentList;
      continue;
    }
    if (value.startsWith("[") && value.endsWith("]")) {
      result[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => stripEdgeQuotes(item.trim()))
        .filter(Boolean);
      currentList = null;
      continue;
    }
    result[key] = stripEdgeQuotes(value);
    currentList = null;
  }
  return result;
}

export function stripInlineMarkdown(text: string): string {
  const noWikilinks = text.replaceAll(WIKILINK_RE, (_match, inner: string) => {
    const parts = inner.split("|", 2);
    return parts.length === 2 ? parts[1] : inner;
  });
  const noMarkdownLinks = noWikilinks.replaceAll(
    MARKDOWN_LINK_RE,
    (_match, label: string) => label,
  );
  const noCode = noMarkdownLinks.replace(/`([^`]+)`/g, "$1");
  const noEmphasis = noCode.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1");
  return noEmphasis.replace(/\s+/g, " ").trim();
}

export function isCjkOrKana(char: string): boolean {
  if ("繝ｼ縲・・､".includes(char)) return true;
  return /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(char);
}

export function countWordLikeTokens(text: string): number {
  let count = 0;
  let mode: "ascii" | "cjk" | null = null;
  for (const char of text) {
    let nextMode: "ascii" | "cjk" | null = null;
    if (/^[A-Za-z0-9]$/.test(char)) {
      nextMode = "ascii";
    } else if (isCjkOrKana(char)) {
      nextMode = "cjk";
    }
    if (!nextMode) {
      mode = null;
      continue;
    }
    if (nextMode !== mode) {
      count += 1;
      mode = nextMode;
    }
  }
  return count;
}

export function extractTitle(relPath: string, text: string): string {
  for (const line of stripFrontmatter(text).split(/\r?\n/)) {
    if (line.startsWith("# ")) {
      return stripInlineMarkdown(line.slice(2).trim());
    }
  }
  return pathPosix.basename(relPath, ".md").replace(/[-_]/g, " ").replace(/\b\w/g, (s) => s.toUpperCase());
}

export function extractSummary(text: string): string {
  const body = stripFrontmatter(text);
  const paragraphs: string[] = [];
  let current: string[] = [];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    const stripped = line.trim();
    if (stripped.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!stripped) {
      if (current.length > 0) {
        paragraphs.push(current.join(" "));
        current = [];
      }
      continue;
    }
    if (/^[#|>\-*<]/.test(stripped)) continue;
    current.push(stripped);
  }
  if (current.length > 0) paragraphs.push(current.join(" "));

  for (const paragraph of paragraphs) {
    const summary = stripInlineMarkdown(paragraph);
    if (summary.length >= 40) return summary.slice(0, 300).replace(/\s+$/g, "");
  }
  return "";
}

export function extractHeadings(text: string): string[] {
  const headings: string[] = [];
  for (const line of stripFrontmatter(text).split(/\r?\n/)) {
    const match = HEADING_RE.exec(line);
    if (match) headings.push(stripInlineMarkdown(match[2]));
    if (headings.length >= 10) break;
  }
  return headings;
}

export function extractWikilinks(text: string): string[] {
  const links = new Set<string>();
  for (const match of text.matchAll(WIKILINK_RE)) {
    const normalized = match[1].split("|", 1)[0].split("#", 1)[0].trim();
    if (normalized) links.add(normalized);
  }
  return [...links].sort();
}

export function extractMarkdownLinks(text: string): string[] {
  const links = new Set<string>();
  for (const match of text.matchAll(MARKDOWN_LINK_RE)) {
    const url = match[2].trim();
    if (url && !url.startsWith("#")) links.add(url);
  }
  return [...links].sort().slice(0, 40);
}

export function entryTypeFor(relPath: string): string {
  if (CONTROL_DOCS.has(relPath)) return "control_doc";
  if (relPath.startsWith("releases/")) return "release_note";
  if (relPath.endsWith("/INDEX.md")) return "domain_index";
  return "wiki_entry";
}

export function domainFor(relPath: string): string {
  const parts = relPath.split("/");
  return parts.length === 1 ? "root" : parts[0];
}

export async function lastModifiedFor(filePath: string): Promise<string> {
  const fileStat = await stat(filePath);
  return formatLocalDate(new Date(fileStat.mtimeMs));
}

export function formatJstIsoSeconds(date = new Date()): string {
  const jstMs = date.getTime() + 9 * 60 * 60 * 1000;
  const jstDate = new Date(jstMs);
  const yyyy = jstDate.getUTCFullYear();
  const mm = String(jstDate.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(jstDate.getUTCDate()).padStart(2, "0");
  const hh = String(jstDate.getUTCHours()).padStart(2, "0");
  const mi = String(jstDate.getUTCMinutes()).padStart(2, "0");
  const ss = String(jstDate.getUTCSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}+09:00`;
}

export function formatLocalDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export async function buildEntry(rootDir: string, relPath: string, text: string): Promise<Entry> {
  const filePath = pathPosix.join(rootDir, relPath);
  const wikilinks = extractWikilinks(text);
  return {
    source_path: relPath,
    url: publicUrlFor(relPath),
    github_url: githubUrlFor(relPath),
    title: extractTitle(relPath, text),
    domain: domainFor(relPath),
    entry_type: entryTypeFor(relPath),
    summary: extractSummary(text),
    headings: extractHeadings(text),
    wikilinks,
    resolved_wikilinks: wikilinks.slice(0, 80).map((item) => wikilinkToUrl(item)),
    markdown_links: extractMarkdownLinks(text),
    nonspace_chars: text.replace(/\s+/g, "").length,
    word_like_tokens: countWordLikeTokens(text),
    last_modified: await lastModifiedFor(filePath),
  };
}

export async function parseDomainMap(rootDir: string): Promise<DomainRecord[]> {
  const indexText = await readTextUtf8(pathPosix.join(rootDir, "INDEX.md"));
  const domains: DomainRecord[] = [];
  for (const line of indexText.split(/\r?\n/)) {
    if (!line.startsWith("|")) continue;
    const cells = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
    if (cells.length < 4 || cells[0] === "Domain" || cells[0] === "---") continue;
    if (!/^\d[\d,]*$/.test(cells[1])) continue;
    const routeMatch = cells[2].match(WIKILINK_RE);
    const route = routeMatch ? routeMatch[0].slice(2, -2).split("|", 1)[0] : cells[2];
    domains.push({
      domain: cells[0],
      entries: Number(cells[1].replaceAll(",", "")),
      route,
      url: wikilinkToUrl(route),
      scope: stripInlineMarkdown(cells[3]),
    });
  }
  return domains;
}

export async function parseAuditSummary(rootDir: string): Promise<Record<string, number>> {
  const reportPath = pathPosix.join(rootDir, "wiki-link-improvement-plan.md");
  try {
    const report = await readTextUtf8(reportPath);
    const metrics: Record<string, number> = {};
    for (const line of report.split(/\r?\n/)) {
      if (!line.startsWith("|")) continue;
      const cells = line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim());
      if (cells.length !== 2 || cells[0] === "Metric" || cells[0] === "---") continue;
      if (/^\d[\d,]*$/.test(cells[1])) {
        const key = cells[0].toLowerCase().replaceAll(" ", "_").replaceAll("/", "_");
        metrics[key] = Number(cells[1].replaceAll(",", ""));
      }
    }
    return metrics;
  } catch {
    return {};
  }
}
