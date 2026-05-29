---
title: "[opinion] ERC-7702 EOA Delegation Primer for AI Agents"
source_entry: agent-economy/erc-7702-eoa-delegation-primer-for-agents.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-7702 EOA Delegation Primer for AI Agents

> 出典エントリー: `agent-economy/erc-7702-eoa-delegation-primer-for-agents.md`

## Counterpoints

**Delegation is a much sharper-edged action than users are used to.** A normal Ethereum transaction transfers a bounded asset. A `SET_CODE_TX` transfers *all future authority over the address* to a contract. If the contract is malicious, every asset at the address — including assets received in the future — is at risk. Wallet UX has to communicate this asymmetry in a way that ordinary users actually internalize, and the early evidence (MetaMask UI iterations in 2025) suggests this is hard.

**Persistent delegation creates a long-lived dependency on the wallet implementation.** If the user delegated to Safe vMonth-X two years ago and the Safe codebase has since changed in incompatible ways, the user's address is still pinned to the old implementation. Migration requires a new `SET_CODE_TX` and ideally implementation versioning hygiene that the EIP does not enforce.

**Dust attacks against delegation revocation.** The 7702 revocation pattern depends on the user being able to sign and broadcast a removal transaction. An attacker who has compromised the delegated contract can attempt to grief the user by spamming the address with transactions that interfere with revocation gas economics, or by exhausting the SCW's revocation paths. Mitigations exist but are not standardized.

**The "no migration" benefit collapses if the agent permissions live elsewhere.** If the actual scope enforcement is in an [[agent-economy/erc-7715-overview|ERC-7715]]-style permission registry rather than in the delegated contract, then upgrading wallets to a new implementation requires re-installing every permission anyway — and the address-continuity advantage of 7702 over 4337 narrows.

**Composability with 4337 is the load-bearing assumption.** Most agent-economy production stacks assume "7702 EOA + 4337 EntryPoint" works seamlessly. It does, today, for EntryPoint v0.7. Any future version of the EntryPoint that subtly changes the SCW validation interface, or any Bundler optimization that requires SCW-specific bytecode signatures, could break 7702-delegated wallets in ways pure SCWs would not feel.

## Open questions

- Will mainstream wallets ship "auto-delegate to a vetted implementation" UX, making 7702 effectively a one-tap upgrade for the existing EOA install base?
- Does the address-continuity property of 7702 become the dominant reason agent SDKs target 7702 first and 4337 second over the next 24 months?
- How will the cross-jurisdictional "I signed away my address" liability play out in the first major social-engineering case?
- Will L2s ship native 7702 support at the same fidelity as mainnet, or will the L2 implementations diverge in ways that fragment the agent-execution surface?
- Does the single-tx delegation pattern become a building block for an [[agent-economy/ap2-overview|AP2]] mandate-style authorization, where every mandate maps to one 7702 single-tx delegation?
- Does a "delegation registry" (analogous to a token allowance list) emerge as the user-facing primitive for managing 7702 designations across many chains?
