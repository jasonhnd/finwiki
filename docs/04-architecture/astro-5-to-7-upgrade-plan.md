# Astro 5 to 7 Upgrade Migration Plan

Status: planning document for issue #148. Do not implement the upgrade in this issue.

Target: upgrade the FinWiki Astro site from the current locked Astro 5.18.2 setup to Astro 7.0.5, crossing Astro 6 and Astro 7. The later implementation PR must target `pre`, not `main`, and must wait for review and merge.

## Research Inputs

- Official Astro v6 migration guide: https://docs.astro.build/en/guides/upgrade-to/v6/
- Official Astro v7 migration guide: https://docs.astro.build/en/guides/upgrade-to/v7/
- Local audit on 2026-07-02:
  - `site/package.json` declares `astro: ^5.0.0`, `unist-util-visit: ^5.1.0`, and dev `pagefind: ^1.5.2`.
  - `site/bun.lock` resolves `astro@5.18.2`, `vite@6.4.2`, `zod@3.25.76`, `pagefind@1.5.2`, and `unist-util-visit@5.1.0`.
  - `npm view astro version` returned `7.0.5`.
  - `npm view @astrojs/markdown-remark version` returned `7.2.0`.
  - `npx --yes @astrojs/upgrade@latest --help` reports `--dry-run`.
  - `npx --yes @astrojs/upgrade@latest --dry-run` from `site/` reported that `astro` can update from the declared `v5.0.0` range to `v7.0.5`, and that one package has breaking changes. The dry run did not modify the worktree.

## Current FinWiki Astro Surface

| Area | Current state | Upgrade relevance |
|---|---|---|
| Package boundary | Root `package.json` has no dependencies. Astro lives in `site/package.json` and `site/bun.lock`. | All dependency edits belong under `site/` in the later implementation issue. |
| Integrations | No installed `@astrojs/*` integrations. `site/astro.config.mjs` has local integration hooks: `localizeWikilinks()` and `responsiveTableHtmlRepair()`. | The Astro upgrade tool has no official integrations to upgrade. The local hooks must be smoke-tested against v6/v7 integration hook changes. |
| Markdown config | `markdown.remarkPlugins` is `[remarkStripTitle, remarkResponsiveTables, remarkWikilink, remarkProvenance]`; no `rehypePlugins`. | This is the highest-risk v7 item because Astro 7 defaults away from the unified remark/rehype pipeline. |
| Custom remark plugins | `remark-strip-title`, `remark-responsive-tables`, `remark-wikilink`, `remark-provenance`. | They emit raw HTML nodes for wikilinks, preview data attrs, provenance markers, responsive table wrappers, and timelines. These must remain on the unified pipeline. |
| Content collections | `site/src/content.config.ts` uses `glob()` from `astro/loaders` over the root corpus and i18n mirrors. | Already on the Content Layer API, but the Zod import must move from `astro:content` to `astro/zod` for v6. |
| Entry rendering | `site/src/pages/[lang]/[...slug].astro` imports `render` from `astro:content` and calls `render(tr ?? entry)`. | Already uses the new rendering form required after legacy collection removal. |
| Entry IDs | `site/src/lib/routes.ts` derives routes from `entry.id`. | Already avoids `entry.slug`. |
| Build path | GitHub Pages workflow runs `bun run wiki:audit:ci`, then `cd site && bun install`, `bun run build`, `bun run index:search`, and publish assembly. Vercel runs root `bun run vercel:build`. | The implementation issue must validate both site-local and root release/audit wrappers. |
| Node/Bun | Local `node -v` is `v24.15.0`; local `bun -e "process.versions.node"` reports `24.3.0`; the issue states Vercel uses Node 24.x; GitHub Actions uses `oven-sh/setup-bun@v2` with latest Bun. | Satisfies Astro v6's Node >=22.12 floor, but CI logs should still be checked because the workflows do not pin Node explicitly. |

## Recommended Staging

Use a staged 5 -> 6 -> 7 migration in one implementation branch and one PR targeting `pre`.

1. Rehearse with `npx --yes @astrojs/upgrade@latest --dry-run` from `site/`.
2. Create a v6 checkpoint first, preferably as a separate commit in the future implementation branch:
   - Upgrade `astro` to the latest v6-compatible release.
   - Run `bun install` in `site/`.
   - Apply the v6 source/config changes below.
   - Run the v6 validation set.
3. Move from the v6 checkpoint to v7.0.5:
   - Use `npx @astrojs/upgrade` only after the v6 checkpoint if it can target the desired v7 result cleanly; otherwise update `astro` manually to `7.0.5`.
   - Add `@astrojs/markdown-remark` as a direct dependency and configure the unified processor before trusting any build output.
   - Run the full v7 validation and visual QA set.

Reasoning: v6 contains Content Layer, Zod, Node, Vite, and heading-ID changes. v7 contains the markdown pipeline change that can break FinWiki's core reading layer. A direct 5 -> 7 commit would make it harder to isolate whether a failure came from v6 content/heading behavior or from v7 Satteri/unified markdown changes.

The upgrade tool is useful as an authoritative dependency/change detector, but the final authority is the real build/test output. The tool will not by itself preserve FinWiki's custom remark pipeline; that must be an explicit manual step.

## Remark Pipeline Preservation

Astro 7 defaults to Satteri, its native Markdown pipeline, and the official guide states that `@astrojs/markdown-remark` is no longer installed by default. FinWiki must stay on unified for the v7 upgrade because all four site-critical remark plugins are unified remark plugins.

Required later implementation changes:

1. Add `@astrojs/markdown-remark` as a direct `site/package.json` dependency. Do not rely on the Astro 5 transitive copy currently present in `site/bun.lock`.
2. Keep `unist-util-visit`; the custom plugins import it directly.
3. Import `unified` in `site/astro.config.mjs`.
4. Set `markdown.processor = unified()` while preserving the existing plugin order:

```js
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  markdown: {
    processor: unified(),
    remarkPlugins: [
      remarkStripTitle,
      remarkResponsiveTables,
      remarkWikilink,
      remarkProvenance,
    ],
  },
});
```

Plugin order is part of the behavior contract:

| Plugin | Must still happen | Why order matters |
|---|---|---|
| `remarkStripTitle` | Drops the leading corpus H1 so the layout owns the page title and TOC starts at real body headings. | Must run before heading/TOC extraction observes duplicate H1 content. |
| `remarkResponsiveTables` | Adds sticky/card table classes, table scroll wrappers, and semantic timeline markup. | Must run before wikilinks/provenance convert inline text to HTML so table and timeline detection still sees parseable text. |
| `remarkWikilink` | Converts `[[wikilink]]` text and code-block wikilinks into localized links with route kind and hover-preview data. | Must run before provenance so wikilink labels with markers are not split incorrectly. |
| `remarkProvenance` | Converts provenance markers into `<sup>` markers and source links. | Must run last so markers inside repaired wikilinks, code, and raw HTML are handled after structural transforms. |

Post-upgrade checks specific to this pipeline:

- Verify rendered entry pages contain `.wl`, `data-wl-kind`, and hover-preview `data-wl-title-ja` / `data-wl-title-en` attributes.
- Verify broken wikilinks still render as `.wl-broken`.
- Verify table pages still contain `.prose-table-scroll`, `.prose-table--sticky`, `.prose-table--cards`, `data-label`, `matrix-card__title`, and `matrix-card__field` where expected.
- Verify timeline pages still render `<ol class="timeline">` and `.timeline__date` / `.timeline__event`.
- Verify provenance markers still render `.prov-source`, `.prov-verified`, `.prov-inferred`, `.prov-ambiguous`, and external `rel="noopener noreferrer"` links.
- Verify article-end discovery, browse, domain pages, and the H2/H3 TOC still render in both `/ja/` and `/en/`.

Do not port these plugins to Satteri in the first v7 upgrade. A Satteri port can be a later refactor after the v7 unified path is proven on `pre`.

## Astro v6 Breaking-Change Assessment

| v6 change | Applies to FinWiki? | Required later implementation action |
|---|---|---|
| Node 22.12 minimum | Yes, environment requirement. | Confirm CI/Vercel logs show Node/Bun compatibility at or above Node 22.12. Current local Node 24.15.0, Bun Node compatibility 24.3.0, issue-stated Vercel 24.x, and current Actions setup satisfy the floor. |
| Vite 7 | Low risk. No Vite config or Vite plugins found. | Let Astro dependency resolution move Vite. Run build and inspect any Vite deprecation output. |
| Vite Environment API | Low risk. Local integrations use `astro:build:done` but do not use Vite internals or HMR. | Confirm `localizeWikilinks()` and `responsiveTableHtmlRepair()` still receive `dir` and run after build. |
| Zod 4 | Yes. `site/src/content.config.ts` imports `z` from `astro:content`. | Change to `import { z } from 'astro/zod'` and keep `defineCollection` from `astro:content`. Re-run `astro check` or build to confirm schema inference. |
| Shiki 4 | Probably not material. No custom Shiki config found. | No planned change unless build or visual QA reveals code-block styling differences. |
| Official Astro integrations | No. No installed `@astrojs/*` integrations. | No integration package upgrades beyond adding `@astrojs/markdown-remark` for v7. |
| Legacy content collections backwards compatibility | Applies as an audit item, but FinWiki appears already migrated. | Keep `glob()` loader from `astro/loaders`; no `type: 'content'`; no `entry.render()`; no `entry.slug`. Confirm `site/src/pages/[lang]/[...slug].astro` continues to use `render(entry)`. |
| Deprecated `Astro` in `getStaticPaths()` | No match found. | No planned change. Keep existing `getStaticPaths()` implementations independent of `Astro`. |
| Deprecated `import.meta.env.ASSETS_PREFIX` | No match found. | No planned change. |
| Deprecated `astro:schema` and `z` from `astro:content` | Yes for `z`; no `astro:schema` match found. | Move `z` import to `astro/zod` in `site/src/content.config.ts`. |
| Deprecated exposed `astro:transitions` internals | No match found. | No planned change. |
| Deprecated session driver string signature | No session config found. | No planned change. |
| Deprecated `NodeApp` from `astro/app/node` | No adapter code found. | No planned change. |
| Deprecated `loadManifest()` / `loadApp()` from `astro/app/node` | No adapter code found. | No planned change. |
| Deprecated `createExports()` / `start()` adapter API | No custom adapter found. | No planned change. |
| Removed legacy content collections | Applies as a guardrail, not as a current blocker. | Preserve Content Layer `glob()` collections. If any old mirror under `site/src/content/entries` reappears, do not restore it as a build input. |
| Removed `<ViewTransitions />` | No match found. | No planned change. |
| Removed `emitESMImage()` | No match found. | No planned change. |
| Removed `Astro.glob()` | No match found. | No planned change. Continue using `getCollection()` and content loaders. |
| Removed exposed `astro:actions` internals | No match found. | No planned change. |
| Removed percent-encoded `%25` route filenames | No matching route files found in audited source. | No planned change. Keep route filenames ASCII slug style. |
| Removed `astro:ssr-manifest` virtual module | No match found. | No planned change. |
| Removed `RouteData.generate()` | No match found. | No planned change. |
| Removed `routes` on `astro:build:done` hook | Relevant because local integrations use `astro:build:done`, but they only destructure `{ dir }`. | No code migration needed if build succeeds. If a future hook needs routes, use `astro:routes:resolved`; do not add `routes` to `astro:build:done`. |
| Removed `entryPoints` on `astro:build:ssr` hook | No SSR build hook found. | No planned change. |
| Removed old `app.render()` signature | No adapter code found. | No planned change. |
| Removed `app.setManifestData()` | No match found. | No planned change. |
| Removed `handleForms` prop for `<ClientRouter />` | No `ClientRouter` match found. | No planned change. |
| Removed `prefetch()` with option | No match found. | No planned change. |
| Removed `rewrite()` from Actions context | No Actions context found. | No planned change. |
| Removed schema function signature in Content Loader API | Built-in `glob()` loader only; no custom loader returning a schema function found. | No planned change beyond validating `content.config.ts`. |
| Removed session test driver | No session tests found. | No planned change. |
| Removed support for CommonJS config files | `site/astro.config.mjs` is ESM. | No planned change. |
| Removed/stabilized experimental flags | No `experimental` config found. | No planned change. |
| `i18n.routing.redirectToDefaultLocale` default now `false` | No Astro i18n config; FinWiki uses manual `/ja` and `/en` routes. | No planned change. Verify language homes and entry routes still render. |
| `<script>` and `<style>` tag order preserved | Possible visual risk because Astro components contain styles/scripts. | Build plus visual QA. If order changes break styles, reorder local component style blocks in the implementation issue. |
| Responsive image styles emitted differently | Low risk unless `astro:assets` images are used. No `astro:assets` match found in audited source. | No planned change. |
| Endpoints with file extensions reject trailing slash | Low risk. Human site is route pages; discovery files are generated outside `site/src/pages`. | Verify sitemap/robots/llms links do not point at trailing-slash file endpoints after publish assembly. |
| `import.meta.env` values always inlined | No `import.meta.env` use found in audited site source. | No planned change. |
| Default image service cropping/upscaling/SVG rasterization changes | Low risk. No `astro:assets` match found. | No planned change unless future build finds image usage. |
| `getImage()` throws on client | No match found. | No planned change. |
| Markdown heading ID generation changes | Yes, because `EntryLayout.astro` uses `headings` for H2/H3 TOC anchors. | Do not add a compatibility rehype plugin initially. After v6 build, sample headings ending in special characters and verify TOC links. If inbound/manual anchor links break materially, add a compatibility plugin in a separate issue or as an explicit follow-up. |
| `getStaticPaths()` params cannot be numbers | Low risk. Existing params are `lang`, `domain`, and `slug` strings. | No planned change. Build validates. |
| Astro components cannot be rendered in Vitest client environments | No Vitest config found. | No planned change. |
| Rollup output filename config path changed | No Vite/Rollup output config found. | No planned change. |
| Integration hooks and HMR access patterns changed | Low risk for local build hooks; no HMR access found. | Build validates hook execution. |
| `SSRManifest` interface structure changed | No adapter or SSR manifest code found. | No planned change. |
| Content Loader API schema types inferred instead of generated | Low risk. FinWiki uses built-in `glob()` and user-provided schemas. | Build validates. If type errors appear, adjust `content.config.ts` typing in the implementation issue. |

## Astro v7 Breaking-Change Assessment

| v7 change | Applies to FinWiki? | Required later implementation action |
|---|---|---|
| Vite 8 | Low risk. No Vite plugins/config found. | Let Astro resolve Vite 8. Build is authoritative for any Vite-internal breakage. |
| Removed/stabilized experimental flags | No `experimental` config found. | No planned change. |
| Rust compiler is default and only compiler | Yes as a build strictness change. | Run `bun run build` under `site/`. Fix any unclosed tags or invalid Astro template HTML in the implementation issue. Also inspect generated HTML because custom remark plugins emit raw HTML nodes. |
| Rust compiler CSS output differences | Visual risk, not a known source break. | Visual QA on pre for Japanese/English and light/dark; confirm cool palette, spacing, rails, cards, tables, and TOC behavior. |
| Reserved `src/fetch.ts` / `src/fetch.js` | No such file found under `site/src`. | No planned change. If a file is added later for another purpose, set `fetchFile` or rename it. |
| New default Markdown processor: Satteri | Yes, critical. The current site depends on unified remark plugins. | Add direct `@astrojs/markdown-remark` dependency and set `markdown.processor: unified()` while preserving `remarkPlugins`. Do not accept Satteri default for this migration. |
| Deprecated `markdown.remarkPlugins`, `markdown.rehypePlugins`, `markdown.remarkRehype` still work only with `@astrojs/markdown-remark` installed | Yes. FinWiki uses `markdown.remarkPlugins`. | Keep the existing `remarkPlugins` shape after adding `processor: unified()` and direct dependency. Treat missing wikilink/provenance/table output as a release blocker. |
| New default whitespace handling: `compressHTML: 'jsx'` | Yes as a visual/text-rendering risk, especially inline labels, TOC, evidence badges, and wikilink/provenance inline markers. | Prefer first validating the default. If missing spaces appear between inline elements, either add explicit spaces in affected `.astro` templates or set `compressHTML: true` to preserve v6 behavior. Choose based on visual QA evidence. |
| Deprecated `getContainerRenderer()` from integration package roots | No official UI integrations and no Container API usage found. | No planned change. |
| Removed `@astrojs/db` | No dependency or import found. | No planned change. |
| Removed exposed `astro:transitions` internals | No match found. | No planned change. |

## Implementation Sequence For The Later Issue

1. Confirm the implementation branch starts from latest `pre`; PR target must be `pre`.
2. Run baseline checks on current Astro 5.18.2 if feasible:
   - `bun run docs:audit`
   - `bun run wiki:audit:ci`
   - `bun run i18n:status`
   - `bun run release:check`
   - `cd site && bun install --frozen-lockfile && bun run build && bun run index:search`
   - `bun run html:check`
3. Run `cd site && npx --yes @astrojs/upgrade@latest --dry-run` and record the proposed version/change summary in the PR.
4. Create the v6 checkpoint:
   - Update `astro` to a v6 release and refresh `site/bun.lock`.
   - Update `site/src/content.config.ts` to import `z` from `astro/zod`.
   - Run the baseline/site checks.
   - Inspect representative H2/H3 anchor output, especially headings ending with punctuation or inline code.
5. Create the v7 upgrade:
   - Update `astro` to `7.0.5`.
   - Add direct `@astrojs/markdown-remark` dependency.
   - Add `processor: unified()` to `site/astro.config.mjs`.
   - Preserve the four remark plugins and their order.
   - Run the full validation below.
6. Open one PR targeting `pre`, link issue #148, and wait for review/merge. Do not self-merge or close the issue.

## Validation Plan

Command validation:

```bash
bun run docs:audit
bun run wiki:audit:ci
bun run i18n:status
bun run release:check
cd site && bun install --frozen-lockfile
cd site && bun run build
bun run html:check
cd site && bun run index:search
git diff --check
```

Rendered-output validation:

| Surface | Must verify |
|---|---|
| Wikilinks | Tiered wikilinks, broken wikilinks, localized labels, relative hrefs, and hover-preview data attributes render in `/ja/` and `/en/`. |
| Tables | Sticky header tables, card tables, mobile table `data-label` fields, and the post-build table repair hook still work. |
| Timelines | Semantic timeline lists render as `.timeline` with date/event spans and survive both source Markdown and i18n mirrors. |
| Provenance | Source, verified, inferred, ambiguous, and note markers render; source links point to external URLs or `#sources` as before. |
| H2/H3 reading | Inline and rail TOCs link to generated heading IDs; H3 indentation and active-state behavior still work. |
| Article-end discovery | Related/next/backlink lanes render and link correctly. |
| Browse/domain pages | `/ja/browse/`, `/en/browse/`, language homes, domain list, domain pages, and entry pages render. |
| Palette/theme | Cool palette remains intact in light and dark modes; no unexpected warm/purple one-note drift from CSS serialization. |
| Search | Pagefind index builds after Astro output. |

Visual QA on `pre.finwiki.zksc.io`:

- `/ja/` light and dark.
- `/en/` light and dark.
- At least one long matrix/table entry in both languages.
- At least one entry with timelines.
- At least one entry with dense wikilinks and provenance markers.
- Mobile width and desktop width for the same samples.

Acceptance gates:

- No build errors.
- No docs audit failures.
- No duplicate HTML IDs from `html:check`.
- No release strict-check failure.
- No regressions in the H3 reading features listed above.
- PR targets `pre` and includes v6/v7 guide links plus upgrade-tool/build evidence.

## Rollback Plan

Rollback is a normal git revert of the upgrade implementation commit or commits. Because the later implementation should keep dependency/config/site changes isolated from content changes, reverting should restore:

- `site/package.json`
- `site/bun.lock`
- `site/astro.config.mjs`
- `site/src/content.config.ts`
- any small template fixes made only for the compiler or whitespace migration

After revert, rerun:

```bash
cd site && bun install --frozen-lockfile
cd site && bun run build
bun run html:check
bun run release:check
```

## Fallback: Acceptable v6-Only Stop

If v7's Satteri/unified markdown boundary proves too disruptive, an acceptable fallback is to stop at a green Astro v6 checkpoint on `pre` and defer v7 to a follow-up issue.

The v6-only stop is acceptable only if:

- Astro v6 build passes.
- `z` is imported from `astro/zod`.
- Content Layer behavior remains on `glob()` loaders, `entry.id`, and `render(entry)`.
- H2/H3 heading anchors and TOC links are reviewed.
- The full command validation set passes.
- The PR clearly states that v7 was deferred because remark-pipeline preservation needs a separate implementation/test cycle.

This fallback is not a silent downgrade of the goal. It is a controlled checkpoint that keeps the public site stable while preserving a clear path to v7.
