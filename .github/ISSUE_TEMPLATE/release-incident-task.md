---
name: Release / incident task
about: A release operation or an incident (gate failure, docs leakage, drift, stale residue, build/deploy failure).
title: "[Ops] "
labels: ["type:ops"]
---

## Symptom
<what failed or what is needed; paste the exact gate output or error>

## Likely Causes
<candidates; see the playbooks in docs/08-operations/incident-runbook.md>

## Inspect
<exact diagnosis commands, e.g.:>
- `bun tools/release.ts --check --strict`
- `bun run surface:drift` / `bun run docs:stale` / `bun run ai:audit` / `bun tools/i18n_status.ts`
- `gh run list --branch main --limit 5` then `gh run view <run-id> --log-failed`

## Repair
<forward-fix path: fix root cause, regenerate with `bun tools/release.ts --write`, recommit; never `--no-verify`, never destructive reset>

## Exit Criteria
- <which gate must be green, e.g. `release.ts --check --strict` EXIT 0, the relevant scan EXIT 0, a fresh Actions run green>

## Source Docs
- docs/08-operations/incident-runbook.md
- docs/08-operations/deployment-runbook.md
- docs/05-functional-specs/release-gate.md

## Release Notes
- Record scope, impact, fix, validation, and residual risk in CHANGELOG.md per AGENTS.md.
