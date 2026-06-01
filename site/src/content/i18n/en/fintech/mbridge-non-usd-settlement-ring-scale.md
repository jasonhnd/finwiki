---
source: fintech/mbridge-non-usd-settlement-ring-scale
source_hash: a5b34cace775bdca
lang: en
status: machine
fidelity: ok
title: "mBridge Non-USD Settlement Ring Scale Pattern · GDP Coverage as the Upper Bound for Wholesale Settlement"
translated_at: 2026-05-31T07:28:06.123Z
---

# mBridge Non-USD Settlement Ring Scale Pattern · GDP Coverage as the Upper Bound for Wholesale Settlement

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation — legal framework for tokens, crypto-assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal structure — three-layer framework for JPYC, USDC, and Project Pax]] for the broader system boundary.

> [!info] TL;DR
> The scale of a cross-border settlement ring cannot be evaluated by flow metrics alone (such as historical SWIFT GPI daily averages); instead, the theoretical upper bound should be the **GDP coverage of member countries**. If Brazil's DREX joins mBridge in 2026 H2 , member-country GDP would reach $23.3T across 6  countries, plus $11.7T from observers, for a **$35T sphere of influence (33% of global GDP)**. That is the "theoretical ceiling" for non-USD wholesale settlement: if fully mature, it could process 1/3  of global trade while bypassing SWIFT. **The $35T and the three-circle MRA $130B stand in a mirror relationship**: the white circle is private-sector compliance for retail/institutional flows, the green circle is central-bank-level wholesale settlement; they are separated by 2  orders of magnitude, rely on 2  distinct infrastructures, and are not substitutes for each other.

## Key facts

- Official mBridge membership of 6  countries: China + Hong Kong + Thailand + UAE + Saudi Arabia (joined in 2025 ) + Brazil (DREX in 2026 H2 ), for combined GDP of $23.3T ^[extracted]
- Including observers (India / Russia / South Africa / Iran), $11.7T, for total influence of $35T = 33% of global GDP ^[extracted]
- In 2025-09 , BIS announced that mBridge had entered commercial operation stage (End of MVP), upgrading from PoC to production ^[extracted]
- SWIFT currently covers about 90% of global trade ($95T / $105T); mBridge 33% is a structural ceiling ^[extracted]

## Mechanism / How it works

The logic of GDP coverage as the anchor for settlement-ring scale:

```
Traditional flow approach:   SWIFT GPI daily average $5-7T → estimate annual settlement volume
                            (constrained by stickiness of existing channels; hard to evaluate new channels)

GDP coverage approach:       Total GDP of member states × cross-border trade ratio (~30%) × upper penetration bound
                            = theoretical wholesale settlement ceiling
                            $35T × 30% × 30% = $3.15T annually (at maturity)
```

mBridge is distinct from the private stablecoin three-circle model (see [[fintech/three-circles-stablecoin-mra-framework|three-circle MRA architecture]]): it is a direct interconnection of central-bank-level RTGS systems, wholesale only, and it is not competing with USDC / USDT for retail or DeFi markets. Instead, it targets the "cross-border trade settlement" domain currently dominated by SWIFT. This creates a **two-layer parallel settlement structure**: the USD sphere routes through SWIFT/FedNow, and the non-USD sphere routes through mBridge. For the hierarchy between central-bank wholesale and retail/institutional deposit tokens, see [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]].

## Origin & evolution

mBridge was created in 2021 by the BIS Innovation Hub and 4  central banks (China / Hong Kong / Thailand / UAE). Saudi Arabia formally joined in 2024-10  (showing that the Middle East was joining a gold/BRICS settlement ring; see [[fintech/sovereign-capital-pool-aramco-anchor|Aramco sovereign capital-pool anchor]]), MVP was completed in 2025-09  and entered commercial operation, and Brazil's DREX joining in 2026 H2  was a critical turning point: the first major country outside Asia and the Middle East, upgrading mBridge from a "regional experiment" to a "global settlement ring."

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|three-circle MRA architecture]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|stablecoin geopolitical currency five-pole divide]]
- [[fintech/cross-border-sc-via-swift-api|cross-border stablecoin via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- BIS Innovation Hub mBridge public report · 2025-09  commercial-operation announcement
