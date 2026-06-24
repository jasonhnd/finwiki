---
title: CEX API / SDK ecosystem 比較 — 国内 / 海外取引所の Developer Interface
aliases:
  - CEX API comparison
  - 取引所 SDK ecosystem
  - REST/WebSocket/FIX exchange APIs
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags:
  - exchanges
  - cex
  - api
  - sdk
  - developer
sources:
  - https://docs.bitflyer.com/
  - https://docs.binance.com/
status: active
---

# CEX API / SDK ecosystem 比較 — 国内 / 海外取引所の Developer Interface

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

CEX が公開する Developer Interface は概ね 3 階層で標準化されている: **(a) REST API** (注文発注 · 残高照会 · 約定履歴 · KYC 設定など state-changing + snapshot 系)、**(b) WebSocket** (リアルタイム板情報 · 価格 stream · 自己約定 push — 低遅延 push 系)、**(c) FIX 4.4 / 5.0** (機関 prime broker 向け · 一部大手 CEX のみ提供)。主用途は bot trading、機関連携、データ取得 (オンチェーン分析 / market making 用素材)、自家ウォレット連携 (取引所⇔セルフカストディ往復)。レート制限 + IP allowlist + API key 署名認証 (HMAC-SHA256) が共通。

## 国内主要 CEX API

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]**: REST + WebSocket (Lightning API) · 公開 · API key + 署名認証 · レート制限 30 req/sec · 国内最古参で開発者コミュニティ大
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]**: REST + WebSocket · 全銘柄 spot + デリバ対応 · 開発ドキュメント整備度高
- **[[exchanges/jp-exchange-bitbank|bitbank]]**: REST + WebSocket · spot 主体 · 板情報品質定評
- **[[exchanges/jp-exchange-coincheck|Coincheck]]**: REST · 簡易仕様 · 機関向けは弱め (retail 寄り)
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]]**: REST · 一部 SDK · 銀行系で機関接続志向

## 海外大手 CEX API

- **Binance**: REST + WebSocket + FIX (機関) · 世界最広域 · spot / futures / options 全 product 対応 · Python / Node / Java 公式 SDK
- **Coinbase Advanced (旧 Pro)**: REST + WebSocket + FIX · 米国機関対応軸 · 規制親和性高
- **OKX**: REST + WebSocket + FIX · 多 product (spot / perp / options / structured)
- **[[exchanges/jp-foreign-exchange-bybit|Bybit]]**: REST + WebSocket · derivatives 中心 · perp 流動性世界 top
- **Kraken Pro**: REST + WebSocket + FIX · 老舗 · 機関接続志向

## 第三者 ライブラリ + aggregator

- **CCXT**: オープンソース · 100+ CEX 統合の Python / JS / PHP library · de facto standard
- **Hummingbot**: market making bot framework · CEX + DEX cross
- **Hyperliquid Python SDK**: perp DEX 系 · 機関 algo 移植先
- **TabTrader / 3Commas**: retail bot platform · API key 経由で複数取引所束ね

## 機関接続規格

- **FIX 4.4 / 5.0**: 銀行・brokers 標準 · Binance / Coinbase / OKX / Kraken の一部のみ提供
- **Prime broker 経由**: [[exchanges/jp-crypto-market-maker-otc-layer|B2C2 / FalconX / Cumberland]] 経由間接接続 (FIX 標準化済み)
- **WebSocket 多重化**: high-frequency 用低遅延接続 · co-location サービスは未成熟
- **API レート制限**: spot vs derivatives で異 · 機関は IP 多重化 + sub-account 戦略
- 国内 CEX は FIX 提供ほぼ無し → 機関接続は海外大手 + prime broker 依存

## 関連

- [[exchanges/global-cex-top10-comparison]] · [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/jp-crypto-market-maker-otc-layer]]

来源: 公開情報整理 (各 CEX 公式 API ドキュメント、GitHub 公開 SDK リポジトリ、CCXT/Hummingbot 等 OSS 連携ライブラリ)
