---
title: "boj-monetary-policy"
aliases:
  - "financial-regulators/boj-monetary-policy"
  - "boj-monetary-policy"
  - "BoJ monetary policy"
  - "Bank of Japan monetary policy"
domain: financial-regulators
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [JapanFG, BoJ, monetary-policy, money-market, tanshi, legal, central-bank]
status: active
sources:
  - "https://www.boj.or.jp/en/mopo/outline/index.htm"
  - "https://www.boj.or.jp/en/mopo/outline/target.htm"
  - "https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm"
  - "https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf"
  - "https://www.boj.or.jp/en/mopo/measures/mkt_ope/index.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b34.htm"
  - "https://www.boj.or.jp/en/statistics/boj/fm/ope/index.htm"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/about/education/oshiete/kess/i08.htm"
  - "https://www.japaneselawtranslation.go.jp/en/laws/view/3788"
---

# BoJ monetary policy

## TL;DR

The Bank of Japan's monetary policy is the legal and operating anchor for Japan's short-term money market. The statutory objective is price stability, and the practical transmission point is the guideline for money market operations decided at Monetary Policy Meetings (MPMs).

Since the March 19, 2024 framework change, the BoJ has returned to a short-term interest-rate operating regime: it guides the uncollateralized overnight call rate as the primary policy tool while keeping the 2 percent CPI price-stability target. As of the April 28, 2026 MPM statement, the guideline was to encourage the uncollateralized overnight call rate to remain at around 0.75 percent.

For JapanFG mapping, this page is the bridge between central-bank policy, [[money-market/japan-money-market]], [[money-market/boj-open-market-operations]], and the tanshi companies: [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]].

### Legal mandate

The Bank of Japan Act frames the BoJ as Japan's central bank. Article 1 states its purposes as issuing banknotes, carrying out currency and monetary control, and supporting smooth settlement among banks and other financial institutions. Article 2 states that currency and monetary control is conducted to achieve price stability and contribute to sound national economic development.

The Act also makes the Policy Board the decision body for currency and monetary control. Article 15 covers basic discount / loan rates, reserve requirements, and guidelines for financial-market control, including open market operations. Article 54 creates the Diet reporting loop: the BoJ must submit a roughly semiannual report on Policy Board resolutions and operations conducted under them.

### Price-stability target

The BoJ states the price-stability target as 2 percent in terms of the year-on-year rate of change in the CPI. This target was introduced in January 2013 and remains the stated objective against which the interest-rate and money-market framework is assessed.

### MPM operating decision

The BoJ's own monetary-policy outline describes the sequence:

- The Policy Board discusses economic and financial conditions at MPMs.
- It decides the guideline for money market operations.
- The BoJ releases the guideline, assessment, and policy stance after each MPM.
- Based on the guideline, the BoJ supplies or absorbs funds in the money market.

MPMs are normally held eight times per year over two days, with decisions made by majority vote of the nine-member Policy Board.

### March 2024 regime shift

On March 19, 2024, the BoJ judged that QQE with Yield Curve Control and the negative interest-rate policy had fulfilled their roles. It shifted to guiding the short-term interest rate as the primary policy tool and set the operating guideline at the uncollateralized overnight call rate around 0 to 0.1 percent.

That decision matters for JapanFG because it reactivated the short-rate channel that had been suppressed under the negative-rate / YCC period. The relevant market signal is no longer only the size and composition of BoJ asset purchases; it is also the day-to-day formation of the call rate in the money market.

### Current checkpoint

The latest source checked for this page is the BoJ's April 28, 2026 Statement on Monetary Policy. It set the intermeeting guideline as:

- uncollateralized overnight call rate around 0.75 percent;
- 6-3 majority vote;
- three dissenters preferred around 1.0 percent.

This page should be refreshed after each new MPM if it is being used for current-rate analysis.

## Money Market Operations

BoJ money market operations are the implementation layer. The BoJ classifies open market operations into two broad directions:

- **Funds-supplying operations**: for example, loans to financial institutions against collateral, JGB purchases, T-Bill purchases, JGS purchases with repurchase agreements, and CP purchases with repurchase agreements.
- **Funds-absorbing operations**: for example, sales of BoJ bills or sales of JGSs held by the BoJ with repurchase agreements.

The current BoJ market-operations menu includes funds-supplying operations against pooled collateral, JGS repo operations, outright purchase / sale of Treasury Discount Bills, outright JGB purchases, sale of bills, the securities lending facility, and foreign-currency funds-supplying operations.

The operational data layer is also official: the BoJ publishes daily offers / results and monthly "Market Operations by the Bank of Japan" releases. Use [[money-market/boj-open-market-operations]] for the operation-mechanics page and this page for the policy framework behind those operations.

## JapanFG Relevance

For JapanFG, BoJ monetary policy is not an abstract macro topic. It is a direct input into business models, balance-sheet spreads, liquidity placement, and brokerage flow.

| JapanFG lane | Policy linkage | Research use |
|---|---|---|
| Megabanks / trust banks | Reserve balances, deposit beta, loan pricing, JGB portfolio valuation, short-rate transmission | Separate earnings impact from policy-rate headlines |
| Securities firms | JGB curve, repo, collateral, dealer balance-sheet demand | Connect primary / secondary JGB market liquidity with BoJ operations |
| Tanshi companies | Call-market volume, O/N rate formation, money-market brokerage demand | Track whether rate normalization revives brokerage flow |
| Payment / settlement infrastructure | BOJ current accounts, BOJ-NET, liquidity timing | Map settlement liquidity and account-access boundaries |
| Legal / regulatory pages | BoJ Act, FSA-supervised licenses, financial-market control powers | Route statutory questions to [[financial-licenses/INDEX]] |

The key analytical distinction: a higher policy rate can improve money-market economics, but it does not automatically recreate pre-QQE interbank activity if excess reserves remain abundant.

## Tanshi / Bank Liquidity Link

The BoJ identifies tanshi companies as money-market brokers that may hold current accounts at the Bank because they play a major intermediary role in money markets. This is the clean official bridge between central-bank operations and the tanshi pages.

For the three tanshi pages:

- [[financial-regulators/tokyo-tanshi]]: use this page to explain why call-rate normalization matters for Tokyo Tanshi's brokerage thesis.
- [[financial-regulators/central-tanshi]]: use this page to separate the central-bank policy channel from its company-specific FX and retail-linked activity.
- [[financial-regulators/ueda-yagi-tanshi]]: use this page to ground claims about BoJ operations, call-market transmission, and short-rate sensitivity.

The tanshi link is a market-function link, not a claim that tanshi firms control policy. They are intermediaries and, where eligible, market-operation counterparties / account holders; the policy decision remains with the BoJ Policy Board.

## Boundary Cases

- **Monetary policy vs financial supervision**: the BoJ conducts currency and monetary control and has financial-system functions; FSA remains the primary prudential / conduct regulator for many licensed financial businesses. Route license analysis to [[financial-licenses/INDEX]].
- **Policy rate vs actual funding rate**: the MPM guideline is a target / operating guide; the actual uncollateralized overnight call rate is a market outcome influenced by reserves, collateral, account access, and counterparty behavior.
- **Market operations vs fiscal financing**: JGB purchases are a market-operation tool, but Article 33 and related legal boundaries must be distinguished from fiscal policy or direct government financing debates.
- **BoJ account access vs public deposits**: BoJ current accounts are for selected institutions, government, central banks, and international organizations. The BoJ does not take deposits from individuals or ordinary firms.
- **Tanshi as infrastructure vs regulated bank**: tanshi companies sit in the money-market intermediation layer; do not treat them as deposit-taking banks unless a specific licensed entity and legal basis are verified.

## Related

- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[money-market/japan-money-market]]
- [[money-market/boj-open-market-operations]]
- [[financial-licenses/INDEX]]

## Sources

- Bank of Japan, "Outline of Monetary Policy" - https://www.boj.or.jp/en/mopo/outline/index.htm
- Bank of Japan, "Price Stability Target of 2 Percent" - https://www.boj.or.jp/en/mopo/outline/target.htm
- Bank of Japan, "Changes in the Monetary Policy Framework" (March 19, 2024) - https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm
- Bank of Japan, "Statement on Monetary Policy" (April 28, 2026) - https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf
- Bank of Japan, "Market Operations" - https://www.boj.or.jp/en/mopo/measures/mkt_ope/index.htm
- Bank of Japan FAQ, "What types of open market operations does the Bank conduct?" - https://www.boj.or.jp/en/about/education/oshiete/seisaku/b34.htm
- Bank of Japan, "Market Operations by the Bank of Japan" - https://www.boj.or.jp/en/statistics/boj/fm/ope/index.htm
- Bank of Japan, "Money Market" - https://www.boj.or.jp/en/paym/market/
- Bank of Japan FAQ, "Who holds accounts at the Bank?" - https://www.boj.or.jp/en/about/education/oshiete/kess/i08.htm
- Japanese Law Translation, "Bank of Japan Act" - https://www.japaneselawtranslation.go.jp/en/laws/view/3788

---

> [!info] 校核状态
> confidence: **likely**（BoJ official sources + Japanese Law Translation, checked 2026-05-19）。Current-rate statements are time-sensitive and should be refreshed after each MPM. Company-level tanshi revenue recovery remains an inference unless supported by firm disclosures or transaction-volume data.
