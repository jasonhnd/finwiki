---
source: banking/japan-net-bank-deposit-feature-matrix-2026
source_hash: a4f8531a985207da
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "日本のネット銀行預金・機能マトリクス 2026"
translated_at: 2026-07-29T03:30:48.108Z
---

# 日本のネット銀行預金・機能マトリクス 2026

## TL;DR

日本のオンライン銀行市場は単一のカテゴリーではありません。事業者は、グループ所有権、直接販売かパートナー販売か、製品範囲、公開形式によって異なります。したがって、このページには、変動しやすい残高、レート、手数料、ランキング、またはローンチの前提を長期的な表に凍結するのではなく、**各主張が検証できる場所**が記録されます。顧客条件については各銀行の現在の商品ページを、貸借対照表の数値については最新の開示資料または IR 資料を、ライセンスのステータスについては FSA 登録簿を使用してください。

## Wiki ルート

このページは、2026ヴィンテージの預金・機能比較サーフェスとして [[banking/INDEX|banking index]] の下に位置する。セグメントレベルのフレーミングは [[banking/japan-net-bank-competition-map|Japan net bank competition map]] と [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] にある。銀行ごとの個別ページ：[[banking/sony-bank|Sony Bank]]、[[banking/ui-bank|UI Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]。オペレーティング・モデルは [[banking/japan-baas-operating-models|Japan BaaS operating models]] と [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] にある。ポスト・メガバンクの文脈：[[banking/post-megabank-positioning|post-megabank positioning]]。

## なぜ 2026

三つの構造的なシフトが、2026における預金・機能の比較を特に有用なものにしている。

1. **金利の正常化が預金競争を再始動させた。** 日銀のマイナス金利政策からの出口は、2024-2025 にかけてプラスの短期金利の領域を回復させ、これが長年続いた「すべての預金金利はゼロ」という単純化を打ち破った。ネット銀行は再び、階層化された金利、FX 預金、仕組預金商品で差別化している — セグメントレベルのフレーミングについては [[banking/japan-net-bank-competition-map|Japan net bank competition map]] を参照。
2. **銀行 API を通じた組込み金融が新しい BaaS サーフェスである。** [[fintech/INDEX|fintech]] の下にある銀行 API 制度は、主流の販売へと成熟した。[[banking/japan-baas-operating-models|Japan BaaS operating models]] は、パートナー支店およびホワイトラベル口座のアーキテクチャを記録している。ネット銀行は、銀行 API、ホワイトラベル口座コンテナ、またはその両方を公開しているかどうかで、実質的に異なる。
3. **住宅ローンの組成がネット銀行にとって主要なスケールの軸になった。** [[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]] は、それぞれかなりの規模の変動金利住宅ローンのフローを運営している。[[finance/japan-acquisition-finance|Japan acquisition finance]] の文脈と [[banking/post-megabank-positioning|post-megabank positioning]] は、ネット銀行の住宅ローンが、なぜ変動金利のブックにおいてメガバンクの組成者と真っ向から競合するようになったのかを説明している。

## 対象となる銀行ユニバース

11 行が比較の軸となる。

- **エコシステムに支えられたリテール** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **証券隣接／資産形成** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[regional-banks/sbi-shinsei-bank|SBI Shinsei]] の文脈項目、および [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK / 住宅ローンを軸とするネット銀行）。
- **法人 API ／ SME** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **BaaS ／パートナー主導** — [[banking/minna-bank-baas-model|Minna Bank]]（福岡 FG のデジタルバンク・ブランド）、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK パートナー・スタック。
- **地域デジタル** — [[banking/ui-bank|UI Bank]]（東京きらぼし FG）。
- **フィンテック発行** — [[banking/mercari-bank|Mercari Bank]]（2025-2026 ローンチ）。
- **郵政／政府に支えられた** — [[regional-banks/japan-post-bank|Japan Post Bank]] のデジタルチャネル（ゆうちょダイレクト ＋ ゆうちょ Pay）は、純粋なネット銀行ではないものの、デジタルチャネルの比較として含まれる。

このコホートは、法人専用のデジタル貸し手（例：Funds）、ウォレット専用の事業者（銀行実体を伴わない [[card-issuers/paypay-card|PayPay Card]]）、およびローンチ前のプロジェクトを除外する。

## コアマトリックス — 事業体と開示ルート

| バンク/チャネル | グループまたは操作コンテキスト | 実体に関する主要な証拠 | 数値変化の主な証拠 |
|---|---|---|---|
| [[banking/rakuten-bank|楽天銀行]] | 楽天グループ | 金融庁の銀行登記簿と銀行の会社概要 | 最新の銀行開示/IRおよび現在の商品ページ |
| [[banking/sumishin-sbi-net-bank|住信SBIネット銀行]] | 三井住友トラストとSBIグループの背景 | 金融庁の銀行登記簿と銀行の会社概要 | 最新の銀行開示/IRおよびNEOBANKパートナーの発表 |
| [[banking/paypay-bank|ペイペイ銀行]] | PayPay / グループエコシステム | 金融庁の銀行登記簿と銀行の会社概要 | 最新の銀行開示情報と現在の商品ページ |
| [[banking/au-jibun-bank|auじぶん銀行]] | KDDIとMUFGグループの背景 | 金融庁の銀行登記簿と銀行の会社概要 | 最新の銀行開示情報と現在の商品ページ |
| [[banking/sony-bank|ソニー銀行]] | ソニーフィナンシャルグループ | 金融庁の銀行登記簿と正式な会社概要 | 最新の開示情報と製品固有のページ |
| [[banking/daiwa-next-bank|大和ネクスト銀行]] | 大和証券グループ | 金融庁の銀行登記簿と正式な会社概要 | 最新の開示情報と現在の製品ページ |
| [[banking/gmo-aozora-net-bank|GMOあおぞらネット銀行]] | あおぞら銀行とGMOインターネットグループの背景 | 金融庁の銀行登記簿と正式な会社概要 | 最新開示情報と公式API・製品ページ |
| [[banking/ui-bank|UIバンク]] | 東京きらぼしFG | 金融庁の銀行登記簿と正式な会社情報 | 最新の開示情報と現在の製品ページ |
| [[banking/minna-bank-baas-model|みんな銀行]] | 福岡FG | 金融庁の銀行登記簿と正式な会社概要 | 最新の開示情報と BaaS の公式発表 |
| [[banking/mercari-bank|メルカリ関連の銀行の取り組み]] | メルカリグループのコンテキスト | FSA 登録と日付付きグループ発表 | 発行時にライセンスを取得したエンティティと実際の製品条件を確認する |
| [[regional-banks/japan-post-bank|ゆうちょ銀行]] デジタルチャンネル | 銀行全体の支店とデジタルチャネルのオーバーレイ | 金融庁の銀行登記簿とゆうちょ銀行のプロフィール | 銀行全体の数字については銀行 IR。デジタルチャネル用語の商品ページ |

出典: ^[FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; each bank's official corporate, disclosure, IR, and product pages listed in this entry.]

## コアマトリックス — 製品証拠マップ

| 比較フィールド | 公開できるもの | 必要な公的証拠 | 規律を更新する |
|---|---|---|---|
| 入金と口座数 | 日付のある時点の数値、レポート範囲が記載されている | 最新の銀行開示情報またはグループIR一覧表 | 銀行専用口座とパートナーブランド口座を決して混合しないでください |
| FX預金・外貨 | 現在表示されている通貨と商品タイプ | 現在の銀行商品ページと顧客規約 | 同日の完全な国勢調査な​​しに幅をランク付けしないでください |
| 住宅ローンおよびその他のローン | 製品が現在提供されているかどうか、およびその企業によって提供されているかどうか | 現在の製品ページ。残高または組成の開示 | 直接発信、紹介、グループ会社提供を区別する |
| デビット/クレジット連携 | 名前付きライブカードまたはグループ連携 | 発行会社と銀行の商品ページ | ブランドだけから所有権を推測しないでください |
| API / BaaS | 公開された API、パートナー ブランチ、または指定されたライブ パートナーシップ | 銀行開発者ポータルまたは日付付きの共同発表 | 法定のオープンバンキング接続を商用BaaSから分離 |
| ATM、送金、レート、スプレッド条件 | 正確な条件は、現在の日付が添付されている場合のみ | 現在の料金、レート、商品状態のページ | キャンペーンと顧客層を一時的なものとして扱う |

出典: ^[FSA electronic-payment-services materials, https://www.fsa.go.jp/common/about/pamphlet/dendaigyo_start.pdf; official bank product and disclosure pages listed in the frontmatter.]

## 揮発性比較のための公開プロトコル

| 分野 | 最低限の証拠 | 必須のラベル | 掲載ルール |
|---|---|---|---|
| 預金残高 | 公式財務情報開示 | 貸借対照表の日付と単位 | レポートの境界を維持し、ランキングに丸めないでください |
| アカウント数 | KPIの正式開示 | 測定日とアカウントの定義 | パートナー/BaaS アカウントが含まれるかどうかを示す |
| 金利 | 銀行金利ページまたは顧客規約 | 取得日、期間、残高レベル、およびキャンペーンのステータス | 料金を後のレビューサイクルに持ち込まないでください |
| ATM・振込手数料 | 正式な料金表 | 取得日と顧客層 | 無料取引の記録条件 |
| FXスプレッド | 公式ライブレートまたはスプレッドページ | 通貨ペア、チャネル、取得時間 | 複数の通貨を「タイト/ワイド」に圧縮しないでください。 |
| パートナーシップ | 当事者からの日付付き共同発表 | 発表日と運用状況 | 発表、開始、一時停止、終了を区別する |

出典: ^[Official bank disclosures and customer terms listed in the frontmatter; FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

## 差別化の軸

### 預金ベースの比較

預金規模は、貸借対照表の日付、エンティティの境界、口座の定義、および単位を調整した後にのみ比較できます。銀行全体の数値をデジタル チャネルのサブセットと比較してはなりません。また、直接口座数をパートナー ブランドの口座を含む数と比較してはなりません。したがって、このページでは、おおよその順位表を維持するのではなく、読者を最新の開示情報に誘導します。

### 差別化としての FX 商品の厚み

[[banking/sony-bank|Sony Bank]] は FX の厚みのコーナーを明確に占める。[[banking/au-jibun-bank|au Jibun Bank]] は、多通貨 FX 預金と FX 証拠金取引を持つ最も近いピアである。[[banking/rakuten-bank|Rakuten Bank]] と [[banking/paypay-bank|PayPay Bank]] は、より狭い FX 商品メニューを提供する。FX を扱わない銀行（[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]）は、FX 顧客のセグメントを譲り渡している。

### スケールレバーとしての住宅ローン組成

変動金利型の住宅ローンは、住宅ローン市場に参入するネット銀行にとって、引き続き主要な資産区分である。[[banking/sumishin-sbi-net-bank|住信 SBI ネット銀行]]はネット銀行の主要な実行主体で、[[banking/sony-bank|ソニー銀行]]と [[banking/au-jibun-bank|au じぶん銀行]]が続く。[[banking/rakuten-bank|楽天銀行]]はグループ構造を通じて取り扱う。[[banking/paypay-bank|PayPay 銀行]]と [[banking/daiwa-next-bank|大和ネクスト銀行]]については、住宅ローンを固定的な比較項目として扱わない。

### 銀行 API の公開姿勢三つの公開階層が観察できる。

次の 3 つの出版層が観察可能です。

- **広範な法人 API** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] が軸である。法人トレジャリーと SaaS コネクタの API に明確に注力している。
- **広範な BaaS ／ホワイトラベル** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK）と [[banking/minna-bank-baas-model|Minna Bank]] BaaS。これらは、銀行がライセンスを保有しながら、パートナーブランドが自社の銀行ライクな UX を公開することを可能にする。
- **標準リテール銀行 API** — その他のほとんど。銀行 API は [[banking/japan-baas-operating-models|electronic payment agency / FA]] 制度のために公開されているが、銀行はホワイトラベルの販売を追求していない。

### 組み込み金融パートナー エコシステム

組み込み金融パートナーの列では、**流通面**と**直接顧客獲得**でどのネット銀行が競合しているかが明らかになります。 [[banking/sumishin-sbi-net-bank|住信SBIネット銀行]] NEOBANKを通じてJAL、ヤマダ、T（CCC）などと提携。 [[banking/minna-bank-baas-model|みんな銀行]] リクルートなどと提携。 [[banking/gmo-aozora-net-bank|GMOあおぞらネット銀行]] freee、MoneyForward、給与計算SaaSと連携。エコシステムの小売銀行 ([[banking/rakuten-bank|楽天銀行]], [[banking/paypay-bank|ペイペイ銀行]], [[banking/au-jibun-bank|auじぶん銀行]]）サードパーティのパートナーブランドではなく、独自のグループエコシステムに依存しています。

## クラスタ・サマリー — レバー別の競争マップ有用なクラスタの読み方。

役立つクラスターの読み取り値:

- **FX ＋ 資産形成クラスタ** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **住宅ローン組成クラスタ** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]]。
- **エコシステム・ウォレット・クラスタ** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **BaaS ／パートナー・クラスタ** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK、[[banking/minna-bank-baas-model|Minna Bank]]。
- **法人 ／ SME API クラスタ** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **地域デジタル・クラスタ** — [[banking/ui-bank|UI Bank]]、[[regional-banks/01-bank|01 Bank]]（ピア参照）。
- **フィンテック発行クラスタ** — [[banking/mercari-bank|Mercari Bank]]。
- **郵政の軸** — [[regional-banks/japan-post-bank|Japan Post Bank]]。

## 出典に関する留意点

1. **残高と口座の数値**には、報告日、単位、およびエンティティの境界が必要です。このページからコピーした見積もりではなく、最新の銀行開示情報を使用してください。
2. **アカウント定義**には、BaaS パートナー アカウントが含まれる場合と含まれない場合があります。発行者の定義を保持します。
3. **手数料、レート、キャンペーン、FX スプレッド**は頻繁に変更されます。現在の顧客条件を使用し、取得日を記録します。
4. **製品の入手可能性**は顧客セグメントまたはチャネルによって異なる場合があります。このマトリックスに含まれていないことは、銀行がその商品を提供していないという証拠にはなりません。
5. **パートナーシップのステータス**は、当事者による日付の発表から取得する必要があり、発表と発表を区別する必要があります。
6. **ライセンスステータス**は、現在の FSA 登録簿と照合する必要があります。

## リサーチ・チェックリスト

このマトリクスを拡張する際は、

1. 預金残高と口座数について、銀行の IR ページまたは四半期開示を引き出す。
2. FSA の銀行情報開示の集計を通じてクロスチェックする。
3. 銀行 API の厚みとパートナーリストについて、銀行の API デベロッパー・ポータルを読む。
4. 銀行の BaaS 姿勢を分類するために [[banking/japan-baas-operating-models|BaaS operating models]] ページを利用する。
5. 決済チャネルの文脈のために [[banking/quick-deposit-four-methods|quick deposit four methods]] を利用する。
6. ライセンス・カテゴリを確認するために [[banking/japan-banking-license-tier-comparison-matrix|banking license tier comparison]] を利用する。

## 関連

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/japan-baas-operating-models]]
- [[banking/post-megabank-positioning]]
- [[banking/sony-bank]]
- [[banking/ui-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/daiwa-next-bank]]
- [[banking/rakuten-bank]]
- [[banking/paypay-bank]]
- [[banking/au-jibun-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/sumishin-sbi-net-bank]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/quick-deposit-four-methods]]
- [[business/rakuten-group-mobile-finance-bundling-case]]
- [[business/sony-fg-partial-spinoff-case]]
- [[business/gmo-internet-group]]
- [[regional-banks/japan-post-bank]]
- [[megabanks/sbi-hd]]
- [[megabanks/mufg]]
- [[securities-firms/daiwa-sg]]
- [[regional-banks/01-bank]]
- [[INDEX|FinWiki index]]

## 出典

- FSA の免許銀行リストおよび銀行開示の集計。
- ソニー銀行の会社プロフィールおよび商品開示。
- UI 銀行のコーポレートサイトおよび商品ページ。
- GMO あおぞらネット銀行の会社概要および法人 API ドキュメント。
- 大和ネクスト銀行の会社開示および証券スイープのドキュメント。
- 楽天銀行のプレスリリースおよびグループ開示。
- PayPay 銀行の会社情報および商品ページ。
- 住信 SBI ネット銀行の会社プロフィールおよび NEOBANK パートナー開示。
- au じぶん銀行の業績開示。
- みんなの銀行のコーポレートサイトおよび BaaS パートナーページ。
- メルカリバンクのローンチ開示。
- 日本郵政銀行の IR。
