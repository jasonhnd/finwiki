---
source: derivatives/japan-cds-market-overview
source_hash: ce255a0443d11bfe
lang: en
status: machine
fidelity: ok
title: "Japan CDS market overview"
translated_at: 2026-07-29T09:57:43.000Z
---

# Japan CDS market overview

## TL;DR

JSCC started index CDS clearing on 19 July 2011 and single-name CDS clearing on 15 December 2014. Its service page states that coverage comprised index CDS and 60 single-name issues as of 16 September 2025, while the live product page lists the eligible iTraxx Japan series and reference entities. These pages establish JSCC eligibility and cleared-service scope, not whole-market liquidity, dealer rankings or cross-CCP shares.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] and describes the public evidence available for Japan CDS products and clearing. Read [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for single-name pricing, [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] for relative-value mechanics and [[derivatives/japan-irs-market|Japan IRS market]] for the rates context.

For adjacent funding and balance-sheet context, see [[derivatives/yen-basis-swap-market|yen basis swap market]], [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]], [[finance/INDEX|finance index]], [[banking/INDEX|banking index]] and [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]. These links provide context; they do not establish CDS participation or volume.

### Product and clearing scope

The product table combines JSCC's dated service statement with its live eligibility page. The live page, not this snapshot, controls current eligibility. ^[Sources: https://www.jpx.co.jp/jscc/en/otc/member_cds.html; https://www.jpx.co.jp/jscc/en/cash/cds/product.html.]

| Scope | Public evidence | Boundary |
|---|---|---|
| iTraxx Japan index CDS | The live page lists eligible series 36-45. | Series eligibility can change; it does not establish trading volume. |
| Single-name CDS | The service statement records 60 issues as of 16 September 2025; the live page names eligible reference entities. | Eligibility does not establish dealer count, bid-ask width or whole-market liquidity. |
| Other CDS structures | Index-tranche, sovereign, quanto and loan-CDS terms require their own confirmation and venue evidence. | Index or single-name eligibility does not prove that another structure is clearable. |
| General eligibility | The transaction must use the applicable ISDA Credit Derivatives Definitions; both clearing participants must apply; notional and settlement must be JPY; notional is capped at JPY 100 billion with no decimals; remaining term must be at least 1 day. | Additional product and rule conditions still apply. |

### Service chronology

The following table separates index and single-name launches and keeps dated coverage statements distinct from the live list. ^[Sources: https://www.jpx.co.jp/jscc/en/information/news/20110715.html; https://www.jpx.co.jp/jscc/en/information/news/20141215.html; https://www.jpx.co.jp/jscc/en/otc/member_cds.html.]

| Date | Verifiable event |
|---|---|
| 19 July 2011 | JSCC began clearing index CDS. |
| 15 December 2014 | JSCC launched single-name CDS clearing with 12 initially eligible corporate reference entities. |
| 16 September 2025 | JSCC's service page stated coverage of index CDS and 60 single-name issues. |
| Live page | JSCC publishes the currently eligible series, reference entities and transaction conditions. |

### What the public clearing pages prove

The following table applies a different measurement boundary to each public surface. ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/product.html; https://www.jpx.co.jp/jscc/en/participant/cds/cds2.html; https://www.jpx.co.jp/jscc/en/cds_archive/index.html; https://www.bis.org/statistics/derstats.htm.]

| Evidence surface | Supported use | Unsupported inference |
|---|---|---|
| JSCC live product list | Eligible series, reference entities and clearing conditions | Bilateral or other-CCP eligibility and activity |
| JSCC participant list dated 21 February 2022 | Participation and entrustor relationships on that page's date | A current dealer ranking or market share |
| JSCC monthly statistics | JSCC-cleared activity for the stated month and counting method | Complete Japan CDS activity |
| BIS OTC derivatives statistics | Aggregate global OTC derivatives measures at the published classification | A fixed Japan share without a matching BIS series and date |

### CDS and clearing mechanics

JSCC's explanatory page describes the protection leg and the effect of clearing. The transaction's legal terms remain those of its incorporated definitions and confirmation. ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/clearing.html; https://www.jpx.co.jp/jscc/en/cash/cds/product.html.]

| Element | Evidence-bounded description |
|---|---|
| Protection buyer | Pays a fixed amount periodically, usually quarterly, during the contract term. |
| Credit event | If the contract's credit event occurs, the protection seller makes the contractually specified payment or settlement. |
| Reference entity | Is the entity whose credit risk is referenced; it need not be a party to the CDS or exchange cash under it. |
| JSCC clearing | JSCC assumes obligations between clearing participants, becomes the counterparty to each side and nets settlement at the JSCC scope. |

### Contract fields and quote interpretation

The following table separates clearing-eligibility conditions on the product page from trade-specific economics fixed by the confirmation. ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/product.html; https://www.jpx.co.jp/jscc/en/cash/cds/clearing.html.]

| Field | Verification rule |
|---|---|
| Notional and currency | For JSCC eligibility, notional and settlement are JPY; notional is no more than JPY 100 billion and has no decimals. |
| Remaining term | JSCC requires at least 1 day when it assumes the obligation; the exact scheduled termination date is trade-specific. |
| Fixed-rate payments | JSCC describes periodic payments as usually quarterly; the applicable rate and dates come from the contract. |
| Credit-event settlement | Read the incorporated definitions, confirmation and any auction result; a valuation recovery input is not automatically a final settlement price. |
| Spread or curve | A quote is date-, tenor-, entity- and contract-specific; no persistent “most watched,” liquidity-tier or directional ranking is inferred here. |

### iTraxx Japan rule boundary

The S&P iTraxx Japan rules describe index construction, not JSCC clearing volume or whole-market positions. ^[Source: https://www.spglobal.com/spdji/en/documents/methodologies/iTraxx_Japan_Index_Rules.pdf.]

- Rules are reviewed semi-annually before the index roll.
- Roll dates are 20 March and 20 September. The corresponding 5-year index maturities are 20 June and 20 December in the fifth year after the roll.
- Constituents have equal or approximately equal weights under the rulebook.
- Current constituents and version status must be read from the applicable series file; JSCC eligibility must be checked separately on the live JSCC page.

### Market measurement boundary

JSCC statistics and BIS aggregates answer different questions. A defensible market-size statement must identify the dataset, reporting period, product perimeter, currency, gross-versus-net basis and whether bilateral and other-CCP transactions are included. This entry therefore does not repeat the former fixed Japan-share, venue-share, dealer-ranking or liquidity claims.

## Related

- [[derivatives/INDEX]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[INDEX|FinWiki index]]

## Sources

- [JSCC: CDS clearing service scope](https://www.jpx.co.jp/jscc/en/otc/member_cds.html)
- [JSCC: live clearing-product list and conditions](https://www.jpx.co.jp/jscc/en/cash/cds/product.html)
- [JSCC: CDS and clearing explanation](https://www.jpx.co.jp/jscc/en/cash/cds/clearing.html)
- [JSCC: clearing participants and entrustors](https://www.jpx.co.jp/jscc/en/participant/cds/cds2.html)
- [JSCC: monthly CDS statistics archive](https://www.jpx.co.jp/jscc/en/cds_archive/index.html)
- [S&P Dow Jones Indices: iTraxx Japan Index Rules](https://www.spglobal.com/spdji/en/documents/methodologies/iTraxx_Japan_Index_Rules.pdf)
- [BIS: OTC derivatives statistics](https://www.bis.org/statistics/derstats.htm)
