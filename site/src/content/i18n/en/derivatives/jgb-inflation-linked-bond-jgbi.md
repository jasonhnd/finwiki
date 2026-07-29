---
source: derivatives/jgb-inflation-linked-bond-jgbi
source_hash: 1c7d936fd809315d
lang: en
status: machine
fidelity: ok
title: "JGB inflation-linked bond (JGBi)"
translated_at: 2026-07-29T21:20:00.000Z
---

# JGB inflation-linked bond (JGBi)

## TL;DR

JGBi (物価連動国債, "Japan Government Bond Inflation-Indexed") is the inflation-linked variant of the Japanese Government Bond (JGB), issued by the Ministry of Finance (MoF) with principal indexed to the Japan CPI ex-fresh-food index. JGBi was first issued in March 2004; issuance was paused in 2008 amid the global financial crisis and resumed in October 2013 under the BoJ's QQE framework and the government's commitment to escape deflation. The standard tenor at issuance is 10 years.

JGBi's distinguishing feature is that the principal is adjusted by the cumulative change in the reference CPI between the bond's reference date and the relevant payment date; the fixed coupon rate is applied to the inflation-adjusted principal. Bonds issued in and after 2013 carry a maturity deflation floor: the redemption amount cannot be below par.

The JGBi-implied breakeven inflation rate is commonly approximated as a matched-maturity nominal JGB yield minus a JGBi real yield. It is a cash-market spread affected not only by inflation expectations but also by liquidity, indexation, taxation, and the value of the maturity floor.

For FinWiki, this entry covers issuance history, the auction and reopening cadence, the deflation floor, foreign investor share, the breakeven inflation rate signal, and BoJ holdings.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates / inflation cluster. Read it against [[derivatives/japan-inflation-swap]] for the OTC derivative analogue, [[derivatives/jgb-futures-curve]] for the nominal JGB futures market, [[derivatives/jgb-special-participants-primary-dealer]] for the JGB Special Participants who participate in JGBi auctions, and [[money-market/jgb-repo-market-japan]] for the JGB repo market that finances JGBi positions. The MoF JGB management context is at [[money-market/INDEX|money market]] and [[money-market/boj-open-market-operations|BoJ open market operations]] for BoJ holdings.

## Issuance History

The JGBi program has unfolded in distinct phases:

| Period | Phase | Notes |
|---|---|---|
| 2004 March | First issuance | MOF history records the first issuance of the 10Y product |
| 2004–2008 | Early phase | Use dated MOF auction and outstanding tables for issue volume; this product page does not establish holder mix or secondary-market liquidity |
| 2008 (post-Lehman) | Issuance paused | MOF history records the issuance pause; this page does not assign a demand cause without a specific supporting source |
| 2008–2013 | No new issuance | Outstanding JGBi remained but no new issuance |
| 2013 October | Issuance resumed | 10Y issuance resumed; bonds issued in and after 2013 include the maturity deflation floor |
| Current program | Issuance under annual plans and auction announcements | Dates, amounts, and reopenings must be taken from the current MOF plan and auction notices |

Source: ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm]

The MOF JGB Issuance Plan specifies the fiscal-year program; undated cadence and share estimates should not substitute for that plan.

## Auction and Reopening Mechanics

JGBi follows a structured auction and reopening cycle:

| Element | Detail |
|---|---|
| Issuer | Ministry of Finance (MoF) |
| Auction terms | Defined in the dated MOF auction announcement and result |
| Eligible direct bidders | Defined by the applicable MOF auction rules and participant framework |
| Tenor | 10-year inflation-indexed JGB product |
| Reopening | Issue number and terms are stated in each dated announcement |
| Amount | Use the announced amount; no generic “hundreds of billions” assumption is applied |

Sources: ^[source:https://www.mof.go.jp/english/policy/jgbs/auction/index.htm] ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm]

## Deflation Floor

The post-2013 JGBi deflation floor is a structural protection:

- At maturity, the redemption amount cannot be less than 100% of original face value (par).
- If realized cumulative CPI inflation between the reference date and maturity is negative, the principal-indexation calculation would imply a redemption below par, but the floor prevents that — the investor receives par.
- Coupons during the bond's life are still applied to the inflation-adjusted principal (which can sit below par during deflationary periods); the floor protects only the final redemption amount.

The deflation floor is similar in spirit to the US TIPS (Treasury Inflation-Protected Securities) deflation floor on principal but differs in scope (TIPS apply the floor to principal at maturity vs principal at any time for coupon computation in a more nuanced way). The JPY mechanism was added to JGBi after the 2008 pause to address investor concerns about deflationary scenarios.

The economic value of the deflation floor depends on the probability of negative cumulative inflation over the bond's life; in extended deflation, the floor value can be material; in inflationary scenarios, the floor is far OTM and has minimal value.

## Foreign Investor Share

Investor shares are time-varying. A current foreign-share claim must cite a dated MOF or BOJ holder table whose security perimeter explicitly identifies inflation-indexed JGBs; aggregate JGB holder data should not be silently treated as JGBi-only evidence. The sources used here do not support a standing claim that foreign investors are the largest category.

## Breakeven Inflation Rate Signal

The JGBi-implied breakeven inflation rate (BEI) is computed as:

$$\text{BEI}_T = y^{\text{nominal}}_T - y^{\text{JGBi}}_T$$

where $y^{\text{nominal}}_T$ is the nominal JGB yield at tenor $T$ and $y^{\text{JGBi}}_T$ is the JGBi (real) yield at the same tenor.

This BEI represents the market-implied cumulative annual inflation rate (with a small adjustment for the inflation risk premium and liquidity premium) that would equate the two bonds' total returns.

| BEI measure | What it captures |
|---|---|
| 10Y JGBi BEI | Matched-maturity nominal-real yield spread over 10 years, subject to the adjustments described below |
| Forward BEI (e.g., 5Y forward 5Y BEI) | Market-implied inflation expectation for the second half of the JGBi tenor; less direct contamination from current realized inflation |
| Swap-implied breakeven (from [[derivatives/japan-inflation-swap|JPY inflation swap]]) | Derivative-market measure with different collateral, liquidity, and contract effects; the spread sign is empirical, not fixed |

Sources: ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm] ^[source:https://www.stat.go.jp/english/data/cpi/index.html]

The raw yield difference is not a pure expectation measure. Any historical level or forward-BEI claim requires dated, matched securities and explicit treatment of index lag, liquidity, carry, and the maturity floor.

## BoJ Holdings

BOJ publishes JGB holdings statistics. A JGBi-specific amount or share must align the security classification, observation date, and MOF outstanding denominator:

| Aspect | Detail |
|---|---|
| Published series | BOJ holdings statistics and balance-sheet tables; security classification and date must be stated |
| Share calculation | Requires a same-date MOF outstanding denominator with matching JGBi scope |
| Market-function inference | A holdings level alone does not quantify free float, liquidity, or BEI distortion |
| Policy period | Current purchase and run-off treatment must be taken from dated BOJ decisions |

Source: ^[source:https://www.boj.or.jp/en/statistics/boj/fm/jgb/index.htm]

This page does not state an undated BOJ share or infer a quantified price effect without a matched holdings and outstanding dataset.

## JGBi vs JGB Cash Market Liquidity

| Aspect | Nominal JGBs | JGBi |
|---|---|---|
| Issuance and outstanding | Use dated MOF plans and outstanding tables | Use dated MOF JGBi announcements and tables |
| Yield interpretation | Nominal yield | Real yield under JGBi indexation and floor terms |
| Price reference | Nominal JGB cash prices and yields | JGBi cash prices, accrued indexation, and real yields |
| Listed futures | Current JPX lineup includes physically delivered 5Y, 10Y, and mini 20Y contracts plus cash-settled mini 10Y | No dedicated JGBi futures contract is listed on the cited JPX JGB-futures surface |
| Liquidity comparison | Requires dated, like-for-like turnover or quote data | Do not infer from issue count or holder labels alone |

Sources: ^[source:https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/jgb-futures/01.html] ^[source:https://www.jpx.co.jp/english/derivatives/products/jgb/mini-jgb-futures/index.html]

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/jgb-special-participants-primary-dealer]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-swaption-market]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Ministry of Finance: JGBi (Inflation-Indexed Bonds) program documentation, auction calendar, deflation floor terms.
- Ministry of Finance: JGB Issuance Plan (annual; specifies JGBi issuance volume and tenor mix).
- Bank of Japan: JGB holdings statistics including JGBi.
- Statistics Bureau (Ministry of Internal Affairs and Communications): CPI ex-fresh-food index publication and methodology.
- BIS: Government bond statistics including inflation-linked bonds by issuer.
- Financial Services Agency: FIEA framework on JGB auction and secondary trading.
- BoJ Reports and Research Papers on JGBi market functioning (occasional analytical publications).
