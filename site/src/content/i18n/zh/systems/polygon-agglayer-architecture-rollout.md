---
source: systems/polygon-agglayer-architecture-rollout
source_hash: 4f9c8abdcc1f3863
lang: zh
status: machine
fidelity: ok
title: "Polygon AggLayer 架构与 2024-2026 rollout · CDK + 统一桥 + ZK 聚合"
translated_at: 2026-06-01T04:15:40.165Z
---

# Polygon AggLayer 架构与 2024-2026 rollout · CDK + 统一桥 + ZK 聚合

## TL;DR

Polygon 2024-2026 年的战略转向，是从 **“Polygon PoS sidechain”** 转向 **“AggLayer + CDK 多链协议层”**：Polygon CDK 让任意团队可以构建自己的 ZK rollup，AggLayer 在 CDK 链之间提供统一桥 + pessimistic proof + ZK 证明聚合，目标是在 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極]] 中纳入“intra-stack interop”这一极。MATIC → POL 迁移（2024-09 主网）把 token 模型从“Polygon PoS gas + staking”改为“AggLayer 全栈 gas + restaking”，Polygon PoS 本身从战略中心降级为众多 AggLayer 链中的 1 个。早期 CDK 合作链包括 Astar zkEVM、Manta Pacific（后撤回）、Immutable zkEVM、X1（OKX）、Palm、IDEX 等，但在 2025-2026 年流失明显，AggLayer v0.2 - v0.3 的实际连接数量大幅低于 2024 年初的预测。

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] 阅读，以确认 AggLayer 在 LayerZero / Hyperlane / CCIP / Cosmos IBC 中的位置，并对照 [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]] 与 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] 理解 Polygon ZK rollup 在 Ethereum L2 经济学中的位置。

## Polygon 历史阶段 · PoS → zkEVM → AggLayer

- **Phase 1（2017-2020）：Matic Network**：Plasma + PoS sidechain、EVM 兼容、低 gas 为主轴，2020-05 主网上线
- **Phase 2（2021-2023）：Polygon PoS 黄金期**：DEX（QuickSwap, Uniswap V3）+ NFT（OpenSea + Aavegotchi）+ 游戏（Sandbox）一度把 TVL 推高至 $5B 以上
- **Phase 3（2023-2024）：多产品扩张**：Polygon zkEVM（2023-03 主网）+ Polygon Miden（STARK-based VM）+ Polygon Avail（DA layer，后独立）+ Polygon CDK（2023-08）
- **Phase 4（2024-2026）：AggLayer 转向**：2024-02 AggLayer v0.1 启动，2024-09 MATIC → POL 迁移，2024-Q4 AggLayer v0.2 引入 pessimistic proof，2025-2026 v0.3+ 持续迭代，Polygon PoS 的战略地位下降

## AggLayer 架构

AggLayer 不是 1 条链，而是**跨多个 ZK rollup 的 settlement + 桥协议**：

- **Unified Bridge**：所有 AggLayer 连接链共享 1 个 canonical bridge contract（部署在 Ethereum L1 ），用户从 chain A 向 chain B 转移资产时通过 unified bridge，不需要独立 wrapped token
- **Pessimistic Proof（v0.2, 2024-Q4）**：防止特定 AggLayer 链提取超过其存款的资产（bridge insolvency 防护），即使该链的 ZK proof 系统存在 bug 也有效
- **ZK Proof Aggregation**：将多个 AggLayer 链的 state transition proof 聚合为 1 个 L1 verification，大幅降低单链 L1 verification cost
- **State Sharing（roadmap）**：跨链异步消息 + 最终状态共享（类似 Cosmos IBC + Ethereum L2 跨 rollup 通信），仍在 roadmap 中
- **POL 作为 gas + staking**：POL 可在 AggLayer 内对多条链 restake，类似 [[systems/eigenlayer-overview|EigenLayer]]，但范围限定在 Polygon stack

与传统 Ethereum L2 的差异：各 Optimism rollup 或 Arbitrum chain 都有**独立的 canonical bridge**，跨 rollup 资产转移依赖第三方桥（[[systems/layerzero-v2-omnichain-messaging|LayerZero V2]] / [[systems/hyperlane-overview|Hyperlane]] / [[systems/chainlink-ccip-institutional-messaging|CCIP]]）。AggLayer 试图在 stack 内部解决这种“跨 rollup 的信任前提 + bridge fragmentation”。

## Polygon CDK（Chain Development Kit）

CDK 是 **OP Stack / Arbitrum Orbit / zkSync ZK Stack 的 Polygon 版**：

- **基本组件**：Polygon zkEVM prover（Plonk + KZG base）+ sequencer + RPC + bridge contract template
- **可选 DA**：Ethereum blob（默认，昂贵）/ Polygon Avail / EigenDA / Celestia
- **CDK Erigon vs CDK OP Stack**：2024 以后 Polygon Labs 同时维护 2 条 CDK 路线 — Erigon-based（原始 zkEVM 路线）+ OP Stack-based（面向已选择 OP Stack 的团队开放），反映 Polygon 在“保护自有 prover 投资”和“参与 OP 大生态”之间摇摆
- **AggLayer 连接是可选项**：CDK 链可选择不接入 AggLayer，反之亦然（但 AggLayer 连接是 Polygon Labs 推进的核心路径）

## Partner chains · 列表与流失

2024 年初 Polygon 公布的 CDK / AggLayer 合作链：

- **Astar zkEVM**（日本生态系统，Astar Network 主导，2024-03 上线）— 2024-Q4 因用户采用不足而实质 wind down
- **Manta Pacific**（2024 年初评估 CDK，后采用 OP Stack + Celestia，未与 Polygon 达成实质深度整合）
- **Immutable zkEVM**（游戏 L2，2023-11 上线）— 2025 年仍持续运营，但流量低于预期
- **X1 / OKX Chain**（OKX 交易所 L2，2024-Q1 testnet）— 2025 年更名为 X Layer 并持续运营
- **Palm Network**（NFT-focused，ConsenSys 起源）— 已迁移至 CDK
- **IDEX**（DEX 自有 L2）
- **Gnosis Pay rail（部分组件）**：探索性连接
- **Wirex** / **OKX** 等钱包 / 交易所 L2 项目

**流失原因**：OP Stack 的网络效应（Base / OP Mainnet / Worldcoin / Zora）+ Arbitrum Orbit 生态（Xai / Sanko 等游戏链）+ Manta 等 Celestia DA 阵营，使 CDK 在“RaaS / app-chain”市场份额于 2025-2026 年持续被压缩。

## MATIC → POL 迁移与商业模式

2024-09 POL token 正式主网上线，1:1 替代 MATIC：

- **POL 角色扩展**：从“Polygon PoS gas + staking”扩展为“AggLayer 多链 gas + restaking + governance”
- **Polygon PoS 的命运**：仍继续运营，但战略地位降级为“AggLayer 内的普通链 1 条”，2024-2026 年期间 TVL 从峰值 $5B+ 降至 ~$700M-1B 区间（DefiLlama 口径）
- **Polygon zkEVM Mainnet Beta**：2023 年上线后 TVL 一直低于 $100M，2025 年实质进入维护模式，Polygon Labs 的战略重心转向 CDK + AggLayer
- **POL 单一 token 经济模型**：将 MATIC 的“fixed supply”改为**年度 1% emission**（2% 分配给 validators / 1% 分配给 community treasury 等，具体比例迭代），长期通胀模型接近 Cosmos ATOM、ETH 等

商业模式从“Polygon PoS gas 销售”转变为“CDK stack + AggLayer 协议层 fee + POL value capture from staking 销售”。

## AggLayer vs 跨链协议对照

| 观点 | AggLayer | [[systems/layerzero-v2-omnichain-messaging\|LayerZero V2]] | [[systems/hyperlane-overview\|Hyperlane]] | [[systems/chainlink-ccip-institutional-messaging\|CCIP]] |
|---|---|---|---|---|
| 范围 | Polygon stack 内 | 多个生态系统（EVM + Solana + Aptos 等） | 多个生态系统 | 多个生态系统 |
| 信任模型 | Unified bridge + pessimistic proof | DVN（Decentralized Verifier Networks） | ISM（Interchain Security Modules） | Chainlink DON |
| 资产模型 | Unified bridge（canonical） | OFT（多链原生发行） | warp route | 标准化跨链 token |
| ZK 聚合 | 有 | 无 | 无 | 无 |
| 对象 | 选择 Polygon stack 的 rollup | 任意 L2 / L1 | 任意 L2 / L1，模块化 | 机构 + 监管金融 |

AggLayer 的差异化在于 **“stack 内 trust-minimized + ZK 聚合”**，但代价是只能服务 Polygon CDK chain。详细对比见 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]。

## Polygon 在 RWA / 机构场景中的位置

- **Polygon PoS RWA**：2024-2026 年部署在 Polygon PoS 上的 RWA 包括 Hamilton Lane / Securitize / Backed Finance / Ondo 等，但份额持续被 Ethereum L1（以 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 为起点）+ Stellar + Avalanche 夺走
- **Polygon ID**：基于 Iden3 的 ZK identity，2024-2026 年在受监管 DeFi 和 KYC 场景中有限展开
- **Polygon Enterprise / Supernets 概念**：2022-2023 年提出的企业链方向在 2024 年以后基本停止推进；与 Avalanche subnet / Cosmos appchain 的企业销售战略对照，Polygon 在企业方向明显落后
- **vs 机构 DLT**：对照 [[systems/canton-overview|Canton]] 与 [[systems/hyperledger-besu-overview|Hyperledger Besu]]，Polygon 未进入 G-SIB 代币化主战场

## AggLayer v0.x 迭代详情

AggLayer 不是 1 次发布，而是**持续迭代的 stack**，2024-2026 主要版本节奏：

- **v0.1（2024-02）**：Unified Bridge 基础设施 + 第一批 Polygon zkEVM + Astar zkEVM 接入，本质上是“共享 L1 bridge contract”
- **v0.2（2024-Q4）**：引入 Pessimistic Proof — 即使特定 AggLayer 链的 ZK proof 系统存在 bug，该链也不能从 Unified Bridge 提取超过 deposit 的资产，这是 AggLayer 对“stack 内 risk isolation”的核心承诺
- **v0.3（2025）**：部分跨链消息 primitive + zkEVM prover 性能改进，实际连接链数量低于 v0.1 发布时
- **v1.0（roadmap）**：跨链原子执行 + ZK proof aggregation 的生产部署
- **State Sharing**：跨链共享 storage slot 的能力，仍在 roadmap 中，与 Optimism Superchain 的共享 sequencer + Arbitrum BoLD 路线竞争
- **POL restaking 连接**：2025-2026 年尝试把 POL 作为 AggLayer 内“decentralized verifier”的质押资产，类似 [[systems/eigenlayer-overview|EigenLayer]] 在 ETH 生态中的位置，但主网实际接入较慢

## Polygon zkEVM prover 路线 · Plonk + KZG + Hardfork 节奏

- **Plonky2 / Plonky3**：Polygon Labs 自研 STARK + Plonk hybrid prover，在 2023-2024 年迭代，目标为 prover time < 1 分钟 / block
- **Pessimistic Proof 使用 Plonk + KZG**：依赖 Ethereum L1 KZG precompile（EIP-4844），降低 verification cost
- **Hardfork 节奏**：Polygon zkEVM 每 3-6 个月 hardfork（Dragonfruit / Etrog / Elderberry / Feijoa 等命名风格），与 Ethereum L1 fork 节奏不同步
- **vs zkSync / Scroll / Linea**：zkSync Era 使用 Boojum（自研 STARK），Scroll 使用自研 zkEVM + Halo2，Linea 使用 ConsenSys lattice-based prover，Polygon 在 prover 性能和 Type-1 兼容度上并无绝对优势

## 与其他 RaaS / 多链协议的竞争

| 观点 | Polygon CDK / AggLayer | OP Stack / Superchain | Arbitrum Orbit | zkSync ZK Stack | Eclipse / Solana 系 |
|---|---|---|---|---|---|
| 主要 prover / 共识 | ZK（Plonk）+ Pessimistic | Optimistic + Fault Proof | Optimistic + BoLD | ZK（Boojum） | SVM + Celestia |
| 已知部署链数量 | 5-10 active | 50+（Base / OP / World / Zora / Mode 等） | 20+（Xai / Sanko / DeGen 等） | 5-10 | 1-3 |
| 旗舰 chain | （无） | Base | Arbitrum One | zkSync Era | Eclipse Mainnet |
| Unified Bridge | 有（AggLayer Unified Bridge） | 无（各 OP chain 独立） | 无（各 Orbit chain 独立） | Hyperchain shared bridge（roadmap） | 单一链中心 |
| 共享 sequencer | （无） | 计划（2026+） | （无） | （无） | （无） |
| RaaS 顶级供应商 | Polygon Labs / Caldera | Conduit / Caldera / Alchemy | Conduit / Caldera / Alchemy | Matter Labs | （生态内部自有部署） |

Polygon CDK 的 AggLayer 是唯一把 **“stack 内 unified bridge”** 定位为核心差异化的方式，但 OP Stack 网络效应过强是最大阻力。

## 用例 · 谁实际在 Polygon CDK / AggLayer 上运行

- **Astar zkEVM**（2024-03）：日本生态 dApp 接入，2024-Q4 实质 wind down
- **X Layer**（旧 X1, OKX）：2024-Q1 testnet → 主网，持续运营但活跃度低于 OKX 主链
- **Immutable zkEVM**：Immutable Games 自有 L2，2023-11 主网，游戏 GMV 低于 OP Stack 系游戏链
- **Palm Network**：NFT 与 Web3 IP 平台，CDK 迁移后流量稳定但较小
- **Wirex Pay**：Wirex 加密卡 / 钱包后端
- **Aavegotchi（Gotchichain）**：游戏专用 chain
- **OKBC / Gnosis Pay 部分组件**：实际接入程度有限
- **总数**：2026-Q1 AggLayer 连接主网链约 5-10 active，大幅低于 OP Stack 的 50+ active

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
