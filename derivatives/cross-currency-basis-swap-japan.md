---
title: "Cross-currency basis swap (Japan focus)"
aliases:
  - "cross-currency-basis-swap-japan"
  - "CCBS JPY-USD"
  - "通貨ベーシス スワップ"
  - "Japan cross-currency basis"
  - "JPY-USD basis"
  - "EUR-USD basis"
  - "year-end basis widening"
  - "BoJ-Fed swap line"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, fx, basis, funding, life-insurer, central-bank-swap]
status: active
sources:
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_h/index.htm"
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_h/opetori13.htm"
  - "https://www.federalreserve.gov/monetarypolicy/bst_liquidityswaps.htm"
  - "https://www.isda.org/a/ORiDE/isda-rates.pdf"
  - "https://www.bis.org/publ/qtrpdf/r_qt1609e.htm"
---

# Cross-currency basis swap (Japan focus)

## TL;DR

A cross-currency basis swap (CCBS) is an OTC derivative in which two counterparties exchange floating-rate interest payments in two different currencies, with the principal also exchanged at inception and re-exchanged at maturity. The "basis" is the spread quoted on one leg (conventionally the non-USD leg) that adjusts for the deviation from covered interest parity. The JPY-USD basis is one of the most-watched FX-funding signals in global markets because it reflects the cost faced by Japanese investors (insurers, banks, asset managers) to hedge USD assets back into yen, and by global borrowers to access yen funding.

This entry is the long-dated, funding-side cousin of [[derivatives/corporate-fx-hedge-policy-japan-listed|corporate FX hedge policy]] inside the [[derivatives/INDEX|derivatives index]], and is closely linked to [[derivatives/yen-basis-swap-market|yen basis swap market]] for the broader basis-curve view.

## Wiki route

This entry sits in the [[derivatives/INDEX|derivatives index]] as the cross-currency basis swap explainer. Read it against [[derivatives/yen-basis-swap-market|yen basis swap market]] for the basis-curve view, [[insurance/japan-life-insurance-alm-overview|Japan life-insurance ALM overview]] for the life-insurer demand side, and [[money-market/japan-money-market|Japan money market]] for the short-end funding context.

## Mechanics

A standard JPY-USD 5Y CCBS works like this:

| Step | Action |
|---|---|
| t=0 | Counterparty A delivers JPY notional to Counterparty B; B delivers USD notional to A at the prevailing spot rate. |
| t=0 → T | A pays USD floating (typically 3M USD SOFR + spread) to B; B pays JPY floating (typically 3M JPY TONA / LIBOR-equivalent + basis spread) to A. |
| t=T | Principals re-exchanged at the original spot rate (not the maturity rate). |

Source: ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

The basis spread is the adjustment applied on top of the non-USD floating index that makes the swap zero-NPV at inception. By convention, the JPY-USD basis is quoted as the spread paid on the JPY-leg payer side: a "negative basis" of -50bp means the JPY-leg payer pays JPY-floating LESS 50bp, which corresponds to the JPY funder needing to give up 50bp of yield to get hold of USD. The wider (more negative) the basis, the costlier it is for a yen-rich entity to swap yen into dollars on a hedged basis.

The [[derivatives/yen-basis-swap-market|yen basis swap market]] page covers the term-structure across tenors in more detail.

### Notional, collateral, and credit exchanges

In a typical bilateral ISDA-documented JPY-USD CCBS, the cash-flow timeline includes:

- Initial principal exchange at t=0 (spot rate).
- Periodic interest payments on each leg (typically quarterly, indexed to relevant floating reference).
- Final principal re-exchange at t=T at the original initial-exchange rate (not the prevailing spot rate at maturity).
- CSA-driven variation margin movements throughout the life of the trade to collateralize MTM.

Because the principal exchange uses the inception spot rate, the trade has substantial principal-replacement cost if a counterparty defaults during the life of the contract. CSA collateralization mitigates this risk but introduces operational and liquidity demands. Choice of collateral currency (USD vs JPY) and rehypothecation rights are commercially significant terms.

## Why the basis deviates from zero

Covered interest parity (CIP) says that under no-arbitrage, the basis should be zero. In practice, post-Global-Financial-Crisis, CIP has held very imperfectly. The persistent JPY-USD basis (negative for most of the last decade) reflects:

1. Structural USD demand from Japan-domiciled insurers, banks, and asset managers needing FX-hedged USD assets.
2. Balance-sheet constraints on USD lenders post-Basel III / LCR / NSFR.
3. Quarter-end and year-end balance-sheet-window effects.
4. Limited USD supply through arbitrage channels because of leverage ratio caps on US bank dealers.
5. Differential post-2008 monetary policy regimes (BoJ near-zero rates while Fed normalized; the carry vs hedge cost mismatch).

The cited BIS analysis documents covered-interest-parity deviations and balance-sheet and hedging-demand mechanisms. It does not establish a timeless ranking of currency pairs or a single investor-cause explanation.

## JPY-USD vs EUR-USD basis dynamics

A valid JPY-USD versus EUR-USD comparison must align the observation date, maturity, spread-bearing leg, sign convention, and source. Global dollar stress can affect both, but the cited sources do not support an undated claim that one is always wider or required the largest swap-line drawdown.

### Term-structure of basis

JPY-USD basis term structure is rarely flat. Typical pattern:

| Tenor | Typical relative level |
|---|---|
| 1W-1M | Most volatile; sharp moves on local funding events. |
| 3M | Benchmark; reported in most market-data feeds. |
| 1Y | Reflects rolling-forward hedge cost; watched by life-insurer treasuries. |
| 3Y-5Y | Reflects structural funding demand from corporate / sovereign issuers. |
| 7Y-10Y | Less liquid; driven by long-dated insurance / pension hedging. |
| 20Y-30Y | Thin liquidity; mostly bespoke transactions. |

The shape can invert during stress: short-end widens sharply while long-end remains tighter. The pattern is meaningful for life insurers deciding whether to hedge short-rolling (cheap normally, expensive in stress) or long-locked (expensive normally, stable in stress).

## Year-end / quarter-end widening

The BIS documents yen-dollar quarter-end spikes from 2014 and links them to tighter balance-sheet constraints. It does not establish a fixed two-week calendar rule or guarantee an immediate reversal:

| Observation window | Evidence-based reading |
|---|---|
| Quarter-end | Yen-dollar basis can show spikes as balance-sheet-intensive arbitrage becomes more costly. |
| Year-end | Reporting-date effects can be pronounced, but size and sign must be checked against a dated market series. |
| After the reporting date | Reversal is possible, not automatic; persistent widening may reflect funding demand or broader stress. |

Source: ^[source:https://www.bis.org/publ/qtrpdf/r_qt1609e.htm]

The cited public research supports the mechanism at aggregate level; it does not rank individual Japanese banks' CCBS activity.

## Central bank swap lines

Permanent / standing FX swap lines between the Fed and a small group of central banks (BoJ, ECB, BoE, SNB, Bank of Canada) are the system-of-last-resort backstop for USD-funding stress. Mechanically:

- Fed lends USD to BoJ against JPY collateral at an OIS-linked rate.
- BoJ on-lends USD to Japanese banks via auctions (US Dollar Funds-Supplying Operations against pooled collateral).
- The mechanism provides an alternative source of USD funding under announced terms; it does not guarantee or cap a market basis quote.

BoJ-Fed swap-line drawdowns spiked during the 2008-2009 crisis and again in March-April 2020 during the covid funding shock. After each episode, drawdowns normalized to zero and the standing facility reverted to backstop status.

The [[money-market/INDEX|money-market index]] is the entry point for the broader BoJ liquidity-management framework that includes USD funds-supplying operations.

### Operational mechanics of BoJ USD funds-supplying operation

When activated, the operation typically works as follows:

| Step | Action |
|---|---|
| 1 | BoJ selects auction participants from eligible counterparties and notifies the loan dates, bid cut-off, loan rate, and other terms through BOJ-NET. |
| 2 | Participants submit requested amounts; under the current outline, BoJ accepts notified amounts unless it exercises its right to reject all or part. |
| 3 | The loan rate is determined by the Federal Reserve Bank of New York. |
| 4 | Borrowers pledge eligible pooled collateral above the notified benchmark yen value. |
| 5 | BoJ disburses dollars through borrower-specified USD accounts at the FRBNY; principal and interest are repaid on the notified maturity date. |

Source: ^[source:https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_h/opetori13.htm]

The exact tenor and frequency are offer-specific. In March 2020, the six central banks moved seven-day operations to daily frequency and continued weekly 84-day operations; this should not be generalized into a permanent 7-day / 84-day / 3M menu. ^[source:https://www.federalreserve.gov/newsevents/pressreleases/monetary20200320a.htm]

## Corporate JPY funding for USD project

A non-Japanese multinational with a JPY-denominated bond issuance can use a CCBS to convert proceeds into USD without taking FX risk on the principal. The structure:

1. Issue 5Y samurai bond at JPY fixed coupon.
2. Enter a CCBS: pay JPY fixed (matching the bond), receive USD floating + basis adjustment.
3. Use the USD proceeds for the intended project.

The all-in comparison requires same-date issuer credit curves, issuance costs, swap cash flows, collateral, FX convention, and executable quotes. Neither issuer savings nor dealer profit follows from the sign of a basis quote alone.

## Life-insurer USD bond hedging cost

An institution with foreign-currency assets may use forwards, swaps, options, or no hedge, but product, maturity, hedge ratio, and direction require a dated institution-specific disclosure. The public sources cited here do not establish that life insurers are the dominant CCBS buyer or prescribe a 3M / 1Y / 3Y–10Y hedge mix.

### Hedge-cost calculation

Use same-vintage executable inputs rather than a timeless numerical example:

| Component | Measurement rule |
|---|---|
| Unhedged USD bond return | Bond yield or expected holding-period return on the chosen valuation date |
| FX-forward component | Annualized cost implied by the exact forward schedule and spot FX used for the hedge |
| Cross-currency basis component | Executable basis quote for the hedge tenor, with quote-side and leg convention stated |
| Hedged JPY return | Unhedged USD return less the contract-specific hedge components and transaction costs |
| Comparison asset | Same-date JGB yield or return at a duration consistent with the USD asset |

Source: ^[source:https://www.bis.org/publ/qtrpdf/r_qt1609e.htm]

The removed 4.5%, 1.0%, and 20–70 bp figures had no valuation date or primary-source quote and therefore were not reproducible.

## Market participants and flow taxonomy

Possible contractual directions can be described without assigning them to an investor class:

| Flow direction | Economic reading | Evidence boundary |
|---|---|---|
| Pay the defined USD leg, receive the defined JPY leg | USD-paying exposure under the confirmation | Purpose and end-user identity require transaction evidence |
| Pay the defined JPY leg, receive the defined USD leg | JPY-paying exposure under the confirmation | Spread sign and leg convention must be stated |
| Intermediated or offsetting position | Residual risks depend on hedges, collateral, and netting | Dealer P&L and inventory are not observable from product name |

Source: ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

### Major dealer franchises

The cited official sources do not publish a current dealer ranking, named-firm market share, stress-period dominance, or guaranteed multi-dealer price improvement. Those claims require dated venue, RFQ, transaction, or dealer-disclosure evidence.

## Regulatory and documentation framework

Documentation, governing law, collateral, reporting, clearing, and capital treatment are transaction- and counterparty-specific. An ISDA 1992 or 2002 form, a CSA, or a CCP cannot be assumed without reviewing the executed documents and current eligible-product and regulatory scope. Likewise, a quantified capital component of the basis requires a pricing model and dated inputs.

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/corporate-fx-hedge-policy-japan-listed]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[money-market/japan-money-market]]
- [[money-market/boj-open-market-operations]]
- [[money-market/INDEX]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]

## Sources

- Bank of Japan: U.S. Dollar Funds-Supplying Operations against Pooled Collateral and transaction outline.
- Federal Reserve: Central bank liquidity swap line page.
- Bank for International Settlements: Quarterly Review research on CIP deviations.
- ISDA: interest-rate derivatives disclosure annex describing cross-currency swaps.
