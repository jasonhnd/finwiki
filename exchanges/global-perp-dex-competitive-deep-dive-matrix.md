---
title: Global perp DEX competitive deep-dive matrix — dYdX v3/v4, Hyperliquid, Vertex, Drift, GMX v1/v2, Synthetix, Kwenta, Aark, Aevo, Apex
aliases:
  - exchanges/global-perp-dex-competitive-deep-dive-matrix
  - global-perp-dex-competitive-deep-dive-matrix
  - perp DEX deep-dive comparison
  - perpetual DEX competitive matrix
  - onchain perp exchange detailed comparison
  - global perp DEX 11-way matrix
  - グローバル Perp DEX 詳細比較マトリクス
domain: exchanges
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [exchanges, matrix, dex, perp, derivatives, defi, clob, vamm, hybrid, mev]
status: active
sources:
  - https://defillama.com/derivatives
  - https://defillama.com/chains
  - https://app.hyperliquid.xyz/
  - https://dydx.exchange/
  - https://gmx.io/
  - https://vertexprotocol.com/
  - https://drift.trade/
  - https://synthetix.io/
  - https://kwenta.io/
  - https://aark.digital/
  - https://www.aevo.xyz/
  - https://pro.apex.exchange/
---

# Global perp DEX competitive deep-dive matrix

## TL;DR

Perpetual-futures DEXs sit on **three structurally distinct liquidity models** — CLOB (central limit order book on-chain or hybrid), vAMM / pool-counterparty (single multi-asset LP pool serves all traders), and hybrid / oracle-pricing — and a reader who flattens them into "all perp DEXs" will misread fee, slippage, MEV resistance, LP risk, and regulatory exposure for every venue. This entry is the **deep-dive 11-way matrix** that complements [[exchanges/global-perp-dex-five-comparison|the 5-way summary]] by adding the **second generation of derivative DEXs** (Synthetix Perps, Kwenta, Aark, Aevo, Apex) and the **v1 / v2 split** for protocols that materially rebuilt their architecture (dYdX v3 vs v4, GMX v1 vs v2). The cross-axes are chain, liquidity model, fee tier, max leverage, asset coverage, settlement asset, MEV protection, gas economics, daily-volume range, and perp-DEX market-share band. The matrix is read alongside [[exchanges/global-dex-major-five-comparison|the global spot DEX major-5 comparison]] and [[exchanges/native-dex-flip-incumbent-pattern|the native-chain-DEX flip-incumbent pattern]] to understand where on-chain derivatives sit relative to spot DEX share migration.

## Wiki route

This sits under [[exchanges/INDEX|exchanges index]] as the perp-DEX deep-dive matrix. Read it with [[exchanges/global-perp-dex-five-comparison|global perp DEX top 5 comparison]] (the predecessor that this entry expands), [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for the spot DEX peer reading, [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]] for the chain-native vs cross-chain structural lens, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana-side detail relevant to Drift, [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]] for the settlement-asset on/off-ramp story, [[exchanges/amm-design-evolution|AMM design evolution]] for the LP-counterparty model history relevant to vAMM perps, [[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]] for the collateral-side LST / LRT routes that several perp DEXs accept as margin, [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for the broader chain landscape, and [[systems/INDEX|systems index]] for the cross-chain routing surface.

## Why this matrix matters

By 2025-2026, perp DEXs collectively cleared meaningful single-day volumes that were occasionally comparable to mid-tier CEX peers, but the underlying architecture is so divergent that a fee-tier comparison alone is misleading. Hyperliquid's purpose-built L1 CLOB has different incident-response properties from dYdX v4's Cosmos-validator-coordinated CLOB; GMX's GLP-pool counterparty model has different LP-risk economics from Drift's vAMM + oracle pricing; Synthetix Perps' Perps v2 / v3 design has different settlement timing from Kwenta's front-end on Synthetix backend; Aevo, Apex, and Aark each chose different chain bases (Layer-2 vs OP Stack appchain vs StarkEx) for different reasons. The matrix below lays the **architecture, gas, fee, leverage, asset coverage, MEV protection, and market-share** axes side by side so a reader can pick the right venue for the right use case (high-leverage liquid pair vs long-tail asset vs MEV-sensitive flow vs LST-collateralised margin) rather than defaulting to whichever DEX has the highest 24h volume on a given day.

## Per-DEX deep-dive

### dYdX v3 (StarkEx L2, 2021-2023)

The original CLOB perp DEX at scale, running on a custom StarkEx instance (zk-rollup Layer-2 on Ethereum) with off-chain order book matching and on-chain settlement. **Settlement asset**: USDC. **Max leverage**: up to 20x on top pairs. **Asset coverage**: ~40 pairs at peak (majors + top-100 alts). **MEV protection**: high — off-chain matching engine with periodic L1 commits removes most of the on-chain MEV surface for individual trades. **Gas economics**: trader pays no gas (deposit/withdraw only), since matching is off-chain; deposit/withdrawal uses Ethereum-L1 gas via the StarkEx escape hatch. **Fee tier**: maker 0.02% / taker 0.05% standard. **Daily-volume range** (active period 2022-2023): commonly $0.5-2B. **Market share**: peak perp-DEX leader for the 2022 cycle.

The v3 architecture had limits: (a) reliance on the off-chain matching server centralises trust, (b) DYDX token governance was decoupled from protocol fees (no native trading-fee accrual to token holders), (c) the StarkEx system constrained chain-level extensibility. dYdX's strategic answer was the v4 rebuild — see next row. Detail: cross-link to [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]] for the USDC settlement-asset on/off-ramp.

### dYdX v4 (Cosmos appchain, 2023-10 launch)

Full architectural rebuild on a custom Cosmos appchain (dYdX Chain) using CometBFT consensus. **CLOB matching is now performed by validators** (each validator runs its own order book and validators reach consensus on the canonical ordering), with **all order-book state and trade settlement on-chain**. **Settlement asset**: USDC. **Max leverage**: 20x. **Asset coverage**: 40+ pairs. **MEV protection**: high (validator-side matching with explicit anti-MEV mechanism). **Gas economics**: trader pays validator-network gas (paid via DYDX), but transaction cost is minimal. **Fee tier**: maker 0.02% / taker 0.05% with rebates. **Daily volume**: typically $0.3-1B (lower than the v3 era as Hyperliquid took share). **Market share**: top-3 perp DEX through 2024-2025.

v4 is the **first fully-on-chain CLOB perp DEX at scale** and the architectural template for the post-2023 generation. The trade-off: by moving matching on-chain into validator consensus, dYdX added the operational risk of validator-set capture but gained credible decentralisation. US-trader access is geo-blocked. Detail: cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for the Cosmos appchain context.

### Hyperliquid (Hyperliquid L1, 2023-)

Purpose-built Layer-1 (HyperBFT consensus, custom EVM-compatible execution layer "HyperEVM") with **fully on-chain CLOB** designed for low-latency order-book trading. **Settlement asset**: USDC (bridged from Arbitrum). **Max leverage**: up to 50x on majors. **Asset coverage**: 100+ perp pairs at any given time, with rapid listing of long-tail assets. **MEV protection**: high (custom L1 with order-flow design optimized against typical MEV vectors). **Gas economics**: trader pays HyperEVM gas, but cost is sub-cent per trade. **Fee tier**: maker rebates available, taker 0.025-0.05% tiered. **Daily-volume range**: $1-5B (occasionally higher during high-volatility events). **Market share**: **dominant perp DEX leader by volume** through 2024-2025, with HYPE token TGE 2024-11 distributed via no-pre-sale emission to retroactive users.

Hyperliquid's distinguishing operational achievement is delivering CEX-class order-book UX (sub-second order placement, tight bid-ask spreads, deep books) on a fully on-chain venue. The team's design choice — running everything on a custom L1 rather than using an existing L1 or L2 — is the key architectural bet. Detail: cross-link to [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]] for the chain-native flip analysis.

### Vertex Protocol (Arbitrum, 2023-)

Hybrid **CLOB + AMM** design on Arbitrum, with off-chain order-book matching and AMM-fallback liquidity. The distinguishing feature is the **integrated multi-product margin account** — spot + perp + money-market positions share a single margin pool, enabling cross-product netting. **Settlement asset**: USDC. **Max leverage**: 10x on majors, lower on alts. **Asset coverage**: 30-50 perp pairs + spot. **MEV protection**: medium-high (off-chain matching). **Gas economics**: Arbitrum L2 gas (sub-cent). **Fee tier**: maker 0.0% / taker 0.02-0.04%. **Daily-volume range**: $0.1-0.4B. **Market share**: top-10 perp DEX.

Vertex Edge (multi-chain expansion) extends the order book across Arbitrum, Mantle, Sei, Base, Blast, and other chains via a synced-orderbook architecture, attempting to capture liquidity across multiple L2s without forcing traders onto a single chain. Detail: cross-link to [[exchanges/amm-design-evolution|AMM design evolution]] for the hybrid CLOB+AMM lineage.

### Drift Protocol (Solana, 2021-)

Solana-native perp DEX using **vAMM (virtual AMM) + oracle pricing + JIT auction** model. Drift v2 (2022) replaced the earlier purely-vAMM design with a hybrid where takers can be filled by JIT (just-in-time) market-maker bots responding within a short auction window before the vAMM fallback. **Settlement asset**: USDC. **Max leverage**: 20x on majors, 10x on alts. **Asset coverage**: 40+ perp pairs. **MEV protection**: medium (Solana's block-leader architecture has known MEV vectors, mitigated by Drift's JIT auction). **Gas economics**: Solana network fees (sub-cent). **Fee tier**: maker 0.01% / taker 0.10% standard with tier discounts. **Daily-volume range**: $0.1-0.3B. **Market share**: top Solana perp DEX, top-10 globally.

Drift's significance is being **the central Solana-ecosystem perp hub**, benefiting from Solana's general resurgence through 2024-2025 and from being the default integration target for Solana-native applications adding perp exposure. DRIFT token launched 2024. Detail: cross-link to [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana-specific context.

### GMX v1 (Arbitrum + Avalanche, 2021-)

The **prototypical pool-counterparty perp DEX** — a single multi-asset pool (**GLP**, holding BTC/ETH/USDC/stables) serves as the counterparty to every trader. Trader PnL is the GLP holder's loss/gain. Prices come from Chainlink oracles with internal keepers. **Settlement asset**: pool assets (BTC/ETH/USDC). **Max leverage**: 50x on majors. **Asset coverage**: limited to GLP-pool-supported assets (BTC, ETH, LINK, UNI + a few). **MEV protection**: low-medium (oracle-update timing creates known front-running surfaces, addressed in v2). **Gas economics**: Arbitrum or Avalanche L1/L2 gas (low). **Fee tier**: 0.1% open/close + dynamic borrow rate. **Daily-volume range**: $0.05-0.2B (down from $0.5-1B peak in 2022-2023). **Market share**: was 2022-2023 perp-DEX leader; now mid-tier.

GMX v1 invented the "GLP as universal counterparty" pattern that many forks (Gains Network, Vela, others) copied. The structural challenge is **toxic flow** — sophisticated traders can systematically extract value from the GLP pool when the oracle update lags real market prices.

### GMX v2 (Arbitrum + Avalanche, 2023-)

Architectural rebuild responding to v1's toxic-flow problem. Introduces **per-market isolated pools (GM pools)** instead of the single GLP, **funding rates** to balance long/short skew, and improved oracle-pricing mechanics. **Settlement asset**: per-market backing asset. **Max leverage**: 100x on majors (specific markets). **Asset coverage**: expanding via per-market pools. **MEV protection**: medium (improved over v1). **Gas economics**: Arbitrum gas (low). **Fee tier**: 0.04-0.07% open/close + funding. **Daily-volume range**: $0.1-0.3B. **Market share**: top-10 perp DEX.

v2 is GMX's attempt to remain relevant after Hyperliquid and dYdX v4 took share. The per-market pool model trades the simplicity of GLP for better risk-isolation, at the cost of fragmenting LP capital across markets.

### Synthetix Perps (Optimism + Base, 2022-)

Perps built on the **Synthetix synth-debt-pool model** — the SNX-staker debt pool provides counterparty liquidity, oracle pricing (Pyth) gives execution price, and traders take leveraged positions against the pool. **Perps v2** (2023) added improved oracle integration; **Perps v3** (2024) modularised the architecture allowing front-ends to plug into the Synthetix backend. **Settlement asset**: sUSD. **Max leverage**: 50x on majors. **Asset coverage**: 40+ pairs (limited by oracle availability). **MEV protection**: medium (oracle-based pricing has timing-attack surfaces, addressed by Pyth pull-oracle mechanism). **Gas economics**: Optimism / Base L2 gas (low). **Fee tier**: maker 0.02% / taker 0.05-0.10% by market. **Daily-volume range**: $0.05-0.2B (much routed via Kwenta, see below). **Market share**: top-15.

Synthetix's significance is being the **backend infrastructure** that multiple front-ends (Kwenta, Polynomial, Lyra-adjacent products) build on, rather than competing as a consumer-facing DEX directly.

### Kwenta (Optimism + Base, 2022-)

Front-end DEX built on Synthetix Perps backend, designed for active traders. KWENTA token holders share fees with stakers. **Settlement asset**: sUSD (inherited from Synthetix). **Max leverage**: 50x. **Asset coverage**: same as Synthetix Perps (40+). **MEV protection**: medium. **Gas economics**: Optimism / Base gas. **Fee tier**: same as Synthetix backend + Kwenta front-end fee. **Daily-volume range**: $0.02-0.1B. **Market share**: top-20.

Kwenta's existence illustrates the **front-end / backend separation** that Synthetix v3 architected — the consumer brand is decoupled from the liquidity backend, which lets multiple front-ends compete on UX while sharing a single liquidity pool.

### Aark Digital (Arbitrum, 2023-)

LP-pool model perp DEX with a **vault-shareholder counterparty design** similar to GMX but with different risk-management and a focus on capital-efficient market-making. **Settlement asset**: USDC. **Max leverage**: 20x on majors. **Asset coverage**: 20-30 pairs. **MEV protection**: medium. **Gas economics**: Arbitrum gas. **Fee tier**: 0.05-0.10%. **Daily-volume range**: $0.01-0.05B. **Market share**: top-30 niche.

Aark is a second-wave entrant competing in the pool-counterparty segment where GMX, GNS, and similar protocols already established the pattern. Differentiation is on the LP risk-management mechanics and capital efficiency.

### Aevo (OP Stack appchain, 2024-)

Successor to Ribbon Finance's options product, Aevo runs a **CLOB-based options + perp venue on a custom OP Stack appchain**. Perps share infrastructure with the options book, enabling cross-product margin. **Settlement asset**: USDC. **Max leverage**: 20x on majors. **Asset coverage**: 40+ pairs (perps + options). **MEV protection**: high (off-chain matching with on-chain settlement). **Gas economics**: OP Stack L2 gas (low). **Fee tier**: maker 0.03% / taker 0.05%. **Daily-volume range**: $0.05-0.2B. **Market share**: top-15 perp + dominant on-chain options.

Aevo's significance is being the **options-and-perps integrated venue** rather than a pure-perp DEX, which serves a different trader segment (volatility / hedging-oriented flows alongside leveraged directional).

### Apex Protocol (StarkEx + zkLink, 2021-)

Perp DEX using StarkEx (similar architectural base to old dYdX v3) and zkLink extensions for cross-chain liquidity. **Settlement asset**: USDC. **Max leverage**: 50x. **Asset coverage**: 50+ pairs. **MEV protection**: medium-high (off-chain matching). **Gas economics**: trader pays no gas (matching off-chain); deposit/withdraw uses underlying chain gas. **Fee tier**: maker 0.02% / taker 0.05%. **Daily-volume range**: $0.05-0.2B. **Market share**: top-15, with strong Asia retail presence.

Apex's differentiation is **strong Asia retail distribution** (significant non-English-language community presence and CEX-style UX) competing for the trader segment that dYdX v3 served before its Cosmos migration.

## Big comparison matrix table

| DEX | Chain / base | Liquidity model | Settlement asset | Max leverage | Asset coverage | Fee tier (maker/taker) | MEV protection | Gas economics for trader | Daily volume range (USD) | Perp-DEX market share band |
|---|---|---|---|---|---|---|---|---|---|---|
| **dYdX v3** | StarkEx L2 (Ethereum) | CLOB (off-chain match) | USDC | 20x | ~40 pairs | 0.02% / 0.05% | High | None (off-chain) | $0.5-2B (2022-2023) | was #1 in 2022 |
| **dYdX v4** | Cosmos appchain (dYdX Chain) | CLOB (validator-matched, fully on-chain) | USDC | 20x | 40+ | 0.02% / 0.05% | High | Validator-network gas (cents) | $0.3-1B | top-3 |
| **Hyperliquid** | Hyperliquid L1 (HyperBFT + HyperEVM) | CLOB (fully on-chain) | USDC (bridged Arb) | 50x | 100+ | rebate / 0.025-0.05% | High | HyperEVM gas (sub-cent) | $1-5B | **#1 by volume** |
| **Vertex** | Arbitrum | CLOB + AMM hybrid | USDC | 10x | 30-50 | 0.0% / 0.02-0.04% | Medium-high | Arbitrum gas (sub-cent) | $0.1-0.4B | top-10 |
| **Drift** | Solana | vAMM + oracle + JIT auction | USDC | 20x | 40+ | 0.01% / 0.10% | Medium | Solana fees (sub-cent) | $0.1-0.3B | top-10 / Solana #1 |
| **GMX v1** | Arbitrum + Avalanche | GLP pool-counterparty + oracle | pool assets | 50x | limited (BTC/ETH/LINK/UNI+) | 0.1% + borrow | Low-medium | Arb/Avax gas | $0.05-0.2B | mid-tier |
| **GMX v2** | Arbitrum + Avalanche | Per-market GM pools + funding | per-market | 100x | expanding | 0.04-0.07% + funding | Medium | Arb gas (low) | $0.1-0.3B | top-10 |
| **Synthetix Perps** | Optimism + Base | Synth-debt-pool + Pyth oracle | sUSD | 50x | 40+ | 0.02% / 0.05-0.10% | Medium | OP / Base gas (low) | $0.05-0.2B | top-15 backend |
| **Kwenta** | Optimism + Base | Synthetix backend (front-end DEX) | sUSD | 50x | 40+ | same + front-end fee | Medium | OP / Base gas | $0.02-0.1B | top-20 front-end |
| **Aark Digital** | Arbitrum | LP-vault counterparty | USDC | 20x | 20-30 | 0.05-0.10% | Medium | Arb gas | $0.01-0.05B | top-30 niche |
| **Aevo** | OP Stack appchain | CLOB (options + perps shared book) | USDC | 20x | 40+ (perps + options) | 0.03% / 0.05% | High | OP Stack gas (low) | $0.05-0.2B | top-15 + options leader |
| **Apex Protocol** | StarkEx + zkLink | CLOB (off-chain match) | USDC | 50x | 50+ | 0.02% / 0.05% | Medium-high | None (off-chain match) | $0.05-0.2B | top-15, Asia retail strong |

## Architecture cross-axis: CLOB vs vAMM vs hybrid

The matrix above lays out 11 venues but they collapse into **three architectural families** that determine fee profile, MEV resistance, and LP economics:

### CLOB family (fully on-chain or hybrid match)

- **Hyperliquid** — fully on-chain CLOB on custom L1
- **dYdX v4** — fully on-chain CLOB on Cosmos appchain (validator-matched)
- **dYdX v3** — off-chain match + on-chain settlement (StarkEx)
- **Apex** — off-chain match + on-chain settlement (StarkEx)
- **Aevo** — off-chain match + on-chain settlement (OP Stack appchain)
- **Vertex** — hybrid CLOB + AMM fallback

**Trader who fits CLOB**: high-frequency / professional traders, those who need limit / stop / IOC / FOK order types, those sensitive to slippage on size, those needing tight bid-ask spreads on majors. Fee economics are typically **maker rebates + taker fees** (familiar to CEX-arbitrage traders). The CLOB family captured share aggressively through 2024-2026 with Hyperliquid leading.

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

Beyond architecture, perp DEXs differentiate on **trader-segment fit**:

| Trader segment | Best-fit venues | Why |
|---|---|---|
| Professional / HF arbitrage | Hyperliquid, dYdX v4 | CLOB depth, low latency, MEV protection |
| High-leverage degens | Hyperliquid (50x), GMX v2 (100x), Apex (50x), Drift (20x) | Leverage ceiling matters |
| Long-tail asset traders | Hyperliquid (100+ pairs), Drift, Aevo | Asset coverage breadth |
| LST / restaking collateral | (chain-specific) — Drift accepts JitoSOL; some EVM venues accept stETH | LST-as-margin economics |
| Solana-native | Drift | Solana ecosystem depth |
| Options + perps cross-margin | Aevo | Integrated options book |
| Multi-product (spot + perp + money market) | Vertex | Unified margin account |
| Asia retail (non-English-first UX) | Apex, Hyperliquid | Distribution + UX choices |
| Institutional / DeFi-native funds | dYdX v4, Hyperliquid | Decentralisation + auditability |

The LST / restaking collateral row connects to [[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]] for the LST-as-collateral mechanics across venues.

## Boundary cases

- **CEX-equivalent or not?** — Hyperliquid's order-book latency and depth on top pairs approach CEX comparability (Binance perp, Bybit perp). However, the regulatory posture differs entirely: Hyperliquid geo-blocks US traders, runs no centralised KYC, and operates with no jurisdictional licence. A CEX-comparable UX should not be confused with CEX-equivalent regulatory standing.
- **dYdX v3 vs v4 read as one product or two?** — The architectural rebuild was extensive enough (different chain, different consensus, different token utility) that they are best read as **two products from the same team** rather than one product across versions. The matrix gives each its own row.
- **GMX v1 vs v2 read as one product or two?** — Similar to dYdX, GMX v1 (GLP single-pool) and v2 (per-market GM pools + funding) are structurally different enough to warrant separate rows. Both remain live as of 2026 with different LP profiles.
- **Synthetix Perps and Kwenta double-counting** — Kwenta is a front-end on Synthetix Perps' backend. Daily-volume figures for Kwenta are largely **also counted in Synthetix Perps' volume**, since Kwenta routes orders to the Synthetix backend. Cross-protocol volume reporting (e.g., DefiLlama derivatives) sometimes double-counts; the matrix separates the rows for clarity but a reader should aggregate them when computing total Synthetix-stack flow.
- **Drift on Solana vs the rest on EVM** — Solana's account-model and block-leader architecture changes MEV dynamics, slot-time guarantees, and gas economics in ways that don't map cleanly to EVM analogies. Comparison of Drift's MEV-protection vs EVM peers requires reading the Solana-specific JIT-auction model rather than treating MEV protection as a single dimension.
- **Aevo as "options + perps" rather than "perp DEX"** — Aevo's economic identity is the integrated options-and-perp venue; treating it purely as a perp DEX understates the options-side flow that uses the same margin account. The matrix includes Aevo but flags that the options book is its primary differentiator.
- **Hyperliquid HYPE token TGE economics** — Hyperliquid's 2024-11 token launch with no pre-sale and emission distributed to retroactive users is structurally different from dYdX, GMX, Drift, and Synthetix token economics. Token-side comparisons require separate analysis (not covered in this matrix's volume / fee axes).
- **Cross-chain settlement on/off-ramp** — Several perp DEXs use USDC as settlement asset but the on-ramp routes differ (Arbitrum-native, Solana-native, Cosmos appchain, OP Stack). The settlement-asset row in the matrix records the canonical asset, but the practical on-ramp UX is a separate dimension — see [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]] for the bridge-side detail.
- **Volume figures are approximate ranges, not point estimates** — Perp DEX daily volumes swing 5-10x with market volatility. The "daily volume range" column gives an active-market reasonable range based on 2024-2026 observation; readers should consult [DefiLlama derivatives](https://defillama.com/derivatives) for current point-in-time figures.
- **JP and US regulatory exposure** — None of the perp DEXs in this matrix appear on [[exchanges/jvcea-whitelist-token-listing|JVCEA WhiteList]] for JP-side native-token listing, and most geo-block US traders following CFTC / SEC engagement. Reading this matrix against JP CEX equivalents like the [[exchanges/japan-cex-parent-fg-adjacency-matrix|JP CEX parent FG adjacency matrix]] surfaces the regulatory-licensing gap between on-chain perp DEX and JP-domestic VASP.

## Settlement-asset side-by-side

| Settlement asset | Used by | Implication |
|---|---|---|
| USDC | dYdX v3, dYdX v4, Hyperliquid, Vertex, Drift, GMX (USDC slice of GLP), Aark, Aevo, Apex | Default modern stablecoin; on-chain availability of USDC across L2s and Solana is sufficient; **Circle counterparty / issuance risk is shared across most of the matrix** |
| sUSD | Synthetix Perps, Kwenta | Synthetix-native algorithmic stable backed by SNX debt-pool; **different risk profile from USDC** — not Circle-issued |
| pool assets (BTC / ETH / LINK / UNI / USDC) | GMX v1 | GLP pool composition is the de-facto settlement basket; **multi-asset risk exposure** at LP level |
| per-market backing asset | GMX v2 | Per-market GM pool composition; **risk isolated by market** |

The USDC-dominated settlement landscape is structurally significant — it concentrates **Circle issuance / regulatory / reserve-management risk** as a cross-DEX systemic factor. If Circle were to face issuance disruption, the majority of the perp-DEX volume in the matrix would be affected simultaneously. This is one of the under-acknowledged systemic risk axes in on-chain derivatives.

## Chain-base footprint summary

| Chain / base | Perp DEXs hosted | Cumulative perp-DEX share contribution |
|---|---|---|
| Hyperliquid L1 | Hyperliquid | very high (single venue, dominant market share) |
| Cosmos appchain (dYdX Chain) | dYdX v4 | high |
| Arbitrum | Vertex, GMX v1/v2, Aark | medium-high (multi-venue) |
| Avalanche | GMX v1/v2 | low-medium |
| Solana | Drift | medium (single dominant venue on chain) |
| Optimism | Synthetix Perps, Kwenta | low-medium |
| Base | Synthetix Perps (post-Base launch), Kwenta | low-medium (growing) |
| OP Stack appchain | Aevo | low-medium |
| StarkEx L2 | dYdX v3 (legacy), Apex | low (historical + Asia-retail niche) |
| zkLink | Apex (cross-chain extension) | very low |

The chain-base distribution shows **purpose-built infrastructure (Hyperliquid L1, dYdX Cosmos appchain, OP Stack appchains)** winning share over **shared-L2 infrastructure (Arbitrum, Optimism, Base)** through 2024-2025. The chain-native flip pattern documented in [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]] applies — venues that control their own chain capture the volume that chain-tenant venues forfeit to chain congestion and shared-MEV exposure.

## Architectural-evolution timeline

| Year | Event | Architectural significance |
|---|---|---|
| 2018-08 | dYdX margin trading (precursor) launch | First non-derivatives DEX experiment with leverage |
| 2020 | Perpetual Protocol v1 (vAMM on xDai) | First vAMM perp at scale (predecessor to GMX-lineage) |
| 2021-04 | dYdX v3 launch on StarkEx L2 | First CLOB perp DEX at scale; CEX-comparable UX |
| 2021-08 | GMX launch on Arbitrum | GLP pool-counterparty pattern established |
| 2021-09 | Drift v1 launch on Solana | Solana-native perp DEX (purely vAMM initially) |
| 2022 | Synthetix Perps v1 + Kwenta launch | Synth-debt-pool perp model, front-end/backend split begins |
| 2023-06 | dYdX v4 mainnet on Cosmos | First fully-on-chain CLOB perp DEX |
| 2023-08 | GMX v2 launch | Per-market GM pools + funding model |
| 2023-Q3 | Vertex Protocol launch | Hybrid CLOB+AMM with multi-product margin account |
| 2024-Q1 | Hyperliquid mainnet maturation | Custom L1 fully-on-chain CLOB takes share |
| 2024-Q2 | Aevo launch on OP Stack appchain | Options + perps integrated CLOB venue |
| 2024-11 | Hyperliquid HYPE TGE | No-pre-sale emission-to-retroactive-users distribution |
| 2025 | Cross-chain perp aggregator emergence | Vertex Edge, intent-based perp routing experiments |

The trajectory shows **CLOB winning architecturally** through 2024-2025 (Hyperliquid + dYdX v4 leading on volume), with **pool-counterparty / vAMM models retaining a niche** in specific positioning (Drift on Solana, GMX v2 for high-leverage isolated markets). The next architectural inflection is plausibly **intent-based cross-chain perp routing** (allowing a trader to execute on whichever chain has best liquidity without bridge UX), but that pattern is not yet at scale as of 2026.

## Fee-economics summary

A practical fee-take-rate comparison (taker side, before rebates and tier discounts):

| DEX | Standard taker fee | Funding mechanism | Effective annualized cost for 1x position |
|---|---|---|---|
| Hyperliquid | 0.025-0.05% | Funding rate floats with skew | depends on funding (volatile) |
| dYdX v4 | 0.05% | Funding rate floats | depends on funding |
| dYdX v3 | 0.05% | Funding rate floats | depends on funding |
| Vertex | 0.02-0.04% | Funding rate | low fee + funding |
| Drift | 0.10% | Funding rate | medium fee + funding |
| GMX v1 | 0.10% open + 0.10% close | Borrow rate (continuous, not 0-sum) | higher cost — borrow is structurally positive |
| GMX v2 | 0.04-0.07% open + close | Funding rate | medium |
| Synthetix Perps | 0.05-0.10% (market dependent) | Funding rate | medium |
| Kwenta | same + front-end | Funding rate | medium-high |
| Aark | 0.05-0.10% | Funding | medium |
| Aevo | 0.05% | Funding | low-medium |
| Apex | 0.05% | Funding | low-medium |

**Key economic distinction**: GMX v1's borrow-rate model is **structurally cost-positive for the trader** (the LP earns continuous borrow), unlike funding-rate models which are **zero-sum between longs and shorts**. This makes GMX v1 less attractive for hold-long-duration positions and more attractive for quick directional bets, while funding-rate venues can be cheaper for long-hold positions depending on funding direction. Understanding the fee + funding/borrow stack is essential for cross-venue comparison.

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
- Volume and market share approximations cross-referenced against DefiLlama derivatives and public dashboards (Dune, public team disclosures)
