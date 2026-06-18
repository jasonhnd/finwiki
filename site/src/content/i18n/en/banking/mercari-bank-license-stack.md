---
source: banking/mercari-bank-license-stack
source_hash: 2a2686c6a3dc6811
lang: en
status: machine
fidelity: ok
title: "Mercari Bank (メルカリバンク) license stack"
translated_at: 2026-06-18T23:33:48.368Z
---

# Mercari Bank (メルカリバンク) license stack

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for adjacent context and [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for the broader system boundary.

## TL;DR

Mercari Bank is not a case of "Merpay becoming a bank." The entity behind the bank account is [[banking/minna-bank-baas-model|みんなの銀行]], while Merpay, as an electronic payment intermediary service provider (電子決済等代行業者), handles the layer of API connectivity, account-information display, and fund-transfer instructions. In other words, although the service name sounds bank-like, legally it is constituted through a division of labor across the **banking layer / API instruction layer / Mercari app UX layer**.

## Stack

| Layer | Actor | Role |
|---|---|---|
| Banking layer | みんなの銀行 | Ordinary deposit accounts, the partner branch "Mercari Branch," ATM / deposit-related functions |
| API / instruction layer | メルペイ | As an electronic payment intermediary service provider, handles account-information retrieval and fund-transfer instructions |
| Wallet / payment layer | メルペイ | A payment business holding registrations for fund-transfer business, prepaid payment instruments, and credit / deferred-payment functions |
| UX / marketplace layer | Mercari app | Presents to users their sales proceeds, Merpay balance, the wallet page, and the bank-linkage flow |

## What electronic payment agency explains

In Merpay's electronic-payment-intermediary disclosure, the company states that, for account funds at financial institutions it has contracted with, it receives instructions from users and transmits them to the financial institution, and that it retrieves account information via API connection and displays it within the service. みんなの銀行 is listed as a financial institution with which a contract has been concluded.

This explains Mercari Bank's main UX as follows.

| UX | Underlying layer |
|---|---|
| Viewing the bank balance in the Mercari app | Electronic payment intermediary business + みんなの銀行 API |
| Sending sales proceeds / Merpay balance to a bank account instantly | Merpay's instructions + みんなの銀行 account |
| Opening a Mercari Branch | みんなの銀行's partner branch |
| Seeing ATM-withdrawal preferential treatment | A preferential program on みんなの銀行's side |

## Important correction

An old note had written as if "banking agency business + BaaS linkage" were a necessary condition, but on public sources alone, Merpay's banking-agency-business registration cannot be presumed. Rather, Merpay's electronic-payment-intermediary disclosure draws a line against misunderstanding: the company does not conduct electronic payment intermediary business on behalf of a bank or the like.

Therefore, this page treats the matter as follows.

- **confirmed**: Merpay has contracted with みんなの銀行 as an electronic payment intermediary service provider.
- **confirmed**: Merpay holds multiple financial registrations, including as a fund-transfer business operator and a prepaid-payment-instrument issuer.
- **confirmed**: Mercari Bank is a service that uses みんなの銀行 accounts via API linkage with Merpay from within the Mercari app.
- **not assumed**: That Merpay is a banking operator or a banking agency operator.

## BaaS design lesson

Mercari Bank is a case that shows the essence of [[banking/baas-japan-landscape|BaaS 日本ランドスケープ]] to be not "acquiring an entire license" but "where to connect an existing license with a bank API." If the same group's crypto-asset exchange operators, securities apps, and e-commerce apps such as [[exchanges/jp-exchange-mercoin|メルコイン]] aim for the same UX, the first things to separate out are the following 4  points (for the latest picture of the parent company, see [[payment-firms/mercari-hd|メルカリ HD]]).

1. Who provides the deposit account.
2. Who handles account-information display and fund-transfer instructions.
3. How funds move between one's own balance / points / sales proceeds and the bank account.
4. Whether to have users open a banking app, or to keep everything self-contained within one's own app.

## Related

- [[banking/mercari-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[fintech/japan-financial-regulation]]
- [[payments/cashless-jp-landscape]]

## Sources

- メルカリ: Disclosures regarding electronic payment intermediary business, etc.
- メルペイ: About / license and registration information.
- みんなの銀行 / メルペイ, 2025-12-18: Mercari Bank service launch release.
- 金融庁: List of operators holding licenses, permits, registrations, etc.
