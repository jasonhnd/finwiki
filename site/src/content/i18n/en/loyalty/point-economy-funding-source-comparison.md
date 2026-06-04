---
source: loyalty/point-economy-funding-source-comparison
source_hash: ef8aca12f6c35ce2
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Japan point economy funding-source comparison (V / Rakuten / d / PayPay / Ponta anchors)"
translated_at: 2026-06-05T00:00:00.000Z
---
# Japan point economy funding-source comparison (V / Rakuten / d / PayPay / Ponta anchors)

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **cross-system comparison** page: it reads the five major common-point systems *side by side* by the dimension that actually decides their economics — **what anchors the program and who funds the point** — rather than per-operator depth. It is the comparative complement to the single-operator deep dives [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point ecosystem deep]], [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]], [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]], [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]], and [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]. The economic spine is [[loyalty/point-program-unit-economics|point program unit economics]]; the program inventory is [[loyalty/japan-points-landscape|Japan points and loyalty landscape]].

## TL;DR

Japan's "big five" common points — **V Point, Rakuten Point, d Point, PayPay Point, Ponta** — look interchangeable to a consumer (≈1% back, broad acceptance) but are structurally different economic machines. The variable that separates them is the **anchor**: the high-frequency asset the program is built on. V Point anchors on a **bank / card** (SMBC, Olive); Rakuten on an **EC habit** (楽天市場 + SPU); d Point on a **mobile line** (docomo); PayPay Point on a **code-payment wallet**; Ponta on a **multi-sponsor coalition** (Lawson / KDDI / Recruit). The anchor determines the **funding mix** (merchant- vs operator- vs issuer-funded), the **cross-sell destination** (which financial products the point feeds), and the **data shape** (what the ID graph can see). Comparing reward rates is meaningless; comparing anchors and funding sources is the whole analysis.

## The five anchors at a glance

| System | Anchor asset | Primary sponsor / operator | Finance destination | Comparison page |
|---|---|---|---|---|
| **V Point** | Bank + credit card | SMBC / CCCMK (SMFG-CCC JV) | [[megabanks/smfg|SMFG]] / Olive | [[loyalty/v-point-smbc-ccc-case|V Point case]] |
| **Rakuten Point** | EC habit (楽天市場) | Rakuten Group | [[payment-firms/rakuten-fg|Rakuten FG]] | [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point deep]] |
| **d Point** | Mobile line (docomo) | NTT docomo | [[megabanks/ndfg|NDFG]] | [[loyalty/d-point-detailed-ecosystem|d Point ecosystem]] |
| **PayPay Point** | Code-payment wallet | PayPay / SoftBank / LY | [[megabanks/paypay-fg|PayPay FG]] | [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|PayPay unified points]] |
| **Ponta** | Coalition (Lawson / KDDI / Recruit) | Loyalty Marketing Inc. | au PAY / KDDI route | [[loyalty/ponta-points-deep-dive|Ponta deep dive]] |

The bank-led vs telco-led contrast (V Point vs d-point/au) is developed further in [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|the telco-point consolidation case]].

## Funding source by anchor

The anchor predicts the funding mix, because each anchor monetises the point differently. Mapping onto the funding-model framework in [[loyalty/point-program-unit-economics|unit economics]]:

| System | Merchant-funded core | Operator-funded overlay | Issuer-funded (card) | Self-funded (group retail) |
|---|---|---|---|---|
| V Point | Common-point acceptance | Promotions | SMBC Card / Olive reward | — |
| Rakuten Point | Marketplace seller fees | **SPU multiplier + campaigns** | 楽天カード reward | — |
| d Point | Partner acceptance | d払い campaigns | d Card reward | — |
| PayPay Point | Merchant acceptance | **Heavy campaign 還元** | PayPay Card reward | — |
| Ponta | Coalition partner fees | au PAY / Recruit campaigns | — | Lawson store margin |

Two patterns stand out. **Wallet-anchored** systems (PayPay, and Rakuten's SPU layer) lean hardest on operator-funded campaigns — they are buying frequency and an ID graph, and look "loss-making" until finance cross-sell and data monetisation are counted (the reconciliation in [[loyalty/retail-media-points-data-loop|the data-loop page]]). **Coalition-anchored** Ponta spreads funding across multiple unrelated sponsors, which lowers any single sponsor's cost but dilutes who owns the resulting graph.

## Why the anchor decides the economics

The anchor is not branding — it sets three things at once:

1. **Funding leverage.** A bank/card anchor (V Point) can fund rewards out of interchange and lending margin; a wallet anchor (PayPay) must spend marketing budget up front and recover later. Same headline rate, opposite cash-flow shape.
2. **Cross-sell gradient.** The point is a funnel into whatever the anchor sells next: V Point → deposits / Olive; Rakuten → securities / bank / mobile; d-point → docomo finance / [[megabanks/ndfg|NDFG]]; PayPay → [[megabanks/paypay-fg|PayPay FG]]; Ponta → au PAY. The steeper that gradient, the more an "unprofitable" point makes sense.
3. **Data shape.** A mobile-line anchor sees identity + location + billing; an EC anchor sees SKU-level basket; a wallet anchor sees payment frequency; a coalition sees breadth but shares it. This is the ID-graph dimension in [[loyalty/retail-media-points-data-loop|the data-loop page]].

So the same 1% reward is, across these five, a bank cross-sell tool, an EC retention engine, a telco bundle lever, a payment-frequency subsidy, and a coalition acceptance scheme — with five different balance-sheet and data footprints.

## Shared liabilities, different accounting pressure

All five generate a **point liability** that runs through the same accounting machinery — contract liability / breakage under ASBJ Statement No.29 (IFRS 15), catalogued in [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]. But the *pressure* on that liability differs:

- **Campaign-heavy** systems (PayPay; Rakuten's SPU/limited-use layer) generate large operator-funded grants → P&L looks worse near-term, breakage estimation matters more, and limited-use points (期間・用途限定) are used to steer redemption and lift breakage.
- **Card-anchored** systems (V Point) intertwine reward liability with interchange economics, so the point cost sits next to the issuer's own reward math.
- **Coalition** systems (Ponta) must settle value *between* sponsors, which adds the inter-operator transfer mechanics in [[loyalty/point-exchange-network-risk|point exchange network risk]].

The disclosure norms that keep breakage honest across all of them come from the Cashless Promotion Council / Payments Japan side, referenced in [[loyalty/point-program-unit-economics|unit economics]].

## Why this matters for JapanFG / financial analysis

- **Compare anchors, not reward rates.** A like-for-like "1% back" comparison is noise; the real differences are funding leverage, cross-sell gradient, and data shape — all set by the anchor.
- **The anchor names the financial group that benefits.** V Point → [[megabanks/smfg|SMFG]]; Rakuten → [[payment-firms/rakuten-fg|Rakuten FG]]; d-point → [[megabanks/ndfg|NDFG]]; PayPay → [[megabanks/paypay-fg|PayPay FG]]. Reading a point program tells you which group is lowering its customer-acquisition cost.
- **"Loss-making" is anchor-dependent.** Wallet- and EC-anchored campaigns look worst on P&L but may be buying the best graph and the steepest finance funnel; coalition points look cheaper per sponsor but disperse the asset.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-program-unit-economics|point program unit economics]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/retail-media-points-data-loop|retail-media points data loop]]
- [[loyalty/point-exchange-network-risk|point exchange network risk]]
- [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point ecosystem deep]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au (KDDI) / docomo telco-point consolidation case]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[payments/INDEX|payments INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/smfg|SMFG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Point Club official guidance — Rakuten Point program structure (anchor / SPU reference).
- d POINT CLUB official site — telco-line anchored common point.
- CCC / CCCMK Holdings press materials — V Point / common-point operator structure.
- Payments Japan Association — code-payment campaign and disclosure norms.
- ASBJ Statement No.29, "Accounting Standard for Revenue Recognition" — shared point-liability / breakage treatment.
