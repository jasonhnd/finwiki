---
title: "Derivatives domain"
aliases:
  - "derivatives INDEX"
  - "derivatives domain"
  - "デリバティブ domain"
  - "Japan derivatives index"
  - "rates FX credit equity derivatives"
  - "金融派生商品 domain"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, index, IRS, OIS, basis-swap, JGB-futures, CDS, FX-options, structured]
status: active
sources:
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.jscc.co.jp/en/"
  - "https://www.jpx.co.jp/english/markets/derivatives/"
  - "https://www.fsa.go.jp/en/"
  - "https://www.isda.org/"
---

# Derivatives Index

> Scope: Japan + global derivatives markets — interest rate, FX, credit, equity volatility, structured products. Public-source instrument mechanics, market structure, dealer franchise.

## TL;DR

This domain routes derivatives knowledge: how Japan's yen interest-rate swap (IRS), OIS, JGB futures, cross-currency basis swap, CDS, FX-option, and equity-volatility markets are structured; who the dealers and end-users are; and how clearing, regulation, and policy interact with pricing.

Use [[money-market/INDEX]] for the short-end cash side, [[banking/INDEX]] for the dealer-franchise side, and this domain for the derivative instrument layer on top.

## Scope

Public-surface only. Topics covered:

- **利率派生 (rates derivatives)** — yen IRS, OIS referencing TONA, swaption, JGB futures (mini and standard), TONA futures, asset swap.
- **通貨派生 (FX derivatives)** — yen-USD cross-currency basis swap, FX forward, FX option, NDF (where relevant), corporate FX hedge instruments.
- **信用派生 (credit derivatives)** — single-name CDS on Japanese reference entities, iTraxx Japan index, basis trade (bond vs CDS), recovery swaps.
- **エクイティ・構造化 (equity / structured)** — Nikkei VIX-linked products, equity-index options on OSE, structured bonds (PRDC, reverse-floaters), repackaging vehicles.

Excluded: opaque proprietary products, non-public bilateral term sheets, unverified counterparty-specific pricing.

## Start Here

| Lane | Start page | Use when asking |
|---|---|---|
| Overview | [[derivatives/japan-interest-rate-derivatives-overview]] | What instruments exist in Japan's rates-derivatives ecosystem and how they connect. |
| Currency basis | [[derivatives/yen-basis-swap-market]] | How cross-currency basis prices yen vs USD funding, especially at quarter-end. |
| Futures | [[derivatives/jgb-futures-curve]] | How JGB futures (OSE) form a hedge curve and feed cash-futures basis trades. |
| OIS curve | [[derivatives/ois-tona-curve]] | How TONA-referenced OIS replaced LIBOR for yen rates discounting. |
| IRS market | [[derivatives/japan-irs-market]] | How yen interest-rate swap notional, dealer franchise, and clearing fit together. |
| Credit (W8-C) | [[derivatives/japan-cds-market-overview]] | Planned — single-name CDS, iTraxx Japan, dealer activity. |

## Routing

| Cluster | Entries (existing or planned) |
|---|---|
| 利率派生 | [[derivatives/yen-basis-swap-market]], [[derivatives/jgb-futures-curve]], [[derivatives/ois-tona-curve]], [[derivatives/japan-irs-market]], [[derivatives/japan-interest-rate-derivatives-overview]] |
| 通貨派生 | (W8-B planned) [[derivatives/japan-fx-options-market]], [[derivatives/corporate-fx-hedge-instruments]], [[derivatives/non-deliverable-forward-jpy-asia]] |
| 信用派生 | (W8-C planned) [[derivatives/japan-cds-market-overview]], [[derivatives/itraxx-japan-index]], [[derivatives/bond-cds-basis-trade]] |
| エクイティ・構造化 | (W8-D planned) [[derivatives/nikkei-vix-and-volatility]], [[derivatives/japan-structured-bonds]], [[derivatives/equity-options-ose]] |

## Market Layer Map

| Layer | Function | Route |
|---|---|---|
| Underlying cash market | JGB cash, call market, repo, FX spot, equity cash | [[money-market/INDEX]], [[securities/japan-market-infrastructure-map]] |
| OTC derivatives | IRS, OIS, basis swap, CDS, FX option | This domain |
| Listed derivatives | JGB futures, TONA futures, Nikkei 225 futures and options | [[securities/INDEX]], [[exchanges/INDEX]] if present |
| CCP / clearing | JSCC clears yen IRS, listed futures, JGB OTC clearing where applicable | [[securities/japan-securities-clearing-corp]] |
| Dealer franchise | Megabank treasury / markets and securities-firm sales-and-trading desks | [[banking/INDEX]], [[JapanFG/mufg-bank]], [[JapanFG/sumitomo-mitsui-banking-corp]], [[JapanFG/mizuho-bank]] |
| Regulation | FIEA, BoJ surveillance, FSA supervision, ISDA documentation, CCP clearing mandate | [[banking/japan-banking-license-tier-comparison-matrix]], [[finance/INDEX]] |

## Related domains

- [[money-market/INDEX]] — short-end rates, repo, BoJ ops; the cash side of rates derivatives
- [[money-market/japan-money-market]] — overall short-rate framework
- [[money-market/jgb-repo-market-japan]] — collateral side of JGB futures and IRS hedges
- [[money-market/boj-open-market-operations]] — policy implementation that drives OIS curve
- [[finance/INDEX]] — corporate finance, hedging policy
- [[finance/japan-corporate-fx-and-rate-hedge-policy]] — corporate end-user perspective on rates and FX hedging
- [[banking/INDEX]] — dealer franchise within megabanks
- [[banking/japan-banking-license-tier-comparison-matrix]] — license boundary for derivatives intermediation
- [[securities/INDEX]] — exchange-traded vs OTC, market infrastructure
- [[securities/japan-market-infrastructure-map]] — clearing / settlement layer
- [[securities/japan-securities-clearing-corp]] — JSCC

## JapanFG anchors

| Cluster | Entities |
|---|---|
| Megabank dealer franchise | [[JapanFG/mufg-bank]], [[JapanFG/sumitomo-mitsui-banking-corp]], [[JapanFG/mizuho-bank]] |
| Securities-firm rates / credit dealing | (where pages exist) Nomura, Daiwa, Mitsubishi UFJ Morgan Stanley, Mizuho Securities, SMBC Nikko |
| Securities financing | [[JapanFG/japan-securities-finance]] |
| Tanshi / repo-adjacent | [[money-market/tanshi-company-business-model]], [[money-market/call-market-structure]] |
| Central bank | [[JapanFG/boj-monetary-policy]] (where present) |

## Research Control

1. Use BoJ, JSCC, JPX, FSA, and ISDA pages first for instrument mechanics, notional outstanding, and clearing scope.
2. Do not conflate notional outstanding with gross market value; both must be cited separately.
3. Separate OTC clearing from exchange-traded; many yen IRS are cleared at JSCC under a clearing mandate, but bilateral trades remain.
4. Keep dealer-bank specifics in [[JapanFG/INDEX|JapanFG]] entity pages; this domain explains the instrument and market layer.
5. Cross-reference [[finance/japan-corporate-fx-and-rate-hedge-policy]] for the corporate end-user side.

## Backlog

| Priority | Page | Why |
|---|---|---|
| Done | [[derivatives/yen-basis-swap-market]] | Core rates / FX intersection |
| Done | [[derivatives/jgb-futures-curve]] | Hedge curve and basis trade |
| Done | [[derivatives/ois-tona-curve]] | Post-LIBOR yen discounting |
| Done | [[derivatives/japan-irs-market]] | Notional outstanding, dealer franchise |
| Done | [[derivatives/japan-interest-rate-derivatives-overview]] | Domain anchor |
| P1 | `derivatives/japan-fx-options-market.md` | Yen FX volatility surface and corporate hedging |
| P1 | `derivatives/japan-cds-market-overview.md` | Single-name and iTraxx Japan |
| P2 | `derivatives/nikkei-vix-and-volatility.md` | Equity volatility surface |
| P2 | `derivatives/japan-structured-bonds.md` | PRDC, reverse-floater retail and institutional |
| P3 | `derivatives/equity-options-ose.md` | OSE-listed equity options |
| P3 | `derivatives/bond-cds-basis-trade.md` | Hedge fund / dealer arb |

## Maintenance

- Public-surface only. Use BoJ, JSCC, JPX, FSA, ISDA, dealer-bank IR.
- Cite notional outstanding with the exact survey vintage (BIS semi-annual OTC derivatives, ISDA SwapsInfo, JSCC monthly).
- Do not state proprietary dealer P&L or counterparty-specific exposures.
- Cross-link to corporate-finance entries (cross-shareholding unwinding, FX hedge policy) where the derivative is used as an end-user hedge.
- Run `python3 tools/wiki_link_audit.py --report wiki-link-improvement-plan.md --fail-on-issues` before push.

## Sources

- Bank of Japan: paym/market surface for short-term and derivatives-adjacent statistics.
- Japan Securities Clearing Corporation (JSCC): IRS clearing, JGB futures clearing scope and rules.
- Japan Exchange Group (JPX) / Osaka Exchange (OSE): JGB futures, TONA futures, Nikkei 225 derivatives contract specifications.
- Financial Services Agency (FSA): FIEA supervision of OTC derivatives and CCP clearing mandate scope.
- International Swaps and Derivatives Association (ISDA): standard documentation, market-size publications, SwapsInfo.
- Dealer-bank IR releases (MUFG, SMFG, Mizuho FG, Nomura HD, Daiwa Securities Group) for franchise commentary.
