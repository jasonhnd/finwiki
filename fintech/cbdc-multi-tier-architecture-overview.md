---
title: CBDC 多层架构概览 · 双层 / 直接 / token-based 三范式
aliases: [cbdc-multi-tier-architecture-overview, CBDC tiered architecture overview, 多层 CBDC 概览]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, cbdc, e-cny, drex, digital-euro, monetary-architecture]
sources: []
status: candidate
---

# CBDC 多层架构概览


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> CBDC(央行数字货币)按发行架构分三范式:**双层架构**(央行 → 商行 → 用户 · 如中国 e-CNY)、**直接 CBDC**(央行直接对用户 · 仅理论)、**token-based 多层架构**(央行 + 商行代币化存款分层 · 如巴西 DREX / 欧元数字)。架构选择反映央行对金融中介存续 / 货币主权 / 隐私 / 跨境互操作的根本判断。

## Key facts

- 2025 末全球 130+ 央行研究 CBDC,30+ 进入 Pilot 阶段 ^[extracted]
- 仅 4 国正式发行零售 CBDC(中 / 巴 / 尼 / 牙买加) ^[extracted]
- 所有 G10 央行均选择**双层或多层架构**,无一选择直接 CBDC ^[extracted]
- 巴西 DREX 是 token-based 多层范式的最完整商业实验 ^[extracted]
- 中国 e-CNY 是双层架构规模最大实证案例(2025 累计 ¥7 万亿+) ^[extracted]
- 欧元数字持有上限 €3000-4000(避免银行存款流失) ^[extracted]

## Mechanism / How it works

三种架构核心差异在**账户层级**:

| 维度 | 双层 | 直接 | token-based 多层 |
|---|---|---|---|
| 央行账户数 | 少(对商行) | 多(全民) | 中(对商行 + 代币池) |
| 商业银行作用 | 完整(KYC + 分发) | 边缘化或消失 | 演化为代币化存款发行方 |
| 隐私 | 商行可见,央行受限 | 央行全可见 | 通过加密层可调 |
| 技术 | 账户为主 | 账户或代币 | 代币 + 智能合约 |
| 跨境 | 弱 | 极弱 | 强(与 wholesale CBDC 互操作) |

**架构选择的政治含义**:直接 CBDC 让商业银行边缘化 → 金融中介崩塌 → 央行承担信贷分配 → 政治上不可接受。**所有主要央行都选择保护银行存款基础**(双层或多层)。token-based 多层是新兴中间路径,通过让商业银行发行代币化存款,既保留中介又引入可编程性。

## Origin & evolution

2014 中国 PBoC 启动 e-CNY 研究(全球最早大规模 CBDC 项目)。2017-2019 BIS / IMF 等多边组织提出 "央行数字货币" 概念框架。2020 ECB 发数字欧元报告,确立"双层 / 直接"二分法。2022.04 中国 e-CNY 试点扩至 23 城,双层架构规模化验证。2023-2024 巴西 DREX(基于 Hyperledger Besu)+ 欧元数字立法启动 → token-based 多层范式成熟。2025-2026 G10 央行通过 Agorá 协调 wholesale CBDC,零售 CBDC 各国独立推进 → "架构选择决定主权空间"成为央行间共识。

## Counterpoints

- "所有 G10 都选双层 / 多层"是 2026 快照 —— 数字欧元等仍可能转向更接近直接 CBDC 的模型
- 中国 e-CNY 用户活跃度数据混乱(¥7 万亿是累计交易额,实际活跃 wallet 数远低于宣传)
- 巴西 DREX 试点局限,商业化时间表反复延期
- 直接 CBDC 在小国(如尼日利亚 eNaira)实际已尝试,失败率高但不代表理论上完全不可行

## Open questions

- 美国会否最终选择 wholesale CBDC + 私营稳定币组合(实质替代零售 CBDC)?
- token-based 多层架构在监管复杂度上的实际成本如何?
- 中国 e-CNY 双层架构是否会演化加入 token-based 多层元素?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|三大现役范式 · e-CNY / DREX / 数字欧元]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|架构选择 4 核心权衡]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

## Sources

