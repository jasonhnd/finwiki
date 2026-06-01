---
source: systems/eip-4844-blob-economics-impact-2026
source_hash: f4f632fe4ae1969d
lang: zh
status: machine
fidelity: ok
title: "EIP-4844 blob 经济与 2026 市场影响 · 从 Dencun 到 Pectra · Fusaka 的全景"
translated_at: 2026-06-01T04:15:40.119Z
---
# EIP-4844 blob 经济与 2026 市场影响 · 从 Dencun 到 Pectra · Fusaka 的全景

## TL;DR

- EIP-4844（**proto-danksharding** · 2024-03  Dencun 上线）引入 **blob** —— rollup 专用临时存储 · 价格独立于 calldata · 18 天后链上仅保留 commitment
- **Blob mechanic**：每个 block target=3 / max=6 blob（Dencun 原始设定）· 每个 blob 128 KiB（131072 bytes）· 合计 max 约 768 KiB/block（Dencun）
- **Pectra EIP-7691**（2025-Q2）将 target → 6 / max → 9 · L2 calldata 成本 -50%（参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]）
- **Fusaka PeerDAS**（EIP-7594 · 2026-Q4 计划）进一步带来 10x 容量 → 理论约 60 GB/day blob throughput
- **Blob fee market**：EIP-1559  风格 · 独立 base fee · 超过 target 时 fee 指数增加 · 低于 target 时 fee 衰减 · 与 gas fee market 不耦合
- **Dencun 后的 L2 成本削减**：Arbitrum / Optimism / Base 等 rollup 用户 gas 约下降 100x · sequencer revenue 因 volume 上升而 net 正向
- **Blob 市场参与者**：rollup sequencer（blob 提交者）· Ethereum builder / proposer（blob 打包者）· DA 用户（数据消费者）
- **与 alt-DA 的竞争**（参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]）：blob 将 alt-DA 价格优势从 50x 缩小至 3-5x · Pectra 后为 1.5-2x · Fusaka 后可能消失
- 路线：[[systems/INDEX|systems index]] · [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]] / [[systems/data-availability-celestia-eigenda-blob-comparison|DA 対照]] 配套阅读

## Wiki 路线

本条目位于 [[systems/INDEX|systems index]] 下。请对照 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] 阅读 2025-Q2  的 blob target 翻倍，该升级直接扩展 EIP-4844, ；并对照 [[systems/pectra-upgrade-overview|Pectra upgrade overview]] 阅读更广泛的 Ethereum upgrade 背景。关于使 blob economics 具有结构性重要性的 L1/L2  战略框架，请参见 [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]。关于 blob market 重塑的数据可用性层竞争，请参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]。关于消费 blob 的 rollup 生态系统，请参见 [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]] 和 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]。关于支撑 blob processing 背后 validator economy 的机构 staking 通道，请参见 [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]] 和 [[systems/bft-validator-economy-overview|BFT validator 経済学概観]]。关于由 restaking 保护的替代 DA，请参见 [[systems/eigenlayer-overview|EigenLayer overview]] 和 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]。

### Blob 数据结构

**核心定义**（EIP-4844 spec）：
- 1 blob = 4096 个 field element × 32 bytes = 131072 bytes = 128 KiB
- 每笔 transaction 可携带 0 个或多个 blob（实际限制是每个 block 的总 blob 数）
- Blob 在 EVM 内不可访问 · 只能通过 commitment（KZG point evaluation precompile · 由 EIP-4844  引入）证明数据存在性
- Blob 数据在约 18 天（4096 epoch · target_blobs_per_block × MIN_BLOB_GASPRICE_UPDATE_FRACTION）后从 P2P 网络 prune · 只有 KZG commitment 永久留在链上

**blob commitment**：
- KZG commitment scheme（基于 trusted setup · Ethereum 使用 Powers of Tau ceremony 2023 ）
- 每个 blob 有 1 个 48-byte commitment · 添加 versioned hash（SHA256(commitment) · 32 bytes）上链
- Rollup contract 可通过 KZG point evaluation precompile 证明“blob 在 z 点的值为 y”（用于 ZK rollup state transition 证明）

### Blob fee market（EIP-1559  风格 · 独立）

**核心机制**（EIP-4844 spec）：
- 每个 block 有 `excess_blob_gas` 状态变量 · 累计“超过 target 的 blob gas”
- `blob_base_fee = MIN_BLOB_GASPRICE * exp(excess_blob_gas / BLOB_GASPRICE_UPDATE_FRACTION)`
- target_blobs_per_block = 3（Dencun）/ 6（Pectra）/ 6（Fusaka 初期 · 可后续调整）
- max_blobs_per_block = 6（Dencun）/ 9（Pectra）/ 18+ 计划（Fusaka PeerDAS）
- 每个 blob 消耗 GAS_PER_BLOB = 131072 gas
- 每 1 blob 支付 131072 × blob_base_fee wei · 独立于 transaction gas

**Fee 动态**：
- block 的 blob 数 = target 时 · `excess_blob_gas` 不变 · fee 横向
- block > target 时 · `excess_blob_gas` 增加 · fee 指数上升
- block < target 时 · `excess_blob_gas` 下降（min 0）· fee 指数下降
- 设计目标：使 blob fee 与 demand 弹性匹配 · 与 calldata fee 不耦合 · 不影响 user gas

**MIN_BLOB_GASPRICE = 1 wei**：
- demand 低时 · blob 几乎免费（每个 blob 约 131072 wei ≈ 极小金额）
- demand 高时 · blob fee 可能达到 10-100 gwei · 单个 blob $0.10-$1+

### Blob 提交流程（sequencer 视角）

L2 sequencer 向 L1  提交 batch 的典型流程：
1. **Sequencer 收集、排序并执行 L2 tx**（本地）
2. **打包 batch data**（L2 tx + state diff）· 压缩（snappy / zstd / bzip2）
3. **创建 EIP-4844 transaction**（type 3）· 包含 0-N 个 blob（每个 blob 128 KiB）+ KZG commitment + versioned hash
4. **支付**：transaction gas（普通）+ blob gas（blob_base_fee × 131072 × blob 数）
5. **L1 block 包含 transaction · validator 通过 P2P 接收 blob data**（blob 不进入 block body · 走独立 P2P 通道）
6. **Rollup contract 验证 KZG commitment**（ZK rollup 验证 proof 引用 commitment · OP rollup 可在 challenge window 内挑战）
7. **18 天后 blob data prune · 仅 commitment 留在 chain 上**

**Sequencer 成本结构**（post-Dencun）：
- Transaction gas：约 $1-5（EIP-4844 transaction overhead）
- Blob gas：约 $0.10-$1 / blob（取决于 demand）· 通常每个 batch 提交 3-6 blob
- 每个 batch 总成本：约 $5-30 · 分摊到约 10000+ L2 tx · 每笔 L2 tx 约 $0.0005-$0.003

- 与 Dencun 前比较（使用 calldata）：每笔 L2 tx 约 $0.05-$0.20（取决于 L1 gas）

### 与 calldata 的比较

| 维度 | Calldata（Dencun 前 / 仍为选项）| Blob（EIP-4844）|
|---|---|---|
| 价格 | gas_per_byte × gas_base_fee（高）| blob_base_fee × 131072 × blob 数 / blob bytes（低，约 100x）|
| 保存期 | 永久（state）| 约 18 天（P2P prune）+ commitment 永久 |
| EVM 可访问 | 是（通过 CALLDATALOAD 等 opcode） | 否（仅通过 KZG point evaluation precompile）|
| 适用场景 | 状态访问 · 链上数据消费 | rollup data availability · 短期可重构 |
| Fee market | 与 user gas 共享 · 拥堵传染 | 独立 base fee · 拥堵不传染 |

### Dencun 上线初期（2024-03 - 2024-Q2）

**Pre-Dencun 状态**（2024-03  前）：
- Arbitrum / Optimism / Base 等 OP rollup 使用 calldata · 日合计 calldata cost 约 $2-5M
- zkSync / Linea / Scroll 等 ZK rollup 也使用 calldata + ZK proof submission
- L2 sequencer revenue 的 60-80% 用于 L1 cost · 利润率薄
- L2 用户 gas 为 $0.05-$0.50 / simple transfer

**Dencun 上线后的即时效果**（2024-03 - 2024-Q2）：
- 各 L2 sequencer 切换到 EIP-4844 blob · L1 cost 下降约 80-95%
- L2 用户 gas 降至约 $0.001-$0.05 / simple transfer · 用户体感大幅改善
- L2 sequencer margin 突然飙升（L1 cost 急降 · user gas 维持 · net margin 高）
- 但 sequencer 间竞争加剧 · 数周内逐步下调 user gas · 一部分将降价让利给用户，一部分作为 sequencer revenue 保留

**Blob fee market 初期波动**：
- 2024-03  上线初期 · blob 使用率不足 · blob_base_fee 维持 MIN_BLOB_GASPRICE = 1 wei
- 2024-Q2  之后 · Base / Arbitrum / Optimism 积极使用 · 平均 blob usage 接近 target（3）
- 2024-Q3  经常出现 blob max（6）压力 · blob fee spike 至 10-100 gwei

### Blob fee spike 期（2024-Q3 - 2025-Q1）

**fee spike 触发场景**：
- Base 上的 meme coin 浪潮 · DEX swap volume 急升 · Base sequencer batch 提交频率上升
- 多个 L2  同时高负载 · 争夺 blob slot
- 单 block max=6 blob 经常被用尽 · `excess_blob_gas` 累计 · fee 指数上升

**实证数据**（2024-Q4  峰值期）：
- Blob base fee spike 至 200-500 gwei · 单个 blob $5-15

- L2 sequencer 单个 batch 成本从 $5-30  上升到 $50-200 
- 一些 sequencer 在 blob 太贵时临时选择退回 calldata · 或降低 batch 频率（用户 finality 时间增加）
- 用户 gas 在峰值期可能上升 5-10x · 但仍远低于 Dencun 前

**社区讨论**：
- EthMagicians / ethresear.ch 上关于 EIP-7691（blob target 翻倍）的讨论加速
- Dankrad Feist、Vitalik 等多次公开建议加速 PeerDAS（EIP-7594）路线图
- ACD 确认将 EIP-7691  纳入 Pectra

### Pectra 后（2025-Q2 - 2026-Q2）

**Pectra EIP-7691  上线效果**：
- Blob target 3 → 6 · max 6 → 9

- L2 sequencer 在 normal load 下不再触发 blob fee spike（因为 supply 翻倍）
- 用户 gas 下降约 30-50%（参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 詳解]]）
- Blob fee 大部分时间维持 MIN（1 wei）· 只有突发负载（ETF 上线、meme coin spike 等）时短期 spike

**2026-Q2  现状**：
- 平均 daily blob count 约 30000-50000 blob（分布在约 7200 block/day）· 平均约 4-7 blob/block（略低于 target 6 ）
- Blob fee 平均约 1-5 gwei · 偶尔 spike 到 50-100 gwei
- Total daily blob cost 约 $50000-$200000（横跨所有 rollup）· 接近 alt-DA total revenue
- 单个 blob 实际平均 cost 约 $0.10-0.30 · 1 GB DA cost 约 $100-300（per day）

**Sequencer margin 恢复**：
- L2 sequencer net margin 在 Pectra 后稳定 · 不必再次担心 blob spike 突袭
- Base · Arbitrum · Optimism 等头部 L2 sequencer 年化 revenue 各约 $50-150M（2026）
- Linea · Scroll · zkSync 等中型 L2 sequencer revenue 各约 $10-30M

### 与 alt-DA 的市场动态

参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]。Blob 市场对 alt-DA 的影响：

**Pre-Dencun**：
- Celestia / EigenDA / Avail / NEAR DA 相对 calldata 的价格优势约 50x
- Alt-DA 抢走 cost-sensitive rollup 客户 · 形成 modular DA 叙事

**Post-Dencun（2024-Q2 - 2025-Q1）**：
- Blob 价格优势使 alt-DA 价格优势缩小至约 5-10x
- 大多数 ETH-aligned rollup 仍选择 blob（生态系统一致性 + 安全性）
- Alt-DA 转向非 ETH-aligned（Cosmos · Move · sovereign rollup）或 high-throughput 子链（Mantle · Manta）

**Post-Pectra（2025-Q2 - 2026-Q2）**：
- Blob 容量翻倍 · alt-DA 价格优势进一步缩小至约 3-5x
- Celestia 收入增长约 50% YoY，但客户类型分化（主流 L2 未增长 · sovereign / Move rollup 增长）
- EigenDA 借用 EigenLayer 安全性 + 高 throughput · 维持约 $120M ARR（参见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]]）

**Post-Fusaka（2026-Q4+）**：
- PeerDAS 使 blob 容量进一步 10x · alt-DA 价格优势可能仅剩约 1.5-2x
- Alt-DA 必须转向纯粹的 differentiated value（sovereign · privacy · 特定 throughput），而不是纯成本战

### Blob 市场参与者

**Sequencer**（blob 提交者）：
- 头部：Base · Arbitrum · Optimism · zkSync · Linea · Scroll · Polygon zkEVM
- 中型：Taiko · Blast · Mode · Mantle（一部分使用 EigenDA）· 等
- long-tail：多个小型 OP Stack / ZK Stack rollup
- 合计约 30-50  个 rollup 构成 blob market 的需求侧

**Builder / Proposer**（blob 打包者）：
- Flashbots · bloXroute · Manifold · Eden 等 MEV builder 除 transaction 排序外，也打包 blob
- 每个 block 由 proposer（随机选中的 validator）接受 builder bundle，并包含 blob transaction
- Blob 打包收入是 builder revenue 的一部分

**Validator**（blob 转发者）：
- 约 100 万+ 个 Ethereum validator 通过 P2P 网络分发 blob data
- DAS（PeerDAS 引入后）使 light client 只需采样验证，无需下载全部 blob

**DA 用户**（数据消费者）：
- 主要是 rollup 客户（challenge prover · ZK verifier · state reconstruction）
- 其次是 indexer / explorer（blob 数据在 18 天 ephemeral 期内）· 长期需要 archive node（Blobscan / Ethscan 等）

### Blob vs calldata vs alt-DA · 9 维度对照

| 维度 | Calldata | Blob (EIP-4844) | EigenDA | Celestia | NEAR DA |
|---|---|---|---|---|---|
| **Cost per GB** | $500-2000+（每 GB calldata 等价 ETH gas） | 约 $100-300/GB-day | $60-150/GB-day | $20-50/GB-day | $10-30/GB-day |
| **保存期** | 永久（L1 state） | 18 天 P2P + commitment 永久 | EigenDA dispatcher 设置（通常 14 天+ commitment） | Celestia 历史完整保留 | NEAR 历史保留 |
| **安全级别** | Ethereum L1（最高） | Ethereum L1 + DAS（post-PeerDAS） | EigenLayer 约 $6B opt-in | Celestia 约 $1-2B staking | NEAR 约 $1-2B staking |
| **Throughput** | 受 L1 gas 限制（实际约 50-100 KB/block） | 0.75 MB/block（Dencun）→ 1.1 MB（Pectra）→ 约 11 MB（Fusaka PeerDAS） | 15 MB/s sustained | 2 MB/block / 6s = 28 GB/day | 理论 100 MB/s |
| **Finality** | L1 finality（约 12-15 min） | L1 finality（约 12-15 min） | 约 10-30s + slashing | 约 6s（Tendermint） | 约 2-3s（NEAR） |
| **采用 share** | Pre-Dencun 主流 · post-Dencun 极少 | **95%+ ETH-aligned rollup default** | 约 20 rollup · modular 主导 | 约 30+ chain · 非 ETH-aligned 主导 | 约 10 chain · niche |
| **Fee market 设计** | 与 user gas 共享（拥堵传染） | 独立 EIP-1559 base fee | EigenDA dispatcher 独立定价 | Celestia 独立定价（以 TIA 计价） | NEAR storage fee 模型 |
| **EVM 可访问** | 是（CALLDATALOAD）| 否（仅通过 KZG point eval precompile） | 否 | 否 | 否 |
| **监管 surface** | Ethereum L1 sufficiently decentralized | Ethereum L1 sufficiently decentralized | EIGEN token + restaking 灰色 | TIA token 灰色 | NEAR token 多 jurisdiction 审查 |

**主要结论**：
- **Cost 排名**：Blob > EigenDA > Celestia > NEAR DA · 但价差会随 Pectra/Fusaka 缩小
- **安全级别排名**：Blob = Ethereum L1 （最高） > EigenDA（借用 ETH stake） > Celestia ≈ NEAR DA（独立 PoS）
- **Throughput 排名**：EigenDA / NEAR > Pectra Blob > Celestia / Avail > Fusaka Blob（跃升到 EigenDA 同水平）
- **Finality 排名**：NEAR > Celestia > EigenDA > Blob（Blob 最慢，但若与 ZK proof 结合则无需等待 finality）

### Pectra EIP-7691 前 vs 后

| 状态 | Pre-Pectra (Dencun) | Post-Pectra (2025-Q2+) |
|---|---|---|
| Blob target | 3 / block | 6 / block |
| Blob max | 6 / block | 9 / block |
| Max throughput | 约 0.75 MB / 12s ≈ 5.4 GB/day | 约 1.1 MB / 12s ≈ 8 GB/day |
| 平均 blob fee | 5-50 gwei（波动）| 1-5 gwei（大部分时间） |
| L2 sequencer cost | $20-100 / batch（波动） | $5-30 / batch（稳定） |
| L2 用户 gas | $0.001-0.05 （high vol 时 spike） | $0.0005-0.02 （Pectra 后进一步 30-50% 下降） |
| Alt-DA 价格优势 | 约 5-10x | 约 3-5x |

### Fusaka PeerDAS 预测（2026-Q4 计划）

EIP-7594（PeerDAS · Peer Data Availability Sampling）：
- Validator 不下载全部 blob，而是通过 DAS 采样验证 availability
- 单个 validator 网络带宽要求降至约 1/8 （因为只采样，无需全量下载）
- 可将 blob 容量扩展 10x（max=9  到 max=72+）· 不增加 validator 网络负载
- 伴随 EIP-7642 / 7691  等 blob fee market 调整

**预测影响**：
- Blob max 9 → 72 （initial）· ultimate goal 256+
- Throughput 约 1.1 MB/block → 约 11 MB/block（initial）
- Alt-DA 价格优势可能仅剩约 1.5-2x · 一部分 alt-DA 客户回归 L1 blob
- Full danksharding（理论 max 32 MB/block · 约 230 GB/day）是长期愿景 · 在 2027-2028  完成的可能性较低

### L2 sequencer revenue 与 user gas 的关系

**Sequencer revenue 公式**（简化）：
- Revenue = (user gas × tx 数 - L1 blob cost - operational cost - MEV redistribution)
- Volume 上升时 user gas 单价可能下降（竞争）· 但总 revenue 取决于弹性

**实证数据**（2026-Q2  估计 · 头部 L2）：
- **Base**：Daily user gas total 约 $200-400k · Daily blob cost 约 $30-80k · Sequencer net 约 $100-300k/day ≈ $30-100M ARR
- **Arbitrum**：Daily user gas total 约 $150-300k · Daily blob cost 约 $20-50k · Sequencer net 约 $80-200k/day ≈ $30-70M ARR
- **Optimism**：Daily user gas total 约 $50-100k · Daily blob cost 约 $10-20k · Sequencer net 约 $30-70k/day ≈ $10-25M ARR
- **zkSync · Linea · Scroll** 等：各 $5-20M ARR

全 ETH-aligned rollup 的总 sequencer revenue 约 $150-300M ARR（2026）。这是 Pectra 后的稳定状态 · 高于 pre-Dencun（2023）的总 sequencer revenue · 但单 tx revenue 大幅下降。

### Stripe / Coinbase Smart Wallet 等机构 + 消费者产品的受益

- **Stripe USDC on Base**：Pectra 后 single USDC transfer 约 $0.0005 · 对 Stripe 而言经济性显著改善 · Stripe 推出 Base-only merchant settlement
- **Coinbase Smart Wallet**：Account Abstraction（参见 [[systems/erc-4337-overview|ERC-4337]]）+ Base 低 gas · Coinbase 实现 sub-cent UX · 用户体感接近 Web2 
- **PayPal PYUSD on Base**：同样受益 · 2025-2026  PYUSD on Base 流通量增长约 3x
- **RWA tokenization**：Polygon zkEVM 上的 Franklin Templeton FOBXX pilot 因 Pectra blob 降低 settlement cost · 但机构仍偏好 L1 （参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 対照]]）

### ZK rollup vs OP rollup 的非对称受益

**OP rollup**（Arbitrum · Optimism · Base · Blast 等）：
- Blob 直接降低 calldata cost · 全部 batch data 进入 blob
- Challenge window 内可重构 state · blob 18 天保留期足够
- 受益最直接 · 用户 gas 下跌最显著

**ZK rollup**（zkSync · Linea · Scroll · Polygon zkEVM · Taiko 等）：
- Blob 降低 state diff 提交 cost · 但 ZK proof 提交 cost（verifier gas）不变
- ZK proof 占 sequencer cost 的约 30-50% · blob 仅占约 30-50%
- 受益相对较小但仍然显著（参见 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]]）

### Validator economy 与 staking yield 的影响

参见 [[systems/bft-validator-economy-overview|BFT validator 経済学概観]] 和 [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]：
- Blob fee 是 validator 收入的额外来源（blob_base_fee 不 burn · 由 proposer 收取）
- 2026  平均 daily blob fee revenue 约 $50-100k · 分摊到约 7200 block · 每个 block 约 $7-15 · 只是 validator daily revenue 的极小部分
- ETH burning（EIP-1559 base fee burn）不受 blob fee 影响 · blob fee 不 burn
- 长期 blob 经济不直接影响 ETH staking yield · 但有间接影响（blob 使 L2 繁荣 · L2  上的 dApp activity 将 L1 economic activity 带回）

### Builder / Proposer 角色变化

- Builder 现在必须打包 blob transaction + 普通 transaction · 复杂度增加
- Blob 的 P2P 传播路径不同于 transaction · Builder 需要协调
- Proposer 角色基本不变 · 但 blob 接收延迟可能影响 attestation 时间
- 长期 PBS（proposer-builder separation）中，builder 会专业化处理 blob handling

## 相关

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学概観]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]

## 来源

- EIP-4844 spec · https://eips.ethereum.org/EIPS/eip-4844
- EIP-7691 spec · https://eips.ethereum.org/EIPS/eip-7691
- EIP-7594 PeerDAS spec · https://eips.ethereum.org/EIPS/eip-7594
- Ethereum.org Danksharding roadmap · https://ethereum.org/en/roadmap/danksharding/
- Blobscan · https://blobscan.com/
- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- ethresear.ch sharding category · https://ethresear.ch/c/sharding/
- Dankrad Feist blog · "Data availability sampling and danksharding"(public)
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
- Ethereum Foundation KZG ceremony documentation
