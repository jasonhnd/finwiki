---
source: real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework
source_hash: 2e3f722bd7ddaae5
lang: ja
status: machine
fidelity: ok
title: "キャップレート・NOI・IRR による不動産評価フレームワーク"
translated_at: 2026-07-29T00:00:00.000Z
---
# キャップレート・NOI・IRR による不動産評価フレームワーク

## 要約

キャップレート、NOI / NCF、アンレバード IRR、レバード IRR は、相互に関連する一方、定義に敏感な不動産指標である。[[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]] は鑑定評価の枠組みを示す。資産・ビークル固有の入力は、J-REIT の対象鑑定者と開示、ファンドの支配文書と引受、取引の実際のキャッシュフローから得る。JREI の日付付き Real Estate Investor Survey は回答者の期待を示すもので、取引データ、普遍的な鑑定入力、またはそれ自体で現在の方向性を示す証拠ではない。本ページは方法論の参照であり、投資助言または現在のキャップレート / IRR レンジの記述ではない。

## ウィキ上の位置づけ

このページは、評価手法のルーティング面として [[real-estate-finance/INDEX|real-estate-finance index]] の下に位置づけられる。法定の MLIT 鑑定評価フレームワークは [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]]、現在のキャップレート・レンジマップは [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]]、上場ビークルの価格形成文脈は [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、非上場ビークルの並行文脈は [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、利回りスプレッドの読み方は [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]]、レバレッジ側の引受は [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank commercial real-estate lending Japan]]、クロスドメイン評価文脈は [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]] とあわせて使う。割引率の入力レイヤーは [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] と組み合わせる。

## 相互に結びつく四つの指標

表の出典注記：以下は分析上の定義である。正確な分子、分母、時期の慣行、手数料、税、債務、売却の処理は、対象鑑定、発行体開示、ファンド報告、またはモデルに合わせて照合する。^[出典: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html および https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| 指標 | 式 | 捉えるもの |
|---|---|---|
| キャップレート (NOI 利回り) | NOI / 不動産価格 | 初年度の安定化後インカム利回り |
| NOI / NCF | 下記定義を参照 | 物件レベルのキャッシュフロー定義 |
| アンレバード IRR | 物件レベルのキャッシュフロー (取得 + NOI + 売却) の IRR | 資産レベルのプロジェクトリターン |
| レバード IRR | エクイティ・キャッシュフロー (債務返済 + 金融手数料後) の IRR | エクイティ投資家リターン |

## NOI と NCF (定義の突合)

定義は調査、[[real-estate-finance/j-reit-market-overview|J-REIT]] IR、私募ファンド LP 報告、鑑定書、取引モデルの間で異なり得る。比較前に対象ソースを照合する。

表の出典注記：以下の加減算マップは例示的な分析上の橋渡しであり、JREI、MLIT、ARES、またはすべての発行体が定める定義ではない。経常・非経常処理、設備投資、テナント工事、リーシング手数料、リザーブ、税、資金調達は引用文書から判断する。^[出典: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html および https://www.ares.or.jp/action/jreit/.]

| 項目 | NOI | NCF |
|---|---|---|
| 賃料収入 (総額) | + | + |
| その他収入 (駐車場、看板、共用部) | + | + |
| 空室 / 未回収損 | − | − |
| 物件運営費 | − | − |
| 固定資産税 / 都市計画税 | − | − |
| 保険 | − | − |
| プロパティマネジメント報酬 | − | − |
| ビルマネジメント報酬 | − | − |
| 修繕 / 維持管理 (経常) | − | − |
| Capex / TI / リーシング手数料 (一時的) | 対象 NOI 定義を確認 | 対象 NCF 定義を確認 |
| 資本的修繕リザーブ | 対象 NOI 定義を確認 | 対象 NCF 定義を確認 |
| 減価償却 | 除外 | 除外 |
| 支払利息 | 除外 | 除外 |
| 所得税 | 除外 | 除外 |

一つの分析上の橋渡しでは、NOI を特定の資本項目前の物件運営収益、NCF をその項目控除後のキャッシュフローとして扱う。ソースに照合がない限り、これを発行体または鑑定の定義として用いない。

## キャップレート — 三つの下位定義

表の出典注記：以下の名称は分析上の分類である。対象ソースにある正確なキャッシュフロー期間、価格・価値の日付、安定化前提、終価年度の慣行、調査・取引定義を用いる。^[出典: https://www.reinet.or.jp/?page_id=14347&lang=en および https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| 種類 | 定義 |
|---|---|
| 取得時キャップレート | 初年度 NOI / 取得価格 |
| 安定化キャップレート | 満室 / 安定化状態の NOI / 現在価格 |
| リバージョン / ターミナルキャップ | DCF の終価に対して N+1 年目 NOI に適用されるキャップレート |
| 期待 (フォワード) キャップレート | 対象調査、物件種類、場所、調査日を特定した回答者の期待 |
| 取引 (市場) キャップレート | 成約済み取引から示唆されるキャップレート |

回答者期待には対象 JREI 調査リリースを用い、開示物件・取引には対象 ARES / J-REIT または発行体データを用いる。母集団、定義、日付、観測種類が異なるため、照合なしに一つのベンチマークへ混ぜない。

## 収益方式 DCF の仕組み

[[real-estate-finance/japan-real-estate-appraisal-methodology|appraisal practice]] における収益方式 DCF は以下を用いる。

```
Value = Σ(NCF_t / (1+r)^t) + (TerminalValue_(N+1) / (1+r)^N)

TerminalValue = NCF_(N+1) / TerminalCap
```

表の出典注記：以下の入力マップは国土交通省の不動産鑑定評価基準における収益方式の構造に沿う。予測期間とターミナルキャップのスプレッドはモデル上の選択であり、公表された市場中央値ではないため、対象資産と評価日について根拠を示す。^[出典: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html.]

| 入力 | 出所 |
|---|---|
| 予測 NCF | 賃貸ロール予測、市場賃料想定、空室想定、capex 計画 |
| 割引率 r | 鑑定 / モデルのリスク、時期、成長、キャッシュフロー前提から裏付け、重複する要素を加算しない |
| 保有期間 N | モデルで選択する明示的予測期間。10 年は例示的慣行であり普遍的要件ではない |
| ターミナルキャップ | 調査ベースまたは限界買い手の引受。取得時キャップとの差は案件・日付固有である |

対象鑑定書を読み、MLIT の枠組みの下で直接還元法 (V = NOI / キャップレート) と DCF 法がどのように適用・照合されたかを確認する。本ページは普遍的な重み付けまたは併用を定めない。

## J-REIT と私募不動産ファンドの価格形成

上場・私募ビークルは異なる価値または要求リターンを示す場合があるが、その理由は対象ビークルと日付から特定する。

表の出典注記：以下は構造上の実務家比較である。レバレッジとハードルレートのレンジは 2026-07-29 時点の例示的な感応度前提であり、ARES/J-REIT の市場平均または特定ファンドの条件ではない。現在のビークル開示と適用税法上の要件が優先する。^[出典: https://www.ares.or.jp/action/jreit/ および https://j-reit.jp/en/list/.]

| 項目 | J-REIT (上場) | 私募ファンド |
|---|---|---|
| 価格の基準 | 一口あたり NAV に対する上場投資口価格 | 取得キャップレート + 保有期間 IRR 引受 |
| キャップレート入力 | 対象鑑定者が開示した前提と評価日。証拠なしに JREI へ帰属させない | ファンドが文書化した引受前提と証拠 |
| 割引メカニズム | NAV に対する取引価格倍率 (ディスカウントまたはプレミアム) | 保有期間 IRR とファンド目標 IRR の比較 |
| レバレッジ方針 | 実際のビークル方針、債務開示、コベナンツ定義、測定日 | 実際のファンド / ビークル文書、債務条件、測定日 |
| 分配プロファイル | 税務導管性は適用法上の分配要件その他の条件を満たすことに依存する。ビークルと期間を確認する | 分配・再投資の柔軟性はファンド条件と税務構造に従う |
| 流動性 | 上場取引は存在するが、深さ、スプレッド、出来高、執行可能規模は日付固有 | 譲渡、ロックアップ、償還、ゲート、セカンダリー流動性の条件はビークル固有 |
| 投資家基盤 | 日付付き保有開示から測定し、限界買い手を推定しない | 実際の LP または開示カテゴリーを特定し、私募であることから推定しない |
| 限界買い手の引受 | 引用した市場・取引証拠からのみ推定 | 対象買い手 / ファンドのハードルとモデルを用い、市場全体のレンジを主張しない |

J-REIT 市場価格、報告 NAV、鑑定価値、私募入札が異なる場合、原因を帰属する前に、評価日、資産・負債、税、手数料、支配、流動性、レバレッジ、キャッシュフロー定義、前提を照合する。[[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] と [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] を参照。

## アンレバード IRR とレバード IRR

表の出典注記：以下はキャッシュフロー基準の定義である。IRR 比較前に、時期、手数料、税、運転資本、設備投資、売却費用、債務実行・返済、分配を特定する。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| IRR | キャッシュフロー基準 | 測るもの |
|---|---|---|
| アンレバード IRR | 物件レベル: 取得支出 + NCF + 売却代金 | 資産レベルのプロジェクトリターン。レバレッジから独立 |
| レバード IRR | エクイティレベル: 投入エクイティ + 債務返済後 NCF + 債務控除後売却代金 | エクイティ投資家リターン。レバレッジに敏感 |

### 仕組み

単一物件について、以下の想定を置く。
- 取得価格 P
- LTV L (債務 = L × P)
- 債務の全込みコスト Rd
- 保有期間 N
- 1 年目 NCF C
- NCF 成長率 g
- 売却時キャップレート K_exit

```
Unlevered IRR solves: −P + Σ(C × (1+g)^(t−1)) + (C × (1+g)^N / K_exit − sale cost) over t = 1..N

Levered IRR solves: −P×(1−L) + Σ((C × (1+g)^(t−1)) − (debt service)_t) + (sale proceeds − remaining debt)
```

### レバレッジが IRR に与える影響

表の出典注記：以下の方向性は他の条件を一定とした例示的ケースで、予測ではない。IRR は非線形であり、初年度利回りと債務コストの比較だけでなく、キャッシュフロー時期、償還、手数料、税、コベナンツ、借換、売却価値、下方損失に依存する。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| 単純化したケース | 条件付き効果 |
|---|---|
| 物件キャッシュ利回りが全込み債務コストを上回る | 他のキャッシュフローと売却前提を一定とすれば、レバレッジがモデル上のエクイティ IRR を高める場合がある |
| 物件キャッシュ利回りが全込み債務コストに近い | 時期と手数料をモデル化する。レバレッジはなお IRR と下方リスクを大きく変え得る |
| 物件キャッシュ利回りが全込み債務コストを下回る | ネガティブキャリーはエクイティ・キャッシュフローを減らし得る。最終 IRR を推定せず定量化する |

同日付の資産キャッシュ利回りと、約定済みまたは裏付け可能な全込み債務コストを用いる。[[real-estate-finance/real-estate-cap-rate-compression-2026|scenario page]] は、対象資産・ファシリティの現在のキャリー・スプレッドを確定しない。

## 保有期間感応度

保有期間は、収益、設備投資、資金調達、売却前提と相互作用する。

表の出典注記：以下の方向性は、他の入力を一定とした単純化した感応度ケースである。推奨保有期間でも、どのリターン要素が支配するかの予測でもない。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/valuationtools.html.]

| 想定 | 方向性 |
|---|---|
| 売却時キャップが不変の長期保有 | より多くの期間の運営キャッシュフローと設備投資が入る。純効果を定量化する |
| より低い売却時キャップでの短期保有 | 他の条件一定なら売却価値は増え得るが、取引費用とキャッシュフロー時期も重要 |
| より高い売却時キャップでの長期保有 | 運営キャッシュフローが低い売却価値の一部を相殺し得る。純結果はモデル固有 |
| より高い売却時キャップでの短期保有 | 低い売却価値の比重が高まり得る。レバレッジ、手数料、売却費用を定量化する |

資産、市場、日付、シナリオ固有の証拠から売却時キャップを選び、感応度を示す。より広い売却時キャップが普遍的に「慎重」とは限らず、本ページは固定スプレッドを定めない。

## 鑑定評価と引受の重なり

[[real-estate-finance/japan-real-estate-appraisal-methodology|MLIT framework]] に基づく鑑定評価と私募ファンド引受は関連入力を使う場合があるが、実際の鑑定書とモデルが優先する。

表の出典注記：以下は鑑定と引受ワークフローの分析上の比較であり、普遍的な市場条件ではない。国土交通省基準が鑑定方法を規律し、私募ファンドの保有期間と前提は運用者、戦略、資産、日付に依存する。^[出典: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00248.html および https://www.ares.or.jp/action/jreit/.]

| 項目 | 対象鑑定評価 | 私募ファンド引受 |
|---|---|---|
| キャップレート入力 | 鑑定者が示した証拠、調整、評価日を読む。JREI 調査の使用を前提にしない | ファンドが示した取引、鑑定、調査その他の証拠と調整を読む |
| 成長想定 | 正確な賃料、稼働率、費用、終価前提を読む | 正確な事業計画前提と実行依存性を読む |
| Capex 想定 | 経常・非経常修繕、テナント工事、リーシング費用、リザーブ、時期を読む | 正確な改装、リポジショニング、維持、リーシング計画を読む |
| 保有期間 (DCF) | 鑑定固有の明示的予測期間。本ページでは普遍的な 10 年ルールを主張しない | 戦略およびファンド期間固有 |
| 突合 | どの方式・下位手法を適用、加重、除外したか、その理由を読む | モデル・ガバナンス、レビュー、評価エージェント、LP 文書の要件を読む |
| 独立性 | 不動産鑑定士、委嘱、利益相反、報酬条件、鑑定書の記載を特定する | 作成者、承認者、外部レビューの有無、利益相反、評価方針を特定する |

J-REIT の NAV は、開示された資産、負債、投資口数、鑑定日、対象鑑定者から再構築する。価値を JREI に帰属させず、普遍的な更新ラグまたは価格対 NAV 変動の単一原因を推定しない。

## キャップレートと割引率 (重要な区別)

| 概念 | 定義 |
|---|---|
| キャップレート | NOI / 価格。初年度利回り。静的指標 |
| 割引率 | 特定キャッシュフローを現在価値へ割り引く率。通貨、時期、リスク、キャッシュフロー定義に整合させる |

整合するキャッシュフロー定義を用いた安定的な永久成長モデルでは、価値 = 次期キャッシュフロー /（割引率 − 成長率）となり、対応する利回りは割引率から成長率を引いた値に近似し得る。これはモデル上の恒等式で、普遍的な不動産評価ルールではない。

純粋な例示的安定成長ケースでは、3.5% の利回りと 1.0% の永久成長率は、時期と定義の整合性を確認する前の概算として 4.5% の割引率に対応する。これらの数値を現在の日本の入力として扱わない。割引率の組み立ては [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] を参照。

## 関連項目

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/j-reit-vs-us-reit-governance-comparison]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict]]
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/cost-of-capital-japan-2026-reference]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[money-market/japan-money-market]]
- [[INDEX|FinWiki index]]

## 出典

- JREI (Japan Real Estate Institute): Real Estate Investor Survey (semi-annual cap-rate publication).
- ARES (Association for Real Estate Securitization): J-REIT data and survey publications.
- J-REIT.jp: market portal and educational materials.
- MLIT: 不動産鑑定評価基準 (Real Estate Appraisal Standards) framework.
- JPX: REIT segment data and disclosure framework.
- BoJ: macro and rate data for risk-free reference.
- Damodaran: real-estate-valuation methodology reference for unlevered / levered IRR mechanics.
