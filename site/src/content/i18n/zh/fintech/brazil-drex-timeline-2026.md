---
source: fintech/brazil-drex-timeline-2026
source_hash: ef8ae7c9c13ad6db
lang: zh
status: machine
fidelity: ok
title: "巴西DREX时间线2024-2026"
translated_at: 2026-05-31T06:16:15.692Z
---

# 巴西DREX时间线2024-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the **Brazil-specific deep dive** that the regional [[fintech/latin-america-cbdc-stablecoin-dollarization]] entry references for DREX mechanics and Pix interplay. Read it alongside the multi-tier CBDC architecture framework at [[fintech/cbdc-multi-tier-architecture-overview]], the tokenized-deposit institutional thesis at [[fintech/institutional-stablecoin-deposit-token-thesis]], and the BIS cross-CBDC interoperability surfaces at [[fintech/mbridge-bis-multi-cbdc-overview]] and [[fintech/bis-project-agora-overview]] for comparative context.

> [!info] TL;DR
> **DREX**是巴西CBDC项目的运营名称，由**巴西中央银行（BCB）**自2020起主导。截至2026-05 ，项目处于**试点2阶段**（扩大多资产、多参与方），**试点1阶段**（封闭式储备转账 + DvP）已于2024完成。平台运行于**Hyperledger Besu**许可链网络，采用双层架构：BCB向持牌金融机构发行批发CBDC；这些机构再向终端客户发行**代币化存款**。DREX**明确不是面向零售的CBDC代币**；面向零售层的是与Pix即时支付轨道互操作的代币化商业银行存款。可编程资金使用场景（DvP、托管、条件支付、智能合约介导的贸易融资）是推动采用的催化剂。在DREX范围之外，还存在一个规模较小但持续增长的**独立巴西雷亚尔锚定稳定币**板块（BRLA Digital、Mercado Bitcoin MBRL）。

## DREX概述

DREX是一个**双层代币化平台**：BCB向持牌银行和持牌支付机构发行批发CBDC代币；这些机构再向其客户发行**代币化存款**（以巴西雷亚尔计价）。终端用户持有代币化存款，而非BCB发行的代币。这一架构与日本信托型EPI模型（参见[[fintech/jp-trust-type-sc-architecture]]和[[fintech/japan-epi-three-types-overview]]）及香港代币化存款试点更为接近，而非类似巴哈马沙元的单代币零售CBDC。

## 起源与命名

- **2020-08**：BCB启动CBDC研究，释放发行数字雷亚尔意向。
- **2022**：BCB技术团队、学术界和行业组成工作组，形成初始需求文件。
- **2023-03**：平台正式命名为**DREX**（Digital REal eXchange / 数字雷亚尔）。BCB发布平台设计文件。
- **2023-05**：BCB选定技术栈：**Hyperledger Besu**，一种企业级以太坊兼容许可链实现。
- **2023-Q4**：开始纳入试点1 参与方。
- **2024**：试点1 封闭式测试。
- **2025**：试点1 结束；试点2 设计及纳入参与方。
- **2026**：试点2 进行中，参与方及资产类别扩大。

### 双层发行模型

| 层级 | 发行方 | 代币 | 持有方 |
|---|---|---|---|
| 批发（第1层） | BCB | DREX批发CBDC | 持牌金融机构 |
| 零售（第2层） | 持牌机构 | 代币化存款（以巴西雷亚尔计价） | 终端客户（企业+个人） |

终端用户不直接持有BCB发行的代币，而是持有可按1:1 比率向其银行在BCB持有的批发CBDC赎回的代币化商业银行存款。这与[[fintech/cbdc-multi-tier-architecture-three-paradigms]]所调研的架构模式及[[fintech/cbdc-multi-tier-architecture-tradeoffs]]中的政策权衡分析相同。

### 技术栈

- **网络**：Hyperledger Besu（许可链，EVM兼容）。
- **共识机制**：IBFT 2.0 （伊斯坦布尔拜占庭容错）变体，适用于已知验证者的许可链网络。
- **隐私**：试点1 阶段测试了隐私保护机制（来自Aztec、Anonymous Zether等的加密余额和选择性披露方案） —— 鉴于EVM默认公开的性质，这是一个已知的设计挑战。
- **智能合约**：Solidity兼容；由经批准的参与方许可部署。
- **身份/KYC**：与BCB参与方牌照绑定；链上身份与参与方的链下KYC数据库关联。

### 试点1 （2024）

**范围**：在精选参与方中进行封闭式测试。资产类别：
- 批发CBDC（BCB发行）。
- 参与银行发行的代币化存款。
- 代币化联邦公共债务（国债，与国家财政部合作）。
- 付款对交付（DvP）测试案例。

**参与方**（BCB在2023-2024期间的公告中公开命名）：联合体包括巴西主要银行（Itaú、Bradesco、BTG Pactual、Santander Brasil、巴西银行、联邦储蓄银行）、金融科技公司（Nubank、Inter）及支付系统实体，以及BCB和国家财政部。

**成果**（根据BCB公开通报）：
- 代币化存款与代币化联邦债务之间的DvP得到验证。
- 智能合约介导的托管和条件支付场景得到验证。
- **隐私架构被确定为核心未解决挑战** —— 试点1 明确表明，EVM的透明性在负责任地推向零售之前，需要进行实质性的隐私叠加工程。

### 试点2 （2025-2026）

**扩展方向**：
- 更广泛的参与方（更多银行、支付机构、金融科技公司）。
- 更多资产类别（包括私募证券和贸易应收账款的额外代币化资产）。
- 更复杂的使用场景（跨资产DvP、托管、可编程支付自动化）。
- 持续推进隐私架构工作。

**截至2026-05的状态**：试点2 **仍在进行中**，尚未宣布生产上线日期。BCB始终强调，在隐私挑战以对零售客户数据负责的水平得到解决之前，平台不会投入生产。

## Pix整合·结构性锚点

**Pix**是BCB于2020-11, 推出的即时支付系统，被数亿账户使用，每日处理数亿笔交易。Pix是**DREX采用面临的最重要约束**，因为Pix已经实现：

- 即时24/7 结算。
- 零或近零零售成本。
- 通过二维码实现全面商户接受。
- 银行与金融科技公司对等。

在这些维度上与Pix竞争的零售CBDC**毫无价值主张**，除非它增加可编程性、DvP或跨资产结算。这正是DREX**明确不是**与Pix竞争的零售CBDC项目的原因 —— 相反，DREX的设计目标是：

1. 作为批发储备转账轨道位于Pix**上游**。
2. 增加Pix原生不支持的**可编程性**（智能合约条件、DvP、托管）。
3. 与Pix进行零售层**互操作** —— DREX介导的交易可通过Pix或DREX本身的代币化存款转账结算现金腿。

Pix为任何巴西稳定币项目设定的竞争基准，与印度尼西亚QRIS（参见[[fintech/indonesia-ovo-stablecoin-route]]和[[fintech/southeast-asia-stablecoin-regulatory-landscape]]）及墨西哥CoDi（参见[[fintech/latin-america-cbdc-stablecoin-dollarization]]）的动态相同。

## 可编程资金目标使用场景

| 使用场景 | 描述 | DREX的价值 |
|---|---|---|
| 代币化联邦债务DvP | 国家财政部债券代币化；现金腿以代币化存款结算 | 原子化结算，相比现行T+1/T+2  |
| 不动产托管 | 资金在智能合约中锁定，待产权转移后释放 | 去除中间方；可编程条件 |
| 贸易融资 | 信用证+发票+支付自动化 | 降低文件处理成本和争议窗口 |
| 条件支付 | 经预言机验证的事件触发付款 | 在Pix上不可行的新使用场景 |
| 薪资自动化 | 流式或定时付款 | 新使用场景 |
| 跨资产DvP | 代币化大宗商品vs代币化存款 | 新使用场景 |

该模式与[[fintech/institutional-stablecoin-deposit-token-thesis]]所论述的**机构/批发价值主张**以及[[fintech/stablecoin-crossborder-b2b-growth]]中更广泛的**B2B稳定币增长**轨迹相吻合。

## 竞争性私人巴西雷亚尔稳定币板块

DREX与规模较小但持续增长的**独立巴西雷亚尔锚定稳定币**板块并存，后者运行于DREX范围之外：

### BRLA Digital

- 由BRLA Digital发行的巴西雷亚尔锚定稳定币，与巴西银行合作伙伴合作。
- 面向B2B结算和加密原生零售流量。
- 通过《加密货币法律框架》（Law 14.478 / 2022）框架作为受监管实体在BCB监管下运营。
- 跨链覆盖以太坊、Polygon及其他EVM兼容链。

### Mercado Bitcoin MBRL

- 巴西最大的数字资产交易场所Mercado Bitcoin（MB）已试点巴西雷亚尔锚定代币（通常称为MBRL），借助BRLA基础设施。
- 旨在支持零售交易对结算及B2B出入金。

### 私人巴西雷亚尔稳定币与DREX共存的原因

| 维度 | DREX代币化存款 | 私人巴西雷亚尔稳定币 |
|---|---|---|
| 发行方 | 持牌银行 | 非银行或混合发行方 |
| 网络 | 许可链Hyperledger Besu | 公链EVM |
| 与DeFi互操作性 | 无（许可链） | 有 |
| 跨境整合 | 通过BCB及BIS框架 | 通过公链流动性 |
| 可编程资金深度 | 强（智能合约） | 强（智能合约） |
| 零售用户体验 | 依附参与银行的应用程序 | Web3 钱包 + 加密原生应用 |

两条轨道服务不同的用户群体。DREX胜在**受监管的批发及面向银行客户的可编程支付**场景。私人巴西雷亚尔稳定币胜在**DeFi原生和加密原生**场景。这与[[fintech/issuer-distributor-incentive-realignment-50-50-model]]中**发行方-分销方分离**的经济相似性具有结构性意义。

## 跨CBDC互操作接口

巴西BCB参与多项影响DREX长期互操作性的跨CBDC倡议：

- **BIS创新中心欧元系统中心和美洲中心** —— 巴西参与标准制定工作。
- **mBridge项目**（中国人民银行、金管局、泰国央行、阿联酋央行、沙特央行早期参与；泰国央行于2024退出）—— 参见[[fintech/mbridge-bis-multi-cbdc-overview]]。巴西不是mBridge的正式参与方，但关注其架构。
- **Agora项目**（BIS + 私人银行，多CBDC + 代币化商业银行货币）—— 参见[[fintech/bis-project-agora-overview]]和[[fintech/bis-project-agora-vs-mbridge]]。巴西参与程度在观察层面有所释放；全面整合将影响DREX的跨境定位。
- **Ensemble项目**（金管局 + 私人银行，代币化货币 + 代币化资产）—— 参见[[fintech/bis-project-ensemble-overview]]和[[fintech/bis-project-ensemble-vs-mbridge-dual-track]]。DREX的设计模式与Ensemble的代币化存款架构更为接近，而非mBridge的纯批发CBDC方式。
- **Nexus项目**（BIS主导的即时支付互联）—— 向拉丁美洲廊道扩展将直接影响Pix跨境使用场景。

## 时间线汇总

| 年份 | 里程碑 |
|---|---|
| 2020-08  | BCB启动CBDC研究 |
| 2022  | 工作组形成需求文件 |
| 2023-03  | 平台命名为DREX |
| 2023-05  | 选定Hyperledger Besu |
| 2023-Q4  | 试点1 纳入参与方 |
| 2024  | 试点1 封闭式测试结束 |
| 2025  | 试点2 设计 + 初始参与方纳入 |
| 2026  | 试点2 进行中（当前） |
| 2027+ | 可能的生产上线，取决于隐私问题的解决 |

## Related

- [[fintech/INDEX|Wiki Index]]
- [[fintech/latin-america-cbdc-stablecoin-dollarization|Latin America CBDC + USD-SC dynamics]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC tradeoffs]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional SC + deposit-token thesis]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B SC cross-border growth]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan SC regulatory landscape]]
- [[fintech/jp-trust-type-sc-architecture|JP trust-type SC architecture]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## Sources

- 巴西中央银行 —— DREX项目页面（英文及葡萄牙文），平台设计出版物，试点1 成果通报，试点2 公告。
- 巴西中央银行 —— Pix系统文件及统计数据。
- 巴西中央银行 —— 《加密货币法律框架》（Law 14.478 / 2022）实施通告及BCB CMN关于VASP的决议。
- 巴西中央银行 —— 开放银行/开放金融文件（与DREX架构相邻）。
- 国际清算银行 —— 引用DREX的工作报告，Agora项目、Ensemble项目、Nexus项目及mBridge材料。
