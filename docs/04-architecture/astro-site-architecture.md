# Astro Site Architecture

> Current implementation guide for `site/`. Historical site-design material lives in [site-development-plan.md](../99-archive/site-development-plan.md); do not use the archived plan as current implementation truth.

## Current Scope

The Astro site renders the public human reading layer for the root Markdown corpus.

| Area | Current implementation |
|---|---|
| Framework | Astro 5, static build. |
| Source corpus | Root domain directories, read directly through `site/src/content.config.ts`. |
| Domain allowlist | `ENTRY_DOMAIN_DIRS` in `site/src/content.config.ts`; currently 40 domains. |
| i18n mirrors | `site/src/content/i18n/{ja,en}/<domain>/<slug>.md`. |
| Search | Pagefind, generated after Astro build. |
| Wikilinks | `site/src/lib/siteIndex.mjs` plus build-time localization. |
| Theme / UI | `site/src/styles/global.css`, `Base.astro`, `EntryLayout.astro`, and UI i18n labels; see [Theme System](theme-system.md) and [UI/UX](../05-functional-specs/ui-ux.md). |
| Release build wrapper | Root `bun run verify` for the full audited build and static publish assembly. |
| Publish boundary | `tools/assemble_static_publish.ts`; Astro output plus generated-manifest-approved raw surfaces only. |

## Content Loading

`site/src/content.config.ts` defines two collections:

- `entries`: root corpus entries from `../<domain>/**/*.md`, excluding `INDEX.md`.
- `i18n`: machine translation mirrors from `site/src/content/i18n/**/*.md`.

The site does not read `docs/`, `tools/`, `releases/`, or generated API artifacts as content routes. New domain directories require explicit updates to:

- `site/src/content.config.ts`
- `site/src/lib/siteIndex.mjs`
- `site/src/i18n/groups.ts`
- `tools/wiki_link_audit.ts` domain route suggestions
- root `INDEX.md`

## Routes

| Route | Function |
|---|---|
| `/` | Cover home and language/domain entry points. |
| `/{lang}/` | Language home. |
| `/{lang}/browse/` | Browse all entries in the selected language. |
| `/{lang}/domains/` | Domain list. |
| `/{lang}/domains/{domain}/` | Domain landing page. |
| `/{lang}/{domain}/{slug}/` | Entry page. |

The canonical wiki-source URL rule remains `domain/slug`; the site adds language routing around that source path.

## Static Publish Boundary

The final deployment directory is not a copy of the repository root. Assembly has two inputs:

- every real, non-hidden file produced under `site/dist`;
- raw public files named by the committed `ai-index.json` and `api/entries/index.json` manifests, filtered through explicit root/domain/release/API allowlists.

The raw allowlist includes the selected reader-facing root documents, domain Markdown, release notes, root AI discovery files and indexed API JSON. It excludes `AGENTS.md`, `docs/`, `lib/`, `tools/`, package/deployment configuration, dotfiles and unknown root files even if a generated manifest names them. The assembler creates `.nojekyll` itself as the one required hidden deployment marker.

Only the direct-child outputs `_site` and `_vercel_public` are accepted. Repo-root, parent, arbitrary, nested and symlink targets fail before the assembler performs recursive cleanup. Astro output wins if a raw path collides with an already built site file.

## i18n Rendering

The root corpus is the canonical source. The site uses i18n mirrors when available and falls back according to current site logic when a mirror is missing or stale.

Engineering constraints:

- `source` must point to the current source path.
- `source_hash` is a freshness signal and must not be rewritten to hide stale translations.
- Translation link targets must stay byte-compatible with source wikilink targets.
- Domain moves must update root source paths and all i18n mirror paths.

## Build And Validation

Use root tooling for release readiness:

```bash
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
bun run publish:test
git diff --check
```

When site behavior or styling changes, also run from `site/`:

```bash
bun run build
bun tools/check_duplicate_html_ids.ts site/dist
```

For UI/CSS/theme/layout changes, also use [Visual QA Checklist](../07-quality/visual-qa-checklist.md).

The root Vercel/GitHub Pages canonical verification wrapper is:

```bash
bun run verify
bun run verify --out _site
```

## Current Gaps For Next Development

- Site docs should not carry old 23-domain counts, old 4140-page estimates, or old `site/src/content/entries` mirror assumptions.
- The canonical runner installs `site/` from its frozen lockfile, so a missing local `node_modules` is no longer a reason to defer the build to CI.
- i18n mirror freshness and placeholder integrity are still partly batch-operated; the next plan should formalize a reusable freshness/audit command.

See [next-development-plan.md](../01-strategy/next-development-plan.md) for the planned work sequence.
