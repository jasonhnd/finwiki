---
source: finance/cost-of-capital-japan-2026-reference
source_hash: c6deaeab754f1ff6
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "資本コスト日本 2026 リファレンス"
translated_at: 2026-06-26T08:29:25.282Z
---

# 資本コスト日本 2026 リファレンス

## TL;DR

資本コストは、あらゆる [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF valuation]] において最もレバレッジの効く単一の入力であり、[[finance/japan-leveraged-buyout-economics|LBO economics]]、[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|real-estate IRR 引受]]、[[finance/japan-acquisition-finance|acquisition finance pricing]] の構造的なアンカーである。2026,  時点の日本については、構造的な入力は次のとおり：（1）10 年物 JGB 利回りに基づくリスクフリー参照レート（〜1.0-1.5% クラス）、JPY LIBOR 廃止後はショートエンドの参照として TONA ベースの OIS を用いる；（2）BoJ の NIRP 解除以降に圧縮したインプライド ERP に対し、〜5-6% の過去株式リスクプレミアム；（3）日本固有のセクター調整を加えた TOPIX 連動のベータ・ソーシング；（4）日本のソブリン格付および準備通貨の地位を踏まえた控えめなカントリーリスク・プレミアム；（5）東証プライム上場企業の WACC レンジは大型株で通常 5-8%、中型株で 6-10%；（6）2024  以降の BoJ フロアシステムがショートエンドの参照を実質的に押し上げ、変動金利の調達コストへと波及する。本ページは方法論のリファレンスページであり、投資助言ではなく、特定企業の WACC を示すものでもない。

## ウィキ動線本ページは [[finance/INDEX|finance domain]] の配下に位置する。バリュエーションにおける割引率の役割については [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]]、負債コストのプライシングについては [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、資本構成のプライシング参照については [[finance/japan-acquisition-finance|Japan acquisition finance]]、不動産側の類似物については [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]]、ショートエンドの参照については [[money-market/japan-money-market|Japan money market]]、政策金利の配管については [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]]、カーブ構築のレイヤーについては [[derivatives/ois-tona-curve|OIS TONA curve]] と併せて用いること。バリュエーション・フレームワークの文脈については [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] と [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]] に動線をたどる。

## 資本コスト — 構造的フォーミュラ

WACC = (E/V) × Re + (D/V) × Rd × (1 − Tc)

ここで：
- Re = 株主資本コスト = Rf + β × ERP + （カントリーリスク）+ （サイズ / ガバナンス・プレミアム）
- Rd = 負債コスト = Rf + クレジットスプレッド
- Tc = 実効法人税率
- E、D、V = 株主資本、負債、および総資本の市場価値日本については、各入力は米国または欧州の参照フレームワークとは異なる構造的特性を持つ。

### ロングエンド（10 年物 JGB）

| 読み取り値 | 2026  クラス |
|---|---|
| 10 年物 JGB 利回り | 〜1.0-1.5% レンジ；MOF / BoJ のデータページで確認 |
| 出典 | MOF の JGB 入札カレンダー；BoJ 統計 |
| 用途 | 長デュレーション DCF、ターミナルバリュー割引率、プロジェクトファイナンス・シニアプライシング |

NIRP 後の正常化は、ニアゼロの NIRP 期の底値から 10 年物 JGB を実質的に押し上げた。経路は単一の一点よりも重要である — ある一時点の 10 年物にアンカーした割引率モデルは、四半期以内に陳腐化したバリュエーションを生み出しうる。

### ショートエンド（TONA / OIS）

| 読み取り値 | 2026  クラス |
|---|---|
| TONA（無担保コールオーバーナイト物レート、Tokyo Overnight Average Rate） | JPY LIBOR 廃止後の変動金利 JPY のベンチマーク |
| OIS TONA カーブ | フォワードレート予想の構築に用いる；[[derivatives/ois-tona-curve|OIS TONA curve]] を参照 |
| 用途 | 変動金利ローンのプライシング、短期スワップの割引、LBO シニアマージンの参照 |

OIS TONA カーブは、ショートレート構築において JPY LIBOR を置き換えた。シニア LBO ローンおよび変動金利の事業法人ファシリティは、TONA にマージンを上乗せして参照する。

### 中間 / ベリー

3 年物-7 年物の割引率構築には、JGB イールドカーブの補間または等価の OIS カーブ・ポイントが用いられる。多くの実務家は、より短いデュレーションのキャッシュフロー・ストリームを評価する場合でも、簡便のため 10 年物を単一のリスクフリー・アンカーとして用いる。

### 過去 ERP

| 方法論 | 読み取り値 |
|---|---|
| 長期ホライズンの算術超過リターン | 日本株式対 JGB の過去超過リターンは開始日によって実質的に変動する；長期間にわたり〜5-7% クラス、ただし留保あり |
| 幾何平均の長期ホライズン | 算術平均より低く、しばしば 1-2pp 低い |
| ローリングウィンドウ | バブル / バブル後期間の包含に対して極めて感応的 |

日本の過去 ERP は、1990  後のバブル調整が長期ウィンドウの推計を歪めるため、構造的に議論を呼ぶ。多くの日本のフェアネス・オピニオン実務家は、実務上の過去 ERP として 5-6% を用いる。

### インプライド ERP

インプライド ERP は、インデックス価格を予想配当またはフリーキャッシュフローの現在価値に等しくする割引率を解くことで導出される。

| 読み取り値 | 2026  クラス |
|---|---|
| TOPIX フォワード EPS からのインプライド ERP | BoJ の NIRP 解除以降に圧縮した；2026  半ばでは 4-5% クラスがもっともらしい |
| 検証可能性 | アナリストが BoJ データ + JPX インデックスのフォワード収益を用いて再計算可能 |
| 用途 | フォワードルッキングな割引率構築；四半期末のリフレッシュ |

インプライド ERP と過去 ERP は、しばしば 100-200bp 乖離する。実務家は通常、一方にアンカーし、もう一方で感応度テストを行う。

## ベータの出典

| 出典 | 読み取り値 |
|---|---|
| 市場インデックスとしての TOPIX | 日本のベータ回帰の標準的な市場インデックス |
| 回帰ウィンドウ | 通常 5  年の月次または 2  年の週次；いずれも一般的 |
| Bloomberg / Refinitiv 調整済みベータ | 標準的なデータ端末の出典；Blume の公式（0.67 × 生ベータ + 0.33 × 1.0）で調整 |
| Damodaran のセクターベータ | [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF framework]] リファレンスと相互チェック；非上場 / IPO 前バリュエーションに有用 |
| ボトムアップ・ベータ | ピアセットの中央値アセットベータから再レバレッジ；非公開ターゲットに推奨 |

### 日本固有のベータの論点

- 持ち合いの影響は、共通ショックが相関したステークを連動させて動かすため、計測されるベータを減衰させうる
- TOPIX のセクター集中（例：銀行、自動車、エレクトロニクス）は、TOPIX が S&P 500  ほど分散されていないことを意味する — セクター・ティルトが重要となる
- 外国人投資家のフローは、変曲点近辺で短期ウィンドウのベータを増幅または減衰させうる
- 小型株上場企業のベータはよりノイズが多く信頼性に欠ける；ボトムアップ推計が推奨される

## カントリーリスク・プレミアム

| 読み取り値 | クラス |
|---|---|
| ソブリン格付 | 日本は高位の投資適格 |
| 準備通貨の地位 | 円は主要な準備通貨の一つ |
| カントリーリスク・プレミアム | 多くの実務家のフレームワークにおいて日本では最小〜ゼロ |
| ソブリン CDS | 利用可能だが取引が薄い |

新興市場のバリュエーションとは対照的に、日本のカントリーリスク・プレミアムは通常、別途適用されない。例外は、制度的な一貫性のためにすべての非米国ターゲットに一律のカントリーリスク上乗せを適用する一部のクロスボーダー M&A フレームワークである。

## 東証プライム大型株 WACC レンジ（目安）

| セクター | 目安の WACC クラス（2026） |
|---|---|
| メガバンク（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]]） | 株主資本側で 7-9% / グループブレンドで 4-6% |
| 商社（[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding-heavy]]） | 6-8% |
| 通信（例：NTT、KDDI） | 5-7% |
| 上場不動産デベロッパー | 5-7% |
| 成熟した産業大型株 | 6-8% |
| 東証プライム中型株（中央値） | 7-10% |
| 東証スタンダード / より小規模 | 8-12%（非流動性 / サイズプレミアム） |

これらのレンジはクラス記述子であり、企業固有の値ではない。常に当該主体の資本構成、ベータ、クレジットスプレッド、実効法人税率で確認すること。

## 中型株 / 小型株の調整

| 調整 | 方向 |
|---|---|
| サイズプレミアム | より小規模な上場銘柄に +1.0-3.0pp（学術文献；サンプル期間に依存） |
| 非流動性プレミアム | 取引の薄い銘柄に +0.5-2.0pp |
| 支配株主構造 | 少数株主がガバナンスリスクに直面する場合に +0.5-1.5pp |
| 単一事業への集中 | 可変；ベータまたは非対称なシナリオウェイティングに反映 |
| 情報の不透明性 | 可変；より高いインプライド ERP に反映 |

日本の小型株のサイズプレミアムのエビデンスはまちまちであり、実務家は強いコンセンサスなしに 1-3pp のレンジを用いる。非上場ターゲットについては、割引率ではなく価値に対して非公開企業の非流動性ディスカウント（しばしば 20-30%）が適用される。

## 負債コスト負債コストは、シニア、劣後、およびその他の利付負債の税引後加重コストである。

| レイヤー | 2026  プライシング参照 |
|---|---|
| メガバンク・シニア事業法人ローン | TONA + マージン；投資適格マージンは 2022,  前に圧縮し 2022  後に拡大 |
| 公募債（投資適格） | JGB + クレジットスプレッド；NIRP 正常化後に拡大 |
| LBO シニアローン | TONA + マージン；プライシングクラスについては [[finance/japan-leveraged-buyout-economics|LBO economics]] を参照 |
| メザニン | オールインで中〜高の一桁台の利回り |
| 劣後資本（銀行 / 保険会社） | 損失吸収 / 規制資本分類のためのより高いクーポン |

実効税率は、当該主体の実効税率に応じて調整された、法定の〜30% の日本の法人税率を適用する。

## 2024  以降の BoJ フロアシステムの影響

[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]] は、ショートエンドの調達コストを構造的に押し上げた。

| チャネル | 影響 |
|---|---|
| 変動金利ローンのマージンベース | TONA アンカー；フロアシステムが TONA をニアゼロから押し上げた |
| シニア LBO プライシング | 変動金利ベースが押し上げられた；シニア負債の総コストがフロアの上昇とともに上昇 |
| 銀行調達コスト | 預金金利競争および調達コストの正常化 |
| 不動産ファイナンス | [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR framework]] のアンダーライティング参照が押し上げられた |
| 事業法人 WACC | 負債コスト構成要素の控えめな上方シフト |

このレートフロアの上昇は、WACC フォーミュラを通じて、また OIS カーブにおけるフォワードレート予想を通じて複合的に効く。10 年物 JGB のアンカーは YCC 期のピンから実質的に上昇したが、その経路は非線形であり政策依存である。

## バリュエーションへの帰結

WACC の 100bp の上昇は、ターミナルバリューのウェイトに応じて、長デュレーション DCF の株主価値を通常 15-25% 減少させる。[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate sensitivity]] については、キャップレートの 25bp の変動が NAV を 5-10% シフトさせうる。したがって NIRP 後の正常化の経路は、2026 における日本の事業法人および不動産分析にとって、最もレバレッジの効くバリュエーションの問いである。

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
