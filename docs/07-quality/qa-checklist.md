# QA Checklist

## Before Commit

- [ ] `git status --short --branch` reviewed.
- [ ] Diff scope matches the task.
- [ ] `docs/README.md` links every new developer doc.
- [ ] Code/doc alignment checked when active docs describe implementation behavior.
- [ ] Documentation drift audit updated or explicitly not applicable when current facts, generated surfaces or next-plan priorities changed.
- [ ] UI/CSS/theme/layout/localization changes checked against `docs/07-quality/visual-qa-checklist.md`.
- [ ] Old moved paths do not appear in active docs or root README.
- [ ] Generated surfaces do not expose `docs/` as source/page/API entries or markdown links.
- [ ] Stale API entries from moved domains/slugs are absent after release write.
- [ ] For delegated implementation, a task packet lists source docs, allowed files, forbidden files, commands and return format.
- [ ] Code-agent diffs do not modify requirements/spec/release/governance docs unless explicitly assigned.
- [ ] Active subagents were kept at 10 or fewer, and finished agents were closed/retired before launching another batch.
- [ ] `README.md` and `CHANGELOG.md` remain ordered Japanese, English, then Chinese.
- [ ] New release note has a Japanese-only title, is ordered Japanese, English, then Chinese, and includes all five required subsections per language.
- [ ] Human-site locales remain ja/en unless a separate architecture decision explicitly changes them.
- [ ] `bun tools/release.ts --write` was run when public release surface changed.
- [ ] Local Bun matches `.bun-version`, and `bun run verify` exits 0.
- [ ] A fresh pull request shows green `Required verification` before merge.
- [ ] Assembled `_site` / `_vercel_public` contains only Astro output, approved raw wiki / AI files and generated `.nojekyll`; `docs/`, developer config, hidden/ignored source files and unmanifested files are absent.
- [ ] All required root, ja/en, crawler, AI/API and Pagefind routes exist in the assembled artifact.
- [ ] `bun run facts:freshness -- --json` exits 0 when fact-freshness / source-recheck behavior changes.
- [ ] `bun tools/active_doc_stale_scan.ts` exits 0 (no stale facts in active docs).
- [ ] `bun tools/generated_surface_drift_scan.ts` exits 0 (no docs leakage or stale API residue).
- [ ] `git diff --check` exits 0.

## Content Safety

- [ ] No credentials, tokens or private keys.
- [ ] No personal information.
- [ ] No customer/counterparty/internal case details.
- [ ] No private chat content.
- [ ] Public knowledge body is based on public sources only.

## Push Follow-Up

- [ ] Push to `origin/main` only after explicit instruction.
- [ ] Verify remote HEAD.
- [ ] Watch GitHub Actions.
- [ ] Verify `main` protection still requires a pull request and `Required verification`.
- [ ] Update/verify GitHub Release.
- [ ] If the work came from a GitHub Issue, close it with the implementing commit, acceptance-criteria evidence, and the validation commands that passed.
