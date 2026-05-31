---
source: fintech/gold-tokenization-scheme-comparison
source_hash: 979169963f8df2d3
lang: en
status: machine
fidelity: ok
title: "Comparison of Token Issuance Schemes in Japan"
translated_at: 2026-05-31T06:16:15.663Z
---

# Comparison of Token Issuance Schemes in Japan

> [!info] TL;DR
> When issuing real-asset-backed tokens in Japan, there are mainly 3 schemes to choose from.

## Scheme A: Crypto Asset Type
- Based on the Payment Services Act (→ [[fintech/japan-financial-regulation|日本金融規制]])
- Listed and distributed by crypto asset exchange operators (CAESP) (see [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX 預金トークン/SC 統合]] for the typical CEX-side overview)
- High post-listing liquidity
- Relatively clear regulatory treatment
- Suited to: liquidity-first, utilising existing exchanges

## Scheme B: Security Token (ST) Type
- Based on rights represented by electronically recorded transferable securities under the Financial Instruments and Exchange Act
- Distributed via PTS (proprietary trading system) or handling operators
- Accessible to institutional investors (reference: [[exchanges/rwa-tokenization-cex-integration|CEX RWA トークン化統合]])
- Higher compliance burden
- Suited to: institutional investors, large-lot transactions

## Scheme C: Trust Type
- Beneficiary-interest tokenisation under the Trust Business Act
- Requires collaboration with a trust bank (see [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]] for a similar SC design)
- Strongest investor protection
- High design flexibility but time-consuming to structure
- Suited to: conservative schemes with a trust bank partner

## Selection criteria

Scheme selection is determined by:
1. Target investor segment (retail vs institutional)
2. Liquidity requirements (immediate listing vs long-term hold)
3. Tolerance for regulatory compliance costs
4. Availability of a partner financial institution

Reference: [[fintech/japan-financial-regulation|日本金融規制]] · For the institutional framework on the stablecoin side, see [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
<!-- /wiki-links:managed -->
