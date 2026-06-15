---
source: payments/psp-merchant-settlement-risk
source_hash: a10e0427754465dd
lang: en
status: machine
fidelity: ok
title: "PSP merchant settlement risk"
translated_at: 2026-06-01T03:31:12.226Z
---

# PSP merchant settlement risk

## Overview

Merchant PSP risk is the risk that sits between checkout success and final money movement: merchant onboarding, card-number handling, fraud monitoring, chargebacks, reserves, settlement timing, refunds, and platform or wallet failures. In Japan, the analysis must combine METI's card-number handling / merchant-contracting route, FSA funds-transfer registration, prepaid value rules, and payment-brand / network contracts.

Read this page with [[payments/card-acquiring-japan-stack|Japan card acquiring stack]], [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]], and [[payments/japan-code-payment-competitive-map|code-payment competitive map]]. Company pages such as [[payment-firms/gmo-payment-gateway|GMO-PG]], [[payment-firms/sb-payment-service|SBPS]], [[payment-firms/dg-financial-technology|DGFT]], and [[payment-firms/netstars|Netstars]] links here when merchant risk is the real topic.

## Risk Stack

| Layer | Risk | Typical control |
|---|---|---|
| Merchant onboarding | Fraudulent merchant, prohibited goods, poor fulfillment, chargeback-prone business model | KYC / KYB, merchant screening, category controls, ongoing monitoring |
| Card-number handling | Card data leakage, tokenization failure, PCI DSS noncompliance | Non-retention, tokenization, PCI DSS, security audits |
| Authorization / fraud | Stolen card, account takeover, mule transactions, friendly fraud | 3-D Secure, velocity checks, device / behavior monitoring |
| Settlement timing | PSP pays merchant before final network / wallet settlement is certain | Reserves, delayed settlement, exposure limits, rolling balances |
| Refund / cancellation | Refund spike after merchant failure or event cancellation | Contractual holdbacks, refund monitoring, merchant concentration controls |
| Wallet / code-payment routing | Multiple brands and funding sources create operational and reconciliation complexity | Brand reconciliation, exception handling, SLA monitoring |
| Funds transfer | Withdrawable or transferable balances create statutory safeguarding and AML concerns | FSA funds-transfer controls, AML/CFT monitoring, safeguarding arrangements |

## Japan Regulatory Routes

| Route | Public relevance |
|---|---|
| METI credit-card-number handling contract concluding operators | Determines who has merchant-contracting / card-number handling responsibility under the Installment Sales Act. |
| FSA funds-transfer service providers | Applies when PSP / wallet functions include transfer capability beyond pure card processing. |
| FSA prepaid issuer registry | Applies when non-withdrawable stored value is issued for third-party use. |
| Card networks and PCI DSS | Operationally critical even when not the public legal registry. |
| Cashless Promotion Council publications | Useful for tracking code-payment use, merchant acceptance trends, and industry standardization work. |

## Company Lens

| Operator type | Examples | Main question |
|---|---|---|
| Listed card / PSP infrastructure | [[payment-firms/gmo-payment-gateway|GMO-PG]] | How much risk sits on gateway services, merchant settlement, lending, or value-added tools? |
| Telecom / group PSP | [[payment-firms/sb-payment-service|SBPS]] | How does PayPay / SoftBank distribution affect merchant acquisition and risk controls? |
| Legacy / enterprise PSP | [[payment-firms/dg-financial-technology|DGFT]] | How does enterprise merchant quality change chargeback and settlement exposure? |
| QR gateway | [[payment-firms/netstars|Netstars]] | How are multiple code-payment brands reconciled and controlled at the merchant edge? |
| Wallet / funds-transfer operator | [[payment-firms/paypay|PayPay]], [[payment-firms/merpay|Merpay]], [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] | Does the operator hold balance / transfer / payment risk, or only route acceptance? |

## Practical Reading Rules

- Do not infer profitability from transaction volume alone; merchant mix, fraud losses, subsidies, and settlement timing matter.
- Do not infer risk ownership from brand display alone; the legal acquirer, registered merchant-contracting party, PSP, and wallet can be different entities.
- Treat high-risk merchant categories, cross-border transactions, subscriptions, digital goods, and event tickets as riskier than low-ticket daily retail.
- Use [[payments/credit-purchase-card-operators-japan-index|credit purchase / card registry]] for card and merchant-contracting routes, then layer FSA registrations only when value transfer or prepaid value is involved.

## Related

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payment-firms/netstars]]
- [[payment-firms/gmo-payment-gateway]]

## Sources

- METI Installment Sales Act overview / FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI registered operator lists: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- Cashless Promotion Council code-payment trend survey publication page: https://paymentsjapan.or.jp/publications/code-payments-20260330/
