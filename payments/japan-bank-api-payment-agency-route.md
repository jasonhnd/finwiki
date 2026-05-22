---
title: "Japan bank API and electronic payment agency route"
aliases:
  - "japan-bank-api-payment-agency-route"
  - "Japan bank API route"
  - "electronic payment agency Japan"
  - "電子決済等代行業 route"
domain: "payments"
created: 2026-05-22
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-22
confidence: likely
tags: [payments, bank-api, electronic-payment-agency, open-api, banking, fintech]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyo.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/dendai.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/dendai.xlsx"
  - "https://www.fsa.go.jp/koueki/koueki10h.html"
  - "https://www.zenginkyo.or.jp/fileadmin/res/abstract/council/openapi/openapi_text_1.pdf"
  - "https://www.fapi.or.jp/link/"
---

# Japan bank API and electronic payment agency route

## Overview

Japan's bank API / electronic payment agency route is the legal and operating bridge between banks and fintech apps that obtain account information, initiate account-linked instructions, or connect customer-facing services to deposit-account rails. It is not the same as being a bank, funds-transfer service provider, prepaid issuer, card acquirer, or wallet operator.

Use this page with [[payments/INDEX|payments domain]], [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]], [[payments/account-to-account-payment-japan|Japan account-to-account payment route]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], [[banking/baas-japan-landscape|BaaS Japan landscape]], and [[banking/mercari-bank-license-stack|Mercari Bank license stack]].

## Route Map

| Role | What it does | What it is not |
|---|---|---|
| Bank | Holds deposits, maintains accounts, and executes bank-account ledger movement. | Not merely an app front end. |
| Electronic payment agency operator | Connects to banks for account information / payment-instruction related services under the registered electronic payment agency route. | Not automatically a funds-transfer operator or prepaid issuer. |
| Funds-transfer operator | Moves funds under the Payment Services Act route. | Not automatically allowed to access bank APIs without the relevant bank / legal route. |
| Prepaid issuer | Issues stored-value instruments. | Not an account-information or payment-instruction service by itself. |
| BaaS / embedded finance app | Gives bank-like UX through a partner bank or licensed stack. | Not necessarily the licensed bank or electronic payment agency operator. |
| PSP / merchant gateway | Provides merchant acceptance and settlement services. | Not necessarily the account-information / bank API actor. |

## Source Stack

| Source | What it proves |
|---|---|
| FSA license portal | Official entry point for electronic payment agency operators and related licensed / registered financial institutions. |
| FSA electronic payment agency list | Whether a named operator appears in the checked electronic payment agency registry. |
| FSA authorized electronic payment agency association list | Whether a self-regulatory / association route exists for the category. |
| JBA Open API model contract document | Practical bank / electronic payment agency contract issues and API-use pattern. |
| FAPI association links | Industry navigation surface for regulation and technical standard discussions. |

For a live company conclusion, check the exact legal name, registration number, as-of date, service scope, and bank API contract disclosure. Do not infer registration from a marketing page alone.

## Product Boundary

| Product / flow | First question | Typical wiki route |
|---|---|---|
| Account aggregation / PFM | Is the app obtaining bank account information with user consent? | Electronic payment agency route plus bank API / contract disclosure. |
| Payment initiation from bank account | Who receives the user instruction and who executes the bank-account movement? | Electronic payment agency route, [[payments/account-to-account-payment-japan|A2A payment route]], and bank page. |
| Wallet top-up from bank account | Does value move into a wallet balance after account debit? | [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]. |
| Merchant QR account-direct payment | Is the merchant payment Bank Pay / account-direct or wallet balance? | [[payments/merchant-bank-pay-account-direct-acquiring|merchant account-direct acquiring]]. |
| Embedded bank account UX | Is the bank account held by the app company or partner bank? | [[banking/baas-japan-landscape|BaaS Japan landscape]]. |
| Stablecoin / EPI handling | Is the instrument an electronic payment instrument or crypto asset? | [[fintech/japan-ecisb-license|ECISB]] and [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]]. |

## JapanFG Relevance

- [[JapanFG/mufg-bank|MUFG Bank]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]], [[JapanFG/mizuho-bank|Mizuho Bank]], and [[JapanFG/resona-bank|Resona Bank]] matter because fintech account-linking depends on bank API / contract acceptance.
- [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/money-forward|Money Forward]], and [[JapanFG/freee|freee]] are examples of entities where account information, accounting, payment, and API routes can become strategically important.
- [[JapanFG/merpay|Merpay]], [[JapanFG/paypay|PayPay]], and [[JapanFG/au-payment|au PAY]] be separated into wallet / funds-transfer / prepaid / account-direct / bank API layers rather than treated as one "payment app" category.
- [[banking/mercari-bank-license-stack|Mercari Bank license stack]] is the clearest internal route for showing how a bank partner, app UX, and payment account can be split.

## Control Questions

| Question | Public relevance |
|---|---|
| Is the operator registered as an electronic payment agency operator? | Registration is category-specific and must be checked in the FSA list. |
| Which bank APIs are used? | Bank API contracts and scopes vary by bank and service. |
| Is the service read-only or instruction-capable? | Information retrieval and payment / transfer instruction have different risk surfaces. |
| Who authenticates the user? | Bank authentication, app authentication, and consent management can be split. |
| Who bears unauthorized transaction risk? | User protection, bank liability, app liability, and fraud response depend on the legal / contract route. |
| Does value ever sit with the app? | If yes, funds-transfer / prepaid / wallet classification may be needed. |
| Is the merchant involved? | Merchant acceptance adds PSP / acquiring / settlement risk. |

## Risks and Caveats

- Registration does not prove every API or payment function is active.
- A bank-linked UX can hide whether the app is only reading data, initiating instructions, moving funds, or holding wallet balance.
- Screen-scraping, tokenized API access, and contract-based API use are not interchangeable.
- Customer consent and authentication are operational controls, not just onboarding screens.
- Bank API outages can become payment, accounting, payroll, or reconciliation failures downstream.
- The electronic payment agency route is separate from electronic payment instrument / stablecoin routes.

## Research Checklist

1. Identify the legal entity, service name, and bank partners.
2. Check the FSA electronic payment agency registry.
3. Check whether the service is information-only, instruction-capable, or both.
4. Check whether value is stored, remitted, prepaid, or only instructed.
5. Check public API / bank partner disclosures and any user protection notices.
6. Link the company page to [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] and to the relevant payment or banking route.

## Related

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[banking/baas-japan-landscape]]
- [[banking/mercari-bank-license-stack]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/money-forward]]
- [[JapanFG/freee]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: licensed / registered institutions portal.
- FSA: electronic payment agency operator registry.
- FSA: authorized electronic payment agency association list.
- Japanese Bankers Association: model API contract document.
- FAPI association: official link collection.
