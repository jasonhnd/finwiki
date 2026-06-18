---
source: derivatives/isda-2020-protocol-japan-implementation
source_hash: 364d17fdaaa6aa2b
lang: ja
status: machine
fidelity: ok
title: "ISDA 2020 IBOR フォールバック・プロトコル — 日本実装（TIBOR / TONA / 円 LIBOR）"
translated_at: 2026-06-18T23:33:48.299Z
---

# ISDA 2020 IBOR フォールバック・プロトコル — 日本実装（TIBOR / TONA / 円 LIBOR）

## TL;DR

**ISDA 2020 IBOR フォールバック・プロトコル**（正式には「ISDA 2020 IBOR Fallbacks Protocol」、2020, 年 10 月公表、2021年 25 月 1 日発効）は、**IBOR を参照するレガシーデリバティブ — 円 LIBOR を含む — が、双方向交渉なしに自動的に改定され、リスクフリーレート（RFR）フォールバック文言を組み込むための多数当事者間の契約メカニズム** である。日本にとってこのプロトコルの中心的な影響は、**2021年 31 月の円 LIBOR 公表停止**（合成円 LIBOR の段階的廃止は 2023年末までに完了）であった — 締結当事者の双方向の円 LIBOR デリバティブは、公表停止日に **TONA の後決め複利 + 固定の信用調整スプレッド（CAS）** へ自動的に転換された。日本市場の締結率は高く — メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）、[[securities-firms/nomura-hd|Nomura]]、生命保険会社、主要なバイサイド機関がいずれも締結し、日本からの締結当事者だけで >500 に達した。本プロトコルは TIBOR を自動的には転換**しない**（TIBOR は、2024年 12 月のユーロ円 TIBOR / Z-TIBOR 廃止後も、[[financial-regulators/jsda|JSDA]]関連の JBATA によって運営が継続された） — TONA へのフォールバックを必要とする TIBOR 契約には別途の改定が必要である。**JSDA 主導の 2024 年文書改訂** は、ポスト LIBOR の慣行、TONA-RFR 条項、残存する TIBOR フォールバック・アーキテクチャを反映するよう、日本市場の標準デリバティブ文書テンプレートを近代化した。FinWiki にとって、本エントリはプロトコルの仕組み、円固有のフォールバックレート（CAS、観測シフト）、日本市場の締結パターン、ポスト LIBOR の円公表停止タイムライン、および JSDA 2024 年文書改訂を扱う。

## Wiki route

本エントリは **ISDA フォールバック・プロトコル日本実装** ノードとして [[derivatives/INDEX|derivatives index]] の下に位置する。基礎となる IRS の文脈については [[derivatives/japan-irs-market|Japan yen interest-rate swap market]]、ポスト LIBOR の RFR アーキテクチャについては [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]、清算デリバティブ側の実装については [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]、通貨間フォールバックのオーバーレイについては [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] と併読されたい。システムのアンカー: BoJ 運営の TONA 現金市場メカニズムについては [[money-market/INDEX|money-market index]]。規制のアンカー: FSA / BoJ の監督上の文脈については [[banking/INDEX|banking index]]。

## 1. ISDA 2020 プロトコル — それは何か

| 要素 | 詳細 |
|---|---|
| 公表者 | 国際スワップ・デリバティブ協会（ISDA） |
| 公表日 | 2020 年 23 月 |
| 発効日 | 2021 年 25 月 |
| 改定対象 | ISDA マスター契約および特定のその他の ISDA 文書 |
| タイプ | 多数当事者間の締結（各当事者は一度締結すれば、対象となるすべての双方向の関係が自動的に改定される） |
| 対象取引の範囲 | 2021 年 25 月以降の新規取引（2021 IBOR Fallbacks Supplement を通じて組み込み）；締結相手方との既存取引（プロトコル締結を通じて改定） |
| コスト | 締結に手数料なし |
| 締結メカニズム | ISDA ポータル経由のオンライン；法人ごとに一度の提出 |

本プロトコルは、双方向交渉の問題に対する **多数当事者間の治療法** である — これがなければ、すべての市場参加者は LIBOR 公表停止前に、IBOR を参照するすべてのデリバティブを双方向に改定しなければならず、業界規模では運用上不可能であった。

## 2. フォールバックレートのアーキテクチャ

対象 IBOR（米ドル LIBOR、ユーロ LIBOR、英ポンド LIBOR、円 LIBOR、スイスフラン LIBOR、円 TIBOR 等）が指定された「トリガーイベント」（典型的には運営者による公表停止の announcement）を経験すると、本プロトコルは以下を提供する:

| 構成要素 | 説明 |
|---|---|
| 置換レート | 通貨固有の RFR（円は TONA、米ドルは SOFR、ユーロは ESTR、英ポンドは SONIA、スイスフランは SARON） |
| 複利計算方法 | 同一テナー期間にわたる後決め複利での観測 |
| 観測シフト | 2営業日の後方観測シフト（すなわち、観測期間は支払期間開始の 2 日前に開始する） |
| 信用調整スプレッド（CAS） | IBOR の信用・銀行資金調達プレミアムを補償するために RFR に加算される固定スプレッド（テナーごと） |
| フォールバックの発効日 | IBOR 公表停止日（例: 円 LIBOR については、2021 年 31 月が最後の LIBOR 設定であったため、2022 年 1 月） |

CAS は **経済的等価性の調整** である — RFR はリスクフリーであり、IBOR は信用プレミアムを含んでいたため、CAS は過去の IBOR-RFR の中央値スプレッドを近似する。

## 3. 円 LIBOR フォールバックの詳細

| 円 LIBOR テナー | 置換 | CAS（bp、LIBOR 公表停止 announcement 日に固定） |
|---|---|---|
| オーバーナイト | TONA | 約 -1.8 bp（小さな負値 — オーバーナイト LIBOR は TONA を下回っていた） |
| 1週間 | 複利 TONA（1週間、2日観測シフト） | 約 -1.5 bp |
| 1ヶ月 | 複利 TONA（1ヶ月、2日観測シフト） | 約 -0.2 bp |
| 2ヶ月 | 複利 TONA | 中央値スプレッド |
| 3ヶ月 | 複利 TONA（3ヶ月、2日観測シフト） | 約 +0.8 bp（正値 — 3ヶ月 LIBOR は信用プレミアムを伴っていた） |
| 6ヶ月 | 複利 TONA | 約 +5.8 bp |
| 12ヶ月 | 複利 TONA | 約 +16.6 bp |

（これらの CAS 値は公表停止 announcement 日に **恒久的に固定** される — その後は変化しない。これらは、UK FCA によって公表停止 announcement がなされた 2021 年 3 月時点の、5年中央値で観測された円 LIBOR – RFR スプレッドを反映している。）

プロトコル経由で転換されたレガシーの円 LIBOR デリバティブについて、公表停止後の変動レッグは **同等期間にわたる TONA 複利 + テナー固有の CAS** を支払う。経済的な意図は、転換後のデリバティブが、平均して時間の経過とともに元の IBOR デリバティブのように振る舞うことである。

## 4. 円 LIBOR 公表停止タイムライン — 運用上のイベント

| 日付 | イベント |
|---|---|
| 2021 年 5 月 | UK FCA が円 LIBOR（およびその他の LIBOR）の公表停止日を確認；CAS スプレッドが恒久的に固定された |
| 2020 年 23 月 | ISDA 2020 IBOR Fallbacks Protocol 公表 |
| 2021 年 25 月 | プロトコル発効日；締結開始 |
| 2021 年を通じて | 日本の機関が締結；新規の円デリバティブ取引が TONA へシフト |
| 2021 年 31 月 | 円 LIBOR（1W、1M、2M、3M、6M、12M）が代表性ベースで停止 |
| 2022 年 1 月 | 締結当事者のレガシー円 LIBOR デリバティブが TONA + CAS へ自動転換 |
| 2022 年を通じて | 合成円 LIBOR（1M、3M、6M のみ）が、レガシー契約の経過措置的橋渡しとして UK FCA によって運営 |
| 2023 年 30 月 | 合成円 LIBOR 停止 |
| 2023 年末 | すべての円 LIBOR を参照するデリバティブが TONA または同等の RFR へ移行 |

## 5. TIBOR — 生き残った円レート

LIBOR とは異なり、**TIBOR（東京銀行間取引金利）** は LIBOR 公表停止後も継続した:

| TIBOR の種類 | ステータス | 運営者 |
|---|---|---|
| **D-TIBOR（国内 TIBOR）** | アクティブ | JBATA（全国銀行協会 TIBOR 運営機関） |
| **Z-TIBOR（ユーロ円 TIBOR）** | 2024 年 12 月廃止 | 従前は JBATA；廃止は利用低下と統合を反映 |
| **円 LIBOR** | 2021 年末停止（合成段階的廃止 2023年） | ICE Benchmark Administration が運営していた |

D-TIBOR は以下に引き続き使用される:
- 貸し手が（後決め複利 RFR ではなく）将来予測型のターム・レートを望む、ターム固定の円ローン
- LIBOR ではなく TIBOR を参照する一部のレガシー IRS
- ターム・レート参照を必要とする新規ストラクチャード商品

D-TIBOR は LIBOR と同じようには **ISDA 2020 プロトコルの対象とされていない** — 公表停止が予定されていないため、D-TIBOR を参照するデリバティブは引き続きそのまま使用される。将来 D-TIBOR が廃止されることになった場合、別途のフォールバック・アーキテクチャが必要となる（そして JSDA はそのシナリオに向けた標準フォールバック文言を準備してきた；セクション 7 を参照）。

## 6. 日本市場の締結状況

ISDA 2020 プロトコルへの締結は、運用上の必要性を反映して、日本では **非常に高かった**:

| 締結カテゴリ | 締結パターン |
|---|---|
| メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]） | 全社が公表停止前に締結 |
| 証券会社（[[securities-firms/nomura-hd|Nomura]]、Daiwa、[[securities-firms/mufg-securities|MUFG MS]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]） | 全社が締結 |
| 生命保険会社（日本生命、第一生命、住友生命 等） | 実質的に全社が締結 |
| 地方銀行 | 主要地方銀行が締結；一部の小規模地方銀行はより時間を要した |
| バイサイド機関 | 年金基金、アセットマネージャー — 広く締結 |
| 事業会社（非金融） | デリバティブ・ブックを持つ大企業は締結；LIBOR デリバティブのエクスポージャーを持たない多くの中小企業は締結を必要としなかった |
| 在日外国銀行 | 締結（親会社または現地法人を通じて） |

日本の締結法人の合計: 500+（グローバルの締結法人 約 16,000  のうち）。FSA は規制対象法人の締結状況を積極的に監視し、業界全体の採用を支援した。

非締結相手方については、**双方向の改定** が必要であった。双方向の円 LIBOR エクスポージャーの大部分は、2021年末までにプロトコルまたは双方向でカバーされた。

## 7. JSDA 2024 年文書改訂

2024, 年、[[financial-regulators/jsda|JSDA]]（日本証券業協会）は、日本市場の標準デリバティブ文書テンプレートの包括的な改訂を主導した:

| 要素 | 2024 年改訂前 | 2024 年改訂後 |
|---|---|---|
| 変動金利の定義 | しばしば円 LIBOR + TIBOR の代替を参照 | TONA 複利が主；ターム・レートを必要とする商品については TIBOR 条項を保持 |
| フォールバック・アーキテクチャ | LIBOR 公表停止文言は暫定的（2018–2019 年の supplement で追加） | ISDA 2020 プロトコルと整合した標準化された TONA フォールバック文言；TIBOR フォールバック文言を標準化 |
| 日数計算と観測シフト | 混在した慣行 | 標準化: 円は ACT/365 、TONA 複利については 2営業日観測シフト |
| 文書の言語 | 英語 / 日本語が混在 | 標準化された日本語 + 英語のバイリンガル版 |
| 商品横断の一貫性 | IRS、スワップション、ストラクチャード商品で異なるテンプレート | 商品固有のスケジュールを伴う統一テンプレート |
| 相手方の階層 | クロスボーダー取引向けに事前定義 | ポスト LIBOR の市場構造を反映するよう更新 |

2024 年改訂は、**LIBOR 移行の運用上の教訓** を反映している — 単一の標準化されたテンプレートを持つことで、双方向交渉の摩擦が減り、新規商品の立ち上げが加速する。また、将来の TIBOR 関連の移行ニーズに対しても日本市場を位置付けるものである。

## 8. 通貨間デリバティブ — オーバーレイ

一方のレッグが円（TIBOR または LIBOR）で、他方が米ドル（LIBOR / SOFR）またはユーロ（LIBOR / ESTR）である通貨間スワップについては、本プロトコルは **レッグごとに** 適用される:

| 通貨間の構成 | 2022 年フォールバック前 | 2022 年後（ポスト LIBOR 公表停止） |
|---|---|---|
| 円 LIBOR vs 米ドル LIBOR 通貨間スワップ | 両レッグがプロトコル経由で転換 | 円レッグ → TONA + CAS；米ドルレッグ → SOFR + CAS |
| 円 TIBOR vs 米ドル LIBOR 通貨間スワップ | 米ドルレッグのみ転換（TIBOR は影響なし） | TIBOR レッグは変更なし；米ドルレッグ → SOFR + CAS |
| 円 TIBOR vs 米ドル SOFR 通貨間スワップ | フォールバックの問題なし | 変更なし |

転換後のベーシス・スワップの仕組みについては [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] を参照。

## 9. 清算デリバティブ側 — JSCC と CCP の実装

日本の清算機関（[[financial-regulators/jsda|JSCC]] = 日本証券クリアリング機構；およびグローバルには LCH SwapClear、CME）は、清算された円 LIBOR デリバティブにフォールバック・アーキテクチャを実装した:

| ステップ | 説明 |
|---|---|
| 1. CCP ルールブック改定 | CCP は、レガシーの円 LIBOR 清算デリバティブが公表停止時に TONA + CAS へ転換されるよう、ルールブックを更新した |
| 2. 公表停止前の転換 | 一部の CCP（例: LCH SwapClear）は、強制的なルールベースの転換を通じてレガシーポジションを公表停止前に転換した |
| 3. ポジション・リバランス | 転換による価値への影響に対するメンバー間の補償支払い |
| 4. リスク管理の調整 | 当初証拠金および変動証拠金のキャリブレーションを更新 |

JSCC の清算デリバティブ・ブックは円 LIBOR については比較的小規模であった（円 LIBOR デリバティブはより多くが米 / EU で清算されていた）；転換は運用上スムーズであった。

## 10. 反論

- **「プロトコルは過剰設計だった」** — 批判者は締結コストと運用上の複雑さを指摘する；擁護者は数百万件の契約の双方向改定が業界規模では不可能であったと指摘する
- **「CAS は過剰または過小補償する」** — 固定 CAS は 5年中央値のスナップショットである；先行きの IBOR-RFR スプレッドが過去の中央値から大きく乖離した場合、転換は価値移転を生む。実際には、円の CAS 値は小さく（大部分が < 20 bp）、価値移転の懸念は限定的である
- **「TIBOR も TONA へ移行すべきだ」** — 一部の業界の声は、2 つの参照レート（TONA + TIBOR）を維持することは非効率だと主張する；擁護者は、ターム・レートの利用者（特に事業会社の貸し手）は依然として将来予測型のターム・レートを必要とすると主張する
- **「JSDA 文書改訂は遅すぎる」** — 2024 年に到来し（LIBOR 公表停止の 3 年後）、改訂は緊急性ではなく蓄積された教訓によって推進された；批判は、より早くできたはずだというものである
- **「合成 LIBOR は皆を混乱させた」** — 2022–2023 年の合成円 LIBOR の局面は複雑であった；市場参加者と格付け機関はハイブリッドな状態に対処しなければならなかった
- **「非締結の小規模相手方がテールリスクを生んだ」** — 一部の小規模地方銀行と事業会社は期限内に締結しなかった；これらのエクスポージャーの双方向の整理には 2022

年の大半を要した

## 11. 未解決の問い

- RFR 採用へのグローバルなトレンドを踏まえ、[[financial-regulators/jbatibor|JBATA D-TIBOR]] が長期的に生き残るかどうか（現在の FSA のスタンス: 利用が持続すれば D-TIBOR は継続）
- 円のターム RFR（例: 指定された運営者によって公表される将来予測型の TONA ターム・レート）が開発され、ターム固定の用途に受け入れられるかどうか
- 次の主要なフォールバックイベント（例: CCP ルールブックの変更や規制上のレート廃止）が、同様の多数当事者間メカニズムを通じて処理されるかどうか
- クロスボーダーの一貫性の役割 — JSDA / FSA がより強力な円文書の標準化を推し進める場合、それが ISDA のグローバルテンプレートとどのように相互作用するか
- 2024 年文書改訂が、新しい商品タイプ（気候連動デリバティブ、非金融ベンチマークに連動するストラクチャード商品）の運用上の摩擦を減らすかどうか

## Related

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
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[securities-firms/nomura-hd|Nomura]] · [[financial-regulators/jsda|JSDA]]
- [[securities-firms/mufg-securities|MUFG MS]] · [[securities-firms/smbc-nikko|SMBC Nikko]] · [[securities-firms/mizuho-securities|Mizuho Securities]]
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Dept]]

## Sources

- ISDA 2020 IBOR Fallbacks Protocol — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/
- ISDA — https://www.isda.org/
- JSDA TIBOR / IBOR 移行資料 — https://www.jsda.or.jp/en/
- FSA IBOR 移行資料 — https://www.fsa.go.jp/en/
- 日本円金利指標に関する検討委員会（BOJ） — https://www.boj.or.jp/en/
- JBATA TIBOR Administration — https://www.jbatibor.or.jp/english/
- UK FCA LIBOR 公表停止 announcement（2021年 5 月） — https://www.fca.org.uk/
- JSCC — https://www.jscc.co.jp/en/

---

> [!info] 校核状態
> confidence: **likely**。ISDA 2020 プロトコルの仕組み、円 LIBOR の CAS 値（2021年 5 月に Bloomberg index methodology によって公的に固定）、円 LIBOR 公表停止タイムライン、および日本市場の締結パターンは公的に文書化されている。2024 年の JSDA 文書改訂は業界で知られている。具体的な締結数（500+ の日本法人）は、公開された ISDA 締結当事者リストのスナップショットに基づく概数である。Z-TIBOR の 2024 年 12 月廃止は JBATA が公表したタイムラインを反映している。
