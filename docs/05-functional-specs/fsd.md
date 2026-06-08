# FSD - Functional Specification

## Functional Areas

| ID | Function | Spec | Primary Validation |
|---|---|---|---|
| FSD-001 | Site rendering | [Site Rendering](site-rendering.md) | Astro build / release check |
| FSD-002 | Search | [Search](search.md) | search index build / release check |
| FSD-003 | Wikilink resolution | [Wikilink Resolution](wikilink-resolution.md) | `wiki_link_audit.ts --fail-on-issues` |
| FSD-004 | i18n pipeline | [i18n Pipeline](i18n-pipeline.md) | placeholder verify + mirror spot check |
| FSD-005 | Release gate | [Release Gate](release-gate.md) | `release.ts --check --strict` |
| FSD-006 | AI discovery surface | [AI Discovery Surface](ai-discovery-surface.md) | `release.ts --write` + `--check --strict` |
| FSD-007 | Model-agent development workflow | [Model-Agent Workflow](../06-implementation/model-agent-workflow.md) | task packet + allowed-file review |
| FSD-008 | Human-site UI/UX | [UI/UX](ui-ux.md) | visual QA + site build when UI changes |

## Shared Acceptance

- No dead wikilinks.
- No count drift.
- No docs leakage into public corpus/discovery as page/source/API entry or AI traversal link.
- No stale moved-entry API JSON remains after release generation.
- No unrelated generated churn.
- Public information boundary remains intact.
- Delegated code output can be traced back to a task packet and accepted against PRD/FSD/ARD/NFR/RTM.
- Human-site UI changes preserve Japanese chrome, theme direction, responsive readability, and visible provenance/translation states.
