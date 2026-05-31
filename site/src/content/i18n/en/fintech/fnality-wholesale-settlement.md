---
source: fintech/fnality-wholesale-settlement
source_hash: 0bb08020e18d4aab
lang: en
status: machine
fidelity: ok
title: "Fnality International · Banking Consortium Wholesale Settlement Token · BoE-Licensed GBP Already Live"
translated_at: 2026-05-31T06:16:15.674Z
---

# Fnality International · Banking Consortium Wholesale Settlement Token · BoE-Licensed GBP Already Live

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] and [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]] for the wholesale-settlement consortium triangle, and with [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]] for the governance pattern that gives Fnality its multi-bank shape (vs. JPM single-issuer model).

> [!info] TL;DR
> Fnality International is a UK-registered wholesale settlement infrastructure company that maps the reserves (central bank money) held by each member bank at the central bank onto on-chain tokens (**Fnality Payment System tokens, fnPS**) at 1:1 , enabling 7×24  instant domestic-currency settlement between banks. **The Sterling Fnality Payment System (£ fnPS) received Bank of England approval in 2023-12  and officially launched in 2024 Q2 **, becoming the world's first wholesale settlement token system with central bank authorisation and backed by central bank reserves at 100%. Shareholders include **Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, State Street, Nasdaq Ventures, DTCC** and 20+ other global major banks and infrastructure firms; the USD / EUR systems are under supervisory negotiation with the Fed / ECB. Fnality is the "multi-bank federation" counterpart to the single-issuer route of [[fintech/jpm-onyx-wholesale-network|JPM Onyx]].

## Key facts

- Registered jurisdiction: UK (London) · Established 2019  (predecessor USC Utility Settlement Coin project from 2015) ^[extracted]
- Key milestone: BoE 2023-11-21 official statement confirmed that FnPS GBP system is licensed under BoE supervision as a systemically important payment system ^[extracted]
- £ fnPS **2024 Q2  launch** · first commercial production transaction: Lloyds × Santander × UBS ^[extracted]
- USD / EUR / JPY systems under 2026  supervisory negotiations (Fed / ECB / BoJ) · expected to launch 2026-2027  respectively ^[extracted]
- 20+ shareholder banks + infrastructure: Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, Sumitomo Mitsui, State Street, Nasdaq Ventures, DTCC, Euroclear, etc. ^[extracted]
- Cumulative equity raised ~**£325M** (across multiple rounds) · CEO Rhomaios Ram (former Deutsche Bank) ^[extracted]
- Technology stack: Enterprise Ethereum (Quorum / migrated to Hyperledger Besu) + DvP / PvP modular ^[extracted]
- Use cases: interbank RTGS 7×24  instant · cross-currency PvP · securities DvP · used in conjunction with [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] tokenized MMF as initial margin ^[extracted]

## Mechanism / How it works

Fnality's core model = **"on-chain central bank reserves"** (vs. JPM Coin / JPMD = "on-chain commercial bank deposits" TD). Each member bank opens an **Omnibus account** (pooled account) at BoE / Fed / ECB / BoJ and deposits reserves; Fnality then mints an equal amount of fnPS tokens on the blockchain. An interbank fnPS transfer at settlement = an on-chain change in central bank reserve ownership, with **T+0  finality equivalent to RTGS final settlement**, not a commercial bank deposit "credit assumption". This is the private-sector route to "wholesale settlement currency (wholesale CBDC)" in [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]] — the central bank does not issue tokens itself; instead Fnality, as a regulated payment service provider, tokenizes the omnibus reserves.

The technology stack is Enterprise Ethereum (starting with Quorum, migrated to Hyperledger Besu), and together with [[systems/canton-overview|Canton]] (Goldman/DTCC route) and [[fintech/jpm-onyx-wholesale-network|JPM Kinexys]] (single-bank Quorum), forms "3  types of wholesale settlement technology stack". In 2024 Q4 , Fnality officially announced a partnership with [[systems/swift-iso-20022-overview|SWIFT]]: SWIFT provides the cross-border messaging layer + Fnality provides the settlement token, replicating a concrete implementation of the [[fintech/bis-project-agora-overview|BIS Agora]] public-private hybrid architecture.

Cross-currency PvP (Payment vs Payment) is Fnality's next killer use case: £ fnPS × $ fnPS are exchanged in the same atomic transaction, **eliminating Herstatt risk (cross-timezone settlement failure risk)**. In the FX spot market, approximately 30% of the daily ~$7.5T still bears Herstatt risk; Fnality PvP is an on-chain upgrade of [[systems/cls-bank-overview|CLS Bank]].

## Origin & evolution

2015-2018  USC (Utility Settlement Coin) research project = led by UBS, 16 行 major banks participating, proof of concept. **2019  USC → Fnality International** (commercialisation), first-round raise of £63M (15 行). **2023-11-21** BoE official statement confirmed Fnality receiving BoE supervisory authorisation as a systemic payment system, becoming the world's first central-bank-approved wholesale settlement token. **2024 Q2  £ fnPS launch**, first commercial transaction: Lloyds × Santander. 2024 Q4  official SWIFT partnership (SWIFT messaging + Fnality token for cross-border settlement). 2025  USD/EUR negotiations reach substantive stage, but Fed delays under the GENIUS Act ("to avoid $ fnPS affecting USDC/USDT circulation"). 2025-09  [[fintech/genius-act-501-denylist-mandate|GENIUS Act 施行]] → wholesale settlement tokens are outside §501  stablecoin oversight scope (because 100% central bank reserves + interbank circulation only), creating legislative space for $ fnPS. 2026 Q1  linkage with [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] tokenized MMF = fnPS tested as initial margin collateral in CME / DTCC derivatives scenarios. **Fnality is the "international public infrastructure" route for wholesale settlement**: in contrast with the [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] single-bank route and forming a regional division of labour with the [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] Singapore 4 行 route.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]]
- [[systems/canton-overview|Canton Network]]
<!-- /wiki-links:managed -->

## Sources

- https://www.fnality.org/ — Fnality official homepage
- https://www.fnality.org/news-views — Fnality news releases
- https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality — BoE 2023-11  Fnality-related official statement
- https://www.fnality.org/governance — Fnality shareholders and governance structure
- https://www.swift.com/news-events/news/swift-fnality-collaboration — SWIFT × Fnality partnership announcement
