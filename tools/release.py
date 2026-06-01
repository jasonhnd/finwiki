#!/usr/bin/env python3
"""FinWiki release orchestrator — runs the AGENTS.md publish loop in order.

The publish loop (AGENTS.md) has many manual sync points that drift easily:
the link-audit gate, the AI-discovery regeneration, the footer timestamp, and
the human-facing counts duplicated across README.md (3 trilingual tables) and
index.html (meta / Open Graph / Twitter / JSON-LD / hero / prose). This tool
makes the canonical counts computed by ``generate_ai_discovery.build_model``
the single source of truth and keeps every surface aligned with it.

Modes:
    python tools/release.py                 # check: report drift, run the
                                            #   audit gate, mutate nothing
    python tools/release.py --write         # regenerate discovery + footer,
                                            #   sync README/index.html counts
    python tools/release.py --write --changelog "title"
                                            # also scaffold a dated CHANGELOG
                                            #   entry per AGENTS.md fields

Exit codes:
    0  check clean, or write succeeded
    1  count drift detected in --check --strict
    2  link-audit gate failed (broken body/route/peer/system links)

Run from anywhere; paths are resolved relative to the repo root.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path

# Windows consoles default to cp932/cp1252, which cannot encode the em-dash and
# 万 characters this tool prints; force UTF-8 so drift/count output never crashes
# regardless of how the script is invoked (the pre-push hook sets the same via env).
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

TOOLS_DIR = Path(__file__).resolve().parent
ROOT = TOOLS_DIR.parent
sys.path.insert(0, str(TOOLS_DIR))

# Reuse the canonical count primitives so release.py never defines a second,
# divergent way to count the corpus. These are pure helpers (import-safe).
from generate_ai_discovery import (  # noqa: E402
    count_word_like_tokens,
    iter_markdown_files,
    parse_domain_map,
    read_text,
)

JST = timezone(timedelta(hours=9))
README = ROOT / "README.md"
INDEX_HTML = ROOT / "index.html"
CHANGELOG = ROOT / "CHANGELOG.md"
AI_INDEX = ROOT / "ai-index.json"


@dataclass(frozen=True)
class Counts:
    """Canonical corpus counts. The single source of truth for every surface."""

    markdown_files: int
    topical_domains: int
    link_audited_entries: int
    unresolved_issues: int
    nonspace_chars: int
    word_tokens: int

    @property
    def chars_man(self) -> int:
        return round(self.nonspace_chars / 10_000)

    @property
    def tokens_man(self) -> int:
        return round(self.word_tokens / 10_000)

    @property
    def chars_m(self) -> str:
        return f"{self.nonspace_chars / 1_000_000:.2f}"

    @property
    def tokens_m(self) -> str:
        return f"{self.word_tokens / 1_000_000:.2f}"


def today_jst() -> str:
    return datetime.now(tz=JST).strftime("%Y-%m-%d")


# --------------------------------------------------------------------------- #
# Stage 1 — link-audit gate                                                   #
# --------------------------------------------------------------------------- #
def run_audit(write_report: bool) -> tuple[bool, int, int]:
    """Run the wiki link audit. Returns (gate_ok, entries_checked, issues)."""
    cmd = [sys.executable, str(TOOLS_DIR / "wiki_link_audit.py"), "--fail-on-issues"]
    if write_report:
        cmd += ["--report", str(ROOT / "wiki-link-improvement-plan.md")]
    proc = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8")
    out = (proc.stdout or "") + (proc.stderr or "")
    return proc.returncode == 0, _grab_int(out, r"entries_checked=(\d+)"), _grab_int(
        out, r"entries_with_issues=(\d+)"
    )


def _grab_int(text: str, pattern: str) -> int:
    match = re.search(pattern, text)
    return int(match.group(1)) if match else 0


# --------------------------------------------------------------------------- #
# Stage 2 — canonical counts                                                  #
# --------------------------------------------------------------------------- #
def compute_counts(entries_checked: int, issues: int) -> Counts:
    """Derive counts from the same primitives generate_ai_discovery uses."""
    md_paths = sorted(iter_markdown_files(), key=lambda p: p.as_posix())
    all_text = "\n".join(read_text(p) for p in md_paths)
    return Counts(
        markdown_files=len(md_paths),
        topical_domains=len(parse_domain_map()),
        link_audited_entries=entries_checked,
        unresolved_issues=issues,
        nonspace_chars=len(re.sub(r"\s+", "", all_text)),
        word_tokens=count_word_like_tokens(all_text),
    )


# --------------------------------------------------------------------------- #
# Stage 3 — idempotent count sync (README + index.html)                       #
# --------------------------------------------------------------------------- #
def sync_readme_text(text: str, c: Counts, snapshot_date: str) -> str:
    """Return README with every count cell + snapshot date set to canonical."""
    int_rows = {
        "Markdown files": c.markdown_files,
        "Topical domains": c.topical_domains,
        "Link-audited entries": c.link_audited_entries,
        "Unresolved link issues": c.unresolved_issues,
    }
    out_lines: list[str] = []
    for line in text.split("\n"):
        new = line
        for label, value in int_rows.items():
            new = re.sub(
                rf"(\| {re.escape(label)} \| )[\d,]+( \|)",
                rf"\g<1>{value}\g<2>",
                new,
            )
        if new.startswith("| Text volume |"):
            new = re.sub(r"[約约]\s*[\d,]+\s*万字", lambda m: m.group(0)[0] + f"{c.chars_man}万字", new)
            new = re.sub(r"~[\d.]+M chars", f"~{c.chars_m}M chars", new)
            new = re.sub(r"（([約约])\s*[\d,]+）", lambda m: f"（{m.group(1)} {c.nonspace_chars:,}）", new)
            new = re.sub(r"~[\d,]+ non-space", f"~{c.nonspace_chars:,} non-space", new)
        if new.startswith("| Word-like tokens |"):
            new = re.sub(r"[約约]\s*[\d,]+\s*万", lambda m: m.group(0)[0] + f"{c.tokens_man}万", new)
            new = re.sub(r"~[\d.]+M", f"~{c.tokens_m}M", new)
        out_lines.append(new)
    text = "\n".join(out_lines)
    text = re.sub(r"(集計基準: )\d{4}-\d{2}-\d{2}( JST)", rf"\g<1>{snapshot_date}\g<2>", text)
    text = re.sub(r"(as of )\d{4}-\d{2}-\d{2}( JST)", rf"\g<1>{snapshot_date}\g<2>", text)
    text = re.sub(r"(统计口径：)\d{4}-\d{2}-\d{2}( JST)", rf"\g<1>{snapshot_date}\g<2>", text)
    return text


def sync_index_html_text(text: str, c: Counts) -> str:
    """Return index.html with every count phrase set to canonical values."""
    # EN meta description: spelled-out, no comma, "about X.XX million".
    text = re.sub(
        r"\d[\d,]* Markdown files, \d[\d,]* link-audited entries, \d+ topical "
        r"domains, and about [\d.]+ million non-space characters",
        f"{c.markdown_files} Markdown files, {c.link_audited_entries} link-audited "
        f"entries, {c.topical_domains} topical domains, and about {c.chars_m} "
        f"million non-space characters",
        text,
    )
    # JA Open Graph description: "リンク監査済エントリー", comma ints, 約 N 万字.
    text = re.sub(
        r"[\d,]+ ファイル / [\d,]+ リンク監査済エントリー / \d+ 領域 / 約 [\d,]+ 万字",
        f"{c.markdown_files:,} ファイル / {c.link_audited_entries:,} リンク監査済エントリー "
        f"/ {c.topical_domains} 領域 / 約 {c.chars_man:,} 万字",
        text,
    )
    # JA og:image:alt + twitter:description: short "エントリー", comma ints.
    text = re.sub(
        r"[\d,]+ ファイル / [\d,]+ エントリー / \d+ 領域 / 約 [\d,]+ 万字",
        f"{c.markdown_files:,} ファイル / {c.link_audited_entries:,} エントリー "
        f"/ {c.topical_domains} 領域 / 約 {c.chars_man:,} 万字",
        text,
    )
    # EN JSON-LD + hero: "files / entries / domains / ~X.XXM non-space chars".
    text = re.sub(
        r"[\d,]+ files / [\d,]+ link-audited entries / \d+ domains / ~[\d.]+M non-space chars",
        f"{c.markdown_files:,} files / {c.link_audited_entries:,} link-audited "
        f"entries / {c.topical_domains} domains / ~{c.chars_m}M non-space chars",
        text,
    )
    # JA prose: "N 領域・M 件" (no comma).
    text = re.sub(
        r"\d+ 領域・[\d,]+ 件",
        f"{c.topical_domains} 領域・{c.link_audited_entries} 件",
        text,
    )
    # EN nav prose: "all N domains".
    text = re.sub(r"all \d+ domains", f"all {c.topical_domains} domains", text)
    return text


def diff_lines(old: str, new: str, label: str) -> list[str]:
    """Return human-readable changed-line pairs between old and new text."""
    changes: list[str] = []
    for o, n in zip(old.split("\n"), new.split("\n")):
        if o != n:
            changes.append(f"  [{label}] - {o.strip()[:140]}")
            changes.append(f"  [{label}] + {n.strip()[:140]}")
    return changes


# --------------------------------------------------------------------------- #
# Stage 4 — regeneration (write mode only)                                    #
# --------------------------------------------------------------------------- #
def run_tool(script: str) -> None:
    proc = subprocess.run(
        [sys.executable, str(TOOLS_DIR / script)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        cwd=str(ROOT),
    )
    tag = "ok" if proc.returncode == 0 else "FAILED"
    print(f"  [{tag}] {script}: {(proc.stdout or proc.stderr).strip().splitlines()[-1:] or ['']}"[0:160])
    if proc.returncode != 0:
        raise SystemExit(f"{script} failed:\n{proc.stderr}")


def counts_from_ai_index() -> Counts:
    data = json.loads(AI_INDEX.read_text(encoding="utf-8"))["counts"]
    return Counts(
        markdown_files=data["markdown_files"],
        topical_domains=data["topical_domains"],
        link_audited_entries=data["link_audited_entries"],
        unresolved_issues=data.get("unresolved_link_issues") or 0,
        nonspace_chars=data["nonspace_utf8_chars"],
        word_tokens=data["word_like_tokens"],
    )


# --------------------------------------------------------------------------- #
# Stage 5 — verification (read-only, both modes)                              #
# --------------------------------------------------------------------------- #
def verify() -> list[str]:
    """Return a list of problems found (empty == healthy)."""
    problems: list[str] = []
    for path in ROOT.rglob("*.json"):
        if any(p in path.relative_to(ROOT).parts for p in (".git", "site", "app")):
            continue
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError) as exc:
            problems.append(f"invalid JSON: {path.relative_to(ROOT)} ({exc})")
    crlf = subprocess.run(
        ["git", "ls-files", "--eol"], capture_output=True, text=True, cwd=str(ROOT)
    ).stdout
    for line in crlf.splitlines():
        if "w/crlf" in line:
            problems.append(f"CRLF in working tree: {line.split(chr(9))[-1]}")
    dist_dir = ROOT / "site" / "dist"
    if dist_dir.exists():
        proc = subprocess.run(
            [sys.executable, str(TOOLS_DIR / "check_duplicate_html_ids.py"), str(dist_dir)],
            capture_output=True,
            text=True,
            encoding="utf-8",
            cwd=str(ROOT),
        )
        if proc.returncode != 0:
            output = ((proc.stdout or "") + (proc.stderr or "")).strip()
            problems.append(f"duplicate HTML ids: {output[:500]}")
    return problems


# --------------------------------------------------------------------------- #
# Stage 6 — CHANGELOG scaffold (write + --changelog)                          #
# --------------------------------------------------------------------------- #
def scaffold_changelog(title: str) -> bool:
    """Insert a dated entry skeleton above the newest dated record."""
    text = CHANGELOG.read_text(encoding="utf-8")
    now = datetime.now(tz=JST).strftime("%Y-%m-%d %H:%M JST")
    date = today_jst()
    block = (
        f"## {date} — {title}\n\n"
        "### 日本語\n\n"
        f"- **{now} / 背景:** <なぜこの作業をしたか>\n"
        "- **範囲:** <影響したドメイン / ファイル>\n"
        "- **主要ファイル:** <path>\n"
        "- **実行手順:** `python tools/release.py --write`\n"
        "- **検証結果:** link audit 0 issues / JSON valid / LF / counts synced\n"
        "- **残タスク:** <follow-up>\n\n"
        "### English\n\n"
        f"- **{now} / Context:** <why>\n"
        "- **Scope / Primary files / Steps / Validation / Follow-up:** <fill>\n\n"
        "### 中文\n\n"
        f"- **{now} / 背景:** <为什么>\n"
        "- **范围 / 主要文件 / 步骤 / 验证 / 后续:** <填写>\n\n"
    )
    match = re.search(r"^## \d{4}-\d{2}-\d{2}", text, flags=re.MULTILINE)
    if not match:
        return False
    new = text[: match.start()] + block + text[match.start() :]
    CHANGELOG.write_text(new, encoding="utf-8", newline="\n")
    return True


# --------------------------------------------------------------------------- #
# Orchestration                                                               #
# --------------------------------------------------------------------------- #
def main() -> int:
    parser = argparse.ArgumentParser(description="FinWiki release orchestrator.")
    parser.add_argument("--check", action="store_true", help="report-only mode (default; mutates nothing)")
    parser.add_argument("--write", action="store_true", help="perform mutations")
    parser.add_argument("--changelog", metavar="TITLE", help="scaffold a CHANGELOG entry (with --write)")
    parser.add_argument("--strict", action="store_true", help="exit 1 on count drift in check mode")
    parser.add_argument("--skip-audit", action="store_true", help="skip the link-audit gate")
    args = parser.parse_args()
    if args.check and args.write:
        parser.error("--check and --write are mutually exclusive")

    mode = "WRITE" if args.write else "CHECK"
    print(f"=== FinWiki release ({mode}) ===")

    # Stage 1: audit gate.
    if not args.skip_audit:
        ok, entries, issues = run_audit(write_report=args.write)
        print(f"[1] link audit: entries={entries} issues={issues} -> {'PASS' if ok else 'FAIL'}")
        if not ok:
            print("    broken links present; fix before releasing. See wiki-link-improvement-plan.md")
            return 2
    else:
        ok, entries, issues = True, 0, 0
        print("[1] link audit: skipped")

    # Stage 2/4: canonical counts.
    if args.write:
        print("[2] regenerating discovery surface + footer timestamp")
        run_tool("generate_ai_discovery.py")
        run_tool("update_footer_timestamp.py")
        counts = counts_from_ai_index()
    else:
        counts = compute_counts(entries, issues)
    print(
        f"[2] canonical counts: md={counts.markdown_files} domains={counts.topical_domains} "
        f"entries={counts.link_audited_entries} chars={counts.nonspace_chars:,} "
        f"(~{counts.chars_man}万/{counts.chars_m}M) tokens={counts.word_tokens:,} "
        f"(~{counts.tokens_man}万/{counts.tokens_m}M)"
    )

    # Stage 3: count sync / drift.
    readme_old = README.read_text(encoding="utf-8")
    index_old = INDEX_HTML.read_text(encoding="utf-8")
    readme_new = sync_readme_text(readme_old, counts, today_jst())
    index_new = sync_index_html_text(index_old, counts)
    drift = diff_lines(readme_old, readme_new, "README") + diff_lines(index_old, index_new, "index.html")

    if args.write:
        if readme_new != readme_old:
            README.write_text(readme_new, encoding="utf-8", newline="\n")
        if index_new != index_old:
            INDEX_HTML.write_text(index_new, encoding="utf-8", newline="\n")
        print(f"[3] counts synced: {len(drift) // 2} line(s) updated across README + index.html")
    elif drift:
        print(f"[3] count DRIFT detected ({len(drift) // 2} line(s)) — run --write to sync:")
        print("\n".join(drift))
    else:
        print("[3] counts: in sync")

    # Stage 6: changelog scaffold.
    if args.write and args.changelog:
        done = scaffold_changelog(args.changelog)
        print(f"[6] CHANGELOG scaffold: {'inserted' if done else 'SKIPPED (no dated record found)'}")

    # Stage 5: verification.
    problems = verify()
    print(f"[5] verify: {'OK (JSON valid, LF endings)' if not problems else str(len(problems)) + ' problem(s)'}")
    for p in problems[:20]:
        print(f"    - {p}")

    # Remaining manual steps.
    print("\n--- remaining manual steps ---")
    if args.write:
        print("  1. Review `git diff` (counts, discovery files, footer).")
        print("  2. Write the real CHANGELOG narrative (replace scaffold placeholders).")
        print("  3. Sync README.md / index.html prose if domains or coverage changed.")
        print("  4. Commit, push origin/main, verify remote HEAD, publish GitHub Release (JA title, trilingual body).")
    else:
        print("  Run `python tools/release.py --write` to regenerate + sync, then commit/push.")

    return 1 if (not args.write and drift and args.strict) else 0


if __name__ == "__main__":
    raise SystemExit(main())
