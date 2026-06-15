---
source: fintech/dual-currency-stablecoin-arbitrage-legal-hack
source_hash: 16a7129370eab4a4
lang: ja
status: machine
fidelity: ok
title: "二通貨アービトラージ · §501 リーガル hack と規制脆弱性"
translated_at: 2026-06-02T13:21:55.054Z
---

# 二通貨アービトラージ · §501 リーガル hack と規制脆弱性

## ウィキ上の位置づけ

このエントリは [[fintech/INDEX|fintech index]] の配下に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム / 規制上の境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] と併せて読む。

> [!info] 要約
> 二通貨ステーブルコイン・アービトラージの合法性は、一つのリーガル hack に立脚している:**「2 つの独立した payment stablecoin 間の atomic swap は FX 業務ではない」**。これがオンチェーン FX に法的余地を与えている。しかし hack の脆弱点は、米国 / EU / 日本のいずれかの規制当局が「二通貨 swap」を「FX 業務」として再定義した瞬間 → 全構造が無効になることである。SEC / OCC / FCA / FSA の告知を継続的にモニターする必要がある。

## 主要事実

- GENIUS Act §501 は「保有 ↔ swap 経由」のクロスカレンシーを禁止していない · 発行体による FX 業務のみ禁止 ^[extracted]
- MiCA Title IV は既に EUR-stablecoin の複数発行体を認めており = オンチェーン EUR FX 流動性の奨励に等しい ^[extracted]
- 日本 PSA 2023 改正は stablecoin を「電子決済手段」と定義 · swap を FX に分類することは明示せず ^[extracted]
- SocGen EURCV / Lugh EURL 等のユーロ stablecoin が規制の多元化を提供 ^[extracted]

## 仕組み / 作動原理

**三層論証 · なぜ FX 業務ではないか**:

1. **個人 / 企業が 2 つの独立した 1:1 stablecoin を自主的に相互交換** = 自主的な資産配分 · FX 免許不要
2. **DEX がプール流動性を提供** = 自動マーケットメイク · OTC FX desk ではない
3. **mint/burn は発行体のみ実施** = 発行体が行うのは「償還」· 「両替」ではない

この全構造は GENIUS §501 + MiCA Title IV + 日本 PSA の三フレームワーク下で同時に合法だが · いずれかの規制再定義により崩壊する。

**なぜ §501 が余地を与えたか**:GENIUS Act §501 の主要制約 = payment stablecoin は 1:1 fiat-reserved 必須 · 発行体は IDI / NCBA / QC NTI · FX 業務の直接実施は不可(ECF 1934 規制との衝突回避)。だが**「2 つの独立した stablecoin の swap = FX」とは明言せず** → 法的空白。

**MiCA の能動的奨励**:Title IV(EMT)は複数発行体を許可 · Circle 単一依存を低減 · EU が能動的にオンチェーン FX 流動性に余地を残す(政治的意図 = USD-stablecoin 依存の低減)。

## 起源と発展

2024 年以前 = オンチェーン FX 実現不可(USDC 一強)。2024 [[fintech/mica-overview|MiCA]] Title IV 施行 + EURC 流通量上昇 + SocGen / Lugh の上場 = ユーロ側の複数発行体構造が形成。2025 [[payment-firms/jpyc|JPYC]] が日本資金決済法の新フレーム下で初の円 stablecoin に。2026.05 三角アービトラージが DEX 上で初めて実稼働 = リーガル hack が理論からプロダクトへ。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|二通貨アービトラージ · 概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本ステーブルコイン規制全景]]
- [[fintech/three-circles-stablecoin-mra-framework|三円ステーブルコイン MRA フレームワーク]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## 出典

- GENIUS Act §501 / MiCA Title IV / 日本 PSA(2023 改正)
- SEC Uniswap Wells Notice(2024)
