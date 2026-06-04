---
source: money-market/japan-tibor-benchmark-rate
source_hash: f50035dac3730ce9
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "TIBOR（東京銀行間取引金利）"
translated_at: 2026-06-05T00:00:00.000Z
---
# TIBOR（東京銀行間取引金利）

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。TONAリスク・フリー・レートとの対比 / 比較の文脈については [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform]] を、実際に取引される翌日物市場については [[money-market/call-market-structure|Call market structure]] を、運営機関については [[financial-regulators/zenginkyo|the Japanese Bankers Association]] をあわせて参照してください。

## TL;DR

TIBOR（東京銀行間取引金利）は、[[financial-regulators/zenginkyo|the Japanese Bankers Association (Zenginkyō)]] に付随する団体である **JBA TIBOR Administration（JBATA）** が毎営業日に公表する、日本のターム物銀行間参照金利です。これは **呼値ベース** の指標です。リファレンス・バンクのパネルが、優良行が無担保のターム資金を調達できると判断する金利を提出し、JBATAがそれらの提出値から公表金利を算出します。

TIBORには2つのファミリーが存在してきました。

- **日本円TIBOR（D-TIBOR）**：国内の無担保コール市場の資金調達金利環境を反映する。この金利は引き続き公表されている。
- **ユーロ円TIBOR（Z-TIBOR）**：オフショアの日本オフショア市場の資金調達環境を反映していた。JBATAは **ユーロ円TIBORの公表を恒久的に停止し、最終公表は2024年12月30日** であり、日本円TIBORが存続するTIBORとして残った。

FinWikiにとってTIBORは、日本のポストLIBORのマルチレートの世界において、**翌日物、リスク・フリー** の [[derivatives/ois-tona-curve|TONA]] と共存する、存続する **ターム物、信用感応的** な指標です。フォワードルッキングなターム固定を必要とする多くの円ローンや一部の債券を、いまなおアンカーしています。

## TIBORが測るもの

| 要素 | 読み方 |
|---|---|
| 種別 | 呼値ベースのターム物参照金利であり、取引出来高加重の金利ではない。 |
| 運営者 | JBA TIBOR Administration（JBATA）。日本銀行協会に付随する一般社団法人。 |
| インプット | 優良行が無担保のターム資金を調達できる金利についての、リファレンス・バンクの提出値。 |
| テナー | 1週間、1か月、3か月、6か月、12か月。 |
| 算出 | リファレンス・バンクの呼値からトリミング（平均をとる前に最高値と最低値の提出を除外）した後に算出される公表金利。 |
| 公表 | 各東京営業日。 |
| 通貨 | 日本円。 |

TIBORは実際の翌日物取引のプールではなく、リファレンス・バンクの判断から構築されるため、純粋なリスク・フリーの翌日物金利が持たない **銀行信用 / タームプレミアムの成分** を帯びています。その信用感応性こそが、一部の貸し手がターム貸出において複利のリスク・フリー金利よりこれを好む理由であり —— また、世界的な指標操作の事案の後、IOSCOに沿ったガバナンス改革を要した理由でもあります。

## D-TIBOR vs Z-TIBOR

| ファミリー | 反映するもの | ステータス |
|---|---|---|
| 日本円TIBOR（D-TIBOR） | 国内日本の無担保コール市場の資金調達環境。 | 公表継続中。 |
| ユーロ円TIBOR（Z-TIBOR） | オフショアの日本オフショア市場（ユーロ円）の資金調達環境。 | 恒久的に停止。最終公表は2024年12月30日。 |

ユーロ円TIBORの停止は、複数年にわたる改革の道のりを経たものです。JBATAは、日本オフショア市場の長期的な縮小を踏まえ、2018年に日本円TIBORとユーロ円TIBORを統合するアプローチを公表し、フォールバックおよび恒久的停止に関するパブリックコンサルテーションを実施し、[[financial-regulators/fsa|FSA]] と協調した2024年の声明によってユーロ円TIBORの終了を確定しました。ユーロ円TIBORの市場利用者は、フォールバック取決め（代替金利＋スプレッド調整）へと誘導されました。

## TIBOR vs TONA

TIBORと [[derivatives/ois-tona-curve|TONA]] は別物であり、決して混同してはなりません。

| 性質 | TIBOR | TONA |
|---|---|---|
| 性質 | ターム物、フォワードルッキング、呼値ベース。 | 翌日物、バックワードルッキング、取引ベース。 |
| ソース | リファレンス・バンクの提出値。 | 実際の無担保コール翌日物取引の出来高加重平均。 |
| 信用内容 | 銀行信用 / タームプレミアムを内包する。 | ほぼリスク・フリー。 |
| 運営者 | JBATA（JBA付随）。 | 日本銀行。 |
| 典型的な用途 | ターム物ローン、ターム固定を必要とする一部の債券。 | OIS、ディスカウント、RFRベースの商品。 |
| 改革ステータス | 改革・維持された（ユーロ円TIBORは2024年に終了）。 | ポストLIBORにおける指定された円リスク・フリー・レート。 |

両者は同じ基礎的な資金調達システム（[[money-market/call-market-structure|the uncollateralized call market]] を参照）を参照しますが、それを異なる形で表現します。同一期間にわたるターム物TIBORと複利TONAの間のスプレッドは、それ自体が市場の注視するベーシスであり、スワップ市場ではTIBOR対TONAのベーシスとして呼値が立てられます。

## TIBORが使われる場面

- **シンジケートおよび相対の円ローン**：多くの国内の変動金利ローンは1M / 3M / 6MのTIBORでリセットする。借り手と貸し手が、後決め複利の金利ではなく、各期間の開始時点で確定した既知のターム金利を望むためである。
- **変動利付債および一部のストラクチャード商品**：フォワードのターム固定を必要とする商品。
- **変動NCDの参照**：一部の変動金利の [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]] は、このファミリーの短期円指標を参照する。
- **デリバティブ**：既存およびターム固定の円金利デリバティブ。TIBOR参照のスワップがTONA-OISカーブでどうディスカウントされるかについては [[derivatives/japan-irs-market|the JPY IRS market]] を参照。

## ガバナンスと改革の文脈

TIBOR改革は、この指標を金融指標に関するIOSCO原則に整合させました。

- 定義された算出・監督の枠組みを持つ明確な運営者（JBATA）。
- 指定されたリファレンス・バンクのパネルと提出方法、ならびに提出が不十分な場合のフォールバック / コンティンジェンシーの枠組み。
- 主要な変更（フォールバック、統合、ユーロ円の停止）に関するパブリックコンサルテーションのプロセス。
- [[financial-regulators/fsa|FSA]] および、日銀が招集した検討委員会を通じて進められたより広範な [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] との協調。

このガバナンスこそが、LIBORを終わらせた世界的なIBOR移行を、TIBORが廃止されることなく生き延びることを可能にしたものです。

## 読み方のチェックリスト

1. 日本円TIBOR（継続中）とユーロ円TIBOR（2024年12月30日に停止）を区別する。
2. TIBORを呼値ベースかつ信用感応的なものとして扱う —— 取引される翌日物金利と同じものではない。
3. 契約がTIBORを参照する場合、テナー（1W / 1M / 3M / 6M / 12M）を確認する。
4. プライシング / ディスカウントについては、変動レッグがTIBORであっても、担保付きの円取引はいまなお [[derivatives/ois-tona-curve|TONA-OIS]] でディスカウントされることを忘れない。
5. TIBOR対TONAのスプレッドを、データの誤りではなく、信用 / タームプレミアムのシグナルとして読む。

## JapanFG関連

- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] は、JBA TIBOR Administrationの制度上の本拠である。
- [[financial-regulators/fsa|FSA]] は、指標改革を協調する監督当局である。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、ローン帳簿がTIBORを参照する主要な貸し手として、また（歴史的には）銀行間市場におけるリファレンス・パネル型の機関として参加する。
- [[financial-regulators/boj-monetary-policy]] は、TIBORが反映する基礎的な短期金利環境を駆動する政策枠組みを設定する。

## 境界事例

- **TIBOR vs TONA**：ターム物・呼値ベース vs 翌日物・取引ベース。上記で扱った。
- **TIBOR vs LIBOR**：どちらも呼値ベースのIBORだったが、円LIBORは停止された一方でTIBORは改革・維持された。「IBOR」だからTIBORも終わったと思い込まない。
- **D-TIBOR vs Z-TIBOR**：国内 vs オフショア（ユーロ円）。Z-TIBORは廃止されている。
- **TIBOR vs 政策金利**：TIBORは市場指標であり、日銀の政策方針金利ではない。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/boj-open-market-operations]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/zenginkyo]]
- [[financial-regulators/fsa]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 出典

- JBA TIBOR Administration（JBATA）：「JBA TIBORについて」。テナーの組み合わせと算出方法を含む。
- JBA TIBOR Administration：「JBA TIBOR改革」。IOSCO整合性および日本円 / ユーロ円の統合アプローチを扱う。
- JBA TIBOR Administration：ユーロ円TIBORの終了に関する声明、および恒久的停止のパブリックコンサルテーションの結果。
- 日本銀行：日本円金利指標に関する検討委員会のサーフェス（指標改革の協調）。
- 金融庁：ユーロ円TIBORの終了に関する公表物。
