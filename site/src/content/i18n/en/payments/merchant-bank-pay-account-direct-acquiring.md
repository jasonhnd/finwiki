---
source: payments/merchant-bank-pay-account-direct-acquiring
source_hash: cf95d821def01a8c
lang: en
status: machine
fidelity: ok
title: "Merchant bank-account direct acquiring in Japan"
translated_at: 2026-06-01T03:31:12.293Z
---

# Merchant bank-account direct acquiring in Japan

## Overview

Merchant bank-account direct acquiring is the merchant-side reading of [[payments/account-to-account-payment-japan|Japan account-to-account payment route]]. Bank Pay and J-Debit can look like ordinary QR / debit acceptance at checkout, but the control surface is different from card acquiring, prepaid wallets, and funds-transfer wallets: the payment starts from a bank account, merchant onboarding involves Bank Pay / J-Debit participant rules, and operational risk centers on account authentication, refund handling, registration screening, system connectivity, and settlement.

Use this page with [[payments/INDEX|payments domain]], [[payments/card-acquiring-japan-stack|Japan card acquiring stack]], [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], and [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]].

## Merchant Route Map

| Route | Merchant-facing reading | Main control question |
|---|---|---|
| Bank Pay direct merchant | Merchant registers directly or through the Bank Pay participant structure. | Who performs merchant screening, registration, support, refund / cancellation process, and settlement reconciliation? |
| Bank Pay indirect / connected app route | A connected business or app provides payment UI or merchant system connection. | Who is the connection provider and which Bank Pay guideline / contract obligations flow downstream? |
| J-Debit merchant | Merchant accepts bank cash-card debit through J-Debit infrastructure. | Does the merchant have direct / indirect J-Debit acceptance and terminal / PIN controls? |
| PSP gateway layer | PSP or payment gateway wraps account-direct acceptance with other payment methods. | Separate Bank Pay / J-Debit obligations from card acquiring, code payment, and wallet settlement risk. |
| Cotra-adjacent bill / app flow | Account-direct app payment may also surface Cotra remittance or bill-payment functions. | Do not confuse person-to-person transfer, tax / bill payment, and merchant purchase acceptance. |

## Bank Pay Participant Stack

JEPPO's Bank Pay merchant registration rules define Bank Pay merchant registration and distinguish direct merchant, voluntary association, financial-institution merchant, indirect merchant, representative indirect merchant, and connected business routes. The registration rules also require screening by the Bank Pay merchant bank for business type, service content, financial soundness, and antisocial-force checks before registration materials are submitted.

The Bank Pay guideline further defines connection providers and re-connection providers. In practical terms:

- a merchant may not be the only operational actor;
- a connected app or system provider can sit between the merchant and Bank Pay infrastructure;
- financial institutions and JEPPO rules shape onboarding and ongoing compliance;
- app / server connectivity, transaction relays, clearing, and refund / cancellation handling must be understood as operating layers, not marketing text.

## Control Matrix

| Control area | Public relevance |
|---|---|
| Merchant screening | Account-direct rails move money from bank accounts, so business type, prohibited goods, fraud risk, and financial soundness matter. |
| Antisocial-force checks | JEPPO registration rules explicitly include antisocial-force related rejection / confirmation routes. |
| Connected-business governance | Bank Pay can involve connected businesses and re-connection businesses; obligations need to flow through app / system providers. |
| Customer authentication | Bank-account registration, app authentication, device transfer, and transaction authorization are central risk points. |
| Refund / cancellation | Account-direct refunds differ from card chargebacks and wallet-balance reversals. |
| Settlement reconciliation | Merchant-side settlement, clearing center output, and bank-account cash movement must match merchant ledger and PSP reports. |
| System availability | JEPPO public notices show maintenance / incident messages for Bank Pay functions, so operational availability belongs in merchant risk review. |
| User explanation | Consumers may see QR payment but not understand whether the source is account-direct, wallet balance, card, or prepaid value. |

## Comparison With Card And Wallet Acquiring

| Topic | Account-direct / Bank Pay / J-Debit | Card acquiring / PSP | Wallet / code payment |
|---|---|---|---|
| Funding source | Bank deposit account. | Credit line, debit card, prepaid card, or card network account. | Wallet balance, linked bank/card, prepaid, or funds-transfer balance. |
| Merchant onboarding | Bank Pay / J-Debit participant and bank / JEPPO route. | Acquirer / PSP / card network rules. | Wallet operator / PSP / merchant contract route. |
| Dispute economics | Refund / cancellation and account-debit rules; not a standard credit-card chargeback model. | Chargeback and card-scheme dispute rules. | Wallet-specific refund, fraud, reserve, and settlement rules. |
| Risk focus | Account takeover, unauthorized debit, app registration, merchant screening. | Card fraud, chargebacks, PCI DSS, acquirer risk. | Wallet balance, merchant fraud, bonus / campaign abuse, AML / funds-transfer boundary. |
| Data value | Bank-account payment frequency and merchant category. | Card network and acquirer transaction data. | App frequency, loyalty, wallet, campaign, and merchant data. |

## JapanFG Relevance

- [[JapanFG/mufg-bank|MUFG Bank]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]], [[JapanFG/mizuho-bank|Mizuho Bank]], and [[JapanFG/resona-bank|Resona Bank]] matter because account-direct payment depends on bank participation and clearing / settlement connectivity.
- [[JapanFG/recruit-mufg-business|Recruit MUFG Business]] / COIN+ is routed through the merchant network and account-direct acquisition lens, not only as another QR wallet.
- [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[JapanFG/gmo-epsilon|GMO Epsilon]], [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/dg-financial-technology|DGFT]], and [[JapanFG/netstars|Netstars]] are PSP / gateway pages to compare when account-direct acceptance is bundled with card, wallet, or code payment acceptance.
- [[JapanFG/paypay|PayPay]], [[JapanFG/merpay|Merpay]], [[JapanFG/au-payment|au PAY]], and [[payments/japan-code-payment-competitive-map|code-payment competition]] remain separate because wallet economics and account-direct economics can look similar in QR form but differ legally and operationally.

## Research Checklist

1. Identify whether the merchant route is Bank Pay, J-Debit, wallet code payment, card acquiring, or a PSP bundle.
2. Identify the merchant contract party: bank, JEPPO-related route, PSP, connected business, wallet operator, or acquirer.
3. Check whether the merchant is direct, indirect, or connected through another app / system provider.
4. Map refund, cancellation, failed-payment, and reconciliation processes.
5. Check system-maintenance / incident notices if the merchant depends on real-time account debit.
6. Separate account-direct fraud controls from card chargeback controls and prepaid / funds-transfer wallet controls.

## Related

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-code-payment-competitive-map]]
- [[JapanFG/recruit-mufg-business]]
- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/netstars]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- JEPPO: official organization / service pages.
- JEPPO: Bank Pay official page.
- JEPPO: Bank Pay merchant registration rules PDF.
- JEPPO: Bank Pay guideline PDF.
- Zengin-Net: Cotra system explanation.
- Cotra: official P2P transfer page.
- FSA: funds-transfer service provider registry.
