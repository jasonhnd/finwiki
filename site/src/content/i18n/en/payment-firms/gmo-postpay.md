---
source: payment-firms/gmo-postpay
source_hash: aa3e7731d2b81515
lang: en
status: machine
fidelity: ok
title: "GMO後払い (GMO Postpay)"
translated_at: 2026-06-15T03:48:21.834Z
---

# GMO後払い (GMO Postpay)

## Wiki route

This entry sits under the [[payment-firms/INDEX|payment-firms INDEX]] as a **PSP-side BNPL** product. Read it against the [[payment-firms/bnpl-landscape|Japan BNPL landscape]] system note, with the [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]] sibling explaining the merchant-acquiring stack and the [[payment-firms/net-protections-hd|Net Protections HD]] / [[payment-firms/paidy|Paidy]] peers showing pure-play BNPL. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] frames the regulatory question, the [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] anchors registration, and the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] places it next to card / code economics.

## TL;DR

GMO後払い is an EC postpay payment operated by **GMO ペイメントサービス株式会社** (GMO Internet G, an affiliate of [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]). It is a case of a PSP-origin group building and operating BNPL in-house, providing merchant contracting / credit / invoice issuance / collection agency in one package. Alongside Net Protections' NP postpay and Yamato's [[payment-firms/kuroneko-atobarai|クロネコ代金後払い]], it is a major option for EC postpay.

## 1. Legal entity / license boundary

| Item | Reading |
|---|---|
| Operating entity | GMO ペイメントサービス株式会社 |
| Group | GMO Internet Group (sibling company / equity relationship with [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]])|
| Product type | EC postpay payment (invoice enclosed + convenience store / bank transfer / electronic barcode collection)|

## 2. Business role

- Against the **card-payment PSP** line provided by GMO ペイメントゲートウェイ ([[payment-firms/gmo-payment-gateway|GMO PG]]), GMO ペイメントサービス handles the sibling line of **postpay** and **convenience-store collection agency**. EC merchants can provide a variety of payment methods one-stop with GMO 1 社. ^[extracted]
- By performing credit judgment + invoice issuance + dunning / collection on the merchant's behalf, it is a representative example of the **PSP-type BNPL** category, which adds a credit function on top of a pure PSP. ^[extracted]
- BtoC EC (especially mail-order・subscription EC) is the core segment.

## 3. Why this standalone page matters

Because the [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]] main page has **card-payment PSP** as its theme, placing the postpay business as a separate entity ([[payment-firms/gmo-postpay|GMO ペイメントサービス]]) on a standalone page makes the license boundary of PSP / postpay / convenience-store collection explicit.

## 4. Regulation / policy

- **Payment Services Act adjacency**: the boundary between collection-agency business / prepaid payment instruments tends to become complicated for PSP-type BNPL.
- **Personal Information Protection Act**: handling of credit data and EC purchase history.

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
- GMO Payment Service "後払い" service page: https://gmo-ps.com/service/postpay/
- GMO Payment Gateway corporate site (sibling PSP): https://www.gmo-pg.com/corp/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
