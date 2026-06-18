---
source: derivatives/japan-otc-derivative-market-overview
source_hash: a3a0b502fc85b9c2
lang: ja
status: machine
fidelity: ok
title: "日本 OTC デリバティブ市場の概観"
translated_at: 2026-06-18T23:33:48.354Z
---

# 日本 OTC デリバティブ市場の概観

## TL;DR

日本の**店頭（OTC）デリバティブ市場**は4つの商品クラスター — 金利、FX、クレジット、株式 / ストラクチャード — にまたがり、すべて金融商品取引法（FIEA）の下で規律され、金融庁（FSA）によって監督され、（対象商品については）日本証券クリアリング機構（JSCC）で清算され、指定取引情報蓄積機関への取引報告が行われる。円金利 OTC デリバティブは想定元本残高で最大のクラスターであり、FX OTC は日次売買高で最大（リテール FX に牽引される、[[derivatives/retail-fx-margin-trade-japan]]）であり、クレジット OTC は想定元本では最小だがインデックス取引については実質的に活発であり、株式 / ストラクチャード OTC はリテール向けストラクチャード債の販売とディーラー銀行のヘッジに支配される。

本エントリは、4つの OTC 商品クラスターを互いに結びつけるクロス商品アンカーである。上場デリバティブのカバレッジ（JGB 先物、TONA 先物、日経 225 先物・オプション）については、[[derivatives/INDEX]] および [[securities/japan-market-infrastructure-map]] を参照。

## ウィキ経路

本エントリは [[derivatives/INDEX|derivatives index]] の配下に、OTC 市場アンカーとして位置する。レート側アンカーである [[derivatives/japan-interest-rate-derivatives-overview]]、清算・報告インフラである [[derivatives/otc-clearing-jp-trade-repository]]、ディーラー・フランチャイズの経済性である [[derivatives/dealer-bank-derivatives-revenue-mix]] と組み合わせること。上場デリバティブの比較は [[derivatives/jgb-futures-curve]] および [[derivatives/japan-equity-derivatives-product-matrix]] にある。

## 4つの OTC 商品クラスター

| クラスター | 主要な商品 | 想定元本のスケール | 流動性の中心 | アンカーページ |
|---|---|---|---|---|
| 金利 OTC | 円 IRS、円 OIS、円スワップション、通貨ベーシス・スワップ、アセット・スワップ、インフレ・スワップ、CMS | 兆 USD 相当（BIS 半期） | OTC、その多くは JSCC で清算 | [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/yen-basis-swap-market]], [[derivatives/japan-swaption-market]], [[derivatives/japan-inflation-swap]], [[derivatives/japan-cms-constant-maturity-swap]] |
| FX OTC | FX フォワード、FX スワップ、FX オプション、NDF（該当する場合）、通貨スワップ、リテール FX 証拠金 | 日次で数千億 USD 相当 | OTC、ほとんどが相対；リテール FX は FX ディーラー経由で清算 / ネッティング | [[derivatives/fx-options-japan-corporate-treasury]], [[derivatives/retail-fx-margin-trade-japan]], [[derivatives/fx-stp-broker-aggregation]] |
| クレジット OTC | シングルネーム CDS（日本企業）、iTraxx Japan インデックス、ベーシス・トレード、リカバリー・スワップ | 数百億 USD 相当 | OTC、ほとんどが相対；JSCC が指定 CDS 清算サービスを運営 | [[derivatives/japan-cds-market-overview]], [[derivatives/cds-japan-corporate-spread-mechanics]], [[derivatives/basis-trade-bond-cds-japan]] |
| 株式 / ストラクチャード OTC | 株式連動スワップ、シングルストック・オプション、バリアンス・スワップ、ストラクチャード債（EB、ノックイン、PRDC）、リパッケージング・ノート | 可変；リテール向けストラクチャード債の発行とディーラー銀行のヘッジに支配される | OTC 相対 | [[derivatives/structured-bond-japan-retail-issuance]], [[derivatives/structured-product-eb-knockin-japan-retail]], [[derivatives/japan-single-stock-options]], [[derivatives/equity-volatility-hedging-corporates-japan]] |

OTC 市場は、取引所取引デリバティブ市場（OSE の JGB 先物、TONA 先物、日経 225 先物・オプション）とは構造的に分離しているが、両市場はディーラー銀行のヘッジとエンドユーザーのポートフォリオ判断を通じて密接に結合している。

## 市場参加者

| カテゴリー | 役割 |
|---|---|
| メガバンク系証券会社 | MUFG 証券、SMBC 日興、みずほ証券 — 支配的な円レート / FX / ストラクチャード・フランチャイズ。 |
| 独立系日本証券会社 | 野村、大和、三菱 UFJ モルガン・スタンレー — 強力な円フランチャイズに加えクロスボーダー。 |
| グローバル投資銀行 | JPMorgan、Goldman、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS。 |
| 国内銀行（エンドユーザー） | メガバンク財務、地方銀行、信託銀行、農林中央金庫 — 主に ALM ヘッジ。 |
| 生命保険（エンドユーザー） | 保険準備金のデュレーション・マッチングのための長期の受取固定フロー。 |
| 損害保険（エンドユーザー） | より小規模な ALM ヘッジに加え FX 連動の負債ヘッジ。 |
| 事業会社（エンドユーザー） | 変動から固定へのローン・ヘッジ、外貨発行のスワップバック、FX 収益ヘッジ、資本構成ヘッジ。 |
| 海外マクロ / ヘッジファンド | 戦術的な日本金利・クレジットのポジショニング。 |
| 年金基金 / アセットマネージャー | 円建て債券マンデートのデュレーション管理。 |
| インターディーラー・ブローカー | ICAP / Tradition / BGC / Tullett Prebon — 匿名執行と価格発見。 |
| CCP | JSCC — 義務化された円 IRS / OIS および指定 CDS の中央清算。 |
| 取引情報蓄積機関 | DTCC Data Repository Japan — FIEA 報告のための指定 TR。 |
| 規制当局 | FIEA の下の FSA。 |
| 中央銀行 | 日銀 — マクロのドライバーおよびサーベイランスの役割。 |

ディーラー・フランチャイズは構造的なバックボーンである。親 FG の文脈については [[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] を参照。

## 規制フレームワーク

| レイヤー | 詳細 |
|---|---|
| FIEA | OTC デリバティブのディーリング、報告、清算、行為規制の法的フレームワーク。 |
| FSA 監督 | FIEA 登録ディーラー、CCP としての JSCC、取引情報蓄積機関の運営を監督。 |
| 清算義務 | FSA が指定した標準化された円 IRS および特定の CDS は JSCC で清算しなければならない。 |
| 取引報告 | すべての FIEA 規制対象事業者の OTC デリバティブ取引は指定 TR に報告しなければならない。 |
| ISDA 文書化 | ほとんどの OTC 取引は ISDA マスター契約（1992 または 2002 形式）に CSA、ISDA 2020 プロトコルを加えて使用する。[[derivatives/isda-2020-protocol-japan-implementation]] を参照。 |
| 資本とマージン | バーゼル III RWA、レバレッジ比率、NSFR、LCR。非清算の相対デリバティブには証拠金規制（UMR）。 |
| 同等性レジーム | JSCC についての EMIR 同等性；清算と報告についての CFTC の代替コンプライアンス / 同等性の要素。 |

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
