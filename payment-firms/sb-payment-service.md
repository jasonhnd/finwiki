---
title: "SBペイメントサービス (SB Payment Service)"
aliases: ["SB Payment Service", "SBPS", "SBペイメントサービス", "SBペイメントサービス株式会社"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-20
last_tended: 2026-06-20
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, psp, acquirer, merchant-services]
status: active
sources:
  - "https://www.sbpayment.co.jp/info/"
  - "https://www.sbpayment.co.jp/info/profile/"
  - "https://www.sbpayment.co.jp/info/business/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: registered_as
    target: financial-licenses/payment-license-stack
    evidence: payment_registry
    source: "https://www.fsa.go.jp/menkyo/menkyo.html"
    as_of: 2026-06-21
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: supervisory_authority
    source: "https://www.fsa.go.jp/"
    as_of: 2026-06-21
    confidence: likely
---

# SBペイメントサービス (SB Payment Service)


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

SBペイメントサービスは SoftBank group の merchant payment / PSP operator。公式事業紹介はオンラインから店舗までの決済サービスと、アクワイアラとしての加盟店審査・管理・決済サービス提供を示しており、[[payments/card-acquiring-japan-stack|card acquiring stack]] の主要ページ。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | SBペイメントサービス株式会社 |
| Group context | SoftBank / LY / PayPay payment ecosystem |
| Main lanes | PSP, merchant acquiring, online and offline payment services |
| Regulatory route | Card-number merchant-contracting / acquiring control through METI registered-operator lists and official business disclosures. |

## 2. Business role

- Provides merchant-facing payment infrastructure beyond PayPay's consumer wallet, spanning online checkout, store-facing payment services, card / point services, collection agency, money-transfer, and related consulting lanes.
- Links card acceptance, online checkout, settlement operations, security controls, and merchant management. That makes it closer to a PSP / acquiring-control layer than to a consumer wallet brand.
- Its official profile identifies SoftBank as the 100% shareholder and lists PayPay SC as a related company, so the operating role should be read inside the broader SoftBank / PayPay merchant-services stack.
- Useful comparator against [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], [[payment-firms/gmo-epsilon|GMO Epsilon]], and [[payment-firms/dg-financial-technology|DGFT]].

## 3. PSP stack and regulatory position

| Layer | Public-source reading |
|---|---|
| Merchant PSP | The official business page frames SBPS as a provider of payment services from online to physical-store channels for business clients. |
| Settlement / collection | The company profile lists payment services, card / point services, collection agency services, money-transfer services, and related consulting. |
| Installment Sales Act adjacency | METI's registered-operator page is the control point for card-number merchant-contracting and credit-card handling boundaries. |
| Other registrations | The official profile lists third-party prepaid-instrument issuer, funds-transfer, telecom, card-number merchant-contracting, and electronic-payment-agency registrations; these are separate legal surfaces under one PSP operator. |

## 4. Why this standalone page matters

SoftBank's payment stack has consumer wallet, card issuer, and merchant PSP layers. SBPS is the merchant-services layer, so it needs a separate operating-company page.

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SB Payment Service company information: https://www.sbpayment.co.jp/info/
- SB Payment Service company profile: https://www.sbpayment.co.jp/info/profile/
- SB Payment Service business page: https://www.sbpayment.co.jp/info/business/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
