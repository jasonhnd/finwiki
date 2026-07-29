---
source: finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework
source_hash: 21584004ba80a18e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "DCF・マルチプル・NAV のクロスドメイン評価フレームワーク"
translated_at: 2026-07-29T00:00:00.000Z
---
# DCF・マルチプル・NAV のクロスドメイン評価フレームワーク

## 要約

よく使われる評価アプローチには、ディスカウント・キャッシュフロー（DCF）、取引 / 類似会社マルチプル、純資産価値（NAV）がある。それぞれ、将来フリーキャッシュフロー、比較可能な市場価格、負債控除後の資産価値という異なる価値前提を検証するものであり、企業・取引・資産クラスを通じていずれかが常に優位とは仮定しない。手法の選択と照合は、対象となる事実、目的、データ、適用される手続に従う。本ページはクロスドメインの方法論ルーティング面であり、予測または投資助言ではない。[[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、[[finance/japan-acquisition-finance|Japan acquisition finance]]、[[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]]、[[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] と併せて読む。

## ウィキ上の位置づけ

本ページは [[finance/INDEX|finance domain]] の配下にあるクロスドメイン評価リファレンスである。WACC / 割引率の入力レイヤーは [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]]、オプショナリティのオーバーレイは [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]]、収益不動産の変形は [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]]、公正価格の少数株主分析は [[finance/japan-mbo-and-squeeze-out-process|Japan MBO and squeeze-out process]]、TOB プレミアムの読み方は [[finance/japan-tender-offer-process|Japan tender offer process]]、案件類型のオーバーレイは [[finance/japan-m-a-deal-process-comparison-matrix|Japan M&A deal process comparison matrix]] と併用する。[[finance/japan-listed-financial-groups-investable-universe|Japan listed FG investable universe]]、[[real-estate-finance/top-10-j-reit-overview-matrix|J-REIT reference matrix]]、[[insurance/japan-life-insurance-big-four|Japan life insurance big four]] などのセクター別マトリックスは参照集合であり、最大・最新の順位や評価結論を立証するものではない。

## 3 つのアプローチの概観

表の出典注記：このクロスドメイン分類は分析上の整理である。不動産評価との対応は国土交通省の不動産鑑定評価基準に基づき、企業評価の複数手法ワークフローは METI の公正な M&A 資料と Damodaran の評価資料を参照する。^[出典: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html, https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html, および https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| アプローチ | 評価対象 | 中核入力 | 検討し得る適合場面 |
|---|---|---|---|
| DCF（インカム・アプローチ） | 将来フリーキャッシュフローの現在価値 | 予測 FCF、WACC、terminal value、成長率 | 継続企業としての事業会社、プロジェクトファイナンス、M&A の本源的価値 |
| マルチプル（マーケット・アプローチ） | 類似対象の市場取引マルチプルから示唆される価格 | ピアセット、マルチプル（EV/EBITDA、P/E、P/B）、正規化 | 上場株スクリーニング、セクター・ベンチマーク、M&A の sanity-check |
| NAV（アセット・アプローチ） | 負債控除後の資産価値合計 | 資産鑑定、負債時価、偶発項目 | REIT / 資産保有型 / 持株会社 / fund-of-fund / 清算 |

日本の不動産鑑定評価基準（[[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]]）も、不動産評価について同じ 3 方式（収益 / 取引事例比較 / 原価）の構造を制度化している。クロスドメインの並行関係は直接的である。

### メカニクス

表の出典注記：以下は実務上のワークフローであり、強制的な公式ではない。5-10 年という期間は例示的なモデル慣行であり、対象事業を合理的に予測できる期間に置き換える。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| ステップ | 詳細 |
|---|---|
| 予測期間 | 5–10 年は例示ケースとしてのみ検討し、事業固有の証拠に裏付けられる期間を用いて fade / transition を明示する |
| フリーキャッシュフロー | FCFF（firm）または FCFE（equity）。どちらかを明示する |
| 割引率 | FCFF には WACC、FCFE には株主資本コスト。[[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] 参照 |
| Terminal value | Gordon growth（g < risk-free）、exit multiple、または H-model |
| 株式価値へのブリッジ | EV から net debt、minority、preferred を控除し、non-operating assets を加算 |

### DCF が適合し得る場面

- キャッシュフローの可視性と明示的な予測証拠がモデルを支える場合の継続企業としての事業会社
- DCF を普遍的アンカーではなく、本源的価値または入札根拠を検討する候補手法の一つとして用いる場合の M&A 分析
- 有限期間のキャッシュフローと執行可能な契約条件をモデル化できる場合のプロジェクトファイナンス
- 入力を独立して裏付けられる場合のマルチプル評価のクロスチェック
- 取引証拠が前提を支える場合の支配権プレミアムまたはシナジー帰属の分析

### DCF の典型的な落とし穴

- Terminal value が企業価値および株式価値に占める割合を計算・開示し、普遍的な 60–80% レンジを転用しない
- 事業の実際の視認可能期間を超えた予測外挿
- キャッシュフローと割引率の定義不一致（FCFF を株主資本コストで割り引く、FCFE を WACC で割り引く）
- 政策保有株、支配株主、ガバナンス・ディスカウントなど日本固有の構造項目を無視した WACC 前提
- 感応度表を算術でしかないにもかかわらずリスク分析として扱う
- 成長の隠れた二重計上（高い terminal growth と高い明示期間成長）

### 日本固有の DCF 調整

表の出典注記：以下は自動的に適用する評価調整ではなく、照合すべき論点である。METI の公正な M&A 資料は案件固有の複数手法分析を支えるが、適用税率と各貸借対照表調整は評価日時点の事実と発行体開示から取得する。^[出典: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html.]

| 項目 | 調整 |
|---|---|
| 政策保有株 | 事業 FCF とは区別し、非事業資産として公正価値評価する。[[finance/japan-cross-shareholding-unwinding-economics|Japan cross-shareholding unwinding economics]] 参照 |
| 実効法人税率 | 対象企業、法域、日付、モデルに適用される国税・地方税の前提を導出し、一般的な税率を転用せず、実際の実効税率および繰延税金ポジションと照合する |
| 現金の分類 | 対象発行体の事実から、事業用、制限付き、移転制約付き、規制上必要な現金と非事業用現金を判定し、構造的な余剰現金を仮定しない |
| 年金負債 | 積立不足の退職給付債務は EV から株式価値へのブリッジで debt-like に扱う |
| 少数株主持分 | 上場子会社を持つ親会社評価では、明示的な minority deduction が必要 |
| 支配株主ディスカウント | 持株会社構造ではディスカウントが妥当となり得る。[[finance/japan-listed-financial-groups-investable-universe|listed FG investable universe]] 参照 |

### 資産類型別の代表的マルチプル

表の出典注記：分子・分母の組合せは標準的な評価定義に沿う。「典型的用途」欄は分析のルーティングガイドであり、特定のマルチプルだけで十分だとするものではない。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| マルチプル | 分子 | 分母 | 典型的用途 |
|---|---|---|---|
| EV/EBITDA | 企業価値 | EBITDA | 資本構成中立。M&A、LBO サイズ決定 |
| EV/EBIT | 企業価値 | EBIT | 資本集約度の比較 |
| EV/Sales | Enterprise value | 売上高 | 赤字企業、高成長企業 |
| P/E | 株式価格 | 純利益 | 上場株スクリーニング。税効果を含む |
| P/B | 株式価格 | 簿価自己資本 | 銀行、保険会社、資産保有型金融 |
| P/NAV | 上場価格 | 鑑定 NAV | J-REIT、上場不動産、持株会社 |
| 配当利回り | 配当 | 株式価格 | yield 投資家のスクリーニング |
| EV/(EBITDA-Capex) | Enterprise value | EBITDA から capex を控除 | 資本集約的産業 |
| Cap rate | NOI | 不動産価格 | 不動産。[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR framework]] 参照 |

### マルチプルが適合する場面

- 厚いピアセットがある流動的な上場株比較
- セクター・ベンチマークと relative value スクリーニング
- 本源的 DCF に対する M&A sanity-check
- 詳細モデル作成前の初期評価
- 適用される手続、取締役会の委任、アドバイザーの業務範囲、または法令が求める場合の案件固有の公正性クロスチェック。普遍的な必須事項とは仮定しない

### マルチプルの典型的な落とし穴

- 実際には比較可能でない「類似」企業（成長率、レバレッジ、地域、サイクル位置が異なる）
- 実績マルチプルと予想マルチプルの混同
- 分子 / 分母の不一致（EV マルチプルに net-of-debt の利益を使う）
- 利益分母に含まれる一過性項目（減損、売却益、リストラ）
- survivor bias のあるピアセット
- サイクルのピーク / ボトムのマルチプルを steady state として扱う
- 資産保有型事業で簿価資産価値と市場資産価値を区別せずに P/B を使う

### 日本固有のマルチプル調整

表の出典注記：以下はデューデリジェンス用チェックリストである。JPX の資本コスト対応プログラムはガバナンス上の文脈を示すが、ディスカウントまたは正規化の要否と大きさは、企業、日付、ピア群、案件に依存する。^[出典: https://www.jpx.co.jp/english/equities/follow-up/02.html.]

| 項目 | 調整 |
|---|---|
| 政策保有株益 | よりクリーンな比較のため、ピア EBIT / 純利益から控除する |
| コングロマリット・ディスカウント | 対象持株会社が一貫して算定した sum-of-parts に対してディスカウントまたはプレミアムで取引されているかを検証し、普遍的な方向や大きさを仮定しない |
| 親子上場構造 | 特有の minority と連結調整が必要。[[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]] へルーティング |
| TSE の資本コスト対応プログラムと P/B | 資本コストや株価を意識した経営の実現に向けた TSE の開示要請は、P/B にかかわらずプライム市場とスタンダード市場の全上場会社を対象とする。各社の P/B は企業・日付固有の分析項目として扱う。[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding]] 参照 |
| 商社の特殊項目 | 資源益、持分法利益はピア比較から除外する |

### メカニクス

NAV = Σ(asset values) − Σ(liability values) ± contingent / off-balance items.

J-REIT または不動産ファンドでは、対象発行体と発行体が指定した独立鑑定人が明示した日付時点で報告する不動産価値を用い、選択した NAV 定義に従って負債その他の項目を照合する。[[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] は国土交通省の枠組みを説明するものであり、「JREI appraisal」ルールではない。持株会社では、上場持分、非上場持分、事業、負債、税金、偶発項目をそれぞれ定義し、出典を付す。

表の出典注記：以下の NAV バリアントはモデル上の定義である。国土交通省基準は鑑定評価額を関連入力の一つとして位置付けるが、NAV 調整の選択と照合は案件固有である。^[出典: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html および https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| バリアント | 詳細 |
|---|---|
| Book NAV | 会計財務諸表上の簿価自己資本 |
| Appraised NAV（J-REIT） | 不動産公正価値（鑑定）から debt とその他負債を控除 |
| Sum-of-parts NAV | 各セグメント / 持分を個別評価して合算 |
| Liquidation NAV | distressed sale の実現価値から wind-down costs を控除 |
| Adjusted NAV | 非上場持分、不動産、繰延税金、偶発負債を時価修正した Book NAV |

### NAV が適合する場面

- [[real-estate-finance/j-reit-market-overview|J-REITs]] と私募不動産ファンド（price-to-NAV が構造的指標）
- 資産保有型持株会社（例: 商社、上場 PE、[[finance/japan-listed-financial-groups-investable-universe|listed financial groups]]）
- Fund-of-fund と上場オルタナティブ投資ビークル
- 銀行と保険会社（AOCI と economic-value 項目を調整した簿価自己資本が構造的指標。[[insurance/economic-value-based-solvency|economic value based ソルベンシー]] 参照）
- 清算分析と倒産再建
- DCF が情報を与えにくい negative-going-concern の状況

### NAV の典型的な落とし穴

- 鑑定日、発行体の報告日、市場価格の日付を比較する。更新頻度とラグの影響はいずれも発行体・日付固有である
- セグメント間の二重計上
- 偶発負債（訴訟、年金積立不足、環境）の時価反映漏れ
- goodwill を「asset value」と扱うこと。実態は取得価格の償却である
- 支配ブロックの非流動性ディスカウントを無視した上場持分評価
- static asset value を超える option value を持つ継続企業に NAV を使うこと（[[finance/real-options-valuation-japan-applications|real options valuation]] 参照）

### 日本固有の NAV 調整

表の出典注記：以下は案件固有の確認項目であり、市場全体の事実または自動調整ではない。特に持株会社ディスカウントは一般的レンジから転用せず、対象企業と評価日について測定する。^[出典: https://www.jpx.co.jp/english/equities/follow-up/02.html および https://www.ares.or.jp/action/jreit/.]

| 項目 | 調整 |
|---|---|
| J-REIT price-to-NAV | 対象発行体が開示した NAV 定義と同日付の市場価格から比率を算出する。差異を検討する際、鑑定ラグへ機械的に帰属させない |
| 持株会社コングロマリット・ディスカウント | 対象企業の評価日時点の価格を、一貫して算定した sum-of-parts NAV と比較する。符号と大きさは企業・日付固有である |
| 政策保有株の時価評価 | 上場価格で評価する。大口ブロックには非流動性ディスカウントがあり得る |
| 含み益持分に対する繰延税金負債 | gross NAV と net-of-tax NAV を照合する |
| 保険 economic value | [[insurance/economic-value-based-solvency|ICS / ESR]] regime は embedded value と risk margin を中核 NAV 入力として扱う |

## 3 方式の選択

表の出典注記：このマトリックスは手法選択の実務家による整理であり、法定の優先順位ではない。METI の公正な M&A 資料と Damodaran の評価資料は、事実に適合する手法を選び、前提と結果を照合するアプローチを支える。^[出典: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html および https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| 状況 | 検討し得る手法 | 検討し得るクロスチェック |
|---|---|---|
| 成熟した上場事業会社 | 予測とピアの証拠が支える場合の DCF および／またはマルチプル | 資産価値が関連する場合に NAV を検討し得る |
| 上場 J-REIT | 発行体が定義した NAV を用いる場合の NAV または P/NAV | 具名の鑑定・キャッシュフロー前提に照らした DCF または cap-rate income を検討し得る |
| 非公開化 MBO 対象 | 具名プロセスで実際に選択され、事実に裏付けられた手法を用いる | 取締役会またはアドバイザー資料が根拠を示す場合に限りマルチプル、DCF、NAV を検討し、普遍的な公正性アンカーを置かない |
| 上場銀行 / 保険会社 | 事業と会計に適合する場合の P/B、配当利回り、その他のセクター手法 | 定義と裏付けがある場合に限る adjusted NAV または embedded value |
| Pre-revenue / R&D 段階 | 状態、権利、キャッシュフローを特定できる場合の scenario DCF および／または real options | 比較可能性が支える場合に限る売上またはピア・マルチプル |
| プロジェクトファイナンス | 執行可能なキャッシュフロー入力が支える場合の契約レベル DCF | 評価目的に関連し、一貫して定義できる場合の担保 NAV |
| 持株会社 / コングロマリット | セグメントと資産を分離して裏付けられる場合の sum-of-parts NAV | 入力に比較可能性と裏付けがある場合のセグメント別マルチプルまたは DCF |
| distressed / 清算 | 清算前提が適用される場合の liquidation NAV | 代替案に証拠がある場合に限る going-concern DCF |
| 商社 | セグメント証拠に支えられる sum-of-parts、マルチプル、および／または DCF | 選択したセグメント手法を照合し、既定の序列を置かない |
| LBO / レバレッジ分析 | ファイナンス前提が支える場合の DCF、マルチプル、および／または LBO リターン分析 | 貸手または回収目的に関連する場合に限る担保・回収 NAV |

## 照合作業

日本の特定の M&A 手続（[[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]]、[[finance/japan-tender-offer-process|TOB]]）では、取締役会資料、アドバイザーの委任範囲、意見書、開示資料、適用される METI / FIEA の枠組みを読み、どの手法がなぜ用いられたかを特定する。複数手法が使われた場合は前提と結果を照合する。本ページは、普遍的に必須な手法の組合せや、単一手法の意見の普及度・十分性を主張しない。

## 関連項目

- [[finance/INDEX]]
- [[finance/cost-of-capital-japan-2026-reference]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-m-a-deal-process-comparison-matrix]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-private-equity-operating-model]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[insurance/economic-value-based-solvency]]
- [[corporate-strategy/spinoff-decision-tree-japan]]
- [[INDEX|FinWiki index]]

## 出典

- METI: 公正 M&A ガイドライン関連資料、バリュエーションとフェアネス・オピニオンの方法論。
- FSA: FIEA 開示および tender offer / squeeze-out フレームワーク。
- JPX: プライム市場・スタンダード市場の全上場会社を対象とする TSE の要請とフォローアップ開示。P/B はプログラム適用対象を決めない。
- Damodaran（NYU Stern）: DCF、マルチプル、資産ベース評価方法論に関する学術リファレンス。
- MLIT および対象発行体: 不動産鑑定の制度的枠組みと、案件固有の鑑定価値・NAV 開示。
- JCR: バリュエーションと回収分析に触れる信用格付方法論。
- BoJ: 割引率構築の基礎となるマクロおよび金利データ。
