---
title: "SBペイメントサービス (SoftBank Payment Service / SoftBank Card Financial Arm)"
aliases:
  - "SoftBank Payment Service"
  - "SBペイメントサービス"
  - "SBPS"
  - "SoftBank Card"
  - "ソフトバンクカード"
  - "SoftBank Finance"
  - "SB ペイメントサービス株式会社"
  - "ソフトバンクペイメントサービス"
domain: payment-firms
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [JapanFG, payment-service, PSP, prepaid, SoftBank, paypay, fintech]
status: active
sources:
  - "https://www.sbpayment.jp/company/profile/"
  - "https://www.sbpayment.jp/company/history/"
  - "https://www.softbank.jp/corp/group/sb/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/fund_transfer.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "gBizINFO: SBペイメントサービス株式会社 (法人番号 4010401058731, 従業員数 348名) https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010401058731"
  - "Wikipedia: SBペイメントサービス (公開情報, 2026-05-25 抽出)"
---
# SBペイメントサービス (SoftBank Payment Service)

> [!note] 命名 note
> このページは当初 "dock-financial" として作成依頼された slot だが、日本に「Dock Financial Group」という独立金融グループ法人は確認できないため、代替として **SoftBank グループの決済代行子会社「SB ペイメントサービス（SBPS）」** を充当。SoftBank グループ金融機能のオペレーティング・カンパニー・アンカーとして位置付ける。

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]] as the **operating-company anchor** for ソフトバンク株式会社（東証 PRIME 9434、コア通信事業）グループの **決済代行・金融サービス子会社 SB ペイメントサービス（SBPS）**. Read it against [[megabanks/paypay-fg|PayPay 金融グループ]] for the sister SoftBank-affiliated payment / fintech cluster, [[megabanks/au-fh|au フィナンシャル HD]] for the telco-captive financial group peer, [[megabanks/ndfg|NTT ドコモ FG]] for the telco-financial-group ピア, [[payments/INDEX|payments index]] for the PSP / 加盟店決済サービス context, and [[payments/cashless-jp-landscape|キャッシュレス日本ランドスケープ]] for system-level positioning.

## TL;DR

ソフトバンク株式会社（通信事業の SoftBank Corp、東証 PRIME 9434）グループの **決済代行サービス（PSP = Payment Service Provider）子会社**。2004 設立、ソフトバンクの完全子会社。**EC 加盟店向けにクレジットカード・コンビニ決済・電子マネー・QR コード決済（[[payments/paypay|PayPay]] 含む）・キャリア決済（ソフトバンクまとめて支払い）等のマルチペイメント決済処理プラットフォーム** を提供。日本国内 EC ペイメント市場で **PSP 大手 3 強の一角**（[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]・[[payment-firms/digital-garage|デジタルガレージ／VeriTrans]]・SBPS）を構成。直接の B2C 金融機能は [[megabanks/paypay-fg|PayPay 金融グループ]] が担い、SBPS は **B2B / B2B2C の加盟店向け決済処理インフラ** に特化。^[likely]

## 1. 法人概要

| Item | 内容 |
|---|---|
| 正式名 | SB ペイメントサービス株式会社 ^[extracted] |
| 英名 | SB Payment Service Corp. |
| 略称 | SBPS |
| 設立 | **2004-10** ^[extracted] |
| 親会社 | ソフトバンク株式会社（東証 PRIME 9434、100% 子会社）|
| 本社 | 東京都港区海岸 1-7-1 東京ポートシティ竹芝 |
| 業態 | 包括信用購入あっせん業（割賦販売法）+ 前払式支払手段発行者（資金決済法）+ 資金移動業（資金決済法）+ 加盟店決済代行サービス（PSP） |
| 主力サービス | **オンライン決済サービス**（クレジットカード・コンビニ・電子マネー・キャリア決済・QR・銀行振込の統合決済）|

### 2.1 オンライン決済サービス（PSP）

| 決済手段 | カバレッジ |
|---|---|
| **クレジットカード** | Visa / Mastercard / JCB / American Express / Diners |
| **コンビニ決済** | セブン-イレブン・ローソン・ファミリーマート 等 |
| **電子マネー** | [[payments/suica-prepaid-jr-east|Suica]]・PASMO・楽天 Edy・WAON 等の主要交通 IC / 流通系 |
| **QR コード決済** | **[[payments/paypay|PayPay]]**（親会社グループ）・楽天ペイ・d払い・au PAY・LINE Pay 等 |
| **キャリア決済** | ソフトバンクまとめて支払い・ドコモ払い・auかんたん決済 |
| **銀行振込・口座振替** | ネットバンキング決済・口座振替決済 |
| **後払い決済** | NP 後払い等の BNPL（Buy Now Pay Later）連携 |

### 2.2 加盟店規模

- 通信事業者親会社のチャネル力 + 大手 EC プラットフォーム連携（Yahoo! ショッピング / LOHACO 等）
- **PayPay 加盟店との重複** で QR 決済領域に強み

### 2.3 サブセグメント

- **電子チケッティング**: イベント・興行のチケット販売決済
- **継続課金（サブスク）**: SaaS・サブスクリプションサービスの月次・年次課金
- **法人向け請求書 / 経費精算決済**: 法人 B2B 決済

## 3. 親会社関係（SoftBank Group の金融構造内）

```
ソフトバンクグループ株式会社（東証 PRIME 9984）
  ├── 海外投資（SVF 等、ファンド事業）
  └── ソフトバンク株式会社（東証 PRIME 9434、コア通信事業）
        ├── 通信事業（モバイル・FTTH・法人 ICT）
        ├── ヤフー / LINE 統合事業（LY Corporation 子会社化）
        ├── PayPay 金融グループ（[[megabanks/paypay-fg]]）
        │     ├── [[payment-firms/paypay|PayPay 株式会社]] ── QR コード決済
        │     ├── [[banking/paypay-bank|PayPay 銀行]] ── ネット銀行
        │     ├── [[card-issuers/paypay-card|PayPay カード]] ── カード発行
        │     └── [[securities-firms/paypay-securities|PayPay 証券]] ── 証券
        ├── **SB ペイメントサービス**（本ページ、PSP）
        └── その他金融子会社（ファイナンス・リース等）
```

### SBPS vs [[megabanks/paypay-fg|PayPay 金融グループ]] の棲み分け

| 機能 | SBPS | PayPay 金融グループ |
|---|---|---|
| ターゲット | **B2B（加盟店向け決済処理インフラ）** | **B2C（消費者向け決済・銀行・カード）**|
| ライセンス | 包括信用購入あっせん + 前払式 + 資金移動業 + PSP | QR 決済（資金移動業）・銀行・カード・証券 |
| 親会社内位置 | ソフトバンク株式会社 100% 子会社 | ソフトバンク + ヤフー + LINE 統合グループ |
| 主力収益 | 加盟店決済処理手数料 | 加盟店手数料 + 金利収入 + 投資運用 |

→ **PayPay = 消費者面、SBPS = 加盟店面** で SoftBank グループ決済機能が分業

## 4. KPI（公開情報ベース、参考値）

| 指標 | 規模感 |
|---|---|
| **加盟店数** | 精緻数値は非開示（PSP 大手 3 強の一角との業界観測）|
| **取扱決済額** | 兆円規模（PayPay 決済額の B2B 処理分を含む）^[likely] |
| 従業員数 | 348 名（gBizINFO 登録情報、法人番号 4010401058731）|
| 親会社ソフトバンク内位置 | エンタープライズ事業セグメント内の決済子会社 |
| PSP 市場シェア | 国内 PSP 大手 3 強の一角（[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]・[[payment-firms/digital-garage|デジタルガレージ／VeriTrans]] と並ぶ）|

> 詳細財務 KPI は親会社ソフトバンク（9434）有価証券報告書のセグメント情報で開示。最新数値は公式 IR 参照。

### 5.1 PSP 大手 3 強の一角としてのポジション

国内 PSP 市場の競合構造:
- **[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]**（東証 PRIME 3769、PSP 専業最大手）
- **[[payment-firms/digital-garage|デジタルガレージ／VeriTrans]]**（東証 PRIME 4819、メディア + PSP 兼業）
- **SBPS**（本ページ、SoftBank グループ系、PayPay 連携優位）

SBPS の差別化軸: **SoftBank / Yahoo / LINE / PayPay の親会社グループチャネル + PayPay QR 決済加盟店との接続性**

### 5.2 [[payments/paypay|PayPay]] エコシステムの B2B 基盤

- PayPay QR 決済を含むマルチペイメント決済を「**1 つの API で全部受け入れ**」を売りに、加盟店の決済 UX を統合
- 親会社グループの **「決済ピース」** として位置付け

### 5.3 EC プラットフォーム連携

- Yahoo! ショッピング・LOHACO・Z Holdings 系 EC プラットフォーム
- ZOZOTOWN（Z Holdings 系）
- 大手企業の自社 EC サイト（メーカー D2C・ブランド EC）
- BtoB EC（卸売・産業 EC）

### 5.4 BNPL（後払い）・電子チケッティング拡張

- **NP 後払い等の BNPL（Buy Now Pay Later）連携** を拡大
- 電子チケッティング・継続課金（サブスク）等の **非典型 EC 領域** への拡張
- 加盟店側の決済ニーズの多様化に対応

## 6. 規制・監督

| 項目 | 内容 |
|---|---|
| 主管庁 | 金融庁（資金決済法）+ 経済産業省（割賦販売法）|
| ライセンス | 包括信用購入あっせん業（METI 登録）+ 前払式支払手段発行者（FSA 登録）+ 資金移動業（FSA 登録、第二種）|
| PCI DSS | クレジットカード処理の国際セキュリティ基準 |
| 個人情報保護 | 個人情報保護法・割賦販売法情報保護義務 |
| 上場 | 非上場（親会社 ソフトバンク が東証 PRIME 9434）|

## Related

- ソフトバンク株式会社（親会社、東証 PRIME 9434）
- [[megabanks/paypay-fg]] — グループ兄弟（B2C 金融グループ）
- [[payment-firms/paypay]] — QR 決済（加盟店連携先）
- [[banking/paypay-bank]] — グループ銀行
- [[card-issuers/paypay-card]] — グループカード
- [[payment-firms/gmo-payment-gateway]] — PSP 大手競合（[[payment-firms/INDEX]] 内）
- [[payment-firms/digital-garage]] — PSP 大手競合
- [[megabanks/au-fh]] — テレコ系金融グループピア
- [[megabanks/ndfg]] — テレコ系金融グループピア
- [[payments/cashless-jp-landscape]] — キャッシュレス全体像
- [[payments/INDEX]] — payments namespace index
- [[payment-firms/INDEX]] — JapanFG namespace index

## Sources

- SBPS 公式: 会社概要（profile/）
- SBPS 公式: 沿革（history/）
- ソフトバンク公式: グループ会社一覧（softbank.jp/corp/group/sb/）
- 金融庁: 資金移動業者一覧
- 経済産業省: 割賦販売法登録事業者一覧
- **gBizINFO（経済産業省 法人情報）: SB ペイメントサービス株式会社**（法人番号 4010401058731、従業員数 348 名、設立 2004-10-01、本店 東京都港区海岸 1-7-1）https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010401058731
- Wikipedia: SB ペイメントサービス（公開情報、2026-05-25 抽出）

---

> [!info] 校核状态
