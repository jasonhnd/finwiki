---
source: financial-licenses/bank-license-and-baas-boundary
source_hash: a76144a83ecededb
lang: en
status: machine
fidelity: ok
title: "Japan bank license and BaaS boundary"
translated_at: 2026-05-31T23:59:49.387Z
---
# Japan bank license and BaaS boundary

## Overview

Japan BaaS and embedded-banking records separate the **licensed bank layer** from the **customer-interface layer**. The controlling public category for deposit-taking is the Banking Act bank-license route, while partner-branded apps, account-information services, payment-instruction services, and bank-agency channels can use other regulatory routes.

This page belongs to [[financial-licenses/INDEX|JapanFG legal / financial licenses]] and links the regulatory boundary to [[banking/INDEX|banking domain]], [[banking/japan-baas-operating-models|Japan BaaS operating models]], [[banking/baas-japan-landscape|Japan BaaS landscape]], [[payments/japan-bank-api-payment-agency-route|bank API and electronic payment agency route]], [[payments/account-to-account-payment-japan|account-to-account payment Japan]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], and [[fintech/japan-financial-regulation|Japan financial regulation]].

## Regime Map

| Layer | Public category | Approval / registration form | Public function |
|---|---|---|---|
| Deposit-taking bank | `銀行` under the Banking Act | License | Bank-side deposit, lending, exchange, and settlement functions. |
| Bank holding company | Bank holding-company route | Approval / FSA list route | Holding company control over banking subsidiaries. |
| Bank agency | `銀行代理業者` | Permission | Agency or intermediation for bank deposit, loan, and exchange contracts. |
| Electronic payment agency | `電子決済等代行業者` | Registration | Account-information and payment-instruction intermediation through bank API / open-banking routes. |
| Electronic payment handling | `電子決済等取扱業` | Registration | Bank-commissioned intermediation for electronic increase / decrease of bank deposit claims and related deposit-contract intermediation. |
| Partner-branded BaaS surface | Partner app, branch, UI, or product brand | Depends on role | Customer-facing interface where the balance may remain a bank deposit at the licensed bank. |
| Wallet / stored-value layer | Funds transfer or prepaid route where applicable | Registration / filing route | Non-bank payment balance, remittance claim, prepaid balance, or merchant-payment route. |

## Licensed Bank Layer

The FSA licensed / registered institution portal publishes the bank list under `預金取扱等金融機関`. The same portal also carries bank holding companies, bank agents, foreign bank agency banks, electronic payment agencies, and other regulated categories. As of the portal snapshot opened on 2026-05-22, the bank list line showed an as-of date of 2026-05-13, and the electronic payment agency list line showed an as-of date of 2026-04-30.

For BaaS records, the bank-license field identifies the legal entity that owes the deposit claim. The public record normally comes from the FSA bank list, the bank's account terms, the service terms, or the partner branch / BaaS page. Bank operating-company pages remain under [[financial-licenses/INDEX|financial-licenses INDEX]], including [[regional-banks/ssnb|SSNB]], [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]], [[regional-banks/sony-bank|Sony Bank]], [[regional-banks/ui-bank|UI Bank]], and [[regional-banks/01-bank|01 Bank]].

## Bank Agency Route

The bank agency route is a permitted intermediary route. FSA supervisory materials describe bank-agency activity as agency or intermediation for bank-contract conclusion, including deposit, loan, and exchange-related contracts. Public records to check include the principal bank, the bank-agent legal entity, service terms, and the FSA `銀行代理業者` list.

Bank agency is not recorded as a separate bank license. It is a distribution / intermediation layer linked to a principal bank. This route is adjacent to [[financial-licenses/foreign-bank-agency-business-route|Japan foreign bank agency business route]] and to digital-bank distribution cases where the front-end brand and licensed bank are not the same legal layer.

## Electronic Payment Agency Route

The electronic payment agency route is a Banking Act registration route. It covers open-banking / bank-API style services that intermediate account information or payment instructions with a bank. Public verification uses the FSA electronic payment agency page and the `電子決済等代行業者` registry.

This route is linked to [[payments/japan-bank-api-payment-agency-route|Japan bank API and electronic payment agency route]], [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud-control map]], and [[payments/account-to-account-payment-japan|Japan account-to-account payment route]]. The registration identifies an API / intermediation layer; it does not by itself identify a bank deposit license or a funds-transfer registration.

## Electronic Payment Handling Route

The FSA electronic payment handling business page and related supervisory route are separate from the ordinary electronic payment agency registry. The route is tied to bank-commissioned intermediation for electronically increasing or decreasing bank deposit claims and can include intermediation of deposit-contract formation connected with that act.

This route is the Banking Act side of deposit-token / bank-issued digital-money intermediation. It is distinct from the Payment Services Act side of electronic payment instruments transaction business. The adjacent payment-license route is [[financial-licenses/payment-license-stack|Japan payment license stack]].

## BaaS Boundary Fields

| Field | Public evidence route |
|---|---|
| Legal balance holder | Bank account terms, deposit terms, wallet terms, FSA bank list, funds-transfer list, or prepaid list. |
| Deposit claim status | Bank terms and Banking Act bank-license route. |
| Front-end operator | Partner service page, app terms, BaaS page, bank-agent disclosure, or electronic payment agency registry. |
| Principal bank | Bank-agent disclosure, BaaS partner terms, bank branch / partner page. |
| API access route | FSA electronic payment agency list, bank API materials, service terms. |
| Deposit-token / bank-issued digital-money route | FSA electronic payment handling business page and Banking Act supervisory route. |
| Non-bank wallet route | FSA funds-transfer list, prepaid issuer list, product terms. |
| User-facing brand | Partner branch page, NEOBANK page, BaaS page, app page. |

## BaaS Operating Layers

| BaaS model | Bank-license holder | Partner / interface layer | Linked FinWiki route |
|---|---|---|---|
| NEOBANK / partner-branded banking | Licensed bank | Partner brand and account proposition | [[regional-banks/ssnb]], [[banking/japan-baas-operating-models]] |
| Partner branch | Licensed bank | Partner branch, app, or branded account route | [[banking/minna-bank-baas-model]] |
| API-provided banking | Licensed bank plus API / electronic payment agency layer where applicable | External app, SaaS, accounting, or wallet service | [[payments/japan-bank-api-payment-agency-route]] |
| Corporate API bank | Licensed bank | Corporate banking API, treasury, accounting, platform workflows | [[payment-firms/gmo-aozora-net]] |
| Bank-agent route | Principal bank plus permitted bank agent | Agent channel / app route | [[regional-banks/ui-bank]] |
| Wallet plus bank linkage | Bank account plus funds-transfer / prepaid / account-linking route | Wallet or merchant payment service | [[payments/funds-transfer-vs-prepaid-boundary]] |

## Public Verification Checklist

| Question | Source field |
|---|---|
| Is the balance a bank deposit? | Bank account terms and FSA `銀行` list. |
| Which legal entity owes the customer balance? | Deposit terms, wallet terms, issuer disclosure, or regulated-operator list. |
| Is the front-end a bank agent? | FSA `銀行代理業者` list and service disclosure. |
| Is the front-end an electronic payment agency? | FSA `電子決済等代行業者` registry and bank API terms. |
| Is a deposit-token / electronic deposit-claim route used? | FSA `電子決済等取扱業` page and supervisory route. |
| Is there a funds-transfer or prepaid layer? | FSA `資金移動業者` list, FSA prepaid issuer list, and product terms. |
| Does the public page identify a principal bank? | Partner branch, NEOBANK, bank-agent, or BaaS service page. |

## Related

- [[financial-licenses/INDEX]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/foreign-bank-branch-license-route]]
- [[financial-licenses/foreign-bank-agency-business-route]]
- [[banking/INDEX]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-net-bank-competition-map]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[fintech/japan-financial-regulation]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: licensed / registered operator portal and bank list.
- FSA: bank supervision page for new bank entry.
- FSA: bank agency supervision page and bank-agent list.
- FSA: electronic payment agency page and registry.
- FSA: electronic payment handling business page and supervisory route.
- e-Gov: Banking Act.
- Japanese Bankers Association: Open API council materials.
