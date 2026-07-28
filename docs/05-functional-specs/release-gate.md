# Release Gate Specification

## Commands

```bash
bun run release:docs
bun tools/release.ts --write
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
bun run publish:test
git diff --check
```

## Release-document contract

`bun run release:docs` checks that root `README.md` has exactly `## 日本語 -> ## English -> ## 中文`, and that the Maintenance Principles plus every dated `CHANGELOG.md` entry use the same order. Release notes dated 2026-07-27 or later must have a Japanese-only H1, the same three language sections, and scope / changes / validation / known-notes / next-steps subsections in each language. Older release notes remain grandfathered public history.

## `--write`

Runs the release-document audit before mutation, then regenerates synchronized public surfaces such as README snapshots, root `index.html`, discovery files and API artifacts according to current tooling behavior.

## `--check --strict`

Validates the release-document contract before any mutation, then checks counts, wikilinks, canonical drift, generated output sync, JSON/LF state and duplicate IDs.

## Static publish boundary

`bun run publish:test` verifies the destructive and public-file boundaries used by both GitHub Pages and Vercel:

- only `_site` and `_vercel_public` are valid output directories;
- output validation and symlink rejection happen before recursive cleanup;
- the result contains `site/dist` plus raw source paths selected by `ai-index.json` and `api/entries/index.json`, then filtered by explicit root/domain/release/API allowlists;
- `docs/`, `lib/`, tooling, development configuration, hidden/ignored source files, unmanifested domain/API files and unknown root files remain absent; the assembler-created `.nojekyll` marker is the only hidden output exception.

## Failure Handling

- Dead link: fix target path, alias or body link.
- Release-document violation: restore exact Japanese -> English -> Chinese order and the required release-note subsections; do not add a human-site Chinese locale.
- Count drift: recalibrate domain map or generated output intentionally.
- Discovery drift: run `--write`, review generated diff, rerun check.
- Docs/development-file leakage: verify corpus exclusions, site allowlists, generated manifests and the static-publish allowlist.
- Unsafe publish output: use `_site` or `_vercel_public`; never relax output validation to make a local command pass.
- Stale API residue: verify discovery generation clears `api/entries/` before writing current entries.

## Acceptance

Release is not publishable until `bun run release:docs`, the strict gate and `bun run publish:test` exit 0 and generated-surface drift scans are clean for the changed scope.
