---
title: "JPYC株式会社"
aliases: ["JPYC", "JPYC Inc.", "JPYC株式会社", "ジェイピーワイシー"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, stablecoin, funds-transfer, EPI]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
sources:
  - "https://jpyc.co.jp/"
  - "https://jpyc.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# JPYC株式会社


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[payment-firms/wise-payments-japan|Wise Payments Japan]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

JPYC株式会社は日本円建て stablecoin / electronic payment instrument の funds-transfer-type issuer。JPYC EX は日本円と JPYC の発行・償還窓口で、同社は FSA 資金移動業者登録一覧で関東財務局長第00099号として掲載されている。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | JPYC株式会社 |
| Main lane | Japanese-yen stablecoin issuance and redemption through JPYC EX |
| Registry route | FSA funds-transfer service provider list; not a crypto-asset exchange operator page. |
| Existing detail page | [[exchanges/jp-exchange-jpyc|JPYC exchange-namespace legacy / detailed page]] |

## 2. Business role

- JPYC EX lets users issue and redeem JPYC against Japanese yen by bank transfer.
- Official JPYC EX materials describe JPYC as redeemable to Japanese yen, distinct from JPYC Prepaid.
- The company is an important comparator against [[payment-firms/progmat|Progmat]] trust-type infrastructure and [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] USDC distribution.

## 3. Why this standalone page matters

JPYC was previously reachable mainly through the `exchanges/` namespace, but it is not a conventional CEX. A JapanFG page keeps the registered funds-transfer / stablecoin-issuer boundary visible in the financial-institution map.

## Related

- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/jp-trust-type-sc-architecture]]
- [[exchanges/jp-exchange-jpyc]]
- [[exchanges/jp-exchange-sbi-vc-trade]]
- [[payments/funds-transfer-vs-prepaid-boundary]]

## Sources

- JPYC EX: https://jpyc.co.jp/
- JPYC service information: https://jpyc.jp/
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
