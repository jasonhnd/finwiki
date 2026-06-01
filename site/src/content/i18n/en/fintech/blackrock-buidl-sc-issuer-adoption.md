---
source: fintech/blackrock-buidl-sc-issuer-adoption
source_hash: 0f5b9dc17c64543d
lang: en
status: machine
fidelity: ok
title: "BlackRock BUIDL · Reserve-asset Adoption Matrix across stablecoin and DeFi Protocols"
translated_at: 2026-05-31T05:31:05.779Z
---

# BlackRock BUIDL · Reserve-asset Adoption Matrix across stablecoin and DeFi Protocols

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation — legal framework for tokens, crypto-assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal framework: three-layer structure (JPYC, USDC, Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> Since GENIUS Act §501 , BUIDL has been the sole entity that is a **neutral reserve asset spanning every "white-circle" + "DeFi gray-circle" SC issuer** — USDB (Stripe/Bridge) / Frax sfrxUSD / Ondo OUSG / Ethena USDtb / Spark sUSDS all incorporate BUIDL into their reserves or collateral in some form. BUIDL is at the same time accepted as derivatives margin by CME / Binance / Deribit / Crypto.com. This "indiscriminate servicing" is BlackRock's positioning as a **neutral arms dealer**, forming a mirror image of JPMorgan's closed-loop banking model.

## Key facts

- **USDB** (Stripe/Bridge): operated mainly in BlackRock MMFs · ~$1.8B via BUIDL ^[extracted]
- **Frax sfrxUSD**: in v3 , BUIDL replaced part of the USDC · ~$200M ^[extracted]
- **Ondo OUSG**: the backend is 100% BUIDL · ~$650M ^[extracted]
- **Ethena USDtb**: fully backed by BUIDL · ~$1.4B ^[extracted]
- **Spark sUSDS** (Maker → Sky): held indirectly via an RWA vault · ~$300M ^[extracted]
- Those accepting it as IM collateral: CME (prime broker), Binance (BNB Chain 2025-11), Deribit, Crypto.com ^[extracted]
- Apollo ACRED uses BUIDL as redemption liquidity ^[extracted]

## Mechanism / How it works

BUIDL is utilized in 3  roles simultaneously: (1) **SC reserve asset** — by holding BUIDL an issuer leverages "Treasury yield" through "SC circulation"; (2) **DeFi protocol collateral** — by taking BUIDL into an RWA vault, decentralized SCs such as USDS / sfrxUSD can also indirectly access institutional-grade compliant reserves; (3) **derivatives IM** — by exchanges and prime brokers listing BUIDL as eligible margin, institutions can enjoy 4.3% APY without moving cash. **Spanning white-circle + gray-circle is the key**: BUIDL does not pick its customers (neutral arms dealer); anyone who passes KYC can purchase it → this is a mirror image of [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]'s closed-loop model that serves only its own customers, and also echoes the neutral-arms-dealer paradigm of [[fintech/wall-street-crypto-network-neutrality|Wall Street crypto-network neutrality]].

## Origin & evolution

2024-03  At BUIDL's launch, it mainly served the single customer Ondo OUSG (initially $400M+ via Ondo). 2024-Q4  Ethena USDtb + Frax v3  + Spark RWA vault connected. 2025-Q3  After USDB (Stripe/Bridge) launched, it became the largest single SC-issuer customer. 2025-11  Binance connected BUIDL as IM on BNB Chain — **the first case of a CEX directly accepting a tokenized MMF as margin**, extending the standard template of [[exchanges/rwa-tokenization-cex-integration|CEX RWA collateral integration]]. 2026-Q1  Apollo ACRED adopted BUIDL as a backup for redemption liquidity — **the first case of a private credit fund solving T+0  liquidity with BUIDL**. With 2026-05-14's $1B instant-redemption facility, BUIDL further consolidated its position as a central node of the liquidity network.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL tokenized MMF benchmark]]
- [[fintech/circular-reserve-asset-flywheel-overview|Reserve-asset interlock flywheel]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin interest-distribution economics]]
<!-- /wiki-links:managed -->

## Sources

- Public disclosures of Apollo ACRED + Ethena USDtb + Ondo OUSG and the onchain attestation of BUIDL
