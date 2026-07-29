---
source: derivatives/jgb-futures-curve
source_hash: d5350c9d73a636a6
lang: en
status: machine
fidelity: ok
title: "JGB futures market and curve"
translated_at: 2026-07-29T21:20:00.000Z
---

# JGB futures market and curve

## TL;DR

JGB futures are exchange-listed interest-rate derivatives traded on Osaka Exchange and cleared by JSCC. JPX's current physically delivered lineup comprises **5-year JGB futures, 10-year JGB futures, and mini 20-year JGB futures**. Mini 10-year JGB futures are a separate **cash-settled** contract. The physically delivered contracts give the seller a choice among eligible deliverable issues under JPX's conversion-factor and delivery rules.

JPX publishes dated volume and open-interest statistics for these contracts. Liquidity rankings and participant use can change by contract month and should be established from the current statistics rather than fixed as an undated hierarchy.

For FinWiki, this entry routes the contract specifications, CTD mechanics, cash-futures basis trade, JSCC clearing and settlement, dealer and hedge-fund activity, and the impact of BoJ JGB-purchase policy on futures-market functioning.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the OTC swap hedge alternative and [[derivatives/ois-tona-curve]] for the discount-curve interaction. The cash JGB and repo side is [[money-market/jgb-repo-market-japan]]; the clearing infrastructure is [[securities/japan-securities-clearing-corp]].

## Contract Specifications

JPX/OSE currently lists the following JGB futures:

| Contract | Settlement | Trading unit | Minimum price increment |
|---|---|---|---|
| 5-year JGB Futures | Physical delivery | JPY100 million | JPY0.01 per JPY100 |
| 10-year JGB Futures | Physical delivery | JPY100 million | JPY0.01 per JPY100 |
| Mini 20-year JGB Futures | Physical delivery | JPY10 million | JPY0.01 per JPY100 |
| Mini 10-year JGB Futures | Cash settlement | JPY10 million | See the current mini-contract specification |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html]

The physically delivered contracts stop trading on the fifth business day before the delivery day under the current JPX specification. Trading hours, listed contract months, and holiday adjustments should be taken from the live specification rather than assumed from a generic quarterly cycle.

## Cheapest-to-Deliver (CTD)

Because JGB futures settle against a basket of eligible JGB issues rather than a single bond, the short side has an option: at delivery, the short selects the JGB from the deliverable basket that maximizes profit (or minimizes loss) for the short. This selected issue is the CTD.

The CTD is identified through the conversion-factor (CF) system. The conversion factor adjusts each eligible JGB's price to the notional 6% (or 3% for 5Y) coupon basis, so that the short's invoice on delivery equals:

```
invoice amount = futures settlement price × CF × face value + accrued interest
```

The economic CTD is the JGB minimizing the gross basis:

```
gross basis = (CTD spot price + accrued interest) − (futures price × CF)
```

After adjusting for repo carry over the period to delivery (net basis = gross basis − repo carry), the bond with the lowest net basis is the CTD that dealers will deliver.

Properties of the CTD framework:

| Published delivery feature | Implication |
|---|---|
| Deliverable grades | JPX defines the eligible bond grades and residual-maturity conditions for each physically delivered contract |
| Seller's delivery choice | The seller selects the deliverable issue under the exchange rules; the economically cheapest issue can change with prices and financing |
| Conversion factor | JPX's factor converts the selected bond into the notional-contract invoice framework |
| Delivery amount | Calculated from the final settlement price, conversion factor, face amount, and accrued interest under the rules |

Source: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html]

“Cheapest to deliver” is an analytical result, not a permanent bond designation. It depends on current bond prices, conversion factors, accrued interest, and financing assumptions.

## Basis Trade

One implementation of a JGB cash-futures basis trade pairs a financed cash-bond position with an offsetting futures position. The illustrative cash-long / futures-short direction consists of:

1. **Buy** the CTD JGB in the cash market.
2. **Sell** the corresponding number of JGB futures contracts (scaled by the conversion factor).
3. **Finance** the CTD purchase via SC repo against the same issue.
4. **Hold to delivery** (or close before), realizing the net basis plus repo carry.

A reproducible comparison starts with the dated futures price, conversion factor, accrued interest, cash dirty price, delivery date, and executable repo funding terms. Gross and net basis, or the implied repo rate versus the actual funding rate, must use one stated convention. A positive or negative “basis” label alone does not establish trade direction or return.

Risks of the basis trade:

| Risk | Detail |
|---|---|
| Repo specialness on the CTD | If SC repo on the CTD trades special (very negative repo rate), financing cost can swamp the basis. |
| CTD switch | If yields move enough to make a different basket bond the new CTD, the long-cash / short-futures position becomes mis-hedged. |
| Liquidity stress | In dislocated markets, even cash-futures basis can widen as dealers refuse to expand balance sheet (analogous to the JPY-USD basis dynamic in [[derivatives/yen-basis-swap-market]]). |
| BoJ purchases | BoJ outright JGB purchases (rinban operations) can absorb the CTD issue, tightening cash-market supply and pushing SC repo deeper into specialness. |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html] ^[source:https://www.boj.or.jp/en/research/wps_rev/rev_2025/rev25e03.htm]

The basis trade requires cash-bond financing and futures margin. The sources cited here do not establish a current participant ranking or a universal direction of positions.

## Settlement Cycle and JSCC Clearing

JGB futures clear and settle through Japan Securities Clearing Corporation (JSCC), the JPX group CCP. Key settlement features:

| Element | Detail |
|---|---|
| CCP | JSCC clears Osaka Exchange JGB futures listed on its product page |
| Margin | Governed by JSCC's current listed-derivatives margin rules and VaR-based methodology |
| Physical delivery | 5-year, 10-year, and mini 20-year JGB futures |
| Cash settlement | Mini 10-year JGB futures |
| Delivery detail | Eligible grades, conversion factors, timing, and invoice calculation follow the JPX delivery rules |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/futures/product.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html]

Central clearing replaces bilateral exposure with the JSCC clearing framework; it does not eliminate risk. See [[securities/japan-securities-clearing-corp]] for clearing-corporation detail.

## OTC Repo Basis

The JGB futures market is intimately tied to the JGB repo market (covered in [[money-market/jgb-repo-market-japan]]). The connections:

| Link | Mechanism |
|---|---|
| CTD financing | The basis-trade short of futures must finance the long-cash CTD via repo; SC repo special on the CTD directly affects basis economics. |
| Implied repo rate | The implied repo rate (IRR) from the futures price tells what financing cost is consistent with no-arbitrage between cash and futures; cash IRR vs market repo rates reveals basis dislocation. |
| BoJ holdings effect | BoJ outright purchases and BoJ Securities Lending Facility (SLF) availability on specific issues alter SC repo rates and CTD scarcity. |
| Quarter-end basis | Quarter-end repo balance-sheet contraction can widen cash-futures basis the same way it widens JPY-USD CCBS. |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html] ^[source:https://www.boj.or.jp/en/research/wps_rev/rev_2025/rev25e03.htm]

A current trade assessment must use dated repo quotes, deliverable-basket data, conversion factors, and futures prices; no universal “specialness” threshold is asserted here.

## Public participant-data boundary

JPX publishes contract volume and open interest, but the official sources cited here do not establish a current participant ranking, dealer market share, investor domicile split, or position direction. Those claims require a dated participant-level dataset or public position disclosure.

## BoJ JGB Control Impact

BOJ policy decisions are one dated input when studying JGB futures:

| Policy milestone | Observation set for testing market effects |
|---|---|
| Quantitative and Qualitative Easing (QQE, 2013–) | Pair dated BOJ purchase decisions and operation results with futures volume, open interest, deliverable-repo quotes, and cash-futures basis |
| Yield Curve Control (YCC, 2016–2024) | Pair the dated yield-target framework and changes with contract prices, volume, open interest, realized volatility, and CTD financing |
| YCC adjustments (Dec 2022, Jul 2023, Oct 2023) | Define event windows from the BOJ decisions, then compare the same market measures without assuming the sign or size of effect |
| YCC termination and negative-rate exit (March 2024) | Use the dated policy decision and matched pre/post observations; the milestone alone does not establish normalization |
| Post-2024 normalization | Use dated purchase plans, operation results, futures data, repo quotes, and SLF usage to test any market-function claim |

Sources: ^[source:https://www.boj.or.jp/en/mopo/outline/ref_qqe.htm] ^[source:https://www.boj.or.jp/en/research/wps_rev/rev_2025/rev25e03.htm]

The policy milestones are documented; any claimed effect on futures liquidity, basis, or volatility must be tested against dated market data. See [[money-market/boj-open-market-operations]] for BoJ-operations detail.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/call-market-structure]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[megabanks/mufg-bank]]
- [[megabanks/mizuho-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: JGB Futures contract specifications and product surface.
- Japan Securities Clearing Corporation: clearing rules and margin methodology for JGB futures.
- Bank of Japan: JGB Securities Lending Facility and rinban operation documentation.
- Bank of Japan Review: JGB market functioning analytical publications.
- Financial Services Agency: FIEA framework on listed derivatives and clearing.
- JPX Trading and Statistics: monthly volume and open interest releases for OSE derivatives.
