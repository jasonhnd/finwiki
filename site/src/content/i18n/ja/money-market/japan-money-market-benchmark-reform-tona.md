---
source: money-market/japan-money-market-benchmark-reform-tona
source_hash: db9b1b43ad8047ae
lang: ja
status: machine
fidelity: ok
title: "日本の短期金融市場ベンチマーク改革（TONA とマルチレートの世界）"
translated_at: 2026-06-18T15:47:13.941Z
---

# 日本の短期金融市場ベンチマーク改革（TONA とマルチレートの世界）

## Wiki ルート

このエントリは [[money-market/INDEX|money-market index]] の下に位置する。存続するターム物ベンチマークについては [[money-market/japan-tibor-benchmark-rate|TIBOR]] と、TONA が算出される現物市場については [[money-market/call-market-structure|Call market structure]] と併せて読むこと。デリバティブ・プライシングの表現は [[derivatives/ois-tona-curve|the OIS TONA curve]] にある。

## 要点（TL;DR）

日本円金利ベンチマーク改革は、JPY LIBOR を実際の短期金融市場に基礎を置く**リスクフリー・レート（RFR）**に置き換える一方で、改革されたターム物ベンチマークを存続させた。その結果は意図的な**マルチレートの世界**である。

- **TONA（Tokyo Overnight Average Rate、無担保コール・オーバーナイト物加重平均金利）**が、指定された JPY リスクフリー・レートである。これは日本銀行による**無担保オーバーナイト・コール**取引の出来高加重平均であり、すなわち [[money-market/call-market-structure|call market structure]] で説明される現物市場から直接算出される。
- **TIBOR** は、改革された呼値ベースのターム物ベンチマークとして存続し（[[money-market/japan-tibor-benchmark-rate|TIBOR]] を参照）、現在はユーロ円（Z-TIBOR）部分を切り離している。
- **JPY LIBOR** は消滅した。代表性のある JPY LIBOR は2021, 年末に終了し、合成 JPY LIBOR は2023年末までに段階的に廃止された。

FinWiki にとって、このエントリは、誰が何を改革したか、そしてなぜコール市場が LIBOR 後の JPY 金利体系の中心に位置するのかを描く短期金融市場側の物語である。プライシング／割引のメカニクスは [[derivatives/ois-tona-curve|the OIS TONA curve]] のエントリにある。本ページはベンチマーク・ガバナンスと市場構造の物語を扱う。

## 改革主体

| 主体 | 役割 |
|---|---|
| リスクフリー金利に関する勉強会 | 2016 年12月の報告書で、**無担保オーバーナイト・コール・レート（TONA）**を JPY リスクフリー参照金利として特定した。 |
| 日本円金利指標に関する検討委員会 | 2018年8月に設立。JPY LIBOR 移行を主導し、OIS 市場を整備し、数多くの本会合を通じて移行ガイダンスを公表した、主要な官民フォーラム。 |
| 日本銀行 | 委員会事務局を招集し、TONA を算出・公表し、短期金融市場の機能を監督する。 |
| [[financial-regulators/fsa|Financial Services Agency (FSA)]] | 移行およびベンチマーク管理者に対する監督当局。 |
| [[financial-regulators/zenginkyo|Japanese Bankers Association]] ／ JBATA | 改革された TIBOR（存続するターム物ベンチマーク）を運営する。 |

委員会という構造こそが、日本の「ベンチマーク改革」が単一規制当局の指令ではなく協調的な官民の取り組みであった理由である。

## なぜ TONA がコール市場に基礎を置くのか

TONA はサーベイ金利ではない。短資会社が日本銀行に報告する実際の無担保オーバーナイト・コール取引の出来高加重平均である。その設計上の選択が改革の核心である。

- **取引ベースの頑健性**: ベンチマークを実際の取引（[[money-market/call-market-structure|the uncollateralized call segment]] の市場）に基礎づけることで、LIBOR を終焉させた呼値提出ベースの操作脆弱性を排除する。
- **オーバーナイト、ほぼリスクフリー**: 政策目標に近いオーバーナイト金利であるため、銀行信用やターム・プレミアムの要素の大半を取り除き、クリーンな割引／RFR の構成要素となる。
- **政策との連動**: TONA は日本銀行の運営方針に密接に連動しており、[[money-market/boj-open-market-operations|BoJ operations]] を日々ベンチマーク体系へと伝達する。

トレードオフは、潤沢な準備預金の政策環境がコール市場の取引を細らせ得ることであり、これが TONA の出来高を注視すべき対象として残している。

## 移行タイムライン

| 期間 | イベント |
|---|---|
| 2016 | 勉強会が TONA を JPY リスクフリー・レートとして特定（12月の報告書）。 |
| 2018 | 日本円金利指標に関する検討委員会が設立（8月）。OIS 市場整備の作業が開始。 |
| 2018–2021 | 新規の JPY スワップ／ローン業務が TONA 参照へ移行。既存の JPY LIBOR 契約は修正されるか、ISDA フォールバック・プロトコルでカバーされる。 |
| 2021 年末| 代表性のある JPY LIBOR が消滅。一部の既存テナーについて、暫定的な段階的廃止のブリッジとして非代表的な合成 JPY LIBOR が導入される。 |
| 2023 年末| 合成 JPY LIBOR が消滅。残存する JPY 金利商品は TONA を参照し、ターム・フィキシングのニーズには TIBOR が存続。 |
| 2024 年末| ユーロ円 TIBOR（Z-TIBOR）が恒久的に消滅（最終フィキシングは30 年2024月）。日本円 TIBOR は継続。 |

## 結果としてのマルチレートの世界

日本は意図的にすべてを単一の金利に統合しなかった。存続する構造は次のとおりである。

| ベンチマーク | 性質 | 主な用途 |
|---|---|---|
| [[derivatives/ois-tona-curve|TONA]] | オーバーナイト、取引ベース、ほぼリスクフリー。 | OIS、割引、後決め複利の RFR 連動ローン／FRN。 |
| [[money-market/japan-tibor-benchmark-rate|Japanese Yen TIBOR]] | ターム物、呼値ベース、信用感応的。 | ターム・ローンおよびフォワードルッキングなターム・フィックスを必要とする一部の債券。 |

これは、ほぼ全面的に RFR へ移行した通貨とは対照的である。RFR と並んで改革されたターム物ベンチマークを維持することは、各利息期間の開始時に設定される既知のターム物金利を求める JPY ローン市場の需要を反映している。両者の価格差──TIBOR 対 TONA のベーシス──は、異常値ではなく、市場が注視する信用／ターム・プレミアムのシグナルである。

## 既存契約はどのように処理されたか

- **デリバティブ**: ISDA 2020 年 IBOR フォールバック・プロトコルでカバーされる。移行された JPY LIBOR 取引は、後決め複利の TONA に固定の信用調整スプレッドを加えたものを参照する。[[derivatives/isda-2020-protocol-japan-implementation|ISDA 2020 protocol Japan implementation]] を参照。
- **現物商品（ローン／債券）**: 契約上のフォールバック、修正、または TONA もしくは TIBOR 参照への能動的な転換を通じて処理され、必要に応じてスプレッド調整が行われた。
- **ユーロ円 TIBOR 利用者**: 2024 年の消滅に先立ち、フォールバック取極めへ誘導された。

## 読み解きチェックリスト

1. **ベンチマーク・ガバナンス**の物語（本ページ）を、**プライシング／割引**の物語（[[derivatives/ois-tona-curve|OIS TONA curve]]）と切り分けること。
2. TONA は無担保コール市場における取引ベースであり、TIBOR は呼値ベースかつターム物であることを忘れないこと。
3. JPY LIBOR は消滅した（代表性のあるものは2021, 年末、合成は2023年末）──存続しているものとして扱わないこと。
4. 存続する JPY ベンチマークは TONA と日本円 TIBOR である。ユーロ円 TIBOR は2024年末に終了した。
5. TIBOR 対 TONA のスプレッドを信用／ターム・シグナルとして扱うこと。

## JapanFG との関連

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] ／ 日本銀行は TONA を算出し、改革委員会を招集する。
- [[financial-regulators/fsa|FSA]] は移行とベンチマーク管理者を監督する。
- [[financial-regulators/zenginkyo|Japanese Bankers Association]] は（JBATA を通じて）存続する TIBOR を運営する。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は改革を通じて大規模なローンおよびデリバティブのブックを移行した。
- [[securities-firms/mizuho-securities]] と [[securities-firms/mufg-mums]] は、改革が構築を後押しした TONA-OIS 市場で活発に活動している。

## 境界事例

- **ベンチマーク改革 対 金融政策**: 改革は、どの参照金利が存在しそれらがどのように統治されるかに関するものであり、政策金利の水準に関するものではない。
- **RFR 対 ターム物金利**: TONA が RFR、TIBOR がターム物ベンチマークであり、両者は設計上ともに存続する。
- **合成 LIBOR 対 代表性のある LIBOR**: 合成 JPY LIBOR は暫定的な非代表的ブリッジであり、本物の LIBOR の継続ではない。
- **消滅 対 改革**: JPY LIBOR は消滅させられ、TIBOR は改革され存続した──異なるベンチマークに対して異なる結末。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-tibor-benchmark-rate]]
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

- 日本銀行: 日本円金利指標に関する検討委員会のサーフェス。
- 日本銀行: 勉強会「日本円のリスクフリー・レートの特定に関する報告書」（2016年12月）。
- 日本銀行: 金利指標改革（LIBOR の恒久的な公表停止に向けた準備）。
- 日本銀行: コールマネー市場データ（TONA 公表）。
- 金融庁: ユーロ円 TIBOR の終了に関する公表。
