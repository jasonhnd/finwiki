---
source: fintech/dual-currency-stablecoin-arbitrage-overview
source_hash: 314411f50642d628
lang: zh
status: machine
fidelity: ok
title: "双货币稳定币套利 · §501  时代唯一合法的链上外汇路径"
translated_at: 2026-05-31T06:16:15.741Z
---

# 双货币稳定币套利 · §501  时代唯一合法的链上外汇路径

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> GENIUS Act §501  限定了稳定币的发行 / 持有 / 转账合规边界 · **"双货币 / 多货币稳定币相互兑换"成为明确合法的唯一链上外汇路径**。USDC ↔ EURC ↔ JPYC 三角套利结构即为典型案例——中间兑换成本可压缩至 0.01%（传统跨境外汇 1-3% 的 1/100），在 $33T 的全球支付规模上捕获 1% 即可产生 $3.3B/年的收益机会。

## Key facts

- USDC 流通量 $40-45B · EURC $200-300M · JPYC $50M+（2025.Q4）^[extracted]
- 三角套利净成本 ~10-20 bp（0.01-0.02%）· 传统外汇 1-3% all-in ^[extracted]
- 全球跨境支付年度规模 $33T（BIS 2024）· 捕获 1% = $3.3B/年的机会 ^[extracted]
- 2026.05  三角套利已在 Curve / Uniswap V4 hooks 池中实际运行 ^[extracted]

## Mechanism / How it works

**套利路径**：USDC（Circle USD 1:1）↔ EURC（Circle EUR 1:1）↔ [[payment-firms/jpyc|JPYC]]（JPYC Inc. JPY 1:1）↔ USDC 平仓。

| 步骤 | 操作 | 成本 |
|---|---|---|
| 1  | USDC → EURC 兑换（Circle Mint API） | ~0 bp + 铸造/销毁费 |
| 2  | EURC → JPYC（链上DEX · Curve / Uniswap V4 hooks） | 5-15 bp 滑点 |
| 3  | JPYC → USDC 平仓 | ~0 bp + 铸造/销毁费 |
| 净 | 跨货币三角套利 | ~10-20 bp |

对比：SWIFT + 代理行 1-3% all-in · T+1/T+2；Wise / Remitly 0.5-1% · 数小时；双货币稳定币 0.01-0.02% · 秒级最终确认。**100× 成本削减 + 数百倍速度提升**，与 [[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] 方向相反（后者将稳定币嵌入SWIFT，前者则绕过SWIFT）。

## Origin & evolution

2018-2023  = Circle USDC 独占 · EURC 于 2022  上线但流动性低。2024  [[fintech/mica-overview|MiCA]] Title IV（EMT）启动欧元稳定币多发行主体结构。2024-2025  日本资金结算法新框架下，JPYC 成为首个日元稳定币。2025.07  [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 施行后 = 法律空间明确化："双货币互换 ≠ 外汇业务"——这是 2  个独立的 1:1  代币资产配置。2026  三角套利从理论走向DEX实际产品。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|二通貨アービトラージ · §501 リーガル hack]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange モデル]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
<!-- /wiki-links:managed -->

## Sources

- BIS 2024  跨境支付年度规模报告 · MiCA Title IV · 日本PSA · GENIUS Act §501（2025.07）
