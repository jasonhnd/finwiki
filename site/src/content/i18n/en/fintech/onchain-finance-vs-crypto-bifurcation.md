---
source: fintech/onchain-finance-vs-crypto-bifurcation
source_hash: 4345096a47b28357
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "On-chain finance and crypto · a comparison framework based on a continuum"
translated_at: 2026-07-29T16:47:45.885Z
---
# On-chain finance and crypto · a comparison framework based on a continuum


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial regulation — legal framework for tokens, crypto-assets and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-tier stablecoin legal framework (JPYC, USDC and Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> Blockchain projects are distributed along a continuum from open-participation networks to permissioned institutional-finance infrastructure. A binary classification of “crypto” and “on-chain finance” is useful as an analytical frame, but it is not a factual classification showing complete separation: companies such as Circle operate across several areas, and hybrid designs also exist.

## Conclusion

Compare open participation, identity verification, legal settlement assets and operating entities separately. The two columns are ideal types; do not automatically classify each network into one of them.

The table below is an analytical model of the two poles, drawing on public materials from the [Canton Network](https://docs.digitalasset.com/integrate/devnet/canton-network-overview/index.html), [Progmat overview](https://progmat.co.jp/about/), and [DTCC Digital Assets](https://www.dtcc.com/digital-assets).

| Perspective | Example of open participation | Example of permissioned, institutional finance |
|---|---|---|
| Participation | Open at the protocol level; applications, issuers or exchanges may impose restrictions | Participants, nodes and transaction visibility are managed by contract and permission |
| Main purpose | Open asset transfers, trading and collateral use | Issuance, settlement, reconciliation and privacy management for regulated assets |
| Representative operating form | Foundation, DAO, private issuer, distributed validators | Financial-institution consortium, technology provider, regulated operator |
| KYC | Even when absent from the base layer, it may be performed at fiat gateways, issuance or exchanges | Often embedded at the participant, account and asset-transfer layers |
| Interoperability | Public chains, bridges and exchanges | Permissioned networks, existing market infrastructure and limited external connections |

## Reasoning

- The word “blockchain” alone does not identify participation rights, legal claims, settlement assets or data visibility.
- KYC at the issuer or exchange level is possible even on a public chain, while permissioned infrastructure can be designed to connect with external networks.
- Materials on the [[systems/canton-overview|Canton Network]] and similar systems describe institutional privacy and interoperability, but do not support a value judgment that they are “anti-crypto.”

## Applicable When

- Before starting a blockchain strategy discussion, when it is necessary to clarify which part of the continuum the other party is discussing
- When a proposal introduces USDT/USDC into an institutional-investor use case (see [[fintech/wall-street-crypto-network-neutrality|Wall Street × Crypto neutral arms dealer]])
- When decomposing the target market of a new stablecoin project
- Before using the word “blockchain” in a stakeholder presentation

## Source

- Alignment: [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-tier stablecoin structure]] (Project Pax = institutional vs JPYC/USDC retail = the same separation axis)
- Alignment: [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]] (independence of the B2B track)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional-market stablecoin = deposit token]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-tier stablecoin legal framework]]
- [[fintech/retail-stablecoin-dual-bind|Structural tradeoff for retail stablecoins]]
- [[fintech/fx-onchain-as-stablecoin-final-boss|Moving FX on-chain = the final challenge for stablecoins]]
<!-- /wiki-links:managed -->
