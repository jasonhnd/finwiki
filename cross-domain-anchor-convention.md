---
title: Cross-Domain Anchor Convention · FinWiki 跨领域实体页面归属约定
aliases:
  - cross-domain-anchor-convention
  - cross-domain-anchor
  - domain-anchor-rules
  - canonical-anchor-rules
domain: control-anchor
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags: [meta, convention, navigation, cross-domain, canonical-anchor]
status: active
sources:
  - SCHEMA.md (FinWiki frontmatter and body-link conventions)
  - AGENTS.md (FinWiki public-surface and maintenance rules)
  - INDEX.md (FinWiki domain map, 23 domains, 1347+ entries)
  - Example entries cited in body (Circle USDC, JPMorgan Japan, Saison Automobile & Fire, etc.)
---

# Cross-Domain Anchor Convention · FinWiki 跨领域实体页面归属约定

## Wiki route

This entry sits at FinWiki root next to [[SCHEMA|SCHEMA]] and [[INDEX|INDEX]]. Read it together with [[entity-mirror-page-policy|entity mirror-page policy]] for parallel-page rules, [[domain-bridge-navigation-guide|domain bridge navigation guide]] for the reader-facing flow, and [[frontmatter-canonical-anchor-field-proposal|frontmatter canonical_anchor proposal]] for the forward-looking machine-readable extension.

> [!info] TL;DR
> FinWiki has 23 domains and ~1347 entries (per [[INDEX]] as of 2026-05-25). Many real-world entities sit in two or three domain contexts at once: a stablecoin issuer is a fintech bedrock entity **and** a banking-perimeter counterparty **and** a payments-license consumer. There is no single global convention for which domain "owns" the canonical page. This document codifies the decision rule used across waves 1-9 and going forward.

## 1. Why this matters

FinWiki entries are routed primarily by directory (`fintech/`, `JapanFG/`, `banking/`, `payments/`, etc.), and `INDEX.md` files plus `[[domain/INDEX]]` wikilinks anchor every entry to one parent domain.

Real entities, however, almost never sit in only one domain:

- **Circle Internet Financial** is a fintech stablecoin issuer, a NYSE-listed business, and a payments-rail counterparty.
- **JPMorgan Chase & Co.** is a global bank, a derivatives dealer, a US securities firm, a Japan foreign-bank-branch operator, and a fintech / tokenized-deposit pioneer.
- **Saison Automobile & Fire (SOMPO Direct)** is a non-life insurer, a JapanFG operating company, and a piece of the Credit Saison brand cluster.

Choosing the right domain for the canonical anchor — and deciding whether mirror pages are warranted — is the central navigation question for any cross-domain entity. This convention codifies how FinWiki has been making that choice.

## 2. Canonical anchor designation rule

For a given entity E, the **canonical anchor** is the single page in the domain that best matches the entity's **primary classification** in public sources (regulator registries, primary corporate disclosure, press-release self-description).

The decision flow:

1. **Regulated entity test.** If E is a regulated entity in Japan (FSA, METI, BoJ counterparty register, JVCEA), the canonical anchor goes under the domain matching its regulatory perimeter — most often `JapanFG/`, `banking/`, `insurance/`, `securities/`, `payments/`, or `exchanges/`.
2. **Macro / regulatory topic test.** If E is a regulatory framework, a macro policy line, or a multi-jurisdiction trend (GENIUS Act, MiCA, HKMA stablecoin licensing, MAS PSA, EPI four-camp landscape, CBDC adoption curve), it belongs in `fintech/` if crypto / stablecoin / tokenized money is central, otherwise in `payments/` or `policy-finance/`.
3. **Public-company strategic narrative test.** If E is best understood as a public-company strategic case (Jamie Dimon's anti-crypto pivot, Larry Fink's BlackRock digital-asset template, Brian Armstrong's Coinbase public-company template), the canonical anchor goes under `business/`.
4. **System / protocol test.** If E is a protocol, network, or system-layer concept (BFT validator economics, account abstraction, Canton, Besu, IBC), it belongs in `systems/` or `agent-economy/`.

## 3. Worked examples

| Entity | Canonical domain | Why | Cross-domain references |
|---|---|---|---|
| [[fintech/circle-usdc-stablecoin\|Circle USDC]] | `fintech/` | Stablecoin issuer + macro fintech case dominates the narrative | Referenced from `payments/` (settlement rail) and `JapanFG/` (Japan stablecoin-bank-perimeter context) |
| [[fintech/stripe-usdb-bridge-stablecoin\|Stripe USDB / Bridge]] | `fintech/` | Stablecoin issuance is the lead story; the broader Stripe strategy lives under `business/` and `payments/` | Referenced from [[business/founder-pivot-outcome-template-matrix\|founder pivot template]] and embedded-wallet fintech-disintermediation entries |
| [[JapanFG/jpmorgan-japan\|JPMorgan Japan]] | `JapanFG/` | Primary classification is "foreign bank with Japan branch / securities / trust subsidiaries" | Referenced from [[fintech/jpmorgan-jpmd-coin\|JPMD coin]] and [[fintech/jpm-onyx-wholesale-network\|JPM Onyx wholesale network]] for tokenized-deposit context |
| [[fintech/jpmorgan-jpmd-coin\|JPM JPMD coin]] | `fintech/` | This is a stablecoin / tokenized-deposit product, not a bank entity | Referenced from [[JapanFG/jpmorgan-japan\|JPMorgan Japan]] |
| [[fintech/jpm-onyx-wholesale-network\|JPM Onyx wholesale network]] | `fintech/` | This is a tokenized-money network, not a bank entity | Referenced from JapanFG JPMorgan page and from `systems/` cross-chain entries |
| [[business/jamie-dimon-anti-crypto-pivot-case\|Jamie Dimon anti-crypto pivot]] | `business/` | This is a public-figure strategic-narrative entry | Referenced from JPMorgan-related fintech entries |
| [[insurance/saison-automobile-fire\|Saison Automobile & Fire (insurance)]] + [[JapanFG/saison-automobile-fire-insurance\|same (JapanFG)]] | mirrored | Insurance perimeter and JapanFG operating-company perimeter both apply | See [[entity-mirror-page-policy]] |

## 4. When the canonical anchor sits in fintech but the entity is also a Japan-regulated operator

Stablecoin issuers, tokenized-money products, and global macro policy lines almost always anchor in `fintech/`, even when there is a Japan-side operating reality. The reason: the global stablecoin / tokenized-money narrative is one connected graph (issuers, regulators, reserve structure, GENIUS / MiCA / HKMA / MAS / EPI / CBDC trackers), and forcing that graph to split by jurisdiction would break the cross-reference density that makes the fintech domain useful.

The Japan-side operator, when one exists, gets a separate, shorter `JapanFG/` page that focuses on the **Japan license**, **Japan capital**, and **Japan counterparty perimeter**, and that links back to the fintech anchor for the global product / reserve / treasury context.

Example: [[JapanFG/jpmorgan-japan|JPMorgan Japan]] focuses on the **Japan four-entity structure** (banking branch + securities + asset management + trust bank). The global JPM crypto / tokenized-deposit story sits in [[fintech/jpmorgan-jpmd-coin|JPMD coin]] and [[fintech/jpm-onyx-wholesale-network|JPM Onyx wholesale network]]. The [[business/jamie-dimon-anti-crypto-pivot-case|Jamie Dimon pivot case]] sits separately under `business/`.

## 5. When to create a mirror page instead of a cross-link

See [[entity-mirror-page-policy]] for the full rule. The short version:

- Default: **one canonical anchor + cross-links from other domains**.
- Mirror page is justified when the same operating entity has **distinct regulator-facing perimeters** (e.g. insurance license vs. JapanFG operating-company catalog), or when each domain's index would lose navigational completeness without a local stub.
- Example of justified mirror: [[insurance/saison-automobile-fire]] + [[JapanFG/saison-automobile-fire-insurance]]. The insurance domain anchor focuses on **product economics and channel mix**; the JapanFG anchor focuses on **the Credit Saison brand stack + SOMPO subsidiary structure**.

## 6. Frontmatter alignment for cross-domain entities

Every entry — canonical anchor or mirror — must:

- set `domain:` to the **parent directory name** (this is a SCHEMA requirement, see [[SCHEMA]]);
- declare `aliases:` that include every name the entity is known by across domains, so Obsidian link resolution works regardless of which domain a reader starts from;
- include cross-domain `tags:` (for example, a JapanFG-domain JPM page may carry `tags: [JapanFG, foreign-ib, banking]` so it is also discoverable from banking-domain searches).

A forward-looking proposal to add an explicit `canonical_anchor:` frontmatter field — pointing each mirror or related page to its single source-of-truth anchor — is documented in [[frontmatter-canonical-anchor-field-proposal]].

## 7. Reciprocal cross-link rule

When two pages reference the same entity from different domains, **both pages must cross-link**. This is a hard rule, not a recommendation.

Mechanically:

- Add the cross-domain link inside the body (in a `## Wiki route` paragraph or in the relevant content section), not only in `## Related`.
- Use the form `[[domain/slug|display-name]]` so the prose reads naturally.
- The link audit ([[wiki-link-improvement-plan]] / `tools/wiki_link_audit.py`) does not enforce reciprocity, but reviewers should treat orphan cross-references as a flaw.

## 8. Common anti-patterns to avoid

- **Domain hopping.** Do not move a canonical anchor between domains just because a new wave of entries makes another domain look like a "better fit". If reclassification is necessary, leave a deprecated stub at the old slug with `status: deprecated` and a forward link.
- **Silent duplication.** Do not create a mirror page without updating the canonical anchor to cross-link back. Orphan mirrors degrade the graph.
- **Footer-only cross-references.** Body wikilinks are required ([[SCHEMA]] §"Body-Link Requirement"). A footer-only `## Related` entry to the canonical anchor is insufficient.
- **Skipping the macro page.** If an entity is part of a macro tracking cluster (GENIUS, MiCA, HKMA, CBDC), the operating-entity page should link to at least one macro-tracker entry inside `fintech/` so the reader can step up the abstraction ladder.

## Related

- [[SCHEMA]] — FinWiki frontmatter and body-link conventions.
- [[INDEX]] — FinWiki domain map and routing surfaces.
- [[entity-mirror-page-policy]] — When parallel pages in 2-3 domains are justified.
- [[domain-bridge-navigation-guide]] — Reader-facing journeys across the cross-domain graph.
- [[topic-cluster-reference]] — Topic-cluster groupings that cross domain boundaries.
- [[frontmatter-canonical-anchor-field-proposal]] — Forward-looking machine-readable canonical-anchor field.
- [[wiki-link-improvement-plan]] — Body-link audit report and standards.

## Sources

- [[SCHEMA]] — frontmatter spec, body-link rule.
- [[AGENTS]] — public-surface rule, trilingual maintenance protocol.
- [[INDEX]] — domain map, 23 domains, current entry counts.
- Example entries: [[fintech/circle-usdc-stablecoin]], [[fintech/stripe-usdb-bridge-stablecoin]], [[JapanFG/jpmorgan-japan]], [[fintech/jpmorgan-jpmd-coin]], [[fintech/jpm-onyx-wholesale-network]], [[insurance/saison-automobile-fire]], [[JapanFG/saison-automobile-fire-insurance]], [[business/jamie-dimon-anti-crypto-pivot-case]].
