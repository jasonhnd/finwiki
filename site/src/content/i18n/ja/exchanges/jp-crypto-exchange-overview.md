---
source: exchanges/jp-crypto-exchange-overview
source_hash: 6cbedeba6ca63680
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の暗号資産交換業概要 — FSA / JVCEA 規制下の VASP 市場"
translated_at: 2026-06-26T08:29:09.704Z
---
# 日本の暗号資産交換業概要 — FSA / JVCEA 規制下の VASP 市場

## 要約日本の暗号資産交換業は、金融庁・財務局の登録制と [[exchanges/jvcea-self-regulatory-overview|JVCEA]] 自主規制の二層で成り立つ。2017-04-01 に暗号資産交換業登録制が始まり、2023-06-01 には電子決済手段等取引業も制度化された。2026-02-28 時点の金融庁英語版登録一覧では暗号資産交換業者は 27 業者。国内市場は「登録 VASP + JVCEA 会員 + FSA 監督 + 税務報告/CARF」まで含めて見る必要がある。

## 1. 制度構造

| 層 | 内容 | 主要参照 |
|---|---|---|
| 法律 | 資金決済法上の暗号資産交換業登録 | [[exchanges/fsa-vasp-registration-system|FSA registration]] |
| 自主規制 | JVCEA の会員審査・自主規則・取扱銘柄管理 | [[exchanges/jvcea-self-regulatory-overview|JVCEA overview]] |
| デリバティブ | 金商法下の暗号資産デリバティブ | [[exchanges/jp-vasp-derivative-license-system|derivatives licensing]] |
| カストディ | 分別管理・コールド保管・信託等 | [[exchanges/jp-vasp-cold-storage-segregation-rules|cold storage rules]] |
| 税務 | 所得税・法人税・CARF 情報交換 | [[exchanges/jp-crypto-asset-taxation-detailed|crypto taxation]] |
| 海外業者 | 無登録勧誘への警告・アプリ対応 | [[exchanges/fsa-foreign-exchange-warning-system|FSA warning system]] |

日本銀行は暗号資産を、電子的に記録・移転できる財産的価値であり、法定通貨ではないものとして説明する。国内で交換業を行うには金融庁・財務局登録が必要。

## 2. 市場マップ

| 区分 | 代表的な事業者 | 注記 |
|---|---|---|
| 独立系老舗 | [[exchanges/jp-exchange-bitflyer|bitFlyer]], [[exchanges/jp-exchange-bitbank|bitbank]], [[exchanges/jp-exchange-btcbox|BTCBOX]] | 2017 登録制初期からの中核 |
| 金融グループ系 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]], [[exchanges/jp-exchange-gmo-coin|GMO Coin]], [[exchanges/jp-exchange-rakuten-wallet|Rakuten ウォレット]] | 証券・FX・銀行グループ接続 |
| 海外系日本法人 | [[exchanges/jp-exchange-binance-japan|Binance Japan]], [[exchanges/jp-exchange-okcoin-japan|OKJ]], [[exchanges/jp-exchange-osl-japan|OSL Japan]] | 日本法人化・登録取得が 参入ゲート |
| デリバティブ専業/証券系 | [[exchanges/jp-exchange-sbi-securities|SBI Securities]], [[exchanges/jp-exchange-monex|Monex]], [[exchanges/jp-exchange-traders-securities|Traders Securities]] | 現物とデリバのライセンス分担 |
| 機関向け・特殊 | [[exchanges/jp-exchange-crypto-garage|Crypto Garage]], [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]], [[exchanges/jp-exchange-jpyc|JPYC]] | カストディ, RWA, EPI-adjacent |

JVCEA 会員ページでは、第一種会員数と業務種別（暗号資産交換業、暗号資産デリバティブ取引業、電子決済手段等取引業）が確認できる。金融庁登録一覧は「登録番号・業者名・所在地・取扱暗号資産」を見る一次ソース。

## 3. 戦略的な読み方

- **登録制が 参入障壁**: 日本居住者向けサービスは登録が前提。海外大手は無登録状態で警告を受けるか、日本法人を買収・設立して登録を取るかの二択になる。
- **銘柄数と安全性の トレードオフ**: JVCEA 銘柄審査は国内上場銘柄を制限し、海外 CEX より商品数を抑える一方、投資者保護と市場健全性を優先する。
- **販売所収益構造**: 国内個人市場では販売所スプレッドが収益源になりやすく、取引所板の厚み・手数料競争とは別に見る必要がある。
- **金融グループ接続**: SBI、GMO、楽天、Monex、メルカリ等は、証券・FX・銀行・ポイント・EC との クロスセル が強み。
- **ステーブルコイン / EPI 隣接領域**: 2023-06-01 以降は電子決済手段制度が別レイヤーとして立ち、暗号資産交換業と ステーブルコイン仲介の境界が重要になる。

## 4. 規制と政策

- 金融庁登録は暗号資産交換業の入口であり、登録なしに国内向け交換業を行うことはできない。
- JVCEA は認定自主規制団体として、会員規則・銘柄審査・取引管理・広告規制などを担う。
- 事件史（Mt.Gox、Coincheck、Zaif、DMM Bitcoin 等）は、分別管理・コールド保管・AML/CFT・内部管理ルールの強化に直結した。
- 税務面では国税庁の CARF 対応が進み、国内外の暗号資産取引情報交換が制度化される方向。

## 関連項目

- [[exchanges/fsa-vasp-registration-system|FSA VASP registration]]
- [[exchanges/jvcea-self-regulatory-overview|JVCEA overview]]
- [[exchanges/jp-vasp-parent-company-map|parent company map]]
- [[exchanges/fsa-foreign-exchange-warning-system|FSA warning system]]
- [[regional-banks/ssnb|ssnb]] · [[exchanges/INDEX|exchanges INDEX]] · [[INDEX|FinWiki index]]

## 出典

- 金融庁「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
- 金融庁「暗号資産交換業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf
- FSA「List of Registered Crypto-asset Exchange Service Providers in Japan」: https://www.fsa.go.jp/en/regulated/ライセンスd/en_kasoutuka.pdf
- JVCEA「会員一覧」: https://jvcea.or.jp/member/
- 日本銀行「暗号資産とは何ですか？」: https://www.boj.or.jp/about/education/oshiete/money/c27.htm
- 国税庁「CARF」: https://www.nta.go.jp/taxes/shiraberu/kokusai/carf/index.htm

---

> [!info] 校正ステータス
> 信頼度: **likely**。登録業者数・制度時点は変動しやすいため、次回更新時は金融庁 PDF と JVCEA 会員ページを再確認する。
