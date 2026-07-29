---
title: "Japan interest-rate derivatives overview"
aliases:
  - "japan-interest-rate-derivatives-overview"
  - "Japan rates derivatives ecosystem"
  - "JPY rates derivatives market map"
  - "Japan IRS OIS swaption JGB futures overview"
  - "TOMS clearing platform"
  - "Japan derivatives regulatory framework"
  - "FIEA derivatives oversight"
  - "JPX derivatives ecosystem"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, overview, IRS, OIS, swaption, JGB-futures, TONA-futures, FIEA, JSCC]
status: active
sources:
  - "BOJ BIS survey results — https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm"
  - "BIS OTC derivatives statistics — https://www.bis.org/statistics/derstats.htm"
  - "JPX JGB futures specifications — https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html"
  - "JPX three-month TONA futures — https://www.jpx.co.jp/english/derivatives/products/interest-rate/3m-tona-futures/index.html"
  - "JSCC IRS eligible products — https://www.jpx.co.jp/jscc/en/cash/irs/product.html"
  - "FSA OTC-derivative reporting guidelines — https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf"
---

# Japan interest-rate derivatives overview

## TL;DR

Japan's interest-rate derivatives ecosystem includes yen IRS, TONA OIS, yen swaptions, JGB futures, three-month TONA futures, and asset swaps, together with clearing and regulatory infrastructure. BIS, BOJ, JPX, and JSCC publish different measures—turnover, outstanding notional, contract volume, and cleared positions—which must not be combined into a single unsupported market-size claim.

The market is regulated under the Financial Instruments and Exchange Act (FIEA), supervised by the Financial Services Agency (FSA), with central clearing at Japan Securities Clearing Corporation (JSCC) for mandated standardized trades. The Bank of Japan exercises macro influence both through monetary policy (which drives the OIS curve) and through its JGB-purchase program (which influences cash JGB and JGB futures markets).

For FinWiki, this entry is the domain anchor: it routes the constituent instrument pages, summarizes the market-participant landscape, and lays out the regulatory and infrastructure framework that underlies all subsequent rates-derivatives entries.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the rates-cluster anchor. Read it together with the constituent pages: [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/jgb-futures-curve]], and [[derivatives/yen-basis-swap-market]]. The cash side and BoJ policy framework are in [[money-market/INDEX]] and [[money-market/boj-open-market-operations]]; the clearing infrastructure is in [[securities/japan-securities-clearing-corp]].

## Principal Instrument Types

| Instrument | Market venue | Contractual reference | Public specification boundary | Anchor page |
|---|---|---|---|---|
| Yen IRS | OTC; eligible products can be submitted to JSCC | TONA OIS and specified D-TIBOR products under JSCC rules | Eligibility is not the same as a legal clearing obligation | [[derivatives/japan-irs-market]] |
| Yen OIS | OTC; eligible products can be submitted to JSCC | Compounded uncollateralized overnight call rate (TONA) | Conventions and tenor are transaction-specific | [[derivatives/ois-tona-curve]] |
| Yen swaption | OTC | A specified underlying yen IRS | Exercise, settlement, and underlying terms are confirmation-specific | [[derivatives/japan-swaption-market]] |
| Physically delivered JGB futures | Osaka Exchange; JSCC-cleared | 5-year, 10-year, and mini 20-year notional JGB contracts | JPX publishes current contract size, tick, expiry, and delivery rules | [[derivatives/jgb-futures-curve]] |
| Mini 10-year JGB futures | Osaka Exchange; JSCC-cleared | 10-year JGB futures price | Cash-settled and distinct from physically delivered contracts | [[derivatives/jgb-futures-curve]] |
| Three-month TONA futures | Osaka Exchange; JSCC-cleared | 100 minus the three-month compounded TONA rate | Cash-settled under the JPX specification | [[derivatives/ois-tona-curve]] |
| Asset swap | OTC | Contractually combined cash-bond and interest-rate-swap exposure | Terms and clearing treatment depend on the component transactions | [[derivatives/japan-irs-market]] |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/interest-rate/3m-tona-futures/index.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html]

The measures published for OTC and listed products are not directly comparable: OTC datasets commonly report notional or market value, while JPX publishes contract volume and open interest.

## Cross-Currency Bridge

The yen rates ecosystem connects to the dollar (and euro) rates ecosystem through:

| Bridge | Instrument | Anchor |
|---|---|---|
| Yen-dollar cross-currency basis swap | OTC CCBS | [[derivatives/yen-basis-swap-market]] |
| Yen FX forwards / FX swaps | OTC FX-derivatives | (W8-B planned `derivatives/japan-fx-swap-market.md`) |
| Yen-denominated foreign issuance (Samurai, Uridashi) swapped back to home currency | Combined OTC IRS + CCBS | Covered in [[finance/INDEX]] |

These bridges mean Japan rates derivatives cannot be analyzed in isolation; balance-sheet pressure on global dealers in any major currency can transmit to JPY-rates pricing via the basis swap and FX-swap markets.

## Market Participants

The participant set spans dealers, end-users, and infrastructure:

| Category | Publicly verifiable role |
|---|---|
| Registered financial-instrument firms and other derivatives dealers | Execute or intermediate transactions within the scope of their registration and applicable conduct rules |
| Banks, insurers, corporates, asset managers, and other end users | May hedge or take rate exposure; a particular institution's direction requires transaction or portfolio evidence |
| Osaka Exchange | Lists the JGB and three-month TONA futures described above |
| JSCC | Clears eligible listed derivatives and OTC IRS under its published rules |
| FSA | Administers the applicable regulatory, clearing, and reporting framework |
| BOJ | Publishes TONA and market statistics and implements monetary policy |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm]

No public source used here establishes a current dealer ranking or a universal end-user direction.

## Daily Turnover

Aggregate daily turnover (notional) across JPY interest-rate derivatives:

| Source | Measure and interpretation |
|---|---|
| BIS Triennial Central Bank Survey | Triennial OTC interest-rate turnover by currency, instrument, counterparty, and location; vintage and adjustment basis must be stated |
| BIS semiannual OTC derivatives statistics | Outstanding notional and gross market value at reporting dates; these are stocks, not daily turnover |
| BOJ Japan portion of BIS surveys | Japan-reporting-dealer results whose location basis differs from global currency totals |
| JPX statistics | Listed contract volume and open interest; contract counts are not directly comparable with OTC notional |

Sources: ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm] ^[source:https://www.jpx.co.jp/english/markets/statistics-derivatives/index.html]

Raw levels must not be compared without aligning reporting period, location/currency basis, instrument scope, and units.

## Regulatory Framework

The principal regulatory layers governing Japan rates derivatives:

| Layer | Evidence-bounded description |
|---|---|
| Financial Instruments and Exchange Act (FIEA, 金融商品取引法) | Statutory framework covering securities, derivatives, market intermediaries, disclosure, and market conduct. |
| FSA rules and supervision | Applicable registration, conduct, clearing, margin, and reporting requirements depend on product and counterparty scope |
| OTC-derivative reporting | FSA guidelines define reportable information, reporting entities, and submission routes; “all trades” should not be inferred without testing scope and exemptions |
| JSCC clearing | JSCC publishes eligible IRS products and rules; product eligibility alone does not prove that a specific trade is legally mandated to clear |
| Contract documentation | ISDA definitions and bilateral terms can govern OTC trades, subject to applicable Japanese law and CCP rules |

Sources: ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/rule/rule_irs.html]

## JSCC IRS Clearing

Key JSCC clearing features for OTC IRS:

| Feature | Detail |
|---|---|
| Eligible products | OIS, D-TIBOR IRS, D-TIBOR tenor swaps, OIS basis swaps, and OIS-versus-D-TIBOR basis swaps under the published product criteria |
| Client clearing | JSCC publishes a client-clearing framework alongside clearing-participant access |
| Rules | Product, acceptance, margin, and default-management details are governed by the current IRS rules and procedures |
| Scope caution | Eligibility, voluntary submission, and a statutory clearing obligation are separate questions |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/otc/client.html] ^[source:https://www.jpx.co.jp/jscc/en/rule/rule_irs.html]

See [[securities/japan-securities-clearing-corp]] for the CCP infrastructure detail and [[securities/japan-market-infrastructure-map]] for the broader clearing-settlement ecosystem.

## Public Data Surface

| Source | What it shows |
|---|---|
| BoJ Money Market and Tokyo Money Market Survey | Aggregate JPY money-market and derivatives transaction patterns; semi-annual / annual surveys. |
| BoJ statistics: BIS OTC derivatives Japan portion | JPY interest-rate derivatives notional and gross market value semi-annually. |
| BIS OTC Derivatives Statistics | Global aggregate JPY derivative outstanding, slicing by counterparty type, instrument, and currency. |
| BIS Triennial Central Bank Survey | Triennial turnover snapshot. |
| ISDA SwapsInfo | Weekly aggregated cleared and bilateral notional traded. |
| JPX volume statistics | Monthly listed-derivatives volume and open interest. |
| JSCC public disclosures | Clearing volumes, member counts, default-fund size (where disclosed). |
| FSA supervisory disclosures | Periodic supervisory commentary and aggregated market-structure data. |
| Dealer-bank IR | Aggregate markets-segment revenue commentary. |

Sources: ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm] ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/statistics.html]

These surfaces support aggregate comparisons only after aligning vintage, scope, and units. They do not by themselves establish dealer concentration, individual-trade pricing, specific counterparty exposures, or proprietary dealer P&L.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market surface; Tokyo Money Market Survey.
- Bank of Japan: Japan portion of BIS Semi-annual OTC Derivatives Statistics.
- BIS: Semi-annual OTC Derivatives Statistics; Triennial Central Bank Survey of FX and OTC Derivatives.
- Japan Exchange Group (JPX) / Osaka Exchange (OSE): listed derivatives product surface; volume and open-interest statistics.
- Japan Securities Clearing Corporation (JSCC): clearing rules, eligible products list, clearing-volume disclosures.
- Financial Services Agency (FSA): FIEA framework and supervisory guidance.
- ISDA: SwapsInfo weekly aggregated transaction data; ISDA Master Agreement framework documentation.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: IBOR transition reports.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- Dealer-bank IR releases: MUFG, SMFG, Mizuho FG, Nomura HD, Daiwa Securities Group quarterly disclosures.
