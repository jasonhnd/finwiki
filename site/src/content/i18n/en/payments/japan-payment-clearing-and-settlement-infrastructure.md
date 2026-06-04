---
source: payments/japan-payment-clearing-and-settlement-infrastructure
source_hash: be2defa929cfa7db
lang: en
status: machine
fidelity: ok
title: "Japan payment clearing and settlement infrastructure"
translated_at: 2026-06-01T03:31:12.226Z
---

# Japan payment clearing and settlement infrastructure

## Overview

Japan payment infrastructure includes central-bank settlement assets, BOJ-NET, interbank transfer clearing, small-value transfer infrastructure, account-direct payment, debit payment, card settlement, wallet settlement, and private-sector clearing arrangements. This page separates customer-facing payment products from the systems and rules used for clearing and settlement.

This page belongs to [[payments/INDEX|payments domain]] and links to [[payments/account-to-account-payment-japan|account-to-account payment route]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], [[payments/japan-bank-api-payment-agency-route|bank API route]], [[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud-control map]], [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]], [[payments/card-acquiring-japan-stack|Japan card acquiring stack]], [[banking/quick-deposit-four-methods|quick deposit four methods]], and [[financial-licenses/INDEX|JapanFG legal / financial licenses]].

## Infrastructure Map

| Layer | Public system / route | Public function |
|---|---|---|
| Central-bank settlement | BOJ accounts and BOJ-NET | Settlement assets and funds / JGS settlement services. |
| Interbank bank transfer | Zengin System | Nationwide online domestic interbank funds-transfer system. |
| Zengin net settlement | Zengin clearing route and BOJ current accounts | Net positions among participant banks and BOJ-account settlement. |
| Large-value transfer | BOJ-NET RTGS where applicable | Transfers of JPY 100 million or more through BOJ-NET RTGS. |
| Small-value transfer | Cotra | Small-value personal transfer route linked to bank accounts and participating operators. |
| Account-direct merchant payment | Bank Pay | Bank-account direct smartphone merchant payment route. |
| Debit payment | J-Debit | Bank cash-card debit payment route. |
| Bank API / payment instruction | Electronic payment agency / Open API | Account information and payment-instruction interface route. |
| Card payment | Issuer / acquirer / brand / PSP stack | Card authorization, clearing, chargeback, and settlement. |

## BOJ Settlement Layer

The Bank of Japan provides settlement assets and operates BOJ-NET. BOJ materials describe settlement assets as money or securities that have been transferred, and describe payment and settlement systems as organized arrangements that can include systems, rules, agreements, and sometimes relevant laws and regulations.

Funds transfers between BOJ accounts are used for interbank money market transactions, cash legs of JGB and other securities transactions, and net positions from private-sector clearing systems. BOJ account debits and credits are also used for money-market operations, lending transactions with financial institutions, treasury funds, and JGS issuance / redemption.

## Zengin System Route

The Zengin System is the nationwide online interbank domestic funds-transfer system. Zengin-Net materials describe its bank-transfer role and related clearing route. The system covers almost all private banks in Japan.

Zengin clearing materials identify netted positions and BOJ current-account settlement as the interbank settlement layer. Transfers of JPY 100 million or more are routed through BOJ-NET RTGS rather than ordinary netted settlement.

## Cotra Route

Cotra is the small-value bank-account transfer route connected to the five-city-bank small-value infrastructure concept and the operator company established in 2021. Public service materials identify personal transfers of JPY 100,000 or less and a service start in October 2022.

Public Cotra materials identify deposit-taking financial institutions and funds-transfer operators as participant categories. The service supports account-number routing and phone / email-style alias flows with sender-side name confirmation. Public source packs record that connected operators' funds are cleared through Zengin twice intraday for final settlement.

## JEPPO, J-Debit, and Bank Pay Route

JEPPO promotes account-linked payment infrastructure. Its public service pages identify J-Debit and Bank Pay as core account-linked payment services.

| Service | Public model |
|---|---|
| J-Debit | Customer presents a cash card and enters PIN; funds are debited immediately from the bank account; merchant is paid later. |
| Bank Pay | JEPPO-operated smartphone payment service for bank-account holders; direct debit from a registered bank account; no prefunding / charge required. |
| Bank Pay infrastructure | Uses J-Debit payment infrastructure. |
| Bank Pay adjacent functions | Merchant payment, Cotra remittance, and bill-payment flows can sit in the same app surface. |

## Product-To-Infrastructure Crosswalk

| Product surface | Infrastructure route |
|---|---|
| Bank transfer | Zengin System and bank-account ledger. |
| High-value bank transfer | BOJ-NET RTGS for JPY 100 million or more where applicable. |
| Small-value P2P transfer | Cotra route where participating banks / apps use the service. |
| Merchant QR from bank account | Bank Pay / account-direct merchant acquiring route. |
| Cash-card debit at merchant | J-Debit route. |
| Immediate deposit to broker / wallet | Bank API, quick-deposit, account transfer, or linked bank payment route. |
| Card checkout | Card network / acquirer / PSP / processor / issuer route. |
| Wallet top-up | Bank API, card, funds-transfer, prepaid, or account-to-account route depending on terms. |

## Public Record Fields

| Field | Source route |
|---|---|
| System operator | BOJ, Zengin-Net, Cotra, JEPPO, card scheme, or PSP disclosure. |
| Participant category | Banks, funds-transfer operators, payment service providers, merchants, PSPs, or apps. |
| Transfer type | Interbank transfer, small-value transfer, debit, account-direct merchant payment, card, wallet top-up. |
| Clearing layer | Zengin clearing, Cotra clearing, card clearing, scheme route, or bilateral bank-account route. |
| Settlement asset | BOJ account balance, bank deposit, prepaid balance, funds-transfer balance, card receivable, or other claim. |
| Settlement timing | System documentation and participant terms. |
| Refund / cancellation route | Scheme documentation and merchant terms. |
| Incident / reconciliation route | Bank API incident page, scheme materials, and company disclosure. |

## Related Routes

[[payments/account-to-account-payment-japan|Account-to-account payment Japan]] records Cotra / Bank Pay / J-Debit and account-direct flows. [[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring]] records merchant onboarding, refunds, connected-business, and settlement controls for bank-account direct payments. [[payments/japan-bank-api-incident-and-fraud-control|Bank API incident and fraud-control map]] records outage, unauthorized instruction, compensation, AML, and reconciliation fields.

## JapanFG Operator Links

- Bank network context: [[megabanks/mufg-bank]], [[megabanks/sumitomo-mitsui-banking-corp]], [[megabanks/mizuho-bank]], [[megabanks/resona-bank]], and regional-bank pages.
- Wallet / funds transfer: [[payment-firms/paypay]], [[payment-firms/merpay]], [[payment-firms/au-payment]], [[payment-firms/rakuten-edy]].
- Merchant PSP / acquiring: [[payment-firms/gmo-payment-gateway]], [[payment-firms/sb-payment-service]], [[payment-firms/netstars]].

## Related

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/card-acquiring-japan-stack]]
- [[banking/quick-deposit-four-methods]]
- [[financial-licenses/payment-license-stack]]
- [[money-market/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: payment and settlement systems overview.
- Bank of Japan: payment and settlement system review materials.
- Zengin-Net: Zengin System and clearing public pages.
- Zengin-Net / Cotra: Cotra public pages.
- Cotra: service and member pages.
- Japan Electronic Payment Promotion Organization: Bank Pay and J-Debit.
- Payments Japan: cashless / payment publications.
