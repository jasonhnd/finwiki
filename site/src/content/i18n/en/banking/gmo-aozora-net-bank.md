---
source: banking/gmo-aozora-net-bank
source_hash: c816ab6a50282de2
lang: en
status: machine
fidelity: ok
title: "GMO Aozora Net Bank operating profile"
translated_at: 2026-05-30T18:10:53.987Z
---

# GMO Aozora Net Bank operating profile

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the operating-profile companion to the entity anchor at [[JapanFG/gmo-aozora-net|GMO Aozora Net Bank entity anchor]]. Read it within the segment map at [[banking/japan-net-bank-competition-map|Japan net bank competition map]], against [[JapanFG/ssnb|SSNB / NEOBANK]] and the consumer-led net-bank cohort [[banking/rakuten-bank|Rakuten Bank]] ? [[banking/paypay-bank|PayPay Bank]] ? [[banking/au-jibun-bank|au Jibun Bank]] ? [[banking/sony-bank|Sony Bank]].

## TL;DR

GMO Aozora Net Bank, Ltd. is the **corporate / SME / fintech-API bank** anchor of Japan's net-bank universe, distinct from consumer-ecosystem banks and from BaaS partner-channel models. Aozora Bank holds 50% of equity and 85.12% of voting rights; the GMO side holds 50% of equity but 14.86% of voting rights. The bank was rebranded in 2018 from Aozora Trust Bank and focuses on Anshin Wide business lending and Bank API for Developers.

## 1. Identity and ownership

| Item | Reading |
|---|---|
| Legal name | GMO Aozora Net Bank, Ltd. |
| English name | GMO Aozora Net Bank, Ltd. |
| Established | 2004-04, originally Aozora Trust Bank |
| Rebrand | 2018, renamed from Aozora Trust Bank; Aozora retains 50% equity / 85.12% voting rights |
| Bank-license category | Ordinary bank under the Banking Act, classified by FSA under other banks |
| Ownership (per official company outline) | Equity: [[JapanFG/aozora-bank|Aozora Bank (8304)]] 50.00% / [[JapanFG/gmo-financial-hd|GMO Internet Group]] 25.00% / GMO Financial Holdings 25.00%. Voting rights: Aozora Bank 85.12% / GMO Internet Group 7.43% / GMO Financial Holdings 7.43% |
| HQ | Tokyo (Shibuya) |
| Channel architecture | App + web + API; no physical branches |
| Primary regulator | 金融庁 (FSA) |

### How the JV came together

```
2004-04        : Aozora Trust Bank opens as a wholly-owned trust-bank subsidiary of [[JapanFG/aozora-bank|Aozora Bank]] (legacy Nippon Credit Bank lineage)
2016-06        : GMO Internet takes an initial stake (~14.9% voting) via third-party allotment; Aozora ceases to be sole owner. 2016-07 GMO transfers half to GMO Click Holdings (now GMO Financial Holdings)
2018           : bank rebrands from Aozora Trust Bank to GMO Aozora Net Bank and starts retail + corporate banking. Aozora retains 50% equity / 85.12% voting; GMO side runs operations
2019 onward    : Corporate-API and SME-loan products scaled with freee / Money Forward / Square / Stripe partnerships
2020 onward    : Anshin Wide SME business-loan launched, leveraging GMO Payment Gateway transaction data for AI underwriting
```

> Note: press IPO speculation (no formal company commitment) has been moved to `.opinions/banking/gmo-aozora-net-bank.md` (no verifiable primary source).

### Group-context positioning

```
GMO Internet Group, Inc. (TSE Prime 9449, founder/CEO Masatoshi Kumagai)
  ??? GMO Aozora Net Bank (GMO side: 50% equity / 14.86% voting via GMO IG + GMO FH ? this entry) ? corporate / SME / API bank
  ├── [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] (TSE Prime 3769) — payment-processing infra
  ├── [[JapanFG/gmo-click-securities|GMO Click Securities]] — net broker / FX
  ├── [[JapanFG/gmo-coin|GMO Coin]] — crypto-asset exchange
  └── Other infra / hosting / ad subsidiaries

[[JapanFG/aozora-bank|Aozora Bank (TSE Prime 8304, former 日本債券信用銀行)]]
  ??? GMO Aozora Net Bank (50% equity / 85.12% voting rights) ? controlling-vote shareholder
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

### Business-loan flagship: Anshin Wide

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
| Accounting-SaaS connectors | Pre-built integrations to freee, Money Forward, etc. |
| Acquirer integrations | Links to GMO Payment Gateway data |
| Card-issuance and prepaid | Partner-program plumbing for issuance |

### Partner ecosystem (representative)

| Partner | Integration role |
|---|---|
| freee | Accounting SaaS — direct in/out feed reconciliation |
| Money Forward | Accounting SaaS ? same |
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
| SME unsecured working-capital loan | Anshin Wide lane | AI underwriting using group-payment data |
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

Granular point-in-time figures appear in GMO Aozora and parent GMO Internet Group IR disclosures; this page tracks the franchise pattern rather than reproducing every point-in-time number.

| Metric | Pattern |
|---|---|
| Corporate account count | Growing steadily — freelance / individual-proprietor / startup segment expanding fastest |
| Deposit balance | Operating-balance-driven (not deposit-promotion-driven); lower deposit-share-of-funding than consumer net banks |
| Loan book | Anshin Wide + general corporate loans; growing |
| Partner / API integration count | Multi-partner expansion; freee / Money Forward / Square / Stripe / Wise as anchors |

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
- GMO Aozora Net Bank company outline — shareholding: equity Aozora 50% / GMO IG 25% / GMO FH 25%; voting Aozora 85.12% / GMO IG 7.43% / GMO FH 7.43% (https://gmo-aozora.com/company/outline.html).
- Wikipedia: GMO Aozora Net Bank ? shareholding history and current structure (checked 2026-05-29, https://ja.wikipedia.org/wiki/GMO?????????).
- GMO Aozora Bank API for Developers (https://gmo-aozora.com/api/).
- Anshin Wide product page (https://gmo-aozora.com/anshin-wide/).
- GMO Internet Group corporate site (https://www.gmo.jp/).
- Aozora Bank corporate site (https://www.aozorabank.co.jp/).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
