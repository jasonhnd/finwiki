---
source: derivatives/yen-basis-swap-market
source_hash: 2bf45631b6f75634
lang: en
status: machine
fidelity: ok
title: "Yen-USD cross-currency basis swap market"
translated_at: 2026-05-31T03:19:56.439Z
---

# Yen-USD cross-currency basis swap market

## TL;DR

A yen-USD cross-currency basis swap (CCBS) is an OTC derivative in which two counterparties exchange principal and periodic floating-rate interest payments in two different currencies — typically JPY against USD — over a multi-year tenor. The "basis" is the spread (in basis points) added to one leg, usually the JPY leg, that prices the relative scarcity of USD funding for non-US holders of yen assets.

The yen-USD basis is structurally negative (JPY-leg pays USD floating index minus a spread) because Japanese banks, life insurers, and corporates demand USD funding against their yen liabilities far more than the reverse. The basis widens (more negative) when USD funding becomes scarce — quarter-end, year-end, dollar-shortage episodes (March 2020, September 2008–2009, December 2011) — and tightens when USD supply normalizes.

For FinWiki, this market matters because it is the price of dollar funding for Japan and a direct input to: megabank USD asset funding, life insurer foreign-bond hedge cost, corporate USD-bond swap-back-to-yen economics, and BoJ / Federal Reserve USD swap line policy.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the single-currency rates side and [[derivatives/ois-tona-curve]] for the JPY discounting curve. The cash funding side is [[money-market/japan-money-market]] and the corporate end-user side is [[finance/japan-corporate-fx-and-rate-hedge-policy]].

## Instrument Mechanics

A standard JPY-USD CCBS has the following structure:

| Element | Detail |
|---|---|
| Tenors | 1-month to 30-year; liquid points typically 3M, 6M, 1Y, 2Y, 3Y, 5Y, 7Y, 10Y, 30Y. |
| Notional exchange | Principal is exchanged at trade start at the prevailing spot FX rate and re-exchanged at maturity at the same rate (no FX revaluation built into the swap). |
| Floating legs | Historically USD-LIBOR vs JPY-LIBOR. Post-IBOR transition: SOFR (USD) vs TONA (JPY) compounded in arrears, plus a fixed basis spread. |
| Basis spread | A spread (in bp, almost always negative for JPY) added to the JPY leg; quotes are conventionally "JPY pays SOFR + JPY-leg = TONA + basis". A basis of −60 bp means the JPY payer receives TONA − 60 bp against paying SOFR flat. |
| Reset frequency | Typically quarterly. |
| Collateralization | CSA with daily VM; under post-2008 rules, IM exchange for non-cleared bilateral trades is governed by UMR phase-in. |
| Clearing | A subset of standardized tenors is eligible for CCP clearing; many CCBS remain bilateral due to FX-principal exchange and non-standard tenors. |

The economic content is that paying USD floating and receiving JPY floating minus a spread is the synthetic equivalent of funding a yen asset by borrowing dollars and swapping into yen.

## Post-2008 Evolution

Before the global financial crisis, the JPY-USD basis was close to zero. Covered interest parity (CIP) held tightly because banks arbitraged any deviation. Since 2008, persistent non-zero basis has reflected:

| Driver | Effect on basis |
|---|---|
| Bank balance-sheet costs (leverage ratio, GSIB surcharge, RWA on FX swaps) | Negative — fewer arbitrageurs willing to expand balance sheet to close gaps. |
| Quarter-end / year-end window dressing | Negative spikes — basis widens (more negative) as dealers reduce repo and swap balance-sheet usage. |
| Japan domestic USD demand from life insurers, megabanks, and corporates | Persistent negative pressure as domestic holders of JPY liabilities buy USD bonds. |
| BoJ negative-rate era (2016–2024) | Amplified demand for yield via USD bonds; basis spent extended periods at −50 to −80 bp at 5Y. |
| Federal Reserve dollar swap lines (BoJ-Fed standing arrangement) | Cap on extreme dislocation; activated in March 2020 (COVID) and historically in 2008–2009. |

The break in CIP is now a structural feature, not an arbitrage opportunity, because the limits to arbitrage are real (regulatory capital, credit lines, balance-sheet rental cost).

## Corporate USD Funding via JPY Funding Swap

A Japanese corporate or financial institution can fund a USD-asset purchase in two ways:

1. **Direct USD borrowing** — issue USD bonds, draw USD bank loans, or tap USD CP.
2. **JPY borrowing + JPY-USD swap (synthetic USD)** — issue JPY bonds or take JPY loans, then swap the JPY principal and coupon stream into USD via CCBS plus an FX swap at trade start.

The all-in cost of the synthetic USD is:

```
synthetic USD cost ≈ JPY funding rate − basis (in bp, applied to JPY leg)
                    + SOFR + credit spread on the USD-receiving leg
```

When the basis is −60 bp, the JPY-funded synthetic USD is 60 bp more expensive than the comparable native-USD borrowing — meaning the cheaper path is to issue USD directly if the issuer has a USD-bond franchise. Conversely, US dollar holders who want yen funding receive a 60 bp pickup for lending USD into the swap; this is the "yen pickup trade" that arbitrage capital pursues when basis is wide.

For Japanese megabank treasuries, the basis directly prices the funding gap between yen-denominated deposits (cheap, ample) and USD assets (expensive, scarce), which is why megabank wholesale-funding strategy is sensitive to basis moves. See [[banking/INDEX]] and [[JapanFG/mufg-bank]], [[JapanFG/sumitomo-mitsui-banking-corp]], [[JapanFG/mizuho-bank]] for the franchise level.

## Megabank Dealer Franchise

The three megabank dealer franchises — MUFG, SMFG, and Mizuho FG plus their securities affiliates — are the dominant JPY-USD basis market makers along with global banks (JPMorgan, Goldman Sachs, Citi, Deutsche Bank, BNP Paribas) and Japanese securities firms (Nomura, Daiwa).

The franchise has two sides:

- **Client flow** — Japanese life insurers buying USD bonds, corporates hedging USD investment programs, foreign issuers swapping yen-issued Samurai or Uridashi proceeds back to home currency. This flow is structurally one-directional (yen funded → USD asset), and dealers warehouse the resulting basis exposure.
- **Inventory and warehousing** — Dealers offset client demand by recycling basis via repo, FX-swap markets, and OTC counterparties. Their ability to warehouse depends on RWA capacity, LCR / NSFR ratios, and CSA terms.

The two-sided business is profitable when dealers can earn the bid-ask plus run-rate carry, but balance-sheet cost has compressed margins since 2015. In stressed conditions, dealers withdraw and basis widens — this is the "dealer-balance-sheet channel" of CIP violations documented in BIS and BoJ research.

See [[derivatives/japan-irs-market]] for the related single-currency rates franchise and [[banking/japan-banking-license-tier-comparison-matrix]] for the regulatory layer that governs which entities can be dealers.

## Basis Widening Triggers

| Trigger | Mechanism | Typical magnitude (5Y JPY-USD basis) |
|---|---|---|
| Quarter-end | Dealers cut FX-swap and CCBS books to reduce balance-sheet snapshot; client USD demand unchanged. | −10 to −30 bp widening over a few days. |
| Year-end (December) | Strongest quarter-end effect plus accounting-reporting period for global banks. | −20 to −60 bp widening, often peaking 10–15 trading days before year-end. |
| Dollar-shortage episode (2008, 2011, 2020) | Global USD-funding stress; cross-border interbank market dries up. | −100 to −300+ bp at peak. |
| Japan-specific outflow surge | Sustained life-insurer or corporate USD-asset buying. | Persistent −40 to −80 bp at 5Y in some periods. |
| BoJ-Fed swap line activation | Provides USD liquidity to BoJ for re-lending to Japanese banks against collateral; floors basis at activated tenor. | Caps widening at the swap-line cost (typically OIS + a fixed spread). |
| Regulatory recalibration (e.g. SLR exemption changes for US banks) | Changes US-bank willingness to act as arbitrageurs. | Persistent multi-year shifts. |

A quarter-end basis widening that does not reverse in the first week of the new quarter usually signals an underlying funding stress beyond mere window dressing.

## Comparison to EUR-USD Basis

| Dimension | JPY-USD basis | EUR-USD basis |
|---|---|---|
| Sign | Persistently negative (JPY-leg pays USD floating minus spread). | Persistently negative but smaller in magnitude. |
| Driver | Japan-domestic USD demand (life insurers, megabanks, corporates). | Eurozone bank USD-asset funding plus periodic eurozone stress (Greek crisis, Italian banking stress). |
| Typical 5Y level (recent years) | −30 to −80 bp normal; −150 to −300+ bp in crisis. | −20 to −50 bp normal; −100 to −200 bp in crisis. |
| Year-end magnitude | Larger Japan-specific effect (fiscal-year alignment, life-insurer reporting). | Smaller but still material. |
| Policy backstop | BoJ-Fed standing USD swap line plus permanent CCY swap arrangement. | ECB-Fed swap line, structurally similar. |
| Dealer set | Japanese megabanks plus global dealers. | European banks (BNP, SocGen, Deutsche) plus global dealers. |

The JPY-USD basis is typically the widest and most volatile of the major-currency CCBS pairs because Japan has the largest structural USD asset demand among non-USD economies, alongside the largest yen-denominated balance sheets seeking dollar income.

## Data Surface

Public data:

- **BIS Triennial Central Bank Survey and Semi-annual OTC Derivatives Statistics** — gross notional and gross market value of FX and interest-rate derivatives, broken down by currency pair and counterparty type.
- **BoJ statistics** — semi-annual Japan portion of BIS OTC derivatives survey; published in the same release window.
- **ISDA SwapsInfo** — weekly aggregated cleared and bilateral notional traded.
- **Tradeweb, Bloomberg, ICAP, BGC indicative quotes** — daily indicative basis curves; not direct trade data.

Public data shows aggregate notional outstanding (multi-trillion USD-equivalent for FX-derivatives generally) but does not show single-trade pricing, dealer P&L, or specific counterparty exposures. Dealer-bank IR disclosures occasionally reference "non-interest income from FX and rates" but do not isolate basis P&L.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-market-infrastructure-map]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank for International Settlements: Semi-annual OTC derivatives statistics (FX derivatives by currency pair, instrument type).
- Bank for International Settlements: Quarterly Review articles on CIP deviations and FX-swap markets (multiple, 2016 onward).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Bank of Japan: Money Market surface and Tokyo Money Market Survey commentary.
- ISDA: SwapsInfo weekly aggregated transaction reports.
- Financial Services Agency: FIEA framework for OTC derivatives oversight.
- Japan Securities Clearing Corporation: clearing scope and product list.
- Federal Reserve and Bank of Japan: standing USD swap line documentation and usage releases.
