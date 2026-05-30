---
source: money-market/japan-ncd-negotiable-cd-market
source_hash: 8b911165afd2509c
lang: en
status: machine
fidelity: ok
title: "Japan NCD (negotiable certificate of deposit) market"
translated_at: 2026-05-30T14:13:23.429Z
---

# Japan NCD (negotiable certificate of deposit) market

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-cp-commercial-paper-market|Japan CP market]] for peer / contrast context and [[money-market/boj-open-market-operations|BoJ open market operations]] for the broader system / regulatory boundary.

## TL;DR

A negotiable certificate of deposit (NCD, 譲渡性預金 / CD) is a transferable time deposit issued by a Japanese deposit-taking institution. Unlike ordinary fixed-term deposits, NCDs can be sold to third parties before maturity, making them a tradable short-term funding instrument for issuing banks and a liquid short-yen placement for institutional investors. For FinWiki, NCD is the bank-issuer short-term funding lane that sits beside [[money-market/japan-cp-commercial-paper-market|CP]] (corporate / non-bank issuance) and [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]] (sovereign discount issuance).

NCD outstanding is one of the largest single short-term yen instrument balances published by the BoJ, and is the canonical bank short-term wholesale funding rail.

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Issuer | Deposit-taking banks issue NCDs in their own names; megabanks, trust banks, and regional banks all issue. | [[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]] |
| Dealer / placement | Securities firms and bank treasury desks place and market-make NCDs. | [[securities/japan-underwriting-market-structure]] |
| Investor | Banks, asset managers, MRFs, corporate treasuries, insurance companies, and foreign investors hold NCDs. | [[money-market/japan-mmf-money-market-mutual-fund]] |
| Secondary market | OTC dealer market; tanshi and bank treasury desks intermediate trading. | [[money-market/tanshi-company-business-model]] |
| Statistics | BoJ short-term financial market and deposit statistics; bank disclosure. | BoJ statistics surface |

## Instrument Mechanics

| Element | Reading |
|---|---|
| Legal form | Bank deposit, recorded on issuer-bank balance sheet as deposit liability, but transferable. |
| Issuer | Bank or other deposit-taking institution authorized to issue NCDs. |
| Maturity | Generally short-term, often 1 month to 1 year, with bespoke tenors possible. |
| Interest method | Fixed-rate or floating-rate; floating NCDs often reference short-term yen benchmarks. |
| Minimum denomination | Wholesale-size; not a retail deposit instrument. |
| Tax / regulatory | Treated as bank deposit for prudential purposes, but tradable in the secondary market. |

## Secondary Market Liquidity

NCDs trade in an OTC dealer market where bank treasury desks, securities firms, and tanshi companies intermediate. Secondary liquidity is real but uneven:

- Megabank and major trust bank issuance has the deepest bid; well-known issuer names trade closer to bid-offer parity.
- Regional bank and smaller issuer NCDs have thinner secondary depth and often trade closer to hold-to-maturity placements.
- Quarter-end and fiscal-year-end balance-sheet effects can widen spreads as bank dealers manage capacity.

For investors, NCD liquidity sits between the deepest end (TDBs, JGB repo) and less-liquid corporate CP at the same tenor.

## MMF / MRF Eligibility

NCDs are a standard holding for short-yen funds:

- **MRF (Money Reserve Fund)**: the dominant brokerage sweep vehicle for retail securities-account cash. MRFs hold short JGB, TDB, NCD, CP, and repo. See [[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF page]] for the post-2016 structural change in this product class.
- **Institutional MMF substitutes**: short-term JGB funds (中期国債ファンド-style products) and other short-bond funds also hold NCDs as a building block.
- **Eligibility constraints**: fund prospectuses specify issuer-rating and residual-maturity rules; investment trust association self-regulation provides additional shape.

NCD demand from MRF / short-yen funds is a structural floor under bank short-term issuance. Changes in this demand pool affect issuer pricing.

## Current Outstanding Scale

The BoJ short-term financial market statistics publish outstanding balances for major short-term yen instruments. NCD outstanding has historically been the largest single short-term yen instrument balance disclosed, often well above CP and TDB outstanding combined. The exact figure varies month to month with bank funding strategy and policy environment, so always cite the specific BoJ statistics release used.

Read NCD outstanding as a coincident indicator of bank wholesale funding need and of bank balance-sheet appetite for short-term liabilities under the current policy regime.

## Post-2024 Floor-System Context

After the March 2024 BoJ regime change away from negative rates, NCD pricing has had to reflect:

- a positive short-term policy rate;
- the [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility (補完当座預金制度)]] interest applied to bank reserve balances;
- the relative attractiveness of holding excess cash at the BoJ versus issuing or holding NCDs.

For banks, NCD issuance economics are now driven by whether the marginal cost of NCD funding is competitive with deposit funding, repo funding, and direct call-market funding under the post-NIRP framework.

## JapanFG Relevance

- Issuer side: [[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]], trust banks under those groups, and regional banks captured in [[banking/INDEX|banking domain]] all issue NCDs.
- Dealer side: [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]], [[JapanFG/smbc-nikko]], [[JapanFG/nomura-hd]], and [[JapanFG/daiwa-sg]] participate in placement and secondary dealing.
- Tanshi intermediation: [[JapanFG/tokyo-tanshi]], [[JapanFG/central-tanshi]], and [[JapanFG/ueda-yagi-tanshi]] provide brokerage that overlaps with NCD secondary-market activity.

## Boundary Cases

- **NCD vs ordinary time deposit**: ordinary time deposits are not transferable; NCDs are. The NCD register supports secondary transfer.
- **NCD vs CP**: NCD is bank deposit issuance; CP is corporate / non-bank issuance. Investor selection depends on credit, tax, and balance-sheet rules.
- **NCD vs short bond**: NCDs are deposit liabilities; short bonds are debt securities with different prudential and accounting treatment.
- **NCD vs interbank deposit**: bilateral interbank deposits are not the same as transferable NCDs.

## Reading Checklist

1. Identify the issuer-bank type (megabank, trust bank, regional bank, foreign-bank branch) before reading spread.
2. Verify tenor and whether the NCD is fixed-rate or floating.
3. Check whether the position is investor-held or being used as collateral.
4. Compare NCD outstanding against CP and TDB outstanding to read where short-yen liquidity sits.
5. Read pricing against the [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] reserve rate environment.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market overview and short-term financial market statistics.
- Bank of Japan: deposit and CD statistics on the statistics download surface.
- JSDA: short-term financial market statistics references.
- FSA: FIEA FAQ on instrument classification relevant to NCDs and short-term deposits.
