---
title: "Swap execution facility — Japan equivalent (ETP regime)"
aliases:
  - "swap-execution-facility-japan"
  - "Japan SEF equivalent"
  - "Japan ETP regime"
  - "Japan electronic trading platform OTC derivatives"
  - "Tradeweb Japan"
  - "Bloomberg SEF Japan"
  - "ICAP Japan"
  - "BGC Brokers Japan"
  - "Tullett Prebon Japan"
  - "Japan voice broker market OTC"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, otc-infra, execution-venue, ETP, SEF, voice-broker, electronic-execution, FSA, MiFID-II, dealer-franchise]
status: active
sources:
  - "FSA 2012 OTC-derivative reform framework — https://www.fsa.go.jp/en/refer/legislation/20121012/02.pdf"
  - "FSA 2015 electronic-platform implementation summary — https://www.fsa.go.jp/common/conference/danwa/20150923/01.pdf"
  - "FSA current licensed-entity index — https://www.fsa.go.jp/en/regulated/licensed/index.html"
---

# Swap execution facility — Japan equivalent (ETP regime)

## TL;DR

Japan regulates **Electronic Trading Platforms (ETPs)** for OTC derivatives under FIEA. This is a Japan-specific framework, not a US SEF licence. FSA's September 2015 implementation material described mandatory ETP execution for in-scope yen-LIBOR IRS, an order-book or RFQ-to-at-least-three execution method, and post-trade publication. Current products, operators, permissions, and exemptions must be checked against current FSA rules and registries; the 2015 scope must not be silently relabelled as a current TONA mandate.

This entry covers the documented Japan ETP boundary and the limits of public evidence. It does not infer a current platform ranking, product coverage, electronic share, or voice-broker share from global vendor marketing pages.

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

Cross-jurisdiction comparisons require current legal sources from each jurisdiction. The Japan facts below are kept separate from US or EU labels.

### Registration and supervision

An entity operating an ETP for OTC derivatives in Japan typically requires:

- **FSA registration as an Electronic Trading Platform operator** under FIEA (with specific category depending on product scope — covering yen IRS, foreign-currency-denominated IRS, CDS where applicable, and other standardized OTC derivatives);
- **Compliance with FSA rules** on market-conduct, pre-trade and post-trade transparency, member-onboarding, system-resilience, and trade-reporting integration with the [[derivatives/otc-clearing-jp-trade-repository|JFSA-designated trade repository]];
- **Clearing-integration arrangements** with [[securities/japan-securities-clearing-corp|JSCC]] for products subject to mandatory clearing.

### Mandatory electronic execution scope

FSA's 2015 implementation summary described an on-platform obligation for in-scope yen-LIBOR IRS. Because that benchmark later ceased, a present-day scope conclusion requires the current FIEA instruments and FSA materials.

Product terms, counterparty scope, thresholds, and exemptions must be tested under current rules; no generic out-of-scope list is asserted here.

### Pre-trade and post-trade transparency

FSA's 2015 summary describes order-book or RFQ-to-at-least-three execution and post-trade publication. It does not establish that venue records automatically feed ISDA, BIS, or BOJ publications. Current content, timing, delay, and audit-trail requirements must be read from current rules and the operator's permission.

Source: ^[source:https://www.fsa.go.jp/common/conference/danwa/20150923/01.pdf]

### Electronic platforms

Operator identity, legal entity, permitted business, and current status must be checked in FSA's licensed-entity materials. A vendor's global SEF, bond, or FX capability does not prove that the same legal entity is a Japan ETP or that a particular product is within its Japanese permission.

Source: ^[source:https://www.fsa.go.jp/en/regulated/licensed/index.html]

### Interdealer voice brokers

This page does not maintain an interdealer-broker roster or infer product coverage from a group's global website. A named Japan legal entity and its current registration must be verified before attributing OTC-product coverage.

### Single-dealer platforms

Single-dealer interfaces and multilateral ETPs are different structures, but legal treatment depends on the actual service. No platform-brand list or automatic reporting integration is inferred here.

## Electronic execution share vs voice-brokered share

The cited FSA materials do not provide a current product-by-product electronic/voice share. Such a comparison needs a dated dataset with a defined denominator—trade count, notional, or volume—and execution-method classification.

## Comparison to US SEF and EU MiFID II OTF / MTF

| Japan ETP feature documented in the 2015 FSA summary | Evidence boundary |
|---|---|
| Start date | Mandatory electronic-platform use began on 1 September 2015 for the then-defined scope |
| Product in the summary | Yen-LIBOR IRS; this historical label does not establish current TONA scope |
| Execution method | Order book or RFQ to no fewer than three counterparties |
| Transparency | Post-trade information publication described by FSA |
| Foreign platform route | Permission framework described for foreign electronic trading platforms |

Source: ^[source:https://www.fsa.go.jp/common/conference/danwa/20150923/01.pdf]

US and EU regimes should be compared from their own current primary sources. No relative electronic-share or prescriptiveness ranking is asserted here.

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
