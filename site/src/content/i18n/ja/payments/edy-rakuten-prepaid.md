---
source: payments/edy-rakuten-prepaid
source_hash: baf73cd415770c05
lang: ja
status: machine
fidelity: ok
title: "Rakuten Edy: プラットフォーム非依存型 FeliCa 前払式電子マネー"
translated_at: 2026-06-19T06:09:18.196Z
---

# Rakuten Edy: プラットフォーム非依存型 FeliCa 前払式電子マネー

## ウィキ上の位置づけ

This entry sits under [[payments/INDEX|payments index]] as the Rakuten Edy 前払式発行会社 page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]] for the FSA registry view and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class scheme comparison. Compare with retail-anchored ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) and transit-anchored ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) 前払式 systems — Edy is the **プラットフォーム非依存型 FeliCa 前払式** without a retail-or-rail parent anchor, which is its principal structural distinction. Corporate / group anchor is [[payment-firms/rakuten-edy|楽天Edy株式会社]] (FSA-registered third-party 前払式発行会社, 法人番号 3010901038102, registered 2016-07-21 under Rakuten group); related Rakuten payment products include [[card-issuers/rakuten-card|Rakuten Card]] (credit-card co-brand with Edy auto-charge) and 楽天ペイ (code-payment app). FeliCa technology backbone: [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|FeliCa scheme architecture]].

## TL;DR

**Rakuten Edy（楽天Edy）** は、日本における **主要なプラットフォーム非依存型 FeliCa 前払式電子マネー** であり、リテール起点型（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）および交通起点型（[[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]）の前払式システムとは区別される。元々 2001 に **bitWallet（ビットワレット株式会社）** ── NTT ドコモ + ソニー + 銀行コンソーシアムのスピンオフ ── によってローンチされた Edy は、日本で **最初の主要な FeliCa 電子マネー製品** であり、WAON / nanaco に 6 年先行し、Suica / PASMO のリテール受容に数年先行した。**2009-11に楽天により買収**（完全子会社化 2010）され、Rakuten Edy 2012-06, にリブランドされて以降、当該フランチャイズは現在 **楽天Edy株式会社（Rakuten Edy Co Ltd）** によって 第三者型前払式発行者（FSA 登録、法人番号 3010901038102, 登録 2016-07-21）として運営されている。Edy の際立った特徴は **単一加盟店アンカーを持たない** ことであり、受容はコンビニエンスストア（ローソン、ファミリーマート、ミニストップ、デイリーヤマザキ ── およびセイコーマート）、ドラッグストア、レストラン、自動販売機、その他の加盟店にプラットフォーム中立的に及び、楽天カードのオートチャージと 楽天ポイント（Rakuten Points）連携を主要な顧客獲得レールとする。

## 発行会社 and operational structure

| 項目 | 読み方 |
|---|---|
| Operating company | 楽天Edy株式会社（Rakuten Edy Co Ltd） |
| Group parent | [[card-issuers/rakuten-card\|Rakuten Card]] / Rakuten Group |
| FSA 前払式 registration | 第三者型前払式支払手段 |
| Corporate number | 3010901038102 |
| FSA registration date | 2016-07-21 |
| Original 事業者 | bitWallet（ビットワレット株式会社）── NTT ドコモ + ソニー + 銀行コンソーシアム |
| Rakuten acquisition | 2009-11 （買収発表）、2010 （完全子会社化）、2012-06 （Rakuten Edy へリブランド） |
| Launch year | 2001 （bitWallet 当初ローンチ） |
| Technology | FeliCa 非接触 IC |
| Mobile rail | おサイフケータイ Edy（Android FeliCa 端末）；Apple Pay 対応は Suica / PASMO に比べ限定的 |
| Charge ceiling | 1 枚あたり ¥50,000 |
| Distribution | カード、モバイル、Edy 内蔵クレジットカード（楽天カードおよびその他の提携カード） |

## Legal basis: 第三者型前払式

Rakuten Edy は、受容が楽天自身のサービスを超えた第三者加盟店で行われるため、[[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] 第 3 章のもとで **第三者型前払式支払手段** として登録されている。主要な規制上の帰結：

- 楽天Edy株式会社 は [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に登録された第三者型前払式発行者として記載される。
- 法務局への半期ごとの **未使用残高の供託** 義務。
- **発行停止時を除き原払込者への払戻しなし** ── Edy 残高は現金に払戻不可。
- **ブレッケージ（失効益）** ── 長期間未償還の残高パターン（Edy カードが忘れられ、残高が消費されない）；発行者の損益に寄与する。
- PSA 前払式しきい値のもとでの AML / KYC のカーブアウト。

## Pioneer / legacy position vs successor entrants

Edy の構造的ポジションは、日本の FeliCa 電子マネーの **パイオニア／レガシー** である：

| 年 | 出来事 |
|---|---|
| 2001 | bitWallet が Edy をローンチ ── 日本初の主要 FeliCa 電子マネー |
| 2001-11 | JR 東日本が Suica をローンチ |
| 2007 | イオンが WAON を、セブン&アイが nanaco をローンチ |
| 2009-11 | 楽天が bitWallet を買収 |
| 2010 | bitWallet が楽天の完全子会社化 |
| 2012-06 | Rakuten Edy へリブランド |
| 2013 | 10 IC 相互利用スキームのローンチ（交通系前払式） |
| 2016-07 | Edy の現行 FSA 登録（楽天Edy株式会社として） |

WAON と nanaco がローンチされた 2007, 時点で、Edy は確立された FeliCa 電子マネーブランドであった ── しかし WAON（イオンモール／スーパーマーケット／ドラッグストア／ミニストップ）と nanaco（7-イレブン／イトーヨーカドー／そごう・西武）の **リテール起点型ネットワーク効果** が、多くの特定加盟店独占提携から Edy を徐々に押しのけた。Edy の対応は、**プラットフォーム非依存型の代替** ── 単一小売の囲い込みなしに多数の加盟店で受容可能 ── として位置づけることであった。

## Acceptance footprint

| 区分 | 受け入れ先 |
|---|---|
| Convenience stores | ローソン、ファミリーマート、ミニストップ、デイリーヤマザキ、セイコーマート ── および歴史的には 7-イレブン（ただし 7-イレブンは現在概して nanaco を優先）|
| Drugstores | 一部のチェーン |
| Restaurants / fast food | 一部のチェーン（マクドナルドは一時期 Edy を受容していた）|
| Vending machines | コカ・コーラ、その他 ── 自動販売機の FeliCa 受容 |
| Gas stations | 一部のスタンド |
| Retail | 各種のプラットフォーム中立的加盟店 |
| Mobile rail | おサイフケータイ Android FeliCa 端末 |

## Rakuten Card + Edy + Rakuten Points integration

楽天買収後の Edy の主要な顧客獲得レバレッジは、**楽天カード + Edy + 楽天ポイント** のトライアングルである：

| Component | Role |
|---|---|
| [[card-issuers/rakuten-card\|Rakuten Card]] | Edy IC を内蔵したクレジットカード提携；楽天カードから Edy へのオートチャージ |
| Edy | FeliCa 前払式の支出レール |
| Rakuten Points（楽天ポイント）| Edy 利用で獲得するロイヤルティ通貨（通常 0.5% ベース、キャンペーン期間はより高率）|

この三者連携は [[payments/waon-prepaid-aeon|AEON Card + WAON + WAON POINT]] および [[payments/nanaco-prepaid-seven-i|セブンカード・プラス + nanaco + nanacoポイント]] のトライアングルと構造的に類似しているが、単一のリテールアンカー親を持たない。トレードオフは、**より広いプラットフォーム非依存型の受容** と引き換えに **より弱いリテールアンカーのネットワーク効果** である。

## KPI snapshot

| 指標 | 読み方 |
|---|---|
| Cumulative Edy issuance | 2001 以降の累計で数千万枚規模 |
| Annual transaction count | 日本の前払式電子マネーの中位層；WAON / nanaco / Suica / PASMO の首位ピアを下回る |
| Acceptance 加盟店 points | 全国規模で相当数（Rakuten Edy サイトが開示）|
| Outstanding 前払式 balance | 数十億円規模（楽天グループ開示）|
| Rakuten Points integration | Edy 利用での 0.5% ベースの獲得（キャンペーン期間はより高率）|

正確な数値は楽天グループ IR 資料および Rakuten Edy サイトの開示にある。

## Strategy: プラットフォーム非依存型 FeliCa with Rakuten integration

Rakuten Edy の戦略的役割：

1. **プラットフォーム非依存型の受容** ── 単一の小売／鉄道親会社の制約がないため、広範なクロス加盟店受容が可能。
2. **楽天経済圏連携** ── 楽天カードのオートチャージ、楽天ポイントのロイヤルティ連携、楽天経済圏のクロスプロモーション。
3. **レガシーのインストールベース** ── WAON / nanaco 以前のカードベースが残存的な顧客フットプリントを提供。
4. **コード決済の補完であって代替ではない** ── 楽天ペイのコード決済は異なるユースケースに対応；Edy は楽天経済圏向けの FeliCa タップレールであり続ける。
5. **縮小したが持続的** ── Edy の市場シェアは WAON / nanaco / Suica のピアに比して浸食されたが、FeliCa タップレールと楽天経済圏連携が有意な取引量を維持している。

## Related

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
