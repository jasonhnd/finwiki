---
source: fintech/dual-currency-stablecoin-arbitrage-legal-hack
source_hash: 0e93d4b2307afc3a
lang: zh
status: machine
fidelity: ok
title: "双货币套利 · §501 法律漏洞与监管脆弱性"
translated_at: 2026-05-31T06:16:15.732Z
---

# 双货币套利 · §501 法律漏洞与监管脆弱性

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 双货币稳定币套利的合法性依托于一个法律漏洞：**"2 个独立支付稳定币之间的原子互换不构成外汇业务"**。这为链上外汇提供了法律空间。然而该漏洞的脆弱性在于：一旦美国/欧盟/日本任一监管机构将"双货币互换"重新定义为"外汇业务"，整个结构将立即失效。须持续监控 SEC / OCC / FCA / FSA 的通告。

## Key facts

- GENIUS Act §501 未禁止通过"持有 ↔ 互换路径"进行跨货币操作 · 仅禁止发行方直接从事外汇业务 ^[extracted]
- MiCA 第四章已允许欧元稳定币的多发行方 = 实际上鼓励链上欧元外汇流动性 ^[extracted]
- 日本《资金结算法》2023 修订将稳定币定义为"电子支付手段" · 未明确将互换归类为外汇 ^[extracted]
- 法国兴业银行 EURCV / Lugh EURL 等欧元稳定币提供了监管多元化 ^[extracted]

## Mechanism / How it works

**三层论证 · 为何不构成外汇业务**：

1. **个人/企业自主交换2 个独立的1:1 稳定币** = 自主资产配置 · 无需外汇许可证
2. **去中心化交易所提供流动性池** = 自动做市商 · 非场外外汇交易台
3. **铸造/销毁仅由发行方执行** = 发行方进行的是"赎回" · 而非"兑换"

该整体结构在 GENIUS §501 + MiCA 第四章+日本《资金结算法》三重框架下同时合法，但任一监管机构重新定义均会导致结构崩塌。

**§501 为何留有空间**：GENIUS Act §501 的主要限制 = 支付稳定币须以1:1 法定货币储备支持 · 发行方须为存款类机构(IDI)/非银行联邦特许机构(NCBA)/合格托管非银行信托机构(QC NTI) · 不得直接从事外汇业务（避免与电子货币基金（ECF）1934 监管冲突）。但**未明确声明"2 个独立稳定币的互换=外汇"** → 法律空白。

**MiCA 的主动鼓励**：第四章（电子货币代币）允许多发行方 · 降低对 Circle 单一来源的依赖 · 欧盟主动为链上外汇流动性留有空间（政治意图 = 降低对美元稳定币的依赖）。

## Origin & evolution

2024 年之前 = 链上外汇无法实现（USDC 一家独大）。2024  [[fintech/mica-overview|MiCA]]第四章生效 + EURC 流通量上升 + 法国兴业银行/Lugh 上架 = 欧元侧多发行方结构形成。2025  [[payment-firms/jpyc|JPYC]]在日本《资金结算法》新框架下成为首个日元稳定币。2026.05 三角套利在去中心化交易所上首次实盘运行 = 法律漏洞从理论走向产品。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|二通貨アービトラージ · 概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本ステーブルコイン規制全景]]
- [[fintech/three-circles-stablecoin-mra-framework|三円ステーブルコイン MRA フレームワーク]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## Sources

- GENIUS Act §501  / MiCA Title IV / 日本《资金结算法》（2023 修订）
- SEC Uniswap Wells Notice（2024）
