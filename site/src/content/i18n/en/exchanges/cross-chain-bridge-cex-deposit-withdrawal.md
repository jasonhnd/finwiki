---
source: exchanges/cross-chain-bridge-cex-deposit-withdrawal
source_hash: b175a4e00a825c42
lang: en
status: machine
fidelity: ok
title: "Cross-chain bridges and CEX deposit/withdrawal routes — Wormhole / LayerZero / Axelar / Hyperlane / CCIP comparison"
translated_at: 2026-05-31T03:19:56.409Z
---

# Cross-chain bridges and CEX deposit/withdrawal routes — Wormhole / LayerZero / Axelar / Hyperlane / CCIP comparison

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

CEXs typically offer deposit/withdrawal of the same token across multiple chains (Ethereum / Solana / BSC / Polygon / Arbitrum / Optimism / Base / Avalanche, etc.). A pattern where the CEX itself operates an internal cross-chain bridge coexists with a pattern that routes through a vendor bridge (Wormhole / LayerZero / Axelar / Hyperlane / CCIP). From the user's perspective it appears as a network-selection UI such as "USDT (ERC20)" or "USDT (TRC20)", but behind the scenes a bridge protocol of wrapped token + lock-mint or burn-mint is at work.

## Top 5 bridge-protocol comparison

- **Wormhole** — multi-sig validation by Guardian 19 nodes · token transfer + arbitrary message + NFT support · de-facto standard for Solana ↔ Ethereum · Solana-focused
- **LayerZero** — multi-layer validation via Ultra Light Node + DVN (Decentralized Verifier Network) · 60+ chain connectivity · the **OFT (Omnichain Fungible Token)** standard is spreading among token issuers
- **Axelar** — PoS validator network · Cosmos SDK-based · general message passing (GMP) · bridging the IBC sphere and EVM
- **Hyperlane** — permissionless interchain · can be deployed by oneself on any chain · modular ISM (Interchain Security Module)
- **Chainlink CCIP** — Cross-Chain Interoperability Protocol · Risk Management Network for anomaly detection · institution-oriented · Swift-integration PoC

## Interface with CEX deposit/withdrawal

- **Same token on multiple chains**: USDT is issued on 8 + chains including ERC20  + Tron + BSC + Solana + Arbitrum + Avalanche · CEXs distinguish "USDT (ERC20)", "USDT (TRC20)", etc. in the network-selection UI, and differentiate fees too
- **Operating an in-house bridge**: Binance Bridge → BSC linkage · Coinbase operates Base L2 on its own OP Stack · OKX runs X Layer (zkEVM)
- **Using a vendor**: small and mid-sized CEXs offer Solana → Ethereum transfers via Wormhole / LayerZero

## Risk + incidents (2022 = "bridge hack year")

- **2022-02 Wormhole hack**: $325M ETH outflow · signature-verification bug · Jump Trading covered the loss
- **2022-03 Ronin Bridge hack**: $625M (Axie Infinity) · 5/9 validator keys seized · attributed to Lazarus
- **2022-08 Nomad Bridge hack**: $190M · copy-paste attack due to a message-verification initialization bug
- **2022-09 Wintermute** and others — chained losses around bridges

## Regulatory position

- The bridge protocol itself, as a technical protocol, is not directly subject to a VASP license
- **CEX internal bridge**: within the scope of AML/CFT + Travel Rule as part of the VASP
- Since the **Tornado Cash OFAC sanctions (2022-08)**, regulatory pressure on mixers/bridges has increased · domestic VASPs offer limited chain support (regulatory risk + monitoring cost)

## Cross-links

- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/solana-ecosystem-dex-comparison]]
- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis]] (Ronin comparison)
- [[fintech/cosmos-ibc-for-financial-institutions]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain 5 極比較マトリクス]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional 詳細]]
