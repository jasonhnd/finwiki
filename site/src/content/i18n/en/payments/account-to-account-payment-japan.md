---
source: payments/account-to-account-payment-japan
source_hash: 36cad5cc1aee1693
lang: en
status: machine
fidelity: ok
title: "Japan account-to-account payment route"
translated_at: 2026-06-01T03:31:12.301Z
---

# Japan account-to-account payment route

## Overview

Japan account-to-account payments sit between classic bank transfer, wallet balance, card acquiring, and code payment. The important control question is: **is value moving directly from a deposit account, through a funds-transfer / prepaid balance, or through a merchant acquiring / card network layer?**

Use this page with [[payments/INDEX|payments domain]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]], [[payments/japan-code-payment-competitive-map|code-payment competitive map]], [[banking/quick-deposit-four-methods|quick deposit methods]], and [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]].

## Rail Map

| Rail | Operator / source route | Customer view | FinWiki reading |
|---|---|---|---|
| Classic bank transfer | Banks and Zengin System | Bank account to bank account, often account-number based. | Core bank-payment rail; use [[banking/INDEX|banking domain]] when balance-sheet or bank-system structure matters. |
| Cotra / ことら送金 | Cotra system linked with Zengin System | Small-value instant personal transfer using bank apps, account number, phone number, email, or compatible account identifiers. | A2A interoperability layer between deposit-taking institutions and funds-transfer operators. |
| Bank Pay | JEPPO / Japan Electronic Payment Promotion Organization | QR / barcode payment from registered bank account, with direct debit-style account settlement. | Merchant payment rail that competes with code payments but has direct account funding logic. |
| J-Debit | JEPPO / J-Debit infrastructure | Cash-card based debit at merchants. | Legacy account-direct merchant debit layer and infrastructure base for Bank Pay. |
| Wallet bank-link payment | Pay app, bank API / account connection, funds-transfer or prepaid operator | User sees PayPay / Merpay / au PAY / other wallet flow. | Need to separate account funding, wallet balance, merchant acquiring, and funds-transfer / prepaid classification. |
| BaaS / embedded bank account | Bank partner and app provider | App looks like a bank or wallet. | Use [[banking/baas-japan-landscape|BaaS Japan landscape]] and [[banking/mercari-bank-license-stack|Mercari Bank license stack]]. |

## Cotra System Reading

Zengin-Net's official explanation says Cotra was established after the 2020 small-value payment infrastructure concept by five city banks, with services through the Cotra system starting in October 2022 for personal transfers of 100,000 yen or less. It also describes the system as combining Zengin System and existing mechanisms with newer IT, opening connection not only to deposit-taking financial institutions but also to funds-transfer operators, and settling connected operators' funds through Zengin System twice during the day.

For FinWiki, this makes Cotra a useful bridge between:

- [[JapanFG/mufg-bank|MUFG Bank]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]], [[JapanFG/mizuho-bank|Mizuho Bank]], [[JapanFG/resona-bank|Resona Bank]], and other deposit-taking banks;
- app banks and digital bank routes such as [[JapanFG/ssnb|SBI Sumishin Net Bank]] and [[banking/minna-bank-baas-model|Minna Bank BaaS]];
- funds-transfer operators routed through [[payments/funds-transfer-service-providers-japan-index|Japan funds-transfer service providers registry]];
- user-facing wallet and code-payment routes in [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]].

## Bank Pay / J-Debit Reading

JEPPO describes itself as providing J-Debit and Bank Pay cashless services through account-direct payment infrastructure. Its Bank Pay page describes Bank Pay as a smartphone payment service operated by JEPPO, available to users with bank accounts, allowing payment directly from a registered bank account without prior charging. The page also states that Bank Pay uses the J-Debit payment infrastructure and allows registration of multiple accounts.

This matters because Bank Pay looks like a QR payment to a consumer, but the economic and risk reading differs from a wallet that first stores balance:

- no stored-value balance is required for the direct account-payment leg;
- the bank-account registration and authentication layer is central;
- merchant acceptance, refunds, fraud handling, and user-support rules differ from card and prepaid rails;
- Bank Pay can also surface Cotra remittance and bill-payment functions.

## Product Boundary

| Product pattern | Main question | Typical route |
|---|---|---|
| Person-to-person transfer under Cotra | Is the sender a bank customer, wallet customer, or funds-transfer customer? | Cotra / Zengin linkage plus bank or funds-transfer provider disclosure. |
| QR merchant payment from bank account | Is the account debited directly or is wallet balance first charged? | Bank Pay / account-direct route. |
| Wallet payment after bank charge | Is value stored in wallet before merchant payment? | [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]. |
| Merchant QR payment through PayPay / d払い / au PAY / Rakuten Pay | Is this code-payment, card acquiring, prepaid, or funds-transfer economics? | [[payments/japan-code-payment-competitive-map|code-payment competitive map]] and [[payments/psp-merchant-settlement-risk|PSP settlement risk]]. |
| Quick deposit into securities / crypto account | Is the rail bank transfer, account debit, API instruction, or payment agency route? | [[banking/quick-deposit-four-methods|quick deposit methods]] and [[JapanFG/legal-financial-licenses/INDEX|license stack]]. |

## JapanFG Relevance

- Megabanks and core banks are central because account-to-account payments ultimately require deposit-account connectivity and bank clearing / settlement rules.
- [[JapanFG/recruit-mufg-business|Recruit MUFG Business]] and COIN+ type models is recorded as attempts to build merchant and consumer payment frequency around account-connected rails.
- [[JapanFG/paypay|PayPay]], [[JapanFG/merpay|Merpay]], [[JapanFG/au-payment|au PAY]], and [[JapanFG/rakuten-edy|Rakuten Edy]] remain wallet / code-payment anchors, but their bank-link flows is separate from pure account-to-account payment.
- [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]], [[JapanFG/fukuoka-fg|Fukuoka FG]], and regional-bank app routes matter because Cotra and Bank Pay can turn bank apps into daily payment surfaces.

## Risks and Caveats

| Risk | Reading |
|---|---|
| Bank account fraud / unauthorized debit | Account-direct payment makes authentication, device transfer, and account registration controls important. |
| Consumer confusion | QR payment UX can hide whether the product is account-direct, prepaid, funds-transfer, card, or wallet balance. |
| Merchant acceptance fragmentation | Bank Pay, J-Debit, Cotra-enabled apps, and code-payment apps have different merchant networks. |
| Settlement timing | Customer-facing instant completion and inter-operator final settlement are different layers. |
| Interoperability limits | Cotra availability depends on participating apps and institutions; Bank Pay availability depends on registered banks and merchants. |
| Regulatory classification | Funds-transfer and prepaid regimes still matter when a non-bank or wallet operator touches value. |

## Research Checklist

1. Identify whether the value starts in a bank deposit account, wallet balance, card line, or prepaid balance.
2. Identify whether the merchant or recipient receives bank money, wallet value, or funds-transfer value.
3. Check the operator: bank, funds-transfer service provider, prepaid issuer, PSP, or code-payment platform.
4. For Cotra, check the current participating app / institution page.
5. For Bank Pay, check current participating financial institutions and merchant acceptance.
6. Link company pages back to [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] and [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] before making license claims.

## Related

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/psp-merchant-settlement-risk]]
- [[banking/quick-deposit-four-methods]]
- [[banking/baas-japan-landscape]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/recruit-mufg-business]]
- [[JapanFG/paypay]]
- [[JapanFG/merpay]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Zengin-Net: Cotra system linkage explanation.
- Cotra: official service, P2P transfer, and participating-operator pages.
- JEPPO: organization and Bank Pay official pages.
- FSA: funds-transfer service provider registry.
