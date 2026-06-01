---
source: systems/zk-evm-rollup-maturity-comparison-matrix-2026
source_hash: cd9fc019515ed5fa
lang: en
status: machine
fidelity: ok
title: "ZK-EVM Rollup Maturity Comparison Matrix 2026 · Proving system / TVL / DA / decentralization for 9  rollups"
translated_at: 2026-06-01T04:15:40.157Z
---
# ZK-EVM Rollup Maturity Comparison Matrix 2026 · Proving system / TVL / DA / decentralization for 9  rollups

## TL;DR

- For 9  active ZK-EVM / ZK-rollups as of 2026-Q2 , compares **EVM equivalence · proving system · proof time · gas cost · TVL · mainnet maturity · decentralization · ecosystem · DA layer** across 9  axes
- **EVM equivalence ladder**(Vitalik Type 1-4):Linea/Scroll → Type 2(EVM-equivalent · 99%)· Polygon zkEVM → Type 2.5 → evolving toward Type 1  · zkSync Era → Type 4(EVM-compatible · different bytecode)· StarkNet → Type 4(Cairo native · Solidity via Kakarot)· Taiko → Type 1(fully EVM-equivalent · base-rollup model)· Miden → non-EVM(private execution + Solidity bridge)
- **Proving system 5  major mainstream families**:Plonky2(Polygon · STARK→SNARK recursion)· Boojum(zkSync · STARK + FRI)· Cairo-STARK(StarkNet)· Halo2 / Recursive Halo2(Scroll · Taiko · PSE camp)· EVM Prover(Linea · zk-SNARK with vk2.0)
- **TVL 2026-Q2  estimate**:zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M(early)
- **DA layer selection**:most still use L1 blobs(EIP-4844 · see [[systems/pectra-eip-7691-blob-l2-impact]])· a few choose alt-DA:Polygon zkEVM offers validium mode · StarkNet Volition · Miden proprietary P2P · Kakarot explores Celestia · Linea/Scroll/Taiko default to L1

- Routing:compare with [[systems/INDEX|systems index]] · [[systems/cross-chain-five-pole-comparison-matrix]](selection for inter-rollup messaging)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob expansion and L2 economic linkage]] for the L1 blob capacity context that drives rollup gas cost, and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade landscape. Pair with [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] for the meta-strategy that frames "L2 carrying 99% of users". For proving system depth, see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] and [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]. For long-term cryptographic risk, see [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]. For restaking-backed DA(EigenDA serves several rollups in this matrix), see [[systems/eigenlayer-overview|EigenLayer overview]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about L2-to-L2 messaging.

## Why this matrix matters

After ZK-EVM rollups concentrated their mainnet launches in 2023-2025 年, they evolved from a "technical-route fight" into a multi-objective optimization space around "EVM equivalence vs proving cost vs decentralization vs ecosystem traction." When developers choose which ZK rollup to deploy to, they face 6-8  candidates, each claiming to be "most EVM-equivalent · fastest · cheapest"; without a unified comparison table, market messaging can mislead them.

Institutional customers(see J.P. Morgan Kinexys / DTCC / SWIFT pilot in [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]]) likewise need to decide "which L2  settles tokenized assets." What institutions care about is not TPS, but **prover/sequencer decentralization**(currently every ZK-EVM sequencer is centralized, and most provers are centralized), **upgrade governance**(smart contracts can be upgraded inside the challenge window = actual control of funds), and **DA layer risk**(when validium is used, data availability depends on an external committee).

This matrix compares 9  publicly live ZK-EVM / ZK-rollups, expands across 9  axes, and uses a 2026-Q2  data snapshot. Optimistic rollups(Arbitrum / Optimism / Base / Blast) are outside this page's scope and should be assessed in a dedicated optimistic-rollup matrix when that public comparison is prepared.

## Per-rollup sections

### Polygon zkEVM / AggLayer

**EVM equivalence**:At 2023 年 launch it was Type 3(EVM-compatible · some opcode differences), and in 2024-2025 年 it gradually evolved toward Type 2.5 . Polygon team's roadmap is full Type 1  equivalence.

**Proving system**:Plonky2(STARK recursion → SNARK final · GPU-friendly). In 2024 年, upgraded to Plonky3  for about 30% speed improvement.

**Proof time**:single batch about 5-10  minutes(2026-Q2). Average L1 submit finality about 30  minutes.

**Gas cost**:user sub-cent($0.001-0.01 simple transfer).

**TVL May 2026**:~$800M(estimate · including AggLayer federation).

**Mainnet maturity**:2023.03  mainnet beta · 2024 Stage 1 decentralization · 2026  also Stage 1(centralized Sequencer · Prover partially opened).

**Decentralization**:Sequencer:Polygon Labs centralized operation · plans to introduce Espresso shared sequencer in 2026-2027 . Prover:5 社 prover network(Polygon Labs + 4  third parties). Upgrade:7-day timelock + Security Council 7-of-13.

**Ecosystem**:~150 dApps · includes QuickSwap · Polygon ID · Astar zkEVM · multiple enterprise cases(Franklin Templeton tokenized fund pilot).

**DA layer**:default L1 blobs(EIP-4844). Provides validium mode(DAC 7-of-9  multisig · for enterprise private chains). AggLayer is Polygon's cross-chain unifier; multiple zkEVMs can share settlement.

### zkSync Era (Matter Labs)

**EVM equivalence**:Type 4(EVM-compatible · different bytecode · Solidity through proprietary zkSolc compiler). Requires specialized dev tooling.

**Proving system**:Boojum(STARK + FRI · GPU-friendly). In 2024 年, upgraded to Boojum v1.5  for about 40% efficiency improvement. Final SNARK wrap on Ethereum.

**Proof time**:~10-15  minutes per batch · L1 submit finality ~30-45  minutes.

**Gas cost**:user sub-cent($0.001-0.005). Account Abstraction native(no ERC-4337  needed).

**TVL May 2026**:~$2.0B(estimate · including ZK Stack hyperchains).

**Mainnet maturity**:2023.03  mainnet · 2024  announced ZK Stack framework · 2026 Stage 1 decentralization.

**Decentralization**:Sequencer:Matter Labs centralized · plans decentralized sequencer introduction in 2026 Q3-Q4 (Espresso partnership). Prover:Matter Labs + 1-2  third parties. Upgrade:21-day timelock(after 2024 , extended from 1-day)+ Security Council 9-of-15.

**Ecosystem**:~250 dApps · SyncSwap · Maverick · Aave v3 · Argent native AA · ZK Stack hyperchains(GRVT · Treasure · Cronos zkEVM).

**DA layer**:default L1 blobs. Validium mode("zkPorter") is planned but deployment is delayed. ZK Stack hyperchains can choose EigenDA / Celestia.

### StarkNet

**EVM equivalence**:Type 4(Cairo native · not Solidity). Solidity compatibility comes through the Kakarot subproject(EVM-on-StarkNet · not fully production grade) or Warp transpiler(deprecated). Cairo is a Turing-complete language optimized for STARK.

**Proving system**:Cairo-STARK(native STARK · no SNARK wrap required · but L1 verification cost is higher). STARK is quantum-resistant(see [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]]).

**Proof time**:~30-60  minutes per batch(STARK proof size is larger and slower).

**Gas cost**:user ~$0.01-0.1(higher than zkSync/Polygon because of STARK proof size). 2025 stwo prover upgrade targets -50% cost.

**TVL May 2026**:~$650M(estimate).

**Mainnet maturity**:2021.11 alpha · 2023 v0.13 mainnet · 2024 v0.14 Volition introduced · 2025 Stage 1  partial.

**Decentralization**:Sequencer:StarkWare centralized · plans to decentralize through a PoS validator set in 2026-2027 . Prover:StarkWare-led · third-party prover SDK opened. Upgrade:Foundation governance + STRK token voting.

**Ecosystem**:~120 dApps · includes Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms. Argent / Braavos AA wallet native support. Institutional cases:Visa Aeon · Provenance pilot.

**DA layer**:L1 blobs(default)+ Volition mode(users choose on-chain or DAC off-chain)+ EigenDA under exploration.

### Scroll

**EVM equivalence**:Type 2(EVM-equivalent · 99% bytecode-level compatibility · almost all Solidity dApps can deploy with zero modification).

**Proving system**:Halo2 + PSE-flavor zkEVM(based on Privacy Scaling Explorations long-term research). Upgraded to multi-proof aggregation in 2025 年(see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]]).

**Proof time**:~15-25  minutes per batch · L1 submit finality ~30  minutes.

**Gas cost**:user sub-cent($0.005-0.02).

**TVL May 2026**:~$700M.

**Mainnet maturity**:2023.10  mainnet · continuous audit in 2024-2025  · 2026 Stage 1.

**Decentralization**:Sequencer:Scroll team centralized · plans to decentralize in 2026-2027 . Prover:third-party opened(Scroll prover network beta). Upgrade:7-day timelock + Security Council.

**Ecosystem**:~180 dApps · Aave · Uniswap · Pendle · GMX and other mainstream apps are all deployed. Scroll Canvas is a user onboarding tool.

**DA layer**:default L1 blobs. Scroll team has explicitly stated that it will not do validium, preserving L1 DA purity(EVM-equivalent + L1 DA is an institutional selling point).

### Linea (Consensys)

**EVM equivalence**:Type 2(EVM-equivalent · similar to Scroll and 99% compatible). Consensys emphasizes "drop-in MetaMask / Truffle / Infura toolchain compatibility."

**Proving system**:custom zk-SNARK prover(Linea VK2.0 · based on Vortex + Arcane). In 2025 年, vk3.0  upgrade improved proof speed. Recursive proof aggregation.

**Proof time**:~10-20  minutes per batch · L1 submit finality ~30  minutes.

**Gas cost**:user sub-cent($0.002-0.01).

**TVL May 2026**:~$1.2B(estimate · boosted by MetaMask traffic).

**Mainnet maturity**:2023.07  mainnet · 2024 v1.5 upgrade · 2026 Stage 1.

**Decentralization**:Sequencer:Consensys centralized · plans to decentralize in 2026-2027 . Prover:Consensys-led · third-party prover SDK opened. Upgrade:7-day timelock + Security Council.

**Ecosystem**:~200 dApps · Aave · Uniswap · LayerZero · Stargate · OKX · deep MetaMask integration is the largest traffic entry point.

**DA layer**:default L1 blobs. Consensys continues its "all on-chain" stance and does not offer validium.

### Taiko

**EVM equivalence**:Type 1(fully EVM-equivalent · bit-for-bit · including EVM opcode / precompile / consensus rules). Any Ethereum dApp / L1 client can fork directly.

**Proving system**:Halo2(SGX + ZK multi-prover · in 2024 年 introduced SP1 · Risc Zero · Aligned 3 -way prover competition). Pioneer in multi-proof aggregation(see [[systems/multi-proof-aggregation-fault-prover]]).

**Proof time**:~20-40  minutes per batch(because Type 1  requires 100% EVM precision, proving is slower).

**Gas cost**:user ~$0.01-0.05(slightly higher than Scroll/Linea because of Type 1  prove cost).

**TVL May 2026**:~$350M(estimate).

**Mainnet maturity**:2024.05 Alpha-6 mainnet · 2024.06 Hekla testnet · 2025 mainnet stable · 2026 Stage 1  evolving.

**Decentralization**:**Sequencer:Based rollup**(borrows L1 proposer as sequencer · the only fully decentralized sequencer among ZK-EVMs). Prover:permissionless prover market opened(anyone can submit proofs and earn TAIKO). Upgrade:7-day timelock.

**Ecosystem**:~80 dApps · TaikoSwap · mainly Ethereum-native dApp forks. The based rollup concept is an academic core in the ETH community, publicly recommended by Vitalik.

**DA layer**:default L1 blobs(based rollup requires L1 DA).

### Kakarot

**EVM equivalence**:Type 4(implements EVM in Cairo · runs on StarkNet). Theoretically 99% Solidity-compatible, but with edge-case differences.

**Proving system**:borrows StarkNet's Cairo-STARK(Kakarot smart contract layer is Cairo · internally interprets EVM bytecode).

**Proof time**:depends on StarkNet(~30-60  minutes).

**Gas cost**:depends on StarkNet · slightly higher than native StarkNet.

**TVL May 2026**:~$15M(early adoption).

**Mainnet maturity**:2024-Q4 mainnet beta · 2025-2026  trial operation · not production grade.

**Decentralization**:borrows StarkNet governance · Kakarot team leads smart contract upgrades.

**Ecosystem**:~10-20 dApps · mainly experimental developer deployments. Kakarot's strategic value is "bringing EVM to StarkNet"; it is not an independent L2 .

**DA layer**:borrows StarkNet(L1 blobs + Volition + EigenDA under exploration).

### Polygon Miden

**EVM equivalence**:non-EVM · Miden Assembly(MASM)· STARK-friendly ISA. EVM through Miden-EVM transpiler(early). Design philosophy: "client prover · user proves transaction locally · then submits proof to sequencer"(contrasted with the traditional sequencer-prove model).

**Proving system**:Miden VM(based on Winterfell STARK framework). Client-prover friendly(can prove on a laptop in seconds to minutes, depending on transaction complexity).

**Proof time**:user client ~1-30  seconds(simple transaction)· L1 submit batch ~10-20  minutes.

**Gas cost**:user sub-cent · proving is local, so L1  pays only verification + DA.

**TVL May 2026**:~$30M(early).

**Mainnet maturity**:2024 testnet · 2026 mainnet beta · not production grade for high-value DeFi.

**Decentralization**:Sequencer:Polygon Labs centralized(early). Prover:user self-proving is the design core, naturally decentralized(users control their own transaction proof).

**Ecosystem**:~10 dApps · mainly private payments / DeFi experiments(Miden emphasizes client-side privacy as the differentiator).

**DA layer**:Miden P2P proprietary DA(experimental · not L1 blobs). Plans to explore Celestia / EigenDA as fallback. Polygon AggLayer connection.

### ImmutableX (Immutable zkEVM)

**EVM equivalence**:Type 2(based on Polygon zkEVM stack · EVM-equivalent 99%). Gaming-specialized ZK-rollup.

**Proving system**:Plonky2(borrows Polygon zkEVM proving infrastructure).

**Proof time**:~10-20  minutes(inherits Polygon zkEVM performance).

**Gas cost**:user gas-free for NFT mint / transfer(subsidized by Immutable team · gaming UX priority)· other transactions sub-cent.

**TVL May 2026**:~$280M(NFT-heavy · not fully fungible TVL).

**Mainnet maturity**:2024-Q1 zkEVM mainnet(previous ImmutableX 1.0  was a StarkEx validity pool, not zkEVM). 2025-2026  gaming ecosystem expansion.

**Decentralization**:Sequencer:Immutable centralized(gaming positioning · decentralization is not prioritized). Prover:borrows Polygon prover network. Upgrade:Immutable Foundation + 7-day timelock.

**Ecosystem**:specialized in web3 gaming — Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay and 80+ other games. It is the most dominant gaming vertical among ZK-EVMs.

**DA layer**:default L1 blobs · some NFT metadata uses validium(DAC mode) to reduce cost.

## Big comparison matrix table

**9  ZK-EVM / ZK-rollups × 9  comparison axes**(state as of 2026-Q2 ):

| Rollup | EVM Type | Proving System | Proof Time | Gas Cost | TVL May 2026 | Mainnet Maturity | Seq/Prover Decentralization | Ecosystem | DA Layer |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5(target Type 1)| Plonky2/3(STARK→SNARK) | 5-10  min | sub-cent | $800M | 2023-03 · Stage 1 | Seq centralized · Prover 5 社network · 7d timelock + SC 7/13 | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1 blobs + Validium mode · AggLayer unifier |
| **zkSync Era** | Type 4(zkSolc) | Boojum(STARK+FRI) | 10-15  min | sub-cent($0.001-0.005)· AA native | $2.0B | 2023-03 · Stage 1 | Seq centralized · Prover Matter Labs+1-2 · 21d timelock + SC 9/15 | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1 blobs · Validium("zkPorter") delayed · hyperchains can choose EigenDA/Celestia |
| **StarkNet** | Type 4(Cairo native · Solidity via Kakarot) | Cairo-STARK(native · quantum-resistant) | 30-60  min | $0.01-0.1 | $650M | 2021-11 alpha · 2023 v0.13 · Stage 1  partial | Seq centralized · Prover SDK opened · Foundation+STRK governance | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1 blobs + Volition mode + EigenDA exploration |
| **Scroll** | Type 2(99% bytecode-equivalent) | Halo2 + PSE-zkEVM · multi-proof agg | 15-25  min | sub-cent($0.005-0.02) | $700M | 2023-10 · Stage 1 | Seq centralized · Prover third-party beta · 7d timelock + SC | ~180 dApp · Aave/Uni/Pendle/GMX · Scroll Canvas | L1 blobs only(explicitly no validium) |
| **Linea (Consensys)** | Type 2 | zk-SNARK custom(VK2.0/3.0 · Vortex+Arcane) | 10-20  min | sub-cent($0.002-0.01) | $1.2B | 2023-07 · Stage 1 | Seq centralized · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask integration · Aave/Uni/OKX | L1 blobs only(all on-chain stance) |
| **Taiko** | Type 1(bit-for-bit EVM) | Halo2(SGX+ZK)· SP1/Risc Zero/Aligned 3 -way | 20-40  min | $0.01-0.05 | $350M | 2024-05 mainnet · Stage 1  evolving | **Based rollup · Seq borrows L1 proposer · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik-recommended based rollup | L1 blobs(based rollup requires L1 DA) |
| **Kakarot** | Type 4(EVM on Cairo on StarkNet) | Borrows StarkNet Cairo-STARK | ~30-60  min(borrows StarkNet) | Slightly higher than StarkNet | $15M | 2024 Q4 beta · not production-grade | Borrows StarkNet · Kakarot team-led | ~10-20 dApp · experimental deploy | Borrows StarkNet(L1 blobs + Volition + EigenDA exploration) |
| **Polygon Miden** | Non-EVM(MASM · EVM transpiler early) | Miden VM(Winterfell STARK)· **client prover** | User-local 1-30s · L1 batch 10-20  min | sub-cent(local prove) | $30M | 2024 testnet · 2026 mainnet beta | Seq centralized · **Prover user self-prove(naturally decentralized)** | ~10 dApp · private payments/DeFi experiments | Miden P2P proprietary DA · Celestia/EigenDA exploration · AggLayer connection |
| **ImmutableX zkEVM** | Type 2(based on Polygon zkEVM stack) | Plonky2(borrows Polygon) | 10-20  min | NFT gas-free subsidy · others sub-cent | $280M(NFT-heavy) | 2024 Q1 zkEVM mainnet · previously StarkEx | Seq centralized(gaming positioning)· Prover borrows Polygon · 7d timelock | **gaming-specialized** · 80+ games:Illuvium/Gods Unchained/Guild | L1 blobs + some NFT metadata validium |

**How to read the matrix**:
- **EVM equivalence vs proving cost tradeoff**:Type 1(Taiko) is the most expensive but perfectly compatible; Type 4(zkSync · StarkNet · Kakarot) is cheapest but requires dev tooling adaptation
- **DA layer choice reflects institutional vs DeFi stance**:Scroll/Linea/Taiko defend L1 blobs(institutional grade)· Polygon/StarkNet/Miden offer validium/Volition(DeFi UX priority)· Immutable is hybrid(NFT uses validium to reduce cost)
- **True decentralization state**:**all ZK-EVM sequencers are centralized**(2026-Q2)· the only exception is Taiko based rollup. Prover decentralization progress:Polygon(5 社network)> Scroll/StarkNet(SDK opened)> others(team-led)
- **TVL and ecosystem traction do not perfectly correlate**:zkSync has high TVL at $2.0B but Type 4  limits developer migration cost; Linea's $1.2B borrows MetaMask traffic advantage; Scroll/Polygon Type 2 + mid-level TVL are the "balanced choice"

## Boundary cases / future trajectory

**Evolution direction of the EVM equivalence ladder**:Polygon zkEVM has a public roadmap to reach, in 2027 年, Type 1 . Taiko is already Type 1  and is the reference benchmark for other ZK-EVMs. zkSync Era and StarkNet keep the Type 4  philosophy(prove cost optimization · accepting dev tooling cost). Linea and Scroll are stable at Type 2  and have no plan to upgrade to Type 1 (they judge the ROI of the final 1% compatibility push to be low).

**Proving system convergence vs pluralization**:
- **Convergence trend**:most ZK-EVMs eventually use SNARK wrap(for L1 verification cost · groth16 / plonky, etc.), even when their internal system is STARK(zkSync Boojum · Polygon Plonky2).
- **Pluralization trend**:StarkNet / Miden keep native STARK because of quantum resistance + client-friendliness(see [[systems/post-quantum-blockchain-day1-integration]]). Generalized provers such as SP1 / Risc Zero / Aligned(any rollup can choose them) are a new trend in modular proving.
- Multi-proof aggregation(see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]) lets 1  rollups run multiple independent provers at the same time and fall back on error — Taiko is the pioneer.

**Sequencer decentralization timetable**:Polygon zkEVM · zkSync Era · Scroll · Linea have all publicly planned shared sequencer(Espresso / Astria / Radius) introduction in 2026-2027 . Taiko based rollup is naturally solved. Vitalik publicly proposed in 2024 年 that ZK-EVMs should prioritize sequencer decentralization, not prover decentralization, because sequencer concentration = larger liveness risk.

**AggLayer / ZK Stack / Superchain faction war**:
- Polygon AggLayer federates Polygon zkEVM + zkSync(partial)+ Astar + others, sharing settlement layer + cross-chain LP
- zkSync ZK Stack is Matter Labs-led hyperchain framework; GRVT · Treasure · Cronos zkEVM are already deployed
- Optimism Superchain(not included in this matrix · OP-rollup) is the counterpart
- In the long term, all rollups need some kind of unifier; however, AggLayer / ZK Stack / Superchain are each pushed separately, and users still need general bridges to move across stacks(see [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]])

**DA layer and EigenLayer linkage**:EigenDA(see [[systems/eigenlayer-overview|EigenLayer overview]]) provides alt-DA to multiple ZK Stack hyperchains · StarkNet Volition · Miden / Kakarot, etc. But whether ZK-EVMs should use alt-DA(abandoning L1  security) remains debated — Scroll / Linea / Taiko camp keeps L1 DA; Polygon / StarkNet / Miden camp offers options. Institutional customers(SWIFT / DTCC · see [[systems/chainlink-ccip-institutional-messaging]]) clearly require L1 DA.

**Pectra EIP-7691  impact**(see [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob expansion and L2 economic linkage]]):blob target 3→6  + max 6→9  further reduces ZK-EVM submit cost by -50%, directly benefiting all rollups that use L1 blobs. 2026-Q4  Fusaka PeerDAS adds another 10× capacity.

**Formal verification progress**:ZK-EVM is a natural arena for formal spec implementation co-design(see [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]) — consistency between Solidity / EVM spec + ZK circuit spec is the core security point. Linea and the Consensys Diligence team publish formal verification progress. Scroll has long-term academic collaboration with PSE. zkSync Boojum prover was independently audited by Galois.

**Institutional vs DeFi selection**:
- Institutional(tokenized fund · DvP · regulatory compliance):Linea(MetaMask Institutional integration · Consensys backing)· Scroll(EVM-equivalent + L1 DA purity)· Polygon zkEVM(Franklin Templeton pilot precedent)
- DeFi-native(high TPS · long-tail dApp):zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific:ImmutableX
- Privacy-first:Polygon Miden(client prover + privacy design)
- Ethereum-aligned(maximum decentralization · Vitalik recommended):Taiko based rollup

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob expansion and L2 economic linkage]]
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
- Vitalik "Different types of ZK-EVM" classification(public blog)
