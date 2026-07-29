---
title: "ISDA 2020 IBOR Fallback Protocol — Japan implementation (TIBOR / TONA / JPY LIBOR)"
aliases:
  - "ISDA 2020 IBOR Fallback Protocol Japan"
  - "ISDA Fallback Protocol JPY"
  - "ISDA 2020 Protocol TIBOR"
  - "ISDA Protocol JPY LIBOR fallback"
  - "Japan ISDA IBOR transition"
  - "JSDA 2024 documentation update"
  - "TIBOR TONA fallback Japan"
  - "Post-LIBOR JPY discontinuation"
  - "derivatives/isda-2020-protocol-japan-implementation"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, isda, ibor-transition, fallback-protocol, jpy-libor, tibor, tona, jsda, fsa, japan]
status: active
sources:
  - "ISDA 2020 IBOR Fallbacks Protocol — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/"
  - "ISDA benchmark-reform InfoHub — https://www.isda.org/?p=865907"
  - "JBATA Euroyen TIBOR cessation statement — https://www.jbatibor.or.jp/english/news/tibor_18.html"
  - "JBATA TIBOR reform page — https://www.jbatibor.or.jp/english/reform/"
  - "BOJ Cross-Industry Committee — https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm"
  - "FCA LIBOR wind-down decisions — https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making"
---

# ISDA 2020 IBOR Fallback Protocol — Japan implementation (TIBOR / TONA / JPY LIBOR)

## TL;DR

The **ISDA 2020 IBOR Fallbacks Protocol**, published on 23 October 2020 and effective from 25 January 2021, lets adhering parties incorporate the IBOR Fallbacks Supplement into covered legacy non-cleared derivatives. For yen benchmarks, its Relevant IBOR scope includes **JPY LIBOR, Japanese Yen TIBOR, and Euroyen TIBOR**. Coverage is not the same as immediate conversion: a contractual fallback applies only when the relevant trigger occurs. JPY LIBOR fallbacks applied after the end-2021 cessation / loss of representativeness; Euroyen TIBOR's 6 March 2024 cessation announcement constituted an index cessation event, before final publication on 30 December 2024; Japanese Yen TIBOR remains published, so its cessation fallback has not been activated. The selected synthetic JPY LIBOR settings were a separate UK regulatory bridge and ceased permanently on 31 December 2022. This entry distinguishes protocol coverage, trigger events, and actual benchmark status rather than treating all covered IBORs as already converted.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the **ISDA fallback protocol Japan implementation** node. Read against [[derivatives/japan-irs-market|Japan yen interest-rate swap market]] for the underlying IRS context, [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]] for the post-LIBOR RFR architecture, [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]] for the cleared-derivative-side implementation, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the cross-currency fallback overlay. System anchor: [[money-market/INDEX|money-market index]] for the BoJ-administered TONA cash market mechanism. Regulatory anchor: [[banking/INDEX|banking index]] for FSA / BoJ supervisory context.

## 1. The ISDA 2020 Protocol — what it is

| Element | Detail |
|---|---|
| Publisher | International Swaps and Derivatives Association (ISDA) |
| Publication date | 23 October 2020 |
| Effective date | 25 January 2021 |
| Amends | ISDA Master Agreements and certain other ISDA documentation |
| Type | Multilateral adherence (each party adheres once; all bilateral covered relationships amend automatically) |
| Scope of covered transactions | New transactions after 25 January 2021 (incorporated via 2021 IBOR Fallbacks Supplement); existing transactions with adhering counterparties (amended via protocol adherence) |
| Cost | No fee for adherence |
| Adherence mechanism | Online via ISDA portal; one-time submission per legal entity |

Source: ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/]

The Supplement governs new transactions that incorporate the amended definitions; the Protocol is the multilateral route for covered legacy non-cleared documents between adhering parties. Parties can still agree bilateral amendments, and cleared trades are handled under the relevant CCP's rules rather than by a CCP adhering to the Protocol.

## 2. The fallback rate architecture

The yen benchmarks are Relevant IBORs under the Protocol, but their triggers differ. LIBOR fallbacks include permanent cessation and the FCA's non-representativeness determination; Japanese Yen TIBOR and Euroyen TIBOR use permanent-cessation triggers. When the applicable trigger and fallback date are reached, the amended definitions provide:

| Component | Description |
|---|---|
| Replacement rate | The currency-specific RFR (TONA for JPY, SOFR for USD, ESTR for EUR, SONIA for GBP, SARON for CHF) |
| Compounding methodology | Compounded-in-arrears observation across the same tenor period |
| Observation shift | 2-business-day backward observation shift (i.e., observation period starts 2 days before payment period starts) |
| Credit-adjustment spread (CAS) | A fixed spread (per tenor) added to the RFR to compensate for IBOR's credit-bank-funding premium |
| Trigger and effective timing | Contract-specific: LIBOR includes cessation / non-representativeness; TIBOR fallbacks require the applicable permanent-cessation trigger and date |

Sources: ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/] ^[source:https://www.jbatibor.or.jp/english/Public%20Consultation%20on%20fallback%20issues%20for%20JBA%20TIBOR.pdf]

The fixed spread adjustment uses the historical five-year median methodology described by ISDA. It is intended to reduce, not eliminate, value transfer and basis risk.

## 3. JPY LIBOR fallback specifics

| JPY LIBOR publication | Contractual treatment |
|---|---|
| Panel-bank JPY LIBOR settings | All ceased or became permanently non-representative immediately after 31 December 2021; covered derivatives use adjusted TONA plus the tenor-specific fixed spread when the contractual fallback applies |
| Synthetic 1M, 3M, and 6M JPY LIBOR | A restricted UK regulatory bridge for certain legacy use from 1 January through 31 December 2022; it did not postpone the ISDA non-representativeness trigger |

Sources: ^[source:https://www.isda.org/2021/03/05/libor-cessation-and-the-impact-on-fallbacks/] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making]

This table deliberately omits approximate CAS figures. The legally relevant value is the published tenor-specific fallback spread under the applicable ISDA / Bloomberg methodology, not a rounded secondary-source estimate.

## 4. JPY LIBOR cessation timeline — the operational events

| Date | Event |
|---|---|
| 23 October 2020 | ISDA 2020 IBOR Fallbacks Protocol published |
| 25 January 2021 | Protocol effective date; adherence begins |
| 5 March 2021 | FCA announced the LIBOR cessation / non-representativeness dates; ISDA confirmed that LIBOR spread adjustments were fixed |
| Immediately after 31 December 2021 | All JPY LIBOR settings ceased or became permanently non-representative; relevant contractual fallbacks applied |
| 1 January–31 December 2022 | FCA required synthetic publication of 1M, 3M, and 6M JPY LIBOR for permitted legacy use |
| 31 December 2022 | The three synthetic JPY LIBOR settings ceased permanently |

Sources: ^[source:https://www.isda.org/2020/10/23/isda-launches-ibor-fallbacks-supplement-and-protocol/] ^[source:https://www.fca.org.uk/news/press-releases/announcements-end-libor] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making]

## 5. Japanese Yen TIBOR and Euroyen TIBOR status

Unlike LIBOR, **TIBOR (Tokyo Interbank Offered Rate)** continued past LIBOR cessation:

| TIBOR type | Status | Administered by |
|---|---|---|
| **D-TIBOR (Domestic TIBOR)** | Active | JBATA (Japanese Bankers Association TIBOR Administration) |
| **Euroyen TIBOR** | All tenors ceased after the final publication on 30 December 2024; no synthetic Euroyen TIBOR or successor administrator | JBATA (former administrator) |
| **JPY LIBOR** | Panel settings ended after 31 December 2021; synthetic 1M / 3M / 6M ended after 31 December 2022 | ICE Benchmark Administration under FCA oversight |

Sources: ^[source:https://www.jbatibor.or.jp/english/reform/] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making]

Japanese Yen TIBOR **is covered** as a Relevant IBOR by the ISDA 2020 Protocol. The reason covered contracts continue to reference it is that JBATA has not announced its permanent cessation, not that it sits outside the Protocol.

## 6. Japanese market adherence

The BOJ-hosted Cross-Industry Committee publicly supported broad and timely adherence, while ISDA publishes a global legal-entity adherent list. Neither source, without a documented entity-by-entity jurisdiction methodology, substantiates a “500+ Japanese entities” total or blanket statements that every named bank, insurer, or regional-bank cohort adhered. Those claims have therefore been removed. For a specific counterparty relationship, verify both legal entities on ISDA's current adherent list or inspect the bilateral amendment.

Sources: ^[source:https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm] ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/adhering-parties]

## 7. Euroyen TIBOR transition in 2024

The public record supports a JBATA-led benchmark transition, not the previously asserted “JSDA-led 2024 documentation update”:

| Date | Verified event |
|---|---|
| 6 March 2024 | JBATA announced permanent cessation of all Euroyen TIBOR tenors at end-December 2024; ISDA stated that the announcement was an index cessation event and fixed the fallback spreads |
| 30 June 2024 | FSA's recommended deadline for stopping new transactions in products referencing Euroyen TIBOR |
| 30 December 2024 | Final publication of all Euroyen TIBOR tenors; JBATA states that no synthetic Euroyen TIBOR or successor administrator exists |

Sources: ^[source:https://www.jbatibor.or.jp/english/news/tibor_18.html] ^[source:https://www.jbatibor.or.jp/english/reform/]

## 8. Cross-currency derivatives — the overlay

For cross-currency swaps where one leg is JPY (TIBOR or LIBOR) and the other is USD (LIBOR / SOFR) or EUR (LIBOR / ESTR), the protocol applies **per leg**:

| Cross-currency configuration | Protocol scope | Status after the relevant trigger |
|---|---|---|
| JPY LIBOR vs USD LIBOR cross-currency swap | Both benchmarks are Relevant IBORs; adherence and triggers are assessed per leg | JPY and USD legs follow their respective contractual fallback events and published adjusted RFRs |
| Japanese Yen TIBOR vs USD LIBOR cross-currency swap | Both benchmarks are within the Protocol's Relevant IBOR scope, but triggers are assessed per leg | Japanese Yen TIBOR leg continues because no cessation trigger has occurred; the USD LIBOR leg follows its own fallback event |
| Euroyen TIBOR vs USD LIBOR cross-currency swap | Both benchmarks are within scope and triggers are assessed per leg | Euroyen TIBOR's 2024 cessation event activates its applicable fallback; the USD LIBOR leg follows its separate fallback timing |

Sources: ^[source:https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/] ^[source:https://www.jbatibor.or.jp/english/reform/]

See [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the basis-swap mechanics post-conversion.

## 9. Cleared derivative side — JSCC and CCP implementation

Cleared derivatives follow each CCP's rulebook and conversion process rather than Protocol adherence by the CCP. For any cleared JPY LIBOR position, verify:

| Step | Verification item |
|---|---|
| 1. Governing rulebook | The CCP, product, rule version, and legal conversion mechanism |
| 2. Conversion timing | The effective date and whether conversion occurred before or upon the contractual fallback event |
| 3. Value adjustment | Any CCP-defined cash compensation or rebalancing process |
| 4. Risk management | Margin, discounting, and valuation treatment after conversion |

JSCC's current clearing-product page states that a JPY LIBOR swap arising from swaption exercise is converted to OIS when submitted for clearing. Market-size comparisons and claims that the conversion was “operationally smooth” are omitted without a dated CCP disclosure.

Source: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html]

## 10. Counterpoints

- **Multilateral or bilateral amendment** — The Protocol provides a standardized multilateral route, but parties may use bilateral terms; the governing documents and both legal entities must be checked
- **Residual value transfer** — The fixed spread uses a five-year historical median and is intended to reduce, not eliminate, value transfer and basis risk
- **Japanese Yen TIBOR versus TONA** — Japanese Yen TIBOR remains active while TONA is the overnight risk-free rate; product choice and fallback status are separate questions
- **Euroyen TIBOR evidence boundary** — JBATA and ISDA sources establish the cessation event and dates, but do not establish the previously claimed JSDA documentation program
- **Synthetic JPY LIBOR boundary** — Synthetic settings were a restricted UK bridge through the end of 2022 and did not postpone the ISDA non-representativeness trigger
- **Counterparty coverage** — No institution-size or sector generalization is made; adherence must be checked by legal entity or bilateral amendment

## 11. Open questions

- How JBATA's ongoing Japanese Yen TIBOR reforms affect benchmark robustness and contract use
- Whether a forward-looking term-RFR for JPY gains documented use in term-fix products
- How a future benchmark trigger or CCP rule change would interact with existing contractual fallbacks
- How Japan-specific documentation and CCP rules align with ISDA global definitions
- What dated transaction or exposure data can measure the completed Euroyen TIBOR transition

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market|Japan yen IRS market]]
- [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]
- [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]
- [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]
- [[derivatives/yen-basis-swap-market|yen basis swap market]]
- [[derivatives/japan-interest-rate-derivatives-overview|Japan interest-rate derivatives overview]]
- [[derivatives/japan-rates-derivative-product-matrix|Japan rates derivative product matrix]]
- [[derivatives/japan-cms-constant-maturity-swap|Japan CMS constant maturity swap]]
- [[derivatives/japan-swaption-market|Japan swaption market]]
- [[derivatives/swap-execution-facility-japan|swap execution facility Japan]]
- [[money-market/INDEX|money-market index]]
- [[banking/INDEX|banking index]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[securities-firms/nomura-hd|Nomura]] · [[financial-regulators/jsda|JSDA]]
- [[securities-firms/mufg-securities|MUFG MS]] · [[securities-firms/smbc-nikko|SMBC Nikko]] · [[securities-firms/mizuho-securities|Mizuho Securities]]
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Dept]]

## Sources

- ISDA 2020 IBOR Fallbacks Protocol — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/
- ISDA — https://www.isda.org/
- ISDA benchmark reform InfoHub — https://www.isda.org/?p=865907
- BOJ Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks — https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm
- JBATA TIBOR Administration — https://www.jbatibor.or.jp/english/
- UK FCA LIBOR wind-down decisions — https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making
- JSCC IRS clearing products — https://www.jpx.co.jp/jscc/en/cash/irs/product.html

---

> [!info] 校核状態
> confidence: **likely**. Protocol scope, trigger architecture, JPY LIBOR wind-down dates, and Euroyen TIBOR cessation are tied to ISDA, FCA, BOJ, JBATA, and JSCC primary sources. Rounded CAS values, a Japan-only adherence count, and the unsupported “JSDA-led 2024 documentation update” have been removed.
