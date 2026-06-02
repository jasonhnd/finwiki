---
title: "Japan financial instruments business operators registry index"
aliases:
  - "FIEA operator registry"
  - "Japan FIBO registry"
  - "金融商品取引業者 registry"
  - "金融商品取引業者登録一覧"
  - "JapanFG/crowdcredit-incorporated"
  - "JapanFG/funds-incorporated"
  - "JapanFG/jiaa"
  - "JapanFG/jiaa-advisory"
  - "JapanFG/securite-crowdfunding"
domain: "securities"
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [securities, FIEA, FIBO, registry, fsa, brokers, asset-management]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.fsa.go.jp/en/regulated/licensed/fibo.xlsx"
---

# Japan financial instruments business operators registry index

## TL;DR

FSA's financial instruments business operator list contains **1,945 operators as of 2026-04-30**. This page is the registry-control route for the FIEA / FIBO population. It does not reproduce all 1,945 rows; the official FSA workbook remains the complete row-level source of truth.

Use this page to separate brokerage, Type I / Type II FIBO, investment advisory, investment management, PTS, tokenized-securities handling, and securities self-regulatory routes. Create standalone pages only for material brokers, asset managers, PTS / market-infrastructure operators, listed-company groups, or strategically important foreign operators.

## Boundary

| Boundary | Treatment |
|---|---|
| Financial instruments business operators | Full population controlled by FSA `kinyushohin.xlsx`; summarized here by category and jurisdiction. |
| Securities company / online broker | Standalone page when market share, group strategy, or retail distribution matters. |
| Asset manager | Standalone page when AUM, group strategy, ETF / fund platform, or public market relevance matters. |
| PTS / market infrastructure | Standalone pages under [[securities/INDEX]] or [[JapanFG/INDEX]] where relevant. |
| Long-tail advisers / Type II operators | Registry-only unless strategic. |

## Registry Snapshot

| Metric | Reading |
|---|---:|
| FSA as-of date | 2026-04-30 |
| Total FIBO operators | 1,945 |
| Type I operators | 291 |
| Type II operators | 1,223 |
| Investment advisory / agency operators | 994 |
| Investment management operators | 463 |
| Securities-related business rows | 1,194 |
| Electronic public offering handling rows | 70 |
| Electronic trading platform operation rows | 6 |
| Tokenized securities rights handling rows | 18 |
| PTS approval rows | 11 |
| Special financial instruments business operators | 25 |

FSA notes that one operator may have multiple registrations, so category subtotals do not add up to the total operator count.

## Jurisdiction Counts

| Jurisdiction | Operators |
|---|---:|
| 金融庁 | 413 |
| 北海道財務局 | 21 |
| 東北財務局 | 14 |
| 関東財務局 | 1,192 |
| 東海財務局 | 56 |
| 北陸財務局 | 10 |
| 近畿財務局 | 152 |
| 中国財務局 | 22 |
| 四国財務局 | 14 |
| 九州財務局 | 8 |
| 福岡財務支局 | 41 |
| 沖縄総合事務局 | 2 |
| **Total** | **1,945** |

## Existing Material Wiki Routes

These routes capture material operators already present in FinWiki. They are not a full row-level reproduction of the FSA workbook.

| Segment | Existing routes |
|---|---|
| Independent securities groups | [[JapanFG/nomura-hd]], [[JapanFG/daiwa-sg]] |
| Megabank securities arms | [[JapanFG/smbc-nikko]], [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]] |
| Online brokers | [[JapanFG/sbi-securities]], [[JapanFG/rakuten-securities]], [[JapanFG/monex-group]], [[JapanFG/mufg-esmart-securities]], [[JapanFG/paypay-securities]], [[JapanFG/gmo-click-securities]], [[JapanFG/dmm-com-securities]] |
| FX / derivatives brokers | [[JapanFG/traders-securities]], [[JapanFG/saxo-bank-securities]], [[JapanFG/sbi-fx-trade]] |
| Asset managers | [[JapanFG/nomura-asset-management]], [[JapanFG/asset-management-one]], [[JapanFG/mufg-asset-management]], [[JapanFG/smd-am]], [[JapanFG/daiwa-asset-management]], [[JapanFG/sbi-asset-management]], [[JapanFG/nikko-asset-management]] |
| PTS / market infrastructure | [[securities/japannext-securities]], [[securities/osaka-digital-exchange]] |
| Foreign investment banks / brokers | [[JapanFG/goldman-sachs-japan]], [[JapanFG/jpmorgan-japan]], [[JapanFG/morgan-stanley-japan]], [[JapanFG/bnp-paribas-japan]], [[JapanFG/ubs-japan]], [[JapanFG/barclays-japan]], [[JapanFG/citigroup-japan]], [[JapanFG/deutsche-japan]], [[JapanFG/bank-of-america-japan]], [[JapanFG/socgen-japan]] |

## Promotion Rules

Promote an operator from registry-only to standalone page only if it is:

- a major broker, asset manager, PTS, market-infrastructure operator, or listed-company group;
- strategically important for retail brokerage, NISA, security tokens, FX / derivatives, or capital-markets infrastructure;
- a foreign operator with material Japan branch / subsidiary presence;
- public-source rich enough to support standalone analysis.

## Related

- [[securities/INDEX]]
- [[JapanFG/INDEX]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/missing-financial-institutions-backlog]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, "金融商品取引業者登録一覧", `kinyushohin.xlsx`, as of 2026-04-30.
- FSA English financial instruments business operators list.
