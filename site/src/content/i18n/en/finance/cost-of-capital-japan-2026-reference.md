---
source: finance/cost-of-capital-japan-2026-reference
source_hash: 116989d16e686c58
lang: en
status: machine
fidelity: ok
title: "Cost of capital Japan 2026 reference"
translated_at: 2026-05-31T06:16:15.679Z
---

# Cost of capital Japan 2026 reference

## TL;DR

The cost of capital is the single most-leveraged input in any [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF valuation]] and the structural anchor for [[finance/japan-leveraged-buyout-economics|LBO economics]], [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|real-estate IRR underwriting]], and [[finance/japan-acquisition-finance|acquisition finance pricing]]. For Japan as of 2026, the structural inputs are: (1) risk-free reference rate based on 10-year JGB yield (~1.0-1.5% class), with TONA-based OIS as the short-end reference after JPY LIBOR cessation; (2) historical equity risk premium of ~5-6% versus implied ERP that has compressed since the BoJ NIRP exit; (3) TOPIX-aligned beta sourcing with Japan-specific sector adjustments; (4) modest country-risk premium given Japan's sovereign rating and reserve-currency status; (5) TSE-Prime listed-company WACC range typically 5-8% for large-cap and 6-10% for mid-cap; (6) BoJ post-2024 floor system materially raising the short-end reference and feeding through to floating-rate funding cost. This is a methodology reference page, not investment advice and not a specific WACC for any company.

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

| Reading | 2026 class |
|---|---|
| 10Y JGB yield | ~1.0-1.5% range; verify on MOF / BoJ data page |
| Source | MOF JGB auction calendar; BoJ statistics |
| Use | Long-duration DCF, terminal-value discount rate, project finance senior pricing |

Post-NIRP normalisation has raised the 10Y JGB materially from the near-zero NIRP-era trough. The path matters more than any single point — a discount-rate model anchored to a moment-in-time 10Y can produce stale valuations within a quarter.

### Short-end (TONA / OIS)

| Reading | 2026 class |
|---|---|
| TONA (Tokyo Overnight Average Rate) | Post-JPY-LIBOR cessation benchmark for floating-rate JPY |
| OIS TONA curve | Used to construct forward-rate expectations; see [[derivatives/ois-tona-curve|OIS TONA curve]] |
| Use | Floating-rate loan pricing, short-tenor swap discounting, LBO senior margin reference |

The OIS TONA curve replaced JPY LIBOR for short-rate construction. Senior LBO loans and floating-rate corporate facilities reference TONA plus margin.

### Intermediate / belly

For 3Y-7Y discount-rate construction, the JGB yield curve interpolation or the equivalent OIS curve point is used. Many practitioners use 10Y as the single risk-free anchor for simplicity even when valuing shorter-duration cash flow streams.

### Historical ERP

| Methodology | Reading |
|---|---|
| Long-horizon arithmetic excess return | Japan equity-vs-JGB historical excess return varies materially by start date; ~5-7% class over long periods, with caveats |
| Geometric long-horizon | Lower than arithmetic, often by 1-2pp |
| Rolling-window | Highly sensitive to bubble / post-bubble period inclusion |

Japan historical ERP is structurally controversial because the post-1990 bubble correction distorts long-window estimates. Many Japanese fairness-opinion practitioners use 5-6% as the working historical ERP.

### Implied ERP

Implied ERP is derived by solving for the discount rate that equates the index price to the present value of forecast dividends or free cash flow:

| Reading | 2026 class |
|---|---|
| Implied ERP from TOPIX forward EPS | Has compressed since BoJ NIRP exit; 4-5% class is plausible at mid-2026 |
| Verifiability | Recalculable by analyst using BoJ data + JPX index forward earnings |
| Use | Forward-looking discount-rate construction; quarter-end refresh |

Implied ERP and historical ERP often diverge by 100-200bp. Practitioners typically anchor to one and sensitivity-test the other.

## Beta Sources

| Source | Reading |
|---|---|
| TOPIX as market index | Standard market index for Japan beta regression |
| Regression window | Typically 5 years monthly or 2 years weekly; both are common |
| Bloomberg / Refinitiv adjusted beta | Standard data terminal source; adjusted using Blume's formula (0.67 × raw + 0.33 × 1.0) |
| Damodaran sector beta | Cross-checked against [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF framework]] reference; useful for unlisted / pre-IPO valuation |
| Bottom-up beta | Re-levered from peer set's median asset beta; preferred for non-public targets |

### Japan-Specific Beta Issues

- Cross-shareholding effects can dampen measured beta as common shocks move correlated stakes together
- Sector concentration in TOPIX (e.g. banks, autos, electronics) means TOPIX is not as diversified as S&P 500 — sector tilts matter
- Foreign-investor flow can amplify or dampen short-window beta around inflection points
- Small-cap listed-company beta is noisier and less reliable; bottom-up estimation is preferred

## Country Risk Premium

| Reading | Class |
|---|---|
| Sovereign rating | Japan high-investment-grade |
| Reserve-currency status | Yen is one of the major reserve currencies |
| Country risk premium | Minimal-to-zero for Japan in most practitioner frameworks |
| Sovereign CDS | Available but thinly traded |

In contrast to emerging-market valuation, Japan country risk premium is typically not applied separately. The exception is some cross-border M&A frameworks where a uniform country-risk add-on is applied to all non-US targets for institutional consistency.

## TSE-Prime Large-Cap WACC Range (Indicative)

| Sector | Indicative WACC class (2026) |
|---|---|
| Megabank ([[JapanFG/mufg|MUFG]] / [[JapanFG/smfg|SMFG]] / [[JapanFG/mizuho-fg|Mizuho FG]]) | 7-9% on equity-side / 4-6% on group blended |
| Trading house ([[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding-heavy]]) | 6-8% |
| Telecom (e.g. NTT, KDDI) | 5-7% |
| Listed real-estate developer | 5-7% |
| Mature industrial large-cap | 6-8% |
| TSE-Prime mid-cap (median) | 7-10% |
| TSE-Standard / smaller | 8-12% (illiquidity / size premium) |

These ranges are class descriptors, not company-specific values. Always verify with capital structure, beta, credit spread, and effective tax rate of the specific entity.

## Mid-Cap / Small-Cap Adjustment

| Adjustment | Direction |
|---|---|
| Size premium | +1.0-3.0pp for smaller listed names (academic literature; subject to sample period) |
| Illiquidity premium | +0.5-2.0pp for thinly-traded names |
| Controlling-shareholder structure | +0.5-1.5pp where minority shareholders face governance risk |
| Single-business concentration | Variable; reflected in beta or asymmetric scenario weighting |
| Information opacity | Variable; reflected in higher implied ERP |

Japan small-cap size-premium evidence is mixed; practitioners use a 1-3pp range without strong consensus. For unlisted targets a private-company illiquidity discount (often 20-30%) is applied to the value rather than the discount rate.

## Cost of Debt

Cost of debt is the after-tax weighted cost of senior, subordinated, and other interest-bearing liabilities.

| Layer | 2026 pricing reference |
|---|---|
| Megabank senior corporate loan | TONA + margin; investment-grade margin compressed pre-2022, widened post-2022 |
| Public bond (investment grade) | JGB + credit spread; widened post-NIRP normalisation |
| LBO senior loan | TONA + margin; see [[finance/japan-leveraged-buyout-economics|LBO economics]] for pricing class |
| Mezzanine | All-in mid-to-high single digit yield |
| Subordinated capital (bank / insurer) | Higher coupon for loss absorption / regulatory capital classification |

Effective tax rate applies the statutory ~30% Japanese corporate tax rate adjusted for the entity's effective tax rate.

## Post-2024 BoJ Floor System Impact

The [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]] structurally raised the short-end funding cost:

| Channel | Impact |
|---|---|
| Floating-rate loan margin base | TONA-anchored; floor system raised TONA from near-zero |
| Senior LBO pricing | Floating-rate base raised; total cost of senior debt rose with floor lift |
| Bank funding cost | Deposit-rate competition and funding-cost normalisation |
| Real-estate financing | [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR framework]] underwriting reference raised |
| Corporate WACC | Modest upward shift in cost-of-debt component |

This rate-floor lift compounds through the WACC formula and through forward-rate expectations in the OIS curve. The 10Y JGB anchor has risen materially from the YCC-era pin, but the path is non-linear and policy-dependent.

## Valuation Consequence

A 100bp rise in WACC typically reduces a long-duration DCF equity value by 15-25%, depending on terminal-value weight. For [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate sensitivity]], a 25bp move in cap rate can shift NAV by 5-10%. The post-NIRP normalisation path is therefore the most-leveraged valuation question for Japan corporate and real-estate analysis in 2026.

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
