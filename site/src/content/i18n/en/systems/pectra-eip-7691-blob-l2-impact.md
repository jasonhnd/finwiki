---
source: systems/pectra-eip-7691-blob-l2-impact
source_hash: bcac0483b6035a63
lang: en
status: machine
fidelity: ok
title: "Pectra EIP-7691  · blob doubling and the L2  economic chain"
translated_at: 2026-06-01T04:15:40.139Z
---

# Pectra EIP-7691  · blob doubling and the L2  economic chain

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-upgrade-overview|Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- After Dencun, blob target=3  / max=6  ^[extracted]
- After Pectra, target=6  / max=9 (doubling) ^[extracted]
- L2  calldata cost falls by roughly -50% ^[extracted]
- User gas on Base / Arbitrum / Optimism falls at the same time ^[extracted]
- USDC settlement on Stripe Base / Coinbase Smart Wallet experience improves ^[extracted]
- Economic competition between L2  and L1  intensifies · capital flows at both ends ^[extracted]

## Mechanism / How it works

Introduced with Dencun (2024-03), EIP-4844  blob is a temporary storage slot designed specifically for rollup data availability. Its price is independent of ordinary calldata, and it sharply reduced L2  submission costs. But Dencun's initial target=3  blobs/block (every 12  seconds) was quickly filled by high-throughput L2 s such as Base + Arbitrum + Optimism. **Pectra EIP-7691  doubles target / max** — target=6  / max=9 , letting L2  carry 2  times the data volume without blob fee spikes, with the direct result that L2  calldata cost is -50%. Stripe USDC settlement on Base and Coinbase Smart Wallet's sub-cent experience improve further. Sequencer revenue falls as gas unit prices decline, but higher user activity can offset it; the net effect depends on elasticity. Together with EIP-7251 , it forms the dual track of "L1  thickening (2048  ETH staking) + L2  expansion (blob doubling)."

## Origin & evolution

2024-03  Dencun launched · EIP-4844  blob was the first step of the rollup-centric roadmap. From 2024-Q2 , L2 s such as Base / Arbitrum / Optimism came under pressure in the blob fee market · frequently reaching max=6  → blob fee spikes → higher gas felt by L2  users. Discussion on EthMagicians accelerated target doubling for EIP-7691 . In 2024-Q3-Q4  ACD, inclusion of 7691  in the Pectra bundle was confirmed. Within weeks after 2025-Q2  mainnet activation, actual user gas on Base / Arbitrum / Optimism fell by 30-50%. The economics of Stripe's USDC settlement on Base continued to improve (in contrast to [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]'s flow distribution on L2 ) · Coinbase Smart Wallet achieved a "near-zero gas" experience. In the next step, Fusaka (planned for 2026-Q4 ), PeerDAS further decouples blobs from P2P broadcast and can theoretically expand by several times more.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-upgrade-overview|Pectra アップグレード総覧]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec
- EthMagicians EIP-7691  discussion
- EIP-7691 — https://eips.ethereum.org/EIPS/eip-7691
