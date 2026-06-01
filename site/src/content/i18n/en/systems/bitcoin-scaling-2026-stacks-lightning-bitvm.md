---
source: systems/bitcoin-scaling-2026-stacks-lightning-bitvm
source_hash: 3971a695fa717aed
lang: en
status: machine
fidelity: ok
title: "Bitcoin Scaling 2026  · Stacks + Lightning + BitVM + Babylon Parallel Stack"
translated_at: 2026-06-01T04:15:40.178Z
---
# Bitcoin Scaling 2026  · Stacks + Lightning + BitVM + Babylon Parallel Stack

## TL;DR

Bitcoin 2026  scaling is not about "choosing L2  as 1  option," but about **4  parallel stacks each absorbing different demand**: Lightning handles micropayments + international remittances, Stacks handles BTC-native DeFi + sBTC 1:1  anchor, BitVM handles trust-minimized general computation (including EVM-like L2 ), and Babylon handles security sharing to PoS chains through Bitcoin staking. Metaprotocols such as Ordinals/Inscriptions and Runes do not belong to the traditional "scaling" category, but they have materially raised the L1 fee baseline. Covenant soft forks such as CTV (BIP-119)+ CSFS (BIP-348) saw active debate resume in 2024-2025  but remain inactive, while drivechain (BIP-300/301) entered a cold-shoulder period. Post-2024  Bitcoin L2 TVL increased from ~$1B to the 2026-Q1  ~$8-10B range, mainly from sBTC (Stacks Nakamoto)+ Babylon + several BitVM-based EVM rollups.

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for the contrast between Bitcoin and Ethereum L2 / Canton / cross-chain bridges, and against [[systems/eigenlayer-overview|EigenLayer overview]] to understand Babylon's counterpoint relationship as "Bitcoin-version restaking." See [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] for background and for the fundamental route split between Bitcoin and Ethereum in L1 vs L2 .

## Bitcoin scaling 4  stack comparison

The biggest difference between Bitcoin and Ethereum is **the absence of a Turing-complete L1 **: Bitcoin Script restricts L2  critical primitives such as covenants, recursive proofs, and generalized rollups, so 2024-2026  scaling has had to evolve across 4  parallel stacks.

### Stack 1: Lightning Network

- **Positioning**: High-frequency micropayments + international remittances
- **Architecture**: payment channel + HTLC + onion routing (Tor-like)
- **Capacity**: 2026-Q1  network capacity ~5,500 BTC (~$550M @ $100k/BTC), mostly flat after the 2021-Q4  peak of ~5,400 BTC
- **Node topology**: ~17k public nodes + ~50k+ private nodes (LSPs, Strike, Cash App, and other custodial routing)
- **LSP layer**: Lightning Service Providers (Voltage, LNbits, Strike, Galoy, OpenNode) became the standard connection method for retail wallets, effectively turning Lightning into a "customer custody / provider-operated" model
- **2024-2026  progress**: Taproot Assets (Lightning Labs) commercialized Lightning cross-border transfers of USDT/USDC, and actual GMV appeared in 2026  international remittances (Nigeria / Argentina / El Salvador)

### Stack 2: Stacks (sBTC + Nakamoto Release)

- **Positioning**: BTC-native DeFi + smart contracts + NFT
- **Consensus**: PoX (Proof of Transfer)+ Nakamoto Release (2024-10) introduces Bitcoin finality
- **sBTC**: 1:1 BTC-pegged, 2024-12  mainnet launch, ~15  Signers jointly custody actual BTC with threshold-schnorr and issue the sBTC token on the Stacks chain
- **TVL**: Stacks 2026-Q1  ~$300M TVL (sBTC + ALEX + Arkadiko), sBTC circulation ~3,000 BTC
- **Subnets**: Stacks Subnets are similar to Polygon Supernets and allow independent deployment of app-chains
- **Clarity language**: a non-Turing-complete decidable smart-contract language that avoids EVM-style reentrancy attacks but limits some composability

### Stack 3: BitVM / BitVM2

- **Positioning**: General-purpose computation for Bitcoin, verifying arbitrary computation on Bitcoin L1  without a soft fork
- **Mechanism**: Bitcoin Script + multi-stage challenge-response to imitate fraud proofs, with an 1-of-N honesty assumption
- **BitVM2 (2024)**: Simplifies from prover-verifier to permissionless challenger, sharply lowering the hurdle
- **Ecosystem**: Citrea (EVM-based zk-rollup, BitVM bridge), BOB (Build on Bitcoin, hybrid Ethereum L2), Bitlayer, Merlin, Bsquared, GOAT Network
- **TVL**: 2026-Q1  total TVL of BitVM-related L2  ~$2-3B (based on L2Beat self-reporting, use caution), mostly Citrea + BOB
- **Challenges**: long challenge period (7-14  days)+ liveness assumption + fraud-proof costs surge when Bitcoin L1 fees rise

### Stack 4: Babylon (Bitcoin Staking)

- **Positioning**: Bitcoin holders provide economic security to PoS chains without leaving L1  (similar to [[systems/eigenlayer-overview|EigenLayer]], but funded by BTC)
- **Mechanism**: Uses Bitcoin timestamping to create a verifiable slashing mechanism for BTC stake, with no need to wrap / bridge BTC
- **Phase-1 (2024-08)**: staking + timestamping only, no yield
- **Phase-2 (2025)**: Babylon Genesis L1 + connects to third-party PoS chains (Cosmos-family + some L1)
- **Scale**: 2026-Q1  staked ~50,000-60,000 BTC (~$5-6B), the largest single TVL category on Bitcoin
- **AVS / BSN analogy**: Babylon Secured Network (BSN) corresponds to EigenLayer's AVS; Cosmos appchains / Babylon Genesis / some EVM L1  are early consumers

## Soft-fork status: CTV / CSFS / drivechain

Bitcoin's scaling route has long been stalled by soft-fork topics, and the important 2024-2026  proposals are:

- **CTV (BIP-119, OP_CHECKTEMPLATEVERIFY)**: Proposed by Jeremy Rubin in 2019 , enabling covenants (pre-committed output scripts) and supporting vaults / payment pools / more efficient Lightning channels. Debate restarted in 2024 , but disagreements inside the community are obvious
- **CSFS (BIP-348, OP_CHECKSIGFROMSTACK)**: Verifies signatures from the stack and, combined with CTV, can enable more efficient proof compression for BitVM2 
- **APO / SIGHASH_ANYPREVOUT (BIP-118)**: Eltoo route, simplifying the Lightning protocol, still under discussion
- **drivechain (BIP-300/301)**: The BIP-300  sidechain miner-secured bridge long promoted by Paul Sztorc, substantively rejected by mainstream Bitcoin Core developers in 2024-2026  because miner-bridge changes Bitcoin's economic incentives
- **OP_CAT (BIP-347)**: Temporarily became a topic in 2024-2025  and enables covenant simulation, but likewise remains inactive
- **Soft-fork timeline**: Bitcoin Core has no ETH-like EIP roadmap; activation depends entirely on community consensus + miner signaling + UASF risk, and the probability of any important soft fork activating within 2026  remains < 30%

The stagnation of soft-fork activation directly made **the BitVM route a "fork-free covenant alternative"**. This is the fundamental driver of the 2024-2026  BitVM ecosystem explosion.

## Post-2024  Bitcoin L2 TVL distribution

Approximate distribution of each stack's TVL in 2026-Q1  (figures from L2Beat + DefiLlama + project self-disclosures, use caution):

- Babylon staking: ~$5-6B (single largest category)
- BitVM-based L2 (Citrea / BOB / Bitlayer / Merlin / Bsquared / GOAT): combined ~$2-3B
- Stacks (sBTC + ALEX + Arkadiko): ~$300M
- Lightning Network total capacity: ~$550M (~5,500 BTC)
- Ordinals / Runes / BRC-20  circulating market cap: separate category, ~$2-4B, highly volatile, not scaling

Total scale ~$8-10B vs Bitcoin circulating market cap ~$2T, with penetration only ~0.4-0.5%, far below Ethereum L2 's ~10-15% penetration (after [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]], Ethereum L2  still leads).

## Bitcoin scaling vs Ethereum L2  route comparison

| Dimension | Bitcoin scaling | Ethereum L2 |
|---|---|---|
| L1  programmability | Limited by Bitcoin Script | EVM Turing-complete |
| Mainstream L2  type | 4  categories in parallel (Lightning/Stacks/BitVM/Babylon) | Converges on rollups (optimistic + zk) |
| Security anchor | PoW + L1 finality | PoS + EigenDA / blob |
| Bridge trust | Mostly trust-assumption-heavy (sBTC = 15 multisig, BitVM = 1-of-N) | Rollup canonical bridges are becoming trustless |
| Soft-fork route | Extremely slow, high community-consensus threshold | EIP roadmap in half-year units |
| Cross-chain tooling | Almost no reuse of EVM toolchains | [[systems/cctp-v2-overview|CCTP V2]] / [[systems/chain-abstraction-pattern-overview|chain abstraction]], etc. |

See [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for a detailed comparison.

## Deep dive on Stack 1  · Lightning economic model and LSP-ification

The reality of Lightning 2026  is "**default custodial + self-custody as the exception**":

- **LSP model leads**: Phoenix (ACINQ), Breez (Greenlight), Cash App / Strike (custodial), Galoy (Bitcoin Beach), and Voltage (enterprise LSP) handle channel opening/closing + inbound liquidity management + routing for retail users, and users do not need to be aware of the channel concept
- **Inbound liquidity auctions**: In marketplaces such as Lightning Pool / Magma / Amboss, routing nodes auction inbound channels, and small routing nodes lost their business model
- **Real international-remittance use cases**: LSPs such as Strike-El Salvador / Bitnob-Nigeria / Tropykus-LATAM commercialized USD ↔ Lightning ↔ NGN/ARS/MXN routes, with 2026  monthly GMV of $200M-500M (industry-disclosure basis, use caution)
- **Taproot Assets**: Lightning Labs made stablecoins (USDT / USDC mocks) transferable inside Lightning channels, effectively turning Lightning into a multi-asset payment network; some stablecoin integrations are live on 2025-2026  mainnet
- **Lightning vs Base USDC competition**: For the same "stablecoin payment rail," the developer experience of Base + USDC + [[systems/erc-4337-overview|ERC-4337]] is far better than Lightning, and Lightning's edge has narrowed to "BTC-native + ultimate final settlement"
- **Liquid Network parallel stack**: L-BTC + USDT-Liquid on Blockstream's federated sidechain Liquid is also a payment option in the Bitcoin ecosystem; it is used for institutional custody but has low user awareness

## Deep dive on Stack 2  · Stacks Nakamoto + sBTC

Stacks is the **only stack in Bitcoin scaling with a full smart-contract platform + BTC 1:1  anchor token + public-chain governance**:

- **Nakamoto Release (2024-10)**: Switches from "PoX independent blocks" to "Bitcoin finality," and Stacks blocks acquire Bitcoin-level finality once anchored to Bitcoin blocks
- **sBTC mechanism**: User sends BTC to an sBTC peg-in address → ~15  Signers (selected from ~150  Stackers) jointly custody BTC with threshold-schnorr → the same amount of sBTC is minted on the Stacks chain; on burn, it is released in reverse through multisig
- **Signer economic model**: Signers post STX as collateral (stack) to obtain Signer rights; mismanagement / malicious acts lead to STX slashing
- **Clarity language features**: non-Turing-complete (no unbounded loops), decidable (statically verifiable); the tradeoff is that complex DeFi is hard to write (some yield protocols need workarounds)
- **Ecosystem**: ALEX (DEX + Bitcoin pool), Arkadiko (stablecoin USDA), Bitflow, Velar, StackingDAO; 2026 DeFi is small but steadily growing
- **Subnets**: The Stacks version similar to Polygon Supernets / [[systems/polygon-agglayer-architecture-rollout|AggLayer CDK]], allowing independent finality for app-chains; 2024-2026  mainnet live
- **2026  Stacks strategy**: Evolve from "smart contracts on BTC" to "Bitcoin DeFi hub"; the target is similar to the position [[systems/eigenlayer-overview|EigenLayer]] occupies in the ETH ecosystem, but the scope is BTC

## Deep dive on Stack 3  · BitVM-family EVM L2  list

The 2024-2026  BitVM route rapidly split into multiple EVM-compatible Bitcoin L2 :

- **Citrea**: Led by the Chainway team, EVM-based zk-rollup, 2024-Q1  testnet, 2024-Q4  mainnet beta, uses BitVM bridge for a trust-minimized BTC peg
- **BOB (Build on Bitcoin)**: hybrid L2, settles to both Bitcoin + Ethereum, default OP Stack + BitVM bridge
- **Bitlayer**: OP Stack-like + BitVM bridge, 2024-Q2  mainnet, active Singapore / China ecosystem
- **Merlin Chain**: OKX-family ecosystem, 2024-Q1  mainnet, centered on BRC-20 + Ordinals ecosystem
- **Bsquared (B² Network)**: ZK-based rollup, 2024  mainnet
- **GOAT Network**: 2024-2025  early BitVM2  implementation, centered on "sequencer-decentralized BitVM2"
- **Traffic comparison of Citrea vs BOB vs Bitlayer**: In 2026-Q1  daily active address ranking, roughly BOB > Bitlayer ≈ Merlin > Citrea > Bsquared > GOAT, with high volatility
- **Common weakness**: BitVM bridge implementation is extremely complex engineering, and in 2026  most mainstream deployments are still **multisig federation + BitVM-style verification proof-of-concept**; the number of pure trust-minimized BitVM bridge mainnets is single digit
- **Contrast with Ethereum L2 **: The BitVM-EVM route is essentially "**using Bitcoin as settlement and EVM as execution**." This resembles the logic of [[systems/eigenlayer-overview|EigenLayer]] making ETH provide economic security, but Bitcoin provides PoW finality, not stake-slashing

## Deep dive on Stack 4  · Babylon staking mechanism

Babylon is **"Bitcoin-version EigenLayer"**, but does not depend on wrap / bridge:

- **Core technology**: Uses Bitcoin timestamping + special UTXO scripts (CHECKLOCKTIMEVERIFY + multisig) to create "Bitcoin slashable stake"
- **Phase-1 (2024-08  mainnet)**: Users lock BTC in Babylon-managed UTXOs and acquire "staking positions," but with no yield (only preparation for later security sharing with PoS chains)
- **Phase-2 (2025)**: Babylon Genesis L1 (its own PoS Cosmos chain)+ third-party Babylon Secured Network (BSN) connections; BTC stake starts generating yield (BSN token + Babylon network rewards)
- **Slashing mechanism**: If a PoS-chain validator (also a BTC staker) double-signs or acts maliciously, the Bitcoin UTXO is forcibly destroyed by a pre-signed transaction
- **Scale**: 2026-Q1  staked ~50,000-60,000 BTC (~$5-6B), with ~20-30  PoS chains connected to BSN (mainly Cosmos-family + some EVM L1)
- **Contrast with EigenLayer**: EigenLayer provides ~$15-20B restaked TVL on ETH, Babylon provides ~$5-6B on BTC, and the two have become parallel poles of the "new-generation cryptoeconomic security marketplace"
- **Participation by BTC ETF holders**: In theory, part of the ~$50-80B BTC held by ETFs such as BlackRock / Fidelity could be connected to Babylon to earn staking yield, but there has been no formal announcement within 2026 , and the compliance route (whether staking constitutes a change in holdings for a securitized ETF) is unclear

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob expansion]]
- [[systems/cctp-v2-overview|CCTP V2 overview]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction model overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge integration]]
<!-- /wiki-links:managed -->

## Sources

- Stacks Documentation — sBTC, Nakamoto Release, Clarity
- Lightning Network Paper (Poon & Dryja, 2016)
- BitVM Whitepaper (Robin Linus, 2023)+ BitVM2 (2024)
- Babylon Whitepaper · Babylon Chain documentation
- L2Beat — Bitcoin L2 tracking
- DefiLlama — Bitcoin chain category, sBTC TVL
- Bitcoin Optech newsletter — CTV / CSFS / OP_CAT discussion archive
- Galaxy Research "State of Bitcoin Layers 2026"
- Lightning Labs Taproot Assets documentation
