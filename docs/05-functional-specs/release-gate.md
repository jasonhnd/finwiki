# Release Gate Specification

## Commands

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

## `--write`

Regenerates synchronized public surfaces such as README snapshots, root `index.html`, discovery files and API artifacts according to current tooling behavior.

## `--check --strict`

Validates counts, wikilinks, canonical drift, generated output sync, JSON/LF state and duplicate IDs.

## Failure Handling

- Dead link: fix target path, alias or body link.
- Count drift: recalibrate domain map or generated output intentionally.
- Discovery drift: run `--write`, review generated diff, rerun check.
- Docs leakage: verify exclusion lists, site allowlists and docs-link filtering.
- Stale API residue: verify discovery generation clears `api/entries/` before writing current entries.

## Acceptance

Release is not publishable until strict gate exits 0 and generated-surface drift scans are clean for the changed scope.
