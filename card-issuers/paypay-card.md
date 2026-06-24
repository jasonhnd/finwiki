---
title: "PayPayカード (PayPay Card)"
aliases: ["PayPay Card", "PayPayカード", "PayPayカード株式会社"]
domain: card-issuers
created: 2026-05-21
last_updated: 2026-06-24
last_tended: 2026-06-24
review_by: 2026-12-24
confidence: likely
tags: [JapanFG, payments, credit-card, code-payment, consumer-credit]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
sources:
  - "https://www.paypay-card.co.jp/company/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
---

# PayPayカード (PayPay Card)


## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]]. Read it with [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the broader system boundary.

## TL;DR

PayPayカードは [[megabanks/paypay-fg|PayPay金融グループ]] のクレジットカード / PayPayクレジット operator。PayPay wallet の支払い体験に credit line を組み込む役割を持つため、wallet と card issuer を分けて管理する必要がある。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | PayPayカード株式会社 |
| Group | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| Main lanes | PayPay Card, PayPay Card Gold, PayPay credit products, lending disclosures |
| Regulatory route | Official company notices; METI credit-transaction materials for credit-card / Installment Sales Act control. ^[verified-2026-06-24] |
| Company-page product split | Official company navigation separates PayPay Card, PayPay Card Gold, and PayPay Credit, while the company footer separately discloses lending registration. ^[verified-2026-06-24] |

## 2. Business role

- Adds revolving / credit-card economics to PayPay's code-payment and app distribution base; the company page explicitly positions PayPay Card and PayPay Credit as PayPay-app-adjacent credit products. ^[verified-2026-06-24]
- Links points, app checkout, card acquiring partners, and consumer credit into one retail finance funnel; see [[payments/japan-card-issuer-acquirer-processor-split]] for the issuer / acquirer / processor map.
- The card / credit line should not be collapsed into [[payment-firms/paypay]]: PayPay is the wallet / funds-transfer / prepaid operating company, while PayPay Card carries credit-card and lending disclosures. ^[verified-2026-06-24]
- Important for comparing PayPay with its closest ecosystem-finance peer [[card-issuers/rakuten-card|楽天カード]], plus au PAY, d払い, and traditional card issuers — scheme economics live at [[payments/japan-payment-scheme-economics-matrix]].

## 3. Why this standalone page matters

PayPay the wallet and PayPay Card the credit operator have different licensing, balance-sheet, and consumer-protection questions. This page keeps that boundary visible.

## Related

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## Sources

- PayPay Card company page: https://www.paypay-card.co.jp/company/
- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI registered merchant-contracting operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
