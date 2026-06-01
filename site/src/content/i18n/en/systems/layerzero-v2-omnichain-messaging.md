---
source: systems/layerzero-v2-omnichain-messaging
source_hash: 7d7818745cbcaeb5
lang: en
status: machine
fidelity: ok
title: "LayerZero v2 · DVN-Configurable Omnichain Messaging Protocol"
translated_at: 2026-06-01T04:15:40.100Z
---
# LayerZero v2 · DVN-Configurable Omnichain Messaging Protocol

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Covers 100+ chains (EVM + Aptos + Solana + Tron + Cosmos, etc.), the broadest coverage ^[extracted]
- DVN model: the application self-selects the validator set + N-of-M threshold · security stack is replaceable ^[extracted]
- Stargate monthly average USDT/USDC cross-chain flow of $10B+ ^[extracted]
- Integrations include the DeFi long tail such as Tapioca / Radiant / Cake DeFi ^[extracted]
- Governance is private under LayerZero Labs · not decentralized (contrast with Chainlink) ^[extracted]

## Mechanism / How it works

An immutable **Endpoint contract** is deployed on each chain to handle send / receive. Messages issued from the source chain are verified by the **DVN combination** pre-specified by the application — for example, selecting "from Polyhedra (zk) + Google Cloud (mainstream signature) + Animoca (stake signature), among 3  choose 2 " forms an N-of-M multisig quorum. The **Executor** delivers on the target chain and pays target-chain gas. Because the application layer can freely combine DVNs, LayerZero can support both low-risk scenarios (a single DVN is enough) and high-value scenarios (zk + multisig + economically incentivized quorum). Stargate adds a liquidity pool + token model on top of the protocol, forming the retail-led position in USDC/USDT cross-chain flows (in contrast to the multi-bridge traffic distribution in [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]).

## Origin & evolution

In 2021 年, LayerZero v1  launched · early criticism focused on the possibility that the "default oracle + relayer dual signature" could collude. In 2024 年, v2  announced the DVN model · delegated security judgment to applications · and introduced Lightweight Verifier Chain at the same time. In 2025-2026 年, chain coverage exceeded 100 , forming an ecosystem with DVN providers such as Polyhedra / Google Cloud. Stargate remains the dominant USDT/USDC retail cross-chain pool in the v2  era · monthly average $10B+. LayerZero Labs remains a privately governed company → its path diverges from Chainlink's decentralized network: LayerZero competes on scale + flexibility, while Chainlink competes on institutional trust + unified insurance.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関対照]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極フレーム(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero V2 docs — https://docs.layerzero.network/v2
