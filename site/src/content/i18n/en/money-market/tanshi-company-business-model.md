---
source: money-market/tanshi-company-business-model
source_hash: 1f6731edfacb6e83
lang: en
status: machine
fidelity: ok
title: "Tanshi company business model"
translated_at: 2026-05-30T14:13:23.432Z
---

# Tanshi company business model

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/call-market-structure|call market structure]] for the peer / contrast surface where tanshi brokerage actually happens, and against [[money-market/boj-open-market-operations|BoJ open market operations]] for the broader system / regulatory boundary where tanshi flows interact with central-bank policy implementation. The peer-entity routes are [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]].

## TL;DR

Tanshi (短資) companies are Japan's specialist money-market brokers. They sit between banks, securities firms, trust banks, insurers, and other eligible financial institutions, and intermediate short-term yen funding — primarily uncollateralized call transactions, JGB / general-collateral repo, T-bill (国庫短期証券) brokerage, and securities financing. Three firms remain after decades of consolidation: 東京短資 (Tokyo Tanshi), セントラル短資 (Central Tanshi), and 上田八木短資 (Ueda Yagi Tanshi). All three are commission-based intermediaries — by design they do not run proprietary directional positions — and all three operate adjacent to the Bank of Japan's market-operations counterparty universe, which is why they show up repeatedly in pages such as [[money-market/japan-money-market|Japan money market]] and [[money-market/jgb-repo-market-japan|JGB repo market in Japan]].

For FinWiki, this page is the business-model layer beneath [[financial-regulators/boj-monetary-policy]] and the three peer pages above.

## What Tanshi Do

The tanshi role is best described as money-market brokerage with adjacent market-data and back-office services. Public BoJ explanatory material on the call market and on market operations treats tanshi as the specialist intermediary class for short-term yen funding, distinct from banks (which are deposit-taking) and from securities firms (which are dealer-principals).

| Function | Description | FinWiki anchor |
|---|---|---|
| Call market intermediation | Match overnight and term, uncollateralized and collateralized, call lenders and borrowers across the interbank network. | [[money-market/call-market-structure]] |
| JGB / GC repo intermediation | Broker secured short-term funding against JGB collateral; sit alongside dealer-to-dealer and dealer-to-buyside flows. | [[money-market/jgb-repo-market-japan]] |
| T-bill brokerage | Intermediate Treasury Discount Bill (国庫短期証券) flows between investors and dealers. | [[financial-regulators/local-bond-market]] |
| Securities financing | Broker securities lending / borrowing transactions, including cash-collateralized SBL adjacent to repo. | [[money-market/jgb-repo-market-japan]] |
| Market-information services | Provide reference rates, daily commentary, and screen / chat-based price discovery to subscribers. | (vendor-specific) |
| Adjacency to BoJ operations | Stand near the BoJ's operation counterparty universe and provide read-through on call-rate and repo conditions. | [[money-market/boj-open-market-operations]] |

The defining feature is that tanshi are intermediaries, not deposit takers. They do not run directional macro books in the way bank treasuries do, and they do not warehouse JGB inventory the way securities-firm dealer desks do. Revenue is commission / brokerage fees and data / information subscriptions, not net interest margin or trading P&L.

## The Three Firms and Their Differentiation

After decades of consolidation, three tanshi companies remain. Their core brokerage functions overlap heavily; the differentiation is in shareholder lineage, adjacent product lines, and historical footprint.

| Firm | FinWiki entity | Lineage / positioning |
|---|---|---|
| 東京短資 (Tokyo Tanshi) | [[financial-regulators/tokyo-tanshi]] | Long-established Tokyo money-market broker, historically the largest of the three by call-market presence; serves the full short-rate / repo / T-bill stack. |
| セントラル短資 (Central Tanshi) | [[financial-regulators/central-tanshi]] | Money-market broker with a sister entity in the FX margin / retail-flow space (セントラル短資FX), giving the group a broader public-facing footprint than pure interbank tanshi peers. |
| 上田八木短資 (Ueda Yagi Tanshi) | [[financial-regulators/ueda-yagi-tanshi]] | Result of the Ueda Tanshi / Yagi Tanshi merger; part of the wider Ueda group, with corporate adjacencies into bullion / precious metals (Ueda Harlow / Ueda Bullion) and into other broking lines. |

Each company's own corporate site (tokyotanshi.co.jp, central-tanshi.com, ueda-net.co.jp/yagi/) is the right starting source for current product menus and group structure. The exact league-table ranking among the three changes year to year and should not be asserted from secondary sources without checking each firm's "会社案内" / "事業案内" pages.

## Relationship to BoJ Open Market Operations

Tanshi companies are not the only conduit between the BoJ and the market — the BoJ's own counterparty lists for [[money-market/boj-open-market-operations|open market operations]] are dominated by banks, securities firms, trust banks, and (for some operations) tanshi companies themselves. What tanshi add is:

- **Brokered price discovery**: when the BoJ supplies or absorbs funds, the resulting reserve-balance and call-rate effects propagate through brokered call quotes that tanshi screens publish, which is one of the channels through which the broader market reads operation results.
- **Counterparty / signal adjacency**: tanshi firms have historically appeared as counterparties for certain BoJ funds-supplying and funds-absorbing operations and as eligible participants in the operational infrastructure around them. The current eligible-counterparty lists are maintained on the BoJ's "Money Market" / market operations pages and should be checked directly rather than inferred.
- **Transmission for normalization**: post-March-2024, as the [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] framework shifted away from negative rates and YCC, the uncollateralized overnight call market regained meaning as an observable transmission surface. Tanshi brokerage flows are part of how that surface is observed in practice.

In short, tanshi sit one step away from policy implementation: not the institutions setting the rate, but the institutions whose brokered prints and screens make the rate visible.

## Fee / Revenue Model

By design, tanshi companies are commission earners, not balance-sheet risk takers:

- Revenue is dominated by **brokerage commissions** on matched call, repo, T-bill, and securities-financing transactions.
- A second leg is **information / data services** (reference rates, market commentary, screen subscriptions) sold to financial-institution subscribers.
- A third leg is **adjacent group businesses** — FX margin trading at the Central Tanshi group, bullion / metals at the Ueda Yagi group — which sit in sister entities rather than inside the core tanshi book.
- There is no large proprietary trading book of the kind seen at securities-firm dealer desks. The model is structurally low-risk-capital per unit of revenue, but highly sensitive to **transaction volume in the underlying markets** — which is the point most exposed to BoJ policy regime.

This commission-only design is why tanshi P&L tends to compress when the BoJ flattens money-market activity (NIRP, deep QQE, YCC) and to recover when short-rate normalization revives call-market and repo volumes.

## Historical Context

The pre-1990s landscape had many more tanshi houses. Decades of money-market structural change — falling overnight call volumes during prolonged ZIRP / NIRP / QQE / YCC phases, the rise of bank-treasury direct flows, and broader fee-business consolidation — pushed the sector through repeated mergers down to today's three-firm structure. The Ueda Yagi name itself encodes one of those mergers (Ueda Tanshi + Yagi Tanshi), and each surviving group has absorbed business lines from predecessor firms.

The right way to read this history is not "decline" but "concentration": three firms now run what was previously a fragmented brokerage layer, and they have diversified into adjacent broking and data businesses to offset the secular shrinkage of pure call-market volume.

## Regulatory Framing

Tanshi companies are private-sector financial firms regulated under Japan's financial-instruments framework. In practical terms:

- They operate as **money-market brokers / dealers** under the Financial Instruments and Exchange Act (金融商品取引法 / FIEA), with the relevant Type 1 financial instruments business registration for the brokerage activity they conduct, supplemented by money-market-specific authorizations where applicable. The exact license footprint differs per firm and per product line and should be confirmed against each firm's corporate disclosures.
- They are subject to the FSA's supervision over financial instruments businesses, and to BoJ rules where they interact with central-bank operations or settlement systems.
- They do not take retail deposits and are not banks under the Banking Act. They are not deposit insurance institutions.

The route page for FinWiki's license taxonomy is [[financial-licenses/INDEX]]; the policy-framework route is [[financial-regulators/boj-monetary-policy]].

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market (market participants, operations, statistics surface).
- Bank of Japan: What are market operations?
- Bank of Japan: How have the Bank's guidelines for market operations changed?
- Tokyo Tanshi corporate site (会社案内 / 事業案内).
- Central Tanshi corporate site (会社案内 / 事業案内).
- Ueda Yagi Tanshi corporate site (会社案内 / 事業案内, Ueda group).
- Bank of Japan working paper on the uncollateralized overnight call market's money-market adjustment role.
