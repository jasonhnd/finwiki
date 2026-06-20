# Cross-Page Factual Consistency Audit Design

> Issue #30 planning artifact. This document is design-only: it does not implement tooling, edit corpus pages, or change release gates.

## Problem

FinWiki already checks structural integrity: wikilinks resolve, counts are synchronized, i18n mirrors report source-hash freshness, generated surfaces do not leak `docs/`, and declared `canonical_anchor` values do not drift.

Those gates do not check whether two pages agree on the same fact. Examples:

- the same licence or registration number differs between an operator page and a registry page;
- a merger date appears as announcement date on one page and completion date on another without a label;
- a parent / subsidiary relationship is updated in one entity page but remains stale in a peer page;
- the same market figure is repeated with different units or periods;
- one page says an operator is registered while another says pending / revoked / not registered.

This audit should report likely cross-page factual conflicts so a maintainer can triage them. It should not auto-edit content or attempt to decide contested facts without public-source review.

## Relationship To Fact Freshness

Fact freshness (#28) asks: "Is this fact still true against the outside world?"

Factual consistency asks: "Do FinWiki pages that state the same fact agree with each other?"

The two systems should share vocabulary and eventually share page risk signals, but they should remain separate reports. A page can be fresh but internally inconsistent with another page, and an internally consistent claim can still be stale against the world.

## Design Decision

Use a hybrid, staged design:

1. **Deterministic extraction first** for high-precision claim types: registration numbers, dates with labels, numeric values with units, canonical entity anchors, aliases, and frontmatter fields.
2. **Entity-scoped comparison** so repeated numbers are compared only when pages share an entity, anchor, registry route, or explicit wikilink context.
3. **LLM-assisted review only later** for prose claims that deterministic extraction cannot safely normalize.
4. **Read-only by default**. The first implementation is a report like `i18n:status`, not a release gate.

This keeps false positives low and lets maintainers calibrate before wiring anything into CI.

## What To Compare

### High-Precision Signals

| Signal | Examples | First-wave priority |
|---|---|---|
| Licence / registration numbers | `関東財務局長第00068号`, `登録番号`, `No. 00040`, FIEA registration numbers. | High |
| Dates with labels | incorporation date, merger date, announcement date, licence date, delisting date, issue date. | High |
| Numeric values with unit and label | capital, branch count, AUM, market share, number of stores, member count, page count. | Medium |
| Parent / subsidiary phrases | `100% subsidiary`, `group company`, `owned by`, `shareholder`. | Medium |
| Status labels | active / revoked / pending / completed / cancelled / deprecated. | Medium |
| Canonical identity | `canonical_anchor`, title, aliases, resolved wikilinks. | High as grouping input |

### Do Not Compare In Phase 1

- free-floating numbers with no label or unit;
- projections, forecasts, and scenario tables;
- historical financial statements across different periods;
- translated i18n mirrors, because source pages are the comparison authority;
- release notes and historical CHANGELOG facts, because they intentionally preserve point-in-time records;
- stylistic differences or different summary wording.

## Conflict Versus Legitimate Difference

The audit should compare claim records with a normalized shape:

```json
{
  "claim_type": "registration_number",
  "entity_key": "payment-firms/paypay",
  "metric_key": "funds_transfer_registration_number",
  "value": "00068",
  "unit": null,
  "period": null,
  "as_of": "2026-06-20",
  "label": "funds transfer registration",
  "source_path": "payment-firms/paypay.md",
  "line": 52,
  "evidence": "body"
}
```

A conflict exists when:

- `entity_key` and `metric_key` match;
- the normalized `value` differs;
- the period / as-of date is the same or absent on both sides;
- neither side is explicitly historical, deprecated, quoted, or release-history prose.

A legitimate difference exists when:

- metric labels differ (`capital` vs `AUM`, `announcement date` vs `completion date`);
- periods differ (`FY2024` vs `FY2025`, `as of 2025-03-31` vs `as of 2026-03-31`);
- one value is a range or approximate and the other is exact with a source date;
- the page is a historical case study and the date is explicitly part of a timeline;
- one page quotes a past public statement and another states current status;
- the values are from different legal entities inside the same group.

## Entity And Metric Scoping

False positives usually come from comparing unrelated repeated numbers. The build should therefore require both an entity scope and a metric scope.

### Entity Scope

Use these signals in order:

1. `canonical_anchor` cluster if present.
2. Future `entity_node` / `entity_edges` once #29 infrastructure exists.
3. Exact page path when comparing a page to its registry / index route.
4. Alias / title match within a known institution domain.
5. Explicit wikilink context, such as an operator page linking a licence registry page.

If no entity scope can be established, do not compare the fact automatically.

### Metric Scope

Use deterministic labels before comparing values:

| Metric key | Label examples |
|---|---|
| `funds_transfer_registration_number` | funds transfer, 資金移動業, registration no. |
| `prepaid_registration_number` | prepaid, 前払式支払手段. |
| `fibo_registration_number` | financial instruments business operator, FIBO, 金融商品取引業. |
| `credit_purchase_registration_number` | comprehensive credit purchase, 包括信用購入あっせん. |
| `established_date` | established, incorporated, 設立. |
| `merger_effective_date` | merger effective, 合併効力発生日. |
| `listed_market` | TSE Prime, listed market. |
| `parent_entity` | parent, shareholder, subsidiary, group. |

The first implementation should hard-code a small metric dictionary and print `unknown_metric` candidates separately for review.

## Report Shape

Command proposal:

```bash
bun tools/factual_consistency_audit.ts
bun tools/factual_consistency_audit.ts --json
bun tools/factual_consistency_audit.ts --entity payment-firms/paypay
bun tools/factual_consistency_audit.ts --type registration_number
bun tools/factual_consistency_audit.ts --fail-on-conflicts
```

Default output should exit 0 and write nothing.

Human-readable report:

```text
factual_consistency_conflicts=2
candidates_reviewed=184

[registration_number_conflict]
entity: payment-firms/paypay
metric: funds_transfer_registration_number
left: payment-firms/paypay.md:52 -> 00068
right: payments/funds-transfer-operators-japan-index.md:88 -> 00086
reason: same entity + same metric + no period distinction
suggested_action: recheck FSA funds-transfer list and update stale page
```

JSON row fields:

| Field | Meaning |
|---|---|
| `severity` | `conflict`, `needs_review`, or `informational`. |
| `claim_type` | `registration_number`, `date`, `numeric_metric`, `status`, `relationship`. |
| `entity_key` | Canonical page path or scoped entity identifier. |
| `metric_key` | Normalized metric label. |
| `left` / `right` | Claim record with path, line, value, normalized value, period, label, evidence. |
| `reason` | Stable reason code. |
| `suggested_action` | Human-maintainer next step. |

Reason codes should be stable:

- `same_metric_different_value`
- `same_registration_number_different_entity`
- `same_entity_different_status`
- `same_entity_different_parent`
- `date_label_collision`
- `period_missing_on_one_side`
- `needs_metric_label_review`

## False-Positive Controls

1. **Ignore i18n mirrors**. Source pages are authoritative.
2. **Ignore historical release notes and CHANGELOG rows** for conflict detection.
3. **Require metric labels**. Do not compare bare numbers.
4. **Require entity scope**. Do not compare values across unrelated pages.
5. **Respect periods**. Same metric with different period is not a conflict.
6. **Treat ranges and approximate values as lower severity** unless both sides are exact.
7. **Use allowlists before broad regexes**. Start with licence / registration and dated status facts.
8. **Emit `needs_review` rather than failure for ambiguous prose**.
9. **Do not gate release initially**. Gate only after first baseline is triaged and false-positive rate is acceptable.

## Implementation Feasibility

| Approach | Use | Decision |
|---|---|---|
| Deterministic regex + dictionaries | registration numbers, labelled dates, labelled numeric facts. | Phase 1 default. |
| Deterministic graph scoping | canonical anchors, aliases, wikilinks, future entity graph. | Phase 1 default. |
| LLM-assisted claim matching | prose relationships, ambiguous status claims. | Phase 2 optional. |
| Full LLM audit of all pages | broad comparison. | Reject for now: high cost, poor reproducibility, hard to gate. |

Feasibility call: **hybrid, deterministic-first**. Build a deterministic read-only command and reserve LLM assistance for a later offline triage mode that produces candidates, not gate failures.

## Build Task Packet

```text
ROLE:
Code implementation agent for FinWiki.

GOAL:
Add a read-only factual-consistency audit that finds likely cross-page conflicts in repeated public facts.

SOURCE OF TRUTH:
- docs/07-quality/cross-page-factual-consistency-audit.md
- tools/wiki_link_audit.ts
- docs/06-implementation/entry-authoring.md
- docs/07-quality/gotchas.md
- docs/04-architecture/fact-freshness-source-recheck.md

ALLOWED FILES:
- tools/factual_consistency_audit.ts
- package.json
- docs/07-quality/test-plan.md or docs/07-quality/qa-checklist.md if documenting the command
- docs/07-quality/cross-page-factual-consistency-audit.md only for small clarifications

FORBIDDEN FILES:
- No corpus body edits.
- No i18n mirror edits.
- No SCHEMA.md migration in first implementation.
- No release-gate hard wiring until the first report is reviewed.

IMPLEMENTATION RULES:
- Reuse existing corpus walking / frontmatter parsing helpers where possible.
- Exclude docs/, site/, generated outputs, i18n mirrors, release notes, and CHANGELOG historical prose from claim extraction.
- Default command exits 0 and writes nothing.
- `--json` emits stable rows.
- `--fail-on-conflicts` exits non-zero only for severity `conflict`, not `needs_review`.
- Add `--entity` and `--type` filters if low-cost.

FIRST-WAVE CLAIM TYPES:
- registration / licence numbers;
- labelled dates;
- labelled numeric values with units;
- simple parent / subsidiary and active / revoked / pending status candidates.

ACCEPTANCE:
- Reports rows with path, line, entity_key, metric_key, left/right values, reason, and suggested_action.
- Does not compare bare repeated numbers without a label.
- Does not report release-history or i18n mirror conflicts.
- Has a seeded temporary case proving `--fail-on-conflicts` exits non-zero, then removes the fixture.

VALIDATION:
- `bun tools/factual_consistency_audit.ts`
- `bun tools/factual_consistency_audit.ts --json`
- seeded conflict fixture with `--fail-on-conflicts`, then fixture removed
- `bun run docs:audit`
- `bun tools/release.ts --check --strict`
- `git diff --check`

RELEASE IMPACT:
Tooling/report only. No content release note unless the implementation also changes public snapshots.
```

## Non-Goals

- No automatic correction of facts.
- No web verification against external sources.
- No style or translation consistency audit.
- No release-gate failure in the design issue.
- No attempt to compare every number in the corpus.

## Closeout For Issue #30

Issue #30 is complete when this design is linked from the developer-docs index / planning docs, and `bun run docs:audit` plus `git diff --check` pass. Implementation should be opened as a separate tooling issue using the task packet above.
