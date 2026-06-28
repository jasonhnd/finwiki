---
source: real-estate-finance/japan-real-estate-appraisal-methodology
source_hash: a7148639c66ba54b
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の不動産鑑定評価手法"
translated_at: 2026-06-26T08:29:17.587Z
---

# 日本の不動産鑑定評価手法

## TL;DR

日本の不動産鑑定実務は、国土交通省が発出する不動産鑑定評価基準（Real Estate Appraisal Standards）に従う。同基準は価値への三つのアプローチ——収益還元法（DCF + 直接還元）、取引事例比較法（取引比較事例）、原価法（減価償却を控除した再調達原価）——を要求し、鑑定士はこれらを調整して最終的な価値の意見へと収斂させる。収益を生む商業用不動産（J-REIT および機関投資家の資産ユニバース）については、収益還元法が支配的であり、キャップレートの入力値が最も価格に関連する変数となる。日本不動産研究所（JREI / 日本不動産研究所）は、不動産種別および立地を横断するキャップレート入力の事実上のベンチマークである半期ごとのキャップレート調査を公表している。独立性ルールは、鑑定士が当該不動産の経済的本人から分離していることを要求し、JPX の開示ルールの下で、[[real-estate-finance/j-reit-market-overview|J-REITs]] がローリングベースで半期ごとに鑑定を更新することを要求される。J-REIT の公正価値会計の枠組みは、投資不動産を公正価値で計上することを要求し、これは鑑定サイクルを通じて運用される。鑑定の独立性 + 鑑定頻度の組み合わせは、J-REIT の NAV および帳簿価値を最新に保つ構造的メカニズムである。

## Wiki route

本エントリは [[real-estate-finance/INDEX|real-estate-finance index]] の下に位置し、日本の不動産ファイナンスのための評価手法ルーティングページである。支配的な公正価値の消費者として [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] と、鑑定サイクルの対象となる最大のポートフォリオとして [[real-estate-finance/top-10-j-reit-overview-matrix|top-10 J-REIT overview matrix]] と、並行する非上場ビークルの鑑定実務として [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] と、CMBS シニア LTV およびトランチング設定を駆動する鑑定入力として [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]] と、私募 SPV の鑑定ユースケースとして [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] と、テイクアウト・プライシングの鑑定メカニックとして [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] と、併せて読むこと。鑑定された利回りを消費する機関投資家側として [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] と、鑑定下にある不動産を保有する受託インフラとして [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and カストディ bank landscape]] と、運用上の分担として [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] と対をなす。クロスドメインのアンカー：[[policy-finance/japan-housing-finance-agency|JHF]] は鑑定をアンカーとするローン・トゥ・バリュー基準を用いる；[[policy-finance/INDEX|policy-finance index]] は並行する公共信用のリファレンスである；そして [[finance/INDEX|finance index]] はより広範な企業評価の文脈を保持する。

### 不動産鑑定評価基準国土交通省が発出する不動産鑑定評価基準（Real Estate Appraisal Standards）は、日本の不動産鑑定士が適用しなければならない手法を定める。同基準は以下を要求する：

| 要素 | 読み方 |
|---|---|
| 三つのアプローチ | 収益還元法、取引事例比較法、原価法——すべて検討されるべき |
| 調整（収斂）| 最終的な価値の意見は、不動産種別とデータの入手可能性を反映したウェイトで各アプローチを調整する |
| 収益還元法の詳細 | DCF 法 + 直接還元法、収益を生む不動産については両方が適用されるべき |
| キャップレートの出所 | 市場証拠から；市場調査（特に JREI）をベンチマークとして |
| 取引事例比較法 | 立地、築年数、規模、状態について調整された取引比較事例 |
| 原価法 | 減価償却を控除した再調達原価 |
| 鑑定士の資格 | 不動産の鑑定評価に関する法律に基づく有資格の不動産鑑定士 |

### 独立性ルール公正価値報告のための評価を行う鑑定士は、当該不動産の経済的本人から独立していなければならない：

| 独立性の次元 | 読み方 |
|---|---|
| 当該不動産における持分 / 債務ポジションなし | 鑑定士は金融的利害を保有できない |
| 所有者との雇用 / 役員関係なし | 鑑定士は J-REIT、資産運用会社、またはスポンサーに雇用されえない |
| 報酬体系 | 報酬は鑑定価値に連動しえない |
| 開示 | 鑑定士の身元は J-REIT の定期報告において開示される |

### 手法の概要

DCF（割引キャッシュフロー）法は、分析期間（典型的には 10 年）にわたって不動産のキャッシュフローを予測し、それらを現在価値へと割り戻す：

```
Value = Σ [NOI_t / (1 + r)^t] + [Terminal value / (1 + r)^n]
```

| 入力 | 読み方 |
|---|---|
| NOI 予測 | 各年の純営業収益。賃料ロール、予想されるリース更改、空室率の前提、営業費用、固定資産税、保険、修繕、維持管理を反映 |
| 割引率 | r——リスクフリーレート + 不動産固有のリスクプレミアムを反映 |
| ターミナルバリュー | 分析期間の末尾において、ターミナル年の NOI / ターミナルキャップレートとして計算 |
| ターミナルキャップレート | 出口市場のキャップレートを反映；資産の経年化を反映して、典型的にはエントリーキャップレートよりわずかに高い |
| 保有コストの調整 | 分析期間にわたる資本的支出（典型的には別個の項目として保持）|

### 主要な感応度

| 感応度 | 読み方 |
|---|---|
| 賃料の前提 | フォワード賃料のプロファイルが NOI 予測を駆動する；リース更改の前提が決定的 |
| 空室率の前提 | 分析期間にわたる空室率が NOI に累積的に影響する |
| 資本的支出の前提 | 期間にわたる資本的支出が累積 NOI を減少させる |

### J-REIT 実務における DCF

J-REIT の鑑定には、10年の期間（典型的）を伴う明示的な DCF 分析が含まれる。DCF の結果は直接還元の結果と調整される；両者が実質的に乖離する場合、鑑定士は鑑定評価書において調整を説明する。

### 手法の概要直接還元法は、安定化した NOI をキャップレートで除することによって不動産を評価する：

```
Value = Stabilized NOI / Cap rate
```

| 入力 | 読み方 |
|---|---|
| 安定化 NOI | 通常の営業条件下で期待される年間 NOI（過渡的 / リースアップ状態ではない）|
| キャップレート | 当該不動産種別および立地の市場キャップレート |

### キャップレートの出所——JREI キャップレート調査

JREI（日本不動産研究所）のキャップレート調査は、日本におけるキャップレート入力の事実上のベンチマークである。公開情報の構造：

| 特徴 | 読み方 |
|---|---|
| 公表者 | [[JapanFG/japan-real-estate-institute|Japan Real Estate Institute (JREI)]] |
| 頻度 | 半期（4 月 + 10 月）|
| カバレッジ | オフィス、住宅、リテール、ホテル、物流——主要都市を横断 |
| 手法 | 不動産種別および立地別の期待キャップレートについての機関投資家および資産運用会社への調査 |
| 公開サーフェス | 見出しの要約；完全なデータは有料プロダクト |

JREI 調査は、J-REIT 鑑定士および CMBS 鑑定士が直接還元の入力を較正する際に参照するベンチマークキャップレートを生み出す。JREI 第 50回不動産投資家調査（2024年 4 月）によれば、丸の内 / 大手町のグレード A オフィスの期待キャップレートは 3.2%（三回連続の調査でフラット）であり、東京（多摩）のマルチテナント内陸物流のキャップレートは 4.1% であった——東京グレード A オフィスのキャップレートが約 3.0-3.5% のバンドに、東京物流が約 3.5-4.5% のバンドにあるのと整合的であり、他の不動産種別および立地はさまざまなプレミアムにある。キャップレートは日本の金利環境に沿ってサイクルを通じて推移してきた。

### キャップレート vs 日本の金利環境日本のキャップレートサイクルは、長期にわたる低 / マイナスの円金利環境によって構造的に圧縮されてきた。公開情報の観察：

| 期間 | キャップレートサイクルの読み方 |
|---|---|
| 2008-2010 | GFC 後にキャップレートが拡大；市場のストレス |
| 2011-2013 | 安定化 |
| 2014-2021 | BoJ の NIRP + YCC + 資産購入環境の下での圧縮 |
| 2022-2023 | 円金利パスの不確実性；キャップレートは概ね安定からわずかにタイト |

## 4. 取引事例比較法取引事例比較法は、比較可能な取引を参照することによって不動産を評価する：

| ステップ | 読み方 |
|---|---|
| 比較事例の特定 | 類似の不動産種別、立地、築年数、規模の直近の取引 |
| 差異の調整 | 立地の質、建物の築年数、延床面積、直近の資本的支出、リース構造 |
| 坪単価 / ㎡ 単価の調整 | 調整された単価を対象不動産に適用 |
| 収益還元法に対するクロスチェック | 取引事例比較法の結果は通常、収益還元法の結果をクロスチェックする |

## 5. 原価法原価法は、土地価格 + 改良物の減価償却済み再調達原価として不動産を評価する：

| ステップ | 読み方 |
|---|---|
| 土地価格 | 公的な土地評価（基準地価、路線価、公示地価）および調整された比較事例に基づく |
| 再調達原価 | 今日同等の構造物を建てるためのコスト |
| 減価償却 | 物理的、機能的、経済的陳腐化 |
| 建物価格 | 減価償却を控除した再調達原価 |
| 合計 | 土地価格 + 減価償却済み建物価格 |

原価法は、収益還元法の入力が容易には入手できない自己使用または特殊用途の不動産に最も有用である。機関投資家向けの商業用不動産については、典型的には第三次のクロスチェックである。

### 公的な土地価格ベンチマーク

| ベンチマーク | 発出者 | 用途 |
|---|---|---|
| 公示地価 | 国土交通省 | 年次の標準的な土地価格ベンチマーク；3 月に公表 |
| 基準地価 | 都道府県 | 年次の都道府県土地価格ベンチマーク；9 月に公表 |
| 路線価 | 国税庁 | 相続 / 贈与税のための年次の道路沿い土地評価；典型的には公示地価の 80% |
| 固定資産税評価額 | 地方公共団体 | 三年ごとの固定資産税評価；典型的には公示地価の 70% |

これらの公的な土地価格ベンチマークは、土地価格についての原価法への入力であり、鑑定士の市場判断とは独立している。

## 6. 調整と最終的な価値の意見鑑定士は、三つのアプローチからの結果を調整する：

| アプローチ | 収益を生む商業用不動産についての典型的なウェイト |
|---|---|
| 収益還元法（DCF + 直接還元）| 支配的 |
| 取引事例比較法 | クロスチェック |
| 原価法 | 第三次のクロスチェック |

最終的な価値の意見は、有資格の不動産鑑定士が署名した鑑定評価書（鑑定評価書）に文書化される。当該書面は J-REIT の定期報告において開示され、会計目的のための公正価値の出所として用いられる。

### J-REIT の鑑定頻度

J-REIT の投資不動産は公正価値で計上することが要求される。運用化：

| 側面 | 読み方 |
|---|---|
| 方法 | 各不動産は取得時に完全な鑑定を受ける；その後の鑑定は半期ごとの頻度で |
| 開示 | 不動産レベルの鑑定価値は定期報告書類（運用報告書）において開示される |
| 集計 | ポートフォリオレベルの鑑定 NAV が計算され開示される |
| 監査人 | 独立した監査人が鑑定プロセスおよび公正価値報告をレビューする |

### NAV vs 市場価格半期ごとの鑑定 NAV は、J-REIT にとっての二つの価値参照点のうちの一つである：

| 価値 | 読み方 |
|---|---|
| 鑑定 NAV | ポートフォリオ不動産の鑑定価値に基づく一口当たり NAV |
| 市場価格 | JPX における一口当たり市場価格 |
| P/NAV 比率 | 市場価格 / 鑑定 NAV——典型的には相対価値指標として用いられる |

J-REIT の P/NAV はサイクルを通じて 1.0 の前後で振動する。持続的な P/NAV < 1.0 は、市場が鑑定が含意するキャップレートが過度にタイトであると考えていることを示唆する；持続的な P/NAV > 1.0 は、市場がそれらが過度にワイドであると考えていることを示唆する。外国投資家のフロー（[[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign investor ownership]] を参照）はしばしば短期の P/NAV の変動を駆動する；国内の生命保険会社のフロー（[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] を参照）は長期の水準をアンカーする。

### 鑑定に対するスポンサー / 資産運用会社のガバナンス

J-REIT の枠組みはガバナンスの分離を要求する：

| 機能 | エンティティ |
|---|---|
| 投資の受託者 | J-REIT（投資法人）——投資主を代表する取締役会 |
| 資産運用会社 | 独立した資産運用会社（しばしばスポンサー系列）|
| 鑑定士 | 独立した有資格の不動産鑑定士 / 会社 |
| 監査人 | 独立した監査人 |
| 信託銀行カストディアン | 信託で不動産を保有——典型的には [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、または [[trust-banks/mizuho-trust-bank|Mizuho Trust]] |

鑑定士は資産運用会社によって起用されるが、資産運用会社、スポンサー、および当該不動産の経済的本人から独立していることが要求される。鑑定士の名称およびアプローチの開示は必須である。

## 8. 非 J-REIT 文脈における鑑定

| 文脈 | 鑑定の用途 |
|---|---|
| [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|Private REIT]] | 口数 NAV 設定のための半期鑑定、J-REIT と同様 |
| [[real-estate-finance/japan-cmbs-rmbs-securitization|CMBS]] | オリジネーション時の鑑定がシニアトランチの LTV を設定する；CMBS のディール条件に応じて定期的な再鑑定が行われる場合がある |
| [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] | SPV セットアップ時の取得鑑定；定期鑑定はディールによって異なる |
| [[real-estate-finance/real-estate-bridge-fund-japan|Bridge fund]] | ブリッジ SPV セットアップ時の取得鑑定；J-REIT への売却時のテイクアウト鑑定が典型的にテイクアウト・プライシングをアンカーする |
| 年金 / SWF の直接保有 | 投資家の会計の枠組みに応じた公正価値報告のための定期鑑定 |
| 企業の貸借対照表 | 多くの企業について JGAAP の下で減価償却を控除した取得原価で保有；IFRS 採用企業は公正価値または再評価モデルを用いる |

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
