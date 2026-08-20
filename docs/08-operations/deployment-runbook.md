# Deployment Runbook

## Deployment Targets

| Target | Purpose | Trigger |
|---|---|---|
| GitHub Pages production | Public `finwiki.zksc.io` site and generated raw surfaces. | Push to `origin/main`. |
| Vercel shadow/static publish | Optional validation of the assembled static output. | `bun run verify` or Vercel integration when configured. |

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

3. Confirm the local runtime matches the repository pin:

```bash
bun --version
cat .bun-version
```

4. Run the local command for the same required runner used by pull requests and Vercel:

```bash
bun run verify
```

To exercise the exact GitHub Pages output target, use:

```bash
bun run verify --out _site
```

`bun run verify` checks the `.bun-version` pin, installs `site/` from the frozen lockfile, runs fixed-timestamp exact regeneration before the build, then runs i18n/index/wiki/dependency/typecheck/tests/Astro/Pagefind, assembles the approved output, and audits required routes, every final HTML `href`, and generated routes against that final tree. The canonical Required verification and deploy workflows checkout with `fetch-depth: 0`; shallow/history-less builders instead reuse valid committed `ai-index.json` dates before shallow Git/mtime fallback. It is the release decision; targeted commands below are diagnostic helpers, not substitutes.

The assembler accepts only `_site` and `_vercel_public`. It validates the target and rejects symlinks before recursive cleanup. The output is `site/dist` plus the generated-manifest-approved raw wiki / release / AI files and an assembler-created `.nojekyll`; it must not contain `docs/`, `lib/`, `tools/`, `AGENTS.md`, package/deployment configuration, hidden/ignored source files or unknown root files. The required-route smoke gate checks root, ja/en, crawler, AI/API and Pagefind files. `html:routes` then resolves every assembled HTML `href` from its source-page URL and requires every same-origin target to be an exact-case, non-empty, non-symlink regular file after query/fragment removal. `ai:audit` separately reads the assembled llms/sitemap/index/API copies; route fields and same-host API `external_links` must resolve and match the exact scheme/host/port. Source-preserving `ai-index.json` `markdown_links` and external origins are not deploy availability claims.

## What To Inspect Locally

| Change type | Required inspection |
|---|---|
| All changes | `bun run verify`; use the failing step name to select a targeted diagnostic below. |
| Docs-only | `bun run docs:audit`, `bun run docs:stale`, and `bun run release:docs`. |
| Wiki content | `bun run wiki:audit:ci`, `bun run index:counts`, and `bun run i18n:check`. |
| i18n | `bun run i18n:status` for diagnosis, `bun run i18n:check` for the blocking result, plus rendered language spot-checks. |
| UI/CSS/theme | `cd site && CI=1 bun run check && bun run build && cd .. && bun run html:check`, [Visual QA Checklist](../07-quality/visual-qa-checklist.md), and desktop/mobile spot-checks. |
| Discovery/API generator or URL helper | `bun run surface:drift`, `bun test tools/discovery_routes.test.ts`, then `bun run verify --out _site`; expect byte-identical regeneration, `Generated route audit passed` and final `PASS`. |
| Static publish assembly / HTML routes | `bun test tools/assemble_static_publish.test.ts tools/required_publish_routes.test.ts tools/html_route_audit.test.ts`, then run `bun run html:routes --out <assembled-output>` and inspect each reported source/resolved target if the focused failure needs diagnosis. |

## Pre-Push Gate

A tracked executable `pre-push` hook runs the canonical command before any push:

```bash
git hook run pre-push
```

- The hook must be mode `100755`, and `core.hooksPath` must point to `.githooks`.
- The hook resolves `bun` from `PATH` or `FINWIKI_BUN`, adds an explicitly supplied executable directory to child `PATH`, and the runner still rejects a version that differs from `.bun-version`.
- Do not bypass with `git push --no-verify`. Fix the reported gate, commit synchronized files when needed, and rerun the hook.

## Push And Production Verification

After the maintainer approves production promotion, create or refresh a PR whose head is `pre` and base is `main`. Do not push a work branch or local `main` directly to production:

```bash
git status --short --branch
gh pr create --repo jasonhnd/finwiki --base main --head pre \
  --title "<日本語の promotion title>" \
  --body "<boundary, validation, release tag>"
gh pr checks <promotion-pr-number>
gh pr merge <promotion-pr-number> --merge
git ls-remote origin refs/heads/main
```

Record the resulting main merge SHA, then watch the deployment triggered by that exact SHA:

```bash
gh run list --branch main --limit 3
gh run watch <run-id> --exit-status
```

Spot-check public URLs after Actions succeeds:

```bash
curl -I https://finwiki.zksc.io/
curl -I https://finwiki.zksc.io/ja/
curl -I https://finwiki.zksc.io/ja/<domain>/<slug>/
curl -I https://finwiki.zksc.io/en/<domain>/<slug>/
curl -I https://finwiki.zksc.io/<domain>/<slug>.md
curl -I https://finwiki.zksc.io/llms.txt
curl -I https://finwiki.zksc.io/ai-index.json
curl -I https://finwiki.zksc.io/api/entries/index.json
```

For UI changes, also open or screenshot representative public pages in Japanese and English after deployment.

## Pull Request Required Check

`.github/workflows/required-verification.yml` runs on pull requests and pushes targeting `pre` or `main`. The stable required-check context is `Required verification`, and its only release command is:

```bash
bun run verify
```

Supplemental scheduled audits may remain separate, but they do not replace this required context.

## Main Branch Protection

After the workflow is present on `main` and a fresh PR has produced a green `Required verification` context, configure `main` protection/rules so that:

- changes require a pull request;
- `Required verification` is required with the branch required to be current;
- administrators are included;
- force pushes and branch deletion are blocked.

Do not require a check context while the workflow is absent from `main`; that would deadlock the first promotion PR. For the one bootstrap promotion that introduces the workflow, require the already-green `pre` gate, human approval and exact-SHA deployment verification, then enable protection immediately after the workflow reaches `main`. Before closing the implementation issue, record both the green check URL and read-only repository-rule evidence:

```bash
gh pr checks <pr-number>
gh api repos/jasonhnd/finwiki/branches/main/protection
gh api repos/jasonhnd/finwiki/rulesets
```

## GitHub Actions (Deploy FinWiki)

Push to `main` (and `workflow_dispatch`) triggers `.github/workflows/deploy.yml`, which pins Bun from `.bun-version`, runs `bun run verify --out _site`, and uploads that verified output to GitHub Pages.

The `deploy` job then publishes the artifact via `actions/deploy-pages`. Always use `gh run watch` after a production push; a local green gate does not prove Pages permissions or the external deployment state.

Every push to `origin/main` must keep the release note and GitHub Release aligned with the bilingual release-document contract: Japanese-only title, body ordered Japanese -> English, and explicit scope, changes, validation, known notes and next steps in every language. Public reading routes remain ja/en. There is no Chinese locale.

Create the tag and GitHub Release only after the exact main merge SHA and successful production deployment are known. The tag target, Release target and recorded promotion SHA must match. Use `gh release view` / `gh release edit` only after the local release note narrative is complete.

## Rollback

Prefer forward fixes. If a release introduces broken generated output, create a corrective commit that restores valid generated surfaces and records the incident in `CHANGELOG.md`.

Never use `git reset --hard` or destructive checkout to hide a bad release in a dirty worktree. Fix the root cause, regenerate, validate and push a corrective commit.
