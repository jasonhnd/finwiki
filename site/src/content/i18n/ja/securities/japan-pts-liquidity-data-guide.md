---
source: securities/japan-pts-liquidity-data-guide
source_hash: 7f5a21c0f3b10acf
lang: ja
status: machine
fidelity: ok
title: "日本 PTS 流動性データガイド"
translated_at: 2026-06-19T12:43:19.858Z
---

# 日本 PTS 流動性データガイド

## 概要

PTS 流動性データは [[securities/japan-best-execution-sor-pts|日本の最良執行・SOR・PTS]] の背後にある証拠レイヤーである。これは、ある銘柄にとって代替的な取引の場が重要であるかどうかに答える助けとなるが、顧客固有の最良執行結果と同一ではない。有用な分析は、合計売買代金、銘柄レベルの活動、取引の場の利用可能性、スプレッド / 気配の質、注文サイズ、執行確率、そしてブローカーのルーティング方針を区別しなければならない。

本ページは [[securities/INDEX|証券ドメイン]]、[[securities/japan-market-infrastructure-map|日本の市場インフラ地図]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[securities/tokyo-stock-exchange|東京証券取引所]]、および [[securities/financial-instruments-business-operators-japan-index|金融商品取引業者の登録簿インデックス]] と併せて用いること。

## ソーススタック

| ソース | 有用な用途 | 境界・限界 |
|---|---|---|
| JSDA の PTS 統計ページ | PTS 取引の場における上場有価証券の取引に関する月次・年次データ。 | 公開統計ルートであり、ライブの気配配信やブローカー方針ではない。 |
| JSDA の解説 PDF | 取引所取引、取引所外取引、PTS 取引の定義、およびデータソースの説明。 | 該当する JSDA 会員からの報告を集計したもの。 |
| JPX の株式統計 | 取引所側の売買代金、時価総額、信用取引、空売り、投資部門別の文脈。 | 取引所データは PTS データではない。分母の取り方に注意して比較すること。 |
| Japannext の公開ページ | 取引の場の概要、規程、セッション構成、ルールの文脈。 | 取引の場の資料は、ブローカー固有の最良執行方針ではない。 |
| ODX の市場情報 | デイリーレポート、ヒストリカルデータ、Equity PTS／START の文脈。 | ODX 自身が、投資家は取扱証券会社を通じて取引すると注記している。 |
| ブローカーの方針ページ | SOR、最良執行、対象とする取引の場、除外、フォールバックルート。 | ブローカー開示は、銘柄レベルの実現価格改善データを提供しない場合がある。 |

## JSDA PTS 統計の読み方

JSDA は、現在同協会のウェブサイトで公表されている PTS 統計について、以前は PTS Information Network を通じて公表されていたものであり、同ネットワークは 2025年7月1日に終了したと説明している。同協会の英語版解説 PDF は以下を定義している：

- 取引所取引（exchange-traded transactions）を、国内の金融商品取引所における売買として；
- 取引所外取引（off-exchange transactions）を、それらの取引所の外での取引として；
- PTS 取引を、JSDA 会員が行う承認された PTS 運営業務を通じた取引所外取引として；
- データソースを、PTS 運営業務を行う JSDA 会員、および取引所外取引に従事する会員が提出する、売買高および売買代金に関する報告として。

これにより、JSDA のページは、一回限りの注文の執行監査のためではなく、**マーケットシェア / 流動性の文脈**のための正しい出発点となる。

## 主要指標

| 指標 | 有用な問い | 主な留意点 |
|---|---|---|
| 売買代金 | この期間の PTS 流動性は経済的に重要か。 | 合計額が大きくても、流動性の高い大型株に集中している場合がある。 |
| 売買高 | 金額だけでなく、株数ベースの活動はあるか。 | 低位株は出来高の比較を歪めることがある。 |
| 全体／取引所外活動に占める PTS のシェア | 取引所やその他の取引所外ルートと比べて、PTS はどの程度重要か。 | 分母の取り方によって答えが変わる。 |
| 銘柄レベルの活動 | 実際に PTS で取引されている有価証券はどれか。 | 合計統計は、銘柄レベルの薄さを覆い隠すことがある。 |
| 取引の場別の内訳 | 活動が単一の PTS に集中していないか。 | 取引の場の集中は SOR の価値に影響しうる。 |
| 時間帯／セッション | 夜間または日中の PTS 流動性は重要か。 | 公開の月次統計は、日中の板の厚みを示さない場合がある。 |
| スプレッド／気配の質 | ルーティングによって価格は改善するか。 | 約定額だけでなく、気配／最良気配（BBO）データが必要。 |
| 約定確率 | 有用なサイズで注文が約定できるか。 | 月次合計だけからは推定が難しい。 |

## アナリストのワークフロー

1. 問いから始める：市場構造、ブローカー執行、発行体流動性、または取引戦略との関連性。
2. 合計 / 月次 / 年次の PTS の文脈には JSDA PTS 統計を用いる。
3. 取引所側の分母および市場全体の文脈を理解するには JPX 統計を用いる。
4. ルール、セッション構造、利用可能な市場データには取引の場のページを用いる。
5. 顧客がその取引の場にアクセスできるかどうかを判断するには、ブローカーの最良執行 / SOR 方針ページを用いる。
6. 特定の銘柄については、気配、スプレッド、注文サイズ、ブローカーのルーティングデータが裏付けない限り、価格改善のみで記録する。
7. ブローカーに関するいかなる結論も、PTS 統計をそれ自体で証拠として扱うのではなく、[[securities/japan-best-execution-sor-pts|最良執行／SOR／PTS]] へと関連づけること。

## PTS データの解釈

| 解釈 | 適切な使い方 | 不適切な使い方 |
|---|---|---|
| 「PTS シェアが上昇した」 | 代替的な取引の場の流動性が、ブローカーや SOR にとってより重要になりつつあるかを問う。 | すべてのリテール注文がより良い執行を得られると主張する。 |
| 「PTS の活動が集中している」 | より深い執行分析に値する有価証券と取引の場を特定する。 | 流動性を東証の全銘柄に一般化する。 |
| 「ODX／Japannext が取引の場のデータを公表している」 | 取引の場の利用可能性とセッション構成を比較する。 | 取引の場のマーケティングを、独立した執行品質の証拠として扱う。 |
| 「取引所の出来高が支配的である」 | 取引所の流動性が依然として参照市場である理由を説明する。 | 特定の大型・流動性の高い銘柄における PTS の価格改善を無視する。 |
| 「月次統計が利用できる」 | トレンドチャートや定期レビューを作成する。 | 月次の合計データを使って単一の注文を監査する。 |

## JapanFG との関連性

- [[securities-firms/sbi-securities|SBI Securities]] および [[securities-firms/rakuten-securities|Rakuten Securities]] は、SOR と PTS アクセスがリテールのバリュープロポジションの一部であるかを問う際に読むべき中核的なオンラインブローカーである。
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] および [[securities-firms/paypay-securities|PayPay Securities]] が重要なのは、アプリ / エコシステム型の証券業がルートの複雑性を隠しつつ UX を簡素化しうるためである。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、および [[securities-firms/mufg-mums|MUMSS]] は機関投資家向けおよびフルサービスの執行にとって重要だが、ブローカー方針の証拠は依然としてエンティティごとに確認しなければならない。

## 留意点

- PTS 統計はライブの統合テープではない。
- PTS 執行は合計シェアが小さくても有用でありうるが、それは特定の注文、銘柄、時間帯に限られる。
- 執行品質分析にとっては、ヘッドラインの売買代金よりもスプレッド / 板の厚み / 約定データの方が重要である。
- ブローカーの SOR 組入れは、商品タイプ、注文タイプ、NISA、信用、単元未満株にわたって普遍的ではない。
- セキュリティトークン PTS の活動は、通常の現物株流動性分析に混ぜ込むのではなく、[[securities/osaka-digital-exchange|ODX]] および関連するトークン化証券のページへとルーティングされる。

## 関連

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

## Sources

- JSDA: PTS trading statistics page.
- JSDA: explanatory PDF for PTS equity statistics.
- JPX: equity statistics pages.
- Japannext: official site and regulations page.
- ODX: daily report and historical data pages.
