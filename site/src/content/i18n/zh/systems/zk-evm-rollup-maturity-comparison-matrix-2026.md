---
source: systems/zk-evm-rollup-maturity-comparison-matrix-2026
source_hash: bd84eba271c0acf7
lang: zh
status: machine
fidelity: ok
title: "ZK-EVM Rollup 成熟度对照矩阵 2026 · 9 个 rollup 的 proving system / TVL / DA / decentralization"
translated_at: 2026-06-15T04:09:41.159Z
---

# ZK-EVM Rollup 成熟度对照矩阵 2026 · 9 个 rollup 的 proving system / TVL / DA / decentralization

## TL;DR

- 针对 9 个 active ZK-EVM / ZK-rollup，按 2026-Q2 中的 **EVM equivalence · proving system · proof time · gas cost · TVL · mainnet maturity · decentralization · ecosystem · DA layer** 的 9 个维度进行对照
- **EVM equivalence ladder**（Vitalik Type 1-4）：Linea/Scroll → Type 2（EVM-equivalent · 99%）· Polygon zkEVM → Type 2.5 → 正向 Type 1 演进中 · zkSync Era → Type 4（EVM-compatible · 不同 bytecode）· StarkNet → Type 4（Cairo native · Solidity 经由 Kakarot）· Taiko → Type 1（完全 EVM-equivalent · base-rollup 模型）· Miden → 非 EVM（私有执行 + Solidity bridge）
- **Proving system 5 大主流**：Plonky2（Polygon · STARK→SNARK 递归）· Boojum（zkSync · STARK + FRI）· Cairo-STARK（StarkNet）· Halo2 / Recursive Halo2（Scroll · Taiko · PSE 派）· EVM Prover（Linea · zk-SNARK with vk2.0）
- **TVL 2026-Q2 估计**：zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M（early）
- **DA layer 选择**：大部分仍然使用 L1 blobs（EIP-4844 · 参见 [[systems/pectra-eip-7691-blob-l2-impact]]）· 少数选择 alt-DA：Polygon zkEVM 提供 validium 模式 · StarkNet Volition · Miden 自家 P2P · Kakarot 探索 Celestia · Linea/Scroll/Taiko 默认 L1
- 路由：与 [[systems/INDEX|systems index]] · [[systems/cross-chain-five-pole-comparison-matrix]] 对照（rollup 间 messaging 选型）

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 之下。请将其与 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] 对照阅读以了解驱动 rollup gas cost 的 L1 blob 容量背景，并与 [[systems/pectra-upgrade-overview|Pectra upgrade overview]] 对照以了解更广泛的 Ethereum 升级格局。与 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] 配对以了解界定「L2 承载 99% 用户」的元战略。关于 proving system 深度，参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] 与 [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]。关于长期密码学风险，参见 [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]。关于由 restaking 支撑的 DA（EigenDA 为本矩阵中数个 rollup 提供服务），参见 [[systems/eigenlayer-overview|EigenLayer overview]]。在推理 L2-到-L2 messaging 时交叉链接至 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]。

## 本矩阵为何重要

ZK-EVM rollup 在 2023-2025 年集中性地主网上线后 · 从「技术路线之争」演进为「EVM equivalence vs proving cost vs decentralization vs ecosystem traction」的多目标最优化空间。开发者在选定向哪个 ZK rollup 部署时 · 面对 6-8 个候选（各自宣称「最 EVM-equivalent · 最快 · 最便宜」）· 若无统一对照表则会被市场宣传误导。

机构客户（参见 [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] 的 J.P. Morgan Kinexys / DTCC / SWIFT pilot）同样需要决定「tokenized 资产在哪个 L2 上 settle」。机构关心的不是 TPS 而是 · **prover/sequencer 的 decentralization**（目前所有 ZK-EVM 的 sequencer 都是中心化 · prover 大部分是中心化）· **upgrade governance**（能在 challenge window 内升级智能合约 = 实际控制资金）· **DA layer 风险**（使用 validium 时 · 数据可用性依赖外部委员会）。

本矩阵对照公开运行中的 9 个 ZK-EVM / ZK-rollup · 横向展开 9 个维度 · 2026-Q2 数据快照。Optimistic rollup（Arbitrum / Optimism / Base / Blast）不包含在本矩阵中 · 请参见另行的 optimistic 矩阵（公开时间在所引公开资料上未予明确）。

## Per-rollup sections

### Polygon zkEVM / AggLayer

**EVM equivalence**：2023 年发布时为 Type 3（EVM-compatible · 部分 opcode 差异）· 2024-2025 年逐步演进为 Type 2.5 。Polygon 团队的 roadmap 是 Type 1 完全 equivalence。

**Proving system**：Plonky2（STARK 递归 → SNARK final · GPU 友好）。2024 年升级到 Plonky3 后 ~30% 速度提升。

**Proof time**：单 batch ~5-10 分钟（2026-Q2）。L1 submit 平均 ~30 分钟 finality。

**Gas cost**：用户 sub-cent（$0.001-0.01 simple transfer）。

**TVL May 2026**：~$800M（估计 · 含 AggLayer 联邦）。

**Mainnet maturity**：2023.03 主网 beta · 2024 Stage 1 decentralization · 2026 亦为 Stage 1（Sequencer 中心化 · Prover 部分开放）。

**Decentralization**：Sequencer：Polygon Labs 中心化运营 · 2026-2027 计划引入 Espresso shared sequencer。Prover：5 社的 prover 网络（Polygon Labs + 4 第三方）。Upgrade：7-day timelock + Security Council 7-of-13。

**Ecosystem**：~150 dApp · 含 QuickSwap · Polygon ID · Astar zkEVM · 多个 enterprise 案例（Franklin Templeton tokenized fund pilot）。

**DA layer**：默认 L1 blobs（EIP-4844）。提供 validium 模式（DAC 7-of-9 多签 · 用于 enterprise 私有链）。AggLayer 是 Polygon 的 cross-chain unifier · 多个 zkEVM 可共享 settlement。

### zkSync Era (Matter Labs)

**EVM equivalence**：Type 4（EVM-compatible · 不同 bytecode · Solidity 经由自家 zkSolc 编译器）。需要专门的 dev tooling。

**Proving system**：Boojum（STARK + FRI · GPU 友好）。2024 年升级到 Boojum v1.5 后 ~40% 效率提升。Final SNARK wrap on Ethereum。

**Proof time**：~10-15 分钟 batch · L1 submit ~30-45 分钟 finality。

**Gas cost**：用户 sub-cent（$0.001-0.005）。Account Abstraction native（不需 ERC-4337 ）。

**TVL May 2026**：~$2.0B（估计 · 含 ZK Stack hyperchains）。

**Mainnet maturity**：2023.03 主网 · 2024 发布 ZK Stack 框架 · 2026 Stage 1 decentralization。

**Decentralization**：Sequencer：Matter Labs 中心化 · 2026 Q3-Q4 计划引入 decentralized sequencer（Espresso 合作）。Prover：Matter Labs + 1-2 第三方。Upgrade：21-day timelock（2024 后从 1-day 延长）+ Security Council 9-of-15。

**Ecosystem**：~250 dApp · SyncSwap · Maverick · Aave v3 · Argent native AA · ZK Stack hyperchains（GRVT · Treasure · Cronos zkEVM）。

**DA layer**：默认 L1 blobs。Validium 模式（「zkPorter」）已规划但 deploy 延期。ZK Stack hyperchains 可选 EigenDA / Celestia。

### StarkNet

**EVM equivalence**：Type 4（Cairo native · 不是 Solidity）。Solidity 兼容经由 Kakarot 子项目（EVM-on-StarkNet · 并非完全 production grade）或 Warp transpiler（已废弃）。Cairo 是为 STARK 最优化的 Turing-complete 语言。

**Proving system**：Cairo-STARK（原生 STARK · 不需 SNARK wrap · 但 L1 verification cost 偏高）。STARK 抗量子（参见 [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]]）。

**Proof time**：~30-60 分钟 batch（STARK proof 体积较大较慢）。

**Gas cost**：用户 ~$0.01-0.1（比 zkSync/Polygon 高 · 因 STARK proof 体积）。2025 stwo prover 升级以 -50% 成本为目标。

**TVL May 2026**：~$650M（估计）。

**Mainnet maturity**：2021.11 alpha · 2023 v0.13 主网 · 2024 v0.14 引入 Volition · 2025 Stage 1 部分。

**Decentralization**：Sequencer：StarkWare 中心化 · 2026-2027 计划经由 PoS validator 集合 decentralize。Prover：StarkWare 主导 · 开放第三方 prover SDK。Upgrade：Foundation 治理 + STRK token 投票。

**Ecosystem**：~120 dApp · 含 Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms。Argent / Braavos AA wallet 原生支持。机构案例：Visa Aeon · Provenance pilot。

**DA layer**：L1 blobs（默认）+ Volition 模式（用户选择 on-chain or DAC off-chain）+ 探索 EigenDA 中。

### Scroll

**EVM equivalence**：Type 2（EVM-equivalent · 99% bytecode-level 兼容 · 几乎所有 Solidity dApp 可零修改 deploy）。

**Proving system**：Halo2 + PSE-flavor zkEVM（以 Privacy Scaling Explorations 的长期研究为基础）。2025 年升级到 multi-proof aggregation（参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]]）。

**Proof time**：~15-25 分钟 batch · L1 submit ~30 分钟 finality。

**Gas cost**：用户 sub-cent（$0.005-0.02）。

**TVL May 2026**：~$700M。

**Mainnet maturity**：2023.10 主网 · 2024-2025 持续 audit · 2026 Stage 1。

**Decentralization**：Sequencer：Scroll 团队中心化 · 2026-2027 计划 decentralize。Prover：开放第三方（Scroll prover network beta）。Upgrade：7-day timelock + Security Council。

**Ecosystem**：~180 dApp · Aave · Uniswap · Pendle · GMX 等主流全部 deploy。Scroll Canvas 是用户 onboarding 工具。

**DA layer**：默认 L1 blobs。Scroll 团队明确表态不做 validium · 保持 L1 DA 纯度（EVM-equivalent + L1 DA 是 institutional 卖点）。

### Linea (Consensys)

**EVM equivalence**：Type 2（EVM-equivalent · 与 Scroll 类似为 99% 兼容）。Consensys 强调「drop-in MetaMask / Truffle / Infura 工具链兼容」。

**Proving system**：zk-SNARK custom prover（Linea VK2.0 · 基于 Vortex + Arcane）。2025 年通过 vk3.0 升级提升 proof 速度。Recursive proof aggregation。

**Proof time**：~10-20 分钟 batch · L1 submit ~30 分钟 finality。

**Gas cost**：用户 sub-cent（$0.002-0.01）。

**TVL May 2026**：~$1.2B（估计 · MetaMask 流量加持）。

**Mainnet maturity**：2023.07 主网 · 2024 v1.5 升级 · 2026 Stage 1。

**Decentralization**：Sequencer：Consensys 中心化 · 2026-2027 计划 decentralize。Prover：Consensys 主导 · 开放第三方 prover SDK。Upgrade：7-day timelock + Security Council。

**Ecosystem**：~200 dApp · Aave · Uniswap · LayerZero · Stargate · OKX · 与 MetaMask 的深度集成是最大的流量入口。

**DA layer**：默认 L1 blobs。Consensys 持续「all on-chain」立场 · 不提供 validium。

### Taiko

**EVM equivalence**：Type 1（完全 EVM-equivalent · bit-for-bit · 含 EVM opcode / precompile / consensus rules）。任意 Ethereum dApp / L1 client 可直接 fork。

**Proving system**：Halo2（SGX + ZK 多 prover · 2024 年引入 SP1 · Risc Zero · Aligned 的 3 方 prover competition）。Multi-proof aggregation 的先驱（参见 [[systems/multi-proof-aggregation-fault-prover]]）。

**Proof time**：~20-40 分钟 batch（因 Type 1 以 100% EVM 精度 prove 较慢）。

**Gas cost**：用户 ~$0.01-0.05（比 Scroll/Linea 略高 · 因 Type 1 的 prove cost）。

**TVL May 2026**：~$350M（估计）。

**Mainnet maturity**：2024.05 Alpha-6 主网 · 2024.06 Hekla testnet · 2025 主网稳定 · 2026 Stage 1 演进中。

**Decentralization**：**Sequencer：Based rollup**（借用 L1 proposer 作为 sequencer · ZK-EVM 中唯一完全去中心化的 sequencer）。Prover：开放 permissionless prover market（任何人提交 proof 即可赚取 TAIKO）。Upgrade：7-day timelock。

**Ecosystem**：~80 dApp · TaikoSwap · 主要为 Ethereum-native dApp fork。Based rollup 概念是 ETH 社区学术核心 · Vitalik 公开推荐。

**DA layer**：默认 L1 blobs（Based rollup 必须 L1 DA）。

### Kakarot

**EVM equivalence**：Type 4（用 Cairo 实现 EVM · 运行在 StarkNet 之上）。理论上 99% Solidity 兼容 · 但存在 edge case 差异。

**Proving system**：借用 StarkNet 的 Cairo-STARK（Kakarot 智能合约层为 Cairo · 内部解释 EVM bytecode）。

**Proof time**：依赖 StarkNet（~30-60 分钟）。

**Gas cost**：依赖 StarkNet · 比 native StarkNet 略高。

**TVL May 2026**：~$15M（early adoption）。

**Mainnet maturity**：2024-Q4 主网 beta · 2025-2026 试运行 · 并非 production grade。

**Decentralization**：借用 StarkNet 治理 · Kakarot 团队主导智能合约升级。

**Ecosystem**：~10-20 dApp · 主要为开发者实验性 deploy。Kakarot 的战略价值是「将 EVM 带入 StarkNet」· 并非独立 L2 。

**DA layer**：借用 StarkNet（L1 blobs + Volition + 探索 EigenDA 中）。

### Polygon Miden

**EVM equivalence**：非 EVM · Miden Assembly（MASM）· STARK 友好 ISA。EVM 经由 Miden-EVM transpiler（early）。设计哲学是「客户端 prover · 用户在本地证明 transaction · 之后将 proof 提交给 sequencer」（与传统的 sequencer-prove 模型对照）。

**Proving system**：Miden VM（基于 Winterfell STARK 框架）。客户端 prover 友好（视 transaction 复杂度 · 数秒〜数分钟即可在笔记本上 prove）。

**Proof time**：用户客户端 ~1-30 秒（简单 transaction）· L1 submit batch ~10-20 分钟。

**Gas cost**：用户 sub-cent · 因 prove 在本地 · L1 只支付 verification + DA。

**TVL May 2026**：~$30M（early）。

**Mainnet maturity**：2024 testnet · 2026 主网 beta · 并非高价值 DeFi 用 production grade。

**Decentralization**：Sequencer：Polygon Labs 中心化（early）。Prover：用户自 prove 是设计核心 · 自然去中心化（用户控制自己的 transaction proof）。

**Ecosystem**：~10 dApp · 主要为私有支付 / DeFi 实验（Miden 强调 client-side privacy 为 differentiator）。

**DA layer**：Miden P2P 自家 DA（experimental · 不是 L1 blobs）。计划探索 Celestia / EigenDA 作为 fallback。Polygon AggLayer 连接。

### ImmutableX (Immutable zkEVM)

**EVM equivalence**：Type 2（基于 Polygon zkEVM stack · EVM-equivalent 99%）。游戏专门 ZK-rollup。

**Proving system**：Plonky2（借用 Polygon zkEVM proving infrastructure）。

**Proof time**：~10-20 分钟（继承 Polygon zkEVM 性能）。

**Gas cost**：用户 NFT mint / transfer gas-free（Immutable 团队补贴 · 游戏 UX 优先）· 其余 transaction sub-cent。

**TVL May 2026**：~$280M（NFT-heavy · 并非完全 fungible TVL）。

**Mainnet maturity**：2024-Q1 zkEVM 主网（此前 ImmutableX 1.0 为 StarkEx 验证池 · 并非 zkEVM）。2025-2026 游戏生态扩张。

**Decentralization**：Sequencer：Immutable 中心化（游戏定位 · 不优先 decentralization）。Prover：借用 Polygon prover network。Upgrade：Immutable Foundation + 7-day timelock。

**Ecosystem**：专注于 web3 gaming —— Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay 等 80+ 游戏。在 ZK-EVM 中于游戏 vertical 最为 dominant。

**DA layer**：默认 L1 blobs · 部分 NFT 元数据经由 validium（DAC 模式）以削减成本。

## Big comparison matrix table

**9 个 ZK-EVM / ZK-rollup × 9 维度对照**（2026-Q2 状态）：

| Rollup | EVM Type | Proving System | Proof Time | Gas Cost | TVL May 2026 | Mainnet Maturity | Seq/Prover Decentralization | Ecosystem | DA Layer |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5（target Type 1）| Plonky2/3（STARK→SNARK） | 5-10 分钟 | sub-cent | $800M | 2023-03 · Stage 1 | Seq 中心化 · Prover 5 社网络 · 7d timelock + SC 7/13 | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1 blobs + Validium 模式 · AggLayer unifier |
| **zkSync Era** | Type 4（zkSolc） | Boojum（STARK+FRI） | 10-15 分钟 | sub-cent（$0.001-0.005）· AA native | $2.0B | 2023-03 · Stage 1 | Seq 中心化 · Prover Matter Labs+1-2 · 21d timelock + SC 9/15 | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1 blobs · Validium ("zkPorter") 延期 · hyperchains 可选 EigenDA/Celestia |
| **StarkNet** | Type 4（Cairo native · Solidity via Kakarot） | Cairo-STARK（原生 · 抗量子） | 30-60 分钟 | $0.01-0.1 | $650M | 2021-11 alpha · 2023 v0.13 · Stage 1 部分 | Seq 中心化 · Prover SDK 开放 · Foundation+STRK 治理 | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1 blobs + Volition 模式 + 探索 EigenDA 中 |
| **Scroll** | Type 2（99% bytecode-equivalent） | Halo2 + PSE-zkEVM · multi-proof agg | 15-25 分钟 | sub-cent（$0.005-0.02） | $700M | 2023-10 · Stage 1 | Seq 中心化 · Prover 第三方 beta · 7d timelock + SC | ~180 dApp · Aave/Uni/Pendle/GMX · Scroll Canvas | L1 blobs only（明示不做 validium） |
| **Linea (Consensys)** | Type 2 | zk-SNARK custom（VK2.0/3.0 · Vortex+Arcane） | 10-20 分钟 | sub-cent（$0.002-0.01） | $1.2B | 2023-07 · Stage 1 | Seq 中心化 · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask 集成 · Aave/Uni/OKX | L1 blobs only（all on-chain 立场） |
| **Taiko** | Type 1（bit-for-bit EVM） | Halo2（SGX+ZK）· SP1/Risc Zero/Aligned 3 方 | 20-40 分钟 | $0.01-0.05 | $350M | 2024-05 主网 · Stage 1 演进中 | **Based rollup · Seq 借用 L1 proposer · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik 推荐 based rollup | L1 blobs（based rollup 必须 L1 DA） |
| **Kakarot** | Type 4（EVM on Cairo on StarkNet） | 借用 StarkNet Cairo-STARK | ~30-60 分钟（借用 StarkNet） | 比 StarkNet 略高 | $15M | 2024 Q4 beta · 并非 production-grade | 借用 StarkNet · Kakarot 团队主导 | ~10-20 dApp · 实验性 deploy | 借用 StarkNet（L1 blobs + Volition + 探索 EigenDA） |
| **Polygon Miden** | 非 EVM（MASM · EVM transpiler early） | Miden VM（Winterfell STARK）· **客户端 prover** | 用户本地 1-30s · L1 batch 10-20 分钟 | sub-cent（prove 本地） | $30M | 2024 testnet · 2026 主网 beta | Seq 中心化 · **Prover 用户自 prove（自然去中心化）** | ~10 dApp · 私有支付/DeFi 实验 | Miden P2P 自家 DA · 探索 Celestia/EigenDA · AggLayer 连接 |
| **ImmutableX zkEVM** | Type 2（基于 Polygon zkEVM stack） | Plonky2（借用 Polygon） | 10-20 分钟 | NFT gas-free 补贴 · 其余 sub-cent | $280M（NFT-heavy） | 2024 Q1 zkEVM 主网 · 此前 StarkEx | Seq 中心化（游戏定位）· Prover 借用 Polygon · 7d timelock | **专注于 gaming** · 80+ 游戏：Illuvium/Gods Unchained/Guild | L1 blobs + 部分 NFT metadata validium |

**矩阵的读法**：
- **EVM equivalence vs proving cost tradeoff**：Type 1（Taiko）最昂贵但兼容性完美 · Type 4（zkSync · StarkNet · Kakarot）最便宜但需要 dev tooling 适配
- **DA layer 选择反映 institutional vs DeFi 立场**：Scroll/Linea/Taiko 死守 L1 blobs（institutional grade）· Polygon/StarkNet/Miden 提供 validium/Volition（DeFi UX 优先）· Immutable hybrid（NFT 用 validium 削减成本）
- **Decentralization 真实状态**：**所有 ZK-EVM 的 sequencer 都是中心化**（2026-Q2）· 唯一例外是 Taiko based rollup。Prover decentralization 进展 Polygon（5 社网络）> Scroll/StarkNet（SDK 开放）> 其余（团队主导）
- **TVL 与 ecosystem traction 并不完全相关**：zkSync $2.0B 高 TVL 但 Type 4 限制了开发者迁移成本；Linea $1.2B 借用 MetaMask 流量优势；Scroll/Polygon Type 2 + 中等 TVL 是「balanced choice」

## Boundary cases / future trajectory

**EVM equivalence ladder 的演进方向**：Polygon zkEVM 公开路线图为 2027 年达成 Type 1 。Taiko 已经是 Type 1 · 是其他 ZK-EVM 的 reference benchmark。zkSync Era 与 StarkNet 维持 Type 4 哲学（最优化 prove cost · 接受 dev tooling 成本）。Linea 与 Scroll 稳定在 Type 2 · 升级到 Type 1 无计划（判断为最后的 1% 兼容性投入产出比偏低）。

**Proving system 收敛 vs 多元化**：
- **收敛趋势**：大部分 ZK-EVM 最终 SNARK wrap（因 L1 verification cost · groth16 / plonky 等）· 内部 STARK（zkSync Boojum · Polygon Plonky2）亦然。
- **多元化趋势**：StarkNet / Miden 坚守原生 STARK · 因抗量子 + 客户端友好（参见 [[systems/post-quantum-blockchain-day1-integration]]）。SP1 / Risc Zero / Aligned 等 prover 通用化（任意 rollup 可选）是 modular proving 的新趋势。
- 通过 Multi-proof aggregation（参见 [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]）· 1 个 rollup 可同时运行多个独立 prover · 出错时 fallback —— Taiko 是先驱。

**Sequencer decentralization 时间表**：Polygon zkEVM · zkSync Era · Scroll · Linea 均公开将在 2026-2027 引入 shared sequencer（Espresso / Astria / Radius）。Taiko based rollup 已自然解决。Vitalik 在 2024 年公开提议 ZK-EVM 应优先解决 sequencer decentralization 而非 prover · 因 sequencer 集中 = liveness 风险更大。

**AggLayer / ZK Stack / Superchain 派系之争**：
- Polygon AggLayer 将 Polygon zkEVM + zkSync（部分）+ Astar + 其余 联合 · 共享 settlement layer + cross-chain LP
- zkSync ZK Stack 是 Matter Labs 主导的 hyperchain 框架 · 已 deploy GRVT · Treasure · Cronos zkEVM
- Optimism Superchain（不包含在本矩阵中 · OP-rollup）为对应物
- 长期而言所有 rollup 之间需要某种 unifier · 但 AggLayer / ZK Stack / Superchain 各自分别推进 · 用户要跨 stack 使用仍需通用桥（参见 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]]）

**DA 层与 EigenLayer 的关联**：EigenDA（参见 [[systems/eigenlayer-overview|EigenLayer overview]]）为多个 ZK Stack hyperchain · StarkNet Volition · Miden / Kakarot 等提供 alt-DA。但 ZK-EVM 是否应使用 alt-DA（放弃 L1 安全性）仍有争议 —— Scroll / Linea / Taiko 派坚守 L1 DA · Polygon / StarkNet / Miden 派提供选项。institutional 客户（SWIFT / DTCC · 参见 [[systems/chainlink-ccip-institutional-messaging]]）明确要求 L1 DA。

**Pectra EIP-7691 影响**（参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]）：blob target 3→6 + max 6→9 使 ZK-EVM submit cost 进一步 -50% · 使用 L1 blobs 的所有 rollup 直接受益。2026-Q4 Fusaka PeerDAS 进一步 10× 容量。

**Formal verification 进展**：ZK-EVM 是 formal spec implementation co-design（参见 [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]）的天然舞台 —— Solidity / EVM spec + ZK circuit spec 的双 spec 一致性是核心安全要点。Linea 与 Consensys Diligence 团队公开 formal verification 进展。Scroll 与 PSE 长期学术协作。zkSync Boojum prover 由 Galois 独立审计。

**机构 vs DeFi 选型**：
- Institutional（tokenized fund · DvP · 监管合规）：Linea（MetaMask Institutional 集成 · Consensys 背书）· Scroll（EVM-equivalent + L1 DA 纯度）· Polygon zkEVM（Franklin Templeton pilot 先例）
- DeFi-native（高 TPS · 长尾 dApp）：zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific：ImmutableX
- Privacy-first：Polygon Miden（客户端 prover + privacy 设计）
- Ethereum-aligned（maximum decentralization · Vitalik 推荐）：Taiko based rollup

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
- Vitalik "Different types of ZK-EVM" classification（public blog）
