---
source: exchanges/global-perp-dex-competitive-deep-dive-matrix
source_hash: 2b9ca770244bc5f4
lang: zh
status: machine
fidelity: ok
title: "全球永续 DEX 竞争深度剖析矩阵"
translated_at: 2026-05-31T03:19:56.412Z
---

# 全球永续 DEX 竞争深度剖析矩阵

## TL;DR

永续期货 DEX 建立在**三种结构上截然不同的流动性模型**之上——CLOB（链上或混合的中央限价订单簿）、vAMM/池对手方（单一多资产 LP 池服务所有交易者）以及混合/预言机定价——把它们一概压平为"所有永续 DEX"的读者，会误读每个场所的费用、滑点、抗 MEV、LP 风险及监管敞口。本条目是补充 [[exchanges/global-perp-dex-five-comparison|the 5-way summary]] 的**深度剖析 11路矩阵**，新增了**第二代衍生品 DEX**（Synthetix Perps、Kwenta、Aark、Aevo、Apex），并为实质性重建架构的协议提供 **v1 /v2 拆分**（dYdX v3 对 v4, GMX v1 对 v2）。交叉轴为链、流动性模型、费用层级、最大杠杆、资产覆盖、结算资产、MEV 防护、gas 经济性、日成交量区间及永续 DEX 市场份额带。该矩阵与 [[exchanges/global-dex-major-five-comparison|the global spot DEX major-5 comparison]] 和 [[exchanges/native-dex-flip-incumbent-pattern|the native-chain-DEX flip-incumbent pattern]] 一并阅读，以理解链上衍生品相对现货 DEX 份额迁移所处的位置。

## Wiki route

本条目归于 [[exchanges/INDEX|exchanges index]] 之下，作为永续 DEX 深度剖析矩阵。请与 [[exchanges/global-perp-dex-five-comparison|global perp DEX top 5 comparison]]（本条目所扩展的前身）、[[exchanges/global-dex-major-five-comparison|global DEX major five comparison]]（现货 DEX 同侪解读）、[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]]（链原生对跨链结构视角）、[[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]（与 Drift 相关的 Solana 侧细节）、[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]（结算资产出入金路径故事）、[[exchanges/amm-design-evolution|AMM design evolution]]（与 vAMM 永续相关的 LP 对手方模型历史）、[[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]]（若干永续 DEX 接受作为保证金的抵押品侧 LST/LRT 路径）、[[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]（更广泛的链格局）以及 [[systems/INDEX|systems index]]（跨链路由界面）一并阅读。

## 该矩阵为何重要

到 2025-2026, 时，永续 DEX 整体清算了有意义的单日成交量，偶尔可与中层 CEX 同侪相比，但其底层架构如此分歧，以致仅作费用层级比较是有误导性的。Hyperliquid 专门构建的 L1 CLOB 与 dYdX v4的 Cosmos 验证者协调 CLOB 具有不同的事件响应特性；GMX 的 GLP 池对手方模型与 Drift 的 vAMM + 预言机定价具有不同的 LP 风险经济性；Synthetix Perps 的 Perps v2 /v3 设计与 Kwenta 在 Synthetix 后端上的前端具有不同的结算时点；Aevo、Apex 和 Aark 各自出于不同原因选择了不同的链基础（Layer-2 对 OP Stack 应用链对 StarkEx）。下方矩阵将**架构、gas、费用、杠杆、资产覆盖、MEV 防护及市场份额**各轴并列，使读者能为合适的用例（高杠杆流动性对 vs 长尾资产 vs MEV 敏感流量 vs LST 抵押保证金）选取合适的场所，而非默认采用某日 24小时成交量最高的那个 DEX。

## 各 DEX 深度剖析

### dYdX v3 （StarkEx L2, 2021-2023）

规模化的初代 CLOB 永续 DEX，运行于定制的 StarkEx 实例（以太坊上的 zk-rollup Layer-2 ），采用链下订单簿撮合和链上结算。**结算资产**：USDC。**最大杠杆**：顶级交易对最高 20倍。**资产覆盖**：峰值约 40 个交易对（主流币 + 前 100 山寨币）。**MEV 防护**：高——链下撮合引擎配合周期性 L1 提交，消除了单笔交易大部分链上 MEV 面。**gas 经济性**：交易者不支付 gas（仅入金/出金），因为撮合在链下；入金/出金经由 StarkEx 逃生舱使用以太坊 L1 gas。**费用层级**：maker 0.02%/taker 0.05%标准。**日成交量区间**（活跃期 2022-2023）：通常 $0.5-2B。**市场份额**：2022 周期峰值永续 DEX 领导者。

v3 架构有其局限：(a) 依赖链下撮合服务器集中了信任，(b) DYDX 代币治理与协议费用脱钩（无原生交易费累积给代币持有者），(c) StarkEx 系统约束了链级可扩展性。dYdX 的战略答案是 v4 重建——见下一行。详情：交叉链接至 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]（USDC 结算资产出入金）。

### dYdX v4 （Cosmos 应用链，2023-10 启动）

在定制 Cosmos 应用链（dYdX Chain）上的完整架构重建，采用 CometBFT 共识。**CLOB 撮合现由验证者执行**（每个验证者运行自己的订单簿，验证者就标准排序达成共识），且**所有订单簿状态和交易结算都在链上**。**结算资产**：USDC。**最大杠杆**：20倍。**资产覆盖**：40+ 个交易对。**MEV 防护**：高（验证者侧撮合配合明确的反 MEV 机制）。**gas 经济性**：交易者支付验证者网络 gas（经由 DYDX 支付），但交易成本极小。**费用层级**：maker 0.02%/taker 0.05%并配返佣。**日成交量**：通常 $0.3-1B（低于 v3 时代，因 Hyperliquid 夺取了份额）。**市场份额**：截至 2024-2025为前 3 永续 DEX。

v4 是**首个规模化的完全链上 CLOB 永续 DEX**，也是 2023 后一代的架构模板。权衡：通过将撮合移至链上的验证者共识，dYdX 增加了验证者集合被夺取的运营风险，但获得了可信的去中心化。美国交易者访问被地理封锁。详情：交叉链接至 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]（Cosmos 应用链背景）。

### Hyperliquid（Hyperliquid L1, 2023-）

专门构建的 Layer-1 （HyperBFT 共识、定制 EVM 兼容执行层"HyperEVM"），配备为低延迟订单簿交易设计的**完全链上 CLOB**。**结算资产**：USDC（从 Arbitrum 跨链而来）。**最大杠杆**：主流币最高 50倍。**资产覆盖**：任意时点 100+ 个永续交易对，并快速上市长尾资产。**MEV 防护**：高（定制 L1 ，其订单流设计针对典型 MEV 向量优化）。**gas 经济性**：交易者支付 HyperEVM gas，但每笔交易成本低于一美分。**费用层级**：提供 maker 返佣，taker 0.025-0.05%分层。**日成交量区间**：$1-5B（高波动事件期间偶尔更高）。**市场份额**：截至 2024-2025, **按成交量主导的永续 DEX 领导者**，HYPE 代币 TGE 2024-11 通过无预售发行分发给追溯性用户。

Hyperliquid 的独特运营成就是在完全链上场所交付 CEX 级订单簿 UX（亚秒级下单、紧窄买卖价差、深度账簿）。团队的设计选择——在定制 L1 上运行一切，而非使用现有的 L1 或 L2 ——是关键的架构押注。详情：交叉链接至 [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]]（链原生翻转分析）。

### Vertex Protocol（Arbitrum，2023-）

Arbitrum 上的混合 **CLOB + AMM** 设计，配备链下订单簿撮合和 AMM 回退流动性。其独特特征是**集成的多产品保证金账户**——现货 + 永续 + 货币市场头寸共享单一保证金池，实现跨产品净额结算。**结算资产**：USDC。**最大杠杆**：主流币 10倍，山寨币更低。**资产覆盖**：30-50 个永续交易对 + 现货。**MEV 防护**：中高（链下撮合）。**gas 经济性**：Arbitrum L2 gas（低于一美分）。**费用层级**：maker 0.0%/taker 0.02-0.04%。**日成交量区间**：$0.1-0.4B。**市场份额**：前 10 永续 DEX。

Vertex Edge（多链扩展）通过同步订单簿架构将订单簿扩展至 Arbitrum、Mantle、Sei、Base、Blast 及其他链，试图跨多个 L2捕获流动性而不强迫交易者集中到单一链上。详情：交叉链接至 [[exchanges/amm-design-evolution|AMM design evolution]]（混合 CLOB+AMM 谱系）。

### Drift Protocol（Solana，2021-）

Solana 原生永续 DEX，采用 **vAMM（虚拟 AMM）+ 预言机定价 + JIT 拍卖**模型。Drift v2 （2022）以一种混合模型取代了早先的纯 vAMM 设计，其中 taker 可由 JIT（即时）做市机器人在 vAMM 回退之前的短暂拍卖窗口内响应成交。**结算资产**：USDC。**最大杠杆**：主流币 20倍，山寨币 10倍。**资产覆盖**：40+ 个永续交易对。**MEV 防护**：中（Solana 的区块领导者架构存在已知 MEV 向量，由 Drift 的 JIT 拍卖缓解）。**gas 经济性**：Solana 网络费用（低于一美分）。**费用层级**：maker 0.01%/taker 0.10%标准并配层级折扣。**日成交量区间**：$0.1-0.3B。**市场份额**：顶级 Solana 永续 DEX，全球前 10 。

Drift 的意义在于作为**核心的 Solana 生态系统永续枢纽**，受益于 2024-2025 期间 Solana 的整体复兴，以及成为添加永续敞口的 Solana 原生应用的默认集成目标。DRIFT 代币于 2024推出。详情：交叉链接至 [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]（Solana 特定背景）。

### GMX v1 （Arbitrum + Avalanche，2021-）

**原型池对手方永续 DEX**——单一多资产池（**GLP**，持有 BTC/ETH/USDC/稳定币）作为每个交易者的对手方。交易者盈亏即 GLP 持有者的损益。价格来自 Chainlink 预言机配合内部 keeper。**结算资产**：池资产（BTC/ETH/USDC）。**最大杠杆**：主流币 50倍。**资产覆盖**：限于 GLP 池支持的资产（BTC、ETH、LINK、UNI + 少数几个）。**MEV 防护**：低中（预言机更新时点造成已知抢跑面，在 v2中解决）。**gas 经济性**：Arbitrum 或 Avalanche L1/L2 gas（低）。**费用层级**：0.1%开/平 + 动态借入利率。**日成交量区间**：$0.05-0.2B（自 2022-2023峰值 $0.5-1B 回落）。**市场份额**：曾为 2022-2023 永续 DEX 领导者；现为中层。

GMX v1 发明了"GLP 作为通用对手方"模式，被许多分叉（Gains Network、Vela 等）复制。其结构性挑战是**毒性流量**——当预言机更新滞后于真实市场价格时，老练交易者可系统性地从 GLP 池榨取价值。

### GMX v2 （Arbitrum + Avalanche，2023-）

针对 v1毒性流量问题的架构重建。引入**按市场隔离池（GM 池）**取代单一 GLP，引入**资金费率**以平衡多空偏斜，并改进预言机定价机制。**结算资产**：按市场支撑资产。**最大杠杆**：主流币 100倍（特定市场）。**资产覆盖**：通过按市场池扩展中。**MEV 防护**：中（较 v1有改进）。**gas 经济性**：Arbitrum gas（低）。**费用层级**：0.04-0.07%开/平 + 资金费。**日成交量区间**：$0.1-0.3B。**市场份额**：前 10 永续 DEX。

v2 是 GMX 在 Hyperliquid 和 dYdX v4 夺取份额后试图保持相关性的尝试。按市场池模型以 GLP 的简洁性换取更好的风险隔离，代价是将 LP 资本跨市场分散。

### Synthetix Perps（Optimism + Base，2022-）

建立在 **Synthetix 合成债务池模型**之上的永续——SNX 质押者债务池提供对手方流动性，预言机定价（Pyth）给出执行价格，交易者针对该池建立杠杆头寸。**Perps v2**（2023）增加了改进的预言机集成；**Perps v3**（2024）模块化了架构，允许前端接入 Synthetix 后端。**结算资产**：sUSD。**最大杠杆**：主流币 50倍。**资产覆盖**：40+ 个交易对（受预言机可得性限制）。**MEV 防护**：中（基于预言机的定价有时点攻击面，由 Pyth 拉取式预言机机制解决）。**gas 经济性**：Optimism/Base L2 gas（低）。**费用层级**：按市场 maker 0.02%/taker 0.05-0.10%。**日成交量区间**：$0.05-0.2B（大量经由 Kwenta 路由，见下文）。**市场份额**：前 15。

Synthetix 的意义在于作为多个前端（Kwenta、Polynomial、Lyra 相邻产品）所构建于其上的**后端基础设施**，而非直接作为面向消费者的 DEX 竞争。

### Kwenta（Optimism + Base，2022-）

建立在 Synthetix Perps 后端之上的前端 DEX，为活跃交易者设计。KWENTA 代币持有者与质押者分享费用。**结算资产**：sUSD（继承自 Synthetix）。**最大杠杆**：50倍。**资产覆盖**：与 Synthetix Perps 相同（40+）。**MEV 防护**：中。**gas 经济性**：Optimism/Base gas。**费用层级**：与 Synthetix 后端相同 + Kwenta 前端费用。**日成交量区间**：$0.02-0.1B。**市场份额**：前 20。

Kwenta 的存在说明了 Synthetix v3 所架构的**前端/后端分离**——消费者品牌与流动性后端脱钩，这让多个前端能在 UX 上竞争同时共享单一流动性池。

### Aark Digital（Arbitrum，2023-）

LP 池模型永续 DEX，采用类似 GMX 的**金库股东对手方设计**，但具有不同的风险管理并聚焦资本高效的做市。**结算资产**：USDC。**最大杠杆**：主流币 20倍。**资产覆盖**：20-30 个交易对。**MEV 防护**：中。**gas 经济性**：Arbitrum gas。**费用层级**：0.05-0.10%。**日成交量区间**：$0.01-0.05B。**市场份额**：前 30 细分。

Aark 是第二波进入者，在 GMX、GNS 及类似协议已确立模式的池对手方板块竞争。差异化在于 LP 风险管理机制和资本效率。

### Aevo（OP Stack 应用链，2024-）

Ribbon Finance 期权产品的继任者，Aevo 在定制 OP Stack 应用链上运行**基于 CLOB 的期权 + 永续场所**。永续与期权账簿共享基础设施，实现跨产品保证金。**结算资产**：USDC。**最大杠杆**：主流币 20倍。**资产覆盖**：40+ 个交易对（永续 + 期权）。**MEV 防护**：高（链下撮合配合链上结算）。**gas 经济性**：OP Stack L2 gas（低）。**费用层级**：maker 0.03%/taker 0.05%。**日成交量区间**：$0.05-0.2B。**市场份额**：前 15 永续 + 主导链上期权。

Aevo 的意义在于作为**期权与永续集成场所**而非纯永续 DEX，这服务于不同的交易者板块（偏波动率/对冲流量与杠杆方向性并存）。

### Apex Protocol（StarkEx + zkLink，2021-）

采用 StarkEx（与旧 dYdX v3类似的架构基础）及 zkLink 扩展实现跨链流动性的永续 DEX。**结算资产**：USDC。**最大杠杆**：50倍。**资产覆盖**：50+ 个交易对。**MEV 防护**：中高（链下撮合）。**gas 经济性**：交易者不支付 gas（撮合在链下）；入金/出金使用底层链 gas。**费用层级**：maker 0.02%/taker 0.05%。**日成交量区间**：$0.05-0.2B。**市场份额**：前 15, ，亚洲零售存在强劲。

Apex 的差异化在于**强劲的亚洲零售分发**（显著的非英语社区存在和 CEX 式 UX），争夺 dYdX v3 在其 Cosmos 迁移前所服务的交易者板块。

## 大比较矩阵表

| DEX | 链/基础 | 流动性模型 | 结算资产 | 最大杠杆 | 资产覆盖 | 费用层级（maker/taker） | MEV 防护 | 交易者 gas 经济性 | 日成交量区间（USD） | 永续 DEX 市场份额带 |
|---|---|---|---|---|---|---|---|---|---|---|
| **dYdX v3** | StarkEx L2 （以太坊） | CLOB（链下撮合） | USDC | 20倍 | 约 40 个交易对 | 0.02% / 0.05% | 高 | 无（链下） | $0.5-2B（2022-2023） | 曾在 2022 为 #1 |
| **dYdX v4** | Cosmos 应用链（dYdX Chain） | CLOB（验证者撮合，完全链上） | USDC | 20倍 | 40+ | 0.02% / 0.05% | 高 | 验证者网络 gas（数美分） | $0.3-1B | 前 3 |
| **Hyperliquid** | Hyperliquid L1 （HyperBFT + HyperEVM） | CLOB（完全链上） | USDC（跨链 Arb） | 50倍 | 100+ | 返佣 / 0.025-0.05% | 高 | HyperEVM gas（低于一美分） | $1-5B | **按成交量 #1 ** |
| **Vertex** | Arbitrum | CLOB + AMM 混合 | USDC | 10倍 | 30-50 | 0.0% / 0.02-0.04% | 中高 | Arbitrum gas（低于一美分） | $0.1-0.4B | 前 10 |
| **Drift** | Solana | vAMM + 预言机 + JIT 拍卖 | USDC | 20倍 | 40+ | 0.01% / 0.10% | 中 | Solana 费用（低于一美分） | $0.1-0.3B | 前 10 / Solana #1 |
| **GMX v1** | Arbitrum + Avalanche | GLP 池对手方 + 预言机 | 池资产 | 50倍 | 有限（BTC/ETH/LINK/UNI+） | 0.1% + 借入 | 低中 | Arb/Avax gas | $0.05-0.2B | 中层 |
| **GMX v2** | Arbitrum + Avalanche | 按市场 GM 池 + 资金费 | 按市场 | 100倍 | 扩展中 | 0.04-0.07% + 资金费 | 中 | Arb gas（低） | $0.1-0.3B | 前 10 |
| **Synthetix Perps** | Optimism + Base | 合成债务池 + Pyth 预言机 | sUSD | 50倍 | 40+ | 0.02% / 0.05-0.10% | 中 | OP/Base gas（低） | $0.05-0.2B | 前 15 后端 |
| **Kwenta** | Optimism + Base | Synthetix 后端（前端 DEX） | sUSD | 50倍 | 40+ | 相同 + 前端费用 | 中 | OP/Base gas | $0.02-0.1B | 前 20 前端 |
| **Aark Digital** | Arbitrum | LP 金库对手方 | USDC | 20倍 | 20-30 | 0.05-0.10% | 中 | Arb gas | $0.01-0.05B | 前 30 细分 |
| **Aevo** | OP Stack 应用链 | CLOB（期权 + 永续共享账簿） | USDC | 20倍 | 40+（永续 + 期权） | 0.03% / 0.05% | 高 | OP Stack gas（低） | $0.05-0.2B | 前 15 + 期权领导者 |
| **Apex Protocol** | StarkEx + zkLink | CLOB（链下撮合） | USDC | 50倍 | 50+ | 0.02% / 0.05% | 中高 | 无（链下撮合） | $0.05-0.2B | 前 15, ，亚洲零售强劲 |

## 架构交叉轴：CLOB 对 vAMM 对混合

上方矩阵罗列了 11 个场所，但它们归结为决定费用特征、抗 MEV 及 LP 经济性的**三个架构族系**：

### CLOB 族系（完全链上或混合撮合）

- **Hyperliquid**——定制 L1
上的完全链上 CLOB
- **dYdX v4**——Cosmos 应用链上的完全链上 CLOB（验证者撮合）
- **dYdX v3**——链下撮合 + 链上结算（StarkEx）
- **Apex**——链下撮合 + 链上结算（StarkEx）
- **Aevo**——链下撮合 + 链上结算（OP Stack 应用链）
- **Vertex**——混合 CLOB + AMM 回退

**适合 CLOB 的交易者**：高频/专业交易者，需要限价/止损/IOC/FOK 订单类型者，对规模滑点敏感者，需要主流币紧窄买卖价差者。费用经济性通常为 **maker 返佣 + taker 费用**（CEX 套利交易者所熟悉）。CLOB 族系在 2024-2026 期间积极夺取份额，由 Hyperliquid 领跑。

### vAMM/池对手方族系

- **GMX v1**——GLP 单一多资产池
- **GMX v2**——按市场 GM 池
- **Aark Digital**——LP 金库对手方（GMX 谱系）
- **Drift**——vAMM + JIT 拍卖（Solana）
- **Synthetix Perps**——合成债务池

**适合 vAMM 的交易者**：对预言机定价滑点模型感到自在者，偏好"人人按预言机中价成交"语义者，CLOB 深度并非约束瓶颈的小规模交易者。**LP 侧经济性占主导**——LP/债务池持有者是所有交易者盈亏的结构性对手方，这造就了不同于现货 AMM 被动 LP 的风险回报特征。该模型具有结构性毒性流量脆弱性，v2 代（GMX v2, Drift v2）努力加以缓解。

### 共享后端上的前端族系

- **Kwenta**——Synthetix Perps 后端上的前端

**意义**：前端/后端分离正是 Synthetix v3 作为刻意平台策略所架构的。其他协议（Polynomial、Lyra 相邻）遵循同一模型。仅前端的 DEX 在 UX、费用分享及交易者板块定位上竞争，同时共享相同的底层流动性池。

## 交易者板块契合度

除架构之外，永续 DEX 还在**交易者板块契合度**上差异化：

| 交易者板块 | 最契合场所 | 原因 |
|---|---|---|
| 专业/高频套利 | Hyperliquid、dYdX v4 | CLOB 深度、低延迟、MEV 防护 |
| 高杠杆赌徒 | Hyperliquid（50倍）、GMX v2 （100倍）、Apex（50倍）、Drift（20倍） | 杠杆上限重要 |
| 长尾资产交易者 | Hyperliquid（100+ 个交易对）、Drift、Aevo | 资产覆盖广度 |
| LST/再质押抵押品 | （链特定）——Drift 接受 JitoSOL；部分 EVM 场所接受 stETH | LST 作为保证金的经济性 |
| Solana 原生 | Drift | Solana 生态系统深度 |
| 期权 + 永续交叉保证金 | Aevo | 集成期权账簿 |
| 多产品（现货 + 永续 + 货币市场） | Vertex | 统一保证金账户 |
| 亚洲零售（非英语优先 UX） | Apex、Hyperliquid | 分发 + UX 选择 |
| 机构/DeFi 原生基金 | dYdX v4, Hyperliquid | 去中心化 + 可审计性 |

LST/再质押抵押品一行连接至 [[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]]，了解跨场所 LST 作为抵押品的机制。

## 边界情况

- **是否等同 CEX？**——Hyperliquid 顶级交易对的订单簿延迟和深度接近 CEX 可比性（Binance 永续、Bybit 永续）。然而监管姿态完全不同：Hyperliquid 地理封锁美国交易者，不运行集中式 KYC，且在无司法管辖牌照下运营。可比 CEX 的 UX 不应与等同 CEX 的监管地位相混淆。
- **dYdX v3 对 v4 读作一个产品还是两个？**——架构重建足够广泛（不同链、不同共识、不同代币效用），最好读作**同一团队的两个产品**而非跨版本的一个产品。矩阵为各自给出独立行。
- **GMX v1 对 v2 读作一个产品还是两个？**——与 dYdX 类似，GMX v1 （GLP 单池）和 v2 （按市场 GM 池 + 资金费）结构上差异足够大，值得独立行。截至 2026 二者均存续，具有不同的 LP 特征。
- **Synthetix Perps 与 Kwenta 重复计数**——Kwenta 是 Synthetix Perps 后端上的前端。Kwenta 的日成交量数据在很大程度上**也被计入 Synthetix Perps 的成交量**，因为 Kwenta 将订单路由至 Synthetix 后端。跨协议成交量报告（如 DefiLlama 衍生品）有时会重复计数；矩阵为清晰起见将各行分开，但读者在计算 Synthetix 栈总流量时应将其聚合。
- **Drift 在 Solana 上对其余在 EVM 上**——Solana 的账户模型和区块领导者架构以无法清晰映射到 EVM 类比的方式改变了 MEV 动态、slot 时间保证及 gas 经济性。Drift 的 MEV 防护对 EVM 同侪的比较需要阅读 Solana 特定的 JIT 拍卖模型，而非将 MEV 防护视作单一维度。
- **Aevo 作为"期权 + 永续"而非"永续 DEX"**——Aevo 的经济身份是集成的期权与永续场所；纯粹将其视作永续 DEX 会低估使用相同保证金账户的期权侧流量。矩阵纳入 Aevo，但标注期权账簿是其主要差异化点。
- **Hyperliquid HYPE 代币 TGE 经济性**——Hyperliquid 的 2024-11 代币推出（无预售、发行分发给追溯性用户）在结构上不同于 dYdX、GMX、Drift 及 Synthetix 的代币经济学。代币侧比较需要单独分析（不在本矩阵的成交量/费用轴中涵盖）。
- **跨链结算出入金**——若干永续 DEX 使用 USDC 作为结算资产，但入金路径各异（Arbitrum 原生、Solana 原生、Cosmos 应用链、OP Stack）。矩阵中的结算资产一行记录标准资产，但实际入金 UX 是单独维度——见 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]（跨链桥侧细节）。
- **成交量数据为大致区间，而非点估计**——永续 DEX 日成交量随市场波动率摆动 5-10倍。"日成交量区间"列基于 2024-2026 观察给出活跃市场的合理区间；读者应查阅 [DefiLlama 衍生品](https://defillama.com/derivatives) 获取当前时点数据。
- **JP 与 US 监管敞口**——本矩阵中没有任何永续 DEX 出现在 [[exchanges/jvcea-whitelist-token-listing|JVCEA WhiteList]] 上进行 JP 侧原生代币上市，且大多数在 CFTC/SEC 介入后地理封锁美国交易者。将本矩阵对照诸如 [[exchanges/japan-cex-parent-fg-adjacency-matrix|JP CEX parent FG adjacency matrix]] 的 JP CEX 对等物阅读，会显现链上永续 DEX 与 JP 国内 VASP 之间的监管牌照差距。

## 结算资产并列对比

| 结算资产 | 使用者 | 含义 |
|---|---|---|
| USDC | dYdX v3, dYdX v4, Hyperliquid、Vertex、Drift、GMX（GLP 中的 USDC 部分）、Aark、Aevo、Apex | 默认现代稳定币；USDC 跨各 L2及 Solana 的链上可得性充足；**Circle 对手方/发行风险被矩阵中大多数共享** |
| sUSD | Synthetix Perps、Kwenta | 由 SNX 债务池支撑的 Synthetix 原生算法稳定币；**风险特征不同于 USDC**——非 Circle 发行 |
| 池资产（BTC/ETH/LINK/UNI/USDC） | GMX v1 | GLP 池构成是事实上的结算篮子；LP 层面的**多资产风险敞口** |
| 按市场支撑资产 | GMX v2 | 按市场 GM 池构成；**按市场隔离风险** |

USDC 主导的结算格局在结构上意义重大——它将 **Circle 发行/监管/储备管理风险**集中为跨 DEX 的系统性因素。若 Circle 面临发行中断，矩阵中的大多数永续 DEX 成交量将同时受影响。这是链上衍生品中未被充分认识的系统性风险轴之一。

## 链基础足迹总结

| 链/基础 | 托管的永续 DEX | 累计永续 DEX 份额贡献 |
|---|---|---|
| Hyperliquid L1 | Hyperliquid | 极高（单一场所，主导市场份额） |
| Cosmos 应用链（dYdX Chain） | dYdX v4 | 高 |
| Arbitrum | Vertex、GMX v1/v2, Aark | 中高（多场所） |
| Avalanche | GMX v1/v2 | 低中 |
| Solana | Drift | 中（链上单一主导场所） |
| Optimism | Synthetix Perps、Kwenta | 低中 |
| Base | Synthetix Perps（Base 启动后）、Kwenta | 低中（增长中） |
| OP Stack 应用链 | Aevo | 低中 |
| StarkEx L2 | dYdX v3 （遗留）、Apex | 低（历史性 + 亚洲零售细分） |
| zkLink | Apex（跨链扩展） | 极低 |

链基础分布显示，截至 2024-2025，**专门构建的基础设施（Hyperliquid L1, dYdX Cosmos 应用链、OP Stack 应用链）**夺取份额胜过**共享 L2 基础设施（Arbitrum、Optimism、Base）**。[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]] 中记录的链原生翻转模式适用——控制自身链的场所捕获了链租户场所因链拥堵和共享 MEV 敞口而让渡的成交量。

## 架构演进时间线

| 年份 | 事件 | 架构意义 |
|---|---|---|
| 2018-08 | dYdX 保证金交易（前身）启动 | 首个带杠杆的非衍生品 DEX 实验 |
| 2020 | Perpetual Protocol v1 （xDai 上的 vAMM） | 首个规模化 vAMM 永续（GMX 谱系的前身） |
| 2021-04 | dYdX v3 在 StarkEx L2 上启动 | 首个规模化 CLOB 永续 DEX；可比 CEX 的 UX |
| 2021-08 | GMX 在 Arbitrum 上启动 | GLP 池对手方模式确立 |
| 2021-09 | Drift v1 在 Solana 上启动 | Solana 原生永续 DEX（初期纯 vAMM） |
| 2022 | Synthetix Perps v1 + Kwenta 启动 | 合成债务池永续模型，前端/后端拆分开始 |
| 2023-06 | dYdX v4 在 Cosmos 上主网 | 首个完全链上 CLOB 永续 DEX |
| 2023-08 | GMX v2 启动 | 按市场 GM 池 + 资金费模型 |
| 2023-Q3 | Vertex Protocol 启动 | 带多产品保证金账户的混合 CLOB+AMM |
| 2024-Q1 | Hyperliquid 主网成熟 | 定制 L1 完全链上 CLOB 夺取份额 |
| 2024-Q2 | Aevo 在 OP Stack 应用链上启动 | 期权 + 永续集成 CLOB 场所 |
| 2024-11 | Hyperliquid HYPE TGE | 无预售、发行给追溯性用户的分发 |
| 2025 | 跨链永续聚合器涌现 | Vertex Edge、基于意图的永续路由实验 |

该轨迹显示，截至 2024-2025 ，**CLOB 在架构上胜出**（Hyperliquid + dYdX v4 在成交量上领跑），而**池对手方/vAMM 模型在特定定位中保留一个细分**（Drift 在 Solana 上、GMX v2 用于高杠杆隔离市场）。下一个架构拐点很可能是**基于意图的跨链永续路由**（允许交易者在流动性最佳的链上执行而无需跨链桥 UX），但截至 2026该模式尚未规模化。

## 费用经济性总结

一项实用的费率比较（taker 侧，返佣和层级折扣之前）：

| DEX | 标准 taker 费用 | 资金机制 | 1倍头寸的有效年化成本 |
|---|---|---|---|
| Hyperliquid | 0.025-0.05% | 资金费率随偏斜浮动 | 取决于资金费（波动） |
| dYdX v4 | 0.05% | 资金费率浮动 | 取决于资金费 |
| dYdX v3 | 0.05% | 资金费率浮动 | 取决于资金费 |
| Vertex | 0.02-0.04% | 资金费率 | 低费用 + 资金费 |
| Drift | 0.10% | 资金费率 | 中费用 + 资金费 |
| GMX v1 | 0.10% 开 + 0.10% 平 | 借入利率（连续，非 0和） | 较高成本——借入结构上为正 |
| GMX v2 | 0.04-0.07% 开 + 平 | 资金费率 | 中 |
| Synthetix Perps | 0.05-0.10%（取决于市场） | 资金费率 | 中 |
| Kwenta | 相同 + 前端 | 资金费率 | 中高 |
| Aark | 0.05-0.10% | 资金费 | 中 |
| Aevo | 0.05% | 资金费 | 低中 |
| Apex | 0.05% | 资金费 | 低中 |

**关键经济区别**：GMX v1的借入利率模型对交易者而言**结构上成本为正**（LP 赚取连续借入），不同于在多空之间**零和**的资金费率模型。这使 GMX v1 对持有长久期头寸吸引力较低，而对快速方向性押注吸引力较高，而资金费率场所根据资金费方向对长持头寸可能更便宜。理解费用 + 资金费/借入栈对跨场所比较至关重要。

## 相关

- [[exchanges/INDEX]]
- [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/native-dex-flip-incumbent-pattern]]
- [[exchanges/solana-ecosystem-dex-comparison]]
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/liquid-staking-restaking-cex-exposure]]
- [[exchanges/cex-matching-engine-wallet-architecture]]
- [[exchanges/global-cex-prime-brokerage-layer]]
- [[exchanges/japan-cex-parent-fg-adjacency-matrix]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/INDEX]]
- [[exchanges/jvcea-whitelist-token-listing]]

## 来源

- DefiLlama 衍生品仪表板（成交量、市场份额）：https://defillama.com/derivatives
- DefiLlama Chains：https://defillama.com/chains
- Hyperliquid 产品页面：https://app.hyperliquid.xyz/
- dYdX 产品页面：https://dydx.exchange/
- GMX 产品页面：https://gmx.io/
- Vertex Protocol：https://vertexprotocol.com/
- Drift Protocol：https://drift.trade/
- Synthetix：https://synthetix.io/
- Kwenta：https://kwenta.io/
- Aark Digital：https://aark.digital/
- Aevo：https://www.aevo.xyz/
- Apex Protocol：https://pro.apex.exchange/
- 成交量及市场份额近似值交叉参照 DefiLlama 衍生品及公开仪表板（Dune、公开团队披露）
