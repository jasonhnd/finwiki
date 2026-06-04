---
source: securities/japan-pts-liquidity-data-guide
source_hash: 6619b265e1dbd58f
lang: ja
status: machine
fidelity: ok
title: "日本のPTS流動性データガイド"
translated_at: 2026-06-03T00:53:08.303Z
---

# 日本のPTS流動性データガイド

## 概要

PTS 流動性データは、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] の背後にある証拠層です。これは、代替取引所が証券にとって重要であるかどうかを判断するのに役立ちますが、顧客固有の最良約定結果と同じではありません。有用な分析では、取引総額、銘柄レベルのアクティビティ、会場の利用可能性、スプレッド/相場の質、注文サイズ、約定確率、ブローカーのルーティングポリシーを分離する必要があります。

このページは、[[securities/INDEX|securities domain]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]]でご利用ください。

## 出典スタック

| 出典 | 有用な用途 | 境界 |
|---|---|---|
| JSDA PTS 統計ページ | PTS会場での取引所上場証券の取引に関する月次および年次データ。 | 公的統計ルート。ライブ見積もりフィードやブローカーポリシーではありません。 |
| JSDA説明PDF | 取引所取引、取引所外取引、および PTS 取引の定義。データソースの説明。 | JSDAの関係会員からの報告をもとに集計。 |
| JPX株式統計 | 取引所側の取引額、時価総額、証拠金、空売り、および投資家の種類のコンテキスト。 | Exchange データは PTS データではありません。分母を慎重に比較してください。 |
| ジャパンネクスト公開ページ | 会場のプロフィール、規制、セッションの構造、およびルールのコンテキスト。 | 会場資料はブローカー固有の最良約定ポリシーではありません。 |
| ODX市場情報 | 日次レポート、履歴データ、株式 PTS / START コンテキスト。 | ODX 自体は、投資家が承認された証券会社を通じて取引を行うと述べています。 |
| ブローカーポリシーページ | SOR、最良執行、含まれる会場、除外、フォールバック ルート。 | ブローカーの開示では、銘柄レベルの実現された価格改善データが提供されない場合があります。 |

## JSDA PTS 統計の読み方

JSDA は、現在 Web サイトで公開されている PTS 統計は、以前は PTS 情報ネットワークを通じて公開されていたが、7 月 1, 2025 で終了したと説明しています。英語の説明 PDF では次のように定義されています。

- 国内金融商品取引所における売買としての取引所取引。
- 取引所外の取引としての取引所外取引。
- JSDA会員が行う認定PTS運営事業を通じた取引所外取引としてのPTS取引
- PTS運営事業を行うJSDA会員および取引所外取引を行う会員から提出される取引高および取引額に関するレポートとしてのデータソース。

そのため、JSDA ページは、単一注文の執行監査ではなく、**市場シェア/流動性コンテキスト**の適切な出発点になります。

## 主要指標

| 指標 | 有用な問い | 主な注意点 |
|---|---|---|
| 売買代金 | この時期、PTS の流動性は経済的に重要ですか? | 高い集合価値は液体の大型株に集中している可能性があります。 |
| 取引量 | 円の価値だけでなく、株数のカウントも行われていますか? | 低価格株は出来高比較を歪める可能性があります。 |
| 合計/取引所外アクティビティに占める PTS シェア | PTS とエクスチェンジおよびその他のオフエクスチェンジ ルートとの比較はどの程度重要ですか? | 分母の選択によって答えが変わります。 |
| 問題レベルのアクティビティ | 実際に PTS で取引される証券はどれですか? | 集計統計により、問題レベルの薄さが隠蔽される可能性があります。 |
| 会場レベルの分割 | アクティビティは 1 つの PTS に集中していますか? | 会場の集中は SOR 値に影響を与える可能性があります。 |
| 時間帯/セッション | 時間外または日中の PTS 流動性は重要ですか? | 公開されている月次統計では、日中の深度が表示されない場合があります。 |
| スプレッド/相場の品質 | ルーティングによって価格は向上しますか? | 実行金額だけでなく、相場/最高入札価格データも必要です。 |
| 約定確率 | 注文は有効なサイズで実行できますか? | 毎月の合計だけから推測するのは困難です。 |

## 分析ワークフロー

1. 市場構造、ブローカーの執行、発行者の流動性、または取引戦略の関連性などの質問から始めます。
2. 集計/月次/年次 PTS コンテキストには JSDA PTS 統計を使用します。
3. JPX の統計を使用して、取引所側の分母と市場全体の状況を理解します。
4. ルール、セッション構造、利用可能な市場データについては会場ページを使用してください。
5. ブローカーの最良約定 / SOR ポリシー ページを使用して、顧客が会場にアクセスできるかどうかを判断します。
6. 特定の銘柄については、相場、スプレッド、注文サイズ、ブローカー ルーティング データがサポートしている場合を除き、価格の改善のみを記録します。
7. PTS 統計そのものを証拠として扱うのではなく、ブローカーの結論を [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] に関連付けます。

## PTS データの解釈

| 解釈 | 適切な使い方 | 不適切な使い方 |
|---|---|---|
| 「PTSシェア上昇」 | 代替会場の流動性がブローカーや SOR にとってより重要なものになっているかどうかを尋ねます。 | すべての小売注文がより適切に実行されると主張します。 |
| 「PTS活動が集中している」 | どの証券と取引所がより詳細な約定分析に値するかを特定します。 | 流動性を TSE ユニバース全体に一般化します。 |
| 「ODX/ジャパンネクストが会場データを公開」 | 会場の空き状況とセッションの構成を比較します。 | 会場マーケティングを独立した執行品質の証拠として扱います。 |
| 「取引量が圧倒的に多い」 | 為替の流動性が参照市場のままである理由を説明してください。 | 特定の大型銘柄/流動銘柄の PTS 価格の改善を無視します。 |
| 「毎月の統計が入手可能」 | 傾向グラフと定期的なレビューを作成します。 | 月次集計データを使用して、単一の注文を監査します。 |

## JapanFG での関連性

- [[securities-firms/sbi-securities|SBI Securities]] と [[securities-firms/rakuten-securities|Rakuten Securities]] は、SOR と PTS へのアクセスが小売価値提案の一部であるかどうかを尋ねるときに読むべき中心的なオンライン ブローカーです。
- アプリ/エコシステムの仲介により、ルートの複雑さを隠しながら UX を簡素化できるため、[[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] と [[securities-firms/paypay-securities|PayPay Securities]] は重要です。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、および [[securities-firms/mufg-mums|MUMSS]] は、機関およびフルサービスの執行にとって重要ですが、ブローカーポリシーの証拠は依然として事業体ごとにチェックする必要があります。

## 注意点

- PTS 統計は、ライブ統合テープではありません。
- PTS 執行は、総シェアが小さい場合でも役立ちますが、特定の注文、証券、時間枠に対してのみ役立ちます。
- 約定品質分析では、ヘッドライン取引額よりもスプレッド/デプス/フィルデータの方が重要です。
- ブローカーの SOR の包含は、商品タイプ、注文タイプ、NISA、マージン、奇数ロット間で共通ではありません。
- セキュリティ トークン PTS アクティビティは、通常の現金株式流動性分析に混入されるのではなく、[[securities/osaka-digital-exchange|ODX]] および関連するトークン化されたセキュリティ ページにルーティングされます。

## 関連項目

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## 出典

- JSDA: PTS trading statistics page.
- JSDA: explanatory PDF for PTS equity statistics.
- JPX: equity statistics pages.
- Japannext: official site and regulations page.
- ODX: daily report and historical data pages.
