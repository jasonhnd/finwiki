---
source: loyalty/d-point-au-kddi-docomo-telco-point-consolidation
source_hash: e787578a033e7318
lang: en
status: machine
fidelity: ok
title: "dポイント (NTT docomo) vs au PAY ポイント (KDDI) — telco-anchored Japan point consolidation"
translated_at: 2026-05-30T14:48:27.662Z
---

# dポイント (NTT docomo) vs au PAY ポイント (KDDI) — telco-anchored Japan point consolidation

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty INDEX]] and is the telco-anchored counterpart to the finance-anchored [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]. Read with [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] for the cross-ecosystem map, [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] for the breakage / IFRS-15 treatment, and [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] for the wallet-layer overlay that points sit on top of.

## TL;DR

Japan's three largest "common point" programmes split along the **anchor-business** axis:

| Programme | Anchor | Coalition partner(s) | Payment integration | Financial-group integration |
|---|---|---|---|---|
| **d Point** | NTT docomo telco subscribers | Lawson, McDonald's, Matsumoto Kiyoshi, ENEOS, etc. | d払い (d-barai QR), d Card credit, d Card Prepaid | NTT Docomo finance arm → [[JapanFG/ndfg|NDFG]] (planned consolidation including SMBC trust route) |
| **au PAY ポイント (旧 Ponta)** | KDDI / au telco subscribers + Recruit Holdings co-anchored coalition | Lawson, GEO, Shell SS (出光昭和シェル), Recruit Group services (じゃらん, Hot Pepper, etc.) | au PAY (QR), au PAY カード, au PAY プリペイドカード | [[JapanFG/au-fh|au FH (KDDI 金融持株)]] + [[JapanFG/au-payment|au Payment]] |
| **V Point** | SMBC Group financial subscribers + CCC database | T-Card legacy network (CCC), SMBC card cardholders, Olive accounts | Olive一体型, SMBC card, V NEAR PAY | [[JapanFG/smfg|SMFG]] / SMBC card |

The strategic difference between the two telco-anchored programmes and the bank-anchored V Point is **identity origin**:

- **d Point / au PAY ポイント** start from a **mobile-line identity** (the SIM, the contract holder, the device) — billable subscriber relationship is the moat.
- **V Point** starts from a **bank / card identity** (SMBC account, Olive, V Point Card) — financial-product relationship is the moat.

Both anchor types try to converge on the same downstream surface: a national QR-payment + card + bank + securities + insurance bundle. They start from different ends of the customer-acquisition funnel.

## Telco-anchored model — what subscriber identity buys

A telco anchor brings four assets that a pure financial-services anchor lacks:

1. **Contracted billing relationship** — monthly direct-debit / credit-card collection, with high payment-success rate and low churn
2. **Verified personal identity** — KYC done at mobile-line signup; address, name, ID document already validated
3. **Device-anchored attribution** — the SIM, the smartphone, the app environment are all tied to one customer ID
4. **Daily-use telemetry surface** — location, app usage, browsing context (where allowed by consent) becomes attribution data for marketing

These four assets compress the customer-acquisition funnel for **adjacent financial products**: a docomo subscriber who already pays a monthly phone bill on a registered credit card is far cheaper to convert into a d Card holder, a d払い user, a d-account banking customer, or a NISA-account opener than a cold prospect.

The **au-side counterpart** is structurally similar — au's coalition with Recruit Holdings around the legacy Ponta programme (now integrated as au PAY ポイント) brings additional non-telco daily-use surfaces (じゃらん travel, Hot Pepper restaurant, Air Regi POS). The integration history — Recruit-CCC-au-KDDI cross-equity moves — is publicly documented through KDDI and Recruit press releases.

## Side-by-side comparison

| Dimension | d Point (NTT docomo) | au PAY ポイント (KDDI) | V Point (SMBC × CCC) |
|---|---|---|---|
| Anchor | NTT docomo telco | KDDI au telco + Recruit coalition | SMBC + CCC (T-Card legacy) |
| Launched (current form) | 2015 (rebranded from docomo Premier Club) | 2010 (Ponta launch) → 2024-12 unified into au PAY ポイント | 2024-04-22 unified V Point (T Point + SMBC V Point merger) |
| Approx. member ID base | 100M+ d-account IDs (NTT docomo public disclosure) | 100M+ Ponta IDs / au IDs combined (KDDI / Recruit public materials) | 130M+ unified (CCC + SMBC public materials at integration) |
| Wallet integration | d払い (QR) | au PAY (QR) | V NEAR PAY (NFC) + Olive一体型 |
| Card | d Card / d Card GOLD (issued by NTT docomo) | au PAY カード (issued by au Financial Service) | SMBC card / Olive一体型 (SMBC) |
| Bank | (planned NDFG consolidation; partner banks today) | au じぶん銀行 (subsidiary of [[JapanFG/au-fh|au FH]]) | SMBC + Olive |
| Securities | (planned route via SMBC alliance to NTT route) | au カブコム証券 (subsidiary of au FH) | SMBC日興証券 |
| Insurance | (NTT docomo insurance distribution + planned NDFG roll-up) | [[JapanFG/au-insurance|au 損害保険]] + au アセットマネジメント | partner insurance route |
| Retail flagship | Lawson, McDonald's, Matsumoto Kiyoshi, ENEOS | Lawson, GEO, 出光, Recruit ecosystem | T-card legacy network (Tsutaya, スーパー, etc.) |
| Mobile carrier | NTT docomo (mobile, ahamo, irumo) | au, UQ mobile, povo | (none) |

## The Lawson question — overlapping retail anchor

Both d Point and au PAY ポイント (Ponta) work at Lawson, and Lawson's KDDI alliance (KDDI acquired a controlling equity stake in Lawson in 2024, documented in [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]) makes Lawson a particularly contested loyalty surface:

- Lawson historically gave Ponta points (Recruit / au coalition)
- d Point earnable at Lawson via cross-coalition agreement
- After KDDI's 2024 Lawson acquisition, KDDI's strategic incentive favours au PAY / Ponta integration; d Point earnability becomes a partnership-not-equity relationship

The same retail surface paying out into two competing point programmes is unusual in Japan and reflects the historical fact that point coalitions were treated as marketing tools, not as competitive moats. KDDI's Lawson acquisition starts to make these overlaps a real strategic tension.

## NTT docomo — d Point as the front-end of NDFG

The d Point programme is the consumer-facing layer of NTT docomo's broader push toward a **financial holding group** structure — see [[JapanFG/ndfg|NDFG (NTT docomo financial group)]] for the consolidation structure being assembled. The strategic arc:

1. **d-account** as a single customer ID across docomo, d払い, d Card, d-account banking partners, d-account NISA partners
2. **d Point** as the loyalty currency that ties the experience together
3. **NDFG holding company** as the regulatory wrapper that consolidates banking, securities, insurance, and trust subsidiaries under one financial-group umbrella
4. **SMBC Trust route** as one specific consolidation lever publicly disclosed in NTT / SMBC announcements

The end-state implied by NTT's public materials is a **telco-anchored financial super-group** that rivals [[JapanFG/rakuten-fg|Rakuten FG]] and [[JapanFG/paypay-fg|PayPay FG]] on integrated point-payment-financial-services bundling, with the **telco subscription cash-flow as the underlying anchor**.

## KDDI — au Point inside au FH

KDDI's parallel structure is more **already-consolidated** on the financial side than NTT's. [[JapanFG/au-fh|au FH (au Financial Holdings)]] already owns:

- au じぶん銀行 (au Jibun Bank — internet bank, MUFG legacy alliance)
- au カブコム証券 (au Kabu.com Securities)
- au 損害保険 / [[JapanFG/au-insurance|au 損害保険]]
- au アセットマネジメント
- [[JapanFG/au-payment|au Payment]] (operator of au PAY)
- au Pay Card

The au PAY ポイント programme sits as the **loyalty currency** that ties all these subsidiaries into one customer-funnel narrative. Recruit's coalition partnership through Ponta adds non-telco surfaces (travel, dining, services) on top.

## Contrast with V Point — finance-anchored vs telco-anchored

The structural comparison to V Point (see [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]) is the most informative way to read both d Point and au PAY ポイント:

| Question | Telco-anchored (d, au) | Finance-anchored (V Point) |
|---|---|---|
| Where does customer ID originate? | Mobile contract signup | Bank / card application |
| What's the recurring billing relationship? | Monthly phone bill | Monthly card statement |
| What's the KYC pathway? | At SIM purchase | At account opening |
| What's the cross-sell direction? | Telco → finance → wallet | Card / bank → wallet → retail |
| What's the data graph? | Location + app + telco usage | Spend + account flow + CCC retail database |
| What's the competitive moat? | Stickiness of mobile-line switching | Stickiness of bank-account switching |
| What's the regulatory anchor? | 電気通信事業法 + 資金決済法 (for payments) | 銀行法 + 割賦販売法 + 資金決済法 |
| What's the financial-group end-state? | Telco-anchored financial holding ([[JapanFG/ndfg|NDFG]], [[JapanFG/au-fh|au FH]]) | Bank-led group ([[JapanFG/smfg|SMFG]] / Olive) |

The two anchor types converge on the same downstream products (card, bank, securities, insurance, payments, retail media), but they reach them through different acquisition funnels and have different defensive economics. Telco anchors enjoy lower churn on the underlying subscription; finance anchors enjoy higher revenue per active relationship.

## Issuance and accrual mechanics

The visible difference between the two telco programmes is at the consumer surface (cashback rate, partner network). The accounting and operational mechanics underneath are similar in structure:

| Mechanic | d Point | au PAY ポイント |
|---|---|---|
| Standard accrual rate at own services | 1% on docomo bills / d払い / d Card | 1% on au bills / au PAY / au PAY カード |
| Bonus accrual at flagship partners | Variable, often 1-3% additional at promo periods | Variable, often 1-2% additional at promo periods |
| Premium card multiplier | d Card GOLD adds further point multiplier on docomo bills | au PAY ゴールドカード adds multiplier on au bills |
| Redemption value | 1 point = 1 yen at most retail partners and d払い / au PAY | Same |
| Expiry policy | Standard points typically expire after specified period; campaign points often shorter expiry | Same |
| Transferability | Limited person-to-person transfer (within rules) | Limited |
| Liability accounting | Loyalty liability accrued on issuance; breakage estimated and released over time per IFRS-15 / J-GAAP | Same |

The point-liability question — whether expired / forfeited points should be released as revenue (breakage) and at what rate — is a non-trivial accounting issue documented in [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]. Both NTT docomo and KDDI carry material loyalty liabilities on consolidated balance sheets, and the breakage rate assumption directly affects reported revenue.

## Coalition partner mechanics

The coalition structure — which partners accept which points, who funds the issuance, who pays for redemption — is the operational core of any common-point programme.

| Aspect | d Point | au PAY ポイント |
|---|---|---|
| Issuance funding | NTT docomo or the partner merchant funds the points issued at their site | KDDI or the partner merchant funds the points issued at their site |
| Redemption funding | Funded by partner merchant at point of redemption; net-settled across the coalition | Same |
| Per-partner economics | Negotiated bilaterally; large partners get preferential terms | Same |
| Co-branded card | d Card co-branded with selected partners (e.g., d Card Lawson PONTA) | au PAY カード co-branded with select partners |
| Settlement cycle | Periodic net settlement between docomo and partners | Periodic net settlement between KDDI and partners |
| Cross-coalition exchange | Allowed in some directions (e.g., d Point ↔ JAL miles) at fixed rates | Allowed (e.g., au PAY ポイント ↔ JAL miles) at fixed rates |

The economic incentive for a partner to join a coalition is **incremental traffic and incremental basket size** in exchange for partner-funded point issuance. The arithmetic only works when the partner is confident the incremental traffic exceeds the point-funding cost — which is why high-frequency / impulse-purchase retail (convenience, pharmacy, fuel) is the most receptive segment, and why competition for those segments is the most fierce.

## Strategic reading

- **Telco-anchored point programmes are the most cost-efficient cross-sell platform in Japan** because the mobile contract pays for KYC, customer acquisition, and the recurring billing rail; the loyalty layer monetises an already-paid-for relationship.
- **The d Point / au PAY ポイント rivalry is a multi-decade contest** because both anchors have national footprint, both have integrated financial holdings, and neither has a structural cost disadvantage. PayPay's ecosystem ([[JapanFG/paypay-fg|PayPay FG]]) operates from a different starting point (LY / SoftBank / Yahoo data assets, not mobile-line anchor) and competes on a third axis.
- **Code-payment penetration is the visible layer of a deeper financial-group competition** — see [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] for the wallet-side view; both d払い and au PAY exist primarily to capture transaction-level data and to widen the cross-sell base into card / bank / insurance / securities.
- **The point-liability accounting question matters more at telco scale** — both d Point and au PAY ポイント carry tens of billions of yen in accrued loyalty liability with material breakage assumptions. The IFRS-15 / J-GAAP treatment is documented in [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]].
- **Retail acquisition (Lawson, ENEOS, Matsumoto Kiyoshi) is no longer commodity** — KDDI's [[retail/lawson-kddi-retail-finance|Lawson]] move changes the cost basis of multi-point partnerships. Watch for similar equity moves by NTT docomo on retail anchors.

## Related

- [[loyalty/INDEX|loyalty INDEX]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[JapanFG/ndfg|NDFG (NTT docomo financial group)]]
- [[JapanFG/au-fh|au FH (au Financial Holdings)]]
- [[JapanFG/au-payment|au Payment]]
- [[JapanFG/au-insurance|au 損害保険]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]
- [[retail/INDEX|retail INDEX]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[INDEX|FinWiki index]]

## Sources

- d Point Club official site: https://dpoint.docomo.ne.jp/
- au PAY ポイント (旧 Ponta) official: https://aupay.wallet.auone.jp/contents/static/point/
- KDDI corporate news releases (au FH consolidation, Lawson acquisition): https://www.kddi.com/corporate/newsrelease/
- NTT docomo press releases (NDFG consolidation announcements): https://www.docomo.ne.jp/info/news_release/
- Recruit Holdings newsroom (Ponta history and au coalition): https://www.recruit.co.jp/newsroom/
