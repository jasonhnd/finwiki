---
title: "Japan funds transfer service providers registry index"
aliases:
  - "Japan funds transfer registry"
  - "資金移動業者 registry"
  - "資金移動業者登録一覧"
  - "Japan money transfer operators"
domain: "payments"
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [payments, funds-transfer, payment-services-act, registry, fsa, wallets]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyo.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://www.fsa.go.jp/common/shinsei/shikinidou.html"
---

# Japan funds transfer service providers registry index

## Overview

FSA's funds transfer service provider list contains **83 registered operators as of 2026-04-30**. This page is the registry-control route for [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid]] analysis; it does not reproduce all row-level registry data.

Use this page when a company page under [[payments/INDEX|payments INDEX]] needs to be read as a money-transfer operator, wallet operator, remittance provider, PSP with transfer capability, or stablecoin-adjacent settlement company. The official FSA PDF remains the source of truth for registration numbers, dates, addresses, and service-type columns.

## Registry Snapshot

| Metric | Reading |
|---|---:|
| FSA as-of date | 2026-04-30 |
| Total registered funds-transfer service providers | 83 |
| Main regulator route | FSA `資金移動業者登録一覧` |
| Wiki reproduction policy | Do not copy all 83 rows; cite FSA and maintain material wiki routes here. |

## Jurisdiction Counts

| Jurisdiction | Operators |
|---|---:|
| 北海道財務局 | 2 |
| 関東財務局 | 76 |
| 東海財務局 | 1 |
| 北陸財務局 | 1 |
| 近畿財務局 | 3 |
| **Total** | **83** |

## Boundary

| Boundary | Treatment |
|---|---|
| Funds transfer service provider | Registered under the Payment Services Act to conduct exchange transactions outside the banking-license route. |
| Third-party prepaid issuer | Route to [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]] when value is non-withdrawable stored value. |
| Bank / bank agency | Route to [[banking/INDEX|banking]] when the core product is deposit-taking, bank account access, or bank agency. |
| Card acquiring / merchant contract | Route to [[payments/card-acquiring-japan-stack|card acquiring stack]] and METI's Installment Sales Act lists. |
| Stablecoin / EPI | Route to [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]] and EPI operator pages when electronic payment instruments are involved. |

## Existing Material Wiki Routes

These routes are material operators already covered or newly promoted in FinWiki. They are not a complete reproduction of the 83-row FSA list.

| Segment | Official / product route | Wiki route | Boundary note |
|---|---|---|---|
| Large code-payment wallet | PayPay株式会社 | [[payment-firms/paypay]] | Wallet, code payment, prepaid, funds transfer, wage digital payment adjacency |
| Marketplace wallet | 株式会社メルペイ | [[payment-firms/merpay]] | Marketplace payment and wallet route |
| Telecom wallet | auペイメント株式会社 | [[payment-firms/au-payment]] | au PAY funds-transfer / prepaid boundary |
| Prepaid electronic money | 楽天Edy株式会社 | [[payment-firms/rakuten-edy]] | Stored value plus funds-transfer registry route |
| Consumer wallet / prepaid card | 株式会社Kyash | [[payment-firms/kyash]] | Wallet, prepaid card, funds transfer |
| Household wallet | 株式会社スマートバンク | [[payment-firms/smartbank]] | Consumer wallet and card-linked savings UX |
| Retail / ATM settlement | 株式会社セブン・ペイメントサービス | [[payment-firms/seven-payment-service]] | Seven & i settlement infrastructure |
| PSP / gateway | GMOペイメントゲートウェイ株式会社 | [[payment-firms/gmo-payment-gateway]] | Listed PSP with funds-transfer registration |
| PSP / gateway | GMOイプシロン株式会社 | [[payment-firms/gmo-epsilon]] | SME merchant PSP / transfer route |
| PSP / gateway | SBペイメントサービス株式会社 | [[payment-firms/sb-payment-service]] | SoftBank / PayPay group merchant PSP |
| PSP / gateway | 株式会社DGフィナンシャルテクノロジー | [[payment-firms/dg-financial-technology]] | Digital Garage PSP / merchant settlement route |
| QR gateway | 株式会社ネットスターズ | [[payment-firms/netstars]] | StarPay QR / multi-cashless gateway and funds-transfer registration |
| COIN+ / Air Wallet | 株式会社リクルートMUFGビジネス | [[payment-firms/recruit-mufg-business]] | Recruit + MUFG wallet / transfer operator |
| Travel wallet | JALペイメント・ポート株式会社 | [[payment-firms/jal-payment-port]] | JAL Pay, prepaid, bank agency, transfer route |
| Cross-border remittance | ワイズ・ペイメンツ・ジャパン株式会社 | [[payment-firms/wise-payments-japan]] | Cross-border remittance / multi-currency transfer |
| Cross-border remittance | REVOLUT TECHNOLOGIES JAPAN株式会社 | [[payment-firms/revolut-technologies-japan]] | App-based international transfer / wallet route |
| Cross-border remittance | PayPal Pte. Ltd. | [[payment-firms/paypal-pte-ltd-japan]] | Cross-border payment / wallet boundary |
| Cross-border remittance | ペイオニア・ジャパン株式会社 | [[payment-firms/payoneer-japan]] | Marketplace payout and cross-border remittance |
| Cross-border remittance | ウエスタンユニオンジャパン株式会社 | [[payment-firms/western-union-japan]] | Remittance network |
| Cross-border remittance | SBIレミット株式会社 | [[payment-firms/sbi-remit]] | SBI group remittance operator |
| FX / travel money | トラベレックスジャパン株式会社 | [[payment-firms/travelex-japan]] | Retail FX / remittance adjacency |
| Cross-border business payments | Airwallex Japan株式会社 | [[payment-firms/airwallex-japan]] | Cross-border B2B payment infrastructure |
| Stablecoin-adjacent funds transfer | JPYC株式会社 | [[payment-firms/jpyc]] | Funds transfer + stablecoin / EPI adjacency |
| Bank-group consumer finance | 株式会社アプラス | [[card-issuers/aplus]] | Installment / card / funds-transfer adjacency |
| Telecom FG watchlist | 株式会社NTTドコモ・フィナンシャルグループ | [[megabanks/ndfg]] | New registry row; watch operating-company routing as group structure matures |

## Promotion Rules

Promote a registry row into a standalone wiki page only when the operator is:

- a major consumer wallet, remittance network, merchant PSP, code-payment gateway, listed group, or stablecoin-adjacent operator;
- already important for a [[payments/cashless-jp-landscape|Japan cashless payment]] analysis thread;
- public-source rich enough to support strategy, license-boundary, and risk analysis; or
- needed to resolve a parent / operating-company distinction in [[financial-regulators/missing-financial-institutions-backlog|the JapanFG expansion backlog]].

## Related

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## Sources

- FSA license / registration index: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- FSA forms / regulatory route for funds-transfer operators: https://www.fsa.go.jp/common/shinsei/shikinidou.html
