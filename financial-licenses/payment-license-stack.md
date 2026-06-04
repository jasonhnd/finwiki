---
title: "Japan payment license stack"
aliases:
  - "Japan payment license stack"
  - "payment license stack Japan"
  - "日本 決済 license stack"
domain: financial-licenses
subdomain: "legal-financial-licenses"
created: 2026-05-22
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-22
confidence: likely
tags: [JapanFG, legal, payments, funds-transfer, prepaid, EPI, bank-api]
status: active
sources:
  - "https://laws.e-gov.go.jp/law/421AC0000000059"
  - "https://www.fsa.go.jp/menkyo/menkyo.html"
  - "https://www.fsa.go.jp/common/shinsei/shikinidou.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://www.fsa.go.jp/policy/prepaid/index.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf"
  - "https://www.fsa.go.jp/news/27/sonota/20151214-2.html"
  - "https://www.fsa.go.jp/access/r2/213.html"
  - "https://www.fsa.go.jp/policy/virtual_currency02/"
  - "https://www.fsa.go.jp/common/shinsei/torihiki.html"
  - "https://www.fsa.go.jp/common/shinsei/dendai/dentori.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# Japan payment license stack

## Overview

Japan payment products can combine several public-regulatory categories: funds transfer, prepaid payment instruments, electronic payment agency, electronic payment instruments, electronic payment handling, credit / installment sales, card acquiring, and bank-account direct payment. A wallet, checkout product, code-payment service, or stablecoin-linked service can therefore have more than one legal route.

This page belongs to [[financial-licenses/INDEX|JapanFG legal / financial licenses]] and links to [[payments/INDEX|payments domain]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]], [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]], [[payments/credit-purchase-card-operators-japan-index|credit / card registry]], [[payments/japan-bank-api-payment-agency-route|bank API route]], [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]], [[fintech/japan-ecisb-license|Japan ECISB license]], and [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]].

## License Stack Matrix

| Function | Main public category | Primary law / route | Approval / registration | FinWiki route |
|---|---|---|---|---|
| Non-bank remittance / wallet transfer | `資金移動業者` | Payment Services Act | Registration | [[payments/funds-transfer-service-providers-japan-index]] |
| Stored value for third-party payments | Third-party prepaid payment instrument issuer | Payment Services Act | Prior registration | [[payments/prepaid-payment-instrument-issuers-japan-index]] |
| Self-use stored value | Self-use prepaid payment instrument issuer | Payment Services Act | Filing after threshold conditions | [[payments/funds-transfer-vs-prepaid-boundary]] |
| Bank account information / payment instruction | `電子決済等代行業者` | Banking Act route | Registration | [[payments/japan-bank-api-payment-agency-route]] |
| Stablecoin / EPI sale, exchange, intermediation, custody-like handling | `電子決済手段等取引業者` | Payment Services Act | Registration | [[fintech/japan-ecisb-license]] |
| Bank-commissioned electronic deposit-claim handling | `電子決済等取扱業` | Banking Act route | Registration | [[financial-licenses/bank-license-and-baas-boundary]] |
| Credit card / installment / BNPL | Installment Sales Act / credit-purchase route | METI route | Registration where applicable | [[payments/credit-purchase-card-operators-japan-index]], [[payments/japan-bnpl-credit-purchase-boundary]] |
| Merchant PSP / acquiring | Merchant-contracting / PSP / card acquiring route | Installment Sales Act, card rules, service terms | Depends on role | [[payments/card-acquiring-japan-stack]], [[payments/psp-merchant-settlement-risk]] |
| Bank-account direct payment | Bank Pay / J-Debit / Cotra / bank direct debit route | Network / scheme / bank-account route | Participant and scheme route | [[payments/account-to-account-payment-japan]] |

## Funds Transfer Route

The funds-transfer route is a Payment Services Act registration category for non-bank remittance. FSA materials identify the current three-type structure:

| Type | Public description in FSA materials | Boundary field |
|---|---|---|
| Type I | Route for transfer needs above JPY 1 million | Higher-value funds-transfer category. |
| Type II | Legacy core funds-transfer category | Main non-bank remittance / wallet-transfer category. |
| Type III | Lower-value transfer route | Low-value transfer category. |

Public verification uses the FSA funds-transfer page, FSA funds-transfer list, entity terms, and registration number. The balance is not recorded as a bank deposit unless the product terms and legal entity identify a licensed bank deposit route.

## Prepaid Payment Instrument Route

The prepaid route is a Payment Services Act route for stored value. The main public split is between self-use and third-party prepaid payment instruments.

| Category | Public field | Public verification |
|---|---|---|
| Self-use prepaid instrument | Issuer and eligible merchant / service scope are linked to the issuer's own group or own service route. | FSA prepaid Q&A, issuer disclosure, terms. |
| Third-party prepaid instrument | Stored value can be used with third-party merchants or services under the instrument route. | FSA third-party prepaid issuer list and service terms. |
| Self-use threshold field | FSA Q&A states that a self-use issuer has filing duties once unused balance exceeds JPY 10 million on the base date. | FSA FinTech Support Desk Q&A and issuer records. |
| Third-party approval field | Third-party prepaid issuer route uses prior registration. | FSA third-party prepaid issuer list. |

The prepaid route is a merchant-payment / stored-value route. It is separate from general remittance unless another route, such as funds transfer, is also present.

## Electronic Payment Instrument Route

The Payment Services Act side uses `電子決済手段等取引業者` for electronic payment instruments transaction business. Public FSA EPI materials connect this route to stablecoin / electronic-payment-instrument sale, purchase, exchange, intermediation, and custody-like handling.

The Banking Act side uses `電子決済等取扱業` for bank-commissioned electronic handling of deposit claims. This route is recorded separately in [[financial-licenses/bank-license-and-baas-boundary|Japan bank license and BaaS boundary]] because the public legal category is not the same as the Payment Services Act EPI transaction route.

## Product-Layer Examples

| Product surface | Possible legal components |
|---|---|
| QR wallet | Funds-transfer registration, prepaid issuer registration, merchant PSP / acquiring, bank API, credit-card linkage. |
| Travel wallet | Funds transfer, prepaid, foreign-exchange / remittance terms, card scheme, bank agency where disclosed. |
| BNPL checkout | Installment-sales / credit-purchase route, merchant-contracting, PSP settlement, credit screening. |
| Bank-account payment | Bank account, bank API / electronic payment agency, account-direct merchant onboarding, refund / cancellation controls. |
| Stablecoin payment | EPI transaction route, electronic payment handling route, issuer / trust / bank classification, wallet or exchange registration where applicable. |
| BaaS deposit wallet | Licensed bank, partner UI, bank agency or electronic payment agency route where disclosed. |

## Public Record Fields

| Field | Source route |
|---|---|
| Operator legal name | FSA / METI registry and company disclosure. |
| Registration category | Funds transfer, prepaid, electronic payment agency, EPI, credit / card, bank agency, or electronic payment handling. |
| Registration number | Registry row where available. |
| Funds-transfer type | Type I, Type II, or Type III where disclosed by the FSA list / materials. |
| Prepaid classification | Self-use or third-party prepaid payment instrument. |
| FSA list as-of date | FSA operator-list line or registry file. |
| Service scope | Product terms, official service page, and regulator list. |
| Balance type | Deposit, prepaid balance, funds-transfer balance, credit receivable, electronic payment instrument, or bank deposit claim. |
| Merchant route | Acquirer, PSP, payment facilitator, Bank Pay / J-Debit route, or scheme route. |
| User protection / segregation | Regulator guidance, terms, and disclosure documents. |

## JapanFG Operator Links

- Wallet / funds transfer: [[payment-firms/paypay]], [[payment-firms/merpay]], [[payment-firms/au-payment]], [[payment-firms/rakuten-edy]], [[payment-firms/recruit-mufg-business]], [[payment-firms/jal-payment-port]], [[payment-firms/sbi-remit]].
- Merchant PSP / acquiring: [[payment-firms/gmo-payment-gateway]], [[payment-firms/gmo-epsilon]], [[payment-firms/sb-payment-service]], [[payment-firms/dg-financial-technology]], [[payment-firms/netstars]].
- Credit / card / installment: [[card-issuers/smbc-card]], [[card-issuers/mufg-nicos]], [[card-issuers/rakuten-card]], [[card-issuers/paypay-card]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[payment-firms/paidy]].
- Stablecoin / EPI adjacency: [[payment-firms/jpyc]], [[payment-firms/progmat]], [[exchanges/jp-exchange-sbi-vc-trade]], [[fintech/jp-stablecoin-progmat]].

## Related

- [[financial-licenses/INDEX]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/account-to-account-payment-japan]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/japan-ecisb-license]]
- [[INDEX|FinWiki index]]

## Sources

- e-Gov: Payment Services Act.
- FSA: licensed / registered operator lists.
- FSA: funds-transfer service provider page and registry.
- FSA: prepaid payment instruments policy pages and issuer registry.
- FSA: FinTech Support Desk Q&A.
- FSA: 2020 Payment Services Act reform explanation.
- FSA: crypto-asset / electronic payment instrument policy pages.
- FSA: electronic payment instruments transaction business page.
- FSA: electronic payment handling business page.
- METI: Installment Sales Act registered operator lists.
