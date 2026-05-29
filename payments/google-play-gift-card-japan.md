---
title: "Google Play Gift Card Japan: closed-loop Google-ecosystem prepaid"
aliases:
  - "google-play-gift-card-japan"
  - "Google Play Gift Card Japan"
  - "Google Playギフトカード"
  - "Google Play prepaid Japan"
  - "Google Play 残高"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, prepaid, gift-card, google, google-play, android, closed-loop, digital-prepaid]
status: active
sources:
  - "https://play.google.com/intl/ja-JP/about/giftcards/"
  - "https://support.google.com/googleplay/answer/4596788?hl=ja"
  - "https://www.google.co.jp/"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/"
---

# Google Play Gift Card Japan: closed-loop Google-ecosystem prepaid

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Google Play Gift Card Japan closed-loop prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view. Compare with [[payments/amazon-gift-card-japan|Amazon Gift Card Japan]], [[payments/apple-gift-card-japan|Apple Gift Card Japan]] (peer platform-anchored closed-loop gift cards), [[payments/quo-card-prepaid|QUO Card]] (multi-merchant open-loop gift), and [[payments/visa-gift-card-japan|Visa Gift Card]] (brand-network prepaid). Distinguish from third-party retail-anchored prepaid ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) — Google Play Gift Card is **closed-loop** (usable only within Google Play store and Google services), while WAON / nanaco are third-party multi-merchant. Legal framework: [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]].

## TL;DR

**Google Play Gift Card (Google Playギフトカード)** is the **closed-loop prepaid gift card for Google Play store and Google ecosystem services**, issued in Japan by **Google Asia Pacific Pte Ltd / Google Japan G.K.** under arrangement with local convenience-store and electronics-retailer distributors, and operating as a 自家型 (closed-loop) 前払式支払手段 under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]. Balance is spendable on **Google Play store** (apps, in-app purchases, games, books, movies — including Google Play Pass subscription) and selected Google services. As the **Android-ecosystem counterpart to [[payments/apple-gift-card-japan|Apple Gift Card]]**, Google Play Gift Card serves the same structural role of **cardless on-ramp for app and in-app purchases** for users without registered credit cards (minors, no-credit-card cohorts, gift recipients). Distribution rails include convenience stores (Lawson, FamilyMart, MiniStop, 7-Eleven, Daily Yamazaki), drugstores, electronics retailers (Yamada Denki, Bic Camera, Yodobashi Camera, Edion), and online digital distribution.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Operating company | Google Asia Pacific Pte Ltd (issuer); Google Japan G.K. (Japan local entity) |
| Group parent | Alphabet Inc. (US) |
| FSA prepaid registration | 自家型前払式支払手段 (closed-loop) — Google Play / Google ecosystem |
| Legal classification | Closed-loop prepaid (not 第三者型) — does not appear in `daisan.xlsx` 第三者 list |
| Launch year in Japan | 2012 (initial Google Play Gift Card launch in Japan) |
| Denominations | Fixed (¥1,500, ¥3,000, ¥5,000, ¥10,000) and variable (¥1,500 to ¥50,000 for selected channels) |
| Distribution rails | Convenience stores, electronics retailers, drugstores, online digital distribution |
| Acceptance | Google Play store (apps, in-app purchases, games, books, movies, Google Play Pass, etc.) |
| Expiry | No expiry on balance once redeemed to Google account |

## Legal basis: 自家型前払式支払手段 (closed-loop)

Google Play Gift Card is registered as **自家型前払式支払手段** under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 because acceptance is restricted to Google's own platform and services. Key regulatory consequences:

- **Different FSA registry** — closed-loop issuers do not appear in [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] (which is third-party / 第三者型 only).
- **Half-yearly unused-balance deposit** (供託) obligation still applies under PSA closed-loop framework.
- **No refunding to original payer except at issuance discontinuation** — Google Play Gift Card balance is non-refundable to cash.
- **Long balance retention** — once redeemed to Google account, balance has no expiry, so account-level breakage is minimal; unredeemed card-level breakage (lost / unredeemed physical cards) is a separate dimension.

## Cardless on-ramp use case

Google Play Gift Card's principal role in Japan is **cardless on-ramp for Android users** — particularly:

| Cohort | Use case |
|---|---|
| **Minors** | Under-18 users without credit cards purchase apps, in-app purchases, and games via gift-card balance |
| **No-credit-card adults** | Adults without credit cards or unwilling to register them on Google account purchase Play content via gift-card balance |
| **Gift recipients** | Birthday / seasonal gift recipients receive Google Play balance for app / content purchase |
| **Cardless gaming spending** | Mobile game in-app purchases (gacha / loot box / battle pass) — particularly important given Japan's mobile gaming spend per user is among the world's highest |
| **Subscriptions** | Google Play Pass subscription bundled-app access funded from balance |

The **mobile gaming spend lane** is structurally important — Japan's mobile games market drives significant Google Play in-app purchase volume, and a sizable share of that comes from gift-card-funded balance rather than credit-card direct billing.

## Distribution rails

| Rail | Description |
|---|---|
| **Convenience stores** | Lawson, FamilyMart, MiniStop, 7-Eleven, Daily Yamazaki, Seicomart — physical cards in plastic packaging |
| **Drugstores** | マツモトキヨシ, ココカラファイン, スギ薬局, ウエルシア — physical cards |
| **Electronics retailers** | Yamada Denki, Bic Camera, Yodobashi Camera, Edion, Ksdenki — physical cards |
| **Online digital distribution** | Google Play site direct purchase (limited in Japan compared to other markets), select Amazon / Rakuten reseller channels |
| **Carrier billing complement** | Docomo / au / SoftBank carrier-billing is the primary credit-card alternative; gift card serves the non-carrier-billing user cohort |
| **Promotional campaign distribution** | Telecom-carrier promotional rewards, app-promotion campaigns |

## Gift-card fraud / scam concern

Like [[payments/amazon-gift-card-japan|Amazon Gift Card]] and [[payments/apple-gift-card-japan|Apple Gift Card]], Google Play Gift Card has been heavily exploited in **Japan's 振り込め詐欺 / 電子マネー型詐欺** ecosystem — scam callers instruct victims to purchase Google Play Gift Cards at convenience stores and read the codes over the phone. Google's response:

- Google Help-page consumer-warning content about scam-purchase requests.
- Convenience-store cashier warning processes on high-denomination purchases.
- NPA and consumer-protection authorities name Google Play Gift Card alongside Amazon and Apple in scam-pattern advisories.

## KPI snapshot

| Metric | Reading |
|---|---|
| Cumulative Google Play Gift Card issuance in Japan | Material multi-trillion-yen scale over franchise lifetime (Google does not publish Japan-segmented figures) |
| Convenience-store / drugstore / electronics distribution | All major chains carry Google Play Gift Card |
| Mobile gaming spend dependency | Substantial share of Japan's Google Play in-app purchase volume is gift-card-funded |
| Cardless / minor user cohort | Significant; Google Play Gift Card is the principal cardless app-purchase rail for non-credit-card users |
| Variable denomination availability | Limited compared to US / EU; mostly fixed denominations |

Google does not break out Japan-segmented Gift Card sales; figures live in industry estimates and channel-distribution indicators.

## Strategy: Android-ecosystem cashless on-ramp

Google Play Gift Card Japan's strategic role:

1. **Android-ecosystem cardless on-ramp** — minors / no-credit-card users / gift recipients can purchase apps and in-app content without registered credit card.
2. **Mobile gaming spend capture** — gift-card-funded in-app purchases are a meaningful share of Japan's mobile game spend.
3. **Closed-loop float / breakage** — same closed-loop economics as Apple / Amazon Gift Card.
4. **Convenience-store rail leverage** — physical-card distribution across Japan's convenience-store network is the acquisition lane.
5. **Carrier-billing complement** — Docomo / au / SoftBank carrier-billing handles a separate (and very large) cohort of non-credit-card Google Play payment; gift card serves the cohort outside carrier billing or in addition to it.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## Sources

- Google Play Gift Card Japan page (play.google.com/intl/ja-JP/about/giftcards/).
- Google Play Gift Card support page (support.google.com/googleplay/answer/4596788).
- Google Japan corporate site.
- FSA prepaid payment instruments policy page (closed-loop / 自家型 framework).
- FSA `daisan.xlsx` (cross-reference — confirms Google Play Gift Card is closed-loop, not third-party listed).
- METI cashless policy page.
