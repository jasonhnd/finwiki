---
title: Polygon AggLayer 架构与 2024-2026 rollout · CDK + 统一桥 + ZK 聚合
aliases: [polygon-agglayer-architecture, agglayer-rollout, polygon-cdk-agglayer, polygon-pol-business-model, agglayer-partner-chains, polygon-pos-to-agglayer, polygon-zk-aggregation]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, polygon, agglayer, zk, l2, polygon-cdk, pol, matic, layer2]
status: active
sources:
  - https://docs.polygon.technology/agglayer/
  - https://polygon.technology/blog/agglayer-v0-2
  - https://docs.polygon.technology/cdk/
  - https://polygon.technology/blog/migrate-matic-to-pol
  - https://l2beat.com/scaling/projects
  - https://defillama.com/chain/Polygon
  - Polygon Labs blog & GitHub
  - The Block & Messari research on Polygon
---

# Polygon AggLayer 架构与 2024-2026 rollout · CDK + 统一桥 + ZK 聚合

## TL;DR

Polygon 2024-2026 的战略转型是从 **"Polygon PoS sidechain"** 变成 **"AggLayer + CDK 多链协议层"**:Polygon CDK 让任何团队 stack 出自己的 ZK rollup,AggLayer 提供跨 CDK chain 的统一桥 + pessimistic proof + ZK 证明聚合,目标是吃掉 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极]] 中 "intra-stack interop" 那一极。MATIC → POL 迁移(2024-09 mainnet)把代币模型从 "Polygon PoS gas + staking" 改成 "AggLayer 全栈 gas + restaking",Polygon PoS 本身从战略中心降级为众多 AggLayer 链之一。早期 CDK 合作链包括 Astar zkEVM、Manta Pacific(后撤回)、Immutable zkEVM、X1(OKX)、Palm、IDEX 等,但 2025-2026 流失明显,AggLayer v0.2 - v0.3 实际接入数远低于 2024 初的预期。

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]] for AggLayer 在 LayerZero / Hyperlane / CCIP / Cosmos IBC 中的定位,并对照 [[systems/chain-abstraction-pattern-overview|chain abstraction 模式总览]] 与 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 扩容]] 理解 Polygon ZK rollup 在 Ethereum L2 经济学中的位置。

## Polygon 历史阶段 · PoS → zkEVM → AggLayer

- **Phase 1(2017-2020):Matic Network**:Plasma + PoS sidechain,EVM 兼容,主打低 gas,2020-05 主网上线
- **Phase 2(2021-2023):Polygon PoS 黄金期**:DEX(QuickSwap, Uniswap V3)+ NFT(OpenSea + Aavegotchi)+ 游戏(Sandbox)推动 TVL 一度超 $5B
- **Phase 3(2023-2024):多产品扩张**:Polygon zkEVM(2023-03 mainnet)+ Polygon Miden(STARK-based VM)+ Polygon Avail(DA layer, 后独立)+ Polygon CDK(2023-08)
- **Phase 4(2024-2026):AggLayer 转型**:2024-02 AggLayer v0.1 启动,2024-09 MATIC → POL 迁移,2024-Q4 AggLayer v0.2 引入 pessimistic proof,2025-2026 持续 v0.3+ 迭代,Polygon PoS 战略地位下降

## AggLayer 架构

AggLayer 不是一条链,而是一个 **跨多条 ZK rollup 的 settlement + 桥协议**:

- **Unified Bridge**:所有 AggLayer-connected chain 共用一个 canonical bridge contract(部署在 Ethereum L1),用户从 chain A 到 chain B 资产转移走 unified bridge,无需独立 wrapped token
- **Pessimistic Proof(v0.2, 2024-Q4)**:防止某条 AggLayer chain 提取超出其存款的资产(bridge insolvency 防护),即使该 chain 的 ZK proof 系统出 bug
- **ZK Proof Aggregation**:多条 AggLayer chain 的 state transition proof 聚合成单个 L1 verification,显著降低单 chain 的 L1 verification cost
- **State Sharing(roadmap)**:跨 chain 异步消息 + 最终态共享(类似 Cosmos IBC + Ethereum L2 跨 rollup 通信),roadmap 中
- **POL 作为 gas + staking**:POL 在 AggLayer 内可被 restaked 给多条 chain,类似 [[systems/eigenlayer-overview|EigenLayer]] 但范围限定 Polygon stack

与传统 Ethereum L2 的差异:每条 Optimism rollup 或 Arbitrum chain 都有 **独立 canonical bridge**,跨 rollup 资产转移依赖第三方桥([[systems/layerzero-v2-omnichain-messaging|LayerZero V2]] / [[systems/hyperlane-overview|Hyperlane]] / [[systems/chainlink-ccip-institutional-messaging|CCIP]])。AggLayer 试图把这个 "跨 rollup 信任假设 + bridge fragmentation" 在 stack 内部解决。

## Polygon CDK(Chain Development Kit)

CDK 是 **OP Stack / Arbitrum Orbit / zkSync ZK Stack 的 Polygon 版本**:

- **基础组件**:Polygon zkEVM prover(基于 Plonk + KZG)+ sequencer + RPC + bridge contract template
- **可选 DA**:Ethereum blob(默认,贵)/ Polygon Avail / EigenDA / Celestia
- **CDK Erigon vs CDK OP Stack**:2024 之后 Polygon Labs 同时维护两条 CDK 路线 —— Erigon-based(原 zkEVM 路线)+ OP Stack-based(开放给已选 OP Stack 团队),反映 Polygon 在 "保护自家 prover 心血" 与 "拥抱 OP 大生态" 之间的撕裂
- **AggLayer 接入是自选项**:CDK 链可不接入 AggLayer,反之亦然(但接入 AggLayer 是 Polygon Labs 推动的核心路径)

## Partner chains · 名单与流失

2024 初 Polygon 宣布的 CDK / AggLayer 合作链:

- **Astar zkEVM**(日本生态,Astar Network 主导,2024-03 上线)— 2024-Q4 因 user adoption 不足实质性 wind down
- **Manta Pacific**(2024 早期评估 CDK,后改用 OP Stack + Celestia,与 Polygon 实际未深度整合)
- **Immutable zkEVM**(游戏 L2,2023-11 上线)— 2025 维持运营但流量低于预期
- **X1 / OKX Chain**(OKX 交易所 L2,2024-Q1 testnet)— 2025 改名 X Layer 持续运营
- **Palm Network**(NFT-focused, ConsenSys 起源)— 已迁 CDK
- **IDEX**(DEX 自建 L2)
- **Gnosis Pay rail(部分组件)** :探索性接入
- **Wirex** / **OKX** 等钱包 / 交易所 L2 项目

**流失原因**:OP Stack 网络效应(Base / OP Mainnet / Worldcoin / Zora)+ Arbitrum Orbit 生态(Xai / Sanko 等游戏链)+ Manta 等 Celestia DA 阵营,导致 CDK 在 "RaaS / app-chain" 市场份额 2025-2026 持续被压缩。

## MATIC → POL 迁移与商业模式

2024-09 POL token 正式 mainnet,1:1 替代 MATIC:

- **POL 作用扩展**:从 "Polygon PoS gas + staking" → "AggLayer 多链 gas + restaking + governance"
- **Polygon PoS 命运**:仍运营,但战略地位降为 "AggLayer 中一条普通链",2024-2026 TVL 从峰值 $5B+ 下滑到 ~$700M-1B 区间(DefiLlama 口径)
- **Polygon zkEVM Mainnet Beta**:2023 上线后 TVL 一直在 $100M 以下,2025 实质性进入 maintenance mode,Polygon Labs 战略重心转向 CDK + AggLayer
- **POL 单 token 经济模型**:取代 MATIC 的 "fixed supply" 改为 **每年 1% emission**(2% 给 validators / 1% 给 community treasury 等切分,具体比例迭代),长期通胀模型与 Cosmos ATOM、ETH 等接近

商业模式从 "卖 Polygon PoS gas" 变成 "卖 CDK stack + AggLayer 协议层 fee + POL value capture from staking"。

## AggLayer vs 跨链协议对照

| 维度 | AggLayer | [[systems/layerzero-v2-omnichain-messaging\|LayerZero V2]] | [[systems/hyperlane-overview\|Hyperlane]] | [[systems/chainlink-ccip-institutional-messaging\|CCIP]] |
|---|---|---|---|---|
| 范围 | Polygon stack 内 | 多 ecosystem(EVM + Solana + Aptos 等) | 多 ecosystem | 多 ecosystem |
| 信任模型 | Unified bridge + pessimistic proof | DVN(Decentralized Verifier Networks) | ISM(Interchain Security Modules) | Chainlink DON |
| 资产模型 | Unified bridge(canonical) | OFT(token 在多链原生发行) | warp route | 标准化跨链 token |
| ZK 聚合 | 是 | 否 | 否 | 否 |
| 受众 | 选择 Polygon stack 的 rollup | 任意 L2 / L1 | 任意 L2 / L1,模块化 | 机构 + 受监管金融 |

AggLayer 的差异化是 **"stack 内 trust-minimized + ZK 聚合"**,但代价是只能服务 Polygon CDK chain。详细对位见 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]]。

## Polygon 在 RWA / 机构场景

- **Polygon PoS RWA**:2024-2026 上 Polygon PoS 部署的 RWA 包括 Hamilton Lane / Securitize / Backed Finance / Ondo 等,但份额持续被 Ethereum L1(包括 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 起步)+ Stellar + Avalanche 分掉
- **Polygon ID**:基于 Iden3 的 ZK identity,2024-2026 在受监管 DeFi 与 KYC 场景有限部署
- **Polygon Enterprise / Supernets 概念**:2022-2023 提出的企业链方向 2024 后基本停止推广,与 Avalanche subnet / Cosmos appchain 的企业销售战略对照,Polygon 在企业方向显著掉队
- **vs 机构 DLT**:对照 [[systems/canton-overview|Canton]] 与 [[systems/hyperledger-besu-overview|Hyperledger Besu]],Polygon 没有进入 G-SIB tokenization 主战场

## AggLayer v0.x 迭代细节

AggLayer 不是一次发布,而是 **持续迭代的 stack**,2024-2026 主要版本节奏:

- **v0.1(2024-02)** :Unified Bridge 基础设施 + 第一批 Polygon zkEVM + Astar zkEVM 接入,实质是 "共享 L1 bridge contract"
- **v0.2(2024-Q4)** :Pessimistic Proof 引入 — 即使某条 AggLayer chain 的 ZK proof 系统出 bug,该 chain 不能从 Unified Bridge 提取超出其 deposit 的资产,这是 AggLayer 对 "stack 内 risk isolation" 的核心承诺
- **v0.3(2025)** :部分跨 chain 消息原语 + zkEVM prover 性能改进,实际接入链数较 v0.1 公告时下降
- **v1.0(roadmap)** :跨 chain atomic execution + ZK proof aggregation deployed in production
- **State Sharing**:跨 chain 共享 storage slot 的能力,roadmap 中,与 Optimism Superchain 共享 sequencer + Arbitrum BoLD 的路线竞争
- **POL restaking 接入**:2025-2026 试图把 POL 作为 AggLayer 内 "decentralized verifier" 的 staking 资产,类似 [[systems/eigenlayer-overview|EigenLayer]] 在 ETH 生态的位置,但 mainnet 实际接入慢

## Polygon zkEVM prover 路线 · Plonk + KZG + Hardfork 节奏

- **Plonky2 / Plonky3**:Polygon Labs 自研 STARK + Plonk 混合 prover,2023-2024 迭代,目标 prover time < 1 分钟 / block
- **Pessimistic Proof 用 Plonk + KZG**:依赖 Ethereum L1 KZG precompile(EIP-4844),减少 verification cost
- **Hardfork 节奏**:Polygon zkEVM 每 3-6 个月一次 hardfork(Dragonfruit / Etrog / Elderberry / Feijoa 等命名风格),与 Ethereum L1 fork 节奏不同步
- **vs zkSync / Scroll / Linea**:zkSync Era 用 Boojum(自研 STARK),Scroll 用 自研 zkEVM + Halo2,Linea 用 ConsenSys lattice-based prover,Polygon 在 prover 性能与 Type-1 兼容度上没有绝对优势

## 与其他 RaaS / 多链协议的竞争

| 维度 | Polygon CDK / AggLayer | OP Stack / Superchain | Arbitrum Orbit | zkSync ZK Stack | Eclipse / Solana 系 |
|---|---|---|---|---|---|
| 主要 prover / 共识 | ZK(Plonk) + Pessimistic | Optimistic + Fault Proof | Optimistic + BoLD | ZK(Boojum) | SVM + Celestia |
| 已知部署 chain 数 | 5-10 active | 50+ (Base / OP / World / Zora / Mode 等) | 20+ (Xai / Sanko / DeGen 等) | 5-10 | 1-3 |
| 旗舰 chain | (无) | Base | Arbitrum One | zkSync Era | Eclipse Mainnet |
| Unified Bridge | 是(AggLayer Unified Bridge) | 否(每条 OP chain 独立) | 否(每条 Orbit chain 独立) | Hyperchain shared bridge(roadmap) | 单链为主 |
| 共享 sequencer | (无) | 计划(2026+) | (无) | (无) | (无) |
| RaaS 头部供应商 | Polygon Labs / Caldera | Conduit / Caldera / Alchemy | Conduit / Caldera / Alchemy | Matter Labs | (生态内自部署) |

Polygon CDK 的 AggLayer 是 **唯一把 "stack 内 unified bridge" 作为核心差异化** 的方案,但 OP Stack 网络效应过强是其最大对手。

## 用例 · 谁实际跑在 Polygon CDK / AggLayer 上

- **Astar zkEVM**(2024-03):日本生态 dApp 接入,2024-Q4 实质性 wind down
- **X Layer**(原 X1, OKX):2024-Q1 testnet → mainnet,持续运营,但活跃度低于 OKX 主链
- **Immutable zkEVM**:Immutable Games 自有 L2,2023-11 mainnet,游戏 GMV 持续低于 OP Stack 系游戏链
- **Palm Network**:NFT 与 Web3 IP 平台,迁 CDK 后流量稳但小
- **Wirex Pay**:Wirex 加密卡 / wallet 后端
- **Aavegotchi(Gotchichain)** :游戏专用 chain
- **OKBC / Gnosis Pay 部分组件**:实际接入度有限
- **总数**:2026-Q1 AggLayer-connected mainnet chain 大致 5-10 条 active,远低于 OP Stack 的 50+ 条 active

## Counterpoints

- **Partner chain 流失**:2025-2026 CDK 流失链数高于新增,与 OP Stack 反向扩张形成鲜明对比
- **AggLayer 实际接入度**:v0.2 / v0.3 实际 mainnet-active 的 AggLayer chain 数量(可在 L2Beat 公开追踪)远低于 Polygon Labs 路线图早期预期
- **Polygon zkEVM 实际 traction 不足**:作为 Polygon prover 技术展示,zkEVM Beta 至 2026 累计 TVL < $100M,与同期 zkSync Era / Scroll / Linea 等相比明显落后
- **POL 通胀模型**:1% / 年 emission 在 L2 token 整体过供应背景下,价格表现持续承压
- **Polygon PoS validator 集中度**:历史上 ~100 个 validator,top 10 持有 staked POL > 50%,与 "PoS 链" 的去中心化叙事有距离
- **战略叙事更替过快**:Polygon Labs 4 年内从 "Plasma" → "PoS sidechain" → "Polygon 2.0" → "AggLayer" → "AggLayer + CDK",对生态合作方与 token holder 的信号噪比较低

## Open questions

- AggLayer v0.3 → v1.0 是否会引入 cross-chain message passing(对照 [[systems/chain-abstraction-pattern-three-solutions|chain abstraction 三种方案]])?
- Polygon PoS 是否会在 2027 前 sunset 或彻底降为 AggLayer 内一条普通 ZK rollup?
- POL restaking 模型与 [[systems/eigenlayer-overview|EigenLayer]] 模型谁会成为机构链共享安全的主流选择?
- Polygon 在 [[agent-economy/INDEX|agent economy]] 场景能否找到差异化位置?对照 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 钱包采用]] 与 [[agent-economy/x402-cloudflare-aws-edge-integration|x402 边缘集成]]
- Polygon 与 Solana / Base / Arbitrum 在 stablecoin payment(Visa / Stripe 等)市场份额会如何分化?
- AggLayer 是否会成为 RWA 跨 L2 流动的事实标准,还是被 CCIP / LayerZero 在机构客户场景压制?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction 模式总览]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 扩容]]
- [[systems/eigenlayer-overview|EigenLayer 总览]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero V2 全链消息]]
- [[systems/hyperlane-overview|Hyperlane 总览]]
- [[systems/chainlink-ccip-institutional-messaging|CCIP 机构消息]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer official documentation
- Polygon CDK documentation & GitHub
- Polygon Labs blog — AggLayer v0.1 / v0.2 announcements, POL migration
- L2Beat — Polygon zkEVM, Astar zkEVM, Immutable zkEVM, X Layer tracking
- DefiLlama — Polygon PoS / zkEVM / Astar TVL history
- Messari "State of Polygon 2025"
- The Block — Polygon 2.0 coverage 2024-2026
