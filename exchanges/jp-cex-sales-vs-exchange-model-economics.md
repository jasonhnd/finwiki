---
title: 国内 CEX 販売所 vs 取引所 ビジネスモデル経済学
aliases:
  - JP CEX hanbai-jo vs torihiki-jo
  - 国内 CEX スプレッド経済学
  - Sales (OTC) vs Order Book exchange model
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - cex
  - business-model
  - spread
  - fees
  - hanbai-jo
sources:
  - https://jvcea.or.jp/
status: candidate
---

## 概要

国内 CEX は 2 つのサービス形態を並行運営する独自構造を持つ。**販売所 (はんばいじょ)** = CEX 自身が顧客と相対取引する OTC スプレッドモデル vs **取引所 (とりひきじょ)** = 顧客同士の指値板で約定する maker/taker fee モデル。両者は収益構造・規制上の位置付け・想定顧客層が大きく異なり、同一 CEX が両サービスを併設するケースが多い。

## 販売所モデル (主流)

- **収益源**: bid/ask スプレッド (典型 2-5% · 銘柄により 7-10%)
- **CEX のポジション**: market maker · 在庫リスク保有 + ヘッジ義務
- **顧客 UX**: クリック 1 回購入 · 数量/金額直接指定 · 市場価格が分かりにくい
- **主要採用**: [[exchanges/jp-exchange-coincheck]] (販売所主力) · [[exchanges/jp-exchange-gmo-coin]] · DMM Bitcoin (旧) · [[exchanges/jp-exchange-rakuten-wallet]] · [[exchanges/jp-exchange-mercoin]] · OKJ

## 取引所モデル (玄人向け)

- **収益源**: maker/taker fee (典型 0.01-0.20%) · 圧倒的に薄い
- **CEX のポジション**: matching engine 運営のみ · 在庫ポジション持たず中立
- **顧客 UX**: 板情報 + 指値/成行注文 · プロ向け UI
- **主要採用**: [[exchanges/jp-exchange-bitflyer]] Lightning · [[exchanges/jp-exchange-bitbank]] · GMO コイン取引所 (販売所と併存)

## 経済学的含意

- **販売所スプレッド ~3% は MM ([[exchanges/jp-crypto-market-maker-otc-layer]] B2C2 等) の卸値 ~0.5% より高い** — CEX マージン ~2.5% が中抜き構造
- リテール客の "見えない手数料" 問題 — FSA 監督指針が透明性改善を継続的に要求
- **取引高は販売所 > 取引所** だが **収益率は販売所 ≫ 取引所** — 国内 CEX 黒字化の主要レバー
- 海外 CEX ([[exchanges/global-cex-top10-comparison]] Binance / Coinbase 等) は基本 maker/taker — 日本の販売所モデルは国際的に特異な構造
- 暗号資産 ETF 解禁・税制改正等で取引所モデルへのシフト圧力が継続
