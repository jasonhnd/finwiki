---
source: fintech/circular-reserve-asset-flywheel-risk-cases
source_hash: 0d230f0949f01af8
lang: en
status: machine
fidelity: ok
title: "Reserve-asset interlock flywheel · three-layer systemic-risk scenarios"
translated_at: 2026-05-31T05:31:05.762Z
---

# Reserve-asset interlock flywheel · three-layer systemic-risk scenarios

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation for tokens, crypto assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory architecture]] for the broader system boundary.

> [!info] TL;DR
> The risk of the BUIDL ↔ USDC interlock flywheel lies not in asset quality (Treasuries are risk-free) but in three structural problems: **secondary-market liquidity at redemption vs reserve book value** · **regulators have not yet defined a "tokenized-MMF concentration" framework** · **the reflexivity of the interest flow continuously pushes concentration higher**. In the 2023.03 SVB event, USDC temporarily depegged because it had concentrated 8.25% of its reserves in SVB · the risk mechanism of the BUIDL path is the same.

## Key facts

- In 2023.03 , USDC temporarily depegged because it had concentrated 8.25% of its reserves in a single bank, SVB ^[extracted]
- The GENIUS Act §504 requires monthly disclosure of reserve composition but does not prohibit "holdings via tokenized Treasuries" ^[extracted]
- SEC Rule 2a-7 prohibits cross-holdings of traditional MMFs above 5%, but does not apply to tokenized MMFs ^[extracted]

## Mechanism / How it works

**Risk 1 · liquidity-run scenario**: large-scale USDC redemption → Circle is forced to sell [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] → shocks BUIDL secondary liquidity → BUIDL NAV temporarily diverges → other holders (exchanges / institutions) panic → BUIDL AUM declines → which in turn worsens Circle's reserve-confidence problem. The same mechanism as the SVB crisis — the concentration problem lies not in asset quality but in secondary liquidity at redemption.

**Risk 2 · redefinition of regulatory "reserve concentration"**: GENIUS §504 does not prohibit concentrated holdings of tokenized MMFs · the OCC / FRB may newly establish, from 2026 year onward: a single tokenized MMF may not hold more than X% of reserves / the provider and the issuer must not have a capital relationship / a systemic interlock structure must build independent risk-management isolation. BUIDL ↔ USDC is currently the largest-scale and most transparent interlock case · it is highly likely to become a regulatory sample — this echoes the reflexive action on the cross-border side of [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB stablecoin reserve capital framework]].

**Risk 3 · reflexivity of the interest flow**: 50% continuously reinvests its own holding interest into BUIDL · the ratio rises monotonically · until an external force intervenes (see the interest-flow direction in [[fintech/issuer-distributor-incentive-realignment-50-50-model|50/50 distribution model]]).

## Origin & evolution

2008 GSE systemic risk (the Fannie Mae / Freddie Mac interlock that necessitated a bailout) provides a historical precedent. SEC Rule 2a-7 strengthened MMF cross-holding limits from 2008 year onward (< 5%). For stablecoin reserves in the tokenized-MMF era, no corresponding regulatory framework yet exists — **BUIDL ↔ USDC is the first data point that creates that framework**.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-overview|Reserve-asset interlock flywheel overview]]
- [[fintech/genius-act-501-denylist-mandate|Genius Act 501 Denylist Mandate]]
- [[fintech/stablecoin-revenue-split-economics|Stablecoin revenue-split economics]]
- [[fintech/portfolio-winner-structure-arm-analog|Portfolio winner structure and Arm analogy]]
<!-- /wiki-links:managed -->

## Sources

- SEC Rule 2a-7 · Basel III · GENIUS Act §504(2025.07)
- 2023.03 USDC depeg event review
