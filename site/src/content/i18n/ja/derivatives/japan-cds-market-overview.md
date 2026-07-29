---
source: derivatives/japan-cds-market-overview
source_hash: ce255a0443d11bfe
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本 CDS 市場概観"
translated_at: 2026-07-29T09:57:43.000Z
---

# 日本 CDS 市場概観

## TL;DR

JSCC は 19 July 2011 にインデックス CDS の清算を、15 December 2014 にシングルネーム CDS の清算を開始した。JSCC のサービスページは、対象をインデックス CDS とシングルネーム 60 銘柄（16 September 2025 時点）としており、ライブの商品ページには適格な iTraxx Japan シリーズと参照組織が掲載されている。これらのページが示すのは JSCC の適格性と清算サービスの範囲であり、市場全体の流動性、ディーラー順位、CCP 間のシェアではない。

## Wiki route

本エントリは [[derivatives/INDEX|デリバティブ索引]] の下に位置し、日本の CDS 商品と清算について利用できる公開根拠を説明する。シングルネームの価格形成は [[derivatives/cds-japan-corporate-spread-mechanics|日本企業 CDS スプレッドの仕組み]]、相対価値取引の仕組みは [[derivatives/basis-trade-bond-cds-japan|債券 CDS ベーシス取引]]、金利の文脈は [[derivatives/japan-irs-market|日本 IRS 市場]] を参照する。

隣接する資金調達とバランスシートの文脈については、[[derivatives/yen-basis-swap-market|円ベーシススワップ市場]]、[[derivatives/cross-currency-basis-swap-japan|日本のクロスカレンシー・ベーシススワップ]]、[[finance/INDEX|金融索引]]、[[banking/INDEX|銀行索引]]、[[insurance/japan-life-insurance-alm-overview|日本の生命保険 ALM]] を参照する。これらのリンクは背景を提供するが、CDS への参加や取引量を立証するものではない。

### 商品と清算の範囲

次表は、JSCC の日付付きサービス説明とライブの適格性ページを組み合わせたものである。現在の適格性を決めるのは、このスナップショットではなくライブページである。 ^[Sources: https://www.jpx.co.jp/jscc/en/otc/member_cds.html; https://www.jpx.co.jp/jscc/en/cash/cds/product.html.]

| 範囲 | 公開根拠 | 境界 |
|---|---|---|
| iTraxx Japan インデックス CDS | ライブページには適格なシリーズ 36-45 が掲載されている。 | シリーズの適格性は変わり得るため、取引量を示すものではない。 |
| シングルネーム CDS | サービス説明は 60 銘柄（16 September 2025 時点）と記録し、ライブページは適格な参照組織を列挙している。 | 適格性からディーラー数、ビッド・アスク幅、市場全体の流動性を判断できない。 |
| その他の CDS 構造 | インデックス・トランシェ、ソブリン、クアント、ローン CDS の条件には、それぞれの確認書と取引場所の根拠が必要である。 | インデックスまたはシングルネームの適格性は、別の構造が清算可能であることを立証しない。 |
| 一般的な適格条件 | 取引は適用される ISDA Credit Derivatives Definitions を使用し、双方の清算参加者が申請し、想定元本と決済通貨が JPY でなければならない。想定元本は小数なしで JPY 100 billion 以下、残存期間は少なくとも 1 day である。 | 追加の商品条件と規則も適用される。 |

### サービスの沿革

次表では、インデックスとシングルネームの開始を分け、日付付きの対象範囲とライブリストを区別する。 ^[Sources: https://www.jpx.co.jp/jscc/en/information/news/20110715.html; https://www.jpx.co.jp/jscc/en/information/news/20141215.html; https://www.jpx.co.jp/jscc/en/otc/member_cds.html.]

| 日付 | 検証可能な出来事 |
|---|---|
| 19 July 2011 | JSCC がインデックス CDS の清算を開始した。 |
| 15 December 2014 | JSCC が、当初適格な企業参照組織 12 銘柄でシングルネーム CDS の清算を開始した。 |
| 16 September 2025 | JSCC のサービスページは、インデックス CDS とシングルネーム 60 銘柄を対象としていた。 |
| ライブページ | JSCC が現在適格なシリーズ、参照組織、取引条件を掲載する。 |

### 公開清算ページから確認できること

次表では、公開情報面ごとに異なる測定範囲を適用する。 ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/product.html; https://www.jpx.co.jp/jscc/en/participant/cds/cds2.html; https://www.jpx.co.jp/jscc/en/cds_archive/index.html; https://www.bis.org/statistics/derstats.htm.]

| 根拠となる情報面 | 裏付けられる用途 | 裏付けられない推論 |
|---|---|---|
| JSCC ライブ商品リスト | 適格なシリーズ、参照組織、清算条件 | バイラテラル取引または他 CCP での適格性と活動 |
| 21 February 2022 付け JSCC 参加者リスト | 同ページの日付時点の参加と清算委託者の関係 | 現在のディーラー順位または市場シェア |
| JSCC 月次統計 | 記載月と集計方法における JSCC 清算済み活動 | 日本の CDS 活動全体 |
| BIS OTC デリバティブ統計 | 公表分類に基づくグローバル OTC デリバティブの集計値 | 対応する BIS 系列と日付を示さない固定的な日本シェア |

### CDS と清算の仕組み

JSCC の説明ページは、プロテクション・レッグと清算の効果を説明している。取引の法的条件は、取引に組み込まれた定義集と確認書に従う。 ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/clearing.html; https://www.jpx.co.jp/jscc/en/cash/cds/product.html.]

| 要素 | 根拠の範囲内の説明 |
|---|---|
| プロテクション買い手 | 契約期間中、通常は四半期ごとに固定額を定期的に支払う。 |
| クレジットイベント | 契約上のクレジットイベントが発生した場合、プロテクション売り手は契約所定の支払いまたは決済を行う。 |
| 参照組織 | 信用リスクが参照される組織であり、CDS の当事者である必要も、その CDS に基づいて現金を交換する必要もない。 |
| JSCC 清算 | JSCC が清算参加者間の債務を引き受け、双方の相手方となり、JSCC の範囲内で決済をネッティングする。 |

### 契約項目とクォートの解釈

次表では、商品ページの清算適格条件と、確認書が定める取引固有の経済条件を分ける。 ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/product.html; https://www.jpx.co.jp/jscc/en/cash/cds/clearing.html.]

| 項目 | 検証ルール |
|---|---|
| 想定元本と通貨 | JSCC の適格条件では、想定元本と決済通貨は JPY であり、想定元本は小数なしで JPY 100 billion 以下である。 |
| 残存期間 | JSCC が債務を引き受ける時点で少なくとも 1 day が必要であり、正確な予定終了日は取引固有である。 |
| 固定金利の支払い | JSCC は定期的な支払いを通常は四半期ごとと説明するが、適用利率と日付は契約に従う。 |
| クレジットイベント決済 | 組み込まれた定義集、確認書、該当するオークション結果を確認する。評価上の回収率インプットが自動的に最終決済価格になるわけではない。 |
| スプレッドまたはカーブ | クォートは日付、テナー、組織、契約に固有であり、恒常的な「最注目」、流動性階層、方向性の順位をここから推論しない。 |

### iTraxx Japan ルールの境界

S&P iTraxx Japan ルールが説明するのは指数構成であり、JSCC の清算量や市場全体のポジションではない。 ^[Source: https://www.spglobal.com/spdji/en/documents/methodologies/iTraxx_Japan_Index_Rules.pdf.]

- ルールは指数ロール前に半年ごとに見直される。
- ロール日は 20 March と 20 September である。対応する 5-year 指数の満期日は、ロール後の第五年の 20 June と 20 December である。
- 構成銘柄はルールブックに基づき均等またはおおむね均等なウェイトとなる。
- 現在の構成銘柄とバージョン状態は該当シリーズのファイルで確認し、JSCC の適格性はライブの JSCC ページで別途確認する必要がある。

### 市場測定の境界

JSCC 統計と BIS 集計値は異なる問いに答える。市場規模を防御可能な形で記述するには、データセット、報告期間、商品範囲、通貨、グロスかネットか、バイラテラル取引と他 CCP の取引を含むかを特定しなければならない。このため本エントリは、従前の固定的な日本シェア、取引場所シェア、ディーラー順位、流動性の主張を繰り返さない。

## Related

- [[derivatives/INDEX]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[INDEX|FinWiki index]]

## Sources

- [JSCC: CDS 清算サービスの範囲](https://www.jpx.co.jp/jscc/en/otc/member_cds.html)
- [JSCC: ライブの清算商品リストと条件](https://www.jpx.co.jp/jscc/en/cash/cds/product.html)
- [JSCC: CDS と清算の説明](https://www.jpx.co.jp/jscc/en/cash/cds/clearing.html)
- [JSCC: 清算参加者と清算委託者](https://www.jpx.co.jp/jscc/en/participant/cds/cds2.html)
- [JSCC: CDS 月次統計アーカイブ](https://www.jpx.co.jp/jscc/en/cds_archive/index.html)
- [S&P Dow Jones Indices: iTraxx Japan Index Rules](https://www.spglobal.com/spdji/en/documents/methodologies/iTraxx_Japan_Index_Rules.pdf)
- [BIS: OTC デリバティブ統計](https://www.bis.org/statistics/derstats.htm)
