---
title: "JHF MBS vs private RMBS spread"
aliases:
  - "JHF MBS spread"
  - "Private RMBS spread Japan"
  - "Japan MBS spread comparison"
  - "JHF vs private spread"
  - "JGB MBS spread"
  - "Japan RMBS pricing"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, mbs, rmbs, spread, jhf, japan, pricing]
status: active
sources:
  - "https://www.jhf.go.jp/about/index.html"
  - "https://www.jcr.co.jp/en/"
  - "https://www.r-i.co.jp/en/"
  - "https://www.jsda.or.jp/en/"
---

# JHF MBS vs private RMBS spread

## TL;DR

JHF MBS senior tranches trade tight vs JGB — typically in the 10-30bp range — reflecting effective sovereign-linked credit and predictable monthly supply. Private RMBS senior tranches trade meaningfully wider — typically 50-100bp vs JGB — reflecting the absence of government support and reliance on subordination / overcollateralization for credit enhancement. The gap reflects the credit-quality difference plus structural / liquidity factors and shapes the investor base for each: lifers and ALM-driven buyers anchor the JHF side; spread-seeking institutional investors lead private RMBS demand. Use this page to understand the spread economics that drive structuring decisions in [[structured-finance/INDEX]].

## Wiki route

| You want | Go to |
|---|---|
| JHF MBS structure | [[structured-finance/jhf-mbs-mechanics]] |
| Private RMBS structure | [[structured-finance/japan-rmbs-issuance-structure]] |
| Market overview | [[structured-finance/japan-abs-market-overview]] |
| Rating methodology | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| JHF agency | [[policy-finance/japan-housing-finance-agency]] |

## 1. Spread benchmarks

| Tranche | JHF MBS | Private RMBS |
|---|---|---|
| Senior (AAA / top tier) | ~10-30bp vs JGB | ~50-100bp vs JGB |
| Mezz (A / BBB) | N/A (effectively all senior in JHF structures) | ~150-300bp vs JGB |
| Subordinated / equity | N/A (retained by JHF) | High double-digit yield |

These are illustrative ranges from public-market commentary; specific deals price relative to JGB curve, prepayment expectations, and dealer placement. Spreads also move with BoJ policy environment — a low-rate, yield-curve-controlled environment compresses spreads.

## 2. Drivers of the spread gap

| Driver | JHF MBS | Private RMBS |
|---|---|---|
| Credit | Government-supported senior; effectively sovereign-linked | Subordination + OC + reserves; private credit |
| Liquidity | Monthly issuance, broad investor base, deep secondary | Intermittent, narrower investor base, thinner secondary |
| Issuer concentration | Single issuer (JHF) | Multiple issuers, deal-specific structures |
| Rating methodology | Treated as sovereign-adjacent | Treated as private structured credit |
| Prepayment | Conservative, well-modeled Flat 35 behavior | Pool-specific, variable-rate or jumbo |
| Investor base | Lifers, regional banks, sovereign-adjacent buyers | Lifers, asset managers, spread investors |

## 3. Government-support spread component

The bulk of the spread gap reflects the credit-quality differential between government-supported senior class and private-structuring senior class. Even when private RMBS senior is rated AAA on a structured-credit basis, the implied government support behind JHF MBS commands a meaningful premium tightening.

| Component | Contribution |
|---|---|
| Government support | Largest single component; reflects sovereign credit linkage |
| Liquidity premium | Material; monthly cadence + broad participation tightens JHF |
| Structural complexity | Private RMBS investors demand premium for analyzing structure |
| Issuance-volume effect | Single, regular JHF program reduces uncertainty; private deals carry idiosyncratic risk |

## 4. Prepayment behavior difference

| Loan type | Prepayment pattern |
|---|---|
| Flat 35 (JHF MBS) | Slow base rate; spikes near bonus periods; refinance waves when rates fall meaningfully |
| Variable-rate jumbo (private RMBS) | Faster base rate; more refinance-sensitive; tighter to floating-rate curve |
| Mixed (private RMBS) | Intermediate; dependent on pool composition |

Prepayment behavior affects effective duration of MBS. Buy-and-hold investors (lifers) accept the prepayment risk because the spread compensates over the bond's expected life; trading-oriented investors apply discount rates that reflect prepayment variance.

## 5. Institutional investor preference

| Investor | JHF MBS | Private RMBS |
|---|---|---|
| Lifers (Asahi, Daido, etc.) | Core ALM allocation, large size | Selective allocation, spread-seeking |
| Megabank ALM books ([[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]]) | Yield-pickup vs JGB | Limited (concentration with own originator) |
| Regional banks | Standard yen-yield holding | Selective |
| Asset managers (Asset Management One, etc.) | Bond-fund constituent | Spread-fund constituent |
| Public-credit investors | Direct allocation | Limited |
| Foreign investors | Selective, JGB-substitute | Selective at senior; rare at mezz |
| Pension funds | ALM-driven allocation | Spread allocation |

Lifers are the dominant single buyer for both products, but their motivation differs: JHF MBS is a JGB-substitute long-duration holding; private RMBS is a spread allocation.

## 6. Curve dynamics

| Environment | JHF MBS spread | Private RMBS spread |
|---|---|---|
| BoJ YCC (yield-curve control) era | Compressed; all yen-credit tight | Compressed; thin spread to JHF |
| Post-YCC normalization | Widens with curve volatility | Widens more (less liquid) |
| Risk-off events | Modest widening (sovereign-linked) | Larger widening (private credit risk) |
| Issuance surge | Modest impact (monthly cadence) | Larger impact (intermittent supply concentration) |

In stress environments, the spread gap widens because private RMBS investors demand more compensation while JHF MBS continues to anchor near sovereign curve.

## 7. Implications for structuring decisions

| Originator | Reasoning |
|---|---|
| Originate Flat 35 → sell to JHF | Long-tenor fixed-rate book funded via JHF; capital-relief; spread economics favorable |
| Originate variable-rate jumbo → securitize as private RMBS | Diversifies funding, capital relief, retains origination relationship |
| Originate variable-rate jumbo → hold on balance sheet | If private RMBS spread economics don't justify securitization cost |

The JHF / private spread gap is a key economic input into bank-originator securitization-vs-hold decisions.

## 8. Rating-agency treatment

| Agency | JHF MBS | Private RMBS |
|---|---|---|
| JCR | Sovereign-adjacent rating treatment | Standard structured-credit methodology |
| R&I | Sovereign-adjacent rating treatment | Standard structured-credit methodology |
| S&P / Moody's / Fitch | Sovereign-linked when rated | Standard structured-credit methodology |

See [[structured-finance/credit-rating-methodology-jcr-r-and-i]] for rating-agency methodology details.

## Counterpoints

- **"Spread gap will close"**: structural factors (government support, monthly supply, deeper investor base) likely keep the gap durable.
- **"Private RMBS is just JHF MBS at a wider spread"**: no — different underlying loans, different prepayment patterns, different credit-enhancement mechanics.
- **"Tight JHF spread means no value"**: lifers and ALM-driven buyers value the spread for relative-to-JGB pickup with sovereign-linked credit; not all investors are spread-maximizers.

## Open questions

- How BoJ policy normalization reshapes the spread relationship.
- Whether private RMBS issuance volume grows enough to develop deeper secondary liquidity (which would tighten its spread).
- The role of foreign investors as JGB-curve buyers — would they cross over to JHF MBS at scale?

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[money-market/INDEX]]
- [[JapanFG/boj-monetary-policy]]
- [[banking/INDEX]]

## Sources

- Japan Housing Finance Agency, IR pages.
- JCR (Japan Credit Rating Agency), structured-finance methodology.
- R&I (Rating and Investment Information), structured-finance methodology.
- JSDA (Japan Securities Dealers Association).
- Megabank IR (MUFG, SMFG, Mizuho FG).
