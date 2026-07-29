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
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [real-estate-finance, valuation, cap-rate, noi, irr, j-reit, methodology, jrei]
status: active
sources:
  - "https://www.reinet.or.jp/?page_id=14347&lang=en"
  - "https://www.ares.or.jp/action/jreit/"
  - "https://j-reit.jp/en/"
  - "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html"
  - "https://www.jpx.co.jp/english/equities/products/reits/"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html"
---

# Cap rate NOI IRR real-estate valuation framework

## TL;DR

Cap rate, NOI / NCF, unlevered IRR, and levered IRR are related but definition-sensitive real-estate metrics. The [[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]] supplies the appraisal framework; a J-REIT's named appraiser and disclosure, a fund's governing documents and underwriting, and a transaction's actual cash flows supply the asset- and vehicle-specific inputs. JREI's dated Real Estate Investor Survey reports respondent expectations and is not a transaction tape, a universal appraisal input, or evidence of current direction by itself. This page is a methodology reference, not investment advice or a statement of current cap-rate / IRR ranges.

## Wiki route

This page sits under [[real-estate-finance/INDEX|real-estate-finance index]] as the valuation-methodology routing surface. Use it together with [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] for the statutory MLIT appraisal framework, [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]] for the current cap-rate range map, [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the listed-vehicle pricing context, [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] for the unlisted-vehicle parallel, [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] for the yield-spread reading, [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank commercial real-estate lending Japan]] for leverage-side underwriting, and [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]] for the cross-domain valuation context. Pair with [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] for the discount-rate input layer.

## The Four Interlinked Metrics

Table source note: These are analytical definitions. The exact numerator, denominator, timing convention, fees, tax, debt, and sale treatment must be reconciled to the named appraisal, issuer disclosure, fund report, or model. ^[Sources: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html and https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| Metric | Formula | What it captures |
|---|---|---|
| Cap rate (NOI yield) | NOI / Property price | First-year stabilised income yield |
| NOI / NCF | See definitions below | Property-level cash flow definition |
| Unlevered IRR | IRR of property-level cash flow (acquisition + NOI + sale) | Asset-level project return |
| Levered IRR | IRR of equity cash flow (after debt service + financing fees) | Equity investor return |

## NOI vs NCF (Definition Reconciliation)

Definitions can diverge across surveys, [[real-estate-finance/j-reit-market-overview|J-REIT]] IR, private-fund LP reporting, appraisal reports, and transaction models. Reconcile the named source before comparison.

Table source note: The plus/minus map is an illustrative analytical bridge, not a definition imposed by JREI, MLIT, ARES, or every issuer. Determine recurring/non-recurring treatment, capex, tenant improvements, leasing commissions, reserves, tax, and financing from the cited document. ^[Sources: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html and https://www.ares.or.jp/action/jreit/.]

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
| Capex / TI / leasing commission (one-off) | Verify the named NOI definition | Verify the named NCF definition |
| Reserves for capital repairs | Verify the named NOI definition | Verify the named NCF definition |
| Depreciation | excluded | excluded |
| Interest expense | excluded | excluded |
| Income tax | excluded | excluded |

One analytical bridge treats NOI as property operating income before specified capital items and NCF as cash flow after those items. Do not use that bridge as an issuer or appraisal definition unless the source provides the reconciliation.

## Cap Rate — Three Sub-Definitions

Table source note: The labels are an analytical taxonomy. Use the exact cash-flow period, price/value date, stabilisation premise, terminal-year convention, and survey/transaction definition from the named source. ^[Sources: https://www.reinet.or.jp/?page_id=14347&lang=en and https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| Type | Definition |
|---|---|
| Going-in cap rate | First-year NOI / acquisition price |
| Stabilised cap rate | NOI in fully-leased / stabilised state / current price |
| Reversion / terminal cap | Cap rate applied to year-N+1 NOI for DCF terminal value |
| Expected (forward) cap rate | A defined respondent expectation from a named survey, property type, location, and survey date |
| Transaction (market) cap rate | Implied cap rate from a closed transaction |

Use the exact JREI survey release for respondent expectations and the exact ARES/J-REIT or issuer dataset for disclosed properties and transactions. They differ in population, definition, date, and observation type and should not be blended into a single benchmark without reconciliation.

## Income-Approach DCF Mechanics

The income-approach DCF in [[real-estate-finance/japan-real-estate-appraisal-methodology|appraisal practice]] uses:

```
Value = Σ(NCF_t / (1+r)^t) + (TerminalValue_(N+1) / (1+r)^N)

TerminalValue = NCF_(N+1) / TerminalCap
```

Table source note: The input map follows the income-approach structure in MLIT's Real Estate Appraisal Standards. The horizon and terminal-cap spread are modelling choices; they are not published market medians and must be supported for the asset and valuation date. ^[Source: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| Input | Source |
|---|---|
| Forecast NCF | Lease roll forecast, market-rent assumption, vacancy assumption, capex schedule |
| Discount rate r | Support from the appraisal/model's risk, timing, growth, and cash-flow assumptions; do not add overlapping components |
| Holding period N | Model-selected explicit forecast period; 10 years is an illustrative convention, not a universal requirement |
| Terminal cap | Survey-based or marginal-buyer underwriting; any spread to going-in cap is deal- and date-specific |

Read the named appraisal to determine how the direct-capitalisation and DCF methods were applied and reconciled under the MLIT framework; this page does not prescribe a universal weighting or pairing.

## J-REIT vs Private Real-Estate Fund Pricing

Listed and private vehicles can produce different values or return requirements for reasons that must be identified from the named vehicles and date.

Table source note: This comparison is a structural practitioner synthesis. The leverage and hurdle-rate bands are illustrative sensitivity assumptions as of 2026-07-29, not ARES/J-REIT market averages or terms for a named fund; current vehicle disclosures and governing tax requirements control. ^[Sources: https://www.ares.or.jp/action/jreit/ and https://j-reit.jp/en/list/.]

| Field | J-REIT (listed) | Private fund |
|---|---|---|
| Pricing anchor | Listed unit price relative to NAV per unit | Acquisition cap rate plus hold-period IRR underwriting |
| Cap-rate input | Named appraiser's disclosed assumptions and valuation date; do not attribute them to JREI without evidence | Fund's documented underwriting assumptions and evidence |
| Discount mechanism | Price-to-NAV traded ratio (can be discount or premium) | Hold-period IRR vs fund-target IRR |
| Leverage policy | Actual vehicle policy, debt disclosure, covenant definitions, and measurement date | Actual fund/vehicle documents, debt terms, and measurement date |
| Distribution profile | Tax-conduit eligibility depends on satisfying the applicable statutory distribution and other conditions; verify the vehicle and period | Fund terms and tax structure determine distribution/reinvestment flexibility |
| Liquidity | Listed trading exists, but depth, spread, volume, and executable size are date-specific | Transfer, lock-up, redemption, gate, and secondary-liquidity terms are vehicle-specific |
| Investor base | Measure holders from dated ownership disclosure; do not infer the marginal buyer | Identify actual LPs or disclosed categories; do not infer from private status |
| Marginal-buyer underwriting | Infer only from cited market and transaction evidence | Use the named bidder/fund hurdle and model; no market-wide range is asserted |

When a J-REIT market price, reported NAV, appraisal, or private bid differs, reconcile valuation date, assets/liabilities, tax, fees, control, liquidity, leverage, cash-flow definitions, and assumptions before attributing a cause. See [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] and [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]].

## Unlevered vs Levered IRR

Table source note: These are cash-flow-basis definitions. Timing, fees, taxes, working capital, capex, sale costs, debt draws/repayment, and distributions must be specified before comparing IRRs. ^[Source: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

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

Table source note: The directions below are illustrative all-else-equal cases, not predictions. IRR is nonlinear and depends on cash-flow timing, amortisation, fees, taxes, covenants, refinance, sale value, and downside losses as well as a first-year yield/debt-cost comparison. ^[Source: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| Simplified case | Conditional effect |
|---|---|
| Property cash yield exceeds all-in debt cost | Leverage may increase modelled equity IRR if all other cash flows and exit assumptions are held constant |
| Property cash yield approximates all-in debt cost | Model the timing and fees; leverage can still change IRR and downside materially |
| Property cash yield is below all-in debt cost | Negative carry can reduce equity cash flow; quantify rather than infer the final IRR |

Use same-date asset cash yield and executed or supportable all-in debt cost. The [[real-estate-finance/real-estate-cap-rate-compression-2026|scenario page]] does not establish a current carry spread for a named asset or facility.

## Hold-Period Sensitivity

Hold period interacts with income, capex, financing, and exit assumptions.

Table source note: The directions are simplified sensitivity cases with other inputs held constant. They are not recommended holding periods or forecasts of which return component will dominate. ^[Source: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| Assumption | Direction |
|---|---|
| Longer hold with unchanged exit cap | More periods of operating cash flow and capex enter the model; quantify the net effect |
| Shorter hold with a lower exit cap | Exit value may increase all else equal, but transaction costs and cash-flow timing still matter |
| Longer hold with a higher exit cap | Operating cash flow may offset part of the lower exit value; the net result is model-specific |
| Shorter hold with a higher exit cap | Lower exit value may have greater weight; quantify leverage, fees, and sale costs |

Select exit cap from asset-, market-, date-, and scenario-specific evidence and show sensitivities. A wider exit cap is not universally “prudent,” and this page prescribes no fixed spread.

## Appraisal and Underwriting Overlap

An appraisal under the [[real-estate-finance/japan-real-estate-appraisal-methodology|MLIT framework]] and private-fund underwriting may use related inputs, but the actual report and model control.

Table source note: The rows are an analytical comparison of appraisal and underwriting workflows, not universal market terms. MLIT standards govern appraisal methodology; private-fund horizons and assumptions remain manager-, strategy-, asset-, and date-specific. ^[Sources: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html and https://www.ares.or.jp/action/jreit/.]

| Field | Named appraisal | Private-fund underwriting |
|---|---|---|
| Cap-rate input | Read the appraiser's stated evidence, adjustment, and valuation date; JREI survey use is not assumed | Read the fund's stated transaction, appraisal, survey, or other evidence and adjustments |
| Growth assumption | Read the exact rent, occupancy, expense, and terminal assumptions | Read the exact business-plan assumptions and execution dependencies |
| Capex assumption | Read recurring/non-recurring repairs, tenant improvements, leasing costs, reserves, and timing | Read the exact renovation, repositioning, maintenance, and leasing plan |
| Hold period (DCF) | Appraisal-specific explicit forecast period; no universal 10-year rule asserted here | Strategy- and fund-term-specific |
| Reconciliation | Read which approaches and sub-methods were applied, weighted, or excluded and why | Read model governance, review, valuation-agent, and LP-document requirements |
| Independence | Identify the licensed appraiser, engagement, conflicts, fee terms, and report statements | Identify preparer, approver, external reviewer if any, conflicts, and valuation policy |

A J-REIT's NAV calculation should be reconstructed from its disclosed assets, liabilities, units, appraisal dates, and named appraisers. Do not attribute values to JREI or infer a universal refresh lag or a single cause of price-to-NAV movement.

## Cap Rate vs Discount Rate (Critical Distinction)

| Concept | Definition |
|---|---|
| Cap rate | NOI / price; first-year yield; static measure |
| Discount rate | Rate used to present-value the specified cash flows; construction must match currency, timing, risk, and cash-flow definition |

Under a stable perpetual-growth model with consistent cash-flow definitions, value = next-period cash flow / (discount rate − growth), so the corresponding yield can approximate discount rate minus growth. This is a model identity, not a universal property valuation rule.

As a purely illustrative stable-growth case, a 3.5% yield plus 1.0% perpetual growth corresponds to approximately a 4.5% discount rate before checking timing and definition consistency. Do not treat those figures as current Japan inputs. See [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] for the discount-rate construction.

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
