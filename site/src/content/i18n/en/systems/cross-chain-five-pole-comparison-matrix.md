---
source: systems/cross-chain-five-pole-comparison-matrix
source_hash: c06a02f0c992a88c
lang: en
status: machine
fidelity: ok
title: "Cross-chain 5 -pole comparison matrix · CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole across 9  dimensions"
translated_at: 2026-06-01T04:15:40.128Z
---
# Cross-chain 5 -pole comparison matrix · CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole across 9  dimensions

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview]] as the parent overview and [[systems/cross-chain-four-poles-selection-decision|cross-chain protocol-selection decision tree]] for matched protocol selection. Pair with each pole's standalone entry — [[systems/cctp-v2-overview]] · [[systems/chainlink-ccip-institutional-messaging]] · [[systems/layerzero-v2-omnichain-messaging]] · [[systems/hyperlane-overview]] — and read it against [[fintech/usd-stablecoin-interchange]] for the stablecoin transfer context that drives ≥60% of cross-chain volume. Wormhole is covered here without a separate standalone FinWiki entry in this snapshot.

## Key facts

- CCTP V2  Fast Transfer 8-20  second finality (V1  is 10-20  minutes) · USDC only · 12+ chains including Arc / Sonic ^[extracted]
- CCIP Active Risk Management (RMN) two-layer verification · 2024-2025  SWIFT / DTCC / J.P. Morgan Kinexys pilots live · ~25 chains ^[extracted]
- LayerZero v2  introduced Lightweight Message Library + modular DVN · 100+ chains · cumulative messages 5B+ · 7B+ USD TVL in circulation ^[extracted]
- Hyperlane permissionless ISM (Interchain Security Module) · 2024.07 Eclipse mainnet · any EVM/SVM/Move/Cosmos chain can self-deploy ^[extracted]
- Wormhole 19-of-19  Guardian committee + 2024 ZK Verifier + Native Token Transfers (NTT) + CCTP integration · dominant in the Solana ecosystem · 30+ chains ^[extracted]

## Mechanism / How it works

**9 -dimension comparison matrix** (2026-Q2  status):

| Dimension | CCTP V2 | CCIP | LayerZero v2 | Hyperlane | Wormhole |
|---|---|---|---|---|---|
| **Messaging model** | Burn-mint (USDC only) · Circle off-chain attestation signature | Oracle DON + Risk Management Network · Lock-mint or general messaging | DVN M-of-N (app-configured) · Lightweight ULN · general messaging | Permissionless · customer-selected ISM (multisig/POS/optimistic/ZK) · Lock-mint or messaging | Guardian 19-of-19  multisig + ZK Verifier · Lock-mint + Burn-mint (NTT) |
| **Security model** | Circle centralized attester · regulatory-compliance backing | RMN independent committee (2-of-N veto) + Chainlink OCR · two-layer redundancy | DVN set (default LayerZero Labs + Google Cloud + Polyhedra ZK) · customer-changeable | Modular · default multisig · optional Eigen restaking / ZK / optimistic | Guardian set 19  nodes (Jump / Everstake / Forbole, etc.) · ZK Verifier supplement |
| **Settlement assurance** | Fast Transfer 8-20  seconds · Standard 10-20  minutes · irreversible | Usually 7-20  minutes (including risk window) · high-value transfers can set delays | Depends on DVN configuration · minimum single-DVN seconds · high-security multi-DVN minutes | ISM-determined · multisig 1-2  blocks · optimistic 30  minute challenge window | ~15  minute finality (waiting for source chain finality) + Guardian signatures |
| **Chain coverage (2026)** | 12+ chains (mainstream EVM L1/L2  + Arc + Sonic + Aptos) · centered on all EVM | ~25 chains (EVM L1/L2 + some non-EVM, such as Solana in testing) | 100+ chains (full EVM + Aptos / Sui / Solana / TON / Tron) | Any chain can self-deploy · focuses on Eclipse / Celestia / Cosmos / SVM long-tail | 30+ chains (strong Solana + full EVM + Sui / Aptos / Near / Algorand) |
| **Institutional adoption** | Circle native USDC · Coinbase · Stripe Tempo · MoneyGram · regulation-friendly | SWIFT messaging pilot · DTCC Smart NAV · J.P. Morgan Kinexys · ANZ A$DC · BNY · strong TradFi | Stargate / Pendle / LiFi / Trader Joe · some fintech (PayPal PYUSD bridging) | Eclipse / Celestia / Renzo / Karak · DeFi-native long-tail · weak institutional adoption | Jito / MakerDAO / Lido · major Solana apps · Uniswap cross-chain governance |
| **Gas/cost** | User pays source chain gas + Circle Fast Transfer fee (~$0.10-1) · priced in USDC | User pays LINK or native token · double fee (execution + risk verification) · high-value institutional grade | User pays source gas + DVN fee + destination execution (arbitrary token billing via Pay Master) | User pays source gas + Hyperlane gas oracle-estimated destination gas · arbitrary token · self-run relayer can save cost | User pays source gas + Wormhole fee + destination gas drop (NTT) · VAA relay can be outsourced to third parties |
| **Governance / upgrade** | Circle Inc. (centralized · bound by OFAC + §501 ) | Chainlink Foundation + DAO proposals + RMN independent committee (Smartcon governance) | LayerZero Labs (team governance · ZRO token may decentralize later) | Hyperlane DAO + HYPER token (2024  launch) · permissionless changes require ISM-level customer consent | Wormhole DAO + W token (2024) · Guardian set changes require ≥2/3  vote · Foundation coordination |
| **Past incidents / audits** | Circle single-point trust has not yet been broken · audits by OpenZeppelin / Halborn / ChainSecurity · 2025 SOC2 | No major incident · Chainlink audited multiple times · RMN independent audit · CertiK / Trail of Bits | 2024.01  temporary DVN configuration bug (no fund loss) · multiple audits by Zellic / Trail of Bits · DVN diversity provides defense in depth | No major incident after 2024 Eclipse mainnet went live · audits Trail of Bits / Zellic / OpenZeppelin · permissionless risk depends on ISM choice | **2022.02  Solana bridge theft of $325M** (fully reimbursed by Jump Crypto) · security upgrade after 2024 ZK Verifier went live · Guardian incentive alignment remains an ongoing debate |
| **Best use case** | Pure USDC cross-chain funding · institutional regulated stablecoin transfer | Bank-grade tokenized asset settlement · DvP / PvP · high-value low-frequency | General-purpose dApp omnichain · Stargate-style aggregator · long-tail token bridging | App-chain / rollup self-sovereign deployment · non-EVM first-class · permissionless ISM tradeoff | Solana-centered cross-chain · NFT bridge · DAO governance messaging · NTT replacing wrapped tokens |

**How to read the matrix**: horizontally, view the full-dimensional profiles of the 1  protocols; vertically, compare the 5 -pole differences within the same dimension. CCTP V2  is narrow and deep (USDC only, but optimized to the limit); CCIP is institutional-grade (expensive but compliant); LayerZero v2  is broad and flexible (maximum coverage, but DVN configuration is the user's responsibility); Hyperlane is self-service permissionless; Wormhole is Solana-centered plus the legacy Guardian model.

**Typical combinations** (actual dApps use multiple bridges in parallel):
- **Stripe Tempo / Arc**: CCIP (institutional default) + CCTP V2 (USDC fast) + LayerZero (long-tail dApp)
- **Coinbase Base**: CCTP V2 (native USDC) + LayerZero (Stargate) + CCIP (some institutional clients)
- **Eclipse / Celestia**: Hyperlane (self-deploy) + Wormhole (Solana liquidity)
- **Major Solana DeFi**: Wormhole (default) + CCTP V2 (USDC) + LayerZero (EVM connection)

## Origin & evolution

In 2021-2022 , the cross-chain landscape was an unruly competition among Wormhole / Multichain / Synapse and others, and security-model differences were unclear. A series of bridge hacks in 2022  (Ronin $625M · Wormhole $325M · BSC $570M · Nomad $190M) pushed security into a core selection dimension. 2023  Chainlink CCIP launched and carved out the institutional layer with the oracle brand. 2024  LayerZero v2  rebuilt its messaging library and introduced modular DVN · Hyperlane mainnet launched and moved into permissionless mode · Wormhole added ZK Verifier to address weaknesses in the Guardian-only model.

With 2025  CCTP V2  Fast Transfer + Hooks, USDC funding became an atomic primitive (8-20  seconds), taking value away from general-purpose bridges in USDC scenarios. By 2026-Q1 , the 5 -pole structure had settled into a task-specialized matrix · mainstream dApps integrate 3-4  bridges simultaneously and route by scenario. Wormhole's NTT (Native Token Transfers) + CCTP integration is an important move to rebuild relevance and make Wormhole more than "just the Solana bridge."

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|cross-chain four-pole architecture overview]]
- [[systems/cross-chain-four-poles-selection-decision|cross-chain protocol-selection decision tree]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP Institutional Messaging]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 Omnichain Messaging]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP route comparison]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton public/private chain comparison]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 docs · https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Chainlink CCIP docs · https://docs.chain.link/ccip
- LayerZero v2 docs · https://docs.layerzero.network/v2
- Hyperlane docs · https://docs.hyperlane.xyz/
- Wormhole docs · https://docs.wormhole.com/
- DefiLlama bridges analytics · https://defillama.com/bridges
- Token Terminal cross-chain metrics · https://tokenterminal.com/
