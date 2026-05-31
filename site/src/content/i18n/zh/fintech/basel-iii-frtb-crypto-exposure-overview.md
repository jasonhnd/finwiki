---
source: fintech/basel-iii-frtb-crypto-exposure-overview
source_hash: 3de99393729c2f2a
lang: zh
status: machine
fidelity: ok
title: "巴塞尔协议 III FRTB 加密资产敞口 · BCBS SCO60 1,250% 风险权重概述"
translated_at: 2026-05-31T06:16:15.701Z
---

# 巴塞尔协议 III FRTB 加密资产敞口 · BCBS SCO60 1,250% 风险权重概述

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BCBS（巴塞尔银行监督委员会）于 2022-12  发布"加密资产敞口审慎处理"标准（SCO60），将加密资产分为 2  类：**第 1 组**（合规代币化资产或满足条件的稳定币）适用现行风险权重 5-100%；**第 2 组**（包括 BTC/ETH 在内的其他加密资产）适用 **1,250% 风险权重 + 1% 敞口上限**。各国实施目标日期定为 2025-01-01。

## 关键事实

- BCBS SCO60  发布：2022-12-16 ^[extracted]
- 全球实施目标日期：2025-01-01 ^[extracted]
- 第 2  组敞口上限：第 1  级资本的 1% ^[extracted]
- 超过上限时的处理：超限部分按 1,250% × 2  = 实效 2,500% 计算风险权重 ^[extracted]
- 欧盟 / 香港 / 日本 / 新加坡 / 瑞士：于 2025-01  至 2025-04  全面实施 ^[extracted]
- 英国：2026-01-01 实施 ^[extracted]
- 美国：2025-07  延期至 2026-07  · 因银行业游说而推迟 ^[extracted]

## 运作机制

**BCBS SCO60  的 4  组分类**：
- **第 1a 组（代币化传统金融资产）**：代币化债券/股票/大宗商品 · 适用与底层资产相同的风险权重（5-100%）· 例：BUIDL / OUSG / ONDO · 须具备可赎回性 + 法律可执行性
- **第 1b 组（合格稳定币）**：充分准备金 + 实时赎回 · 须通过赎回风险 + 基差风险（≤10 个基点满足 99% 的时间）测试 · 候选：USDC PPSI / EURC / USDB · 不合格：DAI / FRAX / USDT
- **第 2a 组（已对冲）**：通过衍生品对冲的 BTC/ETH · 1,250% 风险权重 + 资本减免
- **第 2b 组（其他）**：1,250% 风险权重 = 100% 资本支撑 · 1% 敞口上限

巴塞尔协议 III 公式：RWA = 敞口 × 风险权重 × 12.5  · 资本 = RWA × 8%。$100  BTC 敞口 → RWA = $100  × 1250% = $1,250  → 资本 = $100，即 1：1  的资本扣减。实际效果 = 银行必须以 1：1  的资本对应 BTC 仓位，通常信贷业务的 ROE 将损耗约 12.5 倍。与 USDC 第 1b 组对比：准备金 = 短期国债 + 现金 · 适用的短期国债风险权重为 0-20% · 资本约 10%，成本远低。香港方面的准备金框架与 SCO60  直接对接，详见 [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]。

## 起源与演变

BCBS 于 2019 年 启动加密资产磋商，在 2021 年 第 2  轮征询意见文件中引入第 1/2  组分类原型。2022-06  发布最终征询意见文件，2022-12-16 发布 SCO60  标准。各国于 2024 年 上半年完成国内 BCBS 实施草案，将 2025-01  设定为全球实施目标。在美国 Endgame 提案中，大型银行游说要求对 BTC/ETH ETF 给予部分豁免，特朗普 2.0  倾向于轻监管立场，2026-Q3  最终规则中 1,250% 有可能被软化为约 150-300%。资本传导路径对银行在 USDC 与 USDT 之间选择的隐性影响，详见 [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
<!-- /wiki-links:managed -->

## Sources
