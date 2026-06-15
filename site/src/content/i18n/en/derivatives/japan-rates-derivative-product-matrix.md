---
source: derivatives/japan-rates-derivative-product-matrix
source_hash: 4066057b3ccbd6aa
lang: en
status: machine
fidelity: ok
title: "Japan rates derivative product matrix"
translated_at: 2026-06-15T03:48:21.841Z
---

# Japan rates derivative product matrix

## TL;DR

Japan's yen-rates derivatives complex spans **interest-rate swap (IRS) referencing TIBOR / TONA, overnight index swap (OIS) referencing TONA, JGB futures (10-year standard, 5-year, 20-year super-long, 10-year mini), JGB inflation-linked bond (JGBi) underlying for inflation swaps, swaption (option on yen IRS), CMS (constant-maturity swap), inflation swap (CPI-linked), and the yen-USD cross-currency basis swap (CCBS)**. These products differ in notional outstanding (referenced to BIS semi-annual OTC derivatives statistics through 2024 H2), CCP clearing (JSCC for yen IRS; LCH SwapClear for global yen IRS; JSCC for JGB futures), tenor depth, market-participant mix, life-insurer hedging use, and dealer-bank revenue contribution. This matrix gathers the publicly verifiable axes so that any single yen-rates derivative page can be placed inside the broader rates-derivatives architecture before a curve, hedge, or counterparty question gets asked.

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

## Product 1  — Yen IRS (TIBOR-floating)

- **Instrument type.** OTC fixed-for-floating swap with TIBOR (1M, 3M, or 6M) as the floating reference; standard JPY ACT/365  day-count. See [[derivatives/japan-irs-market|Japan yen IRS market]].
- **Notional outstanding.** Reported as a component of total JPY single-currency IRS gross notional in BIS semi-annual OTC derivatives statistics; JPY IRS notional aggregates to tens of trillions of USD-equivalent gross at semi-annual cutoff. TIBOR vs TONA share split is operational rather than separately published.
- **CCP clearing.** Cleared at JSCC for domestic dealer-to-dealer flow under the FIEA clearing mandate; cleared at LCH SwapClear for cross-border flow involving major global dealers.
- **Tenor depth.** 1Y, 2Y, 3Y, 5Y, 7Y, 10Y, 15Y, 20Y, 30Y the most-liquid points; out to 40Y for life-insurer hedging.
- **Market participants.** Megabank treasuries (dealer side), securities-firm rates desks, regional bank ALM, life insurers (long-end pay-fix hedge), foreign banks, hedge funds, corporate end-users for loan hedging.
- **Life-insurer hedging use.** Heavy — long-end TIBOR / mixed-reference IRS is one of the canonical life-insurer ALM hedges for fixed-rate liability cash flows.
- **Dealer-bank revenue contribution.** Among the top rates-business contributors for megabank securities subsidiaries (MUFG MUMS, SMBC Nikko, Mizuho Securities, plus Nomura and Daiwa).

## Product 2  — Yen OIS (TONA)

- **Instrument type.** OTC fixed-for-floating swap with TONA (Tokyo Overnight Average Rate) compounded-in-arrears as the floating reference; the canonical post-LIBOR yen overnight RFR. See [[derivatives/ois-tona-curve|OIS / TONA curve]].
- **Notional outstanding.** Subset of total JPY IRS notional in BIS semi-annual OTC derivatives statistics; TONA OIS share has grown materially post-LIBOR transition and continues to expand as the new-issue standard.
- **CCP clearing.** Cleared at JSCC and LCH SwapClear under the same mandate structure as TIBOR IRS.
- **Tenor depth.** Most liquid at the front end (1W, 1M, 3M, 6M, 1Y, 2Y, 3Y); also trades out to 30Y as the discount-curve reference. The discount-curve role means OIS is referenced even when not the primary trade.
- **Market participants.** Megabank treasuries, dealer rates desks, hedge funds and macro funds, asset managers, foreign banks, corporates for short-tenor hedge.
- **Life-insurer hedging use.** Indirect — OIS sets the discount curve used for life-insurer ALM and IRS valuation; direct OIS hedging is more common at the short end.
- **Dealer-bank revenue contribution.** Material; the OIS lane underpins the cleared-IRS market with the post-LIBOR discount-curve role.

## Product 3  — JGB futures (10Y standard)

- **Instrument type.** Exchange-listed physically settled futures on the 10-year notional JGB; the most-traded yen rates derivative on a price basis. See [[derivatives/jgb-futures-curve|JGB futures curve]].
- **Notional outstanding.** Open interest measured in hundreds of thousands of contracts at the front contract; contract notional value is ¥100 million face per contract. Daily turnover concentrates at the 10Y standard.
- **CCP clearing.** JSCC mandatory.
- **Tenor depth.** 10-year notional; CTD basket draws from eligible JGB issues. The 10Y standard, 10Y mini, 5Y, and 20Y super-long contracts trade at different liquidity levels.
- **Market participants.** Megabank treasuries (warehouse), securities-firm trading desks, foreign banks, hedge funds and macro funds, life insurers (occasional hedge use), trust banks.
- **Life-insurer hedging use.** Moderate — futures used for short-horizon duration adjustment; long-end hedging tilts to swaps and JGB cash given JGB futures' 10Y CTD anchor.
- **Dealer-bank revenue contribution.** Significant via market-making, cash-futures basis trading, and CTD-roll positioning.

## Product 4  — JGB futures (5Y, 20Y super-long, 10Y mini)

- **Instrument type.** Companion exchange-listed JGB futures on shorter and longer notional tenors plus the one-tenth-size 10Y mini.
- **Notional outstanding.** Open interest materially smaller than 10Y standard; 20Y super-long open interest grew in the late-QE / post-YCC era as long-end risk reappeared.
- **CCP clearing.** JSCC mandatory.
- **Tenor depth.** 5Y, 20Y, 10Y mini.
- **Market participants.** Life insurers (more active in 20Y super-long for asset-liability matching), trust banks, dealer warehouses, smaller retail and HFT (in mini).
- **Life-insurer hedging use.** 20Y super-long JGB futures are a meaningful insurer hedge instrument for medium-long duration overlay alongside cash JGBs and IRS.
- **Dealer-bank revenue contribution.** Lower than 10Y standard; 20Y / 5Y contracts carry niche but real franchise for dealer ALM and arb.

## Product 5  — JGB inflation-linked bond (JGBi)

- **Instrument type.** Cash-bond market — the underlying for inflation derivatives rather than a derivative itself, included here as the inflation-rates intersection. JGBi is an MOF-issued inflation-indexed JGB linked to the all-Japan CPI ex-fresh-food index. See [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]].
- **Notional outstanding.** Subset of total JGB outstanding; small compared with nominal JGBs but reactivated since 2013  reissuance.
- **CCP clearing.** JGB cash settlement via BoJ-NET; JGB OTC clearing at JSCC where applicable.
- **Tenor depth.** 10-year typical issuance tenor.
- **Market participants.** Life insurers, pension funds, asset managers, BoJ (historical and selective ongoing purchases), foreign reserve managers, hedge funds.
- **Life-insurer hedging use.** Direct — insurers use JGBi to hedge real-yield exposure on inflation-linked or inflation-sensitive liabilities.
- **Dealer-bank revenue contribution.** Specialist rates desks; dealer franchise concentrated in JGB primary-dealer firms.

## Product 6  — Swaption (option on yen IRS)

- **Instrument type.** OTC option granting the right to enter into an underlying yen IRS at a future date (European or Bermudan style); payer / receiver swaption distinction. See [[derivatives/japan-swaption-market|Japan swaption market]].
- **Notional outstanding.** Yen swaption notional reported as a component of JPY interest-rate options in BIS OTC derivatives statistics.
- **CCP clearing.** Some cleared at JSCC / LCH; significant bilateral activity for bespoke strikes / tenors.
- **Tenor depth.** Most liquid in 1Y, 2Y, 5Y, 10Y option-into-IRS tenors; long-end swaption (e.g. 10Y into 20Y) used in life-insurer hedging.
- **Market participants.** Life insurers (heavy receiver swaption use to hedge interest-rate guarantee features), dealer vol desks, hedge funds (vol arb), corporates (occasional payer swaption for hedge-of-hedge or callable bond hedge).
- **Life-insurer hedging use.** Heavy — Japanese life insurers are among the largest buyers of long-end yen receiver swaptions globally, hedging guaranteed-rate policies and ALM convexity.
- **Dealer-bank revenue contribution.** Material for rates-vol desks at megabank securities subsidiaries and global dealers; the long-end vol surface is a meaningful franchise.

## Product 7  — CMS (constant-maturity swap)

- **Instrument type.** OTC swap where one leg pays a periodically reset rate corresponding to a constant-maturity swap rate (e.g. 10Y CMS); the other leg pays a fixed or floating reference. See [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]].
- **Notional outstanding.** Specialist subset of total JPY IRS notional; not separately published in headline BIS aggregates.
- **CCP clearing.** Some cleared at JSCC / LCH where standardized; bespoke trades bilateral.
- **Tenor depth.** Most liquid where reference is 5Y, 10Y, or 20Y CMS; trade tenors 5Y to 30Y.
- **Market participants.** Structured-note issuers (CMS-linked notes), dealer rates desks (vol surface and convexity adjustment), hedge funds, life insurers (curve-slope hedge).
- **Life-insurer hedging use.** Moderate — used in curve-slope and convexity overlay alongside swaptions and IRS.
- **Dealer-bank revenue contribution.** Niche; CMS spread products (CMS-spread option, CMS swap) sit in the structured-rates franchise.

## Product 8  — Inflation swap (CPI-linked)

- **Instrument type.** OTC swap exchanging a fixed inflation rate for the realized CPI index (zero-coupon inflation swap dominant in Japan, referencing all-Japan CPI ex-fresh-food). See [[derivatives/japan-inflation-swap|Japan inflation swap]].
- **Notional outstanding.** Smaller than nominal IRS; the yen inflation derivative market is materially less liquid than yen IRS or OIS.
- **CCP clearing.** Some inflation-swap clearing exists at LCH; bulk of yen inflation-swap activity is bilateral.
- **Tenor depth.** Most liquid 5Y, 10Y; long-end (20Y, 30Y) used in insurer / pension overlay.
- **Market participants.** Life insurers, pension funds, asset managers, dealer rates / inflation desks, hedge funds, occasional corporate end-user with inflation-linked cost exposure.
- **Life-insurer hedging use.** Specialist — insurers with inflation-linked policies or pension obligations use inflation swaps alongside JGBi.
- **Dealer-bank revenue contribution.** Niche; the inflation-derivative franchise is much smaller in yen than in USD or EUR.

## Product 9  — Yen-USD cross-currency basis swap (CCBS)

- **Instrument type.** OTC swap exchanging principal and floating-rate cash flows in two currencies (yen and USD), with the basis spread (additional bp on the yen leg) as the price; the canonical yen-funding-vs-USD-funding arbitrage instrument. See [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] and [[derivatives/yen-basis-swap-market|yen basis swap market]].
- **Notional outstanding.** Material component of total yen-cross-currency OTC derivatives in BIS statistics; quarter-end CCBS activity expands as Japanese institutions roll USD funding.
- **CCP clearing.** Limited CCP clearing for CCBS compared with single-currency IRS; bulk remains bilateral with bilateral collateral and CSA arrangements.
- **Tenor depth.** 3M, 6M, 1Y at the short end; 2Y, 3Y, 5Y, 10Y at the term end.
- **Market participants.** Megabank treasuries (heavy users for USD funding), life insurers (USD-investment hedge), asset managers with USD allocations, dealer rates / FX desks, foreign banks providing dollar liquidity.
- **Life-insurer hedging use.** Heavy — Japanese life insurers' large USD-bond and USD-credit portfolios require continuous CCBS hedging, and the cost-of-hedge embedded in CCBS is a primary insurance-industry P&L driver.
- **Dealer-bank revenue contribution.** Significant for megabank securities subsidiaries and global dealers active in the yen-USD funding corridor; quarter-end CCBS pricing is a closely-watched dealer-franchise barometer.

## Cross-product comparison matrix

| Dimension | Yen IRS (TIBOR) | Yen OIS (TONA) | JGB Fut 10Y | JGB Fut 5Y/20Y/mini | JGBi | Swaption | CMS | Inflation Swap | CCBS (¥/$) |
|---|---|---|---|---|---|---|---|---|---|
| **Instrument type** | OTC swap, fixed-vs-TIBOR | OTC swap, fixed-vs-TONA | Listed futures | Listed futures | Cash bond | OTC option on IRS | OTC swap referencing CMS rate | OTC swap, fixed-vs-CPI | OTC cross-currency swap |
| **Floating / variable reference** | 1M/3M/6M TIBOR | TONA compounded | JGB CTD price | JGB CTD price (each tenor) | All-Japan CPI ex-fresh-food | Underlying IRS | CMS yield | CPI | Yen FRN + USD FRN |
| **Notional outstanding reference** | BIS H2-2024: large share of total JPY IRS gross notional | BIS H2-2024: rapidly growing post-LIBOR share of total JPY IRS | JSCC / OSE OI: hundreds of thousands of contracts (front) | OSE OI: smaller than 10Y std | MOF JGBi: small share of total JGB outstanding | BIS H2-2024: JPY interest-rate options sub-aggregate | Specialist sub-aggregate | Specialist sub-aggregate | BIS H2-2024: meaningful share of yen-cross-currency OTC |
| **CCP clearing** | JSCC + LCH SwapClear | JSCC + LCH SwapClear | JSCC (mandatory) | JSCC (mandatory) | JSCC OTC where applicable | JSCC / LCH for standardized; bilateral for bespoke | JSCC / LCH for standardized; bilateral for bespoke | LCH partial; bulk bilateral | Limited CCP; bulk bilateral |
| **Tenor depth (liquid)** | 1Y–30Y; out to 40Y | 1W–10Y; up to 30Y | 10Y notional | 5Y, 20Y, 10Y mini | 10Y typical | 1Y, 2Y, 5Y, 10Y into IRS | 5Y, 10Y, 20Y CMS reference | 5Y, 10Y typical | 3M front through 10Y |
| **Megabank treasuries** | Heavy | Heavy | Heavy | Moderate | Moderate | Material | Moderate | Moderate | Heavy (USD funding) |
| **Securities-firm rates desks** | Heavy | Heavy | Heavy | Moderate | Moderate | Heavy | Moderate | Moderate | Heavy |
| **Life insurers** | Heavy (long-end pay-fix) | Indirect (discount curve) | Moderate | Heavy in 20Y super-long | Direct holder | Heavy (receiver swaption) | Moderate | Specialist | Heavy (USD-bond hedge) |
| **Hedge funds / macro** | Material | Material | Heavy | Material | Material | Material | Material | Specialist | Material |
| **Foreign banks** | Material | Material | Heavy | Material | Material | Material | Niche | Niche | Heavy |
| **Corporate end-user** | Loan-hedge | Short-tenor hedge | Limited | Limited | None directly | Callable-bond hedge | Niche | Niche | USD-revenue hedge |
| **Life-insurer hedging use** | Heavy | Indirect | Moderate | Heavy (20Y) | Direct | Heavy | Moderate | Specialist | Heavy |
| **Dealer-bank revenue role** | Top rates-business contributor | Material; post-LIBOR core | Significant via MM and basis trading | Lower than 10Y std | Specialist | Material vol-desk franchise | Niche | Niche | Significant in yen-USD corridor |

## How to read this matrix

The rates-derivative product matrix is a public-surface tool. When reading any single product page:

1. **Start with OTC vs listed.** OTC swap-type products (IRS, OIS, swaption, CMS, inflation swap, CCBS) live in a dealer-to-dealer and dealer-to-end-user world with CCP-clearing overlay where applicable; listed JGB futures live in the exchange-traded JSCC-cleared world. Hedge linkages cross the boundary (e.g. CTD basis trade, cash-futures arbitrage).
2. **Check floating reference.** TIBOR vs TONA migration is operationally complex; new-issue JPY IRS leans TONA, but TIBOR-referencing IRS continues. The discount-curve reference for valuation is OIS / TONA.
3. **Check CCP venue.** JSCC dominates yen IRS clearing for domestic flow; LCH SwapClear dominates cross-border flow. Both venues report cleared notional separately. JGB futures clear at JSCC. CCBS clearing is partial.
4. **Check life-insurer column.** Japanese life insurers are unusually important to the yen rates derivative market — long-end receiver swaption, 20Y super-long JGB futures, long-end IRS, and CCBS for USD-bond hedging all carry insurer demand that shapes pricing.
5. **Check dealer-bank franchise.** Megabank securities subsidiaries (MUMS, SMBC Nikko, Mizuho Securities) and major Japanese securities firms (Nomura, Daiwa) plus global dealers form the franchise layer; the matrix indicates which products carry the largest revenue contribution.

## Boundary cases and caveats

- **IRS vs OIS.** Both are fixed-for-floating swaps; the difference is the floating reference (TIBOR vs TONA). Operationally distinct but increasingly economically overlapping as TIBOR fades.
- **Listed futures vs OTC swap.** A 10Y JGB future hedges duration but is anchored to the 10Y CTD; an OTC 10Y IRS hedges the exact 10Y swap rate at the trade tenor. Insurer ALM uses both, with different basis behavior.
- **JGBi vs inflation swap.** JGBi is a cash MOF-issued bond delivering inflation-indexed cash flows; an inflation swap is an OTC derivative without principal exchange. Both reference all-Japan CPI ex-fresh-food. Hedge-fund inflation-breakeven trades typically combine JGBi and OIS or use inflation swap directly.
- **Swaption vs option on JGB future.** Swaption is an option on the swap rate; options on JGB futures (exchange-listed) reference the futures price. Yen-rates options activity skews to swaptions, with JGB-future options less developed than US Treasury futures options.
- **CMS vs vanilla swap.** A CMS swap pays a periodically reset CMS rate (a swap rate of constant maturity) rather than a periodically reset short-tenor floating rate. The "constant maturity" feature changes the convexity and vol-surface dependence.
- **CCBS vs FX swap.** An FX swap is a short-tenor near/far funding instrument; a CCBS is a multi-period swap with floating-rate cash flows in both currencies plus a basis spread on the yen leg. CCBS dominates the term cross-currency funding lane; FX swaps dominate the short-tenor lane.
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
- Bank for International Settlements: OTC derivatives H2 2024  statistical release (otc_hy2502).
- Japan Securities Clearing Corporation (JSCC): IRS clearing services and JGB OTC clearing rules.
- LCH SwapClear: yen IRS clearing service description.
- Japan Exchange Group: JGB futures contract specifications.
- Japan Exchange Group: TONA 3-month futures specifications.
- Ministry of Finance: JGB auction calendar and JGB outstanding statistics.
- Ministry of Finance: JGB inflation-indexed bond (JGBi) issuance and outstanding pages.
- International Swaps and Derivatives Association (ISDA): SwapsInfo and IRS market-size publications.
- Financial Services Agency (FSA): FIEA framework for OTC derivatives clearing mandate.
