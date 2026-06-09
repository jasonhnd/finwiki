---
name: Content task
about: Wiki corpus content work (new entries, dedup, expansion) based strictly on public sources.
title: "[Content] "
labels: ["type:content"]
---

## Goal
<one concrete content outcome>

## Background
<the public-source gap or route this serves>

## Scope
<what is in scope; explicit non-goals. Public-source only; no fabrication; preserve distinct pages that serve different routes.>

## Allowed Files / Areas
- <domain>/** (name the exact domains)
- <domain>/INDEX.md
- README.md / CHANGELOG.md / releases/** (release surface, by maintainer)

## Acceptance Criteria
- No dead links after the change; inbound wikilinks updated (no redirects exist).
- Any public URL removal is recorded in README.md / CHANGELOG.md / release note.
- <other observable outcomes>

## Validation
- `bun tools/wiki_link_audit.ts --fail-on-issues`
- `bun tools/release.ts --write` then `bun tools/release.ts --check --strict`
- `bun run surface:drift`
- `git diff --check`

## Source Docs
- docs/06-implementation/entry-authoring.md
- docs/01-strategy/next-development-plan.md

## Release Notes
- Wiki content changes require README.md / CHANGELOG.md / releases and a discovery-surface refresh per AGENTS.md.
