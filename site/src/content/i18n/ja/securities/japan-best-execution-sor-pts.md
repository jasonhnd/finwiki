---
source: securities/japan-best-execution-sor-pts
source_hash: 79ca36a4a5e6132a
lang: ja
status: machine
fidelity: ok
title: "日本の最良執行、SOR、および PTS"
translated_at: 2026-06-19T12:43:19.930Z
---

# 日本の最良執行、SOR、および PTS

## 概要

日本における最良執行は、リテール株式手数料競争の背後にある制御層である。ブローカーの「手数料ゼロ」というメッセージは、それ自体では、顧客注文が東京証券取引所、私設取引システム（PTS）、または別の執行経路にルーティングされているかどうかも、価格、コスト、スピード、執行可能性、決済確実性、顧客指示がうまくバランスされているかどうかも説明しない。

このページは [[securities/japan-online-brokerage-competition|Japan online brokerage competition]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、そして [[securities-firms/sbi-securities|SBI Securities]] や [[securities-firms/rakuten-securities|Rakuten Securities]] のようなブローカーページと併せて使用すること。

これは [[securities/INDEX|securities domain]] 内の執行品質ルートである。業者登録およびカテゴリーの確認については、ブローカーポリシーページを読む前に [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] および [[financial-licenses/INDEX|JapanFG legal / financial licenses]] から始めること。

## ソーススタック

| 層 | ソースルート | 何を説明するか |
|---|---|---|
| 規制 / 監督 | FSA 金融商品取引業者監督指針および顧客本位の業務運営ページ | 市場仲介機能、顧客最善の利益、システムリスク、注文処理、行為監督。 |
| 自主規制 / 統計 | [[financial-regulators/jsda|JSDA]] 規則および PTS 取引統計 | ディーラー自主規制ルートおよび公開 PTS 取引情報。 |
| 取引所 / 執行 | [[securities/tokyo-stock-exchange|TSE]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]] | 注文がどこで執行され得るか。 |
| クリアリング / 決済 | [[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]] | 約定後のリスクと決済が制御されるまで執行が完了しない理由。 |
| ブローカー開示 | ブローカー最良執行ポリシーおよび執行ポリシーページ | 特定のブローカーが顧客注文をどのようにルーティングし、考慮すると述べている要因は何か。 |

## 執行ルートマップ

| ルート | 実務上の意味 | FinWiki の読み解き |
|---|---|---|
| プライマリ取引所ルーティング | ブローカーが注文を主要取引所市場、通常は上場現物株式について [[securities/tokyo-stock-exchange|TSE]] に送る。 | 説明は単純だが、あらゆる価格 / スプレッド / タイミングのケースで自動的に最良とは限らない。 |
| SOR ルーティング | スマートオーダールーティングは、ブローカーポリシーと注文条件に従って利用可能な取引所を比較する。 | 手数料マーケティングと実際の執行品質の間の鍵となるリンク。 |
| PTS 執行 | 注文が [[securities/japannext-securities|Japannext]] や [[securities/osaka-digital-exchange|ODX]] のような代替取引所で執行される。 | 一部のケースで価格 / 時間 / 流動性を改善し得る；明確なポリシーと顧客開示が必要。 |
| 顧客指示 | 利用可能な場合、顧客が取引所または注文条件を指示する。 | 一部のブローカーのデフォルトロジックを上書きし得る；商品画面とポリシーを確認すること。 |
| 内部 / OTC / 特別ルート | ブローカーが非標準または商品固有のルートを使用する。 | 利益相反、価格付け、開示について追加の精査が必要。 |

## SOR は魔法の言葉ではない

SOR は保証ではなく運営ポリシーとして扱われる。各ブローカーについて、以下を確認すること：

1. どの取引所が含まれているか；
2. ポリシーが価格、手数料、スピード、執行確率、決済確実性を比較しているか；
3. PTS の価格改善が顧客にパススルーされているか；
4. ブローカーがリベート、スプレッド経済、証券貸借価値、その他の間接的経済を稼いでいるか；
5. システム障害、クロス市場、部分約定、寄り付き / 引け時の挙動がどのように処理されるか；
6. 顧客が SOR を選択または無効化できるか。

これが、[[securities/japan-online-brokerage-competition|online brokerage competition]] が国内株式手数料体系のみで判断されるべきではない理由である。

## PTS の役割

JSDA は PTS 取引所での上場証券の取引に関する情報を公表しており、旧 PTS 情報ネットワークが終了し、JSDA が公開統計ルートを担っていることを記している。実務上の読み解きは以下のとおり：

- PTS は市場インフラの一部であり、ブローカーマーケティングへの脇注ではない。
- PTS データは、代替取引所の流動性がある証券または期間にとって重要かどうかをアナリストが問うのに役立つ。
- ブローカー SOR ポリシーが、リテール注文が PTS の価格改善にアクセスできるかどうかを決定する。
- PTS 取引所は依然としてクリアリング、決済、システムレジリエンス、規制監督に依存する。

## ブローカー比較のための質問

| 質問 | 公的な関連性 |
|---|---|
| ブローカーは現行の最良執行ポリシーを公表しているか？ | 手数料の主張を比較する前の必読事項。 |
| ブローカーは PTS にルーティングするか？ | 価格改善、執行時間、手数料 / スプレッド経済に影響する。 |
| どの注文が除外されるか？ | 単元未満株、外国株、信用、デリバティブ、特別注文、NISA ワークフローは異なり得る。 |
| 顧客に見える便益は何か？ | より良い価格、より低い明示的手数料、より速い約定、またはブローカー側の経済のみか。 |
| SOR が失敗したらどうなるか？ | フォールバックルートと障害ポリシーがオペレーショナルリスクにとって重要。 |
| エコシステムインセンティブはあるか？ | ポイント、銀行連携、ウォレット経済が執行経済を覆い隠し得る。 |

## JapanFG との関連性

- [[securities-firms/sbi-securities|SBI Securities]] および [[securities-firms/rakuten-securities|Rakuten Securities]] は、国内株式の手数料変更と SOR / PTS ルーティングが顧客価値提案に影響するため、最初に読むべきブローカーページである。
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] およびその他の銀行 / 通信連携ブローカーは、取引コストのみではなくグループのディストリビューション経済に照らして読むべきである。
- [[securities-firms/paypay-securities|PayPay Securities]] はアプリ組み込み型であるため、執行開示は UX の単純さと投資家保護の制御とともに読まなければならない。
- [[securities-firms/gmo-click-securities|GMO Click Securities]]、[[securities-firms/dmm-com-securities|DMM.com Securities]]、および FX / CFD ブローカーは、上場現物株式の最良執行がデリバティブ執行と同じではないため、別個の商品ルートの確認が必要である。

## リスクと留保

| リスク | 読み解き |
|---|---|
| 文脈のない見出しの価格改善 | 手数料、スプレッド、約定確率、注文サイズを含む総合的な結果を比較すること。 |
| 取引所集中 | ポリシーは形式的には広範でも、実務上はほとんどの注文を一つの取引所にルーティングし得る。 |
| 利益相反 | ブローカーの経済が顧客の執行結果と異なり得る。 |
| システムの脆弱性 | SOR はリアルタイムデータ、接続性、取引所の可用性、フォールバック規則に依存する。 |
| 顧客理解の不足 | リテール顧客は「無料取引」を見ても、取引所選択を理解しないことがある。 |
| 古いポリシーページ | ライブな主張を行う前に、必ず現行のブローカーポリシーページを確認すること。 |

## リサーチチェックリスト

1. ブローカーの現行の最良執行ポリシーから始める。
2. 含まれる取引所を特定する：TSE、PTS、またはその他のルート。
3. ボリュームが重要であれば、関連する期間の JSDA PTS 統計を確認する。
4. 顧客指示または商品カテゴリーがルーティングを変えるかどうかを確認する。
5. 明示的手数料、暗黙的スプレッド、価格改善、ポイント、グループ経済を分離する。
6. 執行ルートの結論を [[securities/japan-market-infrastructure-map|market infrastructure]] および [[financial-licenses/securities-license-stack|license stack]] に結び戻す。

## 関連

- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-licenses/securities-license-stack]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## ソース

- FSA：金融商品取引業者向け総合的な監督指針。
- FSA：顧客本位の業務運営ページ。
- JSDA：PTS 取引統計ページ。
- JSDA：規則および自主規制資料ページ。
- Japannext および ODX の公式取引所ページ。
- JPX：クリアリング / 決済の概要。
