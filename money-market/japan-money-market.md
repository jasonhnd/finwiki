---
title: "Japan money market"
aliases:
  - "japan-money-market"
  - "Japan money market"
  - "日本短期金融市場"
domain: "money-market"
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [money-market, BoJ, call-market, tanshi, liquidity]
status: active
sources:
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b31.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b42.htm"
  - "https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm"
  - "https://www.boj.or.jp/research/brp/mor/mor250604.htm"
---

# Japan money market

## TL;DR

Japan's money market is the short-term funding and liquidity-adjustment layer where the Bank of Japan implements monetary policy, financial institutions manage reserve / settlement balances, and tanshi companies intermediate short-term funds. The most important operating signal is the uncollateralized overnight call rate, because BoJ guidelines for money market operations use it as the short-rate target in the current framework.

This page is the domain overview. Use [[money-market/call-market-structure|call market structure]] for the call-market mechanism and [[money-market/boj-open-market-operations|BoJ open market operations]] for implementation tools.

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Policy decision | BoJ Policy Board sets the guideline for money market operations at MPMs. | [[JapanFG/boj-monetary-policy]] |
| Operating market | Short-term rate formation, especially uncollateralized overnight call transactions. | [[money-market/call-market-structure]] |
| Market operations | BoJ supplies or absorbs funds through open market operations. | [[money-market/boj-open-market-operations]] |
| Intermediaries | Banks, securities firms, trust banks, and tanshi companies manage short-term liquidity. | [[JapanFG/tokyo-tanshi]], [[JapanFG/central-tanshi]], [[JapanFG/ueda-yagi-tanshi]] |
| Data layer | BoJ publishes call money market data and market-operation results. | BoJ statistics / market-operation releases |

## Why It Matters

Money-market structure is the transmission belt between monetary policy and financial-company earnings:

- **Megabanks**: reserve balances, deposit beta, loan repricing, JGB portfolio valuation, and wholesale funding costs.
- **Trust banks / custody banks**: settlement liquidity, collateral movement, and short-rate effects on institutional cash.
- **Securities firms**: repo, collateral finance, JGB market-making, and yield-curve activity.
- **Tanshi companies**: brokerage demand and call-market activity, especially when short-rate normalization revives overnight trading.
- **Policy-finance / public institutions**: cash management and issuance conditions are affected by short-rate and JGB-market liquidity.

## Post-YCC Reading Rule

After the BoJ's March 2024 regime shift away from negative rates and Yield Curve Control, the money market became more useful again as an observable policy-transmission surface. The key check is not only the policy-rate headline; it is whether the actual uncollateralized overnight call rate, transaction volume, reserve environment, and BoJ operations all point in the same direction.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market.
- Bank of Japan: What are market operations?
- Bank of Japan: How have the Bank's guidelines for market operations changed?
- Bank of Japan: Call Money Market Data.
- Bank of Japan: 2024年度の金融市場調節.
