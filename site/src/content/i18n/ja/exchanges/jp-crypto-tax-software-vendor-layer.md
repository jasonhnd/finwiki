---
source: exchanges/jp-crypto-tax-software-vendor-layer
source_hash: d1a6172b32416041
lang: ja
status: machine
fidelity: ok
title: "国内暗号資産税務ソフトウェアベンダー層 (Cryptact / Gtax / CryptoLinc / Coinly 等)"
translated_at: 2026-06-02T12:19:04.228Z
---

# 国内暗号資産税務ソフトウェアベンダー層 (Cryptact / Gtax / CryptoLinc / Coinly 等)

## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。比較・対照の文脈では [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産税制詳細]]、より広いシステム上・規制上の境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] とあわせて読む。

## 概要

国内個人投資家の暗号資産損益は**雑所得 (総合課税・最高税率 55%)** として申告が必要であり、複数 VASP 口座 + 海外取引所 + DeFi + NFT 利用が混在するケースでは手計算が現実的に不可能。これを解決するための**暗号資産税務 SaaS** 市場が 2018 以降急成長。国税庁 (NTA) も VASP に対し顧客取引情報の支払調書提出を 2023 以降強化、税務処理の自動化ニーズは益々増大。**Cryptact / Gtax (旧 Aerial Partners 系) / CryptoLinc (旧 GxC) / Koinly (海外大手の日本対応)** が国内 4 強を形成。

## 国内主要ベンダー

### **Cryptact (株式会社クリプタクト)**

- **設立**：2018 年
- **本社**：東京
- **主要プロダクト**：「クリプタクト」(個人向け税務計算 + ポートフォリオ管理)、機関投資家向け「Cryptact for Business」
- **強み**：80+ 取引所対応、DeFi (Uniswap / Aave 等) + NFT + L2 (Arbitrum / Optimism / Base / Polygon) のトランザクション解析、NEM/Symbol 等の国内 alt 対応
- **会計事務所連携**：会計士・税理士向け B2B プラン
- **公式**: https://www.cryptact.com/

### **Gtax (株式会社 Aerial Partners 提供)**

- **設立**：2017 年 (Aerial Partners 創業)
- **本社**：東京
- **主要プロダクト**：「Gtax」(個人向け税務計算)、「Guardian」(法人向け暗号資産会計)
- **強み**：会計士法人 Aerial Partners が運営、税理士監修。**法人向け会計連携 (freee / マネーフォワード等)** に強み
- **特徴**：移動平均法 / 総平均法の選択対応、暦年 + 法人事業年度ベース計算切替

### **CryptoLinc (旧 GxC / 株式会社 GxC)**

- **本社**：東京
- **主要プロダクト**：「CryptoLinc」(個人 + 法人向け)
- **強み**：機関投資家・暗号資産事業者向け実務 (大量トランザクション + 連結会計対応)
- **特徴**：JICPA 業種別委員会実務指針第 61 号への対応強化、監査法人 ([[exchanges/japan-crypto-audit-firm-landscape|国内クリプト監査法人ランドスケープ]]) との連携

### **Koinly (海外大手の日本対応)**

- **本拠**：英国
- **特徴**：JPY 対応 + 国内取引所統合 + DeFi 全般対応。**国内 4 大の最有力競合**として個人層で利用拡大
- **強み**：グローバル展開 (米・英・豪・カナダ等で大手) による DeFi / NFT 取引解析の網羅性

### **その他**
- **CRYPTO ZAIMU (株式会社 Coin Tax)** — 中規模シェア
- **TaxBit (米) / CoinTracker (米) / TokenTax (米)** — 米系大手、日本ユーザ向け対応は限定的

## 主要機能 (各社共通)

1. **取引所 API / CSV 連携**：bitFlyer / GMO コイン / SBI VC Trade / Coincheck / bitbank / BitTrade 等の主要 VASP 自動取込
2. **DeFi 取引解析**：MetaMask / OKX Wallet 等の wallet address 入力 → on-chain トランザクション自動分類
3. **NFT 売買解析**：OpenSea / Magic Eden / Blur 等の取引解析
4. **移動平均法 / 総平均法切替**：国税庁通達に基づく取得価額計算
5. **損益計算 + 申告書類出力**：確定申告書添付用 PDF / e-Tax 連携
6. **複数年度比較**：繰越控除 (法人) / 損益通算可否判定
7. **支払調書照合**：VASP 発行支払調書との突合機能 (2023 強化)
8. **法人向け期末時価評価**：法人税法 61 条対応 (2024 改正自社発行・第三者保有トークン除外を反映)

## 税制改正との連動

国内暗号資産税制は近年大きく変動 → [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産税制詳細]]:

- **2024 年度** — 法人保有暗号資産 (自社発行 + 第三者発行) の期末時価評価除外 ([[exchanges/jcba-japan-crypto-business-association|JCBA]] + [[exchanges/jvcea-self-regulatory-overview|JVCEA]] 連名要望が結実)
- **個人の分離課税化** — 業界長年の要望、まだ実現せず (雑所得・最高 55%・損益通算不可・3 年繰越控除不可)
- **NFT 課税** — 二次流通の取扱、棚卸資産 / 雑所得の区分判定が論点

各ベンダーは改正のたびにロジックを更新、ユーザ向け解説記事を公開。

## 機関投資家・法人向け実務

法人向けは **CryptoLinc + Guardian (Gtax 法人版)** が双璧。**[[exchanges/japan-crypto-audit-firm-landscape|Big4 監査法人]]** との連携で監査対応データを自動生成。**[[exchanges/japan-crypto-law-firm-landscape|大手法律事務所]]** の税務助言 + ベンダーの集計データ + 監査法人の保証 という 3 段スキームが定着。

## DeFi / Web3 ユーザ特有の課題

- **NFT mint → flip → swap** の連続取引は損益認識タイミングが論点
- **流動性提供 (LP)** の組入時 / 解除時の損益、エアドロップ受領時の評価
- **ステーキング報酬** (→ [[exchanges/jp-crypto-staking-as-a-service-operators|StaaS 事業者層]]) の受領時時価
- **クロスチェーンブリッジ** ([[exchanges/jp-crypto-on-off-ramp-bridge-layer|on/off ramp 層]] + L2 ブリッジ) のラップ / アンラップ判定

各ベンダーは継続的にこれらの自動分類ロジックを更新。

## 関連項目

- [[exchanges/jp-crypto-asset-taxation-detailed]] — 税制詳細
- [[exchanges/japan-crypto-audit-firm-landscape]] — 監査法人
- [[exchanges/japan-crypto-law-firm-landscape]] — 法律事務所
- [[exchanges/jp-crypto-staking-as-a-service-operators]] — ステーキング
- [[exchanges/jcba-japan-crypto-business-association]] — JCBA 税制提言
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA 登録
- [[fintech/japan-financial-regulation]] — 上位金融規制

## 出典

- Cryptact 公式: https://www.cryptact.com/
- Gtax (Aerial Partners): https://crypto-city.net/
- CryptoLinc 公式: https://www.cryptolinc.com/
- Koinly 公式: https://koinly.io/
- 国税庁 暗号資産関係: https://www.nta.go.jp/
