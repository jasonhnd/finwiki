---
title: "Cap rate NOI IRR real-estate valuation framework"
aliases:
  - "cap-rate-noi-irr-real-estate-valuation-framework"
  - "real estate valuation framework"
  - "Japan NOI cap rate IRR"
  - "J-REIT vs private REIT pricing"
  - "Japan real-estate IRR"
  - "levered vs unlevered IRR real estate"
  - "real-estate hold-period sensitivity"
domain: real-estate-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [real-estate-finance, valuation, cap-rate, noi, irr, j-reit, methodology, jrei]
status: active
sources:
  - "https://www.jrei.jp/"
  - "https://www.ares.or.jp/en/"
  - "https://j-reit.jp/en/"
  - "https://www.mlit.go.jp/totikensangyo/totikensangyo_tk2_000001.html"
  - "https://www.jpx.co.jp/english/markets/products/reit/index.html"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://pages.stern.nyu.edu/~adamodar/"
---

# Cap rate NOI IRR real-estate valuation framework

## TL;DR

Real-estate valuation in Japan is structured around four interlinked metrics: cap rate (NOI yield), NOI / NCF (net operating income / net cash flow), unlevered IRR (project return), and levered IRR (equity return). These metrics overlay the three-approach appraisal framework — income, comparison, cost — codified in the [[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]]. J-REIT pricing is dominated by [[real-estate-finance/j-reit-market-overview|price-to-NAV mechanics]] under JREI cap-rate inputs, while private real-estate funds add hold-period IRR underwriting and explicit leverage. JREI's semi-annual Real Estate Investor Survey is the de facto cap-rate benchmark, with [[real-estate-finance/real-estate-cap-rate-compression-2026|current 2026 cap-rate ranges]] reflecting modest widening from NIRP-era lows. This page is a methodology reference, not investment advice — verify cap rates and IRR ranges against current JREI / ARES publications before any decision use.

## Wiki route

This page sits under [[real-estate-finance/INDEX|real-estate-finance index]] as the valuation-methodology routing surface. Use it together with [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] for the statutory MLIT appraisal framework, [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]] for the current cap-rate range map, [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the listed-vehicle pricing context, [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] for the unlisted-vehicle parallel, [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] for the yield-spread reading, [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank commercial real-estate lending Japan]] for leverage-side underwriting, and [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]] for the cross-domain valuation context. Pair with [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] for the discount-rate input layer.

## The Four Interlinked Metrics

| Metric | Formula | What it captures |
|---|---|---|
| Cap rate (NOI yield) | NOI / Property price | First-year stabilised income yield |
| NOI / NCF | See definitions below | Property-level cash flow definition |
| Unlevered IRR | IRR of property-level cash flow (acquisition + NOI + sale) | Asset-level project return |
| Levered IRR | IRR of equity cash flow (after debt service + financing fees) | Equity investor return |

## NOI vs NCF (Definition Reconciliation)

The definitions diverge across JREI surveys, [[real-estate-finance/j-reit-market-overview|J-REIT]] IR, private-fund LP reporting, and appraisal practice. Reconciling them is essential to any cross-method comparison.

| Item | NOI | NCF |
|---|---|---|
| Rental income (gross) | + | + |
| Other revenue (parking, signage, common-area) | + | + |
| Vacancy / collection loss | − | − |
| Property operating expenses | − | − |
| Property tax / city planning tax | − | − |
| Insurance | − | − |
| Property-management fee | − | − |
| Building-management fee | − | − |
| Repair / maintenance (recurring) | − | − |
| Capex / TI / leasing commission (one-off) | typically excluded | typically deducted |
| Reserves for capital repairs | typically excluded | typically deducted |
| Depreciation | excluded | excluded |
| Interest expense | excluded | excluded |
| Income tax | excluded | excluded |

The general convention: NOI is property-operating-income before capex / reserves; NCF is NOI less capex / reserves and is the cash flow that supports actual distribution / debt service. J-REIT IR typically discloses both with reconciliation.

## Cap Rate — Three Sub-Definitions

| Type | Definition |
|---|---|
| Going-in cap rate | First-year NOI / acquisition price |
| Stabilised cap rate | NOI in fully-leased / stabilised state / current price |
| Reversion / terminal cap | Cap rate applied to year-N+1 NOI for DCF terminal value |
| Expected (forward) cap rate | Survey-based forward yield expectation; JREI semi-annual survey is the benchmark |
| Transaction (market) cap rate | Implied cap rate from a closed transaction |

JREI surveys publish expected cap rate ranges by property type and city; ARES publishes J-REIT transaction-cap-rate and property-level data. The two together form the public-source cap-rate reference.

## Income-Approach DCF Mechanics

The income-approach DCF in [[real-estate-finance/japan-real-estate-appraisal-methodology|appraisal practice]] uses:

```
Value = Σ(NCF_t / (1+r)^t) + (TerminalValue_(N+1) / (1+r)^N)

TerminalValue = NCF_(N+1) / TerminalCap
```

| Input | Source |
|---|---|
| Forecast NCF | Lease roll forecast, market-rent assumption, vacancy assumption, capex schedule |
| Discount rate r | Cap rate + growth + risk premium components |
| Holding period N | Typically 10 years for institutional valuation |
| Terminal cap | Survey-based or marginal-buyer underwriting; typically 25-50bp wide of going-in cap |

The direct-capitalisation method (V = NOI / cap rate) and the DCF method are required to be reconciled in MLIT-compliant appraisal opinions.

## J-REIT vs Private Real-Estate Fund Pricing

The same underlying real estate is priced differently in listed J-REIT vehicles and in private real-estate funds.

| Field | J-REIT (listed) | Private fund |
|---|---|---|
| Pricing anchor | Listed unit price relative to NAV per unit | Acquisition cap rate plus hold-period IRR underwriting |
| Cap-rate input | JREI appraised cap rate (semi-annual cycle) | Underwriting cap rate based on transaction comps |
| Discount mechanism | Price-to-NAV traded ratio (can be discount or premium) | Hold-period IRR vs fund-target IRR |
| Leverage policy | Conservative; LTV typically ~40-50% | Higher; LTV often 50-70% depending on strategy |
| Distribution profile | Mandatory ~90% distribution for tax pass-through | Discretionary; reinvestment / leverage flexibility |
| Liquidity | Daily listed liquidity | Lock-up + redemption-window structure |
| Investor base | Retail + institutional + foreign-buyer + life-insurer | Predominantly institutional (life-insurer, pension, foreign-GP) |
| Marginal-buyer underwriting | Public-market discount rate | Private-market hurdle IRR (often 12-18% for value-add) |

This pricing divergence is the structural reason a J-REIT may trade at a different cap rate / NAV ratio than what private-market buyers underwrite for the same asset type — see [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] and [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]].

## Unlevered vs Levered IRR

| IRR | Cash flow basis | What it measures |
|---|---|---|
| Unlevered IRR | Property-level: acquisition outflow + NCF + sale proceeds | Asset-level project return; independent of leverage |
| Levered IRR | Equity-level: equity invested + after-debt-service NCF + sale proceeds net of debt | Equity-investor return; sensitive to leverage |

### Mechanics

For a single property with assumptions:
- Acquisition price P
- LTV L (debt = L × P)
- All-in cost of debt Rd
- Hold-period N
- Year-1 NCF C
- NCF growth g
- Exit cap rate K_exit

```
Unlevered IRR solves: −P + Σ(C × (1+g)^(t−1)) + (C × (1+g)^N / K_exit − sale cost) over t = 1..N

Levered IRR solves: −P×(1−L) + Σ((C × (1+g)^(t−1)) − (debt service)_t) + (sale proceeds − remaining debt)
```

### Leverage Effect on IRR

| Cap rate vs cost of debt | Effect |
|---|---|
| Cap rate > cost of debt (positive carry) | Leverage amplifies equity IRR upward |
| Cap rate ≈ cost of debt | Leverage adds little to equity IRR but adds risk |
| Cap rate < cost of debt (negative carry) | Leverage reduces equity IRR and concentrates downside |

In the [[real-estate-finance/real-estate-cap-rate-compression-2026|2026 environment]] with cap rates of 3-5% and post-NIRP-normalisation funding costs, the positive-carry spread for prime assets is narrower than during the NIRP era. This compresses levered-IRR uplift and makes hold-period assumptions more critical.

## Hold-Period Sensitivity

Hold-period assumption interacts with cap-rate compression / widening expectation:

| Assumption | Direction |
|---|---|
| Long hold (10y+) with cap-rate stability | Income return dominates total return |
| Short hold (3-5y) with cap-rate compression | Exit-cap gain dominates total return |
| Long hold with cap-rate widening | Income return offsets exit-cap loss |
| Short hold with cap-rate widening | Exit-cap loss dominates; potentially negative levered IRR |

In a normalising-rate environment, prudent underwriting assumes exit-cap modestly wider than going-in cap (e.g. +25-50bp). This dampens forecast IRR and is a discipline-test for fund underwriting quality.

## JREI Appraisal Methodology Overlap

[[real-estate-finance/japan-real-estate-appraisal-methodology|JREI appraisal methodology]] uses many of the same inputs as private-fund underwriting, but with critical differences:

| Field | JREI appraisal | Private-fund underwriting |
|---|---|---|
| Cap-rate input | Market-survey based; JREI Real Estate Investor Survey ranges | Transaction-based; deal-comp anchored |
| Growth assumption | Typically conservative; modest real-rent growth | Strategy-specific; value-add assumes business-plan rent uplift |
| Capex assumption | Reserve-based; long-term-average rate | Strategy-specific; renovation / repositioning capex |
| Hold period (DCF) | Typically 10 years | Strategy-specific (3-7y core+; 5-10y value-add) |
| Reconciliation | Mandatory across income / comparison / cost approaches | Single income-approach DCF often dominates |
| Independence | Statutory licensed-appraiser independence | Manager-self-underwritten |

J-REIT NAV is built from JREI-anchored appraised values; the appraisal lag (2-4 quarter refresh cycle) is the structural reason traded J-REIT price-to-NAV moves faster than appraisal-NAV.

## Cap Rate vs Discount Rate (Critical Distinction)

| Concept | Definition |
|---|---|
| Cap rate | NOI / price; first-year yield; static measure |
| Discount rate | Required total return; risk-free + risk premium − growth |

The relationship: Cap rate ≈ Discount rate − Expected NOI growth.

A 3.5% cap rate with 1.0% expected NOI growth implies a ~4.5% discount rate. Equating cap rate to discount rate (a common shorthand) only holds in a zero-growth steady state. See [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] for the discount-rate construction.

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/j-reit-vs-us-reit-governance-comparison]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict]]
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/cost-of-capital-japan-2026-reference]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[money-market/japan-money-market]]
- [[INDEX|FinWiki index]]

## Sources

- JREI (Japan Real Estate Institute): Real Estate Investor Survey (semi-annual cap-rate publication).
- ARES (Association for Real Estate Securitization): J-REIT data and survey publications.
- J-REIT.jp: market portal and educational materials.
- MLIT: 不動産鑑定評価基準 (Real Estate Appraisal Standards) framework.
- JPX: REIT segment data and disclosure framework.
- BoJ: macro and rate data for risk-free reference.
- Damodaran: real-estate-valuation methodology reference for unlevered / levered IRR mechanics.
