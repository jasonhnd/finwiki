---
title: "Amazon Gift Card Japan: closed-loop e-commerce prepaid"
aliases:
  - "amazon-gift-card-japan"
  - "Amazonギフト券"
  - "Amazon Gift Card Japan"
  - "アマゾン ギフトカード"
  - "Amazon prepaid Japan"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, prepaid, gift-card, amazon, e-commerce, digital-prepaid, closed-loop]
status: active
sources:
  - "https://www.amazon.co.jp/giftcards"
  - "https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=GZ4SCNS6CY9SHFFR"
  - "https://www.amazon.co.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/"
---

# Amazon Gift Card Japan: closed-loop e-commerce prepaid

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Amazon Japan gift-card prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view. Compare with [[payments/apple-gift-card-japan|Apple Gift Card Japan]], [[payments/google-play-gift-card-japan|Google Play Gift Card Japan]] (peer platform-anchored closed-loop gift cards), [[payments/quo-card-prepaid|QUO Card]] (multi-merchant open-loop gift), and [[payments/visa-gift-card-japan|Visa Gift Card]] (brand-network prepaid). Distinguish from third-party retail-anchored prepaid ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) — Amazon Gift Card is **closed-loop** (usable only at Amazon.co.jp), while WAON / nanaco are third-party multi-merchant accepted. Legal framework: [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]].

## TL;DR

**Amazon Gift Card (Amazonギフト券)** is the **closed-loop prepaid e-commerce credit** of Amazon.co.jp, issued in Japan by **Amazon Japan G.K. (アマゾンジャパン合同会社)** and registered as a 自家型 (single-merchant / closed-loop) 前払式支払手段 under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]. Distinct from [[payments/quo-card-prepaid|QUO Card]] and [[payments/visa-gift-card-japan|Visa Gift Card]] (both open-loop / multi-merchant), Amazon Gift Card is spendable **only on Amazon.co.jp** for marketplace purchases. Distribution rails span the **eGift digital code** (email, social-media delivery, customizable), **plastic gift cards** (sold at convenience stores Lawson / FamilyMart / MiniStop / 7-Eleven / drugstores), **チャージタイプ** (account-balance top-up at convenience-store register / Amazon site), and **box / envelope physical gift packaging**. The product is positioned for both **gift-giving** (digital / physical eGift to recipients) and **self-charge** (cardless Amazon.co.jp payment for users without credit card — particularly important for under-banked / minor / no-credit-card cohorts).

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Operating company | アマゾンジャパン合同会社 (Amazon Japan G.K.) |
| Group parent | Amazon.com, Inc. (US) |
| FSA prepaid registration | 自家型前払式支払手段 (closed-loop) — single-merchant Amazon.co.jp use |
| Legal classification | Closed-loop prepaid (not third-party / 第三者型) — does not appear in `daisan.xlsx` 第三者 list |
| Launch year in Japan | 2003 (Amazon.co.jp launched 2000; gift-card lineup expanded over subsequent years) |
| Denominations | Plastic / box card fixed denominations (¥500, ¥1,000, ¥2,000, ¥3,000, ¥5,000, ¥10,000) and variable / freely-chosen denominations for eGift / charge type (typically ¥15 to ¥500,000 per transaction) |
| Distribution rails | Amazon.co.jp eGift, physical card at convenience stores, account-balance charge, B2B bulk corporate program |
| Acceptance | Only at Amazon.co.jp |
| Expiry | 10 years from issuance / last charge |

## Legal basis: 自家型前払式支払手段 (closed-loop / single-merchant)

Amazon Gift Card is registered as **自家型前払式支払手段** (closed-loop prepaid) under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 because acceptance is restricted to the issuer's own service (Amazon.co.jp). This is the structural distinction from [[payments/quo-card-prepaid|QUO Card]] (third-party / 第三者型 — accepted across many merchants). Key regulatory consequences:

- **Different FSA registry** — closed-loop issuers appear in `jika.xlsx` not `daisan.xlsx`; this entry does not appear in [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]].
- **Lower regulatory burden** in some respects (no third-party merchant settlement; closed-loop float simpler to monitor) but still subject to half-yearly **unused-balance deposit** (供託) obligation.
- **No refunding to original payer except at issuance discontinuation** — Amazon Gift Card balance is non-refundable to cash.
- **Breakage** is constrained by 10-year expiry but still material at Amazon.co.jp scale.

## Distribution rails and use cases

| Rail | Description |
|---|---|
| **eGift (Eメールタイプ)** | Email / SMS / LINE-delivered code, customizable design, sender selects amount and message; recipient enters code on Amazon.co.jp |
| **印刷タイプ (Printable)** | PDF gift code for printing and physical handover |
| **チャージタイプ (Charge type)** | Account-balance top-up via Amazon.co.jp using credit card, bank transfer, convenience-store payment, ATM (Pay-easy); used for self-charge of Amazon balance |
| **コンビニ・ATM・ネットバンキングタイプ (Convenience / ATM / net bank)** | Order on Amazon site, pay at convenience store / ATM / net bank → account credited |
| **プラスチックタイプ / ボックスタイプ** | Physical plastic gift card or boxed gift card sold at convenience stores and drugstores |
| **B2B 法人ギフトカード** | Bulk corporate purchase for employee / customer gift distribution |

The **self-charge use case** is structurally important in Japan: a sizable cohort of Amazon.co.jp users does not have or does not want to register a credit card; they charge Amazon Gift Card balance at a convenience store and pay for Amazon purchases from the balance. This functions as a **cashless on-ramp for under-banked users** — comparable to other countries' prepaid debit card use case.

## Gift-card fraud / scam concern

Amazon Gift Card has been heavily exploited in **Japan's "電子マネー型 specia fraud / 振り込め詐欺" (e-money-type wire-fraud scam)** ecosystem — scam callers (impersonating tax authorities, Amazon customer support, family members, etc.) instruct victims to purchase Amazon Gift Cards at convenience stores and read the codes over the phone. The National Police Agency (NPA), FSA, and consumer-protection authorities have repeatedly warned about this pattern. Major countermeasures:

- Convenience-store cashiers warn purchasers of >¥10,000 gift-card purchases and ask the purpose.
- Amazon Japan has published consumer-warning pages and added scam-awareness messaging.
- This is one of the principal regulatory / social pressures on the open distribution of gift cards in Japan.

## KPI snapshot

| Metric | Reading (public disclosure) |
|---|---|
| Cumulative Amazon Gift Card issuance | Material multi-trillion-yen scale over franchise lifetime (industry estimates; Amazon does not break out Japan-only gift-card disclosure) |
| Convenience-store distribution penetration | All major convenience-store chains (Lawson, FamilyMart, MiniStop, 7-Eleven, Daily Yamazaki, Seicomart) carry physical Amazon Gift Cards |
| eGift activity | Substantial digital-delivery volume; growing post-COVID remote-gift adoption |
| Self-charge cohort | Significant share of cardless / under-banked Amazon.co.jp users use Gift Card charge as primary payment method |

Amazon does not publish Japan-segmented gift-card KPIs in financial disclosure; figures live in industry estimates and indirect indicators.

## Strategy: closed-loop cashless on-ramp + gift distribution

Amazon Gift Card Japan's strategic role:

1. **Cashless on-ramp for Amazon.co.jp** — cardless users can transact on Amazon by topping up Gift Card balance, expanding Amazon's addressable customer base in Japan's relatively credit-card-light retail population.
2. **Gift-distribution category capture** — eGift category for personal gifts, corporate B2B bulk for employee / customer gifts.
3. **Float / breakage economics** — substantial outstanding gift-card balance is closed-loop float that funds Amazon working capital.
4. **Convenience-store rail anchor** — gift-card distribution at convenience stores is a primary acquisition lane for under-banked users.
5. **Multi-rail distribution** — eGift, physical card, charge type, B2B all coexist to capture different use cases without cannibalization.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## Sources

- Amazon Gift Card Japan page (amazon.co.jp/giftcards).
- Amazon Gift Card terms / help pages.
- Amazon Japan G.K. corporate disclosure.
- FSA prepaid payment instruments policy page (closed-loop / 自家型 framework).
- FSA `daisan.xlsx` (cross-reference — confirms Amazon is closed-loop, not third-party listed).
- METI cashless policy page.
