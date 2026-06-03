---
source: payments/edy-rakuten-prepaid
source_hash: 818accbddde52b11
lang: ja
status: machine
fidelity: ok
title: "Rakuten Edy：プラットフォーム非依存の FeliCa プリペイド電子マネー"
translated_at: 2026-06-02T16:33:58.519Z
---

# Rakuten Edy：プラットフォーム非依存の FeliCa プリペイド電子マネー

## ウィキ上の位置づけ

このエントリは、[[payments/INDEX|payments index]]配下の Rakuten Edy プリペイド発行者ページであり、FSA 登録簿の見方は[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]]、4 類型スキーム比較は[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]と併せて読む。小売起点（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）および交通起点（[[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]）のプリペイドシステムと比較する。Edy は、小売店または鉄道の親アンカーを持たない**プラットフォーム非依存の FeliCa プリペイド**であり、これが主な構造上の違いである。企業 / グループ上のアンカーは[[JapanFG/rakuten-edy|楽天Edy株式会社]]（FSA 登録の第三者型前払式支払手段発行者、法人番号3010901038102, 、2016-07-21登録、楽天グループ傘下）である。楽天関連の決済商品には、[[JapanFG/rakuten-card|Rakuten Card]]（Edy オートチャージ付きクレジットカード提携）と楽天ペイ（コード決済アプリ）がある。FeliCa 技術基盤は[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|FeliCa scheme architecture]]。

## 要約

**Rakuten Edy (楽天Edy)** は、日本における**主要なプラットフォーム非依存 FeliCa プリペイド電子マネー**であり、小売起点（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）および交通起点（[[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]）のプリペイドシステムと異なる。もともとは、NTT Docomo + Sony + 銀行コンソーシアムから派生した **bitWallet (ビットワレット株式会社)** により 2001 に開始された。Edy は日本初期の主要 FeliCa 電子マネー商品で、WAON / nanaco より 6 年、Suica / PASMO の小売利用拡大より数年早かった。**楽天は 2009-11に買収**し（2010に完全子会社化）、2012-06, に Rakuten Edy へリブランドした。現在は **楽天Edy株式会社 (Rakuten Edy Co Ltd)** が、FSA 登録の第三者型前払式支払手段発行者（法人番号3010901038102, 、2016-07-21登録）として運営する。Edy の特徴は**単一加盟店アンカーがない**ことであり、コンビニエンスストア（Lawson、FamilyMart、MiniStop、Daily Yamazaki、Seicomart）、ドラッグストア、飲食店、自動販売機、その他加盟店にプラットフォーム中立で広がる。主な顧客獲得経路は Rakuten Card オートチャージと Rakuten Points 連携である。

## 発行者と運用構造

| 寸法 | 読む |
|---|---|
| 運営会社 | 楽天Edy株式会社 (Rakuten Edy Co Ltd) |
| グループの親 | [[JapanFG/rakuten-card\|Rakuten Card]]/ 楽天グループ |
| FSAプリペイド登録 | 第三者型前払式支払手段 |
| 法人番号 | 3010901038102  |
| 金融庁登録日 | 2016-07-21 |
| 元のオペレーター | bitWallet (ビットワレット株式会社) — NTT Docomo + Sony + bank consortium |
| 楽天買収 | 2009-11 (買収発表)、2010 （完全子会社）、2012-06 （楽天Edyにブランド変更） |
| 発売年 | 2001 (bitWalletオリジナルローンチ) |
| テクノロジー | FeliCa非接触IC |
| 移動式レール | おサイフケータイ Edy（Android FeliCa端末） Apple Pay のサポートは Suica / PASMO に比べて限定的 |
| 料金上限 | ¥50,000 カードごとに |
| 分布 | カード、モバイル、Edy内蔵クレジットカード（楽天カードおよびその他の提携カード） |

## 法的根拠：第三者型前払

Rakuten Edy is registered as **第三者型前払式支払手段** under[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]]章3 なぜなら、受け付けは楽天独自のサービスを超えたサードパーティ加盟店で行われるからです。主な規制上の影響:

- 楽天Edy株式会社 appears in[[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]]登録されたサードパーティプリペイド発行者として。
- 半年に一度の法務局への供託義務。
- **発行中止時を除き、元の支払者への返金はありません** — Edy 残高は現金に返金できません。
- **破損** — 長期間未引き換えの残高パターン（Edy カードを忘れ、残高が消費されていない）。発行者の損益に貢献します。
- PSA 前払いの基準値を下回る AML / KYC カーブアウト。

## 先駆者・レガシーとしての位置づけと後発事業者との対比

Edy の構造的な立場は、日本の FeliCa 電子マネーの**パイオニア/レガシー**です。

| 年 | イベント |
|---|---|
| 2001  | bitWallet、日本初の主要なFeliCa電子マネー「Edy」を開始 |
| 2001-11  | JR東日本、Suicaを発売 |
| 2007  | イオンがWAON、セブン&アイがnanacoを開始 |
| 2009-11  | 楽天がビットウォレットを買収 |
| 2010  | bitWallet楽天完全子会社 |
| 2012-06  | 楽天Edyへリブランド |
| 2013  | 10 IC相互利用制度開始（交通系プリペイド） |
| 2016-07  | Edy current FSA registration as 楽天Edy株式会社 |

WAONとnanacoが始まる頃には2007, Edy は確立された FeliCa 電子マネー ブランドでしたが、WAON (イオンモール/スーパーマーケット/ドラッグストア/ミニストップ) と nanaco (7-イレブン / イトーヨーカ堂 / そごう＆西武）は、多くの特定の加盟店との独占的パートナーシップから徐々に Edy を置き換えました。 Edy の対応は、**プラットフォームに依存しない代替手段**として位置づけることでした。これは、単一小売業者に固定されることなく、多くの販売業者で受け入れられるものです。

## 加盟店網

| 階層 | 承諾 |
|---|---|
| コンビニエンスストア | ローソン、ファミリーマート、ミニストップ、デイリーヤマザキ、セイコーマート — そして歴史的にも7-イレブン (ただし、7-イレブンは現在、一般的にnanacoを支持しています） |
| ドラッグストア | 選択されたチェーン |
| レストラン / ファストフード | 一部のチェーン (マクドナルドは以前、一部の期間に Edy を受け入れていました) |
| 自動販売機 | コカ・コーラ、他 - 自動販売機のFeliCa対応 |
| ガソリンスタンド | 選択されたステーション |
| 小売り | さまざまなプラットフォーム中立の販売者 |
| 移動式レール | おサイフケータイ Android FeliCa端末 |

## Rakuten Card + Edy + Rakuten Points の連携

楽天買収後の Edy の主な顧客獲得レバレッジは、**楽天カード + Edy + 楽天ポイント** のトライアングルです。

| 成分 | 役割 |
|---|---|
| [[JapanFG/rakuten-card\|Rakuten Card]] | Edy ICが組み込まれたクレジットカードの共同ブランド。楽天カードからEdyへオートチャージ |
| Edy | FeliCaプリペイド支払いレール |
| Rakuten Points (楽天ポイント) | Edy の支払いで獲得できるロイヤルティ通貨 (通常は0.5%ベース、プロモーション期間では高くなる） |

この 3 方向の統合は、構造的には[[payments/waon-prepaid-aeon|AEON Card + WAON + WAON POINT]]そして[[payments/nanaco-prepaid-seven-i|セブンカード・プラス + nanaco + nanacoポイント]]三角形ですが、小売アンカーの親が 1 つもありません。そのトレードオフは、**プラットフォームに依存しない受け入れの幅広**と、**小売アンカー ネットワーク効果の弱さ**です。

## KPI スナップショット

| メトリック | 読む |
|---|---|
| Edy累計発行枚数 | 以来、累計数千万点のマテリアル2001  |
| 年間取引数 | 日本のプリペイド電子マネーの中では中堅クラス。 WAON / nanaco / Suica / PASMO の主要な同等品以下 |
| 加盟店ポイントの受け入れ | 全国対応（楽天Edyサイトにて公開） |
| プリペイド残高 | 数十億円規模（楽天グループ開示） |
| 楽天ポイント連携 | 0.5%Edy の利用による基本収益 (プロモーション期間は高額) |

正確な数値は楽天グループのIR資料および楽天Edyサイトの開示情報に記載されています。

## 戦略：Rakuten 連携を持つプラットフォーム非依存 FeliCa

楽天Edyの戦略的役割：

1. **プラットフォームに依存しない受け入れ** — 単一の小売/鉄道親制約がないため、幅広い販売者間での受け入れが可能です。
2. **楽天エコシステムの統合** — 楽天カードのオートチャージ、楽天ポイントロイヤルティの統合、楽天エコシステムのクロスプロモーション。
3. **従来のインストール ベース** — WAON / nanaco カード ベース以前は、残りの顧客フットプリントを提供します。
4. **コード支払いの補足であって代替品ではありません** — 楽天ペイのコード支払いは別のユースケースに対応します。 Edyは楽天エコシステムのFeliCaタップレールのままです。
5. **減少したが耐久性** — Edy の市場シェアは、WAON / nanaco / Suica と比べて低下しましたが、FeliCa タップレールと楽天エコシステムの統合により、意味のある取引量が維持されています。

## 関連項目

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
- [[JapanFG/rakuten-edy]]
- [[JapanFG/rakuten-card]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- 楽天Edy公式サイト（edy.rakuten.co.jp）。
- 楽天グループコーポレートサイト（corp.rakuten.co.jp）。
- 楽天カードコーポレートサイト（Rakuten-card.co.jp）。
- FSA, `daisan.xlsx` — 第三者型前払式支払手段発行者登録一覧（楽天Edy株式会社、法人番号3010901038102, 、2016-07-21登録）。
- FSA 前払式支払手段ポリシーのページ。
- フェリカネットワークスコーポレートサイト（felicanetworks.co.jp）。
- 経済産業省のキャッシュレス政策ページ。
