---
title: 机构 DLT 平台采用对比 2026 · Canton vs Fabric vs Corda vs 公链 vs Avalanche vs Polygon
aliases: [institutional-dlt-adoption-2026, dlt-platform-comparison-institutional, canton-fabric-corda-comparison, institutional-blockchain-adoption-2026, dlt-financial-institutions-matrix, bank-dlt-selection-2026]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, dlt, institutional, canton, hyperledger, corda, avalanche, polygon, rwa, adoption]
status: active
sources:
  - https://www.canton.network
  - https://www.hyperledger.org/projects/fabric
  - https://r3.com/products/corda/
  - https://www.blackrock.com/us/individual/products/333101/blackrock-usd-institutional-digital-liquidity-fund
  - https://www.franklintempleton.com/investments/options/money-market-funds
  - https://www.avax.network/subnets
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains
  - https://rwa.xyz
  - DTCC, BIS, IMF research reports
---

# 机构 DLT 平台采用对比 2026 · Canton vs Fabric vs Corda vs 公链 vs Avalanche vs Polygon

## TL;DR

2026 机构 DLT 选型已从 "试点阶段" 进入 **"Canton + 公链 Ethereum 双中心 + Corda 长尾 + Fabric 衰退"** 的成熟分化格局:Canton(Digital Asset / R3 合并后)拿下 G-SIB tokenization 主战场(JPM Kinexys + Goldman DAP + DTCC + BNY),公链 Ethereum L1 通过 BlackRock BUIDL + Franklin BENJI + Ondo 等 RWA 占据 "可公开交易代币化基金" 这一极,Corda 在英国 / 新加坡 / 部分 EM 央行 + 中央托管行(CSD)有黏性长尾,Hyperledger Fabric(IBM 推动)在贸易金融 / 供应链场景之外明显衰退,Avalanche Subnets 拿下部分 RWA + 资产管理(Apollo / KKR / Hamilton Lane)长尾,Polygon Enterprise 已基本退出。机构选型不是单 chain 决策,大多 G-SIB 同时运营 2-3 个平台。

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton 总览]] 与 [[systems/hyperledger-besu-overview|Hyperledger Besu 总览]] 理解两条核心机构链的技术对位,并对照 [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 迁移路径]] 看具体 G-SIB 的实际迁移决策。公链一极请对照 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]。

## 六大机构 DLT 平台对位

### 1. Canton(Digital Asset + R3 合并阵营)

- **技术**:DAML(functional + obligation-based language)+ application-level privacy + Global Synchronizer
- **2025 重大事件**:Digital Asset Holdings 与 R3 在 2025 完成战略合并(具体形式为 R3 把 Corda Enterprise 业务整合进 Digital Asset,Canton 成为合并实体的核心 DLT 产品)
- **典型客户**:JPM Kinexys(2026-2027 H1 迁移完成)+ Goldman DAP + DTCC Project Ion + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank
- **典型用例**:tokenized MMF 跨参与方原子结算 + collateral mobility + 24/7 repo + tokenized deposit
- **TVL 自报**:2026-Q1 $6T+ tokenized assets / 600+ 机构(Canton 联盟自我披露,缺第三方审计)
- **生态地位**:G-SIB tokenization 第一选择,详细技术见 [[systems/canton-daml-technical-spec|Canton DAML 技术规范]]

### 2. Public Ethereum L1(BlackRock + Franklin + Ondo 主导)

- **典型客户**:[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]](2024-03 上线,~$2-3B AUM 2026-Q1)+ Franklin Templeton BENJI(~$700M)+ Ondo USDY + WisdomTree 等
- **典型用例**:tokenized money market fund(MMF)+ tokenized Treasury,可在公链上向 KYC 后的 institutional buyer 自由转移
- **理由**:可被全球任意 KYC'd 机构钱包持有 + 无需机构客户接入私有联盟链 + 与 stablecoin(USDC / PYUSD)原生互操作
- **技术依赖**:[[fintech/blackrock-buidl-tokenized-mmf-overview|Securitize]] 等 transfer agent 平台 + Wormhole / [[systems/cctp-v2-overview|CCTP V2]] 等跨链 + ERC-3643 (T-REX) 受监管 token 标准
- **L2 部署**:BUIDL 2024-Q4 起扩展到 Aptos / Avalanche / Arbitrum / Optimism / Polygon PoS 等多链,~70% AUM 仍在 Ethereum L1
- **限制**:G-SIB 自有市场清结算仍倾向于 Canton 等私链,公链 RWA 主要服务 "可公开发行 + 二级流动" 场景

### 3. Corda(R3,2025 整合后)

- **技术**:JVM-based + UTXO 风格 + notary cluster + application-layer privacy(类似 Canton 但不同实现)
- **整合后定位**:R3 2025 与 Digital Asset 合并后,Corda 主要承接 **central securities depository(CSD)+ 部分央行 wholesale CBDC 试点 + 英国 / 新加坡 / 中东 长尾客户**,新客户拓展实质转向 Canton
- **典型客户**:SIX Digital Exchange(SDX,瑞士)+ HQLAᵡ(欧洲机构 collateral 平台)+ ASX(澳大利亚交易所,CHESS 替代取消后续)+ 部分央行 wholesale CBDC 试点(BoE / MAS / 部分中东央行)
- **TVL 与活跃度**:历史上 Corda 网络上累计处理超 $20T 名义资产(2024 R3 披露,主要是 trade finance + CSD 清结算 notional),但活跃 mainnet TVL 远小于此
- **未来**:Corda 4.x 仍持续维护,但 Canton 取代 Corda 成为 R3 战略主推

### 4. Hyperledger Fabric(IBM-led)

- **典型客户**:IBM Food Trust + TradeLens(2022 关闭)+ we.trade(2022 解散)+ Marco Polo Network(2022 破产)+ Walmart 供应链
- **现状**:2022-2023 多个 IBM 主导的贸易金融 / 供应链联盟相继关闭或重组,Fabric 在金融机构主战场实质性衰退
- **存活场景**:供应链溯源(食品 / 制药 / 汽车零件)+ 部分央行内部账本(中国数字人民币部分组件历史曾使用 Fabric 衍生品)+ 部分 enterprise consortium
- **技术问题**:permissioned 但 endorsement policy 复杂、性能瓶颈、IBM 销售模式与现代 SaaS / DLT-as-service 错位
- **Hyperledger 项目重心**:Linux Foundation 2025 把 Hyperledger 整合进 "Decentralized Trust" 基金会,Besu 成为 EVM 兼容机构链的事实标准,Fabric 战略地位下降

### 5. Hyperledger Besu(EVM 兼容机构链)

- **典型客户**:JPM Kinexys Chain(2027 H1 前迁 Canton 部分功能,但 Besu fork 内部保留)+ Citi CTS + HSBC Tokenized Deposit Service + BNP Securities Services + 多个 [[fintech/bis-project-agora-overview|BIS Project Agora]] 节点
- **优势**:EVM 兼容、Solidity 工具链复用、Linux Foundation 治理透明、permissioned validator set 简单
- **限制**:application-level privacy 弱于 Canton + 多方原子结算需要 hack-y 合约组合
- **详细分析**:见 [[systems/hyperledger-besu-overview|Hyperledger Besu 总览]] 与 [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 迁移路径]]

### 6. Avalanche Subnets(机构 RWA 长尾)

- **典型客户**:Apollo Diversified Credit Securitize Fund(ACRED 部分版本)+ KKR(2022 试点)+ Hamilton Lane(Securitize 多链)+ Wisdomtree + Onyx 部分项目 + Republic
- **机制**:Subnet 让单个机构 / 资产管理人可以自建独立 EVM-compatible chain,共享 Avalanche validator 安全
- **2026 现状**:Subnet 已改名 "L1"(2024 末 Avalanche 9000 升级),进一步降低部署门槛
- **优势**:EVM 兼容 + 可定制 validator set + 与公链 Avalanche C-Chain liquidity 连通
- **TVL 自报**:Avalanche RWA TVL 2026-Q1 ~$200-400M(rwa.xyz 口径),远小于 Ethereum L1 RWA

### 7. Polygon Enterprise(已基本退出)

- 2022-2023 提出的 Polygon Supernets / Polygon Enterprise 方向 2024 后基本停止推广
- Polygon 战略重心转向 [[systems/polygon-agglayer-architecture-rollout|AggLayer + CDK]] 公链 stack
- 没有进入 G-SIB tokenization 主战场,机构客户份额可忽略

## 机构 DLT 选型决策矩阵

| 客户类型 | 优先选 | 次选 | 理由 |
|---|---|---|---|
| G-SIB 投行 + 资产管理 + 托管 | Canton | Besu / Corda | multi-party atomic settlement + application-level privacy |
| 资产管理公司发行可公开 token MMF / Treasury | Public Ethereum L1 | Avalanche / Aptos / Stellar | 公链 KYC'd 二级流动性 + stablecoin 互操作 |
| 央行 wholesale CBDC 试点 | Corda / Besu / Canton(并行试点) | — | 试点阶段多平台并行 |
| 大型托管行内部账本 | Besu / Canton | — | EVM 兼容 vs DAML 多方原子 |
| 私募信贷 / 私募股权资产管理 | Avalanche subnet / Securitize 多链部署 | Public Ethereum L1 | tokenization-as-service + 多链分发 |
| 贸易金融 / 供应链 | Fabric / 其他 enterprise | — | 历史惯性 + 非金融机构客户 |
| 跨 G-SIB CBDC 试点(BIS Agora 类) | Besu / Hedera / Canton(多平台并行) | — | 试点阶段多链并行,无统一答案 |

## 多 G-SIB 实际部署示例

- **JPM**:Kinexys Chain(Besu fork)+ Canton(2026-2027 主战场迁移) → 2 平台并行
- **Goldman Sachs**:Canton(DAP 是 Canton 上的核心 application)+ 公链 Ethereum(GS Treasury 票据 tokenization 部分) → 2 平台
- **Citi**:Canton + Hedera(Citi Token Services) → 2 平台
- **HSBC**:Besu(Tokenized Deposit Service)+ 评估 Canton → 1-2 平台
- **BNY Mellon**:Canton(创始成员)+ Public Ethereum L1(BUIDL custody) → 2 平台
- **DTCC**:Canton(Project Ion)+ Corda(部分历史项目) → 2 平台
- **BlackRock**:Public Ethereum L1(BUIDL 70% AUM)+ 多 L2(Aptos / Avalanche / Arbitrum / Polygon)
- **Franklin Templeton**:Stellar(BENJI 原生)+ Aptos + Polygon + 多 L2 → 多链分布

机构客户 **不会单押一条链**,2026 的实践是 "Canton 做 G-SIB 内部 + 公链 Ethereum 做对外 MMF / Treasury + Corda / Besu 在特定地理或用例长尾",对照 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]] 在机构层的延伸。

## RWA on chain · TVL 视角

按 rwa.xyz / DefiLlama 公开口径 2026-Q1 的 tokenized RWA(不含 stablecoin)on-chain TVL 大致分布:

- Ethereum L1: ~70%+(BUIDL + Ondo + Franklin BENJI 跨链部分 + Securitize 系)
- Stellar: ~5-10%(Franklin BENJI 原生 + WisdomTree 部分)
- Avalanche: ~3-5%(KKR / Apollo / Hamilton Lane Securitize 部分)
- Aptos / Arbitrum / Polygon PoS / Optimism / Base: 各 1-3%
- Canton(私链,数据未进 rwa.xyz 公开口径): 自报 $6T+,但口径与公链 TVL 不可直接比较

关键差异:**公链 RWA 跟踪可被第三方独立审计**(rwa.xyz / DefiLlama 等),**私链 RWA 跟踪依赖联盟自我披露**,两者不能简单相加。

## Use case 维度 · 谁选什么平台

| Use case | 平台选择 | 原因 |
|---|---|---|
| 大行内部 24/7 repo + collateral mobility | Canton(JPM / GS / DTCC) | 多方原子 + application privacy + DAML 表达 |
| Tokenized MMF / Treasury 对外发行(可二级流转) | Public Ethereum L1 | KYC'd 机构钱包 + stablecoin 互操作 + 第三方审计 |
| Tokenized 私募信贷 / 私募股权 | Avalanche subnet / Polygon PoS / Public ETH 多链 | tokenization-as-service + Securitize 路径 |
| 央行 wholesale CBDC 试点 | Corda / Besu / Canton 并行 | 多平台并行试点 |
| Trade finance / 供应链溯源 | Fabric / 自建 enterprise | 历史惯性 + 非金融客户 |
| Tokenized deposit(单银行内部) | Besu(HSBC TDS / Citi CTS)/ Canton | EVM 兼容 vs DAML 原子化 |
| Cross-G-SIB CBDC pilot([[fintech/bis-project-agora-overview\|BIS Project Agora]]) | Besu / Hedera / Canton 多平台 | 试点阶段无统一答案 |
| Tokenized stock 二级交易 | Public Ethereum L1 / Solana / 部分 L2 | 与 stablecoin 流动性最近 |
| Stablecoin payment(零售) | Public L2(Base / Tron / Polygon PoS) | 低 gas + 用户钱包密度 |
| Custody bank tokenized record-keeping | Canton(BNY)/ Corda(SDX / HQLAᵡ) | application-layer privacy |

## R3 / Digital Asset 整合时间轴(公开披露口径)

- **2014-2017**:R3 联盟成立,Corda 诞生,40+ 银行试点
- **2017-2020**:Digital Asset 与 R3 平行发展,Corda 在欧洲银行 + 部分 CSD 部署,Canton 在 ASX CHESS replacement(后取消)
- **2020-2023**:Canton Network 概念逐步成熟,Digital Asset 获 Microsoft / DTCC / GS / 多 G-SIB 投资,Corda 持续维护但新客户拓展放缓
- **2024**:DTCC Project Ion 选 Canton,Goldman DAP 迁 Canton,JPM 启动 Canton 评估,Canton 联盟扩张
- **2025**:R3 与 Digital Asset 完成战略整合(具体形式公开披露较少,但 Corda 与 Canton 团队 / 治理 / 客户拓展实质合并)
- **2026**:Canton 成为整合后的旗舰产品,Corda 维护现有客户但战略地位降级

注:具体整合时间与形式以双方官方披露为准,本节是综合公开信号的合理推断,confidence: likely。

## 监管 + 合规角度对照

- **Canton**:application-level privacy + Regulator Node 模型让监管者可以作为参与方加入,与 MiCA(欧盟)/ MAS(新加坡)等监管框架兼容性高
- **Public Ethereum L1**:依赖 ERC-3643(T-REX)或 Securitize 等 transfer agent 提供 "permissioned token in permissionless chain" 模式,合规由 token issuer + transfer agent 承担
- **Corda**:notary cluster + UTXO + 仅参与方可见的 transaction history,英国 / 新加坡 / 中东监管接受度高
- **Fabric**:permissioned + endorsement policy,在中国监管沙盒 + 部分中央银行内部账本中历史使用
- **Besu**:IBFT 共识 + Constellation off-chain payload,与 Canton 比 privacy 较弱但 EVM 兼容降低监管学习成本
- **Avalanche subnet**:可配置 KYC validator set + 与 Avalanche C-Chain 流动性互通,Apollo / KKR / Hamilton Lane 等资产管理选 Avalanche 的核心理由之一

## Tokenized stablecoin × DLT platform 矩阵

| 平台 | tokenized USD(stablecoin / deposit) |
|---|---|
| Canton | JPMD(JPM tokenized deposit)+ 部分 GS / DTCC stablecoin pilot |
| Public Ethereum L1 | USDC / USDT / PYUSD / RLUSD / Ondo USDY |
| Stellar | USDC(Circle native)+ WisdomTree WTSY |
| Avalanche | USDC / Tether on Avalanche C-Chain |
| Besu(Kinexys Chain) | JPMD(2026 在向 Canton 迁移) |
| Corda | 部分央行 wholesale CBDC pilot + HQLAᵡ collateral |
| Solana / Base | USDC native(retail payment 主要选择) |

## Counterpoints

- **"Canton 拿下 G-SIB" 是 Digital Asset 营销叙事**:实际多家 G-SIB 仍在 Besu / Corda / Canton 之间多平台并行,Canton 的胜出主要在 "战略迁移 momentum" 而非已实现 TVL
- **公链 RWA $20B 数字虚高**:大量 BUIDL / BENJI 的 AUM 实际由 BlackRock / Franklin 自身或合作做市商持有用于 yield strategy,真实第三方机构持有比例 < 50%
- **Corda 整合后定位模糊**:R3 与 Digital Asset 合并后 Corda 客户可能加速向 Canton 迁移,长尾客户实际维护成本上升
- **Fabric 衰退但供应链场景仍有黏性**:不能用 "金融机构衰退" 直接判 Fabric 死亡,IBM 在非金融 enterprise 场景仍有客户
- **Avalanche L1 / Subnet 重命名 ≠ 机构采纳加速**:多数 "Avalanche L1" mainnet 活跃度低,叙事 > 实质
- **私链 vs 公链不是二元对立**:同一机构同时在两边部署,选择因 use case 而异

## Open questions

- Canton 与 Corda 整合后 R3 长尾客户的实际去向(留 Corda 还是迁 Canton 还是迁公链)?
- BlackRock BUIDL 是否会与 Canton 联盟深度合作(对照 [[systems/canton-mmf-coalition|Canton MMF 联盟]])?
- 2027 完成 JPM Canton 迁移后 Citi / HSBC / BNP 是否会跟进?
- 公链 Ethereum L1 vs Canton 在 "tokenized collateral mobility" 场景的竞争结局?
- Avalanche Subnet / Polygon Enterprise 是否会被 Canton 联盟彻底挤出机构主战场?
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 等私募信贷代币化是否会从 Avalanche subnet 迁 Canton?
- 央行 wholesale CBDC 试点(对照 [[fintech/bis-project-agora-overview|BIS Project Agora]])长期会收敛到 Canton / Besu / Corda 哪一条?
- 跨平台 atomic settlement(Canton ↔ 公链 Ethereum)能否通过 [[systems/cctp-v2-overview|CCTP V2]] / [[systems/cross-chain-five-pole-comparison-matrix|跨链五极]] 实现可生产?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/canton-overview|Canton 总览]]
- [[systems/canton-daml-technical-spec|Canton DAML 技术规范]]
- [[systems/canton-mmf-coalition|Canton MMF 联盟]]
- [[systems/hyperledger-besu-overview|Hyperledger Besu 总览]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 迁移路径]]
- [[systems/cctp-v2-overview|CCTP V2 总览]]
- [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 总览]]
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
