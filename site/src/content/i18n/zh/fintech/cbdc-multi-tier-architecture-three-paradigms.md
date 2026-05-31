---
source: fintech/cbdc-multi-tier-architecture-three-paradigms
source_hash: 260dd492e8809cb7
lang: zh
status: machine
fidelity: ok
title: "CBDC 3  大现役范式"
translated_at: 2026-05-31T06:16:15.740Z
---

# CBDC 3  大现役范式

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 3  个CBDC项目各自代表 3  种架构范式：中国e-CNY = 二层架构的典型（中央银行 → 6  家商业银行 → 用户）；巴西DREX = 基于代币的多层架构（BCB → 商业银行代币化存款 → 用户 · Hyperledger Besu）；数字欧元 = 混合架构（ECB → 支付服务提供商 → 用户 · €3000-4000  持有上限）。3  者展示了中央银行如何在保护金融中介与引入可编程性之间进行权衡取舍。

## Key facts

- e-CNY 2014  开始研究，2020.04  试点运行；2025  累计交易额超 ¥7 兆 元 ^[extracted]
- e-CNY 运营机构：工 / 农 / 中 / 建 / 交 + 6  家商业银行 ^[extracted]
- e-CNY 跨境通过 mBridge 与香港 / 泰国 / UAE 互联 ^[extracted]
- DREX 技术栈：Hyperledger Besu（EVM兼容）+ 智能合约可编程性 ^[extracted]
- DREX 2024-2025  试点运行，14  家机构联盟参与 ^[extracted]
- 数字欧元于 2025 年 立法启动，持有上限 €3000-4000  ^[extracted]
- 数字欧元线下交易具备现金型隐私保护，线上为账户型 ^[extracted]

## Mechanism / How it works

**中国e-CNY · 二层架构典型**：
- 中央银行（PBoC）→ 运营机构（6  家商业银行）→ 用户钱包
- 账户型与价值代币型混合，可控匿名性（小额匿名，大额可追溯）
- 完整保留商业银行中介，不动摇 4  大行体系
- 跨境通过 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 与港元 / 泰铢 / 迪拉姆互联

**巴西DREX · 基于代币的多层架构**：
- BCB（巴西中央银行）→ 商业银行（发行代币化存款）→ 用户
- Hyperledger Besu（EVM兼容）+ 智能合约
- DREX 并非直接面向零售的CBDC，而是批发CBDC + 代币化存款的二层架构
- 核心判断：**通过代币化存款使商业银行成为创新的主体**

**数字欧元 · 混合架构**：
- ECB → 受监管的支付服务提供商（PSP）→ 用户
- 技术方案尚未最终确定，于 2025 年 立法启动
- 线下交易具备现金型隐私保护，线上为账户型
- 持有上限 €3000-4000  → **明确保护商业银行存款基础**，规避脱媒风险

## Origin & evolution

2014  中国PBoC启动e-CNY → 全球历史最悠久的CBDC研究项目。2020.04  e-CNY首批 4  个城市试点，2022.04  扩展至 23  个城市。2023  巴西DREX（前身为Real Digital）启动 → 选择Hyperledger Besu是基于"链原生 + EVM生态"视角的重要决策。2023  ECB完成数字欧元调研阶段，2024  进入准备阶段，2025.06  立法启动 → 持有上限是设计讨论中的政治焦点。3  个项目分别体现中国（国家主导）、新兴市场（赋能银行）、欧元区（审慎保护中介）这 3  条政治路径。日本DC-JPY详见 [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
<!-- /wiki-links:managed -->

## Sources
