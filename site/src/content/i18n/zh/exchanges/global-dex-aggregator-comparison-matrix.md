---
source: exchanges/global-dex-aggregator-comparison-matrix
source_hash: 6dcba8b3b6f84291
lang: zh
status: machine
fidelity: ok
title: "全球 DEX Aggregator 比较矩阵 · 8大 Aggregator 横向对照"
translated_at: 2026-05-31T03:19:56.366Z
---

# 全球 DEX Aggregator 比较矩阵 · 8大 Aggregator 横向对照

## TL;DR

- 以 2026-Q2时点,从 **chain coverage · routing model · MEV protection · gas relay · daily volume · fee model · partner integration · governance token** 的 8个轴,对 8大 DEX aggregator 进行对照
- **Routing model 3大象限**:**on-chain pathfinder**(1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX)· **RFQ (Request-For-Quote / market maker quote)**(0x Protocol · Matcha · OKX DEX 也含 RFQ)· **batch auction**(CowSwap / CoW Protocol)— Jupiter 是 Solana ecosystem 专用的 SVM aggregator
- **Chain coverage 的分化**:EVM-heavy(1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX)vs Solana-only(Jupiter)· 真正的 multi-VM aggregator 尚不存在(OpenOcean 是同时覆盖 EVM + Solana 的少数例子之一,但 Solana 路径实质上搭乘 Jupiter sub-routing)
- **MEV protection 的 3大机制**:**CoW Protocol 的 batch auction + uniform clearing price**(结构上消除 MEV)· **1inch Fusion / 0x Settler 的 intent-based + signed quote**(几乎抵消 MEV)· **flashbots private mempool** 封装(部分 aggregator 已整合)— Jupiter 在 Solana 上的 MEV 以 Jito tip 模式缓解
- **Daily volume**(2026-Q2估算):1inch ~$1.5-2B · Jupiter ~$1-2B(Solana 的 70%+ 的 routing 经此)· 0x/Matcha ~$0.8-1.2B · CowSwap ~$0.4-0.6B · KyberSwap / OKX DEX ~$0.3-0.5B · ParaSwap / OpenOcean 各 ~$0.2-0.4B
- **Governance token**:1INCH · ZRX · COW · JUP · KNC · OKB(OKX 本体的 token）· PSP(2024 launch 的 ParaSwap）· OpenOcean OOE · 各自的治理模式与 fee distribution 差异巨大
- 关联:[[exchanges/global-dex-major-five-comparison|global DEX 5強]](DEX 比较)· [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX]](Solana 6层)· 本矩阵专注于 8 aggregator 横向

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]] for the underlying DEX pool layer, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana SVM aggregator/DEX stack, [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]] for the perp-only segment, and [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] for chain-specific DEX dynamics. For peer Solana DEX deep dives see [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]. For the AMM evolutionary tree see [[exchanges/amm-design-evolution|AMM design evolution]] and [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]. For MEV / order-flow architectural context see [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]. For broader CEX 競争 framing see [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] and [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem]]. For regulatory framing see [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]].

## 为何需要这个矩阵

DEX aggregator 已从 2020-2021年 的单纯 pathfinder,在 2024-2026年 进化为 **intent-based routing + MEV protection + cross-chain swap**。aggregator 在 **routing model 的设计** 上大幅分化,用户获取「best price」的路径因 aggregator 而根本不同。

然而 aggregator 的比较信息是分散的 —— 1inch 官方强调自家 RFQ + Fusion,CoW Protocol 强调以 batch auction 消灭 MEV,Jupiter 强调在 Solana 的支配率。矩阵的价值在于 **以同一基准从 8个轴横向比较 8 aggregator**,使交易者 / 交易所整合伙伴 / 机构的路由选定能够选出「最适合自身用例的 aggregator」。

注意:aggregator 搭乘在基础 DEX(Uniswap / Curve / Balancer / Solana Raydium / Orca 等)的流动性池之上,因此 aggregator 竞争成为「不持有自家 DEX 的 pure routing layer」的元博弈。CowSwap (CoW Protocol)与 1inch Fusion 在拥有自家 solver / market maker 网络这一点上颇为例外,意图占据「中间层以上」。

## Per-aggregator sections

### 1inch (1INCH · v6 + Fusion)

**Routing model**:**On-chain Pathfinder + Fusion intent layer 的二层**。Pathfinder 算法从全部 DEX(Uniswap v2/v3/v4 + Curve + Balancer + Sushiswap + 100+ AMM)进行路径探索,优化 gas + slippage。**Fusion** 是 2023年 launch 的 intent-based 竞标层,用户提交 signed order,resolver(MEV searcher / market maker)竞争竞标,1inch 本身仲介 order matching。

**Chain coverage**:**EVM-only**(Ethereum + Arbitrum + Optimism + Polygon + BNB Chain + Base + Avalanche + zkSync Era + 等 11+ chain）。Solana / Aptos / Sui 不在范围内(刻意 EVM-first)。

**MEV protection mechanism**:Fusion intent-based 模式下,resolver 在 swap 执行时的 MEV kept minimal(resolver 竞争使 MEV value 退还给 user 的激励)· classical pathfinder 模式则 MEV exposed。有 Optional flashbots integration。

**Gas relayer support**:Fusion 模式下 resolver 支付 gas,user 为 gasless。Pathfinder 模式为 user 自付 gas。

**Daily volume**:~$1.5-2B/日(2026-Q2估算 · DefiLlama aggregators 板)。**EVM aggregator 的领跑者** 地位。

**Fee model**:Pathfinder 为 no fee(仅 LP fee）· Fusion 中从 resolver 收取手续费(small spread）· 经 Partner integration 可设定 referral fee。

**Partner integrations**:经 MetaMask Swaps(MetaMask 将 1inch 采用为 default routing provider 之 1）· Coinbase Wallet · TrustWallet 等多数。

**Governance token**:**1INCH**(2020年launch · 向 veToken 模式 2022年迁移 · veINCH 投票决定 fee distribution + resolver whitelist)。

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**Routing model**:**RFQ-first hybrid**。0x Protocol 从 **professional market maker(Wintermute · GSR · Jane Street 等)取得 signed quote**,同时也比较 on-chain liquidity 以选出最优。Settler(2024年launch)实现 MEV-resistant smart router。Matcha 是将 0x Protocol 面向消费者封装的 UI。

**Chain coverage**:**EVM 多链**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + 等 9+)。

**MEV protection mechanism**:RFQ quote 为 private signed · MEV searcher 无法前置 sandwich(maker price commit 的瞬间即 execute)。Settler 以 permit2 + smart router 也保护 classical AMM swap。

**Gas relayer support**:经 0x API user 自付 gas · 部分 partner(Coinbase Wallet 等)以 meta-transaction 支援 gasless。

**Daily volume**:~$0.8-1.2B(Matcha + 0x API 经此的合计)。professional market maker liquidity 的比例高于其他 aggregator。

**Fee model**:0.15% protocol fee 为标准(2024-2025阶段性导入）· 可设定 partner referral fee。

**Partner integrations**:**Coinbase Wallet swap** · **MetaMask Swaps(co-provider)** · **Robinhood crypto swap backend**(2024年发布）· Brave Wallet 等。是企业整合最多的 aggregator 之 1。

**Governance token**:**ZRX**(2017年launch · ZRX staking + governance · 2024年fee distribution 讨论推进中)。

### CowSwap / CoW Protocol (COW · Batch Auction)

**Routing model**:**Batch auction with uniform clearing price**。用户发送 intent(sell X for at least Y）· ~12秒的 batch window 内全部 order 以 CoW (Coincidence of Wants)撮合 · 余量由 solver 在外部 AMM/RFQ settle。以 **Uniform clearing price** 使同一 token pair 的全部 order 以同价成立,故 MEV(sandwich + frontrunning)在结构上无法成立。

**Chain coverage**:**EVM**(Ethereum mainnet + Gnosis Chain + Arbitrum + Base · 截至 2026-Q2)。Multi-chain 扩张较其他 aggregator 保守。

**MEV protection mechanism**:**结构上 MEV 不存在** —— batch auction 模式下 order 不被逐一 execute,故 sandwich 攻击物理上无法成立。Solver 竞争使 MEV value 转化为 user surplus。

**Gas relayer support**:**完全 gasless** —— solver 负担 gas(从 swap output 扣除）· user wallet 仅需签名。

**Daily volume**:~$0.4-0.6B(2026-Q2)。成交量小于其他 aggregator,但 **1每笔交易的规模更大**(机构 + 大额 retail 为求 MEV-protected swap 而来)。

**Fee model**:0.1-0.5% solver fee(从 user surplus 收取的透明方式）· CowDAO fee switch 于 2024年enable,向 COW staker 分配 reward。

**Partner integrations**:**Safe (Gnosis Safe) native swap integration**(机构 multisig 在 CoW 上 swap）· Argent Wallet · Rabby Wallet · 对 MEV-protection 需求高的 user base 强势。

**Governance token**:**COW**(2023年launch · COW staking 收取 fee + governance)。

### Jupiter (JUP · Solana only)

**Routing model**:**SVM (Sealevel) native aggregator** —— 整合 routing Solana 的 Raydium / Orca / Meteora / Phoenix / Lifinity / Saber / 等 25+ DEX。Jupiter v6整合 transaction simulation + multi-hop optimization + just-in-time liquidity。

**Chain coverage**:**Solana 单独**(刻意)。Cross-chain 以 Jupiter Bridge(经 Wormhole)为另一 product。

**MEV protection mechanism**:Solana 与 Ethereum 不同的 MEV 环境 —— 将 Jupiter swap 放入 **Jito Bundle**(参见 [[exchanges/dex-jito-solana|Jito Solana]]）以 Jito validator tip 抑制 sandwich 攻击。Jupiter 以 **Slippage Bot Protection** 在价格大幅波动时 reject transaction。

**Gas relayer support**:Solana 的 gas fee 为 $0.001量级,极低 —— gasless 必要性低于 EVM。Jupiter 以 user 自持 SOL 为前提。

**Daily volume**:**~$1-2B(Solana DEX 整体交易量的 70%+ 经 Jupiter routing）**。是 Solana ecosystem 事实上的入口。

**Fee model**:0% protocol fee(仅 LP fee + Jito tip）· 经 Partner integration 可设定 referral。

**Partner integrations**:Phantom Wallet · Solflare Wallet · Backpack(整个 Solana wallet 生态的 default swap）· Jupiter LST (Liquid Staking Token)与 Jupiter Perp 亦在扩张。

**Governance token**:**JUP**(2024-01 launch · Solana 史上最大级的 retroactive airdrop · JUP staking + governance)。

### OpenOcean (OOE · multi-VM)

**Routing model**:**Multi-VM pathfinder** —— EVM aggregator(1inch 风格的 pathfinder)+ Solana sub-routing(有时内部 call Jupiter API)+ 也覆盖 Aptos / Sui 的 Move VM AMM。**唯一真正的 multi-VM aggregator**。

**Chain coverage**:**EVM + Solana + Aptos + Sui + TON 共 20+ chain**。chain coverage 数最多。

**MEV protection mechanism**:Flashbots Protect integration(EVM）· Jito Bundle integration(Solana）· 协议层无 MEV 消灭,但对各 chain 的 MEV mitigation 进行 pass-through。

**Gas relayer support**:Chain-specific —— EVM 上部分 meta-transaction · Solana 上 gas 本就低。

**Daily volume**:~$0.2-0.4B(2026-Q2)。chain coverage 广,但各 chain 的成交量小于其他 EVM-specialist。

**Fee model**:0.1% protocol fee · partner referral fee。

**Partner integrations**:整合于各 chain 的 wallet(MetaMask · Phantom · Pontem · Suiet 等)多数 · cross-chain swap 功能(经 LayerZero / Wormhole)为差异化点。

**Governance token**:**OOE**(2021年launch · staking + governance)。

### ParaSwap (PSP · pathfinder + RFQ hybrid)

**Routing model**:**Pathfinder + RFQ hybrid** —— 自家 ParaSwapPool(提供 market maker RFQ)+ 外部 AMM pathfinder · Delta(2024年launch 的 intent-based layer)实现 gasless intent swap。

**Chain coverage**:**EVM**(Ethereum + Arbitrum + Optimism + Polygon + Base + Avalanche + BNB Chain + zkEVM 等 11+ chain)。

**MEV protection mechanism**:Delta intent layer 进行 MEV mitigation · classical pathfinder 模式则 MEV exposed · 较 1inch / CowSwap 的 MEV 消灭偏弱。

**Gas relayer support**:Delta 为 gasless · classical pathfinder 为 user gas。

**Daily volume**:~$0.2-0.4B(2026-Q2)。隐于 1inch / 0x 之影,市场份额呈减少趋势。

**Fee model**:Free pathfinder · 从 Delta 收 protocol fee · partner referral fee。

**Partner integrations**:整合于 Argent · Ledger Live · Zerion 等 retail wallet。

**Governance token**:**PSP**(2021年launch · 2024年fee distribution model 升级 · sePSP staking)。

### KyberSwap (KNC · Aggregator + own AMM)

**Routing model**:**KyberSwap Aggregator(pathfinder)+ Kyber Elastic(自家 concentrated liquidity AMM)的双轨**。Aggregator 同时 route 外部 AMM + 自家 Elastic。

**Chain coverage**:**15+ chain**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + Linea + zkSync + Mantle + 等)。

**MEV protection mechanism**:在 2023年的 hack 后对核心 router 大幅重新审计 · 未内置 MEV protection layer · 用户 MEV exposed。

**Gas relayer support**:Limited —— 以 user 自付 gas 为前提。

**Daily volume**:~$0.3-0.5B(2026-Q2)。

**Fee model**:0% aggregator fee · Kyber Elastic LP fee(swap fee from pool)。

**Partner integrations**:Krystal Wallet · MetaMask 等。在 Vietnam / SEA 市场强势。

**Governance token**:**KNC**(2017年launch · 2022年migration · KNC staking + governance · KyberDAO)。

**Note**:2023-11 KyberSwap Elastic 曾遭受 **$48M exploit** 的历史(complex AMM tick liquidity vulnerability）· 修复后 TVL 仍未恢复。Aggregator 持续,但自家 Elastic 实质上处于 wind-down 状态。详情参见 [[exchanges/global-dex-major-five-comparison|global DEX 5強]] 与 peer。

### OKX DEX Aggregator (OKB · 中心化背书)

**Routing model**:**On-chain pathfinder + RFQ hybrid** —— 整合由 OKX(CEX)背书的 RFQ liquidity · 外部 AMM + OKX Spot order book 的 hybrid。OKX Wallet 内置的 default swap。

**Chain coverage**:**EVM + Solana + TON + Aptos + Sui 共 20+ chain**。凭 CEX backed 的优势,chain expansion 快。

**MEV protection mechanism**:Partial —— 经 OKX RFQ liquidity 为 MEV-resistant · 经 external AMM 则 MEV exposed。

**Gas relayer support**:经 OKX Wallet 以 OKX Pay 整合部分 gasless。

**Daily volume**:~$0.3-0.5B(2026-Q2)。凭 CEX backed 的品牌认知与 OKX Wallet 用户基础,稳步成长中。

**Fee model**:~0.1% protocol fee · 在 OKX ecosystem 内联动可减免。

**Partner integrations**:OKX Wallet(default）· 与 OKX CEX 的无缝联动(on-chain swap → CEX deposit)。

**Governance token**:**OKB**(OKX 整体的 token · 交易手续费 discount + governance · 无 DEX 专用 token)。

## Big comparison matrix table

**8 aggregator × 8轴对照**(2026-Q2状态):

| Aggregator | Routing model | Chain coverage | MEV protection | Gas relayer | Daily volume (估算) | Fee model | Partner integrations | Governance token |
|---|---|---|---|---|---|---|---|---|
| **1inch** | Pathfinder + Fusion intent | **EVM 11+** | Fusion intent (resolver competition) + Flashbots opt-in | Fusion: solver pays · Pathfinder: user | **~$1.5-2B** | Free pathfinder · Fusion small spread | MetaMask Swaps default · Coinbase Wallet · Trust | **1INCH** (veINCH) |
| **0x / Matcha** | RFQ-first hybrid (Settler smart router) | EVM 9+ | RFQ signed quote (private) + Settler MEV-resist | Partial meta-tx via partners | ~$0.8-1.2B | 0.15% protocol fee | **Coinbase Wallet · MetaMask co-provider · Robinhood backend** | **ZRX** (staking) |
| **CowSwap / CoW Protocol** | **Batch auction + uniform clearing price** | EVM (Eth + Gnosis + Arb + Base) | **Structurally MEV-free** (batch CoW + uniform price) | **Fully gasless** (solver pays) | ~$0.4-0.6B (high avg ticket) | 0.1-0.5% solver fee · CowDAO fee switch on | **Safe native swap** · Argent · Rabby | **COW** (staking) |
| **Jupiter** | Solana SVM native aggregator (25+ Solana DEX) | **Solana only** | Jito Bundle integration + slippage bot protect | Low gas baseline (Solana ~$0.001) | **~$1-2B (70%+ Solana DEX routing)** | 0% protocol fee | **Phantom · Solflare · Backpack** (all Solana wallet default) | **JUP** (2024 airdrop) |
| **OpenOcean** | Multi-VM pathfinder (EVM + Solana + Aptos + Sui + TON) | **20+ chain across multi-VM** | Pass-through (Flashbots EVM · Jito Solana) | Chain-specific partial | ~$0.2-0.4B | 0.1% protocol fee | MetaMask · Phantom · Pontem · Suiet | **OOE** (staking) |
| **ParaSwap** | Pathfinder + RFQ + Delta intent layer | EVM 11+ | Delta intent partial · pathfinder exposed | Delta gasless · pathfinder user-pay | ~$0.2-0.4B | Free pathfinder · Delta fee | Argent · Ledger Live · Zerion | **PSP** (sePSP) |
| **KyberSwap** | Aggregator + own Kyber Elastic AMM | EVM 15+ | None (post-2023 hack focus on safety not MEV) | Limited | ~$0.3-0.5B | 0% agg fee · Elastic LP fee | Krystal · MetaMask · SEA market | **KNC** (KyberDAO) |
| **OKX DEX** | On-chain pathfinder + RFQ (CEX backed) | **20+ chain EVM + Solana + TON + Aptos + Sui** | Partial (RFQ MEV-resist · external AMM exposed) | Partial (OKX Pay gasless paths) | ~$0.3-0.5B | ~0.1% protocol fee · OKX ecosystem discount | **OKX Wallet default · CEX seamless on/off ramp** | **OKB** (CEX-wide) |

**矩阵的读法**:
- 横向:从 1 aggregator × 8轴进行 profile 化 · 纵向:比较同一轴 × 8 aggregator 的差异
- **Routing model 差异**:Pathfinder(1inch · ParaSwap · KyberSwap · OpenOcean)vs RFQ-heavy(0x · OKX)vs Batch auction(CowSwap)vs Solana SVM native(Jupiter)。**user experience 根本不同** —— RFQ 瞬时 quote · pathfinder 为 real-time on-chain calc · batch auction 为 ~12s 的撮合等待
- **MEV protection 强度排名**:**CowSwap(结构性)> 1inch Fusion(intent)> 0x(RFQ private quote)> OKX RFQ partial > 其余(exposed 或 minimal)**
- **Chain coverage**:**OpenOcean + OKX DEX 为 multi-chain top** · **1inch / 0x / CowSwap / ParaSwap / KyberSwap 为 EVM-only** · **Jupiter 为 Solana only**。Multi-VM aggregator 仍少
- **Governance token + fee distribution model**:COW · ZRX · 1INCH 的 fee switch 推进中 / 已 enabled · JUP / OOE / PSP / KNC 的 token utility 以 governance 为中心 · OKB 为 CEX-wide token

## Composition / use case patterns

**Pattern A — 「Retail EVM trader, MetaMask default」**:
- MetaMask Swaps 在背后 call 1inch + 0x co-provider · 用户无须意识 aggregator 选择即可收到最优 quote
- MEV protection 仅 flashbots opt-in 程度 · 对中等规模 retail 交易(< $10K)足矣

**Pattern B — 「Solana memecoin / spot trader」**:
- 从 Phantom / Solflare / Backpack 之一经 Jupiter 即可在一个画面 routing 几乎全部 Solana DEX · 无理由另选 aggregator
- 以 Jito Bundle 进行 MEV mitigation · 以 slippage protection 吸收 memecoin 的 volatility

**Pattern C — 「大额交易 / 机构 trader」**:
- **default 选择 CoW Protocol** —— 以 batch auction + uniform price 实现 MEV-free + 经 solver competition 的 price improvement + Safe multisig native integration
- 替代:以 0x RFQ 取得 professional market maker quote · 与 Wintermute / GSR 进行大额交易执行

**Pattern D — 「Cross-chain swap」**:
- 以 OpenOcean(multi-VM)或 OKX DEX(EVM + Solana + TON 等)选择 chain coverage 广的 aggregator
- 经 LayerZero / Wormhole 的 cross-chain swap 内嵌于 aggregator 内
- 另一路径:dedicated cross-chain bridge(参见 [[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]])+ 同 chain 的 aggregator 的组合

**Pattern E — 「CEX-integrated user」**:
- OKX Wallet 用户在 OKX DEX 进行 on-chain swap → 无缝 deposit 至 OKX CEX,或反方向
- Coinbase Wallet 用户经 0x backed swap → 无缝联动 Coinbase exchange
- CEX backed aggregator 最大的 wedge 是 **on/off-ramp 摩擦的最小化**

**Pattern F — 「Developer / dApp embedding swap」**:
- 0x API(swap quote API)的企业整合最多 —— Coinbase / Robinhood / 等的 CEX backend 消费 0x quote API
- 1inch API 的 wallet integration 多 · CowSwap API 的 smart contract / multisig protocol 整合多

## Boundary cases / future trajectory

**Intent-based routing 的普及**:
- 1inch Fusion(2023）· CowSwap(2021〜)· ParaSwap Delta(2024)向 intent-based / solver competition 模式 shift
- Intent 是 user 发送 signed order · solver execute 的模式 —— 从 pathfinder algorithmic 竞争进化为 **solver / market maker 竞争**
- 2026 trend:全部主要 EVM aggregator 持有 intent layer · classical pathfinder 作为 intent unavailable 的 long-tail token / small trade 的 fallback

**Cross-chain aggregation 的整合**:
- OpenOcean / OKX DEX / Jupiter Bridge 等在一个画面提供「cross-chain swap」
- 背后向 LayerZero / Wormhole / Hyperlane / CCTP V2等的 cross-chain protocol([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]])pass-through
- Chain abstraction pattern([[systems/chain-abstraction-pattern-overview|chain abstraction overview]])进一步整合 aggregator UX —— user 无须意识 chain 即可 swap

**MEV protection 标准化压力**:
- 2024-2025年 的 EU MiCA + US SEC 出现「retail MEV exposure」监管讨论
- Robinhood crypto / Coinbase Wallet 以 0x backed swap 部分 MEV-protect · 朝向机构 retail flow 将 MEV protection 设为 default 要求的方向
- CoW Protocol 模式是能 **结构性消灭 MEV** 的唯一答案 · 2027-2028 其他 aggregator 可能模仿

**RFQ vs AMM 的边界模糊化**:
- 0x RFQ 在 professional market maker quote 超越 AMM-style 流动性深度的大额 token pair 上胜出
- Uniswap v4 hook 使 AMM 能 accept「RFQ-style maker quote」(2025-2026 deploy)
- 结果:aggregator 将 AMM 与 RFQ transparent 混合 routing —— 在 user 视角下差异变得不可见

**OKX / Coinbase 等 CEX backed aggregator 的威胁**:
- 中心化 backed aggregator(OKX DEX · 在 Coinbase 上的 0x backed swap）以 **on/off-ramp + KYC + 机构流动性** 的 wedge 挑战 pure DeFi aggregator(1inch / CowSwap)
- 监管面上 CEX backed aggregator 应对 MiCA / FSA / SEC compliance · 可吸收机构 retail flow
- 2027+:可能发生 CEX backed aggregator 占据 retail 成交量 50%+ 的 shift · pure DeFi aggregator 需以 **MEV-resistance + transparency** 提供差异化

**Jupiter 的 Solana 支配率与非 Solana 扩张**:
- Jupiter 占据 Solana 的 70%+ DEX routing · 事实上是 Solana ecosystem 的入口
- 以 2024年的 JUP airdrop 实现 community ownership + governance · Solana DAO governance influence 扩大
- 非 Solana 扩张(经 Jupiter Bridge Wormhole)处于实验阶段 · 维持 Solana focus 的战略

**Aggregator 自身的 MEV extraction 竞争**:
- 标榜「消灭 MEV」的同时在 solver / resolver layer 将 MEV 价值 kept / redistribute 的模式(CowSwap · 1inch Fusion)普及
- 从 Solver 的 MEV revenue 向 COW staker · 1INCH staker 分配的 fee switch 推进中
- 课题:**向 user 的 full MEV refund** vs **向 token holder 的 fee distribution** 的平衡 · 在 DAO governance 中讨论

**Governance token + fee switch enable trend**:
- 2024-2026年 COW · ZRX · 1INCH 等的 fee switch enable / 提案推进中
- 反 token 模式的 Jupiter (JUP)或 Robinhood backed 0x backed swap,其 collected fee 的去向亦为讨论对象
- SEC / MiCA 对 token fee distribution 的监管不确定性为逆风

**Long-tail token coverage 竞争**:
- aggregator **能 route 多少 token / pool** 是 pathfinder 模式的核心竞争
- 对应 Memecoin / niche token 的 pathfinder 速度 + AMM coverage(Curve / Balancer / KyberSwap Elastic 等 niche AMM 整合)很重要
- Jupiter 是 Solana memecoin 经济的核心 · 1inch / 0x 在 EVM long-tail 强势

**Embedded wallet × Agentic swap**:
- Privy / Coinbase CDP / Crossmint 等 embedded wallet([[agent-economy/privy-embedded-wallet-overview|Privy overview 参照]])call aggregator backend
- AI agent([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]])以经 x402的 paid API 取得 aggregator quote · 执行 MEV-protected swap
- 2026-2027 trend:agent 将 CowSwap / 1inch Fusion 作为 default route 消费 · MEV protection 在 agentic commerce 成为必备要件

**监管 wildcard —— Aggregator 是否构成 CASP/VASP?**:
- EU MiCA 是否将 aggregator(无自己下单 · 仅 routing）纳入 CASP 义务对象,属 grey area
- 日本 FSA 将 aggregator 本身定为无须 VASP 登记(non-custodial routing),但 CEX backed aggregator(OKX DEX 等)为另一讨论
- 2026-2027年 的 EU MiCA TA(Technical Advice）预计将明确 aggregator categorization · 是监管风险变动的主要因素

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]]
- [[exchanges/global-perp-dex-competitive-deep-dive-matrix|global perp DEX competitive deep dive matrix]]
- [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]]
- [[exchanges/dex-jito-solana|Jito Solana]]
- [[exchanges/dex-raydium-solana|Raydium Solana]]
- [[exchanges/dex-orca-solana|Orca Solana]]
- [[exchanges/dex-pendle|Pendle]]
- [[exchanges/amm-design-evolution|AMM design evolution]]
- [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]]
- [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem comparison]]
- [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]]
- [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP regime overview]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]]
- [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]
- [[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction pattern overview]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
<!-- /wiki-links:managed -->

## Sources

- 1inch · https://1inch.io/
- 0x Protocol · https://0x.org/
- Matcha (0x consumer UI) · https://matcha.xyz/
- CoW Protocol · https://cow.fi/
- Jupiter (Solana) · https://jup.ag/
- OpenOcean · https://openocean.finance/
- ParaSwap · https://www.paraswap.io/
- KyberSwap · https://kyberswap.com/
- OKX Web3 DEX · https://www.okx.com/web3/dex
- DefiLlama aggregators dashboard · https://defillama.com/aggregators
- Dune Analytics dashboards · https://dune.com/
