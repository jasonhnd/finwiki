---
title: "Securities domain"
aliases:
  - "securities INDEX"
  - "証券 domain"
domain: "securities"
created: 2026-05-20
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-15
confidence: likely
tags: [securities, index, NISA, FIEA, brokerage]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.fsa.go.jp/policy/nisa2/about/nisa2024/"
  - "https://www.jsda.or.jp/shijyo/seido/tax/2024nisaqa.html"
  - "https://www.jpx.co.jp/english/corporate/about-jpx/profile/"
  - "https://www.jpx.co.jp/equities/clearing-settlement/outline/index.html"
  - "https://www.jasdec.com/en/about/office/outline/"
  - "https://www.jsda.or.jp/kyoukaiin/kyoukaiin/meibo/index.html"
  - "https://www.jsda.or.jp/shiryoshitsu/toukei/pts_toukei.html"
  - "https://www.jsda.or.jp/en/statistics/pts-for-equity/files/explanatory_ptsforequity.pdf"
  - "https://www.fsa.go.jp/policy/kokyakuhoni/kokyakuhoni.html"
  - "https://www.jpx.co.jp/english/equities/trading/margin/outline/index.html"
  - "https://www.jsf.co.jp/en/business/security-finance.html"
  - "https://www.jpx.co.jp/english/equities/trading/regulations/02.html"
  - "https://www.jpx.co.jp/english/markets/public/short-selling/"
  - "https://www.jsda.or.jp/en/activities/research-studies/html/BLT_Guidelines_en.pdf"
  - "https://www.fsa.go.jp/en/laws_regulations/faq_on_fiea/section06.html"
  - "https://www.nomuranow.com/portal/site/nnextranet/en/global-markets/prime-finance/"
  - "https://www.jpx.co.jp/english/pre-listed-companies/index.html"
  - "https://www.jpx.co.jp/equities/listing/disclosure/tdnet/index.html"
  - "https://www.odx.co.jp/en/news/article/5s13s3n0vcms/"
  - "https://www.jsda.or.jp/shijyo/seido/jishukisei/web-handbook/106_saiken/index.html"
---

# Securities domain

## Overview

This domain routes securities-market and household-investment pages. Listed financial groups and broad company pages usually stay in [[JapanFG/INDEX|JapanFG]], while this domain explains securities-market mechanisms and infrastructure such as NISA flows, IPO listing disclosure, exchange venues, PTS, security-token secondary markets, clearing, settlement, brokerage distribution, underwriting, prime brokerage / institutional financing, and FIEA / JSDA topics. The large FIEA operator population is controlled through [[securities/financial-instruments-business-operators-japan-index|Japan financial instruments business operators registry index]] rather than long-tail standalone pages, and the activity-level license logic is routed through [[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]].

## Start Here

| Lane | Start page | Use when asking |
|---|---|---|
| Ecosystem overview | [[securities/japan-capital-markets-ecosystem-overview|Japan capital markets ecosystem overview]] | What the full Japan capital-markets ecosystem looks like across issuance / trading / clearing / settlement / regulation. |
| Household asset-building | [[securities/nisa-2024-flow|NISA 2024 flow]] | How New NISA changes retail brokerage competition and household investment flow. |
| Online brokerage competition | [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] | How SBI, Rakuten, Monex, Matsui, MUFG eSmart, PayPay Securities, GMO Click, and DMM compete across NISA, points, fees, bank linkage, FX / CFD, and app-native investing. |
| Best execution / SOR / PTS | [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] | How broker routing, PTS, smart order routing, explicit fees, implicit spread, and customer-outcome controls connect. |
| PTS liquidity data | [[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]] | How to read JSDA PTS statistics, JPX denominator context, venue data, and liquidity / execution-quality caveats. |
| Margin trading / securities finance | [[securities/japan-margin-trading-and-securities-finance|Japan margin trading and securities finance]] | How standardized margin, negotiable margin, JSF, loan trading, stock lending, and collateral plumbing connect. |
| Short selling / stock-loan controls | [[securities/japan-short-selling-and-stock-loan-controls|Japan short-selling and stock-loan controls]] | How order marking, price restrictions, short-position disclosure, margin restrictions, and borrow scarcity connect. |
| Securities lending | [[securities/japan-stock-lending-market-route|Japan stock lending market route]] | How custodian, broker, JSF, collateral, DVP, and securities-lending programs connect. |
| Prime brokerage / institutional financing | [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage and institutional financing]] | How Type I FIBO, margin finance, stock lending, collateral, derivatives, custody, clearing, and institutional financing connect. |
| Underwriting structure | [[securities/japan-underwriting-market-structure|Japan underwriting market structure]] | IPO / PO / bond underwriting, lead-manager roles, bookbuilding, JPX listing flow, JSDA rules, and league-table interpretation. |
| IPO listing disclosure | [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing disclosure route]] | JPX / TSE listing route, JPX-R examination, new-listing documents, EDINET, and TDnet disclosure. |
| Market infrastructure map | [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] | Venue / clearing / settlement / PTS / securities-finance map for routing trading, SOR, and post-trade questions. |
| Exchange holding company | [[JapanFG/japan-exchange-group|Japan Exchange Group]] | JPX as the holding company for TSE, OSE, TOCOM, JPX-R, JPX-RI, and JSCC. |
| Cash equity exchange | [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] | Listing, trading, market segments, TDnet adjacency, and issuer governance. |
| Derivatives exchange | [[securities/osaka-exchange|Osaka Exchange]] | Listed derivatives, Nikkei 225 / TOPIX / JGB futures, and derivatives market structure. |
| Commodity exchange | [[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]] | Energy futures and commodity-market infrastructure under JPX. |
| Clearing | [[securities/japan-securities-clearing-corp|JSCC]] | CCP, clearing, margin, JGB clearing, OTC derivatives clearing, and commodity clearing. |
| Settlement / CSD | [[securities/japan-securities-depository-center|JASDEC]] | Book-entry transfer, DVP, settlement, and securities depository infrastructure. |
| PTS venues | [[securities/japannext-securities|Japannext]] / [[securities/osaka-digital-exchange|ODX]] | Alternative trading, SOR, PTS, and security-token secondary market structure. |
| Security-token secondary market | [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] | ODX START, JSDA unlisted securities PTS rules, Progmat, FIEA / securities-firm route, and settlement / custody fields. |
| Legal / license stack | [[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]] / [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] | Whether the question is Type I/II FIBO, registered financial institution, intermediary, advisory, or JSDA self-regulation. |
| FIEA operator registry | [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] | FSA 1,945-row registry-control route for financial instruments business operators. |
| Self-regulation | [[JapanFG/jsda|JSDA]] | Securities self-regulatory body route. |
| Investment-banking comparison | [[finance/japan-ib-league-table|Japan IB league table]] | How to read underwriting / M&A adviser rankings. |
| Asset manager landscape | [[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]] | Four-lane comparison (megabank-affiliated / insurance-affiliated / independent-online / foreign-affiliated) across AUM, distribution, product mix, NISA / iDeCo share, ETF, ESG, in-house vs sub-advisory, recent M&A. |

## JapanFG Anchors

| Cluster | Entity pages |
|---|---|
| Independent securities groups | [[JapanFG/nomura-hd]], [[JapanFG/daiwa-sg]] |
| Megabank securities arms | [[JapanFG/smbc-nikko]], [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]] |
| Online brokers | [[JapanFG/rakuten-securities]], [[JapanFG/monex-group]], [[JapanFG/sbi-securities]], [[JapanFG/mufg-esmart-securities]], [[JapanFG/paypay-securities]], [[JapanFG/gmo-click-securities]], [[JapanFG/dmm-com-securities]] |
| FX / derivatives brokers | [[JapanFG/traders-securities]], [[JapanFG/saxo-bank-securities]], [[JapanFG/sbi-fx-trade]] |
| Asset managers | [[JapanFG/nomura-asset-management]], [[JapanFG/nikko-asset-management]], [[JapanFG/asset-management-one]], [[JapanFG/mufg-asset-management]], [[JapanFG/smd-am]], [[JapanFG/daiwa-asset-management]], [[JapanFG/sbi-asset-management]] |
| Self-regulation | [[JapanFG/jsda]] |
| Market infrastructure | [[JapanFG/japan-exchange-group]], [[JapanFG/japan-securities-finance]], [[securities/tokyo-stock-exchange]], [[securities/osaka-exchange]], [[securities/tokyo-commodity-exchange]], [[securities/japan-securities-clearing-corp]], [[securities/japan-securities-depository-center]], [[securities/japannext-securities]], [[securities/osaka-digital-exchange]] |

## Registry Control

- [[securities/financial-instruments-business-operators-japan-index]] — FSA 1,945-row financial instruments business operator registry-control route.
- [[JapanFG/legal-financial-licenses/securities-license-stack]] — FIEA / JSDA / registered-financial-institution / intermediary license-stack route.

## Research Control

1. Verify license status against FSA's financial instruments business operator list.
2. Verify industry / rule interpretation against JSDA or FSA, not brokerage marketing pages.
3. Keep broker distribution analysis separate from investment advice or suitability conclusions.
4. Read best-execution / SOR / PTS policy before treating zero-fee brokerage as an execution-quality claim.
5. For current rankings or league tables, record the source vendor and exact date range because rankings are not stable.

## Backlog

| Priority | Page | Why |
|---|---|---|
| Done | [[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]] | Dedicated legal page for Type I/II FIBO, registered financial institution, intermediary, advisory, and JSDA. |
| Done | [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] | Compare Rakuten, SBI, Monex, MUFG eSmart, Matsui, PayPay Securities, GMO Click, and DMM across NISA / points / fees / app routes. |
| Done | [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] | Dedicated best-execution / SOR / PTS page for broker fee and execution-quality analysis. |
| Done | [[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]] | Dedicated JSDA PTS statistics / liquidity / denominator guide for SOR and execution-quality analysis. |
| Done | [[securities/japan-margin-trading-and-securities-finance|Japan margin trading and securities finance]] | Dedicated standardized / negotiable margin, JSF, stock lending, premium charge, and collateral route. |
| Done | [[securities/japan-short-selling-and-stock-loan-controls|Japan short-selling and stock-loan controls]] | Dedicated short-selling, stock-loan restriction, short-position, and issue-level regulatory measure route. |
| Done | [[securities/japan-stock-lending-market-route|Japan stock lending market route]] | Dedicated securities lending / borrowing, custody, collateral, DVP, and JSF route. |
| Done | [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage and institutional financing]] | Dedicated institutional financing route for prime brokerage, margin, stock borrow, collateral, derivatives, custody, clearing, and client asset controls. |
| Done | [[securities/japan-underwriting-market-structure|Japan underwriting market structure]] | Route IPO / PO / bond underwriting, JPX lead-underwriter roles, JSDA rules, EDINET, and league-table interpretation. |
| Done | [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] | One-page map linking TSE, OSE, TOCOM, JSCC, JASDEC, PTS, JSF, and broker/order-routing layers. |
| Done | [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing disclosure route]] | Created to route JPX / TSE listing examination, new-listing documents, EDINET, TDnet, and post-listing disclosure fields. |
| Done | [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] | Created to route ODX START, JSDA unlisted securities PTS rules, Progmat, FIEA securities-firm access, and ST settlement / custody fields. |

## Wave 5-6 additions (2026-05)

Venue / token / research / market-maker plumbing deepening:

- [[securities/japannext-sor-routing-deep-dive|Japannext SOR routing deep dive]] — Japannext PTS order book, SOR routing logic, latency, depth, and broker connectivity.
- [[securities/odx-start-stb-secondary-market|ODX START / STB secondary market]] — Osaka Digital Exchange START security-token secondary market and STB transfer-restricted infrastructure.
- [[securities/progmat-tokenized-securities-infrastructure|Progmat tokenized securities infrastructure]] — Progmat tokenized securities issuance/transfer infrastructure, MUFG-led consortium, and ST-issuer access.
- [[securities/japan-equity-analyst-and-sell-side-research-ecosystem|Japan equity analyst and sell-side research ecosystem]] — Nikkei Veritas ranking, JSDA analyst rules, MiFID II unbundling pressure, and research-fee unbundling.
- [[securities/japan-market-maker-and-liquidity-provider-landscape|Japan market maker and liquidity provider landscape]] — JPX market-making program, designated market makers, ETF market makers, and HFT participants.

### Comparison matrices (added 2026-05)

- [[securities/japan-fiea-operator-registry-segment-matrix|Japan FIEA operator registry segment matrix]] — Type I / Type II / IAB / IMB / RFI / registered-financial-institution / intermediary / advisory segment overlay across statute, capital, scope, and JSDA membership.
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix|Japan prime brokerage and institutional financing matrix]] — Nomura / Daiwa / SMBC Nikko / MUFG MUMS / Mizuho Securities / Goldman Sachs Japan / Morgan Stanley MUFG prime-brokerage scope, margin, stock borrow, collateral, derivatives, custody, and clearing overlay.

## Related

- [[JapanFG/INDEX]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-ib-league-table]]
- [[finance/cross-border-m-a-japan]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/japan-securities-finance]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Financial Instruments Business Operators registration list.
- FSA: NISA 2024 special site.
- JSDA: NISA Q&A and self-regulatory materials.
- JPX: Group and exchange company profiles.
- JASDEC / JSCC / JSF / ODX / Japannext public company pages.
