---
source: derivatives/basis-trade-bond-cds-japan
source_hash: f8d10062ecb83659
lang: en
status: machine
fidelity: ok
title: "Bond-CDS basis trade Japan"
translated_at: 2026-05-31T03:19:56.419Z
---

# Bond-CDS basis trade Japan

## TL;DR

The Japan bond-CDS basis is the spread between a corporate's CDS protection cost and its cash bond's credit spread over the swap or JGB benchmark curve at matched tenor. **Negative basis** (CDS < bond spread) historically attracted long-cash-short-CDS trades that lock in a "free" carry net of funding cost and balance-sheet charges. **Positive basis** (CDS > bond spread) is less common in Japan but appears during stress when protection-buying demand exceeds dealer capacity. Post-2010, Basel-III leverage ratio, single-counterparty credit limits, repo specials on JGBs, and BOJ unconventional policy (NIRP, QQE, YCC, YCC adjustments) have made basis trades harder to scale and more volatile through cycles. Major basis dislocations in Japan IG corporate credit occurred during **COVID Q1 2020** (negative basis blew wide as cash bonds traded distressed faster than CDS), **2022-2023 BOJ YCC adjustments** (rate and spread repricing widened basis), and **2024 episodic Japan financial credit stress** (smaller dislocations on selected names).

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the arbitrage / relative-value layer that complements [[derivatives/japan-cds-market-overview|Japan CDS market overview]] and [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]. Read it together with [[derivatives/japan-irs-market|Japan IRS market]] for the swap-curve anchor used in asset-swap pricing, [[derivatives/yen-basis-swap-market|yen basis swap market]] for the JPY funding-cost layer, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the USD-JPY funding interaction that affects USD-funded participants in JPY basis trades.

On the cash-bond side, cross-reference [[finance/INDEX|finance index]], [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]], and [[money-market/INDEX|money-market index]] for the JGB repo and funding context. On the institutional side, [[banking/INDEX|banking index]], [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]], and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] map the dealer / fund counterparties of the trade.

### Definition

```
Bond-CDS basis = CDS spread - Bond Z-spread (or asset swap spread) at matched tenor
```

| Sign | Interpretation |
|---|---|
| Negative basis | CDS spread < Bond spread → buying protection is cheaper than the bond's credit spread implies → long-cash-short-CDS attractive |
| Zero basis | Pure-arbitrage equilibrium (theoretical) |
| Positive basis | CDS spread > Bond spread → selling protection captures more than the bond's credit spread → short-cash-long-CDS attractive |

### Why basis is not zero

In a frictionless world the basis would be zero. Real-world frictions create persistent and time-varying basis:

| Friction | Effect on basis |
|---|---|
| Bond funding cost (repo rate, balance-sheet charges) | Tends to push basis negative (bond costs more to hold than synthetic) |
| Credit-event coverage difference (deliverable obligation universe, restructuring scope) | CDS coverage may be broader or narrower than bond exposure |
| Cheapest-to-deliver option on CDS | Adds value to CDS protection vs cash bond, pushing basis positive |
| Counterparty risk on CDS | Reduces value of CDS protection, pushing basis negative |
| Liquidity asymmetry | Less-liquid leg trades at premium / discount |
| Regulatory capital cost | Bank-owned long-cash-short-CDS positions consume risk-weighted assets and leverage capacity |
| Tax and accounting | Different recognition timing of cash bond income vs CDS premium |

### Structure

| Leg | Action |
|---|---|
| Long cash bond | Buy reference issuer's bond at par or near-par, funded in repo |
| Short CDS protection (i.e., buy protection) | Pay running spread for protection against credit event |
| Net carry | Bond yield - Funding rate - CDS premium |

Provided the negative basis exceeds funding cost and balance-sheet charges, the trade locks in positive carry with credit-event protection from the CDS leg.

### P&L decomposition

```
Daily P&L ≈ (Bond accrual - Repo funding cost) - (CDS premium accrual)
           + Mark-to-market change in (Bond price - CDS protection value)
```

If the basis narrows toward zero, the position appreciates (bond rises faster than CDS, or CDS widens faster than bond). If basis widens further negative, position loses MTM.

### Required holding period

To realize the locked-in carry, the position typically needs to be held to bond maturity or to a known horizon. Short-horizon trades depend on basis convergence which is unpredictable. Many funds historically rolled positions and accepted MTM volatility.

## Funding cost considerations

The bond leg requires funding. Funding cost is the dominant determinant of trade economics:

| Funding source | Cost driver |
|---|---|
| Repo (bilateral or tri-party) | Repo rate; JPY repo close to BOJ policy rate plus haircut |
| GC repo on JGB collateral | General-collateral JGB repo rate, sensitive to BOJ JGB-supply operations |
| Specific-collateral repo on the corporate bond | Often more expensive; reflects bond's borrowability and demand from short-sellers |
| Bank balance-sheet funding | Internal cost-of-funds (FTP); higher than repo for most banks |
| Prime broker financing | Hedge fund standard route via [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]]; spreads over GC repo plus haircut |

A 50 bps negative basis can be entirely eaten by funding costs if the bond is hard to repo, the haircut is steep, or balance-sheet charges are high. The trade-economic threshold for basis trades depends on the funding stack.

## Repo-availability constraints

Repo availability is the practical bottleneck. Japanese corporate-bond repo is far less liquid than JGB repo:

| Bond type | Repo liquidity |
|---|---|
| JGBs (on-the-run and benchmark) | Deep GC and specific repo; sensitive to BOJ operations |
| JGBs (off-the-run) | Less deep; episodic specials |
| Japan IG corporate bonds (large issuers) | Limited bilateral repo; mainly dealer-bilateral with prime brokers |
| Japan IG corporate bonds (small / mid issuers) | Very limited repo; positions held outright |
| Japan high-yield corporate bonds | Effectively no repo; held outright on balance sheet |

For most Japan corporate basis trades below Tier 1 issuer size, the bond leg is funded via prime broker financing rather than direct repo. This adds cost and reduces scalability versus US dollar or euro IG basis trades.

### Basel III leverage ratio

Long-cash-short-CDS positions inflate the leverage exposure measure on bank balance sheets even when net credit risk is hedged. Post-2010 leverage ratio enforcement reduced dealer appetite to warehouse large basis positions, structurally widening basis when stress hits.

### Risk-weighted assets (RWA)

| Component | Effect |
|---|---|
| Bond leg | Generates banking-book or trading-book RWA based on issuer rating |
| CDS leg | Generates counterparty credit risk RWA on CDS counterparty |
| Net hedging recognition | Limited under standard approach; better recognition under internal-model approach (subject to FRTB) |

Even with credit risk hedged, RWA consumption discourages dealer warehousing.

### Single-counterparty credit limits

US and EU rules limit single-counterparty exposure. CDS protection-bought against the same counterparty as a cash-bond issuer creates double exposure that must be netted carefully.

### Liquidity Coverage Ratio (LCR)

The bond leg generally counts toward HQLA if it qualifies as Level 2 HQLA; the CDS leg does not. Some basis trades therefore are LCR-neutral or positive for the bank, depending on bond characterization.

## Japan-specific market structure post-2010

| Period | Market structure shift |
|---|---|
| 2010-2012 | Migration to central clearing for CDS (JSCC and ICE Clear Credit); LIBOR-OIS basis spillover effects |
| 2013-2015 | BOJ QQE launch; massive JGB buying program reshaped repo specials and the JGB curve |
| 2016 | BOJ NIRP and yield-curve-control (YCC) introduction; 10Y JGB pinned near zero |
| 2017-2019 | Stable YCC era; tight Japan IG corporate spreads and narrow basis |
| 2020 Q1 | COVID credit shock; widespread negative-basis blowout across IG corporate names globally including Japan |
| 2020 Q2-Q4 | BOJ corporate-bond purchase facility and dealer balance-sheet recovery; basis partially normalized |
| 2022-2023 | BOJ YCC adjustments (widening tolerance band, then ending YCC); episodic JGB curve volatility and corporate-bond repricing |
| 2024-2025 | Continued narrow basis on most Japan IG names; episodic widening on financial names during global bank-stress events |

The structural picture: dealer warehousing capacity is smaller than pre-2008, while episodic credit-risk-off events still occur. Basis trades therefore exhibit lower-frequency but higher-amplitude dislocations.

## COVID Q1 2020 basis blowout

The Q1 2020 COVID episode triggered the largest negative-basis dislocation in Japan IG corporate credit since 2008-2009:

| Stage | Pattern |
|---|---|
| Late February 2020 | Risk-off begins; CDS spreads widen modestly faster than cash bonds |
| Early March 2020 | Forced cash-bond selling by ETFs, dealers, and ALM portfolios; cash spreads blow out faster than CDS |
| Mid March 2020 | Cash-bond bid-ask widened sharply; some bonds nearly untradeable; CDS remained quoted |
| 18 March 2020 | Negative basis on benchmark Japan IG corporates reached multi-year wides |
| Late March 2020 | BOJ announced corporate-bond purchase facility and ETF buying; dealer balance-sheets stabilized |
| April-June 2020 | Basis normalized; long-cash-short-CDS trades opened in March returned strong P&L |
| Q3-Q4 2020 | Basis settled back to narrow normal range |

The episode mirrored the 2008-2009 pattern but lasted weeks rather than months. The lesson for basis-trade practitioners: extreme dislocations are short windows requiring committed capital and tolerance for short-term MTM pain.

## 2022-2023 BOJ YCC adjustments

| Event | Effect on basis |
|---|---|
| December 2022 BOJ widens YCC tolerance band (0.25 → 0.50 percent) | 10Y JGB yield jump; Japan IG corporate cash bonds repriced; CDS lagged; basis temporarily widened |
| 2023 incremental YCC adjustments | Episodic repricing; smaller dislocations |
| July 2023 BOJ formally relaxes YCC | 10Y JGB upper limit effectively raised to ~1.00 percent; cash spreads widened; CDS responded with lag |
| March 2024 BOJ formally ends YCC and NIRP | JGB curve normalized; cash corporate bonds repriced; basis normalized over weeks |

The pattern: cash-bond repricing leads CDS repricing because cash bonds are more directly held by yield-curve-sensitive portfolios (life insurers, banks). CDS spreads adjust when traders push synthetic positions to match cash, with a lag determined by dealer balance-sheet capacity.

### Investor profile

| Investor | Basis-trade profile |
|---|---|
| Convertible-arb / credit funds | Active basis-trade users; tolerance for MTM volatility |
| Multi-strategy hedge funds | Selective use, often paired with capital-structure-arb trades |
| Bank dealer desks | Limited prop basis trading post-Volcker / equivalent; mainly market-making warehousing |
| Insurance / pension | Generally not active basis traders; focus on outright cash bond holdings — see [[insurance/japan-life-insurance-alm-overview|life ALM]] |
| Sovereign wealth funds | Episodic basis-trade allocations during major dislocations |

### Trade sizing

Basis trades are scaled by:

| Constraint | Practical effect |
|---|---|
| Repo / financing capacity for the bond leg | Caps long-cash size |
| CDS market liquidity for the short-protection leg | Caps short-CDS size at matched name and tenor |
| Counterparty CSA terms (margining, eligible collateral) | Affects funding cost on the CDS leg |
| Single-name credit-event tail risk | Even with hedge, gap-risk during credit event |
| Regulatory capital cost | Bank-owned positions consume RWA / leverage |

A 100 million USD-equivalent negative-basis position in a Japan IG name is large; 500 million is very large; multi-billion is rare and concentrated in the most liquid names.

### Roll dynamics

If holding to bond maturity is not feasible, CDS protection must be rolled (5Y CDS → next 5Y series, etc.) at each roll. Roll-down P&L plus index-roll basis adds noise to the headline trade economics.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[money-market/INDEX]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- BOJ: monetary policy framework materials, JGB market operations data, corporate-bond purchase facility documentation.
- MOF: JGB issuance and benchmark curve materials.
- FSA: derivatives clearing regulation, post-crisis CDS reforms, follow-up council materials.
- ISDA: CDS Definitions and Determinations Committee materials.
- JSCC: CDS clearing service materials.
- BIS: semi-annual OTC derivatives statistics including Japan reference-entity CDS.
- JSDA: member-firm and market structure materials.
