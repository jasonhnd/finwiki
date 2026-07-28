---
source: systems/bft-validator-economy-tempo-vs-arc
source_hash: 1d8ef779c539d43c
lang: en
status: machine
fidelity: ok
title: "Tempo vs Arc · 2 paths for institutional-chain validator design"
translated_at: 2026-07-28T22:03:26.809Z
---
# Tempo vs Arc · 2 paths for institutional-chain validator design

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-l1-bootstrapping|EigenLayer による新 L1 起動期セキュリティ支援 · Tempo/Arc 潜在経路]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Tempo external validator count = 4 (carefully selected institutions) ^[extracted]
- Tempo BFT fault tolerance = ⌊(4-1)/3⌋ = 1 (tolerates up to 1  malicious or offline nodes) ^[extracted]
- Tempo's Nakamoto coefficient is extremely low, making regulatory single-point-of-failure risk prominent ^[extracted]
- Arc phase 1 = PoA (team + founding-institution whitelist) ^[extracted]
- Arc phase 2 = permissioned PoS (20-50 KYC validators) ^[extracted]
- Arc phase 3 = governance PoS (theoretical target, may not be achieved) ^[extracted]
- The three-phase template is cited by Kinexys / Mony ^[extracted]

## Mechanism / How it works

**Tempo · 4  external-validator model**: Tempo team internal validators + 4  carefully selected external institutions (major custodians / major staking service providers / sovereign-fund management / strategic partners). Each validator is bound by KYC + legal agreements → accountability is possible. No inflationary rewards; yield comes from protocol-fee distribution. No MEV (institutional OTC leads order flow). Design philosophy: **a small number of highly qualified participants > numerical dispersion**, sacrificing decentralization to secure performance and accountability.

**Arc · three-stage evolution**: Phase 1 PoA is centralized but allows rapid iteration; in phase 2  the KYC validator set expands to 20-50 社 and introduces staking economics, but entry remains controlled; in phase 3  governance decides validator-set expansion, with full decentralization as the long-term goal. Design philosophy: **acknowledge that institutional chains must be centralized at launch, and earn ecosystem trust through a clear roadmap**.

Comparison dimensions:

| Dimension | Tempo | Arc |
|---|---|---|
| Publicly stated primary purpose | L1 for payment workloads | L1 for stablecoin finance |
| Design emphasis | High throughput, predictable fees and payment-oriented features | Design using stablecoins for gas, institutional privacy and integrations |
| How to read validator / consensus claims | Verify validator count and participation conditions in current technical documentation and network configuration, not marketing summaries | Verify validator count and participation conditions against the launch stage and current technical documentation |
| Governance assessment | Check the operator, upgrade authority and incident controls separately | Check the operator, upgrade authority and incident controls separately |
| Comparison caveat | Do not infer a fixed validator count or long-term decentralization level from public materials | Do not infer stage-by-stage validator counts or an eventual decentralization level from public materials |

Sources: ^[https://tempo.xyz/] ^[https://www.arc.io/] ^[https://www.circle.com/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance]


## Origin & evolution

2024 Early permissioned pools from Aave Arc / JPM Onyx → "institutional chains must be permissioned at launch" became consensus. 2025.04 Tempo disclosed its 4  external-validator design → the minimum model became visible. 2025 Circle published the Arc three-stage roadmap → the progressive-decentralization template was established. 2025-2026 [[fintech/jpmorgan-jpmd-coin|Kinexys / JPMD]] / Mony / many tokenized-deposit projects cited Arc's three-stage template. The fundamental reason the 2  paths coexist: Tempo serves retail merchants (extremely performance-sensitive), while Arc serves institutional clients (extremely sensitive to the compliance narrative).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/bft-validator-economy-overview|総覧]]
- [[systems/bft-validator-economy-four-variables|4変数詳解]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル]]
<!-- /wiki-links:managed -->

## Sources

- Tempo official site (4  external-validator / payments L1  design) — https://tempo.xyz/
- Arc official site (Circle institutional-grade L1) — https://www.arc.io/
- Circle, "Introducing Arc" official announcement (progressive decentralization / Malachite) — https://www.circle.com/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance
- Canton Network (Kinexys-line permissioned institutional chain) — https://www.canton.network/
