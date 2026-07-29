---
source: derivatives/nikkei-vix-jpx-vi-equivalent
source_hash: f7088b6b2ecec84c
lang: ja
status: machine
fidelity: ok
title: "日経 225 VI — 日本株ボラティリティ指数"
translated_at: 2026-07-29T19:05:00+09:00
---

# 日経 225 VI — 日本株ボラティリティ指数

## 要約

**日経平均ボラティリティー・インデックス（Nikkei 225 VI）**は、OSE における日経 225 先物とオプションの価格を用いて日本経済新聞社が算出する。期近・期先のアウト・オブ・ザ・マネーのオプション価格を使い、日経 225 の一か月先の予想変動を、補間または補外による 30 日間の値として示す。 ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://indexes.nikkei.co.jp/nkave/archives/news/20250120E_2.pdf.]

指数自体は参照値であり、OSE は同指数を原資産とする **Nikkei 225 VI Futures** を上場している。この先物は指数の将来水準を直接取引所で取引する手段である一方、原資産となる Nikkei 225 オプション群や相対のボラティリティ・デリバティブは別の手段である。

本項目は、公表された指数算出手法、OSE 上場先物、指数とより広い Nikkei 225 オプション・サーフェスとの違い、根拠が確認できる範囲に限定した Cboe VIX 商品との比較を扱う。最新の商品一覧や開示を確認せずに、ETF / ETN の現在の提供状況や機関投資家のポジションを推定しない。

## ウィキ上の位置づけ

本項目は、[[derivatives/INDEX|デリバティブ索引]]の株式ボラティリティ領域に属する。原資産となる Nikkei 225 オプションの上場市場は [[securities/osaka-exchange|大阪取引所（OSE）]]、JSCC の清算基盤は [[securities/japan-market-infrastructure-map|日本の市場インフラ・マップ]]、潜在的な最終利用者側の用途は [[derivatives/equity-volatility-hedging-corporates-japan|日本企業の株式ボラティリティ・ヘッジ]]、ディーラー事業の背景は [[derivatives/dealer-bank-derivatives-revenue-mix|ディーラー銀行のデリバティブ収益構成]]と併せて読む。ボラティリティ・データを検討する際の BOJ 政策の背景は [[derivatives/japan-interest-rate-derivatives-overview|日本の金利デリバティブ概要]]で扱う。

## Nikkei 225 VI が重要な理由

公開されている商品情報からは、三つの異なる層を確認できるが、特定の投資家がそれらをどう利用するかまでは判断できない。 ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html.]

1. **公表指数** — 日本経済新聞社は、所定の Nikkei 225 先物・オプションを入力値として算出した単一の指数値を公表する。
2. **直接上場されたデリバティブ** — OSE は現行の商品一覧で Nikkei 225 VI Futures を上場している。
3. **その他の分析・実装手段** — オプション群、OTC 商品、ETP を利用するには、明示した手法、現行商品の根拠、利用者固有の管理が必要である。

日本では Nikkei 225 VI が指標を提供し、OSE は同指数先物を上場しているが、直接上場される商品群は Cboe VIX 商品群より狭い。相対の OTC バリアンス / ボラティリティ・スワップと、原資産となる Nikkei 225 オプション群は、それぞれ別の実装手段である。

## 指数算出手法

以下の表は日本経済新聞社の現行算出手法を要約する。期近の Nikkei 225 先物と、期近・期先のアウト・オブ・ザ・マネーの Nikkei 225 オプションを用い、30 日間となるよう補間または補外する。 ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://indexes.nikkei.co.jp/nkave/archives/news/20250120E_2.pdf.]

| 構成要素 | 読み方 |
|---|---|
| 基礎ユニバース | アウト・オブ・ザ・マネーの [[derivatives/INDEX|Nikkei 225 プット・コール・オプション]]で、[[securities/osaka-exchange|OSE]] に上場するもの。 |
| 権利行使価格 | 日本経済新聞社が公表する有効性・打切り規則に基づいて採用する OTM の権利行使価格 |
| 満期 | 期近・期先のオプション限月を用い、30 日間となるよう補間または補外 |
| 先物の入力値 | 期近の Nikkei 225 先物価格をアット・ザ・マネーの基準とする |
| 算式 | 各オプション限月のボラティリティを日本経済新聞社のガイドブックに従って算出し、30 日間の指数値に変換 |
| 配信 | 日本経済新聞社がリアルタイムで指数を公表 |

30 日間の算出値であるため、Nikkei 225 VI は単一のオプション契約のインプライド・ボラティリティでは **ない**。公表された算出手法に従い、複数の権利行使価格のオプション価格と期近・期先の満期を組み合わせて、30 日間の指標を算出する。

### 期間構造

日本経済新聞社は 30 日間の代表指数を公表する一方、原資産となる [[derivatives/INDEX|Nikkei 225 オプション]]のサーフェスは複数の満期に及ぶ。実務家はそれらの満期からインプライド・ボラティリティの期間構造を作り、次のような分析に利用できる。

- **満期ごとのインプライド・ボラティリティ比較**。
- **オプションから得る期間構造の傾きの変化を検証**。
- **仕組商品のシナリオ分析**。
- **日本株エクスポージャーを持つポートフォリオのリスク・オーバーレイ研究**。

コンタンゴとバックワーデーションは、ボラティリティ先物またはオプションから得る期間構造で観測できる状態だが、その頻度と大きさは実証すべき問題である。特定のイベント期間に関する主張は、商品設計から推測せず、日経指数の履歴と該当する OSE 契約データで検証する必要がある。

## Cboe VIX との比較

以下の比較表は、各指数算出者の手法と OSE の現行 VI 先物仕様に基づく。流動性の厚みに関する定性的な記述は、固定的な売買高順位ではない。 ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html; https://www.cboe.com/tradable-products/vix.]

| 比較項目 | Nikkei 225 VI | Cboe VIX |
|---|---|---|
| **原資産** | [[securities/osaka-exchange|OSE]] の Nikkei 225 オプション | Cboe の S&P 500 オプション |
| **算出手法の区分** | 公表された 30 日間のオプション・インプライド手法 | 公表された期近オプション・インプライド手法 |
| **指数算出者 / 配信者** | 日本経済新聞社 | Cboe Global Markets |
| **直接上場先物** | OSE Nikkei 225 VI Futures：連続する 8 限月、乗数 JPY 10,000、呼値 0.05 ポイント | Cboe VIX 先物 |
| **指数オプション** | JPX の現行商品一覧には OSE Nikkei 225 VI オプションがない | Cboe VIX オプション |
| **主要なオプション入力市場** | 大阪取引所 | Cboe オプション市場 |

確認できる主要な構造差は商品の幅である。OSE は Nikkei 225 VI Futures を上場し、Cboe は VIX 先物と VIX オプションの両方を上場している。潜在的な実装手段には、OSE 先物、原資産となる Nikkei 225 オプション群、文書化された OTC 商品がある。実際の利用は、運用権限、流動性、期間、ベーシスリスクによって異なる。

## ETF・ETN の現行確認

TSE の最新 ETF・ETN 銘柄一覧と各銘柄の目論見書が、現在上場する商品が Nikkei 225 VI、先物指数、別のボラティリティ指標のいずれに連動するかを判断する正式な情報源である。一般的な商品群の説明だけでは、特定銘柄が現在も上場していることの根拠にならない。

運用権限、流動性、適合性を条件とする潜在的な実装手段には、次のものがある。

1. **OSE Nikkei 225 VI Futures**。
2. OSE 上の **Nikkei 225 オプション群**。複数の権利行使価格を用いる構成方法を明示して文書化する。
3. **相対のボラティリティ・デリバティブ**。文書が整備され、認可されたカウンターパーティから提供される場合に限る。
4. **現在 TSE に上場する商品**。現行の上場状況とベンチマークを確認した場合に限る。

## イベント分析の適用範囲

日経の指数系列、BOJ の決定、MOF の為替介入記録の時点をそろえれば、イベント仮説を検証できる。以下の表は測定上の問いだけを示す。引用した商品ページは、あらかじめ定めた方向、大きさ、回帰速度を裏付けない。 ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.boj.or.jp/en/mopo/mpmdeci/index.htm; https://www.mof.go.jp/english/policy/international_policy/reference/feio/index.html.]

| イベント期間 | 測定上の問い |
|---|---|
| **BOJ 金融政策決定会合** | 対象期間を定め、決定前後の指数値を比較する。 |
| **BOJ の政策変更** | 日付を特定した決定を分類し、方向、大きさ、持続性を測定する。 |
| **MOF の指示による FX 介入（BOJ が代理人）** | 公式の介入日と指数値を対応させる。方向と大きさには日付付き市場データが必要である。 |
| **決算日程** | 構成銘柄と日付のサンプルを定め、指数分布に違いがあるかを検証する。 |
| **時間帯をまたぐ Cboe VIX の変動** | タイムスタンプをそろえ、寄付きのギャップや日中の反転を前提とせず、連動性を検証する。 |
| **地政学イベント** | 事前にイベントを定義し、明示した対照期間に対する指数の推移を測定する。 |

平均回帰、キャリー、イベント感応度は、サンプルと商品を明示して測定する必要がある。日経の指数ページと BOJ の決定日程はその分析の入力値を提供するが、普遍的な戦略リターンや単一の主要なポジション規模決定要因を示すものではない。

## 利用者別の確認事項

以下の表は、指数と先物の設計から導かれる確認事項を示すもので、開示された顧客ポジションや市場シェア順位ではない。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html; https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi.]

| 利用者区分 | 根拠に限定した確認事項 |
|---|---|
| **国内生命保険会社 / 年金** | 企業名を特定できる公開開示は、指数を市場指標または研究入力として利用しているか。また、[[derivatives/INDEX|Nikkei 225 プット]]や OTC ヘッジを別途特定しているか。 |
| **海外マクロ・ヘッジファンド** | 日付付き開示は、方向性、相対価値、期間構造、テールヘッジの利用について、商品と期間を明示しているか。 |
| **国内 AM（ロングオンリー）** | 名称を特定できるファンド文書は、リスク報告、ポートフォリオ構築、ヘッジ権限における指数利用を示しているか。 |
| **個人投資家** | 利用できる場合でも、現行の上場商品群、証券会社での取扱い、適合性管理に左右される。 |
| **仕組商品デスク** | 日付付き商品文書は、評価、ペイオフ、ヘッジ文書で指数またはそのオプション入力値を特定しているか。 |
| **ディーラー銀行デスク** | 公開開示は、ボラティリティ・サーフェスの監視、評価、リスク管理での利用を特定しているか。 |

## 過去の検証期間

日経は、以下の公開イベント期間の検証に利用できる指数履歴を公表している。この表は、根拠のないピーク値や因果関係を付与しない。 ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.boj.or.jp/en/mopo/mpmdeci/index.htm.]

| 局面 | Nikkei 225 VI の検証期間 |
|---|---|
| **世界金融危機（2008-2009）** | 世界的な信用イベントの前後について、公表された指数系列を比較する。 |
| **東北地方太平洋沖地震（2011年三月）** | 地震発生時とその後の市場取引日にわたる指数期間を検証する。 |
| **QQE 期の政策決定（2013年以降）** | 政策イベント仮説を検証する前に、指数値と日付を特定した BOJ の決定を対応させる。 |
| **COVID-19 の発生（2020年三月）** | タイムスタンプと通貨の条件をそろえ、Nikkei 225 VI と Cboe VIX を比較する。 |
| **BOJ の YCC 調整（2022-2024）** | BOJ の決定履歴を使ってイベント期間を定義する。方向や持続性を仮定せず測定する。 |
| **YCC 後の政策期間** | 指数分布の変化を、サンプルに依存する検証可能な結果として扱う。 |

これらの局面は、あらかじめ定義されたレジームではなく、**検証期間の候補**にすぎない。過去のボラティリティ分析やバックテスト結果を解釈する前に、分類、サンプリング、タイムスタンプ、対照期間を明示する必要がある。いずれの参照点も、将来の価格経路を示すものではない。

## 上場商品群の詳細

以下の表では、現在確認できる直接上場デリバティブを OSE Nikkei 225 VI Futures に限定する。現在の TSE ETP の提供状況は、一般的な商品構造から推定せず、TSE の最新商品一覧で確認する必要がある。 ^[Sources: https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html; https://www.jpx.co.jp/english/equities/products/etns/issues/01.html; https://www.jpx.co.jp/english/equities/products/etfs/issues/01.html.]

| 商品種類 | 現在の根拠に限定した説明 |
|---|---|
| **Nikkei 225 VI Futures** | OSE 上場先物。取引時間は 09:00-15:45 と 17:00-19:00 JST、連続する直近 8 限月、乗数 JPY 10,000、呼値 0.05 ポイント |
| **Nikkei 225 オプション群** | 指数算出に用いられる OSE 上場オプション。先物契約とは別の複製手段 |
| **TSE 上場ボラティリティ ETP** | 提供中と判断する前に、最新の ETF / ETN 一覧で現行銘柄とベンチマークを確認 |

この表では、TSE のボラティリティ商品を意図的に現行確認事項として残している。過去の商品群から、現在の銘柄、運用資産額、投資家の利用可否を推定してはならない。

## 年金・保険での潜在的な分析用途

Nikkei 225 VI は、日本株エクスポージャーを持つポートフォリオの市場指標または研究入力として検討できる。潜在的な分析用途には、シナリオ設計、ボラティリティ監視、オプションを用いたヘッジとの比較がある。年金基金や保険会社による実際の利用は、その機関の公開開示で裏付ける必要がある。指数算出手法だけでは、ポジション、トリガー規則、規制資本上の取扱い、ディーラー・フロー上の重要性を判断できない。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/swap-execution-facility-japan]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[financial-regulators/japan-exchange-group]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[INDEX|FinWiki index]]

## 出典

- 日経インデックス：Nikkei 225 VI の概要、算出方法、リアルタイム配信。
- JPX / OSE：Nikkei 225 VI Futures の契約仕様。
- JPX / TSE：現行の ETF・ETN 銘柄一覧。
- Cboe：VIX の算出手法と取引可能商品（比較目的のみ）。
- FSA、FIEA の下の上場および OTC デリバティブの監督枠組み。
