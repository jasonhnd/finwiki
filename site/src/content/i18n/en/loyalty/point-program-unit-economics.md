---
source: loyalty/point-program-unit-economics
source_hash: cc2d7535c00c5f23
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Point program unit economics (JP loyalty funding, float, breakage, CPA)"
translated_at: 2026-06-05T00:00:00.000Z
---
# Point program unit economics (JP loyalty funding, float, breakage, CPA)

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **unit-economics / funding-mechanics** page. It is the economic complement to [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]: that page asks *how a point is classified*, this page asks *whether the program makes money and who pays*. It reads alongside the program map in [[loyalty/japan-points-landscape|Japan points and loyalty landscape]], the data-monetisation flywheel in [[loyalty/retail-media-points-data-loop|retail-media points data loop]], and the inter-operator transfer mechanics in [[loyalty/point-exchange-network-risk|point exchange network risk]]. The downstream beneficiary of favourable point economics is group finance: [[payment-firms/rakuten-fg|Rakuten FG]], [[megabanks/ndfg|NDFG]], [[megabanks/paypay-fg|PayPay FG]].

## TL;DR

A point program's economics reduce to a small equation: **funding source − redemption cost − operating cost + breakage gain + float yield + monetisation (retail media / finance cross-sell) = program margin.** The two structurally interesting terms are **breakage** (points granted but never redeemed are a near-pure margin gain whose *timing* is governed by ASBJ Statement No.29 / IFRS 15) and **float** (the gap between granting a point liability and paying for redemption is a zero-interest funding balance). Whether a program is profitable turns less on the headline reward rate than on **who funds the point** (merchant vs operator), **how high breakage runs**, and **whether the ID graph is monetised**. A "1% back" program is not one economic object; it is at least four very different ones depending on those answers.

## The unit-economics equation

For a representative unit of points granted, the operator's economics are:

| Term | Sign | Driver |
|---|---|---|
| Funding inflow | + | Merchant-funded points: the merchant pays the operator to issue. Operator-funded: pure cost. |
| Redemption cost | − | Value of points actually redeemed (the operator must honour them) |
| Operating cost | − | Platform, settlement, fraud control, data infrastructure, partner management |
| Breakage gain | + | Points never redeemed → liability released to revenue (timing per accounting standard) |
| Float yield | + | Outstanding liability is an interest-free balance held until redemption |
| Monetisation | + | Retail-media + finance cross-sell revenue attributable to the ID graph |

The headline "reward rate" only sets the *gross* redemption cost. Margin is decided by the other five terms — which is why two programs advertising the same percentage back can have opposite economics.

## Funding: who actually pays for the point

The single biggest economic split is the **funding source**, and it does not match what the consumer sees.

| Funding model | Who pays | Operator economics | Typical case |
|---|---|---|---|
| Merchant-funded | Partner merchant pays operator per point issued | Operator earns a margin on issuance + keeps breakage/float | Common-point acceptance at partner retailers |
| Operator-funded (campaign) | Operator's own marketing budget | Pure acquisition cost; only pays back via data / cross-sell | Wallet "100% 還元" promotions |
| Issuer-funded (card) | Card issuer funds reward from interchange / fees | Defends card economics; reward is a cost of interchange | Credit-card reward points |
| Self-funded (group retail) | The group's own retail margin | Retention spend; pays back as repeat purchase | Store-group points (grocery / convenience) |

A common point typically runs a **merchant-funded** core (margin-positive on issuance, *plus* breakage and float) with an **operator-funded** campaign overlay on top. Conflating the two is the classic misread flagged in [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]]: the campaign overlay hits P&L immediately and makes the program look loss-making, while the merchant-funded base is quietly margin-positive.

## Breakage: the margin engine

**Breakage** — points granted but never redeemed — is the closest thing in loyalty to a pure-margin gain. Mechanically:

- Points the operator never has to honour are a liability that is eventually released to revenue.
- Under **ASBJ Statement No.29** and **IFRS 15**, that release is recognised *in proportion to the pattern of redemption* over the expected redemption period — not all at once on expiry — and only when breakage is a **reliable estimate** from history. Where it is not estimable, revenue waits until further redemption is remote.
- Higher breakage = higher structural margin; but it is also the most **estimate-sensitive and review-exposed** number in the whole program. Overstating it pulls revenue forward; the Cashless Promotion Council / Payments Japan disclosure norms (comparable redemption-rate, expiry, outstanding-balance reporting) exist partly to stop breakage being used as a revenue-smoothing valve.

Design choices push breakage directly: short expiry, limited-use points (期間・用途限定), and high minimum-redemption thresholds all *raise* breakage — which is one (rarely stated) reason limited-use points are so prevalent. The accounting framing of this is bucket 3 in [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]].

## Float: the interest-free funding balance

Between granting a point and paying for its redemption, the operator holds an **outstanding liability** it has not yet had to settle. In aggregate this is a large, slow-moving, interest-free balance — analogous to insurance float or prepaid-instrument float:

- The longer the average time-to-redemption, the larger the float relative to issuance.
- For a large common point or wallet, the outstanding point liability is a standing balance funded entirely by customers at zero interest.
- Float is *separate* from breakage: breakage is points that never come back (a margin gain); float is the carry on points that will eventually come back (a funding benefit while held).

The float reading is what makes point liabilities interesting to a financial group: a point operator inside a bank / telco group ([[payment-firms/rakuten-fg|Rakuten FG]], [[megabanks/ndfg|NDFG]], [[megabanks/paypay-fg|PayPay FG]]) contributes a customer-funded balance and a daily-frequency touchpoint at once.

## Monetisation: where thin programs turn profitable

A point program judged on funding − redemption − cost alone can look marginal. The terms that flip it are **breakage**, **float**, and **monetisation of the ID graph** — the retail-media + finance cross-sell flywheel set out in [[loyalty/retail-media-points-data-loop|the retail-media data-loop page]]. This is the reconciliation for "loss-making" wallets:

- Campaign-heavy wallets book operator-funded grants as immediate expense (P&L looks bad).
- The same spend buys the richest ID graph and the deepest daily-frequency funnel.
- Retail-media margins and finance cross-sell — higher-margin than the thin retail/payment business the point subsidised — are where it pays back.

So the profitability question is never "what is the reward rate"; it is "merchant-funded or operator-funded, how high is breakage, how large is the float, and is the graph monetised."

## Why this matters for JapanFG / financial analysis

- **Reward rate is the wrong headline.** Two "1% back" programs differ entirely on funding source, breakage, float, and monetisation. Compare those, not the percentage.
- **Breakage is the quality-of-earnings flag.** A program leaning on optimistic breakage to show margin is pulling revenue forward; check whether "ポイント引当金" has migrated to "契約負債" and how redemption assumptions are disclosed (per [[loyalty/point-liability-accounting-boundary|accounting boundary]]).
- **Float + ID graph are why financial groups want point operators.** A point inside a group supplies an interest-free customer-funded balance *and* a cross-sell funnel — the economics that make [[megabanks/smfg|SMFG]] / V-Point, [[megabanks/ndfg|NDFG]] / dポイント, and [[payment-firms/rakuten-fg|Rakuten FG]] internal integration rational beyond marketing.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/retail-media-points-data-loop|retail-media points data loop]]
- [[loyalty/point-exchange-network-risk|point exchange network risk]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]
- [[payments/japan-prepaid-electronic-money-operator-matrix|Japan prepaid electronic-money operator matrix]]
- [[payments/INDEX|payments INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[megabanks/smfg|SMFG]]
- [[fintech/INDEX|fintech INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Point Club official guidance — point program structure and redemption terms.
- ASBJ Statement No.29, "Accounting Standard for Revenue Recognition" (収益認識に関する会計基準) — breakage / deferred-revenue timing.
- Rakuten Group IR — contract-liability and point-related deferred-revenue disclosures.
- NTT docomo IR — dポイント redemption assumptions and revenue allocation.
- Payments Japan Association — code-payment redemption / breakage disclosure norms.
