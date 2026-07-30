---
source: fintech/japan-stablecoin-regulatory-landscape
source_hash: bda93442c6264fd4
lang: en
status: machine
fidelity: ok
title: "Three-Layer Structure of Japan's Stablecoin Regulatory Regime (JPYC, USDC, Project Pax)"
translated_at: 2026-07-30T00:00:00+09:00
---
# Three-Layer Structure of Japan's Stablecoin Regulatory Regime (JPYC, USDC, Project Pax)

> [!info] TL;DR
> Due to the revised Payment Services Act (→ [[fintech/japan-financial-regulation|Japan's financial-regulation framework]]), analysis of stablecoins / electronic payment instruments (EPIs) in Japan must separate **issuer**, **distributor / EPI service provider**, **platform provider**, and **wallet / payment route**.

## Current map (source-refresh 2026-07-30)

| Lane | Current anchor | What to remember |
|---|---|---|
| Funds-transfer-type JPY stablecoin issuer | [[payment-firms/jpyc|JPYC Inc.]] / [[exchanges/jp-exchange-jpyc|JPYC detailed page]] | JPYC is in the FSA funds-transfer registry as Kanto Local Finance Bureau No. 00099. It should not be mistaken for a conventional crypto exchange. |
| Foreign and domestic EPI distribution / EPI service provider | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] | The current FSA list contains one operator: SBI VC Trade, registration Kanto Local Finance Bureau No. 00001, with USDC, RLUSD, and JPYSC in the handled-instrument column. The list also warns that inclusion is not an FSA value guarantee or recommendation. |
| Trust-type stablecoin / tokenization platform | [[payment-firms/progmat|Progmat Inc.]] / [[fintech/jp-stablecoin-progmat|Progmat detailed page]] | Progmat is a platform provider. Issuer / trustee roles sit with regulated trust banks and participating financial institutions. |

Source note: the registration facts are point-in-time readings of the FSA's [funds-transfer provider list](https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf) and [EPI service-provider list](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx), downloaded on 2026-07-30. Platform-role terminology is checked against Progmat's [company overview](https://progmat.co.jp/about/) and [concept page](https://progmat.co.jp/concept/).

## Implication

Stablecoin coverage in this wiki should route as follows:

- issuer / regulated company pages: `JapanFG/`
- exchange / EPI distributor pages: `exchanges/`
- legal architecture and tokenization model pages: `fintech/`
- payment / wallet route pages: `payments/`

This avoids the common error of treating a stablecoin issuer, an EPI service provider, and a tokenization platform as the same type of financial institution.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-ecisb-license|Japan's ECISB license]]
- [[payment-firms/jpyc|JPYC Inc.]]
- [[payment-firms/progmat|Progmat Inc.]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/gold-tokenization-scheme-comparison|Comparison of token-issuance schemes in Japan]]
- [[fintech/ai-payment-two-tracks|Two payment rails for the AI industry: Stripe model vs. stablecoin model]]
<!-- /wiki-links:managed -->
