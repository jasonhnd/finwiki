---
title: "payments domain"
aliases:
  - "payments INDEX"
  - "Japan payments domain"
  - "日本決済 domain"
domain: "payments"
created: 2026-05-20
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-15
confidence: likely
tags: [payments, index, cashless, regulation, JapanFG]
status: active
sources:
  - "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html"
  - "https://paymentsjapan.or.jp/category/publications/"
  - "https://www.fsa.go.jp/common/shinsei/dendai/dentori.html"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://paymentsjapan.or.jp/publications/code-payments-20260330/"
  - "https://www.zengin-net.jp/zengin_system/cotra/"
  - "https://www.cotra.ne.jp/"
  - "https://jeppo.jp/bankpay/"
  - "https://jeppo.jp/bankpay/for_member/dl/k-bpkamt-n.pdf"
  - "https://jeppo.jp/bankpay/for_member/dl/g-bp-n.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/dendai.pdf"
  - "https://www.zenginkyo.or.jp/fileadmin/res/abstract/council/openapi/openapi_text_1.pdf"
  - "https://www.j-credit.or.jp/security/document/index.html"
  - "https://www.j-credit.or.jp/security/pdf/Creditcardsecurityguidelines_6.1_published.pdf"
  - "https://www.global.jcb/ja/about-us/business-area/brand/"
  - "https://www.emvco.com/emv-technologies/3-d-secure/"
  - "https://www.pcisecuritystandards.org/standards/pci-dss/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html"
  - "https://www.meti.go.jp/english/press/2023/0601_002.html"
  - "https://www.boj.or.jp/en/paym/outline/"
---

# payments domain

## Overview

This domain routes Japan payment and settlement pages. The current anchor is [[payments/cashless-jp-landscape|Japan cashless payment landscape]], which connects card, code payment, account-to-account payment, prepaid electronic money, PSP, bank-linked payment, loyalty points, and stablecoin / EPI adjacency. Major operating-company pages now live mostly under [[JapanFG/INDEX|JapanFG]], while large license populations such as third-party prepaid issuers, funds-transfer operators, and credit / card merchant-contracting operators are routed through registry-control pages. Payment-license categories are summarized in [[JapanFG/legal-financial-licenses/payment-license-stack|Japan payment license stack]], card merchant-fee fields are routed through [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]], and clearing / settlement systems are routed through [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]].

Use this domain when the question is **how value moves at checkout or through a wallet**, not when the question is only "which financial group owns the product."

## Route Map

| Lane | Start here | Related control page |
|---|---|---|
| Japan cashless market | [[payments/cashless-jp-landscape|Japan cashless payment landscape]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Payment license stack | [[JapanFG/legal-financial-licenses/payment-license-stack|Japan payment license stack]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Card acquiring / merchant PSP | [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] |
| Card role split | [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer, acquirer, and processor split]] | [[payments/credit-purchase-card-operators-japan-index|credit / card registry]] |
| Interchange / merchant fee | [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] | [[payments/japan-card-issuer-acquirer-processor-split|card role split]] |
| Card security / authentication | [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] | [[payments/japan-card-issuer-acquirer-processor-split|card role split]] |
| Wallet legal boundary | [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Bank API / payment agency | [[payments/japan-bank-api-payment-agency-route|Japan bank API and electronic payment agency route]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Bank API incidents | [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud-control map]] | [[payments/japan-bank-api-payment-agency-route|bank API route]] |
| Funds-transfer registry | [[payments/funds-transfer-service-providers-japan-index|Japan funds-transfer service providers registry]] | FSA `shikin_idou.pdf` |
| Prepaid issuer registry | [[payments/prepaid-payment-instrument-issuers-japan-index|Japan third-party prepaid issuer registry]] | FSA `daisan.xlsx` |
| Credit / card registry | [[payments/credit-purchase-card-operators-japan-index|Japan credit purchase and card operator registry]] | METI Installment Sales Act lists |
| BNPL / credit purchase | [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] | [[JapanFG/bnpl-landscape|BNPL landscape]] |
| Code-payment competition | [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] | [[payments/cashless-jp-landscape|cashless landscape]] |
| Account-to-account payments | [[payments/account-to-account-payment-japan|Japan account-to-account payment route]] | [[banking/quick-deposit-four-methods|quick deposit methods]] |
| Account-direct merchant acquiring | [[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring in Japan]] | [[payments/psp-merchant-settlement-risk|PSP settlement risk]] |
| Clearing / settlement infrastructure | [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] | [[payments/account-to-account-payment-japan|account-to-account payment route]] |
| Payment scheme economics | [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] | [[payments/cashless-jp-landscape|cashless landscape]] |
| PSP settlement risk | [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] | [[payments/card-acquiring-japan-stack|card acquiring stack]] |
| Points / campaign economics | [[loyalty/japan-points-landscape|Japan points landscape]] | [[loyalty/INDEX|loyalty INDEX]] |
| Retail payment platforms | [[retail/aeon-group|AEON Group]], [[retail/seven-and-i-hd|Seven & i]] | [[retail/INDEX|retail INDEX]] |
| Merchant PSP / acquiring | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[business/gmo-internet-group|GMO Internet Group]] | [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]] |
| Embedded bank payment | [[banking/baas-japan-landscape|BaaS Japan landscape]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]] | [[banking/INDEX|banking INDEX]] |
| Stablecoin / EPI payment | [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]], [[fintech/japan-ecisb-license|Japan ECISB license]] | [[fintech/INDEX|fintech INDEX]] |

## JapanFG Operator Anchors

| Lane | Operators |
|---|---|
| Card issuers / acquirers | [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/epos-card|EPOS Card]], [[JapanFG/life-card|Life Card]], [[JapanFG/pocket-card|Pocket Card]], [[JapanFG/ucs-card|UCS]], [[JapanFG/seven-card-service|Seven Card Service]] |
| Consumer finance / installment | [[JapanFG/smbc-consumer-finance|SMBC Consumer Finance]], [[JapanFG/shinsei-financial|Shinsei Financial]], [[JapanFG/aplus|APLUS]], [[JapanFG/toyota-finance|Toyota Finance]], [[JapanFG/aiful|AIFUL]], [[JapanFG/acom|ACOM]], [[JapanFG/orico|Orico]], [[JapanFG/jaccs|JACCS]] |
| Merchant PSP / gateway | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[JapanFG/gmo-epsilon|GMO Epsilon]], [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/dg-financial-technology|DGFT]], [[JapanFG/netstars|Netstars]] |
| Wallet / funds transfer | [[JapanFG/paypay|PayPay]], [[JapanFG/merpay|Merpay]], [[JapanFG/au-payment|au Payment]], [[JapanFG/rakuten-edy|Rakuten Edy]], [[JapanFG/kyash|Kyash]], [[JapanFG/smartbank|SmartBank]], [[JapanFG/pring|pring]], [[JapanFG/seven-payment-service|Seven Payment Service]], [[JapanFG/recruit-mufg-business|Recruit MUFG Business]], [[JapanFG/jal-payment-port|JAL Payment Port]] |
| Cross-border remittance | [[JapanFG/wise-payments-japan|Wise Payments Japan]], [[JapanFG/revolut-technologies-japan|Revolut Japan]], [[JapanFG/paypal-pte-ltd-japan|PayPal]], [[JapanFG/payoneer-japan|Payoneer Japan]], [[JapanFG/western-union-japan|Western Union Japan]], [[JapanFG/sbi-remit|SBI Remit]], [[JapanFG/travelex-japan|Travelex Japan]], [[JapanFG/airwallex-japan|Airwallex Japan]] |
| Stablecoin / EPI adjacency | [[JapanFG/jpyc|JPYC]], [[JapanFG/progmat|Progmat]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade / USDC]] |

## Active Entries

| Status | Page | Role |
|---|---|---|
| likely | [[payments/cashless-jp-landscape|Japan cashless payment landscape]] | Top-level Japan cashless market, legal stack, and competitive-map bridge |
| likely | [[JapanFG/legal-financial-licenses/payment-license-stack|Japan payment license stack]] | Funds transfer, prepaid, electronic payment agency, EPI transaction, electronic payment handling, credit / card, and account-direct payment routes |
| likely | [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] | Card acquiring, PSP registration, merchant-contracting, PCI DSS, and fraud-control boundary |
| likely | [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer, acquirer, and processor split]] | Issuer / acquirer / brand / PSP / merchant role split for card payment analysis |
| likely | [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] | Card merchant-fee, issuer-fee / interchange, acquirer-share, JFTC / METI / Payments Japan disclosure fields |
| likely | [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] | EC card-data protection, EMV 3-D Secure, tokenization, PCI DSS, merchant vulnerability, and fraud-control route |
| likely | [[payments/japan-bank-api-payment-agency-route|Japan bank API and electronic payment agency route]] | Bank API, electronic payment agency, account information, and payment-instruction route |
| likely | [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud-control map]] | Bank API outage, unauthorized instruction, AML, user-compensation, and reconciliation controls |
| likely | [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] | Wallet / stored-value classification between remittance and prepaid payment instruments |
| likely | [[payments/prepaid-payment-instrument-issuers-japan-index|Japan third-party prepaid issuer registry]] | FSA 803-row registry-control route for third-party prepaid payment instrument issuers |
| likely | [[payments/funds-transfer-service-providers-japan-index|Japan funds-transfer service providers registry]] | FSA 83-row registry-control route for funds-transfer service providers |
| likely | [[payments/credit-purchase-card-operators-japan-index|Japan credit purchase and card operator registry]] | METI Installment Sales Act registry-control route for card, credit, and merchant-contracting operators |
| likely | [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] | BNPL / pay-later / installment / credit-purchase boundary control page |
| likely | [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] | PayPay / Rakuten / au PAY / d払い / Merpay / gateway competitive map |
| likely | [[payments/account-to-account-payment-japan|Japan account-to-account payment route]] | Cotra / Bank Pay / J-Debit / bank-account direct payment route |
| likely | [[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring in Japan]] | Bank Pay / J-Debit merchant onboarding, connected-business, refund, fraud, and settlement controls |
| likely | [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] | BOJ, BOJ-NET, Zengin, Cotra, Bank Pay, J-Debit, and account-direct clearing / settlement map |
| likely | [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] | Merchant onboarding, settlement, fraud, reserve, and chargeback risk control page |

## Expansion Backlog

| Priority | Candidate | Why |
|---|---|---|
| Done | [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] | Created in Batch K to route PayPay / Rakuten / d払い / au PAY / Merpay competition |
| Done | [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] | Created in Batch K to route merchant settlement, chargeback, fraud, and reserve risk |
| Done | [[payments/account-to-account-payment-japan|Japan account-to-account payment route]] | Created to route Cotra / Bank Pay / J-Debit / bank-account direct payment after funds-transfer registry refresh |
| Done | [[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring in Japan]] | Created to route merchant-side acquiring, refunds, fraud, connected-business, and settlement detail for account-direct QR payment |
| Done | [[payments/japan-bank-api-payment-agency-route|Japan bank API and electronic payment agency route]] | Created to route electronic payment agency / bank API instruction and account-linking services |
| Done | [[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud-control map]] | Created to route bank API outage, unauthorized instruction, user compensation, AML, and reconciliation controls |
| Done | [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer, acquirer, and processor split]] | Created to separate issuer, acquirer, brand, PSP, processor, merchant, and security obligations |
| Done | [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] | Created to route BNPL / pay-later / installment / credit-purchase classification |
| Done | [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] | Created to route EMV 3-D Secure, non-retention, PCI DSS, EC merchant vulnerability controls, issuer / acquirer / PSP fraud monitoring, and chargeback evidence |
| Done | [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] | Created to route JFTC / METI / Payments Japan card merchant-fee and issuer-fee / interchange disclosure fields |
| Done | [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]] | Created to route BOJ, Zengin, Cotra, Bank Pay, J-Debit, and account-direct clearing / settlement infrastructure |

## Related

- [[INDEX|FinWiki index]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[loyalty/INDEX|loyalty INDEX]]
- [[retail/INDEX|retail INDEX]]
- [[fintech/INDEX|fintech INDEX]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
