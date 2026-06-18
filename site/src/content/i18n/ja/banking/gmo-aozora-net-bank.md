---
source: banking/gmo-aozora-net-bank
source_hash: 22531a3e69b5ed9d
lang: ja
status: machine
fidelity: ok
title: "GMO あおぞらネット銀行 オペレーティング・プロファイル（GMO あおぞらネット銀行）"
translated_at: 2026-06-18T23:33:48.367Z
---

# GMO あおぞらネット銀行 オペレーティング・プロファイル（GMO あおぞらネット銀行）

## Wiki route

本項は [[banking/INDEX|banking index]] に属し、[[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行 entity anchor]] のエンティティ・アンカーに対するオペレーティング・プロファイルの対となる項である。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメント・マップのなかで、法人 API のピアである [[regional-banks/ssnb|住信SBIネット銀行 / NEOBANK]] および消費者主導のネット銀行コホート [[banking/rakuten-bank|Rakuten Bank]]・[[banking/paypay-bank|PayPay Bank]]・[[banking/au-jibun-bank|au Jibun Bank]]・[[banking/sony-bank|Sony Bank]] と対照しつつ、[[payment-firms/gmo-financial-hd|GMO Financial Holdings]] および [[regional-banks/aozora-bank|あおぞら銀行]] の親グループのコンテキストとともに、また [[banking/baas-japan-landscape|BaaS Japan landscape]]・[[banking/japan-baas-operating-models|Japan BaaS operating models]] の BaaS フレームワークのなかで読むこと。決済サイドの統合については、[[payments/japan-bank-api-payment-agency-route|Japan bank API payment agency route]] および [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud control]] を経由してルーティングすること。

## TL;DR

GMO あおぞらネット銀行（GMO Aozora Net Bank, Ltd.）は、日本のネット銀行ユニバースにおける**法人／中小企業／フィンテック API 銀行**のアンカーであり——[[banking/rakuten-bank|Rakuten Bank]]／[[banking/paypay-bank|PayPay Bank]]／[[banking/au-jibun-bank|au Jibun Bank]] の消費者エコシステム志向、および [[regional-banks/ssnb|SSNB / NEOBANK]] の BaaS パートナー・チャネル・アーキテクチャとは異なる。同行はジョイント・ベンチャーである。公式の会社概要によれば、[[regional-banks/aozora-bank|あおぞら銀行]] が資本の 50%（および議決権の 85.12%）を保有する一方、GMO 側（[[payment-firms/gmo-financial-hd|GMO Internet Group]] 25% + GMO Financial Holdings 25%）は資本の 50% を保有するが議決権は 7.43% + 7.43% のみである——すなわち、あおぞらが議決権による支配を保持しつつ、GMO がオペレーションを駆動する。同行は、GMO がオペレーションのコントロールを取得した後、**2018** に元のあおぞら信託銀行（2004-04 設立）の形態からリブランドされた（あおぞらは資本 50%／議決権 85.12% を保持）。その旗艦商品は、**あんしんワイド**（GMO ペイメントゲートウェイの取引データを用いた AI 駆動の引受を伴う、無担保の中小企業／フリーランサー向け事業ローン商品）と、**「銀行 API for Developers」**（残高照会、振込、口座開設、会計 SaaS 統合をカバーする包括的な公開 API スタック）である。戦略パートナーには [[fintech/japan-stablecoin-regulatory-landscape|fintech-adjacent operators]]、freee、マネーフォワード、Square、Stripe、Wise が含まれる。同行は、伝統的なメガバンクの法人バンキングと消費者主導のネット・バンキングとの間のギャップを狙う——SaaS／中小企業／フリーランス経済のための組込み型ファイナンスである。

## 1. アイデンティティと所有

| 項目 | 内容 |
|---|---|
| 法人名 | 株式会社 GMO あおぞらネット銀行 |
| 英文名 | GMO Aozora Net Bank, Ltd. |
| 設立 | 2004-04 （当初はあおぞら信託銀行） |
| リブランド | 2018 （あおぞら信託銀行から改称。リテール／法人銀行業務をフル展開で開始。注：GMO は過半数を取得していない——あおぞらが資本 50%／議決権 85.12% を保持） |
| 銀行免許の区分 | 普通銀行（銀行法上の普通銀行）、FSA「その他の銀行」に分類 |
| 所有（公式の会社概要による） | 資本：[[regional-banks/aozora-bank|あおぞら銀行 (Aozora Bank, 8304)]] 50.00%／[[payment-firms/gmo-financial-hd|GMO Internet Group]] 25.00%／GMO Financial Holdings 25.00%。議決権：あおぞら銀行 85.12%／GMO Internet Group 7.43%／GMO Financial Holdings 7.43% |
| 本社 | 東京（渋谷） |
| チャネル・アーキテクチャ | アプリ + ウェブ + API。物理的な店舗なし |
| 主たる規制当局 | 金融庁（FSA） |

### この JV がどのように成立したか

```
2004-04        : あおぞら信託銀行が、[[regional-banks/aozora-bank|あおぞら銀行]]（旧 日本債券信用銀行の系譜）の完全子会社の信託銀行として開業
2016-06        : GMO インターネットが第三者割当により当初の出資（議決権 ~14.9%）を取得。あおぞらが単独所有者でなくなる。2016-07  に GMO はその半分を GMO クリックホールディングス（現 GMO Financial Holdings）へ移転
2018           : 同行があおぞら信託銀行から GMO あおぞらネット銀行へリブランドし、リテール + 法人バンキングを開始。あおぞらが資本 50%／議決権 85.12% を保持。GMO 側がオペレーションを運営
2019  以降    : 法人 API および中小企業向けローン商品を、freee／マネーフォワード／Square／Stripe のパートナーシップとともにスケール
2020  以降    : GMO ペイメントゲートウェイの取引データを AI 引受に活用し、あんしんワイドの中小企業向け事業ローンを開始
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
| 法人口座開設 | フリーランサー、個人事業主、中小企業、スタートアップ向けに完全オンライン。即日／翌日の高速開設のポジショニング |
| 円決済口座 | SaaS、e コマース、プラットフォーム経済の中小企業向けの運営口座 |
| マルチアカウント／サブアカウント | コスト分別／プロジェクト分別のための、1 つのマスター口座配下のサブ口座 |
| 一括振込 | 大量の給与および取引先支払の処理 |
| 外貨業務 | 限定的。クロスボーダーの専門化は典型的に Wise／Stripe のパートナーシップを経由してルーティング |
| デビット／法人カード | 法人カードのパイロット、パートナー発行 |

### 事業ローンの旗艦：あんしんワイド

| 特徴 | 内容 |
|---|---|
| 商品タイプ | 無担保の中小企業／フリーランサー向け事業ローン |
| 引受 | 取引データ + 会計 SaaS データ + GMO ペイメントゲートウェイのアクワイアラー・データを用いた AI 駆動のスコアリング |
| ターゲットの借り手 | フリーランサー、個人事業主、SaaS を利用する中小企業、e コマース販売者 |
| 差別化要素 | 伝統的な銀行の法人ローンのタイムラインに対する、即日／高速決定のターンアラウンド |
| リスク・チャネル | GMO あおぞらのバランスシート上での直接ローン |

### Bank API for Developers

同行の公開 API スタックは、中小規模のネット銀行のなかで日本でも有数の深さを持つ。

| API サーフェス | 機能 |
|---|---|
| 口座／残高 | リアルタイム残高、取引履歴の取得 |
| 振込 | プログラムによる振込の発行 |
| 口座開設 | パートナー・アプリのための組込み型口座開設フロー |
| マルチアカウント・オペレーション | サブ口座の作成、バーチャル口座の割り当て、プロジェクト分別 |
| 会計 SaaS コネクター | freee、マネーフォワード等への事前構築された統合 |
| アクワイアラー統合 | GMO ペイメントゲートウェイのデータへのリンク |
| カード発行およびプリペイド | 発行のためのパートナー・プログラムの配管 |

### パートナー・エコシステム（代表的なもの）

| パートナー | 統合の役割 |
|---|---|
| freee | 会計 SaaS — 直接の入出金フィードの照合 |
| マネーフォワード | 会計 SaaS — 同上 |
| Square | POS／アクワイアラーの連携 |
| Stripe | オンライン決済のアクワイアラーの連携 |
| Wise | クロスボーダー決済のパートナー |
| [[payment-firms/gmo-coin|GMO Coin]] | 姉妹グループの暗号資産オン／オフランプ |
| [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] | 姉妹グループの決済アクワイアリングのデータおよび決済 |

### GMO あおぞらが競争する領域

| セグメント | ポジション | 差別化要素 |
|---|---|---|
| フリーランサー／個人事業主の口座 | 強い | 高速なオンライン開設、ソロワーカー向けの低摩擦 |
| SaaS／e コマースの中小企業の運営口座 | 強い | API の深さ、会計 SaaS 統合 |
| 中小企業の無担保運転資本ローン | あんしんワイドのレーン | グループ決済データを用いた AI 引受 |
| 組込み型ファイナンスのパートナー銀行 | 成長中 | API ファーストのアーキテクチャ |
| メガバンクの法人バンキングの置き換え | 限定的 | メガバンクがコスト効率よくサービスしないセグメントを狙う。彼らの中核顧客基盤ではない |
| 消費者主導のエコシステム・バンキング | スコープ外 | [[banking/rakuten-bank|Rakuten]]／[[banking/paypay-bank|PayPay]]／[[banking/au-jibun-bank|au Jibun]] との真っ向からの競争を回避 |

### 三軸の競合マップ

| 軸 | ネット銀行のタイプ | 例 | GMO あおぞらの重複 |
|---|---|---|---|
| 消費者エコシステム | ポイント主導のリテール | [[banking/rakuten-bank|Rakuten Bank]]・[[banking/paypay-bank|PayPay Bank]]・[[banking/au-jibun-bank|au Jibun Bank]] | 最小限——異なる顧客セグメント |
| 資産形成 | FX／住宅ローン／投信 | [[banking/sony-bank|Sony Bank]]・[[banking/daiwa-next-bank|Daiwa Next Bank]] | 最小限——異なる顧客セグメント |
| BaaS パートナー・チャネル | パートナー・ブランド主導のバンキング | [[regional-banks/ssnb|SSNB NEOBANK]]・[[banking/minna-bank-baas-model|Minna Bank]] | 隣接——共有のパートナー関係、異なるアーキテクチャ |
| 法人 API ダイレクト | 直接の中小企業／フリーランサー／SaaS 経済の銀行 | **GMO あおぞら** | 中核の競合：上記のいずれも真には重複しない |

## 4. KPI の形状

きめ細かな時点の数値（口座数、預金残高、ローンブックの規模、あんしんワイドの残高、パートナー数）は、GMO あおぞらおよび親会社 GMO インターネットグループの IR 開示に現れる。本ページは、あらゆる時点の数値を再現するのではなく、フランチャイズのパターンを追跡する。GMO 時代のオペレーティング・サイクル（2018–現在）を通じたフランチャイズのパターンは次を示す。

| メトリック | パターン |
|---|---|
| 法人口座数 | 着実に成長——フリーランス／個人事業主／スタートアップのセグメントが最も速く拡大 |
| 預金残高 | 運営残高に駆動される（預金プロモーションに駆動されない）。消費者ネット銀行より、資金調達に占める預金シェアが低い |
| ローンブック | あんしんワイド + 一般法人ローン。成長中 |
| パートナー／API 統合数 | マルチパートナーの拡大。freee／マネーフォワード／Square／Stripe／Wise をアンカーとする |

## 5. 規制および政策の境界

| レイヤー | 法令／規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | 標準的な普通銀行の監督 |
| オープン・バンキング API | 2017  銀行法 改正 | API 提供義務。Bank API for Developers がこれを活用 |
| 預金保険 | 預金保険機構 | 標準的な円預金のカバレッジ |
| AML／CFT — 法人口座 | 金融庁 + 警察庁 + 国税庁 + FATF 第 4  次審査 | 法人口座の実質的支配者の確認について、FATF 後の高まった期待 |
| 組込み型ファイナンスのパートナー銀行モデル | [[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] | API ダイレクトのパートナー銀行アーキテクチャは、BaaS パートナー・チャネル・アーキテクチャとは異なる |
| 姉妹グループの連結 | 金融商品取引法 — クロスグループ活動向け | GMO インターネットグループを通じたグループ報告の連結 |

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
- Wikipedia：GMO あおぞらネット銀行 — 株式保有の沿革および現在の構造（2026-05-29 確認、https://ja.wikipedia.org/wiki/GMOあおぞらネット銀行）。
- GMO あおぞら Bank API for Developers（https://gmo-aozora.com/api/）。
- あんしんワイド 商品ページ（https://gmo-aozora.com/anshin-wide/）。
- GMO インターネットグループ コーポレートサイト（https://www.gmo.jp/）。
- あおぞら銀行 コーポレートサイト（https://www.aozorabank.co.jp/）。
- FSA 免許銀行一覧（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。
