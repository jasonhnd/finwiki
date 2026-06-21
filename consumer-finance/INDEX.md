---
title: "consumer-finance — Japanese consumer lender (貸金業) index"
aliases:
  - "consumer-finance index"
  - "消費者金融 index"
  - "Japan consumer lender index"
  - "貸金業 index"
domain: "consumer-finance"
created: 2026-06-04
last_updated: 2026-06-04
last_tended: 2026-06-04
review_by: 2027-06-04
confidence: likely
tags: [consumer-finance, JapanFG, index]
status: active
sources:
  - "Domain index maintained from public FinWiki entries and source-backed entry frontmatter."
  - "https://www.fsa.go.jp/menkyo/menkyoj/kashikin.html"
  - "https://www.j-fsa.or.jp/"
---

# consumer-finance — Japanese consumer lender (貸金業) index

## TL;DR

`consumer-finance/` contains **4 active entries** (excluding INDEX, 5 total) covering Japanese consumer lenders registered under the Money Lending Business Act (貸金業法) — the unsecured personal-loan (カードローン) operators, their credit-guarantee businesses, and the bank- or group-backed consumer-finance subsidiaries. This domain was split out of the former `JapanFG/` umbrella alongside [[leasing-firms/INDEX|leasing-firms]]. Use it when a bank, megabank, or card page needs the underlying 貸金業 personal-loan / guarantee operator rather than the parent group entity or the shopping-credit (個品割賦) card issuer.

> **Scope / disambiguation.** This domain is **Japanese consumer lenders (貸金業 / 信販-adjacent personal-loan operators)** — Acom, Aiful, Promise (SMBC Consumer Finance), Shinsei Financial (レイク). It is **not** card / installment-credit issuers (信販・カード → see [[card-issuers/jaccs|株式会社ジャックス (Jaccs)]] and the card-issuers domain), **not** the manufacturer-side captive / vendor finance thematic layer ([[manufacturer-finance/INDEX|manufacturer-finance]]), and **not** the leasing / auto-finance / captive-lessor split sibling ([[leasing-firms/INDEX|leasing-firms]]). For the parent financial-group *entity* pages and the umbrella that this domain was split from, see [[JapanFG/INDEX|JapanFG]].

## Entries

The 貸金業 consumer-lender operating pages. Each is a registered money-lender (登録貸金業者) under FSA / Local Finance Bureau supervision.

| Status | Slug | Operator | Group / route | Why it exists in FinWiki |
|---|---|---|---|---|
| ✅ likely | [[consumer-finance/acom|アコム株式会社 (Acom)]] | アコム / Acom | [[megabanks/mufg|MUFG]] 系列（持分法 39.6%） | MUFG-affiliated 3-大消費者金融 member; カードローン + 信用保証 + 海外 (Easy Buy) |
| ✅ likely | [[consumer-finance/acom-co-detail|アコム 事業詳細 (Acom Operating Profile)]] | アコム 事業詳細 | [[megabanks/mufg|MUFG]] 系列 | Operating-profile companion to the Acom anchor: segment economics, guarantee, overseas |
| ✅ likely | [[consumer-finance/aiful|アイフル株式会社 (Aiful)]] | アイフル / Aiful | 独立系（メガバンク非系列）★ | The only independent-capital major among the 3 大消費者金融; ライフカード + キャレント |
| ✅ likely | [[consumer-finance/smbc-consumer-finance|SMBCコンシューマーファイナンス]] | プロミス / Promise (SMBCCF) | [[megabanks/smfg|SMFG]] 100% 完全子会社 | SMFG-group personal-loan + guarantee operator behind the PROMISE brand |
| ✅ likely | [[consumer-finance/shinsei-financial|新生フィナンシャル]] | 新生フィナンシャル / レイク | [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] / [[megabanks/sbi-hd|SBI]] | SBI Shinsei-group consumer-finance operator (レイク, personal loans, guarantee) |

## How the domain reads

- **3 大消費者金融 axis** — Acom (MUFG-affiliated), Promise/SMBCCF (SMFG wholly-owned), and Aiful (independent) are the three majors; the parent-group route is the main differentiator. Aiful is the only one *not* folded into a megabank.
- **Bank-platform vs specialist split** — groups such as SBI keep the bank balance sheet ([[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]]) separate from the 貸金業 personal-loan / guarantee specialist ([[consumer-finance/shinsei-financial|Shinsei Financial]]), so this domain holds the operating-company layer rather than the bank page.
- **貸金業 regulation** — every page sits under the Money Lending Business Act: 上限金利 20% (10万円以下) / 18% / 15%, 総量規制 (年収 1/3), post-2010-06 full enforcement, and the legacy グレーゾーン金利・過払い金 overhang.

## Expansion rules

- Add a page only when a registered consumer lender (貸金業者) clarifies a bank, megabank, card issuer, or credit-exposure relationship.
- Keep entries decision-oriented: parent-group route, business lanes (personal loan / guarantee / overseas), regulatory boundary, and open questions.
- Card / installment-credit (信販) operators belong in the card-issuers domain — link across, do not duplicate. The leasing / captive-lessor side belongs in [[leasing-firms/INDEX|leasing-firms]].

## Related

- [[leasing-firms/INDEX|leasing-firms INDEX]] — split sibling: Japanese leasing / auto-finance / captive lessors
- [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] — manufacturer captive / vendor / export finance thematic layer
- [[card-issuers/jaccs|株式会社ジャックス (Jaccs)]] — adjacent 信販 / card-issuer contrast lane
- [[JapanFG/INDEX|JapanFG INDEX]] — parent financial-group entities and the umbrella this domain was split from
- [[INDEX|FinWiki index]]
