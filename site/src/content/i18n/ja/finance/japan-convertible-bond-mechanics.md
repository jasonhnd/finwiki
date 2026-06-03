---
source: finance/japan-convertible-bond-mechanics
source_hash: ad123e3128027510
lang: ja
status: machine
fidelity: ok
title: "日本の転換社債メカニクス"
translated_at: 2026-06-02T13:21:55.089Z
---

# 日本の転換社債メカニクス

## ウィキ上の位置づけ

このページは[[finance/INDEX|finance domain]]配下に位置づけられる。ブックランナーの帰属は[[finance/japan-ib-league-table|Japan IB league table]]、発行実務の配管は[[securities/japan-underwriting-market-structure|underwriting market structure]]、開示プロセスの類似論点は[[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]]、ローンチ前の情報管理は[[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]]、転換後の保有状況追跡は[[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]とあわせて読む。

## 要約

日本の転換社債（転換社債型新株予約権付社債、構造により CB または MSCB と呼ばれることが多い）は、株式への転換権を内包した債務証券である。発行フローは、発行会社の取締役会決議 → 主幹事 → ブックビルディング → 条件決定（クーポン、転換プレミアム、期間、call / put スケジュール）→ TDnet / EDINET 開示 → 決済 → 転換 / call / put の可能性、という順序を取る。バニラ型では転換プレミアムは通常、参照価格を15-40 %上回る水準になる。ヘッジ投資家は通常、株式ボラティリティと 債券フロア の間で裁定を行う。希薄化と株主総会決議の扱いは、発行構造（第三者割当か公募か）と希薄化の大きさに左右される。

## 商品分類

| 種類 | 日本語表記 | 構造上の注記 |
|---|---|---|
| バニラ型転換社債 | 転換社債型新株予約権付社債（ワラント内包型 CB） | 転換価額、クーポン、期間、ハード / ソフトコール保護 が固定 |
| ゼロクーポン転換社債 | ゼロクーポン CB | 日本の大型株発行で一般的。投資家利回りは CB 市場のボラティリティが吸収する |
| コールスプレッド 付き転換社債 | CB に店頭 コールスプレッド・オーバーレイ を付加 | 発行会社にとって実質的に転換プレミアムを引き上げる |
| MSCB（行使価額修正型 CB） | MSCB / 行使価額修正条項付転換社債 | 株価に応じて転換価額が下方修正される。大きな希薄化リスクがある |
| 交換社債 | 交換社債 | 発行会社が保有する別の上場会社株式へ交換可能な債券（例: 政策保有株の monetisation） |
| 強制転換型 | Mandatory CB | 満期時に強制転換され、株式に近い挙動を示す |
| CB 要素を含む株主割当 | 株主割当 | 既存株主に持株比率に応じて発行される |

日本の大型株では、バニラ型ゼロクーポン CB と交換社債が主要な形式である。MSCB はレピュテーションと希薄化への懸念から大型株では比較的少ないが、一部の小型・中型株の再建局面では見られる。

## 発行フロー

| 段階 | 活動 | 公開情報源 |
|---|---|---|
| 取締役会決議 | 取締役会が発行方針、構造、規模、資金使途を承認 | TDnet リリース |
| 主幹事選定 | 発行会社がブックランナーと共同主幹事を選定 | マンデートは TDnet の条件決定リリースで開示されることが多い |
| ストラクチャリング | 主幹事がクーポン、転換プレミアム、call / put スケジュール、希薄化防止、ヘッジ実務を設計 | 条件決定まで非公開 |
| プレマーケティング | 主幹事が主要投資家に事前ヒアリングを行う | [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]]の対象 |
| ブックビルディング | 募集条件を提示して需要を積み上げる。時間外または overnight が多い | TDnet のローンチおよび条件決定リリース |
| 条件決定 | クーポン、転換価額、プレミアム、call / put などの最終条件を決定 | EDINET 有価証券届出書、TDnet リリース |
| 決済 | 資金決済と社債の受渡し | 決済通知 |
| 上場 | TOKYO PRO-BOND Market への上場、または非上場の機関投資家向け発行 | 上場時は JPX 上場通知 |
| 発行後 | 転換通知、call / put 行使、クーポン支払い | TDnet / EDINET 変更開示 |

日本の CB の多くは、発行会社株価への市場リスク・エクスポージャーを抑えるため、時間外にローンチされ同日中に条件決定される。ローンチから条件決定までの窓は通常数時間である。

## 転換プレミアムの経済性

転換プレミアムとは、債券が株式へ転換される価格が参照株価をどれだけ上回るかを示す割合である。

| プレミアム範囲 | 典型的な文脈 |
|---|---|
| 0-10 % | ディストレス / 再建 CB、MSCB、低ボラティリティ発行会社 |
| 15-25 % | 標準的なミッドマーケットのバニラ CB |
| 25-40 % | 高いインプライド・ボラティリティを持つ大型優良株 CB |
| 40-60 % | 需要の強い高ボラティリティの tech / グロース 発行会社 |
| 60+ % | コールスプレッド構造、強制転換要素 |

参照株価は通常、タームシート で定める条件決定ウィンドウ中の出来高加重平均価格（VWAP）である。

インプライド・ボラティリティ、クレジット spread、配当利回り、株券貸借コストは 債券フロア とオプション価値の計算に反映される。株式ボラティリティが高いほど、一般に高い転換プレミアムを支えやすい。

## 債券フロアとオプション価値

CB 価格は経済的には、債券フロア（信用調整後利回りで割り引いたクーポンと元本の NPV）と、株式に対する内包 コールオプション に分解される。

| 構成要素 | ドライバー |
|---|---|
| 債券フロア | クーポン、元本、イールドカーブ、クレジット spread |
| オプション価値 | 株価、転換比率、ボラティリティ、期間、配当、金利 |
| CB 全体価値 | 債券フロア + オプション価値（早期コール / プット 条項を調整） |

投資家は次のように分かれる。

| 投資家タイプ | 戦略 |
|---|---|
| アウトライト・ファンダメンタル | 非対称な上方余地を狙って CB をロング。クーポン + 転換オプション |
| 転換社債アービトラージ | CB ロング、デルタニュートラル比率に応じた株式ショート。ボラティリティを収益化 |
| 株式リンク債インカム | クレジットと利回りに重点を置くアウトライト投資 |
| Mandatory / 優先株相当 | 満期時の準株式として扱う |

転換社債アービトラージ・ヘッジファンドは世界的に主要な需要源である。日本の需要ミックスには国内生命保険会社、資産運用会社、海外の転換社債特化ファンドが含まれる。

## ヘッジ比率（デルタ）

ヘッジ比率は、CB 価格の株価変動に対する感応度を測る。

| Delta | 解釈 |
|---|---|
| 0.0-0.3 | 債券に近い挙動。深いアウト・オブ・ザ・マネー |
| 0.3-0.5 | バランス型。バニラ CB の発行時として標準的な範囲 |
| 0.5-0.8 | 株式感応度が高い。株価が strike 近辺または上回る水準まで上昇 |
| 0.8-1.0 | 株式相当。deep in-the-money で転換可能性が高い |

裁定投資家は通常、CB ロングに対して株式を借りてショートする。株券貸借の可用性とコストは条件決定の入力となる。借株が限られると需要は圧縮され得る。

## コール / プット保護

| 条項 | 説明 |
|---|---|
| ハードコール保護 | 発行会社は指定日以前にコールできない |
| ソフトコール保護 | 株価が一定閾値を上回る場合のみ発行会社がコールできる（例: 転換価額の130 %超で20 /30 取引日） |
| 発行体コール | 額面または指定プレミアムで償還する権利 |
| 投資家プット | 指定日に額面または指定プレミアムで売り戻す権利 |
| 支配権変更プット | 定義された支配権変更トリガー発生時のプット権 |
| 税務コール | 税法変更がクーポンの損金算入に影響する場合のコール権 |
| メイクホール | 早期コールによって失われるオプション価値を投資家に補償 |

典型的な日本のバニラ CB は3-4 年のハードコール保護を持ち、その後はソフトコールとなる。プット日は中間時点に設定される（例: 3, 5, 7 年目を持つ10年構造）。

## 希薄化分析

| 項目 | 計算 |
|---|---|
| 転換株数 | CB 額面 / 転換価額 |
| 希薄化率 | 転換株数 /（既存株式数 + 転換株数） |
| 自己株式による相殺 | 発行会社は自己株式を交付に使うことで、新株発行による希薄化を抑えられる |
| 希薄化防止調整 | 株式分割、配当、ライツイシュー などに応じて転換価額を調整 |

大きな希薄化（例: 投資家の非公式閾値である約20-25 %超）は次の論点を生む。

- 有利条件による第三者割当が特別決議ルールを発動する場合の、会社法上の株主決議要件。
- 重大な希薄化を伴う発行に関する TSE / JPX の開示義務（具体的な報告と理由説明）。
- 既存株主からのフィードバックリスクと アクティビスト対応 の可能性。[[finance/japan-activist-investor-playbook|activist playbook]]および[[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]]参照。

## 株主決議上の考慮事項

会社法上、株式発行のルートが決議要件を左右する。

| ルート | 決議要件 |
|---|---|
| 公募 | 通常は取締役会決議で足りる。TSE ルールと希薄化閾値の対象 |
| 第三者割当 | 特に有利な条件でなければ取締役会決議で足りる。有利条件なら株主総会特別決議が必要 |
| 大規模希薄化 | TSE ルールにより、重大な希薄化では独立委員会意見または株主意思確認が求められる場合がある |
| ライツ・オファリング | 既存株主への優先的な募集 |

CB 発行でも、転換により新株が発生するため同様のルールが問題となる。条件決定プロセス の文書化は「特に有利ではない」とする結論を支える。ローンチ前の情報管理は[[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]]参照。

## 開示面

| 面 | 文書 |
|---|---|
| ローンチ前 | TDnet 取締役会決議リリース |
| ローンチ | TDnet ローンチ通知、EDINET 有価証券届出書 |
| 条件決定 | 最終条件を含む TDnet 条件決定リリース |
| 決済 | TDnet 決済通知 |
| 上場 | 上場する場合は JPX 債券上場通知 |
| 継続開示 | クーポン支払い、転換通知、call / put 行使を TDnet で開示 |
| 転換に伴う保有変動 | EDINET 大量保有報告書（[[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]参照） |

EDINET 提出書類は法定かつ権威ある情報であり、TDnet 開示は市場への適時伝達を担う。CB がより大きな資本構成取引の一部である場合、両ルートは[[finance/japan-tender-offer-process|tender offer process]]型の 市場影響分析 に接続する。

## 主幹事の帰属

| 銀行 | 日本 CB での役割 |
|---|---|
| [[JapanFG/nomura-hd|Nomura]] | 頻繁な 主幹事ブックランナー、ストラクチャリング・エージェント |
| [[JapanFG/daiwa-sg|Daiwa]] | 頻繁な 主幹事ブックランナー |
| [[JapanFG/smbc-nikko|SMBC Nikko]] | メガバンク系 lead / co-manager |
| [[JapanFG/mizuho-securities|Mizuho Securities]] | メガバンク系 lead / co-manager |
| Mitsubishi UFJ Morgan Stanley (MUMSS) | メガバンク / グローバル JV 主幹事 |
| [[JapanFG/goldman-sachs-japan|Goldman Sachs Japan]] | クロスボーダー / structured CB lead |
| [[JapanFG/morgan-stanley-japan|Morgan Stanley Japan]] | クロスボーダー / structured CB lead |
| その他外資系銀行 | グローバル・トランシェのクロスボーダー主幹事 |

リーグテーブル のクレジットは、ECM / 株式リンク カテゴリーを分けた[[finance/japan-ib-league-table|league table]]ソースを通じて配分される。バニラ型ゼロクーポン CB のブックビルディングは通常、1社または2社の lead が中核となる。

## 日本上場企業による近年の大型 CB

プロセスレベルの公開観察のみ。FinWiki は非公開条件を保存しない。

| 発行会社カテゴリー | 公開プロセス上の観察 |
|---|---|
| 大型 tech | TDnet / EDINET で開示された コールスプレッド・オーバーレイ 付き複数 tranche ゼロクーポン CB |
| 大型 auto / industrial | 借換、capex、M&A を目的とする数十億円規模以上の CB tranche |
| 政策保有株への exchangeable | 政策保有株の monetise に使われる交換社債。[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]参照 |
| Growth 発行会社（Prime / Standard / Growth） | capex / M&A 目的の中型 CB 発行 |

個別の発行条件は公開 TDnet / EDINET 提出書類を相互参照する。

## 資金使途

| 目的 | 頻度 |
|---|---|
| 既存債務の借換 | 非常に多い |
| Capex / R&D | 多い |
| M&A 資金 | 多い |
| 自社株買い hedge | やや少ない。自己株式プログラムと組み合わされる場合がある |
| 政策保有株 monetisation（exchangeable） | 特定用途 |
| 一般事業目的 | 通常発行で多い |

EDINET の届出書では、発行会社による資金使途の開示が求められる。

## 関連項目

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
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: FIEA 公開買付 FAQ および有価証券届出制度。
- JPX: TDnet 適時開示の概要および上場会社検索。
- EDINET: 有価証券届出書および大量保有報告書。
- Japanese Law Translation: 会社法（株式発行、第三者割当、特別決議）。
- BOJ: 市場統計の公開ハブ。
- Nomura、Daiwa: 投資銀行 および 株式リンク 公開資料。
