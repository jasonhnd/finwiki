---
title: "[opinion] ERC-4337 Account Abstraction Primer for AI Agents"
source_entry: agent-economy/erc-4337-account-abstraction-primer-for-agents.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-4337 Account Abstraction Primer for AI Agents

> 出典エントリー: `agent-economy/erc-4337-account-abstraction-primer-for-agents.md`

## Counterpoints

**Bundler centralization is the agent-economy load-bearing risk.** Three to five Bundlers handle most 4337 UserOp volume today. Pushing AI-agent payment traffic through that bottleneck creates a small set of choke-points that could throttle, censor, or front-run agent transactions. Mitigations (PBS-style auctions, stake-based Bundler sets, in-protocol enshrinement via EIP discussions) exist on paper but have not landed. For an agent that runs thousands of x402 payments a day, a Bundler outage looks operationally identical to an internet outage.

**Paymaster sponsorship creates an implicit agency relationship.** When Stripe's Paymaster pays gas for a Stripe-onboarded agent's USDC transfer, Stripe is not just relaying — it is making a per-transaction commercial decision about which transactions it will subsidize. That is closer to MSB / money-transmitter posture than to "neutral RPC infrastructure," and creates regulatory exposure that the "we just run an RPC" framing does not survive.

**`validateUserOp` is the new attack surface.** The session-key module that enforces scope inside `validateUserOp` is now the single most security-critical piece of the agent stack — a bug there blows past every prompt-injection defense the model has, because the consensus layer is now wrong about what the agent is allowed to do. Audit and verification of session-key module bytecode is non-negotiable; see [[security/bytecode-forensic-three-tier-verify|three-tier bytecode forensic verification]] for the verification frame.

**The "no ETH" UX claim hides the float.** "Agents don't need ETH" is true at the agent surface and false in aggregate — *somebody* prefunded the Paymaster with ETH, and the cost of ETH volatility is now borne by the platform, not the user. For high-volume agent traffic this is a non-trivial line item in the platform's P&L that does not show up in the per-call accounting.

**v0.7 mempool rules ban opcodes that agents would otherwise lean on.** 4337's mempool validation rules forbid certain EVM opcodes (e.g. `TIMESTAMP`, `BLOCKHASH`, `BALANCE` against non-self addresses) inside `validateUserOp` to keep simulation deterministic. That is fine for human-driven UserOps but constraining for agent-driven flows that want time-windowed permission logic or oracle-conditional execution inside validation. The workarounds (offloading time checks to off-chain via signed attestations, doing oracle reads in the execution branch instead of validation) are well-understood but add complexity that the per-protocol overview pages do not always surface.

**Counterfactual SCW addresses can be sniped.** A SCW that is "deployed on first use" has a known address determined by CREATE2 + factory + salt. An attacker who learns that address before the agent's first UserOp can front-run by deploying a malicious contract at the same address via a competing factory. The mitigations (using factory addresses that are themselves SCWs, salting with secrets) are standard practice but the failure mode is not always obvious to agent platform engineers who treat the SCW address as "just an address."

## Open questions

- Will EntryPoint v0.8+ formalize a session-key / scoped-signer primitive at the standard level, or will it remain a per-module concern?
- What is the long-term sustainable Bundler count once 7702 EOAs share the same alt-mempool — does the Bundler economy fragment further or consolidate?
- Does Paymaster sponsorship for agent traffic eventually require an explicit license category (something like a "gas custodian" in addition to MSB)?
- How does cross-chain agent execution settle when the agent's SCW is on chain A but the API receiver is on chain B — does this end up as a 4337 + ERC-7683 (intents) composition or as something else?
- Will the next-generation Solana / Move / SVM equivalents of 4337 converge on the same UserOp / EntryPoint / Bundler / Paymaster shape, or pick a different decomposition?
