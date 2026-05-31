---
source: banking/regional-bank-api-digital-partnership-route
source_hash: 3c92735c9cbf1e8e
lang: en
status: machine
fidelity: ok
title: "Regional bank API and digital partnership route in Japan"
translated_at: 2026-05-31T03:19:56.450Z
---

# Regional bank API and digital partnership route in Japan

## Overview

Regional-bank digital partnership in Japan is not just "a bank app." It is split into electronic payment agency API contracts, shared API platforms, bank-owned apps, accounting / treasury integrations, BaaS-style bank partnerships, and account-direct payment rails.

Use this page with [[payments/japan-bank-api-payment-agency-route|bank API route]], [[payments/japan-bank-api-incident-and-fraud-control|bank API incident controls]], [[banking/baas-japan-landscape|BaaS Japan landscape]], [[banking/regional-bank-consolidation-pattern|regional bank consolidation]], [[payments/account-to-account-payment-japan|account-to-account payments]], and [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]].

## Route Map

| Route | Bank-side actor | Partner type | API / service function | Regulatory hook |
|---|---|---|---|---|
| Registered electronic payment agency API | Regional bank | Accounting, PFM, treasury, payment, cash-management app | Balance, transaction history, transfer instruction depending on scope. | FSA electronic payment agency registration and bank API contract disclosure. |
| Shared regional API platform | Regional-bank alliance / system subsidiary | Common API platform and system vendor | Same-spec or shared connection layer for multiple banks. | JBA open API contract / principles plus individual bank policy. |
| Official regional-bank app | Regional bank and app operator | Bank app, group fintech subsidiary, regional-service platform | Account view, transfers, points, debit, savings, local-commerce features. | Bank license, outsourcing, electronic payment agency / bank agency route if applicable. |
| BaaS / embedded service | Bank or digital-bank partner | Non-bank platform or fintech | Account / payment / identity / balance UX embedded in another service. | Bank license plus API / agency / intermediary contracts. |
| Account-direct payment | Regional bank plus payment network | Bank Pay / J-Debit / account-direct merchant route | Merchant payment from bank account. | [[payments/account-to-account-payment-japan|A2A route]] and [[payments/merchant-bank-pay-account-direct-acquiring|merchant acquiring controls]]. |

## Regional Examples

| Example | Public relevance |
|---|---|
| [[JapanFG/yokohama-bank|Yokohama Bank]] API disclosure | Publicly lists electronic payment agency API contract route and user-compensation language. |
| TSUBASA FinTech common platform | Shows regional-bank alliance approach to shared API / digital-service platform infrastructure. |
| [[JapanFG/chiba-bank|Chiba Bank]] / TSUBASA participants | Illustrates how regional banks can pool technology while remaining separate banking entities. |
| [[JapanFG/fukuoka-fg|Fukuoka FG]] / iBank style route | Shows regional bank group app / platform strategy beyond a plain account-view app. |
| [[JapanFG/freee|freee]] and [[JapanFG/money-forward|Money Forward]] | Common accounting / PFM integration anchors for regional bank API analysis. |

## Control Questions

| Question | Public relevance |
|---|---|
| Who has electronic payment agency registration? | API access is not only a bank's technical choice; it is a registered-actor route. |
| Is the API read-only or instruction-capable? | Account-information and payment-instruction risks differ. |
| Is the connection direct to one bank or via a shared platform? | Operational concentration and vendor dependency differ. |
| Does the bank outsource API system operation? | Outsourcing and incident responsibility matter. |
| Is the app bank-owned, bank-partnered, or third-party? | Legal entity and user-compensation path can differ from UX branding. |
| Does the flow create wallet balance or only bank-account movement? | Payment Services Act classification can change. |

## JapanFG Relevance

- [[JapanFG/yokohama-bank|Yokohama Bank]], [[JapanFG/chiba-bank|Chiba Bank]], [[JapanFG/chugoku-bank|Chugoku Bank]], [[JapanFG/tsukuba-bank|Tsukuba Bank]], and TSUBASA-linked regional banks are useful API-platform anchors.
- [[JapanFG/fukuoka-fg|Fukuoka FG]] and [[banking/minna-bank-baas-model|Minna Bank BaaS model]] show a more platform-native regional-bank direction.
- [[JapanFG/freee|freee]] and [[JapanFG/money-forward|Money Forward]] is cross-linked when account data / accounting integration is the core use case.
- [[payments/japan-bank-api-incident-and-fraud-control|Bank API incident controls]] be used before treating bank API integration as a low-risk convenience feature.

## Research Checklist

1. Identify the bank, partner, API function, and service brand.
2. Check the FSA electronic payment agency registry and the bank's API disclosure page.
3. Distinguish read-only information APIs from update / transfer-instruction APIs.
4. Check whether the system is a bank-specific API or shared alliance / vendor platform.
5. Link payment functions to [[payments/account-to-account-payment-japan|A2A payment route]] and wallet functions to [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]].

## Related

- [[banking/INDEX]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[banking/baas-japan-landscape]]
- [[banking/minna-bank-baas-model]]
- [[banking/regional-bank-consolidation-pattern]]
- [[payments/account-to-account-payment-japan]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/yokohama-bank]]
- [[JapanFG/chiba-bank]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: electronic payment agency registry.
- Japanese Bankers Association: Open API council and model API contract.
- Bank of Yokohama: API / electronic payment agency collaboration disclosure.
- Bank of Japan workshop material referencing TSUBASA FinTech common platform.
- Tsukuba Bank: TSUBASA FinTech common platform / app renewal release.
