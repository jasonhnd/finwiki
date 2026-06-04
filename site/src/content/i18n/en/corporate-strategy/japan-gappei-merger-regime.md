---
source: corporate-strategy/japan-gappei-merger-regime
source_hash: 7e883cd762e70707
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "合併 (Japan corporate merger) — 吸収合併 / 新設合併 mechanics, 適格合併 tax treatment, and the triangular-merger variant"
translated_at: 2026-06-05T00:00:00.000Z
---

# 合併 (Japan corporate merger) — 吸収合併 / 新設合併 mechanics, 適格合併 tax treatment, and the triangular-merger variant

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the deal-finance overlay. Merger is the **combination-side** counterpart to the **separation-side** [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 (company split)]]; both run on the same 適格 / 非適格 tax axis. Read it with [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]] for the share-side route to 100% control without dissolving the target, and [[finance/jftc-merger-control-process|the JFTC merger-control process]] for the antitrust clearance every sizeable merger must pass.

## TL;DR

**合併 (gappei, merger)** is the Japanese Companies Act mechanism that **fuses two or more companies into one legal entity**. Unlike a [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] (which splits a business out) or a [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]] (which leaves both companies alive in a parent-subsidiary stack), a merger **dissolves** at least one company: its assets, liabilities, contracts, and employees pass to the survivor **by universal succession (包括承継)**, and the disappearing company ceases to exist without a separate liquidation.

Two structural axes define the regime — the same dual structure as every Japanese 組織再編成:

1. **Form axis** — **吸収合併 (absorption merger)**, where an **existing** company survives and absorbs the other(s), vs **新設合併 (consolidation merger)**, where a **brand-new** company is incorporated and *all* combining companies disappear into it.
2. **Tax axis** — **適格合併 (qualified, tax-deferred carryover-basis)** vs **非適格合併 (non-qualified, taxable mark-to-market)**.

The statutory layer:

- **Companies Act art. 748–756** govern the merger procedure; **art. 749** sets the contents of an 吸収合併契約 (absorption-merger agreement) and **art. 753** the 新設合併契約; **art. 754(1)** fixes the effective date of a 新設合併 at the survivor's incorporation registration.
- **Corporation Tax Act art. 2(12-8), 62, 62-2** govern the 適格 / 非適格 distinction and carryover of attributes.
- Both forms require an **acquirer/combining-company shareholders' special resolution** (2/3 threshold) plus **creditor-protection (債権者保護手続)** and **dissenting-shareholder appraisal (反対株主の株式買取請求)** procedures.

## 1. 吸収合併 vs 新設合併 — the Two Forms

| | 吸収合併 (absorption) | 新設合併 (consolidation) |
|---|---|---|
| Surviving entity | An **existing** company (存続会社) | A **newly incorporated** company (新設会社) |
| Disappearing entity | The absorbed company(ies) (消滅会社) | **All** combining companies disappear |
| Consideration to target shareholders | Survivor's shares, cash, or other property | New company's shares |
| Licenses / listings | Survivor keeps its own; absorbed company's may lapse | All originals lapse; the new company must re-acquire/re-list |
| Effective date | Date set in the merger agreement | Date of the new company's incorporation registration (art. 754(1)) |
| Companies Act articles | 749, 750, 783–802 | 753, 754, 804–816 |

The intuition: **吸収合併 keeps one company standing and folds the other into it; 新設合併 demolishes everyone and builds a single new company on the rubble.** In practice **吸収合併 dominates** because 新設合併 forces the new entity to re-obtain every business license, permit, and stock-exchange listing that the predecessors held — an administrative penalty rarely worth paying. 新設合併 is mostly reserved for "merger-of-equals" optics where neither side wants to be seen as "absorbed."

## 2. Universal Succession (包括承継) — Why Merger Is "Clean"

A merger transfers everything **by operation of law, as a single package**. There is no asset-by-asset conveyancing and, critically, **no need for individual counterparty or employee consent**:

- **Contracts** pass automatically to the survivor (subject to any change-of-control clauses in the contracts themselves).
- **Employment contracts** transfer automatically — and unlike a [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]], a merger does **not** even invoke the 労働契約承継法 consultation machinery, because the *entire* company moves, not a carved-out slice.
- **Debts and liabilities** transfer in full — which is exactly why the **creditor-protection procedure** is mandatory (creditors lose their original debtor).

This universal succession is the feature that distinguishes a merger from a 事業譲渡 (business transfer), where each contract must be individually assigned and each employee individually consented — the contrast table in [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]] applies a fortiori to mergers.

## 3. Tax Axis — 適格合併 vs 非適格合併

The 適格合併 question is identical in spirit to the [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] tests: does the merger get **tax-deferred carryover-basis** treatment, or **mark-to-market**?

### 適格合併 test scenarios

1. **100%-group (完全支配関係)** — merger inside a wholly-owned group: the lightest test set; continuation of the complete-control relationship is essentially enough.
2. **>50%-group (支配関係)** — merger inside a majority-controlled group: adds **employee-retention (≈80%)** and **business-continuation** tests.
3. **Joint-business (共同事業要件)** — merger between unrelated parties: adds the full battery — **事業関連性** (business relatedness), **事業規模 OR 経営参画** (comparable scale OR specified-officer participation), **従業者引継ぎ** (employee retention), **事業継続** (business continuation), and a **継続保有** (continued-holding) requirement on the consideration shares.

In every scenario the same fault line applies: **share consideration preserves 適格; cash consideration generally breaks it** — the rule that recurs across the share-side regimes in [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]].

### Consequences

| | 適格合併 (qualified) | 非適格合併 (non-qualified) |
|---|---|---|
| Disappearing company's assets | Pass at **book value**; no gain recognized | Marked to **fair value**; embedded gains crystallize |
| Target shareholders | No immediate capital-gains tax on the share-for-share swap | Capital gain / **deemed dividend (みなし配当)** can arise |
| Loss carryforwards (繰越欠損金) | May carry over to survivor, **subject to anti-trafficking limits** (Corporation Tax Act art. 57 et seq.) | Generally do **not** carry over |
| Net effect | Tax-neutral combination | Double-layer tax exposure |

The **loss-carryforward carryover** is the most consequential tax feature unique to mergers: a profitable survivor absorbing a loss-making target may inherit usable 繰越欠損金 — but the **anti-loss-trafficking rules** (specified ownership-change and business-continuity tests) exist precisely to stop "buying losses," and they bite hard in distressed deals. This is the quiet tax lever behind many rescue mergers.

## 4. The Triangular Merger (三角合併) Variant

Since the 2007 effective date of the Companies Act consideration-flexibility (対価の柔軟化) provisions, an 吸収合併 can pay **the survivor's *parent* company's shares** as consideration instead of the survivor's own shares. This **三角合併 (triangular merger)** lets a parent acquire a target *through* a Japanese subsidiary while delivering the parent's (often foreign-listed) stock to target shareholders:

- The Japanese **subsidiary** is the legal survivor that absorbs the target.
- Target shareholders receive **parent-company** shares.
- It became the primary mechanism contemplated for **inbound cross-border stock mergers** into Japan — though stringent 適格 conditions for using foreign-parent stock limit tax-free use in practice. Cross-border sequencing sits in [[finance/cross-border-m-a-japan|cross-border M&A Japan]].

## 5. Where Merger Sits Among the Reorganization Tools

Japanese 組織再編成 offers a menu; choosing among them is about **what you want to happen to the legal entities**:

| Tool | Effect on entities | Canonical use |
|---|---|---|
| **合併 (merger)** | One entity survives; the rest **dissolve** | Full combination / consolidation; rescue of a failing company |
| **会社分割 (split)** | A **business** moves to another entity; both survive | Carve-out, pre-spinoff, HoldCo creation — see [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 regime]] |
| **株式交換 (share exchange)** | Both survive in a **100% parent-subsidiary** stack | Take a target wholly-owned with stock — see [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] |
| **株式交付 (share delivery)** | Both survive; **partial** (>50%, <100%) control | Friendly partial acquisition with stock — see [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] |

The decisive difference: **only 合併 destroys an entity.** Where the parties want both companies to keep operating as separate legal persons, they reach for a share-side regime instead. The full option set is mapped in [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] for the separation side; merger is its mirror on the combination side.

## 6. Procedural Timeline

合併 follows the standard Companies Act reorganization timeline, which sets the realistic floor on speed:

| Step | Statutory minimum | Notes |
|---|---|---|
| Board approval of 合併契約 / 合併計画 | — | Same-day possible |
| Pre-meeting disclosure of merger documents at head office | ≥ 2 weeks before shareholders' meeting | For shareholder / creditor inspection |
| Shareholders' meeting special resolution | — | 2/3 special-resolution threshold |
| 債権者保護手続 (creditor objection) | ≥ 1 month objection period | **Always required** (creditors lose their original debtor) |
| 反対株主の株式買取請求 (appraisal demand window) | Statutory window around the effective date | Dissenting shareholders bought out at "fair value," judicially read to include synergy (会社法 785/797/806) |
| Effective date | Per agreement (吸収) / incorporation registration (新設, art. 754(1)) | — |
| Registration (変更登記 / 設立登記) | Filing within 2 weeks | 新設合併 also registers the new company |

A non-contentious merger typically runs **2–3 months** from board approval, but two external gates frequently dominate the calendar: **JFTC merger clearance** under [[finance/jftc-merger-control-process|the merger-control process]] for transactions over the notification thresholds, and listed-company FSA / TSE disclosure overhead interacting with [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] and the listing rules in [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]].

## 7. Strategic Reading

- **Merger is the only "entity-destroying" reorganization.** That makes it the right tool when the goal is genuine fusion (shared systems, single workforce, one balance sheet) rather than a holding stack. When the parties want to preserve separate entities — for risk ring-fencing, brand, or regulatory licenses — they use [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] or a [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] instead.
- **Loss-carryforward inheritance is the hidden prize and the hidden trap.** A qualified merger can carry 繰越欠損金 to the survivor, but the anti-trafficking tests are designed to deny it where the deal looks like loss-shopping.
- **吸収 beats 新設 almost always.** Re-acquiring licenses and re-listing after a 新設合併 is a self-inflicted cost; consolidation mergers survive mainly for merger-of-equals symbolism.
- **Antitrust is a real gate, not a formality.** Large mergers must clear the [[finance/jftc-merger-control-process|JFTC merger-control process]]; remedies or prohibition are live outcomes for concentrated markets.

## 8. Counterpoints and Caveats

- **適格 is fact-specific.** The qualified tests are technical and the NTA publishes individual-inquiry examples because edge cases are common; confirm 適格 status per transaction.
- **Triangular-merger tax relief is narrow.** Using foreign-parent stock in a 三角合併 rarely achieves clean 適格 treatment; most inbound stock combinations route through the structures in [[finance/cross-border-m-a-japan|cross-border M&A Japan]].
- **Creditor protection cannot be skipped.** Because liabilities transfer by universal succession, the ≥1-month objection procedure is mandatory and is a common reason closings slip.
- **Appraisal litigation risk.** "Fair value" buy-out claims by dissenting shareholders — read to include a share of merger synergy — can become contentious, paralleling the squeeze-out fairness disputes in [[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]].

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/jftc-merger-control-process|JFTC merger-control process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Companies Act (会社法) on 合併 (art. 748–756, incl. 749 / 753 / 754): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成 — 適格合併ほか): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 policy portal (組織再編成 / 対価柔軟化): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 公正取引委員会 (JFTC) — merger review (English): https://www.jftc.go.jp/en/
- FSA English portal (disclosure rules interacting with mergers): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. 吸収合併 / 新設合併 mechanics (Companies Act art. 748–756, effective-date rule art. 754(1)), universal succession, the mandatory creditor-protection and appraisal procedures, the 適格 / 非適格 axis, loss-carryforward carryover with anti-trafficking limits, and the post-2007 三角合併 variant are settled public facts. The 適格 tests and triangular-merger tax conditions are technical and fact-specific — confirm qualified status and antitrust clearance per transaction.
