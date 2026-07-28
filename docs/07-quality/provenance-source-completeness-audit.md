# Provenance / Source-Completeness Audit Design

> Issue #34 planning artifact and source design for `tools/provenance_completeness_audit.ts`. The current implementation is read-only and report-only; it does not edit corpus pages or add a release gate.

## Goal

Design a read-only audit that measures whether factual claims have traceable public-source provenance through FinWiki's `^[marker]` system and source metadata.

## Relationship To Other Truthfulness Audits

| Audit | Question | Relationship |
|---|---|---|
| Fact freshness (#28) | Is the claim still current against the outside world? | Uses source age and review cadence. |
| Factual consistency (#30) | Do FinWiki pages agree with each other? | Compares repeated internal facts. |
| Provenance completeness (#34) | Is a claim sourced at all, and how well? | Measures marker / source coverage before freshness or consistency can be trusted. |

The audits should remain separate reports but can later feed a shared page risk score.

## What Counts As A Claim

Phase 1 should focus on claims that are likely to require a source:

| Claim type | Examples | Provenance expectation |
|---|---|---|
| Numeric facts | AUM, capital, ownership percentage, market share, member count, branch count. | Nearby `^[marker]` or paragraph-level source marker. |
| Dates | incorporation, merger, licence, listing, delisting, enforcement, report date. | Marker in same sentence or nearby sentence. |
| Regulatory status | licensed, registered, revoked, pending, Type I FIBO, funds-transfer operator. | Marker or source-listed frontmatter source. |
| Entity relationships | parent, subsidiary, affiliate, group company, shareholder, trust/custody role. | Marker close to relationship sentence. |
| Product / system attributes | settlement model, clearing operator, legal instrument, benchmark regime. | Marker in paragraph or section. |
| Public case facts | announcement, completion, transaction structure, public filing statement. | Marker in same paragraph. |

Claims that do not need mandatory markers in phase 1:

- Generic navigation prose.
- Section introductions with no factual assertion.
- Reader guidance such as "read this with another page".
- Footer `## Related` links.
- Historical release-note prose.
- Code examples and command snippets.

## Detection Heuristics

Use deterministic heuristics first:

1. Parse source Markdown pages only; exclude `docs/`, generated outputs, `site/src/content/i18n/`, release notes, and `CHANGELOG.md`.
2. Split body into paragraphs, list items, and table rows.
3. Detect candidate claim signals:
   - numbers, percentages, currency, counts, ratios;
   - ISO dates and Japanese date patterns;
   - registration / licence terms;
   - relationship terms such as subsidiary, parent, affiliate, shareholder;
   - status terms such as active, revoked, listed, delisted, approved.
4. Detect provenance markers with `^[marker]` syntax and frontmatter `sources`.
5. Score each block by claim-signal density versus marker proximity.
6. Emit rows below threshold as `needs_review`, not hard failures.

## Report Shape

Command proposal:

```bash
bun tools/provenance_completeness_audit.ts
bun tools/provenance_completeness_audit.ts --json
bun tools/provenance_completeness_audit.ts --domain payment-firms
bun tools/provenance_completeness_audit.ts --fail-under 0.70
```

Default output should exit 0 and write nothing.

Human-readable summary:

```text
provenance_pages_checked=1476
pages_below_threshold=12
claim_blocks_checked=18420
claim_blocks_needs_review=96

[needs_review]
path: payment-firms/example.md
line: 42
claim_signals: percentage,date,relationship
marker_distance: none_in_paragraph
confidence: likely
suggested_action: add or move a public-source marker near the claim, or mark as prose if false positive
```

JSON row fields:

| Field | Meaning |
|---|---|
| `severity` | `needs_review`, `warning`, or `informational`. |
| `path` / `line` | Source location. |
| `block_type` | paragraph, list_item, or table_row. |
| `claim_signals` | Detected signal categories. |
| `marker_count` | Markers in block and nearby window. |
| `source_count` | Frontmatter source count. |
| `score` | Deterministic 0-1 provenance score. |
| `reason` | Stable reason code. |
| `suggested_action` | Human maintainer action. |

Reason codes:

- `numeric_claim_without_marker`
- `date_claim_without_marker`
- `regulatory_status_without_marker`
- `relationship_without_marker`
- `low_marker_density`
- `confidence_marker_mismatch`
- `table_row_without_marker`
- `frontmatter_sources_missing`

## False-Positive Controls

- Ignore `## Related` and `## Sources`.
- Ignore navigation-only `## Wiki route` sentences unless they contain numbers, dates, or regulatory status.
- Do not require every table cell to carry a marker when the table has a caption / preceding paragraph marker.
- Treat frontmatter `sources` as a weak page-level signal, not enough for dense factual paragraphs.
- Treat quoted law / source titles carefully; a date inside a source title is not necessarily a claim.
- Start report-only; do not wire into release gate until a baseline is triaged.
- Support inline ignore comments only after the first report shows recurring unavoidable false positives.

## Calibration Update - 2026-06-22

The first merged implementation intentionally started conservative, but the default threshold over-weighted `confidence: likely` / `confidence: certain` pages without nearby `^[marker]` syntax. On the current corpus, `bun tools/provenance_completeness_audit.ts --json` produced:

| Run | Total rows | `needs_review` | `warning` | Main cause |
|---|---:|---:|---:|---|
| Pre-calibration | 15,427 | 15,427 | 0 | `confidence_marker_mismatch` accounted for 14,963 rows. |
| Post-calibration | 6,429 | 13 | 6,416 | Table rows without local markers remain visible as warnings. |

The calibrated rule keeps the report read-only and deterministic while making `needs_review` an actionable minority:

- A same-block marker remains full provenance coverage.
- A nearby marker scores strongly enough to avoid review.
- Frontmatter `sources` now provide a moderate page-level provenance signal for ordinary one-signal blocks.
- Missing frontmatter `sources` still scores poorly.
- Unmarked table rows and dense multi-signal blocks remain below the default threshold as warnings.
- High-confidence pages no longer create `needs_review` by themselves; they need sparse source inventory plus multiple claim signals.

The default threshold remains `0.70`. Rows below `0.50` are `needs_review`; rows from `0.50` to below `0.70` are `warning`. `--fail-under` remains an explicit reviewer gate and is not wired into release checks.

## Table-Proximity Calibration - 2026-07-29

Issue #219 replaces the original per-row table heuristic with a bounded table-scope contract. The issue snapshot contained 6,311 `table_row_without_marker` warnings. After Issue #220 changed three agent-infrastructure entries, the exact release base contained 6,313 such rows across 1,089 paths and 39 domains.

### Deterministic table contract

A factual table row is covered when the row itself contains either a `^[marker]` or a direct absolute HTTP(S) source link. A marker in one row does not cover the preceding or following row.

Whole-table coverage is recognized only in these bounded cases:

1. The table is the first substantive block after a marker-bearing or directly linked section heading.
2. The immediately preceding lead / caption contains direct evidence and either names a table / matrix / rows or ends with `:` / `：`.
3. The Markdown table header contains a marker.
4. An immediately adjacent source-labelled lead or footer is tied to a marker, a direct HTTP(S) link, or the page's public frontmatter source inventory.
5. A source-labelled block appears in the same heading section, no more than three logical blocks and twelve physical lines before or after the table.

The audit stops at `## Related` / `## Sources` (and equivalent deeper headings). A generic nearby marker without table scope, a distant source note, or a page-level source list by itself does not cover a table.

Output behavior is intentionally asymmetric:

- A homogeneous factual table with no row or table evidence emits one `table_without_provenance` row at the table start.
- A mixed table with some directly evidenced factual rows emits `table_row_without_marker` only for the remaining factual rows.
- A standard Markdown header row is structural and is not audited as a factual data row.
- Table residuals with a non-empty public frontmatter source inventory remain advisory `warning` rows. Missing source inventory can still produce `needs_review`.
- `--json` uses an awaited stdout write so the complete report remains parseable when it exceeds the operating-system pipe buffer.

### Before / after accounting

| Measure | Before calibration | After calibration |
|---|---:|---:|
| Table-related residual rows | 6,313 | 2,280 |
| Unique source paths | 1,089 | 1,064 |
| Domains | 39 | 39 |
| Table-level residuals | N/A | 2,175 |
| Mixed-table row residuals | 6,313 per-row candidates | 105 |
| Severity | 6,313 warning | 2,280 warning |

The old-row mapping is exact:

- 5,656 old row warnings consolidate into 2,175 actionable table warnings.
- 599 old row warnings are detector false positives covered by a scoped heading / lead / caption / footer / section source block or direct row link.
- 58 old row warnings remain row warnings.
- 47 additional mixed-table rows become visible because a marker in a neighbouring row no longer spills across the table.

Therefore `6,313 = 5,656 + 599 + 58`, while the calibrated residual queue is `2,175 + 58 + 47 = 2,280`. The full provenance report also contains 56 non-table `low_marker_density` warnings, for 2,336 advisory warnings total.

Representative classifications were checked across all 39 domains:

| Shape | Representative result |
|---|---|
| Marker-bearing section heading | `megabanks/mufg.md` shareholder tables are covered by their scoped heading marker. |
| Direct public link in each row | `financial-regulators/financial-reports-2020-index.md` rows are directly evidenced. |
| Linked table lead ending in a colon | The ERC-1967 slot table in `security/proxy-upgrade-rug-pattern.md` is covered by its immediate linked lead. |
| Mixed per-row markers | Unmarked rows in tables such as `asset-managers/saison-asset-management.md` remain individually visible. |
| Homogeneous table without local evidence | Tables such as the operating-constraint matrix in `banking/baas-japan-landscape.md` produce one table-level residual. |

### Residual routing

Every calibrated table residual is assigned to one bounded content issue. The batches are disjoint by first path component. This table is immutable 2026-07-29 closeout evidence; GitHub remains the live source for issue state and ordering.

| Issue | Domains | Warnings | Paths |
|---|---|---:|---:|
| #231 | agent economy, financial licences / regulators, security, systems, trade | 124 | 73 |
| #232 | asset managers, financial groups, manufacturer finance, megabanks, trading-company finance, trust banks | 170 | 89 |
| #233 | banking, cooperative banks | 146 | 69 |
| #234 | business, corporate strategy, retail | 114 | 32 |
| #235 | card issuers, consumer finance, leasing, loyalty | 135 | 64 |
| #236 | derivatives, structured finance | 196 | 54 |
| #237 | exchanges | 123 | 81 |
| #238 | finance, real-estate finance | 233 | 49 |
| #239 | fintech | 162 | 65 |
| #240 | foreign financial institutions, money market, non-profit, policy finance | 176 | 96 |
| #241 | insurance, life insurers, non-life insurers | 186 | 116 |
| #242 | payment firms, payments | 208 | 90 |
| #243 | regional banks | 169 | 122 |
| #244 | securities, securities firms | 138 | 64 |
| **Total** | **39 domains** | **2,280** | **1,064** |

## Provenance Value Signal

Add a future roadmap signal:

```text
provenance_coverage = sourced_claim_blocks / claim_blocks_requiring_source
```

Suggested interpretation:

| Coverage | Meaning |
|---:|---|
| `>= 0.90` | strong source completeness |
| `0.75 - 0.89` | usable, needs targeted review |
| `0.50 - 0.74` | thin sourcing |
| `< 0.50` | source-completeness risk |

Do not compare domains until the false-positive rate is understood; some domains naturally contain denser tables and dates.

## Feasibility Call

| Approach | Use | Decision |
|---|---|---|
| Deterministic block heuristics | Phase 1 source-density report. | Accept. |
| Deterministic plus seeded fixtures | Validate reason codes and thresholds. | Accept. |
| LLM-assisted claim classification | Later review aid for ambiguous prose. | Defer. |
| Automatic source insertion | Could fabricate or misplace evidence. | Reject. |

## Build Task Packet

```text
ROLE:
Code implementation agent for FinWiki quality tooling.

GOAL:
Add a read-only provenance/source-completeness audit that reports likely under-sourced factual claim blocks.

SOURCE OF TRUTH:
- docs/07-quality/provenance-source-completeness-audit.md
- docs/06-implementation/entry-authoring.md
- SCHEMA.md
- docs/07-quality/gotchas.md

ALLOWED FILES:
- tools/provenance_completeness_audit.ts
- package.json
- docs/07-quality/test-plan.md or docs/07-quality/qa-checklist.md if documenting the command
- fixtures under tools/ if the repo has a fixture pattern

FORBIDDEN:
- No corpus edits.
- No automatic source insertion.
- No release-gate hard failure in the first implementation.
- No LLM dependency in the default command.

IMPLEMENTATION RULES:
- Reuse existing Markdown walking helpers where possible.
- Exclude docs/, site i18n mirrors, generated outputs, CHANGELOG, and releases.
- Default command exits 0.
- `--json` emits stable rows.
- `--fail-under` is optional and must be explicit.
- Add stable reason codes and deterministic ordering.

VALIDATION:
- `bun tools/provenance_completeness_audit.ts`
- `bun tools/provenance_completeness_audit.ts --json`
- seeded fixture / temporary sample proving low-score detection, then fixture cleanup if not retained
- `bun run docs:audit`
- `bun tools/release.ts --check --strict`
- `git diff --check`
```

## Implementation Note

Issue #41 implements the first deterministic block-heuristic report as `bun tools/provenance_completeness_audit.ts`. The default command exits 0 and writes nothing; `--json` emits deterministic rows; `--fail-under` is explicit and should not be treated as a release gate until a baseline is reviewed.

## Closeout For Issue #34

Issue #34 is complete when this design is linked from the docs index / roadmap, docs audit passes, and the follow-up build issue can be opened from the task packet above.
