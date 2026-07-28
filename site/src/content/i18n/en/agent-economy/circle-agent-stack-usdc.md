---
source: agent-economy/circle-agent-stack-usdc
source_hash: 86a6450bb2bc7033
lang: en
model: manual-en-source-sync
status: machine
fidelity: ok
title: "Circle Agent Stack · USDC agent wallets, nanopayments & marketplace"
translated_at: 2026-07-28T17:01:18.000Z
---

# Circle Agent Stack · USDC agent wallets, nanopayments & marketplace

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] as the Circle / USDC issuer-stack view of agent payments. Read it with [[agent-economy/stablecoin-routing-agent-transactions|stablecoin routing for AI agent transactions]] for the broader settlement-asset question, [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]] for the HTTP 402 negotiation layer, and [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]] for the closest crypto-native wallet / agent-tool peer.

## Key facts

- Circle announced Circle Agent Stack on 2026-05-11 as chain- and protocol-agnostic infrastructure for agents to hold funds, discover services, and transact with USDC. ^[extracted]
- The initial stack consists of Agent Wallets, Agent Marketplace, Circle CLI, Nanopayments powered by Circle Gateway, and Circle Skills. ^[extracted]
- As of 2026-07-29, Circle's official product page and developer documentation continue to expose Agent Wallets, Agent Marketplace, Circle CLI, Nanopayments, and Circle Skills as publicly available product surfaces rather than announcement-only concepts. ^[extracted]
- Circle said Agent Wallets let agents hold and move USDC within human-defined policies, including time-bound spending limits, transfer / x402 caps, recipient allowlists and blocklists, and contract-address controls. ^[extracted]
- Circle's Agent Wallet documentation says the wallets are built on Circle user-controlled wallets with 2-of-2 MPC key management; key shares are not exposed to the agent, users retain custody, and transfers are screened against sanctions controls before onchain submission. ^[extracted]
- Nanopayments powered by Circle Gateway supports gas-free USDC transfers as small as $0.000001 and uses Gateway batching rather than settling each individual payment onchain. ^[extracted]
- The Nanopayments x402 flow is: buyer deposits USDC into a Gateway Wallet contract, seller returns `402 Payment Required`, buyer signs an offchain EIP-3009 authorization, seller or facilitator verifies it, and Gateway later settles net positions in bulk. ^[extracted]
- Agent Marketplace is Circle's directory where agents and humans discover, evaluate, integrate, and pay for USDC-priced services; Circle describes service listings as structured for machine reading. ^[extracted]
- Circle CLI is the command surface for managing agent wallets, policies, funding, transfers, swaps, signatures, contract calls, marketplace discovery, and skill installation from an agent framework or terminal. ^[extracted]
- Circle Skills are open-source agent skills for Circle products, including agentic USDC payments, crosschain transfers, wallets, smart contracts, and Circle's documentation / SDK context. ^[extracted]
- Circle's 2026 positioning narrows the generic multi-stablecoin routing problem into a USDC-first loop: wallet funding, policy control, x402 / Nanopayments authorization, Gateway settlement, service discovery, and developer skills all sit around the same issuer rail. ^[inferred]

## Mechanism / How it works

Circle Agent Stack turns USDC into an agent-facing operating loop rather than only a token balance. A user or developer first funds an Agent Wallet, then defines policy boundaries. The agent can discover a paid service in Agent Marketplace, invoke it through an x402-compatible request, sign an EIP-3009 payment authorization from its Gateway balance, and receive the resource after the seller or facilitator verifies the payment. Gateway aggregates those signed authorizations and later settles net positions onchain in bulk, which is the mechanism behind the gas-free nanopayment claim.

| Component | Function in the loop | Control surface |
|---|---|---|
| Agent Wallets | Give agents a USDC-capable wallet for holding, transferring, bridging, swapping, signing, and paying x402 services. | User custody, 2-of-2 MPC, spending limits, allowlists / blocklists, sanctions screening. |
| Nanopayments | Make sub-cent, high-frequency x402 payments economical by verifying signed authorizations offchain and batching settlement through Gateway. | EIP-3009 signatures, Gateway unified balance, facilitator / seller verification, later bulk onchain settlement. |
| Agent Marketplace | Provides a machine-readable service catalog where agents can find paid APIs and services. | Service metadata, pricing, capabilities, invocation methods, and provider distinction. |
| Circle CLI | Gives humans and agents a deterministic command interface for wallet, funding, policy, transfer, swap, contract, and skill operations. | `circle wallet ...`, `circle contract ...`, `circle skill ...`, JSON / quiet output modes for agent use. |
| Circle Skills | Packages Circle product knowledge and workflows into reusable agent skills. | Skill list / info / install / update commands and the public `circlefin/skills` catalog. |

The settlement path is deliberately different from a standard onchain transfer for every API call:

1. The buyer funds a Gateway Wallet balance with USDC in a one-time onchain transaction.
2. A paid API returns `402 Payment Required` with accepted payment requirements.
3. The agent signs an offchain EIP-3009 `TransferWithAuthorization` payload against the Gateway batching domain.
4. The request is retried with the signed payment payload.
5. The seller or facilitator submits the authorization for Gateway verification and settlement.
6. The seller can serve the resource immediately after verification, while Gateway nets and commits the batch onchain later.

That means Circle is not replacing x402. It is supplying a USDC settlement method for x402: x402 defines how a server asks for payment and how a client retries with proof; Nanopayments defines how that proof is funded, verified, and economically settled for sub-cent use cases.

The policy layer is the important agent-safety difference. Agent Wallets do not hand a private key to the model. Circle's docs frame the wallet as user-custodied and operated by the agent through CLI commands, with policy rules constraining outbound USDC transfers and x402 payments. Transfer caps can be per-transaction or rolling-window limits, and allowlists / blocklists can restrict recipient or contract addresses. In practical terms, the agent can spend only inside a bounded payment envelope instead of reasoning from an unrestricted balance.

Against [[agent-economy/stablecoin-routing-agent-transactions|the generic stablecoin-routing picture]], Circle's stack is more vertically integrated. Generic routing asks which stablecoin, chain, wallet, facilitator, and merchant acceptance set should win for a given payment. Circle's answer is: keep the asset as USDC, expose the service through x402 / Nanopayments, and use Gateway plus CCTP / Circle infrastructure behind the scenes for multichain reach. That simplifies agent reasoning but also makes Circle's issuer rail the default economic layer.

Against [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]], the center of gravity is different. Coinbase CDP / AgentKit starts from a developer wallet and onchain action toolkit, with Coinbase-hosted x402 facilitator support and Base as a natural home chain. Circle Agent Stack starts from the USDC issuer and Gateway settlement layer, then adds policy wallets, a marketplace, a CLI, and skills around USDC acceptance. Both stacks want agents to pay APIs in stablecoins; Coinbase is closer to the wallet / chain developer platform, while Circle is closer to the settlement asset / issuer / service-discovery loop.

## Origin & evolution

Circle's Agent Stack launch is part of the 2026 shift from "agents can call tools" to "agents can pay tools." Circle's May 2026 announcement framed the missing layer as financial infrastructure for machine-speed, low-value, high-frequency activity: agents paying for APIs, data, compute, and services in real time. Circle also cited x402 activity as an adoption signal, saying that as of 2026-04-29 x402 had processed $24.24 million in the prior 30 days and that 99.8% of transaction value settled in USDC.

The chronology is important. Circle had already been describing Nanopayments and Gateway as the rail for high-frequency, sub-cent agent payments. On 2026-05-08 it published a reference implementation showing buyer / seller flows on Arc Testnet with Next.js, x402, Circle Gateway, USDC, and a LangChain buyer agent. On 2026-05-11 it packaged that payment rail with Agent Wallets, Agent Marketplace, Circle CLI, and Circle Skills into the broader Agent Stack. 2026 coverage described the release as Circle's push to make USDC programmable payment infrastructure for autonomous software systems.

The strategic implication is that Circle is trying to own more than settlement. If agents need a wallet, a spend policy, a way to discover a paid API, a payment method, a CLI surface, and reusable implementation skills, Circle wants each part to point back to USDC. The unresolved questions are adoption and neutrality: developers may like a single issuer-backed loop for USDC payments, but marketplaces and agent platforms may still demand multi-asset routing, non-Circle facilitators, or non-stablecoin rails where merchant reach, regional regulation, or wallet defaults differ.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/stablecoin-routing-agent-transactions|Stablecoin routing for AI agent transactions]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|Agent custody and authorization framework 2026]]
- [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## Sources

- Circle blog, "Introducing Circle Agent Stack: Financial Infrastructure for the Agentic Economy" — https://www.circle.com/blog/introducing-circle-agent-stack-financial-infrastructure-for-the-agentic-economy
- Circle press release, "Circle Powers the Agentic Economy with New AI Infrastructure" — https://www.circle.com/pressroom/circle-launches-ai-infrastructure-to-power-the-agentic-economy
- Circle Agent Stack product page — https://www.circle.com/agent-stack
- Circle Agent Stack developer docs — https://developers.circle.com/agent-stack
- Circle Agent Wallets docs — https://developers.circle.com/agent-stack/agent-wallets
- Circle spending-policy docs — https://developers.circle.com/agent-stack/agent-wallets/wallet-operations/custom-policies
- Circle Nanopayments product page — https://www.circle.com/nanopayments
- Circle Nanopayments developer docs — https://developers.circle.com/gateway/nanopayments
- Circle docs, "What is x402?" — https://developers.circle.com/gateway/nanopayments/concepts/x402
- Circle Agent Marketplace — https://agents.circle.com/services
- Circle CLI command reference — https://developers.circle.com/agent-stack/circle-cli/command-reference
- Circle Skills public repository — https://github.com/circlefin/skills
- Cointelegraph via TradingView, "Circle makes USDC push into AI agent payment tools" — https://www.tradingview.com/news/cointelegraph%3Ac6949a402094b%3A0-circle-makes-usdc-push-into-ai-agent-payment-tools/
- Coinbase Agentic Wallet CLI docs — https://docs.cdp.coinbase.com/agentic-wallet/cli/welcome
