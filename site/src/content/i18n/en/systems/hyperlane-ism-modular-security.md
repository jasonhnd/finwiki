---
source: systems/hyperlane-ism-modular-security
source_hash: 97187833f8428bd1
lang: en
status: machine
fidelity: ok
title: "Hyperlane Interchain Security Modules (ISM) · Pluggable Verification Layer"
translated_at: 2026-06-01T04:15:40.110Z
---
# Hyperlane Interchain Security Modules (ISM) · Pluggable Verification Layer

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- More than 5  standard ISM types are available for selection ^[extracted]
- MultisigISM is the default and is similar to LayerZero DVN ^[extracted]
- OptimisticISM introduces a 7 -day challenge period + watcher ^[extracted]
- EigenLayerISM inherits cross-chain security from Ethereum L1  restaking ^[extracted]
- AggregationISM allows combinations of multiple ISMs (for example, a multisig + optimistic double layer) ^[extracted]
- RoutingISM routes to different ISMs according to message type ^[extracted]

## Mechanism / How it works

**Major ISM types**:

| ISM | Verification method | Application scenario |
|---|---|---|
| **MultisigISM** | N-of-M signatures, similar to LayerZero DVN | Default option; balances security and speed |
| **OptimisticISM** | 7 -day challenge period + watcher | High-value, low-frequency cross-chain flows; similar to OP withdrawal |
| **CCIPReadISM** | Coordinates with Chainlink CCIP | When using Hyperlane infrastructure while obtaining Chainlink backing |
| **AggregationISM** | Combination of multiple ISMs (multisig + optimistic double layer) | Extremely high security requirements (institutions / large flows) |
| **RoutingISM** | Routes to different ISMs according to message type | Complex apps; different security levels by message type |
| **EigenLayerISM** | Restaking-secured, ETH collateral | When inheriting Ethereum L1  economic security is desired |

**Trade-offs in ISM selection**:
- **Speed vs security**: multisig is fast but has single-point-of-failure risk; optimistic is secure but has a 7 -day delay
- **Cost vs trust**: CCIPRead borrows Chainlink's trust but costs more; self-operated multisig is cheaper but requires operating validators
- **Simplicity vs flexibility**: a single ISM is simple; Aggregation is secure but has higher gas costs

**Special significance of EigenLayerISM**: it introduces the model "crypto-economic security = ETH collateral" into cross-chain verification. Validators restake their staked ETH through EigenLayer to Hyperlane validators; if a verification error occurs, slashing occurs at the EigenLayer layer, and the loss is ultimately borne by Ethereum L1  stake. This directly connects restaking and cross-chain security, and is one of the early realized examples of modular middleware + the restaking concept (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]).

## Origin & evolution

ISM modularization was a core design when Hyperlane was renamed in 2022 年: the team recognized that a "one-size-fits-all cross-chain security model" could not satisfy the requirements of every application. Initially there was only MultisigISM, but OptimisticISM / CCIPReadISM / AggregationISM were added sequentially through 2023-2024 年.

The EigenLayer integration in 2024 年 was an important milestone for ISM modularization: it showed that Hyperlane is compatible with arbitrary verification primitives and is not limited to its own validator set. This contrasts with LayerZero DVN's closed verifier model.

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
