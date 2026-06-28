---
source: exchanges/global-cex-prime-brokerage-layer
source_hash: 5de894b633377978
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "グローバル暗号資産プライムブローカレッジ層 — Hidden Road / FalconX / Galaxy / B2C2 / Cumberland"
translated_at: 2026-06-26T08:29:25.271Z
---

# グローバル暗号資産プライムブローカレッジ層 — Hidden Road / FalconX / Galaxy / B2C2 / Cumberland

## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。比較・対照の文脈では [[exchanges/global-institutional-custody-five-pillars|global institutional カストディ five pillars]]、より広いシステム上・規制上の境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読む。

## 概要暗号資産プライムブローカレッジは、機関投資家向けに (a) 統合口座 (multi-CEX cross-margin) (b) カストディ (c) レンディング (d) 執行 (e) レポーティングを一括提供する層である。伝統金融における Goldman / JP Morgan の機能に類似するが、暗号資産に特化している。2024 BTC 現物 ETF 承認後の機関投資家流入を背景に、2024-2026 年に急成長し、暗号資産の機関フローを支える中枢インフラとして定着しつつある。

## 主要5 プレイヤー

- **Hidden Road** — 2025-04 に Ripple が $1.25B で買収。暗号資産 + 伝統金融ハイブリッドのマルチアセット・プライムブローカレッジ。買収後は XRP / RLUSD 経由の決済統合が進行。
- **FalconX** — Tiger Global / Accel 出資。機関 OTC + プライム機能のハイブリッド。評価額 $8B (2024 ラウンド)。米国機関フローの主要ハブ。
- **Galaxy Digital** — Mike Novogratz 創業。Nasdaq 上場 (ticker: GLXY, 2025 移管)。機関向けトレーディング + 資産運用 + 投資銀行の三層モデル。
- **B2C2** — 英本社、SBI Holdings が 2021-12 に買収し子会社化。OTC マーケットメイカー起点。日本法人 B2C2 Japan は関東財務局長第00012号 (国内 VASP)。
- **Cumberland (DRW 系)** — シカゴ系 OTC、DRW Trading の暗号資産部門。機関中心、2014 年から実績ある最古参の一角。

## ビジネスモデル

- **スプレッド + 手数料**: bid/ask スプレッドと取引手数料が主収益。
- **レンディング収益**: 顧客資産を担保にレバレッジを提供し、金利収入を得る。
- **複数 CEX ルーティング**: Binance / Coinbase / OKX 等の流動性を集約し最良執行 (SOR) を提供。
- **クロスマージン**: 機関投資家の資金効率を上げる担保の多重利用 (一つの担保で複数 venue のポジションを持つ)。

## リスク管理

- **カウンターパーティリスク**: 2022 年の Celsius / 3AC / FTX 連鎖破綻で、ほぼ全てのプライムブローカーがエクスポージャー損失を計上した (Genesis は破産)。以後、分別カストディが業界標準化。
- **マージンコール連鎖**: 高レバレッジ機関 (3AC 型) の連鎖損失リスクは構造的に残存。
- **カストディリスク**: 自己カストディ vs 提携カストディアン (Komainu / BitGo / Anchorage / Fireblocks) の選択が経営上の論点。

## 日本市場との接点

- **B2C2 Japan** — 国内唯一の本格 prime broker 機能保有プレイヤー。SBI Holdings 系列。
- **Custodiem** (旧 FTX Japan, bitFlyer HD 系) — 機関 OTC + カストディ機能を 2025-2026 にかけ拡張中。
- **Crypto Garage SETTLENET PRO** — DG × 東京短資 × 野村 HD 系。機関向け決済 + カストディ。
- **Hidden Road / FalconX / Galaxy 直接進出**: 未進出。Ripple 経由 (Hidden Road) で間接接触のみ。日本機関は SBI / DG / bitFlyer HD ルートでアクセス。

## 関連リンク

- [[exchanges/jp-crypto-market-maker-otc-layer]]
- [[exchanges/global-institutional-custody-five-pillars]]
- [[exchanges/jp-institutional-custody-three-pillars]]
- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/global-crypto-exchange-bankruptcy-comparison]]
- [[exchanges/jp-exchange-custodiem]]
- [[exchanges/jp-exchange-crypto-garage]]
- [[exchanges/btc-spot-etf-japan-impact]]
- [[exchanges/rwa-tokenization-cex-integration]] — RWA トークン化 × CEX 統合
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較マトリクス
- [[securities/japan-best-execution-sor-pts]] — 日本の best execution SOR/PTS
