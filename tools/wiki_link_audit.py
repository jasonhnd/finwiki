#!/usr/bin/env python3
"""Audit FinWiki internal-link quality.

The audit distinguishes all wikilinks from "body" wikilinks. Links in
frontmatter, Related, and Sources are useful, but they do not prove that the
entry itself is readable as a connected wiki node.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable


ROOT = Path(__file__).resolve().parents[1]

IGNORED_DIRS = {
    ".git",
    ".templates",
    ".opinions",
    "releases",
    "tools",
    "site",
    "app",
    ".vercel",
    "_site",
    "_vercel_public",
}

CONTROL_DOCS = {
    "README.md",
    "CHANGELOG.md",
    "AGENTS.md",
    "SCHEMA.md",
    "OBSIDIAN-SETUP.md",
    "wiki-link-improvement-plan.md",
}

SYSTEM_KEYWORDS = (
    "act",
    "boundary",
    "clearing",
    "framework",
    "index",
    "law",
    "license",
    "market",
    "policy",
    "regulation",
    "registry",
    "rule",
    "settlement",
    "system",
)

DOMAIN_SYSTEM_CANDIDATES = {
    "JapanFG": [
        "JapanFG/INDEX",
        "banking/INDEX",
        "securities/INDEX",
        "payments/INDEX",
        "insurance/INDEX",
        "policy-finance/INDEX",
        "JapanFG/legal-financial-licenses/INDEX",
    ],
    "banking": [
        "banking/INDEX",
        "banking/cooperative-banking-japan",
        "banking/regional-bank-consolidation-pattern",
    ],
    "payments": [
        "payments/INDEX",
        "payments/funds-transfer-vs-prepaid-boundary",
        "payments/card-acquiring-japan-stack",
        "fintech/japan-stablecoin-regulatory-landscape",
    ],
    "securities": [
        "securities/INDEX",
        "securities/financial-instruments-business-operators-japan-index",
        "JapanFG/legal-financial-licenses/INDEX",
    ],
    "policy-finance": [
        "policy-finance/INDEX",
        "policy-finance/japan-policy-finance-system",
        "banking/INDEX",
    ],
    "insurance": [
        "insurance/INDEX",
        "JapanFG/INDEX",
        "JapanFG/legal-financial-licenses/INDEX",
    ],
    "fintech": [
        "fintech/INDEX",
        "fintech/japan-financial-regulation",
        "fintech/japan-stablecoin-regulatory-landscape",
    ],
    "exchanges": [
        "exchanges/INDEX",
        "exchanges/fsa-vasp-registration-system",
        "fintech/japan-financial-regulation",
    ],
    "security": [
        "security/bytecode-forensic-three-tier-verify",
        "security/fork-and-rebrand-5-layer-audit-framework",
        "systems/INDEX",
    ],
    "finance": [
        "finance/INDEX",
        "securities/INDEX",
        "money-market/INDEX",
    ],
    "systems": [
        "systems/INDEX",
        "fintech/INDEX",
        "security/bytecode-forensic-three-tier-verify",
    ],
    "agent-economy": [
        "agent-economy/ai-agent-payment-protocols-overview",
        "payments/INDEX",
        "systems/INDEX",
        "fintech/INDEX",
    ],
    "business": [
        "business/gmo-internet-group",
        "fintech/INDEX",
        "systems/INDEX",
        "JapanFG/INDEX",
    ],
    "corporate-strategy": [
        "corporate-strategy/partial-spinoff-tax-deferral",
        "business/gmo-internet-group",
        "JapanFG/INDEX",
    ],
    "governance": [
        "governance/japan-general-foundation-establishment-requirements",
        "policy-finance/INDEX",
        "JapanFG/INDEX",
    ],
    "loyalty": [
        "loyalty/INDEX",
        "retail/INDEX",
        "payments/INDEX",
    ],
    "manufacturing": [
        "manufacturing/INDEX",
        "JapanFG/INDEX",
        "business/gmo-internet-group",
    ],
    "retail": [
        "retail/INDEX",
        "payments/INDEX",
        "loyalty/INDEX",
    ],
    "trade": [
        "trade/jetro-organization-structure",
        "policy-finance/INDEX",
        "JapanFG/INDEX",
    ],
}

_DOMAIN_ROUTES: dict[str, str] | None = None


@dataclass(frozen=True)
class WikiLink:
    raw: str
    target: str
    line: int
    resolved: str | None = None


@dataclass
class Entry:
    path: Path
    rel: str
    domain: str
    title: str
    aliases: list[str]
    tags: list[str]
    body: str
    core_body: str
    all_links: list[WikiLink] = field(default_factory=list)
    body_links: list[WikiLink] = field(default_factory=list)
    inlinks: int = 0
    git_state: str = ""

    @property
    def is_index(self) -> bool:
        return self.path.name == "INDEX.md"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--report", type=Path, help="Write a Markdown report")
    parser.add_argument("--json", type=Path, help="Write machine-readable JSON")
    parser.add_argument("--min-body-links", type=int, default=3)
    parser.add_argument(
        "--apply-scaffold",
        action="store_true",
        help="Insert a short body Wiki route section for entries below the body-link threshold",
    )
    parser.add_argument(
        "--fail-on-issues",
        action="store_true",
        help="Exit non-zero when any entry fails the body-link standard",
    )
    parser.add_argument(
        "--fail-on-low-body-links",
        action="store_true",
        help="Exit non-zero only when an entry has fewer than --min-body-links body wikilinks",
    )
    parser.add_argument(
        "--apply-semantic-scaffold",
        action="store_true",
        help="Insert or refresh Wiki route sections for entries missing route, peer, or system links",
    )
    return parser.parse_args()


def iter_markdown_files() -> Iterable[Path]:
    for path in ROOT.rglob("*.md"):
        rel_parts = path.relative_to(ROOT).parts
        if any(part in IGNORED_DIRS for part in rel_parts):
            continue
        if path.parent == ROOT and path.name in CONTROL_DOCS:
            continue
        yield path


def parse_frontmatter(text: str) -> tuple[dict[str, object], str]:
    if not text.startswith("---"):
        return {}, text
    match = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", text, flags=re.S)
    if not match:
        return {}, text
    frontmatter = match.group(1)
    body = text[match.end() :]
    data: dict[str, object] = {}
    current_key: str | None = None
    for line in frontmatter.splitlines():
        key_match = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if key_match:
            current_key = key_match.group(1)
            value = key_match.group(2).strip()
            data[current_key] = parse_value(value)
            continue
        list_match = re.match(r"^\s*-\s*(.*)$", line)
        if list_match and current_key:
            data.setdefault(current_key, [])
            if isinstance(data[current_key], list):
                data[current_key].append(strip_quotes(list_match.group(1).strip()))
    return data, body


def parse_value(value: str) -> object:
    if value == "":
        return []
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        return [strip_quotes(part.strip()) for part in inner.split(",")]
    return strip_quotes(value)


def strip_quotes(value: str) -> str:
    if (value.startswith('"') and value.endswith('"')) or (
        value.startswith("'") and value.endswith("'")
    ):
        return value[1:-1]
    return value


def core_body(body: str) -> str:
    stop = len(body)
    for marker in (r"^##\s+Related\b", r"^##\s+Sources\b", r"^##\s+Source\b"):
        match = re.search(marker, body, flags=re.M)
        if match:
            stop = min(stop, match.start())
    return body[:stop]


def extract_wikilinks(text: str) -> list[WikiLink]:
    links: list[WikiLink] = []
    in_fence = False
    for line_no, line in enumerate(text.splitlines(), 1):
        if re.match(r"^\s*(```|~~~)", line):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        search_line = re.sub(r"`[^`]*`", "", line)
        for raw in re.findall(r"\[\[([^\]]+)\]\]", search_line):
            target = raw.split("|", 1)[0].split("#", 1)[0].strip()
            # Markdown tables often escape Obsidian alias pipes as \| to avoid
            # splitting the table cell. The escape belongs to Markdown syntax,
            # not to the vault-root target path.
            target = target.rstrip("\\")
            if not target:
                continue
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            links.append(WikiLink(raw=raw, target=target, line=line_no))
    return links


def load_entries() -> dict[str, Entry]:
    entries: dict[str, Entry] = {}
    for path in sorted(iter_markdown_files()):
        text = path.read_text(encoding="utf-8", errors="replace")
        frontmatter, body = parse_frontmatter(text)
        rel = path.relative_to(ROOT).as_posix()
        domain = str(frontmatter.get("domain") or path.parts[-2])
        title = str(frontmatter.get("title") or path.stem)
        aliases = as_list(frontmatter.get("aliases"))
        tags = as_list(frontmatter.get("tags"))
        core = core_body(body)
        entry = Entry(
            path=path,
            rel=rel,
            domain=domain,
            title=title,
            aliases=aliases,
            tags=tags,
            body=body,
            core_body=core,
            all_links=extract_wikilinks(body),
            body_links=extract_wikilinks(core),
        )
        entries[rel] = entry
    return entries


def as_list(value: object) -> list[str]:
    if isinstance(value, list):
        return [str(item) for item in value if str(item)]
    if isinstance(value, str) and value:
        return [value]
    return []


def register_alias(alias_map: dict[str, str], key: str, rel: str) -> None:
    if not key:
        return
    alias_map.setdefault(key, rel)
    alias_map.setdefault(key.lower(), rel)


def build_alias_map(entries: dict[str, Entry]) -> dict[str, str]:
    alias_map: dict[str, str] = {}
    for rel, entry in entries.items():
        stem = Path(rel).stem
        register_alias(alias_map, stem, rel)
        register_alias(alias_map, rel.removesuffix(".md"), rel)
        register_alias(alias_map, entry.title, rel)
        for alias in entry.aliases:
            register_alias(alias_map, alias, rel)
    return alias_map


def resolve_link(entry: Entry, target: str, entries: dict[str, Entry], alias_map: dict[str, str]) -> str | None:
    normalized = target.removesuffix(".md")
    if (ROOT / target).is_file() or (ROOT / normalized).is_file():
        return normalized
    candidates: list[str] = []
    if "/" in normalized:
        candidates.extend([f"{normalized}.md", f"{normalized}/INDEX.md"])
    else:
        parent = entry.path.parent.relative_to(ROOT).as_posix()
        candidates.extend(
            [
                f"{parent}/{normalized}.md",
                f"{normalized}.md",
                f"{parent}/{normalized}/INDEX.md",
                f"{normalized}/INDEX.md",
            ]
        )
    for candidate in candidates:
        if candidate in entries:
            return candidate
        if (ROOT / candidate).is_file():
            return candidate
    return (
        alias_map.get(target)
        or alias_map.get(normalized)
        or alias_map.get(target.lower())
        or alias_map.get(normalized.lower())
        or alias_map.get(normalized.rsplit("/", 1)[-1].lower())
    )


def attach_resolved_links(entries: dict[str, Entry]) -> None:
    alias_map = build_alias_map(entries)
    for entry in entries.values():
        entry.all_links = [
            WikiLink(link.raw, link.target, link.line, resolve_link(entry, link.target, entries, alias_map))
            for link in entry.all_links
        ]
        entry.body_links = [
            WikiLink(link.raw, link.target, link.line, resolve_link(entry, link.target, entries, alias_map))
            for link in entry.body_links
        ]
    for entry in entries.values():
        for link in entry.all_links:
            if link.resolved and link.resolved in entries and link.resolved != entry.rel:
                entries[link.resolved].inlinks += 1


def attach_git_state(entries: dict[str, Entry]) -> None:
    try:
        status = subprocess.check_output(["git", "status", "--short"], cwd=ROOT, text=True)
    except Exception:
        return
    for line in status.splitlines():
        if not line.strip():
            continue
        state = line[:2].strip() or line[:2]
        rel = line[3:]
        if " -> " in rel:
            rel = rel.split(" -> ", 1)[1]
        if rel in entries:
            entries[rel].git_state = state


def domain_routes() -> dict[str, str]:
    global _DOMAIN_ROUTES
    if _DOMAIN_ROUTES is not None:
        return _DOMAIN_ROUTES
    routes: dict[str, str] = {}
    try:
        text = (ROOT / "INDEX.md").read_text(encoding="utf-8", errors="replace")
    except FileNotFoundError:
        _DOMAIN_ROUTES = routes
        return routes
    in_table = False
    for line in text.splitlines():
        if line.startswith("| Domain | Entries | Route |"):
            in_table = True
            continue
        if not in_table:
            continue
        if not line.startswith("|"):
            break
        if re.match(r"^\|[-: ]+\|", line):
            continue
        cells = [cell.strip() for cell in line.strip("|").split("|")]
        if len(cells) < 3:
            continue
        match = re.search(r"\[\[([^\]|#]+)", cells[2])
        if match:
            routes[cells[0]] = match.group(1).strip().removesuffix(".md")
    _DOMAIN_ROUTES = routes
    return routes


def unique_existing_candidates(
    candidates: list[str], entries: dict[str, Entry], entry: Entry
) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for candidate in candidates:
        normalized = candidate.removesuffix(".md")
        if normalized in seen:
            continue
        if normalized == entry.rel.removesuffix(".md"):
            seen.add(normalized)
            result.append(normalized)
            continue
        if candidate_exists(normalized, entries):
            seen.add(normalized)
            result.append(normalized)
    return result


def route_candidates(entry: Entry, entries: dict[str, Entry]) -> list[str]:
    candidates: list[str] = []
    index_route = domain_routes().get(entry.domain)
    if index_route:
        candidates.append(index_route)
    candidates.append(f"{entry.domain}/INDEX")
    candidates.extend(DOMAIN_SYSTEM_CANDIDATES.get(entry.domain, []))
    return unique_existing_candidates(candidates, entries, entry)


def link_matches_candidate(link: WikiLink, candidate: str) -> bool:
    normalized = candidate.removesuffix(".md")
    if link.target.removesuffix(".md") == normalized:
        return True
    if link.resolved and link.resolved.removesuffix(".md") == normalized:
        return True
    if normalized.endswith("/INDEX") and link.target.removesuffix(".md") == normalized[:-6]:
        return True
    return False


def has_route_link(entry: Entry, entries: dict[str, Entry]) -> bool:
    for candidate in route_candidates(entry, entries):
        if candidate == entry.rel.removesuffix(".md"):
            return True
        if any(link_matches_candidate(link, candidate) for link in entry.body_links):
            return True
    for link in entry.body_links:
        if not link.resolved:
            continue
        target = Path(link.resolved)
        if target.name == "INDEX.md":
            return True
        if target.parts and target.parts[0] == entry.domain and target.stem == "INDEX":
            return True
    return False


def has_peer_link(entry: Entry, entries: dict[str, Entry]) -> bool:
    for link in entry.body_links:
        if not link.resolved or link.resolved == entry.rel:
            continue
        target = Path(link.resolved)
        if target.parts and target.parts[0] == entry.domain and target.name != "INDEX.md":
            return True
    peer_count = sum(
        1
        for rel, other in entries.items()
        if rel != entry.rel and other.domain == entry.domain and not other.is_index
    )
    if peer_count == 0:
        return True
    return False


def has_system_link(entry: Entry) -> bool:
    for link in entry.body_links:
        if not link.resolved:
            continue
        target = Path(link.resolved)
        stem = target.stem.lower()
        if target.parts and target.parts[0] != entry.domain:
            return True
        if any(keyword in stem for keyword in SYSTEM_KEYWORDS):
            return True
    return False


def entry_status(entry: Entry, entries: dict[str, Entry], min_body_links: int) -> dict[str, object]:
    body_count = len(entry.body_links)
    has_h1 = bool(re.search(r"^#\s+.+", entry.body, flags=re.M))
    route = has_route_link(entry, entries)
    peer = has_peer_link(entry, entries)
    system = has_system_link(entry)
    dead_links = [
        {"raw": link.raw, "target": link.target, "line": link.line}
        for link in entry.all_links
        if not link.resolved
    ]
    issues: list[str] = []
    if not has_h1 and not entry.is_index:
        issues.append("missing_h1")
    if dead_links:
        issues.append(f"dead_wikilinks:{len(dead_links)}")
    if body_count < min_body_links:
        issues.append(f"body_links<{min_body_links}")
    if not route:
        issues.append("missing_route_link")
    if not peer and not entry.is_index:
        issues.append("missing_peer_link")
    if not system:
        issues.append("missing_system_or_regulatory_link")
    return {
        "body_links": body_count,
        "all_links": len(entry.all_links),
        "inlinks": entry.inlinks,
        "h1": has_h1,
        "route": route,
        "peer": peer,
        "system": system,
        "dead_links": dead_links,
        "issues": issues,
    }


def suggest_links(entry: Entry, entries: dict[str, Entry]) -> list[str]:
    suggestions: list[str] = []
    for candidate in route_candidates(entry, entries):
        if candidate != entry.rel.removesuffix(".md"):
            suggestions.append(candidate)
    for candidate in DOMAIN_SYSTEM_CANDIDATES.get(entry.domain, []):
        resolved = f"{candidate}.md" if not candidate.endswith("INDEX") else f"{candidate}.md"
        if resolved in entries and resolved != entry.rel:
            suggestions.append(candidate)
    tag_set = set(entry.tags)
    peers: list[tuple[int, int, str]] = []
    for rel, other in entries.items():
        if rel == entry.rel or other.domain != entry.domain or other.is_index:
            continue
        score = len(tag_set.intersection(other.tags))
        if score:
            peers.append((score, other.inlinks, rel.removesuffix(".md")))
    peers.sort(reverse=True)
    for _, _, rel in peers[:3]:
        if rel not in suggestions:
            suggestions.append(rel)
    return suggestions[:6]


def peer_candidate(entry: Entry, entries: dict[str, Entry]) -> str | None:
    tag_set = set(entry.tags)
    peers: list[tuple[int, int, str]] = []
    for rel, other in entries.items():
        if rel == entry.rel or other.domain != entry.domain or other.is_index:
            continue
        score = len(tag_set.intersection(other.tags))
        if score:
            peers.append((score, other.inlinks, rel.removesuffix(".md")))
    if not peers:
        for rel, other in entries.items():
            if rel == entry.rel or other.domain != entry.domain or other.is_index:
                continue
            peers.append((0, other.inlinks, rel.removesuffix(".md")))
    if not peers:
        return None
    peers.sort(reverse=True)
    return peers[0][2]


def system_candidate(entry: Entry, entries: dict[str, Entry]) -> str | None:
    candidates = domain_candidates_by_tags(entry) + DOMAIN_SYSTEM_CANDIDATES.get(entry.domain, [])
    candidates.extend(route_candidates(entry, entries))
    for candidate in unique_existing_candidates(candidates, entries, entry):
        normalized = candidate.removesuffix(".md")
        if normalized == entry.rel.removesuffix(".md"):
            continue
        target = Path(normalized)
        if target.parts and target.parts[0] != entry.domain:
            return normalized
        if any(keyword in target.stem.lower() for keyword in SYSTEM_KEYWORDS):
            return normalized
    return None


def semantic_candidates(entry: Entry, entries: dict[str, Entry]) -> list[str]:
    candidates: list[str] = []
    route = next(iter(route_candidates(entry, entries)), None)
    peer = peer_candidate(entry, entries)
    system = system_candidate(entry, entries)
    if route:
        candidates.append(route)
    if peer:
        candidates.append(peer)
    if system:
        candidates.append(system)
    candidates.extend(domain_candidates_by_tags(entry))
    candidates.extend(suggest_links(entry, entries))
    candidates.append("INDEX")

    seen: set[str] = set()
    result: list[str] = []
    for candidate in candidates:
        normalized = candidate.removesuffix(".md")
        if normalized in seen:
            continue
        if normalized == entry.rel.removesuffix(".md"):
            continue
        if candidate_exists(normalized, entries):
            seen.add(normalized)
            result.append(normalized)
        if len(result) >= 4:
            break
    return result


def domain_candidates_by_tags(entry: Entry) -> list[str]:
    tags = {tag.lower() for tag in entry.tags}
    if entry.domain == "JapanFG":
        if tags.intersection({"bank", "banking", "regional-bank", "net-bank", "foreign-bank"}):
            return ["banking/INDEX", "JapanFG/legal-financial-licenses/INDEX"]
        if tags.intersection({"insurance", "life-insurance", "non-life", "reinsurance"}):
            return ["insurance/INDEX", "JapanFG/legal-financial-licenses/INDEX"]
        if tags.intersection({"securities", "asset-management", "fiea", "fx"}):
            return ["securities/INDEX", "JapanFG/legal-financial-licenses/INDEX"]
        if tags.intersection({"payments", "remittance", "funds-transfer", "prepaid", "card", "psp"}):
            return ["payments/INDEX", "payments/funds-transfer-vs-prepaid-boundary"]
        if tags.intersection({"stablecoin", "fintech"}):
            return ["fintech/japan-stablecoin-regulatory-landscape", "payments/INDEX"]
    return DOMAIN_SYSTEM_CANDIDATES.get(entry.domain, [])


def candidate_exists(candidate: str, entries: dict[str, Entry]) -> bool:
    return f"{candidate}.md" in entries or f"{candidate}/INDEX.md" in entries or candidate == "INDEX"


def link_for_candidate(candidate: str, entries: dict[str, Entry]) -> str:
    if candidate == "INDEX":
        return "[[INDEX|FinWiki index]]"
    rel = f"{candidate}.md"
    if rel not in entries and f"{candidate}/INDEX.md" in entries:
        rel = f"{candidate}/INDEX.md"
        candidate = f"{candidate}/INDEX"
    label = label_for_candidate(candidate, entries.get(rel))
    return f"[[{candidate}|{label}]]"


def label_for_candidate(candidate: str, entry: Entry | None) -> str:
    if candidate.endswith("/INDEX"):
        return f"{candidate.split('/', 1)[0]} index"
    if entry and entry.title and len(entry.title) <= 60:
        return entry.title
    return Path(candidate).name.replace("-", " ")


def scaffold_text(entry: Entry, entries: dict[str, Entry]) -> str:
    route = next(iter(route_candidates(entry, entries)), None)
    peer = peer_candidate(entry, entries)
    system = system_candidate(entry, entries)
    candidates = [candidate for candidate in (route, peer, system) if candidate]
    candidates.extend(semantic_candidates(entry, entries))

    links: list[str] = []
    for candidate in candidates:
        link = link_for_candidate(candidate, entries)
        if link not in links:
            links.append(link)
    while len(links) < 3:
        fallback = "[[INDEX|FinWiki index]]"
        if fallback not in links:
            links.append(fallback)
        else:
            break
    links = links[:3]
    if len(links) >= 3:
        return (
            "## Wiki route\n\n"
            f"This entry sits under {links[0]}. Read it against {links[1]} for peer / contrast context "
            f"and {links[2]} for the broader system / regulatory boundary.\n\n"
        )
    if len(links) == 2:
        return f"## Wiki route\n\nThis entry sits under {links[0]} and should be read with {links[1]}.\n\n"
    return f"## Wiki route\n\nThis entry sits under {links[0]}.\n\n"


def insert_scaffold(entry: Entry, entries: dict[str, Entry]) -> bool:
    text = entry.path.read_text(encoding="utf-8", errors="replace")
    if re.search(r"^##\s+Wiki route\b", text, flags=re.M):
        return False
    body_start = 0
    frontmatter_match = re.match(r"^---\r?\n.*?\r?\n---\r?\n", text, flags=re.S)
    if frontmatter_match:
        body_start = frontmatter_match.end()
    heading_match = re.search(r"^#\s+.+\n", text[body_start:], flags=re.M)
    if heading_match:
        insert_at = body_start + heading_match.end()
    else:
        h1 = f"\n# {entry.title}\n\n"
        insert_at = body_start
        text = text[:body_start] + h1 + text[body_start:]
        insert_at += len(h1)
    while insert_at < len(text) and text[insert_at : insert_at + 1] == "\n":
        insert_at += 1
    new_text = text[:insert_at] + "\n" + scaffold_text(entry, entries) + text[insert_at:]
    entry.path.write_text(new_text, encoding="utf-8", newline="\n")
    return True


def upsert_scaffold(entry: Entry, entries: dict[str, Entry]) -> bool:
    text = entry.path.read_text(encoding="utf-8", errors="replace")
    new_section = scaffold_text(entry, entries)
    existing = re.search(r"^##\s+Wiki route\b.*?(?=^##\s+|\Z)", text, flags=re.M | re.S)
    if existing:
        new_text = text[: existing.start()] + new_section + text[existing.end() :]
        if new_text != text:
            entry.path.write_text(new_text, encoding="utf-8", newline="\n")
            return True
        return False
    return insert_scaffold(entry, entries)


def apply_scaffolds(entries: dict[str, Entry], rows: list[dict[str, object]], min_body_links: int) -> int:
    updated = 0
    low_issue = f"body_links<{min_body_links}"
    for row in rows:
        if low_issue not in row["issues"]:
            continue
        entry = entries[str(row["path"])]
        if insert_scaffold(entry, entries):
            updated += 1
    return updated


def apply_semantic_scaffolds(entries: dict[str, Entry], rows: list[dict[str, object]]) -> int:
    updated = 0
    for row in rows:
        if not row["issues"]:
            continue
        entry = entries[str(row["path"])]
        if upsert_scaffold(entry, entries):
            updated += 1
    return updated


def audit(entries: dict[str, Entry], min_body_links: int) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for rel, entry in sorted(entries.items()):
        status = entry_status(entry, entries, min_body_links)
        row = {
            "path": rel,
            "domain": entry.domain,
            "title": entry.title,
            "git_state": entry.git_state,
            "suggestions": suggest_links(entry, entries),
            **status,
        }
        rows.append(row)
    return rows


def write_markdown_report(rows: list[dict[str, object]], report_path: Path, min_body_links: int) -> None:
    total = len(rows)
    failures = [row for row in rows if row["issues"]]
    dead_rows = [row for row in rows if row["dead_links"]]
    dead_by_target: dict[str, list[tuple[str, int, str]]] = {}
    for row in dead_rows:
        for link in row["dead_links"]:
            target = str(link["target"])
            dead_by_target.setdefault(target, []).append(
                (str(row["path"]), int(link["line"]), str(link["raw"]))
            )
    low_body = [row for row in rows if "body_links<%d" % min_body_links in row["issues"]]
    missing_route = [row for row in rows if "missing_route_link" in row["issues"]]
    missing_peer = [row for row in rows if "missing_peer_link" in row["issues"]]
    missing_system = [row for row in rows if "missing_system_or_regulatory_link" in row["issues"]]
    missing_h1 = [row for row in rows if "missing_h1" in row["issues"]]
    changed = [row for row in rows if row["git_state"] in {"M", "A", "??"}]

    lines: list[str] = []
    lines.append("# FinWiki Internal Link Improvement Plan")
    lines.append("")
    lines.append("> Generated by `python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md`.")
    lines.append("")
    lines.append("## Summary")
    lines.append("")
    lines.append("| Metric | Count |")
    lines.append("|---|---:|")
    lines.append(f"| Entries checked | {total} |")
    lines.append(f"| Entries with any issue | {len(failures)} |")
    lines.append(f"| Dead wikilink references | {sum(len(row['dead_links']) for row in dead_rows)} |")
    lines.append(f"| Unique dead wikilink targets | {len(dead_by_target)} |")
    lines.append(f"| Body links below {min_body_links} | {len(low_body)} |")
    lines.append(f"| Missing H1 | {len(missing_h1)} |")
    lines.append(f"| Missing route link | {len(missing_route)} |")
    lines.append(f"| Missing peer link | {len(missing_peer)} |")
    lines.append(f"| Missing system / regulatory link | {len(missing_system)} |")
    lines.append(f"| Changed or new entries in current worktree | {len(changed)} |")
    lines.append("")
    lines.append("## Wiki Linking Standard")
    lines.append("")
    lines.append("- Each entry should have at least three body wikilinks before `## Related` / `## Sources`.")
    lines.append("- Every `[[wikilink]]` target anywhere in the public entry body must resolve to an existing entry, domain index, or explicit alias.")
    lines.append("- Body links should include one route link, one peer / contrast link, and one system / regulatory link.")
    lines.append("- `## Related` remains useful as a footer, but it does not count as body linkage.")
    lines.append("- Registry-control pages may link to official workbooks in Sources, but should still connect to wiki routes in prose.")
    lines.append("")
    lines.append("## Priority A0: Dead Wikilink Targets")
    lines.append("")
    lines.append("| Target | Refs | Example source |")
    lines.append("|---|---:|---|")
    for target, refs in sorted(dead_by_target.items(), key=lambda item: (-len(item[1]), item[0]))[:240]:
        example_path, example_line, example_raw = refs[0]
        lines.append(
            f"| `[[{target}]]` | {len(refs)} | `{example_path}:{example_line}` (`[[{example_raw}]]`) |"
        )
    if len(dead_by_target) > 240:
        lines.append(f"| ... | ... | {len(dead_by_target) - 240} more targets omitted |")
    lines.append("")
    lines.append("## Priority A: Failing Entries")
    lines.append("")
    lines.append("| Path | Body | In | Dead | Issues | Suggested links |")
    lines.append("|---|---:|---:|---:|---|---|")
    for row in sorted(failures, key=lambda item: (len(item["dead_links"]), len(item["issues"]), item["body_links"], item["path"]))[:200]:
        suggestions = ", ".join(f"`[[{item}]]`" for item in row["suggestions"]) or "-"
        issues = ", ".join(f"`{item}`" for item in row["issues"])
        lines.append(
            f"| `{row['path']}` | {row['body_links']} | {row['inlinks']} | {len(row['dead_links'])} | {issues} | {suggestions} |"
        )
    if len(failures) > 200:
        lines.append(f"| ... | ... | ... | ... | {len(failures) - 200} more entries omitted | ... |")
    lines.append("")
    lines.append("## Priority B: Current Worktree Entries To Review")
    lines.append("")
    lines.append("| Path | State | Body | Issues |")
    lines.append("|---|---:|---:|---|")
    for row in sorted(changed, key=lambda item: (item["git_state"], item["path"]))[:240]:
        issues = ", ".join(f"`{item}`" for item in row["issues"]) or "ok"
        lines.append(f"| `{row['path']}` | `{row['git_state']}` | {row['body_links']} | {issues} |")
    if len(changed) > 240:
        lines.append(f"| ... | ... | ... | {len(changed) - 240} more entries omitted |")
    lines.append("")
    lines.append("## Domain Snapshot")
    lines.append("")
    lines.append("| Domain | Entries | Failing | Avg body links |")
    lines.append("|---|---:|---:|---:|")
    domains = sorted({str(row["domain"]) for row in rows})
    for domain in domains:
        domain_rows = [row for row in rows if row["domain"] == domain]
        failing = [row for row in domain_rows if row["issues"]]
        avg = sum(int(row["body_links"]) for row in domain_rows) / len(domain_rows)
        lines.append(f"| `{domain}` | {len(domain_rows)} | {len(failing)} | {avg:.1f} |")
    lines.append("")
    lines.append("## Execution Notes")
    lines.append("")
    lines.append("1. Fix Priority A first with hand-written body sentences, not footer-only links.")
    lines.append("2. For large registry pages, add one short prose paragraph that names the registry route, the nearest domain index, and one adjacent system page.")
    lines.append("3. Re-run `python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues` before push.")
    lines.append("")

    report_path.write_text("\n".join(lines), encoding="utf-8", newline="\n")


def main() -> int:
    args = parse_args()
    entries = load_entries()
    attach_resolved_links(entries)
    attach_git_state(entries)
    rows = audit(entries, args.min_body_links)
    if args.apply_scaffold:
        updated = apply_scaffolds(entries, rows, args.min_body_links)
        print(f"scaffolded_entries={updated}")
        entries = load_entries()
        attach_resolved_links(entries)
        attach_git_state(entries)
        rows = audit(entries, args.min_body_links)
    if args.apply_semantic_scaffold:
        updated = apply_semantic_scaffolds(entries, rows)
        print(f"semantic_scaffolded_entries={updated}")
        entries = load_entries()
        attach_resolved_links(entries)
        attach_git_state(entries)
        rows = audit(entries, args.min_body_links)
    if args.report:
        write_markdown_report(rows, args.report, args.min_body_links)
    if args.json:
        args.json.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8", newline="\n")
    failures = [row for row in rows if row["issues"]]
    dead_refs = sum(len(row["dead_links"]) for row in rows)
    dead_targets = len({link["target"] for row in rows for link in row["dead_links"]})
    print(f"entries_checked={len(rows)}")
    print(f"entries_with_issues={len(failures)}")
    print(f"dead_wikilink_references={dead_refs}")
    print(f"dead_wikilink_targets={dead_targets}")
    print(f"body_link_threshold={args.min_body_links}")
    if args.report:
        print(f"report={args.report}")
    if args.fail_on_low_body_links:
        low_issue = f"body_links<{args.min_body_links}"
        if any(low_issue in row["issues"] for row in rows):
            return 1
    if args.fail_on_issues and failures:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
