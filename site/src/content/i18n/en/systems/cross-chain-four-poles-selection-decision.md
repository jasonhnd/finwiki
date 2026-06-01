---
source: systems/cross-chain-four-poles-selection-decision
source_hash: 83c3da6853864a8b
lang: en
status: machine
fidelity: ok
title: "Cross-Chain Selection Decision Tree · Matching Protocols by Lead Dimension"
translated_at: 2026-06-01T04:15:40.153Z
---
# Cross-Chain Selection Decision Tree · Matching Protocols by Lead Dimension

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- CCTP V2 Hooks(2025.03) enables destination-chain atomic callbacks and replaces traditional bridges ^[extracted]

## Mechanism / How it works

**Selection decision tree**:

```
Who is your lead actor?
├── Stablecoin L1(Tempo)
│   → CCIP (institutional required) + LayerZero (general backup)
│
├── EVM L2(Base)
│   → CCIP (Circle bridge) + LayerZero (long-tail) + CCTP V2 (USDC fast)
│
├── Solana / Move ecosystem
│   → Wormhole (TVL + history)
│
├── long-tail L2 / appchain
│   → Hyperlane (permissionless · no waiting for listing)
│
└── Pure USDC sourcing
    → CCTP V2 (1-2 min · no bridge risk · burn-mint)
```

**Decision logic**:
- Does the customer base include institutional actors(banks / card networks / regulators)? → CCIP is a required layer
- Is the chain on the LayerZero / CCIP list? → If not, Hyperlane is the only controllable option
- Is it pure USDC? → CCTP V2  is faster than a general bridge(1-2 min) and has no lock risk
- Does the developer need "1 -click connection"? → Hyperlane is permissionless, and ISM is selected client-side

## Origin & evolution

In 2022-2023 , cross-chain selection meant "largest TVL = choose Wormhole." After institutional entry in 2024 , CCIP became the actual choice for banks / DTCC / SWIFT because of the Chainlink oracle brand + RMN two-layer verification. 2025  convergence = multipolar coexistence + task specialization; a lead actor uses 2-3  bridges at the same time(CCIP institutional · LayerZero general · CCTP V2 USDC). See [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]] for the full comparison matrix.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン Token 戦略 3 態]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Smart NAV announcement(2024.05)· SWIFT messaging on Chainlink test(2025)
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started
