---
source: derivatives/ois-tona-curve
source_hash: 85b13d2473defdba
lang: ja
status: machine
fidelity: ok
title: "OIS TONA カーブと円ディスカウンティング"
translated_at: 2026-06-18T23:33:48.311Z
---

# OIS TONA カーブと円ディスカウンティング

## TL;DR

円オーバーナイト・インデックス・スワップ (OIS) は、一方の当事者が一定のテナーにわたり固定金利を支払い、相手方が同期間の日次 Tokyo Overnight Average Rate (TONA) の幾何 (複利) 平均を支払う OTC 金利デリバティブである。TONA は日銀が公表する無担保オーバーナイト・コール取引の出来高加重平均であり、グローバルな IBOR 移行の下で円通貨の指定リスクフリーレート (RFR) とされている。

LIBOR 廃止後 (円 LIBOR は 2021 に恒久停止、合成円 LIBOR の段階的廃止は 2023に完了)、TONA 参照の OIS は円デリバティブの標準ディスカウントカーブであり — OIS 自体のプライシングのみならず、担保付円 IRS ([[derivatives/japan-irs-market]] 参照)、円・米ドルベーシススワップ ([[derivatives/yen-basis-swap-market]] 参照)、円建て CCP 清算取引、円現金で差し入れる CSA 担保付 OTC ブッキングで用いられるディスカウントファクターとしても機能する。

FinWiki にとって、OIS-TONA カーブは日銀の短期金利政策期待のプライス表現であり、あらゆる円建てデリバティブの基底にあるディスカウントカーブであり、直近の日銀金利決定に対する最も直接的に可視化された市場の読みである。

## Wiki route

本エントリは [[derivatives/INDEX|derivatives index]] の下に位置する。より長期のテナーカーブについては [[derivatives/japan-irs-market]] と、JGB が含意する金利カーブについては [[derivatives/jgb-futures-curve]] と、OIS カーブがクロスカレンシー・ファンディングとどう相互作用するかについては [[derivatives/yen-basis-swap-market]] と照らして読むこと。基底にある TONA 現金メカニズムは [[money-market/call-market-structure]]、日銀の政策運営は [[money-market/boj-open-market-operations]] である。

## TONA — 基底レート

TONA は、無担保オーバーナイト・コール取引に基づき日本銀行が日次で算出・公表する:

| 要素 | 詳細 |
|---|---|
| 正式名称 | Tokyo Overnight Average Rate (無担保コールオーバーナイト物加重平均レート)。 |
| 算出者・公表者 | 日本銀行。 |
| 基底取引 | 短資会社を通じて媒介され日銀に報告される無担保オーバーナイト・コール市場取引。 |
| 算出方法 | 各営業日における適格オーバーナイト取引の出来高加重平均。 |
| 公表 | 日銀が翌営業日 (T+1) に公表; 従来は TONAR / Tokyo Overnight Average Rate としても配信。 |
| リセット | 日次; レート自体に内在する期間構造はない。 |
| 通貨・コンベンション | 日本円; 円マネーマーケットではコンベンション上 ACT/365 日数計算。 |

TONA は、日本円金利指標に関するクロス・インダストリー委員会 (日銀・FSA が参加して招集された官民の組織) が調整した IBOR 移行の下で、指定 RFR として円 LIBOR を置き換えた。この移行は、通貨ごとに RFR を採用するという金融安定理事会 (FSB) の勧告に従ったものである。

TONA は実際の無担保オーバーナイト取引 ([[money-market/call-market-structure]] で詳述される同じ市場) を反映するため、LIBOR を終焉させた不正操作リスクに対して頑健である。ただし、日銀の政策運営には敏感である: 日銀の潤沢な準備預金政策がコール取引を抑制すると、TONA の出来高は縮小し、レートは一部の期間においてより薄くなり得る。

## LIBOR 廃止後の移行

円 LIBOR 移行は協調的なタイムラインに沿って進行した:

| 年 | 出来事 |
|---|---|
| 2017 | 英 FCA が 2021末までの LIBOR 停止を公表。 |
| 2018 | 日本円金利指標に関するクロス・インダストリー委員会が日銀 / FSA / 業界の参加の下で発足。 |
| 2018–2021 | 新規の円スワップ・ローン取引の TONA 参照への移行; 既存の円 LIBOR 契約は ISDA 2020 Fallback Protocol を通じて修正またはフォールバック対応。 |
| 2021 末| 円 LIBOR が代表性ベースで停止。一部の既存 1M、3M、6M テナー向けに、wind-down のブリッジとして合成円 LIBOR (FCA 管理、非代表性) を導入。 |
| 2023 | 合成円 LIBOR が停止。すべての円金利デリバティブが TONA を参照 (または、一部のケースでは、ターム・フィキシング市場向けに TIBOR)。 |
| 継続中 | TIBOR (Tokyo Interbank Offered Rate) は、ターム・フィックスを要する一部の円建てローン・債券商品向けに存続; D-TIBOR と Z-TIBOR は全国銀行協会 TIBOR 運営機関 (JBATA) が管理。 |

移行の結果: 円 IRS 市場、OIS 市場、CSA 担保付 OTC デリバティブは、いまや TONA を基底の変動参照・ディスカウントレートとして用いる。ISDA フォールバックを通じて移行された円 LIBOR デリバティブは、いまや TONA の後決め複利 + 固定の信用調整スプレッド (CAS) を参照する。

## 日銀の政策金利トランスミッション

OIS-TONA カーブは、カーブのテナーにわたる日銀オーバーナイト金利の期待を最も直接的に表現する市場である:

| テナー | OIS レートが表現するもの |
|---|---|
| 1W、1M、3M OIS | 次の 1–2 回の金融政策決定会合 (MPM) を通じた直近の日銀金利期待。 |
| 6M、1Y OIS | 今後 12 ヶ月にわたる MPM での利上げ / 利下げの可能性を含む、予想される日銀金利パス。 |
| 2Y、3Y、5Y OIS | 中期の政策パス; MPM の軌道に加え、小さなタームプレミアムを反映。 |
| 10Y、20Y、30Y OIS | 長期ホライズンの均衡金利期待 + タームプレミアム; 同テナーの IRS カーブより流動性が低い。 |

MPM 日付前後における 1Y または 2Y OIS レートの動きは、政策サプライズの最も注視されるシグナルである。2024 3月の日銀によるマイナス金利・YCC 脱却のレジーム転換後、OIS カーブは想定される金利正常化パスを反映して急速にリプライスした; その後の各 MPM 前後の OIS の動きは綿密に注視されている。

OIS-TONA と政策金利ガイドラインの関係は以下の通り:

- 政策金利ガイドライン (ターゲット近辺の無担保オーバーナイト・コールレート) は、TONA が日次でトラックするゼロ近辺のフロアを設定する。
- OIS フォワードレートは、各テナーにわたって日銀が政策金利をどこに設定するかの確率加重期待を織り込む。
- 同ホライズンにおける観測された TONA と含意される OIS フォワードの差は、MPM 間の政策期待のリプライスを明らかにする。

政策運営レイヤーについては [[financial-regulators/boj-monetary-policy]] (存在する場合) と [[money-market/boj-open-market-operations]] を参照; 本エントリはデリバティブによる表現を扱う。

## OIS カーブの構築

市場実務家は円 OIS-TONA カーブを以下のように構築する:

| ステップ | インプット |
|---|---|
| 1. スポット | 本日の TONA フィキシング (T-1 公表レート)、日銀政策ガイドラインにアンカー。 |
| 2. 短期 | インターディーラー・クォートからの 1W、2W、1M、2M、3M テナーの OIS レート。 |
| 3. 中期 | 6M、9M、1Y、18M、2Y、3Y の OIS レート。 |
| 4. 長期 | 流動性がクォートを支える範囲で、5Y、7Y、10Y、15Y、20Y、30Y の OIS レート。 |
| 5. ブートストラップ | 各インプット OIS レートがパーでプライスするようなディスカウントファクター・カーブ D(t) を解く; 前進的に反復。 |
| 6. スムージング | ディーラーのプライシングモデルと整合的なスムージング補間 (キュービックスプライン、単調キュービック、または対数ディスカウントの区分線形) を適用。 |

得られるディスカウントカーブ D(t) は以下に用いられる:

- 新規 OIS 取引をパーでプライスする;
- 担保付円スワップの将来キャッシュフローをディスカウントする (LIBOR 廃止後 2010に採用された「OIS ディスカウンティング」コンベンション);
- CSA 担保付円エクスポージャーの現在価値 (PV) を算出する;
- JSCC 清算の円 IRS ポジションを時価評価する (JSCC は円清算商品に TONA-OIS ディスカウンティングを用いる)。

非担保または異なる担保の取引については、ディスカウントカーブはファンディング評価調整 (FVA) によって、あるいは異なる担保レートカーブへの切り替えによって調整される。これが 2010以降に標準となった「マルチカーブ・フレームワーク」である。

## 円 IRS のスワップレート・ディスカウントカーブ

円 IRS 市場 ([[derivatives/japan-irs-market]] 参照) は、プライシングにおいてデュアルカーブである:

| カーブ | 目的 |
|---|---|
| TONA-OIS | ディスカウントカーブ — 将来キャッシュフローの PV に用いる。 |
| TONA フォワードカーブ | プロジェクションカーブ — 将来の TONA 変動レッグのリセットを予測するのに用いる。 |
| (歴史的) TIBOR フォワードカーブ | TIBOR 参照の既存 IRS 向け、1M / 3M / 6M TIBOR リセットの予測に用いる; PV は依然 TONA-OIS で行う。 |

このデュアルカーブ・フレームワークが意味するのは、TIBOR 変動の IRS であっても、取引が標準的な CSA 条件の下で円現金で担保される場合、ディスカウンティングには TONA-OIS カーブを用いるということである。TIBOR-TONA ベーシスは別途のベーシススワップ・クォート (TIBOR vs TONA OIS、bp 建て) に反映される。

## 市場の厚みと流動性

| テナー帯 | 流動性評価 |
|---|---|
| 1M–6M | 非常に流動的; タイトなビッド・アスク (典型的にサブ-1 bp)。 |
| 1Y–3Y | 流動的; 最も取引される MPM 期待のテナー。 |
| 5Y–10Y | 機関投資家フローには流動的; ビッド・アスクは典型的に 1–2 bp。 |
| 15Y–30Y | OIS 形態では TIBOR IRS や JGB 現物形態より流動性が低い; ビッド・アスクはより広い。 |

円 OIS の想定元本残高は、集計ベースで数兆円相当のマルチトリリオン規模である (BIS の OTC デリバティブ統計は円 IRS / OIS カテゴリ内で集計する)。JSCC は清算済み円 OIS の大部分を清算する; 非標準テナーやストラクチャード取引には非清算のバイラテラル OIS が存在する。

## ディーラー・メーカー

| 参加者 | 役割 |
|---|---|
| 日本のメガバンク証券系列 (MUFG Securities、SMBC Nikko、Mizuho Securities) | 円 OIS の主要メーカー; 国内銀行・保険・事業会社にサービス。 |
| グローバルディーラー (JPMorgan、Goldman、Citi、Deutsche、BNP、Barclays、HSBC) | 特にクロスボーダーフローと CCBS 隣接取引における両建てマーケットメーカー。 |
| 独立系証券会社 (Nomura、Daiwa) | 国内フランチャイズに加えクロスボーダー。 |
| インターディーラー・ブローカー (Tradition、BGC、ICAP、Tullett Prebon) | インディカティブなプライシングを提供し IDB フローを執行。 |
| エンドユーザー | 日本のメガバンク (財務ヘッジ)、地方銀行、生命保険、アセットマネージャー、事業会社、日銀政策にビューを取る海外勘定。 |

メガバンクのディーリング系列は現金マネーマーケットの仲介と交差する; 短資側については [[money-market/tanshi-company-business-model]] を、規制対象エンティティのレイヤーについては [[banking/japan-banking-license-tier-comparison-matrix]] を参照。

## TONA 先物 (隣接する上場商品)

OSE は TONA 3ヶ月物先物を上場しており、取引所取引・JSCC 清算の短期テナー TONA 期待へのエクスポージャーを提供することで OTC OIS 市場を補完する。仕様:

| 要素 | 詳細 |
|---|---|
| 原資産 | 契約参照期間にわたる 3ヶ月複利 TONA。 |
| クォーテーション | 100.00 マイナス先物レート; 標準的な短期金利先物コンベンション。 |
| ティック価値 | 契約ごとに定義; リテール・小口機関向けの小さな想定元本サイジング。 |
| 決済 | 契約満期時の参照 3ヶ月 TONA 複利に対して現金決済。 |
| 清算 | JSCC。 |

TONA 先物は流動性を増しているが、OTC OIS よりは依然小規模である。これは、ユーザーが OTC より取引所上場構造を選好する短期金利ヘッジに有用である。

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
