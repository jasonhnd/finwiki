---
source: money-market/call-market-structure
source_hash: c39e2c9b484c41ee
lang: ja
status: machine
fidelity: ok
title: "コール市場の構造"
translated_at: 2026-06-02T16:33:58.482Z
---
# コール市場の構造


## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] 配下にあります。比較・対照の文脈では [[money-market/japan-money-market|Japan money market]] を、より広い制度・規制境界の文脈では [[money-market/boj-open-market-operations|BoJ open market operations]] をあわせて参照してください。

## 要約

コール市場は、日本の短期銀行間資金市場です。無担保コール翌日物金利は、日銀の金融市場調節方針で用いられる政策金利の波及点であるため、とくに重要です。銀行などの金融機関は、日中終了時点の流動性を調整するために翌日物コール取引を利用し、短資会社はブローカー / 仲介者として市場に参加します。

短期金利の正常化、短資会社の重要性、日銀の運営方針と実際に取引された翌日物金利の違いを読むときに、このページを使います。

## 中核メカニクス

| 要素 | 説明 |
|---|---|
| 取引 | とくに翌日物を中心とする、非常に短期の貸借。 |
| 無担保 O/N コールレート | 日銀の政策運営方針が歴史的に目標としてきた代表的な短期金融市場金利。 |
| 参加者 | 銀行、信託銀行、証券会社、その他の適格金融機関、短資ブローカー。 |
| 短資会社の役割 | 短資会社は短期資金を仲介し、市場機能のインフラを提供する。 |
| データソース | 日銀が営業日にコール市場関連統計の速報値と確報値を公表する。 |

## 金利の読み方

コールレートを単純な預金金利として読んではいけません。これは次の要因に左右されるホールセール金融市場価格です。

- 日銀の政策運営方針。
- 当座預金残高と準備状況。
- 参加者の日銀当座預金へのアクセス。
- 担保付き取引やレポ取引の代替性。
- 四半期末 / 事業年度末の流動性需要。
- 取引相手先限度とバランスシート制約。

## JapanFG での関連性

- [[JapanFG/tokyo-tanshi]]、[[JapanFG/central-tanshi]]、[[JapanFG/ueda-yagi-tanshi]] は短資会社への直接ルートです。
- [[JapanFG/mufg]]、[[JapanFG/smfg]]、[[JapanFG/mizuho-fg]] は短期金利の波及、準備預金、ホールセール調達を通じて影響を受けます。
- [[JapanFG/mizuho-securities]]、[[JapanFG/mufg-mums]]、その他の証券会社は、レポ、JGB 担保、ディーラーのバランスシートを通じて影響を受けます。
- [[JapanFG/boj-monetary-policy]] が政策枠組みを定め、このページは市場表面を説明します。

## 境界事例

- **コール市場 vs レポ市場**: 無担保コール貸借は、有担保レポや国債貸借とは同じではありません。
- **政策目標 vs 実際の金利**: 日銀は O/N コールレートを目標付近に誘導できますが、実際の金利はなお市場統計です。
- **短資会社 vs 銀行**: 短資会社は市場仲介者であり、通常のリテール上の意味で預金を受け入れる銀行ではありません。

## 関連項目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/boj-open-market-operations]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- Bank of Japan: Call Money Market Data.
- Bank of Japan: How have the Bank's guidelines for market operations changed?
- Bank of Japan: What are market operations?
- Bank of Japan: 無担保コール翌日物市場の金融市場調節上の役割を説明する枠組み資料。
