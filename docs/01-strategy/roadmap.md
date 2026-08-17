# FinWiki Roadmap

> Refreshed 2026-08-16 JST. Live work intake comes only from [GitHub open issues](https://github.com/jasonhnd/finwiki/issues?q=is%3Aissue+state%3Aopen). This file is the current-season control document. [Next Development Plan](next-development-plan.md) is historical evidence, not authorization.

## Current season

The human site already has enough corpus to read. The next season is **UIUX**, not content expansion.

- **UIUX** is the main line: change how a person moves through the site.
- **Content** is maintenance only: keep the corpus true. Do not open new domains, large page batches, or default entity deepening while this season is open.

One issue walks one track. A `site/` change is UIUX. A wiki body or frontmatter change is Content. Do not mix them.

## Track: UIUX (active)

Goal: the site should guide a first-time reader, not present a file catalog.

Page order is fixed. One page type per issue:

1. Home (`/` and `/{lang}/`)
2. Domain (`/{lang}/domains/{domain}/`)
3. Entry (`/{lang}/{domain}/{slug}/`)

Browse, domain list, root, and search inherit the same typesetting once home / domain detail / entry pass. That remaining-surface pass is [#312](https://github.com/jasonhnd/finwiki/issues/312).

### Season acceptance

A new reader can open `/ja/` → megabanks → MUFG and, at each step, know what this place is and what to read next. The path must not feel like a file cabinet.

Home passes only when:

- the first screen is: one sentence of what FinWiki is, search, and at most 5–7 edited “start here” links;
- the full 40-domain map, latest-touched pages, same-entity pairs, and AI/crawler links are not in the first screen;
- “start here” is editorial (banking regime, megabanks, payments, FSA), not “recently touched files”.

Domain pages pass only when:

- megabanks “read first” is MUFG / SMFG / Mizuho, not a scoring accident such as au-FH;
- list excerpts are the entry lead, not “this item sits under the INDEX”;
- route slugs do not compete with the title.

Entry pages pass only when:

- title and summary lead; “wiki position” is not chapter one;
- article-end “read next” uses readable leads, not maintainer voice;
- tables, timelines, and sources keep current density. No marketing cards.

### UIUX non-goals

- no marketing hero
- no quality traffic lights or freshness badges
- no maintainer / audit dashboard
- no typed `entity_edges` relationship panel in this season
- no wiki body edits “to make the page look better”

Home first screen shipped in [#301](https://github.com/jasonhnd/finwiki/issues/301). Domain pages shipped in [#304](https://github.com/jasonhnd/finwiki/issues/304). Entry lead order shipped in [#306](https://github.com/jasonhnd/finwiki/issues/306). Japanese wrap shipped in [#308](https://github.com/jasonhnd/finwiki/issues/308). Reading-path layout shipped in [#310](https://github.com/jasonhnd/finwiki/issues/310). The current UIUX issue is [#312](https://github.com/jasonhnd/finwiki/issues/312) (browse, domain list, root, search).

## Track: Content (maintenance)

Content work is allowed only when:

- an audit threshold trips (conflict, Tier-1 `needs_review`, overdue freshness); or
- a named public fact on an existing page is wrong.

Otherwise the content queue stays empty. Empty issues plus green audits do not authorize a new entity batch or a new domain.

Entity-node / typed-edge work is Content. It may later feed an entry-page relationship panel, but that panel is a later UIUX issue and is out of this season.

New domains or large page batches stay behind the paused Horizon 4 rules: the maintenance loop must be able to absorb them, and this UIUX season must be closed first.

The detailed audit cadence remains [Recurring Audit Cadence Design](../04-architecture/recurring-audit-cadence.md).

## Issue shape

- Title prefix: `UIUX:` or `Content:`.
- UIUX allowed files: named paths under `site/src/**`, plus UI copy in `site/src/i18n/**` if labels change. Spec and visual QA docs only when the contract changes.
- Content allowed files: the named wiki pages in the issue.
- Validation for UIUX: `bun run verify --out _site` and visual QA on ja/en at 375 / 768 / 1440 for every page type touched.
- Validation for Content: the existing audit / release gates named in the issue.

## Closed history (Horizons 0–4)

These horizons are closed or paused. They remain as history so older specs can still name them.

| Horizon | Status | Note |
|---|---|---|
| H0 Truthfulness maintenance | closed | Cadence, runner, and weekly loop remain the Content operating model. |
| H1 Audit-driven intake | operating loop, not a deliverable | Green audits produce no issue. |
| H2 Entity deepening | paused for this season | Batches 01–03 shipped. Further batches need a Content issue after this season, not a default next step. |
| H3 Compact read surface | compact subset shipped (#287) | Full catalog-on-home was the wrong first-screen outcome; this season replaces that reading path. |
| H4 Scope expansion | paused | Still gated on maintenance capacity and on this season closing. |

## Historical Delivered Packet Shapes

The following packet shapes are retained as implementation history and reusable examples. They are not an open queue.

### Recurring Audit Runner

- Goal: add a read-only command or CI workflow that runs the three audits, writes machine-readable artifacts, and reports threshold status.
- Runbook: [Truthfulness Audit Runbook](../08-operations/truthfulness-audit-runbook.md).
- Allowed files: tooling / workflow files named in the issue, plus documentation for the command.
- Non-goals: no corpus edits, no automatic source insertion, no automatic issue closure.
- Validation: audit commands, docs audit, release check if workflow or package scripts change, and `git diff --check`.

### Audit Threshold Calibration

- Goal: compare two weekly audit snapshots and adjust thresholds to avoid noisy issue creation.
- Allowed files: `docs/07-quality/**` and the cadence design doc.
- Non-goals: no tool behavior change unless opened as a separate implementation issue.
- Validation: `bun run docs:audit` and `git diff --check`.

### Round 2 Freshness Batch

- Goal: recheck a ranked freshness batch from the #72 remediation packet against public sources.
- Allowed files: exactly the source pages listed in that batch, required i18n mirrors if body text changes, and generated surfaces from the release command.
- Non-goals: no unrelated corpus cleanup and no broad formatting pass.
- Validation: freshness audit, wikilink audit, release write/check, i18n status, and `git diff --check`.

### Entity Deepening After Audit Baseline

- Goal: continue entity-node / typed-edge enrichment only after the current truthfulness queues are under threshold.
- Allowed files: domain-specific corpus files named in the issue and generated surfaces from release output.
- Non-goals: no speculative relationships and no soft peer edges without public-source backing.
- Validation: entity audit, relevant truthfulness audits, release check, surface drift, and `git diff --check`.

## Roadmap Review Triggers

Update this file when:

- the UIUX season closes or the page order changes;
- a Content audit cycle grows backlog for two weeks;
- a UI issue would surface entity edges or quality badges;
- a new domain would change freshness or provenance load.

Do not update this file to invent work when the issue queue is empty and audits are green.
