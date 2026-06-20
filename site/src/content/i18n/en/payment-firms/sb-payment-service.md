---
source: payment-firms/sb-payment-service
source_hash: 6310ec2bda2daaec
lang: en
status: machine
fidelity: ok
title: "SB Payment Service"
translated_at: 2026-06-20T09:33:00.420Z
---
# SB Payment Service


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## TL;DR

SB Payment Service is the merchant payment / PSP operator of the SoftBank group. Its official business description shows payment services from online to physical stores, plus merchant screening, management, and payment service provision as an acquirer, making it a key page for [[payments/card-acquiring-japan-stack|card acquiring stack]].

## 1. Legal Entity / License Boundary

| Item | Reading |
|---|---|
| Legal entity | SB Payment Service Corp. |
| Group context | SoftBank / LY / PayPay payment ecosystem |
| Main lanes | PSP, merchant acquiring, online and offline payment services |
| Regulatory route | Card-number merchant-contracting / acquiring control through METI registered-operator lists and official business disclosures. |

## 2. Business role

- Provides merchant-facing payment infrastructure beyond PayPay's consumer wallet, spanning online checkout, store-facing payment services, card / point services, collection agency, money-transfer, and related consulting lanes.
- Links card acceptance, online checkout, settlement operations, security controls, and merchant management. That makes it closer to a PSP / acquiring-control layer than to a consumer wallet brand.
- Its official profile identifies SoftBank as the 100% shareholder and lists PayPay SC as a related company, so the operating role should be read inside the broader SoftBank / PayPay merchant-services stack.
- Useful comparator against [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], [[payment-firms/gmo-epsilon|GMO Epsilon]], and [[payment-firms/dg-financial-technology|DGFT]].

## 3. PSP stack and regulatory position

| Layer | Public-source reading |
|---|---|
| Merchant PSP | The official business page frames SBPS as a provider of payment services from online to physical-store channels for business clients. |
| Settlement / collection | The company profile lists payment services, card / point services, collection agency services, money-transfer services, and related consulting. |
| Installment Sales Act adjacency | METI's registered-operator page is the control point for card-number merchant-contracting and credit-card handling boundaries. |
| Other registrations | The official profile lists third-party prepaid-instrument issuer, funds-transfer, telecom, card-number merchant-contracting, and electronic-payment-agency registrations; these are separate legal surfaces under one PSP operator. |

## 4. Why this standalone page matters

SoftBank's payment stack has consumer wallet, card issuer, and merchant PSP layers. SBPS is the merchant-services layer, so it needs a separate operating-company page.

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SB Payment Service company information: https://www.sbpayment.co.jp/info/
- SB Payment Service company profile: https://www.sbpayment.co.jp/info/profile/
- SB Payment Service business page: https://www.sbpayment.co.jp/info/business/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
