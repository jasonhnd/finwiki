---
source: exchanges/jp-cex-staking-lending-regulation
source_hash: 74af69c1b6588aad
lang: ja
status: machine
fidelity: ok
title: "国内 CEX ステーキング・レンディングサービス + 規制"
translated_at: 2026-06-02T12:19:04.240Z
---
﻿
# 国内 CEX ステーキング・レンディングサービス + 規制


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。ピア比較・対照の文脈では [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読み、より広いシステム・規制境界については [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] を参照する。

## 概要

国内 CEX は **ステーキング (PoS 報酬獲得)** と **レンディング (利息獲得)** を顧客向けに提供。許容範囲は **JVCEA 自主規制 + FSA 監督指針** で制限的に規定され、米国 (SEC vs Kraken/Coinbase) との対比で日本は事前ガイドライン型を採る。

## 国内主要サービス

- **[[exchanges/jp-exchange-bitflyer]] レンディング** — BTC/ETH 等の貸借 · 14〜90 日 · 年利 0.5-3%
- **[[exchanges/jp-exchange-coincheck]] 貸暗号資産** — 同上 · 14-365 日
- **[[exchanges/jp-exchange-gmo-coin]] レンディング + ステーキング** (Tezos 等)
- **[[exchanges/jp-exchange-sbi-vc-trade]] ステーキング** — ETH 後発参加
- **[[exchanges/jp-exchange-bitbank]] ステーキング** — 限定対応

## 規制ポイント

- **預金類似性回避**: 改正資金決済法上の "暗号資産交換業" 範囲内に収める · 顧客返還保証義務
- **元本保証禁止**: 元本毀損リスクの明示義務 (パンフレット / 約款)
- **JVCEA 規則**: ステーキングは **100% 顧客資産での運用に限定** · 自社 prop 運用禁止
- **税務扱い**: 利息・報酬は **雑所得 (累進課税最大 55%)** 個人 / 法人事業所得

詳細は [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/jp-vasp-regulatory-timeline]] 参照。

## 海外事例

- **米 SEC vs Kraken** (2023-02): staking-as-service を "未登録証券販売" と認定 · 停止命令 + 合意金 $30M
- **米 SEC vs Coinbase** (2023-): 同様訴訟係属 · staking 含む包括的取引所訴訟
- **EU MiCA** (2026 ガイドライン): ステーキングサービスは別ライセンス想定
- **多層比較**: [[exchanges/us-crypto-licensing-multi-layer-system]]

## リスク管理

- **slashing リスク**: validator のスラッシングで顧客元本毀損可能性
- **validator 選定**: 内製 or 委託 (Figment / Blockdaemon 等) の透明性開示
- **liquidity リスク**: アンステーク期間 (ETH 14-21 日 等) の流動性ロック
- **token 選定**: 国内 CEX は保守的に PoS 主要 (ETH / SOL / ATOM 等) のみ提供

## 関連

- [[exchanges/liquid-staking-restaking-cex-exposure]] — Liquid staking / restaking × CEX 露出
- [[exchanges/jp-crypto-asset-taxation-detailed]] — JP crypto asset 税制詳細
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較マトリクス
