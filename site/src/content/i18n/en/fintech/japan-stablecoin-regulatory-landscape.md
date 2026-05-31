---
source: fintech/japan-stablecoin-regulatory-landscape
source_hash: db6813d841884540
lang: en
status: machine
fidelity: ok
title: "Three-Layer Structure of Japan's Stablecoin Regulatory Regime (JPYC, USDC, Project Pax)"
translated_at: 2026-05-31T07:28:06.180Z
---
# Three-Layer Structure of Japan's Stablecoin Regulatory Regime (JPYC, USDC, Project Pax)

> [!info] TL;DR
> Due to the revised Payment Services Act (→ [[fintech/japan-financial-regulation|日本金融規制]]), analysis of stablecoins / electronic payment instruments (EPIs) in Japan must separate **issuer**, **distributor / EPI service provider**, **platform provider**, and **wallet / payment route**.

## Current map (source-refresh 2026-05-21)

| Lane | Current anchor | What to remember |
|---|---|---|
| Funds-transfer-type JPY stablecoin issuer | [[JapanFG/jpyc|JPYC株式会社]] / [[exchanges/jp-exchange-jpyc|JPYC detailed page]] | JPYC is in the FSA funds-transfer registry as Kanto Local Finance Bureau Director-General 第00099号. It should not be mistaken for a conventional crypto exchange. |
| Foreign stablecoin distribution / EPI service provider | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] | FSA's EPI service-provider list contains one operator: SBI VC Trade, registration Kanto Local Finance Bureau Director-General 第00001号, handling USDC. |
| Trust-type stablecoin / tokenization platform | [[JapanFG/progmat|株式会社Progmat]] / [[fintech/jp-stablecoin-progmat|Progmat detailed page]] | Progmat is a platform provider. Issuer / trustee roles sit with regulated trust banks and participating financial institutions. |

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
- [[fintech/japan-ecisb-license|日本 ECISB 牌照——专为"不碰资金的交易路由中介"设计的轻量牌照]]
- [[JapanFG/jpyc|JPYC株式会社]]
- [[JapanFG/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
<!-- /wiki-links:managed -->
