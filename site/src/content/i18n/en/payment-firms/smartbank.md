---
source: payment-firms/smartbank
source_hash: 67c6fa9daab60900
lang: en
status: machine
fidelity: ok
title: "スマートバンク (SmartBank)"
translated_at: 2026-06-15T03:48:21.835Z
---

# スマートバンク (SmartBank)

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]] (its domain route). Read it against [[payment-firms/kyash|Kyash]] for peer / contrast (prepaid + app-led fintech), and against [[financial-regulators/fsa|the FSA]] plus [[payments/funds-transfer-vs-prepaid-boundary|the funds-transfer vs prepaid boundary]] for the supervisory / system boundary.

## TL;DR

株式会社スマートバンク is a household-finance / prepaid wallet fintech that operates the household-management prepaid card "B/43 (Bee-yon-san, renamed to "ワンバンク")". In public information it has the rare configuration of holding **two licenses** —— a **funds-transfer service provider** (Director-General of the Kanto Local Finance Bureau 第00084号) and a **third-party-type prepaid payment instrument issuer** obtained in 2024 年 (Director-General of the Kanto Local Finance Bureau 第00782号). It pairs a chargeable Visa prepaid card with a household-account-book app, a case of combining a payment account with a household-management UX.

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 株式会社スマートバンク |
| License route | Funds-transfer service provider (Director-General of the Kanto Local Finance Bureau 第00084号) + third-party-type prepaid payment instrument (Director-General of the Kanto Local Finance Bureau 第00782号) |
| Parent / group | Independent fintech (startup) |
| Product surface | B/43  → "ワンバンク" household-management app + Visa prepaid card |
| Main lanes | Prepaid account, household budget management, shared spending, funds transfer |
| Wiki role | A prepaid / funds-transfer fintech page starting from household management |

## 2. Operating model

SmartBank builds a payment / account-like UX from the problem of household budget management. It uses the licensing of both prepaid and funds-transfer business to support the flows of shared spending and the wallet. Although it is small in scale compared with megabanks and telecom-group wallets, in showing a design that launches a financial UX from "household budgeting" rather than from banking・commerce, a contrast with the [[payment-firms/kyash|Kyash]] or [[payment-firms/paypay|PayPay]] super-app is useful. For the BaaS context, see [[banking/baas-japan-landscape|BaaS Japan landscape]].

## 3. Why this page matters

- It fixes a concrete example of a license configuration where a single company holds both funds-transfer business and third-party-type prepaid payment instruments.
- It makes visible the design of combining "prepaid (refunds prohibited in principle)" and "funds-transfer (remittance possible)" within a single company.
- It becomes a case anchor for an independent fintech building a payment account with household management as the entry point.

## Related

- [[payment-firms/INDEX|payment-firms INDEX]]
- [[payment-firms/kyash|Kyash]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[INDEX|FinWiki index]]

## Sources

- SmartBank company profile: https://smartbank.co.jp/company
- ワンバンク: 資金決済法に基づく表示: https://onebank.jp/settlement/
- FSA funds-transfer service provider list (`shikin_idou.pdf`): https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf

> [!info] Verification status
> confidence: likely. The dual license of funds-transfer business (第00084号) and third-party-type prepaid payment instrument (第00782号, 2024 年 registration) is based on public press releases / registration lists. The product name was renamed from B/43  → "ワンバンク".
