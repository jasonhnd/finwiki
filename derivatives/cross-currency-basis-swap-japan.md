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
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, fx, basis, funding, life-insurer, central-bank-swap]
status: active
sources:
  - "https://www.boj.or.jp/en/paym/market/index.htm"
  - "https://www.boj.or.jp/en/announcements/release_2008/index.htm"
  - "https://www.federalreserve.gov/monetarypolicy/bst_liquidityswaps.htm"
  - "https://www.isda.org/"
  - "https://www.bis.org/publ/qtrpdf/r_qt1709.htm"
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

The BIS Quarterly Review series has tracked CIP deviations extensively. The pattern repeats across EUR-USD, GBP-USD, AUD-USD bases, but JPY-USD is structurally one of the most persistently wide because of Japan's deep pool of yen-denominated savings that need to find USD return.

## JPY-USD vs EUR-USD basis dynamics

Both bases are persistently negative (USD demand exceeds CIP-implied supply), but JPY-USD tends to be more persistent and wider than EUR-USD. The differential reflects:

- Japan's larger absolute pool of yen savings seeking USD assets relative to euro-zone equivalents.
- ECB / Eurosystem operations vs BoJ operations differ in scope; see [[money-market/boj-open-market-operations|BoJ open market operations]].
- Different regulatory treatment of FX-hedged carry in life-insurer ALM frameworks across jurisdictions.

The two bases co-move during global USD-funding stress episodes (e.g., March 2020 covid), but the JPY-USD basis was the one that widened most sharply and required the largest central-bank swap-line drawdown.

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

CCBS basis routinely widens at quarter-ends, especially year-end, because dealer banks reduce balance-sheet provision into reporting dates. The pattern is:

| Period | Typical JPY-USD 3M basis behavior |
|---|---|
| Mid-quarter | Range-trading around prevailing structural level. |
| Last 2 weeks of quarter | Sharp widening (more negative) as dealers withdraw. |
| First week of new quarter | Snap-back toward structural level. |
| Year-end (December) | Largest widening of the calendar year. |

This pattern is well-documented in BIS Quarterly Review research and is reflected in spot vs forward-implied basis curves. Japanese banks (notably [[megabanks/mufg-bank|MUFG Bank]], [[megabanks/sumitomo-mitsui-banking-corp|Sumitomo Mitsui Banking Corp]], and [[megabanks/mizuho-bank|Mizuho Bank]]) are dominant counterparties on the JPY-USD basis market and feel both sides of these dynamics.

## Central bank swap lines

Permanent / standing FX swap lines between the Fed and a small group of central banks (BoJ, ECB, BoE, SNB, Bank of Canada) are the system-of-last-resort backstop for USD-funding stress. Mechanically:

- Fed lends USD to BoJ against JPY collateral at an OIS-linked rate.
- BoJ on-lends USD to Japanese banks via auctions (US Dollar Funds-Supplying Operations against pooled collateral).
- The mechanism caps how wide the CCBS basis can practically go during stress because Japanese banks have an alternative USD source.

BoJ-Fed swap-line drawdowns spiked during the 2008-2009 crisis and again in March-April 2020 during the covid funding shock. After each episode, drawdowns normalized to zero and the standing facility reverted to backstop status.

The [[money-market/INDEX|money-market index]] is the entry point for the broader BoJ liquidity-management framework that includes USD funds-supplying operations.

### Operational mechanics of BoJ USD funds-supplying operation

When activated, the operation typically works as follows:

| Step | Action |
|---|---|
| 1 | BoJ announces auction parameters (size, tenor, frequency) via press release. |
| 2 | Eligible Japanese counterparties (mainly megabanks and major regional / trust banks) submit bids against pooled JGB collateral. |
| 3 | Allocation against bid rate (or fixed-rate, full-allotment in stress mode). |
| 4 | USD delivered to bidder accounts via correspondent-banking arrangements. |
| 5 | USD repaid at maturity (typically 7-day, 84-day, or 3M tenors during stress periods). |

The facility was used heavily in 2020-Q1 / Q2 with 7-day, 14-day, 84-day operations; aggregate outstanding peaked at over USD 200bn before normalization. The presence of the facility itself is part of why the JPY-USD basis is "anchored" rather than allowed to widen indefinitely in stress.

## Corporate JPY funding for USD project

A non-Japanese multinational with a JPY-denominated bond issuance can use a CCBS to convert proceeds into USD without taking FX risk on the principal. The structure:

1. Issue 5Y samurai bond at JPY fixed coupon.
2. Enter a CCBS: pay JPY fixed (matching the bond), receive USD floating + basis adjustment.
3. Use the USD proceeds for the intended project.

The all-in USD funding cost equals the JPY bond coupon swapped to USD, adjusted for the prevailing basis. When the JPY-USD basis is sharply negative, this route can be cheaper than direct USD bond issuance for the issuer, while simultaneously giving the dealer counterparty (typically a Japanese megabank) profitable basis exposure.

## Life-insurer USD bond hedging cost

The dominant structural buyer of CCBS hedging from the Japan side is the Japan life-insurance sector. Life insurers hold large USD-denominated bond portfolios as yield-pickup vs domestic JGBs (see [[insurance/japan-life-insurance-alm-overview|Japan life-insurance ALM overview]]). To eliminate FX risk on those holdings, they use a combination of:

- Rolling 3M FX forwards.
- 1Y FX forwards.
- Long-dated CCBS (3Y, 5Y, 10Y) for stable structural hedges.

The total all-in hedged USD yield equals USD bond coupon - hedge cost (forward points and basis spread). In periods of wide negative JPY-USD basis (e.g., late-2010s and 2022-2023), the all-in hedged yield on a 10Y US Treasury can shrink to near-zero or even turn negative vs JGBs, which prompts life-insurer reallocation back to JGBs or unhedged USD bonds. The flow shift is one of the most-watched dynamics in global fixed-income markets.

### Numerical illustration

A stylized example to make the mechanics concrete. Consider a 10Y US Treasury at 4.5% yield and a 10Y JGB at 1.0%. The naive carry is 350bp. Now overlay hedge cost:

| Component | Approximate value (illustrative) |
|---|---|
| 10Y UST yield | 4.5% |
| Implied 3M-rolling FX forward hedge cost | ~2.5-3.0% (driven by short-rate differential) |
| Plus 5Y JPY-USD CCBS basis spread | ~30-50bp (negative) |
| All-in hedged USD yield | ~1.2-1.7% |
| 10Y JGB yield | ~1.0% |
| Net pickup vs JGB | ~20-70bp |

The exact numbers fluctuate substantially over time, but the pattern is consistent: when the JPY-USD basis is wide and short-rate differential is large, the all-in hedged USD yield converges toward JGB yield, leaving little extra reward for the operational complexity and credit exposure of holding hedged USD bonds. This is a recurring decision point in life-insurer ALM committees.

## Market participants and flow taxonomy

The JPY-USD CCBS market is structurally lopsided. Typical flow taxonomy:

| Flow direction | Typical participant | Position |
|---|---|---|
| Pay USD floating, receive JPY floating + basis | Japan-domiciled USD asset holder hedging | Net USD borrower (synthetic) |
| Pay JPY floating + basis, receive USD floating | Non-Japan corporate raising synthetic JPY | Net JPY borrower (synthetic) |
| Dealer (megabank / global bank) | Intermediates between the two sides | Holds residual basis exposure under risk limits |
| Speculative (hedge fund) | Takes basis-narrowing or widening view | Small share in stress periods, larger in tranquil periods |

The structural imbalance — much more Japan-domiciled USD-asset-hedging demand than non-Japan JPY-borrowing demand — explains why the basis sits persistently negative rather than reverting to CIP zero.

### Major dealer franchises

Dealer participation is concentrated:

- [[megabanks/mufg-bank|MUFG Bank]]: significant balance-sheet and Japan-corporate franchise; long-standing PB / dealer in JPY-USD basis market.
- [[megabanks/sumitomo-mitsui-banking-corp|Sumitomo Mitsui Banking Corp]]: similar profile; SMFG group-wide cross-business synergy.
- [[megabanks/mizuho-bank|Mizuho Bank]]: strong corporate / financial-institution dealing franchise; deep JGB collateral integration.
- Citi, JPMorgan, Goldman Sachs, Morgan Stanley: dominant foreign dealers; especially active during stress periods when megabank balance sheet is constrained.
- Nomura, Daiwa: also participate, especially in life-insurer-related flow and longer-tenor structures.

The concentration creates pricing-dispersion opportunities: a Japan corporate or insurer running a multi-dealer panel can capture pricing improvements of several basis points on large notional trades by sourcing pricing competitively.

## Regulatory and documentation framework

CCBS trades are documented under ISDA master agreements with CSA collateralization. Specific features:

- ISDA 2002 master is the typical reference document; some Japanese counterparties also use the Japanese-law equivalent.
- CSA terms specify collateral currency (JPY vs USD), eligible collateral types, threshold, minimum transfer amount, and valuation methodology.
- Post-2008 reforms pushed standardized CCBS toward central clearing where eligible (CME, LCH SwapClear), though Japan CCBS clearing adoption has been slower than for USD IRS.
- BoJ and FSA monitor systemic exposure via trade-repository reporting under FIEA derivatives reporting rules.
- Capital treatment under Basel III (counterparty credit risk, CVA charge) influences dealer pricing especially for non-cleared trades.

The economic effect is that bilateral non-cleared CCBS pricing carries an embedded capital charge that widens the basis from what would prevail in a fully-cleared, fully-collateralized environment.

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

- Bank of Japan: Money Markets page and US Dollar Funds-Supplying Operations announcements.
- Federal Reserve: Central bank liquidity swap line page.
- Bank for International Settlements: Quarterly Review research on CIP deviations.
- ISDA: master-agreement and CSA frameworks for cross-currency swap documentation.
