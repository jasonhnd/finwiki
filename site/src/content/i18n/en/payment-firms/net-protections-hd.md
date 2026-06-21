---
source: payment-firms/net-protections-hd
source_hash: 89acfa7df7d5f896
lang: en
status: machine
fidelity: ok
title: "Net Protections HD"
translated_at: 2026-06-01T00:41:50.412Z
---

# Net Protections HD

## Wiki route

This entry sits under the [[payment-firms/INDEX|payment-firms INDEX]] as a pure-play **BNPL operator**. Read it against the [[payment-firms/bnpl-landscape|Japan BNPL landscape]] system note and the [[payment-firms/paidy|Paidy]] peer for contrast, with the [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] page setting the regulatory lens and the [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] anchoring the METI registration trail.

## TL;DR

Net Protections Holdings (TSE PRIME **7383**) is Japan's earliest-mover BNPL pure-play, best known for the **NP Atobarai** invoice-based BtoC product that EC merchants attach as a "pay later by konbini / bank transfer" option. The group also runs **atone** (consumer-side wallet BNPL), **AFTEE** (Southeast Asia BNPL targeting Taiwan / Vietnam), and **NP Kakebarai** (BtoB invoicing). Unlike [[payment-firms/paidy|Paidy]], it is independent rather than payments-platform-owned, and unlike [[card-issuers/jaccs|Jaccs]] or [[card-issuers/orico|Orico]] it deliberately stays out of the credit-card stack — the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] is the cleanest place to see why merchant-fee BNPL economics diverge from card interchange.

## 1. Entity / license boundary

| Item | Reading |
|---|---|
| Legal entity | Net Protections Holdings, Inc. |
| Operating subsidiary | Net Protections, Inc. (directly operates NP Atobarai / atone / NP Kakebarai, etc.) |
| Listing | TSE PRIME 7383 (listed 2021-12 ) |
| Group lanes | EC pay-later (NP Atobarai) / consumer BNPL wallet (atone) / BtoB invoicing (NP Kakebarai) / overseas BNPL (AFTEE: Taiwan / Vietnam) |

## 2. Business role

- **NP Atobarai** is a flagship Japanese EC pay-later brand in the invoice-enclosed category. For merchants, it packages credit screening + invoice issuance + collection reminders as a **guarantee-type BNPL service that absorbs non-collection risk**. ^[extracted]
- **atone** is a month-end BNPL wallet based on consumer accounts, allowing "next-month convenience-store payment" across merchants (UX close to [[payment-firms/paidy|Paidy]], but with an independent brand and ecosystem). ^[extracted]
- **NP Kakebarai** provides BtoB transaction invoice outsourcing + credit screening + collection outsourcing in a BNPL structure, turning the traditional "invoice -> bank transfer -> reminder" flow into SaaS.
- **AFTEE** expands into Taiwan and Vietnam's EC pay-later markets, transplanting Net Protections' credit model overseas. ^[extracted]

## 3. Why this standalone page matters

Net Protections is one of Japan BNPL's largest independent operators by **transaction volume / merchant count**, yet its corporate entity is not absorbed into an existing parent-group page like [[payment-firms/paidy|Paidy]] or [[card-issuers/aplus|アプラス]]. It therefore has high value as a separate **independent BNPL holding company** page in the JapanFG namespace.

## 4. Regulation / policy

- **Act on the Protection of Personal Information**: handling of personal data for credit assessment (attributes / transaction histories) and the scope of third-party provision are key issues.
- **TSE PRIME disclosure**: as a listed company, quarterly IR and securities-report disclosure provide GMV, merchant count, and credit-loss rate, making it one of the few cases where independent BNPL economics can be read through public numbers. ^[extracted]

## Related

- [[payment-firms/bnpl-landscape]]
- [[payment-firms/paidy]]
- [[payment-firms/merpay]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/credit-saison]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/installment-sales-act-2020-amendment]]

## Sources

- Net Protections HD corporate site: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP Atobarai product site: https://www.netprotections.com/
- atone product site: https://atone.be/
- AFTEE product site (overseas BNPL): https://aftee.jp/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
