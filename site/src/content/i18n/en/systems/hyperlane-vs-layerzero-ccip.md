---
source: systems/hyperlane-vs-layerzero-ccip
source_hash: 71656fd6ea52f8bf
lang: en
status: machine
fidelity: ok
title: "Hyperlane vs LayerZero/CCIP · Permissionless vs Gated route comparison"
translated_at: 2026-06-01T04:15:40.129Z
---
# Hyperlane vs LayerZero/CCIP · Permissionless vs Gated route comparison

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Hyperlane is fully permissionless · anyone can fork + deploy ^[extracted]
- LayerZero is semi-gated · the team evaluates new chains · DVNs can be selected by the application side ^[extracted]
- CCIP is strongly gated · Chainlink DON deployment + RMN risk management ^[extracted]
- Cosmos / Solana / app-chain default to Hyperlane (LayerZero deployment on non-EVM chains is slower) ^[extracted]

## Mechanism / How it works

**Detailed comparison of the three major protocols**:

| Perspective | LayerZero | Chainlink CCIP | Hyperlane |
|---|---|---|---|
| Deployment model | Gated (team evaluation) | Heavily gated (DON deployment) | Permissionless |
| Verification method | DVN (application-side selectable) | OCR committee + RMN | Modular ISM (application-side self-selection) |
| Non-EVM support | Slow · EVM-centered | Almost none | Strong · Cosmos/Solana/Move are first-class citizens |
| Institutional backing | Strong (major DeFi such as Stargate) | Strongest (Chainlink) | Weak (developer-oriented) |
| Security responsibility | Partly backed by the protocol side | Fully backed by Chainlink | Entirely the responsibility of application developers |
| Fit scenarios | Mainstream EVM dApps | Institutional high-value cross-chain | Long-tail / app-chain / non-EVM |

**Tempo / Arc selection logic**: As emerging L1 s, they cannot wait for the approval timetable of the LayerZero or CCIP teams. Hyperlane's permissionless deployment lets Tempo/Arc connect to EVM liquidity at launch. At the same time, to reach more dApps, they may also integrate LayerZero / CCIP in parallel, producing a three-way structure.

**The key bottleneck for non-EVM liquidity**: When non-EVM chains such as Cosmos / Solana / Move connect to the EVM ecosystem (USDC / USDT liquidity is mainly on EVM), LayerZero / CCIP deployment is slow — Hyperlane has become the de facto standard (contrast [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]] for penetration in financial-institution scenarios). This gives Hyperlane first-mover advantage in the long-tail market.

## Origin & evolution

The three major protocols launched around the same period (2021-2022), but their later directions diverged sharply:
- LayerZero raised heavily in 2021-2022  + marketed aggressively · led early mindshare
- CCIP was driven mainly by Chainlink in 2022-2023  · using Chainlink's existing institutional relationships
- Hyperlane launched in 2021-2022  · initially obscure · counterattacked in the Cosmos / Solana markets in 2023-2024 

By 2024-2026 年, the structure had stabilized: LayerZero leads mainstream EVM dApps · CCIP leads the institutional high-value segment · Hyperlane leads long-tail / non-EVM / app-chain.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
- [[systems/cctp-v2-overview|CCTP V2(USDC 専用 bridge 対照)]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero docs · Chainlink CCIP docs · Hyperlane docs
- Hyperlane docs — https://docs.hyperlane.xyz/
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
