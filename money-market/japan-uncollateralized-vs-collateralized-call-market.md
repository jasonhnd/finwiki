---
title: "Uncollateralized vs collateralized call market (Japan)"
aliases:
  - "money-market/japan-uncollateralized-vs-collateralized-call-market"
  - "japan-uncollateralized-vs-collateralized-call-market"
  - "uncollateralized call market"
  - "collateralized call market"
  - "無担保コール市場"
  - "有担保コール市場"
  - "コール市場 担保"
domain: "money-market"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [money-market, call-market, uncollateralized, collateralized, BoJ, tanshi]
status: active
sources:
  - "https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm"
  - "https://www.boj.or.jp/en/statistics/outline/exp/exmenu_m.pdf"
  - "https://www.boj.or.jp/en/announcements/education/oshiete/seisaku/b32.htm/"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/research/brp/ron_2024/data/ron241106a.pdf"
---

# Uncollateralized vs collateralized call market (Japan)

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/call-market-structure|Call market structure]] for the headline call-rate mechanism and [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] for the broader secured-funding boundary; the policy implementation layer is [[money-market/boj-open-market-operations|BoJ open market operations]].

## TL;DR

Japan's call market — the core interbank short-term lending / borrowing market — has historically had two segments distinguished by whether the loan is backed by collateral:

- **Uncollateralized call market (無担保コール市場)**: unsecured interbank lending / borrowing. The uncollateralized overnight call rate is the segment that BoJ money-market operation guidelines have targeted since the late 1990s, and it is the cash market underlying [[derivatives/ois-tona-curve|TONA]].
- **Collateralized call market (有担保コール市場)**: secured call lending, where the borrower pledges eligible collateral (historically JGBs and similar). This was the older mainstream of the call market but has shrunk to the point that BoJ has not calculated a collateralized call rate since April 2016, because there have been no transactions intermediated by tanshi companies.

For FinWiki, the key reading rule is that "the call rate" in current practice means the **uncollateralized overnight** rate. The collateralized segment is largely a historical and definitional contrast, with secured short-term funding having migrated into the [[money-market/jgb-repo-market-japan|repo market]].

## Segment Comparison

| Dimension | Uncollateralized call (無担保コール) | Collateralized call (有担保コール) |
|---|---|---|
| Security | Unsecured; pure counterparty credit exposure. | Secured against pledged eligible collateral. |
| Credit risk borne by lender | Full counterparty credit risk. | Mitigated by collateral. |
| Headline rate | Uncollateralized overnight call rate — BoJ operating target. | Collateralized call rate — not calculated since April 2016 (no tanshi-intermediated trades). |
| Current activity | Active, though volumes vary with the reserve environment. | Effectively dormant as a brokered segment. |
| Tenors | Overnight dominant; term transactions also occur. | Historically overnight and term. |
| Why used | End-of-day reserve / settlement adjustment, securities-firm inventory funding. | Older secured-funding channel before repo growth. |
| Data | BoJ Call Money Market Data, updated each business day. | No current rate series published. |

## Why the Uncollateralized Segment Dominates

The uncollateralized overnight call rate became the operating target for BoJ money-market operations from the 1990s, which concentrated attention, liquidity, and price discovery there. Several structural forces keep activity in the unsecured segment rather than the secured call segment:

- **Repo absorbed secured funding**: institutions that want secured short-term funding now use the [[money-market/jgb-repo-market-japan|JGB repo market]] (GC / SC repo and cash-collateralized securities lending), which has deeper infrastructure and a clearer collateral-management framework than the old collateralized call channel.
- **Operating-target gravity**: because BoJ guidelines reference the uncollateralized overnight call rate, it is the rate participants and the central bank both watch, reinforcing its role.
- **Participant mix**: banks adjust reserve / settlement balances and securities firms fund inventory in the uncollateralized call market; securities firms in particular have remained incentivized to do term uncollateralized call transactions to finance inventory and manage the Liquidity Coverage Ratio.

The result is a market where the unsecured segment carries the policy-relevant price and the secured short-term funding role sits in repo, leaving the collateralized call segment as a definitional contrast more than a live market.

## Settlement and Intermediation

Both segments are brokered through tanshi (money-market broker) companies, which match lenders and borrowers and submit transaction data to the BoJ. The BoJ computes the volume-weighted average call rate from the actual transactions reported by tanshi companies — which is precisely why a segment with no tanshi-intermediated transactions (the collateralized call market since April 2016) has no published rate.

- **Contract / value date**: for the uncollateralized overnight call, funds are received and paid on the contract date and repaid on the next business day.
- **Tanshi role**: see [[money-market/tanshi-company-business-model|tanshi company business model]] for how Tokyo / Central / Ueda Yagi tanshi intermediate and how that activity revives when short-rate normalization increases overnight trading.
- **Reserve / settlement context**: call activity is shaped by current-account balances at the BoJ and the surplus / shortage of funds in the system on a given day.

## Relationship to Other Front-End Markets

| Market | How it relates to the call market |
|---|---|
| [[money-market/jgb-repo-market-japan|JGB repo]] | The secured short-term funding venue that effectively replaced the collateralized call market; GC repo competes with unsecured call for funding flow. |
| [[derivatives/ois-tona-curve|TONA / OIS]] | TONA is the volume-weighted average of uncollateralized overnight call transactions; the call market is the cash market underneath the JPY risk-free-rate complex. |
| [[money-market/japan-tibor-benchmark-rate|TIBOR]] | A separate term interbank benchmark built on reference-bank quotes, not on call transactions; contrast term TIBOR with the actual overnight call print. |
| [[money-market/japan-ncd-negotiable-cd-market|NCD]] and [[money-market/japan-cp-commercial-paper-market|CP]] | Instrument-form alternatives for short-term funding that compete with direct call-market funding under the current policy regime. |

## Reading Checklist

1. When a source says "the call rate," confirm it means the uncollateralized overnight rate unless explicitly stated otherwise.
2. Do not expect a current collateralized call rate; it has not been calculated since April 2016.
3. Route secured short-term funding questions to [[money-market/jgb-repo-market-japan|repo]], not the collateralized call segment.
4. Separate the operating-target rate (uncollateralized overnight call) from term call transactions and from secured funding.
5. Read call-market activity against the reserve environment and BoJ operations rather than as a standalone signal.

## JapanFG Relevance

- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]] are the tanshi intermediaries whose reported transactions define the call rate.
- [[megabanks/mufg]], [[megabanks/smfg]], and [[megabanks/mizuho-fg]] participate through reserve / settlement balances and wholesale funding.
- [[securities-firms/mizuho-securities]] and [[securities-firms/mufg-mums]] participate through securities-firm inventory funding and repo-adjacent activity.
- [[financial-regulators/boj-monetary-policy]] sets the policy framework; this page explains the secured-vs-unsecured call segmentation underneath it.

## Boundary Cases

- **Collateralized call vs repo**: both are secured, but repo is a securities-financing transaction with a repurchase commitment, while collateralized call is secured lending pledging collateral; the two are not the same legal structure.
- **Uncollateralized call vs interbank deposit**: bilateral interbank deposits are economically related but are not the brokered call-market transactions that feed the published call rate.
- **Term call vs overnight call**: term uncollateralized call transactions exist, but the policy-relevant headline is the overnight rate.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[derivatives/ois-tona-curve]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Call Money Market Data (uncollateralized overnight call rate, updated each business day).
- Bank of Japan: explanation of "Statistics on Call Money Market," including the note that the collateralized call rate has not been calculated since April 2016 due to absence of tanshi-intermediated transactions.
- Bank of Japan: education page on the uncollateralized overnight call rate and the surplus / shortage of funds.
- Bank of Japan: Money Market overview surface.
- Bank of Japan Review (2024): developments in Japanese money markets, including securities-firm incentives for term uncollateralized call transactions.
