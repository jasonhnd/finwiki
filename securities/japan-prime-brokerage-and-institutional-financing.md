---
title: "Japan prime brokerage and institutional financing"
aliases:
  - "japan-prime-brokerage-and-institutional-financing"
  - "Japan prime brokerage"
  - "日本 prime brokerage"
  - "Japan institutional securities financing"
domain: securities
created: 2026-05-22
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-22
confidence: likely
tags: [securities, prime-brokerage, institutional-financing, stock-lending, margin, derivatives, collateral]
status: active
sources:
  - "https://www.fsa.go.jp/en/regulated/licensed/fibo.pdf"
  - "https://www.fsa.go.jp/en/laws_regulations/faq_on_fiea/section06.html"
  - "https://www.fsa.go.jp/common/law/guide/kinyushohin_eng.pdf"
  - "https://www.jsda.or.jp/en/about/members-list/index.html"
  - "https://www.jsda.or.jp/en/activities/research-studies/html/BLT_Guidelines_en.pdf"
  - "https://www.jpx.co.jp/english/equities/trading/margin/outline/"
  - "https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html"
  - "https://www.jasdec.com/en/system/finance/outline/concept/"
  - "https://www.taisyaku.jp/english/about/restrictive/"
  - "https://www.nomuranow.com/portal/site/nnextranet/en/global-markets/prime-finance/"
  - "https://www.jpmorgan.com/prime-services"
---

# Japan prime brokerage and institutional financing

## Wiki route

This page sits under [[securities/INDEX|securities domain]]. Read it with [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]], [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]], [[banking/INDEX|banking domain]], and [[money-market/INDEX|money-market domain]] when prime brokerage becomes a license, custody, collateral, or funding question.

## Overview

Prime brokerage in Japan is not a single license label. It is a wholesale service stack built from Type I financial instruments business, broker-dealer execution, margin finance, securities lending, stock-borrow, derivatives, repo / collateral operations, custody, clearing, and settlement.

Use this page with [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]], [[securities/japan-stock-lending-market-route|stock lending market route]], [[securities/japan-short-selling-and-stock-loan-controls|short-selling and stock-loan controls]], [[securities/japan-market-infrastructure-map|market infrastructure map]], and [[JapanFG/legal-financial-licenses/securities-license-stack|securities license stack]].

## Function Stack

| Function | Legal / regulatory anchor | Infrastructure rail | Main risk |
|---|---|---|---|
| Execution | Type I FIBO / broker-dealer route. | Exchange, PTS, broker routing, SOR. | Best execution, order marking, market abuse. |
| Cash financing | Margin / loan trading and bilateral credit arrangements. | Broker balance sheet, JSF, collateral account. | Leverage, margin calls, liquidation. |
| Securities borrow | Stock lending / borrowing and locate / cover arrangements. | Custodian, lender, borrower, JSF, JASDEC. | Fail, recall, scarcity, short-sale compliance. |
| Synthetic exposure | Derivatives / swaps / CFD-like exposure where licensed. | Dealer risk book, margin, collateral, documentation. | Counterparty, valuation, close-out, suitability. |
| Custody / settlement | Client asset segregation, DVP, JASDEC / JSCC routes. | Custodian, broker, CCP, CSD. | Asset segregation, settlement fail, operational risk. |
| Collateral operations | Cash / securities collateral and margining. | Custodian, broker, CCP, treasury. | Reuse / rehypothecation-like exposure, concentration, liquidity. |

## Actor Map

| Actor | Role |
|---|---|
| Prime broker | Provides financing, stock borrow, execution access, reporting, and collateral operations to institutional clients. |
| Executing broker | Routes and executes orders; may or may not be the financing broker. |
| Custodian | Holds assets, handles corporate actions, and supports asset segregation / lending programs. |
| Securities finance company | [[JapanFG/japan-securities-finance|Japan Securities Finance]] supports standardized margin and securities-finance routes. |
| CCP / CSD | [[securities/japan-securities-clearing-corp|JSCC]] clears; [[securities/japan-securities-depository-center|JASDEC]] supports depository / settlement routes. |
| Client | Hedge fund, asset manager, proprietary account, market maker, or other institutional investor. |

## Retail Margin Is Not Prime Brokerage

[[securities/japan-margin-trading-and-securities-finance|Retail margin trading]] is important plumbing, but it is not the same as institutional prime brokerage. Retail margin explains standardized / negotiable margin, broker credit, JSF, and stock-loan controls. Prime brokerage adds broader institutional financing, portfolio-level collateral, short access, synthetic exposure, custody / reporting, and multi-market execution.

## Financing Route Map

| Route | How to read it | Pages to open |
|---|---|---|
| Cash margin | Client borrows money or securities against collateral. | [[securities/japan-margin-trading-and-securities-finance|margin trading route]] |
| Stock borrow | Securities borrowed for short sale, hedge, market-making, or settlement coverage. | [[securities/japan-stock-lending-market-route|stock lending route]] |
| Short-sale control | Order marking, price restrictions, position disclosure, and issue-level measures. | [[securities/japan-short-selling-and-stock-loan-controls|short-selling controls]] |
| Repo / collateral | JGB or securities collateral supports financing and liquidity. | [[money-market/jgb-repo-market-japan|JGB repo market]] |
| DVP / settlement | Cash and securities move through CCP / CSD settlement rails. | [[securities/japan-market-infrastructure-map|market infrastructure map]] |

## JapanFG Company Routing

| Company page | Likely wiki role |
|---|---|
| [[JapanFG/nomura-hd|Nomura]], [[JapanFG/daiwa-sg|Daiwa Securities Group]] | Domestic wholesale securities / prime finance / institutional brokerage anchors. |
| [[JapanFG/smbc-nikko|SMBC Nikko]], [[JapanFG/mizuho-securities|Mizuho Securities]], [[JapanFG/mufg-mums|MUMSS]] | Megabank securities arms with institutional financing / brokerage context. |
| [[JapanFG/goldman-sachs-japan|Goldman Sachs Japan]], [[JapanFG/jpmorgan-japan|J.P. Morgan Japan]], [[JapanFG/morgan-stanley-japan|Morgan Stanley Japan]], [[JapanFG/ubs-japan|UBS Japan]] | Global prime brokerage / markets / institutional financing comparators. |
| [[JapanFG/bny-mellon-japan|BNY Mellon Japan]], [[JapanFG/state-street-japan|State Street Japan]], [[JapanFG/euroclear-bank-japan|Euroclear Bank Japan]], [[JapanFG/clearstream-banking-japan|Clearstream Banking Japan]] | Custody, settlement, and global collateral context. |

## Control Questions

| Question | Public relevance |
|---|---|
| Who is the legal counterparty? | Prime broker, executing broker, custodian, and lender may be different. |
| Are assets segregated? | Client asset protection and insolvency outcomes depend on legal / operational setup. |
| What collateral is posted? | Cash, JGB, equity, and other collateral have different liquidity and haircut risk. |
| Can securities be recalled? | Borrow availability can change around corporate actions, voting, and scarcity. |
| Is the exposure cash or synthetic? | Documentation, margining, tax, and close-out risk differ. |
| Which infrastructure rail settles? | JSCC / JASDEC / custodian route affects DVP, fail, and reconciliation controls. |

## Research Checklist

1. Identify activity first: execution, margin, stock borrow, derivative, custody, collateral, or reporting.
2. Verify legal status against FSA FIBO list and JSDA membership where applicable.
3. Separate client-facing product pages from actual Japan legal entity / registration.
4. Check short-selling, stock-loan, and issue-level restriction pages before interpreting a borrow as available.
5. For global banks, route entity questions through [[JapanFG/legal-financial-licenses/foreign-financial-group-adjacent-licenses|foreign financial group adjacent licenses]].

## Caveats

- Prime brokerage terms are often contractual and client-specific; public pages usually describe capabilities, not individual client terms.
- This page records no suitability, leverage, or investment endorsement.
- Current license status be refreshed from FSA / JSDA sources for live use.

## Related

- [[securities/INDEX]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[JapanFG/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: FIBO list, FIEA FAQ, and supervisory guidelines for financial instruments business operators.
- JSDA: member list and borrowing / lending transaction guidelines for share certificates.
- JPX / JSCC / JASDEC: margin trading, DVP settlement, and institutional settlement public pages.
- JSF: public restriction / loan information for margin transactions.
- Nomura and J.P. Morgan: public prime finance / prime services pages.
