---
source: systems/erc-7702-overview
source_hash: 07afc16744749e47
lang: en
status: machine
fidelity: ok
title: "ERC-7702  Overview · The Pectra Upgrade Where EOAs Temporarily Gain SCW Functionality"
translated_at: 2026-06-01T04:15:40.163Z
---

# ERC-7702  Overview · The Pectra Upgrade Where EOAs Temporarily Gain SCW Functionality

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Pectra 2025-05  mainnet activation (including 7702 + 7251 validators + 2935 blockhash, etc.) ^[extracted]
- In 2024-05 , after abandoning EIP-3074 , Vitalik personally drafted 7702  ^[extracted]
- SET_CODE_TX (EIP type 0x04) was newly introduced ^[extracted]
- 90% of ETH holders still use EOAs (MetaMask / Rabby / Trust Wallet) · this is the target of 7702  ^[extracted]
- 2026-Q1-Q2: MetaMask / Rabby / Coinbase Wallet support it by default ^[extracted]

## Mechanism / How it works

**Core problem**: ERC-4337  requires users to migrate to a new address (SCW address ≠ EOA address). For EOA users who already have on-chain history, ENS, NFTs, and DeFi positions, the migration cost is unacceptable.

**The core reason Vitalik promotes 7702 **:
- 90% of ETH holders still use EOAs
- 4337  shows that in 2023-2025  over 2  years, SCW penetration was < 5% — proving that the "create a new SCW" route is too slow for adoption
- A route to **directly upgrade EOAs** is necessary · all EOAs can gain SCW functionality overnight

**Mechanism**:
- Introduce `SET_CODE_TX` (EIP type 0x04)
- The user (EOA), by signature, authorizes contract code to be assigned to their own address during that tx
- After the tx completes · the code can be retained (persistent delegation) or removed
- In persistent mode · the EOA's behavior becomes fully equivalent to an SCW · but the address does not change

**Typical application flow**:
1. The EOA user signs a `delegationDesignator` (SCW implementation contract · for example, a reference to Safe / Kernel)
2. The user (or gas sponsored through a Bundler) issues `SET_CODE_TX`
3. The EOA address thereafter executes with SCW logic — batch, sponsor, session key, etc. become possible
4. The user can remove the delegation at any time by signature · returning to a pure EOA state

## Origin & evolution

During 2017-2024 年 · Ethereum AA efforts were attempted multiple times: EIP-86 (2017  failure) → EIP-2938 (2020  failure) → EIP-3074 (2022  nearly realized but with signature replay issues) → ERC-4337 (implemented at the application layer in 2023-03 ) → EIP-7702 (drafted by Vitalik in 2024-05 ).

**Important differences from ERC-3074 **:
- 3074  uses the `AUTH/AUTHCALL` opcode · requires an invoker contract intermediary · UX is complex + signature replay risk is high
- 7702  directly sets code at the tx layer · **closer to a native SCW experience** · and shares 4337  and EntryPoint infrastructure

**Timeline**:
- 2024-05: Vitalik abandoned 3074  · drafted 7702 
- 2025-05: Pectra mainnet activation (7702 + 7251 + 2935 , etc.)
- 2026-Q1-Q2: MetaMask / Rabby / Coinbase Wallet support it by default
- 2026-H2: Fusaka upgrade further optimizes the 7702  economic model

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[agent-economy/erc-7715-overview|ERC-7715(7702 EOA も接続可能)]]
<!-- /wiki-links:managed -->

## Sources

- EIP-7702 "Set Code for EOAs" — https://eips.ethereum.org/EIPS/eip-7702
