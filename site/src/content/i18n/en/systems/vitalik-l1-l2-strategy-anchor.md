---
source: systems/vitalik-l1-l2-strategy-anchor
source_hash: a187570a0a9bc925
lang: en
status: machine
fidelity: ok
title: "Evolution Anchor for the L1/L2  Dual-Track Strategy · Ethereum Roadmap vs Independent L1  Economic Incentives"
translated_at: 2026-06-01T04:15:40.148Z
---
# Evolution Anchor for the L1/L2  Dual-Track Strategy · Ethereum Roadmap vs Independent L1  Economic Incentives

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2020-10  rollup-centric roadmap proposed = L2 -first strategy formed ^[extracted]
- 2024-03  Dencun (EIP-4844  blob) → L2  costs fell by ~100x ^[extracted]
- 2025-05  Pectra (EIP-7702  smart account) → stablecoin transfers without ETH gas become possible ^[extracted]
- 2026  estimated Fusaka (PeerDAS + further blob expansion) → L2  costs sub-cent ^[extracted]
- Ethereum + all L2  account for ~60%+ of global stablecoin circulation (out of $160B: ~$120B L1  + ~$40B L2) ^[extracted]
- Vitalik's public stance = Ethereum is a "neutral base layer", neutral toward all stablecoins ^[extracted]

## Mechanism / How it works

The "anti-opponent" effect of the L1/L2  dual-track strategy: **when L2  cost becomes sub-cent + UX approaches Web2 ** (stablecoin transfers after Pectra do not need ETH gas), the economic differentiation window for independent L1 (Arc / Tempo / Plasma) is compressed. The original selling points of independent L1  were "low cost + high speed + regulatory controllability" —— but when L2  cost falls below the operating gross margin of independent L1 , independent L1  must rely on **non-economic moats** (regulatory licenses / large-customer binding / on-chain KYC) to hold up.

Applied diagnosis: with every Ethereum upgrade announcement → test the "differentiation-window width" of independent L1 . After Dencun, Optimism / Base / Arbitrum regain stablecoin circulation (see [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]); after Pectra, the "independent L1" economic model of Tempo / Arc comes under pressure; after Fusaka, independent L1  may be forced to convert toward "L2 / Validium / appchain."

## Origin & evolution

The source was in 2017-2018 , after early "L2  proposals" such as Plasma / state channels hit a wall, when Vitalik reintroduced rollup-centric in 2020 年. 2022  The Merge (PoS) solved energy + security model, 2024  Dencun solved L2  cost, 2025  Pectra solved UX (account abstraction), and 2026  Fusaka further compresses cost. The logic embedded in the overall evolution over 5  years: **Ethereum does not directly compete with independent L1  on throughput; it makes the L2  ecosystem the "independent L1  killer."** Vitalik personally has no CEO / operating responsibility and speaks purely from a research / governance role → his position is more credible than CEO-type spokespersons such as Allaire / Paolo / Brian.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/l1-progressive-decentralization-three-phase|L1 漸進分散化 3 段階]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 ネイティブ資産と ERC20 イベント互換]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BUIDL]]
<!-- /wiki-links:managed -->

## Sources

- Vitalik Buterin "A rollup-centric ethereum roadmap" (2020-10  · Ethereum Magicians) — https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698
- Vitalik Buterin "An Incomplete Guide to Rollups" — https://vitalik.eth.limo/general/2021/01/05/rollup.html
- EIP-4844: Shard Blob Transactions (Dencun · L2  cost down ~100x) — https://eips.ethereum.org/EIPS/eip-4844
- EIP-7702: Set Code for EOAs (Pectra · stablecoin transfer without ETH gas) — https://eips.ethereum.org/EIPS/eip-7702
- Ethereum.org roadmap (rollup-centric / PeerDAS / account abstraction) — https://ethereum.org/en/roadmap/
