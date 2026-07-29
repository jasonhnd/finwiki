---
source: derivatives/japan-otc-derivative-market-overview
source_hash: e558e49e5ae0da2f
lang: en
status: machine
fidelity: ok
title: "Japan OTC derivative market overview"
translated_at: 2026-07-29T21:20:00.000Z
---

# Japan OTC derivative market overview

## TL;DR

Japan's **over-the-counter (OTC) derivative market** spans interest-rate, FX, credit, and equity / structured products. FSA reporting and clearing requirements apply according to product, entity, and counterparty scope; JSCC separately publishes the products it accepts for clearing. Aggregate datasets use different populations and measures, so they do not support an unqualified ranking of the four clusters.

This entry is the cross-product anchor that ties the four OTC product clusters together. For listed-derivative coverage (JGB futures, TONA futures, Nikkei 225 futures and options), see [[derivatives/INDEX]] and [[securities/japan-market-infrastructure-map]].

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the OTC market anchor. Pair it with [[derivatives/japan-interest-rate-derivatives-overview]] for the rates-side anchor, [[derivatives/otc-clearing-jp-trade-repository]] for the clearing and reporting infrastructure, and [[derivatives/dealer-bank-derivatives-revenue-mix]] for the dealer franchise economics. The listed-derivative comparison sits in [[derivatives/jgb-futures-curve]] and [[derivatives/japan-equity-derivatives-product-matrix]].

## The Four OTC Product Clusters

| Cluster | Principal instruments | Relevant public-data surface | Infrastructure boundary | Anchor pages |
|---|---|---|---|---|
| Interest-rate OTC | Yen IRS, OIS, swaption, cross-currency basis swap, inflation swap, CMS | BIS and BOJ aggregate notional, market value, and survey turnover | JSCC publishes an eligible IRS set; eligibility is not identical to a mandate | [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/yen-basis-swap-market]], [[derivatives/japan-swaption-market]], [[derivatives/japan-inflation-swap]], [[derivatives/japan-cms-constant-maturity-swap]] |
| FX OTC | FX forward, FX swap, FX option, and cross-currency swap | BIS and BOJ survey tables, with currency and reporting-location dimensions | Product and counterparty scope determine reporting and clearing treatment | [[derivatives/fx-options-japan-corporate-treasury]], [[derivatives/retail-fx-margin-trade-japan]], [[derivatives/fx-stp-broker-aggregation]] |
| Credit OTC | CDS index and single-name transactions | BIS aggregate statistics and JSCC's current eligible CDS list | JSCC eligibility is defined by its current product criteria | [[derivatives/japan-cds-market-overview]], [[derivatives/cds-japan-corporate-spread-mechanics]], [[derivatives/basis-trade-bond-cds-japan]] |
| Equity / structured OTC | Equity-linked swaps, OTC options, and contract-specific structured exposures | Applicable disclosures and reporting datasets | Bilateral terms and regulatory scope must be checked trade by trade | [[derivatives/structured-bond-japan-retail-issuance]], [[derivatives/structured-product-eb-knockin-japan-retail]], [[derivatives/japan-single-stock-options]], [[derivatives/equity-volatility-hedging-corporates-japan]] |

Sources: ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html]

The OTC market is structurally separate from the exchange-traded derivative market (JGB futures, TONA futures, Nikkei 225 futures and options on OSE), but the two markets are tightly coupled through dealer-bank hedging and end-user portfolio decisions.

## Market Participants

| Category | Evidence-bounded role |
|---|---|
| Registered firms and other dealers | Execute or intermediate transactions within applicable registration and conduct scope |
| Banks, insurers, corporates, funds, and other end users | Hedge or take exposure; direction and size require institution-specific evidence |
| JSCC | Publishes eligible OTC IRS and CDS products and clearing rules |
| Reporting entities and submission routes | Defined by FSA reporting guidance, including applicable scope and exemptions |
| BOJ and BIS | Publish aggregate survey and statistical surfaces |

Sources: ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html]

No source used here establishes a current dealer ranking or a universal end-user trade direction.

## Regulatory Framework

| Layer | Evidence-bounded detail |
|---|---|
| FIEA | Statutory framework for OTC derivative dealing, reporting, clearing, and conduct. |
| FSA reporting framework | Reporting entities, reportable information, timing, and routes are defined by current guidance; do not replace the scope test with “all trades” |
| JSCC product eligibility | Current eligible IRS and CDS products are listed by JSCC; eligibility does not alone prove a legal clearing obligation |
| Contract documentation | ISDA or other terms may govern bilateral transactions, subject to applicable law and CCP rules |
| Margin and capital | Applicable requirements depend on entity, product, clearing status, and threshold scope |

Sources: ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html]

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
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank for International Settlements (BIS): Semi-annual OTC Derivatives Statistics; Triennial Central Bank Survey of FX and OTC Derivatives.
- Bank of Japan: paym/market surface; Tokyo Money Market Survey; Japan portion of BIS semi-annual OTC derivatives data.
- Japan Securities Clearing Corporation (JSCC): IRS clearing scope and rules; CDS clearing service; monthly clearing statistics.
- Financial Services Agency (FSA): FIEA supervision of OTC derivatives, mandatory clearing scope, trade-reporting rules.
- International Swaps and Derivatives Association (ISDA): SwapsInfo weekly aggregate transactions; ISDA Master Agreement framework documentation.
- Japan Exchange Group (JPX) / Osaka Exchange (OSE): listed-derivatives reference for cross-comparison.
- DTCC Data Repository Japan: designated TR for FIEA-regulated entity OTC derivative reporting.
