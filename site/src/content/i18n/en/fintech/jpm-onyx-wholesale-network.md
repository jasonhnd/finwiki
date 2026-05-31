---
source: fintech/jpm-onyx-wholesale-network
source_hash: 3da33d93b5fca81a
lang: en
status: machine
fidelity: ok
title: ""
translated_at: 2026-05-31T07:28:06.133Z
---
﻿# JPMorgan Onyx / Kinexys · Internal Wholesale Bank Network · Liink × JPM Coin × Onyx Digital Assets

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] for the retail deposit-token sibling product, and with [[fintech/fnality-wholesale-settlement|Fnality]] / [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] for the contrast with the multi-bank consortium model that Onyx-Kinexys deliberately rejects.

> [!info] TL;DR
> JPMorgan Onyx (founded in 2020 , **renamed to Kinexys in 2024-11 **) is JPM's proprietary wholesale-settlement / tokenized-asset network, and includes 3  major products: **Liink** (1100+ bank-to-bank messaging network, an alternative to SWIFT), **JPM Coin** (internal wholesale settlement token, circulating only among JPM clients, cumulative processing of $1.5T+), and **Onyx Digital Assets** (intraday repo + tokenized securities). Kinexys processes **$5B+** daily, **$1.5T+** cumulatively, with 180+ institutional clients. **Single-bank proprietary control** is the decisive difference from the [[fintech/fnality-wholesale-settlement|Fnality]] (20+ bank consortium) / [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] (4  major-shareholder consortium) approach. JPMD (Base live in 2025-11  + Canton migration in 2026-01 ) is Kinexys's extension toward "circulation on externally accessible public chains," and is complementary to the wholesale Onyx network.

## Key facts

- Kinexys daily processing volume **$5B+** ≈ 30-40% of USDC global daily volume (2026-Q1) ^[extracted]
- Cumulative processed volume **$1.5T+** (counted from the 2024-11  Kinexys rebrand) ^[extracted]
- 3  modules: **Liink** (interbank messaging, 1100+ banks) + **JPM Coin** (wholesale settlement) + **Onyx Digital Assets** (intraday repo + tokenized securities) ^[extracted]
- Multi-currency: USD / EUR / GBP + SGD added in 2026-Q2  ^[extracted]
- Clients: 180+ institutions (including Siemens, BlackRock, Goldman, Ant Group, etc.) (2026-Q1) ^[extracted]
- Onyx Digital Assets intraday repo: cumulative $700B+ (2026-Q1) · on-chain matching for repo of 1  day or less ^[extracted]
- Tech stack: Quorum (JPM-developed Ethereum fork, later contributed to ConsenSys) → simultaneous tech-stack upgrade with the 2024-11  rebrand ^[extracted]
- 2024-11  Onyx → Kinexys rebrand = preparation for TD "white-label" + multi-bank participation ^[extracted]

## Mechanism / How it works

The core Onyx/Kinexys model is a **"fully stacked wholesale network owned and operated by a single bank"**: JPM provides the settlement asset (JPM Coin / JPMD), the messaging layer (Liink), the asset layer (Onyx Digital Assets), the client relationships (180+ institutions), the tech stack (Quorum), and the regulatory licenses (everything covered by JPM's banking license) simultaneously. This stands in fundamental contrast to [[fintech/fnality-wholesale-settlement|Fnality]] (20+ bank consortium): **JPM does not need to coordinate among multiple shareholders → decisions are faster → in 4  years cumulative volume reached $1.5T, exceeding the scale Fnality reached in 1  years**. On the other hand, JPM cannot expand the network to "non-JPM clients" (whereas Fnality / Partior can connect clients of any member bank), which is the core "speed vs scale" trade-off discussed in [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]].

Functional split of the 3  modules:
- **Liink** (formerly IIN, Interbank Information Network) = the interbank messaging layer, connected to 1100+ banks, **does not transmit value and exchanges only KYC / compliance information** (sanctions-address checks / beneficiary confirmation, etc.), similar to [[systems/swift-iso-20022-overview|SWIFT MT 系列メッセージ]] but using blockchain in the lower layer.
- **JPM Coin** (originating in 2019 ) = wholesale settlement token, used **only among JPM clients** to book JPM commercial deposits (similar to TD but restricted internally to JPM), cumulative $300B+ → cumulative $1.5T+ after the Kinexys rebrand.
- **Onyx Digital Assets** = on-chain intraday repo + tokenized treasuries / MMF (linked with [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] and IM use cases).

Relationship to [[fintech/jpmorgan-jpmd-coin|JPMD]]: JPMD is the **externally circulating public-chain version** of Kinexys's internal settlement token (Base live in 2025-11 , Canton migration in 2026-01 ). Internal JPM Coin (Quorum private chain, JPM clients only) + external JPMD (Base/Canton public chain, JPM clients + selected counterparties) are **two on-chain forms of the same deposit**, managed in a unified way by JPM.

## Origin & evolution

2016  IIN (Interbank Information Network) started as JPM's early blockchain experiment and interbank messaging layer. 2019-02  JPM Coin was announced as the first public "bank-internal stablecoin" by a G-SIB, with internal testing reaching cumulative $300B+ (2019-2024). **2020-10  Onyx by J.P. Morgan was formally commercialized** = IIN + JPM Coin + Onyx Digital Assets were unified under a single commercial brand. 2022-Q3  Onyx Digital Assets launched tokenized repo jointly with Goldman, reaching cumulative $700B+. **2024-11  Onyx → Kinexys rebrand**: JPM's official commentary was "preparing for TD white-label + multi-bank participation," signaling a shift from "JPM-internal" to "JPM-led but more open." 2025-11  [[fintech/jpmorgan-jpmd-coin|JPMD]] on Base = the first deployment of the internal settlement token onto a public L2 . 2026-01  JPMD migrated to [[systems/canton-overview|Canton Network]] (common stack with [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Goldman + privacy). 2026-Q2  Kinexys cumulative volume reached $1.5T+ = same order of magnitude and timing as [[fintech/partior-jpm-dbs-temasek-consortium|Partior]], but JPM is a single issuer while Partior is a consortium of 4  major shareholders. 2026-05-13 JLTXX launch + additional Anchorage investment → suggests the USAT (US Anchorage TD) route.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計規模]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[systems/canton-overview|Canton Network]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
<!-- /wiki-links:managed -->

## Sources

- https://www.jpmorgan.com/kinexys — official Kinexys page
- https://www.jpmorgan.com/onyx — official Onyx page (including Onyx Digital Assets)
- https://www.jpmorgan.com/kinexys/news — Kinexys news
- https://www.jpmorgan.com/insights/payments/kinexys — JPM payment insights feature on Kinexys
- https://www.theblock.co/post/jpmorgan-onyx-kinexys-rebrand — The Block report on the rebrand
