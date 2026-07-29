---
source: derivatives/japan-rates-derivative-product-matrix
source_hash: 5b2248d994dabfb1
lang: ja
status: machine
fidelity: ok
title: "日本金利デリバティブ・プロダクトマトリクス"
translated_at: 2026-07-29T19:35:00.000Z
---

# 日本金利デリバティブ・プロダクトマトリクス

## 要点

日本の円金利分野には、**IRS、TONA OIS、JGB 先物、スワップション、CMS、インフレスワップ、円の通貨スワップ**があり、現物市場との比較対象として JGB 物価連動債も含まれる。JPX の現行の現物受渡し JGB 先物は 5 年、10 年、ミニ 20 年であり、ミニ 10 年 JGB 先物は別の現金決済商品である。本マトリクスは、契約形態、参照対象、公式な確認先に比較を限定する。集計統計から、現在のディーラー順位、商品別のエンドユーザー利用度、ディーラー収益を推定しない。

## Wiki 上の位置

本項目は [[derivatives/INDEX|derivatives index]] に属する。これは、ヘッドラインの OTC スワップレーンとして [[derivatives/japan-irs-market|Japan yen IRS market]] と、ディスカウントカーブおよび RFR レーンとして [[derivatives/ois-tona-curve|OIS / TONA curve]] と、取引所上場のヘッジレーンとして [[derivatives/jgb-futures-curve|JGB futures curve]] と、cross-currency の交差点として [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] と、IRS オプションレーンとして [[derivatives/japan-swaption-market|Japan swaption market]] と、スロープカーブ・プロダクトとして [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] と、CPI 連動ヘッジレーンとして [[derivatives/japan-inflation-swap|Japan inflation swap]] と、現物側のインフレ連動原資産として [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] と組み合わせて読む。現物市場は [[money-market/INDEX|money-market index]] であり、コーポレートのエンドユーザー側は [[finance/japan-corporate-fx-and-rate-hedge-policy|corporate FX and rate hedge policy]] である。

## 金利デリバティブ・プロダクトマトリクスが重要である理由

「日本の金利デリバティブ」という単一のフレーズは、清算venue、想定元本規模、参加者構成、エンドユーザーのユースケースがプロダクトごとに異なるという事実を覆い隠す。分類なしでは：

- 浮動参照（TIBOR vs TONA）とディスカウントカーブの役割が異なるにもかかわらず、円 IRS は円 OIS のように見える；
- 一方は取引所上場で現物決済され、他方は OTC でネット決済されるにもかかわらず、JGB 先物はスワップのように見える；
- 原資産 IRS カーブ上のオプション性レイヤーであり、特徴的な生保需要を持つにもかかわらず、スワプションはバニラオプションのように見える；
- 円と米ドルのターム調達を結び付ける調達裁定の商品であるにもかかわらず、CCBS は FX スワップのように見える；
- 一方は OTC デリバティブで他方は現物債券市場であるにもかかわらず、インフレスワップと JGBi は互換であるかのように見える。

このマトリクスは各プロダクトを所定の位置に置き、任意の単一のデリバティブページを、その代替ヘッジルートまたはその現物市場の原資産に照らして読めるようにする。

## プロダクト 1  —— 円 IRS（TIBOR フローティング）

- **商品タイプ。** 定義された日本円 TIBOR の年限を参照する OTC 固定対変動スワップ。[[derivatives/japan-irs-market|Japan yen IRS market]] を参照。
- **確認先。** 指標の状況は JBATA、JSCC の IRS 清算サービス適格商品は JSCC、集計値は BIS・日銀。
- **境界。** 商品適格性、法的清算義務、年限別流動性、特定機関のポジションは、それぞれ別の論点である。

## プロダクト 2  —— 円 OIS（TONA）

- **商品タイプ。** 複利 TONA を参照する OTC 固定対変動スワップ。[[derivatives/ois-tona-curve|OIS / TONA curve]] を参照。
- **確認先。** TONA の公表は日銀、適格 OIS 商品と基準は JSCC。
- **境界。** ディスカウンティング、担保、複利計算、年限の慣行は契約ごとに異なる。

## プロダクト 3  —— JGB 先物（10Y 標準）

- **商品タイプ。** 10 年標準物国債を対象とする大阪取引所の現物受渡し先物で、取引単位は JPY100 million。[[derivatives/jgb-futures-curve|JGB futures curve]] を参照。
- **確認先。** JPX の商品仕様、受渡規則、デリバティブ統計。
- **境界。** 建玉と出来高は日付・限月によって変わるため、日付のない規模に置き換えてはならない。

## プロダクト 4  —— その他の現行 JGB 先物

- **現物受渡し。** 5 年 JGB 先物の取引単位は JPY100 million、ミニ 20 年 JGB 先物は JPY10 million。
- **現金決済。** ミニ 10 年 JGB 先物は現金決済で、取引単位は JPY10 million。
- **境界。** JPX の現行仕様には、取引単位 JPY100 million の標準 20 年 JGB 先物は掲載されていない。ミニ 20 年とミニ 10 年を混同してはならない。

## プロダクト 5  —— JGB 物価連動債（JGBi）

- **商品タイプ。** デリバティブではなく、元本が生鮮食品を除く CPI に連動する財務省発行の現物債券。[[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] を参照。
- **確認先。** 財務省の商品、入札、連動係数の各ページ。
- **境界。** 現物市場のブレークイーブン比較には利用できるが、その利回りはインフレスワップ相場と互換ではない。

## プロダクト 6  —— スワプション（円 IRS のオプション）

- **商品タイプ。** コンファメーションで定義した円 IRS を原資産とし、行使・決済条件を定めた OTC オプション。[[derivatives/japan-swaption-market|Japan swaption market]] を参照。
- **確認先。** ISDA 商品文書および個別のコンファメーション。
- **境界。** 金利オプションの集計データは、日本のディーラー順位、「最も流動的」なグリッド点、特定投資家の方向を裏付けない。

## プロダクト 7  —— CMS（コンスタント・マチュリティ・スワップ）

- **商品タイプ。** CMS レッグが定義されたコンスタント・マチュリティ・スワップ金利を参照する OTC スワップ。[[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] を参照。
- **確認先。** ISDA 商品文書および取引のコンファメーション。
- **境界。** 現行の JSCC 適格商品ページは、CMS の広範な清算、流動性、参加者の利用度を裏付けない。

## プロダクト 8  —— インフレスワップ（CPI 連動）

- **商品タイプ。** 固定キャッシュフローと定義された CPI 連動キャッシュフローを交換する OTC スワップ。[[derivatives/japan-inflation-swap|Japan inflation swap]] を参照。
- **確認先。** 指定された CPI 系列は統計局、ペイオフの仕組みは ISDA 定義とコンファメーション。
- **境界。** 参照指数、ラグ、補間、清算状況、年限、投資家の利用は契約ごとに異なる。

## プロダクト 9  —— 円-米ドル cross-currency basis swap（CCBS）

- **商品タイプ。** 二通貨で定義されたキャッシュフローを交換し、当初・最終の元本交換とベーシススプレッドを含み得る OTC スワップ。[[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] および [[derivatives/yen-basis-swap-market|yen basis swap market]] を参照。
- **確認先。** ISDA の仕組み、BIS の集計分析、取引のコンファメーション。
- **境界。** 符号慣行、スプレッドを付すレッグ、年限、担保、清算、エンドユーザーの目的を商品名だけから推定できない。

## クロスプロダクト比較マトリクス

| 商品 | 形態 | 参照対象／原資産 | 公式な確認先 | 主な境界 |
|---|---|---|---|---|
| 円 IRS | OTC スワップ | 定義された日本円 TIBOR 年限 | JBATA、JSCC 適格商品ページ、コンファメーション | 指標の状況、清算適格性、義務は別々 |
| 円 OIS | OTC スワップ | 複利 TONA | 日銀、JSCC 適格商品ページ、コンファメーション | 複利計算と担保条件は契約固有 |
| 5Y／10Y JGB 先物 | 上場、現物受渡し | JPX の標準物国債と受渡適格銘柄 | JPX の商品仕様・受渡ページ | 取引単位 JPY100 million |
| ミニ 20Y JGB 先物 | 上場、現物受渡し | JPX の 20 年標準物国債と受渡適格銘柄 | JPX の商品仕様・受渡ページ | 取引単位 JPY10 million |
| ミニ 10Y JGB 先物 | 上場、現金決済 | 10 年 JGB 先物価格 | JPX ミニ商品ページ | 現物受渡しのミニ契約ではない |
| JGBi | 財務省の現物債券 | 生鮮食品を除く CPI | 財務省の JGBi・連動係数ページ | 現物債利回りはインフレスワップ相場ではない |
| スワップション | OTC オプション | 定義された原 IRS | ISDA 文書、コンファメーション | 行使と決済は取引固有 |
| CMS | OTC スワップ | 定義されたコンスタント・マチュリティ・スワップ金利 | ISDA 文書、コンファメーション | コンベクシティとペイオフは全条件に依存 |
| インフレスワップ | OTC スワップ | 指定された CPI 系列 | 統計局、ISDA 定義、コンファメーション | 指数ラグと補間は取引固有 |
| 円通貨スワップ | OTC スワップ | 定義された二通貨のキャッシュフロー・レッグ | ISDA 文書、BIS 集計、コンファメーション | スプレッドのレッグと符号慣行を明記する必要がある |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm] ^[source:https://www.stat.go.jp/english/data/cpi/index.html] ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

## このマトリクスの読み方

金利デリバティブ・プロダクトマトリクスは公開面のツールである。任意の単一のプロダクトページを読む際には：

1. **法的形態から始める。** 上場先物、OTC デリバティブ、JGBi 現物債券を区別する。
2. **正確な参照対象を明記する。** TIBOR、TONA、CPI、先物価格、CMS 金利は互換ではない。
3. **適格性と義務を分ける。** CCP の適格商品一覧だけでは、その取引に清算義務があることを証明しない。
4. **データセットをそろえる。** BIS／日銀の想定元本、JPX の取引枚数、財務省の債券金額は、単位も母集団も異なる。
5. **行動に関する主張には日付付き証拠を求める。** 参加者の方向、流動性、ディーラーシェア、収益には、具体的な開示またはデータセットが必要である。

## 境界事例と留意点

- **IRS vs OIS。** 両者とも固定対変動スワップとなり得るが、指定指標と計算方法が異なる。日本円 TIBOR は現在も公表されている。
- **上場先物 vs OTC スワップ。** 10Y JGB 先物はデュレーションをヘッジするが 10Y CTD にアンカーされる；OTC 10Y IRS は取引テナーでの正確な 10Y スワップレートをヘッジする。保険会社の ALM は両者を用い、basis 挙動が異なる。
- **JGBi vs インフレスワップ。** JGBi はインフレ連動キャッシュフローを交付する現物 MOF 発行債券である；インフレスワップは元本交換のない OTC デリバティブである。両者とも全国 CPI 除く生鮮食品を参照する。ヘッジファンドのインフレ・ブレークイーブン・トレードは通常、JGBi と OIS を組み合わせるか、インフレスワップを直接用いる。
- **スワップション vs JGB 先物オプション。** スワップションは定義されたスワップを参照し、取引所上場の JGB 先物オプションは先物契約を参照する。取引活動の比較には、日付と範囲をそろえたデータセットが必要である。
- **CMS vs バニラスワップ。** CMS スワップは、定期リセットの短テナー浮動金利ではなく、定期リセットの CMS レート（コンスタント・マチュリティのスワップレート）を支払う。「コンスタント・マチュリティ」の特性が凸性とボラサーフェスへの依存を変える。
- **通貨スワップ vs FX スワップ。** 契約構造とキャッシュフロー日程が異なる。比較の前に、正確な元本交換、金利レッグ、スプレッド慣行、満期を明記する必要がある。
- **BIS 想定元本 vs グロス市場価値。** BIS はグロス想定元本残高とグロス市場価値の両方を半期で公表する。グロス想定元本は規模比較のためのヘッドライン数値；グロス市場価値（はるかに小さい）は実際のエクスポージャーにより近い数値である。常に調査のヴィンテージを引用すること。

## 関連

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- Bank of Japan: BIS-coordinated OTC derivatives statistics for Japan (statistics/bis/yoshi).
- Bank for International Settlements: OTC derivatives statistics semi-annual release (derstats).
- Bank for International Settlements: OTC derivatives H2 2024  statistical release (otc_hy2502).
- Japan Securities Clearing Corporation (JSCC): IRS clearing services and JGB OTC clearing rules.
- LCH SwapClear: yen IRS clearing service description.
- Japan Exchange Group: JGB futures contract specifications.
- Japan Exchange Group: TONA 3-month futures specifications.
- Ministry of Finance: JGB auction calendar and JGB outstanding statistics.
- Ministry of Finance: JGB inflation-indexed bond (JGBi) issuance and outstanding pages.
- International Swaps and Derivatives Association (ISDA): SwapsInfo and IRS market-size publications.
- Financial Services Agency (FSA): FIEA framework for OTC derivatives clearing mandate.
