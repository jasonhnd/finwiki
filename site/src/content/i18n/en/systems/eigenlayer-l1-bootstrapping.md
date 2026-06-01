---
source: systems/eigenlayer-l1-bootstrapping
source_hash: a3f644f926eca2ec
lang: en
status: machine
fidelity: ok
title: "EigenLayer Support for New L1  Bootstrapping-Phase Security · Tempo/Arc Potential Route"
translated_at: 2026-06-01T04:15:40.097Z
---
# EigenLayer Support for New L1  Bootstrapping-Phase Security · Tempo/Arc Potential Route

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Arc has already publicly considered a restaking-secured permissioned BFT model ^[extracted]

## Mechanism / How it works

A new L1  faces a bootstrapping problem at launch: native token market cap is low → attack cost is low → users are afraid to use it → traffic is low → token value does not rise → death loop.

**3  solutions**:

| Option | Meaning | Applicable scenario |
|---|---|---|
| **A. Own validator set** | Classical L1  path · token issuance + incentives + long-term bootstrapping | Crypto-native projects · with a time window |
| **B. Launch with EigenLayer AVS** | Lease ETH security during the launch phase · gradually migrate to an own token | Enterprise-grade L1 · day-1  security required |
| **C. Hybrid (BFT + restaking reinforcement)** | Own validators + restaking economic reinforcement · lower the 51% attack cost | Needs token issuance and rapid launch |

**Tempo / Arc are almost certainly option B/C**:
- Tempo (Stripe) must face Stripe customers (large merchant enterprises) · launch-phase attacks are unacceptable
- Arc (Circle) is the main battleground for USDC · security risk = Circle corporate risk
- Neither can exchange a promise of "future token appreciation" for launch-phase security · they must borrow the already mature economic security of ETH

## Origin & evolution

EigenLayer's initial positioning was as the security layer for modular middleware (DA / Oracle / cross-chain bridges) · the L1  launch umbrella is the 2024-2025 年 expansion direction. Hyperlane was one of the earliest cases to adopt EigenLayerISM (restaking-secured cross-chain message verification) · it tested the possibility of "using ETH to secure non-Ethereum services."

If Tempo / Arc adopt the EigenLayer route and succeed, it will create a demonstration effect — other enterprise-grade L1 networks (whether JPM Kinexys's public-chain route starts, and other stablecoin chains) may follow.

**Reflexive effect on Ethereum L1 **: through restaking, ETH becomes not only "L1 gas + staking yield" but also the **base asset for cryptoeconomic security** — similar to the dollar becoming a "global collateral asset." This is the largest narrative pillar for ETH's long-term value (perhaps more important than ultrasound money) (in contrast with the CEX-side evolution in [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-avs-mechanism|AVS Mechanism]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT Rust(L1 コンセンサス対照)]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer docs — https://docs.eigenlayer.xyz/
