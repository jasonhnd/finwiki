---
source: fintech/frax-frxusd-defi-stablecoin
source_hash: 90722eb01b8c51f9
lang: en
status: machine
fidelity: ok
title: "Frax frxUSD · DeFi-Native Stablecoin \"Semi-Compliance\" Route"
translated_at: 2026-05-31T06:16:15.705Z
---

# Frax frxUSD · DeFi-Native Stablecoin "Semi-Compliance" Route

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation: legal framework for tokens, crypto-assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal regime: three-layer structure (JPYC, USDC, Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> Frax Finance v3  upgrade (2024-Q2) replaced old FRAX with frxUSD, adopting a "**100% UST reserves + DAO governance**" dual-track approach — the former satisfies §501  compliance reserve requirements, while the latter maintains DeFi-native decentralized governance. frxUSD market cap **$1.2B** (2026-Q1) is far smaller than Sky USDS, but staked sfrxUSD **7-9% APY** is the highest among DeFi-native stablecoins. **2026-Q2  frxUSD connected BlackRock BUIDL ~$200M**, making it the first DeFi protocol to hold BUIDL directly → a representative solution for "semi-compliance" in the §501  era.

## Key facts

- frxUSD market cap **$1.2B** (2026-Q1) · sfrxUSD APY **7-9%** (tracking SOFR + Frax internal yield) ^[extracted]
- RWA collateral ~$1.0B (of which BUIDL ~$200M · connected 2026-Q2 ) ^[extracted]
- Fraxtal L2  TVL **$450M** (Frax proprietary L2  · Optimism Superchain member · launched 2024-02 ) ^[extracted]
- FXS token market cap ~$300M · veFXS locked ~65 million FXS (45% of circulating supply) ^[extracted]
- Frax protocol annual revenue ~**$45M** (2025  estimate) ^[extracted]
- Frax Ether (frxETH) market cap ~$700M · FPI (Frax CPI-anchored) market cap ~$80M ^[extracted]
- v3  upgrade 3  key moves: replace FRAX with frxUSD / sfrxUSD staking / Fraxtal L2  ^[extracted]

## Mechanism / How it works

Frax takes a middle path: **reserve compliance ([[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + UST) + governance decentralization (veFXS DAO)**. Unlike Circle/Paxos's full compliance (losing decentralization DNA), and unlike Sky USDS's full decentralization (losing compliance channels). Sam Kazemian publicly stated in 2024-09  that "frxUSD takes a hybrid route." Mechanism: users deposit frxUSD → receive sfrxUSD → automatically earn 7-9% yield (from SOFR + Frax internal yield strategies + BUIDL direct holding returns). Fraxtal L2  = uses frxUSD as native gas asset, **locking liquidity through internal circulation** — users on Fraxtal consume frxUSD (not ETH) as gas for transfers, and the Frax protocol captures the entire gas economy, consistent with the "own-chain capture" pole in [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token strategy trilemma]]. Forms a mirror with [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]: Sky takes the Subdao distributed regulation route, Frax approaches BUIDL via reserves — both represent the 2  survival strategies for DeFi stablecoins in the §501  era.

## Origin & evolution

Frax's old FRAX launched 2020  (partial reserve + algorithmic stablecoin hybrid). Following the 2022-2023  UST/Luna collapse, market caution toward algorithmic stablecoins increased, and Frax actively retreated from the algorithmic component. **2024-Q2  v3  upgrade**: replaced FRAX with frxUSD, migrated reserves from USDC + algorithmic to 100% UST + RWA. **2024-02  Fraxtal L2  launch** (formerly Frax Chain · OP Superchain member). 2025  sfrxUSD 7-9% APY surpassed comparable decentralized stablecoins. **2026-Q2  frxUSD vault directly held BUIDL ~$200M** = first DeFi protocol to directly hold BUIDL (not indirect vault via RWA). frxUSD thereby advanced to the edge of the "semi-compliance white zone" — **reserves 100% held in white-zone assets, but issuer is veFXS DAO**, [[fintech/genius-act-501-denylist-mandate|GENIUS §501]] grey compliance.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption matrix]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|Three-currency stablecoin MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto-culture bifurcation]]
<!-- /wiki-links:managed -->

## Sources
