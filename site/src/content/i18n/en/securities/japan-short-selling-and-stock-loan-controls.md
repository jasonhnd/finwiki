---
source: securities/japan-short-selling-and-stock-loan-controls
source_hash: d764b7bd2fb3612a
lang: en
status: machine
fidelity: ok
title: "Japan short-selling and stock-loan controls"
translated_at: 2026-06-01T04:15:40.123Z
---
# Japan short-selling and stock-loan controls

## Overview

Japan short selling sits on three connected control surfaces: legal short-selling rules, stock-borrow / securities-finance availability, and exchange / broker issue-level restrictions. Do not treat short interest, JSF loan balance, margin selling, and securities lending as one number.

Use this page with [[securities/INDEX|securities domain]], [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]], [[securities/japan-stock-lending-market-route|stock lending market route]], [[financial-regulators/japan-securities-finance|Japan Securities Finance]], [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]], [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]], and [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]].

## Control Layers

| Layer | What it controls | Source route |
|---|---|---|
| Marking / confirmation | Whether sell orders are marked as short or long and confirmed by brokers. | FIEA / JPX short-selling rule explanation. |
| Price restriction | Triggered short-selling price restriction when issue-level conditions are met. | JPX short-selling restrictions. |
| Naked short-selling prohibition | Sale without ownership or arrangement to borrow is restricted. | FSA short-selling measures. |
| Short-position reporting | Large short positions above threshold require reporting / disclosure route. | FSA short-selling measures and exchange disclosure. |
| Stock-borrow availability | Borrowed shares come from margin / loan trading, securities lending, or negotiated borrow. | [[financial-regulators/japan-securities-finance|JSF]], brokers, institutional lenders. |
| Issue-level margin restrictions | TSE / JSF can restrict margin trading or loans for margin trading. | JPX margin-trading restrictions, JSF notices. |

## Data Map

| Data signal | Useful for | Caveat |
|---|---|---|
| Short-selling trading value | Flow pressure and market-structure monitoring. | Not the same as outstanding short position. |
| Short-position disclosure | Larger disclosed positions by holders. | Thresholded and not complete market inventory. |
| TSE margin outstanding | Retail / broker margin positioning. | Includes standardized / negotiable margin complexities. |
| JSF loan balance | Standardized margin / securities-finance supply-demand route. | Does not include all OTC stock lending or broker internal supply. |
| Premium charge / loan rate | Borrow scarcity signal. | Can be temporary and issue-specific. |
| PTS share / execution venue data | Venue interaction and SOR routing. | Needs denominator from JPX / JSDA data. |

## Stock Loan vs Short Selling

Stock lending is a funding and settlement mechanism. Short selling is a trading action. The same borrowed stock can support market-making, hedging, margin selling, settlement coverage, or directional short exposure. This is why [[securities/japan-stock-lending-market-route|stock lending market route]] should be read before making directional claims from borrow data.

## JapanFG Relevance

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] is the central institution for standardized margin / loan trading support.
- [[securities-firms/sbi-securities|SBI Securities]], [[securities-firms/rakuten-securities|Rakuten Securities]], [[securities-firms/matsui-sec|Matsui Securities]], [[securities-firms/gmo-click-securities|GMO Click Securities]], and [[securities-firms/dmm-com-securities|DMM.com Securities]] matter for retail margin and active-trader flows.
- [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa Securities Group]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], and [[securities-firms/mufg-mums|MUMSS]] matter for institutional stock lending, prime brokerage adjacency, and underwriting / hedge flows.
- [[securities/japan-best-execution-sor-pts|Best execution / SOR / PTS]] matters when short-selling controls interact with venue selection.

## Research Checklist

1. Identify whether the observation is a short-sale order, margin sale, disclosed short position, stock-loan balance, or premium-charge signal.
2. Check whether the issue has JPX / TSE / JSF restrictions.
3. Check whether the trade is standardized margin, negotiable margin, OTC borrow, hedge, or market-making.
4. Avoid treating trust-bank nominee holdings, lending supply, and directional shorting as the same thing.
5. Link issuer-specific analysis to the exact date because short-selling and loan restrictions can change quickly.

## Related

- [[securities/INDEX]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-stock-lending-market-route]]
- [[financial-regulators/japan-securities-finance]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[money-market/jgb-repo-market-japan]]
- [[INDEX|FinWiki index]]

## Sources

- JPX: short-selling restrictions explanation.
- JPX: outstanding short-selling positions, short-selling value statistics, and margin / loan restriction pages.
- FSA: short-selling regulation releases and historical measures.
- FSA Access: explanation of making naked-short-selling prohibition permanent and expanding PTS treatment.
- JSF: securities-financing business page.
