---
source: banking/mercari-bank
source_hash: 385edc86a2548249
lang: en
status: machine
fidelity: ok
title: "メルカリバンク (Mercari Bank)"
translated_at: 2026-06-18T23:33:48.271Z
---

# メルカリバンク (Mercari Bank)

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/mercari-bank-license-stack|メルカリバンク license stack]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

Mercari Bank is a BaaS service that makes a Minna Bank account usable inside the Mercari app. It launched on 2025-12-18 through a BaaS business partnership between Minna Bank and Merpay. The banking entity is [[banking/minna-bank-baas-model|みんなの銀行]], while Merpay handles the API-connection / electronic-payment-intermediary layer.

## Product map

| Component | Description |
|---|---|
| Service front | Balance / wallet flow within the Mercari app |
| Bank account | Minna Bank ordinary deposit account, the partner branch "Mercari Branch" |
| API connector | API connection between Merpay and Minna Bank |
| Core use case | Move Mercari sales proceeds / Merpay balance to a bank account instantly and free of charge |
| Cash-out | Withdrawal flow via Seven Bank ATMs and others, with preferential terms |

## Strategic read

The essence of Mercari Bank is reducing the friction of converting flea-market sales proceeds into bank deposits. The conventional "withdraw your sales proceeds" UX tends to impose psychological burden through fees, waiting time, and the registration of an external bank account. By placing sales proceeds, Merpay balance, and a bank account in the same in-app flow, Mercari Bank connects selling, spending, and saving.

This structure is a strong example even within [[banking/baas-japan-landscape|Japan BaaS landscape]]. Mercari has a high-frequency C2C marketplace and payment balances, while Minna Bank has a banking license and an API / partner branch. By combining the two, the bank can acquire a touchpoint with daily life that it would find hard to capture on its own.

## What it is not

- It is not a service in which Merpay obtained a banking license.
- The Mercari Branch is a partner branch of Minna Bank, not a deposit-taking bank operated solely by Mercari.
- Per the public FAQ, the Mercari Branch has restrictions on API connections other than Mercari Bank, so it is not necessarily the same UX as a general-purpose Minna Bank account.

## Competitive meaning

Mercari Bank differs from full banking-group strategies such as [[banking/rakuten-bank|楽天銀行]] or [[banking/paypay-bank|PayPay 銀行]]. Rather than owning a bank in-house, Mercari has chosen the path of embedding financial functions inside the app using BaaS.

For that reason, the axes of comparison are not "comprehensive strength as a bank" but the following 3  points.

| Axis | Question |
|---|---|
| Conversion | How much of the sales proceeds / balance can be turned into deposits |
| Stickiness | Whether the Mercari app's usage frequency can be converted into a financial flow |
| License leverage | How far the boundary between its own license and the Minna Bank API can be expanded |

## Related

- [[banking/mercari-bank-license-stack]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[banking/paypay-bank]]
- [[banking/rakuten-bank]]
- [[payment-firms/gmo-aozora-net]]

## Sources

- Minna Bank / Merpay, 2025-12-18: Mercari Bank service launch release.
- Minna Bank: Mercari Branch official FAQ / branch page.
- Mercari Help: Linking a Minna Bank account to Merpay.
- Mercari: Disclosures regarding electronic payment intermediary business.
