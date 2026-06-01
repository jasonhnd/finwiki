#!/usr/bin/env python3
"""Fail when a rendered HTML page contains duplicate id attributes.

Astro can render many Markdown headings into the same page. Duplicate ids are
usually non-fatal, but they break anchor navigation and make build logs noisy.
This checker runs against rendered HTML so it validates the final public site,
not an approximation of Markdown slug generation.
"""

from __future__ import annotations

import argparse
import sys
from collections import Counter
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path


class IdCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self._collect(attrs)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self._collect(attrs)

    def _collect(self, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if name.lower() == "id" and value:
                self.ids.append(value)


@dataclass(frozen=True)
class DuplicateId:
    path: Path
    html_id: str
    count: int


def collect_ids(path: Path) -> list[str]:
    parser = IdCollector()
    parser.feed(path.read_text(encoding="utf-8", errors="replace"))
    parser.close()
    return parser.ids


def find_duplicate_ids(root: Path) -> tuple[int, list[DuplicateId]]:
    checked = 0
    duplicates: list[DuplicateId] = []
    for path in sorted(root.rglob("*.html")):
        try:
            ids = collect_ids(path)
        except FileNotFoundError:
            # A local build may be replacing site/dist while this checker runs.
            # CI runs the checker after build, so disappearing files are only a
            # local race; skip them and let the next run inspect the new output.
            continue
        checked += 1
        counts = Counter(ids)
        for html_id, count in sorted(counts.items()):
            if count > 1:
                duplicates.append(DuplicateId(path=path, html_id=html_id, count=count))
    return checked, duplicates


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("html_root", type=Path, help="Rendered HTML directory, for example site/dist")
    args = parser.parse_args()

    root = args.html_root
    if not root.exists():
        print(f"html root not found: {root}", file=sys.stderr)
        return 2
    if not root.is_dir():
        print(f"html root is not a directory: {root}", file=sys.stderr)
        return 2

    checked, duplicates = find_duplicate_ids(root)
    if duplicates:
        duplicate_pages = len({d.path for d in duplicates})
        print(f"checked={checked} duplicate_id_pages={duplicate_pages} duplicate_ids={len(duplicates)}")
        for issue in duplicates[:100]:
            rel = issue.path.relative_to(root)
            print(f"{rel}: id={issue.html_id!r} count={issue.count}")
        if len(duplicates) > 100:
            print(f"... {len(duplicates) - 100} more duplicate id issue(s)")
        return 1

    print(f"checked={checked} duplicate_id_pages=0 duplicate_ids=0")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
