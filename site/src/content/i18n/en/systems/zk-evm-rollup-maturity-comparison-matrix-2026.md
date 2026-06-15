---
source: systems/zk-evm-rollup-maturity-comparison-matrix-2026
source_hash: bd84eba271c0acf7
lang: en
status: machine
fidelity: ok
title: "ZK-EVM Rollup Maturity Comparison Matrix 2026 · proving system / TVL / DA / decentralization across 9 rollups"
translated_at: 2026-06-15T04:09:41.159Z
---

# ZK-EVM Rollup Maturity Comparison Matrix 2026 · proving system / TVL / DA / decentralization across 9 rollups

## TL;DR

- A comparison of 9 active ZK-EVM / ZK-rollups across the 9 axes of **EVM equivalence · proving system · proof time · gas cost · TVL · mainnet maturity · decentralization · ecosystem · DA layer** as of 2026-Q2 
- **EVM equivalence ladder** (Vitalik Type 1-4): Linea/Scroll → Type 2(EVM-equivalent · 99%) · Polygon zkEVM → Type 2.5 → evolving toward Type 1 · zkSync Era → Type 4(EVM-compatible · different bytecode) · StarkNet → Type 4(Cairo native · Solidity via Kakarot) · Taiko → Type 1(fully EVM-equivalent · base-rollup model) · Miden → non-EVM (private execution + Solidity bridge)
- **Proving system 5 major mainstreams**: Plonky2(Polygon · STARK→SNARK recursion) · Boojum (zkSync · STARK + FRI) · Cairo-STARK (StarkNet) · Halo2 / Recursive Halo2(Scroll · Taiko · PSE lineage) · EVM Prover (Linea · zk-SNARK with vk2.0)
- **TVL 2026-Q2 estimates**: zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M (early)
- **DA layer choice**: the majority still use L1 blobs (EIP-4844 · see [[systems/pectra-eip-7691-blob-l2-impact]]) · a few choose alt-DA: Polygon zkEVM offers a validium mode · StarkNet Volition · Miden's own P2P · Kakarot exploring Celestia · Linea/Scroll/Taiko default to L1
- routing: compared with [[systems/INDEX|systems index]] · [[systems/cross-chain-five-pole-comparison-matrix]] (inter-rollup messaging selection)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the L1 blob-capacity context that drives rollup gas cost, and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade landscape. Pair with [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] for the meta-strategy that frames "L2 carrying 99% of users". For proving system depth, see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] and [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]. For long-term cryptographic risk, see [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]. For restaking-backed DA (EigenDA serves several rollups in this matrix), see [[systems/eigenlayer-overview|EigenLayer overview]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about L2-to-L2 messaging.

## Why this matrix matters

After ZK-EVM rollups went live on mainnet intensively in 2023-2025 年· they evolved from a "technical-route war" into a multi-objective optimization space of "EVM equivalence vs proving cost vs decentralization vs ecosystem traction". When developers select which ZK rollup to deploy to · facing 6-8 candidates (each claiming "most EVM-equivalent · fastest · cheapest") · without a unified comparison table they will be misled by market marketing.

Institutional customers (see the J.P. Morgan Kinexys / DTCC / SWIFT pilot in [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]]) likewise need to decide "on which L2 to settle tokenized assets". What institutions care about is not TPS but · **the decentralization of the prover/sequencer** (currently the sequencer of every ZK-EVM is centralized · and provers are mostly centralized) · **upgrade governance** (being able to upgrade the smart contract within the challenge window = actually controlling the funds) · and **DA layer risk** (when using validium · data availability depends on an external committee).

This matrix compares 9 publicly-running ZK-EVM / ZK-rollups · spread across 9 axes · with a 2026-Q2 data snapshot. Optimistic rollups (Arbitrum / Optimism / Base / Blast) are not included in this matrix · see a separate optimistic matrix (its publication timing is not specified in the public materials cited).

## Per-rollup sections

### Polygon zkEVM / AggLayer

**EVM equivalence**: at the 2023 年launch it was Type 3(EVM-compatible · some opcode differences) · gradually evolving to Type 2.5 in 2024-2025 年. The Polygon team's roadmap is Type 1 full equivalence.

**Proving system**: Plonky2(STARK recursion → SNARK final · GPU-friendly). Upgraded to Plonky3 in 2024 年for ~30% speedup.

**Proof time**: single batch ~5-10 minutes (2026-Q2). L1 submit average ~30 minutes finality.

**Gas cost**: user sub-cent ($0.001-0.01 simple transfer).

**TVL May 2026**: ~$800M (estimate · including the AggLayer federation).

**Mainnet maturity**: 2023.03 mainnet beta · 2024 Stage 1 decentralization · 2026 is also Stage 1(Sequencer centralized · Prover partially opened).

**Decentralization**: Sequencer: operated centrally by Polygon Labs · plans to introduce the Espresso shared sequencer in 2026-2027 . Prover: 5 社's prover network (Polygon Labs + 4 third parties). Upgrade: 7-day timelock + Security Council 7-of-13.

**Ecosystem**: ~150 dApp · including QuickSwap · Polygon ID · Astar zkEVM · multiple enterprise cases (Franklin Templeton tokenized fund pilot).

**DA layer**: default L1 blobs (EIP-4844). Offers a validium mode (DAC 7-of-9 multisig · for enterprise private chains). AggLayer is Polygon's cross-chain unifier · multiple zkEVMs can share settlement.

### zkSync Era (Matter Labs)

**EVM equivalence**: Type 4(EVM-compatible · different bytecode · Solidity via its own zkSolc compiler). Specialized dev tooling is required.

**Proving system**: Boojum (STARK + FRI · GPU-friendly). Upgraded to Boojum v1.5 in 2024 年for ~40% efficiency gain. Final SNARK wrap on Ethereum.

**Proof time**: ~10-15 minutes batch · L1 submit ~30-45 minutes finality.

**Gas cost**: user sub-cent ($0.001-0.005). Account Abstraction native (no ERC-4337 needed).

**TVL May 2026**: ~$2.0B (estimate · including ZK Stack hyperchains).

**Mainnet maturity**: 2023.03 mainnet · announced the ZK Stack framework in 2024 · 2026 Stage 1 decentralization.

**Decentralization**: Sequencer: Matter Labs centralized · plans to introduce a decentralized sequencer in 2026 Q3-Q4 (Espresso partnership). Prover: Matter Labs + 1-2 third parties. Upgrade: 21-day timelock (extended from 1-day after 2024 ) + Security Council 9-of-15.

**Ecosystem**: ~250 dApp · SyncSwap · Maverick · Aave v3 · Argent native AA · ZK Stack hyperchains (GRVT · Treasure · Cronos zkEVM).

**DA layer**: default L1 blobs. The validium mode ("zkPorter") is planned but deployment is deferred. ZK Stack hyperchains can choose EigenDA / Celestia.

### StarkNet

**EVM equivalence**: Type 4(Cairo native · not Solidity). Solidity compatibility is via the Kakarot subproject (EVM-on-StarkNet · not fully production grade) or the Warp transpiler (deprecated). Cairo is a Turing-complete language optimized for STARK.

**Proving system**: Cairo-STARK (native STARK · no SNARK wrap needed · but L1 verification cost is on the higher side). STARK is quantum-resistant (see [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]]).

**Proof time**: ~30-60 minutes batch (STARK proof size is large and slower).

**Gas cost**: user ~$0.01-0.1(higher than zkSync/Polygon · due to STARK proof size). The 2025 stwo prover upgrade targets -50% cost.

**TVL May 2026**: ~$650M (estimate).

**Mainnet maturity**: 2021.11 alpha · 2023 v0.13 mainnet · 2024 v0.14 Volition introduced · 2025 Stage 1 partial.

**Decentralization**: Sequencer: StarkWare centralized · plans to decentralize via a PoS validator set in 2026-2027 . Prover: StarkWare-led · third-party prover SDK opened. Upgrade: Foundation governance + STRK token voting.

**Ecosystem**: ~120 dApp · including Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms. Argent / Braavos AA wallet native support. Institutional cases: Visa Aeon · Provenance pilot.

**DA layer**: L1 blobs (default) + Volition mode (user chooses on-chain or DAC off-chain) + EigenDA under exploration.

### Scroll

**EVM equivalence**: Type 2(EVM-equivalent · 99% bytecode-level compatible · almost all Solidity dApps can deploy with zero modification).

**Proving system**: Halo2 + PSE-flavor zkEVM (based on the long-term research of Privacy Scaling Explorations). Upgraded to multi-proof aggregation in 2025 年(see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]]).

**Proof time**: ~15-25 minutes batch · L1 submit ~30 minutes finality.

**Gas cost**: user sub-cent ($0.005-0.02).

**TVL May 2026**: ~$700M.

**Mainnet maturity**: 2023.10 mainnet · 2024-2025 continuously audited · 2026 Stage 1.

**Decentralization**: Sequencer: Scroll team centralized · plans to decentralize in 2026-2027 . Prover: opened to third parties (Scroll prover network beta). Upgrade: 7-day timelock + Security Council.

**Ecosystem**: ~180 dApp · Aave · Uniswap · Pendle · GMX and other mainstream all deployed. Scroll Canvas is a user-onboarding tool.

**DA layer**: default L1 blobs. The Scroll team has expressed a clear stance of not doing validium · maintaining L1 DA purity (EVM-equivalent + L1 DA is an institutional selling point).

### Linea (Consensys)

**EVM equivalence**: Type 2(EVM-equivalent · 99% compatible, similar to Scroll). Consensys emphasizes "drop-in MetaMask / Truffle / Infura toolchain compatibility".

**Proving system**: zk-SNARK custom prover (Linea VK2.0 · based on Vortex + Arcane). vk3.0 upgrade in 2025 年improves proof speed. Recursive proof aggregation.

**Proof time**: ~10-20 minutes batch · L1 submit ~30 minutes finality.

**Gas cost**: user sub-cent ($0.002-0.01).

**TVL May 2026**: ~$1.2B (estimate · boosted by MetaMask traffic).

**Mainnet maturity**: 2023.07 mainnet · 2024 v1.5 upgrade · 2026 Stage 1.

**Decentralization**: Sequencer: Consensys centralized · plans to decentralize in 2026-2027 . Prover: Consensys-led · third-party prover SDK opened. Upgrade: 7-day timelock + Security Council.

**Ecosystem**: ~200 dApp · Aave · Uniswap · LayerZero · Stargate · OKX · the deep integration with MetaMask is the largest traffic entry point.

**DA layer**: default L1 blobs. Consensys continues an "all on-chain" stance · does not offer validium.

### Taiko

**EVM equivalence**: Type 1(fully EVM-equivalent · bit-for-bit · including EVM opcode / precompile / consensus rules). Any Ethereum dApp / L1 client can be forked directly.

**Proving system**: Halo2(SGX + ZK multi-prover · introduced a 3 -way prover competition of SP1 · Risc Zero · Aligned in 2024 年). Pioneer of multi-proof aggregation (see [[systems/multi-proof-aggregation-fault-prover]]).

**Proof time**: ~20-40 minutes batch (proving is slow at 100% EVM precision because of Type 1 ).

**Gas cost**: user ~$0.01-0.05(slightly higher than Scroll/Linea · due to the prove cost of Type 1 ).

**TVL May 2026**: ~$350M (estimate).

**Mainnet maturity**: 2024.05 Alpha-6 mainnet · 2024.06 Hekla testnet · 2025 mainnet stable · 2026 Stage 1 evolving.

**Decentralization**: **Sequencer: Based rollup** (borrows the L1 proposer as the sequencer · the only fully decentralized sequencer among ZK-EVMs). Prover: opened as a permissionless prover market (anyone can earn TAIKO by submitting a proof). Upgrade: 7-day timelock.

**Ecosystem**: ~80 dApp · TaikoSwap · mainly Ethereum-native dApp forks. The based-rollup concept is the academic core of the ETH community · publicly recommended by Vitalik.

**DA layer**: default L1 blobs (a based rollup requires L1 DA).

### Kakarot

**EVM equivalence**: Type 4(EVM implemented in Cairo · running on top of StarkNet). Theoretically 99% Solidity-compatible · but with edge-case differences.

**Proving system**: borrows StarkNet's Cairo-STARK (the Kakarot smart-contract layer is Cairo · internally interpreting EVM bytecode).

**Proof time**: depends on StarkNet (~30-60 minutes).

**Gas cost**: depends on StarkNet · slightly higher than native StarkNet.

**TVL May 2026**: ~$15M (early adoption).

**Mainnet maturity**: 2024-Q4 mainnet beta · 2025-2026 trial operation · not production grade.

**Decentralization**: borrows StarkNet governance · the Kakarot team leads smart-contract upgrades.

**Ecosystem**: ~10-20 dApp · mainly developer experimental deploys. Kakarot's strategic value is "bringing the EVM into StarkNet" · it is not an independent L2 .

**DA layer**: borrows StarkNet (L1 blobs + Volition + EigenDA under exploration).

### Polygon Miden

**EVM equivalence**: non-EVM · Miden Assembly (MASM) · a STARK-friendly ISA. The EVM is via the Miden-EVM transpiler (early). The design philosophy is "client prover · the user proves the transaction locally · then submits the proof to the sequencer" (in contrast to the conventional sequencer-prove model).

**Proving system**: Miden VM (based on the Winterfell STARK framework). Client-prover-friendly (proving possible on a laptop in seconds to minutes · depending on transaction complexity).

**Proof time**: user client ~1-30 seconds (simple transaction) · L1 submit batch ~10-20 minutes.

**Gas cost**: user sub-cent · because proving is local · L1 pays only for verification + DA.

**TVL May 2026**: ~$30M (early).

**Mainnet maturity**: 2024 testnet · 2026 mainnet beta · not production grade for high-value DeFi.

**Decentralization**: Sequencer: Polygon Labs centralized (early). Prover: user self-proving is the core of the design · naturally decentralized (the user controls their own transaction proof).

**Ecosystem**: ~10 dApp · mainly private-payment / DeFi experiments (Miden emphasizes client-side privacy as its differentiator).

**DA layer**: Miden P2P own DA (experimental · not L1 blobs). Plans to explore Celestia / EigenDA as fallback. Polygon AggLayer connection.

### ImmutableX (Immutable zkEVM)

**EVM equivalence**: Type 2(based on the Polygon zkEVM stack · EVM-equivalent 99%). A gaming-specialized ZK-rollup.

**Proving system**: Plonky2(borrows the Polygon zkEVM proving infrastructure).

**Proof time**: ~10-20 minutes (inherits Polygon zkEVM performance).

**Gas cost**: user gas-free for NFT mint / transfer (the Immutable team subsidizes · gaming UX priority) · other transactions sub-cent.

**TVL May 2026**: ~$280M (NFT-heavy · not fully fungible TVL).

**Mainnet maturity**: 2024-Q1 zkEVM mainnet (previously ImmutableX 1.0 was a StarkEx validity pool · not zkEVM). 2025-2026 gaming ecosystem expansion.

**Decentralization**: Sequencer: Immutable centralized (gaming positioning · does not prioritize decentralization). Prover: borrows the Polygon prover network. Upgrade: Immutable Foundation + 7-day timelock.

**Ecosystem**: specialized in web3 gaming —— Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay and other 80+ games. The most dominant in the gaming vertical among ZK-EVMs.

**DA layer**: L1 blobs default · some NFT metadata via validium (DAC mode) to reduce cost.

## Big comparison matrix table

**9 ZK-EVM / ZK-rollups × 9 axes comparison** (2026-Q2 status):

| Rollup | EVM Type | Proving System | Proof Time | Gas Cost | TVL May 2026 | Mainnet Maturity | Seq/Prover Decentralization | Ecosystem | DA Layer |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5(target Type 1)| Plonky2/3(STARK→SNARK) | 5-10 min | sub-cent | $800M | 2023-03 · Stage 1 | Seq centralized · Prover 5 社network · 7d timelock + SC 7/13 | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1 blobs + Validium mode · AggLayer unifier |
| **zkSync Era** | Type 4(zkSolc) | Boojum (STARK+FRI) | 10-15 min | sub-cent ($0.001-0.005) · AA native | $2.0B | 2023-03 · Stage 1 | Seq centralized · Prover Matter Labs+1-2 · 21d timelock + SC 9/15 | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1 blobs · Validium ("zkPorter") deferred · hyperchains can choose EigenDA/Celestia |
| **StarkNet** | Type 4(Cairo native · Solidity via Kakarot) | Cairo-STARK (native · quantum-resistant) | 30-60 min | $0.01-0.1 | $650M | 2021-11 alpha · 2023 v0.13 · Stage 1 partial | Seq centralized · Prover SDK opened · Foundation+STRK governance | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1 blobs + Volition mode + EigenDA under exploration |
| **Scroll** | Type 2(99% bytecode-equivalent) | Halo2 + PSE-zkEVM · multi-proof agg | 15-25 min | sub-cent ($0.005-0.02) | $700M | 2023-10 · Stage 1 | Seq centralized · Prover third-party beta · 7d timelock + SC | ~180 dApp · Aave/Uni/Pendle/GMX · Scroll Canvas | L1 blobs only (explicitly no validium) |
| **Linea (Consensys)** | Type 2 | zk-SNARK custom (VK2.0/3.0 · Vortex+Arcane) | 10-20 min | sub-cent ($0.002-0.01) | $1.2B | 2023-07 · Stage 1 | Seq centralized · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask integration · Aave/Uni/OKX | L1 blobs only (all on-chain stance) |
| **Taiko** | Type 1(bit-for-bit EVM) | Halo2(SGX+ZK) · SP1/Risc Zero/Aligned 3 -way | 20-40 min | $0.01-0.05 | $350M | 2024-05 mainnet · Stage 1 evolving | **Based rollup · Seq borrows L1 proposer · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik-recommended based rollup | L1 blobs (based rollup requires L1 DA) |
| **Kakarot** | Type 4(EVM on Cairo on StarkNet) | borrows StarkNet Cairo-STARK | ~30-60 min (borrows StarkNet) | slightly higher than StarkNet | $15M | 2024 Q4 beta · not production-grade | borrows StarkNet · Kakarot team-led | ~10-20 dApp · experimental deploy | borrows StarkNet (L1 blobs + Volition + EigenDA exploration) |
| **Polygon Miden** | non-EVM (MASM · EVM transpiler early) | Miden VM (Winterfell STARK) · **client prover** | user local 1-30s · L1 batch 10-20 min | sub-cent (prove local) | $30M | 2024 testnet · 2026 mainnet beta | Seq centralized · **Prover user self-prove (naturally decentralized)** | ~10 dApp · private-payment/DeFi experiments | Miden P2P own DA · Celestia/EigenDA exploration · AggLayer connection |
| **ImmutableX zkEVM** | Type 2(based on Polygon zkEVM stack) | Plonky2(borrows Polygon) | 10-20 min | NFT gas-free subsidy · other sub-cent | $280M (NFT-heavy) | 2024 Q1 zkEVM mainnet · previously StarkEx | Seq centralized (gaming positioning) · Prover borrows Polygon · 7d timelock | **specialized in gaming** · 80+ games: Illuvium/Gods Unchained/Guild | L1 blobs + some NFT metadata validium |

**How to read the matrix**:
- **EVM equivalence vs proving cost tradeoff**: Type 1(Taiko) is the most expensive but has perfect compatibility · Type 4(zkSync · StarkNet · Kakarot) is the cheapest but requires dev tooling adaptation
- **DA layer choice reflects an institutional vs DeFi stance**: Scroll/Linea/Taiko defend L1 blobs to the death (institutional grade) · Polygon/StarkNet/Miden offer validium/Volition (DeFi UX priority) · Immutable is hybrid (NFT uses validium to reduce cost)
- **The true state of decentralization**: **the sequencer of every ZK-EVM is centralized** (2026-Q2) · the only exception is the Taiko based rollup. Progress on prover decentralization: Polygon (5 社network) > Scroll/StarkNet (SDK opened) > the rest (team-led)
- **TVL and ecosystem traction are not fully correlated**: zkSync $2.0B high TVL but Type 4 limits developer migration cost; Linea $1.2B borrows the MetaMask traffic advantage; Scroll/Polygon Type 2 + medium TVL is the "balanced choice"

## Boundary cases / future trajectory

**Direction of evolution of the EVM equivalence ladder**: Polygon zkEVM has a public roadmap to achieve Type 1 in 2027 年. Taiko is already Type 1 · the reference benchmark for other ZK-EVMs. zkSync Era and StarkNet maintain the Type 4 philosophy (optimizing prove cost · accepting dev tooling cost). Linea and Scroll are stable at Type 2 · an upgrade to Type 1 is not planned (judging that the cost-benefit of the last 1% of compatibility is low).

**Proving system convergence vs diversification**:
- **Convergence trend**: most ZK-EVMs ultimately SNARK-wrap (due to L1 verification cost · groth16 / plonky etc.) · the same holds even for internal STARK (zkSync Boojum · Polygon Plonky2).
- **Diversification trend**: StarkNet / Miden hold firm to native STARK · for quantum resistance + client-friendliness (see [[systems/post-quantum-blockchain-day1-integration]]). The generalization of provers such as SP1 / Risc Zero / Aligned (any rollup can choose) is a new trend in modular proving.
- Via Multi-proof aggregation (see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]) · 1 rollup can run multiple independent provers simultaneously · with fallback on error —— Taiko is the pioneer.

**Sequencer decentralization timetable**: Polygon zkEVM · zkSync Era · Scroll · Linea have all publicly stated they will introduce a shared sequencer (Espresso / Astria / Radius) in 2026-2027 . The Taiko based rollup has resolved it naturally. Vitalik publicly proposed in 2024 年that ZK-EVMs should prioritize solving sequencer decentralization rather than the prover · because sequencer concentration = greater liveness risk.

**AggLayer / ZK Stack / Superchain faction war**:
- Polygon AggLayer federates Polygon zkEVM + zkSync (partial) + Astar + others · sharing a settlement layer + cross-chain LP
- zkSync ZK Stack is the Matter Labs-led hyperchain framework · has already deployed GRVT · Treasure · Cronos zkEVM
- Optimism Superchain (not included in this matrix · OP-rollup) is the counterpart
- In the long term some kind of unifier is needed among all rollups · but AggLayer / ZK Stack / Superchain each push forward separately · for users to use across stacks a general bridge is still required (see [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]])

**The relationship between the DA layer and EigenLayer**: EigenDA (see [[systems/eigenlayer-overview|EigenLayer overview]]) provides alt-DA to multiple ZK Stack hyperchains · StarkNet Volition · Miden / Kakarot etc. But whether ZK-EVMs should use alt-DA (giving up L1 security) is still debated —— the Scroll / Linea / Taiko camp holds firm to L1 DA · the Polygon / StarkNet / Miden camp offers options. Institutional customers (SWIFT / DTCC · see [[systems/chainlink-ccip-institutional-messaging]]) explicitly require L1 DA.

**Impact of Pectra EIP-7691 ** (see [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]): blob target 3→6 + max 6→9 will further reduce ZK-EVM submit cost by -50% · all rollups using L1 blobs benefit directly. 2026-Q4 Fusaka PeerDAS gives a further 10× capacity.

**Formal verification progress**: ZK-EVM is a natural stage for formal spec implementation co-design (see [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]) —— the dual-spec consistency of Solidity / EVM spec + ZK circuit spec is the core security point. The Linea and Consensys Diligence teams have published formal-verification progress. Scroll collaborates academically with PSE over the long term. The zkSync Boojum prover is independently audited by Galois.

**Institutional vs DeFi selection**:
- Institutional (tokenized fund · DvP · regulatory compliance): Linea (MetaMask Institutional integration · backed by Consensys) · Scroll (EVM-equivalent + L1 DA purity) · Polygon zkEVM (the Franklin Templeton pilot precedent)
- DeFi-native (high TPS · long-tail dApp): zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific: ImmutableX
- Privacy-first: Polygon Miden (client prover + privacy design)
- Ethereum-aligned (maximum decentralization · Vitalik-recommended): Taiko based rollup

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]
- [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]
- [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer · https://polygon.technology/agglayer
- zkSync Era docs · https://docs.zksync.io/
- StarkNet docs · https://docs.starknet.io/
- Scroll docs · https://docs.scroll.io/
- Linea docs · https://docs.linea.build/
- Taiko docs · https://docs.taiko.xyz/
- Kakarot docs · https://docs.kakarot.org/
- Polygon Miden docs · https://0xmiden.github.io/miden-docs/
- Immutable docs · https://docs.immutable.com/
- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Ethereum.org ZK rollup overview · https://ethereum.org/en/developers/docs/scaling/zk-rollups/
- Vitalik "Different types of ZK-EVM" classification (public blog)
