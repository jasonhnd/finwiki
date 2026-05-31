---
source: fintech/cbbtc-institutional-btc-wrapper
source_hash: 64383861866c42bb
lang: en
status: machine
fidelity: ok
title: "cbBTC · Coinbase wrapped BTC · institutionally trusted WBTC alternative / window product"
translated_at: 2026-05-31T05:31:05.761Z
---

# cbBTC · Coinbase wrapped BTC · institutionally trusted WBTC alternative / window product

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> cbBTC is an ERC-20  wrapped BTC custodied by Coinbase (launched 2024-09-12), with 1:1  BTC reserve · as of 2026-03  circulating supply ~**89,000 cbBTC** / market cap **$6.1B** / TVL on Base **$839M**. After the BitGo WBTC governance turmoil of 2024 年, cbBTC seized the "institutional BTC-DeFi position migration" window to establish itself as an alternative, constituting the host-asset layer in Coinbase's **veToken host protocol flywheel**, and upgrading BTC from a CEX-custodied asset into an "on-chain self-circulating cash-flow engine."

## Key facts

- Circulating supply **~89,000 cbBTC** · market cap **$6.1B** · Base TVL **$839M** (2026-03) ^[extracted]
- 1:1  BTC reserve · Coinbase custody · on-chain attestation ^[extracted]
- Launch date 2024-09-12 · ERC-20  multichain (mainly Base + Ethereum) ^[extracted]
- Core liquidity venue Aerodrome / Curve trading pairs ^[extracted]
- The same infrastructure simultaneously custodies BlackRock IBIT (Coinbase is IBIT's primary custodian) ^[extracted]
- WBTC (BitGo) transferred its reserve multisig to a Justin Sun-affiliated entity in 2024 年 → migration of institutional trust → cbBTC benefits ^[extracted]

## Mechanism / How it works

cbBTC operates as a host asset within Coinbase's 4 -layer closed loop: **Coinbase CEX → mint cbBTC (host asset) → enter Base (host platform) → Aerodrome swap (host DEX) → veAERO bribe (host token)**. While retaining the custody fee + spread on CEX-custodied BTC, Coinbase realizes a structure in which that BTC portion generates a 2 -layer liquidity yield in DeFi. The annualized total of the entire closed loop is estimated at **$130-250M** (details in [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]). This is an **on-chain self-sufficient defense** against the risk that the Circle Arc mainnet absorbs institutional USDC and impairs Base's valuation by $20-25B.

## Origin & evolution

2024-09-12 cbBTC launch (jointly announced by Coinbase's internal BTC business unit + the Base team). The 2024-Q4  BitGo governance turmoil (transferring the WBTC reserve multisig to a Sun-affiliated entity) triggered an institutional-trust crisis, and Coinbase proactively absorbed the migration with its 3 -point set of "U.S.-listed company + under OCC regulation + transparent reserves." In 2025-Q1  cbBTC overtook WBTC by depth of Aerodrome liquidity. In 2025-Q3  Aerodrome+Velodrome merged (94.5% : 5.5%) and entered Ethereum L1 + Circle Arc, initiating cbBTC's cross-chain replication path. As of 2026-03  circulating supply reached 89,000 BTC = ~60% of WBTC's historical peak. **The institutional-migration window is approximately 18-24  months**, and the phenomenon whereby migration cost becomes extremely high once positions solidify is structurally identical to the "irreversible counterparty migration during the window period" logic in [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ × 戦略的買収]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × 主導者 DEX 自己循環フライホイール]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 ネイティブ DEX が incumbent を逆転]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワーク中立性]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP 開発者プラットフォーム]]
<!-- /wiki-links:managed -->

## Sources
