---
source: payments/card-acquiring-japan-stack
source_hash: c05ae058bf631eb8
lang: en
status: machine
fidelity: ok
title: "Japan card acquiring stack"
translated_at: 2026-06-01T03:31:12.224Z
---

# Japan card acquiring stack

## TL;DR

Japan card acquiring should be read as a **merchant-contracting and card-data-control stack**, not only as a payment-processing feature. METI's Installment Sales Act materials define the registered merchant-contracting role as the business of concluding contracts that allow merchants to handle credit card numbers, and they make registration depend on who has the final authority to approve merchant acceptance.

This page routes questions about acquirers, PSPs, merchant onboarding, PCI DSS, fraud controls, and the legal difference between a registered merchant-contracting party and a service provider working under another acquirer.

## Core Stack

| Layer | Function | Main question |
|---|---|---|
| Cardholder / issuer | Issues the card and manages cardholder credit / payment relationship. | Who owns the consumer credit and repayment relationship? |
| Network / brand | Provides card network rules, brand acceptance, clearing conventions, and security requirements. | Which network rules apply to the transaction? |
| Acquirer / merchant-contracting party | Concludes merchant contracts and takes responsibility for merchant management. | Who has final authority to let the merchant accept cards? |
| PSP / payment gateway | Integrates merchant checkout, tokenization, fraud tools, routing, and settlement reporting. | Is it only processing / first screening, or does it hold merchant-approval authority? |
| Merchant | Sells goods / services and receives card acceptance capability. | Does the merchant comply with card-data and fraud-prevention requirements? |

## Registration Boundary

The key Japanese legal boundary is the "credit card number handling contract concluding business" under the Installment Sales Act.

| Situation | Likely reading |
|---|---|
| The acquirer signs the merchant contract and keeps final approval authority. | The acquirer is the registered merchant-contracting party; PSP work may be delegated support. |
| The PSP receives comprehensive authority from the acquirer, makes the practical final merchant-approval decision, and manages merchants. | The PSP itself can need registration as the merchant-contracting party. |
| The PSP only performs first screening, technical connection, or operational support while the registered acquirer retains final authority. | Registration may not be required for the PSP role itself, but contract facts matter. |
| A foreign company conducts the business in Japan. | METI says a domestic business office registration is required for the relevant business. |

## Operating Duties

METI's FAQ emphasizes three operating duties that matter for FinWiki analysis:

- **Merchant investigation**: initial and ongoing merchant review to correct or exclude problematic merchants.
- **Card-number management**: controls against leakage of credit card numbers and related customer / transaction information.
- **Fraud prevention**: layered controls such as PCI DSS, card-data non-retention, EMV / 3-D Secure, authorization monitoring, and risk-based merchant controls.

For company analysis, this means a PSP's moat is not only API convenience. The more valuable part is its compliance and risk engine: underwriting merchants, monitoring fraud, reducing chargebacks, and satisfying acquirer / network / regulatory expectations.

## Business Model Lens

| Revenue / risk item | Why it matters |
|---|---|
| Merchant discount / processing fees | Core payment take-rate pool, but often compressed by competition and large-merchant negotiation. |
| Gateway and value-added services | Tokenization, recurring billing, fraud tools, subscriptions, multi-payment orchestration, and data services. |
| Settlement timing | Creates working-capital, credit, reserve, and operational-risk questions. |
| Chargeback / fraud exposure | Determines underwriting standards, reserve policy, and merchant monitoring cost. |
| Registration and security burden | Raises fixed cost and favors scaled providers with compliance infrastructure. |

## JapanFG Relevance

- [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] is the clearest listed PSP / merchant acquiring infrastructure route.
- [[JapanFG/jcb|JCB]] connects card network, issuing, acquiring, and Japanese domestic card rails.
- [[JapanFG/paypay-fg|PayPay FG]], [[JapanFG/rakuten-fg|Rakuten FG]], and AEON-related card businesses use card acquiring and issuing economics as part of broader retail-finance ecosystems.
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]] should use this page when card acceptance, PSP registration, PCI DSS, or merchant-contracting responsibility becomes the decisive issue.

## Related

- [[payments/INDEX|payments INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/jcb]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- METI: Installment Sales Act post-payment field overview and FAQ.
- METI: application materials for credit-card-number handling contract concluding business.
- METI: registered business operator lists.
