---
title: 储备金互锁飞轮 · BUIDL ↔ USDC 系统性循环依赖
aliases: [circular reserve asset flywheel overview, BUIDL USDC flywheel, reserve recursion]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, systemic-risk, stablecoin, tokenized-mmf, buidl, usdc]
sources:
  - https://www.blackrock.com/us/individual/products/335977/buidl
  - https://www.circle.com/en/transparency
  - https://securitize.io/products/buidl
  - https://app.rwa.xyz/treasuries
  - https://www.federalreserve.gov/publications/financial-stability-report.htm
status: candidate
---

# 储备金互锁飞轮 · BUIDL ↔ USDC 系统性循环依赖


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BlackRock BUIDL(代币化国债 MMF)已成为 Circle USDC 储备金的核心组成部分。Circle 持有 BUIDL 产生的利息再次流入 BUIDL → 推高 BUIDL AUM → 让 Circle 储备金更"BUIDL 化"。这是一个**利息→储备→AUM→利息**的自反馈系统性互锁飞轮 · 2026 后或成为 stablecoin 监管定义"reserve concentration risk"的样本案例。

## Key facts

- BUIDL 2024.03 上线 · 2025 内 AUM 增长 4-5×(估算 $2.5-3B) ^[extracted]
- Circle 是 BUIDL 早期最大机构 LP 之一(Circle 2025.04 公开承认) ^[extracted]
- USDC 流通量 $40-45B · BUIDL 占储备 2-4%(估算) ^[inferred]
- Circle 2024 年利息收入 $1.7-1.8B · ~$905M 分给 Coinbase ^[extracted]
- 同类飞轮在 JP Morgan Onyx / Mony 内部以"机构内部对账"形式存在 · 未对外披露 ^[inferred]

## Mechanism / How it works

互锁结构 = 自反馈循环:

```
[Circle USDC 储备金 $40B+] ──持有──> [BlackRock BUIDL]
        │                                          │
        │ 利息(4.5% APY)                          │ AUM 增长
        ↓                                          ↑
[Circle 净利息收入] ──分 Coinbase 50% + 再投 BUIDL──┘
```

Circle 每存 $1 在 BUIDL → BlackRock 收 0.5% 管理费 → 净 4% 利息回给 Circle → 50% 分 Coinbase + 50% 自留 → 自留部分继续买 BUIDL。如果"自留→再投"比例 > 0 · BUIDL 占储备的比例会**单调上升**,直到外力打断(监管 cap / Circle 主动多元化 / 竞品 MMF 抢份额)。同样的反身性循环也出现在 [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL × SC issuer 矩阵]] 的其他 issuer 关系(USDB / USDtb / sfrxUSD / OUSG)。

## Origin & evolution

2024.03 BUIDL 上线 · Circle 早期建仓但规模有限。2024-2025 AUM 4-5× 增长期 Circle 持仓快速放大 · 2025.04 Circle 公开承认。2025.07 [[fintech/genius-act-501-denylist-mandate|GENIUS Act]] §504 要求逐月披露储备金构成但未禁止"通过代币化国债持仓" → 飞轮在监管灰区内继续运转。

## Counterpoints

飞轮存在 ≠ 必然失控 —— 关键看 Circle 自留再投比例与监管 cap 时间窗。BUIDL 由 BlackRock 做市 · 二级流动性比一般代币化 MMF 强;若 Circle 主动多元化(USDP / Franklin BENJI / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 等),飞轮速度会自然减缓。也有人主张代币化 MMF 储备金本质上比直接持债更透明 → "concentration risk"叙事被高估。

## Open questions

Circle 自留→再投 BUIDL 的具体比例多少?监管(OCC/FRB)2026 后会否新增"单一代币化 MMF 不得超储备金 X%"?Circle ↔ BlackRock 是否已存在非公开股权关联(放大反身性)?路径 B(Circle 主动多元化储备)的可能性与时间表?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|储备金互锁 · 三层风险情景]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|Coinbase ↔ Circle 50/50 模型]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密文化分离]]
- [[fintech/stablecoin-revenue-split-economics|稳定币收益分成经济学]]
<!-- /wiki-links:managed -->

## Sources

- Circle 2024 年报 + 招股书 · BUIDL 2024.03 上线公告
