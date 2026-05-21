---
title: 双币稳定币套利 · §501 时代唯一合法 FX 链上化路径
aliases: [dual currency stablecoin arbitrage overview, USDC EURC JPYC FX, on-chain fx triangular]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, fx, stablecoin, usdc, eurc, jpyc, cross-border, interchange]
sources: []
status: candidate
---

# 双币稳定币套利 · §501 时代唯一合法 FX 链上化路径


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> GENIUS Act §501 限定 stablecoin 发行 / 持有 / 转账的合规边界 · **只有"双币 / 多币 stablecoin 互转"是清晰合法的链上 FX 路径**。USDC ↔ EURC ↔ JPYC 三角套利结构是样本 —— interchange 成本可压到 0.01%(传统跨境 FX 1-3% 的 100×),在 $33T 全球支付轨道上即使捕获 1% 也是 $3.3B 年化收入机会。

## Key facts

- USDC 流通量 $40-45B · EURC $200-300M · JPYC $50M+(2025.Q4) ^[extracted]
- 三角套利净成本 ~10-20 bp(0.01-0.02%)· 传统 FX 1-3% all-in ^[extracted]
- 全球跨境支付年量 $33T(BIS 2024) · 1% 捕获 = $3.3B 年化机会 ^[extracted]
- 2026.05 三角套利已在 Curve / Uniswap V4 hooks 池中实际跑通 ^[extracted]
- Visa / Mastercard 2024-2025 内部讨论双币 stablecoin settlement(未公布产品) ^[inferred]

## Mechanism / How it works

**套利路径**:USDC (Circle USD 1:1) ↔ EURC (Circle EUR 1:1) ↔ JPYC (JPYC Inc. JPY 1:1) ↔ USDC 平仓。

| 步骤 | 操作 | 成本 |
|---|---|---|
| 1 | USDC → EURC swap(Circle Mint API) | ~0 bp + mint/burn fee |
| 2 | EURC → JPYC(链上 DEX · Curve / Uniswap V4 hooks) | 5-15 bp slippage |
| 3 | JPYC → USDC 平仓 | ~0 bp + mint/burn fee |
| 净 | 跨货币三角套利 | ~10-20 bp |

对比:SWIFT + correspondent banking 1-3% all-in · T+1/T+2;Wise / Remitly 0.5-1% · 数小时;双币 stablecoin 0.01-0.02% · 秒级 finality。**100× cost reduction + 数百倍速度**。

## Origin & evolution

2018-2023 = Circle USDC 独霸 · EURC 2022 上线但流动性低。2024 MiCA Title IV(EMT)激活欧元 stablecoin 多发行方。2024-2025 日本资金決済法新框架 JPYC 首批日元 stablecoin。2025.07 GENIUS Act §501 生效后 = 法律空间清晰:"双币 swap ≠ FX 业务" · 是两个独立 1:1 token 的资产配置。2026 三角套利从理论变为 DEX 实际产品。

## Counterpoints

EURC / JPYC 二级流动性远小于 USDC · 大额 swap slippage 远高于 0.01%。三种 stablecoin 储备金都集中在国债 → 系统性同步风险。Bridge 风险(JPYC 跨链多走 Wormhole · 历史 $325M 漏洞)。最重要 —— **任何一国把"双币 swap"重新定义为"FX 业务"**这个 hack 即破 · SEC / OCC / FCA / FSA 任一发声都可能颠覆。

## Open questions

实际套利容量(不滑点的最大单笔规模)?机构 b2b 实际接入比例?Visa / Mastercard 双币 settlement layer 产品发布时间表?中国 / 印度 / 巴西能否复制(本币 stablecoin 监管空缺)?如何 hedge "FX 业务重定义"政治风险?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|双币套利 · §501 法律 hack]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange 模型]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|稳定币跨境 B2B 增长]]
<!-- /wiki-links:managed -->

## Sources

- BIS 2024 跨境支付年量报告 · MiCA Title IV · Japan PSA · GENIUS Act §501(2025.07)
