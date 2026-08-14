# Compact Human-Site Read Surface

Status: accepted specification for Issue #280

Date: 2026-08-14 JST

Parents: Horizon 3 in [roadmap.md](../01-strategy/roadmap.md). Deepens [Human Site Reading Experience](human-site-reading-experience-spec.md) without replacing it.

Scope: specification only. This file does not authorize `site/src/**` edits. Implementation belongs to a follow-up issue.

## Goal

Give a human reader one compact way to see **what the wiki currently covers** and **which pages are the same legal entity**, without turning the site into an operations console.

## Show

| Component | Data source | Reader job |
|---|---|---|
| Domain coverage map | Existing domain indexes and `ai-index.json` domain counts | Answer "what exists here?" |
| Anchor / mirror grouping | Already-declared `canonical_anchor` (currently 12 live mirrors) | Answer "is this the same entity as that page?" |
| Browse excerpts | Existing title + first lead / TL;DR already rendered on domain pages | Answer "should I open this?" |

These surfaces reuse maintained public corpus fields. They must not invent new relationship types.

## Hide

- Provenance scores, freshness labels, review-overdue badges, and audit residual counts
- Typed `entity_edges` relationship panels (Horizon 2 / #279 is still frontmatter-first)
- Quality traffic lights, maintainer dashboards, and issue-queue widgets

## Audit prerequisites before implementation

Implementation may start only while all of the following remain true on released `main`:

- table-provenance residual for `table_without_provenance` / `table_row_without_marker` is 0
- factual-consistency blocking rows are 0
- freshness `--overdue` is 0
- `canonical_anchor_drift` is 0

If any prerequisite regresses, the compact surface stays unshipped.

## Follow-up implementation

Allowed files for the later code issue: `site/src/pages/**`, `site/src/layouts/**`, `site/src/styles/global.css`. No corpus edits. No new entity curation.

## Validation for this spec issue

- `bun run docs:audit`
- `git diff --check`
