---
title: "J-REIT dividend yield vs JGB spread"
aliases:
  - "j-reit-dividend-yield-vs-jgb-spread"
  - "J-REIT yield spread"
  - "J-REIT yield vs JGB"
  - "Japan REIT JGB spread"
  - "J-REIT dividend-yield JGB-10Y"
  - "J-REIT distribution-yield comparison"
domain: real-estate-finance
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [real-estate-finance, j-reit, jgb, yield-spread, ycc, life-insurer, post-nirp]
status: active
sources:
  - "https://www.ares.or.jp/en/"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm"
  - "https://www.jpx.co.jp/english/markets/indices/r-and-i/index.html"
  - "https://www.jpx.co.jp/english/markets/derivatives/jpx-nikkei400-reit/index.html"
  - "https://www.jrei.jp/"
  - "https://www.boj.or.jp/en/research/brp/fsr/index.htm"
---

# J-REIT dividend yield vs JGB spread

## TL;DR

The J-REIT distribution yield minus a matched-date 10-year JGB yield is a useful positioning metric, but the result depends on index constituents, price date and whether distributions are trailing or forecast. This page therefore does not present an unsupported timeless “historical band” or a 2026 forecast range. Reproduce any spread from a named J-REIT yield series and the [MoF historical JGB yield series](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm) on the same observation date. This is methodology, not investment advice.

## Wiki route

This entry sits under [[real-estate-finance/INDEX]]. Read with [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the listed J-REIT structural map, [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression]] for the asset-side yield-floor reading that feeds J-REIT dividend yield, [[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign-investor ownership]] for the cross-border bid dimension, [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank CRE lending]] for the senior-debt-cost side, and [[real-estate-finance/real-estate-private-credit-japan|private credit]] for the non-listed alternative. Rate-side anchors live at [[money-market/japan-money-market]] for short-rate and YCC unwind detail, and [[banking/INDEX|banking index]] for the BoJ FSR / FSA spread commentary. The life-insurer ALM trade-off ties to [[insurance/japan-life-insurance-alm-overview]]. Long-form structural finance reading lives at [[finance/INDEX]] and the private-equity / private-finance dimension at [[finance/japan-private-equity-fund-structure-matrix]].

## Spread Definition

Table evidence (reviewed 2026-07-29): [JPX's TSE REIT Index factsheet](https://www.jpx.co.jp/english/markets/indices/factsheets/files/e_102_fac2_REIT.pdf), [ARES J-REIT data](https://www.ares.or.jp/action/jreit/), and [MoF historical JGB yields](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm).

| Term | Definition |
|---|---|
| Named J-REIT dividend-yield series | A specified index-level or vehicle-level distribution yield with documented constituents, weighting, price date and trailing or forecast convention. |
| 10Y JGB yield | Benchmark 10-year Japanese government bond yield, MoF / BoJ data. |
| Spread (bp) | The named J-REIT yield minus the matched-date 10Y JGB yield, in basis points. |
| Index methodology | Use the provider's documented calculation; do not call an independently constructed simple or weighted average “the TSE REIT Index dividend yield.” |
| Sector-mix adjustment | Recalculate each dated index or portfolio from its actual constituents; no fixed office / logistics / hospitality yield ordering is assumed. |

Exact dividend yield depends on which J-REIT vehicles are included (full TSE REIT Index vs sub-indices) and the dividend treatment (trailing 12-month vs forward-12 forecast).

## Historical Spread Range Map

Table evidence (reviewed 2026-07-29): [BoJ policy statements and statistics](https://www.boj.or.jp/en/mopo/index.htm), [MoF JGB yields](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm), and [ARES J-REIT data](https://www.ares.or.jp/action/jreit/). The table records regimes and a reproducible comparison rule, not invented range estimates.

| Era | Rate-policy context | Required spread calculation |
|---|---|---|
| Pre-NIRP (through 2015) | Positive-rate regime before the negative-rate decision | Same-date named J-REIT yield minus MoF 10Y JGB yield |
| NIRP / YCC (2016–2023) | Negative short rate and yield-curve-control regime | Same calculation, with policy dates identified |
| NIRP exit (from 2024) | Negative-rate policy ended; market-based long yields regained importance | Same calculation; do not splice trailing and forecast distribution yields |
| Current observation | No forecast band asserted | Record index, yield convention, price date, JGB date and result |

## Spread Mechanics

The spread is only the arithmetic difference between two observed or documented yield series:

```
Spread = J-REIT dividend yield - 10Y JGB yield
```

It is not an identity for an equity risk premium, an asset cap rate, leverage, liquidity or expected growth. Those variables may be investigated separately, but cannot be recovered by decomposing this spread.

Table evidence (reviewed 2026-07-29): [ARES](https://www.ares.or.jp/action/jreit/) supplies named J-REIT data and [MoF](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm) supplies the matched government-bond comparator. The rows below state evidence boundaries, not an additive decomposition.

| Separate analytical question | Evidence required |
|---|---|
| Property-market yield | Use matched property appraisal or transaction evidence; a listed distribution yield is not an asset cap rate. |
| Leverage association | Use issuer debt, asset, cash-flow and distribution data and state the causal design; a positive asset-yield-minus-debt-cost observation alone does not establish the effect on unit yield. |
| Liquidity association | Use dated bid-ask spread, turnover and market-impact data; the JGB spread itself does not measure liquidity. |
| Distribution and tax | Distribution of more than 90% of distributable income is one statutory conduit condition; it is neither a complete account of J-REIT tax treatment nor by itself a cap on reinvestment. |

## Post-NIRP Compression Pattern

NIRP / YCC era compression observations:

Table evidence (reviewed 2026-07-29): [BoJ monetary-policy history](https://www.boj.or.jp/en/mopo/index.htm) establishes the policy regime. Claims about J-REIT valuation require a matched ARES/issuer price-and-distribution observation and are phrased conditionally below.

| Effect | Mechanism |
|---|---|
| 10Y JGB anchored near zero | YCC band kept 10Y JGB within a narrow controlled range. |
| Reach-for-yield hypothesis | Test whether dated JPX investor-type flow coincided with a falling matched J-REIT yield; the policy regime alone does not establish domestic insurance, pension or retail causality. |
| Foreign-carry hypothesis | Test contemporaneous JPX foreign trading flow together with a same-date J-REIT return and executable FX-hedge inputs; no automatic compression effect is assumed. |
| Spread arithmetic check | Calculate whether the matched JGB yield fell faster than the selected J-REIT yield instead of inferring widening from the regime label. |
| Price-to-NAV check | Compare dated price and issuer-reported NAV for named vehicles; no market-wide 2020–2022 premium or “valuation overshoot” is asserted without those observations. |

A dated test of the YCC unwind from 2023 should check:

- the same-date change in the 10Y JGB yield;
- the price and distribution-yield change for a named J-REIT series;
- the resulting spread rather than an assumed direction;
- issuer-reported NAV and market price for any claimed discount-to-NAV.

## BoJ YCC Unwind Impact

To test the YCC unwind as a driver of a post-2023 spread reset, use dated inputs:

| YCC stage | Effect on J-REIT-vs-JGB spread |
|---|---|
| YCC strict (-0.1% policy rate, 10Y JGB capped) | Record the policy date and calculate the named J-REIT yield pickup over the same-date JGB. |
| YCC band widening (2022 - 2023) | Recalculate the spread at each policy observation; do not assume compression from a wider JGB range alone. |
| YCC unwind / NIRP exit (2024) | Recalculate with the market JGB yield and the same J-REIT yield convention; direction is an output. |
| Post-YCC normalisation (2025+) | No settled band is assumed; calculate the spread from a named yield series and matched JGB date, then compare with a consistently constructed pre-NIRP series. |

Read with [[money-market/japan-money-market|Japan money market]] for the YCC mechanism and policy-rate path detail, and [[banking/INDEX|BoJ FSR]] for system-level spread commentary.

## Life-Insurer J-REIT vs JGB Allocation Trade-Off

To test a possible life-insurer allocation trade-off, first establish the institution-specific liability duration, actuarial assumptions, currency, regulatory-capital treatment and investment mandate. Do not infer that a particular JGB tenor is the insurer's hedge or that J-REIT is in the same decision bucket without those disclosures.

Table evidence (reviewed 2026-07-29): [BoJ Financial System Reports](https://www.boj.or.jp/en/research/brp/fsr/index.htm) provide financial-institution context and [MoF](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm) provides the JGB curve. The allocation “tilt” is a framework, not observed insurer transaction data.

| Period | JGB observation | J-REIT observation | Allocation hypothesis / check |
|---|---|---|---|
| Pre-NIRP | Measure the dated super-long JGB curve | Measure the named J-REIT yield and volatility | Do not assume a balanced allocation; check insurer disclosures or observed flow. |
| NIRP / YCC peak | Record the dated JGB curve | Calculate the dated yield pickup and volatility | Test whether disclosed insurer allocation or JPX category flow increased; do not infer a tilt from the spread alone. |
| Post-YCC normalisation | Record the dated super-long JGB change | Recalculate the matched spread and risk measures | Test, rather than assert, reallocation to JGB or a slower J-REIT purchase pace. |
| Current observation | Measure from the current super-long JGB curve | Measure from a named J-REIT yield series | No allocation forecast asserted |

This trade-off is an analytical hypothesis. Establishing an effect on J-REIT secondary-market liquidity requires dated insurer disclosures or category flow and matched market data; the rate regime alone is not evidence of reallocation. Detailed life-insurer ALM logic sits at [[insurance/japan-life-insurance-alm-overview]].

## Other Domestic Buyer Reads

Table evidence (reviewed 2026-07-29): [JPX investor-type statistics](https://www.jpx.co.jp/english/markets/statistics-equities/investor-type/index.html) identify aggregate trading categories. The sensitivity descriptions are analytical and do not infer beneficial ownership from nominee trading.

| Buyer | Spread sensitivity |
|---|---|
| Pension funds (DB / DC) | Test the hypothesis with mandate, allocation and flow data; do not infer a return-seeking bucket from investor type alone. |
| Retail investors (NISA, brokerage) | Test yield sensitivity with account-level or category-flow evidence and matched prices; do not assume absolute yield dominates the spread. |
| Regional banks | Use securities-portfolio disclosures, capital rules and transactions to test whether J-REIT and JGB allocations were substitutes. |
| Trust banks | Separate own-account positions from fiduciary or nominee holdings using institution-specific disclosure. |
| Foreign investors | Test spread and FX-carry hypotheses with dated flow, return, currency and hedge data; see [[real-estate-finance/j-reit-foreign-investor-ownership]]. |

## Sector-Mix Sensitivity

Sector composition can confound yield comparisons, so each test must retain the dated constituent weights and yield convention:

Table evidence (reviewed 2026-07-29): [JPX's TSE REIT Index factsheet](https://www.jpx.co.jp/english/markets/indices/factsheets/files/e_102_fac2_REIT.pdf), [JPX listed issues](https://www.jpx.co.jp/english/equities/products/reits/issues/index.html), and issuer distributions. Yield ordering is not fixed and must be recalculated at the comparison date.

| J-REIT sector | Dated comparison checklist |
|---|---|
| Diversified | Calculate the vehicle yield and disclose its current sleeve weights. |
| Office-focused | Use the same price date and distribution convention; do not infer yield from office cap rates alone. |
| Logistics-focused | Measure current yield and distribution assumptions; do not assume a premium to office. |
| Residential-focused | Measure current yield, occupancy and distribution assumptions; stability is not presumed. |
| Hospitality-focused | Measure current yield and the period-specific distribution base, including variable-income exposure. |
| Retail-focused | Measure current yield and tenant / lease concentration rather than assigning a fixed yield class. |
| Healthcare / specialty | Measure the named vehicle; niche-asset status does not determine yield ordering. |

Comparing two sub-indices with different sector composition requires a documented reweighting or an explicit statement that the mixes differ; the table does not assert a causal sector effect.

## Foreign-Buyer Carry Hypothesis

A foreign-buyer carry test for J-REIT uses:

Table evidence (reviewed 2026-07-29): [BoJ statistics](https://www.boj.or.jp/en/statistics/index.htm), [MoF JGB yields](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm), and the named J-REIT distribution/price series. Hedge cost must be a same-currency, same-tenor executable or documented quote.

| Component | Reading |
|---|---|
| Local-currency yield | J-REIT dividend yield. |
| FX hedge input | A dated executable or documented quote for the investor's actual currency, tenor and instrument. |
| Simplified hedged yield | Local-currency yield minus the documented hedge input; identify omitted basis, margin, tax and implementation costs. |
| Simplified hedged spread | Simplified hedged yield minus a documented benchmark matched to the investor's currency and horizon. |

If the measured FX hedge cost exceeds the matched local-currency yield pickup, the simplified hedged-carry arithmetic can become unattractive. Whether foreign flow changes must be tested against contemporaneous JPX data; unhedged exposure is a separate FX-return scenario. Foreign-ownership and flow evidence boundaries are mapped at [[real-estate-finance/j-reit-foreign-investor-ownership]].

## Spread as Stress / Valuation Indicator

Possible uses are hypotheses that require additional evidence:

| Use | Interpretation |
|---|---|
| Historical-relative-value hypothesis | Compare a consistently constructed spread with its own dated history, then test returns; do not translate “high” or “low” directly into cheap or rich. |
| Risk-compensation analysis | Model required returns separately; the distribution-yield-minus-JGB spread is not an equity-risk-premium estimate by identity. |
| BoJ policy-stance signal | Test spread changes against dated policy and yield-curve events; co-movement is not assumed. |
| Foreign-flow hypothesis | Test contemporaneous JPX flow and returns; a spread move alone does not identify foreign entry or exit. |
| Attribution hypothesis | Use issuer fundamentals, property data, rates and investor flows in an identified model; do not label a spread move fundamental or flow-driven from the spread alone. |

None of these readings is mechanical; spread is one input among many.

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/jrei-foreign-investment-tax-treatment]]
- [[banking/INDEX]]
- [[banking/regional-bank-consolidation-pattern]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/japan-money-market]]
- [[finance/INDEX]]
- [[finance/japan-private-equity-fund-structure-matrix]]
- [[finance/japan-private-equity-operating-model]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## Sources

- ARES (Association for Real Estate Securitization): J-REIT data and TSE REIT Index dividend yield series.
- BoJ: 10Y JGB yield time series and policy-rate path data.
- MoF: JGB yield reference data.
- JPX: TSE REIT Index methodology and constituent disclosures.
- BoJ Financial System Report: spread and yield-environment commentary.
- JREI: Real Estate Investor Survey for underlying cap-rate context.
