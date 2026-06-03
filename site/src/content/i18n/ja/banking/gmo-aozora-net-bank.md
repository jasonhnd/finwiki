---
source: banking/gmo-aozora-net-bank
source_hash: c816ab6a50282de2
lang: ja
status: machine
fidelity: ok
title: "GMO あおぞらネット銀行 営業プロファイル (GMO あおぞらネット銀行)"
translated_at: 2026-06-02T11:47:37.308Z
---

# GMO あおぞらネット銀行 営業プロファイル (GMO あおぞらネット銀行)

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下に位置し、[[JapanFG/gmo-aozora-net|GMO あおぞらネット銀行 entity anchor]] にあるエンティティアンカーの営業プロファイル版である。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメントマップの中で、法人 API のピア [[JapanFG/ssnb|住信SBIネット銀行 / NEOBANK]] および消費者主導のネット銀行コホート [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] と照らし合わせ、親グループのコンテキスト [[JapanFG/gmo-financial-hd|GMO Financial Holdings]] · [[JapanFG/aozora-bank|あおぞら銀行]] とともに、BaaS フレームワーク [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]] の中で読むこと。決済側の統合については [[payments/japan-bank-api-payment-agency-route|Japan bank API payment agency route]] と [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud control]] を経由する。

## 要約

GMO あおぞらネット銀行(GMO Aozora Net Bank, Ltd.)は、日本のネット銀行ユニバースにおける**法人／中小企業／フィンテック API 銀行**のアンカーであり、[[banking/rakuten-bank|Rakuten Bank]] / [[banking/paypay-bank|PayPay Bank]] / [[banking/au-jibun-bank|au Jibun Bank]] の消費者エコシステム志向や [[JapanFG/ssnb|SSNB / NEOBANK]] の BaaS パートナーチャネルアーキテクチャとは区別される。同行は合弁事業である:公式の会社概要によれば、[[JapanFG/aozora-bank|あおぞら銀行]] が株式の50%(および議決権の85.12%)を保有し、GMO 側([[JapanFG/gmo-financial-hd|GMO Internet Group]] 25% + GMO Financial Holdings 25%)は株式の50%を保有するが議決権は7.43% + 7.43%のみ — すなわち、あおぞらが議決権による支配を保持し、GMO が事業を推進する。同行は GMO が運営支配権を取得した後、元のあおぞら信託銀行(2004-04年設立)から **2018年**にリブランドされた(あおぞらは50%の株式 / 85.12%の議決権を保持)。主力商品は **あんしんワイド**(GMO ペイメントゲートウェイの取引データを用いた AI 駆動の引受による無担保の中小企業／フリーランサー向け事業ローン商品)と **「銀行 API for Developers」**(残高照会、振込、口座開設、会計 SaaS 統合をカバーする包括的な公開 API スタック)である。戦略的パートナーには [[fintech/japan-stablecoin-regulatory-landscape|fintech-adjacent operators]]、freee、マネーフォワード、Square、Stripe、Wise が含まれる。同行は従来のメガバンク法人バンキングと消費者主導のネットバンキングの間隙 — SaaS／中小企業／フリーランス経済向けの組込み型金融 — を狙う。

## 1. アイデンティティと所有構造

| 項目 | 内容 |
|---|---|
| 法人名 | 株式会社GMO あおぞらネット銀行 |
| 英語名 | GMO Aozora Net Bank, Ltd. |
| 設立 | 2004-04 (当初はあおぞら信託銀行) |
| リブランド | 2018 (あおぞら信託銀行から改称。フルのリテール／法人バンク業務を開始。注:GMO は過半数を取得しなかった — あおぞらは50%の株式 / 85.12%の議決権を保持) |
| 銀行免許区分 | 普通銀行(銀行法上の普通銀行)、FSA「その他の銀行」に分類 |
| 所有構造(公式会社概要による) | 株式:[[JapanFG/aozora-bank|あおぞら銀行 (Aozora Bank, 8304)]] 50.00% / [[JapanFG/gmo-financial-hd|GMO Internet Group]] 25.00% / GMO Financial Holdings 25.00%。議決権:あおぞら銀行 85.12% / GMO Internet Group 7.43% / GMO Financial Holdings 7.43% |
| 本社 | 東京(渋谷) |
| チャネルアーキテクチャ | アプリ + ウェブ + API。物理的支店なし |
| 主要規制当局 | 金融庁(FSA) |

### 合弁がどのように成立したか

```
2004-04        : あおぞら信託銀行が [[JapanFG/aozora-bank|あおぞら銀行]] (旧 日本債券信用銀行の系譜) の完全子会社の信託銀行として開業
2016-06        : GMO Internet が第三者割当を通じて初期出資(議決権 約14.9%)を取得。あおぞらが単独所有者でなくなる。2016-07 GMO は半分を GMO Click Holdings(現 GMO Financial Holdings)に移転
2018           : 同行があおぞら信託銀行から GMO あおぞらネット銀行にリブランドし、リテール + 法人バンキングを開始。あおぞらは50%の株式 / 85.12%の議決権を保持。GMO 側が事業を運営
2019 以降    : 法人 API および中小企業ローン商品を freee / マネーフォワード / Square / Stripe パートナーシップでスケール
2020 以降    : あんしんワイド中小企業事業ローンをローンチ、AI 引受のために GMO ペイメントゲートウェイの取引データを活用
```

> 注:報道による IPO 観測(正式な会社コミットメントなし)は `.opinions/banking/gmo-aozora-net-bank.md` に移動した(検証可能な一次情報源なし)。

### グループ内のポジショニング

```
GMO Internet Group, Inc. (TSE Prime 9449, 創業者/CEO 熊谷正寿)
  ├── GMO あおぞらネット銀行 (GMO 側: GMO IG + GMO FH 経由で 50% の株式 / 14.86% の議決権 — このエントリ) — 法人 / 中小企業 / API 銀行
  ├── [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] (TSE Prime 3769) — 決済処理インフラ
  ├── [[JapanFG/gmo-click-securities|GMO Click Securities]] — ネット証券 / FX
  ├── [[JapanFG/gmo-coin|GMO Coin]] — 暗号資産取引所
  └── その他のインフラ / ホスティング / 広告子会社

[[JapanFG/aozora-bank|Aozora Bank (TSE Prime 8304, former 日本債券信用銀行)]]
  └── GMO あおぞらネット銀行 (50% の株式 / 85.12% の議決権) — 議決権支配株主
```

### 法人／中小企業／フリーランサーの口座フランチャイズ

| 商品 | 役割 |
|---|---|
| 法人口座開設 | フリーランサー、個人事業主、中小企業、スタートアップ向けに完全オンライン。即日／翌日の高速開設ポジショニング |
| 円決済口座 | SaaS、E コマース、プラットフォーム経済の中小企業向け営業口座 |
| マルチアカウント／サブアカウント | コスト分離／プロジェクト分離のための1つのマスターアカウント配下のサブアカウント |
| 一括振込 | 大量の給与および取引先支払い処理 |
| 外貨業務 | 限定的。クロスボーダー専門は通常 Wise / Stripe パートナーシップ経由でルーティング |
| デビット／法人カード | 法人カードのパイロット、パートナー発行 |

### 事業ローンの主力:あんしんワイド

| 機能 | 内容 |
|---|---|
| 商品タイプ | 無担保の中小企業／フリーランサー向け事業ローン |
| 引受 | 取引データ + 会計 SaaS データ + GMO ペイメントゲートウェイのアクワイアラーデータを用いた AI 駆動スコアリング |
| 対象借り手 | フリーランサー、個人事業主、SaaS を利用する中小企業、E コマース販売者 |
| 差別化要因 | 従来の銀行の法人ローンのタイムラインに対する即日／高速の意思決定ターンアラウンド |
| リスクチャネル | GMO あおぞらのバランスシート上の直接ローン |

### Bank API for Developers

同行の公開 API スタックは、日本の小・中規模ネット銀行の中でも深いものの1つである:

| API サーフェス | 機能 |
|---|---|
| 口座／残高 | リアルタイム残高、取引履歴の取得 |
| 振込 | プログラムによる振込発行 |
| 口座開設 | パートナーアプリ向けの組込み型口座開設フロー |
| マルチアカウント操作 | サブアカウント作成、バーチャルアカウント割り当て、プロジェクト分離 |
| 会計 SaaS コネクタ | freee、マネーフォワードなどへの事前構築済み統合 |
| アクワイアラー統合 | GMO ペイメントゲートウェイのデータへのリンク |
| カード発行とプリペイド | 発行のためのパートナープログラムの配管 |

### パートナーエコシステム(代表例)

| パートナー | 統合の役割 |
|---|---|
| freee | 会計 SaaS — 直接的な入出金フィードの照合 |
| マネーフォワード | 会計 SaaS — 同上 |
| Square | POS／アクワイアラー連携 |
| Stripe | オンライン決済アクワイアラー連携 |
| Wise | クロスボーダー決済パートナー |
| [[JapanFG/gmo-coin|GMO Coin]] | 姉妹グループの暗号資産オン／オフランプ |
| [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] | 姉妹グループの決済アクワイアリングデータと決済 |

### GMO あおぞらが競合する領域

| セグメント | ポジション | 差別化要因 |
|---|---|---|
| フリーランサー／個人事業主の口座 | 強い | 高速オンライン開設、ソロワーカー向けの低摩擦 |
| SaaS／E コマース中小企業の営業口座 | 強い | API の深さ、会計 SaaS 統合 |
| 中小企業の無担保運転資金ローン | あんしんワイドのレーン | グループ決済データを用いた AI 引受 |
| 組込み型金融のパートナー銀行 | 成長中 | API ファーストアーキテクチャ |
| メガバンク法人バンキングの置き換え | 限定的 | メガバンクがコスト効率的にサービスを提供しないセグメントを狙い、コアクライアントベースは狙わない |
| 消費者主導のエコシステムバンキング | 対象外 | [[banking/rakuten-bank|Rakuten]] / [[banking/paypay-bank|PayPay]] / [[banking/au-jibun-bank|au Jibun]] との正面衝突を避ける |

### 3軸の競合マップ

| 軸 | ネット銀行のタイプ | 例 | GMO あおぞらの重複 |
|---|---|---|---|
| 消費者エコシステム | ポイント主導のリテール | [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] | 最小限 — 異なる顧客セグメント |
| 資産形成 | FX／住宅ローン／投信 | [[banking/sony-bank|Sony Bank]] · [[banking/daiwa-next-bank|Daiwa Next Bank]] | 最小限 — 異なる顧客セグメント |
| BaaS パートナーチャネル | パートナーブランド主導のバンキング | [[JapanFG/ssnb|SSNB NEOBANK]] · [[banking/minna-bank-baas-model|Minna Bank]] | 隣接 — 共有のパートナー関係、異なるアーキテクチャ |
| 法人 API ダイレクト | 直接の中小企業／フリーランサー／SaaS 経済銀行 | **GMO あおぞら** | コア競合:上記のいずれも真に重複しない |

## 4. KPI の形

詳細なポイントインタイムの数値(口座数、預金残高、ローンブックの規模、あんしんワイドの残高、パートナー数)は GMO あおぞらおよび親会社 GMO Internet Group の IR 開示に現れる。このページはすべてのポイントインタイムの数値を再現するのではなく、フランチャイズパターンを追跡する。GMO 時代の営業サイクル(2018年〜現在)を通じたフランチャイズパターンは以下を示す:

| 指標 | パターン |
|---|---|
| 法人口座数 | 着実に成長 — フリーランス／個人事業主／スタートアップのセグメントが最も速く拡大 |
| 預金残高 | 営業残高主導(預金プロモーション主導ではない)。消費者ネット銀行より資金調達に占める預金の割合は低い |
| ローンブック | あんしんワイド + 一般法人ローン。成長中 |
| パートナー／API 統合数 | マルチパートナー拡大。freee / マネーフォワード / Square / Stripe / Wise がアンカー |

## 5. 規制および政策境界

| レイヤー | 法令／規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | 標準的な普通銀行監督 |
| オープンバンキング API | 2017 銀行法 改正 | API 提供義務。Bank API for Developers はこれを活用 |
| 預金保険 | 預金保険機構 | 標準的な円預金カバー |
| AML / CFT — 法人口座 | 金融庁 + 警察庁 + 国税庁 + FATF 第 4 次審査 | 法人口座の実質的支配者の確認に関する FATF 後の高まった期待 |
| 組込み型金融のパートナー銀行モデル | [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] | API ダイレクトのパートナー銀行アーキテクチャは BaaS パートナーチャネルアーキテクチャとは区別される |
| 姉妹グループ連結 | 金融商品取引法 — グループ横断的活動向け | GMO Internet Group を通じたグループ報告連結 |

## 関連項目

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
- [[JapanFG/gmo-aozora-net]]
- [[JapanFG/gmo-financial-hd]]
- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/gmo-coin]]
- [[JapanFG/aozora-bank]]
- [[JapanFG/ssnb]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]

## 出典

- GMO あおぞらネット銀行 コーポレートサイト(https://gmo-aozora.com/)。
- GMO あおぞらネット銀行 会社概要 — 株式保有:株式 あおぞら 50% / GMO IG 25% / GMO FH 25%;議決権 あおぞら 85.12% / GMO IG 7.43% / GMO FH 7.43%(https://gmo-aozora.com/company/outline.html)。
- Wikipedia: GMOあおぞらネット銀行 — 株式保有の歴史と現在の構造(2026-05-29 確認, https://ja.wikipedia.org/wiki/GMOあおぞらネット銀行)。
- GMO あおぞら Bank API for Developers(https://gmo-aozora.com/api/)。
- あんしんワイド 商品ページ(https://gmo-aozora.com/anshin-wide/)。
- GMO Internet Group コーポレートサイト(https://www.gmo.jp/)。
- あおぞら銀行 コーポレートサイト(https://www.aozorabank.co.jp/)。
- FSA 免許銀行リスト(https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx)。
