---
title: "メルペイ (Merpay)"
aliases: ["Merpay", "メルペイ", "株式会社メルペイ", "Merpay Inc."]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-24
last_tended: 2026-06-24
review_by: 2026-12-24
confidence: likely
tags: [JapanFG, payments, wallet, funds-transfer, mercari]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: subsidiary_of
    target: payment-firms/mercari-hd
    evidence: official_profile
    source: https://jp.merpay.com/about/
    as_of: 2026-06-22
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: official_registry
    source: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
    as_of: 2026-06-22
    confidence: likely
sources:
  - "https://jp.merpay.com/about/"
  - "https://static.jp.mercari.com/shikin_kessai"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# メルペイ (Merpay)


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it with [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the broader system boundary.

## TL;DR

メルペイは [[payment-firms/mercari-hd|メルカリ]] の決済・与信 operating company。公式 About は資金移動業、前払式支払手段、信用購入あっせん、貸金業などの登録を示しており、marketplace balance / wallet / credit の接続点として独立ページが必要。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社メルペイ |
| Group | [[payment-firms/mercari-hd|Mercari]] |
| Main lanes | Merpay wallet, Mercari sales-balance payment, funds transfer, credit / lending adjacency |
| FSA registry route | FSA funds-transfer list: 関東財務局長 第00057号, 株式会社メルペイ. ^[verified-2026-06-24] |
| Company-profile registrations | Official About lists funds transfer, prepaid instruments, card-number merchant-contracting, comprehensive credit-purchase intermediation, lending, and electronic payment agency registrations. ^[verified-2026-06-24] |

## 2. Business role

- Converts Mercari's marketplace balance and user identity into payment and credit usage: Mercari's funds-settlement disclosure describes charging Merpay balance from sales proceeds, bank accounts, and ATM channels, plus using that balance for Mercari purchases and shop payments. ^[verified-2026-06-24]
- Bridges C2C marketplace data, code payment, deferred payment, and bank-account withdrawal; the official disclosure frames Merpay as a Type II funds-transfer provider and a third-party prepaid-instrument issuer, so the prepaid / funds-transfer boundary is core to this page. ^[verified-2026-06-24]
- Credit and lending adjacency sits beside the wallet rather than inside it: Merpay's About page separately discloses comprehensive credit-purchase intermediation, certified comprehensive credit-purchase intermediation, lending, and card-number merchant-contracting registrations. ^[verified-2026-06-24]
- A comparator against PayPay, Rakuten Pay, au PAY, and d払い — also surfaced in [[payments/funds-transfer-service-providers-japan-index]].

## 3. Why this standalone page matters

Mercari's marketplace business and Merpay's regulated payment / credit business have different risk and compliance questions. This page keeps the financial-service boundary explicit.

## Related

- [[payment-firms/mercari-hd]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]

## Sources

- Merpay About: https://jp.merpay.com/about/
- Mercari Payment Services Act disclosure: https://static.jp.mercari.com/shikin_kessai
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
