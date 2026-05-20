---
title: "bitFlyer Blockchain"
aliases:
  - "bitFlyer Blockchain"
  - "bitflyer-blockchain"
  - "Miyabi"
  - "miyabi blockchain"
domain: "systems"
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [systems, blockchain, private-chain, bitflyer, miyabi]
status: active
sources:
  - "https://blockchain.bitflyer.com/"
  - "https://bitflyer.com/en-jp/miyabi"
  - "https://bitflyer.com/en-jp/miyabi-blockchain"
---

# bitFlyer Blockchain

## TL;DR

bitFlyer Blockchain is the enterprise blockchain arm around bitFlyer's proprietary private-chain technology, Miyabi. In FinWiki it should be treated as a **systems / enterprise DLT** node, not as a CEX entity. The page is connected from [[JapanFG/bitflyer|bitFlyer]] because Miyabi is part of the group's B2B blockchain story.

## System profile

- **Core product**: Miyabi, a private blockchain / blockchain-type database for enterprise use.
- **Design claim**: bitFlyer describes Miyabi as finality-oriented and high-throughput, with an official performance claim of 2,000 transactions per second, or 4,000 on advanced hardware.
- **Use case class**: permissioned enterprise workflows, B2B blockchain consulting, and systems where fork risk and settlement finality are more important than public-chain openness.
- **Adjacent network role**: bitFlyer Blockchain has also appeared in web3 research and validator / ecosystem activities such as Oasys-related announcements.

## Strategic read

Miyabi sits on the opposite side of the design spectrum from public permissionless chains. It optimizes for finality, controllability, and enterprise integration rather than open validator economics. This makes it closer to [[systems/canton-overview|Canton]], [[systems/hyperledger-besu-overview|Besu]], and institutional DLT than to CEX market structure.

For [[JapanFG/bitflyer|bitFlyer]], the strategic value is optionality: exchange business on one side, and enterprise chain / consulting infrastructure on the other. The open question is whether Miyabi has enough active adoption to be a durable product line rather than a technical showcase.

## Counterpoints

- Official performance claims are vendor claims; real-world adoption and production workload data need separate verification.
- Enterprise private-chain demand competes with Canton, Besu, Quorum-style stacks, cloud-managed ledger services, and sometimes ordinary databases.
- The strategic relationship between Miyabi and Japan's stablecoin / tokenized deposit infrastructure is not yet explicit from public sources.

## Open questions

- Which production customers or regulated use cases still run on Miyabi.
- Whether Miyabi is positioned as consulting IP, a productized platform, or a reference implementation.
- Whether Miyabi has a credible role in Japan tokenized money infrastructure, or remains separate from [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]].

## Related

- [[JapanFG/bitflyer]]
- [[exchanges/jp-exchange-bitflyer]]
- [[systems/canton-overview]]
- [[systems/hyperledger-besu-overview]]
- [[systems/formal-spec-implementation-codesign]]

## Sources

- bitFlyer Blockchain official site.
- bitFlyer Miyabi product pages.
