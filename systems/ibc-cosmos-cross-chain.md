---
title: "IBC · Cosmos Inter-Blockchain Communication protocol"
aliases:
  - "ibc-cosmos-cross-chain"
  - "IBC"
  - "Inter-Blockchain Communication"
  - "IBC v2"
  - "Cosmos hub-and-spoke"
domain: "systems"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, cross-chain, cosmos, ibc, light-client, hub-and-spoke, hyperlane, layerzero, ccip]
status: active
sources:
  - "https://ibc.cosmos.network/"
  - "https://github.com/cosmos/ibc"
  - "https://docs.cosmos.network/"
  - "https://tutorials.cosmos.network/"
  - "https://github.com/cosmos/ibc-go"
---

# IBC · Cosmos Inter-Blockchain Communication protocol

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] and [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]] for peer / contrast, [[systems/cctp-v2-overview|CCTP V2]] for the alternative trust-minimized model, and [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero / CCIP]] for the broader interop comparison.

## Key facts

- **IBC** is the cross-chain messaging protocol native to the Cosmos SDK; mainnet on Cosmos Hub since 2021
- Trust model: **light-client verification on each chain** — each chain runs the other chain's light client and validates headers / proofs locally
- Hub-and-spoke topology: Cosmos Hub serves as connectivity anchor, but IBC is a direct chain-to-chain protocol (no centralized hub required)
- **IBC v1** focused on token transfers (ICS-20); **IBC v2 (Eureka, 2024-2025)** extends to Ethereum + non-Cosmos chains via lightweight light-client adapters
- Production deployment across 80+ chains; cumulative transfer volume in tens of billions USD by 2025-2026

## Trust model — light clients on both sides

IBC's security argument: each chain validates the **other chain's consensus** directly, not a third-party intermediary. The flow:

```
Chain A (source)                          Chain B (destination)
─────────────────                         ─────────────────────
1. App calls IBC: send packet
2. IBC commits packet to state
3. Header + commitment proof gossiped ──► 4. Chain B light client of A
                                              verifies header (Tendermint sigs)
                                          5. Verifies Merkle proof of packet
                                          6. Delivers packet to receiving app
                                          7. Sends ACK / timeout back ──────►
```

The trust assumption reduces to: **the source chain's consensus** (e.g., Cosmos Hub's BFT validator set). No third-party relayer can forge messages — relayers only move data; verification is on-chain.

This contrasts sharply with:

- [[systems/layerzero-v2-omnichain-messaging|LayerZero]]: configurable Oracle + Relayer trust split
- [[systems/chainlink-ccip-institutional-messaging|CCIP]]: Chainlink DON committee
- [[systems/hyperlane-overview|Hyperlane]]: pluggable ISM (Interchain Security Module)
- [[systems/cctp-v2-overview|CCTP]]: Circle attestation service (single signer)

## IBC v1 vs IBC v2

| Dimension | IBC v1 | IBC v2 (Eureka) |
|---|---|---|
| Connected chains | Cosmos SDK + a few adapters | Cosmos + Ethereum + EVM L2s + selected non-Cosmos |
| Light client overhead | Tendermint-light-client native | Solidity light-client + lightweight headers |
| Token standard | ICS-20 fungible | Same, with broader cross-VM adapter contracts |
| Generic message passing | Yes (ICS-04 channels) | Yes, expanded to EVM target apps |
| Live since | 2021 | 2024-2025 (mainnet expansion) |

IBC v2's Eureka release brings Ethereum-side light-client contracts (verifying Tendermint signatures) — letting Cosmos chains and Ethereum exchange messages with end-to-end verification without an external bridge committee.

## Comparison vs other interop protocols

| Protocol | Trust model | Topology | Production usage |
|---|---|---|---|
| **IBC** | Light client on each side | Mesh (any-to-any) | 80+ chains, native Cosmos default |
| **CCIP** ([[systems/chainlink-ccip-institutional-messaging|see entry]]) | Chainlink DON + risk-mgr | Hub-and-spoke via Chainlink network | Institutional preferred |
| **LayerZero** ([[systems/layerzero-v2-omnichain-messaging|see entry]]) | Oracle + Relayer split | Direct any-to-any | Broad EVM adoption |
| **Hyperlane** ([[systems/hyperlane-overview|see entry]]) | Pluggable ISM (incl. EigenLayer AVS) | Permissionless mesh | Modular, ISM-customizable |
| **CCTP** ([[systems/cctp-v2-overview|see entry]]) | Circle attestation | Hub via Circle | USDC-only, fast |

Reading: see [[systems/cross-chain-five-pole-comparison-matrix|five-pole comparison matrix]] for side-by-side; [[systems/cross-chain-bridge-security-insurance-matrix-2026|bridge security insurance matrix]] for risk pricing.

## IBC channel and packet lifecycle

1. **Connection handshake** — ConnOpenInit, ConnOpenTry, ConnOpenAck, ConnOpenConfirm
2. **Channel handshake** — ChanOpenInit … ChanOpenConfirm (one channel per app pair)
3. **Packet send** — application calls IBC; packet committed
4. **Relayer transport** — off-chain relayer reads, gossips header + packet
5. **Packet receive** — destination chain verifies, executes app callback
6. **Acknowledgement / timeout** — ACK propagates back; timeout if not received in window

Channels are app-level: ICS-20 (fungible token), ICS-721 (NFT), Interchain Accounts (ICS-27), Interchain Queries (ICQ), and arbitrary ICS-04 channels for custom apps.

## Origin and evolution

IBC specification began in 2018 within the Cosmos / Tendermint community; mainnet went live with Cosmos Hub IBC enablement in March 2021. The protocol matured through 2022-2023 with broad token-transfer adoption and Interchain Accounts. The 2024-2025 **Eureka** release marked the strategic pivot: IBC is no longer Cosmos-only; it competes as a **general interop standard** by extending light-client adapters to Ethereum + EVM L2s.

Cosmos as an ecosystem has interesting financial relevance: chains like Noble (USDC issuer for Cosmos), dYdX (formerly Ethereum, now Cosmos appchain), and Celestia all sit in the IBC mesh. Read alongside [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer comparison]] for the Celestia angle.

## Related

- [[systems/INDEX]]
- [[systems/cross-chain-four-poles-overview]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026]]
- [[systems/cctp-v2-overview]]
- [[systems/layerzero-v2-omnichain-messaging]]
- [[systems/chainlink-ccip-institutional-messaging]]
- [[systems/hyperlane-overview]]
- [[systems/hyperlane-vs-layerzero-ccip]]
- [[systems/polkadot-xcm-parachain-messaging]]
- [[systems/data-availability-celestia-eigenda-blob-comparison]]
- [[INDEX|FinWiki index]]

## Sources

- ibc.cosmos.network protocol specification and tutorials.
- github.com/cosmos/ibc and github.com/cosmos/ibc-go for spec + reference implementation.
- docs.cosmos.network for SDK / chain integration guides.
- Eureka release notes and IBC v2 adapter documentation.
