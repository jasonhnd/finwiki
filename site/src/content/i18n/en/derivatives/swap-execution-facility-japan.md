---
source: derivatives/swap-execution-facility-japan
source_hash: fb88c5223ed8a1f4
lang: en
status: machine
fidelity: ok
title: "Swap execution facility — Japan equivalent (ETP regime)"
translated_at: 2026-05-31T03:19:56.407Z
---

# Swap execution facility — Japan equivalent (ETP regime)

## TL;DR

Japan does not have a US-style "Swap Execution Facility (SEF)" license — but it operates a **functionally equivalent regime** of **Electronic Trading Platforms (ETPs)** for OTC derivatives execution, supervised by the FSA under FIEA. The ETP regime, mandated for designated standardized OTC products (yen IRS in particular), is the Japan analogue of the **Dodd-Frank SEF requirement (US)** and the **MiFID II MTF / OTF requirement (EU)**.

The Japan OTC derivatives execution market combines:

1. **Electronic ETP execution** — multi-dealer request-for-quote (RFQ) and order-book systems offered by **Tradeweb (Tradeweb Japan / Tradeweb FSA-registered ETP)**, **Bloomberg (Bloomberg's electronic-trading services regulated for Japan)**, and other electronic platforms that capture a growing share of standardized yen IRS, OIS, and basis-swap flow;

2. **Voice-brokered execution** — interdealer voice brokers (the "wholesale broker" tier — **ICAP / NEX, BGC Brokers, Tullett Prebon, all under the TP ICAP family or independent legacy brokers**) that intermediate dealer-to-dealer OTC trades, particularly for non-standard maturities, large block trades, and less-liquid product variants;

3. **Bilateral dealer-to-client trading** — direct dealer-client OTC trades via voice, chat, or proprietary single-dealer platforms; the dominant channel for many corporate-end-user trades and bespoke structures.

This entry covers the FIEA ETP regulatory boundary, the leading platforms and brokers operating in Tokyo, the electronic-execution share vs voice-brokered share, the comparison to US SEF and EU MiFID II OTF / MTF regimes, the FSA dealer regulation framework, and the structural reason Japan's electronic OTC execution remains **less concentrated and more voice-broker-heavy** than the US SEF market for comparable products.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the OTC-infrastructure cluster. Read it with [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]] for the post-trade clearing leg, [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] for the underlying yen IRS market, [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for the franchise economics, [[securities/japan-securities-clearing-corp|JSCC]] for the cleared-execution clearing leg, [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the broader plumbing context, and [[securities/japan-best-execution-sor-pts|Japan best execution / SOR / PTS]] for the cash-equity execution comparison.

## Why the ETP regime matters

The post-2008 G20 Pittsburgh framework included a **"trading on platforms" pillar** alongside central clearing and trade-repository reporting. The logic:

- **Pre-trade transparency** — standardized OTC products should be quoted on platforms where multiple dealers compete, narrowing bid-offer spreads for end-users;
- **Best-execution comparability** — buy-side counterparties should be able to compare quotes from multiple dealers;
- **Reduced bilateral opacity** — moving execution from voice / chat to electronic platforms with audit trails supports market-integrity supervision;
- **Liquidity concentration** — multi-dealer RFQ on ETPs aggregates liquidity that bilateral execution fragments.

Implementations vary:

- **US (Dodd-Frank Title VII)** — SEFs, with a "Made Available to Trade (MAT)" determination process triggering the trade-execution requirement for designated products;
- **EU (MiFID II)** — MTFs (multilateral trading facilities) and OTFs (organized trading facilities) under the Trading Obligation for designated derivatives;
- **Japan (FIEA)** — Electronic Trading Platforms (ETPs) under FSA registration / supervision, with designated products subject to the on-platform execution obligation.

The Japan regime is **less prescriptive in scope** than the US SEF rule — fewer products are subject to mandatory electronic execution, and the boundary between voice-brokered and electronic execution is more fluid. This is a deliberate calibration reflecting the smaller domestic dealer count and the historic role of voice brokerage in Tokyo OTC markets.

### Registration and supervision

An entity operating an ETP for OTC derivatives in Japan typically requires:

- **FSA registration as an Electronic Trading Platform operator** under FIEA (with specific category depending on product scope — covering yen IRS, foreign-currency-denominated IRS, CDS where applicable, and other standardized OTC derivatives);
- **Compliance with FSA rules** on market-conduct, pre-trade and post-trade transparency, member-onboarding, system-resilience, and trade-reporting integration with the [[derivatives/otc-clearing-jp-trade-repository|JFSA-designated trade repository]];
- **Clearing-integration arrangements** with [[securities/japan-securities-clearing-corp|JSCC]] for products subject to mandatory clearing.

### Mandatory electronic execution scope

Under FIEA, **designated standardized OTC derivatives** are subject to an on-platform execution obligation when traded between in-scope counterparties. The principal product class subject to this is **yen IRS** with standardized terms (currency, floating-rate index, payment frequency, day count, maturity) — mirroring US SEF MAT determinations for USD IRS.

Out-of-scope (i.e. still allowed to be voice-brokered or bilaterally executed):

- Non-standard maturities;
- Non-standard rate-reference indexes;
- Bespoke structures (callable, amortizing, structured-payoff);
- Trades with out-of-scope counterparties (smaller corporates, end-users below threshold);
- Large block trades above designated thresholds (with block-trade exemption rules).

### Pre-trade and post-trade transparency

ETPs typically publish:

- **Pre-trade indicative quotes** in an RFQ or order-book interface visible to platform members;
- **Post-trade transaction summaries** (anonymized, sometimes delayed) feeding into ISDA SwapsInfo, BIS-aggregate, and BOJ statistics publications;
- **Audit trails** of RFQ submissions, dealer responses, and trade executions.

This is **comparable to MiFID II RFQ transparency** in the EU and the **SEF RFQ rules** in the US, though scope and timing detail differ.

### Electronic platforms

| Platform | Coverage |
|---|---|
| **Tradeweb (Tradeweb Japan)** | Multi-dealer RFQ platform — strong in yen IRS, OIS, JGB cash, JGB repo, and selected FX derivatives. FSA-registered ETP operator. Globally one of the largest fixed-income electronic-trading platforms; Tokyo presence is a tier-1 ETP for institutional flow. |
| **Bloomberg (Bloomberg's electronic-trading services with Japan registration)** | Multi-dealer RFQ across rates, FX, credit, and selected equity derivatives. Bloomberg's BSEF (Bloomberg SEF) is the US-registered SEF; the Japan-facing service operates under FSA registration for the in-scope product set. |
| **MarketAxess (selected fixed-income credit-derivatives RFQ)** | Strong in credit-product electronic execution; Japan presence focused on credit-derivatives and bond-related flow. |
| **JPX-affiliated platforms** | JPX has electronic OTC-derivatives trading initiatives associated with [[financial-regulators/japan-exchange-group|JPX group]]. Scope varies; check current product offering. |

### Interdealer voice brokers

The Japan interdealer voice-broker market is anchored by the **TP ICAP family** (formed from the historic merger of Tullett Prebon and ICAP non-EBS / non-BrokerTec assets) and **BGC Brokers** (now Cantor / BGC family):

| Broker | Coverage |
|---|---|
| **ICAP (TP ICAP brand)** | Historic anchor of Tokyo voice-brokered rates, FX, credit, and emerging-products OTC derivatives. Now part of TP ICAP. Coverage spans yen IRS, OIS, basis swaps, JGB-cash, JGB repo, and FX swaps / options. |
| **Tullett Prebon (TP ICAP brand)** | Sister voice-broker brand within TP ICAP. Tokyo coverage of OTC rates, credit, and structured products. |
| **BGC Brokers** | Cantor / BGC global interdealer broker; Tokyo presence in rates, credit, and selected emerging-products. |
| **Tradition (Compagnie Financière Tradition)** | Independent global voice-broker; Tokyo presence in rates, FX, energy / commodities adjacencies. |
| **Domestic tanshi / money-market interdealer brokers** | The [[money-market/tanshi-company-business-model|tanshi]] tier and other domestic short-end intermediaries operate in adjacent money-market and short-rate spaces — distinct franchise from the global voice brokers but overlapping in the front-end yen rates space. |

### Single-dealer platforms

Each major dealer bank operates **single-dealer platforms** for client-facing OTC execution:

- [[securities-firms/nomura-hd|Nomura]] (NomuraNow);
- [[securities-firms/daiwa-sg|Daiwa SG]] (Daiwa Direct / institutional channels);
- [[securities-firms/smbc-nikko|SMBC Nikko]];
- [[securities-firms/mizuho-securities|Mizuho Securities]];
- [[securities-firms/goldman-sachs-japan|GS Japan]] (Marquee);
- [[securities-firms/morgan-stanley-japan|MS Japan]] (Matrix);
- [[foreign-financial-institutions/jpmorgan-japan|JPM Japan]] (MorganMarkets);
- [[foreign-financial-institutions/citigroup-japan|Citi Japan]] (Velocity).

Single-dealer platforms are not multilateral venues, so they are **not subject to ETP rules per se**, but they integrate with multi-dealer ETPs for RFQ-style execution and feed trade reporting into TRs.

## Electronic execution share vs voice-brokered share

Public-source observations on the electronic / voice split:

| Product class | Approximate electronic share |
|---|---|
| **Standardized yen IRS (benchmark maturities, on-the-run)** | Majority electronic via ETPs (Tradeweb / Bloomberg); a residual voice-brokered share for larger blocks. |
| **OIS referencing TONA (standardized)** | Majority electronic, particularly post-LIBOR transition that drove platform investment in TONA-curve infrastructure. |
| **Cross-currency basis swaps (yen-USD)** | Mixed — electronic share growing but historically voice-brokered for larger / off-the-run trades. |
| **Bespoke / structured IRS (callable, amortizing, swaption-embedded)** | Predominantly voice or bilateral. |
| **Single-name CDS (off-cleared scope)** | Predominantly voice or bilateral. |
| **iTraxx Japan index CDS** | Hybrid — electronic for standard series; voice for off-the-run. |
| **FX options (institutional)** | Mixed — vanilla options often electronic; exotic / structured voice. |
| **Equity OTC derivatives (variance swaps, single-stock swaps)** | Predominantly bilateral / dealer-direct; less electronic-platform penetration than rates. |

The structural pattern: **the more standardized the product, the higher the electronic share**. Bespoke and complex structures remain voice-and-bilateral. This mirrors the US SEF and EU MTF / OTF experience, where electronic execution captured standardized IRS first and gradually extended to adjacent product classes.

## Comparison to US SEF and EU MiFID II OTF / MTF

| Dimension | US (Dodd-Frank SEF) | EU (MiFID II MTF / OTF) | Japan (FIEA ETP) |
|---|---|---|---|
| **Mandatory venue type** | SEF (or DCM) | MTF or OTF | ETP under FSA registration |
| **Mandatory product scope** | "Made Available to Trade" (MAT) determinations for designated swaps (USD IRS, EUR IRS, CDS indexes) | Trading Obligation under RTS 22 for designated derivatives | Designated standardized OTC products (yen IRS in particular) |
| **RFQ minimum** | RFQ-3 (request to at least 3 dealers) for in-scope products | RFQ rules under MiFID II RTS | RFQ rules under FSA / FIEA ETP rules |
| **Pre-trade transparency** | Real-time tradable quotes published by SEF | Pre-trade transparency under MiFID II (with waivers for large-size) | Pre-trade transparency on the ETP (with block-trade exemptions) |
| **Post-trade transparency** | Real-time reporting to SDR (Swap Data Repository) | APA (Approved Publication Arrangement) reporting | Trade-repository reporting (DTCC Japan) with publication arrangements per FSA |
| **Block-trade exemption** | Block-trade rules above designated thresholds | Large-in-scale waiver under MiFID II | Block-trade exemption under FSA / FIEA rules |
| **Cross-border equivalence** | Substituted compliance / comparability for foreign venues (where determined) | Equivalence for third-country venues (where determined) | EMIR / Title-VII equivalence (where granted) |
| **Voice-brokerage role** | Reduced for in-scope products post-SEF rule | Reduced post-MiFID II for in-scope | Material residual role, especially for non-standard / blocks |
| **Dealer-count** | Many SEFs operating; some consolidation post-implementation | Fewer venues per product class | Concentrated set of ETPs serving Japan; voice-broker tier remains material |

The structural take-away: **Japan's ETP regime is functionally aligned with the US SEF / EU MTF-OTF frameworks but is less rule-prescriptive about which trades must execute electronically**, leaving more discretion at the counterparty level. This is one reason **electronic-execution share by trade count in Japan is lower than in the US for comparable products**, with a larger voice-brokered tail.

## FSA dealer regulation

Dealer banks operating in the OTC derivatives market in Japan are regulated under FIEA as:

- **Type I FIBO (Financial Instruments Business Operator)** — covering broker-dealer activity including OTC derivatives intermediation;
- **Banking license** (for the banking-entity component — see [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]) — for the megabank-affiliated dealers operating both banking and securities entities;
- **JSDA membership** — for self-regulatory conduct supervision;
- **JSCC membership** — for clearing-eligible products.

FSA dealer regulation covers:

- **Capital adequacy** for OTC derivative exposure (mirroring Basel framework for the banking entity and FIEA capital rules for the securities entity);
- **Risk management** — internal models, limits, governance;
- **Customer protection** — suitability rules, disclosure requirements, conduct-of-business rules including for retail-end-user OTC derivative sales;
- **Market-conduct supervision** — surveillance for market abuse, manipulation, and conflicts of interest.

The customer-protection layer is particularly relevant where dealer banks sell OTC derivatives to **corporate-end-user clients** (treasury hedges for [[finance/japan-corporate-fx-and-rate-hedge-policy|FX and rate exposure]]) and to **retail / small-business clients** (structured products with embedded derivatives) — historic episodes of mis-selling of complex OTC structures to insufficiently sophisticated end-users have driven progressively tighter FSA conduct rules.

## Related

- [[derivatives/INDEX]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[money-market/tanshi-company-business-model]]
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, English-language pages on FIEA framework, ETP registration, and OTC derivatives supervision.
- FSA, Financial Instruments Business Operators registry (fibo.pdf).
- BOJ, payment / market — OTC derivatives execution statistics.
- Tradeweb, regulated-platforms overview (Japan ETP scope reference).
- Bloomberg, electronic-trading services overview.
- TP ICAP (parent of ICAP / Tullett Prebon), BGC Brokers, and Tradition group corporate pages for voice-broker franchise scope.
- JPX / OSE / TSE, listed-derivatives execution rules (for comparison boundary).
- ISDA, SwapsInfo and trade-execution analysis publications.
