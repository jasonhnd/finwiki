---
title: Restaking 与 AVS 全景矩阵 · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM
aliases: [restaking avs landscape matrix, eigenlayer vs symbiotic vs karak matrix, restaking infrastructure comparison 2026, avs landscape eigenda hyperlane espresso lagrange witness, lrt etherfi mellow lido csm comparison]
domain: systems
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, restaking, eigenlayer, symbiotic, karak, mellow, etherfi, lido, csm, avs, eigenda, hyperlane, espresso, lagrange, witness-chain, lrt]
status: active
sources:
  - https://docs.eigenlayer.xyz/
  - https://docs.symbiotic.fi/
  - https://docs.karak.network/
  - https://docs.mellow.finance/
  - https://docs.ether.fi/
  - https://docs.lido.fi/
  - https://docs.eigenda.xyz/
  - https://docs.hyperlane.xyz/
  - https://docs.espressosys.com/
  - https://docs.lagrange.dev/
  - https://docs.witnesschain.com/
  - https://defillama.com/protocols/Restaking
  - https://l2beat.com/data-availability/summary
---

# Restaking 与 AVS 全景矩阵 · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM

## TL;DR

- 6 个 restaking infrastructure 在 2026-Q2 的 **TVL · restaking model · slashing · AVS economics · correlation risk · operator concentration · governance · audit · Lido overlap · regulatory exposure** 10 维度对照
- **Restaking model 三象限**:**Operator-delegated**(EigenLayer · Karak · Symbiotic)· **LRT vault aggregator**(EtherFi · Mellow · Renzo)· **Native protocol restaking**(Lido CSM · LST 自己提供 restake hook)
- **TVL 2026-Q2 估算**:EigenLayer ~$14B · Symbiotic ~$3.2B · EtherFi LRT(eETH)~$5.5B · Mellow LRT ~$1.8B · Karak ~$1.0B · Lido CSM ~$280M(early)
- **AVS landscape 五大**:**EigenDA**(~$120M revenue 2026 estimate · 多 ZK rollup 用户)· **Hyperlane**(ISM 借 EigenLayer/Symbiotic)· **Espresso**(shared sequencer · 接入 Polygon/zkSync/Caldera 等)· **Lagrange**(coprocessor + state proof)· **Witness Chain**(POI · 物理基础设施验证)
- 2025 EigenLayer slashing 正式启用 · 真实 slash 事件 ≤ 5 起 · 累计 < $5M(远低于早期担忧)· 但 correlation risk(rehypothecation)仍未充分定价
- **Lido stake 重叠率**:EigenLayer 中 ~25% TVL 来自 stETH restaking · Symbiotic 中 ~40% · Mellow 全部基于 LST 集合 —— Lido 是 restaking 生态的 "底层流动性源"
- 路由:[[systems/eigenlayer-overview]](核心)· [[exchanges/liquid-staking-restaking-cex-exposure]](LRT CEX 敞口)· [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · 2048 ETH validator]](机构 staking 路径)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer overview]] as the canonical anchor, [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism · Operator · Slashing · EIGEN 仲裁]] for the slashing + AVS economics depth, and [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]] for how new chains use restaking to launch security. For the validator economics meta-context, see [[systems/bft-validator-economy-overview|BFT validator economics overview]] and [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]. For consensus models that restaking touches, see [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]] and [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]. For the EIP-7251 institutional staking lane that interacts with restaking economics, see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]. For CEX exposure to LRT and the "liquid staking → restaking → CEX leverage" stack, see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX 敞口]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about Hyperlane / LayerZero / Wormhole as AVS consumers.

## Why this matrix matters

Restaking 在 2023-2024 是单一玩家 EigenLayer 的 "ETH crypto-economic security marketplace" 概念。2024-2025 演化为多协议竞争 —— Symbiotic 提供 multi-asset restaking(不只 ETH)· Karak 主打开发者 UX + universal restaking · Mellow 是 LRT vault aggregator · EtherFi 用 LRT(eETH)接管 LST 市场 · Lido 自己也通过 CSM(Community Staking Module)和 stVaults 进入。

对开发者(AVS 构建者 · 比如 [[systems/hyperlane-overview|Hyperlane]] / EigenDA / Lagrange)· 选哪个 restaking layer 决定:**operator pool 深度 · slashing 真实可执行性 · TVL backing 经济安全规模 · 治理可预测性**。对用户(stETH 持有者考虑 restake)· 选哪个 LRT(eETH · ezETH · pufETH · mevETH 等)决定:**收益分配 · slashing 风险敞口 · withdrawal 流动性 · CEX 是否上架**。

对监管(SEC / ESMA / FSA · 参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX 敞口]])· restaking 是否构成 "证券" / "投资合约" 是 2026 待裁决议题 · 不同协议的治理 + 收益结构有不同监管敞口。

本矩阵把 6 个 active restaking infrastructure 横向对照 · 10 维度 · 2026-Q2 数据快照。AVS landscape 单独一节 · 列出 5 大 AVS 经济画像。Stand-alone LRT(Renzo / Puffer / Kelp / Swell)未单独列入对照 · 但部分在 EtherFi / Mellow 分析中提及。

## Per-protocol sections

### EigenLayer

**Restaking model**:Operator-delegated(质押人选 operator · operator 选 opt-in 哪些 AVS)。支持 native ETH restaking(via EigenPod)· LST restaking(stETH · rETH · cbETH 等 8 种 strategy)· EIGEN token native restaking。

**TVL May 2026**:~$14B(估算 · 2025 高点曾达 $20B+ · 2026 因部分 LRT 退出 + 收益压缩有 mild correction)。

**Slashing implementation**:2025-Q2 主网启用 slashing。AVS 自定义 slashing 条件(参见 [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]])。真实 slash 事件 ≤ 5 起(2026-Q2)· 累计 slash 金额 < $5M(主要是 operator 配置错误 · 非恶意)。

**AVS economics**:~40 AVS active · 含 EigenDA · Hyperlane · Espresso · Lagrange · Witness Chain · AltLayer · Brevis · 等。Operator rewards 来自 AVS 付费(EIGEN + 各 AVS native token)· 年化 +1-3% 在 base ETH staking yield 之上。

**Correlation risk**:Rehypothecation 系数 2.5-3x(一笔 ETH 平均 opt-in 2.5-3 个 AVS)· Vitalik 多次警告 "system-wide slashing cascade" 风险。EIGEN inter-subjective dispute 是缓解机制但本身依赖 token holder vote(可被资本操控)。

**Operator concentration**:Top 5 operator 占 ~50% TVL(Coinbase Cloud · Figment · P2P · Stakefish · DSRV)· 其余分散到 ~200 operator。

**Governance**:EigenLabs(团队主导)· EIGEN token + Operating Token holders · Security Council 7-of-13。2025 EIGEN 投票上线后逐步分权。

**Audit**:Trail of Bits · ChainSecurity · OpenZeppelin · Sigma Prime · Code4rena · Cantina。slashing 启用前多轮独立 audit。

**Lido stake overlap**:~25% EigenLayer TVL 来自 stETH strategy(其余主要是 native ETH via EigenPod + cbETH · rETH)。

**Regulatory exposure**:SEC 对 EIGEN token 是否构成 security 未明确表态 · 2024 EigenLayer 主动延迟 EIGEN airdrop 给美国用户。EU MiCA 下 restaking yield 可能被归类为 "tokenized money market service" · 待裁决。

### Symbiotic

**Restaking model**:**Multi-asset restaking**(不只 ETH · 支持任何 ERC-20 · 包括 LST · 稳定币 · 项目 token)。Modular vault 架构 · vault curator 自定义 collateral + AVS opt-in 策略。

**TVL May 2026**:~$3.2B(2024-09 alpha launch · 2025 fast growth · 2026-Q1 是第二大 restaking · 部分 TVL 是非 ETH asset 因此与 EigenLayer 直接对比需调整)。

**Slashing implementation**:从 day 1 设计支持 vault-level slashing(2025-Q1 主网启用)。Operator slashed = 整个 vault collateral 受损 · 但 vault curator 可自定义 slashing 策略(比例 · 触发条件)。

**AVS economics**:~15 AVS active(2026-Q2)· 主推 Ethena USDe / sUSDe restake · Hyperlane ISM 之一 · Mellow vault deep integration · GearBox credit account · 等。Operator rewards 多样化(stablecoin · vault token · AVS native)。

**Correlation risk**:理论上比 EigenLayer 更高(多 asset class · slashing 触发条件复杂)· 但实际因为多元化 asset 可分散单一 ETH risk。Vault curator 选择是 risk 锚点。

**Operator concentration**:Top 5 operator ~60%(P2P · Kiln · Chorus One · Everstake · DSRV)· 集中度高于 EigenLayer。

**Governance**:Symbiotic Labs 团队主导 · 计划 2026-Q4 token + DAO governance。Vault curator 是事实上的 sub-governance(每个 vault 独立)。

**Audit**:OpenZeppelin · Sigma Prime · Cantina contest · 早期阶段 audit 覆盖少于 EigenLayer 但持续扩张。

**Lido stake overlap**:~40% TVL 来自 LST vault(stETH · rETH · wstETH · etc)。Mellow 是 Symbiotic 的主要 vault curator · 把 LRT 资金路由进 Symbiotic AVS。

**Regulatory exposure**:Multi-asset 让 Symbiotic 的监管定位更复杂(部分 vault 含稳定币 = 接近 money market 监管)· 但同时让单一 asset 监管事件影响有限。

### Karak

**Restaking model**:Universal restaking(支持 ETH · BTC · USDC · K2 是 Karak 自己的 L2)· 强调开发者 UX("any asset can secure any service")。

**TVL May 2026**:~$1.0B(2024 launch · 2025 growth 但慢于 Symbiotic · 2026 因 BTC restaking 模块 + K2 集成有上升)。

**Slashing implementation**:2025-Q3 启用 · 但实际 AVS 数量少 · 触发 slash 事件 ≤ 2 起。

**AVS economics**:~10 AVS active · 主要是 Karak 团队自己 incubate 的 service(K2 L2 sequencer / DA)· 第三方 AVS 较少。

**Correlation risk**:Multi-asset 模式下 correlation 复杂 · 但 TVL 规模小 · 系统性 risk 暂时低。

**Operator concentration**:Top 5 operator ~70%(Karak 自己运营 + 少数合作伙伴)。

**Governance**:Karak Foundation 主导 · KAR token 上线计划 2026-Q3-Q4。

**Audit**:Sigma Prime · Halborn · Cantina(部分)。

**Lido stake overlap**:~20% TVL 来自 stETH(Karak BTC + 稳定币 restaking 占更大比例)。

**Regulatory exposure**:BTC restaking 触发 SEC 对 "BTC yield product" 的关注。USDC restaking 接近 money market 监管。整体监管 surface 比 EigenLayer 更宽。

### Mellow

**Restaking model**:LRT vault aggregator(不是底层 restaking · 是构建在 EigenLayer + Symbiotic 之上的 vault layer)· Mellow vault 用户存 stETH / wstETH · vault 自动 restake 到 EigenLayer/Symbiotic AVS · 收益分配 + slashing 风险 pooled。

**TVL May 2026**:~$1.8B(2024-Q4 launch · 2025-2026 fast growth · 是 Symbiotic 最大 vault curator · 同时也 deploy 部分 EigenLayer vault)。

**Slashing implementation**:Vault 层 socialize slashing(一个 AVS slash 由整个 vault 持有人按份额承担)· 用户隐性接受 portfolio slashing risk。

**AVS economics**:Mellow vault 选择多 AVS pool 优化 risk-adjusted yield · 用户拿到的是 "mixed AVS rewards" basket。

**Correlation risk**:最高的层 —— vault 同时持仓多 AVS · 单 vault 内 slash cascade 风险显著。Mellow 通过 vault 多元化(不同 AVS pool 不同 vault)缓解。

**Operator concentration**:借用 EigenLayer / Symbiotic operator 集合 · 自身不引入新集中度。

**Governance**:Mellow DAO + MLW token(2025-Q2 上线)· vault curator team 是 sub-governance。

**Audit**:Sigma Prime · Spearbit · Code4rena · 与 Symbiotic 联合 audit。

**Lido stake overlap**:~100%(Mellow vault 基本全部基于 stETH / wstETH / LST 集合)· 是 Lido → restaking 的最大单一路径。

**Regulatory exposure**:Vault 结构接近 "managed fund" · 在 EU MiCA / SEC 下可能被归类为集合投资 scheme。Mellow 主动避免 US 用户。

### EtherFi LRT (eETH / weETH)

**Restaking model**:LST + restaking 一体化 —— 用户存 ETH · 获得 eETH(rebasing)或 weETH(wrapped non-rebasing)· EtherFi 把底层 ETH 同时 stake(beacon chain validator)+ restake(EigenLayer + Symbiotic + Karak partial)。是 LRT 市场龙头。

**TVL May 2026**:~$5.5B(2024 高点 $7B · 2026 mild correction)· 是最大 LRT。

**Slashing implementation**:EtherFi 自己运营节点(节点运营商网络 · 严格筛选)· slash 风险由 EtherFi insurance fund + 协议 reserve 承担。用户面对 eETH 价格反映 slash 损失。

**AVS economics**:EtherFi 选择把 ETH restake 给主流 AVS(EigenDA · Hyperlane · Espresso · Lagrange)· 收益反映在 eETH yield(年化 ~4-6% · 含 base staking 3-4% + restaking premium 1-2%)。

**Correlation risk**:eETH 持有人天然 exposed 到 EigenLayer + Symbiotic + Karak 三 layer slash cascade。EtherFi insurance fund ~$50M 是 first-loss buffer。

**Operator concentration**:EtherFi 节点网络 ~200 operator · 部分由 EtherFi 直接运营 · 部分外包(Pier Two · ChainSafe · Validation Cloud 等)。

**Governance**:EtherFi DAO + ETHFI token(2024-Q2 上线)· Foundation + Security Council 7-of-15。

**Audit**:Spearbit · Halborn · Certora · Hats Finance bug bounty。

**Lido stake overlap**:EtherFi 是 Lido 的直接竞争对手(LST market share)· EtherFi 不用 stETH(自己跑 validator)· 但 EtherFi 部分 stake 到 EigenLayer 时与 stETH 在同一 AVS pool。

**Regulatory exposure**:LRT 是 SEC 重点关注对象(2024 SEC 主席 Gensler 公开提及 "staking + restaking = potential security")。EtherFi 主动 geo-fence 美国零售用户。

### Lido CSM (Community Staking Module)

**Restaking model**:Lido 自己长期不进入 restaking(Lido v2 治理多次否决)· 但 2024 推出 CSM(Community Staking Module)允许小型 operator 加入 Lido validator set · 同时探索 stVaults(2026 计划)让 stETH 持有人 opt-in restaking。Lido v3(2026 roadmap)正式引入 restaking hook。

**TVL May 2026**:~$280M(CSM early adoption · 2026 Q3-Q4 stVaults 上线后预计快速增长)。整体 Lido stETH TVL ~$32B(restaking 部分 < 1%)。

**Slashing implementation**:CSM operator 自带 bond(2-4 ETH)作为 collateral · slash 优先扣 bond · 不足部分由 Lido insurance fund 承担。stVaults restaking slash 由 vault 用户按份额承担。

**AVS economics**:Lido stVaults 计划支持 EigenLayer + Symbiotic 主流 AVS · 但 Lido DAO 严格控制 AVS 白名单(只接入审计完整 + 治理稳定的)。

**Correlation risk**:Lido 设计哲学是 "minimize correlation" · stVaults opt-in 后用户隐性承担 · 但 Lido DAO 通过 AVS 白名单 + 浮动 cap 限制。

**Operator concentration**:Lido 主集合 ~30 operator(机构)+ CSM ~200 小 operator。CSM 是 decentralization 改进 · 引入长尾 home staker。

**Governance**:Lido DAO + LDO token + 全民 referendum · governance 复杂度最高(任何 AVS 接入 stVaults 需 LDO 投票通过)。

**Audit**:Sigma Prime · ChainSecurity · OpenZeppelin · Certora · Statemind · MixBytes · audit 覆盖率行业最深。

**Lido stake overlap**:Lido 是 stETH 发行方 · "Lido stake overlap" 在此 = 100%。stETH 在 EigenLayer / Symbiotic / Mellow / EtherFi 二次 restaking 占整个 restaking 生态 25-40% · Lido 是事实上的 restaking 流动性源(参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX 敞口]])。

**Regulatory exposure**:Lido DAO 治理结构在 SEC 视角下接近 "decentralized issuer" · 但 LDO token 持有人投票 + 治理收益分配可能构成 security。EU MiCA 下 stETH 是否构成 "asset-referenced token" 待裁决。

## AVS landscape — 5 大 AVS 经济画像

| AVS | 类型 | 主要 backing | 收入估算 2026 | TVL backing | 客户 |
|---|---|---|---|---|---|
| **EigenDA** | Data Availability | EigenLayer | ~$120M ARR | ~$6B ETH | Mantle · Movement · Cyber · Rivalz · 多 ZK Stack hyperchain |
| **Hyperlane** | Cross-chain messaging ISM | EigenLayer + Symbiotic + 自建 | ~$30M ARR(messaging fee 分润) | ~$1.5B ETH(EigenLayer ISM) + Symbiotic 部分 | Eclipse · Celestia · Renzo · 多 app-chain |
| **Espresso** | Shared sequencer | EigenLayer | ~$15M ARR(early) | ~$800M ETH | Polygon zkEVM · zkSync ZK Stack · Caldera · AltLayer rollup-as-a-service |
| **Lagrange** | Coprocessor + state proof | EigenLayer | ~$8M ARR | ~$500M ETH | LayerZero · Polyhedra · 多 DeFi protocol |
| **Witness Chain** | POI(Proof of Inference)/ DePIN 验证 | EigenLayer | ~$5M ARR(experimental) | ~$200M ETH | DePIN 项目 + AI inference verification |

**AVS 经济模式两类**:
- **Direct fee**:用户 / 客户付费(EigenDA 客户付 DA fee · Hyperlane 客户付 messaging fee)→ 分润给 operator
- **Token incentive**:AVS 自带 token · 早期 emission 给 operator 作为 bootstrapping(Espresso · Lagrange · Witness Chain)

**Rehypothecation 影响**:Top 3 AVS(EigenDA · Hyperlane · Espresso)都主要从 EigenLayer 拉 backing · 单笔 ETH 同时 secure 3 个 AVS 是常态。Vitalik 警告的 "cascade risk" 主要指这种情况。

## Big comparison matrix table

**6 个 restaking infrastructure × 10 维度对照**(2026-Q2 状态):

| Protocol | Restaking Model | TVL May 2026 | Slashing | AVS Economics | Correlation Risk | Operator Concentration | Governance | Audit | Lido Overlap | Regulatory |
|---|---|---|---|---|---|---|---|---|---|---|
| **EigenLayer** | Operator-delegated · native ETH+LST+EIGEN | ~$14B | 2025-Q2 启用 · ≤5 events · <$5M cumulative | ~40 AVS · EIGEN+AVS token rewards · +1-3% on base | Rehypothecation 2.5-3x · cascade 担忧 | Top 5 ~50% | EigenLabs+EIGEN+SC 7/13 | Trail of Bits · ChainSecurity · OZ · Sigma Prime · C4 · Cantina | ~25% stETH | SEC EIGEN security 未表态 · EU MiCA 待裁决 |
| **Symbiotic** | **Multi-asset**(ETH+LST+stablecoin+token)· modular vault | ~$3.2B | Day 1 design · 2025-Q1 启用 · vault-level | ~15 AVS · stablecoin/vault/AVS token rewards | 复杂多 asset · vault curator 锚定 | Top 5 ~60% | Symbiotic Labs · 2026 Q4 token+DAO | OZ · Sigma Prime · Cantina · 早期阶段 | ~40% stETH(Mellow vault 主路径) | Multi-asset 监管 surface 复杂 |
| **Karak** | Universal(ETH+BTC+USDC)· K2 L2 集成 | ~$1.0B | 2025-Q3 启用 · ≤2 events | ~10 AVS · Karak-incubated 为主 | Multi-asset 复杂 · TVL 小 risk 暂低 | Top 5 ~70%(集中度高) | Karak Foundation · KAR 2026 Q3-Q4 | Sigma Prime · Halborn · Cantina 部分 | ~20% stETH | BTC restaking SEC 关注 · USDC 接近 MM 监管 |
| **Mellow** | **LRT vault aggregator**(over EigenLayer+Symbiotic)· socialize slashing | ~$1.8B | Vault-level socialize | Multi-AVS pool basket rewards | 最高(vault 内 cascade) | 借 underlying · 不引入新集中 | Mellow DAO+MLW 2025-Q2 · vault curator sub-gov | Sigma Prime · Spearbit · C4 · 与 Symbiotic 联合 | ~100%(基本全 LST) | 接近 managed fund · 避美国 |
| **EtherFi LRT** | **LST+restaking 一体化** · 自营节点+多 layer restake | ~$5.5B(最大 LRT) | EtherFi 节点责任 · insurance fund first-loss | EigenDA+Hyperlane+Espresso+Lagrange · 年化 4-6% | 三 layer slash cascade · insurance ~$50M buffer | EtherFi 网络 ~200 operator | EtherFi DAO+ETHFI 2024 Q2 · SC 7/15 | Spearbit · Halborn · Certora · Hats bounty | Lido 竞争对手 · 自营 validator · AVS pool 间接重叠 | LRT 是 SEC 重点关注 · geo-fence US 零售 |
| **Lido CSM / stVaults** | CSM home staker + stVaults restaking hook(2026 计划) | ~$280M CSM · stETH 整体 $32B | CSM operator bond first · insurance backup · stVaults 用户承担 | 严格 AVS 白名单(DAO 投票) | Lido 哲学 minimize · AVS cap 限制 | CSM ~200 小 operator + 主集合 30 | Lido DAO+LDO+referendum(治理最重) | Sigma Prime · ChainSecurity · OZ · Certora · Statemind · MixBytes · 行业最深 | **100%(Lido 自己)** · stETH 是 restaking 流动性源 | LDO security 待裁决 · stETH MiCA ART 待裁决 |

**矩阵读法**:
- **Restaking model 三象限对照**:operator-delegated(EigenLayer · Karak · Symbiotic)→ 直接接收质押 · vault aggregator(Mellow)→ 包装其他 restaking · LST+restaking 一体化(EtherFi · Lido stVaults)→ 用户拿 LRT token
- **TVL vs operator concentration tradeoff**:EigenLayer TVL 最大 · operator 分散度最高 · Karak TVL 小 · 集中度高 · Mellow 借他人 operator 不引入新集中
- **Lido overlap 是隐藏的系统性 risk** —— stETH 在 EigenLayer / Symbiotic / Mellow / EtherFi 二次 restaking · 如果 stETH 价格脱锚或 Lido protocol incident · 整个 restaking 生态同步受影响
- **Slashing 真实状态**:启用 1+ 年后实际 slash 事件 ≤ 10 起 · 累计金额 < $10M · 远低于 Vitalik 警告的 "$100M+ cascade" 场景 · 但 sample size 太小 · 不能下结论说 risk 已定价

## Boundary cases / future trajectory

**Restaking 与 EIP-7251 的交互**(参见 [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]):
- EIP-7251 把 validator max effective balance 从 32 → 2048 ETH · 让大机构合并 validator 降低 operational cost。
- 机构 validator 可同时 restake 大额 ETH · 进一步推高 operator concentration。EigenLayer 已在 2025 看到 top 5 operator 占比微升。
- 长期 institutional staking(SWIFT custodian · BNY · Coinbase Custody · BlackRock · 参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX 敞口]])进入 restaking · TVL 可能从 2026 的 $20B 级别推到 2027-2028 的 $50B+。

**Lido v3 restaking 接入**:Lido DAO 2026-2027 stVaults 主线开发 · 一旦接入 · stETH 直接成为 restaking primitive · 不需要二次包装。这会:
- 让 Mellow / EtherFi 部分价值被吸收(stETH 持有人直接 opt-in · 不需要中介 vault)
- 但 Lido 严格 AVS 白名单也限制了 long-tail AVS bootstrapping
- 长期 Lido + EigenLayer 形成事实上的 duopoly · Symbiotic / Karak / Mellow / EtherFi 在边缘细分

**AVS 商业模式演化**:
- **2024-2025 阶段**:大部分 AVS 靠 token incentive bootstrapping(发自家 token 给 operator)· 真实 fee revenue 少。
- **2026 阶段**:头部 AVS(EigenDA · Hyperlane · Espresso)开始有 real fee revenue · 但 AVS-to-operator 分润比例不一(EigenDA 90%+ 给 operator · Hyperlane 50/50 · Espresso 还在 bootstrapping)。
- **2027+ 趋势**:AVS market 可能分化为 "DA 商品化"(EigenDA / Celestia / Avail 价格战)和 "差异化服务"(Espresso shared sequencer · Lagrange coprocessor · Witness Chain DePIN 验证)。

**Rehypothecation 系统性 risk**:
- Vitalik 2024 多次警告 EigenLayer 不应过度扩展到 "应用层共识" —— 担心 single ETH 同时 secure 5+ AVS 时 slashing cascade。
- 实际数据:2026-Q2 平均 rehypothecation 系数 2.5-3x · 远低于理论 max(任意 AVS 数)· 因为大部分 ETH 只 opt-in 2-3 个头部 AVS。
- 但 EtherFi / Mellow 等 LRT vault 默认 opt-in 多 AVS · 用户隐性承担 cascade。Mellow vault 内部多元化是缓解 · 但跨 vault correlation 仍存在(同一 operator 同时跑多 AVS)。

**Symbiotic 多 asset 战略 vs EigenLayer ETH-pure**:
- EigenLayer 坚持 ETH(+LST)纯度 · 因为 Ethereum 社区共识 + ETH 是最深的 crypto-economic security pool。
- Symbiotic 接受任何 asset(包括稳定币 · 项目 token)· 让 AVS 自选 risk profile。
- 长期 Symbiotic 在 "non-ETH-native AVS"(BTC 跨链 · DePIN · AI inference)可能拿到 EigenLayer 拿不到的客户;EigenLayer 在 "ETH-aligned AVS"(以 ETH-native dApp 为客户)保持优势。

**Slashing case study 收集中**:
- 2025-Q3 一次 EigenLayer operator(中型节点)因 misconfigure validator key 触发 ~$200K slash · operator 自付补偿。
- 2025-Q4 EigenDA 一次 quorum 不足事件触发 ~$80K 集体 slash · 由 AVS 自己 mitigation。
- 2026-Q1 Symbiotic 一次 vault 配置 bug 导致 ~$1M slash · vault curator 用 insurance 补偿。
- 真实 slash 案例累计 < $5M · 但每次都引起社区警觉 · 推动 audit + insurance pool 加强。

**Regulatory boundary**:
- SEC 2024 多次提及 "staking-as-a-service" 接近 securities(已对 Coinbase · Kraken 采取行动)· restaking 是 staking 的 superset · 同样 risk。
- EU MiCA 下 LST 可能被归类为 ART(asset-referenced token)· LRT 更复杂(底层是 LST · 上层叠 restaking yield)· 监管路径不清晰。
- 日本 FSA 2025 公开表态 staking-as-a-service 属 "ERS(Electronic Recordable Securities)" 准入对象 · restaking 跟进。
- 机构客户(BNY · BlackRock · J.P. Morgan)进入 restaking 之前需要监管 clarity · 时间表至少 2027+。

**形式化验证 / 工程质量**:
- EigenLayer 是 restaking 中 audit 最完整的(6+ 独立 audit firm + slashing 启用前多轮)
- Lido CSM / stVaults 在 audit 深度上行业最高(7+ firm + Certora formal verification)
- Symbiotic / Karak / Mellow / EtherFi 在 audit 覆盖率上仍在追赶 · 部分早期 audit 不含 slashing logic

**Restaking 与 DAG-BFT / threshold consensus 的关联**:Restaking 让 AVS 可在不重新募 validator 的前提下启动 · 但 AVS 自身的 consensus 算法选型仍重要(参见 [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]] 与 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]])。Espresso shared sequencer 用 HotShot(DAG-BFT 变种)· Lagrange coprocessor 倾向 threshold signature 模型。AVS 共识选择会影响 operator 实际工作量 + 收益结构 · 进而反向影响哪个 restaking layer 更受 operator 欢迎。

**Validator 经济四变量交叉**:参见 [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]] —— security budget · stake mobility · validator count · slashing severity 四变量在 restaking 层都被改写。Restaking 把 stake mobility 从单 chain 扩到 multi-AVS · 把 validator count 复用而非新募 · 但 slashing severity 复杂化(单 ETH 多 AVS 不同 slash 条件)。这是为什么 Vitalik 多次警告 restaking 不应过度扩展到 "应用层共识" —— 当 AVS 数量超过 operator 监控带宽 · validator 经济变量不再 well-defined。

## Related
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
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX 敞口]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/hyperlane-overview|Hyperlane overview]]
<!-- /wiki-links:managed -->

## Sources

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
- Vitalik blog · "Don't overload Ethereum's consensus"(2023 公开 post)
