---
title: "メルペイ (Merpay)"
aliases: ["Merpay", "メルペイ", "株式会社メルペイ", "Merpay Inc."]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-20
last_tended: 2026-06-20
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, wallet, funds-transfer, mercari]
status: active
sources:
  - "https://jp.merpay.com/about/"
  - "https://static.jp.mercari.com/shikin_kessai"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
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
  - relation: subsidiary_of
    target: payment-firms/mercari-hd
    evidence: group_profile
    source: "public company profile / IR source listed in this page sources"
    as_of: 2026-06-21
    confidence: likely
---

# メルペイ (Merpay)


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it with [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the broader system boundary.

## TL;DR

メルペイは [[payment-firms/mercari-hd|メルカリ]] の決済・与信 operating company。公式 About は資金移動業、前払式支払手段、信用購入あっせん、貸金業などの登録を示しており、marketplace balance / wallet / credit の接続点として独立ページが必要。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社メルペイ |
| Group | [[payment-firms/mercari-hd|Mercari]] |
| Main lanes | Merpay wallet, Mercari sales-balance payment, funds transfer, credit / lending adjacency |
| FSA registry route | FSA funds-transfer list: 関東財務局長 第00057号, 株式会社メルペイ. |

## 2. Business role

- Converts Mercari marketplace sales proceeds, buyer / seller identity, and app engagement into payment, wallet, and credit usage.
- Bridges C2C marketplace data, code payment, prepaid value, funds-transfer balance, deferred payment, and bank-account withdrawal; see [[payments/japan-card-issuer-acquirer-processor-split]] for the issuer / acquirer / processor split.
- The Mercari Payment Services Act disclosure separates paid points from Merpay balance, which is important because prepaid-instrument safeguarding and funds-transfer safeguarding are not the same control problem.
- A comparator against PayPay, Rakuten Pay, au PAY, and d払い — also surfaced in [[payments/funds-transfer-service-providers-japan-index]].

## 3. Regulatory and product boundary

| Layer | Public-source reading |
|---|---|
| Funds transfer | Merpay's official pages and the FSA list identify it as Kanto Local Finance Bureau no. 00057. The disclosure states that Merpay balance is not a bank deposit and is safeguarded under the Payment Services Act. |
| Prepaid points | Paid points are disclosed separately as third-party prepaid instruments; this matters for refund, expiry, and reserve treatment. |
| Credit / lending adjacency | Merpay's company page lists comprehensive credit-purchase intermediary and money-lending registrations, so the page should be read as a wallet-plus-credit operator rather than only a code-payment brand. |
| Marketplace loop | The strategic loop is Mercari sales proceeds -> Merpay balance / payment -> credit or deferred-payment products -> repeat marketplace and merchant usage. |

## 4. Why this standalone page matters

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
