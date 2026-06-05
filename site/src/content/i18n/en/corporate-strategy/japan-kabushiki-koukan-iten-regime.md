---
source: corporate-strategy/japan-kabushiki-koukan-iten-regime
source_hash: e1a8c06bb5ed26a3
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "株式交換 / 株式移転 (kabushiki koukan / iten) — share-exchange and share-transfer regime for wholly-owned subsidiary and holding-company formation"
translated_at: 2026-06-05T00:00:00.000Z
---

# 株式交換 / 株式移転 (kabushiki koukan / iten) — share-exchange and share-transfer regime for wholly-owned subsidiary and holding-company formation

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the transaction-finance overlay. Read it with [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] for the partial-control sibling (the third share-side regime), [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] for the asset-level contrast, [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree]] for option-set placement, and [[finance/japan-tender-offer-process|Japan tender offer process]] for the cash-bid alternative that 株式交換 frequently follows.

## TL;DR

**株式交換 (kabushiki koukan, share exchange)** and **株式移転 (kabushiki iten, share transfer)** are the two pre-existing Japanese Companies Act mechanisms for moving an entire company under a single parent **using shares, not cash**, as consideration. They are the share-side organizational-reorganization tools that bracket the newer [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] regime:

- **株式交換** makes an *existing* company the **100% (wholly-owned) parent** of a target. The acquirer (完全親会社) issues its own shares to the target's shareholders, who hand over **all** target shares; the target becomes a 完全子会社 (wholly-owned subsidiary).
- **株式移転** creates a **brand-new holding company** above one or more existing companies. The new 完全親会社 is incorporated at the moment of the transfer and receives **all** shares of each transferred company; original shareholders become shareholders of the new HoldCo.

Both differ from [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] in one decisive way: 株式交換 and 株式移転 produce a **100% parent-subsidiary** relationship, whereas 株式交付 stops at a controlling-but-partial stake (>50%, <100%). Like every Japanese reorganization, each runs on a **適格 (qualified, tax-deferred) vs 非適格 (non-qualified, taxable)** axis.

The statutory layer:

- **Companies Act articles 767-771** govern 株式交換; **articles 772-774** govern 株式移転 (株式交付 sits just after, at 774-2 et seq.).
- **Corporation Tax Act article 2(12-16) / 2(12-17)** and the surrounding 組織再編成 provisions govern the 適格 / 非適格 distinction.
- Both require an **acquirer / forming-company shareholders' special resolution** (2/3 threshold) and Companies Act creditor- and dissenting-shareholder-protection procedures.

## 1. The Two Mechanisms Side by Side

| | 株式交換 (share exchange) | 株式移転 (share transfer) |
|---|---|---|
| Parent company | An **existing** company | A **newly incorporated** company |
| Outcome | Target becomes 完全子会社 of the existing acquirer | Existing company(ies) become 完全子会社 of a new HoldCo |
| Minimum acquisition | 100% of target | 100% of each transferred company |
| Consideration | Acquirer's own shares (cash / other property mixable) | New HoldCo's own shares |
| Typical use | Full takeover with stock consideration; converting a listed affiliate into a wholly-owned subsidiary | Pure holding-company formation; merger-of-equals under a joint HoldCo |
| Companies Act articles | 767-771 | 772-774 |
| Decision | Both companies' shareholders' special resolution (2/3) | Each transferring company's shareholders' special resolution (2/3) |

The intuition: **株式交換 points an existing company *upward* over a target; 株式移転 builds a *new* roof over one or more companies.** A single-company 株式移転 is the canonical route to a pure holding company — see [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] for the dedicated treatment of HoldCo formation, where 株式移転 is one of three competing methods.

## 2. 株式交換 — Share Exchange in Detail

The acquiring company (株式交換完全親会社) becomes the sole shareholder of the target (株式交換完全子会社). All target shares move to the acquirer **by operation of law on the effective date**; the acquirer issues consideration directly to former target shareholders.

- **Listed-affiliate cleanup**: the most common use is squeezing out the minority of a partly-owned listed subsidiary to take it 100%. A parent at, say, 53% can move to 100% via 株式交換, paying its own shares — converting a consolidated-but-listed subsidiary into a wholly-owned one.
- **Cash-out variant**: since the 2005 Companies Act, consideration can be **cash or other property** (対価の柔軟化), enabling a "cash-out 株式交換" that functions as a squeeze-out without a preceding TOB. This overlaps the take-private toolkit in [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]].
- **Dissenting-shareholder appraisal**: shareholders who oppose may demand the company buy their shares at fair value (株式買取請求権) — the same minority-protection mechanic that recurs across [[finance/japan-tender-offer-process|tender-offer]] and squeeze-out structures.

## 3. 株式移転 — Share Transfer in Detail

株式移転 incorporates a **new** parent (株式移転設立完全親会社) whose only initial asset is 100% of the transferred company(ies). It is the standard legal route for two patterns:

1. **Single-company HoldCo conversion**: one operating company does a 株式移転 to put itself under a freshly created pure holding company. Shareholders swap their operating-company shares for HoldCo shares one-for-one; the operating company becomes a wholly-owned subsidiary.
2. **Joint HoldCo / merger-of-equals**: two (or more) companies each do a simultaneous 株式移転 into one new HoldCo, parking both under a common parent without merging their operating entities. Many Japanese financial groups were assembled this way — the structures populate [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] and the entities catalogued in [[corporate-strategy/INDEX|corporate-strategy INDEX]].

Because the new HoldCo is created from scratch, 株式移転 avoids any need for the parent to have pre-existing share capital to issue — contrast 株式交換, which needs an existing acquirer with issuable shares.

## 4. Tax Axis — 適格 vs 非適格

The 適格 (qualified) test mirrors the logic used across all Japanese 組織再編成 (corporate reorganizations) and tracks closely with the 会社分割 tests documented in [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]]. The question is whether the share-side reorganization is treated as **tax-deferred (carryover basis)** or **taxable (mark-to-market + deemed-dividend)**.

### Qualified-test scenarios

1. **100%-group (完全支配関係)** — 株式交換 / 株式移転 within a wholly-owned group: minimal tests beyond continuation of the complete-control relationship.
2. **>50%-group (支配関係)** — within a majority-controlled group: adds business-continuation and employee-retention (≈80%) tests.
3. **Joint-business (共同事業要件)** — between unrelated parties: adds the full battery — 事業関連性 (business relatedness), 事業規模 OR 経営参画 (comparable scale or specified-officer participation), 従業者引継ぎ (employee retention), 事業継続 (business continuation), and 継続保有 (continued holding of the issued parent shares by specified shareholders).

### Consequences

| | 適格 (qualified) | 非適格 (non-qualified) |
|---|---|---|
| Subsidiary's assets | Stay at book value; no gain recognized | Marked to fair value in defined cases; embedded gains can crystallize |
| Selling shareholders | No immediate capital-gains tax on the share-for-share swap | Capital gain / deemed dividend can arise, especially on cash consideration |
| Cash consideration | Breaks 適格 in the joint-business case | Common trigger for non-qualified treatment |

The practical rule of thumb is identical to the other regimes: **share consideration preserves 適格; cash consideration generally breaks it.** This is the same fault line that separates a share-funded combination from the cash-funded take-private routes in [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]].

## 5. Where It Sits Among the Share-Side Regimes

Japan now has **three** share-consideration reorganization regimes. Choosing among them is purely about the **target ownership percentage** you want:

| Regime | Resulting stake in target | Parent | Canonical use |
|---|---|---|---|
| **株式交付 (kabushiki koufu)** | >50% to <100% (partial control) | Existing | Friendly partial-control acquisition with stock — see [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] |
| **株式交換 (kabushiki koukan)** | 100% (wholly-owned) | Existing | Full takeover / listed-affiliate cleanup with stock |
| **株式移転 (kabushiki iten)** | 100% (wholly-owned) | **New HoldCo** | Holding-company formation / joint HoldCo |

For **asset-level** (rather than share-level) reorganizations — moving a *business* rather than *shares* — use [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] instead. The full option set, including the divestiture side, is mapped in [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]].

## 6. Procedural Timeline

Both regimes share the Companies Act reorganization timeline, which sets the realistic floor on execution speed:

| Step | Statutory minimum | Notes |
|---|---|---|
| Board approval of 株式交換契約 / 株式移転計画 | — | Same-day possible |
| Pre-meeting disclosure of plan documents at head office | ≥ 2 weeks before shareholders' meeting | For shareholder / creditor inspection |
| Shareholders' meeting special resolution | — | 2/3 special-resolution threshold |
| 債権者保護手続 (creditor objection) where required | ≥ 1 month objection period | Required where new debt-like consideration or specified conditions apply |
| 反対株主の株式買取請求 (appraisal demand window) | Statutory window around the effective date | Dissenting-shareholder buy-out at fair value |
| Effective date + registration | Filing within 2 weeks of effect | 株式移転 also registers the new HoldCo |

A non-contentious 株式交換 or 株式移転 typically runs **2-3 months** from board approval; listed-company deals add FSA / TSE disclosure overhead under [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] and the listing rules referenced in [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]].

## 7. Counterpoints and Caveats

- **適格 is fact-specific**: the qualified tests are technical and the NTA publishes individual-inquiry response examples (照会事例) precisely because edge cases are common. Always confirm 適格 status per transaction.
- **Cash-out 株式交換 invites scrutiny**: using cash consideration to force out a minority can trigger appraisal litigation and fairness-opinion expectations comparable to a [[finance/japan-mbo-and-squeeze-out-process|squeeze-out]].
- **Cross-border limits**: like 株式交付, 株式交換 / 株式移転 are designed for **Japanese stock companies**; cross-border share-swaps generally route through the structures in [[finance/cross-border-m-a-japan|cross-border M&A Japan]] rather than these domestic regimes.
- **HoldCo formation is a multi-tool decision**: 株式移転 is only one of three HoldCo-formation methods; the trade-offs against the 会社分割 "抜け殻" route are in [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]].

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[INDEX|FinWiki index]]

## Sources

- Companies Act (会社法) on 株式交換 (art. 767-771) and 株式移転 (art. 772-774): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁「組織再編成に係る行為又は計算の不当性」ほか 組織再編税制 解説: https://www.nta.go.jp/law/joho-zeikaishaku/hojin/070313/04.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI economic-affairs / 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA English portal (disclosure rules interacting with reorganizations): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. 株式交換 / 株式移転 are long-settled Companies Act regimes (statutory base predates the 2005 Companies Act consolidation; cash-flexible consideration since 2005). The 適格 / 非適格 tax tests are technical and fact-specific — confirm qualified status per transaction with NTA guidance and specialist advice.
