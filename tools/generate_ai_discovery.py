#!/usr/bin/env python3
"""Generate public crawler and LLM discovery files for FinWiki."""

from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass
from datetime import datetime
from html import escape
from pathlib import Path
from typing import Iterable

try:
    from zoneinfo import ZoneInfo
except ImportError:  # pragma: no cover - Python 3.8 fallback only.
    ZoneInfo = None


ROOT = Path(__file__).resolve().parents[1]
SITE_URL = "https://finwiki.zksc.io/"
GITHUB_BLOB = "https://github.com/jasonhnd/finwiki/blob/main/"

CONTROL_DOCS = {
    "README.md",
    "CHANGELOG.md",
    "AGENTS.md",
    "SCHEMA.md",
    "OBSIDIAN-SETUP.md",
    "wiki-link-improvement-plan.md",
    "INDEX.md",
}

OUTPUT_FILES = {
    "robots.txt",
    "sitemap.xml",
    "llms.txt",
    "llms-full.txt",
    "ai-index.json",
}

WIKILINK_RE = re.compile(r"\[\[([^\]]+)\]\]")
MARKDOWN_LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
HEADING_RE = re.compile(r"^(#{1,3})\s+(.+?)\s*$")


@dataclass(frozen=True)
class Entry:
    source_path: str
    url: str
    github_url: str
    title: str
    domain: str
    entry_type: str
    summary: str
    headings: list[str]
    wikilinks: list[str]
    resolved_wikilinks: list[str]
    markdown_links: list[str]
    nonspace_chars: int
    word_like_tokens: int
    last_modified: str


def now_jst() -> datetime:
    if ZoneInfo is None:
        return datetime.now().astimezone()
    return datetime.now(ZoneInfo("Asia/Tokyo"))


def site_url(path: str = "") -> str:
    return SITE_URL + path.lstrip("/")


def iter_markdown_files() -> Iterable[Path]:
    for path in ROOT.rglob("*.md"):
        rel = path.relative_to(ROOT)
        if ".git" in rel.parts:
            continue
        yield path


def is_public_page(path: Path) -> bool:
    rel = path.relative_to(ROOT)
    return not any(part.startswith(".") for part in rel.parts)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def public_url_for(rel: str) -> str:
    if rel == "README.md":
        return site_url("README.md")
    if rel.endswith(".md"):
        rel = rel[:-3]
    return site_url(rel)


def github_url_for(rel: str) -> str:
    return GITHUB_BLOB + rel


def wikilink_to_url(target: str) -> str:
    target = target.split("|", 1)[0].split("#", 1)[0].strip()
    if not target:
        return ""
    if target == "README":
        return site_url("README.md")
    if target.endswith(".md"):
        target = target[:-3]
    return site_url(target)


def strip_frontmatter(text: str) -> str:
    if not text.startswith("---\n"):
        return text
    end = text.find("\n---", 4)
    if end == -1:
        return text
    return text[end + 4 :].lstrip()


def extract_frontmatter(text: str) -> dict[str, object]:
    """Parse YAML frontmatter to a flat dict.

    Permissive line-oriented parser — handles the simple key/value, inline
    list (key: [a, b, c]), and block-list (key:\\n  - a\\n  - b) shapes used
    across the FinWiki corpus. Not a full YAML parser; rejects nested maps.
    Returns {} when frontmatter is absent or malformed.
    """
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---", 4)
    if end == -1:
        return {}
    block = text[4:end]
    result: dict[str, object] = {}
    current_key: str | None = None
    current_list: list[str] | None = None
    for raw in block.split("\n"):
        if not raw.strip():
            continue
        if raw.startswith("  - ") or raw.startswith("- "):
            value = raw.lstrip(" -").strip().strip('"').strip("'")
            if current_list is not None:
                current_list.append(value)
            continue
        if ":" not in raw:
            continue
        key, _, value = raw.partition(":")
        key = key.strip()
        value = value.strip()
        if not value:
            current_list = []
            result[key] = current_list
            current_key = key
            continue
        if value.startswith("[") and value.endswith("]"):
            items = [
                item.strip().strip('"').strip("'")
                for item in value[1:-1].split(",")
                if item.strip()
            ]
            result[key] = items
            current_list = None
            current_key = key
            continue
        result[key] = value.strip('"').strip("'")
        current_list = None
        current_key = key
    return result


def strip_inline_markdown(text: str) -> str:
    text = WIKILINK_RE.sub(lambda match: match.group(1).split("|", 1)[-1], text)
    text = MARKDOWN_LINK_RE.sub(lambda match: match.group(1), text)
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = re.sub(r"[*_]{1,3}([^*_]+)[*_]{1,3}", r"\1", text)
    return re.sub(r"\s+", " ", text).strip()


def is_cjk_or_kana(ch: str) -> bool:
    if ch in "ー々〆〤":
        return True
    name = unicodedata.name(ch, "")
    return (
        "CJK UNIFIED IDEOGRAPH" in name
        or "CJK COMPATIBILITY IDEOGRAPH" in name
        or "HIRAGANA" in name
        or "KATAKANA" in name
    )


def count_word_like_tokens(text: str) -> int:
    count = 0
    mode: str | None = None
    for ch in text:
        next_mode: str | None
        if ch.isascii() and ch.isalnum():
            next_mode = "ascii"
        elif is_cjk_or_kana(ch):
            next_mode = "cjk"
        else:
            next_mode = None
        if next_mode is None:
            mode = None
            continue
        if next_mode != mode:
            count += 1
            mode = next_mode
    return count


def extract_title(rel: str, text: str) -> str:
    for line in strip_frontmatter(text).splitlines():
        if line.startswith("# "):
            return strip_inline_markdown(line[2:].strip())
    return Path(rel).stem.replace("-", " ").replace("_", " ").title()


def extract_summary(text: str) -> str:
    body = strip_frontmatter(text)
    paragraphs: list[str] = []
    current: list[str] = []
    in_fence = False
    for line in body.splitlines():
        stripped = line.strip()
        if stripped.startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        if not stripped:
            if current:
                paragraphs.append(" ".join(current))
                current = []
            continue
        if stripped.startswith(("#", "|", ">", "-", "*", "<")):
            continue
        current.append(stripped)
    if current:
        paragraphs.append(" ".join(current))

    for paragraph in paragraphs:
        summary = strip_inline_markdown(paragraph)
        if len(summary) >= 40:
            return summary[:300].rstrip()
    return ""


def extract_headings(text: str) -> list[str]:
    headings: list[str] = []
    for line in strip_frontmatter(text).splitlines():
        match = HEADING_RE.match(line)
        if match:
            headings.append(strip_inline_markdown(match.group(2)))
        if len(headings) >= 10:
            break
    return headings


def extract_wikilinks(text: str) -> list[str]:
    links = {
        match.group(1).split("|", 1)[0].split("#", 1)[0].strip()
        for match in WIKILINK_RE.finditer(text)
    }
    return sorted(link for link in links if link)


def extract_markdown_links(text: str) -> list[str]:
    links = {
        match.group(2).strip()
        for match in MARKDOWN_LINK_RE.finditer(text)
        if match.group(2).strip() and not match.group(2).startswith("#")
    }
    return sorted(links)[:40]


def entry_type_for(rel: str) -> str:
    if rel in CONTROL_DOCS:
        return "control_doc"
    if rel.startswith("releases/"):
        return "release_note"
    if rel.endswith("/INDEX.md"):
        return "domain_index"
    return "wiki_entry"


def domain_for(rel: str) -> str:
    parts = rel.split("/")
    if len(parts) == 1:
        return "root"
    return parts[0]


def last_modified_for(path: Path) -> str:
    return datetime.fromtimestamp(path.stat().st_mtime).date().isoformat()


def build_entry(path: Path) -> Entry:
    rel = path.relative_to(ROOT).as_posix()
    text = read_text(path)
    wikilinks = extract_wikilinks(text)
    return Entry(
        source_path=rel,
        url=public_url_for(rel),
        github_url=github_url_for(rel),
        title=extract_title(rel, text),
        domain=domain_for(rel),
        entry_type=entry_type_for(rel),
        summary=extract_summary(text),
        headings=extract_headings(text),
        wikilinks=wikilinks,
        resolved_wikilinks=[wikilink_to_url(link) for link in wikilinks[:80]],
        markdown_links=extract_markdown_links(text),
        nonspace_chars=len(re.sub(r"\s+", "", text)),
        word_like_tokens=count_word_like_tokens(text),
        last_modified=last_modified_for(path),
    )


def parse_domain_map() -> list[dict[str, object]]:
    index = read_text(ROOT / "INDEX.md")
    domains: list[dict[str, object]] = []
    for line in index.splitlines():
        if not line.startswith("|"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if len(cells) < 4 or cells[0] in {"Domain", "---"}:
            continue
        if not cells[1].replace(",", "").isdigit():
            continue
        route_match = WIKILINK_RE.search(cells[2])
        route = route_match.group(1).split("|", 1)[0] if route_match else cells[2]
        domains.append(
            {
                "domain": cells[0],
                "entries": int(cells[1].replace(",", "")),
                "route": route,
                "url": wikilink_to_url(route),
                "scope": strip_inline_markdown(cells[3]),
            }
        )
    return domains


def parse_audit_summary() -> dict[str, int]:
    report = ROOT / "wiki-link-improvement-plan.md"
    if not report.exists():
        return {}
    metrics: dict[str, int] = {}
    for line in read_text(report).splitlines():
        if not line.startswith("|"):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if len(cells) != 2 or cells[0] in {"Metric", "---"}:
            continue
        if cells[1].replace(",", "").isdigit():
            key = cells[0].lower().replace(" ", "_").replace("/", "_")
            metrics[key] = int(cells[1].replace(",", ""))
    return metrics


def build_model() -> dict[str, object]:
    all_md = sorted(iter_markdown_files(), key=lambda p: p.relative_to(ROOT).as_posix())
    public_md = [path for path in all_md if is_public_page(path)]
    entries = [build_entry(path) for path in public_md]
    all_text = "\n".join(read_text(path) for path in all_md)
    audit = parse_audit_summary()
    domains = parse_domain_map()
    generated_at = now_jst().isoformat(timespec="seconds")

    return {
        "site": SITE_URL.rstrip("/"),
        "generated_at": generated_at,
        "counts": {
            "markdown_files": len(all_md),
            "public_markdown_pages": len(public_md),
            "site_urls_in_sitemap": len(entries) + 1,
            "topical_domains": len(domains),
            "link_audited_entries": audit.get("entries_checked"),
            "entries_with_any_issue": audit.get("entries_with_any_issue"),
            "unresolved_link_issues": audit.get("entries_with_any_issue"),
            "nonspace_utf8_chars": len(re.sub(r"\s+", "", all_text)),
            "word_like_tokens": count_word_like_tokens(all_text),
        },
        "navigation": {
            "human_homepage": site_url(),
            "global_index": site_url("INDEX"),
            "global_index_markdown": site_url("INDEX.md"),
            "llms": site_url("llms.txt"),
            "llms_full": site_url("llms-full.txt"),
            "ai_index_json": site_url("ai-index.json"),
            "sitemap": site_url("sitemap.xml"),
            "robots": site_url("robots.txt"),
            "github_repository": "https://github.com/jasonhnd/finwiki",
        },
        "url_rules": {
            "wikilink_rule": "[[domain/slug]] resolves to https://finwiki.zksc.io/domain/slug",
            "domain_index_rule": "[[domain/INDEX]] resolves to https://finwiki.zksc.io/domain/INDEX",
            "root_readme_note": "README is available as https://finwiki.zksc.io/README.md on GitHub Pages.",
            "source_fallback": "Every entry also has a GitHub blob URL in ai-index.json.",
        },
        "domains": domains,
        "entries": [entry.__dict__ for entry in entries],
    }


def write_robots(model: dict[str, object]) -> None:
    nav = model["navigation"]
    text = "\n".join(
        [
            "# Generated by tools/generate_ai_discovery.py",
            "User-agent: *",
            "Allow: /",
            "",
            f"Sitemap: {nav['sitemap']}",
            f"# LLM guide: {nav['llms']}",
            f"# Machine index: {nav['ai_index_json']}",
            "",
        ]
    )
    (ROOT / "robots.txt").write_text(text, encoding="utf-8")


def write_sitemap(model: dict[str, object]) -> None:
    entries = model["entries"]
    generated_date = str(model["generated_at"])[:10]
    urls = [
        {
            "loc": SITE_URL.rstrip("/") + "/",
            "lastmod": generated_date,
            "priority": "1.0",
            "changefreq": "daily",
        }
    ]
    urls.extend(
        {
            "loc": entry["url"],
            "lastmod": entry["last_modified"],
            "priority": "0.7" if entry["entry_type"] == "wiki_entry" else "0.6",
            "changefreq": "weekly",
        }
        for entry in entries
    )

    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for item in urls:
        lines.append("  <url>")
        lines.append(f"    <loc>{escape(item['loc'])}</loc>")
        lines.append(f"    <lastmod>{item['lastmod']}</lastmod>")
        lines.append(f"    <changefreq>{item['changefreq']}</changefreq>")
        lines.append(f"    <priority>{item['priority']}</priority>")
        lines.append("  </url>")
    lines.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_llms(model: dict[str, object]) -> None:
    counts = model["counts"]
    nav = model["navigation"]
    lines = [
        "# FinWiki",
        "",
        "> Public trilingual finance knowledge base covering finance, payments, stablecoins, crypto assets, Japanese financial institutions, policy finance, capital markets, systems, security, and adjacent industries.",
        "",
        "## Best Entry Points",
        "",
        f"- Human homepage: {nav['human_homepage']}",
        f"- Global index: {nav['global_index']}",
        f"- Machine JSON index: {nav['ai_index_json']}",
        f"- Full LLM page manifest: {nav['llms_full']}",
        f"- XML sitemap: {nav['sitemap']}",
        "",
        "## Current Snapshot",
        "",
        f"- Markdown files: {counts['markdown_files']}",
        f"- Public Markdown pages in machine manifest: {counts['public_markdown_pages']}",
        f"- Topical domains: {counts['topical_domains']}",
        f"- Link-audited entries: {counts['link_audited_entries']}",
        f"- Unresolved link issues: {counts['unresolved_link_issues']}",
        f"- Non-space UTF-8 characters across Markdown: {counts['nonspace_utf8_chars']:,}",
        f"- Word-like tokens: {counts['word_like_tokens']:,}",
        "",
        "## URL Rules for AI Readers",
        "",
        "- Obsidian wikilinks are vault-root paths. Resolve `[[fintech/mica-overview]]` as `https://finwiki.zksc.io/fintech/mica-overview`.",
        "- Resolve `[[domain/INDEX]]` as `https://finwiki.zksc.io/domain/INDEX`.",
        "- If a rendered page is not available, use the `github_url` field in `ai-index.json` as the source fallback.",
        "- Prefer `ai-index.json` for programmatic traversal and `llms-full.txt` for a compact text manifest.",
        "",
        "## Domains",
        "",
    ]
    for domain in model["domains"]:
        lines.append(
            f"- {domain['domain']} ({domain['entries']} entries): {domain['url']} - {domain['scope']}"
        )
    lines.append("")
    lines.append("## Safety")
    lines.append("")
    lines.append("- FinWiki is public-source only. Do not infer private facts from this site.")
    lines.append("- Treat pages as research notes and verify cited public sources for high-stakes use.")
    lines.append("")
    (ROOT / "llms.txt").write_text("\n".join(lines), encoding="utf-8")


def write_llms_full(model: dict[str, object]) -> None:
    counts = model["counts"]
    lines = [
        "# FinWiki Full LLM Manifest",
        "",
        f"Generated: {model['generated_at']}",
        f"Site: {SITE_URL.rstrip('/')}",
        f"Markdown files: {counts['markdown_files']}",
        f"Public pages listed: {counts['public_markdown_pages']}",
        "",
        "## Reading Rules",
        "",
        "- Start with `/llms.txt`, `/ai-index.json`, or `/INDEX`.",
        "- Convert `[[path/to-page]]` to `https://finwiki.zksc.io/path/to-page`.",
        "- Use `github_url` when raw source is needed.",
        "",
        "## Pages",
        "",
    ]
    for entry in model["entries"]:
        lines.append(f"### {entry['title']}")
        lines.append(f"- URL: {entry['url']}")
        lines.append(f"- Source path: {entry['source_path']}")
        lines.append(f"- GitHub source: {entry['github_url']}")
        lines.append(f"- Domain: {entry['domain']}")
        lines.append(f"- Type: {entry['entry_type']}")
        if entry["summary"]:
            lines.append(f"- Summary: {entry['summary']}")
        if entry["headings"]:
            lines.append(f"- Headings: {', '.join(entry['headings'][:8])}")
        if entry["resolved_wikilinks"]:
            lines.append(f"- First resolved wikilinks: {', '.join(entry['resolved_wikilinks'][:12])}")
        lines.append("")
    (ROOT / "llms-full.txt").write_text("\n".join(lines), encoding="utf-8")


def write_ai_index(model: dict[str, object]) -> None:
    (ROOT / "ai-index.json").write_text(
        json.dumps(model, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def write_api_entries(model: dict[str, object]) -> int:
    """Write one JSON per entry under api/entries/<domain>/<slug>.json.

    Each file is a self-contained record so an AI agent can fetch a single
    entry's metadata without parsing the full ai-index.json or rendering the
    markdown HTML.
    """
    entries = model["entries"]
    assert isinstance(entries, list)

    # Build inbound-link index: for each entry source_path, count how many
    # other entries' resolved wikilinks point to it.
    inbound: dict[str, int] = {}
    for entry in entries:
        for resolved in entry.get("resolved_wikilinks", []) or []:
            slug = resolved.replace(SITE_URL, "")
            inbound[slug] = inbound.get(slug, 0) + 1

    api_root = ROOT / "api" / "entries"
    written = 0
    for entry in entries:
        source_path = entry["source_path"]
        # Only build per-entry JSON for domain entries (skip root control
        # docs, release notes, and templates — these are already in
        # ai-index.json and don't need individual API records).
        if "/" not in source_path:
            continue
        if source_path.startswith("releases/") or source_path.startswith(".templates/"):
            continue
        if source_path.endswith("/INDEX.md"):
            # Domain INDEX still gets a record — useful for AI agents to fetch
            # a single domain's structure.
            pass

        path = ROOT / source_path
        if not path.exists():
            continue
        text = read_text(path)
        fm = extract_frontmatter(text)

        slug = source_path.removesuffix(".md")
        out_path = api_root / f"{slug}.json"
        out_path.parent.mkdir(parents=True, exist_ok=True)

        record = {
            "schema_version": "1.0",
            "slug": slug,
            "source_path": source_path,
            "url": entry["url"],
            "github_url": entry["github_url"],
            "raw_markdown_url": (
                f"https://raw.githubusercontent.com/jasonhnd/finwiki/main/{source_path}"
            ),
            "domain": entry["domain"],
            "title": entry["title"],
            "entry_type": entry["entry_type"],
            "frontmatter": {
                "title": fm.get("title"),
                "aliases": fm.get("aliases") if isinstance(fm.get("aliases"), list) else [],
                "domain": fm.get("domain"),
                "created": fm.get("created"),
                "last_updated": fm.get("last_updated"),
                "last_tended": fm.get("last_tended"),
                "review_by": fm.get("review_by"),
                "confidence": fm.get("confidence"),
                "tags": fm.get("tags") if isinstance(fm.get("tags"), list) else [],
                "status": fm.get("status"),
                "sources": fm.get("sources") if isinstance(fm.get("sources"), list) else [],
            },
            "summary": entry["summary"],
            "headings": entry["headings"],
            "body_links": {
                "wikilinks_count": len(entry["wikilinks"]),
                "wikilinks": entry["wikilinks"][:80],
                "resolved_wikilinks": entry["resolved_wikilinks"],
                "external_links_count": len(entry["markdown_links"]),
                "external_links": entry["markdown_links"][:40],
            },
            "metrics": {
                "nonspace_chars": entry["nonspace_chars"],
                "word_like_tokens": entry["word_like_tokens"],
                "inbound_wikilinks_count": inbound.get(slug, 0),
                "last_modified": entry["last_modified"],
            },
        }
        out_path.write_text(
            json.dumps(record, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        written += 1

    # Write a top-level api/entries/index.json that lists every per-entry
    # JSON URL so an AI agent can discover what API records exist.
    index_records = []
    for entry in entries:
        source_path = entry["source_path"]
        if "/" not in source_path:
            continue
        if source_path.startswith("releases/") or source_path.startswith(".templates/"):
            continue
        slug = source_path.removesuffix(".md")
        index_records.append(
            {
                "slug": slug,
                "domain": entry["domain"],
                "title": entry["title"],
                "api_url": site_url(f"api/entries/{slug}.json"),
                "html_url": entry["url"],
            }
        )
    (api_root / "index.json").write_text(
        json.dumps(
            {
                "schema_version": "1.0",
                "generated_at": now_jst().strftime("%Y-%m-%dT%H:%M:%S+09:00"),
                "site_url": SITE_URL,
                "total_entries": len(index_records),
                "entries": index_records,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    return written


def main() -> None:
    model = build_model()
    write_robots(model)
    write_sitemap(model)
    write_llms(model)
    write_llms_full(model)
    write_ai_index(model)
    api_count = write_api_entries(model)
    counts = model["counts"]
    print(
        "generated "
        f"markdown_files={counts['markdown_files']} "
        f"public_pages={counts['public_markdown_pages']} "
        f"sitemap_urls={counts['site_urls_in_sitemap']} "
        f"domains={counts['topical_domains']} "
        f"link_audited_entries={counts['link_audited_entries']} "
        f"api_entries={api_count}"
    )


if __name__ == "__main__":
    main()
