---
source: trade/incoterms-2020-trade-terms-framework
source_hash: 53ac46c0c66ecbbd
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Incoterms 2020 — the ICC trade-terms framework"
translated_at: 2026-06-05T00:00:00.000Z
---
# Incoterms 2020 — the ICC trade-terms framework

## Wiki route

This entry sits under [[trade/INDEX|trade INDEX]] and pairs directly with [[trade/letter-of-credit-documentary-mechanism|the letter of credit / documentary credit mechanism]], because the Incoterms rule a contract chooses determines which transport and insurance documents an L/C must call for. It also connects to the cargo risk-transfer layer in [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]] and to the broader Japan export apparatus mapped in [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]].

## TL;DR

**Incoterms** (International Commercial Terms) are a set of standardised three-letter trade terms published by the **International Chamber of Commerce (ICC)**. They allocate, between seller and buyer, three things for the delivery of goods: **(1) who arranges and pays for carriage, (2) where risk of loss or damage passes, and (3) who handles export / import formalities and costs.** The current edition is **Incoterms 2020**, comprising **11 rules**.

What Incoterms do **not** do is equally important: they are not a contract of sale, they do **not** transfer title / ownership, they do not set the price or payment method, and they do not govern breach remedies. They define the delivery and cost / risk interface only — the rest stays in the sale contract.

## The 11 rules of Incoterms 2020

The rules split into two families by mode of transport.

### Rules for any mode (including multimodal)

| Rule | Name | Risk passes (broadly) |
|---|---|---|
| EXW | Ex Works | At seller's premises; buyer does almost everything |
| FCA | Free Carrier | When goods are handed to the carrier named by the buyer |
| CPT | Carriage Paid To | When handed to the first carrier; seller pays carriage to destination |
| CIP | Carriage and Insurance Paid To | As CPT, plus seller buys insurance (higher cover under 2020) |
| DAP | Delivered at Place | When placed at buyer's disposal at the named place, not unloaded |
| DPU | Delivered at Place Unloaded | When unloaded at the named place by the seller |
| DDP | Delivered Duty Paid | At destination, with seller bearing import duties / clearance |

### Rules for sea and inland waterway only

| Rule | Name | Risk passes (broadly) |
|---|---|---|
| FAS | Free Alongside Ship | When goods are placed alongside the vessel at the named port |
| FOB | Free On Board | When goods are on board the vessel at the named port |
| CFR | Cost and Freight | On board; seller pays freight to destination port |
| CIF | Cost, Insurance and Freight | As CFR, plus seller buys insurance (minimum cover under 2020) |

A recurring practical error is using a sea-only term (FOB, CIF) for containerised cargo handed over at an inland terminal — where **FCA / CIP** are the correct rules, because the seller loses control of the container before it reaches the ship's rail.

## The cost / risk transfer point — the core idea

Every Incoterms rule answers two separate questions that users often conflate:

- **Where does risk transfer?** The point beyond which loss or damage to the goods is the buyer's problem.
- **Up to where does the seller bear cost?** Under the "C" terms (CPT, CIP, CFR, CIF), the seller **pays carriage to the destination** but **risk still passes early** (at handover / on board). This split — seller pays freight onward, but buyer carries the risk in transit — is the single most misunderstood feature of the framework.

Reading along the alphabet from EXW to DDP roughly tracks **increasing seller obligation**: EXW puts almost everything on the buyer; DDP puts almost everything on the seller, including import clearance.

## What changed from Incoterms 2010 to 2020

The 2020 revision kept the same count (11 rules) but made several substantive changes:

1. **DAT renamed to DPU.** "Delivered at Terminal" became "Delivered at Place Unloaded," to make clear the destination need not be a terminal — it can be any place — and DPU remains the only rule where the **seller unloads** at destination. (DAP is the not-unloaded counterpart.)
2. **Different insurance cover levels for CIP vs CIF.** Under 2020, **CIP** requires the seller to obtain higher cover — **Institute Cargo Clauses (A)** ("all risks," subject to exclusions) — while **CIF** retains the minimum, **Institute Cargo Clauses (C)**. Parties can always agree a different level, but the defaults now diverge.
3. **FCA optional on-board bill of lading.** FCA was revised so the parties can agree the buyer instructs the carrier to issue an **on-board bill of lading** to the seller after loading — important where an L/C requires an on-board B/L but delivery is FCA.
4. **Own means of transport recognised.** FCA, DAP, DPU, and DDP now expressly contemplate carriage by the seller's or buyer's **own transport**, not only via a third-party carrier.
5. **Security-related obligations and costs made explicit**, allocated within each rule.
6. **Consolidated cost listing.** All costs for a rule are now collected at article **A9/B9**, so users can see the full cost split for a chosen term at a glance.

## Interaction with letters of credit and trade finance

Incoterms and documentary settlement are tightly coupled. The chosen rule dictates **which documents exist and who can present them**:

- Under **CIF / CIP**, the seller procures insurance, so a documentary credit will call for an **insurance document** in the seller's presentation. Under **FOB / FCA**, insurance is the buyer's concern and is normally **not** a credit-required document from the seller.
- Under sea terms, the **bill of lading** (often an on-board B/L) is the key document of title an L/C demands; the FCA on-board-B/L change in 2020 exists precisely to reconcile FCA delivery with that L/C requirement.
- The delivery point fixes the **latest shipment date** and the document that evidences shipment — both core fields in a documentary credit governed by [[trade/letter-of-credit-documentary-mechanism|UCP 600]].

Because of this, an Incoterms rule should be chosen **in tandem** with the payment method. A mismatched pair (e.g., a seller agreeing FOB but a credit demanding an insurance document) is a classic source of L/C discrepancies and of the lighter friction seen under a [[trade/documentary-collection-vs-letter-of-credit|documentary collection]].

## What Incoterms deliberately leave out

| Question | Where it actually lives |
|---|---|
| Transfer of **title / ownership** | The sale contract and applicable property law — **not** Incoterms |
| **Price** and **payment method** | The sale contract (and the L/C / collection terms) |
| **Breach, remedies, dispute resolution** | The sale contract and its governing law |
| **Tariffs / customs duty rates** | National customs law of importer / exporter |
| Detailed **insurance terms** beyond the CIF / CIP minimums | The cargo policy itself — see [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]] |

Treating Incoterms as a complete trade contract is the most common conceptual mistake; they are a **standardised module** that a contract references, not the contract itself.

## Where this sits in the public trade-knowledge stack

Incoterms are, like UCP 600, an **ICC-maintained voluntary standard** rather than a treaty or statute — their authority comes from near-universal commercial adoption and from being incorporated by reference in sale contracts. They form one leg of a recurring triad in cross-border trade: **delivery terms (Incoterms)**, **payment mechanism (documentary credit or [[trade/documentary-collection-vs-letter-of-credit|documentary collection]])**, and **risk cover (cargo insurance plus, on the financing side, export-credit insurance such as [[policy-finance/nexi-export-credit-insurance-products|NEXI's products]])**. For how the financing and insurance legs are organised in Japan specifically, route through [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] and the wider [[policy-finance/INDEX|policy-finance INDEX]].

## Related

- [[trade/INDEX|trade INDEX]]
- [[trade/letter-of-credit-documentary-mechanism|letter of credit / documentary credit mechanism]]
- [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC comparison]]
- [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- ICC — Incoterms 2020: https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/
- ICC Academy — Incoterms 2020 vs 2010, what changed: https://academy.iccwbo.org/incoterms/article/incoterms-2020-vs-2010-whats-changed/
- U.S. Department of Commerce (trade.gov) — Know Your Incoterms: https://www.trade.gov/know-your-incoterms
- Wikipedia — Incoterms (rule list and edition history): https://en.wikipedia.org/wiki/Incoterms
