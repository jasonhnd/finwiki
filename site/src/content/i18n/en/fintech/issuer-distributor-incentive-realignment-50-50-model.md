---
source: fintech/issuer-distributor-incentive-realignment-50-50-model
source_hash: da176ae5402a3759
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Revenue sharing between USDC issuer and distributor · the public Coinbase ↔ Circle contract structure"
translated_at: 2026-07-29T16:43:44.438Z
---
# Revenue sharing between USDC issuer and distributor · the public Coinbase ↔ Circle contract structure

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial regulation — legal framework for tokens, crypto-assets and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-tier stablecoin legal framework (JPYC, USDC and Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> The agreement between Coinbase and Circle is not a simple “50/50” split of all revenue. According to Circle's SEC filing, it consists of issuer retention; product economics based on USDC balances within each company's products; and ecosystem economics under which Coinbase receives 50% of the remaining payment base after payments to approved participants. Future renegotiation is possible, but the GENIUS Act alone does not make it inevitable.

## Key facts

- Circle earns reserve income from USDC reserve assets and records payments to Coinbase as distribution costs.
- The agreement deducts issuer retention and payments to participants from the daily payment base, then calculates balance attribution and ecosystem economics.
- Coinbase's 50% applies to “the remaining payment base after payments to approved participants,” so it is not a fixed 50% of Circle's entire reserve income.
- Amounts move with USDC in circulation, interest rates, custody location, other participants and contractual deductions. Do not reduce them to a simple annualized rate.

## Mechanism / How it works

**Public contract structure**: Coinbase is a major USDC distribution and custody channel, while Circle is responsible for issuance and reserve-asset management. The companies have continued to collaborate under a Collaboration Agreement since Centre was dissolved.

The following table summarizes the calculation sequence described in Circle's [SEC S-1](https://www.sec.gov/Archives/edgar/data/1876042/000119312525178989/d839239ds1.htm) without estimating confidential rates or future terms.

| Calculation element | Publicly described mechanism | Interpretation note |
|---|---|---|
| Issuer retention | Circle retains an amount to recover part of the overhead of issuance and reserve management | The public description does not disclose enough detail to recalculate the full amount or formula |
| Party product economics | Circle / Coinbase receives an amount based on the proportion of balances held in each company's custody products and managed wallet | Distribution is affected by “where USDC is held” |
| Approved-participant payments | Payments to other approved participants in the USDC ecosystem are deducted | This is not a closed 50/50 arrangement between only two companies |
| Ecosystem economics | Coinbase receives 50% of the remaining payment base after deductions | This is not equivalent to 50% of all reserve income |

This structure aligns incentives between issuance and distribution, but post-legislation negotiations and alternative-chain strategies must be confirmed separately through contract amendments, SEC filings and company announcements.

## Origin & evolution

Centre was founded in 2018 and Coinbase and Circle subsequently expanded USDC issuance and distribution together. Centre was dissolved in 2023 and Circle became the sole issuer of USDC, with the economic terms between the two companies moving to the Collaboration Agreement. Circle's 2025 SEC filing discloses the layered distribution method above. Track any effect of future legislation or product launches on contract terms through updated SEC filings.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc strategy · recovering 50%]]
- [[fintech/stablecoin-revenue-split-economics|Stablecoin revenue-sharing economics]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|Stablecoin public-chain and token-strategy trilemma]]
- [[fintech/circular-reserve-asset-flywheel-overview|Mutually locked reserve-asset flywheel · overview]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation status]]
<!-- /wiki-links:managed -->

## Sources

- Circle SEC S-1 — https://www.sec.gov/Archives/edgar/data/1876042/000119312525178989/d839239ds1.htm
- Coinbase SEC filings — https://investor.coinbase.com/financials/sec-filings/default.aspx
