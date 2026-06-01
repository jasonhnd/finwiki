---
source: systems/polygon-agglayer-architecture-rollout
source_hash: 4f9c8abdcc1f3863
lang: en
status: machine
fidelity: ok
title: "Polygon AggLayer Architecture and 2024-2026  Rollout · CDK + Unified Bridge + ZK Aggregation"
translated_at: 2026-06-01T04:15:40.166Z
---

# Polygon AggLayer Architecture and 2024-2026  Rollout · CDK + Unified Bridge + ZK Aggregation

## TL;DR

Polygon's strategic shift in 2024-2026 年 is a transformation from **"Polygon PoS sidechain"** to **"AggLayer + CDK multichain protocol layer"**: Polygon CDK lets any team build its own ZK rollup, while AggLayer provides a unified bridge + pessimistic proof + ZK proof aggregation across CDK chains, aiming to capture the "intra-stack interop" pole in [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極]]. The MATIC → POL migration (2024-09  mainnet) changed the token model from "Polygon PoS gas + staking" to "AggLayer full-stack gas + restaking," and Polygon PoS itself was demoted from the strategic center to one of many AggLayer chains, 1  in number. Early CDK partner chains included Astar zkEVM, Manta Pacific (later withdrawn), Immutable zkEVM, X1 (OKX), Palm, IDEX, etc., but outflows became evident in 2025-2026 年, and the actual number of AggLayer v0.2 - v0.3  connections is far below the forecasts made at the beginning of 2024 年.

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] to confirm AggLayer's position among LayerZero / Hyperlane / CCIP / Cosmos IBC, and compare with [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]] and [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] to understand Polygon ZK rollups' position in Ethereum L2  economics.

## Polygon History Stages · PoS → zkEVM → AggLayer

- **Phase 1 (2017-2020): Matic Network**: Plasma + PoS sidechain, EVM compatibility, low gas as the main axis, 2020-05  mainnet launch
- **Phase 2 (2021-2023): Polygon PoS golden age**: DEX (QuickSwap, Uniswap V3) + NFT (OpenSea + Aavegotchi) + games (Sandbox) briefly pushed TVL above $5B
- **Phase 3 (2023-2024): multiproduct expansion**: Polygon zkEVM (2023-03  mainnet) + Polygon Miden (STARK-based VM) + Polygon Avail (DA layer, later independent) + Polygon CDK (2023-08)
- **Phase 4 (2024-2026): AggLayer shift**: 2024-02 AggLayer v0.1  launch, 2024-09 MATIC → POL migration, 2024-Q4 AggLayer v0.2  introduces pessimistic proof, 2025-2026 v0.3+ continues iterating, and Polygon PoS's strategic position declines

## AggLayer Architecture

AggLayer is not 1  chain, but a **settlement + bridge protocol spanning multiple ZK rollups**:

- **Unified Bridge**: all AggLayer-connected chains share 1  canonical bridge contract (deployed on Ethereum L1 ); when users move assets from chain A to chain B, they go through the unified bridge and do not need an independent wrapped token
- **Pessimistic Proof (v0.2, 2024-Q4)**: prevents a particular AggLayer chain from withdrawing assets beyond its deposits (bridge insolvency protection), and is effective even if that chain's ZK proof system has a bug
- **ZK Proof Aggregation**: aggregates state transition proofs from multiple AggLayer chains into 1  L1 verification, greatly reducing single-chain L1 verification cost
- **State Sharing (roadmap)**: cross-chain asynchronous messaging + final state sharing (similar to Cosmos IBC + Ethereum L2  cross-rollup communication), on the roadmap
- **POL as gas + staking**: POL can be restaked across multiple chains inside AggLayer; similar to [[systems/eigenlayer-overview|EigenLayer]], but limited to the Polygon stack

Difference from conventional Ethereum L2 s: each Optimism rollup or Arbitrum chain has an **independent canonical bridge**, and cross-rollup asset transfer depends on third-party bridges ([[systems/layerzero-v2-omnichain-messaging|LayerZero V2]] / [[systems/hyperlane-overview|Hyperlane]] / [[systems/chainlink-ccip-institutional-messaging|CCIP]]). AggLayer tries to solve this "cross-rollup trust assumptions + bridge fragmentation" inside the stack.

## Polygon CDK (Chain Development Kit)

CDK is the **Polygon version of OP Stack / Arbitrum Orbit / zkSync ZK Stack**:

- **Basic components**: Polygon zkEVM prover (Plonk + KZG based) + sequencer + RPC + bridge contract template
- **Optional DA**: Ethereum blob (default, expensive) / Polygon Avail / EigenDA / Celestia
- **CDK Erigon vs CDK OP Stack**: since 2024 , Polygon Labs has maintained 2  CDK tracks at the same time — Erigon-based (original zkEVM route) + OP Stack-based (opened to teams that already selected OP Stack), reflecting Polygon's tension between "protecting investment in its own prover" and "joining OP's large ecosystem"
- **AggLayer connection is optional**: CDK chains can choose not to connect to AggLayer, and vice versa (though AggLayer connection is the core route promoted by Polygon Labs)

## Partner chains · List and Outflows

CDK / AggLayer partner chains announced by Polygon at the beginning of 2024 年:

- **Astar zkEVM** (Japanese ecosystem, led by Astar Network, 2024-03  launch) — effectively wound down in 2024-Q4  due to insufficient user adoption
- **Manta Pacific** (evaluated CDK at the beginning of 2024 年, later adopted OP Stack + Celestia, and did not reach deep practical integration with Polygon)
- **Immutable zkEVM** (gaming L2, 2023-11  launch) — still operating in 2025 年, but traffic is below expectations
- **X1 / OKX Chain** (OKX exchange L2, 2024-Q1 testnet) — renamed X Layer in 2025 年 and continues operating
- **Palm Network** (NFT-focused, ConsenSys origin) — migrated to CDK
- **IDEX** (DEX proprietary L2)
- **Gnosis Pay rail (some components)**: exploratory connection
- **Wirex** / **OKX** and other wallet / exchange L2  projects

**Reasons for outflow**: OP Stack's network effect (Base / OP Mainnet / Worldcoin / Zora) + the Arbitrum Orbit ecosystem (gaming chains such as Xai / Sanko) + the Celestia DA camp such as Manta have continued compressing CDK's "RaaS / app-chain" market share in 2025-2026 年.

## MATIC → POL Migration and Business Model

In 2024-09  the POL token officially launched on mainnet, replacing MATIC at 1:1 :

- **Expanded role of POL**: from "Polygon PoS gas + staking" to "AggLayer multichain gas + restaking + governance"
- **Fate of Polygon PoS**: it continues operating, but its strategic status is demoted to "one ordinary chain 1  inside AggLayer"; in 2024-2026 年, TVL fell from a peak of $5B+ to the ~$700M-1B range (DefiLlama basis)
- **Polygon zkEVM Mainnet Beta**: since its 2023 年 launch, TVL has remained below $100M; in 2025 年 it effectively entered maintenance mode, and Polygon Labs shifted its strategic focus to CDK + AggLayer
- **POL single-token economic model**: MATIC's "fixed supply" was changed to **annual 1% emission** (2% allocated to validators / 1% to community treasury, etc.; exact ratios iterate), and the long-term inflation model is close to Cosmos ATOM, ETH, etc.

The business model changes from "selling Polygon PoS gas" to "selling CDK stack + AggLayer protocol-layer fees + POL value capture from staking."

## AggLayer vs Cross-chain Protocol Comparison

| Viewpoint | AggLayer | [[systems/layerzero-v2-omnichain-messaging\|LayerZero V2]] | [[systems/hyperlane-overview\|Hyperlane]] | [[systems/chainlink-ccip-institutional-messaging\|CCIP]] |
|---|---|---|---|---|
| Scope | Inside Polygon stack | Multiple ecosystems (EVM + Solana + Aptos, etc.) | Multiple ecosystems | Multiple ecosystems |
| Trust model | Unified bridge + pessimistic proof | DVN (Decentralized Verifier Networks) | ISM (Interchain Security Modules) | Chainlink DON |
| Asset model | Unified bridge (canonical) | OFT (native issuance across multiple chains) | warp route | standardized cross-chain token |
| ZK aggregation | Yes | No | No | No |
| Target | Rollups that chose the Polygon stack | Any L2 / L1 | Any L2 / L1, modular | Institutional + regulated finance |

AggLayer's differentiation lies in **"trust-minimized inside the stack + ZK aggregation"**, but the cost is that it can only serve Polygon CDK chains. See [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] for detailed comparison.

## Polygon's Position in RWA / Institutional Scenarios

- **Polygon PoS RWA**: RWA deployed on Polygon PoS in 2024-2026 年 includes Hamilton Lane / Securitize / Backed Finance / Ondo, but share continues to be taken by Ethereum L1 (starting from [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]) + Stellar + Avalanche
- **Polygon ID**: Iden3 -based ZK identity, deployed in a limited way in regulated DeFi and KYC scenarios in 2024-2026 年
- **Polygon Enterprise / Supernets concept**: the enterprise-chain direction presented in 2022-2023 年 basically stopped being promoted after 2024 年; compared with the enterprise sales strategies of Avalanche subnet / Cosmos appchain, Polygon clearly lags in the enterprise direction
- **vs institutional DLT**: compared with [[systems/canton-overview|Canton]] and [[systems/hyperledger-besu-overview|Hyperledger Besu]], Polygon did not enter the main battlefield of G-SIB tokenization

## AggLayer v0.x Iteration Details

AggLayer is not 1  release, but a **continuously iterated stack**. The rhythm of major versions in 2024-2026 :

- **v0.1 (2024-02)**: Unified Bridge basic infrastructure + first wave of Polygon zkEVM + Astar zkEVM connections; essentially a "shared L1 bridge contract"
- **v0.2 (2024-Q4)**: Pessimistic Proof introduced — even if a specific AggLayer chain's ZK proof system has a bug, that chain cannot withdraw assets from Unified Bridge beyond its deposits; this is AggLayer's core commitment to "risk isolation inside the stack"
- **v0.3 (2025)**: some cross-chain messaging primitives + zkEVM prover performance improvements; actual connected chain count is lower than when v0.1  was announced
- **v1.0 (roadmap)**: production deployment of cross-chain atomic execution + ZK proof aggregation
- **State Sharing**: the ability to share storage slots across chains, on the roadmap; competes with Optimism Superchain's shared sequencer + Arbitrum BoLD route
- **POL restaking connection**: in 2025-2026 年, Polygon tries to make POL the staking asset for "decentralized verifiers" inside AggLayer; this is similar to the position [[systems/eigenlayer-overview|EigenLayer]] occupies in the ETH ecosystem, but actual mainnet connection is slow

## Polygon zkEVM Prover Route · Plonk + KZG + Hardfork Rhythm

- **Plonky2 / Plonky3**: Polygon Labs' self-developed STARK + Plonk hybrid prover, iterated in 2023-2024 年, with a target prover time of < 1  minutes / block
- **Pessimistic Proof uses Plonk + KZG**: depends on Ethereum L1  KZG precompile (EIP-4844), reducing verification cost
- **Hardfork rhythm**: Polygon zkEVM hardforks every 3-6  months (naming style such as Dragonfruit / Etrog / Elderberry / Feijoa), asynchronous with the Ethereum L1  fork rhythm
- **vs zkSync / Scroll / Linea**: zkSync Era uses Boojum (self-developed STARK), Scroll uses self-developed zkEVM + Halo2, Linea uses ConsenSys lattice-based prover, and Polygon does not have an absolute advantage in prover performance or Type-1  compatibility

## Competition with Other RaaS / Multichain Protocols

| Viewpoint | Polygon CDK / AggLayer | OP Stack / Superchain | Arbitrum Orbit | zkSync ZK Stack | Eclipse / Solana family |
|---|---|---|---|---|---|
| Main prover / consensus | ZK (Plonk) + Pessimistic | Optimistic + Fault Proof | Optimistic + BoLD | ZK (Boojum) | SVM + Celestia |
| Known deployed chain count | 5-10 active | 50+ (Base / OP / World / Zora / Mode, etc.) | 20+ (Xai / Sanko / DeGen, etc.) | 5-10 | 1-3 |
| Flagship chain | (none) | Base | Arbitrum One | zkSync Era | Eclipse Mainnet |
| Unified Bridge | Yes (AggLayer Unified Bridge) | No (each OP chain independent) | No (each Orbit chain independent) | Hyperchain shared bridge (roadmap) | Single-chain centered |
| Shared sequencer | (none) | Planned (2026+) | (none) | (none) | (none) |
| Top RaaS suppliers | Polygon Labs / Caldera | Conduit / Caldera / Alchemy | Conduit / Caldera / Alchemy | Matter Labs | (in-ecosystem self deployment) |

Polygon CDK's AggLayer is the only approach that positions **"unified bridge inside the stack"** as its core differentiation, but the excessive strength of OP Stack's network effect is the largest headwind.

## Use Cases · Who Is Actually Running on Polygon CDK / AggLayer

- **Astar zkEVM** (2024-03): Japanese ecosystem dApp connection; effectively wound down in 2024-Q4 
- **X Layer** (formerly X1, OKX): 2024-Q1 testnet → mainnet, still operating but activity is lower than OKX's main chain
- **Immutable zkEVM**: Immutable Games proprietary L2, 2023-11  mainnet; game GMV is lower than OP Stack gaming chains
- **Palm Network**: NFT and Web3 IP platform; traffic is stable after CDK migration but small
- **Wirex Pay**: Wirex crypto card / wallet backend
- **Aavegotchi (Gotchichain)**: game-specific chain
- **OKBC / some Gnosis Pay components**: actual connection degree is limited
- **Total**: in 2026-Q1 , AggLayer-connected mainnet chains are roughly 5-10 active, far below the 50+ active chains of OP Stack

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]]
- [[systems/eigenlayer-overview|EigenLayer 総覧]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero V2 オムニチェーンメッセージ]]
- [[systems/hyperlane-overview|Hyperlane 総覧]]
- [[systems/chainlink-ccip-institutional-messaging|CCIP 機関メッセージ]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer official documentation
- Polygon CDK documentation & GitHub
- Polygon Labs blog — AggLayer v0.1 / v0.2 announcements, POL migration
- L2Beat — Polygon zkEVM, Astar zkEVM, Immutable zkEVM, X Layer tracking
- DefiLlama — Polygon PoS / zkEVM / Astar TVL history
- Messari "State of Polygon 2025"
- The Block — Polygon 2.0 coverage 2024-2026
