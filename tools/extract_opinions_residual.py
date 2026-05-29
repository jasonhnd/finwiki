#!/usr/bin/env python3
"""Phase 1.5 residual sweep for the FinWiki opinion quarantine.

Phase 1 (extract_opinions.py) moved bullet-level ^[inferred] lines and standard
`## Counterpoints` / `## Open questions` sections. This residual pass catches
what its strict matching missed:

  1. Headings tagged ^[inferred] (estimated/inferred sections, e.g.
     "## KPI 表（公開ベース概算）^[inferred]") — move the whole heading subtree.
  2. Subjective headings with trailing text ("## Counterpoints / open questions").
  3. Stray ^[inferred] lines (e.g. `> confidence: ... ^[inferred]` footers).

Extracted content is APPENDED to the existing .opinions/<path> file (created by
Phase 1) or a new one. Run from repo root.

  python tools/extract_opinions_residual.py           # dry-run
  python tools/extract_opinions_residual.py --apply
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
INFERRED = "^[inferred]"
HEADING = re.compile(r"^(#{2,4})\s+(.*\S)\s*$")
ANY_HEADING = re.compile(r"^(#{2,4})\s")
SUBJECTIVE_KW = re.compile(
    r"^(Counterpoints?|Open\s+questions?|反論|批判|反论|未解決|論点|オープン)",
    re.IGNORECASE,
)
PROTECTED_KW = re.compile(r"^(Related|Sources|出典|参考|References|Wiki route)", re.IGNORECASE)


def iter_entries():
    for path in sorted(ROOT.rglob("*.md")):
        rel = path.relative_to(ROOT)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        if path.parent == ROOT:
            continue
        yield path


def split_frontmatter(text: str) -> tuple[str, str]:
    if text.startswith("---"):
        m = re.match(r"^(---\r?\n.*?\r?\n---\r?\n)(.*)$", text, re.S)
        if m:
            return m.group(1), m.group(2)
    return "", text


def clean_label(htext: str) -> str:
    return htext.replace(INFERRED, "").strip().lstrip("#0123456789. ").strip() or "section"


def process(text: str) -> tuple[str, list[str], int, int]:
    """Return (new_text, extracted_blocks, n_subtrees, n_stray)."""
    fm, body = split_frontmatter(text)
    lines = body.split("\n")
    kept: list[str] = []
    blocks: list[str] = []
    n_sub = n_stray = 0
    i, n = 0, len(lines)
    while i < n:
        line = lines[i]
        hm = HEADING.match(line)
        if hm:
            level, htext = len(hm.group(1)), hm.group(2)
            protected = bool(PROTECTED_KW.match(htext.strip()))
            subjective = (INFERRED in htext) or bool(SUBJECTIVE_KW.match(htext.strip()))
            if subjective and not protected:
                j = i + 1
                while j < n:
                    h2 = ANY_HEADING.match(lines[j])
                    if h2 and len(h2.group(1)) <= level:
                        break
                    j += 1
                blocks.append("\n".join(lines[i:j]).strip())
                n_sub += 1
                i = j
                continue
        if INFERRED in line:
            blocks.append(line.strip())
            n_stray += 1
            i += 1
            continue
        kept.append(line)
        i += 1
    new_body = re.sub(r"\n{3,}", "\n\n", "\n".join(kept)).strip() + "\n"
    return fm + new_body, blocks, n_sub, n_stray


def append_opinions(rel_posix: str, title: str, blocks: list[str]) -> None:
    today = datetime.now(tz=JST).strftime("%Y-%m-%d")
    opp = OPINIONS_DIR / rel_posix
    body = "<!-- Phase 1.5 追加抽出 (" + today + ") -->\n\n" + "\n\n".join(blocks) + "\n"
    if opp.exists():
        prev = opp.read_text(encoding="utf-8").rstrip("\n")
        opp.write_text(prev + "\n\n" + body, encoding="utf-8", newline="\n")
    else:
        opp.parent.mkdir(parents=True, exist_ok=True)
        head = (
            "---\n"
            f'title: "[opinion] {title}"\n'
            f"source_entry: {rel_posix}\n"
            "type: opinion-quarantine\n"
            f"moved: {today}\n"
            "note: 客観 wiki 本文から分離した主観的内容（推定セクション / 推論 / 反論）。公開面・監査・計数から除外。\n"
            "---\n\n"
            f"# 主観内容の隔離 — {title}\n\n"
            f"> 出典エントリー: `{rel_posix}`\n\n"
        )
        opp.write_text(head + body, encoding="utf-8", newline="\n")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    files = subtrees = strays = 0
    changed: list[str] = []
    for path in iter_entries():
        text = path.read_text(encoding="utf-8", errors="replace")
        if INFERRED not in text and not any(
            SUBJECTIVE_KW.match(HEADING.match(ln).group(2).strip())
            for ln in text.split("\n")
            if HEADING.match(ln)
        ):
            continue
        new_text, blocks, n_sub, n_stray = process(text)
        if not blocks or new_text == text:
            continue
        files += 1
        subtrees += n_sub
        strays += n_stray
        rel = path.relative_to(ROOT).as_posix()
        changed.append(f"  {rel}  (subtrees={n_sub}, stray={n_stray})")
        if args.apply:
            tm = re.search(r"^title:\s*(.+)$", text, re.M)
            title = tm.group(1).strip().strip('"') if tm else rel
            append_opinions(rel, title, blocks)
            path.write_text(new_text, encoding="utf-8", newline="\n")
    mode = "APPLIED" if args.apply else "DRY-RUN"
    print(f"=== extract_opinions_residual ({mode}) ===")
    print(f"entries affected: {files}")
    print(f"inferred/subjective subtrees moved: {subtrees}")
    print(f"stray inferred lines moved: {strays}")
    for c in changed[:30]:
        print(c)
    if len(changed) > 30:
        print(f"  ... and {len(changed) - 30} more")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
