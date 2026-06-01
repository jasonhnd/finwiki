---
source: systems/rollup-market-share-2026-arbitrum-optimism-base
source_hash: 35531e7cdf6588c1
lang: en
status: machine
fidelity: ok
title: "Rollup Market Share 2026 · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea"
translated_at: 2026-06-01T04:15:40.102Z
---
# Rollup Market Share 2026 · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea

## TL;DR

- For 7  mainstream Ethereum L2 rollups, as of 2026-Q2 , compare the 11  axes: **TVL · daily active addresses · daily transactions · sequencer revenue · gas cost · DEX depth · lending scale · RWA · governance maturity · ecosystem diversity · DA selection**
- **TVL ranking 2026-Q2  estimate**: **Base ~$18B** (lead · fastest growth) · **Arbitrum ~$13B** (stagnant) · **Optimism ~$5B** · **zkSync Era ~$2.0B** · **Linea ~$1.2B** · **Polygon zkEVM ~$800M** · **Scroll ~$700M**
- **Daily active address ranking**: Base ~3-5M · Arbitrum ~1-2M · Optimism ~600k-1M · zkSync ~400-700k · Linea ~300-500k · Polygon zkEVM ~150-300k · Scroll ~100-200k
- **Base-led growth**: Coinbase parent-company traffic + Stripe / Shopify / Apple Pay entry points + meme coin / consumer dApps make it dominant · in 2024-2026  it is the only L2
- **Arbitrum stagnation**: technical lead (Nitro · Stylus · Orbit), but growth has slowed · DeFi-heavy user structure · lacks consumer entry points
- **Optimism Superchain expansion**: through the OP Stack frame, ~30+ chains (Base · Mode · Worldcoin · Lyra · Polynomial · Zora, etc.) have joined · total Superchain TVL actually exceeds Arbitrum
- **OP-rollups are TVL-led · ZK-rollups are technology-narrative-led**: OP rollups (Arbitrum · Optimism · Base) occupy L2  total TVL of ~85%+ · ZK rollups (zkSync · Linea · Scroll · Polygon zkEVM · Taiko) are ~15%, but are regarded as the long-term direction
- Routing: pair [[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] with [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済 2026]]

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] for the technical maturity dimension that this entry's market share table summarizes economically, and [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] for the underlying DA cost structure that determines rollup unit economics. Pair with [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the 2025-Q2 catalyst that reshaped sequencer margins. For the meta-strategy framing that makes Base / Arbitrum / Optimism the "ETH-aligned L2 oligopoly", see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For DA layer choice that differentiates rollups, see [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]. For cross-chain messaging between these rollups, see [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] and [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]. For restaking-secured infrastructure that powers some rollup AVS (sequencer / DA), see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]] and [[systems/eigenlayer-overview|EigenLayer overview]]. For the Solana ecosystem that competes for the same consumer / meme coin / DEX flow, see [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]].

## Why this matrix matters

L2 rollups in 2023-2024 年 were still a "technology-route fight + TVL ranking competition." By 2024-2026 年 they had evolved into a mature industry structure: **Base monopolizes the consumer market · Arbitrum occupies DeFi-native · Optimism Superchain expands federally · ZK rollups split the mid-tier**.

**Why compare 7  L2 s and not more**:
- Base · Arbitrum · Optimism · zkSync Era · Linea · Polygon zkEVM · Scroll = 2026-Q2 TVL > $500M all L2
- Excluded: Blast (TVL > $500M but governance is immature + mainly meme / yield farming) · Mantle (EigenDA-based, not L1 DA · separate analysis) · Taiko (TVL < $500M · technical reference but small market share · see [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK matrix]]) · Manta Pacific / Eclipse (alt-DA · separate verticals)

**Decision axes when institutional customers (see [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]]) select L2 **:
- Stage 1 / Stage 2 decentralization (L2Beat assessment)
- Governance maturity (who can upgrade smart contracts inside the challenge window)
- DA layer selection (L1 blob vs alt-DA)
- Ecosystem diversity (DEX · lending · RWA · stablecoin circulation)
- Sustainability of sequencer revenue

**Decision axes when DeFi users select L2 **:
- DEX depth (slippage · liquidity)
- Lending rates + risk (Aave · Compound · Morpho)
- Bridge cost + finality (see [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge matrix]])
- Meme coin / consumer dApp activity

**Decision axes when consumer dApps select L2 **:
- Account Abstraction (see [[systems/erc-4337-overview|ERC-4337 overview]] and [[systems/erc-7702-overview|ERC-7702 overview]])
- Gas sponsorship tools
- Onramp (fiat entry point · stablecoin liquidity)
- User base (meme coin · social · games)

This matrix compares 7  publicly operating mainstream L2 s · expands across 11  axes · 2026-Q2  data snapshot.

### Base (Coinbase)

**TVL May 2026**: ~$18B (L2  leader · from the 2024-Q2  Base launch, achieved in 18  months · fastest growth in the industry).

**Daily active addresses**: ~3-5M (L2  leader · far above Arbitrum / Optimism).

**Daily transactions**: ~10-15M tx/day.

**Sequencer revenue**: ~$30-100M ARR (2026  estimate · depends on meme coin cycles).

**User gas cost**: after Pectra, ~$0.0005-0.005 / simple transfer · stable sub-cent experience.

**DEX depth**: Aerodrome (leader · ~$3-5B TVL · forked Velodrome v2  to Base) · Uniswap v3 · Curve · BaseSwap, etc. Stablecoin pair depth is the deepest in the industry.

**Lending scale**: Aave v3 on Base ~$2-4B · Morpho ~$500M-1B · Compound ~$300M-500M.

**RWA**: Centrifuge · Maple · Stripe USDC settlement · PayPal PYUSD circulation. Because of Coinbase's USDC primary entry point, Base becomes the deepest L2  for RWA + stablecoin circulation.

**Governance maturity**: **Stage 1 decentralization** (L2Beat) · Coinbase leads the sequencer · decentralized sequencer planned for 2026-2027 . Upgrade: Security Council 7-of-13 + 7-day timelock.

**Ecosystem diversity**: Consumer-heavy (DEX · meme coin · social · games) · Aerodrome / Friend.tech / Farcaster / Zora / Coinbase Smart Wallet, etc. Balance between DeFi and consumer apps.

**DA layer**: Ethereum L1 blobs (EIP-4844) · no alt-DA plan.

**Main advantages**:
- Coinbase parent-company traffic entry point (top US CEX · 1.5 億+ registered users)
- Stripe / Shopify / Apple Pay integration (USDC settlement)
- Coinbase Smart Wallet (native AA · no ETH gas required · see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]])
- Extremely low gas + Aerodrome depth let meme coin / consumer dApps explode
- Base-specific projects (Friend.tech · Farcaster · Zora) give Base a unique ecosystem

### Arbitrum (Offchain Labs)

**TVL May 2026**: ~$13B (L2  second · 2024-2025 stagnant · 2026  mild recovery from Stylus developer attraction).

**Daily active addresses**: ~1-2M (significantly below Base · but value per user tx is higher).

**Daily transactions**: ~4-6M tx/day.

**Sequencer revenue**: ~$30-70M ARR.

**User gas cost**: after Pectra, ~$0.001-0.01 / simple transfer.

**DEX depth**: GMX (leading perp · ~$1-2B TVL) · Uniswap v3 · Camelot · SushiSwap · TraderJoe, etc. Perp DEX concentration is high.

**Lending scale**: Aave v3 on Arbitrum ~$2-3B · Radiant ~$500M (recovering after the 2025 hack) · Compound ~$300M.

**RWA**: relatively limited · Arbitrum is not the primary-choice L2  for RWA.

**Governance maturity**: **Stage 1 decentralization** (L2Beat) · DAO governance + ARB token · Security Council 9-of-12 · the BoLD (Bounded Liquidity Delay) proof system launched in 2025 , making Arbitrum the first OP rollup with a permissionless validator.

**Ecosystem diversity**: DeFi-heavy (perp · spot · lending · yield farming) · GMX / Camelot / Pendle / Vela, etc. Few consumer apps.

**DA layer**: Ethereum L1 blobs (main chain) · Arbitrum Orbit child chains can choose AnyTrust (committee DA) or EigenDA.

**Main advantages**:
- Technical lead (Stylus · Rust/C++ smart-contract support · expands capabilities beyond EVM)
- BoLD permissionless validator is the most advanced decentralization among OP rollups
- Deploys ~20+ L3 / appchains through the Arbitrum Orbit frame
- Stable DeFi-native user base · TVL is less likely to leave

**Main disadvantages**:
- Lacks consumer entry points (no Coinbase / Stripe equivalent)
- DeFi-native user growth is saturated
- TVL 2024-2025 stagnant · only mild recovery in 2026 

### Optimism (OP Labs)

**TVL May 2026**: ~$5B (L2  third · directly operated by OP Labs · but OP Stack child-chain TVL greatly exceeds the main chain).

**Daily active addresses**: ~600k-1M (main chain) + total Superchain child chains ~5-8M (above Base main chain alone).

**Daily transactions**: main chain ~2-3M tx/day · total Superchain ~15-25M tx/day.

**Sequencer revenue**: main chain ~$10-25M ARR · OP Labs receives sequencer revenue sharing through Superchain · total ~$30-60M ARR.

**User gas cost**: after Pectra, ~$0.001-0.01 / simple transfer.

**DEX depth**: Velodrome (leader) · Uniswap v3 · Curve, etc. OP DEX depth is lower than Arbitrum but higher than mainstream ZK rollups.

**Lending scale**: Aave v3 on Optimism ~$1-2B · Sonne · Granary, etc.

**RWA**: Maker / Sky partially deployed on OP · but not a primary RWA choice.

**Governance maturity**: **Stage 1 decentralization** · OP token DAO + Citizen House (two-house governance) · Security Council + 7-day timelock. Superchain governance is decentralized between OP Labs + each chain team.

**Ecosystem diversity**: DeFi + some consumer (Worldcoin on OP Stack · Zora · Mode · Lyra, etc.) · second L2  platform for consumer dApps after Base.

**DA layer**: Ethereum L1 blobs (main chain + most of Superchain) · Mode partly uses EigenDA · some Superchain tests Celestia.

**Main advantages**:
- **OP Superchain federal expansion**: Base · Worldcoin · Mode · Lyra · Polynomial · Zora · Soneium · Unichain, etc. ~30+ chains have joined · share sequencer + governance
- OP Stack is one 1  of the mainstream frameworks for modular rollup-as-a-service
- Total Superchain TVL actually exceeds Arbitrum (if Base is counted into Superchain, ~$25B+)
- Retroactive Public Goods Funding (RPGF) is an ecosystem incentive innovation

**Main disadvantages**:
- Main-chain TVL itself is stagnant · all growth comes from Superchain child chains
- Base is the largest Superchain child chain · but Coinbase influence makes Base effectively an independent brand · not considered a direct OP benefit

### zkSync Era (Matter Labs)

**TVL May 2026**: ~$2.0B (ZK rollup leader · includes ZK Stack hyperchain TVL ~$500M).

**Daily active addresses**: ~400-700k.

**Daily transactions**: ~2-3M tx/day.

**Sequencer revenue**: ~$15-30M ARR.

**User gas cost**: after Pectra, ~$0.001-0.005 (Account Abstraction native · users can pay with stablecoin / ZK token · no ETH required).

**DEX depth**: SyncSwap (leader) · Maverick · Mute, etc. Depth is lower than Base / Arbitrum / Optimism.

**Lending scale**: Aave v3 on zkSync ~$300-500M · Reactor, etc.

**RWA**: relatively limited · ZK rollups overall are not mainstream for RWA (institutional leans toward L1 + Polygon zkEVM).

**Governance maturity**: **Stage 1 decentralization** (L2Beat) · ZK token DAO + Matter Labs Foundation · Security Council 9-of-15 · 21-day timelock (after 2024 , extended from 1-day).

**Ecosystem diversity**: DeFi-heavy + AA-native dApps (Argent · Braavos AA wallet integration) · ZK Stack hyperchain (GRVT perpetual · Treasure gaming · Cronos zkEVM).

**DA layer**: Ethereum L1 blobs (main chain) · ZK Stack hyperchain can choose EigenDA / Celestia (see [[systems/data-availability-celestia-eigenda-blob-comparison|DA 対照]]).

**Main advantages**:
- Largest TVL among ZK rollups
- Account Abstraction native (no ERC-4337  wrapper required · smoother user experience)
- ZK Stack framework is one 1  of the mainstream modular RaaS frameworks for ZK rollups
- Boojum prover performance leads among ZK rollups

**Main disadvantages**:
- Type 4 EVM compatibility (different bytecode · requires dev tooling support)
- Lacks consumer entry points such as Coinbase / Stripe
- User growth is slower than Linea (which borrows MetaMask traffic)

### Linea (Consensys)

**TVL May 2026**: ~$1.2B (second among ZK rollups · MetaMask traffic advantage).

**Daily active addresses**: ~300-500k.

**Daily transactions**: ~1-2M tx/day.

**Sequencer revenue**: ~$10-25M ARR.

**User gas cost**: after Pectra, ~$0.002-0.01 / simple transfer.

**DEX depth**: Lynex (leader) · iZUMi · Mendi, etc. Medium depth.

**Lending scale**: Aave v3 on Linea ~$200-400M · Mendi · ZeroLend, etc.

**RWA**: MetaMask Institutional is a Consensys product · some institutional pilots are on Linea.

**Governance maturity**: **Stage 1 decentralization** · Consensys-led · Security Council 7-of-13 · 7-day timelock · plan to introduce LINEA token DAO in 2026-2027 .

**Ecosystem diversity**: DeFi + Consensys integration (MetaMask · Infura · Truffle toolchain native support) · many dApp examples integrate MetaMask.

**DA layer**: Ethereum L1 blobs only (Consensys's "all on-chain" stance).

**Main advantages**:
- MetaMask integration (MetaMask leads EVM wallet market share · ~30M+ MAU · recommends Linea by default)
- Depth of Consensys toolchain ecosystem (Infura · Truffle · Hardhat, etc.)
- Institutional pilot entry point (MetaMask Institutional)

**Main disadvantages**:
- TVL mainly depends on MetaMask traffic · not organic growth
- Lacks consumer dApp entry points
- It is a ZK rollup but Type 2 (EVM-equivalent), not Type 1  · long-term prove cost is not advantaged

### Polygon zkEVM / AggLayer (Polygon Labs)

**TVL May 2026**: ~$800M (including AggLayer federation).

**Daily active addresses**: ~150-300k (main chain) + total AggLayer child chains ~500k-1M.

**Daily transactions**: ~500k-1M tx/day.

**Sequencer revenue**: ~$5-15M ARR.

**User gas cost**: after Pectra, ~$0.001-0.005 / simple transfer.

**DEX depth**: QuickSwap (leader) · Uniswap v3 · Balancer, etc. Medium depth.

**Lending scale**: Aave v3 on Polygon zkEVM ~$100-300M · other lending protocols are small.

**RWA**: **Franklin Templeton FOBXX pilot** (2024) · multiple enterprise pilots · deepest RWA among ZK rollups (institutional pilots lean toward Polygon).

**Governance maturity**: **Stage 1 decentralization** · Polygon Foundation + POL token DAO · Security Council 7-of-13 · 7-day timelock.

**Ecosystem diversity**: DeFi + enterprise dApps + identity (Polygon ID) · diversified. AggLayer federation of Polygon zkEVM + other zkEVM chains + Astar zkEVM.

**DA layer**: Ethereum L1 blobs default + offers validium mode (DAC 7-of-9  multisig) · enterprise / private chains can choose it.

**Main advantages**:
- Migration from Polygon PoS chain (EVM L1 sidechain · not included in this matrix · but the overall Polygon brand is strong) to Polygon zkEVM is a partial traffic source
- AggLayer federation lets multiple zkEVM chains share settlement · modular RaaS frame among ZK rollups
- Leads in enterprise pilot entry points (Franklin Templeton · multiple bank pilots)
- Polygon ID (decentralized identity) + zkEVM is an institutional KYC/AML-friendly combination

**Main disadvantages**:
- TVL growth is slower than zkSync / Linea
- Traffic migration from Polygon PoS chain to zkEVM is not smooth (users feel Polygon zkEVM is a new chain)
- Type 2.5 EVM compatibility · not Type 1 

### Scroll (Scroll Foundation)

**TVL May 2026**: ~$700M (the purest EVM-equivalent route among ZK rollups).

**Daily active addresses**: ~100-200k.

**Daily transactions**: ~500k-1M tx/day.

**Sequencer revenue**: ~$5-15M ARR.

**User gas cost**: after Pectra, ~$0.005-0.02 / simple transfer.

**DEX depth**: Aave · Uniswap · Pendle · GMX mainstream protocols are all deployed · but native DEXs on Scroll are few.

**Lending scale**: Aave v3 on Scroll ~$200-400M.

**RWA**: relatively limited · but Scroll's "EVM-equivalent + L1 DA purity" makes some institutional pilots lean toward Scroll.

**Governance maturity**: **Stage 1 decentralization** · Scroll Foundation + academic lineage (long-term collaboration with PSE) · Security Council 7-of-13 · 7-day timelock · plan to introduce SCR token DAO in 2026-2027 .

**Ecosystem diversity**: DeFi-heavy (Aave / Uniswap / Pendle / GMX mainstream forks) · lacks unique native dApps. Scroll Canvas is an onboarding tool.

**DA layer**: Ethereum L1 blobs only (clear stance of not using validium).

**Main advantages**:
- Type 2 EVM-equivalent (99% bytecode-level compatibility · mainstream dApps can deploy with zero modifications)
- Strong academic lineage (long-term collaboration with PSE / Ethereum Foundation)
- L1 DA purity stance (institutional friendly)

**Main disadvantages**:
- Slow TVL growth · lacks a unique catalyst
- No mass-traffic entry point like Coinbase / MetaMask / Consensys
- User feel is similar to other ZK rollups · lacks differentiated brand

## Big comparison matrix table

**7  mainstream L2 rollups × 11  axes comparison** (2026-Q2  status):

| Rollup | TVL May 2026 | Daily Active | Daily Tx | Sequencer Revenue | User Gas | DEX depth | Lending scale | RWA | Governance maturity | Ecosystem features | DA Layer |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Base (Coinbase)** | **~$18B (L2  leader)** | **3-5M (leader)** | 10-15M | $30-100M ARR | $0.0005-0.005 | Aerodrome $3-5B · Uniswap · Curve | Aave $2-4B · Morpho $500M-1B | Stripe USDC · PayPal PYUSD · Centrifuge | Stage 1 · SC 7/13 · 7d timelock | Consumer-heavy · meme/social/game · Coinbase Smart Wallet | L1 blobs only |
| **Arbitrum** | ~$13B (second) | 1-2M | 4-6M | $30-70M ARR | $0.001-0.01 | GMX $1-2B perp · Uniswap · Camelot | Aave $2-3B · Radiant $500M | Relatively limited | Stage 1 · DAO+ARB · SC 9/12 · BoLD permissionless | **Stylus (Rust/C++)** · DeFi-heavy · Orbit L3 framework | L1 blobs + Orbit can choose AnyTrust/EigenDA |
| **Optimism + Superchain** | ~$5B main chain · Superchain total ~$25B+ | 600k-1M main chain · Superchain 5-8M | main 2-3M · Superchain 15-25M | $30-60M ARR (including sharing) | $0.001-0.01 | Velodrome-led · Uniswap | Aave $1-2B · Sonne | Maker partial | Stage 1 · OP DAO + Citizen House · SC + 7d timelock | **OP Superchain federation ~30+ chain** · Worldcoin/Zora/Mode/Soneium | L1 blobs (main) · Mode EigenDA · some Celestia tests |
| **zkSync Era** | ~$2.0B (ZK leader) | 400-700k | 2-3M | $15-30M ARR | $0.001-0.005 · **AA native** | SyncSwap · Maverick | Aave $300-500M | Limited | Stage 1 · ZK DAO · SC 9/15 · 21d timelock | DeFi + **AA native** · ZK Stack hyperchain (GRVT/Treasure/Cronos) | L1 blobs · hyperchain can choose EigenDA/Celestia |
| **Linea (Consensys)** | ~$1.2B | 300-500k | 1-2M | $10-25M ARR | $0.002-0.01 | Lynex · Mendi medium | Aave $200-400M | MetaMask Institutional pilot | Stage 1 · Consensys-led · SC 7/13 · 7d timelock | **MetaMask integration** · Infura/Truffle toolchain | L1 blobs only (all on-chain stance) |
| **Polygon zkEVM/AggLayer** | ~$800M (including AggLayer) | 150-300k main · AggLayer total 500k-1M | 500k-1M | $5-15M ARR | $0.001-0.005 | QuickSwap · Uniswap · Balancer | Aave $100-300M | **Franklin Templeton FOBXX pilot** · multiple enterprise pilots | Stage 1 · POL DAO · SC 7/13 · 7d timelock | DeFi + enterprise + **Polygon ID** · AggLayer federation | L1 blobs + Validium mode (DAC 7/9) |
| **Scroll** | ~$700M | 100-200k | 500k-1M | $5-15M ARR | $0.005-0.02 | Aave/Uniswap/Pendle/GMX mainstream | Aave $200-400M | Limited · but L1 DA purity attracts some institutional activity | Stage 1 · Scroll Foundation · SC 7/13 · 7d timelock | DeFi-heavy · **Type 2 EVM-equivalent** · academic lineage (PSE) | L1 blobs only (explicitly no validium) |

**How to read the matrix**:
- **TVL ranking**: Base > Arbitrum > Optimism (main chain) > zkSync > Linea > Polygon zkEVM > Scroll · but if the whole Superchain is counted into Optimism, OP Superchain > Base > Arbitrum
- **Daily active address ranking**: Base is first + significantly leads · Arbitrum / Optimism are medium · all ZK rollups are small
- **Sequencer revenue ranking**: Base ≈ Arbitrum ≈ Optimism (3  giants each $30-70M ARR) · ZK rollups each $5-30M ARR
- **Ecosystem depth**: Base = consumer + DeFi · Arbitrum = DeFi specialist · Optimism = Superchain federation · zkSync = AA native · Linea = MetaMask traffic · Polygon zkEVM = enterprise pilot · Scroll = EVM purity
- **Convergence in governance maturity**: all 7  are Stage 1 · Security Council + 7-21 day timelock · DAO governance or team-led · effectively no Stage 2 full decentralization L2  exists

### Why Base is growing fastest

**Coinbase parent-company effect**:
- Coinbase is the top US CEX · registered users ~1.5 億 (2026) · monthly active ~500-700 万
- Coinbase is actively pushing USDC primary entry point + fiat onramp to Base
- Coinbase Smart Wallet (native AA · see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]) deploys to Base by default · no ETH gas required · user experience close to Web2 

**Stripe / Shopify / Apple Pay integration**:
- Stripe announced "USDC on Base" merchant settlement in 2024-2025 年 · sharply reducing cross-border payment costs
- Shopify merchants' pay-with-USDC default is Base
- Apple Pay integrates with Base through Coinbase Wallet

**Meme coin trend**:
- From 2024-Q3 , meme coin volume on Base exploded (BRETT · TOSHI · DEGEN, etc.)
- Daily Base DEX volume exceeded $1B multiple times · far above other L2 s
- Aerodrome (Base main DEX) became the first L2  DEX by TVL · ~$3-5B

**Consumer / social dApps**:
- Farcaster (decentralized social) is mainly deployed on Base · Frames (Farcaster built-in mini-app) ecosystem exploded
- Friend.tech · Zora · Mocaverse and other consumer dApps concentrate on Base

### Base's "soft moat"

- **Sequencer is centralized but trusted**: Coinbase is a US-listed company (NASDAQ: COIN) · regulatory compliance · high user trust
- **L1 DA stance**: Base always uses L1 blobs · no alt-DA plan · aligned with institutional expectations
- **OP Stack integration**: Base is a member of OP Superchain · enjoys OP ecosystem spillover while maintaining an independent brand

### Base's potential risks

- **Sequencer centralization is a single point of failure**: if Coinbase censors specific transactions due to regulatory demands · Base's censorship resistance is affected
- **Overdependence on meme coin cycles**: meme coins are volatile · if they cool, Base user activity may decline
- **Internal competition inside OP Superchain**: OP Stack chains such as Worldcoin / Mode / Soneium compete with Base · not only cooperate

### Why Arbitrum growth slowed

- **DeFi-native user structure**: Arbitrum's main users are DeFi power users (perp traders · yield farmers · multi-protocol interactions) · this group has saturated
- **Lacks consumer entry points**: no mass-traffic entry point like Coinbase / Stripe / MetaMask · new-user acquisition depends on native dApps
- **GMX single-protocol concentration**: most Arbitrum DeFi volume concentrates in GMX · 2024-2025 perp DEX competition (Hyperliquid on an independent L1  + dYdX v4 on Cosmos) disperses Arbitrum traffic

### Arbitrum's technical advantages (not fully monetized)

- **Stylus** (2024  launch): Rust / C++ smart contracts can be deployed · only support among EVM L2 s · but actual dApp adoption is slow
- **BoLD permissionless validator** (2025  launch): most advanced decentralization among OP rollups · but users do not feel it
- **Arbitrum Orbit**: deploys ~20+ L3 / appchains through the frame · but total Orbit chain TVL < OP Superchain
- **Arbitrum Nova**: AnyTrust DA child chain · serves high-frequency low-value use cases · but market share is small

### Arbitrum 2026  recovery signals

- 2026-Q1  Rust DeFi protocols launched on Stylus (Cygnus · Hydrogen, etc.) · dApp diversification
- BoLD permissionless validator starts ARB stake economics · improves token holder revenue expectations
- Some Arbitrum Orbit L3 s expand outside the circle (XAI gaming · Lumia · ApeChain)

### Superchain framework

See OP Stack documentation:
- **Shared sequencer** (planned · introduction in 2026-2027 )
- **Shared governance** (partial Citizen House participation)
- **Shared settlement** (mutual-trust bridge on L1 )
- **Shared RPGF** (Retroactive Public Goods Funding · OP governance token distribution)

Each Superchain child chain remains independently operated + independently branded · but shares the underlying stack.

### Superchain members (part of 2026-Q2 )

- **Base (Coinbase)** · TVL $18B
- **Optimism main chain** · TVL $5B
- **Worldcoin** · many users but low TVL
- **Mode** · DeFi specialty · partly uses EigenDA
- **Lyra** · options DEX · TVL ~$200-400M
- **Polynomial** · perp · relatively small
- **Zora** · NFT / creator economy · many users but low TVL
- **Soneium** (Sony-led · 2025  launch) · entry-level
- **Unichain** (Uniswap-led · 2025  launch) · Uniswap-specific
- **Mantle** · EigenDA L2  (technically not Superchain · but an early OP Stack fork)
- Other ~20+ chains

### Total Superchain TVL

Adding Base + Optimism + other Superchain TVL gives ~$25B+ · **actually above single-chain Arbitrum**. But Coinbase does not emphasize Base being a Superchain member (Base is an independent brand) · so in industry comparisons Optimism is still counted on a standalone basis.

### Superchain governance tension

- **OP Labs vs Base team**: because of Coinbase influence, Base is effectively independent · OP Labs receives sequencer revenue sharing (~10%), but governance influence is limited
- **Worldcoin / Mode / other child chains**: many have their own token + DAO · OP token governance influence weakens
- **Actual progress of shared sequencer**: OP Labs continues to push it · but whether each child chain gives up sequencer revenue is a political issue

### User / dApp / capital distribution

**Web3 Total active addresses (L2 + L1 + Solana, etc. · 2026-Q2  estimate)**:
- All EVM L2 daily active ~10-15M (Base occupies ~30-40%)
- Ethereum L1 daily active ~500k-1M (institutional + large-account concentration)
- Solana daily active ~5-10M (meme coin-led)
- Polygon PoS sidechain ~2-3M (declining · traffic migrates to zkEVM)
- Other ~5M

**Capital distribution (TVL · 2026-Q2  estimate)**:
- Ethereum L1 ~$120B (institutional + whales + old money)
- Total L2  ~$45B (Base $18B + Arbitrum $13B + Optimism $5B + other $9B)
- Solana ~$15B
- Other L1 ~$30B (Tron + BSC + Avalanche + etc)

**DEX volume distribution (2026  daily average)**:
- L2 DEX total ~$3-5B / day (Base-led ~40%)
- Solana DEX total ~$3-6B / day (meme coin-led)
- Ethereum L1 DEX ~$1-2B / day (institutional swaps)
- Other ~$1B / day

### Competition with the Solana ecosystem

See [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]:
- Solana directly competes with Base in meme coin / consumer trading
- But Solana's TPS advantage (post-Firedancer · see [[systems/solana-firedancer-validator-economics|Solana Firedancer]]) means Solana still leads in high-frequency trading
- Base's advantages are L2  security + Coinbase entry point + USDC circulation
- In the long term, Web3  end users may split between Base and Solana · rather than one becoming dominant

### Cross-L2  liquidity fragmentation

- Bridge cost + finality between each L2  is a problem (see [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] and [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]])
- Shared sequencers (Espresso · Astria) and cross-rollup intents (CoW · Bungee) are mitigation measures · but 2026  is still early
- Stablecoin liquidity (USDC · USDT) is dispersed across multiple L2 s · the main source of user friction

## Boundary cases / future trajectory

**Will Base face sequencer constraints from regulation**: Coinbase is regulated by the SEC / CFTC · if the SEC forces the Base sequencer to censor OFAC-sanctioned addresses, it will affect Base's status in the ETH-aligned L2  ecosystem. Coinbase currently publicly promises not to censor · but long-term risk exists.

**Can Arbitrum BoLD permissionless validator drive ARB token value**: BoLD lets anyone deposit ARB to become a validator and verify challenges · but the user experience impact is unclear. Reflection in token value requires verification time.

**Will OP Superchain see fragmentation**: if Superchain members become > 30  · governance coordination difficulty rises · some child chains may fork OP Stack and become independent. Worldcoin / Mantle / Mode have expressed independent-governance intent multiple times.

**Can ZK rollups break from mid-tier to top-tier**: long-term TVL growth of zkSync / Linea / Scroll / Polygon zkEVM is slow · can catalysts (monster dApps · institutional RWA · further cost decline from Fusaka PeerDAS) make ZK break into top-tier?

**Account Abstraction mainstreaming timetable**: Coinbase Smart Wallet / Argent / Braavos / MetaMask Smart Account are all pushing it · among 2026  users, ~20-30% may use AA · mainstreaming possible in 2027-2028  (see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]) · this would greatly improve L2  user experience.

**Stage 2 decentralization timetable**: all current L2 s are Stage 1 · L2Beat's Stage 2 criteria are permissionless validator + 30-day social fallback + full dispute resolution · within 2026 , no public commitment exists to reach Stage 2  by any L2  · 2027-2028+ is possible.

**RWA traffic split**: Polygon zkEVM has the deepest RWA pilots among ZK rollups · but most actual RWA TVL is still on Ethereum L1. Will L2 RWA rise as institutional risk committee acceptance improves?

**Long-term evolution of sequencer revenue**: after Pectra, sequencer margin is stable · but if user count keeps growing · total L2 sequencer revenue in 2027 年 could reach $500M+ · making L2  valuation more quantifiable (similar to SaaS ARR multiples).

**Cross-L2 intent / shared sequencer**: shared sequencers such as Espresso · Astria launch in 2026-2027  · if mainstream L2 s adopt them · the liquidity fragmentation problem will ease · user experience will improve significantly.

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照 2026]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[systems/solana-firedancer-validator-economics|Solana Firedancer validator economics]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]

## Sources

- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Arbiscan · https://arbiscan.io/
- Optimistic Etherscan · https://optimistic.etherscan.io/
- Basescan · https://basescan.org/
- zkSync explorer · https://explorer.zksync.io/
- Polygon zkEVM explorer · https://zkevm.polygonscan.com/
- Scrollscan · https://scrollscan.com/
- Lineascan · https://lineascan.build/
- Optimism Superchain docs · https://docs.optimism.io/superchain
- Arbitrum Orbit docs · https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart
- Base docs · https://docs.base.org/
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
