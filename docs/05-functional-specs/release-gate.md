# Release Gate Specification

## Commands

```bash
bun tools/release.ts --write  # when the public snapshot needs regeneration
bun run verify                # canonical local / PR / Vercel gate
bun run verify --out _site    # canonical GitHub Pages artifact
```

The runtime must exactly match `.bun-version`. `bun run verify` installs `site/` with `--frozen-lockfile`, fails fast, and is the only command that establishes release readiness. Individual commands remain available for diagnosis but cannot substitute for the canonical gate.

## Release-document contract

`bun run release:docs` checks that root `README.md` has exactly `## 日本語 -> ## English -> ## 中文`, and that the Maintenance Principles plus every dated `CHANGELOG.md` entry use the same order. Release notes dated 2026-07-27 or later must have a Japanese-only H1, the same three language sections, and scope / changes / validation / known-notes / next-steps subsections in each language. Older release notes remain grandfathered public history.

## `--write`

Runs the release-document audit before mutation, then regenerates synchronized public surfaces such as README snapshots, root `index.html`, discovery files and API artifacts according to current tooling behavior.

## `--check --strict`

Validates the release-document contract before any mutation, then checks counts, wikilinks, canonical drift, generated output sync, JSON/LF state and duplicate IDs.

## Static publish boundary

The canonical command runs all Bun tests, including the destructive/public-file boundary tests and required-route negative fixtures, before assembling the real artifact:

- only `_site` and `_vercel_public` are valid output directories;
- output validation and symlink rejection happen before recursive cleanup;
- the result contains `site/dist` plus raw source paths selected by `ai-index.json` and `api/entries/index.json`, then filtered by explicit root/domain/release/API allowlists;
- `docs/`, `lib/`, tooling, development configuration, hidden/ignored source files, unmanifested domain/API files and unknown root files remain absent; the assembler-created `.nojekyll` marker is the only hidden output exception.
- root, ja/en, crawler, AI/API and Pagefind required routes must exist as non-empty regular files in the final assembled output.

The required-route check is a release smoke gate. Issue #183 separately owns crawling every internal href and repairing route-level content links.

## Shared execution surfaces

- `.githooks/pre-push` is tracked executable and runs `bun run verify`.
- `.github/workflows/required-verification.yml` exposes the stable `Required verification` pull-request context.
- GitHub Pages runs `bun run verify --out _site`.
- Vercel invokes the same `tools/verify.ts` runner for `_vercel_public` through the official exact-build pin pattern `bunx bun@<version>`; startup rejects drift from `.bun-version` and `packageManager`.
- Every Actions workflow reads the same `.bun-version`; every dependency installation uses the committed frozen site lockfile.

## Failure Handling

- Dead link: fix target path, alias or body link.
- Release-document violation: restore exact Japanese -> English -> Chinese order and the required release-note subsections; do not add a human-site Chinese locale.
- Count drift: recalibrate domain map or generated output intentionally.
- Discovery drift: run `--write`, review generated diff, rerun check.
- Docs/development-file leakage: verify corpus exclusions, site allowlists, generated manifests and the static-publish allowlist.
- Unsafe publish output: use `_site` or `_vercel_public`; never relax output validation to make a local command pass.
- Missing required final route: inspect assembly and Pagefind output; do not remove a required route to make the check pass.
- Bun mismatch: install the exact `.bun-version`; do not update the pin without a separate dependency/runtime review.
- Stale API residue: verify discovery generation clears `api/entries/` before writing current entries.

## Acceptance

Release is not publishable until `bun run verify` exits 0. A pull request is not mergeable until the fresh `Required verification` context is green. `main` protection must require a pull request and that context, include administrators, and reject force pushes/deletion; repository-rule evidence is part of closeout.
