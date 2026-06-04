---
source: money-market/japan-money-market-benchmark-reform-tona
source_hash: 635200236d631d60
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本のマネーマーケット指標改革（TONAとマルチレートの世界）"
translated_at: 2026-06-05T00:00:00.000Z
---
# 日本のマネーマーケット指標改革（TONAとマルチレートの世界）

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。存続するターム物指標については [[money-market/japan-tibor-benchmark-rate|TIBOR]] を、TONAが算出される元となる資金市場については [[money-market/call-market-structure|Call market structure]] をあわせて参照してください。デリバティブのプライシング上の表現は [[derivatives/ois-tona-curve|the OIS TONA curve]] です。

## TL;DR

日本円の金利指標改革は、円LIBORを、実際のマネーマーケットに根ざした **リスク・フリー・レート（RFR）** に置き換える一方で、改革されたターム物指標を維持しました。その結果は意図された **マルチレートの世界** です。

- **TONA（Tokyo Overnight Average Rate）** は、指定された円のリスク・フリー・レートです。これは日本銀行による **無担保コール翌日物** 取引の出来高加重平均であり —— すなわち [[money-market/call-market-structure|call market structure]] で説明される資金市場から直接算出されます。
- **TIBOR** は、改革された呼値ベースのターム物指標として存続しており（[[money-market/japan-tibor-benchmark-rate|TIBOR]] を参照）、現在はユーロ円（Z-TIBOR）のレッグを欠いています。
- **円LIBOR** は廃止されました。代表性のある円LIBORは2021年末で終了し、合成（シンセティック）円LIBORは2023年末までに段階的に終了しました。

FinWikiにとって、この項目は、誰が何を改革したのか、そしてなぜコール市場がポストLIBORの円金利体系の中心に位置するのかについての、マネーマーケット側の物語です。プライシング / ディスカウントの仕組みは [[derivatives/ois-tona-curve|the OIS TONA curve]] の項目にあります。このページは指標ガバナンスと市場構造の話を扱います。

## 改革の主体

| 主体 | 役割 |
|---|---|
| リスク・フリー・レートに関する勉強会 | 2016年12月の報告書で **無担保コール翌日物金利（TONA）** を円のリスク・フリー参照金利として特定した。 |
| 日本円金利指標に関する検討委員会 | 2018年8月に設立。円LIBOR移行を主導し、OIS市場を育成し、多数の本会合を通じて移行ガイダンスを公表した、主要な官民フォーラム。 |
| 日本銀行 | 委員会の事務局を務め、TONAを算出・公表し、マネーマーケットの機能を監督する。 |
| [[financial-regulators/fsa|Financial Services Agency (FSA)]] | 移行および指標算出者に対する監督当局。 |
| [[financial-regulators/zenginkyo|Japanese Bankers Association]] / JBATA | 改革されたTIBOR（存続するターム物指標）を運営する。 |

この委員会の構成こそが、日本における「指標改革」が単一の規制当局の命令ではなく、協調的な官民の取り組みであった理由です。

## なぜTONAがコール市場の上に立つのか

TONAはサーベイ金利ではありません。短資会社が日銀に報告する、実際の無担保コール翌日物取引の出来高加重平均です。その設計上の選択が改革の核心です。

- **取引ベースの頑健性**：指標を実際の取引（[[money-market/japan-uncollateralized-vs-collateralized-call-market|the uncollateralized call segment]] の市場）に根ざすことで、LIBORを終わらせた提出ベースの操作脆弱性を取り除く。
- **翌日物、ほぼリスク・フリー**：政策目標に近い翌日物金利であるため、銀行信用やタームプレミアムの内容の大半を除去し、クリーンなディスカウント / RFRの構成要素となる。
- **政策との連動**：TONAは日銀の運営方針を密接に追随するため、[[money-market/boj-open-market-operations|BoJ operations]] を日々、指標体系へと伝達する。

トレードオフは、潤沢な準備預金の政策環境がコール市場の取引を細らせうることであり、これがTONAの出来高を注視すべきものにしています。

## 移行のタイムライン

| 期間 | 出来事 |
|---|---|
| 2016年 | 勉強会がTONAを円のリスク・フリー・レートとして特定（12月の報告書）。 |
| 2018年 | 日本円金利指標に関する検討委員会が設立（8月）。OIS市場の育成作業が始まる。 |
| 2018～2021年 | 新規の円スワップ / ローン業務がTONA参照へ移行。既存の円LIBOR契約は修正されるか、ISDAフォールバック・プロトコルでカバーされる。 |
| 2021年末 | 代表性のある円LIBORが終了。一部の既存テナー向けに、暫定的な段階的終了の橋渡しとして、代表性のない合成円LIBORが導入される。 |
| 2023年末 | 合成円LIBORが終了。残る円金利商品はTONAを参照し、ターム固定のニーズにはTIBORが維持される。 |
| 2024年末 | ユーロ円TIBOR（Z-TIBOR）が恒久的に終了（最終公表は2024年12月30日）。日本円TIBORは存続。 |

## 帰結としてのマルチレートの世界

日本は意図的に、すべてを単一の金利に集約しませんでした。存続する構造は次のとおりです。

| 指標 | 性質 | 主な用途 |
|---|---|---|
| [[derivatives/ois-tona-curve|TONA]] | 翌日物、取引ベース、ほぼリスク・フリー。 | OIS、ディスカウント、後決め複利のRFR連動ローン / FRN。 |
| [[money-market/japan-tibor-benchmark-rate|Japanese Yen TIBOR]] | ターム物、呼値ベース、信用感応的。 | フォワードルッキングなターム固定を必要とするターム物ローンと一部の債券。 |

これは、ほぼ完全にRFRへ移行した通貨とは対照的です。RFRと並んで改革されたターム物指標を維持していることは、各利息期間の開始時点で確定する既知のターム金利に対する、円ローン市場からの需要を反映しています。両者の価格差 —— TIBOR対TONAのベーシス —— は、異常値ではなく、市場が注視する信用 / タームプレミアムのシグナルです。

## 既存契約はどう扱われたか

- **デリバティブ**：ISDA 2020 IBORフォールバック・プロトコルでカバーされる。移行された円LIBOR取引は、後決め複利のTONAに固定の信用調整スプレッドを加えたものを参照する。[[derivatives/isda-2020-protocol-japan-implementation|ISDA 2020 protocol Japan implementation]] を参照。
- **現物商品（ローン / 債券）**：契約上のフォールバック、修正、またはTONAもしくはTIBOR参照への能動的な転換によって処理され、必要に応じてスプレッド調整が行われる。
- **ユーロ円TIBOR利用者**：2024年の終了に先立ち、フォールバック取決めへと誘導された。

## 読み方のチェックリスト

1. **指標ガバナンス** の話（このページ）と **プライシング / ディスカウント** の話（[[derivatives/ois-tona-curve|OIS TONA curve]]）を切り分ける。
2. TONAは無担保コール市場における取引ベース、TIBORは呼値ベースかつターム物であることを忘れない。
3. 円LIBORは無くなった（代表性のあるものは2021年末、合成は2023年末）—— 現存するものとして扱わない。
4. 存続する円指標はTONAと日本円TIBOR。ユーロ円TIBORは2024年末で終了した。
5. TIBOR対TONAのスプレッドを信用 / タームのシグナルとして扱う。

## JapanFG関連

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] / 日本銀行がTONAを算出し、改革委員会を招集する。
- [[financial-regulators/fsa|FSA]] が移行および指標算出者を監督する。
- [[financial-regulators/zenginkyo|Japanese Bankers Association]]（JBATA経由）が存続するTIBORを運営する。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、改革を通じて大規模なローンおよびデリバティブの帳簿を移行させた。
- [[securities-firms/mizuho-securities]] と [[securities-firms/mufg-mums]] は、改革が構築を後押ししたTONA-OIS市場で活発に活動している。

## 境界事例

- **指標改革 vs 金融政策**：改革は、どの参照金利が存在し、それがどう統治されるかについてのものであって、政策金利の水準についてのものではない。
- **RFR vs ターム金利**：TONAがRFR、TIBORがターム物指標。両者は設計上ともに存続する。
- **合成LIBOR vs 代表性のあるLIBOR**：合成円LIBORは暫定的で代表性のない橋渡しであり、本物のLIBORの継続ではない。
- **終了 vs 改革**：円LIBORは終了され、TIBORは改革・維持された —— 指標ごとに異なる帰結。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/boj-open-market-operations]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/isda-2020-protocol-japan-implementation]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/fsa]]
- [[financial-regulators/zenginkyo]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行：日本円金利指標に関する検討委員会のサーフェス。
- 日本銀行：勉強会「日本円のリスク・フリー・レートの特定に関する報告書」（2016年12月）。
- 日本銀行：金利指標改革（LIBORの恒久的な公表停止への備え）。
- 日本銀行：コール市場データ（TONAの公表）。
- 金融庁：ユーロ円TIBORの終了に関する公表物。
