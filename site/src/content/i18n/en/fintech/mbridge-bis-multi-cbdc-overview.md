---
source: fintech/mbridge-bis-multi-cbdc-overview
source_hash: 66660eff115d0322
lang: en
status: machine
fidelity: ok
title: "mBridge · BIS Multi-CBDC Cross-Border Payment Bridge (Overview)"
translated_at: 2026-05-31T11:13:44.922Z
---

# mBridge · BIS Multi-CBDC Cross-Border Payment Bridge (Overview)

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation for tokens, crypto assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory architecture]] for the broader system boundary.

> [!info] TL;DR
> mBridge is a wholesale CBDC network that directly settles between central banks. It is based on HotStuff BFT + DLT permissioned ledger, bypasses SWIFT + Fedwire, and performs point-to-point PvP atomic settlements in each country's local currency CBDC. The withdrawal of BIS from 2025-10 freed China-led freedom, forming a bipolar structure with the 3-yen MRA-US dollar system.

## Key facts

- Incubated in 2021 by BIS Innovation Hub, PBoC, HKMA, BoT, and CBUAE. ^[extracted]
- 2024-06 Expanded to 5 central bank by joining Saudi SAMA · 2024 MVP stage ^[extracted]
- 2025-10 BIS withdraws from operations due to "geopolitical risks" ^[extracted]
- Consensus is HotStuff BFT · Central banks 100% Validators · Commercial banks are sub-participants ^[extracted]
- Payment model is PvP (Payment-versus-Payment) atomic · Testnet < 10 seconds ^[extracted]
- Total GDP of covered countries approx. 35% ^[extracted]
- 2030 Estimated processing volume $35-75B/year · Equivalent to SWIFT cross-border 0.5-1% ^[extracted]

## mBridge ledger, PvP settlement, and validator model

Each central bank operates an mBridge validator node 1 + its own CBDC ledger, and shares the mBridge ledger to perform cross-currency payments. The PvP model ensures that 2 items's CBDC transfers are simultaneous successes or simultaneous rollbacks, eliminating Herstatt risk. Commercial banks are connected via each country's central bank as sub-participants -- there are no private nodes. HotStuff BFT provides < 10 seconds finality, contrasted with SWIFT MT cross-border 1-3 days. The withdrawal of BIS (2025-10) has rather freed China's PBoC to lead the protocol — with the BIS neutrality constraint removed, mBridge can more aggressively expand into the BRICS+ currency and commodity trade scenario. See [[fintech/cross-border-sc-via-swift-api|Cross-border smart contracts via SWIFT API]] for comparison with SWIFT API channel.

## Origin & evolution

The BIS Innovation Hub Hong Kong Centre launched the project in 2021 with PBoC, HKMA, BoT, and CBUAE. The 2022-2023 PoC completed cross-currency tests; Saudi SAMA joined in 2024-06, expanding the group to five central banks. In 2024 the MVP reached commercial-ready status and was tested against Aramco oil settlement, China-Brazil soybean trade, and China-Arab gold-delivery scenarios. BIS withdrew from operation in 2025-10, publicly citing geopolitical risk. In 2026-Q2, interoperability testing with Brazil BCB DREX pointed toward a cross-continental non-USD settlement loop; see [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement-ring scale]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|Mbridge Bis Multi CBDC Vs Agora]]
- [[fintech/mbridge-six-central-banks-roster|mBridge six central-bank roster and roles]]
- [[fintech/three-circles-stablecoin-mra-framework|Three-circle MRA framework]]
- [[fintech/jurisdiction-list-monetary-protectionism|Jurisdiction list and monetary protectionism]]
<!-- /wiki-links:managed -->

## Sources
