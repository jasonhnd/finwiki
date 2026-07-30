---
title: M0 / M Network · 2026 インフラ更新 · modular stablecoin infrastructure
aliases:
  - m0-network-infrastructure-update-2026
  - M0 2026 update
  - M Network 2026
  - M0 stablecoin extensions
  - M0 governance
domain: fintech
created: 2026-05-25
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, m0, m-network, neutral-infra, multichain, 2026-event]
status: active
sources:
  - https://docs.m0.org/get-started/overview/
  - https://docs.m0.org/get-started/how-it-works
  - https://docs.m0.org/build/overview/
  - https://docs.m0.org/build/cross-chain
  - https://docs.m0.org/protocol/m-token
  - https://docs.m0.org/resources/addresses
  - https://dashboard.m0.org/
---

# M0 / M Network · 2026 インフラ更新 · modular stablecoin infrastructure

## TL;DR

M0 は単一の consumer-facing stablecoin brand ではなく、builder と issuer が custom stablecoin を構築するための modular infrastructure である。公式 documentation は、(1) application-specific **Stablecoin Extensions**、(2) regulated issuer が担う issuance / reserve operation、(3) shared liquidity と cross-chain transport を扱う **Onchain Orchestration / M0 Portals** を区別する。従来このページにあった `USDM`、`MXNB pilot`、独自 `M Bridge`、特定の reserve composition、market cap、partner pipeline、governance threshold などの 2026 数値は、引用されていた M0 一次資料から確認できなかったため削除した。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/m-network-m0-neutral-infrastructure|M0 中立インフラ基礎ページ]] and [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークン戦略のトリレンマ]].

## Verified architecture

[M0 architecture overview](https://docs.m0.org/get-started/how-it-works) と [builder guide](https://docs.m0.org/build/overview/) が説明する current public model は以下の通りである。

1. **Builder / application layer** — builder は brand、transfer rule、access control、reward distribution、compliance logic を設定した Stablecoin Extension を構築する。
2. **Issuer layer** — qualified financial institution が reserve、mint / burn、regulatory operation を担う。builder は issuer と提携し、自ら reserve-management stack を構築しない選択ができる。
3. **Shared-liquidity layer** — M0-powered tokens は platform の conversion / orchestration mechanism を通じて liquidity を共有できる。
4. **Cross-chain layer** — M0 Portals は Wormhole、Hyperlane、LayerZero の messaging / token-transfer frameworks を利用する。したがって「汎用 bridge を使わない独自 canonical bridge」という旧記述は誤りだった。
5. **M token** — protocol documentation は `$M` を extensions の基礎となる ERC-20 token と説明し、earning / non-earning balance の二方式を定義する。これは governance token と同義ではない。

## Product and role matrix

下表は [M0 overview](https://docs.m0.org/get-started/overview/)、[issuer overview](https://docs.m0.org/issuers/overview)、[cross-chain documentation](https://docs.m0.org/build/cross-chain) の役割分担を要約する。

| Layer / actor | Verified function | What is not implied |
|---|---|---|
| Builder | Designs an application-specific stablecoin and its rules | Builder is not automatically the regulated issuer |
| Issuing partner | Holds permissible reserves and operates mint / burn under its jurisdiction | One licence does not create worldwide issuance authority |
| Stablecoin Extension | Custom token contract that can wrap / unwrap against the M0 foundation | Every extension need not have identical eligibility or rewards |
| Onchain Orchestration | Coordinates conversion and liquidity access | It does not remove counterparty, smart-contract, or regulatory risk |
| M0 Portals | Transfers extensions across supported networks using named messaging providers | It is not a bridge-free proprietary settlement network |
| `$M` | Collateral-backed protocol building block with earning and non-earning balances | It is not evidence for an unrelated `$M` governance-token supply claim |

## Extension templates

The official builder guide describes two core templates:

- **Treasury (`MYieldToOne`)** — accrued rewards flow to one designated treasury address.
- **Multi-Collateral (`JMI`)** — extends Treasury functionality and supports minting against whitelisted stablecoins such as USDC and USDT.

Custom behaviour is possible, but M0 states that changes beyond standard templates require an independent audit. Earning is also not automatic: an extension contract must receive earner approval through the onchain configuration process before `enableEarning()` is called.

## Network and bridge scope

M0's supported-network list changes over time. As of the 2026-07-30 review, the builder guide lists Ethereum and multiple EVM networks plus Solana; the authoritative current inventory is the [official contract-address page](https://docs.m0.org/resources/addresses), not a hard-coded chain count in this wiki.

The [cross-chain page](https://docs.m0.org/build/cross-chain) identifies:

- Wormhole Native Token Transfer;
- Hyperlane general message passing;
- LayerZero Omnichain Fungible Token.

This architecture gives builders multi-network reach while retaining explicit bridge dependencies. Security review therefore needs both M0 contracts and the selected cross-chain provider in scope.

## Public ecosystem snapshot

The [M0 dashboard](https://dashboard.m0.org/) is the appropriate first-party surface for live stablecoin count, supply and transfer-volume snapshots. These values are dynamic and should be captured with a date whenever used. The builder documentation names examples of M0-powered issuers / products, but names on a platform page do not by themselves prove a particular currency, reserve composition, licence scope, or distribution arrangement.

## Due-diligence checklist

Before treating an M0-powered token as a regulated payment stablecoin, verify:

1. the legal issuer and governing jurisdiction;
2. the reserve asset policy and custody arrangement;
3. redemption eligibility, timing, minimum and fees;
4. whether balances earn rewards and who captures them;
5. deployed contract addresses on each network;
6. bridge / portal provider and failure controls;
7. audit reports for both standard and custom contract code;
8. current onchain configuration, including earner approval.

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/m-network-m0-neutral-infrastructure|M0 / M Network 中立ステーブルコイン・インフラ基礎ページ]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD 半コンプラ化ルート]]
- [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1 政治型ステーブルコイン]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS 分散型ステーブルコイン]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL トークン化 MMF 概要]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe Trojan Horse ルート]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークン戦略のトリレンマ]]

## Sources

- M0 — About M0: https://docs.m0.org/get-started/overview/
- M0 — Architecture overview: https://docs.m0.org/get-started/how-it-works
- M0 — Build a stablecoin: https://docs.m0.org/build/overview/
- M0 — Cross-chain: https://docs.m0.org/build/cross-chain
- M0 — M token: https://docs.m0.org/protocol/m-token
- M0 — Contract addresses: https://docs.m0.org/resources/addresses
- M0 — Dashboard: https://dashboard.m0.org/
