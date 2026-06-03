---
title: "Letter of credit (documentary credit) — the trade-settlement mechanism"
aliases:
  - "letter-of-credit-documentary-mechanism"
  - "信用状（信用状取引）"
  - "しんようじょう"
  - "documentary credit"
  - "L/C mechanism"
  - "UCP 600 documentary credit"
domain: trade
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [trade, trade-finance, letter-of-credit, ucp-600, settlement, icc]
status: active
sources:
  - "https://iccwbo.org/business-solutions/trade-finance/"
  - "https://2go.iccwbo.org/ucp-600-uniform-rules-for-documentary-credits-config-1+book_version-Book/"
  - "https://en.wikipedia.org/wiki/Uniform_Customs_and_Practice_for_Documentary_Credits"
  - "https://academy.iccwbo.org/international-trade/article/documentary-credits-rules-guidelines-terminology/"
  - "https://iccwbo.org/news-publications/policies-reports/eucp-version-2-1-icc-uniform-customs-and-practice-for-documentary-credits/"
---

# Letter of credit (documentary credit) — the trade-settlement mechanism

## Wiki route

This entry sits under [[trade/INDEX|trade INDEX]] and is the trade-finance counterpart to the institutional pages anchored on [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. Read it alongside [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] (which defines the delivery point a credit's documents must evidence) and [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]] (the lighter, bank-intermediated alternative). For the risk-transfer layer that sits beside it, see [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]] and the export-credit cover in [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]].

## TL;DR

A **letter of credit (L/C)**, formally a **documentary credit**, is a bank's irrevocable undertaking to pay a seller (the *beneficiary*) a stated amount, provided the seller presents a stipulated set of documents that comply on their face with the credit's terms. It substitutes a bank's creditworthiness for the buyer's, so that an exporter shipping to a counterparty it cannot easily assess is paid against documents rather than against trust.

The mechanism is governed by a private rulebook, the ICC's **UCP 600** (Uniform Customs and Practice for Documentary Credits), which banks worldwide voluntarily incorporate by reference. Two doctrines define the instrument: the **independence (autonomy) principle** — the credit is a transaction separate from the underlying sale contract — and the **doctrine of strict compliance** — banks examine documents only, and pay only against a complying presentation.

## What problem it solves

Cross-border trade has a structural trust gap. The exporter wants payment before parting with goods; the importer wants goods (or proof of shipment) before parting with money; and neither can cheaply enforce a judgment in the other's jurisdiction. A documentary credit closes the gap by inserting banks as trusted intermediaries:

- The **importer's bank** promises to pay if documents comply, so the exporter no longer relies on the importer's good faith.
- The exporter ships and assembles documents (invoice, transport document, insurance, certificates) that *represent* the goods.
- Payment flows against **documents**, not against the goods themselves or the performance of the sale contract.

This is why the L/C is described as a documentary mechanism: the bank deals in paper (or electronic records), and the goods are abstracted into a document set.

## The parties

| Party | Role |
|---|---|
| Applicant | The buyer / importer who instructs its bank to issue the credit |
| Issuing bank | The buyer's bank that issues the credit and bears the primary payment undertaking |
| Beneficiary | The seller / exporter entitled to draw under the credit |
| Advising bank | A bank (often in the seller's country) that authenticates and passes the credit to the beneficiary |
| Confirming bank | A bank that adds its **own** undertaking to honour, on top of the issuing bank's (used when the issuing bank or its country is a credit risk) |
| Nominated bank | A bank authorised to pay, accept, or negotiate under the credit |
| Reimbursing bank | A bank that reimburses a paying / negotiating bank on behalf of the issuing bank |

The **confirmation** layer is what lets an exporter convert distant or weak issuing-bank risk into the risk of a bank in its own market — a core reason confirmed credits remain in demand for emerging-market trade.

## The lifecycle

1. **Sale contract** — buyer and seller agree the goods, price, an [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] rule, and that payment will be by documentary credit.
2. **Application** — the buyer (applicant) instructs the issuing bank, specifying amount, expiry, the documents required, and the latest shipment date.
3. **Issuance** — the issuing bank issues the credit and transmits it, typically through interbank messaging, to an advising bank.
4. **Advising / confirmation** — the advising bank authenticates the credit and passes it to the beneficiary; if requested and willing, it (or another bank) confirms.
5. **Shipment** — the seller ships and obtains the transport document.
6. **Presentation** — the seller presents the document set to the nominated / confirming bank within the credit's validity and presentation period.
7. **Examination** — the bank examines documents against the credit, UCP 600, and ICC document-examination practice. Under UCP 600 a bank has a maximum of **five banking days** after presentation to decide whether documents comply.
8. **Honour or refusal** — if compliant, the bank honours (pays, incurs a deferred-payment undertaking, or accepts a draft); if discrepant, it may refuse, giving a single notice of all discrepancies, and hold or return the documents.
9. **Reimbursement & document release** — the issuing bank reimburses up the chain and releases documents to the applicant, who uses them to claim the goods from the carrier.

## Independence and strict compliance — the two governing doctrines

These two doctrines are what make the L/C function, and what most often surprise first-time users:

- **Independence (autonomy).** The credit is "separate from the sale or other contract on which it may be based." A bank's duty to pay turns on document compliance, **not** on whether the goods were actually conforming or even shipped. A buyer's dispute over goods quality does not, by itself, relieve the bank of its undertaking. This is why fraud is essentially the only narrow exception courts recognise.
- **Strict compliance.** Banks pay against documents that comply *on their face* with the credit terms and with each other. Trivial-looking mismatches (a misspelling, a missing stamp, an inconsistency between invoice and transport document) can make a presentation discrepant. The standard is documentary, not a "substantial performance" test of the underlying trade.

The practical consequence is that **discrepancies are the dominant operational risk** in L/C use. A large share of first presentations contain discrepancies, which then require the applicant's waiver, amendment, or re-presentation — eroding the certainty the instrument is meant to provide.

## The rulebook: UCP 600, ISBP, and eUCP

The L/C is not primarily a creature of statute; it runs on a privately maintained, contractually incorporated rule set published by the **International Chamber of Commerce (ICC)**:

| Instrument | What it governs |
|---|---|
| UCP 600 | The core rules for documentary credits (in force since 2007); applies when the credit states it is subject to UCP 600 |
| ISBP | International Standard Banking Practice — ICC guidance on **how** documents are examined, read together with UCP 600 |
| eUCP (v2.1, in force July 2023) | A supplement enabling **electronic** presentation of records, used alongside UCP 600 for digital or mixed presentations |
| ISP98 | A separate rule set typically used for **standby** letters of credit (which function more like guarantees) |
| URDG 758 | ICC rules for **demand guarantees** — a related but distinct instrument |

Because the rules are incorporated by reference rather than imposed by law, their authority comes from near-universal banking adoption. This makes the L/C one of the clearest examples of a globally harmonised, industry-governed financial standard — a contrast with the state-anchored frameworks documented across [[policy-finance/INDEX|policy-finance]].

## Common credit variants

| Variant | Distinguishing feature |
|---|---|
| Irrevocable | Cannot be amended or cancelled without all-party consent (UCP 600 credits are irrevocable by default) |
| Confirmed | A second bank adds its own undertaking to honour |
| Sight | Payable on a complying presentation at sight |
| Usance / deferred | Payable a defined period after presentation or shipment (gives the buyer financing time) |
| Transferable | The beneficiary may transfer the right to draw to one or more second beneficiaries (used by intermediaries / traders) |
| Back-to-back | A separate credit issued on the strength of an incoming master credit (an intermediary structure) |
| Revolving | Reinstates automatically for repeated shipments under one facility |
| Red clause | Permits a pre-shipment advance to the beneficiary |
| Standby | Pays only if the applicant **fails** to perform — economically a guarantee, usually under ISP98 |

## Where the L/C sits in the trade-finance and settlement stack

The L/C is one settlement method among several, distinguished by how much bank risk substitution it provides and at what cost:

- **Open account** — seller ships and invoices; cheapest, highest seller risk.
- **Documentary collection** — banks route documents against payment or acceptance but give **no** payment undertaking; see [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]].
- **Documentary credit (L/C)** — bank undertaking against documents; higher cost, strong seller protection.
- **Advance payment** — buyer pays first; highest buyer risk.

Interbank legs of L/C settlement ultimately clear through correspondent banking and payment-system rails; for the domestic clearing layer in one major market see [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]. The instrument also routinely pairs with **export-credit insurance** and policy-bank financing — the Japanese version of that layer is mapped in [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] and [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]] — and with cargo cover described in [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]].

## Limitations and modern direction

- **Cost and friction.** Issuance, advising, confirmation, and discrepancy handling carry fees and delay; for trusted counterparties many traders have migrated to open account plus insurance.
- **Discrepancy risk.** The strict-compliance standard means clerical document errors, not trade disputes, are the most frequent cause of non-payment.
- **Fraud exception.** Independence protects banks, but documentary fraud is the recognised narrow exception — and a recurring concern in commodity finance.
- **Digitisation.** eUCP and broader trade-digitisation efforts (electronic transport records, legal recognition of electronic transferable records) aim to cut the paper burden, but adoption remains uneven across corridors.

## Related

- [[trade/INDEX|trade INDEX]]
- [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020 trade-terms framework]]
- [[trade/documentary-collection-vs-letter-of-credit|documentary collection vs letter of credit]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC comparison]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI export-credit insurance products]]
- [[policy-finance/oecd-export-credit-arrangement|OECD Export Credit Arrangement]]
- [[insurance/marine-insurance-and-pi-cover-market|marine cargo / P&I insurance]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure|Japan payment clearing and settlement infrastructure]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- ICC — Trade finance overview: https://iccwbo.org/business-solutions/trade-finance/
- ICC — UCP 600, Uniform Customs and Practice for Documentary Credits: https://2go.iccwbo.org/ucp-600-uniform-rules-for-documentary-credits-config-1+book_version-Book/
- ICC Academy — Documentary credits: rules, guidelines & terminology: https://academy.iccwbo.org/international-trade/article/documentary-credits-rules-guidelines-terminology/
- ICC — eUCP version 2.1: https://iccwbo.org/news-publications/policies-reports/eucp-version-2-1-icc-uniform-customs-and-practice-for-documentary-credits/
- Wikipedia — Uniform Customs and Practice for Documentary Credits (UCP 600 background): https://en.wikipedia.org/wiki/Uniform_Customs_and_Practice_for_Documentary_Credits
