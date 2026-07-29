---
source: derivatives/japan-irs-market
source_hash: c07c36c0ab6999f3
lang: ja
status: machine
fidelity: ok
title: "日本円金利スワップ（IRS）市場"
translated_at: 2026-07-29T19:25:00.000Z
---

# 日本円金利スワップ（IRS）市場

## TL;DR

円金利スワップ（IRS）市場は、二つの取引相手が、定められた期間にわたり、契約で定義した円建ての固定金利キャッシュフローと変動金利キャッシュフローを交換する OTC デリバティブ市場である。機関別の利用目的、取引方向、商品シェアを判断するには、日付付きの取引またはポートフォリオの証拠が必要である。

日本円 TIBOR は引き続き公表されており、TONA は OIS と、該当する円 RFR フォールバックの原指標となる（[[derivatives/ois-tona-curve]] を参照）。現在の商品シェアや年限別流動性を論じるには、対象指標と商品範囲を明示した日付付きの取引施設、取引情報蓄積機関、またはディーラーのデータが必要である。

FinWiki にとって、本エントリは固定-変動スワップのメカニクス、TIBOR から TONA への移行と継続する TIBOR-IRS、想定元本残高、ディーラーバンクのフランチャイズ構造、JSCC クリアリングのマンデート、そしてエンドユーザー構成（事業会社 対 金融機関）をカバーする。

## Wiki ルート

本エントリは [[derivatives/INDEX|derivatives index]] の配下に位置する。割引カーブおよび短テナー RFR 側については [[derivatives/ois-tona-curve]] と、取引所上場のヘッジ代替手段については [[derivatives/jgb-futures-curve]] と、クロスカレンシーの交差については [[derivatives/yen-basis-swap-market]] と併せて読むこと。キャッシュ市場は [[money-market/japan-money-market]] である; 事業会社エンドユーザーの視点は [[finance/japan-corporate-fx-and-rate-hedge-policy]] である。

## 商品メカニクス

標準的な JPY IRS は、定められた想定元本にわたってスワップされる二つのレッグを持つ（元本の交換はない）。

| Element | Detail |
|---|---|
| 固定レッグ | 定期的に支払われる固定金利（「スワップレート」）（TIBOR 変動 IRS では通常半年ごと、TONA-OIS スタイルの IRS では年ごと）。 |
| 変動レッグ | 各期間ごとに変動参照（1M、3M、または 6M TIBOR; あるいは後決め複利 TONA）にリセット。日数計算は JPY では通常 ACT/365 。 |
| 想定元本 | 交換されない。利息支払いの計算にのみ使用。 |
| テナー | 最も流動性の高いポイント：1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y。40Y までのテナーは生命保険会社のヘッジ向けに取引される。 |
| 決済 | 各クーポン日のネット支払い（二つのレッグ間の差額のみが決済される）。 |
| 担保 | 担保化された取引については JPY 現金での日次 VM を伴う標準的な CSA; 非清算のバイラテラルについては UMR フェーズインの IM。 |
| クリアリング | 標準化されたテナーと参照インデックスは FIEA クリアリングマンデートのもとで JSCC でクリアされる。 |

経済的な内容：固定金利の支払い手はテナーにわたって既知のファンディングコストをロックインし、変動キャッシュフローを受け取る; 変動金利の支払い手はその逆を行う。双方が金利変動に対するバランスシートエクスポージャーをヘッジできる。

## TIBOR 対 TONA の移行

JPY IRS の参照金利は IBOR 移行を通じて進化してきた。

| 参照金利 | 確認できる状況 | 契約上の要点 |
|---|---|---|
| 日本円 TIBOR | JBATA が運営し、現在も公表 | 年限とフォールバック条件は取引文書で確認する必要がある |
| TONA | 日銀が公表する無担保コール翌日物金利 | 複利 TONA は OIS と、該当するフォールバックの円 RFR 要素に用いられる |
| パネル銀行の円 LIBOR 設定 | 31 日（2021 年十二月）後に停止または代表性を喪失 | 対象となる既存デリバティブには、契約またはプロトコル上のフォールバックが適用される |
| 合成 1M、3M、6M 円 LIBOR | 31 日（2022 年十二月）後に恒久的に停止 | 英国の規制に基づく一時的な橋渡しであり、ISDA の代表性喪失トリガーを先送りしたものではない |
| ユーロ円 TIBOR | 30 日（2024 年十二月）に最終公表 | JBATA は後継運営機関も合成ユーロ円 TIBOR も予定していないと発表した |

Sources: ^[source:https://www.jbatibor.or.jp/english/reform/] ^[source:https://www.jbatibor.or.jp/english/news/tibor_18.html] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making] ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm]
この移行が重要であるのは：

1. 複利 TONA 商品と日本円 TIBOR 商品は併存している。日付付きの新規取引シェアには、取引施設または報告データが必要である。
2. TIBOR 参照の IRS は、ターム固定のローンヘッジ用途のために引き続き共存する。
3. TIBOR-TONA ベーシス（ベーシスポイント）は、TIBOR の信用-銀行ファンディング成分対リスクフリーの TONA を補償する、取引可能なクォートである。
4. ディーラーは、アウトライトの IRS ポジションと並んで TIBOR-OIS および TIBOR-TONA ベーシスのブックを運営する。

このデュアルレートの世界は運用上複雑であるが、グローバルな RFR ベースのプライシングへの推進と並んで、日本のローン市場の一部のセグメントにおけるターム固定の参照への根強い需要を反映している。

## 想定元本残高

JPY 金利デリバティブ（IRS + OIS の合算）は、BIS の OTC デリバティブ統計、および BoJ の調査の日本部分において半年ごとに報告される。

| データ項目 | 解釈 |
|---|---|
| 想定元本残高 | 報告日時点の契約上の参照額。日次の売買高や損失エクスポージャーを示すものではない |
| グロス市場価値 | データセットの定義に従い、ネッティング前の正・負の再調達価値を合計したもの |
| 通貨および報告所在地 | 世界全体の JPY 集計と、日本の報告ディーラー集計では対象母集団が異なり、混同してはならない |

Sources: ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm]

現在の数値を引用する場合は、正確な調査時点、報告母集団、通貨、商品、単位を示すこと。

## 公開ディーラーデータの限界

ここで引用する公式の集計資料は、現在のディーラー順位、ディーラー別の JPY IRS 市場シェア、JPY IRS 単独の収益を裏付けていない。個社名、「支配的」とする評価、収益内訳には、対象商品と通貨を明示した日付付きの公開取引施設データまたはディーラー提出資料が必要であり、より広い債券・市場部門の収益を代用してはならない。

フランチャイズのエコノミクスは以下に依存する。

- 契約上のキャッシュフローおよびビッド・オファー条件。
- ヘッジおよび在庫ポジションの結果。
- 担保、資金調達、資本、運用コスト。
- デフォルト、流動性、ベーシスの各リスク。

親グループの開示レイヤーについては [[banking/INDEX]] および JapanFG アンカーページを参照のこと; ディーラー活動を規律する FIEA 登録については [[banking/japan-banking-license-tier-comparison-matrix]] を参照のこと。

## 事業会社 対 金融機関のエンドユーザー

| End-user category | Use case | Direction (typical) |
|---|---|---|
| メガバンク（トレジャリー） | JPY ローンのリプライシング、JPY 債券ポートフォリオのデュレーション、ALM ギャップ管理をヘッジ。 | 受け取り固定（資産が変動の場合）; 支払い固定（資産が固定の場合）。 |
| 地方銀行 | JPY 債券ポートフォリオのデュレーションをヘッジ; IRRBB（銀行勘定の金利リスク）を管理。 | 混在; しばしばデュレーションを安価に延ばすため受け取り固定。 |
| 信託銀行 / カストディ銀行 | ALM および年金関連の JPY レートヘッジ。 | 混在。 |
| 生命保険会社 | 長テナーの JPY 保険準備金負債をヘッジ（長デュレーション負債に対する実効的な短デュレーション → 長テナーの受け取り固定スワップへの需要）。 | 長テナー（10Y、20Y、30Y、40Y）で受け取り固定。 |
| 損害保険会社 | より小規模な ALM ヘッジ。 | 混在。 |
| 事業会社（非金融） | JPY 建て変動金利ローンエクスポージャーを固定にヘッジ; 固定クーポンの JPY 債券発行を変動に転換; 外貨建て債券発行で円へのスワップバックを行う。 | 変動金利ローンをヘッジする際は支払い固定; 固定クーポン債券を変動にスワップする際は受け取り固定。 |
| 外国人投資家 | 日本の金利に対するビューを取る; 日本 対 その他主要通貨カーブのレラティブバリュー; JGB キャッシュのデュレーションをヘッジ。 | 高度に方向性かつ機動的。 |
| アセットマネージャー / 年金基金 | JPY フィクスト・インカムマンデートのデュレーション管理。 | 混在。 |

この表は想定されるヘッジ対応を示すものであり、観測されたポジションを示すものではない。生命保険会社の取引方向、カテゴリー順位、20Y／30Y の流動性を論じるには、日付付きの取引、取引施設、またはポートフォリオのデータが必要である。

事業会社のエンドユーザーフローの詳細は [[finance/japan-corporate-fx-and-rate-hedge-policy]] でカバーされる。

## JSCC クリアリングマンデート

FSA は FIEA のもとで、標準化された JPY IRS のクリアリングマンデートを実施し、対象カウンターパーティ間の適格取引が JSCC でクリアされることを求めた。

| Element | Detail |
|---|---|
| CCP | Japan Securities Clearing Corporation（JSCC）。 |
| 適格商品 | 現行の JSCC 基準に基づく OIS、D-TIBOR IRS、D-TIBOR テナー・スワップ、OIS ベーシス・スワップ、OIS 対 D-TIBOR ベーシス・スワップ |
| 範囲上の注意 | 適格性だけでは、特定の取引相手間に法定清算義務があることを証明しない |
| 顧客清算 | JSCC は適格な申込みについて顧客清算の枠組みを公表している |
| 準拠すべき詳細 | 受入れ、証拠金、デフォルト管理には、現行の JSCC IRS 規則・手続が適用される |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/otc/client.html] ^[source:https://www.jpx.co.jp/jscc/en/rule/rule_irs.html]

清算は、取引のリスクと運用構造を変える。考えられる影響には次がある。

- ポジションと法的取決めが適格である場合の多者間ネッティング。
- 標準化された CCP の証拠金・デフォルト管理規則。
- 相対の取引相手エクスポージャーから CCP 枠組みへのエクスポージャーの置換。
- 機関、商品、適用規則によって異なる資本上の影響。

非清算のバイラテラル JPY IRS は以下のために継続する：非標準テナー、非標準リセット慣行、ストラクチャードトレード、そしてマンデートの対象とならないカウンターパーティ。非清算取引は UMR（非清算マージン規制）フェーズインの IM 要件の対象となる。

クリアリングコーポレーションのインフラについては [[securities/japan-securities-clearing-corp]] を、より広範な市場インフラのコンテキストについては [[securities/japan-market-infrastructure-map]] を参照のこと。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate derivatives notional and market value).
- Bank of Japan: Japan portion of BIS OTC derivatives survey; JPY interest-rate derivatives statistical release.
- Japan Securities Clearing Corporation: JPY IRS clearing scope, mandated product list, margin methodology.
- Financial Services Agency: FIEA clearing mandate scope and supervisory guidance.
- ISDA: SwapsInfo aggregated weekly transactions; 2020 IBOR Fallbacks Protocol.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: TONA adoption and TIBOR-TONA coexistence reports.
- Dealer-bank IR releases: MUFG, SMFG, Mizuho FG, Nomura HD, Daiwa Securities Group quarterly markets-segment commentary.
