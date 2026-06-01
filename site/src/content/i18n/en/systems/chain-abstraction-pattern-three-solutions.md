---
source: systems/chain-abstraction-pattern-three-solutions
source_hash: caebf3b7b2704e95
lang: en
status: machine
fidelity: ok
title: "The 3  major mainstream approaches to chain abstraction"
translated_at: 2026-06-01T04:15:40.171Z
---
# The 3  major mainstream approaches to chain abstraction

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Polygon AggLayer launched in 2024.02 v1  and supports connecting non-Polygon chains in 2025 v2  ^[extracted]
- AggLayer's major partners: OKX X Layer / Astar zkEVM / Immutable, etc. ^[extracted]
- NEAR Chain Abstraction reached 2024.04  mainnet and supports 2025  12+ chains ^[extracted]
- NEAR core technologies: Chain Signatures (using MPC to control private keys on other chains) + NEAR Intents ^[extracted]
- EigenLayer reached 2024.04  mainnet, and at end-2025  TVL was > $15B ^[extracted]
- EigenDA / AltLayer / Hyperliquid are representative cases of the EigenLayer model ^[extracted]
- The 3  approaches follow completely different technical paths and may coexist ^[extracted]

## Mechanism / How it works

**1. Polygon AggLayer · shared liquidity + state**: Multiple chains share ZK proofs + a unified bridge + unified liquidity pools. Cross-chain assets can interoperate directly without wrapping. Polygon shifts from a "single chain" to "chain-abstraction infrastructure." **Abstraction layer**: liquidity + state. **Major partners**: OKX X Layer / Astar zkEVM / Immutable, etc. are connected.

**2. NEAR Chain Abstraction · intent-driven + multi-chain accounts**: Users use a single NEAR account to control private keys on other chains such as ETH / BTC / SOL through MPC (Chain Signatures). Intent input → solver network completes it through bidding → users see only the result. **Abstraction layer**: accounts + operational intents. NEAR shifts from L1  to an "account abstraction + cross-chain routing layer."

**3. EigenLayer / Hyperliquid model · shared security**: Multiple applications / chains share the ETH validator set (restaking). New chains do not need to bootstrap validator economics and can directly lease ETH security (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]). **Abstraction layer**: security / validator set. Representative cases include EigenDA / AltLayer / Hyperliquid (own L1  + borrowed security). **This is not UX-layer abstraction but security-layer abstraction** — users do not need to care "how many validators this chain has."

Comparison of the 3  approaches:

| Approach | Abstraction layer | Lead actor | UX impact |
|---|---|---|---|
| AggLayer | Liquidity + state | Polygon | Cross-chain assets can be used immediately |
| NEAR | Account + intent | NEAR | Control multiple chains with a single account |
| EigenLayer | Security / validator | EigenLabs | Chain developers borrow security |

## Origin & evolution

The 2022-2023  cross-chain bridge era (Wormhole / LayerZero / Axelar) solved "whether assets can move cross-chain" but did not solve UX. 2024.02 AggLayer launched → Polygon preempted the "liquidity abstraction" position. 2024.04 NEAR released Chain Signatures (MPC cross-chain keys) + Intents → NEAR shifted to "account abstraction." 2024.04 EigenLayer mainnet → "security abstraction" became possible through restaking. 2025 The 3  approaches each validated scalability: AggLayer connected 5+ non-Polygon chains, NEAR controlled 12+ chains, and EigenLayer TVL exceeded $15B. Whether the 2026+ 3  approaches merge or one wins remains unsettled.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer official documentation (liquidity + state abstraction) — https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction official documentation (account + intent abstraction) — https://docs.near.org/chain-abstraction/what-is
- NEAR MPC node implementation (threshold signatures for Chain Signatures) — https://github.com/near/mpc
- EigenLayer official documentation (security / validator-set abstraction) — https://docs.eigenlayer.xyz/
