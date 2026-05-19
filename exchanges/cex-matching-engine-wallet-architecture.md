---
title: CEX matching engine + cold/hot wallet 内部架構
aliases:
  - CEX matching engine architecture
  - CEX cold hot wallet design
  - Exchange order book + custody architecture
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - matching-engine
  - cold-storage
  - architecture
  - technical
sources:
  - https://www.nyse.com/
  - https://github.com/binance/
status: candidate
---

# CEX matching engine + cold/hot wallet 内部架構

## 1. matching engine 概要

CEX のコア = **matching engine (注文書照合エンジン)**。設計思想は大別して 3 種類:

- **CLOB (Central Limit Order Book)** — 業界標準。買い注文と売り注文を価格・時間で照合。NYSE / NASDAQ から CEX まで踏襲
- **RFQ (Request for Quote)** — 機関 OTC 中心。bid/ask quote 要求 → 個別 fill
- **AMM-like** — DEX 系。AMM は CEX matching の代替設計 ([[exchanges/amm-design-evolution]] 参照)

CEX (Binance / Coinbase / bitFlyer / 国内全社) は CLOB 基盤。機関大口取引は別途 OTC desk で RFQ 処理。

## 2. CLOB matching engine 設計要素

| 要素 | 内容 |
|---|---|
| **FIFO (First-In First-Out)** | 同価格は時間優先で約定 |
| **price-time priority** | 価格優先 + 時間優先の 2 段階照合 |
| **iceberg orders** | 大口を分割表示し market impact 抑制 |
| **post-only / IOC / FOK** | 注文タイプ (maker only / Immediate-or-Cancel / Fill-or-Kill) |
| **co-location** | 機関 HFT 向け低遅延接続 (NYSE / Binance VIP) |

代表実装: **NYSE / Binance / Coinbase / dYdX v4 (Cosmos appchain)**。dYdX v4 は CLOB を on-chain validator 上で実装、CEX 性能と DEX 透明性の融合を試行。

## 3. RFQ / OTC engine

機関 OTC (**Cumberland / B2C2 / FalconX / Genesis (倒産)**) は CLOB ではなく **RFQ 方式**を採用:

- 顧客が "BTC 100 枚買いたい" と quote 要求
- マーケットメイカーが bid/ask 提示
- 個別 fill (order book に出ない)
- 大口取引で slippage 制御 + 価格秘匿

国内 OTC: bitFlyer / Coincheck が「販売所」名義で類似機能を一般顧客向けに提供 ([[exchanges/jp-cex-sales-vs-exchange-model-economics]] 参照)。

## 4. cold/hot wallet 内部架構

国内 VASP 義務 ([[exchanges/jp-vasp-cold-storage-segregation-rules]]) に基づく 3 層構成:

- **ホット ウォレット (≤ 5% 国内義務)** — matching engine 直結 · リアルタイム入出金処理 · maker/taker bot 連携 · API 経由で署名
- **ウォーム ウォレット** — 半オフライン · 大口出金時のステージング · 1 日複数回 cold から補充
- **コールド ウォレット (≥ 95% 国内義務)** — エアギャップ署名 · multi-sig (2-of-3 以上) · HSM または MPC 必須

Coincheck 2018 NEM 580 億円事件は「実質ホット 100%」の結果 ([[exchanges/coincheck-nem-hack-detailed-analysis]])。同事件後の規制強化で 3 層分離が国内義務化。

## 5. 主要技術スタック

機関カストディの 5 技術 ([[exchanges/global-institutional-custody-five-pillars]] / [[exchanges/jp-institutional-custody-three-pillars]]):

| 技術 | 代表ベンダー | 役割 |
|---|---|---|
| **multi-sig** | Gnosis Safe (現 Safe) | 標準 2-of-3 署名閾値 · スマコン基盤 |
| **HSM** | Thales / Utimaco / Ledger Vault | ハードウェア暗号モジュール · FIPS 140-2/3 認証 |
| **MPC** | Fireblocks / Fordefi / Sepior | 鍵分散 · single point of failure 排除 |
| **air-gap signing** | Casa / Anchorage | 完全オフライン署名 · ネット非接続 |
| **シャミア秘密分散 (Shamir's Secret Sharing)** | 多数 | 秘密鍵の閾値分散 (k-of-n) |

CEX 実装例:
- **Coinbase Custody** — multi-sig + HSM 混合
- **Anchorage Digital** — MPC 中心 (米 OCC 国法銀行ライセンス)
- **Komainu** — cold + air-gap (Nomura JV)
- **Fireblocks** — MPC SaaS · 国内 GMO コイン等が採用

2025 Bybit Lazarus hack ([[exchanges/bybit-lazarus-hack-detailed-analysis]]) は **Safe UI 偽装**で multi-sig 署名者を騙した社会工学攻撃。技術自体は機能したが UI 層の脆弱性が露呈、air-gap + ハードウェア確認の重要性を再認識させた。

---

来源: 業界一般知識 + Binance / Coinbase tech blog + Gnosis Safe docs + Fireblocks whitepaper + Anchorage 公告。
