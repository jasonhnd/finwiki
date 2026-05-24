---
title: cbBTC · Coinbase 包装 BTC · 机构信任替代 WBTC 的窗口期产品
aliases: [cbbtc-institutional-btc-wrapper, cbBTC, Coinbase Wrapped BTC]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, wrapped-asset, bitcoin, coinbase, base, defi, custody]
sources: []
status: candidate
---

# cbBTC · Coinbase 包装 BTC · 机构信任替代 WBTC 的窗口期产品


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> cbBTC 是 Coinbase 托管的 ERC-20 wrapped BTC (2024-09-12 上线),1:1 BTC 储备 · 2026-03 流通 ~**89,000 cbBTC** / 市值 **$6.1B** / Base 上 TVL **$839M**。在 2024 年 BitGo WBTC 治理风波后,cbBTC 抓住"机构 BTC-DeFi 头寸迁移"窗口期成为替代,并构成 Coinbase **veToken host protocol flywheel** 中的 host 资产层——把 BTC 从 CEX 托管资产升级为"链上自循环现金流引擎"。

## Key facts

- 流通量 **~89,000 cbBTC** · 市值 **$6.1B** · Base TVL **$839M** (2026-03) ^[extracted]
- 1:1 BTC 储备 · Coinbase 托管 · 链上 attestation ^[extracted]
- 上线日 2024-09-12 · ERC-20 多链 (主要 Base + Ethereum) ^[extracted]
- 流动性核心场所 Aerodrome / Curve trading pairs ^[extracted]
- 同一基础设施同时托管 BlackRock IBIT (Coinbase 也是 IBIT 主要托管方) ^[extracted]
- WBTC (BitGo) 2024 把储备多签转给 Justin Sun 关联实体 → 机构信任迁移 → cbBTC 受益 ^[extracted]

## Mechanism / How it works

cbBTC 在 Coinbase 4 层闭环中扮演 host 资产:**Coinbase CEX → mint cbBTC (host 资产) → 进入 Base (host 平台) → Aerodrome swap (host DEX) → veAERO bribe (host token)**。Coinbase 既保留 CEX 托管 BTC 的 custody fee + spread,又让这部分 BTC 在 DeFi 中产生第二层流动性收益。整个闭环年化估算 **$130-250M** (详见 [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]])。这是 Coinbase 应对 Circle Arc 主网吸纳机构 USDC 后 Base 估值减损 $20-25B 的**链上自给自足防御**。

## Origin & evolution

2024-09-12 cbBTC 上线 (Coinbase 内部 BTC 业务部门 + Base 团队联合发布)。2024-Q4 BitGo 治理风波 (WBTC 储备多签转 Sun 关联实体) 引发机构信任危机,Coinbase 主动以"美国上市公司 + OCC 监管 + 透明储备" 三件套接收迁移。2025-Q1 cbBTC 在 Aerodrome 流动性深度反超 WBTC。2025-Q3 Aerodrome+Velodrome 合并 (94.5% : 5.5%) 进入 Ethereum L1 + Circle Arc,cbBTC 跨链复制路径启动。2026-03 流通量达 89,000 BTC = WBTC 历史峰值的 ~60%。**机构迁移窗口期约 18-24 个月**,一旦头寸固化迁移成本极高,与 [[fintech/regulatory-window-strategic-acquisition|监管窗口 × 战略收购]] 中"窗口期对手不可逆迁移"逻辑同构。

## Counterpoints

cbBTC 单点失败 + 利益冲突:Coinbase 同时是托管方 + 链方 + Aerodrome 大股东 + cbBTC mint/burn 控制人 + 链上 attestation 提供方。SEC 在 Coinbase v SEC 诉讼中已暗示这类多重角色的复杂性,这与 [[fintech/issuer-distributor-incentive-realignment-arc-strategy|发行/分销 ARC 战略]] 中 Circle 把 issuer / chain / distributor 内化为同一实体的"全栈反向整合"路径形成镜像。Threshold tBTC 在散户路径仍有替代作用,Wrapped 资产领域不是 winner-takes-all。**反例**:若 OCC 禁止 Coinbase 同时托管 IBIT + cbBTC + USDC 储备,Coinbase 必须拆分业务,cbBTC 飞轮直接受损。

## Open questions

cbBTC 跨链到 Solana / 非 EVM 链时如何处理 1:1 储备审计?Coinbase 2026 IPO 估值模型是否会单独披露 cbBTC 闭环现金流?机构 BTC-DeFi 头寸固化窗口结束后,cbBTC 增长曲线会否进入瓶颈?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × 主导方 DEX 自循环飞轮]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX 反超 incumbent]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 加密网络中立]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP 开发者平台]]
<!-- /wiki-links:managed -->

## Sources

