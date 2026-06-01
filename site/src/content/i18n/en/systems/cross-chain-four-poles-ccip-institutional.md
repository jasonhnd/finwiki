---
source: systems/cross-chain-four-poles-ccip-institutional
source_hash: e8551d54c9540659
lang: en
status: machine
fidelity: ok
title: "CCIP institutional default · Moat of the TradFi → DeFi data bridge"
translated_at: 2026-06-01T04:15:40.136Z
---

# CCIP institutional default · Moat of the TradFi → DeFi data bridge

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Chainlink is the DeFi oracle default (TVS $14B+) · the brand extends to cross-chain ^[extracted]
- CCIP customers: DTCC / SWIFT (11000+ banks) / J.P. Morgan Kinexys ^[extracted]
- RMN (Risk Management Network) = independent verification of the transaction layer + risk layer ^[extracted]
- 2024.05  DTCC Smart NAV pilot completed · 2025-2026  production rollout ^[extracted]
- 2025  SWIFT tested L1  messaging on Chainlink · potential channel for 11000+ banks ^[extracted]

## Mechanism / How it works

**RMN two-layer verification**: CCIP separates message processing into 2  independent networks · the transaction network processes basic messages · the risk management network independently verifies suspicious transactions (abnormal amounts / abnormal routes / blacklists). Only after both layers pass does release occur → providing institutional customers with an experience where "risk management is explainable."

**Meaning of the TradFi → DeFi data bridge**: SWIFT is the interbank messaging standard of 50  years · DTCC is the US securities clearing center. The reason this 2 社 chose Chainlink is not a "web3  test," but to formally connect TradFi data flows on-chain so that RWA products such as [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Smart NAV / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] can move between chains while maintaining regulatory compliance. For details, see where the [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]] + cross-chain + RWA 3  story intersects.

**Logic for Tempo choosing CCIP**: Tempo's customers = Visa / Standard Chartered / Stripe = regulated financial institutions · they cannot use Wormhole 19  multisig (the Guardian Council is not a fiduciary). CCIP is currently the only institutional-grade cross-chain layer.

## Origin & evolution

2017  Chainlink was founded as an oracle · after the 2020  DeFi summer, it became the default oracle standard. 2022  CCIP was first publicly released. 2023-2024  shifted to the institutional route · using the Chainlink brand to enter DTCC / SWIFT pilots. 2024.05  DTCC Smart NAV completed · 2025  SWIFT messaging test · milestones for actual TradFi adoption.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
- [[fintech/central-banking-function-unbundling|中央銀行機能 5 層解体]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Smart NAV pilot announcement (2024.05) · SWIFT messaging on Chainlink (2025)
- Chainlink CCIP docs — https://docs.chain.link/ccip
