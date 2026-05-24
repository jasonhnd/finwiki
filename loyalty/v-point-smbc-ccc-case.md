---
title: "V Point (SMBC × CCC) — bank-led common-point case"
aliases:
  - "loyalty/v-point-smbc-ccc-case"
  - "v-point-smbc-ccc-case"
  - "V Point"
  - "Vポイント"
  - "T Point → V Point"
  - "SMBC common point"
domain: "loyalty"
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [loyalty, smbc, smfg, ccc, v-point, t-point, olive, bank-led-common-point, japan]
status: active
sources:
  - "https://vpoint.jp/"
  - "https://www.smbc.co.jp/kojin/olive/"
  - "https://www.smbc-card.com/mem/index.jsp"
  - "https://www.ccc.co.jp/news/"
  - "https://www.smfg.co.jp/news/"
  - "https://www.smbc-card.com/mem/service/cardless/vpoint.jsp"
---

# V Point (SMBC × CCC) — bank-led common-point case

## TL;DR

V Point in its current form (2024-04-22 onward) is the **bank-led common-point case** of Japan: SMBC's existing V Point and CCCMK Holdings' T Point unified into a single point under the V Point brand, with [[JapanFG/smfg|SMFG]]'s [[JapanFG/smbc-card|SMBC Card]] (SMCC) as the issuing financial backbone and the [[payments/INDEX|payments]] / [[retail/INDEX|retail]] partner network inherited from T Point. It is the most credible counterweight to telco-led (dポイント), e-commerce-led (Rakuten Points), and payment-app-led (PayPay points) common-point systems.

For accounting framing on what "point liability" actually means inside this kind of unification, see [[loyalty/point-liability-accounting-boundary]]. For the broader competitive map, see [[loyalty/japan-points-landscape]] and [[loyalty/INDEX|loyalty index]].

## Timeline

| Date | Event |
|---|---|
| 2003 | T Point launches as Japan's first nationwide common-point operated by CCC (Culture Convenience Club) — anchor partners: Tsutaya, FamilyMart, ENEOS |
| 2020 | Vポイント launches as SMBC Card's proprietary credit-card reward point (replacement for ワールドプレゼント for many holders) |
| 2022-10 | CCC and SMFG / SMBC announce intent to unify T Point and V Point |
| 2023-03 | CCC reorganises T Point operations into CCCMK Holdings (the joint venture vehicle co-owned with SMFG group) |
| 2023-06 | CCCMK Holdings established (SMFG-side capital participation) |
| 2024-04-22 | T Point and Vポイント unify under the "Vポイント" brand; T Point branding for the common-point business ends |
| 2024- | SMBC Olive Account integrates V Point earn as core loyalty layer for the bank's flagship retail product |
| 2025- | Rolling migration of legacy T-card holders to V-card design; partner-merchant network rolled over to V Point acceptance |

## Players

- **[[JapanFG/smfg|SMFG]] / [[JapanFG/smbc-card|SMBC Card]] (Sumitomo Mitsui Card Company, SMCC)** — bank-side anchor. Issues V Point as the rewards layer of SMBC's credit cards and the Olive Account. Provides the credit and payment rails.
- **CCC / CCCMK Holdings** — historical common-point operator; brings the T Point partner-merchant network (FamilyMart, ENEOS, Tsutaya, drug stores, restaurants, hotels), the user base of around 70 million T-Card holders, and the data-marketing operation.
- **Tカード → Vカード migration** — legacy T-cards continue to earn V Point at participating merchants during a defined migration window; new issuance is V-card branded.
- **Olive Account** — SMBC's "all-in-one" retail product (debit + credit + payment + investment) that uses V Point as its loyalty layer. Launched in 2023, expanded through 2024-2025.

## Mechanics

| Earn surface | How V Point accrues |
|---|---|
| SMBC Card / SMCC credit card spend | Base rate plus bonus categories (convenience stores, fast food); higher rate at "Vポイントアッププログラム" merchants |
| Olive Account | Bank account activity, debit spend, direct-debit setups, salary credit, and other "選べる特典" choices feed point earn |
| Partner merchant scan at POS | Inherited T Point physical-card / app scan flow at FamilyMart, ENEOS, drugstores, restaurants |
| V Point app | Code payment / scan-and-earn / campaign cashback |
| Investment promotions | SBI証券 cooperation (SMBC + SBI alliance) lets V Point be used for some fund purchases — a feature without a direct equivalent in Rakuten Points / dポイント for SMBC-aligned customers |

## Scale and partner-merchant rollover

The strategic point of the 2024 unification was not just additive — it was to take the T Point partner-merchant network (deep in convenience stores, gas stations, drug stores, restaurants) and bind it to a bank-issued common point. Post-unification, V Point inherits:

- A claimed total membership base in the tens of millions (SMBC + CCCMK historical sides combined).
- A physical-merchant acceptance network that was already broader than SMBC's standalone V Point pre-2024.
- Marketing-data infrastructure historically operated by CCC — i.e. the customer ID graph that made T Point commercially valuable beyond reward economics.

The clean version of the network rollover is that any T-Point-accepting merchant becomes a V-Point-accepting merchant on the migration calendar. The friction version is that some long-tail merchants did not maintain participation, and some chains renegotiated participation terms.

## Competitive positioning

| Common-point system | Anchor type | Strongest channel | V Point's relative position |
|---|---|---|---|
| Rakuten Points ([[JapanFG/rakuten-fg|Rakuten FG]]) | E-commerce-led | Online shopping + Rakuten Card + 楽天ペイ + Rakuten Mobile | V Point weaker online, stronger at physical anchor merchants |
| dポイント ([[JapanFG/ndfg|NDFG]] / NTT docomo) | Telco-led | Mobile-line ID, d払い, dカード | V Point not telco-bound; advantage with non-docomo users |
| PayPay Points ([[JapanFG/paypay-fg|PayPay FG]]) | Payment-app-led | Code payment frequency + campaigns | V Point less campaign-driven; more durable per-yen economics |
| Ponta ([[JapanFG/au-fh|au FH]] / Loyalty Marketing) | Telco + retail coalition | Lawson, KDDI / au PAY, Hot Pepper | V Point overlaps in convenience-store earn but with bank-side anchor |
| WAON POINT ([[retail/aeon-group|Aeon Group]] / [[JapanFG/aeon-bank|AEON Bank / AFS]]) | Retail-group-led | AEON malls / supermarkets | Different positioning — store-frequency loyalty vs cross-merchant common point |
| nanaco point ([[retail/seven-and-i-hd|Seven & i]] / [[JapanFG/seven-bank|Seven Bank]]) | Convenience-led | Seven-Eleven / Ito-Yokado | Different positioning — convenience-store loyalty vs cross-merchant common point |

The strategic novelty of V Point is the bank-led shape:

- **Telco-led** (dポイント, Ponta-au): identity comes from the mobile-line account; loyalty extends payment.
- **E-commerce-led** (Rakuten): identity comes from the shopping cart; loyalty drives financial cross-sell.
- **Payment-app-led** (PayPay): identity comes from the wallet app; loyalty is campaign-funded acquisition.
- **Retail-group-led** (WAON, nanaco): identity comes from the store; loyalty deepens store frequency.
- **Bank-led** (V Point / SMBC / Olive): identity comes from the bank account and card; loyalty extends from credit-card economics outward into a partner-merchant network.

The bank-led shape gives V Point the most natural route into investment and savings cross-sell (via SMBC + SBI), and into a "main bank account" workflow (via Olive). The trade-off is weaker online-commerce gravity than Rakuten and weaker code-payment campaign muscle than PayPay.

## Counterpoints

- **Integration friction**: physical-merchant rollover took longer than the marketing timeline suggested; some former T Point chains have not maintained equivalent V Point participation.
- **Regional acceptance ratio**: Rakuten Pay and PayPay accept ratio in long-tail merchants still exceeds the V Point physical scan ratio in many areas.
- **Brand confusion**: customers had to understand "T Point became V Point" while also distinguishing **SMBC's older V Point (credit-card reward)** from **the new unified V Point common point**. The migration window created multi-source documentation that was not always consistent.
- **Data-marketing model carry-over**: CCC's data business was historically a major commercial layer; how cleanly the data-marketing capability transferred into the SMFG-aligned common-point operator (vs being run down) is still observable in CCCMK Holdings disclosures.
- **Olive dependency**: V Point's bank-led identity is strongest when paired with Olive Account adoption; if Olive growth stalls, V Point reverts to "another card-issuer reward" rather than the unique bank-anchored common-point case.

## Why this matters for JapanFG analysis

- V Point is the cleanest live case of a **megabank-led common-point distribution layer** in Japan. Reading [[JapanFG/smfg|SMFG]] without it understates SMBC's retail strategy.
- It is the natural cross-sell rail for SBI証券-side investment products under the SMBC × SBI alliance — relevant to securities-distribution analysis.
- For any merchant-acquiring / PSP analysis, the V Point partner-merchant network is now a third significant common-point footprint alongside Rakuten and dポイント.
- For consumer-bank competitive analysis, the Olive Account + V Point bundle is the most visible "main-bank-as-fintech-app" attempt by a Japanese megabank, contrasting with [[JapanFG/mufg|MUFG]] and [[JapanFG/mizuho-fg|Mizuho FG]] approaches.

## Open questions

- Will V Point reach durable parity with Rakuten Points and dポイント on per-user activity, or will it plateau as a card-and-bank-anchored point with a thinner online tail?
- How will the SMBC + SBI investment-distribution alliance evolve V Point's role in fund and securities promotions (vs Rakuten Points' role inside Rakuten Securities)?
- Will CCCMK Holdings keep the historical data-marketing depth that made T Point commercially significant, or will the data layer be subordinated to SMFG's bank-customer view?
- Is Olive Account adoption tracking the trajectory needed to make V Point a "primary bank account anchor" rather than a card-reward overlay?
- How will the cross-program exchange economy (V Point ↔ ANA mileage and other airline / partner programs) develop relative to the more mature Rakuten / dポイント exchange relationships? Settlement-leg mechanics here connect back to [[loyalty/point-liability-accounting-boundary]].

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape]]
- [[loyalty/point-liability-accounting-boundary]]
- [[JapanFG/smfg|SMFG]]
- [[JapanFG/smbc-card|SMBC Card / SMCC]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/ndfg|NDFG]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[JapanFG/au-fh|au FH]]
- [[JapanFG/aeon-bank|AEON Bank / AFS]]
- [[JapanFG/seven-bank|Seven Bank]]
- [[retail/INDEX|retail]]
- [[payments/INDEX|payments]]
- [[INDEX|FinWiki index]]

## Sources

- Vポイント公式サイト (https://vpoint.jp/).
- SMBC Olive Account official site (https://www.smbc.co.jp/kojin/olive/).
- SMBC Card (SMCC) V Point service pages.
- CCC / CCCMK Holdings press releases on T Point and V Point unification.
- SMFG news releases on T Point alliance and V Point integration.
- Public reporting on the 2024-04-22 T Point + V Point unification.
