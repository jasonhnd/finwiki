---
source: loyalty/v-point-smbc-ccc-case
source_hash: 76125fbe074acae1
lang: en
status: machine
fidelity: ok
title: "V Point (SMBC × CCC) — bank-led common-point case"
translated_at: 2026-05-30T14:48:27.672Z
---

# V Point (SMBC × CCC) — bank-led common-point case

## TL;DR

V Point in its current form (2024-04-22 onward) is the **bank-led common-point case** of Japan: SMBC's existing V Point and CCCMK Holdings' T Point unified into a single point under the V Point brand, with [[megabanks/smfg|SMFG]]'s [[card-issuers/smbc-card|SMBC Card]] (SMCC) as the issuing financial backbone and the [[payments/INDEX|payments]] / [[retail/INDEX|retail]] partner network inherited from T Point. It is the most credible counterweight to telco-led d Point, e-commerce-led Rakuten Points, and payment-app-led PayPay Points.

For accounting framing on what "point liability" actually means inside this kind of unification, see [[loyalty/point-liability-accounting-boundary]]. For the broader competitive map, see [[loyalty/japan-points-landscape]] and [[loyalty/INDEX|loyalty index]].

## Timeline

| Date | Event |
|---|---|
| 2003 | T Point launches as Japan's first nationwide common-point operated by CCC (Culture Convenience Club) — anchor partners: Tsutaya, FamilyMart, ENEOS |
| 2020 | V Point launches as SMBC Card's proprietary credit-card reward point, replacing World Present for many cardholders. |
| 2022-10 | CCC and SMFG / SMBC announce intent to unify T Point and V Point |
| 2023-03 | CCC reorganises T Point operations into CCCMK Holdings (the joint venture vehicle co-owned with SMFG group) |
| 2023-06 | CCCMK Holdings established (SMFG-side capital participation) |
| 2024-04-22 | T Point and V Point unify under the V Point brand; T Point branding for the common-point business ends. |
| 2024- | SMBC Olive Account integrates V Point earn as core loyalty layer for the bank's flagship retail product |
| 2025- | Rolling migration of legacy T-card holders to V-card design; partner-merchant network rolled over to V Point acceptance |

## Players

- **[[megabanks/smfg|SMFG]] / [[card-issuers/smbc-card|SMBC Card]] (Sumitomo Mitsui Card Company, SMCC)** — bank-side anchor. Issues V Point as the rewards layer of SMBC's credit cards and the Olive Account. Provides the credit and payment rails.
- **CCC / CCCMK Holdings** — historical common-point operator; brings the T Point partner-merchant network (FamilyMart, ENEOS, Tsutaya, drug stores, restaurants, hotels), the user base of around 70 million T-Card holders, and the data-marketing operation.
- **T Card to V Card migration** -- legacy T Cards continue to earn V Point at participating merchants during a defined migration window; new issuance is V Card branded.
- **Olive Account** — SMBC's "all-in-one" retail product (debit + credit + payment + investment) that uses V Point as its loyalty layer. Launched in 2023, expanded through 2024-2025.

## Mechanics

| Earn surface | How V Point accrues |
|---|---|
| SMBC Card / SMCC credit card spend | Base rate plus bonus categories; higher rate at V Point Up Program merchants |
| Olive Account | Bank account activity, debit spend, direct-debit setups, salary credit, and selectable benefits feed point earn |
| Partner merchant scan at POS | Inherited T Point physical-card / app scan flow at FamilyMart, ENEOS, drugstores, restaurants |
| V Point app | Code payment / scan-and-earn / campaign cashback |
| Investment promotions | SBI Securities cooperation (SMBC + SBI alliance) lets V Point be used for some fund purchases, a feature without a direct equivalent in Rakuten Points / d Point for SMBC-aligned customers |

## Scale and partner-merchant rollover

The strategic point of the 2024 unification was not just additive — it was to take the T Point partner-merchant network (deep in convenience stores, gas stations, drug stores, restaurants) and bind it to a bank-issued common point. Post-unification, V Point inherits:

- A claimed total membership base in the tens of millions (SMBC + CCCMK historical sides combined).
- A physical-merchant acceptance network that was already broader than SMBC's standalone V Point pre-2024.
- Marketing-data infrastructure historically operated by CCC — i.e. the customer ID graph that made T Point commercially valuable beyond reward economics.

The clean version of the network rollover is that any T-Point-accepting merchant becomes a V-Point-accepting merchant on the migration calendar. The friction version is that some long-tail merchants did not maintain participation, and some chains renegotiated participation terms.

## Competitive positioning

| Common-point system | Anchor type | Strongest channel | V Point's relative position |
|---|---|---|---|
| Rakuten Points ([[payment-firms/rakuten-fg|Rakuten FG]]) | E-commerce-led | Online shopping + Rakuten Card + Rakuten Pay + Rakuten Mobile | V Point weaker online, stronger at physical anchor merchants |
| d Point ([[megabanks/ndfg|NDFG]] / NTT docomo) | Telco-led | Mobile-line ID, d Payment, d Card | V Point not telco-bound; advantage with non-docomo users |
| PayPay Points ([[megabanks/paypay-fg|PayPay FG]]) | Payment-app-led | Code payment frequency + campaigns | V Point less campaign-driven; more durable per-yen economics |
| Ponta ([[megabanks/au-fh|au FH]] / Loyalty Marketing) | Telco + retail coalition | Lawson, KDDI / au PAY, Hot Pepper | V Point overlaps in convenience-store earn but with bank-side anchor |
| WAON POINT ([[retail/aeon-group|Aeon Group]] / [[card-issuers/aeon-bank|AEON Bank / AFS]]) | Retail-group-led | AEON malls / supermarkets | Different positioning — store-frequency loyalty vs cross-merchant common point |
| nanaco point ([[retail/seven-and-i-hd|Seven & i]] / [[regional-banks/seven-bank|Seven Bank]]) | Convenience-led | Seven-Eleven / Ito-Yokado | Different positioning — convenience-store loyalty vs cross-merchant common point |

The strategic novelty of V Point is the bank-led shape:

- **Telco-led** (d Point, Ponta-au): identity comes from the mobile-line account; loyalty extends payment.
- **E-commerce-led** (Rakuten): identity comes from the shopping cart; loyalty drives financial cross-sell.
- **Payment-app-led** (PayPay): identity comes from the wallet app; loyalty is campaign-funded acquisition.
- **Retail-group-led** (WAON, nanaco): identity comes from the store; loyalty deepens store frequency.
- **Bank-led** (V Point / SMBC / Olive): identity comes from the bank account and card; loyalty extends from credit-card economics outward into a partner-merchant network.

The bank-led shape gives V Point the most natural route into investment and savings cross-sell (via SMBC + SBI), and into a "main bank account" workflow (via Olive). The trade-off is weaker online-commerce gravity than Rakuten and weaker code-payment campaign muscle than PayPay.

## Why this matters for JapanFG analysis

- V Point is the cleanest live case of a **megabank-led common-point distribution layer** in Japan. Reading [[megabanks/smfg|SMFG]] without it understates SMBC's retail strategy.
- It is the natural cross-sell rail for SBI証券-side investment products under the SMBC × SBI alliance — relevant to securities-distribution analysis.
- For any merchant-acquiring / PSP analysis, the V Point partner-merchant network is now a third significant common-point footprint alongside Rakuten and d Point.
- For consumer-bank competitive analysis, the Olive Account + V Point bundle is the most visible "main-bank-as-fintech-app" attempt by a Japanese megabank, contrasting with [[megabanks/mufg|MUFG]] and [[megabanks/mizuho-fg|Mizuho FG]] approaches.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape]]
- [[loyalty/point-liability-accounting-boundary]]
- [[megabanks/smfg|SMFG]]
- [[card-issuers/smbc-card|SMBC Card / SMCC]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[megabanks/au-fh|au FH]]
- [[card-issuers/aeon-bank|AEON Bank / AFS]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[retail/INDEX|retail]]
- [[payments/INDEX|payments]]
- [[INDEX|FinWiki index]]

## Sources

- V Point official site (https://vpoint.jp/).
- SMBC Olive Account official site (https://www.smbc.co.jp/kojin/olive/).
- SMBC Card (SMCC) V Point service pages.
- CCC / CCCMK Holdings press releases on T Point and V Point unification.
- SMFG news releases on T Point alliance and V Point integration.
- Public reporting on the 2024-04-22 T Point + V Point unification.
