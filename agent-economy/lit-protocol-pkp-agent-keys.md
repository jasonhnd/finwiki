---
title: "Lit Protocol PKP · Programmable Key Pairs for AI agents"
aliases:
  - "lit-protocol-pkp-agent-keys"
  - "Lit Protocol"
  - "Programmable Key Pair"
  - "PKP"
  - "threshold cryptography agent signing"
domain: "agent-economy"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, identity, signing, lit-protocol, pkp, mpc, threshold-bls, agent-wallet]
status: active
sources:
  - "https://litprotocol.com/"
  - "https://developer.litprotocol.com/"
  - "https://github.com/LIT-Protocol"
  - "https://spark.litprotocol.com/"
---

# Lit Protocol PKP · Programmable Key Pairs for AI agents

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]. Read it against [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] and [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] for peer wallet stacks, [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]] for the policy / scope layer, and [[systems/threshold-bft-consensus-rust-implementations|threshold BFT]] for the underlying cryptography family.

## Key facts

- **Lit Protocol** is a decentralized network for **distributed key management** using threshold cryptography (BLS / ECDSA threshold signatures)
- **PKP (Programmable Key Pair)** = a key whose private half is split across Lit nodes; no single node ever sees the full key
- PKPs can be **conditionally controlled by code** ("Lit Actions") — JavaScript run inside Lit's secure enclave that authorizes signing
- Use case: an AI agent controls a wallet whose signing requires runtime policy evaluation (rate limits, scope checks, multi-factor) but without a centralized custodian
- Contrasts with **single-server custody** (Privy / Magic) and **EOA + ERC-4337 smart-account** ([[agent-economy/erc-4337-account-abstraction-primer-for-agents|see primer]])

## Mechanism — how PKPs sign for agents

1. **PKP minted** as an NFT — the NFT owner controls who can request signatures
2. **Private-key shares** distributed across Lit nodes via DKG (distributed key generation)
3. **Signing request** flows: caller submits message + Lit Action (JS code) → Lit nodes execute the action in TEE → if action returns `sign: true`, threshold-sign the message
4. **Output** is a standard ECDSA / BLS signature usable on EVM, Bitcoin, Solana, Cosmos, or any chain
5. **No node ever assembles** the full private key — even a majority compromise leaks only a key-share

```
AI agent ──► sign(msg)
              │
              ▼
       Lit Action (JS)
       (runs in TEE on each node)
       - check msg semantics
       - check rate limits
       - check policy / oracle
       - return {sign: bool, msg: bytes}
              │
              ▼
  threshold-BLS signature
  reassembled by caller
              │
              ▼
  use on any chain (EVM / BTC / SOL / ...)
```

## Where PKP fits in agent stacks

| Capability | EOA + 4337 smart account | PKP + Lit Action |
|---|---|---|
| Key custody | Single device or custodian | Threshold across Lit network |
| Policy logic | On-chain (smart-account code) | Off-chain JS in TEE |
| Cross-chain | Each chain needs separate smart account | One PKP signs for any chain natively |
| Latency | Smart-account call cost + L2 inclusion | Lit network round-trip ~1-3s |
| Composability | EVM tooling rich | Newer pattern; Lit Actions ecosystem narrower |
| Censorship surface | Bundler / sequencer | Lit node set |

PKPs are particularly useful when:

- The agent must sign on **multiple chains** without redeploying smart-account infrastructure each time
- Policy must run **off-chain** (oracle checks, web2 API consultation) before signing
- Custody risk should be **distributed** rather than concentrated at a single SaaS custodian like Privy

## Comparison vs embedded wallet operators

| Layer | Privy / Magic / Dynamic | Lit PKP |
|---|---|---|
| Custody architecture | SaaS server custody (typically TEE-protected) | Threshold across Lit nodes |
| Trust assumption | Trust the SaaS operator | Trust the Lit node set (1-of-n or threshold) |
| Multi-chain | Per-chain key generation | Single PKP for all chains |
| Programmable policy | Limited (signing-policy SDK) | Full JS in Lit Action |
| Recovery | Operator-managed (email, OAuth) | NFT-owner controlled |

For AI agents, the PKP model maps cleanly to: **agent owns PKP NFT, policy in Lit Action enforces scope (max spend, allowed contracts, time window), agent calls Lit network to sign per action**. This complements [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]] for the on-chain side and [[agent-economy/ap2-overview|AP2 mandate VC]] for the off-chain authorization side.

## Origin and evolution

Lit launched in 2021-2022 as a "decentralized access control" project (token-gated content). The pivot to general-purpose threshold signing + Lit Actions happened in 2023; PKPs gained traction in 2024 as agent / wallet builders needed cross-chain signing without custodial single-point-of-failure. By 2025-2026 Lit positioned as **infrastructure for "agent-controlled wallets"** — adjacent to but distinct from [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus]] systems.

## Use cases for AI agents

- **Cross-chain trading agent** — one PKP signs swaps on Ethereum, Solana, Cosmos
- **Subscription agent** — Lit Action verifies cron + on-chain balance before signing recurring payment
- **Multi-sig-like delegation** — PKP NFT shared across user + agent; either can trigger conditional sign
- **Oracle-gated execution** — Lit Action calls Chainlink / Pyth before signing if price moves trigger trade
- **Recovery / inheritance** — PKP NFT held in social-recovery scheme; agent operates day-to-day, NFT recoverable

## Counterpoints

- **Lit node set is the trust root** — Lit Protocol is a 2nd-party network; if it goes down or splits, agent wallets stall
- **TEE attestation chain not yet bulletproof** — Lit relies on Intel SGX / AMD SEV which have had historical side-channel issues
- **Cross-chain UX still complex** — one PKP signs everywhere but the surrounding tooling (gas, RPC, indexing) is still chain-specific
- **Competing standards** — [[systems/erc-4337-overview|ERC-4337]] smart accounts + cross-chain account abstraction (chain-abstraction layer) may obsolete PKP's cross-chain advantage

## Open questions

- Does Lit Protocol get adopted as default for any major embedded-wallet operator (Privy / Magic / Dynamic) for cross-chain support?
- Will Lit Actions become an audit-target for AI agent compliance teams (since the JS in TEE is the actual policy enforcement)?
- How does Lit price PKP usage at agent-scale (millions of signs/day for active agents)?
- Will major chains (Solana / Aptos / Sui) deeper-integrate Lit PKP signing as a native account abstraction option?

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/privy-embedded-wallet-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/embedded-wallet-network-effects-moat]]
- [[systems/threshold-bft-consensus-rust-implementations]]
- [[INDEX|FinWiki index]]

## Sources

- litprotocol.com product and developer documentation.
- developer.litprotocol.com on PKP minting, Lit Actions, and access control.
- github.com/LIT-Protocol for node software and reference SDKs.
- Lit Spark blog on threshold-signing patterns for agent wallets.
