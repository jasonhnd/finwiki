---
source: systems/data-availability-celestia-eigenda-blob-comparison
source_hash: 83de69337c432a0a
lang: zh
status: machine
fidelity: ok
title: "DA layer 全景对照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA"
translated_at: 2026-06-01T04:15:40.172Z
---
# DA layer 全景对照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA

## TL;DR

- 5 个主流 DA(data availability)layer 在 2026-Q2 时点的**架构 · 安全模型 · GB 每日成本 · throughput · finality · 采用 rollup · 治理 · 监管敞口** 8 维度对照
- **Ethereum blobs**（EIP-4844 · 参见 [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]）目前是 ETH-aligned rollup 的默认选择 — 安全性最高（由 Ethereum L1 直接背书）· 成本中等 · target=6/max=9 blob/block（Pectra 后）（参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]]）
- **Celestia** 是 modular DA 的先行者 — 独立 PoS 链 · Data Availability Sampling(DAS)+ Nakamoto 风格出块 · 成本最低 · 但安全性 ≠ Ethereum 水平
- **EigenDA** 是 EigenLayer restaking-secured DA（参见 [[systems/eigenlayer-overview|EigenLayer overview]]）— 共享 ETH staking 经济安全 · 成本略低于 blob · throughput 显著更高
- **Avail** 是 Polkadot 系 DA（原 Polygon Avail · 独立后 Avail Project）— KZG + DAS · 准备 hybrid 模式（连接 EigenLayer）· 早期市场份额
- **NEAR DA** 是 NEAR Protocol 的 DA 服务 — 利用 NEAR 共识 + 极低成本 · 接入 Polygon CDK / Caldera 等 RaaS · 主要服务非 ETH-aligned rollup
- **GB 每日成本 2026-Q2 估算**: Ethereum blob ~$0.10-0.30（blob fee 波动）· Celestia ~$0.02-0.05 · EigenDA ~$0.06-0.15 · Avail ~$0.04-0.08 · NEAR DA ~$0.01-0.03
- **采用 split**: Base/Arbitrum/Optimism/zkSync/Linea/Scroll/Polygon zkEVM = L1 blobs · Mantle/Movement/Cyber/Rivalz = EigenDA · Manta Pacific/Eclipse（部分）/Polygon CDK 部分 = Celestia · Polygon CDK 部分/Sophon = Avail · Caldera RaaS 部分 = NEAR DA
- 路径: [[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] 对照

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请结合 [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] 阅读与所有 alt-DA 竞争的 Ethereum-native DA 路径，结合 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] 阅读影响所有 DA 价格竞争的 blob 容量扩张，并结合 [[systems/eigenlayer-overview|EigenLayer overview]] 阅读支撑 EigenDA 的 restaking 经济学。关于消费这些 DA layer 的 rollup 生态系统，见 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] 和 [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]。关于推动 DA 模块化的 L1/L2 分离元战略，见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]。关于 DA layer 使用的共识模型，见 [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]] 和 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]。关于与 DA 选择互动的跨链桥安全，见 [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]。关于包含 EigenDA 这个最大 AVS 的 restaking AVS 格局，见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]。

## Why this matrix matters

在 2023-2024 时点，DA layer 的默认是“rollup 自动使用 Ethereum L1 calldata”。Dencun（2024-03）引入 EIP-4844 blob 后，L1 blobs 成为 ETH-aligned rollup 的默认选择，但同时也开启了“alt-DA 是否仍有市场”的讨论。2025-2026 形成了 5 个 DA 竞争格局:

**Modular thesis 的核心问题**: rollup 是否需要 Ethereum 级 DA 安全性?
- **ETH 安全主义者**（Vitalik 公开立场 · 参见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]）: rollup 的核心 commitment 是“L1 DA 保证状态可重建性”· 使用 alt-DA 的是 validium，不是 rollup · 不应称为 rollup
- **Modular 主义者**（Celestia / Avail / EigenDA 立场）: rollup 安全性 ≠ DA 必须在 L1  · 不同用例可以选择不同安全级别 · “modular blockchain”是新范式
- **Pragmatic 中间路线**（Mantle / Manta / Eclipse 等）: 大多数 dApp 不需要 L1 DA 级别 · 节省的成本可以用于用户补贴

对开发者（选择 rollup stack）而言: DA 选择决定 sequencer 成本，决定用户 gas 成本，也决定 dApp 经济模型。对 institutional 客户（tokenized fund / DvP）而言: L1 DA 是 institutional grade，alt-DA 是 commercial grade（与 [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] 中机构对 L1 DA 的明确要求形成对照）。

本矩阵对照公开运行中的 5 个 DA layer、横跨 8 个维度、2026-Q2 数据快照。

### Ethereum blobs (EIP-4844)

**架构**: Ethereum L1 原生 · 每 1 block 4 个 blob（target=3 · max=6 Dencun · Pectra 后 target=6 · max=9 ）· 每个 blob 128 KiB · post-Pectra 合计 max ~1.1 MiB/block。Blob 数据保留约 18 天 · 之后只有 commitment(KZG) 留在链上。Blob 价格独立于 calldata · 使用 EIP-1559 风格 fee market。

**安全模型**: Ethereum L1 PoS validator（约 100 万+）+ DAS（EIP-7594 PeerDAS 于 2026-Q4+ 引入）。Slashing 由 Ethereum L1 协议直接执行。当前安全级别 = Ethereum L1 自身（Nakamoto 系数约 5 · 总 ETH staked ~$120B · 攻击成本 ~$40B+）。

**GB 每日成本**（2026-Q2 估算）: ~$0.10-0.30（blob fee 波动 · 峰值时 $1+ · 低谷时 $0.05）。比 calldata 便宜约 100x。

**Throughput**: Pectra 后 ~1.1 MiB/block（12s 区块）≈ ~6 GB/day。Fusaka PeerDAS 后理论上可达到 ~60 GB/day。

**Finality**: Ethereum L1 finality（约 12-15 分钟 · 2 epoch）。

**采用 rollup**: Arbitrum · Optimism · Base · zkSync Era · Linea · Scroll · Taiko · Polygon zkEVM · Blast · Mode · Mantle（部分）· 等 95%+ ETH-aligned rollup 默认选择。

**治理**: Ethereum 协议治理（EIP 流程 · ACD）· 链上 social consensus。Pectra 之后是 Fusaka PeerDAS（预计 2026-Q4 ）。

**监管敞口**: Ethereum L1 自身已长期受到 SEC 关注，但被广泛认为“sufficiently decentralized”，不属于 security。Blob 数据本身只是字节保存 · 监管 surface 极小。

### Celestia

**架构**: 独立 PoS L1 · Cosmos SDK + Tendermint BFT · 专注 DA（无 EVM / 智能合约执行）。Data Availability Sampling(DAS) 使 light client 通过少量采样验证整个 block 的可用性，无需下载整个 block。2D Reed-Solomon erasure coding + KZG commitment。

**安全模型**: Celestia validator（约 100 active validator · TIA token staking）· Tendermint BFT（2/3+ honest）· DAS 提供更强保证，即使 majority malicious validator 也可由 light client 检测。不过 staking 经济规模 ~$1-2B 远低于 Ethereum L1 。

**GB 每日成本**（2026-Q2 估算）: ~$0.02-0.05（取决于 blob 拥堵度）。最低价 · 约为 Ethereum blob 的 1/5。

**Throughput**: 2 MB/block（2026 升级 · 区块约 6s）≈ ~28 GB/day。2027 计划升级至 8 MB/block ≈ 120 GB/day。

**Finality**: Tendermint 即时 finality（约 6s · 单一区块）。

**采用 rollup**: Manta Pacific（主要 L2 客户）· Eclipse（部分模块）· Polygon CDK 部分配置 · Caldera RaaS 部分 · Astria sequencer · Movement Labs · Lyra · 等约 30+ chain（2026）。

**治理**: Celestia Foundation + TIA token DAO · 升级通过链上治理投票。

**监管敞口**: TIA token 于 2024 上线后 SEC 未作明确表态 · Celestia Labs 主动对美国零售用户 geo-fence。EU MiCA 下 TIA 是否属于 utility token 尚未裁定。

### EigenDA

**架构**: EigenLayer restaking secured（参见 [[systems/eigenlayer-overview|EigenLayer overview]] 和 [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]）· EigenDA operator 从 EigenLayer 借用 ETH stake 作为经济安全 · 提供高 throughput DA service。Dispatcher / Encoder / Validator 的 3 种角色 · KZG commitment · DAS。

**安全模型**: EigenLayer ~$14B TVL 中约 ~$6B opt-in EigenDA（参见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]）· slashing 由 EigenLayer 协议执行。安全性 ≈ ETH staking，但夹着 1 层（restaking 同意）· Vitalik 警告“不应过度依赖 restaking consensus”（参见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]）。

**GB 每日成本**（2026-Q2 估算）: ~$0.06-0.15。介于 blob 与 Celestia 之间 · 因为需要支付 operator + restaker reward。

**Throughput**: ~15 MB/s sustained（理论 ~1.3 TB/day · 实际约 100-500 GB/day，取决于负载）。最高 throughput 的 DA layer。

**Finality**: EigenDA dispatcher confirmation（约 10-30s）+ 依赖 EigenLayer slashing window。

**采用 rollup**: Mantle（主要）· Movement · Cyber · Rivalz · 多个 ZK Stack hyperchain · 多个 OP Stack rollup · Arbitrum Orbit 部分。EigenDA 是 modular rollup-as-a-service 的默认 alt-DA。

**治理**: EigenLabs 团队 + EIGEN token holders + Security Council。

**监管敞口**: EIGEN token 于 2024 上线 · SEC 未作明确表态 · EigenLayer 主动推迟向美国用户 EIGEN airdrop。restaking economics 从监管角度更接近 securities（参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]）。

### Avail

**架构**: 独立 DA chain（原 Polygon Avail · 2023 spin off 后成为独立项目）。Substrate 框架（Polkadot 系）· Babe+Grandpa 共识 · KZG + DAS · 与 Celestia 设计类似，但来自 Polkadot 学术血统。计划整合 EigenLayer（“Avail + EigenLayer”hybrid 模式），进一步借用 ETH stake 强化安全性。

**安全模型**: Avail validator（约 150 active）· Babe+Grandpa BFT · staking 经济规模 ~$200-500M（2026）。EigenLayer hybrid 模式运行后可借用 ETH stake 强化安全性 · 但在 2026-Q2 主要依赖自身 AVAIL token staking。

**GB 每日成本**（2026-Q2 估算）: ~$0.04-0.08。略高于 Celestia · 因 staking 经济规模较小且需要 validator 补贴。

**Throughput**: ~2 MB/block（20s 区块）≈ ~8.6 GB/day。计划升级至 4 MB/block ≈ 17 GB/day。

**Finality**: Grandpa finality（约 30s-1min）。

**采用 rollup**: Polygon CDK 部分 chain · Sophon（zkSync ZK Stack 合作）· QuarkChain · Madara · LumioVM · 部分 RaaS 配置。客户数量少于 Celestia / EigenDA。

**治理**: Avail Foundation + AVAIL token DAO（2025 token 上线后）。

**监管敞口**: AVAIL token 相对较新（2025 上线）· 监管定位未明。Avail 团队主要位于欧洲 · 优先考虑 MiCA 合规。

### NEAR DA

**架构**: NEAR Protocol 的 DA 服务模块 · 利用 NEAR sharded consensus + storage staking。不是独立 chain，而是 NEAR L1 上的 DA service · EVM rollup 可通过 cross-chain bridge 访问。

**安全模型**: NEAR validator（约 250 active）· NEAR PoS 共识 · staking 经济规模 ~$1-2B（NEAR token 市值 × stake ratio）。Bridge 安全性是额外 surface（参见 [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]）。

**GB 每日成本**（2026-Q2 估算）: ~$0.01-0.03。最低价 · 利用 NEAR 极低 storage cost 经济。

**Throughput**: 依赖 NEAR sharding · 理论约 100 MB/s sustained · 实际面向 rollup 客户的服务约 10-50 GB/day。

**Finality**: NEAR finality（约 2-3s · 显著快于 Ethereum）。

**采用 rollup**: Caldera RaaS 部分 chain · 部分 OP Stack rollup 实验部署 · Polygon CDK 部分 · 主要服务非 ETH-aligned rollup。客户数量 < Celestia / EigenDA / Avail。

**治理**: NEAR Foundation + NEAR token DAO · NEAR DA 团队主导路线图。

**监管敞口**: NEAR token 在 2024-2025 接受过多个 jurisdiction 审查，但未被 SEC 直接认定为 security。NEAR Protocol 整体监管敞口相对中等。

## Big comparison matrix table

**5 DA layer × 8 维度对照**（2026-Q2 状态）:

| DA Layer | 架构 | 安全模型 | Cost/GB-day | Throughput | Finality | 采用 rollup | 治理 | 监管敞口 |
|---|---|---|---|---|---|---|---|---|
| **Ethereum blobs (EIP-4844)** | Ethereum L1 原生 · KZG · target=6/max=9 （post-Pectra） | Ethereum PoS ~100万 validator · DAS（PeerDAS 2026-Q4）· 攻击成本 $40B+ | $0.10-0.30 | ~6 GB/day（post-Pectra）· Fusaka 后 ~60 GB/day | ~12-15 min（2 epoch） | **95%+ ETH-aligned rollup**: Arbitrum · Optimism · Base · zkSync · Linea · Scroll · Taiko · Polygon zkEVM | Ethereum 协议治理（EIP/ACD） | 极低 · Ethereum sufficiently decentralized 共识 |
| **Celestia** | 独立 PoS · Cosmos SDK+Tendermint · DAS · 2D RS+KZG | ~100 validator · TIA staking ~$1-2B · DAS 强保证 | **$0.02-0.05**（最安 modular DA） | 2 MB/block 6s ≈ 28 GB/day · 2027 8 MB target | ~6s instant（Tendermint） | Manta Pacific · Eclipse 部分 · Polygon CDK 部分 · Astria · Movement · ~30+ chain | Celestia Foundation+TIA DAO | TIA SEC 未表态 · geo-fence US · MiCA 未裁定 |
| **EigenDA** | EigenLayer AVS · Dispatcher/Encoder/Validator · KZG+DAS | EigenLayer ~$6B opt-in（restaking）· slashing 经由 EigenLayer · 借用 ETH stake | $0.06-0.15 | **~15 MB/s sustained**（实际约 ~100-500 GB/day） | ~10-30s dispatcher + slashing window | Mantle · Movement · Cyber · Rivalz · ZK Stack hyperchain · OP Stack 部分 · Arbitrum Orbit 部分 | EigenLabs+EIGEN+SC | EIGEN SEC 未表态 · restaking 接近 securities |
| **Avail** | 独立 DA chain · Substrate（Polkadot 系）· Babe+Grandpa · KZG+DAS | ~150 validator · AVAIL staking ~$200-500M · EigenLayer hybrid 计划 | $0.04-0.08 | 2 MB/block 20s ≈ 8.6 GB/day · 4 MB 升级 ≈ 17 GB | ~30s-1min（Grandpa） | Polygon CDK 部分 · Sophon · QuarkChain · Madara · LumioVM | Avail Foundation+AVAIL DAO | AVAIL 2025 新上线 · 优先 MiCA 合规 |
| **NEAR DA** | NEAR L1 模块 · sharded consensus · storage staking · bridge 经由 EVM | NEAR ~250 validator · staking ~$1-2B · bridge 安全是额外 surface | **$0.01-0.03**（最安） | 理论 100 MB/s · 实际 ~10-50 GB/day | ~2-3s（NEAR fast finality） | Caldera RaaS 部分 · OP Stack 实验 · Polygon CDK 部分 | NEAR Foundation+NEAR DAO | NEAR 多 jurisdiction 审查 · 中等监管敞口 |

**矩阵读法**:
- **Cost 排名**: NEAR DA < Celestia < Avail < EigenDA < Ethereum blobs（blob 最贵但最安全 · NEAR 最便宜但客户数小）
- **Throughput 排名**: EigenDA（最高）> NEAR（理论高 · 实际中等）> Celestia ≈ Avail ≈ Ethereum blob（post-Pectra）
- **安全级别排名**: Ethereum blobs（最高 · L1 原生）> EigenDA（借用 ETH restake）> Celestia ≈ NEAR DA（独立 PoS · staking ~$1-2B）> Avail（staking 规模最小）
- **Finality 速度排名**: NEAR DA（2-3s）> Celestia（6s）> EigenDA（10-30s + slashing）> Avail（30s-1min）> Ethereum blobs（12-15min）
- **采用规模排名**: Ethereum blobs（95%+ ETH-aligned）> Celestia（约 30+ chain · alt-DA 主导）> EigenDA（约 20 chain · 增长最快）> Avail / NEAR DA（各 <10 主要 chain）

### Dencun 前 vs 后

**Dencun 前（2024-03 前）**:
- ETH-aligned rollup 使用 L1 calldata · 成本高 · rollup 的主要成本（约 80%）
- Alt-DA（Celestia 2023-10 主网 · EigenDA 2024-Q1 主网 · Avail 2024-Q2 · NEAR DA 2023）以“便宜 90%+”定位 · 抢走 cost-sensitive 客户
- Modular thesis 论调:“rollup 应自由选择 DA · 不需要受限于 Ethereum L1 DA”

**Dencun 后（2024-03 以后）**:
- L1 blob 使 ETH-aligned rollup 成本下降约 100x · 大量 rollup 选择留在 blob
- Alt-DA 价格优势从约 50x 缩小到约 3-5x（blob $0.10-0.30 vs Celestia $0.02-0.05）
- Modular thesis 论调转向:“在小成本差下，应考虑安全级别 + 生态一致性 · 大多数 ETH-aligned 选择 blob · 非 ETH-aligned 选择 alt-DA”
- Pectra（2025-Q2）使 blob target 翻倍 · 进一步压缩 alt-DA 价格优势
- Fusaka PeerDAS（计划 2026-Q4 ）带来进一步 10x blob 容量 · alt-DA 在 ETH-aligned 市场份额中可能进一步受压

### Alt-DA 的差异化战略

面对 blob 价格压力，各 alt-DA 采取不同 differentiation:

**Celestia**:
- “modular sovereignty”路线 · 强调 Cosmos / Move / 非 EVM 生态系统（Manta · Eclipse · Movement · Astria）
- 不与 ETH-aligned 直接竞争 · 服务“想自己选择 settlement layer”的 sovereign rollup
- TIA token 经济激励 · 向 rollup 客户提供 token incentive

**EigenDA**:
- “ETH-aligned 但 throughput 极高”路线 · 服务高 TPS rollup（Mantle · DeFi 重型 dApp）
- 借用 EigenLayer $14B+ TVL 的经济安全 · 接近 L1 DA 水平
- modular rollup-as-a-service(RaaS) 的默认选择 · Caldera · AltLayer · Conduit 等全部 default EigenDA

**Avail**:
- “L1 DA 替代 + EigenLayer hybrid”路线 · 兼顾独立性 + 借用 ETH stake
- Polkadot 学术血统 · 在 Polygon CDK / Substrate 系生态中具优势
- 当前客户数最少 · 长期取决于 EigenLayer hybrid 是否能吸引客户

**NEAR DA**:
- “极低成本 + NEAR fast finality”路线 · 服务非 DeFi 高频用例（gaming · social）
- 客户主要是 RaaS · 不是大型 rollup
- 长期价值取决于 NEAR Protocol 生态系统健康度

### 谁选择哪种 DA · 决策维度

**ETH-aligned + institutional grade**（Coinbase Base · 机构 RWA · tokenized fund）:
- 必须使用 Ethereum blobs · 安全级别 = Ethereum L1 · 监管 surface 最小
- 无法选择 alt-DA · 因为机构 risk committee 不接受非 L1 DA

**ETH-aligned + DeFi-native**（Arbitrum · Optimism · zkSync 等大型 ZK/OP rollup）:
- 主要使用 Ethereum blobs · 生态一致性 + 用户预期
- 部分高 throughput 子链可选择 EigenDA（Arbitrum Orbit · OP Stack 子 rollup）

**Modular rollup-as-a-service**（Caldera · AltLayer · Conduit 客户）:
- 默认 EigenDA（ETH-aligned · 高 throughput）
- 部分客户选择 Celestia（便宜）或 Avail / NEAR DA（更便宜）

**Non-ETH-aligned**（Cosmos · Move · Solana 生态扩展）:
- 主要使用 Celestia（Cosmos 血统一致）· 或 NEAR DA（NEAR 生态）
- 不选择 Ethereum blobs · 生态不一致 + 不必要的 L1 fee 敞口

**Gaming / social / 高频低价值**（Web3 game · social dApp）:
- 主要使用 NEAR DA（最便宜）· 或 Celestia（便宜 + 中等安全）
- 不选择 Ethereum blobs · 成本仍超过 native gas budget

## Boundary cases / future trajectory

**PeerDAS 的影响**（Fusaka 2026-Q4 计划）:
- Ethereum blob 容量 10x · 每 1 日约 ~60 GB DA
- Alt-DA 价格优势从 3-5x 缩小到约 1.5-2x · 压力进一步上升
- Celestia / Avail 计划通过自身容量升级应对（Celestia 2027 8 MB block）

**EigenDA 的 restaking 经济边界**:
- EigenDA 收入按 2026 估算约 ~$120M ARR（参见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]]）
- 收入的 70-90% 分配给 operator + restaker · EigenLabs 抽取 10-30%
- 如果 EigenLayer 总 TVL 因 restaking 监管强化而下降，EigenDA 安全预算也同步下降
- 反之，如果 restaking regulatory clarity + TVL 增长，EigenDA 将在 alt-DA 中占据 dominant 地位

**Celestia 长期路径**:
- 已是 modular thesis 的旗帜 · 但 ETH-aligned 客户不会增长（因为 blob 已经便宜）
- 长期依赖 Cosmos / Move / sovereign rollup 生态系统 · 与 ETH 生态系统分化
- TIA token 经济要求 rollup 客户持续支付 DA fee，但在 alt-DA 价格战中难以上调 fee

**Avail 能否反攻**:
- Polkadot 系学术血统强 · 但客户数小
- “EigenLayer hybrid”是关键 · 若成功，可借用 ETH stake 强化安全性，并可能从 Celestia 抢走部分客户
- Substrate / Polygon CDK 集成是另一条路径

**NEAR DA 的利基化**:
- 价格优势明确 · 但 NEAR Protocol 整体生态规模有限
- 长期可能专注 gaming / social / 高频低价值 DA，而不是 DeFi 头部 rollup
- 通过 cross-chain bridge 为 EVM rollup 提供服务会引入额外安全 surface

**机构客户的 DA 选择**:
- 2026 机构 RWA 案例（BlackRock BUIDL · Franklin Templeton FOBXX · 等）均部署在 Ethereum L1 或 Polygon zkEVM L1-DA 上 · 不接受 alt-DA
- 长期看机构是否接受 EigenDA（借用 ETH stake）是 EigenLabs 的 hopeful path · 但当前 institutional risk committee 仍偏好纯 L1 DA

**DA layer 与 ZK proving 的关系**:
- ZK rollup 将 transaction batch 压缩为 small proof · proof 发到 L1  · 大数据（state diff）发到 DA
- DA layer 容量越大，ZK rollup 可处理的 batch 越大，也越经济
- ZK rollup 对 DA 选择更敏感，因为这是成本大头（参见 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]]）

**Multi-DA / DA aggregation**:
- 部分 rollup 实验“L1 blob + alt-DA 双层”模式 · 在 L1 blob 保存 core commitment + 在 alt-DA 保存完整 state diff
- 提供 fallback 安全性（即使 alt-DA 失败，也可从 L1 commitment 重建）
- modular thesis 的 hybrid 路径 · 但工程复杂，只有少数 deploy

**监管非对称性**:
- Ethereum L1 已 sufficiently decentralized · 监管 surface 最小
- Celestia / EigenDA / Avail / NEAR DA 的 token 均处于监管灰色地带 · 长期不确定
- 机构客户为规避监管风险偏好 L1 DA · 这是 alt-DA 的长期 ceiling

**形式验证 / 工程质量**:
- Ethereum blob 实现有 Geth / Nethermind / Besu / Erigon / Reth 等多客户端 + 长期 audit · 最成熟
- EigenDA 是 EigenLayer 主要 AVS · 多次 audit + slashing 启动前严格审查
- Celestia / Avail / NEAR DA 均通过审计 · 但 production 经验 < Ethereum blob

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]]
- [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]

## Sources

- Celestia docs · https://docs.celestia.org/
- EigenDA docs · https://docs.eigenda.xyz/
- Ethereum.org DA · https://ethereum.org/en/developers/docs/data-availability/
- Avail docs · https://docs.availproject.org/
- NEAR DA blog · https://near.org/blog/near-da
- L2Beat DA summary · https://l2beat.com/data-availability/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Blobscan · https://blobscan.com/
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
- Ethereum Foundation EIP-7594 PeerDAS spec
