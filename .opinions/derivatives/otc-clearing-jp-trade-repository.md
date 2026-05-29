---
title: "[opinion] OTC derivatives clearing and trade repository — Japan"
source_entry: derivatives/otc-clearing-jp-trade-repository.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — OTC derivatives clearing and trade repository — Japan

> 出典エントリー: `derivatives/otc-clearing-jp-trade-repository.md`

## Counterpoints

- **Clearing scope is narrower than total OTC notional.** Cleared notional at JSCC is a meaningful share of total Japan OTC notional but not 100%. Bilateral notional remains material for non-standard products, smaller counterparties, and bespoke structures. Do not assume "yen IRS = cleared" without checking the contract specification and counterparty category.
- **CDS clearing scope is narrower than IRS clearing.** JSCC CDS clearing covers designated index series; single-name CDS clearing scope is narrower; many [[derivatives/INDEX|single-name CDS]] trades on Japanese reference entities remain bilateral.
- **EMIR / Title-VII equivalence is product-specific.** "Japan has EMIR equivalence" is true only for specific categories (CCPs, trading venues, reporting). Full equivalence for every OTC product class is not automatic.
- **Trade-repository data is not public at the trade level.** Aggregate statistics flow to the public; trade-level data is regulator-only. Researchers using public aggregate data should be careful about extrapolation to firm-specific exposures.
- **Default-management has never been stress-tested at a major-member failure event for the IRS / CDS clearing services.** Public-source confidence in CCP resilience rests on theoretical waterfall design, simulation exercises, and stress-testing — not on actual historical default-resolution outcomes at JSCC for the OTC derivative clearing services.
- **UMR (Uncleared Margin Rules) for bilateral trades raises operational complexity.** UMR phase-in obligations mean even non-cleared OTC trades require IM / VM exchange under FIEA-implemented BCBS / IOSCO rules. The operational burden is substantial for medium-sized counterparties.
- **Cross-border equivalence can be withdrawn.** EMIR and Title-VII equivalence determinations are reviewed periodically; political tensions or regulatory divergence can lead to withdrawal. Japan's equivalence status is not permanent.
- **JSCC is itself a single point of failure.** As Japan's principal OTC CCP, JSCC's operational resilience is a systemic-risk concern. JFSA supervision aims to mitigate this, but the structural concentration is real — comparable to LCH SwapClear in the GBP / USD IRS market.
- **TR reporting completeness varies.** Smaller counterparties and complex cross-border structures may have data-quality gaps in TR reporting that limit the analytic value of aggregate data.

## Open questions

- The exact current scope of JSCC mandatory clearing — which contract specifications, currencies, and counterparty categories are in scope as of the current FIEA rules iteration?
- The share of Japan OTC IRS notional that clears at JSCC vs bilateral — JSCC publishes cleared statistics; total OTC market size estimation requires combining BOJ + BIS + JSCC + bilateral inference.
- The exact list of EMIR equivalence determinations currently in force for Japan venues / products — periodic ESMA / European Commission reviews update scope.
- The exact list of CFTC substituted-compliance / comparability determinations in force for Japan — periodic CFTC review updates scope.
- JSCC default-fund sizing methodology relative to potential systemic-stress scenarios — public disclosure of stress-test results is summary-level only.
- The role of foreign trade repositories (DTCC US, ICE TVEL, etc.) for Japan-counterparty trades that have dual reporting under EU / US frameworks alongside Japan TR reporting.
