---
title: "PayPal Pte. Ltd. Japan service boundary"
aliases: ["PayPal Japan", "PayPal Pte. Ltd.", "ペイパル", "ペイパル日本"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, wallet, remittance, merchant-services, funds-transfer]
status: active
sources:
  - "https://www.paypal.com/jp/webapps/mpp/corporate/payment-services-act"
  - "https://www.paypal.com/jp/webapps/mpp/about"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# PayPal Pte. Ltd. Japan service boundary


## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[payment-firms/revolut-technologies-japan|REVOLUT TECHNOLOGIES JAPAN]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

日本の PayPal サービスは PayPal Pte. Ltd. の資金決済法上の表示で管理される。公式表示は personal account の第三者型前払式支払手段、premier / business account の第二種資金移動業を分けて説明しており、consumer wallet と merchant checkout を同じ名前で読まないことが重要。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | PayPal Pte. Ltd. |
| Japan product surface | PayPal personal / premier / business accounts, merchant checkout, balance and payment services |
| Regulatory route | Payment Services Act disclosures; FSA funds-transfer list. |
| FSA registry route | FSA funds-transfer list: 関東財務局長 第00026号, PayPal Pte. Ltd. |

## 2. Business role

- Global wallet and merchant checkout layer for cross-border e-commerce.
- Important for freelancers, marketplaces, SMEs, and international merchants.
- Sits between consumer stored-value regulation and merchant funds-transfer services.

## 3. Why this standalone page matters

PayPal is global and brand-led, but Japan analysis needs the entity and account-type boundary. Personal and business account treatment is not identical. Useful peers include [[payment-firms/wise-payments-japan|Wise]], [[payment-firms/payoneer-japan|Payoneer]], and [[payment-firms/airwallex-japan|Airwallex]] for the funds-transfer comparator, and [[payment-firms/paypay|PayPay]] for the domestic wallet adjacent surface.

## Related

- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/card-acquiring-japan-stack]]
- [[payment-firms/wise-payments-japan]]
- [[payment-firms/payoneer-japan]]

## Sources

- PayPal Japan Payment Services Act disclosure: https://www.paypal.com/jp/webapps/mpp/corporate/payment-services-act
- PayPal Japan about page: https://www.paypal.com/jp/webapps/mpp/about
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
