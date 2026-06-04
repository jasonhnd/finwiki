---
title: "BoJ post-2024 floor system and complementary deposit facility (補完当座預金制度)"
aliases:
  - "money-market/boj-post-2024-floor-system-complementary-deposit-facility"
  - "boj-post-2024-floor-system-complementary-deposit-facility"
  - "BoJ floor system"
  - "BoJ complementary deposit facility"
  - "補完当座預金制度"
  - "IOER Japan"
  - "BoJ tiered interest"
domain: "money-market"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [money-market, BoJ, monetary-policy, floor-system, IOER, reserves]
status: active
sources:
  - "https://www.boj.or.jp/en/mopo/mpmdeci/index.htm"
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_t/index.htm"
  - "https://www.boj.or.jp/en/mopo/mpmsche_minu/index.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b31.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b34.htm"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/statistics/boj/other/cabs/index.htm"
---

# BoJ post-2024 floor system and complementary deposit facility (補完当座預金制度)

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/boj-open-market-operations|BoJ open market operations]] for peer / contrast context and [[money-market/japan-money-market|Japan money market]] for the broader system / regulatory boundary.

## TL;DR

In March 2024, the Bank of Japan ended negative interest-rate policy (NIRP) and Yield Curve Control (YCC), and shifted to a short-rate-target framework where the policy rate is set as the interest paid on the policy-rate-balance tier of bank current-account holdings at the BoJ. This is a **floor-system** approach, structurally similar to the Fed's IORB and the ECB's deposit facility.

The interest-on-reserves rail is the complementary deposit facility (補完当座預金制度), which historically applied a tiered structure to current-account balances. After the March 2024 framework shift, the policy-rate-balance tier carries the headline short-term policy rate, and short-term money-market pricing is anchored above this floor.

## Framework Map

| Layer | Pre-March-2024 reading | Post-March-2024 reading |
|---|---|---|
| Policy-rate target | Short-term target around minus 10 basis points under NIRP framework; long-end controlled under YCC. | Uncollateralized overnight call rate guided around a positive short-rate target. |
| Reserve tiering | Three tiers: basic balance, macro add-on balance, policy-rate balance, with the policy-rate balance carrying the negative rate. | Reserve interest applied through the complementary deposit facility; check current published tier rates. |
| Long-end control | YCC band on 10Y JGB yield. | YCC discontinued; long-end allowed to be market-determined. |
| Asset purchase | Massive JGB / ETF / J-REIT / CP / corporate-bond purchase programs at full pace. | JGB purchase pace gradually reduced; ETF / J-REIT new purchases ended; corporate-asset programs wound down. |
| Operating philosophy | Pure quantity-driven, with negative interest-rate floor and YCC ceiling. | Conventional rate-target framework using floor-system mechanics. |

## Complementary Deposit Facility Mechanics

The complementary deposit facility (補完当座預金制度) is the legal and operational route through which the BoJ pays interest on commercial-bank current-account balances. Historic key points:

- Introduced in 2008 as an extension of the BoJ's market-operation framework.
- Used as a containment tool during financial-crisis liquidity expansion.
- Operates through the BoJ-net current-account system.
- Implemented through public BoJ Policy Board decisions.

After the policy-tiering changes that accompanied NIRP and post-NIRP normalization, the precise tier definitions and applied rates change over time. Always consult the current BoJ MPM decision text and current operations page for live rate and tier definitions.

## Tiered IOER Structure (Reference Reading)

The pre-2024 NIRP tier framework provides a useful reading template:

| Tier | Concept | Reading |
|---|---|---|
| Basic balance | A reference balance defined by historical reserve amounts. | Carried a positive rate. |
| Macro add-on balance | Add-on tier defined by reserve-requirement and lending-incentive arithmetic. | Carried a zero rate. |
| Policy-rate balance | The marginal tier above the other two. | Carried the negative rate that defined NIRP. |

After March 2024, the BoJ framework shifted away from a punitive negative-rate marginal tier toward a positive-rate floor on reserve balances. The exact tier definitions and applied rates published by the BoJ should always be consulted before quoting current figures.

## Why the Floor System Works

A floor system anchors the short-term money-market rate above the interest paid on reserves. If a bank can deposit excess cash at the BoJ at the published policy rate, it has limited economic reason to lend in the [[money-market/call-market-structure|call market]] at a meaningfully lower rate. Combined with [[money-market/boj-open-market-operations|open market operations]] that manage aggregate reserve scarcity / abundance, the floor sets a clear short-rate corridor.

Practical reading:

- The actual [[money-market/call-market-structure|uncollateralized overnight call rate]] should trade close to the policy-rate-balance interest rate.
- Repo rates ([[money-market/jgb-repo-market-japan|JGB repo]]) should trade in a narrow band around the floor, modified by collateral scarcity.
- [[money-market/japan-tbill-treasury-discount-bill|TDB]] yields should trade close to the floor minus a small collateral / scarcity premium.
- [[money-market/japan-ncd-negotiable-cd-market|NCD]] and [[money-market/japan-cp-commercial-paper-market|CP]] yields should trade above the floor by issuer credit spreads.

## Comparison with Fed IORB and ECB DFR

| Feature | BoJ post-2024 | US Fed | ECB |
|---|---|---|---|
| Policy rate name | Short-term policy interest rate, applied through complementary deposit facility. | Federal funds target range; floor is interest on reserve balances (IORB). |  Deposit facility rate (DFR). |
| Floor instrument | Interest on policy-rate-balance tier of BoJ current account. | Interest on reserve balances at Federal Reserve. | Interest on excess holdings at ECB deposit facility. |
| Reserve abundance | BoJ runs ample reserves due to extended quantitative-easing legacy. | Fed runs ample reserves under post-2008 framework. | ECB runs ample reserves under post-2014 framework. |
| Tier structure | Tiered system historically used; check current BoJ MPM decision. | Single IORB rate without tiering. | Two-tier system historically applied during NIRP; framework periodically revised. |
| Long-end management | YCC ended March 2024; long-end now market-determined with discretionary purchases. | No long-end yield target; balance-sheet runoff used. | No long-end target; APP / PEPP wound down. |

The structural similarities are deliberate: all three central banks moved to floor-system designs after the post-2008 era of ample reserves.

## Operations Menu Adjacency

The floor system works in combination with active operations:

- **Fund-supplying operations**: loans against pooled collateral, [[money-market/japan-tbill-treasury-discount-bill|TDB]] purchases, [[money-market/jgb-repo-market-japan|JGB repo]]-style operations, and [[money-market/japan-cp-commercial-paper-market|CP]] repo. Used to manage aggregate reserve scarcity.
- **Fund-absorbing operations**: BoJ bill issuance, JGS sale operations with repurchase agreements. Used to drain excess reserves if needed.
- **Standing facilities**: complementary lending facility (補完貸付制度) acts as a ceiling on the corridor.
- **Forward guidance**: MPM statements and Outlook Report shape rate expectations.

The combination of floor (deposit facility rate) and ceiling (lending facility rate) forms the operational corridor.

## Reading Checklist

1. Identify the current policy-rate level from the latest BoJ MPM decision text.
2. Verify current tier definitions in the complementary deposit facility from the BoJ operations page.
3. Read the [[money-market/call-market-structure|call rate]] against the policy-rate floor to check transmission.
4. Compare [[money-market/japan-tbill-treasury-discount-bill|TDB]] yields with the floor for collateral / scarcity signal.
5. Watch BoJ JGB purchase pace and balance-sheet runoff statements for medium-term reserve trajectory.
6. Treat the complementary deposit facility rate, not the policy-rate label, as the operational floor.

## JapanFG Relevance

- Megabanks [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] have direct BoJ current-account positions and earn the floor rate on reserve balances.
- Trust banks and custody banks hold settlement balances at the BoJ, also subject to the floor.
- Securities firms [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], [[securities-firms/nomura-hd]] interact with the floor through repo finance and dealer balance-sheet pricing.
- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] intermediate call and CP business that prices off the floor.

## Boundary Cases

- **Policy rate label vs floor rate**: the policy rate published in MPM statements is the operational floor only when the complementary deposit facility tier definitions align with the rate label. Verify both.
- **Floor system vs corridor system**: BoJ post-2024 is a floor system because reserves are ample; a corridor system would require active rate-band management without reliance on ample reserves.
- **IOER vs IORB**: the US Fed's earlier IOER and current IORB nomenclature differ but the function is equivalent.
- **End of NIRP vs end of QQE**: ending NIRP changes the marginal-tier rate; ending QQE-style asset purchases is a separate decision.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Monetary Policy Meeting decisions surface.
- Bank of Japan: open market operations and complementary deposit facility pages.
- Bank of Japan: MPM schedule and minutes / Outlook Report.
- Bank of Japan: education pages on market operations and policy guidelines.
- Bank of Japan: Money Market overview.
- Bank of Japan: current-account-balances statistics page.
