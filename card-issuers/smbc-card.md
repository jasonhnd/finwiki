---
title: "三井住友カード (SMCC)"
aliases:
  - "SMBC Card"
  - "Sumitomo Mitsui Card"
  - "三井住友カード"
  - "三井住友カード株式会社"
  - "card-issuers/sumitomo-mitsui-card"
domain: card-issuers
created: 2026-05-21
last_updated: 2026-06-24
last_tended: 2026-06-24
review_by: 2026-12-24
confidence: likely
tags: [JapanFG, payments, credit-card, acquirer, consumer-credit]
status: active
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
sources:
  - "https://www.smbc-card.com/company/info/outline.jsp"
  - "https://www.smbc-card.com/company/index.jsp"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
---

# 三井住友カード (SMCC)


## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]]. Read it against [[card-issuers/mufg-nicos|三菱UFJニコス (Mitsubishi UFJ NICOS)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

三井住友カードは [[megabanks/smfg|SMFG]] のカード・信販・トランザクション事業の中核 operator。カード issuer だけでなく、加盟店向け決済、トランザクション、Olive / Vポイント周辺のキャッシュレス接点を束ねるため、[[payments/card-acquiring-japan-stack|card acquiring stack]] の代表ページとして独立させる。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 三井住友カード株式会社 |
| Group | [[megabanks/smfg|SMFG]] |
| Main lanes | Credit card, installment / credit sales, merchant acquiring, transaction services |
| Regulatory route | Installment Sales Act / METI credit-transaction materials; lending and card-number handling disclosures should be checked against official pages. ^[verified-2026-06-24] |
| Company profile scope | Official outline lists credit card, debit / prepaid / other payment, loan, guarantee, credit sales, transaction, and related businesses. ^[verified-2026-06-24] |

## 2. Business role

- Credit-card issuing and merchant services sit at the center of SMFG's retail cashless strategy; the official company page describes credit-card, credit-sales, and transaction businesses rather than only card issuing. ^[verified-2026-06-24]
- The company connects bank account, card, point, app, and merchant acceptance rails. The official outline lists [[consumer-finance/smbc-consumer-finance]], SMBC GMO PAYMENT, and V Point Marketing among affiliated / subsidiary companies, which makes SMCC a hub across issuer, consumer-credit, merchant-payment, and loyalty layers. ^[verified-2026-06-24]
- This page should be read as an issuer-acquirer / transaction platform boundary inside [[megabanks/smfg|SMFG]], not as a generic credit-card brand page. ^[verified-2026-06-24]
- It is also a useful boundary page for distinguishing SMFG's bank balance-sheet business from payment-network and credit-sales businesses.

## 3. Why this standalone page matters

Parent FG pages hide the operating-company boundary. SMBC Card is the entity that analysts need when comparing issuer economics, merchant-acquiring risk, card-number contract management, and consumer-credit regulation.

## Related

- [[megabanks/smfg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[consumer-finance/smbc-consumer-finance]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SMBC Card company outline: https://www.smbc-card.com/company/info/outline.jsp
- SMBC Card company information: https://www.smbc-card.com/company/index.jsp
- METI credit transaction policy page: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI registered merchant-contracting operators PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
