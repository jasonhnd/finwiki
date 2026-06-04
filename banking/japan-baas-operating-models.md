---
title: "Japan BaaS operating models"
aliases:
  - "Japan BaaS operating models"
  - "BaaS operating models Japan"
  - "日本 BaaS operating models"
  - "banking/baas-rakuten-jre-bank"
domain: "banking"
created: 2026-05-22
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-22
confidence: likely
tags: [banking, BaaS, embedded-finance, bank-api, neobank, japan]
status: active
sources:
  - "https://baas.minna-no-ginko.com/"
  - "https://www.minna-no-ginko.com/alliance-service/"
  - "https://www.netbk.co.jp/contents/neobank/"
  - "https://gmo-aozora.com/company/outline.html"
  - "https://gmo-aozora.com/business/service/pdf/api-spec-webhooks.pdf"
  - "https://www.uibank.co.jp/cqbank/"
  - "https://www.fsa.go.jp/common/shinsei/dendai/index.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/dendai.pdf"
  - "https://www.zenginkyo.or.jp/abstract/council/openapi/"
---

# Japan BaaS operating models

## Overview

Japan BaaS can be described by customer ownership, deposit-contract holder, UI controller, API provider, KYC / AML / fraud-monitoring responsibility, and license stack. A partner-branded app can present a banking UX while the bank account legally remains with a licensed bank.

This page sits under [[banking/INDEX|banking domain]] as the operating-model companion to [[banking/baas-japan-landscape|Japan BaaS landscape]]. It links to [[banking/minna-bank-baas-model|Minna Bank BaaS model]], [[banking/mercari-bank|Mercari Bank]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]], [[banking/quick-deposit-four-methods|quick deposit four methods]], [[regional-banks/ssnb|SSNB]], [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]], [[regional-banks/ui-bank|UI Bank]], [[banking/japan-net-bank-competition-map|Japan net bank competition map]], and [[banking/regional-bank-api-digital-partnership-route|regional bank API route]].

## Operating-Model Matrix

| Model | Customer-facing surface | Deposit contract | Typical example | Main analytical issue |
|---|---|---|---|---|
| API-provided banking | Partner app embeds transfers, balance, payment, or account-linking | Licensed bank | [[banking/minna-bank-baas-model|Minna Bank API]], quick-deposit routes | API consent, electronic payment agency, AML / fraud split. |
| Partner branch | Bank app or bank account experience carries partner brand / branch | Licensed bank | Minna Bank partner branches | Partner marketing versus bank legal responsibility. |
| Full-banking white-label / NEOBANK | Partner brand distributes a fuller bank-account proposition | Licensed bank | [[regional-banks/ssnb|SSNB]] NEOBANK | Who owns customer relationship, account economics, and support. |
| Corporate API bank | Business account and payment workflows are embedded into SaaS / accounting / platform ops | Licensed bank | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] | API reliability, treasury operations, SME KYC, webhook / integration risk. |
| Bank-agent route | Non-bank or adjacent bank partner introduces / handles banking service under bank-agent structure | Licensed bank | [[regional-banks/ui-bank|UI Bank]] / CQ BANK-style route | Agency authority and customer explanation boundary. |
| Narrow BaaS | One banking function, such as quick deposit or direct account charge | Licensed bank plus payment / API layer | [[banking/quick-deposit-four-methods|quick deposit]] | Narrow utility can be valuable without full bank relationship. |

## Legal Stack Versus UX Stack

In Japan, the legal stack and UX stack often diverge:

- The customer may open an account through a partner brand, but the deposit is owed by the bank.
- The partner may control the app journey, but KYC, AML, suspicious-transaction monitoring, and account controls remain bank-grade obligations.
- Account-information and payment-instruction APIs may touch the electronic payment agency route.
- A wallet balance, prepaid balance, or funds-transfer balance is not the same as a bank deposit.
- A securities / crypto / payment app can embed bank transfers without becoming a bank.

Related legal and payment routes include [[payments/japan-bank-api-payment-agency-route|bank API payment agency route]], [[payments/account-to-account-payment-japan|account-to-account payment Japan]], and [[fintech/japan-financial-regulation|Japan financial regulation]].

## Case Set

### Minna Bank

[[banking/minna-bank-baas-model|Minna Bank]] publicly separates API-provided banking and partner-branch models. Public partner categories include retail, creative marketplaces, securities, insurance, FX, entertainment, and C2C platforms.

### SSNB NEOBANK

[[regional-banks/ssnb|SSNB]] NEOBANK is a full-banking BaaS model. It provides partner-branded bank account experiences and can connect deposits, transfers, lending, cards, and securities-adjacent functions.

### GMO Aozora

[[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] is the corporate API / SME operating model. Its BaaS value sits in account opening, transfers, payment operations, accounting integration, API / webhook workflows, and startup / platform treasury.

### UI Bank / CQ BANK

[[regional-banks/ui-bank|UI Bank]] is a bank-agent / regional-group digital-bank example. It uses an app and partner channel to create a digital account surface while deposit-taking remains a bank function.

## Responsibility Boundary

| Responsibility | Usually sits with | Notes |
|---|---|---|
| Deposit liability | Licensed bank | Partner brand and deposit obligor can be separate. |
| UI / user acquisition | Partner, bank, or both | Determines CAC and data access. |
| KYC / AML | Bank, sometimes with partner support | Outsourcing support does not remove bank responsibility. |
| Fraud / incident response | Bank plus partner ops | API incidents require coordinated response. |
| Customer support | Bank, partner, or split | Important for complaints and operational risk. |
| Data use / consent | Bank and partner under relevant privacy / API terms | Critical for embedded-finance monetization. |
| Economic upside | Bank, partner, or revenue share | Depends on deposits, lending, fees, and cross-sell. |

## Public Data Fields

1. Partner customer segment and account activity.
2. Deposits, lending, payments, securities, insurance, and account count.
3. API / operational-risk disclosure and service-level information.
4. Regulated bank identification and customer protection route.
5. Bank-agent, electronic payment agency, funds-transfer, prepaid, securities, or insurance distribution category where publicly disclosed.

## Related

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[banking/japan-net-bank-competition-map]]
- [[regional-banks/ssnb]]
- [[payment-firms/gmo-aozora-net]]
- [[regional-banks/ui-bank]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[INDEX|FinWiki index]]

## Sources

- Minna Bank: BaaS and alliance-service pages.
- SSNB: NEOBANK BaaS pages.
- GMO Aozora Net Bank: company and API specification pages.
- UI Bank / CQ BANK public pages.
- FSA: electronic payment agency system and registry.
- Japanese Bankers Association: Open API council materials.
