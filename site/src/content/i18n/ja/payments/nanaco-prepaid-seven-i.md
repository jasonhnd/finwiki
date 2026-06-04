---
source: payments/nanaco-prepaid-seven-i
source_hash: 3474b1a3e75c4ec0
lang: ja
status: machine
fidelity: ok
title: "nanaco: Seven & i Group のコンビニエンスストアアンカー型前払電子マネー"
translated_at: 2026-06-02T16:33:58.477Z
---
# nanaco: Seven & i Group のコンビニエンスストアアンカー型前払電子マネー

## ウィキ上の位置づけ

この項目は [[payments/INDEX|payments index]] の配下に置かれる。Seven & i をアンカーとする前払発行者ページであり、FSA レジストリの見方については [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] と対になり、小売アンカーの直接比較については [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] と対になる。[[payments/waon-prepaid-aeon|WAON]]（AEON 側の対応物）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]]（FeliCa ピアスキーム）、[[payments/famipay-valucreate-strategy|FamiPay]]（コンビニエンスストアのコード決済側対応物）と比較する。発行者 / グループアンカーは [[card-issuers/seven-card-service|Seven Card Service]]（FSA 登録前払発行者）、[[payment-firms/seven-payment-service|Seven Payment Service]]（決済サービス）、[[regional-banks/seven-bank|Seven Bank]]（グループ銀行レール）、[[retail/seven-and-i-hd|Seven & i Holdings]]。ロイヤルティ連携は nanaco ポイント経済性として [[loyalty/japan-points-landscape|Japan points landscape]] へ振り分ける。

## 要約

**nanaco** は、Seven & i Holdings グループの **コンビニエンスストアアンカー型前払電子マネー**であり、WAON の同時期ローンチと並行して 2007-04 に開始された。[[card-issuers/seven-card-service|株式会社セブン・カードサービス]]（FSA 登録の第三者型 前払式支払手段 発行者、法人番号 4010001088278, 、2007-02-22登録）が発行し、nanaco は **FeliCa** 非接触 IC 上で動作する。**20,000+ 7-Eleven Japan 店舗網**に加え、イトーヨーカドー、そごう・西武、アカチャンホンポ、Denny's Japan、広いグループ外加盟店網で支配的な前払電子マネーである。決済は [[payment-firms/seven-payment-service|Seven Payment Service]] を通じ、[[banking/INDEX|Seven & i financial-services platform]] の下で行われ、[[regional-banks/seven-bank|Seven Bank]]（グループ銀行レール、ATM チャージ）とセブンカード・プラスのクレジットカード提携によるオートチャージが並ぶ。nanacoポイントのロイヤルティ通貨は 1:1 で利用可能残高へ変換され、WAON POINT モデルと並行する。

## 発行者と運営構造

| 観点 | 読み方 |
|---|---|
| ブランド所有者 | Seven & i Holdings |
| FSA 前払発行者名義 | [[card-issuers/seven-card-service\|株式会社セブン・カードサービス]] |
| 法人番号 | 4010001088278 |
| FSA 登録日 | 2007-02-22 |
| 決済 / 支払サービス | [[payment-firms/seven-payment-service\|株式会社セブン・ペイメントサービス]] |
| グループ銀行レール | [[regional-banks/seven-bank\|株式会社セブン銀行]] (ATM チャージ、オートチャージ) |
| グループカードレール | セブンカード・プラス (nanaco IC 内蔵の Visa / JCB 提携カード) |
| 開始年 | 2007-04 |
| 技術 | FeliCa 非接触 IC |
| モバイルレール | Mobile nanaco (Osaifu Keitai), nanaco app, Apple Pay (Wallet 連携による一部端末) |
| チャージ上限 | カードあたり ¥50,000  |
| 1 回のチャージ上限 | 典型的には ¥29,000  |

## 法的根拠: 前払式支払手段 (第三者型前払式支払手段)

[[payments/waon-prepaid-aeon|WAON]] と同様に、nanaco は [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3  の前払枠組みの下で **第三者型前払式支払手段** として登録されている。主な規制上の帰結は次のとおり。

- [[card-issuers/seven-card-service|Seven Card Service]] は FSA（関東財務局）に登録され、[[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] に掲載される。
- 半期ごとの **未使用残高供託** 義務: 未使用残高が閾値（¥10M）を超える場合、利用者資金保護として未使用残高の半額を法務局に供託する。
- **発行終了時を除き原支払者への返金はない**。
- **Breakage** は休眠 / 紛失カードにより発行者 P&L に寄与する。Seven & i はグループ IR で残高数値を開示している。
- PSA の前払閾値の下で AML / KYC の例外が適用される。

[[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] 枠組みとの構造的な違いは、2023 PSA 改正の下でも nanaco を前払レーンに留める。価値は店舗利用専用であり、ピアツーピア移転はできない。

## 受入フットプリント

受入ネットワークは、まず Seven & i Group の小売アンカーを中心に構築され、その後グループ外へ拡張される。

| 階層 | 説明 | 例 |
|---|---|---|
| 内側 — Seven & i Group | グループのコンビニエンスストアおよび小売アンカー | 7-Eleven Japan（約 21,000 店舗）、Ito-Yokado、Sogo & Seibu、Akachan Honpo、Denny's Japan、York Mart、York Benimaru |
| 中間 — グループ銀行レール | Seven Bank と Seven Card による ATM チャージ、オートチャージ | [[regional-banks/seven-bank\|Seven Bank]] ATMs（Seven 以外の場所を含む全国）、Seven Bank 口座オートチャージ |
| 外側 — クロスマーチャント | nanaco タッチを受け入れるグループ外加盟店 | Tower Records（以前）、ガソリンスタンド、ドラッグストア、ファストフード、Pia チケットカウンター |
| モバイルレール | Apple Pay / Osaifu Keitai のグローバル FeliCa 端末 | FeliCa 対応 POS 全般 |
| 税 / 公共料金支払 | nanaco 固有の収納票支払ユースケース | 7-Eleven レジでの所得税 / 固定資産税支払（nanaco で 払込票 を支払う）— nanaco 独自の特徴的なフロー |

**税 / 公共料金の収納票支払** は、構造的に重要な nanaco 固有フローである。7-Eleven は税通知や公共料金請求書などの公金 払込票 をレジで受け付け、そこで nanaco が利用できるため、納税者はこれらの支払いで nanacoポイントを獲得できる。AEON は同等範囲の公共料金 / 税金 払込票 を受け付けないため、[[payments/waon-prepaid-aeon|WAON]] には同等のフローがない。

## KPI スナップショット

| 指標 | 読み方（直近の公開開示） |
|---|---|
| 累計発行カード / ID | 数千万規模。Seven & i 統合報告書は、カード数で上位 3 の小売前払ブランドの一つとして nanaco の累計発行を報告している。 |
| 年間取引件数 | コンビニエンスストアレジでのタッチ件数においてトップ級の小売前払（非常に高頻度のタッチアンカー）。 |
| 7-Eleven 店舗カバレッジ | 全国約 21,000 店舗（すべて nanaco を受け入れる）。 |
| グループ受入拠点 | 大規模 — Seven & i の小売フットプリント全体。 |
| nanacoポイント発行 | ¥200 = 1 point、7-Eleven の典型的な基本料率。 |

正確な期別取引額 / 件数は [[retail/seven-and-i-hd|Seven & i HD]] セグメント IR と [[card-issuers/seven-card-service|Seven Card Service]] 報告で開示される。FinWiki は四半期数値を転載せず、IR 文書を引用する。

## 戦略: コンビニエンスストアのキャッシュレスアンカー

Seven & i 内での nanaco の戦略的役割:

1. **コンビニエンスストアレジの処理速度** — FeliCa タッチはピークスループット時の 7-Eleven レジでコード決済 QR スキャンより速い。nanaco はコード決済が置き換えにくい構造的な速度優位を保つ。
2. **税 / 公共料金 払込票 のキャッシュレス化** — 7-Eleven レジ受入を通じ、税 / 公共料金の現金支払をキャッシュレスに転換する独自の位置づけ。
3. **グループ金融サービスのクロスセル** — nanaco 利用は [[regional-banks/seven-bank|Seven Bank]] の口座開設と Seven Card クレジットカード発行につながる。
4. **訪日観光客受入** — Mobile nanaco / Apple Pay は日本国内の海外 iPhone ユーザーにも届く。Seven & i の高密度都市店舗網と組み合わさり、意味のある観光客キャッシュレスレーンとなる。
5. **コード決済との共存** — Seven & i Group は 7-Eleven レジで PayPay、楽天ペイ、d払い、au PAY も受け入れる。nanaco は複数レール受入の中で **グループロイヤルティをアンカーとする** レールであり、コード決済の単純な競合ではない。

2019 7pay 事件（セキュリティ障害後に撤退した短命の 7pay コード決済商品）は、Seven & i が Seven ブランドのコード決済を再試行するのではなく、nanaco を持続的なグループキャッシュレスアンカーとして位置づけることを強めた。

## 関連項目

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

## 出典

- nanaco official site (nanaco-net.jp).
- Seven Card Service corporate site (7card.co.jp).
- Seven & i Holdings corporate site (7andi.com) — group structure and IR.
- Seven-Eleven Japan corporate site (sej.co.jp) — store network and register acceptance.
- Seven Bank corporate site (7bank.co.jp) — group bank rail and ATM charge.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Seven Card Service entry, registered 2007-02-22).
- FSA prepaid payment instruments policy page.
- METI cashless policy page.
