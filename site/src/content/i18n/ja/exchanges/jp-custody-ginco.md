---
source: exchanges/jp-custody-ginco
source_hash: 1330b241411254ef
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "株式会社Ginco — 日本の B2B ブロックチェーン・カストディインフラ提供者"
translated_at: 2026-07-29T12:22:29.000Z
---
﻿
# 株式会社Ginco — 日本の B2B ブロックチェーン・カストディインフラ提供者


## ウィキ上の位置づけ

このエントリは [[exchanges/INDEX|exchanges index]] の配下に位置づけられる。隣接する文脈については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]]、より広いシステム境界については [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] とあわせて読む。

> B2B blockchain infrastructure provider · 設立 2017-12-21 · 公式 product / case study を中心に整理

## 1. 法人・株主

- **商号**: 株式会社Ginco（英文：Ginco Inc.）
- **設立**: 2017年12月21日
- **本店所在地**: 〒104-0032 東京都中央区八丁堀三丁目27番4号
- **資本金**: 1億円（公式サイト記載）
- **代表者**: 坂根遼（2026年4月時点の公式サイト記載）
- **創業者**: 森川夢佑斗（2016年10月よりR&D開始、2017年12月創業）
- **主要投資家**（公表分・時系列）:
  - 2018年1月: Global Brain より第三者割当増資
  - 2020年4月: DBJキャピタルより第三者割当増資
  - 2021年11月: みやこキャピタル・DBJキャピタル・三菱UFJキャピタルより第三者割当増資
- **主要取引銀行**: 三菱UFJ銀行、三井住友銀行、みずほ銀行
- **上場状況**: 非上場（独立系スタートアップ · 2026-05 時点）

## 2. 牌照・登録状況

- **日本での規制上の位置づけ**: 公式資料は Ginco を B2B blockchain infrastructure provider と説明する。特定 service に登録が必要かは提供主体と業務実態に依存するため、FSA の現行一覧と専門家確認を要する
- **業界団体**: JVCEA などの現行 membership は各団体の公式会員一覧で確認し、この項目では未掲載を根拠に否定しない
- **所属団体（公表分）**:
  - 一般社団法人 Fintech協会
  - 一般社団法人日本暗号資産ビジネス協会（JCBA）
  - 一般社団法人日本セキュリティトークン協会（JSTA）
  - 一般社団法人 JP Crypto ISAC
- **認証・規格**: SOC 2 Type II（AICPA 認定）、SGS 認証取得（公式サイトのロゴ表示より）

## 3. 取扱通貨

同社は直接暗号資産の売買・保管サービスを個人・法人向けに提供するわけではないため、「取扱通貨」は B2B インフラとして顧客 VASP を支援する対応銘柄数として定義される。

- **Ginco Enterprise ウォレット対応**: 複数 blockchain への対応を公式 product page で案内する。対応範囲と導入期間は案件・時点で変わるため、現行資料で確認する
- **個人向け Ginco ウォレット**: セルフカストディ型モバイルウォレットで Bitcoin・Ethereum 他複数銘柄に対応（2018年4月より提供）
- 現行の対応銘柄と blockchain は公式 product documentation または個別提案で確認する

## 4. 業務範囲

**同社は暗号資産交換業者（VASP）ではなく、暗号資産業者向け B2B インフラ提供企業に分類される。** 暗号資産の売買・仲介・保管を自社名義で行うのではなく、VASP 等がそれを実施するためのシステム・技術インフラを提供する。

### 主要製品・サービス

出典: 表全体は Ginco 公式の [Enterprise Wallet](https://www.ginco.co.jp/service/enterprise-wallet) と [基本情報](https://www.ginco.co.jp/company/outline)（2026-07-29 確認）に基づく。

| サービス | 内容 |
|---|---|
| **Ginco Enterprise Wallet** | HSM と専用署名端末に秘密鍵を分散管理し、cold / hot wallet、入出庫、承認 workflow 等を提供。公式サイトは「導入実績 No.1」と表示するが、算定母集団・調査時点は同ページに記載がない |
| **GEW Monitoring Solution** | 複数ウォレットを統合管理する業務用モニタリングツール |
| **Ginco Web3 Cloud** | 金融機関水準の汎用ブロックチェーン開発基盤（パブリック/プライベート対応） |
| **Web3 Professional Service** | 企画立案・要件定義から開発まで一気通貫の事業創出支援 |
| **Ginco Wallet** | 個人向けセルフカストディ型モバイルウォレットアプリ（2018年4月提供開始） |

### 対応事業領域
- 暗号資産取引所（FSA 登録 VASP へのウォレット提供）
- 金融機関（証券会社・信託銀行等）
- NFT サービス基盤（NFT BASE）
- セキュリティトークン（ST）カストディシステム
- Web3 コンサルティング・ノードホスティング

## 5. 公開情報上の位置付け

- 公式 Enterprise Wallet ページは「国内最多の対応通貨数」「導入実績 No.1」と表示する。比較母集団、割合、調査時点が同ページにないため、自社の現行 marketing claim として扱う。
- 個別顧客、競合順位、対応通貨数は変更され得るため、案件ごとの公式 release と現行 product page を確認する。

## 6. 公式会社概要スナップショット

出典: 表全体は Ginco 公式 [基本情報](https://www.ginco.co.jp/company/outline)（2026-07-29 確認）に基づく。

| 項目 | 公式記載 |
|---|---|
| 会社名 | 株式会社Ginco（Ginco Inc.） |
| 代表者 | 坂根 遼 |
| 所在地 | 東京都中央区八丁堀三丁目27番4号 |
| 設立 | 2017-12-21 |
| 資本金 | 1 億円 |
| 事業概要 | 業務用暗号資産 wallet、NFT / security-token infrastructure、blockchain platform、個人向け wallet、consulting |

## 7. 戦略動向（直近 12 ヶ月）

- **2025-09**: レンディング＆デリバティブ管理 Membrane（英国系）と提携。ビットコイン保有＋運用ソリューションを提供
- **2025-11**: UPBOND とパートナーシップ構築。DID/VC × Crypto 領域でユースケース創出
- **2025-11**: 新 CISO にミン・ブライアン氏就任。ITガバナンス・外部連携強化
- **2025-12**: Babylon Labs と協業し「BTCFi 2.0」を日本で推進（Bitcoin staking/earning 機能）
- **2025-12**: Canton Network（Goldman Sachs / Digital Asset 系のエンタープライズブロックチェーン）にバリデータとして参画
- **2026-01**: GVA 法律事務所と Web3 領域パートナーシップ締結
- **2026-03**: 荏原製作所「Ebara Brain Project」における web3 技術導入検証を支援
- **2026-04**: 公式サイトで坂根遼を代表取締役として確認。交代の経緯や役割変更は、公式発表がない限り推定しない

**公開資料から読める範囲**: 公式 product page と case study は、wallet、ST・信託関連、BTCFi、DID などの提供領域を示す。この項目では、拠点設置の目的、競合他社の営業方針、Ginco の優位性を公開資料の裏付けなしに推定しない。

## 8. 関連人物

- **森川夢佑斗**: 公式沿革で確認できる創業者。現行の役割は公式な人物・会社開示で確認し、代表変更から退任を推定しない
- **坂根遼**: 代表取締役（2026年4月時点の公式サイト記載）
- **ミン・ブライアン（Min Brian）**: CISO。2025年11月に就任。ITガバナンスと外部連携強化を担う

## 関連項目

- [[fintech/japan-financial-regulation]] — 日本金融規制全体
- [[fintech/jp-trust-type-sc-architecture]] — 関連 ST（セキュリティトークン）制度
- [[fintech/japan-stablecoin-regulatory-landscape]] — 関連 stablecoin 制度
- [[exchanges/jp-exchange-bittrade]] — VASP 顧客の一例
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional カストディ三本柱
- [[exchanges/jp-custody-fireblocks-japan]] — Fireblocks Japan（競合）
- [[payment-firms/progmat]] — Progmat（協業先）
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — JP VASP cold storage 分別管理ルール

## 出典

- [Ginco 基本情報・沿革](https://www.ginco.co.jp/company/outline)（取得 2026-05-18）
- [Ginco 会社情報トップ](https://www.ginco.co.jp/company)（取得 2026-05-18）
- [Ginco Enterprise Wallet サービス詳細](https://www.ginco.co.jp/service/enterprise-wallet)（取得 2026-05-18）
- [Ginco ニュース一覧](https://www.ginco.co.jp/news)（取得 2026-05-18）
- [Ginco 事業領域（暗号資産取引所向け）](https://www.ginco.co.jp/business/crypto-exchange)（取得 2026-05-18）
