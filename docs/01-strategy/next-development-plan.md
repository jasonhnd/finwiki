# Next Development Plan

> Development plan for the next FinWiki phase after the documentation-system rebuild. It is based on [Code/Docs Alignment Audit](../07-quality/code-doc-alignment-audit.md) and current code behavior, not on older roadmap snapshots.

## Planning Principle

Do not add more content volume until the public entry points, documentation checks, and i18n freshness checks are first-class tooling. FinWiki already has 40 domains and 1485 link-audited entries; the next phase should improve control, repeatability and handoff quality. The 2026-06-08 drift audit also corrected stale canonical-anchor paths and stale API cleanup behavior, so new work should build on those facts rather than old JapanFG aliases or memory-only deployment steps.

## Phase A - Public Entry-Point Audit Hardening

Goal: make `.txt` AI/crawler entry points as safe as Markdown entries.

### A1. Add `.txt` Link/Route Audit

Problem:

- `llms-tasks.txt`, `llms.txt`, and `llms-full.txt` can carry public route references.
- Markdown wikilinks are gated, but `.txt` route drift is not.

Implementation task packet:

- Source docs: [Wikilink Resolution](../05-functional-specs/wikilink-resolution.md), [AI Discovery Surface](../05-functional-specs/ai-discovery-surface.md), [Toolchain](../06-implementation/toolchain.md).
- Allowed files: `tools/`, `lib/markdown_helpers.ts`, `docs/05-functional-specs/`, `docs/07-quality/`, `package.json` if adding a script.
- Expected behavior: read selected `.txt` files, extract route-like references, validate that referenced source paths or public routes resolve, and report failures.
- Validation: positive fixture/pass case, negative fixture/fail case, `bun tools/release.ts --check --strict`.

Acceptance:

- `.txt` route drift can fail a dedicated check.
- The check can be called from the release gate or package script.
- Historical `.txt` entries are not rewritten unless the check finds a real issue.

## Phase B - Developer Docs Quality Gates

Goal: make internal docs safe to use even though `docs/` is intentionally excluded from corpus/wikilink audit.

### B1. Add Docs Markdown Link Checker

Problem:

- `docs/` is excluded from public wikilink audit by design.
- Current docs link verification is a one-off local Node script.

Implementation task packet:

- Source docs: [Documentation System](../00-governance/documentation-system.md), [QA Checklist](../07-quality/qa-checklist.md), [Test Plan](../07-quality/test-plan.md).
- Allowed files: `tools/`, `docs/07-quality/`, `package.json`.
- Expected behavior: check relative Markdown links in `docs/**/*.md`, reject broken links and links escaping the repo.
- Validation: add one negative fixture or documented manual negative test, then run the checker on current docs.

Acceptance:

- `docs_markdown_links_ok` or equivalent is produced by a reusable command.
- Test plan and QA checklist reference the reusable command, not a one-off snippet.

### B2. Add Stale Active-Docs Scan

Problem:

- Historical docs can mention old counts, but active docs should not instruct developers using stale facts such as 23 domains or deprecated site mirrors.

Expected behavior:

- A lightweight scan checks active docs for known stale implementation phrases.
- Archive and historical release notes are exempt.

Acceptance:

- The scan catches active-doc references to obsolete site mirrors, 23-domain current-state claims, old Python/postbuild assumptions, and report-only canonical drift claims.

### B3. Add Generated-Surface Drift Scan

Problem:

- Release notes and control docs can discuss `docs/`, but AI surfaces should not expose `docs/` as crawlable markdown links.
- Domain moves can leave stale generated files unless API output is cleaned before rewrite.

Expected behavior:

- Check `ai-index.json`, `api/entries/index.json`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and `robots.txt` for forbidden docs routes/source entries and stale old-domain API residue.

Acceptance:

- The scan distinguishes historical prose from page/source/API entries.
- It catches stale `api/entries/<old-domain>/` files after a route/domain move.

## Phase C - i18n Freshness And Integrity Reporting

Goal: turn i18n status from batch memory into a repeatable report.

### C1. Add Read-Only i18n Status Command

Problem:

- Prep/commit scripts can process translations, but maintainers need a non-mutating status report before starting work.

Expected report:

- Count of source entries.
- Mirror counts by language.
- Missing mirrors by language.
- Stale mirrors by language using `source_hash`.
- `fidelity: needs_review` counts.
- Source pointer drift counts.
- Optional sample rows for stale/missing items.

Allowed files:

- `site/scripts/`, `docs/04-architecture/i18n-architecture.md`, `docs/05-functional-specs/i18n-pipeline.md`, `docs/07-quality/test-plan.md`.

Acceptance:

- Command exits 0 for report-only mode.
- It does not rewrite `source_hash`.
- It can be used before translation batches and after domain moves.

## Phase D - Release And Deployment Operations

Goal: make local and GitHub deployment verification less dependent on memory.

### D1. Keep Deployment Runbook And Checks Current

Problem:

- The deployment runbook now spells out local site install/build, Vercel shadow build, duplicate-id check, GitHub Actions watch and public URL spot-checks.
- Future deployment-tooling changes can still drift away from the runbook.

Acceptance:

- Any future deployment-tooling change updates [Deployment Runbook](../08-operations/deployment-runbook.md), [Incident Runbook](../08-operations/incident-runbook.md), and [Maintenance Runbook](../08-operations/maintenance-runbook.md) in the same session.
- Site/UI changes still run site build, duplicate-id check and visual QA.

### D2. Add Incident Playbooks For Common Gate Failures

Problem:

- Incident runbook lists categories but not repair recipes.

Acceptance:

- Add repair recipes for count drift, docs leakage, canonical drift, `.txt` audit failure, i18n stale spike and deployment failure.

## Phase E - Content Quality After Tooling

Goal: resume content work only after the tooling/control gaps above are closed.

### E1. Deduplicate v12 Double-Batch Topics

Priority domains:

- `loyalty`
- `money-market`
- secondary review: `business`, `corporate-strategy`, `manufacturer-finance`

Approach:

- Compare topic intent, source base and wikilink role.
- Merge only true near-duplicates.
- Preserve distinct benchmark, mechanism and case pages if they serve different routes.

Acceptance:

- No dead links after merges.
- Redirects are not available, so merges must update inbound wikilinks.
- README/CHANGELOG/release note record any public URL removals.

### E2. Selective Small-Domain Expansion

Candidate domains:

- `security`
- `retail`
- `consumer-finance`
- `financial-licenses`
- `trading-company-finance`
- `financial-conglomerates`

Rule:

- Add pages only after a public-source gap is identified and the route cannot be served by an existing page.

## Recommended Sequence

| Order | Work item | Why first | Owner model role |
|---:|---|---|---|
| 1 | `.txt` route/link audit | Protects public AI entry points and closes a known audit gap. | High-reasoning spec agent -> code implementation agent |
| 2 | Docs Markdown link checker | Makes the new documentation system self-checking. | High-reasoning spec agent -> code implementation agent |
| 3 | Active-doc stale scan | Prevents old architecture assumptions from re-entering active docs. | High-reasoning spec agent -> code implementation agent |
| 4 | i18n status command | Makes translation state inspectable before future batches. | High-reasoning spec agent -> code implementation agent |
| 5 | Generated-surface drift scan | Prevents stale API residue and docs-link exposure after route/doc moves. | High-reasoning spec agent -> code implementation agent |
| 6 | Deployment runbook upkeep | Keeps publish/CI work transferable as tooling evolves. | Documentation/spec agent |
| 7 | v12 dedup review | Content cleanup after tooling is safer. | High-reasoning content reviewer |
| 8 | Small-domain expansion | Adds content only after operational controls are stronger. | Content agents under file-scope rules |

## Non-Goals For This Phase

- No broad UI redesign. Targeted UI/CSS work should follow [UI/UX Principles](../02-product/ui-ux-principles.md), [Theme System](../04-architecture/theme-system.md), [UI/UX Functional Spec](../05-functional-specs/ui-ux.md), and [Visual QA Checklist](../07-quality/visual-qa-checklist.md).
- No new large translation batch unless i18n status reporting shows the exact scope.
- No bulk content expansion before `.txt` audit and docs checks are first-class.
- No model-version-specific workflow rules; keep model roles capability-based.

## Validation Bundle

Each completed item should end with:

```bash
git status --short --branch
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

Add item-specific checks from the sections above. If generated public surfaces change, run:

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict
```
