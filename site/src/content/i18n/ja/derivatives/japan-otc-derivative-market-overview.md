---
source: derivatives/japan-otc-derivative-market-overview
source_hash: e558e49e5ae0da2f
lang: ja
status: machine
fidelity: ok
title: "日本 OTC デリバティブ市場の概観"
translated_at: 2026-07-29T19:05:00.000Z
---

# 日本 OTC デリバティブ市場の概観

## TL;DR

日本の**店頭（OTC）デリバティブ市場**は、金利、FX、クレジット、株式／仕組み商品にまたがる。金融庁の報告・清算要件は、商品、事業体、取引相手の範囲に応じて適用される。JSCC はこれとは別に、清算を受け付ける商品を公表している。集計データごとに対象母集団と測定指標が異なるため、四つの商品群を無条件に順位付けすることはできない。

本エントリは、四つの OTC 商品クラスターを互いに結びつけるクロス商品アンカーである。上場デリバティブのカバレッジ（JGB 先物、TONA 先物、日経 225 先物・オプション）については、[[derivatives/INDEX]] および [[securities/japan-market-infrastructure-map]] を参照。

## ウィキ経路

本エントリは [[derivatives/INDEX|derivatives index]] の配下に、OTC 市場アンカーとして位置する。レート側アンカーである [[derivatives/japan-interest-rate-derivatives-overview]]、清算・報告インフラである [[derivatives/otc-clearing-jp-trade-repository]]、ディーラー・フランチャイズの経済性である [[derivatives/dealer-bank-derivatives-revenue-mix]] と組み合わせること。上場デリバティブの比較は [[derivatives/jgb-futures-curve]] および [[derivatives/japan-equity-derivatives-product-matrix]] にある。

## 四つの OTC 商品クラスター

| クラスター | 主要な商品 | 関連する公開データ | インフラ上の境界 | アンカーページ |
|---|---|---|---|---|
| 金利 OTC | 円 IRS、OIS、スワップション、通貨ベーシス・スワップ、インフレ・スワップ、CMS | BIS・日銀の想定元本、市場価値、調査売買高の集計 | JSCC は適格 IRS の範囲を公表する。適格性は義務付けと同一ではない | [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/yen-basis-swap-market]], [[derivatives/japan-swaption-market]], [[derivatives/japan-inflation-swap]], [[derivatives/japan-cms-constant-maturity-swap]] |
| FX OTC | FX フォワード、FX スワップ、FX オプション、通貨スワップ | 通貨別・報告所在地別の次元を持つ BIS・日銀の調査表 | 商品と取引相手の範囲によって報告・清算上の取扱いが決まる | [[derivatives/fx-options-japan-corporate-treasury]], [[derivatives/retail-fx-margin-trade-japan]], [[derivatives/fx-stp-broker-aggregation]] |
| クレジット OTC | CDS インデックス取引およびシングルネーム取引 | BIS 集計統計および JSCC の現行適格 CDS 一覧 | JSCC の適格性は現行の商品基準で定義される | [[derivatives/japan-cds-market-overview]], [[derivatives/cds-japan-corporate-spread-mechanics]], [[derivatives/basis-trade-bond-cds-japan]] |
| 株式／仕組み商品 OTC | 株式連動スワップ、OTC オプション、契約固有の仕組みエクスポージャー | 該当する開示および報告データ | 相対条件と規制範囲は取引ごとに確認する必要がある | [[derivatives/structured-bond-japan-retail-issuance]], [[derivatives/structured-product-eb-knockin-japan-retail]], [[derivatives/japan-single-stock-options]], [[derivatives/equity-volatility-hedging-corporates-japan]] |

Sources: ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html]

OTC 市場は、取引所取引デリバティブ市場（OSE の JGB 先物、TONA 先物、日経 225 先物・オプション）とは構造的に分離しているが、両市場はディーラー銀行のヘッジとエンドユーザーのポートフォリオ判断を通じて密接に結合している。

## 市場参加者

| カテゴリー | 証拠の範囲内で言える役割 |
|---|---|
| 登録業者その他のディーラー | 適用される登録・行為規制の範囲内で取引を執行または仲介する |
| 銀行、保険会社、事業会社、ファンドその他のエンドユーザー | ヘッジまたはエクスポージャーを取る。方向と規模には機関別の証拠が必要 |
| JSCC | 適格な OTC IRS・CDS 商品および清算規則を公表する |
| 報告主体および提出経路 | 適用範囲と免除を含め、金融庁の報告ガイダンスで定義される |
| 日銀および BIS | 集計調査・統計を公表する |

Sources: ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html]

ここで用いた資料のいずれも、現在のディーラー順位や、すべてのエンドユーザーに共通する取引方向を裏付けていない。

## 規制フレームワーク

| レイヤー | 証拠の範囲内で言える内容 |
|---|---|
| FIEA | OTC デリバティブのディーリング、報告、清算、行為規制の法的フレームワーク。 |
| 金融庁の報告枠組み | 報告主体、報告事項、期限、提出経路は現行ガイダンスで定義される。「すべての取引」という表現で適用範囲の判定を置き換えてはならない |
| JSCC の商品適格性 | 現行の適格 IRS・CDS 商品は JSCC が掲載する。適格性だけでは法的な清算義務を証明しない |
| 契約文書 | 適用法令および CCP 規則に従い、ISDA その他の条件が相対取引を規律し得る |
| 証拠金・資本 | 適用要件は、事業体、商品、清算状況、閾値の範囲によって異なる |

Sources: ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html]

清算・報告インフラの詳細については [[derivatives/otc-clearing-jp-trade-repository]] を参照。

## 公開データソース

| ソース | 何を示すか |
|---|---|
| BIS 半期 OTC デリバティブ統計 | JPY OTC 想定元本とグロス市場価値、カウンターパーティ・タイプ、商品、通貨別にスライス。 |
| BIS Triennial Central Bank Survey | FX および OTC 金利デリバティブの売買高スナップショット。 |
| 日銀 東京短期金融市場サーベイ | JPY 短期金融市場およびデリバティブの集計取引パターン。 |
| ISDA SwapsInfo | JPY を含む主要 IRS 通貨の、清算済みおよび相対の週次想定元本。 |
| JSCC 月次清算統計 | JSCC の IRS および CDS の清算高、建玉、デフォルト・ファンドの規模（開示されている場合）。 |
| FSA 監督上の開示 | 定期的な監督上のコメンタリーと集計された市場構造データ。 |
| ディーラー銀行 IR | 集計されたマーケット・セグメントの収益コメンタリー。 |

具体的な数値については、想定元本残高、グロス市場価値、売買高は異なる周期で報告される異なる概念であるため、正確なソースのリリースとサーベイのヴィンテージを引用すること。

## 関連

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-rates-derivative-product-matrix]]
- [[derivatives/japan-equity-derivatives-product-matrix]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/isda-2020-protocol-japan-implementation]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[money-market/INDEX]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 出典

- 国際決済銀行（BIS）：半期 OTC デリバティブ統計；FX および OTC デリバティブの Triennial Central Bank Survey。
- 日本銀行：決済 / 市場の表層；東京短期金融市場サーベイ；BIS 半期 OTC デリバティブ・データの日本部分。
- 日本証券クリアリング機構（JSCC）：IRS 清算の範囲とルール；CDS 清算サービス；月次清算統計。
- 金融庁（FSA）：OTC デリバティブの FIEA 監督、清算義務の範囲、取引報告ルール。
- 国際スワップ・デリバティブ協会（ISDA）：SwapsInfo 週次集計取引；ISDA マスター契約フレームワークの文書化。
- 日本取引所グループ（JPX）/ 大阪取引所（OSE）：クロス比較のための上場デリバティブのリファレンス。
- DTCC Data Repository Japan：FIEA 規制対象事業者の OTC デリバティブ報告のための指定 TR。
