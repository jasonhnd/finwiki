---
source: fintech/bis-project-agora-overview
source_hash: c346c135ed3b00ec
lang: zh
status: machine
fidelity: ok
title: "BIS Project Agorá 概览"
translated_at: 2026-06-18T23:59:13.052Z
---

# BIS Project Agorá 概览

## Wiki 动线

本项目位于 [[fintech/INDEX|fintech index]] 之下。请与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 一并阅读以了解相邻背景，与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 一并了解更广泛的系统边界。

> [!info] TL;DR
> Agorá（古希腊语意为「广场」）是 BIS 创新枢纽于 2024.04  启动的旗舰项目——7  家 G10  中央银行（美 FRBNY / 英 BoE / 法 BdF / 日 BoJ / 韩 BoK / 墨西哥 Banxico / 瑞士 SNB）+ 40+ 家商业银行，在统一的可编程平台上同时试验 wholesale CBDC + 代币化的商业银行存款，被定位为多边代币化基础设施的 de facto 标准候选。

## Key facts

- 7  家 G10  中央银行：FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ 家商业银行参与者：JPM / Citi / HSBC / [[megabanks/mufg|MUFG]] / SWIFT / Mastercard / Visa 等 ^[extracted]
- 2024.04  启动，于 2024.09  公布民间机构名单 ^[extracted]
- 2025  Phase 1  = 概念验证（跨境 wholesale 结算）^[extracted]
- 2025-2026  Phase 2  = 实时原型（尚未启动运行）^[extracted]
- BIS 创新枢纽由 Cecilia Skingsley 统管，Agorá 由 Hyun Song Shin 团队设计 ^[extracted]
- 测试焦点：PvP（payment-vs-payment）、DvP（delivery-vs-payment）、跨币种原子结算 ^[extracted]

## Mechanism / How it works

Agorá 的架构并非单一区块链，而是由 BIS 提供「协调层规范」。**并行试验二层结构**：中央银行发行 wholesale CBDC（M0  中央银行货币），商业银行发行代币化存款（M1  商业银行货币），二者在同一可编程平台上相互运行。核心测试情景：跨境 wholesale 结算中的 PvP（2  条结算腿的原子交换）/ DvP（结算腿 vs 资产腿的原子交换）/ 跨币种结算（USD ↔ EUR 的直接交换，不经由 SWIFT correspondent banking 中介）。

**并非真正的「全球 CBDC」**：7  家中央银行各自发行 wholesale CBDC，Agorá 提供的是「互操作层规范」，并不强制单一技术栈或单一货币。商业银行在 Agorá 平台上发行代币化存款，实质上意味着将现行的 correspondent banking 改写为可编程版本。

## Origin & evolution

2021 年，[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]（BIS + 中 / 香港 / 泰 / UAE）启动 → 2024.10  BIS 退出 mBridge（技术移交至 PBoC + HKMA）。BIS 退出 mBridge 几乎同时启动 Agorá（2024.04），业界普遍解读为「BIS 在政治上不得不拥有一个西方主导的版本」。于 2024.09  公布 40+ 家商业银行名单，参与深度远超 mBridge。于 2025 年 进入 Phase 1  概念验证。若三圆 MRA（欧 [[fintech/mica-overview|MiCA]] + 美 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]] · 2026-2027  预计上线）成立，Agorá wholesale CBDC 可能成为跨境 stablecoin 赎回的最终结算锚——stablecoin → 商业银行代币化存款 → wholesale CBDC 的三层直通。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## Sources

- https://www.bis.org/about/bisih/topics/cbdc/agora.htm
