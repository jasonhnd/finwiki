---
source: systems/institutional-dlt-adoption-comparison-2026
source_hash: 5844b8aa6372e860
lang: zh
status: machine
fidelity: ok
title: "机构 DLT 平台采用比较 2026 · Canton vs Fabric vs Corda vs 公链 vs Avalanche vs Polygon"
translated_at: 2026-06-01T04:15:40.164Z
---

# 机构 DLT 平台采用比较 2026 · Canton vs Fabric vs Corda vs 公链 vs Avalanche vs Polygon

## TL;DR

2026 年的机构 DLT 选型已从“试点阶段”进入 **“Canton + 公链 Ethereum 两大中心 + Corda 长尾 + Fabric 衰退”** 的成熟分化结构：Canton（Digital Asset / R3 合并后）取得了 G-SIB 代币化的主战场（JPM Kinexys + Goldman DAP + DTCC + BNY），公链 Ethereum L1 通过 BlackRock BUIDL + Franklin BENJI + Ondo 等 RWA 占据“可公开交易的代币化基金”一极，Corda 在英国 / 新加坡 / 部分 EM 中央银行 + 中央证券存管机构（CSD）保留具有粘性的长尾，Hyperledger Fabric（IBM 推进）在贸易金融 / 供应链以外领域已明显衰退。Avalanche Subnets 部分取得 RWA + 资产管理（Apollo / KKR / Hamilton Lane）长尾，Polygon Enterprise 基本已经退出。机构选型不是单一链决策，许多 G-SIB 同时运行 2-3 个平台。

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/canton-overview|Canton 総覧]] 与 [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]] 阅读，以理解 2 个核心机构链的技术对位，并对照 [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]] 确认具体 G-SIB 的实际迁移决策。关于公链一极，请参见 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]。

### 1. Canton（Digital Asset + R3 合并阵营）

- **技术**：DAML（functional + obligation-based language）+ application-level privacy + Global Synchronizer
- **2025 重要事件**：Digital Asset Holdings 与 R3 于 2025 年完成战略合并（具体形态上，R3 将 Corda Enterprise 业务整合进 Digital Asset，Canton 成为合并实体的核心 DLT 产品）
- **典型客户**：JPM Kinexys（2026-2027 H1 迁移完成）+ Goldman DAP + DTCC Project Ion + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank
- **典型用例**：tokenized MMF 的跨参与者原子结算 + collateral mobility + 24/7 repo + tokenized deposit
- **TVL 自报**：2026-Q1 为 $6T+ 代币化资产 / 600+ 机构（Canton 联盟自我披露，缺少第三方审计）
- **生态地位**：G-SIB 代币化第一选择；详细技术见 [[systems/canton-daml-technical-spec|Canton DAML 技術仕様]]

### 2. Public Ethereum L1（BlackRock + Franklin + Ondo 主导）

- **典型客户**：[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]（2024-03 上线，~$2-3B AUM 2026-Q1）+ Franklin Templeton BENJI（~$700M）+ Ondo USDY + WisdomTree 等
- **典型用例**：tokenized money market fund（MMF）+ tokenized Treasury，可在公链上向 KYC 完成的 institutional buyer 自由转让
- **理由**：可由全球任意 KYC 完成的机构钱包持有 + 机构客户无需连接私人联盟链 + 与 stablecoin（USDC / PYUSD）的原生互操作
- **技术依赖**：[[fintech/blackrock-buidl-tokenized-mmf-overview|Securitize]] 等 transfer agent 平台 + Wormhole / [[systems/cctp-v2-overview|CCTP V2]] 等跨链 + ERC-3643 （T-REX）监管合规 token 标准
- **L2 展开**：BUIDL 自 2024-Q4 起扩展至 Aptos / Avalanche / Arbitrum / Optimism / Polygon PoS 等多链，AUM 的 ~70% 仍在 Ethereum L1

- **约束**：G-SIB 自有市场的清算 / 结算仍偏向 Canton 等私链，公链 RWA 主要服务于“可公开发行 + 二级流通”场景

### 3. Corda（R3，2025 整合后）

- **技术**：JVM-based + UTXO 风格 + notary cluster + application-layer privacy（类似 Canton，但实现不同）
- **整合后的定位**：R3 在 2025 年与 Digital Asset 合并后，Corda 主要承接 **central securities depository（CSD）+ 部分中央银行 wholesale CBDC 试点 + 英国 / 新加坡 / 中东长尾客户**。新客户开拓实质上转向 Canton
- **典型客户**：SIX Digital Exchange（SDX，瑞士）+ HQLAᵡ（欧洲机构 collateral 平台）+ ASX（澳大利亚交易所，CHESS 替代中止后）+ 部分中央银行 wholesale CBDC 试点（BoE / MAS / 部分中东央行）
- **TVL 与活跃度**：历史上在 Corda 网络上累计处理超过 $20T 的名义资产（2024 R3 披露，主要为 trade finance + CSD 清算结算 notional），但活跃主网 TVL 远小得多
- **未来**：Corda 4.x 将继续维护，但 Canton 将取代 Corda 成为 R3 的战略主轴

### 4. Hyperledger Fabric（IBM-led）

- **典型客户**：IBM Food Trust + TradeLens（2022 关闭）+ we.trade（2022 解散）+ Marco Polo Network（2022 破产）+ Walmart 供应链
- **现状**：2022-2023 年期间，IBM 主导的贸易金融 / 供应链联盟相继关闭或重组，Fabric 在金融机构主战场上实质性衰退
- **生存场景**：供应链追踪（食品 / 制药 / 汽车零部件）+ 部分中央银行内部账本（中国数字人民币的部分组件历史上使用 Fabric 衍生品）+ 部分企业联盟
- **技术问题**：permissioned 但 endorsement policy 复杂、性能瓶颈、IBM 销售模型与现代 SaaS / DLT-as-service 不匹配
- **Hyperledger 项目的重心**：Linux Foundation 在 2025 年将 Hyperledger 整合入 “Decentralized Trust” 基金会；Besu 成为 EVM 兼容机构链的事实标准，Fabric 的战略地位下降

### 5. Hyperledger Besu（EVM 兼容机构链）

- **典型客户**：JPM Kinexys Chain（到 2027 H1 前部分功能迁移至 Canton，Besu fork 内部保留）+ Citi CTS + HSBC Tokenized Deposit Service + BNP Securities Services + 多个 [[fintech/bis-project-agora-overview|BIS Project Agora]] 节点
- **优势**：EVM 兼容、Solidity 工具链可复用、Linux Foundation 治理透明、permissioned validator 集合简单
- **约束**：application-level privacy 弱于 Canton + 多方原子结算需要 hack-y 的合约组合
- **详细分析**：参见 [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]] 与 [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]

### 6. Avalanche Subnets（机构 RWA 长尾）

- **典型客户**：Apollo Diversified Credit Securitize Fund（ACRED 部分版本）+ KKR（2022 试点）+ Hamilton Lane（Securitize 多链）+ Wisdomtree + Onyx 部分项目 + Republic
- **机制**：Subnet 允许单一机构 / 资产管理人构建独立的 EVM 兼容链，并共享 Avalanche validator 的安全性
- **2026 现状**：Subnet 已改名为 “L1”（2024 末 Avalanche 9000 升级），部署门槛进一步降低
- **优势**：EVM 兼容 + 可定制 validator 集合 + 与公链 Avalanche C-Chain 的流动性和连接
- **TVL 自报**：Avalanche RWA TVL 2026-Q1 ~$200-400M（rwa.xyz 口径），远小于 Ethereum L1 RWA

### 7. Polygon Enterprise（基本已退出）

- 2022-2023 年提出的 Polygon Supernets / Polygon Enterprise 方向在 2024 年之后基本停止推进
- Polygon 的战略重心转向 [[systems/polygon-agglayer-architecture-rollout|AggLayer + CDK]] 公链 stack
- 未能进入 G-SIB 代币化主战场，机构客户份额可忽略

## 机构 DLT 选型矩阵

| 客户类型 | 第一选择 | 第二选择 | 理由 |
|---|---|---|---|
| G-SIB 投资银行 + 资产管理 + 托管 | Canton | Besu / Corda | multi-party atomic settlement + application-level privacy |
| 资产管理公司公开发行 token MMF / Treasury | Public Ethereum L1 | Avalanche / Aptos / Stellar | 公链 KYC 后二级流动性 + stablecoin 互操作 |
| 中央银行 wholesale CBDC 试点 | Corda / Besu / Canton（并行试点） | — | 试点阶段并行使用多个平台 |
| 大型托管银行内部账本 | Besu / Canton | — | EVM 兼容 vs DAML 多方原子化 |
| 私募信贷 / 私募股权资产管理 | Avalanche subnet / Securitize 多链展开 | Public Ethereum L1 | tokenization-as-service + 多链分发 |
| 贸易金融 / 供应链 | Fabric / 其他企业平台 | — | 历史惯性 + 非金融机构客户 |
| 跨 G-SIB CBDC 试点（BIS Agora 类） | Besu / Hedera / Canton（多个平台并行） | — | 试点阶段多链并行，没有统一答案 |

## 多个 G-SIB 的实际展开例

- **JPM**：Kinexys Chain（Besu fork）+ Canton（2026-2027 主战场迁移）→ 2 个平台并行
- **Goldman Sachs**：Canton（DAP 是 Canton 上的核心应用）+ 公链 Ethereum（GS Treasury 票券代币化部分）→ 2 个平台
- **Citi**：Canton + Hedera（Citi Token Services）→ 2 个平台
- **HSBC**：Besu（Tokenized Deposit Service）+ Canton 评估中 → 1-2 个平台
- **BNY Mellon**：Canton（创始成员）+ Public Ethereum L1（BUIDL 托管）→ 2 个平台
- **DTCC**：Canton（Project Ion）+ Corda（部分历史项目）→ 2 个平台
- **BlackRock**：Public Ethereum L1（BUIDL 70% AUM）+ 多个 L2（Aptos / Avalanche / Arbitrum / Polygon）
- **Franklin Templeton**：Stellar（BENJI native）+ Aptos + Polygon + 多个 L2  → 多链分布

机构客户**不押注单一链**，2026 年的实践是“Canton 用于 G-SIB 内部 + 公链 Ethereum 用于外部 MMF / Treasury + Corda / Besu 作为特定地区或用例的长尾”，与 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] 向机构层延伸形成对照。

## RWA on chain · TVL 视角

根据 rwa.xyz / DefiLlama 的公开口径，2026-Q1 代币化 RWA（不含 stablecoin）on-chain TVL 的大致分布：

- Ethereum L1：~70%+（BUIDL + Ondo + Franklin BENJI 跨链部分 + Securitize 系）
- Stellar：~5-10%（Franklin BENJI native + WisdomTree 部分）
- Avalanche：~3-5%（KKR / Apollo / Hamilton Lane Securitize 部分）
- Aptos / Arbitrum / Polygon PoS / Optimism / Base：各 1-3%
- Canton（私链，数据未纳入 rwa.xyz 公开口径）：自报 $6T+，但口径不能与公链 TVL 直接比较

重要差异：**公链 RWA 跟踪可由第三方独立审计**（rwa.xyz / DefiLlama 等），**私链 RWA 跟踪依赖联盟自我披露**，两者不能简单相加。

## Use case 轴 · 谁选择什么平台

| Use case | 平台选择 | 理由 |
|---|---|---|
| 大型银行内部 24/7 repo + collateral mobility | Canton（JPM / GS / DTCC） | 多方原子化 + application privacy + DAML 表达力 |
| Tokenized MMF / Treasury 对外发行（二级流通可能） | Public Ethereum L1 | KYC 后机构钱包 + stablecoin 互操作 + 第三方审计 |
| Tokenized 私募信贷 / 私募股权 | Avalanche subnet / Polygon PoS / Public ETH 多链 | tokenization-as-service + Securitize 路径 |
| 中央银行 wholesale CBDC 试点 | Corda / Besu / Canton 并行 | 多平台并行试点 |
| Trade finance / 供应链追踪 | Fabric / 自有企业平台 | 历史惯性 + 非金融客户 |
| Tokenized deposit（单一银行内部） | Besu（HSBC TDS / Citi CTS）/ Canton | EVM 兼容 vs DAML 原子化 |
| Cross-G-SIB CBDC pilot（[[fintech/bis-project-agora-overview\|BIS Project Agora]]） | Besu / Hedera / Canton 多平台 | 试点阶段无统一答案 |
| Tokenized 股票二级交易 | Public Ethereum L1 / Solana / 部分 L2 | 最接近 stablecoin 流动性 |
| Stablecoin payment（零售） | Public L2（Base / Tron / Polygon PoS） | 低 gas + 用户钱包密度 |
| 托管银行代币化记录管理 | Canton（BNY）/ Corda（SDX / HQLAᵡ） | application-layer privacy |

## R3 / Digital Asset 整合时间线（公开披露口径）

- **2014-2017**：R3 联盟成立，Corda 诞生，40+ 银行开展试点
- **2017-2020**：Digital Asset 与 R3 并行发展，Corda 在欧洲银行 + 部分 CSD 展开，Canton 用于 ASX CHESS replacement（后中止）
- **2020-2023**：Canton Network 概念逐步成熟，Digital Asset 获得 Microsoft / DTCC / GS / 多个 G-SIB 投资，Corda 维持但新客户开拓放缓
- **2024**：DTCC Project Ion 选择 Canton，Goldman DAP 迁移至 Canton，JPM 开始评估 Canton，Canton 联盟扩大
- **2025**：R3 与 Digital Asset 完成战略整合（具体形态公开披露有限，但 Corda 与 Canton 的团队 / 治理 / 客户开拓实质合并）
- **2026**：Canton 成为整合后的旗舰产品，Corda 维持既有客户但战略地位下降

注：具体整合时间和形态以双方官方披露为准。本节是综合公开信号后的合理推断，confidence: likely。

## 监管 + 合规角度对照

- **Canton**：application-level privacy + Regulator Node 模型可让监管机构作为参与者加入，与 MiCA（EU）/ MAS（新加坡）等监管框架的兼容性较高
- **Public Ethereum L1**：依赖 ERC-3643（T-REX）或 Securitize 等 transfer agent 的“permissioned token in permissionless chain”模型，合规责任由 token issuer + transfer agent 承担
- **Corda**：notary cluster + UTXO + 仅参与者可查看的 transaction history，在英国 / 新加坡 / 中东的监管接受度较高
- **Fabric**：permissioned + endorsement policy，历史上用于中国监管沙盒 + 部分中央银行内部账本
- **Besu**：IBFT 共识 + Constellation off-chain payload，隐私弱于 Canton，但 EVM 兼容性降低监管学习成本
- **Avalanche subnet**：可配置 KYC validator 集合 + 与 Avalanche C-Chain 流动性互操作，是 Apollo / KKR / Hamilton Lane 等资产管理人选择 Avalanche 的核心理由之一

## Tokenized stablecoin × DLT platform 矩阵

| 平台 | tokenized USD（stablecoin / deposit） |
|---|---|
| Canton | JPMD（JPM tokenized deposit）+ 部分 GS / DTCC stablecoin 试点 |
| Public Ethereum L1 | USDC / USDT / PYUSD / RLUSD / Ondo USDY |
| Stellar | USDC（Circle native）+ WisdomTree WTSY |
| Avalanche | USDC / Tether on Avalanche C-Chain |
| Besu（Kinexys Chain） | JPMD（2026 年正在迁移至 Canton） |
| Corda | 部分中央银行 wholesale CBDC pilot + HQLAᵡ collateral |
| Solana / Base | USDC native（retail payment 的主要选择） |

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/canton-overview|Canton 総覧]]
- [[systems/canton-daml-technical-spec|Canton DAML 技術仕様]]
- [[systems/canton-mmf-coalition|Canton MMF コンソーシアム]]
- [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[systems/cctp-v2-overview|CCTP V2 総覧]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 総覧]]
<!-- /wiki-links:managed -->

## Sources

- Canton Network official site & documentation
- R3 Corda official site & 2025 整合公告
- Hyperledger Foundation site — Fabric, Besu projects
- BlackRock BUIDL fund prospectus
- Franklin Templeton BENJI fund documentation
- Avalanche Subnets / L1s documentation
- rwa.xyz — tokenized RWA on-chain tracking
- DefiLlama — chain TVL & RWA tracking
- DTCC Project Ion press releases
- BIS reports — wholesale CBDC & DLT pilots
