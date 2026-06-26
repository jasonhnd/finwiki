---
source: payments/waon-prepaid-aeon
source_hash: 6452b79c65ae7a78
lang: ja
status: machine
fidelity: ok
title: "WAON：イオングループの全国 IC プリペイド電子マネー"
translated_at: 2026-06-19T06:09:18.184Z
---

# WAON：イオングループの全国 IC プリペイド電子マネー

## ウィキ上の位置づけ

このエントリは [[payments/INDEX|payments index]] の下に、イオンをアンカーとするプリペイド発行者ページとして位置し、FSA レジストリビューについては [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]] と、リテールアンカーの直接比較については [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail 前払式 comparison]] とペアになる。[[payments/nanaco-prepaid-seven-i|nanaco]] (セブン&アイの相当物)、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式 economics]] (FeliCa のピア・スキーム)、[[payments/edy-rakuten-prepaid|Rakuten Edy]] (プラットフォーム非依存の FeliCa プリペイド) と比較すること。グループアンカーは [[retail/aeon-group|AEON Group]] と [[card-issuers/aeon-financial-service|AEON Financial Service]]；グループ銀行レールは [[card-issuers/aeon-bank|AEON Bank]]；ロイヤルティ統合は WAON POINT の経済性について [[loyalty/japan-points-landscape|Japan points landscape]] にルートする。

## TL;DR

**WAON** (イオンのマスコット「ワオン」にちなんで命名) は、**取引件数で日本最大のリテールアンカー型プリペイド電子マネーブランド** であり、[[payments/nanaco-prepaid-seven-i|nanaco]] と並ぶ二大主要クローズドループ・リテールプリペイドシステムの一つである。イオン株式会社により 2007-04 にローンチされ、WAON はイオングループ内で運営され、[[card-issuers/aeon-financial-service|AEON Financial Service]] が [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act 前払式 framework]] の下での第三者型前払式支払手段としての決済と発行者義務を担う。このシステムは **FeliCa** 非接触 IC (Suica / nanaco / Edy と同じ技術) 上で動作し、物理カード、おサイフケータイ経由の Mobile WAON、Apple Pay (限定デバイス)、AEON Pay スマートフォンアプリをサポートする。受け入れはイオングループの全リテールネットワーク (イオン、マックスバリュ、ミニストップ、イオンシネマ、ウエルシアなど) に加え、約 1M のグループ外加盟店に及ぶ。**WAON POINT** 統合はロイヤルティポイントを 1:1 で利用可能な残高に変換し、バンドルされた **イオンカード** の発行 / [[card-issuers/aeon-bank|AEON Bank]] オートチャージ連携が、イオンの金融サービス経済圏内にウォレットをアンカーする。

## 発行者と運営構造

| 次元 | 読み方 |
|---|---|
| ブランドオーナー | イオン株式会社 |
| FSA 登録上のプリペイド発行者 | イオン株式会社および [[card-issuers/aeon-financial-service\|AEON Financial Service]] 子会社が FSA の `daisan.xlsx` 第三者型プリペイドレジストリに掲載される |
| 決済 / 金融サービス | [[card-issuers/aeon-financial-service\|AEON Financial Service]] グループ |
| グループ銀行レール | [[card-issuers/aeon-bank\|AEON Bank]] (オートチャージ、ATM チャージ、口座連携) |
| グループカードレール | イオンカード (WAON IC を組み込んだ Visa / Mastercard / JCB のコブランド) |
| ローンチ年 | 2007-04 |
| 技術 | FeliCa 非接触 IC |
| モバイルレール | Mobile WAON (おサイフケータイ)、Apple Pay (日本リージョン SIM 付き iPhone 8+)、AEON Pay アプリ QR |
| チャージ上限 | カードあたり ¥50,000 |
| 1 回のチャージ上限 | 通常 ¥29,000 |

## 法的根拠：前払式支払手段 (第三者型前払式支払手段)

WAON は [[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] 第 3 章のプリペイド手段フレームワークの下で **第三者型前払式支払手段** として登録されている。主要な規制上の帰結：

- 発行者は FSA (関連する財務局) に登録しなければならず、[[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] に掲載される。
- 半期ごとの **未使用残高供託** 義務：未使用残高が ¥10M を超える場合、発行者は利用者資金保護として未使用残高の半分を法務局に供託 (供託) しなければならない。
- 発行停止時を除き **元の支払者への払い戻しなし** — 払い戻し不可ルールは [[payments/funds-transfer-vs-prepaid-boundary|資金移動 instruments]] との主要な経済的差別化要因の一つである。
- **ブレッケージ** (長年にわたり発行者に帰属する未償還残高) は休眠 / 紛失カードでイオンフィナンシャルサービスの損益に寄与する。
- 100% 残高が ¥100,000 の閾値を下回る場合の AML / KYC 免除 (既存の PSA の適用除外の下)。

[[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] フレームワーク (2023  PSA 改正の下での EPI) との境界は、WAON をプリペイドのレーンにしっかりと留める — 価値は現金等価の形態で個人間で移転できない。

## 受け入れフットプリント受け入れネットワークは同心円状に構造化されている：

| 階層 | 説明 | 例 |
|---|---|---|
| 内側 — イオングループ | グループのリテールおよびエンターテインメントのアンカー | イオンモール、イオン、マックスバリュ、ミニストップ、イオンシネマ、ウエルシア (ドラッグ)、KASUMI、ダイエー |
| 中間 — グループ連携 | グループ銀行 / カード連携のオートチャージポイント | [[card-issuers/aeon-bank\|AEON Bank]] ATM、イオンカード連携パートナーストア |
| 外側 — クロス加盟店 | WAON タップを受け入れる非グループ加盟店 | マクドナルド (過去)、吉野家、ドラッグストアチェーン、ガソリンスタンド |
| モバイルレール | Apple Pay / おサイフケータイ のグローバル加盟店 FeliCa 端末 | FeliCa を受け入れるあらゆる POS |

内側階層ネットワークの規模 (20,000  を超えるイオングループ店舗) は、コード決済 ([[payment-firms/paypay|PayPay]]、[[payment-firms/au-payment|au PAY]]、楽天ペイ、d払い) が限界的な新規ユーザー成長を捉えてもなお、WAON の設置ベースの地位を支える。

## KPI スナップショット定量的 KPI はイオンにより IR 資料および統合報告書で公開報告されている：

| 指標 | 読み方 (最新の公開開示) |
|---|---|
| 累計発行カード | Mobile WAON を含め 90M 超 (イオングループ 2024  IR 資料) |
| 年間取引件数 | 日本でタップ件数による最大のリテールプリペイド (キャッシュレスランキング上位 3 ) |
| 年間取引額 | イオングループ + グループ外加盟店フットプリントにわたる数兆円規模 |
| 加盟店受け入れポイント | イオングループを含め全国で約 1M |
| WAON POINT 発行 | イオングループ店舗で ¥200  = 1 ポイント (基本料率) に連動 |

期間ごとの正確な成長数値はイオン株式会社の開示およびイオンフィナンシャルサービスのセグメント IR にある；FinWiki エントリは四半期数値を重複させない — 現在の四半期 KPI については発行者 IR を参照のこと。

## 戦略：クローズドループのロイヤルティアンカー

イオングループ内での WAON の戦略的役割は、オープン加盟店のコード決済競争ではなく、**クローズドループのロイヤルティ + リテールアンカー型キャッシュレス** である。戦略的論理：

1. **グループの囲い込み** — WAON 残高はイオングループ店舗で最も経済的に使用される (最良の WAON POINT 蓄積率、毎月 20日 / 30日の「お客さま感謝デー」での 5% オフ割引)。
2. **金融サービスのクロスセル** — WAON の利用は [[card-issuers/aeon-bank|AEON Bank]] の口座開設、[[card-issuers/aeon-financial-service|AEON Financial Service]] のカード発行、イオン保険商品に寄与する。
3. **nanaco に対するブランド差別化** — WAON のモール / スーパーマーケット / ドラッグストアのフットプリントは nanaco のコンビニアンカー型のスコープと対照をなす；直接比較の分割は [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco comparison]] に文書化されている。
4. **コード決済の補完、代替ではない** — AEON Pay アプリは、FeliCa アンカー型の設置ベースを放棄することなく、コード決済を好む顧客に QR コードインターフェースを提供する。
5. **モバイルレールの拡張** — Apple Pay の有効化 (2016 以降) とおサイフケータイ経由の Mobile WAON は、そうでなければコード決済アプリにデフォルトする可能性のある新規デバイス顧客を維持する。

2023以降の [[card-issuers/aeon-financial-service|AEON Financial Service]] によるグループの決済 / 銀行 / カード事業の統合は、WAON をスタンドアロンのプリペイド商品ではなく、統合されたリテール金融サービススタックの消費者向けレイヤーとして再ポジショニングした。

## 関連

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/aeon-bank]]
- [[retail/aeon-group]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- WAON 公式サイト (waon.net) — 商品、チャージ、受け入れの文書。
- イオン株式会社コーポレートサイト — グループ構造と IR。
- イオンフィナンシャルサービスコーポレートサイト — 決済 / 金融サービスのスコープ。
- イオン銀行コーポレートサイト — グループ銀行レールとオートチャージ連携。
- FSA、`daisan.xlsx` — 第三者型前払式支払手段発行者の登録一覧。
- FSA 前払式支払手段ポリシーページ。
- METI キャッシュレスポリシーページ — キャッシュレス比率と事業者ランドスケープの文脈。
