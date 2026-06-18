---
source: money-market/japan-torf-term-risk-free-rate
source_hash: 9db970d03edb689b
lang: ja
status: machine
fidelity: ok
title: "TORF（東京ターム物リスクフリーレート）"
translated_at: 2026-06-18T15:47:13.956Z
---

# TORF（東京ターム物リスクフリーレート）

## Wiki ルート

本項目は [[money-market/INDEX|money-market index]] の下に位置する。クオートに基づく信用感応的な対比については [[money-market/japan-tibor-benchmark-rate|TIBOR]] と、JPY のリスクフリーレートの体系がどのように構築されたかについては [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform (TONA)]] と、TORF が算出される際のデリバティブのインプットについては [[derivatives/ois-tona-curve|the OIS TONA curve]] と対照して読むこと。監督上のアンカーは [[financial-regulators/fsa|the FSA]] である。

## 要旨

TORF（東京ターム物リスクフリーレート）は、日本円についての**フォワードルッキングなターム物リスクフリーレート**であり、**QUICK Benchmarks 株式会社（QBS）**によって毎営業日に算出・公表される。これは、無担保コールオーバーナイト物レート、すなわち [[derivatives/ois-tona-curve|TONA]] を原資産とする円金利デリバティブ（OIS）のデータから導出される。実際のところ、TORF は*オーバーナイトで回顧的な* TONA を、借り手が利息期間の開始時点に見ることができる*ターム物でフォワードルッキングな*フィックスへと転換する。

TORF は、**JPY LIBOR**（その公表は 2021 末で停止した）の JPY における後継レートの一つである。それは日本のポスト LIBOR の複数レートの世界において、第三の参照タイプとして位置づけられる：

- **[[money-market/japan-tibor-benchmark-rate|TIBOR]]** —— ターム物、クオートに基づく、信用感応的。
- **[[derivatives/ois-tona-curve|TONA]]** —— オーバーナイト、取引に基づく、ほぼリスクフリー。
- **TORF** —— ターム物、リスクフリー、TONA を参照する OIS データから*導出される*。

FinWiki にとって、TORF は「リスクフリーレートのターム物版」である：TIBOR に埋め込まれた銀行信用の成分を含まずに、ターム物フィックスのフォワードルッキングな利便性をもたらす。

## TORF が測定するもの

| 要素 | 読み解き |
|---|---|
| 種類 | フォワードルッキングなターム物リスクフリー参照レート。 |
| 算出機関 | QUICK Benchmarks 株式会社（QBS）、株式会社 QUICK により設立。 |
| 原資産 | 無担保コールオーバーナイト物レート（TONA）を参照する円 OIS（オーバーナイト・インデックス・スワップ）の取引データ。 |
| 信用の内容 | ほぼリスクフリー —— TIBOR が埋め込む銀行信用／ターム・プレミアムをほとんど含まない。 |
| 方向 | フォワードルッキング：ターム物レートは利息期間の*開始時点*で既知である。 |
| 規制上の地位 | TORF は金融商品取引法の下で「特定金融指標」に、QBS は「特定金融指標算出者」に指定され、[[financial-regulators/fsa|FSA]] により監督される。 |
| 通貨 | 日本円。 |

TORF は、参照銀行の判断（TIBOR）や一群のオーバーナイトの現金取引（TONA）からではなく、OIS データから構築されるため、独特の方法論的なニッチを占める：その下にあるオーバーナイト物レートの*リスクフリー*の性質を依然として継承しつつ、それを*ターム物*のレートとして表すものである。

## TORF vs TONA vs TIBOR

| 属性 | TORF | TONA | TIBOR |
|---|---|---|---|
| 性質 | ターム物、フォワードルッキング。 | オーバーナイト、回顧的。 | ターム物、フォワードルッキング。 |
| 基礎 | TONA を参照する OIS データから導出。 | 実際の無担保コールオーバーナイト物取引の出来高加重平均。 | 無担保のターム物資金調達に対する参照銀行のクオート。 |
| 信用の内容 | ほぼリスクフリー。 | ほぼリスクフリー。 | 銀行信用／ターム・プレミアムを埋め込む。 |
| 算出機関 | QUICK Benchmarks 株式会社。 | [[financial-regulators/boj-monetary-policy|Bank of Japan]]。 | 全銀協 TIBOR 運営機関（JBATA）。 |
| 典型的な用途 | *フォワードルッキングでリスクフリー*なターム物フィックスを求める融資／プロダクト。 | OIS、割引、後決め複利のプロダクト。 | 信用感応的なターム物フィックスを求めるターム物融資／債券。 |

三者は補完的であり、互換ではない。同じテナーにおけるターム物 TORF とターム物 [[money-market/japan-tibor-benchmark-rate|TIBOR]] の間のスプレッドは、実際のところ、銀行信用／ターム・プレミアムの成分に対する市場の読みである —— 両者は主として銀行信用が埋め込まれているか否かにおいて異なるからである。

## なぜターム物 RFR が必要とされたのか

後決め複利の TONA は、一部の借り手にとって運用上ぎこちない：正確な利息額は、日々のオーバーナイト物レートが観測され複利計算された後、期間の*終わり*近くになって初めて分かる。そのため、グローバルなベンチマーク移行は、いくつかの通貨において**ターム物リスクフリーレート**を生み出し、期間の開始時点で確実性を必要とする現金市場の利用者 —— 請求、予算編成、または既知のターム物レートを前提とするシステムのため —— が、信用感応的な IBOR を依然として回避できるようにした。

TORF はそのニーズに対する JPY の答えである。それは、日本銀行が招集した**日本円金利指標に関する検討委員会**が、JPY の現金プロダクトを LIBOR から移行させるために特定したいくつかのアプローチの一つであり、TONA の複利計算（後決め）および存続する TIBOR と並ぶものである。

## TORF が現金プロダクトのどこに位置づくか

- **融資**：フォワードルッキングでリスクフリーなターム物の参照を求める相対型および一部のシンジケート型の JPY 融資は、TIBOR（信用感応的）や複利 TONA（後決め）に代えて TORF を参照することができる。
- **債券／FRN**：期間開始時点で既知のターム物クーポンを必要とする商品。
- **運用上の利便性**：TORF は、レートを前もって必要とする借り手やシステムに適する；後決めの TONA は、事後に利息を計算することを厭わない者に適する。

割引および大半の清算済みデリバティブについては、JPY 市場は依然として [[derivatives/ois-tona-curve|TONA-OIS]] で割引する；TORF は割引カーブというよりも、主として*現金プロダクトのターム物フィックス*のベンチマークである。

## ガバナンスの背景

FIEA のベンチマーク規制の枠組みの下での TORF の指定は、それを、[[money-market/japan-tibor-benchmark-rate|TIBOR]] を作り変えたのと同じ IOSCO に整合的なガバナンス制度の中に位置づける：

- 公表された方法論、運用規則、行為規範を備えた指定された算出者（QBS）。
- 特定金融指標としての FSA による監督。
- 日本銀行が招集した委員会を通じて運営される、より広範な [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] との連携。

このガバナンスこそが、TORF を監督されないデータ・プロダクトではなく、使用可能な参照レートとして機能させるものである。

## 読み解きのチェックリスト

1. TORF を*ターム物かつリスクフリー*として扱うこと —— それはオーバーナイトの TONA でも、信用感応的な TIBOR でもない。
2. TORF は TONA を参照する OIS データから*導出される*ことを忘れないこと。したがって TONA のリスクフリーの性質を継承しつつ、それをフォワードルッキングなターム物レートとして表す。
3. 契約が TORF を参照する場合は、テナーを確認すること。
4. TORF が割引カーブであると想定しないこと；有担保の JPY 取引は依然として [[derivatives/ois-tona-curve|TONA-OIS]] で割引する。
5. TORF 対 TIBOR のスプレッドを、[[money-market/japan-tibor-benchmark-rate|TIBOR]] 対 TONA のベーシスのように、信用／ターム・プレミアムのシグナルとして読むこと。

## 日本の金融グループとの関連性

- [[financial-regulators/fsa|FSA]] は、TORF を特定金融指標として、その算出者を特定金融指標算出者として監督する。
- [[financial-regulators/boj-monetary-policy|BoJ]] は、TORF の下にあるオーバーナイト物レートである TONA を運営し、跨業種のベンチマーク改革委員会を招集した。
- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] は、対比的な TIBOR ベンチマークの運営機関である JBATA を擁する。
- メガバンクである [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、融資ドキュメンテーションにおいて TORF、TIBOR、複利 TONA の間で選択を行う主要な JPY の貸し手である。

## 境界事例

- **TORF vs TONA**：ターム物でフォワードルッキング vs オーバーナイトで回顧的；TORF は TONA を参照する OIS データから導出される。
- **TORF vs TIBOR**：いずれもターム物でフォワードルッキングだが、TORF はリスクフリーであり、TIBOR は銀行信用を埋め込む。
- **TORF vs LIBOR**：TORF は JPY LIBOR の後継ターム物レートだが、クオートに基づく IBOR ではなく、リスクフリーかつ OIS から導出される。
- **TORF vs 割引カーブ**：TORF は現金プロダクトのターム物フィックスのベンチマークであり、[[derivatives/ois-tona-curve|TONA-OIS discounting curve]] ではない。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
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

- QUICK Money World／株式会社 QUICK：TORF（東京ターム物リスクフリーレート）の概要。TONA を参照する OIS データからの導出および LIBOR の後継としての位置づけを含む。
- QUICK Benchmarks 株式会社（torf.co.jp）：TORF の特定金融指標としての、および QBS の特定金融指標算出者としての指定。
- 日本銀行：日本円金利指標に関する検討委員会のサーフェス。
- 金融庁：LIBOR 移行／ベンチマーク改革に関する情報サーフェス。
- 日本銀行：コールマネー市場データ（TONA／TORF の下にある無担保コールオーバーナイト物レート）。
