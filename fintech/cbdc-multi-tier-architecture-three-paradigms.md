---
title: CBDC 三大现役范式 · e-CNY / DREX / 数字欧元
aliases: [cbdc-multi-tier-architecture-three-paradigms, ecny drex digital-euro comparison, CBDC 现役范式对比]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, cbdc, e-cny, drex, digital-euro, paradigm, case-study]
sources: []
status: candidate
---

# CBDC 三大现役范式

> [!info] TL;DR
> 三个 CBDC 项目分别代表三种架构范式:中国 e-CNY = 双层架构典范(央行 → 6 商行 → 用户)、巴西 DREX = token-based 多层(BCB → 商行代币化存款 → 用户 · Hyperledger Besu)、欧元数字 = 混合架构(ECB → PSP → 用户 · €3000-4000 持有上限)。三者展示央行如何在保护金融中介 vs 引入可编程性间权衡。

## Key facts

- e-CNY 2014 启动研究,2020.04 试点;2025 累计交易额 ¥7 万亿+ ^[extracted]
- e-CNY 运营机构:工 / 农 / 中 / 建 / 交 + 6 商行 ^[extracted]
- e-CNY 跨境通过 mBridge 与港 / 泰 / UAE 互联 ^[extracted]
- DREX 技术栈:Hyperledger Besu(EVM 兼容)+ 智能合约可编程 ^[extracted]
- DREX 2024-2025 试点,14 个机构联盟参与 ^[extracted]
- 数字欧元 2025 已立法启动,持有上限 €3000-4000 ^[extracted]
- 数字欧元离线交易类现金式隐私,在线类账户式 ^[extracted]

## Mechanism / How it works

**中国 e-CNY · 双层架构典范**:
- 央行(PBoC)→ 运营机构(6 商行)→ 用户钱包
- 账户 + 价值代币混合,可控匿名(小额匿名,大额可追溯)
- 完整保留商业银行中介,不动摇 4 大行体系
- 跨境通过 mBridge,与港币 / 泰铢 / 迪拉姆互联

**巴西 DREX · token-based 多层**:
- BCB(巴西央行)→ 商业银行(发代币化存款)→ 用户
- Hyperledger Besu(EVM 兼容)+ 智能合约
- DREX 不是直接零售 CBDC,而是 wholesale CBDC + 代币化存款双层
- 关键判断:**通过代币化存款,让商业银行成为创新承接方**

**欧元数字 · 混合架构**:
- ECB → 监管支付服务商(PSP)→ 用户
- 技术尚未最终定型,2025 立法启动
- 离线交易类现金式隐私,在线类账户式
- 持有上限 €3000-4000 → 明确**保护商业银行存款基础**,设上限避免脱媒

## Origin & evolution

2014 中国 PBoC 启动 e-CNY → 全球最早 CBDC 研究项目。2020.04 e-CNY 首批 4 城试点,2022.04 扩至 23 城。2023 巴西 DREX(原 Real Digital)启动 → 选 Hyperledger Besu 是从"链原生 + EVM 生态"角度的关键决定。2023 ECB 完成数字欧元 Investigation Phase,2024 Preparation Phase,2025.06 立法启动 → 持有上限是设计协商的政治焦点。三个项目分别代表中国(国家主导)、新兴市场(银行赋能)、欧元区(谨慎保护中介)三种政治路径。

## Counterpoints

- e-CNY 用户活跃度数据混乱,¥7 万亿累计 ≠ 大规模日活
- DREX 试点 14 机构联盟规模有限,商业化时间表反复延期
- 数字欧元持有上限 €3000-4000 是政治妥协产物,可能在使用中调整
- 三项目的"成功标准"未明确公开 → 难以定量评估

## Open questions

- e-CNY 是否会演化加入 token-based 多层元素(智能合约)?
- DREX 商业化失败的话(若 2027 仍未规模化),token-based 多层范式是否会被放弃?
- 数字欧元真正发币时间表(2027?2028?)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|架构选择 4 核心权衡]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 战略对照]]
<!-- /wiki-links:managed -->

## Sources

