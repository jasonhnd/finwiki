---
source: payments/funds-transfer-service-providers-japan-index
source_hash: 4f5cf344ee7b1162
lang: en
status: machine
fidelity: ok
title: "Japan funds transfer service providers registry index"
translated_at: 2026-06-01T03:31:12.281Z
---

# Japan funds transfer service providers registry index

## Overview

FSA's funds transfer service provider list contains **83 registered operators as of 2026-04-30**. This page is the registry-control route for [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid]] analysis; it does not reproduce all row-level registry data.

Use this page when a company page under [[JapanFG/INDEX|JapanFG]] needs to be read as a money-transfer operator, wallet operator, remittance provider, PSP with transfer capability, or stablecoin-adjacent settlement company. The official FSA PDF remains the source of truth for registration numbers, dates, addresses, and service-type columns.

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
| Large code-payment wallet | PayPay Corp. | [[JapanFG/paypay]] | Wallet, code payment, prepaid, funds transfer, wage digital payment adjacency |
| Marketplace wallet | Merpay, Inc. | [[JapanFG/merpay]] | Marketplace payment and wallet route |
| Telecom wallet | au Payment Corp. | [[JapanFG/au-payment]] | au PAY funds-transfer / prepaid boundary |
| Prepaid electronic money | Rakuten Edy, Inc. | [[JapanFG/rakuten-edy]] | Stored value plus funds-transfer registry route |
| Consumer wallet / prepaid card | 株式会社Kyash | [[JapanFG/kyash]] | Wallet, prepaid card, funds transfer |
| Household wallet | SmartBank, Inc. | [[JapanFG/smartbank]] | Consumer wallet and card-linked savings UX |
| Retail / ATM settlement | Seven Payment Service Co., Ltd. | [[JapanFG/seven-payment-service]] | Seven & i settlement infrastructure |
| PSP / gateway | GMO Payment Gateway, Inc. | [[JapanFG/gmo-payment-gateway]] | Listed PSP with funds-transfer registration |
| PSP / gateway | GMO Epsilon, Inc. | [[JapanFG/gmo-epsilon]] | SME merchant PSP / transfer route |
| PSP / gateway | SB Payment Service Corp. | [[JapanFG/sb-payment-service]] | SoftBank / PayPay group merchant PSP |
| PSP / gateway | DG Financial Technology, Inc. | [[JapanFG/dg-financial-technology]] | Digital Garage PSP / merchant settlement route |
| QR gateway | Netstars Co., Ltd. | [[JapanFG/netstars]] | StarPay QR / multi-cashless gateway and funds-transfer registration |
| COIN+ / Air Wallet | Recruit MUFG Business Co., Ltd. | [[JapanFG/recruit-mufg-business]] | Recruit + MUFG wallet / transfer operator |
| Travel wallet | JAL Payment Port Co., Ltd. | [[JapanFG/jal-payment-port]] | JAL Pay, prepaid, bank agency, transfer route |
| Cross-border remittance | Wise Payments Japan K.K. | [[JapanFG/wise-payments-japan]] | Cross-border remittance / multi-currency transfer |
| Cross-border remittance | Revolut Technologies Japan, Inc. | [[JapanFG/revolut-technologies-japan]] | App-based international transfer / wallet route |
| Cross-border remittance | PayPal Pte. Ltd. | [[JapanFG/paypal-pte-ltd-japan]] | Cross-border payment / wallet boundary |
| Cross-border remittance | Payoneer Japan Co., Ltd. | [[JapanFG/payoneer-japan]] | Marketplace payout and cross-border remittance |
| Cross-border remittance | Western Union Japan K.K. | [[JapanFG/western-union-japan]] | Remittance network |
| Cross-border remittance | SBI Remit Co., Ltd. | [[JapanFG/sbi-remit]] | SBI group remittance operator |
| FX / travel money | Travelex Japan K.K. | [[JapanFG/travelex-japan]] | Retail FX / remittance adjacency |
| Cross-border business payments | Airwallex Japan株式会社 | [[JapanFG/airwallex-japan]] | Cross-border B2B payment infrastructure |
| Stablecoin-adjacent funds transfer | JPYC株式会社 | [[JapanFG/jpyc]] | Funds transfer + stablecoin / EPI adjacency |
| Bank-group consumer finance | Aplus Co., Ltd. | [[JapanFG/aplus]] | Installment / card / funds-transfer adjacency |
| Telecom FG watchlist | NTT Docomo Financial Group, Inc. | [[JapanFG/ndfg]] | New registry row; watch operating-company routing as group structure matures |

## Promotion Rules

Promote a registry row into a standalone wiki page only when the operator is:

- a major consumer wallet, remittance network, merchant PSP, code-payment gateway, listed group, or stablecoin-adjacent operator;
- already important for a [[payments/cashless-jp-landscape|Japan cashless payment]] analysis thread;
- public-source rich enough to support strategy, license-boundary, and risk analysis; or
- needed to resolve a parent / operating-company distinction in [[JapanFG/missing-financial-institutions-backlog|the JapanFG expansion backlog]].

## Related

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/card-acquiring-japan-stack]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## Sources

- FSA license / registration index: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- FSA forms / regulatory route for funds-transfer operators: https://www.fsa.go.jp/common/shinsei/shikinidou.html
