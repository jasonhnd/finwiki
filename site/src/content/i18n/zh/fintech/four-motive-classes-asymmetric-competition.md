---
source: fintech/four-motive-classes-asymmetric-competition
source_hash: 44ef2ac1396245f2
lang: zh
status: machine
fidelity: ok
title: "4 动机类别的非对称分析"
translated_at: 2026-06-18T23:59:13.120Z
---

# 4 动机类别的非对称分析


## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下。请将其与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 对照阅读以获取同类／对比语境，并与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 对照阅读以了解更广泛的系统／监管边界。

> [!info] TL;DR
> 通行的手法是将市场参与者归类为「竞争阵营」（某金融集团 deck 中的 7 阵营、本研究 v1 中的 5 极等）。这隐含地包含了**对称竞争**假设。**实际上参与者拥有 4 种结构性动机**，对应于**全然不同的退出博弈**。若不理解动机分类，就无法预测各参与者在压力下会如何行动。

## 4 动机类别

### 类别 1：被将死的赢家（Locked-in Winners）

**特征**：无法退避到其他商业模式，要么赢要么死。

**例**：
- Circle（USDC 是唯一产品线）
- [[fintech/tether-business-model-short-treasury-yield|Tether]]（USDT 是唯一产品线）
- Paxos（[[fintech/paypal-pyusd-stablecoin|PYUSD]] / USAT / 各类 SC 发行）
- Stripe（垂直整合的押注全在 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Bridge + Tempo + Privy]]）
- Coinbase（Base + USDC 合约 + Prime 为核心收入）
- 稳定币 L1 / L2 链

**压力下行动**：**接受高风险** + 主动收购 + 进行监管套利。

### 类别 2：组合型赢家（Portfolio Winners）

**特征**：广撒投资，任一胜出即赢，分散风险。

**例**：
- a16z crypto（领投 Arc $75M + 投资其他众多 SC／链项目）
- BlackRock（投资 Arc + 8 链上的 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + 投资 Tempo）
- Apollo（投资 Arc + 6 链上的 [[fintech/apollo-acred-private-credit-tokenization|ACRED]]）
- SBI Holdings（投资 Circle + 持有 [[payment-firms/jpyc|JPYC]] + 持有 SBI Circle Holdings 50% + 其他众多）
- Mubadala（Arc + 中东 RWA 基金投资）
- Visa（投资 Arc + Tempo validator + 接受全部 SC + 自身不发行 SC）
- Mastercard（与 Visa 相同，但时点更晚）

**压力下行动**：**维持多元化** + 不单方面打破僵局 + 接受 fragmentation persistent 的结局。

参照：[[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 / ARM アナロジー]]

### 类别 3：基础设施赢家（Infrastructure Winners）

**特征**：churn 本身即收入，向所有交战方出售。

**例**：
- AWS / Azure / GCP（云基础设施）
- Cloudflare（x402、AP2、AI 推理代理）
- Anchorage（OCC charter as a service，向 20 社的 SC 发行体提供白标）
- Bridge（OCC charter as a service）
- Chainalysis / TRM Labs / Elliptic（链上合规 as a service）
- FIDO Alliance / Linux Foundation AAIF（协议标准化 as 治理）
- AT&T / Verizon（电信 KYC as a service，在亚洲强势）

**压力下行动**：**乐见 fragmentation 持续** —— 参与者越多，收入越多。

### 类别 4：主权协调者（Sovereign Coordinators）

**特征**：不参与商业竞争，按政治逻辑行动。

**例**：
- BIS Project Agorá（7 央行 + 40 商业银行）
- mBridge（中国主导 + UAE / 泰国 / HK）
- Project Nexus（5 新兴国，2026 商用）
- 各国央行（PBoC, ECB, BoJ, Fed, RBI, MAS, HKMA, VARA）
- FATF（全球 AML/CFT 框架）
- IMF / 世行（系统稳定）

**压力下行动**：**按政治时间轴移动**（缓慢但不可逆）+ 不接受商业逻辑的套利。

## 为何此分类比「7 阵营」更有用

某金融集团 deck 中的「7 阵营」分类：民间 vs 央行联盟／银行单独 DLT／中国国家垂直／新兴国 IPS／M&A／大型科技／等。

**问题**：将 a16z（投资者）与 Coinbase（运营者）置于同一维度，将 Visa（卡组织）与 PayPal（钱包）置于同一维度。**但压力下的行动截然不同**：
- a16z 不会「出售」持股以换取 Coinbase 的支持 → 组合型赢家
- Coinbase 在 2026-08 的 Circle 合约压力下**必然**反击 → 被将死的赢家
- Visa 不会单方面支持任何一方 → 组合型赢家
- PayPal 在 PYUSD 上面临 4× 增长率的压力 → 被将死的赢家

**借助 4 动机类别即可预测**：
- 谁会**主动**激化冲突？被将死的赢家
- 谁会**主动**调停冲突？组合型赢家 + 基础设施赢家
- 谁会**无视**冲突？主权协调者（除非在政治上必须介入的情形）

## 应用模板

**分析任意市场结构性事件**：

1. 列出全部主要参与者
2. 归类为 4 动机类别
3. 识别各类别的「压力下行动」
4. 推演 **压力放大 → 谁主动？谁被动？谁离场？**

**典型应用 1：稳定币战争**
- 被将死的赢家（5-7 社）：正面冲突
- 组合型赢家（8-10 社）：分散投资
- 基础设施赢家（5-7 社）：售卖工具
- 主权协调者（10+ 机构）：监管 + CBDC

**典型应用 2：2008 全球金融危机**
- 被将死的赢家：Lehman、Bear Stearns（被迫破产／收购）
- 组合型赢家：Goldman、JPMorgan（以多元收入结构存活）
- 基础设施赢家：BlackRock（接收不良资产）、ICE（以接收 NYSE 强化结构）
- 主权协调者：Fed、TARP、IMF（系统性介入）

**4 动机类别分类法可扩展至任何金融基础设施重组事件**。

## 相关

- [[fintech/wall-street-crypto-network-neutrality|Wall Street ネットワーク中立性]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]

---
