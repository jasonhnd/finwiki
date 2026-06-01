---
source: fintech/fatf-travel-rule-cross-border-stack
source_hash: 3780ac564cc56fc4
lang: en
status: machine
fidelity: ok
title: "FATF Travel Rule Cross-Border Four-Layer Stack · Jurisdictional Threshold Divergence + §501 Linkage"
translated_at: 2026-05-31T06:16:15.742Z
---

# FATF Travel Rule Cross-Border Four-Layer Stack · Jurisdictional Threshold Divergence + §501 Linkage

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation: banking, securities, payment, and licensing boundary]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape: JPYC, USDC, Project Pax, and more]] for the broader system boundary.

> [!info] TL;DR
> The divergence in national Travel Rule implementation thresholds is large (EU TFR $0 · Japan ￥100,000 · US $3,000), but R.16 remains the global floor. The four-layer stack of BSA Travel Rule + FATF R.16 + EU TFR + GENIUS §501 freeze forms the modern crypto-asset compliance stack. "Differentiated enforcement + R.16 global floor" is the base AML layer for GENIUS, MiCA, and EPI coordination.

## Key facts

- EU threshold: EUR 0 (all transactions) · TFR 2023/1113 · effective 2024-12-30 ^[extracted]
- Japan threshold: ￥100,000 (about $670) · revised Payment Services Act · effective 2023-06 ^[extracted]
- US threshold: $3,000 (proposed reduction to $1,000) · BSA Travel Rule · 1996/2019 ^[extracted]
- Singapore: SGD 1,500 · PS Act · 2024 ^[extracted]
- Hong Kong: HKD 8,000 · AMLO Sched 2 · 2023 ^[extracted]
- Canada: CAD 1,000 · FINTRAC · 2021 ^[extracted]
- EU is the strictest · US is the most lenient ^[extracted]
- VASP 5 categories: fiat exchange / crypto-to-crypto / remittance / custody / issuance participation ^[extracted]

## Mechanism / How it works

**Four-layer stack overlay**:
```
BSA Travel Rule ($3,000)        · 1996 original rule
FATF R.16 (USD 1,000)           · 2019 crypto extension (global floor)
EU TFR (EUR 0)                  · 2024-12-30 strictest live regime
GENIUS §501 freeze (30 min)     · OFAC SDN automatic enforcement
```

The four-layer overlay is the modern crypto-asset compliance stack. **Strategic implications of threshold differentiation**:
- EU strictest · MiCA + DORA + TFR 0 = fully closed loop, pushing out non-compliant players such as USDT
- US $3,000 · misaligned with FATF $1,000 · adjustment expected in 2026-Q3
- Japan ￥100,000 · balance between compliance and retail user experience
- Singapore SGD 1,500 + DTSP Regime 2024-04 · grey zone closed

**DeFi grey zone**: FATF 2021-10 Updated Guidance notes that a "sufficient degree of control or influence" can qualify an arrangement as a VASP. Pure smart contract + no governance control = generally outside scope. In practice, enforcement often traces back to founders or DAO members (Tornado Cash case). For the Japan VASP timeline see [[exchanges/jp-vasp-regulatory-timeline|Japan VASP regulatory timeline]]; for cross-sectional global comparison see [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory comparison matrix]].

## Origin & evolution

The US led in 1996; the 2019 G20 Osaka process globalised R.16 by extending it to crypto assets; and 2023-2024 saw local implementation across jurisdictions (Japan about 6 months · EU about 12 months). The 2024-12-30 enforcement of the EU TFR was the inflection point · USDT's EU share fell from 28% to 3% under the combined pressure of [[fintech/mica-overview|MiCA]] and the TFR. FinCEN's 2026-Q3 US alignment plan points toward broad convergence around the global floor.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule overview]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List cross-border implications]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|on-chain OFAC freeze precedent]]
<!-- /wiki-links:managed -->

## Sources
