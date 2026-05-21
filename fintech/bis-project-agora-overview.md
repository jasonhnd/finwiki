---
title: BIS Project Agorá 概览 · 7 G10 央行 + 40 商行联合代币化实验
aliases: [bis-project-agora-overview, Project Agora, Agorá 概览]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, bis, cbdc, tokenization, cross-border, wholesale, g10]
sources: []
status: candidate
---

# BIS Project Agorá 概览


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Agorá(古希腊语"广场")是 BIS Innovation Hub 2024.04 启动的旗舰项目 —— 7 家 G10 央行(美 FRBNY / 英 BoE / 法 BdF / 日 BoJ / 韩 BoK / 墨 Banxico / 瑞 SNB)+ 40+ 商业银行在统一可编程平台上同时实验 wholesale CBDC + 代币化商业银行存款,定位为多边主义代币化基础设施的事实标准候选。

## Key facts

- 7 G10 央行:FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ 商业银行参与方:JPM / Citi / HSBC / SWIFT / Mastercard / Visa 等 ^[extracted]
- 2024.04 启动,2024.09 公布私营机构名单 ^[extracted]
- 2025 Phase 1 = 概念验证(跨境 wholesale 结算) ^[extracted]
- 2025-2026 Phase 2 = 实盘原型(尚未上线) ^[extracted]
- BIS Innovation Hub 由 Cecilia Skingsley 领导,Agorá 由 Hyun Song Shin 团队设计 ^[extracted]
- 测试重点:PvP(payment-vs-payment)、DvP(delivery-vs-payment)、跨币种原子结算 ^[extracted]

## Mechanism / How it works

Agorá 架构非单一区块链,BIS 提供"协调层规范"。**双层结构同时实验**:央行发 wholesale CBDC(M0 央行钱),商业银行发代币化存款(M1 商行钱),两者在同一可编程平台上互操作。核心测试场景:跨境 wholesale 结算的 PvP(两个支付腿原子互换) / DvP(支付腿 vs 资产腿原子互换) / 跨币种结算(USD ↔ EUR 直接换,无需通过 SWIFT correspondent banking 中介)。

**非真"全球 CBDC"**:7 央行各自发 wholesale CBDC,Agorá 提供的是"互操作层规范",不强制单一技术栈或单一货币。商业银行在 Agorá 平台上发代币化存款,实质是把现行 correspondent banking 重写成可编程版。

## Origin & evolution

2021 mBridge(BIS + 中 / 港 / 泰 / UAE)启动 → 2024.10 BIS 退出 mBridge(技术移交 PBoC + HKMA)。BIS 退出 mBridge 几乎同步启动 Agorá(2024.04),业界普遍解读为"BIS 在政治上必须有西方主导版本"。2024.09 公布 40+ 商业银行名单,深度参与度远超 mBridge。2025 进入 Phase 1 概念验证。三圆 MRA(欧 MiCA + 美 GENIUS + 港 HKMA · 预期 2026-2027 落地)如果成立,Agorá wholesale CBDC 可成为跨境稳定币赎回的最终结算锚 —— 稳定币 → 商业银行代币化存款 → wholesale CBDC 三层穿透。

## Counterpoints

- Phase 2 实盘原型 2026.05 仍未上线 —— "旗舰"叙事可能 over-promise
- 7 G10 央行协调成本极高,实际推进速度可能远慢于 mBridge 单一管辖区
- FRBNY 参与是政治信号但实际美元监管(OCC / Fed Board)尚未深度承诺
- "Agorá vs mBridge"二元对立可能过于简化 —— 两个项目实际可能融合或互联

## Open questions

- Phase 2 何时上线?延期是技术问题还是政治问题?
- Agorá 平台技术栈最终会用现有 DLT(Corda / Quorum / Besu)还是 BIS 自研?
- 中国 PBoC / 印度 RBI 在 Agorá 项下是否有任何观察者地位?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 战略对照]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

## Sources

- https://www.bis.org/about/bisih/topics/cbdc/agora.htm
