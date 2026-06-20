# Contributing to FinWiki

FinWiki is a public knowledge base. Contributions should start from a scoped GitHub issue, use only public-source material, and finish with the validation evidence needed for review.

## 1. Start From An Issue

Non-trivial work is driven by GitHub Issues, not by chat history or ad hoc local notes. Before changing files, make sure the issue states:

- Goal: one concrete outcome.
- Scope and non-goals.
- Allowed files or directories.
- Acceptance criteria that can be checked.
- Validation commands.
- Release-note impact.

Use the templates under `.github/ISSUE_TEMPLATE/`. Common labels are:

| Label family | Meaning |
|---|---|
| `type:docs`, `type:tooling`, `type:content`, `type:planning`, `type:uiux`, `type:ops` | Work category and expected file area. |
| `priority:p0`, `priority:p1`, `priority:p2` | Relative urgency. |
| `queue:now`, `queue:next`, `queue:later` | Execution queue. |
| `agent-ready` | The issue is scoped enough to implement. |
| `blocked` | Do not implement until the blocker is resolved. |
| `needs-spec` | Add or approve a spec before implementation. |

Source of truth: [Model-Agent Workflow](docs/06-implementation/model-agent-workflow.md).

## 2. Keep The Public-Source Boundary

Every repository file is public. Wiki body content, development docs, release notes, and generated surfaces must contain only public internet information, official materials, public disclosures, or analysis based on public sources.

Do not add:

- Secrets, API keys, tokens, cookies, private keys, or credentials.
- Personal information, customer information, counterparty information, or non-public conversations.
- Local machine details or private filesystem paths.
- Fabricated numbers, unverifiable claims, or private project history.

For wiki content rules, read [Public Information Policy](docs/00-governance/public-information-policy.md) and [Entry Authoring](docs/06-implementation/entry-authoring.md).

## 3. Local Setup

FinWiki tooling runs on Bun.

```bash
bun --version
git status --short --branch
```

For site work, install and build inside `site/`:

```bash
cd site
bun install
bun run build
cd ..
```

The pre-push hook must be able to find `bun` on `PATH` or via `FINWIKI_BUN`. Do not bypass it with `--no-verify`; fix the failing gate instead.

## 4. Work By Change Type

| Change type | Start here | Typical validation |
|---|---|---|
| Developer docs, specs, runbooks | [Documentation System](docs/00-governance/documentation-system.md), [Model-Agent Workflow](docs/06-implementation/model-agent-workflow.md) | `bun run docs:audit`, `bun run docs:stale`, `git diff --check` |
| Wiki content | [Entry Authoring](docs/06-implementation/entry-authoring.md), `SCHEMA.md`, the target domain `INDEX.md` | `bun tools/wiki_link_audit.ts --fail-on-issues`, `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `git diff --check` |
| Tooling or generated surfaces | [Toolchain](docs/06-implementation/toolchain.md), relevant FSD or ARD docs | `bun tools/release.ts --check --strict`, plus the relevant scan such as `bun run surface:drift` or `bun run ai:audit` |
| i18n mirror work | [i18n Pipeline](docs/05-functional-specs/i18n-pipeline.md) | `bun run i18n:status`, placeholder verification from the translation pipeline, `git diff --check` |
| UI / site reading experience | [UI/UX Principles](docs/02-product/ui-ux-principles.md), [Theme System](docs/04-architecture/theme-system.md), [UI/UX FSD](docs/05-functional-specs/ui-ux.md) | site build, `bun run html:check`, visual QA on representative routes |
| Release or incident work | [Release Process](docs/08-operations/release-process.md), [Deployment Runbook](docs/08-operations/deployment-runbook.md), [Incident Runbook](docs/08-operations/incident-runbook.md) | the failing gate must pass again, and the closeout evidence must name the commands |

Run only the checks that match the change, but always include `git diff --check` before committing.

## 5. Wiki Content Checklist

For a new or materially edited wiki entry:

- Put the file under the correct top-level domain directory, not under `docs/`.
- Follow `SCHEMA.md` frontmatter order and omit unused optional fields.
- Open with a `## Wiki route` section that links the domain route, a peer or contrast page, and a system or regulatory anchor.
- Use only public sources and mirror them in both `sources:` frontmatter and `## Sources`.
- Update the relevant domain `INDEX.md`.
- If source bodies changed, regenerate or refresh the matching i18n mirrors according to the i18n pipeline.
- If counts, indexes, generated surfaces, or public snapshots changed, run the release write/check flow and update the required release surface.

## 6. Commit And Review

Before committing:

```bash
git status --short --branch
git diff --check
```

Your commit or pull request should include:

- The issue number.
- What changed.
- Which acceptance criteria are satisfied.
- Which commands ran and their result.
- Any residual risk or follow-up.

Maintainer pushes to `origin/main` have extra obligations under [AGENTS.md](AGENTS.md): update `README.md`, `CHANGELOG.md`, release notes, and the GitHub Release when the push scope requires it, then verify the remote HEAD and deployment status.

Do not close an issue until the implementation commit, validation evidence, and any required release notes are linked from the issue.
