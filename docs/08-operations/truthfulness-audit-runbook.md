# Truthfulness Audit Runbook

## Purpose

The truthfulness audit loop turns the existing read-only runner into a recurring maintenance signal. It surfaces factual consistency, provenance completeness, and freshness status without editing corpus files, generated discovery surfaces, translations, GitHub issues, or release state.

The workflow is advisory. A tripped threshold should start human triage, but it must not become a hard release gate until calibration work explicitly changes that policy.

Fact-freshness JSON omits a page whose only remaining actionable reason is `low_confidence` when the page is tagged `scenario-assumption`, `review_by` is still in the future, and `last_tended` is within cadence. Use that tag only on explicit scenario / assumption entries. Overdue or empty-source pages are never exempt.

## Local Command

Run the same command locally when checking the workflow core path or preparing a remediation packet:

```bash
bun run audit:all --as-of YYYY-MM-DD
bun run audit:all --as-of YYYY-MM-DD --history-dir <downloaded-artifacts>
```

If `--as-of` is omitted, the runner uses the current system date. CI passes an explicit date so fact freshness is deterministic for each run. The default output is under the operating-system temporary directory. For a deliberate in-repository local copy, use `--out audit-artifacts`; any other in-repository output path is rejected.

`--history-dir` is optional for a one-off local report and required for scheduled trend evaluation. The runner recursively reads prior `summary.json` artifacts, retains only `as_of` plus `fact_freshness.actionable_rows`, and compares the two latest prior cycles with the current run. With fewer than two prior summaries the growth check remains `monitor`; two consecutive increases trip the advisory threshold.

The runner writes five artifacts:

| File | Purpose |
|---|---|
| `factual-consistency.json` | JSON rows from the repeated-fact consistency audit. |
| `provenance-completeness.json` | JSON rows from the source-marker completeness audit. |
| `fact-freshness.json` | JSON rows from the freshness review audit, pinned by `--as-of`. |
| `summary.json` | Machine-readable counts, bounded three-point trends, threshold checks, and never-actions. |
| `summary.md` | Human-readable counts, recent queue trend, and threshold status for review. |

Neither summary contains the repository root or artifact-directory absolute path. `audit-artifacts/` is gitignored and excluded from the shared Markdown walker, wiki-link audit, discovery/API generation, Astro content allowlist, release verification, and static publishing. The publisher fails if an audit-artifact directory somehow appears in Astro output.

## GitHub Actions Workflow

`.github/workflows/truthfulness-audit.yml` runs the same command in GitHub Actions:

```bash
bun run audit:all --out "$RUNNER_TEMP/finwiki-truthfulness-audit" --history-dir "$RUNNER_TEMP/finwiki-truthfulness-history" --as-of <resolved date>
```

The job is read-only:

- `permissions: contents: read` and `actions: read`
- no corpus edits
- no generated-surface writes
- no translation writes
- no issue creation, closure, or labeling
- no LLM step
- no threshold-to-failure conversion

The workflow installs the exact `.bun-version` with `oven-sh/setup-bun`, downloads the two latest successful scheduled artifacts with read-only GitHub Actions access, and passes their extracted directory to the runner. It writes the new temporary `summary.md` to `$GITHUB_STEP_SUMMARY` and uploads the output directory as `truthfulness-audit-<as_of>`. The root audit runner has no package dependencies, so this advisory workflow does not perform an unfrozen root install.

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
| `monitor` | The signal is visible but has fewer than the two prior cycles needed by its threshold, or still requires maintainer interpretation. | Preserve the artifact; the scheduled workflow will evaluate it once enough history exists. |
| `tripped` | The count crossed an advisory threshold from the cadence design. | Triage the affected rows and open a bounded remediation issue only after human review. |

Tripped thresholds do not fail the workflow. They are surfaced in the step summary and artifacts so maintainers can decide whether the rows are real work, known false positives, or calibration input.

## Artifact Review Flow

1. Download the `truthfulness-audit-<as_of>` artifact from the workflow run.
2. Read `summary.md` for counts and threshold status.
3. Use the bounded trend in `summary.json` to confirm which two prior scheduled cycles were compared.
4. Inspect the relevant JSON report for exact rows and paths.
5. If remediation is needed, create a separate issue with exact scope, allowed files, validation commands, and closeout evidence.

Do not edit corpus or generated files directly from the scheduled run. The audit job only creates CI artifacts and a run summary.
