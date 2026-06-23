# FinWiki Roadmap

> Planning refresh for GitHub Issue #71. This roadmap treats recurring truthfulness audits as the operating spine for future content, entity graph, and human-site work. Implementation remains issue-driven; this document does not authorize code or corpus edits by itself.

## Roadmap Spine

FinWiki should move from one-time cleanup rounds to a recurring evidence loop:

1. Run deterministic audits on a fixed cadence.
2. Triage only the rows that cross a signal threshold.
3. Open bounded remediation issues with explicit Allowed Files.
4. Fix the smallest coherent corpus batch.
5. Re-run the audits and update this roadmap when the queue shape changes.

The detailed audit cadence is defined in [Recurring Audit Cadence Design](../04-architecture/recurring-audit-cadence.md).

## Current Baseline

The quality foundation now has three read-only audit families:

| Audit | Current role | Roadmap role |
|---|---|---|
| Factual consistency | Finds likely cross-page conflicts in repeated public facts. | Keep conflicts at zero or near-zero through regular triage, then fix packets. |
| Provenance completeness | Finds factual claim blocks with weak local source markers. | Keep `needs_review` actionable and low; use warnings as planning signal, not release noise. |
| Fact freshness | Finds pages due for public-source re-verification. | Convert large one-time freshness queues into steady weekly maintenance. |

The next planning bridge is Round 2 freshness triage (#72), which should turn the freshness queue into ranked execution batches rather than an unbounded backlog.

## Cadence Operating Model

Cadence should be cheap by default and strict only where it has a high signal-to-noise ratio.

| Trigger | What runs | What happens next |
|---|---|---|
| Every 5 merged corpus/tooling PRs | Consistency, provenance, freshness JSON reports. | Compare counts to thresholds and open a triage issue only if thresholds trip. |
| Weekly maintenance window | Full read-only audit sweep. | Store command output in the issue body or report doc; create remediation packets only for actionable rows. |
| Before large corpus expansion | Full audit sweep plus targeted domain check. | Expansion waits if Tier-1 conflicts or missing-source rows are above threshold. |
| After each remediation batch | Re-run the affected audit and release gate. | If false positives remain, document them before opening the next batch. |

The steady-state target is not "zero warnings." The target is:

- `severity=conflict` consistency rows are zero before broad content expansion.
- provenance `needs_review` rows are zero for Tier-1 / canonical / high-inlink pages, with warning rows used as queue fuel.
- freshness queues are below the agreed weekly capacity, with no Tier-1 `review_by` overdue rows.

## Horizon 0: Institutionalize Truthfulness Maintenance

Timeframe: immediate planning and the next remediation cycle.

| Priority | Work | Outcome |
|---|---|---|
| H0.1 | Land the recurring audit cadence design (#71). | Maintainers have one documented loop for when audits run, how thresholds open issues, and how false positives are handled. |
| H0.2 | Land Round 2 freshness triage (#72). | The current freshness queue is ranked by importance x staleness and split into execution batches. |
| H0.3 | Execute freshness remediation batches. | High-signal pages get public-source rechecks first; each batch has exact Allowed Files and validation. |
| H0.4 | Add recurring audit automation in a later implementation issue. | CI or scheduled jobs can produce JSON artifacts and draft remediation issues without editing content. |

Checkpoint: after each freshness batch, update this roadmap if the score formula, batch size, or threshold needs to change.

## Horizon 1: Make Audit Results Drive Work Intake

Timeframe: after Round 2 freshness triage begins producing remediation PRs.

| Workstream | Sequence | Notes |
|---|---|---|
| Consistency | Run report, triage conflicts, fix only confirmed public-fact conflicts. | Keep date-label false positives out of execution packets by documenting them in triage. |
| Provenance | Run report, fix `needs_review` rows before broad warning cleanup. | Prefer row-level markers or table lead-source sentences; do not add decorative sources. |
| Freshness | Finish Round 2 batches, then switch to weekly top-off maintenance. | Recheck public sources only for selected rows, not the whole corpus every time. |
| Release gate | Keep the audits read-only until the baseline is stable. | A hard gate should be introduced only after false positives are calibrated and thresholds are agreed. |

Checkpoint: every audit cycle should record queue counts, top domains, false-positive count, and the next issue packet. If those signals shift materially, update this roadmap before creating broad new work.

## Horizon 2: Resume Entity Deepening Around The Audit Spine

Entity graph work (#26 and follow-ups) should proceed after the truthfulness loop is stable enough that new entity facts do not expand unchecked maintenance debt.

Recommended order:

1. Finish high-signal freshness remediation for Tier-1 and high-inlink pages.
2. Expand entity metadata and typed edges only in domains that have low unresolved consistency/provenance risk.
3. Prefer frontmatter-only entity-node work before body changes when the public-source fact does not need prose updates.
4. Require every typed edge batch to pass entity audit, wikilink audit, release check, and the relevant truthfulness report.

Entity deepening should make audits cheaper over time by improving entity scoping, not create a second unsourced relationship corpus.

## Horizon 3: Human Site UX After Data Confidence

Human-site work (#23 and later UI issues) should use the audit spine as a readiness check:

- Do not surface relationship panels, quality badges, or freshness labels before the data behind them is maintained.
- Start with compact read surfaces that expose current content maps and reliable entity relationships.
- Add visible quality metadata only if it helps readers understand source state without turning the site into an internal operations dashboard.

Checkpoint: before each human-site milestone, run the three audits and document whether the UI will surface data that is still in remediation.

## Horizon 4: Scope Expansion Under Maintenance Capacity

New coverage should be admitted only when the maintenance loop can absorb it.

Admission rules:

- A new domain or large batch must declare source families, expected freshness class, and likely provenance burden before content work starts.
- High-volatility domains should ship with shorter review cadences and smaller batches.
- Expansion should pause when recurring audits show sustained backlog growth across two cycles.

This keeps range expansion tied to the wiki's ability to remain true, sourced, and current.

## Follow-Up Issue Drafts

### Implement Recurring Audit Runner

- Goal: add a read-only command or CI workflow that runs the three audits, writes machine-readable artifacts, and reports threshold status.
- Allowed files: tooling / workflow files named in the issue, plus documentation for the command.
- Non-goals: no corpus edits, no automatic source insertion, no automatic issue closure.
- Validation: audit commands, docs audit, release check if workflow or package scripts change, and `git diff --check`.

### Calibrate Audit Thresholds After Two Cycles

- Goal: compare two weekly audit snapshots and adjust thresholds to avoid noisy issue creation.
- Allowed files: `docs/07-quality/**` and the cadence design doc.
- Non-goals: no tool behavior change unless opened as a separate implementation issue.
- Validation: `bun run docs:audit` and `git diff --check`.

### Execute Round 2 Freshness Batch

- Goal: recheck a ranked freshness batch from the #72 remediation packet against public sources.
- Allowed files: exactly the source pages listed in that batch, required i18n mirrors if body text changes, and generated surfaces from the release command.
- Non-goals: no unrelated corpus cleanup and no broad formatting pass.
- Validation: freshness audit, wikilink audit, release write/check, i18n status, and `git diff --check`.

### Entity Deepening After Audit Baseline

- Goal: continue entity-node / typed-edge enrichment only after the current truthfulness queues are under threshold.
- Allowed files: domain-specific corpus files named in the issue and generated surfaces from release output.
- Non-goals: no speculative relationships and no soft peer edges without public-source backing.
- Validation: entity audit, relevant truthfulness audits, release check, surface drift, and `git diff --check`.

## Roadmap Review Triggers

Update this roadmap when any of the following happens:

- a remediation batch changes audit thresholds or false-positive policy;
- a weekly audit cycle shows backlog growth for two cycles in a row;
- entity graph scope expands beyond current Tier-1 / Japan-core anchors;
- human-site work begins surfacing entity or quality metadata;
- a new domain category would materially change freshness or provenance workload.

The roadmap is therefore a living control document, but changes should remain issue-scoped and tied to validation evidence.
