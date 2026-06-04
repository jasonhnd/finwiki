---
source: trade/documentary-collection-vs-letter-of-credit
source_hash: 0c1ef61bfb4a4012
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Documentary collection vs letter of credit — trade settlement methods compared"
translated_at: 2026-06-05T00:00:00.000Z
---
# Documentary collection vs letter of credit — trade settlement methods compared

## Wiki route

This entry sits under [[trade/INDEX|trade INDEX]] and is the direct comparison partner to [[trade/letter-of-credit-documentary-mechanism|the letter of credit / documentary credit mechanism]]. Both are document-driven settlement methods, but they differ sharply in who carries risk. Read alongside [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] (which fixes the delivery point the documents evidence) and, for the financing / insurance layer that sits beside settlement, [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]] and [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]].

## TL;DR

A **documentary collection** is a settlement method in which banks act as **agents that route shipping documents** from exporter to importer against payment or against acceptance of a draft — **without** any bank giving a payment guarantee. It is governed by the ICC's **URC 522** (Uniform Rules for Collections). It is cheaper and simpler than a letter of credit, but the exporter keeps the buyer-default risk: the banks only handle paper, they do not promise to pay.

The contrast with the **letter of credit (L/C)** is the whole point. Under an L/C, a bank substitutes its own credit for the buyer's and undertakes to pay against complying documents (see [[trade/letter-of-credit-documentary-mechanism|the documentary credit mechanism]]). Under a collection, **no bank undertakes anything** beyond following instructions. The choice between them is essentially a trade-off of **cost vs security**.

## What a documentary collection is

In a documentary collection, the exporter ships the goods first, then hands the document set (and usually a **bill of exchange / draft**) to its bank with collection instructions. The banks pass the documents downstream and release them to the importer only on the agreed condition. Under URC 522, "collection" means the handling by banks of documents in accordance with instructions, in order to obtain payment and/or acceptance, or to deliver documents against payment / acceptance, or on other terms.

The key structural fact: the bank is a **conduit and agent**, not a guarantor. If the importer refuses to pay or accept, the banks are not obliged to make the exporter whole — they simply act on the next instruction (protest, warehouse, return, or re-present).

## The two collection types: D/P and D/A

| Type | Release condition | Buyer financing | Exporter risk profile |
|---|---|---|---|
| **D/P** — Documents against Payment | The collecting bank releases documents only when the importer **pays** | None — pay now to get documents | Lower: goods not released without payment, but buyer may still walk away, leaving goods stranded |
| **D/A** — Documents against Acceptance | The collecting bank releases documents when the importer **accepts** a time draft (promises to pay at a future date) | Yes — buyer gets goods now, pays later | Higher: buyer holds goods **before** paying; on a defaulted accepted draft the exporter has lost the goods and holds only a claim |

D/P is "cash against documents"; D/A grants the buyer a financing period but exposes the seller to non-payment after the goods have already been handed over. The acceptance under D/A creates a negotiable obligation the exporter may sometimes discount, but the credit risk remains commercial.

## The parties under URC 522

| Party | Role |
|---|---|
| Principal | The exporter / seller who entrusts the collection to its bank |
| Remitting bank | The exporter's bank, which sends documents and instructions onward |
| Collecting bank | Any bank, other than the remitting bank, involved in the collection |
| Presenting bank | The collecting bank that actually presents documents to the importer |
| Drawee | The importer to whom presentation is made (who pays or accepts) |

Crucially, **none of these banks guarantees payment**. This is the structural difference from the L/C chain, where the issuing (and optionally confirming) bank carries a payment undertaking.

## Side-by-side comparison

| Dimension | Documentary collection (URC 522) | Letter of credit (UCP 600) |
|---|---|---|
| Bank payment undertaking | **None** — banks are agents only | **Yes** — issuing bank (and confirming bank) undertake to pay |
| Governing ICC rules | URC 522 | UCP 600 (plus ISBP, eUCP) |
| Primary risk-bearer | The **exporter** (buyer-default risk remains) | The **bank** that issued / confirmed, against complying documents |
| Cost | Lower bank fees | Higher (issuance, advising, confirmation, discrepancy handling) |
| Speed / complexity | Simpler, faster to set up | More documentation and steps |
| Document examination | Banks check documents are **present per instructions**, not for strict compliance to a credit | Banks examine for **strict compliance** to the credit terms |
| Typical use | Established relationships, moderate risk, lower-value or repeat trade | New / weak counterparties, higher-risk corridors, where seller needs a bank promise |

A bank handling a collection does **not** perform the strict-compliance document examination that defines an L/C; it checks that the documents listed in the instruction are there and acts accordingly. That lighter duty is part of why collections are cheaper — and why they give the exporter less protection.

## The settlement-method spectrum

Documentary collection and the L/C are two points on a wider continuum that trades off seller security against buyer convenience and cost:

1. **Cash in advance** — buyer pays first. Maximum seller security, minimum buyer security.
2. **Letter of credit** — bank undertaking against documents. Strong seller protection at a price; see [[trade/letter-of-credit-documentary-mechanism|the documentary credit mechanism]].
3. **Documentary collection (D/P, then D/A)** — banks route documents, no guarantee. Middle ground.
4. **Open account** — seller ships and invoices, buyer pays later. Cheapest, highest seller risk.

As counterparties build trust, trade tends to migrate **down** this list (toward open account), often backed by **export-credit insurance** instead of a bank undertaking. In Japan that insurance layer is provided by NEXI — see [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]] — and sits within the export apparatus mapped in [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]].

## How the choice is actually made

The settlement method is negotiated together with the delivery term and the financing plan:

- **Counterparty risk.** Unknown or high-risk buyer / country → lean toward a confirmed L/C; established relationship in a stable market → a collection or open account may suffice.
- **Cost sensitivity.** L/C fees can be material on thin-margin goods; collections cut that cost where the seller can tolerate the residual risk.
- **Financing need.** D/A and usance L/Cs both grant the buyer time; the seller chooses how much default risk to accept for that accommodation.
- **Document / delivery fit.** The [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] rule determines which documents (notably the bill of lading and any insurance document) are routed, which in turn shapes whether a collection or an L/C is workable.
- **Interbank settlement.** Whichever method is used, the cash legs ultimately clear through correspondent banking and national payment systems — for one major market's clearing layer see [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]].

## Limitations of documentary collections

- **No payment guarantee.** The exporter's protection is that documents (and thus, under sea terms, control of the goods) are withheld until payment or acceptance — but a buyer can still refuse, stranding goods in a foreign port.
- **Goods-already-shipped exposure.** Because the seller ships before settlement, refusal means dealing with goods far from home (storage, resale, return) — costs that can exceed the margin.
- **D/A is materially riskier.** Releasing documents against a mere acceptance hands over the goods before payment; the seller then relies on the buyer's promise and on commercial-law enforcement.
- **Mitigation.** Sellers often pair collections with **cargo insurance** ([[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]]) and **export-credit insurance** to cover the buyer-default risk the banks decline to take.

## Related

- [[trade/INDEX|trade INDEX]]
- [[trade/letter-of-credit-documentary-mechanism|letter of credit / documentary credit mechanism]]
- [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020 trade-terms framework]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC comparison]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]]
- [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- ICC — URC 522, Uniform Rules for Collections: https://2go.iccwbo.org/urc-522-uniform-rules-for-collections-config-1+book_version-Book/
- Corporate Finance Institute — Uniform Rules for Collections (URC) explained: https://corporatefinanceinstitute.com/resources/commercial-lending/uniform-rules-for-collections-urc/
- ICC — Trade finance overview: https://iccwbo.org/business-solutions/trade-finance/
- U.S. Department of Commerce (trade.gov) — Methods of Payment in international trade: https://www.trade.gov/methods-payment
