---
source: payments/japan-card-security-authentication-controls
source_hash: ddc68a139781a901
lang: en
status: machine
fidelity: ok
title: "Japan card security and authentication controls"
translated_at: 2026-06-01T03:31:12.260Z
---
# Japan card security and authentication controls

## Overview

Japan EC card security is not only "3-D Secure." The useful control stack is: card-data protection -> merchant vulnerability control -> EMV 3-D Secure authentication -> fraud monitoring -> acquirer / PSP / merchant information sharing -> chargeback and remediation.

Use this page with [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]], [[payments/card-acquiring-japan-stack|card acquiring stack]], [[payments/psp-merchant-settlement-risk|PSP settlement risk]], [[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]], and [[JapanFG/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]].

## Guideline Snapshot

| Version / route | Public-source role | Wiki reading |
|---|---|---|
| METI 2025-03-05 release | Announces the credit-card security guideline revision. | Public policy anchor for EC merchant security strengthening. |
| Japan Credit Association guideline 6.1 | Main current public guideline source for card-security controls. | Use for non-retention, EC security, EMV 3-D Secure, and fraud-control vocabulary. |
| PCI DSS | International card-data security standard. | Use for cardholder-data environment and merchant / PSP security controls. |
| EMV 3-D Secure | Authentication protocol / messaging standard. | Use for risk-based authentication and challenge-flow analysis. |
| JCB merchant / brand pages | Plain-language model of issuer, acquirer, brand, merchant, and authentication roles. | Use to separate flattening all parties into "card company." |

## Actor And Responsibility Map

| Actor | Japanese / market term | Core responsibility | Security artifact |
|---|---|---|---|
| Issuer | Issuer | Cardholder screening, authorization, ACS / authentication decision, billing, fraud monitoring. | Authorization logs, ACS result, cardholder dispute / fraud monitoring. |
| Card brand / network | International brand / brand | Network rules, directory routing, brand security rules, interoperability. | Scheme rules, directory-server routing, brand compliance. |
| Acquirer | Merchant underwriting, merchant contract, settlement, chargeback routing. | Merchant due diligence, security status, chargeback monitoring. |
| PSP / gateway | Payment agency / PSP | Payment page, tokenization, 3DS Server integration, transaction data, reconciliation. | Tokenization design, 3DS transaction logs, fraud filters. |
| Merchant | EC Merchant | Site security, customer authentication UX, shipping / refund controls, evidence retention. | Vulnerability controls, order logs, delivery / refund evidence. |
| 3DS Server / DS / ACS | 3-D Secure components | Data transfer, directory routing, issuer authentication, challenge / frictionless flow. | AReq / ARes / challenge result, ECI / CAVV style authentication data. |

## Control Stack

| Layer | Threat | Control objective | Primary owner | Secondary owner |
|---|---|---|---|---|
| Card-data protection | Cardholder data leak. | Avoid storing card data where possible; keep PCI scope controlled. | Merchant / PSP | Acquirer |
| Tokenization / non-retention | Raw card data exposure. | Replace card data handling with token / redirect / JavaScript-token models. | PSP | Merchant |
| Merchant vulnerability control | EC-site compromise, formjacking, account takeover. | Keep EC site, plugins, admin accounts, and payment pages hardened. | Merchant | PSP / EC system provider |
| EMV 3-D Secure | Unauthorized card-not-present use. | Add risk-based issuer authentication and challenge flow. | Issuer / ACS | Merchant / PSP / brand |
| Fraud monitoring | Credit master / BIN attack, abnormal order pattern, reshipping fraud. | Detect and stop suspicious transactions and delivery. | Issuer / acquirer / PSP | Merchant |
| Chargeback / dispute | Loss allocation and evidence failure. | Preserve order, authentication, delivery, refund, and communication evidence. | Acquirer / merchant | Issuer / PSP |

## EMV 3-D Secure Route

| Step | Component | Research question |
|---|---|---|
| Checkout | Merchant / PSP | Is transaction data complete enough for risk-based authentication? |
| 3DS request | 3DS Server | Is the PSP or merchant integrating the 3DS Server correctly? |
| Directory routing | Directory Server | Which brand / card route receives the authentication request? |
| Issuer decision | ACS / issuer | Is the flow frictionless, challenged, declined, or unavailable? |
| Authorization | Issuer / acquirer | How are authentication result and authorization result combined? |
| Dispute / liability | Issuer / acquirer / merchant | Does the authentication result actually change liability or only add evidence? |

3-D Secure reduces card-not-present fraud risk, but it does not replace merchant screening, card-data protection, account-takeover controls, delivery controls, or chargeback evidence. That is why this page is linked with [[payments/psp-merchant-settlement-risk|PSP settlement risk]] rather than as a protocol-only note.

## Non-retention, Tokenization, And PCI DSS

| Integration pattern | Card-data exposure | Wiki reading |
|---|---|---|
| Redirect payment page | Merchant redirects to PSP / acquirer hosted page. | Lower merchant card-data exposure if implemented correctly. |
| JavaScript token model | Card data is sent from browser to PSP / tokenization endpoint. | Merchant still needs site-security controls because page compromise can alter scripts. |
| Server-side card handling | Merchant server receives card data. | Highest PCI and operational burden; needs strong evidence before describing as compliant. |
| Stored credential / recurring billing | Token or credential-on-file used for later payments. | Needs consent, lifecycle, cancellation, and fraud monitoring controls. |

## EC Merchant Fraud Controls

| Pattern | Control |
|---|---|
| Credit master / BIN attack | Rate limits, authorization pattern monitoring, issuer / acquirer alerts, payment-page controls. |
| Account takeover | Login protection, device / behavior monitoring, step-up authentication, password-reset monitoring. |
| High-risk delivery | Address / shipping change monitoring, delivery hold, manual review, cancellation / refund control. |
| Refund abuse | Refund approval workflow, settlement reconciliation, merchant dashboard permission control. |
| Site compromise | Vulnerability scanning, patching, script integrity checks, admin MFA, incident response. |

## JapanFG Relevance

Card-security analysis is routed through issuer / acquirer / PSP roles rather than through a single "credit card company" label:

- Issuers / acquirers: [[JapanFG/jcb|JCB]], [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/orico|Orico]], [[JapanFG/jaccs|JACCS]], [[JapanFG/credit-saison|Credit Saison]].
- PSP / gateway: [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[JapanFG/gmo-epsilon|GMO Epsilon]], [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/dg-financial-technology|DGFT]], [[JapanFG/netstars|Netstars]].
- Legal / registry layer: [[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]] and [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]].

## Red Flags For Wiki Research

1. A source says "card company" but does not say whether it means issuer, acquirer, brand, processor, or PSP.
2. A merchant claims 3-D Secure support but has no evidence for vulnerability controls, tokenization, or fraud operations.
3. A PSP claims tokenization but the merchant page can still expose card data through compromised scripts.
4. A fraud metric is quoted without denominator: transaction value, order count, approval rate, challenge rate, chargeback rate, or fraud amount.
5. A liability-shift statement is treated as a complete loss guarantee.

## Related

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[JapanFG/installment-sales-act-2020-amendment]]
- [[JapanFG/jcb]]
- [[INDEX|FinWiki index]]

## Sources

- METI: credit-card security guideline revision release and credit-transaction policy page.
- Japan Credit Association: Credit Card Security Guidelines 6.1 and document index.
- JCB: merchant EMV 3-D Secure notice and brand / card-payment actor explanation.
- PCI Security Standards Council: PCI DSS overview and Japanese document library.
- EMVCo: EMV 3-D Secure public standard overview.
- Payments Japan and FSA / PPC / METI public security-advisory materials.
