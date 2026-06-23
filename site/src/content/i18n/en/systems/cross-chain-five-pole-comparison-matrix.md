---
source: systems/cross-chain-five-pole-comparison-matrix
source_hash: ce3f778d24038291
lang: en
status: machine
fidelity: ok
title: "Cross-chain 5 -pole comparison matrix · The 9 dimensions of CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole"
translated_at: 2026-06-23T01:29:43.838Z
---

# Cross-chain 5 -pole comparison matrix · The 9 dimensions of CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole

## Wiki route

This page is a comparison matrix under [[systems/INDEX|systems index]]; read [[systems/cross-chain-four-poles-overview]] as the parent overview and [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]] as the practical selection axis. The individual protocols connect to [[systems/cctp-v2-overview]], [[systems/chainlink-ccip-institutional-messaging]], [[systems/layerzero-v2-omnichain-messaging]], and [[systems/hyperlane-overview]], and the demand-side context for stablecoin transfer is cross-referenced with [[fintech/usd-stablecoin-interchange]].

## Key facts

- CCTP V2 Fast Transfer 8-20 s finality (V1 is 10-20 min) · USDC only · 12+ chains including Arc / Sonic ^[extracted]
- CCIP Active Risk Management (RMN) two-layer verification · 2024-2025 SWIFT / DTCC / J.P. Morgan Kinexys pilots live · ~25 chains ^[extracted]
- LayerZero v2 introduces a Lightweight Message Library + DVN modular · 100+ chains · cumulative messages 5B+ · 7B+ USD TVL in circulation ^[extracted]
- Hyperlane permissionless ISM (Interchain Security Module) · 2024.07 Eclipse mainnet · any EVM/SVM/Move/Cosmos chain can self-deploy ^[extracted]
- Wormhole 19-of-19 Guardian committee + 2024 ZK Verifier + Native Token Transfers (NTT) + CCTP integration · dominant in the Solana ecosystem · 30+ chains ^[extracted]

## Mechanism / How it works

**9 -dimension comparison matrix** (2026-Q2 state):

| Dimension | CCTP V2 | CCIP | LayerZero v2 | Hyperlane | Wormhole |
|---|---|---|---|---|---|
| **Messaging model** | Burn-mint (USDC only) · Circle off-chain attestation signing | Oracle DON + Risk Management Network · Lock-mint or general-purpose messaging | DVN M-of-N (app-configured) · Lightweight ULN · general-purpose messaging | Permissionless · ISM customer choice (multisig/POS/optimistic/ZK) · Lock-mint or messaging | Guardian 19-of-19 multisig + ZK Verifier · Lock-mint + Burn-mint (NTT) |
| **Security model** | Circle centralized attester · regulatory-compliance backing | RMN independent committee (2-of-N veto) + Chainlink OCR · two-layer redundancy | DVN set (default LayerZero Labs + Google Cloud + Polyhedra ZK) · customer-changeable | Modular · default multisig · optional Eigen restaking / ZK / optimistic | Guardian set 19 nodes (Jump / Everstake / Forbole etc.) · ZK Verifier complement |
| **Settlement guarantee** | Fast Transfer 8-20 s · Standard 10-20 min · irreversible | typically 7-20 min (incl. risk window) · delay configurable for high value | DVN-config dependent · minimum single DVN a few seconds · high-security multi-DVN minutes | ISM-determined · multisig 1-2 blocks · optimistic 30 min challenge window | ~15 min finality (waiting on source chain finality) + Guardian signing |
| **Chain coverage (2026)** | 12+ chains (EVM L1/L2 mainstream + Arc + Sonic + Aptos) · all-EVM-centric | ~25 chains (EVM L1/L2 + some non-EVM e.g. Solana in testing) | 100+ chains (full EVM + Aptos / Sui / Solana / TON / Tron) | any chain can self-deploy · primarily promotes Eclipse / Celestia / Cosmos / SVM long-tail | 30+ chains (strong Solana + full EVM + Sui / Aptos / Near / Algorand) |
| **Institutional adoption** | Circle native USDC · Coinbase · Stripe Tempo · MoneyGram · regulation-friendly | SWIFT messaging pilot · DTCC Smart NAV · J.P. Morgan Kinexys · ANZ A$DC · BNY · strong TradFi | Stargate / Pendle / LiFi / Trader Joe · some fintech (PayPal PYUSD bridging) | Eclipse / Celestia / Renzo / Karak · DeFi-native long-tail · weak institutional adoption | Jito / MakerDAO / Lido · major Solana apps · Uniswap cross-chain governance |
| **Gas/cost** | user pays source chain gas + Circle Fast Transfer fee (~$0.10-1) · priced in USDC | user pays LINK or native token · double fee (execution + risk verification) · high-cost institutional grade | user pays source gas + DVN fee + destination execution (billed in any token via Pay Master) | user pays source gas + Hyperlane gas oracle-estimated destination · any token · self-run relayer can save | user pays source gas + Wormhole fee + destination gas drop (NTT) · VAA relay can be outsourced to a third party |
| **Governance / upgrade** | Circle Inc. (centralized · OFAC + §501 bound) | Chainlink Foundation + DAO proposals + RMN independent committee (Smartcon governance) | LayerZero Labs (team governance · ZRO token to decentralize in future) | Hyperlane DAO + HYPER token (2024 launch) · permissionless modification requires ISM-level customer consent | Wormhole DAO + W token (2024) · Guardian set changes require ≥2/3 vote · Foundation coordination |
| **Past incidents / audits** | Circle single-point trust not yet broken · audits OpenZeppelin / Halborn / ChainSecurity · 2025 SOC2 | no major incident · Chainlink audited multiple times · RMN independent audit · CertiK / Trail of Bits | 2024.01 one-time DVN-config bug (no loss of funds) · audited multiple times Zellic / Trail of Bits · DVN diversity defense-in-depth | 2024 no major incident since Eclipse mainnet went live · audits Trail of Bits / Zellic / OpenZeppelin · permissionless risk depends on ISM choice | **2022.02 $325M theft on the Solana bridge** (Jump Crypto fully reimbursed) · 2024 security upgrade after ZK Verifier went live · Guardian incentive alignment under continuous discussion |
| **Best use case** | pure USDC cross-chain sourcing · institutional regulation-compliant stablecoin transfer | Bank-grade tokenized-asset settlement · DvP / PvP · high-value low-frequency | general-purpose dApp omnichain · Stargate-style aggregator · long-tail token bridging | App-chain / rollup self-sovereign deployment · non-EVM first-class · permissionless ISM tradeoff | Solana-centric cross-chain · NFT bridge · DAO governance messaging · NTT replaces wrapped tokens |

**How to read the matrix**: read horizontally for the full-dimension profile of 1 protocols · read vertically for the 5 -pole differences in the same dimension. CCTP V2 is narrow and deep (USDC only but optimized to the extreme) · CCIP is institutional-grade (expensive but compliant) · LayerZero v2 is broad and flexible (maximum coverage but DVN configuration means responsibility) · Hyperlane is self-service permissionless · Wormhole is Solana-centric + Guardian-model legacy.

**Typical combinations** (real dApps use multiple bridges in parallel):
- **Stripe Tempo / Arc**: CCIP (institutional default) + CCTP V2(USDC fast) + LayerZero (long-tail dApp)
- **Coinbase Base**: CCTP V2(native USDC) + LayerZero (Stargate) + CCIP (some institutional customers)
- **Eclipse / Celestia**: Hyperlane (self-deploy) + Wormhole (Solana liquidity)
- **Major Solana DeFi**: Wormhole (default) + CCTP V2(USDC) + LayerZero (EVM connectivity)

## Origin & evolution

The 2021-2022 cross-chain landscape was a disorderly competition among Wormhole / Multichain / Synapse and others · security-model differences were unclear. The 2022 string of bridge hacks (Ronin $625M · Wormhole $325M · BSC $570M · Nomad $190M) pushed security into a core selection dimension. 2023 Chainlink CCIP launch · carving out the institutional layer with the oracle brand. 2024 LayerZero v2 rebuilt the messaging library and introduced modular DVNs · Hyperlane mainnet launch moved to permissionless mode · Wormhole added a ZK Verifier to patch the weaknesses of the Guardian-only model.

2025 CCTP V2 Fast Transfer + Hooks made USDC sourcing an atomic primitive (8-20 s) · stripping general-purpose bridges of their value in USDC scenarios. The 2026-Q1 5 -pole landscape has solidified into a task-specialization matrix · mainstream dApps simultaneously integrate 3-4 bridges and route by scenario. Wormhole's NTT (Native Token Transfers) + CCTP integration is a key measure to rebuild relevance · making Wormhole no longer "just a Solana bridge."

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極アーキテクチャ · 概観]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP Institutional Messaging]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 Omnichain Messaging]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP 路線対照]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton 公開/プライベートチェーン対峙]]
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
