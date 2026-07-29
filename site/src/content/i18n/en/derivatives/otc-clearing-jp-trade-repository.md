---
source: derivatives/otc-clearing-jp-trade-repository
source_hash: 854b860d1fb2c790
lang: en
status: machine
fidelity: ok
title: "OTC derivatives clearing and trade repository — Japan"
translated_at: 2026-07-29T21:20:00.000Z
---

# OTC derivatives clearing and trade repository — Japan

## TL;DR

Japan's **OTC derivatives clearing and reporting regime** rests on three pillars:

1. **Central clearing at [[securities/japan-securities-clearing-corp|JSCC]]** for products satisfying the current eligibility criteria. JSCC's IRS list includes OIS, D-TIBOR products, and basis variants; its CDS list includes specified index and single-name products. Eligibility does not by itself establish that a particular trade is legally mandated to clear;

2. **Trade-repository reporting** — FSA guidelines define reporting entities, reportable transactions and fields, timing, and submission routes. The scope test and exemptions must be applied rather than summarized as “all trades”;

3. **Cross-border recognition questions** — any EU or US recognition, equivalence, registration, or substituted-compliance conclusion is service-, category-, entity-, and date-specific. This page does not make a blanket current determination without the exact current EC, ESMA, or CFTC instrument.

This entry covers the JSCC product surface and the FSA reporting framework. Cross-border recognition must be checked from the relevant foreign regulator's current primary instrument.

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

| JSCC service | Products shown on the current eligibility page | Scope caution |
|---|---|---|
| **IRS** | OIS, D-TIBOR IRS, D-TIBOR tenor swaps, OIS basis swaps, and OIS-versus-D-TIBOR basis swaps under stated criteria | Product eligibility, counterparty scope, and legal mandate must be checked separately |
| **CDS** | Current iTraxx Japan series and named single-reference entities listed by JSCC | The live list and series must be checked at trade date |
| **OTC JGB** | Purchase and sale, cash-secured lending, standard repo, and subsequent-collateral-allocation repo | Governed by the JGB OTC service rules, not the IRS mandate |
| **Listed derivatives** | JPX-listed futures and options enumerated by JSCC | On-exchange clearing follows the listed-product framework |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/jgbcc/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/futures/product.html]

The **clearing-mandate scope is FIEA-defined**: not every OTC derivative trade between every Japanese counterparty must clear. Scope is determined by:

- **Counterparty category** — major dealer banks ([[megabanks/mufg-bank|MUFG]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], [[megabanks/mizuho-bank|Mizuho]], etc.), large insurance companies, large asset managers, and other systemically important entities are in scope; smaller end-users may be out of scope;
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

Reporting timing, valuation, and collateral-update duties follow the applicable FSA guideline and reporting route; no generic T+1/T+2 rule is substituted for the current scope table.

### Why TR reporting matters

The TR data is the **structural input** for:

- **JFSA systemic-risk monitoring** — aggregate notional, gross market value, exposure concentrations, counterparty network analysis;
- **BOJ financial-stability surveillance** — input to the BOJ Financial System Report and macroprudential analysis;
- **Cross-border coordination** — subject to applicable law, agreements, and data-access controls;
- **Public statistics** — BOJ, BIS, FSA, and JSCC publish aggregate surfaces with their own populations and methodologies.

The TR is **not a public price feed**. Trade-level data is regulator-only; aggregate / anonymized statistics flow to the public.

### Cross-border recognition boundary

EU equivalence, ESMA CCP recognition, CFTC registration, comparability, and substituted compliance are different legal instruments. Their entity, service, product, category, conditions, and effective dates can change independently. Because no current EC, ESMA, or CFTC primary instrument is cited in this entry, it makes no blanket claim that “Japan,” JSCC as a whole, every ETP, or Japan trade reporting is currently recognized for every purpose.

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
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- JSCC, English-language pages on company, IRS clearing, CDS clearing, and listed-derivatives clearing scope.
- FSA, FIEA framework pages — OTC derivatives, clearing-mandate scope, trade-repository registration.
- DTCC Japan, regulated trade-repository service overview.
- ISDA, standard documentation, mandatory clearing scope publications, SwapsInfo aggregate data.
- BOJ, payment / market — OTC derivatives statistics publications.
- JPX, derivatives market materials and clearing arrangements.
