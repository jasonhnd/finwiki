---
title: Entity Mirror-Page Policy · FinWiki 镜像页面规则
aliases:
  - entity-mirror-page-policy
  - mirror-page-policy
  - parallel-page-policy
  - cross-domain-mirror-rules
domain: control-mirror
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags: [meta, convention, mirror-page, cross-domain, navigation]
status: active
sources:
  - SCHEMA.md (FinWiki frontmatter and body-link conventions)
  - AGENTS.md (FinWiki public-surface rule)
  - INDEX.md (domain map and routing surfaces)
  - Example mirror pairs cited in body
---

# Entity Mirror-Page Policy · FinWiki 镜像页面规则

## Wiki route

This policy sits at FinWiki root next to [[SCHEMA|SCHEMA]] and [[INDEX|INDEX]]. Read it together with [[cross-domain-anchor-convention|cross-domain anchor convention]] for the canonical-anchor designation rule and with [[frontmatter-canonical-anchor-field-proposal|frontmatter canonical_anchor proposal]] for the forward-looking machine-readable extension. Use the routing surface [[INDEX]] to confirm the current domain map.

> [!info] TL;DR
> The default for FinWiki is **one canonical anchor per entity**, with cross-links from other domains. Mirror pages — full parallel pages of the same entity in two or three domains — are allowed but **rare**, justified only when each domain's index would lose navigational completeness without a local page and the two pages can carry **non-overlapping content focus**. This document codifies when to mirror, when to cross-link instead, and how to coordinate frontmatter aliases and reciprocal links between mirror siblings.

## 1. Definition of terms

- **Canonical anchor.** The single primary page for an entity, located in the domain that best matches its primary classification (per [[cross-domain-anchor-convention]]).
- **Mirror page.** A second (or third) full page of the same entity in a different domain, written with a non-overlapping content focus that the canonical anchor cannot satisfy on its own.
- **Cross-reference.** A wikilink from a page in domain A to a page in domain B, where domain B holds the canonical or mirror anchor. Most cross-domain entity mentions in FinWiki are cross-references, not mirrors.
- **Stub.** A short routing page that exists primarily to give a domain index a local entry for the entity, redirecting to the canonical anchor for substantive content. Stubs are discouraged in FinWiki — they fail the body-link density check ([[SCHEMA]] §"Body-Link Requirement").

## 2. Default rule: do not mirror

The default is **one canonical anchor**. Reasons:

- **Graph density.** Each new mirror page is a new node that has to be maintained in sync with the canonical anchor. Drift between two pages of the same entity is a quality failure.
- **Reader confusion.** Search results that surface two pages for the same entity raise the question "which one is current?". This is a navigation tax.
- **Aliases already work.** Obsidian resolves wikilinks by `aliases:` declared in frontmatter ([[SCHEMA]]). A reader who types `[[Circle]]` will land on the canonical anchor regardless of which domain they start from, as long as `aliases:` is set correctly.

The canonical-anchor-only approach is the right answer for ~95% of cross-domain entities in FinWiki.

## 3. When mirroring is justified

A mirror page is warranted only when **all** of the following are true:

1. **Distinct regulator-facing perimeters.** The entity sits inside two different regulatory or operating perimeters, each of which has its own domain index that should enumerate the entity (e.g. an insurance-license perimeter and a JapanFG operating-company catalog).
2. **Non-overlapping content focus.** The two pages can carry meaningfully different content (different angle, different framing, different cluster of peers). If one page would be 80%+ duplicate of the other, do not mirror.
3. **Index navigational completeness loss.** Removing the entity from one of the two domain indexes would create a visible gap a reader would hit when scanning that index.
4. **Maintainable.** The entity is stable enough that two synchronized pages can be kept aligned (not a fast-moving stablecoin issuer with weekly news cycles).

If any of these fails, use a single canonical anchor plus cross-references from other domain pages and indexes.

## 4. Worked example: Saison Automobile & Fire (justified mirror)

The pair [[insurance/saison-automobile-fire|insurance domain page]] + [[non-life-insurers/saison-automobile-fire-insurance|JapanFG domain page]] is a justified mirror:

- **Distinct perimeters:** the insurance perimeter (non-life insurance / direct insurance / auto insurance product) and the JapanFG operating-company perimeter (Credit Saison brand stack + SOMPO subsidiary structure) are both real and both have their own indexes that should enumerate this entity.
- **Non-overlapping focus:** the insurance page emphasizes **product economics, channel mix, direct-insurance positioning, and natcat reinsurance bridge**. The JapanFG page emphasizes **the SOMPO subsidiary structure, the Saison brand stack, the "Otona no Jidousha Hoken" product line, and the operating-company catalog framing**.
- **Index completeness:** [[insurance/INDEX]] needs to list this insurer alongside [[insurance/japan-nonlife-big-three]]; [[JapanFG/INDEX]] needs to list it alongside [[card-issuers/credit-saison]] and other SOMPO operating entities.
- **Maintainable:** the entity is a stable Japanese non-life insurer with predictable disclosure cadence.

## 5. Worked counter-example: Circle USDC (not mirrored)

[[fintech/circle-usdc-stablecoin]] is the **single canonical anchor** for Circle Internet Financial in FinWiki. There is no JapanFG mirror page even though Circle has Japan-relevant context (FSA stablecoin perimeter, Japan-side IS-LM consumption). Why no mirror?

- **Non-overlapping focus would not exist.** A Japan-only Circle page would be 80%+ duplicate of the global fintech anchor and would drift quickly.
- **The Japan-side perimeter is already covered.** [[banking/japan-stablecoin-bank-perimeter-2025]] is the Japan-side anchor for the **stablecoin perimeter as a banking topic**, not for any specific issuer. This is the correct level of abstraction.
- **Fast-moving entity.** Circle has frequent corporate, reserve, and product news. Two synchronized pages would drift within weeks.

The right pattern is therefore: one canonical anchor in `fintech/`, cross-referenced from `banking/japan-stablecoin-bank-perimeter-2025`, `payments/INDEX` (as part of the stablecoin-vs-card-rail story), and from any business-narrative pages that touch Circle's IPO arc.

## 6. Worked counter-example: JPMorgan (cross-product split, not mirror)

The JPM family demonstrates a **cross-product split** that looks like a mirror but is not:

- [[foreign-financial-institutions/jpmorgan-japan|JapanFG JPMorgan Japan]] — Japan four-entity operating structure.
- [[fintech/jpmorgan-jpmd-coin|JPMD coin]] — tokenized-deposit product.
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx wholesale network]] — wholesale tokenized-money network.
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] — multi-bank consortium product.
- [[business/jamie-dimon-anti-crypto-pivot-case|Jamie Dimon anti-crypto pivot]] — public-figure strategic-narrative case.

These are **different real-world entities or different angles on JPM-the-group**. Each one is a canonical anchor for its own subject. None of them mirrors any other. The reader is expected to cross between them via wikilinks.

This pattern — one canonical anchor per real-world entity or per distinct product / framework / case — is how FinWiki treats most large multi-product corporations.

## 7. Frontmatter coordination for mirror pairs

When a mirror is justified, the two pages must be frontmatter-coordinated:

- **`aliases:` must overlap.** Every public name of the entity must appear in `aliases:` on **both** pages. This ensures Obsidian link resolution lands on whichever page the reader's link form matches. (In practice, both pages will often resolve, and Obsidian picks one — that is acceptable.)
- **`tags:` should differ in cluster keys.** The insurance-domain mirror should have `tags: [insurance, ...]`; the JapanFG-domain mirror should have `tags: [JapanFG, insurance, ...]` so the entity is discoverable from both domain tag searches.
- **`domain:` must equal the parent directory.** This is a [[SCHEMA]] hard rule; do not set `domain:` to the other domain's name.
- **`status:` should match.** If one page is `active`, the other should be `active`. A mirror with mismatched lifecycle is a quality bug.
- **Forward-looking:** a future `canonical_anchor:` frontmatter field would point each mirror at its single source-of-truth sibling. See [[frontmatter-canonical-anchor-field-proposal]].

## 8. Reciprocal cross-link rule for mirror pairs

Mirror pages **must** cross-link in the body, not only in `## Related`:

- The insurance mirror's `## Wiki route` paragraph (or an equivalent body paragraph) must link to the JapanFG mirror.
- The JapanFG mirror's `## Wiki route` paragraph must link to the insurance mirror.
- Both pages should link to the same set of peer entries (e.g. the relevant comparison-matrix pages) so the cluster context is preserved on both sides.

This is the same reciprocal-link rule as for ordinary cross-domain references (see [[cross-domain-anchor-convention]] §7), applied with extra strictness because mirror siblings are the easiest pair to let drift.

## 9. When in doubt: cross-reference, do not mirror

If you are uncertain whether to mirror an entity, the answer is **do not mirror**. Add a cross-reference from the other domain's index or relevant comparison page. If, six months later, the cross-reference looks insufficient and the other domain's index has a visible gap, then create the mirror.

The cost of converting a cross-reference into a mirror later is low. The cost of pruning a poorly-justified mirror later is high (because someone has to merge the diverged content first).

## 10. Anti-patterns

- **Vanity mirrors.** Creating a JapanFG mirror of a fintech-domain stablecoin issuer just because the issuer has a Japan-side counterparty is a vanity mirror. Use a cross-reference instead.
- **Stub mirrors.** A 30-line "see the canonical page for details" stub mirror is worse than no mirror; it fails the body-link density check and creates index clutter.
- **Drift.** Two mirror pages that contradict each other on basic facts (capital, license number, subsidiary count) are a quality failure. Schedule a `last_tended:` review for both pages at the same date.
- **Asymmetric link.** Mirror A links to mirror B, but mirror B does not link to mirror A. This is an orphan link. The link audit ([[wiki-link-improvement-plan]]) does not catch this directly; reviewers must.

## 11. Decision flow (summary)

1. Is the entity inside two distinct regulatory / operating perimeters with separate indexes? If no → cross-reference.
2. Can the two pages carry meaningfully non-overlapping content? If no → cross-reference.
3. Would each domain's index have a visible gap without a local page? If no → cross-reference.
4. Is the entity stable enough to maintain in sync? If no → cross-reference.
5. All four yes → mirror; coordinate frontmatter aliases and body reciprocal links.

## Related

- [[SCHEMA]] — frontmatter and body-link convention.
- [[INDEX]] — FinWiki domain map.
- [[cross-domain-anchor-convention]] — canonical-anchor designation rule.
- [[domain-bridge-navigation-guide]] — reader-facing journey patterns.
- [[topic-cluster-reference]] — thematic cluster groupings.
- [[frontmatter-canonical-anchor-field-proposal]] — proposed machine-readable `canonical_anchor:` field.
- [[wiki-link-improvement-plan]] — body-link audit and standards.

## Sources

- [[SCHEMA]] — frontmatter spec.
- [[AGENTS]] — public-surface rule.
- [[INDEX]] — domain map.
- Mirror pair examples: [[insurance/saison-automobile-fire]] and [[non-life-insurers/saison-automobile-fire-insurance]].
- Canonical-only examples: [[fintech/circle-usdc-stablecoin]], [[fintech/tether-business-model-short-treasury-yield]], [[fintech/paypal-pyusd-stablecoin]].
- Cross-product split example: [[foreign-financial-institutions/jpmorgan-japan]], [[fintech/jpmorgan-jpmd-coin]], [[fintech/jpm-onyx-wholesale-network]], [[fintech/partior-jpm-dbs-temasek-consortium]], [[business/jamie-dimon-anti-crypto-pivot-case]].
