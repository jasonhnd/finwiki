---
title: DA layer 全景对照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA
aliases: [data availability comparison 2026, celestia eigenda blobs avail near da, modular da layer matrix, da layer competition post-dencun, ethereum blob vs celestia, eigenda restaking-secured da, avail polkadot da, near da bridged rollup, da cost per gb-day 2026]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, data-availability, celestia, eigenda, ethereum-blob, avail, near-da, modular, rollup, eip-4844, dencun]
status: active
sources:
  - https://docs.celestia.org/
  - https://docs.eigenda.xyz/
  - https://ethereum.org/en/developers/docs/data-availability/
  - https://docs.availproject.org/
  - https://near.org/blog/near-da
  - https://l2beat.com/data-availability/summary
  - https://defillama.com/chains/Rollup
  - https://blobscan.com/
---

# DA layer 全景对照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA

## TL;DR

- 5 个主流 DA(data availability)layer 在 2026-Q2 的 **架构 · 安全模型 · cost per GB-day · throughput · finality · 已采用 rollup · 治理 · 监管敞口** 8 维度对照
- **Ethereum blobs**(EIP-4844 · 参见 [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 经济与 2026 市场影响]])是当前 default for ETH-aligned rollup —— 安全性最高(Ethereum L1 直接背书)· cost 中等 · target=6/max=9 blob/block 后 Pectra(参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]])
- **Celestia** 是 modular DA pioneer —— 独立 PoS 链 · Data Availability Sampling(DAS)+ Nakamoto-style block production · cost 最低 · 但安全 ≠ Ethereum 等级
- **EigenDA** 是 EigenLayer restaking-secured DA(参见 [[systems/eigenlayer-overview|EigenLayer overview]])—— 共享 ETH staking 经济安全 · cost 略低于 blob · throughput 显著高
- **Avail** 是 Polkadot 系 DA(原 Polygon Avail · 独立后 Avail Project)—— KZG + DAS · 准备 hybrid 模式(EigenLayer 接入)· 早期市场份额
- **NEAR DA** 是 NEAR Protocol 的 DA 服务 —— 利用 NEAR 共识 + 极低 cost · 接入 Polygon CDK / Caldera 等 RaaS · 主要服务非 ETH-aligned rollup
- **Cost per GB-day 2026-Q2 估算**:Ethereum blob ~$0.10-0.30(blob fee 波动)· Celestia ~$0.02-0.05 · EigenDA ~$0.06-0.15 · Avail ~$0.04-0.08 · NEAR DA ~$0.01-0.03
- **采用 split**:Base/Arbitrum/Optimism/zkSync/Linea/Scroll/Polygon zkEVM = L1 blobs · Mantle/Movement/Cyber/Rivalz = EigenDA · Manta Pacific/Eclipse(部分)/Polygon CDK 部分 = Celestia · Polygon CDK 部分/Sophon = Avail · Caldera RaaS 部分 = NEAR DA
- 路由:[[systems/INDEX|systems index]] · 与 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] 对照

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 经济与 2026 市场影响]] for the Ethereum-native DA path that competes with all alt-DA, [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]] for the blob capacity expansion that affects all DA price competition, and [[systems/eigenlayer-overview|EigenLayer overview]] for the restaking economics underpinning EigenDA. For the rollup ecosystem that consumes these DA layers, see [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] and [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]. For the meta-strategy of L1/L2 separation that motivates DA modularity, see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For consensus models that DA layers use, see [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]] and [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]. For cross-chain bridge security that interacts with DA choice, see [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]. For restaking AVS landscape including EigenDA as the largest AVS, see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]].

## Why this matrix matters

DA layer 在 2023-2024 还是 "rollup 自动用 Ethereum L1 calldata" 的默认情况。Dencun(2024-03)引入 EIP-4844 blob 后 · L1 blobs 成为 ETH-aligned rollup 的默认选项 · 但同时打开了 "alt-DA 是否仍有市场" 的讨论。2025-2026 形成五 DA 竞争格局:

**Modular thesis 的核心问题**:rollup 是否需要 Ethereum 等级 DA 安全?
- **ETH 安全主义者**(Vitalik 公开立场 · 参见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]):rollup 的核心承诺是 "L1 DA 保证可重构状态" · 用 alt-DA = validium 而非 rollup · 不应该叫 rollup
- **Modular 主义者**(Celestia / Avail / EigenDA 立场):rollup 安全 ≠ DA 必须 L1 · 不同 use case 可选不同安全等级 · "modular blockchain" 是新 paradigm
- **Pragmatic 中间路线**(Mantle / Manta / Eclipse 等):大多数 dApp 不需要 L1 DA 等级 · 节省的 cost 可补贴用户

对开发者(选 rollup stack):DA 选择决定 sequencer cost · 进而决定用户 gas cost · 进而决定 dApp 经济模型。对机构客户(tokenized fund / DvP):L1 DA 是 institutional grade · alt-DA 是 commercial grade(参见 [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] 中机构对 L1 DA 的明确要求)。

本矩阵对照 5 个公开运营的 DA layer · 8 维度横向铺开 · 2026-Q2 数据快照。

## Per-DA-layer sections

### Ethereum blobs (EIP-4844)

**架构**:Ethereum L1 原生 · 每 block 4 个 blob(target=3 · max=6 Dencun · target=6 · max=9 Pectra 后)· 每 blob 128 KiB · 总 max ~1.1 MiB/block(post-Pectra)。Blob 数据保留 ~18 天 · 之后只 commitment(KZG)留链。Blob 价格独立于 calldata · 用 EIP-1559 风格 fee market。

**安全模型**:Ethereum L1 PoS validator(~100 万+)+ DAS(EIP-7594 PeerDAS 2026-Q4+ 引入)。Slashing 由 Ethereum L1 协议直接执行。当前安全等级 = Ethereum L1 本身(Nakamoto 系数 ~5 · 总 ETH staked ~$120B · 攻击 cost ~$40B+)。

**Cost per GB-day**(2026-Q2 估算):~$0.10-0.30(blob fee 波动 · 高峰期可达 $1+ · 低谷 $0.05)。比 calldata 便宜 ~100x。

**Throughput**:Pectra 后 ~1.1 MiB/block(12s 出块)≈ ~6 GB/day。Fusaka PeerDAS 后理论可达 ~60 GB/day。

**Finality**:Ethereum L1 finality(~12-15 分钟 · 2 epoch)。

**已采用 rollup**:Arbitrum · Optimism · Base · zkSync Era · Linea · Scroll · Taiko · Polygon zkEVM · Blast · Mode · Mantle(部分)· 等 95%+ 的 ETH-aligned rollup default。

**治理**:Ethereum 协议治理(EIP process · ACD)· 链上 social consensus。Pectra 后下一波是 Fusaka PeerDAS(2026-Q4 估)。

**监管敞口**:Ethereum L1 本身已是 SEC 长期关注对象但被广泛认为 "sufficiently decentralized" · 不构成 security。Blob 数据本身只是字节存储 · 监管 surface 极小。

### Celestia

**架构**:独立 PoS L1 · Cosmos SDK + Tendermint BFT · 专注 DA(没有 EVM / 智能合约执行)。Data Availability Sampling(DAS)让 light client 用少量采样验证整 block availability · 不必下载全 block。2D Reed-Solomon erasure coding + KZG commitment。

**安全模型**:Celestia validator(~100 active validator · TIA token staking)· Tendermint BFT(2/3+ honest)· DAS 提供 "majority malicious validator 仍可被 light client 检测" 的较强保证。但 staking 经济规模 ~$1-2B 远低于 Ethereum L1。

**Cost per GB-day**(2026-Q2 估算):~$0.02-0.05(取决于 blob 拥堵)。最便宜 · 是 Ethereum blob 的 ~1/5。

**Throughput**:2 MB/block(2026 升级 · 出块 ~6s)≈ ~28 GB/day。计划 2027 升级到 8 MB/block ≈ 120 GB/day。

**Finality**:Tendermint 即时 finality(~6s · 单 block)。

**已采用 rollup**:Manta Pacific(主要 L2 客户)· Eclipse(部分模块)· Polygon CDK 部分配置 · Caldera RaaS 部分 · Astria sequencer · Movement Labs · Lyra · 等 ~30+ chain(2026)。

**治理**:Celestia Foundation + TIA token DAO · 升级通过 onchain governance vote。

**监管敞口**:TIA token 在 2024 上线后 SEC 未明确表态 · Celestia Labs 主动 geo-fence 美国零售。EU MiCA 下 TIA 是否构成 utility token 仍待裁决。

### EigenDA

**架构**:EigenLayer restaking secured(参见 [[systems/eigenlayer-overview|EigenLayer overview]] 和 [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]])· EigenDA operator 从 EigenLayer 借 ETH stake 作为 economic security · 提供高 throughput DA service。Dispatcher / Encoder / Validator 三角色 · KZG commitment · DAS.

**安全模型**:借 EigenLayer ~$14B TVL 中的 ~$6B opt-in 到 EigenDA(参见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]])· slashing 由 EigenLayer 协议执行。安全 ≈ ETH staking 但隔了一层(restaking 同意)· Vitalik 提醒 "不应过度依赖 restaking 共识"(参见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]])。

**Cost per GB-day**(2026-Q2 估算):~$0.06-0.15。介于 blob 和 Celestia 之间 · 因要付 operator + restaker reward。

**Throughput**:~15 MB/s sustained(~1.3 TB/day theoretical · 实际 ~100-500 GB/day 看负载)。最高 throughput 的 DA layer。

**Finality**:取决于 EigenDA dispatcher confirmation(~10-30s)+ EigenLayer slashing window。

**已采用 rollup**:Mantle(主要)· Movement · Cyber · Rivalz · 多个 ZK Stack hyperchain · 多个 OP Stack rollup · Arbitrum Orbit 部分。EigenDA 是 modular rollup-as-a-service 的 default alt-DA。

**治理**:EigenLabs 团队 + EIGEN token holders + Security Council。

**监管敞口**:EIGEN token 在 2024 上线 · SEC 未明确表态 · EigenLayer 主动延迟 EIGEN airdrop 给美国用户。restaking economics 在监管视角下接近 securities(参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX 敞口]])。

### Avail

**架构**:独立 DA chain(原 Polygon Avail · 2023 spin off 为独立项目)。Substrate 框架(Polkadot 系)· Babe+Grandpa 共识 · KZG + DAS · 类似 Celestia 设计但来自 Polkadot 学术血统。计划与 EigenLayer 集成("Avail + EigenLayer" hybrid 模式)进一步借 ETH stake 增强安全。

**安全模型**:Avail validator(~150 active)· Babe+Grandpa BFT · staking 经济规模 ~$200-500M(2026)。EigenLayer hybrid 模式上线后可借 ETH stake 增强 · 但 2026-Q2 主要靠自身 AVAIL token staking。

**Cost per GB-day**(2026-Q2 估算):~$0.04-0.08。略高于 Celestia · 因 staking 经济规模小 + 需要补贴 validator。

**Throughput**:~2 MB/block(20s 出块)≈ ~8.6 GB/day。计划升级到 4 MB/block ≈ 17 GB/day。

**Finality**:Grandpa finality(~30s-1min)。

**已采用 rollup**:Polygon CDK 部分 chain · Sophon(zkSync ZK Stack 合作)· QuarkChain · Madara · LumioVM · 部分 RaaS 配置。客户量小于 Celestia / EigenDA。

**治理**:Avail Foundation + AVAIL token DAO(2025 token 上线后)。

**监管敞口**:AVAIL token 较新(2025 上线)· 监管定位未明。Avail 团队主要在欧洲 · MiCA 合规优先。

### NEAR DA

**架构**:NEAR Protocol 的 DA 服务模块 · 利用 NEAR sharded 共识 + storage staking。不是独立 chain · 是 NEAR L1 上的 DA service · 通过 cross-chain bridge 让 EVM rollup 访问。

**安全模型**:NEAR validator(~250 active)· NEAR PoS 共识 · staking 经济规模 ~$1-2B(NEAR token market cap × stake ratio)。Bridge 安全是额外 surface(参见 [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]])。

**Cost per GB-day**(2026-Q2 估算):~$0.01-0.03。最便宜 · 利用 NEAR 极低的 storage cost 经济。

**Throughput**:取决于 NEAR sharding · 理论 ~100 MB/s sustained · 实际服务 ~10-50 GB/day for rollup 客户。

**Finality**:NEAR finality(~2-3s · 显著快于 Ethereum)。

**已采用 rollup**:Caldera RaaS 部分 chain · 一些 OP Stack rollup 实验 deploy · Polygon CDK 部分 · 主要服务非 ETH-aligned rollup。客户量 < Celestia / EigenDA / Avail。

**治理**:NEAR Foundation + NEAR token DAO · NEAR DA 团队主导路线图。

**监管敞口**:NEAR token 在 2024-2025 多个 jurisdiction 被审查 · 但未被 SEC 直接定性为 security。NEAR Protocol 整体监管敞口相对中等。

## Big comparison matrix table

**5 个 DA layer × 8 维度对照**(2026-Q2 状态):

| DA Layer | 架构 | 安全模型 | Cost/GB-day | Throughput | Finality | 已采用 rollup | 治理 | 监管敞口 |
|---|---|---|---|---|---|---|---|---|
| **Ethereum blobs (EIP-4844)** | Ethereum L1 原生 · KZG · target=6/max=9 (post-Pectra) | Ethereum PoS ~100万 validator · DAS (PeerDAS 2026-Q4) · 攻击 cost $40B+ | $0.10-0.30 | ~6 GB/day (post-Pectra) · Fusaka 后 ~60 GB/day | ~12-15 min (2 epoch) | **95%+ ETH-aligned rollup**: Arbitrum · Optimism · Base · zkSync · Linea · Scroll · Taiko · Polygon zkEVM | Ethereum 协议治理 (EIP/ACD) | 极低 · Ethereum sufficiently decentralized 共识 |
| **Celestia** | 独立 PoS · Cosmos SDK+Tendermint · DAS · 2D RS+KZG | ~100 validator · TIA staking ~$1-2B · DAS 强保证 | **$0.02-0.05** (最便宜 modular DA) | 2 MB/block 6s ≈ 28 GB/day · 2027 8 MB target | ~6s instant (Tendermint) | Manta Pacific · Eclipse 部分 · Polygon CDK 部分 · Astria · Movement · ~30+ chain | Celestia Foundation+TIA DAO | TIA SEC 未表态 · geo-fence US · MiCA 待裁决 |
| **EigenDA** | EigenLayer AVS · Dispatcher/Encoder/Validator · KZG+DAS | EigenLayer ~$6B opt-in (restaking) · slashing 经 EigenLayer · 借 ETH stake | $0.06-0.15 | **~15 MB/s sustained** (~100-500 GB/day 实际) | ~10-30s dispatcher + slashing window | Mantle · Movement · Cyber · Rivalz · ZK Stack hyperchain · OP Stack 部分 · Arbitrum Orbit 部分 | EigenLabs+EIGEN+SC | EIGEN SEC 未表态 · restaking 接近 securities |
| **Avail** | 独立 DA chain · Substrate (Polkadot 系)· Babe+Grandpa · KZG+DAS | ~150 validator · AVAIL staking ~$200-500M · 计划 EigenLayer hybrid | $0.04-0.08 | 2 MB/block 20s ≈ 8.6 GB/day · 升级 4 MB ≈ 17 GB | ~30s-1min (Grandpa) | Polygon CDK 部分 · Sophon · QuarkChain · Madara · LumioVM | Avail Foundation+AVAIL DAO | AVAIL 2025 新上线 · MiCA 合规优先 |
| **NEAR DA** | NEAR L1 模块 · sharded 共识 · storage staking · 经 bridge 给 EVM | NEAR ~250 validator · staking ~$1-2B · bridge 安全是额外 surface | **$0.01-0.03** (最便宜) | 理论 100 MB/s · 实际 ~10-50 GB/day | ~2-3s (NEAR fast finality) | Caldera RaaS 部分 · OP Stack 实验 · Polygon CDK 部分 | NEAR Foundation+NEAR DAO | NEAR 多 jurisdiction 审查 · 中等监管敞口 |

**矩阵读法**:
- **Cost 排序**:NEAR DA < Celestia < Avail < EigenDA < Ethereum blobs(blob 最贵但最安全 · NEAR 最便宜但客户量小)
- **Throughput 排序**:EigenDA(最高) > NEAR(理论高 · 实际中) > Celestia ≈ Avail ≈ Ethereum blob(post-Pectra)
- **安全等级排序**:Ethereum blobs(最高 · L1 原生) > EigenDA(借 ETH restake) > Celestia ≈ NEAR DA(独立 PoS · staking ~$1-2B) > Avail(staking 规模最小)
- **Finality 速度排序**:NEAR DA(2-3s) > Celestia(6s) > EigenDA(10-30s + slashing) > Avail(30s-1min) > Ethereum blobs(12-15min)
- **采用规模排序**:Ethereum blobs(95%+ ETH-aligned) > Celestia(~30+ chain · 主导 alt-DA) > EigenDA(~20 chain · 增长最快) > Avail / NEAR DA(各 <10 主要 chain)

## Modular thesis post-Dencun

### Dencun 之前 vs 之后

**Dencun 之前(2024-03 前)**:
- ETH-aligned rollup 用 L1 calldata · cost 高 · 是 rollup 主要 cost(~80%)
- Alt-DA(Celestia 2023-10 主网 · EigenDA 2024-Q1 主网 · Avail 2024-Q2 · NEAR DA 2023)定位 "便宜 90%+" · 抢 cost-sensitive 客户
- Modular thesis 论调:"rollup 应该自由选 DA · 不必绑定 Ethereum L1 DA"

**Dencun 之后(2024-03 至今)**:
- L1 blob 让 ETH-aligned rollup cost 下降 ~100x · 大量 rollup 选择留在 blob
- Alt-DA 价格优势从 ~50x 缩小到 ~3-5x(blob $0.10-0.30 vs Celestia $0.02-0.05)
- Modular thesis 论调转向:"小 cost 差距下 · 应该考虑安全等级 + 生态对齐 · 多数 ETH-aligned 选 blob · 非 ETH-aligned 选 alt-DA"
- Pectra(2025-Q2)blob target 翻倍 · 进一步压缩 alt-DA 价格优势
- Fusaka PeerDAS(2026-Q4 计划)再 10x blob 容量 · 可能让 alt-DA 在 ETH-aligned 市场份额进一步压缩

### Alt-DA 的差异化战略

面对 blob 的价格压力 · 各 alt-DA 走不同 differentiation:

**Celestia**:
- 走 "modular sovereignty" 路线 · 强调 Cosmos / Move / 非 EVM 生态(Manta · Eclipse · Movement · Astria)
- 不与 ETH-aligned 直接竞争 · 服务 "想自主选 settlement layer" 的 sovereign rollup
- TIA token 经济激励 · 给 rollup 客户 token incentive

**EigenDA**:
- 走 "ETH-aligned 但 throughput 极高" 路线 · 服务高 TPS rollup(Mantle · DeFi 重型 dApp)
- 借 EigenLayer 的 $14B+ TVL 经济安全 · 接近 L1 DA 等级
- 是 modular rollup-as-a-service(RaaS)的 default · Caldera · AltLayer · Conduit · 等都默认 EigenDA

**Avail**:
- 走 "L1 DA 替代 + EigenLayer hybrid" 路线 · 想兼顾独立性 + 借 ETH stake
- Polkadot 学术血统 · 在 Polygon CDK / Substrate 系生态有优势
- 客户量目前最小 · 长期看 EigenLayer hybrid 是否能拉客户

**NEAR DA**:
- 走 "极低 cost + NEAR fast finality" 路线 · 服务非 DeFi 高频 use case(gaming · 社交)
- 客户主要是 RaaS · 不是头部 rollup
- 长期价值取决于 NEAR Protocol 生态健康度

### 谁选哪个 DA · 决策维度

**ETH-aligned + institutional grade**(Coinbase Base · 机构 RWA · tokenized fund):
- 必选 Ethereum blobs · 因为安全等级 = Ethereum L1 · 监管 surface 最小
- 不能选 alt-DA · 因为机构 risk committee 不接受非 L1 DA

**ETH-aligned + DeFi-native**(Arbitrum · Optimism · zkSync 等大型 ZK/OP rollup):
- 主选 Ethereum blobs · 因为生态对齐 + 用户期待
- 部分高 throughput 子链可选 EigenDA(Arbitrum Orbit · OP Stack 子 rollup)

**Modular rollup-as-a-service**(Caldera · AltLayer · Conduit 客户):
- 默认 EigenDA(ETH-aligned · 高 throughput)
- 部分客户选 Celestia(便宜)或 Avail / NEAR DA(更便宜)

**Non-ETH-aligned**(Cosmos · Move · Solana 生态扩展):
- 主选 Celestia(Cosmos 血统对齐)· 或 NEAR DA(NEAR 生态)
- 不选 Ethereum blobs · 因为生态不对齐 + 不必要的 L1 fee 暴露

**Gaming / 社交 / 高频低值**(Web3 game · social dApp):
- 主选 NEAR DA(最便宜) · 或 Celestia(便宜 + 中等安全)
- 不选 Ethereum blobs · 因为 cost 仍高于 native gas budget

## Boundary cases / future trajectory

**PeerDAS 影响**(Fusaka 2026-Q4 计划):
- Ethereum blob 容量 10x · 每天 ~60 GB DA
- Alt-DA 价格优势从 3-5x 缩到 ~1.5-2x · 进一步压力
- Celestia / Avail 已规划自己的容量升级回应(Celestia 2027 8 MB block)

**EigenDA 的 restaking 经济边界**:
- EigenDA 收入 2026 估 ~$120M ARR(参见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]])
- 收入 70-90% 给 operator + restaker · EigenLabs 抽 10-30%
- 若 EigenLayer 总 TVL 因 restaking 监管收紧而下降 · EigenDA 安全 budget 同步下降
- 反之若 restaking 监管 clarity + TVL 增长 · EigenDA 成为 alt-DA 中 dominant

**Celestia 长期路径**:
- 已是 modular thesis 旗帜 · 但 ETH-aligned 客户不增长(因为 blob 已便宜)
- 长期靠 Cosmos / Move / sovereign rollup 生态 · 与 ETH 生态分叉
- TIA token 经济需要持续 rollup 客户付 DA fee · 但 alt-DA 价格战让 fee 难提

**Avail 是否能逆袭**:
- Polkadot 系学术血统强 · 但客户量小
- "EigenLayer hybrid" 是关键 · 若成功借 ETH stake 增强安全 · 可能从 Celestia 抢部分客户
- Substrate / Polygon CDK 集成是另一条路径

**NEAR DA 的 niche 化**:
- 价格优势明显 · 但 NEAR Protocol 整体生态规模有限
- 长期可能专注 gaming / 社交 / 高频低值 DA · 而非 DeFi 头部 rollup
- 通过 cross-chain bridge 服务 EVM rollup 引入额外安全 surface

**机构客户 DA 选择**:
- 2026 机构 RWA 案例(BlackRock BUIDL · Franklin Templeton FOBXX · 等)均 deploy 在 Ethereum L1 或 Polygon zkEVM L1-DA · 不接受 alt-DA
- 长期机构是否会接受 EigenDA(借 ETH stake)是 EigenLabs 的 hopeful path · 但目前 institutional risk committee 仍倾向纯 L1 DA

**DA layer 与 ZK proving 的关联**:
- ZK rollup 把 transaction batch 压缩成 small proof · proof 上 L1 · 大数据(state diff)上 DA
- DA layer 容量越大 · ZK rollup 可处理 batch 越大 · 越经济
- ZK rollup 在 DA 选择上更敏感 · 因为是 cost 大头(参见 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]])

**Multi-DA / DA aggregation**:
- 一些 rollup 实验 "用 L1 blob + alt-DA 双层" 模式 · L1 blob 储核心 commitment + alt-DA 储完整 state diff
- 提供 fallback 安全(若 alt-DA 失效 · 仍可从 L1 commitment 重建)
- 是 modular thesis 的 hybrid 路径 · 但工程复杂 · 仅少数 deploy

**监管不对称**:
- Ethereum L1 已是 sufficiently decentralized · 监管 surface 最小
- Celestia / EigenDA / Avail / NEAR DA 的 token 都在监管灰色地带 · 长期不确定性
- 机构客户为避免监管风险 · 偏 L1 DA · 这是 alt-DA 长期 ceiling

**形式化验证 / 工程质量**:
- Ethereum blob 实现是 Geth / Nethermind / Besu / Erigon / Reth 等多客户端 + 长期 audit · 最成熟
- EigenDA 是 EigenLayer 主 AVS · 经多轮 audit + slashing 启用前严审
- Celestia / Avail / NEAR DA 都通过审计 · 但 production 经验 < Ethereum blob

## Counterpoints

- **alt-DA 价格优势继续缩小**:Pectra 翻倍 + Fusaka PeerDAS 10x 后 · alt-DA 仅剩 1.5-2x 价格优势 · 对头部 rollup 不再有吸引力
- **EigenDA "借 ETH stake" 是 cascade risk**:Vitalik 多次警告 restaking 不应过度扩展到 "应用层共识" · EigenDA 是大型应用 · 若出 incident 可能波及 EigenLayer 整体生态
- **modular thesis 是否真创造长期价值**:除了 cost · alt-DA 是否提供其他 differentiated value?若仅 cost 战 · 长期 race-to-bottom · 利润率薄
- **机构永远不会接受 alt-DA**:institutional risk committee 严格要求 L1 DA · 这是 alt-DA 长期 ceiling
- **L1 DA 的"sufficiently decentralized"也在变化**:Ethereum 客户端集中度(Geth 50%+ · Prysm 30%+ · Lido 30%+ stake)未必长期可靠 · 但 alt-DA 集中度更高
- **Celestia 的 "sovereignty" 论调可能在 ETH 生态扩张下边缘化**:大多数开发者最终选 ETH 生态 · sovereign rollup 是少数 use case

## Open questions

- **Fusaka PeerDAS 时间表**:2026-Q4 / 2027-Q1 / 更晚?直接决定 alt-DA 价格优势消失时间表
- **EigenDA 是否能跨过 monopoly Ethereum blob 的 ceiling**:在 ETH-aligned 市场拿到 30%+ 份额需要 institutional 接受 restaking 安全 · 这取决于 SEC / EU MiCA 对 restaking 定性
- **Celestia / Avail / NEAR DA 是否会出现新的 differentiation**:除 cost 外 · 是否有 sovereign rollup / 隐私 DA / specialized DA 新 use case
- **multi-DA hybrid 是否会主流化**:工程复杂度 vs 安全 + cost 优势是否成立
- **机构 RWA 是否会驱动新 institutional-grade DA**:BlackRock / Franklin / Goldman 是否会要求 DA layer 满足特定监管 attestation
- **AggLayer / Polygon CDK 的 DA strategy**:Polygon 同时支持 L1 blob + Celestia + Avail · 长期是否会偏一个?
- **DA layer 与 sequencer decentralization 的交互**:Espresso / Astria 等 shared sequencer 服务多 rollup · 它们与 DA 选择如何耦合
- **Light client / DAS 安全的实战验证**:DAS 理论安全 majority malicious · 但实战仍少 attack scenario · 是否会有 black swan event

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 经济与 2026 市场影响]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 翻倍与 L2 经济连锁]]
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
