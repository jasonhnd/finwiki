---
source: exchanges/dex-jito-solana
source_hash: b98c1984127be819
lang: en
status: machine
fidelity: ok
title: "Jito — Solana liquid staking + MEV redistribution protocol overview"
translated_at: 2026-05-31T03:19:56.442Z
---

# Jito — Solana liquid staking + MEV redistribution protocol overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the Solana ecosystem context, [[exchanges/dex-raydium-solana|Raydium]] / [[exchanges/dex-orca-solana|Orca]] for adjacent DEX peer context, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / mechanism boundary.

> The 2 -layer structure of Jito Labs (MEV client) + Jito Foundation (LST protocol) · JitoSOL (LST) · JTO (governance token, 2023-12 airdrop launch)

## 1. Protocol overview

Jito is a **collective name bundling 2  distinct products** on Solana:

1. **Jito-Solana validator client** (Jito Labs): a client that embeds MEV-extraction functionality into the standard Solana validator. Adopted by **80%+** of Solana stake (the de facto standard implementation as of 2026 年)
2. **JitoSOL** (Jito Foundation): a Liquid Staking Token (LST). Stakes SOL and issues JitoSOL inclusive of marginal MEV rewards
3. **JTO token** (governance): 2023-12-07 airdrop launch, one of the 1  largest-ever retroactive distributions in Solana history

- **Chain**: Solana L1
- **Official URL**: jito.network
- **TVL (2024–2026)**: on the order of $2–4B; JitoSOL occupies **70%+** of the Solana LST market

## 2. JitoSOL design (MEV-aware LST)

Unlike other Solana LSTs (mSOL / bSOL, etc.), JitoSOL adopts a design that **embeds MEV rewards into the staking yield**:

- Ordinary LSTs: validator inflation + transaction fees (staking yield only)
- JitoSOL: the above + **MEV tips (the block-builder tips that the Jito-Solana client extracts)**
- Result: offers an APY 50–200 bps higher than other LSTs (varies with market volatility)
- 1 The SOL-conversion rate of JitoSOL increases over time (an exchange-rate model rather than rebasing)

## 3. MEV redistribution mechanism (Jito-Solana client)

Relative to the standard Solana validator client (Agave), the Jito-Solana client adds the following:

- **block-builder auction**: the Jito Block Engine solicits bundles at each slot
- **searcher bundle submission**: MEV searchers submit atomic bundles (with bids)
- **validator MEV tip**: the winning bundle's tip is distributed to the validator + JitoSOL stakers
- **anti-front-running design**: achieves ordered transaction inclusion on Solana, which has no mempool

Because 80%+ of Solana stake adopts the Jito-Solana client, JitoSOL stake holders effectively earn yield indirectly from Solana's MEV economy as a whole.

## 4. JTO token / Jito DAO

- **launch**: 2023-12-07 airdrop launch (targeting major LST stakers, MEV searchers, validators, etc. on Solana)
- **Total supply**: 1B JTO
- **Allocation**: community approx. 34.3%, ecosystem development approx. 25%, investors approx. 16.2%, core contributors approx. 24.5%
- **governance**: operated via Realms-based voting of the Jito DAO
- **After 2024–2026 launch**: the Jito Restaking module (introducing the LRT concept on Solana), expansion of Jito Network functionality

## 5. Positioning in the Solana LST market

| LST | TVL | Design | MEV embedded |
|---|---|---|---|
| **JitoSOL** | $2–4B | exchange rate, MEV-aware | ○ (the core differentiator) |
| mSOL (Marinade) | $0.8–1.5B | exchange rate, decentralized staking | × |
| bSOL (BlazeStake) | $200–400M | exchange rate | × |
| INF (Sanctum Infinite) | $300–600M | aggregate of LSTs (meta-LST) | △ (depends on constituent LSTs) |

JitoSOL **overtook Marinade in 2024 年, establishing the #1 位 position in the Solana LST market**. The structural yield advantage of embedded MEV is the deciding factor.

## 6. CEX / DeFi integration

- **CEX integration**: JTO spot listings on Binance / Coinbase / Kraken, etc. (shortly after the 2023-12 launch)
- **DeFi integration**: widely adopted as JitoSOL collateral in Solana lending such as Marginfi / Kamino / Drift
- **Raydium / Orca pools**: the JitoSOL / SOL pair is one of the largest LST liquidity pools on Solana DEXs
- **Restaking**: from 2024  onward, introduces the LRT concept via the Jito Restaking module, building out an AVS economy on Solana

## 7. Major events / history

- **2021–2022**: Jito Labs begins developing a Solana validator MEV client
- **During 2022 **: JitoSOL launch (begins offering liquid staking)
- **2023-08**: the Jito-Solana client gains a majority of Solana validator stake
- **2023-12-07**: JTO airdrop launch, a retroactive distribution on the order of $165M
- **2024**: JitoSOL takes the top spot in the Solana LST market
- **2024–2025**: rollout of the Jito Restaking module, introduction of the LRT concept
- **2026**: in the Solana ETF discussion, proposals for ETFs that include JitoSOL also appear (within the scope of public materials)

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana ecosystem
- [[exchanges/dex-raydium-solana]] — major Solana DEX
- [[exchanges/dex-orca-solana]] — major Solana DEX
- [[exchanges/INDEX]] — exchange domain index
- [[exchanges/global-cex-top10-comparison]] — CEXs where JTO is listed
- [[exchanges/amm-design-evolution]] — AMM design (in the context of LST liquidity)

## Sources

- Compilation of public information (Jito Foundation official docs, jito.network)
- Compilation of public information (Jito Labs MEV-aware validator client spec / Block Engine docs)
- Compilation of public information (DefiLlama JitoSOL dashboard TVL)
- Compilation of public information (JTO airdrop 2023-12-07 launch event official)
- Compilation of public information (Solana Foundation validator stake distribution)
