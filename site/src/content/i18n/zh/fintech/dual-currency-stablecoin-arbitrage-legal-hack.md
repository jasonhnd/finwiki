---
source: fintech/dual-currency-stablecoin-arbitrage-legal-hack
source_hash: 16a7129370eab4a4
lang: zh
status: machine
fidelity: ok
title: "双币种套利 · §501 合法 hack 与监管脆弱性"
translated_at: 2026-06-18T23:59:13.092Z
---

# 双币种套利 · §501 合法 hack 与监管脆弱性

## Wiki 路径

本项目位于 [[fintech/INDEX|fintech index]] 之下。请与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 对照阅读以了解相邻脉络，并与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 对照以了解更广泛的系统边界。

> [!info] TL;DR
> 双币种稳定币套利的合法性建立在一个合法 hack 之上：**"2 个独立的 payment stablecoin 之间的 atomic swap 不属于 FX 业务"**。这为链上 FX 提供了法律空间。然而该 hack 的脆弱点在于：一旦美国 / EU / 日本中的任一监管当局将"双币种 swap"重新定义为"FX 业务"那一刻 → 整个结构即告失效。需要持续监控 SEC / OCC / FCA / FSA 的告示。

## Key facts

- GENIUS Act §501 并未禁止"持有 ↔ 经由 swap"的跨币种 · 仅禁止发行体从事 FX 业务 ^[extracted]
- MiCA Title IV 已经允许 EUR-stablecoin 的多个发行体 = 等同于鼓励链上 EUR FX 流动性 ^[extracted]
- 日本 PSA 2023 修订将 stablecoin 定义为"电子结算手段" · 并未明示将 swap 归类为 FX ^[extracted]
- SocGen EURCV / Lugh EURL 等欧元 stablecoin 提供了监管的多元化 ^[extracted]

## Mechanism / How it works

**三层论证 · 为何不属于 FX 业务**:

1. **个人 / 企业自主地相互交换 2 个独立的 1:1 stablecoin** = 自主的资产配置 · 无需 FX 牌照
2. **DEX 提供池流动性** = 自动做市 · 并非 OTC FX desk
3. **mint/burn 仅由发行体实施** = 发行体所做的是"赎回" · 而非"兑换"

整个结构在 GENIUS §501 + MiCA Title IV + 日本 PSA 三套框架下同时合法，但 · 一旦其中任一项发生监管重新定义即会崩溃。

**为何 §501 给出了空间**:GENIUS Act §501 的主要约束 = payment stablecoin 必须 1:1 fiat-reserved · 发行体须为 IDI / NCBA / QC NTI · 不可直接从事 FX 业务（以规避与 ECF 1934 监管的冲突）。但**并未明言"2 个独立的 stablecoin 的 swap = FX"** → 法律空白。

**MiCA 的主动鼓励**:Title IV（EMT）允许多个发行体 · 降低对 Circle 的单一依赖 · EU 主动为链上 FX 流动性留出空间（政治意图 = 降低对 USD-stablecoin 的依赖）。

## Origin & evolution

2024 年之前 = 链上 FX 无法实现（USDC 一家独大）。2024 [[fintech/mica-overview|MiCA]] Title IV 施行 + EURC 流通量上升 + SocGen / Lugh 的上市 = 形成了欧元侧的多发行体结构。2025 [[payment-firms/jpyc|JPYC]] 在日本资金结算法的新框架下成为首个日元 stablecoin。2026.05 三角套利在 DEX 上首次实际运行 = 合法 hack 从理论走向产品。

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

- GENIUS Act §501 / MiCA Title IV / 日本 PSA（2023 修订）
- SEC Uniswap Wells Notice（2024）
