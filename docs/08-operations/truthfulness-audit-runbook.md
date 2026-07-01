# Truthfulness Audit Runbook

## Purpose

The truthfulness audit loop turns the existing read-only runner into a recurring maintenance signal. It surfaces factual consistency, provenance completeness, and freshness status without editing corpus files, generated discovery surfaces, translations, GitHub issues, or release state.

The workflow is advisory. A tripped threshold should start human triage, but it must not become a hard release gate until calibration work explicitly changes that policy.

## Local Command

Run the same command locally when checking the workflow core path or preparing a remediation packet:

```bash
bun run audit:all --out audit-artifacts --as-of YYYY-MM-DD
```

If `--as-of` is omitted, the runner uses the current system date. CI passes an explicit date so fact freshness is deterministic for each run.

The runner writes five artifacts:

| File | Purpose |
|---|---|
| `factual-consistency.json` | JSON rows from the repeated-fact consistency audit. |
| `provenance-completeness.json` | JSON rows from the source-marker completeness audit. |
| `fact-freshness.json` | JSON rows from the freshness review audit, pinned by `--as-of`. |
| `summary.json` | Machine-readable counts, threshold checks, and never-actions. |
| `summary.md` | Human-readable counts and threshold status for review. |

## GitHub Actions Workflow

`.github/workflows/truthfulness-audit.yml` runs the same command in GitHub Actions:

```bash
bun run audit:all --out audit-artifacts --as-of <resolved date>
```

The job is read-only:

- `permissions: contents: read`
- no corpus edits
- no generated-surface writes
- no translation writes
- no issue creation, closure, or labeling
- no LLM step
- no threshold-to-failure conversion

The workflow installs Bun with `oven-sh/setup-bun`, runs `bun install`, writes `summary.md` to `$GITHUB_STEP_SUMMARY`, and uploads `audit-artifacts/` as a workflow artifact named `truthfulness-audit-<as_of>`.

## Cadence

The recurring automation runs on a weekly cron. The current schedule is Monday 03:20 JST, expressed in cron as Sunday 18:20 UTC because GitHub Actions schedules use UTC.

Maintainers can also run it manually with `workflow_dispatch`. The optional `as_of` input must be `YYYY-MM-DD`; if omitted, the workflow uses the current JST run date.

The design intent from [Recurring Audit Cadence Design](../04-architecture/recurring-audit-cadence.md) still applies:

- Run the full audit sweep weekly.
- Run the audit after every five merged PRs that touch corpus, tooling, generated surfaces, or docs policy.
- Run it before large content or entity expansion.
- Re-run the affected audit after each remediation batch.

The scheduled workflow covers the weekly loop. The other cadence points remain maintainer-triggered manual dispatches until a later issue adds more orchestration.

## Reading Results

Open the completed GitHub Actions run and read the step summary first. It includes the same `summary.md` table that is uploaded as an artifact.

Threshold statuses mean:

| Status | Meaning | Expected action |
|---|---|---|
| `not_tripped` | The count is under the current threshold. | No remediation issue is required from this signal alone. |
| `monitor` | The signal is visible but needs history, calibration, or maintainer interpretation before it can trip. | Compare with recent artifacts or include it in the next calibration review. |
| `tripped` | The count crossed an advisory threshold from the cadence design. | Triage the affected rows and open a bounded remediation issue only after human review. |

Tripped thresholds do not fail the workflow. They are surfaced in the step summary and artifacts so maintainers can decide whether the rows are real work, known false positives, or calibration input.

## Artifact Review Flow

1. Download the `truthfulness-audit-<as_of>` artifact from the workflow run.
2. Read `summary.md` for counts and threshold status.
3. Use `summary.json` if comparing cycles or preparing a later automation step.
4. Inspect the relevant JSON report for exact rows and paths.
5. If remediation is needed, create a separate issue with exact scope, allowed files, validation commands, and closeout evidence.

Do not edit corpus or generated files directly from the scheduled run. The audit job only creates CI artifacts and a run summary.
