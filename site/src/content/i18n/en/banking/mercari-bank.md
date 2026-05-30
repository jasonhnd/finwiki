---
source: banking/mercari-bank
source_hash: 1eb4016940a0cfb4
lang: en
status: machine
fidelity: ok
title: "Mercari Bank (メルカリバンク / Mercari Bank)"
translated_at: 2026-05-30T18:52:47.786Z
---

# Mercari Bank (メルカリバンク / Mercari Bank)

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/mercari-bank-license-stack|メルカリバンク license stack]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

Mercari Bank is a BaaS service that lets users use a Minna Bank account inside the Mercari app. 2025-12-18, it launched through a BaaS business partnership between Minna Bank and Merpay. The banking entity is [[banking/minna-bank-baas-model|みんなの銀行]], while Merpay handles the API-linkage / electronic-payment-agency layer.

## Product map

| Component | Description |
|---|---|
| Service front | Balance / wallet flow within the Mercari app |
| Bank account | Minna Bank ordinary deposit account, partner branch "Mercari Branch" |
| API connector | API linkage between Merpay and Minna Bank |
| Core use case | Move Mercari sales proceeds / Merpay balance to the bank account instantly and fee-free |
| Cash-out | Cash-withdrawal flow via Seven Bank ATMs and others, with preferential conditions |

## Strategic read

The essence of Mercari Bank is to lower the friction of converting flea-market sales proceeds into bank deposits. The conventional "withdraw your sales proceeds" UX tends to make fees, waiting time, and external-bank-account registration a psychological burden. By placing sales proceeds, the Merpay balance, and the bank account in the same in-app flow, Mercari Bank connects selling, spending, and saving.

This structure is a strong example even within [[banking/baas-japan-landscape|Japan BaaS landscape]]. Mercari holds a high-frequency C2C marketplace and settlement balances, while Minna Bank holds a banking license and an API / partner branch. By combining the two, it can capture everyday touchpoints that a bank would find hard to reach on its own.

## What it is not

- It is not a service in which Merpay obtained a banking license.
- The Mercari Branch is a partner branch of Minna Bank, not a deposit bank operated solely by Mercari.
- Per the public FAQ, the Mercari Branch has restrictions on API linkages other than Mercari Bank, so it does not necessarily offer the same UX as a general Minna Bank account.

## Competitive meaning

Mercari Bank differs from a full-banking-group strategy such as [[banking/rakuten-bank|楽天銀行]] or [[banking/paypay-bank|PayPay 銀行]]. Rather than owning a bank itself, Mercari has chosen to embed financial functions inside its app using BaaS.

Its comparison axes are therefore not "all-round strength as a bank" but the following 3  points.

| Axis | Question |
|---|---|
| Conversion | How much of the sales proceeds / balance can be converted into deposits |
| Stickiness | Whether the usage frequency of the Mercari app can be converted into a financial flow |
| License leverage | How far the boundary between its own licenses and the Minna Bank API can be expanded |

## Related

- [[banking/mercari-bank-license-stack]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[banking/paypay-bank]]
- [[banking/rakuten-bank]]
- [[JapanFG/gmo-aozora-net]]

## Sources

- Minna Bank / Merpay, 2025-12-18: Mercari Bank service launch release.
- Minna Bank: Mercari Branch official FAQ / branch page.
- Mercari Help: Linking a Minna Bank account to Merpay.
- Mercari: Disclosures regarding the electronic payment agency business.
