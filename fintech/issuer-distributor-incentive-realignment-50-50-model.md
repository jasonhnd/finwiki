---
title: 发行方 vs 分销方 50/50 模型 · Coinbase ↔ Circle 利息分成机制
aliases: [issuer distributor incentive realignment 50 50 model, Coinbase Circle 50-50, USDC revenue split]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, coinbase, circle, usdc, revenue-split, distribution-economics, genius-501]
sources: []
status: candidate
---

# 发行方 vs 分销方 50/50 模型 · Coinbase ↔ Circle 利息分成机制

> [!info] TL;DR
> Coinbase 和 Circle 的 USDC 利息 50/50 分成模型(2018 Centre 联合发行协议 → 2023 Circle 独立后延续)是 stablecoin 行业**最大的发行方-分销方利益绑定结构**。Q1 2025 Coinbase 稳定币收入 $305M ≈ 公司总收入 12-15% · 但 GENIUS Act §501 时代议价能力根本变化 · 50/50 必然进入重新议价窗口。

## Key facts

- USDC 流通量 $40-45B(2024-2025) ^[extracted]
- Circle 年利息收入 $1.7-1.8B(国债 4.5% yield) ^[extracted]
- 其中分给 Coinbase ~$905M(2024 全年) ^[extracted]
- Coinbase 稳定币收入 Q1 2025 = $305M(年化 $1.2B) ^[extracted]
- 50/50 分成法律基础 = 2018 Centre Consortium 联合发行协议 · 2023 Centre 解散后延续 ^[extracted]

## Mechanism / How it works

**50/50 历史合理性**:Coinbase 早期是 USDC 主要分销渠道(brand + 用户基础 + 交易所流动性);Circle 提供发行 + 储备金管理。Centre Consortium 2018 联合发行模型把双方深度绑定。2023 Centre 解散后 · Circle 拿回单一发行权 · 但 50/50 收益分成条款延续。

**收入流向**:USDC 储备金 $40B+ 持短期国债 → 年化 4.5% yield = $1.8B → 扣减发行成本 → 净 $1.7-1.8B → Coinbase 50% ($905M) + Circle 50% ($895M)。

**§501 前 vs §501 后 议价变化**:

| 维度 | §501 前(2024) | §501 后(2025.07+) |
|---|---|---|
| 发行方核心成本 | 监管不确定 + 储备金 + 上市渠道 | 储备金 + Arc 自有 L1 |
| 分销方核心价值 | 用户基础 + 流动性 + 合规背书 | 用户基础 + 流动性(合规已标准化) |
| 发行方 fallback | 必须找头部交易所 | 可建自有 L1(Arc · 自销自循环) |
| 分销方 fallback | 仅 USDC(no alternative) | 可推自有 stablecoin(Base USDB-like) |

**结果**:50/50 模型的"分销方溢价"在 §501 后必须重新议价。

## Origin & evolution

2018 = Centre Consortium 成立 · Coinbase + Circle 联合发行 USDC · 50/50 是初始条款。2020-2023 = DeFi 夏季 + 上市潮 · USDC 成 DeFi 默认稳定币 · 50/50 高度对称(分销方价值真实存在)。2023.08 = Centre 解散 · Circle 独立发行 · 但 50/50 条款延续(招股书披露)。2025.07 = GENIUS Act §501 生效 · 合规已成标配 · 分销方溢价被稀释。2025.09 = Arc 公布 = Circle 重新议价的杠杆。

## Counterpoints

主张"50/50 不会破裂":Coinbase Q1 2025 $305M = 公司收入 12-15% · 双方都不愿破裂 · 维持比破裂更优。Circle 已上市需对股东负责 · 主动让 Coinbase = 内部治理问题。Arc 即使成功侵蚀 USDC on Base · 也是 5-10 年慢节奏 · 50/50 模型可以同步缓慢调整(40/60 / 30/70)而不需断点重设。

## Open questions

Coinbase Q2-Q4 2025 / Q1 2026 财报稳定币收入趋势线?Circle 招股书未列明 50/50 终止条件 · 实际终止机制是什么(双方协商 / 仲裁)?Arc TVL 到什么阈值会强制重新议价?Tempo / Codex / Plasma 是否会利用 Coinbase-Circle 冷战窗口抢分销?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc 战略 · 收回 50%]]
- [[fintech/stablecoin-revenue-split-economics|稳定币收益分成经济学]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币公链 Token 策略三态]]
- [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮 · 概览]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
<!-- /wiki-links:managed -->

## Sources

- Circle 招股书(2024)· Coinbase Q1 2025 财报 · Centre Consortium 2018 联合发行协议
