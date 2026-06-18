---
source: financial-licenses/foreign-financial-group-adjacent-licenses
source_hash: 2ff5c80a2dc12891
lang: ja
status: machine
fidelity: ok
title: "日本における外国金融グループの近接ライセンス"
translated_at: 2026-06-18T23:59:13.116Z
---

# 日本における外国金融グループの近接ライセンス

## 概要

日本における外国金融グループは、しばしば単一のライセンスではなくスタックを通じて事業を行う。すなわち、外国銀行支店、証券会社／第一種金融商品取引業者（FIBO）、投資運用、信託／カストディ、外国銀行代理業、決済、または駐在員事務所である。適切な問いは「どの日本拠点が、どの規制対象業務を行っているか」である。

本ページは [[financial-licenses/foreign-bank-branch-license-route|foreign-bank branch license route]]、[[financial-licenses/foreign-bank-agency-business-route|foreign bank agency route]]、[[financial-licenses/securities-license-stack|securities license stack]]、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[banking/foreign-bank-japan-retreat|foreign-bank Japan retreat]] と併せて用いること。

## ライセンス・スタック

| 業務 | 想定される経路 | 確認すべき出典 |
|---|---|---|
| 日本支店からの預金／貸出／貿易金融 | 外国銀行支店免許。 | 金融庁の銀行／外国銀行支店一覧。 |
| ブローカレッジ／引受／デリバティブ／証券分売 | 第一種 FIBO、第二種 FIBO、登録金融機関、日本証券業協会（JSDA）会員。 | 金融庁の FIBO 一覧、JSDA 会員一覧。 |
| アセットマネジメント／助言 | 投資運用／投資助言の登録。 | 金融庁の FIBO 一覧。 |
| グローバルカストディ／アセットサービシング | 拠点に応じて、銀行支店、信託銀行、信託会社、またはカストディサービス経路。 | 金融庁の銀行／信託一覧、会社開示。 |
| 外国銀行代理業 | 本人たる外国銀行のための代理人／媒介者。 | 金融庁の外国銀行代理銀行一覧。 |
| 決済／送金／ウォレット | 資金移動、前払式、電子決済代行、EPI。 | 金融庁の資金決済法関連一覧および [[payments/INDEX|payments domain]]。 |

## グループ読解の例

| グループ | 1 ページでは不十分な理由 |
|---|---|
| [[foreign-financial-institutions/jpmorgan-japan|JPMorgan Japan]] | 銀行支店、証券、マーケット、アセットマネジメント、カストディ類似の顧客サービスが別々の法人になり得る。 |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 証券／投資銀行の役割は、銀行やアセットマネジメントの近接性とは異なる。 |
| [[foreign-financial-institutions/bank-of-america-japan|Bank of America Japan]] | 銀行支店とマーケット／証券の業務を切り分けなければならない。 |
| [[foreign-financial-institutions/bnp-paribas-japan|BNP Paribas Japan]] | 銀行、証券、アセットマネジメント、リース／ファイナンスの近接性が、別々の法人に置かれている場合がある。 |
| [[foreign-financial-institutions/ubs-japan|UBS Japan]] | ウェルス、銀行支店、証券、アセットマネジメントの経路が分岐し得る。 |
| [[foreign-financial-institutions/barclays-japan|Barclays Japan]] / [[foreign-financial-institutions/deutsche-japan|Deutsche Japan]] | 銀行支店、証券、マーケットリスク業務は、別々のレジストリ確認を経由して振り分けられる。 |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] | カストディ／アセットサービシングにより、通常のホールセール銀行支店とは異なる。 |
| [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]] / [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | ICSD、決済、担保、カストディ、開示の各経路により、銀行支店の行はインフラ近接的となる。 |
| [[securities-firms/anz-bank-japan|ANZ Japan]] | 銀行支店に加えて証券／FIBO の近接性があるため、銀行／証券の切り分けによる読解が必要となる。 |

## コントロール上の問い

| 問い | 公開上の関連性 |
|---|---|
| 顧客契約は、支店、証券法人、アセットマネージャー、信託銀行、または海外法人のいずれと結ばれているか？ | 法的責任と開示は法人によって変わる。 |
| 当該グループは日本の銀行支店と、別個の証券会社を有しているか？ | 銀行法と金商法（FIEA）の経路を混同してはならない。 |
| 商品は日本でブッキングされているか、それともオフショアか？ | ブッキング・モデルは監督、リスク、顧客開示に影響する。 |
| カストディは付随的か、それとも主たるビジネスモデルか？ | カストディ系グループは信託／証券インフラのマップに結びつく。 |
| レジストリの 1 行で十分か、それとも単独ページが存在するか？ | 戦略的、インフラ的、またはコリドー関連の法人のみを昇格させる。 |

## 昇格ルール

外国グループをレジストリのみから単独ページへ昇格させるのは、以下の少なくとも 1 つが当てはまる場合とする：

- 市場インフラ、カストディ、担保、または証券決済との関連性；
- 日本に対する大規模な投資銀行／グローバル・マーケッツの関連性；
- クロスボーダーの法人／貿易／プロジェクトファイナンスのコリドーとの関連性；
- ルートマップを要する複数の日本ライセンス類型；
- 直近の金融庁モニタリング、ビジネスモデルの転換、または公開された戦略的開示。

それ以外の場合、当該法人は [[foreign-financial-institutions/foreign-bank-branches-japan-index|foreign-bank branch registry index]]または該当するレジストリ・コントロールのページに留めること。

## 関連

- [[financial-licenses/INDEX]]
- [[financial-licenses/foreign-bank-branch-license-route]]
- [[financial-licenses/foreign-bank-agency-business-route]]
- [[financial-licenses/securities-license-stack]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/foreign-bank-japan-retreat]]
- [[foreign-financial-institutions/foreign-bank-branches-japan-index]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities-firms/anz-bank-japan]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁：銀行および FIBO の一覧を含む、免許・登録機関一覧。
- JSDA：会員一覧。
- 金融庁：外国銀行支店および外国証券会社に関するモニタリングレポート。
- 国際銀行協会（International Bankers Association of Japan）：会員名簿。
