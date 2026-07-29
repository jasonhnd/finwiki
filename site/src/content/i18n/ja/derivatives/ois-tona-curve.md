---
source: derivatives/ois-tona-curve
source_hash: fb069097bbadc57a
lang: ja
status: machine
fidelity: ok
title: "OIS TONA カーブと円ディスカウンティング"
translated_at: 2026-07-29T19:20:00.000Z
---

# OIS TONA カーブと円ディスカウンティング

## TL;DR

円オーバーナイト・インデックス・スワップ (OIS) は、一方の当事者が一定のテナーにわたり固定金利を支払い、相手方が同期間の日次 Tokyo Overnight Average Rate (TONA) の幾何 (複利) 平均を支払う OTC 金利デリバティブである。TONA は日銀が公表する無担保オーバーナイト・コール取引の出来高加重平均であり、グローバルな IBOR 移行の下で円通貨の指定リスクフリーレート (RFR) とされている。

パネル銀行による円 LIBOR は 2021 年十二月後に終了し、合成 1M、3M、6M 円 LIBOR は 31 日（2022 年十二月）をもって恒久的に停止した。TONA は円のオーバーナイト RFR であり、OIS の原指標となる。ただし、ディスカウンティングは契約、担保、CCP ごとに異なり、通貨や商品名だけから断定してはならない。

FinWiki にとって、OIS-TONA カーブは、円デリバティブの評価と政策期待分析に利用し得る入力である。その構築と利用は、選択する商品、担保、清算、モデルによって決まる。

## Wiki route

本エントリは [[derivatives/INDEX|derivatives index]] の下に位置する。より長期のテナーカーブについては [[derivatives/japan-irs-market]] と、JGB が含意する金利カーブについては [[derivatives/jgb-futures-curve]] と、OIS カーブがクロスカレンシー・ファンディングとどう相互作用するかについては [[derivatives/yen-basis-swap-market]] と照らして読むこと。基底にある TONA 現金メカニズムは [[money-market/call-market-structure]]、日銀の政策運営は [[money-market/boj-open-market-operations]] である。

## TONA — 基底レート

TONA は、無担保オーバーナイト・コール取引に基づき日本銀行が日次で算出・公表する:

| 要素 | 詳細 |
|---|---|
| 正式名称 | Tokyo Overnight Average Rate (無担保コールオーバーナイト物加重平均レート)。 |
| 算出者・公表者 | 日本銀行。 |
| 基底取引 | 日銀統計に報告される適格な無担保オーバーナイト・コール取引。 |
| 算出方法 | 日銀が公表する出来高加重平均金利。 |
| 公表 | 同日の午後 5:15 頃に速報、翌営業日の午前 10:00 頃に確報。 |
| リセット | 日次; レート自体に内在する期間構造はない。 |
| 通貨・コンベンション | 日本円; 円マネーマーケットではコンベンション上 ACT/365 日数計算。 |

Source: ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm]

TONA は、日本円金利指標に関するクロス・インダストリー委員会 (日銀・FSA が参加して招集された官民の組織) が調整した IBOR 移行の下で、指定 RFR として円 LIBOR を置き換えた。この移行は、通貨ごとに RFR を採用するという金融安定理事会 (FSB) の勧告に従ったものである。

TONA は、日銀が公表する統計作成手続に基づき、報告された無担保オーバーナイト・コール取引から算出される。頑健性、取引量、準備預金政策への感応度を評価する場合は、ここで推定せず、日銀の方法論と日付付きの出来高データを用いるべきである。

## LIBOR 廃止後の移行

円 LIBOR 移行は協調的なタイムラインに沿って進行した:

| 年 | 出来事 |
|---|---|
| 2017 | 英 FCA が 2021末までの LIBOR 停止を公表。 |
| 2018 | 日本円金利指標に関するクロス・インダストリー委員会が日銀 / FSA / 業界の参加の下で発足。 |
| 2018–2021 | 新規の円スワップ・ローン取引の TONA 参照への移行; 既存の円 LIBOR 契約は ISDA 2020 Fallback Protocol を通じて修正またはフォールバック対応。 |
| 2021 末| 円 LIBOR が代表性ベースで停止。一部の既存 1M、3M、6M テナー向けに、wind-down のブリッジとして合成円 LIBOR (FCA 管理、非代表性) を導入。 |
| 31 日（2022 年十二月） | 合成 1M、3M、6M 円 LIBOR が恒久的に停止。 |
| 30 日（2024 年十二月） | ユーロ円 TIBOR が最後に公表された。日本円 TIBOR は引き続き公表されている。 |

Sources: ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making] ^[source:https://www.jbatibor.or.jp/english/news/tibor_18.html] ^[source:https://www.jbatibor.or.jp/english/reform/]

該当する円 LIBOR デリバティブには、契約文書に定めるフォールバックが適用される。日本円 TIBOR 商品と TONA 商品は現在も併存している。

## 日銀の政策金利トランスミッション

OIS-TONA カーブは、カーブのテナーにわたる日銀オーバーナイト金利の期待を最も直接的に表現する市場である:

| 期間 | 解釈上の限界 |
|---|---|
| 短期 | 固定 OIS 金利は、正確な利息計算期間における複利オーバーナイト金利の予想値に、契約上・市場上のプレミアムを加えたものを反映する |
| 日銀会合をまたぐ期間 | 日付付きの会合決定と相場を比較して分析できるが、モデルなしに直接的な確率とはならない |
| 長期 | 一つのパー金利だけでは、フォワード期待、タームプレミアム、担保、流動性の影響を分離できない |

Source: ^[source:https://www.boj.or.jp/en/mopo/outline/index.htm]

特定年限の流動性、会合確率の含意、政策決定後の再価格付けを論じるには、日付付きの OIS 相場と明示したモデルが必要である。

OIS-TONA と政策金利ガイドラインの関係は以下の通り:

- 政策金利ガイドライン (ターゲット近辺の無担保オーバーナイト・コールレート) は、TONA が日次でトラックするゼロ近辺のフロアを設定する。
- OIS フォワードレートは、各テナーにわたって日銀が政策金利をどこに設定するかの確率加重期待を織り込む。
- 同ホライズンにおける観測された TONA と含意される OIS フォワードの差は、MPM 間の政策期待のリプライスを明らかにする。

政策運営レイヤーについては [[financial-regulators/boj-monetary-policy]] (存在する場合) と [[money-market/boj-open-market-operations]] を参照; 本エントリはデリバティブによる表現を扱う。

## OIS カーブの構築

市場実務家は円 OIS-TONA カーブを以下のように構築する:

| 例示的な手順 | 契約・データに依存する入力 |
|---|---|
| 1. フィキシング | 日銀公表の TONA 観測値と、取引のカレンダーおよび観測慣行 |
| 2. 市場商品 | カーブ構築者が利用できる、日付付きの執行可能または検証済み OIS 入力 |
| 3. キャッシュフロー生成 | 支払日、複利計算、ルックバックまたはシフト、日数計算、営業日規則 |
| 4. ブートストラップ | 選択した商品の価格を再現するディスカウントファクターを解く |
| 5. 補間 | 文書化された方法を適用し、単調性、感応度、サンプル外の商品を検証する |

Sources: ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm] ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

これは例示的な手順であり、すべての提示年限が存在することや、すべての機関が同じ補間法を用いることを主張しない。得られたカーブは次の用途に用いられ得る。

- 新規 OIS 取引をパーでプライスする;
- 担保付円スワップの将来キャッシュフローをディスカウントする (LIBOR 廃止後 2010に採用された「OIS ディスカウンティング」コンベンション);
- CSA 担保付円エクスポージャーの現在価値 (PV) を算出する;
- JSCC 清算の円 IRS ポジションを時価評価する (JSCC は円清算商品に TONA-OIS ディスカウンティングを用いる)。

非担保または異なる担保の取引については、ディスカウントカーブはファンディング評価調整 (FVA) によって、あるいは異なる担保レートカーブへの切り替えによって調整される。これが 2010以降に標準となった「マルチカーブ・フレームワーク」である。

## 円 IRS のスワップレート・ディスカウントカーブ

円 IRS 市場 ([[derivatives/japan-irs-market]] 参照) は、プライシングにおいてデュアルカーブである:

| カーブ | 目的 |
|---|---|
| TONA ベースのカーブ | 選択した方法に基づき、複利 TONA のキャッシュフロー予測に利用できる |
| ディスカウントカーブ | 担保、清算、資金調達、契約条件によって決まる。該当する円担保取引では TONA ベースとなり得る |
| 日本円 TIBOR フォワードカーブ | 現行の TIBOR 参照キャッシュフローの予測に利用できる。ディスカウンティングは取引ごとに異なる |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jbatibor.or.jp/english/reform/]

プロジェクションとディスカウンティングは、変動指標だけから推定せず、実際の取引、CSA、CCP 規則に対応付ける必要がある。

## 市場の厚みと流動性

引用した公式資料は、恒久的な年限別ビッド・アスク表を示さず、JSCC がすべての円 OIS のうち一定割合を清算することも裏付けていない。流動性評価には、商品と年限の範囲を明示した日付付きの執行可能相場、取引件数、または取引施設統計が必要である。

## 公開参加者データの限界

ここで引用する公式資料は、現在の円 OIS ディーラー順位、市場シェア、ブローカー一覧、すべてのエンドユーザーに共通する取引方向を公表していない。これらの主張には、日付付きの取引施設データまたは機関別の開示が必要である。

## TONA 先物 (隣接する上場商品)

OSE は TONA 3ヶ月物先物を上場しており、取引所取引・JSCC 清算の短期テナー TONA 期待へのエクスポージャーを提供することで OTC OIS 市場を補完する。仕様:

| 要素 | 詳細 |
|---|---|
| 原資産 | 契約参照期間にわたる 3ヶ月複利 TONA。 |
| クォーテーション | 100.00 マイナス先物レート; 標準的な短期金利先物コンベンション。 |
| 最小変動幅 | 現行の JPX 商品仕様で定義される。 |
| 決済 | 契約満期時の参照 3ヶ月 TONA 複利に対して現金決済。 |
| 清算 | JSCC。 |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/interest-rate/3m-tona-futures/01.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/futures/product.html]

JPX は、この商品を「100 から三か月複利 TONA 金利を差し引いた値」に対する現金決済型のエクスポージャーとして定義している。成長性や相対流動性を論じるには、日付付きの JPX データと比較可能な OTC データが必要である。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Call Money Market Data (TONA / TONAR publication).
- Bank of Japan: Money Market surface and statistical releases.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: public reports on TONA adoption and IBOR transition.
- Japan Securities Clearing Corporation: JPY IRS / OIS clearing rules and TONA futures clearing.
- Japan Exchange Group / Osaka Exchange: TONA 3-Month Futures contract specifications.
- Financial Services Agency: IBOR transition supervisory guidance.
- ISDA: 2020 IBOR Fallbacks Protocol and Supplement.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- BIS: Semi-annual OTC derivatives statistics.
