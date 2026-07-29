---
source: real-estate-finance/j-reit-dividend-yield-vs-jgb-spread
source_hash: 0c501da1fd4956a2
lang: ja
status: machine
fidelity: ok
title: "J-REIT 分配金利回りと JGB スプレッド"
translated_at: 2026-07-29T23:56:42+09:00
---
# J-REIT 分配金利回りと JGB スプレッド

## 要約

J-REIT 分配金利回りから同日付の 10 年 JGB 利回りを差し引いたスプレッドは有用なポジショニング指標だが、指数構成、価格日、分配金が実績か予想かで結果が変わる。このため本ページは、裏付けのない恒久的な「歴史レンジ」や 2026 年予想レンジを示さない。再現時は、銘柄または指数を明示した J-REIT 利回り系列と [MoF の JGB 過去利回り系列](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm)を同じ観測日で使う。これは方法論であり、投資助言ではない。

## ウィキ上の位置づけ

この項目は[[real-estate-finance/INDEX]]の配下に置かれる。上場 J-REIT の構造マップは[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、J-REIT 分配金利回りに流れ込む資産側の利回りフロアの読み方は[[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression]]、クロスボーダー需要の側面は[[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign-investor ownership]]、シニア債務コスト側は[[real-estate-finance/bank-commercial-real-estate-lending-japan|bank CRE lending]]、非上場の代替は[[real-estate-finance/real-estate-private-credit-japan|private credit]]と併せて読む。金利側のアンカーは、短期金利と YCC 巻き戻しの詳細が[[money-market/japan-money-market]]、BoJ FSR / FSA のスプレッド論評が[[banking/INDEX|banking index]]にある。生命保険会社の ALM トレードオフは[[insurance/japan-life-insurance-alm-overview]]につながる。長文の構造金融の読み方は[[finance/INDEX]]に、プライベートエクイティ / プライベートファイナンスの側面は[[finance/japan-private-equity-fund-structure-matrix]]にある。

## スプレッドの定義

表の根拠（2026-07-29 確認）：[JPX 東証 REIT 指数ファクトシート](https://www.jpx.co.jp/english/markets/indices/factsheets/files/e_102_fac2_REIT.pdf)、[ARES J-REIT データ](https://www.ares.or.jp/action/jreit/)、[MoF JGB 過去利回り](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm)。

| 用語 | 定義 |
|---|---|
| 明示した J-REIT 分配金利回り系列 | 構成銘柄、加重方法、価格日、実績または予想の規約を文書化した特定の指数レベルまたは銘柄レベルの分配金利回り。 |
| 10年 JGB 利回り | MoF / BoJ データによる基準10年日本国債利回り。 |
| スプレッド（bp） | 明示した J-REIT 利回りから同日付の10年 JGB 利回りを差し引いたベーシスポイント。 |
| 指数の算出方法 | 指数提供者が文書化した算出方法を使う。独自に作った単純平均または加重平均を「TSE REIT Index 分配金利回り」と呼ばない。 |
| セクターミックス調整 | 各時点の指数またはポートフォリオを実際の構成銘柄から再計算する。オフィス / 物流 / ホテルの利回り順序は固定しない。 |

正確な分配金利回りは、含める J-REIT 銘柄（TSE REIT Index 全体かサブ指数か）と分配金の扱い（過去12か月か、将来12 予想か）に依存する。

## 歴史的スプレッドレンジのマップ

表の根拠（2026-07-29 確認）：[日銀の金融政策・統計](https://www.boj.or.jp/en/mopo/index.htm)、[MoF JGB 利回り](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm)、[ARES J-REIT データ](https://www.ares.or.jp/action/jreit/)。以下はレジームと再現可能な比較ルールを記録し、作成したレンジ推定値は使わない。

| 時代 | 金融政策の文脈 | 必要なスプレッド計算 |
|---|---|---|
| NIRP 前（2015 年まで） | マイナス金利導入前の正金利レジーム | 同日付の明示した J-REIT 利回り－MoF 10 年 JGB 利回り |
| NIRP / YCC（2016～2023 年） | マイナス短期金利とイールドカーブ・コントロール | 同じ計算を行い、政策日付を明示 |
| NIRP 解除（2024 年以降） | マイナス金利政策終了、長期金利の市場性が再び重要 | 実績分配と予想分配を接続しない |
| 現在の観測 | 予想レンジを主張しない | 指数、利回り規約、価格日、JGB 日付、計算結果を記録 |

## スプレッドのメカニクス

このスプレッドは、観測または文書化された二つの利回り系列の算術差にすぎない。

```
Spread = J-REIT dividend yield - 10Y JGB yield
```

これは株式リスクプレミアム、資産キャップレート、レバレッジ、流動性または期待成長率の恒等式ではない。これらの変数は別途検証できるが、このスプレッドの分解から復元することはできない。

表の根拠（2026-07-29 確認）：[ARES](https://www.ares.or.jp/action/jreit/)が明示した J-REIT データ、[MoF](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm)が同日付の国債比較対象を提供する。以下は加算分解ではなく、証拠境界を示す。

| 別個の分析課題 | 必要な証拠 |
|---|---|
| 不動産市場利回り | 対応する鑑定または取引証拠を使う。上場商品の分配金利回りは資産キャップレートではない。 |
| レバレッジとの関連 | 発行体の負債、資産、キャッシュフロー、分配データを使い、因果設計を明示する。資産利回りが債務コストを上回る観測だけでは、投資口利回りへの効果は立証できない。 |
| 流動性との関連 | 日付を揃えたビッド・アスク・スプレッド、売買回転率、市場インパクトを使う。JGB スプレッド自体は流動性を測らない。 |
| 分配と税務 | 分配可能利益の 90% 超を分配することは法定導管性要件の一つであり、J-REIT 税務全体の説明でも、それ単独で再投資を制限する規則でもない。 |

## NIRP 後の圧縮パターン

NIRP / YCC 期の圧縮で観察された点は次のとおり。

表の根拠（2026-07-29 確認）：[日銀の金融政策履歴](https://www.boj.or.jp/en/mopo/index.htm)が政策レジームを確定する。J-REIT バリュエーションの主張には、日付を一致させた ARES または発行体の価格・分配観測が必要であり、以下は条件付きに読む。

| 効果 | メカニズム |
|---|---|
| 10年 JGB がゼロ近辺に固定 | YCC バンドが10年 JGB を狭い管理レンジに保った。 |
| 利回り追求仮説 | 日付を合わせた JPX 投資部門別フローと J-REIT 利回り低下が重なったかを検証する。政策レジームだけでは、国内保険・年金・個人の因果を立証できない。 |
| 外国人キャリー仮説 | 同時期の JPX 外国人売買、同日付の J-REIT リターン、実行可能な FX ヘッジ入力を併せて検証する。自動的な利回り圧縮効果は仮定しない。 |
| スプレッド計算の確認 | レジーム名から拡大を推定せず、同日付の JGB 利回りが選択した J-REIT 利回りより速く低下したかを計算する。 |
| 価格対 NAV の確認 | 銘柄を明示し、日付を合わせた価格と発行体公表 NAV を比較する。これらの観測なしに 2020～2022 年の市場全体のプレミアムや「行き過ぎ」を主張しない。 |

2023 年以降の YCC 巻き戻しを検証する際は、次を確認する。

- 同日付の 10 年 JGB 利回りの変化。
- 銘柄または指数を明示した J-REIT の価格と分配金利回りの変化。
- 方向を仮定せずに計算したスプレッド。
- NAV ディスカウントを主張する場合の発行体公表 NAV と市場価格。

## BoJ YCC 巻き戻しの影響

YCC 巻き戻しが 2023 年以降のスプレッドリセットの要因かを検証する際は、日付入りの入力を使う。

| YCC 段階 | J-REIT 対 JGB スプレッドへの影響 |
|---|---|
| 厳格な YCC（-0.1%の政策金利、10年 JGB 上限） | 政策日を記録し、同日付の JGB に対する明示した J-REIT 利回り上乗せを計算する。 |
| YCC バンド拡大（2022 - 2023） | 各政策観測日でスプレッドを再計算し、JGB レンジ拡大だけから圧縮を仮定しない。 |
| YCC 巻き戻し / NIRP 解除（2024） | 市場 JGB 利回りと同一規約の J-REIT 利回りで再計算し、方向を計算結果として扱う。 |
| YCC 後の正常化（2025+） | 定着レンジを仮定しない。銘柄または指数を明示した利回り系列と同日付の JGB からスプレッドを計算し、同一手法で作成した NIRP 前系列と比較する。 |

YCC メカニズムと政策金利経路の詳細は[[money-market/japan-money-market|Japan money market]]、制度レベルのスプレッド論評は[[banking/INDEX|BoJ FSR]]と併せて読む。

## 生命保険会社の J-REIT 対 JGB 配分トレードオフ

生命保険会社の配分トレードオフ仮説を検証するには、まず各社固有の負債デュレーション、数理前提、通貨、規制資本上の扱い、投資マンデートを確認する。これらの開示なしに、特定年限の JGB が当該保険会社のヘッジである、または J-REIT が同じ意思決定枠にあるとは推定しない。

表の根拠（2026-07-29 確認）：[日銀金融システムレポート](https://www.boj.or.jp/en/research/brp/fsr/index.htm)が金融機関の文脈、[MoF](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm)が JGB カーブを提供する。「配分の傾き」はフレームワークであり、観測された保険会社取引ではない。

| 期間 | JGB の観測 | J-REIT の観測 | 配分仮説 / 確認事項 |
|---|---|---|---|
| NIRP 前 | 日付入りの超長期 JGB カーブを測定 | 明示した J-REIT の利回りとボラティリティを測定 | バランス配分を仮定せず、生保開示または観測フローを確認する。 |
| NIRP / YCC ピーク | 日付入り JGB カーブを記録 | 同日付の利回り上乗せとボラティリティを計算 | 生保開示または JPX 区分フローが増えたかを検証し、スプレッドだけから傾斜を推定しない。 |
| YCC 後の正常化 | 日付入りの超長期 JGB 変化を記録 | 同日付のスプレッドとリスク指標を再計算 | JGB への再配分や J-REIT 買いペース低下を断定せず検証する。 |
| 現在の観測 | 現在の超長期 JGB カーブから測定 | 明示した J-REIT 利回り系列から測定 | 配分予想を主張しない |

このトレードオフは分析仮説である。J-REIT 二次市場流動性への影響を立証するには、日付入りの生保開示または区分フローと、同期間の市場データが必要である。金利レジームだけでは再配分の証拠にならない。生命保険会社の ALM ロジックの詳細は[[insurance/japan-life-insurance-alm-overview]]にある。

## その他の国内買い手の読み方

表の根拠（2026-07-29 確認）：[JPX 投資部門別統計](https://www.jpx.co.jp/english/markets/statistics-equities/investor-type/index.html)が集計売買区分を示す。感応度の説明は分析であり、名義売買から受益所有を推定しない。

| 買い手 | スプレッド感応度 |
|---|---|
| 年金基金（DB / DC） | マンデート、配分、フローデータで仮説を検証する。投資家区分だけからリターン追求枠を推定しない。 |
| 個人投資家（NISA、証券口座） | 口座レベルまたは区分フローと同日付価格で利回り感応度を検証し、絶対利回りがスプレッドを上回って重要だと仮定しない。 |
| 地域銀行 | 有価証券ポートフォリオ開示、資本規制、取引を使い、J-REIT と JGB 配分が代替関係にあったかを検証する。 |
| 信託銀行 | 各社開示を用い、自己勘定ポジションと受託・名義保有を分ける。 |
| 外国投資家 | 日付入りフロー、リターン、通貨、ヘッジデータでスプレッドと FX キャリー仮説を検証する。[[real-estate-finance/j-reit-foreign-investor-ownership]]を参照。 |

## セクターミックス感応度

セクター構成は利回り比較の交絡要因になり得るため、各検証で日付入り構成ウェイトと利回り規約を保持する。

表の根拠（2026-07-29 確認）：[JPX 東証 REIT 指数ファクトシート](https://www.jpx.co.jp/english/markets/indices/factsheets/files/e_102_fac2_REIT.pdf)、[JPX 上場銘柄一覧](https://www.jpx.co.jp/english/equities/products/reits/issues/index.html)、各発行体の分配開示。利回り順序は固定されず、比較日ごとに再計算する。

| J-REIT セクター | 日付入り比較の確認事項 |
|---|---|
| 総合型 | 当該銘柄の利回りを計算し、現在の資産スリーブ比率を明示する。 |
| オフィス特化 | 同じ価格日と分配金規約を使い、オフィスのキャップレートだけから利回りを推定しない。 |
| 物流特化 | 現在の利回りと分配前提を測定し、オフィスに対する上乗せを仮定しない。 |
| 住宅特化 | 現在の利回り、稼働率、分配前提を測定し、安定性を前提にしない。 |
| ホテル特化 | 現在の利回りと、変動収入を含む当該期間の分配ベースを測定する。 |
| 商業施設特化 | 固定的な利回りクラスを割り当てず、現在の利回りとテナント / 賃貸借集中度を測定する。 |
| ヘルスケア / 特化型 | 銘柄を明示して測定する。ニッチ資産であることは利回り順序を決めない。 |

セクター構成が異なる二つのサブ指数を比較するには、文書化した再加重を行うか、構成差を明記する。この表はセクターの因果効果を主張しない。

## 外国人投資家のキャリー仮説

外国人投資家の J-REIT キャリーを検証する際は、次の要素を使う。

表の根拠（2026-07-29 確認）：[日銀統計](https://www.boj.or.jp/en/statistics/index.htm)、[MoF JGB 利回り](https://www.mof.go.jp/english/policy/jgbs/reference/interest_rate/index.htm)、明示した J-REIT 分配・価格系列。ヘッジコストは同一通貨・同一テナーの実行可能な見積りまたは文書化された見積りを使う。

| 構成要素 | 読み方 |
|---|---|
| 現地通貨利回り | J-REIT 分配金利回り。 |
| FX ヘッジ入力 | 投資家の実際の通貨、期間、商品についての日付入り実行可能な見積りまたは文書化された見積り。 |
| 単純化したヘッジ後利回り | 現地通貨利回りから文書化したヘッジ入力を差し引く。除外したベーシス、マージン、税、実装コストを明示する。 |
| 単純化したヘッジ後スプレッド | 単純化したヘッジ後利回りから、投資家の通貨・期間に対応する文書化されたベンチマークを差し引く。 |

測定した FX ヘッジコストが同日付の現地通貨利回り上乗せを上回る場合、単純化したヘッジ後キャリー計算は魅力を失い得る。外国人フローが変化したかは同時期の JPX データで検証し、アンヘッジは別個の FX リターン・シナリオとして扱う。外国人保有とフローの証拠境界は[[real-estate-finance/j-reit-foreign-investor-ownership]]で整理している。

## ストレス / バリュエーション指標としてのスプレッド

想定される用途はいずれも追加証拠を要する仮説である。

| 用途 | 解釈 |
|---|---|
| 歴史的相対価値仮説 | 一貫した手法で作成したスプレッドを同じ系列の過去値と比較し、その後のリターンを検証する。「高い」「低い」を直接「割安」「割高」に置き換えない。 |
| リスク補償分析 | 要求収益率は別途モデル化する。分配金利回りと JGB の差は、恒等式として株式リスクプレミアムを推計するものではない。 |
| BoJ 政策スタンスシグナル | スプレッドの変化を日付入りの政策・イールドカーブ事象と照合し、連動を前提にしない。 |
| 外国人フロー仮説 | 同時期の JPX フローとリターンを検証する。スプレッド変化だけでは外国人の流入・流出を特定できない。 |
| 帰属仮説 | 発行体ファンダメンタル、不動産データ、金利、投資家フローを特定したモデルで使う。スプレッドだけからファンダメンタル主導またはフロー主導と分類しない。 |

これらの読み方はいずれも機械的ではない。スプレッドは多くの入力の一つである。

## 関連項目

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/jrei-foreign-investment-tax-treatment]]
- [[banking/INDEX]]
- [[banking/regional-bank-consolidation-pattern]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/japan-money-market]]
- [[finance/INDEX]]
- [[finance/japan-private-equity-fund-structure-matrix]]
- [[finance/japan-private-equity-operating-model]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## 出典

- ARES (Association for Real Estate Securitization): J-REIT data and TSE REIT Index dividend yield series.
- BoJ: 10Y JGB yield time series and policy-rate path data.
- MoF: JGB yield reference data.
- JPX: TSE REIT Index methodology and constituent disclosures.
- BoJ Financial System Report: spread and yield-environment commentary.
- JREI: Real Estate Investor Survey for underlying cap-rate context.
