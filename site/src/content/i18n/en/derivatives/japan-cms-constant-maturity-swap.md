---
source: derivatives/japan-cms-constant-maturity-swap
source_hash: ec18bb62b25d2a43
lang: en
status: machine
fidelity: ok
title: "Japan CMS (constant maturity swap) market"
translated_at: 2026-07-29T21:20:00.000Z
---

# Japan CMS (constant maturity swap) market

## TL;DR

A constant maturity swap (CMS) is an OTC interest-rate derivative in which one leg pays a fixed reference (or a floating short-rate reference) and the other leg pays a periodically reset long-tenor swap rate — most commonly the 10Y or 5Y JPY swap rate at each reset date. The CMS leg's defining feature is that the swap rate referenced at each reset has a constant maturity (e.g., 10Y at every reset), whereas in a vanilla IRS the floating reference has a constant short tenor (e.g., 3M TIBOR or compounded TONA).

CMS is the structural building block for a range of yield-curve-shape-linked structured products distributed in Japan: CMS-linked notes (paying coupons indexed to the 10Y JPY swap rate), CMS-spread notes (paying coupons indexed to a 10Y-minus-2Y spread or similar curve-steepness measure), and CMS-capped / CMS-floored floaters. Pricing CMS requires a convexity adjustment because the CMS-rate payoff is non-linear in the underlying forward swap rate; the convexity correction depends on the implied volatility of the underlying swap rate, drawing directly on the [[derivatives/japan-swaption-market|JPY swaption vol grid]].

For FinWiki, this entry covers CMS mechanics, the convexity adjustment, JPY use cases (CMS-linked notes and CMS-spread products), pricing inputs, and the limits of public market-share evidence.

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
| CMS-spread note (coupon = a + b × (CMS-10Y − CMS-2Y)) | Coupons tied to a contractually defined curve spread | For a positive multiplier, the coupon generally benefits when the referenced spread stays above the relevant threshold; caps, floors, and signs can change the exposure |
| CMS-capped floater | Floating coupon with a cap referencing a CMS rate | Defines the maximum coupon under the contractual formula |
| CMS-floored floater | Floating coupon with a floor referencing a CMS rate | Defines downside in low-rate environment |
| Range-accrual CMS | Coupon accrues only when CMS rate sits in a defined range | Yield enhancement on a directional view of curve range |
| Snowball CMS | Coupons depend on past CMS-rate observations under a contract-specific formula | Path-dependent exposure whose payoff must be checked in the note or confirmation |

Source: ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

These are payoff archetypes, not evidence of a particular investor class, sales channel, or level of activity. Those facts are transaction- and distribution-specific and should be verified in the relevant prospectus, confirmation, or issuer disclosure.

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

## Public-data boundary

The official sources cited here describe interest-rate-derivative mechanics and JSCC's eligible IRS products; they do not publish a current dealer ranking, CMS market share, or Japan-specific CMS turnover series. A named-dealer or liquidity-franchise comparison therefore requires a dated public transaction, prospectus, venue dataset, or dealer disclosure and is not inferred here.

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

- ISDA: Disclosure Annex for Interest Rate Transactions — product mechanics and valuation-risk disclosures: https://www.isda.org/a/ORiDE/isda-rates.pdf
- ISDA: RFR Conventions and IBOR Fallbacks Product Table — benchmark and convention context: https://www.isda.org/a/bdigE/RFR-Conventions-and-IBOR-Fallbacks-Product-Table-October-2021.pdf
- JSCC: Eligible IRS products — clearing-scope check: https://www.jpx.co.jp/jscc/en/cash/irs/product.html
