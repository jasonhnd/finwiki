# Incident Runbook

## Incident Types

| Type | Symptom | First Response |
|---|---|---|
| Release gate failure | `release.ts --check --strict` exits non-zero. | Read failing section, fix root cause, rerun check. |
| Count drift | README/root homepage counts differ from generated counts. | Run `bun tools/release.ts --write`, review generated diff, then strict check. |
| Dead wikilink | Audit reports unresolved target. | Fix target, alias, route or remove invalid link. |
| Canonical drift | Audit reports anchor drift. | Restore anchor page, fix `canonical_anchor`, or update body link. |
| Docs leakage | `docs/` appears as source/page/API entry or exposed markdown link in AI surface. | Check `EXCLUDED_WALK_DIRS`, `IGNORED_DIRS`, site allowlists, and markdown-link filtering. |
| Stale API residue | `api/entries/<old-domain>/...json` remains after a domain move. | Ensure generator clears `api/entries/`, rerun release write, delete tracked stale files through generated diff. |
| `.txt` route failure | Future `.txt` audit reports an invalid public route. | Fix the generator/source route or remove the stale route from the text surface. |
| i18n stale spike | Source hashes/source pointers show a large unexpected stale or missing set. | Run read-only i18n status, inspect recent domain moves, do not rewrite hashes to hide staleness. |
| Lastmod pollution | Large sitemap/API lastmod diff after no content edit. | Restore mtimes or revert generated drift, then rerun release write. |
| Deployment failure | GitHub Actions fails after push. | Inspect run logs, reproduce locally, patch forward. |
| UI visual regression | Japanese UI chrome shows English fallback, overflow or unreadable theme state. | Run visual QA checklist, build locally, patch CSS/i18n tokens, verify public route. |
| Sensitive info exposure | Private data appears in tracked file. | Remove immediately, rotate credentials if applicable, record minimal public-safe incident note. |

## Repair Recipes

| Incident | Repair path |
|---|---|
| Canonical drift | Locate reported file, update `canonical_anchor` to current vault-root path, ensure `## Wiki route` links the same target, rerun audit. |
| Docs leakage | Search generated surfaces for `docs/`; if it is a page/source/API entry fix exclusions, if it is a markdown link from README/CHANGELOG/release note ensure link filtering is working, then rerun release write. |
| Stale API residue | Confirm `api/entries/index.json` no longer references the old slug, rerun release write with API cleanup, stage deletions and new JSON together. |
| Count drift | Do not hand-edit only one surface; regenerate with `release.ts --write`, then review README, root `index.html`, discovery outputs and release notes. |
| GitHub Actions failure | Reproduce the exact failing command locally where possible, patch forward, update CHANGELOG with validation and residual risk. |

## Escalation

If the failure changes public URLs, public facts, release integrity or sensitive information risk, stop unrelated work and fix the incident first.

## Closure Criteria

- Root cause fixed.
- Required checks pass.
- CHANGELOG records scope, impact, fix, validation and residual risk.
