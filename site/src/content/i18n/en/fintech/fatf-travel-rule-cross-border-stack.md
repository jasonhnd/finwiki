---
source: fintech/fatf-travel-rule-cross-border-stack
source_hash: 3780ac564cc56fc4
lang: en
status: machine
fidelity: needs_review
title: "FATF Travel Rule Cross-Border Four-Layer Stack · Jurisdictional Threshold Divergence + §501  Linkage"
translated_at: 2026-05-31T06:16:15.742Z
---

# FATF Travel Rule Cross-Border Four-Layer Stack · Jurisdictional Threshold Divergence + §501  Linkage

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The divergence in national Travel Rule implementation thresholds is large (EU TFR $0  · Japan ¥100,000  · US $3,000) but R.16  is the global floor. The four-layer stack of BSA Travel Rule + FATF R.16  + EU TFR + GENIUS §501  freeze = the modern crypto asset compliance stack. "Differentiated enforcement + R.16  global floor" is the foundational AML layer for GENIUS / MiCA / EPI coordination.

## Key facts

- EU threshold EUR 0  (all transactions) · TFR 2023/1113  · effective 2024-12-30 ^[extracted]
- Japan threshold ¥100,000  (≈$670) · revised Payment Services Act · effective 2023-06  ^[extracted]
- US threshold $3,000  (proposed reduction to $1,000) · BSA Travel Rule · 1996/2019  ^[extracted]
- Singapore SGD 1,500  · PS Act · 2024  ^[extracted]
- Hong Kong HKD 8,000  · AMLO Sched 2  · 2023  ^[extracted]
- Canada CAD 1,000  · FINTRAC · 2021  ^[extracted]
- EU is strictest · US is most lenient ^[extracted]
- VASP 5  categories: fiat exchange / crypto-to-crypto / remittance / custody / issuance participation ^[extracted]

## Mechanism / How it works

**Four-layer stack overlay**:
```
BSA Travel Rule ($3,000)       ← 1996  original
FATF R.16  (USD 1,000)         ← 2019  crypto extension (global floor)
EU TFR (EUR 0)                ← 2024-12-30 strictest
GENIUS §501  freeze (30  min)  ← OFAC SDN automatic enforcement
```

Four-layer overlay = modern crypto asset compliance stack. **Strategic implications of threshold differentiation**:
- EU strictest → MiCA + DORA + TFR 0  = fully closed loop · non-compliant players such as USDT exit
- US $3,000  → misaligned with FATF $1,000  · 2026-Q3  adjustment
- Japan ¥100,000  → balance with retail user experience
- Singapore SGD 1,500  + DTSP Regime 2024-04  → grey zone closed

**DeFi grey zone**: FATF 2021-10  Updated Guidance notes that a "sufficient degree of control or influence" qualifies as VASP. Pure smart contract + no governance = not applicable. In practice, enforcement often traces back to founders / DAO members (Tornado Cash case). For Japan VASP timeline see [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]]; for global cross-sectional comparison see [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]].

## Origin & evolution

1996  US led the way; 2019  G20  Osaka globalised R.16  via crypto extension; 2023-2024  localised across jurisdictions (Japan 6  month · EU 12  month). 2024-12-30 EU TFR enforcement was the inflection point · USDT's EU share fell sharply from 28% to 3% (double hit of MiCA + TFR). 2026-Q3  FinCEN US alignment plan = global floor largely unified.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概観]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze 先例]]
<!-- /wiki-links:managed -->

## Sources
