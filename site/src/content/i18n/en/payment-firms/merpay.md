---
source: payment-firms/merpay
source_hash: eede29db6d36dccc
lang: en
status: machine
fidelity: ok
title: "Merpay"
translated_at: 2026-06-20T09:33:00.420Z
---
# Merpay


## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it with [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the broader system boundary.

## TL;DR

Merpay is the payment and credit operating company of [[payment-firms/mercari-hd|メルカリ]]. Its official About page lists registrations for funds transfer, prepaid payment instruments, credit purchase intermediation, money lending, and related businesses, making a standalone page necessary as the connection point between marketplace balance, wallet, and credit.

## 1. Legal entity / license boundary

| Item | Reading |
|---|---|
| Legal entity | 株式会社メルペイ |
| Group | [[payment-firms/mercari-hd|Mercari]] |
| Main lanes | Merpay wallet, Mercari sales-balance payment, funds transfer, credit / lending adjacency |
| FSA registry route | FSA funds-transfer list: Kanto Local Finance Bureau Director 第00057号, 株式会社メルペイ. |

## 2. Business role

- Converts Mercari marketplace sales proceeds, buyer / seller identity, and app engagement into payment, wallet, and credit usage.
- Bridges C2C marketplace data, code payment, prepaid value, funds-transfer balance, deferred payment, and bank-account withdrawal; see [[payments/japan-card-issuer-acquirer-processor-split]] for the issuer / acquirer / processor split.
- The Mercari Payment Services Act disclosure separates paid points from Merpay balance, which is important because prepaid-instrument safeguarding and funds-transfer safeguarding are not the same control problem.
- A comparator against PayPay, Rakuten Pay, au PAY, and d払い — also surfaced in [[payments/funds-transfer-service-providers-japan-index]].

## 3. Regulatory and product boundary

| Layer | Public-source reading |
|---|---|
| Funds transfer | Merpay's official pages and the FSA list identify it as Kanto Local Finance Bureau no. 00057. The disclosure states that Merpay balance is not a bank deposit and is safeguarded under the Payment Services Act. |
| Prepaid points | Paid points are disclosed separately as third-party prepaid instruments; this matters for refund, expiry, and reserve treatment. |
| Credit / lending adjacency | Merpay's company page lists comprehensive credit-purchase intermediary and money-lending registrations, so the page should be read as a wallet-plus-credit operator rather than only a code-payment brand. |
| Marketplace loop | The strategic loop is Mercari sales proceeds -> Merpay balance / payment -> credit or deferred-payment products -> repeat marketplace and merchant usage. |

## 4. Why this standalone page matters

Mercari's marketplace business and Merpay's regulated payment / credit business have different risk and compliance questions. This page keeps the financial-service boundary explicit.

## Related

- [[payment-firms/mercari-hd]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]

## Sources

- Merpay About: https://jp.merpay.com/about/
- Mercari Payment Services Act disclosure: https://static.jp.mercari.com/shikin_kessai
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
