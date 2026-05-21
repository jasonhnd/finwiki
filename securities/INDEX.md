---
title: "Securities domain"
aliases:
  - "securities INDEX"
  - "証券 domain"
domain: "securities"
created: 2026-05-20
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-15
confidence: likely
tags: [securities, index, NISA, FIEA, brokerage]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.fsa.go.jp/policy/nisa2/about/nisa2024/"
  - "https://www.jsda.or.jp/shijyo/seido/tax/2024nisaqa.html"
  - "https://www.jpx.co.jp/english/corporate/about-jpx/profile/"
  - "https://www.jasdec.com/en/about/office/outline/"
---

# Securities domain

## TL;DR

This domain routes securities-market and household-investment pages. Listed financial groups and broad company pages usually stay in [[JapanFG/INDEX|JapanFG]], while this domain explains securities-market mechanisms and infrastructure such as NISA flows, exchange venues, PTS, clearing, settlement, brokerage distribution, underwriting, and FIEA / JSDA topics. The large FIEA operator population is controlled through [[securities/financial-instruments-business-operators-japan-index|Japan financial instruments business operators registry index]] rather than long-tail standalone pages.

## Start Here

| Lane | Start page | Use when asking |
|---|---|---|
| Household asset-building | [[securities/nisa-2024-flow|NISA 2024 flow]] | How New NISA changes retail brokerage competition and household investment flow. |
| Exchange holding company | [[JapanFG/japan-exchange-group|Japan Exchange Group]] | JPX as the holding company for TSE, OSE, TOCOM, JPX-R, JPX-RI, and JSCC. |
| Cash equity exchange | [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] | Listing, trading, market segments, TDnet adjacency, and issuer governance. |
| Derivatives exchange | [[securities/osaka-exchange|Osaka Exchange]] | Listed derivatives, Nikkei 225 / TOPIX / JGB futures, and derivatives market structure. |
| Commodity exchange | [[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]] | Energy futures and commodity-market infrastructure under JPX. |
| Clearing | [[securities/japan-securities-clearing-corp|JSCC]] | CCP, clearing, margin, JGB clearing, OTC derivatives clearing, and commodity clearing. |
| Settlement / CSD | [[securities/japan-securities-depository-center|JASDEC]] | Book-entry transfer, DVP, settlement, and securities depository infrastructure. |
| PTS venues | [[securities/japannext-securities|Japannext]] / [[securities/osaka-digital-exchange|ODX]] | Alternative trading, SOR, PTS, and security-token secondary market structure. |
| Legal / license stack | [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] | Whether the question is Type I/II FIBO, registered financial institution, intermediary, advisory, or JSDA self-regulation. |
| FIEA operator registry | [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] | FSA 1,945-row registry-control route for financial instruments business operators. |
| Self-regulation | [[JapanFG/jsda|JSDA]] | Securities self-regulatory body route. |
| Investment-banking comparison | [[finance/japan-ib-league-table|Japan IB league table]] | How to read underwriting / M&A adviser rankings. |

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

## Research Control

1. Verify license status against FSA's financial instruments business operator list.
2. Verify industry / rule interpretation against JSDA or FSA, not brokerage marketing pages.
3. Keep broker distribution analysis separate from investment advice or suitability conclusions.
4. For current rankings or league tables, record the source vendor and exact date range because rankings are not stable.

## Backlog

| Priority | Page | Why |
|---|---|---|
| P1 | `JapanFG/legal-financial-licenses/securities-license-stack.md` | Dedicated legal page for Type I/II FIBO, registered financial institution, intermediary, advisory, and JSDA. |
| P1 | `securities/japan-online-brokerage-competition.md` | Compare Rakuten, SBI, Monex, au Kabucom / MUFG eSmart, Matsui, and PayPay Securities. |
| P2 | `securities/japan-underwriting-market-structure.md` | Route IPO / PO / bond underwriting and JPX lead-underwriter roles. |
| P2 | `securities/japan-market-infrastructure-map.md` | One-page map linking TSE, OSE, TOCOM, JSCC, JASDEC, PTS, JSF, and broker/order-routing layers. |

## Related

- [[JapanFG/INDEX]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
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
