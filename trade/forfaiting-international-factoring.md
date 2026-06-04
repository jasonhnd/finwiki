---
title: "フォーフェイティング・国際ファクタリング (forfaiting and international factoring) — selling trade receivables for cash"
aliases:
  - "trade/forfaiting-international-factoring"
  - "forfaiting-international-factoring"
  - "フォーフェイティング"
  - "国際ファクタリング"
  - "こくさいファクタリング"
  - "forfaiting"
  - "international factoring"
  - "export receivables finance"
  - "without recourse receivables purchase"
domain: trade
created: 2026-06-05
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2027-06-05
confidence: likely
tags: [trade, trade-finance, forfaiting, factoring, receivables, export-finance]
status: active
sources:
  - "https://iccwbo.org/business-solutions/trade-finance/"
  - "https://fci.nl/en/about-factoring"
  - "https://www.jetro.go.jp/en/"
  - "https://www.nexi.go.jp/en/"
---

# フォーフェイティング・国際ファクタリング (forfaiting and international factoring) — selling trade receivables for cash

## Wiki route

This entry sits under [[trade/INDEX|trade INDEX]] and covers the **receivables-finance** instruments an exporter uses to get paid *now* on a *later*-dated sale. Its same-domain peer is [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]] — those are *settlement* methods (how the buyer pays); forfaiting and factoring are *financing* methods (how the seller converts the resulting receivable to cash). The credit-risk cover they substitute for is the insurance in [[trade/nexi-trade-insurance-mechanism|the NEXI trade-insurance mechanism]]. For the in-house factoring arms of Japanese trading houses, cross into [[trading-company-finance/INDEX|trading-company-finance INDEX]] and [[trading-company-finance/itochu-finance|ITOCHU Finance]].

## TL;DR

When an exporter sells on **deferred-payment terms**, it holds a **receivable** — a right to be paid later — but needs cash now. **Factoring** and **forfaiting** both let the exporter **sell that receivable** to a finance provider at a discount, converting future payment into immediate liquidity and (in the **without-recourse** versions) offloading the buyer-default risk. The two differ in tenor and structure: **factoring** handles short-term, often whole-ledger trade receivables with services (collection, credit cover); **forfaiting** handles larger, longer, usually single transactions, typically backed by a negotiable instrument and always **without recourse**.

Both are "off-balance-sheet" liquidity tools: the receivable leaves the seller's books in a true sale, so the seller gets cash and risk transfer in one move.

## The core idea: a true sale of the receivable

The structural move is identical in both instruments — the exporter **sells** the receivable rather than borrowing against it:

1. Exporter ships and invoices on deferred terms (open account or an accepted draft).
2. Exporter sells the receivable to a factor/forfaiter at a **discount** (the financier's interest + fee + risk margin).
3. Exporter receives **cash now** (less the discount).
4. At maturity the **buyer pays the financier**, not the exporter.

If the sale is **without recourse**, the financier — not the exporter — eats a buyer default. That risk transfer is what distinguishes these from a simple receivables-backed loan, where the lender keeps recourse to the borrower.

## Factoring vs forfaiting

| Dimension | International factoring | Forfaiting |
|---|---|---|
| **Tenor** | Short-term (typically up to ~180 days) | Medium/long-term (months to years) |
| **Coverage** | Often the **whole ledger** / many ongoing receivables | Usually a **single transaction** or specific receivable |
| **Recourse** | With or without recourse | **Always without recourse** |
| **Instrument** | Open-account invoices | Usually a negotiable instrument (bill of exchange / promissory note), often bank-guaranteed (aval) |
| **Services bundled** | Yes — sales-ledger management, collection, credit protection | No — pure financing/risk transfer |
| **Typical use** | Repeat consumer/industrial goods exports | Capital-goods / project exports with long credit |
| **Disclosure to buyer** | Buyer usually notified (pays the factor) | Buyer aware; instrument is endorsed to the forfaiter |

The mental model: **factoring is an ongoing service relationship over a flow of small receivables**; **forfaiting is a one-off sale of a large, long, instrument-backed receivable**.

## How international (two-factor) factoring works

Cross-border factoring usually runs on a **two-factor model** to bridge the credit-assessment gap across borders:

| Party | Role |
|---|---|
| **Export factor** | The exporter's factor; advances cash against the receivable |
| **Import factor** | A factor in the buyer's country; assesses the buyer's credit and handles local collection |

The two factors operate under a correspondent framework (industry bodies such as **FCI** standardise the rules). The **import factor's** local knowledge prices the buyer risk that the export factor cannot assess from abroad — the same cross-border information asymmetry that makes export-credit insurance and the import side of [[trade/japan-customs-tariff-origin-clearance|customs clearance]] non-trivial.

## How forfaiting works

In a classic forfaiting deal the exporter sells capital goods on, say, 3–5-year credit, evidenced by a **series of promissory notes or accepted bills of exchange**, often carrying a bank **aval (guarantee)** from the buyer's bank. The exporter sells the whole series to a forfaiter **without recourse** and books the discounted cash. The forfaiter then holds the paper to maturity or sells it on a secondary market. The bank aval is what makes the long-dated paper sellable — it converts buyer risk into bank risk.

This is why forfaiting and the **letter of credit** are cousins: a **usance (deferred) L/C** or an **avalised draft** produces exactly the bank-backed, negotiable, future-dated instrument a forfaiter wants to buy (see [[trade/letter-of-credit-documentary-mechanism|the documentary credit mechanism]]).

## Where these sit relative to insurance and settlement

Receivables finance is one of three overlapping ways to handle deferred-payment risk; an exporter often combines them:

1. **Bank undertaking up front** — a confirmed/usance L/C ([[trade/letter-of-credit-documentary-mechanism|documentary credit]]) prevents the loss.
2. **Insurance** — [[trade/nexi-trade-insurance-mechanism|export-credit insurance]] indemnifies the loss after it happens, letting the seller trade on open account.
3. **Sale of the receivable** — factoring/forfaiting transfers both the **cash-flow timing** *and* (without recourse) the **default risk** to a financier in one true sale.

The choice among them is a cost/liquidity/risk trade-off layered on top of the **settlement-method** choice in [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]].

## The Japanese trading-house angle

Japan's **sōgō shōsha (general trading companies)** run large in-house **factoring** operations through their group-treasury arms — providing 一括ファクタリング (bulk factoring) and receivables finance to their trading subsidiaries and supplier networks. These inward-facing finance arms are documented in [[trading-company-finance/INDEX|trading-company-finance]], e.g. [[trading-company-finance/itochu-finance|ITOCHU Finance]] and [[trading-company-finance/mitsubishi-corp-finance|三菱商事フィナンシャルサービス]]. The mechanics there are the same receivables-true-sale idea applied at group scale.

## Boundary cases

- **True sale vs loan.** The off-balance-sheet benefit depends on the receivable genuinely leaving the seller's books; a "with recourse" structure is closer to secured borrowing than risk transfer.
- **Not the same as supply-chain finance.** Factoring/forfaiting is **seller-initiated** (the seller sells its receivable). Buyer-led reverse factoring is a distinct, payables-side programme — covered separately.
- **Discount ≠ free.** The cash-now comes at a discount reflecting interest, fee, and (without recourse) the financier's risk margin; on weak buyers/long tenors that margin can be material.

## Related

- [[trade/INDEX|trade INDEX]]
- [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]]
- [[trade/letter-of-credit-documentary-mechanism|letter of credit / documentary credit mechanism]]
- [[trade/nexi-trade-insurance-mechanism|NEXI trade-insurance mechanism]]
- [[trading-company-finance/INDEX|trading-company-finance INDEX]]
- [[trading-company-finance/itochu-finance|ITOCHU Finance]]
- [[trading-company-finance/mitsubishi-corp-finance|三菱商事フィナンシャルサービス]]
- [[INDEX|FinWiki index]]

## Sources

- ICC — Trade finance overview: https://iccwbo.org/business-solutions/trade-finance/
- FCI (Factors Chain International) — about factoring / two-factor model: https://fci.nl/en/about-factoring
- JETRO — trade-finance information portal: https://www.jetro.go.jp/en/
- NEXI — export-credit insurance context: https://www.nexi.go.jp/en/

> [!info] 校核状态
> confidence: likely. The true-sale structure, the factoring-vs-forfaiting distinctions (tenor, ledger vs single deal, recourse, instrument, bundled services), the two-factor international-factoring model, the aval/usance-L/C link, and the placement relative to insurance and settlement are public trade-finance institutional knowledge from ICC / FCI / JETRO. No firm-specific volumes or pricing are asserted; the trading-house factoring footprint is described as a function set, not a quantified snapshot.
