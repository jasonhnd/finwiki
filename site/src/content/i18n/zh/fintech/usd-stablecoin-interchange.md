---
source: fintech/usd-stablecoin-interchange
source_hash: 87644706372cc1c6
lang: zh
status: machine
fidelity: ok
title: "USD 稳定币互换市场"
translated_at: 2026-05-31T07:28:06.175Z
---
# USD 稳定币互换市场


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

> [!info] TL;DR
> USDT、[[fintech/circle-usdc-stablecoin|USDC]]、[[fintech/sky-usds-decentralized-stablecoin|USDS]]、[[fintech/paypal-pyusd-stablecoin|PYUSD]] 等 USD 稳定币之间的兑换、清算与结算，本身就构成了一个独立的大型市场。

**市场规模**：2025 年稳定币交易额 $33 兆 [Bloomberg/Artemis]。即使只有 10% 属于 USD 稳定币互换，0.01% 手续费也意味着 **$3.3 億/年** 规模的收入。

**互换特性**：USD 稳定币互换不同于一般的 crypto 兑换——理论上它们都以 1:1  锚定美元，实际价差极小（通常 < 0.05%），风险远低于普通 crypto 交易。

**2 种实现路径**：
- DeFi（如 Curve）：USDT↔USDC 约为 0.01-0.04%，无需许可，但大额交易存在滑点与 gas 成本
- CeFi（做市商/交易所 API）：0.02-0.05%，流动性深，但需要 KYB 接入

**独立价值**：稳定币互换 gateway 不需要依赖特定应用（如 [[fintech/ai-payment-two-tracks|AI 決済]]、[[fintech/stablecoin-crossborder-b2b-growth|クロスボーダー B2B 送金]] 等），可作为独立基础设施向任意行业提供服务，类似外汇市场中的做市商角色。在日本，如果仅通过 self-custody 路由方式运营信息中介，则归于 [[fintech/japan-ecisb-license|ECISB ライセンス]]。跨越货币边界（USD/EUR/JPY）的法律 hack 路径参见 [[fintech/dual-currency-stablecoin-arbitrage-overview|2 通貨三角アービトラージ]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/jp-crypto-bank-credit-facilities|CEX × 日本銀行 無担保与信実績図譜（Fintech 業界情報）]]
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス —— 「資金を扱わない取引ルーティング仲介」専用の軽量ライセンス]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[fintech/ai-payment-two-tracks|AI 業界の 2 つの決済レール：Stripe モデル vs ステーブルコインモデル]]
- [[fintech/circle-usdc-stablecoin|Circle USDC 発行体]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): refreshed dates; added Circle USDC issuer wikilink alongside USDT/USDS/PYUSD peers.
