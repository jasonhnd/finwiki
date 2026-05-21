---
title: "payments domain"
aliases:
  - "payments INDEX"
  - "Japan payments domain"
  - "日本決済 domain"
domain: "payments"
created: 2026-05-20
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-15
confidence: likely
tags: [payments, index, cashless, regulation, JapanFG]
status: active
sources:
  - "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html"
  - "https://paymentsjapan.or.jp/category/publications/"
  - "https://www.fsa.go.jp/common/shinsei/dendai/dentori.html"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# payments domain

## TL;DR

This domain routes Japan payment and settlement pages. The current anchor is [[payments/cashless-jp-landscape|Japan cashless payment landscape]], which connects card, code payment, prepaid electronic money, PSP, bank-linked payment, loyalty points, and stablecoin / EPI adjacency. Major operating-company pages now live mostly under [[JapanFG/INDEX|JapanFG]], while large license populations such as third-party prepaid issuers are routed through registry-control pages.

Use this domain when the question is **how value moves at checkout or through a wallet**, not when the question is only "which financial group owns the product."

## Route Map

| Lane | Start here | Related control page |
|---|---|---|
| Japan cashless market | [[payments/cashless-jp-landscape|Japan cashless payment landscape]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Card acquiring / merchant PSP | [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] |
| Wallet legal boundary | [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Prepaid issuer registry | [[payments/prepaid-payment-instrument-issuers-japan-index|Japan third-party prepaid issuer registry]] | FSA `daisan.xlsx` |
| Points / campaign economics | [[loyalty/japan-points-landscape|Japan points landscape]] | [[loyalty/INDEX|loyalty INDEX]] |
| Retail payment platforms | [[retail/aeon-group|AEON Group]], [[retail/seven-and-i-hd|Seven & i]] | [[retail/INDEX|retail INDEX]] |
| Merchant PSP / acquiring | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[business/gmo-internet-group|GMO Internet Group]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Embedded bank payment | [[banking/baas-japan-landscape|BaaS Japan landscape]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]] | [[banking/INDEX|banking INDEX]] |
| Stablecoin / EPI payment | [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]], [[fintech/japan-ecisb-license|Japan ECISB license]] | [[fintech/INDEX|fintech INDEX]] |

## JapanFG Operator Anchors

| Lane | Operators |
|---|---|
| Card issuers / acquirers | [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/epos-card|EPOS Card]], [[JapanFG/life-card|Life Card]], [[JapanFG/pocket-card|Pocket Card]], [[JapanFG/ucs-card|UCS]], [[JapanFG/seven-card-service|Seven Card Service]] |
| Consumer finance / installment | [[JapanFG/smbc-consumer-finance|SMBC Consumer Finance]], [[JapanFG/aplus|APLUS]], [[JapanFG/aiful|AIFUL]], [[JapanFG/acom|ACOM]], [[JapanFG/orico|Orico]], [[JapanFG/jaccs|JACCS]] |
| Merchant PSP / gateway | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[JapanFG/gmo-epsilon|GMO Epsilon]], [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/dg-financial-technology|DGFT]] |
| Wallet / funds transfer | [[JapanFG/paypay|PayPay]], [[JapanFG/merpay|Merpay]], [[JapanFG/au-payment|au Payment]], [[JapanFG/rakuten-edy|Rakuten Edy]], [[JapanFG/kyash|Kyash]], [[JapanFG/smartbank|SmartBank]], [[JapanFG/pring|pring]], [[JapanFG/seven-payment-service|Seven Payment Service]] |
| Cross-border remittance | [[JapanFG/wise-payments-japan|Wise Payments Japan]], [[JapanFG/revolut-technologies-japan|Revolut Japan]], [[JapanFG/paypal-pte-ltd-japan|PayPal]], [[JapanFG/payoneer-japan|Payoneer Japan]], [[JapanFG/western-union-japan|Western Union Japan]], [[JapanFG/sbi-remit|SBI Remit]], [[JapanFG/travelex-japan|Travelex Japan]], [[JapanFG/airwallex-japan|Airwallex Japan]] |
| Stablecoin / EPI adjacency | [[JapanFG/jpyc|JPYC]], [[JapanFG/progmat|Progmat]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade / USDC]] |

## Active Entries

| Status | Page | Role |
|---|---|---|
| likely | [[payments/cashless-jp-landscape|Japan cashless payment landscape]] | Top-level Japan cashless market, legal stack, and competitive-map bridge |
| likely | [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] | Card acquiring, PSP registration, merchant-contracting, PCI DSS, and fraud-control boundary |
| likely | [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] | Wallet / stored-value classification between remittance and prepaid payment instruments |
| likely | [[payments/prepaid-payment-instrument-issuers-japan-index|Japan third-party prepaid issuer registry]] | FSA 803-row registry-control route for third-party prepaid payment instrument issuers |

## Expansion Backlog

| Priority | Candidate | Why |
|---|---|---|
| P2 | `payments/japan-code-payment-competitive-map.md` | PayPay / Rakuten Pay / d払い / au PAY / Merpay require a dedicated competitive page |
| P2 | `payments/psp-merchant-settlement-risk.md` | Merchant settlement, chargeback, fraud, and reserve risk deserve a control page |

## Related

- [[INDEX|FinWiki index]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[loyalty/INDEX|loyalty INDEX]]
- [[retail/INDEX|retail INDEX]]
- [[fintech/INDEX|fintech INDEX]]
