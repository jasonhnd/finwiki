---
title: "Japan third-party prepaid payment instrument issuers registry index"
aliases:
  - "Japan prepaid issuer registry"
  - "third-party prepaid payment instrument issuers"
  - "第三者型前払式支払手段発行者 registry"
  - "前払式支払手段発行者一覧"
domain: "payments"
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [payments, prepaid, payment-services-act, registry, fsa, wallet]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/policy/prepaid/"
---

# Japan third-party prepaid payment instrument issuers registry index

## TL;DR

FSA's third-party prepaid payment instrument issuer list contains **803 issuers as of 2026-04-30**. This page is the registry-control route for the prepaid issuer surface. It does not reproduce all 803 rows; the official FSA workbook remains the complete row-level source of truth.

Use this page to separate prepaid / stored-value issuance from funds-transfer, credit-card, points, and stablecoin / EPI routes. Create standalone pages only for material wallet, card, retail, transport, game, or fintech operators.

## Boundary

| Boundary | Treatment |
|---|---|
| Third-party prepaid payment instrument issuer | Registered issuer of prepaid value usable at third-party merchants / stores. Full population is controlled by FSA `daisan.xlsx`. |
| Funds-transfer service provider | Use FSA funds-transfer list and [[payments/funds-transfer-vs-prepaid-boundary]]. |
| Credit-card / installment operator | Use METI Installment Sales Act registries and [[payments/card-acquiring-japan-stack]]. |
| Loyalty points | Route to [[loyalty/INDEX]] unless legal value is prepaid payment instrument. |
| Stablecoin / EPI | Route to [[fintech/japan-stablecoin-regulatory-landscape]] and [[exchanges/jp-exchange-sbi-vc-trade]]. |

## Registry Snapshot

| Metric | Reading |
|---|---:|
| FSA as-of date | 2026-04-30 |
| Total third-party prepaid issuers | 803 |
| Largest jurisdiction by issuer count | 関東財務局: 314 |
| Registry reproduction policy | Do not copy 803 rows into wiki; cite FSA workbook and keep jurisdiction counts / material routes here. |

## Jurisdiction Counts

| Jurisdiction | Issuers |
|---|---:|
| 北海道財務局 | 44 |
| 東北財務局 | 99 |
| 関東財務局 | 314 |
| 東海財務局 | 62 |
| 北陸財務局 | 38 |
| 近畿財務局 | 71 |
| 中国財務局 | 59 |
| 四国財務局 | 36 |
| 福岡財務支局 | 39 |
| 九州財務局 | 35 |
| 沖縄総合事務局 | 6 |
| **Total** | **803** |

## Existing Material Wiki Routes

These rows are not a completeness claim for all major prepaid issuers. They are the currently routed material operators already present in FinWiki.

| Official name in FSA list | Registration date | Corporate number | Wiki route | Boundary note |
|---|---|---:|---|---|
| 三菱ＵＦＪニコス株式会社 | 1991-11-22 | 8010001000016 | [[card-issuers/mufg-nicos]] | Card / prepaid / settlement group operator |
| 株式会社セブン・カードサービス | 2007-02-22 | 4010001088278 | [[card-issuers/seven-card-service]] | Seven & i card / prepaid adjacency |
| ａｕペイメント株式会社 | 2010-09-30 | 5010401069983 | [[payment-firms/au-payment]] | au PAY prepaid / funds-transfer boundary |
| ＳＢペイメントサービス株式会社 | 2010-12-10 | 4010401058731 | [[payment-firms/sb-payment-service]] | Merchant PSP / prepaid adjacency |
| ライフカード株式会社 | 2011-04-01 | 3020001086810 | [[card-issuers/life-card]] | Card and prepaid / guarantee adjacency |
| 株式会社エポスカード | 2015-01-08 | 6011201010186 | [[card-issuers/epos-card]] | Marui group card / prepaid adjacency |
| 楽天Ｅｄｙ株式会社 | 2016-07-21 | 3010901038102 | [[payment-firms/rakuten-edy]] | Prepaid electronic money operator |
| 株式会社Ｋｙａｓｈ | 2017-01-16 | 9011001103831 | [[payment-firms/kyash]] | Wallet / prepaid-card / funds-transfer fintech |
| ＰａｙＰａｙ株式会社 | 2018-10-05 | 5010001192707 | [[payment-firms/paypay]] | Code-payment wallet; prepaid / funds-transfer / points decomposition required |
| 株式会社メルペイ | 2019-01-24 | 1010401135178 | [[payment-firms/merpay]] | Marketplace wallet / code-payment operator |
| イオンフィナンシャルサービス株式会社 | 2023-04-24 | 2010001010887 | [[card-issuers/aeon-financial-service]] | Retail finance group / prepaid adjacency |
| 株式会社スマートバンク | 2024-03-26 | 8011001127534 | [[payment-firms/smartbank]] | Household wallet / prepaid card adjacency |
| 三井住友カード株式会社 | 1990-12-03 | 3120001082353 | [[card-issuers/smbc-card]] | Card issuer / prepaid adjacency |

## Promotion Rules

Promote an issuer from registry-only to standalone page only if it is:

- a major wallet, code-payment, card, transport, retail, game, or platform operator;
- already linked to a JapanFG / payments / fintech analysis thread;
- strategically important for prepaid vs funds-transfer vs points decomposition;
- public-source rich enough to support a standalone page.

## Related

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, "前払式支払手段（第三者型）発行者登録一覧", `daisan.xlsx`, as of 2026-04-30.
- FSA, prepaid payment instruments policy page.
