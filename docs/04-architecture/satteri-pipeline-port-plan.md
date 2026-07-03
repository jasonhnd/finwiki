# Satteri Pipeline Port Plan

Status: feasibility and design document for issue #153. This issue does not implement a port.

Decision: DO-NOT-PORT now. Keep the current Astro 7 `unified()` Markdown processor and the direct `@astrojs/markdown-remark` dependency until a later issue identifies a concrete product, performance, or support reason to rewrite the four custom Markdown transforms.

Research date: 2026-07-03 JST.

## Scope

This document evaluates whether FinWiki should move its four custom Markdown transforms from the current unified remark path to Astro 7's native Satteri Markdown pipeline:

- `remark-strip-title`
- `remark-responsive-tables`
- `remark-wikilink`
- `remark-provenance`

No source code, configuration, template, release, generated, or corpus file changes are part of this issue. A later implementation issue may be opened only if this document recommends a port or if the project later reverses the decision with new evidence.

## Current Baseline

Issue #151 upgraded the site to Astro 7 while preserving the four custom transforms through:

```js
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  markdown: {
    processor: unified({
      remarkPlugins: [remarkStripTitle, remarkResponsiveTables, remarkWikilink, remarkProvenance],
    }),
  },
});
```

The upgrade kept the rendered output byte-equivalent to the Astro 5 production site. That matters because the Markdown pipeline owns reader-facing H3 behavior: duplicate-title removal, target-kind wikilinks, hover-preview data, provenance markers, responsive financial tables, matrix cards, and semantic timelines.

## Official Capability Findings

Astro 7 changed the default Markdown processor. The Astro v7 upgrade guide says Astro now renders `.md` and `.mdx` files with Satteri, its native Markdown pipeline, instead of the remark/rehype pipeline, and that `@astrojs/markdown-remark` is no longer installed by default. The same guide gives two supported options for projects with remark/rehype plugins: port them to Satteri MDAST/HAST plugins, or stay on `unified()` if the project is not ready or able to port them. It also states that the deprecated `markdown.remarkPlugins`, `markdown.rehypePlugins`, and `markdown.remarkRehype` options still work only when `@astrojs/markdown-remark` is installed.

Astro's Markdown guide documents the processor boundary more explicitly. `satteri()` is the default, native Satteri processor, while `unified()` is the remark/rehype processor supplied by `@astrojs/markdown-remark`. The Satteri processor accepts `mdastPlugins`, `hastPlugins`, and `features`; switching to `unified()` replaces Satteri for both `.md` and `.mdx` files.

Satteri itself is not Rust-only from a project author's point of view. The Satteri prologue says the parser and AST live in Rust, but the plugin layer lives in JavaScript. It also says Satteri is not a drop-in replacement for unified: the AST shapes are MDAST/HAST-like, but the plugin API is not compatible, and existing remark/rehype plugins will not run unmodified.

The Satteri plugin API reference confirms enough primitives to reproduce FinWiki's transforms in principle:

- MDAST and HAST plugins are defined with `defineMdastPlugin` / `defineHastPlugin`.
- Plugins are visitor objects keyed by node type.
- `mdastPlugins` and `hastPlugins` can receive plugin definitions or per-document factories.
- MDAST visitors can replace nodes, splice raw Markdown, or splice raw HTML with `{ rawHtml: string }`.
- HAST visitors can mutate element attributes through `ctx.setProperty()`.
- Context methods include `removeNode`, `replaceNode`, `insertBefore`, `insertAfter`, `wrapNode`, child insertion/removal, `parent`, `indexOf`, and `textContent`.
- Plugin order is deterministic: MDAST plugins run in array order, then HAST plugins run in array order.

Satteri's feature reference is useful but not sufficient for FinWiki by itself. It has `gfm` enabled by default, including tables, and it has an optional `wikilinks` parser feature that recognizes `[[Target]]` and `[[Target|Label]]`. However, that feature only establishes syntax recognition; FinWiki needs custom route resolution, localization, relative href generation, target-kind classes, broken-link spans, and hover-preview data attributes.

Sources:

- Astro v7 upgrade guide, "New default Markdown processor: Satteri": https://docs.astro.build/en/guides/upgrade-to/v7/#new-default-markdown-processor-stteri
- Astro Markdown guide, "Choosing a Markdown processor": https://docs.astro.build/en/guides/markdown-content/#choosing-a-markdown-processor
- Astro Markdown guide, "Using Satteri plugins and features": https://docs.astro.build/en/guides/markdown-content/#using-stteri-plugins-and-features
- Astro Markdown guide, "Switching to the unified processor": https://docs.astro.build/en/guides/markdown-content/#switching-to-the-unified-processor
- Satteri prologue: https://satteri.bruits.org/docs/
- Satteri plugin API: https://satteri.bruits.org/docs/plugin-api/
- Satteri features reference: https://satteri.bruits.org/docs/features/

## Feasibility Summary

A Satteri-native port is technically feasible only as a rewrite, not as a configuration move. The current remark plugins use `unist-util-visit`, mutate plain JavaScript MDAST objects, and receive a unified `file` object. Satteri plugins receive read-only Rust-backed node views and must mutate through `ctx`. Existing plugins therefore cannot be reused unmodified.

The port is not blocked by the lack of a JavaScript extension API. Satteri has one. The port is blocked as a near-term product decision because:

- The current unified path is supported in Astro 7.
- The current output is already correct after #151.
- Astro 8 is not released, so there is no current removal deadline for `unified()`.
- The rewrite would touch the most important reading affordances in the site for no direct user-visible gain.
- Satteri's plugin API is young relative to unified and has different traversal and mutation semantics; parity would require a careful prototype plus full rendered-output comparison.

## Per-Plugin Mapping

| Current plugin | Current emitted or removed output | Satteri-native mechanism | Port feasibility |
|---|---|---|---|
| `remark-strip-title` | Removes the leading depth-1 heading from the Markdown body so the layout remains the only `<h1>` and the body TOC starts at real H2/H3 sections. | MDAST `heading` visitor. If `node.depth === 1`, `ctx.parent(node)` exists, and `ctx.indexOf(node) === 0`, call `ctx.removeNode(node)`. | Feasible and low complexity. This is the only plugin whose port is straightforward. |
| `remark-responsive-tables` | Converts conservative dated code/list blocks into `<ol class="timeline">` with `.timeline__item`, `.timeline__date`, and `.timeline__event`; wraps enhanceable Markdown tables in `<div class="prose-table-scroll" tabindex="0">`; adds `.prose-table--sticky` and `.prose-table--cards`; adds per-cell `data-label`, `.matrix-card__title`, and `.matrix-card__field`; repairs table cells split by wikilink pipes; includes a post-build HTML repair hook for card labels and timeline lists. | A Satteri port would likely need two parts: an MDAST plugin for timeline detection plus split-table wikilink repair before wikilink/provenance conversion, and either MDAST raw HTML insertion or a HAST `element` visitor for table wrappers, classes, and cell attributes. The HAST path is more aligned with Satteri's documented attribute mutation API, while the MDAST path better matches the current plugin order. A prototype must verify that table text extraction remains stable after wikilink/provenance raw HTML insertion and that generated nodes are visible to later plugins as expected. | Feasible but high-risk. The output is reproducible in principle, but exact parity depends on traversal ordering, generated-node handling, and post-build repair parity. |
| `remark-wikilink` | Rewrites `[[target]]` and `[[target|label]]` into raw HTML anchors for resolved targets and spans for broken targets. Resolved anchors include `.wl`, `.wl--route` / `.wl--peer` / `.wl--system`, `href`, `data-wl`, `data-wl-kind`, `data-wl-route`, and localized hover-preview attributes such as `data-wl-title-ja`, `data-wl-title-en`, `data-wl-lead-*`, and `data-wl-domain-*`. Broken links remain `.wl.wl-broken` spans. Code blocks containing wikilinks become `<pre class="astro-code wl-code" tabindex="0" data-language="..."><code>...</code></pre>`. | Do not rely on Satteri's `features.wikilinks` alone because it cannot perform FinWiki route semantics. Implement a Satteri MDAST `text` visitor that splits text nodes into text and `{ rawHtml }` siblings, using `ctx.parent()` and `ctx.indexOf()` to replace the current node with multiple nodes. Implement a `code` visitor that returns one `{ rawHtml }` block for `wl-code`. Resolve current entry and language from `ctx.fileURL` where available, with `ctx.source` frontmatter parsing as a fallback. Preserve existing site-index and preview-index helper logic. | Feasible but high-risk. The main risk is not syntax parsing; it is preserving exact current-entry detection, language detection, table-cell repair ordering, escaping, relative href behavior, and preview attribute parity. |
| `remark-provenance` | Converts `^[...]`, escaped provenance markers, and `[source:...]` markers into `<sup class="prov ...">` markers. It emits source links with `target="_blank" rel="noopener noreferrer"` for external URLs, `#sources` fallback links, verified/extracted/inferred/ambiguous/note classes, and cleaned links when markers are attached to Markdown links. Code blocks containing markers become `<pre class="astro-code prov-code" tabindex="0" data-language="..."><code>...</code></pre>`. | Implement a Satteri MDAST plugin factory that first collects source-list data from headings/lists, then visits `link`, `text`, `html`, and `code`. Use `ctx.textContent()` for source matching, `ctx.setProperty()` for link URL cleanup, `ctx.insertAfter()` or parent child-list replacement for marker insertion after links, and `{ rawHtml }` for marker and code-block HTML. This plugin must still run after wikilinks so markers embedded in raw wikilink/code HTML are processed or deliberately handled during wikilink rendering. | Feasible but high-risk. The current plugin depends on whole-document source collection plus careful link/code/html marker splitting; Satteri can express the operations, but parity is not a mechanical translation. |

## Required Port Design If This Decision Is Reversed

If a later issue decides to port, it should not attempt a single all-at-once rewrite. Use the following design boundary:

1. Add Satteri-native plugin modules next to, not over, the existing remark plugins.
2. Keep the current unified processor as the baseline during development.
3. Reproduce the plugin order contract:
   - strip leading H1
   - table/timeline structural transform
   - wikilink transform
   - provenance transform
4. Prefer Satteri MDAST plugins for transforms that must see source Markdown structure before HTML conversion.
5. Prefer Satteri HAST plugins for final HTML element wrappers and attributes when exact MDAST `data.hProperties` passthrough behavior is not documented.
6. Keep existing route/index helpers as shared logic where possible, but do not change their public behavior in the same issue.
7. Keep the responsive table HTML repair hook until rendered parity proves it is unnecessary under Satteri.
8. Remove `@astrojs/markdown-remark` only after the Satteri branch has passed rendered-output parity checks on both languages.

The later issue must also include a rollback path: switch `markdown.processor` back to `unified()` and keep the current four remark plugins untouched.

## Validation Plan For A Future Port

If a future issue recommends and implements PORT, validation must mirror the Astro 7 upgrade checks and add count-level parity gates:

Command checks:

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

Rendered-output parity checks:

- Compare `.wl` counts in both `/ja/` and `/en/`.
- Compare `data-wl`, `data-wl-kind`, `data-wl-route`, `data-wl-title-ja`, `data-wl-title-en`, `data-wl-lead-ja`, `data-wl-lead-en`, `data-wl-domain-ja`, and `data-wl-domain-en` counts in both `/ja/` and `/en/`.
- Compare `.wl--route`, `.wl--peer`, `.wl--system`, and `.wl-broken` counts in both `/ja/` and `/en/`.
- Compare `.prose-table-scroll`, `.prose-table--sticky`, `.prose-table--cards`, `data-label`, `.matrix-card__title`, and `.matrix-card__field` counts in both `/ja/` and `/en/`.
- Compare `<ol class="timeline">`, `.timeline__item`, `.timeline__date`, and `.timeline__event` counts in both `/ja/` and `/en/`.
- Compare `.prov-source`, `.prov-verified`, `.prov-extracted`, `.prov-inferred`, `.prov-ambiguous`, `.prov-note`, `.prov-code`, and all `.prov-*` totals in both `/ja/` and `/en/`.
- Confirm source-link markers still emit external `target="_blank" rel="noopener noreferrer"` when the source resolves to an external URL.
- Confirm broken wikilinks do not receive preview `data-wl-*` attributes.
- Confirm code blocks with wikilinks use `wl-code` and code blocks with provenance markers use `prov-code`.
- Confirm each representative entry has exactly one page-level `<h1>` and that the source body's leading H1 is stripped.
- Confirm body H2/H3 anchors and TOC links still work for Japanese and English entries.
- Confirm build output has no `html:check` or `release:check` regression.

Recommended representative pages:

- One dense Japanese entry with multiple peer/system/route wikilinks and provenance markers.
- The corresponding English route if translated.
- One wide matrix table entry in Japanese and English.
- One semantic timeline entry in Japanese and English.
- One entry with broken wikilinks, if the corpus intentionally has any in a non-release sample.

Acceptance for a future port must be stricter than "build green." It must prove identical or intentionally explained counts for the marker surfaces above. Any unexplained count drift is a release blocker because these classes and attributes are functional UI contracts.

## Recommendation

Do not port in the next implementation issue. The evidence supports "possible but not worth doing now," not "impossible." Satteri exposes a JavaScript plugin API capable of MDAST and HAST transforms, but the four FinWiki plugins would need rewritten implementations and full rendered-output parity testing.

The current unified path is supported by Astro 7, already works after #151, and has no current deprecation deadline beyond requiring the direct `@astrojs/markdown-remark` dependency that is already present. Porting now would spend engineering risk on infrastructure churn while the reader-facing output must remain exactly unchanged.

Open a Satteri implementation issue only if at least one of these becomes true:

- Astro announces a concrete removal timeline for the unified processor path.
- Satteri offers a documented compatibility layer or migration helper that materially lowers rewrite risk.
- Build performance becomes a measured blocker and profiling shows Markdown processing is the bottleneck.
- A new Markdown feature required by FinWiki is materially easier or safer to implement on Satteri than on unified.

Until then, keep the Astro 7 unified shim and treat the current remark plugin output as the canonical behavior.
