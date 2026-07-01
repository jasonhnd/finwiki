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
| Release build wrapper | Root `bun tools/vercel_build.ts` for full static publish assembly. |

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
git diff --check
```

When site behavior or styling changes, also run from `site/`:

```bash
bun run build
bun tools/check_duplicate_html_ids.ts site/dist
```

For UI/CSS/theme/layout changes, also use [Visual QA Checklist](../07-quality/visual-qa-checklist.md).

The root Vercel/GitHub Pages static publish wrapper is:

```bash
bun tools/vercel_build.ts
```

## Current Gaps For Next Development

- Site docs should not carry old 23-domain counts, old 4140-page estimates, or old `site/src/content/entries` mirror assumptions.
- Local site build is not always available on a fresh Windows checkout because `site/node_modules` may be absent; deployment runbooks should state how to install or verify this explicitly.
- i18n mirror freshness and placeholder integrity are still partly batch-operated; the next plan should formalize a reusable freshness/audit command.

See [next-development-plan.md](../01-strategy/next-development-plan.md) for the planned work sequence.
