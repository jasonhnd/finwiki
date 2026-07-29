---
source: banking/gmo-aozora-net-bank
source_hash: 7958f5ddab42f976
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "GMO Aozora Net Bank operating profile (GMO あおぞらネット銀行)"
translated_at: 2026-07-29T03:30:48.101Z
---

# GMO Aozora Net Bank operating profile (GMO あおぞらネット銀行)

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the operating-profile companion to the entity anchor at [[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行 entity anchor]]. Read it within the segment map at [[banking/japan-net-bank-competition-map|Japan net bank competition map]], against the corporate-API peer [[regional-banks/ssnb|住信SBIネット銀行 / NEOBANK]] and the consumer-led net-bank cohort [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]], with parent-group context at [[payment-firms/gmo-financial-hd|GMO Financial Holdings]] and [[regional-banks/aozora-bank|あおぞら銀行]], and within the BaaS framework at [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]]. For payment-side integrations, route through [[payments/japan-bank-api-payment-agency-route|Japan bank API payment agency route]] and [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud control]].

## TL;DR

GMO あおぞらネット銀行 (GMO Aozora Net Bank, Ltd.) is a joint venture of [[regional-banks/aozora-bank|Aozora Bank]] and the GMO group with a stated technology-bank and corporate-service focus. Its official company outline records establishment on **1994-02-28**, opening as 日債銀信託銀行 on **1994-04-01**, renaming to あおぞら信託銀行 in 2001, renaming to GMO Aozora Net Bank on **2018-06-01**, beginning internet-bank operations on **2018-07-17**, and transferring its trust business to Aozora Bank on **2018-10-01**. The same outline records equity ownership of 50% Aozora Bank, 25% GMO Internet Group, and 25% GMO Financial Holdings, with voting-right ratios of 85.12%, 7.43%, and 7.43%, respectively. Its current official materials disclose corporate banking, Bank API, and BaaS services; this page does not infer product leadership, partner economics, or customer mix beyond those disclosures. ^[Sources: https://gmo-aozora.com/company/outline.html; https://gmo-aozora.com/company/greeting.html; https://gmo-aozora.com/api-cooperation/.]

## 1. Identity and ownership

| Item | Reading |
|---|---|
| Legal name | 株式会社GMO あおぞらネット銀行 |
| English name | GMO Aozora Net Bank, Ltd. |
| Established / opened | Established 1994-02-28; opened 1994-04-01 as 日債銀信託銀行 |
| 2018 transition | Renamed GMO Aozora Net Bank on 2018-06-01; internet-bank operations began 2018-07-17; trust business transferred to Aozora Bank on 2018-10-01 |
| Bank-license category | 普通銀行 (ordinary bank under 銀行法), classed under FSA "その他の銀行" |
| Ownership (per official company outline) | Equity: [[regional-banks/aozora-bank|あおぞら銀行 (Aozora Bank, 8304)]] 50.00% / [[payment-firms/gmo-financial-hd|GMO Internet Group]] 25.00% / GMO Financial Holdings 25.00%. Voting rights: あおぞら銀行 85.12% / GMO Internet Group 7.43% / GMO Financial Holdings 7.43% |
| HQ | Tokyo (Shibuya) |
| Channel architecture | Internet is the primary transaction channel; the official disclosure says listed branches do not provide counter service |
| Primary regulator | 金融庁 (FSA) |

Sources: the table follows the bank's company outline, 2025 interim disclosure, and the FSA licensed-bank workbook. Equity ownership and voting control are different measures and are shown separately. ^[Sources: https://gmo-aozora.com/company/outline.html; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### How the JV came together

```
1994-02-28     : company established
1994-04-01     : opens as 日債銀信託銀行
2001-01-04     : renamed あおぞら信託銀行
2018-06-01     : renamed GMO あおぞらネット銀行
2018-07-17     : internet-bank operations begin
2018-10-01     : trust business transferred to [[regional-banks/aozora-bank|Aozora Bank]]
```

> Note: press IPO speculation (no formal company commitment) has been moved to `.opinions/banking/gmo-aozora-net-bank.md` (no verifiable primary source).

### Group-context positioning

```
GMO Internet Group, Inc. (TSE Prime 9449, founder/CEO Masatoshi Kumagai)
  ├── GMO あおぞらネット銀行 (GMO side: 50% equity / 14.86% voting via GMO IG + GMO FH — this entry) — corporate / SME / API bank
  ├── [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] (TSE Prime 3769) — payment-processing infra
  ├── [[securities-firms/gmo-click-securities|GMO Click Securities]] — net broker / FX
  ├── [[payment-firms/gmo-coin|GMO Coin]] — crypto-asset exchange
  └── Other infra / hosting / ad subsidiaries

[[regional-banks/aozora-bank|Aozora Bank (TSE Prime 8304, former 日本債券信用銀行)]]
  └── GMO あおぞらネット銀行 (50% equity / 85.12% voting rights) — controlling-vote shareholder
```

### Corporate / SME / freelancer account franchise

| Product | Role |
|---|---|
| Corporate account opening | Online application and identity/business verification under current eligibility and review terms |
| Yen settlement account | Operating account for SaaS, e-commerce, and platform-economy SMEs |
| Multi-account / sub-account | Sub-accounts under one master account for cost-segregation / project-segregation |
| Bulk transfer (一括振込) | High-volume payroll and supplier-payment processing |
| Foreign-currency operations | Confirm current eligible currencies, transaction scope, and fees from the bank's product pages |
| Debit / corporate card | Confirm current issuer, eligibility, and terms from the official card pages |

Sources: product availability and conditions change. The table is an operating-function map and does not assert approval speed or third-party routing without a dated official product or partnership announcement. ^[Sources: https://gmo-aozora.com/business/; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf.]

### Business-loan flagship: あんしんワイド

| Feature | Reading |
|---|---|
| Product type | Unsecured SME / freelancer business loan |
| Underwriting | Screening method and data use must be taken from the current product explanation and consent/privacy disclosures |
| Target borrower | Freelancers, individual proprietors, SaaS-using SMEs, e-commerce sellers |
| Application / decision timing | Use only the timing and qualifications stated on the current product page |
| Risk channel | Direct loan on GMO Aozora's balance sheet |

Sources: this table does not infer an underwriting model or comparative approval speed beyond the current あんしんワイド disclosures. ^[Source: https://gmo-aozora.com/anshin-wide/.]

### Bank API for Developers

The bank publishes a dated API lineup. As of 2026-05-01, the official page lists 28 standard and 7 paid APIs; the categories below are a functional summary, not a peer ranking:

| API surface | Function |
|---|---|
| Account / balance | Real-time balance, transaction history retrieval |
| Transfer | Programmatic 振込 issuance |
| Multi-account ops | Sub-account creation, virtual-account allocation, project segregation |
| Connection support | Developer portal, test environment, and connection support described on the official API pages |

Sources: exact endpoint availability, authentication, pricing, and eligibility must be checked against the dated official lineup and contract documentation. ^[Sources: https://gmo-aozora.com/business/api-cooperation/apilineup.html; https://gmo-aozora.com/api-cooperation/.]

### Partner evidence protocol

| Claim type | Required primary evidence |
|---|---|
| API customer / connector | Dated bank or counterparty announcement naming the legal entities, API scope, and launch status |
| BaaS program | Bank announcement plus current service page identifying the branded branch or embedded service |
| Group-company integration | Current group structure plus product-specific terms; group membership alone does not prove data sharing or settlement |
| Cross-border or payment route | Current product terms and the licensed role of each legal entity |

Sources: a provider logo, historic announcement, or group relationship does not prove a current production integration. ^[Sources: https://gmo-aozora.com/news/; https://gmo-aozora.com/api-cooperation/; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf.]

### Where GMO Aozora competes

| Segment | Public evidence to review | Comparison boundary |
|---|---|---|
| Corporate / sole-proprietor accounts | Current account eligibility, fees, branch/channel disclosure, and account metrics | Do not infer approval speed or customer mix |
| SME lending | Current あんしんワイド terms and dated loan disclosure | Do not infer underwriting inputs not disclosed to applicants |
| Bank API | Dated endpoint lineup, contract count, pricing, and connection terms | Bank-published “No.1” statements remain company-defined unless independently reconciled |
| BaaS / embedded finance | Named current programs, legal-entity roles, and launch status | Announcement, launch, and active scale are separate facts |

Sources: these rows define a reproducible comparison route rather than assigning “strong”, “growing”, or “limited” rankings. ^[Sources: https://gmo-aozora.com/company/disclosure.html; https://gmo-aozora.com/api-cooperation/; https://gmo-aozora.com/news/.]

### Three-axis competitor map

| Axis | Evidence set | Examples to verify | Publication rule |
|---|---|---|---|
| Consumer ecosystem | Current group ownership, account-link terms, points/card economics, and active-use KPIs | [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] | No overlap score without same-period metrics |
| Asset formation | FX, mortgage, and investment-product inventory plus dated balances | [[banking/sony-bank|Sony Bank]] · [[banking/daiwa-next-bank|Daiwa Next Bank]] | Product presence does not establish customer overlap |
| BaaS partner channel | Named active programs, legal roles, branches/accounts, and transaction KPIs | [[regional-banks/ssnb|SSNB / NEOBANK]] · [[banking/minna-bank-baas-model|Minna Bank]] | Compare only like-for-like disclosed measures |
| Corporate API | Endpoint scope, contract count, pricing, service levels, and dated usage | **GMO Aozora** and any bank with a current public API | Avoid “no competitor” conclusions without a market-wide survey |

Sources: the matrix is an evidence design for future comparison, not a measured competitive map. ^[Sources: https://gmo-aozora.com/api-cooperation/; https://gmo-aozora.com/company/disclosure.html; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

## 4. KPI shape

Granular point-in-time figures (account count, deposit balance, loan-book size, あんしんワイド outstanding, partner count) appear in GMO Aozora and parent GMO Internet Group IR disclosures; this page tracks the franchise pattern rather than reproducing every point-in-time number. The franchise pattern through the GMO-era operating cycle (2018–present) shows:

| Metric | Official update route |
|---|---|
| Accounts / customer composition | Use the latest disclosure or dated company release; do not infer the fastest-growing segment |
| Deposits | Use the latest financial disclosure with its account and currency definitions |
| Loans | Use the latest disclosure's loan categories; keep product marketing separate from balance-sheet totals |
| API contracts / lineup | Cite the bank's stated date and company-defined methodology |

Sources: the latest reviewed interim disclosure is the 2025 interim report published in January 2026; newer figures should replace, not silently mix with, this measurement period. ^[Sources: https://gmo-aozora.com/company/disclosure.html; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf; https://gmo-aozora.com/api-cooperation/.]

## 5. Regulatory and policy boundary

| Layer | Statute / regulator | Implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 | Standard ordinary-bank supervision |
| Open Banking API | 2017 銀行法 改正 | API provision obligations; Bank API for Developers leverages this |
| Deposit insurance | 預金保険機構 | Standard yen-deposit coverage |
| AML / CFT — corporate accounts | 金融庁 + 警察庁 + 国税庁 + FATF 第 4 次審査 | Heightened post-FATF expectations on beneficial-owner verification for corporate accounts |
| Embedded-finance partner-bank model | [[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] | API-direct partner-bank architecture is distinct from the BaaS partner-channel architecture |
| Sister-group consolidation | 金融商品取引法 — for cross-group activities | Group reporting consolidation through GMO Internet Group |

Sources: license category and legal-entity status are checked against the FSA workbook and the bank's current disclosure. Product/API obligations require the underlying law, supervisory materials, and contracts rather than this summary alone. ^[Sources: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf; https://gmo-aozora.com/policy/openapi-policy.html.]

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
- [[payment-firms/gmo-aozora-net]]
- [[payment-firms/gmo-financial-hd]]
- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/gmo-coin]]
- [[regional-banks/aozora-bank]]
- [[regional-banks/ssnb]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]

## Sources

- GMO Aozora Net Bank corporate site (https://gmo-aozora.com/).
- GMO Aozora Net Bank company outline — shareholding: equity Aozora 50% / GMO IG 25% / GMO FH 25%; voting Aozora 85.12% / GMO IG 7.43% / GMO FH 7.43% (https://gmo-aozora.com/company/outline.html).
- GMO Aozora Bank API connection overview and dated lineup (https://gmo-aozora.com/api-cooperation/, https://gmo-aozora.com/business/api-cooperation/apilineup.html).
- あんしんワイド product page (https://gmo-aozora.com/anshin-wide/).
- GMO Aozora Net Bank financial-disclosure index and 2025 interim disclosure (https://gmo-aozora.com/company/disclosure.html, https://gmo-aozora.com/company/disclosure/pdf/disclosure/202601disclosure.pdf).
- GMO Internet Group corporate site (https://www.gmo.jp/).
- Aozora Bank corporate site (https://www.aozorabank.co.jp/).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
