---
source: exchanges/global-perp-dex-competitive-deep-dive-matrix
source_hash: 857f5528a3e936e2
lang: en
status: machine
fidelity: ok
title: "Global perp DEX competitive deep-dive matrix"
translated_at: 2026-07-29T11:02:23.000Z
---

# Global perp DEX competitive deep-dive matrix

## TL;DR

Perpetual-futures DEXs use structurally different liquidity models: CLOB, vAMM / pool-counterparty, and hybrid / oracle-pricing. This entry compares venue and version architecture, including dYdX v3 / v4 and GMX v1 / v2, without freezing fees, leverage, listed markets, settlement parameters, volume, or market share. Those live fields must be checked in the official product pages linked below. Read this with [[exchanges/global-dex-major-five-comparison|the global spot DEX major-5 comparison]] and [[exchanges/native-dex-flip-incumbent-pattern|the native-chain-DEX flip-incumbent pattern]].

## Wiki route

This sits under [[exchanges/INDEX|exchanges index]] as the perp-DEX deep-dive matrix. Read it with [[exchanges/global-perp-dex-five-comparison|global perp DEX top 5 comparison]] (the predecessor that this entry expands), [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for the spot DEX peer reading, [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]] for the chain-native vs cross-chain structural lens, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana-side detail relevant to Drift, [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]] for the settlement-asset on/off-ramp story, [[exchanges/amm-design-evolution|AMM design evolution]] for the LP-counterparty model history relevant to vAMM perps, [[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]] for the collateral-side LST / LRT routes that several perp DEXs accept as margin, [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for the broader chain landscape, and [[systems/INDEX|systems index]] for the cross-chain routing surface.

## Why this matrix matters

Architecture determines matching, settlement, oracle, LP-counterparty, sequencing, and bridge risk. The matrix therefore compares those design boundaries and gives an official verification route for live trading parameters. It does not recommend a venue from a dated fee, leverage, asset-count, volume, or market-share snapshot.

## Per-DEX deep-dive

### dYdX v3 (StarkEx L2, 2021-2023)

Historical dYdX v3 used a custom StarkEx instance with off-chain order-book matching and on-chain settlement. Verify historical settlement, leverage, markets, fee schedule, gas path, and activity in dated dYdX v3 documentation rather than treating old parameters as current.

The v3 architecture had limits: (a) reliance on the off-chain matching server centralises trust, (b) DYDX token governance was decoupled from protocol fees (no native trading-fee accrual to token holders), (c) the StarkEx system constrained chain-level extensibility. dYdX's strategic answer was the v4 rebuild — see next row. Detail: cross-link to [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]] for the USDC settlement-asset on/off-ramp.

### dYdX v4 (Cosmos appchain, 2023-10 launch)

dYdX v4 moved to dYdX Chain, a Cosmos appchain using CometBFT, with order-book handling and settlement coordinated by the chain's validator architecture. Verify current collateral, leverage, markets, fees, gas, and eligibility in the live dYdX documentation.

The v4 design changes the trust and operational boundary from the v3 matching-server model to a validator-coordinated chain. Verify current geographic eligibility in official terms. See [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for the Cosmos appchain context.

### Hyperliquid (Hyperliquid L1, 2023-)

Hyperliquid uses a purpose-built chain and an on-chain order-book venue. Verify current settlement and bridge routes, leverage, listed markets, fee tiers, execution costs, and jurisdictional eligibility in its live product documentation.

The relevant architectural choice is operating an order-book venue on a purpose-built chain rather than a shared L1 or L2. Do not infer latency, spread, depth, or leadership without a dated measurement. See [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]].

### Vertex Protocol (Arbitrum, 2023-)

Vertex documents a hybrid CLOB + AMM design and an integrated margin account spanning product types. Verify current deployments, collateral, leverage, markets, fees, execution path, and availability in official documentation.

Vertex Edge (multi-chain expansion) extends the order book across Arbitrum, Mantle, Sei, Base, Blast, and other chains via a synced-orderbook architecture, attempting to capture liquidity across multiple L2s without forcing traders onto a single chain. Detail: cross-link to [[exchanges/amm-design-evolution|AMM design evolution]] for the hybrid CLOB+AMM lineage.

### Drift Protocol (Solana, 2021-)

Drift documents a Solana-native design combining vAMM, oracle pricing, and JIT auction mechanics. Verify current collateral, leverage, markets, fees, liquidation, execution, and network-cost assumptions in the live Drift documentation.

For Solana-specific sequencing, oracle, and integration context, see [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]. This entry does not assert a permanent ecosystem rank.

### GMX v1 (Arbitrum + Avalanche, 2021-)

GMX v1 uses a multi-asset GLP pool as trader counterparty with oracle and keeper dependencies. Verify the active pool composition, supported markets, leverage, fees, funding or borrowing costs, and deployment status in current GMX documentation.

GMX v1 invented the "GLP as universal counterparty" pattern that many forks (Gains Network, Vela, others) copied. The structural challenge is **toxic flow** — sophisticated traders can systematically extract value from the GLP pool when the oracle update lags real market prices.

### GMX v2 (Arbitrum + Avalanche, 2023-)

GMX v2 replaces the single GLP model with per-market pools, funding mechanics, and updated oracle handling. Verify current backing assets, leverage, markets, fees, funding, and deployments in live GMX documentation.

The per-market pool model changes the risk-isolation and liquidity-fragmentation trade-off relative to v1; it is not evidence of a current competitive rank.

### Synthetix Perps (Optimism + Base, 2022-)

Synthetix Perps uses a debt-pool and oracle-based derivatives architecture with front ends connecting to backend liquidity. Verify the active version, collateral, markets, leverage, fees, settlement, oracle, and deployment in current Synthetix documentation.

Synthetix's significance is being the **backend infrastructure** that multiple front-ends (Kwenta, Polynomial, Lyra-adjacent products) build on, rather than competing as a consumer-facing DEX directly.

### Kwenta (Optimism + Base, 2022-)

Kwenta is a trading front end built on Synthetix Perps infrastructure. Verify the current backend version, supported markets, collateral, leverage, fees, settlement, and deployment in Kwenta and Synthetix documentation.

Kwenta's existence illustrates the **front-end / backend separation** that Synthetix v3 architected — the consumer brand is decoupled from the liquidity backend, which lets multiple front-ends compete on UX while sharing a single liquidity pool.

### Aark Digital (Arbitrum, 2023-)

Aark documents an LP-vault counterparty model for perpetual trading. Verify current collateral, markets, leverage, fees, oracle and liquidation mechanics, deployment, and availability in official documentation.

Aark is a second-wave entrant competing in the pool-counterparty segment where GMX, GNS, and similar protocols already established the pattern. Differentiation is on the LP risk-management mechanics and capital efficiency.

### Aevo (OP Stack appchain, 2024-)

Aevo documents a CLOB-based options and perpetual venue using appchain infrastructure and shared margin. Verify current markets, collateral, leverage, fees, matching and settlement, deployment, and eligibility in official documentation.

Aevo's significance is being the **options-and-perps integrated venue** rather than a pure-perp DEX, which serves a different trader segment (volatility / hedging-oriented flows alongside leveraged directional).

### Apex Protocol (StarkEx + zkLink, 2021-)

ApeX documents an order-book perpetual venue using validity-system and cross-chain components. Verify current collateral, markets, leverage, fees, matching and settlement, deposit routes, and eligibility in official documentation.

Distribution and user-segment claims require dated evidence and are not used as a ranking in this matrix.

## Big comparison matrix table

Source: official venue pages listed below. Fees, leverage limits, listed markets, daily volume and market share change frequently, so the matrix records only the public verification entry and the architecture scope described by each venue.

| Venue | Official public entry | Architecture scope to verify |
|---|---|---|
| **dYdX** | https://dydx.exchange/ | dYdX Chain trading architecture |
| **Hyperliquid** | https://app.hyperliquid.xyz/ | purpose-built chain and order-book venue |
| **Vertex** | https://vertexprotocol.com/ | integrated spot / perpetual venue |
| **Drift** | https://drift.trade/ | Solana-based trading protocol |
| **GMX** | https://gmx.io/ | pool-based perpetual products |
| **Synthetix** | https://synthetix.io/ | derivatives liquidity infrastructure |
| **Kwenta** | https://kwenta.io/ | trading front end and supported markets |
| **Aark Digital** | https://aark.digital/ | perpetual trading product |
| **Aevo** | https://www.aevo.xyz/ | options and perpetual venue |
| **ApeX** | https://pro.apex.exchange/ | order-book perpetual venue |

Use the live product documentation for current leverage, markets, fees and settlement assets; use DefiLlama only as a point-in-time external dashboard, not as a fixed ranking.

## Architecture cross-axis: CLOB vs vAMM vs hybrid

The matrix above lays out 11 venues but they collapse into **three architectural families** that determine fee profile, MEV resistance, and LP economics:

### CLOB family (fully on-chain or hybrid match)

- **Hyperliquid** — fully on-chain CLOB on custom L1
- **dYdX v4** — fully on-chain CLOB on Cosmos appchain (validator-matched)
- **dYdX v3** — off-chain match + on-chain settlement (StarkEx)
- **Apex** — off-chain match + on-chain settlement (StarkEx)
- **Aevo** — off-chain match + on-chain settlement (OP Stack appchain)
- **Vertex** — hybrid CLOB + AMM fallback

**Trader who fits CLOB**: users who need order-book execution and specific order types should verify each venue's current order types, matching location, depth, fee schedule, and jurisdictional eligibility. This architecture family is not a market-share ranking.

### vAMM / pool-counterparty family

- **GMX v1** — GLP single multi-asset pool
- **GMX v2** — per-market GM pools
- **Aark Digital** — LP-vault counterparty (GMX-lineage)
- **Drift** — vAMM + JIT auction (Solana)
- **Synthetix Perps** — synth-debt-pool

**Trader who fits vAMM**: traders comfortable with oracle-pricing slippage models, those who prefer "everyone trades at oracle mid" semantics, smaller-size traders for whom CLOB depth is not the binding constraint. **LP-side economics dominate** — the LP / debt-pool holder is the structural counterparty to all trader PnL, which creates a different risk-return profile than passive LP'ing in spot AMMs. The model has structural toxic-flow vulnerability that v2 generations (GMX v2, Drift v2) work hard to mitigate.

### Front-end on shared backend family

- **Kwenta** — front-end on Synthetix Perps backend

**Significance**: the front-end / backend separation is what Synthetix v3 architected as a deliberate platform play. Other protocols (Polynomial, Lyra-adjacent) follow the same model. The front-end-only DEX competes on UX, fee-share, and trader segment targeting, while sharing the same underlying liquidity pool.

## Trader-segment fit

Beyond architecture, venue selection depends on a trader's required order types, collateral, settlement chain and risk controls.

Source: each venue's current product documentation, reached from the official links in the main matrix above.

| Trader requirement | What to verify before selection |
|---|---|
| Order-book execution | supported order types, matching location and settlement path |
| Leverage | current market-level cap, margin mode and liquidation rules |
| Collateral | accepted assets, haircuts and withdrawal constraints |
| Cross-product margin | whether spot, perpetuals and options share collateral |
| Chain access | deposit route, bridge assumptions and network fees |
| Institutional controls | API, subaccounts, permissions, reporting and jurisdictional eligibility |

The LST / restaking collateral row connects to [[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]] for the LST-as-collateral mechanics across venues.

## Boundary cases

- **CEX-equivalent or not?** — order-book UX does not establish equivalent latency, depth, KYC, licensing, or customer protection. Verify each field independently from current product terms, measurements, and official registers.
- **dYdX v3 vs v4 read as one product or two?** — The architectural rebuild was extensive enough (different chain, different consensus, different token utility) that they are best read as **two products from the same team** rather than one product across versions. The matrix gives each its own row.
- **GMX v1 vs v2 read as one product or two?** — GMX v1 (GLP single-pool) and v2 (per-market pools + funding) are structurally different enough to warrant separate rows. Verify each version's live status in current documentation.
- **Synthetix Perps and Kwenta double-counting** — because Kwenta is a front end on Synthetix infrastructure, external activity datasets may overlap. Review each provider's methodology before aggregation; this matrix does not publish a combined volume.
- **Drift on Solana vs the rest on EVM** — Solana's account-model and block-leader architecture changes MEV dynamics, slot-time guarantees, and gas economics in ways that don't map cleanly to EVM analogies. Comparison of Drift's MEV-protection vs EVM peers requires reading the Solana-specific JIT-auction model rather than treating MEV protection as a single dimension.
- **Aevo as "options + perps" rather than "perp DEX"** — Aevo's economic identity is the integrated options-and-perp venue; treating it purely as a perp DEX understates the options-side flow that uses the same margin account. The matrix includes Aevo but flags that the options book is its primary differentiator.
- **Token economics** — token issuance, allocation, fee linkage, and governance are outside this matrix. Use dated issuer or governance materials for any comparison.
- **Cross-chain settlement on/off-ramp** — Several perp DEXs use USDC as settlement asset but the on-ramp routes differ (Arbitrum-native, Solana-native, Cosmos appchain, OP Stack). The settlement-asset row in the matrix records the canonical asset, but the practical on-ramp UX is a separate dimension — see [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]] for the bridge-side detail.
- **Volume methodology** — this matrix excludes fixed volume ranges and rankings. If using [DefiLlama derivatives](https://defillama.com/derivatives), record the timestamp, venue/version mapping, and aggregation method.
- **JP and US regulatory exposure** — verify token-list status, product eligibility, geo-restrictions, and provider registration independently in current official lists and terms. See [[exchanges/jvcea-whitelist-token-listing|JVCEA WhiteList]] and [[exchanges/japan-cex-parent-fg-adjacency-matrix|JP CEX parent FG adjacency matrix]] for adjacent context.

## Settlement-asset side-by-side

Source: each venue's current product documentation, reached from the official links in the main matrix above.

| Settlement design | What to verify |
|---|---|
| Stablecoin margin | issuer, native or bridged form, redemption path and depeg controls |
| Protocol-native synthetic | collateral model, oracle, debt-pool exposure and redemption |
| Pool-asset settlement | pool composition, trader/LP counterparty relationship and withdrawal rules |
| Per-market backing | isolation boundary, eligible backing asset and funding mechanics |

Do not infer current venue exposure from an old product version; verify the active market and chain at the time of use.

## Chain-base footprint summary

Source: official venue pages in the main matrix above.

| Deployment pattern | Examples to verify in current documentation | Main operational question |
|---|---|---|
| Purpose-built chain | Hyperliquid, dYdX Chain | validator, sequencing and bridge assumptions |
| Shared L1 / L2 | Arbitrum, Avalanche, Solana, Optimism, Base | shared congestion, oracle and settlement dependencies |
| Appchain / validity system | OP Stack appchain, StarkEx, zkLink | operator, data availability and escape path |

This is an architecture map, not a market-share ranking.

## Architectural-evolution timeline

Source: dated release notes or documentation from each official venue link in the main matrix.

| Change type | Evidence required before adding an event |
|---|---|
| Mainnet or product launch | dated official announcement and active documentation |
| Version migration | old/new architecture boundary and migration status |
| Chain deployment | official deployment announcement and live product route |
| Token or governance change | official governance proposal or issuer announcement |

Avoid ordinal claims such as "first" or predictions about the next architecture unless a bounded comparative source supports them.

## Fee-economics summary

Source: each venue's live fee schedule and market rules, reached from the official links in the main matrix.

| Cost component | What to capture at quote time |
|---|---|
| Maker / taker fee | account tier, market and rebate eligibility |
| Funding | current rate, interval, direction and calculation base |
| Borrow / pool fee | utilization or skew formula and accrual interval |
| Gas / execution | chain fee, keeper fee and bridge cost |
| Liquidation | maintenance margin, penalty and insurance-fund mechanics |

Do not publish a fixed annualized-cost ranking without a stated position, holding period, funding path and timestamp.

## Related

- [[exchanges/INDEX]]
- [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/native-dex-flip-incumbent-pattern]]
- [[exchanges/solana-ecosystem-dex-comparison]]
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/liquid-staking-restaking-cex-exposure]]
- [[exchanges/cex-matching-engine-wallet-architecture]]
- [[exchanges/global-cex-prime-brokerage-layer]]
- [[exchanges/japan-cex-parent-fg-adjacency-matrix]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/INDEX]]
- [[exchanges/jvcea-whitelist-token-listing]]

## Sources

- DefiLlama Derivatives dashboard (volume, market share): https://defillama.com/derivatives
- DefiLlama Chains: https://defillama.com/chains
- Hyperliquid product page: https://app.hyperliquid.xyz/
- dYdX product page: https://dydx.exchange/
- GMX product page: https://gmx.io/
- Vertex Protocol: https://vertexprotocol.com/
- Drift Protocol: https://drift.trade/
- Synthetix: https://synthetix.io/
- Kwenta: https://kwenta.io/
- Aark Digital: https://aark.digital/
- Aevo: https://www.aevo.xyz/
- Apex Protocol: https://pro.apex.exchange/
- Point-in-time volume dashboard for optional external verification: https://defillama.com/derivatives
