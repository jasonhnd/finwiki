---
source: real-estate-finance/j-reit-dividend-yield-vs-jgb-spread
source_hash: 8a9dc15419b8ea29
lang: en
status: machine
fidelity: ok
title: "J-REIT dividend yield vs JGB spread"
translated_at: 2026-06-01T03:31:12.298Z
---

# J-REIT dividend yield vs JGB spread

## TL;DR

The J-REIT dividend yield minus 10Y JGB yield spread is a primary watch metric for Japan real-estate-investor positioning. Historically the spread has sat in a roughly 200 - 400bp band around the TSE REIT Index average dividend yield. NIRP / YCC compression pinned the 10Y JGB near zero and pushed the spread wider in absolute terms even when J-REIT yields themselves compressed. Post-NIRP exit and YCC unwind raised the 10Y JGB reference and forced spread reading to reset. The spread also drives the life-insurer J-REIT vs JGB allocation trade-off, which is a recurring [[insurance/japan-life-insurance-alm-overview|life-insurer ALM]] decision. This is route-and-link only; not investment advice.

## Wiki route

This entry sits under [[real-estate-finance/INDEX]]. Read with [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the listed J-REIT structural map, [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression]] for the asset-side yield-floor reading that feeds J-REIT dividend yield, [[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign-investor ownership]] for the cross-border bid dimension, [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank CRE lending]] for the senior-debt-cost side, and [[real-estate-finance/real-estate-private-credit-japan|private credit]] for the non-listed alternative. Rate-side anchors live at [[money-market/japan-money-market]] for short-rate and YCC unwind detail, and [[banking/INDEX|banking index]] for the BoJ FSR / FSA spread commentary. The life-insurer ALM trade-off ties to [[insurance/japan-life-insurance-alm-overview]]. Long-form structural finance reading lives at [[finance/INDEX]] and the private-equity / private-finance dimension at [[finance/japan-private-equity-fund-structure-matrix]].

## Spread Definition

| Term | Definition |
|---|---|
| J-REIT dividend yield | Index-level or vehicle-level distributions per unit over price per unit, trailing or forward. |
| TSE REIT Index dividend yield | Index-level average across the listed J-REIT universe. |
| 10Y JGB yield | Benchmark 10-year Japanese government bond yield, MoF / BoJ data. |
| Spread (bp) | J-REIT yield minus 10Y JGB yield, basis points. |
| Index reading | Either the simple-average J-REIT yield or weighted-average; methodology matters for cross-comparison. |
| Sector-mix adjustment | Office-heavy index has lower dividend yield than logistics-heavy or hospitality-heavy index. |

Exact dividend yield depends on which J-REIT vehicles are included (full TSE REIT Index vs sub-indices) and the dividend treatment (trailing 12-month vs forward-12 forecast).

## Historical Spread Range Map

| Era | 10Y JGB anchor | J-REIT yield band | Spread band | Reading |
|---|---|---|---|---|
| Pre-NIRP (2010 - 2015) | 0.5 - 1.5% | 3.5 - 5.5% | 200 - 400bp | Conventional risk-premium reading. |
| NIRP / YCC peak compression (2016 - 2022) | -0.1 - +0.25% YCC-pinned | 3.2 - 4.5% | 300 - 450bp | Wider spread reflected wider equity-risk-premium even as J-REIT yields compressed. |
| Post-YCC normalisation (2023 - 2025) | 0.5 - 1.5% rising | 3.5 - 4.8% | 200 - 400bp | Reset toward pre-NIRP band as risk-free rose. |
| 2026 expected band (indicative) | 1.0 - 1.5% | 3.8 - 5.0% | 250 - 400bp | Normalised; sector-mix-sensitive. |

These bands are class descriptors derived from public-surface ARES J-REIT data and BoJ / MoF 10Y JGB time series. The exact reading depends on which index and which sub-period; verify against the published series before use.

## Spread Mechanics

The spread captures the equity risk premium investors require to hold listed real-estate equity over the JGB risk-free reference:

```
Spread = J-REIT dividend yield - 10Y JGB yield
       = (Asset cap rate - leverage cost + leverage effect) - Risk-free
       ≈ Asset risk premium + Real-estate-equity premium + Leverage premium + Liquidity premium
```

Component reading:

| Component | Direction |
|---|---|
| Asset cap rate level | Set by underlying real-estate market per [[real-estate-finance/real-estate-cap-rate-compression-2026]]. |
| Leverage effect | J-REIT senior debt cost vs asset cap rate; positive when cap rate exceeds debt cost. |
| Real-estate-equity premium | Investor compensation for cashflow volatility, vacancy risk, capex risk. |
| Leverage premium | Compensation for financial-leverage risk at the J-REIT level. |
| Liquidity premium | Compensation for listed-secondary-market liquidity (typically lower for J-REIT vs large-cap equity). |
| Distribution-policy adjustment | J-REIT 90% distribution rule (per [[real-estate-finance/jrei-foreign-investment-tax-treatment]]) caps re-investment and shifts pricing logic. |

## Post-NIRP Compression Pattern

NIRP / YCC era compression observations:

| Effect | Mechanism |
|---|---|
| 10Y JGB anchored near zero | YCC band kept 10Y JGB within a narrow controlled range. |
| Reach-for-yield demand | Domestic insurance, pension, retail investor demand for any yielding asset compressed J-REIT dividend yield. |
| Foreign-buyer demand | Cross-border yen-funded carry into J-REIT compressed yield further. |
| Spread widening despite compression | Absolute spread widened because JGB fell faster than J-REIT yield. |
| Valuation overshoot at trough | Mid-2020 to mid-2022 saw price-to-NAV premiums for prime J-REIT vehicles. |

YCC unwind from 2023 forced:

- 10Y JGB rate to rise materially from near-zero anchor;
- J-REIT secondary-market price re-rating downward;
- spread compression in absolute terms as JGB rose faster than J-REIT yield could adjust;
- selective J-REIT vehicles trading at discount-to-NAV as risk-free reset.

## BoJ YCC Unwind Impact

The YCC unwind path is the primary driver of the post-2023 spread reset. Mechanically:

| YCC stage | Effect on J-REIT-vs-JGB spread |
|---|---|
| YCC strict (-0.1% policy rate, 10Y JGB capped) | Spread sat wide; J-REIT yield offered substantial pickup over JGB. |
| YCC band widening (2022 - 2023) | 10Y JGB allowed wider range; spread compressed as JGB drifted up. |
| YCC unwind / NIRP exit (2024) | 10Y JGB no longer pinned; spread compressed further on rising risk-free. |
| Post-YCC normalisation (2025+) | Spread settling around historical pre-NIRP band; sensitive to BoJ policy-rate path. |

Read with [[money-market/japan-money-market|Japan money market]] for the YCC mechanism and policy-rate path detail, and [[banking/INDEX|BoJ FSR]] for system-level spread commentary.

## Life-Insurer J-REIT vs JGB Allocation Trade-Off

Life insurers run the most direct version of this allocation choice because:

- liability discount rate / actuarial reference is JGB-linked;
- super-long JGB (20Y / 30Y / 40Y) is the natural ALM hedge;
- J-REIT is a return-seeking allocation that pays yield but with equity-style volatility;
- regulatory capital treatment differs between JGB (zero / low risk-weight) and J-REIT equity (equity-risk-weight).

| Period | JGB attractiveness | J-REIT attractiveness | Allocation tilt |
|---|---|---|---|
| Pre-NIRP | Moderate yields | Yield pickup but volatility | Balanced JGB / J-REIT allocation. |
| NIRP / YCC peak | Yields near zero | Material yield pickup; large absolute spread | Tilt to J-REIT and yield-seeking assets. |
| Post-YCC normalisation | Super-long JGB yields rising and ALM-friendly | Spread narrowing; risk-adjusted attractiveness declines | Re-tilt to JGB and reduce J-REIT pace. |
| 2026 expected | Super-long JGB attractive for ALM | J-REIT spread normalised | Stabilised allocation with sector-selection focus. |

This trade-off is the structural reason life-insurer flows reshape J-REIT secondary-market liquidity around regime changes. Detailed life-insurer ALM logic sits at [[insurance/japan-life-insurance-alm-overview]].

## Other Domestic Buyer Reads

| Buyer | Spread sensitivity |
|---|---|
| Pension funds (DB / DC) | J-REIT is a return-seeking allocation alongside listed equity and global REIT; spread is one input to allocation. |
| Retail investors (NISA, brokerage) | Dividend-yield-driven; absolute J-REIT yield matters more than spread. |
| Regional banks | Securities-portfolio diversification; J-REIT competes with JGB and listed equity for yield allocation. |
| Trust banks (own-account) | Limited own-account J-REIT; more relevant as fiduciary holder for trust beneficiaries. |
| Foreign investors | Spread and FX carry both relevant; see [[real-estate-finance/j-reit-foreign-investor-ownership]]. |

## Sector-Mix Sensitivity

J-REIT dividend yield is sector-mix-driven:

| J-REIT sector | Yield-class implication |
|---|---|
| Diversified | Mid-yield class, broad sector exposure. |
| Office-focused | Lower-yield class, lower cap rate. |
| Logistics-focused | Mid-to-higher yield class, growth-driven distribution growth. |
| Residential-focused | Mid-yield class, stable distribution. |
| Hospitality-focused | Higher-yield class, distribution-volatility-sensitive. |
| Retail-focused | Mid-to-higher yield class, anchor-tenant sensitive. |
| Healthcare / specialty | Higher-yield class, niche-asset-class. |

Index-level dividend yield reflects sector weighting; comparing two sub-indices with different sector mix requires sector-mix adjustment.

## Spread vs Foreign-Buyer Behaviour

Foreign-buyer carry on J-REIT integrates:

| Component | Reading |
|---|---|
| Local-currency yield | J-REIT dividend yield. |
| FX hedge cost | Yen-vs-foreign-currency hedge cost (significant for USD investors). |
| Hedged yield | Local-currency yield minus FX hedge cost. |
| Hedged spread | Hedged yield minus comparable foreign-currency benchmark (e.g. US Treasury 10Y). |

When FX hedge cost exceeds local-currency yield pickup, foreign carry breaks; unhedged carry is a different bet entirely. Foreign-ownership patterns and price-impact dynamics are mapped at [[real-estate-finance/j-reit-foreign-investor-ownership]].

## Spread as Stress / Valuation Indicator

Spread-watching uses include:

| Use | Interpretation |
|---|---|
| Mean-reversion signal | Spread far above historical median can suggest J-REIT "cheap" vs JGB; spread far below suggests "rich". |
| Equity-risk-premium proxy | Spread approximates required equity-risk-premium on real-estate income. |
| BoJ policy-stance signal | Spread compression often coincides with risk-free-rate normalisation. |
| Foreign-flow signal | Sharp spread move can coincide with foreign-bid entry / exit. |
| Fundamental-vs-flow disentangling | Spread move can be cap-rate-driven (fundamental) or rate-driven (flow / regime). |

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
