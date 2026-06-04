---
source: money-market/japan-torf-term-risk-free-rate
source_hash: 37030256cdbd98a8
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "TORF（東京ターム物リスク・フリー・レート）"
translated_at: 2026-06-05T00:00:00.000Z
---
# TORF（東京ターム物リスク・フリー・レート）

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。呼値ベースで信用感応的な対比については [[money-market/japan-tibor-benchmark-rate|TIBOR]] を、円リスク・フリー・レート体系がどう構築されたかについては [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform (TONA)]] を、TORFが算出される元となるデリバティブのインプットについては [[derivatives/ois-tona-curve|the OIS TONA curve]] をあわせて参照してください。監督上のアンカーは [[financial-regulators/fsa|the FSA]] です。

## TL;DR

TORF（東京ターム物リスク・フリー・レート）は、日本円の **フォワードルッキングなターム物リスク・フリー・レート** であり、**QUICK Benchmarks Inc.（QBS）** が毎営業日に算出・公表します。これは、その原資産が無担保コール翌日物金利、すなわち [[derivatives/ois-tona-curve|TONA]] である円金利デリバティブ（OIS）のデータから導出されます。実質的に、TORFは *翌日物、バックワードルッキング* なTONAを、借り手が利息期間の開始時点で見ることのできる *ターム物、フォワードルッキング* な固定値へと変換します。

TORFは、2021年末に公表が停止された **円LIBOR** の円後継金利の1つです。日本のポストLIBORのマルチレートの世界において、第3の参照タイプとして位置します。

- **[[money-market/japan-tibor-benchmark-rate|TIBOR]]** —— ターム物、呼値ベース、信用感応的。
- **[[derivatives/ois-tona-curve|TONA]]** —— 翌日物、取引ベース、ほぼリスク・フリー。
- **TORF** —— ターム物、リスク・フリー、TONA参照のOISデータから *導出* される。

FinWikiにとってTORFは「リスク・フリー・レートのターム版」です。TIBORに内包される銀行信用の成分なしに、ターム固定のフォワードルッキングな利便性を与えます。

## TORFが測るもの

| 要素 | 読み方 |
|---|---|
| 種別 | フォワードルッキングなターム物リスク・フリー参照金利。 |
| 運営者 | QUICK Benchmarks Inc.（QBS）。株式会社QUICKによって設立。 |
| 原資産 | 無担保コール翌日物金利（TONA）を参照する円OIS（オーバーナイト・インデックス・スワップ）の取引データ。 |
| 信用内容 | ほぼリスク・フリー —— TIBORが内包する銀行信用 / タームプレミアムをほとんど帯びていない。 |
| 方向 | フォワードルッキング：ターム金利が利息期間の *開始* 時点で確定する。 |
| 規制ステータス | TORFは金融商品取引法のもとで「特定金融指標」に、QBSは「特定金融指標算出者」に指定され、[[financial-regulators/fsa|FSA]] によって監督される。 |
| 通貨 | 日本円。 |

TORFは、リファレンス・バンクの判断（TIBOR）や翌日物現物取引のプール（TONA）からではなく、OISデータから構築されるため、独自の方法論上のニッチを占めます。下にある翌日物金利の *リスク・フリー* な性格をなお受け継ぐ *ターム* 金利です。

## TORF vs TONA vs TIBOR

| 性質 | TORF | TONA | TIBOR |
|---|---|---|---|
| 性質 | ターム物、フォワードルッキング。 | 翌日物、バックワードルッキング。 | ターム物、フォワードルッキング。 |
| 基礎 | TONA参照のOISデータから導出。 | 実際の無担保コール翌日物取引の出来高加重平均。 | 無担保ターム資金についてのリファレンス・バンクの呼値。 |
| 信用内容 | ほぼリスク・フリー。 | ほぼリスク・フリー。 | 銀行信用 / タームプレミアムを内包する。 |
| 運営者 | QUICK Benchmarks Inc. | [[financial-regulators/boj-monetary-policy|Bank of Japan]]。 | JBA TIBOR Administration（JBATA）。 |
| 典型的な用途 | *フォワードルッキングなリスク・フリー* のターム固定を望むローン / 商品。 | OIS、ディスカウント、後決め複利の商品。 | 信用感応的なターム固定を望むターム物ローン / 債券。 |

3つは補完的であり、互換ではありません。同一テナーにわたるターム物TORFとターム物 [[money-market/japan-tibor-benchmark-rate|TIBOR]] の間のスプレッドは、実質的に、銀行信用 / タームプレミアム成分に対する市場の読みです —— 両者は主として銀行信用が内包されているかどうかで異なるためです。

## なぜターム物RFRが必要だったのか

後決め複利のTONAは、一部の借り手にとって運用上やっかいです。正確な利息額は、日次の翌日物金利が観測され複利計算された後の、期間の *終わり* 近くにならないと分からないからです。そのため世界的な指標移行は、複数の通貨で **ターム物リスク・フリー・レート** を生み出しました。期間の開始時点で確実性を必要とする現物市場の利用者 —— 請求、予算編成、または既知のターム金利を前提とするシステムのために —— がそれでも信用感応的なIBORを避けられるようにするためです。

TORFはそのニーズに対する円の答えです。日銀が招集した **日本円金利指標に関する検討委員会** が、円の現物商品をLIBORから移行させるために特定した複数のアプローチの1つであり、（後決めの）TONA複利および維持されたTIBORと並ぶものです。

## 現物商品におけるTORFの位置

- **ローン**：フォワードルッキングでリスク・フリーなターム参照を望む相対および一部のシンジケート円ローンは、TIBOR（信用感応的）や（後決めの）複利TONAの代わりにTORFを参照できる。
- **債券 / FRN**：期間開始時点で既知のタームクーポンを必要とする商品。
- **運用上の利便性**：TORFは、金利を前もって必要とする借り手やシステムに適する。後決めのTONAは、事後に利息を計算することに抵抗のない者に適する。

ディスカウントおよびほとんどのクリアリングされたデリバティブについては、円市場はいまなお [[derivatives/ois-tona-curve|TONA-OIS]] でディスカウントします。TORFは主として *現物商品のターム固定* 指標であって、ディスカウントカーブではありません。

## ガバナンスの文脈

金商法の指標規制の枠組みのもとでのTORFの指定は、[[money-market/japan-tibor-benchmark-rate|TIBOR]] を作り変えたのと同じIOSCO整合のガバナンス・レジームの中にTORFを位置づけます。

- 公表された方法論、運用規則、行動規範を持つ指定された運営者（QBS）。
- 特定金融指標としてのFSAの監督。
- 日銀が招集した委員会を通じて進められた、より広範な [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] との協調。

このガバナンスこそが、TORFを監督されていないデータ製品ではなく、使用可能な参照金利として機能させるものです。

## 読み方のチェックリスト

1. TORFを *ターム物かつリスク・フリー* として扱う —— 翌日物のTONAでも信用感応的なTIBORでもない。
2. TORFがTONA参照のOISデータ *から導出* されることを忘れない。したがってTONAのリスク・フリーな性格を受け継ぐが、それをフォワードルッキングなターム金利として表現する。
3. 契約がTORFを参照する場合、テナーを確認する。
4. TORFがディスカウントカーブであると思い込まない。担保付きの円取引はいまなお [[derivatives/ois-tona-curve|TONA-OIS]] でディスカウントされる。
5. TORF対TIBORのスプレッドを、[[money-market/japan-tibor-benchmark-rate|TIBOR]] 対TONAのベーシスと同様に、信用 / タームプレミアムのシグナルとして読む。

## JapanFG関連

- [[financial-regulators/fsa|FSA]] は、TORFを特定金融指標として、その運営者を特定金融指標算出者として監督する。
- [[financial-regulators/boj-monetary-policy|BoJ]] は、TORFの下にある翌日物金利であるTONAを運営し、検討委員会（クロス・インダストリー）を招集した。
- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] は、対照的なTIBOR指標の運営者であるJBATAを擁する。
- メガバンクの [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、ローンのドキュメンテーションにおいてTORF、TIBOR、複利TONAの間で選択する主要な円の貸し手である。

## 境界事例

- **TORF vs TONA**：ターム物・フォワードルッキング vs 翌日物・バックワードルッキング。TORFはTONA参照のOISデータから導出される。
- **TORF vs TIBOR**：どちらもターム物・フォワードルッキングだが、TORFはリスク・フリーである一方、TIBORは銀行信用を内包する。
- **TORF vs LIBOR**：TORFは円LIBORの後継ターム金利だが、呼値ベースのIBORではなく、リスク・フリーかつOIS導出である。
- **TORF vs ディスカウントカーブ**：TORFは現物商品のターム固定指標であって、[[derivatives/ois-tona-curve|TONA-OIS discounting curve]] ではない。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/call-market-structure]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/fsa]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/zenginkyo]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 出典

- QUICK Money World / 株式会社QUICK：TORF（東京ターム物リスク・フリー・レート）概要。TONA参照のOISデータからの導出、およびLIBOR後継としての位置づけを含む。
- QUICK Benchmarks Inc.（torf.co.jp）：TORFの特定金融指標としての指定、およびQBSの特定金融指標算出者としての指定。
- 日本銀行：日本円金利指標に関する検討委員会のサーフェス。
- 金融庁：LIBOR移行 / 指標改革の情報サーフェス。
- 日本銀行：コール市場データ（TORFの基礎となるTONA / 無担保コール翌日物金利）。
