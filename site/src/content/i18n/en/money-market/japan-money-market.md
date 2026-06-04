---
source: money-market/japan-money-market
source_hash: 0457b8cb23f34878
lang: en
status: machine
fidelity: ok
title: "Japan money market"
translated_at: 2026-05-30T14:13:23.428Z
---

# Japan money market


## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/call-market-structure|Call market structure]] for peer / contrast context and [[money-market/boj-open-market-operations|BoJ open market operations]] for the broader system / regulatory boundary.

## TL;DR

Japan's money market is the short-term funding and liquidity-adjustment layer where the Bank of Japan implements monetary policy, financial institutions manage reserve / settlement balances, and tanshi companies intermediate short-term funds. The most important operating signal is the uncollateralized overnight call rate, because BoJ guidelines for money market operations use it as the short-rate target in the current framework.

This page is the domain overview. Use [[money-market/call-market-structure|call market structure]] for the call-market mechanism and [[money-market/boj-open-market-operations|BoJ open market operations]] for implementation tools.

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Policy decision | BoJ Policy Board sets the guideline for money market operations at MPMs. | [[financial-regulators/boj-monetary-policy]] |
| Operating market | Short-term rate formation, especially uncollateralized overnight call transactions. | [[money-market/call-market-structure]] |
| Market operations | BoJ supplies or absorbs funds through open market operations. | [[money-market/boj-open-market-operations]] |
| Intermediaries | Banks, securities firms, trust banks, and tanshi companies manage short-term liquidity. | [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] |
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
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market.
- Bank of Japan: What are market operations?
- Bank of Japan: How have the Bank's guidelines for market operations changed?
- Bank of Japan: Call Money Market Data.
- Bank of Japan: 2024年度の金融市場調節.
