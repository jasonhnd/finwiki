---
source: derivatives/japan-inflation-swap
source_hash: 4b43b23200f08766
lang: ja
status: machine
fidelity: ok
title: "日本のインフレスワップ市場（JPY CPI連動）"
translated_at: 2026-07-29T19:00:00.000Z
---

# 日本のインフレスワップ市場（JPY CPI連動）

## 要約

JPYインフレスワップとは、一方の当事者が固定金利を支払い、他方の当事者が日本の消費者物価指数（CPI）指標 — 最も一般的には統計局のCPI生鮮食品除く指数（生鮮食品除く） — に連動する変動金利を支払う、店頭（OTC）デリバティブである。二つの主要な構造形式は、ゼロクーポンインフレスワップ（ZCIS、取引日から満期までの累積インフレに基づく満期時の一括支払い）と、年率インフレスワップ（YoY、前年同月比のCPI変化にひも付く定期支払い）である。取引日にインフレレッグに対して支払われる固定金利が、スワップに織り込まれた「ブレークイーブンインフレ」である。

JPYインフレスワップ市場は、構造的にUSDおよびEURの相当市場よりも小さいが、BoJが量的・質的金融緩和（QQE）の枠組みの下で 2% の物価安定目標を 2013 年一月に設定して以降、そして実際のJPY CPIが 2% を決定的に上回るようになった 2022 年以降、再び意味のある活動を得てきた。この市場は [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi inflation-linked bond]] の現物市場に隣接し、JPYインフレスワップに織り込まれたブレークイーブンは、JGBi由来のブレークイーブンを補完する、デリバティブベースのインフレ期待の読み取りを提供する。

FinWikiにとって、このエントリはスワップのメカニクス（ZCISとYoY）、CPI参照、BoJ-2%-目標時代のダイナミクス、年金基金および保険会社のヘッジ需要、JGBiとの関係、ディーラーフランチャイズをカバーする。

## ウィキ上の位置づけ

このエントリは金利デリバティブクラスター内の [[derivatives/INDEX|derivatives index]] の下にある。現物のインフレ連動債のピアについては [[derivatives/jgb-inflation-linked-bond-jgbi]] と、バニラIRSのピアについては [[derivatives/japan-irs-market]] と、名目金利のディスカウントカーブについては [[derivatives/ois-tona-curve]] と照らし合わせて読むこと。BoJ政策の文脈は [[money-market/boj-open-market-operations]] に、年金基金／保険会社のエンドユーザー需要側は [[insurance/japan-life-insurance-alm-overview]] にアンカーされる。

## 商品のメカニクス

標準的なJPYインフレスワップは、固定とインフレ連動の変動キャッシュフローを交換する。

### ゼロクーポンインフレスワップ（ZCIS）

JPYインフレスワップで最も一般的な構造形式：

| 要素 | 詳細 |
|---|---|
| テナー | 当事者間の合意による |
| 固定レッグ | 満期時の一括支払い：$N \times [(1 + k)^T - 1]$、ここで $k$ は固定インフレブレークイーブンレート、$T$ はテナー |
| インフレレッグ | 満期時の一括支払い：$N \times \frac{\text{CPI}_T}{\text{CPI}_0} - N$、ここでCPIは満期日（ラグ付き）の参照CPI指数レベル |
| 純支払い | インフレレッグを支払う当事者は、実現累積インフレと契約ブレークイーブンの差を支払う |
| 参照指数 | コンファメーションで指定する統計局の CPI 系列、観測日、ラグ、補間ルール |
| 日数計算 | 契約ごとに定める。CPI の観測は、定義された指数の公表・訂正ルールに従う |
| 文書化 | ISDAマスター契約＋CSA |

Sources: ^[source:https://www.stat.go.jp/english/data/cpi/index.html] ^[source:https://www.isda.org/book/2008-isda-inflation-derivatives-definitions/]

経済的には、インフレレッグの支払い手は既知の固定累積インフレコストを固定し、インフレレッグの受け手は固定ブレークイーブンを支払う代わりに実現インフレを受け取る。市場に織り込まれたブレークイーブンレートは、テナーにわたる累積インフレについての取引が含意する期待（プラス小さなインフレリスクプレミアム）である。

### 年率インフレスワップ（YoY）

定期クーポン支払いを伴う、よりきめ細かい構造：

| 要素 | 詳細 |
|---|---|
| テナー | 2Y、5Y、10Y が典型 |
| クーポン頻度 | 年次または半年次 |
| 固定レッグ | 定期支払い：クーポンあたり $N \times k$ |
| インフレレッグ | 定期支払い：クーポンあたり $N \times \frac{\text{CPI}_t}{\text{CPI}_{t-1}} - N$ |

YoYスワップは、（累積インフレではなく）年ごとのインフレの実績にひも付くエクスポージャーのヘッジに有用だが、JPYではZCISよりも流動性が低い。

## CPI参照指数

標準的なJPYインフレスワップは、統計局が月次で公表する、生鮮食品を除く日本CPI指数（生鮮食品を除く総合、日本の慣行での「コアCPI」）を参照する。他のCPIバリアントも存在するが、あまり一般的には使われない。

| 指数 | 注記 |
|---|---|
| CPI（総合） | 生鮮食品（変動が大きい）を含む全項目を含む |
| **CPI生鮮食品除く** | 日本の標準的な「コア」指標；標準的なインフレスワップの参照 |
| CPI生鮮食品除く・エネルギー除く | 「コアコア」；一部のBoJコミュニケーションで使われる；スワップの参照としてはあまり一般的でない |
| 東京CPI（先行指標） | 全国CPIに先立って公表される；通常はスワップの参照には使われないが、先行指標として注視される |

統計局は遅延月次ベースでCPIを公表する（通常、参照月の 3-4 週間後）。スワップのフィキシングは、スワップの評価日に指数が利用可能であることを確保するため、定められたフィキシングルールのラグ（通常 2-3 ヶ月）を伴って、直近に公表された値を使う。

## ブレークイーブンインフレのシグナル

ZCISに織り込まれたブレークイーブンインフレレートは、スワップのテナーにわたる累積CPIインフレについての市場のリスク中立期待に、（通常は小さな）インフレリスクプレミアムを加えたものを表す。[[derivatives/jgb-inflation-linked-bond-jgbi|JGBi breakeven]]（一致するテナーでの名目JGB利回りからJGBi利回りを差し引いて計算）との比較は、二つの市場が含意するインフレ期待指標を提供する。

| ソース | 指標の種類 |
|---|---|
| JPY ZCISブレークイーブン | デリバティブベース；純粋なインフレの表現；CSA担保化 |
| JGBi含意ブレークイーブン | 現物債ベース；JGBi流動性プレミアム、JGB-JGBi流動性差に影響される |
| サーベイベースの期待（BoJ短観、ESPフォーキャスト） | サーベイ；公表ラグが長い；非市場ベース |
| ヘッドラインCPIプリント | 実現データ；ラグ付き |

デリバティブブレークイーブンは通常、JGBi現物債を保有することに比してスワップ経由での取引の相対的な容易さを反映する「流動性プレミアム」の分だけ、JGBi含意ブレークイーブンを下回ってプリントする。

BoJ政策分析にとって、インフレスワップのブレークイーブンは、BoJの 2% 目標が信頼を持って織り込まれているかどうかについての、最もクリーンな市場ベースの読み取りの一つである。2022,  以前、JPY 10Y ZCISブレークイーブンは、BoJの明示的な目標にもかかわらず、長期間にわたって 2% を大きく下回って推移した。2022,  以降、実現インフレが 2% を上回って動くにつれて、ブレークイーブンはより高く再プライスされ、目標とのギャップが実質的に縮小した。

## BoJ 2%-目標時代のダイナミクス

JPYインフレスワップ市場は、BoJの 2% インフレ目標の枠組みによって実質的に形作られてきた。

| 政策期間 | 公式に確認できる枠組み | この表からは確認できない事項 |
|---|---|---|
| 2013 年一月以降 | 日銀は、CPI の前年比上昇率で 2% とする「物価安定の目標」を導入した | 目標はスワップ相場でも、市場流動性の証拠でもない |
| 2016 年九月から 2024 年三月 | イールドカーブ・コントロールが日銀の政策枠組みの一部を構成した | 特定のスワップ年限への影響は、日付付きの市場データで検証する必要がある |
| 2024 年三月以降 | 日銀は金融政策の枠組みを変更し、それまでの YCC の運用枠組みを終了した | 政策決定だけでは、ディーラーの取引量やエンドユーザーのポジションは分からない |

Sources: ^[source:https://www.boj.or.jp/en/mopo/outline/target.htm] ^[source:https://www.boj.or.jp/en/mopo/outline/index.htm]

## 年金基金と保険会社の需要

JPYインフレスワップへのエンドユーザー需要は、主として以下から来る。

| エクスポージャー | 想定される契約上のヘッジ | 方向を決める要素 |
|---|---|---|
| CPI 連動の負債または費用 | 定義されたインフレレッグを受け取り、固定を支払う | 正確な負債指数、ラグ、満期、ベーシスリスク、ヘッジ会計上の取扱い |
| CPI 連動の収益または資産 | 定義されたインフレレッグを支払い、固定を受け取る | 正確な資産指数、支払日、意図するリスク削減 |
| 相対価値ポジション | インフレスワップ、名目金利、または JGBi のエクスポージャーを組み合わせる | 取引仮説、担保条件、流動性、手仕舞いの前提 |

Source: ^[source:https://www.isda.org/book/2008-isda-inflation-derivatives-definitions/]

この表は想定されるヘッジ対応を示すものであり、GPIF、保険会社、その他の特定機関がその取引を保有していると主張するものではない。機関別の方向と規模には、日付付きの公開ポートフォリオまたは取引開示が必要である。

## JGBiとの関係

JPYインフレスワップと [[derivatives/jgb-inflation-linked-bond-jgbi|JGB inflation-linked bond (JGBi)]] 市場との現物-デリバティブ関係は構造的に重要である。

| 取引タイプ | 説明 |
|---|---|
| インフレスワップ対JGBiアセットスワップ | JGBiを購入し、インフレ連動のクーポンストリームをインフレスワップ経由で固定金利と交換する → JGBの信用／流動性への合成的な名目エクスポージャー |
| JGBi含意ブレークイーブン対スワップ含意ブレークイーブン | 両者間のスプレッド；ワイドな際の裁定機会 |
| BEIボックス取引 | JGBiカーブとスワップカーブにまたがるクロステナーのブレークイーブン取引 |

限られたJGBiの発行と銘柄統合のケイデンス（MoFの発行プログラムについては [[derivatives/jgb-inflation-linked-bond-jgbi]] を参照）は、JGBi流動性が名目JGB流動性よりはるかに薄いことを意味する。これが、執行をより大きくより柔軟にできるスワップ市場へと、一部のインフレヘッジ需要を向かわせる。

## 公開データの限界

引用した公式資料は、現在の日本のインフレスワップのディーラー順位、ディーラー別取引高、特定エンドユーザーのポジションを公表していない。これらの主張には、日付付きの取引施設データ、取引開示、目論見書、またはディーラー提出資料が必要であり、一般的な市場参加の記述から順位を推定しない。

## クリアリング

JPYインフレスワップの取引は主として相対である。[[securities/japan-securities-clearing-corp|JSCC]] は、バニラIRSに対して行うようには、インフレスワップに強制クリアリングを拡張していない。非清算取引は、対象となるカウンターパーティについてはUMRフェーズIM要件の対象となり、標準的なCSA担保化が行われる。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[money-market/INDEX]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 統計局：CPI データおよび方法論 — https://www.stat.go.jp/english/data/cpi/index.html
- 財務省：物価連動国債の枠組み — https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm
- 日本銀行：2% の「物価安定の目標」 — https://www.boj.or.jp/en/mopo/outline/target.htm
- 日本銀行：金融政策の枠組み — https://www.boj.or.jp/en/mopo/outline/index.htm
- ISDA：2008 Inflation Derivatives Definitions — https://www.isda.org/book/2008-isda-inflation-derivatives-definitions/
