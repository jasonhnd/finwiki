---
source: payments/edy-rakuten-prepaid
source_hash: baf73cd415770c05
lang: en
status: machine
fidelity: ok
title: "Rakuten Edy: platform-agnostic FeliCa prepaid e-money"
translated_at: 2026-06-01T03:31:12.259Z
---
# Rakuten Edy: platform-agnostic FeliCa prepaid e-money

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Rakuten Edy prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme comparison. Compare with retail-anchored ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) and transit-anchored ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) prepaid systems — Edy is the **platform-agnostic FeliCa prepaid** without a retail-or-rail parent anchor, which is its principal structural distinction. Corporate / group anchor is [[payment-firms/rakuten-edy|楽天Edy株式会社]] (FSA-registered third-party prepaid issuer, 法人番号 3010901038102, registered 2016-07-21 under Rakuten group); related Rakuten payment products include [[card-issuers/rakuten-card|Rakuten Card]] (credit-card co-brand with Edy auto-charge) and 楽天ペイ (code-payment app). FeliCa technology backbone: [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|FeliCa scheme architecture]].

## TL;DR

**Rakuten Edy (楽天Edy)** is the **principal platform-agnostic FeliCa prepaid e-money** in Japan, distinct from retail-anchored ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) and transit-anchored ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) prepaid systems. Originally launched 2001 by **bitWallet (ビットワレット株式会社)** — a NTT Docomo + Sony + bank consortium spin-off — Edy was the **first major FeliCa e-money product** in Japan, predating WAON / nanaco by six years and Suica / PASMO retail acceptance by years. **Acquired by Rakuten in 2009-11** (full subsidiary 2010) and rebranded to Rakuten Edy 2012-06, the franchise is now operated by **楽天Edy株式会社 (Rakuten Edy Co Ltd)** as a 第三者型 prepaid issuer registered with FSA (corporate number 3010901038102, registered 2016-07-21). Edy's distinguishing feature is **no single-merchant anchor** — acceptance spans convenience stores (Lawson, FamilyMart, MiniStop, Daily Yamazaki — and Seicomart), drugstores, restaurants, vending machines, and other merchants on a platform-neutral basis, with Rakuten Card auto-charge and 楽天ポイント (Rakuten Points) integration as the principal customer-acquisition rails.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Operating company | Rakuten Edy Co Ltd |
| Group parent | [[card-issuers/rakuten-card\|Rakuten Card]] / Rakuten Group |
| FSA prepaid registration | Third party prepaid payment instrument |
| Corporate number | 3010901038102 |
| FSA registration date | 2016-07-21 |
| Original operator | bitWallet (BitWallet Co., Ltd.) — NTT Docomo + Sony + bank consortium |
| Rakuten acquisition | 2009-11 (acquisition announced), 2010 (full subsidiary), 2012-06 (rebrand to Rakuten Edy) |
| Launch year | 2001 (bitWallet original launch) |
| Technology | FeliCa contactless IC |
| Mobile rail | Osaifu Keitai Edy (Android FeliCa devices); Apple Pay support is limited compared to Suica / PASMO |
| Charge ceiling | ¥50,000 per card |
| Distribution | Card, mobile, Edy-embedded credit card (Rakuten Card and other co-brand cards) |

## Legal basis: Third party prepaid

Rakuten Edy is registered as **Third Party Prepaid Payment Instrument** under [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 because acceptance is at third-party merchants beyond Rakuten's own services. Key regulatory consequences:

- Rakuten Edy, Inc. appears in [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] as registered third-party prepaid issuer.
- Half-yearly **unused-balance deposit** (deposit) obligated with Legal Affairs Bureau.
- **No refunding to original payer except at issuance discontinuation** — Edy balance non-refundable to cash.
- **Breakage** — long unredeemed-balance pattern (Edy cards forgotten, balance not consumed); contributes to issuer P&L.
- AML/KYC carve-outs under PSA prepaid thresholds.

## Pioneer / legacy position vs entrant successors

Edy's structural position is **pioneer / legacy** of Japan FeliCa e-money:

| Year | Event |
|---|---|
| 2001 | bitWallet launches Edy — first major Japan FeliCa e-money |
| 2001-11 | JR East launches Suica |
| 2007 | AEON launches WAON, Seven & i launches nanaco |
| 2009-11 | Rakuten acquires bitWallet |
| 2010 | bitWallet full Rakuten subsidiary |
| 2012-06 | Rebrand to Rakuten Edy |
| 2013 | 10 IC mutual-use scheme launch (transit-prepaid) |
| 2016-07 | Edy current FSA registration as 楽天Edy株式会社 |

By the time WAON and nanaco launched 2007, Edy was the established FeliCa e-money brand — but the **retail-anchored network effect** of WAON (AEON malls / supermarkets / drugstores / MiniStop) and nanaco (7-Eleven / Ito-Yokado / Sogo & Seibu) gradually displaced Edy from many specific-merchant exclusive partnerships. Edy's response was to position as the **platform-agnostic alternative** — acceptable across many merchants without single-retailer lock-in.

## Acceptance footprint

| Tier | Acceptance |
|---|---|
| Convenience stores | Lawson, FamilyMart, MiniStop, Daily Yamazaki, Seicomart — and historically 7-Eleven (but 7-Eleven now generally favors nanaco) |
| Drugstores | Selected chains |
| Restaurants / fast food | Selected chains (McDonald's previously accepted Edy in some periods) |
| Vending machines | Coca-Cola, others — vending-machine FeliCa acceptance |
| Gas stations | Selected stations |
| Retail | Various platform-neutral merchants |
| Mobile rail | Osaifu Keitai Android FeliCa devices |

## Rakuten Card + Edy + Rakuten Points integration

Edy's principal customer-acquisition leverage post-Rakuten-acquisition is the **Rakuten Card + Edy + Rakuten Points** triangle:

| Component | Role |
|---|---|
| [[card-issuers/rakuten-card\|Rakuten Card]] | Credit card co-brand with Edy IC embedded; auto-charge to Edy from Rakuten Card |
| Edy | FeliCa prepaid spending rail |
| Rakuten Points (楽天ポイント) | Loyalty currency earned on Edy spending (typically 0.5% base, higher on promotional periods) |

This three-way integration is structurally similar to the [[payments/waon-prepaid-aeon|AEON Card + WAON + WAON POINT]] and [[payments/nanaco-prepaid-seven-i|セブンカード・プラス + nanaco + nanacoポイント]] triangles, but without a single retail-anchor parent. The trade-off is **wider platform-agnostic acceptance** with **weaker retail-anchor network effect**.

## KPI snapshot

| Metric | Reading |
|---|---|
| Cumulative Edy issuance | Material multi-tens-of-millions cumulative since 2001 |
| Annual transaction count | Mid-tier among Japan prepaid e-money; below WAON / nanaco / Suica / PASMO leading peers |
| Acceptance merchant points | Substantial nationwide (Rakuten Edy site discloses) |
| Outstanding prepaid balance | Multi-billion-yen scale (Rakuten group disclosure) |
| Rakuten Points integration | 0.5% base earning on Edy spend (promotional periods higher) |

Exact figures are in Rakuten group IR materials and Rakuten Edy site disclosure.

## Strategy: platform-agnostic FeliCa with Rakuten integration

Rakuten Edy's strategic role:

1. **Platform-agnostic acceptance** — no single retail / rail parent constraint allows broad cross-merchant acceptance.
2. **Rakuten ecosystem integration** — Rakuten Card auto-charge, Rakuten Points loyalty integration, Rakuten ecosystem cross-promotion.
3. **Legacy installed base** — pre-WAON / nanaco card-base provides residual customer footprint.
4. **Code-payment supplement, not substitute** — 楽天ペイ code payment serves a different use case; Edy remains the FeliCa tap rail for Rakuten ecosystem.
5. **Diminished but durable** — Edy's market share has eroded relative to WAON / nanaco / Suica peers, but the FeliCa tap rail and Rakuten ecosystem integration sustain meaningful transaction volume.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/suica-prepaid-jr-east]]
- [[payments/pasmo-prepaid-tokyo-metro]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payment-firms/rakuten-edy]]
- [[card-issuers/rakuten-card]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Edy official site (edy.rakuten.co.jp).
- Rakuten Group corporate site (corp.rakuten.co.jp).
- Rakuten Card corporate site (rakuten-card.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (楽天Edy株式会社, corporate number 3010901038102, registered 2016-07-21).
- FSA prepaid payment instruments policy page.
- FeliCa Networks corporate site (felicanetworks.co.jp).
- METI cashless policy page.
