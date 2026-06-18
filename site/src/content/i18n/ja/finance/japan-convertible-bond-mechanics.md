---
source: finance/japan-convertible-bond-mechanics
source_hash: fb3b125eddbde36a
lang: ja
status: machine
fidelity: ok
title: "日本の転換社債の仕組み"
translated_at: 2026-06-18T23:59:13.066Z
---

# 日本の転換社債の仕組み

## ウィキ経路

本ページは [[finance/INDEX|finance domain]] の下に位置する。ブックランナーの帰属については [[finance/japan-ib-league-table|Japan IB league table]]、発行の配管（プラミング）については [[securities/japan-underwriting-market-structure|underwriting market structure]]、開示プロセスの類似物については [[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]]、ローンチ前の情報管理については [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]]、転換後の所有権トラッキングについては [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] と併せて読むこと。

## 要約

日本の転換社債（転換社債型新株予約権付社債、構造により CB または MSCB と呼ばれることが多い）は、株式への転換権が組み込まれた負債証券である。発行フロー：発行体の取締役会決議 → 主幹事 → ブックビルディング → プライシング（クーポン、転換プレミアム、期間、コール / プット・スケジュール）→ TDnet / EDINET 開示 → 決済 → 潜在的な転換 / コール / プット。転換プレミアムは、バニラ案件で参照価格を 15-40 percent 上回るのが一般的。ヘッジ投資家は通常、株式ボラティリティをボンドフロアに対してアービトラージする。発行による希薄化と株主投票の取扱いは、発行構造（第三者割当 vs 公募）および希薄化の規模に依存する。

## プロダクト分類

| 種別 | 日本語の用語 | 構造上の注記 |
|---|---|---|
| バニラ転換社債 | 転換社債型新株予約権付社債 (新株予約権が組み込まれた CB) | 固定転換価格、クーポン、期間、ハード / ソフトのコール・プロテクション |
| ゼロクーポン転換社債 | Zero-coupon CB | 日本の大型株発行で一般的；CB 市場のボラティリティが投資家の利回りを吸収する |
| コールスプレッド付き転換社債 | CB に店頭のコールスプレッド・オーバーレイを付加 | 発行体にとって実質的に転換プレミアムを引き上げる |
| MSCB (転換価額修正条項付 CB) | MSCB / 行使価額修正条項付転換社債 | 転換価格が株価に応じて下方修正される；著しい希薄化リスク |
| 交換社債 | 交換社債 | 発行体が保有する別の上場会社の株式に交換可能な社債 (例：持合株式のマネタイズ) |
| 強制転換社債 | Mandatory CB | 満期での強制転換；より株式に近い挙動 |
| CB 部分を伴う株主割当増資 | 株主割当 | 既存株主にプロラタで発行される |

バニラのゼロクーポン CB と交換社債が、日本の大型株における支配的なフォーマットである。MSCB はレピュテーションおよび希薄化の懸念から大型株レベルでは一般的でないが、一部の中小型株のリストラクチャリングの文脈で現れる。

## 発行フロー

| 段階 | 活動 | 公開ソース |
|---|---|---|
| 取締役会決議 | 取締役会が発行の原則、構造、規模、資金使途を承認 | TDnet リリース |
| 主幹事の選定 | 発行体がブックランナーおよびコ・マネージャーを選定 | マンデートは TDnet のプライシング・リリースで開示されることが多い |
| ストラクチャリング | 主幹事がクーポン、転換プレミアム、コール / プット・スケジュール、希薄化防止、ヘッジの仕組みを設計 | プライシングまで非公開 |
| プレマーケティング | 主幹事が主要投資家に事前打診 | [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] の対象 |
| ブックビルディング | マーケットされたブックビルド、引け後または翌日にまたがることが多い | TDnet のローンチおよびプライシング・リリース |
| プライシング | 最終条件の設定：クーポン、転換価格、プレミアム、コール / プット | EDINET 有価証券届出書 (ゆうかさい-けいこく-しょるい)、TDnet リリース |
| 決済 | 現金決済および社債の引渡し | 決済通知 |
| 上場 | TOKYO PRO-BOND Market への社債上場、または非上場の機関投資家向け私募 | 上場する場合は JPX 上場通知 |
| 発行後 | 転換通知、コール / プット行使、クーポン支払 | TDnet / EDINET の訂正 |

多くの日本の CB は、発行体株価への市場リスク・エクスポージャーを最小化するため、引け後の翌日にまたがってローンチされ、同日にプライシングされる。ローンチからプライシングまでの窓は通常、数時間である。

## 転換プレミアムの経済性

転換プレミアムとは、社債が転換される際の参照株価を上回るパーセンテージである。

| プレミアムのレンジ | 典型的な文脈 |
|---|---|
| 0-10 percent | ディストレス / リストラクチャリング CB、MSCB、低ボラティリティの発行体 |
| 15-25 percent | 標準的なミッドマーケットのバニラ CB |
| 25-40 percent | 高いインプライド・ボラティリティを持つ大型優良株 CB |
| 40-60 percent | 強い需要を持つ高ボラティリティのテック / グロース発行体 |
| 60+ percent | コールスプレッド構造、強制転換の特徴 |

参照株価は通常、ターム・シートで定義された特定のプライシング窓における出来高加重平均価格（VWAP）である。

インプライド・ボラティリティ、クレジット・スプレッド、配当利回り、株式の貸借コストが、ボンドフロアおよびオプション価値の計算に入力される。株式ボラティリティが高いほど、通常、より高い転換プレミアムを支える。

## ボンドフロアとオプション価値

CB の価格は、経済的に、ボンドフロア（クレジット調整後利回りでのクーポンと元本の NPV）と株式に対する組込みコール・オプションとに分解される。

| 構成要素 | ドライバー |
|---|---|
| ボンドフロア | クーポン、元本、イールドカーブ、クレジット・スプレッド |
| オプション価値 | 株価、転換比率、ボラティリティ、時間、配当、金利 |
| CB 総価値 | ボンドフロア + オプション価値 (早期コール / プットの特徴による調整あり) |

投資家は次のように分かれる。

| 投資家タイプ | 戦略 |
|---|---|
| アウトライト・ファンダメンタル | 非対称なアップサイドを狙うロング CB；クーポン + 転換オプション |
| コンバーティブル・アービトラージ | ロング CB、デルタ・ニュートラルなヘッジ比率に応じた株式ショート；ボラティリティを収穫 |
| エクイティ・リンク・インカム | クレジットと利回り重視のアウトライト |
| 強制転換 / 優先株相当 | 満期で疑似株式として扱う |

コンバーティブル・アービトラージのヘッジファンドは、世界的に主要な需要源である；日本の需要構成には、国内の生命保険会社、アセットマネージャー、ならびに海外のコンバーティブル特化ファンドが含まれる。

## ヘッジ比率（デルタ）

ヘッジ比率は、株価変動に対する CB 価格の感応度を測る。

| デルタ | 解釈 |
|---|---|
| 0.0-0.3 | 債券的な挙動；ディープ・アウト・オブ・ザ・マネー |
| 0.3-0.5 | バランス；バニラ CB の発行時の標準レンジ |
| 0.5-0.8 | 株式感応的；株価が行使価格に向けて / を上回って上昇している |
| 0.8-1.0 | 株式相当；ディープ・イン・ザ・マネー、転換が見込まれる |

アービトラージ投資家は通常、ロング CB ポジションに対して株式を借り入れる。株式の借入の可用性とコストは、プライシングへの入力である。借入が限られると需要を圧縮しうる。

## コールおよびプットのプロテクション

| 特徴 | 説明 |
|---|---|
| ハード・コール・プロテクション | 発行体は指定日より前にコールできない |
| ソフト・コール・プロテクション | 発行体は、株価が閾値を上回って取引される場合にのみコールできる (例：転換価格の 130 percent を、30 取引日のうち 20 ) |
| 発行体コール | 額面または指定プレミアムで償還する権利 |
| 投資家プット | 指定日に額面または指定プレミアムで買い戻させる権利 |
| 支配権変動プット | 定義された支配権変動トリガー時のプット権 |
| 税務コール | 税法の変更がクーポンの損金算入に影響する場合のコール権 |
| メイクホール | 早期コール時に失われたオプション価値を投資家に補償する |

典型的な日本のバニラ CB は、3-4 年のハード・コール・プロテクションを伴い、その後はソフト・コールとなり、中間の間隔でプット日を設ける (例：10年構造のうち 3, 5, 7 年目)。

## 希薄化分析

| フィールド | 計算 |
|---|---|
| 転換株式数 | CB 額面 / 転換価格 |
| 希薄化パーセント | 転換株式数 / (既存株式数 + 転換株式数) |
| 自己株式による相殺 | 発行体は自己株式を交付に用いることができ、新規発行による希薄化を低減する |
| 希薄化防止調整 | 転換価格は株式分割、配当、ライツ・イシュー等に応じて調整される |

著しい希薄化 (非公式の投資家閾値、例えば ~20-25 percent を上回る) は、次を惹起する。

- 有利な条件での第三者割当が特別決議のルールを発動させる場合の、会社法上の株主投票要件。
- 重要な希薄化発行に対する TSE / JPX の開示義務 (特定の報告および理由付け)。
- 既存株主のフィードバック・リスク；アクティビストの反応の可能性 — [[finance/japan-activist-investor-playbook|activist playbook]] と [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]] を参照。

## 株主投票に関する考慮

会社法の下では、株式発行のルートが投票要件を決定する。

| ルート | 投票要件 |
|---|---|
| 公募 (kōbo) | 取締役会決議で通常は十分；TSE ルールおよび希薄化閾値の対象 |
| 第三者割当 (daisansha wariate) | 特に有利な条件でなければ取締役会決議で十分；条件が有利な場合は特別株主決議が必要 |
| 大規模な希薄化 | TSE ルールは、著しい希薄化について独立委員会の意見または株主投票を要求しうる |
| 株主割当 | 既存株主への割当 (プリエンプティブ) 増資 |

CB の発行は、転換が新株を創出するため、類似のルールに従う。プライシング・プロセスの文書が、「特に有利でない」との結論を支える。ローンチ前の情報管理については [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] を参照。

## 開示サーフェス

| サーフェス | 文書 |
|---|---|
| ローンチ前 | TDnet の取締役会決議リリース |
| ローンチ | TDnet のローンチ通知、EDINET 有価証券届出書 |
| プライシング | 最終条件を伴う TDnet のプライシング・リリース |
| 決済 | TDnet の決済通知 |
| 上場 | JPX の社債上場通知 (上場する場合) |
| 継続的 | TDnet 経由のクーポン支払、転換通知、コール / プット行使 |
| 転換に起因する所有権変動 | EDINET の大量保有報告書 ([[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] を参照) |

EDINET 提出書類は法定かつ権威あるもの；TDnet 提出書類はタイムリーな市場周知を提供する。CB がより大きな資本構成取引の一部である場合、両ルートとも [[finance/japan-tender-offer-process|tender offer process]] スタイルの市場インパクト分析に入力される。

## 主幹事の帰属

| 銀行 | 日本の CB における役割 |
|---|---|
| [[securities-firms/nomura-hd|Nomura]] | 頻繁なリード・ブックランナー、ストラクチャリング・エージェント |
| [[securities-firms/daiwa-sg|Daiwa]] | 頻繁なリード・ブックランナー |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | メガバンク連携のリードおよびコ・マネージャー |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | メガバンク連携のリードおよびコ・マネージャー |
| Mitsubishi UFJ Morgan Stanley (MUMSS) | メガバンク / グローバル JV のリード |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | クロスボーダー / ストラクチャード CB のリード |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | クロスボーダー / ストラクチャード CB のリード |
| その他の外資系銀行 | グローバル・トランシェのためのクロスボーダー主幹事 |

リーグテーブルのクレジットは [[finance/japan-ib-league-table|league table]] ソースを通じて配分され、ECM / エクイティ・リンク・カテゴリーを分離する。バニラのゼロクーポン CB のブックビルディングは、通常、一つまたは二つのリードがアンカーとなる。

## 日本の上場企業による近年の大型 CB

プロセスレベルの公開された観察のみ。FinWiki は私的な条件を保存しない。

| 発行体カテゴリー | 公開されたプロセスの観察 |
|---|---|
| 大型株テック | TDnet / EDINET 経由で開示された、コールスプレッド・オーバーレイ付きのマルチトランシェのゼロクーポン CB |
| 大型株オート / インダストリアル | リファイナンス、設備投資、または M&A のための数十億円規模の CB トランシェ |
| 持合株式への交換 | 持合株式をマネタイズするために用いられる交換社債 — [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] を参照 |
| グロース発行体 (Prime / Standard / Growth) | 設備投資 / M&A のための中型株 CB の発行 |

特定の発行条件については、公開された TDnet / EDINET 提出書類を相互参照すること。

## 資金使途

| 目的 | 頻度 |
|---|---|
| 既存債務のリファイナンス | 非常に一般的 |
| 設備投資 / R&D | 一般的 |
| M&A の軍資金 | 一般的 |
| 自社株買いのヘッジ | あまり一般的でない、自己株式プログラムと組み合わせられることがある |
| 持合株式のマネタイズ (交換) | 限定的なユースケース |
| 一般事業目的 | 通常の発行で一般的 |

資金使途については、EDINET の届出書において発行体の開示が要求される。

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
