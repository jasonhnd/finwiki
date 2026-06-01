---
source: systems/hyperledger-besu-vs-canton-migration
source_hash: b618a2b3e20083e7
lang: en
status: machine
fidelity: ok
title: "Hyperledger Besu vs Canton · JPM Main-Theater Migration Path"
translated_at: 2026-06-01T04:15:40.146Z
---
# Hyperledger Besu vs Canton · JPM Main-Theater Migration Path

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM began moving Kinexys's main theater to Canton in 2026 年 · completion planned for 2027 H1  ^[extracted]
- 4  factors drive the migration: DAML is suited to financial contracts · multi-party atomic · founding-member strategy · application-level isolation ^[extracted]
- Kinexys Chain will be retained after the migration as an internal testing + EVM-compatible backup ^[extracted]
- When other G-SIBs (Citi / HSBC / BNP) build new private chains, Besu remains the default ^[extracted]

## Mechanism / How it works

Quorum/Besu's advantage is EVM compatibility: the Solidity toolchain can be reused, and bank customers have high acceptance because they are already familiar with Ethereum concepts. Its weaknesses are that multi-party atomic settlement requires complex combinations of contracts, and Constellation's off-chain payload isolation is less clean from a regulatory perspective than application-level data isolation. Canton natively provides DAML (functional + obligation-based language) + multi-party atomic settlement + privacy by design, allowing institutional customers (investment banks + asset managers + custody) to collaborate on the same ledger without exposing full state to each other. In the 24/7  repo market + collateral mobility that JPM is trying to build on Kinexys, Canton's primitives fit materially better than Quorum.

## Origin & evolution

In 2015-2020 年, JPM incubated [[fintech/jpmorgan-jpmd-coin|JPMD]] / Onyx Coin on Quorum and validated the feasibility of stablecoin + internal chain. In 2021 年, Daml/Canton launched an institutional consortium, with DTCC + Goldman Sachs + Morgan Stanley participating. In 2024-11 , JPM renamed Onyx to Kinexys and began evaluating Canton at the same time. In 2026 Q2-Q3 , Kinexys completed partial functional switching to Canton (repo + collateral prioritized). The plan is to complete the full main-theater migration by 2027 H1 , with the Quorum fork converted into an internal testing environment. Citi CTS / HSBC TDS / BNP Securities Services follow similar paths but start from different points: Citi directly runs Canton + Hedera in parallel, while HSBC still centers Besu and has not announced a Canton plan (contrast with public-chain RWA cases such as [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] expanding back toward institutional chains).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-overview|Besu 総覧]]
- [[systems/canton-overview|Canton プロトコル総覧]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## Sources

- Hyperledger Besu docs — https://besu.hyperledger.org/
- Canton Network (Digital Asset) — https://www.canton.network/
