---
source: fintech/circular-reserve-asset-flywheel-risk-cases
source_hash: 0d230f0949f01af8
lang: zh
status: machine
fidelity: ok
title: "储备金互锁・飞轮 · 三层系统性风险・情景"
translated_at: 2026-05-31T05:31:05.761Z
---

# 储备金互锁・飞轮 · 三层系统性风险・情景

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BUIDL ↔ USDC 互锁・飞轮的风险不在于资产质量(国债是 risk-free),而在于三层结构性问题:**赎回时的二级市场流动性 vs 储备金账面价值** · **监管尚未定义"代币化 MMF 集中度"框架** · **利息流的反身性持续推高集中度**。2023.03 SVB 事件中,USDC 因将储备金 8.25% 集中于 SVB 而一度脱锚 · BUIDL 路径的风险机制同源。

## Key facts

- 2023.03 USDC 因将储备金 8.25% 集中于 SVB 一家而一度脱锚 ^[extracted]
- GENIUS Act §504 要求储备金构成的月度披露,但不禁止"经由代币化国债的持有" ^[extracted]
- SEC Rule 2a-7 禁止传统 MMF 的相互持有超过 5%,但不适用于代币化 MMF ^[extracted]

## Mechanism / How it works

**风险 1 · 流动性挤兑情景**:USDC 大规模赎回 → Circle 被迫抛售 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] → 冲击 BUIDL 二级流动性 → BUIDL NAV 一度偏离 → 其他持有者(交易所 / 机构)恐慌 → BUIDL AUM 减少 → 反过来恶化 Circle 储备金信任问题。与 SVB 危机同一机制 —— 集中度问题不在资产质量,而在赎回时的二级流动性。

**风险 2 · 监管"reserve concentration"的再定义**:GENIUS §504 未禁止对代币化 MMF 的集中持有 · OCC / FRB 可能在 2026 年以后新设:单一代币化 MMF 不得持有储备金超 X% / 提供方与发行方不得有资本关系 / 系统性互锁结构须构建独立的风险管理隔离。BUIDL ↔ USDC 是当前最大规模且最透明的互锁案例 · 极有可能成为监管样本 —— 这与 [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB ステーブルコイン準備金資本フレームワーク]] 跨境侧的反身动作相互呼应。

**风险 3 · 利息流的反身性**:50% 自有持有利息持续再投资于 BUIDL · 比率单调上升 · 直至外力介入(参见 [[fintech/issuer-distributor-incentive-realignment-50-50-model|50/50 分配モデル]] 的利息流方向)。

## Origin & evolution

2008 GSE 系统性风险(Fannie Mae / Freddie Mac 的互锁招致救助)提供了历史先例。SEC Rule 2a-7 自 2008 年以后强化 MMF 相互持有限制(< 5%)。代币化 MMF 时代的 stablecoin 储备金尚不存在对应的监管框架 —— **BUIDL ↔ USDC 是创造该框架的首个数据点**。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金インターロック・フライホイール · 概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist 強制令]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配エコノミクス]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 · ARM アナロジー]]
<!-- /wiki-links:managed -->

## Sources

- SEC Rule 2a-7 · 巴塞尔 III · GENIUS Act §504(2025.07)
- 2023.03 USDC 脱锚事件回顾
