---
title: "マスターカードジャパン (Mastercard Japan)"
aliases: ["Mastercard Japan", "マスターカードジャパン", "株式会社マスターカードジャパン", "Mastercard"]
domain: JapanFG
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, card-brand, payments, mastercard, 4-party-scheme]
status: active
sources:
  - "https://www.mastercard.co.jp/"
  - "https://www.mastercard.co.jp/ja-jp/business/overview/about-mastercard.html"
---

# マスターカードジャパン (Mastercard Japan)

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/jcb|JCB]] for peer / contrast context (4-party global scheme vs JCB の 3-party hybrid) and [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] for the broader system / regulatory boundary.

## TL;DR

株式会社マスターカードジャパンは、米 Mastercard Incorporated (NYSE:MA) の **日本拠点法人**。Mastercard はカード本体を発行せず、**ブランドライセンス供与・スキーム運営・加盟店間取引処理** のみを担う **純粋 4-party scheme operator**。日本では [[JapanFG/rakuten-card|楽天カード]]、[[JapanFG/mufg-nicos|三菱UFJニコス]]、[[JapanFG/aplus|アプラス]] 等の国内 issuer に Mastercard ブランドをライセンス供与し、加盟店契約は国内 acquirer が担う。直接消費者発行も加盟店契約もしない点が、後述 [[JapanFG/american-express-international-japan|Amex Japan]] と決定的に異なる。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 株式会社マスターカードジャパン (Mastercard Japan Co., Ltd.) |
| Parent | Mastercard Incorporated (米 NYSE:MA) |
| Brand role | Pure 4-party scheme operator / brand licensor — 自社では発行も加盟店契約もしない |
| Group boundary | 米親会社の日本ブランチ機能。国内 issuer (楽天カード等) や acquirer (三井住友カード等) とは契約関係のみ。 |
| Wiki role | 「日本における Mastercard ブランド窓口」のエンティティ・ページ。 |

## 2. Business lines in Japan

- **ブランドライセンス供与**: 国内 issuer (楽天カード、三菱UFJニコス、アプラス、Olive 等) に Mastercard ブランドを供与。
- **スキーム運営**: 国境を越えた発行銀行 ↔ 加盟店銀行間の決済処理 (Authorization / Clearing / Settlement) を提供。
- **インターチェンジ料率設定**: 日本市場向けインターチェンジ料率を設定 — 詳細は [[payments/japan-interchange-and-merchant-fee-stack]] 参照。
- **加盟店向けマーケティング・テクノロジー支援**: トークン化、3-D Secure、コンタクトレス決済等の標準化と国内展開支援。
- **法人カード・B2B 決済**: 国内大企業向け purchasing card / corporate card 商品の supplier role。
- **デジタル決済・パートナーシップ**: Apple Pay / Google Pay 対応、国内 BigTech との提携 (PayPay 等の一部商品で Mastercard ブランド搭載)。

国内に **直接の card issuance license** や **acquirer license** を持たない (=割賦販売法上の登録カード発行業者ではない) ため、METI Installment Sales Act 登録業者リストには載らない — これが [[JapanFG/jcb|JCB]] や Amex とは異なるレギュレーション境界。

## 4. Why this page matters

- 「**4-party scheme operator**」と「カード issuer」の **法的・経済的区別** を整理するためのエントリーポイント
- 国内 issuer がどのブランドと契約しているかを追う際の **逆引きエンティティ** (楽天カード Mastercard 版 → Mastercard Japan)
- インターチェンジ料率・PCI DSS・トークン化等の **国際ルール起源** を辿る際の起点

## Related

- [[JapanFG/jcb|JCB]] (国内主要競合・3-party hybrid)
- [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] (4-party 直接競合・国内シェア首位)
- [[JapanFG/american-express-international-japan|American Express International Japan]] (3-party 競合)
- [[JapanFG/unionpay-international-japan|UnionPay International Japan]] (中国系競合・インバウンド)
- [[JapanFG/rakuten-card]] / [[JapanFG/mufg-nicos]] / [[JapanFG/aplus]] (主要 Mastercard ブランド issuer)
- [[payments/japan-interchange-and-merchant-fee-stack]] / [[payments/japan-card-issuer-acquirer-processor-split]]

## Sources

- Mastercard Japan 公式サイト: https://www.mastercard.co.jp/
- Mastercard 企業情報 (日本語): https://www.mastercard.co.jp/ja-jp/business/overview/about-mastercard.html
- Mastercard Incorporated 投資家情報 (米): https://investor.mastercard.com/
