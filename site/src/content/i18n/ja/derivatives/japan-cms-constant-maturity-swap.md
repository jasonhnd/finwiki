---
source: derivatives/japan-cms-constant-maturity-swap
source_hash: ec18bb62b25d2a43
lang: ja
status: machine
fidelity: ok
title: "日本の CMS（コンスタント・マチュリティ・スワップ）市場"
translated_at: 2026-07-29T18:50:00.000Z
---

# 日本の CMS（コンスタント・マチュリティ・スワップ）市場

## TL;DR

コンスタント・マチュリティ・スワップ（CMS）は、一方のレグが固定参照金利（または変動短期参照金利）を支払い、他方のレグが定期的にリセットされる長期テナーのスワップ金利を支払う店頭金利デリバティブである。最も一般的には、各リセット日における 10年物または 5年物の円スワップ金利を参照する。CMS レグを特徴づけるのは、各リセットで参照されるスワップ金利が一定の満期（たとえば各リセットで 10年）を持つ点であり、これに対しバニラ IRS では変動参照金利が一定の短期テナー（たとえば 3か月物 TIBOR または複利 TONA）を持つ。

CMS は、日本で販売されるイールドカーブ形状連動型の各種仕組商品の構造的な構成要素である。すなわち、CMS 連動債（10年物円スワップ金利に連動するクーポンを支払う）、CMS スプレッド債（10年物マイナス 2年物のスプレッドや類似のカーブ・スティープネス指標に連動するクーポンを支払う）、および CMS キャップ付き／フロア付きフローターである。CMS の価格付けには、CMS 金利のペイオフが原資産であるフォワード・スワップ金利に対して非線形であるため、コンベクシティ調整が必要となる。このコンベクシティ補正は原資産スワップ金利のインプライド・ボラティリティに依存し、[[derivatives/japan-swaption-market|JPY swaption vol grid]] を直接の入力とする。

FinWiki では、このエントリは CMS のメカニクス、コンベクシティ調整、円での利用事例（CMS 連動債および CMS スプレッド商品）、価格付けの入力、ならびに公開情報から市場シェアを論じる際の限界を扱う。

## Wiki ルート

このエントリは金利デリバティブ・クラスタ内の [[derivatives/INDEX|derivatives index]] の下に位置する。CMS 金利が導出される基礎となるバニラ IRS については [[derivatives/japan-irs-market]]、コンベクシティ価格付けを駆動するボラティリティ・グリッドの入力については [[derivatives/japan-swaption-market]]、ディスカウント・カーブについては [[derivatives/ois-tona-curve]] と併せて読むこと。仕組債の販売チャネルは [[derivatives/structured-bond-japan-retail-issuance]] および [[derivatives/structured-product-eb-knockin-japan-retail]] で扱う。

## 商品のメカニクス

標準的な円 CMS は次の構造を持つ。

| 要素 | 詳細 |
|---|---|
| 想定元本 | 定義される。交換はされない |
| テナー | スワップの総テナー（たとえば 5年の総満期） |
| リセット頻度 | 定期的（通常は四半期ごとまたは半期ごと） |
| 固定／スプレッド・レグ | 固定金利（ディーラーが価格付けする「CMS スワップ金利」）または変動短期金利＋スプレッドを支払う |
| CMS レグ | 各リセット日に、その時点の N 年物円スワップ金利を支払う（たとえば各リセットで観測される 10年物円スワップ金利） |
| 日数計算 | 円では ACT/365 が一般的 |
| 決済 | 各クーポン日のネット支払い |
| 契約書 | ISDA マスター＋ CSA |

例：5年物 CMS-10年スワップは、一方のレグで 10年物円スワップ金利（各四半期リセットで固定）を支払い、他方のレグで固定金利または 3か月物 TIBOR／複利 TONA ＋スプレッドを支払う。

経済的な内容としては、CMS レグの支払い手は長期側スワップ・カーブの水準（および形状）の推移に対する見方を取っており、CMS レグの受け取り手はその反対方向でヘッジまたは投機を行う。

## なぜコンベクシティ調整が必要か

将来の任意のリセット日における CMS 金利は、その日に開始する N 年物スワップのパー・スワップ金利である。CMS レグのペイオフの PV は原資産であるフォワード・スワップ金利に対して非線形となる。なぜなら、CMS レグのクーポンで「支払われる」スワップ金利は、それ自体の PV（その金利でそのスワップに入った場合の N 年物原資産スワップの PV）が自身の金利と非自明な関係を持つスワップを参照して計算されるためである。

標準的な価格付けのアプローチは、CMS ペイオフを次のように分解する。

1. 現在のディスカウント・カーブを用いて、リセット日 $T$ における N 年物原資産スワップのフォワード・スワップ金利 $S(t, T, N)$ を計算する。
2. フォワード・スワップ金利にコンベクシティ調整を適用する：$\hat{S} = S + \text{convex. adj.}$。この調整は、原資産スワップ金利のインプライド・ボラティリティ（[[derivatives/japan-swaption-market|swaption vol grid]] 由来）および原資産スワップのテナー構造に依存する。
3. 価格付けにおいて $\hat{S}$ を CMS クーポンの期待値として用いる。

クローズドフォームの近似（Hagan、Brigo-Mercurio など）が広く用いられている。複雑なカーブ・レジームでは、マルチファクター短期金利モデル（Hull-White、LMM）がより正確なコンベクシティ調整を与える。

実務上の帰結として、CMS の価格付けはスワプション・ボラティリティ・サーフェス、特に参照されるスワップ金利のテナー（たとえば CMS-10年商品に対する 10年物ボラティリティ）に対して有意に感応的である。これが、ディーラーのブックにおいて CMS 市場とスワプション市場が密接に連動している理由である。

## 円での利用事例

円での CMS 商品は、エンドユーザーのいくつかの目的に応える。

| 商品 | 構造 | エンドユーザーにとっての魅力 |
|---|---|---|
| CMS 連動債（クーポン = a + b × CMS-10年） | 10年物円スワップ金利に連動する定期クーポン | バニラ・フローター対比の利回り上乗せ。長期側金利が上昇するとの見方 |
| CMS スプレッド債（クーポン = a + b ×（CMS-10年 − CMS-2年）） | 契約で定義されたカーブ・スプレッドに連動するクーポン | 乗数が正の場合、参照スプレッドが該当する閾値を上回っている間は、通常クーポンに有利となる。キャップ、フロア、符号によってエクスポージャーは変わり得る |
| CMS キャップ付きフローター | CMS 金利を参照するキャップを持つ変動クーポン | 契約上の算式に基づくクーポンの上限を定める |
| CMS フロア付きフローター | CMS 金利を参照するフロアを持つ変動クーポン | 低金利環境において下限を画定する |
| レンジ・アクルーアル CMS | CMS 金利が定義されたレンジ内にある場合にのみクーポンが発生 | カーブのレンジに関する方向性の見方に基づく利回り上乗せ |
| スノーボール CMS | 契約固有の算式に従い、過去の CMS 金利観測値に基づいてクーポンが決まる | 経路依存型のエクスポージャーであり、ペイオフは債券条件またはコンファメーションで確認する必要がある |

Source: ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

以上はペイオフの類型であって、特定の投資家層、販売チャネル、取引規模を示す証拠ではない。これらは取引・販売ごとに異なり、該当する目論見書、コンファメーション、発行体開示で確認する必要がある。

## 価格付けの入力

円向けの完全な CMS 価格付けエンジンには次が必要である。

| 入力 | 出所 |
|---|---|
| 円 OIS-TONA ディスカウント・カーブ | [[derivatives/ois-tona-curve|TONA-OIS curve]] |
| 円スワップ・フォワード金利カーブ | [[derivatives/japan-irs-market|JPY IRS market]] からのブートストラップ |
| 円スワプション・インプライド・ボラティリティ・サーフェス | [[derivatives/japan-swaption-market|JPY swaption vol grid]]（満期 × テナーの行列） |
| 相関の前提（CMS スプレッド商品向け） | テナー間相関。ヒストリカルまたはオプション・インプライド・データから逆算可能 |
| クレジット・ファンディング・スプレッド（ディーラー自身のバランスシート向け） | xVA フレームワーク（FVA、CVA、DVA） |

CMS スプレッド商品は、二つのスワップ金利（たとえば 10年物と 2年物）の間の相関に対して特に感応的である。スプレッドのペイオフはいずれか一方のテナー単独よりもボラティリティが低いため、相関の誤った価格付けは商品を大きく誤評価しうる。

## 公開データの限界

ここで引用する公式資料は、金利デリバティブの仕組みと JSCC の清算対象 IRS 商品を説明しているが、現在のディーラー順位、CMS の市場シェア、日本固有の CMS 取引高時系列は公表していない。したがって、特定ディーラーや流動性供給力を比較するには、日付付きの公開取引、目論見書、取引施設データ、またはディーラー開示が必要であり、ここでは推定しない。

## 流動性と市場の厚み

| テナー／構造 | 流動性 |
|---|---|
| バニラ CMS（たとえば 5年物 CMS-10年） | 中程度。ディーラーは引き合いに応じて気配を提示。ビッド・アスクはバニラ IRS より広い |
| CMS 連動債（発行体側） | 散発的。リテール／機関投資家の需要に依存 |
| CMS スプレッド債 | 散発的。相関に感応的な価格付けのため、ディーラーはエクスポージャーを厳格に管理 |
| バミューダン・コーラブル CMS | 限定的。オーダーメイド。主にディーラー対発行体 |

円 CMS 市場は、ユーロ CMS 市場（カーブ・スティープネス商品がはるかに大規模かつ発達した仕組販売基盤を持つ）よりも大幅に小さく、ドル CMS よりも小さい。散発的な販売パターンにより、CMS の取引量はカーブ形状が魅力的なペイオフ・プロファイルを呈するときに急増する。

## クリアリング

円 CMS は圧倒的に相対（バイラテラル）である。JSCC は、バニラ IRS に対するほどには CMS にクリアリング範囲を拡大していない。非清算の CMS 取引は、対象となるカウンターパーティについては UMR フェーズの当初証拠金要件の対象となり、標準的な CSA による担保化の対象となる。

## 関連

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## 出典

- ISDA: Disclosure Annex for Interest Rate Transactions — 商品の仕組みおよび評価リスクの開示: https://www.isda.org/a/ORiDE/isda-rates.pdf
- ISDA: RFR Conventions and IBOR Fallbacks Product Table — 参照金利および市場慣行の背景: https://www.isda.org/a/bdigE/RFR-Conventions-and-IBOR-Fallbacks-Product-Table-October-2021.pdf
- JSCC: Eligible IRS products — 清算対象範囲の確認: https://www.jpx.co.jp/jscc/en/cash/irs/product.html
