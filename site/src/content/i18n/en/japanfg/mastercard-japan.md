---
source: japanfg/mastercard-japan
source_hash: 3f2d2a120c1d660b
lang: en
status: machine
fidelity: ok
title: "Mastercard Japan"
translated_at: 2026-05-31T23:59:49.354Z
---

# Mastercard Japan

## Wiki Route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/jcb|JCB]] for peer / contrast context (4-party global scheme vs JCB's 3-party hybrid) and [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] for the broader system / regulatory boundary.

## TL;DR

Mastercard Japan Co., Ltd. is the Japan base entity of U.S.-based Mastercard Incorporated (NYSE: MA). Mastercard does not issue cards itself; it is a pure 4-party scheme operator that handles only brand licensing, scheme operation, and inter-merchant transaction processing. In Japan, it licenses the Mastercard brand to domestic issuers such as [[JapanFG/rakuten-card|楽天カード]], [[JapanFG/mufg-nicos|三菱UFJニコス]], and [[JapanFG/aplus|アプラス]], while domestic acquirers handle merchant contracts. The fact that it does not directly issue to consumers or contract with merchants is the decisive difference from [[JapanFG/american-express-international-japan|Amex Japan]] discussed below.

## 1. License / Group Boundary

| Item | Notes |
|---|---|
| Legal name | Mastercard Japan Co., Ltd. |
| Parent | Mastercard Incorporated (U.S. NYSE: MA) |
| Brand role | Pure 4-party scheme operator / brand licensor — does not issue cards or contract with merchants itself |
| Group boundary | Japan branch-function entity of the U.S. parent. It has only contractual relationships with domestic issuers (Rakuten Card, etc.) and acquirers (Sumitomo Mitsui Card, etc.). |
| Wiki role | Entity page for the "Mastercard brand window in Japan." |

## 2. Business Lines in Japan

- **Brand licensing**: Licenses the Mastercard brand to domestic issuers such as Rakuten Card, Mitsubishi UFJ NICOS, APLUS, and Olive.
- **Scheme operation**: Provides cross-border issuer-bank ↔ merchant-bank payment processing (Authorization / Clearing / Settlement).
- **Interchange-rate setting**: Sets interchange rates for the Japanese market — see [[payments/japan-interchange-and-merchant-fee-stack]] for details.
- **Merchant marketing and technology support**: Supports standardization and domestic rollout of tokenization, 3-D Secure, contactless payments, and related technologies.
- **Corporate cards and B2B payments**: Acts as a supplier for purchasing card / corporate card products for large domestic enterprises.
- **Digital payments and partnerships**: Supports Apple Pay / Google Pay and partnerships with domestic BigTech players, including some PayPay products carrying the Mastercard brand.

Because it does not hold a direct card issuance license or acquirer license in Japan (= it is not a registered card issuer under the Installment Sales Act), it does not appear on METI's registered business-operator list under the Installment Sales Act. This is the regulatory boundary that differs from [[JapanFG/jcb|JCB]] and Amex.

## 4. Why This Page Matters

- Entry point for organizing the legal and economic distinction between a **4-party scheme operator** and a card issuer
- Reverse-lookup entity when tracking which brands domestic issuers contract with (Rakuten Card Mastercard version → Mastercard Japan)
- Starting point for tracing the international-rule origins of interchange rates, PCI DSS, tokenization, and related standards

## Related

- [[JapanFG/jcb|JCB]] (major domestic competitor / 3-party hybrid)
- [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] (4-party direct competitor / top domestic share)
- [[JapanFG/american-express-international-japan|American Express International Japan]] (3-party competitor)
- [[JapanFG/unionpay-international-japan|UnionPay International Japan]] (China-linked competitor / inbound)
- [[JapanFG/rakuten-card]] / [[JapanFG/mufg-nicos]] / [[JapanFG/aplus]] (major Mastercard-brand issuers)
- [[payments/japan-interchange-and-merchant-fee-stack]] / [[payments/japan-card-issuer-acquirer-processor-split]]

## Sources

- Mastercard Japan official site: https://www.mastercard.co.jp/
- Mastercard company information (Japanese): https://www.mastercard.co.jp/ja-jp/business/overview/about-mastercard.html
- Mastercard Incorporated investor information (U.S.): https://investor.mastercard.com/
