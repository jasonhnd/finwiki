---
title: "Japan Treasury Discount Bills (TDB / 国庫短期証券)"
aliases:
  - "money-market/japan-tbill-treasury-discount-bill"
  - "japan-tbill-treasury-discount-bill"
  - "Japan T-Bill"
  - "Japan TDB"
  - "Treasury Discount Bills Japan"
  - "国庫短期証券"
  - "短期国債"
domain: "money-market"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [money-market, TDB, T-Bill, MOF, JGB, BoJ, sovereign-funding]
status: active
sources:
  - "https://www.mof.go.jp/english/policy/jgbs/index.html"
  - "https://www.mof.go.jp/english/policy/jgbs/auction/calendar/index.html"
  - "https://www.mof.go.jp/english/policy/jgbs/auction/auction_results/index.html"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/statistics/boj/other/acmai/index.htm"
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_b/index.htm"
  - "https://www.mof.go.jp/english/policy/jgbs/reference/appendix/breakdown.htm"
---

# Japan Treasury Discount Bills (TDB / 国庫短期証券)

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-cp-commercial-paper-market|Japan CP market]] for peer / contrast context and [[money-market/jgb-repo-market-japan|JGB repo market]] for the broader system / regulatory boundary.

## TL;DR

Treasury Discount Bills (TDB / 国庫短期証券) are short-term zero-coupon government securities issued by Japan's Ministry of Finance (MOF) at maturities of 3 months, 6 months, and 1 year. TDBs are the sovereign building block of the short-yen money market and the natural risk-free benchmark for [[money-market/japan-cp-commercial-paper-market|CP]], [[money-market/japan-ncd-negotiable-cd-market|NCD]], and short-yen repo pricing.

TDBs sit on MOF's regular JGB auction calendar, are held in dematerialized form through the BoJ-net JGB book-entry system, and are accepted as the most pristine yen collateral for BoJ open market operations and bilateral repo. They are also a key foreign investor entry point into yen short-rate exposure.

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Sovereign issuer | MOF issues TDBs at 3M / 6M / 1Y on a regular auction calendar to manage short-term cash and finance General Account needs. | MOF JGB Bureau |
| Auction operator | BoJ operates JGB auctions as MOF's fiscal agent; results are published the same day. | BoJ market operations surface |
| Investor pool | Banks, securities firms, asset managers, MMF / MRFs, foreign central banks, foreign investors, and insurance companies. | [[money-market/japan-mmf-money-market-mutual-fund]] |
| Settlement / register | BoJ-net JGB book-entry system. | BoJ JGB book-entry framework |
| Repo / collateral | TDBs trade in GC and SC repo and are accepted in BoJ collateral. | [[money-market/jgb-repo-market-japan]] |

## Issuance Mechanics

| Element | Reading |
|---|---|
| Maturities | 3 months, 6 months, and 1 year. Cash management bills may also be issued for fiscal-cycle smoothing. |
| Form | Zero-coupon discount; investor receives par at maturity. |
| Issuance method | Conventional yield-competitive auction; results disclosed by MOF / BoJ. |
| Frequency | Regular weekly / monthly cadence depending on tenor; see MOF JGB auction calendar. |
| Register | BoJ-net JGB book-entry system; fully dematerialized. |
| Tax | Zero withholding for non-resident holders under specified foreign investor exemption regimes. |

## Auction Cadence

MOF publishes the JGB auction calendar covering both coupon JGBs and TDBs. The TDB auction cycle is among the most reliable issuance rhythms in the Japanese government bond market: short maturities require near-weekly 3-month issuance, with periodic 6-month and 1-year operations. Cash-management bill issuance can be added when the fiscal cycle requires it.

Auctions are uniform-price or conventional, with bidders submitting yield bids. Primary dealers in the JGB market are the main bidders, but non-dealer bidding routes exist through dealer intermediation. Results are published the same day, providing a clean short-rate marker.

## Investor Composition

TDB holdings are unusually diverse for a yen money-market instrument:

- **Foreign investors**: TDBs have historically attracted a large foreign investor share for short yen exposure, yen funding management, and currency-hedge basis trades. Foreign holding share has fluctuated significantly with FX-hedged yield differentials.
- **BoJ**: BoJ holds TDBs through outright purchase operations during accommodative phases; holdings vary with the policy regime.
- **Domestic banks**: banks hold TDBs in their banking book for high-quality liquid assets, BoJ collateral, and short-yen yield.
- **MMF / MRF / short-yen funds**: TDBs are a canonical holding for these vehicles.
- **Insurance and trust accounts**: TDBs provide short-duration sovereign exposure.

The MOF publishes a breakdown of JGB and TDB holdings by investor type that should be consulted for current figures.

## BoJ and TDB

BoJ uses TDBs across multiple operational surfaces:

| BoJ function | TDB linkage |
|---|---|
| Outright purchases | BoJ has purchased TDBs as part of fund-supplying operations in past frameworks. |
| Repo / collateral | TDBs are accepted as pristine yen collateral for BoJ loans against pooled collateral and other secured operations. |
| BoJ-net | TDB settlement runs through BoJ's JGB book-entry rails. |
| Policy transmission | TDB yields provide a clean short-rate marker that interacts with the [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] policy rate. |

## Reading TDB Yields

| Reading lens | Notes |
|---|---|
| Sovereign short rate | Closest market reading of the risk-free short yen rate. |
| OIS spread | TDB yield versus TONA OIS shows collateral / scarcity premia. |
| CP / NCD spread | TDB benchmarks credit spreads in [[money-market/japan-cp-commercial-paper-market|CP]] and [[money-market/japan-ncd-negotiable-cd-market|NCD]]. |
| FX-hedged yield | Foreign-investor return after USD / EUR hedge; drives marginal foreign demand. |
| BoJ-rate spread | Gap between TDB yield and complementary deposit facility rate indicates collateral scarcity. |

## Post-2024 Context

After the BoJ's March 2024 regime change ending negative rates, TDB yields turned positive and the auction calendar continues to provide a regular short-rate marker. Reading rules:

- separate the policy-rate decision from the actual TDB cleared yield;
- watch foreign-investor share for shifts driven by hedged-yield arithmetic;
- check whether BoJ is buying, holding, or letting maturities roll off;
- treat TDB-OIS basis as a useful collateral-and-funding signal, not a single-cause indicator.

## JapanFG Relevance

- Megabanks [[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]] hold TDBs for HQLA, collateral, and ALM.
- Securities firms [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]], [[JapanFG/nomura-hd]], and [[JapanFG/daiwa-sg]] are primary dealers and run TDB market-making.
- [[JapanFG/tokyo-tanshi]], [[JapanFG/central-tanshi]], and [[JapanFG/ueda-yagi-tanshi]] participate in adjacent short-money-market intermediation.

## Boundary Cases

- **TDB vs short coupon JGB**: TDBs are zero-coupon and issued only at 3M / 6M / 1Y; short coupon JGBs with residual maturity in the same range are different instruments and trade with separate liquidity characteristics.
- **TDB vs CP / NCD**: TDB is sovereign and risk-free; CP / NCD carry issuer credit risk and trade at a spread.
- **TDB vs cash-management bills**: cash-management bills are issued ad hoc for fiscal-cycle smoothing and are not part of the regular auction schedule.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/local-bond-market]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- MOF: JGB Bureau page and JGB auction calendar.
- MOF: auction results page for TDB historical data.
- MOF: breakdown of JGB and TDB holdings by investor type.
- Bank of Japan: BoJ-net JGB book-entry system and Money Market overview.
- Bank of Japan: open market operations menu including TDB-relevant operations.
