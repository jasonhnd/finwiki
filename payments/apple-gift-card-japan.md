---
title: "Apple Gift Card Japan: closed-loop Apple-ecosystem prepaid"
aliases:
  - "apple-gift-card-japan"
  - "Apple Gift Card Japan"
  - "Appleギフトカード"
  - "iTunesカード Japan"
  - "App Store gift card Japan"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, prepaid, gift-card, apple, app-store, itunes, closed-loop, digital-prepaid]
status: active
sources:
  - "https://www.apple.com/jp/shop/buy-giftcard/giftcard"
  - "https://support.apple.com/ja-jp/HT213007"
  - "https://www.apple.com/jp/"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/"
---

# Apple Gift Card Japan: closed-loop Apple-ecosystem prepaid

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Apple Gift Card Japan closed-loop prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view. Compare with [[payments/amazon-gift-card-japan|Amazon Gift Card Japan]], [[payments/google-play-gift-card-japan|Google Play Gift Card Japan]] (peer platform-anchored closed-loop gift cards), [[payments/quo-card-prepaid|QUO Card]] (multi-merchant open-loop gift), and [[payments/visa-gift-card-japan|Visa Gift Card]] (brand-network prepaid). Apple Gift Card replaced the legacy **iTunes Card** and **Apple Store Gift Card** in 2021, consolidating into a single unified gift card spendable across Apple ecosystem (App Store, iTunes, iCloud, Apple Music, Apple TV+, Apple hardware, Apple Store). Legal framework: [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]].

## TL;DR

**Apple Gift Card (Appleギフトカード)** is the **closed-loop unified prepaid gift card of Apple Inc.**, issued in Japan by **Apple Japan G.K. (Apple Japan合同会社)** and operating as a 自家型 (closed-loop / single-merchant) 前払式支払手段 under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]. The product **launched in unified form 2021-09**, consolidating the previous **iTunes Card** (App Store / iTunes / Apple Music / iCloud spend) and **Apple Store Gift Card** (Apple hardware / Apple Store retail spend) into a single SKU. Apple Gift Card balance is spendable across the **full Apple ecosystem in Japan** — App Store, iTunes Store, Apple Music, Apple TV+, iCloud, Apple Books, Apple Arcade, **and** Apple Store (apple.com/jp/shop) for hardware (iPhone, iPad, Mac, AirPods, accessories). Distribution rails include physical card sales at convenience stores (Lawson, FamilyMart, MiniStop, 7-Eleven, Daily Yamazaki, drugstores, electronics retailers, etc.), Apple.com/jp digital eGift, and Apple Store retail.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Operating company | Apple Japan G.K. (アップル・ジャパン合同会社) |
| Group parent | Apple Inc. (US) |
| FSA prepaid registration | 自家型前払式支払手段 (closed-loop) — single-merchant Apple ecosystem |
| Legal classification | Closed-loop prepaid (not 第三者型) — does not appear in `daisan.xlsx` 第三者 list |
| Launch year (unified) | 2021-09 (consolidation of iTunes Card + Apple Store Gift Card) |
| Predecessor products | iTunes Card (digital content), Apple Store Gift Card (hardware retail) — both retired in unified consolidation |
| Denominations | Fixed (¥1,500, ¥3,000, ¥5,000, ¥10,000, ¥25,000) and variable (¥1,500 to ¥50,000 selectable for digital eGift) |
| Distribution rails | Convenience stores, electronics retailers, Apple Store, Apple.com/jp eGift |
| Acceptance | Apple ecosystem only (App Store, iTunes, Apple Music, Apple TV+, Apple Books, Apple Arcade, iCloud, Apple Store hardware / retail) |
| Expiry | No expiry on balance once redeemed to Apple ID |

## Legal basis: 自家型前払式支払手段 (closed-loop)

Apple Gift Card is registered as **自家型前払式支払手段** under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3. The closed-loop classification reflects that acceptance is restricted to Apple's own services and retail. Key regulatory consequences:

- **Different FSA registry** — closed-loop issuers do not appear in [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] (which is third-party / 第三者型 only).
- **Half-yearly unused-balance deposit** (供託) obligation still applies under PSA closed-loop framework.
- **No refunding to original payer except at issuance discontinuation** — Apple Gift Card balance is non-refundable to cash.
- **Long balance retention** — once redeemed to Apple ID, balance has no expiry, so breakage at the redeemed-to-account level is minimal; unredeemed card-level breakage (lost / unredeemed physical cards) is a separate dimension.

## Unified consolidation (2021-09)

The pre-2021 product landscape:

| Pre-2021 product | Spending surface |
|---|---|
| **iTunes Card** | App Store, iTunes Store, Apple Music, Apple TV+, Apple Books, Apple Arcade, iCloud — digital content / services |
| **Apple Store Gift Card** | Apple Store (apple.com/jp/shop) — hardware (iPhone, iPad, Mac, AirPods) |
| **App Store & iTunes Gift Card (international)** | Similar to iTunes Card |

The **2021-09 unification** combined these into a single **Apple Gift Card** SKU spendable across both digital-content and hardware-retail surfaces — a structural simplification for both consumers and distribution channels. This was a global Apple product change rolled out in Japan, US, and other major markets concurrently.

## Distribution rails

| Rail | Description |
|---|---|
| **Convenience stores** | Lawson, FamilyMart, MiniStop, 7-Eleven, Daily Yamazaki, Seicomart — physical cards in plastic packaging |
| **Drugstores** | マツモトキヨシ, ココカラファイン, スギ薬局, ウエルシア, ツルハ — physical cards |
| **Electronics retailers** | Yamada Denki, Bic Camera, Yodobashi Camera, Edion, Ksdenki — physical cards |
| **Apple Store retail** | Apple Store Japan (Marunouchi, Shibuya, Omotesando, Ginza, etc.) — physical + digital eGift |
| **Apple.com/jp eGift** | Online digital delivery via email, customizable amount and message |
| **Promotional / campaign distribution** | Apple-partner campaign rewards |

The **convenience-store + drugstore + electronics-retailer distribution** is the principal physical-card lane and accounts for the bulk of off-Apple-channel Gift Card sales.

## Gift-card fraud / scam concern

Like [[payments/amazon-gift-card-japan|Amazon Gift Card]], Apple Gift Card has been heavily exploited in **Japan's 振り込め詐欺 / 電子マネー型詐欺** (wire-fraud / e-money-fraud) scam ecosystem — scam callers instruct victims to purchase Apple Gift Cards at convenience stores and read the codes over the phone. Apple Japan's response:

- Consumer-warning pages and scam-awareness messaging on Apple support site.
- Convenience-store cashier warnings on high-denomination Apple Gift Card purchases.
- The scam pattern has driven National Police Agency and consumer-protection authority guidance specifically naming Apple Gift Card alongside Amazon and Google Play.

## KPI snapshot

| Metric | Reading |
|---|---|
| Cumulative Apple Gift Card (including pre-unification iTunes Card) issuance | Material multi-trillion-yen scale over franchise lifetime (Apple does not publish Japan-segmented Gift Card figures) |
| Convenience-store distribution penetration | All major convenience-store chains and drugstores carry Apple Gift Card |
| Apple ecosystem dependency | Apple Gift Card is the **principal cardless-payment rail** for App Store purchases in Japan — particularly important for minors / no-credit-card users buying apps and in-app purchases |
| Variable denomination eGift | Available from Apple.com/jp; corporate bulk B2B available |

Apple does not break out Japan-segmented Gift Card sales in financial disclosure; figures live in industry estimates and indirect channel-distribution indicators.

## Strategy: Apple-ecosystem cashless on-ramp

Apple Gift Card Japan's strategic role:

1. **App Store cardless on-ramp** — minors, no-credit-card users, and gift-recipients can purchase apps and in-app content without registering a credit card.
2. **Hardware-retail gift distribution** — replacing the previous separate Apple Store Gift Card simplifies the consumer gift-giving choice.
3. **Closed-loop float / breakage** — like other closed-loop platform gift cards, Apple gets float on outstanding balance and breakage on unredeemed cards.
4. **Convenience-store rail leverage** — broad physical-card distribution across Japan's convenience-store network anchors purchase accessibility.
5. **Unified SKU efficiency** — 2021 consolidation reduced SKU complexity for retailers and consumer confusion at point of sale.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## Sources

- Apple Gift Card Japan page (apple.com/jp/shop/buy-giftcard/giftcard).
- Apple support page on Apple Gift Card (support.apple.com/ja-jp/HT213007).
- Apple Japan corporate site.
- FSA prepaid payment instruments policy page (closed-loop / 自家型 framework).
- FSA `daisan.xlsx` (cross-reference — confirms Apple Gift Card is closed-loop, not third-party listed).
- METI cashless policy page.
