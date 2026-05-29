---
title: "[opinion] Nikkei VIX / JPX-VI — Japan equity volatility index"
source_entry: derivatives/nikkei-vix-jpx-vi-equivalent.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Nikkei VIX / JPX-VI — Japan equity volatility index

> 出典エントリー: `derivatives/nikkei-vix-jpx-vi-equivalent.md`

## Counterpoints

- **JPX-VI futures are not at VIX-futures depth.** Japan has had limited / intermittent listed futures directly on JPX-VI. The CBOE VIX futures complex has no clean Japanese counterpart of equivalent liquidity, and that asymmetry is a structural reason Japan vol trading remains dealer-mediated. Check JPX's current contract listing before describing the listed-futures situation in any tradable way.
- **Methodology vs computation are not identical.** "Same family as VIX" is correct at the methodology level but the precise inclusion rules, strike grid, expiry blending, and dissemination intervals differ between JPX-VI and CBOE VIX. Do not assume formulaic identity.
- **JPX-VI ≠ realized volatility.** Implied vol embedded in option prices is forward-looking and reflects dealer-position risk premium, not historical realized vol. The vol-risk-premium (VRP — implied minus realized) is positive on average and is the empirical reason short-vol carry trades earn over long horizons.
- **Mean-reversion property is regime-conditional.** "Fast mean reversion" describes calm-regime behavior; during crisis regimes JPX-VI can stay elevated for weeks. Do not extrapolate normal-regime half-life into stress regimes.
- **Single-name vs index vol.** JPX-VI captures Nikkei 225 (capitalization-weighted) implied vol. Single-name implied vol on individual Japanese equities can dislocate from index vol, particularly around earnings or corporate-action announcements (e.g. cross-shareholding unwinds — see [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]).
- **TOPIX vol vs Nikkei vol.** JPX-VI is Nikkei-225-anchored; the broader [[securities/tokyo-stock-exchange|TSE]] TOPIX universe is not the underlying. TOPIX-implied vol exists but is less prominently published. The Nikkei 225 is price-weighted, so its vol is sometimes dominated by a small set of high-price names (Fast Retailing, SoftBank Group, etc.).
- **OTC volume opacity.** A large share of "Japan equity vol trading" runs through bilateral OTC variance / volatility swaps at dealer desks. JSCC clearing for equity variance swaps is narrower than for IRS, so OTC volume is not fully visible in [[securities/japan-securities-clearing-corp|JSCC]] data.

## Open questions

- Public, real-time term-structure data quality for JPX-VI across all listed maturities — is it cleanly published, or must users reconstruct from the underlying option surface?
- The exact set of currently listed JPX-VI futures contracts and their open interest evolution since first listing — has JPX maintained continuous listed JPX-VI futures, or has the product set been intermittent?
- Quantitative comparison of the volatility risk premium (VRP) in Japan vs US over a long history — is the Japan VRP structurally larger or smaller than US, and how does that interact with carry-strategy capacity?
- The share of "Japan equity vol notional" that clears vs remains bilateral — what fraction of OTC variance/volatility swaps on Nikkei 225 are JSCC-cleared?
- Dealer-franchise share data by individual bank for Japan equity vol — public disclosure is limited; aggregate market-share inferences are necessarily indicative.
