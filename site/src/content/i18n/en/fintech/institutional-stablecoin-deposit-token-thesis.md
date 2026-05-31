---
source: fintech/institutional-stablecoin-deposit-token-thesis
source_hash: 6d160073086b09c7
lang: en
status: machine
fidelity: ok
title: "Institutional Market Stablecoins = Only Bank-Issued Deposit Tokens Are Structurally Viable"
translated_at: 2026-05-31T06:16:15.734Z
---

# Institutional Market Stablecoins = Only Bank-Issued Deposit Tokens Are Structurally Viable


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> In institutional settlement at the 200-300 億円 scale, the KYC and regulatory standard of a stablecoin must match that of the settlement counterparty; otherwise it cannot function. Permissionless USDC/USDT are structurally unable to enter this market. **Bank-issued deposit tokens from institutions such as JPMorgan, MUFG, and SMBC are the only viable solution for institutional-grade stablecoins.**

## Conclusion

Institutional-market stablecoins and the crypto asset market are entirely separate markets with entirely different participants.

| Dimension | Retail SC (USDC etc.) | Institutional SC (deposit token) |
|---|---|---|
| Issuer | Crypto company | Bank ([[fintech/jpmorgan-jpmd-coin|JPM]] · [[JapanFG/mufg|三菱 UFJ]] · [[JapanFG/smfg|三井住友]] etc.) |
| KYC | Permissionless | Bank-account KYC = institutional grade |
| Scale | Small-lot | 200-300 億円 per transaction |
| Settlement target | Retail transfers · crypto asset trading | US Treasuries, corporate bonds, repo market, securities, FX |
| Platform | Public chains such as Ethereum / Solana | Institutional platforms such as [[systems/canton-overview|Canton Network]], Arc Network |

## Reasoning

- An institutional investor buying US Treasuries at 200 億円 cannot individually check "is the KYC on this stablecoin token acceptable" for every transaction → the issuer must be on the same KYC tier
- An Iranian national cannot hold US Treasury tokens (under US SEC regulation) → settlement can only be conducted via deposit tokens for which the issuer has already completed KYC
- "Bank-issued deposit tokens" such as JPM Coin / [[fintech/jp-stablecoin-progmat|Project Pax]] are the only technically and regulatorily compatible form
- DTCC · Nasdaq · Broadridge are progressing on-chain agreements for US Treasuries and equities → all of these are institutional-facing; retail stablecoins do not connect
- "Can USDC be used in the institutional market?" The structural answer is "No" — because the participants are different (the actual institutional-side scale can be verified at [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]])

## Applicable When

- Institutional stablecoin design discussions (commercial design, institutional pitches, etc.)
- When seeing a proposal attempting to design "retail SC + institutional SC" in a single solution → structurally impossible; reject immediately
- When regulatory discussion treats "stablecoin" as a monolithic category → separate the two as distinct markets
- Contexts discussing deposit tokens ([[banking/minna-bank-baas-model|TD/SC]] etc.)

## Source

- Cross-reference: [[fintech/japan-stablecoin-regulatory-landscape|Project Pax]] (MUFG × SMBC × Mizuho institutional B2B SC)
- Public: Broadridge / DTCC / Nasdaq on-chain agreements (2024-2025)
- Cross-reference: [[banking/minna-bank-baas-model|みんなの銀行 TD 戦略]] (TD = tokenised deposit, same lineage)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンスとクリプトの DNA 分離]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
