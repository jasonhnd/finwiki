---
title: "GMO Aozora Net Bank operating profile (GMO あおぞらネット銀行)"
aliases:
  - "banking/gmo-aozora-net-bank"
  - "GMO Aozora Net Bank operating profile"
  - "GMOあおぞらネット銀行 operating profile"
  - "GMO Aozora corporate API bank"
  - "あおぞら信託銀行 (旧称) operating profile"
domain: banking
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [banking, net-bank, sme-bank, corporate-bank, api-banking, embedded-finance, gmo, aozora, baas]
status: active
sources:
  - "https://gmo-aozora.com/"
  - "https://gmo-aozora.com/company/outline.html"
  - "https://gmo-aozora.com/news/"
  - "https://gmo-aozora.com/anshin-wide/"
  - "https://gmo-aozora.com/api/"
  - "https://www.gmo.jp/"
  - "https://www.aozorabank.co.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
---

# GMO Aozora Net Bank operating profile (GMO あおぞらネット銀行)

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the operating-profile companion to the entity anchor at [[JapanFG/gmo-aozora-net|GMO あおぞらネット銀行 entity anchor]]. Read it within the segment map at [[banking/japan-net-bank-competition-map|Japan net bank competition map]], against the corporate-API peer [[JapanFG/ssnb|住信SBIネット銀行 / NEOBANK]] and the consumer-led net-bank cohort [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]], with parent-group context at [[JapanFG/gmo-financial-hd|GMO Financial Holdings]] and [[JapanFG/aozora-bank|あおぞら銀行]], and within the BaaS framework at [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]]. For payment-side integrations, route through [[payments/japan-bank-api-payment-agency-route|Japan bank API payment agency route]] and [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud control]].

## TL;DR

GMO あおぞらネット銀行 (GMO Aozora Net Bank, Ltd.) is the **corporate / SME / fintech-API bank** anchor of Japan's net-bank universe — distinct from the consumer-ecosystem orientation of [[banking/rakuten-bank|Rakuten Bank]] / [[banking/paypay-bank|PayPay Bank]] / [[banking/au-jibun-bank|au Jibun Bank]] and from the BaaS partner-channel architecture of [[JapanFG/ssnb|SSNB / NEOBANK]]. The bank is a joint venture: [[JapanFG/gmo-financial-hd|GMO Internet Group]] holds the majority stake (~85%) and [[JapanFG/aozora-bank|あおぞら銀行]] retains a minority position (~15%), with shareholding ratios subject to change ^[ambiguous]. The bank was rebranded in **2018-07** from its original あおぞら信託銀行 (founded 2004-04) form after GMO took majority control. Its flagship products are **あんしんワイド** (an unsecured SME / freelancer business-loan product with AI-driven underwriting using GMO Payment Gateway transaction data) and **「銀行 API for Developers」** (a comprehensive public-API stack covering balance lookup, transfer, account-opening, and accounting-SaaS integration). Strategic partners include [[fintech/japan-stablecoin-regulatory-landscape|fintech-adjacent operators]], freee, マネーフォワード, Square, Stripe, and Wise. The bank aims for the gap between traditional megabank corporate banking and consumer-led net banking — embedded finance for the SaaS / SME / freelance economy.

## 1. Identity and ownership

| Item | Reading |
|---|---|
| Legal name | 株式会社GMO あおぞらネット銀行 |
| English name | GMO Aozora Net Bank, Ltd. |
| Established | 2004-04 (originally あおぞら信託銀行) |
| Rebrand | 2018-07 (GMO majority acquisition, name change, full retail/corporate-bank operations launched) |
| Bank-license category | 普通銀行 (ordinary bank under 銀行法), classed under FSA "その他の銀行" |
| Ownership (approximate, time-varying) | [[JapanFG/gmo-financial-hd|GMO Internet Group, 9449]] ~85% / [[JapanFG/aozora-bank|あおぞら銀行 (Aozora Bank, 8304)]] ~15% ^[ambiguous] |
| HQ | Tokyo (Shibuya) |
| Channel architecture | App + web + API; no physical branches |
| Primary regulator | 金融庁 (FSA) |

### How the JV came together

```
2004-04        : あおぞら信託銀行 opens as a wholly-owned trust-bank subsidiary of [[JapanFG/aozora-bank|あおぞら銀行]] (legacy 日本債券信用銀行 lineage)
2016-05        : GMO Internet takes a 15% initial stake; planning the conversion into a net bank
2018-07        : GMO Internet exceeds majority; bank rebrands to GMO あおぞらネット銀行 and starts retail + corporate banking
2019 onward    : Corporate-API and SME-loan products scaled with freee / マネーフォワード / Square / Stripe partnerships
2020 onward    : あんしんワイド SME business-loan launched, leveraging GMO Payment Gateway transaction data for AI underwriting
2024 onward    : IPO speculation in press; no formal commitment public ^[ambiguous]
```

### Group-context positioning

```
GMO Internet Group, Inc. (TSE Prime 9449, founder/CEO Masatoshi Kumagai)
  ├── GMO あおぞらネット銀行 (~85% — this entry) — corporate / SME / API bank
  ├── [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] (TSE Prime 3769) — payment-processing infra
  ├── [[JapanFG/gmo-click-securities|GMO Click Securities]] — net broker / FX
  ├── [[JapanFG/gmo-coin|GMO Coin]] — crypto-asset exchange
  └── Other infra / hosting / ad subsidiaries

[[JapanFG/aozora-bank|Aozora Bank (TSE Prime 8304, former 日本債券信用銀行)]]
  └── GMO あおぞらネット銀行 (~15%) — minority legacy stake
```

### Corporate / SME / freelancer account franchise

| Product | Role |
|---|---|
| Corporate account opening | Fully online for freelancers, individual proprietors, SMEs, and startups; same-day / next-day fast-open positioning |
| Yen settlement account | Operating account for SaaS, e-commerce, and platform-economy SMEs |
| Multi-account / sub-account | Sub-accounts under one master account for cost-segregation / project-segregation |
| Bulk transfer (一括振込) | High-volume payroll and supplier-payment processing |
| Foreign-currency operations | Limited; cross-border specialisation typically routed through Wise / Stripe partnerships |
| Debit / corporate card | Corporate-card pilots, partner-issued |

### Business-loan flagship: あんしんワイド

| Feature | Reading |
|---|---|
| Product type | Unsecured SME / freelancer business loan |
| Underwriting | AI-driven scoring using transaction data + accounting-SaaS data + GMO Payment Gateway acquirer data |
| Target borrower | Freelancers, individual proprietors, SaaS-using SMEs, e-commerce sellers |
| Differentiator | Same-day / fast-decision turnaround vs traditional bank corporate-loan timelines |
| Risk channel | Direct loan on GMO Aozora's balance sheet |

### Bank API for Developers

The bank's public-API stack is one of the deeper in Japan among small / mid net banks:

| API surface | Function |
|---|---|
| Account / balance | Real-time balance, transaction history retrieval |
| Transfer | Programmatic 振込 issuance |
| Account opening | Embedded account-opening flow for partner apps |
| Multi-account ops | Sub-account creation, virtual-account allocation, project segregation |
| Accounting-SaaS connectors | Pre-built integrations to freee, マネーフォワード, etc. |
| Acquirer integrations | Links to GMO Payment Gateway data |
| Card-issuance and prepaid | Partner-program plumbing for issuance |

### Partner ecosystem (representative)

| Partner | Integration role |
|---|---|
| freee | Accounting SaaS — direct in/out feed reconciliation |
| マネーフォワード | Accounting SaaS — same |
| Square | POS / acquirer linkage |
| Stripe | Online-payment acquirer linkage |
| Wise | Cross-border payment partner |
| [[JapanFG/gmo-coin|GMO Coin]] | Sister-group crypto on/off-ramp |
| [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] | Sister-group payment-acquiring data and settlement |

### Where GMO Aozora competes

| Segment | Position | Differentiator |
|---|---|---|
| Freelancer / individual-proprietor account | Strong | Fast online opening, low-friction for solo workers |
| SaaS / e-commerce SME operating account | Strong | API depth, accounting-SaaS integration |
| SME unsecured working-capital loan | あんしんワイど lane | AI underwriting using group-payment data |
| Embedded-finance partner-bank | Growing | API-first architecture |
| Megabank-corporate-banking displacement | Limited | Targets the segment megabanks don't serve cost-effectively, not their core client base |
| Consumer-led ecosystem banking | Out of scope | Avoids head-on competition with [[banking/rakuten-bank|Rakuten]] / [[banking/paypay-bank|PayPay]] / [[banking/au-jibun-bank|au Jibun]] |

### Three-axis competitor map

| Axis | Net-bank type | Examples | GMO Aozora overlap |
|---|---|---|---|
| Consumer ecosystem | Points-led retail | [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] | Minimal — different customer segment |
| Asset formation | FX / mortgage / 投信 | [[banking/sony-bank|Sony Bank]] · [[banking/daiwa-next-bank|Daiwa Next Bank]] | Minimal — different customer segment |
| BaaS partner channel | Partner-brand-led banking | [[JapanFG/ssnb|SSNB NEOBANK]] · [[banking/minna-bank-baas-model|Minna Bank]] | Adjacent — shared partner relationships, different architecture |
| Corporate API direct | Direct SME / freelancer / SaaS-economy bank | **GMO Aozora** | Core competitor: none of the above truly overlap |

## 4. KPI shape

Granular point-in-time figures (account count, deposit balance, loan-book size, あんしんワイド outstanding, partner count) appear in GMO Aozora and parent GMO Internet Group IR disclosures. ^[ambiguous] The franchise pattern through the GMO-era operating cycle (2018-07–present) shows:

| Metric | Pattern |
|---|---|
| Corporate account count | Growing steadily — freelance / individual-proprietor / startup segment expanding fastest |
| Deposit balance | Operating-balance-driven (not deposit-promotion-driven); lower deposit-share-of-funding than consumer net banks |
| Loan book | あんしんワイド + general corporate loans; growing |
| Partner / API integration count | Multi-partner expansion; freee / マネーフォワード / Square / Stripe / Wise as anchors |
| IPO speculation | Periodic press reporting; no formal company-level commitment ^[ambiguous] |

## 5. Regulatory and policy boundary

| Layer | Statute / regulator | Implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 | Standard ordinary-bank supervision |
| Open Banking API | 2017 銀行法 改正 | API provision obligations; Bank API for Developers leverages this |
| Deposit insurance | 預金保険機構 | Standard yen-deposit coverage |
| AML / CFT — corporate accounts | 金融庁 + 警察庁 + 国税庁 + FATF 第 4 次審査 | Heightened post-FATF expectations on beneficial-owner verification for corporate accounts |
| Embedded-finance partner-bank model | [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] | API-direct partner-bank architecture is distinct from the BaaS partner-channel architecture |
| Sister-group consolidation | 金融商品取引法 — for cross-group activities | Group reporting consolidation through GMO Internet Group |

## Related

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/minna-bank-baas-model]]
- [[banking/post-megabank-positioning]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[banking/sony-bank]] · [[banking/daiwa-next-bank]] · [[banking/ui-bank]]
- [[JapanFG/gmo-aozora-net]]
- [[JapanFG/gmo-financial-hd]]
- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/gmo-coin]]
- [[JapanFG/aozora-bank]]
- [[JapanFG/ssnb]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]

## Sources

- GMO Aozora Net Bank corporate site (https://gmo-aozora.com/).
- GMO Aozora Net Bank company outline (https://gmo-aozora.com/company/outline.html).
- GMO Aozora Bank API for Developers (https://gmo-aozora.com/api/).
- あんしんワイド product page (https://gmo-aozora.com/anshin-wide/).
- GMO Internet Group corporate site (https://www.gmo.jp/).
- Aozora Bank corporate site (https://www.aozorabank.co.jp/).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
