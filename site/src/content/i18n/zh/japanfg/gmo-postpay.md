---
source: japanfg/gmo-postpay
source_hash: 8627021be5280eb9
lang: zh
status: machine
fidelity: ok
title: "GMO Postpay"
translated_at: 2026-05-31T15:29:03.911Z
---
# GMO Postpay
# GMO後払い (GMO Postpay)

## Wiki ??

????? the [[JapanFG/INDEX|JapanFG index]] as a **PSP-side BNPL** product. ?? the [[JapanFG/bnpl-landscape|Japan BNPL landscape]] system note, with the [[JapanFG/gmo-payment-gateway|GMO ペイメントゲートウェイ]] sibling explaining the merchant-acquiring stack and the [[JapanFG/net-protections-hd|Net Protections HD]] / [[JapanFG/paidy|Paidy]] peers showing pure-play BNPL. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] frames the regulatory question, the [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] anchors registration, and the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] places it next to card / code economics.

## TL;DR

GMO後払い は **GMO ペイメントサービス株式会社** (GMO インターネット G、[[JapanFG/gmo-payment-gateway|GMO ペイメントゲートウェイ]] の関連会社) が運営する EC 後払い決済。PSP 出身グループが BNPL を内製・運用している事例で、加盟店契約 / 与信 / 請求書発行 / 集金代行を一括で提供する。Net Protections の NP 後払い、ヤマトの [[JapanFG/kuroneko-atobarai|クロネコ代金後払い]] と並ぶ EC 後払いの主要選択肢。

## 1. 法人・ライセンス境界

| ?? | ?? |
|---|---|
| ???? | GMO ペイメントサービス株式会社 |
| ?? | GMO インターネットグループ ([[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] と兄弟会社 / 持分関係)|
| ???? | EC 後払い決済（請求書同梱 + コンビニ / 銀行振込 / 電子バーコード回収）|

## 2. Business role

- GMO ペイメントゲートウェイ ([[JapanFG/gmo-payment-gateway|GMO PG]]) が提供する **カード決済 PSP** ラインに対し、GMO ペイメントサービス は **後払い** と **コンビニ収納代行** を担う兄弟ライン。EC 加盟店は GMO 1 社で多様な決済手段をワンストップで提供できる。^[extracted]
- 与信判断 + 請求書発行 + 督促 / 回収を加盟店側に代行することで、純粋 PSP に与信機能を上乗せした **PSP 系 BNPL** カテゴリの代表例。^[extracted]
- BtoC EC（特に通販・サブスク EC）が中核セグメント。

## 3. Why this standalone page matters

[[JapanFG/gmo-payment-gateway|GMO ペイメントゲートウェイ]] 本体ページは **カード決済 PSP** が主題のため、後払い事業は別エンティティ ([[JapanFG/gmo-postpay|GMO ペイメントサービス]]) として独立ページを置くことで、PSP / 後払い / コンビニ収納 のライセンス境界が明示できる。

## 4. 規制・政策

- **資金決済法 隣接**: 収納代行業 / 前払式支払手段の境界が PSP 系 BNPL では複雑化しやすい。
- **個人情報保護法**: 与信データと EC 購買履歴の取扱い。

## ??

- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/bnpl-landscape]]
- [[JapanFG/net-protections-hd]]
- [[JapanFG/kuroneko-atobarai]]
- [[JapanFG/paidy]]
- [[JapanFG/atone]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## ??

- GMO Payment Service ????: https://gmo-ps.com/
- GMO Payment Service "後払い" service page: https://gmo-ps.com/service/postpay/
- GMO Payment Gateway ???? (sibling PSP): https://www.gmo-pg.com/corp/
- METI ??????????????: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
