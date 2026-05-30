---
source: loyalty/d-point-detailed-ecosystem
source_hash: c43a2c0479e6f635
lang: en
status: machine
fidelity: ok
title: "d Point detailed ecosystem (NTT docomo) — accrual mechanics, d Card / d払い convergence, 2025 reform"
translated_at: 2026-05-30T14:48:27.663Z
---

# d Point detailed ecosystem (NTT docomo) — accrual mechanics, d Card / d払い convergence, 2025 reform

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **operator-deep page** for dポイント, pairing with [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]] for the comparative telco-anchor view, [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] for the bank-anchored contrast, [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] for the ecosystem map, [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] for the IFRS-15 treatment, [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]] for the wallet-layer overlay, [[JapanFG/ndfg|NDFG]] for the parent financial-holding structure, and [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 tie-up]] for the contested-retail-anchor counterpart.

## TL;DR

**dポイント** is NTT docomo's open common-point programme operated under the **dポイントクラブ** umbrella. Active **d-account ID base exceeds 100 million** (NTT docomo public disclosures), making it one of Japan's three largest common-point ecosystems alongside Rakuten Points and PayPay Points. The strategic role of dポイント is to act as the **front-end currency of the planned [[JapanFG/ndfg|NDFG (NTT docomo financial group)]] consolidation**, binding mobile-line subscribers to d払い (QR payment), d Card / d Card GOLD (credit), d-account banking partners, dスマートバンク (digital-bank brand), and the future NDFG-wrapped securities / insurance / trust subsidiaries. The **2025 dポイントクラブ reform** (announced in 2024-Q4, rolled out in stages through 2025-2026) restructured the rank system (4-tier "ランク") around d払い usage frequency rather than pure point accumulation, materially shifting the accrual economics toward wallet activity. The accounting treatment under IFRS 15 places point-earned liability into deferred revenue with breakage estimation, and post-2021 ASBJ Statement No.29 adoption is fully reflected in NTT docomo's annual report contract-liability disclosures.

## d-account, dポイントクラブ, and member scale

The **d-account** is NTT docomo's universal customer ID. It originated as the docomo ID for mobile-line subscribers but was opened to non-docomo users (general consumers without a docomo mobile contract) starting around 2015 when dポイント was rebranded from the legacy "docomo Premier Club" programme. The current structure:

| Identity layer | Role | Scale |
|---|---|---|
| **d-account** | Universal ID for docomo, dポイント, d払い, d Card, d-account bank partners | 100M+ accounts (NTT docomo public disclosure) |
| **dポイントクラブ** | Loyalty programme tier wrapper that determines accrual rate and benefits | All d-account holders are auto-enrolled as members |
| **d Card 会員** | Credit-card subsidiary of d-account, issued by NTT docomo | Tens of millions; subset of d-account |
| **d Card GOLD 会員** | Gold-status credit card with multiplier benefits on docomo bills | Several million; the high-ARPU tier |
| **d払い 会員** | QR-payment wallet membership, sits on top of d-account | Tens of millions of MAU; see [[payments/japan-code-payment-operator-2025-market-share-matrix|code-payment 2025 share matrix]] |

The membership funnel widens at the d-account layer and narrows toward d Card GOLD, with each tier offering progressively higher financial-product attachment.

## 2025 dポイントクラブ reform — rank-system overhaul

The **dポイントクラブ rank reform** announced in 2024-Q4 and rolled out in stages through 2025-2026 is the most significant change to dポイント accrual economics since the 2015 rebrand. Public materials describe a **4-tier rank system** that determines bonus accrual:

| Rank tier | Previous (pre-2025) basis | New (2025-) basis |
|---|---|---|
| Top tier (★★★★) | Pure 6-month point accumulation threshold | Combined d払い usage + d Card spend + dポイント accumulation; weights d払い frequency more heavily |
| Mid-upper (★★★) | Same | Combined metric with lower threshold |
| Mid-lower (★★) | Same | Combined metric with lower threshold |
| Base (★) | Default enrollment | Default enrollment |

The economic intent is to **reward d払い activity** rather than passive point accumulation, accelerating wallet adoption among legacy dポイント holders who historically earned points through d Card spend or docomo bill payment without using d払い. This aligns with NTT docomo's strategic priority to grow d払い market share against [[JapanFG/paypay|PayPay]] and 楽天ペイ in the code-payment matrix — see [[payments/japan-code-payment-operator-2025-market-share-matrix|2025 code-payment market share matrix]].

The reform also adjusted **kept-balance expiry rules** (rolling 48-month rule rather than fixed-date expiry) and introduced **bonus-multiplier campaigns tied to specific d払い merchant categories**.

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

The strategic role of d払い is to provide a **wallet surface that ties point accrual to high-frequency low-ticket spend** — a category that pure credit-card economics struggle to serve cost-effectively. The 2025 dポイントクラブ rank reform explicitly increases the weight of d払い frequency in the rank-determination metric, accelerating wallet adoption.

The licensing structure for d払い sits under the **第三者型前払式支払手段** (third-party prepaid payment instrument) and **資金移動業 (funds-transfer business)** dual registration as appropriate — see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the structural treatment.

## Accounting recognition timing — IFRS 15 contract liability

NTT docomo reports under IFRS, and dポイント liability is treated as a **contract liability** (deferred revenue under IFRS 15) under the "material right" framework. The recognition pattern:

| Event | Accounting treatment |
|---|---|
| Customer purchase that earns points | Allocate transaction price between goods/services and the points granted (using standalone selling prices); recognise the points portion as contract liability |
| Customer redeems points | Release the corresponding deferred revenue into recognised revenue |
| Points expire or breakage is recognised | Release the corresponding deferred revenue based on the pattern of expected redemption (proportional to actual redemption) |
| Campaign-grant points (no underlying customer purchase) | Treat as promotional / marketing expense at grant |

NTT docomo's annual report includes contract-liability disclosure that combines telecom-revenue deferred amounts with dポイント liability. The breakage assumption is reviewed annually based on historical redemption patterns. For the broader treatment, see [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] which covers the five accounting buckets that "points" can fall into.

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

The coalition economics work the same way as au PAY ポイント / Pontaポイント: partner merchants fund their own issuance and redemption, with periodic net-settlement between NTT docomo and the partner. The economic logic for partner participation is **incremental traffic and basket size** in exchange for partner-funded point cost.

## Competitive positioning

| Common-point | Anchor | Active member ID | Strongest channel | d Point's relative position |
|---|---|---|---|---|
| dポイント | NTT docomo telco | 100M+ | docomo bills, d Card GOLD multiplier, Lawson / McDonald's | Reference |
| au PAY ポイント (旧 Ponta) | KDDI au telco + Recruit / Mitsubishi coalition | 100M+ | Lawson (post-KDDI), Recruit ecosystem (じゃらん, Hot Pepper) | Direct telco peer; Ponta merger gives au broader non-telco surface |
| V Point | SMBC + CCCMK | 130M+ unified | SMBC Olive, SMBC Card, T-card legacy network | Bank-anchored; weaker telco data graph |
| Rakuten Points | Rakuten EC + card + bank + mobile | Tens of millions of active | Rakuten EC, Rakuten Card, Rakuten Mobile | E-commerce-anchored; stronger online tail |
| PayPay Points | SoftBank / LY / PayPay app | 70M+ wallet users | PayPay QR app, campaigns, PayPay Card | Wallet-anchored; campaign-driven |
| WAON POINT | AEON Group | Tens of millions | AEON stores, WAON, AEON Card | Retail-group-internal |
| nanaco point | Seven & i | Tens of millions | 7-Eleven, Ito-Yokado, nanaco | Retail-group-internal |

The most direct peer for dポイント is **au PAY ポイント** — both are telco-anchored common points with mobile-line subscriber bases as the core moat and aspirational super-app financial bundles as the end-state. The most important contrast is **V Point** as the bank-anchored alternative with a different customer-acquisition funnel.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB/Yahoo/PayPay unified points]]
- [[JapanFG/ndfg|NDFG (NTT docomo financial group)]]
- [[JapanFG/paypay|PayPay]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/au-fh|au Financial Holdings]]
- [[JapanFG/au-payment|au Payment]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[retail/INDEX|retail index]]
- [[INDEX|FinWiki index]]

## Sources

- dポイントクラブ official site: https://dpoint.docomo.ne.jp/club/
- dポイント official site: https://dpoint.docomo.ne.jp/
- d Card official site: https://dcard.docomo.ne.jp/
- d払い official site: https://service.smt.docomo.ne.jp/keitai_payment/
- NTT docomo press releases (dポイントクラブ reform announcements): https://www.docomo.ne.jp/info/news_release/
- NTT docomo IR library (annual report contract-liability disclosure): https://www.docomo.ne.jp/corporate/ir/library/
- Cashless Promotion Council publications (code-payment trends): https://paymentsjapan.or.jp/category/publications/
