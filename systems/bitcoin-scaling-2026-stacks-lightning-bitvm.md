---
title: Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 并行栈
aliases: [bitcoin-scaling-2026, btc-l2-stack, stacks-lightning-bitvm-babylon, bitcoin-scaling-stack, btc-layer2-2026, sbtc-bitvm-babylon, bitcoin-scaling-post-2024]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, bitcoin, scaling, layer2, stacks, lightning, bitvm, babylon, sbtc]
status: active
sources:
  - https://docs.stacks.co
  - https://lightning.network/lightning-network-paper.pdf
  - https://bitvm.org/bitvm.pdf
  - https://babylonchain.io/papers
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chain/Bitcoin
  - Bitcoin Optech newsletter archives
  - Galaxy Research "State of Bitcoin Layers 2026"
---

# Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 并行栈

## TL;DR

Bitcoin 2026 的 scaling 不是 "找一个 L2",而是 **四条并行栈分别吃不同需求**:Lightning 吃 micropayment + 跨境汇款,Stacks 吃 BTC-native DeFi + sBTC 1:1 锚定,BitVM 吃 trust-minimized general computation(包括 EVM 风格 L2),Babylon 吃 Bitcoin staking 作为 PoS 链共享安全。Ordinals/Inscriptions 与 Runes 等 metaprotocol 不在传统 "scaling" 范畴但显著推高 L1 fee 基线。CTV(BIP-119)+ CSFS(BIP-348)等 covenant soft fork 2024-2025 重新进入活跃讨论但仍未激活,drivechain(BIP-300/301)进入冷宫。post-2024 Bitcoin L2 TVL 从 ~$1B 增至 2026-Q1 ~$8-10B 区间,主要来自 sBTC(Stacks Nakamoto)+ Babylon + 几条 BitVM-based EVM rollup。

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-five-pole-comparison-matrix|cross-chain 五极对比矩阵]] for Bitcoin 与 Ethereum L2 / Canton / 跨链桥的对照,并对照 [[systems/eigenlayer-overview|EigenLayer 总览]] 理解 Babylon 作为 "Bitcoin 版 restaking" 的对位关系。背景上参考 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 战略锚]] 看 Bitcoin 与 Ethereum 在 L1 vs L2 上的根本路线分歧。

## Bitcoin scaling 四栈对照

Bitcoin 与 Ethereum 最大的差异是 **没有图灵完备 L1**:Bitcoin Script 限制了 covenant、recursive proof、generalized rollup 等 L2 关键原语,导致 2024-2026 的 scaling 必须分四条并行栈进化。

### Stack 1: Lightning Network

- **定位**:high-frequency micropayment + cross-border remittance
- **架构**:payment channel + HTLC + onion routing(Tor 风格)
- **容量**:2026-Q1 网络容量 ~5,500 BTC(~$550M @ $100k/BTC),自 2021-Q4 峰值 ~5,400 BTC 后基本横盘
- **节点拓扑**:~17k 公开节点 + ~50k+ 私有节点(LSP, Strike, Cash App 等 custodial routing)
- **LSP 层**:Lightning Service Provider(Voltage, LNbits, Strike, Galoy, OpenNode)成为 retail wallet 的标准接入方式,实质把 Lightning 变成 "客户托管 / 提供商运营" 模式
- **2024-2026 进展**:Taproot Assets(Lightning Labs)把 USDT/USDC 跨 Lightning 转账商业化,2026 跨境汇款(尼日利亚 / 阿根廷 / 萨尔瓦多)出现真实 GMV

### Stack 2: Stacks(sBTC + Nakamoto Release)

- **定位**:BTC-native DeFi + smart contract + NFT
- **共识**:PoX(Proof of Transfer)+ Nakamoto Release(2024-10)引入 Bitcoin finality
- **sBTC**:1:1 BTC-pegged,2024-12 mainnet 上线,由 ~15 个 Signer 共同 multi-party 持有真实 BTC,Stacks 链上发行 sBTC token
- **TVL**:Stacks 2026-Q1 ~$300M TVL(sBTC + ALEX + Arkadiko),sBTC 流通 ~3,000 BTC
- **Subnets**:Stacks Subnets 类似 Polygon Supernets,允许 app-chain 独立部署
- **Clarity 语言**:non-Turing-complete decidable smart contract language,避免 EVM 风格 reentrancy attack 但限制部分组合性

### Stack 3: BitVM / BitVM2

- **定位**:Bitcoin-aware general computation,无需 soft fork 即可在 Bitcoin L1 验证任意计算
- **机制**:用 Bitcoin Script + multi-round challenge-response 模拟 fraud proof,1-of-N honesty assumption
- **BitVM2(2024)**:从 prover-verifier 简化为 permissionless challenger,门槛大幅下降
- **生态**:Citrea(EVM-based zk-rollup, BitVM bridge)、BOB(Build on Bitcoin, hybrid Ethereum L2)、Bitlayer、Merlin、Bsquared、GOAT Network
- **TVL**:2026-Q1 BitVM-related L2 总 TVL ~$2-3B(L2Beat 自报口径,需谨慎),Citrea + BOB 占大头
- **挑战**:challenge period 长(7-14 天)+ liveness assumption + Bitcoin L1 fee 上涨时 fraud proof 成本激增

### Stack 4: Babylon(Bitcoin Staking)

- **定位**:让 Bitcoin holder 不离开 L1 即可为 PoS 链提供经济安全(类似 [[systems/eigenlayer-overview|EigenLayer]] 但底层资产是 BTC)
- **机制**:用 Bitcoin timestamping 给 BTC stake 制造可验证的 slashing 机制,无需 wrap / bridge BTC
- **Phase-1(2024-08)** :仅 staking + 时间戳,无 yield
- **Phase-2(2025)**:接入 Babylon Genesis L1 + 第三方 PoS 链(Cosmos 系 + 部分 L1)
- **规模**:2026-Q1 staked ~50,000-60,000 BTC(~$5-6B),是 Bitcoin 上最大单一 TVL 类别
- **AVS / BSN 类比**:Babylon Secured Network(BSN)对应 EigenLayer 的 AVS,Cosmos appchain / Babylon Genesis / 部分 EVM L1 是早期消费者

## Soft fork 状态:CTV / CSFS / drivechain

Bitcoin 的 scaling 路线长期被 soft fork 议题卡住,2024-2026 关键提案:

- **CTV(BIP-119, OP_CHECKTEMPLATEVERIFY)**:Jeremy Rubin 2019 提出,允许 covenant(预先承诺的输出脚本),启用 vault / payment pool / 更高效 Lightning channel。2024 重新激活讨论但社区分歧明显
- **CSFS(BIP-348, OP_CHECKSIGFROMSTACK)**:从 stack 检查签名,与 CTV 配合可实现 BitVM2 的更高效证明压缩
- **APO / SIGHASH_ANYPREVOUT(BIP-118)**:Eltoo 路线,简化 Lightning 协议,讨论中
- **drivechain(BIP-300/301)** :Paul Sztorc 长期推动的 BIP-300 sidechain miner-secured bridge,2024-2026 基本被 Bitcoin Core 主流开发者拒绝,理由是 miner-bridge 改变 Bitcoin 经济激励
- **OP_CAT(BIP-347)** :2024-2025 一度热门,可启用 covenant 模拟,但同样未激活
- **soft fork timeline**:Bitcoin Core 没有 ETH 风格 EIP roadmap,激活完全依赖社区共识 + miner signaling + UASF 风险,2026 内任一关键 soft fork 激活概率仍 < 30%

soft fork 激活停滞直接导致 **BitVM 路线成为 "无需 fork 的 covenant 替代"**,这是 2024-2026 BitVM 生态爆发的根本动力。

## Post-2024 Bitcoin L2 TVL 分布

2026-Q1 各栈 TVL 大致分布(数字来自 L2Beat + DefiLlama + 项目自我披露,需谨慎):

- Babylon staking: ~$5-6B(单一最大类别)
- BitVM-based L2(Citrea / BOB / Bitlayer / Merlin / Bsquared / GOAT): 合计 ~$2-3B
- Stacks(sBTC + ALEX + Arkadiko): ~$300M
- Lightning Network 总容量: ~$550M(~5,500 BTC)
- Ordinals / Runes / BRC-20 流通市值: 单独类别,~$2-4B 浮动剧烈,不属于 scaling

总和 ~$8-10B 量级,vs Bitcoin 流通市值 ~$2T,渗透率仅 ~0.4-0.5%,远低于 Ethereum L2 ~10-15% 渗透率([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 扩容]] 后 Ethereum L2 仍占主导)。

## Bitcoin scaling vs Ethereum L2 路线对照

| 维度 | Bitcoin scaling | Ethereum L2 |
|---|---|---|
| L1 编程性 | Bitcoin Script 受限 | EVM 图灵完备 |
| 主流 L2 类型 | 4 类并行(Lightning/Stacks/BitVM/Babylon) | 收敛于 rollup(optimistic + zk) |
| 安全锚 | PoW + L1 finality | PoS + EigenDA / blob |
| Bridge 信任 | 大多 trust-assumption-heavy(sBTC = 15 multisig, BitVM = 1-of-N) | rollup canonical bridge 趋向 trustless |
| Soft fork 路径 | 极慢,社区共识门槛高 | EIP roadmap 半年级 |
| 跨链工具 | 几乎不复用 EVM 工具链 | [[systems/cctp-v2-overview|CCTP V2]] / [[systems/chain-abstraction-pattern-overview|chain abstraction]] 等 |

详细对位见 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]]。

## Stack 1 深入 · Lightning 经济模型与 LSP 化

Lightning 2026 的真实状态是 "**custodial-by-default + self-custody-as-exception**":

- **LSP 模型主导**:Phoenix(ACINQ)、Breez(Greenlight)、Cash App / Strike(custodial)、Galoy(Bitcoin Beach)、Voltage(企业 LSP)负责为 retail 用户开 / 关 channel + inbound liquidity 管理 + routing,用户感知不到 channel 概念
- **inbound liquidity 拍卖**:Lightning Pool / Magma / Amboss 等 marketplace 让 routing node 拍卖 inbound channel,小型路由节点不再有商业模式
- **跨境汇款实际用例**:Strike-El Salvador / Bitnob-Nigeria / Tropykus-LATAM 等 LSP 把 USD ↔ Lightning ↔ NGN/ARS/MXN 路径商业化,2026 月 GMV $200M-500M 量级(行业披露口径,需谨慎)
- **Taproot Assets**:Lightning Labs 让 stablecoin(USDT / USDC mock)可在 Lightning channel 内部转移,实质把 Lightning 变成 multi-asset payment 网络,2025-2026 mainnet 部分稳定币集成上线
- **Lightning vs Base USDC 竞争**:同样是 "stablecoin payment rail",Base + USDC + [[systems/erc-4337-overview|ERC-4337]] 的开发者体验远好于 Lightning,Lightning 的优势收缩到 "BTC-native + 极致 final settlement"
- **Liquid Network 平行栈**:Blockstream 的 federated sidechain Liquid 上的 L-BTC + USDT-Liquid 也是 Bitcoin 生态 payment 选项,机构托管使用,但用户感知度低

## Stack 2 深入 · Stacks Nakamoto + sBTC

Stacks 是 Bitcoin scaling 中 **唯一带完整 smart contract 平台 + BTC 1:1 锚定 token + 公链治理** 的栈:

- **Nakamoto Release(2024-10)** :从 "PoX 独立 block" 切换到 "Bitcoin finality",Stacks block 被 anchored 进 Bitcoin block 后即获 Bitcoin 级别 finality
- **sBTC 机制**:用户把 BTC 发到 sBTC peg-in 地址 → ~15 个 Signer(从 ~150 Stackers 中选举)用 threshold-schnorr 共同持有 BTC → Stacks 链上 mint 等量 sBTC,Burn 时反向走 multisig 释放
- **Signer 经济模型**:Signer 用 STX 抵押(stack)以获选 Signer 权,失误 / 恶意行为 STX 被 slashed
- **Clarity 语言特点**:non-Turing-complete(无 unbounded loop), decidable(可静态验证),trade-off 是不能写复杂 DeFi(部分 yield 协议需绕道)
- **生态**:ALEX(DEX + Bitcoin pool)、Arkadiko(stablecoin USDA)、Bitflow、Velar、StackingDAO,2026 DeFi 体量小但增长稳
- **Subnets**:类似 Polygon Supernets / [[systems/polygon-agglayer-architecture-rollout|AggLayer CDK]] 的 Stacks 版,允许 app-chain 独立 finality,2024-2026 mainnet 上线
- **2026 Stacks 战略**:从 "BTC 上的 smart contract" 演化为 "Bitcoin DeFi hub",目标与 [[systems/eigenlayer-overview|EigenLayer]] 在 ETH 生态的位置类似但范围 BTC

## Stack 3 深入 · BitVM 系 EVM L2 名单

2024-2026 BitVM 路线快速分化为多个 EVM-compatible Bitcoin L2:

- **Citrea**:Chainway 团队主导,EVM-based zk-rollup,2024-Q1 testnet,2024-Q4 mainnet beta,BitVM bridge 用于 trust-minimized BTC peg
- **BOB(Build on Bitcoin)** :hybrid L2,同时 settle 到 Bitcoin + Ethereum,默认 OP Stack + BitVM bridge
- **Bitlayer**:类 OP Stack + BitVM bridge,2024-Q2 mainnet,新加坡 / 中国生态较活跃
- **Merlin Chain**:OKX 系生态,2024-Q1 mainnet,主打 BRC-20 + Ordinals 生态
- **Bsquared(B² Network)** :ZK-based rollup,2024 mainnet
- **GOAT Network**:2024-2025 BitVM2 早期实现,主打 "sequencer-decentralized BitVM2"
- **Citrea vs BOB vs Bitlayer 流量对比**:2026-Q1 daily active address 顺序大致 BOB > Bitlayer ≈ Merlin > Citrea > Bsquared > GOAT,但波动剧烈
- **共同弱点**:BitVM bridge 实际工程复杂度极高,2026 主流部署多数仍是 **multisig federation + BitVM-style verification proof-of-concept**,纯 trust-minimized BitVM bridge mainnet 数量个位数
- **与 Ethereum L2 对照**:BitVM-EVM 路线本质是 "**用 Bitcoin 当 settlement,EVM 当执行**" — 这与 [[systems/eigenlayer-overview|EigenLayer]] 让 ETH 提供 economic security 的逻辑相似,但 Bitcoin 提供的是 PoW finality 而非 stake-slashing

## Stack 4 深入 · Babylon staking 机制

Babylon 是 **"Bitcoin 版 EigenLayer"** 但不依赖 wrap / bridge:

- **核心技术**:利用 Bitcoin timestamping + 特殊 UTXO 脚本(CHECKLOCKTIMEVERIFY + multisig)制造 "Bitcoin slashable stake"
- **Phase-1(2024-08 mainnet)** :用户把 BTC lock 进 Babylon-managed UTXO,获得 "staking position" 但无 yield(只为后续 PoS 链共享安全做准备)
- **Phase-2(2025)** :Babylon Genesis L1(自己的 PoS Cosmos chain)+ 第三方 Babylon Secured Network(BSN)接入,BTC stake 开始产生 yield(BSN token + Babylon network rewards)
- **slashing 机制**:如果 PoS 链验证者(同时是 BTC staker)双签或恶意行为,Bitcoin UTXO 通过预签 transaction 被强制销毁
- **规模**:2026-Q1 staked ~50,000-60,000 BTC(~$5-6B),BSN 接入 ~20-30 个 PoS chain(主要 Cosmos 系 + 部分 EVM L1)
- **与 EigenLayer 对照**:EigenLayer 在 ETH 提供 ~$15-20B restaked TVL,Babylon 在 BTC 提供 ~$5-6B,两者并列成为 "新一代 cryptoeconomic security marketplace" 的双极
- **BTC ETF 持有方参与**:理论上 BlackRock / Fidelity 等 ETF 持有 ~$50-80B BTC 可部分接入 Babylon 获取 staking yield,但 2026 内未见正式公告,合规路径(staking 是否构成证券化 ETF 持仓变更)未明

## Counterpoints

- **TVL 口径不一**:L2Beat 与 DefiLlama 对 BitVM-based L2 的 "BTC TVL" 计法不同,部分项目把 wrapped BTC 与原生 BTC 混算,真实 trust-minimized TVL 可能远低于自报数字
- **Lightning 容量瓶颈**:5 年内容量基本横盘,LSP 模型实质让 Lightning 变成 "类银行托管网络",denies 原初的 self-custodial 愿景
- **Stacks Signer 集中度**:sBTC 的 15 Signer 集合理论上仍是 multisig 信任假设,与 "BTC-native" 标榜的去信任化有距离
- **BitVM challenge period 不实用**:7-14 天 challenge window 对 retail user 几乎不可接受,需 liquidity provider 提前垫付(类似 Optimism 早期),费率因此居高
- **Babylon 经济安全循环依赖 BTC 价格**:slashing 价值与 BTC 现货价正相关,熊市 PoS 链共享安全实际价值大幅缩水
- **Ordinals / Runes 反向论**:Inscription / Runes 推高 Bitcoin L1 fee 后,Lightning 等需要 channel open/close 的 L2 反而被边缘化

## Open questions

- CTV / CSFS / OP_CAT 至少一项能否在 2027 前激活?如果不能,BitVM 路线是否成为长期主流?
- sBTC Signer 集合能否从 15 扩到 100+ 并引入 [[systems/eigenlayer-overview|EigenLayer]] 风格 economic security?
- Babylon Genesis L1 vs Babylon as pure infrastructure 的战略选择会如何展开?
- BlackRock / Fidelity 等 BTC ETF 持有方是否会把 BTC 部署到 Babylon 获取 staking yield?对照 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 在 Ethereum 上的部署经验
- BitVM-based EVM L2 与 Ethereum L2 在 AI agent payment 场景的竞争结局?对照 [[agent-economy/x402-cloudflare-aws-edge-integration|x402 边缘集成]] 的 settlement 选型
- Lightning Network 在 [[agent-economy/INDEX|agent economy]] 中作为 micropayment rail 是否会复活,还是被 ERC-4337 / x402 完全替代?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]]
- [[systems/eigenlayer-overview|EigenLayer 总览]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 战略锚]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 扩容]]
- [[systems/cctp-v2-overview|CCTP V2 总览]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction 模式总览]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 边缘集成]]
<!-- /wiki-links:managed -->

## Sources

- Stacks Documentation — sBTC, Nakamoto Release, Clarity
- Lightning Network Paper(Poon & Dryja, 2016)
- BitVM Whitepaper(Robin Linus, 2023)+ BitVM2(2024)
- Babylon Whitepaper · Babylon Chain documentation
- L2Beat — Bitcoin L2 tracking
- DefiLlama — Bitcoin chain category, sBTC TVL
- Bitcoin Optech newsletter — CTV / CSFS / OP_CAT discussion archive
- Galaxy Research "State of Bitcoin Layers 2026"
- Lightning Labs Taproot Assets documentation
