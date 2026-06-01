---
source: fintech/circular-reserve-asset-flywheel-overview
source_hash: 8ecae0bb8fd3b901
lang: en
status: machine
fidelity: ok
title: "Reserve Interlock Flywheel · BUIDL ↔ USDC Systemic Circular Dependency"
translated_at: 2026-05-31T06:16:15.693Z
---

# Reserve Interlock Flywheel · BUIDL ↔ USDC Systemic Circular Dependency

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation — legal architecture for tokens, crypto-assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal regime's three-layer structure (JPYC, USDC, Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> BlackRock BUIDL (tokenized Treasury MMF) has become a core component of Circle USDC's reserves. Interest earned from the BUIDL that Circle holds flows back into BUIDL → pushes up BUIDL AUM → further "BUIDLifies" Circle's reserves. This is an **interest → reserve → AUM → interest** self-reinforcing systemic interlock flywheel, and since 2026 it is likely to serve as a reference case when stablecoin regulators define "reserve concentration risk."

## Key facts

- BUIDL launched 2024.03  · AUM grew 4-5x during 2025 (estimated $2.5-3B) ^[extracted]
- Circle was one of BUIDL's largest institutional LPs from early on (officially stated in Circle 2025.04 ) ^[extracted]
- Circle 2024 interest income was $1.7-1.8B, of which approximately $905M was distributed to Coinbase. ^[extracted]

## Mechanism / How it works

Interlock structure = self-reinforcing feedback loop:

```
[Circle USDC reserves $40B+] ──holds──> [BlackRock BUIDL]
        │                                          │
        │ Interest (4.5% APY)                     │ AUM growth
        ↓                                          ↑
[Circle net interest income] ──distributes 50% to Coinbase + reinvests into BUIDL──┘
```

Every $1 Circle deposits into BUIDL → BlackRock earns a 0.5% management fee → net 4% interest returns to Circle → 50% is distributed to Coinbase and 50% retained → the retained portion buys BUIDL again. As long as the "retained → reinvestment" ratio exceeds 0, BUIDL's share of reserves **rises monotonically** until an external force (regulatory cap / Circle's voluntary diversification / competing MMF share capture) intervenes. The same reflexive loop appears in other issuer relationships in [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL × SC issuer matrix]] (USDB / USDtb / sfrxUSD / OUSG).

## Origin & evolution

2024.03  BUIDL launched · Circle builds initial position at limited scale. During the 2024-2025  period of 4-5x AUM growth, Circle's holdings expanded rapidly · 2025.04  Circle officially stated. 2025.07  [[fintech/genius-act-501-denylist-mandate|GENIUS Act]] §504  mandated monthly disclosure of reserve composition but did not prohibit "holding via tokenized Treasuries" → the flywheel continues to operate within a regulatory grey zone.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|Reserve interlock · three-layer risk scenarios]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|Coinbase ↔ Circle 50/50 model]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs separation from crypto culture]]
- [[fintech/stablecoin-revenue-split-economics|Stablecoin revenue-distribution economics]]
<!-- /wiki-links:managed -->

## Sources

- Circle 2024 quarterly report + prospectus · BUIDL 2024.03 launch announcement
