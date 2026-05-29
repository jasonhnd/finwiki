---
title: "Structured bond Japan retail issuance"
aliases:
  - "structured-bond-japan-retail-issuance"
  - "shikumisai issuance"
  - "仕組債"
  - "Japan structured note retail"
  - "Japan equity-linked note retail"
  - "Japan reverse convertible retail"
  - "Japan currency-linked deposit"
  - "FSA suitability crackdown structured bond"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, structured-bond, shikumisai, equity-linked-note, reverse-convertible, currency-linked-deposit, fsa-suitability, megabank-securities, retail-investor, distribution]
status: active
sources:
  - "https://www.fsa.go.jp/"
  - "https://www.fsa.go.jp/news/r4/syouken/20221017/20221017.html"
  - "https://www.fsa.go.jp/en/news/2023/20230420/01.html"
  - "https://www.jsda.or.jp/en/"
  - "https://www.jsda.or.jp/en/activities/research-studies/"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://www.fsa.go.jp/policy/customer_first/index.html"
  - "https://www.smbcnikko.co.jp/"
  - "https://www.daiwa.jp/"
  - "https://www.nomura.co.jp/"
---

# Structured bond Japan retail issuance

## TL;DR

"Structured bond" (仕組債, *shikumisai*) is the umbrella Japanese term for retail-facing fixed-income products that embed derivative payoffs — typically equity-linked notes (EB, *Equity Bond*) with knock-in barriers, currency-linked deposits, reverse-convertible bonds with put-strike-at-discount, and digital / range-accrual notes. These products were distributed at scale by megabank-affiliated securities firms ([[JapanFG/smbc-nikko|SMBC Nikko]], [[JapanFG/mizuho-bank|Mizuho]] Securities, MUFG / MUMSS), independent retail brokerages ([[JapanFG/daiwa-sg|Daiwa]], [[JapanFG/nomura-hd|Nomura]]), and regional banks to **chasing-yield retail investors** during Japan's prolonged low-yield environment. The **2022-2023 FSA crackdown** on suitability and disclosure resulted in administrative orders against [[JapanFG/nomura-hd|Nomura]], [[JapanFG/smbc-nikko|SMBC Nikko]], and [[JapanFG/daiwa-sg|Daiwa]] subsidiaries, forced major distributors to suspend or restrict structured-bond sales to elderly / low-knowledge retail, and elevated **suitability and disclosure** as a structural regulatory priority. New retail issuance contracted sharply from 2023 onward.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the retail-structured-product distribution page, paired with [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in structured product mechanics]] for the deepest single-name EB analysis. Read it together with [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the credit-derivative ingredient (some structured bonds embed credit-linked tranches), [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the credit-spread building block, [[derivatives/japan-irs-market|Japan IRS market]] for the rates underlay, and [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve interaction with FX-linked products.

Cross-reference [[finance/INDEX|finance index]] for the broader capital-markets context, [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the institutional equity-linked counterpart, [[banking/INDEX|banking index]] for the megabank distribution context, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the institutional foreign-currency / structured-asset use, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer-side hedging plumbing.

### Core structured-bond categories

| Product | Japanese term | Payoff core |
|---|---|---|
| Equity Bond (EB) with knock-in barrier | EB債 / 株価連動債 | Pays par + coupon unless underlying stock breaches knock-in barrier, then pays in shares or barriered amount |
| Autocallable EB / Express | オートコーラブル | Pays accelerated coupon and full redemption if underlying breaches autocall threshold on observation date; otherwise continues |
| Reverse convertible | リバース・コンバーチブル | High-coupon bond with put-option-short embedded; redemption in shares if stock below strike |
| Currency-linked deposit (二重通貨預金) | 二重通貨預金 / デュアルカレンシー | Deposit pays high yen yield; principal redeemed in non-yen currency at predetermined rate (currency-short embedded) |
| Power reverse dual-currency note (PRDC) | パワーリバース | Long-dated FX-linked yen-paying / dollar-paying note; complex Bermudan callable structure |
| Credit-linked note (CLN) | クレジット・リンク債 | Bond paying enhanced coupon contingent on reference credit not defaulting |
| Range-accrual note | レンジアクルアル | Coupon accrues only on days when reference rate / FX / index stays within range |
| Digital / one-touch note | デジタル | Pays large coupon if reference touches / exceeds threshold, else nothing |
| Equity index-linked note (basket) | バスケット型 | Payoff linked to worst-of basket (typically Nikkei 225, S&P 500, EuroStoxx 50) |

EB knock-in (especially autocallable on single Japanese stock or worst-of basket) was the dominant retail-distributed product by volume during the peak 2018-2022 period.

### Structure variations

| Feature | Description |
|---|---|
| Single-name underlying | Most distributed retail EB referenced single Japanese listed stock (e.g., Toyota, Sony, SoftBank, NTT) |
| Worst-of basket | Three to five reference assets; payoff worst-of, increasing risk |
| Autocall threshold | Typically 100 percent of initial reference (paid back at par + coupon if up on observation date) |
| Knock-in barrier | Typically 50-70 percent of initial reference |
| Coupon | Conditional coupon (paid only if no knock-in trigger) or unconditional fixed coupon |
| Maturity | Typically 3-5 years; autocall feature shortens expected life |
| Currency | Issued in JPY for retail Japan; some USD or EUR issued for currency-overlay variants |
| Callable feature | Bermudan callable in some structures |

### Issuer set

| Issuer type | Role |
|---|---|
| Global banks (special-purpose vehicles) | Goldman, JPMorgan, Morgan Stanley, BNP Paribas, Credit Suisse (historically), HSBC, Citi, Barclays issued via SPV programs |
| Japan-domiciled megabank programs | [[JapanFG/mufg|MUFG]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] (via SMFG), [[JapanFG/mizuho-bank|Mizuho]] (via Mizuho FG) issued through dedicated programs |
| European bank issuers | Société Générale, BNP, Credit Suisse, UBS historically dominant in structured-product origination |
| US bank issuers | Goldman, JPM, MS, Citi |
| Tokyo-listed special-purpose issuance vehicles | Less common; most structured bonds issued offshore for tax / regulatory efficiency |

### Distribution channel

| Distributor | Distribution model |
|---|---|
| [[JapanFG/smbc-nikko|SMBC Nikko]] | Megabank-aligned full-service brokerage; key distributor through 2022 |
| Mizuho Securities (via [[JapanFG/mizuho-bank|Mizuho]] FG) | Megabank-aligned full-service brokerage; key distributor through 2022 |
| MUFG / MUMSS (via [[JapanFG/mufg|MUFG]]) | Megabank / global JV brokerage; major distributor |
| [[JapanFG/daiwa-sg|Daiwa Securities]] | Independent retail brokerage; historically very active in structured-bond distribution |
| [[JapanFG/nomura-hd|Nomura Securities]] | Largest retail brokerage; significant distributor |
| Regional banks (sub-distribution) | Sub-distribute structured products from megabank securities partners |
| Online brokerages | Less active in complex structured bonds; some plain-vanilla structured deposits |

### Arranger fees

Arranger and distributor fees on structured bonds were historically a significant slice of product economics, embedded in the issue-price-vs-fair-value gap. The **fee load** (typically 3-10 percent of notional, sometimes higher for complex structures) became a key element of the FSA crackdown.

## Hedging mechanics

The issuer typically hedges the embedded derivative back-to-back with a dealer:

| Position | Hedge |
|---|---|
| Issuer is long bond, short embedded derivative (knock-in put, autocall call, FX option, etc.) | Issuer enters back-to-back derivative trade with dealer that takes the opposite position |
| Dealer warehouse | Dealer aggregates exposure, runs delta / vega / barrier-gamma hedging in equity / FX / credit markets |
| Risk recycling | Dealer may re-distribute risk via index trades, listed options, OTC inter-dealer trades |

For Japan single-name EB, dealer hedging in the underlying stock can become a meaningful flow when many notes share the same reference name (e.g., concentrated SoftBank EB issuance creates significant SoftBank stock hedge flow).

### Mechanics

| Feature | Description |
|---|---|
| Principal currency | JPY (deposit) |
| Yield | Enhanced JPY coupon (e.g., 3-8 percent annualized) vs prevailing JPY deposit rates |
| Redemption option | At maturity, issuer redeems in JPY at par OR in non-yen currency at predetermined exchange rate |
| Issuer choice | Issuer redeems whichever is cheaper to the issuer (i.e., investor receives whichever is less valuable) |
| Embedded derivative | Investor is implicitly short a JPY-put / non-yen-call option |

Common reference currencies: USD, AUD, NZD, EUR, GBP, ZAR, TRY (historical higher-yielding tail). The TRY-linked variant attracted enforcement and consumer-protection attention given Turkish lira volatility.

### Risk

If the non-yen currency depreciates significantly vs JPY relative to the strike, investor receives non-yen currency worth less than original JPY principal. The losses can be substantial.

### Distribution

Currency-linked deposits historically distributed through megabank retail counters, regional banks, and post-office channels. The simplicity of the wrapper ("deposit" framing) often obscured the embedded short-option risk for retail investors.

### Mechanics

| Feature | Description |
|---|---|
| Coupon | Fixed high coupon paid throughout life |
| Maturity payoff | If reference stock above strike → par redemption; if below → delivery of shares at strike (i.e., investor receives shares worth less than par) |
| Embedded derivative | Investor is short a put option on the reference stock at the strike |
| Reference | Single stock or worst-of basket |

Mechanically similar to EB, but framed more bond-like with the put exercise typically at maturity rather than during the term via knock-in barrier.

### Background

The FSA, under its **"Customer First"** (顧客本位の業務運営, *kokyaku honi no gyōmu un'ei*) initiative since 2017, increasingly scrutinized retail distribution of complex products. Surveys revealed widespread mismatches between structured-bond complexity and retail investor knowledge / experience.

### 2022 FSA findings

Public FSA materials (October 2022) and JSDA self-regulatory updates documented:

| Finding | Concern |
|---|---|
| Knowledge mismatch | Retail buyers often lacked understanding of barrier-option mechanics and tail risk |
| Fee disclosure | Arranger / distributor fee load not adequately disclosed |
| Suitability failures | Sold to elderly retirees, low-knowledge customers, conservative investors mismatched to product risk |
| Concentration | Repeated sales of similar products to same customers created concentrated tail exposure |
| Comparison to alternatives | Failure to present cheaper / simpler alternatives that achieved similar yield enhancement |

### Administrative orders

Between late 2022 and 2023, the FSA issued business-improvement orders and administrative actions against multiple major distributors:

| Distributor | Action category |
|---|---|
| [[JapanFG/nomura-hd|Nomura Securities]] | Business-improvement order regarding structured-bond sales process |
| [[JapanFG/smbc-nikko|SMBC Nikko]] | Business-improvement order; senior management accountability |
| [[JapanFG/daiwa-sg|Daiwa Securities]] | Business-improvement order; suitability process review |
| Multiple regional bank securities arms | Localized administrative actions |

Distributors voluntarily suspended or significantly restricted structured-bond sales to retail. Several firms exited the retail structured-bond business entirely or restricted it to qualified-investor channels.

### JSDA self-regulation

The [[securities/japan-prime-brokerage-and-institutional-financing|JSDA]] tightened self-regulatory guidance on structured-bond suitability:

| Area | Guidance change |
|---|---|
| Suitability assessment | Stricter knowledge / experience tests; written confirmation requirements |
| Disclosure | Standardized risk-disclosure templates; explicit "loss scenario" illustrations |
| Cooling-off | Enhanced cooling-off and recourse channels |
| Recording | Mandatory recording / documentation of sales conversations |
| Senior-customer protections | Special procedures for customers above defined age thresholds |

### Volume impact

Public JSDA / FSA aggregated data indicated that retail structured-bond sales volumes contracted very significantly from 2022 to 2023. Distribution shifted away from "knock-in EB" products toward simpler structured deposits and / or higher-grade plain-vanilla bonds.

## Comparison to global structured-product retail markets

| Jurisdiction | Retail structured-product market character |
|---|---|
| Japan (pre-2023) | Very large retail volumes; megabank-affiliated brokerages dominant distributors |
| Japan (post-2023) | Significantly contracted; restrictions on elderly / low-knowledge retail |
| EU (post-PRIIPs 2018) | KID disclosure mandatory; volumes recovered but disclosure burden raised |
| UK (post-FCA 2014) | Suitability rules tightened; volumes shrank materially |
| Hong Kong (post-Lehman minibond 2008) | Strict suitability and concentration rules introduced |
| US | Mostly institutional / accredited investors; retail structured-products via specific distribution channels |

Japan's 2023 crackdown represents a significant catch-up to global retail-protection standards rather than a unique regulatory approach.

## Institutional structured-bond market

Beyond retail, an institutional structured-bond market continues for:

- pension funds and life insurers seeking yield-enhanced credit product (subject to ESR / accounting constraints, see [[insurance/japan-life-insurance-alm-overview|life ALM]]);
- corporate treasury operations using structured liability or asset wrappers;
- asset manager portfolios for specific overlay or yield-enhancement objectives.

Institutional structured bonds are subject to different suitability standards (qualified institutional investor framework under FIEA) and continue with limited regulatory friction.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[JapanFG/mufg]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Customer First operating-principles policy materials; 2022-2023 supervisory action public releases.
- FSA: business-improvement order public releases on major distributors.
- JSDA: self-regulatory updates on structured-bond distribution; member rules and disclosure templates.
- BOJ: deposit and money-market statistics relevant to structured-deposit yield benchmarks.
- SMBC Nikko, Daiwa, Nomura: public IR materials on retail wealth-management business segment trends.
