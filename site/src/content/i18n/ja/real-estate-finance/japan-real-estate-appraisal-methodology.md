---
source: real-estate-finance/japan-real-estate-appraisal-methodology
source_hash: 4ea2c57bca9bbe90
lang: ja
status: machine
fidelity: ok
title: "日本の不動産鑑定評価手法"
translated_at: 2026-06-03T00:53:08.341Z
---
# 日本の不動産鑑定評価手法

## 要約

日本の不動産鑑定評価実務は、MLIT が定める不動産鑑定評価基準 (Real Estate Appraisal Standards) に従う。同基準は、収益方式 (DCF + 直接還元法)、比較方式 (取引事例比較)、原価方式 (再調達原価から減価を控除) という三方式による評価を求め、鑑定士がそれらを突合して最終的な価値意見にまとめる。収益不動産、すなわち J-REIT と機関投資家の資産ユニバースでは、収益方式が支配的であり、キャップレート入力が価格に最も関係する変数である。日本不動産研究所 (JREI / 日本不動産研究所) は、物件タイプと立地を横断するキャップレート入力の事実上のベンチマークである半期のキャップレート調査を公表している。独立性ルールは、鑑定士が物件の経済的本人から独立していることを求め、[[real-estate-finance/j-reit-market-overview|J-REITs]] は JPX 開示ルールの下で半期ごとのローリングベースで鑑定評価を更新する必要がある。J-REIT の公正価値会計フレームワークは、投資不動産を公正価値で計上することを求め、これは鑑定評価サイクルを通じて運用される。鑑定評価の独立性と鑑定頻度の組み合わせが、J-REIT の NAV と簿価を最新に保つ構造的メカニズムである。

## ウィキ上の位置づけ

この項目は [[real-estate-finance/INDEX|real-estate-finance index]] の下にあり、日本の不動産金融における評価手法のルーティングページである。公正価値の主要な利用者は [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、鑑定評価サイクルの対象となる最大ポートフォリオは [[real-estate-finance/top-10-j-reit-overview-matrix|top-10 J-REIT overview matrix]]、並行する非上場ビークルの鑑定実務は [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、CMBS シニア LTV とトランチングを左右する鑑定入力は [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]]、私募 SPV の鑑定利用例は [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]、テイクアウト価格の鑑定メカニクスは [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] とあわせて読む。鑑定利回りを消費する機関投資家側は [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]]、鑑定対象不動産を保有する受託インフラは [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]、運用上の分担は [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] と組み合わせる。クロスドメインの基点として、[[policy-finance/japan-housing-finance-agency|JHF]] は鑑定評価に基づく LTV 基準を使い、[[policy-finance/INDEX|policy-finance index]] は並行する公的信用の参照点であり、[[finance/INDEX|finance index]] はより広い企業価値評価文脈を持つ。

### 不動産鑑定評価基準

MLIT が定める不動産鑑定評価基準 (Real Estate Appraisal Standards) は、日本の不動産鑑定士が適用すべき手法を定義している。同基準は以下を求める。

| 要素 | 読み方 |
|---|---|
| 三方式 | 収益方式、比較方式、原価方式。すべてを考慮する |
| 突合 | 物件タイプとデータ利用可能性を反映した重みで各方式を突合し、最終的な価値意見を形成する |
| 収益方式の詳細 | 収益不動産には DCF 法 + 直接還元法の双方を適用する |
| キャップレートの出所 | 市場証拠に基づく。市場調査、特に JREI をベンチマークとして使う |
| 比較方式 | 取引事例を立地、築年、規模、状態に応じて補正する |
| 原価方式 | 再調達原価から減価を控除する |
| 鑑定士資格 | 不動産の鑑定評価に関する法律に基づく不動産鑑定士 |

### 独立性ルール

公正価値報告のために評価を行う鑑定士は、物件の経済的本人から独立していなければならない。

| 独立性の次元 | 読み方 |
|---|---|
| 物件に対するエクイティ / デットポジションなし | 鑑定士は金融上の利害を保有できない |
| 所有者との雇用 / 役員関係なし | 鑑定士は J-REIT、資産運用会社、スポンサーに雇用されていてはならない |
| 報酬構造 | 報酬は鑑定評価額に連動してはならない |
| 開示 | 鑑定士の名称は J-REIT の定期報告で開示される |

### 手法概要

DCF (割引キャッシュフロー) 法は、分析期間 (通常 10 年) にわたる物件キャッシュフローを予測し、現在価値へ割り引く。

```
Value = Σ [NOI_t / (1 + r)^t] + [Terminal value / (1 + r)^n]
```

| 入力 | 読み方 |
|---|---|
| NOI 予測 | 各年の純営業収益。賃貸ロール、想定契約更改、市場空室率、運営費、固定資産税、保険、修繕、維持管理を反映する |
| 割引率 | r。リスクフリーレート + 物件固有リスクプレミアムを反映する |
| 終価 | 分析期間末に、最終年 NOI / ターミナルキャップレートとして算定される |
| ターミナルキャップレート | 売却市場のキャップレートを反映する。通常は資産の経年を反映してエントリー時キャップレートよりやや高い |
| 保有コスト調整 | 分析期間中の capex (通常は別行として保持) |

### 主要感応度

| 感応度 | 読み方 |
|---|---|
| 賃料想定 | 将来賃料プロファイルが NOI 予測を左右する。契約更改想定が重要 |
| 空室想定 | 分析期間中の空室率は NOI に累積的に影響する |
| Capex 想定 | 分析期間中の capex は累積 NOI を減少させる |

### J-REIT 実務における DCF

J-REIT の鑑定評価には、10年の期間 (典型) による明示的な DCF 分析が含まれる。DCF 結果は直接還元結果と突合される。両者が大きく乖離する場合、鑑定士は鑑定評価書で突合を説明する。

### 手法概要

直接還元法は、安定化 NOI をキャップレートで割ることにより物件を評価する。

```
Value = Stabilized NOI / Cap rate
```

| 入力 | 読み方 |
|---|---|
| 安定化 NOI | 通常の稼働状態で期待される年間 NOI (移行期 / リースアップ状態ではない) |
| キャップレート | 当該物件タイプと立地の市場キャップレート |

### キャップレートの出所 — JREI キャップレート調査

JREI (日本不動産研究所) のキャップレート調査は、日本におけるキャップレート入力の事実上のベンチマークである。公開情報上の構造は以下の通り。

| 特徴 | 読み方 |
|---|---|
| 発行者 | [[JapanFG/japan-real-estate-institute|Japan Real Estate Institute (JREI)]] |
| 頻度 | 半期 (4月 + 10月) |
| 対象 | オフィス、住宅、商業、ホテル、物流。主要都市を横断 |
| 手法 | 物件タイプと立地別の期待キャップレートについて、機関投資家と資産運用会社に調査 |
| 公開面 | 要約は公開。全データは有料商品 |

JREI 調査は、J-REIT 鑑定士と CMBS 鑑定士が直接還元入力を調整する際に参照するベンチマーク・キャップレートを生み出す。JREI 第50回 不動産投資家調査 (April 2024) によれば、丸の内 / 大手町のグレード A オフィス期待キャップレートは 3.2% (三回連続で横ばい)、東京 (多摩) のマルチテナント型内陸物流キャップレートは 4.1% だった。これは、東京グレード A オフィスのキャップレートが ~3.0-3.5% の帯、東京物流が ~3.5-4.5% の帯にあることと整合し、他の物件タイプ・立地ではさまざまなプレミアムが付く。キャップレートは日本の金利環境に沿ってサイクルを動いてきた。

### キャップレートと日本の金利環境

日本のキャップレート・サイクルは、長期にわたる低金利 / マイナス金利の円金利環境によって構造的に圧縮されてきた。公開情報に基づく観察は以下の通り。

| 期間 | キャップレート・サイクルの読み方 |
|---|---|
| 2008-2010 | GFC 後にキャップレートが拡大。市場ストレス |
| 2011-2013 | 安定化 |
| 2014-2021 | BoJ NIRP + YCC + 資産買入環境の下で圧縮 |
| 2022-2023 | 円金利経路の不確実性。キャップレートはおおむね安定からややタイト |

## 4. 比較方式

比較方式は、比較可能な取引を参照して物件を評価する。

| ステップ | 読み方 |
|---|---|
| 比較事例の特定 | 類似する物件タイプ、立地、築年、規模の直近取引 |
| 差異の補正 | 立地の質、築年、延床面積、直近 capex、賃貸借構造 |
| 坪単価 / ㎡単価の突合 | 補正後の単価を対象物件に適用 |
| 収益方式とのクロスチェック | 比較方式の結果は通常、収益方式の結果をクロスチェックする |

## 5. 原価方式

原価方式は、土地価値 + 建物等の減価控除後再調達原価として物件を評価する。

| ステップ | 読み方 |
|---|---|
| 土地価値 | 公的土地評価 (基準地価, 路線価, 公示地価) と補正後比較事例に基づく |
| 再調達原価 | 今日、同等の構造物を建築する費用 |
| 減価 | 物理的、機能的、経済的陳腐化 |
| 建物価値 | 再調達原価から減価を控除 |
| 合計 | 土地価値 + 減価控除後建物価値 |

原価方式は、収益方式の入力が容易に得られない自社利用物件または特殊用途物件で最も有用である。機関投資家向け商業不動産では、通常は三次的なクロスチェックである。

### 公的土地価格ベンチマーク

| ベンチマーク | 発行者 | 用途 |
|---|---|---|
| 公示地価 | MLIT | 年次の標準地価ベンチマーク。3月公表 |
| 基準地価 | 都道府県 | 年次の都道府県地価ベンチマーク。9月公表 |
| 路線価 | 国税庁 | 相続 / 贈与税のための年次路線価。通常は公示地価の 80% |
| 固定資産税評価額 | 地方公共団体 | 3年ごとの固定資産税評価。通常は公示地価の 70% |

これらの公的土地価格ベンチマークは、原価方式における土地価値の入力であり、鑑定士の市場判断から独立している。

## 6. 突合と最終価値意見

鑑定士は三方式の結果を突合する。

| 方式 | 収益不動産における典型的な重み |
|---|---|
| 収益方式 (DCF + 直接還元) | 支配的 |
| 比較方式 | クロスチェック |
| 原価方式 | 三次的クロスチェック |

最終的な価値意見は、免許を持つ不動産鑑定士が署名する鑑定評価書に記録される。鑑定評価書は J-REIT の定期報告で開示され、会計上の公正価値の出所として使われる。

### J-REIT の鑑定評価頻度

J-REIT の投資不動産は公正価値で計上する必要がある。運用上は以下の通り。

| 側面 | 読み方 |
|---|---|
| 方法 | 各物件は取得時に完全鑑定を受け、その後は半期ごとの頻度で鑑定される |
| 開示 | 物件別鑑定評価額は定期報告書類 (運用報告書) で開示される |
| 集計 | ポートフォリオレベルの鑑定 NAV が計算・開示される |
| 監査人 | 独立監査人が鑑定プロセスと公正価値報告をレビューする |

### NAV と市場価格

半期の鑑定 NAV は、J-REIT にとって二つの価値参照点の一つである。

| 価値 | 読み方 |
|---|---|
| 鑑定 NAV | ポートフォリオ物件の鑑定評価額に基づく一口あたり NAV |
| 市場価格 | JPX における一口あたり市場価格 |
| P/NAV 比率 | 市場価格 / 鑑定 NAV。通常、相対価値指標として使われる |

J-REIT P/NAV はサイクルを通じて 1.0 付近で変動する。P/NAV < 1.0 が継続する場合、市場は鑑定評価が示すキャップレートがタイトすぎると考えていることを示唆する。P/NAV > 1.0 が継続する場合、市場はそれらがワイドすぎると考えていることを示唆する。海外投資家フロー ([[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign investor ownership]] 参照) は短期の P/NAV 変動を動かすことが多く、国内生命保険会社フロー ([[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] 参照) は長期水準を支える。

### 鑑定評価をめぐるスポンサー / 資産運用会社ガバナンス

J-REIT フレームワークはガバナンス分離を求める。

| 機能 | 主体 |
|---|---|
| 投資受託者 | J-REIT (投資法人)。投資主を代表する役員会 |
| 資産運用会社 | 独立した資産運用会社 (多くはスポンサー関連) |
| 鑑定士 | 独立した不動産鑑定士 / 鑑定会社 |
| 監査人 | 独立監査人 |
| 信託銀行カストディアン | 信託で物件を保有。通常は [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[JapanFG/sumitomo-mitsui-trust|SMTB]]、または [[JapanFG/mizuho-trust-bank|Mizuho Trust]] |

鑑定士は資産運用会社から起用されるが、資産運用会社、スポンサー、物件の経済的本人から独立していることが求められる。鑑定士名と採用手法の開示は必須である。

## 8. J-REIT 以外の文脈における鑑定評価

| 文脈 | 鑑定評価の用途 |
|---|---|
| [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|Private REIT]] | J-REIT と同様、一口 NAV 設定のための半期鑑定 |
| [[real-estate-finance/japan-cmbs-rmbs-securitization|CMBS]] | 組成時鑑定がシニアトランシェ LTV を設定。CMBS 案件条件により定期的な再鑑定が行われる場合がある |
| [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] | SPV 設定時の取得鑑定。定期鑑定は案件により異なる |
| [[real-estate-finance/real-estate-bridge-fund-japan|Bridge fund]] | ブリッジ SPV 設定時の取得鑑定。J-REIT への売却時のテイクアウト鑑定が通常テイクアウト価格の基準となる |
| 年金 / SWF の直接保有 | 投資家の会計フレームワークに基づく公正価値報告のための定期鑑定 |
| 企業バランスシート | 多くの企業では JGAAP の下で不動産を取得原価から減価償却控除で保有。IFRS 採用企業は公正価値または再評価モデルを使う |

## 関連項目

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
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/japan-real-estate-institute]]

## 出典

- ARES (Association for Real Estate Securitization): Japan real-estate securitization market summary statistics.
- JREI (Japan Real Estate Institute): cap-rate survey and appraisal-methodology surface. 第50回 不動産投資家調査 (2024-04) — https://www.reinet.or.jp/pdf/REIS/publication_data50th.pdf — Marunouchi/Otemachi grade-A office 3.2%, Tokyo (Tama) multi-tenant inland logistics 4.1%.
- MLIT: 不動産鑑定評価基準 (Real Estate Appraisal Standards); 公示地価 land-price benchmark.
- JPX: J-REIT periodic-reporting and disclosure framework.
- FSA: investment-product regulation and J-REIT disclosure framework.
