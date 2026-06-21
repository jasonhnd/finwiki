---
title: "イオンフィナンシャルサービス (AEON Financial Service)"
aliases:
  - "AEON Financial Service"
  - "イオンフィナンシャルサービス"
  - "イオンフィナンシャルサービス株式会社"
  - "AFS"
  - "card-issuers/aeon-card"
domain: card-issuers
created: 2026-05-21
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-11-21
confidence: likely
tags: [card-issuers, JapanFG, credit-card, retail-finance, installment-credit]
status: active
sources:
  - "https://www.aeonfinancial.co.jp/corp/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.j-credit.or.jp/"
entity_node:
  kind: financial_group
  scope: japan_core
  status: anchor
---

# イオンフィナンシャルサービス (AEON Financial Service)

## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]] (its domain route). Read it against [[card-issuers/seven-card-service|セブン・カードサービス]] and [[card-issuers/epos-card|エポスカード]] for retail-origin peer / contrast, and against [[financial-regulators/fsa|the FSA]] plus [[payments/INDEX|payments]] for the supervisory / system boundary. The governing acquiring statute is [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]].

## TL;DR

イオンフィナンシャルサービス株式会社 (AEON Financial Service, AFS) は [[retail/aeon-group|AEON Group]] の金融事業を束ねる上場持株・統括会社。グループの retail distribution（店舗・モール・アプリ）を金融口座とカード利用につなぐ platform で、傘下に [[card-issuers/aeon-bank|イオン銀行]]（銀行法上の銀行子会社）とカード事業をぶら下げる。カード発行・割賦は割賦販売法上の **包括信用購入あっせん業者** 登録に基づく業務として行われる。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal entity | イオンフィナンシャルサービス株式会社 / AEON Financial Service Co., Ltd. |
| Group | [[retail/aeon-group|AEON Group]] retail-finance holding / 統括会社 |
| Bank subsidiary | [[card-issuers/aeon-bank|イオン銀行]]（銀行法上の銀行免許を持つ子会社） |
| Card / credit lane | 割賦販売法上の包括信用購入あっせん（クレジットカード割賦・分割払い／リボ） |
| Cash-advance lane | カードのキャッシング枠は貸金業法の枠組みで提供される（子会社・商品単位） |
| Supervision | 金融庁（銀行・貸金）＋ 経済産業省（割賦販売法）、業界自主規制は [[card-issuers/installment-sales-act-2020-amendment|日本クレジット協会]] |

## 2. Operating model

AFS は card issuing、bank deposits、insurance agency、電子マネー (WAON 系)、加盟店サービス (issuing/acquiring) を一つの retail-finance スタックとして運営する。割賦の中身は一括・分割払い (分割払い)・リボ (リボルビング) で、ポイント・electronic-money 残高と loyalty を組み合わせて利用を駆動する。銀行子会社を持つ点が、預金基盤を持たない純カード会社（[[card-issuers/epos-card|エポスカード]]・[[card-issuers/pocket-card|ポケットカード]]）との構造的な違いになる。アジア consumer finance も含む footprint は固定の cap table ではなく、公開開示から読める **shape** として扱う。

## 3. Why this page matters

- [[card-issuers/aeon-bank|イオン銀行]] 単体では AEON の金融 footprint を説明しきれない。AFS が card / bank / insurance / e-money を束ねる group-level の operating platform であることを確定する。
- 銀行子会社（銀行法）と包括信用購入あっせん（割賦販売法）という別ライセンスの事業を、一つの retail-finance 親ページの下で分離して読めるようにする。
- [[card-issuers/seven-card-service|Seven Card Service]]・[[card-issuers/ucs-card|UCS]] など他の流通系 issuer の peer anchor を提供する。

## Related

- [[card-issuers/aeon-bank|イオン銀行]]
- [[card-issuers/seven-card-service|セブン・カードサービス]]
- [[card-issuers/epos-card|エポスカード]]
- [[retail/aeon-group|AEON Group]]
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]
- [[card-issuers/INDEX|card-issuers INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- AEON Financial Service company information.
- METI: registered operators under the Installment Sales Act (包括信用購入あっせん).
- 日本クレジット協会 (Japan Consumer Credit Association): industry self-regulation reference.

> [!info] 校核状態
> confidence: likely。AFS が AEON Group の金融統括会社で銀行子会社 [[card-issuers/aeon-bank|イオン銀行]] を持つこと、カード事業が割賦販売法の枠組みで行われることは公開事実。傘下の正確な持分・登録番号・アジア事業の規模は product / subsidiary 単位で変わり得るため、snapshot ではなく shape として読む。
