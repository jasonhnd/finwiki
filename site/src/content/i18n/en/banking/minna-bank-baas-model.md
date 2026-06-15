---
source: banking/minna-bank-baas-model
source_hash: e10f75fa56437b80
lang: en
status: machine
fidelity: ok
title: "Minna Bank BaaS model"
translated_at: 2026-05-31T03:19:56.357Z
---

# Minna Bank BaaS model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/mercari-bank-license-stack|メルカリバンク license stack]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

Minna Bank's BaaS runs as a combination of an **API-provision model** that embeds banking functions into external apps, and a **partner-branch model** that carries the partner company's brand. What matters is that the distinction lies not in "whether a banking license is held," but in the depth of the user touchpoint, the brand, and the API integration. [[banking/mercari-bank|Mercari Bank]] is the representative case of placing this BaaS on top of Mercari's strong everyday-life flow.

## Model map

| Model | What changes | User experience | Representative links |
|---|---|---|---|
| API-provision model | Partner app connects to Minna Bank functions through APIs | Bank account / payment / balance functions appear inside the partner service | [[banking/quick-deposit-four-methods|Quick deposit four methods]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]] |
| Partner-branch model | A branch with partner branding is created inside Minna Bank's banking structure | The partner's users see a branded banking front, such as the Mercari Branch | [[banking/mercari-bank|Mercari Bank]], pixiv / DMM / ignica / and ST cases |
| Hybrid | Partner branch plus API integration | Branded branch + seamless fund movement / account information inside the partner app | Mercari / Merpay × Minna Bank |

## Strategic read

Minna Bank's BaaS is a strategy that externalizes a net bank's "account acquisition" away from its own standalone app and toward the customer base of non-financial services. Materials from FFG / Minna Bank set out a direction of increasing account acquisition via BaaS partners and, going forward, inverting the ratio of B2C accounts to BaaS accounts.

The strength of this model lies in the fact that the bank does not simply sell APIs, but converts the partner company's everyday-life touchpoints into banking touchpoints. Sales proceeds for Mercari, deposits for Gaitame.com, shopping for ignica, creator settlement for pixiv — in this way it inserts banking functions into existing usage contexts.

## License boundary

"BaaS partner = banking operator" does not hold. The entity behind the deposit account and banking functions is Minna Bank; the partner side holds different license boundaries depending on the functions it provides — API connection, electronic-payment-services intermediary business, funds-transfer business, prepaid payment instruments, bank-agency business, and so on.

For this reason, the axes to examine in BaaS design are the following 3 .

| Axis | Question |
|---|---|
| Account | Who is the party to the deposit contract |
| Instruction | Who receives the instruction for fund movement or account operation |
| Interface | Which app / brand becomes the user touchpoint |

## Mercari case

[[banking/mercari-bank|メルカリバンク]] was launched as a service that uses a Minna Bank account from within the Mercari app via API integration with Merpay. The core UX is the ability to send sales proceeds instantly and free of charge into a Minna Bank ordinary deposit account, using Minna Bank's partner branch, the "Mercari Branch."

The key point here is that Merpay did not become a bank. As an electronic-payment-services intermediary, Merpay handles the display of account information and fund-movement instructions through API connection with Minna Bank.

## Related

- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[regional-banks/fukuoka-fg]]
- [[regional-banks/ssnb]]
- [[payment-firms/gmo-aozora-net]]

## Sources

- Minna Bank: Minna no BaaS official service page.
- Minna Bank: partner-branch model official page.
- Minna Bank: partnered services / BaaS overview.
- FFG IR Day, 2025-09-08: Minna Bank's business strategy.
- Minna Bank / Merpay, 2025-12-18: Mercari Bank service launch release.
