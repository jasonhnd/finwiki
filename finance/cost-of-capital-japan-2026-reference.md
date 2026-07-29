---
title: "Cost of capital Japan 2026 reference"
aliases:
  - "cost-of-capital-japan-2026-reference"
  - "Japan WACC 2026"
  - "Japan cost of capital reference"
  - "Japan equity risk premium 2026"
  - "Japan risk-free rate reference"
  - "Japan TONA discount rate"
  - "Japan hypothetical WACC sensitivity grid"
domain: finance
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [finance, cost-of-capital, WACC, equity-risk-premium, beta, japan, valuation, tona]
status: active
sources:
  - "https://www.boj.or.jp/en/statistics/market/index.htm"
  - "https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm"
  - "https://www.jpx.co.jp/english/markets/statistics-equities/index.html"
  - "https://www.jpx.co.jp/english/equities/follow-up/02.html"
  - "https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm"
  - "https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html"
  - "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/ctryprem.htm"
---

# Cost of capital Japan 2026 reference

## TL;DR

The cost of capital is a highly sensitive input in any [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF valuation]] and a structural anchor for [[finance/japan-leveraged-buyout-economics|LBO economics]], [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|real-estate IRR underwriting]], and [[finance/japan-acquisition-finance|acquisition finance pricing]]. For Japan, practitioners should refresh the JGB or TONA/OIS reference rate on the valuation date, select and document an ERP and beta methodology, and reconcile issuer-specific leverage, credit spread, and effective tax. The numeric ranges below are illustrative sensitivity assumptions frozen on 2026-07-29; they are not observations of a company, market medians, or investment recommendations.

## Wiki route

This page sits under [[finance/INDEX|finance domain]]. Use it together with [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]] for the discount-rate role in valuation, [[finance/japan-leveraged-buyout-economics|Japan LBO economics]] for cost-of-debt pricing, [[finance/japan-acquisition-finance|Japan acquisition finance]] for capital-stack pricing reference, [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]] for the property-side analogue, [[money-market/japan-money-market|Japan money market]] for the short-end reference, [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]] for the policy-rate plumbing, and [[derivatives/ois-tona-curve|OIS TONA curve]] for the curve-construction layer. For valuation framework context route to [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] and [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]].

## Cost of Capital — Structural Formula

WACC = (E/V) × Re + (D/V) × Rd × (1 − Tc)

where:
- Re = cost of equity = Rf + β × ERP + (country risk) + (size / governance premium)
- Rd = cost of debt = Rf + credit spread
- Tc = effective corporate tax rate
- E, D, V = market value of equity, debt, and total capital

For Japan, each input has structural characteristics that differ from US or European reference frameworks.

### Long-end (10Y JGB)

Table source note: The 1.0–1.5% band is a hypothetical sensitivity input frozen on 2026-07-29, not a quoted yield range. Replace it with the exact valuation-date point from the MOF historical-interest-rate series or another documented curve source. ^[Source: https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm.]

| Reading | 2026 class |
|---|---|
| 10Y JGB yield | Model 1.0–1.5% only as an illustrative sensitivity; use the exact dated observation in live work |
| Source | Record the exact MOF/BoJ series, observation date, maturity, and interpolation method |
| Use | Candidate input for a documented long-duration DCF, terminal-value, or financing model; suitability is model-specific |

BOJ's 2024-03-19 decision ended the negative interest-rate policy framework. Compare dated 10Y JGB observations before and after that decision, but do not attribute the yield path solely to the policy change or assume that a valuation becomes stale within a fixed period. ^[Source: https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm.]

### Short-end (TONA / OIS)

| Reading | 2026 class |
|---|---|
| TONA (Tokyo Overnight Average Rate) | A possible reference only where the applicable contract or model names TONA |
| OIS TONA curve | A possible curve input under the documented valuation or collateral framework; see [[derivatives/ois-tona-curve|OIS TONA curve]] |
| Use | Verify the executed facility, swap, discounting convention, tenor, fallback, and spread rather than assuming a universal reference |

JPY LIBOR cessation does not establish that every JPY loan, LBO facility, or swap references TONA. Use TONA plus margin only where the applicable contract and current benchmark provisions do so.

### Intermediate / belly

For a hypothetical 3Y–7Y model, an analyst may test JGB interpolation or the corresponding documented OIS point. The selected curve, maturity, interpolation, cash-flow currency, and discounting convention must be stated; this page does not claim that 10Y is a common or preferred single anchor.

### Historical ERP

| Methodology | Reading |
|---|---|
| Long-horizon arithmetic excess return | Recalculate from a named index, return definition, risk-free series, frequency, and start/end dates; 5–7% is only a hypothetical sensitivity input |
| Geometric long-horizon | Calculate from the same named sample; a 1–2pp arithmetic/geometric gap is only a hypothetical check, not an observed Japan rule |
| Rolling-window | Report the exact window and test how inclusion of different periods changes the result; no direction is assumed |

Historical ERP depends on the selected index, JGB proxy, arithmetic/geometric convention, currency, reinvestment assumption, and sample dates. A 5–6% case may be included only as a dated hypothetical sensitivity; no fairness-opinion practice or market convention is asserted without a disclosed sample.

### Implied ERP

Implied ERP is derived by solving for the discount rate that equates the index price to the present value of forecast dividends or free cash flow:

Table source note: The rows are a model-construction checklist. Damodaran's implied-premium materials provide the methodology route; the analyst must supply and date every Japan-specific market and cash-flow input. ^[Source: https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html.]

| Reading | 2026 class |
|---|---|
| Implied ERP from a TOPIX cash-flow model | Model 4–5% only as a hypothetical 2026-07-29 sensitivity; no post-NIRP compression or market level is asserted |
| Verifiability | State the index price, forecast source, cash-flow/payout path, growth, risk-free curve, date, and solver; BoJ/JPX do not supply the completed ERP calculation here |
| Use | One possible forward-looking scenario; refresh whenever the model's dated inputs change |

Do not assume a recurring implied-versus-historical ERP gap or a customary anchor. Calculate both under disclosed methods and dates if the comparison is relevant.

## Beta Sources

Table source note: The choices below are a verification map, not a statement of preferred or common practice. TOPIX methodology is published by JPX, while Damodaran provides research data and estimation references; any vendor field must be checked against its then-current methodology. ^[Sources: https://www.jpx.co.jp/english/markets/indices/topix/ and https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html.]

| Source | Reading |
|---|---|
| TOPIX as market index | Candidate benchmark; verify that its constituents and currency match the exposure being modelled |
| Regression window | Test 5 years monthly and 2 years weekly only as alternative illustrative windows; disclose frequency, missing data, and estimation error |
| Vendor beta field | Record vendor, field, date, raw/adjusted status, benchmark, window, and adjustment formula; do not assume Blume adjustment |
| Damodaran sector beta | Possible external comparison; match geography, sector, leverage, cash, date, and peer definition |
| Bottom-up beta | Possible peer-derived alternative; document peer selection, unlevering/relevering, tax, debt, and aggregation; no preference is asserted |

### Japan-Specific Beta Issues

- Test whether cross-shareholdings affect the measured covariance; do not assume a direction.
- Compare the candidate benchmark's sector weights with the issuer's exposure rather than assuming adequate diversification.
- Test any relationship between investor flows and estimated beta on the same dated sample; do not infer causality.
- Report confidence intervals and alternative specifications for thin or short histories; do not declare a preferred method without fit evidence.

## Country Risk Premium

| Reading | Class |
|---|---|
| Sovereign rating | Record the selected agency, rating, outlook, and date if used |
| Currency / reserve-status input | Explain whether and why it affects the selected model; do not convert status into a premium mechanically |
| Country risk premium | Zero or any positive add-on is a model choice requiring a named method, data date, and anti-double-counting check |
| Sovereign CDS | Use only a dated, liquid, maturity-matched observation with a documented mapping; otherwise omit |

Decide explicitly whether a separate country-risk premium is required for the actual cash flows and investor perspective. This page asserts neither a Japan default of zero nor a uniform non-US add-on.

## Hypothetical WACC Sensitivity Grid

Table source note: The following bands are analyst-defined hypothetical sensitivity cases as of 2026-07-29, not JPX-published sector medians, market ranges, or current company WACCs. JPX asks listed companies to explain cost-of-capital-aware management but does not prescribe a WACC range; replace every case with valuation-date JGB/market inputs and issuer-specific capital structure. ^[Sources: https://www.jpx.co.jp/english/equities/follow-up/02.html and https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm.]

| Hypothetical test case | WACC sensitivity range (not a market estimate) |
|---|---|
| Case A: separate equity-side and group-blended tests | 7-9% on equity-side / 4-6% on group blended |
| Case B | 6-8% |
| Case C | 5-7% |
| Case D | 5-7% |
| Case E | 6-8% |
| Case F | 7-10% |
| Case G: additional size / illiquidity stress | 8-12% |

These ranges are deliberately hypothetical modeling cases, not class descriptors, sector ranges, market observations, or company-specific values. Always replace them with evidence for the specific entity's capital structure, beta, credit spread, and effective tax rate.

## Mid-Cap / Small-Cap Adjustment

Table source note: These increments are illustrative sensitivity cases as of 2026-07-29, not observed premiums or a rule for adding multiple overlapping adjustments. Damodaran's current-data pages provide size/beta research inputs, but the analyst must avoid double counting and document the sample, date, and method used. ^[Source: https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html.]

| Adjustment | Direction |
|---|---|
| Size premium | Test +1.0–3.0pp only as a hypothetical sensitivity; use no add-on without a dated matched-sample method |
| Illiquidity premium | Test +0.5–2.0pp only as a hypothetical sensitivity; define the liquidity measure and avoid overlap with size/beta |
| Controlling-shareholder structure | Test +0.5–1.5pp only as a hypothetical sensitivity; document the rights and avoid substituting an arbitrary premium for scenario analysis |
| Single-business concentration | Decide whether risk belongs in cash flows, beta, or scenarios; do not add it twice |
| Information opacity | Identify missing information and model its effect explicitly; do not assume a higher ERP |

No practitioner range is asserted. A 1–3pp size add-on and a 20–30% private-company value discount are separate hypothetical sensitivities, not observed Japan conventions; justify the selected method, sample, date, and avoidance of double counting.

## Cost of Debt

Cost of debt is the after-tax weighted cost of senior, subordinated, and other interest-bearing liabilities.

Table source note: The rows are document and data checks, not 2026 market pricing observations. TONA or JGB references apply only where the instrument or model specifies them; spread direction and mezzanine yield require dated executable terms or named disclosures.

| Layer | 2026 pricing reference |
|---|---|
| Senior corporate loan | Read the executed benchmark, margin, floor, fees, tenor, security, and covenants; TONA is possible only if specified |
| Public bond | Match the bond cash flows to a dated government/swap curve and issuer spread; do not infer post-NIRP widening |
| LBO senior loan | Read the executed facility and benchmark provisions; [[finance/japan-leveraged-buyout-economics|LBO economics]] is context, not a pricing source |
| Mezzanine | A mid-to-high-single-digit all-in yield is only a hypothetical sensitivity; replace it with instrument-specific terms |
| Subordinated capital (bank / insurer) | Verify coupon, loss-absorption terms, call/reset, ranking, and regulatory classification in the named instrument |

Use the entity's applicable current tax rules and expected effective cash-tax profile; do not substitute an undated approximate statutory rate.

## Post-2024 Policy-Change Verification

BOJ's 2024-03-19 decision is a dated policy event. The table lists questions to test and does not attribute each financing or valuation outcome to that event. ^[Source: https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm.]

| Channel | Verification question |
|---|---|
| Floating-rate loan base | Does the named contract reference TONA or another benchmark, and how did its dated fixing change? |
| Senior LBO pricing | How did benchmark, margin, floor, fees, and hedging change for comparable dated facilities? |
| Bank funding cost | What do the named bank's dated deposit, wholesale-funding, and disclosure data show? |
| Real-estate financing | How did dated facility terms and [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|property underwriting]] assumptions change, controlling for borrower and asset risk? |
| Corporate WACC | Recompute the issuer-specific debt and equity inputs; do not assume an upward shift |

Any effect enters only through the dated inputs actually used in the WACC or cash-flow model. Separate observed rate changes from attribution to a single policy event.

## Valuation Consequence

For a fixed cash-flow model, calculate `ΔV = V(WACC + 100bp) − V(WACC)` rather than applying a universal percentage. A 15–25% equity-value decline is only a hypothetical sensitivity outcome and depends on cash-flow duration, leverage, terminal assumptions, and starting WACC. Likewise, recompute property value or NAV at `cap rate ± 25bp`; a 5–10% move is only an illustrative result under a specified NOI, debt, and cap-rate base. No single “most-leveraged” Japan valuation question or post-NIRP causal ranking is asserted.

## Related

- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[money-market/japan-money-market]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/economic-value-based-solvency]]
- [[INDEX|FinWiki index]]

## Sources

- BoJ: rate, yield, and floor-system policy data; financial system report.
- MOF: JGB issuance calendar and auction results.
- JPX: TOPIX index and Prime market governance engagement publications.
- FSA: regulatory framework and ICS / EVS guidance.
- Damodaran (NYU Stern): ERP and beta methodology reference, including Japan-specific data set.
