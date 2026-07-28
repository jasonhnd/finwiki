# Incident Runbook

## Incident Types

Quick index; the detailed entries are in [Playbooks](#playbooks).

| Type | Symptom | First Response |
|---|---|---|
| Release gate failure | `bun run verify` exits non-zero. | Read the named failing step, fix root cause, rerun the canonical command. |
| Count drift | README/root homepage counts differ from generated counts. | `bun tools/release.ts --write`, review diff, strict check. |
| Dead wikilink | Audit reports unresolved target. | Fix target, alias, route or remove invalid link. |
| Canonical drift | Audit reports anchor drift. | Restore anchor page, fix `canonical_anchor`, or update body link. |
| Active-doc stale facts | A developer doc states a superseded implementation fact (old domain count, removed mirror path, deprecated build step). | `bun run docs:stale` to locate; correct the doc or move the fact to dated history/ADR/archive. |
| Docs leakage | `docs/` appears as a source/page/API entry or crawlable link in a generated surface. | `bun run surface:drift` to locate; fix `EXCLUDED_WALK_DIRS` / markdown-link filtering; `release.ts --write`. |
| Stale API residue | `api/entries/<old-domain\|old-slug>.json` remains after a domain/slug move. | `bun run surface:drift`; `release.ts --write` clears `api/entries/`; stage deletions + new JSON together. |
| Generated route failure | `bun run ai:audit --out <dir>` reports an invalid URL from llms, sitemap, index or API output. | Fix URL construction, wikilink resolution or assembly; regenerate and rebuild before rerunning the audit. |
| Exact-regeneration drift | `bun run surface:drift` reports `exact-regeneration-drift`. | Keep committed timestamps fixed, locate the first mismatched surface/API JSON, and remove nondeterminism or stale output. |
| i18n stale spike | Source hashes/source pointers show a large unexpected stale or missing set. | `bun tools/i18n_status.ts`, inspect recent domain moves; never rewrite `source_hash` to hide staleness. |
| Lastmod drift | Sitemap/API `last_modified` disagrees with source history. | Check checkout depth, full/shallow Git date and committed `ai-index.json` fallback in that order; mtime is terminal only. |
| Build failure | Typecheck, Astro, Pagefind, required-route or HTML gate fails locally or in Actions. | Reproduce with `bun run verify`; use the named targeted command for diagnosis, then patch forward. |
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

### Generated route failure

- **Symptom**: `ai:audit` reports a generated internal URL with no non-empty regular file in the assembled output.
- **Likely causes**: extensionless raw entry URL, wrong locale/domain-index route, unresolved wikilink emitted as a guessed URL, same-host wrong scheme/port, stale generated surface, or missing assembly input.
- **Inspect**: build/assemble first, then run `bun run ai:audit --out _site`; use the reported surface/key context to trace the URL owner.
- **Repair**: preserve `/ja/<route>/` canonical, `/en/<route>/` alternate and explicit `.md` raw semantics; fix the helper/generator or assembler, run `bun tools/release.ts --write`, rebuild.
- **Exit**: `Generated route audit passed: ... resolve in the assembled artifact.` and `bun run verify --out _site` EXIT 0.

### Exact-regeneration or `last_modified` drift

- **Symptom**: `surface:drift` reports `exact-regeneration-drift`, often naming a per-entry API JSON after a `last_modified` difference.
- **Likely causes**: generated files were not refreshed after the source commit, a nondeterministic field bypasses the fixed timestamps, a tracked working-tree edit still sees the previous commit date, or a new file is using the fs-mtime fallback.
- **Inspect**: `bun run surface:drift`; for a date mismatch, check `git rev-parse --is-shallow-repository`, full/shallow `git log -1 --format=%cs -- <source-path>`, then the existing `ai-index.json` source-path date.
- **Repair**: canonical GitHub workflows must retain `fetch-depth: 0`. Commit the intended source change, rerun `bun tools/release.ts --write`, and review the complete generated diff; amend or add a release-sync commit and rerun the final gate. Do not restore mtimes or bypass a valid committed discovery fallback.
- **Exit**: `Generated-surface drift scan passed: ... fixed-timestamp regeneration is byte-identical (including last_modified) ...`.

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

- **Symptom**: `bun run verify` fails at typecheck, Astro build, duplicate-ID, Pagefind, assembly, or required-route check.
- **Likely causes**: content-collection / i18n config change, a type error, duplicate HTML ids, a missing mirror, unsafe assembly input, or a missing final artifact.
- **Inspect**: rerun the named targeted command only to shorten diagnosis; keep the frozen install and final full command for acceptance.
- **Repair**: fix the config/content/output issue, then rerun `bun run verify`; if deployment alone fails, inspect Pages/Vercel logs and patch forward.
- **Exit**: canonical verification is green locally and in the fresh Actions context.

### GitHub Actions deploy failure

- **Symptom**: the "Deploy FinWiki" run fails after push.
- **Inspect**: `gh run list --branch main --limit 5`, then `gh run view <run-id> --log-failed`.
- **Likely causes**: a canonical verification step regressed, or Pages permissions/deployment failed after the verified artifact was produced.
- **Repair**: reproduce the failing step locally where possible, patch forward, push a corrective commit; record validation + residual risk in `CHANGELOG.md`.
- **Exit**: a fresh run is green (`gh run watch <run-id> --exit-status`).

## Escalation

If the failure changes public URLs, public facts, release integrity or sensitive information risk, stop unrelated work and fix the incident first.

## Closure Criteria

- Root cause fixed.
- Required checks pass.
- CHANGELOG records scope, impact, fix, validation and residual risk.
