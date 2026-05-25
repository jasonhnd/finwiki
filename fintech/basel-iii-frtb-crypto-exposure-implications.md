---
title: Basel III FRTB 战略含义 · USDC 隐性资本溢价 + BUIDL 银行通道
aliases: [basel-iii-frtb-implications, BCBS USDC moat, BUIDL bank channel]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, law, regulation, basel, bank, stablecoin, usdc, buidl, capital]
sources:
  - https://www.bis.org/bcbs/publ/d545.htm
  - https://www.bis.org/basel_framework/
  - https://www.circle.com/en/transparency
  - https://securitize.io/products/buidl
  - https://www.federalreserve.gov/supervisionreg/topics/cryptoasset.htm
status: candidate
---

# Basel III FRTB 战略含义 · USDC 隐性资本溢价 + BUIDL 银行通道


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BCBS SCO60 的 Group 1b vs Group 2 资本差异决定**银行选择持有 USDC over USDT 的资本经济学**——USDC PPSI 银行托管成本 ~10% capital backing,USDT 疑问 Group 1b 资格则 ~100%。这是 USDC 估值溢价的 hidden moat,也是 BUIDL 突破 $1B AUM 的银行通道法律基础。BCBS 是三圆 MRA 的国际资本协调机制。

## Key facts

- USDC PPSI 后预期 Group 1b 资格:高(合规设计完美对齐)^[likely]
- USDT 预期 Group 1b 资格:低(reserve composition + transparency 不足)^[likely]
- BUIDL 预期 Group 1a 资格:极高(直接 T-bills tokenization)^[likely]
- cbBTC 预期 Group 2a 资格:BTC 1:1 packaging · 1,250% RW ^[inferred]
- USDC 银行托管成本 ~10% capital backing vs USDT ~100% = 价差 ~10x ^[inferred]
- BUIDL 2024-Q4 突破 $1B AUM · 2026-05 ~$3B AUM ^[extracted]
- §501(d) 入榜 stablecoin 必须满足 Group 1b 标准(隐性条件)^[inferred]

## Mechanism / How it works

**USDC vs USDT 资本逻辑**:银行持有 $1B USDC(Group 1b)需 ~$100M capital backing,持有 $1B USDT(疑问 Group 1b)需 ~$1B capital backing,价差 = 银行选择 USDC over USDT 的资本经济学根本原因。这是 USDC 估值溢价的 hidden moat,也是 Circle / Bridge / Anchorage / Coinbase Custody 等"合规通道"的法律护城河。

**BUIDL 案例**:Group 1a(tokenized T-bills)= 银行可大规模持有 → 触发 BUIDL 突破 $1B AUM(2024-Q4)+ 2026-05 ~$3B AUM 增长。与 banking sector 形成"机构 SC alternative"通道,B2B 大口资金从 USDT/USDC 部分迁移到 BUIDL。机构 SC vs deposit token 的二元辨析见 [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC 与 deposit token 论题]]。

**cbBTC / WBTC**:1,250% RW 限制银行持有,主要使用场景 = DeFi 抵押品(链上),与传统银行 balance sheet 隔离。这解释了为何 cbBTC 主要在 Base 上 DeFi 使用而非银行托管。

## Origin & evolution

2022-12 SCO60 发布后,各大银行 risk 部门 2023 启动 Group 资格预判 → 2024 BlackRock 与 BNY Mellon 合作 BUIDL,押注 Group 1a 资格成立。Circle 2024-Q4 起强化 PPSI 披露,目标 USDC 在 2025-Q3 BCBS implementation 后获 Group 1b。Tether 反应保守,2025 Q4 仍未达 Group 1b 标准。HK FRTB consultation(2026-04)直接 mapping SCO60(详见 [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 储备金概览]]),是亚洲第一个对 SC issuer 国际资本框架的 implementation。

## Counterpoints

- 美国 final rule 软化可能稀释 USDC moat(BTC ETF 部分豁免 → 银行参与门槛降低)
- BCBS implementation 各国差异 · 跨境监管套利仍存
- Group 1b 标准随时可调整 · USDT 可能通过披露改善逆转

## Open questions

- BCBS 是否会针对 RWA token(BUIDL / OUSG)出台细化 Group 1a 子分类?
- §501(d) 入榜 stablecoin 是否会明文要求 Group 1b 资格(目前隐性)?
- BIS Project Agorá 央行 wCBDC 是否会自动 Group 1 = 100% bankable 设计?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概览]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 储备金概览]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC 与 deposit token]]
<!-- /wiki-links:managed -->

## Sources

