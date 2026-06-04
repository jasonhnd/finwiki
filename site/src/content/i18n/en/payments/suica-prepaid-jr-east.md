---
source: payments/suica-prepaid-jr-east
source_hash: e078df1293c47ca3
lang: en
status: machine
fidelity: ok
title: "Suica: JR East transit and general-purpose IC prepaid"
translated_at: 2026-06-01T03:31:12.251Z
---
# Suica: JR East transit and general-purpose IC prepaid

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the JR East-anchored prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid e-money economics]] for the cross-issuer scheme view (10 IC mutual-use, Cyberne settlement). Compare with [[payments/pasmo-prepaid-tokyo-metro|PASMO]] (Tokyo metro / private-rail consortium counterpart), [[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]] (retail-anchored FeliCa peers), and [[payments/edy-rakuten-prepaid|Rakuten Edy]] (platform-agnostic FeliCa). Corporate / group anchor is [[card-issuers/jr-east-financial|JR East financial services / Viewカード]]; technology backbone is FeliCa via Sony / FeliCa Networks; mobile-rail extension links to [[payments/japan-card-security-authentication-controls|tokenization controls]] under Apple Pay / Osaifu Keitai.

## TL;DR

**Suica** (Super Urban Intelligent Card) is the **flagship Japan transit-and-general-purpose IC prepaid e-money**, issued by **East Japan Railway Company (JR East / 東日本旅客鉄道株式会社)** since launch 2001-11-18. Suica is the **largest transit-prepaid issuer by cardholders and transaction count** in Japan, anchoring the [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|10 IC mutual-use scheme]] alongside PASMO / ICOCA / Kitaca / TOICA / manaca / nimoca / SUGOCA / HAYAKAKEN / PiTaPa (the last being the post-pay exception). Suica is registered as a **第三者型前払式支払手段** under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] with cross-merchant acceptance at convenience stores, vending machines, taxis, retail chains, and any FeliCa-accepting POS. **Mobile Suica** launched 2006 (mobile phone integration), with Apple Pay support arriving 2016-10 — converting Suica from physical-card-only to smartphone-native and enabling overseas-issued iPhone integration that has anchored Japan's inbound-tourist cashless story.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Brand owner | East Japan Railway Company (JR East / 東日本旅客鉄道株式会社) |
| FSA prepaid issuer | JR East as third-party prepaid issuer |
| Group affiliated card | View Card (Viewカード) — co-brand JR East credit card with Suica auto-charge |
| Launch year | 2001-11-18 (physical card), 2006 (Mobile Suica), 2016-10 (Apple Pay) |
| Technology | FeliCa contactless IC (Sony / FeliCa Networks) |
| Mobile rail | Mobile Suica (Osaifu Keitai → Apple Pay / Google Pay / Wear OS support) |
| Charge ceiling | ¥20,000 (typical Suica card); Mobile Suica via View Card auto-charge can extend |
| Inter-issuer settlement | Cyberne system across 10 IC issuers |

## Legal basis: 前払式支払手段

Suica is registered as a **第三者型前払式支払手段** under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 because it is accepted at **third-party merchants beyond JR East's own service** (convenience stores, vending, retail). The mutual-use scheme tap acceptance on **other railway operators' networks** is governed by inter-issuer agreements documented in [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]. Key regulatory consequences:- JR East as issuer appears in [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] for third-party prepaid issuance.
- Half-yearly **unused-balance deposit** obligation: half of outstanding balance with Legal Affairs Bureau (供託) — sizable given Suica's installed-base scale.
- **No refunding to original payer except at issuance discontinuation** — but JR East does refund Suica balances on physical card return for a fee, structured as a service refund rather than a PSA-mandated one.
- **Breakage** (tourist-purchased Suica cards never returned, balances retained) is a material P&L contributor and a long-running scrutiny topic.

## The 10 IC mutual-use scheme

Suica is the anchor of the **10 IC mutual-use scheme** launched 2013-03-23, which lets a Suica cardholder tap onto any of the participating railway / bus networks nationwide and pay at any participating retail merchant. Full cross-scheme map is in [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]:

| Card | Issuer | Region |
|---|---|---|
| **Suica** | JR East | Greater Tokyo / Northern Japan |
| PASMO | PASMO Co Ltd | Greater Tokyo private rail / bus |
| ICOCA | JR West | Kansai / Western Japan |
| Kitaca | JR Hokkaido | Hokkaido |
| TOICA | JR Central | Tokai / Nagoya |
| manaca | Meitetsu + Nagoya City | Nagoya / Chubu |
| nimoca | Nishitetsu | Fukuoka / Kyushu |
| SUGOCA | JR Kyushu | Kyushu |
| HAYAKAKEN | Fukuoka City Subway | Fukuoka City |
| PiTaPa | Surutto KANSAI (post-pay) | Kansai (overlap with ICOCA) |

Inter-issuer settlement runs through **Cyberne** (中央センター — JR East + JR group + private-rail-consortium operated central settlement), which clears tap transactions across issuers.

## Mobile Suica generations

| Generation | Year | Key features |
|---|---|---|
| Physical Suica only | 2001-2006 | Card-based; charge at JR ticket-vending machines / commuter pass kiosks |
| Mobile Suica (Osaifu Keitai) | 2006 | Feature-phone-then-smartphone Osaifu Keitai integration; FeliCa-equipped Android devices |
| Apple Pay Suica | 2016-10 | iPhone 7 onward; major overseas-iPhone integration; SIM-region independence enabled inbound-tourist usage |
| Google Pay / Wear OS | 2018 onward | Android non-Osaifu Keitai devices via Google Pay |
| Suica Internet Service / web-based charge | Continued | Charge via View Card / credit card from web |

Apple Pay Suica 2016 was structurally significant because it removed the SIM-region restriction that had constrained Mobile Suica to Japanese-carrier Osaifu Keitai devices, enabling overseas-issued iPhones to provision a Suica wallet and use it for transit and retail in Japan. This is one of the principal cashless inbound-tourist lanes and has reshaped overseas-visitor payment expectations.

## KPI snapshot

| Metric | Reading (most recent public disclosure) |
|---|---|
| Cumulative Suica issuance | 100M+ including Mobile Suica (JR East IR materials) |
| Daily transit-tap count | Largest single transit-IC issuer by daily tap count in Japan |
| Mobile Suica accounts | Tens of millions (JR East IR disclosed) |
| Outstanding prepaid balance | Multi-hundred-billion-yen scale (JR East 有価証券報告書 prepaid-deposit disclosure) |
| Annual retail tap value | Substantial cross-merchant transaction value; JR East IR breaks out e-money revenue segment |

Exact period-on-period KPI figures are in JR East IR materials; FinWiki routes to issuer IR for current quarterly numbers rather than reproducing them.

## Strategy: transit-anchored cashless platform

Suica's strategic logic at JR East:

1. **Transit-anchored installed base** — every JR East commuter is a potential Suica cardholder; the rail-pass conversion to Suica IC card has driven mass distribution that retail-anchored peers cannot match.
2. **Breakage / float economics** — large outstanding balance is a low-cost funding source and a P&L breakage tailwind on lost / unreturned cards.
3. **Inbound tourist cashless** — Apple Pay enablement has made Suica the de-facto inbound-tourist cashless rail in Japan.
4. **JR East Group cross-sell** — View Card credit-card issuance, JRE POINT loyalty integration, ekinaka retail acceptance — all anchored on Suica.
5. **Open mutual-use vs closed-loop** — Suica's choice to participate in the 10 IC mutual-use scheme (rather than closed JR-only) was structurally enabling for the whole transit-IC ecosystem; the trade-off is inter-issuer settlement complexity managed via Cyberne.
6. **Centralization (JRE PoiNT, Mobile Suica integration with JRE WALLET)** — recent JR East strategic direction is consolidation under JRE platform brand.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/pasmo-prepaid-tokyo-metro]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-card-security-authentication-controls]]
- [[card-issuers/jr-east-financial]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- JR East Suica official site (jreast.co.jp/suica).
- JR East Mobile Suica site (jreast.co.jp/mobilesuica).
- JR East corporate site and IR materials.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list.
- FSA prepaid payment instruments policy page.
- FeliCa Networks corporate site (felicanetworks.co.jp).
- METI cashless policy page.
