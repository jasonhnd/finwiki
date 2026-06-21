---
title: "PayPay株式会社"
aliases: ["PayPay", "PayPay Corporation", "PayPay株式会社", "ペイペイ"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-20
last_tended: 2026-06-20
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, wallet, funds-transfer, code-payment]
status: active
sources:
  - "https://about.paypay.ne.jp/about/"
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
    target: megabanks/paypay-fg
    evidence: group_profile
    source: "https://about.paypay.ne.jp/about/"
    as_of: 2026-06-21
    confidence: likely
---

# PayPay株式会社


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan service boundary]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

PayPay株式会社は [[megabanks/paypay-fg|PayPay金融グループ]] の consumer wallet / code-payment operator。公式会社概要はモバイルペイメント等の電子決済サービスを主業とし、前払式支払手段、クレジットカード番号等取扱契約締結事業者、資金移動業、電子決済等代行業、賃金デジタル払い指定資金移動業者などの登録を列挙している。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | PayPay株式会社 |
| Group | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY ecosystem |
| Main lanes | Code payment, stored value, funds transfer, merchant acceptance, wage digital payment adjacency |
| FSA registry route | FSA funds-transfer list: 関東財務局長 第00068号, PayPay株式会社. |

## 2. Business role

- The consumer app is the distribution point for PayPay balance, code payment, peer-to-peer transfer, point campaigns, PayPay Credit / PayPay Card handoff, and discovery of adjacent PayPay financial services.
- The merchant side matters as much as the wallet side: acceptance, settlement, promotions, and app-based customer contact make PayPay a payment-led distribution layer rather than only a QR brand.
- The official company profile lists PayPay Card, PayPay Bank, PayPay Securities, PayPay SC, PayPay India, and Credit Engine as related companies, so the operating thesis should be read as wallet-first group finance inside the SoftBank / LY / PayPay ecosystem.
- It is the anchor page for comparing Japan's large code-payment platforms and for separating wallet economics from card-issuer economics.

## 3. Regulatory and group positioning

| Layer | Public-source reading |
|---|---|
| Funds transfer | The official profile and FSA list identify PayPay as a Kanto Local Finance Bureau funds-transfer operator, registration no. 00068. |
| Stored value / prepaid | The company profile separately lists third-party prepaid-instrument issuer registration, so wallet balance analysis should not collapse prepaid and funds-transfer treatment. |
| Merchant / card-number control | PayPay's official registrations include card-number merchant-contracting operator status; this places part of the merchant-acceptance boundary outside the pure wallet lane. |
| Agency / intermediary roles | Bank agency, financial instruments intermediary, and electronic-payment-agency registrations point to partner / intermediary channels, not to PayPay itself being a bank or securities company. |
| Wage digital payment | The official profile also lists wage digital-payment designation; this is a specific payroll-adjacent funds-transfer lane and should not be generalized to all wallet balances. |

## 4. Why this standalone page matters

[[megabanks/paypay-fg|PayPay FG]] is the holding / group boundary, while PayPay株式会社 is the wallet and code-payment operating company. Confusing the two hides the licensing, merchant, and consumer-protection layers.

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]

## Sources

- PayPay company profile: https://about.paypay.ne.jp/about/
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
