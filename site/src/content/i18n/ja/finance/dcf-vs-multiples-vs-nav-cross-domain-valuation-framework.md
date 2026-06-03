---
source: finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework
source_hash: c195dc786b0d0e5d
lang: ja
status: machine
fidelity: ok
title: "DCF・マルチプル・NAV のクロスドメイン評価フレームワーク"
translated_at: 2026-06-02T13:21:55.051Z
---
# DCF・マルチプル・NAV のクロスドメイン評価フレームワーク

## 要約

金融分析では、ドメインをまたいで主に 3 つの評価アプローチが使われる。ディスカウント・キャッシュフロー（DCF）、取引 / 類似会社マルチプル、純資産価値（NAV）である。それぞれ、価値の源泉を将来フリーキャッシュフロー、市場が示唆する比較可能な価格、または負債控除後の資産価値合計とみなす構造的前提を持ち、適合する場面も異なる。DCF はコーポレート / プロジェクトファイナンスと M&A バリュエーションで中心となり、マルチプルは上場株スクリーニング、セクター・ベンチマーク、「公正性」のクロスチェックで中心となり、NAV は J-REIT、資産保有型持株会社、fund-of-fund の価格付け、清算分析で中心となる。本ページはクロスドメインの方法論ルーティング面であり、予測または投資助言ではない。[[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、[[finance/japan-acquisition-finance|Japan acquisition finance]]、[[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]]、[[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] と併せて読む。

## ウィキ上の位置づけ

本ページは [[finance/INDEX|finance domain]] の配下にあるクロスドメイン評価リファレンスである。WACC / 割引率の入力レイヤーは [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]]、オプショナリティのオーバーレイは [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]]、収益不動産の変形は [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]]、公正価格の少数株主分析は [[finance/japan-mbo-and-squeeze-out-process|Japan MBO and squeeze-out process]]、TOB プレミアムの読み方は [[finance/japan-tender-offer-process|Japan tender offer process]]、案件類型のオーバーレイは [[finance/japan-m-a-deal-process-comparison-matrix|Japan M&A deal process comparison matrix]] と併用する。セクター別の参照マトリックスは [[finance/japan-listed-financial-groups-investable-universe|Japan listed FG investable universe]]、[[real-estate-finance/top-10-j-reit-overview-matrix|top-10 J-REIT matrix]]、[[insurance/japan-life-insurance-big-four|Japan life insurance big four]] へルーティングする。

## 3 つのアプローチの概観

| アプローチ | 評価対象 | 中核入力 | 最適な適用場面 |
|---|---|---|---|
| DCF（インカム・アプローチ） | 将来フリーキャッシュフローの現在価値 | 予測 FCF、WACC、terminal value、成長率 | 継続企業としての事業会社、プロジェクトファイナンス、M&A の本源的価値 |
| マルチプル（マーケット・アプローチ） | 類似対象の市場取引マルチプルから示唆される価格 | ピアセット、マルチプル（EV/EBITDA、P/E、P/B）、正規化 | 上場株スクリーニング、セクター・ベンチマーク、M&A の sanity-check |
| NAV（アセット・アプローチ） | 負債控除後の資産価値合計 | 資産鑑定、負債時価、偶発項目 | REIT / 資産保有型 / 持株会社 / fund-of-fund / 清算 |

日本の不動産鑑定評価基準（[[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]]）も、不動産評価について同じ 3 方式（収益 / 取引事例比較 / 原価）の構造を制度化している。クロスドメインの並行関係は直接的である。

### メカニクス

| ステップ | 詳細 |
|---|---|
| 予測期間 | 事業の成熟度と視認性に応じ、通常は 5-10 年の明示的 FCF |
| フリーキャッシュフロー | FCFF（firm）または FCFE（equity）。どちらかを明示する |
| 割引率 | FCFF には WACC、FCFE には株主資本コスト。[[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] 参照 |
| Terminal value | Gordon growth（g < risk-free）、exit multiple、または H-model |
| 株式価値へのブリッジ | EV から net debt、minority、preferred を控除し、non-operating assets を加算 |

### DCF が適合する場面

- 予測可能なキャッシュフローを持つ継続企業としての事業会社
- M&A の本源的価値アンカーと入札根拠分析
- 有限期間のキャッシュフローと明確な契約構造を持つプロジェクトファイナンス
- マルチプル評価のクロスチェック
- 支配権プレミアムとシナジー帰属の交渉

### DCF の典型的な落とし穴

- Terminal value が株式価値の 60-80% を占め、割引率と成長率の入力が評価全体になってしまう
- 事業の実際の視認可能期間を超えた予測外挿
- キャッシュフローと割引率の定義不一致（FCFF を株主資本コストで割り引く、FCFE を WACC で割り引く）
- 政策保有株、支配株主、ガバナンス・ディスカウントなど日本固有の構造項目を無視した WACC 前提
- 感応度表を算術でしかないにもかかわらずリスク分析として扱う
- 成長の隠れた二重計上（高い terminal growth と高い明示期間成長）

### 日本固有の DCF 調整

| 項目 | 調整 |
|---|---|
| 政策保有株 | 事業 FCF とは区別し、非事業資産として公正価値評価する。[[finance/japan-cross-shareholding-unwinding-economics|Japan cross-shareholding unwinding economics]] 参照 |
| 実効法人税率 | 法定税率は ~30% だが実効税率は変動する。繰延税金ポジションと照合する |
| 余剰現金 | 日本企業は構造的に余剰現金を持ちやすい。事業用現金と非事業用現金を識別する |
| 年金負債 | 積立不足の退職給付債務は EV から株式価値へのブリッジで debt-like に扱う |
| 少数株主持分 | 上場子会社を持つ親会社評価では、明示的な minority deduction が必要 |
| 支配株主ディスカウント | 持株会社構造ではディスカウントが妥当となり得る。[[finance/japan-listed-financial-groups-investable-universe|listed FG investable universe]] 参照 |

### 資産類型別の代表的マルチプル

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
- フェアネス・オピニオンのクロスリファレンス（多くの [[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]] 文脈で必須）

### マルチプルの典型的な落とし穴

- 実際には比較可能でない「類似」企業（成長率、レバレッジ、地域、サイクル位置が異なる）
- 実績マルチプルと予想マルチプルの混同
- 分子 / 分母の不一致（EV マルチプルに net-of-debt の利益を使う）
- 利益分母に含まれる一過性項目（減損、売却益、リストラ）
- survivor bias のあるピアセット
- サイクルのピーク / ボトムのマルチプルを steady state として扱う
- 資産保有型事業で簿価資産価値と市場資産価値を区別せずに P/B を使う

### 日本固有のマルチプル調整

| 項目 | 調整 |
|---|---|
| 政策保有株益 | よりクリーンな比較のため、ピア EBIT / 純利益から控除する |
| コングロマリット・ディスカウント | 日本の上場持株会社（例: 商社、上場 FG）は sum-of-parts に対して構造的ディスカウントで取引される |
| 親子上場構造 | 特有の minority と連結調整が必要。[[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]] へルーティング |
| ガバナンス・コード時代の P/B | TSE の「below-1.0x P/B」エンゲージメント目標は、P/B を単なる評価指標ではなくガバナンス指標に再定義した。[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding]] 参照 |
| 商社の特殊項目 | 資源益、持分法利益はピア比較から除外する |

### メカニクス

NAV = Σ(asset values) − Σ(liability values) ± contingent / off-balance items.

J-REIT と不動産ファンドでは、「asset value」は通常 [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI appraisal methodology]] に基づく投資不動産の鑑定評価額を指す。持株会社では、上場持分の市場価値、非上場持分の鑑定価値、事業の簿価または鑑定価値を合算することがある。

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
- 銀行と保険会社（AOCI と economic-value 項目を調整した簿価自己資本が構造的指標。[[insurance/economic-value-based-solvency|economic value based solvency]] 参照）
- 清算分析と倒産再建
- DCF が情報を与えにくい negative-going-concern の状況

### NAV の典型的な落とし穴

- 鑑定 NAV のラグ。鑑定は 2-4 四半期サイクルで更新される一方、市場の再価格付けは即時に起きる
- セグメント間の二重計上
- 偶発負債（訴訟、年金積立不足、環境）の時価反映漏れ
- goodwill を「asset value」と扱うこと。実態は取得価格の償却である
- 支配ブロックの非流動性ディスカウントを無視した上場持分評価
- static asset value を超える option value を持つ継続企業に NAV を使うこと（[[finance/real-options-valuation-japan-applications|real options valuation]] 参照）

### 日本固有の NAV 調整

| 項目 | 調整 |
|---|---|
| J-REIT price-to-NAV | 上場取引価格対鑑定 NAV は大きく振れ得る。鑑定ラグは構造的理由である。[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR framework]] 参照 |
| 持株会社コングロマリット・ディスカウント | 上場持株会社は sum-of-parts NAV に対して構造的ディスカウント（通常 20-40%）で取引される |
| 政策保有株の時価評価 | 上場価格で評価する。大口ブロックには非流動性ディスカウントがあり得る |
| 含み益持分に対する繰延税金負債 | gross NAV と net-of-tax NAV を照合する |
| 保険 economic value | [[insurance/economic-value-based-solvency|ICS / ESR]] regime は embedded value と risk margin を中核 NAV 入力として扱う |

## 3 方式の選択

| 状況 | 主方式 | クロスチェック |
|---|---|---|
| 成熟した上場事業会社 | DCF + マルチプル | フロアとしての NAV |
| 上場 J-REIT | NAV（P/NAV） | DCF（cap-rate income） |
| 非公開化 MBO 対象 | DCF | マルチプル。公正性アンカーとしての NAV |
| 上場銀行 / 保険会社 | P/B と配当利回り | Adjusted NAV / embedded value |
| Pre-revenue / R&D 段階 | Real options + scenario DCF | マルチプル（売上、peer comp） |
| プロジェクトファイナンス | DCF（asset / contract level） | NAV（担保） |
| 持株会社 / コングロマリット | Sum-of-parts NAV | セグメント別マルチプル |
| distressed / 清算 | NAV（liquidation） | DCF（going-concern alternative） |
| 商社 | Sum-of-parts + マルチプル | セグメント別 DCF |
| LBO / レバレッジ分析 | DCF + マルチプル（LBO model） | NAV（担保 / 回収） |

## 照合作業

日本の M&A とフェアネス・オピニオン実務（[[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]]、[[finance/japan-tender-offer-process|TOB]]）では、標準的な照合方法は、各手法（DCF、市場マルチプル、取引マルチプル、市場価格、ときに NAV）から評価レンジを作成し、公正レンジへ調整することである。METI 公正 M&A ガイドラインは、この複数手法の規律を期待している。利益相反が大きい案件で、単一手法による評価がフェアネス・オピニオン水準と扱われることはまれである。

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
- JPX: 「below-1.0x P/B」エンゲージメントプログラムに関する TSE のフォローアップアクション。
- Damodaran（NYU Stern）: DCF、マルチプル、資産ベース評価方法論に関する学術リファレンス。
- ARES and JREI: 不動産鑑定および NAV 方法論のベンチマーク。
- JCR: バリュエーションと回収分析に触れる信用格付方法論。
- BoJ: 割引率構築の基礎となるマクロおよび金利データ。
