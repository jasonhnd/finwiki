---
title: EIP-4844 blob 经济与 2026 市场影响 · Dencun 至 Pectra 至 Fusaka 全景
aliases: [eip-4844 blob 2026, blob economics 2026, dencun pectra fusaka blob, rollup cost reduction post-dencun, blob fee market mechanics, l2 sequencer margin recovery, blob target increase pectra, peerdas fusaka, blob market alt-da competition]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: certain
tags: [systems, ethereum, eip-4844, blob, dencun, pectra, fusaka, l2, rollup, sequencer, blob-fee, peerdas, da]
status: active
sources:
  - https://eips.ethereum.org/EIPS/eip-4844
  - https://eips.ethereum.org/EIPS/eip-7691
  - https://eips.ethereum.org/EIPS/eip-7594
  - https://ethereum.org/en/roadmap/danksharding/
  - https://blobscan.com/
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains/Rollup
  - https://ethresear.ch/c/sharding/
---

# EIP-4844 blob 经济与 2026 市场影响 · Dencun 至 Pectra 至 Fusaka 全景

## TL;DR

- EIP-4844(**proto-danksharding** · 2024-03 Dencun 上线)引入 **blob** —— rollup 专属临时存储 · 价格独立于 calldata · 18 天后只 commitment 留链
- **Blob mechanic**:每 block target=3 / max=6 blob(Dencun 原始)· 每 blob 128 KiB(131072 bytes)· 总 max ~768 KiB/block(Dencun)
- **Pectra EIP-7691**(2025-Q2)把 target → 6 / max → 9 · L2 calldata cost -50%(参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]])
- **Fusaka PeerDAS**(EIP-7594 · 2026-Q4 计划)进一步 10x 容量 → 理论 ~60 GB/day blob throughput
- **Blob fee market**:EIP-1559 风格 · 独立 base fee · target 之上 fee 指数增长 · target 之下 fee 衰减 · 不与 gas fee market 耦合
- **Dencun 后 L2 cost reduction**:Arbitrum / Optimism / Base 等 rollup 用户 gas 下降 ~100x · sequencer revenue 因 volume 上升而 net 正向
- **Blob 市场参与者**:rollup sequencer(blob 提交方) · Ethereum builder / proposer(blob 包装方) · DA 用户(数据消费方)
- **与 alt-DA 竞争**(参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景对照]]):blob 把 alt-DA 价格优势从 50x 缩到 3-5x · Pectra 后 1.5-2x · Fusaka 后可能消失
- 路由:[[systems/INDEX|systems index]] · 与 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]] / [[systems/data-availability-celestia-eigenda-blob-comparison|DA 对照]] 配对

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]] for the 2025-Q2 blob target doubling that directly extends EIP-4844, and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade context. For the L1/L2 strategic framing that makes blob economics structurally important, see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For the DA layer competition that blob market reshapes, see [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景对照]]. For the rollup ecosystem consuming blobs, see [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]] and [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]. For the institutional staking lane that holds the validator economy behind blob processing, see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]] and [[systems/bft-validator-economy-overview|BFT validator 经济学概览]]. For restaking-secured alternative DA, see [[systems/eigenlayer-overview|EigenLayer overview]] and [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]].

## Mechanism · blob 机制与 fee market

### Blob 数据结构

**核心定义**(EIP-4844 spec):
- 1 blob = 4096 个 field element × 32 bytes = 131072 bytes = 128 KiB
- 每个 transaction 可携带 0 个或多个 blob(实际限制是每 block 总 blob 数)
- Blob 不在 EVM 内可访问 · 只能通过 commitment(KZG point evaluation precompile · EIP-4844 引入)证明数据存在性
- Blob 数据 ~18 天(4096 epoch · target_blobs_per_block × MIN_BLOB_GASPRICE_UPDATE_FRACTION)后从 P2P 网络 prune · 只 KZG commitment 留 chain 永久

**blob commitment**:
- KZG commitment scheme(基于 trusted setup · Ethereum 用 Powers of Tau ceremony 2023)
- 每 blob 一个 48-byte commitment · 加上 versioned hash(SHA256(commitment) · 32 bytes)上链
- Rollup contract 可通过 KZG point evaluation precompile 证明 "blob 在 z 点的值是 y"(用于 ZK rollup state transition 证明)

### Blob fee market (EIP-1559 风格 · 独立)

**核心 mechanism**(EIP-4844 spec):
- 每 block 有 `excess_blob_gas` 状态变量 · 累计 "超出 target 的 blob gas"
- `blob_base_fee = MIN_BLOB_GASPRICE * exp(excess_blob_gas / BLOB_GASPRICE_UPDATE_FRACTION)`
- target_blobs_per_block = 3(Dencun)/ 6(Pectra)/ 6(Fusaka 初始 · 后续可调)
- max_blobs_per_block = 6(Dencun)/ 9(Pectra)/ 计划 18+(Fusaka PeerDAS)
- 每 blob 消耗 GAS_PER_BLOB = 131072 gas
- 1 blob 用 131072 × blob_base_fee wei 付费 · 独立于 transaction gas

**Fee 动态**:
- 当 block 包含 = target blobs 时 · `excess_blob_gas` 不变 · fee 持平
- 当 block > target 时 · `excess_blob_gas` 增长 · fee 指数上升
- 当 block < target 时 · `excess_blob_gas` 减少(min 0)· fee 指数下降
- 设计目标:让 blob fee 与 demand 弹性匹配 · 不与 calldata fee 耦合 · 不影响 user gas

**MIN_BLOB_GASPRICE = 1 wei**:
- 当 demand 低 · blob 几乎免费(每 blob ~131072 wei ≈ 极小金额)
- 当 demand 高 · blob fee 可达 10-100 gwei · 单 blob ~$0.10-$1+

### Blob 提交流程(sequencer 视角)

L2 sequencer 提交 batch 到 L1 的典型流程:
1. **Sequencer 收集 L2 tx · 排序 · 执行**(本地)
2. **打包 batch data**(L2 tx + state diff)· 压缩(snappy / zstd / bzip2)
3. **创建 EIP-4844 transaction**(type 3)· 包含 0-N 个 blob(每 blob 128 KiB)+ KZG commitment + versioned hash
4. **付费**:transaction gas(普通)+ blob gas(blob_base_fee × 131072 × blob 数)
5. **L1 block 包含 transaction · validator 通过 P2P 接收 blob data**(blob 不进 block body · 走单独 P2P 通道)
6. **Rollup contract 验证 KZG commitment**(对 ZK rollup · 验 proof 引用 commitment · 对 OP rollup · challenge window 内可挑战)
7. **18 天后 blob data prune · 只 commitment 留 chain**

**Sequencer 成本结构**(post-Dencun):
- Transaction gas:~$1-5(EIP-4844 transaction overhead)
- Blob gas:~$0.10-$1 / blob(取决于 demand)· typically 提交 3-6 blob / batch
- 总 cost per batch:~$5-30 · 摊到 ~10000+ L2 tx · 每 L2 tx ~$0.0005-$0.003
- 对照 Dencun 前(用 calldata):每 L2 tx ~$0.05-$0.20(取决于 L1 gas)

### 与 calldata 对比

| 维度 | Calldata(Dencun 前 / 仍可选)| Blob(EIP-4844)|
|---|---|---|
| 价格 | gas_per_byte × gas_base_fee(高)| blob_base_fee × 131072 × blob 数 / blob 字节(低 ~100x)|
| 存储期 | 永久(state)| ~18 天(P2P prune)+ commitment 永久 |
| EVM 可访问 | 是(透过 CALLDATALOAD 等 opcode) | 否(只能通过 KZG point evaluation precompile)|
| 适用场景 | 状态访问 · 链上数据消费 | rollup data availability · 短期可重构 |
| Fee market | 与 user gas 共享 · 拥堵传染 | 独立 base fee · 拥堵不传染 user |

## Market dynamics · Dencun 至 2026

### Dencun 上线初期(2024-03 - 2024-Q2)

**Pre-Dencun 状态**(2024-03 前):
- Arbitrum / Optimism / Base 等 OP rollup 用 calldata · 每天总 calldata cost ~$2-5M
- zkSync / Linea / Scroll 等 ZK rollup 也用 calldata + ZK proof submission
- L2 sequencer revenue 60-80% 用于 L1 cost · 利润率薄
- L2 用户 gas $0.05-$0.50 / 简单 transfer

**Dencun 上线后立即效果**(2024-03 - 2024-Q2):
- 各 L2 sequencer 切换到 EIP-4844 blob · L1 cost 下降 ~80-95%
- L2 用户 gas 下降到 ~$0.001-$0.05 / 简单 transfer · 用户感受巨大改善
- L2 sequencer margin 突然飙升(L1 cost 暴跌 · user gas 仍维持 · 净 margin 高)
- 但 sequencer 之间竞争激烈 · 几周内陆续降 user gas · 一部分降价让渡用户 · 一部分保留作 sequencer revenue

**Blob fee market 早期波动**:
- 2024-03 上线初 · blob 使用率不足 · blob_base_fee 维持 MIN_BLOB_GASPRICE = 1 wei
- 2024-Q2 起 · Base / Arbitrum / Optimism 积极使用 · 平均 blob usage 接近 target(3)
- 2024-Q3 经常出现 blob max(6)挤压 · blob fee spike 到 10-100 gwei

### Blob fee spike 时期(2024-Q3 - 2025-Q1)

**fee spike 触发场景**:
- Base 上 meme coin 浪潮 · DEX swap volume 急升 · Base sequencer 提交 batch 频率提高
- 多 L2 同时高负载 · blob slot 抢夺
- 单 block max=6 blob 经常被吃满 · `excess_blob_gas` 累计 · fee 指数上升

**实证数据**(2024-Q4 高峰期):
- Blob base fee spike 到 200-500 gwei · 单 blob ~$5-15
- L2 sequencer 单 batch cost 从 $5-30 上升到 $50-200
- 部分 sequencer 选择暂时回退到 calldata(blob 太贵时)· 或减少 batch 频率(增加用户 finality 时间)
- 用户 gas 在高峰期可上升 5-10x · 但仍远低于 Dencun 前

**社区讨论**:
- EthMagicians / ethresear.ch 上 EIP-7691(blob target 翻倍)的讨论加速
- Dankrad Feist · Vitalik 等多次公开建议加速 PeerDAS(EIP-7594)路线图
- ACD 敲定 Pectra 含 EIP-7691

### Pectra 后(2025-Q2 - 2026-Q2)

**Pectra EIP-7691 上线效果**:
- Blob target 3 → 6 · max 6 → 9
- L2 sequencer 在 normal load 下不再触发 blob fee spike(因 supply 翻倍)
- 用户 gas 下降 ~30-50%(参见 [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 详解]])
- Blob fee 大部分时间维持 MIN(1 wei)· 仅在突发负载(如 ETF 上线 · meme coin spike)时短暂 spike

**2026-Q2 当前状态**:
- 平均 daily blob count ~30000-50000 blob(分布在 ~7200 block/day)· 平均 ~4-7 blob/block(略低于 target 6)
- Blob fee 平均 ~1-5 gwei · 偶尔 spike 到 50-100 gwei
- Total daily blob cost ~$50000-$200000(across all rollup)· 与 alt-DA total revenue 接近
- 单 blob 实际平均 cost ~$0.10-0.30 · 1 GB DA cost ~$100-300(per day)

**Sequencer margin 恢复**:
- L2 sequencer 净 margin 在 Pectra 后稳定 · 不必再担心 blob spike 突然 hit
- Base · Arbitrum · Optimism 等头部 L2 sequencer 年化 revenue ~$50-150M each(2026)
- Linea · Scroll · zkSync 等中型 L2 sequencer revenue ~$10-30M each

### 与 alt-DA 的市场动态

参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景对照]] 详解。Blob 市场对 alt-DA 的影响:

**Pre-Dencun**:
- Celestia / EigenDA / Avail / NEAR DA 价格优势 ~50x vs calldata
- Alt-DA 抢 cost-sensitive rollup 客户 · 形成 modular DA 叙事

**Post-Dencun(2024-Q2 - 2025-Q1)**:
- Blob 价格优势让 alt-DA 价格优势缩到 ~5-10x
- 大部分 ETH-aligned rollup 仍选 blob(生态对齐 + 安全)
- Alt-DA 转向服务非 ETH-aligned(Cosmos · Move · sovereign rollup)· 或 high-throughput 子链(Mantle · Manta)

**Post-Pectra(2025-Q2 - 2026-Q2)**:
- Blob 容量翻倍 · alt-DA 价格优势进一步缩到 ~3-5x
- Celestia 收入增长 ~50% YoY 但客户类型分化(主流 L2 不增长 · sovereign / Move rollup 增长)
- EigenDA 借 EigenLayer 安全 + 高 throughput · 维持 ~$120M ARR(参见 [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]])

**Post-Fusaka(2026-Q4+)**:
- PeerDAS 让 blob 容量再 10x · alt-DA 价格优势可能仅剩 1.5-2x
- Alt-DA 必须转向纯 differentiated value(sovereign · privacy · 特定 throughput)· 而非纯 cost 战

### Blob 市场参与者

**Sequencer**(blob 提交方):
- 头部:Base · Arbitrum · Optimism · zkSync · Linea · Scroll · Polygon zkEVM
- 中型:Taiko · Blast · Mode · Mantle(部分用 EigenDA)· 等
- 长尾:多个小型 OP Stack / ZK Stack rollup
- 总共 ~30-50 个 rollup 是 blob market 的需求方

**Builder / Proposer**(blob 包装方):
- Flashbots · bloXroute · Manifold · Eden 等 MEV builder 在 transaction 排序之外 · 也包装 blob
- 每 block 由 proposer(随机选出的 validator)接受 builder bundle · 含 blob transaction
- Blob 的包装收入是 builder revenue 一部分

**Validator**(blob 转发方):
- ~100 万+ Ethereum validator 通过 P2P 网络分发 blob data
- DAS(PeerDAS 引入后)让 light client 仅采样验证 · 不必下载全 blob

**DA 用户**(数据消费方):
- 主要是 rollup 客户(challenge prover · ZK verifier · state reconstruction)
- 次要是 indexer / explorer(blob 数据有 18 天 ephemeral 期)· 长期需要 archive node(Blobscan / Ethscan 等)

## Comparison · 当前(2026-Q2)blob 与替代方案

### Blob vs calldata vs alt-DA · 9 维度对照

| 维度 | Calldata | Blob (EIP-4844) | EigenDA | Celestia | NEAR DA |
|---|---|---|---|---|---|
| **Cost per GB** | $500-2000+(每 GB calldata 等价 ETH gas) | ~$100-300/GB-day | $60-150/GB-day | $20-50/GB-day | $10-30/GB-day |
| **存储期** | 永久(L1 state) | 18 天 P2P + commitment 永久 | EigenDA dispatcher 配置(typically 14 天+ commitment) | Celestia 历史完整保留 | NEAR 历史保留 |
| **安全等级** | Ethereum L1(最高) | Ethereum L1 + DAS(post-PeerDAS) | EigenLayer ~$6B opt-in | Celestia ~$1-2B staking | NEAR ~$1-2B staking |
| **Throughput** | 受 L1 gas 限制(~50-100 KB/block 实际) | 0.75 MB/block (Dencun) → 1.1 MB (Pectra) → ~11 MB (Fusaka PeerDAS) | 15 MB/s sustained | 2 MB/block / 6s = 28 GB/day | 理论 100 MB/s |
| **Finality** | L1 finality(~12-15 min) | L1 finality(~12-15 min) | ~10-30s + slashing | ~6s (Tendermint) | ~2-3s (NEAR) |
| **采用 share** | Pre-Dencun 主流 · post-Dencun 极少 | **95%+ ETH-aligned rollup default** | ~20 rollup · 主导 modular | ~30+ chain · 非 ETH-aligned 主导 | ~10 chain · 小众 |
| **Fee market 设计** | 与 user gas 共享(拥堵传染) | 独立 EIP-1559 base fee | EigenDA dispatcher 自定价 | Celestia 自定价 (TIA 计价) | NEAR storage fee 模型 |
| **EVM 可访问** | 是(CALLDATALOAD)| 否(只能通过 KZG point eval precompile) | 否 | 否 | 否 |
| **监管 surface** | Ethereum L1 sufficiently decentralized | Ethereum L1 sufficiently decentralized | EIGEN token + restaking 灰色 | TIA token 灰色 | NEAR token 多 jurisdiction 审查 |

**关键结论**:
- **Cost 排序**:Blob > EigenDA > Celestia > NEAR DA · 但价格差距随 Pectra/Fusaka 缩小
- **安全等级排序**:Blob = Ethereum L1 (最高) > EigenDA (借 ETH stake) > Celestia ≈ NEAR DA (独立 PoS)
- **Throughput 排序**:EigenDA / NEAR > Pectra Blob > Celestia / Avail > Fusaka Blob (会跃升到 EigenDA 同级)
- **Finality 排序**:NEAR > Celestia > EigenDA > Blob (Blob 最慢但配合 ZK proof 不需要等 finality)

### Pectra EIP-7691 之前 vs 之后

| 状态 | Pre-Pectra (Dencun) | Post-Pectra (2025-Q2+) |
|---|---|---|
| Blob target | 3 / block | 6 / block |
| Blob max | 6 / block | 9 / block |
| Max throughput | ~0.75 MB / 12s ≈ 5.4 GB/day | ~1.1 MB / 12s ≈ 8 GB/day |
| 平均 blob fee | 5-50 gwei (波动)| 1-5 gwei (大部分时间) |
| L2 sequencer cost | $20-100 / batch (波动) | $5-30 / batch (稳定) |
| L2 用户 gas | $0.001-0.05 (high vol 时 spike) | $0.0005-0.02 (Pectra 后再降 30-50%) |
| Alt-DA 价格优势 | ~5-10x | ~3-5x |

### Fusaka PeerDAS 预期(2026-Q4 计划)

EIP-7594(PeerDAS · Peer Data Availability Sampling):
- Validator 不再下载全 blob · 而是用 DAS 采样验证 availability
- 单 validator 网络带宽需求降到 ~1/8(因只采样不下载全)
- Blob 容量可 10x 扩展(从 max=9 到 max=72+)· 而不增加 validator 网络负担
- 配套 EIP-7642 / 7691 等 blob fee market 调整

**预期影响**:
- Blob max 从 9 → 72 (initial) · ultimate goal 256+
- Throughput ~1.1 MB/block → ~11 MB/block (initial)
- Alt-DA 价格优势可能仅剩 ~1.5-2x · 部分 alt-DA 客户回流到 L1 blob
- Full danksharding(理论 max 32 MB/block · ~230 GB/day)是长期愿景 · 2027-2028 不太可能完成

## Ecosystem impact

### L2 sequencer revenue 与 user gas 关系

**Sequencer revenue 公式**(简化):
- Revenue = (user gas × tx 数 - L1 blob cost - operational cost - MEV redistribution)
- Volume 上升时 user gas 单价可能下降(竞争) · 但总 revenue 看弹性

**实证数据**(2026-Q2 估算 · 头部 L2):
- **Base**:Daily user gas total ~$200-400k · Daily blob cost ~$30-80k · Sequencer net ~$100-300k/day ≈ $30-100M ARR
- **Arbitrum**:Daily user gas total ~$150-300k · Daily blob cost ~$20-50k · Sequencer net ~$80-200k/day ≈ $30-70M ARR
- **Optimism**:Daily user gas total ~$50-100k · Daily blob cost ~$10-20k · Sequencer net ~$30-70k/day ≈ $10-25M ARR
- **zkSync · Linea · Scroll** 等:各 $5-20M ARR

总 sequencer revenue across all ETH-aligned rollup ~$150-300M ARR(2026)。这是 Pectra 后稳定状态 · 比 pre-Dencun(2023)总 sequencer revenue 高 · 但单 tx revenue 大幅下降。

### Stripe / Coinbase Smart Wallet 等机构 + 消费产品受益

- **Stripe USDC on Base**:Pectra 后 single USDC transfer ~$0.0005 · 对 Stripe 经济性显著改善 · Stripe 推出 Base-only 商家 settlement
- **Coinbase Smart Wallet**:Account Abstraction(参见 [[systems/erc-4337-overview|ERC-4337]])+ Base low gas · 让 Coinbase 实现 sub-cent UX · 用户感受接近 Web2
- **PayPal PYUSD on Base**:同样受益 · 2025-2026 PYUSD on Base 流通量增长 ~3x
- **RWA tokenization**:Polygon zkEVM 上 Franklin Templeton FOBXX pilot 利用 Pectra blob 降低 settlement cost · 但 institutional 仍偏 L1(参见 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 对照]])

### ZK rollup vs OP rollup 受益不对称

**OP rollup**(Arbitrum · Optimism · Base · Blast 等):
- Blob 直接降 calldata cost · 全部 batch data 上 blob
- Challenge window 内可重构 state · blob 18 天保留期足够
- 受益最直接 · 用户 gas 下降最显著

**ZK rollup**(zkSync · Linea · Scroll · Polygon zkEVM · Taiko 等):
- Blob 降 state diff 提交 cost · 但 ZK proof 提交 cost(verifier gas)不变
- ZK proof 占 ~30-50% sequencer cost · blob 仅占 ~30-50%
- 受益相对小一些 · 但仍显著(参见 [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]])

### Validator economy 与 staking yield 影响

参见 [[systems/bft-validator-economy-overview|BFT validator 经济学概览]] 和 [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]:
- Blob fee 是 validator 收入额外来源(blob_base_fee 不烧 · 由 proposer 收取)
- 2026 平均 daily blob fee revenue ~$50-100k · 摊到 ~7200 block · 每 block ~$7-15 · 占 validator daily revenue 极小
- ETH burning(EIP-1559 base fee burn)不影响 blob fee · blob fee 不烧
- 长期 blob 经济不直接影响 ETH staking yield · 但间接影响(blob 让 L2 繁荣 · L2 上 dApp activity 带回 L1 economic activity)

### Builder / Proposer 角色变化

- Builder 现在必须打包 blob transaction + 普通 transaction · 增加复杂度
- Blob 的 P2P 传播路径与 transaction 不同 · Builder 需要协调
- Proposer 角色基本不变 · 但 blob 接收延迟可能影响 attestation 时间
- 长期 PBS(proposer-builder separation)让 builder 专业化 blob handling

## Counterpoints

- **Blob fee market 可能在极端拥堵时失效**:理论上 blob fee 可达 1000+ gwei · 但实证显示用户在 fee spike 时倾向暂停 tx · 长期 fee market 设计在大 spike 场景未完全验证
- **Pectra 翻倍可能很快被用户增长吃完**:Base / Arbitrum 等头部 L2 用户增长持续 · 长期 blob target 又会达到上限 · Fusaka 是临时方案
- **PeerDAS 工程复杂度高**:EIP-7594 spec 比 EIP-4844 复杂 ~3x · validator 客户端需要重大升级 · 2026-Q4 时间表存在 slip risk
- **Alt-DA 不会完全被消灭**:Cosmos / Move / sovereign rollup 始终需要非 ETH-aligned DA · Celestia / NEAR DA 在这些细分仍有市场
- **机构 DA 偏好可能不随价格变**:institutional risk committee 长期偏 L1 DA · blob cost 即使再低 · 不会让机构接受 EigenDA / Celestia
- **Sequencer 经济仍中心化**:Pectra 让 sequencer margin 上升 · 但 sequencer 本身仍中心化(几乎所有 ZK/OP rollup 的 sequencer 都中心化运营)· 这是更大的去中心化债务
- **Blob commitment 用 KZG 依赖 trusted setup**:Powers of Tau ceremony 2023 已完成 · 但若 trusted setup 部分泄漏 · 长期可能影响 KZG 安全 · STARK-based 替代(无 trusted setup)是长期路径

## Open questions

- **Fusaka PeerDAS 实际上线时间表**:2026-Q4 / 2027-Q1 / 更晚?spec 复杂度 + validator 客户端升级是 bottleneck
- **Blob target 长期调整频率**:每次硬分叉调一次?还是引入 dynamic target(根据 demand 自动调)?
- **Full danksharding 时间表**:理论 32 MB/block · 是 2030+ 长期愿景 · 还是 2028 可达?
- **L2 sequencer decentralization 时间表**:Pectra/Fusaka 解决 cost · 但 sequencer 中心化是更大问题 · 何时主流 L2 引入 shared sequencer
- **Blob 18 天 prune 后 long-term archive**:Blobscan 等 archive 节点是否能长期保存所有历史 blob?archive 经济模型不清晰
- **Alt-DA 是否会出现新一代 differentiation**:除 cost 外 · 是否会有 specialized DA(privacy DA · institutional DA · 等)新 vertical
- **Blob fee burning 是否会被引入**:目前 blob fee 给 proposer · 若改为 burn(类似 EIP-1559)· 对 ETH supply 有影响
- **ZK proof 提交成本何时也大幅下降**:ZK proof verifier gas 仍是 ZK rollup 主要成本 · 是否会有 Verkle tree / SNARK aggregation 等优化
- **MEV 在 blob 市场是否会产生新形态**:blob 是数据 · 不像 transaction 有直接 MEV · 但 blob 的包装顺序可能产生 sandwich-like behavior

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 翻倍与 L2 经济连锁]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景对照 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/bft-validator-economy-overview|BFT validator 经济学概览]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX 敞口]]

## Sources

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
