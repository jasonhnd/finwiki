---
source: payments/japan-interchange-and-merchant-fee-stack
source_hash: 96c290f4de43a8da
lang: en
status: machine
fidelity: ok
title: "Japan interchange and merchant fee stack"
translated_at: 2026-06-01T03:31:12.303Z
---

# Japan interchange and merchant fee stack

## Overview

This page records the public structure of Japan card merchant-fee and interchange-related disclosures. The scope is card merchant fee composition, issuer-fee / interchange disclosure, acquirer economics, and related public-policy materials. Broader merchant PSP pricing, settlement reserves, chargeback allocation, and gateway pricing are routed through [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] and [[payments/card-acquiring-japan-stack|Japan card acquiring stack]].

This page belongs to [[payments/INDEX|payments domain]] and links to [[payments/cashless-jp-landscape|Japan cashless payment landscape]], [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]], [[payments/japan-card-security-authentication-controls|card security and authentication controls]], [[payments/credit-purchase-card-operators-japan-index|credit / card registry]], [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]], and [[financial-licenses/payment-license-stack|Japan payment license stack]].

## Fee Component Map

| Component | Public role | Linked route |
|---|---|---|
| Merchant fee | Fee paid by merchant to acquirer / PSP / merchant-contracting party | [[payments/card-acquiring-japan-stack]] |
| Issuer fee / interchange | Issuer-side economics paid through card-network rules or bilateral arrangements | [[payments/japan-card-issuer-acquirer-processor-split]] |
| Acquirer share | Merchant-contracting, settlement, risk, processing, and network-connectivity economics | [[payments/card-acquiring-japan-stack]] |
| Standard interchange rate | Default card-network rate where no bilateral issuer-acquirer setting applies | Card-brand disclosures and Payments Japan roadmap route |
| Brand / scheme fee | Card network / brand layer | JCB / international brand disclosures |
| Processor / gateway fee | Authorization, capture, routing, reconciliation, and API layer | [[payments/psp-merchant-settlement-risk]] |
| Security / authentication cost | EMV 3-D Secure, tokenization, PCI DSS, non-retention, fraud detection | [[payments/japan-card-security-authentication-controls]] |
| Chargeback / fraud reserve | Merchant-risk control and settlement reserve | [[payments/psp-merchant-settlement-risk]] |
| Settlement timing | Deposit schedule, rolling reserve, refunds, cancellation handling | Merchant contract / PSP terms |

## Public Disclosure Timeline

| Date / source | Public fact field |
|---|---|
| 2022 JFTC report | JFTC reviewed credit-card merchant fees, interchange-related components, merchant-size fee differences, and negotiation patterns. |
| 2022 Payments Japan roadmap | The roadmap treated the off-us issuer fee in Category I as interchange fee and described a default `standard rate` where there is no bilateral setting. |
| 2023-06-01 METI / JFTC release | METI and JFTC announced that JCB disclosed the allocation rate of credit-card merchant fee between issuer and acquirer. |
| 2023 Payments Japan roadmap | The roadmap stated that Mastercard, UnionPay, and Visa had published Japan credit-card standard interchange rates. |

## Public Numeric Fields

| Source | Field | Value recorded in source pack |
|---|---|---|
| JFTC 2022 | Simple average merchant fee rate | 2.70% |
| JFTC 2022 | Estimated weighted average merchant fee rate | 1.66% |
| JFTC 2022 | Merchant-size pattern | Smaller merchants had higher average rates than larger merchants. |
| JFTC 2022 | Negotiation pattern | Merchants that negotiated had lower average rates than merchants that did not. |
| Payments Japan 2022 | Category I average merchant fee | 2.63% |
| Payments Japan 2022 | Category II average merchant fee | 2.89% |
| Payments Japan 2022 | Issuer fee in Category I and Category II | 1.56% in both categories. |

## Merchant Contract Fields

| Field | Public record source |
|---|---|
| Merchant contracting party | Acquirer / PSP official materials and merchant terms. |
| Accepted brands | Merchant application page, acquirer / PSP service page. |
| Merchant fee rate / pricing plan | Public merchant-pricing page where disclosed. |
| Issuer-fee / interchange reference | Card-brand disclosure, Payments Japan roadmap, JFTC / METI materials. |
| Settlement cycle | PSP / acquirer merchant terms. |
| Security requirements | Japan credit-card security guideline, PCI DSS, EMV 3-D Secure materials. |
| Chargeback process | Acquirer / PSP terms and brand rules where public. |
| Refund / cancellation handling | Merchant terms and PSP documentation. |

## Card Security Connection

Merchant fee and card security are separate fields but linked operationally. EMV 3-D Secure, PCI DSS, tokenization, non-retention, EC merchant vulnerability controls, fraud monitoring, and chargeback evidence are routed through [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]].

The card-security route uses the Japan Consumer Credit Association guideline, PCI DSS, and EMVCo materials. Public merchant-contracting pages can identify whether the PSP, acquirer, or merchant carries specific implementation duties.

## JapanFG Operator Links

- Major card issuers / acquirers: [[card-issuers/smbc-card]], [[card-issuers/mufg-nicos]], [[card-issuers/rakuten-card]], [[card-issuers/paypay-card]], [[card-issuers/aeon-financial-service]], [[card-issuers/jcb]].
- Merchant PSP / gateway operators: [[payment-firms/gmo-payment-gateway]], [[payment-firms/gmo-epsilon]], [[payment-firms/sb-payment-service]], [[payment-firms/dg-financial-technology]], [[payment-firms/netstars]].
- Credit / installment registry route: [[payments/credit-purchase-card-operators-japan-index]].

## Related

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[financial-licenses/payment-license-stack]]
- [[INDEX|FinWiki index]]

## Sources

- METI / JFTC: JCB merchant-fee allocation-rate disclosure release.
- METI: cashless payment data pages.
- JFTC: 2022 credit-card merchant-fee release and report.
- Payments Japan: 2022 and 2023 roadmap publications.
- Japan Consumer Credit Association: credit-card security guideline.
- JCB: brand / payment network public materials.
- PCI Security Standards Council: PCI DSS.
- EMVCo: EMV 3-D Secure.
