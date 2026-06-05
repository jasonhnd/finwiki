---
source: payment-firms/gmo-postpay
source_hash: 8627021be5280eb9
lang: en
status: machine
fidelity: ok
title: "GMO Postpay"
translated_at: 2026-05-31T15:29:03.911Z
---
# GMO Postpay

## Wiki route

This entry sits under the [[payment-firms/INDEX|payment-firms INDEX]] as a PSP-side BNPL product. Read it against the [[payment-firms/bnpl-landscape|Japan BNPL landscape]] system note, with the [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] sibling explaining the merchant-acquiring stack and the [[payment-firms/net-protections-hd|Net Protections HD]] / [[payment-firms/paidy|Paidy]] peers showing pure-play BNPL. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] frames the regulatory question, the [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] anchors registration, and the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] places it next to card and code-payment economics.

## TL;DR

GMO Postpay is an e-commerce post-payment service operated by GMO Payment Service, Inc., an affiliate within GMO Internet Group and related to [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]. It is a case of a PSP-originated group internalizing BNPL operations: merchant onboarding, credit screening, invoice issuance, and collection agency functions are offered as an integrated package. It sits beside Net Protections' NP Postpay and Yamato's [[payment-firms/kuroneko-atobarai|Kuroneko post-payment]] as a major Japanese e-commerce deferred-payment option.

## 1. Entity and license boundary

| Item | Reading |
|---|---|
| Operating entity | GMO Payment Service, Inc. |
| Group | GMO Internet Group; sibling / affiliated relationship with [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] |
| Product type | E-commerce deferred payment: invoice enclosure plus convenience-store, bank-transfer, and electronic-barcode collection |

## 2. Business role

- GMO Payment Gateway provides the card-acquiring PSP line, while GMO Payment Service provides deferred payment and convenience-store collection agency functions. This lets e-commerce merchants source multiple payment methods through the GMO group. ^[extracted]
- By handling credit screening, invoice issuance, reminders, and collections for merchants, the product is a representative PSP-originated BNPL model that adds credit functionality to a payment-processing stack. ^[extracted]
- B2C e-commerce, especially mail-order and subscription commerce, is the core segment.

## 3. Why this standalone page matters

The [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] page focuses on card-payment PSP functions. Keeping deferred payment on a separate operating-entity page for [[payment-firms/gmo-postpay|GMO Payment Service]] makes the PSP, post-payment, and convenience-store collection boundaries explicit.

## 4. Regulation and policy

- **Payment Services Act adjacency**: Collection agency work and prepaid-payment-instrument boundaries can become complicated in PSP-originated BNPL.
- **Personal Information Protection Act**: The relevant data perimeter includes credit-screening data and e-commerce purchase histories.

## Related

- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/bnpl-landscape]]
- [[payment-firms/net-protections-hd]]
- [[payment-firms/kuroneko-atobarai]]
- [[payment-firms/paidy]]
- [[payment-firms/atone]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## Sources

- GMO Payment Service corporate site: https://gmo-ps.com/
- GMO Payment Service post-payment service page: https://gmo-ps.com/service/postpay/
- GMO Payment Gateway corporate site (sibling PSP): https://www.gmo-pg.com/corp/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
