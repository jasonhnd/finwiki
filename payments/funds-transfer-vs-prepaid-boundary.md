---
title: "Funds transfer vs prepaid boundary in Japan"
aliases:
  - "payments/funds-transfer-vs-prepaid-boundary"
  - "funds-transfer-vs-prepaid-boundary"
  - "Japan funds transfer prepaid boundary"
  - "資金移動業 前払式支払手段 境界"
domain: "payments"
created: 2026-05-20
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-15
confidence: likely
tags: [payments, funds-transfer, prepaid, payment-services-act, wallet]
status: active
sources:
  - "https://www.fsa.go.jp/news/27/sonota/20151214-2.html"
  - "https://www.fsa.go.jp/access/r2/213.html"
  - "https://www.fsa.go.jp/news/r2/sonota/20201225-2/20201225-2.html"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/common/about/pamphlet/2019purika.pdf"
---

# Funds transfer vs prepaid boundary in Japan

## Wiki route

This entry sits under [[payments/INDEX|payments index]]. Read it with [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

## TL;DR

The practical boundary is **transferability**. A funds-transfer service handles foreign-exchange transactions outside banks and lets value move to another person. A prepaid payment instrument is primarily stored value for paying the issuer or participating merchants; it is not designed as an open person-to-person remittance rail.

This distinction is central for code payments, wallets, stored balances, game credits, transit money, merchant gift value, and point-like products. Product branding is unreliable: the same app can contain funds-transfer balances, prepaid value, points, and card-linked payment in separate legal layers.

## Boundary Test

| Question | Funds-transfer signal | Prepaid signal |
|---|---|---|
| Can the user send value to another person? | Yes, especially if the service accepts a remittance instruction. | Usually no; the balance is mainly for the user's own payment. |
| Is the service conducting foreign-exchange transactions outside banks? | This points toward funds-transfer registration. | Not usually the core function. |
| Is the value used to buy goods / services from the issuer or participating merchants? | Possible, but not sufficient by itself. | Core use case. |
| Is unused value protected and refundable when the instrument is terminated? | User-fund safeguarding depends on the funds-transfer category. | Prepaid refund procedures apply when use is terminated under Payment Services Act rules. |
| Is the balance high-value or low-value remittance? | Category matters: Type I, II, or III funds-transfer business. | Prepaid rules and issuer obligations matter more than remittance limits. |

## Funds-Transfer Categories

FSA materials describe three post-2021 funds-transfer categories:

| Category | Function | Main constraint |
|---|---|---|
| Type I funds-transfer business | High-value transfers above JPY 1 million. | Authorization; acceptance of funds without a specific remittance instruction is generally restricted. |
| Type II funds-transfer business | Transfers of JPY 1 million or less. | Registration; excess unrelated balances may need to be reduced. |
| Type III funds-transfer business | Low-value transfers of JPY 50,000 or less. | Registration; recipient account balance cannot exceed JPY 50,000 even temporarily, with segregated-deposit safeguarding allowed under conditions. |

This classification matters because a wallet that looks like "balance" to the user may be regulated differently depending on whether it performs remittance and how much value can be sent or held.

## Prepaid Layer

FSA explains prepaid payment instruments as a broad category including gift certificates, gift cards, magnetic / IC prepaid cards, and server-based prepaid instruments. A prepaid issuer may need filing or registration, must provide user information, and must safeguard required amounts of customer value. When the prepaid instrument is discontinued, the issuer conducts a refund process under the Payment Services Act.

The analytic rule is:

- **Closed or merchant-use stored value** tends toward prepaid analysis.
- **Transferable value between persons** tends toward funds-transfer analysis.
- **Cash-equivalent redemption or broad transferability** should trigger a higher-risk legal review rather than a simple "points" or "prepaid" label.

For the registered third-party prepaid issuer population, use [[payments/prepaid-payment-instrument-issuers-japan-index]] rather than creating long-tail issuer pages.

## Product Decomposition

| Product surface | Possible legal layers |
|---|---|
| Code payment app | Funds-transfer balance, prepaid balance, credit card, bank debit, points, coupons (e.g. [[payment-firms/paypay|PayPay]], [[payment-firms/kyash|Kyash]]). |
| Retail electronic money | Prepaid payment instrument, loyalty points, merchant settlement contract. |
| Marketplace wallet | Funds-transfer balance for seller payouts, prepaid credits for purchases, escrow / settlement functions (compare [[payment-firms/merpay|Merpay]]). |
| Game / app credits | Server-based prepaid payment instrument, promotional points, platform fee economics. |
| Stablecoin / EPI bridge | Electronic payment instrument, funds-transfer route, trust route, crypto-asset / ECISB boundary (see [[fintech/japan-ecisb-license|Japan ECISB license]]). |

## Why It Matters

- **Consumer protection**: refund, safeguarding, disclosure, and misuse controls depend on the legal layer.
- **Business economics**: prepaid value, remittance balances, reward points, and merchant settlement all create different liability and float profiles.
- **License strategy**: a company may avoid P2P transfer to remain in a prepaid-like structure, or obtain funds-transfer registration to enable wallet network effects.
- **JapanFG routing**: bank groups, payment groups, retailers, and stablecoin projects should be compared by legal balance layer, not by app UI.

## Related

- [[payments/INDEX|payments INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[loyalty/japan-points-landscape]]
- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-ecisb-license]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: FinTech Support Desk, funds-transfer business Q&A.
- FSA: Access FSA explanation of the 2021 funds-transfer category reform.
- FSA: 2020 Payment Services Act amendment materials.
- FSA: prepaid payment instrument refund explanation.
- FSA: prepaid-card / electronic-money issuer notice pamphlet.
