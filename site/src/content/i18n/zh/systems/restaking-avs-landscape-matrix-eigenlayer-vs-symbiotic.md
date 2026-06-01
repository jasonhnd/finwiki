---
source: systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic
source_hash: 91d67a92b21cdcdd
lang: zh
status: machine
fidelity: ok
title: "Restaking 与 AVS 全景矩阵 · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM"
translated_at: 2026-06-01T04:15:40.183Z
---
# Restaking 与 AVS 全景矩阵 · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM

## TL;DR

- 比较 6 个 restaking 基础设施在 2026-Q2 的 **TVL · restaking model · slashing · AVS economics · correlation risk · operator concentration · governance · audit · Lido overlap · regulatory exposure** 等 10 个轴
- **Restaking model 的 3 象限**：**Operator-delegated**（EigenLayer · Karak · Symbiotic）· **LRT vault aggregator**（EtherFi · Mellow · Renzo）· **Native protocol restaking**（Lido CSM · LST 自身提供 restake hook）
- **TVL 2026-Q2 估计**：EigenLayer ~$14B · Symbiotic ~$3.2B · EtherFi LRT（eETH）~$5.5B · Mellow LRT ~$1.8B · Karak ~$1.0B · Lido CSM ~$280M（early）
- **AVS landscape 5 大**：**EigenDA**（~$120M revenue 2026 estimate · 多个 ZK rollup 用户）· **Hyperlane**（用 ISM 借用 EigenLayer/Symbiotic）· **Espresso**（shared sequencer · Polygon/zkSync/Caldera 等连接）· **Lagrange**（coprocessor + state proof）· **Witness Chain**（POI · 物理基础设施验证）
- 2025 年 EigenLayer slashing 正式启用 · 实际 slash 事件 ≤ 5 件 · 累计 < $5M（远低于早期担忧）· 但 correlation risk（rehypothecation）仍未被充分定价
- **Lido stake 重叠率**：EigenLayer 约 25% TVL 来自 stETH restaking · Symbiotic 为约 40% · Mellow 完全基于 LST 集合 —— Lido 是 restaking 生态系统的“底层流动性来源”
- 路由：[[systems/eigenlayer-overview]]（核心）· [[exchanges/liquid-staking-restaking-cex-exposure]]（LRT CEX 敞口）· [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · 2048 ETH validator]]（机构 staking 路径）

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/eigenlayer-overview|EigenLayer overview]] 作为 canonical anchor、[[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism · Operator · Slashing · EIGEN 仲裁]] 了解 slashing + AVS economics 深度、[[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]] 了解新链如何使用 restaking 启动安全。关于 validator economics 的元背景，请参见 [[systems/bft-validator-economy-overview|BFT validator economics overview]] 和 [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]。关于 restaking 触及的共识模型，请参见 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]] 和 [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]。关于与 restaking economics 交互的 EIP-7251 institutional staking lane，请参见 [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]。关于 CEX 对 LRT 的敞口以及“liquid staking → restaking → CEX leverage”栈，请参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]。在推理 Hyperlane / LayerZero / Wormhole 作为 AVS 消费者时，交叉链接到 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]。

## 为什么这个矩阵重要

Restaking 在 2023-2024 年是 EigenLayer 单一玩家提出的“ETH crypto-economic security marketplace”概念。到 2024-2025 年演进为多个协议竞争 —— Symbiotic 提供多资产 restaking（不仅限 ETH）· Karak 以开发者 UX + universal restaking 为主轴 · Mellow 是 LRT vault aggregator · EtherFi 通过 LRT（eETH）承接 LST 市场 · Lido 自身也通过 CSM（Community Staking Module）和 stVaults 进入。

对开发者（AVS 构建者 · 例如 [[systems/hyperlane-overview|Hyperlane]] / EigenDA / Lagrange）而言，选择哪一个 restaking layer 会决定：**operator pool 深度 · slashing 的真实可执行性 · TVL backing 带来的经济安全规模 · 治理可预测性**。对用户（考虑 restake 的 stETH 持有者）而言，选择哪一种 LRT（eETH · ezETH · pufETH · mevETH 等）会决定：**收益分配 · slashing 风险敞口 · withdrawal 流动性 · 是否在 CEX 上市**。

对监管（SEC / ESMA / FSA · 参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]）而言，restaking 是否构成“证券”/“投资合同”是 2026 年仍待判决的议题，不同协议因治理 + 收益结构不同而具有不同监管敞口。

本矩阵横向对照 6 个 active restaking 基础设施 · 10 个轴 · 2026-Q2 数据快照。AVS landscape 是独立章节 · 列出 5 大 AVS 的经济图像。Stand-alone LRT（Renzo / Puffer / Kelp / Swell）不作为独立对照列出 · 部分在 EtherFi / Mellow 分析中提及。

## Per-protocol sections

### EigenLayer

**Restaking model**：Operator-delegated（质押人选择 operator，operator 选择 opt-in 的 AVS）。支持 Native ETH restaking（经 EigenPod）· LST restaking（stETH · rETH · cbETH 等 8 种 strategy）· EIGEN token native restaking。

**TVL May 2026**：约 $14B（估计 · 在 2025 高点达到 $20B+ · 2026 因部分 LRT 退出 + 收益压缩而温和调整）。

**Slashing implementation**：2025-Q2 启用主网 slashing。AVS 定义自定义 slashing 条件（参见 [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]）。实际 slash 事件 ≤ 5 件（2026-Q2）· 累计 slash 金额 < $5M（主要是 operator 配置错误 · 非恶意）。

**AVS economics**：约 40 个 AVS active · 包括 EigenDA · Hyperlane · Espresso · Lagrange · Witness Chain · AltLayer · Brevis 等。Operator rewards 来自 AVS 收费（EIGEN + 各 AVS native token），在 base ETH staking yield 上增加年化 +1-3%。

**Correlation risk**：Rehypothecation 系数 2.5-3x（每 1 单位 ETH 平均 opt-in 2.5-3 个 AVS）· Vitalik 多次警告“system-wide slashing cascade”风险。EIGEN inter-subjective dispute 是缓解机制，但其本身依赖 token holder vote（可能被资本操纵）。

**Operator concentration**：Top 5 operator 占约 50% TVL（Coinbase Cloud · Figment · P2P · Stakefish · DSRV）· 其余分散在约 200 operator。

**Governance**：EigenLabs（团队主导）· EIGEN token + Operating Token holders · Security Council 7-of-13。2025 EIGEN 投票上线后逐步去中心化。

**Audit**：Trail of Bits · ChainSecurity · OpenZeppelin · Sigma Prime · Code4rena · Cantina。slashing 启用前进行了多轮独立 audit。

**Lido stake overlap**：约 25% EigenLayer TVL 来自 stETH strategy（其余主要为 native ETH via EigenPod + cbETH · rETH）。

**Regulatory exposure**：SEC 尚未明确表态 EIGEN token 是否构成 securities · 2024 年 EigenLayer 积极推迟对美国用户的 EIGEN airdrop。EU MiCA 下 restaking yield 可能被分类为“tokenized money market service”· 待判决。

### Symbiotic

**Restaking model**：**多资产 restaking**（不仅 ETH · 支持任意 ERC-20 ，包括 LST · 稳定币 · 项目 token）。Modular vault 架构 · vault curator 自定义 collateral + AVS opt-in 策略。

**TVL May 2026**：约 $3.2B（2024-09 alpha launch · 2025 fast growth · 2026-Q1 为第二大 restaking · 部分 TVL 是非 ETH 资产，因此与 EigenLayer 直接比较需要调整）。

**Slashing implementation**：从 day 1 起支持 vault-level slashing（2025-Q1 主网启用）。Operator slashed = vault collateral 整体受损 · 但 vault curator 可自定义 slashing 策略（比例 · 触发条件）。

**AVS economics**：约 15 个 AVS active（2026-Q2）· 主推 Ethena USDe / sUSDe restake · Hyperlane ISM 的 1 个 · Mellow vault deep integration · GearBox credit account 等。Operator rewards 多元化（稳定币 · vault token · AVS native）。

**Correlation risk**：理论上高于 EigenLayer（多资产类别 · slashing 触发条件复杂）· 但实际上多元化资产可分散单一 ETH 风险。Vault curator 的选择是风险锚。

**Operator concentration**：Top 5 operator 约 60%（P2P · Kiln · Chorus One · Everstake · DSRV）· 集中度高于 EigenLayer。

**Governance**：Symbiotic Labs 团队主导 · 计划在 2026-Q4 推出 token + DAO governance。Vault curator 实质上是 sub-governance（各 vault 独立）。

**Audit**：OpenZeppelin · Sigma Prime · Cantina contest · 初期阶段 · audit 覆盖少于 EigenLayer 但持续扩大。

**Lido stake overlap**：约 40% TVL 来自 LST vault（stETH · rETH · wstETH 等）。Mellow 作为 Symbiotic 的主要 vault curator，将 LRT 资金路由到 Symbiotic AVS。

**Regulatory exposure**：多资产使 Symbiotic 的监管定位更复杂（部分 vault 包含稳定币 = 接近 money market 监管）· 但单一资产监管事件的影响也会更有限。

### Karak

**Restaking model**：Universal restaking（支持 ETH · BTC · USDC · K2 是 Karak 自有 L2）· 强调开发者 UX（“any asset can secure any service”）。

**TVL May 2026**：约 $1.0B（2024 上线 · 2025 增长但慢于 Symbiotic · 2026 因 BTC restaking 模块 + K2 集成而上升）。

**Slashing implementation**：2025-Q3 启用 · 但实际 AVS 数少 · 触发 slash 事件 ≤ 2 件。

**AVS economics**：约 10 个 AVS active · 主要是 Karak 团队自身孵化的服务（K2 L2 sequencer / DA）· 第三方 AVS 很少。

**Correlation risk**：多资产模型下 correlation 复杂 · 但 TVL 规模小 · 系统性风险短期较低。

**Operator concentration**：Top 5 operator 约 70%（Karak 自营 + 少数合作方）。

**Governance**：Karak Foundation 主导 · KAR token 计划在 2026-Q3-Q4 上线。

**Audit**：Sigma Prime · Halborn · Cantina（部分）。

**Lido stake overlap**：约 20% TVL 来自 stETH（Karak 的 BTC + 稳定币 restaking 占比更大）。

**Regulatory exposure**：BTC restaking 会触发 SEC 对“BTC yield product”的关注。USDC restaking 接近 money market 监管。总体监管表面积大于 EigenLayer。

### Mellow

**Restaking model**：LRT vault aggregator（不是底层 restaking，而是构建在 EigenLayer + Symbiotic 之上的 vault layer）· Mellow vault 用户存入 stETH / wstETH，vault 自动 restake 到 EigenLayer/Symbiotic AVS · 收益分配 + slashing 风险被 pooled。

**TVL May 2026**：约 $1.8B（2024-Q4 launch · 2025-2026 fast growth · Symbiotic 最大 vault curator · 同时也 deploy 一部分 EigenLayer vault）。

**Slashing implementation**：在 Vault 层 socialize slashing（1 个 AVS slash 由 vault 持有人整体按份额承担）· 用户隐含接受 portfolio slashing 风险。

**AVS economics**：Mellow vault 选择多个 AVS pool 优化 risk-adjusted yield · 用户获得的是“mixed AVS rewards”basket。

**Correlation risk**：最高层级 —— vault 同时持有多个 AVS · 单一 vault 内 slash cascade 风险显著。Mellow 通过 vault 多元化（不同 AVS pool 对应不同 vault）缓解。

**Operator concentration**：借用 EigenLayer / Symbiotic operator 集合 · 自身不引入新的集中度。

**Governance**：Mellow DAO + MLW token（2025-Q2 上线）· vault curator team 为 sub-governance。

**Audit**：Sigma Prime · Spearbit · Code4rena · 与 Symbiotic 联合 audit。

**Lido stake overlap**：约 100%（Mellow vault 基本完全基于 stETH / wstETH / LST 集合）· Lido → restaking 的最大单一路径。

**Regulatory exposure**：Vault 结构接近“managed fund”· 在 EU MiCA / SEC 下可能被分类为集合投资 scheme。Mellow 积极避开美国用户。

### EtherFi LRT (eETH / weETH)

**Restaking model**：LST + restaking 一体化 —— 用户存入 ETH，获得 eETH（rebasing）或 weETH（wrapped non-rebasing）· EtherFi 同时将底层 ETH stake（beacon chain validator）+ restake（EigenLayer + Symbiotic + Karak partial）。LRT 市场领导者。

**TVL May 2026**：约 $5.5B（2024 高点 $7B · 2026 温和调整）· 最大 LRT。

**Slashing implementation**：EtherFi 自行运营节点（节点运营者网络 · 严格筛选）· slash 风险由 EtherFi insurance fund + protocol reserve 承担。用户以 eETH 价格反映 slash 损失的形式面对。

**AVS economics**：EtherFi 选择将 ETH restake 到主流 AVS（EigenDA · Hyperlane · Espresso · Lagrange）· 收益反映在 eETH yield（年化约 4-6% · 包含 base staking 3-4% + restaking premium 1-2%）中。

**Correlation risk**：eETH 持有者天然暴露于 EigenLayer + Symbiotic + Karak 的 3 层 slash cascade。EtherFi insurance fund 约 $50M 作为 first-loss buffer。

**Operator concentration**：EtherFi 节点网络约 200 operator · 一部分由 EtherFi 直接运营 · 一部分外包（Pier Two · ChainSafe · Validation Cloud 等）。

**Governance**：EtherFi DAO + ETHFI token（2024-Q2 上线）· Foundation + Security Council 7-of-15。

**Audit**：Spearbit · Halborn · Certora · Hats Finance bug bounty。

**Lido stake overlap**：EtherFi 是 Lido 的直接竞争者（LST 市场份额）· EtherFi 不使用 stETH（自行运营 validator）· 但 EtherFi 的一部分 stake 被放入 EigenLayer 时，与 stETH 位于同一 AVS pool 内。

**Regulatory exposure**：LRT 是 SEC 的重点关注对象（2024 SEC 主席 Gensler 公开提到“staking + restaking = potential security”）。EtherFi 积极对美国零售用户 geo-fence。

### Lido CSM (Community Staking Module)

**Restaking model**：Lido 自身长期未进入 restaking（Lido v2 治理多次否决）· 但在 2024 年宣布 CSM（Community Staking Module），使小型 operator 能加入 Lido validator set · 同时探索 stVaults（2026 计划），让 stETH 持有者能够 opt-in restaking。Lido v3（2026 roadmap）正式引入 restaking hook。

**TVL May 2026**：约 $280M（CSM early adoption · 2026 Q3-Q4 stVaults 上线后预计快速增长）。Lido stETH 整体 TVL 约 $32B（restaking 部分 < 1%）。

**Slashing implementation**：CSM operator 自带 bond（2-4 ETH）作为 collateral · slash 优先扣除 bond · 不足部分由 Lido insurance fund 承担。stVaults restaking slash 由 vault 用户按份额承担。

**AVS economics**：Lido stVaults 计划支持 EigenLayer + Symbiotic 主流 AVS · 但 Lido DAO 严格管理 AVS 白名单（仅连接 audit 完备 + 治理稳定者）。

**Correlation risk**：Lido 的设计哲学是“minimize correlation”· stVaults opt-in 后用户隐含承担 · 但 Lido DAO 通过 AVS 白名单 + 浮动 cap 限制。

**Operator concentration**：Lido 主集合约 30 operator（机构）+ CSM 约 200 小 operator。CSM 改善去中心化 · 引入长尾 home staker。

**Governance**：Lido DAO + LDO token + 全民 referendum · 治理复杂度最高（任意 AVS 连接到 stVaults 都需要 LDO 投票通过）。

**Audit**：Sigma Prime · ChainSecurity · OpenZeppelin · Certora · Statemind · MixBytes · audit 覆盖为行业最深。

**Lido stake overlap**：Lido 是 stETH 发行者 · 这里的“Lido stake overlap”= 100%。stETH 在 EigenLayer / Symbiotic / Mellow / EtherFi 中的二次 restaking 占整个 restaking 生态系统的 25-40%，Lido 实际上是 restaking 流动性来源（参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]）。

**Regulatory exposure**：Lido DAO 治理结构从 SEC 视角接近“decentralized issuer”· 但 LDO token holder 投票 + 治理收益分配可能构成 securities。EU MiCA 下 stETH 是否构成“asset-referenced token”仍待判决。

## AVS landscape — 5 大 AVS 经济图像

| AVS | 类型 | 主要 backing | 2026 收入估计 | TVL backing | 客户 |
|---|---|---|---|---|---|
| **EigenDA** | Data Availability | EigenLayer | ~$120M ARR | ~$6B ETH | Mantle · Movement · Cyber · Rivalz · 多个 ZK Stack hyperchain |
| **Hyperlane** | Cross-chain messaging ISM | EigenLayer + Symbiotic + 自身 | ~$30M ARR（messaging fee 分配） | ~$1.5B ETH（EigenLayer ISM）+ 部分 Symbiotic | Eclipse · Celestia · Renzo · 多个 app-chain |
| **Espresso** | Shared sequencer | EigenLayer | ~$15M ARR（early） | ~$800M ETH | Polygon zkEVM · zkSync ZK Stack · Caldera · AltLayer rollup-as-a-service |
| **Lagrange** | Coprocessor + state proof | EigenLayer | ~$8M ARR | ~$500M ETH | LayerZero · Polyhedra · 多个 DeFi protocol |
| **Witness Chain** | POI（Proof of Inference）/ DePIN 验证 | EigenLayer | ~$5M ARR（experimental） | ~$200M ETH | DePIN 项目 + AI inference verification |

**AVS 经济模型 2 种**：
- **Direct fee**：用户 / 客户被收费（EigenDA 客户支付 DA fee · Hyperlane 客户支付 messaging fee）→ 分配给 operator
- **Token incentive**：AVS 拥有自有 token · 将初期 emission 提供给 operator 作为 bootstrapping（Espresso · Lagrange · Witness Chain）

**Rehypothecation 影响**：Top 3 AVS（EigenDA · Hyperlane · Espresso）均主要从 EigenLayer 获取 backing · 1 单位 ETH 同时 secure 3 个 AVS 已成常态。Vitalik 警告的“cascade risk”主要指这种情况。

## Big comparison matrix table

**6 个 restaking 基础设施 × 10 轴对照**（2026-Q2 状态）：

| Protocol | Restaking Model | TVL May 2026 | Slashing | AVS Economics | Correlation Risk | Operator Concentration | Governance | Audit | Lido Overlap | Regulatory |
|---|---|---|---|---|---|---|---|---|---|---|
| **EigenLayer** | Operator-delegated · native ETH+LST+EIGEN | ~$14B | 2025-Q2 启用 · ≤5 events · <$5M 累计 | ~40 AVS · EIGEN+AVS token rewards · base 上 +1-3% | Rehypothecation 2.5-3x · cascade 担忧 | Top 5 ~50% | EigenLabs+EIGEN+SC 7/13 | Trail of Bits · ChainSecurity · OZ · Sigma Prime · C4 · Cantina | ~25% stETH | SEC EIGEN security 未表明 · EU MiCA 待判决 |
| **Symbiotic** | **多资产**（ETH+LST+stablecoin+token）· modular vault | ~$3.2B | Day 1 design · 2025-Q1 启用 · vault-level | ~15 AVS · stablecoin/vault/AVS token rewards | 复杂多资产 · vault curator 锚 | Top 5 ~60% | Symbiotic Labs · 2026 Q4 token+DAO | OZ · Sigma Prime · Cantina · 初期阶段 | ~40% stETH（Mellow vault 主路径） | 多资产监管表面积复杂 |
| **Karak** | Universal（ETH+BTC+USDC）· K2 L2 集成 | ~$1.0B | 2025-Q3 启用 · ≤2 events | ~10 AVS · Karak-incubated 中心 | 多资产复杂 · TVL 小，短期风险低 | Top 5 ~70%（集中度高） | Karak Foundation · KAR 2026 Q3-Q4 | Sigma Prime · Halborn · Cantina 部分 | ~20% stETH | BTC restaking SEC 关注 · USDC 接近 MM 监管 |
| **Mellow** | **LRT vault aggregator**（在 EigenLayer+Symbiotic 上）· socialize slashing | ~$1.8B | Vault-level socialize | 多 AVS pool basket rewards | 最高（vault 内 cascade） | 借用 underlying · 无新增集中 | Mellow DAO+MLW 2025-Q2 · vault curator sub-gov | Sigma Prime · Spearbit · C4 · 与 Symbiotic 联合 | ~100%（基本全 LST） | 接近 managed fund · 避开美国 |
| **EtherFi LRT** | **LST+restaking 一体化** · 自有节点+多层 restake | ~$5.5B（最大 LRT） | EtherFi 节点责任 · insurance fund first-loss | EigenDA+Hyperlane+Espresso+Lagrange · 年化 4-6% | 3 层 slash cascade · insurance ~$50M buffer | EtherFi 网络 ~200 operator | EtherFi DAO+ETHFI 2024 Q2 · SC 7/15 | Spearbit · Halborn · Certora · Hats bounty | Lido 竞争 · 自有 validator · AVS pool 间接重叠 | LRT 为 SEC 重点关注 · 美国零售 geo-fence |
| **Lido CSM / stVaults** | CSM home staker + stVaults restaking hook（2026 计划） | ~$280M CSM · stETH 整体 $32B | CSM operator bond first · insurance backup · stVaults 用户承担 | 严格 AVS 白名单（DAO 投票） | Lido 哲学 minimize · AVS cap 限制 | CSM ~200 小 operator + 主集合 30 | Lido DAO+LDO+referendum（治理最重） | Sigma Prime · ChainSecurity · OZ · Certora · Statemind · MixBytes · 行业最深 | **100%（Lido 自身）** · stETH 是 restaking 流动性源 | LDO security 待判决 · stETH MiCA ART 待判决 |

**矩阵读法**：
- **Restaking model 3 象限对照**：operator-delegated（EigenLayer · Karak · Symbiotic）→ 直接委托 · vault aggregator（Mellow）→ 包装其他 restaking · LST+restaking 一体化（EtherFi · Lido stVaults）→ 用户收到 LRT token
- **TVL vs operator concentration tradeoff**：EigenLayer TVL 最大 · operator 分散度最高 · Karak TVL 小 · 集中度高 · Mellow 借用他人的 operator，不新增集中
- **Lido overlap 是隐藏的系统性风险** —— stETH 在 EigenLayer / Symbiotic / Mellow / EtherFi 中二次 restaking · 如果 stETH 价格脱锚或 Lido protocol incident 发生，整个 restaking 生态系统会同时受影响
- **Slashing 的实际状态**：启用后经过 1+ 年，实际 slash 事件仍 ≤ 10 件 · 累计金额 < $10M · 远低于 Vitalik 警告的“$100M+ cascade”情景 · 但 sample size 小，不能得出风险已被定价的结论

## Boundary cases / future trajectory

**Restaking 与 EIP-7251 的相互作用**（参见 [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]）：
- EIP-7251 将 validator max effective balance 从 32 → 2048 ETH 扩大，使大型机构能够合并 validator 并降低运营成本。
- 机构 validator 可同时 restake 大额 ETH · 进一步推高 operator concentration。EigenLayer 在 2025 年已确认 top 5 operator 比率小幅上升。
- 长期来看，institutional staking（SWIFT 托管人 · BNY · Coinbase Custody · BlackRock · 参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]）进入 restaking 后，TVL 可能从 2026 年的 $20B 级推升到 2027-2028 年的 $50B+。

**Lido v3 restaking 连接**：Lido DAO 2026-2027 stVaults 主线开发 · 一旦连接，stETH 将直接成为 restaking primitive，二次包装不再必要。这会导致：
- Mellow / EtherFi 的部分价值被吸收（stETH 持有者直接 opt-in · 不需要中介 vault）
- 但 Lido 严格的 AVS 白名单也会限制长尾 AVS 的 bootstrapping
- 长期中 Lido + EigenLayer 形成事实 duopoly，Symbiotic / Karak / Mellow / EtherFi 承担边缘细分

**AVS 商业模式演进**：
- **2024-2025 阶段**：大多数 AVS 依赖 token incentive bootstrapping（向 operator 分发自有 token）· 实际 fee revenue 较少。
- **2026 阶段**：头部 AVS（EigenDA · Hyperlane · Espresso）开始拥有实际 fee revenue，但 AVS-to-operator 分配比率不一致（EigenDA 将 90%+ 给 operator · Hyperlane 为 50/50 · Espresso 仍在 bootstrapping 中）。
- **2027+ 趋势**：AVS market 可能分化为“DA 商品化”（EigenDA / Celestia / Avail 价格战）和“差异化服务”（Espresso shared sequencer · Lagrange coprocessor · Witness Chain DePIN 验证）。

**Rehypothecation 系统性风险**：
- Vitalik 在 2024 年多次警告 EigenLayer 对“应用层共识”的过度扩展 —— 担忧 1 单位 ETH 同时 secure 5+ AVS 时出现 slashing cascade。
- 实际数据：2026-Q2 平均 rehypothecation 系数 2.5-3x · 远低于理论最大值（任意 AVS 数）· 因为大部分 ETH 只 opt-in 2-3 个头部 AVS。
- 但 EtherFi / Mellow 等 LRT vault 默认 opt-in 多个 AVS · 用户隐含承担 cascade。Mellow vault 的内部多元化是缓解因素 · 但 cross-vault correlation 仍然存在（同一 operator 同时运营多个 AVS）。

**Symbiotic 多资产战略 vs EigenLayer ETH-pure**：
- EigenLayer 坚持 ETH（+LST）纯度 · 因为 Ethereum 社区共识 + ETH 是最深的 crypto-economic security pool。
- Symbiotic 接受任意资产（包括稳定币 · 项目 token），让 AVS 自选风险画像。
- 长期看，Symbiotic 可能在“non-ETH-native AVS”（BTC 跨链 · DePIN · AI inference）中获取 EigenLayer 无法取得的客户；EigenLayer 在“ETH-aligned AVS”（以 ETH-native dApp 为客户）中保持优势。

**Slashing case study 收集中**：
- 2025-Q3 EigenLayer 的 operator（中型节点）1 件因 validator key 错误配置触发约 $200K slash · operator 自费补偿。
- 2025-Q4 EigenDA 1 件中 quorum 不足事件触发约 $80K 集体 slash · AVS 自行 mitigation。
- 2026-Q1 Symbiotic 1 件中 vault 配置 bug 导致约 $1M slash · vault curator 用 insurance 补偿。
- 实际 slash 案例累计 < $5M · 但每个案例都提高了社区警惕 · 推动 audit + insurance pool 强化。

**Regulatory boundary**：
- SEC 在 2024 年多次提及“staking-as-a-service”接近 securities（已对 Coinbase · Kraken 采取措施）· restaking 是 staking 的 superset · 风险相同。
- EU MiCA 下 LST 可能被分类为 ART（asset-referenced token）· LRT 更复杂（底层是 LST · 上层叠加 restaking yield）· 监管路径不清晰。
- 日本 FSA 2025 公开表明 staking-as-a-service 是“ERS（Electronic Recordable Securities）”准入对象 · restaking 也将依此类推。
- 在机构客户（BNY · BlackRock · J.P. Morgan）进入 restaking 前，需要监管 clarity · 时间轴至少为 2027+。

**形式验证 / 工程质量**：
- EigenLayer 在 restaking 中 audit 最完整（6+ 独立 audit firm + slashing 启用前多轮）
- Lido CSM / stVaults 的 audit 深度为行业最高（7+ firm + Certora formal verification）
- Symbiotic / Karak / Mellow / EtherFi 仍在追赶 audit 覆盖 · 部分初期 audit 不包括 slashing logic

**Restaking 与 DAG-BFT / threshold consensus 的关系**：Restaking 使 AVS 无需新招募 validator 即可启动 · 但 AVS 自身的共识算法选择仍然重要（参见 [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]] 和 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]）。Espresso shared sequencer 使用 HotShot（DAG-BFT 变种）· Lagrange coprocessor 更接近 threshold signature 模型。AVS 的共识选择影响 operator 实际工作量 + 收益结构，并反向影响哪一个 restaking layer 更受 operator 欢迎。

**Validator 经济 4 变量的交叉**：参见 [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]] —— security budget · stake mobility · validator count · slashing severity 四个 4 变量在 restaking 层都会被改写。Restaking 将 stake mobility 从单一链扩展到 multi-AVS · 复用 validator count 而不是新招募 · 但复杂化 slashing severity（同一 ETH 在多个 AVS 中对应不同 slash 条件）。这就是 Vitalik 多次警告不应把 restaking 过度扩展到“应用层共识”的原因 —— 当 AVS 数超过 operator 监控带宽时，validator 经济变量不再 well-defined。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]
- [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/hyperlane-overview|Hyperlane overview]]
<!-- /wiki-links:managed -->

## 来源

- EigenLayer docs · https://docs.eigenlayer.xyz/
- Symbiotic docs · https://docs.symbiotic.fi/
- Karak docs · https://docs.karak.network/
- Mellow docs · https://docs.mellow.finance/
- EtherFi docs · https://docs.ether.fi/
- Lido docs · https://docs.lido.fi/
- EigenDA docs · https://docs.eigenda.xyz/
- Hyperlane docs · https://docs.hyperlane.xyz/
- Espresso docs · https://docs.espressosys.com/
- Lagrange docs · https://docs.lagrange.dev/
- Witness Chain docs · https://docs.witnesschain.com/
- DefiLlama restaking · https://defillama.com/protocols/Restaking
- L2Beat DA summary · https://l2beat.com/data-availability/summary
- Vitalik blog · "Don't overload Ethereum's consensus"（2023 公开 post）
