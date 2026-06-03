---
source: securities/japan-best-execution-sor-pts
source_hash: 62b3e787b1162123
lang: ja
status: machine
fidelity: ok
title: "日本最高執行、SOR、PTS"
translated_at: 2026-06-03T00:53:08.279Z
---

# 日本最高執行、SOR、PTS

## 概要

日本における最良執行は、小売株式手数料競争の背後にある制御層です。 ブローカーの「手数料ゼロ」メッセージだけでは、顧客の注文が東京証券取引所、独自取引システム（PTS）、または別の約定経路に送られるかどうか、また、価格、コスト、速度、約定の可能性、決済の確実性、顧客の指示のバランスが取れているかどうかを説明するものではありません。

このページは、[[securities/japan-online-brokerage-competition|Japan online brokerage competition]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、および [[JapanFG/sbi-securities|SBI Securities]] や [[JapanFG/rakuten-securities|Rakuten Securities]] などのブローカーページで使用します。

これは、[[securities/INDEX|securities domain]] 内の実行品質のルートです。 会社の登録とカテゴリのチェックについては、ブローカー ポリシーのページを読む前に、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] と [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] から始めてください。

## 出典スタック

| レイヤー | 出典ルート | 説明内容 |
|---|---|---|
| 規制・監督 | 金融庁金融商品取引業者の監督指針・顧客本位の業務運営ページ | 市場仲介機能、顧客の最善の利益、システムリスク、注文処理、および行為の監督。 |
| 自主規制・統計 | [[JapanFG/jsda|JSDA]] ルールと PTS 取引統計 | ディーラー自主規制ルートと公開PTS取引情報。 |
| 会場・実施 | [[securities/tokyo-stock-exchange|TSE]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]] | 注文を実行できる場所。 |
| 清算・決済 | [[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]] | 取引後のリスクと決済が制御されるまで執行が完了しない理由。 |
| ブローカーの開示 | ブローカーの最適約定ポリシーと約定ポリシーのページ | 特定のブローカーが顧客の注文をどのようにルーティングするのか、またどのような要素を考慮するのか。 |

## 実行ルートマップ

| ルート | 実用的な意味 | FinWiki の読み方 |
|---|---|---|
| プライマリ交換ルーティング | ブローカーは注文を主要取引所市場 (通常、上場現物株式の場合は [[securities/tokyo-stock-exchange|TSE]]) に送信します。 | 説明するのは簡単ですが、すべての価格、スプレッド、タイミングのケースで自動的に最適になるわけではありません。 |
| SOR ルーティング | スマート注文ルーティングは、ブローカーのポリシーと注文条件に従って利用可能な会場を比較します。 | 手数料マーケティングと実際の約定品質の間の重要なリンク。 |
| PTS実行 | 注文は[[securities/japannext-securities|Japannext]]や[[securities/osaka-digital-exchange|ODX]]などの代替会場で執行されます。 | 場合によっては、価格、時間、流動性が向上する可能性があります。 明確なポリシーと顧客への開示が必要です。 |
| お客様への指示 | 可能な場合は、お客様が会場または注文条件を指示します。 | 一部のブローカーのデフォルト ロジックをオーバーライドする可能性があります。 製品画面とポリシーを確認してください。 |
| 社内/店頭/特別ルート | ブローカーは、非標準または製品固有のルートを使用します。 | 矛盾、価格設定、開示については特別な精査が必要です。 |

## SORは魔法の言葉ではない

SOR は保証ではなく、運用ポリシーとして扱われます。 各ブローカーについて、以下を確認してください。

1。 どの会場が含まれるか。
2。 保険契約が価格、手数料、速度、約定確率、決済確実性を比較しているかどうか。
3。 PTS価格の改善が顧客に反映されるかどうか。
4。 ブローカーがリベート、スプレッド経済学、証券貸付価値、またはその他の間接的な経済学を獲得しているかどうか。
5。 システム停止、クロスマーケット、部分約定、およびマーケットオープン/クローズ動作がどのように処理されるか。
6。 顧客が SOR を選択できるか無効にできるか。

これが、[[securities/japan-online-brokerage-competition|online brokerage competition]] が国内株式手数料スケジュールだけで判断されない理由です。

## PTSの役割

JSDA は、PTS 会場での上場有価証券の取引に関する情報を公開しています。また、以前の PTS 情報ネットワークが終了し、JSDA が公的統計ルートを引き継いだことに留意してください。 実際の読み方は次のとおりです。

- PTS は市場インフラの一部であり、ブローカー マーケティングの補足ではありません。
- PTS データは、アナリストが代替会場の流動性が証券または期間にとって重要かどうかを検討するのに役立ちます。
- ブローカーの SOR ポリシーは、小売注文が PTS 価格改善にアクセスできるかどうかを決定します。
- PTS会場は依然として清算、決済、システムの回復力、規制の監視に依存しています。

## ブローカーの比較に関する質問

| 質問 | 公共関連性 |
|---|---|
| ブローカーは現在の最良執行ポリシーを公開していますか? | 料金請求を比較する前に必ずお読みください。 |
| ブローカーは PTS にルーティングしますか? | 価格の改善、約定時間、手数料/スプレッドの経済性に影響します。 |
| どの注文が除外されますか? | 端数、外国株式、証拠金、デリバティブ、特注、NISA等のワークフローは異なる場合があります。 |
| 顧客にとって目に見えるメリットは何ですか? | より良い価格、より低い明示的な手数料、より速い約定、またはブローカー側の経済性のみ。 |
| SOR が失敗するとどうなりますか? | フォールバック ルートと停止ポリシーは運用リスクにとって重要です。 |
| エコシステムへのインセンティブはありますか? | ポイント、銀行との連携、ウォレットの経済性が実行の経済性を覆い隠してしまう可能性があります。 |

## JapanFGでの重要性

- 国内株式手数料の変更と SOR / PTS ルーティングは顧客の価値提案に影響を与えるため、[[JapanFG/sbi-securities|SBI Securities]] と [[JapanFG/rakuten-securities|Rakuten Securities]] は最初に読むブローカー ページです。
- [[JapanFG/mufg-esmart-securities|MUFG eSmart Securities]] およびその他の銀行/通信関連ブローカーは、取引コストだけでなく、グループの流通経済学にも照らして評価されます。
- [[JapanFG/paypay-securities|PayPay Securities]] はアプリに埋め込まれているため、実行の開示は UX の簡素化と投資家保護の制御を考慮して読み取る必要があります。
- [[JapanFG/gmo-click-securities|GMO Click Securities]]、[[JapanFG/dmm-com-securities|DMM.com Securities]]、および FX / CFD ブローカーは、上場現物株式の最適執行がデリバティブ執行と同じではないため、個別の商品ルート チェックが必要です。

## リスクと注意点

| リスク | 読書 |
|---|---|
| 文脈のない見出しの価格改善 | 手数料、スプレッド、約定確率、注文サイズを含む合計結果を比較します。 |
| 会場集中 | ポリシーは形式的には広範囲にわたる可能性がありますが、実際にはほとんどの注文を 1 つの会場にルーティングします。 |
| 利益相反 | ブローカーの経済性は顧客の約定結果とは異なる場合があります。 |
| システムの脆弱性 | SOR は、リアルタイム データ、接続性、会場の可用性、およびフォールバック ルールに依存します。 |
| 顧客の理解が不十分 | 個人顧客は「無料取引」と表示されても、会場の選択を理解していない可能性があります。 |
| 古いポリシー ページ | ライブクレームを行う前に、必ず現在のブローカーポリシーページを確認してください。 |

## 調査チェックリスト

1。 ブローカーの現在の最良約定ポリシーから始めます。
2。 含まれる会場を特定します: TSE、PTS、またはその他のルート。
3。 量が重要な場合は、関連する期間の JSDA PTS 統計を確認してください。
4。 顧客の指示または製品カテゴリによって工順が変更されるかどうかを確認します。
5。 個別の明示的な料金、暗黙的なスプレッド、価格改善、ポイント、およびグループの経済性。
6。 実行ルートの結論を [[securities/japan-market-infrastructure-map|market infrastructure]] および [[JapanFG/legal-financial-licenses/securities-license-stack|license stack]] にリンクします。

## 関連項目

- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-infrastructure-map]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[JapanFG/sbi-securities]]
- [[JapanFG/rakuten-securities]]
- [[JapanFG/jsda]]
- [[INDEX|FinWiki index]]

## 出典

・金融庁：金融商品取引業者に対する総合的な監督指針。
- FSA: 顧客志向の業務運営ページ。
- JSDA: PTS 取引統計ページ。
・JSDA：規程・自主規制資料のページ。
- JapannextとODXの公式会場ページ。
・JPX：清算・決済概要。
