---
source: systems/eigenlayer-overview
source_hash: 926585c9820a3680
lang: en
status: machine
fidelity: ok
title: "EigenLayer Overview · Restaking and the Leasing of Ethereum Cryptoeconomic Security"
translated_at: 2026-06-15T04:09:41.215Z
---

# EigenLayer Overview · Restaking and the Leasing of Ethereum Cryptoeconomic Security

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-avs-mechanism|EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2023-06  mainnet launch ^[extracted]
- TVL 150 億+ USD (as of 2025 ) ^[extracted]
- 40+ AVS in operation (EigenDA / Hyperlane / AltLayer / Espresso / Lagrange, etc.) ^[extracted]
- EIGEN token launched 2024-10  · used for inter-subjective dispute resolution ^[extracted]
- Slashing mechanism activated 2025  —— AVS can custom-define slashing conditions ^[extracted]

## Restaking Mechanism and AVS Workflow

Traditional cryptoeconomic security has a **bootstrapping problem**: a new L1  must launch BFT through staking of its native token, but in the early launch phase the token's market cap is low → the cost of attack is low → no one dares to use it. "Middleware" such as cross-chain bridges / oracles / DA layers also requires its own independent validator set, and each must gather staking capital, which is extremely inefficient.

EigenLayer's solution: **"lease out" ETH, the deepest staking pool, to any service that needs BFT-style verification**. Stakers earn additional yield, new services gain immediate security, and Ethereum L1  takes no damage (dual slashing guarantee) (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]).

Analogy: SWIFT "lends" the KYC banking network it already has to a new payment company, rather than having each one build it individually.

**Core components**:
- **Operators**: node operators who stake ETH (their own or as proxy for others) and selectively opt in to each AVS
- **AVS**: services that need external verification, defining their own slashing conditions
- **EigenPods**: contracts that receive ETH staking rewards, allowing native restaking
- **Strategies**: support restaking of LSTs (stETH, rETH, cbETH, etc.)

## Origin & evolution

EigenLayer was proposed in a restaking paper by Sreeram Kannan's team (a former UW professor) in 2021 年, and launched its mainnet in 2023-06 . Its initial positioning was as "the security layer for the modular-blockchain era," with target customers being Celestia competitors (EigenDA), cross-chain bridges (Hyperlane), and shared sequencers (Espresso).

In 2024-10  it launched the EIGEN token and introduced the concept of inter-subjective dispute resolution —— when there is a "subjective" violation in an AVS (such as an oracle quote diverging from the market, which cannot be cryptographically disproven), EIGEN holders vote on whether to slash. After activating slashing in 2025 , EigenLayer shifted from a "commitment mechanism" to an "actual economic-security market" (contrasted with the evolution on the crypto-native side in [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer Whitepaper (Sreeram Kannan et al.)
- EigenLayer docs — https://docs.eigenlayer.xyz/
