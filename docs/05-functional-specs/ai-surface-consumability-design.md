# AI Surface Consumability Design

> Issue #33 planning artifact. This is design-only: it does not change `llms.txt`, `llms-full.txt`, `ai-index.json`, `api/`, or tooling.

## Goal

Assess how useful FinWiki's machine-readable surfaces are for agents and define a build packet for making them more consumable after the entity-graph work in #29.

## Current Surface

| Surface | Current role | Known limitation |
|---|---|---|
| `llms.txt` | Compact AI-readable entry point. | Good as a map, but not enough for structured retrieval decisions. |
| `llms-full.txt` | Full manifest with links and page summaries. | Large and navigable, but agents still need to parse text for identity and relationship data. |
| `ai-index.json` | Structured corpus index. | Best home for entity-level routing, but #29 entity graph is still design-stage. |
| `api/entries/*.json` | Static per-entry JSON artifacts. | Curated subset; historically omits fields such as `canonical_anchor`, `related`, `note`, and `type`. |
| `api/entries/index.json` | Entry inventory. | Useful for route enumeration but not for graph traversal. |

Current scale reference: release checks report about 1,476 API entries. A field-shape change affects the whole static API set and must be treated as generated-surface work.

## Design Decision

Use a staged static-first plan:

1. **Phase 1: Per-entry API enrichment.** Add low-risk frontmatter fields that already exist in source pages and are safe for public output.
2. **Phase 2: Entity-edge exposure.** After #29 defines `entity_node` / `entity_edges`, expose graph edges in `ai-index.json` and summarize them in `llms-full.txt`.
3. **Phase 3: Navigability tuning.** Improve `llms.txt` sectioning only after phases 1-2 reveal what agents need to find first.
4. **Phase 4: Queryable interface decision.** Defer MCP / dynamic API until static files prove insufficient.

Feasibility call: static enrichment is warranted now; MCP is not warranted until the entity graph and enriched static API are live and measured.

## Per-Entry API Completeness

Add these fields to `api/entries/*.json` when present in frontmatter:

| Field | Reason | Exposure rule |
|---|---|---|
| `canonical_anchor` | Lets a per-entry consumer resolve mirror pages to entity anchors. | Include string or `null`. |
| `related` | Gives lightweight graph hints already curated by authors. | Include array of strings; omit unsafe or non-string values. |
| `note` | Carries caveats such as boundary / mirror notes. | Include string when present. |
| `type` | Distinguishes ordinary wiki entries from special-purpose pages when present. | Include string when present. |
| `sources` | Already part of public frontmatter; useful for provenance-aware agents. | Preserve existing sanitized URL / source strings. |

Do not add raw body text to per-entry API in this phase. `llms-full.txt` already carries full manifest behavior, and duplicating bodies across JSON would increase churn and output size.

## Entity-Edge Exposure

Coordinate with #29:

- Keep `canonical_anchor` as the backward-compatible identity signal.
- Add explicit graph fields only after #29's taxonomy is accepted.
- `ai-index.json` should own machine graph traversal: entity id, anchor, members, edge type, target, confidence / evidence basis when available.
- `llms-full.txt` should expose a compact human-readable edge summary per page, not full graph JSON.
- `llms.txt` should point agents to `ai-index.json` for structured graph retrieval rather than duplicating graph data.

## `llms.txt` Navigability

Keep `llms.txt` compact. Improvements should be structural, not verbose:

- Keep top-level corpus snapshot and route list.
- Add a short "Best machine surfaces" section that routes agents to `ai-index.json`, `llms-full.txt`, and `api/entries/index.json`.
- Keep issue / task links separate from content entry links.
- Do not expose `docs/` as crawlable markdown links.

## Queryable Interface Assessment

| Option | Benefit | Cost / risk | Decision |
|---|---|---|---|
| Static JSON enrichment | Works on GitHub Pages / Vercel static hosting, no auth, easy diff review. | Full generated diff when schema changes. | Do first. |
| Client-side query library over static JSON | No server; could power future human/agent filters. | Adds bundle/runtime complexity. | Consider after static schema stabilizes. |
| Hosted API endpoint | Flexible filtering and smaller client downloads. | Requires deployment/runtime contract and monitoring. | Defer. |
| MCP server | Agent-native querying and tool semantics. | New operational surface; not needed until graph data is richer. | Defer; write a separate issue only if static files are insufficient. |

## Task Packet For Build Issue

```text
ROLE:
Code implementation agent for FinWiki generated surfaces.

GOAL:
Improve AI-surface consumability by enriching per-entry static API output and lightly clarifying machine-entry routing.

SOURCE OF TRUTH:
- docs/05-functional-specs/ai-surface-consumability-design.md
- docs/05-functional-specs/ai-discovery-surface.md
- docs/04-architecture/ai-discovery-architecture.md
- docs/04-architecture/canonical-entity-graph-design.md
- tools/generate_ai_discovery.ts

ALLOWED FILES:
- tools/generate_ai_discovery.ts
- docs/05-functional-specs/ai-discovery-surface.md
- docs/04-architecture/ai-discovery-architecture.md
- tests / fixtures if the repo has generated-surface tests
- generated outputs from `bun tools/release.ts --write`
- README.md, CHANGELOG.md, releases/*.md if public generated surfaces change

FORBIDDEN:
- No corpus content edits.
- No MCP implementation in the first build issue.
- No dynamic server/API runtime in the first build issue.
- No docs/ leakage into generated surfaces.

IMPLEMENTATION RULES:
- Preserve existing API fields and add new fields backward-compatibly.
- Emit `null` only where current API convention already prefers explicit nulls; otherwise omit absent optional fields consistently.
- Clean `api/entries/` before regeneration as the current architecture requires.
- Keep generated output deterministic.

VALIDATION:
- `bun tools/release.ts --write`
- `bun tools/release.ts --check --strict`
- `bun run surface:drift`
- `bun run ai:audit`
- targeted JSON inspection for `canonical_anchor`, `related`, `note`, and `type`
- `git diff --check`
```

## Closeout For Issue #33

Issue #33 is complete when this design and task packet are linked from the docs index / roadmap, docs audit passes, and the build work is split into a follow-up issue instead of being mixed into the planning issue.
