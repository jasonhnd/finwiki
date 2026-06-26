---
title: "メルペイ (Merpay)"
aliases: ["Merpay", "メルペイ", "株式会社メルペイ", "Merpay Inc."]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-24
last_tended: 2026-06-24
review_by: 2026-12-24
confidence: likely
tags: [JapanFG, payments, wallet, funds-transfer, mercari]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: subsidiary_of
    target: payment-firms/mercari-hd
    evidence: official_profile
    source: https://jp.merpay.com/about/
    as_of: 2026-06-22
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: official_registry
    source: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
    as_of: 2026-06-22
    confidence: likely
sources:
  - "https://jp.merpay.com/about/"
  - "https://static.jp.mercari.com/shikin_kessai"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# メルペイ (Merpay)


## Wiki内の位置づけ

このページは [[payment-firms/INDEX|決済事業者の索引]] に属する。周辺の制度文脈は [[payments/INDEX|決済領域の索引]] と併せて読み、資金移動業と前払式支払手段の境界は [[payments/funds-transfer-vs-prepaid-boundary|日本における資金移動と前払式支払手段の境界]] を参照する。

## 要点

メルペイは [[payment-firms/mercari-hd|メルカリ]] の決済・与信運営会社。公式 About は資金移動業、前払式支払手段、信用購入あっせん、貸金業などの登録を示しており、マーケットプレイス残高、ウォレット、与信の接続点として独立ページが必要になる。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | 株式会社メルペイ |
| グループ | [[payment-firms/mercari-hd|Mercari]] |
| 主な領域 | メルペイウォレット、メルカリ売上金による支払い、資金移動、与信・貸金周辺 |
| 金融庁登録の確認経路 | 金融庁の資金移動業者一覧: 関東財務局長 第00057号, 株式会社メルペイ. ^[verified-2026-06-24] |
| 会社概要上の登録 | 公式 About は、資金移動業、前払式支払手段、クレジットカード番号等取扱契約締結事業者、包括信用購入あっせん業、貸金業、電子決済等代行業の登録を列挙している。^[verified-2026-06-24] |

## 2. 事業上の役割

- メルカリのマーケットプレイス残高と利用者IDを、決済利用と与信利用につなげる。メルカリの資金決済法に基づく表示は、売上金、銀行口座、ATM からメルペイ残高にチャージし、その残高をメルカリでの購入や店舗での支払いに使う流れを説明している。^[verified-2026-06-24]
- C2C マーケットプレイスのデータ、コード決済、あと払い、銀行口座への出金をつなぐ。公式表示はメルペイを第二種資金移動業者かつ第三者型前払式支払手段発行者として位置づけており、前払式支払手段と資金移動の境界がこのページの中心論点になる。^[verified-2026-06-24]
- 与信・貸金機能はウォレットそのものの中に埋め込まれているのではなく、隣接する別の規制面として存在する。メルペイの About ページは、包括信用購入あっせん業、認定包括信用購入あっせん業、貸金業、クレジットカード番号等取扱契約締結事業者の登録を別に開示している。^[verified-2026-06-24]
- PayPay、楽天ペイ、au PAY、d払いと比較するためのページでもあり、[[payments/funds-transfer-service-providers-japan-index]] にも現れる。

## 3. 単独ページにする理由

Mercari のマーケットプレイス事業と、メルペイの規制対象となる決済・与信事業では、リスクとコンプライアンス上の論点が異なる。このページは、その金融サービス上の境界を明示するために置く。

## Related

- [[payment-firms/mercari-hd]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]

## Sources

- メルペイ About: https://jp.merpay.com/about/
- メルカリ 資金決済法に基づく表示: https://static.jp.mercari.com/shikin_kessai
- 金融庁 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
