---
source: finance/cost-of-capital-japan-2026-reference
source_hash: 52fed5f5e95e2359
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "資本コスト日本 2026 リファレンス"
translated_at: 2026-07-29T00:00:00.000Z
---

# 資本コスト日本 2026 リファレンス

## TL;DR

資本コストは、あらゆる [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF valuation]] で感応度の高い入力であり、[[finance/japan-leveraged-buyout-economics|LBO economics]]、[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|real-estate IRR 引受]]、[[finance/japan-acquisition-finance|acquisition finance pricing]] の構造的なアンカーである。日本の分析では、評価日時点の JGB または TONA/OIS 参照レートを更新し、ERP とベータの方法論を選択・明記したうえで、企業固有のレバレッジ、信用スプレッド、実効税率を照合する必要がある。以下の数値レンジは 2026-07-29 時点で固定した例示的な感応度前提であり、企業または市場中央値の観測値でも、投資推奨でもない。

## ウィキ動線本ページは [[finance/INDEX|finance domain]] の配下に位置する。バリュエーションにおける割引率の役割については [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]]、負債コストのプライシングについては [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、資本構成のプライシング参照については [[finance/japan-acquisition-finance|Japan acquisition finance]]、不動産側の類似物については [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]]、ショートエンドの参照については [[money-market/japan-money-market|Japan money market]]、政策金利の配管については [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]]、カーブ構築のレイヤーについては [[derivatives/ois-tona-curve|OIS TONA curve]] と併せて用いること。バリュエーション・フレームワークの文脈については [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] と [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]] に動線をたどる。

## 資本コスト — 構造的フォーミュラ

WACC = (E/V) × Re + (D/V) × Rd × (1 − Tc)

ここで：
- Re = 株主資本コスト = Rf + β × ERP + （カントリーリスク）+ （サイズ / ガバナンス・プレミアム）
- Rd = 負債コスト = Rf + クレジットスプレッド
- Tc = 実効法人税率
- E、D、V = 株主資本、負債、および総資本の市場価値日本については、各入力は米国または欧州の参照フレームワークとは異なる構造的特性を持つ。

### ロングエンド（10 年物 JGB）

表の出典注記：1.0–1.5% は 2026-07-29 時点で固定した仮想的な感応度入力であり、気配値のレンジではない。実務では、財務省の過去金利系列または別の文書化されたカーブ・ソースから、評価日の正確な点に置き換える。^[出典: https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm.]

| 読み取り値 | 2026  クラス |
|---|---|
| 10 年物 JGB 利回り | 1.0–1.5% は例示的な感応度としてのみモデル化し、実務では日付付き観測値を使用 |
| 出典 | 正確な MOF／BoJ 系列、観測日、満期、補間方法を記録 |
| 用途 | 文書化された長期 DCF、ターミナルバリュー、資金調達モデルの候補入力。適合性はモデル固有 |

日本銀行の 2024-03-19 決定はマイナス金利政策の枠組みを終了した。その前後の日付付き 10 年物 JGB 観測値を比較できるが、利回り経路をその政策変更だけに帰属させず、評価が固定期間内に陳腐化するとも仮定しない。^[出典: https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm.]

### ショートエンド（TONA / OIS）

| 読み取り値 | 2026  クラス |
|---|---|
| TONA（無担保コールオーバーナイト物レート、Tokyo Overnight Average Rate） | 適用契約またはモデルが TONA を指定する場合に限る候補参照 |
| OIS TONA カーブ | 文書化された評価・担保枠組みにおける候補カーブ入力。[[derivatives/ois-tona-curve|OIS TONA curve]] を参照 |
| 用途 | 普遍的な参照を仮定せず、締結済みファシリティ、スワップ、割引慣行、期間、フォールバック、スプレッドを確認 |

JPY LIBOR の廃止は、すべての円ローン、LBO ファシリティ、スワップが TONA を参照することを意味しない。適用契約と現行ベンチマーク条項が定める場合に限り、TONA＋マージンを用いる。

### 中間 / ベリー

仮想的な 3–7 年モデルでは、JGB 補間または対応する文書化済み OIS 点をテストできる。選択したカーブ、満期、補間、キャッシュフロー通貨、割引慣行を明示し、10 年物が一般的または優先される単一アンカーとは主張しない。

### 過去 ERP

| 方法論 | 読み取り値 |
|---|---|
| 長期ホライズンの算術超過リターン | 具名指数、リターン定義、リスクフリー系列、頻度、開始／終了日から再計算。5–7% は仮想的感応度入力のみ |
| 幾何平均の長期ホライズン | 同じ具名標本から計算。算術・幾何の 1–2pp 差は仮想的チェックであり、日本の観測ルールではない |
| ローリングウィンドウ | 正確な期間を記録し、異なる期間の包含による結果を検証。方向は仮定しない |

過去 ERP は、指数、JGB 代理、算術／幾何、通貨、再投資前提、標本日付に依存する。5–6% は日付付きの仮想的感応度に限って使用でき、開示標本なしにフェアネス・オピニオン実務または市場慣行を主張しない。

### インプライド ERP

インプライド ERP は、インデックス価格を予想配当またはフリーキャッシュフローの現在価値に等しくする割引率を解くことで導出される。

表の出典注記：以下はモデル構築のチェックリストである。Damodaran のインプライド・プレミアム資料は方法論の経路を示し、日本固有の市場・キャッシュフロー入力は分析者がすべて日付付きで用意する。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html.]

| 読み取り値 | 2026  クラス |
|---|---|
| TOPIX キャッシュフロー・モデルからのインプライド ERP | 4–5% は 2026-07-29 時点の仮想的感応度のみ。NIRP 後の圧縮や市場水準は主張しない |
| 検証可能性 | 指数価格、予想ソース、CF／配当経路、成長率、リスクフリー・カーブ、日付、解法を明示。BoJ／JPX が完成 ERP 計算を提供するとは扱わない |
| 用途 | フォワードルッキングな候補シナリオ。モデルの入力日付が変わるたびに更新 |

インプライド ERP と過去 ERP の恒常的な差または慣行上のアンカーを仮定しない。比較が必要なら、開示した方法と日付で両方を計算する。

## ベータの出典

表の出典注記：以下は検証マップであり、優先または一般的な実務を示さない。TOPIX の方法論は JPX が公表し、Damodaran は研究データと推定資料を提供する。ベンダー項目はその時点の方法論と照合する。^[出典: https://www.jpx.co.jp/english/markets/indices/topix/ および https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html.]

| 出典 | 読み取り値 |
|---|---|
| 市場インデックスとしての TOPIX | 候補ベンチマーク。構成銘柄と通貨が対象エクスポージャーに合うかを確認 |
| 回帰ウィンドウ | 5 年月次と 2 年週次は代替的な例示期間としてのみテストし、頻度、欠損、推定誤差を開示 |
| ベンダーのベータ項目 | ベンダー、項目、日付、生／調整済み、ベンチマーク、期間、調整式を記録し、Blume 調整を仮定しない |
| Damodaran のセクターベータ | 外部比較候補。地域、セクター、レバレッジ、現金、日付、ピア定義を整合 |
| ボトムアップ・ベータ | ピア由来の候補代替。ピア選択、アンレバー／リレバー、税、負債、集計を文書化し、優先性は主張しない |

### 日本固有のベータの論点

- 持ち合いが測定共分散に影響するかを検証し、方向は仮定しない。
- 候補ベンチマークのセクター比率を発行体のエクスポージャーと比較し、十分な分散を仮定しない。
- 投資家フローと推定ベータの関係を同一日付標本で検証し、因果を推定しない。
- 薄い／短い履歴では信頼区間と代替仕様を示し、適合性の証拠なしに優先手法を宣言しない。

## カントリーリスク・プレミアム

| 読み取り値 | クラス |
|---|---|
| ソブリン格付 | 使用する場合、選択した機関、格付、見通し、日付を記録 |
| 通貨／準備通貨の入力 | 選択モデルへ影響するか、その理由を説明し、地位を機械的にプレミアムへ変換しない |
| カントリーリスク・プレミアム | ゼロまたは正の上乗せは、具名方法、データ日付、二重計上確認を要するモデル選択 |
| ソブリン CDS | 日付付きで流動性があり満期の整合する観測値と文書化した対応関係がある場合のみ使用し、それ以外は省略 |

実際のキャッシュフローと投資家視点に別個のカントリーリスク・プレミアムが必要かを明示的に決める。本ページは、日本のデフォルトがゼロとも、非米国一律の上乗せとも主張しない。

## 仮想的 WACC 感応度グリッド

表の出典注記：以下のレンジは 2026-07-29 時点で分析者が設定した仮想的な感応度ケースであり、JPX 公表のセクター中央値、市場レンジ、現在の企業別 WACC のいずれでもない。JPX は資本コストを意識した経営の説明を求めているが、WACC レンジを定めてはいない。各ケースは評価日時点の JGB・市場入力と企業固有の資本構成で置き換える。^[出典: https://www.jpx.co.jp/english/equities/follow-up/02.html および https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm.]

| 仮想テストケース | WACC 感応度レンジ（市場推定ではない） |
|---|---|
| ケース A：株主資本側とグループブレンドを分けたテスト | 株主資本側で 7-9% / グループブレンドで 4-6% |
| ケース B | 6-8% |
| ケース C | 5-7% |
| ケース D | 5-7% |
| ケース E | 6-8% |
| ケース F | 7-10% |
| ケース G：追加の規模 / 非流動性ストレス | 8-12% |

これらのレンジは意図的に置いた仮想的なモデルケースであり、クラス記述子、セクター・レンジ、市場観測値、企業固有値のいずれでもない。必ず当該主体の資本構成、ベータ、クレジットスプレッド、実効法人税率の証拠で置き換えること。

## 中型株 / 小型株の調整

表の出典注記：以下の加算幅は 2026-07-29 時点の例示的な感応度ケースであり、観測済みプレミアムでも、複数の重複調整を機械的に加えるルールでもない。Damodaran の current-data pages は規模・ベータ研究の入力を提供するが、分析者は二重計上を避け、使用した標本、日付、方法を明記する必要がある。^[出典: https://pages.stern.nyu.edu/adamodar/New_Home_Page/datacurrent.html.]

| 調整 | 方向 |
|---|---|
| サイズプレミアム | +1.0–3.0pp は仮想的感応度としてのみテストし、日付付き対応標本の方法なしに上乗せしない |
| 非流動性プレミアム | +0.5–2.0pp は仮想的感応度としてのみテストし、流動性指標を定義してサイズ／ベータとの重複を避ける |
| 支配株主構造 | +0.5–1.5pp は仮想的感応度としてのみテストし、権利を文書化して任意プレミアムをシナリオ分析の代替にしない |
| 単一事業への集中 | リスクを CF、ベータ、シナリオのどこに置くか決め、二重計上しない |
| 情報の不透明性 | 欠落情報を特定し影響を明示的にモデル化。高い ERP を仮定しない |

実務家レンジは主張しない。1–3pp のサイズ上乗せと 20–30% の非公開企業価値ディスカウントは別々の仮想的感応度であり、日本の観測慣行ではない。選択方法、標本、日付、二重計上回避を説明する。

## 負債コスト

負債コストは、シニア、劣後、およびその他の利付負債の税引後加重コストである。

表の出典注記：以下は文書・データの確認事項であり、2026 年の市場価格観測ではない。TONA または JGB は商品・モデルが指定する場合のみ適用し、スプレッド方向とメザニン利回りには日付付き実行条件または具名開示が必要である。

| レイヤー | 2026  プライシング参照 |
|---|---|
| シニア事業法人ローン | 締結済みのベンチマーク、マージン、フロア、手数料、期間、担保、コベナンツを確認。TONA は指定時のみ候補 |
| 公募債 | 債券 CF を日付付き国債／スワップカーブと発行体スプレッドに整合し、NIRP 後の拡大を推定しない |
| LBO シニアローン | 締結済みファシリティとベンチマーク条項を読む。[[finance/japan-leveraged-buyout-economics|LBO economics]] は文脈であり価格ソースではない |
| メザニン | 中〜高一桁のオールイン利回りは仮想的感応度のみ。商品固有条件に置換 |
| 劣後資本（銀行 / 保険会社） | 具名商品のクーポン、損失吸収、コール／リセット、順位、規制分類を確認 |

当該主体に適用される現行税制と予想実効キャッシュ税率を用い、日付のない概算法定税率で代用しない。

## 2024 年以降の政策変更の検証

日本銀行の 2024-03-19 決定は日付付き政策イベントである。以下は検証する問いであり、各資金調達・評価結果を当該イベントへ帰属させない。^[出典: https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm.]

| チャネル | 検証する問い |
|---|---|
| 変動金利ローンのベース | 具名契約は TONA その他の何を参照し、日付付きフィキシングはどう変化したか |
| シニア LBO プライシング | 比較可能な日付付きファシリティでベンチマーク、マージン、フロア、手数料、ヘッジはどう変わったか |
| 銀行調達コスト | 具名銀行の日付付き預金、ホールセール調達、開示データは何を示すか |
| 不動産ファイナンス | 借手・資産リスクを統制し、日付付き条件と[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|property underwriting]]前提はどう変わったか |
| 事業法人 WACC | 発行体固有の負債・株主資本入力を再計算し、上昇を仮定しない |

影響は WACC またはキャッシュフロー・モデルで実際に用いる日付付き入力を通じてのみ入る。観測金利変化と単一政策イベントへの帰属を分ける。

## バリュエーションへの帰結

固定キャッシュフロー・モデルでは、普遍的な比率を当てず `ΔV = V(WACC + 100bp) − V(WACC)` を計算する。15–25% の株主価値低下は、CF デュレーション、レバレッジ、ターミナル前提、開始 WACC に依存する仮想的感応度にすぎない。不動産価値／NAV も `cap rate ± 25bp` で再計算し、5–10% は指定 NOI、負債、開始キャップレートの下での例示結果に限る。日本の単一の「最もレバレッジが効く」論点や NIRP 後の因果順位は主張しない。

## 関連

- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[money-market/japan-money-market]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/economic-value-based-solvency]]
- [[INDEX|FinWiki index]]

## 出典

- BoJ：金利、利回り、フロアシステム政策データ；金融システムレポート。
- MOF：JGB 発行カレンダーおよび入札結果。
- JPX：TOPIX インデックスおよびプライム市場のガバナンス・エンゲージメント刊行物。
- FSA：規制フレームワークおよび ICS / EVS ガイダンス。
- Damodaran（NYU Stern）：日本固有のデータセットを含む、ERP およびベータ方法論のリファレンス。
