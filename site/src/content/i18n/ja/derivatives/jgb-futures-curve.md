---
source: derivatives/jgb-futures-curve
source_hash: d5350c9d73a636a6
lang: ja
status: machine
fidelity: ok
title: "国債先物市場とカーブ"
translated_at: 2026-07-29T20:32:00.000Z
---

# 国債先物市場とカーブ

## TL;DR

国債先物は、大阪取引所で取引され、日本証券クリアリング機構（JSCC）が清算する上場金利デリバティブである。JPX の現行の現物受渡し商品は、**5 年国債先物、10 年国債先物、ミニ 20 年国債先物**で構成される。ミニ 10 年国債先物は、別個の**現金決済**商品である。現物受渡しの商品では、JPX の換算係数と受渡規則に従い、売り手が受渡適格銘柄から選択できる。

JPX は、これらの商品について、日付付きの取引高と建玉の統計を公表している。流動性の順位と参加者の利用状況は限月ごとに変化し得るため、時点を示さない固定的な序列ではなく、最新の統計から確認すべきである。

FinWiki では、契約仕様、最割安銘柄（CTD）の仕組み、現物・先物ベーシス取引、JSCC の清算・決済、ディーラーとヘッジファンドの活動、および日本銀行の国債買入れ政策が先物市場の機能に及ぼす影響を扱う。

## Wiki 内の位置付け

本項は [[derivatives/INDEX|デリバティブ索引]] に属する。OTC スワップによる代替ヘッジは [[derivatives/japan-irs-market]]、割引カーブとの関係は [[derivatives/ois-tona-curve]] と併読する。国債現物とレポは [[money-market/jgb-repo-market-japan]]、清算インフラは [[securities/japan-securities-clearing-corp]] を参照。

## 契約仕様

JPX・大阪取引所は現在、次の国債先物を上場している。

| 商品 | 決済 | 取引単位 | 呼値の最小単位 |
|---|---|---|---|
| 5 年国債先物 | 現物受渡し | JPY100 million | JPY0.01（JPY100 当たり） |
| 10 年国債先物 | 現物受渡し | JPY100 million | JPY0.01（JPY100 当たり） |
| ミニ 20 年国債先物 | 現物受渡し | JPY10 million | JPY0.01（JPY100 当たり） |
| ミニ 10 年国債先物 | 現金決済 | JPY10 million | 最新のミニ商品仕様を参照 |

出典: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html]

現物受渡しの商品は、現行の JPX 仕様上、受渡日の第五営業日前に取引を終了する。取引時間、限月、休日調整は、一般的な四半期サイクルを仮定せず、最新の仕様から確認すべきである。

## 最割安銘柄（CTD）

国債先物は単一の債券ではなく、受渡適格銘柄のバスケットを対象に決済するため、売り手には選択権がある。受渡時に、売り手は利益を最大化する（または損失を最小化する）国債を受渡適格バスケットから選ぶ。この銘柄が CTD である。

CTD は、換算係数（CF）の仕組みによって特定する。換算係数は、各受渡適格国債の価格を標準物の表面利率 6%、または 3%（5 年物）へ調整するため、受渡時に売り手が受け取る金額は次のとおりとなる。

```
受渡代金 = 先物最終清算価格 × CF × 額面金額 + 経過利子
```

経済的な CTD は、グロス・ベーシスを最小にする国債である。

```
グロス・ベーシス =（CTD 現物価格 + 経過利子）−（先物価格 × CF）
```

受渡までのレポ・キャリーを調整すると（ネット・ベーシス = グロス・ベーシス − レポ・キャリー）、ネット・ベーシスが最も低い債券が、ディーラーが受け渡す CTD となる。

CTD の枠組みには、次の特徴がある。

| 公表される受渡要素 | 意味 |
|---|---|
| 受渡適格銘柄 | JPX が、各現物受渡し商品について、適格な債券区分と残存期間の条件を定める |
| 売り手の受渡選択 | 売り手は取引所規則に基づいて受渡銘柄を選ぶ。経済的に最も割安な銘柄は、価格と資金調達条件によって変わり得る |
| 換算係数 | JPX の係数が、選択した債券を標準物に基づく受渡代金の枠組みへ換算する |
| 受渡代金 | 規則に基づき、最終清算価格、換算係数、額面金額、経過利子から計算する |

出典: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html]

「最割安銘柄」は分析結果であり、恒久的に特定の債券へ付される名称ではない。現在の債券価格、換算係数、経過利子、資金調達の前提によって変化する。

## ベーシス取引

国債の現物・先物ベーシス取引の一つの実施方法では、資金調達した現物債ポジションと、反対方向の先物ポジションを組み合わせる。現物ロング・先物ショートを例にすると、次の取引で構成される。

1. 現物市場で CTD 国債を**買う**。
2. 換算係数で調整した本数の国債先物を**売る**。
3. 同じ銘柄を担保とする SC レポで CTD の購入資金を**調達する**。
4. **受渡まで保有する**（または事前に決済する）ことで、ネット・ベーシスとレポ・キャリーを実現する。

再現可能な比較では、日付付きの先物価格、換算係数、経過利子、現物の汚れ値、受渡日、実行可能なレポ調達条件から始める。グロス・ベーシスとネット・ベーシス、またはインプライド・レポ金利と実際の調達金利の比較では、同じ明示的な慣行を用いる必要がある。「ベーシス」がプラスかマイナスかという表示だけでは、取引の方向や収益を特定できない。

ベーシス取引のリスクは次のとおり。

| リスク | 詳細 |
|---|---|
| CTD のレポ・スペシャル化 | CTD の SC レポがスペシャル、すなわちレポ金利が大幅なマイナスとなる場合、資金調達費用がベーシスを上回り得る |
| CTD の切替え | 利回り変動によってバスケット内の別の債券が新たな CTD となると、現物ロング・先物ショートのポジションにヘッジずれが生じる |
| 流動性ストレス | 市場が混乱すると、ディーラーがバランスシートの拡大を避けるため、現物・先物ベーシスも拡大し得る。これは [[derivatives/yen-basis-swap-market]] の円・米ドルベーシスと類似する |
| 日本銀行の買入れ | 日本銀行の国債買入れオペが CTD 銘柄を吸収すると、現物供給が減少し、SC レポのスペシャル化が深まり得る |

出典: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html] ^[source:https://www.boj.or.jp/en/research/wps_rev/rev_2025/rev25e03.htm]

ベーシス取引には、現物債の資金調達と先物証拠金が必要である。ここで引用する資料は、現時点の参加者順位や、ポジションの普遍的な方向を裏付けない。

## 決済サイクルと JSCC 清算

国債先物は、JPX グループの CCP である日本証券クリアリング機構（JSCC）を通じて清算・決済される。主な決済要素は次のとおり。

| 要素 | 詳細 |
|---|---|
| CCP | JSCC は、商品ページに掲載する大阪取引所の国債先物を清算する |
| 証拠金 | JSCC の現行の上場デリバティブ証拠金規則と VaR 方式に従う |
| 現物受渡し | 5 年、10 年、ミニ 20 年国債先物 |
| 現金決済 | ミニ 10 年国債先物 |
| 受渡の詳細 | 受渡適格銘柄、換算係数、日程、受渡代金の計算は JPX の受渡規則に従う |

出典: ^[source:https://www.jpx.co.jp/jscc/en/cash/futures/product.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html]

中央清算は相対のエクスポージャーを JSCC の清算制度へ置き換えるが、リスクをなくすものではない。清算機関の詳細は [[securities/japan-securities-clearing-corp]] を参照。

## OTC レポ・ベーシス

国債先物市場は、[[money-market/jgb-repo-market-japan]] で扱う国債レポ市場と密接に結び付いている。主な関係は次のとおり。

| 関係 | 仕組み |
|---|---|
| CTD の資金調達 | ベーシス取引で先物を売る主体は、現物で買った CTD をレポで資金調達する必要がある。CTD の SC レポ・スペシャル化は、ベーシス取引の採算へ直接影響する |
| インプライド・レポ金利 | 先物価格から得られるインプライド・レポ金利（IRR）は、現物と先物間で無裁定となる資金調達費用を示す。現物 IRR と市場レポ金利との差が、ベーシスの乖離を示す |
| 日本銀行保有の影響 | 日本銀行の買入れと特定銘柄に対する国債補完供給の利用可能性は、SC レポ金利と CTD の希少性を変える |
| 四半期末ベーシス | 四半期末のレポ・バランスシート縮小は、円・米ドル CCBS と同様に、現物・先物ベーシスを拡大させ得る |

出典: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/02.html] ^[source:https://www.boj.or.jp/en/research/wps_rev/rev_2025/rev25e03.htm]

現在の取引評価には、日付付きのレポ・クォート、受渡適格バスケットのデータ、換算係数、先物価格を用いる必要がある。本項では、普遍的な「スペシャル化」の閾値を設定しない。

## 公開参加者データの限界

JPX は商品別の取引高と建玉を公表するが、ここで引用する公式資料は、現時点の参加者順位、ディーラー別市場シェア、投資家の所在地別構成、ポジションの方向を明らかにしていない。これらを主張するには、日付付きの参加者別データまたは公開されたポジション開示が必要である。

## 日本銀行による国債市場政策の影響

国債先物を分析する際、日本銀行の政策決定は日付を特定して用いる一つの要素である。

| 政策上の節目 | 市場への影響を検証するための観測項目 |
|---|---|
| 量的・質的金融緩和（QQE、2013 年以降） | 日付付きの日本銀行の買入れ決定・オペ結果と、先物の取引高、建玉、受渡適格銘柄のレポ・クォート、現物・先物ベーシスを対応させる |
| イールドカーブ・コントロール（YCC、2016–2024 年） | 日付付きの利回り誘導の枠組み・変更と、対象限月の価格、取引高、建玉、実現ボラティリティ、CTD の資金調達条件を対応させる |
| YCC の修正（2022 年十二月、2023 年七月、2023 年十月） | 日本銀行の決定からイベント期間を定義し、影響の符号や大きさを仮定せず、同じ市場指標を比較する |
| YCC 終了とマイナス金利解除（2024 年三月） | 日付付きの政策決定と、前後で条件を揃えた観測値を用いる。政策上の節目だけでは正常化を立証できない |
| 2024 年以降の正常化 | 日付付きの買入れ計画、オペ結果、先物データ、レポ・クォート、国債補完供給の利用額を用いて、市場機能に関する主張を検証する |

出典: ^[source:https://www.boj.or.jp/en/mopo/outline/ref_qqe.htm] ^[source:https://www.boj.or.jp/en/research/wps_rev/rev_2025/rev25e03.htm]

政策上の節目は資料で確認できるが、先物の流動性、ベーシス、ボラティリティへの影響を主張するには、日付付きの市場データで検証する必要がある。日本銀行のオペの詳細は [[money-market/boj-open-market-operations]] を参照。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/call-market-structure]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[megabanks/mufg-bank]]
- [[megabanks/mizuho-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## 出典

- 日本取引所グループ・大阪取引所: 国債先物の契約仕様と商品情報。
- 日本証券クリアリング機構: 国債先物の清算規則と証拠金算定方法。
- 日本銀行: 国債補完供給と国債買入れオペに関する資料。
- 日本銀行レビュー: 国債市場の機能に関する分析資料。
- 金融庁: 上場デリバティブと清算に関する金融商品取引法上の枠組み。
- JPX 取引・統計情報: 大阪取引所デリバティブの月次取引高と建玉。
