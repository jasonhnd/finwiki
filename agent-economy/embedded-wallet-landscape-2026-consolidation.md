---
title: Embedded-wallet landscape 2026 · post-consolidation provider map
aliases:
  - embedded wallet landscape 2026 consolidation
  - embedded wallet provider map 2026
  - Privy CDP Magic thirdweb Particle Web3Auth Dynamic Crossmint
  - hyperscaler default wallet wars
  - embedded wallet M&A 2025-2026
  - AWS Azure GCP default wallet
  - Stripe Privy ownership
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, embedded-wallet, consolidation, privy, coinbase-cdp, magic, thirdweb, particle-network, web3auth, dynamic, crossmint, aws, azure, gcp]
status: active
sources:
  - https://docs.privy.io/
  - https://docs.cdp.coinbase.com/
  - https://magic.link/docs
  - https://portal.thirdweb.com/
  - https://docs.particle.network/
  - https://web3auth.io/docs/
  - https://docs.dynamic.xyz/
  - https://docs.crossmint.com/
  - https://aws.amazon.com/bedrock/agentcore/
  - https://azure.microsoft.com/en-us/products/ai-foundry
  - https://cloud.google.com/agent-builder
  - https://www.fsa.go.jp/en/
  - https://www.sec.gov/
  - https://www.fca.org.uk/
---

# Embedded-wallet landscape 2026 · post-consolidation provider map

## TL;DR

By mid-2026 the embedded-wallet category has compressed from a long tail of 20+ SDK vendors into a **default-tier duopoly** (Privy under Stripe, Coinbase CDP) and a **secondary tier** (Magic, thirdweb, Dynamic, Web3Auth, Particle Network, Crossmint) competing for niches the hyperscalers' default routing does not cover. The driver is not product superiority — it is **hyperscaler default-wallet placement**: when AWS Bedrock AgentCore, Azure AI Foundry Agent Service, and Google Cloud Vertex AI Agent Builder each pick "default" SDKs, the chosen vendors capture the long tail of AI-agent provisioning at zero distribution cost. See [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-wallet positioning]] for the canonical example and [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet network effects · integrator moat]] for the underlying flywheel.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it with [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe subsidiary embedded self-custody wallet]] for the canonical Stripe-side example, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · developer platform overview]] for the Coinbase-side example, [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet integrator moat]] for the moat thesis, and [[fintech/embedded-wallet-fintech-disintermediation-overview|embedded wallet fintech disintermediation]] for the fintech-side framing.

## Default-tier vs secondary-tier split

The category split visible in public docs and hyperscaler announcements by mid-2026:

| Tier | Provider | Owner | Hyperscaler default | Public footprint | Notes |
|---|---|---|---|---|---|
| Default | Privy | Stripe (acquired Jun 2025) | AWS Bedrock AgentCore (default), Azure AI Foundry (one of two defaults) | 110M+ wallets, 1,000+ integrations | Routes through Stripe Connect + Bridge USDB rail (see [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]) |
| Default | Coinbase CDP | Coinbase (NASDAQ: COIN) | AWS Bedrock AgentCore (co-default with Privy), GCP Vertex AI Agent Builder (default) | ~150K developers, ~8K dApps, ~5M MAU embedded wallets | Default-binds Base + USDC + Onramp |
| Secondary | Magic | Independent (Tiger / SV Angel) | Not a hyperscaler default | Long-tail Web3 SaaS clients | Magic Link / OAuth + DKLs MPC; pricing tiered per-MAU |
| Secondary | thirdweb | Independent | Not a hyperscaler default | Heavy on NFT / gaming / consumer dApps | InAppWallet + smart-account SDK; chain-agnostic; partial open source |
| Secondary | Dynamic | Independent (a16z crypto) | Not a hyperscaler default | DeFi / consumer-finance focus | Multi-chain login, embedded + external-wallet bridge |
| Secondary | Web3Auth | Independent (Torus Labs, BNB-Labs backed) | Not a hyperscaler default | Long-tail Web3 + enterprise | tKey + OAuth share reconstruction; open-source |
| Secondary | Particle Network | Independent | Not a hyperscaler default | EVM + BTC + multi-chain | Modular SDK + own chain-abstraction layer |
| Secondary | Crossmint | Independent | Not a hyperscaler default | NFT / commerce / RWA | Specializes in fiat-funded wallets + receipt rails |

"Default" means the SDK appears in the hyperscaler's first-class agent-orchestration documentation as the recommended path, with credentials / billing / IAM wiring pre-built. Developers can swap to any other SDK, but the default is what the bulk of net-new agents inherit.

## The five drivers of consolidation

**1. AWS Bedrock AgentCore default selection (2025-Q3 GA).** AWS picked Privy + Coinbase CDP as the two default wallet providers for AgentCore Payments. Circle, Anchorage, Magic, and others were available but not first-class. The decision was structural — Stripe is a top-tier AWS revenue customer and Coinbase is a major AWS region anchor — and it propagated downstream because hundreds of thousands of net-new AgentCore agents inherit a Privy-or-CDP wallet by default. See [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-wallet positioning]].

**2. Stripe's Privy acquisition (Jun 2025).** Stripe paid a publicly reported $300-500M (some sources cite up to $1.1B inclusive of earn-outs) and folded Privy into the Stripe family alongside Bridge ($1.1B), Tempo, and the USDB stablecoin. From Stripe's perspective Privy is the layer-4 wallet inside the [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer Trojan horse]]. From the embedded-wallet category's perspective it removed the largest neutral SDK vendor and replaced it with a Stripe-aligned default.

**3. Coinbase CDP's vertical integration with Base + USDC + Onramp.** CDP is not just an embedded-wallet SDK — it is a packaged stack of [[agent-economy/coinbase-cdp-developer-platform|wallet + Onramp + Paymaster + AgentKit + Smart Wallets]] that routes by default to Base and USDC. This created a parallel default-tier provider with structurally different economics from Privy (CDP earns from on-chain flow; Privy earns SaaS-style fees with Stripe-rail interchange upside).

**4. Hyperscaler agent-orchestration platforms (2025-2026).** AWS Bedrock AgentCore Payments (2025), Azure AI Foundry Agent Service (2025-Q4), and Google Cloud Vertex AI Agent Builder (2026-Q1) each shipped a managed agent-orchestration surface. Each picked default-wallet providers. The hyperscaler-default war is the immediate channel through which embedded-wallet share is being decided in 2026. Choices visible in public docs: AWS → Privy + CDP; Azure → Privy + (additional default still ambiguous in public docs); GCP → CDP-leaning (Coinbase has structural partnerships, AP2 co-authorship — see [[agent-economy/ap2-overview|AP2 overview]]).

**5. ERC-7715 + ERC-4337 commoditization at the wallet primitives layer.** The primitives that embedded wallets sit on top of — [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]], ERC-4337 account abstraction, ERC-7702 EOA upgrade — became standardized and easier to implement, removing some of the technical moats that smaller SDKs had built around proprietary MPC / TEE choices.

## Provider-by-provider 2026 snapshot

### Privy (Stripe)

- **Owner.** Stripe (acquired June 2025; founders Henri Stern + Asta Li remained as Stripe Privy leadership).
- **Key custody primitive.** MPC + TEE shard model. One key shard on the user's device (Passkey / WebAuthn / Secure Enclave), one shard inside a Stripe-operated TEE (AWS Nitro Enclaves or equivalent).
- **Default hyperscaler placement.** AWS Bedrock AgentCore Payments — co-default with Coinbase CDP. Azure AI Foundry Agent Service lists Privy as a supported default.
- **Public footprint.** ~110M wallets, ~1,000+ developer integrations, including OpenSea, Hyperliquid, Farcaster, Friend.tech, Pump.fun, Story, Zora, and major Stripe Connect merchants.
- **Strategic role.** Layer 4 of the [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer collapse]]. Where Stripe needs a user-identity surface that also acts as the wallet on the Bridge USDB / Tempo rail, Privy is the chosen substrate.

### Coinbase CDP

- **Owner.** Coinbase (NASDAQ: COIN).
- **Key custody primitive.** MPC distributed key management, plus a packaged ERC-4337 Smart Wallet integrated with Base Paymaster for gasless USDC transfers.
- **Default hyperscaler placement.** AWS Bedrock AgentCore (co-default with Privy). GCP Vertex AI Agent Builder leans toward CDP (Coinbase is an AP2 co-author with Google).
- **Public footprint.** ~150K developers, ~8K dApps, ~5M monthly active embedded wallets per CDP public communications.
- **Strategic role.** Default-binds Base + USDC; the AgentKit module (2025-04) is the agent-economy SDK; ties the wallet primitive to chain economics that Coinbase already owns.

### Magic

- **Owner.** Independent (Tiger / SV Angel-backed).
- **Key custody primitive.** Magic Link (email magic links) plus DKLs MPC 2/2.
- **Default hyperscaler placement.** Not a hyperscaler default in any public AgentCore / Foundry / Vertex doc as of 2026 mid-year.
- **Public footprint.** Long tail of Web3 SaaS clients; pricing has tiered per-MAU SaaS structure.
- **Strategic role.** Pre-Privy market leader, now a secondary-tier provider competing on neutrality (no fintech-conglomerate or exchange parent).

### thirdweb

- **Owner.** Independent (Founders Fund, Coinbase Ventures, Polygon — minority stakes).
- **Key custody primitive.** InAppWallet SDK with optional embedded-MPC + smart-account abstraction.
- **Default hyperscaler placement.** Not a hyperscaler default.
- **Public footprint.** Heavy on NFT, gaming, consumer dApps; partial open-source posture.
- **Strategic role.** Niche specialist in consumer / gaming dApps; competes on full-stack tooling (deploy + wallet + payments in one) rather than wallet alone.

### Particle Network

- **Owner.** Independent.
- **Key custody primitive.** Modular SDK with MPC + ERC-4337 + own chain-abstraction layer.
- **Default hyperscaler placement.** Not a hyperscaler default.
- **Public footprint.** EVM + BTC + multi-chain coverage; emphasizes a "universal account" model crossing chains.
- **Strategic role.** Differentiates on chain-abstraction depth rather than fintech distribution.

### Web3Auth

- **Owner.** Independent (Torus Labs; BNB-Labs investor).
- **Key custody primitive.** tKey + OAuth share reconstruction; open-source core.
- **Default hyperscaler placement.** Not a hyperscaler default.
- **Public footprint.** Long-tail Web3 plus selected enterprise SSO integrations.
- **Strategic role.** Open-source posture is its primary differentiator in a market increasingly dominated by Stripe + Coinbase commercial defaults.

### Dynamic

- **Owner.** Independent (a16z crypto-backed).
- **Key custody primitive.** Multi-chain login with embedded + external-wallet bridging.
- **Default hyperscaler placement.** Not a hyperscaler default.
- **Public footprint.** DeFi / consumer-finance dApps that need to bridge embedded + MetaMask users in one session.
- **Strategic role.** Specializes in the embedded-meets-external-wallet UX gap that pure embedded SDKs do not address.

### Crossmint

- **Owner.** Independent.
- **Key custody primitive.** Fiat-funded wallet creation; credit-card-to-NFT / RWA receipt rails.
- **Default hyperscaler placement.** Not a hyperscaler default.
- **Public footprint.** NFT, commerce, RWA-tokenization customers; Visa / Mastercard rail integrations.
- **Strategic role.** Specializes in the fiat-funded slice of the embedded-wallet market — the slice that needs card networks rather than crypto rails — and so does not compete head-to-head with Privy / CDP on AI-agent volume.

## Hyperscaler default-wallet wars

The most consequential 2026 dynamic is the way **hyperscaler agent platforms** pre-select wallet providers as defaults inside their managed agent runtimes. Three reasons this matters more than dApp adoption did in 2023-2024:

1. **Provisioning is implicit, not explicit.** When a developer spins up an AWS Bedrock agent that needs to receive [[fintech/usd-stablecoin-interchange|USDC]] payments, the AgentCore Payments module provisions a Privy or CDP wallet under the hood. The developer never made a wallet-vendor decision.
2. **Hyperscalers absorb the distribution cost.** A secondary-tier SDK now has to convince a developer to opt out of the default — a higher-friction sale than convincing them to opt in to a single chosen SDK.
3. **The default-tier providers earn structural compounding.** Every default-provisioned wallet adds to Privy's or CDP's installed base, which makes them more attractive as next-default candidates for Azure / GCP and any subsequent hyperscaler-agent platform.

Visible default placements in mid-2026 hyperscaler public docs:

| Hyperscaler | Agent platform | Default wallet providers | Notes |
|---|---|---|---|
| AWS | Bedrock AgentCore Payments | Privy + Coinbase CDP | Public since 2025-Q3 GA; x402 + Bazaar MCP integration; see [[agent-economy/x402-http-payment-overview|x402 overview]] |
| Azure | AI Foundry Agent Service | Privy listed as supported default; second default ambiguous in public docs | Microsoft's Stripe relationship is the structural anchor |
| Google Cloud | Vertex AI Agent Builder | CDP-leaning; AP2 co-authorship with Coinbase is the structural anchor | See [[agent-economy/ap2-overview|AP2 overview]] |
| Cloudflare | Workers AI Agents | x402-integrated; wallet-provider choice still developer-side | Lower-level: routes payments rather than provisioning identity |

## Stripe ownership of Privy — strategic implications

Stripe acquired Privy in June 2025. Public reporting has the deal in the $300-500M range; some sources cite up to $1.1B inclusive of earn-out structures. From a category perspective, the consequences:

- **The largest neutral embedded-wallet vendor is no longer neutral.** Non-Stripe merchants and Stripe competitors (Adyen, Block, PayPal) now face a "use my competitor's wallet stack or roll your own" decision.
- **Privy becomes Stripe-rail-aware.** Inside the [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer collapse]], Privy routes to Bridge (USDB stablecoin) and Tempo (settlement chain) by structural design.
- **The AWS AgentCore default placement compounds.** Stripe-aligned AgentCore agents inherit Stripe-aligned wallets, which inherit Stripe-aligned stablecoin and chain. The vertical stack is monetized at every layer.
- **Antitrust questions remain open.** No US, UK, EU, or Japan competition regulator has publicly intervened in the Privy acquisition as of mid-2026, but the pattern parallels the historical Apple / Google default-search-engine cases (see [[agent-economy/embedded-wallet-network-effects-moat|integrator moat]] counterpoint section).

## M&A activity since 2024

| Date | Event | Buyer | Target | Public price |
|---|---|---|---|---|
| 2025-06 | Stripe acquires Privy | Stripe | Privy | ~$300-500M (some sources up to $1.1B) |
| 2025-06 | Stripe acquires Bridge | Stripe | Bridge | ~$1.1B |
| 2024-Q3 | Coinbase folds Wallet API + Cloud into CDP rebrand | Coinbase | (internal) | n/a |
| 2025-04 | Coinbase ships AgentKit on top of CDP | Coinbase | (internal) | n/a |
| 2025-Q3 | AWS picks Privy + CDP as AgentCore defaults | AWS / Stripe / Coinbase | (platform default) | n/a |
| Open | thirdweb / Magic / Web3Auth / Dynamic acquisition rumors | (various) | (various) | None confirmed |

Plausibility-weighted but unconfirmed: a hyperscaler may buy a secondary-tier provider to compete with Stripe-Privy and Coinbase-CDP. Public docs and public M&A filings do not show this as of mid-2026.

## Counterpoints

- **"Default" is not "exclusive."** AgentCore, Foundry, and Vertex all let developers swap the default-wallet SDK. Real share will be determined by inertia (do developers opt out?), not by the published default. If 30-50% of developers opt out, the duopoly thesis weakens.
- **Acquisition concentration risk cuts both ways.** Stripe owning Privy gives Privy distribution but also makes Privy a single point of regulatory or commercial-strategy failure. A regulator that breaks up Stripe (or a Stripe / Privy data-handling incident) hurts Privy disproportionately versus a neutral SDK.
- **Hyperscaler defaults can be re-bid.** Azure has explicitly bid for Stripe-rail business; GCP has not yet picked a Stripe-aligned default. The default lists are not stable yet.
- **Secondary-tier providers can survive by being non-substitutable.** Crossmint (fiat-funded NFT receipts) and Dynamic (embedded-meets-external bridging) occupy niches that the default-tier duopoly does not serve.
- **A long-tail "wallet of last resort" segment will survive.** MetaMask, Rabby, Frame, and Coinbase Wallet (the consumer wallet, distinct from CDP the SDK) all maintain large standalone user bases. The embedded-wallet category does not eliminate the standalone-wallet category.
- **Geopolitical fragmentation.** China, Japan, and EU agent-platform regimes may default to different wallet providers. Japan's [[exchanges/jp-cex-deposit-token-stablecoin-integration|CEX × deposit-token integration]] tilts wallet choice toward Japan-licensed providers in some regulated flows.

## Open questions

- Does Azure formalize a second default-tier wallet provider in 2026, and if so, which?
- Does GCP Vertex AI Agent Builder formally announce CDP as default, or does it remain ambiguous?
- Does any antitrust authority intervene in Stripe-Privy or the AWS-default selection?
- Does a Stripe competitor (Adyen, Block, PayPal) acquire Magic, thirdweb, or Dynamic to create a third default-tier candidate?
- Do EU MiCA + DMA "default" rules force AgentCore / Foundry / Vertex to expose wallet-provider choice screens?
- Does the [[agent-economy/ai-company-payment-landscape|AI-company payment landscape]] absorb wallet-vendor choice (i.e., does OpenAI / Anthropic ship a first-party agent wallet that bypasses both Privy and CDP)?
- Does a [[agent-economy/skill-market-monetization|skill-marketplace]] operator (Claude Code skills, OpenAI GPTs, etc.) make the wallet-vendor choice for its skill creators?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AWS AgentCore default-wallet positioning]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet integrator moat]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet fintech disintermediation overview]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- Privy public documentation: docs.privy.io
- Coinbase Developer Platform public documentation: docs.cdp.coinbase.com
- Magic public documentation: magic.link/docs
- thirdweb public documentation: portal.thirdweb.com
- Particle Network public documentation: docs.particle.network
- Web3Auth public documentation: web3auth.io/docs
- Dynamic public documentation: docs.dynamic.xyz
- Crossmint public documentation: docs.crossmint.com
- AWS Bedrock AgentCore Payments public announcement and docs (2025-Q3 GA)
- Azure AI Foundry Agent Service public docs (Microsoft Build 2025 / 2026)
- Google Cloud Vertex AI Agent Builder public docs (Google Cloud Next 2026)
- Stripe public communications on Privy and Bridge acquisitions (June 2025)
- FCA, SEC, FSA Japan, and MAS public registers and consultation papers on embedded-wallet and electronic-money classification
