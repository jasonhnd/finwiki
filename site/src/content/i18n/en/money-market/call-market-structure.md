---
source: money-market/call-market-structure
source_hash: 694ff48e30b78380
lang: en
status: machine
fidelity: ok
title: "Call market structure"
translated_at: 2026-06-18T15:47:13.964Z
---

# Call market structure


## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-money-market|Japan money market]] for peer / contrast context and [[money-market/boj-open-market-operations|BoJ open market operations]] for the broader system / regulatory boundary.

## TL;DR

The call market is Japan's short-term interbank funding market. The uncollateralized overnight call rate is especially important because it is the policy-rate transmission point used in BoJ money-market operation guidelines. Banks and other financial institutions use overnight call transactions to adjust end-of-day liquidity; tanshi companies sit in the market as brokers / intermediaries.

Use this page when interpreting short-rate normalization, tanshi-company relevance, or the difference between the BoJ's operating guideline and the actual traded overnight rate.

## Core Mechanics

| Element | Explanation |
|---|---|
| Transaction | Very short-term lending / borrowing, especially overnight. |
| Uncollateralized O/N call rate | The headline short money-market rate that BoJ policy guidelines have historically targeted. |
| Participants | Banks, trust banks, securities firms, other eligible financial institutions, and money-market brokers. |
| Tanshi role | Tanshi companies intermediate short-term funds and provide market-function infrastructure. |
| Data source | BoJ publishes provisional and final Call Money Market Data on business days. |

## How To Read The Rate

Do not read the call rate as a simple deposit rate. It is a wholesale money-market price shaped by:

- the BoJ's policy guideline;
- current-account balances and reserve conditions;
- participant access to BoJ accounts;
- collateral and repo alternatives;
- quarter-end / fiscal-year-end liquidity demand;
- counterparty limits and balance-sheet constraints.

## Uncollateralized vs collateralized segments

The call market historically had two segments distinguished by whether the loan is backed by collateral. In current practice "the call rate" means the **uncollateralized overnight** rate; the collateralized segment is largely a historical and definitional contrast.

| Dimension | Uncollateralized call (無担保コール) | Collateralized call (有担保コール) |
|---|---|---|
| Security | Unsecured; pure counterparty credit exposure. | Secured against pledged eligible collateral. |
| Credit risk borne by lender | Full counterparty credit risk. | Mitigated by collateral. |
| Headline rate | Uncollateralized overnight call rate — BoJ operating target. | Collateralized call rate — not calculated since April 2016 (no tanshi-intermediated trades). |
| Current activity | Active, though volumes vary with the reserve environment. | Effectively dormant as a brokered segment. |
| Tenors | Overnight dominant; term transactions also occur. | Historically overnight and term. |
| Why used | End-of-day reserve / settlement adjustment, securities-firm inventory funding. | Older secured-funding channel before repo growth. |
| Data | BoJ Call Money Market Data, updated each business day. | No current rate series published. |

The **collateralized call rate has not been calculated since April 2016**, because there have been no transactions intermediated by tanshi companies; the BoJ computes the volume-weighted average call rate from actual tanshi-reported transactions, so a segment with no such trades has no published rate.

Why the uncollateralized segment dominates:

- **Operating-target gravity**: because BoJ guidelines reference the uncollateralized overnight call rate, it is the rate both participants and the central bank watch, concentrating liquidity and price discovery there.
- **Repo absorbed secured funding**: secured short-term funding migrated into the [[money-market/jgb-repo-market-japan|JGB repo market]] (GC / SC repo and cash-collateralized securities lending), which has deeper infrastructure and a clearer collateral-management framework than the old collateralized call channel.
- **Participant mix**: banks adjust reserve / settlement balances and securities firms fund inventory in the uncollateralized call market; securities firms in particular stay incentivized to do term uncollateralized call transactions to finance inventory and manage the Liquidity Coverage Ratio.

The result is a market where the unsecured segment carries the policy-relevant price and the secured short-term funding role sits in repo, leaving the collateralized call segment as a definitional contrast more than a live market.

## Relationship to other front-end markets

| Market | How it relates to the call market |
|---|---|
| [[money-market/jgb-repo-market-japan|JGB repo]] | The secured short-term funding venue that effectively replaced the collateralized call market; GC repo competes with unsecured call for funding flow. |
| [[derivatives/ois-tona-curve|TONA / OIS]] | TONA is the volume-weighted average of uncollateralized overnight call transactions; the call market is the cash market underneath the JPY risk-free-rate complex. |
| [[money-market/japan-tibor-benchmark-rate|TIBOR]] | A separate term interbank benchmark built on reference-bank quotes, not on call transactions; contrast term TIBOR with the actual overnight call print. |
| [[money-market/japan-ncd-negotiable-cd-market|NCD]] and [[money-market/japan-cp-commercial-paper-market|CP]] | Instrument-form alternatives for short-term funding that compete with direct call-market funding under the current policy regime. |

## Reading checklist

1. When a source says "the call rate," confirm it means the uncollateralized overnight rate unless explicitly stated otherwise.
2. Do not expect a current collateralized call rate; it has not been calculated since April 2016.
3. Route secured short-term funding questions to [[money-market/jgb-repo-market-japan|repo]], not the collateralized call segment.
4. Separate the operating-target rate (uncollateralized overnight call) from term call transactions and from secured funding.
5. Read call-market activity against the reserve environment and BoJ operations rather than as a standalone signal.

## JapanFG Relevance

- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]] are the direct tanshi-company route.
- [[megabanks/mufg]], [[megabanks/smfg]], and [[megabanks/mizuho-fg]] are affected through short-rate transmission, reserve balances, and wholesale funding.
- [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], and other securities firms are affected through repo, JGB collateral, and dealer balance sheets.
- [[financial-regulators/boj-monetary-policy]] sets the policy framework; this page explains the market surface.

## Boundary Cases

- **Call market vs repo market**: uncollateralized call lending is not the same as secured repo or JGS lending.
- **Policy target vs actual rate**: the BoJ can encourage the O/N call rate around a target, but the actual rate is still a market statistic.
- **Tanshi company vs bank**: tanshi companies are market intermediaries, not deposit-taking banks in the ordinary retail sense.
- **Collateralized call vs repo**: both are secured, but repo is a securities-financing transaction with a repurchase commitment, while collateralized call is secured lending pledging collateral; the two are not the same legal structure.
- **Uncollateralized call vs interbank deposit**: bilateral interbank deposits are economically related but are not the brokered call-market transactions that feed the published call rate.
- **Term call vs overnight call**: term uncollateralized call transactions exist, but the policy-relevant headline is the overnight rate.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/boj-open-market-operations]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Call Money Market Data.
- Bank of Japan: How have the Bank's guidelines for market operations changed?
- Bank of Japan: What are market operations?
- Bank of Japan: framework paper explaining the money-market adjustment role of the uncollateralized overnight call market.
- Bank of Japan: explanation of "Statistics on Call Money Market," including the note that the collateralized call rate has not been calculated since April 2016 due to absence of tanshi-intermediated transactions.
- Bank of Japan Review (2024): developments in Japanese money markets, including securities-firm incentives for term uncollateralized call transactions.
