---
source: systems/eigenlayer-overview
source_hash: 16b200ca9a060572
lang: en
status: machine
fidelity: ok
title: "EigenLayer Overview · Restaking and Leasing Ethereum Crypto-Economic Security"
translated_at: 2026-06-01T04:15:40.110Z
---
# EigenLayer Overview · Restaking and Leasing Ethereum Crypto-Economic Security

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-avs-mechanism|EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Mainnet launch in 2023-06  ^[extracted]
- TVL above 150 億+ USD (as of 2025 ) ^[extracted]
- More than 40 AVSs are live (EigenDA / Hyperlane / AltLayer / Espresso / Lagrange, etc.) ^[extracted]
- EIGEN token launched in 2024-10  and is used for inter-subjective dispute resolution ^[extracted]
- Slashing mechanism launched in 2025 ; AVSs can custom-define slashing conditions ^[extracted]

## Mechanism / How it works

Traditional crypto-economic security has a **bootstrapping problem**: a new L1  must launch BFT through staking its native token, but at launch the token market capitalization is low → attack cost is low → no one is willing to use it. "Middleware" such as cross-chain bridges / oracles / DA layers also needs independent validator sets, and each must attract staking capital, which is extremely inefficient.

EigenLayer's solution: **lend out the deepest staking pool, ETH, to any service that needs BFT-style validation**. Stakers earn additional yield, new services obtain immediate security, and Ethereum L1  is not harmed (double-slashing guarantee) (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]).

Analogy: it is like SWIFT lending its existing KYC bank network to a new payments company, rather than each company building its own network separately.

**Core components**:
- **Operators**: node operators that stake ETH (their own or delegated by others) and selectively opt in to each AVS
- **AVS**: services requiring external validation, defining their own slashing conditions
- **EigenPods**: contracts that receive ETH staking rewards and allow native restaking
- **Strategies**: support restaking of LSTs (stETH, rETH, cbETH, etc.)

## Origin & evolution

EigenLayer was proposed as a restaking paper in 2021 年 by Sreeram Kannan's team (former UW professor) and launched mainnet in 2023-06 . Its initial positioning was the "security layer for the modular blockchain era," targeting customers such as Celestia competitors (EigenDA), cross-chain bridges (Hyperlane), and shared sequencers (Espresso).

In 2024-10 , it launched the EIGEN token and introduced the concept of inter-subjective dispute resolution: if an AVS has a "subjective" violation (for example, an oracle quote deviating from the market, something that cannot be cryptographically disproven), EIGEN holders vote on whether to slash. After slashing launched in 2025 , EigenLayer moved from a "commitment mechanism" to an "actual economic-security market" (contrast with the evolution on the crypto-native side in [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer Whitepaper(Sreeram Kannan et al.)
- EigenLayer docs — https://docs.eigenlayer.xyz/
