# Deployment Runbook

## Deployment Targets

| Target | Purpose | Trigger |
|---|---|---|
| GitHub Pages production | Public `finwiki.zksc.io` site and generated raw surfaces. | Push to `origin/main`. |
| Vercel shadow/static publish | Optional validation of the assembled static output. | `bun tools/vercel_build.ts` or Vercel integration when configured. |

Do not push until the user explicitly asks for GitHub publishing.

## Local Preflight

1. Confirm branch and diff:

```bash
git status --short --branch
```

2. Regenerate public surfaces when counts, release notes, README/CHANGELOG, API/discovery, wiki content, root index or generated-output behavior changed:

```bash
bun tools/release.ts --write
```

3. Run release checks:

```bash
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

4. If site UI, CSS, Astro rendering, Pagefind or HTML output changed, run the site build and duplicate-id check:

```bash
cd site
bun install
bun run build
cd ..
bun tools/check_duplicate_html_ids.ts site/dist
```

5. If static publish assembly changed, run:

```bash
bun tools/vercel_build.ts
```

## What To Inspect Locally

| Change type | Required inspection |
|---|---|
| Docs-only | `bun run docs:audit` (Markdown links), `bun run docs:stale` (stale active-doc facts); release check if a root control doc or release note changed. |
| Wiki content | `bun tools/wiki_link_audit.ts --fail-on-issues`, release write/check, root/domain count review, `bun run i18n:status` if source bodies changed. |
| i18n | `bun run i18n:status` (current/stale/missing by locale), rendered language spot-checks. |
| UI/CSS/theme | Site build, `bun run html:check`, [Visual QA Checklist](../07-quality/visual-qa-checklist.md), desktop/mobile spot-checks. |
| Discovery/API generator | `bun run surface:drift` (API alignment + stale residue + docs leakage), `bun run ai:audit` (`.txt` routes), then diff-review `ai-index.json` / `llms*.txt` / `sitemap.xml`. |

## Pre-Push Gate

A `pre-push` hook runs the strict release check before any push:

```bash
bun tools/release.ts --check --strict
```

- The hook must be able to resolve `bun`. If `bun` is not on the `PATH` the hook sees, put it on `PATH` or set `FINWIKI_BUN=<path-to-bun>` (the hook honors both).
- Do not bypass with `git push --no-verify`. If the gate fails, fix the surface (`bun tools/release.ts --write`, recommit) and push again.

## Push And Production Verification

After the user asks to push:

```bash
git status --short --branch
git push origin main
git ls-remote origin refs/heads/main
```

Watch the latest deployment:

```bash
gh run list --branch main --limit 3
gh run watch <run-id> --exit-status
```

Spot-check public URLs after Actions succeeds:

```bash
curl -I https://finwiki.zksc.io/
curl -I https://finwiki.zksc.io/ja/
curl -I https://finwiki.zksc.io/llms.txt
curl -I https://finwiki.zksc.io/ai-index.json
curl -I https://finwiki.zksc.io/api/entries/index.json
```

For UI changes, also open or screenshot representative public pages in Japanese and English after deployment.

## GitHub Actions (Deploy FinWiki)

Push to `main` (and `workflow_dispatch`) triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. The `build` job runs, in order:

1. `bun run wiki:audit:ci` — wiki link graph gate.
2. `bun install` + `bun run build` in `site/` — Astro human site.
3. `bun run html:check` — duplicate HTML id gate on `site/dist`.
4. `bun run index:search` in `site/` — Pagefind static search index.
5. `bun tools/assemble_static_publish.ts --out _site` — assemble HTML + raw Markdown + AI discovery surfaces.

The `deploy` job then publishes the artifact via `actions/deploy-pages`. `site/` usually has no local dependencies, so the Astro build and search index steps may only be exercised here — always `gh run watch` after pushing a `site/` change (see gotchas #3).

Every push to `origin/main` must keep the release note and GitHub Release aligned with the current bilingual release scope: Japanese-only title, body ordered Japanese -> English, and explicit scope, changes, validation, known notes and next steps.

Use `gh release view` / `gh release edit` only after the local release note narrative is complete.

## Rollback

Prefer forward fixes. If a release introduces broken generated output, create a corrective commit that restores valid generated surfaces and records the incident in `CHANGELOG.md`.

Never use `git reset --hard` or destructive checkout to hide a bad release in a dirty worktree. Fix the root cause, regenerate, validate and push a corrective commit.
