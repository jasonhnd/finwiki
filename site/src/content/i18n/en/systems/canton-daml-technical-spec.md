---
source: systems/canton-daml-technical-spec
source_hash: b6de27f58e402f69
lang: en
status: machine
fidelity: ok
title: "Canton DAML Technical Specification · Functional Financial Contracts + Sub-transaction Privacy"
translated_at: 2026-06-01T04:15:40.107Z
---
# Canton DAML Technical Specification · Functional Financial Contracts + Sub-transaction Privacy

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- DAML is a functional + obligation-based contract language, not an imperative one ^[extracted]
- Sub-transaction privacy is enabled by default; each participant sees only the portions relevant to itself ^[extracted]
- Native support for multi-party atomic transactions ^[extracted]
- Regulator Node is a protocol-level first-class citizen, not after-the-fact auditing ^[extracted]
- Cross-application calls are atomic; bridges and wrapped tokens are unnecessary ^[extracted]

## Mechanism / How it works

Dimensional comparison of DAML vs Solidity:

| Dimension | Solidity(EVM) | DAML(Canton) |
|---|---|---|
| Programming paradigm | Imperative + state mutation | Functional + modeling of multi-party rights and obligations |
| Privacy | Fully public (everything on-chain is visible) | Sub-transaction privacy (isolated by default) |
| Multi-party atomicity | Requires complex contract combinations | Native support for multi-party atomic transactions |
| Supervisory node | No concept | Regulator Node model: embeds the supervisor as a participant |
| Application scenario | DeFi + general-purpose dApps | Financial contracts + inter-institution settlement |

A concrete example of DAML's "rights and obligations modeling": a bond contract explicitly states that "the issuer bears obligation X, the holder has right Y, and the custodian bears audit obligation Z" — this directly maps to the legal-contract semantics of traditional finance (compare the product structures expressed on DAML by [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]). In Solidity, programmers must code these role relationships themselves, which is error-prone.

Implementation of sub-transaction privacy: each transaction is decomposed into sub-events, and each sub-event is encrypted and broadcast only to the relevant participants. The Global Synchronizer is responsible only for ordering (it does not decrypt the contents).

## Origin & evolution

DAML originated in Digital Asset's early POCs in 2014-2017 年, was open-sourced on GitHub in 2017 年, and became the standard contract language of the Canton Network in 2019 年. It continued to iterate through 2020-2024 年; DAML 3.x added support for more fine-grained privacy primitives and cross-application choreography.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## Sources

- DAML language reference(digitalasset.com)
- Canton Network (Digital Asset) — https://www.canton.network/
