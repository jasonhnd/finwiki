---
title: "TORF (Tokyo Term Risk Free Rate)"
aliases:
  - "money-market/japan-torf-term-risk-free-rate"
  - "japan-torf-term-risk-free-rate"
  - "TORF"
  - "Tokyo Term Risk Free Rate"
  - "Term TONA"
  - "東京ターム物リスク・フリー・レート"
  - "ターム物RFR"
domain: "money-market"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [money-market, TORF, benchmark, RFR, TONA, reference-rate, term-rate]
status: active
sources:
  - "https://corporate.quick.co.jp/en/torf/"
  - "https://www.torf.co.jp/en/designated/"
  - "https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm"
  - "https://www.fsa.go.jp/en/policy/libor/index.html"
  - "https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm"
---

# TORF (Tokyo Term Risk Free Rate)

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-tibor-benchmark-rate|TIBOR]] for the quote-based credit-sensitive contrast, [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform (TONA)]] for how the JPY risk-free-rate complex was built, and [[derivatives/ois-tona-curve|the OIS TONA curve]] for the derivative inputs TORF is computed from. The supervisory anchor is [[JapanFG/fsa|the FSA]].

## TL;DR

TORF (Tokyo Term Risk Free Rate) is a **forward-looking term risk-free rate** for the Japanese yen, calculated and published each business day by **QUICK Benchmarks Inc. (QBS)**. It is derived from the data of yen interest-rate derivatives (OIS) whose underlying is the uncollateralized overnight call rate, i.e. [[derivatives/ois-tona-curve|TONA]]. In effect, TORF turns the *overnight, backward-looking* TONA into a *term, forward-looking* fix that borrowers can see at the start of an interest period.

TORF is one of the JPY successor rates to **JPY LIBOR**, whose publication ceased at end-2021. It sits in Japan's post-LIBOR multi-rate world as a third reference type:

- **[[money-market/japan-tibor-benchmark-rate|TIBOR]]** — term, quote-based, credit-sensitive.
- **[[derivatives/ois-tona-curve|TONA]]** — overnight, transaction-based, near risk-free.
- **TORF** — term, risk-free, *derived* from TONA-referencing OIS data.

For FinWiki, TORF is the "term version of the risk-free rate": it gives the forward-looking convenience of a term fix without the bank-credit component embedded in TIBOR.

## What TORF Measures

| Element | Reading |
|---|---|
| Type | Forward-looking term risk-free reference rate. |
| Administrator | QUICK Benchmarks Inc. (QBS), established by QUICK Corp. |
| Underlying | Yen OIS (overnight index swap) transaction data referencing the uncollateralized overnight call rate (TONA). |
| Credit content | Near risk-free — it carries almost none of the bank-credit / term premium that TIBOR embeds. |
| Direction | Forward-looking: the term rate is known at the *start* of the interest period. |
| Regulatory status | TORF is designated a "Specified Financial Benchmark" and QBS a "Specified Financial Benchmark Administrator" under the Financial Instruments and Exchange Act, supervised by the [[JapanFG/fsa|FSA]]. |
| Currency | Japanese yen. |

Because TORF is built from OIS data rather than from reference-bank judgement (TIBOR) or from a pool of overnight cash trades (TONA), it occupies a distinct methodological niche: a *term* rate that still inherits the *risk-free* character of the overnight rate beneath it.

## TORF vs TONA vs TIBOR

| Property | TORF | TONA | TIBOR |
|---|---|---|---|
| Nature | Term, forward-looking. | Overnight, backward-looking. | Term, forward-looking. |
| Basis | Derived from TONA-referencing OIS data. | Volume-weighted average of actual uncollateralized overnight call trades. | Reference-bank quotes for unsecured term funding. |
| Credit content | Near risk-free. | Near risk-free. | Embeds bank credit / term premium. |
| Administrator | QUICK Benchmarks Inc. | [[JapanFG/boj-monetary-policy|Bank of Japan]]. | JBA TIBOR Administration (JBATA). |
| Typical use | Loans / products wanting a *forward-looking risk-free* term fix. | OIS, discounting, compounded-in-arrears products. | Term loans / bonds wanting a credit-sensitive term fix. |

The three are complementary, not interchangeable. The spread between term TORF and term [[money-market/japan-tibor-benchmark-rate|TIBOR]] over the same tenor is, in effect, a market read on the bank-credit / term-premium component — because the two differ mainly in whether bank credit is embedded.

## Why a Term RFR Was Needed

Compounded-in-arrears TONA is operationally awkward for some borrowers: the exact interest amount is only known near the *end* of the period, after the daily overnight rates are observed and compounded. The global benchmark transition therefore produced **term risk-free rates** in several currencies so that cash-market users who need certainty at the start of a period — for invoicing, budgeting, or systems that expect a known term rate — can still avoid a credit-sensitive IBOR.

TORF is the JPY answer to that need. It is one of several approaches the BoJ-convened **Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks** identified for moving JPY cash products off LIBOR, alongside TONA compounding (in arrears) and the retained TIBOR.

## Where TORF Fits in Cash Products

- **Loans**: bilateral and some syndicated JPY loans that want a forward-looking, risk-free term reference can reference TORF instead of TIBOR (credit-sensitive) or compounded TONA (in arrears).
- **Bonds / FRNs**: instruments needing a known term coupon at period start.
- **Operational convenience**: TORF suits borrowers and systems that require the rate up front; in-arrears TONA suits those comfortable computing interest after the fact.

For discounting and most cleared derivatives, the JPY market still discounts on [[derivatives/ois-tona-curve|TONA-OIS]]; TORF is primarily a *cash-product term-fixing* benchmark rather than a discounting curve.

## Governance Context

TORF's designation under the FIEA benchmark-regulation framework places it within the same IOSCO-aligned governance regime that reshaped [[money-market/japan-tibor-benchmark-rate|TIBOR]]:

- A designated administrator (QBS) with a published methodology, operational rules, and code of conduct.
- FSA supervision as a Specified Financial Benchmark.
- Coordination with the broader [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] run through the BoJ-convened committee.

This governance is what lets TORF function as a usable reference rate rather than an unsupervised data product.

## Reading Checklist

1. Treat TORF as *term and risk-free* — it is neither the overnight TONA nor the credit-sensitive TIBOR.
2. Remember TORF is *derived from* TONA-referencing OIS data, so it inherits TONA's risk-free character but expresses it as a forward-looking term rate.
3. Confirm the tenor when a contract references TORF.
4. Do not assume TORF is a discounting curve; collateralized JPY trades still discount on [[derivatives/ois-tona-curve|TONA-OIS]].
5. Read the TORF-vs-TIBOR spread as a credit / term-premium signal, like the [[money-market/japan-tibor-benchmark-rate|TIBOR]]-vs-TONA basis.

## JapanFG Relevance

- [[JapanFG/fsa|FSA]] supervises TORF as a Specified Financial Benchmark and its administrator as a Specified Financial Benchmark Administrator.
- [[JapanFG/boj-monetary-policy|BoJ]] administers TONA, the overnight rate underneath TORF, and convened the cross-industry benchmark-reform committee.
- [[JapanFG/zenginkyo|Japanese Bankers Association (Zenginkyō)]] hosts JBATA, administrator of the contrasting TIBOR benchmark.
- Megabanks [[JapanFG/mufg]], [[JapanFG/smfg]], and [[JapanFG/mizuho-fg]] are the major JPY lenders choosing between TORF, TIBOR, and compounded TONA for loan documentation.

## Boundary Cases

- **TORF vs TONA**: term forward-looking vs overnight backward-looking; TORF is derived from TONA-referencing OIS data.
- **TORF vs TIBOR**: both term and forward-looking, but TORF is risk-free while TIBOR embeds bank credit.
- **TORF vs LIBOR**: TORF is a JPY LIBOR successor term rate, but risk-free and OIS-derived rather than a quote-based IBOR.
- **TORF vs a discounting curve**: TORF is a cash-product term-fixing benchmark, not the [[derivatives/ois-tona-curve|TONA-OIS discounting curve]].

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/call-market-structure]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[JapanFG/fsa]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/zenginkyo]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[INDEX|FinWiki index]]

## Sources

- QUICK Money World / QUICK Corp.: TORF (Tokyo Term Risk Free Rate) overview, including derivation from TONA-referencing OIS data and successor-to-LIBOR positioning.
- QUICK Benchmarks Inc. (torf.co.jp): designation of TORF as a Specified Financial Benchmark and QBS as a Specified Financial Benchmark Administrator.
- Bank of Japan: Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks surface.
- Financial Services Agency: LIBOR-transition / benchmark-reform information surface.
- Bank of Japan: Call Money Market Data (TONA / uncollateralized overnight call rate underlying TORF).
