---
title: 日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）
aliases:
  - "Japan stablecoin regulatory landscape"
  - "日本ステーブルコイン制度"
  - "JPYC USDC Progmat"
  - "fintech/japan-stablecoin-and-crypto-regulation"
domain: fintech
kind: knowledge
topic: japan-stablecoin-regulatory-landscape
created: 2026-04-14
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-10-30
confidence: likely
tags: [fintech, stablecoin, JapanFG, EPI]
status: confirmed
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
  - "https://jpyc.co.jp/"
  - "https://www.sbivc.co.jp/usdc"
  - "https://progmat.co.jp/about/"
  - "https://progmat.co.jp/concept/"
---

# 日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）

> [!info] TL;DR
> 改正資金決済法（→ [[fintech/japan-financial-regulation|日本金融規制]]）により、日本の stablecoin / electronic payment instrument (EPI) analysis must separate **issuer**, **distributor / EPI service provider**, **platform provider**, and **wallet / payment route**.

## Current map (source-refresh 2026-05-21)

| Lane | Current anchor | What to remember |
|---|---|---|
| Funds-transfer-type JPY stablecoin issuer | [[payment-firms/jpyc|JPYC株式会社]] / [[exchanges/jp-exchange-jpyc|JPYC detailed page]] | JPYC is in the FSA funds-transfer registry as 関東財務局長 第00099号. It should not be mistaken for a conventional crypto exchange. |
| Foreign stablecoin distribution / EPI service provider | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] | FSA's EPI service-provider list contains one operator: SBI VC Trade, registration 関東財務局長 第00001号, handling USDC. |
| Trust-type stablecoin / tokenization platform | [[payment-firms/progmat|株式会社Progmat]] / [[fintech/jp-stablecoin-progmat|Progmat detailed page]] | Progmat is a platform provider. Issuer / trustee roles sit with regulated trust banks and participating financial institutions. |

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
- [[payment-firms/jpyc|JPYC株式会社]]
- [[payment-firms/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
<!-- /wiki-links:managed -->
