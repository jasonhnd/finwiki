---
source: derivatives/japan-interest-rate-derivatives-overview
source_hash: f25532f65245b750
lang: ja
status: machine
fidelity: ok
title: "日本の金利デリバティブ概観"
translated_at: 2026-07-29T19:30:00.000Z
---

# 日本の金利デリバティブ概観

## TL;DR

日本の金利デリバティブ・エコシステムには、円 IRS、TONA OIS、円スワップション、JGB 先物、三か月 TONA 先物、アセットスワップに加え、清算・規制インフラが含まれる。BIS、日銀、JPX、JSCC が公表する指標は、売買高、想定元本残高、取引枚数、清算済みポジションとそれぞれ異なるため、根拠なく単一の市場規模に合算してはならない。

市場は金融商品取引法 (FIEA) の下で規制され、金融庁 (FSA) が監督し、義務付けられた標準化取引については日本証券クリアリング機構 (JSCC) で集中清算される。日本銀行は、金融政策 (OIS カーブを動かす) と JGB 購入プログラム (現物 JGB および JGB 先物市場に影響する) の双方を通じてマクロ的な影響を及ぼす。

FinWiki にとって、本エントリはドメインアンカーである: 構成要素となる各商品ページをルーティングし、市場参加者の状況を要約し、以降のすべての金利デリバティブ・エントリの基礎となる規制・インフラの枠組みを提示する。

## Wiki ルート

本エントリは [[derivatives/INDEX|derivatives index]] の配下に、金利クラスターのアンカーとして位置する。構成要素ページ: [[derivatives/japan-irs-market]]、[[derivatives/ois-tona-curve]]、[[derivatives/jgb-futures-curve]]、[[derivatives/yen-basis-swap-market]] とともに読まれたい。現物サイドと日銀の政策枠組みは [[money-market/INDEX]] と [[money-market/boj-open-market-operations]] に、クリアリングインフラは [[securities/japan-securities-clearing-corp]] にある。

## 主要商品

| 商品 | 取引場所 | 契約上の参照対象 | 公開仕様の範囲 | アンカーページ |
|---|---|---|---|---|
| 円 IRS | OTC。適格商品は JSCC に提出可能 | JSCC 規則に基づく TONA OIS および所定の D-TIBOR 商品 | 適格性は法的な清算義務と同一ではない | [[derivatives/japan-irs-market]] |
| 円 OIS | OTC。適格商品は JSCC に提出可能 | 無担保コール翌日物金利（TONA）の複利 | 慣行と年限は取引ごとに異なる | [[derivatives/ois-tona-curve]] |
| 円スワップション | OTC | 特定の円 IRS を原資産とする | 行使、決済、原資産の条件はコンファメーションごとに異なる | [[derivatives/japan-swaption-market]] |
| 現物受渡し JGB 先物 | 大阪取引所。JSCC 清算 | 5 年、10 年、ミニ 20 年の標準物国債契約 | JPX が現在の取引単位、呼値、満期、受渡規則を公表 | [[derivatives/jgb-futures-curve]] |
| ミニ 10 年 JGB 先物 | 大阪取引所。JSCC 清算 | 10 年 JGB 先物価格 | 現金決済であり、現物受渡し契約とは異なる | [[derivatives/jgb-futures-curve]] |
| 三か月 TONA 先物 | 大阪取引所。JSCC 清算 | 100 から三か月複利 TONA 金利を差し引いた値 | JPX 仕様に基づく現金決済 | [[derivatives/ois-tona-curve]] |
| アセットスワップ | OTC | 現物債と金利スワップのエクスポージャーを契約上組み合わせる | 条件と清算上の取扱いは構成取引によって異なる | [[derivatives/japan-irs-market]] |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/interest-rate/3m-tona-futures/index.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html]

OTC 商品と上場商品の公表指標は直接比較できない。OTC のデータセットは通常、想定元本または市場価値を報告する一方、JPX は取引枚数と建玉を公表する。

## クロスカレンシー・ブリッジ

円金利エコシステムは、以下を通じてドル (およびユーロ) 金利エコシステムに接続する:

| ブリッジ | 商品 | アンカー |
|---|---|---|
| 円ドル・クロスカレンシー・ベーシススワップ | OTC CCBS | [[derivatives/yen-basis-swap-market]] |
| 円 FX フォワード / FX スワップ | OTC FX デリバティブ | (W8-B で計画中 `derivatives/japan-fx-swap-market.md`) |
| 円建ての外貨発行 (サムライ、ウリダシ) を母国通貨へスワップバック | OTC IRS + CCBS の組合せ | [[finance/INDEX]] で扱う |

これらのブリッジは、日本の金利デリバティブが単独では分析できないことを意味する: いずれかの主要通貨におけるグローバルディーラーへのバランスシート圧力は、ベーシススワップおよび FX スワップ市場を通じて JPY 金利の価格形成に伝播し得る。

## 市場参加者

参加者群はディーラー、エンドユーザー、インフラにまたがる:

| カテゴリ | 公開情報で確認できる役割 |
|---|---|
| 登録金融商品取引業者その他のデリバティブ・ディーラー | 登録範囲と適用される行為規制の範囲内で取引を執行または仲介する |
| 銀行、保険会社、事業会社、資産運用会社その他のエンドユーザー | 金利エクスポージャーをヘッジまたは取得し得る。特定機関の方向には取引またはポートフォリオの証拠が必要 |
| 大阪取引所 | 上記の JGB 先物および三か月 TONA 先物を上場する |
| JSCC | 公表規則に基づき、適格な上場デリバティブおよび OTC IRS を清算する |
| 金融庁 | 適用される規制、清算、報告の枠組みを所管する |
| 日本銀行 | TONA と市場統計を公表し、金融政策を実施する |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm]

ここで用いた公開資料は、現在のディーラー順位や、すべてのエンドユーザーに共通する取引方向を裏付けていない。

## 日次取引高

JPY 金利デリバティブ全体の日次総取引高 (想定元本):

| 出典 | 指標と解釈 |
|---|---|
| BIS 三年ごとの中央銀行サーベイ | 通貨、商品、取引相手、所在地別の OTC 金利デリバティブ売買高。調査時点と調整方法を明記する必要がある |
| BIS 半期 OTC デリバティブ統計 | 報告日時点の想定元本残高とグロス市場価値。日次売買高ではなくストック指標 |
| 日銀による BIS 調査の日本部分 | 日本の報告ディーラーを対象とし、所在地ベースが世界の通貨別集計と異なる |
| JPX 統計 | 上場商品の取引枚数と建玉。枚数は OTC 想定元本と直接比較できない |

Sources: ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm] ^[source:https://www.jpx.co.jp/english/markets/statistics-derivatives/index.html]

報告期間、所在地／通貨の基準、商品範囲、単位をそろえずに生の水準を比較してはならない。

## 規制の枠組み

日本の金利デリバティブを統治する主要な規制レイヤー:

| レイヤー | 証拠の範囲内で言える内容 |
|---|---|
| 金融商品取引法 (FIEA、金融商品取引法) | 証券、デリバティブ、市場仲介者、開示、市場行為を網羅する法的枠組み。 |
| 金融庁の規則・監督 | 適用される登録、行為規制、清算、証拠金、報告要件は、商品と取引相手の範囲によって異なる |
| OTC デリバティブ報告 | 金融庁ガイドラインは、報告事項、報告主体、提出経路を定める。範囲と免除を判定せずに「すべての取引」と推定してはならない |
| JSCC 清算 | JSCC は適格 IRS 商品と規則を公表する。商品適格性だけでは、特定取引に法的な清算義務があることを証明しない |
| 契約文書 | 適用される日本法と CCP 規則に従い、ISDA 定義と相対条件が OTC 取引を規律し得る |

Sources: ^[source:https://www.fsa.go.jp/en/news/2022/20220912-1/01.pdf] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/rule/rule_irs.html]

## JSCC IRS 清算

OTC IRS に対する JSCC クリアリングの主要機能:

| 機能 | 詳細 |
|---|---|
| 適格商品 | 公表された商品基準に基づく OIS、D-TIBOR IRS、D-TIBOR テナー・スワップ、OIS ベーシス・スワップ、OIS 対 D-TIBOR ベーシス・スワップ |
| 顧客清算 | JSCC は清算参加者によるアクセスに加えて、顧客清算の枠組みを公表している |
| 規則 | 商品、受入れ、証拠金、デフォルト管理の詳細には、現行の IRS 規則・手続が適用される |
| 範囲上の注意 | 適格性、任意提出、法定清算義務は別の論点である |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/otc/client.html] ^[source:https://www.jpx.co.jp/jscc/en/rule/rule_irs.html]

CCP インフラの詳細は [[securities/japan-securities-clearing-corp]] を、より広範なクリアリング・決済エコシステムは [[securities/japan-market-infrastructure-map]] を参照。

## 公開データの表層

| 出典 | 示す内容 |
|---|---|
| BoJ 短期金融市場および東京短期金融市場サーベイ | JPY 短期金融市場およびデリバティブの取引パターンの集計; 半年ごと / 年次のサーベイ。 |
| BoJ 統計: BIS OTC デリバティブ日本部分 | JPY 金利デリバティブの想定元本および総市場価値を半年ごとに。 |
| BIS OTC デリバティブ統計 | グローバル集計の JPY デリバティブ残高、カウンターパーティタイプ・商品・通貨で切り分け。 |
| BIS 三年ごとの中央銀行サーベイ | 三年ごとの取引高スナップショット。 |
| ISDA SwapsInfo | 週次集計の清算済みおよび相対の取引想定元本。 |
| JPX 出来高統計 | 月次の上場デリバティブの出来高と建玉。 |
| JSCC 公開ディスクロージャー | クリアリング数量、会員数、デフォルトファンド規模 (開示される範囲で)。 |
| FSA 監督ディスクロージャー | 定期的な監督コメンタリーおよび集計された市場構造データ。 |
| ディーラー銀行 IR | 集計されたマーケット部門の収益コメンタリー。 |

Sources: ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm] ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/statistics.html]

これらのデータは、調査時点、範囲、単位をそろえた場合に限り、集計比較を支える。それだけでは、ディーラー集中度、個別取引の価格、特定の取引相手エクスポージャー、独自のディーラー損益を裏付けない。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
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

## 出典

- 日本銀行: 短期金融市場の表層; 東京短期金融市場サーベイ。
- 日本銀行: BIS 半年ごとの OTC デリバティブ統計の日本部分。
- BIS: 半年ごとの OTC デリバティブ統計; FX および OTC デリバティブに関する三年ごとの中央銀行サーベイ。
- 日本取引所グループ (JPX) / 大阪取引所 (OSE): 上場デリバティブの商品表層; 出来高および建玉統計。
- 日本証券クリアリング機構 (JSCC): クリアリング規則、適格商品リスト、クリアリング数量の開示。
- 金融庁 (FSA): FIEA の枠組みおよび監督指針。
- ISDA: SwapsInfo 週次集計取引データ; ISDA マスター契約の枠組み文書。
- 日本円金利指標に関する検討委員会: IBOR 移行報告書。
- 全国銀行協会 TIBOR 運営機関 (JBATA): TIBOR ベンチマーク運営。
- ディーラー銀行 IR リリース: 三菱 UFJ、SMFG、みずほ FG、野村 HD、大和証券グループの四半期開示。
