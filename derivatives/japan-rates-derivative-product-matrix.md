---
title: "Japan rates derivative product matrix"
aliases:
  - "derivatives/japan-rates-derivative-product-matrix"
  - "japan-rates-derivative-product-matrix"
  - "Japan rates derivative matrix"
  - "Japan rates product comparison"
  - "JPY rates derivative matrix"
  - "Japan IRS OIS JGB futures matrix"
  - "日本 金利デリバティブ比較マトリクス"
  - "Japan rates derivative product comparison"
domain: "derivatives"
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, rates, IRS, OIS, TONA, JGB-futures, JGBi, swaption, CMS, inflation-swap, basis-swap, JSCC, LCH, BIS, dealer-franchise, life-insurer-hedge]
status: active
sources:
  - "BOJ BIS survey results — https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm"
  - "BIS OTC derivatives statistics — https://www.bis.org/statistics/derstats.htm"
  - "JSCC IRS products — https://www.jpx.co.jp/jscc/en/cash/irs/product.html"
  - "JPX JGB futures specifications — https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html"
  - "JPX mini 10-year JGB futures — https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html"
  - "MOF inflation-indexed bonds — https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm"
  - "Statistics Bureau CPI — https://www.stat.go.jp/english/data/cpi/index.html"
  - "ISDA interest-rate product disclosure — https://www.isda.org/a/ORiDE/isda-rates.pdf"
---

# Japan rates derivative product matrix

## TL;DR

Japan's yen-rates complex spans **IRS, TONA OIS, JGB futures, swaptions, CMS, inflation swaps, and yen cross-currency swaps**, with JGB inflation-linked bonds included as a cash-market comparison. The current JPX physically delivered JGB-futures lineup is 5-year, 10-year, and mini 20-year; mini 10-year JGB futures are a separate cash-settled product. This matrix confines comparisons to contract form, reference, and official verification surface. Aggregate statistics do not establish current dealer rankings, product-level end-user intensity, or dealer revenue.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. It pairs with [[derivatives/japan-irs-market|Japan yen IRS market]] for the headline OTC swap lane, [[derivatives/ois-tona-curve|OIS / TONA curve]] for the discount-curve and RFR lane, [[derivatives/jgb-futures-curve|JGB futures curve]] for the exchange-listed hedge lane, [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] for the cross-currency intersection, [[derivatives/japan-swaption-market|Japan swaption market]] for the option-on-IRS lane, [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] for the slope-curve product, [[derivatives/japan-inflation-swap|Japan inflation swap]] for the CPI-linked hedge lane, and [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] for the cash-side inflation-linked underlying. The cash market is [[money-market/INDEX|money-market index]] and the corporate end-user side is [[finance/japan-corporate-fx-and-rate-hedge-policy|corporate FX and rate hedge policy]].

## Why a rates-derivative product matrix matters

A single phrase like "Japan rates derivative" hides the fact that the clearing venue, notional scale, participant mix, and end-user use case differ across products. Without classification:

- a yen IRS looks like a yen OIS even though the floating reference (TIBOR vs TONA) and discount-curve role differ;
- a JGB future looks like a swap even though one is exchange-listed and physically delivered, the other is OTC and net-settled;
- a swaption looks like a vanilla option even though it is the optionality layer on the underlying IRS curve, with distinctive life-insurer demand;
- a CCBS looks like an FX swap even though it is the funding-arbitrage instrument that links yen and USD term funding;
- an inflation swap and a JGBi look interchangeable even though one is OTC derivative and the other is cash-bond market.

The matrix puts each product in its place so that any single derivative page can be read against its alternative hedge route or its cash-market underlying.

## Product 1 — Yen IRS (TIBOR-floating)

- **Instrument type.** OTC fixed-for-floating swap referencing a defined Japanese Yen TIBOR tenor. See [[derivatives/japan-irs-market|Japan yen IRS market]].
- **Verification surface.** JBATA for benchmark status; JSCC for products eligible for its IRS clearing service; BIS and BOJ for aggregates.
- **Boundary.** Product eligibility, a legal clearing mandate, liquidity by tenor, and a named institution's position are separate questions.

## Product 2 — Yen OIS (TONA)

- **Instrument type.** OTC fixed-for-floating swap referencing compounded TONA. See [[derivatives/ois-tona-curve|OIS / TONA curve]].
- **Verification surface.** BOJ for TONA publication; JSCC for eligible OIS products and criteria.
- **Boundary.** Discounting, collateral, compounding, and tenor conventions are contract-specific.

## Product 3 — JGB futures (10Y standard)

- **Instrument type.** Osaka Exchange physically delivered futures on a 10-year notional JGB, with a JPY100 million trading unit. See [[derivatives/jgb-futures-curve|JGB futures curve]].
- **Verification surface.** JPX contract specifications, delivery rules, and derivatives statistics.
- **Boundary.** Open interest and volume vary by dated contract and should not be replaced with an undated magnitude.

## Product 4 — Other current JGB futures

- **Physically delivered.** 5-year JGB futures use a JPY100 million trading unit; mini 20-year JGB futures use JPY10 million.
- **Cash settled.** Mini 10-year JGB futures are cash settled and use a JPY10 million trading unit.
- **Boundary.** JPX's current specification does not list a standard JPY100 million 20-year JGB futures contract; do not conflate mini 20-year with mini 10-year.

## Product 5 — JGB inflation-linked bond (JGBi)

- **Instrument type.** MOF-issued cash bond, not a derivative, whose principal is indexed to CPI excluding fresh food. See [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]].
- **Verification surface.** MOF product, auction, and indexation-coefficient pages.
- **Boundary.** The bond can inform a cash-market breakeven comparison, but its yield is not interchangeable with an inflation-swap quote.

## Product 6 — Swaption (option on yen IRS)

- **Instrument type.** OTC option on a defined underlying yen IRS, with exercise and settlement terms in the confirmation. See [[derivatives/japan-swaption-market|Japan swaption market]].
- **Verification surface.** ISDA product documentation and the specific confirmation.
- **Boundary.** Aggregate interest-rate-option data does not establish a Japan dealer ranking, a “most liquid” grid point, or a named investor's direction.

## Product 7 — CMS (constant-maturity swap)

- **Instrument type.** OTC swap whose CMS leg references a defined constant-maturity swap rate. See [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]].
- **Verification surface.** ISDA product documentation and the trade confirmation.
- **Boundary.** The current JSCC eligible-product page does not establish broad CMS clearing, liquidity, or participant intensity.

## Product 8 — Inflation swap (CPI-linked)

- **Instrument type.** OTC swap exchanging fixed and defined CPI-linked cash flows. See [[derivatives/japan-inflation-swap|Japan inflation swap]].
- **Verification surface.** Statistics Bureau for the named CPI series; ISDA definitions and the confirmation for payoff mechanics.
- **Boundary.** Reference index, lag, interpolation, clearing status, tenor, and investor use are contract-specific.

## Product 9 — Yen-USD cross-currency basis swap (CCBS)

- **Instrument type.** OTC swap exchanging defined cash flows in two currencies, potentially including initial and final principal exchanges and a basis spread. See [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] and [[derivatives/yen-basis-swap-market|yen basis swap market]].
- **Verification surface.** ISDA mechanics, BIS aggregate analysis, and the trade confirmation.
- **Boundary.** Sign convention, spread leg, tenor, collateral, clearing, and end-user purpose cannot be inferred from the product name alone.

## Cross-product comparison matrix

| Product | Form | Reference / underlying | Official verification surface | Key boundary |
|---|---|---|---|---|
| Yen IRS | OTC swap | Defined Japanese Yen TIBOR tenor | JBATA; JSCC eligible-product page; confirmation | Benchmark status, clearing eligibility, and mandate are distinct |
| Yen OIS | OTC swap | Compounded TONA | BOJ; JSCC eligible-product page; confirmation | Compounding and collateral terms are contract-specific |
| 5Y / 10Y JGB futures | Listed, physically delivered | JPX notional JGB and deliverable basket | JPX specification and delivery pages | JPY100 million trading unit |
| Mini 20Y JGB futures | Listed, physically delivered | JPX 20-year notional JGB and deliverable basket | JPX specification and delivery pages | JPY10 million trading unit |
| Mini 10Y JGB futures | Listed, cash settled | 10-year JGB futures price | JPX mini-product page | Not a physically delivered mini contract |
| JGBi | MOF cash bond | CPI excluding fresh food | MOF JGBi and coefficient pages | Cash-bond yield is not an inflation-swap quote |
| Swaption | OTC option | Defined underlying IRS | ISDA documentation and confirmation | Exercise and settlement are transaction-specific |
| CMS | OTC swap | Defined constant-maturity swap rate | ISDA documentation and confirmation | Convexity and payoff depend on full terms |
| Inflation swap | OTC swap | Named CPI series | Statistics Bureau, ISDA definitions, confirmation | Index lag and interpolation are transaction-specific |
| Yen cross-currency swap | OTC swap | Two defined currency cash-flow legs | ISDA documentation, BIS aggregates, confirmation | Spread leg and sign convention must be stated |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm] ^[source:https://www.stat.go.jp/english/data/cpi/index.html] ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

## How to read this matrix

The rates-derivative product matrix is a public-surface tool. When reading any single product page:

1. **Start with legal form.** Distinguish listed futures, OTC derivatives, and the JGBi cash bond.
2. **Name the exact reference.** TIBOR, TONA, CPI, a futures price, and a CMS rate are not interchangeable.
3. **Separate eligibility from obligation.** A CCP eligible-product list does not by itself establish that a trade must clear.
4. **Align datasets.** BIS/BOJ notional, JPX contract volume, and MOF bond amounts have different units and populations.
5. **Demand dated evidence for behavior claims.** Participant direction, liquidity, dealer share, and revenue require a specific disclosure or dataset.

## Boundary cases and caveats

- **IRS vs OIS.** Both can be fixed-for-floating swaps, but the named benchmark and calculation method differ; Japanese Yen TIBOR remains active.
- **Listed futures vs OTC swap.** A 10Y JGB future hedges duration but is anchored to the 10Y CTD; an OTC 10Y IRS hedges the exact 10Y swap rate at the trade tenor. Insurer ALM uses both, with different basis behavior.
- **JGBi vs inflation swap.** JGBi is a cash MOF-issued bond delivering inflation-indexed cash flows; an inflation swap is an OTC derivative without principal exchange. Both reference all-Japan CPI ex-fresh-food. Hedge-fund inflation-breakeven trades typically combine JGBi and OIS or use inflation swap directly.
- **Swaption vs option on JGB future.** A swaption references a defined swap, while an exchange-listed option on JGB futures references the futures contract; activity comparisons require a dated, like-for-like dataset.
- **CMS vs vanilla swap.** A CMS swap pays a periodically reset CMS rate (a swap rate of constant maturity) rather than a periodically reset short-tenor floating rate. The "constant maturity" feature changes the convexity and vol-surface dependence.
- **Cross-currency swap vs FX swap.** Contract structures and cash-flow schedules differ; the exact principal exchanges, rate legs, spread convention, and maturity must be stated before comparing them.
- **BIS notional vs gross market value.** BIS publishes both gross notional outstanding and gross market value semi-annually. Gross notional is the headline number for size comparison; gross market value (much smaller) is the closer-to-real-exposure number. Always cite the survey vintage.

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: BIS-coordinated OTC derivatives statistics for Japan (statistics/bis/yoshi).
- Bank for International Settlements: OTC derivatives statistics semi-annual release (derstats).
- Bank for International Settlements: OTC derivatives H2 2024 statistical release (otc_hy2502).
- Japan Securities Clearing Corporation (JSCC): IRS clearing services and JGB OTC clearing rules.
- LCH SwapClear: yen IRS clearing service description.
- Japan Exchange Group: JGB futures contract specifications.
- Japan Exchange Group: TONA 3-month futures specifications.
- Ministry of Finance: JGB auction calendar and JGB outstanding statistics.
- Ministry of Finance: JGB inflation-indexed bond (JGBi) issuance and outstanding pages.
- International Swaps and Derivatives Association (ISDA): SwapsInfo and IRS market-size publications.
- Financial Services Agency (FSA): FIEA framework for OTC derivatives clearing mandate.
