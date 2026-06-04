---
title: "Japan CMS (constant maturity swap) market"
aliases:
  - "japan-cms-constant-maturity-swap"
  - "CMS JPY"
  - "constant maturity swap Japan"
  - "JPY CMS"
  - "CMS spread option"
  - "CMS-linked note"
  - "CMS cap floor"
  - "コンスタント・マチュリティ・スワップ"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, CMS, constant-maturity-swap, JPY, structured-products, CMS-spread, convexity, vol-grid]
status: active
sources:
  - "https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm"
  - "https://www.bis.org/statistics/derstats.htm"
  - "https://www.jscc.co.jp/en/"
  - "https://www.fsa.go.jp/en/"
  - "https://www.isda.org/"
---

# Japan CMS (constant maturity swap) market

## TL;DR

A constant maturity swap (CMS) is an OTC interest-rate derivative in which one leg pays a fixed reference (or a floating short-rate reference) and the other leg pays a periodically reset long-tenor swap rate — most commonly the 10Y or 5Y JPY swap rate at each reset date. The CMS leg's defining feature is that the swap rate referenced at each reset has a constant maturity (e.g., 10Y at every reset), whereas in a vanilla IRS the floating reference has a constant short tenor (e.g., 3M TIBOR or compounded TONA).

CMS is the structural building block for a range of yield-curve-shape-linked structured products distributed in Japan: CMS-linked notes (paying coupons indexed to the 10Y JPY swap rate), CMS-spread notes (paying coupons indexed to a 10Y-minus-2Y spread or similar curve-steepness measure), and CMS-capped / CMS-floored floaters. Pricing CMS requires a convexity adjustment because the CMS-rate payoff is non-linear in the underlying forward swap rate; the convexity correction depends on the implied volatility of the underlying swap rate, drawing directly on the [[derivatives/japan-swaption-market|JPY swaption vol grid]].

For FinWiki, this entry covers CMS mechanics, the convexity adjustment, JPY use cases (CMS-linked notes, CMS-spread products), pricing inputs, and the dealer franchise.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates-derivatives cluster. Read it against [[derivatives/japan-irs-market]] for the vanilla IRS basis the CMS rate is derived from, [[derivatives/japan-swaption-market]] for the vol-grid input that drives convexity pricing, and [[derivatives/ois-tona-curve]] for the discount curve. The structured-note distribution channel is covered in [[derivatives/structured-bond-japan-retail-issuance]] and [[derivatives/structured-product-eb-knockin-japan-retail]].

## Instrument Mechanics

A standard JPY CMS has the following structure:

| Element | Detail |
|---|---|
| Notional | Defined; not exchanged |
| Tenor | Total swap tenor (e.g., 5Y total maturity) |
| Reset frequency | Periodic (typically quarterly or semi-annually) |
| Fixed / spread leg | Pays a fixed rate (the "CMS swap rate" priced by the dealer) or a floating short-rate + spread |
| CMS leg | Pays the prevailing N-year JPY swap rate at each reset date (e.g., 10Y JPY swap rate, observed on each reset) |
| Day-count | ACT/365 typical for JPY |
| Settlement | Net payment on each coupon date |
| Documentation | ISDA Master + CSA |

Example: a 5Y CMS-10Y swap pays the 10Y JPY swap rate (fixed at each quarterly reset) on one leg, against a fixed rate or against 3M TIBOR / compounded TONA + spread on the other leg.

Economic content: the CMS leg payer is taking a view on the level (and shape) of the long-end swap curve over time; the CMS leg receiver is hedging or speculating in the opposite direction.

## Why a Convexity Adjustment Is Needed

The CMS rate at any future reset date is the par swap rate of an N-year swap starting on that date. The PV of the CMS leg payoff is non-linear in the underlying forward swap rate because the swap rate that is "paid" on the CMS leg coupon is computed by reference to a swap whose own PV (the PV of the underlying N-year swap if you entered it at that rate) is non-trivially related to its own rate.

The standard pricing approach decomposes the CMS payoff:

1. Compute the forward swap rate $S(t, T, N)$ at reset date $T$ for an N-year underlying swap, using the current discount curve.
2. Apply a convexity adjustment to the forward swap rate: $\hat{S} = S + \text{convex. adj.}$, where the adjustment depends on the implied volatility of the underlying swap rate (from the [[derivatives/japan-swaption-market|swaption vol grid]]) and on the tenor structure of the underlying swap.
3. Use $\hat{S}$ as the CMS-coupon expectation for pricing.

Closed-form approximations (Hagan, Brigo-Mercurio, etc.) are widely used; multi-factor short-rate models (Hull-White, LMM) give more accurate convexity adjustment in complex curve regimes.

The practical upshot: CMS pricing is meaningfully sensitive to the swaption vol surface, particularly at the swap-rate tenor referenced (e.g., 10Y vol for a CMS-10Y product). This is why the CMS market and the swaption market are tightly coupled in dealer books.

## JPY Use Cases

CMS products in JPY serve several end-user purposes:

| Product | Structure | End-user appeal |
|---|---|---|
| CMS-linked note (coupon = a + b × CMS-10Y) | Periodic coupons tied to the 10Y JPY swap rate | Yield enhancement vs vanilla floater; view that long-end rates will rise |
| CMS-spread note (coupon = a + b × (CMS-10Y − CMS-2Y)) | Coupons tied to curve steepness | Yield pickup if the curve steepens; insurance against curve flattening |
| CMS-capped floater | Floating coupon with a cap referencing a CMS rate | Defines upside on a floating note; popular when rate hike concerns exist |
| CMS-floored floater | Floating coupon with a floor referencing a CMS rate | Defines downside in low-rate environment |
| Range-accrual CMS | Coupon accrues only when CMS rate sits in a defined range | Yield enhancement on a directional view of curve range |
| Snowball CMS | Coupons cumulatively increase based on past CMS rate observations | Highly path-dependent; episodic distribution |

End-users of CMS-linked notes in Japan span:

- **Regional banks**: Yield-enhancement on JPY bond portfolios when vanilla coupon income is insufficient.
- **Trust banks / pension funds**: Curve-shape-linked allocations as part of broader fixed-income mandates.
- **High-net-worth retail (via private banking)**: Distribution of CMS-spread notes paying enhanced coupons.
- **Life insurers**: Selective use as part of ALM-portfolio building blocks.
- **Corporate treasury**: Limited direct use; more reliance on vanilla IRS.

Volumes are episodic and concentrated in periods when the JPY swap curve presents an attractive shape vs flat-yield alternatives.

## Pricing Inputs

A complete CMS pricing engine for JPY requires:

| Input | Source |
|---|---|
| JPY OIS-TONA discount curve | [[derivatives/ois-tona-curve|TONA-OIS curve]] |
| JPY swap forward rate curve | Bootstrap from [[derivatives/japan-irs-market|JPY IRS market]] |
| JPY swaption implied-volatility surface | [[derivatives/japan-swaption-market|JPY swaption vol grid]] (expiry × tenor matrix) |
| Correlation assumptions (for CMS-spread products) | Inter-tenor correlation; can be back-solved from historical or option-implied data |
| Credit-funding spread (for the dealer's own balance sheet) | xVA framework (FVA, CVA, DVA) |

CMS-spread products are particularly sensitive to the correlation between two swap rates (e.g., 10Y vs 2Y) because the spread payoff has lower volatility than either tenor alone; mispricing correlation can materially mis-value the product.

## Dealer Franchise

JPY CMS market making sits within the broader rates structuring desks at:

| Dealer category | Activity |
|---|---|
| Japanese megabank securities affiliates (MUFG Securities, SMBC Nikko, Mizuho Securities) | Structuring CMS-linked and CMS-spread notes for distribution via banking-channel and securities-channel clients; warehousing CMS risk against swaption book |
| Independent Japanese securities (Nomura, Daiwa) | Structured-product origination with retail and institutional distribution |
| Global investment banks (JPMorgan, Goldman, Citi, Deutsche, BNP, Barclays, HSBC) | CMS market making for institutional flow; cross-border distribution; cross-currency CMS-spread products |
| Inter-dealer brokers | Limited; CMS is more dealer-to-end-client than IDB-traded |

Dealer P&L from CMS products is part of the broader rates / structured-products line in IR; not separately disclosed.

## Liquidity and Market Depth

| Tenor / structure | Liquidity |
|---|---|
| Vanilla CMS (e.g., 5Y CMS-10Y) | Moderate; dealers quote on request; bid-ask wider than vanilla IRS |
| CMS-linked notes (issuer side) | Episodic; depends on retail / institutional appetite |
| CMS-spread notes | Episodic; correlation-sensitive pricing means dealers manage exposure tightly |
| Bermudan callable CMS | Limited; bespoke; principally dealer-to-issuer |

The JPY CMS market is materially smaller than the EUR CMS market (where curve-steepness products have a much larger and more developed structured-distribution base) and smaller than USD CMS. Episodic distribution patterns mean that CMS volumes spike when the curve shape presents an attractive payoff profile.

## Clearing

JPY CMS is predominantly bilateral. JSCC has not extended clearing scope to CMS as broadly as it has to vanilla IRS; non-cleared CMS trades are subject to UMR Phase IM requirements for in-scope counterparties and standard CSA collateralization.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate derivatives).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Japan Securities Clearing Corporation: Clearing scope and product registry.
- Financial Services Agency: FIEA framework on OTC derivatives and structured-product distribution.
- ISDA: Standard documentation; product definitions for swap and CMS variants.
- Academic literature: Brigo-Mercurio "Interest Rate Models — Theory and Practice"; Hagan papers on CMS convexity.
- Industry publications: Risk Magazine, GlobalCapital structured-products coverage.
