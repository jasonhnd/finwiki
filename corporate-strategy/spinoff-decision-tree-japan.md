---
title: "Spinoff decision tree Japan — 株式分配 vs パーシャルスピンオフ vs 会社分割 vs IPO partial sell-down option selection"
aliases:
  - "spinoff-decision-tree-japan"
  - "japan-spinoff-option-decision-tree"
  - "spinoff vs partial spinoff japan"
  - "kabushiki bunpai vs partial spinoff vs ipo"
domain: "corporate-strategy"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [corporate-strategy, decision-tree, spinoff, partial-spinoff, kaisha-bunkatsu, tax, japan]
status: active
sources:
  - "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html"
  - "https://www.meti.go.jp/policy/jigyou_saisei/kyousouryoku_kyouka/spinoff.html"
  - "https://laws.e-gov.go.jp/document?lawid=417AC0000000086"
  - "https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm"
  - "https://www.mof.go.jp/public_relations/finance/202402/202402e.html"
---

# Spinoff decision tree Japan — 株式分配 vs パーシャルスピンオフ vs 会社分割 vs IPO partial sell-down option selection

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for transaction context. Read with [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] for the partial-spinoff regime detail, [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] for the underlying split mechanics, [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] for the acquisition-side parallel, and [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]] / [[business/softbank-vision-fund-arm-ipo-template|Arm IPO template]] for live case applications.

## TL;DR

A Japanese parent company seeking to separate or partially divest a subsidiary faces a layered option set with very different tax, control, and shareholder-experience profiles. The five live paths in current Japanese practice:

1. **株式分配 — full spinoff (kabushiki bunpai, 100% distribution, 0% retained)** — tax-deferred under qualified-spinoff regime; parent walks away entirely
2. **パーシャルスピンオフ — partial spinoff (株式分配 with up to ~20% parent retention)** — tax-deferred under [[corporate-strategy/partial-spinoff-tax-deferral|2023 regime]]; parent retains brand/cooperation
3. **IPO partial sell-down** — taxable gain on sold portion; parent retains majority; flexible future sell-down
4. **TOB take-private then re-IPO** — multi-step path that delays separation while reshaping the entity (see [[business/toshiba-tob-squeeze-out-2023-2024-case|Toshiba TOB case]])
5. **株式譲渡 outright cash sale** — full divestiture; taxable gain; clean exit

This entry is the decision-tree mapping which structure fits which strategic intent. It does **not** replicate the regime mechanics — see individual regime entries for those.

## 1. The Decision Tree

```
START: What is the parent's strategic intent?

├── Want to fully exit + walk away with cash
│      → 株式譲渡 (Outright sale)
│         - Tax: Capital gain at parent level (taxable)
│         - Control: Zero post-deal
│         - Use: Pure divestiture / portfolio prune
│
├── Want to fully separate but keep capital structure clean
│      → 株式分配 (Full spinoff, 100% distribution)
│         - Tax: Deferred under qualified-spinoff regime
│         - Control: Zero post-distribution
│         - Use: True portfolio separation
│
├── Want to separate but preserve brand / cross-sell / cooperation
│      → パーシャルスピンオフ (株式分配 + retain <20%)
│         - Tax: Deferred under 2023 regime if conditions met
│         - Control: Minority economic stake; no consolidation
│         - Use: Strategic separation with continued ties (e.g., Sony FG)
│
├── Want to retain majority but crystallize valuation + raise cash
│      → IPO partial sell-down
│         - Tax: Capital gain on sold portion (taxable)
│         - Control: Majority retained (typically 60-90%)
│         - Use: Valuation crystallization + cash raise (e.g., Arm, Rakuten Bank)
│
├── Want to delay separation while reshaping under private ownership
│      → TOB take-private → restructure → re-IPO
│         - Tax: TOB cash to old shareholders is taxable to them
│         - Control: 100% parent (private), then ~70% post-re-IPO
│         - Use: Significant restructuring needed before re-listing (e.g., Toshiba)
│
└── Want to acquire control of separate entity using own shares
       → 株式交付 (see [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]])
          - This is acquisition not divestiture; sits on the other side
```

## 2. Decision Matrix

| Path | Tax to parent | Tax to shareholder | Parent stake post | Cash to parent | Time to execute |
|---|---|---|---|---|---|
| **株式譲渡 (sale)** | Capital gain (taxable) | None | 0% | Yes (proceeds) | 3-6 months |
| **株式分配 (full spinoff)** | Deferred (qualified) | None (qualified) | 0% | None | 9-18 months |
| **パーシャルスピンオフ** | Deferred (2023 regime) | None (regime-qualified) | <20% | None directly | 12-24 months |
| **IPO partial sell-down** | Capital gain on sold | None for retained | 50-95% | Yes (IPO proceeds) | 12-24 months |
| **TOB → re-IPO** | Two-step tax treatment | TOB cash taxable; re-IPO sellers gain | 60-80% (after re-IPO) | Yes (cash via re-IPO) | 2-5 years |
| **株式交付 (acquisition)** | N/A (acquirer) | Deferred (share portion) | N/A (acquiring) | None | 6-12 months |

## 3. When To Use Each Path — Strategic Decision Criteria

### Use **株式譲渡 (cash sale)** when:

- Portfolio prune; subsidiary outside core strategy
- Buyer pays attractive premium; tax cost manageable
- Parent has tax shields (loss carryforward) to offset gain
- No need to maintain commercial relationship
- Examples (illustrative): non-core subsidiary divestitures, distressed-asset sales

### Use **株式分配 (full spinoff)** when:

- Parent and subsidiary genuinely have no further synergy
- Conglomerate-discount drag is severe
- Parent has no need to retain influence
- Subsidiary is ready for full independence (audit history, governance, scale)
- Examples: pure conglomerate-discount breakup plays

### Use **パーシャルスピンオフ** when:

- Want valuation clarity but preserve brand cooperation
- Conglomerate discount real but full exit too disruptive
- Cross-sell / brand-license / supply-chain ties matter
- Want to receive in-kind distribution of subsidiary shares to existing shareholders (no tax leakage at shareholder level)
- Examples: [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]], Kokuyo × Askul

### Use **IPO partial sell-down** when:

- Want cash inflow (the regime offers cash; partial-spinoff does not)
- Want to retain majority control while crystallizing public-market valuation
- Want collateral-margin loan optionality against newly-quoted stake
- Tax cost on sold portion acceptable
- Examples: [[business/softbank-vision-fund-arm-ipo-template|Arm 2023 IPO]], [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Bank 2023 IPO]]

### Use **TOB take-private → re-IPO** when:

- Significant restructuring needed before public-market scrutiny
- Want flexibility outside listed-company governance for 2-5 years
- Activist / minority-shareholder friction blocking restructuring
- Examples: [[business/toshiba-tob-squeeze-out-2023-2024-case|Toshiba 2023 going-private]]

### Use **株式交付** when:

- Acquiring (not divesting)
- Want to use own shares as consideration
- Want >50% but not necessarily 100%
- See [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime entry]]

## 4. Tax-Layer Detail Summary

### Qualified spinoff regime (株式分配 with 0% retention)

- Parent: no gain recognized on distribution
- Shareholder: no deemed dividend
- Subsidiary: continues at historical basis
- Loss carryforwards: subject to anti-trafficking rules

### Partial spinoff regime (株式分配 with up to ~20% retention)

- Parent: no gain on distributed portion
- Shareholder: no deemed dividend (regime-qualified)
- Subsidiary: continues at historical basis
- Retained stake by parent: at carrying basis (no mark)
- Requires METI industrial-competitiveness plan certification

### IPO partial sell-down

- Parent: capital gain on sold shares (taxable at corporate rate)
- New shareholders: market-based cost basis
- Existing parent shareholders: unaffected directly
- Standard IPO disclosure / due diligence required

### TOB + take-private

- Old public shareholders: capital gain on TOB cash received (taxable to them)
- New ownership group: invested capital at TOB price
- Parent post-private: 100%
- Re-IPO step adds another tax layer for selling parent

## 5. Comparison Of Live Recent Cases

| Case | Path chosen | Why this path |
|---|---|---|
| [[business/sony-fg-partial-spinoff-case|Sony FG (2025 planned)]] | パーシャルスピンオフ | Wanted brand cooperation; tax-deferral material |
| [[business/softbank-vision-fund-arm-ipo-template|Arm (2023)]] | IPO partial sell-down (~10%) | Wanted mark + collateral, not exit |
| [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Bank (2023)]] | IPO partial sell-down (~37% sold) | Needed cash for parent recap |
| [[business/toshiba-tob-squeeze-out-2023-2024-case|Toshiba (2023-2024)]] | TOB take-private | Restructure free of public scrutiny |
| Kokuyo × Askul (2020) | First-wave partial-related transaction | Pre-2023-regime structure |

## 6. The Conglomerate-Discount Math

Why the decision matters: a parent trading at conglomerate discount can free hidden value through these structures. Approximate framework:

```
Standalone valuation = Σ (subsidiary fair value × multiple)
Conglomerate value   = parent market cap (includes discount)
Discount             = Standalone − Conglomerate
```

If discount is material:

- **Full spinoff** captures it fully but loses all coordination value
- **Partial spinoff** captures most, retains coordination
- **IPO sell-down** captures it gradually as float increases
- **Cash sale** captures it instantly but tax-cost adjusted

The choice depends on how much of the standalone value depends on parent-subsidiary coordination — high coordination value → partial spinoff or IPO; low coordination value → full spinoff or sale.

## 7. Counterpoints

- The decision tree assumes a single subsidiary divestiture; real conglomerates often face multi-subsidiary coordination problems
- Tax rules change (the 2023 partial-spinoff regime expanded the menu meaningfully); future reform could open or close paths
- Specific qualified-spinoff and partial-spinoff conditions are technical; advisor analysis required
- Activist-investor pressure can force a path that wouldn't be the parent's first choice
- Cross-border subsidiary divestitures add another layer (see [[finance/cross-border-m-a-japan|cross-border M&A Japan]])
- The TOB → re-IPO path takes years; market window may close before re-IPO

## 8. Open Questions

- Will future tax reform expand the partial-spinoff regime's 20% retention cap to give more flexibility?
- Will the 株式交付 regime be extended to enable share-for-share acquisitions across borders, complementing the divestiture menu here?
- How will OECD Pillar Two minimum-tax interact with cross-border parent-subsidiary divestiture structures?
- Will any of the live cases (Sony FG, Toshiba post-private) trigger new template variants?
- How does FSA disclosure / governance reform interact with the spinoff decision tree?

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]]
- [[business/softbank-vision-fund-arm-ipo-template|SoftBank Vision Fund Arm IPO template]]
- [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]
- [[business/toshiba-tob-squeeze-out-2023-2024-case|Toshiba TOB squeeze-out 2023-2024 case]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-m-a-deal-process-comparison-matrix|Japan M&A deal-process comparison matrix]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[INDEX|FinWiki index]]

## Sources

- METI partial-spinoff regime: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html
- METI spinoff guide: https://www.meti.go.jp/policy/jigyou_saisei/kyousouryoku_kyouka/spinoff.html
- Companies Act: https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- NTA basic 通達 on reorganizations: https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 財務省 tax-reform explainer: https://www.mof.go.jp/public_relations/finance/202402/202402e.html

---

> [!info] 校核状态
> confidence: **likely**. The decision tree synthesizes settled Japan corporate-restructuring regimes; specific tax conditions vary per transaction. Live case mappings reflect publicly disclosed transactions.
