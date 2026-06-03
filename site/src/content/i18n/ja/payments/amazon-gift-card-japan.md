---
source: payments/amazon-gift-card-japan
source_hash: 0a1a27dd4347c3d3
lang: ja
status: machine
fidelity: ok
title: "Amazon Gift Card Japan: クローズドループ型 EC 前払"
translated_at: 2026-06-02T16:33:58.483Z
---
# Amazon Gift Card Japan: クローズドループ型 EC 前払

## ウィキ上の位置づけ

この項目は、Amazon Japan ギフトカードの前払発行者ページとして [[payments/INDEX|payments index]] 配下にあり、FSA 登録簿の見方を扱う [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] と対になります。[[payments/apple-gift-card-japan|Apple Gift Card Japan]]、[[payments/google-play-gift-card-japan|Google Play Gift Card Japan]]（プラットフォームをアンカーとするクローズドループ型ギフトカードの比較対象）、[[payments/quo-card-prepaid|QUO Card]]（複数加盟店型のオープンループギフト）、[[payments/visa-gift-card-japan|Visa Gift Card]]（ブランドネットワーク前払）と比較してください。第三者小売をアンカーとする前払（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）とは区別してください。Amazon Gift Card は **クローズドループ**（Amazon.co.jp のみで利用可能）であり、WAON / nanaco は第三者の複数加盟店で受け入れられます。法的枠組みは [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] です。

## 要約

**Amazon Gift Card（Amazonギフト券）** は Amazon.co.jp の **クローズドループ型前払 EC クレジット** です。日本では **Amazon Japan G.K.（アマゾンジャパン合同会社）** が発行し、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] に基づく 自家型（単一加盟店 / クローズドループ）前払式支払手段として登録されています。[[payments/quo-card-prepaid|QUO Card]] および [[payments/visa-gift-card-japan|Visa Gift Card]]（どちらもオープンループ / 複数加盟店型）とは異なり、Amazon Gift Card はマーケットプレイスでの購入に **Amazon.co.jp のみ** で使えます。流通レールは、**eGift デジタルコード**（Eメール、SNS 配送、カスタマイズ可能）、**プラスチックギフトカード**（Lawson / FamilyMart / MiniStop / 7-Eleven / ドラッグストア等のコンビニ販売）、**チャージタイプ**（コンビニレジ / Amazon サイトでのアカウント残高チャージ）、**ボックス / 封筒型の物理ギフト包装** にまたがります。この商品は **贈答**（受取人向けのデジタル / 物理 eGift）と **自己チャージ**（クレジットカードを持たない利用者の Amazon.co.jp カードレス決済）の両方を対象としており、とくに銀行サービスに十分アクセスできない層、未成年、クレジットカード非保有層に重要です。

## 発行者と運営構造

| 観点 | 読み方 |
|---|---|
| 運営会社 | アマゾンジャパン合同会社 (Amazon Japan G.K.) |
| グループ親会社 | Amazon.com, Inc. (US) |
| FSA 前払登録 | 自家型前払式支払手段（クローズドループ）— 単一加盟店 Amazon.co.jp での利用 |
| 法的分類 | クローズドループ型前払（第三者型ではない）— `daisan.xlsx` 第三者リストには掲載されない |
| 日本での開始年 | 2003 （Amazon.co.jp は 2000 に開始。ギフトカード商品群はその後拡大） |
| 額面 | プラスチック / ボックスカードの固定額面（¥500, ¥1,000, ¥2,000, ¥3,000, ¥5,000, ¥10,000）と、eGift / チャージタイプ向けの変動額面・自由選択額面（通常、1取引あたり ¥15  から ¥500,000 ） |
| 流通レール | Amazon.co.jp eGift、コンビニでの物理カード、アカウント残高チャージ、B2B 法人一括プログラム |
| 受入範囲 | Amazon.co.jp のみ |
| 有効期限 | 発行 / 最終チャージから 10  年 |

## 法的根拠: 自家型前払式支払手段（クローズドループ / 単一加盟店）

Amazon Gift Card は、受入範囲が発行者自身のサービス（Amazon.co.jp）に限定されるため、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3  に基づく **自家型前払式支払手段**（クローズドループ型前払）として登録されています。これが [[payments/quo-card-prepaid|QUO Card]]（第三者型 — 多数の加盟店で受け入れられる）との構造的な違いです。主な規制上の帰結は次のとおりです。

- **異なる FSA 登録簿** — クローズドループ発行者は `daisan.xlsx` ではなく `jika.xlsx` に掲載されます。この項目は [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] には掲載されません。
- **一部で低い規制負担** — 第三者加盟店精算がなく、クローズドループの滞留資金は監視しやすい一方、半期ごとの **未使用残高供託** 義務はあります。
- **発行終了時を除き、元の支払者への返金は不可** — Amazon Gift Card 残高は現金に払い戻せません。
- **失効益** は 10 年の有効期限に制約されますが、Amazon.co.jp の規模ではなお重要です。

## 流通レールとユースケース

| レール | 説明 |
|---|---|
| **eGift（Eメールタイプ）** | Email / SMS / LINE で配送されるコード。デザインをカスタマイズでき、送付者が金額とメッセージを選ぶ。受取人は Amazon.co.jp でコードを入力する。 |
| **印刷タイプ (Printable)** | 印刷して物理的に手渡すための PDF ギフトコード。 |
| **チャージタイプ (Charge type)** | Amazon.co.jp 上で、クレジットカード、銀行振込、コンビニ払い、ATM（Pay-easy）を使ってアカウント残高にチャージする。Amazon 残高の自己チャージに使われる。 |
| **コンビニ・ATM・ネットバンキングタイプ (Convenience / ATM / net bank)** | Amazon サイトで注文し、コンビニ / ATM / ネットバンキングで支払うとアカウントに反映される。 |
| **プラスチックタイプ / ボックスタイプ** | コンビニやドラッグストアで販売される物理プラスチックギフトカードまたはボックス入りギフトカード。 |
| **B2B 法人ギフトカード** | 従業員 / 顧客向けギフト配布のための法人一括購入。 |

日本では **自己チャージのユースケース** が構造的に重要です。Amazon.co.jp 利用者の中には、クレジットカードを持たない、または登録したくない層が相当数あり、コンビニで Amazon Gift Card 残高をチャージして Amazon の購入代金を残高から支払います。これは **銀行サービスに十分アクセスできない利用者のためのキャッシュレス導入口** として機能しており、他国における前払デビットカードのユースケースに近いものです。

## ギフトカード不正 / 詐欺懸念

Amazon Gift Card は、日本の **「電子マネー型特殊詐欺 / 振り込め詐欺」** の中で多用されてきました。税務当局、Amazon カスタマーサポート、家族などを装う詐欺電話が、被害者にコンビニで Amazon Gift Cards を購入させ、電話でコードを読み上げさせます。警察庁（NPA）、FSA、消費者保護当局は、この手口について繰り返し注意喚起しています。主な対策は次のとおりです。

- コンビニ店員が >¥10,000  のギフトカード購入者に注意喚起し、購入目的を確認する。
- Amazon Japan が消費者向け警告ページを公開し、詐欺注意喚起メッセージを追加している。
- これは、日本におけるギフトカードのオープン流通に対する主要な規制・社会的圧力の一つです。

## KPI スナップショット

| 指標 | 読み方（公開情報） |
|---|---|
| Amazon Gift Card 累計発行額 | フランチャイズ通算では数兆円規模の重要な規模（業界推計。Amazon は日本単独のギフトカード開示をしていない） |
| コンビニ流通浸透 | 主要コンビニチェーンすべて（Lawson、FamilyMart、MiniStop、7-Eleven、Daily Yamazaki、Seicomart）が物理 Amazon Gift Cards を扱う |
| eGift 活動 | デジタル配送量は大きく、COVID 後のリモートギフト普及で増加 |
| 自己チャージ層 | カードレス / 銀行サービスに十分アクセスできない Amazon.co.jp 利用者の相当部分が、Gift Card チャージを主要支払手段として使う |

Amazon は日本セグメントのギフトカード KPI を財務開示しておらず、数値は業界推計と間接指標に依存します。

## 戦略: クローズドループ型キャッシュレス導入口 + ギフト流通

Amazon Gift Card Japan の戦略的役割は次のとおりです。

1. **Amazon.co.jp へのキャッシュレス導入口** — カードレス利用者が Gift Card 残高をチャージして Amazon で取引できるため、比較的クレジットカード比率の低い日本小売人口に対する Amazon の到達可能顧客層を広げる。
2. **ギフト流通カテゴリの獲得** — 個人ギフト向け eGift と、従業員 / 顧客ギフト向け法人 B2B 一括購入を取り込む。
3. **滞留資金 / 失効益の経済性** — 多額の未使用ギフトカード残高は、Amazon の運転資本を支えるクローズドループの滞留資金になる。
4. **コンビニ流通レールのアンカー** — コンビニでのギフトカード流通は、銀行サービスに十分アクセスできない利用者の主要獲得レーンである。
5. **複数レール流通** — eGift、物理カード、チャージタイプ、B2B が併存し、異なるユースケースを食い合わずに取り込む。

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## 出典

- Amazon Gift Card Japan ページ (amazon.co.jp/giftcards)。
- Amazon Gift Card 利用規約 / ヘルプページ。
- Amazon Japan G.K. 会社開示。
- FSA 前払式支払手段の政策ページ（クローズドループ / 自家型枠組み）。
- FSA `daisan.xlsx`（クロスチェック — Amazon が第三者型掲載ではなくクローズドループであることを確認）。
- METI キャッシュレス政策ページ。
