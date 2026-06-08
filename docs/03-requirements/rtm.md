# RTM - Requirements Traceability Matrix

| Requirement ID | Source | Implementation / Doc Owner | Validation | Release Evidence |
|---|---|---|---|---|
| BRD-001 | [BRD](../01-strategy/brd.md) | `INDEX.md`, `site/`, discovery outputs | `bun tools/release.ts --check --strict` | `CHANGELOG.md`, `releases/v*.md` |
| BRD-002 | [BRD](../01-strategy/brd.md) | [docs README](../README.md), [Entry Authoring](../06-implementation/entry-authoring.md) | docs stale-path scan | `releases/v2026.06.07.md` |
| BRD-003 | [BRD](../01-strategy/brd.md) | `README.md`, `CHANGELOG.md`, `releases/`, `tools/release.ts` | `release.ts --write`, `--check --strict` | release note |
| BRD-004 | [BRD](../01-strategy/brd.md) | [Public Information Policy](../00-governance/public-information-policy.md), `AGENTS.md` | QA checklist | release note |
| BRD-005 | [BRD](../01-strategy/brd.md) | [Parallel Development](../06-implementation/parallel-development.md), [Release Gate](../05-functional-specs/release-gate.md) | status + audit + strict check | `CHANGELOG.md` |
| BRD-006 | [BRD](../01-strategy/brd.md) | [Model-Agent Workflow](../06-implementation/model-agent-workflow.md), [QA Checklist](../07-quality/qa-checklist.md) | task packet review | release note |
| PRD-001 | [PRD](../02-product/prd.md) | `INDEX.md`, `site/src/pages/[lang]/domains/` | site build / release check | release note |
| PRD-002 | [PRD](../02-product/prd.md) | `site/src/pages/[lang]/[...slug].astro`, layouts | site build | release note |
| PRD-003 | [PRD](../02-product/prd.md) | `tools/wiki_link_audit.ts`, remark wikilink plugin | `wiki_link_audit.ts --fail-on-issues` | release note |
| PRD-004 | [PRD](../02-product/prd.md) | `site/src/content/i18n/`, i18n scripts | i18n verify + site build | release note |
| PRD-005 | [PRD](../02-product/prd.md) | `tools/generate_ai_discovery.ts` | release check + surface grep | release note |
| PRD-006 | [PRD](../02-product/prd.md) | `docs/06-implementation/`, `docs/08-operations/` | docs link scan | release note |
| PRD-007 | [PRD](../02-product/prd.md) | `README.md`, `CHANGELOG.md`, `releases/` | `release.ts --check --strict` | release note |
| PRD-008 | [PRD](../02-product/prd.md) | [Model-Agent Workflow](../06-implementation/model-agent-workflow.md), [User Journeys](../02-product/user-journeys.md) | role contract review | release note |
| PRD-009 | [PRD](../02-product/prd.md), [UI/UX Principles](../02-product/ui-ux-principles.md) | [UI/UX Functional Spec](../05-functional-specs/ui-ux.md), [Theme System](../04-architecture/theme-system.md), `site/src/` UI surfaces | visual QA + site build when UI changes | release note |
| NFR-001 | [NFR](nfr.md) | `tools/release.ts` | `--check --strict` | release note |
| NFR-002 | [NFR](nfr.md) | `tools/wiki_link_audit.ts` | `--fail-on-issues` | release note |
| NFR-003 | [NFR](nfr.md) | `AGENTS.md`, QA docs | manual review | release note |
| NFR-004 | [NFR](nfr.md) | `lib/markdown_helpers.ts`, `tools/wiki_link_audit.ts`, `site/` allowlist | surface grep | release note |
| NFR-005 | [NFR](nfr.md) | `docs/README.md` | docs structure scan | release note |
| NFR-006 | [NFR](nfr.md) | `docs/03-requirements/rtm.md` | RTM review | release note |
| NFR-007 | [NFR](nfr.md) | i18n scripts and mirror frontmatter | i18n pipeline checks | release note |
| NFR-008 | [NFR](nfr.md) | release docs and GitHub Release workflow | status + remote HEAD after push | release note |
| NFR-009 | [NFR](nfr.md) | Git diff hygiene | `git diff --check` | release note |
| NFR-010 | [NFR](nfr.md) | [Model-Agent Workflow](../06-implementation/model-agent-workflow.md), [Parallel Development](../06-implementation/parallel-development.md) | allowed-file diff review | release note |
| NFR-011 | [NFR](nfr.md) | [Code/Docs Alignment Audit](../07-quality/code-doc-alignment-audit.md), [Next Development Plan](../01-strategy/next-development-plan.md) | stale-code-doc scan + docs link check | release note |
| NFR-012 | [NFR](nfr.md) | [Visual QA Checklist](../07-quality/visual-qa-checklist.md), [Theme System](../04-architecture/theme-system.md) | visual QA + responsive spot checks | release note |
| NFR-013 | [NFR](nfr.md) | [Documentation Drift Audit](../07-quality/documentation-drift-audit.md), [Documentation System](../00-governance/documentation-system.md), `tools/generate_ai_discovery.ts` | docs drift scan + surface grep + strict release check | release note |
| FSD-001 | [FSD](../05-functional-specs/fsd.md) | site rendering docs and Astro pages | site build / release check | release note |
| FSD-002 | [FSD](../05-functional-specs/fsd.md) | search index generation | strict check / build | release note |
| FSD-003 | [FSD](../05-functional-specs/fsd.md) | wikilink resolution | link audit | release note |
| FSD-004 | [FSD](../05-functional-specs/fsd.md) | i18n pipeline | translation verify | release note |
| FSD-005 | [FSD](../05-functional-specs/fsd.md) | release gate | strict check | release note |
| FSD-006 | [FSD](../05-functional-specs/fsd.md) | AI discovery surface | release write/check | release note |
| FSD-007 | [FSD](../05-functional-specs/fsd.md) | [Model-Agent Workflow](../06-implementation/model-agent-workflow.md) | task packet + review checklist | release note |
| FSD-008 | [FSD](../05-functional-specs/fsd.md), [UI/UX](../05-functional-specs/ui-ux.md) | `site/src/layouts/Base.astro`, `site/src/layouts/EntryLayout.astro`, `site/src/styles/global.css`, `site/src/pages/**`, `site/src/i18n/ui.ts` | visual QA + Astro build when changed | release note |
