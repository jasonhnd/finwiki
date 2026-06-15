---
source: securities/japan-stock-lending-market-route
source_hash: 041c74af30c284e1
lang: en
status: machine
fidelity: ok
title: "Japan stock lending market route"
translated_at: 2026-06-01T04:15:40.131Z
---

# Japan stock lending market route

## Overview

Stock lending in Japan is a market-infrastructure route that connects custodians, institutional investors, brokers, securities finance companies, margin trading, short selling, collateral, clearing, settlement, and corporate actions. It is analyzed as plumbing before it is analyzed as a bearish signal.

Use this page with [[securities/INDEX|securities domain]], [[securities/japan-short-selling-and-stock-loan-controls|short-selling and stock-loan controls]], [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]], [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]], [[financial-regulators/japan-securities-finance|Japan Securities Finance]], [[banking/japan-trust-bank-custody-map|trust-bank custody map]], [[securities/japan-market-infrastructure-map|market infrastructure map]], and [[money-market/jgb-repo-market-japan|JGB repo market]].

## Route Map

| Participant | Role |
|---|---|
| Asset owner | Owns securities economically, often through pension, investment trust, insurer, or institutional account. |
| Custodian / trust bank | Holds securities, handles corporate actions, and may support securities-lending programs by instruction. |
| Broker / securities firm | Borrows securities for customer margin, market-making, hedging, settlement coverage, or prime-brokerage-like needs. |
| [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | Supplies funds and securities to securities companies for standardized margin and broader securities-finance activities. |
| Clearing / depository | [[securities/japan-securities-clearing-corp|JSCC]] and [[securities/japan-securities-depository-center|JASDEC]] support post-trade settlement plumbing. |
| Collateral provider | Supplies cash or securities collateral depending on the lending agreement and market practice. |

## Flow Types

| Flow | Description | Public relevance |
|---|---|---|
| Margin-linked lending | Securities supplied to support standardized margin selling. | Central to retail margin and JSF data interpretation. |
| Institutional stock lending | Custody / asset-owner securities lent to brokers or other borrowers. | Can generate incremental revenue for beneficial owners. |
| Settlement coverage | Borrowing to separate delivery failure. | Operational, not necessarily directional. |
| Market-making / hedge borrow | Borrow for liquidity provision or hedging. | Often tied to derivatives or client-flow activity. |
| Special / scarce borrow | Issue-specific scarcity priced through fees / premium charge. | Can create squeeze, restriction, or monitoring signals. |

## Custody Link

Trust banks and custodian banks matter because the legal title, beneficial owner, lending instruction, collateral, corporate action, and voting-right routes are separated. Read [[banking/japan-trust-bank-custody-map|trust-bank custody map]] before interpreting stock-loan supply from accounts labelled as trust-bank nominee names.

## Control Questions

| Question | Public relevance |
|---|---|
| Who is the beneficial owner? | Custodian name does not identify economic owner. |
| Is the loan tied to standardized margin or OTC stock lending? | JSF / TSE data and institutional lending data are different surfaces. |
| What collateral is posted? | Collateral risk connects to money-market and repo analysis. |
| Who can recall the stock? | Corporate actions, voting, and settlement timing matter. |
| Is the borrow scarce? | Scarcity can affect premium charge, short-sale economics, and issue restrictions. |
| Is the lending program disclosed? | Public detail varies by custodian, fund, and asset owner. |

## JapanFG Relevance

- [[trust-banks/custody-bank|Custody Bank of Japan]] and [[trust-banks/master-trust-bank|Master Trust Bank of Japan]] matter as domestic asset-administration and nominee-name infrastructure.
- [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] and [[foreign-financial-institutions/state-street-japan|State Street Japan]] matter for global-custody and foreign-investor routes.
- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] is the dedicated securities-finance node.
- [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa Securities Group]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], and [[securities-firms/mufg-mums|MUMSS]] are broker / dealer-side anchors.

## Research Checklist

1. Determine whether the question is about lending supply, borrow demand, short selling, margin trading, or settlement coverage.
2. Separate custodian nominee from beneficial owner.
3. Check JSF / JPX issue-level restrictions and margin-trading data if the loan is margin-linked.
4. Check custodian / fund / asset-owner disclosure where a securities-lending program is material.
5. Link money-market questions to [[money-market/jgb-repo-market-japan|repo / collateral context]].

## Related

- [[securities/INDEX]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-regulators/japan-securities-finance]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[INDEX|FinWiki index]]

## Sources

- JSF: securities-financing business and corporate message pages.
- JSDA: borrowing and lending transaction guidelines for share certificates.
- JPX: margin trading overview and restrictions.
- JASDEC / JSCC / JPX: DVP, depository, clearing, and settlement public pages.
