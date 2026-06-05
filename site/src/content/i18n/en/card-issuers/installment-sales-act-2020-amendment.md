---
source: card-issuers/installment-sales-act-2020-amendment
source_hash: 232696e3708817d9
lang: en
status: machine
fidelity: ok
title: "Installment Sales Act 2020 Amendment"
translated_at: 2026-05-31T15:29:03.934Z
---

# Installment Sales Act 2020 Amendment

## TL;DR

The amended Installment Sales Act is the core METI-supervised statute for deferred payment, installment credit, credit-card-number handling, and merchant-acquiring boundaries in Japan. The 2020 amendment responded to the digitization of credit cards, deferred payment, and BNPL by creating or refining several layers: certified comprehensive credit-purchase intermediaries, registered small-amount comprehensive credit-purchase intermediaries, card-number handling and merchant-contracting controls on the acquiring / PSP side, electronic delivery of required documents, and administrative sanctions.

For FinWiki, the key point is that **BNPL is not automatically the registered small-amount comprehensive credit-purchase-intermediary category**. The regulatory treatment depends on the payment term, credit structure, card-number handling, final merchant-underwriting authority, and registration status. Public METI and Kanto METI materials treat Paidy as a registered comprehensive credit-purchase intermediary in the relevant administrative-action context, so the page should not infer a small-amount registration merely from the BNPL label.

## Regime Map

| Layer | What it covers | JapanFG reading |
|---|---|---|
| Installment sales | Sale of designated goods or services to consumers with installment payment over a statutory period and number of payments | Traditional installment sales; separate from BNPL and card acquiring |
| Loan-affiliated sales | Structure in which the seller guarantees consumer borrowing used to buy goods or services | Important when distinguishing purpose loans from credit-purchase intermediation |
| Comprehensive credit-purchase intermediation | Credit-card and similar structures where the operator pays the merchant and later collects from the consumer | Card issuers, some deferred-payment providers, and BNPL structures depending on contract design |
| Individual credit-purchase intermediation | Credit for a specific product or service transaction, including shopping credit | Important for sales-finance companies, durable goods, education, beauty, and other financed purchases |
| Credit-card-number handling contract operator | Entity that signs card-acceptance contracts with merchants; includes acquirers and some PSPs | The acquiring / PSP / merchant-onboarding regulatory layer |
| Credit-card-number handling operator | Entity responsible for appropriate management of card numbers | PCI DSS, non-retention architecture, and fraud-prevention controls |

METI's FAQ organizes deferred-payment supervision across installment sellers, loan-affiliated sellers, credit-purchase intermediaries, credit-card-number handling operators, and credit-card-number handling contract operators. The policy design is therefore broader than a simple "BNPL license" label.

## 2020 Amendment

METI explained the amendment in terms of small-value, high-frequency deferred-payment services; entry by non-financial companies; and the spread of internet and smartphone-based settlement. The amendment created a more granular supervisory framework for digital and data-driven credit while keeping excessive-credit prevention, delinquency monitoring, and consumer-protection obligations in place.

### Certified Comprehensive Credit-Purchase Intermediaries

The certification route allows an operator to use its own data and technology for credit screening instead of relying solely on the traditional uniform calculation of comprehensive payment capacity. In exchange, the certified operator must manage expected and actual delinquency rates, submit periodic reports, and accept the risk of improvement orders if its controls are inadequate.

### Registered Small-Amount Comprehensive Credit-Purchase Intermediaries

This registration route was designed for operators that provide comprehensive credit-purchase intermediation below a statutory credit limit, including small-value, high-frequency, smartphone-completed deferred-payment services. It rationalizes regulation for certain BNPL-like services, but a provider's actual status must be checked against METI's current registration lists.

For that reason, FinWiki should separate two statements: the 2020 amendment clearly contemplated BNPL-like business models, but an individual provider is not a registered small-amount operator unless the public register says so.

### Expansion of Card-Number Handling Controls

The amendment also widened the universe of entities subject to appropriate card-number management duties. Payment agents, code-payment providers, services that store or reuse card numbers, and deferred-payment providers that handle card numbers can fall within the perimeter depending on their role.

In practice, the acquiring / PSP boundary is critical. METI's FAQ states that a PSP may need registration when it is substantively authorized by an acquirer and has final authority over merchant contracting and merchant management. Conversely, where the registered acquirer retains final approval and the PSP performs only preliminary screening, PSP-side registration may not be required.

### Electronic Delivery

The amendment adjusted written-document delivery rules for smartphone- and PC-completed services by allowing certain electronic delivery of usage details and member terms. Consumer-protection safeguards remain important, including notice that paper delivery may still be requested where applicable.

### Administrative Sanctions

The amendment reinforced supervisory tools, including business-suspension orders, for registered comprehensive and small-amount comprehensive credit-purchase intermediaries. The Paidy administrative-action materials show that this layer can apply in practice to BNPL and deferred-payment businesses.

## JapanFG Relevance

- BNPL / deferred payment often involves the operator paying the merchant and collecting from the consumer later, so comprehensive credit-purchase-intermediation analysis is necessary.
- The relevant layer changes depending on whether the entity is an issuer, acquirer, network participant, PSP, merchant-contracting operator, or card-number handler.
- Sales-finance companies may operate on both comprehensive and individual credit-purchase-intermediation lines. Data-driven screening does not eliminate delinquency-rate controls, designated-credit-information-institution obligations, or excessive-credit-prevention supervision.
- This is the central METI-supervised licensing lane for deferred payment, installment credit, and card-credit structures, sitting alongside the Banking Act, Money Lending Business Act, and Payment Services Act.

## Boundary Cases

| Case | Likely treatment | Watch point |
|---|---|---|
| Next-month lump-sum BNPL | Check whether the term and contract structure fall within credit-purchase intermediation | Legal payment period and advance-payment structure matter more than the BNPL UX label |
| Three-, six-, or twelve-installment deferred payment | Moves closer to comprehensive credit-purchase intermediation | Payment-capacity calculation, designated credit-information institutions, and excessive-credit-prevention duties |
| Virtual-card BNPL | May be regulated as card issuance / provision and comprehensive credit-purchase intermediation | Card-number and credit-limit controls were central in the Paidy administrative-action context |
| PSP performs merchant screening | Registration need depends on who holds final approval authority | Contract substance between acquirer and PSP |
| Purpose loan | May become individual credit-purchase intermediation if sufficiently connected to the sales contract | Seller tie-up, solicitation, and integrated procedures |
| Code-payment linkage | Card-number storage, reuse, and fraud-prevention duties may become relevant | Non-retention architecture, PCI DSS, EMV 3-D Secure, and adjacent controls |

## Related

- [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]]
- [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry index]]
- [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]
- [[payment-firms/paidy|Paidy]]
- [[payment-firms/gmo-postpay|GMO Postpay]]
- [[payment-firms/net-protections-hd|Net Protections HD]]
- [[payment-firms/kuroneko-atobarai|Kuroneko deferred payment]]

## Sources

- METI, Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihou.html
- METI, Installment Sales Act deferred-payment FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI, overview of the partial amendment to the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/R2kaiseinogaiyou.pdf
- METI, average and upper-limit delinquency rates: https://www.meti.go.jp/policy/economy/consumer/credit/heikinentairituoyobijougenentairitu.html
- METI, registered operators list: https://www.meti.go.jp/policy/economy/consumer/credit/tourokujigyousyaitiran.html
- METI, registered comprehensive credit-purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI, administrative actions under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/atobaraigyouseisyobunnojoukyou.html

---

> [!info] Verification status
> confidence: **likely**. The amendment outline, small-amount registration framework, acquiring / PSP boundary, and Paidy administrative-action layer are based on public METI and Kanto METI materials. Current service-level classification for individual companies requires confirmation against contracts, registration data, and product specifications.
