---
source: fintech/cbdc-multi-tier-architecture-overview
source_hash: 3a6a0b57603d5355
lang: zh
status: machine
fidelity: ok
title: "CBDC 多层架构概述"
translated_at: 2026-05-31T06:16:15.732Z
---

# CBDC 多层架构概述

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> CBDC（中央银行数字货币）按发行架构可分为3 种范式：**二层架构**（央行→商业银行→用户·中国数字人民币等）、**直接 CBDC**（央行直接面向用户·仅存在于理论层面）、**基于代币的多层架构**（央行+商业银行代币化存款分层·巴西 DREX/数字欧元等）。架构选择反映了央行在金融中介存续/货币主权/隐私/跨境互操作性方面的根本判断。

## Key facts

- 2025 年末全球130+央行研究 CBDC，30+进入试点阶段 ^[extracted]
- 已正式发行零售 CBDC 的仅有4 个国家（中国/巴西/尼日利亚/牙买加） ^[extracted]
- 所有 G10 央行均选择**二层或多层架构**，无一采用直接 CBDC ^[extracted]
- 巴西 DREX 是基于代币的多层范式中完成度最高的商业实验 ^[extracted]
- 中国数字人民币是二层架构最大规模的实证案例（2025 年累计超¥7 兆元） ^[extracted]
- 数字欧元持有上限 €3000-4000（避免银行存款外流） ^[extracted]

## Mechanism / How it works

3 种架构的核心差异在于**账户层级**：

| 维度 | 二层 | 直接 | 基于代币的多层 |
|---|---|---|---|
| 央行账户数量 | 少（面向商业银行） | 多（面向全体国民） | 中（面向商业银行+代币池） |
| 商业银行角色 | 完整（KYC+分发） | 边缘化或消失 | 演化为代币化存款发行方 |
| 隐私性 | 商业银行可见，央行受限 | 央行完全可见 | 可通过密码层调节 |
| 技术 | 账户中心 | 账户或代币 | 代币+智能合约 |
| 跨境 | 弱 | 极弱 | 强（与批发 CBDC 互操作） |

**架构选择的政治含义**：直接 CBDC 使商业银行边缘化 → 金融中介崩溃 → 央行承担信贷配置职能 → 政治上不可接受。**主要央行均选择保护银行存款基础**（二层或多层）。基于代币的多层是新兴的中间路线，通过让商业银行发行代币化存款来维持中介功能，同时引入可编程性——与[[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token のテーゼ]]的逻辑同构。

## Origin & evolution

2014 ：中国人民银行开始研究数字人民币（全球最早的大规模 CBDC 项目）。2017-2019 ：国际清算银行/国际货币基金组织等多边机构提出"央行数字货币"概念框架。2020 ：欧洲央行发布数字欧元报告，确立"二层/直接"二分框架。2022.04 ：数字人民币试点扩大至23 个城市，二层架构在大规模场景中得到验证。2023-2024 ：巴西 DREX（基于 Hyperledger Besu）+数字欧元立法启动 → 基于代币的多层范式走向成熟。2025-2026 ：G10 央行通过[[fintech/bis-project-agora-overview|Agorá]]协调批发 CBDC，零售 CBDC 各国独立推进 → "架构选择决定主权空间"成为央行间共识。日本方面的 DC-JPY 试验运行参见 [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム · e-CNY / DREX / デジタル・ユーロ]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## Sources
