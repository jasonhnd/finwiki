# Fact Freshness And Source Recheck Design

> Planning output for GitHub Issue #28. This is a design and task packet only; it does not implement the report command or change corpus frontmatter.

## Problem

FinWiki already gates structural freshness: wikilinks resolve, generated counts are synchronized, canonical anchors do not drift, and i18n mirrors report stale `source_hash` values. Those checks do not answer whether a public fact is still current.

Facts decay at different speeds:

- licenses can be added, revoked, renamed, or moved between regulators;
- M&A and restructuring cases can move from announced to completed, cancelled, or amended;
- statistics, market shares, solvency ratios, branch counts, employee counts, and AUM figures age quickly;
- laws, guidance, issue templates, and public registers receive dated revisions;
- entity relationships change after mergers, spinoffs, reorganizations, or listings.

The freshness system should surface pages due for public-source re-verification without auto-editing content or pretending to provide real-time market data.

## Existing Signals

The current schema already has the minimum page-level maintenance fields:

| Signal | Current meaning | Use in freshness design |
|---|---|---|
| `last_tended` | Last substantive review date, not cosmetic edit date. | Primary last-verified date for Phase 1. |
| `review_by` | Next review target date. | Primary due-date field. |
| `last_updated` | Last content update date. | Secondary: content changed, but not necessarily re-verified. |
| `confidence` | Claim confidence. | Triage weight; lower confidence pages should surface earlier. |
| `status` | Lifecycle state. | `candidate`, `borderline`, and `deprecated` need special handling. |
| `sources` | Public source list. | Required source inventory; empty or weak sources are higher risk. |

Current read-only status as of 2026-06-20:

- `release.ts --check --strict`: 1483 link-audited entries, issues=0, canonical_drift=0.
- `i18n:status --json`: source entries mirrored in ja/en, all current, stale=0, missing=0, orphaned=0, source-pointer drift=0.

The difference matters: link-audited entries include routing/control shapes that are not all translated; i18n migration cost should be estimated from source entries actually mirrored, not only from the link-audit entry count.

## Design Decision

Use a two-phase design.

### Phase 1: no schema migration

Phase 1 uses existing fields:

- `last_tended` = last human/agent public-source recheck date.
- `review_by` = next due date.
- `confidence` / `status` / domain / title keywords = risk weighting.
- `sources` = source inventory.

This can be implemented as a read-only report without changing `SCHEMA.md`, corpus entries, or i18n mirror frontmatter.

### Phase 2: optional explicit freshness metadata

Only after Phase 1 proves the report useful, consider optional frontmatter fields:

```yaml
freshness_class: high | medium | low | event
source_as_of: 2026-MM-DD
source_recheck_note: "FSA register checked; no license-state change found."
```

These fields should remain optional. Making them required would create a broad migration and mirror-sync burden before the workflow has proved value.

## Volatility Classes

The report should assign each page an effective volatility class. A future optional `freshness_class` may override the inferred class, but Phase 1 should infer from domain, tags, title, and body/source cues.

| Class | Typical pages | Cadence | Rationale |
|---|---|---:|---|
| `event` | Announced M&A, TOB, spinoff, IPO, enforcement action, licensing application, bankruptcy, migration deadline. | 30-45 days until stabilized. | The state can change materially on a dated event path. |
| `high` | Market-share pages, statistics, public-register snapshots, active regulation implementation, live product/operator comparisons. | 90 days. | The page can become misleading even if links still resolve. |
| `medium` | Entity operating profiles, license-stack explainers, group-relationship pages, recurring policy-finance or insurer pages. | 180 days. | Usually stable, but ownership, licenses, and disclosures change. |
| `low` | Durable mechanism explainers, glossary-like concepts, legal-framework overviews without current statistics. | 365 days. | Facts decay slowly but still need annual re-read. |

Suggested inferred rules:

- `status: candidate` or `confidence: possible` promotes at least to `high`.
- `status: borderline` is always due until rechecked.
- `status: deprecated` should be excluded from ordinary freshness queues unless it has inbound traffic or an active forward route.
- Domains such as `financial-regulators`, `financial-licenses`, `exchanges`, `fintech`, `business`, `corporate-strategy`, `securities`, and entity-heavy JapanFG-split domains start at `medium` or above.
- Titles/body containing `2024`, `2025`, `2026`, `case`, `matrix`, `market share`, `registry`, `implementation`, `status`, `licensing`, `TOB`, `MBO`, `IPO`, `spinoff`, `closure`, `revocation`, or `deadline` should be considered higher volatility unless explicitly overridden.

## Staleness Heuristic

The future command should produce a read-only report from the current repository state.

A page is due when any condition is true:

1. `review_by` is missing or earlier than the report date.
2. `last_tended` is missing.
3. inferred volatility cadence says the page is older than its class window.
4. `confidence` is `possible` / `unlikely` or `status` is `candidate` / `borderline`.
5. `sources` is empty or source inventory is weak for the claim type.
6. optional future `source_as_of` is older than the volatility cadence.

Suggested output fields:

| Field | Meaning |
|---|---|
| `path` | Source markdown path. |
| `domain` | Owning domain. |
| `title` | Frontmatter title or H1. |
| `freshness_class` | Effective class after inference / override. |
| `last_tended` | Current frontmatter value. |
| `review_by` | Current due date. |
| `days_overdue` | Positive when already due. |
| `reasons[]` | Machine-readable reason codes. |
| `sources_count` | Count of public source items. |
| `suggested_next_review_by` | Date to set after re-verification. |

Reason codes should be stable, for example:

- `missing_last_tended`
- `missing_review_by`
- `review_by_due`
- `cadence_due`
- `low_confidence`
- `borderline_status`
- `candidate_status`
- `empty_sources`
- `event_keyword`
- `registry_or_statistics_keyword`

## Command Shape

The Phase 1 implementation mirrors `i18n:status` as a read-only audit:

```bash
bun tools/fact_freshness_audit.ts
bun tools/fact_freshness_audit.ts --json
bun tools/fact_freshness_audit.ts --overdue
bun tools/fact_freshness_audit.ts --as-of 2026-06-20
bun tools/fact_freshness_audit.ts --fail-under 0.70
```

Default mode is silent and exits 0. `--json` emits stable machine-readable rows, `--overdue` prints a human queue, and `--fail-under` is an explicit opt-in gate for reviewers who want to enforce a minimum freshness score. It is not wired into the release gate.

The report should ignore `docs/`, i18n mirrors, generated outputs, and private/workspace folders using the same corpus-walk boundaries as `lib/markdown_helpers.ts`.

## Recording A Re-Verification

When a maintainer rechecks an entry against public sources:

1. Update `last_tended` to the recheck date.
2. Update `review_by` according to the effective volatility class.
3. Update `last_updated` only if the body/frontmatter facts changed.
4. Refresh `sources` if public URLs changed or a better official source is found.
5. For high-volatility facts, add or update a short public-source note in the body, such as a `校核状態` blockquote or a dated sentence in `## Sources`.
6. If content changes, run the normal content/i18n/release flow; if only `last_tended` / `review_by` changes, it is still a source-entry frontmatter change and may make i18n mirrors stale unless the i18n pipeline deliberately ignores maintenance-only frontmatter in the future.

The system should not auto-edit entries. It should output a queue and let a content/review issue record the actual evidence.

## SCHEMA And Migration Assessment

No required SCHEMA change is needed for Phase 1. The existing `last_tended` and `review_by` fields already encode page-level freshness.

Migration cost if new required fields were added:

- Source-side public wiki entries: about 1483 link-audited entries.
- Translated mirror layer: `i18n:status` currently reports source entries mirrored across ja/en; use the live command output for exact file counts.
- Total touch surface for a required metadata migration could therefore exceed 5700 Markdown files before generated-surface updates.

That is not justified before the report has proved useful. Optional fields can be introduced later with sparse adoption on high-volatility pages.

Potential Phase 2 schema additions:

| Field | Type | Cost / risk |
|---|---|---|
| `freshness_class` | enum | Useful override, but broad required migration is too costly. Optional only. |
| `source_as_of` | ISO date | Helpful for statistic/register pages; ambiguous for multi-source pages. Optional only. |
| `source_recheck_note` | string | Easy to abuse as private process notes; prefer public body note unless needed. |

## Build-Issue Task Packet

```text
ROLE: Code implementation agent for FinWiki.

GOAL:
- Add a read-only fact-freshness status command that reports pages due for public-source re-verification.

SOURCE OF TRUTH:
- docs/04-architecture/fact-freshness-source-recheck.md
- SCHEMA.md
- docs/04-architecture/content-model.md
- docs/06-implementation/entry-authoring.md
- docs/07-quality/gotchas.md
- docs/06-implementation/toolchain.md

ALLOWED FILES:
- tools/fact_freshness_audit.ts
- package.json
- docs/05-functional-specs/release-gate.md or docs/07-quality/test-plan.md only if documenting the command
- docs/07-quality/qa-checklist.md only if adding the check to normal QA

FORBIDDEN FILES:
- No corpus entry edits.
- No i18n mirror edits.
- No SCHEMA.md change in Phase 1.
- No release-gate hard failure wiring until the first report is triaged.

IMPLEMENTATION RULES:
- Reuse existing markdown/frontmatter helpers where possible.
- Exclude docs/, site/, generated output, i18n mirrors, and ignored workspace folders consistently with existing corpus tooling.
- Default report exits 0 and writes nothing.
- `--json` emits stable machine-readable rows.
- `--overdue` filters to due / recheck-needed rows for human output.
- `--as-of YYYY-MM-DD` makes tests deterministic.
- `--fail-under <score>` exits non-zero only when explicitly requested.

ACCEPTANCE CRITERIA:
- The command reports missing/overdue `review_by`, missing `last_tended`, weak/empty `sources`, low confidence, borderline/candidate status, and cadence-based due pages.
- It includes path, domain, title, effective freshness class, last_tended, review_by, days_overdue, reasons, sources_count, and suggested_next_review_by.
- It does not modify files.
- `--fail-under` can be exercised against the deterministic current corpus without creating temporary corpus fixtures.

VALIDATION:
- `bun tools/fact_freshness_audit.ts --as-of 2026-06-20`
- `bun tools/fact_freshness_audit.ts --json --as-of 2026-06-20`
- `bun tools/fact_freshness_audit.ts --overdue --as-of 2026-06-20`
- seeded drift/due case with `--fail-on-due` exits non-zero, then fixture removed
- `bun run docs:audit`
- `bun tools/release.ts --check --strict`
- `git diff --check`

RELEASE IMPACT:
- Tooling only. If no corpus facts or public snapshots change beyond package/docs references, no content release note is required until publish.
```

## Non-Goals

- No automatic web scraping behind logins.
- No investment-data feed, real-time market-data monitor, or price-alert system.
- No automatic content rewrite.
- No hard release-gate failure until maintainers accept the initial baseline.
- No attempt to prove that every public source has changed or not changed; the report only prioritizes review.
