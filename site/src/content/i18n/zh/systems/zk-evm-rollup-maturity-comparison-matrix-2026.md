---
source: systems/zk-evm-rollup-maturity-comparison-matrix-2026
source_hash: cd9fc019515ed5fa
lang: zh
status: machine
fidelity: ok
title: "ZK-EVM Rollup 成熟度对照矩阵 2026 · 9  个 rollup 的 proving system / TVL / DA / decentralization"
translated_at: 2026-06-01T04:15:40.156Z
---
# ZK-EVM Rollup 成熟度对照矩阵 2026 · 9  个 rollup 的 proving system / TVL / DA / decentralization

## TL;DR

- 对 9  个 active ZK-EVM / ZK-rollup，按 2026-Q2  时点的 **EVM equivalence · proving system · proof time · gas cost · TVL · mainnet maturity · decentralization · ecosystem · DA layer** 共 9  个轴进行对照
- **EVM equivalence ladder**(Vitalik Type 1-4):Linea/Scroll → Type 2(EVM-equivalent · 99%)· Polygon zkEVM → Type 2.5 → 正在向 Type 1  演进 · zkSync Era → Type 4(EVM-compatible · 不同 bytecode)· StarkNet → Type 4(Cairo native · Solidity 通过 Kakarot)· Taiko → Type 1(完全 EVM-equivalent · base-rollup 模型)· Miden → 非 EVM(私有执行 + Solidity bridge)
- **Proving system 5  大主流**:Plonky2(Polygon · STARK→SNARK 递归)· Boojum(zkSync · STARK + FRI)· Cairo-STARK(StarkNet)· Halo2 / Recursive Halo2(Scroll · Taiko · PSE 派)· EVM Prover(Linea · zk-SNARK with vk2.0)
- **TVL 2026-Q2  估计**:zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M(early)
- **DA layer 选择**:大部分仍使用 L1 blobs(EIP-4844 · 参见 [[systems/pectra-eip-7691-blob-l2-impact]])· 少数选择 alt-DA:Polygon zkEVM 提供 validium 模式 · StarkNet Volition · Miden 自有 P2P · Kakarot 探索 Celestia · Linea/Scroll/Taiko 默认 L1

- 路由:与 [[systems/INDEX|systems index]] · [[systems/cross-chain-five-pole-comparison-matrix]] 对照(rollup 间 messaging 选定)

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] 阅读驱动 rollup gas cost 的 L1 blob capacity 语境，并结合 [[systems/pectra-upgrade-overview|Pectra upgrade overview]] 阅读更广泛的 Ethereum upgrade landscape。与 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] 配对阅读，以理解“L2 carrying 99% of users”的 meta-strategy。Proving system 深入见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] 和 [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]。长期 cryptographic risk 见 [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]。Restaking-backed DA(EigenDA 服务本矩阵中的若干 rollups)见 [[systems/eigenlayer-overview|EigenLayer overview]]。推理时请 cross-link 至 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]，对象是 L2-to-L2 messaging。

## Why this matrix matters

ZK-EVM rollup 在 2023-2025 年 集中 mainnet 稼动后，从“技术路线之争”演进为“EVM equivalence vs proving cost vs decentralization vs ecosystem traction”的多目标优化空间。开发者在选择部署到哪个 ZK rollup 时，面对 6-8  个候选(各自声称“最 EVM-equivalent · 最快 · 最便宜”)，若没有统一对照表，容易被市场宣传误导。

机构客户(参见 [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] 的 J.P. Morgan Kinexys / DTCC / SWIFT pilot)同样需要决定“tokenized 资产在哪个 L2  settle”。机构关注的不是 TPS，而是 **prover/sequencer 的 decentralization**(当前所有 ZK-EVM 的 sequencer 都是中心化，prover 大多中心化)、**upgrade governance**(可在 challenge window 内升级 smart contracts = 实际控制资金)、**DA layer 风险**(使用 validium 时，数据可用性依赖外部委员会)。

本矩阵对公开运行中的 9  个 ZK-EVM / ZK-rollup 进行对照，横向展开 9  个轴，数据快照为 2026-Q2 。Optimistic rollup(Arbitrum / Optimism / Base / Blast)不包含在本矩阵中，请参见另行的 optimistic 矩阵(TBD)。

## Per-rollup sections

### Polygon zkEVM / AggLayer

**EVM equivalence**:2023 年 上线时为 Type 3(EVM-compatible · 部分 opcode 差异)，在 2024-2025 年 逐步向 Type 2.5  演进。Polygon 团队 roadmap 是 Type 1  完全 equivalence。

**Proving system**:Plonky2(STARK 递归 → SNARK final · GPU 友好)。2024 年 升级到 Plonky3 ，速度提升约 30%。

**Proof time**:单 batch 约 5-10  分钟(2026-Q2)。L1 submit 平均约 30  分钟 finality。

**Gas cost**:用户 sub-cent($0.001-0.01 simple transfer)。

**TVL May 2026**:约 $800M(估计 · 包含 AggLayer federation)。

**Mainnet maturity**:2023.03  mainnet beta · 2024 Stage 1 decentralization · 2026  也为 Stage 1(Sequencer 中心化 · Prover 部分开放)。

**Decentralization**:Sequencer:Polygon Labs 中心化运营 · 计划在 2026-2027  引入 Espresso shared sequencer。Prover:5 社 的 prover network(Polygon Labs + 4  third parties)。Upgrade:7-day timelock + Security Council 7-of-13。

**Ecosystem**:约 150  个 dApp · 包括 QuickSwap · Polygon ID · Astar zkEVM · 多个 enterprise 案例(Franklin Templeton tokenized fund pilot)。

**DA layer**:默认 L1 blobs(EIP-4844)。提供 validium 模式(DAC 7-of-9  multisig · 用于 enterprise private chains)。AggLayer 是 Polygon 的 cross-chain unifier，多个 zkEVM 可共享 settlement。

### zkSync Era (Matter Labs)

**EVM equivalence**:Type 4(EVM-compatible · 不同 bytecode · Solidity 经自有 zkSolc compiler)。需要专门 dev tooling。

**Proving system**:Boojum(STARK + FRI · GPU 友好)。2024 年 升级到 Boojum v1.5 ，效率提升约 40%。Final SNARK wrap on Ethereum。

**Proof time**:约 10-15  分钟 batch · L1 submit 约 30-45  分钟 finality。

**Gas cost**:用户 sub-cent($0.001-0.005)。Account Abstraction native(无需 ERC-4337 )。

**TVL May 2026**:约 $2.0B(估计 · 包含 ZK Stack hyperchains)。

**Mainnet maturity**:2023.03  mainnet · 2024  发布 ZK Stack framework · 2026 Stage 1 decentralization。

**Decentralization**:Sequencer:Matter Labs 中心化 · 计划在 2026 Q3-Q4  引入 decentralized sequencer(Espresso 合作)。Prover:Matter Labs + 1-2  third parties。Upgrade:21-day timelock(2024  后从 1-day 延长)+ Security Council 9-of-15。

**Ecosystem**:约 250  个 dApp · SyncSwap · Maverick · Aave v3 · Argent native AA · ZK Stack hyperchains(GRVT · Treasure · Cronos zkEVM)。

**DA layer**:默认 L1 blobs。Validium 模式(“zkPorter”)已规划但 deploy 延期。ZK Stack hyperchains 可选择 EigenDA / Celestia。

### StarkNet

**EVM equivalence**:Type 4(Cairo native · 非 Solidity)。Solidity 兼容通过 Kakarot 子项目(EVM-on-StarkNet · 尚非完全 production grade)或 Warp transpiler(已废止)。Cairo 是为 STARK 优化的 Turing-complete language。

**Proving system**:Cairo-STARK(原生 STARK · 无需 SNARK wrap · 但 L1 verification cost 较高)。STARK 抗量子(参见 [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]])。

**Proof time**:约 30-60  分钟 batch(STARK proof size 较大且较慢)。

**Gas cost**:用户约 $0.01-0.1(高于 zkSync/Polygon · 因 STARK proof size)。2025 stwo prover 升级目标为成本 -50%。

**TVL May 2026**:约 $650M(估计)。

**Mainnet maturity**:2021.11 alpha · 2023 v0.13 mainnet · 2024 v0.14 Volition 引入 · 2025 Stage 1  部分达成。

**Decentralization**:Sequencer:StarkWare 中心化 · 计划在 2026-2027  通过 PoS validator set decentralize。Prover:StarkWare 主导 · third-party prover SDK 开放。Upgrade:Foundation governance + STRK token voting。

**Ecosystem**:约 120  个 dApp · 包括 Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms。Argent / Braavos AA wallet 原生支持。机构案例:Visa Aeon · Provenance pilot。

**DA layer**:L1 blobs(默认)+ Volition 模式(用户选择 on-chain 或 DAC off-chain)+ 正在探索 EigenDA。

### Scroll

**EVM equivalence**:Type 2(EVM-equivalent · 99% bytecode-level 兼容 · 几乎所有 Solidity dApp 可零修改 deploy)。

**Proving system**:Halo2 + PSE-flavor zkEVM(基于 Privacy Scaling Explorations 的长期研究)。2025 年 升级到 multi-proof aggregation(参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]])。

**Proof time**:约 15-25  分钟 batch · L1 submit 约 30  分钟 finality。

**Gas cost**:用户 sub-cent($0.005-0.02)。

**TVL May 2026**:约 $700M。

**Mainnet maturity**:2023.10  mainnet · 2024-2025  持续 audit · 2026 Stage 1。

**Decentralization**:Sequencer:Scroll team 中心化 · 计划在 2026-2027  decentralize。Prover:third-party 开放(Scroll prover network beta)。Upgrade:7-day timelock + Security Council。

**Ecosystem**:约 180  个 dApp · Aave · Uniswap · Pendle · GMX 等主流均已 deploy。Scroll Canvas 是用户 onboarding tool。

**DA layer**:默认 L1 blobs。Scroll team 明确表示不做 validium，保持 L1 DA 纯度(EVM-equivalent + L1 DA 是 institutional 卖点)。

### Linea (Consensys)

**EVM equivalence**:Type 2(EVM-equivalent · 与 Scroll 类似，99% 兼容)。Consensys 强调“drop-in MetaMask / Truffle / Infura toolchain compatibility”。

**Proving system**:zk-SNARK custom prover(Linea VK2.0 · 基于 Vortex + Arcane)。2025 年 通过 vk3.0 升级提升 proof 速度。Recursive proof aggregation。

**Proof time**:约 10-20  分钟 batch · L1 submit 约 30  分钟 finality。

**Gas cost**:用户 sub-cent($0.002-0.01)。

**TVL May 2026**:约 $1.2B(估计 · MetaMask 流量加持)。

**Mainnet maturity**:2023.07  mainnet · 2024 v1.5 upgrade · 2026 Stage 1。

**Decentralization**:Sequencer:Consensys 中心化 · 计划在 2026-2027  decentralize。Prover:Consensys 主导 · third-party prover SDK 开放。Upgrade:7-day timelock + Security Council。

**Ecosystem**:约 200  个 dApp · Aave · Uniswap · LayerZero · Stargate · OKX · 与 MetaMask 的深度集成是最大流量入口。

**DA layer**:默认 L1 blobs。Consensys 继续坚持“all on-chain”立场，不提供 validium。

### Taiko

**EVM equivalence**:Type 1(完全 EVM-equivalent · bit-for-bit · 包含 EVM opcode / precompile / consensus rules)。任意 Ethereum dApp / L1 client 可直接 fork。

**Proving system**:Halo2(SGX + ZK multi prover · 2024 年 引入 SP1 · Risc Zero · Aligned 的 3  方 prover competition)。Multi-proof aggregation 的先驱(参见 [[systems/multi-proof-aggregation-fault-prover]])。

**Proof time**:约 20-40  分钟 batch(因 Type 1  需要 100% EVM 精度，prove 较慢)。

**Gas cost**:用户约 $0.01-0.05(略高于 Scroll/Linea · 因 Type 1  的 prove cost)。

**TVL May 2026**:约 $350M(估计)。

**Mainnet maturity**:2024.05 Alpha-6 mainnet · 2024.06 Hekla testnet · 2025 mainnet 稳定 · 2026 Stage 1  进化中。

**Decentralization**:**Sequencer:Based rollup**(借用 L1 proposer 作为 sequencer · 是 ZK-EVM 中唯一完全分散化的 sequencer)。Prover:permissionless prover market 开放(任何人都可提交 proof 赚取 TAIKO)。Upgrade:7-day timelock。

**Ecosystem**:约 80  个 dApp · TaikoSwap · 主要是 Ethereum-native dApp fork。Based rollup 概念是 ETH 社区学术核心，Vitalik 公开推荐。

**DA layer**:默认 L1 blobs(Based rollup 必须使用 L1 DA)。

### Kakarot

**EVM equivalence**:Type 4(用 Cairo 实现 EVM · 运行在 StarkNet 之上)。理论上 99% Solidity 兼容，但存在 edge case 差异。

**Proving system**:借用 StarkNet 的 Cairo-STARK(Kakarot smart contract 层为 Cairo · 内部解释 EVM bytecode)。

**Proof time**:依赖 StarkNet(约 30-60  分钟)。

**Gas cost**:依赖 StarkNet，略高于 native StarkNet。

**TVL May 2026**:约 $15M(early adoption)。

**Mainnet maturity**:2024-Q4 mainnet beta · 2025-2026  试运营 · 尚非 production grade。

**Decentralization**:借用 StarkNet governance · Kakarot team 主导 smart contract upgrades。

**Ecosystem**:约 10-20  个 dApp · 主要是开发者实验性 deploy。Kakarot 的战略价值是“把 EVM 带到 StarkNet”，并非独立 L2 。

**DA layer**:借用 StarkNet(L1 blobs + Volition + EigenDA 探索中)。

### Polygon Miden

**EVM equivalence**:非 EVM · Miden Assembly(MASM)· STARK 友好 ISA。EVM 通过 Miden-EVM transpiler(early)。设计哲学是“client prover · 用户本地证明 transaction · 然后将 proof 提交给 sequencer”(与传统 sequencer-prove 模型形成对照)。

**Proving system**:Miden VM(基于 Winterfell STARK framework)。客户端 prover 友好(可在笔记本上数秒到数分钟内 prove，取决于 transaction complexity)。

**Proof time**:用户客户端约 1-30  秒(simple transaction)· L1 submit batch 约 10-20  分钟。

**Gas cost**:用户 sub-cent · prove 在本地完成，因此 L1  仅支付 verification + DA。

**TVL May 2026**:约 $30M(early)。

**Mainnet maturity**:2024 testnet · 2026 mainnet beta · 尚不适用于 high-value DeFi 的 production grade。

**Decentralization**:Sequencer:Polygon Labs 中心化(early)。Prover:用户 self-prove 是设计核心，自然分散化(用户控制自己的 transaction proof)。

**Ecosystem**:约 10  个 dApp · 主要为 private payments / DeFi experiments(Miden 强调 client-side privacy 是 differentiator)。

**DA layer**:Miden P2P 自有 DA(experimental · 不是 L1 blobs)。计划探索 Celestia / EigenDA 作为 fallback。连接 Polygon AggLayer。

### ImmutableX (Immutable zkEVM)

**EVM equivalence**:Type 2(基于 Polygon zkEVM stack · EVM-equivalent 99%)。游戏专用 ZK-rollup。

**Proving system**:Plonky2(借用 Polygon zkEVM proving infrastructure)。

**Proof time**:约 10-20  分钟(继承 Polygon zkEVM 性能)。

**Gas cost**:用户 NFT mint / transfer gas-free(Immutable team 补贴，优先游戏 UX)· 其他 transaction sub-cent。

**TVL May 2026**:约 $280M(NFT-heavy · 不完全是 fungible TVL)。

**Mainnet maturity**:2024-Q1 zkEVM mainnet(此前 ImmutableX 1.0  是 StarkEx 验证池，不是 zkEVM)。2025-2026  游戏生态扩张。

**Decentralization**:Sequencer:Immutable 中心化(游戏定位，不优先 decentralization)。Prover:借用 Polygon prover network。Upgrade:Immutable Foundation + 7-day timelock。

**Ecosystem**:专注 web3 gaming——Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay 等 80+ 游戏。在 ZK-EVM 中游戏 vertical 最占优势。

**DA layer**:默认 L1 blobs · 一部分 NFT metadata 通过 validium(DAC 模式)降低成本。

## Big comparison matrix table

**9  个 ZK-EVM / ZK-rollup × 9  轴对照**(2026-Q2  状态):

| Rollup | EVM Type | Proving System | Proof Time | Gas Cost | TVL May 2026 | Mainnet Maturity | Seq/Prover Decentralization | Ecosystem | DA Layer |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5(target Type 1)| Plonky2/3(STARK→SNARK) | 5-10  分钟 | sub-cent | $800M | 2023-03 · Stage 1 | Seq 中心化 · Prover 5 社network · 7d timelock + SC 7/13 | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1 blobs + Validium 模式 · AggLayer unifier |
| **zkSync Era** | Type 4(zkSolc) | Boojum(STARK+FRI) | 10-15  分钟 | sub-cent($0.001-0.005)· AA native | $2.0B | 2023-03 · Stage 1 | Seq 中心化 · Prover Matter Labs+1-2 · 21d timelock + SC 9/15 | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1 blobs · Validium("zkPorter") 延期 · hyperchains 可选 EigenDA/Celestia |
| **StarkNet** | Type 4(Cairo native · Solidity via Kakarot) | Cairo-STARK(原生 · 抗量子) | 30-60  分钟 | $0.01-0.1 | $650M | 2021-11 alpha · 2023 v0.13 · Stage 1  部分 | Seq 中心化 · Prover SDK 开放 · Foundation+STRK governance | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1 blobs + Volition 模式 + EigenDA 探索中 |
| **Scroll** | Type 2(99% bytecode-equivalent) | Halo2 + PSE-zkEVM · multi-proof agg | 15-25  分钟 | sub-cent($0.005-0.02) | $700M | 2023-10 · Stage 1 | Seq 中心化 · Prover third-party beta · 7d timelock + SC | ~180 dApp · Aave/Uni/Pendle/GMX · Scroll Canvas | 仅 L1 blobs(明确不做 validium) |
| **Linea (Consensys)** | Type 2 | zk-SNARK custom(VK2.0/3.0 · Vortex+Arcane) | 10-20  分钟 | sub-cent($0.002-0.01) | $1.2B | 2023-07 · Stage 1 | Seq 中心化 · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask integration · Aave/Uni/OKX | 仅 L1 blobs(all on-chain stance) |
| **Taiko** | Type 1(bit-for-bit EVM) | Halo2(SGX+ZK)· SP1/Risc Zero/Aligned 3  方 | 20-40  分钟 | $0.01-0.05 | $350M | 2024-05 mainnet · Stage 1  进化中 | **Based rollup · Seq 借用 L1 proposer · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik 推荐 based rollup | L1 blobs(based rollup 必须使用 L1 DA) |
| **Kakarot** | Type 4(EVM on Cairo on StarkNet) | 借用 StarkNet Cairo-STARK | ~30-60  分钟(借用 StarkNet) | 略高于 StarkNet | $15M | 2024 Q4 beta · 非 production-grade | 借用 StarkNet · Kakarot team 主导 | ~10-20 dApp · experimental deploy | 借用 StarkNet(L1 blobs + Volition + EigenDA 探索) |
| **Polygon Miden** | 非 EVM(MASM · EVM transpiler early) | Miden VM(Winterfell STARK)· **client prover** | 用户本地 1-30s · L1 batch 10-20  分钟 | sub-cent(prove 本地) | $30M | 2024 testnet · 2026 mainnet beta | Seq 中心化 · **Prover 用户 self-prove(自然分散化)** | ~10 dApp · private payments/DeFi experiments | Miden P2P 自有 DA · Celestia/EigenDA 探索 · AggLayer 连接 |
| **ImmutableX zkEVM** | Type 2(基于 Polygon zkEVM stack) | Plonky2(借用 Polygon) | 10-20  分钟 | NFT gas-free 补贴 · 其他 sub-cent | $280M(NFT-heavy) | 2024 Q1 zkEVM mainnet · 此前 StarkEx | Seq 中心化(游戏定位)· Prover 借用 Polygon · 7d timelock | **gaming 专注** · 80+ 游戏:Illuvium/Gods Unchained/Guild | L1 blobs + 一部分 NFT metadata validium |

**矩阵阅读方式**:
- **EVM equivalence vs proving cost tradeoff**:Type 1(Taiko)最昂贵但兼容性完美；Type 4(zkSync · StarkNet · Kakarot)最便宜但需要 dev tooling 适配
- **DA layer 选择反映 institutional vs DeFi 立场**:Scroll/Linea/Taiko 坚守 L1 blobs(institutional grade)· Polygon/StarkNet/Miden 提供 validium/Volition(DeFi UX 优先)· Immutable hybrid(NFT 使用 validium 降低成本)
- **Decentralization 真实状态**:**所有 ZK-EVM 的 sequencer 都是中心化**(2026-Q2)· 唯一例外是 Taiko based rollup。Prover decentralization 进度为 Polygon(5 社network)> Scroll/StarkNet(SDK 开放)> 其他(团队主导)
- **TVL 与 ecosystem traction 不完全相关**:zkSync $2.0B 高 TVL，但 Type 4  限制开发者迁移成本；Linea $1.2B 借助 MetaMask 流量优势；Scroll/Polygon Type 2 + 中等 TVL 是“balanced choice”

## Boundary cases / future trajectory

**EVM equivalence ladder 的演进方向**:Polygon zkEVM 公开 roadmap 要在 2027 年 达到 Type 1 。Taiko 已是 Type 1 ，是其他 ZK-EVM 的 reference benchmark。zkSync Era 和 StarkNet 维持 Type 4  哲学(prove cost 优化 · 接受 dev tooling cost)。Linea 和 Scroll 稳定在 Type 2 ，没有升级到 Type 1  的计划(判断最后的 1% 兼容性投入产出比低)。

**Proving system 收敛 vs 多元化**:
- **收敛趋势**:大多数 ZK-EVM 最终都会 SNARK wrap(为降低 L1 verification cost · groth16 / plonky 等)，即便内部使用 STARK(zkSync Boojum · Polygon Plonky2)也一样。
- **多元化趋势**:StarkNet / Miden 坚持原生 STARK，原因是抗量子 + client-friendly(参见 [[systems/post-quantum-blockchain-day1-integration]])。SP1 / Risc Zero / Aligned 等 prover 通用化(任意 rollup 可选择)是 modular proving 的新趋势。
- Multi-proof aggregation(参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]])使 1  个 rollup 可以同时运行多个独立 prover，并在出错时 fallback——Taiko 是先驱。

**Sequencer decentralization 时间表**:Polygon zkEVM · zkSync Era · Scroll · Linea 均公开将在 2026-2027  引入 shared sequencer(Espresso / Astria / Radius)。Taiko based rollup 自然已解决。Vitalik 于 2024 年 公开建议 ZK-EVM 应优先解决 sequencer decentralization 而不是 prover，因为 sequencer 集中 = 更大的 liveness risk。

**AggLayer / ZK Stack / Superchain 派系战**:
- Polygon AggLayer 联合 Polygon zkEVM + zkSync(部分)+ Astar + 其他，共享 settlement layer + cross-chain LP
- zkSync ZK Stack 是 Matter Labs 主导的 hyperchain framework，GRVT · Treasure · Cronos zkEVM 已 deploy
- Optimism Superchain(不含于本矩阵，属 OP-rollup)是对应物
- 长期来看，所有 rollup 之间都需要某种 unifier；但 AggLayer / ZK Stack / Superchain 各自推进，用户要跨 stack 使用仍需要通用桥(参见 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]])

**DA 层与 EigenLayer 的关联**:EigenDA(参见 [[systems/eigenlayer-overview|EigenLayer overview]])为多个 ZK Stack hyperchain · StarkNet Volition · Miden / Kakarot 等提供 alt-DA。但 ZK-EVM 是否应使用 alt-DA(放弃 L1  security)仍有争议——Scroll / Linea / Taiko 派坚持 L1 DA；Polygon / StarkNet / Miden 派提供选项。机构客户(SWIFT / DTCC · 参见 [[systems/chainlink-ccip-institutional-messaging]])明确要求 L1 DA。

**Pectra EIP-7691  影响**(参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]):blob target 3→6  + max 6→9  使 ZK-EVM submit cost 进一步 -50%，所有使用 L1 blobs 的 rollup 直接受益。2026-Q4  Fusaka PeerDAS 将进一步带来 10× 容量。

**Formal verification 进展**:ZK-EVM 是 formal spec implementation co-design(参见 [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]])的天然舞台——Solidity / EVM spec + ZK circuit spec 的双 spec 一致性是核心安全点。Linea 和 Consensys Diligence team 公开 formal verification 进展。Scroll 与 PSE 长期进行学术合作。zkSync Boojum prover 由 Galois 独立 audit。

**机构 vs DeFi 选定**:
- Institutional(tokenized fund · DvP · 监管合规):Linea(MetaMask Institutional integration · Consensys 背书)· Scroll(EVM-equivalent + L1 DA 纯度)· Polygon zkEVM(Franklin Templeton pilot 先例)
- DeFi-native(高 TPS · long-tail dApp):zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific:ImmutableX
- Privacy-first:Polygon Miden(client prover + privacy 设计)
- Ethereum-aligned(maximum decentralization · Vitalik 推荐):Taiko based rollup

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
- Vitalik "Different types of ZK-EVM" classification(public blog)
