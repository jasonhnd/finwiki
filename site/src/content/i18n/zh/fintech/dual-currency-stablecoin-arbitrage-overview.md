---
source: fintech/dual-currency-stablecoin-arbitrage-overview
source_hash: 1a069b00d6a8da06
lang: zh
status: machine
fidelity: ok
title: "双货币稳定币套利 · §501 时代下唯一合法的 FX 链上化路径"
translated_at: 2026-06-18T23:59:13.100Z
---

# 双货币稳定币套利 · §501 时代下唯一合法的 FX 链上化路径

## Wiki 路线

本条目归于 [[fintech/INDEX|fintech index]] 之下。请配合 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 阅读以获取邻接语境，并参阅 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 以了解更宏观的系统边界。

> [!info] TL;DR
> GENIUS Act §501  限定了 stablecoin 的发行 / 持有 / 转账的合规边界 · **唯有「双货币 / 多货币 stablecoin 的相互兑换」才是明确合法的链上 FX 路径**。USDC ↔ EURC ↔ JPYC 三角套利结构便是其样本 —— interchange 成本可压缩至 0.01%（传统跨境 FX 1-3% 的 1/100），即便在 $33T 的全球结算轨道上仅捕获 1%，也构成 $3.3B/年的收益机会。

## Key facts

- USDC 流通量 $40-45B · EURC $200-300M · JPYC $50M+（2025.Q4） ^[extracted]
- 三角套利的净成本 ~10-20 bp（0.01-0.02%）· 传统 FX 1-3% all-in ^[extracted]
- 全球跨境结算年度交易量 $33T（BIS 2024） · 捕获 1% = $3.3B/年的机会 ^[extracted]
- 2026.05  三角套利已在 Curve / Uniswap V4 hooks 资金池中实际运行 ^[extracted]

## Mechanism / How it works

**套利路径**：USDC（Circle USD 1:1） ↔ EURC（Circle EUR 1:1） ↔ [[payment-firms/jpyc|JPYC]]（JPYC Inc. JPY 1:1） ↔ 平掉 USDC 头寸。

| 步骤 | 操作 | 成本 |
|---|---|---|
| 1 | USDC → EURC swap（Circle Mint API） | ~0 bp + mint/burn fee |
| 2 | EURC → JPYC（链上 DEX · Curve / Uniswap V4 hooks） | 5-15 bp slippage |
| 3 | JPYC → 平掉 USDC 头寸 | ~0 bp + mint/burn fee |
| 净 | 跨货币三角套利 | ~10-20 bp |

对比：SWIFT + correspondent banking 1-3% all-in · T+1/T+2；Wise / Remitly 0.5-1% · 数小时；双货币 stablecoin 0.01-0.02% · 秒级 finality。**100× 成本削减 + 数百倍的速度**，与 [[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] 走相反的方向（后者把 SC 嵌入 SWIFT，前者则绕开）。

## Origin & evolution

2018-2023 = Circle USDC 独占 · EURC 虽于 2022  上线但流动性低。2024 [[fintech/mica-overview|MiCA]] Title IV(EMT) 启动了欧元 stablecoin 的多发行体结构。2024-2025  日本资金结算法的新框架下，JPYC 成为首个日元 stablecoin。2025.07 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 施行后 = 法律空间明确化：「双货币 swap ≠ FX 业务」 · 这是 2  个独立的 1:1 token 的资产配置。2026  三角套利从理论走向 DEX 实际产品。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|二通貨アービトラージ · §501 リーガル hack]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange モデル]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
<!-- /wiki-links:managed -->

## Sources

- BIS 2024  跨境结算年度交易量报告 · MiCA Title IV · 日本 PSA · GENIUS Act §501（2025.07）
