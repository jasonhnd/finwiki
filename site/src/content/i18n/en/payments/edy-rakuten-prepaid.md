---
source: payments/edy-rakuten-prepaid
source_hash: 08c22a10624c85e9
lang: en
status: machine
fidelity: ok
title: "Rakuten Edy: platform-agnostic FeliCa prepaid e-money"
translated_at: 2026-07-28T20:15:36Z
---
# Rakuten Edy: platform-agnostic FeliCa prepaid e-money

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the Rakuten Edy prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme comparison. The current operator, [[payment-firms/rakuten-edy|Rakuten Edy Co., Ltd.]], was established on 2016-05-09 and took over the Edy business in October 2016; it is a wholly owned subsidiary of Rakuten Payment and is registered as a third-party prepaid issuer under corporate number 3010901038102 (Kanto Local Finance Bureau No. 00692, registered 2016-07-21). The Edy brand itself traces back to the predecessor bitWallet service launched in 2001. ^[Rakuten Edy company profile: https://edy.rakuten.co.jp/company/company.html; company history: https://edy.rakuten.co.jp/company/history.html; FSA third-party prepaid issuer registry: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf]

## TL;DR

**Rakuten Edy (楽天Edy)** is a FeliCa-based third-party prepaid payment instrument. The predecessor bitWallet began full Edy service in November 2001, joined the Rakuten group in January 2010, and changed its name to Rakuten Edy in June 2012. The present legal entity was established in May 2016, succeeded to the business in October 2016, and became a wholly owned subsidiary of Rakuten Payment in April 2019. Current official guidance supports Edy on compatible Android Osaifu-Keitai / Google Wallet devices, but states that iPhone is not supported; the balance ceiling is ¥50,000 and cash refunds are generally unavailable. ^[Rakuten Edy history: https://edy.rakuten.co.jp/company/history.html; service information: https://edy.rakuten.co.jp/terms/info.html; Google Wallet guide: https://edy.rakuten.co.jp/howto/google/pay/; supported-device FAQ: https://support.rakuten-edy.co.jp/faq/show/1179]

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Operating company | Rakuten Edy Co Ltd |
| Group parent | Rakuten Payment (100%) / Rakuten Group |
| FSA prepaid registration | Third party prepaid payment instrument |
| Corporate number | 3010901038102 |
| FSA registration date | 2016-07-21 |
| Current-company establishment | 2016-05-09; Edy operation succeeded in 2016-10 |
| Brand lineage | bitWallet joined the Rakuten group in 2010-01; renamed Rakuten Edy in 2012-06 |
| Launch year | 2001-11 (predecessor's full Edy service) |
| Technology | FeliCa contactless IC |
| Mobile rail | Compatible Android Osaifu-Keitai / Google Wallet devices; iPhone is not supported |
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
| 2010-01 | bitWallet joins the Rakuten group |
| 2012-06 | Rebrand to Rakuten Edy |
| 2013 | 10 IC mutual-use scheme launch (transit-prepaid) |
| 2016-05 | Current Rakuten Edy company established |
| 2016-07 | Current FSA registration as Rakuten Edy Co., Ltd. |
| 2016-10 | Current company succeeds to the Edy business |
| 2019-04 | Current company becomes a wholly owned Rakuten Payment subsidiary |

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
