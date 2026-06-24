---
title: "SBペイメントサービス (SB Payment Service)"
aliases: ["SB Payment Service", "SBPS", "SBペイメントサービス", "SBペイメントサービス株式会社"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-24
last_tended: 2026-06-24
review_by: 2026-12-24
confidence: likely
tags: [JapanFG, payments, psp, acquirer, merchant-services]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
sources:
  - "https://www.sbpayment.co.jp/info/"
  - "https://www.sbpayment.co.jp/info/business/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
---

# SBペイメントサービス (SB Payment Service)


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

SBペイメントサービスは SoftBank group の merchant payment / PSP operator。公式事業紹介はオンラインから店舗までの決済サービスと、アクワイアラとしての加盟店審査・管理・決済サービス提供を示しており、[[payments/card-acquiring-japan-stack|card acquiring stack]] の主要ページ。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | SBペイメントサービス株式会社 |
| Group context | SoftBank / LY / PayPay payment ecosystem |
| Main lanes | PSP, merchant acquiring, online and offline payment services |
| Regulatory route | Card-number merchant-contracting / acquiring control through METI credit-transaction materials and official business disclosures. ^[verified-2026-06-24] |

## 2. Business role

- Provides merchant-facing payment infrastructure beyond PayPay's consumer wallet: the company describes online-to-store payment services for businesses rather than a consumer wallet product. ^[verified-2026-06-24]
- Links card acceptance, online checkout, security, and merchant management; the business page says SBPS supports contracting, settlement, system, and operations for online payments and handles merchant screening / management / payment services as an acquirer. ^[verified-2026-06-24]
- Its role is the SoftBank ecosystem's merchant-services layer: PayPay is the consumer code-payment wallet, [[card-issuers/paypay-card]] is the credit issuer, and SBPS is the PSP / acquirer interface for merchants. ^[verified-2026-06-24]
- The business page also states that SBPS holds Visa, Mastercard, and UnionPay brand licences, which makes the page useful when mapping Japanese PSPs that directly touch card-scheme acceptance. ^[verified-2026-06-24]
- Useful comparator against [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], [[payment-firms/gmo-epsilon|GMO Epsilon]], and [[payment-firms/dg-financial-technology|DGFT]].

## 3. Why this standalone page matters

SoftBank's payment stack has consumer wallet, card issuer, and merchant PSP layers. SBPS is the merchant-services layer, so it needs a separate operating-company page.

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SB Payment Service company information: https://www.sbpayment.co.jp/info/
- SB Payment Service business page: https://www.sbpayment.co.jp/info/business/
- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI registered merchant-contracting operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
