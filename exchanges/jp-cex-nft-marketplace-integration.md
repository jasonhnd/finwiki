---
title: 国内 CEX × NFT マーケットプレイス統合モデル
aliases:
  - JP CEX NFT integration
  - 国内暗号資産取引所 NFT 戦略
  - Coincheck NFT Adam byGMO LINE NFT
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - cex
  - nft
  - marketplace
  - vasp
sources:
  - https://nft.coincheck.com/
  - https://adam.jp/
status: candidate
---

# 国内 CEX × NFT マーケットプレイス統合モデル

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-cex-staking-lending-regulation|国内 CEX ステーキング・レンディングサービス + 規制]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

国内 CEX は VASP ライセンス保有の強みを活用し、NFT マーケットプレイス (MP) を自社運営または連携。2021-2022 NFT bubble 期に各社が一斉進出したが、2023-2026 は明確な縮小整理フェーズに移行。決済レイヤーで暗号資産を扱う必要があるため、VASP 登録済み CEX が構造的に有利なポジションを持つ。

## 主要サービス

- **Coincheck NFT** (β · 2021-03 開始) — CEX 統合型 NFT MP の先駆。ETH / Polygon 対応、CryptoSpells / Sorare / The Sandbox 等とパートナーシップ。手数料無料 (Gas-less) を訴求。
- **Adam byGMO** (2022-04 開始、GMO Internet 系) — 日本円決済対応 NFT MP。著作権チェック強化、クリエイター支援に注力。
- **LINE NFT** (2022-04 開始、LINE Xenesis 系) — LINE Friends エコシステム連携。LINE Blockchain (Finschia → KAIA) 基盤。LINE Pay 決済対応。
- **Mercari NFT 構想** (メルコイン関連) — メルカリ売上金との接続可能性を構想段階で議論。本格ローンチ未確認。
- **楽天 NFT** (2022-02 開始) — 楽天ポイント連携。芸能・スポーツ系限定取扱、IP 重視の閉鎖型モデル。

## ビジネスモデル

- **手数料収入**: 取引額の 2-10%。
- **CEX 顧客流入**: NFT 購入を入口に暗号資産取引へクロスセル。CAC 改善が主目的。
- **規制位置**: NFT 自体は VASP 範囲外だが、決済通貨 (ETH/USDC/JPY) が VASP 経由のため、CEX 統合型が国内では構造優位。

## 撤退 / 縮小フェーズ

- **2023-2024**: NFT bubble 崩壊 + アクティブユーザー激減により各社縮小。
- **2026-06**: LINE NFT サービス全面終了予定 (LINE Xenesis 全体サービス終了に伴う)。
- **Adam byGMO**: 規模縮小報道あり (詳細未公表)。
- **Coincheck NFT**: 継続中だが β 表記を維持、機能拡張は限定的。

## 国際比較

米 OpenSea / Magic Eden / Blur 等は独立 MP として暗号資産 wallet 接続前提。国内は VASP 規制と日本円決済需要から、CEX 統合型独自モデルが成立。海外は MP 主導、国内は CEX 主導という非対称構造。

## 関連

- [[exchanges/jp-exchange-coincheck]]
- [[exchanges/jp-exchange-gmo-coin]]
- [[exchanges/jp-exchange-line-xenesis]]
- [[exchanges/jp-exchange-rakuten-wallet]]
- [[exchanges/jp-exchange-mercoin]]
- [[exchanges/jp-cex-points-economy-integration]]
- [[exchanges/jp-vasp-parent-company-map]]
- [[exchanges/rwa-tokenization-cex-integration]] — RWA tokenization × CEX 統合
- [[exchanges/jp-exchange-gaudiy]] — Gaudiy Financial Labs（IP × Web3）
- [[fintech/japan-financial-regulation]] — 日本金融規制全体
