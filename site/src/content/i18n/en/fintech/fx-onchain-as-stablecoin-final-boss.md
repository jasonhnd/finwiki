---
source: fintech/fx-onchain-as-stablecoin-final-boss
source_hash: 27af5a7483001174
lang: en
status: machine
fidelity: ok
title: "Putting FX on-chain is the \"final boss\" of the stablecoin domain — the disappearance of prime brokers and the elimination of Herstatt Risk"
translated_at: 2026-06-18T23:59:13.130Z
---

# Putting FX on-chain is the "final boss" of the stablecoin domain — the disappearance of prime brokers and the elimination of Herstatt Risk


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> If 24/365  instant settlement of yen stablecoins × dollar stablecoins is realized, then (1) the prime-broker layer of the FX market becomes functionally unnecessary, and (2) time-zone settlement risk (Herstatt Risk) disappears. This is the single largest listing benefit across the entire stablecoin industry, and the "ultimate destination (final boss)" in the institutional-investor market.

## Conclusion

There are three benefits of putting FX on-chain in institutional settlement:

1. **Disappearance of the prime-broker layer** — at present, institutional investors that settle FX across multiple banks ([[fintech/jpmorgan-jpmd-coin|JPM]]/Goldman Sachs/Morgan Stanley/[[megabanks/mufg|三菱]]) ask prime brokers to bundle it and pay the cost. With direct SC settlement, this intermediary layer becomes unnecessary
2. **Elimination of Herstatt Risk** — yen settles at the BOJ and dollars settle at the Fed separately, with a 12-14  hour gap due to the time difference. If the counterparty fails during this interval, a loss arises from the side already paid (the 1974  Continental Illinois Bank failure is a historical example). With 24/365  simultaneous settlement, the time difference is zero (for the cross-chain PvP design, see [[systems/cross-chain-five-pole-comparison-matrix|跨链五極対比マトリクス]])
3. **Improvement in capital efficiency** — banks are obliged to hold capital for settlement risk, and if settlement risk disappears, that capital can be released for other uses — directly affecting management efficiency

## Reasoning

- The structural ultimate challenge described as the "final boss"
- It is the largest use case in the institutional-investor market and also the largest bottleneck
- ETF liquidity settlement (on the scale of several billion) is a "clean use case" but does not scale; the real prize is FX
- BIS Herstatt Risk is an industry term named after the 1974 年 Bank Herstatt failure case, and the only means of resolution had been shortening the settlement cycle
- Instant settlement via blockchain is a qualitative leap that "eliminates the settlement time difference itself"

## Applicable When

- When designing the long-term vision of a stablecoin pitch for institutional investors
- When discussing "where is the listing benefit of stablecoins?" and speaking to the essence rather than stopping at short-term use cases
- When constructing an institutional B2B SC strategy ([[fintech/jp-stablecoin-progmat|Project Pax / Progmat]], etc.)
- When arguing the "social value of bank-issued SC" in explanations to regulators
- When discussing the inefficiency of the existing FX market at the root-cause level

## Source

- Historical fact: the 1974  Continental Illinois Bank failure → the industry term "Herstatt Risk" became established
- BIS official definition of Herstatt Risk (public literature)
- Consistency: the [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]] B2B FX corridor discussion

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンス分離]]
- [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]]
<!-- /wiki-links:managed -->
