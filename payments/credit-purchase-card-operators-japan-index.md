---
title: "Japan credit purchase and card operator registry index"
aliases:
  - "Japan credit purchase registry"
  - "METI Installment Sales Act operator index"
  - "割賦販売法 registered operators"
  - "クレジットカード番号等取扱契約締結事業者 registry"
  - "JapanFG/odakyu-cards"
  - "JapanFG/tokyu-card"
domain: "payments"
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [payments, credit-card, installment-sales-act, registry, meti, acquiring]
status: active
sources:
  - "https://www.meti.go.jp/policy/economy/consumer/credit/index.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
---

# Japan credit purchase and card operator registry index

## Overview

METI's Installment Sales Act public lists are the control surface for Japanese credit-card issuing, shopping credit, individual installment credit, and merchant-contracting / card-number handling. As of **2026-04 month-end**, METI lists **241 registered comprehensive credit purchase intermediaries**, **0 small comprehensive credit purchase intermediaries**, **138 registered individual credit purchase intermediaries**, and **275 registered credit-card-number handling contract concluding operators**.

Read this page with [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] and [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] to separate card credit, merchant acquiring, PSP operations, and wallet / transfer products. The official METI PDFs remain the row-level source of truth.

## Registry Snapshot

| Registry | As-of date | Count | Wiki treatment |
|---|---:|---:|---|
| 登録包括信用購入あっせん業者 | 2026-04 month-end | 241 | Route material card issuers / credit companies; keep regional long tail in METI PDFs. |
| 登録少額包括信用購入あっせん業者 | 2026-04 month-end | 0 | No standalone wiki action. |
| 登録個別信用購入あっせん業者 | 2026-04 month-end | 138 | Promote only material installment-credit, auto-finance, BNPL, or bank-group credit operators. |
| クレジットカード番号等取扱契約締結事業者 | 2026-04 month-end | 275 | Use for acquirers, merchant PSPs, and card-number handling responsibility. |

## Boundary

| Boundary | Treatment |
|---|---|
| Comprehensive credit purchase intermediary | Card / revolving / credit purchase operator route; often overlaps with card issuer pages. |
| Individual credit purchase intermediary | Shopping credit, auto finance, education / medical credit, and other sales-finance routes. |
| Credit-card-number handling contract concluding operator | Merchant-contracting and card-data-control route; essential for PSP / acquiring analysis. |
| Funds-transfer operator | Use FSA registration and [[payments/funds-transfer-service-providers-japan-index]]. |
| Prepaid issuer | Use FSA prepaid registration and [[payments/prepaid-payment-instrument-issuers-japan-index]]. |

## Existing Material Wiki Routes

| Segment | Routes | Why these are standalone |
|---|---|---|
| Megabank / bank-group card issuers | [[card-issuers/smbc-card]], [[card-issuers/mufg-nicos]], [[card-issuers/jcb]], [[trust-banks/mitsubishi-ufj-trust-bank]] | Issuing / acquiring, bank group strategy, card-network or trust-bank adjacency. |
| Retail / ecosystem card issuers | [[card-issuers/rakuten-card]], [[card-issuers/paypay-card]], [[card-issuers/aeon-financial-service]], [[card-issuers/epos-card]], [[card-issuers/seven-card-service]], [[card-issuers/ucs-card]], [[card-issuers/life-card]], [[card-issuers/pocket-card]] | Consumer credit, loyalty, retail finance, and payment-data loops. |
| Consumer finance / installment | [[consumer-finance/smbc-consumer-finance]], [[consumer-finance/acom]], [[consumer-finance/aiful]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[card-issuers/aplus]], [[consumer-finance/shinsei-financial]], [[card-issuers/toyota-finance]] | Lending / guarantee / installment-credit operating companies. |
| Merchant PSP / acquiring | [[payment-firms/gmo-payment-gateway]], [[payment-firms/gmo-epsilon]], [[payment-firms/sb-payment-service]], [[payment-firms/dg-financial-technology]], [[payment-firms/netstars]] | Merchant onboarding, gateway, card-number handling, and settlement-risk infrastructure. |
| Wallet / embedded finance | [[payment-firms/recruit-mufg-business]], [[payment-firms/jal-payment-port]], [[payment-firms/paypay]], [[payment-firms/merpay]], [[payment-firms/au-payment]] | Wallets often combine prepaid, transfer, merchant payment, and card-linked rails. |

## Analysis Lens

For FinWiki, the most important use of the METI lists is not "who appears in the PDF" but "what role the operator plays in the credit and acquiring stack."

- Card issuers own consumer credit and repayment behavior.
- Individual-credit operators connect merchants, consumers, and product financing.
- Merchant-contracting operators decide which merchants can accept cards and carry onboarding / monitoring duties.
- PSPs may be technically central even when the final merchant-contracting authority belongs to another registered acquirer.
- Some operators sit in multiple lists, so one company page explains the boundary instead of duplicating pages per license.

## Related

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI registered operator lists: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI registered comprehensive credit purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI registered individual credit purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI credit-card-number handling contract concluding operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
