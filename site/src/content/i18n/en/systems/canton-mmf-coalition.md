---
source: systems/canton-mmf-coalition
source_hash: 437925e68e594dbf
lang: en
status: machine
fidelity: ok
title: "Canton MMF coalition · anti-BlackRock public-chain route by JPM + GS + BNY + DTCC"
translated_at: 2026-06-01T04:15:40.117Z
---
# Canton MMF coalition · anti-BlackRock public-chain route by JPM + GS + BNY + DTCC

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM: JPMD (cash leg) + MONY/JLTXX MMF deployed on Canton ^[extracted]
- GS: GS DAP platform + 5  MMFs onboarded (BlackRock / BNY Dreyfus / Federated / Fidelity / GSAM) ^[extracted]
- BNY: LiquidityDirect (custody + customer interface) + Dreyfus MMF ^[extracted]
- DTCC: Project Ion (Treasury tokenization on Canton) had a platform-wide launch in 2026-10  ^[extracted]
- BlackRock / Fidelity / Federated are merely asset managers passively onboarded to GS DAP ^[extracted]

## Mechanism / How it works

The "2  route" confrontation in institutional tokenization:

| Route | Public-chain route (BlackRock BUIDL) | Private-chain route (Canton coalition) |
|---|---|---|
| Platform | Ethereum + 7+ public chain | Canton Network |
| Entry point | Securitize (neutral platform) | BNY LiquidityDirect (bank channel) |
| Privacy | Public + Securitize KYC | Sub-transaction privacy |
| Value attribution | Asset manager + public-chain ecosystem | Banks (GS/BNY/JPM/DTCC) |
| Customer type | DeFi + crypto-native + institutional mix | Pure institutional + traditional collateral mgmt |

**Key insight**: Canton coalition design lets coalition members control every stage of the "institutional MMF full lifecycle" — cash ([[fintech/jpmorgan-jpmd-coin|JPM JPMD]]) + asset (GS DAP) + custody (BNY) + underlying Treasury (DTCC). [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]], as an MMF issuer, is only one of 1  MMF options on GS DAP on Canton, and **neither value attribution nor customer relationship is in BlackRock's hands**. This contrasts sharply with the public-chain route, where BlackRock faces customers directly and shares economics with Securitize (contrast with [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]).

## Origin & evolution

2024-2025 年 entered the window period for "route selection" in institutional tokenization. BlackRock secured the first-mover position on the public-chain route with BUIDL (launched in 2024-03 ), and by mid-2025 年 BUIDL TVL had exceeded $1B. The Canton coalition response: GS DAP gradually onboarded MMFs through 2024-2025 年 → BNY LiquidityDirect opened to bank customers in 2025 年 → JPM Kinexys announced in 2026-01  that it would shift JPMD's main battlefield to Canton → DTCC Project Ion had a platform-wide launch in 2026-10 .

Chronologically, this is a **countermeasure** — after BlackRock occupied the public-chain high ground, the Canton coalition built a closed-loop stack in the opposite direction and adopted a strategy of relocking value inside the banking system.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-daml-technical-spec|DAML Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Project Ion announcements
- Canton Network (Digital Asset) — https://www.canton.network/
