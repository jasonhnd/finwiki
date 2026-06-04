---
source: derivatives/japan-interest-rate-derivatives-overview
source_hash: 99be9f18fa81aa4d
lang: en
status: machine
fidelity: ok
title: "Japan interest-rate derivatives overview"
translated_at: 2026-05-31T03:19:56.466Z
---

# Japan interest-rate derivatives overview

## TL;DR

Japan's interest-rate derivatives ecosystem comprises six principal instrument types — yen IRS, OIS referencing TONA, yen swaptions, JGB futures (10Y standard and mini, 5Y, 20Y), TONA 3-month futures, and asset swaps — together with the clearing, regulatory, and dealer-franchise layer that supports them. Aggregate daily turnover is in the trillions of USD-equivalent (across notional sliced by tenor and instrument), with most activity concentrated in the megabank-affiliated and global dealer set.

The market is regulated under the Financial Instruments and Exchange Act (FIEA), supervised by the Financial Services Agency (FSA), with central clearing at Japan Securities Clearing Corporation (JSCC) for mandated standardized trades. The Bank of Japan exercises macro influence both through monetary policy (which drives the OIS curve) and through its JGB-purchase program (which influences cash JGB and JGB futures markets).

For FinWiki, this entry is the domain anchor: it routes the constituent instrument pages, summarizes the market-participant landscape, and lays out the regulatory and infrastructure framework that underlies all subsequent rates-derivatives entries.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the rates-cluster anchor. Read it together with the constituent pages: [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/jgb-futures-curve]], and [[derivatives/yen-basis-swap-market]]. The cash side and BoJ policy framework are in [[money-market/INDEX]] and [[money-market/boj-open-market-operations]]; the clearing infrastructure is in [[securities/japan-securities-clearing-corp]].

## The Six Principal Instrument Types

| Instrument | Market venue | Reference rate | Liquid tenor band | Anchor page |
|---|---|---|---|---|
| Yen IRS | OTC, much cleared at JSCC | 1M / 3M / 6M TIBOR; TONA-compounded | 2Y to 30Y | [[derivatives/japan-irs-market]] |
| Yen OIS | OTC, much cleared at JSCC | TONA-compounded-in-arrears | 1W to 30Y; deepest 1Y to 10Y | [[derivatives/ois-tona-curve]] |
| Yen swaption | OTC, mostly bilateral | Underlying yen IRS (TIBOR or TONA) | 1Y x 1Y up to 10Y x 30Y; deepest at 5Y x 5Y, 10Y x 10Y | (W8-D planned `derivatives/japan-yen-swaption.md`) |
| JGB futures | OSE (JPX), cleared at JSCC | Notional JGB; CTD-delivered | 10Y standard, 10Y mini, 5Y, 20Y | [[derivatives/jgb-futures-curve]] |
| TONA 3-month futures | OSE (JPX), cleared at JSCC | 3M compounded TONA | Short end (front quarters) | (covered in [[derivatives/ois-tona-curve]]) |
| Asset swap | OTC, mostly bilateral | JGB cash leg + IRS leg | Matches underlying JGB | (W8-D planned `derivatives/jgb-asset-swap.md`) |

The OTC instruments dominate notional outstanding; the listed instruments dominate transaction count and provide daily price discovery. A typical institutional rates strategy uses a mix: futures for tactical duration, swaps for tailored tenor / curve exposure, swaptions for convexity / volatility, and asset swaps for cash-and-derivative-combined trades.

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

| Category | Examples / role |
|---|---|
| Megabank-affiliated securities firms (dealers) | MUFG Securities, SMBC Nikko, Mizuho Securities — dominant JPY rates makers. |
| Independent Japanese securities firms (dealers) | Nomura, Daiwa — strong JPY franchise plus cross-border. |
| Global investment banks (dealers) | JPMorgan, Goldman, Citi, Morgan Stanley, Deutsche Bank, Barclays, BNP Paribas, HSBC, UBS. |
| Domestic banks (end-users) | Megabanks treasury, regional banks, trust banks, Norinchukin Bank — primarily ALM hedging. |
| Life insurers (end-users) | Long-tenor receive-fixed flow for policy-reserve duration matching. |
| Non-life insurers (end-users) | Smaller-scale ALM hedging. |
| Corporates (end-users) | Floating-to-fixed loan hedging, foreign-issuance swap-back, capital-structure hedging. |
| Foreign macro / hedge funds | Tactical Japan-rate views, relative-value Japan vs major-currency curves. |
| Pension funds / asset managers | Duration management on JPY fixed-income mandates. |
| Inter-dealer brokers | ICAP / Tradition / BGC / Tullett Prebon — anonymous execution and price discovery. |
| CCP | Japan Securities Clearing Corporation (JSCC) — central clearing infrastructure. |
| Regulator | Financial Services Agency (FSA) under FIEA. |
| Central bank | Bank of Japan — macro driver of curve via policy and JGB-purchase program. |

The dealer franchise is the structural backbone. Public franchise commentary appears in [[megabanks/mufg-bank]], [[megabanks/sumitomo-mitsui-banking-corp]], [[megabanks/mizuho-bank]] parent-group IR materials.

## Daily Turnover

Aggregate daily turnover (notional) across JPY interest-rate derivatives:

| Source | Measure |
|---|---|
| BIS Triennial Central Bank Survey (FX and OTC derivatives, latest 2022 vintage) | JPY-denominated OTC interest-rate derivatives turnover is in the hundreds of billions of USD-equivalent per day at aggregate. |
| ISDA SwapsInfo weekly aggregated transactions | Weekly cleared and bilateral JPY-IRS notional in the trillions of USD-equivalent. |
| JPX monthly volume statistics | Listed derivatives (JGB futures, TONA futures) daily contract volume disclosed monthly. |
| BoJ Japan-portion of BIS survey | Daily turnover for Japan-located dealers' books. |

The standard caution: turnover and notional outstanding are different concepts; both are reported by BIS but in different periodicity (turnover triennially, outstanding semi-annually). For any current figure, cite the exact source release and survey vintage.

The trillions-of-USD-equivalent scale is a useful order-of-magnitude anchor but is dominated by a small number of large dealers and concentrated at standard tenors.

## Regulatory Framework

The principal regulatory layers governing Japan rates derivatives:

| Layer | Detail |
|---|---|
| Financial Instruments and Exchange Act (FIEA, 金融商品取引法) | Statutory framework covering securities, derivatives, market intermediaries, disclosure, and market conduct. |
| FSA supervision | The Financial Services Agency (金融庁) supervises FIEA-registered dealers, exchanges, CCPs, and market infrastructure. |
| Derivative dealer registration | Activities require Type 1 Financial Instruments Business registration under FIEA. See [[banking/japan-banking-license-tier-comparison-matrix]] for licensing layers. |
| CCP clearing mandate | FSA-designated standardized JPY IRS must be cleared at JSCC; scope has expanded over multiple rule cycles. |
| Reporting obligation | Trade reporting to designated repositories (TR) under FSA rules. |
| ISDA documentation | Most OTC trades use ISDA Master Agreements (typically 1992 or 2002 form) plus CSAs and product-specific annexes. |
| BoJ market surveillance | The BoJ monitors money-market and derivatives functioning as part of its operational responsibility, including survey activity (Tokyo Money Market Survey). |
| Capital and margin rules | Basel III risk-weighted-asset rules, leverage ratio, NSFR, LCR. Uncleared Margin Rules (UMR) for non-cleared bilateral trades. |
| Audit and reporting | Listed entity disclosures under FIEA; derivative hedge accounting under Japanese GAAP / IFRS for issuers. |

The regulatory framework is broadly consistent with G20 / FSB derivative-reform commitments (central clearing, trade reporting, capital and margin standards). Japan was an early adopter of CCP clearing for major rates products.

## TOMS Clearing Platform (and JSCC Clearing)

The JPX group's Trade-Order Management System (TOMS) is the technical infrastructure that supports listed-derivatives matching and clearing flow into JSCC. For OTC IRS, JSCC operates a dedicated OTC clearing platform (JGBCC was the precursor for JGB cash; JSCC consolidated clearing across JPX-group products).

Key JSCC clearing features for OTC IRS:

| Feature | Detail |
|---|---|
| Eligible products | Standardized JPY IRS at mandated tenors and reference indices; expanded over time. |
| Membership | Direct clearing members (DCMs) plus client clearing via DCMs for non-members. |
| Margin | Initial margin (IM) using portfolio-margining methodology; daily variation margin (VM) in JPY cash. |
| Default management | Tiered waterfall (defaulter margin → defaulter default-fund contribution → JSCC capital tranche → non-defaulting member fund). |
| Auction process | In default scenarios, JSCC conducts portfolio auctions to non-defaulting members. |
| Cross-currency products | JSCC's scope is principally JPY-denominated; cross-currency CCBS clearing is more limited. |

For listed derivatives (JGB futures, TONA futures, Nikkei 225 futures and options), JSCC clears the full OSE / TSE derivatives flow with portfolio margining across products.

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

Public data is rich enough to characterize aggregate market size, dealer concentration, clearing share, and broad trends. It does not reveal individual-trade pricing, specific counterparty exposures, or proprietary dealer P&L. Cite exact release vintage for any specific figure because numbers update across releases.

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
