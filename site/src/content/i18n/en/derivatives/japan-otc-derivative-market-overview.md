---
source: derivatives/japan-otc-derivative-market-overview
source_hash: d3d97f040b545510
lang: en
status: machine
fidelity: ok
title: "Japan OTC derivative market overview"
translated_at: 2026-05-31T03:19:56.497Z
---

# Japan OTC derivative market overview

## TL;DR

Japan's **over-the-counter (OTC) derivative market** spans four product clusters — interest-rate, FX, credit, and equity / structured — all governed under the Financial Instruments and Exchange Act (FIEA), supervised by the Financial Services Agency (FSA), and (for in-scope products) cleared at the Japan Securities Clearing Corporation (JSCC) with trade-reporting to a designated trade repository. Yen interest-rate OTC derivatives are the largest cluster by notional outstanding; FX OTC is the largest by daily turnover (driven by retail FX, [[derivatives/retail-fx-margin-trade-japan]]); credit OTC is the smallest by notional but materially active for index trades; equity / structured OTC is dominated by retail structured-bond distribution and dealer-bank hedging.

This entry is the cross-product anchor that ties the four OTC product clusters together. For listed-derivative coverage (JGB futures, TONA futures, Nikkei 225 futures and options), see [[derivatives/INDEX]] and [[securities/japan-market-infrastructure-map]].

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the OTC market anchor. Pair it with [[derivatives/japan-interest-rate-derivatives-overview]] for the rates-side anchor, [[derivatives/otc-clearing-jp-trade-repository]] for the clearing and reporting infrastructure, and [[derivatives/dealer-bank-derivatives-revenue-mix]] for the dealer franchise economics. The listed-derivative comparison sits in [[derivatives/jgb-futures-curve]] and [[derivatives/japan-equity-derivatives-product-matrix]].

## The Four OTC Product Clusters

| Cluster | Principal instruments | Notional scale | Liquidity center | Anchor pages |
|---|---|---|---|---|
| Interest-rate OTC | Yen IRS, yen OIS, yen swaption, cross-currency basis swap, asset swap, inflation swap, CMS | Trillions of USD-equivalent (BIS semi-annual) | OTC, much cleared at JSCC | [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/yen-basis-swap-market]], [[derivatives/japan-swaption-market]], [[derivatives/japan-inflation-swap]], [[derivatives/japan-cms-constant-maturity-swap]] |
| FX OTC | FX forward, FX swap, FX option, NDF (where relevant), cross-currency swap, retail FX margin | Hundreds of billions of USD-equivalent daily | OTC, mostly bilateral; retail FX cleared / netted via FX dealers | [[derivatives/fx-options-japan-corporate-treasury]], [[derivatives/retail-fx-margin-trade-japan]], [[derivatives/fx-stp-broker-aggregation]] |
| Credit OTC | Single-name CDS (Japan corporates), iTraxx Japan index, basis trade, recovery swap | Tens of billions of USD-equivalent | OTC, mostly bilateral; JSCC operates a designated CDS clearing service | [[derivatives/japan-cds-market-overview]], [[derivatives/cds-japan-corporate-spread-mechanics]], [[derivatives/basis-trade-bond-cds-japan]] |
| Equity / structured OTC | Equity-linked swaps, single-stock options, variance swaps, structured bonds (EB, knock-in, PRDC), repackaging notes | Variable; dominated by retail structured-bond issuance and dealer-bank hedging | OTC bilateral | [[derivatives/structured-bond-japan-retail-issuance]], [[derivatives/structured-product-eb-knockin-japan-retail]], [[derivatives/japan-single-stock-options]], [[derivatives/equity-volatility-hedging-corporates-japan]] |

The OTC market is structurally separate from the exchange-traded derivative market (JGB futures, TONA futures, Nikkei 225 futures and options on OSE), but the two markets are tightly coupled through dealer-bank hedging and end-user portfolio decisions.

## Market Participants

| Category | Role |
|---|---|
| Megabank-affiliated securities firms | MUFG Securities, SMBC Nikko, Mizuho Securities — dominant JPY rates / FX / structured franchise. |
| Independent Japanese securities firms | Nomura, Daiwa, Mitsubishi UFJ Morgan Stanley — strong yen franchise plus cross-border. |
| Global investment banks | JPMorgan, Goldman, Citi, Morgan Stanley, Deutsche Bank, Barclays, BNP Paribas, HSBC, UBS. |
| Domestic banks (end-users) | Megabanks treasury, regional banks, trust banks, Norinchukin Bank — primarily ALM hedging. |
| Life insurers (end-users) | Long-tenor receive-fixed flow for policy-reserve duration matching. |
| Non-life insurers (end-users) | Smaller-scale ALM hedging plus FX-linked liability hedges. |
| Corporates (end-users) | Floating-to-fixed loan hedging, foreign-issuance swap-back, FX revenue hedging, capital-structure hedging. |
| Foreign macro / hedge funds | Tactical Japan-rate and credit positioning. |
| Pension funds / asset managers | Duration management on JPY fixed-income mandates. |
| Inter-dealer brokers | ICAP / Tradition / BGC / Tullett Prebon — anonymous execution and price discovery. |
| CCP | JSCC — central clearing of mandated yen IRS / OIS and designated CDS. |
| Trade repository | DTCC Data Repository Japan — designated TR for FIEA reporting. |
| Regulator | FSA under FIEA. |
| Central bank | BoJ — macro driver and surveillance role. |

The dealer franchise is the structural backbone. See [[JapanFG/mufg-bank]], [[JapanFG/sumitomo-mitsui-banking-corp]], [[JapanFG/mizuho-bank]] for parent-FG context.

## Regulatory Framework

| Layer | Detail |
|---|---|
| FIEA | Statutory framework for OTC derivative dealing, reporting, clearing, and conduct. |
| FSA supervision | Supervises FIEA-registered dealers, JSCC as CCP, and trade-repository operations. |
| Mandatory clearing | FSA-designated standardized yen IRS and certain CDS must clear at JSCC. |
| Trade reporting | All FIEA-regulated entity OTC derivative trades must report to a designated TR. |
| ISDA documentation | Most OTC trades use ISDA Master Agreement (1992 or 2002 form) plus CSAs, ISDA 2020 protocol. See [[derivatives/isda-2020-protocol-japan-implementation]]. |
| Capital and margin | Basel III RWA, leverage ratio, NSFR, LCR. Uncleared Margin Rules (UMR) for non-cleared bilateral derivatives. |
| Equivalence regimes | EMIR equivalence for JSCC; CFTC substituted-compliance / equivalence elements for clearing and reporting. |

See [[derivatives/otc-clearing-jp-trade-repository]] for the clearing and reporting infrastructure detail.

## Public Data Sources

| Source | What it shows |
|---|---|
| BIS Semi-annual OTC Derivatives Statistics | JPY OTC notional and gross market value, sliced by counterparty type, instrument, and currency. |
| BIS Triennial Central Bank Survey | Turnover snapshot for FX and OTC interest-rate derivatives. |
| BoJ Tokyo Money Market Survey | Aggregate JPY money-market and derivatives transaction patterns. |
| ISDA SwapsInfo | Weekly cleared and bilateral notional for major IRS currencies, including JPY. |
| JSCC monthly clearing statistics | JSCC IRS and CDS cleared volume, open interest, default-fund size (where disclosed). |
| FSA supervisory disclosures | Periodic supervisory commentary and aggregated market-structure data. |
| Dealer-bank IR | Aggregate markets-segment revenue commentary. |

For specific figures, cite the exact source release and survey vintage because notional outstanding, gross market value, and turnover are different concepts reported at different periodicity.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-rates-derivative-product-matrix]]
- [[derivatives/japan-equity-derivatives-product-matrix]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/isda-2020-protocol-japan-implementation]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[money-market/INDEX]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank for International Settlements (BIS): Semi-annual OTC Derivatives Statistics; Triennial Central Bank Survey of FX and OTC Derivatives.
- Bank of Japan: paym/market surface; Tokyo Money Market Survey; Japan portion of BIS semi-annual OTC derivatives data.
- Japan Securities Clearing Corporation (JSCC): IRS clearing scope and rules; CDS clearing service; monthly clearing statistics.
- Financial Services Agency (FSA): FIEA supervision of OTC derivatives, mandatory clearing scope, trade-reporting rules.
- International Swaps and Derivatives Association (ISDA): SwapsInfo weekly aggregate transactions; ISDA Master Agreement framework documentation.
- Japan Exchange Group (JPX) / Osaka Exchange (OSE): listed-derivatives reference for cross-comparison.
- DTCC Data Repository Japan: designated TR for FIEA-regulated entity OTC derivative reporting.
