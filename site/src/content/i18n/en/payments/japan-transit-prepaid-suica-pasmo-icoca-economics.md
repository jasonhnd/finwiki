---
source: payments/japan-transit-prepaid-suica-pasmo-icoca-economics
source_hash: 5d37a4ae9275e2b6
lang: en
status: machine
fidelity: ok
title: "Japan transit-prepaid e-money: Suica / PASMO / ICOCA / regional IC economics"
translated_at: 2026-06-01T03:31:12.271Z
---

# Japan transit-prepaid e-money: Suica / PASMO / ICOCA / regional IC economics

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the transit-prepaid scheme reference page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA-registered prepaid-issuer view, with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme comparison, with [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the Mobile Suica refund / transferability question, and with [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] for the inter-issuer settlement view via Cyberne. Compare with [[JapanFG/rakuten-edy|Rakuten Edy]] (non-transit FeliCa prepaid) and [[payments/japan-code-payment-competitive-map|code-payment competitive map]] for the substitute scheme that has cannibalized some transit-prepaid retail tap volume. Mobile-rail Apple Pay / Osaifu Keitai routing crosses into [[payments/japan-card-security-authentication-controls|card security and authentication controls]] for tokenization treatment.

## TL;DR

Japan transit-prepaid e-money runs on a **single mutual-use scheme** anchored by FeliCa (Sony's contactless IC technology), the **10 IC card cross-acceptance agreement** (since 2013), and the **Cyberne** inter-issuer settlement system. Nine of the ten cards are railway-operator issued: **Suica** ([[JapanFG/jr-east|JR East]]), **PASMO** (PASMO Co — Tokyo private railway / bus consortium), **ICOCA** ([[JapanFG/jr-west|JR West]]), **Kitaca** ([[JapanFG/jr-hokkaido|JR Hokkaido]]), **TOICA** ([[JapanFG/jr-central|JR Central]]), **manaca** (Nagoya — Meitetsu + Nagoya City Transportation Bureau), **nimoca** (Nishitetsu, Fukuoka), **SUGOCA** ([[JapanFG/jr-kyushu|JR Kyushu]]), **HAYAKAKEN** (Fukuoka City Transportation Bureau). PiTaPa (Surutto KANSAI) is the tenth and operates as post-pay rather than prepaid. All nine prepaid cards share inter-railway tap acceptance and substantial retail-merchant acceptance under each issuer's prepaid-payment-instrument registration. Mobile Suica via Apple Pay / Osaifu Keitai converted the scheme from card-only to smartphone-native around 2016 (Apple Pay launch); Mobile PASMO followed in 2020. The whole scheme is governed under the Payment Services Act prepaid-instrument framework — refundable only at issuance discontinuation, with **breakage economics** (unredeemed balance accruing to issuer over time) contributing to issuer P&L particularly for tourist-purchased cards never returned.

## The 10 IC mutual-use scheme

The 10 IC card mutual-use agreement (10カード相互利用) was launched 2013-03-23 and lets a cardholder use any of the ten cards on any participating railway or bus network across the country, and at any participating retail merchant. Before 2013, each card was restricted to its issuer's railway region; the mutual-use launch was one of the largest single interoperability events in Japan retail payments.

| Card | Issuer | Region | Operator type | Prepaid / post-pay |
|---|---|---|---|---|
| Suica | [[JapanFG/jr-east\|JR East]] | Greater Tokyo / Northern Japan | JR group | Prepaid |
| PASMO | PASMO Co Ltd | Greater Tokyo | Private railway + bus consortium | Prepaid |
| ICOCA | [[JapanFG/jr-west\|JR West]] | Kansai / Western Japan | JR group | Prepaid |
| Kitaca | [[JapanFG/jr-hokkaido\|JR Hokkaido]] | Hokkaido | JR group | Prepaid |
| TOICA | [[JapanFG/jr-central\|JR Central]] | Tokai / Nagoya | JR group | Prepaid |
| manaca | Meitetsu + Nagoya City Transportation Bureau | Nagoya / Chubu | Private railway + municipal | Prepaid |
| PiTaPa | Surutto KANSAI | Kansai (overlap with ICOCA) | Private railway consortium | **Post-pay** |
| nimoca | Nishitetsu | Fukuoka / Kyushu | Private railway | Prepaid |
| SUGOCA | [[JapanFG/jr-kyushu\|JR Kyushu]] | Kyushu | JR group | Prepaid |
| HAYAKAKEN | Fukuoka City Transportation Bureau | Fukuoka City subway | Municipal | Prepaid |

PiTaPa is the structural exception — it is a **post-pay** scheme where the cardholder is billed monthly via bank-account direct debit rather than pre-loading value. This puts it closer to [[payments/japan-card-issuer-acquirer-processor-split|card-style credit]] economics than to the other nine. PiTaPa interop with the prepaid nine works only one-way (PiTaPa can be used at Suica / PASMO / etc.-accepting locations within the Kansai zone, but Suica / PASMO cannot be used on PiTaPa-only post-pay merchants).

## FeliCa technology stack

All ten cards run on **FeliCa**, Sony's proprietary contactless IC technology (NFC-F in ISO/IEC 18092 terms) — distinct from the EMV contactless / NFC-A/B used by Visa Touch / Mastercard Contactless. FeliCa's key technical features for transit are:

| Feature | Why it matters |
|---|---|
| 200ms read-cycle | Allows train-gate throughput — passenger walks through gate without stopping |
| Mutual authentication between card and reader | Reduces clone-card and replay-attack surface |
| Local-encryption with secure-element execution | Card-side calculation of remaining balance without back-end query at each tap |
| 1-tap balance debit | No online authorization needed for offline transit gate operation |

The **FeliCa Networks** joint venture (Sony + NTT docomo + JR East) develops and licenses the technology stack. The choice of FeliCa rather than EMV contactless is the principal reason international tourists' Visa / Mastercard contactless cards do not work on Japan transit gates — and conversely why Suica's Apple Pay implementation works at FeliCa-equipped retail merchants worldwide-purchased iPhones can transact, because Apple shipped FeliCa hardware globally starting iPhone 8.

## Cyberne settlement system

Inter-issuer settlement among the 10 IC cards is handled through **Cyberne** (a centralized settlement system operated by railway industry partners). When a Suica cardholder taps in at JR East and taps out at JR Tokai, fare-revenue allocation between the two railway operators is calculated and settled through Cyberne. Same mechanism handles cross-issuer retail-merchant settlement: if a manaca cardholder buys at a Suica-acquired merchant, value flows from issuer manaca → Cyberne → acquirer Suica → merchant.

The Cyberne system ultimately moves yen between issuer bank accounts via Zengin transfer — same as every other Japan payment scheme. See [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] for the end-to-end clearing map.

## Mobile rail: Apple Pay and Osaifu Keitai

The prepaid IC scheme has two principal mobile-device rails:

| Rail | Devices | Coverage |
|---|---|---|
| Mobile Suica via Apple Pay | iPhone 7+ (Japan model), iPhone 8+ (global model with FeliCa), Apple Watch Series 3+ | Suica, PASMO, ICOCA (added 2023) |
| Osaifu Keitai (おサイフケータイ) | Japan-market Android phones with FeliCa | Suica, PASMO, ICOCA, WAON, nanaco, Edy, iD, QUICPay |

Mobile Suica predates Apple Pay (JR East launched it 2006 for FeliCa-equipped Japan-domestic feature phones), but Apple Pay launch in 2016 was the inflection point — it converted Suica from a feature-phone niche into a mainstream smartphone payment surface. By 2024, mobile-version transactions represented the majority of new Suica issuance, though card-version remains widely used.

The Apple Pay implementation involves a tokenization layer (Apple Pay generates device-specific token PANs) but the underlying transit ride still uses the FeliCa secure element on the device with offline balance-debit semantics — Apple Pay does not introduce an online authorization to JR East at the train gate.

## Prepaid Payment Instrument Act treatment

All nine prepaid IC cards are registered as **third-party prepaid payment instruments** under the Payment Services Act (FSA registration). This triggers:

| Obligation | Detail |
|---|---|
| User-fund safeguarding | 50% of unused-balance amount must be safeguarded with deposit / trust / guarantee at each March-end and September-end balance date |
| Refund only at discontinuation | Unused balance is NOT refundable in cash on demand during normal operations — only on issuance discontinuation (this is the legal distinction from funds-transfer service) |
| Termination procedures | If an issuer discontinues, refund process must follow Payment Services Act procedure |
| No transfer between users | A prepaid balance cannot be sent to another user (this is the legal line vs funds-transfer balance) |
| Expiry rules | Issuer may set expiry; unused balance after expiry treated under issuer terms |

The non-refundability point is the principal source of **breakage economics**. Cards purchased by inbound tourists and never used to exhaustion (typical case: tourist buys ¥3,000 Suica card on arrival, uses ¥2,400, leaves Japan with ¥600 unredeemed plus ¥500 deposit) generate breakage that accrues to issuer P&L over time. JR East has historically not disclosed Suica breakage figures explicitly, but inbound-tourism volume — peaked at ~32 million pre-COVID, recovered to comparable levels by 2024 — implies meaningful breakage contribution.

See [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for why the cannot-refund-on-demand rule is what keeps transit prepaid in the prepaid category rather than triggering funds-transfer-service registration.

## Merchant acceptance footprint

Transit prepaid cards have a substantial retail-merchant footprint beyond the transit gate:

| Acceptance zone | Coverage |
|---|---|
| Train and bus | Universal across 10 IC scheme |
| Station-area retail | Very high — convenience stores, kiosks, vending machines in / near stations |
| Convenience store chains | Universal at 7-Eleven, FamilyMart, Lawson, Ministop |
| Drugstores, supermarkets | High — Welcia, Tsuruha, Sundrug, AEON (also accepts WAON), Ito-Yokado (also nanaco) |
| Fast food, casual dining | High |
| Vending machines | High in stations and increasingly outside |
| EC online | Limited — Mobile Suica supports Suica Internet payment for select EC merchants but volume is small |
| Cross-border | None — closed Japan-domestic scheme |

The retail-acceptance footprint was built primarily through JR East's Suica acquirer-side operations and PASMO Co's Tokyo-area private-railway merchant partnerships. Single-acquirer dynamics mean merchant fees are negotiated bilaterally with the issuer rather than through competing acquirers (contrast [[payments/japan-card-issuer-acquirer-processor-split|card class multi-acquirer]] structure).

## Mobile Suica deposit elimination (2024)

JR East eliminated the ¥500 deposit requirement on Mobile Suica issued via Apple Pay in earlier rollout; for card-based Suica the deposit remains. This split treatment between card-Suica and Mobile-Suica is a reminder that "Suica" is not a single product but a family with different deposit, refund, expiry, and acceptance rules depending on form factor. Same applies for PASMO and ICOCA's mobile variants.

## Merchant fee economics — single-acquirer dynamics

Because each transit-prepaid card has a **single principal acquirer** (the issuer entity itself), merchant-fee economics differ structurally from card-class multi-acquirer pricing:

| Aspect | Transit prepaid (Suica / PASMO / ICOCA et al.) | Card (Visa / Mastercard / JCB) |
|---|---|---|
| Acquirer choice | Single — contract with issuer or its authorized acquirer-partner | Multiple — merchant picks among licensed acquirers |
| Fee disclosure | Limited public disclosure of merchant-fee schedule | Public benchmark via JFTC / Payments Japan |
| Fee benchmarking | Difficult — no cross-acquirer comparison | Possible — multi-acquirer competition disciplines |
| Hardware cost | Merchant must install FeliCa reader (¥30,000+) | Modest cost via PSP-provided terminal |
| Per-tap cost | Embedded in MDR; varies by merchant tier | MDR-based; PSP per-tx fee possible |
| Negotiation power | Concentrated at large-chain level only | Distributed; small merchants accept published rates |

The single-acquirer dynamic is a structural reason that **JFTC merchant-fee disclosure pressure** historically concentrated on card class first — there is more competition to discipline there. Pressure on prepaid-class fee transparency would face the structural obstacle that issuer-as-acquirer cannot be easily decomposed into separate fee components.

## JR East corporate stakes in Suica

[[JapanFG/jr-east|JR East]]'s Suica franchise sits within a multi-segment retail / station / transit-services business that uses Suica as both a payment instrument and as a customer-data platform. The Suica installed base — approximately 100 million cards including mobile-version conversion — gives JR East one of Japan's largest captive prepaid populations and a corresponding data signal across transit, station-retail, and a portion of urban convenience-store and supermarket commerce. The corporate strategy treats Suica as a **strategic platform asset** rather than as a standalone payment-service P&L, which is one reason JR East has been willing to invest in Mobile Suica platform development, Suica Welcome tourist outreach, and JRE POINT integration without requiring direct standalone monetization of the prepaid instrument.

## Suica next-generation platform direction

JR East has communicated longer-horizon platform direction for Suica — moving toward a Suica that supports both the historical FeliCa secure-element offline-tap model and a new server-managed account-balance model. The motivation includes loosening the historical balance ceiling, supporting more complex multi-issuer routing, integrating cleaner with smartphone-native rails, and creating a foundation for cross-modal mobility products beyond rail (taxi, bicycle-share, micro-mobility, etc.). This direction is publicly discussed but the full operational architecture is still being defined; it is one of the more significant Japan prepaid-scheme structural shifts in the medium term.

## Cross-issuer cooperation governance

Cooperation across the 10 IC mutual-use scheme involves multi-issuer governance with no single dominant rule-setter:

| Governance dimension | How it works |
|---|---|
| Mutual-use scheme rules | Industry agreement among the ten issuers; revised by consensus |
| Cyberne settlement system | Operated by railway industry partners; technical changes coordinated cross-issuer |
| Common tap-acceptance standards | FeliCa specification compliance + scheme-rule extensions |
| Retail-merchant interoperability | Issuer-by-issuer; an issuer can accept other-issuer cards at its merchants under reciprocal agreements |
| New-feature deployment (mobile, deposit changes, expiry rules) | Each issuer decides independently; scheme-level new features require multi-issuer consensus |

The consensus-based governance pattern is one reason scheme-wide changes (such as mobile-rail rollout extension to additional cards) tend to roll out in phases rather than scheme-wide simultaneously — Mobile Suica preceded Mobile PASMO by 14 years; ICOCA Apple Pay support came in 2023.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/rakuten-edy]]
- [[JapanFG/aeon-bank]]
- [[JapanFG/seven-bank]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- JR East: Suica official site and Mobile Suica site.
- PASMO Co Ltd: official site.
- JR West: ICOCA official site.
- JR Hokkaido: Kitaca site.
- JR Central: TOICA site.
- Meitetsu / Nagoya City Transportation: manaca site.
- Nishitetsu: nimoca site.
- JR Kyushu: SUGOCA site.
- FSA: prepaid policy portal and third-party prepaid issuer registry.
- METI: cashless payment policy portal.
- BOJ: payment and settlement systems portal.
- FeliCa Networks: technology / corporate page.
