# Maintenance Runbook

## Routine Tasks

| Task | Frequency | Check |
|---|---|---|
| Domain count calibration | After content batch | `bun run index:audit`; if drift is expected, run `bun tools/index_count_audit.ts --write`, then rerun the read-only audit. |
| Link audit | Every release | `bun tools/wiki_link_audit.ts --fail-on-issues` |
| Release surface sync | Every release | `bun tools/release.ts --write` then strict check. |
| Docs structure review | After docs changes | `bun run docs:audit` (links), `bun run docs:stale` (stale facts), `docs/README.md` entry check. |
| Documentation drift audit | Before next development phase and after large docs/code moves | [Documentation Drift Audit](../07-quality/documentation-drift-audit.md) command bundle. |
| Model-agent workflow review | After delegated development | Task packet, allowed-file diff, RTM row and subagent closeout. |
| i18n freshness review | After source content batch | `bun tools/i18n_status.ts` (read-only), then translation prep/commit if needed. |
| Generated API residue check | After domain move or route generator change | `bun run surface:drift` (API alignment + stale residue + docs leakage). |
| Visual QA | After UI/CSS/theme/localization chrome change | [Visual QA Checklist](../07-quality/visual-qa-checklist.md), site build and representative route screenshots. |

## Standard Flow

1. Pull/sync main.
2. Inspect worktree.
3. If delegating implementation, have the spec agent write or confirm the task packet first.
4. Apply scoped changes or send the bounded packet to the code agent.
5. Review allowed-file diff, RTM and acceptance criteria.
6. Update documentation, RTM and release note when the work changes requirements/specs/operations.
7. Run release write/check.
8. Review generated surfaces and stale API residue.
9. Review diff.
10. Commit and push only when instructed.

## Notes

- Do not rewrite source hashes to suppress stale translations.
- Do not use `--no-verify`.
- Keep unrelated formatting churn out of sync commits.
