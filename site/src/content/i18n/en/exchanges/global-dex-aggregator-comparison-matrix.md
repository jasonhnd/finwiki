---
source: exchanges/global-dex-aggregator-comparison-matrix
source_hash: 6dcba8b3b6f84291
lang: en
status: machine
fidelity: ok
title: "Global DEX Aggregator comparison matrix · cross-comparison of the 8 major aggregators"
translated_at: 2026-05-31T03:19:56.367Z
---

# Global DEX Aggregator comparison matrix · cross-comparison of the 8 major aggregators

## TL;DR

- Cross-compares the 8 major DEX aggregators as of 2026-Q2 across 8 axes: **chain coverage · routing model · MEV protection · gas relay · daily volume · fee model · partner integration · governance token**
- **The 3 quadrants of routing model**: **on-chain pathfinder** (1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX) · **RFQ (Request-For-Quote / market maker quote)** (0x Protocol · Matcha · OKX DEX also includes RFQ) · **batch auction** (CowSwap / CoW Protocol) — Jupiter is an SVM aggregator dedicated to the Solana ecosystem
- **Differentiation in chain coverage**: EVM-heavy (1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX) vs Solana-only (Jupiter) · a true multi-VM aggregator does not yet exist (OpenOcean is one of the few examples covering EVM + Solana simultaneously, but its Solana route effectively rides on Jupiter sub-routing)
- **The 3 major mechanisms of MEV protection**: **CoW Protocol's batch auction + uniform clearing price** (structurally eliminates MEV) · **1inch Fusion / 0x Settler's intent-based + signed quote** (nearly cancels MEV) · **flashbots private mempool** wrapper (integrated by some aggregators) — Jupiter's MEV on Solana is mitigated by the Jito tip model
- **Daily volume** (2026-Q2 estimate): 1inch ~$1.5-2B · Jupiter ~$1-2B (routing for 70%+ of Solana goes through it) · 0x/Matcha ~$0.8-1.2B · CowSwap ~$0.4-0.6B · KyberSwap / OKX DEX ~$0.3-0.5B · ParaSwap / OpenOcean ~$0.2-0.4B each
- **Governance token**: 1INCH · ZRX · COW · JUP · KNC · OKB (OKX's own token) · PSP (ParaSwap, 2024  launch) · OpenOcean OOE · the governance model and fee distribution of each differ greatly
- Related: [[exchanges/global-dex-major-five-comparison|global DEX 5強]] (DEX comparison) · [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX]] (Solana 6 layer) · this matrix specializes in cross-comparing 8  aggregators

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]] for the underlying DEX pool layer, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana SVM aggregator/DEX stack, [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]] for the perp-only segment, and [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] for chain-specific DEX dynamics. For peer Solana DEX deep dives see [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]. For the AMM evolutionary tree see [[exchanges/amm-design-evolution|AMM design evolution]] and [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]. For MEV / order-flow architectural context see [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]. For broader CEX competition framing see [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] and [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem]]. For regulatory framing see [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]].

## Why this matrix is needed

DEX aggregators evolved from the simple pathfinders of 2020-2021年 to **intent-based routing + MEV protection + cross-chain swap** by 2024-2026年. Aggregators are greatly differentiated by **the design of their routing model**, and the path by which a user obtains "best price" differs fundamentally from one aggregator to another.

However, comparison information on aggregators is scattered — 1inch's official materials emphasize its own RFQ + Fusion, CoW Protocol emphasizes MEV elimination via batch auction, and Jupiter emphasizes its dominance on Solana. The value of the matrix lies in **comparing 8  aggregators across 8 axes on the same basis**, enabling traders / exchange-integration partners / institutions making routing selections to choose "the aggregator best suited to their use case."

Note: because aggregators ride on top of the liquidity pools of base DEXs (Uniswap / Curve / Balancer / Solana Raydium / Orca, etc.), aggregator competition becomes a meta-game of "pure routing layers that do not have their own DEX." CowSwap (CoW Protocol) and 1inch Fusion are exceptional in that they hold their own solver / market-maker networks, reaching for "more than just the middle layer."

## Per-aggregator sections

### 1inch (1INCH · v6 + Fusion)

**Routing model**: **a two-layer of on-chain Pathfinder + Fusion intent layer**. The Pathfinder algorithm searches paths across all DEX liquidity (Uniswap v2/v3/v4 + Curve + Balancer + Sushiswap + 100+ AMM) and optimizes gas + slippage. **Fusion** is an intent-based bidding layer launched in 2023年, where users submit signed orders, resolvers (MEV searchers / market makers) bid competitively, and 1inch itself intermediates order matching.

**Chain coverage**: **EVM-only** (Ethereum + Arbitrum + Optimism + Polygon + BNB Chain + Base + Avalanche + zkSync Era + others, 11+ chains). Solana / Aptos / Sui are out of scope (intentionally EVM-first).

**MEV protection mechanism**: in Fusion intent-based mode, resolvers keep MEV at swap execution minimal (an incentive whereby resolver competition refunds MEV value to the user) · classical pathfinder mode is MEV exposed. Optional flashbots integration exists.

**Gas relayer support**: in Fusion mode, resolvers pay gas and the user is gasless. Pathfinder mode uses the user's own gas.

**Daily volume**: ~$1.5-2B/day (2026-Q2 estimate · DefiLlama aggregators board). The **leader position among EVM aggregators**.

**Fee model**: Pathfinder is no-fee (LP fee only) · in Fusion, a fee from resolvers (small spread) · via partner integration, a referral fee can be set.

**Partner integrations**: via MetaMask Swaps (MetaMask adopts 1inch as one of 1 default routing providers) · Coinbase Wallet · TrustWallet, and many others.

**Governance token**: **1INCH** (2020年 launch · 2022年 migration to a veToken model · veINCH voting decides fee distribution + the resolver whitelist).

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**Routing model**: **RFQ-first hybrid**. 0x Protocol obtains **signed quotes from professional market makers (Wintermute · GSR · Jane Street, etc.)** and simultaneously compares on-chain liquidity to select the best. Settler (launched in 2024年) implements an MEV-resistant smart router. Matcha is a UI that wraps 0x Protocol for consumers.

**Chain coverage**: **EVM multi-chain** (Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + others, 9+).

**MEV protection mechanism**: RFQ quotes are private and signed · MEV searchers cannot front-run with a sandwich (it executes at the moment the maker commits to a price). Settler protects classical AMM swaps too with permit2 + and a smart router.

**Gas relayer support**: via the 0x API, the user pays gas · some partners (Coinbase Wallet, etc.) support gasless via meta-transactions.

**Daily volume**: ~$0.8-1.2B (the total via Matcha + the 0x API). The ratio of professional market-maker liquidity is higher than other aggregators.

**Fee model**: a 0.15% protocol fee is standard (2024-2025 phased rollout) · a partner referral fee can be set.

**Partner integrations**: **Coinbase Wallet swap** · **MetaMask Swaps (co-provider)** · **Robinhood crypto swap backend** (announced in 2024年) · Brave Wallet, etc. One of 1 aggregators with the most enterprise integrations.

**Governance token**: **ZRX** (2017年 launch · ZRX staking + governance · a fee-distribution discussion is underway in 2024年).

### CowSwap / CoW Protocol (COW · Batch Auction)

**Routing model**: **Batch auction with uniform clearing price**. Users send an intent (sell X for at least Y) · all orders within a ~12-second batch window are matched by CoW (Coincidence of Wants) · the remainder is settled by solvers on external AMM/RFQ. Because **uniform clearing price** makes all orders of the same token pair settle at the same price, MEV (sandwich + frontrunning) structurally cannot arise.

**Chain coverage**: **EVM** (Ethereum mainnet + Gnosis Chain + Arbitrum + Base · as of 2026-Q2). Multi-chain expansion is more conservative than other aggregators.

**MEV protection mechanism**: **structurally MEV-absent** — in the batch-auction model, orders are not executed individually, so sandwich attacks physically cannot arise. Solver competition converts MEV value into user surplus.

**Gas relayer support**: **fully gasless** — solvers bear the gas (deducted from swap output) · the user wallet only signs.

**Daily volume**: ~$0.4-0.6B (2026-Q2). Volume is smaller than other aggregators, but **the size per 1 trade is large** (institutions + large retail come seeking MEV-protected swaps).

**Fee model**: a 0.1-0.5% solver fee (a transparent method charging from user surplus) · the CowDAO fee switch was enabled in 2024年 and distributes rewards to COW stakers.

**Partner integrations**: **Safe (Gnosis Safe) native swap integration** (institutional multisigs swap on CoW) · Argent Wallet · Rabby Wallet · strong with a user base that has high demand for MEV protection.

**Governance token**: **COW** (2023年 launch · COW staking receives fees + governance).

### Jupiter (JUP · Solana only)

**Routing model**: **SVM (Sealevel) native aggregator** — integrated routing across Solana's Raydium / Orca / Meteora / Phoenix / Lifinity / Saber / others, 25+ DEXs. Jupiter v6 integrates transaction simulation + multi-hop optimization + just-in-time liquidity.

**Chain coverage**: **Solana alone** (intentionally). Cross-chain is a separate product via Jupiter Bridge (through Wormhole).

**MEV protection mechanism**: Solana has a different MEV environment from Ethereum — by placing Jupiter swaps into a **Jito Bundle** (see [[exchanges/dex-jito-solana|Jito Solana]]), sandwich attacks are suppressed via Jito validator tips. Jupiter rejects transactions when the price moves significantly with **Slippage Bot Protection**.

**Gas relayer support**: Solana's gas fees are extremely low, on the order of $0.001 — the need for gasless is lower than on EVM. Jupiter assumes the user holds their own SOL.

**Daily volume**: **~$1-2B (70%+ of the entire Solana DEX trading volume routes through Jupiter)**. The de facto gateway to the Solana ecosystem.

**Fee model**: 0% protocol fee (LP fee + Jito tip only) · via partner integration, a referral can be set.

**Partner integrations**: Phantom Wallet · Solflare Wallet · Backpack (the default swap across the entire Solana wallet ecosystem) · also expanding into Jupiter LST (Liquid Staking Token) and Jupiter Perp.

**Governance token**: **JUP** (2024-01  launch · one of the largest retroactive airdrops in Solana history · JUP staking + governance).

### OpenOcean (OOE · multi-VM)

**Routing model**: **Multi-VM pathfinder** — an EVM aggregator (a 1inch-style pathfinder) + Solana sub-routing (sometimes internally calling the Jupiter API) + also covers the Move VM AMMs of Aptos / Sui. **The only true multi-VM aggregator**.

**Chain coverage**: **EVM + Solana + Aptos + Sui + TON, 20+ chains**. The largest number of chains in coverage.

**MEV protection mechanism**: Flashbots Protect integration (EVM) · Jito Bundle integration (Solana) · there is no MEV elimination at the protocol layer, but it passes through each chain's MEV mitigation.

**Gas relayer support**: Chain-specific — partial meta-transactions on EVM · on Solana, gas is low to begin with.

**Daily volume**: ~$0.2-0.4B (2026-Q2). Coverage is broad, but volume on each chain is smaller than other EVM-specialists.

**Fee model**: 0.1% protocol fee · partner referral fee.

**Partner integrations**: integrated with many wallets on each chain (MetaMask · Phantom · Pontem · Suiet, etc.) · cross-chain swap functionality (via LayerZero / Wormhole) is a differentiator.

**Governance token**: **OOE** (2021年 launch · staking + governance).

### ParaSwap (PSP · pathfinder + RFQ hybrid)

**Routing model**: **Pathfinder + RFQ hybrid** — its own ParaSwapPool (providing market-maker RFQ) + an external AMM pathfinder · Delta (an intent-based layer launched in 2024年) for gasless intent swaps.

**Chain coverage**: **EVM** (Ethereum + Arbitrum + Optimism + Polygon + Base + Avalanche + BNB Chain + zkEVM, etc., 11+ chains).

**MEV protection mechanism**: MEV mitigation at the Delta intent layer · classical pathfinder mode is MEV exposed · MEV elimination is weaker compared with 1inch / CowSwap.

**Gas relayer support**: Delta is gasless · classical pathfinder uses user gas.

**Daily volume**: ~$0.2-0.4B (2026-Q2). Hidden in the shadow of 1inch / 0x, its market share is on a declining trend.

**Fee model**: Free pathfinder · a protocol fee from Delta · partner referral fee.

**Partner integrations**: integrated with retail wallets such as Argent · Ledger Live · Zerion.

**Governance token**: **PSP** (2021年 launch · a fee-distribution model upgrade in 2024年 · sePSP staking).

### KyberSwap (KNC · Aggregator + own AMM)

**Routing model**: **a dual line of the KyberSwap Aggregator (pathfinder) + Kyber Elastic (its own concentrated-liquidity AMM)**. The Aggregator routes both external AMMs + its own Elastic.

**Chain coverage**: **15+ chains** (Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + Linea + zkSync + Mantle + others).

**MEV protection mechanism**: after the 2023年 hack, the core router was extensively re-audited · a MEV protection layer is not built in · users are MEV exposed.

**Gas relayer support**: Limited — assumes the user's own gas.

**Daily volume**: ~$0.3-0.5B (2026-Q2).

**Fee model**: 0% aggregator fee · Kyber Elastic LP fee (swap fee from the pool).

**Partner integrations**: Krystal Wallet · MetaMask, etc. Strong in the Vietnam / SEA market.

**Governance token**: **KNC** (2017年 launch · 2022年 migration · KNC staking + governance · KyberDAO).

**Note**: there is a history of KyberSwap Elastic suffering a **$48M exploit** in 2023-11 (a complex AMM tick-liquidity vulnerability) · even after the fix, TVL has not recovered. The Aggregator continues, but its own Elastic is effectively in a wind-down state. For details, see [[exchanges/global-dex-major-five-comparison|global DEX 5強]] and peers.

### OKX DEX Aggregator (OKB · centralized-backed)

**Routing model**: **On-chain pathfinder + RFQ hybrid** — integrates RFQ liquidity backed by OKX (the CEX) · a hybrid of external AMMs + the OKX Spot order book. The default swap built into the OKX Wallet.

**Chain coverage**: **EVM + Solana + TON + Aptos + Sui, 20+ chains**. Chain expansion is fast owing to the advantage of being CEX-backed.

**MEV protection mechanism**: Partial — via OKX RFQ liquidity it is MEV-resistant · via external AMMs it is MEV exposed.

**Gas relayer support**: via the OKX Wallet, partially gasless through OKX Pay integration.

**Daily volume**: ~$0.3-0.5B (2026-Q2). Growing steadily on the CEX-backed brand recognition and the OKX Wallet user base.

**Fee model**: ~0.1% protocol fee · reducible through linkage within the OKX ecosystem.

**Partner integrations**: OKX Wallet (default) · seamless linkage to the OKX CEX (on-chain swap → CEX deposit).

**Governance token**: **OKB** (OKX's overall token · trading-fee discount + governance · there is no DEX-dedicated token).

## Big comparison matrix table

**8  aggregators × 8 axes cross-comparison** (state of 2026-Q2):

| Aggregator | Routing model | Chain coverage | MEV protection | Gas relayer | Daily volume (estimate) | Fee model | Partner integrations | Governance token |
|---|---|---|---|---|---|---|---|---|
| **1inch** | Pathfinder + Fusion intent | **EVM 11+** | Fusion intent (resolver competition) + Flashbots opt-in | Fusion: solver pays · Pathfinder: user | **~$1.5-2B** | Free pathfinder · Fusion small spread | MetaMask Swaps default · Coinbase Wallet · Trust | **1INCH** (veINCH) |
| **0x / Matcha** | RFQ-first hybrid (Settler smart router) | EVM 9+ | RFQ signed quote (private) + Settler MEV-resist | Partial meta-tx via partners | ~$0.8-1.2B | 0.15% protocol fee | **Coinbase Wallet · MetaMask co-provider · Robinhood backend** | **ZRX** (staking) |
| **CowSwap / CoW Protocol** | **Batch auction + uniform clearing price** | EVM (Eth + Gnosis + Arb + Base) | **Structurally MEV-free** (batch CoW + uniform price) | **Fully gasless** (solver pays) | ~$0.4-0.6B (high avg ticket) | 0.1-0.5% solver fee · CowDAO fee switch on | **Safe native swap** · Argent · Rabby | **COW** (staking) |
| **Jupiter** | Solana SVM native aggregator (25+ Solana DEX) | **Solana only** | Jito Bundle integration + slippage bot protect | Low gas baseline (Solana ~$0.001) | **~$1-2B (70%+ Solana DEX routing)** | 0% protocol fee | **Phantom · Solflare · Backpack** (all Solana wallet default) | **JUP** (2024 airdrop) |
| **OpenOcean** | Multi-VM pathfinder (EVM + Solana + Aptos + Sui + TON) | **20+ chain across multi-VM** | Pass-through (Flashbots EVM · Jito Solana) | Chain-specific partial | ~$0.2-0.4B | 0.1% protocol fee | MetaMask · Phantom · Pontem · Suiet | **OOE** (staking) |
| **ParaSwap** | Pathfinder + RFQ + Delta intent layer | EVM 11+ | Delta intent partial · pathfinder exposed | Delta gasless · pathfinder user-pay | ~$0.2-0.4B | Free pathfinder · Delta fee | Argent · Ledger Live · Zerion | **PSP** (sePSP) |
| **KyberSwap** | Aggregator + own Kyber Elastic AMM | EVM 15+ | None (post-2023 hack focus on safety not MEV) | Limited | ~$0.3-0.5B | 0% agg fee · Elastic LP fee | Krystal · MetaMask · SEA market | **KNC** (KyberDAO) |
| **OKX DEX** | On-chain pathfinder + RFQ (CEX backed) | **20+ chain EVM + Solana + TON + Aptos + Sui** | Partial (RFQ MEV-resist · external AMM exposed) | Partial (OKX Pay gasless paths) | ~$0.3-0.5B | ~0.1% protocol fee · OKX ecosystem discount | **OKX Wallet default · CEX seamless on/off ramp** | **OKB** (CEX-wide) |

**How to read the matrix**:
- Horizontally: profiling each of the 1  aggregators × 8 axes · vertically: comparing the differences of the same axis × 8  aggregators
- **Routing-model differences**: Pathfinder (1inch · ParaSwap · KyberSwap · OpenOcean) vs RFQ-heavy (0x · OKX) vs Batch auction (CowSwap) vs Solana SVM native (Jupiter). **The user experience differs fundamentally** — RFQ quotes instantly · pathfinder does real-time on-chain calc · batch auction waits ~12s for matching
- **MEV-protection-strength ranking**: **CowSwap (structural) > 1inch Fusion (intent) > 0x (RFQ private quote) > OKX RFQ partial > the rest (exposed or minimal)**
- **Chain coverage**: **OpenOcean + OKX DEX are the multi-chain top** · **1inch / 0x / CowSwap / ParaSwap / KyberSwap are EVM-only** · **Jupiter is Solana only**. True multi-VM aggregators are still few
- **Governance token + fee distribution model**: COW · ZRX · 1INCH have a fee switch underway / enabled · JUP / OOE / PSP / KNC have token utility centered on governance · OKB is a CEX-wide token

## Composition / use case patterns

**Pattern A — "Retail EVM trader, MetaMask default"**:
- MetaMask Swaps calls 1inch + 0x co-provider behind the scenes · the user receives the best quote without being conscious of aggregator selection
- MEV protection is at the level of flashbots opt-in · sufficient for mid-sized retail trades (< $10K)

**Pattern B — "Solana memecoin / spot trader"**:
- From any of Phantom / Solflare / Backpack, nearly all Solana DEXs route on one screen via Jupiter · there is no reason to choose another aggregator
- MEV mitigation with Jito Bundle · slippage protection absorbs the volatility of memecoins

**Pattern C — "Large-lot trade / institutional trader"**:
- **CoW Protocol as the default choice** — batch auction + uniform price for MEV-free + price improvement via solver competition + Safe multisig native integration
- Alternative: obtain professional market-maker quotes via 0x RFQ · execute large-lot trades with Wintermute / GSR

**Pattern D — "Cross-chain swap"**:
- Choose an aggregator with broad chain coverage such as OpenOcean (multi-VM) or OKX DEX (EVM + Solana + TON, etc.)
- Cross-chain swaps via LayerZero / Wormhole are built into the aggregator
- Alternative route: a combination of a dedicated cross-chain bridge (see [[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]]) + a same-chain aggregator

**Pattern E — "CEX-integrated user"**:
- An OKX Wallet user does an on-chain swap on OKX DEX → seamlessly deposits to the OKX CEX, or the reverse
- A Coinbase Wallet user does a 0x backed swap → seamless linkage to the Coinbase exchange
- The biggest wedge of CEX-backed aggregators is **minimizing on/off-ramp friction**

**Pattern F — "Developer / dApp embedding swap"**:
- The 0x API (swap quote API) has the most enterprise integrations — CEX backends of Coinbase / Robinhood / etc. consume the 0x quote API
- The 1inch API has many wallet integrations · the CowSwap API has many smart-contract / multisig-protocol integrations

## Boundary cases / future trajectory

**Spread of intent-based routing**:
- 1inch Fusion (2023) · CowSwap (2021~) · ParaSwap Delta (2024) shift to an intent-based / solver-competition model
- An intent is a model where the user sends a signed order · solvers execute — evolving from pathfinder algorithmic competition to **solver / market-maker competition**
- 2026  trend: all major EVM aggregators hold an intent layer · the classical pathfinder is a fallback for long-tail tokens / small trades where intent is unavailable

**Integration of cross-chain aggregation**:
- OpenOcean / OKX DEX / Jupiter Bridge, etc. offer "cross-chain swap" on one screen
- Behind the scenes, it passes through cross-chain protocols such as LayerZero / Wormhole / Hyperlane / CCTP V2 ([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]])
- The chain-abstraction pattern ([[systems/chain-abstraction-pattern-overview|chain abstraction overview]]) further integrates the aggregator UX — the user swaps without being conscious of the chain

**Pressure to standardize MEV protection**:
- In 2024-2025年, "retail MEV exposure" regulatory discussion under EU MiCA + US SEC
- Robinhood crypto / Coinbase Wallet partially MEV-protect with a 0x backed swap · the direction is for MEV protection to become a default requirement for institutional retail flow
- The CoW Protocol model is the only answer that can **structurally eliminate MEV** · there is a possibility that other aggregators imitate it in 2027-2028

**Blurring of the boundary between RFQ and AMM**:
- 0x RFQ wins for large-lot token pairs where professional market-maker quotes surpass the depth of AMM-style liquidity
- With Uniswap v4  hooks, AMMs become able to accept "RFQ-style maker quotes" (deployed 2025-2026 )
- Result: aggregators mix AMM and RFQ transparently in routing — from the user's viewpoint, the difference becomes invisible

**The threat of CEX-backed aggregators such as OKX / Coinbase**:
- Centralized-backed aggregators (OKX DEX · 0x backed swap on Coinbase) challenge pure-DeFi aggregators (1inch / CowSwap) with the wedge of **on/off-ramp + KYC + institutional liquidity**
- On the regulatory side, CEX-backed aggregators comply with MiCA / FSA / SEC · they can absorb institutional retail flow
- 2027+: a shift could occur where CEX-backed aggregators occupy 50%+ of retail volume · pure-DeFi aggregators need to differentiate by providing **MEV-resistance + transparency**

**Jupiter's Solana dominance and non-Solana expansion**:
- Jupiter occupies 70%+ of Solana's DEX routing · the de facto gateway to the Solana ecosystem
- The 2024年 JUP airdrop gives community ownership + governance · expanding Solana DAO governance influence
- Non-Solana expansion (via Jupiter Bridge Wormhole) is at an experimental stage · a strategy of maintaining Solana focus

**Aggregators' own MEV-extraction competition**:
- A model of keeping / redistributing MEV value at the solver / resolver layer while claiming "MEV elimination" (CowSwap · 1inch Fusion) is spreading
- A fee switch distributing solver MEV revenue to COW stakers · 1INCH stakers is underway
- Challenge: balancing **full MEV refund to users** vs **fee distribution to token holders** · debated in DAO governance

**Governance token + fee-switch-enable trend**:
- In 2024-2026年, a fee switch for COW · ZRX · 1INCH, etc., is enabled / proposals are underway
- For anti-token-mode Jupiter (JUP) and Robinhood-backed 0x backed swap as well, the destination of collected fees is a subject of debate
- Regulatory uncertainty from the SEC / MiCA on token fee distribution is a headwind

**Long-tail token coverage competition**:
- **How many tokens / pools an aggregator can route** is the core competition of the pathfinder model
- Pathfinder speed + AMM coverage handling memecoins / niche tokens (integrating niche AMMs such as Curve / Balancer / KyberSwap Elastic) is important
- Jupiter is at the core of the Solana memecoin economy · 1inch / 0x are strong on EVM long-tail

**Embedded wallet × Agentic swap**:
- Embedded wallets such as Privy / Coinbase CDP / Crossmint ([[agent-economy/privy-embedded-wallet-overview|Privy overview 参照]]) call the aggregator backend
- AI agents ([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]]) obtain aggregator quotes as a paid API via x402 · execute MEV-protected swaps
- 2026-2027  trend: agents consume CowSwap / 1inch Fusion as the default route · MEV protection becomes a mandatory requirement in agentic commerce

**Regulatory wildcard — do aggregators qualify as CASP/VASP?**:
- Whether EU MiCA makes aggregators (no self-order placement · routing only) subject to CASP obligations is a grey area
- Japan's FSA treats aggregators themselves as not requiring VASP registration (non-custodial routing), but CEX-backed aggregators (OKX DEX, etc.) are a separate discussion
- The EU MiCA TA (Technical Advice) of 2026-2027年 is expected to clarify aggregator categorization · a major factor in regulatory-risk variation

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
