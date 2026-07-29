---
source: derivatives/jgb-inflation-linked-bond-jgbi
source_hash: 1c7d936fd809315d
lang: ja
status: machine
fidelity: ok
title: "物価連動国債（JGBi）"
translated_at: 2026-07-29T20:18:00.000Z
---

# 物価連動国債（JGBi）

## TL;DR

JGBi（物価連動国債、Japan Government Bond Inflation-Indexed）は、日本国債（JGB）のうち、元金を生鮮食品を除く全国消費者物価指数に連動させた商品で、財務省が発行する。JGBi は 2004 年三月に初めて発行され、世界金融危機下の 2008 年に発行が中断された後、日本銀行の量的・質的金融緩和と政府のデフレ脱却方針の下で 2013 年十月に再開された。発行時の標準年限は 10 年である。

JGBi の特徴は、債券の基準日から該当する支払日までの参照 CPI の累積変化に応じて元金が調整され、固定の表面利率が物価連動後の元金に適用される点にある。2013 年以降に発行された債券には、満期時の元本保証があり、償還額は額面を下回らない。

JGBi が示すブレークイーブン・インフレ率は、一般に、満期を合わせた名目 JGB 利回りから JGBi の実質利回りを差し引いて近似する。これは現物市場のスプレッドであり、インフレ期待だけでなく、流動性、指数連動方法、税制、満期時の元本保証の価値にも左右される。

FinWiki では、発行の沿革、入札とリオープンの頻度、元本保証、外国投資家比率、ブレークイーブン・インフレ率のシグナル、および日本銀行の保有を扱う。

## Wiki 内の位置付け

本項は金利・インフレ領域の [[derivatives/INDEX|デリバティブ索引]] に属する。OTC デリバティブの類似商品は [[derivatives/japan-inflation-swap]]、名目 JGB 先物市場は [[derivatives/jgb-futures-curve]]、JGBi 入札に参加する国債市場特別参加者は [[derivatives/jgb-special-participants-primary-dealer]]、JGBi ポジションの資金調達に用いる国債レポ市場は [[money-market/jgb-repo-market-japan]] を参照。財務省の国債管理は [[money-market/INDEX|短期金融市場]]、日本銀行による保有は [[money-market/boj-open-market-operations|日本銀行の公開市場操作]] に位置付けられる。

## 発行の沿革

JGBi の発行制度は、次の段階をたどってきた。

| 期間 | 段階 | 概要 |
|---|---|---|
| 2004 年三月 | 初回発行 | 財務省の沿革は、10 年商品の初回発行を記録している |
| 2004–2008 年 | 初期段階 | 発行額は、日付付きの財務省入札・発行残高表から確認する。この商品ページは、保有者構成や流通市場の流動性を裏付けない |
| 2008 年（リーマン後） | 発行中断 | 財務省の沿革は発行中断を記録するが、個別の裏付け資料なしに需要面の原因を特定しない |
| 2008–2013 年 | 新規発行なし | 既発 JGBi は残存したが、新規発行は行われなかった |
| 2013 年十月 | 発行再開 | 10 年債の発行を再開し、2013 年以降に発行する債券には満期時の元本保証を付した |
| 現行制度 | 年次計画と入札公告に基づく発行 | 日付、金額、リオープンは、最新の財務省計画と入札公告で確認する必要がある |

出典: ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm]

財務省の国債発行計画は年度ごとの制度を定める。時点を示さない発行頻度や比率の推計で、この計画を代替してはならない。

## 入札とリオープンの仕組み

JGBi は、体系化された入札とリオープンのサイクルに従う。

| 要素 | 詳細 |
|---|---|
| 発行者 | 財務省 |
| 入札条件 | 日付付きの財務省入札公告と結果で定める |
| 直接入札できる主体 | 適用される財務省の入札規則と参加者制度で定める |
| 年限 | 10 年物価連動国債 |
| リオープン | 銘柄番号と条件を各公告に記載する |
| 金額 | 公告された金額を用い、「数千億円」といった一般的な想定は置かない |

出典: ^[source:https://www.mof.go.jp/english/policy/jgbs/auction/index.htm] ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm]

## 元本保証

2013 年以降の JGBi における満期時の元本保証は、次のような構造的保護である。

- 満期時の償還額は、当初額面金額の 100% を下回らない。
- 基準日から満期までの累積 CPI 上昇率がマイナスで、元金の物価連動計算上は額面未満の償還額となる場合でも、元本保証によって投資家は額面で償還を受ける。
- 債券の存続期間中の利払いには、引き続き物価連動後の元金が適用されるため、デフレ期には額面を下回り得る。元本保証が保護するのは最終償還額のみである。

この元本保証は、米国 TIPS（物価連動国債）の元本に対するデフレ・フロアと考え方は似ているが、適用範囲が異なる（TIPS では満期時の元本にフロアを適用する一方、利払い計算に用いる各時点の元金には、より細かな扱いがある）。円の仕組みは、デフレ局面に対する投資家の懸念に対応するため、2008 年の発行中断後に JGBi へ追加された。

元本保証の経済価値は、債券の存続期間中に累積インフレ率がマイナスとなる確率によって異なる。長期のデフレでは価値が相応に大きくなり得るが、インフレ局面では大幅にアウト・オブ・ザ・マネーとなり、価値は小さい。

## 外国投資家比率

投資家比率は時点によって変化する。現時点の外国投資家比率を主張するには、物価連動国債を明示的に対象とする、日付付きの財務省または日本銀行の保有者別表を引用する必要がある。JGB 全体の保有者データを、説明なく JGBi のみの証拠として扱ってはならない。本項で用いた資料は、外国投資家が最大の保有者区分であるとの恒常的な主張を裏付けない。

## ブレークイーブン・インフレ率のシグナル

JGBi が示すブレークイーブン・インフレ率（BEI）は、次の式で計算する。

$$\text{BEI}_T = y^{\text{nominal}}_T - y^{\text{JGBi}}_T$$

ここで $y^{\text{nominal}}_T$ は期間 $T$ の名目 JGB 利回り、$y^{\text{JGBi}}_T$ は同じ期間の JGBi（実質）利回りである。

この BEI は、二つの債券の総合収益を等しくする、市場が織り込む年率の累積インフレ率を表す。ただし、インフレ・リスク・プレミアムと流動性プレミアムについて、小幅な調整が必要である。

| BEI 指標 | 捉える内容 |
|---|---|
| 10 年 JGBi BEI | 満期を合わせた名目・実質利回りの今後 10 年間の差であり、後述する調整の影響を受ける |
| フォワード BEI（例: 5 年先 5 年 BEI） | JGBi の期間後半について市場が織り込むインフレ期待。当面の実現インフレの直接的な影響を受けにくい |
| [[derivatives/japan-inflation-swap|円インフレ・スワップ]]から得られるスワップ BEI | 担保、流動性、契約効果が異なるデリバティブ市場の指標。スプレッドの符号は実証上のもので、固定されない |

出典: ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm] ^[source:https://www.stat.go.jp/english/data/cpi/index.html]

単純な利回り差は、純粋な期待指標ではない。過去の水準やフォワード BEI を論じるには、日付と満期を揃えた債券を用い、指数のラグ、流動性、キャリー、満期時の元本保証を明示的に扱う必要がある。

## 日本銀行の保有

日本銀行は国債保有統計を公表している。JGBi 固有の金額または比率を算出するには、証券区分、観測日、財務省の発行残高を分母として整合させる必要がある。

| 項目 | 詳細 |
|---|---|
| 公表系列 | 日本銀行の保有統計と貸借対照表。証券区分と日付を明示する必要がある |
| 比率の計算 | JGBi の対象範囲が一致する、同一時点の財務省発行残高を分母として必要とする |
| 市場機能に関する推論 | 保有水準だけでは、浮動在庫、流動性、BEI の歪みを定量化できない |
| 政策期間 | 現時点の買入れ・償還に関する扱いは、日付付きの日本銀行決定から確認する |

出典: ^[source:https://www.boj.or.jp/en/statistics/boj/fm/jgb/index.htm]

本項では、時点を示さない日本銀行の保有比率を記載せず、保有残高と発行残高を同一時点で揃えたデータセットなしに、価格への影響を定量的に推論しない。

## JGBi と JGB 現物市場の流動性

| 項目 | 名目 JGB | JGBi |
|---|---|---|
| 発行額と残高 | 日付付きの財務省計画と発行残高表を用いる | 日付付きの財務省 JGBi 公告と表を用いる |
| 利回りの解釈 | 名目利回り | JGBi の指数連動方法と元本保証条件に基づく実質利回り |
| 価格の参照 | 名目 JGB の現物価格と利回り | JGBi の現物価格、経過指数連動額、実質利回り |
| 上場先物 | 現在の JPX 商品には、現物受渡しの 5 年、10 年、ミニ 20 年と、現金決済のミニ 10 年がある | 引用した JPX 国債先物ページには、JGBi 専用先物は掲載されていない |
| 流動性の比較 | 同じ条件で比較できる、日付付きの売買高またはクォート・データが必要 | 銘柄数や保有者属性だけから推測しない |

出典: ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html]

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/jgb-special-participants-primary-dealer]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-swaption-market]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 財務省: JGBi（物価連動国債）制度資料、入札日程、満期時の元本保証条件。
- 財務省: 国債発行計画（年次。JGBi の発行額と年限構成を定める）。
- 日本銀行: JGBi を含む国債保有統計。
- 総務省統計局: 生鮮食品を除く CPI の公表資料と算定方法。
- 国際決済銀行: 発行体別の物価連動債を含む国債統計。
- 金融庁: 国債入札と流通取引に関する金融商品取引法上の枠組み。
- 日本銀行の報告書・調査論文: JGBi の市場機能に関する随時の分析資料。
