---
title: "ネットプロテクションズHD (Net Protections HD)"
aliases:
  - "Net Protections"
  - "ネットプロテクションズ"
  - "ネットプロテクションズホールディングス"
  - "Net Protections Holdings"
  - "NP 後払い"
  - "7383"
domain: payment-firms
created: 2026-05-24
last_updated: 2026-06-24
last_tended: 2026-06-24
review_by: 2026-12-24
confidence: likely
tags: [JapanFG, BNPL, fintech, payments, installment-sales, atobarai, listed]
status: active
sources:
  - "https://corp.netprotections.com/"
  - "https://corp.netprotections.com/ir/"
  - "https://www.netprotections.com/"
  - "https://atone.be/"
  - "https://np-kakebarai.com/"
  - "https://www.aftee.tw/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
---

# ネットプロテクションズHD (Net Protections HD)

## Wiki route

This entry sits under the [[payment-firms/INDEX|payment-firms INDEX]] as a pure-play **BNPL operator**. Read it against the [[payment-firms/bnpl-landscape|Japan BNPL landscape]] system note and the [[payment-firms/paidy|Paidy]] peer for contrast, with the [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] page setting the regulatory lens and the [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] anchoring the METI registration trail.

## TL;DR

Net Protections Holdings (東証 PRIME **7383**) is Japan's earliest-mover BNPL pure-play, best known for the **NP 後払い** invoice-based BtoC product that EC merchants attach as a "pay later by konbini / bank transfer" option. The group also runs **atone** (consumer-side wallet BNPL), **AFTEE** (overseas BNPL with a Taiwan product site), and **NP 掛け払い** (BtoB invoicing). Unlike [[payment-firms/paidy|Paidy]], it is independent rather than payments-platform-owned, and unlike [[card-issuers/jaccs|Jaccs]] or [[card-issuers/orico|Orico]] it deliberately stays out of the credit-card stack — the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] is the cleanest place to see why merchant-fee BNPL economics diverge from card interchange. ^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社ネットプロテクションズホールディングス |
| Operating subsidiary | 株式会社ネットプロテクションズ (NP 後払い / atone / NP 掛け払い 等を直接運営) ^[verified-2026-06-24] |
| Listing | 東証 PRIME 7383 (2021-12 上場) |
| Group lanes | EC 後払い (NP 後払い) / consumer BNPL wallet (atone) / BtoB 掛け払い (NP 掛け払い) / overseas BNPL (AFTEE) ^[verified-2026-06-24] |

## 2. Business role

- **NP 後払い** は日本の EC 後払い（請求書同梱型）の代表ブランドで、加盟店向けには **未回収リスクを丸抱えする保証型 BNPL** として与信判定 + 請求書発行 + 督促を一括サービス化している。NP 後払いの公式 site は、商品到着後に請求書でコンビニ・銀行・郵便局払いを行う流れと、未回収リスク保証を訴求している。^[verified-2026-06-24]
- **atone** は消費者側のアカウントを起点にする月締め BNPL ウォレットで、加盟店をまたいで「翌月コンビニ払い」を可能にする ([[payment-firms/paidy|Paidy]] と近い UX、但しブランド・経済圏は独立)。^[verified-2026-06-24]
- **NP 掛け払い** は BtoB 取引の請求書代行 + 与信 + 集金代行を BNPL 構造で提供し、伝統的な「請求書 → 振込 → 督促」フローを SaaS 化する。^[verified-2026-06-24]
- **AFTEE** は海外 EC 後払いブランドとして Net Protections corporate site から導線が置かれ、公式 product site は Taiwan market 向けの BNPL product として展開されている。^[verified-2026-06-24]
- The portfolio split matters for economics: NP 後払い is merchant-attached invoice BNPL, atone is account-based consumer BNPL, NP 掛け払い is BtoB invoicing / collection, and AFTEE is the overseas extension, so the holding company is not reducible to one checkout product. ^[verified-2026-06-24]

## 3. Why this standalone page matters

Net Protections は日本 BNPL の独立 operator として、コーポレートが [[payment-firms/paidy|Paidy]] や [[card-issuers/aplus|アプラス]] のように親グループ既存ページに吸収されないため、JapanFG 名前空間で **独立 BNPL ホールディング** として別ページ化する価値が高い。

## 4. 規制・政策

- **個人情報保護法**: 与信判断のための個人データ（属性 / 取引履歴）取扱いと第三者提供範囲が論点。
- **東証 PRIME 開示**: 上場会社として四半期 IR・有価証券報告書ベースで取扱高（GMV）・加盟店数・与信損失率が公表されているため、独立 BNPL の経済性が公開数字で読める数少ない事例。^[extracted]

## Related

- [[payment-firms/bnpl-landscape]]
- [[payment-firms/paidy]]
- [[payment-firms/merpay]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/credit-saison]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/installment-sales-act-2020-amendment]]

## Sources

- Net Protections HD corporate site: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP 後払い product site: https://www.netprotections.com/
- atone product site: https://atone.be/
- NP 掛け払い product site: https://np-kakebarai.com/
- AFTEE product site (overseas BNPL): https://www.aftee.tw/
- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI registered merchant-contracting operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
