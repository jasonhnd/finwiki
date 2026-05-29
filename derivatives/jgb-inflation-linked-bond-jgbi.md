---
title: "JGB inflation-linked bond (JGBi)"
aliases:
  - "jgb-inflation-linked-bond-jgbi"
  - "JGBi"
  - "Japan inflation linked bonds"
  - "JGB inflation linked"
  - "物価連動国債"
  - "MoF JGBi auction"
  - "JGBi reopening"
  - "JGBi breakeven inflation rate"
  - "linker JGB"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, JGBi, inflation-linked-bond, MoF, JGB, BEI, breakeven-inflation, primary-dealer, BoJ-holdings]
status: active
sources:
  - "https://www.mof.go.jp/english/policy/jgbs/topics/Inflation-Indexed_Bonds/index.htm"
  - "https://www.mof.go.jp/english/policy/jgbs/"
  - "https://www.boj.or.jp/en/statistics/boj/fm/jgb/index.htm"
  - "https://www.stat.go.jp/english/data/cpi/index.html"
  - "https://www.bis.org/statistics/securities_stats.htm"
  - "https://www.fsa.go.jp/en/"
---

# JGB inflation-linked bond (JGBi)

## TL;DR

JGBi (物価連動国債, "Japan Government Bond Inflation-Indexed") is the inflation-linked variant of the Japanese Government Bond (JGB), issued by the Ministry of Finance (MoF) with principal indexed to the Japan CPI ex-fresh-food index. JGBi was first issued in March 2004; issuance was paused in 2008 amid the global financial crisis and resumed in October 2013 under the BoJ's QQE framework and the government's commitment to escape deflation. The standard tenor at issuance is 10 years.

JGBi's distinguishing feature is that the principal is adjusted upward (or downward) by the cumulative change in the reference CPI between the bond's reference date and the relevant payment date; the fixed coupon rate is applied to the inflation-adjusted principal, generating an inflation-linked coupon stream. From a 2014 reissuance amendment, JGBi has carried a deflation floor: at maturity, the redemption amount cannot be below par, protecting investors against principal erosion in a deflationary scenario.

Foreign investor holdings of JGBi have grown materially since the 2013 resumption and frequently represent the largest single category of holders. The JGBi-implied breakeven inflation rate (nominal JGB yield minus JGBi yield at matching tenor) is a closely watched market-based read on Japan inflation expectations and complements the [[derivatives/japan-inflation-swap|JPY inflation swap]] breakeven.

For FinWiki, this entry covers issuance history, the auction and reopening cadence, the deflation floor, foreign investor share, the breakeven inflation rate signal, and BoJ holdings.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates / inflation cluster. Read it against [[derivatives/japan-inflation-swap]] for the OTC derivative analogue, [[derivatives/jgb-futures-curve]] for the nominal JGB futures market, [[derivatives/jgb-special-participants-primary-dealer]] for the JGB Special Participants who participate in JGBi auctions, and [[money-market/jgb-repo-market-japan]] for the JGB repo market that finances JGBi positions. The MoF JGB management context is at [[money-market/INDEX|money market]] and [[money-market/boj-open-market-operations|BoJ open market operations]] for BoJ holdings.

## Issuance History

The JGBi program has unfolded in distinct phases:

| Period | Phase | Notes |
|---|---|---|
| 2004 March | First issuance | 10Y JGBi introduced under MoF JGB issuance plan to broaden product range and engage investor base interested in inflation hedging |
| 2004–2008 | Early phase | Modest issuance volumes; mostly institutional uptake; secondary market thin |
| 2008 (post-Lehman) | Issuance paused | Global financial crisis, market dislocation, very low / negative inflation outlook reduced investor demand |
| 2008–2013 | No new issuance | Outstanding JGBi remained but no new issuance |
| 2013 October | Issuance resumed | Resumed under BoJ QQE framework and government commitment to escape deflation; 10Y tenor; deflation floor (added 2013) on newly issued series |
| 2014 amendment | Deflation floor mechanism formalized | Redemption protected at par; mandatory for new issuance |
| 2013–present | Regular issuance | Approximately quarterly issuance and reopenings under MoF issuance plan; volumes set in annual MoF planning |

The MoF JGB Issuance Plan, published annually, specifies the JGBi issuance volume for the fiscal year. JGBi is a small share of total JGB issuance — typically a few percent — and the program's main purpose has been to develop a market for inflation-linked instruments rather than to be a major funding tool.

## Auction and Reopening Mechanics

JGBi follows a structured auction and reopening cycle:

| Element | Detail |
|---|---|
| Issuer | Ministry of Finance (MoF) |
| Auction format | Conventional auction (yield-based or price-based, depending on series and MoF determination); reopenings of existing series increase outstanding |
| Auction participants | [[derivatives/jgb-special-participants-primary-dealer|JGB Special Participants]] (Japan's primary dealer system) submit bids; non-Special-Participants can bid via Special Participant intermediation |
| Tenor at issuance | 10 years (standard) |
| Reopening cadence | Existing series reopened multiple times to build outstanding; reduces the number of distinct ISINs in the market and improves per-series liquidity |
| Issuance per auction | Variable; typically in the hundreds of billions JPY per auction |
| Buyback / sterilization | MoF may conduct JGBi buybacks to manage supply; BoJ has historically held a substantial portion of outstanding |

The reopening cadence is a deliberate design choice to concentrate liquidity in fewer, larger series rather than fragmenting the market with many small individual issues.

## Deflation Floor

The post-2013 JGBi deflation floor is a structural protection:

- At maturity, the redemption amount cannot be less than 100% of original face value (par).
- If realized cumulative CPI inflation between the reference date and maturity is negative, the principal-indexation calculation would imply a redemption below par, but the floor prevents that — the investor receives par.
- Coupons during the bond's life are still applied to the inflation-adjusted principal (which can sit below par during deflationary periods); the floor protects only the final redemption amount.

The deflation floor is similar in spirit to the US TIPS (Treasury Inflation-Protected Securities) deflation floor on principal but differs in scope (TIPS apply the floor to principal at maturity vs principal at any time for coupon computation in a more nuanced way). The JPY mechanism was added to JGBi after the 2008 pause to address investor concerns about deflationary scenarios.

The economic value of the deflation floor depends on the probability of negative cumulative inflation over the bond's life; in extended deflation, the floor value can be material; in inflationary scenarios, the floor is far OTM and has minimal value.

## Foreign Investor Share

Foreign investor holdings of JGBi have been a notable feature since the 2013 resumption:

| Aspect | Detail |
|---|---|
| Foreign holdings share | Has frequently been the largest single category by holder type; reported in MoF and BoJ holder statistics |
| Why foreign demand | International investors seeking JPY-denominated real-return exposure; relative-value vs other inflation-linked markets (TIPS, OATi, gilts); JGBi-swap basis trades; JPY-USD currency-hedged real-yield strategies |
| Distribution channel | Special Participants and foreign dealer banks active in JGB markets execute on behalf of foreign accounts |
| Settlement | Through [[securities/japan-securities-depository-center|JASDEC]] / BoJ-NET infrastructure |

The high foreign share contrasts with nominal JGBs, where foreign investors hold a smaller share (the bulk of nominal JGBs are held by BoJ, Japanese banks, life insurers, and pension funds). The foreign tilt in JGBi reflects the more specialized nature of inflation-linked exposure and the smaller absolute size of the JGBi market making concentrated positions possible.

## Breakeven Inflation Rate Signal

The JGBi-implied breakeven inflation rate (BEI) is computed as:

$$\text{BEI}_T = y^{\text{nominal}}_T - y^{\text{JGBi}}_T$$

where $y^{\text{nominal}}_T$ is the nominal JGB yield at tenor $T$ and $y^{\text{JGBi}}_T$ is the JGBi (real) yield at the same tenor.

This BEI represents the market-implied cumulative annual inflation rate (with a small adjustment for the inflation risk premium and liquidity premium) that would equate the two bonds' total returns.

| BEI measure | What it captures |
|---|---|
| 10Y JGBi BEI | Market-implied annual inflation expectation over 10 years; the most-watched JGBi signal |
| Forward BEI (e.g., 5Y forward 5Y BEI) | Market-implied inflation expectation for the second half of the JGBi tenor; less direct contamination from current realized inflation |
| Swap-implied breakeven (from [[derivatives/japan-inflation-swap|JPY inflation swap]]) | Derivative-based parallel measure; typically prints lower than JGBi BEI by a liquidity premium |

The JGBi BEI has been the centerpiece of "is the BoJ 2% target priced?" debates:

- During the QQE era pre-2022, 10Y JGBi BEI persistently sat below 2%, sometimes well below 1%, even as BoJ massively eased policy.
- Post-2022 with above-target realized inflation, BEI repriced higher; the gap to 2% narrowed and at times closed.
- Post-2024 (BoJ normalization), BEI has stabilized in the range that reflects market views on long-term inflation around or modestly above 2%.

## BoJ Holdings

BoJ has held a substantial portion of outstanding JGBi as part of its broader JGB-purchase program under QQE / YCC:

| Aspect | Detail |
|---|---|
| BoJ JGBi holdings | Reported in BoJ balance sheet and BoJ holdings statistics; have grown materially since 2013 resumption |
| Share of outstanding | A meaningful share (cited specifically in BoJ disclosures and BIS / BoJ analytical publications) |
| Implications for market functioning | Reduces free-float of JGBi available for trading; affects JGBi liquidity and BEI computation; analogous to BoJ nominal JGB-holdings effect |
| Post-2024 normalization | BoJ gradually reducing JGB purchases overall; JGBi run-off path watched as part of broader balance-sheet normalization |

The high BoJ holdings of JGBi reduce the effective floating supply and can distort the BEI signal (because the cash bond price reflects BoJ-presence supply effects in addition to pure inflation expectations).

## JGBi vs JGB Cash Market Liquidity

| Aspect | Nominal JGBs | JGBi |
|---|---|---|
| Annual issuance | ~JPY 150-200 trillion across tenors | A small fraction; tens of trillions JPY in recent years |
| Outstanding | ~JPY 1,000+ trillion | A few percent of nominal outstanding |
| Daily turnover | Very large; deep order book at active tenors | Much thinner; episodic flow |
| Repo market | Active SC and GC market | Less liquid SC market; GC limited |
| Futures | [[derivatives/jgb-futures-curve|JGB futures]] (10Y, 5Y, 20Y) | No dedicated JGBi futures contract |
| Foreign holder share | Lower share | Higher share |

The asymmetry in liquidity is a structural feature of the inflation-linked vs nominal sovereign bond markets globally (TIPS in the US is similarly less liquid than nominal Treasuries) and creates JGBi-specific risk premia.

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
