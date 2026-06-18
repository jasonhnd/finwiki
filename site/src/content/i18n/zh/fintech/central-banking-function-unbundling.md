---
source: fintech/central-banking-function-unbundling
source_hash: f01c443ba9affafe
lang: zh
status: machine
fidelity: ok
title: "中央银行职能的解绑 5 层"
translated_at: 2026-06-18T23:59:13.061Z
---

# 中央银行职能的解绑 5 层


## Wiki route

本条目归属于 [[fintech/INDEX|fintech index]]。请将其与 [[fintech/three-circles-stablecoin-mra-framework|米 / 欧 / 日「三大円」stablecoin グローバル・コンプライアンス・アーキテクチャ（MRA 相互承認）]] 对照阅读以获取同业 / 对比语境，并参照 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 了解更广阔的体系 / 监管边界。

> [!info] TL;DR
> 布雷顿森林体系（1944）所构建的隐含前提是，**中央银行同时承担货币体系的 5 项职能**，且这些职能被**捆绑销售**。自 2022 年以来，这 5 项职能中的 4 项（#2-#5）被逐一私有化、商品化、链原生化与多极化。中央银行保留了计量单位（#1），其余的解绑进程是过去 80 年间最大规模的金融基础设施重构。

## 5 项职能的定义

| # | 职能 | 1944-2022 承担者 | 2022-2030 演化 |
|---|---|---|---|
| 1 | **计量单位**（Unit of Account）| 中央银行独占 | 依然主权（USD/EUR/JPY 等）|
| 2 | **结算媒介**（Settlement Medium）| 中央银行准备金 + 商业银行存款 | **私有化** → SC / TD / MMF 三层呈网状交错 |
| 3 | **支付管道**（Payment Rails）| SWIFT + 中央银行 RTGS + 商业银行清算 | **多极化** → IPS / 私营 DLT / 中央银行联邦 / 卡网络 / 新型 L1 的 7-8 分段并行 |
| 4 | **身份 / KYC**（Identity）| 银行 KYC + 主权 ID | **商品化** → OCC charter / FIDO / Anchorage / 链级 KYA |
| 5 | **执行**（Enforcement）| OFAC + SWIFT 制裁 + 银行报告 | **链原生化** → §501 Denylist / chain-level freeze / Travel Rule |

## 解绑的触发因素

**2022 年有 3 起独立事件几乎同时发生，触发了解绑**:

| 事件 | 所解绑的对象 |
|---|---|
| 美国国债利率正常化（4-5%）| 为 #2 的私有化提供了经济模型——stablecoin 准备金的国债利息首次作为业务得以成立 |
| 俄罗斯准备金 $300B+ 被冻结 | 打破 #1 的中立性假设 → 美元被理解为政治工具 → 为 #3 多极化提供政治正当性 |
| ChatGPT 公开发布 | 将 #4 从「人 vs 机构」变革为「人 vs 机构 vs Agent」的三元 → 协议层的重构 |

参照: [[fintech/2022-three-variable-cascade-thesis|2022 三変数カスケード]]

## 层间网络效应

```
        客户群（#4）
           ↑↓
   ┌───────┴───────┐
   ↓               ↓
结算媒介（#2）  支付管道（#3）
   ↓               ↓
   └───────┬───────┘
           ↓
        执行层（#5）
        （由监管者提供）
```

**最强路径**: 先持有 #4（客户）+ #5（监管侧亲和性）的玩家，向下构建 #3 与 #2 。
**最弱路径**: 从 #2（产品）单点起步，向上去寻找客户与监管。

## 主要玩家按层划分的覆盖

| 玩家 | #2 | #3 | #4 | #5 |
|---|---|---|---|---|
| **Coinbase / Base** | 依赖 USDC + 自家 token 尚待发行 | Base L2 + [[fintech/cbbtc-institutional-btc-wrapper|cbBTC]] 闭环 | 零售 KYC + Prime 机构 | OFAC 协作 |
| **Stripe / Tempo+Bridge+Privy** | USDB | [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Tempo + Connect]] | Bridge OCC + 商户网络 | OCC compliance |
| **Circle / Arc** | USDC | [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc]] | OCC 申请中 + USDC 品牌 | §501 day-1 |
| **JPMorgan / Kinexys** | [[fintech/jpmorgan-jpmd-coin|JPMD + MONY/JLTXX]] | Kinexys + [[systems/canton-overview|Canton]] | 银行 KYC 100 年 | 中央银行直连 + OCC 母行 |

**JPMorgan 是隐藏的巨人**: 在 #2-#5 全部环节均闭合了主权，且不依赖 crypto 生态系统。唯一的弱点是其并非 crypto-native，但 TD 路径无需 §501 SC 资格。

## 应用

可用于以下分析:

- 任意「金融基础设施重构」事件（CBDC 上线、SWIFT 替代、跨境支付重构等)
- 单一玩家的「层版图」诊断（识别强弱）
- 跨层 M&A 的战略含义（补强弱层 vs 进一步强化强层）

**反复出现的结构**:
- 1944 布雷顿森林确立 = 5 层首次被中央银行联盟同时承担
- 1971 布雷顿森林崩溃 = #1 与 #2 的联动解除
- 2008 中央银行 QE = 中央银行以 #2 介入 #1 
- 2022- 进行中 = 4 层的私有化

## 关联

- [[fintech/stablecoin-chain-sovereign-currency-divide|5 極地政学対立]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter 裁定]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/2022-three-variable-cascade-thesis|2022 三変数カスケード]]

---
