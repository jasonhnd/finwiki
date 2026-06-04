---
source: money-market/jgb-repo-market-japan
source_hash: e3b47a7512bf13ea
lang: en
status: machine
fidelity: ok
title: "JGB repo market in Japan"
translated_at: 2026-05-30T14:13:23.431Z
---

# JGB repo market in Japan

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/boj-open-market-operations|BoJ open market operations]] for peer / contrast context and [[money-market/japan-money-market|Japan money market]] for the broader system / regulatory boundary.

## TL;DR

The JGB repo market is Japan's secured short-term funding and collateral-financing layer. It is distinct from the uncollateralized call market: repo transactions exchange securities for cash with a commitment to repurchase the same or similar collateral later, while call transactions are short-term unsecured lending / borrowing.

For FinWiki, the repo market matters because it links BoJ policy implementation, JGB market liquidity, dealer balance sheets, securities lending, and short-rate transmission. It is also one of the best places to observe whether JGB-market functioning is improving or stressed.

## Market Mechanics

| Element | Explanation |
|---|---|
| Repo transaction | Securities or other financial assets are provided in exchange for cash, with a commitment to repurchase the same or similar collateral at a fixed price on a future date. |
| JGB repo | Repo where the securities / collateral are Japanese government securities and the cash leg is often yen. |
| Cash borrowing side | Securities provider / repo side; receives cash against collateral. |
| Cash lending side | Securities recipient / reverse repo side; provides cash and receives collateral. |
| Securities lending with cash collateral | Economically adjacent to repo and included in BoJ securities-financing statistics. |
| Repo rate | BoJ statistics calculate volume-weighted repo rates using repo transactions and cash-collateralized securities lending after adjusting for lending fees or rebate rates. |

## GC vs SC

| Type | Meaning | Typical use |
|---|---|---|
| GC repo | General collateral: securities are not specified. | Primarily funding and cash management. |
| SC repo | Special collateral: securities are specified. | Borrowing a specific JGB issue or financing a particular collateral need. |

This distinction is important when reading stress. A broad funding problem may show in GC conditions, while scarcity in a specific JGB issue can show through SC demand, specialness, or securities-lending facility usage.

## Data Surface

BoJ's securities financing statistics cover repo transactions and securities lending transactions collected by the FSA and BoJ under the FSB data-collection framework. The published datasets include:

- daily flow data for new transactions;
- monthly stock data by counterparty and currency;
- yen transactions with Japanese government securities;
- securities lending transactions involving JGBs and yen;
- repo-rate series.

The scope is useful but not complete. Reporting focuses on major Japan-located financial institutions and excludes some internal, individual, central-bank, and advice-only transactions.

## BoJ and Market Functioning

BoJ's Securities Lending Facility provides a temporary and secondary source of JGBs to market participants to support liquidity and smooth market functioning. A 2025 BoJ Review linked the earlier surge and later decline in SLF borrowing to changes in JGB market liquidity, cash / futures / repo market functioning, BoJ purchase reductions, repo-rate stabilization, and investor positioning.

For analysis, SLF usage should be read as a market-functioning signal, not as a standalone policy target.

## JapanFG Relevance

- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] affects repo through market operations, JGB holdings, and short-rate expectations.
- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]] connect the repo layer to the broader short-term money-market infrastructure.
- Megabanks such as [[megabanks/mufg]], [[megabanks/smfg]], and [[megabanks/mizuho-fg]] are exposed through JGB holdings, collateral management, reserve balances, and wholesale funding.
- Securities firms such as [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], and [[securities-firms/nomura-hd]] are exposed through dealer inventory, market-making, and collateral finance.

## Reading Rules

- Do not treat repo rates as the same instrument as the uncollateralized overnight call rate.
- Separate funding demand from specific-security scarcity.
- Check whether the issue is GC funding, SC specialness, securities lending, BoJ SLF usage, or broader JGB cash-market liquidity.
- When using current data, cite the exact BoJ monthly release because the numbers are time-specific and may be corrected later.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/local-bond-market]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: explanation of Statistics on Securities Financing Transactions in Japan.
- Bank of Japan: Statistics on Securities Financing Transactions in Japan release surface.
- Bank of Japan Review 2025-E-3: JGB market functioning and Securities Lending Facility usage.
- Bank of Japan: Securities Lending Facility.
