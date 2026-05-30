---
source: banking/mercari-bank-license-stack
source_hash: 5a3337e280ef9ed3
lang: en
status: machine
fidelity: ok
title: "Mercari Bank (メルカリバンク) license stack"
translated_at: 2026-05-30T18:52:47.785Z
---

# Mercari Bank (メルカリバンク) license stack


## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for adjacent context and [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for the broader system boundary.

## TL;DR

Mercari Bank is not a case of "Merpay became a bank." The entity behind the bank account is [[banking/minna-bank-baas-model|みんなの銀行]]; Merpay, as an electronic-payment-agency operator, handles the layer of API connection, account-information display, and funds-transfer instruction. In other words, although the service name sounds bank-like, it is legally constituted by a division of labor across the **banking layer / API instruction layer / Mercari app UX layer**.

## Stack

| Layer | Actor | Role |
|---|---|---|
| Banking layer | Minna Bank | Ordinary deposit account, partner branch "Mercari Branch", ATM / deposit-related functions |
| API / instruction layer | Merpay | As an electronic-payment-agency operator, handles account-information retrieval and funds-transfer instruction |
| Wallet / payment layer | Merpay | A payment operator holding registrations for funds-transfer business, prepaid payment instruments, and credit / deferred-payment |
| UX / marketplace layer | Mercari app | Presents sales proceeds, Merpay balance, wallet page, and bank-linkage flow to the user |

## What electronic payment agency explains

Merpay's electronic-payment-agency disclosure states that, with respect to account funds at contracted financial institutions, the company receives instructions from users and transmits them to the financial institution, and also retrieves account information via API connection and displays it within the service. Minna Bank is listed as a financial institution with which a contract has been concluded.

This lets the main UX of Mercari Bank be explained as follows.

| UX | Underlying layer |
|---|---|
| View bank balance in the Mercari app | Electronic payment agency + Minna Bank API |
| Send sales proceeds / Merpay balance to the bank account instantly | Merpay instruction + Minna Bank account |
| Open the Mercari Branch | Minna Bank's partner branch |
| View preferential ATM withdrawal | Preferential program on the Minna Bank side |

## Important correction

The old memo wrote as if "bank agency business + BaaS linkage" were a prerequisite, but public sources alone do not let us presume Merpay's bank-agency registration. Rather, Merpay's electronic-payment-agency disclosure draws a misunderstanding-prevention line: the company does not conduct the electronic payment agency business as an agent of a bank or the like.

Therefore, this page treats it as follows.

- **confirmed**: Merpay is contracted with Minna Bank as an electronic-payment-agency operator.
- **confirmed**: Merpay holds multiple financial registrations, such as funds-transfer-business operator and prepaid-payment-instrument issuer.
- **confirmed**: Mercari Bank is a service that uses a Minna Bank account from the Mercari app via API linkage with Merpay.
- **not assumed**: That Merpay is a banking operator or a bank-agency operator.

## BaaS design lesson

Mercari Bank is a case that shows the essence of [[banking/baas-japan-landscape|BaaS 日本ランドスケープ]] is not "acquiring a license wholesale" but "where to connect existing licenses and the bank API." When same-group entities such as [[exchanges/jp-exchange-mercoin|メルコイン]] — the group's crypto-asset exchange operator, securities app, or EC app — aim for the same UX, the first 4  points to separate are as follows (for the latest picture of the parent company, see [[JapanFG/mercari-hd|メルカリ HD]]).

1. Who provides the deposit account.
2. Who handles account-information display and funds-transfer instruction.
3. How money moves between one's own balance / points / sales proceeds and the bank account.
4. Whether to have the user open a banking app, or to complete everything within one's own app.

## Related

- [[banking/mercari-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[fintech/japan-financial-regulation]]
- [[payments/cashless-jp-landscape]]

## Sources

- Mercari: Disclosures regarding the electronic payment agency business.
- Merpay: About / license and registration information.
- Minna Bank / Merpay, 2025-12-18: Mercari Bank service launch release.
- FSA: List of operators holding licenses, permissions, registrations, etc.
