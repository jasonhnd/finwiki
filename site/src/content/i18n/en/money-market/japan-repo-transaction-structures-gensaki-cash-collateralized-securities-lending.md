---
source: money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending
source_hash: 58564395aead7d5e
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Japan repo transaction structures: gensaki vs cash-collateralized securities lending"
translated_at: 2026-06-05T00:00:00.000Z
---
# Japan repo transaction structures: gensaki vs cash-collateralized securities lending

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] for the market-level overview it drills into, [[money-market/japan-uncollateralized-vs-collateralized-call-market|uncollateralized vs collateralized call market]] for the secured-vs-unsecured boundary, and route securities-lending overlap to [[securities/japan-stock-lending-market-route|the stock-lending market route]]. The clearing layer is [[securities/japan-securities-clearing-corp|JSCC]].

## TL;DR

In Japan the word "repo" (レポ) is an umbrella for two legally distinct contract forms that both achieve secured short-term funding against bonds:

- **Gensaki (現先 / 買戻条件付売買)**: a sale-and-repurchase transaction — securities are sold with a simultaneous agreement to repurchase them at a fixed price on a future date. Economically a collateralized loan, legally a pair of outright trades.
- **Cash-collateralized securities lending (現金担保付債券貸借), historically called *gentan* repo**: a securities loan where the borrower posts cash as collateral and pays / receives a lending fee or rebate. Legally a lending agreement, not a sale.

Both can be **GC (general collateral)** funding trades or **SC (special collateral)** issue-specific trades — that overlay is covered in the [[money-market/jgb-repo-market-japan|repo market overview]]. For FinWiki, the key reading rule is that the *legal form* (gensaki vs cash-collateralized lending) and the *collateral specificity* (GC vs SC) are two independent axes, and Japanese repo data mixes both.

## The Two Legal Forms

| Dimension | Gensaki (現先) | Cash-collateralized securities lending (現金担保付債券貸借) |
|---|---|---|
| Legal nature | Sale with repurchase agreement (two outright trades). | Securities loan secured by cash collateral. |
| Pricing expression | Repo rate embedded in the start / end price difference. | Lending fee (貸借料) or rebate rate on the cash collateral. |
| Cash leg | Buyer pays cash for the bond; reverses at maturity. | Cash borrower posts cash as collateral against the borrowed bond. |
| Documentation | Standard agreement for bond repurchase transactions; aligns with global GMRA-style master agreements for the updated form. | Bond lending agreement with cash-collateral terms. |
| Historical role | The conventional Japanese repurchase form. | Invented in 1989 to deliver repo economics under a *lending* agreement and avoid the then-applicable securities transaction tax. |

The cash-collateralized lending form (gentan) became dominant precisely because it sidestepped the securities transaction tax that applied to outright sales. After the transaction tax was abolished and the repo documentation framework was modernized, an updated "new gensaki" (新現先) form was promoted to align Japanese practice with international repo standards (close-out netting, margining, substitution). Both forms remain in active use, which is why Japan's repo market is read as one economic market with two contract rails.

## New Gensaki vs Older Practice

The "new gensaki" (新現先) reform mattered because the older Japanese repurchase practice lacked features standard in global repo:

- **Margining / mark-to-market**: variation-margin exchange to manage collateral value moves.
- **Close-out netting**: enforceable netting on counterparty default.
- **Substitution**: the ability to swap collateral during the trade.
- **Subsequent collateral allocation**: a basket-style allocation where a group of issues, rather than a single named issue, backs the trade — the GC-funding workhorse.

These features brought Japanese gensaki closer to GMRA-documented international repo, which matters for cross-border participation and for how dealer balance sheets and [[derivatives/japan-irs-market|rate-derivative]] hedging books fund JGB inventory.

## GC and SC Across Both Forms

The general-collateral vs special-collateral distinction (detailed in the [[money-market/jgb-repo-market-japan|repo overview]]) applies to *both* legal forms:

| | GC (general collateral) | SC (special collateral) |
|---|---|---|
| Purpose | Cash funding; any acceptable issue. | Borrowing a specific JGB issue. |
| Rate signal | Broad funding cost; tracks the short-rate environment. | Issue specialness; a rich SC issue can trade special (lower repo rate) when in high demand. |
| Both forms | A GC trade can be a gensaki or a cash-collateralized loan. | An SC trade can likewise be either form. |

Reading stress therefore requires checking *which axis* moved: a GC-wide funding squeeze is a different signal from one JGB issue going special in SC.

## Settlement and Clearing

| Element | Reading |
|---|---|
| Settlement | JGB legs settle through the central JGB book-entry and funds-transfer plumbing; see [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET FTS / RTGS settlement]] for the cash-and-securities DVP rail. |
| Settlement cycle | Japanese JGB cash and repo settlement operates on a shortened cycle (the market moved to T+1 for outright JGB and to a correspondingly shortened repo cycle), which compresses fails risk and intraday liquidity timing. |
| Central clearing | JGB repo can be novated to [[securities/japan-securities-clearing-corp|JSCC]] (the former JGBCC function), which assumes obligations and mutualizes counterparty risk for cleared JGB and JGB-repo trades. |
| Intermediation | [[money-market/tanshi-company-business-model|Tanshi companies]] and [[financial-regulators/japan-securities-finance|Japan Securities Finance]] intermediate bond repo and gensaki alongside dealer desks. |

## Why This Matters for FinWiki

- **Data interpretation**: BoJ securities-financing statistics aggregate repo and cash-collateralized securities lending after adjusting for lending fees / rebate rates. A headline "repo" balance therefore blends both legal forms.
- **Cross-market read**: the repo rate is the secured funding cost that sits beside the unsecured [[money-market/call-market-structure|call rate]]; the GC-repo-vs-call spread is a watched funding signal.
- **Collateral transmission**: this layer connects [[financial-regulators/boj-monetary-policy|BoJ monetary policy]], JGB market functioning, and dealer balance-sheet capacity. The BoJ Securities Lending Facility interacts with SC scarcity specifically.

## Reading Checklist

1. Separate the *legal form* (gensaki vs cash-collateralized lending) from the *collateral axis* (GC vs SC); they are independent.
2. When a source says "gentan," read it as the cash-collateralized securities-lending form; "shin-gensaki / new gensaki" is the modernized repurchase form.
3. Do not treat a repo rate as the uncollateralized call rate — they are different instruments and different risk.
4. For specialness, look at SC repo and securities-lending-facility usage, not GC funding levels.
5. Cite the specific BoJ securities-financing release when quoting current balances; the numbers are time-specific.

## JapanFG Relevance

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] is a core bond-repo and gensaki intermediary and securities-finance specialist.
- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]] broker bond repo adjacent to call and CP activity.
- Securities firms [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]], [[securities-firms/mizuho-securities]], and [[securities-firms/mufg-mums]] fund JGB inventory through gensaki and cash-collateralized lending.
- Megabanks [[megabanks/mufg]], [[megabanks/smfg]], and [[megabanks/mizuho-fg]] are exposed through collateral management and reserve balances.
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] drives the short-rate environment and the collateral framework underneath both forms.

## Boundary Cases

- **Gensaki vs cash-collateralized lending**: sale-and-repurchase vs cash-secured securities loan; same economics, different legal structure and pricing convention.
- **Repo vs collateralized call**: both secured, but repo is a securities-financing transaction (sale-repurchase or cash-secured loan) while collateralized call is secured interbank lending pledging collateral; see [[money-market/japan-uncollateralized-vs-collateralized-call-market|the call segmentation page]].
- **GC vs SC**: funding-driven vs issue-driven; an overlay on top of either legal form.
- **Repo vs equity stock loan**: JGB repo and equity securities lending are different markets; equity stock loan routes to [[securities/japan-stock-lending-market-route|the stock-lending route]].

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/japan-uncollateralized-vs-collateralized-call-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[money-market/boj-net-funds-transfer-system-rtgs-settlement]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[derivatives/japan-irs-market]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/japan-securities-finance]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: explanation of Statistics on Securities Financing Transactions in Japan (repo and cash-collateralized securities lending scope, lending-fee / rebate adjustment).
- Bank of Japan: Money Market overview surface.
- ICMA: Guide to Asia Repo Markets — Japan (gensaki, gentan / cash-collateralized lending, new gensaki, GC / SC, documentation).
- Japan Securities Finance Co.: Bond Repo and Gensaki Transactions business description.
- Japan Securities Clearing Corporation: JGB clearing products (obligation assumption for JGB and JGB-repo trades).
