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
| Docs-only | Docs link/stale scan, release check, generated surface grep if release note changed. |
| Wiki content | `wiki_link_audit`, release write/check, root/domain count review, i18n freshness if source changed. |
| i18n | Placeholder/source pointer checks, rendered language spot-checks. |
| UI/CSS/theme | Site build, duplicate-id check, [Visual QA Checklist](../07-quality/visual-qa-checklist.md), desktop/mobile spot-checks. |
| Discovery/API generator | `api/entries/index.json`, absence of stale moved API files, `ai-index.json`, `llms*.txt`, `sitemap.xml`. |

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

For UI changes, also open or screenshot representative public pages in Japanese, English and Chinese after deployment.

## GitHub Release

Every push to `origin/main` must keep the release note and GitHub Release aligned with `AGENTS.md`: Japanese-only title, body ordered Japanese -> English -> Chinese, and explicit scope, changes, validation, known notes and next steps.

Use `gh release view` / `gh release edit` only after the local release note narrative is complete.

## Rollback

Prefer forward fixes. If a release introduces broken generated output, create a corrective commit that restores valid generated surfaces and records the incident in `CHANGELOG.md`.

Never use `git reset --hard` or destructive checkout to hide a bad release in a dirty worktree. Fix the root cause, regenerate, validate and push a corrective commit.
