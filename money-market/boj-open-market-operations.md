---
title: "BoJ open market operations"
aliases:
  - "boj-open-market-operations"
  - "BoJ market operations"
  - "Bank of Japan open market operations"
  - "公開市場操作"
domain: "money-market"
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [money-market, BoJ, open-market-operations, monetary-policy, JGB]
status: active
sources:
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b34.htm"
  - "https://www.boj.or.jp/about/education/oshiete/seisaku/b34.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b31.htm"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/research/brp/mor/mor250604.htm"
---

# BoJ open market operations

## TL;DR

Open market operations are the Bank of Japan's main implementation tool for money-market control. Under the policy guideline decided at Monetary Policy Meetings, the BoJ supplies or absorbs funds by lending against collateral, buying or selling securities, conducting repo-style operations, and using other market-operation facilities.

For FinWiki, this page is the mechanics layer under [[JapanFG/boj-monetary-policy]] and [[money-market/japan-money-market]].

## Operation Types

The BoJ's own explanation divides open market operations into two broad directions:

| Direction | Meaning | Typical examples |
|---|---|---|
| Funds-supplying operations | BoJ adds liquidity to financial markets. | Loans against pooled collateral, JGB purchases, Treasury Discount Bill purchases, JGS purchase operations with resale agreements. |
| Funds-absorbing operations | BoJ drains liquidity from financial markets. | Sales of BoJ bills, JGS sale operations with repurchase agreements. |

The exact operation menu changes with the policy regime. Always verify the current official BoJ operation page before using this page for trade-level or current-rate analysis.

## Why Operations Matter

Market operations translate policy into balance-sheet reality:

- They affect current-account balances at the BoJ.
- They influence the uncollateralized overnight call rate and other short funding prices.
- They affect JGB market liquidity and dealer inventory conditions.
- They change collateral demand and the relative attractiveness of repo / call funding.
- They determine which institutions have operational contact with the BoJ as counterparties or account holders.

## JapanFG Relevance

| Entity cluster | Operation linkage |
|---|---|
| Megabanks | Reserve balances, loan / deposit repricing, JGB portfolio valuation, liquidity placement. |
| Securities firms | JGB dealing, repo finance, collateral, and dealer-balance-sheet capacity. |
| Tanshi companies | Money-market brokerage, operation-counterparty adjacency, call-market rate formation. |
| Trust / custody banks | Settlement liquidity, collateral movement, fund cash management. |

Use these internal anchors:

- [[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]]
- [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]]
- [[JapanFG/tokyo-tanshi]], [[JapanFG/central-tanshi]], [[JapanFG/ueda-yagi-tanshi]]
- [[JapanFG/local-bond-market]]

## Reading Checklist

When reading a BoJ operation result, capture:

1. operation type;
2. offer amount and accepted amount;
3. rate / yield terms if disclosed;
4. maturity / duration;
5. eligible collateral or securities;
6. whether the operation supplies or absorbs funds;
7. relationship to the current MPM guideline.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/local-bond-market]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: What types of open market operations does the Bank conduct?
- Bank of Japan: What are market operations?
- Bank of Japan: Money Market.
- Bank of Japan: 2024年度の金融市場調節.
