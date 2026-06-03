---
source: derivatives/isda-2020-protocol-japan-implementation
source_hash: 5f6805e07b1bfd59
lang: ja
status: machine
fidelity: ok
title: "ISDA 2020 IBOR Fallback Protocol — 日本における実装(TIBOR / TONA / JPY LIBOR)"
translated_at: 2026-06-02T11:47:37.260Z
---

# ISDA 2020 IBOR Fallback Protocol — 日本における実装(TIBOR / TONA / JPY LIBOR)

## 要約

**ISDA 2020 IBOR Fallback Protocol**(正式には「ISDA 2020 IBOR Fallbacks Protocol」、2020, 年10月公表、25 2021年1月施行)は、**JPY LIBOR を含むレガシーの IBOR 参照デリバティブが、二者間交渉なしに無リスク金利(RFR)フォールバック文言を組み込むよう自動的に修正された**多者間の契約メカニズムである。日本にとって、本プロトコルの中心的な影響は **31 2021年12月の JPY LIBOR 廃止**(合成 JPY LIBOR のフェーズアウトは 2023年末までに完了)であった — アドヒアした当事者の二者間 JPY LIBOR デリバティブは、廃止日に **TONA の後決め複利プラス固定の信用調整スプレッド(CAS)** へ自動的に転換された。日本市場のアドヒアランスは高く — メガバンク([[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]])、[[JapanFG/nomura-hd|Nomura]]、生命保険会社、主要なバイサイド機関がすべてアドヒアし、日本だけで >500 のアドヒアラント当事者に達した。本プロトコルは TIBOR を **自動的には** 転換しない(TIBOR は 2024年12月のユーロ円 TIBOR / Z-TIBOR の廃止後も [[JapanFG/jsda|JSDA]] 系列の JBATA によって運営され続けた) — TONA へのフォールバックを必要とする TIBOR 契約は別途の修正を要する。**JSDA 主導の 2024 文書アップデート**は、ポスト LIBOR の慣行、TONA-RFR 条項、残存する TIBOR フォールバックアーキテクチャを反映するよう、日本市場の標準デリバティブ文書テンプレートを近代化した。FinWiki にとって、本エントリはプロトコルの仕組み、JPY 固有のフォールバック金利(CAS、観測シフト)、日本市場のアドヒアランスパターン、ポスト LIBOR の JPY 廃止タイムライン、そして JSDA 2024 文書アップデートをカバーする。

## ウィキ上の位置づけ

本エントリは [[derivatives/INDEX|derivatives index]] の配下に、**ISDA フォールバックプロトコルの日本実装** ノードとして位置する。根底にある IRS の文脈として [[derivatives/japan-irs-market|Japan yen interest-rate swap market]]、ポスト LIBOR の RFR アーキテクチャとして [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]、クリア済みデリバティブ側の実装として [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]、そして通貨間フォールバックのオーバーレイとして [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] と併せて読むこと。システムアンカー:BoJ 運営の TONA 現金市場メカニズムとして [[money-market/INDEX|money-market index]]。規制アンカー:FSA / BoJ の監督の文脈として [[banking/INDEX|banking index]]。

## 1. ISDA 2020 プロトコル — それが何か

| 要素 | 詳細 |
|---|---|
| 公表者 | International Swaps and Derivatives Association (ISDA) |
| 公表日 | 23 2020 年10月|
| 施行日 | 25 2021 年1月|
| 修正対象 | ISDA マスター契約および特定の他の ISDA 文書 |
| 種類 | 多者間アドヒアランス(各当事者は一度アドヒアし、カバーされるすべての二者間関係が自動的に修正される) |
| カバーされる取引の範囲 | 25 2021 年1月以降の新規取引(2021 IBOR Fallbacks Supplement を通じて組み込まれる);アドヒアした相手方との既存取引(プロトコルのアドヒアランスを通じて修正される) |
| コスト | アドヒアランスに手数料なし |
| アドヒアランスのメカニズム | ISDA ポータル経由のオンライン;法人ごとに一度の提出 |

本プロトコルは二者間交渉問題に対する **多者間の治療法** である — これがなければ、すべての市場参加者が LIBOR 廃止の前にすべての IBOR 参照デリバティブを二者間で修正せねばならず、それは産業規模では運営上不可能であった。

## 2. フォールバック金利のアーキテクチャ

カバーされる IBOR(USD LIBOR、EUR LIBOR、GBP LIBOR、JPY LIBOR、CHF LIBOR、JPY TIBOR 等)が指定された「トリガーイベント」(通常は運営者による廃止のアナウンス)を経験すると、本プロトコルは以下を提供する:

| 構成要素 | 説明 |
|---|---|
| 置換金利 | 通貨固有の RFR(JPY には TONA、USD には SOFR、EUR には ESTR、GBP には SONIA、CHF には SARON) |
| 複利の方法論 | 同じテナー期間にわたる後決め複利の観測 |
| 観測シフト | 2営業日の後方観測シフト(すなわち観測期間は支払期間の開始 2 日前に始まる) |
| 信用調整スプレッド(CAS) | IBOR の信用・銀行資金調達プレミアムを補償するために RFR に加えられる固定スプレッド(テナーごと) |
| フォールバックの効力発生日 | IBOR の廃止日(例:JPY LIBOR については 1 2022 年1月、最後の LIBOR 設定が 31 2021 年12月であったため) |

CAS は **経済的同等性の調整** である — RFR は無リスクであり IBOR は信用プレミアムを含んでいたため、CAS は歴史的な IBOR-RFR の中央値スプレッドを近似する。

## 3. JPY LIBOR フォールバックの具体

| JPY LIBOR テナー | 置換 | CAS(bp、LIBOR 廃止アナウンス日に固定) |
|---|---|---|
| オーバーナイト | TONA | ~ -1.8 bp(小幅マイナス — オーバーナイト LIBOR は TONA を下回っていた) |
| 1週間 | 複利 TONA(1週間、2日観測シフト) | ~ -1.5 bp |
| 1ヶ月 | 複利 TONA(1ヶ月、2日観測シフト) | ~ -0.2 bp |
| 2ヶ月 | 複利 TONA | 中央値スプレッド |
| 3ヶ月 | 複利 TONA(3ヶ月、2日観測シフト) | ~ +0.8 bp(プラス — 3M LIBOR は信用プレミアムを伴った) |
| 6ヶ月 | 複利 TONA | ~ +5.8 bp |
| 12ヶ月 | 複利 TONA | ~ +16.6 bp |

(これらの CAS 値は廃止アナウンス日に **恒久的に固定** される — その後は変わらない。これらは、UK FCA によって廃止アナウンスがなされた 2021 年3月時点で観測された 5年の JPY LIBOR – RFR スプレッドの中央値を反映している。)

プロトコルを通じて転換されたレガシーの JPY LIBOR デリバティブについて、廃止後の変動レグは **同等期間にわたる複利 TONA + テナー固有の CAS** を支払う。経済的意図は、転換されたデリバティブが、時間を通じて平均的に元の IBOR デリバティブのように振る舞うことである。

## 4. JPY LIBOR 廃止タイムライン — 運営上のイベント

| 日付 | イベント |
|---|---|
| 5 2021 年3月| UK FCA が JPY LIBOR(および他の LIBOR)の廃止日を確認;CAS スプレッドが恒久的に固定 |
| 23 2020 年10月| ISDA 2020 IBOR Fallbacks Protocol 公表 |
| 25 2021 年1月| プロトコルの施行日;アドヒアランス開始 |
| 2021 年を通じて| 日本の機関がアドヒアする;新規の JPY デリバティブ業務が TONA へ移行 |
| 31 2021 年12月| JPY LIBOR(1W、1M、2M、3M、6M、12M)が代表性ベースで廃止 |
| 1 2022 年1月| アドヒアした当事者のレガシー JPY LIBOR デリバティブが TONA + CAS へ自動転換 |
| 2022 年を通じて| 合成 JPY LIBOR(1M、3M、6M のみ)が、レガシー契約のための移行的な橋渡しとして UK FCA によって運営される |
| 30 2023 年6月| 合成 JPY LIBOR が廃止 |
| 2023 年末| すべての JPY LIBOR 参照デリバティブが TONA または同等の RFR へ移行 |

## 5. TIBOR — 生き残った JPY 金利

LIBOR と異なり、**TIBOR(Tokyo Interbank Offered Rate)** は LIBOR 廃止後も継続した:

| TIBOR の種類 | 状況 | 運営者 |
|---|---|---|
| **D-TIBOR(Domestic TIBOR)** | アクティブ | JBATA(Japanese Bankers Association TIBOR Administration) |
| **Z-TIBOR(ユーロ円 TIBOR)** | 2024 年12月に廃止| 以前は JBATA;廃止は利用低下と統合を反映した |
| **JPY LIBOR** | 2021 年末に廃止(合成のフェーズアウトは 2023) | ICE Benchmark Administration によって運営されていた |

D-TIBOR は以下に引き続き用いられる:
- 貸し手が(後決め複利の RFR ではなく)将来予測的なターム金利を望むターム固定の JPY ローン
- LIBOR ではなく TIBOR を参照する一部のレガシー IRS
- ターム金利の参照を必要とする新しいストラクチャード商品

D-TIBOR は、LIBOR と同じ形では **ISDA 2020 プロトコルにカバーされない** — 廃止が予定されていないため、D-TIBOR を参照するデリバティブはそのまま継続して使用する。仮に D-TIBOR が将来廃止されることになれば、別途のフォールバックアーキテクチャが必要となる(そして JSDA はそのシナリオに備えて標準フォールバック文言を準備してきた;セクション 7 参照)。

## 6. 日本市場のアドヒアランス

ISDA 2020 プロトコルへのアドヒアランスは、運営上の必要性を反映して日本で **非常に高かった**:

| アドヒアするカテゴリ | アドヒアランスのパターン |
|---|---|
| メガバンク([[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]]) | すべて廃止前にアドヒア |
| 証券会社([[JapanFG/nomura-hd|Nomura]]、Daiwa、[[JapanFG/mufg-securities|MUFG MS]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-securities|Mizuho Securities]]) | すべてアドヒア |
| 生命保険会社(Nippon Life、Dai-ichi Life、Sumitomo Life 等) | 実質的にすべてアドヒア |
| 地方銀行 | 主要な地方銀行はアドヒア;一部の小規模地方銀行はより時間を要した |
| バイサイド機関 | 年金基金、資産運用会社 — 広くアドヒア |
| 事業会社(非金融) | デリバティブブックを持つ大手事業会社はアドヒア;LIBOR デリバティブのエクスポージャーを持たない多くの小規模事業会社はアドヒアの必要がなかった |
| 在日外国銀行 | アドヒア(親会社または現地法人を通じて) |

日本のアドヒアする法人の合計:500+(グローバルの約 16,000 のアドヒアラント法人のうち)。FSA は規制対象法人のアドヒアランスを積極的に監視し、業界全体の採用を支援した。

非アドヒアの相手方については、**二者間の修正** が必要であった。二者間の JPY LIBOR エクスポージャーの圧倒的大半は、2021年末までにプロトコルまたは二者間でカバーされた。

## 7. JSDA 2024 文書アップデート

2024, 年に [[JapanFG/jsda|JSDA]](Japan Securities Dealers Association)が、日本市場の標準デリバティブ文書テンプレートの包括的なアップデートを主導した:

| 要素 | 2024 以前| 2024 アップデート後 |
|---|---|---|
| 変動金利の定義 | しばしば JPY LIBOR + TIBOR の代替を参照していた | TONA 複利を主とする;ターム金利を必要とする商品のために TIBOR 条項を残存 |
| フォールバックアーキテクチャ | LIBOR 廃止の文言は暫定的であった(2018–2019 の補遺で追加された) | ISDA 2020 プロトコルと整合した標準化された TONA フォールバック文言;TIBOR フォールバック文言を標準化 |
| 日数計算と観測シフト | 混在した慣行 | 標準化:JPY には ACT/365 、TONA 複利には 2営業日の観測シフト |
| 文書の言語 | 英語 / 日本語の混在 | 標準化された日本語 + 英語の二言語版 |
| 商品間の一貫性 | IRS、スワップション、ストラクチャード商品で異なるテンプレート | 商品固有のスケジュールを伴う統一テンプレート |
| 相手方の階層 | クロスボーダー取引のために事前定義 | ポスト LIBOR の市場構造を反映するよう更新 |

2024 アップデートは **LIBOR 移行の運営上の教訓** を反映している — 単一の標準化されたテンプレートを持つことで二者間交渉の摩擦が減り、新商品のローンチが加速する。それはまた、将来の TIBOR 関連の移行ニーズに向けて日本市場を位置づける。

## 8. 通貨間デリバティブ — オーバーレイ

一方のレグが JPY(TIBOR または LIBOR)で他方が USD(LIBOR / SOFR)または EUR(LIBOR / ESTR)である通貨間スワップについて、プロトコルは **レグごとに** 適用される:

| 通貨間の構成 | 2022 フォールバック前 | 2022 後(ポスト LIBOR 廃止) |
|---|---|---|
| JPY LIBOR vs USD LIBOR 通貨間スワップ | 両レグがプロトコルを通じて転換 | JPY レグ → TONA + CAS;USD レグ → SOFR + CAS |
| JPY TIBOR vs USD LIBOR 通貨間スワップ | USD レグのみ転換(TIBOR は影響なし) | TIBOR レグは不変;USD レグ → SOFR + CAS |
| JPY TIBOR vs USD SOFR 通貨間スワップ | フォールバックの問題なし | 変更なし |

転換後のベーシススワップの仕組みについては [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] 参照。

## 9. クリア済みデリバティブ側 — JSCC と CCP の実装

日本のクリアリングハウス([[JapanFG/jsda|JSCC]] = Japan Securities Clearing Corporation;およびグローバルに LCH SwapClear、CME)は、クリア済みの JPY LIBOR デリバティブにフォールバックアーキテクチャを実装した:

| ステップ | 説明 |
|---|---|
| 1. CCP ルールブックの修正 | CCP はルールブックを更新し、レガシーの JPY LIBOR クリア済みデリバティブが廃止時に TONA + CAS へ転換されることを定めた |
| 2. 廃止前の転換 | 一部の CCP(例:LCH SwapClear)は、強制的なルールベースの転換を通じてレガシーポジションを廃止前に転換した |
| 3. ポジションのリバランス | 転換による価値への影響について会員間の補償支払い |
| 4. リスク管理の調整 | 当初証拠金と変動証拠金のキャリブレーションを更新 |

JSCC のクリア済みデリバティブブックは JPY LIBOR について相対的に小さかった(JPY LIBOR デリバティブはより多く US / EU でクリアされていた);転換は運営上スムーズであった。

## 10. 反論

- **「プロトコルは過剰設計だった」** — 批判者はアドヒアランスのコストと運営上の複雑さを指摘する;擁護者は数百万の契約の二者間修正が産業規模では不可能だったと指摘する
- **「CAS が過剰または過少に補償する」** — 固定 CAS は 5年の中央値スナップショットである;フォワードの IBOR-RFR スプレッドが歴史的中央値から大きく乖離すれば、転換は価値移転を生む。実務上、JPY の CAS 値は小さく(大半が < 20 bp)、価値移転の懸念を限定している
- **「TIBOR も TONA へ移すべきだ」** — 一部の業界の声は、2つの参照金利(TONA + TIBOR)を維持するのは非効率だと主張する;擁護者はターム金利の利用者(特に事業会社の貸し手)がなお将来予測的なターム金利を必要とすると主張する
- **「JSDA 文書アップデートは遅すぎる」** — 2024 年(LIBOR 廃止の 3 年後)に来たこのアップデートは、緊急性ではなく蓄積された教訓によって駆動された;批判はもっと早くできたはずだというものである
- **「合成 LIBOR が皆を混乱させた」** — 2022–2023 の合成 JPY LIBOR の段階は複雑であった;市場参加者と格付機関はハイブリッドな状態に対処せねばならなかった
- **「非アドヒアの小規模相手方がテールリスクを生んだ」** — 一部の小規模地方銀行と事業会社は期限内にアドヒアしなかった;これらのエクスポージャーの二者間の整理は 2022

年の大半を要した## 11. 未解決の問い

- RFR 採用へのグローバルなトレンドを踏まえ、[[JapanFG/jbatibor|JBATA D-TIBOR]] が長期的に生き残るかどうか(現在の FSA のスタンス:利用が持続すれば D-TIBOR は継続)
- JPY 向けのターム RFR(例:指定された運営者によって公表される将来予測的な TONA ターム金利)が開発され、ターム固定の用途に受け入れられるかどうか
- 次の主要なフォールバックイベント(例:CCP ルールブックの変更や規制上の金利の廃止)が同様の多者間メカニズムを通じて処理されるかどうか
- クロスボーダーの一貫性の役割 — JSDA / FSA がより強い JPY 文書の標準化を推し進めれば、ISDA のグローバルテンプレートとどう相互作用するか
- 2024 文書アップデートが新しい商品タイプ(気候連動デリバティブ、非金融ベンチマークに連動するストラクチャード商品)の運営上の摩擦を減らすかどうか

## 関連項目

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market|Japan yen IRS market]]
- [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]
- [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]
- [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]
- [[derivatives/yen-basis-swap-market|yen basis swap market]]
- [[derivatives/japan-interest-rate-derivatives-overview|Japan interest-rate derivatives overview]]
- [[derivatives/japan-rates-derivative-product-matrix|Japan rates derivative product matrix]]
- [[derivatives/japan-cms-constant-maturity-swap|Japan CMS constant maturity swap]]
- [[derivatives/japan-swaption-market|Japan swaption market]]
- [[derivatives/swap-execution-facility-japan|swap execution facility Japan]]
- [[money-market/INDEX|money-market index]]
- [[banking/INDEX|banking index]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/nomura-hd|Nomura]] · [[JapanFG/jsda|JSDA]]
- [[JapanFG/mufg-securities|MUFG MS]] · [[JapanFG/smbc-nikko|SMBC Nikko]] · [[JapanFG/mizuho-securities|Mizuho Securities]]
- [[JapanFG/boj-financial-markets-dept|BoJ Financial Markets Dept]]

## 出典

- ISDA 2020 IBOR Fallbacks Protocol — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/
- ISDA — https://www.isda.org/
- JSDA TIBOR / IBOR transition materials — https://www.jsda.or.jp/en/
- FSA IBOR transition materials — https://www.fsa.go.jp/en/
- BOJ Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks — https://www.boj.or.jp/en/
- JBATA TIBOR Administration — https://www.jbatibor.or.jp/english/
- UK FCA LIBOR cessation announcement (5 March 2021) — https://www.fca.org.uk/
- JSCC — https://www.jscc.co.jp/en/

---

> [!info] 校核状態
> confidence: **likely**. ISDA 2020 プロトコルの仕組み、JPY LIBOR の CAS 値(5 2021年3月に Bloomberg インデックスの方法論によって公的に固定)、JPY LIBOR の廃止タイムライン、日本市場のアドヒアランスパターンは公に文書化されている。2024 の JSDA 文書アップデートは業界で知られている。具体的なアドヒアランス数(500+ の日本の法人)は公開された ISDA アドヒアラント当事者リストのスナップショットに基づく概算である。Z-TIBOR の 2024 年12月の廃止は JBATA のアナウンスされたタイムラインを反映している。
