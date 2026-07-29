---
source: real-estate-finance/japan-real-estate-appraisal-methodology
source_hash: ace7083dad3c63ac
lang: en
status: machine
fidelity: ok
title: "Japan real-estate appraisal methodology"
translated_at: 2026-07-29T00:00:00.000Z
---

# Japan real-estate appraisal methodology

## TL;DR

Japan real-estate appraisal practice follows MLIT's 不動産鑑定評価基準 and reconciles income, comparison, and cost evidence according to the property and available data. For J-REIT analysis, keep accounting book value separate from appraisal-based fair-value NAV: JPX's 2026 guidebook expressly distinguishes book-value net assets in financial statements from appraisal values used to estimate fair-value NAV. J-REIT appraisal cadence and disclosure must be verified from the issuer's current periodic documents rather than treated as a universal carrying-value rule. ^[Sources: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html, https://www.asb-j.jp/en/accounting_standards/y2008/2008-1128.html, and https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf.]

## Wiki route

This entry sits under [[real-estate-finance/INDEX|real-estate-finance index]] and routes readers to appraisal-related contexts without ranking their size or prevalence. Use [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] and [[real-estate-finance/top-10-j-reit-overview-matrix|J-REIT reference matrix]] for issuer disclosures; [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]], [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]], [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]], and [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] for vehicle- and document-specific appraisal questions. [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]], [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]], and [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] are contextual routes only; they do not prove who relies on a given appraisal or yield. Verify any LTV, trustee, or valuation requirement in the named financing and applicable rule rather than inferring it from [[policy-finance/japan-housing-finance-agency|JHF]], [[policy-finance/INDEX|policy-finance index]], or [[finance/INDEX|finance index]].

### Real Estate Appraisal Standards

The 不動産鑑定評価基準 (Real Estate Appraisal Standards) issued by MLIT define the methodology Japanese real-estate appraisers must apply. The standards require:

Table source note: The table summarizes MLIT's standards and appraisal-law surface. The English translation is reference material; the current Japanese standards and guidance control. ^[Sources: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html and https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| Element | Reading |
|---|---|
| Three approaches | Income approach, comparison approach, cost approach — all to be considered |
| Reconciliation | Final opinion of value reconciles relevant evidence using professional judgement; this summary does not prescribe fixed weights |
| Income approach detail | Check how DCF and direct capitalization are applied and reconciled for the purpose, property, and available evidence; do not infer a fixed pairing from this summary |
| Cap rate sourcing | Identify the evidence and adjustments used in the named report; a survey result is market context, not an appraisal input by default |
| Comparison approach | Transaction comparables adjusted for location, age, size, condition |
| Cost approach | Replacement cost net of depreciation |
| Appraiser qualifications | Licensed 不動産鑑定士 under the 不動産の鑑定評価に関する法律 |

### Independence and conflict review

Do not infer a categorical prohibition from a role label. For the named engagement, read the applicable appraisal law and standards, issuer disclosure, engagement terms, and conflict safeguards.

Table source note: These rows are verification questions rather than statements that a particular relationship or fee is always prohibited. The current Japanese appraisal law, MLIT standards, and named issuer documents control. ^[Sources: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html and https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| Review dimension | What to verify |
|---|---|
| Financial interest | Whether the appraiser or firm has an interest relevant under the applicable rule and how it is addressed |
| Employment / officer relationship | Whether any owner, J-REIT, asset-manager, or sponsor relationship exists and what rule or safeguard applies |
| Fee structure | The actual fee terms and any applicable restriction; do not assume a universal rule without the controlling provision |
| Disclosure | Whether, where, and for which purpose the appraiser identity and engagement are disclosed by the named issuer |

### Method outline

The DCF (discounted cash flow) method projects property cashflows over a selected analysis horizon and discounts them back to a present value; the horizon is appraisal-specific rather than universally ten years:

```
Value = Σ [NOI_t / (1 + r)^t] + [Terminal value / (1 + r)^n]
```

| Input | Reading |
|---|---|
| NOI projection | Net operating income for each year, reflecting rent roll, expected lease rollover, vacancy assumption, operating expenses, property tax, insurance, repair, maintenance |
| Discount rate | Use the rate and method stated in the named appraisal; reconcile the valuation date, designated risks, growth and cash-flow assumptions, and terminal treatment, and avoid double-counting risks already reflected in cash flows |
| Terminal value | At end of analysis horizon, computed as terminal-year NOI / terminal cap rate |
| Terminal cap rate | Reflects the report's exit-market assumption; compare it with the entry rate and inspect the stated rationale without assuming a direction |
| Holding-cost adjustments | Identify how capex and other holding costs are modelled and avoid double counting |

### Key sensitivities

| Sensitivity | Reading |
|---|---|
| Rent assumption | Forward-rent profile drives NOI projection; lease-rollover assumption critical |
| Vacancy assumption | Vacancy rate over analysis horizon affects NOI cumulatively |
| Capex assumption | Capex over horizon reduces cumulative NOI |

### DCF in J-REIT practice

J-REIT appraisal disclosures may include DCF and direct-capitalisation analysis, but the forecast horizon, method selection, and reconciliation are property- and report-specific. Do not treat a ten-year horizon or a fixed reconciliation rule as universal; inspect the named appraisal report.

### Method outline

The direct cap method values the property by dividing stabilized NOI by a cap rate:

```
Value = Stabilized NOI / Cap rate
```

| Input | Reading |
|---|---|
| Stabilized NOI | Annual NOI expected under normal operating conditions (not transitional / lease-up state) |
| Cap rate | Market cap rate for the property type and location |

### Cap-rate survey context — JREI

The JREI (日本不動産研究所) investor survey is one dated survey surface. It reports respondents' expected cap rates; it is not a transaction tape, a population of appraisals, or proof that a named appraiser used a result.

| Feature | Reading |
|---|---|
| Publisher | [[JapanFG/japan-real-estate-institute|Japan Real Estate Institute (JREI)]] |
| Frequency | Semi-annual (April + October) |
| Coverage | Office, residential, retail, hotel, logistics — across major cities |
| Methodology | Survey of institutional investors and asset managers for expected cap rate by property type and location |
| Public surface | Headline summary; full data is paid product |

Per the JREI 第50回 不動産投資家調査 (April 2024), the published expected cap rate was 3.2% for Marunouchi / Otemachi grade-A office and 4.1% for Tokyo (Tama) multi-tenant inland logistics. Those are survey observations for named categories and date, not general appraisal ranges. To establish use in a valuation, cite the named appraisal report and its stated inputs. ^[Source: https://www.reinet.or.jp/pdf/REIS/publication_data50th.pdf.]

### Cap rate vs Japan rate environment

Do not infer a cap-rate cycle from monetary-policy labels alone. For a historical claim, assemble same-date observations from a defined series and test other property, lease, liquidity, financing, and sample-composition factors.

| Period | Cap-rate cycle reading |
|---|---|
| 2008-2010 | Select a named survey or transaction series and compare like-for-like categories; do not attribute a change to the GFC label alone |
| 2011-2013 | Verify the defined series, observation dates, sample composition, and property category |
| 2014-2021 | Compare the defined cap-rate evidence with dated BoJ policy data; policy timing alone does not establish causation |
| 2022-2023 | Report the actual series and category rather than a market-wide “stable” or “tighter” conclusion |

## 4. Comparison approach

The comparison approach values the property by reference to comparable transactions:

| Step | Reading |
|---|---|
| Identify comparables | Recent transactions of similar property type, location, age, size |
| Adjust for differences | Location quality, building age, gross floor area, recent capex, lease structure |
| Reconcile per-tsubo / per-㎡ price | Adjusted unit price applied to subject property |
| Reconcile with other evidence | Explain the relevance and weight of comparison evidence in the named report; do not presume a fixed hierarchy |

## 5. Cost approach

The cost approach values the property as land value + depreciated replacement cost of improvements:

| Step | Reading |
|---|---|
| Land value | Based on official land valuations (基準地価, 路線価, 公示地価) and adjusted comparables |
| Replacement cost | Cost to build equivalent structure today |
| Depreciation | Physical, functional, and economic obsolescence |
| Building value | Replacement cost net of depreciation |
| Total | Land value + depreciated building value |

The relevance of the cost approach depends on the valuation purpose, property characteristics, and available evidence. Do not assign it a universal first-, second-, or third-order position.

### Public land-price benchmarks

Table source note: The benchmark rows have different legal issuers and purposes, so sources are provided row by row. Approximate ratios to another benchmark are not universal valuation rules and are omitted. ^[Sources are embedded row by row.]

| Benchmark | Issuer | Use |
|---|---|---|
| 公示地価 | MLIT | Statutory standard-site land-price benchmark ^[Source: https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000328.html.] |
| 基準地価 | Prefectural governments | Prefectural land-price survey; verify the relevant prefecture and year ^[Source: https://www.reinfolib.mlit.go.jp/.] |
| 路線価 | National Tax Agency | Road-front values for inheritance and gift-tax administration ^[Source: https://www.rosenka.nta.go.jp/.] |
| 固定資産税評価額 | Local governments | Local fixed-asset-tax assessment; verify the municipality and assessment year ^[Source: https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/149767_08.html.] |

These public land-price surfaces have different statutory or administrative purposes. Verify whether and how the named report uses one; none substitutes automatically for the appraiser's market analysis.

## 6. Reconciliation and final opinion of value

The appraiser reconciles results from the three approaches:

Table source note: MLIT's standards require appraisal evidence to be coordinated through professional judgement; they do not prescribe the fixed hierarchy or weights shown in the former version of this table. ^[Source: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html.]

| Approach | Role in a case-specific reconciliation |
|---|---|
| Income approach (DCF + direct cap) | Evidence based on expected income; relevance depends on property and available data |
| Comparison approach | Market-transaction evidence adjusted for comparability |
| Cost approach | Cost evidence, with relevance depending on property characteristics and purpose |

The final opinion of value is documented in an appraisal report (鑑定評価書) by a licensed 不動産鑑定士. J-REIT disclosures may reproduce appraisal values or selected assumptions, but the disclosure document and accounting use must be verified for the issuer; an appraisal value is not automatically the financial-statement carrying amount.

### J-REIT appraisal frequency

J-REIT financial-statement book value and appraisal-based fair-value NAV are distinct. Issuer disclosures provide property-level appraisal values used in NAV analysis; the applicable appraisal timing and disclosure should be read from the issuer's documents. ^[Source: https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf.]

| Aspect | Reading |
|---|---|
| Method | Acquisition and subsequent appraisal timing must be read from the named issuer's acquisition and periodic disclosures; no universal cadence is asserted here |
| Disclosure | Property-level appraisal values and assumptions may appear in acquisition releases, securities reports, or asset-management reports; scope and cadence are issuer-specific |
| Aggregation | Analysts may derive appraisal-based portfolio NAV; whether and how an issuer publishes an aggregate measure varies |
| Auditor | A financial-statement audit does not by itself establish that the auditor independently validated each external appraisal; verify the engagement and audit disclosures |

Table source note: JPX explains the distinction between financial-statement book value and appraisal-based fair-value NAV. The table is a verification checklist, not a claim of universal semi-annual full appraisal or auditor review. ^[Sources: https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf and https://www.asb-j.jp/en/accounting_standards/y2008/2008-1128.html.]

### NAV vs market price

Appraisal-based NAV and the traded unit price are two distinct reference points for J-REIT analysis:

| Value | Reading |
|---|---|
| Appraised NAV | Per-unit NAV based on appraised value of portfolio properties |
| Market price | Per-unit market price on JPX |
| P/NAV ratio | Market price / appraisal-based NAV under the analyst's or issuer's stated definition; align dates and components |

P/NAV may trade above or below 1.0, but the gap has no single causal interpretation. It can reflect appraisal timing, rates and cap-rate expectations, leverage, growth, liquidity, governance, and market flows. Foreign-investor or domestic-insurer flows should not be described as causing or anchoring P/NAV without a same-period empirical study; the linked ownership and ALM pages are contextual routes, not causal evidence.

### Sponsor / asset-manager governance over appraisal

The J-REIT framework assigns distinct legal and operating roles; the actual appointments and independence safeguards must be verified in the named issuer's documents:

Table source note: This is a functional structure map. JPX/ARES materials and MLIT appraisal rules support the roles, but the appointed asset manager, appraiser, auditor, and custodian must be verified for the named J-REIT. ^[Sources: https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf, https://www.ares.or.jp/action/jreit/, and https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html.]

| Function | Entity |
|---|---|
| Investment corporation governance | Verify the investment corporation's organs, authority, and duties under the applicable rules and issuer documents |
| Asset manager | Verify the appointed firm, sponsor relationship, licence, mandate, and conflicts |
| Appraiser | Verify the named licensed appraiser / firm, engagement, and applicable conflict safeguards |
| Auditor | Verify the named auditor and the scope of the relevant audit; do not infer appraisal validation |
| Custodian / trustee | Appointed entity under the vehicle and asset-holding structure; verify the named issuer's disclosure |

The engagement party, conflict safeguards, appraiser identity, and disclosed methodology must be checked against the applicable rules and the issuer's current documents; this page does not infer independence or a universal disclosure item from the role label alone.

## 8. Appraisal in non-J-REIT contexts

Table source note: This table is an issue-spotting checklist. Appraisal purpose, timing, accounting treatment, LTV use, and reliance must be verified in the named vehicle, financing, valuation report, and accounting policy; no universal cadence or pricing effect is asserted. ^[Sources: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html, https://www.asb-j.jp/en/accounting_standards/y2008/2008-1128.html, and https://www.fsa.go.jp/en/.]

| Context | Appraisal use |
|---|---|
| [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|Private REIT]] | Verify the unit-NAV definition, valuation policy, appraiser, and actual cadence in the vehicle documents |
| [[real-estate-finance/japan-cmbs-rmbs-securitization|CMBS]] | Verify which value definition enters each LTV or covenant, who may rely on it, and when any revaluation is required under the deal documents |
| [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] | Verify acquisition and later valuation requirements under the asset-holding, financing, and investor documents |
| [[real-estate-finance/real-estate-bridge-fund-japan|Bridge fund]] | Verify each acquisition, covenant, refinancing, and exit valuation; an appraisal does not by itself set a takeout price |
| Pension / SWF direct holdings | Verify the investor's applicable accounting policy, valuation basis, governance, and reporting frequency |
| Corporate balance sheet | Verify the entity's applicable GAAP/IFRS policy, asset classification, cost/fair-value basis, and disclosure; do not infer one model from the framework label |

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
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[JapanFG/japan-real-estate-institute]]

## Sources

- ARES (Association for Real Estate Securitization): Japan real-estate securitization market summary statistics.
- JREI (Japan Real Estate Institute): cap-rate survey and appraisal-methodology surface. 第50回 不動産投資家調査 (2024-04) — https://www.reinet.or.jp/pdf/REIS/publication_data50th.pdf — Marunouchi/Otemachi grade-A office 3.2%, Tokyo (Tama) multi-tenant inland logistics 4.1%.
- MLIT: 不動産鑑定評価基準 (Real Estate Appraisal Standards); 公示地価 land-price benchmark.
- JPX: J-REIT periodic-reporting and disclosure framework.
- FSA: investment-product regulation and J-REIT disclosure framework.
