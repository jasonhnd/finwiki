#!/usr/bin/env bun

import { mkdir, writeFile } from "node:fs/promises";
import { posix as pathPosix } from "node:path";
import { escape } from "node:querystring";
import {
  buildEntry,
  countWordLikeTokens,
  domainFor,
  extractFrontmatter,
  formatJstIsoSeconds,
  githubUrlFor,
  isPublicPage,
  iterMarkdownFiles,
  parseAuditSummary,
  parseDomainMap,
  publicUrlFor,
  readTextUtf8,
  SITE_URL,
  siteUrl,
  wikilinkToUrl,
} from "../lib/markdown_helpers";

interface CliOptions {
  rootDir: string;
  outDir: string;
  generatedAt?: string;
  apiIndexGeneratedAt?: string;
}

interface Model {
  site: string;
  generated_at: string;
  counts: Record<string, number | null>;
  navigation: Record<string, string>;
  url_rules: Record<string, string>;
  domains: Array<Record<string, unknown>>;
  entries: Array<Record<string, unknown>>;
}

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
  "cohere-ai",
  "Bytespider",
  "Amazonbot",
  "Applebot-Extended",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Diffbot",
  "Bingbot",
  "DuckAssistBot",
  "PetalBot",
  "Yeti",
  "Mistral-AI",
];

function parseArgs(argv: string[]): CliOptions {
  let rootDir = process.cwd().replaceAll("\\", "/");
  let outDir = rootDir;
  let generatedAt: string | undefined;
  let apiIndexGeneratedAt: string | undefined;

  for (const arg of argv) {
    if (arg.startsWith("--root=")) rootDir = arg.slice("--root=".length).replaceAll("\\", "/");
    else if (arg.startsWith("--out-dir=")) outDir = arg.slice("--out-dir=".length).replaceAll("\\", "/");
    else if (arg.startsWith("--generated-at=")) generatedAt = arg.slice("--generated-at=".length);
    else if (arg.startsWith("--api-index-generated-at=")) {
      apiIndexGeneratedAt = arg.slice("--api-index-generated-at=".length);
    }
  }

  return { rootDir, outDir, generatedAt, apiIndexGeneratedAt };
}

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function buildModel(options: CliOptions): Promise<Model> {
  const absoluteMarkdownFiles = await iterMarkdownFiles(options.rootDir);
  const relPaths = absoluteMarkdownFiles.map((filePath) => pathPosix.relative(options.rootDir, filePath));
  const publicRelPaths = relPaths.filter(isPublicPage);

  const textByRelPath = new Map<string, string>();
  for (const relPath of relPaths) {
    textByRelPath.set(relPath, await readTextUtf8(pathPosix.join(options.rootDir, relPath)));
  }

  const entries = [];
  for (const relPath of publicRelPaths) {
    entries.push(await buildEntry(options.rootDir, relPath, textByRelPath.get(relPath) ?? ""));
  }

  const allText = relPaths.map((relPath) => textByRelPath.get(relPath) ?? "").join("\n");
  const audit = await parseAuditSummary(options.rootDir);
  const domains = await parseDomainMap(options.rootDir);
  const generatedAt = options.generatedAt ?? formatJstIsoSeconds();

  return {
    site: SITE_URL.replace(/\/$/, ""),
    generated_at: generatedAt,
    counts: {
      markdown_files: relPaths.length,
      public_markdown_pages: publicRelPaths.length,
      site_urls_in_sitemap: entries.length + 1,
      topical_domains: domains.length,
      link_audited_entries: audit.entries_checked ?? null,
      entries_with_any_issue: audit.entries_with_any_issue ?? null,
      unresolved_link_issues: audit.entries_with_any_issue ?? null,
      nonspace_utf8_chars: allText.replace(/\s+/g, "").length,
      word_like_tokens: countWordLikeTokens(allText),
    },
    navigation: {
      human_homepage: siteUrl(),
      global_index: siteUrl("INDEX"),
      global_index_markdown: siteUrl("INDEX.md"),
      llms: siteUrl("llms.txt"),
      llms_full: siteUrl("llms-full.txt"),
      ai_index_json: siteUrl("ai-index.json"),
      sitemap: siteUrl("sitemap.xml"),
      robots: siteUrl("robots.txt"),
      github_repository: "https://github.com/jasonhnd/finwiki",
    },
    url_rules: {
      wikilink_rule: "[[domain/slug]] resolves to https://finwiki.zksc.io/domain/slug",
      domain_index_rule: "[[domain/INDEX]] resolves to https://finwiki.zksc.io/domain/INDEX",
      root_readme_note: "README is available as https://finwiki.zksc.io/README.md on GitHub Pages.",
      source_fallback: "Every entry also has a GitHub blob URL in ai-index.json.",
    },
    domains,
    entries: entries.map((entry) => ({ ...entry })),
  };
}

async function writeText(outDir: string, relPath: string, text: string): Promise<void> {
  const fullPath = pathPosix.join(outDir, relPath);
  await mkdir(pathPosix.dirname(fullPath), { recursive: true });
  await writeFile(fullPath, text, "utf8");
}

async function writeRobots(model: Model, outDir: string): Promise<void> {
  const nav = model.navigation;
  const lines = [
    "# Generated by tools/generate_ai_discovery.ts",
    "# FinWiki is a public knowledge base designed for AI / LLM consumption.",
    "# All bots explicitly welcome; per-bot Allow is for clarity, not differentiation.",
    "",
    "User-agent: *",
    "Allow: /",
    "",
  ];
  for (const bot of AI_BOTS) {
    lines.push(`User-agent: ${bot}`);
    lines.push("Allow: /");
    lines.push("");
  }
  lines.push(`Sitemap: ${String(nav.sitemap)}`);
  lines.push(`# LLM guide: ${String(nav.llms)}`);
  lines.push(`# LLM task guide: ${SITE_URL}llms-tasks.txt`);
  lines.push(`# LLM full manifest: ${String(nav.llms_full)}`);
  lines.push(`# Machine index: ${String(nav.ai_index_json)}`);
  lines.push(`# Per-entry JSON API: ${SITE_URL}api/entries/index.json`);
  lines.push("");
  await writeText(outDir, "robots.txt", lines.join("\n"));
}

async function writeSitemap(model: Model, outDir: string): Promise<void> {
  const entries = model.entries;
  const generatedDate = String(model.generated_at).slice(0, 10);
  const urls = [
    {
      loc: SITE_URL.replace(/\/$/, "") + "/",
      lastmod: generatedDate,
      priority: "1.0",
      changefreq: "daily",
    },
    ...entries.map((entry) => ({
      loc: String(entry.url),
      lastmod: String(entry.last_modified),
      priority: entry.entry_type === "wiki_entry" ? "0.7" : "0.6",
      changefreq: "weekly",
    })),
  ];

  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  for (const item of urls) {
    lines.push("  <url>");
    lines.push(`    <loc>${xmlEscape(item.loc)}</loc>`);
    lines.push(`    <lastmod>${item.lastmod}</lastmod>`);
    lines.push(`    <changefreq>${item.changefreq}</changefreq>`);
    lines.push(`    <priority>${item.priority}</priority>`);
    lines.push("  </url>");
  }
  lines.push("</urlset>");
  await writeText(outDir, "sitemap.xml", `${lines.join("\n")}\n`);
}

async function writeLlms(model: Model, outDir: string): Promise<void> {
  const counts = model.counts;
  const nav = model.navigation;
  const lines = [
    "# FinWiki",
    "",
    "> Public trilingual finance knowledge base covering finance, payments, stablecoins, crypto assets, Japanese financial institutions, policy finance, capital markets, systems, security, and adjacent industries.",
    "",
    "## Best Entry Points",
    "",
    `- Human homepage: ${String(nav.human_homepage)}`,
    `- Global index: ${String(nav.global_index)}`,
    `- Task-oriented LLM entry guide (16 research tasks): ${SITE_URL}llms-tasks.txt`,
    `- Machine JSON index: ${String(nav.ai_index_json)}`,
    `- Per-entry JSON API (1 file per entry, frontmatter + summary + links + inbound count): ${SITE_URL}api/entries/index.json`,
    `- Full LLM page manifest: ${String(nav.llms_full)}`,
    `- Reader-profile navigation guide: ${SITE_URL}HOW-TO-NAVIGATE`,
    `- Topic cluster reference (14 thematic clusters): ${SITE_URL}topic-cluster-reference`,
    `- Domain bridge navigation guide (14 reader journeys): ${SITE_URL}domain-bridge-navigation-guide`,
    `- XML sitemap: ${String(nav.sitemap)}`,
    "",
    "## Current Snapshot",
    "",
    `- Markdown files: ${String(counts.markdown_files)}`,
    `- Public Markdown pages in machine manifest: ${String(counts.public_markdown_pages)}`,
    `- Topical domains: ${String(counts.topical_domains)}`,
    `- Link-audited entries: ${String(counts.link_audited_entries)}`,
    `- Unresolved link issues: ${String(counts.unresolved_link_issues)}`,
    `- Non-space UTF-8 characters across Markdown: ${Number(counts.nonspace_utf8_chars).toLocaleString("en-US")}`,
    `- Word-like tokens: ${Number(counts.word_like_tokens).toLocaleString("en-US")}`,
    "",
    "## URL Rules for AI Readers",
    "",
    "- Obsidian wikilinks are vault-root paths. Resolve `[[fintech/mica-overview]]` as `https://finwiki.zksc.io/fintech/mica-overview` (no `.md` suffix - GitHub Pages strips it).",
    "- Resolve `[[domain/INDEX]]` as `https://finwiki.zksc.io/domain/INDEX`.",
    "- Do NOT append `.md` to URLs - `https://finwiki.zksc.io/fintech/circle-usdc-stablecoin.md` returns 404. Use the extensionless URL or fetch raw markdown from `https://raw.githubusercontent.com/jasonhnd/finwiki/main/<domain>/<slug>.md`.",
    "- For a single entry's metadata in one request (frontmatter / summary / headings / wikilinks / inbound count), fetch `https://finwiki.zksc.io/api/entries/<domain>/<slug>.json`.",
    "- If you already have the rendered HTML in context, frontmatter is also embedded in the page `<head>` as: (a) schema.org Article JSON-LD with `keywords` / `alternateName` / `citation` / `additionalProperty`, (b) `<meta name=\"finwiki:*\">` tags (`domain`, `tags`, `aliases`, `sources`, `confidence`, `status`, `last_updated`, `review_by`), (c) `<link rel=\"alternate\" type=\"application/json\">` to the per-entry API and `<link rel=\"alternate\" type=\"text/markdown\">` to the raw source.",
    "- For programmatic traversal of every entry, prefer `ai-index.json`. For a compact text scan of every entry's title + summary + headings + wikilinks, prefer `llms-full.txt`.",
    "- For research tasks ('how do I find entries about X?'), start at `llms-tasks.txt` - 16 common tasks each with a start file + bedrock follow-ups + matrix anchor.",
    "",
    "## Domains",
    "",
  ];
  for (const domain of model.domains) {
    lines.push(`- ${String(domain.domain)} (${String(domain.entries)} entries): ${String(domain.url)} - ${String(domain.scope)}`);
  }
  lines.push("");
  lines.push("## Safety");
  lines.push("");
  lines.push("- FinWiki is public-source only. Do not infer private facts from this site.");
  lines.push("- Treat pages as research notes and verify cited public sources for high-stakes use.");
  lines.push("");
  await writeText(outDir, "llms.txt", lines.join("\n"));
}

async function writeLlmsFull(model: Model, outDir: string): Promise<void> {
  const counts = model.counts;
  const lines = [
    "# FinWiki Full LLM Manifest",
    "",
    `Generated: ${String(model.generated_at)}`,
    `Site: ${SITE_URL.replace(/\/$/, "")}`,
    `Markdown files: ${String(counts.markdown_files)}`,
    `Public pages listed: ${String(counts.public_markdown_pages)}`,
    "",
    "## Reading Rules",
    "",
    "- Start with `/llms.txt`, `/ai-index.json`, or `/INDEX`.",
    "- Convert `[[path/to-page]]` to `https://finwiki.zksc.io/path/to-page`.",
    "- Use `github_url` when raw source is needed.",
    "",
    "## Pages",
    "",
  ];
  for (const entry of model.entries) {
    lines.push(`### ${String(entry.title)}`);
    lines.push(`- URL: ${String(entry.url)}`);
    lines.push(`- Source path: ${String(entry.source_path)}`);
    lines.push(`- GitHub source: ${String(entry.github_url)}`);
    lines.push(`- Domain: ${String(entry.domain)}`);
    lines.push(`- Type: ${String(entry.entry_type)}`);
    if (entry.summary) lines.push(`- Summary: ${String(entry.summary)}`);
    if (Array.isArray(entry.headings) && entry.headings.length > 0) {
      lines.push(`- Headings: ${entry.headings.slice(0, 8).join(", ")}`);
    }
    if (Array.isArray(entry.resolved_wikilinks) && entry.resolved_wikilinks.length > 0) {
      lines.push(`- First resolved wikilinks: ${entry.resolved_wikilinks.slice(0, 12).join(", ")}`);
    }
    lines.push("");
  }
  await writeText(outDir, "llms-full.txt", lines.join("\n"));
}

async function writeAiIndex(model: Model, outDir: string): Promise<void> {
  await writeText(outDir, "ai-index.json", `${JSON.stringify(model, null, 2)}\n`);
}

async function writeApiEntries(model: Model, options: CliOptions): Promise<number> {
  const entries = model.entries;
  const inbound = new Map<string, number>();
  for (const entry of entries) {
    const resolved = Array.isArray(entry.resolved_wikilinks) ? entry.resolved_wikilinks : [];
    for (const url of resolved) {
      const slug = String(url).replace(SITE_URL, "");
      inbound.set(slug, (inbound.get(slug) ?? 0) + 1);
    }
  }

  let written = 0;
  for (const entry of entries) {
    const sourcePath = String(entry.source_path);
    if (!sourcePath.includes("/")) continue;
    if (sourcePath.startsWith("releases/") || sourcePath.startsWith(".templates/")) continue;

    const text = await readTextUtf8(pathPosix.join(options.rootDir, sourcePath));
    const fm = extractFrontmatter(text);
    const slug = sourcePath.endsWith(".md") ? sourcePath.slice(0, -3) : sourcePath;
    const record = {
      schema_version: "1.0",
      slug,
      source_path: sourcePath,
      url: String(entry.url),
      github_url: String(entry.github_url),
      raw_markdown_url: `https://raw.githubusercontent.com/jasonhnd/finwiki/main/${sourcePath}`,
      domain: String(entry.domain),
      title: String(entry.title),
      entry_type: String(entry.entry_type),
      frontmatter: {
        title: fm.title ?? null,
        aliases: Array.isArray(fm.aliases) ? fm.aliases : [],
        domain: fm.domain ?? null,
        created: fm.created ?? null,
        last_updated: fm.last_updated ?? null,
        last_tended: fm.last_tended ?? null,
        review_by: fm.review_by ?? null,
        confidence: fm.confidence ?? null,
        tags: Array.isArray(fm.tags) ? fm.tags : [],
        status: fm.status ?? null,
        sources: Array.isArray(fm.sources) ? fm.sources : [],
      },
      summary: String(entry.summary ?? ""),
      headings: Array.isArray(entry.headings) ? entry.headings : [],
      body_links: {
        wikilinks_count: Array.isArray(entry.wikilinks) ? entry.wikilinks.length : 0,
        wikilinks: Array.isArray(entry.wikilinks) ? entry.wikilinks.slice(0, 80) : [],
        resolved_wikilinks: Array.isArray(entry.resolved_wikilinks) ? entry.resolved_wikilinks : [],
        external_links_count: Array.isArray(entry.markdown_links) ? entry.markdown_links.length : 0,
        external_links: Array.isArray(entry.markdown_links) ? entry.markdown_links.slice(0, 40) : [],
      },
      metrics: {
        nonspace_chars: Number(entry.nonspace_chars),
        word_like_tokens: Number(entry.word_like_tokens),
        inbound_wikilinks_count: inbound.get(slug) ?? 0,
        last_modified: String(entry.last_modified),
      },
    };
    await writeText(options.outDir, `api/entries/${slug}.json`, `${JSON.stringify(record, null, 2)}\n`);
    written += 1;
  }

  const indexRecords = [];
  for (const entry of entries) {
    const sourcePath = String(entry.source_path);
    if (!sourcePath.includes("/")) continue;
    if (sourcePath.startsWith("releases/") || sourcePath.startsWith(".templates/")) continue;
    const slug = sourcePath.endsWith(".md") ? sourcePath.slice(0, -3) : sourcePath;
    indexRecords.push({
      slug,
      domain: String(entry.domain),
      title: String(entry.title),
      api_url: siteUrl(`api/entries/${slug}.json`),
      html_url: String(entry.url),
    });
  }
  const apiIndexGeneratedAt = options.apiIndexGeneratedAt ?? options.generatedAt ?? formatJstIsoSeconds();
  await writeText(
    options.outDir,
    "api/entries/index.json",
    `${JSON.stringify(
      {
        schema_version: "1.0",
        generated_at: apiIndexGeneratedAt,
        site_url: SITE_URL,
        total_entries: indexRecords.length,
        entries: indexRecords,
      },
      null,
      2,
    )}\n`,
  );
  return written;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const model = await buildModel(options);
  await writeRobots(model, options.outDir);
  await writeSitemap(model, options.outDir);
  await writeLlms(model, options.outDir);
  await writeLlmsFull(model, options.outDir);
  await writeAiIndex(model, options.outDir);
  const apiCount = await writeApiEntries(model, options);
  const counts = model.counts;
  console.log(
    "generated " +
      `markdown_files=${String(counts.markdown_files)} ` +
      `public_pages=${String(counts.public_markdown_pages)} ` +
      `sitemap_urls=${String(counts.site_urls_in_sitemap)} ` +
      `domains=${String(counts.topical_domains)} ` +
      `link_audited_entries=${String(counts.link_audited_entries)} ` +
      `api_entries=${apiCount}`,
  );
}

await main();
