---
source: money-market/japan-tibor-benchmark-rate
source_hash: 58709e100ae3ffc4
lang: ja
status: machine
fidelity: ok
title: "TIBOR（東京銀行間取引金利、Tokyo Interbank Offered Rate）"
translated_at: 2026-06-18T15:47:13.952Z
---

# TIBOR（東京銀行間取引金利、Tokyo Interbank Offered Rate）

## Wiki 経路

本項目は [[money-market/INDEX|money-market index]] の下に位置する。TONA リスクフリー・レートとの同類 / 対比の文脈については [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform]] と、実際に取引される翌日物市場については [[money-market/call-market-structure|Call market structure]] と、運営機関については [[financial-regulators/zenginkyo|the Japanese Bankers Association]] と併せて読まれたい。

## 要旨

TIBOR（東京銀行間取引金利）は、[[financial-regulators/zenginkyo|the Japanese Bankers Association (Zenginkyō)]] に所属する団体である **全銀協 TIBOR 運営機関（JBATA）** が各営業日に公表する、日本のターム物インターバンク参照金利である。これは **クオートベース** のベンチマークであり、リファレンス・バンクのパネルが、プライム・バンクが無担保のターム物資金を調達しうると判断する金利を呈示し、JBATA がそれらの呈示値から公表レートを算出する。

TIBOR には 2 つのファミリーが存在してきた。

- **日本円 TIBOR（D-TIBOR）**：国内の無担保コール市場における資金調達金利環境を反映する。本レートは引き続き公表されている。
- **ユーロ円 TIBOR（Z-TIBOR）**：オフショアの日本オフショア市場における資金調達環境を反映していた。JBATA は **30 December 2024 を最終フィキシングとしてユーロ円 TIBOR の公表を恒久的に終了し**、日本円 TIBOR が存続する TIBOR となった。

FinWiki にとって TIBOR は、ポスト LIBOR の複数金利併存の世界において、**翌日物・リスクフリーの** [[derivatives/ois-tona-curve|TONA]] と共存する、存続した **ターム物・信用感応的** ベンチマークである。フォワードルッキングなターム物フィックスを必要とする多くの円建てローンや一部の債券を、いまなお下支えしている。

## TIBOR が測るもの

| 要素 | 読み解き |
|---|---|
| 種別 | クオートベースのターム物参照金利であり、取引高加重型の金利ではない。 |
| 運営機関 | 全銀協 TIBOR 運営機関（JBATA）。日本銀行業協会に所属する一般社団法人。 |
| 入力 | プライム・バンクが無担保のターム物資金を調達しうる金利についての、リファレンス・バンクの呈示値。 |
| テナー | 1 week、1 month、3 months、6 months、および 12 months。 |
| 算出 | リファレンス・バンクの呈示値をトリミングした上で（平均する前に最高値と最低値を除外）算出される公表レート。 |
| 公表 | 各東京営業日。 |
| 通貨 | 日本円。 |

TIBOR は実際の翌日物取引のプールからではなく、リファレンス・バンクの判断から構築されるため、純粋なリスクフリー翌日物金利には存在しない **銀行信用 / タームプレミアム成分** を帯びる。この信用感応性こそが、一部の貸し手がターム物貸出において複利のリスクフリー金利よりもこれを選好する理由であり、また世界的なベンチマーク不正操作の事案を受けて IOSCO 整合的なガバナンス改革を要した理由でもある。

## D-TIBOR と Z-TIBOR

| ファミリー | 反映するもの | 状態 |
|---|---|---|
| 日本円 TIBOR（D-TIBOR） | 国内日本の無担保コール市場の資金調達環境。 | 公表継続中。 |
| ユーロ円 TIBOR（Z-TIBOR） | オフショアの日本オフショア市場（ユーロ円）の資金調達環境。 | 恒久的に終了。最終公表は 30 December 2024。 |

ユーロ円 TIBOR の終了は、複数年にわたる改革の道筋をたどった。JBATA は、日本オフショア市場の長期にわたる縮小を踏まえ、2018 に日本円 TIBOR とユーロ円 TIBOR を統合するアプローチを公表し、フォールバックおよび恒久的終了についてのパブリック・コンサルテーションを実施し、[[financial-regulators/fsa|FSA]] と協調した 2024 声明を通じてユーロ円 TIBOR の終結を確認した。ユーロ円 TIBOR の市場利用者は、フォールバックの取り決め（代替金利にスプレッド調整を加えたもの）へと誘導された。

## TIBOR と TONA

TIBOR と [[derivatives/ois-tona-curve|TONA]] は別物であり、決して混同してはならない。

| 性質 | TIBOR | TONA |
|---|---|---|
| 本質 | ターム物、フォワードルッキング、クオートベース。 | 翌日物、バックワードルッキング、取引ベース。 |
| 出所 | リファレンス・バンクの呈示値。 | 実際の無担保翌日物コール取引の取引高加重平均。 |
| 信用内容 | 銀行信用 / タームプレミアムを内包する。 | ほぼリスクフリー。 |
| 運営機関 | JBATA（全銀協所属）。 | 日本銀行。 |
| 典型的な用途 | ターム物ローン、ターム物フィックスを要する一部の債券。 | OIS、ディスカウンティング、RFR ベースのプロダクト。 |
| 改革状況 | 改革され存続（ユーロ円 TIBOR は 2024に終了）。 | ポスト LIBOR の指定円リスクフリー・レート。 |

両者は同じ基礎となる資金調達システム（[[money-market/call-market-structure|the uncollateralized call market]] を参照）を参照しているが、その表現の仕方が異なる。同一期間におけるターム物 TIBOR と複利 TONA のスプレッドは、それ自体が市場で注視されるベーシスであり、スワップ市場では TIBOR 対 TONA ベーシスとして呈示される。

## TIBOR が使われる場面

- **円建てシンジケート・ローンおよびバイラテラル・ローン**：多くの国内変動金利ローンは、借り手と貸し手が事後複利の金利ではなく各期間の開始時に確定する既知のターム物金利を望むため、1M / 3M / 6M TIBOR でリセットされる。
- **変動利付債および一部のストラクチャード・プロダクト**：フォワードなターム物フィックスを要する商品。
- **変動 NCD の参照**：一部の変動利付 [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]] は、このファミリーの短期円ベンチマークを参照する。
- **デリバティブ**：レガシーおよびターム物フィキシングの円金利デリバティブ。TIBOR を参照するスワップが TONA-OIS カーブ上でどのようにディスカウントされるかについては [[derivatives/japan-irs-market|the JPY IRS market]] を参照。

## ガバナンスと改革の背景

TIBOR 改革は、本ベンチマークを IOSCO「金融指標に関する諸原則」に整合させた。

- 明確な運営機関（JBATA）と、定められた算出・監督の枠組み。
- 特定のリファレンス・バンク・パネルと呈示方法論、ならびに呈示が不十分な場合のフォールバック / コンティンジェンシーの枠組み。
- 重要な変更（フォールバック、統合、ユーロ円終了）についてのパブリック・コンサルテーションの手続き。
- [[financial-regulators/fsa|FSA]] およびより広範な [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] との、日本銀行が招集するクロスインダストリー委員会を通じた協調。

このガバナンスこそが、LIBOR を終わらせた世界的な IBOR 移行の中で TIBOR が廃止されることなく存続することを可能にした。

## 読み解きチェックリスト

1. 日本円 TIBOR（継続）とユーロ円 TIBOR（30 December 2024 に終了）を区別すること。
2. TIBOR をクオートベースかつ信用感応的なものとして扱うこと——取引された翌日物金利と同じものではない。
3. 契約が TIBOR を参照する際は、テナー（1W / 1M / 3M / 6M / 12M）を確認すること。
4. プライシング / ディスカウンティングについては、フローティング・レッグが TIBOR であっても、有担保の円建て取引は依然として [[derivatives/ois-tona-curve|TONA-OIS]] でディスカウントされることを忘れないこと。
5. TIBOR 対 TONA スプレッドを、データ誤りではなく信用 / タームプレミアムのシグナルとして読むこと。

## 日本 FG との関連性

- [[financial-regulators/zenginkyo|Japanese Bankers Association (Zenginkyō)]] は全銀協 TIBOR 運営機関の組織上の所在である。
- [[financial-regulators/fsa|FSA]] はベンチマーク改革を調整する監督当局である。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、その貸出ポートフォリオが TIBOR を参照する主要な貸し手として、また（歴史的には）インターバンク市場におけるリファレンス・パネル型の機関として参加している。
- [[financial-regulators/boj-monetary-policy]] は、TIBOR が反映する基礎的な短期金利環境を駆動する政策の枠組みを設定する。

## 境界事例

- **TIBOR と TONA**：ターム物・クオートベース 対 翌日物・取引ベース。上記で扱った。
- **TIBOR と LIBOR**：いずれもクオートベースの IBOR であったが、円 LIBOR は終了した一方で TIBOR は改革され存続した。「IBOR」だから TIBOR も終わったと仮定してはならない。
- **D-TIBOR と Z-TIBOR**：国内 対 オフショア（ユーロ円）。Z-TIBOR は廃止されている。
- **TIBOR と政策金利**：TIBOR は市場ベンチマークであり、日本銀行の政策誘導金利ではない。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
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

- 全銀協 TIBOR 運営機関（JBATA）：「JBA TIBOR について」。テナーの集合および算出方法を含む。
- 全銀協 TIBOR 運営機関：「JBA TIBOR 改革」。IOSCO 整合および日本円 / ユーロ円の統合アプローチを扱う。
- 全銀協 TIBOR 運営機関：ユーロ円 TIBOR の終結に関する声明および恒久的終了のパブリック・コンサルテーションの結果。
- 日本銀行：日本円金利指標に関するクロスインダストリー委員会のページ（ベンチマーク改革の調整）。
- 金融庁：ユーロ円 TIBOR の終結に関する公表。
