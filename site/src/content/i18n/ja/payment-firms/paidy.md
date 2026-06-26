---
source: payment-firms/paidy
source_hash: f7f69b28b32e18d8
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "株式会社Paidy"
translated_at: 2026-06-26T08:32:23.071Z
---

# 株式会社Paidy

## ウィキ上の位置づけ

この項目は [[payment-firms/INDEX|payment-firms INDEX]] の配下に置かれる。比較対象として [[payment-firms/rakuten-fg|楽天グループ金融事業 (Rakuten FG)]]、制度全体や規制上の境界を把握する入口として [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

## 要約日本初の本格的 **BNPL (Buy Now Pay Later)** プロバイダー。2008-10 旧 **株式会社エクスチェンジコーポレーション** として設立、2018-09 社名を Paidy に変更。創業者 **Russell Cummer**（米国出身）。**2021-09-07 PayPal Holdings が約 27 億ドル（約 3000 億円）で買収発表**、2022 完了 → PayPal 日本子会社化。メールアドレス + 電話番号のみで決済可、後日コンビニ・銀行振込・口座振替で支払う「あと払い」モデル。加盟店約 100 万店（Amazon Japan / SHEIN / Apple Store / メルカリ等）。米 Affirm / Klarna / Afterpay の日本版ポジション。^[extracted]

## 1. 会社概要

**正式名**：株式会社ペイディ ^[extracted]
**英名**：Paidy Inc.
**設立**：2008-10（旧株式会社エクスチェンジコーポレーション）^[extracted]
**社名変更**：2018-09 → Paidy ^[extracted]
**本社**：東京都港区（六本木）^[extracted]
**親会社**：**PayPal Holdings, Inc.**（NASDAQ: PYPL, 2022 完全子会社化）^[extracted]
**上場**：非上場（PayPal 子会社化に伴い独立上場路線は終了）
**創業者**：**Russell Cummer**（米国出身、元ゴールドマン・サックス）^[extracted]

### 主要サービスライン

| サービス | 内容 |
|---|---|
| **ペイディ（あと払い）** | メアド + 電話番号で決済、翌月コンビニ / 銀行振込 / 口座振替で一括払い |
| **ペイディあと払いプラン** | 3/6/12 回分割 / リボ（手数料無料プランあり）|
| **ペイディカード** | Visa バーチャルカード、Apple Pay 登録対応、実店舗・海外 EC でも使用可 |
| **ペイディカードプラス** | 上位ランク（リアルカード発行・利用枠拡大）|
| **Amazon Japan あと払い** | Amazon 公式の「あと払い」決済プロバイダー |

### 重要年表 ^[extracted]

| 年月 | 事象 |
|---|---|
| **2008-10** | **設立**（旧株式会社エクスチェンジコーポレーション、創業者 Russell Cummer、最初は FX 等の事業）|
| 2014 | **「あと払い (Paidy)」サービス開始** — 日本初の本格 BNPL |
| 2016〜2019 | シリーズ B〜D 累計数百億円規模のエクイティ調達（Goldman Sachs / 伊藤忠 / PayPal 他参加）|
| **2018-09** | **社名を「株式会社ペイディ」に変更** |
| 2020〜2021 | コロナ + EC ブームで急成長、ユニコーン化（評価額 10 億ドル超）|
| **2021-09-07** | **PayPal Holdings が約 27 億ドル（約 3000 億円）で買収発表** ★ — Apple 系ユニコーン以来の日本 fintech 高額買収 |
| 2022 | PayPal 子会社化完了 |
| 2023〜 | Amazon Japan の「あと払い」公式プロバイダー化、SHEIN 等海外 EC 加盟店拡大 |
| 2024 | PayPal グローバル戦略への統合進展（PayPal 国内決済との連携強化）|

> 買収背景: PayPal は日本市場で消費者プレゼンスが弱く、Paidy の **電話番号認証ベースの即時与信モデル** と **アコウント不要 BNPL UX** を取り込むことで日本 EC 攻略を狙った。買収額 27 億ドルは当時の日本 fintech 史上最大級。^[extracted]

## 2. 事業セグメント・マップ

| セグメント | 主要事業 | 特徴 |
|---|---|---|
| BNPL 一括 | ペイディ（あと払い）| メアド + 電話番号認証、与信 AI、加盟店手数料モデル |
| BNPL 分割 | ペイディあと払いプラン | 3/6/12 回、手数料無料プランあり（消費者側）|
| カード | ペイディカード / カードプラス | Visa バーチャル、Apple Pay 対応、上位はリアルカード |

### 与信モデル

- **電話番号 + メール認証**: 銀行口座やクレカ登録不要、最短数秒で与信判定
- **AI スコアリング**: 取引履歴 / 端末 / 行動データから動的与信枠を算出
- **後払い回収チャネル**: コンビニ / 銀行振込 / 口座振替 / Pay-easy
- **手数料モデル**: 加盟店側手数料（クレカより高め）+ 分割時の消費者側手数料（一括は無料）

### 競合マップ

| 競合 | 親グループ | ポジション |
|---|---|---|
| **メルペイあと払い** | [[payment-firms/mercari-hd]] | フリマアプリ内 BNPL、メルカリ生態系強い |
| **atone** | ネットプロテクションズ HD（東証 PRIME 7383）| EC 後払い老舗、加盟店中堅 EC 中心 |
| **NP 後払い** | ネットプロテクションズ HD | BtoC 後払いの最大手（請求書同梱型）|
| **クロネコ後払い** | ヤマト HD | 配送系 EC 後払い |
| **AmazonPay / クレカ分割** | Amazon / Visa / Master | 既存クレカ分割の代替候補 |

### グローバル比較

- **米国 Affirm**: 上場 BNPL、Amazon US 提携
- **スウェーデン Klarna**: 欧州最大 BNPL、グローバル展開
- **豪 Afterpay**: Block（旧 Square）が 2022 買収（約 290 億ドル）

### 加盟店戦略

- **Amazon Japan 公式 BNPL**: 最大の集客チャネル、Amazon の「あと払い」選択肢として常設
- **SHEIN / 越境 EC**: Z 世代向けファッション EC
- **Apple Store**: iPhone / Mac の分割購入として若年層に浸透
- **メルカリ**: フリマ + BNPL のクロス（注: メルカリ自身も [[payment-firms/mercari-hd]] 内でメルペイあと払いを運営、競合かつ加盟店）

## 4. 規制・政策

- **主管**: 経済産業省（割賦販売法・少額包括信用購入あっせん業者として登録）+ 金融庁（資金決済法関連）
- **割賦販売法改正対応**（2020-06 公布、2021-04 施行）: 「少額包括信用購入あっせん業者」区分新設 → Paidy 含む BNPL 各社が登録対象。AI 与信モデルが正式に認定 ^[extracted]
- **個人情報保護法**: 電話番号 + メール認証ベースの与信に関する個人データ取扱い

## 関連

- [[megabanks/mufg]] · [[megabanks/smfg]] · [[megabanks/mizuho-fg]] · [[payment-firms/mercari-hd]] · [[megabanks/paypay-fg]] · [[megabanks/sbi-hd]]
- [[payment-firms/bnpl-landscape]] · [[card-issuers/installment-sales-act-2020-amendment|JapanFG/割賦販売法-2020-改正]]

## 出典

- **Wikipedia: 株式会社ペイディ**（https://ja.wikipedia.org/wiki/ペイディ, 2026-05-19 抽出）
- **PayPal Holdings 2021-09-07 Press Release**: "PayPal to Acquire Paidy"（買収額 約 27 億ドル）
- Paidy 公式コーポレートサイト 沿革ページ（https://paidy.com/corporate/）
- 経済産業省「割賦販売法の一部を改正する法律」（2020-06 公布、2021-04 施行）

---

> [!info] 検証状況
> confidence: **likely**（v1.0 公開情報のみで構成 2026-05-19）。買収額 27 億ドル / 設立 2008-10 / 改称 2018-09 等の重要数値は Wikipedia + PayPal 公式プレスリリース経由。役員体制・最新加盟店数は時点変動あり、PayPal 親会社の年次報告書（10-K）と Paidy 公式が一次ソース。
