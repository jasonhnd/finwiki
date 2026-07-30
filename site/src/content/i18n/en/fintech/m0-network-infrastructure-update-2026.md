---
source: fintech/m0-network-infrastructure-update-2026
source_hash: 81f39a9a60c96335
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "M0 / M Network · 2026 infrastructure update · modular stablecoin infrastructure"
translated_at: 2026-07-29T16:58:44.991Z
---
# M0 / M Network · 2026 infrastructure update · modular stablecoin infrastructure

## TL;DR

M0 is not a single consumer-facing stablecoin brand, but modular infrastructure on which builders and issuers can create custom stablecoins. The official documentation distinguishes (1) application-specific **Stablecoin Extensions**, (2) issuance / reserve operations performed by a regulated issuer, and (3) **Onchain Orchestration / M0 Portals** for shared liquidity and cross-chain transport. This revision removes the previous `USDM`, `MXNB pilot`, proprietary `M Bridge`, specified reserve composition, market cap, partner pipeline, governance threshold and other 2026 figures because the cited M0 primary materials did not establish them.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/m-network-m0-neutral-infrastructure|M0 neutral-infrastructure foundation]] and [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token strategy trilemma]].

## Verified architecture

[M0 architecture overview](https://docs.m0.org/get-started/how-it-works) and the [builder guide](https://docs.m0.org/build/overview/) describe the current public model as follows.

1. **Builder / application layer** — a builder creates a Stablecoin Extension with configured branding, transfer rules, access control, reward distribution and compliance logic.
2. **Issuer layer** — a qualified financial institution handles reserves, mint / burn and regulatory operations. A builder can partner with an issuer instead of building its own reserve-management stack.
3. **Shared-liquidity layer** — M0-powered tokens can share liquidity through the platform's conversion / orchestration mechanisms.
4. **Cross-chain layer** — M0 Portals uses the messaging / token-transfer frameworks of Wormhole, Hyperlane and LayerZero. The previous description of a proprietary canonical bridge that uses no general-purpose bridge was therefore incorrect.
5. **M token** — protocol documentation describes `$M` as the underlying ERC-20 token for extensions and defines earning / non-earning balances. This is not synonymous with a governance token.

## Product and role matrix

The table below summarizes the division of roles in the [M0 overview](https://docs.m0.org/get-started/overview/), [issuer overview](https://docs.m0.org/issuers/overview), and [cross-chain documentation](https://docs.m0.org/build/cross-chain).

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
- [[fintech/m-network-m0-neutral-infrastructure|M0 / M Network neutral stablecoin infrastructure]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD semi-compliant route]]
- [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1 political stablecoin]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS decentralized stablecoin]]
- [[fintech/stablecoin-revenue-split-economics|Stablecoin interest-sharing economics]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL tokenized MMF overview]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe Trojan Horse route]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|Stablecoin-chain-token strategy trilemma]]

## Sources

- M0 — About M0: https://docs.m0.org/get-started/overview/
- M0 — Architecture overview: https://docs.m0.org/get-started/how-it-works
- M0 — Build a stablecoin: https://docs.m0.org/build/overview/
- M0 — Cross-chain: https://docs.m0.org/build/cross-chain
- M0 — M token: https://docs.m0.org/protocol/m-token
- M0 — Contract addresses: https://docs.m0.org/resources/addresses
- M0 — Dashboard: https://dashboard.m0.org/
