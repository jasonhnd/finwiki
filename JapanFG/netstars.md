---
title: "ネットスターズ"
aliases: ["NETSTARS", "株式会社ネットスターズ", "Netstars", "StarPay"]
domain: JapanFG
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, PSP, QR-payment, funds-transfer, code-payment]
status: active
sources:
  - "https://www.netstars.co.jp/about/"
  - "https://www.netstars.co.jp/servicelist/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# ネットスターズ

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it with [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] and [[JapanFG/dg-financial-technology|DG Financial Technology]] for PSP peer context, and with [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] for the broader regulatory boundary.

## Overview

株式会社ネットスターズ is a QR / multi-cashless payment gateway operator whose StarPay service connects merchants with multiple payment brands. The company profile lists registration as a credit-card-number handling contract concluding operator and funds-transfer service provider; the FSA funds-transfer list records it as 関東財務局長 第00098号 with registration date 2025-03-19.

For FinWiki, Netstars is the specialist route for QR gateway aggregation, not a consumer wallet like [[JapanFG/paypay|PayPay]] or [[JapanFG/merpay|Merpay]]. It sits between merchants, payment brands, PSP risk controls, and cross-border code-payment acceptance.

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社ネットスターズ |
| Core service | StarPay multi-cashless / QR payment gateway |
| Founded | 2009-02-12, per company profile |
| Main lanes | QR payment gateway, PSP, merchant payment DX, global / inbound payment acceptance |
| Public registrations | Credit-card-number handling contract concluding operator; funds-transfer service provider 関東財務局長 第00098号 |

## 2. Business Role

- Netstars' official profile says the company began QR code payment business in 2015 and deepens StarPay as a gateway connecting payments and businesses.
- Its services page presents StarPay as a multi-cashless payment solution that integrates payment-service application and management.
- The strategic value is merchant-side aggregation: one integration can connect multiple code-payment brands and settlement experiences.

## 3. Why This Standalone Page Matters

[[payments/japan-code-payment-competitive-map|Japan code-payment competition]] is not only a fight among consumer apps. Merchant acceptance is mediated by gateways and PSPs such as Netstars, [[JapanFG/gmo-payment-gateway|GMO-PG]], [[JapanFG/sb-payment-service|SB Payment Service]], and [[JapanFG/dg-financial-technology|DGFT]]. Netstars deserves a standalone page because QR aggregation changes distribution power at the store edge.

## Counterpoints

- A gateway can be deeply embedded in merchant operations without owning the consumer wallet relationship.
- Public sources show registrations and product positioning, but do not disclose detailed take rates, merchant churn, reserves, or brand-by-brand settlement economics.
- Code-payment gateway differentiation can compress if large wallets push direct merchant contracts or if card PSPs absorb QR acceptance.

## Open Questions

- How much StarPay volume is domestic QR, inbound QR, card, online, or stablecoin-adjacent payment?
- How does Netstars allocate merchant settlement, fraud, and chargeback responsibility relative to payment brands and acquirers?
- Which StarPay-X / stablecoin initiatives is routed to [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]] versus the PSP page?

## Related

- [[payments/INDEX]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/psp-merchant-settlement-risk]]
- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/sb-payment-service]]
- [[JapanFG/dg-financial-technology]]
- [[JapanFG/paypay]]
- [[JapanFG/merpay]]

## Sources

- Netstars company profile: https://www.netstars.co.jp/about/
- Netstars services page: https://www.netstars.co.jp/servicelist/
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- METI registered operator lists under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
