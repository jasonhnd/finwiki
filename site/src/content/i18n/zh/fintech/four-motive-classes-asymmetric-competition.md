---
source: fintech/four-motive-classes-asymmetric-competition
source_hash: 9a00498d81298ac6
lang: zh
status: machine
fidelity: ok
title: "4 动机类别的非对称分析"
translated_at: 2026-05-31T06:16:15.685Z
---

# 4 动机类别的非对称分析


## Wiki route

本条目位于 [[fintech/INDEX|fintech index]] 下。可与日本稳定币监管和金融监管页面一并阅读。

> [!info] TL;DR
> 通行方法是将市场参与者划分为"竞争阵营"（某金融集团报告中的 7  个阵营、本研究 v1 中的 5  极等）。这隐含了**对称竞争**假设。**实际上，参与者有 4  种结构性动机**，对应**截然不同的退出博弈**。若不理解动机类别，则无法预测各参与者在压力下的行为。

## 4  动机类别

### 类别 1：被困赢家（Locked-in Winners）

**特征**：无法撤退到其他商业模式，要么赢，要么死。

**示例**：
- Circle（USDC 是唯一产品线）
- [[fintech/tether-business-model-short-treasury-yield|Tether]]（USDT 是唯一产品线）
- Paxos（[[fintech/paypal-pyusd-stablecoin|PYUSD]] / USAT / 各稳定币发行）
- Stripe（垂直整合的赌注全押在 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Bridge + Tempo + Privy]]）
- Coinbase（Base + USDC 合同 + Prime 是核心收益）
- 稳定币 L1 / L2 链

**压力下行为**：**接受高风险** + 主动收购 + 进行监管套利。

### 类别 2：组合赢家（Portfolio Winners）

**特征**：广泛投资，任意一个胜出即赢，风险分散。

**示例**：
- a16z crypto（Arc $75M 领投 + 其他众多稳定币/链项目投资）
- BlackRock（Arc 投资 + 8  链上的 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + Tempo 投资）
- Apollo（Arc 投资 + 6  链上的 [[fintech/apollo-acred-private-credit-tokenization|ACRED]]）
- SBI Holdings（Circle 投资 + [[payment-firms/jpyc|JPYC]] 持股 + SBI Circle Holdings 50% 持股 + 其他多项）
- Mubadala（Arc + 中东 RWA 基金投资）
- Visa（Arc 投资 + Tempo 验证者 + 接受所有稳定币 + 自身不发行稳定币）
- Mastercard（与 Visa 相似但时间稍晚）

**压力下行为**：**维持多元化** + 不单方面打破僵局 + 接受碎片化持续的结局。

参考：[[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 / ARM アナロジー]]

### 类别 3：基础设施赢家（Infrastructure Winners）

**特征**：资产流转本身即为收益，向所有交战方出售。

**示例**：
- AWS / Azure / GCP（云基础设施）
- Cloudflare（x402、AP2、AI 推理代理）
- Anchorage（OCC 牌照即服务，向 20 社 的稳定币发行方提供白标服务）
- Bridge（OCC 牌照即服务）
- Chainalysis / TRM Labs / Elliptic（链上合规即服务）
- FIDO Alliance / Linux Foundation AAIF（协议标准化即治理）
- AT&T / Verizon（电信 KYC 即服务，在亚洲实力较强）

**压力下行为**：**乐见碎片化持续** —— 参与者越多，收益越大。

### 类别 4：主权协调者（Sovereign Coordinators）

**特征**：不参与商业竞争，依政治逻辑运作。

**示例**：
- BIS Project Agorá（7  家中央银行 + 40  家商业银行）
- mBridge（中国主导 + 阿联酋/泰国/香港）
- Project Nexus（5  个新兴国家，2026  商用）
- 各国中央银行（中国人民银行、ECB、日本银行、美联储、RBI、MAS、HKMA、VARA）
- FATF（全球反洗钱/反恐融资框架）
- IMF / 世界银行（系统稳定）

**压力下行为**：**按政治时间轴移动**（缓慢但不可逆）+ 不接受商业逻辑的套利。

## 为何此分类比"7  个阵营"更有用

某金融集团报告的"7  个阵营"分类：民间 vs 央行联合体 / 银行独立 DLT / 中国国家垂直 / 新兴市场 IPS / 并购 / 大型科技 / 等。

**问题**：将 a16z（投资方）与 Coinbase（运营方）放在同一维度，将 Visa（卡组织）与 PayPal（钱包）放在同一维度。**但压力下的行为截然不同**：
- a16z 不会"出售"持股换取 Coinbase 的支持 → 组合赢家
- Coinbase 在 2026-08  的 Circle 合同压力下**必然**反击 → 被困赢家
- Visa 不会单方面偏向任何一方 → 组合赢家
- PayPal 面临 PYUSD 上 4× 增速的压力 → 被困赢家

**4  动机类别使预测成为可能**：
- 谁会**主动**激化冲突？被困赢家
- 谁会**主动**调停冲突？组合赢家 + 基础设施赢家
- 谁会**漠视**冲突？主权协调者（政治上需要介入的情况除外）

## 应用模板

**分析任意市场结构性事件**：

1. 列出所有主要参与者
2. 按 4  动机类别归类
3. 识别各类别"压力下行为"
4. 推论**压力放大 → 谁是主动方？谁是被动方？谁退场？**

**典型应用 1：稳定币战争**
- 被困赢家（5-7 社）：正面交锋
- 组合赢家（8-10 社）：分散投资
- 基础设施赢家（5-7 社）：出售工具
- 主权协调者（10+ 机构）：监管 + CBDC

**典型应用 2：2008  全球金融危机**
- 被困赢家：雷曼、贝尔斯登（被迫破产/被收购）
- 组合赢家：高盛、摩根大通（多元收益结构生存）
- 基础设施赢家：BlackRock（承接不良资产）、ICE（收购纽交所强化结构）
- 主权协调者：美联储、TARP、IMF（系统性干预）

**4  动机类别分类法可推广至任何金融基础设施重组事件。**

## 相关

- [[fintech/wall-street-crypto-network-neutrality|Wall Street ネットワーク中立性]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]

---
