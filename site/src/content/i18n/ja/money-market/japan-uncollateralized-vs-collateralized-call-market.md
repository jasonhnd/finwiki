---
source: money-market/japan-uncollateralized-vs-collateralized-call-market
source_hash: f948673b7444742b
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "無担保コール市場 vs 有担保コール市場（日本）"
translated_at: 2026-06-05T00:00:00.000Z
---
# 無担保コール市場 vs 有担保コール市場（日本）

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。代表的なコールレートの仕組みについては [[money-market/call-market-structure|Call market structure]] を、より広い有担保調達の境界については [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] をあわせて参照してください。政策実施の層は [[money-market/boj-open-market-operations|BoJ open market operations]] です。

## TL;DR

日本のコール市場 —— 銀行間短期貸借の中核市場 —— は、貸出が担保で裏付けられているかどうかによって区別される2つのセグメントを歴史的に有してきました。

- **無担保コール市場（無担保コール市場）**：無担保の銀行間貸借。無担保コール翌日物金利は、1990年代後半以降、日銀のマネーマーケット調節方針が目標としてきたセグメントであり、[[derivatives/ois-tona-curve|TONA]] の基礎となる資金市場です。
- **有担保コール市場（有担保コール市場）**：有担保のコール貸出で、借り手が適格担保（歴史的にはJGB等）を差し入れる。これはコール市場のかつての主流でしたが、短資会社が仲介する取引が存在しなかったために、日銀が2016年4月以降、有担保コールレートを算出していない水準にまで縮小しています。

FinWikiにとって、重要な読み方のルールは、現在の実務における「コールレート」が **無担保翌日物** 金利を意味するということです。有担保セグメントは、有担保の短期調達が [[money-market/jgb-repo-market-japan|repo market]] へ移行したことで、おおむね歴史的・定義上の対比となっています。

## セグメント比較

| 次元 | 無担保コール（無担保コール） | 有担保コール（有担保コール） |
|---|---|---|
| 担保 | 無担保。純粋なカウンターパーティ信用エクスポージャー。 | 差し入れられた適格担保に対して保全される。 |
| 貸し手が負う信用リスク | カウンターパーティ信用リスクの全部。 | 担保によって軽減される。 |
| 代表的なレート | 無担保コール翌日物金利 —— 日銀の運営目標。 | 有担保コールレート —— 2016年4月以降算出されていない（短資仲介取引なし）。 |
| 現在の取引状況 | 活発。ただし出来高は準備預金環境によって変動する。 | 仲介セグメントとしては実質的に休眠状態。 |
| テナー | 翌日物が中心。ターム取引も発生する。 | 歴史的には翌日物およびターム。 |
| 使われる理由 | 日末の準備 / 決済調整、証券会社の在庫資金調達。 | レポの成長以前の、かつての有担保調達チャネル。 |
| データ | 日銀コール市場データ。毎営業日更新。 | 現行のレート系列の公表なし。 |

## なぜ無担保セグメントが支配的なのか

無担保コール翌日物金利は、1990年代から日銀のマネーマーケット調節の運営目標となり、そこに注目、流動性、価格発見が集中しました。有担保コールセグメントではなく無担保セグメントに取引をとどめる構造的な力がいくつかあります。

- **レポが有担保調達を吸収した**：有担保の短期調達を望む金融機関は、いまや [[money-market/jgb-repo-market-japan|JGB repo market]]（GC / SCレポおよび現金担保付債券貸借）を利用する。これは、かつての有担保コールチャネルよりも深いインフラと、より明確な担保管理の枠組みを持つ。
- **運営目標の引力**：日銀の方針が無担保コール翌日物金利を参照するため、これは参加者と中央銀行の双方が注視する金利であり、その役割を補強する。
- **参加者の構成**：銀行は無担保コール市場で準備 / 決済残高を調整し、証券会社は在庫を資金調達する。とくに証券会社は、在庫を資金手当てし流動性カバレッジ比率を管理するために、ターム物の無担保コール取引を行う誘因を持ち続けてきた。

その結果、無担保セグメントが政策関連の価格を担い、有担保の短期調達の役割はレポに置かれ、有担保コールセグメントは生きた市場というより定義上の対比として残る、という市場になっています。

## 決済と仲介

両セグメントとも、貸し手と借り手をマッチングし日銀に取引データを提出する短資（マネーマーケット・ブローカー）会社を通じて仲介されます。日銀は、短資会社が報告する実際の取引から出来高加重平均コールレートを算出します —— だからこそ、短資仲介取引が存在しないセグメント（2016年4月以降の有担保コール市場）には公表レートが存在しないのです。

- **約定 / バリュー日**：無担保コール翌日物については、約定日に資金が受け払いされ、翌営業日に返済される。
- **短資の役割**：東京 / セントラル / 上田八木の短資がどう仲介するか、そして短期金利の正常化が翌日物取引を増やすときにその活動がどう復活するかについては [[money-market/tanshi-company-business-model|tanshi company business model]] を参照。
- **準備 / 決済の文脈**：コールの取引状況は、日銀における当座預金残高と、ある日のシステム内の資金の余剰 / 不足によって形作られる。

## 他のフロントエンド市場との関係

| 市場 | コール市場との関係 |
|---|---|
| [[money-market/jgb-repo-market-japan|JGB repo]] | 有担保コール市場を実質的に置き換えた有担保短期調達の場。GCレポは資金調達フローをめぐって無担保コールと競合する。 |
| [[derivatives/ois-tona-curve|TONA / OIS]] | TONAは無担保コール翌日物取引の出来高加重平均。コール市場は円リスク・フリー・レート体系の下にある資金市場。 |
| [[money-market/japan-tibor-benchmark-rate|TIBOR]] | コール取引ではなくリファレンス・バンクの呼値の上に構築される、別個のターム物銀行間指標。ターム物TIBORを実際の翌日物コールの値と対比せよ。 |
| [[money-market/japan-ncd-negotiable-cd-market|NCD]] および [[money-market/japan-cp-commercial-paper-market|CP]] | 現行の政策レジームのもとで直接のコール市場調達と競合する、短期調達の商品形態の代替。 |

## 読み方のチェックリスト

1. 出典が「コールレート」と言う場合、明示的に別途述べられていない限り、それが無担保翌日物金利を意味することを確認する。
2. 現行の有担保コールレートを期待しない。2016年4月以降算出されていない。
3. 有担保の短期調達に関する問いは、有担保コールセグメントではなく [[money-market/jgb-repo-market-japan|repo]] へ振り向ける。
4. 運営目標金利（無担保コール翌日物）を、ターム物コール取引や有担保調達と切り分ける。
5. コール市場の取引状況を、単独のシグナルとしてではなく、準備預金環境および日銀のオペに照らして読む。

## JapanFG関連

- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は、その報告する取引がコールレートを定義する短資仲介者である。
- [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、準備 / 決済残高およびホールセール調達を通じて参加する。
- [[securities-firms/mizuho-securities]] と [[securities-firms/mufg-mums]] は、証券会社の在庫資金調達およびレポ隣接の活動を通じて参加する。
- [[financial-regulators/boj-monetary-policy]] は政策枠組みを設定する。このページは、その下にある有担保 vs 無担保のコールのセグメンテーションを説明する。

## 境界事例

- **有担保コール vs レポ**：どちらも有担保だが、レポは買戻し約束を伴う証券金融取引である一方、有担保コールは担保を差し入れる有担保貸出である。両者は同じ法的構造ではない。
- **無担保コール vs 銀行間預金**：相対の銀行間預金は経済的には関連するが、公表コールレートの基となる仲介コール市場取引ではない。
- **ターム物コール vs 翌日物コール**：ターム物の無担保コール取引は存在するが、政策関連の代表値は翌日物金利である。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[derivatives/ois-tona-curve]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行：コール市場データ（無担保コール翌日物金利、毎営業日更新）。
- 日本銀行：「コール市場関連統計」の説明。短資仲介取引の不在により有担保コールレートが2016年4月以降算出されていない旨の注記を含む。
- 日本銀行：無担保コール翌日物金利および資金の余剰 / 不足に関する教育ページ。
- 日本銀行：マネーマーケット概要のサーフェス。
- 日本銀行レビュー（2024年）：日本のマネーマーケットの動向。ターム物無担保コール取引に対する証券会社の誘因を含む。
