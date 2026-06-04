---
source: insurance/global-solvency-framework-comparison-matrix
source_hash: 95247b04ea1026e2
lang: ja
status: machine
fidelity: ok
title: "グローバル・ソルベンシー枠組み比較マトリクス"
translated_at: 2026-06-02T14:01:20.897Z
---
# グローバル・ソルベンシー枠組み比較マトリクス

## ウィキ上の位置づけ

この項目は [[insurance/INDEX|insurance index]] の下に位置し、保険会社の資本規制枠組みを法域横断で比較するページである。日本固有の経済価値ベース詳細は [[insurance/economic-value-based-solvency]] と [[insurance/esr-economic-value-solvency]]、日本の免許 / 規制境界は [[financial-licenses/insurance-license-and-solvency]]、日本企業レベルへの影響は [[insurance/japan-life-insurance-big-four]] と [[insurance/japan-nonlife-big-three]] と対比して読む。カタストロフィリスク・モジュールは [[insurance/natcat-reinsurance-japan]] へ戻る。日本側の翻訳で最も扱いやすい上場株式エンティティのアンカーは [[life-insurers/dai-ichi-life]] と [[non-life-insurers/tokio-marine]] である。

## 要約

保険会社の規制資本には、現在四つの主要制度が併存している。日本の金融庁 ESR（2025-04から導入）、IAIS Insurance Capital Standard（ICS Version 2.0、2024 12月に最終化され、2025から Internationally Active Insurance Groups に義務化）、EU の Solvency II（2016 から運用され、2025 レビュー・パッケージはしばしば Solvency II 2.0と呼ばれる）、米国 NAIC Risk-Based Capital 制度（life-RBC、P&C-RBC、health-RBC）である。ESR、ICS、Solvency II は市場整合的な経済価値の思想を共有する。一方、米国 RBC は法定会計 / ファクター方式にとどまる。四制度は、評価、資本階層、割引率手法、リスクモジュール構造、開示の点で異なる。

日本の保険会社分析における実務上の読み方は次のとおりである。ESR は国内規制資本を動かし、ICS は IAIG レベルのグループ報告を動かし、Solvency II は欧州子会社と欧州競合の見え方を形作り、米国 RBC は日本グループの米国生命 / P&C / 健康保険子会社に使われる指標を動かす。

## 枠組みマトリクス

### 制度の識別と適用時期

| 観点 | 日本 FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 規制当局 | 金融庁（FSA） | 保険監督者国際機構（IAIS） | 欧州保険・企業年金監督機構（EIOPA）および各国監督当局 | 全米保険監督官協会（NAIC）および州規制当局 |
| 適用時期 | 複数年のフィールドテスト後、2025-04 以降に導入 | Version 2.0 が 202412月に最終化。五年間のモニタリング期間後、2025 から IAIG に義務化 | 2016-01から運用。Solvency II 2.0 レビュー・パッケージは 2025 に採択 | 1990年代から有効。生命 RBC、P&C-RBC、health-RBC など種目別に進化 |
| 対象 | 日本で免許を受けたすべての保険会社と保険持株会社。[[financial-licenses/insurance-license-and-solvency]]参照 | IAIS 基準で特定される大規模な国際保険グループ（IAIG） | EU / EEA で認可されたすべての保険会社・再保険会社 | 米国所在の保険会社。生命、P&C、健康の各ラインに別々に適用 |
| 主要指標 | 経済価値ベース・ソルベンシー比率（ESR）= 適格資本 / 所要資本 | ICS 比率 = 適格資本リソース / ICS 所要資本 | ソルベンシー資本要件（SCR）カバレッジ比率 = 適格自己資本 / SCR。加えて最低資本要件（MCR） | RBC 比率 = Total Adjusted Capital / Authorized Control Level RBC。規制上のアクションレベルを伴う |

### 思想と評価

| 観点 | 日本 FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 基礎思想 | 経済価値：資産・負債・リスクを市場整合的に評価 | 経済価値：資産・負債を市場調整評価（MAV）で評価 | 経済価値：市場整合的な最良推計 + リスクマージン | 法定会計価値（SAP）：帳簿価額にファクター方式のチャージを適用 |
| 評価基礎 | 保険負債の最良推計をリスクフリー利回り曲線で割引し、リスクマージンを加える | MAV 最良推計 + 現在推計超過マージン（MOCE） | 最良推計 + 資本コスト方式で計算したリスクマージン | NAIC 会計実務で定義される法定準備金と資産評価 |
| 割引率手法 | 長期生命負債ではリスクフリー利回り曲線と Ultimate Forward Rate（UFR）外挿を用いる。移行期間ではボラティリティ / マッチング調整もある | 三分割外挿で Long-Term Forward Rate（LTFR）へ接続するリスクフリー利回り曲線 | EIOPA リスクフリー期間構造、Last Liquid Point、UFR への収束、ボラティリティ調整、マッチング調整 | 単一の市場曲線ではなく、評価法（例：commissioner's reserve valuation method）で定める法定準備金割引率 |
| 長期負債の扱い | UFR 外挿は超長期デュレーションで資本感応度を下げるが、流動的な曲線部分のミスマッチを露出させる | LTFR はプロシクリカリティを抑えるよう較正 | UFR と VA / MA ツールにより短期スプレッドショックを緩和 | 長期キャッシュフローのミスマッチを式が直接評価せず、資産十分性テストで扱う |

### 資本構造

| 観点 | 日本 FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| 資本階層 | ICS 原則に概ね沿う品質基準を持つ階層化された適格資本。劣後債や資本性商品は制限付きで算入 | 二階層の適格資本リソース：Tier 1 （中核、無制限 Tier 1を含む）と Tier 2。Tier 2 利用には制限 | 三階層：Tier 1 （無制限および制限付き）、Tier 2, 、Tier 3, 。SCR と MCR に対する適格性制限あり | Total Adjusted Capital は法定資本・剰余、資産評価準備金（生命）、承認済み調整を集計。正式な Tier 1 / 2 / 3 分割はない |
| 内部モデル選択 | 標準モデルがデフォルト。高度な会社は金融庁承認の下で内部モデル要素を使う可能性 | 標準法が参照基準。一部法域では Aggregation Method（AM）が比較可能な並行計算として残る | 標準式または監督承認を受けた全部 / 部分内部モデル | 所定ファクターによる単一標準式。内部モデルの代替はない |
| リスクマージン / MOCE 基礎 | 最良推計に対する資本コスト型マージン | 最良推計に Margin Over Current Estimate（MOCE）を加える | 資本コスト型リスクマージン（現在 4 percent CoC、2025 レビューで引き下げ後） | 明示的なリスクマージンなし。保守性は法定準備金とファクターチャージに埋め込まれる |

### リスクモジュール

| 観点 | 日本 FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| モジュール構造 | 生命保険引受、損害保険引受、市場、信用、オペレーショナル | 保険（生命・損害）、市場、信用、オペレーショナルリスク | 生命、損害、健康、市場、カウンターパーティ不履行、オペレーショナル、無形資産リスク | 資産リスク（C-1）、保険リスク（C-2）、金利リスク（C-3）、事業リスク（C-4）、市場リスク（生命 RBC の C-3a） |
| カタストロフィリスク | 地震、台風、洪水を含む損害保険 cat モジュール。日本固有の cat エクスポージャーと再保険の相互作用は [[insurance/natcat-reinsurance-japan]] 参照 | 自然災害リスクは保険リスク内に含まれ、法域別シナリオを使用 | 国別ファクターを持つ専用 nat-cat サブモジュール（例：EU 地域別の暴風、洪水、地震） | P&C-RBC では引受リスクの R5 に加え、R6 ハリケーンと R7 地震チャージとして cat リスクを別途追加 |
| 分散効果 | 金融庁指定の制限の下で、モジュール内・モジュール間の相関行列により分散を認識 | サブリスクおよび全体リスクレベルの相関行列で集計。aggregation method では地理 / ライン分散を一部認識可能 | 所定の相関行列に基づく分散共分散集計。リングフェンスファンドは一部分散効果を制限 | 主要リスク要素を二乗和平方根（covariance）で集計。欧州型枠組みより粒度は粗い |
| オペレーショナルリスク | 保険料 / 準備金に重ねる資本チャージと、定性的監督オーバーレイ | 国際経験に沿って較正されたファクター方式チャージ | 保険料と技術的準備金に基づく式。BSCR に対する上限あり | 事業リスク要素と Risk-Based Capital trend test で間接的に捕捉 |

### 開示と監督

| 観点 | 日本 FSA ESR | IAIS ICS 2.0 | EU Solvency II | US NAIC RBC |
|---|---|---|---|---|
| ピラー構造 | 金融庁は制度を三つの柱で整理する：規制資本、内部リスク管理 / 監督レビュー（ORSA 型）、開示 | 二層の監督アーキテクチャ：Prescribed Capital Requirement としての ICS + グループ全体監督 | 三つの柱：Pillar 1 定量（SCR / MCR）、Pillar 2 ガバナンスと ORSA、Pillar 3 開示（SFCR、RSR、QRTs） | 州規制当局への機密 RBC 報告と規制アクションレベル。公開 Pillar-3型の開示制度ではない |
| 公開報告 | 保険会社は統合報告書 / 年次報告書で ESR と手法を開示。金融庁は制度資料とフィールドテスト結果を公表 | IAIG レベルでグループ全体監督者に機密報告。IAIS は集計結果を公表 | 年次 Solvency and Financial Condition Report（SFCR）と定量報告テンプレート（QRTs）が必須 | 法定提出書類に RBC 比率が現れる範囲に限定。完全な RBC ワークシートは機密 |
| 監督上の梯子 | 金融庁がしきい値に照らして監視。経済価値制度上のアクションレベルは移行期に較正 | ICS レベルの監督対話。正式な「梯子」はないが、ICS 比率が監督介入を示唆 | SCR 違反は再建計画を誘発。MCR 違反は短期回復がなければ認可取消につながる | 四つのアクションレベル：Company Action、Regulatory Action、Authorized Control、Mandatory Control |

### IAIS ICS との収斂と相違

| 制度 | ICS との整合性 | 主な相違 |
|---|---|---|
| 日本 FSA ESR | 概念上の整合性は高い。経済価値思想、MAV 型評価、資本コスト型マージンを共有 | 金利、株式、カタストロフィシナリオの日本固有較正。既契約保険負債向けの移行措置 |
| EU Solvency II | 概念レベルの整合性は高い。EIOPA は ICS フィールドテストに参加 | 三階層の資本構造（ICS は二階層）、ボラティリティ / マッチング調整、無形資産モジュール、ICS より深い SFCR 型開示 |
| US NAIC RBC | 整合性は最も低い。米国は IAIS 比較可能性評価で Aggregation Method（AM）を同等結果として主張 | 法定会計基礎、ファクター方式チャージ、経済価値評価なし、正式な Tier 1 / 2 / 3 分割なし。AM は法域別比率の集計により比較可能な結果を許容 |

## 日本の保険会社への影響

日本の保険市場では、これらの枠組みが具体的なエンティティ層を通じて翻訳される。

- **生命保険ビッグフォー**：[[insurance/japan-life-insurance-big-four|Japan life insurance big four]]。Nippon Life、Dai-ichi Life、Meiji Yasuda、Sumitomo Life は、長期貯蓄、外貨建て年金、株式保有エクスポージャーにより、経済価値感応度が最も大きい。ESR は国内の主要指標である。特に [[life-insurers/dai-ichi-life]] では、上場株式開示があるため、ESR は配当 / 自社株買い余力とあわせて読まれる。相互会社は、株式買戻しではなく契約者還元と剰余分配を通じて ESR を翻訳する。
- **損保ビッグスリー**：[[insurance/japan-nonlife-big-three|Japan non-life big three]]。[[non-life-insurers/tokio-marine|Tokio Marine]]、MS&AD、SOMPO は、nat-cat 再保険価格、海外特殊保険、株式保有圧縮プログラムを通じて ESR を翻訳する。ESR の損害保険 cat モジュールは、民間および公的カタストロフィ再保険の規制上の対応物である。
- **IAIG ステータスのグループ**：グループ全体監督者から IAIG に指定された日本グループは、ESR に加えて並行する ICS 報告に向き合う。日本本社グループでは金融庁がグループ全体監督者となる。
- **海外子会社**：EU 子会社（再保険ハブ、スペシャルティ・プラットフォーム等）を持つ日本グループは子会社レベルで Solvency II に向き合い、米国生命 / P&C / 健康保険子会社を持つグループは RBC に向き合う。

## ESG / 気候ストレスの上乗せ

各制度は、気候 / ESG 要素を主要比率そのものに埋め込むのではなく、中核資本枠組みの上に重ねている。

| 制度 | 気候 / ESG アプローチ |
|---|---|
| 日本 FSA ESR | 大手保険会社向けの金融庁気候関連シナリオ分析。ESG リスクは直接的な SCR 型上乗せよりも、主に ORSA と監督対話を通じて扱われる |
| IAIS ICS 2.0 | IAIS の気候リスク監督期待とストレステスト演習。ICS 自体にはまだ独立した気候資本モジュールはない |
| EU Solvency II | EIOPA 気候シナリオ演習、2025 レビューを通じたサステナビリティリスクの健全性枠組みへの統合、SFCR 開示を通じた stewardship |
| US NAIC RBC | NAIC Climate Risk Disclosure Survey と TCDD 整合報告。直接的な RBC 資本チャージはまだない |

## 移行措置

| 制度 | 移行メカニズム |
|---|---|
| 日本 FSA ESR | 2025-04 から段階的に導入し、従来のソルベンシー・マージンを並行開示。既契約長期負債向けの技術的調整あり |
| IAIS ICS 2.0 | 2020-2024の五年間のモニタリング期間を経て、2024 12月に最終化。各法域は 2025 以降に実装 |
| EU Solvency II | 当初の 2016 実装では、技術的準備金とリスクフリー金利に 16年の移行措置を含んだ。2025 レビューは一部を厳格化し、一部を緩和 |
| US NAIC RBC | 生命、P&C、健康の各ラインで継続的に漸進更新。単一の「ビッグバン」移行はない |

## 判断での使い方

このマトリクスは、次を問うときに使う。

- 日本の保険会社の国内 ESR を、法域横断比較のため ICS、Solvency II、RBC 相当へ翻訳できるか。
- 規制資本の変更が構造的なもの（制度思想）なのか、較正上のもの（パラメータ更新）なのか。
- 損害保険グループのカタストロフィ・エクスポージャーが専用 cat モジュールで捕捉されているか、集計上のみ捕捉されているか。
- 生命保険会社の長期負債が UFR / LTFR 外挿またはボラティリティ / マッチング調整の便益を受けるか。
- 日本グループの米国所在または EU 所在子会社が、根本的に異なる資本レンズに置かれているか。

## 境界

このページは法務・規制助言ではなく、金融庁、IAIS、EIOPA、NAIC の一次資料を読むことの代替ではない。具体的な較正（相関行列、ファクター水準、UFR / LTFR 値、移行措置）は時間とともに変わるため、各保険会社開示のソース日付に照らして確認すべきである。上のマトリクスは概念整理であり、ある制度の単一数値を再較正なしに別制度へ再利用してはならない。

## 関連

- [[insurance/INDEX|insurance INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/mutual-vs-stock-life-insurer]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[life-insurers/dai-ichi-life]]
- [[non-life-insurers/tokio-marine]]
- [[INDEX|FinWiki index]]

## 出典

- FSA：経済価値ベースのソルベンシー規制等について（制度ハブ）。
- IAIS：Insurance Capital Standard 活動 / トピックページ。
- EIOPA：Solvency II 規制枠組みおよび 2025 レビュー資料。
- NAIC CIPR：Risk-Based Capital トピックページ。
- OECD：保険・年金統計 / 政策ハブ。
