---
title: "[opinion] Agent custody and authorization framework · 2026-05 reference architecture"
source_entry: agent-economy/agent-custody-and-authorization-framework-2026.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推定セクション / 推論 / 反論）。公開面・監査・計数から除外。
---

# 主観内容の隔離 — Agent custody and authorization framework · 2026-05 reference architecture

> 出典エントリー: `agent-economy/agent-custody-and-authorization-framework-2026.md`

<!-- Phase 1.5 追加抽出 (2026-05-29) -->

## Counterpoints / open questions

- **"Custodial vs self-custody is a false dichotomy"**: many real systems mix layers (Privy custodian on top of an ERC-4337 SCW with user-controlled recovery key). The taxonomy here is useful but bleeds at the edges.
- **The "timed expiration as default" recommendation may not survive UX testing**: users hate re-approving permissions. Real production systems quietly default to 30-90-day expiration to balance security and UX. Whether 90 days is acceptable to regulators is untested.
- **Multi-signer agent + human co-signer slows operations**: a 2-of-3 multi-sig with 1 human approver creates a human bottleneck. Realistic enterprise deployments use threshold-policy (Lit Action) for normal operations and human co-sign only for breach-of-threshold transactions.
- **Cross-chain revocation portability is missing**: an ERC-7715 grant on Ethereum doesn't automatically revoke an equivalent grant on Solana or Bitcoin. Cross-chain agent permissions require per-chain revocation management. There is no standard for this in 2026.
- **Custodian-bankruptcy isolation under GENIUS Act + MiCA**: see [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]] for the analysis. Skyfire and similar issuer-mediated models inherit bank-sponsor's bankruptcy isolation; Lit PKP and self-custody do not have this exposure but introduce different risks (Lit network governance failure).
- **AI agent that holds its own key vs principal-owned key**: the doctrinal question (is the agent "holding" the key or merely "using" the principal's key?) has implications for the principal-agent doctrine in [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]. The 2026 industry consensus is "agent uses the principal's key under scoped authority" — but a sufficiently autonomous agent with its own PKP could be argued otherwise. Regulators have not yet had to decide.
- **The "second agent as oracle" multi-signer pattern is novel and untested**: production systems are starting to explore this for high-stakes operations but the failure mode (both agents share a model defect that produces correlated bad output) is real. Diverse-vendor agent pairs (Claude + GPT) help but don't eliminate the risk.
