# Recurring Audit Cadence Design

> Planning artifact for GitHub Issue #71. This design explains how FinWiki should turn one-time truthfulness audits into a regular maintenance loop. It does not implement scheduling, CI, issue automation, or corpus edits.

## Goal

Make truthfulness maintenance predictable without making every audit result a release blocker. The system should find high-signal work, open bounded remediation issues, and let maintainers review public-source evidence before any corpus edit.

## Non-Goals

- No new tool code in this planning issue.
- No corpus edits or generated-surface updates.
- No automatic web browsing, source insertion, or fact rewriting.
- No hard release gate until baseline false positives are calibrated.
- No private or non-public information in reports or issues.

## Audit Family Responsibilities

| Audit | Command | Primary question | First steady-state target |
|---|---|---|---|
| Factual consistency | `bun tools/factual_consistency_audit.ts --json` | Do FinWiki pages agree with each other on repeated facts? | `severity=conflict` rows stay at 0 before broad content expansion. |
| Provenance completeness | `bun tools/provenance_completeness_audit.ts --json` | Are dense factual blocks locally backed by public-source markers? | `needs_review` rows stay at 0 for Tier-1, canonical, and high-inlink pages. |
| Fact freshness | `bun tools/fact_freshness_audit.ts --json` | Which pages need public-source re-verification? | No Tier-1 `review_by` overdue rows; weekly backlog is within maintainer capacity. |

## Cadence

| Trigger | Consistency | Provenance | Freshness | Rationale |
|---|---|---|---|---|
| Every 5 merged PRs touching corpus, tools, generated surfaces, or docs policy | Run JSON report. | Run JSON report. | Run JSON report. | Catches accumulated drift without running noisy checks on every small PR. |
| Weekly maintenance window | Run full report. | Run full report. | Run full report with the current date. | Gives maintainers one predictable truthfulness queue. |
| Before large content or entity expansion | Run full report plus affected-domain review. | Run full report plus affected-domain review. | Run full report plus affected-domain review. | Prevents expansion from hiding unresolved quality debt. |
| After each remediation batch | Re-run the affected report. | Re-run the affected report. | Re-run the affected report. | Confirms the batch changed the metric it was meant to change. |
| Ad hoc external event | Optional targeted run. | Optional targeted run if claims changed. | Targeted run for affected domains/pages. | Handles public events such as M&A, registration changes, enforcement actions, or rule changes. |

## Thresholds For Opening Issues

Thresholds should create work only when a maintainer can act on it.

| Audit | Open a triage/remediation issue when | Do not open an issue when |
|---|---|---|
| Consistency | Any `severity=conflict` row appears, or a repeated `needs_review` pattern affects the same entity or metric across multiple pages. | Rows are known false positives already documented in the latest triage packet. |
| Provenance | Any Tier-1 / canonical / high-inlink page has `needs_review`, or total `needs_review` rows exceed 10, or warnings rise by more than 20% from the previous cycle. | Only low-priority warning rows move within normal variance and no Tier-1 page is affected. |
| Freshness | Any Tier-1 page is past `review_by`, or the top-priority queue exceeds a planned batch, or total actionable rows grow for two cycles. | Rows are already assigned to an open remediation batch and no new higher-priority rows appeared. |

Initial thresholds are intentionally conservative. After two weekly cycles, open a calibration issue if the rules create noisy work or miss obvious public-source risk.

## Automation Shape

The eventual implementation should be read-only:

1. Run the three audit commands with deterministic options where available.
2. Store JSON artifacts as CI artifacts, scheduled-job artifacts, or a generated report attached to an issue.
3. Compute threshold status and a small summary table.
4. Draft a remediation issue only when a threshold trips.
5. Include exact paths, suggested batch size, Allowed Files, and validation commands in the issue.

The automation should never:

- edit corpus files;
- run translation;
- rewrite generated surfaces;
- close issues;
- mark facts as verified;
- treat private chat context as evidence.

## Round 2 Freshness Convergence

Round 2 should bridge the current large freshness queue into steady-state maintenance:

1. #72 ranks the current queue by importance x staleness and creates execution batches.
2. Each batch rechecks public sources and updates only the named pages.
3. After each batch, run the freshness audit and record the remaining queue size, affected domains, and any false positives.
4. Once Tier-1 overdue risk is cleared and the weekly queue is manageable, move from batch remediation to weekly top-off maintenance.
5. Update the cadence thresholds if the queue remains large because the audit is over-sensitive rather than because facts are stale.

Round 2 is complete when the remaining freshness workload is small enough to handle in the weekly cadence without hiding high-impact pages.

## Cost And Signal Controls

The maintenance loop should avoid spending review time on low-value noise.

- Use deterministic reports first; reserve manual web verification for rows selected into an execution packet.
- Batch by source family and domain where possible so one public register or official disclosure can support multiple rows.
- Keep issue packets small enough that validation and review remain clear.
- Prefer thresholds with hysteresis, such as two-cycle growth, to avoid opening work for one-off variance.
- Keep warnings visible but non-gating until a maintainer confirms they are actionable.
- Do not add LLM review to default CI; if used later, keep it offline and advisory.
- Reuse entity graph and inlink signals to prioritize pages readers and AI surfaces are most likely to traverse.

## Remediation Issue Template

```text
Goal:
- Recheck the listed rows from <audit packet> against public sources and update only confirmed stale or under-sourced facts.

Allowed Files:
- <exact source paths from the packet>
- site/src/content/i18n/{ja,zh,en}/<same paths> only if body changes require retranslation
- generated surfaces produced by bun tools/release.ts --write, only when the issue authorizes corpus edits

Forbidden:
- CONTRIBUTING.md
- unrelated corpus pages
- unrelated docs
- generated-surface hand edits
- unsourced or private facts

Validation:
- <affected audit command>
- bun tools/wiki_link_audit.ts --fail-on-issues
- bun tools/release.ts --write
- bun tools/release.ts --check --strict
- bun run i18n:status
- git diff --check
```

Planning-only issues that do not edit corpus should instead run only `bun run docs:audit` and `git diff --check`.

## Follow-Up Implementation Issues

### Audit Runner And Artifact Summary

- Scope: implement a read-only script or CI workflow that runs the three audits and prints a threshold summary.
- Allowed files: the script/workflow, package scripts if needed, and the quality docs that describe the command.
- Acceptance: deterministic local run, CI/scheduled command documented, no file writes outside artifacts.

### Threshold Calibration

- Scope: compare two audit cycles, tune thresholds, and document false-positive policy.
- Allowed files: quality docs and this cadence design.
- Acceptance: thresholds are justified by observed row counts and reviewer workload.

### Remediation Issue Draft Generator

- Scope: create a read-only helper that turns audit JSON rows into an issue body with exact paths, batch size, and validation.
- Allowed files: tooling and docs named in the issue.
- Acceptance: generated issue text contains Allowed Files and does not create or edit GitHub issues without maintainer approval.

## Review Checkpoints

Review this design after:

- the first two weekly audit cycles;
- completion of the first Round 2 freshness remediation batch;
- the first new entity deepening batch after cadence adoption;
- any decision to convert a read-only audit into a release gate.

The checkpoint should answer: did the audit find real work, did it create noise, did the batch size fit review capacity, and should thresholds change?
