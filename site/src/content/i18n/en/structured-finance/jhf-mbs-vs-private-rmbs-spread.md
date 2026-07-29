---
source: structured-finance/jhf-mbs-vs-private-rmbs-spread
source_hash: 8ae67df420f41835
lang: en
status: machine
fidelity: ok
title: "JHF MBS vs private RMBS spread"
translated_at: 2026-07-29T10:06:23.508Z
---

# JHF MBS vs private RMBS spread

## TL;DR

There is no timeless 10–30bp JHF MBS band or 50–100bp private-RMBS band. JHF publishes dated launch spreads for each series; its April 17, 2026 issuance history reports 51–55bp for series 221–227. Private RMBS pricing must be taken from a named transaction and date because public and private placements differ in collateral, structure, expected life and disclosure. This page therefore compares reproducible evidence, not unsupported generic levels.

## Wiki route

| You want | Go to |
|---|---|
| JHF MBS structure | [[structured-finance/jhf-mbs-mechanics]] |
| Private RMBS structure | [[structured-finance/japan-rmbs-issuance-structure]] |
| Market overview | [[structured-finance/japan-abs-market-overview]] |
| Rating methodology | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| JHF agency | [[policy-finance/japan-housing-finance-agency]] |

## 1. Spread benchmarks

[JHF's issuance history dated April 17, 2026](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) defines launch spread as the coupon less the new 10-year JGB yield at pricing for the monthly series shown below.

| Dated evidence | JHF monthly MBS | Private RMBS |
|---|---|---|
| Series 221–225, priced Sep. 2025–Jan. 2026 | 51bp launch spread for each series | Not a private-RMBS observation |
| Series 226, priced Feb. 18, 2026 | 53bp launch spread | Not a private-RMBS observation |
| Series 227, priced Mar. 18, 2026 | 55bp launch spread | Not a private-RMBS observation |
| Reproducible private comparison | Not applicable | Use the named deal's coupon/spread, reference rate, pricing date and expected life from [JSDA's survey](https://www.jsda.or.jp/en/statistics/securitization-market/) or transaction documents |

The JHF observations above are a dated seven-series snapshot, not a forward range.

## 2. Drivers of the spread gap

[JHF's FAQ](https://www.jhf.go.jp/english/mbs_faq.html) supports the JHF mechanics; private-deal attributes must come from the compared transaction.

| Comparison input | JHF MBS | Private RMBS |
|---|---|---|
| Payment obligation | JHF is responsible for timely payment before a beneficiary-interest event | Defined by the trust/SPV and transaction documents |
| Post-trigger support | Ordinary monthly MBS use OC for the beneficiary certificates | Credit enhancement is deal-specific |
| Repayment profile | Monthly pass-through; JHF publishes factors and pool attributes | Expected life and amortization are deal-specific |
| Price observation | JHF publishes issue amount, coupon and launch spread | Record only if disclosed for the named deal |
| Rating | Dated series rating | Dated tranche rating; never infer from asset class |

## 3. Credit and structure are not a fixed spread decomposition

Public data do not support assigning a fixed number of basis points to "government support," liquidity or complexity. The following items are comparison controls, not additive spread contributions.

| Control | Required treatment |
|---|---|
| Credit | Compare the actual legal payment obligation, enhancement and rating report. |
| Duration | Match expected life and prepayment assumptions. |
| Reference curve | Use the same benchmark maturity and observation convention. |
| Date and liquidity | Compare pricing from the same market window and disclose whether a quote is primary or secondary. |

## 4. Prepayment behavior difference

[JHF's monthly data](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html) and [JSDA's PSJ statistics](https://www.jsda.or.jp/en/statistics/securitization-market/) provide reproducible inputs.

| Evidence | JHF MBS | Private RMBS |
|---|---|---|
| Balance factor | Published by JHF for covered series | Use deal trustee/servicer reports if public |
| Pool attributes | Published by JHF at issuance and updated on its investor pages | Use the named deal's disclosure |
| Standard prepayment reference | PSJ statistics can be used with the stated observation date | Apply only if the transaction documents use or map to that convention |

No generic "bonus-period spike" or faster/slower hierarchy is asserted without a cited empirical series.

## 5. Institutional investor preference

[JHF's issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) does not disclose a universal allocation; the following table states the evidence required for any preference claim.

| Investor claim | JHF MBS evidence | Private RMBS evidence |
|---|---|---|
| Holder category | Named allocation / holdings disclosure and date | Same |
| Amount / share | Named series, denominator and reporting population | Named transaction, denominator and reporting population |
| ALM / spread motive | Investor's own public statement | Investor's own public statement |
| Foreign participation | Dated allocation or holdings evidence | Dated allocation or holdings evidence |
| Relative preference | Matched institution, period and comparable instruments | Same comparison |

No dominant buyer, JGB-substitute motive or private-RMBS allocation pattern is retained without that evidence.

## 6. Curve dynamics

[JHF's dated history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) and a named private transaction can support the following event-window comparison.

| Environment | Required JHF observation | Required private-RMBS observation |
|---|---|---|
| Monetary-policy regime | Named series, pricing date, benchmark and regime dates | Same fields for the named deal |
| Risk-off window | Primary / secondary observation and market date | Same |
| Issuance window | Dated supply measure and comparison period | Same |
| Liquidity claim | Quote source, bid / offer or turnover measure | Same |

No fixed direction or relative widening is asserted without a matched event study.

## 7. Implications for structuring decisions

[JHF's securitization-support description](https://www.jhf.go.jp/english/mbs_faq.html) supports only the Flat 35 route in the following table; other choices remain transaction-specific.

| Originator choice | Evidence-based reading |
|---|---|
| Originate eligible Flat 35 and sell to JHF | JHF purchases eligible loans and funds the program through MBS issuance. |
| Execute a private RMBS | Requires a named pool, legal structure, enhancement, investor terms and dated pricing evidence. |
| Retain loans | Compare the institution's actual funding, capital, liquidity and accounting treatment; no generic spread threshold is stated here. |

Pricing is one input, but the decision cannot be inferred from an uncited JHF/private spread gap.

## 8. Rating-agency treatment

[FSA's current register](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf), the dated JHF issue record and each agency's named action support the following controls.

| Rating question | JHF MBS | Private RMBS |
|---|---|---|
| Agency / legal entity | Read the named series action and current registration | Read the named class action and current registration |
| Rating | Record symbol, date, outlook / watch and action | Same |
| Criteria | Record the version cited by the action | Same |
| Sovereign relationship | Use the published agency rationale | Do not infer from the asset class |
| Spread implication | Requires dated market pricing | Same; never infer basis points from the rating |

See [[structured-finance/credit-rating-methodology-jcr-r-and-i]] for rating-agency methodology details.

## Wiki route

Read this entry within [[structured-finance/INDEX|structured finance]] and use [[finance/INDEX|finance]] for cross-domain capital-markets context.

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[money-market/INDEX]]
- [[financial-regulators/boj-monetary-policy]]
- [[banking/INDEX]]

## Sources

- [JHF, MBS issuance history as of April 17, 2026](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf).
- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, factors and other monthly pool data](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html).
- [JSDA, Securitization Market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
