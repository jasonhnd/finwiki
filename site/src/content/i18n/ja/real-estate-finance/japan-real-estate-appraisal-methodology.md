---
source: real-estate-finance/japan-real-estate-appraisal-methodology
source_hash: ace7083dad3c63ac
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の不動産鑑定評価手法"
translated_at: 2026-07-29T00:00:00.000Z
---

# 日本の不動産鑑定評価手法

## TL;DR

日本の不動産鑑定実務は国土交通省の不動産鑑定評価基準に従い、不動産と利用可能データに応じて収益、比較、原価の証拠を調整する。J-REIT 分析では、会計上の帳簿価額と鑑定ベースの公正価値 NAV を区別する。JPX の 2026 年ガイドブックは、財務諸表の簿価純資産と、公正価値 NAV 推計に使う鑑定価額を明確に分けている。鑑定頻度と開示は発行体の現行定期書類で確認し、普遍的な公正価値計上ルールと扱わない。^[出典: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html, https://www.asb-j.jp/en/accounting_standards/y2008/2008-1128.html, および https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf.]

## Wiki route

本項目は [[real-estate-finance/INDEX|real-estate-finance index]] の配下にあり、規模や普及度を順位付けせず、鑑定に関係する文脈へ案内する。発行体開示は [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] と [[real-estate-finance/top-10-j-reit-overview-matrix|J-REIT reference matrix]]、ビークル・書類固有の鑑定論点は [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]]、[[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]、[[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] を参照する。[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] は文脈上の経路にすぎず、特定の鑑定または利回りを誰が利用するかの証拠ではない。LTV、受託者、評価要件は、[[policy-finance/japan-housing-finance-agency|JHF]]、[[policy-finance/INDEX|policy-finance index]]、[[finance/INDEX|finance index]] から推定せず、対象ファイナンスと適用規則で確認する。

### 不動産鑑定評価基準国土交通省が発出する不動産鑑定評価基準（Real Estate Appraisal Standards）は、日本の不動産鑑定士が適用しなければならない手法を定める。同基準は以下を要求する：

表の出典注記：本表は国土交通省の基準と鑑定評価法令を要約する。英訳は参考資料であり、現行日本語基準と留意事項が優先する。^[出典: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html および https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| 要素 | 読み方 |
|---|---|
| 三つのアプローチ | 収益還元法、取引事例比較法、原価法——すべて検討されるべき |
| 調整（収斂）| 最終的な価値の意見は、専門家の判断により関連する証拠を調整する。本要約は固定ウェイトを定めない |
| 収益還元法の詳細 | 評価目的、物件、利用可能な証拠に応じて DCF 法と直接還元法がどのように適用・調整されたかを確認する。本要約から固定的な組合せを推定しない |
| キャップレートの出所 | 対象報告書が用いた証拠と調整を特定する。調査結果は市場文脈であり、当然に鑑定入力となるものではない |
| 取引事例比較法 | 立地、築年数、規模、状態について調整された取引比較事例 |
| 原価法 | 減価償却を控除した再調達原価 |
| 鑑定士の資格 | 不動産の鑑定評価に関する法律に基づく有資格の不動産鑑定士 |

### 独立性と利益相反の確認

役割名から一律の禁止を推定しない。対象業務について、適用される鑑定法令・基準、発行体開示、契約条件、利益相反防止策を確認する。

表の出典注記：各行は確認事項であり、特定の関係または報酬が常に禁止されるとの主張ではない。現行の日本法、国土交通省基準、対象発行体の書類が優先する。^[出典: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html および https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| 確認項目 | 確認内容 |
|---|---|
| 金銭的利害 | 鑑定士または鑑定会社に適用規則上関連する利害があるか、ある場合にどう対応されているか |
| 雇用 / 役員関係 | 所有者、J-REIT、資産運用会社、スポンサーとの関係の有無と、適用される規則・防止策 |
| 報酬体系 | 実際の報酬条件と適用される制限。根拠条文なしに普遍的ルールを仮定しない |
| 開示 | 対象発行体が鑑定士の身元と業務を、どこで、どの目的について開示しているか |

### 手法の概要

DCF（割引キャッシュフロー）法は、選択した分析期間にわたって不動産のキャッシュフローを予測し、それらを現在価値へと割り戻す。分析期間は鑑定固有であり、普遍的に 10 年とは限らない：

```
Value = Σ [NOI_t / (1 + r)^t] + [Terminal value / (1 + r)^n]
```

| 入力 | 読み方 |
|---|---|
| NOI 予測 | 各年の純営業収益。賃料ロール、予想されるリース更改、空室率の前提、営業費用、固定資産税、保険、修繕、維持管理を反映 |
| 割引率 | 具名の鑑定評価書に記載されたレートと方法を用い、評価日、指定リスク、成長・キャッシュフロー前提、ターミナル処理を照合し、キャッシュフローに反映済みのリスクを二重計上しない |
| ターミナルバリュー | 分析期間の末尾において、ターミナル年の NOI / ターミナルキャップレートとして計算 |
| ターミナルキャップレート | 報告書の出口市場前提を反映する。入口レートと比較して説明された根拠を確認し、方向を仮定しない |
| 保有コストの調整 | 資本的支出その他の保有コストがどうモデル化されているかを特定し、二重計上を避ける |

### 主要な感応度

| 感応度 | 読み方 |
|---|---|
| 賃料の前提 | フォワード賃料のプロファイルが NOI 予測を駆動する；リース更改の前提が決定的 |
| 空室率の前提 | 分析期間にわたる空室率が NOI に累積的に影響する |
| 資本的支出の前提 | 期間にわたる資本的支出が累積 NOI を減少させる |

### J-REIT 実務における DCF

J-REIT の鑑定開示には DCF 分析と直接還元法が含まれる場合があるが、予測期間、手法選択、調整は物件・報告書固有である。10 年の期間や固定的な調整ルールを普遍的なものとして扱わず、対象の鑑定評価書を確認する。

### 手法の概要直接還元法は、安定化した NOI をキャップレートで除することによって不動産を評価する：

```
Value = Stabilized NOI / Cap rate
```

| 入力 | 読み方 |
|---|---|
| 安定化 NOI | 通常の営業条件下で期待される年間 NOI（過渡的 / リースアップ状態ではない）|
| キャップレート | 当該不動産種別および立地の市場キャップレート |

### キャップレート調査の文脈——JREI

JREI（日本不動産研究所）の投資家調査は、日付を明示した調査資料の一つである。回答者の期待キャップレートを示すもので、取引記録、鑑定の母集団、または特定鑑定士がその数値を使用した証拠ではない。

| 特徴 | 読み方 |
|---|---|
| 公表者 | [[JapanFG/japan-real-estate-institute|Japan Real Estate Institute (JREI)]] |
| 頻度 | 半期（四月と十月）|
| カバレッジ | オフィス、住宅、リテール、ホテル、物流——主要都市を横断 |
| 手法 | 不動産種別および立地別の期待キャップレートについての機関投資家および資産運用会社への調査 |
| 公開サーフェス | 見出しの要約；完全なデータは有料プロダクト |

JREI 第 50 回不動産投資家調査（2024 年 4 月）では、丸の内 / 大手町のグレード A オフィスの期待キャップレートは 3.2%、東京（多摩）のマルチテナント内陸物流は 4.1% と公表された。これらは対象カテゴリーと日付を限定した調査結果であり、一般的な鑑定レンジではない。評価での使用を立証するには、対象鑑定評価書とそこに記載された入力を引用する。^[出典: https://www.reinet.or.jp/pdf/REIS/publication_data50th.pdf.]

### キャップレート vs 日本の金利環境

金融政策のラベルだけからキャップレートのサイクルを推定しない。歴史的主張には、定義した系列の同日付観測を組み立て、物件、賃貸条件、流動性、資金調達、標本構成など他の要因を検討する。

| 期間 | キャップレートサイクルの読み方 |
|---|---|
| 2008-2010 | 対象調査または取引系列を指定して同種カテゴリーを比較し、GFC というラベルだけに変化を帰属させない |
| 2011-2013 | 定義した系列、観測日、標本構成、物件カテゴリーを確認する |
| 2014-2021 | 定義したキャップレート証拠を日付付きの日銀政策データと比較する。政策時期だけでは因果を立証しない |
| 2022-2023 | 市場全体を「安定」「タイト化」とせず、実際の系列とカテゴリーを報告する |

## 4. 取引事例比較法取引事例比較法は、比較可能な取引を参照することによって不動産を評価する：

| ステップ | 読み方 |
|---|---|
| 比較事例の特定 | 類似の不動産種別、立地、築年数、規模の直近の取引 |
| 差異の調整 | 立地の質、建物の築年数、延床面積、直近の資本的支出、リース構造 |
| 坪単価 / ㎡ 単価の調整 | 調整された単価を対象不動産に適用 |
| 他の証拠との調整 | 対象報告書で取引事例比較の関連性とウェイトを説明し、固定的な序列を仮定しない |

## 5. 原価法原価法は、土地価格 + 改良物の減価償却済み再調達原価として不動産を評価する：

| ステップ | 読み方 |
|---|---|
| 土地価格 | 公的な土地評価（基準地価、路線価、公示地価）および調整された比較事例に基づく |
| 再調達原価 | 今日同等の構造物を建てるためのコスト |
| 減価償却 | 物理的、機能的、経済的陳腐化 |
| 建物価格 | 減価償却を控除した再調達原価 |
| 合計 | 土地価格 + 減価償却済み建物価格 |

原価法の関連性は、評価目的、物件特性、利用可能な証拠に依存する。普遍的な第一・第二・第三順位を割り当てない。

### 公的な土地価格ベンチマーク

表の出典注記：各ベンチマークは法的な発出者と目的が異なるため、行ごとに出典を示す。他のベンチマークに対する概算比率は普遍的な評価ルールではないため削除した。^[出典は各行に記載。]

| ベンチマーク | 発出者 | 用途 |
|---|---|---|
| 公示地価 | 国土交通省 | 法定の標準地価格ベンチマーク ^[出典: https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000328.html.] |
| 基準地価 | 都道府県 | 都道府県地価調査。対象都道府県と年を確認 ^[出典: https://www.reinfolib.mlit.go.jp/.] |
| 路線価 | 国税庁 | 相続税・贈与税行政のための路線価 ^[出典: https://www.rosenka.nta.go.jp/.] |
| 固定資産税評価額 | 地方公共団体 | 地方固定資産税評価。自治体と評価年度を確認 ^[出典: https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/149767_08.html.] |

これらの公的土地価格資料は、それぞれ法定または行政上の目的が異なる。対象報告書がどのように使用したかを確認し、いずれも鑑定士の市場分析を当然に代替するものではない。

## 6. 調整と最終的な価値の意見鑑定士は、三つのアプローチからの結果を調整する：

表の出典注記：国土交通省の基準は、専門家判断により鑑定証拠を調整することを求めるが、本表の旧版にあった固定的な序列またはウェイトは定めていない。^[出典: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html.]

| アプローチ | 案件固有の調整における役割 |
|---|---|
| 収益還元法（DCF + 直接還元）| 期待収益に基づく証拠。関連性は物件と利用可能データに依存 |
| 取引事例比較法 | 比較可能性を調整した市場取引の証拠 |
| 原価法 | 原価の証拠。関連性は物件特性と評価目的に依存 |

最終的な価値の意見は、有資格の不動産鑑定士による鑑定評価書に記録される。J-REIT の開示は鑑定価額または一部前提を掲載する場合があるが、開示書類と会計上の利用方法は発行体ごとに確認する。鑑定価額は財務諸表上の帳簿価額になるとは限らない。

### J-REIT の鑑定頻度

J-REIT の財務諸表上の帳簿価額と鑑定ベースの公正価値 NAV は異なる。発行体開示は NAV 分析に使う物件別鑑定価額を示す。適用される鑑定時期と開示は発行体書類で確認する。^[出典: https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf.]

| 側面 | 読み方 |
|---|---|
| 方法 | 取得時およびその後の鑑定時期は、対象発行体の取得開示と定期開示で確認する。本ページは普遍的な頻度を主張しない |
| 開示 | 物件別鑑定価額や前提は、取得リリース、有価証券報告書、運用報告書等に掲載され得る。範囲と頻度は発行体固有 |
| 集計 | 分析者は鑑定ベースのポートフォリオ NAV を算出できるが、発行体が集計値を公表するか、どのように公表するかは異なる |
| 監査人 | 財務諸表監査だけでは、監査人が各外部鑑定を独立に検証したことを意味しない。契約と監査開示を確認する |

表の出典注記：JPX は財務諸表上の帳簿価額と鑑定ベースの公正価値 NAV を区別している。本表は確認用チェックリストであり、普遍的な半期ごとの完全鑑定または監査人レビューを主張しない。^[出典: https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf および https://www.asb-j.jp/en/accounting_standards/y2008/2008-1128.html.]

### NAV vs 市場価格

鑑定ベースの NAV と取引される投資口価格は、J-REIT 分析における二つの異なる参照点である：

| 価値 | 読み方 |
|---|---|
| 鑑定 NAV | ポートフォリオ不動産の鑑定価値に基づく一口当たり NAV |
| 市場価格 | JPX における一口当たり市場価格 |
| P/NAV 比率 | 分析者または発行体が明示した定義による市場価格 / 鑑定ベース NAV。日付と構成項目を揃える |

P/NAV は 1.0 を上回ることも下回ることもあるが、その乖離に単一の因果解釈はない。鑑定時点、金利・キャップレート期待、レバレッジ、成長性、流動性、ガバナンス、市場フローなどを反映し得る。同期間の実証研究なしに、外国投資家または国内保険会社のフローが P/NAV を動かす、あるいはアンカーすると記述しない。リンク先の所有構成・ALM ページは文脈上の経路であり、因果の証拠ではない。

### 鑑定に対するスポンサー / 資産運用会社のガバナンス

J-REIT の枠組みは異なる法的・運用上の役割を割り当てる。実際の選任と独立性確保策は対象発行体の書類で確認する：

表の出典注記：本表は機能構造図である。JPX/ARES 資料と国土交通省鑑定ルールが役割を支えるが、資産運用会社、鑑定士、監査人、カストディアンは対象 J-REIT の開示で確認する。^[出典: https://www.jpx.co.jp/english/equities/products/reits/guidebook/b5b4pj000003984r-att/REIT.pdf, https://www.ares.or.jp/action/jreit/, および https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html.]

| 機能 | エンティティ |
|---|---|
| 投資法人のガバナンス | 適用規則と発行体書類により、投資法人の機関、権限、職務を確認する |
| 資産運用会社 | 指定会社、スポンサーとの関係、登録、委任範囲、利益相反を確認する |
| 鑑定士 | 対象となる有資格の鑑定士 / 鑑定会社、業務、適用される利益相反防止策を確認する |
| 監査人 | 対象監査人と関連監査の範囲を確認し、鑑定検証を推定しない |
| カストディアン / 受託者 | ビークルと資産保有構造に基づく選任主体。対象発行体の開示で確認する |

契約当事者、利益相反防止策、鑑定士の身元、開示された手法は、適用規則と発行体の現行書類に照らして確認する。本ページは役割名だけから独立性または普遍的な開示項目を推定しない。

## 8. 非 J-REIT 文脈における鑑定

表の出典注記：本表は論点把握用チェックリストである。鑑定目的、時期、会計処理、LTV への使用、依拠可能性は、対象ビークル、ファイナンス、鑑定評価書、会計方針で確認する。普遍的な頻度または価格効果は主張しない。^[出典: https://www.mlit.go.jp/totikensangyo/totikensangyo_tk4_000024.html, https://www.asb-j.jp/en/accounting_standards/y2008/2008-1128.html, および https://www.fsa.go.jp/en/.]

| 文脈 | 鑑定の用途 |
|---|---|
| [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|Private REIT]] | ビークル書類で、口数 NAV の定義、評価方針、鑑定士、実際の頻度を確認する |
| [[real-estate-finance/japan-cmbs-rmbs-securitization|CMBS]] | 各 LTV またはコベナンツに入る価値定義、依拠できる者、ディール書類上の再評価要件を確認する |
| [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] | 資産保有、ファイナンス、投資家書類に基づき、取得時およびその後の評価要件を確認する |
| [[real-estate-finance/real-estate-bridge-fund-japan|Bridge fund]] | 取得、コベナンツ、借換え、出口の各評価を確認する。鑑定だけでテイクアウト価格が決まるものではない |
| 年金 / SWF の直接保有 | 投資家に適用される会計方針、評価基準、ガバナンス、報告頻度を確認する |
| 企業の貸借対照表 | 企業に適用される JGAAP / IFRS 方針、資産分類、原価 / 公正価値の基準、開示を確認し、会計基準名だけから単一モデルを推定しない |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[policy-finance/INDEX]]
- [[policy-finance/japan-housing-finance-agency]]
- [[finance/INDEX]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[JapanFG/japan-real-estate-institute]]

## Sources

- ARES（不動産証券化協会）：日本の不動産証券化市場のサマリー統計。
- JREI（日本不動産研究所）：キャップレート調査および鑑定手法のサーフェス。第 50回 不動産投資家調査（2024-04）— https://www.reinet.or.jp/pdf/REIS/publication_data50th.pdf — 丸の内 / 大手町グレード A オフィス 3.2%、東京（多摩）マルチテナント内陸物流 4.1%。
- 国土交通省：不動産鑑定評価基準（Real Estate Appraisal Standards）；公示地価の土地価格ベンチマーク。
- JPX：J-REIT の定期報告および開示の枠組み。
- 金融庁：投資商品規制および J-REIT 開示の枠組み。
