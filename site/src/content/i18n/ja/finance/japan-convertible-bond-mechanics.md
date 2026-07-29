---
source: finance/japan-convertible-bond-mechanics
source_hash: baef8defb7e691d3
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の転換社債の仕組み"
translated_at: 2026-07-29T00:00:00.000Z
---

# 日本の転換社債の仕組み

## ウィキ経路

本ページは [[finance/INDEX|finance domain]] の下に位置する。ブックランナーの帰属については [[finance/japan-ib-league-table|Japan IB league table]]、発行実務については [[securities/japan-underwriting-market-structure|underwriting market structure]]、開示プロセスの類似例については [[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]]、ローンチ前の情報管理については [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]]、転換後の所有権トラッキングについては [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] と併せて読む。

## 要約

日本の転換社債（転換社債型新株予約権付社債、一般に CB と略す）は、株式への転換権を組み込んだ負債証券である。MSCB は条件に基づく転換価額修正型の構造であり、すべての CB の同義語ではない。発行フロー、転換プレミアム、クーポン、期間、コール / プット・スケジュール、決済方法は証券固有であり、発行体の TDnet・EDINET 開示で確認する。以下のコールまたはデルタに関する数値例は 2026-07-29 時点の例示的なモデル入力であり、市場統計ではない。希薄化と株主保護手続は法的な発行ルート、条件、希薄化率に依存する。

## プロダクト分類

表の出典注記：本表は法的・構造的な分類であり、市場シェアを示すものではない。転換社債と新株予約権の仕組みは会社法に基づき、上場発行体の希薄化を伴う資金調達には JPX のエクイティ・ファイナンス枠組みも適用される。^[出典: https://www.japaneselawtranslation.go.jp/en/laws/view/3206/en および https://www.jpx.co.jp/english/regulation/listing/equity-finance/.]

| 種別 | 日本語の用語 | 構造上の注記 |
|---|---|---|
| バニラ転換社債 | 転換社債型新株予約権付社債 (新株予約権が組み込まれた CB) | 固定転換価格、クーポン、期間、ハード / ソフトのコール・プロテクション |
| ゼロクーポン転換社債 | Zero-coupon CB | クーポンその他の経済条件は対象開示で確認する。本ページは頻度を主張しない |
| コールスプレッド付き転換社債 | CB に店頭のコールスプレッド・オーバーレイを付加 | 別契約の条件を確認し、実際の希薄化・経済効果を個別にモデル化する |
| MSCB (転換価額修正条項付 CB) | MSCB / 行使価額修正条項付転換社債 | 転換価格が株価に応じて下方修正される；著しい希薄化リスク |
| 交換社債 | 交換社債 | 発行体が保有する別の上場会社の株式に交換可能な社債 (例：持合株式のマネタイズ) |
| 強制転換社債 | Mandatory CB | 転換義務と決済は証券条件に従う。本ページでは会計・経済分類を推定しない |
| CB 部分を伴う株主割当増資 | 株主割当 | 既存株主にプロラタで発行される |

バニラのゼロクーポン CB、交換社債その他の構造は発行体開示で確認できるが、本ページは現在の形式別順位や市場シェアを主張しない。市場頻度を論じる場合は、期間を定めて EDINET/TDnet の証券構成を検証する。

## 発行フロー

表の出典注記：本表は公開開示ワークフローを整理したもので、実際の順序と書類は募集により異なる。TDnet は JPX の適時開示経路、EDINET は法定開示経路である。^[出典: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/ および https://disclosure2.edinet-fsa.go.jp/.]

| 段階 | 活動 | 公開ソース |
|---|---|---|
| 取締役会決議 | 取締役会が発行の原則、構造、規模、資金使途を承認 | TDnet リリース |
| 主幹事の選定 | 対象開示からブックランナー、マネージャー、エージェントの有無を特定 | 役割が実際に開示された TDnet / EDINET 文書 |
| ストラクチャリング | 主幹事その他のアドバイザーがクーポン、転換プレミアム、コール / プット・スケジュール、希薄化防止、ヘッジの仕組みの設計に関与したかを具名の提出書類で確認し、選任だけから役割を推定しない | 役割を開示する具名の提出書類または募集書類 |
| プレマーケティング | 投資家への事前打診は具名の提出書類または募集書類が開示する場合に限り記録し、ブックビルディングから推定しない | 開示がある具名の提出書類または募集書類。[[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] を適用 |
| ブックビルディング | 対象開示からマーケティングと価格決定の時期を確認し、オーバーナイト・プロセスを前提にしない | TDnet のローンチおよびプライシング・リリース |
| プライシング | 最終条件の設定：クーポン、転換価格、プレミアム、コール / プット | EDINET 有価証券届出書 (ゆうかさい-けいこく-しょるい)、TDnet リリース |
| 決済 | 現金決済および社債の引渡し | 決済通知 |
| 上場 | TOKYO PRO-BOND Market への社債上場、または非上場の機関投資家向け私募 | 上場する場合は JPX 上場通知 |
| 発行後 | 転換通知、コール / プット行使、クーポン支払 | TDnet / EDINET の訂正 |

各発行について、取締役会、ローンチ、プライシング、EDINET / TDnet 文書のタイムスタンプを比較する。本ページは、価格決定がオーバーナイト、同日、または数時間以内に完了するとの一般的主張をしない。

## 転換プレミアムの経済性

転換プレミアムとは、社債が転換される際の参照株価を上回るパーセンテージである。

| フィールド | 案件固有の確認 |
|---|---|
| 参照株価 | 最終条件に記載された正確な価格、日時、取引所、定義を引用する |
| 転換価格 | 正確な当初価格・修正価格と調整式を引用する |
| 記載された転換プレミアム | 開示で定義された参照価格から再計算し、市場レンジを流用しない |
| コールスプレッド・オーバーレイ | CB と分け、一般的なプレミアム効果ではなく約定条件でモデル化する |
| 修正条項 / 強制転換条項 | 実際のフロア、キャップ、日付、決済、希薄化防止条項を適用する |

参照株価は VWAP、終値、または別の定義値である可能性がある。対象の最終条件に記載された定義と期間だけを用いる。

インプライド・ボラティリティ、クレジット・スプレッド、配当利回り、株式の貸借コスト、コール / プット、修正条項、決済方法は評価入力になり得る。交渉されたプレミアムへの影響はモデル・案件固有であり、一つの入力だけから投資家需要または方向性を推定しない。

## ボンドフロアとオプション価値

CB の価格は、経済的に、ボンドフロア（クレジット調整後利回りでのクーポンと元本の NPV）と株式に対する組込みコール・オプションとに分解される。

| 構成要素 | ドライバー |
|---|---|
| ボンドフロア | クーポン、元本、イールドカーブ、クレジット・スプレッド |
| オプション価値 | 株価、転換比率、ボラティリティ、時間、配当、金利 |
| CB 総価値 | ボンドフロア + オプション価値 (早期コール / プットの特徴による調整あり) |

可能な戦略ラベルには次がある。

| 投資家タイプ | 戦略 |
|---|---|
| アウトライト・ファンダメンタル | 非対称なアップサイドを狙うロング CB；クーポン + 転換オプション |
| コンバーティブル・アービトラージ | ロング CB、デルタ・ニュートラルなヘッジ比率に応じた株式ショート；ボラティリティを収穫 |
| エクイティ・リンク・インカム | クレジットと利回り重視のアウトライト |
| 強制転換 / 優先株相当という戦略ラベル | 転換、決済、損失吸収、満期、適用会計またはマンデート条件から証券を分類し、疑似株式としての扱いを推定しない |

需要構成は、対象ブック、配分開示、ファンド保有、その他の日付付き証拠からのみ判断する。この戦略分類は、ヘッジファンド、生命保険会社、アセットマネージャー、海外ファンドの参加を証明しない。

## ヘッジ比率（デルタ）

ヘッジ比率は、株価変動に対する CB 価格の感応度を測る。

| デルタ | 解釈 |
|---|---|
| 0.0-0.3 | 債券的な挙動；ディープ・アウト・オブ・ザ・マネー |
| 0.3-0.5 | 例示的な中間デルタ帯。発行時の標準レンジではない |
| 0.5-0.8 | 株式感応的；株価が行使価格に向けて / を上回って上昇している |
| 0.8-1.0 | 株式相当；ディープ・イン・ザ・マネー、転換が見込まれる |

表の出典注記：デルタ帯は例示的な分析区分であり、発行時の標準的な分布ではない。日付を明示し、選択したモデルと正確な条件から証券のデルタを計算する。^[出典: https://pages.stern.nyu.edu/~adamodar/pdfiles/papers/realopt.pdf.]

ロング CB に対して株式をショートする戦略では、ロケート、借入費用、リコール、配当、コーポレートアクション、デルタ・モデル、リバランスを確認する。案件レベルの証拠なしに需要圧縮を推定しない。

## コールおよびプットのプロテクション

表の出典注記：以下は一般的な契約条項であり、法令が定める条件または現在の市場標準ではない。例示した閾値・保護期間は、発行体の EDINET/TDnet 最終条件に置き換える必要がある。^[出典: https://disclosure2.edinet-fsa.go.jp/ および https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/.]

| 特徴 | 説明 |
|---|---|
| ハード・コール・プロテクション | 発行体は指定日より前にコールできない |
| ソフト・コール・プロテクション | 発行体は証券に定めた株価・観測期間テストを満たした場合のみコールできる（130% / 30 日中 20 日という条件は例示のみ） |
| 発行体コール | 額面または指定プレミアムで償還する権利 |
| 投資家プット | 指定日に額面または指定プレミアムで買い戻させる権利 |
| 支配権変動プット | 定義された支配権変動トリガー時のプット権 |
| 税務コール | 税法の変更がクーポンの損金算入に影響する場合のコール権 |
| メイクホール | 早期コール時に失われたオプション価値を投資家に補償する |

保護期間とプット日は証券固有である。3-4 年のハード・コール期間や中間プット日はモデル例として利用できるが、本ページは現在の日本市場標準とは主張しない。

## 希薄化分析

| フィールド | 計算 |
|---|---|
| 転換株式数 | CB 額面 / 転換価格 |
| 希薄化パーセント | 転換株式数 / (既存株式数 + 転換株式数) |
| 自己株式による相殺 | 発行体は自己株式を交付に用いることができ、新規発行による希薄化を低減する |
| 希薄化防止調整 | 転換価格は株式分割、配当、ライツ・イシュー等に応じて調整される |

潜在的に著しい希薄化は、次の論点を惹起する。

- 有利な条件での第三者割当が特別決議のルールを発動させる場合の、会社法上の株主投票要件。
- 現行ルールと例外に従い、希薄化率 25% 以上の第三者割当に適用される JPX の株主保護手続。
- 既存株主のフィードバック・リスク；アクティビストの反応の可能性 — [[finance/japan-activist-investor-playbook|activist playbook]] と [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]] を参照。

## 株主投票に関する考慮

会社法の下では、株式発行のルートが投票要件を決定する。

表の出典注記：会社法上の承認は証券、授権、条件が「特に有利」かに依存する。別途、JPX は希薄化率 25% 以上の第三者割当について株主保護手続を求め、さらに高い希薄化には追加ルールを設ける。本表は法的助言ではなく動線要約である。^[出典: https://www.japaneselawtranslation.go.jp/en/laws/view/3206/en および https://www.jpx.co.jp/english/regulation/listing/equity-finance/.]

| ルート | 投票要件 |
|---|---|
| 公募 (kōbo) | 証券、授権枠、発行機関、条件、有利発行の検討、定款、適用される会社法 / JPX 要件を確認する。取締役会のみで足りるとの一律の結論を置かない |
| 第三者割当 (daisansha wariate) | 会社・証券に適用される会社法条文と、条件が特に有利かを確認し、必要な機関と手続を特定する |
| 希薄化率 25% 以上の第三者割当 | JPX の株主保護手続が適用される。認められる意見・承認ルートと例外は現行規則で確認する |
| 株主割当 | 既存株主への割当 (プリエンプティブ) 増資 |

新株予約権付社債については、普通株式発行との類推を前提にせず、社債と新株予約権に適用される条文を検討する。価格決定文書は検討対象となる証拠であり、条件が「特に有利」でないことの証明ではない。ローンチ前の情報管理については [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] を参照。

## 開示サーフェス

表の出典注記：各行は二つの公式公開経路とあり得る提出段階を示す。すべての証券が上場され、または列挙した全書類を作成するとは限らない。^[出典: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/ および https://disclosure2.edinet-fsa.go.jp/.]

| サーフェス | 文書 |
|---|---|
| 取締役会決議／発表 | 開示がある場合の TDnet 取締役会決議または発行発表 |
| ローンチ | TDnet のローンチ通知、EDINET 有価証券届出書 |
| プライシング | 最終条件を伴う TDnet のプライシング・リリース |
| 決済 | TDnet の決済通知 |
| 上場 | JPX の社債上場通知 (上場する場合) |
| 継続的 | TDnet 経由のクーポン支払、転換通知、コール / プット行使 |
| 転換に起因する所有権変動 | EDINET の大量保有報告書 ([[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] を参照) |

EDINET 提出書類は法定かつ権威あるもの；TDnet 提出書類はタイムリーな市場周知を提供する。CB がより大きな資本構成取引の一部である場合、両ルートとも [[finance/japan-tender-offer-process|tender offer process]] スタイルの市場インパクト分析に入力される。

## 主幹事の帰属

表の出典注記：リンク先の会社は検索経路であり、CB リーグテーブルまたは役割帰属ではない。日付と案件を特定し、対象発行体の TDnet / EDINET または募集文書からのみ役割を割り当てる。^[出典: https://disclosure2.edinet-fsa.go.jp/ および https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/.]

| 銀行 | 日本の CB における役割 |
|---|---|
| [[securities-firms/nomura-hd|Nomura]] | 対象開示からリード、マネージャー、エージェント、ストラクチャリングの役割を確認する |
| [[securities-firms/daiwa-sg|Daiwa]] | 対象開示から正確な役割を確認する |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 対象開示から正確な役割と法的主体を確認する |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 対象開示から正確な役割と法的主体を確認する |
| Mitsubishi UFJ Morgan Stanley (MUMSS) | 対象開示から正確な役割と法的主体を確認する |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 対象開示から正確な役割と法的主体を確認する |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | 対象開示から正確な役割と法的主体を確認する |
| その他の銀行 | 対象開示が主体と役割を特定する場合にのみ追加する |

リーグテーブルの帰属には、分類、期間、クレジット付与ルールが定義された [[finance/japan-ib-league-table|league table]] ソースを用いる。一社または二社が主幹事になると仮定しない。

## 日本の上場企業による近年の大型 CB

プロセスレベルの公開された観察のみ。FinWiki は私的な条件を保存しない。

| 発行体カテゴリー | 公開されたプロセスの観察 |
|---|---|
| 大型株テック | 選択した期間を検索し、実際の CB、トランシェ、オーバーレイ開示を一件ずつ引用する |
| 大型株オート / インダストリアル | 選択した期間を検索し、発行体カテゴリーから規模または資金使途を推定しない |
| 持合株式への交換 | 参照株式、決済方法、記載された目的を確認する — [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] を参照 |
| グロース発行体 (Prime / Standard / Growth) | 選択した市場区分と期間を検索する。カテゴリーだけでは発行または目的を証明しない |

特定の発行条件については、公開された TDnet / EDINET 提出書類を相互参照すること。

## 資金使途

| 目的 | 開示確認 |
|---|---|
| 既存債務のリファイナンス | 対象開示から正確な金額、債務、時期、配分を引用する |
| 設備投資 / R&D | プロジェクト、金額、期間、再配分条件を引用する |
| M&A 資金 | 記載された、または条件付きの目的と代替使途を引用する |
| 自社株買い / 自己株式プログラム | 法的・経済的な連動を確認し、ヘッジと推定しない |
| 持合株式のマネタイズ (交換) | 参照株式、目的、決済条件を確認する |
| 一般事業目的 | 開示文言と配分上限を記録し、頻度を推定しない |

対象募集について、適用される EDINET 届出書と訂正書類を読み、必要な資金使途開示と実際の開示を確認する。

## 関連

- [[finance/INDEX]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-underwriting-market-structure]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: FIEA の公開買付 FAQ および有価証券届出のフレームワーク。
- JPX: TDnet タイムリー・ディスクロージャーの概要および上場会社検索。
- EDINET: 有価証券届出書および大量保有報告書。
- Japanese Law Translation: 会社法 (株式発行、第三者割当、特別決議)。
- BOJ: 市場統計の公開ハブ。
- Nomura、Daiwa: 投資銀行およびエクイティ・リンクの公開資料。
