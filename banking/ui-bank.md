---
title: "UI Bank operating profile (UI銀行 / きらぼし FG 系)"
aliases:
  - "banking/ui-bank"
  - "UI Bank operating profile"
  - "UI銀行 operating profile"
  - "UI Bank Co., Ltd."
  - "Kiraboshi UI Bank"
domain: banking
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [banking, net-bank, digital-bank, regional-bank-group, kiraboshi-fg, smartphone-first]
status: active
sources:
  - "https://www.uibank.co.jp/"
  - "https://www.uibank.co.jp/info/"
  - "https://www.tokyo-kiraboshifg.co.jp/"
  - "https://www.tokyo-kiraboshifg.co.jp/ir/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
---

# UI Bank operating profile (UI銀行 / きらぼし FG 系)

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the operating-profile companion to the entity anchor at [[JapanFG/ui-bank|UI銀行 entity anchor]]. Read it within the segment map at [[banking/japan-net-bank-competition-map|Japan net bank competition map]], next to the regional-digital-bank peers [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[JapanFG/01-bank|01 Bank]], with the parent context at [[JapanFG/kiraboshi-fg|東京きらぼし FG]] and [[JapanFG/kiraboshi-bank|きらぼし銀行]], and against the ecosystem net-bank cohort [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] for the broader smartphone-first banking distribution comparison. Pair it with [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] for the regional-group digital-strategy view.

## TL;DR

UI銀行 (UI Bank Co., Ltd.) is the smartphone-first digital-bank subsidiary of [[JapanFG/kiraboshi-fg|東京きらぼし FG]], opened on **2022-01-04** as the group's standalone digital bank. Its strategic logic is that the parent regional bank ([[JapanFG/kiraboshi-bank|きらぼし銀行]]) covers Tokyo-centric branch banking, while UI Bank takes the nationwide, smartphone-only customer journey that the legacy branch network cannot serve cost-effectively. UI Bank is one of three meaningful regional-group digital banks alongside [[banking/minna-bank-baas-model|Minna Bank]] ([[JapanFG/fukuoka-fg|Fukuoka FG]]) and [[JapanFG/01-bank|01 Bank]] ([[JapanFG/saitama-resona-bank|Saitama Resona]] / Resona group), each with a distinct architectural read: Minna Bank specialises in BaaS partner-channel distribution, 01 Bank focuses on Resona-group cross-sell, UI Bank emphasises smartphone-first life-partner financial UX with API connectivity. Deposit balance has grown steadily since 2022 opening, though absolute scale remains much smaller than ecosystem-bank peers ([[banking/rakuten-bank|Rakuten]] / [[banking/paypay-bank|PayPay]] / [[banking/au-jibun-bank|au Jibun]]). ^[ambiguous] Tactical positioning emphasises the convergence of bank, savings, payment, and lifestyle services through a single mobile-first UX layer.

## 1. Identity and group position

| Item | Reading |
|---|---|
| Legal name | 株式会社UI銀行 |
| English name | UI Bank Co., Ltd. |
| Opening | 2022-01-04 |
| Bank-license category | 普通銀行 (ordinary bank under 銀行法), classed under FSA "その他の銀行" |
| Parent | [[JapanFG/kiraboshi-fg|東京きらぼし FG]] (100%) |
| Sister bank | [[JapanFG/kiraboshi-bank|きらぼし銀行]] — the parent group's primary regional bank (Tokyo-centred) |
| HQ | Tokyo |
| Channel architecture | Smartphone app + web; no physical branches |
| Primary regulator | 金融庁 (FSA) |

### Why a separate license from きらぼし銀行

1. **Cost-base separation.** A new license can build on cloud-native core banking without inheriting the legacy IT and branch-overhead cost base of きらぼし銀行.
2. **Customer-segment specialisation.** UI Bank can be designed end-to-end for smartphone-first users without the design compromises of a legacy-branch-and-app dual-mode bank.
3. **Regulatory clarity.** A standalone license allows distinct capital, risk, and BaaS-partnership disclosure, which is harder when digital business is bundled inside a regional bank's segment reporting.

### Group structure

```
東京きらぼし FG (TSE Prime, 7173)
  ├── きらぼし銀行 (regional bank, Tokyo-centred branch network)
  ├── UI Bank (this entry — nationwide smartphone-first digital bank)
  └── Other group financial subsidiaries
```

### Account, deposit, payment

| Product | Role |
|---|---|
| Yen ordinary deposit | Core account, opened end-to-end in-app |
| Yen time deposit | Promotional rates positioned to attract primary deposits |
| Transfer / 振込 | Both intra-UI Bank and external via 全銀システム |
| Debit card | UI Bank–branded debit card linked to the account |
| Account-aggregation / partner connection | Connectivity to external services via API integration ^[ambiguous] |

### Loans and credit

UI Bank's lending posture has been measured — a standard smartphone-first bank product set including personal-loan / card-loan capacity, rather than a megabank-scale mortgage or corporate-loan franchise. Specific product menus evolve quickly; refer to UI Bank's current product page for the active menu. ^[ambiguous]

### Smartphone-first UX

The UX architecture explicitly bundles bank account, deposit, payment, transfer, and 生活パートナー (lifestyle partner) features into a single app. The "対面・非対面のハイブリッド" framing means UI Bank can integrate to in-store touchpoints when partnered with きらぼし銀行 corporate clients or external alliances, but the default surface is mobile-only. ^[extracted]

### Where UI Bank competes

| Axis | Position |
|---|---|
| Smartphone-first deposit growth | Active; account-opening flow optimised for in-app onboarding |
| Cross-sell with きらぼし銀行 corporate clients | Possible via group linkage — employer-pay schemes, corporate payroll, partner-business linkages |
| Lifestyle / partner-service integration | Differentiating UX axis vs ecosystem-points-led peers |
| Geographic reach | Nationwide via mobile (vs きらぼし銀行 Tokyo focus) |

### Three-bank regional-digital comparison

| Dimension | UI Bank (this entry) | [[banking/minna-bank-baas-model|Minna Bank]] | [[JapanFG/01-bank|01 Bank]] |
|---|---|---|---|
| Parent group | [[JapanFG/kiraboshi-fg|東京きらぼし FG]] | [[JapanFG/fukuoka-fg|Fukuoka FG]] | [[JapanFG/resona-hd|Resona HD]] / [[JapanFG/saitama-resona-bank|Saitama Resona]] |
| Opening | 2022-01 | 2021-05 | Later launch |
| Channel architecture | Smartphone + web | BaaS partner journeys + direct app | Resona-group cross-sell + direct app |
| Strategic axis | Smartphone-first life-partner banking + API | Full BaaS — partner brands own the customer journey | Group-customer digital adjunct |
| BaaS depth | Lighter | Heaviest of the three | Lighter |
| Direct UX maturity | Growing | Strong app UX | Growing |

## 4. KPI and franchise shape

UI Bank publishes selective KPI updates through きらぼし FG IR materials. Point-in-time deposit balance, account count, and lending-book figures appear in the parent's quarterly disclosure and the bank's own disclosure publications. ^[ambiguous] The franchise pattern through the early years post-launch is:

| Metric | Pattern |
|---|---|
| Account count | Growing steadily; absolute level materially below ecosystem-bank peers |
| Deposit balance | Trillion-yen-class trajectory but well below [[banking/rakuten-bank|Rakuten Bank]] or [[banking/paypay-bank|PayPay Bank]] |
| Loan book | Personal-loan / card-loan focus; modest in absolute terms |
| Capital | Above 銀行法 minimum; relatively low business-risk balance sheet for a young digital bank |

## 5. Regulatory and policy boundary

| Layer | Statute / regulator | Implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 | Standard ordinary-bank supervision applied to a digital-only bank |
| Open Banking API | 2017 銀行法 改正 | API provision obligations; UI Bank's connectivity story leverages this regime |
| Deposit insurance | 預金保険機構 | Standard JPY deposit insurance coverage |
| Cybersecurity / IT resilience | FSA IT 統合的監督指針 + サイバーセキュリティ報告 | Digital-only banks face heightened IT-resilience expectations |
| AML / CFT | 金融庁 + FATF 第 4 次審査 | Online-onboarding eKYC compliance heightened post-FATF review |
| Parent-bank consolidation | 銀行法 + 金融商品取引法 — Resona-like holdings rules | Consolidated supervision through きらぼし FG |

## Related

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/japan-baas-operating-models]]
- [[banking/sony-bank]] · [[banking/daiwa-next-bank]] · [[banking/gmo-aozora-net-bank]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[JapanFG/ui-bank]]
- [[JapanFG/kiraboshi-fg]]
- [[JapanFG/kiraboshi-bank]]
- [[JapanFG/01-bank]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]

## Sources

- UI Bank corporate / product site (https://www.uibank.co.jp/).
- UI Bank corporate-information page (https://www.uibank.co.jp/info/).
- Tokyo Kiraboshi Financial Group corporate / IR site (https://www.tokyo-kiraboshifg.co.jp/).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
