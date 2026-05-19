---
title: systems — Protocol / infrastructure / technical systems index
aliases: [systems index, protocol systems index, infrastructure index]
domain: systems
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: certain
tags: [systems, index, protocol, infrastructure]
status: active
sources:
  - "FinWiki P1 domain index build, 2026-05-19"
---

# systems — Protocol / infrastructure / technical systems index

## TL;DR

`systems/` contains **44 entries** about blockchain infrastructure, cross-chain protocols, account abstraction, validator economics, institutional DLT, Ethereum upgrades, formal specification, and wiki/tooling compliance. Use this page when expanding technical infrastructure notes rather than business/regulatory theses.

## Routing map

| Cluster | Count | Core route |
|---|---:|---|
| Cross-chain / interoperability | 17 | [[systems/cross-chain-four-poles-overview|cross-chain four poles]], [[systems/cctp-v2-overview|CCTP V2]], [[systems/hyperlane-overview|Hyperlane]] |
| Ethereum / account abstraction / Pectra | 10 | [[systems/erc-4337-overview|ERC-4337]], [[systems/erc-7702-overview|ERC-7702]], [[systems/pectra-upgrade-overview|Pectra]] |
| BFT / validator economics / L1 launch | 8 | [[systems/bft-validator-economy-overview|BFT validator economics]], [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT]], [[systems/l1-progressive-decentralization-three-phase|progressive decentralization]] |
| Institutional DLT / Canton / Besu | 7 | [[systems/canton-overview|Canton]], [[systems/canton-daml-technical-spec|DAML]], [[systems/hyperledger-besu-overview|Besu]] |

## Start here

- [[systems/cross-chain-four-poles-overview|跨链四极架构]]
- [[systems/cctp-v2-overview|CCTP V2 概览]]
- [[systems/chain-abstraction-pattern-overview|链抽象模式概览]]
- [[systems/erc-4337-overview|ERC-4337 概览]]
- [[systems/erc-7702-overview|ERC-7702 概览]]
- [[systems/bft-validator-economy-overview|BFT validator 经济学概览]]
- [[systems/canton-overview|Canton Network 概览]]

## Cross-chain / interoperability

- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional default]]
- [[systems/cross-chain-four-poles-selection-decision|cross-chain selection decision tree]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2]]
- [[systems/hyperlane-overview|Hyperlane overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/cctp-v2-overview|CCTP V2 overview]]
- [[systems/cctp-v2-technical-spec|CCTP V2 technical spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction overview]]
- [[systems/chain-abstraction-pattern-three-solutions|chain abstraction three solutions]]
- [[systems/chain-abstraction-pattern-value-capture|chain abstraction value capture]]

## Ethereum / AA / protocol upgrades

- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-4337-userop-bundler-flow|ERC-4337 UserOp/Bundler/EntryPoint]]
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

## BFT / validator economics / L1 architecture

- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]
- [[systems/bft-validator-economy-tempo-vs-arc|Tempo vs Arc validator design]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT consensus Rust implementations]]
- [[systems/l1-progressive-decentralization-three-phase|L1 progressive decentralization]]
- [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]
- [[systems/post-quantum-blockchain-day1-integration|post-quantum day-1 integration]]
- [[systems/vitalik-l1-l2-strategy-anchor|L1/L2 strategy anchor]]

## Institutional DLT / enterprise chains

- [[systems/canton-overview|Canton Network overview]]
- [[systems/canton-daml-technical-spec|Canton DAML technical spec]]
- [[systems/canton-mmf-coalition|Canton MMF coalition]]
- [[systems/hyperledger-besu-overview|Hyperledger Besu overview]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton migration]]
- [[systems/bitflyer-blockchain|bitFlyer Blockchain]]

## Tooling / compliance / methods

- [[systems/formal-spec-implementation-codesign|formal spec implementation co-design]]
- [[systems/hook-enforced-compliance|hook-enforced compliance]]

## Backlog

- Add a comparative table for CCTP V2 / CCIP / LayerZero / Hyperlane / Wormhole.
- Separate Ethereum AA entries from cross-chain entries if the namespace grows past 60 entries.
- Add diagrams for validator economics and institution-chain decentralization stages.
- Reconcile protocol notes with `fintech/` issuer and regulatory strategy entries.
