# Incident Runbook

## Incident Types

Quick index; the detailed entries are in [Playbooks](#playbooks).

| Type | Symptom | First Response |
|---|---|---|
| Release gate failure | `release.ts --check --strict` exits non-zero. | Read failing section, fix root cause, rerun check. |
| Count drift | README/root homepage counts differ from generated counts. | `bun tools/release.ts --write`, review diff, strict check. |
| Dead wikilink | Audit reports unresolved target. | Fix target, alias, route or remove invalid link. |
| Canonical drift | Audit reports anchor drift. | Restore anchor page, fix `canonical_anchor`, or update body link. |
| Active-doc stale facts | A developer doc states a superseded implementation fact (old domain count, removed mirror path, deprecated build step). | `bun run docs:stale` to locate; correct the doc or move the fact to dated history/ADR/archive. |
| Docs leakage | `docs/` appears as a source/page/API entry or crawlable link in a generated surface. | `bun run surface:drift` to locate; fix `EXCLUDED_WALK_DIRS` / markdown-link filtering; `release.ts --write`. |
| Stale API residue | `api/entries/<old-domain\|old-slug>.json` remains after a domain/slug move. | `bun run surface:drift`; `release.ts --write` clears `api/entries/`; stage deletions + new JSON together. |
| `.txt` route failure | `bun run ai:audit` reports an invalid public route in `llms*.txt`. | Fix the generator/source route (or the body wikilink it derives from), `release.ts --write`. |
| i18n stale spike | Source hashes/source pointers show a large unexpected stale or missing set. | `bun tools/i18n_status.ts`, inspect recent domain moves; never rewrite `source_hash` to hide staleness. |
| Lastmod pollution | Large sitemap/API lastmod diff after no content edit. | Restore mtimes or revert generated drift, then rerun release write (gotchas #1). |
| Build failure | Site build or `html:check` fails locally or in Actions. | Reproduce `cd site && bun install && bun run build` + `bun run html:check`; patch forward. |
| Deployment failure | "Deploy FinWiki" Actions run fails after push. | `gh run view <id> --log-failed`, reproduce the step locally, patch forward. |
| UI visual regression | Japanese UI chrome shows English fallback, overflow or unreadable theme state. | Run visual QA checklist, build locally, patch CSS/i18n tokens, verify public route. |
| Sensitive info exposure | Private data appears in tracked file. | Remove immediately, rotate credentials if applicable, record minimal public-safe incident note. |

## Playbooks

Each playbook: symptom -> likely causes -> inspect -> repair -> exit.

### Release count drift

- **Symptom**: `release.ts --check --strict` reports `[3] count DRIFT` (README / `index.html` counts differ from generated).
- **Likely causes**: an edited `.md` changed corpus char/token totals; the date stamp rolled over; a cross-order-of-magnitude count needs a second pass (gotchas #2).
- **Inspect**: `bun tools/release.ts --check --strict`.
- **Repair**: `bun tools/release.ts --write` (rerun once if it still drifts), recommit the synced README / `index.html` / discovery surfaces together.
- **Exit**: `--check --strict` EXIT 0, counts in sync.

### Docs leakage into a public surface

- **Symptom**: `docs/` appears as a page/source/API entry or crawlable link in a generated surface.
- **Likely causes**: `EXCLUDED_WALK_DIRS` or markdown-link filtering changed (gotchas #5).
- **Inspect**: `bun run surface:drift` (reports `docs-leak` with file + field).
- **Repair**: restore the exclusion / link filtering in `lib/markdown_helpers.ts`, `bun tools/release.ts --write`, recommit.
- **Exit**: `bun run surface:drift` EXIT 0.

### Stale API residue

- **Symptom**: `api/entries/<old-domain|old-slug>.json` remains after a domain/slug move; manifest count mismatch.
- **Likely causes**: `release.ts --write` not run after a move; stale generated files committed.
- **Inspect**: `bun run surface:drift` (reports `stale-api-residue` / `manifest-*` with path).
- **Repair**: `bun tools/release.ts --write` (clears + rewrites `api/entries/`), stage deletions + new JSON together, recommit.
- **Exit**: `bun run surface:drift` EXIT 0.

### Canonical anchor drift

- **Symptom**: `release.ts --check` / `wiki_link_audit --fail-on-canonical-drift` reports `canonical_anchor_drift > 0`.
- **Likely causes**: an anchor page moved/removed; a mirror's `canonical_anchor` points to an old path.
- **Inspect**: `bun tools/wiki_link_audit.ts --fail-on-issues`.
- **Repair**: update `canonical_anchor` to the current vault-root path and ensure the body links the same target; restore the anchor page if removed.
- **Exit**: `release.ts --check --strict` EXIT 0 (`canonical_anchor_drift=0`).

### Active-doc stale facts / docs link breakage

- **Symptom**: a developer doc states a superseded implementation fact — an old domain count, a removed mirror path, a deprecated build step — or has a broken relative link. The exact stale patterns live in `tools/active_doc_stale_scan.ts`.
- **Inspect**: `bun run docs:stale` (stale facts) and `bun run docs:audit` (Markdown links).
- **Repair**: correct the active doc, or move the fact into dated history / ADR / `99-archive/`, or add a reviewed allowlist entry; fix broken links.
- **Exit**: `bun run docs:stale` and `bun run docs:audit` EXIT 0.

### Site build failure

- **Symptom**: local `site` build or `bun run html:check` fails, or the Actions "Build human site" / "Build static search index" step fails.
- **Likely causes**: `site/src/content.config.ts` / content-collection / i18n config change; duplicate HTML ids; a missing mirror file. `site/` often has no local deps, so Actions may be the first real build (gotchas #3).
- **Inspect**: `cd site && bun install && bun run build`, then `bun run html:check`.
- **Repair**: fix the config/content issue, rebuild, recheck; if only reproducible in CI, patch forward and `gh run watch`.
- **Exit**: site build + `bun run html:check` EXIT 0 locally and in Actions.

### GitHub Actions deploy failure

- **Symptom**: the "Deploy FinWiki" run fails after push.
- **Inspect**: `gh run list --branch main --limit 5`, then `gh run view <run-id> --log-failed`.
- **Likely causes**: a step that cannot run locally (`wiki:audit:ci`, site build, `html:check`, `index:search`, publish assemble) or a Pages/permissions issue.
- **Repair**: reproduce the failing step locally where possible, patch forward, push a corrective commit; record validation + residual risk in `CHANGELOG.md`.
- **Exit**: a fresh run is green (`gh run watch <run-id> --exit-status`).

## Escalation

If the failure changes public URLs, public facts, release integrity or sensitive information risk, stop unrelated work and fix the incident first.

## Closure Criteria

- Root cause fixed.
- Required checks pass.
- CHANGELOG records scope, impact, fix, validation and residual risk.
