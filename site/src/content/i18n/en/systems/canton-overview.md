---
source: systems/canton-overview
source_hash: 36a473e8e6345ea2
lang: en
status: machine
fidelity: ok
title: "Canton Network overview · privacy-oriented institutional chain for DAML smart contracts"
translated_at: 2026-06-01T04:15:40.127Z
---
# Canton Network overview · privacy-oriented institutional chain for DAML smart contracts

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-daml-technical-spec|Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 23+ founding members: Digital Asset + Goldman Sachs + JPMorgan + DTCC + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank, etc. ^[extracted]
- Global Synchronizer has operated since 2025  · coordination layer integrating the entire Canton network ^[extracted]
- $6T+ tokenized assets · 600+ institutions (2026-Q1  self-disclosure) ^[extracted]
- Sub-transaction privacy is application-level data isolation · not zero-knowledge proofs ^[extracted]
- DAML contracts can be called across applications — GS DAP MMF interests can settle atomically with Kinexys JPMD ^[extracted]

## Mechanism / How it works

Canton is neither a public chain nor a single-bank private chain, but a **DLT federation for institutional internal clearing**:

- **Data model**: application-level data confidentiality — each participant can see only the transactions relevant to itself, while other participants cannot even detect that the transaction exists
- **Global Synchronizer**: the integrated coordination layer for all of Canton, co-operated by Digital Asset, responsible for cross-application transaction ordering
- **Regulator Node model**: supervisors are embedded as participants and can observe transactions within the authorized scope
- **Inter-application interoperability**: DAML contracts can make atomic calls across applications (atomic settlement of GS DAP MMF interests ↔ Kinexys JPMD cash leg)

The fundamental difference from public chains: Canton is isolated by default; public chains are public by default. This design directly addresses institutional clients' dual requirements for "commercial confidentiality + supervisory visibility."

## Origin & evolution

Digital Asset was founded in 2014 年 by Sunil Hirani (ICAP) and Yuval Rooz, initially focusing on DLT POCs for financial institutions. During 2017-2019 年, it developed the CHESS replacement for the Australian Securities Exchange (ASX), later canceled, and DAML matured during that period. From 2019-2023 年, the Canton Network concept gradually matured; commercialization accelerated in 2024-2025 年; and by 2026-Q1  it had become the representative platform for the "institutional tokenization private-chain path."

JPM Kinexys's migration path is an important milestone in Canton commercialization: between 2025-11  and 2026-01 , [[fintech/jpmorgan-jpmd-coin|JPMD]] had roughly $200M circulating on Base → announced migration to Canton in 2026-01  → by 2026-Q2 , $500M+ had already migrated, $1.5B+ was migrating, and completion was scheduled for 2026-Q4 . The remaining $50-100M on Base is only for Coinbase Custody customers.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-daml-technical-spec|Canton DAML Technical Spec]]
- [[systems/canton-mmf-coalition|Canton MMF 連合]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton(公開/プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## Sources

- Digital Asset Canton Network whitepaper
- Canton Network (Digital Asset) — https://www.canton.network/
