---
title: Ripple RLUSD · 银行级合规优先稳定币 · XRPL + Ethereum 双链
aliases: [ripple-rlusd-stablecoin, RLUSD, Ripple USD]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, stablecoin, ripple, rlusd, xrpl, cross-border, compliance-first]
sources:
  - https://ripple.com/stablecoin/
  - https://ripple.com/insights/
  - https://www.dfs.ny.gov/industry_guidance/industry_letters/il20241210_ripple_usd
  - https://xrpl.org/
  - https://ripple.com/press-releases/
status: candidate
---

# Ripple RLUSD · 银行级合规优先稳定币 · XRPL + Ethereum 双链


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Ripple RLUSD 2024-12-17 在 XRPL + Ethereum **双链同步上线**,Standard Custody (Ripple 子公司,NY DFS 信託牌照) 发行,**银行级合规优先**定位。2026-05 MCap **$700M+**,目标 2027 突破 $3B。RLUSD 是 Ripple 从"跨境支付软件"向"端到端清算栈" (RLUSD + ODL + XRPL DEX + RippleNet) 完成的关键产品——在 GENIUS Act 框架下是"合规优先 / 增长次之"的典型代表。

## Key facts

- MCap **$700M+** (2026-05) · 双链同步上线 2024-12-17 ^[extracted]
- 发行人 Standard Custody (Ripple 子公司,2024-04 收购 NY DFS Trust 牌照,ex-Anchorage 团队) ^[extracted]
- 储备 100% UST (1-3M) + 现金 · BDO USA 月度 attestation ^[extracted]
- 主要交易场所 Bitstamp / Bitso / Independent Reserve / Uphold ^[extracted]
- 与 XRPL 关系: native asset · DEX 原生支持 · IOU 模型 ^[extracted]
- 与 ODL 关系: 2025-Q2 起部分 ODL 走廊由 RLUSD 替代 XRP 桥接 ^[extracted]
- 2026-Q1 Ripple 申请 OCC National Bank Charter (进度未定) ^[extracted]

## Mechanism / How it works

RLUSD 与 USDC/USDT 的核心差异化: **不追求 DeFi 流动性深度** (USDC 强项), **不追求灰区流通规模** (USDT 强项), 而是**专注机构跨境支付清算**——叠加 Ripple ODL (2018 启动) + XRPL 原生 DEX (2018) + RippleNet 银行网络 (200+ 家). 这把 Ripple 从软件层 → 流动性层 → 稳定币层 → 完整闭环演化路径完成:跨境银行用 RippleNet 消息层 → ODL 通道 RLUSD 替代 XRP 桥接 → XRPL 上 sub-3-second 结算 → 收款银行赎回为本币. 整个清算栈**比 USDC + SWIFT** 更紧凑(发行人 + 桥接资产 + DEX + 银行消息都是 Ripple 自家系),与 [[fintech/cross-border-sc-via-swift-api|稳定币 × SWIFT API 跨境]] 走的是同一战场的不同打法。

## Origin & evolution

2012-2018 软件层 (RippleNet · 200+ 家银行). 2018-起流动性层 (ODL · XRP 作桥接). 2020-2023 与 SEC 诉讼 (XRP 是否证券). 2023-07 法院判决 XRP 在公开交易所不是证券. 2024-04 收购 Standard Custody (NY DFS Trust 牌照). **2024-12-17 RLUSD 同步 XRPL + Ethereum 上线**. 2025-Q3 RLUSD 进入 Bitstamp (被 Robinhood 收购的交易所) 大幅扩大零售触达. 2026-Q1 Ripple 申请 OCC National Bank Charter (走的是 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC 信託银行联邦套利]] 路径). 与 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe Tempo 协议对冲战法]] / Coinbase Arc 形成镜像三足: **Ripple = "跨境合规清算" / Stripe = "电商支付" / Coinbase = "DeFi 流动性"**。

## Counterpoints

RLUSD $700M 仍远小于 USDC / USDT,且 ODL 走廊数量增长在 2024-2025 停滞(主要因美国出口限制 + 部分新兴市场监管摩擦)。"合规优先"定位让 RLUSD 在 DeFi 集成深度上**永远落后 USDC**,机构跨境清算市场被 SWIFT API + 多 SC 套利模式分流 → RLUSD 难以独占。XRPL DEX 流动性相对薄,赎回链路依赖 Bitstamp 等中心化场所. Ripple OCC National Bank Charter 申请被拒会让 RLUSD 失去"美国合规升级"通道。

## Open questions

Ripple OCC National Bank Charter 何时获批 / 被拒?ODL 走廊由 RLUSD 替代 XRP 桥接的比例 2027 能否突破 50%?RLUSD 在欧盟 MiCA 框架下能否拿到 EMT/ART 资格,实现三圆白圈完整覆盖?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/cross-border-sc-via-swift-api|稳定币跨境 via SWIFT API]]
- [[fintech/three-circles-stablecoin-mra-framework|稳定币三圆 MRA 框架]]
- [[fintech/stablecoin-crossborder-b2b-growth|稳定币跨境 B2B 增长]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 加密网络中立]]
<!-- /wiki-links:managed -->

## Sources

