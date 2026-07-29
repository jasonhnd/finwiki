---
source: derivatives/swap-execution-facility-japan
source_hash: 6a9d0f60e9327138
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "スワップ執行ファシリティ — 日本版相当制度（ETP regime）"
translated_at: 2026-07-29T19:15:00.000Z
---

# スワップ執行ファシリティ — 日本版相当制度（ETP regime）

## 要約

日本は、金融商品取引法に基づき、OTC デリバティブ向けの **電子取引基盤（ETP）**を規制している。これは日本独自の枠組みであり、米国の SEF ライセンスではない。金融庁の 2015 年九月の施行資料は、対象となる円 LIBOR IRS について、ETP での執行義務、注文板または三者以上への RFQ による執行方法、取引後情報の公表を説明していた。現在の商品、運営者、許認可、免除は、現行の金融庁規則・登録簿で確認する必要がある。2015 年当時の対象範囲を、現在の TONA 義務であるかのように置き換えてはならない。

本項目は、文書で確認できる日本の ETP の境界と、公開情報から判断できる範囲の限界を扱う。グローバルなベンダーのマーケティングページから、現在のプラットフォーム順位、対象商品、電子執行比率、ボイスブローカー比率を推定しない。

## ウィキ上の位置づけ

この項目は OTC インフラクラスタ内の [[derivatives/INDEX|derivatives index]] の配下に位置する。ポストトレード清算側は [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]]、基礎となる円 IRS 市場は [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]、フランチャイズ経済性は [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]、cleared-execution の清算側は [[securities/japan-securities-clearing-corp|JSCC]]、より広い plumbing 文脈は [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、現物株式執行との比較は [[securities/japan-best-execution-sor-pts|Japan best execution / SOR / PTS]] をあわせて読む。

## ETP regime が重要な理由

2008 後の G20 Pittsburgh 枠組みは、中央清算と trade repository 報告に加えて、**「プラットフォーム上での取引」**を柱に含んでいた。その論理は次のとおりである。

- **プレトレード透明性** — 標準化 OTC 商品は、複数ディーラーが競争するプラットフォーム上で気配提示されるべきであり、それによりエンドユーザーの bid-offer spread を縮小する。
- **最良執行の比較可能性** — buy-side counterparty は複数ディーラーの quote を比較できるべきである。
- **相対取引の不透明性低減** — 執行を voice / chat から audit trail を備えた電子プラットフォームへ移すことで、市場公正性の監督を支援する。
- **流動性の集中** — ETP 上の multi-dealer RFQ は、相対執行で分断される流動性を集約する。

実装は法域により異なる。

- **US (Dodd-Frank Title VII)** — SEF。指定商品について trade-execution requirement を発動する "Made Available to Trade (MAT)" 判定プロセスを持つ。
- **EU (MiFID II)** — 指定デリバティブに対する Trading Obligation の下での MTFs（multilateral trading facilities）および OTFs（organized trading facilities）。
- **Japan (FIEA)** — FSA 登録 / 監督下の Electronic Trading Platforms (ETPs)。指定商品には on-platform execution obligation が課される。

法域間比較には、各法域の現行の法的資料が必要である。以下では、日本に関する事実を米国・EU の呼称と分けて記載する。

### 登録と監督

日本で OTC デリバティブ向け ETP を運営する主体には、通常、次が必要となる。

- FIEA に基づく **Electronic Trading Platform 事業者 としての FSA 登録**（商品範囲に応じた特定カテゴリ。円 IRS、外貨建て IRS、該当する場合の CDS、その他の標準化 OTC デリバティブを対象とする）。
- market-conduct、pre-trade / post-trade transparency、member-onboarding、system-resilience、[[derivatives/otc-clearing-jp-trade-repository|JFSA-designated trade repository]] との trade-reporting integration に関する **FSA ルールの遵守**。
- mandatory clearing 対象商品について、[[securities/japan-securities-clearing-corp|JSCC]] との **clearing-integration arrangements**。

### 電子執行義務の対象範囲

金融庁の 2015 年の施行概要は、対象となる円 LIBOR IRS について、プラットフォーム上での執行義務を説明した。その後この指標は公表停止となったため、現在の対象範囲を判断するには、現行の金融商品取引法関係文書と金融庁資料が必要である。

商品条件、取引相手の範囲、閾値、免除は現行規則に照らして判定する必要があり、ここでは一般的な対象外一覧を提示しない。

### プレトレードおよびポストトレード透明性

金融庁の 2015 年の概要は、注文板または三者以上への RFQ による執行と、取引後情報の公表を説明している。ただし、取引施設の記録が ISDA、BIS、日銀の公表物に自動的に供給されるとは述べていない。現在の掲載内容、時期、遅延、監査証跡の要件は、現行規則と運営者の許認可から確認する必要がある。

Source: ^[source:https://www.fsa.go.jp/common/conference/danwa/20150923/01.pdf]

### 電子プラットフォーム

運営者の名称、法人、許可業務、現在の登録状況は、金融庁の登録業者資料で確認しなければならない。ベンダーが世界各地で提供する SEF、債券、FX の機能は、同じ法人が日本の ETP であることや、特定商品が日本の許可範囲に入ることを証明しない。

Source: ^[source:https://www.fsa.go.jp/en/regulated/licensed/index.html]

### Interdealer voice brokers

本項目は、インターディーラー・ブローカーの一覧を維持せず、グループのグローバルサイトから取扱商品を推定しない。OTC 商品の取扱いを帰属させる前に、日本法人名と現在の登録を確認する必要がある。

### Single-dealer platforms

シングルディーラー型のインターフェースと多者間 ETP は異なる構造だが、法的取扱いは実際のサービス内容によって決まる。ここではプラットフォームのブランド一覧や、報告システムとの自動連携を推定しない。

## 電子執行比率とボイスブローカー比率

引用した金融庁資料は、現在の商品別の電子／ボイス比率を示していない。比較には、取引件数、想定元本、出来高のいずれかで分母を定義し、執行方法を分類した日付付きのデータセットが必要である。

## US SEF および EU MiFID II OTF / MTF との比較

| 金融庁の 2015 年概要に記載された日本 ETP の特徴 | 証拠の限界 |
|---|---|
| 開始日 | 当時定義された対象範囲について、電子取引基盤の利用義務は九月 1 日（2015 年）に始まった |
| 概要資料の商品 | 円 LIBOR IRS。この歴史的な呼称は、現在の TONA の対象範囲を証明しない |
| 執行方法 | 注文板、または三者以上への RFQ |
| 透明性 | 金融庁が取引後情報の公表を説明 |
| 外国プラットフォームの経路 | 外国電子取引基盤向けの許可枠組みを説明 |

Source: ^[source:https://www.fsa.go.jp/common/conference/danwa/20150923/01.pdf]

米国・EU の制度は、それぞれの現行一次資料に基づいて比較すべきである。電子執行比率や規則の厳格さについて、相対的な順位をここでは主張しない。

## FSA dealer regulation

日本の OTC デリバティブ市場で活動する dealer banks は、FIEA の下で次のように規制される。

- **Type I FIBO (Financial Instruments Business 事業者)** — OTC derivatives intermediation を含む broker-dealer activity を対象とする。
- **Banking license**（銀行 entity component — [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] 参照）— 銀行および証券 entity の双方を運営する megabank-affiliated dealers 向け。
- **JSDA membership** — 自主規制上の conduct supervision。
- **JSCC membership** — clearing-eligible products 向け。

FSA dealer regulation は次を対象とする。

- **Capital adequacy** — OTC derivative exposure について、銀行 entity には Basel framework、証券 entity には FIEA capital rules に対応。
- **Risk management** — internal models、limits、governance。
- **Customer protection** — suitability rules、disclosure requirements、retail-end-user OTC derivative sales を含む conduct-of-business rules。
- **Market-conduct supervision** — market abuse、manipulation、conflicts of interest の surveillance。

Customer-protection layer は、dealer banks が **corporate-end-user clients**（[[finance/japan-corporate-fx-and-rate-hedge-policy|FX and rate exposure]]向け treasury hedges）や **retail / small-business clients**（embedded derivatives を含む structured products）に OTC derivatives を販売する場面で特に重要である。十分に sophisticated でない end-users への複雑な OTC structures の mis-selling という歴史的事案が、FSA conduct rules の段階的な厳格化を促してきた。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[money-market/tanshi-company-business-model]]
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 出典

- FSA, English-language pages on FIEA framework, ETP registration, and OTC derivatives supervision.
- FSA, Financial Instruments Business Operators registry (fibo.pdf).
- BOJ, payment / market — OTC derivatives execution statistics.
- Tradeweb, regulated-platforms overview (Japan ETP scope reference).
- Bloomberg, electronic-trading services overview.
- TP ICAP (parent of ICAP / Tullett Prebon), BGC Brokers, and Tradition group corporate pages for voice-broker franchise scope.
- JPX / OSE / TSE, listed-derivatives execution rules (for comparison boundary).
- ISDA, SwapsInfo and trade-execution analysis publications.
