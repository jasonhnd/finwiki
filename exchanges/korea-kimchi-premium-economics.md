---
title: 韓国 Kimchi Premium 経済学 — Upbit/Bithumb 局所価格差の構造
aliases:
  - Korea kimchi premium
  - 韓国仮想通貨プレミアム
  - KRW BTC premium
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - korea
  - kimchi-premium
  - market-structure
  - arbitrage
sources:
  - https://upbit.com/
status: candidate
---

# 韓国 Kimchi Premium 経済学 — Upbit/Bithumb 局所価格差の構造

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/korea-cex-five-pillars-comparison|韓国 5 大 CEX 制度比較 — Upbit / Bithumb / Coinone / Korbit / GOPAX]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

「キムチプレミアム」(韓国語 김치 프리미엄) は韓国国内 CEX (Upbit/Bithumb 等) BTC 価格が海外 (Binance/Coinbase) 価格より 1-10% 高くなる現象。2017-2018 ピーク時は 40-60% 達成。KRW 法定通貨流出制約と韓国国内クリプト需要過熱の二重要因によって、規制差が価格に内在化された独特な市場構造。

## 構造的要因

- **資本規制**: 韓国 KRW 海外送金規制 · 個人年間 $5 万上限 · 暗号資産経由の arbitrage が外為法違反リスク
- **需要過剰**: 韓国 retail crypto 取引参加率は世界トップ級 (成人 15-20% 推定)
- **実名口座制限**: ISMS + 銀行 real-name 契約 5 社のみ KRW 取引可能 · 競合制限による寡占
- **法人口座規制**: 韓国法人 (Q1 2024 まで) は CEX 口座禁止 — リテール需要が過剰集中

## 数値変動

- **2017-12 〜 2018-01**: ピーク 40-60% (BTC バブル + KRW 引出制限の同時発生)
- **2021-04**: 20% 程度 (3 月の暗号資産課税議論で買い圧)
- **2024-2026**: 平時 1-5% · イベント時 10% 急騰

## arbitrage 戦略 + 制約

- **理論アービトラージ**: 海外で BTC 買 → 韓国送 → KRW 売 = 利確
- **実際制約**: KRW 海外送金禁止 · USDT/USDC 経由 → 銀行 KYC で stop
- **OTC ルート**: 韓国国内 OTC + 個人ネットワーク経由 (灰色)
- **法人 / 金融機関**: 規制免除条項利用 (限定的)

## 海外 vs 国内市場 含意

国内 CEX (日本) には Kimchi 現象なし — JPY 海外送金規制は弱く、暗号資産規制が統一されているため局所価格差が発生しない。中国元プレミアム (Tether OTC) は別構造で完全 OTC 化されている。韓国は「資本規制差を価格に内在化」した独特な市場であり、規制構造とリテール需要過熱が組み合わさった結果。

## 関連項目

- [[exchanges/korea-cex-five-pillars-comparison]]
- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/jvcea-spot-volume-statistics-analysis]]
- [[fintech/em-market-crypto-dollarization-pattern]]
- [[fintech/cross-border-sc-via-swift-api]]
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較マトリクス
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]] — cross-chain bridge × CEX 入出金（arbitrage ルート）
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — グローバル stablecoin 規制 5 極比較
