---
title: "三菱UFJニコス (Mitsubishi UFJ NICOS)"
aliases: ["Mitsubishi UFJ NICOS", "MUFG NICOS", "三菱UFJニコス", "三菱UFJニコス株式会社"]
domain: card-issuers
created: 2026-05-21
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-11-21
confidence: likely
tags: [card-issuers, JapanFG, credit-card, acquirer, installment-credit]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
sources:
  - "https://www.cr.mufg.jp/corporate/company/overview/index.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.j-credit.or.jp/"
---

# 三菱UFJニコス (Mitsubishi UFJ NICOS)

## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]] (its domain route). Read it against [[card-issuers/smbc-card|三井住友カード]] and [[card-issuers/jcb|JCB]] for megabank-affiliated peer / contrast, and against [[financial-regulators/fsa|the FSA]] plus [[payments/INDEX|payments]] for the supervisory / system boundary. The governing acquiring statute is [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]].

## TL;DR

三菱UFJニコス株式会社 (Mitsubishi UFJ NICOS) は [[megabanks/mufg|MUFG]] グループのカード・信販 operating company。公式会社概要は **包括信用購入あっせん業者** 登録番号と **クレジットカード番号等取扱契約締結事業者**（card-number 加盟店契約）登録番号を明示しており、issuer / acquirer / installment-credit の境界を読む上で重要。歴史的には複数のカードブランド・信販会社を統合してできた MUFG の retail / merchant payment surface。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal entity | 三菱UFJニコス株式会社 / Mitsubishi UFJ NICOS Co., Ltd. |
| Group | [[megabanks/mufg|MUFG]]（三菱UFJフィナンシャル・グループ） |
| Card / credit lane | 割賦販売法上の包括信用購入あっせん（カード割賦・分割払い／リボ） |
| Acquiring lane | クレジットカード番号等取扱契約締結事業者登録（加盟店契約・card-number 管理） |
| Cash-advance lane | カードローン／キャッシング枠は貸金業法の枠組み |
| Supervision | 金融庁（銀行グループ・貸金）＋ 経済産業省（割賦販売法）、自主規制は [[card-issuers/installment-sales-act-2020-amendment|日本クレジット協会]] |

## 2. Operating model

三菱UFJニコスは MUFG の retail / merchant payment surface として、card issuing（発行）と merchant acceptance（加盟店 acquiring）の両面を担う。割賦の中身は一括・分割払い (分割払い)・リボ (リボルビング)、加えてカードローン・加盟店サービスを展開する。日本のカードブランド・信販事業の歴史的な統合点であり、issuing と acquiring を一社で抱える点が、ブランド・ライセンス三位一体型の [[card-issuers/jcb|JCB]] や SMFG ハブの [[card-issuers/smbc-card|三井住友カード]] との比較軸になる。

## 3. Why this page matters

- 三菱UFJニコスは単なる「MUFG 傘下のブランド」ではなく、独自の登録番号（包括信用購入あっせん・card-number 加盟店契約）、顧客契約、加盟店ルール、与信／不正対策の workflow を持つ規制対象 operating company であることを確定する。
- issuer（割賦）と acquirer（card-number 加盟店契約）の二系統登録が一社に同居する典型例として、[[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]] の具体 anchor になる。
- [[card-issuers/smbc-card|SMBC Card]]・[[card-issuers/jcb|JCB]] とともに megabank 系 issuer の peer anchor を提供する。

## Related

- [[megabanks/mufg|MUFG]]
- [[card-issuers/smbc-card|三井住友カード]]
- [[card-issuers/jcb|JCB]]
- [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]]
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]
- [[card-issuers/INDEX|card-issuers INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Mitsubishi UFJ NICOS company overview.
- METI: registered operators under the Installment Sales Act (包括信用購入あっせん).
- 日本クレジット協会 (Japan Consumer Credit Association): industry self-regulation reference.

> [!info] 校核状態
> confidence: likely。三菱UFJニコスが MUFG グループのカード・信販会社で、公式会社概要が包括信用購入あっせんと card-number 加盟店契約の登録番号を掲げることは公開事実。具体的な登録番号・取扱高は変わり得るため、本ページでは数値を引用せず制度的位置づけのみ記載。
