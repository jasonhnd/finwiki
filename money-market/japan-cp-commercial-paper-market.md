---
title: "Japan CP (commercial paper) market"
aliases:
  - "money-market/japan-cp-commercial-paper-market"
  - "japan-cp-commercial-paper-market"
  - "Japan commercial paper"
  - "Japan CP market"
  - "コマーシャル・ペーパー市場"
  - "国内CP市場"
domain: "money-market"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [money-market, commercial-paper, CP, BoJ, short-term-funding, JSDA]
status: active
sources:
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_b/index.htm"
  - "https://www.boj.or.jp/en/statistics/market/short/index.htm"
  - "https://www.jsda.or.jp/shijyo/toukei/cp/index.html"
  - "https://www.jsda.or.jp/en/statistics/"
  - "https://www.jasdec.com/en/system/cp/outline/"
  - "https://www.fsa.go.jp/en/laws_regulations/faq_on_fiea/section06.html"
---

# Japan CP (commercial paper) market

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]] for peer / contrast context and [[money-market/boj-open-market-operations|BoJ open market operations]] for the broader system / regulatory boundary.

## TL;DR

Commercial paper (CP) is a short-term unsecured promissory note issued by eligible corporations, banks, and non-bank financial institutions in Japan. CP is dematerialized and settled through [[securities/japan-securities-depository-center|JASDEC]] under the Book-Entry Transfer Act framework for short-term corporate bonds (短期社債振替制度). For FinWiki, CP is the corporate-issuer short-term funding lane that sits beside [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]] (bank issuance) and [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]] (sovereign issuance).

The CP market matters because it is the most observable cost-of-funds signal for blue-chip corporates outside the bond market, and because BoJ has used CP outright purchases and CP-repo operations as part of [[money-market/boj-open-market-operations|open market operation]] tool kits during stress and policy expansion periods.

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Issuer | Corporates, banks, non-bank financial institutions, and special-purpose vehicles raise short-term funds. | [[finance/japan-corporate-treasury-and-cash-management|corporate treasury]] |
| Arranger / dealer | Securities firms and banks arrange, distribute, and market-make CP issuance. | [[securities/japan-underwriting-market-structure]] |
| Investor | Banks, asset managers, MMFs / MRFs, insurance companies, and foreign investors hold CP for short-term yield. | [[money-market/japan-mmf-money-market-mutual-fund]] |
| Settlement / register | JASDEC short-term corporate bond book-entry transfer system holds CP positions in dematerialized form. | [[securities/japan-securities-depository-center]] |
| Operation counterparty | BoJ accepts eligible CP as collateral and has periodically conducted outright CP purchase operations. | [[money-market/boj-open-market-operations]] |
| Statistics | BoJ short-term financial market statistics; JSDA CP issuance / outstanding tables. | BoJ / JSDA public surfaces |

## Instrument Mechanics

| Element | Reading |
|---|---|
| Legal form | Short-term corporate bond (短期社債) under the Book-Entry Transfer Act, replacing the older promissory-note format. |
| Maturity range | Typically 1 day to under 1 year; most issuance clusters at 1 month, 3 months, and around quarter-end maturities. |
| Form | Fully dematerialized through JASDEC's short-term corporate bond book-entry system. |
| Issuance method | Discount basis; difference between issue price and redemption value is the investor yield. |
| Rating | Domestic CP ratings (R&I, JCR, S&P Japan, Moody's Japan) usually a-1 / J-1 tier; ratings affect dealer placement and BoJ collateral eligibility. |
| Tax | Withholding-tax treatment differs by investor class; institutional MRF / MMF holdings are the dominant retail channel. |

## Tenor and Issuer Composition

CP issuance is concentrated at short tenors and dominated by high-grade names:

- **Bank-affiliated and bank-group CP**: large issuance by megabank groups for short-term funding and group ALM, including financial-subsidiary CP and bank-holding-company programs.
- **Non-bank CP**: consumer credit, leasing, and trade-finance issuers fund receivables and working capital through rolling CP programs. See [[finance/japan-consumer-credit-and-leasing-finance-landscape|consumer credit / leasing landscape]] for the issuer cluster.
- **Corporate CP**: blue-chip manufacturers, utilities, and trading houses issue CP for working capital, dividend, and tax payment timing. The trading-house cluster overlaps with [[finance/japan-trading-house-finance-arm-landscape|sogo shosha finance arms]].
- **Asset-backed CP (ABCP)**: conduits backed by trade receivables, lease receivables, or auto loans. ABCP issuance is smaller than vanilla CP but is the canonical structured-finance short-funding rail.

Tenor distribution skews toward 1-month and 3-month windows because investor demand from MRF, bank treasury, and corporate cash management is concentrated there. Issuance around quarter-end and fiscal-year-end can show spread widening when balance-sheet capacity tightens.

## BoJ Eligibility and Operations

| BoJ tool | CP linkage |
|---|---|
| Collateral framework | Eligible CP is accepted as collateral for BoJ loans against pooled collateral and similar operations. Eligibility rules cover rating, residual maturity, issuer type, and dematerialization status. |
| CP repo operations | BoJ has conducted CP purchase operations with repurchase agreements as a fund-supplying tool. |
| Outright CP purchases | During financial-stress and quantitative-expansion periods, BoJ has conducted outright CP purchase operations as part of the asset-purchase tool kit. |
| Post-2024 framework | After the March 2024 regime change away from negative rates, BoJ has gradually wound down extraordinary corporate-asset purchase programs while keeping standard collateral and repo facilities. Always check the current BoJ market operations page for the live menu. |

The CP-purchase tool has historically been an important crisis-response surface (2008-2009 GFC, 2020 COVID-19 funding stress) but it is not a permanent monetary-policy instrument.

## Market Size and Reading Rules

| Source | What it shows |
|---|---|
| BoJ short-term financial market statistics | Outstanding balances by instrument, including CP, TDB, NCD, and call balances. |
| JSDA CP issuance / outstanding tables | Issuance volume, outstanding balance, issuer breakdown by industry and by rating. |
| JASDEC short-term corporate bond statistics | Book-entry register balances showing dematerialized CP holdings. |
| Rating agency program reports | Individual issuer program size, rating, and recent issuance pace. |

Read CP outstanding as a flow indicator of corporate short-term funding demand. Compare CP balance with [[money-market/japan-ncd-negotiable-cd-market|NCD]] and [[money-market/japan-tbill-treasury-discount-bill|TDB]] balances to triangulate where short-term yen liquidity is parking.

## JapanFG Relevance

- Megabank groups [[JapanFG/mufg]], [[JapanFG/smfg]], and [[JapanFG/mizuho-fg]] are major CP investors through their banking books and trust subsidiaries.
- Securities firms [[JapanFG/nomura-hd]], [[JapanFG/daiwa-sg]], [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]], and [[JapanFG/smbc-nikko]] arrange CP programs and operate primary distribution.
- [[JapanFG/tokyo-tanshi]], [[JapanFG/central-tanshi]], and [[JapanFG/ueda-yagi-tanshi]] intermediate short-term funds and provide CP-market brokerage support adjacent to call and repo activity.
- [[JapanFG/japan-securities-finance]] participates in collateral and short-term funding plumbing that interacts with CP.

## Boundary Cases

- **CP vs NCD**: CP is corporate / non-bank issuance; NCD is bank deposit issuance. Investors choose based on credit, tax, and balance-sheet treatment.
- **CP vs TDB**: TDB is sovereign discount issuance; CP carries issuer credit risk and trades at a spread over TDB / OIS.
- **CP vs short bonds**: short corporate bonds with under-1-year residual maturity overlap economically but follow a different legal and registration route.
- **CP vs ABCP**: vanilla corporate CP is unsecured; ABCP is structured-finance issuance backed by receivable pools and is read with a structured-credit lens.

## Reading Checklist

1. Confirm issuer type (corporate / bank-affiliated / non-bank / ABCP) before reading spread or pricing.
2. Verify rating and BoJ collateral eligibility status if the question concerns operational liquidity.
3. Check tenor distribution; do not assume average tenor equals headline maturity buckets.
4. Distinguish primary issuance pace from outstanding balance changes.
5. Read CP market stress against [[money-market/jgb-repo-market-japan|JGB repo]] conditions and BoJ operation menu changes.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market overview and short-term financial market statistics.
- Bank of Japan: open market operations page documenting CP eligibility and CP-related operation tools.
- JSDA: commercial paper issuance and outstanding statistics surface.
- JASDEC: short-term corporate bond book-entry system overview.
- FSA: FIEA FAQ on financial-instruments classification relevant to short-term corporate bonds.
