---
title: 国内 VASP 親会社・株主構造マップ — 三分類 + 大手金融グループ系列
aliases:
  - JP VASP ownership map
  - 日本暗号資産交換業 親会社マップ
  - JVCEA member ownership taxonomy
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - ownership
  - corporate-structure
  - parent-company
sources:
  - https://jvcea.or.jp/member/
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
status: candidate
---

# 国内 VASP 親会社・株主構造マップ

## 概要

国内暗号資産交換業者 (VASP) は約 35 社 (2026-05 時点) が FSA 登録済みで、親会社属性により行動様式が大きく異なる。資本系列を 3 大分類で整理すると、(1) **上場会社系**（独立した持株会社・事業会社の子会社）、(2) **独立系**（親会社なし、創業者・経営陣保有）、(3) **海外系**（グローバル CEX の日本法人）に分かれ、それぞれ商品設計・コンプラ姿勢・流動性供給戦略が異なる。

## 大手金融 conglomerate 系（主要 5 群）

中核的な VASP 群はいずれも東証プライム上場の大手金融グループ傘下にある。

- **SBI 系**（親: SBI HD / 8473）— [[exchanges/jp-exchange-sbi-vc-trade]] + [[exchanges/jp-exchange-bi-fxtrade]] (BI FXTRADE = SBI FX トレード子) + [[exchanges/jp-exchange-sbi-securities]]（暗号資産デリバ提供）。グループ内で現物・FX・デリバを分業
- **GMO 系**（親: GMO Internet Group / 9449）— [[exchanges/jp-exchange-gmo-coin]]。インターネットインフラ事業の延長線として運営
- **Monex 系**（親: Monex Group / 8698）— [[exchanges/jp-exchange-coincheck]] + Monex 株式会社（暗号資産デリバ）。2018-04 の Coincheck 買収以降、米国 Nasdaq 上場の親 Coincheck Group 経由で展開
- **三井・JPX 機関向け系** — [[exchanges/jp-exchange-crypto-garage]]（DG ホールディングス × 東京短資 × 野村 HD 出資）、[[exchanges/jp-exchange-digital-asset-markets]]（JPX + 三井物産 + Monex 連合）。機関投資家・PTS 向け
- **bitFlyer Holdings 系** — [[exchanges/jp-exchange-bitflyer]] + [[exchanges/jp-exchange-custodiem]]（旧 FTX Japan、2024 取得）

## 上場会社系（上記以外）

- **メルカリ (4385)** → [[exchanges/jp-exchange-mercoin]]
- **楽天グループ (4755)** → [[exchanges/jp-exchange-rakuten-wallet]]
- **LINE ヤフー (4689)** → [[exchanges/jp-exchange-line-xenesis]]（2026-06 サービス終了予定）
- **セレス (3696)** → マーキュリー（[[exchanges/jp-exchange-mercury]]、CoinTrade 運営）
- **JN グループ HD (6634)** → [[exchanges/jp-exchange-zaif]]（2025-07 完全子会社化）

## 海外系（グローバル CEX 日本法人）

- **Coinbase Global (NASDAQ:COIN)** → [[exchanges/jp-exchange-coinbase-japan]]（2023 撤退、ライセンス保持）
- **Binance** → [[exchanges/jp-exchange-binance-japan]]（PayPay が 40% 出資）
- **OKX** → [[exchanges/jp-exchange-okcoin-japan]]（OKJ）
- **Gate.io** → [[exchanges/jp-exchange-gate-japan]]（旧 LastRoots）
- **OSL Group (HKEX:863)** → [[exchanges/jp-exchange-osl-japan]]（旧 CoinBest）
- **HashKey Group** → [[exchanges/jp-exchange-tokyo-hash]]
- **Backpack Exchange** → [[exchanges/jp-exchange-trek-labs-japan]]（Type 2 デリバ）
- **Saxo Bank A/S** → [[exchanges/jp-exchange-saxo-bank-japan]]（Type 2）
- **野村 HD スイス子会社** → [[exchanges/jp-exchange-laser-digital-japan]]（Type 2）

## 独立系（親会社なし）

経営陣・創業者が保有する非上場プライベート企業。資本市場アクセスを持たないため、規模拡大より特定セグメント深耕で生き残る戦略を取る。

- [[exchanges/jp-exchange-bitbank]] — 国内現物流動性 No.2 級、独立を貫く
- [[exchanges/jp-exchange-btcbox]] — 老舗、中国系流動性
- [[exchanges/jp-exchange-gaia]] — ニッチ
- [[exchanges/jp-exchange-backseat-exchange]] — 旧 coinbook、信託受益権型

## 行動様式の差

- **大手金融系**: コンプラ最優先・上場銘柄は親 IR でも開示・新規取扱は遅い
- **独立系**: 機動的に新規上場・破綻リスクは個別判断
- **海外系**: 親会社のグローバル流動性をブリッジするゲートウェイ的役割、ただし日本市場の自主規制 (JVCEA Type 1 銘柄リスト) に制約される

関連: [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/fsa-vasp-registration-system]] · [[exchanges/jp-vasp-incident-history]]

来源: FSA 公告（暗号資産交換業者登録一覧）, JVCEA member list, 上場親会社 EDINET 開示
