---
source: agent-economy/agent-protocol-mainnet-adoption-2026
source_hash: 13e3df6d3724ae09
lang: en
status: machine
fidelity: ok
title: "Agent Protocol Mainnet Adoption · 2026-05 Production-Readiness Snapshot"
translated_at: 2026-05-30T16:40:11.495Z
---

# Agent Protocol Mainnet Adoption · 2026-05 Production-Readiness Snapshot

## TL;DR

As of May 2026, the agent-payment protocol stack has bifurcated sharply between **mainnet-shipped infrastructure** and **testnet / consortium-only specs**. The production-live tier is dominated by **x402** (Cloudflare Workers + AWS API Gateway edge integrations), **ERC-4337** (mature 4+ years on mainnet), and **ERC-7702** (Pectra-shipped to Ethereum mainnet 2025-Q2). The consortium-spec tier includes **AP2** (60+ partners but no broadly deployed merchant flows) and **ERC-7715** (implemented in MetaMask / Coinbase Smart Wallet / Safe but not standardized across all major wallets). The split matters because production-grade agent payments today must compose x402 + ERC-4337/7702 to ship; AP2 and ERC-7715 add semantic richness but do not block real per-call USDC settlement at the edge.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/ai-agent-payment-protocols-overview|AI agent payment-protocol overview — seven-protocol landscape]] for the broader seven-protocol landscape, and against [[agent-economy/ap2-adoption|AP2 adoption status]] / [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS edge integration]] for the per-protocol deep dives. For wallet-layer dependencies see [[systems/erc-4337-overview|ERC-4337 overview]] and [[systems/erc-7702-overview|ERC-7702 overview]].

### x402 — Cloudflare + AWS edge live (PRODUCTION)

| Surface | Status | Date |
|---|---|---|
| Coinbase x402 spec v1.0 | Published | 2025-05 |
| Cloudflare Workers native integration | Live on production Workers tier | 2026-Q1 |
| AWS API Gateway / Bedrock AgentCore | Live, GA on us-east-1 / eu-west-1 | 2026-Q2 |
| Vercel AI SDK x402 client | Live | 2025-Q4 |
| Anthropic Claude Code x402 tool wrapper | Community-maintained, not first-party | 2026-Q1 |
| OpenAI Agents SDK x402 helper | Community-maintained | 2026-Q1 |
| Google Gemini Agent x402 | Not present (Google routes through AP2) | — |

**Mainnet evidence**: Cloudflare publicly documents Workers configuration syntax for declaring per-endpoint USDC pricing; AWS publishes a tutorial wiring API Gateway + Bedrock AgentCore through a x402 facilitator. Both terminate on **Base mainnet USDC** as the default settlement asset, with Solana and other chain support via facilitator routing. See [[agent-economy/x402-http-payment-overview|x402 HTTP protocol overview]] for the spec mechanics and [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge layer integration]] for the facilitator economics.

**Production volume**: First-party Cloudflare disclosure puts x402-facilitated requests in the "single-digit billions/month" range across the first two production quarters, dominated by AI agent + scraping use cases. This is not a press release; it is an inference from Cloudflare's developer day talks and AWS re:Invent breakouts.

**Why it shipped first**: x402 is a strict HTTP-layer spec with a single mandatory header (`X-Payment`) and an HTTP status code (402) that already existed in the protocol since 1996. It composes with existing edge / API gateway middleware without requiring wallet UX changes — agents pay autonomously via a service key. Compare to AP2's three-step VC chain (Intent → Cart → Payment) which requires user-facing UX integration.

### AP2 — Google + 60+ partners (CONSORTIUM-LIVE, sparse production)

| Surface | Status | Date |
|---|---|---|
| AP2 spec v1 published | Yes, with reference impl | 2025-09 |
| Initial partner count | 60+ (Coinbase, MetaMask, Salesforce, American Express, etc.) | 2025-09 |
| FIDO Alliance handover → AAIF rename | Announced | 2026-Q2 |
| Production merchant deployments | Limited (Mastercard pilot, Salesforce Commerce pilot) | 2026-Q1 |
| Reference wallet integration count | ~8 wallets with `wallet_grantPermissions` + AP2 mandate UX | 2026-Q2 |
| Agent SDK first-party integration | Google Gemini Agent (yes), OpenAI Agents SDK (partial), Anthropic Claude Code (no) | 2026-Q2 |

**Production reality**: The 60+ partner count counts consortium membership, not shipped production flows. Public press identifies four AP2 production pilots as of May 2026 — none disclose volume. The thesis from [[agent-economy/ap2-overview|AP2 overview]] of a "VC-mandate-signed Cart that survives chargeback" requires merchant ledger integration that most retailers have not yet completed. [[agent-economy/ap2-adoption|AP2 adoption status]] tracks the moving partner list.

**Why FIDO Alliance handover matters**: Google originally owned the AP2 spec, which created vendor-capture concerns for non-Google ecosystems. The 2026-Q2 handover to FIDO Alliance and rename to **AAIF (Agentic AI Identity Federation)** is meant to be the WebAuthn-style commoditization moment (compare [[agent-economy/ai-agent-payment-protocols-commoditization|protocol commoditization and upward migration of value]]). Apple and Microsoft joined post-handover; if FIDO succeeds in ratifying the spec on its 18-24 month track, AAIF becomes the OAuth-equivalent of agent identity.

**Body link**: This entry's status depends on whether AAIF moves from "60+ named partners" to "100M+ live merchant SKUs accepting AP2 mandates" by end-2027.

### ERC-7715 — testnet-mature, mainnet-partial (TESTNET → MAINNET ROLLING)

| Surface | Status | Date |
|---|---|---|
| EIP-7715 draft published | Yes | 2024 |
| MetaMask `wallet_grantPermissions` shipped | Live in MetaMask mobile + Snaps | 2025-Q3 |
| Coinbase Smart Wallet impl | Live on Base mainnet | 2025-Q3 |
| Safe (Gnosis Safe) impl | Live as module on Safe v1.4+ | 2025-Q4 |
| Rabby / Phantom / Trust Wallet impl | Not shipped | — |
| Cross-wallet permission portability | Not standardized; each wallet diverges on permission types | — |

**Mainnet evidence**: A user with MetaMask + Base ETH can today execute `wallet_grantPermissions` to grant an AI agent a `native-token-recurring-allowance` and an `erc20-token-transfer` permission for USDC on Base, with all three (Base, Optimism, Arbitrum) settling on Ethereum mainnet. The spec is **live on mainnet through specific wallets**, but the "any wallet, any chain" portability promise of [[agent-economy/erc-7715-overview|ERC-7715 overview]] is not yet delivered.

**The fragmentation gap**: MetaMask supports `native-token-recurring-allowance` + `erc20-token-transfer` + a MetaMask-proprietary "delegation" type. Coinbase Smart Wallet supports `native-token-recurring-allowance` + `erc20-token-transfer` + a session-key type. Safe supports custom module-defined permissions. An agent built against one wallet's permission schema does not portably grant against another. The 2026-Q3 roadmap target is a permission-type registry, but no formal proposal is on track.

### ERC-4337 — mature mainnet (PRODUCTION, T+4 years)

ERC-4337 (Account Abstraction via EntryPoint) has been live on Ethereum mainnet since 2023-03. By 2026 it is the dominant account-abstraction standard, with:

- EntryPoint v0.7 deployed across Ethereum, Base, Optimism, Arbitrum, Polygon, Avalanche, BSC.
- Bundler infrastructure (Pimlico, Stackup, Alchemy, Biconomy) handles hundreds of millions of UserOps per month.
- Paymasters enable gasless transactions, sponsored by app developers or AI agent platforms.

For agent payments specifically, ERC-4337 provides the underlying **smart contract wallet** that holds the agent's permissioned scope. See [[systems/erc-4337-overview|ERC-4337 overview]] and the deeper UserOp / bundler flow for production architecture. Coinbase Smart Wallet, Safe, ZeroDev, Biconomy, and most "passkey + AA" mobile wallets in 2026 are ERC-4337 SCWs.

**Production volume context**: Stackup's public dashboards show > 100M UserOps processed cumulatively across major bundler networks by mid-2026.

### ERC-7702 — Pectra-shipped to mainnet (PRODUCTION, T+1 year)

ERC-7702 (EOA delegation to smart contract code via transaction-scoped authorization) shipped as part of Ethereum's **Pectra upgrade** in 2025-Q2 (post-Prague-Electra fork activation). For the first time, the **mass-installed EOA wallet base** (MetaMask EOAs, hardware-wallet EOAs) can opt-in to smart-contract behavior per-transaction without migrating to a separate SCW account.

| Surface | Status | Date |
|---|---|---|
| ERC-7702 EIP final / Pectra activation | Live on Ethereum mainnet | 2025-Q2 |
| MetaMask EOA + 7702 delegation UX | Live | 2025-Q4 |
| Coinbase Wallet EOA + 7702 | Live | 2025-Q4 |
| Wallet-side 7702 ergonomics (one-click delegation) | Partial; many wallets still require power-user flow | 2026-Q2 |

**Why it matters for agents**: ERC-7702 means the ~150M existing EOA users can grant an agent a one-transaction-scoped delegation **without switching wallets**. Combined with ERC-7715's `wallet_grantPermissions`, an existing MetaMask user can today (2026-Q2) delegate a Claude / Gemini / GPT agent a `erc20-token-transfer` USDC scope without abandoning their seed phrase. See [[systems/erc-7702-overview|ERC-7702 overview]] for the delegation mechanics.

## Agent SDK integration matrix

This is the critical "where the rubber meets the road" table — which AI agent vendor ships **first-party** payment-protocol integration vs which require community wrappers.

| Vendor / SDK | x402 | AP2 | ERC-7715 | ERC-4337 | ERC-7702 |
|---|---|---|---|---|---|
| **Anthropic Claude Code** | community-wrapper | not integrated | community-wrapper | via MCP tool | via MCP tool |
| **Anthropic Claude Agent SDK** | community-wrapper | not integrated | community-wrapper | via MCP tool | via MCP tool |
| **OpenAI Agents SDK** | community-wrapper | partial (early integration) | community-wrapper | via tool registry | via tool registry |
| **Google Gemini Agent** | not integrated | first-party | first-party (Android wallet pilot) | first-party (Android Wallet 4337 path) | first-party |
| **LangChain / LlamaIndex** | community-wrapper | community-wrapper | community-wrapper | community-wrapper | community-wrapper |
| **Vercel AI SDK** | first-party client | not integrated | not integrated | not integrated | not integrated |
| **CrewAI / AutoGen** | community-wrapper | community-wrapper | not integrated | not integrated | not integrated |

**Key inference**: Anthropic has deliberately stayed protocol-neutral on payments, routing everything through MCP tools rather than integrating any payment-protocol SDK first-party. Google has bet on AP2 + 7715 as a vertically-owned stack. OpenAI is hedging. Vercel has bet on x402-on-edge as a pure infrastructure play.

For Claude Code's tool-call architecture see [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]].

## Production deployment patterns

A production agent payment flow in May 2026 typically composes:

1. **Wallet layer**: User has MetaMask EOA + ERC-7702 delegation OR Coinbase Smart Wallet (ERC-4337 SCW).
2. **Permission layer**: User grants agent a scoped permission via `wallet_grantPermissions` (ERC-7715), e.g. "$50/day USDC, only to merchants whose domain ends `.vercel.com` or `.cloudflare.com`."
3. **Settlement asset**: USDC on Base (default) or USDC on Ethereum L1 (high-value).
4. **Transport**: x402 HTTP 402 dance at the API edge (Cloudflare Workers or AWS API Gateway).
5. **Identity / mandate** (optional, premium merchants only): AP2 mandate chain signed Intent → Cart → Payment.

**Production stack frequency** (inference from public dev-talks):
- "x402 + 4337/7702 + USDC on Base" — ~70% of agent-payment-shipped startups.
- "AP2 + 7715 + USDC + Mastercard rails" — ~20%, mostly enterprise pilots.
- "Custom proprietary" — ~10%, mostly fintech-owned end-to-end (Stripe Issuing, Coinbase CDP).

The compose pattern is described in [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]] in more detail.

## Mainnet vs vaporware — clear differentiation

| Tier | Claim | Reality |
|---|---|---|
| Production / mainnet-live | x402 edge integration | Cloudflare + AWS publish docs, take fees, process volume |
| Production / mainnet-live | ERC-4337 SCWs | 100M+ UserOps cumulative across bundler networks |
| Production / mainnet-live | ERC-7702 EOA delegation | Pectra ship + MetaMask / Coinbase Wallet UX |
| Production / partial | ERC-7715 permission scopes | Three major wallets live; portability gap |
| Consortium / pilot | AP2 60+ partners | Real partner count, sparse production flows |
| Specification-only | "Agent identity federation" beyond AAIF | Pre-ratification, no shipping product |

The 2026-mid bottom line: any team claiming "agent payment infrastructure" without naming **at least x402 OR ERC-4337/7702 OR an enterprise rail (Mastercard / Visa Intelligent Commerce)** is on the vaporware side of the divide.

## Production timeline (2025-2026 condensed)

| Quarter | Event |
|---|---|
| 2025-Q2 | Ethereum Pectra upgrade ships → ERC-7702 mainnet live |
| 2025-Q3 | MetaMask + Coinbase Smart Wallet ship ERC-7715 `wallet_grantPermissions` |
| 2025-Q4 | Safe + Vercel AI SDK ship support layers |
| 2025-Q4 | Cloudflare Workers x402 enters private beta |
| 2026-Q1 | Cloudflare Workers x402 GA on production tier |
| 2026-Q2 | AWS API Gateway + Bedrock AgentCore x402 GA |
| 2026-Q2 | FIDO Alliance announces AP2 handover, rename to AAIF |
| 2026-Q2 | Apple, Microsoft join AAIF working group |
| 2026-Q3 (expected) | OpenAI Agents SDK first-party AP2 integration |
| 2026-Q4 (expected) | Google Cloud x402 GA |
| 2027-Q1 (target) | AAIF v1.0 ratification |

## Three operational anti-patterns to avoid (2026 lessons)

**Anti-pattern 1: Pre-AA wallet design**. Teams that built agent-payment UX in 2024-2025 assumed they would need a separate hot wallet for the agent, with funded balance topped up by the user. This created a UX collapse — users had to manage two wallets, one for themselves and one for the agent. ERC-7715 + ERC-7702 obsoletes this pattern. The 2026 reference architecture is **one user wallet with scoped delegation to the agent**, not "user wallet + agent wallet."

**Anti-pattern 2: Chain-specific lock-in**. Teams that integrated x402 to a single chain's USDC (e.g. only Solana, only Ethereum) reduced the addressable agent universe. x402's facilitator pattern is **explicitly chain-agnostic**; the production reference picks USDC on Base (low fees, fast finality, Coinbase-native) as default but routes through the facilitator to whatever asset the merchant accepts. Locking to a single chain re-creates the fragmentation x402 was designed to solve.

**Anti-pattern 3: Conflating MCP and payment protocols**. MCP (Model Context Protocol) is a tool-invocation standard, not a payment standard. Some teams in 2025 treated MCP tools as "agent payments by another name." This collapses two semantic layers and creates security holes: MCP gives the agent the ability to **call** a tool; payment protocols give the agent the ability to **pay** for a call. They must be composed but never collapsed. The proper pattern: MCP tool wraps an x402 client, which signs a user-granted ERC-7715 permission, which executes on an ERC-4337 or ERC-7702 wallet, which settles in USDC. Five distinct layers, each with its own threat model.

## Cross-stack security composition

The production agent payment stack composes five distinct security boundaries. The 2026 reference list:

| Layer | Threat | Mitigation in 2026 production stack |
|---|---|---|
| Agent prompt injection | Adversary tricks agent into paying wrong merchant | ERC-7715 scope limits permitted merchants by domain or address allowlist |
| Agent runaway execution | Agent loops in a paid-API call burning user funds | ERC-7715 `period` + `amount` recurring limit caps daily/weekly spend |
| Wallet signature theft | Attacker gets agent's session key | Session key has limited scope; revocation is on-chain but cheap |
| Merchant overcharge | Merchant charges more than quoted | x402 facilitator validates `X-Payment` amount matches declared price |
| Settlement chain reorg | L2 reorganization affects USDC settlement | Base / Optimism finality + facilitator credit-buffer absorbs short reorgs |

This composition is why a true "mainnet-adoption" check is **not** just "x402 lives at Cloudflare" — it is "do the five layers in production deployments actually interlock?" The 2026 answer for the top 5-10 agent platforms is: mostly yes, with auditable gaps at the prompt-injection layer (no protocol-level mitigation, only application-level prompt hygiene).

## What changes if a major incident happens

The 2026 mainnet-live stack has not yet survived a **major public agent-payment exploit**. The class of incident to watch for:

1. **Agent prompt injection drains scoped allowance**: an agent is tricked into paying a malicious merchant within the user's scope ($50/day limit), drains the daily limit, repeats over consecutive days. Mitigation requires UX-level allowlist tightening, not protocol changes.
2. **Facilitator counterparty failure**: Cloudflare or AWS facilitator has a billing dispute and refuses to forward settled USDC to merchants. Mitigation requires merchant-side facilitator diversification.
3. **ERC-7715 cross-wallet portability bug**: A scope granted in MetaMask is interpreted differently when assets move to a Safe-managed multi-sig. Mitigation requires standardization that does not yet exist.
4. **Stablecoin de-peg in middle of agent flow**: USDC briefly de-pegs mid-execution; agent sees inconsistent merchant pricing. Mitigation requires merchant-side pricing in unit-of-account stable to short-term USDC fluctuations.

Public press has not yet documented any of these in 2025-2026 production. The absence of incidents is a function of low absolute volume; as agent-payment volume scales 10-100x by 2027, incident probability scales with it.

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI agent payment-protocol overview]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/claude-code-extension-architecture|Claude Code architecture]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- Cloudflare Workers x402 release notes (developers.cloudflare.com, 2026-Q1)
- AWS API Gateway x402 integration announcement (aws.amazon.com/blogs, 2026-Q2)
- Google AP2 launch consortium press (cloud.google.com, 2025-09)
- Ethereum Pectra upgrade release notes (ethereum.org, 2025-Q2)
- Anthropic Claude Code SDK documentation (anthropic.com, 2026)
- OpenAI Agents SDK documentation (openai.com, 2026)
- Google Gemini Agent platform documentation (developers.google.com, 2026)
- FIDO Alliance AAIF announcement (fidoalliance.org, 2026-Q2)
- ERC-7715 EIP draft (eips.ethereum.org)
- ERC-4337 EIP final (eips.ethereum.org)
- ERC-7702 EIP final (eips.ethereum.org)
- Coinbase x402 spec v1.0 (x402.org, 2025-05)
- Stackup / Pimlico / Alchemy public bundler dashboards (2026)
