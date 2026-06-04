---
source: derivatives/japan-otc-derivative-market-overview
source_hash: d3d97f040b545510
lang: ja
status: machine
fidelity: ok
title: "日本の OTC デリバティブ市場概観"
translated_at: 2026-06-02T11:47:37.312Z
---

# 日本の OTC デリバティブ市場概観

## 要約

日本の**店頭(OTC)デリバティブ市場**は4つの商品クラスター — 金利、為替、クレジット、株式／ストラクチャード — にまたがり、すべて金融商品取引法(FIEA)のもとで規律され、金融庁(FSA)によって監督され、(対象範囲の商品については)日本証券クリアリング機構(JSCC)で清算され、指定された取引情報蓄積機関への取引報告を伴う。円の金利 OTC デリバティブは想定元本残高で最大のクラスターである;為替 OTC は日次取引高で最大である(リテール FX に駆動される、[[derivatives/retail-fx-margin-trade-japan]]);クレジット OTC は想定元本で最小だがインデックス取引で実質的に活発である;株式／ストラクチャード OTC はリテールのストラクチャード債券の販売とディーラーバンクのヘッジに支配される。

このエントリは、4つの OTC 商品クラスターを結びつける商品横断のアンカーである。上場デリバティブのカバレッジ(JGB 先物、TONA 先物、日経225 先物およびオプション)については、[[derivatives/INDEX]] と [[securities/japan-market-infrastructure-map]] を参照。

## ウィキ上の位置づけ

このエントリは OTC 市場のアンカーとして [[derivatives/INDEX|derivatives index]] の下に位置する。金利側のアンカーについては [[derivatives/japan-interest-rate-derivatives-overview]]、清算および報告インフラについては [[derivatives/otc-clearing-jp-trade-repository]]、ディーラーフランチャイズの経済性については [[derivatives/dealer-bank-derivatives-revenue-mix]] とペアにすること。上場デリバティブの比較は [[derivatives/jgb-futures-curve]] と [[derivatives/japan-equity-derivatives-product-matrix]] にある。

## 4つの OTC 商品クラスター

| クラスター | 主要商品 | 想定元本規模 | 流動性の中心 | アンカーページ |
|---|---|---|---|---|
| 金利 OTC | 円 IRS、円 OIS、円スワップション、通貨ベーシススワップ、アセットスワップ、インフレスワップ、CMS | 数兆 USD 相当(BIS 半期) | OTC、多くは JSCC で清算 | [[derivatives/japan-irs-market]], [[derivatives/ois-tona-curve]], [[derivatives/yen-basis-swap-market]], [[derivatives/japan-swaption-market]], [[derivatives/japan-inflation-swap]], [[derivatives/japan-cms-constant-maturity-swap]] |
| 為替 OTC | 為替フォワード、為替スワップ、為替オプション、NDF(該当する場合)、通貨スワップ、リテール FX 証拠金 | 日次で数千億 USD 相当 | OTC、大部分は相対;リテール FX は FX ディーラーを介して清算／ネッティング | [[derivatives/fx-options-japan-corporate-treasury]], [[derivatives/retail-fx-margin-trade-japan]], [[derivatives/fx-stp-broker-aggregation]] |
| クレジット OTC | 個別銘柄 CDS(日本企業)、iTraxx Japan インデックス、ベーシス取引、リカバリースワップ | 数百億 USD 相当 | OTC、大部分は相対;JSCC は指定された CDS 清算サービスを運営 | [[derivatives/japan-cds-market-overview]], [[derivatives/cds-japan-corporate-spread-mechanics]], [[derivatives/basis-trade-bond-cds-japan]] |
| 株式／ストラクチャード OTC | 株式連動型スワップ、個別株式オプション、分散スワップ、ストラクチャード債券(EB、ノックイン、PRDC)、リパッケージングノート | 可変;リテールのストラクチャード債券の発行とディーラーバンクのヘッジに支配される | OTC 相対 | [[derivatives/structured-bond-japan-retail-issuance]], [[derivatives/structured-product-eb-knockin-japan-retail]], [[derivatives/japan-single-stock-options]], [[derivatives/equity-volatility-hedging-corporates-japan]] |

OTC 市場は取引所取引デリバティブ市場(OSE の JGB 先物、TONA 先物、日経225 先物およびオプション)から構造的に分離しているが、2つの市場はディーラーバンクのヘッジとエンドユーザーのポートフォリオ判断を通じて緊密に結合している。

## 市場参加者

| カテゴリ | 役割 |
|---|---|
| メガバンク系列の証券会社 | MUFG Securities, SMBC Nikko, Mizuho Securities — 支配的な JPY 金利／為替／ストラクチャードフランチャイズ。 |
| 独立系日本証券会社 | Nomura, Daiwa, Mitsubishi UFJ Morgan Stanley — 強い円フランチャイズに加えクロスボーダー。 |
| グローバル投資銀行 | JPMorgan, Goldman, Citi, Morgan Stanley, Deutsche Bank, Barclays, BNP Paribas, HSBC, UBS。 |
| 国内銀行(エンドユーザー) | メガバンクのトレジャリー、地方銀行、信託銀行、農林中央金庫 — 主に ALM ヘッジ。 |
| 生命保険会社(エンドユーザー) | 保険準備金のデュレーションマッチングのための長期の受け固定フロー。 |
| 損害保険会社(エンドユーザー) | より小規模な ALM ヘッジに加え為替連動型の負債ヘッジ。 |
| 企業(エンドユーザー) | 変動から固定へのローンヘッジ、外国発行のスワップバック、為替収益ヘッジ、資本構造ヘッジ。 |
| 外国マクロ／ヘッジファンド | 戦術的な日本金利およびクレジットのポジショニング。 |
| 年金基金／アセットマネージャー | JPY 債券マンデートのデュレーション管理。 |
| インターディーラーブローカー | ICAP / Tradition / BGC / Tullett Prebon — 匿名執行と価格発見。 |
| CCP | JSCC — 義務付けられた円 IRS / OIS と指定された CDS の中央清算。 |
| 取引情報蓄積機関 | DTCC Data Repository Japan — FIEA 報告のための指定 TR。 |
| 規制当局 | FIEA のもとの FSA。 |
| 中央銀行 | BoJ — マクロのドライバーとサーベイランスの役割。 |

ディーラーフランチャイズは構造的なバックボーンである。親 FG のコンテキストについては [[megabanks/mufg-bank]], [[megabanks/sumitomo-mitsui-banking-corp]], [[megabanks/mizuho-bank]] を参照。

## 規制フレームワーク

| レイヤー | 詳細 |
|---|---|
| FIEA | OTC デリバティブの取引、報告、清算、行為のための法定フレームワーク。 |
| FSA 監督 | FIEA 登録ディーラー、CCP としての JSCC、取引情報蓄積機関の運営を監督する。 |
| 義務的清算 | FSA が指定した標準化された円 IRS および特定の CDS は JSCC で清算しなければならない。 |
| 取引報告 | すべての FIEA 規制対象エンティティの OTC デリバティブ取引は指定された TR に報告しなければならない。 |
| ISDA ドキュメント | ほとんどの OTC 取引は ISDA マスター契約(1992 または 2002 形式)に加え CSA、ISDA 2020 プロトコルを使う。[[derivatives/isda-2020-protocol-japan-implementation]] を参照。 |
| 資本と証拠金 | Basel III RWA、レバレッジ比率、NSFR、LCR。非清算相対デリバティブのための非清算証拠金規制(UMR)。 |
| 同等性制度 | JSCC のための EMIR 同等性;清算と報告のための CFTC の代替コンプライアンス／同等性の要素。 |

清算および報告インフラの詳細については [[derivatives/otc-clearing-jp-trade-repository]] を参照。

## 公開データソース

| ソース | 何を示すか |
|---|---|
| BIS 半期 OTC デリバティブ統計 | カウンターパーティタイプ、商品、通貨でスライスされた JPY OTC 想定元本とグロス市場価値。 |
| BIS 3年ごとの中央銀行サーベイ | 為替および OTC 金利デリバティブの取引高スナップショット。 |
| BoJ 東京短期金融市場サーベイ | 集計された JPY 短期金融市場およびデリバティブの取引パターン。 |
| ISDA SwapsInfo | JPY を含む主要 IRS 通貨の週次の清算済みおよび相対の想定元本。 |
| JSCC 月次清算統計 | JSCC の IRS および CDS の清算済み出来高、建玉、デフォルトファンドの規模(開示されている場合)。 |
| FSA 監督開示 | 定期的な監督コメンタリーと集計された市場構造データ。 |
| ディーラーバンク IR | 集計されたマーケットセグメントの収益コメンタリー。 |

特定の数値については、想定元本残高、グロス市場価値、取引高が異なる周期で報告される異なる概念であるため、正確なソースのリリースとサーベイのヴィンテージを引用すること。

## 関連項目

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

- Bank for International Settlements (BIS): 半期 OTC デリバティブ統計;為替および OTC デリバティブの3年ごとの中央銀行サーベイ。
- Bank of Japan: 決済／市場サーフェス;東京短期金融市場サーベイ;BIS 半期 OTC デリバティブデータの日本部分。
- Japan Securities Clearing Corporation (JSCC): IRS 清算範囲とルール;CDS 清算サービス;月次清算統計。
- Financial Services Agency (FSA): OTC デリバティブの FIEA 監督、義務的清算範囲、取引報告ルール。
- International Swaps and Derivatives Association (ISDA): SwapsInfo 週次集計取引;ISDA マスター契約フレームワークドキュメント。
- Japan Exchange Group (JPX) / Osaka Exchange (OSE): クロス比較のための上場デリバティブの参照。
- DTCC Data Repository Japan: FIEA 規制対象エンティティの OTC デリバティブ報告のための指定 TR。
