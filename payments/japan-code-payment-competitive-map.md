---
title: "Japan code-payment competitive map"
aliases:
  - "Japan QR payment competitive map"
  - "日本コード決済競争地図"
  - "QR code payment Japan"
domain: "payments"
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [payments, code-payment, QR-payment, wallets, cashless]
status: active
sources:
  - "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html"
  - "https://paymentsjapan.or.jp/publications/code-payments-20260330/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# Japan code-payment competitive map

## Overview

Japan's code-payment market is recorded as a battle among wallet ecosystems, merchant acceptance networks, loyalty budgets, and settlement / funds-transfer capabilities. METI's 2025 cashless-payment release reports a **58.0%** cashless ratio and identifies code payment as **10.2% of cashless payment value, or 16.6 trillion yen**, while the Cashless Promotion Council publishes code-payment trend surveys covering store value / count, remittance, charge balance, and MAU.

This page routes code-payment analysis under [[payments/INDEX|payments]] and links consumer wallet operators in [[JapanFG/INDEX|JapanFG]] with PSP / gateway infrastructure such as [[JapanFG/netstars|Netstars]] and [[payments/psp-merchant-settlement-risk|merchant settlement risk]].

## Competitive Lanes

| Lane | Core route | Strategic reading |
|---|---|---|
| SoftBank / LY wallet | [[JapanFG/paypay|PayPay]] and [[JapanFG/paypay-fg|PayPay FG]] | Largest consumer-wallet gravity, merchant acceptance, points / campaigns, bank / card / securities cross-sell. |
| Rakuten ecosystem | [[JapanFG/rakuten-fg|Rakuten FG]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/rakuten-edy|Rakuten Edy]] | E-commerce, card, points, bank / securities adjacency; app and card economics interact. |
| Telecom wallet | [[JapanFG/au-payment|au PAY]] and [[JapanFG/au-fh|au Financial Holdings]] | KDDI distribution, telecom billing, bank / card / securities / insurance bundle. |
| NTT docomo route | [[JapanFG/ndfg|NTT docomo FG]] | d払い / dカード / bank-facing strategy be tracked through NDFG as structure stabilizes. |
| Marketplace wallet | [[JapanFG/merpay|Merpay]] and [[JapanFG/mercari-hd|Mercari HD]] | Marketplace balance, BNPL / credit, identity, and bank-license ambition. |
| Bank-linked wallet | [[JapanFG/recruit-mufg-business|Recruit MUFG Business]] | COIN+ / Air Wallet route; account-linked payment and Recruit merchant / consumer surfaces. |
| Travel wallet | [[JapanFG/jal-payment-port|JAL Payment Port]] | Loyalty / travel embedded finance, prepaid, transfer, bank agency. |
| QR gateway / PSP | [[JapanFG/netstars|Netstars]], [[JapanFG/sb-payment-service|SBPS]], [[JapanFG/gmo-payment-gateway|GMO-PG]] | Merchant-side aggregation, onboarding, settlement, and risk controls. |

## What Actually Drives Competition

- Consumer frequency: payment apps win when they become habitual for convenience stores, restaurants, transit-adjacent purchases, and small merchants.
- Merchant acceptance: broad acceptance requires PSPs, acquirers, QR gateways, and low operational friction, not only user incentives.
- Funding source economics: prepaid balance, bank debit, credit-card linked payment, and post-pay create different margin and risk profiles.
- Loyalty budget: points can buy usage, but sustainable differentiation needs merchant tools, data loops, or ecosystem cross-sell.
- Regulatory boundary: many wallets require careful routing across [[payments/funds-transfer-service-providers-japan-index|funds transfer]], [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid]], card acquiring, and credit.

## Operator Lens

| Question | Route |
|---|---|
| Is this a wallet or a merchant PSP? | Compare [[JapanFG/paypay|PayPay]] with [[JapanFG/netstars|Netstars]] and [[payments/psp-merchant-settlement-risk]]. |
| Is stored value withdrawable or transfer-capable? | Use [[payments/funds-transfer-vs-prepaid-boundary]]. |
| Does credit sit behind the code-payment app? | Use [[payments/credit-purchase-card-operators-japan-index]]. |
| Does the app depend on point economics? | Use [[loyalty/japan-points-landscape]]. |
| Is a bank account becoming the funding rail? | Use [[banking/baas-japan-landscape]] and [[banking/INDEX]]. |

## Counterpoints

- Code-payment headline growth can obscure that credit cards still dominate Japanese cashless value.
- MAU or app downloads do not prove profitable payment economics; points and merchant subsidies can inflate usage.
- Merchant acceptance is often controlled by PSPs and gateways, so consumer-brand share and merchant-infrastructure share can diverge.
- Bank-account linked payment can be cheaper but may lack the reward and credit features that consumers already understand.

## Open Questions

- Which code-payment operators can reduce point subsidies without losing frequency?
- How much value migrates from card-funded code payment to direct bank-account or balance-funded payment?
- Do QR gateways such as [[JapanFG/netstars|Netstars]] gain bargaining power as wallets multiply, or do dominant wallets force direct connections?
- How stablecoin / EPI pilots be reflected once real merchant payment volume exists?

## Related

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[JapanFG/paypay]]
- [[JapanFG/netstars]]
- [[loyalty/japan-points-landscape]]

## Sources

- METI, 2025 cashless payment ratio release: https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- Cashless Promotion Council, code-payment trend survey publication page: https://paymentsjapan.or.jp/publications/code-payments-20260330/
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
