---
source: payments/waon-prepaid-aeon
source_hash: 06a312e575b1caae
lang: ja
status: machine
fidelity: ok
title: "WAON：AEON Group の全国型 IC プリペイド電子マネー"
translated_at: 2026-06-03T00:53:08.264Z
---
# WAON：AEON Group の全国型 IC プリペイド電子マネー

## ウィキ上の位置づけ

この項目は[[payments/INDEX|payments index]]の配下に置かれ、AEON を軸にしたプリペイド発行体ページである。FSA 登録簿から見る[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]]、小売アンカー同士を正面比較する[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]と対になる。[[payments/nanaco-prepaid-seven-i|nanaco]]（Seven & i 側の対応項目）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]（FeliCa のピアスキーム）、[[payments/edy-rakuten-prepaid|Rakuten Edy]]（プラットフォーム非依存の FeliCa プリペイド）と比較する。グループのアンカーは[[retail/aeon-group|AEON Group]]と[[card-issuers/aeon-financial-service|AEON Financial Service]]、グループ銀行レールは[[card-issuers/aeon-bank|AEON Bank]]、ロイヤルティ統合は WAON POINT の経済性を扱う[[loyalty/japan-points-landscape|Japan points landscape]]につながる。

## 要約

**WAON**（AEON のマスコット「ワオン」に由来）は、**取引件数で見た日本最大の小売連動型プリペイド電子マネーブランド**であり、[[payments/nanaco-prepaid-seven-i|nanaco]]と並ぶ主要な閉ループ小売プリペイドシステムの一つである。WAON は 2007-04 に AEON Co Ltd により開始され、AEON Group 内で運営されている。決済と発行体義務は、[[card-issuers/aeon-financial-service|AEON Financial Service]]が[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]に基づく第三者型前払式支払手段として担う。システムは Suica / nanaco / Edy と同じ **FeliCa** 非接触 IC 上で動き、物理カード、Osaifu Keitai 経由の Mobile WAON、Apple Pay（一部端末）、AEON Pay スマートフォンアプリに対応する。加盟店網は AEON、MaxValu、MiniStop、AEON Cinema、Welcia など AEON Group の小売ネットワーク全体に加え、グループ外加盟店約 1M に広がる。**WAON POINT** 連携によりロイヤルティポイントを 1:1 で利用可能残高へ転換でき、同梱される **AEON Card** 発行と[[card-issuers/aeon-bank|AEON Bank]]のオートチャージ連携が、このウォレットを AEON の金融サービスエコシステム内に固定している。

## 発行体と運営構造

| 項目 | 読み方 |
|---|---|
| ブランド所有者 | AEON Co Ltd |
| FSA 上の前払式支払手段発行者 | AEON CO Ltd と[[card-issuers/aeon-financial-service\|AEON Financial Service]]子会社が、FSA の `daisan.xlsx` 第三者型前払式支払手段発行者登録簿に掲載される |
| 決済 / 金融サービス | [[card-issuers/aeon-financial-service\|AEON Financial Service]] group |
| グループ銀行レール | [[card-issuers/aeon-bank\|AEON Bank]]（オートチャージ、ATM チャージ、口座連携） |
| グループカードレール | AEON Card（Visa / Mastercard / JCB の提携カードで WAON IC を内蔵） |
| 開始年 | 2007-04 |
| 技術 | FeliCa 非接触 IC |
| モバイルレール | Mobile WAON（Osaifu Keitai）、Apple Pay（日本地域 SIM の iPhone 8+）、AEON Pay アプリ QR |
| チャージ上限 | 1枚あたり ¥50,000  |
| 1回チャージ上限 | 通常 ¥29,000  |

## 法的根拠：前払式支払手段（第三者型前払式支払手段）

WAON は、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]]第3 章の前払式支払手段枠組みの下で、**第三者型前払式支払手段**として登録されている。主な規制上の帰結は次のとおり。

- 発行者は FSA（該当する財務局）への登録が必要で、[[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]]に掲載される。
- 半期ごとの**未使用残高供託**義務がある。未使用残高が ¥10M を超える場合、発行者は利用者資金保護のため、未使用残高の半額を法務局に供託しなければならない。
- 発行終了時を除き、**元の支払者への払戻しはできない**。この払戻不可ルールは、[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer instruments]]との主要な経済的差異の一つである。
- 長年使われず発行者に帰属する未利用残高である**ブレークエージ**は、休眠・紛失カードを通じて AEON Financial Service の損益に寄与する。
- 既存の資金決済法上の適用除外により、100%の AML / KYC 免除が残高 ¥100,000 未満で認められる。

[[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]]の枠組み（2023 資金決済法改正に基づく EPI）との境界により、WAON は明確にプリペイドのレーンにとどまる。価値を現金同等の形でピアツーピア移転することはできない。

## 加盟店網

加盟店ネットワークは同心円状に構成される。

| 層 | 説明 | 例 |
|---|---|---|
| 内側 — AEON Group | グループ小売・娯楽のアンカー | AEON Mall, AEON, MaxValu, MiniStop, AEON Cinema, Welcia（ドラッグ）, KASUMI, Daiei |
| 中間 — グループ連動 | グループ銀行 / カード連携のオートチャージ接点 | [[card-issuers/aeon-bank\|AEON Bank]] ATM、AEON Card 連携の提携店舗 |
| 外側 — 横断加盟店 | WAON タッチを受け入れるグループ外加盟店 | McDonald's（歴史的加盟店）, Yoshinoya, ドラッグストアチェーン, ガソリンスタンド |
| モバイルレール | Apple Pay / Osaifu Keitai の FeliCa 対応加盟店端末 | FeliCa 対応 POS 全般 |

内側ネットワークの規模、すなわち 20,000 を超える AEON Group 店舗が、コード決済（[[payment-firms/paypay|PayPay]]、[[payment-firms/au-payment|au PAY]]、楽天ペイ、d払い）が限界的な新規利用者成長を取り込む中でも、WAON の導入基盤上の地位を支えている。

## KPI スナップショット

定量 KPI は、AEON の IR 資料と統合報告書で公開されている。

| 指標 | 読み方（直近の公開開示） |
|---|---|
| 累計発行枚数 | Mobile WAON を含め 90M 超（AEON Group 2024 IR 資料） |
| 年間取引件数 | タッチ件数で日本最大の小売プリペイド（キャッシュレスランキング上位 3 ） |
| 年間取引金額 | AEON Group とグループ外加盟店網を合わせ、数兆円規模 |
| 加盟店受入地点 | AEON Group を含め全国で約 1M |
| WAON POINT 付与 | AEON グループ店舗の基本料率で ¥200  = 1 ポイントに連動 |

正確な期間別成長率は AEON Co Ltd の開示と AEON Financial Service セグメント IR にある。FinWiki のこの項目は四半期数値を重複掲載しない。現在の四半期 KPI は発行体 IR を参照する。

## 戦略：閉ループのロイヤルティアンカー

AEON Group 内での WAON の戦略的役割は、オープン加盟店型コード決済との競争ではなく、**閉ループロイヤルティ + 小売連動キャッシュレス**である。戦略ロジックは次のとおり。

1. **グループ内囲い込み** — WAON 残高は AEON グループ店舗で使うと最も経済的である（最も良い WAON POINT 付与率、5%割引の「お客さま感謝デー」20日 / 30日）。
2. **金融サービスのクロスセル** — WAON 利用は[[card-issuers/aeon-bank|AEON Bank]]口座開設、[[card-issuers/aeon-financial-service|AEON Financial Service]]カード発行、AEON Insurance 商品につながる。
3. **nanaco との差別化** — WAON のモール / スーパー / ドラッグストアのフットプリントは、コンビニを軸にする nanaco の範囲と対照的である。正面比較は[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco comparison]]に記録されている。
4. **コード決済の補完であり、代替ではない** — AEON Pay アプリは、FeliCa を軸にした既存導入基盤を捨てずに、コード決済を好む顧客向けの QR コード接点を提供する。
5. **モバイルレールの拡張** — 2016 以降の Apple Pay 対応と Osaifu Keitai 経由の Mobile WAON により、コード決済アプリに流れがちな新端末利用者を維持する。

2023以降の[[card-issuers/aeon-financial-service|AEON Financial Service]]によるグループ決済 / 銀行 / カード事業の統合は、WAON を単独のプリペイド商品ではなく、統合された小売金融サービススタックの消費者向けレイヤーとして位置づけ直した。

## 関連項目

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

- WAON official site (waon.net) — product, charge, and acceptance documentation.
- AEON Co Ltd corporate site — group structure and IR.
- AEON Financial Service corporate site — settlement / financial-services scope.
- AEON Bank corporate site — group bank rail and auto-charge linkage.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list.
- FSA prepaid payment instruments policy page.
- METI cashless policy page — cashless-ratio and operator landscape context.
