---
title: "Japan money-market benchmark reform (TONA and the multi-rate world)"
aliases:
  - "money-market/japan-money-market-benchmark-reform-tona"
  - "japan-money-market-benchmark-reform-tona"
  - "Japan interest rate benchmark reform"
  - "JPY LIBOR transition"
  - "TONA risk-free rate"
  - "日本円金利指標改革"
  - "円LIBOR移行"
domain: "money-market"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [money-market, benchmark-reform, TONA, LIBOR-transition, risk-free-rate, BoJ]
status: active
sources:
  - "https://www.boj.or.jp/en/paym/market/jpy_cmte/index.htm"
  - "https://www.boj.or.jp/en/paym/market/sg/rfr1612c.pdf"
  - "https://www.boj.or.jp/en/finsys/libor/index.htm"
  - "https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm"
  - "https://www.fsa.go.jp/en/news/2024/20240306/20240306.html"
---

# Japan money-market benchmark reform (TONA and the multi-rate world)

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/japan-tibor-benchmark-rate|TIBOR]] for the surviving term benchmark and [[money-market/call-market-structure|Call market structure]] for the cash market that TONA is computed from; the derivative-pricing expression is [[derivatives/ois-tona-curve|the OIS TONA curve]].

## TL;DR

Japanese yen interest-rate benchmark reform replaced JPY LIBOR with a **risk-free rate (RFR)** anchored in the actual money market, while retaining a reformed term benchmark. The outcome is a deliberate **multi-rate world**:

- **TONA (Tokyo Overnight Average Rate)** is the designated JPY risk-free rate. It is the Bank of Japan's volume-weighted average of **uncollateralized overnight call** transactions — i.e. it is computed directly from the cash market described in [[money-market/call-market-structure|call market structure]].
- **TIBOR** survives as a reformed, quote-based term benchmark (see [[money-market/japan-tibor-benchmark-rate|TIBOR]]), now without its Euroyen (Z-TIBOR) leg.
- **JPY LIBOR** ceased: representative JPY LIBOR ended at end-2021, and synthetic JPY LIBOR was wound down by end-2023.

For FinWiki, this entry is the money-market-side narrative of who reformed what and why the call market sits at the center of the post-LIBOR JPY rate complex. The pricing / discounting mechanics live in [[derivatives/ois-tona-curve|the OIS TONA curve]] entry; this page covers the benchmark-governance and market-structure story.

## The Reform Bodies

| Body | Role |
|---|---|
| Study Group on Risk-Free Reference Rates | Identified the **uncollateralized overnight call rate (TONA)** as the JPY risk-free reference rate in its December 2016 report. |
| Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks | Established August 2018; the main public-private forum that ran the JPY LIBOR transition, developed the OIS market, and published transition guidance through many plenary meetings. |
| Bank of Japan | Convenes the committee secretariat, calculates and publishes TONA, and supervises money-market functioning. |
| [[financial-regulators/fsa|Financial Services Agency (FSA)]] | Supervisory authority for the transition and for benchmark administrators. |
| [[financial-regulators/zenginkyo|Japanese Bankers Association]] / JBATA | Administers the reformed TIBOR (the surviving term benchmark). |

The committee structure is why "benchmark reform" in Japan was a coordinated public-private effort rather than a single regulator's decree.

## Why TONA Sits on the Call Market

TONA is not a survey rate; it is the volume-weighted average of real uncollateralized overnight call transactions reported by tanshi companies to the BoJ. That design choice is the heart of the reform:

- **Transaction-based robustness**: anchoring the benchmark to actual trades (the market in [[money-market/call-market-structure|the uncollateralized call segment]]) removes the submission-based manipulation vulnerability that ended LIBOR.
- **Overnight, near risk-free**: because it is an overnight rate close to the policy target, it strips out most bank-credit and term-premium content, making it a clean discounting / RFR building block.
- **Policy linkage**: TONA tracks the BoJ operating guideline closely, so it transmits [[money-market/boj-open-market-operations|BoJ operations]] into the benchmark complex day by day.

The trade-off is that an ample-reserves policy environment can thin out call-market activity, which keeps TONA volume a thing to watch.

## Transition Timeline

| Period | Event |
|---|---|
| 2016 | Study Group identifies TONA as the JPY risk-free rate (December report). |
| 2018 | Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks established (August); OIS-market development work begins. |
| 2018–2021 | New JPY swap / loan business migrates to TONA reference; legacy JPY LIBOR contracts amended or covered by ISDA fallback protocol. |
| End-2021 | Representative JPY LIBOR ceases. A non-representative synthetic JPY LIBOR is introduced as a temporary wind-down bridge for some legacy tenors. |
| End-2023 | Synthetic JPY LIBOR ceases; remaining JPY rate products reference TONA, with TIBOR retained for term-fixing needs. |
| End-2024 | Euroyen TIBOR (Z-TIBOR) permanently ceases (final fixing 30 December 2024); Japanese Yen TIBOR continues. |

## The Resulting Multi-Rate World

Japan intentionally did not collapse everything into a single rate. The surviving structure is:

| Benchmark | Nature | Primary use |
|---|---|---|
| [[derivatives/ois-tona-curve|TONA]] | Overnight, transaction-based, near risk-free. | OIS, discounting, RFR-linked loans / FRNs compounded in arrears. |
| [[money-market/japan-tibor-benchmark-rate|Japanese Yen TIBOR]] | Term, quote-based, credit-sensitive. | Term loans and some bonds needing a forward-looking term fix. |

This contrasts with currencies that moved almost entirely to an RFR. Keeping a reformed term benchmark alongside the RFR reflects demand from JPY loan markets for a known term rate set at the start of each interest period. The price difference between the two — the TIBOR-vs-TONA basis — is a market-watched credit / term-premium signal rather than an anomaly.

## How Legacy Contracts Were Handled

- **Derivatives**: covered by the ISDA 2020 IBOR Fallbacks Protocol; transitioned JPY LIBOR trades reference TONA compounded in arrears plus a fixed credit-adjustment spread. See [[derivatives/isda-2020-protocol-japan-implementation|ISDA 2020 protocol Japan implementation]].
- **Cash products (loans / bonds)**: handled through contractual fallbacks, amendments, or active conversion to TONA or TIBOR references, with spread adjustments where needed.
- **Euroyen TIBOR users**: directed to fallback arrangements ahead of the 2024 cessation.

## Reading Checklist

1. Separate the **benchmark-governance** story (this page) from the **pricing / discounting** story ([[derivatives/ois-tona-curve|OIS TONA curve]]).
2. Remember TONA is transaction-based on the uncollateralized call market; TIBOR is quote-based and term.
3. JPY LIBOR is gone (representative end-2021, synthetic end-2023) — do not treat it as live.
4. The surviving JPY benchmarks are TONA and Japanese Yen TIBOR; Euroyen TIBOR ended at end-2024.
5. Treat the TIBOR-vs-TONA spread as a credit / term signal.

## JapanFG Relevance

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] / the Bank of Japan calculates TONA and convenes the reform committee.
- [[financial-regulators/fsa|FSA]] supervises the transition and benchmark administrators.
- [[financial-regulators/zenginkyo|Japanese Bankers Association]] (via JBATA) administers the surviving TIBOR.
- [[megabanks/mufg]], [[megabanks/smfg]], and [[megabanks/mizuho-fg]] transitioned large loan and derivative books across the reform.
- [[securities-firms/mizuho-securities]] and [[securities-firms/mufg-mums]] are active in the TONA-OIS market that the reform helped build.

## Boundary Cases

- **Benchmark reform vs monetary policy**: reform is about which reference rates exist and how they are governed, not about the level of the policy rate.
- **RFR vs term rate**: TONA is the RFR; TIBOR is the term benchmark; both survive by design.
- **Synthetic LIBOR vs representative LIBOR**: synthetic JPY LIBOR was a temporary non-representative bridge, not a continuation of real LIBOR.
- **Cessation vs reform**: JPY LIBOR was ceased; TIBOR was reformed and retained — different outcomes for different benchmarks.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-tibor-benchmark-rate]]
- [[money-market/boj-open-market-operations]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[derivatives/isda-2020-protocol-japan-implementation]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/fsa]]
- [[financial-regulators/zenginkyo]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks surface.
- Bank of Japan: Study Group "Report on the Identification of a Japanese Yen Risk-Free Rate" (December 2016).
- Bank of Japan: Interest Rate Benchmark Reform (preparedness for the discontinuation of LIBOR).
- Bank of Japan: Call Money Market Data (TONA publication).
- Financial Services Agency: publication on the end of Euroyen TIBOR.
