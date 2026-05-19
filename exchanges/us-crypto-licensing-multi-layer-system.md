---
title: 米国暗号資産取引業 ライセンス重層制度 — BitLicense / OCC Trust / 州 MTL / FinCEN MSB
aliases:
  - US crypto licensing system
  - NY BitLicense
  - OCC Trust Charter crypto
  - US state Money Transmitter License
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - united-states
  - regulation
  - bitlicense
  - mtl
sources:
  - https://www.dfs.ny.gov/virtual_currency_businesses
  - https://www.occ.gov/
  - https://www.fincen.gov/
status: candidate
---

# 米国暗号資産取引業 ライセンス重層制度

## 1. 制度概要

米国は連邦 + 50 州の重層規制構造を持ち、世界で最も複雑な暗号資産ライセンス制度を運用する。VASP (Virtual Asset Service Provider) 事業者は以下を組み合わせて取得する必要がある:

- **(a) 連邦 FinCEN MSB 登録** — AML/CFT 必須基盤
- **(b) 各州 MTL** (Money Transmitter License) **または OCC Federal Trust Charter** — 送金・カストディ業務
- **(c) NY 州営業時 BitLicense** — NY DFS が単独で課す厳格制度
- **(d) SEC / CFTC 個別規制** — 証券性・派生性で別途分岐

## 2. 4 ライセンス階層

- **FinCEN MSB**: 連邦 Money Services Business 登録。AML/CFT 報告義務。全 VASP 必須の基盤層
- **州 MTL**: 50 州個別取得。ほとんどの州で要求され、全米展開には最大 50 ライセンス必要。各州 net worth / bond / 報告基準が異なる
- **NY BitLicense**: 2015-06 NY DFS 制度。業界最厳と評価され取得社は約 30 社程度 (Coinbase / Gemini / bitFlyer USA / Circle 等)。Kraken は撤退
- **OCC Federal Trust Charter**: 連邦 trust bank 認可。Anchorage Digital が 2021-01 に米国初取得。州 MTL を 50 州免除可能で機関カストディの中核ライセンス

## 3. SEC vs CFTC 管轄競争

トークンが "証券" と判定されれば SEC 管轄 (Howey test 基準)、"コモディティ" と判定されれば CFTC 管轄 (BTC / ETH が代表)。判定不明瞭な状態が長年続いていたが、**CLARITY Act / FIT21** (2024 年下院通過) が二分明確化を試みている。証券取引所と認められる場合は ATS 登録または broker-dealer ライセンスも必要。

## 4. 主要事業者ライセンス組合せ

- **Coinbase** (Nasdaq: COIN) — BitLicense + 州 MTL 多数 + SEC 登録 broker
- **Kraken** — 州 MTL + FinCEN MSB · BitLicense 未取得 (NY 撤退)
- **Gemini** — BitLicense + NY Trust Charter
- **Anchorage Digital** — OCC Federal Trust Charter (米国初)
- **Circle** — 州 MTL + FinCEN MSB + 2025 年 OCC Trust Charter 取得 (USDC 発行体)

## 5. 国際比較

日本 FSA / JVCEA (単一連邦監督) や韓国 FSC / FIU (単一監督) と異なり、米国は連邦 + 州の二重監督構造で世界最複雑。規制コストは全米展開で数千万ドル規模に達し、結果として大手数社へのエコシステム集中が進行している。香港 SFC や EU MiCA のような統合フレームワークとは対照的な「フラグメント型」モデル。

---

## Cross-links

- [[exchanges/global-cex-top10-comparison]] — Coinbase / Kraken 等のグローバル比較
- [[exchanges/global-institutional-custody-five-pillars]] — Anchorage OCC Trust 位置付け
- [[exchanges/fsa-vasp-registration-system]] — 日本制度比較
- [[exchanges/korea-cex-five-pillars-comparison]] — 韓国制度比較
- [[exchanges/hk-sfc-vasp-licensing-overview]] — 香港制度比較
- [[fintech/cftc-sec-crypto-jurisdiction]] — SEC/CFTC 管轄競争詳細
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage]] — OCC Trust の連邦アービトラージ構造
