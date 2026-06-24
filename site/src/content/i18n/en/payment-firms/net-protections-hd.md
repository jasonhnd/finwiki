---
source: payment-firms/net-protections-hd
source_hash: 21d85cd2e0b94dde
lang: en
status: machine
fidelity: ok
title: "Net Protections HD"
translated_at: 2026-06-24T07:24:12.876Z
---
# Net Protections HD

## Wiki route

This entry sits under the [[payment-firms/INDEX|payment-firms INDEX]] as a pure-play **BNPL operator**. Read it against the [[payment-firms/bnpl-landscape|Japan BNPL landscape]] system note and the [[payment-firms/paidy|Paidy]] peer for contrast, with the [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] page setting the regulatory lens and the [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] anchoring the METI registration trail.

## TL;DR

Net Protections Holdings (TSE PRIME **7383**) is Japan's earliest-mover BNPL pure-play, best known for the **NP 後払い** invoice-based BtoC product that EC merchants attach as a "pay later by konbini / bank transfer" option. The group also runs **atone** (consumer-side wallet BNPL), **AFTEE** (overseas BNPL with a Taiwan product site), and **NP 掛け払い** (BtoB invoicing). Unlike [[payment-firms/paidy|Paidy]], it is independent rather than payments-platform-owned, and unlike [[card-issuers/jaccs|Jaccs]] or [[card-issuers/orico|Orico]] it deliberately stays out of the credit-card stack — the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] is the cleanest place to see why merchant-fee BNPL economics diverge from card interchange. ^[verified-2026-06-24]

## 1. Entity / license boundary

| Item | Reading |
|---|---|
| Legal entity | Net Protections Holdings, Inc. |
| Operating subsidiary | Net Protections, Inc. directly operates NP 後払い / atone / NP 掛け払い and related services ^[verified-2026-06-24] |
| Listing | TSE PRIME 7383 (listed in 2021-12 ) |
| Group lanes | EC postpay (NP 後払い) / consumer BNPL wallet (atone) / BtoB invoicing (NP 掛け払い) / overseas BNPL (AFTEE) ^[verified-2026-06-24] |

## 2. Business role

- **NP 後払い** is a representative Japanese EC postpay / invoice-included brand. For merchants it packages credit screening, invoice issuance, and collection follow-up as a guarantee-style BNPL product that absorbs uncollected-payment risk. The official NP 後払い site describes paying by invoice at convenience stores, banks, or post offices after receiving goods and promotes the uncollected-risk guarantee. ^[verified-2026-06-24]
- **atone** is a monthly-settlement BNPL wallet built around a consumer account, enabling next-month convenience-store payment across merchants (a UX close to [[payment-firms/paidy|Paidy]], while the brand and ecosystem are independent). ^[verified-2026-06-24]
- **NP 掛け払い** provides BtoB invoice issuance, credit screening, and collection agency in a BNPL structure, turning the traditional invoice -> bank transfer -> collection-follow-up flow into a SaaS-like service. ^[verified-2026-06-24]
- **AFTEE** is positioned as an overseas EC postpay brand from the Net Protections corporate site, and the official product site operates as a Taiwan-market BNPL product. ^[verified-2026-06-24]
- The portfolio split matters for economics: NP 後払い is merchant-attached invoice BNPL, atone is account-based consumer BNPL, NP 掛け払い is BtoB invoicing / collection, and AFTEE is the overseas extension, so the holding company is not reducible to one checkout product. ^[verified-2026-06-24]

## 3. Why this standalone page matters

Net Protections is an independent Japanese BNPL operator, and its corporate boundary is not absorbed into an existing parent-group page like [[payment-firms/paidy|Paidy]] or [[card-issuers/aplus|アプラス]]. That makes it valuable as a standalone BNPL holding-company page in the JapanFG namespace.

## 4. Regulation / policy

- **Personal Information Protection Act**: the handling of personal data for credit screening (attributes / transaction history) and the scope of third-party provision are central issues.
- **TSE PRIME disclosure**: because the listed company discloses GMV, merchant counts, and credit-loss ratios through quarterly IR and securities reports, it is one of the few cases where the economics of an independent BNPL operator can be read from public numbers. ^[extracted]

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
- NP 後払い product site: https://www.netprotections.com/
- atone product site: https://atone.be/
- NP 掛け払い product site: https://np-kakebarai.com/
- AFTEE product site (overseas BNPL): https://www.aftee.tw/
- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI registered merchant-contracting operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
