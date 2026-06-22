---
title: "auペイメント (au Payment)"
aliases: ["au Payment", "auペイメント", "auペイメント株式会社", "WebMoney"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, wallet, prepaid, funds-transfer, au]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: subsidiary_of
    target: megabanks/au-fh
    evidence: official_profile
    source: https://www.au-payment.co.jp/company/profile.html
    as_of: 2026-06-22
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: official_registry
    source: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
    as_of: 2026-06-22
    confidence: likely
sources:
  - "https://www.au-payment.co.jp/company/profile.html"
  - "https://www.au-payment.co.jp/news/news2025/r20250901_2.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# auペイメント (au Payment)


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it with [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the broader system boundary.

## TL;DR

auペイメントは [[megabanks/au-fh|auフィナンシャルHD]] の payment operating company。公式会社概要は資金移動業、前払式支払手段発行業、au PAY、金融商品仲介、銀行代理、保険媒介 / 代理などを示しており、WebMoney 由来の prepaid と au PAY wallet をつなぐ法人。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | auペイメント株式会社 |
| Group | [[megabanks/au-fh|au Financial Holdings]] |
| Main lanes | au PAY, prepaid / WebMoney heritage, funds transfer, financial-product intermediation |
| FSA registry route | FSA funds-transfer list: 関東財務局長 第00053号, auペイメント株式会社. |

## 2. Business role

- Provides the payment and stored-value layer for the au financial ecosystem.
- Connects telecom account distribution, wallet balances, prepaid instruments, point investment, and financial-product channels.
- Sits in the same telecom-led code-payment / wallet bracket as [[payment-firms/paypay|PayPay]], competing on point-economy reach rather than on a distinct license stack.
- Officially announced merger planning with au Financial Service for 2026-07-01, so the boundary is a watch item.

## 3. Why this standalone page matters

au PAY is a service name, while auペイメント is the regulated operating company. The page prevents telecom distribution, prepaid value, and funds-transfer licensing from being mixed together.

## Related

- [[megabanks/au-fh]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]

## Sources

- au Payment company profile: https://www.au-payment.co.jp/company/profile.html
- au Payment / au Financial Service merger announcement: https://www.au-payment.co.jp/news/news2025/r20250901_2.html
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
