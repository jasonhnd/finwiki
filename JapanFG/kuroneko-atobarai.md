---
title: "クロネコ代金後払いサービス (Kuroneko Atobarai)"
aliases:
  - "Kuroneko Atobarai"
  - "クロネコ代金後払い"
  - "クロネコ後払い"
  - "Yamato Credit Finance"
  - "ヤマトクレジットファイナンス"
domain: JapanFG
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, BNPL, atobarai, logistics, yamato, installment-sales]
status: active
sources:
  - "https://www.kuronekoyamato.co.jp/ytc/business/payment/atobarai/"
  - "https://www.kuronekoyamato.co.jp/ytc/business/payment/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# クロネコ代金後払いサービス (Kuroneko Atobarai)

## Wiki route

This entry sits under the [[JapanFG/INDEX|JapanFG index]] as a **logistics-anchored BNPL** product. Read it against the [[JapanFG/bnpl-landscape|Japan BNPL landscape]] system note, the [[JapanFG/net-protections-hd|Net Protections HD]] / [[JapanFG/paidy|Paidy]] BNPL peer set, and the [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] for the regulatory question. The [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] is the registration anchor and the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] shows where atobarai differs from card / code rails on merchant economics.

## TL;DR

クロネコ代金後払いサービス は ヤマト HD 系の **ヤマトクレジットファイナンス株式会社** が提供する EC 後払い決済。商品配送と請求書同梱を **クロネコヤマト 宅急便** ネットワーク上で一体運用するため、Net Protections の NP 後払いと並ぶ **配送系 BNPL** の代表例として扱われる。BNPL 議論で「物流網に内包された与信」というカテゴリを示すうえで欠かせない比較対象。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Operating entity | ヤマトクレジットファイナンス株式会社（ヤマト HD グループ） |
| Product type | EC 後払い決済（請求書同梱型 + コンビニ / 銀行振込 / 電子マネー回収）|
| 物流統合 | クロネコヤマト 宅急便 / DM 便ネットワーク上で配送 + 請求書同梱を実行 |
| 規制ルート | 割賦販売法 上の信用購入あっせん業として METI 監督下。^[inferred] |

## 2. Business role

- **物流 + 与信 + 集金代行** を一体化することで、EC 加盟店は「配送会社に決済機能まで委託」という単純化された UX を得る。^[extracted]
- 加盟店リスクを ヤマトクレジットファイナンス が引き受ける **保証型 BNPL** 構造 ([[JapanFG/net-protections-hd|Net Protections HD]] と類似)。^[inferred]
- 物流ネットワークから取得できる **配送完了データ** が与信判断・督促効率の優位性を生む点で純粋 fintech の BNPL と差別化される。^[inferred]

## 3. Why this standalone page matters

[[JapanFG/bnpl-landscape|Japan BNPL landscape]] および [[JapanFG/paidy|Paidy]] / [[JapanFG/atone|atone]] / [[JapanFG/net-protections-hd|Net Protections HD]] のページから直接参照される **物流系 BNPL のアンカー**として、独立ページが必要。ヤマト HD 本体は物流コングロマリットであり、金融サブセグメント単独で取り出すのが整理上自然。

## 4. 监管与政策

- **割賦販売法**: 信用購入あっせん業として METI 登録。与信判断・苦情処理・指定信用情報機関接続が論点。
- **配送業との内部統合**: 物流子会社と金融子会社の役割分担、データ授受の個人情報保護法上の整理。^[inferred]
- **2025〜 BNPL 規制議論**: 配送系 BNPL も例外なく規制議論の対象（[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 参照）。^[inferred]
- **公開開示の限界**: ヤマト HD 連結ベースの開示粒度では、後払い事業単独の取扱高・損失率は読みにくい。^[inferred]

## Counterpoints

- 「物流統合の優位は永続するか」: 純粋 fintech BNPL ([[JapanFG/paidy|Paidy]] / [[JapanFG/atone|atone]]) が API ベースで配送業者と連携可能になれば、物流統合の独自性は相対化されうる。^[ambiguous]
- 「ヤマト HD の本業との利益相反」: 物流コストと金融収益のトレードオフが顕在化した場合、金融事業への投資配分が劣後する可能性。^[inferred]
- 「コード払い・カード時代に EC 後払いの占有率は減るか」: PayPay / 楽天ペイ / d 払い 等のコード払いと、Visa / Mastercard / JCB ([[JapanFG/jcb|JCB]]) のクレジット決済が EC で伸びる中、後払いの相対シェアは長期論点。^[inferred]

## Open questions

- ヤマトクレジットファイナンス の最新取扱高 / 加盟店数の公表値は?
- 同じ物流系の佐川急便 / 日本郵便 ([[JapanFG/nippon-post|日本郵政]]) の後払い事業との競合構図は?
- [[JapanFG/net-protections-hd|Net Protections HD]] と物流系 BNPL の加盟店重複率 / 業種別シェアは?

## Related

- [[JapanFG/bnpl-landscape]]
- [[JapanFG/net-protections-hd]]
- [[JapanFG/atone]]
- [[JapanFG/paidy]]
- [[JapanFG/nippon-post]]
- [[JapanFG/jcb]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## Sources

- Yamato Credit Finance "クロネコ代金後払いサービス" product page: https://www.kuronekoyamato.co.jp/ytc/business/payment/atobarai/
- Yamato Credit Finance payment services overview: https://www.kuronekoyamato.co.jp/ytc/business/payment/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
