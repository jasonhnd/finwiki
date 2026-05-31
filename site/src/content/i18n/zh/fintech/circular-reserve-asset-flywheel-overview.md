---
source: fintech/circular-reserve-asset-flywheel-overview
source_hash: 8ecae0bb8fd3b901
lang: zh
status: machine
fidelity: ok
title: "准备金互锁飞轮·BUIDL ↔ USDC 系统性循环依赖"
translated_at: 2026-05-31T06:16:15.693Z
---

# 准备金互锁飞轮·BUIDL ↔ USDC 系统性循环依赖

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BlackRock BUIDL（代币化国债货币市场基金）已成为Circle USDC准备金的核心构成要素。Circle持有BUIDL产生的利息再次流入BUIDL → 推高BUIDL AUM → 进一步使Circle准备金"BUIDL化"。这是**利息→准备金→AUM→利息**的自我反馈型系统性互锁飞轮，自2026 年以来很可能成为稳定币监管在定义"准备金集中风险"时的样本案例。

## 关键事实

- BUIDL于2024.03 启动 · 2025 年期间AUM实现4-5倍增长（估计$2.5-3B）^[extracted]
- Circle是BUIDL初期最大的机构LP之一（Circle 2025.04 官方表明）^[extracted]
- Circle 2024 年利息收入$1.7-1.8B · 其中约$905M分配给Coinbase ^[extracted]

## 机制/运作方式

互锁结构 = 自我反馈循环：

```
[Circle USDC准备金 $40B+] ──持有──> [BlackRock BUIDL]
        │                                          │
        │ 利息（4.5% APY）                         │ AUM增长
        ↓                                          ↑
[Circle净利息收入] ──向Coinbase分配50% + 再投资至BUIDL──┘
```

每当Circle在BUIDL中存入$1  → BlackRock收取0.5%的管理费 → 净4%利息返还给Circle → 将50%分配给Coinbase + 自留50% → 自留部分再次买入BUIDL。只要"自留→再投资"比率 > 0 ，BUIDL在准备金中的占比就**单调上升**，直至外力（监管上限/Circle主动分散化/竞争性货币市场基金夺取份额）介入为止。同样的反身性循环也出现在[[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL × SC issuer マトリクス]]中其他发行方关系（USDB / USDtb / sfrxUSD / OUSG）上。

## 起源与演变

2024.03  BUIDL启动 · Circle早期建仓但规模有限。2024-2025  AUM实现4-5倍增长期间Circle持仓急速扩大 · 2025.04  Circle官方表明。2025.07  [[fintech/genius-act-501-denylist-mandate|GENIUS Act]] §504 要求准备金构成月度披露，但未禁止"通过代币化国债持有" → 飞轮在监管灰色地带内持续运转。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|準備金インターロック · 三層リスクシナリオ]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|Coinbase ↔ Circle 50/50 モデル]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配エコノミクス]]
<!-- /wiki-links:managed -->

## Sources

- Circle 2024 年次报告 + 招股说明书 · BUIDL 2024.03 启动公告
