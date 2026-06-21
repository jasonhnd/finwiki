---
title: "PayPayカード (PayPay Card)"
aliases: ["PayPay Card", "PayPayカード", "PayPayカード株式会社"]
domain: card-issuers
created: 2026-05-21
last_updated: 2026-06-20
last_tended: 2026-06-20
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, credit-card, code-payment, consumer-credit]
status: active
sources:
  - "https://www.paypay-card.co.jp/company/"
  - "https://www.paypay-card.co.jp/company/profile/"
  - "https://www.paypay-card.co.jp/company/business/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: subsidiary_of
    target: megabanks/paypay-fg
    evidence: group_profile
    source: "public company profile / IR source listed in this page sources"
    as_of: 2026-06-21
    confidence: likely
---

# PayPayカード (PayPay Card)


## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]]. Read it with [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the broader system boundary.

## TL;DR

PayPayカードは [[megabanks/paypay-fg|PayPay金融グループ]] のクレジットカード / PayPayクレジット operator。PayPay wallet の支払い体験に credit line を組み込む役割を持つため、wallet と card issuer を分けて管理する必要がある。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | PayPayカード株式会社 |
| Group | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| Main lanes | PayPay Card, PayPay Card Gold, PayPay credit products, lending disclosures |
| Regulatory route | Official company notices; METI registered-operator lists for credit-card / Installment Sales Act control. |

## 2. Business role

- Adds credit-card and next-month payment economics to PayPay's code-payment and app distribution base.
- Links points, app checkout, PayPay Card, PayPay Card Gold, PayPay Credit, card acquiring partners, consumer credit, lending disclosure, bank-agency, and electronic-payment-agency surfaces into one retail finance funnel; see [[payments/japan-card-issuer-acquirer-processor-split]] for the issuer / acquirer / processor map.
- The company profile identifies PayPay株式会社 as shareholder and lists comprehensive credit-purchase intermediary, card-number merchant-contracting, money-lending, electronic-payment-agency, and bank-agency registrations; the card page is therefore the credit operator boundary inside the PayPay group.
- Important for comparing PayPay with its closest ecosystem-finance peer [[card-issuers/rakuten-card|楽天カード]], plus au PAY, d払い, and traditional card issuers — scheme economics live at [[payments/japan-payment-scheme-economics-matrix]].

## 3. Issuer versus wallet boundary

| Layer | Public-source reading |
|---|---|
| Card products | The business page describes PayPay Card, PayPay Card Gold, and PayPay Credit as the core services. |
| Wallet handoff | PayPay Credit is consumed through the PayPay app, but PayPay Card is the registered credit operator. Keep wallet balance and credit receivable analysis separate. |
| Group relationship | The profile lists PayPay株式会社 as shareholder, tying the issuer into PayPay FG / SoftBank-LY distribution while leaving a distinct legal and regulatory entity. |
| Regulatory route | METI lists are the public anchor for Installment Sales Act / card-number operator boundaries; the company profile adds lending, electronic-payment-agency, and bank-agency disclosures. |

## 4. Why this standalone page matters

PayPay the wallet and PayPay Card the credit operator have different licensing, balance-sheet, and consumer-protection questions. This page keeps that boundary visible.

## Related

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## Sources

- PayPay Card company page: https://www.paypay-card.co.jp/company/
- PayPay Card company profile: https://www.paypay-card.co.jp/company/profile/
- PayPay Card business overview: https://www.paypay-card.co.jp/company/business/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
