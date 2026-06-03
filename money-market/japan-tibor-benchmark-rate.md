---
title: "TIBOR (Tokyo Interbank Offered Rate)"
aliases:
  - "money-market/japan-tibor-benchmark-rate"
  - "japan-tibor-benchmark-rate"
  - "TIBOR"
  - "Tokyo Interbank Offered Rate"
  - "Japanese Yen TIBOR"
  - "Euroyen TIBOR"
  - "JBA TIBOR"
  - "東京銀行間取引金利"
  - "全銀協TIBOR"
domain: "money-market"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [money-market, TIBOR, benchmark, JBATA, reference-rate, interbank]
status: active
sources:
  - "https://www.jbatibor.or.jp/english/about/"
  - "https://www.jbatibor.or.jp/english/reform/"
  - "https://www.jbatibor.or.jp/english/news/tibor_18.html"
  - "https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm"
  - "https://www.fsa.go.jp/en/news/2024/20240306/20240306.html"
---

# TIBOR (Tokyo Interbank Offered Rate)

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform]] for peer / contrast context with the TONA risk-free rate, [[money-market/call-market-structure|Call market structure]] for the actual transacted overnight market, and [[JapanFG/zenginkyo|the Japanese Bankers Association]] for the administering institution.

## TL;DR

TIBOR (Tokyo Interbank Offered Rate) is a Japanese term interbank reference rate published each business day by **JBA TIBOR Administration (JBATA)**, a body affiliated with [[JapanFG/zenginkyo|the Japanese Bankers Association (Zenginkyō)]]. It is a **quote-based** benchmark: a panel of reference banks submit the rates at which they judge prime banks could obtain unsecured term funds, and JBATA computes the published rate from those submissions.

Two TIBOR families have existed:

- **Japanese Yen TIBOR (D-TIBOR)**: reflects the domestic unsecured call-market funding rate environment. This rate continues to be published.
- **Euroyen TIBOR (Z-TIBOR)**: reflected the offshore Japan Offshore Market funding environment. JBATA **permanently ceased Euroyen TIBOR publication, with the final fixing on 30 December 2024**, leaving Japanese Yen TIBOR as the surviving TIBOR.

For FinWiki, TIBOR is the surviving **term, credit-sensitive** benchmark that coexists with the **overnight, risk-free** [[derivatives/ois-tona-curve|TONA]] in Japan's post-LIBOR multi-rate world. It still anchors many JPY loans and some bonds that need a forward-looking term fix.

## What TIBOR Measures

| Element | Reading |
|---|---|
| Type | Quote-based term reference rate, not a transaction-volume-weighted rate. |
| Administrator | JBA TIBOR Administration (JBATA), a general incorporated association affiliated with the Japanese Bankers Association. |
| Input | Reference-bank submissions of the rate at which prime banks could obtain unsecured term funds. |
| Tenors | 1 week, 1 month, 3 months, 6 months, and 12 months. |
| Calculation | Published rate computed from reference-bank quotes after trimming (excluding the highest and lowest submissions before averaging). |
| Publication | Each Tokyo business day. |
| Currency | Japanese yen. |

Because TIBOR is built from reference-bank judgement rather than from a pool of actual overnight trades, it carries a **bank-credit / term-premium component** that a pure risk-free overnight rate does not. That credit sensitivity is exactly why some lenders prefer it over a compounded risk-free rate for term lending — and is also why it required IOSCO-aligned governance reform after the global benchmark-manipulation episodes.

## D-TIBOR vs Z-TIBOR

| Family | Reflects | Status |
|---|---|---|
| Japanese Yen TIBOR (D-TIBOR) | Domestic Japanese unsecured call-market funding environment. | Continuing publication. |
| Euroyen TIBOR (Z-TIBOR) | Offshore Japan Offshore Market (euroyen) funding environment. | Permanently ceased; final publication 30 December 2024. |

The Euroyen TIBOR cessation followed a multi-year reform path. JBATA published an approach for integrating Japanese Yen TIBOR and Euroyen TIBOR in 2018 in light of the prolonged downsizing of the Japan Offshore Market, ran public consultations on fallbacks and on permanent cessation, and confirmed the end of Euroyen TIBOR via a 2024 statement coordinated with the [[JapanFG/fsa|FSA]]. Market users of Euroyen TIBOR were directed to fallback arrangements (alternative rates plus spread adjustment).

## TIBOR vs TONA

TIBOR and [[derivatives/ois-tona-curve|TONA]] are different animals and should never be conflated:

| Property | TIBOR | TONA |
|---|---|---|
| Nature | Term, forward-looking, quote-based. | Overnight, backward-looking, transaction-based. |
| Source | Reference-bank submissions. | Volume-weighted average of actual uncollateralized overnight call trades. |
| Credit content | Embeds bank credit / term premium. | Near risk-free. |
| Administrator | JBATA (JBA-affiliated). | Bank of Japan. |
| Typical use | Term loans, some bonds needing a term fix. | OIS, discounting, RFR-based products. |
| Reform status | Reformed and retained (Euroyen TIBOR ended 2024). | Designated JPY risk-free rate post-LIBOR. |

The two reference the same underlying funding system (see [[money-market/call-market-structure|the uncollateralized call market]]) but express it differently. The spread between term TIBOR and compounded TONA over the same period is itself a market-watched basis, and is quoted as a TIBOR-vs-TONA basis in the swap market.

## Where TIBOR Is Used

- **Syndicated and bilateral JPY loans**: many domestic floating-rate loans reset off 1M / 3M / 6M TIBOR because borrowers and lenders want a known term rate fixed at the start of each period rather than a rate compounded in arrears.
- **Floating-rate notes and some structured products**: instruments that need a forward term fix.
- **Reference for floating NCDs**: some floating-rate [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]] reference short-term yen benchmarks in this family.
- **Derivatives**: legacy and term-fixing JPY interest-rate derivatives; see [[derivatives/japan-irs-market|the JPY IRS market]] for how TIBOR-referencing swaps are discounted on the TONA-OIS curve.

## Governance and Reform Context

TIBOR reform aligned the benchmark with IOSCO Principles for Financial Benchmarks:

- A clear administrator (JBATA) with a defined calculation and oversight framework.
- A specified reference-bank panel and submission methodology with a fallback / contingency framework when submissions are insufficient.
- Public consultation processes for major changes (fallbacks, integration, Euroyen cessation).
- Coordination with the [[JapanFG/fsa|FSA]] and with the broader [[money-market/japan-money-market-benchmark-reform-tona|JPY benchmark-reform effort]] run through the BoJ-convened Cross-Industry Committee.

This governance is what allowed TIBOR to survive the global IBOR transition that ended LIBOR, rather than being discontinued.

## Reading Checklist

1. Distinguish Japanese Yen TIBOR (continuing) from Euroyen TIBOR (ceased 30 December 2024).
2. Treat TIBOR as quote-based and credit-sensitive — not the same thing as a transacted overnight rate.
3. Confirm the tenor (1W / 1M / 3M / 6M / 12M) when a contract references TIBOR.
4. For pricing / discounting, remember collateralized JPY trades still discount on [[derivatives/ois-tona-curve|TONA-OIS]] even when the floating leg is TIBOR.
5. Read TIBOR-vs-TONA spread as a credit / term-premium signal, not as a data error.

## JapanFG Relevance

- [[JapanFG/zenginkyo|Japanese Bankers Association (Zenginkyō)]] is the institutional home of JBA TIBOR Administration.
- [[JapanFG/fsa|FSA]] is the supervisory authority coordinating benchmark reform.
- [[JapanFG/mufg]], [[JapanFG/smfg]], and [[JapanFG/mizuho-fg]] participate as major lenders whose loan books reference TIBOR and (historically) as reference-panel-type institutions in the interbank market.
- [[JapanFG/boj-monetary-policy]] sets the policy framework that drives the underlying short-rate environment TIBOR reflects.

## Boundary Cases

- **TIBOR vs TONA**: term quote-based vs overnight transaction-based; covered above.
- **TIBOR vs LIBOR**: both were quote-based IBORs, but JPY LIBOR ceased while TIBOR was reformed and retained; do not assume "IBOR" means TIBOR ended too.
- **D-TIBOR vs Z-TIBOR**: domestic vs offshore (euroyen); Z-TIBOR is discontinued.
- **TIBOR vs policy rate**: TIBOR is a market benchmark, not the BoJ policy guideline rate.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-money-market-benchmark-reform-tona]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/boj-open-market-operations]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[JapanFG/zenginkyo]]
- [[JapanFG/fsa]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[INDEX|FinWiki index]]

## Sources

- JBA TIBOR Administration (JBATA): "About JBA TIBOR," including tenor set and calculation method.
- JBA TIBOR Administration: "JBA TIBOR Reform," covering IOSCO alignment and the Japanese Yen / Euroyen integration approach.
- JBA TIBOR Administration: statement on the end of Euroyen TIBOR and results of the permanent-cessation public consultation.
- Bank of Japan: Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks surface (benchmark-reform coordination).
- Financial Services Agency: publication on the end of Euroyen TIBOR.
