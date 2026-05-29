---
title: "JGB futures market and curve"
aliases:
  - "jgb-futures-curve"
  - "JGB futures Japan"
  - "10-year JGB futures"
  - "5-year JGB futures"
  - "20-year JGB futures"
  - "mini JGB futures"
  - "OSE JGB futures"
  - "cheapest-to-deliver JGB"
  - "JGB cash-futures basis"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, JGB-futures, OSE, JSCC, CTD, basis-trade, hedge, BoJ]
status: active
sources:
  - "https://www.jpx.co.jp/english/markets/derivatives/jgb-futures/"
  - "https://www.jpx.co.jp/english/markets/derivatives/"
  - "https://www.jscc.co.jp/en/"
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/"
  - "https://www.fsa.go.jp/en/"
---

# JGB futures market and curve

## TL;DR

JGB futures are exchange-listed interest-rate derivatives on Japanese government bonds, traded on the Osaka Exchange (OSE) under the Japan Exchange Group (JPX). They include three principal contracts at standard size — 10-year, 5-year, and 20-year — plus a "mini" 10-year contract sized at one-tenth the standard. Settlement is physical delivery via JSCC: at expiry, the short delivers an eligible JGB issue from a defined basket, chosen as the cheapest-to-deliver (CTD).

The 10-year JGB futures contract is the most liquid yen interest-rate derivative on a price (rather than rate) basis and serves as the canonical hedge instrument for dealer JGB inventory, institutional duration management, and macro positioning on Japan rates. Daily turnover and open interest concentrate overwhelmingly at the 10Y standard and 10Y mini; 5Y and 20Y volumes are thinner but real.

For FinWiki, this entry routes the contract specifications, CTD mechanics, cash-futures basis trade, JSCC clearing and settlement, dealer and hedge-fund activity, and the impact of BoJ JGB-purchase policy on futures-market functioning.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the OTC swap hedge alternative and [[derivatives/ois-tona-curve]] for the discount-curve interaction. The cash JGB and repo side is [[money-market/jgb-repo-market-japan]]; the clearing infrastructure is [[securities/japan-securities-clearing-corp]].

## Contract Specifications

JPX/OSE lists three standard and one mini JGB futures contracts:

| Contract | Underlying | Standard size | Tick | Listed months |
|---|---|---|---|---|
| 10-year JGB Futures | Notional 10-year JGB, 6% coupon, JPY 100 face value | JPY 100 million face | JPY 0.01 per JPY 100 (= JPY 10,000 per tick) | Mar / Jun / Sep / Dec |
| 5-year JGB Futures | Notional 5-year JGB, 3% coupon, JPY 100 face value | JPY 100 million face | JPY 0.01 per JPY 100 | Mar / Jun / Sep / Dec |
| 20-year JGB Futures | Notional 20-year JGB, 6% coupon, JPY 100 face value | JPY 100 million face | JPY 0.01 per JPY 100 | Mar / Jun / Sep / Dec |
| Mini 10-year JGB Futures | Same underlying as standard 10Y | JPY 10 million face (1/10) | JPY 0.005 per JPY 100 | Mar / Jun / Sep / Dec (nearest two) |

All contracts are price-quoted (not yield-quoted) against a notional bond, with delivery against a deliverable basket of actual JGBs of matching residual maturity.

Trading hours follow OSE's two sessions, including a night session that overlaps with the European and US daytime hours, which is when foreign macro participants are most active.

Final settlement is by physical delivery (cash settlement applies to the mini contract). The standard contracts terminate trading on the seventh business day before delivery.

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

| Property | Implication |
|---|---|
| Yield-curve shape (steepness, level) | Determines which bond in the basket is CTD; flatter curves and lower yields can shift the CTD to a different maturity inside the basket. |
| Coupon-yield relationship | When market yields are below the notional coupon (6% for 10Y), the CTD tends to be the lower-duration / longer-coupon bond in the basket; when above, the opposite. Since JGB yields are historically far below 6%, the CTD has typically been near the shortest deliverable issue. |
| Switch risk | CTD can switch from one bond to another if yields cross a threshold; short sellers have negative gamma to switches. |
| Squeeze risk | If a CTD becomes scarce in the repo market, the short may face a delivery squeeze. BoJ holdings of specific issues amplify this risk. |

The CTD mechanism is the most distinctive feature of JGB futures relative to OTC IRS hedges and is why the cash-futures basis trade exists.

## Basis Trade

The JGB cash-futures basis trade is the dominant hedge-fund and dealer arbitrage in Japan rates. The trade consists of:

1. **Buy** the CTD JGB in the cash market.
2. **Sell** the corresponding number of JGB futures contracts (scaled by the conversion factor).
3. **Finance** the CTD purchase via SC repo against the same issue.
4. **Hold to delivery** (or close before), realizing the net basis plus repo carry.

The economic return is the net basis: the gap between the futures-implied price and the cash CTD price, after accounting for repo financing cost. Positive net basis means the futures are "cheap" relative to the CTD; the trade earns the gap.

Risks of the basis trade:

| Risk | Detail |
|---|---|
| Repo specialness on the CTD | If SC repo on the CTD trades special (very negative repo rate), financing cost can swamp the basis. |
| CTD switch | If yields move enough to make a different basket bond the new CTD, the long-cash / short-futures position becomes mis-hedged. |
| Liquidity stress | In dislocated markets, even cash-futures basis can widen as dealers refuse to expand balance sheet (analogous to the JPY-USD basis dynamic in [[derivatives/yen-basis-swap-market]]). |
| BoJ purchases | BoJ outright JGB purchases (rinban operations) can absorb the CTD issue, tightening cash-market supply and pushing SC repo deeper into specialness. |

The basis trade is operationally simple but balance-sheet intensive; it requires repo lines, futures margin (IM and VM), and capital allocation. Hedge funds and dealer prop desks are the principal participants on the cash-long / futures-short side.

## Settlement Cycle and JSCC Clearing

JGB futures clear and settle through Japan Securities Clearing Corporation (JSCC), the JPX group CCP. Key settlement features:

| Element | Detail |
|---|---|
| CCP | JSCC; novation occurs at trade execution. |
| Margin | Initial margin (IM) and variation margin (VM) computed daily by JSCC; SPAN-style portfolio margining. |
| Final settlement | Physical delivery for standard contracts (10Y, 5Y, 20Y); cash settlement for mini 10Y based on the final settlement price. |
| Delivery period | The short tenders delivery instructions during a defined delivery window in the contract month. |
| Default management | JSCC waterfall: defaulter's margin → defaulter's contribution to default fund → JSCC capital tranche → non-defaulting members' default fund → JSCC further resources. |

JSCC's role removes bilateral counterparty risk and standardizes margining across the dealer set, but concentrates clearing risk that JSCC manages via membership requirements, capital adequacy, and stress testing. See [[securities/japan-securities-clearing-corp]] for clearing-corporation detail.

## OTC Repo Basis

The JGB futures market is intimately tied to the JGB repo market (covered in [[money-market/jgb-repo-market-japan]]). The connections:

| Link | Mechanism |
|---|---|
| CTD financing | The basis-trade short of futures must finance the long-cash CTD via repo; SC repo special on the CTD directly affects basis economics. |
| Implied repo rate | The implied repo rate (IRR) from the futures price tells what financing cost is consistent with no-arbitrage between cash and futures; cash IRR vs market repo rates reveals basis dislocation. |
| BoJ holdings effect | BoJ outright purchases and BoJ Securities Lending Facility (SLF) availability on specific issues alter SC repo rates and CTD scarcity. |
| Quarter-end basis | Quarter-end repo balance-sheet contraction can widen cash-futures basis the same way it widens JPY-USD CCBS. |

A practical reading rule: when SC repo on the cheapest deliverable goes deeply special (e.g. −10 bp or worse), the CTD basis trade carries asymmetric risk and dealers may rotate to alternative deliverable issues or to OTC IRS hedges via [[derivatives/japan-irs-market]] instead.

## Hedge Fund and Dealer Activity

| Participant | Activity |
|---|---|
| Macro hedge funds (foreign) | Outright directional positioning on Japan rates; relative-value 10Y vs 5Y, 10Y vs 20Y curve trades; basis trade against US Treasury futures (rate-differential macro). |
| Relative-value hedge funds | Cash-futures basis arb, conversion-factor arbitrage, calendar-spread trades across contract months, butterfly trades along the JGB curve. |
| Japanese dealers (megabank securities affiliates, Nomura, Daiwa) | Two-sided market making, client inventory hedging, prop basis trades. |
| Asset managers, life insurers | Duration hedging on JGB portfolios; reduced reliance on futures because of long-duration buy-and-hold mandates, but still used for tactical adjustment. |
| Corporate / public-sector treasury | Limited direct futures use; more reliance on OTC IRS via [[derivatives/japan-irs-market]] for hedging. |
| Foreign dealer banks | Two-sided market making during European / US overlap hours, including the OSE night session. |

Night-session activity is dominated by foreign accounts and frequently shows the largest intraday moves around US Treasury data or Federal Reserve commentary.

## BoJ JGB Control Impact

BoJ policy has been the single largest external force on JGB futures over the past decade:

| Policy regime | Effect on futures market |
|---|---|
| Quantitative and Qualitative Easing (QQE, 2013–) | Massive outright JGB purchases absorbed cash JGBs from the market, reducing dealer inventory and tightening CTD repo conditions. |
| Yield Curve Control (YCC, 2016–2024) | BoJ targeted 10Y JGB yield around 0%; created a hard "cap" near the YCC ceiling; futures volatility periodically compressed against the cap and spiked around YCC parameter changes. |
| YCC adjustments (Dec 2022, Jul 2023, Oct 2023) | Successive widenings of the YCC band caused step-changes in futures pricing and volatility spikes; basis trade economics shifted materially. |
| YCC termination and negative-rate exit (March 2024) | Removed the explicit cap; futures liquidity and volatility began to normalize but BoJ JGB balance sheet remains very large. |
| Post-2024 normalization | BoJ has been gradually reducing JGB purchases; market functioning indicators (cash-futures basis, repo conditions, SLF usage) have been monitored closely. |

For analysis, the JGB futures market's normalization is a leading indicator of broader Japan rates-market functioning. Reduced BoJ presence increases dealer inventory and tightens repo conditions less, which tends to improve cash-futures basis trade economics and futures liquidity over time. See [[money-market/boj-open-market-operations]] for BoJ-operations detail.

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
- [[JapanFG/mufg-bank]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: JGB Futures contract specifications and product surface.
- Japan Securities Clearing Corporation: clearing rules and margin methodology for JGB futures.
- Bank of Japan: JGB Securities Lending Facility and rinban operation documentation.
- Bank of Japan Review: JGB market functioning analytical publications.
- Financial Services Agency: FIEA framework on listed derivatives and clearing.
- JPX Trading and Statistics: monthly volume and open interest releases for OSE derivatives.
