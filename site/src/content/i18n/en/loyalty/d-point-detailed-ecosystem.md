---
source: loyalty/d-point-detailed-ecosystem
source_hash: 62de2e132095b21c
lang: en
status: machine
fidelity: ok
title: "d Point detailed ecosystem (NTT docomo) — accrual mechanics, d Card / d払い convergence, current rank rules"
translated_at: 2026-07-29T07:52:14.000Z
---

# d Point detailed ecosystem (NTT docomo) — accrual mechanics, d Card / d払い convergence, current rank rules

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **operator-deep page** for dポイント, pairing with [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]] for the comparative telco-anchor view, [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] for the bank-anchored contrast, [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] for the ecosystem map, [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] for the IFRS-15 treatment, [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]] for the wallet-layer overlay, [[megabanks/ndfg|NDFG]] for the parent financial-holding structure, and [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 tie-up]] for the contested-retail-anchor counterpart.

## TL;DR

**dポイント** is an open common-point programme operated under the **dポイントクラブ** umbrella. It connects dアカウント, d払い, dカード, and participating merchants. The current official rules provide **five ranks**, determined monthly from eligible dポイント earned during the previous three months. This page treats accounting as a framework question: whether a point creates a contract liability, provision, or expense depends on the customer promise, funder, redemption obligation, and the reporting entity's exact filing note.

## d-account, dポイントクラブ, and member scale

The **d-account** is NTT docomo's universal customer ID. It originated as the docomo ID for mobile-line subscribers but was opened to non-docomo users (general consumers without a docomo mobile contract) starting around 2015 when dポイント was rebranded from the legacy "docomo Premier Club" programme. The current structure:

| Identity / service layer | Public role |
|---|---|
| **dアカウント** | Login / identity used across eligible docomo and d services |
| **dポイントクラブ** | Loyalty programme and five-rank benefit wrapper |
| **dカード** | Credit-card surface connected to dポイント under card terms |
| **d払い** | Code-payment surface connected to dアカウント and dポイント under payment terms |

Sources: the current [d Point Club guide](https://dpoint.docomo.ne.jp/guide/index.html), [d Card](https://dcard.docomo.ne.jp/), and [d払い](https://service.smt.docomo.ne.jp/keitai_payment/). No undated membership count is inferred.

The membership funnel widens at the d-account layer and narrows toward d Card GOLD, with each tier offering progressively higher financial-product attachment.

## Current dポイントクラブ rank rules

The current official guide and member terms describe **five ranks**. Rank is determined each month using eligible dポイント earned during the previous three months:

| Rule element | Current published treatment |
|---|---|
| Number of ranks | Five (1-star through 5-star) |
| Measurement period | The previous three months |
| Measurement | Eligible dポイント earned; excluded categories are defined in the member terms |
| Determination timing | Monthly, under the schedule in the member terms |
| Benefits | Point multiplier and other benefits vary by rank and may change under current notices |

Sources: the official [rank guide](https://dpoint.docomo.ne.jp/guide/about_rank/index.html) and [d Point Club member terms](https://dpoint.docomo.ne.jp/dpc/d_account/kiyaku.html). The page intentionally does not preserve a superseded “2025 four-tier” description.

Rank-based d払い benefits can raise the return on eligible payments, but **d払い frequency is not the published rank-determination metric**. The rank itself is based on eligible points earned during the measurement period.

The standard-point expiry rule changed on 2025-12-01 to a rolling 12 months from the last eligible earn/use activity. Campaign points may have a different expiry and use perimeter.

## Accrual rate at docomo services vs partner merchants

The **standard accrual rate** of 1% applies broadly, but the effective rate varies significantly by surface:

| Earn surface | Standard accrual | With d Card | With d Card GOLD | Notes |
|---|---|---|---|---|
| docomo mobile bill | 1% (paid by d Card) | 1% base + 10% bonus on docomo bill | 1% base + 10% bonus on docomo bill | The d Card GOLD bonus on docomo bills is the structural reason holders justify the ¥11,000/yr annual fee |
| Hikari net bill | 1% | Variable | Variable | Bundled with mobile-line discount |
| d払い code payment | 0.5% (default) | 1% | 1.5% | Reform-period campaigns push higher headline rates |
| d Card credit-card spend | 1% | 1% | 1% (+ category bonuses) | Standard credit-card reward |
| Flagship partner merchant (Lawson, McDonald's, Matsumoto Kiyoshi, ENEOS) | 1% on scan + variable bonus | Stacks with d Card spend if used | Stacks | Partner-funded bonus campaigns common |
| Coalition partner (ベイシア, ヤマダデンキ, etc.) | 1% on scan | Stacks | Stacks | Lower-frequency partner network |
| Non-partner merchant via d払い | 0.5-1.5% | Stacks | Stacks | Acceptance-only — no scan-and-earn |

The economic implication is that a docomo subscriber holding d Card GOLD and using d払い at flagship partners can achieve **effective accrual rates of 3-5%+** on combined-spend categories, which is materially above the 1% baseline that PayPay and Rakuten Pay offer by default. This explains why d Card GOLD retention is high among heavy-spending docomo subscribers.

## d Card GOLD — the gold-status hurdle and economics

**d Card GOLD** is NTT docomo's premium credit-card tier with a ¥11,000 (税込) annual fee. The structural justification for the fee:

| Benefit | Approximate economic value |
|---|---|
| 10% bonus point on docomo mobile + ひかり bills | Material for households with ¥8,000+/mo docomo + ひかり spend (¥80/mo bonus = ¥960/yr; for ¥15,000/mo combined, ~¥1,800/yr bonus) |
| Free travel insurance (overseas / domestic) | Variable; comparable to mid-tier gold cards |
| Airport lounge access (国内主要空港) | Variable; comparable to mid-tier gold cards |
| ケータイ補償 (¥100,000-level coverage) | Material if mobile device damage occurs |
| dポイント bonus campaigns | Stackable with category accrual |

The economic break-even hurdle is roughly **¥8,000-10,000/mo of combined docomo + ひかり spend** for an average household, below which the annual fee outweighs the bill-bonus value. NTT docomo's d Card GOLD member base reflects this segmentation — concentrated in high-ARPU households with multiple lines and bundled services.

## d払い convergence — wallet, card, and bill payment

**d払い** (d-barai) is NTT docomo's QR-payment wallet, launched in 2018. The convergence pattern with dポイント:

| Function | d払い |
|---|---|
| Funding source | d Card direct charge, bank-account direct charge, convenience-store charge, dポイント直接使用 |
| Identity | d-account (same as dポイント) |
| Settlement | Direct billing via docomo carrier or registered payment method |
| Loyalty layer | dポイント accrued automatically at 0.5-1.5% (per rank and campaign) |
| Merchant acceptance | Compatible with JPQR; deployed across mainline retail, restaurants, vending |

Sources: [NTT docomo's d払い information](https://service.smt.docomo.ne.jp/keitai_payment/), the FSA's [registry index](https://www.fsa.go.jp/menkyo/menkyo.html), and the [Payment Services Act](https://elaws.e-gov.go.jp/document?lawid=421AC0000000059). Registration status must be checked by legal entity and service, not inferred from the product name.

The strategic role of d払い is to provide a **wallet surface that ties point accrual to high-frequency low-ticket spend**. Rank can affect a published d払い benefit, but the rank-determination metric itself is eligible points earned during the previous three months.

The applicable registration depends on the specific function, legal entity, and flow of funds. Check the current FSA lists for third-party prepaid issuers and funds-transfer businesses; do not assume that every d払い function falls under a single “dual registration.”

## Accounting recognition timing — IFRS 15 contract liability

The following is an **IFRS 15 / ASBJ Statement No.29 review framework**, not an entity-specific conclusion about NTT docomo's reported balance:

| Event | Accounting treatment |
|---|---|
| Customer purchase that earns points | If the points provide a material right promised in that customer contract, allocate transaction price using relative standalone selling prices and recognise the corresponding contract liability |
| Customer redeems points | If a contract liability was recognised, recognise the allocated revenue as the related performance obligation is satisfied |
| Points expire / expected breakage | Apply the standard's breakage guidance only to the recognised obligation and only when the estimation criteria are met |
| Campaign-grant points | Classification depends on the funder, enforceable promise, principal-agent role, redemption obligation, and whether the grant is connected to a customer contract; it is not universally an expense at grant |

Sources: [IFRS 15](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/) and [ASBJ Statement No.29](https://www.asb.or.jp/jp/wp-content/uploads/asbj_29.pdf). An entity-specific statement requires the exact financial-statement note; it is not inferred here from programme mechanics.

For the broader treatment, see [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]].

## Coalition partner network — Lawson contention and others

The dポイント partner-merchant network is built on bilateral agreements with major retailers. The most contested partner is **Lawson**, which historically offered both Pontaポイント (KDDI / Loyalty Marketing) and dポイント accrual — see [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]] for the strategic reshuffle after KDDI's 2024 take-private with Mitsubishi. Other flagship partners:

| Partner | Category | dポイント role |
|---|---|---|
| Lawson | Convenience store | Scan-and-earn; contested with Pontaポイント post-2024 KDDI ownership |
| McDonald's | QSR | Scan-and-earn; campaign-heavy |
| Matsumoto Kiyoshi | Drugstore | Scan-and-earn; campaign category for d払い bonus |
| ENEOS | Fuel | Scan-and-earn at SS |
| Tower Records, タワレコ | Specialty retail | Scan-and-earn |
| ベイシア, ヤマダデンキ, ジョーシン | GMS / consumer electronics | Variable participation |
| マクドナルド・スターバックス | QSR | Variable; rotating campaigns |

Consumer programme pages show where points can be earned or used, but generally do not disclose which party funds a specific campaign, the commercial settlement rate or cycle, credit support, or operator margin. Those facts require the relevant partner contract or an exact filing note.

## Competitive positioning

| Common-point | Anchor | Active member ID | Strongest channel | d Point's relative position |
|---|---|---|---|---|
| dポイント | NTT docomo telco | Not compared here without a dated filing | docomo services, d Card, d払い, participating merchants | Reference |
| Pontaポイント (KDDI linkage) | Loyalty Marketing coalition; KDDI is a 20% shareholder | Not compared without a dated disclosure | Lawson, Recruit ecosystem, JAL and other public partners | Coalition-operated peer linked to au services |
| V Point | SMBC + CCCMK | Not compared here without a dated filing | SMBC Olive, SMBC Card, T-card legacy network | Bank-anchored |
| Rakuten Points | Rakuten EC + card + bank + mobile | Not compared here without a dated filing | Rakuten EC, Rakuten Card, Rakuten Mobile | E-commerce-anchored |
| PayPay Points | SoftBank / LY / PayPay app | Not compared here without a dated filing | PayPay QR app, campaigns, PayPay Card | Wallet-anchored |
| WAON POINT | AEON Group | Not compared here without a dated filing | AEON stores, WAON, AEON Card | Retail-group-internal |
| nanaco point | Seven & i | Not compared here without a dated filing | 7-Eleven, Ito-Yokado, nanaco | Retail-group-internal |

Sources: the [d Point guide](https://dpoint.docomo.ne.jp/guide/index.html), Loyalty Marketing's [company profile](https://www.loyalty.co.jp/company/outline), [V Point](https://vpoint.jp/), [Rakuten Point](https://point.rakuten.co.jp/guidance/en/faq/pointinfo/), [PayPay](https://about.paypay.ne.jp/en/about/), [WAON](https://www.waon.net/point/), and [nanaco](https://www.nanaco-net.jp/introduction/). The relative-position column is an analytical product-boundary comparison, not a market-share claim.

KDDI's Ponta linkage is a useful telco comparison, but the operator structures differ: d Point is tied to the docomo perimeter, while Ponta is operated by a multi-shareholder company. **V Point** provides the bank-anchored contrast.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB/Yahoo/PayPay unified points]]
- [[megabanks/ndfg|NDFG (NTT docomo financial group)]]
- [[payment-firms/paypay|PayPay]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[payment-firms/au-payment|au Payment]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[retail/INDEX|retail index]]
- [[INDEX|FinWiki index]]

## Sources

- dポイントクラブ guide: https://dpoint.docomo.ne.jp/guide/index.html
- dポイントクラブ rank guide: https://dpoint.docomo.ne.jp/guide/about_rank/index.html
- dポイントクラブ member terms: https://dpoint.docomo.ne.jp/dpc/d_account/kiyaku.html
- dポイント official site: https://dpoint.docomo.ne.jp/
- d Card official site: https://dcard.docomo.ne.jp/
- d払い official site: https://service.smt.docomo.ne.jp/keitai_payment/
- Cashless Promotion Council publications (code-payment trends): https://paymentsjapan.or.jp/category/publications/
