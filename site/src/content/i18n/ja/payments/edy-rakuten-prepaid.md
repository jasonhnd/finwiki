---
source: payments/edy-rakuten-prepaid
source_hash: 08c22a10624c85e9
lang: ja
status: machine
fidelity: ok
title: "Rakuten Edy: プラットフォーム非依存型 FeliCa 前払式電子マネー"
translated_at: 2026-07-28T20:15:36Z
---

# Rakuten Edy: プラットフォーム非依存型 FeliCa 前払式電子マネー

## ウィキ上の位置づけ

本項目は [[payments/INDEX|決済インデックス]] の下にある Rakuten Edy の前払式発行会社ページであり、FSA 登録簿の視点では [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社の登録簿]] と、4 区分のスキーム比較では [[payments/japan-payment-scheme-economics-matrix|日本の決済スキーム経済性マトリクス]] と対をなす。現運営会社の [[payment-firms/rakuten-edy|楽天Edy株式会社]] は 2016-05-09 に設立され、2016-10 に Edy 事業を承継した。楽天ペイメントの完全子会社であり、法人番号 3010901038102、関東財務局長 第 00692 号（2016-07-21 登録）の第三者型前払式支払手段発行者である。Edy ブランド自体は、前身 bitWallet が 2001 年に開始したサービスに遡る。^[楽天Edy 会社概要: https://edy.rakuten.co.jp/company/company.html; 沿革: https://edy.rakuten.co.jp/company/history.html; 金融庁 第三者型前払式支払手段発行者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf]

## TL;DR

**Rakuten Edy（楽天Edy）** は FeliCa ベースの第三者型前払式支払手段である。前身の bitWallet は 2001-11 に Edy の本格サービスを開始し、2010-01 に楽天グループ入り、2012-06 に楽天Edyへ商号変更した。現法人は 2016-05 に設立、同年 10 月に事業を承継し、2019-04 に楽天ペイメントの完全子会社となった。現在の公式案内は対応 Android のおサイフケータイ / Google ウォレットでの利用を案内する一方、iPhone は非対応としている。残高上限は 5 万円で、原則として現金での払戻しはできない。^[楽天Edy 沿革: https://edy.rakuten.co.jp/company/history.html; サービス情報: https://edy.rakuten.co.jp/terms/info.html; Google ウォレット案内: https://edy.rakuten.co.jp/howto/google/pay/; 対応端末 FAQ: https://support.rakuten-edy.co.jp/faq/show/1179]

## 発行会社と運営構造

| 項目 | 読み方 |
|---|---|
| 運営会社 | 楽天Edy株式会社（Rakuten Edy Co Ltd） |
| グループ親会社 | 楽天ペイメント（100%）／楽天グループ |
| FSA 前払式登録 | 第三者型前払式支払手段 |
| 法人番号 | 3010901038102 |
| FSA 登録日 | 2016-07-21 |
| 現法人の設立 | 2016-05-09；2016-10 に Edy 事業を承継 |
| ブランドの沿革 | bitWallet は 2010-01 に楽天グループ入り；2012-06 に楽天Edyへ商号変更 |
| ローンチ年 | 2001-11（前身法人による Edy 本格サービス） |
| 技術 | FeliCa 非接触 IC |
| モバイルレール | 対応 Android のおサイフケータイ / Google ウォレット；iPhone は非対応 |
| チャージ上限 | 1 枚あたり ¥50,000 |
| 提供形態 | カード、モバイル、Edy 内蔵クレジットカード（楽天カードおよびその他の提携カード） |

## 法的根拠：第三者型前払式

Rakuten Edy は、受容が楽天自身のサービスを超えた第三者加盟店で行われるため、[[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] 第 3 章のもとで **第三者型前払式支払手段** として登録されている。主要な規制上の帰結：

- 楽天Edy株式会社 は [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に登録された第三者型前払式発行会社として記載される。
- 法務局への半期ごとの **未使用残高の供託** 義務。
- **発行停止時を除き原払込者への払戻しなし** ── Edy 残高は現金に払戻不可。
- **ブレッケージ（失効益）** ── 長期間未償還の残高パターン（Edy カードが忘れられ、残高が消費されない）；発行会社の損益に寄与する。
- PSA 前払式しきい値のもとでの AML / KYC のカーブアウト。

## 先行者・レガシーとしての地位と後発参入者との対比

Edy の構造的ポジションは、日本の FeliCa 電子マネーの **パイオニア／レガシー** である：

| 年 | 出来事 |
|---|---|
| 2001 | bitWallet が Edy をローンチ ── 日本初の主要 FeliCa 電子マネー |
| 2001-11 | JR 東日本が Suica をローンチ |
| 2007 | イオンが WAON を、セブン&アイが nanaco をローンチ |
| 2010-01 | bitWallet が楽天グループ入り |
| 2012-06 | Rakuten Edy へリブランド |
| 2013 | 10 IC 相互利用スキームのローンチ（交通系前払式） |
| 2016-05 | 現在の楽天Edy株式会社を設立 |
| 2016-07 | 楽天Edy株式会社として現行 FSA 登録 |
| 2016-10 | 現法人が Edy 事業を承継 |
| 2019-04 | 現法人が楽天ペイメントの完全子会社化 |

WAON と nanaco がローンチされた 2007 年時点で、Edy はすでに確立された FeliCa 電子マネーブランドであった ── しかし WAON（イオンモール／スーパーマーケット／ドラッグストア／ミニストップ）と nanaco（7-イレブン／イトーヨーカドー／そごう・西武）の **リテール起点型ネットワーク効果** が、多くの特定加盟店独占提携から Edy を徐々に押しのけた。Edy の対応は、**プラットフォーム非依存型の代替** ── 単一小売の囲い込みなしに多数の加盟店で受容可能 ── として位置づけることであった。

## 受け入れフットプリント

| 区分 | 受け入れ先 |
|---|---|
| コンビニエンスストア | ローソン、ファミリーマート、ミニストップ、デイリーヤマザキ、セイコーマート ── および歴史的には 7-イレブン（ただし 7-イレブンは現在概して nanaco を優先）|
| ドラッグストア | 一部のチェーン |
| レストラン／ファストフード | 一部のチェーン（マクドナルドは一時期 Edy を受容していた）|
| 自動販売機 | コカ・コーラ、その他 ── 自動販売機の FeliCa 受容 |
| ガソリンスタンド | 一部のスタンド |
| 小売 | 各種のプラットフォーム中立的加盟店 |
| モバイルレール | おサイフケータイ Android FeliCa 端末 |

## Rakuten Card＋Edy＋Rakuten Points の連携

楽天買収後の Edy の主要な顧客獲得レバレッジは、**楽天カード + Edy + 楽天ポイント** のトライアングルである：

| 構成要素 | 役割 |
|---|---|
| [[card-issuers/rakuten-card\|Rakuten Card]] | Edy IC を内蔵したクレジットカード提携；楽天カードから Edy へのオートチャージ |
| Edy | FeliCa 前払式の支出レール |
| Rakuten Points（楽天ポイント）| Edy 利用で獲得するロイヤルティ通貨（通常 0.5% ベース、キャンペーン期間はより高率）|

この三者連携は [[payments/waon-prepaid-aeon|AEON Card + WAON + WAON POINT]] および [[payments/nanaco-prepaid-seven-i|セブンカード・プラス + nanaco + nanacoポイント]] のトライアングルと構造的に類似しているが、単一のリテールアンカー親を持たない。トレードオフは、**より広いプラットフォーム非依存型の受容** と引き換えに **より弱いリテールアンカーのネットワーク効果** である。

## KPI スナップショット

| 指標 | 読み方 |
|---|---|
| Edy の累計発行枚数 | 2001 以降の累計で数千万枚規模 |
| 年間取引件数 | 日本の前払式電子マネーの中位層；WAON／nanaco／Suica／PASMO の首位ピアを下回る |
| 受け入れ加盟店数 | 全国規模で相当数（Rakuten Edy サイトが開示）|
| 前払式の未使用残高 | 数十億円規模（楽天グループ開示）|
| Rakuten Points 連携 | Edy 利用での 0.5% ベースの獲得（キャンペーン期間はより高率）|

正確な数値は楽天グループ IR 資料および Rakuten Edy サイトの開示にある。

## 戦略：楽天連携を伴うプラットフォーム非依存型 FeliCa

Rakuten Edy の戦略的役割：

1. **プラットフォーム非依存型の受容** ── 単一の小売／鉄道親会社の制約がないため、広範なクロス加盟店受容が可能。
2. **楽天経済圏連携** ── 楽天カードのオートチャージ、楽天ポイントのロイヤルティ連携、楽天経済圏のクロスプロモーション。
3. **レガシーのインストールベース** ── WAON / nanaco 以前のカードベースが残存的な顧客フットプリントを提供。
4. **コード決済の補完であって代替ではない** ── 楽天ペイのコード決済は異なるユースケースに対応；Edy は楽天経済圏向けの FeliCa タップレールであり続ける。
5. **縮小したが持続的** ── Edy の市場シェアは WAON / nanaco / Suica のピアに比して浸食されたが、FeliCa タップレールと楽天経済圏連携が有意な取引量を維持している。

## 関連

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/suica-prepaid-jr-east]]
- [[payments/pasmo-prepaid-tokyo-metro]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payment-firms/rakuten-edy]]
- [[card-issuers/rakuten-card]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- Rakuten Edy official site (edy.rakuten.co.jp).
- Rakuten Group corporate site (corp.rakuten.co.jp).
- Rakuten Card corporate site (rakuten-card.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (楽天Edy株式会社, corporate number 3010901038102, registered 2016-07-21).
- FSA prepaid payment instruments policy page.
- FeliCa Networks corporate site (felicanetworks.co.jp).
- METI cashless policy page.
