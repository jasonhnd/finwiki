---
title: ZK-EVM Rollup 成熟度对照矩阵 2026 · 9 个 rollup proving system / TVL / DA / decentralization
aliases: [zk-evm rollup maturity matrix 2026, zk rollup comparison 2026, polygon zksync starknet scroll linea taiko matrix, zk-evm proving system tvl da decentralization comparison, ethereum l2 zk rollup landscape 2026]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, zk-evm, rollup, ethereum, l2, polygon, zksync, starknet, scroll, linea, taiko, kakarot, miden, immutable, agglayer]
status: active
sources:
  - https://polygon.technology/agglayer
  - https://docs.zksync.io/
  - https://docs.starknet.io/
  - https://docs.scroll.io/
  - https://docs.linea.build/
  - https://docs.taiko.xyz/
  - https://docs.kakarot.org/
  - https://0xmiden.github.io/miden-docs/
  - https://docs.immutable.com/
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains/Rollup
  - https://ethereum.org/en/developers/docs/scaling/zk-rollups/
---

# ZK-EVM Rollup 成熟度对照矩阵 2026 · 9 个 rollup proving system / TVL / DA / decentralization

## TL;DR

- 9 个 active ZK-EVM / ZK-rollup 在 2026-Q2 的 **EVM equivalence · proving system · proof time · gas cost · TVL · mainnet maturity · decentralization · ecosystem · DA layer** 9 维度对照
- **EVM equivalence ladder**(Vitalik Type 1-4):Linea/Scroll → Type 2(EVM-equivalent · 99%)· Polygon zkEVM → Type 2.5 → Type 1 演化中 · zkSync Era → Type 4(EVM-compatible · 不同 bytecode)· StarkNet → Type 4(Cairo native · Solidity 通过 Kakarot)· Taiko → Type 1(完全 EVM-equivalent · base-rollup 模型)· Miden → 非 EVM(私密执行 + Solidity bridge)
- **Proving system 五大主流**:Plonky2(Polygon · STARK→SNARK 递归)· Boojum(zkSync · STARK + FRI)· Cairo-STARK(StarkNet)· Halo2 / Recursive Halo2(Scroll · Taiko · PSE 派)· EVM Prover(Linea · zk-SNARK with vk2.0)
- **TVL 2026-Q2 估算**:zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M(early)
- **DA layer 选择**:大部分仍用 L1 blobs(EIP-4844 · 参见 [[systems/pectra-eip-7691-blob-l2-impact]])· 少数选 alt-DA:Polygon zkEVM 提供 validium 模式 · StarkNet Volition · Miden 自家 P2P · Kakarot 探索 Celestia · Linea/Scroll/Taiko 默认 L1
- 路由:[[systems/INDEX|systems index]] · 与 [[systems/cross-chain-five-pole-comparison-matrix]] 对照(rollup 之间 messaging 选型)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]] for the L1 blob capacity context that drives rollup gas cost, and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade landscape. Pair with [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] for the meta-strategy that frames "L2 carrying 99% of users". For proving system depth, see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] and [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]. For long-term cryptographic risk, see [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]. For restaking-backed DA (EigenDA serves several rollups in this matrix), see [[systems/eigenlayer-overview|EigenLayer overview]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about L2-to-L2 messaging.

## Why this matrix matters

ZK-EVM rollup 自 2023-2025 集中上主网后 · 从 "技术路线之争" 演化为 "EVM equivalence vs proving cost vs decentralization vs ecosystem traction" 多目标优化空间。开发者选择 deploy 哪条 ZK rollup 时面对 6-8 个候选(每条都声称自己是 "最 EVM-equivalent 最快最便宜")· 缺乏统一对照表会被市场宣传误导。

机构客户(参见 [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] 中的 J.P. Morgan Kinexys / DTCC / SWIFT pilot)同样需要决策 "tokenized 资产 settle 在哪条 L2"。机构关心的不是 TPS 而是 **decentralization of prover/sequencer**(目前所有 ZK-EVM 的 sequencer 仍中心化 · prover 大部分中心化)· **upgrade governance**(谁能在 challenge window 内升级智能合约 = 实际控制资金)· **DA layer 风险**(若使用 validium · 数据可用性依赖外部委员会)。

本矩阵对照 9 个公开运营的 ZK-EVM / ZK-rollup · 9 维度横向铺开 · 2026-Q2 数据快照。Optimistic rollup(Arbitrum / Optimism / Base / Blast)不在此矩阵 · 见单独的 optimistic 矩阵(TBD)。

## Per-rollup sections

### Polygon zkEVM / AggLayer

**EVM equivalence**:2023 上线时是 Type 3(EVM-compatible · 部分 opcode 差异)· 2024-2025 逐步演化到 Type 2.5。Polygon 团队 roadmap 是 Type 1 完全 equivalence。

**Proving system**:Plonky2(STARK 递归 → SNARK final · GPU 友好)。2024 升级到 Plonky3 提升 ~30% 速度。

**Proof time**:单 batch ~5-10 分钟(2026-Q2)。L1 submit 平均 ~30 分钟 finality。

**Gas cost**:用户 sub-cent($0.001-0.01 simple transfer)。

**TVL May 2026**:~$800M(估算 · 含 AggLayer 联邦)。

**Mainnet maturity**:2023.03 mainnet beta · 2024 Stage 1 decentralization · 2026 仍在 Stage 1(Sequencer 中心化 · Prover 部分开放)。

**Decentralization**:Sequencer:Polygon Labs 中心化运营 · 计划 2026-2027 引入 Espresso shared sequencer。Prover:5 家 prover 网络(Polygon Labs + 4 第三方)。Upgrade:7-day timelock + Security Council 7-of-13。

**Ecosystem**:~150 dApp · 含 QuickSwap · Polygon ID · Astar zkEVM · 多个 enterprise 案例(Franklin Templeton tokenized fund pilot)。

**DA layer**:默认 L1 blobs(EIP-4844)。提供 validium 模式(DAC 7-of-9 多签 · 用于 enterprise 私密链)。AggLayer 是 Polygon 的 cross-chain unifier · 让多条 zkEVM 共享 settlement。

### zkSync Era (Matter Labs)

**EVM equivalence**:Type 4(EVM-compatible · 不同 bytecode · Solidity 通过自家 zkSolc 编译器)。需要专门 dev tooling。

**Proving system**:Boojum(STARK + FRI · GPU 友好)。2024 升级 Boojum v1.5 提升 ~40% 效率。Final SNARK wrap on Ethereum。

**Proof time**:~10-15 分钟 batch · L1 submit ~30-45 分钟 finality。

**Gas cost**:用户 sub-cent($0.001-0.005)。Account Abstraction native(无需 ERC-4337)。

**TVL May 2026**:~$2.0B(估算 · 含 ZK Stack hyperchains)。

**Mainnet maturity**:2023.03 mainnet · 2024 ZK Stack 框架推出 · 2026 Stage 1 decentralization。

**Decentralization**:Sequencer:Matter Labs 中心化 · 计划 2026 Q3-Q4 引入 decentralized sequencer(Espresso 合作)。Prover:Matter Labs + 1-2 第三方。Upgrade:21-day timelock(2024 后从 1-day 延长)+ Security Council 9-of-15。

**Ecosystem**:~250 dApp · 含 SyncSwap · Maverick · Aave v3 · Argent native AA · ZK Stack hyperchains(GRVT · Treasure · Cronos zkEVM)。

**DA layer**:默认 L1 blobs。Validium 模式("zkPorter")已规划但延迟 deploy。ZK Stack hyperchains 可选 EigenDA / Celestia。

### StarkNet

**EVM equivalence**:Type 4(Cairo native · 不是 Solidity)。Solidity 兼容通过 Kakarot 子项目(EVM-on-StarkNet · 不完整 production grade)或 Warp transpiler(已废弃)。Cairo 是为 STARK 优化的 Turing-complete 语言。

**Proving system**:Cairo-STARK(原生 STARK · 无需 SNARK wrap · 但 L1 verification cost 较高)。STARK 抗量子(参见 [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]])。

**Proof time**:~30-60 分钟 batch(较慢但单 proof 体积大)。

**Gas cost**:用户 ~$0.01-0.1(高于 zkSync/Polygon · 因 STARK proof 体积)。2025 stwo prover 升级目标 -50% cost。

**TVL May 2026**:~$650M(估算)。

**Mainnet maturity**:2021.11 alpha · 2023 v0.13 主网 · 2024 v0.14 引入 Volition · 2025 Stage 1 部分。

**Decentralization**:Sequencer:StarkWare 中心化 · 计划 2026-2027 decentralize 经 PoS validator set。Prover:StarkWare 主导 · 第三方 prover SDK 开放。Upgrade:Foundation 治理 + STRK token 投票。

**Ecosystem**:~120 dApp · 含 Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms。Argent / Braavos AA wallet 原生支持。机构案例:Visa Aeon · Provenance pilot。

**DA layer**:L1 blobs(默认)+ Volition 模式(用户选 on-chain 或 DAC off-chain)+ 探索 EigenDA。

### Scroll

**EVM equivalence**:Type 2(EVM-equivalent · 99% bytecode-level compatible · 几乎所有 Solidity dApp 可零修改 deploy)。

**Proving system**:Halo2 + PSE-flavor zkEVM(基于 Privacy Scaling Explorations 长期研究)。2025 升级 multi-proof aggregation(参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]])。

**Proof time**:~15-25 分钟 batch · L1 submit ~30 分钟 finality。

**Gas cost**:用户 sub-cent($0.005-0.02)。

**TVL May 2026**:~$700M。

**Mainnet maturity**:2023.10 mainnet · 2024-2025 持续 audit · 2026 Stage 1。

**Decentralization**:Sequencer:Scroll 团队中心化 · 计划 2026-2027 decentralize。Prover:开放第三方(Scroll prover network beta)。Upgrade:7-day timelock + Security Council。

**Ecosystem**:~180 dApp · Aave · Uniswap · Pendle · GMX 等主流都 deploy。Scroll Canvas 用户 onboarding 工具。

**DA layer**:默认 L1 blobs。Scroll 团队明确表态不会 validium · 保持 L1 DA 纯度(EVM-equivalent + L1 DA 是 institutional 卖点)。

### Linea (Consensys)

**EVM equivalence**:Type 2(EVM-equivalent · 与 Scroll 类似 99% compatible)。Consensys 强调 "drop-in MetaMask / Truffle / Infura 工具链兼容"。

**Proving system**:zk-SNARK custom prover(Linea VK2.0 · 基于 Vortex + Arcane)。2025 升级 vk3.0 提升 proof 速度。Recursive proof aggregation。

**Proof time**:~10-20 分钟 batch · L1 submit ~30 分钟 finality。

**Gas cost**:用户 sub-cent($0.002-0.01)。

**TVL May 2026**:~$1.2B(估算 · MetaMask 流量加持)。

**Mainnet maturity**:2023.07 mainnet · 2024 v1.5 升级 · 2026 Stage 1。

**Decentralization**:Sequencer:Consensys 中心化 · 计划 2026-2027 decentralize。Prover:Consensys 主导 · 第三方 prover SDK 开放。Upgrade:7-day timelock + Security Council。

**Ecosystem**:~200 dApp · Aave · Uniswap · LayerZero · Stargate · OKX · 与 MetaMask 深度集成是最大流量入口。

**DA layer**:默认 L1 blobs。Consensys 持续 "all on-chain" 立场 · 不提供 validium。

### Taiko

**EVM equivalence**:Type 1(完全 EVM-equivalent · bit-for-bit · 包括 EVM opcode / precompile / consensus rules)。任何 Ethereum dApp / L1 client 可直接 fork。

**Proving system**:Halo2(SGX + ZK 多 prover · 2024 引入 SP1 · Risc Zero · Aligned 三方 prover competition)。Multi-proof aggregation pioneer(参见 [[systems/multi-proof-aggregation-fault-prover]])。

**Proof time**:~20-40 分钟 batch(Type 1 因 100% EVM 精度 · prove 较慢)。

**Gas cost**:用户 ~$0.01-0.05(略高于 Scroll/Linea · 因 Type 1 prove cost)。

**TVL May 2026**:~$350M(估算)。

**Mainnet maturity**:2024.05 Alpha-6 主网 · 2024.06 Hekla testnet · 2025 mainnet stable · 2026 Stage 1 演化。

**Decentralization**:**Sequencer:Based rollup**(借用 L1 proposer 作为 sequencer · 是 ZK-EVM 中唯一完全去中心化 sequencer)。Prover:开放 permissionless prover market(任何人可提交 proof 赚 TAIKO)。Upgrade:7-day timelock。

**Ecosystem**:~80 dApp · TaikoSwap · 主要是 Ethereum-native dApp fork。Based rollup 概念是 ETH 社区学术核心 · 受 Vitalik 公开推荐。

**DA layer**:默认 L1 blobs(Based rollup 必须 L1 DA)。

### Kakarot

**EVM equivalence**:Type 4(EVM 通过 Cairo 实现 · 跑在 StarkNet 之上)。理论上 99% Solidity 兼容 · 但有 edge case 差异。

**Proving system**:借用 StarkNet 的 Cairo-STARK(Kakarot 智能合约层是 Cairo · 内部解释 EVM bytecode)。

**Proof time**:取决于 StarkNet(~30-60 分钟)。

**Gas cost**:取决于 StarkNet · 略高于 native StarkNet。

**TVL May 2026**:~$15M(early adoption)。

**Mainnet maturity**:2024-Q4 mainnet beta · 2025-2026 试运营 · 不是 production grade。

**Decentralization**:借用 StarkNet 治理 · Kakarot 团队主导智能合约升级。

**Ecosystem**:~10-20 dApp · 主要是开发者实验性 deploy。Kakarot 战略价值是 "把 EVM 带到 StarkNet" · 而非独立 L2。

**DA layer**:借用 StarkNet(L1 blobs + Volition + 探索 EigenDA)。

### Polygon Miden

**EVM equivalence**:非 EVM · Miden Assembly(MASM)· STARK 友好 ISA。EVM 通过 Miden-EVM transpiler(early)。设计哲学是 "客户端 prover · 用户在本地证明 transaction · 然后提交 proof 给 sequencer"(对照传统 sequencer-prove 模型)。

**Proving system**:Miden VM(基于 Winterfell STARK 框架)。客户端 prover-friendly(几秒-几分钟可在 laptop 上 prove · 取决于 transaction 复杂度)。

**Proof time**:用户客户端 ~1-30 秒(简单 transaction)· L1 submit batch ~10-20 分钟。

**Gas cost**:用户 sub-cent · 因 prove 在本地 · L1 只支付 verification + DA。

**TVL May 2026**:~$30M(early)。

**Mainnet maturity**:2024 testnet · 2026 mainnet beta · 不是 production grade for high-value DeFi。

**Decentralization**:Sequencer:Polygon Labs 中心化(early)。Prover:用户自 prove 是设计核心 · 天然去中心化(用户掌控自己 transaction proof)。

**Ecosystem**:~10 dApp · 主要是私密支付 / DeFi 实验(Miden 强调 client-side privacy 是 differentiator)。

**DA layer**:Miden P2P 自家 DA(experimental · 不是 L1 blobs)。计划探索 Celestia / EigenDA 作为 fallback。Polygon AggLayer 接入。

### ImmutableX (Immutable zkEVM)

**EVM equivalence**:Type 2(基于 Polygon zkEVM stack · EVM-equivalent 99%)。游戏专精 ZK-rollup。

**Proving system**:Plonky2(借用 Polygon zkEVM proving infrastructure)。

**Proof time**:~10-20 分钟(继承 Polygon zkEVM 性能)。

**Gas cost**:用户 gas-free for NFT mint / transfer(Immutable 团队补贴 · 游戏 UX 优先)· 其他 transaction sub-cent。

**TVL May 2026**:~$280M(NFT-heavy · 不完全 fungible TVL)。

**Mainnet maturity**:2024-Q1 zkEVM mainnet(此前 ImmutableX 1.0 是 StarkEx 验证池 · 非 zkEVM)。2025-2026 game ecosystem 扩张。

**Decentralization**:Sequencer:Immutable 中心化(游戏定位 · 不优先 decentralization)。Prover:借 Polygon prover network。Upgrade:Immutable Foundation + 7-day timelock。

**Ecosystem**:专注 web3 gaming —— Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay · 等 80+ 游戏。是 ZK-EVM 中游戏 vertical 最 dominant。

**DA layer**:L1 blobs 默认 · 部分 NFT metadata 走 validium(DAC 模式)降低 cost。

## Big comparison matrix table

**9 个 ZK-EVM / ZK-rollup × 9 维度对照**(2026-Q2 状态):

| Rollup | EVM Type | Proving System | Proof Time | Gas Cost | TVL May 2026 | Mainnet Maturity | Seq/Prover Decentralization | Ecosystem | DA Layer |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5(target Type 1)| Plonky2/3(STARK→SNARK) | 5-10 分钟 | sub-cent | $800M | 2023-03 · Stage 1 | Seq 中心化 · Prover 5-家 网络 · 7d timelock + SC 7/13 | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1 blobs + Validium 模式 · AggLayer unifier |
| **zkSync Era** | Type 4(zkSolc) | Boojum(STARK+FRI) | 10-15 分钟 | sub-cent($0.001-0.005)· AA native | $2.0B | 2023-03 · Stage 1 | Seq 中心化 · Prover Matter Labs+1-2 · 21d timelock + SC 9/15 | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1 blobs · Validium ("zkPorter") 延迟 · hyperchains 可选 EigenDA/Celestia |
| **StarkNet** | Type 4(Cairo native · Solidity via Kakarot) | Cairo-STARK(原生 · 抗量子) | 30-60 分钟 | $0.01-0.1 | $650M | 2021-11 alpha · 2023 v0.13 · Stage 1 部分 | Seq 中心化 · Prover SDK 开放 · Foundation+STRK 治理 | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1 blobs + Volition 模式 + 探索 EigenDA |
| **Scroll** | Type 2(99% bytecode-equivalent) | Halo2 + PSE-zkEVM · multi-proof agg | 15-25 分钟 | sub-cent($0.005-0.02) | $700M | 2023-10 · Stage 1 | Seq 中心化 · Prover 第三方 beta · 7d timelock + SC | ~180 dApp · Aave/Uni/Pendle/GMX · Scroll Canvas | L1 blobs only(明确不 validium) |
| **Linea (Consensys)** | Type 2 | zk-SNARK custom(VK2.0/3.0 · Vortex+Arcane) | 10-20 分钟 | sub-cent($0.002-0.01) | $1.2B | 2023-07 · Stage 1 | Seq 中心化 · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask 集成 · Aave/Uni/OKX | L1 blobs only(all on-chain 立场) |
| **Taiko** | Type 1(bit-for-bit EVM) | Halo2(SGX+ZK)· SP1/Risc Zero/Aligned 三方 | 20-40 分钟 | $0.01-0.05 | $350M | 2024-05 mainnet · Stage 1 演化 | **Based rollup · Seq 借 L1 proposer · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik 推荐 based rollup | L1 blobs(based rollup 必须 L1 DA) |
| **Kakarot** | Type 4(EVM on Cairo on StarkNet) | 借 StarkNet Cairo-STARK | ~30-60 分钟(借 StarkNet) | 略高于 StarkNet | $15M | 2024 Q4 beta · 不 production-grade | 借 StarkNet · Kakarot 团队主导 | ~10-20 dApp · 实验性 deploy | 借 StarkNet(L1 blobs + Volition + EigenDA 探索) |
| **Polygon Miden** | 非 EVM(MASM · EVM transpiler early) | Miden VM(Winterfell STARK)· **客户端 prover** | 用户本地 1-30s · L1 batch 10-20 分钟 | sub-cent(prove 在本地) | $30M | 2024 testnet · 2026 mainnet beta | Seq 中心化 · **Prover 用户自 prove(天然去中心化)** | ~10 dApp · 私密支付/DeFi 实验 | Miden P2P 自家 DA · 探索 Celestia/EigenDA · AggLayer 接入 |
| **ImmutableX zkEVM** | Type 2(基于 Polygon zkEVM stack) | Plonky2(借 Polygon) | 10-20 分钟 | NFT gas-free 补贴 · 其他 sub-cent | $280M(NFT-heavy) | 2024 Q1 zkEVM mainnet · 此前 StarkEx | Seq 中心化(游戏定位)· Prover 借 Polygon · 7d timelock | **专注 gaming** · 80+ 游戏:Illuvium/Gods Unchained/Guild | L1 blobs + 部分 NFT metadata validium |

**矩阵读法**:
- **EVM equivalence vs proving cost tradeoff**:Type 1(Taiko)最贵但完美兼容 · Type 4(zkSync · StarkNet · Kakarot)最便宜但需要 dev tooling 适配
- **DA layer 选择反映 institutional vs DeFi 立场**:Scroll/Linea/Taiko 死守 L1 blobs(institutional grade)· Polygon/StarkNet/Miden 提供 validium/Volition(DeFi UX 优先)· Immutable hybrid(NFT 走 validium 降本)
- **Decentralization 真状态**:**所有 ZK-EVM 的 sequencer 都中心化**(2026-Q2)· 唯一例外是 Taiko based rollup。Prover decentralization 进展 Polygon(5 家网络)> Scroll/StarkNet(SDK 开放)> 其他(团队主导)
- **TVL 与 ecosystem traction 不完全相关**:zkSync $2.0B 高 TVL 但 Type 4 限制开发者迁移成本;Linea $1.2B 借 MetaMask 流量优势;Scroll/Polygon Type 2 + 中等 TVL 是 "balanced choice"

## Boundary cases / future trajectory

**EVM equivalence ladder 演化方向**:Polygon zkEVM 公开 roadmap 2027 达到 Type 1。Taiko 已经是 Type 1 · 是其他 ZK-EVM 的 reference benchmark。zkSync Era 和 StarkNet 维持 Type 4 哲学(优化 prove cost · 接受 dev tooling 成本)。Linea 和 Scroll 在 Type 2 稳定 · 不计划升级 Type 1(认为最后 1% 兼容性投入产出比低)。

**Proving system 收敛 vs 多样化**:
- **收敛趋势**:大部分 ZK-EVM 都最终 SNARK wrap(因为 L1 verification cost · groth16 / plonky 等)· 即使内部 STARK(zkSync Boojum · Polygon Plonky2)。
- **多样化趋势**:StarkNet / Miden 坚持原生 STARK · 因为抗量子 + 客户端友好(参见 [[systems/post-quantum-blockchain-day1-integration]])。SP1 / Risc Zero / Aligned 等 prover 通用化(任何 rollup 可选用)是 modular proving 新趋势。
- Multi-proof aggregation(参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]])让一个 rollup 同时跑多个独立 prover · 出错可 fallback —— Taiko 是先行者。

**Sequencer decentralization 时间表**:Polygon zkEVM · zkSync Era · Scroll · Linea 都公开 2026-2027 引入 shared sequencer(Espresso / Astria / Radius)。Taiko based rollup 已经天然解决。Vitalik 在 2024 公开建议 ZK-EVM 优先解决 sequencer decentralization 而非 prover · 因为 sequencer 集中 = liveness 风险更大。

**AggLayer / ZK Stack / Superchain 派系战**:
- Polygon AggLayer 联合 Polygon zkEVM + zkSync(部分)+ Astar + 其他 · 共享 settlement layer + cross-chain LP
- zkSync ZK Stack 是 Matter Labs 主导的 hyperchain 框架 · 已 deploy GRVT · Treasure · Cronos zkEVM
- Optimism Superchain(不在本矩阵 · 是 OP-rollup)对应物
- 长期所有 rollup 之间都需要某种 unifier · 但 AggLayer / ZK Stack / Superchain 各搞各的 · 用户实际跨 stack 仍需通用桥(参见 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]])

**DA 层与 EigenLayer 关联**:EigenDA(参见 [[systems/eigenlayer-overview|EigenLayer overview]])为多个 ZK Stack hyperchain · StarkNet Volition · Miden / Kakarot 等提供 alt-DA。但 ZK-EVM 是否应该用 alt-DA(放弃 L1 安全)仍有争议 —— Scroll / Linea / Taiko 派坚持 L1 DA · Polygon / StarkNet / Miden 派提供选择。institutional 客户(SWIFT / DTCC · 参见 [[systems/chainlink-ccip-institutional-messaging]])明确要求 L1 DA。

**Pectra EIP-7691 影响**(参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]]):blob target 3→6 + max 6→9 让 ZK-EVM 提交 cost 进一步 -50% · 所有用 L1 blobs 的 rollup 直接受益。2026-Q4 Fusaka PeerDAS 进一步 10× 容量。

**Formal verification 进展**:ZK-EVM 是 formal spec implementation co-design(参见 [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]])的天然舞台 —— Solidity / EVM spec + ZK circuit spec 双 spec 一致性是核心安全点。Linea 与 Consensys Diligence 团队公开 formal verification 进展。Scroll 与 PSE 长期 academic 合作。zkSync Boojum prover 由 Galois 独立审计。

**机构 vs DeFi 选型**:
- Institutional(tokenized fund · DvP · 监管合规):Linea(MetaMask Institutional 集成 · Consensys 背书)· Scroll(EVM-equivalent + L1 DA 纯度)· Polygon zkEVM(Franklin Templeton pilot 先例)
- DeFi-native(高 TPS · 长尾 dApp):zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific:ImmutableX
- Privacy-first:Polygon Miden(客户端 prover + privacy 设计)
- Ethereum-aligned(maximum decentralization · Vitalik 推荐):Taiko based rollup

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]]
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
