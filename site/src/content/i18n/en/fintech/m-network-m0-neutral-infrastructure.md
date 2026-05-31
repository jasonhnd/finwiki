---
source: fintech/m-network-m0-neutral-infrastructure
source_hash: 81cb3e8e7ede7547
lang: en
status: machine
fidelity: ok
title: "M^0  / M Network · Neutral Stablecoin Infrastructure · \"Swiss Bank Model\""
translated_at: 2026-05-31T07:28:06.171Z
---
# M^0  / M Network · Neutral Stablecoin Infrastructure · "Swiss Bank Model"

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> M^0 (M Network) does not issue a stablecoin under its own brand. Instead, it provides **shared, standardized reserve / minting / governance infrastructure** to multiple issuers. The analogy to the "Swiss bank model" is that it avoids brand competition and offers only a neutral vault. Investors include BlackRock, Goldman, Bain Capital, and Pantera, with **$40M+** raised in 2025 H2 . M^0  is a core example of the **layered logic** of the post-§501  stablecoin industry: the brand layer (USDC / USDB / PYUSD) keeps competing, while the infrastructure layer (M^0  / BUIDL / Bridge) becomes neutralized and accelerates the formation of a **long-tail stablecoin** market.

## Key facts

- Raised **$40M+** (2025 H2); investors are BlackRock + Goldman + Bain Capital + Pantera ^[extracted]
- Token: $M (DAO governance) ^[extracted]
- Chains: Ethereum + Base + Arbitrum + Solana (planned) ^[extracted]
- Reserve-asset connectivity: BUIDL + UST + cash ^[extracted]
- Smart-contract audits: OpenZeppelin + Trail of Bits + Certora ^[extracted]
- Issuer roster (2026-05) ~8 社 (a European 2  bank + a Japanese 1  fintech + a US 3  RWA protocol; partly undisclosed) ^[extracted]
- Stablecoins under management: about **$300M** (2026-05 , growing rapidly) ^[extracted]
- Co-founders: Greg Di Prisco (ex-MakerDAO core) + Luca Prosperi ^[extracted]

## Mechanism / How it works

The traditional model is that the issuer handles reserve management, smart contracts, and its own distribution at the same time (Circle / Paxos / Tether are all vertically integrated). **M^0 's layered neutral model**: (1) **Infrastructure Layer** = M^0  provides unified connectivity to [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / UST / cash reserves, unified smart contracts (EVM-compatible), and DAO-based issuer qualification review; (2) **Brand Layer** = multiple issuers share M^0  infrastructure while keeping their own brands (Bank X's SC / Fintech Y's SC / cross-border payments company Z's SC). Institutions, fintechs, and banks that want to issue stablecoins **do not need to reinvent the wheel**. They can plug directly into M^0 's compliance template, reserve connectivity, smart-contract audits, and DAO governance, and launch a compliant stablecoin within weeks. Fees are charged in bps relative to issuance size, similar to BUIDL's 20bps management fee, without being dragged into brand competition. It shares the same strategic position as [[fintech/wall-street-crypto-network-neutrality|ウォール街暗号ネットワーク中立]].

## Origin & evolution

M^0  v1  mainnet went live in 2024-10 . In 2025 H2  it completed a **$40M+** raise from BlackRock, Goldman, Bain Capital, and Pantera, simultaneously securing backing from the leading tokenized MMF player, a top-tier investment bank, and a top-tier crypto VC. In 2026-Q1  it discussed building an "infrastructure alliance" together with Bridge (Stripe), though progress is unclear. **The $M token design resembles MakerDAO's MKR**: holders participate in issuer qualification review and risk-parameter governance. Greg Di Prisco's MakerDAO background directly gives M^0  its DAO-governance DNA. **The implicit BlackRock × Goldman × M^0  closed loop**: BlackRock invests in M^0  and makes BUIDL the default reserve for M^0 , creating a closed loop of "BlackRock reserves + M^0  infrastructure"; Goldman invests in M^0  and jointly builds a $1B instant-redemption facility with BlackRock, providing T+0  liquidity to yield infrastructure. Together, they are co-leading the **long-tail stablecoin infrastructure** via M^0 .

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 採用マトリクス]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
<!-- /wiki-links:managed -->

## Sources
