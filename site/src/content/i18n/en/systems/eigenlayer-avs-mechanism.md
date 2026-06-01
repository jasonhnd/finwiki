---
source: systems/eigenlayer-avs-mechanism
source_hash: 46ccc26ec18c7e47
lang: en
status: machine
fidelity: ok
title: "EigenLayer AVS Mechanism · Operator · Slashing · EIGEN Arbitration"
translated_at: 2026-06-01T04:15:40.180Z
---
# EigenLayer AVS Mechanism · Operator · Slashing · EIGEN Arbitration
## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- AVS can custom-define slashing conditions · for example, "DA unavailable → slash 5%" ^[extracted]
- An Operator commits to accepting all AVS slashing conditions when opting in ^[extracted]
- Multi-AVS cumulative slash cap = 100% · forms the boundary of rehypothecation risk ^[extracted]
- The EIGEN token is used for inter-subjective dispute resolution (arbitration of subjective violations) ^[extracted]
- Strategies support LSTs (stETH/rETH/cbETH) · not only native ETH ^[extracted]

## Mechanism / How it works

**Operator-AVS matching flow**:
1. Operator registers with EigenLayer · provides ETH staking (for itself or on behalf of others)
2. AVS registers with EigenLayer · publishes slashing conditions + expected Operator set size
3. Operator opts in to a specific AVS · records the commitment on-chain
4. AVS operation (Operator performs validation tasks · for example, signing DA data-availability proofs)
5. If Operator violates AVS slashing conditions · the AVS triggers a slash · Operator staking is deducted

**Slashing types**:
- **Objective slashing**: Cryptographically refutable (double signing, timeout, erroneous block signature) · executed automatically by the AVS contract
- **Inter-subjective slashing**: Subjective violation (for example, an oracle quote diverges from the market by X% or more) · requires voting by EIGEN holders

**EigenPods mechanism**: An Operator's ETH receives staking rewards through the EigenPod contract, and EigenLayer monitors the Operator's Ethereum L1 validator behavior through the EigenPod. This is the key bridge that links L1 slashing and L2 AVS slashing.

**Strategies**: In addition to native ETH, EigenLayer supports LST restaking (stETH / rETH / cbETH, etc.). This greatly expands the capital pool that can be staked, but it also increases indirect dependence on the security of LST protocols (Lido / Rocket Pool / Coinbase) (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]).

## Origin & evolution

The AVS concept is the core abstraction of the EigenLayer 2021  paper. At the 2023-06  launch, only native ETH restaking was supported, with no slashing (commitment phase). The 2024-10  EIGEN token launch introduced inter-subjective dispute resolution. Slashing formally launched in 2025 , and EigenLayer moved from a "commitment mechanism" to an "actual economic security market."

40+ AVS launch progress: EigenDA (data availability, for modular L2 ) was earliest · Hyperlane (cross-chain message verification EigenLayerISM)2024 · AltLayer / Espresso / Lagrange follow sequentially in 2024-2025 .

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer docs · Slashing spec (2025)
- Vitalik Buterin · "Don't overload Ethereum's consensus" (2024)
- EigenLayer docs — https://docs.eigenlayer.xyz/
