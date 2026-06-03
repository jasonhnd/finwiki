---
title: Frontmatter canonical_anchor Field · 提议 / Proposal
aliases:
  - frontmatter-canonical-anchor-field-proposal
  - canonical-anchor-field-proposal
  - canonical-anchor-frontmatter-proposal
  - schema-extension-canonical-anchor
domain: control-proposal
created: 2026-05-25
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2027-05-25
confidence: likely
tags: [meta, proposal, schema-extension, frontmatter, canonical-anchor, navigation]
status: active
sources:
  - SCHEMA.md (current FinWiki frontmatter spec)
  - AGENTS.md (FinWiki maintenance protocol)
  - INDEX.md (domain map and entry counts)
  - tools/wiki_link_audit.ts (current body-link audit script)
  - tools/generate_ai_discovery.ts (current AI-discovery surface generator)
---

# Frontmatter canonical_anchor Field · 提议 / Proposal

## Wiki route

This proposal sits at FinWiki root next to [[SCHEMA|SCHEMA]] and [[INDEX|INDEX]]. Read it together with [[cross-domain-anchor-convention|cross-domain anchor convention]] for the prose rules it would formalize, with [[entity-mirror-page-policy|mirror-page policy]] for the case that motivates the field, and with [[domain-bridge-navigation-guide|domain bridge navigation guide]] for the reader-side benefit.

> [!info] TL;DR
> Proposal: add an optional (not required) frontmatter field `canonical_anchor:` that points cross-domain pages (mirrors, sibling sub-product pages, public-figure pages, macro-tracker pages) at the single source-of-truth anchor for the underlying entity. The field makes machine-readable what is currently a prose convention, would enable an audit-tool extension that flags drift, and would improve `tools/generate_ai_discovery.ts` output by exposing entity-level graph edges to AI / crawler consumers.
>
> **Status (2026-06-03): Phase 0 adopted.** `canonical_anchor:` is now documented in [[SCHEMA]] as an optional field (added to the "Optional / Legacy Fields" table and to the "Canonical Key Order" block, right after `related`). It has been set as a manual pilot on the Saison and Toyota Financial Services mirror pairs (see §4). Phases 1-4 (audit tooling, discovery-output edges, full back-fill, hard requirement) remain future work.

## 1. Motivation

FinWiki has settled into a working convention where:

- Each cross-domain entity has **one canonical anchor** (per [[cross-domain-anchor-convention]]).
- Mirror pages exist in narrow cases (per [[entity-mirror-page-policy]]).
- Cross-domain references are body wikilinks reciprocally enforced.

This convention works for human readers, but it is invisible to tooling. The current frontmatter schema ([[SCHEMA]]) has no field that captures the **entity-level identity** of a page. Aliases are the closest thing, but aliases are page-local: they tell Obsidian how to resolve incoming links, not which other pages represent the same entity.

The result:

- `tools/wiki_link_audit.ts` cannot detect orphan mirrors (a mirror page that does not cross-link back to its sibling).
- `tools/generate_ai_discovery.ts` emits page-level metadata in `llms.txt`, `llms-full.txt`, and `ai-index.json`, but cannot emit **entity-level graph edges** (page X and page Y describe the same real-world entity from different angles).
- Reviewers have to remember which pages are mirror siblings and which are merely cross-referenced. This is a maintenance tax that scales poorly past 1500 entries.

## 2. The proposed field

Add an optional frontmatter field:

```yaml
canonical_anchor: <domain/slug>
```

Semantics:

- **On a mirror page:** `canonical_anchor:` points at the canonical anchor in the **other** domain. The two mirror siblings either both point at one of them (the designated canonical), or both leave the field empty if the mirror pair is symmetric and neither is primary.
- **On a cross-reference-heavy page:** if a page repeatedly references the same entity that has a canonical anchor elsewhere (for example, [[business/jamie-dimon-anti-crypto-pivot-case]] references JPM extensively), the page may set `canonical_anchor: JapanFG/jpmorgan-japan` to declare that JPMorgan Japan is the canonical anchor for JPM-the-entity. Whether to use the field this way is a stylistic choice.
- **On the canonical anchor itself:** `canonical_anchor:` is either omitted or set to the page's own `domain/slug` (self-pointing) to signal "this is the canonical anchor for the entity".

The field is **recommended, not required**. Existing entries do not need to be back-filled in a single sweep.

### Example: mirror pair

`insurance/saison-automobile-fire.md`:

```yaml
title: Saison Automobile & Fire / SOMPO Direct
aliases: [saison-automobile-fire, Saison Automobile & Fire, セゾン自動車火災保険, SOMPO Direct]
domain: insurance
canonical_anchor: JapanFG/saison-automobile-fire-insurance
...
```

`JapanFG/saison-automobile-fire-insurance.md` (the canonical anchor — self-pointing field optional, omitted in the Phase 0 pilot):

```yaml
title: セゾン自動車火災保険 / SOMPOダイレクト (Saison Automobile & Fire / SOMPO Direct)
aliases: [Saison Automobile & Fire, セゾン自動車火災保険, SOMPO Direct, ...]
domain: JapanFG
...
```

The choice of which page is canonical is editorial. The Phase 0 adoption designates the **JapanFG operating-company page** as the canonical anchor (it self-describes as "the operating-company anchor for the direct non-life insurer"), and the insurance page — the product/channel deep-dive "case" — points at it.

### Example: cross-product split (JPM family)

| Page | `canonical_anchor:` |
|---|---|
| [[JapanFG/jpmorgan-japan]] | self (JapanFG/jpmorgan-japan) — this is the canonical anchor for JPM-the-Japan-operating-entity |
| [[fintech/jpmorgan-jpmd-coin]] | self — JPMD is its own entity (a tokenized deposit product) |
| [[fintech/jpm-onyx-wholesale-network]] | self — Onyx is its own entity |
| [[business/jamie-dimon-anti-crypto-pivot-case]] | optional `JapanFG/jpmorgan-japan` to note the related-entity backbone |

The field is **not** a duplicate-detection mechanism. It declares entity identity, not page equivalence.

## 3. Tradeoffs

### Pros

- **Audit tool can detect mirror-pair drift.** `tools/wiki_link_audit.ts` could be extended to verify that every page that declares `canonical_anchor: X` cross-links to X in the body, and that page X cross-links back if it is a mirror sibling.
- **AI-discovery output gains entity edges.** `tools/generate_ai_discovery.ts` could emit an `entities[]` section in `ai-index.json` that groups pages by canonical anchor, exposing entity-level identity to AI consumers. This raises the quality of LLM context that downstream tools assemble.
- **Reviewers gain explicit memory.** Anyone touching a page knows from frontmatter whether it is part of a mirror pair or a cross-product split.
- **Backwards compatible.** Optional field; existing entries continue to validate.

### Cons

- **Maintenance cost.** Every new mirror or cross-product page is one more field to set. Misconfiguration (pointing at a non-existent anchor) becomes a new audit failure mode.
- **Tooling change required.** `tools/wiki_link_audit.ts` and `tools/generate_ai_discovery.ts` both need extensions. The audit script currently checks body-link density only; entity-edge checks are a new layer of logic.
- **Ambiguity in cross-product splits.** When JPM-the-group is the entity but each product has its own canonical anchor, the field becomes editorial. Different reviewers may disagree on whether [[fintech/jpmorgan-jpmd-coin]] should set `canonical_anchor: JapanFG/jpmorgan-japan` or leave it self-pointing.
- **Risk of overuse.** If reviewers start filling in `canonical_anchor:` on every cross-referenced page, the field stops being a signal for mirror / cross-product pairs and becomes noise.

### Net assessment

Tooling cost is modest because both existing tools already parse frontmatter. Editorial ambiguity is real but bounded — the convention can simply say "only set `canonical_anchor:` on mirror pages and on pages where you would otherwise paste a `> See [[X]] for the canonical entity description` callout". Net is mildly positive.

## 4. Migration plan

If adopted, migration would be **incremental and opt-in**:

1. **Phase 0 (preparatory). — ADOPTED 2026-06-03.** [[SCHEMA]] now documents `canonical_anchor:` as an optional field: a row in the §"Optional / Legacy Fields" table (Type: string; vault-root path to the single source-of-truth anchor entry for a multi-domain entity or mirror page) plus an entry in the §"Canonical Key Order" block immediately after `related`. The field has been set as a manual pilot on two confirmed mirror pairs, with the **JapanFG operating-company page** designated as the canonical anchor in each case and the other-domain page (the secondary/mirror "view") pointing at it:
   - [[insurance/saison-automobile-fire]] → `canonical_anchor: JapanFG/saison-automobile-fire-insurance` (the insurance page is the product/channel deep-dive; [[JapanFG/saison-automobile-fire-insurance]] is the operating-company anchor).
   - [[manufacturing/toyota-financial-services]] → `canonical_anchor: JapanFG/toyota-financial` (the manufacturing page is the parent-OEM strategy view; [[JapanFG/toyota-financial]] is the entity profile / operating-company anchor).

   Still outstanding from this phase: updating [[entity-mirror-page-policy]] §7 to recommend setting the field on every confirmed mirror pair, and [[cross-domain-anchor-convention]] §6 to mention the field. No code changes were made (`tools/*` untouched).
2. **Phase 1 (audit-only).** Extend `tools/wiki_link_audit.ts` to:
   - Resolve `canonical_anchor:` values to existing pages (flag broken anchors).
   - Verify reciprocal body links between mirror siblings (both pages must cross-link to each other if they declare the same canonical anchor).
   - Emit a new section in [[wiki-link-improvement-plan]] listing entity clusters and any orphan mirrors.
3. **Phase 2 (discovery output).** Extend `tools/generate_ai_discovery.ts` to emit an `entities[]` section in `ai-index.json` that groups pages by canonical anchor. Update `llms-full.txt` to surface the canonical anchor for each page (one extra line per page).
4. **Phase 3 (back-fill).** Back-fill `canonical_anchor:` on all known mirror pairs (current count is small — the Saison Automobile & Fire pair plus a handful of others; specifics to be enumerated during phase 1 audit). Do not back-fill cross-references except where the page explicitly cites a single canonical entity.
5. **Phase 4 (steady state).** Make `canonical_anchor:` a hard requirement on new mirror pages going forward. Keep it optional on cross-reference-heavy pages.

Each phase can ship independently. Phases 0-2 are zero-risk additions. Phase 3 is a content-touching pass that must be split per [[AGENTS]] rules (each batch updates [[CHANGELOG]] and the AI-discovery surfaces).

## 5. Open questions

- **Should `canonical_anchor:` be a list?** Some entities legitimately have multiple canonical-anchor candidates (e.g. JPM-the-group across JapanFG / fintech / business clusters). A single-string field forces an editorial choice. A list field allows pluralism but weakens the "single source of truth" semantics. Current proposal: single string. Reconsider if real-world use shows it is insufficient.
- **Should the field accept external URLs?** No. Limit to FinWiki internal `domain/slug` paths to keep the tool layer simple.
- **Should the field affect `tags:` derivation?** No. `tags:` remains independent and continues to drive search.
- **How does this interact with deprecated entries?** A deprecated entry should set `canonical_anchor:` to its successor page, similar to a forward-redirect note. This is a natural extension and does not require special handling.

## 6. Decision recommendation

**Phase 0 adopted (2026-06-03).** [[SCHEMA]] now documents the optional field, and the field is set on the Saison and Toyota Financial Services mirror pairs as a manual pilot. Remaining Phase 0 prose touch-ups ([[entity-mirror-page-policy]] §7 and [[cross-domain-anchor-convention]] §6) are outstanding.

Phases 1-4 stay deferred until the pilot reveals whether the field carries enough signal to justify tooling investment. If after six months the field has been useful in audits and reviews, proceed to phase 1.

## 7. Risks of not adopting

- Mirror drift over time. As more domains gain matrix and overlay pages, the temptation to mirror operating entities will rise. Without a machine-readable identity field, drift becomes a manual maintenance problem.
- AI-discovery output stays page-flat. `llms.txt` / `llms-full.txt` / `ai-index.json` will continue to look like a flat list of pages rather than a graph of entities, which limits downstream LLM context-assembly quality.
- Reviewer load. The cross-domain anchor convention will continue to live in prose, increasing onboarding cost for new contributors.

## Related

- [[SCHEMA]] — current frontmatter spec (would gain the new optional field).
- [[INDEX]] — FinWiki domain map.
- [[cross-domain-anchor-convention]] — prose rule the field would formalize.
- [[entity-mirror-page-policy]] — mirror-pair rules the field would help enforce.
- [[domain-bridge-navigation-guide]] — reader-side benefit of better entity edges.
- [[topic-cluster-reference]] — cluster groupings that complement entity-level grouping.
- [[wiki-link-improvement-plan]] — audit-report extension target for phase 1.

## Sources

- [[SCHEMA]] — current frontmatter spec, optional / legacy field section.
- [[AGENTS]] — public-surface rule, trilingual maintenance protocol, AI-discovery refresh requirement.
- [[INDEX]] — domain map and current entry counts.
- `tools/wiki_link_audit.ts` — current body-link audit script (extension target for phase 1).
- `tools/generate_ai_discovery.ts` — current AI-discovery surface generator (extension target for phase 2).
- Worked examples: [[insurance/saison-automobile-fire]] + [[JapanFG/saison-automobile-fire-insurance]] (mirror pair); [[JapanFG/jpmorgan-japan]] + [[fintech/jpmorgan-jpmd-coin]] + [[fintech/jpm-onyx-wholesale-network]] + [[business/jamie-dimon-anti-crypto-pivot-case]] (cross-product split); [[fintech/circle-usdc-stablecoin]] (canonical-only).
