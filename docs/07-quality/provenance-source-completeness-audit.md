# Provenance / Source-Completeness Audit Design

> Issue #34 planning artifact. This is design-only: it does not implement a tool, edit corpus pages, or add a release gate.

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

## Closeout For Issue #34

Issue #34 is complete when this design is linked from the docs index / roadmap, docs audit passes, and the follow-up build issue can be opened from the task packet above.
