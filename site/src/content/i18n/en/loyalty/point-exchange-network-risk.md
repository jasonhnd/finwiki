---
source: loyalty/point-exchange-network-risk
source_hash: 66e2d0ef35380962
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Point exchange network risk (JP cross-program conversion economics)"
translated_at: 2026-06-05T00:00:00.000Z
---
# Point exchange network risk (JP cross-program conversion economics)

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **cross-program exchange** page — the mechanism layer beneath the program directory in [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]. It pairs with [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] (which defines how a conversion splits into a liability-transfer event plus a settlement leg) and with [[loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison|JMB vs AMC]] (because airline mileage is the highest-value sink most exchange paths flow toward). For the regulatory edge — where a freely transferable, cash-like point stops being loyalty marketing and becomes a payments topic — route to [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] and [[financial-licenses/payment-license-stack|payment-license stack]].

## TL;DR

A point that can be **converted into another operator's point or into airline mileage** is no longer a self-contained loyalty liability. Conversion creates a small inter-operator financial network: each edge carries a **consumer-facing exchange ratio**, a (usually different and confidential) **bilateral settlement rate**, a **liability transfer**, and a set of **anti-abuse controls**. The network is where most of Japan loyalty's systemic risk concentrates — non-additive liability accounting, FX-like rate exposure, arbitrage / laundering vectors, and the route by which a "marketing" point drifts toward cash-equivalence. Reading any single operator's point balance in isolation overstates how contained that liability really is.

## Why exchange turns a point into a network

A closed point (earn at Rakuten, spend at Rakuten) is one operator's deferred-revenue liability and nothing more. The moment an exchange edge opens — Rakuten Point ↔ ANA mileage, Rakuten Point ↔ JAL mileage, dポイント ↔ JAL mileage, Pontaポイント ↔ JAL mileage — three things become true at once:

1. **The same yen of purchasing power can exist in two liability lines.** During a conversion window the originating operator may not yet have extinguished its liability while the receiving operator has already created one. Outstanding balances across operators are therefore **non-additive**; you cannot sum operator-reported point balances to get a "Japan point economy" total.
2. **There are two prices on every edge, not one.** The consumer sees an exchange ratio (e.g. Rakuten → JAL at 2 points = 1 mile). The operators settle at a separate, contractually agreed rate that is normally not disclosed. The spread is the receiving operator's acquisition revenue and the originating operator's release cost.
3. **Asymmetry is deliberate.** Reverse edges are usually priced worse and capped. Publicly, Rakuten's reverse path (JAL miles → Rakuten Points) runs at roughly 1 mile = 0.8 point at scale, versus 2 points = 1 mile inbound — a one-way valve that pushes value toward the higher-margin mileage sink and discourages round-tripping.

This is the concrete content of bucket 5 ("cross-program exchange") in [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]]: a liability transfer plus a settlement leg, happening together.

## The five risk surfaces

| Surface | What goes wrong | Who absorbs it |
|---|---|---|
| Settlement / counterparty | Net-settlement timing gap between operators; one side's insolvency mid-window | Both operators; ultimately the consumer holding mid-conversion balance |
| Rate / FX-like exposure | Operator changes consumer ratio or settlement rate; value of held balance shifts | Holder of the soft-pegged point; arbitrageurs on the other side |
| Breakage mis-estimation | Transferable points sit longer, so breakage assumptions stretch and revenue timing slips | Issuer's reported revenue under ASBJ Statement No.29 / IFRS 15 |
| Arbitrage / laundering | Rate gaps, promo stacking, or weak identity binding let value be cycled or cashed out | Operators (fraud loss); the funds-transfer / AML regime if value becomes cash-like |
| Cash-equivalence drift | A freely exchangeable, redeemable point starts behaving like money | Regulatory boundary — Payment Services Act analysis |

### Settlement and counterparty risk

Exchange edges settle **bilaterally and net**, not in real time. Between the moment a consumer converts and the moment the two operators settle cash, there is a window in which the originating operator owes the receiving operator. A large, sudden conversion event (a viral "convert before the rate changes" campaign) concentrates this exposure. The receiving operator carries a fresh liability it must honour on redemption regardless of whether the originating operator's settlement has cleared.

### Rate / FX-like exposure

Because each edge has a soft-pegged consumer ratio, a point held *because* it can be exchanged carries quasi-currency risk. When an operator revises a ratio — or, as ANA publicly signalled for its Rakuten-point exchange, lengthens the transfer window and introduces per-day redemption caps — the practical value and liquidity of the held balance change. Holders chasing the best exchange path behave like FX traders; operators set ratios and caps the way a currency board manages a peg.

### Breakage mis-estimation

Transferability extends effective life. A point that can be parked in a high-value sink (airline mileage, a partner program with longer expiry) gets redeemed later, or shifted rather than abandoned. That stretches the **breakage** assumption that, under both ASBJ Statement No.29 and IFRS 15, governs *when* deferred point revenue is recognised. Optimistic breakage on a transferable point recognises revenue too early; the exchange network is exactly where that estimate is hardest to defend, and where the disclosure norms pushed by the Cashless Promotion Council / Payments Japan (comparable redemption-rate, expiry, and outstanding-balance reporting) bite hardest.

### Arbitrage and laundering vectors

Rate gaps plus weak identity binding are an arbitrage invitation: cycle value across edges to harvest spreads, stack promotional multipliers across the same conversion, or aggregate many small balances into a cash-out path. This is why operators wrap exchange flows in **rate limits, conversion increments and monthly caps, identity binding, and throttling of unusual patterns** — controls that read as marketing friction but function as fraud and AML defence. The publicly visible guard rails (minimum 50-point exchanges in fixed increments, monthly conversion ceilings) are the consumer-facing edge of this.

### Cash-equivalence drift

A point that is freely transferable, broadly redeemable, and effectively refundable starts to behave like money. At that point the loyalty framing fails and the **Payment Services Act** analysis takes over — prepaid-instrument or even funds-transfer territory. The boundary is set out in [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] and [[financial-licenses/payment-license-stack|the payment-license stack]]. Exchange design is, in part, deliberately kept *limited* (limited-use points, caps, one-way valves) to stay on the loyalty side of that line. The clearest illustration is that **limited-use dポイント (期間・用途限定) cannot be converted to JAL miles at all** — the restriction is what keeps the promotional grant from becoming cash-like.

## Topology of the JP exchange network

The network is not a uniform mesh. It is a set of soft-pegged edges with airline mileage acting as the dominant high-value sink.

| Edge (publicly documented) | Consumer direction | Character |
|---|---|---|
| Rakuten Point ↔ ANA mileage | mutual; ~2 pt = 1 mile inbound | longest-standing (mutual exchange since 2004) |
| Rakuten Point ↔ JAL mileage | mutual; ~2 pt = 1 mile in, ~1 mile = 0.8 pt at scale out | added 2022; explicit asymmetric reverse rate + monthly cap |
| dポイント ↔ JAL mileage | toward miles; **base points only**, limited-use excluded | telco point into airline sink |
| Pontaポイント ↔ JAL mileage | mutual; bilateral net-settlement with JMB | mature; predates several peers operationally |

The structural reading: **common points (Rakuten, d, Ponta) are the broad on-ramps; airline mileage is the deep sink.** Value flows toward mileage because that is where per-unit value and emotional redemption value are highest, which is also why the reverse edges are throttled. For the program-by-program map feeding these edges, see [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]; for the airline-side mechanics of the sink, see [[loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison|JMB vs AMC]].

## Why this matters for JapanFG / financial analysis

- **Liability is non-additive.** A high point balance on one operator's IR slide is not a system-wide total, and part of it may be in transit to another balance sheet. Aggregate "Japan point economy" figures (the ~2.8 trillion yen Yano Research market sizing is a *market* figure, not a summed liability) should never be read as a sum of operator liabilities.
- **Acquiring a point operator imports its edges.** A bank or telco buying into a common point ([[megabanks/smfg|SMFG]] via V-Point / CCCMK, [[megabanks/ndfg|NDFG]] via dポイント, [[payment-firms/rakuten-fg|Rakuten FG]] internally) inherits the settlement relationships, the breakage-estimation problem, and the cash-equivalence boundary — not just a marketing asset.
- **Exchange is the cash-like pressure valve.** The richer the exchange network, the closer the most-liquid points sit to the [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]]. Operators that have layered card, bank, and securities products on top of a point ([[megabanks/paypay-fg|PayPay FG]], [[payment-firms/rakuten-fg|Rakuten FG]]) have the most to lose if a regulator reclassifies a flagship point as cash-equivalent.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison|JAL Mileage Bank vs ANA Mileage Club]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[payments/INDEX|payments INDEX]]
- [[financial-licenses/payment-license-stack|payment-license stack]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/smfg|SMFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Group press release — Rakuten Points and JAL Miles mutual exchange (2022-05-11).
- ANA Mileage Club — Rakuten Point exchange terms (consumer ratio, transfer window, redemption caps).
- Rakuten Point Club official guidance — exchange minimums, increments, and monthly caps.
- ASBJ Statement No.29, "Accounting Standard for Revenue Recognition" (収益認識に関する会計基準) — breakage and contract-liability framing.
- Payments Japan Association / Cashless Promotion Council — code-payment disclosure norms.
