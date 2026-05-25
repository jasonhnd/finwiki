#!/usr/bin/env python3
"""Update the 'Last updated' timestamp in index.html footer to current JST.

Run from repo root. Idempotent — only rewrites the two <time> attrs.

Usage:
  python3 tools/update_footer_timestamp.py

Pairs with tools/generate_ai_discovery.py — run both whenever wiki content,
indexes, domain counts, or public snapshots change (per AGENTS.md).
"""
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path

JST = timezone(timedelta(hours=9))
now = datetime.now(tz=JST)
iso = now.strftime("%Y-%m-%dT%H:%M:%S+09:00")
display = now.strftime("%Y-%m-%d %H:%M:%S JST")

html_path = Path("index.html")
html = html_path.read_text(encoding="utf-8")

new_html, n = re.subn(
    r'<time id="last-updated-ts" datetime="[^"]*">[^<]*</time>',
    f'<time id="last-updated-ts" datetime="{iso}">{display}</time>',
    html,
)

if n != 1:
    raise SystemExit(
        f"ERROR: expected exactly 1 #last-updated-ts <time> in index.html, "
        f"found {n}. Footer markup may have changed."
    )

if new_html == html:
    print(f"no-op: footer timestamp already {display}")
else:
    html_path.write_text(new_html, encoding="utf-8", newline="\n")
    print(f"updated footer timestamp -> {display}")
