---
title: "Japan real-estate appraisal methodology"
aliases:
  - "japan-real-estate-appraisal-methodology"
  - "Japan real estate appraisal"
  - "Japan property valuation methodology"
  - "JREI cap-rate survey"
  - "Japan 不動産鑑定評価基準"
  - "J-REIT appraisal cycle"
  - "Japan DCF direct cap method"
  - "Japan fudosan kantei"
domain: real-estate-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [real-estate-finance, appraisal, valuation, jrei, j-reit, fair-value, japan]
status: active
sources:
  - "https://www.ares.or.jp/en/"
  - "https://www.reinet.or.jp/"
  - "https://www.mlit.go.jp/totikensangyo/totikensangyo_tk2_000001.html"
  - "https://www.jpx.co.jp/english/markets/products/reit/index.html"
  - "https://www.fsa.go.jp/en/"
---

# Japan real-estate appraisal methodology

## TL;DR

Japan real-estate appraisal practice follows the 不動産鑑定評価基準 (Real Estate Appraisal Standards) issued by MLIT, which requires three approaches to value — income approach (DCF + direct capitalization), comparison approach (transaction comparables), and cost approach (replacement cost net of depreciation) — with the appraiser reconciling them into a final opinion of value. For income-producing commercial property (the J-REIT and institutional-investor asset universe), the income approach dominates and the cap-rate input is the most price-relevant variable. The Japan Real Estate Institute (JREI / 日本不動産研究所) publishes a semi-annual cap-rate survey that is the de facto benchmark for cap-rate inputs across property types and locations. Independence rules require the appraiser to be separate from the property's economic principal, with [[real-estate-finance/j-reit-market-overview|J-REITs]] required to refresh appraisals at semi-annual intervals on a rolling basis under JPX disclosure rules. The fair-value accounting framework for J-REIT requires investment property to be carried at fair value, which is operationalized through the appraisal cycle. The appraisal independence + appraisal frequency combination is the structural mechanism by which J-REIT NAV and book value are kept current.

## Wiki route

This entry sits under [[real-estate-finance/INDEX|real-estate-finance index]] and is the valuation-methodology routing page for Japanese real-estate finance. Read it together with [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the dominant fair-value consumer, with [[real-estate-finance/top-10-j-reit-overview-matrix|top-10 J-REIT overview matrix]] for the largest portfolios subject to the appraisal cycle, with [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] for the parallel unlisted-vehicle appraisal practice, with [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]] for the appraisal inputs that drive CMBS senior LTV and tranching, with [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] for the private-SPV appraisal use case, and with [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] for the takeout-pricing appraisal mechanic. Pair with [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] for the institutional-buyer side that consumes appraised yields, with [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]] for the trustee infrastructure that holds property under appraisal, and with [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] for the operating split. Cross-domain anchors: [[policy-finance/japan-housing-finance-agency|JHF]] uses appraisal-anchored loan-to-value criteria; [[policy-finance/INDEX|policy-finance index]] is the parallel public-credit reference; and [[finance/INDEX|finance index]] holds the broader corporate-valuation context.

## 1. Statutory framework

### Real Estate Appraisal Standards

The 不動産鑑定評価基準 (Real Estate Appraisal Standards) issued by MLIT define the methodology Japanese real-estate appraisers must apply. The standards require:

| Element | Reading |
|---|---|
| Three approaches | Income approach, comparison approach, cost approach — all to be considered |
| Reconciliation | Final opinion of value reconciles approaches with weight reflecting property type and data availability |
| Income approach detail | DCF method + direct capitalization method, both to be applied for income-producing property |
| Cap rate sourcing | From market evidence; market surveys (notably JREI) as benchmark |
| Comparison approach | Transaction comparables adjusted for location, age, size, condition |
| Cost approach | Replacement cost net of depreciation |
| Appraiser qualifications | Licensed 不動産鑑定士 under the 不動産の鑑定評価に関する法律 |

### Appraiser licensing

The 不動産鑑定士 license is granted under the 不動産の鑑定評価に関する法律. Licensed appraisers operate either independently or through licensed appraisal firms. The major appraisal firms include 日本不動産研究所 (JREI), 大和不動産鑑定, 谷澤総合鑑定所, and several others. ^[inferred]

### Independence rules

Appraisers performing valuation for fair-value reporting must be independent of the property's economic principal:

| Independence dimension | Reading |
|---|---|
| No equity / debt position in the property | Appraiser cannot hold a financial interest |
| No employment / officer relationship with owner | Appraiser cannot be employed by the J-REIT, asset manager, or sponsor |
| Rotation of appraiser | J-REITs and similar regulated vehicles rotate appraisers on a defined cycle to avoid familiarity threat ^[inferred] |
| Fee structure | Fee cannot be contingent on appraisal value |
| Disclosure | The appraiser identity is disclosed in J-REIT periodic reporting |

## 2. Income approach — DCF method

### Method outline

The DCF (discounted cash flow) method projects property cashflows over an analysis horizon (typically 10 years) and discounts them back to a present value:

```
Value = Σ [NOI_t / (1 + r)^t] + [Terminal value / (1 + r)^n]
```

| Input | Reading |
|---|---|
| NOI projection | Net operating income for each year, reflecting rent roll, expected lease rollover, vacancy assumption, operating expenses, property tax, insurance, repair, maintenance |
| Discount rate | r — reflects risk-free rate + property-specific risk premium |
| Terminal value | At end of analysis horizon, computed as terminal-year NOI / terminal cap rate |
| Terminal cap rate | Reflects exit-market cap rate; typically slightly higher than entry cap rate to reflect aging of asset |
| Holding-cost adjustments | Capex over analysis horizon (typically retained as a separate line) |

### Key sensitivities

| Sensitivity | Reading |
|---|---|
| Discount rate | 25 bps change in discount rate moves value by several percent for typical Japan commercial property ^[inferred] |
| Terminal cap rate | Often the largest single driver of present value because terminal value can be 60-70% of total DCF value ^[inferred] |
| Rent assumption | Forward-rent profile drives NOI projection; lease-rollover assumption critical |
| Vacancy assumption | Vacancy rate over analysis horizon affects NOI cumulatively |
| Capex assumption | Capex over horizon reduces cumulative NOI |

### DCF in J-REIT practice

J-REIT appraisals include explicit DCF analysis with 10-year horizon (typical). The DCF result is reconciled with the direct-cap result; if the two diverge materially, the appraiser explains the reconciliation in the appraisal report.

## 3. Income approach — direct capitalization method

### Method outline

The direct cap method values the property by dividing stabilized NOI by a cap rate:

```
Value = Stabilized NOI / Cap rate
```

| Input | Reading |
|---|---|
| Stabilized NOI | Annual NOI expected under normal operating conditions (not transitional / lease-up state) |
| Cap rate | Market cap rate for the property type and location |

### Cap rate sourcing — JREI cap-rate survey

The JREI (日本不動産研究所) cap-rate survey is the de facto benchmark for cap-rate inputs in Japan. Public-source structure:

| Feature | Reading |
|---|---|
| Publisher | [[JapanFG/japan-real-estate-institute|Japan Real Estate Institute (JREI)]] |
| Frequency | Semi-annual (April + October) |
| Coverage | Office, residential, retail, hotel, logistics — across major cities |
| Methodology | Survey of institutional investors and asset managers for expected cap rate by property type and location |
| Public surface | Headline summary; full data is paid product |

The JREI survey produces benchmark cap rates that J-REIT appraisers and CMBS appraisers reference when calibrating direct-cap inputs. Recent public-source data shows Tokyo grade-A office cap rates have compressed to around 3.0-3.5% (semi-annual survey), Tokyo logistics cap rates around 3.5-4.5%, and other property types and locations at varying premiums. ^[ambiguous] Cap rates have moved through cycles in line with the Japan interest-rate environment.

### Cap rate vs Japan rate environment

The Japan cap-rate cycle has been structurally compressed by the long-running low / negative yen interest-rate environment. Public-source observations:

| Period | Cap-rate cycle reading |
|---|---|
| 2008-2010 | Cap rates widened post-GFC; market stress |
| 2011-2013 | Stabilization |
| 2014-2021 | Compression under BoJ NIRP + YCC + asset-purchase environment |
| 2022-2023 | Yen-rate path uncertainty; cap rates broadly stable to slightly tighter |
| 2024-present | Post-yield-curve-control transition; cap rates beginning to reflect rising-rate scenarios ^[inferred] |

## 4. Comparison approach

The comparison approach values the property by reference to comparable transactions:

| Step | Reading |
|---|---|
| Identify comparables | Recent transactions of similar property type, location, age, size |
| Adjust for differences | Location quality, building age, gross floor area, recent capex, lease structure |
| Reconcile per-tsubo / per-㎡ price | Adjusted unit price applied to subject property |
| Cross-check against income approach | Comparison-approach result usually cross-checks income-approach result |

In Japan commercial real estate, comparable transaction data is meaningful but sparse compared to US markets — institutional-grade properties transact infrequently and prices are often non-public. ARES (Association for Real Estate Securitization) tracks transactions but full-detail data is not on the public surface. The comparison approach is therefore typically a cross-check rather than the primary value driver in commercial appraisal. ^[inferred]

## 5. Cost approach

The cost approach values the property as land value + depreciated replacement cost of improvements:

| Step | Reading |
|---|---|
| Land value | Based on official land valuations (基準地価, 路線価, 公示地価) and adjusted comparables |
| Replacement cost | Cost to build equivalent structure today |
| Depreciation | Physical, functional, and economic obsolescence |
| Building value | Replacement cost net of depreciation |
| Total | Land value + depreciated building value |

The cost approach is most useful for owner-occupied or special-purpose property where income-approach inputs are not readily available. For institutional commercial property, it is typically a tertiary cross-check.

### Public land-price benchmarks

| Benchmark | Issuer | Use |
|---|---|---|
| 公示地価 | MLIT | Annual standard land-price benchmark; published in March |
| 基準地価 | Prefectural government | Annual prefectural land-price benchmark; published in September |
| 路線価 | National Tax Agency | Annual road-front land valuation for inheritance / gift tax; typically 80% of 公示地価 |
| 固定資産税評価額 | Local government | Triennial property-tax valuation; typically 70% of 公示地価 |

These public land-price benchmarks are inputs into the cost approach for land value and are independent of the appraiser's market judgment.

## 6. Reconciliation and final opinion of value

The appraiser reconciles results from the three approaches:

| Approach | Typical weight for income-producing commercial property |
|---|---|
| Income approach (DCF + direct cap) | Dominant |
| Comparison approach | Cross-check |
| Cost approach | Tertiary cross-check |

The final opinion of value is documented in an appraisal report (鑑定評価書) signed by the licensed 不動産鑑定士. The report is disclosed in J-REIT periodic reporting and used as the fair-value source for accounting purposes.

## 7. J-REIT appraisal cycle and fair-value accounting

### J-REIT appraisal frequency

J-REIT investment property is required to be carried at fair value. Operationalization:

| Aspect | Reading |
|---|---|
| Appraisal frequency | Semi-annual (every accounting period) for each property in the portfolio ^[inferred] |
| Method | Each property gets a full appraisal at acquisition; subsequent appraisals at semi-annual cadence |
| Disclosure | Property-level appraised value disclosed in periodic-reporting documents (運用報告書) |
| Aggregation | Portfolio-level appraised NAV calculated and disclosed |
| Auditor | Independent auditor reviews the appraisal process and fair-value reporting |

### NAV vs market price

The semi-annual appraised NAV is one of two value reference points for a J-REIT:

| Value | Reading |
|---|---|
| Appraised NAV | Per-unit NAV based on appraised value of portfolio properties |
| Market price | Per-unit market price on JPX |
| P/NAV ratio | Market price / appraised NAV — typically used as a relative-value indicator |

J-REIT P/NAV oscillates around 1.0 over cycles. Sustained P/NAV < 1.0 implies the market thinks appraisal-implied cap rates are too tight; sustained P/NAV > 1.0 implies the market thinks they are too wide. Foreign-investor flow (see [[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign investor ownership]]) often drives short-term P/NAV swings; domestic life-insurer flow (see [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]]) anchors longer-term levels.

### Sponsor / asset-manager governance over appraisal

The J-REIT framework requires governance separation:

| Function | Entity |
|---|---|
| Investment fiduciary | J-REIT (投資法人) — board of directors representing unitholders |
| Asset manager | Independent asset-management firm (often sponsor-affiliated) |
| Appraiser | Independent licensed 不動産鑑定士 / firm |
| Auditor | Independent auditor |
| Trust-bank custodian | Holds property in 信託 — [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], or [[JapanFG/mizuho-trust-bank|Mizuho Trust]] typically |

The appraiser is engaged by the asset manager but is required to be independent of the asset manager, the sponsor, and the property's economic principal. Disclosure of the appraiser's name and approach is mandatory.

## 8. Appraisal in non-J-REIT contexts

| Context | Appraisal use |
|---|---|
| [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|Private REIT]] | Semi-annual appraisal for unit-NAV setting, similar to J-REIT |
| [[real-estate-finance/japan-cmbs-rmbs-securitization|CMBS]] | At-origination appraisal sets senior-tranche LTV; periodic re-appraisal may occur per CMBS deal terms |
| [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] | Acquisition appraisal at SPV setup; periodic appraisal varies by deal |
| [[real-estate-finance/real-estate-bridge-fund-japan|Bridge fund]] | Acquisition appraisal at bridge SPV setup; takeout appraisal at sale to J-REIT typically anchors takeout pricing |
| Pension / SWF direct holdings | Periodic appraisal for fair-value reporting per investor's accounting framework |
| Corporate balance sheet | Property held at cost less depreciation under JGAAP for many corporates; IFRS adopters use fair value or revaluation model |

## Counterpoints

- "Cap rate equals yield" — wrong. Cap rate is a market-derived discounting metric; yield is the income return on a specific investment basis. They are related but distinct.
- "DCF and direct cap should give identical results" — wrong. They generally produce similar results when assumptions are consistent, but the DCF terminal value vs direct-cap stabilized-NOI treatment can diverge.
- "JREI cap-rate survey is the cap rate" — wrong. JREI is a benchmark survey; actual transactional cap rates can differ. The appraiser must calibrate JREI benchmark against deal-specific evidence.
- "Cost approach should give a similar value to income approach" — wrong for income-producing commercial property. They typically diverge meaningfully; reconciliation explains the gap.
- "Appraised NAV = market price" — wrong. P/NAV oscillates around 1.0 and can deviate materially over cycles.
- "Same property gets appraised consistently across appraisers" — partially true. Different appraisers can produce different values within methodology bounds; appraisal-rotation rules attempt to manage variance.
- "Public land-price benchmarks set market price" — wrong. They are independent benchmarks for tax and land-use purposes; market price reflects current market clearing.

## Open questions

- How quickly does the J-REIT appraisal cycle reflect a market cap-rate cycle turn? There is a lag because semi-annual appraisals may be slow to incorporate sharp market moves.
- How does appraiser concentration (small number of major firms) affect appraisal independence in practice?
- What is the typical magnitude of mid-cycle appraisal NAV revisions when cap rates move materially?
- How do private REIT and GK-TK appraisals compare to J-REIT appraisals in methodology rigor?
- How will rising yen interest rates feed through to JREI cap-rate survey results and to actual J-REIT appraised values?
- What is the role of overseas appraisers in JP real-estate appraisal? Major global appraisers (CBRE, JLL, Cushman) operate in Japan but the 不動産鑑定士 license is JP-specific.
- How does the JREI cap-rate survey compare to alternative survey data (e.g. ARES, exchange-platform data) for benchmark accuracy?

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[policy-finance/INDEX]]
- [[policy-finance/japan-housing-finance-agency]]
- [[finance/INDEX]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/japan-real-estate-institute]]

## Sources

- ARES (Association for Real Estate Securitization): Japan real-estate securitization market summary statistics.
- JREI (Japan Real Estate Institute): cap-rate survey and appraisal-methodology surface.
- MLIT: 不動産鑑定評価基準 (Real Estate Appraisal Standards); 公示地価 land-price benchmark.
- JPX: J-REIT periodic-reporting and disclosure framework.
- FSA: investment-product regulation and J-REIT disclosure framework.
