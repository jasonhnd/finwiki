---
title: 中央银行职能解体五层 —— 货币基础设施重组的宏观结构
aliases: [央行解体, 5-layer unbundling, central banking function unbundling]
domain: fintech
kind: framework
topic: central-banking-function-unbundling
created: 2026-05-16
last_updated: 2026-05-16
last_tended: 2026-05-16
review_by: 2026-11-16
confidence: certain
tags: [fintech, stablecoin, central-banking, macro-framework, geopolitics]
status: candidate
sources: []
---

# 中央银行职能解体五层


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|美 / 欧 / 日 "三个大圆" 稳定币全球合规架构（MRA 互认）]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> Bretton Woods 体系（1944）建立的隐含假设是**央行同时承担货币系统的 5 项职能**，且这些职能**捆绑出售**。2022 年起，5 项中 4 项（#2-#5）被分别私有化、商品化、链原生化、多极化。央行保留计价单位（#1），其余的解体过程是过去 80 年最大的金融基础设施重组。

## 5 项职能定义

| # | 职能 | 1944-2022 由谁承担 | 2022-2030 演化 |
|---|---|---|---|
| 1 | **计价单位**（Unit of Account） | 央行垄断 | 仍主权（USD/EUR/JPY 等）|
| 2 | **结算介质**（Settlement Medium） | 央行储备 + 商业银行存款 | **私有化** → SC / TD / MMF 三层网状交织 |
| 3 | **支付管道**（Payment Rails） | SWIFT + 央行 RTGS + 商业银行清算 | **多极化** → IPS / 私有 DLT / 央行联邦 / 卡网络 / 新型 L1 7-8 段并行 |
| 4 | **身份 / KYC**（Identity） | 银行 KYC + 主权 ID | **商品化** → OCC charter / FIDO / Anchorage / 链级 KYA |
| 5 | **执法**（Enforcement） | OFAC + SWIFT 制裁 + 银行报告 | **链原生化** → §501 Denylist / chain-level freeze / Travel Rule |

## 解体触发

**2022 年三个独立事件几乎同时发生，触发了解体**：

| 事件 | 解体了什么 |
|---|---|
| 美债利率正常化（4-5%）| 给 #2 私有化提供经济模型 —— 稳定币储备国债利息首次成为可行业务 |
| 冻结俄罗斯储备 $300B+ | 撕破 #1 中性假设 → 美元被理解为政治工具 → #3 多极化获政治授权 |
| ChatGPT 公开 | 改变 #4 从"人 vs 机构"为"人 vs 机构 vs Agent"三元 → 协议层重构 |

参见：[[2022-three-variable-cascade-thesis|2022 三变量级联]]

## 跨层网络效应

```
        客户基数（#4）
           ↑↓
   ┌───────┴───────┐
   ↓               ↓
结算介质（#2）  支付管道（#3）
   ↓               ↓
   └───────┬───────┘
           ↓
        执法层（#5）
        （监管者给）
```

**最强路径**：先有 #4（客户）+ #5（监管亲缘）的玩家，向下建 #3 和 #2。
**最弱路径**：从 #2（产品）单点起家，再向上找客户和监管。

## 主角层级覆盖

| 主角 | #2 | #3 | #4 | #5 |
|---|---|---|---|---|
| **Coinbase / Base** | USDC 依赖 + 自有 token 待发 | Base L2 | 散户 KYC + Prime 机构 | OFAC 配合 |
| **Stripe / Tempo+Bridge+Privy** | USDB | Tempo + Connect | Bridge OCC + 商户网络 | OCC compliance |
| **Circle / Arc** | USDC | Arc | OCC 申请中 + USDC 品牌 | §501 day-1 |
| **JPMorgan / Kinexys** | JPMD + MONY/JLTXX | Kinexys + Canton | 银行 KYC 100 年 | 央行直连 + OCC 母行 |

**JPMorgan 是隐藏巨人**：在 #2-#5 全部 close 主权，不依赖 crypto 生态。它的劣势只有不是 crypto-native，但 TD 路径不需要 §501 SC 资格。

## 应用

可用于分析：

- 任何"金融基础设施重组"事件（CBDC 推出、SWIFT 替代、跨境支付重构等）
- 单一玩家的"层级版图"诊断（识别强弱）
- 跨层并购的战略含义（在弱层补强 vs 在强层加固）

**反复出现的结构**：
- 1944 布雷顿森林建立 = 5 层首次同时被央行联盟承担
- 1971 布雷顿森林解体 = #1 与 #2 脱钩
- 2008 央行 QE = 央行用 #2 干预 #1
- 2022- 现在进行时 = 4 层私有化

## 关联

- [[stablecoin-chain-sovereign-currency-divide|五极地缘对立]]
- [[occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter 套利]]
- [[three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[2022-three-variable-cascade-thesis|2022 三变量级联]]

---

