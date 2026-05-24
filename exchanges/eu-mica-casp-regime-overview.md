---
title: EU MiCA CASP (Crypto-Asset Service Provider) regime
aliases:
  - EU MiCA CASP licensing
  - Markets in Crypto-Assets Regulation
  - EU 暗号資産サービス事業者制度
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - eu
  - mica
  - regulation
  - benchmark
sources:
  - https://www.esma.europa.eu/policy-activities/crypto-assets
status: candidate
---

# EU MiCA CASP (Crypto-Asset Service Provider) regime

## 1. 制度概要

MiCA (Markets in Crypto-Assets Regulation, Regulation (EU) 2023/1114) は 2023-06 採択 → 2024-06 ART/EMT (Asset-Referenced Token / E-Money Token) Stablecoin 規制部分施行 → **2024-12-30 CASP 完全施行**。EU 27 ヵ国を統一する世界初の包括的暗号資産規制枠組み。既存 NCAs (National Competent Authorities — 各国規制機関、独 BaFin / 仏 AMF / 蘭 AFM / 愛 Central Bank 等) が CASP 認可を発行し、**ESMA** (European Securities and Markets Authority) が EU 全体の監督・調整を担う二層構造。1 ヵ国認可で EU 全域 passporting 可能なのが米国 50 州 MTL との決定的違い。

## 2. CASP ライセンス 10 区分 (MiCA Article 60)

CASP は以下 10 サービスから取得対象を申請する:

- **Custody and administration of crypto-assets** (カストディ)
- **Operation of a trading platform for crypto-assets** (取引所運営)
- **Exchange of crypto-assets for funds** (法定通貨両替)
- **Exchange of crypto-assets for other crypto-assets** (暗号資産間両替)
- **Execution of orders on behalf of clients** (注文執行)
- **Placing of crypto-assets** (発行引受・販売)
- **Reception and transmission of orders** (注文取次)
- **Advice on crypto-assets** (投資助言)
- **Portfolio management of crypto-assets** (ポートフォリオ運用)
- **Transfer services for crypto-assets** (送金サービス)

## 3. 主要保有事業者 (2025-2026)

- **Coinbase EU** — Luxembourg CSSF 経由 EU passporting (2024-04 申請 → 2025-02 認可)
- **Kraken EU** — Ireland Central Bank 経由
- **Crypto.com EU** — Malta MFSA 経由
- **Bitstamp** — Luxembourg CSSF (老舗欧州拠点)
- **Bitpanda** — Austria FMA (リテール志向)
- **Binance** — France AMF 取得 + EU 多国展開 (CZ 体制下で慎重戦略、米司法省和解後の再構築)

ハブ国は Luxembourg / Ireland / France / Malta / Austria が主軸で、過去の Estonia 中心構造から大幅シフト。

## 4. 主要規制要件

- **資本金**: €50K (注文取次・助言) / €125K (両替・執行) / €150K (取引所・カストディ) の 3 段階
- **顧客資産分別管理**: 信託または segregation 義務、ホット・コールド比率規定なし (NCA 裁量)
- **AML/CFT**: 5AMLD + EU Travel Rule (Regulation 2023/1113, Article 73 連動) で €1,000 超送金に KYC データ伝達義務
- **Stablecoin (ART/EMT)**: 別途認可必須 (MiCA Title III/IV)。発行体は credit institution または EMI 認可必須
- **DORA 連携**: Digital Operational Resilience Act との連携で ICT third-party 監査・サイバー耐性義務

## 5. 国際比較

米国の SEC/CFTC 分断 + 50 州 MTL のフラグメント型に対し、EU は単一 passporting で統一性が圧倒的。日本 (FSA + JVCEA 二重) や韓国 (FSC + DAUC) は連邦単一監督だが国内限定。EU の NCA + ESMA 統一は **香港 SFC** や **シンガポール MAS** よりも広域カバレッジを持ち、グローバル CEX が EU 拠点を競って取得する動機を作っている。UAE VARA との競争関係では「規制の明確性」で EU 優位、「税制とスピード」で UAE 優位の住み分け。

---

## Cross-links

- [[exchanges/us-crypto-licensing-multi-layer-system]] — 米国フラグメント型比較
- [[exchanges/hk-sfc-vasp-licensing-overview]] — 香港制度比較
- [[exchanges/sg-mas-dpt-licensing-overview]] — シンガポール制度比較
- [[exchanges/fsa-vasp-registration-system]] — 日本制度比較
- [[exchanges/global-cex-top10-comparison]] — Coinbase / Kraken / Crypto.com のグローバル位置付け
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule 国内実装比較
- [[fintech/mica-overview]] — MiCA 全体構造
- [[fintech/mica-emt-art-subcategories-deep-dive]] — ART/EMT Stablecoin 認可枠組み
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較マトリクス
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — グローバル stablecoin 規制 5 極比較
- [[fintech/mica-cross-border-implications]] — MiCA cross-border 影響分析
