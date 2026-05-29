---
title: "ネットプロテクションズHD (Net Protections HD)"
aliases:
  - "Net Protections"
  - "ネットプロテクションズ"
  - "ネットプロテクションズホールディングス"
  - "Net Protections Holdings"
  - "NP 後払い"
  - "7383"
domain: JapanFG
created: 2026-05-24
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, BNPL, fintech, payments, installment-sales, atobarai, listed]
status: active
sources:
  - "https://corp.netprotections.com/"
  - "https://corp.netprotections.com/ir/"
  - "https://www.netprotections.com/"
  - "https://atone.be/"
  - "https://aftee.jp/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# ネットプロテクションズHD (Net Protections HD)

## Wiki route

This entry sits under the [[JapanFG/INDEX|JapanFG index]] as a pure-play **BNPL operator**. Read it against the [[JapanFG/bnpl-landscape|Japan BNPL landscape]] system note and the [[JapanFG/paidy|Paidy]] peer for contrast, with the [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] page setting the regulatory lens and the [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] anchoring the METI registration trail.

## TL;DR

Net Protections Holdings (東証 PRIME **7383**) is Japan's earliest-mover BNPL pure-play, best known for the **NP 後払い** invoice-based BtoC product that EC merchants attach as a "pay later by konbini / bank transfer" option. The group also runs **atone** (consumer-side wallet BNPL), **AFTEE** (Southeast Asia BNPL targeting Taiwan / Vietnam), and **NP 掛け払い** (BtoB invoicing). Unlike [[JapanFG/paidy|Paidy]], it is independent rather than payments-platform-owned, and unlike [[JapanFG/jaccs|Jaccs]] or [[JapanFG/orico|Orico]] it deliberately stays out of the credit-card stack — the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] is the cleanest place to see why merchant-fee BNPL economics diverge from card interchange.

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社ネットプロテクションズホールディングス |
| Operating subsidiary | 株式会社ネットプロテクションズ (NP 後払い / atone / NP 掛け払い 等を直接運営) |
| Listing | 東証 PRIME 7383 (2021-12 上場) |
| Group lanes | EC 後払い (NP 後払い) / consumer BNPL wallet (atone) / BtoB 掛け払い (NP 掛け払い) / 海外 BNPL (AFTEE: 台湾・ベトナム) |

## 2. Business role

- **NP 後払い** は日本の EC 後払い（請求書同梱型）の代表ブランドで、加盟店向けには **未回収リスクを丸抱えする保証型 BNPL** として与信判定 + 請求書発行 + 督促を一括サービス化している。^[extracted]
- **atone** は消費者側のアカウントを起点にする月締め BNPL ウォレットで、加盟店をまたいで「翌月コンビニ払い」を可能にする ([[JapanFG/paidy|Paidy]] と近い UX、但しブランド・経済圏は独立)。^[extracted]
- **NP 掛け払い** は BtoB 取引の請求書代行 + 与信 + 集金代行を BNPL 構造で提供し、伝統的な「請求書 → 振込 → 督促」フローを SaaS 化する。
- **AFTEE** は台湾・ベトナムの EC 後払い市場へ進出し、Net Protections の与信モデルを海外に移植している。^[extracted]

## 3. Why this standalone page matters

Net Protections は日本 BNPL の **取引高 / 加盟店数で最大級** の独立 operator にもかかわらず、コーポレートが [[JapanFG/paidy|Paidy]] や [[JapanFG/aplus|アプラス]] のように親グループ既存ページに吸収されないため、JapanFG 名前空間で **独立 BNPL ホールディング** として別ページ化する価値が高い。

## 4. 規制・政策

- **個人情報保護法**: 与信判断のための個人データ（属性 / 取引履歴）取扱いと第三者提供範囲が論点。
- **東証 PRIME 開示**: 上場会社として四半期 IR・有価証券報告書ベースで取扱高（GMV）・加盟店数・与信損失率が公表されているため、独立 BNPL の経済性が公開数字で読める数少ない事例。^[extracted]

## Related

- [[JapanFG/bnpl-landscape]]
- [[JapanFG/paidy]]
- [[JapanFG/merpay]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/credit-saison]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[JapanFG/installment-sales-act-2020-amendment]]

## Sources

- Net Protections HD corporate site: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP 後払い product site: https://www.netprotections.com/
- atone product site: https://atone.be/
- AFTEE product site (overseas BNPL): https://aftee.jp/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
