---
source: payments/japan-bnpl-pay-later-operator-registry-matrix
source_hash: 6d17585c82222549
lang: en
status: machine
fidelity: ok
title: "Japan BNPL / pay-later operator registry matrix"
translated_at: 2026-06-01T03:31:12.239Z
---
# Japan BNPL / Pay-Later Operator Registry Matrix

Japan's BNPL and pay-later market is governed primarily through the Installment Sales Act and the individual credit-purchase intermediary registration line. The same checkout experience can be implemented through several legal stacks: individual credit-purchase intermediation, card-issuer comprehensive credit-purchase intermediation, small-amount comprehensive intermediation, funds-transfer services, money-lending registration, or a hybrid wallet structure. This page maps the operator-level differences that are easy to miss when products look identical at checkout.

## Why This Matrix Matters

BNPL is one of Japan's most regulatorily ambiguous payment categories. A consumer-facing button that says "pay later" may be backed by a pure BNPL operator, a traditional shinpan company, a card issuer, a marketplace wallet, or a PSP-owned deferred-payment product. The economic differences are material: credit screening, loss absorption, funding source, merchant fee, receivables ownership, and consumer-protection obligations all change by operator type.

The Consumer Affairs Agency also maintains warnings on pay-later cash-conversion abuse and over-borrowing risk. For operator risk, the canonical workflow is to confirm the current METI registry row and then cross-check any administrative-action history.

## Active Operator Notes

### Net Protections HD and NP Postpay

[[JapanFG/net-protections-hd|Net Protections HD]] operates NP Postpay, one of Japan's earliest invoice-based BtoC BNPL products. The product lets EC merchants offer payment after delivery by convenience-store, bank-transfer, or similar invoice routes. The defining feature is a guarantee-model structure: Net Protections absorbs unrecovered-payment risk in exchange for the merchant fee. The group also runs atone, NP business invoicing, and AFTEE.

### atone

[[JapanFG/atone|atone]] is the consumer-side monthly-cycle BNPL wallet of the Net Protections group. It aggregates purchases across merchants into a single monthly payment, giving Net Protections a wallet-style consumer surface while preserving the corporate license stack used for NP Postpay.

### Kuroneko Atobarai

[[JapanFG/kuroneko-atobarai|Kuroneko Atobarai]] is the Yamato-group BNPL product. Its distinctive advantage is operational adjacency to Yamato Transport: delivery confirmation, invoice dispatch, and collection can be bundled for EC merchants that already rely on Yamato logistics.

### GMO Postpay

[[JapanFG/gmo-postpay|GMO Postpay]] is integrated with [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] and the broader GMO merchant-acquiring surface. The strategic value is distribution: a merchant already using GMO-PG can add post-payment as another method without building a separate gateway relationship.

### Paidy

[[JapanFG/paidy|Paidy]], owned by PayPal, is a monthly-cycle consumer BNPL operator with standard monthly settlement, three-installment products, and longer installment variants. Its advantages are large EC integrations, the PayPal ownership base, and receivables-funding scale.

### Komoju Atobarai

Komoju Atobarai is Degica / Komoju's gateway-integrated post-payment product. It is especially relevant for digital content, gaming, and cross-border EC merchants already using Komoju's PSP coverage.

### Smarpay and Lattepay

Smarpay and Lattepay represent the smaller independent BNPL cohort launched during the 2020s expansion wave. They are useful as examples of operators that clear the registration threshold but have scale and cycle-sensitivity materially different from NP, Paidy, or the large shinpan firms.

### Merpay and Mercari Smart Money

[[JapanFG/mercari-hd|Mercari HD]] operates [[JapanFG/merpay|Merpay]], extending into pay-later and lending through the Mercari ecosystem. The structural distinction is vertical integration: funding source, customer identity, marketplace behavior, and collection channel all sit inside the Mercari platform. The license stack combines funds transfer, credit-purchase intermediation, and money-lending elements depending on feature.

### b/43

b/43, provided by Smartbank, combines prepaid card, family-account budgeting, and pay-later optionality. It belongs closer to family-finance and household-budgeting infrastructure than to pure-play BNPL.

### Card-Issuer Boundary Cases

SMBC Card, MUFG NICOS, Rakuten Card, PayPay Card, and other card issuers can create BNPL-like experiences through existing card-credit lines. Products such as PayPay deferred payment look like BNPL to consumers but are legally closer to card-issuer receivables than to a standalone individual credit-purchase intermediary.

## Operator Comparison

| Operator / brand | Ownership | Primary legal route | Model | Main strength | Regulatory reading |
|---|---|---|---|---|---|
| [[JapanFG/net-protections-hd|Net Protections HD]] / NP Postpay | Listed independent group | Individual credit-purchase intermediation | Per-transaction invoice BNPL | Merchant-side guarantee model | Pure-play BNPL benchmark |
| [[JapanFG/atone|atone]] | Net Protections group | Same group license stack | Monthly-cycle consumer wallet | Multi-merchant consumer account | Wallet extension of NP economics |
| [[JapanFG/kuroneko-atobarai|Kuroneko Atobarai]] | Yamato group | Individual credit-purchase intermediation | Invoice BNPL tied to delivery | Logistics and collection integration | Shipping-bundled BNPL |
| [[JapanFG/gmo-postpay|GMO Postpay]] | GMO Internet / GMO-PG | Individual credit-purchase intermediation | PSP-integrated deferred payment | Existing GMO-PG merchant base | Gateway-distributed BNPL |
| [[JapanFG/paidy|Paidy]] | PayPal | Individual credit-purchase intermediation plus installment variants | Monthly-cycle BNPL | Large EC integrations and PayPal scale | Consumer-wallet BNPL |
| Komoju Atobarai | Degica / Komoju | Individual credit-purchase intermediation | PSP-integrated post-payment | Gaming and cross-border EC merchant base | Vertical PSP BNPL |
| Smarpay | Independent | Individual credit-purchase intermediation | Installment-oriented BNPL | Newer independent brand | Smaller-scale cycle-sensitive operator |
| Lattepay | Independent | Individual credit-purchase intermediation | Deferred payment | Newer independent brand | Smaller-scale cycle-sensitive operator |
| [[JapanFG/merpay|Merpay]] | [[JapanFG/mercari-hd|Mercari HD]] | Multi-license wallet, credit, and lending stack | Marketplace-linked pay-later and lending | Mercari identity and transaction data | Platform-integrated boundary case |
| b/43 | Smartbank | Prepaid plus credit extension routes | Family finance with pay-later features | Household budgeting surface | Mixed prepaid / credit boundary case |
| PayPay deferred payment | PayPay wallet with [[JapanFG/paypay-card|PayPay Card]] backend | Card-issuer credit line | BNPL-like wallet UX | PayPay merchant ecosystem | Card-issuer route, not pure BNPL |
| APLUS / JACCS / Orico / Credit Saison | Traditional shinpan and card groups | Individual plus comprehensive credit-purchase intermediation | Shopping-credit and installment finance | Multi-product credit economics | Registry peers to BNPL pure-plays |

## Registry Workflow

1. Confirm the current operator name in the METI individual credit-purchase intermediary list.
2. Check whether the consumer-facing brand is held by a subsidiary rather than a listed holding company.
3. Confirm whether card-number handling, funds transfer, money lending, or prepaid-payment registration is also relevant.
4. Review METI administrative-action materials before treating an operator as low-risk.
5. Separate consumer UX from legal route; BNPL-like presentation is not the same as BNPL legal classification.

## Related

- [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]
- [[payments/credit-purchase-card-operators-japan-index|Credit-purchase card operator registry]]
- [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]]
- [[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]

## Sources

- METI individual credit-purchase intermediary registry.
- METI credit-card-number handling contractor registry.
- Consumer Affairs Agency payment-trouble and pay-later warning materials.
- Public company disclosures for listed operators.
