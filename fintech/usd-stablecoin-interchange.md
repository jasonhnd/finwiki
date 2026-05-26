---
title: USD ステーブルコイン互換市場 — $33 兆規模レール上の 0.01% ビジネス
aliases: []
domain: fintech
kind: knowledge
topic: usd-stablecoin-interchange
created: 2026-04-16
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-10-30
confidence: certain
tags: [fintech]
status: confirmed
sources:
  - https://www.circle.com/en/usdc
  - https://tether.to/en/transparency/
  - https://www.coinbase.com/blog
  - https://curve.fi/
  - https://www.visa.com/blogarchives/us/2024/09/05/stablecoins-cross-border/index.html
---

# USD ステーブルコイン互換市場


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

> [!info] TL;DR
> USDT、[[fintech/circle-usdc-stablecoin|USDC]]、[[fintech/sky-usds-decentralized-stablecoin|USDS]]、[[fintech/paypal-pyusd-stablecoin|PYUSD]] 等 USD ステーブルコイン間の交換、清算、決済は、それ自体が独立した大規模市場を構成する。

**市場規模**:2025 年ステーブルコイン取引高 $33 兆 [Bloomberg/Artemis]。仮に 10% のみが USD ステーブルコイン互換だとしても、0.01% 手数料は **$3.3 億/年** 規模の収益を意味する。

**互換の特性**:USD ステーブルコイン互換は一般的な crypto 交換とは異なる —— 理論上 1:1 で米ドルにペッグされており、実際の価格差は極めて小さく（通常 < 0.05%）、リスクは一般的な crypto 取引より遥かに低い。

**2 つの実装経路**:
- DeFi（Curve 等）:USDT↔USDC で約 0.01-0.04%、パーミッションレスだが大口取引のスリッページと gas 費用
- CeFi（マーケットメーカー/取引所 API）:0.02-0.05%、深い流動性、KYB 接続必須

**独立した価値**:ステーブルコイン互換 gateway は特定アプリケーション（[[fintech/ai-payment-two-tracks|AI 決済]]、[[fintech/stablecoin-crossborder-b2b-growth|クロスボーダー B2B 送金]]等）に依存する必要がなく、独立したインフラとして任意の業界にサービス提供可能。外国為替市場におけるマーケットメーカーの役割に類似。日本側では self-custody ルーティング方式で情報仲介のみを運営する場合は [[fintech/japan-ecisb-license|ECISB ライセンス]] に該当する。通貨境界（USD/EUR/JPY）を跨ぐ法律 hack 経路は [[fintech/dual-currency-stablecoin-arbitrage-overview|2 通貨三角アービトラージ]] を参照。

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
