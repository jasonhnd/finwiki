---
source: systems/hyperlane-ism-modular-security
source_hash: eb41f86a257a0ba3
lang: en
status: machine
fidelity: ok
title: "Hyperlane Interchain Security Modules (ISM) · Pluggable Verification Layer"
translated_at: 2026-06-15T04:09:41.143Z
---

# Hyperlane Interchain Security Modules (ISM) · Pluggable Verification Layer

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Selectable from more than 5  standard ISM types ^[extracted]
- MultisigISM is the default · similar to the LayerZero DVN ^[extracted]
- OptimisticISM introduces a 7 -day challenge period + watcher ^[extracted]
- EigenLayerISM inherits cross-chain security from Ethereum L1  restaking ^[extracted]
- AggregationISM permits combinations of multiple ISMs (e.g., a multisig + optimistic double) ^[extracted]
- RoutingISM routes to different ISMs depending on message type ^[extracted]

## ISM Security Composition

**Main ISM types**:

| ISM | Verification method | Applicable scenario |
|---|---|---|
| **MultisigISM** | N-of-M signatures · similar to LayerZero DVN | Default option · balance of security and speed |
| **OptimisticISM** | 7 -day challenge period + watcher | High-value, low-frequency cross-chain · similar to OP withdrawal |
| **CCIPReadISM** | Coordinates with Chainlink CCIP | When using Hyperlane infrastructure while obtaining Chainlink backing |
| **AggregationISM** | Combination of multiple ISMs (a multisig + optimistic double) | Extremely high security requirements (institutional / large-lot) |
| **RoutingISM** | Routes to different ISMs depending on message type | Complex apps · different security levels per message type |
| **EigenLayerISM** | Restaking-secured · ETH collateral | When seeking to inherit Ethereum L1  economic security |

**ISM selection trade-offs**:
- **Speed vs security**: multisig is fast but carries single-point-of-failure risk · optimistic is secure but has a 7 -day delay
- **Cost vs trust**: CCIPRead borrows Chainlink's trust but increases cost · a self-operated multisig is cheap but requires operating validators yourself
- **Simple vs flexible**: a single ISM is simple · Aggregation is secure but gas-heavy

**The special significance of EigenLayerISM**: it introduces the "crypto-economic security = ETH collateral" model into cross-chain verification. The ETH staked by validators is restaked to Hyperlane verifiers via EigenLayer —— if a verification error occurs · the slash takes place at the EigenLayer layer · and the loss is ultimately borne by the Ethereum L1  stake. This directly ties restaking to cross-chain security and is one of the early cases where the modular-middleware + restaking concept was realised (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]).

## Origin & evolution

The modularisation of ISMs was a core design at the time of the Hyperlane 2022 年 rename —— the team recognised that a "one-size-fits-all cross-chain security model" could not meet the requirements of every app. Initially there was only MultisigISM, but over 2023-2024 年 OptimisticISM / CCIPReadISM / AggregationISM were added in sequence.

The 2024 年 EigenLayer integration was an important milestone in ISM modularisation —— it showed that Hyperlane is compatible with arbitrary verification primitives · and is not limited to its own validator set. This contrasts with the closed verifier of the LayerZero DVN.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
<!-- /wiki-links:managed -->

## Sources

- Hyperlane ISM docs(docs.hyperlane.xyz/docs/protocol/ISM)
- Hyperlane docs — https://docs.hyperlane.xyz/
