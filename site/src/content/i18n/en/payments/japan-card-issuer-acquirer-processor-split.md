---
source: payments/japan-card-issuer-acquirer-processor-split
source_hash: d0156df45dc02ebb
lang: en
status: machine
fidelity: ok
title: "Japan card issuer, acquirer, and processor split"
translated_at: 2026-06-01T03:31:12.249Z
---
# Japan card issuer, acquirer, and processor split

## Overview

Japan card payments is split into at least five roles: issuer, international / domestic brand, acquirer, card-number contract / merchant-contracting operator, and processor / PSP. A single group can hold several roles, but FinWiki does not flatten them into "credit-card company."

Use this page with [[payments/card-acquiring-japan-stack|Japan card acquiring stack]], [[payments/japan-card-security-authentication-controls|card security and authentication controls]], [[payments/credit-purchase-card-operators-japan-index|credit purchase and card operator registry]], [[payments/psp-merchant-settlement-risk|PSP settlement risk]], [[payments/cashless-jp-landscape|cashless landscape]], [[JapanFG/jcb|JCB]], [[JapanFG/smbc-card|SMBC Card]], and [[JapanFG/mufg-nicos|MUFG NICOS]].

## Role Map

| Role | What it controls | Typical JapanFG anchors |
|---|---|---|
| Issuer | Cardholder screening, credit limit, billing, revolving / installment receivable, fraud monitoring. | [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]] |
| Brand / scheme | Network rules, brand acceptance, international routing, card-product rules. | [[JapanFG/jcb|JCB]], Visa / Mastercard / AMEX / Diners partners. |
| Acquirer | Merchant underwriting, merchant contract, settlement, chargeback / dispute routing. | [[JapanFG/jcb|JCB]], [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] |
| PSP / gateway | Technical acceptance, tokenization, payment page, fraud filters, reconciliation file. | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/gmo-epsilon|GMO Epsilon]], [[JapanFG/dg-financial-technology|DGFT]] |
| Merchant | Accepts card payments, protects cardholder data, handles shipping / refund / dispute evidence. | Retail / EC operators under [[retail/INDEX|retail INDEX]] and platform cases such as [[business/gmo-internet-group|GMO Internet Group]]. |

## Legal / Registry Boundary

| Question | Route |
|---|---|
| Is the entity an installment-sales / credit-purchase operator? | Check METI Installment Sales Act registration lists and [[payments/credit-purchase-card-operators-japan-index|registry-control page]]. |
| Is the entity merchant-facing for card-number handling / contract conclusion? | Check merchant-contracting and security-guideline obligations. |
| Is the entity only a gateway / processor? | Check whether it also underwrites merchants or merely provides technical processing. |
| Is the product revolving / installment credit? | Check Installment Sales Act and credit / BNPL boundary. |
| Is the product prepaid / debit / bank-account direct? | Route to [[payments/funds-transfer-vs-prepaid-boundary|prepaid / funds-transfer boundary]] or [[payments/account-to-account-payment-japan|A2A route]]. |

## Security Control Stack

The Japan Credit Association security-guideline route matters because fraud and card-data leakage controls are not only issuer controls:

- EC merchants and PSPs need card-information protection controls;
- acquirers and PSPs coordinate merchant onboarding and security remediation;
- issuer authorization and 3-D Secure / authentication controls sit on the cardholder side;
- chargeback / dispute evidence crosses issuer, acquirer, PSP, and merchant systems;
- recurring billing and tokenized payments add lifecycle / consent controls beyond the first transaction.

The JCB public brand-business explanation is a useful plain-language model for separating cardholder, merchant, issuer, acquirer, and brand / payment-network roles before adding Japan-specific registration and security controls.

## Common Misreadings

| Misreading | Better reading |
|---|---|
| "JCB is only a card issuer." | JCB can be read as a domestic card brand, issuer, acquirer, and network actor depending on context. |
| "PSP = acquirer." | A PSP may be a technical gateway, merchant-contracting operator, settlement actor, or all of these. |
| "3-D Secure solves card fraud." | Authentication is one control; merchant screening, tokenization, monitoring, and dispute handling still matter. |
| "Card company = consumer lender." | Issuer credit risk is one layer; merchant acquiring and scheme rules are different layers. |

## Research Checklist

1. Identify whether the entity is issuer, acquirer, brand, processor / PSP, merchant, or multiple roles.
2. Check METI registration category and public company disclosures.
3. Check whether card data is stored, tokenized, or handled by a third-party processor.
4. Check whether the product includes revolving, installment, BNPL, or only charge-card settlement.
5. Link merchant-risk questions to [[payments/psp-merchant-settlement-risk|PSP settlement risk]] and consumer-credit questions to [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]].

## Related

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/jcb]]
- [[JapanFG/smbc-card]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/gmo-payment-gateway]]
- [[INDEX|FinWiki index]]

## Sources

- METI: Installment Sales Act registration lists.
- METI: card / post-payment FAQ and credit-card security guideline revision release.
- Japan Credit Association: security guideline document page and 5.0 / 6.0 guideline materials.
- JCB: card-payment participant model and merchant rules.
- FSA: licensed / registered financial institutions portal.
- Payments Japan Association: public publication index.
