---
source: banking/gmo-aozora-net-bank
source_hash: 7958f5ddab42f976
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "GMO あおぞらネット銀行 オペレーティング・プロファイル（GMO あおぞらネット銀行）"
translated_at: 2026-07-29T03:30:48.100Z
---

# GMO あおぞらネット銀行 オペレーティング・プロファイル（GMO あおぞらネット銀行）

## Wiki route

本項は [[banking/INDEX|banking index]] に属し、[[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行 entity anchor]] のエンティティ・アンカーに対するオペレーティング・プロファイルの対となる項である。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメント・マップのなかで、法人 API のピアである [[regional-banks/ssnb|住信SBIネット銀行 / NEOBANK]] および消費者主導のネット銀行コホート [[banking/rakuten-bank|Rakuten Bank]]・[[banking/paypay-bank|PayPay Bank]]・[[banking/au-jibun-bank|au Jibun Bank]]・[[banking/sony-bank|Sony Bank]] と対照しつつ、[[payment-firms/gmo-financial-hd|GMO Financial Holdings]] および [[regional-banks/aozora-bank|あおぞら銀行]] の親グループのコンテキストとともに、また [[banking/baas-japan-landscape|BaaS Japan landscape]]・[[banking/japan-baas-operating-models|Japan BaaS operating models]] の BaaS フレームワークのなかで読むこと。決済サイドの統合については、[[payments/japan-bank-api-payment-agency-route|Japan bank API payment agency route]] および [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud control]] を経由してルーティングすること。

## TL;DR

GMOあおぞらネット銀行（GMOあおぞらネット銀行株式会社）は、 [[regional-banks/aozora-bank|あおぞら銀行]] そして、テクノロジーバンクと企業サービスに重点を置くGMOグループです。同社の正式な会社概要には、**1994-02-28**に設立、**1994-04-01**に日銀信託銀行として開設、2001年にあおぞら信託銀行に改名、**2018-06-01**にGMOあおぞらネット銀行に改名、**2018-07-17**にインターネット銀行業務を開始し、信託事業をあおぞらに譲渡したと記されている。 **2018-10-01** の銀行。同じ概要には、50% あおぞら銀行、25% GMO インターネット グループ、および 25% G​​MO フィナンシャル ホールディングスの株式所有権が記録されており、議決権比率はそれぞれ 85.12%、7.43%、および 7.43% です。現在の公式資料では、法人バンキング、銀行 API、BaaS サービスが開示されています。このページでは、これらの開示を超えて、製品のリーダーシップ、パートナーの経済状況、または顧客の構成について推測することはありません。 ^[Sources: https://gmo-aozora.com/company/outline.html; https://gmo-aozora.com/company/greeting.html; https://gmo-aozora.com/api-cooperation/.]

## 1. アイデンティティと所有

| 項目 | 内容 |
|---|---|
| 法人名 | 株式会社 GMO あおぞらネット銀行 |
| 英文名 | GMO Aozora Net Bank, Ltd. |
| 設立・開設 | 1994 年 2 月 28 日に設立。 1994年4月1日に日債銀銀行信託として開設 |
| 2018年の移行 | 2018年6月1日にGMOあおぞらネット銀行に改名。インターネット銀行業務は 2018 年 7 月 17 日に開始されました。 2018年10月1日付で信託業務をあおぞら銀行へ移管 |
| 銀行免許の区分 | 普通銀行（銀行法上の普通銀行）、FSA「その他の銀行」に分類 |
| 所有（公式の会社概要による） | 資本：[[regional-banks/aozora-bank|あおぞら銀行 (Aozora Bank, 8304)]] 50.00%／[[payment-firms/gmo-financial-hd|GMO Internet Group]] 25.00%／GMO Financial Holdings 25.00%。議決権：あおぞら銀行 85.12%／GMO Internet Group 7.43%／GMO Financial Holdings 7.43% |
| 本社 | 東京（渋谷） |
| チャネルアーキテクチャ | インターネットは主要な取引チャネルです。公式開示によると、上場支店はカウンターサービスを提供していない |
| 主たる規制当局 | 金融庁（FSA） |

出典: この表は、銀行の会社概要、2025 年の中間開示、および FSA 認可銀行ワークブックに従っています。株式の所有権と議決権の管理は別の尺度であるため、個別に示します。 ^[Sources: https://gmo-aozora.com/company/outline.html; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### この JV がどのように成立したか

```
1994-02-28 : 会社設立
1994-04-01     : opens as 日債銀信託銀行
2001-01-04     : renamed あおぞら信託銀行
2018-06-01     : renamed GMO あおぞらネット銀行
2018-07-17 : インターネットバンク業務開始
2018-10-01 : 信託事業を株式会社へ譲渡 [[regional-banks/aozora-bank|あおぞら銀行]]
```

> 注：報道による IPO の憶測（公式な会社のコミットメントなし）は `.opinions/banking/gmo-aozora-net-bank.md` へ移した（検証可能な一次ソースなし）。

### グループ・コンテキストでのポジショニング

```
GMO インターネットグループ株式会社（東証プライム 9449, 、創業者／CEO 熊谷正寿）
  ├── GMO あおぞらネット銀行（GMO 側：GMO IG + GMO FH 経由で資本 50%／議決権 14.86% — 本項） — 法人／中小企業／API 銀行
  ├── [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]（東証プライム 3769） — 決済処理インフラ
  ├── [[securities-firms/gmo-click-securities|GMO Click Securities]] — ネット証券／FX
  ├── [[payment-firms/gmo-coin|GMO Coin]] — 暗号資産交換業
  └── その他のインフラ／ホスティング／広告子会社

[[regional-banks/aozora-bank|Aozora Bank (TSE Prime 8304, former 日本債券信用銀行)]]
  └── GMO あおぞらネット銀行（資本 50%／議決権 85.12%） — 議決権を支配する株主
```

### 法人／中小企業／フリーランサー口座のフランチャイズ

| 商品 | 役割 |
|---|---|
| 法人口座開設 | 現在の資格および審査条件に基づくオンライン申請および本人確認/ビジネス確認 |
| 円決済口座 | SaaS、e コマース、プラットフォーム経済の中小企業向けの運営口座 |
| マルチアカウント／サブアカウント | コスト分別／プロジェクト分別のための、1 つのマスター口座配下のサブ口座 |
| 一括振込 | 大量の給与および取引先支払の処理 |
| 外貨業務 | 銀行の商品ページから現在の対象通貨、取引範囲、手数料を確認 |
| デビットカード/法人カード | 公式カードページから現在の発行会社、資格、条件を確認してください |

出典: 製品の入手可能性と条件は変更されます。この表は動作機能マップであり、日付が記載された公式製品またはパートナーシップの発表がない限り、承認速度やサードパーティのルーティングを主張するものではありません。 ^[Sources: https://gmo-aozora.com/business/; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf.]

### 事業ローンの旗艦：あんしんワイド

| 特徴 | 内容 |
|---|---|
| 商品タイプ | 無担保の中小企業／フリーランサー向け事業ローン |
| 引受 | スクリーニング方法とデータの使用は、現在の製品説明と同意/プライバシーの開示から取得する必要があります |
| ターゲットの借り手 | フリーランサー、個人事業主、SaaS を利用する中小企業、e コマース販売者 |
| 申請・決定タイミング | 現在の製品ページに記載されているタイミングと条件のみを使用してください。 |
| リスク・チャネル | GMO あおぞらのバランスシート上での直接ローン |

出典: この表は、現在のあんしんワイドの開示を超える引受モデルや承認速度の比較を推測するものではありません。 ^[Source: https://gmo-aozora.com/anshin-wide/.]

### Bank API for Developers

銀行は日付付きの API ラインナップを公開しています。 2026 年 5 月 1 日の時点で、公式ページには 28 個の標準 API と 7 個の有料 API がリストされています。以下のカテゴリは機能の概要であり、ピアのランキングではありません。

| API サーフェス | 機能 |
|---|---|
| 口座／残高 | リアルタイム残高、取引履歴の取得 |
| 振込 | プログラムによる振込の発行 |
| マルチアカウント・オペレーション | サブ口座の作成、バーチャル口座の割り当て、プロジェクト分別 |
| 接続サポート | 公式 API ページに記載されている開発者ポータル、テスト環境、接続サポート |

出典: 正確なエンドポイントの可用性、認証、価格設定、および資格は、日付の公式ラインナップおよび契約文書と照らし合わせて確認する必要があります。 ^[Sources: https://gmo-aozora.com/business/api-cooperation/apilineup.html; https://gmo-aozora.com/api-cooperation/.]

### パートナー証拠プロトコル

| 請求の種類 | 必要な一次証拠 |
|---|---|
| API顧客/コネクタ | 法人名、API 範囲、および開始ステータスを示す日付付きの銀行または取引先の発表 |
| BaaSプログラム | 銀行のお知らせと、ブランド支店または組み込みサービスを特定する現在のサービス ページ |
| グループ会社統合 | 現在のグループ構造と製品固有の条件。グループのメンバーシップだけではデータの共有や決済を証明することはできません |
| 国境を越えた支払いルートまたは支払いルート | 現在の製品条件と各法人のライセンスされた役割 |

出典: プロバイダーのロゴ、過去の発表、またはグループ関係は、現在の運用統合を証明するものではありません。 ^[Sources: https://gmo-aozora.com/news/; https://gmo-aozora.com/api-cooperation/; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf.]

### GMO あおぞらが競争する領域

| セグメント | 検討すべき公的証拠 | 比較境界 |
|---|---|---|
| 法人・個人事業主アカウント | 当座口座の資格、手数料、支店/チャネルの開示、および口座の指標 | 承認速度や顧客構成を推測しないでください |
| 中小企業融資 | 現在のあんしんワイドの条件とローン開示日 | 応募者に開示されていない引受入力情報を推測しないでください |
| 銀行API | エンドポイントのラインナップ、契約数、価格、接続条件の日付 | 銀行が公表する「No.1」明細書は、独自に調整しない限り、会社定義のままです。 |
| BaaS / 組み込み金融 | 指定された現在のプログラム、法人の役割、および開始ステータス | 発表、発売、および実際の規模は別の事実です |

ソース: これらの行は、「強い」、「成長している」、または「限定された」ランキングを割り当てるのではなく、再現可能な比較ルートを定義します。 ^[Sources: https://gmo-aozora.com/company/disclosure.html; https://gmo-aozora.com/api-cooperation/; https://gmo-aozora.com/news/.]

### 三軸の競合マップ

| Axis | 証拠セット | 検証する例 | 掲載ルール |
|---|---|---|---|
| 消費者エコシステム | 現在のグループ所有権、アカウントリンク条件、ポイント/カードの経済性、およびアクティブな使用 KPI | [[banking/rakuten-bank|楽天銀行]] · [[banking/paypay-bank|ペイペイ銀行]] · [[banking/au-jibun-bank|auじぶん銀行]] | 同期間の指標がない場合は重複スコアなし |
| 資産形成 | FX、住宅ローン、投資商品の在庫と日付の残高 | [[banking/sony-bank|ソニー銀行]] · [[banking/daiwa-next-bank|大和ネクスト銀行]] | 製品の存在によって顧客の重複が確立されない |
| BaaSパートナーチャネル | 名前付きのアクティブなプログラム、法的役割、支店/アカウント、およびトランザクション KPI | [[regional-banks/ssnb|SSNB / ネオバンク]] · [[banking/minna-bank-baas-model|みんな銀行]] | 同様の開示された指標のみを比較する |
| 企業API | エンドポイントの範囲、契約数、価格設定、サービス レベル、および使用状況の日付 | **GMO あおぞら** および現在のパブリック API を備えた銀行 | 市場全体の調査を行わずに「競合他社がいない」という結論を回避する |

出典: マトリックスは将来の比較のための証拠設計であり、測定された競合マップではありません。 ^[Sources: https://gmo-aozora.com/api-cooperation/; https://gmo-aozora.com/company/disclosure.html; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

## 4. KPI の形状

きめ細かな時点の数値（口座数、預金残高、ローンブックの規模、あんしんワイドの残高、パートナー数）は、GMO あおぞらおよび親会社 GMO インターネットグループの IR 開示に現れる。本ページは、あらゆる時点の数値を再現するのではなく、フランチャイズのパターンを追跡する。GMO 時代のオペレーティング・サイクル（2018–現在）を通じたフランチャイズのパターンは次を示す。

| メトリック | 公式アップデートルート |
|---|---|
| アカウント・顧客構成 | 最新の開示情報または日付付きの会社リリースを使用します。最も急成長しているセグメントを推測しないでください |
| 預金 | 最新の財務開示情報を口座および通貨の定義とともに使用します。 |
| ローン | 最新の開示情報のローン カテゴリを使用します。製品のマーケティングを貸借対照表の合計から切り離す |
| API契約・ラインナップ | 銀行が定めた日付と会社が定めた方法論を引用する |

出典: 最新に検討された中間開示は、2026 年 1 月に発行された 2025 年の中間報告書です。新しい数値は、この測定期間と黙って混合されるのではなく、置き換えられるべきです。 ^[Sources: https://gmo-aozora.com/company/disclosure.html; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf; https://gmo-aozora.com/api-cooperation/.]

## 5. 規制および政策の境界

| レイヤー | 法令／規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | 標準的な普通銀行の監督 |
| オープン・バンキング API | 2017  銀行法 改正 | API 提供義務。Bank API for Developers がこれを活用 |
| 預金保険 | 預金保険機構 | 標準的な円預金のカバレッジ |
| AML／CFT — 法人口座 | 金融庁 + 警察庁 + 国税庁 + FATF 第 4  次審査 | 法人口座の実質的支配者の確認について、FATF 後の高まった期待 |
| 組込み型ファイナンスのパートナー銀行モデル | [[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] | API ダイレクトのパートナー銀行アーキテクチャは、BaaS パートナー・チャネル・アーキテクチャとは異なる |
| 姉妹グループの連結 | 金融商品取引法 — クロスグループ活動向け | GMO インターネットグループを通じたグループ報告の連結 |

出典: ライセンスのカテゴリーと法人のステータスは、FSA ワークブックと銀行の現在の開示内容と照合されます。製品/API の義務には、この概要だけではなく、基礎となる法律、監督資料、および契約が必要です。 ^[Sources: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf; https://gmo-aozora.com/policy/openapi-policy.html.]

## Related

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/minna-bank-baas-model]]
- [[banking/post-megabank-positioning]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[banking/sony-bank]] · [[banking/daiwa-next-bank]] · [[banking/ui-bank]]
- [[payment-firms/gmo-aozora-net]]
- [[payment-firms/gmo-financial-hd]]
- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/gmo-coin]]
- [[regional-banks/aozora-bank]]
- [[regional-banks/ssnb]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]

## Sources

- GMO あおぞらネット銀行 コーポレートサイト（https://gmo-aozora.com/）。
- GMO あおぞらネット銀行 会社概要 — 株式保有：資本 あおぞら 50%／GMO IG 25%／GMO FH 25%。議決権 あおぞら 85.12%／GMO IG 7.43%／GMO FH 7.43%（https://gmo-aozora.com/company/outline.html）。
- GMOあおぞら銀行のAPI接続概要とラインナップ（https://gmo-aozora.com/api-cooperation/, https://gmo-aozora.com/business/api-cooperation/apilineup.html).
- あんしんワイド 商品ページ（https://gmo-aozora.com/anshin-wide/）。
- GMOあおぞらネット銀行の財務開示指標と2025年中間開示（https://gmo-aozora.com/company/disclosure.html, https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf).
- GMO インターネットグループ コーポレートサイト（https://www.gmo.jp/）。
- あおぞら銀行 コーポレートサイト（https://www.aozorabank.co.jp/）。
- FSA 免許銀行一覧（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。
