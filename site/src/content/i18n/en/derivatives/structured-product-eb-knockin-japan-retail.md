---
source: derivatives/structured-product-eb-knockin-japan-retail
source_hash: 664d30fd60c1dcd6
lang: en
status: machine
fidelity: ok
title: "EB knock-in structured product Japan retail"
translated_at: 2026-05-31T03:19:56.392Z
---

# EB knock-in structured product Japan retail

## TL;DR

EB (*Equity Bond*) knock-in is the most-distributed structured-product format in Japan retail wealth management through 2022. Mechanically, the buyer is short a **down-and-in put option** on a single Japanese stock (or worst-of basket) in exchange for an enhanced coupon and (in autocallable variants) the chance of early redemption. The headline coupon (typically 5-15 percent annualized) attracted yield-starved retail. The **tail risk** is binary: if the worst-performing reference asset breaches the knock-in barrier (typically 50-70 percent of initial), the investor is delivered shares (or cash equivalent) at the original strike rather than receiving par. Losses of 30-70 percent of principal in single events are realized outcomes. The **2022-2023 FSA crackdown** and subsequent JSDA self-regulatory tightening targeted EB knock-in distribution as the highest-priority retail-protection issue; administrative orders against [[securities-firms/nomura-hd|Nomura]], [[securities-firms/smbc-nikko|SMBC Nikko]], and [[securities-firms/daiwa-sg|Daiwa]] subsidiaries forced major distributors to suspend or restrict EB knock-in retail sales.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the deepest single-product page on the most consequential Japan retail structured-product format. Read it together with [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] for the broader distribution landscape, [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the credit-derivative context, [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the issuer credit dimension, [[derivatives/japan-irs-market|Japan IRS market]] for the rates underlay used in EB pricing, and [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve context.

Cross-reference [[finance/INDEX|finance index]] for the wider capital-markets framing, [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the institutional equity-linked counterpart that uses similar mathematics, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for the related single-stock liquidity dynamics, [[banking/INDEX|banking index]] for the megabank distribution context, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the contrast with institutional structured allocations, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer hedging side.

### Headline mechanics

| Component | Typical retail-distributed EB knock-in |
|---|---|
| Form | Bond issued by SPV or bank with embedded equity derivative |
| Currency | JPY (most common) or USD (for currency-overlay variants) |
| Maturity | 1-5 years (typically 3 years); shortened by autocall feature |
| Underlying | Single Japanese listed stock OR worst-of basket of 3-5 stocks |
| Initial reference price | Closing price on strike date (S₀) |
| Knock-in barrier | 50-70 percent of S₀ (most common: 60 percent) |
| Autocall threshold | 100 percent of S₀ on observation date |
| Coupon | 5-15 percent annualized; "conditional coupon" payable only if no knock-in trigger |
| Knock-in observation | Continuous during life (intraday touch) OR European observation only at maturity |
| Redemption | Par if no knock-in; shares delivered (or cash equivalent) at strike if knock-in |

### Worst-of basket variant

| Feature | Detail |
|---|---|
| Number of underlyings | Typically 3-5 stocks |
| Worst-of rule | Payoff determined by worst-performing reference asset |
| Correlation impact | Lower correlation → higher probability of one asset breaching → higher coupon |
| Diversification effect | Counter-intuitive: more underlyings increases worst-of probability, not diversification |

The worst-of basket is one of the most-criticized retail features: investors often perceive a basket as "diversification" when it is in fact concentration of downside.

### Autocallable feature

| Observation date | Action if reference at or above autocall threshold |
|---|---|
| Year 1 observation | If reference ≥ S₀ → automatic early redemption at par + accrued coupon |
| Year 2 observation | Same trigger |
| Year 3 observation (maturity) | Same trigger or final redemption rules apply |

Autocall benefits the issuer / dealer (terminates short-vol exposure early) and provides retail buyer with quicker turnover and re-investment.

### Investor position equivalence

```
Long EB knock-in note ≈ Long bond + Short down-and-in put option on underlying
```

The short put option is the source of:

- the enhanced coupon (option premium received);
- the tail-risk exposure (binary loss profile below barrier).

### At-maturity payoff scenarios

Assume single-name EB with S₀ = 1000, knock-in barrier = 600 (60 percent), strike = 1000, principal = 1,000,000 JPY.

| Scenario | Final stock | Outcome |
|---|---|---|
| Stock stayed above barrier all life (e.g., 850) | 850 (no knock-in event) | Redemption at par 1,000,000 JPY + all coupons paid |
| Stock breached barrier intraday (e.g., touched 580) but recovered to 800 | 800 (knock-in triggered) | Conditional final coupons forfeited; redemption in shares: 1,000,000 / 1000 = 1000 shares delivered, worth 1000 × 800 = 800,000 JPY (20 percent loss vs principal, plus lost coupons) |
| Stock breached barrier and stayed low | 500 (knock-in triggered, finished low) | 1000 shares delivered at 500 = 500,000 JPY (50 percent loss vs principal, plus lost coupons) |
| Stock breached barrier severely | 200 (knock-in triggered, severe decline) | 1000 shares delivered at 200 = 200,000 JPY (80 percent loss vs principal, plus lost coupons) |

### Knock-in observation type matters

| Observation type | Effect |
|---|---|
| Continuous (any-time) knock-in | Most aggressive; even intraday touch triggers; common in older Japan retail EB |
| Daily-close observation | Less aggressive; only end-of-day reading matters |
| European (maturity-only) observation | Least aggressive; only final price matters |

Continuous knock-in is materially more risky than European; many retail buyers did not understand the distinction.

## Pricing components for the dealer

The dealer prices the embedded derivative based on:

| Input | Effect on note coupon |
|---|---|
| Underlying implied volatility | Higher vol → higher option premium → higher coupon |
| Correlation (worst-of) | Lower correlation → higher worst-of vol → higher coupon |
| Underlying dividend yield | Higher dividend → lower call value → can reduce or raise coupon depending on structure |
| Underlying borrow cost | Higher borrow → lower call value → affects autocall probability |
| Reference issuer credit spread | Higher issuer credit → bond floor lower → coupon adjusted |
| Risk-free yield curve | Higher rates → bond floor higher / lower depending on direction |
| Barrier level | Lower barrier → less option value → lower coupon |
| Autocall threshold | Lower threshold → higher autocall probability → higher coupon |
| Note maturity | Longer maturity → more option value → higher coupon |

### Dealer fee load

The retail purchase price equals fair value plus arranger fee plus distributor fee. Industry-aggregate analysis of Japan retail EB historically suggested total fee load of 3-10 percent of notional embedded at issuance, sometimes higher for the most complex worst-of structures. The fee load was not transparently disclosed in older sales documentation.

### Hedging

The dealer hedges back-to-back:

| Risk | Hedge instrument |
|---|---|
| Equity delta | Short underlying stock(s) |
| Equity gamma (barrier proximity) | Active stock or listed option hedging |
| Equity vega | Listed or OTC equity option positions |
| Barrier risk (gap-down scenarios) | Difficult to hedge; warehoused by dealer |
| Correlation (worst-of) | OTC correlation trades; warehoused by dealer |
| Issuer credit | Issuer's own bond / CDS hedging |
| Interest rate | Swap hedging |

Dealer concentration in EB hedging on individual Japanese stocks can become a meaningful flow when many notes share the same reference name.

## Retail-investor loss case studies

EB knock-in distribution coincided with several high-profile retail-loss episodes. Publicly reported general patterns (not specific transaction detail):

| Episode | Pattern |
|---|---|
| 2018-2019 Japan financial stocks | EB notes referencing Japan bank / insurer stocks triggered knock-ins during 2018 sell-offs |
| 2020 Q1 COVID crash | Worst-of basket EBs with global underlyings triggered widespread knock-ins as multiple references simultaneously fell |
| 2020-2021 individual stock blowups | Single-name EBs on names that suffered idiosyncratic drops (e.g., SoftBank Group during Vision Fund mark-downs, individual tech names) triggered knock-ins |
| 2022 H1 global equity sell-off | EB notes referencing US tech and Japan tech stocks triggered widespread knock-ins |
| 2022 H2 SoftBank Group volatility | Single-name SoftBank EB notes triggered knock-ins during the sustained drawdown |

The pattern recurring through these episodes: retail buyers often did not anticipate the binary loss profile and were surprised when the knock-in was triggered. JSDA / FSA aggregated complaint data showed pronounced spikes after each episode.

### Background to enforcement

The FSA, under the **"Customer First"** (顧客本位の業務運営) framework, escalated supervisory attention on retail structured-bond distribution from 2021. The October 2022 public statement by the FSA explicitly flagged structured bond (仕組債) suitability and disclosure as a high-priority issue.

### Administrative orders 2023

The FSA, JSDA, and SESC took coordinated enforcement actions in 2023:

| Distributor | Action category |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | Business-improvement order regarding structured-bond (including EB) sales process and suitability |
| [[securities-firms/smbc-nikko|SMBC Nikko Securities]] | Business-improvement order; senior management accountability around suitability process |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | Business-improvement order; suitability and disclosure improvements |
| Multiple regional bank-aligned brokerages | Localized administrative actions and self-suspensions |

The enforcement actions specifically called out EB knock-in distribution as the most acute suitability issue. Disclosure of fee load, scenario analysis (loss illustration), and customer-appropriateness assessment were the principal failure points.

### Distributor response

Major distributors took voluntary actions ahead of and following enforcement:

| Action | Distributors |
|---|---|
| Suspended new EB knock-in retail sales | Multiple major distributors during 2023 |
| Restricted distribution to qualified or specifically-approved customers | Several distributors adopted age / knowledge / experience thresholds |
| Enhanced disclosure and recording requirements | Industry-wide via JSDA self-regulatory updates |
| Exited retail structured-bond sales entirely | Some regional bank-aligned brokerages |
| Shifted retail product mix toward simpler alternatives | Many distributors emphasized plain-vanilla bonds, balanced funds, NISA-eligible funds |

### Volume impact

JSDA / FSA aggregated industry statistics indicated that retail EB knock-in sales contracted very significantly from 2022 to 2023. Many distributors reduced EB sales by 80 percent or more.

### Suitability assessment

| Requirement | Detail |
|---|---|
| Knowledge / experience test | Customer must demonstrate understanding of barrier-option mechanics |
| Risk profile match | Customer's risk tolerance must explicitly cover possibility of 50+ percent loss |
| Age thresholds | Special procedures for customers above defined age thresholds (typically 75 or 80) |
| Concentration limit | Cap on percentage of customer financial assets in structured products |
| Repeat-purchase scrutiny | Special review for customers buying multiple structured products in short period |

### Disclosure requirements

| Item | Required disclosure |
|---|---|
| Total fee load | Explicit disclosure of arranger and distributor fees |
| Loss scenarios | Specific numerical loss illustrations under several adverse scenarios |
| Knock-in mechanics | Plain-language explanation of barrier, observation type, and delivery mechanism |
| Worst-of feature explanation | Explicit warning that worst-of is not diversification |
| Comparison alternatives | Reference to simpler products achieving similar objectives |
| Cooling-off period | Right to cancel during specified period |

### Sales process

| Step | Requirement |
|---|---|
| Recording | Mandatory recording of sales conversations for higher-risk products |
| Confirmation | Customer written confirmation of risk understanding |
| Review | Second-line review of sales appropriateness above thresholds |
| Documentation | Retention of suitability assessment for regulatory review |

## Comparison to convertible bond market

The institutional [[finance/japan-convertible-bond-mechanics|convertible bond market]] uses similar underlying mathematics (embedded equity derivative + bond floor) but with different distribution and protection profile:

| Dimension | Retail EB knock-in | Institutional convertible bond |
|---|---|---|
| Buyer | Retail individuals via brokerage | Institutional investors (convertible arb funds, asset managers, insurance) |
| Suitability framework | Retail suitability + senior-customer protection | Qualified institutional investor framework |
| Embedded derivative | Short down-and-in put | Long call option |
| Direction of equity exposure | Short equity downside (binary) | Long equity upside (asymmetric) |
| Tail risk | 50+ percent loss possible | Floor at bond value (plus credit risk) |
| Disclosure standard | Tightened retail-protection rules post-2023 | Institutional EDINET / TDnet standard |
| Regulator focus | Customer-First enforcement | Disclosure and insider-trading framework |

The contrast is sharp: institutional convertibles give buyers asymmetric upside; retail EB knock-ins give buyers asymmetric downside in exchange for a coupon.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Customer First operating-principles policy materials; 2022-2023 administrative orders on major securities firms.
- FSA: structured-bond supervisory expectations and follow-up monitoring materials.
- JSDA: self-regulatory updates on structured-bond suitability and disclosure; member rules and templates.
- SMBC Nikko, Daiwa, Nomura: public IR materials referencing retail wealth-management segment trends and structured-product distribution restrictions.
