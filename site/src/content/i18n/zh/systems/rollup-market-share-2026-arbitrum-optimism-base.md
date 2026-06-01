---
source: systems/rollup-market-share-2026-arbitrum-optimism-base
source_hash: 35531e7cdf6588c1
lang: zh
status: machine
fidelity: ok
title: "Rollup 市场份额 2026 · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea"
translated_at: 2026-06-01T04:15:40.101Z
---
# Rollup 市场份额 2026 · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea

## TL;DR

- 关于 7 个主流 Ethereum L2 rollup，对 2026-Q2 时点的 **TVL · 日活地址 · 日交易量 · sequencer revenue · gas cost · DEX 深度 · 借贷规模 · RWA · 治理成熟度 · 生态多样性 · DA 选择** 这 11 个轴进行对照
- **TVL 排名 2026-Q2 估计**：**Base ~$18B**（领先 · 增长最快）· **Arbitrum ~$13B**（stagnant）· **Optimism ~$5B** · **zkSync Era ~$2.0B** · **Linea ~$1.2B** · **Polygon zkEVM ~$800M** · **Scroll ~$700M**
- **日活地址排名**：Base ~3-5M · Arbitrum ~1-2M · Optimism ~600k-1M · zkSync ~400-700k · Linea ~300-500k · Polygon zkEVM ~150-300k · Scroll ~100-200k
- **Base-led growth**：Coinbase 母公司流量 + Stripe / Shopify / Apple Pay 入口 + meme coin / consumer dApp 占据 dominant · 2024-2026 中唯一 TVL 翻倍 + 用户翻倍的 L2
- **Arbitrum stagnation**：技术领先（Nitro · Stylus · Orbit），但增长放缓 · DeFi-heavy 用户结构 · 缺少消费者入口
- **Optimism Superchain expansion**：通过 OP Stack 框架，~30+ chain（Base · Mode · Worldcoin · Lyra · Polynomial · Zora 等）加入 · Superchain 总 TVL 实际上超过 Arbitrum
- **OP-rollup 由 TVL 主导 · ZK-rollup 由技术叙事主导**：OP rollup（Arbitrum · Optimism · Base）占 L2 总 TVL 的 ~85%+ · ZK rollup（zkSync · Linea · Scroll · Polygon zkEVM · Taiko）约 ~15%，但被视为长期方向
- 路由：[[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] 与 [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済 2026]] 配对

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 下。请与 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] 对照阅读，以理解本条目的市场份额表在经济层面总结的技术成熟度维度；并与 [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] 对照阅读，以理解决定 rollup 单位经济的底层 DA 成本结构。与 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] 配对，可理解重塑 sequencer margin 的 2025-Q2 催化因素。关于将 Base / Arbitrum / Optimism 定位为“ETH-aligned L2 寡头”的元策略框架，见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]。关于区分 rollup 的 DA layer 选择，见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]。关于这些 rollup 之间的跨链消息传递，见 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] 和 [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]。关于为部分 rollup AVS（sequencer / DA）提供动力的 restaking-secured 基础设施，见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]] 和 [[systems/eigenlayer-overview|EigenLayer overview]]。关于竞争同一 consumer / meme coin / DEX 流量的 Solana 生态，见 [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]。

## 为什么这个矩阵重要

L2 rollup 在 2023-2024 年仍然是“技术路线之争 + TVL 排名竞争”。到 2024-2026 年已演进为成熟产业结构：**Base 垄断消费者市场 · Arbitrum 占有 DeFi-native · Optimism Superchain 联邦化扩张 · ZK rollup 分割 mid-tier**。

**为什么对照 7 个 L2 ，而不是更多**：
- Base · Arbitrum · Optimism · zkSync Era · Linea · Polygon zkEVM · Scroll = 2026-Q2 TVL > $500M 的全部 L2
- 排除：Blast（TVL > $500M 但治理未成熟 + 主要是 meme / yield farming）· Mantle（基于 EigenDA，不是 L1 DA · 独立分析）· Taiko（TVL < $500M · 技术 reference 但市场份额小 · 参见 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK matrix]]）· Manta Pacific / Eclipse（alt-DA · 独立 vertical）

**机构客户（参见 [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]]）选择 L2 时的判断轴**：
- Stage 1 / Stage 2 decentralization（L2Beat 评价）
- 治理成熟度（challenge window 内谁能升级智能合约）
- DA layer 选择（L1 blob vs alt-DA）
- 生态多样性（DEX · 借贷 · RWA · stablecoin 流通）
- Sequencer revenue 的可持续性

**DeFi 用户选择 L2 时的判断轴**：
- DEX 深度（slippage · liquidity）
- 借贷利率 + 风险（Aave · Compound · Morpho）
- 桥接 cost + finality（参见 [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge matrix]]）
- Meme coin / consumer dApp 活动

**Consumer dApp 选择 L2 时的判断轴**：
- Account Abstraction（参见 [[systems/erc-4337-overview|ERC-4337 overview]] 和 [[systems/erc-7702-overview|ERC-7702 overview]]）
- Gas sponsorship 工具
- Onramp（法币入口 · stablecoin liquidity）
- 用户基础（meme coin · 社交 · 游戏）

本矩阵对照 7 个公开运行中的主流 L2  · 横向展开 11 个轴 · 2026-Q2 数据快照。

### Base (Coinbase)

**TVL May 2026**：~$18B（L2 首位 · 自 2024-Q2 Base 上线后 18 个月达成 · 行业最快增长）。

**日活地址**：~3-5M（L2 首位 · 大幅高于 Arbitrum / Optimism）。

**日交易量**：~10-15M tx/day。

**Sequencer revenue**：~$30-100M ARR（2026 估计 · 取决于 meme coin 周期）。

**用户 gas cost**：Pectra 后 ~$0.0005-0.005 / simple transfer · sub-cent 体验稳定。

**DEX 深度**：Aerodrome（主导 · ~$3-5B TVL · 将 Velodrome v2  fork 到 Base）· Uniswap v3 · Curve · BaseSwap 等。Stablecoin pair 深度为行业最深。

**借贷规模**：Aave v3 on Base ~$2-4B · Morpho ~$500M-1B · Compound ~$300M-500M。

**RWA**：Centrifuge · Maple · Stripe USDC settlement · PayPal PYUSD 流通。由于 Coinbase USDC primary 入口，Base 成为 RWA + stablecoin 流通最深的 L2 。

**治理成熟度**：**Stage 1 decentralization**（L2Beat）· Coinbase 主导 sequencer · 2026-2027 计划引入 decentralized sequencer。Upgrade：Security Council 7-of-13 + 7-day timelock。

**生态多样性**：Consumer-heavy（DEX · meme coin · 社交 · 游戏）· Aerodrome / Friend.tech / Farcaster / Zora / Coinbase Smart Wallet 等。DeFi 与消费应用平衡。

**DA layer**：Ethereum L1 blobs（EIP-4844）· 无 alt-DA 计划。

**主要优势**：
- Coinbase 母公司流量入口（美国顶级 CEX · 1.5 億+ 注册用户）
- Stripe / Shopify / Apple Pay 集成（USDC settlement）
- Coinbase Smart Wallet（原生 AA · 不需要 ETH gas · 参见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]）
- 极低 gas + Aerodrome 深度使 meme coin / 消费 dApp 爆发
- Base 专用项目（Friend.tech · Farcaster · Zora）为 Base 提供独有生态

### Arbitrum (Offchain Labs)

**TVL May 2026**：~$13B（L2 第二 · 2024-2025 stagnant · 2026 因 Stylus 开发者吸引而温和恢复）。

**日活地址**：~1-2M（显著低于 Base · 但单用户单 tx 价值更高）。

**日交易量**：~4-6M tx/day。

**Sequencer revenue**：~$30-70M ARR。

**用户 gas cost**：Pectra 后 ~$0.001-0.01 / simple transfer。

**DEX 深度**：GMX（主导 perp · ~$1-2B TVL）· Uniswap v3 · Camelot · SushiSwap · TraderJoe 等。Perp DEX 集中度高。

**借贷规模**：Aave v3 on Arbitrum ~$2-3B · Radiant ~$500M（2025 hack 后恢复）· Compound ~$300M。

**RWA**：相对较少 · Arbitrum 不是 RWA 主选 L2 。

**治理成熟度**：**Stage 1 decentralization**（L2Beat）· DAO 治理 + ARB token · Security Council 9-of-12 · BoLD（Bounded Liquidity Delay）证明系统在 2025 上线，使 Arbitrum 成为 OP rollup 中首个 permissionless validator。

**生态多样性**：DeFi-heavy（perp · spot · 借贷 · yield farming）· GMX / Camelot / Pendle / Vela 等。消费应用较少。

**DA layer**：Ethereum L1 blobs（主链）· Arbitrum Orbit 子链可选择 AnyTrust（委员会 DA）或 EigenDA。

**主要优势**：
- 技术领先（Stylus · 支持 Rust/C++ 智能合约 · 扩展 EVM 以外能力）
- BoLD permissionless validator 是 OP rollup 中最 advanced 的 decentralization
- 通过 Arbitrum Orbit 框架部署 ~20+ L3 / appchain
- DeFi-native 用户基础稳定 · TVL 不易流出

**主要劣势**：
- 缺少消费者入口（无 Coinbase / Stripe 等价物）
- DeFi-native 用户增长饱和
- TVL 在 2024-2025 stagnant · 2026 仅温和恢复

### Optimism (OP Labs)

**TVL May 2026**：~$5B（L2 第三 · OP Labs 直接运营 · 但 OP Stack 子链 TVL 远超主链）。

**日活地址**：~600k-1M（主链）+ Superchain 子链合计 ~5-8M（高于 Base 主链单独）。

**日交易量**：主链 ~2-3M tx/day · Superchain 总计 ~15-25M tx/day。

**Sequencer revenue**：主链 ~$10-25M ARR · OP Labs 通过 Superchain 接收 sequencer revenue 分配 · 总计 ~$30-60M ARR。

**用户 gas cost**：Pectra 后 ~$0.001-0.01 / simple transfer。

**DEX 深度**：Velodrome（主导）· Uniswap v3 · Curve 等。OP DEX 深度低于 Arbitrum，但高于主流 ZK rollup。

**借贷规模**：Aave v3 on Optimism ~$1-2B · Sonne · Granary 等。

**RWA**：Maker / Sky 在 OP 上有部分 deploy · 但不是 RWA 主选。

**治理成熟度**：**Stage 1 decentralization** · OP token DAO + Citizen House（双 house 治理）· Security Council + 7-day timelock。Superchain governance 在 OP Labs + 各链团队之间分权。

**生态多样性**：DeFi + 部分消费（Worldcoin on OP Stack · Zora · Mode · Lyra 等）· 消费 dApp 第二 L2 平台（Base 以外）。

**DA layer**：Ethereum L1 blobs（主链 + 大部分 Superchain）· Mode 一部分使用 EigenDA · 部分 Superchain 测试 Celestia。

**主要优势**：
- **OP Superchain 联邦化扩张**：Base · Worldcoin · Mode · Lyra · Polynomial · Zora · Soneium · Unichain 等 ~30+ chain 加入 · 共享 sequencer + 治理
- OP Stack 是 modular rollup-as-a-service 的主流框架之一 1 
- Superchain 总 TVL 实际上超过 Arbitrum（若将 Base 算入 Superchain，则 ~$25B+）
- Retroactive Public Goods Funding（RPGF）是 ecosystem incentive 创新

**主要劣势**：
- 主链本体 TVL stagnant · 增长全部来自 Superchain 子链
- Base 是 Superchain 最大子链 · 但 Coinbase 影响力使 Base 实质上是独立品牌 · 不被视为 OP 直接受益

### zkSync Era (Matter Labs)

**TVL May 2026**：~$2.0B（ZK rollup 首位 · 包括 ZK Stack hyperchain TVL ~$500M）。

**日活地址**：~400-700k。

**日交易量**：~2-3M tx/day。

**Sequencer revenue**：~$15-30M ARR。

**用户 gas cost**：Pectra 后 ~$0.001-0.005（Account Abstraction native · 用户可用 stablecoin / ZK token 支付 · 不需要 ETH）。

**DEX 深度**：SyncSwap（主导）· Maverick · Mute 等。深度低于 Base / Arbitrum / Optimism。

**借贷规模**：Aave v3 on zkSync ~$300-500M · Reactor 等。

**RWA**：相对较少 · ZK rollup 总体不是 RWA 主流（institutional 更偏 L1 + Polygon zkEVM）。

**治理成熟度**：**Stage 1 decentralization**（L2Beat）· ZK token DAO + Matter Labs Foundation · Security Council 9-of-15 · 21-day timelock（2024 后从 1-day 延长）。

**生态多样性**：DeFi-heavy + AA-native dApp（Argent · Braavos AA wallet 集成）· ZK Stack hyperchain（GRVT perpetual · Treasure gaming · Cronos zkEVM）。

**DA layer**：Ethereum L1 blobs（主链）· ZK Stack hyperchain 可选择 EigenDA / Celestia（参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA 対照]]）。

**主要优势**：
- ZK rollup 中 TVL 最大
- Account Abstraction native（无需 ERC-4337 包装 · 用户体验更顺滑）
- ZK Stack 框架是 ZK rollup modular RaaS 主流之一 1 
- Boojum prover 性能在 ZK rollup 中领先

**主要劣势**：
- Type 4 EVM compatibility（不同 bytecode · 需要 dev tooling 适配）
- 缺少 Coinbase / Stripe 等消费者入口
- 用户增长慢于 Linea（借用 MetaMask 流量）

### Linea (Consensys)

**TVL May 2026**：~$1.2B（ZK rollup 第二 · MetaMask 流量优势）。

**日活地址**：~300-500k。

**日交易量**：~1-2M tx/day。

**Sequencer revenue**：~$10-25M ARR。

**用户 gas cost**：Pectra 后 ~$0.002-0.01 / simple transfer。

**DEX 深度**：Lynex（主导）· iZUMi · Mendi 等。中等深度。

**借贷规模**：Aave v3 on Linea ~$200-400M · Mendi · ZeroLend 等。

**RWA**：MetaMask Institutional 是 Consensys 产品 · Linea 上有部分 institutional pilot。

**治理成熟度**：**Stage 1 decentralization** · Consensys 主导 · Security Council 7-of-13 · 7-day timelock · 2026-2027 计划引入 LINEA token DAO。

**生态多样性**：DeFi + Consensys 集成（MetaMask · Infura · Truffle 工具链原生支持）· dApp 有许多 MetaMask 集成案例。

**DA layer**：Ethereum L1 blobs only（Consensys 的“all on-chain”立场）。

**主要优势**：
- MetaMask 集成（MetaMask 是 EVM 钱包市场份额首位 · ~30M+ MAU · 默认推荐 Linea）
- Consensys 工具链生态深度（Infura · Truffle · Hardhat 等）
- Institutional pilot 入口（MetaMask Institutional）

**主要劣势**：
- TVL 主要依赖 MetaMask 流量 · 不是有机增长
- 缺少消费者 dApp 入口
- 虽然是 ZK rollup，但为 Type 2（EVM-equivalent），不是 Type 1  · 长期 prove cost 不占优

### Polygon zkEVM / AggLayer (Polygon Labs)

**TVL May 2026**：~$800M（包括 AggLayer 联邦）。

**日活地址**：~150-300k（主链）+ AggLayer 子链合计 ~500k-1M。

**日交易量**：~500k-1M tx/day。

**Sequencer revenue**：~$5-15M ARR。

**用户 gas cost**：Pectra 后 ~$0.001-0.005 / simple transfer。

**DEX 深度**：QuickSwap（主导）· Uniswap v3 · Balancer 等。中等深度。

**借贷规模**：Aave v3 on Polygon zkEVM ~$100-300M · 其他 lending 协议较小。

**RWA**：**Franklin Templeton FOBXX pilot**（2024）· 多个 enterprise pilot · ZK rollup 中 RWA 最深（institutional pilot 更偏 Polygon）。

**治理成熟度**：**Stage 1 decentralization** · Polygon Foundation + POL token DAO · Security Council 7-of-13 · 7-day timelock。

**生态多样性**：DeFi + enterprise dApp + identity（Polygon ID）· 多元化。AggLayer 联邦 Polygon zkEVM + 其他 zkEVM chain + Astar zkEVM。

**DA layer**：Ethereum L1 blobs default + 提供 validium 模式（DAC 7-of-9 多签）· enterprise / 私有链可选择。

**主要优势**：
- Polygon PoS chain（EVM L1 sidechain · 不纳入本矩阵 · 但 Polygon 整体品牌很强）到 Polygon zkEVM 的迁移是一部分流量来源
- AggLayer 联邦使多个 zkEVM chain 共享 settlement · ZK rollup 中的 modular RaaS 框架
- Enterprise pilot 入口领先（Franklin Templeton · 多个银行 pilot）
- Polygon ID（decentralized identity）+ zkEVM 是对 institutional KYC/AML 友好的组合

**主要劣势**：
- TVL 增长慢于 zkSync / Linea
- Polygon PoS chain 的流量迁移到 zkEVM 并不顺滑（用户感觉 Polygon zkEVM 是新链）
- Type 2.5 EVM compatibility · 不是 Type 1 

### Scroll (Scroll Foundation)

**TVL May 2026**：~$700M（ZK rollup 中 EVM-equivalent 路线最纯粹）。

**日活地址**：~100-200k。

**日交易量**：~500k-1M tx/day。

**Sequencer revenue**：~$5-15M ARR。

**用户 gas cost**：Pectra 后 ~$0.005-0.02 / simple transfer。

**DEX 深度**：Aave · Uniswap · Pendle · GMX 主流全部 deploy · 但 Scroll 上 native DEX 较少。

**借贷规模**：Aave v3 on Scroll ~$200-400M。

**RWA**：相对较少 · 但 Scroll 的“EVM-equivalent + L1 DA 纯度”使部分 institutional pilot 偏向 Scroll。

**治理成熟度**：**Stage 1 decentralization** · Scroll Foundation + 学术血统（PSE 长期协作）· Security Council 7-of-13 · 7-day timelock · 2026-2027 计划引入 SCR token DAO。

**生态多样性**：DeFi-heavy（Aave / Uniswap / Pendle / GMX 主流 fork）· 缺少独有 native dApp。Scroll Canvas 是 onboarding 工具。

**DA layer**：Ethereum L1 blobs only（明确不做 validium 的立场）。

**主要优势**：
- Type 2 EVM-equivalent（99% bytecode-level 兼容 · 主流 dApp 可零修改 deploy）
- 学术血统强（PSE / Ethereum Foundation 长期协作）
- L1 DA 纯度立场（institutional friendly）

**主要劣势**：
- TVL 增长慢 · 缺少独有 catalyst
- 没有 Coinbase / MetaMask / Consensys 类的大量流量入口
- 用户感受与其他 ZK rollup 类似 · 缺少差异化品牌

## 大型对照矩阵表

**7 个主流 L2 rollup × 11 轴对照**（2026-Q2 状态）：

| Rollup | TVL May 2026 | Daily Active | Daily Tx | Sequencer Revenue | User Gas | DEX 深度 | 借贷规模 | RWA | 治理成熟度 | 生态特色 | DA Layer |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Base (Coinbase)** | **~$18B（L2 首位）** | **3-5M（首位）** | 10-15M | $30-100M ARR | $0.0005-0.005 | Aerodrome $3-5B · Uniswap · Curve | Aave $2-4B · Morpho $500M-1B | Stripe USDC · PayPal PYUSD · Centrifuge | Stage 1 · SC 7/13 · 7d timelock | Consumer-heavy · meme/social/game · Coinbase Smart Wallet | L1 blobs only |
| **Arbitrum** | ~$13B（第二） | 1-2M | 4-6M | $30-70M ARR | $0.001-0.01 | GMX $1-2B perp · Uniswap · Camelot | Aave $2-3B · Radiant $500M | 相对较少 | Stage 1 · DAO+ARB · SC 9/12 · BoLD permissionless | **Stylus (Rust/C++)** · DeFi-heavy · Orbit L3 框架 | L1 blobs + Orbit 可选择 AnyTrust/EigenDA |
| **Optimism + Superchain** | ~$5B 主链 · Superchain 总 ~$25B+ | 600k-1M 主链 · Superchain 5-8M | 主链 2-3M · Superchain 15-25M | $30-60M ARR（含分配） | $0.001-0.01 | Velodrome 主导 · Uniswap | Aave $1-2B · Sonne | Maker 部分 | Stage 1 · OP DAO + Citizen House · SC + 7d timelock | **OP Superchain 联邦 ~30+ chain** · Worldcoin/Zora/Mode/Soneium | L1 blobs（主）· Mode EigenDA · 部分 Celestia 测试 |
| **zkSync Era** | ~$2.0B（ZK 首位） | 400-700k | 2-3M | $15-30M ARR | $0.001-0.005 · **AA native** | SyncSwap · Maverick | Aave $300-500M | 较少 | Stage 1 · ZK DAO · SC 9/15 · 21d timelock | DeFi + **AA native** · ZK Stack hyperchain（GRVT/Treasure/Cronos） | L1 blobs · hyperchain 可选择 EigenDA/Celestia |
| **Linea (Consensys)** | ~$1.2B | 300-500k | 1-2M | $10-25M ARR | $0.002-0.01 | Lynex · Mendi 中等 | Aave $200-400M | MetaMask Institutional pilot | Stage 1 · Consensys 主导 · SC 7/13 · 7d timelock | **MetaMask 集成** · Infura/Truffle 工具链 | L1 blobs only（all on-chain 立场） |
| **Polygon zkEVM/AggLayer** | ~$800M（含 AggLayer） | 150-300k 主链 · AggLayer 总 500k-1M | 500k-1M | $5-15M ARR | $0.001-0.005 | QuickSwap · Uniswap · Balancer | Aave $100-300M | **Franklin Templeton FOBXX pilot** · 多个 enterprise pilot | Stage 1 · POL DAO · SC 7/13 · 7d timelock | DeFi + enterprise + **Polygon ID** · AggLayer 联邦 | L1 blobs + Validium 模式（DAC 7/9） |
| **Scroll** | ~$700M | 100-200k | 500k-1M | $5-15M ARR | $0.005-0.02 | Aave/Uniswap/Pendle/GMX 主流 | Aave $200-400M | 较少 · 但 L1 DA 纯度吸引部分 institutional | Stage 1 · Scroll Foundation · SC 7/13 · 7d timelock | DeFi-heavy · **Type 2 EVM-equivalent** · 学术血统（PSE） | L1 blobs only（明确不做 validium） |

**矩阵读法**：
- **TVL 排名**：Base > Arbitrum > Optimism（主链）> zkSync > Linea > Polygon zkEVM > Scroll · 但若将 Superchain 整体算入 Optimism，则 OP Superchain > Base > Arbitrum
- **日活地址排名**：Base 首位 + 显著领先 · Arbitrum / Optimism 中等 · ZK rollup 均较小
- **Sequencer revenue 排名**：Base ≈ Arbitrum ≈ Optimism（3 巨头各自 $30-70M ARR）· ZK rollup 各自 $5-30M ARR
- **生态深度**：Base = consumer + DeFi · Arbitrum = DeFi 专门 · Optimism = Superchain 联邦 · zkSync = AA native · Linea = MetaMask 流量 · Polygon zkEVM = enterprise pilot · Scroll = EVM 纯度
- **治理成熟度收敛**：7 个都为 Stage 1 · Security Council + 7-21 day timelock · DAO 治理或团队主导 · 实质上达到 Stage 2 full decentralization 的 L2 不存在

### 为什么 Base 增长最快

**Coinbase 母公司效应**：
- Coinbase 是美国 US 顶级 CEX · 注册用户 ~1.5 億（2026）· 月活 ~500-700 万
- Coinbase 积极将 USDC primary 入口 + 法币 onramp 推向 Base
- Coinbase Smart Wallet（原生 AA · 参见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]）默认 deploy 到 Base · 不需要 ETH gas · 用户体验接近 Web2 

**Stripe / Shopify / Apple Pay 集成**：
- Stripe 在 2024-2025 年宣布“USDC on Base”商户 settlement · 大幅降低 cross-border payment 成本
- Shopify 商户 pay-with-USDC 默认是 Base
- Apple Pay 通过 Coinbase Wallet 与 Base 集成

**Meme coin 潮流**：
- 自 2024-Q3 起，Base 上 meme coin volume 爆发（BRETT · TOSHI · DEGEN 等）
- Base 日 DEX volume 多次超过 $1B · 大幅高于其他 L2 
- Aerodrome（Base 主 DEX）成为 L2 第一 DEX by TVL · ~$3-5B

**Consumer / 社交 dApp**：
- Farcaster（去中心化社交）主要 deploy 在 Base · Frames（Farcaster 内置 mini-app）生态爆发
- Friend.tech · Zora · Mocaverse 等 consumer dApp 集中在 Base

### Base 的“soft moat”

- **Sequencer 中心化但被信任**：Coinbase 是美国上市公司（NASDAQ: COIN）· 监管合规 · 用户信任度高
- **L1 DA 立场**：Base 始终使用 L1 blobs · 无 alt-DA 计划 · 与 institutional 期待一致
- **OP Stack 集成**：Base 是 OP Superchain 成员 · 享受 OP 生态溢出并维持独立品牌

### Base 的潜在风险

- **Sequencer 中心化是单点故障**：如果 Coinbase 因监管要求审查特定 transaction · 会影响 Base 的抗审查性
- **过度依赖 Meme coin 周期**：meme coin volatile · 若降温，Base 用户活动可能下降
- **OP Superchain 内部竞争**：Worldcoin / Mode / Soneium 等 OP Stack chain 是 Base 竞争者 · 不只是合作

### 为什么 Arbitrum 增长放缓

- **DeFi-native 用户结构**：Arbitrum 主要用户是 DeFi power user（perp trader · yield farmer · 多 protocol 交互）· 该群体规模已饱和
- **缺少消费者入口**：无 Coinbase / Stripe / MetaMask 类的大量流量入口 · 新用户获取依赖 native dApp
- **GMX 单一协议集中**：Arbitrum DeFi 大部分 volume 集中在 GMX · 2024-2025 perp DEX 竞争（独立 L1 上的 Hyperliquid + Cosmos 上的 dYdX v4）分散 Arbitrum 流量

### Arbitrum 的技术优势（尚未充分变现）

- **Stylus**（2024 上线）：可 deploy Rust / C++ 智能合约 · EVM L2 中唯一支持 · 但实际 dApp 采用较慢
- **BoLD permissionless validator**（2025 上线）：OP rollup 中最 advanced 的 decentralization · 但用户无感
- **Arbitrum Orbit**：通过框架 deploy ~20+ L3 / appchain · 但 Orbit chain TVL 总和 < OP Superchain
- **Arbitrum Nova**：AnyTrust DA 子链 · 服务高频低价值 use case · 但市场份额小

### Arbitrum 2026 恢复信号

- 2026-Q1 Stylus 上 Rust DeFi 协议上线（Cygnus · Hydrogen 等）· dApp 多元化
- BoLD permissionless validator 使 ARB stake economic 启动 · token holder 收益预期改善
- Arbitrum Orbit 的部分 L3 向圈外扩张（XAI gaming · Lumia · ApeChain）

### Superchain 框架

参见 OP Stack documentation：
- **共享 sequencer**（计划 · 2026-2027 引入）
- **共享 governance**（Citizen House 部分参与）
- **共享 settlement**（L1 上的相互信任桥）
- **共享 RPGF**（Retroactive Public Goods Funding · OP 治理 token 分配）

各 Superchain 子链保持独立运营 + 独立品牌 · 但共享底层 stack。

### Superchain 成员（2026-Q2 部分）

- **Base (Coinbase)** · TVL $18B
- **Optimism 主链** · TVL $5B
- **Worldcoin** · 用户多但 TVL 低
- **Mode** · DeFi specialty · 部分使用 EigenDA
- **Lyra** · options DEX · TVL ~$200-400M
- **Polynomial** · perp · 相对较小
- **Zora** · NFT / creator economy · 用户多但 TVL 低
- **Soneium**（Sony 推进 · 2025 上线）· 入门级
- **Unichain**（Uniswap 推进 · 2025 上线）· Uniswap 专用
- **Mantle** · EigenDA L2 （technically not Superchain · 但为 OP Stack 初期 fork）
- 其他 ~20+ chain

### Superchain 总 TVL

Base + Optimism + 其他 Superchain TVL 合计约 ~$25B+ · **实际超过 Arbitrum 单链**。但 Coinbase 不强调 Base 是 Superchain 成员（Base 是独立品牌）· 因此行业对照中 Optimism 仍按单独计算。

### Superchain 治理张力

- **OP Labs vs Base team**：由于 Coinbase 影响力，Base 实质独立 · OP Labs 获得 sequencer revenue 分配（~10%），但治理影响有限
- **Worldcoin / Mode / 其他子链**：许多拥有自有 token + DAO · OP token 治理影响变弱
- **共享 sequencer 的实际进展**：OP Labs 持续推进 · 但各子链是否放弃 sequencer revenue 是政治问题

### 用户 / dApp / 资本分布

**Web3 Total active addresses（L2 + L1 + Solana 等 · 2026-Q2 估计）**：
- 全 EVM L2 daily active ~10-15M（Base 占 ~30-40%）
- Ethereum L1 daily active ~500k-1M（机构 + 大户集中）
- Solana daily active ~5-10M（meme coin 主导）
- Polygon PoS sidechain ~2-3M（下降中 · 流量迁移到 zkEVM）
- 其他 ~5M

**资本分布（TVL · 2026-Q2 估计）**：
- Ethereum L1 ~$120B（机构 + 大户 + 老钱）
- L2 总计 ~$45B（Base $18B + Arbitrum $13B + Optimism $5B + 其他 $9B）
- Solana ~$15B
- 其他 L1 ~$30B（Tron + BSC + Avalanche + etc）

**DEX volume 分布（2026 日均）**：
- L2 DEX total ~$3-5B / day（Base 主导 ~40%）
- Solana DEX total ~$3-6B / day（meme coin 主导）
- Ethereum L1 DEX ~$1-2B / day（机构 swap）
- 其他 ~$1B / day

### 与 Solana 生态的竞争

参见 [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]：
- Solana 在 meme coin / consumer trading 上与 Base 直接竞争
- 但 Solana 的 TPS 优势（post-Firedancer · 参见 [[systems/solana-firedancer-validator-economics|Solana Firedancer]]）使 Solana 在高频交易中仍然领先
- Base 的优势是 L2 安全性 + Coinbase 入口 + USDC 流通
- 长期来看，Web3 终端用户可能在 Base 和 Solana 之间分流 · 而不是其中一方成为 dominant

### 跨 L2 流动性碎片化

- 各 L2 之间的桥接 cost + finality 是问题（参见 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] 和 [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]）
- 共享 sequencer（Espresso · Astria）和 cross-rollup intent（CoW · Bungee）是缓解措施 · 但 2026 仍处早期
- Stablecoin liquidity（USDC · USDT）分散在多个 L2 上 · 是用户摩擦的主要原因

## 边界案例 / 未来轨迹

**Base 是否会受到监管导致的 sequencer 约束**：Coinbase 受 SEC / CFTC 监管 · 若 SEC 强制 Base sequencer 审查 OFAC 制裁地址，将影响 Base 在 ETH-aligned L2 生态中的 status。目前 Coinbase 公开承诺不审查 · 但长期风险存在。

**Arbitrum BoLD permissionless validator 能否驱动 ARB token 价值**：BoLD 使任何人都可 deposit ARB 成为 validator 并验证 challenge · 但用户感受不明确。token 价值反映需要验证时间。

**OP Superchain 是否会出现 fragmentation**：如果 Superchain 成员 > 30  · 治理协调难度上升 · 部分子链可能 fork OP Stack 并独立。Worldcoin / Mantle / Mode 已多次表达独立 governance 意向。

**ZK rollup 能否从 mid-tier 突破到 top-tier**：zkSync / Linea / Scroll / Polygon zkEVM 的长期 TVL 增长较慢 · catalyst（monster dApp · 机构 RWA · Fusaka PeerDAS 带来进一步成本下降）能否使 ZK 突破到 top-tier？

**Account Abstraction 主流化时间表**：Coinbase Smart Wallet / Argent / Braavos / MetaMask Smart Account 都在推进 · 2026 用户中 ~20-30% 可能使用 AA · 2027-2028 可能主流化（参见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]）· 这将大幅改善 L2 用户体验。

**Stage 2 decentralization 时间表**：目前所有 L2 均为 Stage 1 · L2Beat 的 Stage 2 criteria 是 permissionless validator + 30-day social fallback + 完整 dispute resolution · 在 2026 内公开承诺达到 Stage 2 的 L2 不存在 · 可能是 2027-2028+。

**RWA 流量 split**：Polygon zkEVM 在 ZK rollup 中 RWA pilot 最深 · 但实际 RWA TVL 大部分仍在 Ethereum L1。随着 institutional risk committee 接受度提升，L2 RWA 是否会增长？

**Sequencer revenue 长期演进**：Pectra 后 sequencer margin 稳定 · 但若用户数继续增长 · L2 总 sequencer revenue 可能在 2027 年达到 $500M+ · 这将使 L2 估值更可量化（类似 SaaS ARR multiple）。

**Cross-L2 intent / shared sequencer**：Espresso · Astria 等共享 sequencer 在 2026-2027 上线 · 若主流 L2 采用 · 流动性碎片化问题将缓解 · 用户体验大幅改善。

## 相关

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照 2026]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[systems/solana-firedancer-validator-economics|Solana Firedancer validator economics]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]

## 来源

- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Arbiscan · https://arbiscan.io/
- Optimistic Etherscan · https://optimistic.etherscan.io/
- Basescan · https://basescan.org/
- zkSync explorer · https://explorer.zksync.io/
- Polygon zkEVM explorer · https://zkevm.polygonscan.com/
- Scrollscan · https://scrollscan.com/
- Lineascan · https://lineascan.build/
- Optimism Superchain docs · https://docs.optimism.io/superchain
- Arbitrum Orbit docs · https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart
- Base docs · https://docs.base.org/
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
