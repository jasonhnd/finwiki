---
source: fintech/ripple-rlusd-stablecoin
source_hash: 5d88b253b5010392
lang: zh
status: machine
fidelity: ok
title: ""
translated_at: 2026-05-31T07:28:06.135Z
---
﻿# Ripple RLUSD · 银行级合规优先稳定币 · XRPL + Ethereum 2  链

## Wiki route

本条目位于 [[fintech/INDEX|fintech index]] 下。可结合 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 阅读相邻背景，并结合 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 阅读更广泛的体系边界。

> [!info] TL;DR
> Ripple RLUSD 于 2024-12-17 在 XRPL + Ethereum **2  链同步上线**，由 Standard Custody（Ripple 子公司，持有 NY DFS 信托牌照）发行，定位为**银行级合规优先**产品。截至 2026-05 ，其市值为 **$700M+**，目标是在 2027 年 突破 $3B。RLUSD 是 Ripple 从“跨境支付软件”走向“端到端清算栈”（RLUSD + ODL + XRPL DEX + RippleNet）的关键产品。在 GENIUS Act 框架下，它是“合规优先、增长其次”的典型案例。

## Key facts

- 市值 **$700M+**（2026-05）· 在 2  条链上同步上线 2024-12-17 ^[extracted]
- 发行人：Standard Custody（Ripple 子公司；于 2024-04  获得 NY DFS Trust 牌照；团队来自 Anchorage）^[extracted]
- 准备金：100% UST（1-3M）+ 现金；由 BDO USA 提供月度 attestation ^[extracted]
- 主要交易所：Bitstamp / Bitso / Independent Reserve / Uphold ^[extracted]
- 与 XRPL 的关系：native asset · 原生 DEX 支持 · IOU 模型 ^[extracted]
- 与 ODL 的关系：自 2025-Q2  起，RLUSD 在部分 ODL 走廊中替代 XRP 桥接 ^[extracted]
- 2026-Q1  Ripple 申请 OCC National Bank Charter（进展待定）^[extracted]

## Mechanism / How it works

RLUSD 相比 USDC/USDT 的核心差异在于：**不追求 DeFi 流动性深度**（USDC 的强项），**不追求灰色地带流通规模**（USDT 的强项），而是专注于**机构跨境支付清算**。Ripple 叠加了 ODL（2018  启动）+ XRPL 原生 DEX（2018）+ RippleNet 银行网络（200+ 家银行）。由此 Ripple 完成了从软件层到流动性层再到稳定币层，直至完整闭环的演进路径：跨境银行使用 RippleNet 消息层 → RLUSD 在 ODL 通道中替代 XRP 桥接 → 在 XRPL 上完成 sub-3-second 结算 → 收款银行兑回本地货币。整个清算栈比 **USDC + SWIFT** 更紧密，因为发行人、桥接资产、DEX 与银行消息网络都在 Ripple 体系内。这是在与 [[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] 相同战场上的另一种打法。

## Origin & evolution

2012-2018  软件层（RippleNet · 200+ 家银行）。自 2018  起进入流动性层（ODL · 以 XRP 为桥接资产）。2020-2023  与 SEC 的诉讼（XRP 是否属于证券）。2023-07  法院裁定 XRP 在公开交易所交易中不构成证券。2024-04  收购 Standard Custody（NY DFS Trust 牌照）。**2024-12-17 RLUSD 在 XRPL + Ethereum 同步上线**。2025-Q3  RLUSD 进入 Bitstamp（已被 Robinhood 收购的交易所），零售触点大幅扩展。2026-Q1  Ripple 申请 OCC National Bank Charter，沿着 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC 信託銀行連邦アービトラージ]] 路线推进。其与 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe Tempo プロトコル対冲戦法]] / Coinbase Arc 形成镜像三足结构：**Ripple =“跨境合规清算” / Stripe =“电商支付” / Coinbase =“DeFi 流动性”**。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/cross-border-sc-via-swift-api|ステーブルコインクロスボーダー via SWIFT API]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA フレームワーク]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコインクロスボーダー B2B 成長]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号資産ネットワーク中立]]
<!-- /wiki-links:managed -->

## Sources
