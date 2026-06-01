---
source: systems/bitcoin-scaling-2026-stacks-lightning-bitvm
source_hash: 3971a695fa717aed
lang: zh
status: machine
fidelity: ok
title: "Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 并行栈"
translated_at: 2026-06-01T04:15:40.178Z
---
# Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 并行栈

## TL;DR

Bitcoin 2026 的 scaling 并不是“选择 L2 中的 1 个”，而是**4 个并行栈分别吸收不同需求**：Lightning 负责小额支付 + 国际汇款，Stacks 负责 BTC 原生 DeFi + sBTC 1:1 锚定，BitVM 负责 trust-minimized 的通用计算（包括 EVM 风格 L2 ），Babylon 负责通过 Bitcoin staking 向 PoS 链共享安全。Ordinals/Inscriptions 和 Runes 等元协议不属于传统“scaling”范畴，但显著抬高了 L1 fee 的基准线。CTV（BIP-119）+ CSFS（BIP-348）等 covenant 软分叉在 2024-2025 重新开始活跃讨论但仍未激活，drivechain（BIP-300/301）进入冷遇期。post-2024 的 Bitcoin L2 TVL 从约 $1B 增加到 2026-Q1 的约 $8-10B 区间，主要来自 sBTC（Stacks Nakamoto）+ Babylon + 几条基于 BitVM 的 EVM rollup。

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain 5 極対照マトリクス]] 阅读，以对照 Bitcoin 与 Ethereum L2 / Canton / 跨链桥，并与 [[systems/eigenlayer-overview|EigenLayer 総覧]] 对照，理解 Babylon 与“Bitcoin 版 restaking”的对位关系。作为背景请参见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 戦略アンカー]]，观察 Bitcoin 与 Ethereum 在 L1 vs L2 上的根本路线分歧。

## Bitcoin scaling 4 栈对照

Bitcoin 与 Ethereum 最大的差异是**没有图灵完备的 L1 **：Bitcoin Script 限制了 covenant、recursive proof、generalized rollup 等 L2 关键原语，2024-2026 的 scaling 不得不分为 4 个并行栈演进。

### Stack 1: Lightning Network

- **定位**：高频小额支付 + 国际汇款
- **架构**：payment channel + HTLC + onion routing（Tor 风格）
- **容量**：2026-Q1 网络容量约 5,500 BTC（约 $550M @ $100k/BTC），2021-Q4 峰值约 5,400 BTC 后基本横盘
- **节点拓扑**：约 17k 公开节点 + 约 50k+ 私有节点（LSP、Strike、Cash App 等 custodial routing）
- **LSP 层**：Lightning Service Provider（Voltage、LNbits、Strike、Galoy、OpenNode）成为零售钱包的标准连接方式，实质上把 Lightning 转变为“客户托管 / 提供方运营”模型
- **2024-2026 进展**：Taproot Assets（Lightning Labs）将 USDT/USDC 的 Lightning 跨境转账商业化，2026 国际汇款（尼日利亚 / 阿根廷 / 萨尔瓦多）出现实际 GMV

### Stack 2: Stacks（sBTC + Nakamoto Release）

- **定位**：BTC 原生 DeFi + 智能合约 + NFT
- **共识**：PoX（Proof of Transfer）+ Nakamoto Release（2024-10）引入 Bitcoin finality
- **sBTC**：1:1 BTC-pegged，2024-12 主网上线，约 15 个 Signer 通过 threshold-schnorr 共同持有实际 BTC，并在 Stacks 链上发行 sBTC token
- **TVL**：Stacks 2026-Q1 约 $300M TVL（sBTC + ALEX + Arkadiko），sBTC 流通约 3,000 BTC
- **Subnets**：Stacks Subnets 类似 Polygon Supernets，允许 app-chain 独立部署
- **Clarity 语言**：non-Turing-complete 的可判定智能合约语言，避免 EVM 风格 reentrancy attack，但限制部分可组合性

### Stack 3: BitVM / BitVM2

- **定位**：面向 Bitcoin 的通用计算，无需软分叉即可在 Bitcoin L1 上验证任意计算
- **机制**：用 Bitcoin Script + 多阶段 challenge-response 模拟 fraud proof，1-of-N 的 honesty assumption
- **BitVM2（2024）**：从 prover-verifier 简化为 permissionless challenger，门槛大幅下降
- **生态系统**：Citrea（EVM-based zk-rollup、BitVM bridge）、BOB（Build on Bitcoin，hybrid Ethereum L2）、Bitlayer、Merlin、Bsquared、GOAT Network
- **TVL**：2026-Q1 BitVM-related L2 总 TVL 约 $2-3B（基于 L2Beat 自我申报，需注意），Citrea + BOB 占大半
- **课题**：challenge period 较长（7-14 日）+ liveness assumption + Bitcoin L1 fee 上升时 fraud proof 成本急增

### Stack 4: Babylon（Bitcoin Staking）

- **定位**：Bitcoin holder 不离开 L1 即可向 PoS 链提供经济安全（类似 [[systems/eigenlayer-overview|EigenLayer]]，但原资是 BTC）
- **机制**：利用 Bitcoin timestamping 为 BTC stake 创建可验证的 slashing 机制，不需要 BTC wrap / bridge
- **Phase-1（2024-08）**：仅 staking + 时间戳，无 yield
- **Phase-2（2025）**：Babylon Genesis L1 + 连接第三方 PoS 链（Cosmos 系 + 部分 L1）
- **规模**：2026-Q1 staked 约 50,000-60,000 BTC（约 $5-6B），是 Bitcoin 上最大的单一 TVL 类别
- **AVS / BSN 类比**：Babylon Secured Network（BSN）相当于 EigenLayer 的 AVS，Cosmos appchain / Babylon Genesis / 部分 EVM L1 是早期消费者

## 软分叉状况：CTV / CSFS / drivechain

Bitcoin 的 scaling 路线长期受困于软分叉议题，2024-2026 的重要提案包括：

- **CTV（BIP-119, OP_CHECKTEMPLATEVERIFY）**：Jeremy Rubin 在 2019 提出，允许 covenant（预先承诺的输出脚本），实现 vault / payment pool / 更高效的 Lightning channel。2024 讨论重启，但社区内分歧明显
- **CSFS（BIP-348, OP_CHECKSIGFROMSTACK）**：从栈中验证签名，与 CTV 结合可实现 BitVM2 更高效的证明压缩
- **APO / SIGHASH_ANYPREVOUT（BIP-118）**：Eltoo 路线，简化 Lightning 协议，仍在讨论中
- **drivechain（BIP-300/301）**：Paul Sztorc 长期推动的 BIP-300 侧链 miner-secured bridge，2024-2026 被 Bitcoin Core 主流开发者基本拒绝，理由是 miner-bridge 会改变 Bitcoin 的经济激励
- **OP_CAT（BIP-347）**：2024-2025 一度成为话题，可模拟 covenant，但同样未激活
- **软分叉 timeline**：Bitcoin Core 没有 ETH 风格的 EIP roadmap，激活完全依赖社区共识 + miner signaling + UASF 风险，2026 内任一重要软分叉被激活的概率仍 < 30%

软分叉激活停滞直接使 **BitVM 路线成为“无需 fork 的 covenant 替代方案”** —— 这是 2024-2026 BitVM 生态爆发的根本驱动力。

## Post-2024 Bitcoin L2 TVL 分布

2026-Q1 各栈 TVL 的大致分布（数字来自 L2Beat + DefiLlama + 项目自披露，需注意）：

- Babylon staking：约 $5-6B（单一最大类别）
- BitVM-based L2（Citrea / BOB / Bitlayer / Merlin / Bsquared / GOAT）：合计约 $2-3B
- Stacks（sBTC + ALEX + Arkadiko）：约 $300M
- Lightning Network 总容量：约 $550M（约 5,500 BTC）
- Ordinals / Runes / BRC-20 流通市值：单独类别，约 $2-4B，波动剧烈，不属于 scaling

合计约 $8-10B 规模，vs Bitcoin 流通市值约 $2T，渗透率仅约 0.4-0.5%，大幅低于 Ethereum L2 的约 10-15% 渗透率（[[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] 后 Ethereum L2 仍主导）。

## Bitcoin scaling vs Ethereum L2 路线对照

| 维度 | Bitcoin scaling | Ethereum L2 |
|---|---|---|
| L1 可编程性 | 受 Bitcoin Script 限制 | EVM 图灵完备 |
| 主流 L2 类型 | 4 类别并行（Lightning/Stacks/BitVM/Babylon） | 收敛到 rollup（optimistic + zk） |
| 安全锚 | PoW + L1 finality | PoS + EigenDA / blob |
| Bridge 信任 | 大多 trust-assumption-heavy（sBTC = 15 multisig，BitVM = 1-of-N） | rollup canonical bridge 正在 trustless 化 |
| 软分叉路径 | 极慢，社区共识阈值高 | EIP roadmap 半年单位 |
| 跨链工具 | 几乎不复用 EVM 工具链 | [[systems/cctp-v2-overview|CCTP V2]] / [[systems/chain-abstraction-pattern-overview|chain abstraction]] 等 |

详细对比请参见 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]]。

## Stack 1 深挖 · Lightning 经济模型与 LSP 化

Lightning 2026 的实态是“**默认 custodial + self-custody 是例外**”：

- **LSP 模型主导**：Phoenix（ACINQ）、Breez（Greenlight）、Cash App / Strike（custodial）、Galoy（Bitcoin Beach）、Voltage（企业 LSP）为零售用户承担 channel 开闭 + inbound liquidity 管理 + routing，用户无需意识到 channel 概念
- **inbound liquidity 拍卖**：Lightning Pool / Magma / Amboss 等市场中 routing node 拍卖 inbound channel，小规模路由节点失去商业模式
- **国际汇款实际用例**：Strike-El Salvador / Bitnob-Nigeria / Tropykus-LATAM 等 LSP 将 USD ↔ Lightning ↔ NGN/ARS/MXN 路径商业化，2026 月度 GMV 达 $200M-500M 规模（基于行业披露，需注意）
- **Taproot Assets**：Lightning Labs 使稳定币（USDT / USDC mock）能够在 Lightning channel 内转账，实质上把 Lightning 转变为多资产支付网络，2025-2026 主网上部分稳定币集成已运行
- **Lightning vs Base USDC 竞争**：同样作为“稳定币支付 rail”，Base + USDC + [[systems/erc-4337-overview|ERC-4337]] 的开发者体验远好于 Lightning，Lightning 的优势缩小为“BTC 原生 + 最终 final settlement”
- **Liquid Network 并行栈**：Blockstream 的 federated sidechain Liquid 上的 L-BTC + USDT-Liquid 也是 Bitcoin 生态的支付选项，用于机构托管场景，但用户认知度较低

## Stack 2 深挖 · Stacks Nakamoto + sBTC

Stacks 是 Bitcoin scaling 中**唯一具备完整智能合约平台 + BTC 1:1 锚定 token + 公共链治理的栈**：

- **Nakamoto Release（2024-10）**：从“PoX 独立区块”切换为“Bitcoin finality”，Stacks 区块在 anchored 到 Bitcoin 区块时获得 Bitcoin 级别 finality
- **sBTC 机制**：用户将 BTC 发送到 sBTC peg-in 地址 → 约 15 个 Signer（从约 150 Stackers 中选出）通过 threshold-schnorr 共同持有 BTC → 在 Stacks 链上 mint 等量 sBTC，Burn 时经 multisig 反向释放
- **Signer 经济模型**：Signer 以 STX 作为抵押（stack）取得 Signer 权，不当 / 恶意行为会导致 STX 被 slashed
- **Clarity 语言特征**：non-Turing-complete（无 unbounded loop）、decidable（可静态验证），权衡是复杂 DeFi 难以编写（部分 yield 协议需要绕路）
- **生态系统**：ALEX（DEX + Bitcoin pool）、Arkadiko（stablecoin USDA）、Bitflow、Velar、StackingDAO、2026 DeFi 规模虽小但稳定增长
- **Subnets**：类似 Polygon Supernets / [[systems/polygon-agglayer-architecture-rollout|AggLayer CDK]] 的 Stacks 版本，允许 app-chain 独立 finality，2024-2026 主网运行
- **2026 Stacks 战略**：从“BTC 上的智能合约”演进为“Bitcoin DeFi hub”，目标类似 [[systems/eigenlayer-overview|EigenLayer]] 在 ETH 生态中的位置，但对象范围是 BTC

## Stack 3 深挖 · BitVM 系 EVM L2 列表

2024-2026 BitVM 路线快速分化为多个 EVM-compatible Bitcoin L2 ：

- **Citrea**：Chainway 团队主导，EVM-based zk-rollup，2024-Q1 testnet，2024-Q4 主网 beta，使用 BitVM bridge 作为 trust-minimized BTC peg
- **BOB（Build on Bitcoin）**：hybrid L2，同时 settle 到 Bitcoin + Ethereum，默认 OP Stack + BitVM bridge
- **Bitlayer**：类似 OP Stack + BitVM bridge，2024-Q2 主网，新加坡 / 中国生态活跃
- **Merlin Chain**：OKX 系生态，2024-Q1 主网，以 BRC-20 + Ordinals 生态为主轴
- **Bsquared（B² Network）**：ZK-based rollup，2024 主网
- **GOAT Network**：2024-2025 BitVM2 早期实现，以“sequencer-decentralized BitVM2”为主轴
- **Citrea vs BOB vs Bitlayer 流量比较**：2026-Q1 daily active address 排名大致为 BOB > Bitlayer ≈ Merlin > Citrea > Bsquared > GOAT，波动剧烈
- **共同弱点**：BitVM bridge 的实现工程复杂度极高，2026 主流部署的大多数仍是 **multisig federation + BitVM-style verification proof-of-concept**，纯粹 trust-minimized BitVM bridge 主网数量为个位数
- **与 Ethereum L2 的对照**：BitVM-EVM 路线本质上是“**把 Bitcoin 用作 settlement，把 EVM 用作 execution**”—— 这类似 [[systems/eigenlayer-overview|EigenLayer]] 让 ETH 提供 economic security 的逻辑，但 Bitcoin 提供的是 PoW finality，而不是 stake-slashing

## Stack 4 深挖 · Babylon staking 机制

Babylon 是 **“Bitcoin 版 EigenLayer”**，但不依赖 wrap / bridge：

- **核心技术**：利用 Bitcoin timestamping + 特殊 UTXO 脚本（CHECKLOCKTIMEVERIFY + multisig）来创建“Bitcoin slashable stake”
- **Phase-1（2024-08 主网）**：用户将 BTC lock 到 Babylon-managed UTXO，获得“staking position”，但没有 yield（仅为后续 PoS 链安全共享做准备）
- **Phase-2（2025）**：Babylon Genesis L1（自身 PoS Cosmos chain）+ 第三方 Babylon Secured Network（BSN）连接，BTC stake 开始产生 yield（BSN token + Babylon 网络奖励）
- **slashing 机制**：如果 PoS 链的 validator（同时也是 BTC staker）进行二重签名或恶意行为，Bitcoin UTXO 会通过预签名 transaction 被强制销毁
- **规模**：2026-Q1 staked 约 50,000-60,000 BTC（约 $5-6B），连接到 BSN 的 PoS chain 约 20-30 个（主要为 Cosmos 系 + 部分 EVM L1）
- **与 EigenLayer 的对照**：EigenLayer 在 ETH 上提供约 $15-20B restaked TVL，Babylon 在 BTC 上提供约 $5-6B，两者并列成为“新世代 cryptoeconomic security marketplace”的两极
- **BTC ETF 持有者参与**：理论上 BlackRock / Fidelity 等 ETF 持有的约 $50-80B BTC 的一部分可接入 Babylon 取得 staking yield，但 2026 内没有正式公告，合规路径（staking 是否构成证券化 ETF 持仓变更）不明

## 相关

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]]
- [[systems/eigenlayer-overview|EigenLayer 総覧]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 戦略アンカー]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]]
- [[systems/cctp-v2-overview|CCTP V2 総覧]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction モデル総覧]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]]
<!-- /wiki-links:managed -->

## 来源

- Stacks Documentation — sBTC, Nakamoto Release, Clarity
- Lightning Network Paper（Poon & Dryja, 2016）
- BitVM Whitepaper（Robin Linus, 2023）+ BitVM2（2024）
- Babylon Whitepaper · Babylon Chain documentation
- L2Beat — Bitcoin L2 tracking
- DefiLlama — Bitcoin chain category, sBTC TVL
- Bitcoin Optech newsletter — CTV / CSFS / OP_CAT discussion archive
- Galaxy Research "State of Bitcoin Layers 2026"
- Lightning Labs Taproot Assets documentation
