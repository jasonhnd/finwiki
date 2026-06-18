---
source: banking/ui-bank
source_hash: 05f637f0ed938df2
lang: en
status: machine
fidelity: ok
title: "UI Bank operating profile (UI銀行 / きらぼし FG group)"
translated_at: 2026-06-18T23:33:48.350Z
---

# UI Bank operating profile (UI銀行 / きらぼし FG group)

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the operating-profile companion to the entity anchor at [[regional-banks/ui-bank|UI銀行 entity anchor]]. Read it within the segment map at [[banking/japan-net-bank-competition-map|Japan net bank competition map]], next to the regional-digital-bank peers [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[regional-banks/01-bank|01 Bank]], with the parent context at [[regional-banks/kiraboshi-fg|東京きらぼし FG]] and [[regional-banks/kiraboshi-bank|きらぼし銀行]], and against the ecosystem net-bank cohort [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] for the broader smartphone-first banking distribution comparison. Pair it with [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] for the regional-group digital-strategy view.

## TL;DR

UI銀行 (UI Bank Co., Ltd.) is the smartphone-first digital-bank subsidiary of [[regional-banks/kiraboshi-fg|東京きらぼし FG]], opened on **2022-01-04** as the group's standalone digital bank. Its strategic logic is that the parent regional bank ([[regional-banks/kiraboshi-bank|きらぼし銀行]]) covers Tokyo-centric branch banking, while UI Bank takes the nationwide, smartphone-only customer journey that the legacy branch network cannot serve cost-effectively. UI Bank is one of three meaningful regional-group digital banks alongside [[banking/minna-bank-baas-model|Minna Bank]] ([[regional-banks/fukuoka-fg|Fukuoka FG]]) and [[regional-banks/01-bank|01 Bank]] ([[megabanks/saitama-resona-bank|Saitama Resona]] / Resona group), each with a distinct architectural read: Minna Bank specialises in BaaS partner-channel distribution, 01 Bank focuses on Resona-group cross-sell, UI Bank emphasises smartphone-first life-partner financial UX with API connectivity. Deposit balance has grown steadily since 2022 opening but remains sub-trillion-yen (approximately ¥0.7 trillion / ¥6,952億 as of 2025-03-31), an order of magnitude smaller than ecosystem-bank peers ([[banking/rakuten-bank|Rakuten Bank]] ¥11.5tn / [[banking/paypay-bank|PayPay Bank]] ¥1.9tn / [[banking/au-jibun-bank|au Jibun]] ¥4tn+ at the same date). Tactical positioning emphasises the convergence of bank, savings, payment, and lifestyle services through a single mobile-first UX layer.

## 1. Identity and group position

| Item | Reading |
|---|---|
| Legal name | 株式会社UI銀行 |
| English name | UI Bank Co., Ltd. |
| Opening | 2022-01-04 |
| Bank-license category | 普通銀行 (ordinary bank under 銀行法), classed under FSA "その他の銀行" |
| Parent | [[regional-banks/kiraboshi-fg|東京きらぼし FG]] (100%) |
| Sister bank | [[regional-banks/kiraboshi-bank|きらぼし銀行]] — the parent group's primary regional bank (Tokyo-centred) |
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
| Partner connection | Connectivity to external 電子決済等代行業者 (payment intermediaries) via API, plus group-service linkage (e.g. ララ Pay プラス, きらぼし銀行 account linkage for UI プラス tiers) |

### Loans and credit

UI Bank launched deposit-first (initially deposit-focused at 2022 opening) and has since built out a retail-loan menu: smartphone loan (UI プラン), free loan, auto loan, education loan, renovation loan, doctor loan, consolidation loan, an overdraft facility (UI サポート / 当座貸越), and housing loan — i.e. a consumer / retail lending set rather than a megabank-scale corporate-loan franchise. Specific product menus evolve; refer to UI Bank's current product page for the active menu.

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

| Dimension | UI Bank (this entry) | [[banking/minna-bank-baas-model|Minna Bank]] | [[regional-banks/01-bank|01 Bank]] |
|---|---|---|---|
| Parent group | [[regional-banks/kiraboshi-fg|東京きらぼし FG]] | [[regional-banks/fukuoka-fg|Fukuoka FG]] | [[megabanks/resona-hd|Resona HD]] / [[megabanks/saitama-resona-bank|Saitama Resona]] |
| Opening | 2022-01 | 2021-05 | Later launch |
| Channel architecture | Smartphone + web | BaaS partner journeys + direct app | Resona-group cross-sell + direct app |
| Strategic axis | Smartphone-first life-partner banking + API | Full BaaS — partner brands own the customer journey | Group-customer digital adjunct |
| BaaS depth | Lighter | Heaviest of the three | Lighter |
| Direct UX maturity | Growing | Strong app UX | Growing |

## 4. KPI and franchise shape

UI Bank publishes selective KPI updates through きらぼし FG IR materials and its own disclosure publications; point-in-time deposit balance and account count appear there. The franchise pattern through the early years post-launch is:

| Metric | Pattern |
|---|---|
| Account count | ~73,000 accounts as of 2023-03-31; growing but an order of magnitude below ecosystem-bank peers (and far below the ~2.7-3.0m 3-year target floated at 2022 opening) |
| Deposit balance | ~¥6,952億 (≈¥0.7tn) as of 2025-03-31 — sub-trillion-yen, well below [[banking/rakuten-bank|Rakuten Bank]] (¥11.5tn) or [[banking/paypay-bank|PayPay Bank]] (¥1.9tn) |
| Loan book | Retail / consumer-loan focus (smartphone loan, free / auto / housing loans); modest in absolute terms |
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
- [[regional-banks/ui-bank]]
- [[regional-banks/kiraboshi-fg]]
- [[regional-banks/kiraboshi-bank]]
- [[regional-banks/01-bank]]
- [[financial-licenses/bank-license-and-baas-boundary]]

## Sources

- UI Bank corporate / product site (https://www.uibank.co.jp/).
- UI Bank corporate-information page (https://www.uibank.co.jp/info/).
- UI Bank UI プラス / service page — loan menu (UI プラン smartphone loan, free / auto / housing / doctor loans, UI サポート overdraft), API-connected 電子決済等代行業者 linkage, time deposits (https://www.uibank.co.jp/service/uiplus/).
- Wikipedia「UI銀行」— 預金残高 6,952億円 (2025-03-31), 口座数 73,000 (2023-03-31), 開業, 3-year targets (https://ja.wikipedia.org/wiki/UI銀行, 2026-05-29 確認).
- 銀行の預金残高ランキング（アルビノ）— UI銀行 6,865億円 / PayPay銀行 1兆9,122億円 / 楽天銀行 11兆4,763億円, いずれも 2025-03 (https://www.albino.co.jp/bank-deposit-balance-ranking/).
- Tokyo Kiraboshi Financial Group corporate / IR site (https://www.tokyo-kiraboshifg.co.jp/).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
