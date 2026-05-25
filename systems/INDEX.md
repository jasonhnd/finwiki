---
title: systems — Protocol / infrastructure / technical systems index
aliases: [systems index, protocol systems index, infrastructure index]
domain: systems
created: 2026-05-19
last_updated: 2026-05-20
last_tended: 2026-05-20
review_by: 2026-11-15
confidence: certain
tags: [systems, index, protocol, infrastructure]
status: active
sources: []
---

# systems — Protocol / Infrastructure / Technical Systems Index

## TL;DR

`systems/` contains **61 entries** about blockchain infrastructure, cross-chain protocols, account abstraction, validator economics, institutional DLT, Ethereum upgrades, formal specification, and protocol implementation topics.

## Routing Map

| Cluster | Count | Core route |
|---|---:|---|
| Cross-chain / interoperability | 17 | [[systems/cross-chain-four-poles-overview|cross-chain four poles]], [[systems/cctp-v2-overview|CCTP V2]], [[systems/hyperlane-overview|Hyperlane]] |
| Ethereum / account abstraction / Pectra | 10 | [[systems/erc-4337-overview|ERC-4337]], [[systems/erc-7702-overview|ERC-7702]], [[systems/pectra-upgrade-overview|Pectra]] |
| BFT / validator economics / L1 launch | 8 | [[systems/bft-validator-economy-overview|BFT validator economics]], [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT]], [[systems/l1-progressive-decentralization-three-phase|progressive decentralization]] |
| Institutional DLT / Canton / Besu | 7 | [[systems/canton-overview|Canton]], [[systems/canton-daml-technical-spec|DAML]], [[systems/hyperledger-besu-overview|Besu]] |
| Formal methods / compliance | 1 | [[systems/formal-spec-implementation-codesign|formal spec implementation co-design]] |

## Start Here

- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix (CCTP / CCIP / LayerZero / Hyperlane / Wormhole)]]
- [[systems/cctp-v2-overview|CCTP V2 overview]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction overview]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/canton-overview|Canton Network overview]]

## Cross-Chain / Interoperability

- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional default]]
- [[systems/cross-chain-four-poles-selection-decision|cross-chain selection decision tree]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2]]
- [[systems/hyperlane-overview|Hyperlane overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero / CCIP]]
- [[systems/cctp-v2-overview|CCTP V2 overview]]
- [[systems/cctp-v2-technical-spec|CCTP V2 technical spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction overview]]
- [[systems/chain-abstraction-pattern-three-solutions|chain abstraction three solutions]]
- [[systems/chain-abstraction-pattern-value-capture|chain abstraction value capture]]

## Ethereum / AA / Protocol Upgrades

- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-4337-userop-bundler-flow|ERC-4337 UserOp / Bundler / EntryPoint]]
- [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 native asset ERC-20 event compatibility]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]]

## BFT / Validator Economics / L1 Architecture

- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]
- [[systems/bft-validator-economy-tempo-vs-arc|Tempo vs Arc validator design]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT consensus Rust implementations]]
- [[systems/l1-progressive-decentralization-three-phase|L1 progressive decentralization]]
- [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]
- [[systems/post-quantum-blockchain-day1-integration|post-quantum day-1 integration]]
- [[systems/vitalik-l1-l2-strategy-anchor|L1/L2 strategy anchor]]

## Institutional DLT / Enterprise Chains

- [[systems/canton-overview|Canton Network overview]]
- [[systems/canton-daml-technical-spec|Canton DAML technical spec]]
- [[systems/canton-mmf-coalition|Canton MMF coalition]]
- [[systems/hyperledger-besu-overview|Hyperledger Besu overview]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton migration]]
- [[systems/bitflyer-blockchain|bitFlyer Blockchain]]

## Formal Methods / Compliance

- [[systems/formal-spec-implementation-codesign|formal spec implementation co-design]]
- [[systems/hook-enforced-compliance|hook-enforced compliance]]

## Wave 6-7 additions (2026-05)

### Comparison matrices (added 2026-05)

- [[systems/cross-chain-bridge-security-insurance-matrix-2026|Cross-chain bridge security × insurance matrix (2026)]] — bridge trust model × insurance coverage × incident history across major bridges.
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|zk-EVM rollup maturity comparison matrix (2026)]] — Scroll / zkSync / Polygon zkEVM / Linea / Taiko on equivalence stage, prover, and decentralization.
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|Restaking / AVS landscape matrix (EigenLayer vs Symbiotic)]] — restaking platforms, AVS roster, slashing rules, and operator distribution.

### 2026 protocol reality (Solana, DA, ZK-EVM, restaking, Bitcoin, L2)

- [[systems/solana-firedancer-validator-economics|Solana Firedancer validator economics]] — Firedancer client impact on validator cost, throughput, and decentralization curve.
- [[systems/data-availability-celestia-eigenda-blob-comparison|Data availability — Celestia / EigenDA / blob comparison]] — DA layer comparison and rollup migration implications.
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob economics impact (2026)]] — blob fee market behavior and downstream rollup cost structure.
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|Rollup market share 2026 (Arbitrum / Optimism / Base)]] — L2 share, sequencer revenue, and bridge flows update.
- [[systems/bitcoin-scaling-2026-stacks-lightning-bitvm|Bitcoin scaling 2026 (Stacks / Lightning / BitVM)]] — Bitcoin L2 / sidechain / Layer-2 scaling status and capital flows.
- [[systems/polygon-agglayer-architecture-rollout|Polygon AggLayer architecture rollout]] — AggLayer unified-bridge architecture and CDK chain onboarding.
- [[systems/institutional-dlt-adoption-comparison-2026|Institutional DLT adoption comparison (2026)]] — Canton / Besu / Corda / Quorum live workloads and migration patterns.
- [[systems/l2-agent-economics-arbitrum-base-op-comparison|L2 agent economics (Arbitrum / Base / OP)]] — per-L2 cost and latency profile for agent-driven transactions.

## Backlog

- Done: [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] covering CCTP V2 / CCIP / LayerZero / Hyperlane / Wormhole across messaging model, security, settlement, chain coverage, institutional adoption, fee economics, governance, incident history, and best-fit use cases.
- Separate Ethereum AA entries from cross-chain entries if the namespace grows past 60 entries.
- Add diagrams for validator economics and institution-chain decentralization stages.
- Reconcile protocol notes with `fintech/` issuer and regulatory strategy entries.
