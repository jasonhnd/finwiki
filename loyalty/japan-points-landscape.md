---
title: "Japan points and loyalty landscape"
aliases:
  - "loyalty/japan-points-landscape"
  - "japan-points-landscape"
  - "日本ポイント経済"
  - "Japan loyalty points"
domain: "loyalty"
created: 2026-05-19
last_updated: 2026-05-20
last_tended: 2026-05-20
review_by: 2026-11-15
confidence: likely
tags: [loyalty, points, payments, retail-finance, data-marketing]
status: active
sources:
  - "https://point.rakuten.co.jp/guidance/en/faq/pointinfo/"
  - "https://www.ccc.co.jp/en/news/press/20240109_002347.html"
  - "https://dpoint.docomo.ne.jp/"
  - "https://www.waon.net/point/"
  - "https://www.nanaco-net.jp/introduction/"
---

# Japan points and loyalty landscape

## TL;DR

Japan's point economy is a **payment distribution system**, not just a discount habit. Rakuten Point, V Point, d Point, PayPay Point, WAON POINT, nanaco point, and card points decide which wallet, card, bank, mobile carrier, and retail app gets opened first.

The key split is:

1. **Open common points** that travel across many merchants and apps.
2. **Retail-group points** that deepen a store ecosystem.
3. **Payment-app points** that subsidize code payment frequency.
4. **Credit-card points** that defend card economics.
5. **Prepaid / electronic-money points** that sit near Payment Services Act boundaries.
6. **Data-marketing points** that make the customer ID graph commercially valuable.

## Main Programs

| Program | Sponsor / ecosystem | Core role | Finance adjacency |
|---|---|---|---|
| Rakuten Point | Rakuten Group | EC + card + bank + securities + mobile flywheel | [[payment-firms/rakuten-fg|Rakuten FG]], Rakuten Card, Rakuten Bank, Rakuten Securities |
| V Point | CCCMK / SMBC Card alliance after T Point + V Point integration | Common points + SMBC credit-card and Olive adjacency · see [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] for the 2024-04-22 unification detail and [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] for breakage / IFRS 15 treatment | [[megabanks/smfg|SMFG]], SMBC Card, retail partners |
| d Point | NTT docomo | Telco ID + d払い + d Card + planned [[megabanks/ndfg|NDFG]] financial consolidation | NTT docomo finance, d Card, d払い, bank / securities / insurance route |
| PayPay Point | PayPay / SoftBank / LY | Code-payment frequency and campaign economics | [[megabanks/paypay-fg|PayPay FG]], PayPay Card, PayPay Bank, PayPay Securities |
| WAON POINT | AEON | Mall / supermarket / AEON Card / WAON retention | [[retail/aeon-group|Aeon Group]], [[card-issuers/aeon-bank|Aeon Bank / AFS]] |
| nanaco point | Seven & i | Convenience / supermarket / nanaco / Seven Card retention | [[retail/seven-and-i-hd|Seven & i]], [[regional-banks/seven-bank|Seven Bank]] |
| Credit card points | JCB, SMBC, MUFG, Saison, AEON, Rakuten, PayPay Card | Issuer loyalty and interchange-defense layer | [[card-issuers/jcb|JCB]], [[card-issuers/credit-saison|Credit Saison]] |

## Legal / Accounting Boundary

Do not assume all "points" are legally identical.

| Point type | Customer view | Legal / economic question |
|---|---|---|
| Reward points granted after purchase | "I earned points" | Usually a loyalty liability and marketing cost; check terms, expiry, transferability, and breakage assumptions. |
| Points purchased or charged with cash | "I loaded value" | Can approach prepaid payment instrument or funds-transfer analysis depending on redeemability and transferability. |
| Electronic money balance | "I charged WAON / nanaco / transit IC" | Payment Services Act prepaid layer is more central than ordinary loyalty accounting. |
| Code-payment campaign point | "I got cashback" | Often promotion cost plus wallet lock-in; legal treatment depends on whether it is cash-equivalent or limited-use reward. |
| Card reward point | "Card spend earns points" | Issuer economics, reward liability, interchange / installment economics, and merchant campaign funding are intertwined. |
| Cross-program exchange | "I converted points" | FX-like rate setting, liability transfer, partner settlement, and anti-abuse controls become important. |

## Strategic Pattern

Points work because they compress four systems into one user behavior:

1. **Payment choice**: points decide whether the user taps PayPay, Rakuten Pay, d払い, AEON Pay, nanaco, or a credit card.
2. **Merchant acquisition**: merchants join a point network to access traffic, coupons, and campaigns.
3. **Financial distribution**: points create a reason to hold the group card, bank account, securities account, or app.
4. **Data graph**: purchase, location, payment, and campaign response data become sellable marketing infrastructure.

### Rakuten

Rakuten Point is the clearest full-ecosystem loop: shopping earns points, card spend earns points, points can subsidize future shopping or mobile bills, and financial products reinforce the same account graph. This is why [[payment-firms/rakuten-fg|Rakuten FG]] should be read as a distribution system, not just a finance segment.

### V Point / SMBC

The 2024 integration of T Point and SMBC V Point created a stronger common-point layer connected to SMBC Card and Olive. For JapanFG work, V Point is the most important "bank-led common point" counterweight to Rakuten and PayPay.

### d Point / NDFG

d Point is central to the [[megabanks/ndfg|NDFG]] thesis because telco identity can route users into payment, card, bank, securities, insurance, and subscription bundles. The open question is whether NTT can convert points into a financial super-app without losing clarity.

### WAON / nanaco

WAON and nanaco are retail-operating systems first. They bind daily grocery / convenience behavior to payment and finance, but their strongest use cases are group-store frequency and store-specific economics rather than universal app dominance.

## JapanFG Relevance

| JapanFG question | Point-layer answer |
|---|---|
| Which financial groups can lower acquisition cost? | The groups that already own a high-frequency point account. |
| Which retail banks have a daily-use wedge? | [[card-issuers/aeon-bank|Aeon Bank]] and [[regional-banks/seven-bank|Seven Bank]] through WAON / nanaco and store traffic. |
| Which telco finance group has the best cross-sell base? | [[megabanks/ndfg|NDFG]] if d Point + d払い + d Card are integrated cleanly. |
| Which PSPs benefit indirectly? | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] and other PSPs because merchants need multi-payment acceptance and campaign routing. |
| Which legal page should be checked? | [[financial-licenses/INDEX|legal / financial licenses]] when a point becomes cash-like or transferable. |

## Related

- [[loyalty/INDEX|loyalty INDEX]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[retail/aeon-group|Aeon Group]]
- [[retail/seven-and-i-hd|Seven & i]]
- [[megabanks/ndfg|NDFG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[card-issuers/aeon-bank|Aeon Bank / AFS]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Point Club official guidance.
- CCC / SMBC Card press release on V Point integration, 2024-01-09.
- d Point Club official site.
- WAON official point guidance.
- nanaco official introduction and point guidance.
