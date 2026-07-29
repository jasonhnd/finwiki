---
source: derivatives/isda-2020-protocol-japan-implementation
source_hash: 3e1872be24ddb6f6
lang: ja
status: machine
fidelity: ok
title: "ISDA 2020 IBOR フォールバック・プロトコル — 日本での実施（TIBOR／TONA／円 LIBOR）"
translated_at: 2026-07-29T21:12:00.000Z
---

# ISDA 2020 IBOR フォールバック・プロトコル — 日本での実施（TIBOR／TONA／円 LIBOR）

## TL;DR

**ISDA 2020 IBOR フォールバック・プロトコル**は、十月 23 日（2020 年）に公表され、一月 25 日（2021 年）に発効した。参加者は、対象となる既存の非清算デリバティブへ IBOR フォールバック補遺を組み込める。円金利では、**円 LIBOR、日本円 TIBOR、ユーロ円 TIBOR**が Relevant IBOR の対象となる。ただし、対象であることは直ちに変換されることを意味せず、契約上のフォールバックは該当するトリガーが発生した場合にのみ適用される。円 LIBOR のフォールバックは、2021 年末の公表停止・代表性喪失後に適用された。ユーロ円 TIBOR は、三月 6 日（2024 年）の公表停止発表がインデックス停止事由となり、十二月 30 日（2024 年）に最終公表された。日本円 TIBOR は引き続き公表されており、停止フォールバックは発動していない。選定された合成円 LIBOR は、英国規制当局による別個の移行措置であり、十二月 31 日（2022 年）に恒久的に終了した。本項では、全ての対象 IBOR が既に変換されたと扱わず、プロトコルの対象範囲、トリガー事由、実際の指標の状態を区別する。

## Wiki 内の位置付け

本項は、[[derivatives/INDEX|デリバティブ索引]] における**日本での ISDA フォールバック・プロトコル実施**の項目である。IRS の背景は [[derivatives/japan-irs-market|日本の円金利スワップ市場]]、LIBOR 後の RFR 構造は [[derivatives/ois-tona-curve|OIS TONA カーブと円の割引]]、清算デリバティブ側の実施は [[derivatives/otc-clearing-jp-trade-repository|日本の OTC 清算と取引情報蓄積機関]]、通貨間フォールバックは [[derivatives/cross-currency-basis-swap-japan|日本の通貨ベーシス・スワップ]] と併読する。制度上の基点は、日本銀行が運営する TONA 現金市場の仕組みを扱う [[money-market/INDEX|短期金融市場索引]]、規制上の基点は、金融庁・日本銀行の監督環境を扱う [[banking/INDEX|銀行索引]] である。

## 1. ISDA 2020 プロトコルとは

| 要素 | 詳細 |
|---|---|
| 公表者 | 国際スワップ・デリバティブズ協会（ISDA） |
| 公表日 | 十月 23 日（2020 年） |
| 発効日 | 一月 25 日（2021 年） |
| 変更対象 | ISDA マスター契約および所定のその他 ISDA 文書 |
| 方式 | 多数当事者による参加（各当事者が一度参加すると、対象となる相対関係が自動的に変更される） |
| 対象取引 | 一月 25 日（2021 年）以後の新規取引は 2021 IBOR フォールバック補遺を通じて組み込み、参加当事者間の既存取引はプロトコル参加により変更する |
| 費用 | 参加費用なし |
| 参加方法 | ISDA ポータルからオンラインで、法人ごとに一度提出する |

出典: ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/]

補遺は、改定後の定義集を組み込む新規取引に適用される。プロトコルは、参加当事者間の対象となる既存の非清算文書を多数当事者間で変更する手段である。当事者は相対での変更にも合意できる。清算取引は、CCP がプロトコルへ参加するのではなく、該当する CCP の規則に従って扱われる。

## 2. フォールバック金利の構造

円の各指標はプロトコル上の Relevant IBOR だが、トリガーは異なる。LIBOR のフォールバックには、恒久的な公表停止と FCA による代表性喪失の判断が含まれる。日本円 TIBOR とユーロ円 TIBOR では、恒久的な公表停止がトリガーとなる。該当するトリガーが発生し、フォールバック日へ到達すると、改定後の定義集は次の内容を定める。

| 構成要素 | 説明 |
|---|---|
| 代替金利 | 通貨ごとの RFR（円は TONA、米ドルは SOFR、ユーロは ESTR、英ポンドは SONIA、スイスフランは SARON） |
| 複利計算方法 | 同じ金利期間に対応する後決め複利 |
| 観測シフト | 2 営業日の後方観測シフト（観測期間を支払期間の開始より 2 日前から開始する） |
| クレジット調整スプレッド（CAS） | IBOR に含まれる銀行信用・調達プレミアムを調整するため、期間ごとに RFR へ加える固定スプレッド |
| トリガーと発効時期 | 契約ごとに異なる。LIBOR には公表停止・代表性喪失が含まれ、TIBOR のフォールバックには該当する恒久的な公表停止トリガーと日付が必要 |

出典: ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/] ^[source:https://www.jbatibor.or.jp/english/Public%20Consultation%20on%20fallback%20issues%20for%20JBA%20TIBOR.pdf]

固定スプレッド調整には、ISDA が説明する過去五年間の中央値方式を用いる。価値移転とベーシス・リスクを軽減することを意図するが、なくすものではない。

## 3. 円 LIBOR フォールバックの詳細

| 円 LIBOR の公表区分 | 契約上の扱い |
|---|---|
| パネル銀行に基づく円 LIBOR | 十二月 31 日（2021 年）の直後に全て公表停止または恒久的な代表性喪失となり、契約上のフォールバックが適用される場合、対象デリバティブは調整後 TONA と期間別固定スプレッドを用いる |
| 合成 1M、3M、6M 円 LIBOR | 一部の既存利用に対する限定的な英国規制上の移行措置で、一月 1 日から十二月 31 日（2022 年）まで適用された。ISDA の代表性喪失トリガーを延期するものではない |

出典: ^[source:https://www.isda.org/2021/03/05/libor-cessation-and-the-impact-on-fallbacks/] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making]

この表では CAS の概算値を意図的に記載しない。法的に参照すべき値は、丸めた二次資料の推計ではなく、適用される ISDA・Bloomberg の算定方法に基づいて公表された期間別フォールバック・スプレッドである。

## 4. 円 LIBOR 公表停止の時系列 — 運用上の事象

| 日付 | 事象 |
|---|---|
| 十月 23 日（2020 年） | ISDA 2020 IBOR フォールバック・プロトコルを公表 |
| 一月 25 日（2021 年） | プロトコル発効、参加開始 |
| 三月 5 日（2021 年） | FCA が LIBOR の公表停止・代表性喪失の日付を発表し、ISDA は LIBOR のスプレッド調整値が確定したことを確認 |
| 十二月 31 日（2021 年）の直後 | 全ての円 LIBOR が公表停止または恒久的な代表性喪失となり、該当する契約上のフォールバックが適用された |
| 一月 1 日–十二月 31 日（2022 年） | FCA は、許可された既存利用向けに合成 1M、3M、6M 円 LIBOR の公表を義務付けた |
| 十二月 31 日（2022 年） | 三つの合成円 LIBOR が恒久的に終了 |

出典: ^[source:https://www.isda.org/2020/10/23/isda-launches-ibor-fallbacks-supplement-and-protocol/] ^[source:https://www.fca.org.uk/news/press-releases/announcements-end-libor] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making]

## 5. 日本円 TIBOR とユーロ円 TIBOR の状況

LIBOR と異なり、**TIBOR（Tokyo Interbank Offered Rate）**は LIBOR 公表停止後も継続した。

| TIBOR の種類 | 状況 | 運営機関 |
|---|---|---|
| **D-TIBOR（日本円 TIBOR）** | 公表中 | 全銀協 TIBOR 運営機関（JBATA） |
| **ユーロ円 TIBOR** | 十二月 30 日（2024 年）の最終公表後に全期間が終了。合成ユーロ円 TIBOR も後継運営機関も存在しない | JBATA（旧運営機関） |
| **円 LIBOR** | パネル銀行に基づく公表は十二月 31 日（2021 年）後に終了し、合成 1M・3M・6M は十二月 31 日（2022 年）後に終了 | FCA の監督下にある ICE Benchmark Administration |

出典: ^[source:https://www.jbatibor.or.jp/english/reform/] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making]

日本円 TIBOR は、ISDA 2020 プロトコルの Relevant IBOR として**対象に含まれる**。対象契約が引き続きこの指標を参照するのは、プロトコルの対象外だからではなく、JBATA が恒久的な公表停止を発表していないためである。

## 6. 日本市場の参加状況

日本銀行が事務局を務める業界横断的な委員会は、広範かつ適時の参加を公に支持し、ISDA は世界の参加法人一覧を公表している。ただし、法人ごとに法域を判定する方法が文書化されていなければ、どちらの資料も「日本法人 500+」という合計や、名称を挙げた全ての銀行・保険会社・地方銀行層が参加したとの一律の主張を裏付けない。このため、そうした主張は削除した。特定の取引当事者関係については、ISDA の最新参加者一覧で両方の法人を確認するか、相対変更契約を調べる。

出典: ^[source:https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm] ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/adhering-parties]

## 7. 2024 年のユーロ円 TIBOR 移行

公開記録が裏付けるのは JBATA 主導の指標移行であり、従前の「JSDA 主導による 2024 年の文書改定」という主張ではない。

| 日付 | 確認できる事象 |
|---|---|
| 三月 6 日（2024 年） | JBATA が全てのユーロ円 TIBOR を十二月末（2024 年）に恒久停止すると発表し、ISDA は、この発表がインデックス停止事由に該当し、フォールバック・スプレッドを確定させたと説明 |
| 六月 30 日（2024 年） | ユーロ円 TIBOR を参照する商品の新規取引を停止するよう金融庁が推奨した期限 |
| 十二月 30 日（2024 年） | 全てのユーロ円 TIBOR の最終公表。JBATA は、合成ユーロ円 TIBORも後継運営機関も存在しないと説明 |

出典: ^[source:https://www.jbatibor.or.jp/english/news/tibor_18.html] ^[source:https://www.jbatibor.or.jp/english/reform/]

## 8. 通貨間デリバティブ — レッグごとの適用

一方のレッグが円（TIBOR または LIBOR）、他方が米ドル（LIBOR または SOFR）またはユーロ（LIBOR または ESTR）の通貨スワップでは、プロトコルを**レッグごと**に適用する。

| 通貨間の構成 | プロトコルの対象 | 該当するトリガー後の状況 |
|---|---|---|
| 円 LIBOR 対米ドル LIBOR の通貨スワップ | 両指標とも Relevant IBOR であり、参加とトリガーをレッグごとに判定する | 円・米ドルの各レッグは、それぞれの契約上のフォールバック事由と、公表された調整後 RFR に従う |
| 日本円 TIBOR 対米ドル LIBOR の通貨スワップ | 両指標ともプロトコルの Relevant IBOR に含まれるが、トリガーはレッグごとに判定する | 日本円 TIBOR は公表停止トリガーが発生していないため継続し、米ドル LIBOR は固有のフォールバック事由に従う |
| ユーロ円 TIBOR 対米ドル LIBOR の通貨スワップ | 両指標とも対象に含まれ、トリガーはレッグごとに判定する | ユーロ円 TIBOR の 2024 年の停止事由により、該当するフォールバックが発動し、米ドル LIBOR は別個の時期にフォールバックする |

出典: ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/] ^[source:https://www.jbatibor.or.jp/english/reform/]

変換後のベーシス・スワップの仕組みは、[[derivatives/cross-currency-basis-swap-japan|日本の通貨ベーシス・スワップ]] を参照。

## 9. 清算デリバティブ側 — JSCC と CCP での実施

清算デリバティブは、CCP 自体のプロトコル参加ではなく、各 CCP の規則と変換手続に従う。清算済みの円 LIBOR ポジションについては、次を確認する。

| 手順 | 確認項目 |
|---|---|
| 1. 適用規則 | CCP、商品、規則の版、法的な変換の仕組み |
| 2. 変換時期 | 発効日と、契約上のフォールバック事由の前または発生時のどちらに変換したか |
| 3. 価値調整 | CCP が定める現金補償またはリバランス手続の有無 |
| 4. リスク管理 | 変換後の証拠金、割引、評価の扱い |

JSCC の現行清算商品ページは、スワップションの権利行使から生じる円 LIBOR スワップを清算申込み時に OIS へ変換すると記載している。日付付きの CCP 開示がないため、市場規模の比較や、変換が「運用上円滑だった」との主張は記載しない。

出典: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html]

## 10. 論点

- **多数当事者間または相対での変更** — プロトコルは標準化された多数当事者間の手段を提供するが、当事者は相対条件を用いることもできる。適用文書と両方の法人を確認する必要がある
- **残存する価値移転** — 固定スプレッドは過去五年間の中央値を用い、価値移転とベーシス・リスクを軽減するが、なくすものではない
- **日本円 TIBOR と TONA** — 日本円 TIBOR は公表中で、TONA は無担保翌日物のリスク・フリー・レートである。商品選択とフォールバック状況は別の問題である
- **ユーロ円 TIBOR の証拠範囲** — JBATA と ISDA の資料は停止事由と日付を裏付けるが、従前に主張されていた JSDA の文書プログラムは裏付けない
- **合成円 LIBOR の範囲** — 合成指標は 2022 年末までの限定的な英国の移行措置であり、ISDA の代表性喪失トリガーを延期しなかった
- **取引当事者の対象状況** — 機関規模や業種による一般化は行わず、法人単位の参加または相対変更を確認する必要がある

## 11. 未解決の問い

- JBATA が継続する日本円 TIBOR 改革が、指標の頑健性と契約での利用にどう影響するか
- 円のフォワード・ルッキングなターム RFR が、期間固定の商品で文書により確認できる利用を獲得するか
- 将来の指標トリガーまたは CCP 規則変更が、既存の契約上のフォールバックとどう相互作用するか
- 日本固有の文書と CCP 規則を、ISDA のグローバル定義集とどう整合させるか
- ユーロ円 TIBOR 移行の完了を、どの日付付き取引・エクスポージャー・データで測定できるか

## 関連項目

- [[derivatives/INDEX|デリバティブ索引]]
- [[derivatives/japan-irs-market|日本の円 IRS 市場]]
- [[derivatives/ois-tona-curve|OIS TONA カーブと円の割引]]
- [[derivatives/otc-clearing-jp-trade-repository|日本の OTC 清算と取引情報蓄積機関]]
- [[derivatives/cross-currency-basis-swap-japan|日本の通貨ベーシス・スワップ]]
- [[derivatives/yen-basis-swap-market|円ベーシス・スワップ市場]]
- [[derivatives/japan-interest-rate-derivatives-overview|日本の金利デリバティブ概要]]
- [[derivatives/japan-rates-derivative-product-matrix|日本の金利デリバティブ商品マトリクス]]
- [[derivatives/japan-cms-constant-maturity-swap|日本の CMS 定期満期スワップ]]
- [[derivatives/japan-swaption-market|日本のスワップション市場]]
- [[derivatives/swap-execution-facility-japan|日本のスワップ執行施設]]
- [[money-market/INDEX|短期金融市場索引]]
- [[banking/INDEX|銀行索引]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|みずほ FG]]
- [[securities-firms/nomura-hd|野村]] · [[financial-regulators/jsda|日本証券業協会]]
- [[securities-firms/mufg-securities|MUFG MS]] · [[securities-firms/smbc-nikko|SMBC 日興]] · [[securities-firms/mizuho-securities|みずほ証券]]
- [[financial-regulators/boj-financial-markets-dept|日本銀行金融市場局]]

## 出典

- ISDA 2020 IBOR フォールバック・プロトコル — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/
- ISDA — https://www.isda.org/
- ISDA 指標改革 InfoHub — https://www.isda.org/?p=865907
- 日本銀行「日本円金利指標に関する検討委員会」 — https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm
- 全銀協 TIBOR 運営機関 — https://www.jbatibor.or.jp/english/
- 英国 FCA の LIBOR 終了に関する決定 — https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making
- JSCC の IRS 清算商品 — https://www.jpx.co.jp/jscc/en/cash/irs/product.html

---

> [!info] 校核状態
> confidence: **likely**。プロトコルの対象範囲、トリガー構造、円 LIBOR 終了日程、ユーロ円 TIBOR の停止は、ISDA、FCA、日本銀行、JBATA、JSCC の一次資料に結び付けた。丸めた CAS 値、日本法人だけの参加数、裏付けのない「JSDA 主導による 2024 年の文書改定」は削除した。
