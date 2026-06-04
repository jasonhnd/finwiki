---
source: japanfg/dock-financial
source_hash: 30d0e0946679c698
lang: zh
status: machine
fidelity: ok
title: "SB Payment Service (SoftBank Payment Service)"
translated_at: 2026-05-31T15:29:03.885Z
---
# SB Payment Service (SoftBank Payment Service)

> [!note] 命名 note
> このページは当初 "dock-financial" として作成依頼された slot だが、日本に「Dock Financial Group」という独立金融グループ法人は確認できないため、代替として **SoftBank グループの支付代行子会社「SB ペイメントサービス（SBPS）」** を充当。SoftBank グループ金融功能のオペレーティング・カンパニー・アンカーとして位置付ける。

## Wiki route

本条目位于 [[JapanFG/INDEX|JapanFG index]] as the **operating-company anchor** for ソフトバンク株式会社（东京证券交易所 PRIME 9434、コア通信事業）グループの **支付代行・金融サービス子会社 SB ペイメントサービス（SBPS）**. 请对照 [[megabanks/paypay-fg|PayPay 金融グループ]] for the sister SoftBank-affiliated payment / fintech cluster, [[megabanks/au-fh|au フィナンシャル HD]] for the telco-captive financial group peer, [[megabanks/ndfg|NTT ドコモ FG]] for the telco-financial-group ピア, [[payments/INDEX|payments index]] for the PSP / 加盟店支付サービス context, and [[payments/cashless-jp-landscape|キャッシュレス日本ランドスケープ]] for system-level positioning.

## TL;DR

ソフトバンク株式会社（通信事業の SoftBank Corp、东京证券交易所 PRIME 9434）グループの **支付代行サービス（PSP = Payment Service Provider）子会社**。2004 设立、ソフトバンクの完全子会社。**EC 加盟店向けにクレジットカード・コンビニ支付・電子マネー・QR コード支付（[[payments/paypay|PayPay]] 含む）・キャリア支付（ソフトバンクまとめて支払い）等のマルチペイメント支付処理プラットフォーム** を提供。日本国内 EC ペイメント市場で **PSP 大手 3 強の一角**（[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]・[[payment-firms/digital-garage|デジタルガレージ／VeriTrans]]・SBPS）を構成。直接の B2C 金融功能は [[megabanks/paypay-fg|PayPay 金融グループ]] が担い、SBPS は **B2B / B2B2C の加盟店向け支付処理インフラ** に特化。^[likely]

## 1. 法人概要

| Item | 内容 |
|---|---|
| 正式名称 | SB ペイメントサービス株式会社 ^[extracted] |
| 英文名 | SB Payment Service Corp. |
| 简称 | SBPS |
| 设立 | **2004-10** ^[extracted] |
| 母公司 | ソフトバンク株式会社（东京证券交易所 PRIME 9434、100% 子会社）|
| 总部 | 東京都港区海岸 1-7-1 東京ポートシティ竹芝 |
| 业态 | 包括信用購入あっせん業（分期付款销售法）+ 预付式支付工具発行者（资金结算法）+ 资金转移业（资金结算法）+ 加盟店支付代行サービス（PSP） |
| 主力服务 | **在线支付服务**（クレジットカード・コンビニ・電子マネー・キャリア支付・QR・银行振込の統合支付）|

### 2.1 在线支付服务（PSP）

| 支付方式 | カバレッジ |
|---|---|
| **クレジットカード** | Visa / Mastercard / JCB / American Express / Diners |
| **コンビニ支付** | セブン-イレブン・ローソン・ファミリーマート 等 |
| **電子マネー** | [[payments/suica-prepaid-jr-east|Suica]]・PASMO・楽天 Edy・WAON 等の主要交通 IC / 流通系 |
| **QR コード支付** | **[[payments/paypay|PayPay]]**（母公司グループ）・楽天ペイ・d払い・au PAY・LINE Pay 等 |
| **キャリア支付** | ソフトバンクまとめて支払い・ドコモ払い・auかんたん支付 |
| **银行振込・口座振替** | ネットバンキング支付・口座振替支付 |
| **後払い支付** | NP 後払い等の BNPL（Buy Now Pay Later）連携 |

### 2.2 加盟店规模

- 通信事業者母公司のチャネル力 + 大手 EC プラットフォーム連携（Yahoo! ショッピング / LOHACO 等）
- **PayPay 加盟店との重複** で QR 支付領域に強み

### 2.3 子分部

- **電子チケッティング**: イベント・興行のチケット販売支付
- **継続課金（サブスク）**: SaaS・サブスクリプションサービスの月次・年次課金
- **法人向け請求書 / 経費精算支付**: 法人 B2B 支付

## 3. 母公司関係（SoftBank Group の金融構造内）

```
ソフトバンクグループ株式会社（东京证券交易所 PRIME 9984）
  ├── 海外投資（SVF 等、ファンド事業）
  └── ソフトバンク株式会社（东京证券交易所 PRIME 9434、コア通信事業）
        ├── 通信事業（モバイル・FTTH・法人 ICT）
        ├── ヤフー / LINE 統合事業（LY Corporation 子会社化）
        ├── PayPay 金融グループ（[[megabanks/paypay-fg]]）
        │     ├── [[payment-firms/paypay|PayPay 株式会社]] ── QR コード支付
        │     ├── [[JapanFG/paypay-bank|PayPay 銀行]] ── ネット银行
        │     ├── [[card-issuers/paypay-card|PayPay カード]] ── カード発行
        │     └── [[securities-firms/paypay-securities|PayPay 証券]] ── 证券
        ├── **SB ペイメントサービス**（本ページ、PSP）
        └── その他金融子会社（ファイナンス・リース等）
```

### SBPS vs [[megabanks/paypay-fg|PayPay 金融グループ]] の分工

| 功能 | SBPS | PayPay 金融グループ |
|---|---|---|
| ターゲット | **B2B（加盟店向け支付処理インフラ）** | **B2C（消費者向け支付・银行・カード）**|
| ライセンス | 包括信用購入あっせん + 前払式 + 资金转移业 + PSP | QR 支付（资金转移业）・银行・カード・证券 |
| 母公司内位置 | ソフトバンク株式会社 100% 子会社 | ソフトバンク + ヤフー + LINE 統合グループ |
| 主力収益 | 加盟店支付処理手数料 | 加盟店手数料 + 金利収入 + 投資運用 |

→ **PayPay = 消費者面、SBPS = 加盟店面** で SoftBank グループ支付功能が分業

## 4. KPI（公开信息ベース、参考値）

| 指標 | 規模感 |
|---|---|
| **加盟店数** | 精緻数値は非開示（PSP 大手 3 強の一角との業界観測）|
| **取扱支付額** | 兆円規模（PayPay 支付額の B2B 処理分を含む）^[likely] |
| 従業員数 | 348 名（gBizINFO 登録情報、法人番号 4010401058731）|
| 母公司ソフトバンク内位置 | エンタープライズ事業セグメント内の支付子会社 |
| PSP 市場シェア | 国内 PSP 大手 3 強の一角（[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]・[[payment-firms/digital-garage|デジタルガレージ／VeriTrans]] と並ぶ）|

> 詳細財務 KPI は母公司ソフトバンク（9434）有価证券報告書のセグメント情報で開示。最新数値は公式 IR 参照。

### 5.1 PSP 大手 3 強の一角としてのポジション

国内 PSP 市場の競合構造:
- **[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]**（东京证券交易所 PRIME 3769、PSP 専業最大手）
- **[[payment-firms/digital-garage|デジタルガレージ／VeriTrans]]**（东京证券交易所 PRIME 4819、メディア + PSP 兼業）
- **SBPS**（本ページ、SoftBank グループ系、PayPay 連携優位）

SBPS の差別化軸: **SoftBank / Yahoo / LINE / PayPay の母公司グループチャネル + PayPay QR 支付加盟店との接続性**

### 5.2 [[payments/paypay|PayPay]] エコシステムの B2B 基盤

- PayPay QR 支付を含むマルチペイメント支付を「**1 つの API で全部受け入れ**」を売りに、加盟店の支付 UX を統合
- 母公司グループの **「支付ピース」** として位置付け

### 5.3 EC プラットフォーム連携

- Yahoo! ショッピング・LOHACO・Z Holdings 系 EC プラットフォーム
- ZOZOTOWN（Z Holdings 系）
- 大手企業の自社 EC サイト（メーカー D2C・ブランド EC）
- BtoB EC（卸売・産業 EC）

### 5.4 BNPL（後払い）・電子チケッティング拡張

- **NP 後払い等の BNPL（Buy Now Pay Later）連携** を拡大
- 電子チケッティング・継続課金（サブスク）等の **非典型 EC 領域** への拡張
- 加盟店側の支付ニーズの多様化に対応

## 6. 规制・监管

| 项目 | 内容 |
|---|---|
| 主管庁 | 金融厅（资金结算法）+ 经济产业省（分期付款销售法）|
| ライセンス | 包括信用購入あっせん業（METI 登録）+ 预付式支付工具発行者（FSA 登録）+ 资金转移业（FSA 登録、第二種）|
| PCI DSS | クレジットカード処理の国際セキュリティ基準 |
| 個人情報保護 | 個人情報保護法・分期付款销售法情報保護義務 |
| 上場 | 非上市（母公司 ソフトバンク が东京证券交易所 PRIME 9434）|

## 相关

- ソフトバンク株式会社（母公司、东京证券交易所 PRIME 9434）
- [[megabanks/paypay-fg]] — グループ兄弟（B2C 金融グループ）
- [[payment-firms/paypay]] — QR 支付（加盟店連携先）
- [[JapanFG/paypay-bank]] — グループ银行
- [[card-issuers/paypay-card]] — グループカード
- [[payment-firms/gmo-payment-gateway]] — PSP 大手競合（[[JapanFG/INDEX]] 内）
- [[payment-firms/digital-garage]] — PSP 大手競合
- [[megabanks/au-fh]] — テレコ系金融グループピア
- [[megabanks/ndfg]] — テレコ系金融グループピア
- [[payments/cashless-jp-landscape]] — キャッシュレス全体像
- [[payments/INDEX]] — payments namespace index
- [[JapanFG/INDEX]] — JapanFG namespace index

## 来源

- SBPS 公式: 公司概要（profile/）
- SBPS 公式: 沿革（history/）
- ソフトバンク公式: グループ会社一覧（softbank.jp/corp/group/sb/）
- 金融厅: 资金转移业者一覧
- 经济产业省: 分期付款销售法登録事業者一覧
- **gBizINFO（经济产业省 法人情報）: SB ペイメントサービス株式会社**（法人番号 4010401058731、従業員数 348 名、设立 2004-10-01、本店 東京都港区海岸 1-7-1）https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010401058731
- Wikipedia: SB ペイメントサービス（公开信息、2026-05-25 抽出）

---

> [!info] 校核状态
