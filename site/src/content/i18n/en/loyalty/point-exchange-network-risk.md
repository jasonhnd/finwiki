---
source: loyalty/point-exchange-network-risk
source_hash: 8ec21d5dfd5c7955
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Point exchange network risk (JP cross-program conversion economics)"
translated_at: 2026-07-29T08:08:10.000Z
---

# Point exchange network risk (JP cross-program conversion economics)

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **cross-program exchange risk-scenario** page beneath [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]. It pairs with [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]], which explains why conversion accounting depends on contracts and the redemption obligor. For the regulatory edge, route to [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] and [[financial-licenses/payment-license-stack|payment-license stack]].

## TL;DR

Cross-program conversion creates **potential** counterparty, rate, fraud, accounting, and regulatory exposures. Public consumer terms normally show direction, rate, units, caps, eligibility, and timing. They generally do not disclose wholesale settlement rates, settlement cycles, credit support, insolvency allocation, operator margin, or journal entries. The risks below are therefore explicit **scenarios**, not claims that a named programme uses a particular private settlement model.

## Why exchange turns a point into a network

A public exchange edge — for example, a point-to-mile conversion — creates three review questions:

1. **Obligor / recognition:** does the originating obligation end at conversion, redemption, settlement, or another event, and when does the receiving obligation arise?
2. **Commercial settlement:** does consideration move gross, net, periodically, prefunded, or through another arrangement? Consumer terms do not answer this.
3. **Control design:** what caps, identity checks, transfer windows, reversals, and fraud controls are publicly stated, and what risks do they mitigate?

See bucket 5 in [[loyalty/point-liability-accounting-boundary|the accounting-boundary page]]; there is no universal “liability transfer plus cash settlement” entry.

## The five risk surfaces

| Hypothetical surface | Scenario | Evidence needed for a named programme |
|---|---|---|
| Settlement / counterparty | If settlement occurs after customer conversion, an operator may face unsecured exposure to its counterparty | Contract, settlement schedule, prefunding / security, insolvency terms |
| Rate exposure | A consumer ratio change can alter customer value; a wholesale-rate exposure exists only if the commercial contract creates it | Dated consumer terms plus commercial pricing / hedging terms |
| Breakage estimation | Exchange availability may change exercise behaviour and therefore an estimate for a recognised obligation | Entity model, historical data, accounting-policy note |
| Fraud / laundering | Multiple routes, promotion stacking, or weak identity binding may create abuse paths | Limits, KYC / identity controls, reversals, monitoring evidence |
| Cash-equivalence drift | Broad transferability or redemption may change the Payment Services Act analysis | Exact product rights, flow of funds, legal-entity registration |

Sources: the [Payment Services Act](https://elaws.e-gov.go.jp/document?lawid=421AC0000000059), FSA [registry index](https://www.fsa.go.jp/menkyo/menkyo.html), [ASBJ Statement No.29](https://www.asb.or.jp/jp/wp-content/uploads/asbj_29.pdf), and named programmes' public terms. This is a scenario taxonomy, not a finding about private contracts or regulated status.

### Settlement and counterparty risk

If an exchange contract uses delayed bilateral net settlement, a timing gap could create counterparty exposure. If it uses prefunding, real-time gross settlement, collateral, or an agent structure, the exposure differs. No named-programme conclusion is drawn without the commercial contract.

### Rate / FX-like exposure

A published exchange ratio can change the customer's practical redemption value, and caps or transfer windows can affect liquidity. Calling the private economics “FX exposure” is only an analogy; it does not establish an operator position, hedge, or settlement rate.

### Breakage mis-estimation

Exchange availability may change redemption behaviour and therefore an entity's breakage estimate for a recognised obligation. Direction and magnitude require historical evidence; transferability does not automatically lengthen life or determine revenue timing.

### Arbitrage and laundering vectors

Rate gaps plus weak identity binding are an arbitrage invitation: cycle value across edges to harvest spreads, stack promotional multipliers across the same conversion, or aggregate many small balances into a cash-out path. This is why operators wrap exchange flows in **rate limits, conversion increments and monthly caps, identity binding, and throttling of unusual patterns** — controls that read as marketing friction but function as fraud and AML defence. The publicly visible guard rails (minimum 50-point exchanges in fixed increments, monthly conversion ceilings) are the consumer-facing edge of this.

### Cash-equivalence drift

A point that is freely transferable, broadly redeemable, and effectively refundable starts to behave like money. At that point the loyalty framing fails and the **Payment Services Act** analysis takes over — prepaid-instrument or even funds-transfer territory. The boundary is set out in [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] and [[financial-licenses/payment-license-stack|the payment-license stack]]. Exchange design is, in part, deliberately kept *limited* (limited-use points, caps, one-way valves) to stay on the loyalty side of that line. The clearest illustration is that **limited-use dポイント (期間・用途限定) cannot be converted to JAL miles at all** — the restriction is what keeps the promotional grant from becoming cash-like.

## Topology of the JP exchange network

The network is not a uniform mesh. It is a set of soft-pegged edges with airline mileage acting as the dominant high-value sink.

| Public consumer route | What public terms can establish | Commercial facts not established |
|---|---|---|
| Rakuten Point / airline mileage | Current direction, consumer ratio, unit, cap, and transfer window | Wholesale rate, margin, settlement cycle, insolvency allocation |
| dポイント / JAL mileage | Current direction and eligibility, including excluded point types | Funding party, recognition event, commercial settlement |
| Pontaポイント / JAL mileage | Current direction, ratio, unit, and eligibility | Bilateral pricing, netting, credit support, operator economics |

Sources: published consumer terms from [Rakuten Point](https://point.rakuten.co.jp/guidance/en/faq/pointinfo/), [ANA](https://www.ana.co.jp/en/jp/shoppingandlife/point/tukau_rakuten/), [Ponta](https://www.ponta.jp/), and [JAL Mileage Bank](https://www.jal.co.jp/jp/ja/jalmile/). Private settlement mechanics are intentionally excluded.

The structural reading: **common points (Rakuten, d, Ponta) are the broad on-ramps; airline mileage is the deep sink.** Value flows toward mileage because that is where per-unit value and emotional redemption value are highest, which is also why the reverse edges are throttled. For the program-by-program map feeding these edges, see [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]; for the airline-side mechanics of the sink, see [[loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison|JMB vs AMC]].

## Why this matters for JapanFG / financial analysis

- **Balances may not be additive.** Check reporting perimeters, recognition events, and conversion-in-transit treatment before aggregating.
- **Ownership does not reveal contracts.** A bank or telco investment in a point operator does not by itself identify settlement relationships or accounting obligations.
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
- Payment Services Act and FSA registration lists — regulatory issue-spotting boundary.
