# Entry Discovery Build Graph

> Implementation design for GitHub Issue #195. This note narrows the build-time
> cache and integration contract before code changes.

## Problem

`EntryLayout.astro` currently loads the complete `entries` collection for every
rendered language page. `entryDiscovery.mjs` then maps and sorts every route to
recompute a `count:first:last` cache signature. The cached index avoids rebuilding
its maps after the first page, but the per-page signature still performs a
full-collection sort, and it cannot detect changes to a middle entry's title,
tags, or curated `related` links.

The visible related, read-next, and backlink lanes are correct and remain the
behavioral baseline.

## Decision

Build one immutable route graph from the canonical `entries` collection inside
`getStaticPaths()`:

1. Normalize and sort entry records once.
2. Compute a deterministic SHA-256 fingerprint over every normalized record.
3. Build route-only related, read-next, and backlink lanes once for every route.
4. Localize the compact lane cards once for each supported language.
5. Pass the finished per-route discovery payload in static page props.

`EntryLayout.astro` must not call `getCollection('entries')` or rescan the corpus.
It only renders the supplied payload.

## Fingerprint Contract

Each sorted record contributes these behavior-affecting values:

- normalized route, domain, and slug;
- title;
- normalized tags;
- ordered curated `related` targets;
- any loader-provided Markdown body value used by a test or future link-aware
  loader.

Length-prefixed serialization prevents delimiter ambiguity. The digest replaces
the old `count:first:last` key, so changing any intermediate route, title, tag, or
curated link invalidates the cached graph. Backlinks continue to come from the
resolved-wikilink index, which is built once in the same static build process.

## Behavior Preservation

The route graph preserves the current priority and de-duplication order:

1. explicit frontmatter `related`;
2. resolved-wikilink backlinks;
3. shared-tag candidates;
4. deterministic same-domain read-next entries;
5. same-domain sibling fallback.

The existing limits remain five related items, three read-next items, and five
backlinks. Empty lanes remain omitted. Localization still uses
`localizedEntryPreview`, and preview filtering occurs after the same route limits
as before.

## Validation

- Unit-test that identical inputs reuse the graph.
- Unit-test that changing the middle record's route, title, tags, or `related`
  value changes the fingerprint and rebuilds affected lanes.
- Compare representative explicit-related, shared-tag, sibling, read-next, and
  backlink lanes with the current ordering contract.
- Prove `EntryLayout.astro` no longer loads the full collection.
- Record clean `cd site && bun run build` timing before and after the change.
- Run `bun run html:check`, `bun run verify`, and `git diff --check`.

## Recorded Implementation Results

- Under the same warmed content-cache and empty-`dist` conditions, the old
  implementation built 2,969 pages in 51.21 seconds and the graph implementation
  built them in 21.18 seconds: 30.03 seconds, or 58.6%, faster.
- Static-route generation fell from 37.42 seconds to 7.78 seconds, a 79.2%
  reduction.
- The complete article-end discovery fragments for all 2,884 localized entry
  pages were byte-identical before and after the integration change.
- Focused cache/parity tests, the 86-test repository suite, Astro check, and the
  duplicate-ID audit passed before the full canonical release gate.

## Non-Goals

- No corpus or translation edits.
- No change to discovery labels, CSS, route limits, or card markup.
- No persistent cross-build cache.
- No change to wikilink resolution or backlink semantics.
