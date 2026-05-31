---
source: fintech/bis-project-agora-overview
source_hash: e031c34ab57a839c
lang: zh
status: machine
fidelity: ok
title: "BIS Project Agorá 概述"
translated_at: 2026-05-31T06:16:15.723Z
---

# BIS Project Agorá 概述

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Agorá（古希腊语意为"广场"）是 BIS 创新中心于 2024.04  发起的旗舰项目 —— 7  家 G10  中央银行（美联储纽约联储 / 英格兰银行 / 法兰西银行 / 日本银行 / 韩国银行 / 墨西哥央行 Banxico / 瑞士国家银行 SNB）+ 40+ 家商业银行，在统一的可编程平台上同时试验批发 CBDC + 代币化商业银行存款，被定位为多边代币化基础设施的事实标准候选。

## Key facts

- 7  家 G10  中央银行：FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ 家商业银行参与方：JPM / Citi / HSBC / [[JapanFG/mufg|MUFG]] / SWIFT / Mastercard / Visa 等 ^[extracted]
- 2024.04  启动，2024.09  公布民营机构名单 ^[extracted]
- 2025  第 1  阶段 = 概念验证（跨境批发结算） ^[extracted]
- 2025-2026  第 2  阶段 = 实时原型（尚未开始运行） ^[extracted]
- BIS 创新中心由 Cecilia Skingsley 统筹，Agorá 由 Hyun Song Shin 团队设计 ^[extracted]
- 测试重点：PvP（payment-vs-payment）、DvP（delivery-vs-payment）、跨货币原子结算 ^[extracted]

## Mechanism / How it works

Agorá 的架构并非单一区块链，而是由 BIS 提供"协调层规范"。**双层结构并行试验**：中央银行发行批发 CBDC（M0 中央银行货币），商业银行发行代币化存款（M1 商业银行货币），两者在同一可编程平台上互操作。核心测试场景：跨境批发结算中的 PvP（2  个结算腿的原子交换）/ DvP（结算腿 vs 资产腿的原子交换）/ 跨货币结算（USD ↔ EUR 直接交换，不经由 SWIFT 代理行中介）。

**并非真正的"全球 CBDC"**：7  家中央银行各自发行批发 CBDC，Agorá 提供的是"互操作层规范"，并不强制要求单一技术栈或单一货币。商业银行在 Agorá 平台上发行代币化存款，本质上是将现行代理行模式重写为可编程版本。

## Origin & evolution

2021 年 启动 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]（BIS + 中国 / 香港 / 泰国 / 阿联酋）→ 2024.10  BIS 退出 mBridge 治理（技术移交给中国人民银行 + 香港金管局）。BIS 退出 mBridge 的同时发起 Agorá（2024.04），业界普遍解读为"BIS 在政治上不得不持有一个西方主导的版本"。2024.09  公布 40+ 家商业银行名单，参与深度远超 mBridge。2025 年 进入第 1  阶段概念验证。若三圆 MRA（欧元区 [[fintech/mica-overview|MiCA]] + 美国 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 香港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]]，2026-2027  计划启动）落地，Agorá 批发 CBDC 有望成为跨境稳定币赎回的最终结算锚——稳定币 → 商业银行代币化存款 → 批发 CBDC 三层直通。

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
