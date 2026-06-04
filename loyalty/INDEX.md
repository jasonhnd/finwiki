---
title: "loyalty domain"
aliases:
  - "loyalty INDEX"
  - "Japan points domain"
  - "日本ポイント domain"
domain: "loyalty"
created: 2026-05-20
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-11-15
confidence: likely
tags: [loyalty, index, points, payments, retail-finance]
status: active
sources:
  - "https://point.rakuten.co.jp/guidance/en/faq/pointinfo/"
  - "https://www.ccc.co.jp/en/news/press/20240109_002347.html"
  - "https://www.waon.net/point/"
  - "https://www.nanaco-net.jp/introduction/"
---

# loyalty domain

## TL;DR

This domain routes point programs, loyalty liabilities, campaign economics, and retail / payment data loops. The current anchor is [[loyalty/japan-points-landscape|Japan points and loyalty landscape]].

Use this domain when a product's real moat is **repeat purchase, app opening frequency, reward currency, or customer ID graph**.

## Route Map

| Lane | Start here | Related domain |
|---|---|---|
| National point ecosystems | [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] | [[payments/INDEX|payments INDEX]] |
| Common-point operator deep-dives | [[loyalty/rakuten-point-ecosystem-deep|楽天ポイント ecosystem]], [[loyalty/d-point-detailed-ecosystem|dポイント ecosystem]], [[loyalty/ponta-points-deep-dive|Ponta deep dive]], [[loyalty/au-pay-loyalty-ecosystem-deep|au PAY ecosystem]], [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|PayPay points ecosystem]], [[loyalty/t-point-v-point-post-2024-merger|T-Point → V-Point merger]] | [[JapanFG/INDEX|JapanFG INDEX]] |
| Cross-system comparison | [[loyalty/point-economy-funding-source-comparison|Funding-source comparison (V / Rakuten / d / PayPay / Ponta)]] | [[JapanFG/INDEX|JapanFG INDEX]] |
| FFP / airline mileage | [[loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison|JMB vs AMC]] | [[card-issuers/jal-card|JAL Card]] |
| Transit-anchored loyalty | [[loyalty/jre-point-and-jre-bank-ecosystem|JRE Point + JRE Bank]] | [[card-issuers/jr-east-financial|JR-East Financial]] |
| Retail points | [[retail/aeon-group|AEON Group]], [[retail/seven-and-i-hd|Seven & i]] | [[retail/INDEX|retail INDEX]] |
| Finance distribution | [[payment-firms/rakuten-fg|Rakuten FG]], [[megabanks/paypay-fg|PayPay FG]], [[megabanks/ndfg|NDFG]] | [[JapanFG/INDEX|JapanFG INDEX]] |
| Legal boundary | Points vs prepaid vs funds-transfer value | [[financial-licenses/INDEX|legal / financial licenses]] |
| Program economics | [[loyalty/point-program-unit-economics|Point program unit economics]], [[loyalty/point-liability-accounting-boundary|Point liability accounting boundary]], [[loyalty/loyalty-liability-customer-funded-float|Loyalty liability as customer-funded float]] | [[fintech/INDEX|fintech INDEX]] |
| Data / ID-graph loop | [[loyalty/retail-media-points-data-loop|Retail-media points data loop]] | [[retail/INDEX|retail INDEX]] |
| Cross-program exchange | [[loyalty/point-exchange-network-risk|Point exchange network risk]] | [[payments/INDEX|payments INDEX]] |

## Active Entries

| Status | Page | Role |
|---|---|---|
| likely | [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] | Top-level point ecosystem and financial-distribution bridge |
| likely | [[loyalty/point-liability-accounting-boundary|Point liability accounting boundary]] | Marketing cost / liability / breakage / purchased-value / cross-program exchange accounting split |
| likely | [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) bank-led common-point case]] | T Point → V Point 2024-04-22 unification, Olive ecosystem, vs telco / EC / payment-app common-point models |
| likely | [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation\|d Point / au (KDDI) / docomo telco-point consolidation case]] | Wave 5: telco-anchored common-point consolidation case vs the V Point bank-led model — Pontaポイント・dポイント・au PAY point overlap |
| likely | [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point ecosystem deep (楽天ポイント / 楽天経済圏)]] | EC-anchored full-ecosystem loop: SPU stacked-multiplier flywheel, closed-loop reinvestment, finance cross-sell into Rakuten FG, funding-mix / breakage / float economics |
| likely | [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem (NTT docomo)]] | dポイントクラブ accrual mechanics, d Card / d払い convergence, 2025 rank reform, NDFG front-end currency role |
| likely | [[loyalty/ponta-points-deep-dive|Ponta points deep dive]] | Loyalty Marketing Inc. coalition across Mitsubishi Corp / KDDI au / Recruit, Lawson + Mitsubishi anchor, au PAY ポイント integration |
| likely | [[loyalty/au-pay-loyalty-ecosystem-deep|au PAY loyalty ecosystem deep]] | KDDI's six-layer au PAY + Ponta + au Smart Pass + UQ Mobile + au Card + au Jibun Bank stack and au FH listing prep |
| likely | [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points ecosystem]] | PayPayポイント 2022 unification → 2023 LY integration → 2025 LINE Yahoo consolidation, campaign-grant vs contract-liability accounting |
| likely | [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger]] | 2024-04-22 dual-brand transition, CCCMK Holdings (SMFG-CCC JV), points-liability transfer mechanics |
| likely | [[loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison|JAL Mileage Bank vs ANA Mileage Club]] | FFP / mileage archetype: accrual, redemption, partner network, status tier, standalone-selling-price deferred-revenue accounting |
| likely | [[loyalty/jre-point-and-jre-bank-ecosystem|JRE Point + JRE Bank ecosystem]] | Transit-anchored loyalty: Mobile Suica + ViewCard + JRE BANK (楽天銀行 BaaS), "ride → eat → shop → spend → save" LTV ladder |
| likely | [[loyalty/point-program-unit-economics|Point program unit economics]] | Funding source (merchant / operator / issuer / self) × breakage margin × interest-free float × ID-graph monetisation — why "reward rate" is the wrong headline |
| likely | [[loyalty/loyalty-liability-customer-funded-float|Loyalty liability as customer-funded float]] | Outstanding point balance read as an interest-free, customer-funded float instrument: float vs breakage, prepaid-crossover, redemption-surge / estimate / reclassification risk, quality-of-earnings signal |
| likely | [[loyalty/point-economy-funding-source-comparison|Japan point economy funding-source comparison]] | Cross-system compare of V / Rakuten / d / PayPay / Ponta by anchor (bank / EC / telco / wallet / coalition) → funding mix, cross-sell gradient, data shape; why reward rates are noise |
| likely | [[loyalty/retail-media-points-data-loop|Retail-media points data loop]] | Points as customer ID-graph infrastructure: acquire-ID → observe data → monetise as retail media + finance cross-sell → recycle; APPI / PPC as the binding constraint |
| likely | [[loyalty/point-exchange-network-risk|Point exchange network risk]] | Cross-program conversion as an inter-operator network: consumer ratio vs bilateral settlement rate, non-additive liability, FX-like / arbitrage / cash-equivalence-drift risk surfaces |

## Expansion Backlog

| Priority | Candidate | Why |
|---|---|---|
| Done | [[loyalty/point-liability-accounting-boundary|Point liability accounting boundary]] | Created to separate marketing cost, contract-liability under IFRS 15 / ASBJ Statement No.29, breakage, prepaid-value (FSA registry), and cross-program exchange accounting |
| Done | [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] | Created to document the 2024-04-22 T Point → V Point unification as the bank-led common-point archetype |
| Done | [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation\|d Point / au (KDDI) / docomo telco-point consolidation case]] | Wave 5 (2026-05): telco-anchored common-point consolidation case beside the V Point bank-led archetype |
| Done | [[loyalty/retail-media-points-data-loop|Retail-media points data loop]] | Created (2026-06): points as retail media / ID-graph infrastructure, with APPI / PPC consent boundary |
| Done | [[loyalty/point-exchange-network-risk|Point exchange network risk]] | Created (2026-06): cross-program exchange settlement, breakage, fraud, and cash-equivalence economics |
| Done | [[loyalty/point-program-unit-economics|Point program unit economics]] | Created (2026-06): funding / breakage / float / monetisation equation behind loyalty-liability profitability |
| Done | [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point ecosystem deep]] | Created (2026-06): standalone EC-anchored operator deep dive (SPU flywheel + 楽天経済圏 cross-sell), completing the big-five operator set |
| Done | [[loyalty/point-economy-funding-source-comparison|Funding-source comparison]] | Created (2026-06): side-by-side anchor / funding comparison of the five major common points |
| Done | [[loyalty/loyalty-liability-customer-funded-float|Loyalty liability as customer-funded float]] | Created (2026-06): balance-sheet / financing view of the point liability as interest-free customer-funded float |

## Related

- [[INDEX|FinWiki index]]
- [[payments/INDEX|payments INDEX]]
- [[retail/INDEX|retail INDEX]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
