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
- [ ] `README.md` and `CHANGELOG.md` remain trilingual.
- [ ] New release note exists and is ordered Japanese, English, Chinese.
- [ ] `bun tools/release.ts --write` was run when public release surface changed.
- [ ] `bun tools/release.ts --check --strict` exits 0.
- [ ] `bun tools/wiki_link_audit.ts --fail-on-issues` exits 0.
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
- [ ] Update/verify GitHub Release.
