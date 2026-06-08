# Acceptance Criteria

## Documentation Restructure

- `docs/README.md` is the only developer documentation entry point.
- All approved directories and main files exist.
- Existing docs are migrated to the new structure.
- Old paths are not referenced from active docs or root README.
- `docs/04-architecture/astro-site-architecture.md` and `docs/99-archive/site-development-plan.md` no longer exist as separate site-level docs.
- Model-agent development work has an executable path: spec agent -> task packet -> code agent -> review -> release sync.
- Documentation drift audit records the current baseline when docs, generated surfaces or implementation facts change.

## Model-Agent Workflow

- High-reasoning specification agents own requirements, specs, acceptance, RTM and code-agent task packets.
- Fast code-implementation agents modify only explicitly allowed code/config files.
- Code-agent output is rejected if it changes BRD/PRD/ARD/FSD/NFR/RTM, README/CHANGELOG/release notes, release gates or unrelated corpus files without explicit assignment.
- Active subagents never exceed 10, and completed subagents are closed/retired before the next batch.

## Release Surface

- `README.md`, `CHANGELOG.md`, release note and generated surfaces are synchronized.
- `release.ts --check --strict` exits 0.
- `wiki_link_audit.ts --fail-on-issues` exits 0.
- `docs/` is still excluded from corpus, sitemap, llms, ai-index, API and site.
- Generated AI/API surfaces do not expose `docs/` as crawlable markdown links or retain stale moved-entry API files.

## Quality

- `git diff --check` is clean.
- Diff contains only intended documentation restructure and generated release surface changes.
- No secrets, personal information, customer information or non-public conversations are introduced.
- UI/CSS/theme/layout changes satisfy [Visual QA Checklist](visual-qa-checklist.md), and visible Japanese UI chrome does not regress to English except for allowed proper nouns or machine artifacts.
