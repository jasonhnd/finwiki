#!/usr/bin/env python3
"""Move deterministically-marked subjective content out of FinWiki entries.

FinWiki is a factual record. This tool relocates the unambiguously subjective
content from each entry into a parallel `.opinions/<path>` file (git-tracked,
excluded from the public wiki surface, audit, and counts), leaving only
evidence-backed objective facts in the entry. It moves exactly three
deterministic things:

  1. Bullet lines tagged `^[inferred]`  (the wiki's own marker for inference).
  2. Whole `## Counterpoints` (反論 / 批判) sections.
  3. Whole `## Open questions` (未解決 / 論点) sections.

Judgment-laden content (Mechanism sections that are interpretive, editorial
titles, whole thesis/template entries) is NOT touched here — those are handled
in a separate reviewed pass.

  python tools/extract_opinions.py            # dry-run: report what would move
  python tools/extract_opinions.py --apply    # perform the move
"""

from __future__ import annotations

import argparse
import re
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OPINIONS_DIR = ROOT / ".opinions"
JST = timezone(timedelta(hours=9))

SKIP_DIRS = {".git", ".templates", ".opinions", "releases", "tools", "api"}

# Subjective section headings (EN / JP / ZH variants).
SUBJECTIVE_HEADING = re.compile(
    r"^(#{2,4})\s*(Counterpoints?|Open\s+questions?|反論|批判|反论|"
    r"未解決(?:の問い)?|論点|オープンクエスチョン|未解决问题|未解决)\s*$",
    re.IGNORECASE,
)
INFERRED_TAG = "^[inferred]"
HEADING = re.compile(r"^#{2,4}\s")
# Never extract from these structural sections even if a line looks inferred.
PROTECTED_HEADING = re.compile(r"^#{2,4}\s*(Related|Sources|出典|参考)\s*$", re.IGNORECASE)


def iter_entries():
    for path in sorted(ROOT.rglob("*.md")):
        rel = path.relative_to(ROOT)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        if path.parent == ROOT:  # root-level control docs (README/CHANGELOG/...)
            continue
        yield path


def split_frontmatter(text: str) -> tuple[str, str]:
    if text.startswith("---"):
        match = re.match(r"^(---\r?\n.*?\r?\n---\r?\n)(.*)$", text, re.S)
        if match:
            return match.group(1), match.group(2)
    return "", text


def split_sections(body: str) -> tuple[str, list[tuple[str, list[str]]]]:
    """Return (preamble, [(heading_line, content_lines), ...])."""
    lines = body.split("\n")
    preamble: list[str] = []
    sections: list[tuple[str, list[str]]] = []
    current: tuple[str, list[str]] | None = None
    for line in lines:
        if HEADING.match(line):
            if current is not None:
                sections.append(current)
            elif not sections:
                pass
            current = (line, [])
        else:
            if current is None:
                preamble.append(line)
            else:
                current[1].append(line)
    if current is not None:
        sections.append(current)
    return "\n".join(preamble), sections


def process(text: str) -> tuple[str, list[tuple[str, str]], int, int]:
    """Return (new_text, extracted_blocks, n_inferred_lines, n_sections)."""
    fm, body = split_frontmatter(text)
    preamble, sections = split_sections(body)
    kept: list[str] = []
    extracted: list[tuple[str, str]] = []
    n_inferred = 0
    n_sections = 0

    for heading, content in sections:
        if SUBJECTIVE_HEADING.match(heading):
            extracted.append((heading.lstrip("# ").strip(), "\n".join(content).strip()))
            n_sections += 1
            continue
        if PROTECTED_HEADING.match(heading):
            kept.append("\n".join([heading, *content]))
            continue
        kept_lines: list[str] = []
        inferred_here: list[str] = []
        for line in content:
            if INFERRED_TAG in line:
                inferred_here.append(line)
                n_inferred += 1
            else:
                kept_lines.append(line)
        if inferred_here:
            label = heading.lstrip("# ").strip()
            extracted.append((f"推論 (from {label})", "\n".join(inferred_here).strip()))
        # Drop a section that became empty after removing inferred lines.
        if "".join(kept_lines).strip():
            kept.append("\n".join([heading, *kept_lines]))
        # else: heading dropped entirely

    new_body = preamble.rstrip("\n") + "\n\n" + "\n\n".join(s.strip() for s in kept) + "\n"
    new_body = re.sub(r"\n{3,}", "\n\n", new_body)
    return fm + new_body, extracted, n_inferred, n_sections


def opinions_doc(rel_posix: str, title: str, blocks: list[tuple[str, str]]) -> str:
    today = datetime.now(tz=JST).strftime("%Y-%m-%d")
    head = (
        "---\n"
        f'title: "[opinion] {title}"\n'
        f"source_entry: {rel_posix}\n"
        "type: opinion-quarantine\n"
        f"moved: {today}\n"
        "note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。"
        "事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。\n"
        "---\n\n"
        f"# 主観内容の隔離 — {title}\n\n"
        f"> 出典エントリー: `{rel_posix}`\n\n"
    )
    parts = [f"## {label}\n\n{content}" for label, content in blocks]
    return head + "\n\n".join(parts) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true", help="perform the move (default: dry-run)")
    args = parser.parse_args()

    total_files = 0
    total_inferred = 0
    total_sections = 0
    changed: list[str] = []
    for path in iter_entries():
        text = path.read_text(encoding="utf-8", errors="replace")
        if INFERRED_TAG not in text and not any(
            SUBJECTIVE_HEADING.match(line) for line in text.split("\n")
        ):
            continue
        new_text, blocks, n_inf, n_sec = process(text)
        if not blocks or new_text == text:
            continue
        total_files += 1
        total_inferred += n_inf
        total_sections += n_sec
        rel = path.relative_to(ROOT).as_posix()
        changed.append(f"  {rel}  (inferred={n_inf}, sections={n_sec})")
        if args.apply:
            title = re.search(r"^title:\s*(.+)$", text, re.M)
            title_str = title.group(1).strip().strip('"') if title else rel
            opp = OPINIONS_DIR / path.relative_to(ROOT)
            opp.parent.mkdir(parents=True, exist_ok=True)
            opp.write_text(opinions_doc(rel, title_str, blocks), encoding="utf-8", newline="\n")
            path.write_text(new_text, encoding="utf-8", newline="\n")

    mode = "APPLIED" if args.apply else "DRY-RUN"
    print(f"=== extract_opinions ({mode}) ===")
    print(f"entries affected: {total_files}")
    print(f"inferred lines moved: {total_inferred}")
    print(f"subjective sections moved: {total_sections}")
    for line in changed[:25]:
        print(line)
    if len(changed) > 25:
        print(f"  ... and {len(changed) - 25} more")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
