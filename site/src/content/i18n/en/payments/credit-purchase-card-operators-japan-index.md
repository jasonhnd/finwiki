---
source: payments/credit-purchase-card-operators-japan-index
source_hash: 823daef870391414
lang: en
status: machine
fidelity: ok
title: "Japan credit purchase and card operator registry index"
translated_at: 2026-06-01T03:31:12.249Z
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
| Megabank / bank-group card issuers | [[JapanFG/smbc-card]], [[JapanFG/mufg-nicos]], [[JapanFG/jcb]], [[JapanFG/mitsubishi-ufj-trust-bank]] | Issuing / acquiring, bank group strategy, card-network or trust-bank adjacency. |
| Retail / ecosystem card issuers | [[JapanFG/rakuten-card]], [[JapanFG/paypay-card]], [[JapanFG/aeon-financial-service]], [[JapanFG/epos-card]], [[JapanFG/seven-card-service]], [[JapanFG/ucs-card]], [[JapanFG/life-card]], [[JapanFG/pocket-card]] | Consumer credit, loyalty, retail finance, and payment-data loops. |
| Consumer finance / installment | [[JapanFG/smbc-consumer-finance]], [[JapanFG/acom]], [[JapanFG/aiful]], [[JapanFG/orico]], [[JapanFG/jaccs]], [[JapanFG/aplus]], [[JapanFG/shinsei-financial]], [[JapanFG/toyota-finance]] | Lending / guarantee / installment-credit operating companies. |
| Merchant PSP / acquiring | [[JapanFG/gmo-payment-gateway]], [[JapanFG/gmo-epsilon]], [[JapanFG/sb-payment-service]], [[JapanFG/dg-financial-technology]], [[JapanFG/netstars]] | Merchant onboarding, gateway, card-number handling, and settlement-risk infrastructure. |
| Wallet / embedded finance | [[JapanFG/recruit-mufg-business]], [[JapanFG/jal-payment-port]], [[JapanFG/paypay]], [[JapanFG/merpay]], [[JapanFG/au-payment]] | Wallets often combine prepaid, transfer, merchant payment, and card-linked rails. |

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
- [[JapanFG/missing-financial-institutions-backlog]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI registered operator lists: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI registered comprehensive credit purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI registered individual credit purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI credit-card-number handling contract concluding operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
