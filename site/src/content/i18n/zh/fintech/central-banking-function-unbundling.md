---
source: fintech/central-banking-function-unbundling
source_hash: 6f615ed61d2234ba
lang: zh
status: machine
fidelity: ok
title: "中央银行职能拆分 5 层"
translated_at: 2026-05-31T06:16:15.752Z
---

# 中央银行职能拆分 5 层


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|米 / 欧 / 日「三大円」stablecoin グローバル・コンプライアンス・アーキテクチャ（MRA 相互承認）]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 布雷顿森林体系（1944）建立的隐性前提是：**中央银行同时承担货币体系的 5 项职能**，且这些职能**以捆绑形式提供**。2022 年 以来，5 项职能中的 4 项（#2-#5）已被分别私有化、商品化、链上原生化、多极化。中央银行保留了记账单位（#1），其余的拆分过程是过去 80  年来最大规模的金融基础设施重组。

## 5 项职能定义

| # | 职能 | 1944-2022  承担方 | 2022-2030  演变 |
|---|---|---|---|
| 1  | **记账单位**（Unit of Account） | 中央银行独占 | 仍属主权（美元/欧元/日元等） |
| 2  | **结算媒介**（Settlement Medium） | 中央银行准备金 + 商业银行存款 | **私有化** → 稳定币/代币化存款/货币市场基金三层网状交织 |
| 3  | **支付管道**（Payment Rails） | SWIFT + 中央银行 RTGS + 商业银行清算 | **多极化** → IPS / 私有 DLT / 中央银行联盟 / 卡网络 / 新型 L1 的 7-8 个细分并行 |
| 4  | **身份/KYC**（Identity） | 银行 KYC + 主权身份证件 | **商品化** → OCC 特许/FIDO/Anchorage/链上 KYA |
| 5  | **执法**（Enforcement） | OFAC + SWIFT 制裁 + 银行申报 | **链上原生化** → §501 黑名单/链上冻结/旅行规则 |

## 拆分触发因素

**2022 年 几乎同时发生 3  个独立事件，触发了拆分**：

| 事件 | 拆分的对象 |
|---|---|
| 美债收益率正常化（4-5%） | 为 #2  私有化提供经济模型 — 稳定币准备金的国债利息首次使该业务在商业上成立 |
| 俄罗斯准备金 $300B+ 被冻结 | 打破 #1  的中立性假设 → 美元被理解为政治工具 → #3  多极化获得政治正当性 |
| ChatGPT 公开发布 | 将 #4  从"人 vs 机构"的二元转变为"人 vs 机构 vs 智能体"的三元 → 协议层重构 |

参照：[[fintech/2022-three-variable-cascade-thesis|2022 三変数カスケード]]

## 层间网络效应

```
        客户基础（#4）
           ↑↓
   ┌───────┴───────┐
   ↓               ↓
结算媒介（#2）  支付管道（#3）
   ↓               ↓
   └───────┬───────┘
           ↓
        执法层（#5）
        （由监管机构提供）
```

**最强路径**：先掌握 #4（客户）+ #5（监管亲和性）的参与者，向下构建 #3  和 #2 。
**最弱路径**：仅从 #2（产品）单点切入，向上寻找客户与监管。

## 主要参与者的层级覆盖

| 参与者 | #2  | #3  | #4  | #5  |
|---|---|---|---|---|
| **Coinbase / Base** | 依赖 USDC + 自身代币待发行 | Base L2 + [[fintech/cbbtc-institutional-btc-wrapper|cbBTC]] 封闭循环 | 零售 KYC + Prime 机构 | OFAC 合规 |
| **Stripe / Tempo+Bridge+Privy** | USDB | [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Tempo + Connect]] | Bridge OCC + 商户网络 | OCC 合规 |
| **Circle / Arc** | USDC | [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc]] | OCC 申请中 + USDC 品牌 | §501 第 1 天 |
| **JPMorgan / Kinexys** | [[fintech/jpmorgan-jpmd-coin|JPMD + MONY/JLTXX]] | Kinexys + [[systems/canton-overview|Canton]] | 银行 KYC 100 年 | 与中央银行直接连接 + OCC 母行 |

**JPMorgan 是隐形巨头**：在 #2-#5 所有层均已掌控主权地位，不依赖加密生态。唯一弱点是非加密原生，但代币化存款路径无需 §501  稳定币资质。

## 应用场景

可用于以下分析：

- 任何"金融基础设施重组"事件（CBDC 发布、SWIFT 替代、跨境支付重构等）
- 单一参与者的"层级版图"诊断（识别强弱项）
- 跨层并购的战略含义（补强弱层 vs 进一步强化强层）

**反复出现的结构规律**：
- 1944  布雷顿森林确立 = 5 层首次同时由中央银行联盟承担
- 1971  布雷顿森林崩溃 = #1  与 #2  的联动解除
- 2008  中央银行量化宽松 = 中央银行通过 #2  介入 #1 
- 2022- 至今 = 4 层私有化进行中

## 关联

- [[fintech/stablecoin-chain-sovereign-currency-divide|5 極地政学対立]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter 裁定]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/2022-three-variable-cascade-thesis|2022 三変数カスケード]]

---
