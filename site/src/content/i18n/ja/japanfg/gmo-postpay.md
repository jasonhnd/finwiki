---
source: japanfg/gmo-postpay
source_hash: 8627021be5280eb9
lang: ja
status: machine
fidelity: ok
title: "GMO後払い (GMO Postpay)"
translated_at: 2026-06-02T14:25:12.434Z
---

# GMO後払い (GMO Postpay)

## ウィキ上の位置づけ

この項目は **PSP 側 BNPL** 商品として [[JapanFG/INDEX|JapanFG index]] の下に置く。[[JapanFG/bnpl-landscape|Japan BNPL landscape]] のシステムノート、加盟店獲得スタックを説明する兄弟項目 [[JapanFG/gmo-payment-gateway|GMO ペイメントゲートウェイ]]、ピュアプレイ BNPL を示す [[JapanFG/net-protections-hd|Net Protections HD]] / [[JapanFG/paidy|Paidy]] とあわせて読む。[[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] は規制上の問いを整理し、[[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] は登録のアンカー、[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] はカード・コード決済の経済性との比較軸を与える。

## 要約

GMO後払い は **GMO ペイメントサービス株式会社** (GMO インターネット G、[[JapanFG/gmo-payment-gateway|GMO ペイメントゲートウェイ]] の関連会社) が運営する EC 後払い決済。PSP 出身グループが BNPL を内製・運用している事例で、加盟店契約 / 与信 / 請求書発行 / 集金代行を一括で提供する。Net Protections の NP 後払い、ヤマトの [[JapanFG/kuroneko-atobarai|クロネコ代金後払い]] と並ぶ EC 後払いの主要選択肢。

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 運営主体 | GMO ペイメントサービス株式会社 |
| グループ | GMO インターネットグループ ([[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] と兄弟会社 / 持分関係)|
| 商品類型 | EC 後払い決済（請求書同梱 + コンビニ / 銀行振込 / 電子バーコード回収）|

## 2. 事業上の役割

- GMO ペイメントゲートウェイ ([[JapanFG/gmo-payment-gateway|GMO PG]]) が提供する **カード決済 PSP** ラインに対し、GMO ペイメントサービス は **後払い** と **コンビニ収納代行** を担う兄弟ライン。EC 加盟店は GMO 1 社で多様な決済手段をワンストップで提供できる。^[extracted]
- 与信判断 + 請求書発行 + 督促 / 回収を加盟店側に代行することで、純粋 PSP に与信機能を上乗せした **PSP 系 BNPL** カテゴリの代表例。^[extracted]
- BtoC EC（特に通販・サブスク EC）が中核セグメント。

## 3. この独立ページが重要な理由

[[JapanFG/gmo-payment-gateway|GMO ペイメントゲートウェイ]] 本体ページは **カード決済 PSP** が主題のため、後払い事業は別エンティティ ([[JapanFG/gmo-postpay|GMO ペイメントサービス]]) として独立ページを置くことで、PSP / 後払い / コンビニ収納 のライセンス境界が明示できる。

## 4. 規制・政策

- **資金決済法 隣接**: 収納代行業 / 前払式支払手段の境界が PSP 系 BNPL では複雑化しやすい。
- **個人情報保護法**: 与信データと EC 購買履歴の取扱い。

## 関連

- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/bnpl-landscape]]
- [[JapanFG/net-protections-hd]]
- [[JapanFG/kuroneko-atobarai]]
- [[JapanFG/paidy]]
- [[JapanFG/atone]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## 出典

- GMO Payment Service corporate site: https://gmo-ps.com/
- GMO Payment Service "後払い" service page: https://gmo-ps.com/service/postpay/
- GMO Payment Gateway corporate site (sibling PSP): https://www.gmo-pg.com/corp/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
