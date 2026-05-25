---
title: "Visa Gift Card Japan: Visa-branded open-loop prepaid"
aliases:
  - "visa-gift-card-japan"
  - "Visaギフトカード"
  - "Visa Gift Card Japan"
  - "Vプリカ"
  - "Visa prepaid Japan"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, prepaid, gift-card, visa, brand-network, open-loop, digital-prepaid]
status: active
sources:
  - "https://www.visa.co.jp/pay-with-visa/find-a-card/prepaid-cards.html"
  - "https://vpc.lifecard.co.jp/"
  - "https://www.visa.co.jp/"
  - "https://www.lifecard.co.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.j-credit.or.jp/"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/"
---

# Visa Gift Card Japan: Visa-branded open-loop prepaid

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Visa-branded prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view, with [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] for the brand-network role context, and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme view. Compare with [[payments/amazon-gift-card-japan|Amazon Gift Card]], [[payments/apple-gift-card-japan|Apple Gift Card]], [[payments/google-play-gift-card-japan|Google Play Gift Card]] (closed-loop platform gift), [[payments/quo-card-prepaid|QUO Card]] (open-loop multi-merchant paper / digital gift), and [[JapanFG/kyash|Kyash]] (Visa-branded wallet-card hybrid). Visa Gift Card sits in the **brand-network prepaid** category — usable anywhere Visa is accepted globally, which structurally differs from convenience-store-and-retail-only acceptance of closed-loop gift cards. Issuer in Japan is typically [[JapanFG/life-card|Life Card]] under the **Vプリカ** product brand.

## TL;DR

**Visa Gift Card Japan** refers to the family of **Visa-branded prepaid cards** issued in Japan — most prominently the **Vプリカ (V Preca)** product issued by **[[JapanFG/life-card|Life Card Co Ltd]]** under Visa scheme licensing. Vプリカ is the **principal Japan-issued Visa-branded prepaid card** spendable at any merchant that accepts Visa worldwide (online and in-store with physical card option). Distinct from [[payments/amazon-gift-card-japan|Amazon Gift Card]] / [[payments/apple-gift-card-japan|Apple Gift Card]] / [[payments/google-play-gift-card-japan|Google Play Gift Card]] (all closed-loop / platform-restricted), Visa Gift Card is **open-loop / brand-network prepaid** — usable across the Visa global merchant network. The product is positioned for **online purchases without credit-card commitment**, **gift distribution where the recipient should choose where to spend**, and **cardless cashless on-ramp** for users without conventional credit-card history. Vプリカ is registered as a 第三者型 (third-party) 前払式支払手段 under FSA because acceptance is at third-party Visa-accepting merchants, not Life Card's own service.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Principal Japan-issued Visa Gift Card | **Vプリカ (V Preca)** by [[JapanFG/life-card\|Life Card Co Ltd]] |
| Brand network | Visa (via [[JapanFG/visa-worldwide-japan\|Visa Worldwide Japan]] license) |
| FSA prepaid registration | Life Card Co Ltd appears in `daisan.xlsx` as 第三者型 prepaid issuer (corporate number 3020001086810, registration 2011-04-01 — issuer covers card / prepaid / guarantee adjacency) |
| Launch year (Vプリカ) | 2010 (Vプリカ initial launch under Life Card) |
| Card format | Online / virtual card with 16-digit number, CVV, expiry — also physical card option for certain product variants |
| Denominations | ¥500 to ¥30,000 selectable purchase, multiple top-up rails |
| Distribution rails | Online direct purchase, convenience-store payment, ATM purchase, Vプリカ site charge |
| Acceptance | Any merchant accepting Visa (global online and in-store) |
| Expiry | Validity period assigned per card (typically 1-2 years from issuance / last charge) |

## Legal basis: 第三者型 prepaid (Visa brand network access)

Vプリカ is registered as **第三者型前払式支払手段** under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 because the spending surface is **third-party merchants** in the Visa network rather than the issuer's own service. Key regulatory consequences:

- [[JapanFG/life-card|Life Card]] as issuer appears in [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]].
- Half-yearly **unused-balance deposit** (供託) with Legal Affairs Bureau.
- **No refunding to original payer except at issuance discontinuation** — Vプリカ balance is non-refundable to cash by default.
- Operates under **Visa scheme rules** for acquirer-side merchant acceptance, interchange flows, and chargeback / dispute handling — see [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] for the brand-network economic context.
- Card identification compliance with Japan Credit Association ([[payments/japan-card-security-authentication-controls|J-CSC]]) for fraud / authentication controls applies on the issuer side.

## Visa brand network advantage

The structural distinction from closed-loop platform gift cards is the **global Visa acceptance footprint**:

| Dimension | Vプリカ (Visa brand network) | Amazon / Apple / Google Gift Card (closed-loop) |
|---|---|---|
| Spending surface | Any Visa-accepting merchant worldwide | Platform-restricted (Amazon.co.jp / Apple / Google Play only) |
| Online cross-merchant use | Yes — works on any Visa-accepting site | No — restricted to platform |
| Physical card payment | Limited (Vプリカ is principally online / virtual; selected physical card variants exist) | No physical-card payment surface (digital code only) |
| Cross-border purchase | Yes — works on overseas merchants accepting Visa | Limited (platform-specific) |
| Gift recipient choice | Wide — recipient picks any Visa merchant | Narrow — recipient restricted to platform |
| Issuer | Life Card (Japan) | Amazon / Apple / Google (platform operator) |
| FSA registration class | 第三者型 (third-party) | 自家型 (closed-loop) |

The trade-off is that Visa brand-network access carries Visa scheme fees, interchange flows, and acquirer-side merchant economics — closed-loop gift cards avoid these by definition.

## Use cases

| Use case | Description |
|---|---|
| **Online purchases without credit card commitment** | Buyer purchases Vプリカ, uses on Visa-accepting site without registering personal credit card |
| **Gift distribution with recipient choice** | Sender gives Vプリカ to recipient who chooses where to spend across Visa network |
| **Cardless online purchase from foreign merchants** | Vプリカ works on overseas Visa-accepting sites; consumer-protection alternative to credit-card commitment |
| **Cashless on-ramp** | Cardless cohort (minors, no-credit-card adults) purchases Vプリカ at convenience store / online to gain Visa-accepting purchase capability |
| **Privacy-conscious online purchases** | Some users prefer Vプリカ over credit card for transactions where they don't want recurring credit-card billing footprint |
| **Subscription cancellation safety** | Limited-balance card limits subscription auto-renewal risk |

## Distribution rails

| Rail | Description |
|---|---|
| **Online direct purchase** | Vプリカ site direct purchase with various denominations |
| **Convenience-store payment** | Pay at convenience store for online-ordered Vプリカ |
| **ATM purchase** | Pay-easy / ATM rail |
| **Top-up / recharge** | Existing Vプリカ holders can top up balance via Vプリカ site / convenience-store payment / ATM |
| **Promotional campaign distribution** | Promotional gift rewards |

Compared to convenience-store-shelf physical gift cards ([[payments/amazon-gift-card-japan|Amazon]] / [[payments/apple-gift-card-japan|Apple]] / [[payments/google-play-gift-card-japan|Google Play]]), Vプリカ is **primarily online-purchased rather than shelf-displayed** at convenience stores — the convenience-store integration is principally the payment channel for online-ordered Vプリカ, not a shelf-display product.

## Other Visa-branded prepaid in Japan

Vプリカ is the principal but not the only Visa-branded prepaid in Japan. Other Visa-branded prepaid cards include:

- **[[JapanFG/kyash|Kyash]] Visa card** — wallet-and-prepaid-Visa-card hybrid issued by Kyash Inc.; serves a different use case (real-time wallet + Visa prepaid issuance) than Vプリカ (single-load gift / cardless purchase).
- **Various wallet-issued Visa-branded prepaid** — multiple fintech wallets issue Visa prepaid as part of their wallet offering (e.g., [[JapanFG/paypay|PayPay]] card, various smaller wallet Visa cards).
- **[[JapanFG/au-payment|au PAY]] prepaid card** — Visa or Mastercard prepaid card issued in connection with au PAY wallet.
- **Bank-issued prepaid** — selected bank-issued Visa prepaid products.

The boundary between **Visa Gift Card** (single-load gift-orient) and **Visa-branded wallet prepaid** (recharge-and-spend wallet) is somewhat blurred — both use Visa scheme acceptance, but the product positioning and customer use case differ.

## KPI snapshot

| Metric | Reading |
|---|---|
| Vプリカ cumulative issuance | Material multi-million card scale (Life Card / Vプリカ public disclosure) |
| Visa-accepting merchant network globally | ~80M merchants worldwide (Visa group disclosure) |
| Vプリカ denomination range | ¥500 to ¥30,000 |
| Top-up rail availability | Convenience-store, ATM, online site, multiple charge points |

Exact figures live in Life Card disclosure and Vプリカ site.

## Strategy: brand-network prepaid for cardless and online use

Visa Gift Card Japan (principally Vプリカ) strategic role:

1. **Brand-network universality** — Visa acceptance footprint vastly exceeds closed-loop platform gift cards.
2. **Cardless online purchase** — serves users who don't want to commit credit-card billing details to online merchants.
3. **Recipient-choice gift distribution** — wide spending surface for recipients.
4. **Cross-border purchase capability** — overseas-merchant Visa acceptance.
5. **Limited-balance subscription safety** — prepaid balance bounds auto-renewal risk on subscription sign-ups.

## Counterpoints

- "Vプリカ is just a credit card with prepayment." It is prepaid — no credit risk to issuer, no consumer credit underwriting, no installment / revolving option; structurally different from credit card.
- "Closed-loop gift cards are equivalent." They are not — closed-loop gift cards restrict spending to one platform; brand-network prepaid spends across the entire Visa network.
- "Why not just use a credit card?" Cardless cohorts and consumer-privacy / subscription-safety use cases are real; not all users want or qualify for credit cards.
- "Visa Gift Card and Kyash card are the same." Both are Visa-branded prepaid in Japan, but Vプリカ is single-load gift-orient and Kyash is recharge-and-spend wallet-orient — different product categories.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[JapanFG/life-card]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/kyash]]
- [[INDEX|FinWiki index]]

## Sources

- Visa Japan prepaid cards page (visa.co.jp/pay-with-visa/find-a-card/prepaid-cards.html).
- Vプリカ official site (vpc.lifecard.co.jp).
- Visa Japan corporate site (visa.co.jp).
- Life Card corporate site (lifecard.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Life Card entry, registered 2011-04-01, corporate number 3020001086810).
- FSA prepaid payment instruments policy page.
- Japan Credit Association — card security guidelines.
- METI cashless policy page.
