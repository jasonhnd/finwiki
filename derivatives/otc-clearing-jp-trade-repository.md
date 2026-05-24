---
title: "OTC derivatives clearing and trade repository — Japan"
aliases:
  - "otc-clearing-jp-trade-repository"
  - "Japan OTC derivatives clearing"
  - "JSCC OTC IRS clearing"
  - "Japan trade repository regime"
  - "DTCC Japan trade repository"
  - "FIEA OTC derivatives reporting"
  - "EMIR equivalence Japan"
  - "Title VII equivalence Japan"
  - "日本 OTC デリバティブ清算"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, otc-infra, clearing, trade-repository, JSCC, DTCC, FIEA, EMIR, Title-VII, ISDA, mandatory-clearing]
status: active
sources:
  - "https://www.jscc.co.jp/en/"
  - "https://www.jscc.co.jp/en/cds/"
  - "https://www.jscc.co.jp/en/irs/"
  - "https://www.fsa.go.jp/en/"
  - "https://www.dtcc.com/asia/japan"
  - "https://www.isda.org/"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.jpx.co.jp/english/"
---

# OTC derivatives clearing and trade repository — Japan

## TL;DR

Japan's **OTC derivatives clearing and reporting regime** rests on three pillars:

1. **Central clearing at [[securities/japan-securities-clearing-corp|JSCC]]** for the mandatorily clearable OTC products — yen interest-rate swaps (JPY IRS), overnight index swaps (OIS) referencing TONA, and the JSCC CDS clearing service (for designated index CDS). Mandatory clearing is enforced under the Financial Instruments and Exchange Act (FIEA) for in-scope counterparties and product classes, mirroring the post-2009 G20 Pittsburgh commitments;

2. **Trade-repository reporting** — all OTC derivatives traded by FIEA-regulated entities must be reported to a trade repository (TR). The primary TR for Japan is **DTCC Data Repository Japan** (a regulated DTCC subsidiary), with the JFSA as the receiving regulator. Reporting captures both bilateral and cleared trades, supporting systemic-risk monitoring;

3. **Cross-border equivalence** — Japan has secured **EMIR equivalence** from the European Commission for the JSCC clearing service (allowing EU counterparties to clear through JSCC without losing EMIR Title-IV preferential treatment) and **Title VII / Dodd-Frank substituted-compliance / equivalence** elements from the US CFTC for clearing and reporting recognition (subject to specific category-by-category determinations).

This entry covers the JSCC clearing scope and member structure, the trade-repository reporting obligation under FIEA, the EMIR / CFTC equivalence framework, the dispute-resolution architecture, and the structural reason Japan's OTC clearing scope remains **narrower than EU EMIR Annex IV** despite broad equivalence recognition.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the OTC-infrastructure cluster. Read it with [[securities/japan-securities-clearing-corp|JSCC]] for the central counterparty itself, [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] for the underlying yen IRS / OIS market structure, [[derivatives/swap-execution-facility-japan|Japan SEF-equivalent / electronic execution]] for the execution-venue layer that sits in front of clearing, [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for the dealer-side member economics, [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the wider plumbing context, and [[derivatives/jgb-futures-curve|JGB futures curve]] for the listed-derivatives clearing comparison.

## Why central clearing and trade-repository reporting matter

Post-2008 financial-crisis regulatory reform produced four pillars of OTC derivatives regulation under the G20 Pittsburgh commitments:

1. **Mandatory central clearing** of standardized OTC derivatives via CCPs to reduce bilateral counterparty risk;
2. **Mandatory trade reporting** to regulated trade repositories for systemic-risk monitoring;
3. **Margin requirements for non-cleared derivatives** (initial margin and variation margin) to align bilateral OTC with cleared-product risk profile;
4. **Trading venue migration** to platforms (US SEFs, EU MTFs / OTFs, Japan ETPs) for designated standardized products.

Japan implemented this framework through FIEA amendments, with the JFSA as the implementing regulator. The architecture is **functionally equivalent** to US Dodd-Frank Title VII and EU EMIR / MiFID II but uses **Japan-domiciled infrastructure** (JSCC, DTCC Japan) under FIEA supervision rather than direct extraterritorial application of US / EU rules.

This is the structural backbone of the Japan OTC derivatives market. A dealer-bank yen IRS trade executed in 2026 between two FIEA-regulated entities will typically be: (a) electronically negotiated or voice-brokered; (b) submitted to JSCC for clearing where in scope; (c) reported to DTCC Japan within the reporting window; (d) margined via JSCC initial and variation margin processes; (e) supported by JFSA-supervised dealer documentation under ISDA Master Agreement standards.

## JSCC mandatory clearing scope

JSCC operates designated clearing services for OTC derivatives in Japan. The current public-source scope includes:

| Clearing service | Underlying products | Mandatory clearing scope |
|---|---|---|
| **JSCC IRS clearing** | Yen interest-rate swaps; yen OIS referencing [[derivatives/japan-interest-rate-derivatives-overview|TONA]]; selected basis-swap variants | Mandatory for FIEA-regulated counterparties above designated notional thresholds for standardized contract terms. |
| **JSCC CDS clearing** | iTraxx Japan index CDS (designated series); selected single-name reference entities (scope evolves with JSCC product additions) | In-scope index CDS clearing for FIEA-regulated dealer counterparties. |
| **JSCC JGB OTC clearing (where applicable)** | JGB cash trades and JGB repo (the JGB OTC clearing service covers JGB cash and repo, with margining and netting) | Member-driven and counterparty-by-counterparty as scope expands. |
| **JSCC listed-derivatives clearing** | JPX-listed Nikkei 225 futures / options, TOPIX futures, JGB futures, TONA futures, single-name listed options on [[securities/osaka-exchange|OSE]] | Mandatory for all on-venue executed trades (listed-derivatives are cleared by design). |

The **clearing-mandate scope is FIEA-defined**: not every OTC derivative trade between every Japanese counterparty must clear. Scope is determined by:

- **Counterparty category** — major dealer banks ([[JapanFG/mufg-bank|MUFG]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]], [[JapanFG/mizuho-bank|Mizuho]], etc.), large insurance companies, large asset managers, and other systemically important entities are in scope; smaller end-users may be out of scope;
- **Product standardization** — the specific contract terms (currency, floating-rate index, maturity, day count, payment frequency) must match a JSCC-clearable contract specification;
- **Notional threshold** — counterparty-aggregate notional thresholds determine which entities are subject to mandatory clearing.

Bilateral (non-cleared) OTC derivatives remain a meaningful share of the market — for bespoke structures, non-standard maturities, non-standard currencies, single-name CDS outside the cleared universe, and trades with counterparties below the clearing threshold. These bilateral trades are subject to **margin requirements for non-cleared derivatives (UMR — Uncleared Margin Rules)** under FIEA, mirroring the international BCBS / IOSCO framework.

## JSCC clearing member structure

JSCC clearing members fall into tiered categories:

- **Direct clearing members (DCM)** — typically the major dealer banks and securities firms with their own JSCC membership;
- **Indirect / client clearing** — counterparties that do not maintain direct JSCC membership clear through a DCM that provides client-clearing services;
- **Sponsoring / agency models** — variations of the above for specific product lines.

The DCM list is dominated by the megabank-affiliated securities arms and major foreign dealer banks operating in Tokyo. See [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for the franchise economics that drive who chooses to be a DCM vs use client clearing.

### Default-management waterfall

JSCC operates a **default-management waterfall** comparable in structure to other major global CCPs (LCH SwapClear, CME, Eurex Clearing):

1. **Defaulter's initial margin** — first loss absorbed by the defaulting member's IM;
2. **Defaulter's default-fund contribution** — second loss;
3. **JSCC own capital tranche** ("skin in the game") — third loss;
4. **Non-defaulting members' default-fund contributions** — mutualized layer;
5. **Recovery tools** (assessment rights, partial tear-up, etc.) — final tools before resolution.

Default-management auctions for cleared portfolios are run periodically (and as needed during member-default events) to allow surviving members to take on the defaulter's positions. The default-management framework is reviewed by JFSA under FIEA CCP supervision and aligned with CPMI-IOSCO PFMI principles.

## Trade-repository reporting under FIEA

### The reporting obligation

Under FIEA, OTC derivatives trades by FIEA-regulated entities must be reported to a **trade repository registered with the JFSA**. The principal TR for Japan is **DTCC Data Repository Japan KK** (a regulated subsidiary of DTCC), operating under JFSA registration as a designated TR.

Reportable data fields cover, at a minimum:

| Field category | Examples |
|---|---|
| **Counterparty identification** | Legal Entity Identifier (LEI), counterparty role (buyer / seller), counterparty domicile. |
| **Trade economics** | Notional, currency, effective date, maturity, fixed / floating leg specifications, reference rate (e.g. TONA, JPY LIBOR successor curves where relevant). |
| **Pricing / valuation** | Mark-to-market value, collateral information where applicable. |
| **Clearing status** | Cleared (with CCP identifier — e.g. JSCC) or bilateral. |
| **Execution venue** | On-venue (e.g. ETP, electronic platform) or off-venue (voice / bilateral). |
| **Lifecycle events** | New trade, modification, novation, termination, compression. |

Reporting timing is **T+1 or T+2** in many cases, with daily collateral and valuation updates for open positions.

### Why TR reporting matters

The TR data is the **structural input** for:

- **JFSA systemic-risk monitoring** — aggregate notional, gross market value, exposure concentrations, counterparty network analysis;
- **BOJ financial-stability surveillance** — input to the BOJ Financial System Report and macroprudential analysis;
- **Cross-border regulator coordination** — JFSA shares aggregate / position data with US CFTC, EU ESMA, and other regulators under MOUs supporting the EMIR / Title-VII equivalence framework;
- **Public statistics** — aggregate notional outstanding by product class for Japan OTC derivatives is published by BOJ and BIS, with TR data as a foundational input.

The TR is **not a public price feed**. Trade-level data is regulator-only; aggregate / anonymized statistics flow to the public.

## EMIR equivalence and Title VII recognition

### EMIR equivalence (EU)

The European Commission has granted **EMIR equivalence determinations** covering Japan's CCP and trading-venue regimes in specific categories:

- **JSCC equivalence** — recognition by ESMA of JSCC as a third-country CCP, allowing EU counterparties to clear designated products through JSCC without losing the capital-efficient treatment EU rules grant to clearing at recognized CCPs;
- **Trading-venue equivalence (where applicable)** — recognition of Japan electronic trading venues (such as JPX-listed derivatives venues and certain ETPs) under MiFID II for European counterparties using these venues;
- **Trade-reporting equivalence** — recognition of Japan TR reporting in specific categories.

These determinations are **product / venue specific** and reviewed periodically. EU counterparties relying on equivalence should confirm current scope.

### CFTC substituted compliance / Title VII recognition (US)

The US Commodity Futures Trading Commission (CFTC) has issued substituted-compliance / comparability determinations covering Japan in specific categories under the Dodd-Frank Title VII framework:

- **CCP recognition** — JSCC as a CFTC-registered Derivatives Clearing Organization (DCO) for selected services where US counterparties clear in Japan;
- **Trading venue recognition** — certain Japan execution venues recognized as compliant for US Title-VII purposes in defined categories;
- **Reporting comparability** — Japan TR reporting recognized as comparable for specified Title-VII reporting obligations in defined cases.

As with EMIR, these determinations are **product / venue specific** and reviewed periodically by the CFTC.

### Structural significance

EMIR and Title-VII equivalence are **a non-trivial regulatory achievement** for Japan. Without equivalence, EU and US counterparties trading with Japan dealer banks would face:

- Loss of capital-efficient netting and clearing treatment;
- Duplicate reporting obligations to both Japan TRs and EU / US TRs;
- Trading-venue restrictions limiting access to Japan execution platforms.

Equivalence preserves Japan's position as a **fully integrated G20 OTC derivatives jurisdiction** and is one of the structural reasons foreign dealer banks ([[JapanFG/goldman-sachs-japan|GS]], [[JapanFG/morgan-stanley-japan|MS]], [[JapanFG/jpmorgan-japan|JPM]], [[JapanFG/citigroup-japan|Citi]]) maintain full Tokyo dealer operations.

## Dispute resolution

OTC derivatives disputes in Japan are typically governed by:

- **[[derivatives/INDEX|ISDA Master Agreement]]** — the standard bilateral documentation framework that includes dispute-resolution provisions (calculation-agent disagreements, valuation disputes, close-out netting mechanics);
- **English law or New York law** governing law clauses on most cross-border dealer transactions;
- **Japanese law** for purely domestic-counterparty trades;
- **JSCC rule books** for cleared trades — including default-management procedures, margin disputes, and member-disciplinary processes;
- **JFSA supervisory channels** for regulator-mediated disputes involving licensed counterparties;
- **Tokyo District Court** for contested litigation (though most OTC disputes resolve via negotiated settlement or arbitration before reaching court).

The structural pattern: **bilateral OTC disputes are ISDA-mediated**; **cleared-trade disputes are JSCC-rule-mediated**; **regulatory-compliance disputes are JFSA-supervised**.

## Public statistics

Aggregate Japan OTC derivatives notional and gross market value are published by:

- **BOJ** — periodic OTC derivatives statistics with notional, gross market value, and counterparty / currency breakdowns;
- **BIS semi-annual OTC derivatives statistics** — Japan as a reporting jurisdiction contributes to global aggregate publications;
- **JSCC monthly clearing statistics** — published cleared notional and open interest for IRS, CDS, and listed-derivatives clearing services;
- **JFSA publications** — supervisory reports referencing aggregate OTC notional and clearing scope.

When citing notional vs gross market value, separate the two clearly — notional outstanding is typically ~10-30x gross market value depending on the product class and netting treatment.

## Counterpoints

- **Clearing scope is narrower than total OTC notional.** Cleared notional at JSCC is a meaningful share of total Japan OTC notional but not 100%. Bilateral notional remains material for non-standard products, smaller counterparties, and bespoke structures. Do not assume "yen IRS = cleared" without checking the contract specification and counterparty category.
- **CDS clearing scope is narrower than IRS clearing.** JSCC CDS clearing covers designated index series; single-name CDS clearing scope is narrower; many [[derivatives/INDEX|single-name CDS]] trades on Japanese reference entities remain bilateral.
- **EMIR / Title-VII equivalence is product-specific.** "Japan has EMIR equivalence" is true only for specific categories (CCPs, trading venues, reporting). Full equivalence for every OTC product class is not automatic.
- **Trade-repository data is not public at the trade level.** Aggregate statistics flow to the public; trade-level data is regulator-only. Researchers using public aggregate data should be careful about extrapolation to firm-specific exposures.
- **Default-management has never been stress-tested at a major-member failure event for the IRS / CDS clearing services.** Public-source confidence in CCP resilience rests on theoretical waterfall design, simulation exercises, and stress-testing — not on actual historical default-resolution outcomes at JSCC for the OTC derivative clearing services.
- **UMR (Uncleared Margin Rules) for bilateral trades raises operational complexity.** UMR phase-in obligations mean even non-cleared OTC trades require IM / VM exchange under FIEA-implemented BCBS / IOSCO rules. The operational burden is substantial for medium-sized counterparties.
- **Cross-border equivalence can be withdrawn.** EMIR and Title-VII equivalence determinations are reviewed periodically; political tensions or regulatory divergence can lead to withdrawal. Japan's equivalence status is not permanent.
- **JSCC is itself a single point of failure.** As Japan's principal OTC CCP, JSCC's operational resilience is a systemic-risk concern. JFSA supervision aims to mitigate this, but the structural concentration is real — comparable to LCH SwapClear in the GBP / USD IRS market.
- **TR reporting completeness varies.** Smaller counterparties and complex cross-border structures may have data-quality gaps in TR reporting that limit the analytic value of aggregate data.

## Open questions

- The exact current scope of JSCC mandatory clearing — which contract specifications, currencies, and counterparty categories are in scope as of the current FIEA rules iteration?
- The share of Japan OTC IRS notional that clears at JSCC vs bilateral — JSCC publishes cleared statistics; total OTC market size estimation requires combining BOJ + BIS + JSCC + bilateral inference.
- The exact list of EMIR equivalence determinations currently in force for Japan venues / products — periodic ESMA / European Commission reviews update scope.
- The exact list of CFTC substituted-compliance / comparability determinations in force for Japan — periodic CFTC review updates scope.
- JSCC default-fund sizing methodology relative to potential systemic-stress scenarios — public disclosure of stress-test results is summary-level only.
- The role of foreign trade repositories (DTCC US, ICE TVEL, etc.) for Japan-counterparty trades that have dual reporting under EU / US frameworks alongside Japan TR reporting.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/swap-execution-facility-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/jgb-futures-curve]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-depository-center]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- JSCC, English-language pages on company, IRS clearing, CDS clearing, and listed-derivatives clearing scope.
- FSA, FIEA framework pages — OTC derivatives, clearing-mandate scope, trade-repository registration.
- DTCC Japan, regulated trade-repository service overview.
- ISDA, standard documentation, mandatory clearing scope publications, SwapsInfo aggregate data.
- BOJ, payment / market — OTC derivatives statistics publications.
- JPX, derivatives market materials and clearing arrangements.
