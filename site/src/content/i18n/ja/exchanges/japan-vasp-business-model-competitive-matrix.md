---
source: exchanges/japan-vasp-business-model-competitive-matrix
source_hash: a51409fb3b7c29e1
lang: ja
status: machine
fidelity: ok
title: "日本 VASP ビジネスモデル競合マトリクス — 39 社の事業セグメント・収益構造・差別化軸比較"
translated_at: 2026-06-02T12:19:04.198Z
---
﻿
# 日本 VASP ビジネスモデル競合マトリクス — 39 社の事業セグメント・収益構造・差別化軸比較

## 要約

日本 FSA 登録の暗号資産交換業者 (VASP) は 2026-05 時点で約 27-39 社 (JVCEA 会員区分 + 電子決済手段等取引業を含めた延べ数)。各社は **(1) 現物販売所 / (2) 現物取引所 / (3) マージン / レバレッジ / (4) 暗号資産デリバ (金商法 1 種) / (5) カストディ / (6) 銘柄上場特化 / (7) ステーキング・レンディング / (8) IEO / (9) 機関向け OTC / (10) リテール販売所** という 10 のビジネスモデル軸で異なるポジションを取る。**販売所スプレッド** 収益モデルが国内市場の主軸である一方、海外系日本法人 (Binance / OKJ / OSL 等) は **取引所板厚** 訴求、Crypto Garage / Digital Asset Markets 等は **機関向け OTC + RWA** で差別化する。本マトリクスは [[exchanges/jp-vasp-parent-company-map|親会社・株主構造マップ]] と [[exchanges/jp-crypto-exchange-overview|jp-crypto-exchange-overview]] を出発点に、39 社を 10 軸で側並び比較する。

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。[[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]]（規模軸）/ [[exchanges/jp-vasp-parent-company-map|親会社マップ]]（資本系列軸）/ [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]（規制軸）に対応する **事業モデル軸 (business-model-axis)** のページである。[[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] とあわせて読むと技術レイヤー、[[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]] とあわせて読むとトークノミクス面が分かる。上場自主規制の詳細は [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]]、インシデント履歴は [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]] に整理している。

## このマトリクスが重要な理由

- 日本 VASP 市場は **30 社規模で収益・取引量が大きく偏る** (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank の top 5 で口座数の 70%+ シェア推定)。残りの 25-30 社は **特定セグメント深耕** (機関 OTC / IEO / RWA / デリバ専業 / 海外系流動性ゲートウェイ) で生き残る。
- **収益モデルの違いは大きく営業利益率を左右する**:
  - 販売所スプレッド (国内主流) → 営業利益率 30-50%
  - 取引所板厚 (海外流動性ブリッジ) → 営業利益率 5-15%
  - デリバ (金商法 1 種) → 営業利益率 20-40%
  - 機関 OTC / RWA → 営業利益率 不安定 (大口取引依存)
- **JVCEA 銘柄審査** が銘柄数を絞るため、海外系日本法人 (Binance / OKJ / OSL / Bybit Japan 計画中) は **グローバル親会社の銘柄ラインナップを日本市場に持ち込めない構造**。これが「海外大手の日本市場参入インセンティブを抑制する規制 moat」になっている。
- 二大新規セグメント:
  - **電子決済手段等取引業 (ECISP)** = SBI VC Trade 第00001号で USDC 取扱開始 (2025-03)、他社追随見込
  - **IEO** = Coincheck IEO が国内初導入、その後 GMO Coin / bitbank が追随

## 事業者別セクション

### A. 独立系老舗 + bitFlyer Holdings 系 (現物 + デリバ主軸)

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** (関東財務局 第00003号、JVCEA #1002)
  - **モデル**: 現物販売所 + 取引所 (Lightning Spot) + デリバ (Lightning FX) + クレカ (bitFlyer クレカ、アプラス発行)
  - **収益軸**: BTC 取引量 国内首位継続 + デリバ手数料 + bitFlyer クレカ from アプラス
  - **2025-12 期決算**: 売上 135 億円、営業利益 42 億円
  - **差別化**: Lightning FX デリバの板厚 + マルチ法域展開 (US 子 bitFlyer USA、欧子 bitFlyer Europe SAS)
  - **2024 動向**: [[exchanges/jp-exchange-custodiem|Custodiem]] (旧 FTX Japan) を 2024 取得 → デリバ補強
- **[[exchanges/jp-exchange-bitbank|bitbank]]** (FSA 登録、独立系)
  - **モデル**: 現物取引所 (板取引特化) + ステーキング + IEO
  - **収益軸**: 取引手数料 (Maker rebate model)
  - **差別化**: 国内現物板取引量 No.2 級、独立を貫く非上場プライベート
  - **戦略**: IEO 早期参入 + リテール取引所板厚で勝負
- **[[exchanges/jp-exchange-btcbox|BTCBOX]]** (独立系老舗)
  - **モデル**: 現物取引所 (BTC 中心) + 中国系流動性
  - **差別化**: 中国系ユーザーへの英語・中国語サポート

### B. 金融グループ系 (現物 + デリバ + ステーキング 全方位)

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** (関東財務局 第00011号、JVCEA #1011)
  - **モデル**: 現物販売所 + デリバ (3247 号、金商法 1 種) + ECISP USDC (国内 ECISP 第00001号) + ステーキング + USDC レンディング (2026-03 国内初)
  - **収益軸**: 販売所スプレッド + デリバ手数料 + USDC レンディング金利
  - **差別化**: **日本唯一の 3 種牌照同時保有** (暗号資産交換業 + 金商法 1 種 + ECISP)。SBI Circle Holdings 50/50 JV (2025-08) で USDC 国内独占分销
  - **戦略**: USD-JPY SC 跨境合规通道のキングメーカー化 ([[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環]] 参照)
- **[[exchanges/jp-exchange-gmo-coin|GMO Coin]]** (関東財務局 第00006号、JVCEA #1006)
  - **モデル**: 現物販売所 + 取引所 + レバレッジ取引 + ステーキング + 暗号資産レンディング
  - **収益軸**: 販売所スプレッド (国内最大級収益エンジン) + レバレッジ手数料
  - **差別化**: GMO インターネットグループ (9449) のインフラ事業延長で、テクニカルスタックの自社開発
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** (関東財務局 第00014号、JVCEA #1017、Monex 系)
  - **モデル**: 現物販売所 + 取引所 + IEO 国内初導入 + NFT マーケットプレイス (Coincheck NFT)
  - **収益軸**: 販売所スプレッド + IEO 上場手数料 + NFT 取引手数料
  - **差別化**: Coincheck Group N.V. (Nasdaq 上場 CNCK/CNCKW) 経由でグローバル資本市場アクセス
  - **戦略**: NFT × IEO 経由で Z 世代取得
- **[[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]** (楽天グループ 4755 系)
  - **モデル**: 現物販売所 + 楽天ポイント連動 (楽天経済圏ブリッジ)
  - **差別化**: 楽天 ID + 楽天銀行 + 楽天証券 連動で生活全方位ブリッジ
- **[[exchanges/jp-exchange-mercoin|Mercoin]]** (メルカリ 4385 系)
  - **モデル**: 現物販売所 + メルペイ連動 (フリマ売上ブリッジ)
  - **差別化**: メルカリ売上の暗号資産購入直結ファネル

### C. 海外系日本法人 (グローバル流動性ブリッジ)

- **[[exchanges/jp-exchange-binance-japan|Binance Japan]]** (JVCEA Type 1、PayPay 40% 出資)
  - **モデル**: 現物販売所 + 取引所 + ステーキング (国内銘柄に限定)
  - **差別化**: グローバル Binance 親の流動性をブリッジ、ただし JVCEA 銘柄リストで制約
  - **戦略**: 2022 サクラエクスチェンジ買収で登録取得、PayPay (Z HD 系) 出資で国内決済連携
- **[[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]** (関東財務局登録あり、2023 撤退・ライセンス保持)
  - **モデル**: 2023 撤退で dormant 状態
  - **戦略**: ライセンス保持で将来再参入オプション (現状休止)
- **[[exchanges/jp-exchange-okcoin-japan|OKCoin Japan (OKJ)]]** (OKX 系)
  - **モデル**: 現物販売所 (デリバなし)
  - **差別化**: 別法人として Type 1 spot 運営 (海外 OKX の deriv は国内未提供)
- **[[exchanges/jp-exchange-osl-japan|OSL Japan]]** (HKEX:863 系、旧 CoinBest)
  - **モデル**: 現物販売所 + 取引所
  - **差別化**: HK SFC ライセンス保有グローバル親の機関流動性接続
- **[[exchanges/jp-exchange-gate-japan|Gate Japan]]** (Gate.io 系、旧 LastRoots)
  - **モデル**: 現物販売所
- **[[exchanges/jp-exchange-tokyo-hash|Tokyo Hash]]** (HashKey Group 系)
  - **モデル**: 機関向け OTC 中心
- **[[exchanges/jp-exchange-trek-labs-japan|Trek Labs Japan]]** (Backpack Exchange 系、Type 2 デリバ)
- **[[exchanges/jp-exchange-saxo-bank-japan|Saxo Bank Japan]]** (Saxo Bank A/S 系、Type 2 デリバ)

### D. 機関向け・特殊セグメント (RWA / OTC / デリバ専業)

- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]** (DG ホールディングス × 東京短資 × 野村 HD 出資)
  - **モデル**: 機関向け OTC + Liquid Network 関連事業 + ST 関連
  - **差別化**: 大手金融機関 (証券会社・信託銀行) 向けインフラ提供
- **[[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]]** (JPX + 三井物産 + Monex 連合)
  - **モデル**: 機関投資家・PTS 向け取引所
  - **差別化**: JPX バックボーンで証券会社接続
- **[[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]** (野村 HD スイス子)
  - **モデル**: 機関向け OTC + 暗号資産デリバ (JVCEA Type 2)
  - **差別化**: 野村グループの institutional crypto fund + BTC ファンド (2026-01 設定)
  - **関連**: [[exchanges/jp-custody-komainu|Komainu]] とは野村系で Board 共有
- **[[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]** (DMM 系、2024-05 Lazarus ハック → 廃業)
  - **モデル**: 2024-05 ハック後に自主廃業、顧客資産 100% 補填 ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|詳細]])
- **[[exchanges/jp-exchange-sbi-securities|SBI 証券]]** (SBI HD 系、暗号資産デリバ提供)
  - **モデル**: 暗号資産デリバ (金商法 1 種、SBI VC Trade の現物と分業)
- **[[exchanges/jp-exchange-monex|Monex]]** (Monex Group 8698 系、暗号資産デリバ)
  - **モデル**: デリバ専業 (Coincheck の現物と分業)
- **[[exchanges/jp-exchange-traders-securities|Traders Securities]]** (デリバ専業)
- **[[exchanges/jp-exchange-money-partners|Money Partners]]** (デリバ専業)
- **[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]]**
- **[[exchanges/jp-exchange-goldenway-japan|Goldenway Japan]]**
- **[[exchanges/jp-exchange-finx-jcrypto|FinX/JCrypto]]**

### E. 中小・ニッチ系 (個別深耕)

- **[[exchanges/jp-exchange-zaif|Zaif]]** (JN グループ HD 6634 完全子会社、2025-07)
- **[[exchanges/jp-exchange-bittrade|BitTrade]]** (Hbg + 旧 HuobiJapan)
- **[[exchanges/jp-exchange-backseat-exchange|Backseat Exchange]]** (旧 coinbook、信託受益権型)
- **[[exchanges/jp-exchange-gaia|Gaia]]** (ニッチ)
- **[[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]]** (SBI FX トレード 子)
- **[[exchanges/jp-exchange-mercury|Mercury]]** (セレス 3696 系、CoinTrade 運営)
- **[[exchanges/jp-exchange-line-xenesis|LINE Xenesis]]** (LINE ヤフー 4689 系、2026-06 サービス終了予定)
- **[[exchanges/jp-exchange-coinhub|CoinHub]]**
- **[[exchanges/jp-exchange-gaudiy|Gaudiy]]**
- **[[exchanges/jp-exchange-sblox|S.BLOX]]** (旧ディーカレット = ソニーグループ傘下、暗号資産交換業)

### F. JPYC・stablecoin 専業 (規制カテゴリ独立)

- **[[exchanges/jp-exchange-jpyc|JPYC]]** (関東財務局 第00099号 資金移動業)
  - **モデル**: 円ステーブルコイン JPYC 発行・換金専業 (暗号資産交換業 **非**)
  - **差別化**: 唯一の資金移動業者型 SC 発行体

## 大型比較マトリクス表

| 業者名 | 親 | FSA 登録番号 | JVCEA 区分 | 現物販売所 | 現物取引所 | レバレッジ | デリバ (金商法 1 種) | カストディ | ステーキング | IEO | 機関 OTC | リテール販売所 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **bitFlyer** | bitFlyer Holdings | 第00003号 | 第一種 #1002 (現物 + デリバ) | ◎ Lightning Spot | ○ Lightning | ○ Lightning FX | ○ | ○ | △ | ✕ | △ | ◎ |
| **Coincheck** | Monex Group (8698) | 第00014号 | 第一種 #1017 (現物のみ) | ◎ | ○ | ✕ | ✕ | ○ | ○ | **◎ 国内初** | ✕ | ◎ |
| **GMO Coin** | GMO Internet (9449) | 第00006号 | 第一種 #1006 | ◎ | ○ | ○ | ○ | ○ | ○ | △ | ✕ | ◎ |
| **SBI VC Trade** | SBI HD (8473) | 第00011号 (+ ECISP 第00001号) | 第一種 #1011 (3 牌照) | ○ | ○ | ✕ | ○ (3247) | ○ | ○ | △ | △ | ○ |
| **bitbank** | 独立系 | (登録あり) | 第一種 | △ | ◎ Maker-rebate | ✕ | ✕ | ○ | ○ | ○ | ✕ | △ |
| **BTCBOX** | 独立系 | (登録あり) | 第一種 | △ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Rakuten Wallet** | 楽天 (4755) | (登録あり) | 第一種 | ◎ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ◎ |
| **Mercoin** | メルカリ (4385) | (登録あり) | 第一種 | ◎ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ◎ |
| **Binance Japan** | Binance Global (PayPay 40%) | (登録あり) | 第一種 | ◎ | ○ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ◎ |
| **Coinbase Japan** | Coinbase Global (COIN) | (登録あり、dormant) | 第一種 | (休止) | (休止) | ✕ | ✕ | (休止) | ✕ | ✕ | ✕ | (休止) |
| **OKCoin Japan (OKJ)** | OKX Group | (登録あり) | 第一種 | ○ | ○ | ✕ | ✕ | ○ | △ | ✕ | ✕ | ○ |
| **OSL Japan** | OSL Group (HKEX:863) | (登録あり) | 第一種 | ○ | ○ | ✕ | ✕ | ○ | △ | ✕ | △ | ○ |
| **Gate Japan** | Gate.io | (登録あり) | 第一種 | ○ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ○ |
| **Tokyo Hash** | HashKey Group | (登録あり) | 第一種 | ✕ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Crypto Garage** | DG HD + 東京短資 + 野村 HD | (登録あり) | 第一種 | ✕ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Digital Asset Markets** | JPX + 三井物産 + Monex | (登録あり) | 第一種 | ✕ | ○ (機関 PTS) | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Laser Digital Japan** | 野村 HD (スイス子) | (登録あり) | 第二種 (デリバ) | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ◎ | ✕ |
| **SBI 証券** | SBI HD | (デリバ業) | (デリバ) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Monex** | Monex Group | (デリバ業) | (デリバ) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Trek Labs Japan** | Backpack Exchange | (登録あり) | 第二種 (デリバ) | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ○ | ✕ |
| **Saxo Bank Japan** | Saxo Bank A/S | (登録あり) | 第二種 (デリバ) | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ○ | ✕ |
| **DMM Bitcoin** | DMM | (廃業 2024-12) | (廃業) | (廃業) | (廃業) | (廃業) | (廃業) | (廃業) | ✕ | ✕ | ✕ | (廃業) |
| **Zaif** | JN グループ HD (6634) | (登録あり) | 第一種 | ○ | ○ | ✕ | ✕ | ○ | ✕ | △ | ✕ | ○ |
| **BitTrade** | Hbg (旧 Huobi Japan) | (登録あり) | 第一種 | ○ | ○ | ✕ | ✕ | ○ | ○ | △ | ✕ | ○ |
| **Backseat Exchange** | (独立系、旧 coinbook) | (登録あり) | 第一種 | ○ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | △ | ○ |
| **LINE Xenesis** | LINE ヤフー (4689) | (登録あり) | 第一種 | (2026-06 終了) | (終了) | ✕ | ✕ | (終了) | ✕ | ✕ | ✕ | (終了) |
| **JPYC** | JPYC 株式会社 (独立系) | 第00099号 (資金移動業) | 第一種 #1042 (資金移動業) | (非該当) | (非該当) | (非該当) | (非該当) | (非該当) | ✕ | ✕ | ✕ | ✕ |
| **S.BLOX** | ソニーグループ | (登録あり) | 第一種 | ○ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | △ | ○ |
| **Mercury (CoinTrade)** | セレス (3696) | (登録あり) | 第一種 | ○ | ✕ | ✕ | ✕ | ○ | ○ (Fireblocks インフラ) | ✕ | ✕ | ○ |
| **BI FXTRADE** | SBI FX トレード | (登録あり) | 第一種 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | △ | △ |
| **CoinHub** | 独立系 | (登録あり) | 第一種 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Gaudiy** | 独立系 | (登録あり) | 第一種 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Gaia** | 独立系 | (登録あり) | 第一種 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **DMM.com Securities** | DMM | (デリバ業) | (デリバ) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Money Partners** | 独立系 | (デリバ業) | (デリバ) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Goldenway Japan** | Goldenway 系 | (デリバ業) | (デリバ) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Traders Securities** | 独立系 | (デリバ業) | (デリバ) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **FinX/JCrypto** | 独立系 | (登録あり) | 第一種 | △ | △ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |

凡例: ◎ = 主力戦略軸 / ○ = 提供 / △ = 限定的・準備中 / ✕ = 提供なし

## 収益モデル × ターゲット 二軸クロス分析

### 収益モデル別グループ

1. **販売所スプレッド主軸** (営業利益率 30-50%): bitFlyer / Coincheck / GMO Coin / Rakuten Wallet / Mercoin / Binance Japan / SBI VC Trade (一部)
2. **取引所手数料主軸** (営業利益率 5-15%): bitbank / OKJ / OSL / Binance Japan (一部)
3. **デリバ手数料主軸** (営業利益率 20-40%): bitFlyer (Lightning FX) / GMO Coin (レバ) / SBI 証券 / Monex / Trek Labs Japan / Saxo Bank Japan / Laser Digital Japan
4. **機関 OTC + RWA** (大口取引依存): Crypto Garage / Digital Asset Markets / Tokyo Hash / Laser Digital Japan
5. **stablecoin / EPI** (新興セグメント): JPYC (資金移動業者型) / SBI VC Trade (ECISP USDC)
6. **NFT + IEO** (新興): Coincheck (Coincheck NFT + IEO 国内初) / bitbank (IEO)

### ターゲット顧客別

- **個人リテール深耕**: bitFlyer / Coincheck / GMO Coin / Rakuten Wallet / Mercoin / Binance Japan / OKJ / Gate Japan
- **機関投資家深耕**: Crypto Garage / Digital Asset Markets / Tokyo Hash / Laser Digital Japan / Saxo Bank Japan
- **企業間決済 (B2B)**: SBI VC Trade (USDC) + JPYC (資金移動業)
- **証券会社 PTS / RWA**: Digital Asset Markets / Crypto Garage

## 競争構造の差別化軸

### 銘柄数競争

- **国内最多銘柄**: SBI VC Trade (約 40 銘柄) > Coincheck > Binance Japan > GMO Coin
- **JVCEA 銘柄審査制約**: グローバル CEX が世界中で扱う 700+ 銘柄 (Binance) を国内で 30-40 銘柄程度に絞られる構造制約
- **ECISP 銘柄拡大**: SBI VC Trade の USDC 取扱以降、他 ECISP 取得者が同様に USDC / PYUSD / EURC 拡大予定

### スプレッド競争

- 国内販売所スプレッドは 0.5-3% レンジで業者・銘柄により差。bitFlyer / Coincheck / GMO Coin / Rakuten Wallet がリテール販売所主軸。
- 取引所板の Maker rebate モデルは bitbank が最も明確 (-0.02% Maker rebate)。

### 上場速度競争

- **新規上場速度**: 独立系 (bitbank / S.BLOX) が機動的、大手金融系 (SBI / GMO / 楽天 / メルカリ) は親会社 IR 開示と JVCEA 銘柄審査で遅い
- **IEO**: Coincheck IEO 国内初導入後 (2021)、GMO Coin / bitbank が追随

### グローバル流動性ブリッジ

- **海外 OB (order book) 接続**: Binance Japan は親会社 Binance Global の流動性ブリッジ訴求、OKJ は OKX デリバ未提供で限定的
- **国内 OTC 機関**: Crypto Garage / Tokyo Hash / Laser Digital Japan が直接的に海外マーケットメイカーとの OTC 接続

## 境界事例

### B1. JPYC vs SBI VC Trade — 異なる規制カテゴリの SC ビジネス

- JPYC = 資金移動業者型 SC 発行体 (暗号資産交換業 非)
- SBI VC Trade = ECISP 経由 USDC 取扱業者 + 暗号資産交換業 + 金商法 1 種
- 両者は法的に異なるが、stablecoin ビジネスとして競合関係 ([[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] 参照)

### B2. Coinbase Japan の dormant 状態 — 撤退でなく休止のオプション保持

- Coinbase Japan は 2018 FSA 登録 → 2023 撤退、ただしライセンス保持。将来再参入オプションを残す。
- 一方 DMM Bitcoin は 2024-12 廃業確定で復活なし。

### B3. LINE Xenesis 2026-06 サービス終了 — 大手系の収益難証拠

- LINE ヤフー 4689 系の LINE Xenesis は 2026-06 サービス終了予定。LINE 経済圏内で十分な収益化に至らなかった事例。

### B4. デリバ専業 vs 現物専業の二極化

- デリバ専業: SBI 証券 / Monex / Trek Labs Japan / Saxo Bank Japan / DMM.com Securities / Money Partners / Traders Securities / Goldenway Japan / Laser Digital Japan
- 現物専業 (デリバなし): Coincheck / Rakuten Wallet / Mercoin / OKJ / Gate Japan / S.BLOX / Mercury / Backseat
- 両方提供: bitFlyer / SBI VC Trade / GMO Coin / Binance Japan

### B5. JVCEA 第二種会員 (デリバ専業) の位置付け

- JVCEA は会員区分として「第一種 (暗号資産交換業)」と「第二種 (暗号資産デリバ取引業)」が並列。Laser Digital Japan / Trek Labs Japan / Saxo Bank Japan が第二種で運営。
- 第二種は現物販売所 / 取引所を持たないため、収益構造はデリバ手数料 + OTC のみ。

### B6. 親会社上場 vs 非上場の透明性差

- 上場親会社 (bitFlyer Holdings は非上場、Coincheck = Nasdaq、GMO Internet = 東証プライム、SBI HD = 東証プライム、楽天 = 東証プライム、メルカリ = 東証プライム、Monex = 東証プライム、JN HD = 東証スタンダード) は IR 開示で財務情報入手可能。
- 非上場独立系 (bitbank / BTCBOX / Gaia 等) は財務情報入手困難で、JVCEA 月次顧客資産分別管理状況提出のみが入手ルート。

## 関連項目

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-crypto-exchange-overview|jp-crypto-exchange-overview]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]]
- [[exchanges/jp-vasp-parent-company-map|VASP 親会社マップ]]
- [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]]
- [[exchanges/jp-exchange-bitflyer|bitFlyer]]
- [[exchanges/jp-exchange-coincheck|Coincheck]]
- [[exchanges/jp-exchange-gmo-coin|GMO Coin]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[exchanges/jp-exchange-bitbank|bitbank]]
- [[exchanges/jp-exchange-binance-japan|Binance Japan]]
- [[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]
- [[exchanges/jp-exchange-okcoin-japan|OKJ]]
- [[exchanges/jp-exchange-osl-japan|OSL Japan]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]
- [[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]
- [[exchanges/jp-exchange-mercoin|Mercoin]]
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]]
- [[exchanges/jp-exchange-jpyc|JPYC]]
- [[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]
- [[exchanges/jp-exchange-mercury|Mercury (CoinTrade)]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/jp-vasp-ma-consolidation-history|jp-vasp-ma-consolidation-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|日本 stablecoin 発行体 規制分類マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## 出典

- FSA「暗号資産交換業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- FSA「List of Registered Crypto-asset Exchange Service Providers in Japan」: https://www.fsa.go.jp/en/regulated/licensed/en_kasoutuka.pdf
- JVCEA 会員一覧: https://jvcea.or.jp/member/
- FSA「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
