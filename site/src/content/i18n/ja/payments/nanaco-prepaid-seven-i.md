---
source: payments/nanaco-prepaid-seven-i
source_hash: b3714cc0eeab2d1d
lang: ja
status: machine
fidelity: ok
title: "nanaco: セブン＆アイグループのコンビニを軸とするプリペイド電子マネー"
translated_at: 2026-06-19T06:09:18.110Z
---

# nanaco: セブン＆アイグループのコンビニを軸とするプリペイド電子マネー

## ウィキ上の位置づけ

この項目は、FSA 登録簿の観点で [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]] と、小売アンカーの直接比較で [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail 前払式 comparison]] と対になる、セブン＆アイを軸とするプリペイド発行体のページとして [[payments/INDEX|payments index]] の下に位置する。[[payments/waon-prepaid-aeon|WAON]]（イオンの対応物）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式 economics]]（FeliCa のピアスキーム）、[[payments/famipay-valucreate-strategy|FamiPay]]（コンビニのコード決済の対応物）と比較すること。発行体／グループのアンカーは [[card-issuers/seven-card-service|Seven Card Service]]（FSA 登録のプリペイド発行体）、[[payment-firms/seven-payment-service|Seven Payment Service]]（決済サービス）、[[regional-banks/seven-bank|Seven Bank]]（グループ銀行レール）、[[retail/seven-and-i-hd|Seven & i Holdings]] であり、ロイヤルティ統合は nanaco ポイントの経済性について [[loyalty/japan-points-landscape|Japan points landscape]] にルーティングされる。

## TL;DR

**nanaco** は、セブン＆アイ・ホールディングスグループの **コンビニを軸とするプリペイド電子マネー** であり、同時期の WAON ローンチと並行して 2007-04 にローンチされた。[[card-issuers/seven-card-service|株式会社セブン・カードサービス]]（FSA 登録の第三者型前払式支払手段発行体、法人番号 4010001088278,、2007-02-22登録）により発行され、nanaco は **FeliCa** 非接触 IC 上で動作し、**20,000店超のセブン-7・ジャパンの店舗網** に加えてイトーヨーカドーのスーパーマーケット、そごう・西武の百貨店、アカチャンホンポ、デニーズジャパン、および広範なグループ外加盟店フットプリントにおいて支配的なプリペイド電子マネーである。決済は [[banking/INDEX|Seven & i financial-services platform]] の下で [[payment-firms/seven-payment-service|Seven Payment Service]] を経由して動作し、[[regional-banks/seven-bank|Seven Bank]]（グループ銀行レール、ATM チャージ）およびオートチャージ用のセブンカード・プラスのクレジットカード・コブランドと並ぶ。nanaco ポイントのロイヤルティ通貨は 1:1 で利用可能残高に変換され、WAON POINT モデルと並行する。

## 発行会社 and operational structure

| 項目 | 読み方 |
|---|---|
| Brand owner | Seven & i Holdings |
| FSA 前払式発行会社 of record | [[card-issuers/seven-card-service\|株式会社セブン・カードサービス]] |
| Corporate number | 4010001088278 |
| FSA registration date | 2007-02-22 |
| 決済 / payment services | [[payment-firms/seven-payment-service\|株式会社セブン・ペイメントサービス]] |
| Group bank rail | [[regional-banks/seven-bank\|株式会社セブン銀行]] (ATM charge, auto-charge) |
| Group card rail | セブンカード・プラス (Visa / JCB co-brand with nanaco IC embedded) |
| Launch year | 2007-04 |
| Technology | FeliCa contactless IC |
| Mobile rail | Mobile nanaco (Osaifu Keitai), nanaco app, Apple Pay (limited devices via ウォレット integration) |
| Charge ceiling | ¥50,000 per card |
| Single charge max | ¥29,000 typical |

## Legal basis: 前払式支払手段 (third-party 前払式支払手段)

[[payments/waon-prepaid-aeon|WAON]] と同様に、nanaco は [[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] 第 3 章のプリペイドの枠組みの下で **第三者型前払式支払手段** として登録されている。主要な規制上の帰結：

- [[card-issuers/seven-card-service|Seven Card Service]] は FSA（関東財務局）に登録され、[[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] に掲載される。
- 半年ごとの **未使用残高供託** 義務：閾値（¥10M）を超えた場合、未使用残高残額の半分を法務局に（供託）利用者資金保護として供託。
- 発行終了時を除き、**原払込者への払い戻しはなし**。
- 休眠／紛失カードについて **失効益（ブレッケージ）** が発行体の損益に寄与する；セブン＆アイはグループ IR で残高数値を開示する。
- PSA のプリペイド閾値の下で AML／KYC の適用除外が適用される。

2023 PSA 改正の下での [[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] の枠組みとの構造的な区別が、nanaco をプリペイドのレーンに留めている — 価値は店舗限定であり、ピアツーピアでは譲渡できない。

## Acceptance footprint

受容ネットワークは、まずセブン＆アイグループの小売アンカー、次にグループ外への拡大によって構造化されている：

| 区分 | Description | Examples |
|---|---|---|
| Inner — Seven & i Group | Group convenience-store and retail anchors | 7-Eleven Japan (~21,000 stores), Ito-Yokado, Sogo & Seibu, Akachan Honpo, Denny's Japan, York Mart, York Benimaru |
| Middle — Group bank rail | ATM charge, auto-charge via Seven Bank and Seven Card | [[regional-banks/seven-bank\|Seven Bank]] ATMs (countrywide, including non-Seven locations), Seven Bank account auto-charge |
| Outer — Cross-加盟店 | Non-group 加盟店 accepting nanaco tap | Tower Records (formerly), gas stations, drugstores, fast food, Pia ticket counters |
| Mobile rail | Apple Pay / Osaifu Keitai global FeliCa terminals | Any FeliCa-accepting POS |
| Tax / utility payment | nanaco-specific receipt payment use case | Income tax / property tax payment via 7-Eleven レジ (using nanaco to pay 払込票) — a distinctive nanaco-only flow |

**税／公共料金の払込票決済** のユースケースは、構造的に重要な nanaco 固有のフローである：7-Eleven がレジで公金の払込票（税通知、公共料金請求書）を受け付け、そこで nanaco が受容されるため、納税者はこれらの支払いで nanaco ポイントを獲得できる — これは [[payments/waon-prepaid-aeon|WAON]] が同等に提供しないフローであり、イオンは同じ範囲の公共料金／税の払込票を受け付けないためである。

## KPI snapshot

| 指標 | Reading (most recent public disclosure) |
|---|---|
| Cumulative issued cards / IDs | Tens of millions; Seven & i 統合報告書 reports cumulative nanaco issuance among top-3 retail 前払式 brands by card count |
| Annual transaction count | Top-tier retail-前払式 by tap count at convenience-store registers (very high tap-frequency anchor) |
| 7-Eleven store coverage | ~21,000 stores nationwide (all accept nanaco) |
| Group acceptance points | Substantial — Seven & i full retail footprint |
| nanacoポイント issuance | ¥200 = 1 point at 7-Eleven typical base rate |

期間ごとの正確な取引金額／件数は [[retail/seven-and-i-hd|Seven & i HD]] セグメント IR および [[card-issuers/seven-card-service|Seven Card Service]] の報告で開示される — FinWiki は四半期数値を再現するのではなく IR 文書を引用する。

## Strategy: convenience-store cashless anchor

セブン＆アイ内における nanaco の戦略的役割：

1. **コンビニのレジ速度** — FeliCa タップは、ピークスループットの 7-Eleven のレジにおいてコード決済の QR スキャンより速い；nanaco は、コード決済が覆すことが難しい構造的な速度優位を保持している。
2. **税／公共料金の払込票のキャッシュレス変換** — 7-Eleven のレジ受容を通じて、税／公共料金の現金支払いをキャッシュレスに変換する独自の位置づけにある。
3. **グループ金融サービスのクロスセル** — nanaco の利用は [[regional-banks/seven-bank|Seven Bank]] の口座開設とセブンカードのクレジットカード発行に供給される。
4. **インバウンド観光客の受容** — モバイル nanaco／Apple Pay は日本国内の海外 iPhone ユーザーに到達する；セブン＆アイの高密度な都市店舗網と組み合わさることで、これは意味のある観光客キャッシュレスのレーンである。
5. **コード決済との共存** — セブン＆アイグループは 7-Eleven のレジで PayPay 受容、楽天ペイ、d 払い、au PAY も運営している；nanaco はマルチレール受容の中で **グループロイヤルティを軸とする** レールであり、コード決済の競合ではない。

2019 7pay のインシデント（セキュリティ障害の後に撤回された短命の 7pay コード決済プロダクト）は、セブンブランドのコード決済を再試行するのではなく、nanaco を持続的なグループキャッシュレスのアンカーとするセブン＆アイの位置づけを補強した。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/waon-prepaid-aeon]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/seven-card-service]]
- [[payment-firms/seven-payment-service]]
- [[regional-banks/seven-bank]]
- [[retail/seven-and-i-hd]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- nanaco official site (nanaco-net.jp).
- Seven Card Service corporate site (7card.co.jp).
- Seven & i Holdings corporate site (7andi.com) — group structure and IR.
- Seven-Eleven Japan corporate site (sej.co.jp) — store network and register acceptance.
- Seven Bank corporate site (7bank.co.jp) — group bank rail and ATM charge.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Seven Card Service entry, registered 2007-02-22).
- FSA prepaid payment instruments policy page.
- METI cashless policy page.
