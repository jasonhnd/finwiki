---
source: systems/cctp-v2-vs-canton
source_hash: b9f333306f5f0e91
lang: en
status: machine
fidelity: ok
title: "CCTP V2 vs Canton · Fundamental Confrontation Between the Public-Chain Route and the Private-Chain Route"
translated_at: 2026-06-01T04:15:40.153Z
---
# CCTP V2 vs Canton · Fundamental Confrontation Between the Public-Chain Route and the Private-Chain Route

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM Kinexys explicitly states that in 2026-01  it will not integrate CCTP V2 (`kinexys/technology.md §4.2`) ^[extracted]
- CCTP V2  is the settlement infrastructure for the public-chain coalition(Circle + Arc + 18  chains) ^[extracted]
- Canton is the settlement infrastructure for the private-chain coalition(GS + BNY + JPM + DTCC) ^[extracted]
- Arc chain is the native home of CCTP V2 , and USDC is Arc's gas ^[extracted]

## Mechanism / How it works

The fundamental differences between the 2  routes:

| Dimension | CCTP V2(public-chain route) | Canton(private-chain route) |
|---|---|---|
| Liquidity sovereignty | Circle-only mint/burn | Ledgering inside the bank consortium |
| Cross-chain method | burn-and-mint(no wrapped asset) | DAML application-to-application atomic calls |
| Privacy | Fully public on public chains + denylist filter | Sub-transaction privacy by default |
| Value attribution | Circle + public-chain ecosystem | Bank consortium(GS/BNY/JPM/DTCC) |
| Supervisory model | Circle self-compliance + §501 denylist | Built-in Regulator Node |
| User type | Crypto-native + some institutions | Pure institutional customers |

**JPM Kinexys's choice**:[[fintech/jpmorgan-jpmd-coin|JPMD]] does not integrate CCTP V2  and returns to Canton — the reasons are (1) Coinbase Custody customers' holdings on Base can be reverse-inferred through chain analysis; (2) Canton natively supports multi-party atomic settlement; (3) DAML is better suited to financial contracts than Solidity; (4) JPM is a founding Canton member, creating strategic alignment.

**Circle Arc's choice**:Arc chain directly bets on CCTP V2  + USDC as gas + the §501  compliance narrative, **avoiding profit-sharing with Coinbase Base($200M/year)** — this is the core measure in Circle's de-Coinbase strategy.

## Origin & evolution

2024-2025 年 has entered the window period for institutional tokenization route selection. The Circle route(CCTP V1 → V2 → Arc) and the JPM route(JPMD on Base → JPMD on Canton) evolved in parallel, but in opposite directions. In 2026-01 , JPM publicly announced that it would move its main battlefield to Canton, formally standardizing the public / private chain split.

Expected next 5  years:**the public-chain route**(CCTP V2 + Arc + Base + [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]) leads crypto-native + DeFi + cross-border retail; **the private-chain route**(Canton + JPMD + GS DAP + BNY LiquidityDirect) leads institutional collateral management + large-value settlement. The 2  route forms **parallel systems inside the "US dollar compliance zone"** under the constraints of §501  entry-list jurisdiction clauses(see [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Canton Network (Digital Asset) — https://www.canton.network/
