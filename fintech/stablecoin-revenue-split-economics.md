---
title: 稳定币利息分润经济学 —— Coinbase / Circle 50% off-platform 模型
aliases: [USDC 分润, stablecoin revenue split, Circle Coinbase math]
domain: fintech
kind: knowledge
topic: stablecoin-revenue-split-economics
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-05-13
review_by: 2026-11-13
confidence: certain
tags: [fintech, stablecoin, USDC, Coinbase, Circle, economic-model]
status: candidate
sources: []
---

# 稳定币利息分润经济学


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 稳定币发行方与主要分销渠道之间的**利息分账**遵循 "on-platform 100% / off-platform 50%" 模型。USDC 案例已经数学验证：**Coinbase Q1 2026 stablecoin revenue $305M ≈ $19B 平台内 × 4% × 100% + $58B 平台外 × 4% × 50% / 4 = $306M**。

**核心公式**：

```
分销方季度收入 = (平台内 USDC × 储备年化收益率 × 100% × 1/4)
                + (平台外 USDC × 储备年化收益率 × 50% × 1/4)
```

**触发点**：当发行方（Circle）建立**自有平台**（Arc 主网 / 自营 distribution 体系）后，"off-platform 50%" 部分的收入将逐步迁移回发行方手中。Arc 主网即是 Circle 将该部分收入收回的结构性动作。

**通用性**：该模型可推广至以下情景：

- [[fintech/paypal-pyusd-stablecoin|PYUSD（PayPal）]] 与 Paxos 之间的分账安排
- [[fintech/world-liberty-usd1-political-stablecoin|USD1（World Liberty Financial）]] 与 Bridge 之间的分账安排
- [[JapanFG/jpyc|JPYC]]（[[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 环形持股]]）的潜在分销分账结构
- USDT（Tether）与 Bitfinex 的历史关系（条款未公开）

**典型触发时间窗**：分销协议通常以 3-5 年期限叠加自动续约条款的形式签订。USDC 案例中 2026-08 协议续约即是 Circle 与 Coinbase 之间的关键博弈节点。

**估值含义**：分销方（Coinbase）的稳定币 revenue 高度依赖于**协议存续**。若协议解约，年化收入可能下滑 30-60%。这是 [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密原生]] 演化路径中的关键经济动因，并直接推动了 [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Circle Arc 反向整合战略]] 的形成。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 商业模式]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin 跨境结算]]
<!-- /wiki-links:managed -->
