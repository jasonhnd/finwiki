---
source: agent-economy/agent-payment-protocol-four-way-comparison-2026
source_hash: 48a01f3fdc6893ba
lang: en
status: machine
fidelity: ok
title: "Agent Payment Protocol four-way comparison matrix 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP"
translated_at: 2026-05-30T16:40:11.493Z
---

# Agent Payment Protocol four-way comparison matrix 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP

## TL;DR

- By mid-2026 年, the agent-economy payment-protocol landscape has converged from a "7-protocol melee" ([[agent-economy/ai-agent-payment-protocols-overview|seven-protocol overview]]) to 4  main axes — **AP2** (Google + FIDO/AAIF federation) · **x402** (Coinbase + Cloudflare + AWS edge) · **Skyfire** (closed-loop card-network issuer + Visa Trusted Agent) · **Nevermined** (compute / inference marketplace)
- The 4  protocols are differentiated along 6  axes of **transport / settlement asset / authorization / mainnet adoption / merchant target / regulatory model**, and there is no winner-takes-all proposition — each solves a different layer's problem (transport vs identity vs issuance vs metering)
- **Supplementary layers**: **ERC-7715** provides the `wallet_grantPermissions` scope semantics on the wallet side, and **Lit Protocol PKP** provides key custody via threshold cryptography. The two are not independent rails but horizontal plug-ins
- The 2026  mainnet real-demand picture: **x402  single-digit billion req/month** (Cloudflare + AWS facilitator GA) · **AP2  ~4  production pilots** (60+ consortium but production is sparse) · **Skyfire post-Series-A ~$X00M annualized** (visa + card-network closed loop) · **Nevermined niche compute marketplace**
- Routes: [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]] (production readiness) · [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]] (long-term thesis) · this matrix focuses on the four-way feature comparison

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] for the broader seven-protocol landscape, [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]] for production-readiness deltas, and [[agent-economy/ai-agent-payment-protocols-commoditization|commoditization thesis]] for the value-capture trajectory. For protocol-specific deep dives see [[agent-economy/x402-http-payment-overview|x402 overview]] · [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge integration]] · [[agent-economy/ap2-overview|AP2 overview]] · [[agent-economy/ap2-adoption|AP2 adoption]] · [[agent-economy/ap2-technical-spec|AP2 technical spec]] · [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] · [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]] · [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] · [[agent-economy/erc-7715-overview|ERC-7715 overview]] · [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]. For wallet substrate see [[systems/erc-4337-overview|ERC-4337 overview]] · [[systems/erc-7702-overview|ERC-7702 overview]] · [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]. For regulatory framing see [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]] and [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability framework]].

## Why this matrix matters

Selecting an agent payment rail in 2026  is not "pick the best protocol" — it is "compose the layer cake correctly so the merchant accepts, the wallet authorizes, and the regulator does not block." Each of the four protocols answers a different question:

- **x402** answers "how does an HTTP request carry payment metadata at the API edge?"
- **AP2** answers "how does a merchant verify the agent really has user authorization with verifiable credentials?"
- **Skyfire** answers "how do we give an agent an actual fundable card-network identity so existing merchants without crypto integration still get paid?"
- **Nevermined** answers "how do compute / inference providers meter per-call usage and settle in stablecoin without per-customer accounts?"

Add **ERC-7715** (wallet permission scope) and **Lit PKP** (threshold key custody) as horizontal building blocks, and a production agent payment stack picks 2-4  of these to compose. This matrix exposes the six-axis comparison so teams choose the minimum-viable stack rather than over-engineering.

The bifurcation matters because 2026-Q4  will see the FIDO Alliance handover of AP2  to **AAIF** (Agentic AI Identity Federation), which could either commoditize AP2  (good for ecosystem) or fragment it further (bad for production teams) — see [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]] for the timeline.

## Per-protocol sections

### AP2 (Google + FIDO/AAIF)

**Transport**: HTTPS with W3C Verifiable Credentials. Three-step mandate chain (Intent → Cart → Payment) signed by user wallet, presented to merchant for verification. Not bound to HTTP status code — agents present VC at any RPC / GraphQL / REST endpoint that supports AP2 mandate verification.

**Settlement asset**: Asset-agnostic. Settlement rail can be Google Pay, card networks (Mastercard / Amex pilot), USDC on Base (via Coinbase Pay), or bank instant rails (FedNow / RTP). The VC chain proves authorization; settlement happens via whatever rail the merchant prefers.

**Authorization model**: **OAuth-like** — user pre-grants a mandate VC with scope (merchant categories, spend cap, time window) signed by their wallet's authentication key. Merchant verifies VC chain before honoring transaction. Combines well with [[agent-economy/erc-7715-overview|ERC-7715]] for wallet-side scope enforcement.

**Q1-Q2 2026 mainnet adoption**: 60+ consortium partners (Coinbase, MetaMask, Salesforce, Amex, etc.) but ~4 disclosed production pilots (Mastercard agentic commerce, Salesforce Commerce). FIDO Alliance handover announced 2026-Q2, rename to **AAIF**. Apple and Microsoft joined post-handover. Production sparse — most "AP2-enabled" partners are spec-compliant in test environments, not transacting volume.

**Target merchant**: Web2 enterprise SaaS (CRM / ERP / commerce platforms), card-network-integrated retailers, financial institutions that need audit-grade authorization trail. Not primarily DeFi.

**Regulatory model**: **Open-loop friendly** — designed to plug into existing payment networks (card / bank / stablecoin). Merchant existing PCI / KYC / AML obligations unchanged. AAIF handover positions it as a WebAuthn-equivalent open standard.

### x402 (Coinbase + Cloudflare + AWS)

**Transport**: HTTP-native. Uses HTTP status code **402 Payment Required** (defined in RFC 7231 since 1996 but unused for ~30 years) plus `X-Payment-Required` (server → client) and `X-Payment` (client → server) headers. The pattern composes with existing edge middleware, API gateways, and reverse proxies without new wire formats.

**Settlement asset**: **USDC stablecoin** by default (USDC on Base = default; Solana USDC, Ethereum L1, other L2s supported). Facilitator (Coinbase / Cloudflare / community facilitators) validates the `X-Payment` proof on-chain. Asset is structurally tied to public chain stablecoins — fiat / card not supported natively.

**Authorization model**: **Delegated key** — agent uses a session key tied to the user wallet (often via [[agent-economy/erc-7715-overview|ERC-7715]] permission scope on an [[systems/erc-4337-overview|ERC-4337]] SCW or [[systems/erc-7702-overview|ERC-7702]] delegated EOA). No per-request user approval needed; spend cap enforced at wallet layer.

**Q1-Q2 2026 mainnet adoption**: **Cloudflare Workers x402 GA in production tier (2026-Q1)** + **AWS API Gateway + Bedrock AgentCore GA (2026-Q2)**. Vercel AI SDK ships first-party x402 client. Anthropic Claude Code + OpenAI Agents SDK have community-maintained wrappers. **Single-digit billion requests/month** inferred from dev-talk disclosures — the highest verified production volume of the four protocols. x402 Bazaar MCP indexes 10,000+ paid endpoints.

**Target merchant**: **AI compute / API providers** (model APIs, scraping APIs, vector DBs, RAG services) · DeFi-native services · any HTTP API that wants per-call micropayment. Not card-network merchants.

**Regulatory model**: **Open-loop crypto** — facilitator (Coinbase, Cloudflare) is not a regulated payment processor in most jurisdictions, just a stablecoin settlement verifier. EU MiCA stablecoin classification applies to USDC issuer (Circle), not to facilitator. US GENIUS Act 2026 final rules expected to clarify facilitator status.

### Skyfire (Visa + closed-loop card-network issuer)

**Transport**: **Card-rail API** (similar to Stripe Issuing / Marqeta). Agent calls Skyfire's REST API with agent identity + merchant URL + amount; Skyfire issues a virtual card auth, runs OFAC / merchant-category / spend-cap checks, returns approved transaction. The card itself rides Visa rails to the merchant.

**Settlement asset**: **Fiat virtual card** (USD primarily, multi-currency via Visa rails). Funded by user pre-paid balance, corporate ACH topup, or — in pilot — USDC bridged to USD via on-ramp. The merchant sees a normal Visa card transaction in their existing PCI-DSS payment processor, no crypto integration needed.

**Authorization model**: **Card issuance** — Skyfire mints an agent identity, binds it to a virtual card, enforces spend caps + merchant categories + time windows in its own ledger. User authorizes via Skyfire's web UX (similar to issuing a delegate card on an Amex). Visa Trusted Agent Protocol alignment provides cryptographic agent attestation at authorization time.

**Q1-Q2 2026 mainnet adoption**: Series A funded 2024-2025. Visa partnership active. Stripe / Visa virtual card integration live. **Production transaction volume in the low-tens-of-millions USD annualized** (inferred from press; not officially disclosed). Far below x402 request count but **dollar volume per transaction is materially higher** because each Skyfire transaction targets human-economy merchants (SaaS subscriptions, travel, marketplaces).

**Target merchant**: **Any Visa-accepting merchant** — by design, the merchant does not need to know it is an agent transaction. This is the explicit go-to-market wedge: agents shop at merchants that never integrated crypto. Pilots include AI agent travel booking, SaaS procurement, B2B supply.

**Regulatory model**: **Closed-loop card issuance** — Skyfire (or its BIN sponsor bank) is the regulated entity. KYC of the agent owner, AML monitoring of transactions, OFAC screening, PCI compliance for card data. The agent operates under bank-sponsored card-issuing program licensure. EU PSD2 / US OCC framework already covers the rail.

### Nevermined (compute / inference marketplace)

**Transport**: **Smart-contract escrow + token-gated API**. Compute provider exposes a model / GPU / dataset endpoint behind a Nevermined-issued NFT or subscription token. Agent consumer holds the access token; calls the endpoint; provider validates token; settles per-call via smart-contract escrow release.

**Settlement asset**: **Stablecoin compute credit** (USDC on Polygon / Base / other EVM by default; Nevermined credit token as wrapper). Per-inference, per-dataset-byte, or subscription-tier metering. Can integrate with x402 as the HTTP-layer settlement option when agents pay per single inference.

**Authorization model**: **Token-gated access + escrow** — agent purchases access via subscription or per-use payment, receives token (NFT or ERC-20), endpoint validates token presence + scope. Funds held in escrow until provider delivers (or refunded via dispute). Different security model from x402's instant settlement.

**Q1-Q2 2026 mainnet adoption**: Niche but **active in AI compute marketplace** segment — providers exposing fine-tuned models, GPU rental, custom datasets. Lower mainnet volume than x402 but **higher per-transaction value** (compute jobs are $0.10-$10 vs x402's sub-cent calls). Integration with [[agent-economy/x402-http-payment-overview|x402]] as one settlement option lets Nevermined fit inside x402's HTTP rail for fast settlement of small jobs while keeping escrow + dispute logic for large jobs.

**Target merchant**: **AI compute providers** specifically — model inference endpoints, GPU rental, dataset access, agent-to-agent compute markets ([[agent-economy/skill-market-monetization|skill market monetization]]). Not general-purpose merchants.

**Regulatory model**: **Crypto-native marketplace** — operates as a smart-contract platform, not as a regulated payment processor. Provider / consumer relationship is governed by smart contract; disputes via DAO arbitration. KYC depends on compute provider's own program (e.g. if provider is a US enterprise, OFAC applies).

### ERC-7715 (subscription / permission scope, supplementary)

**What it is**: Wallet RPC method `wallet_grantPermissions` that lets a user pre-grant an agent scoped spending permission with **type** (e.g. `erc20-token-transfer`), **amount cap**, **period** (e.g. $50/day), and **allowed targets** (merchant address allowlist or domain pattern).

**Mainnet status (2026-Q2)**: Live in **MetaMask** (mobile + Snaps), **Coinbase Smart Wallet** (Base mainnet), **Safe** (v1.4+ module). Not yet in Rabby / Phantom / Trust Wallet. Cross-wallet portability gap remains — permission schemas diverge.

**Role in stack**: **Horizontal plug-in** under x402 or AP2. The user grants scope once via ERC-7715; the agent then uses that scope across many x402 calls or AP2 mandates without re-prompting. See [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] for the compose pattern.

### Lit Protocol PKP (threshold key custody, supplementary)

**What it is**: **Programmable Key Pair** — a wallet whose private key is split across Lit Protocol's threshold network (no single node ever sees the full key). Signing is gated by **Lit Actions** (JavaScript code) running inside secure enclaves; the code can check rate limits, scope, multi-factor, or arbitrary policy before authorizing signature.

**Mainnet status (2026-Q2)**: Live on Lit mainnet for years; mature production use in [[agent-economy/lit-protocol-pkp-agent-keys|agent key custody]] scenarios. Especially used where the agent must hold its own key (autonomous agents on long-running tasks) but the user wants policy enforcement without trusting a single custodian like Privy / Magic.

**Role in stack**: **Horizontal plug-in** alternative to Privy / Magic / Coinbase CDP for the **key custody** layer. Above PKP sits ERC-7715 (scope), x402 / AP2 (transport), and stablecoin (settlement).

## Big comparison matrix table

**Six-axis comparison across four primary protocols + two supplementary layers** (2026-Q2 status):

| Dimension | **AP2 (Google → AAIF)** | **x402 (Coinbase / CF / AWS)** | **Skyfire (Visa closed-loop)** | **Nevermined (compute mp)** | **ERC-7715 (supp.)** | **Lit PKP (supp.)** |
|---|---|---|---|---|---|---|
| **Transport** | HTTPS + W3C Verifiable Credential mandate chain | HTTP 402 + `X-Payment` headers | Card-rail REST API (Visa) | Smart-contract escrow + token-gated endpoint | Wallet RPC `wallet_grantPermissions` | Lit-network threshold sign + Lit Actions JS |
| **Settlement asset** | Asset-agnostic (Google Pay / card / USDC / bank rails) | **USDC stablecoin** on Base / Solana / EVM L2 | **Fiat virtual card** (USD primarily; USDC topup possible) | **Stablecoin compute credit** (USDC / Nevermined credit) | n/a (gates other rails) | n/a (signs any chain) |
| **Authorization model** | OAuth-like VC mandate (Intent → Cart → Payment) | Delegated session key (ERC-7715 / 4337 / 7702) | Card issuance + bank-sponsored BIN | Token-gated escrow (NFT or ERC-20 access token) | Wallet pre-grant scope w/ cap + period + targets | Threshold MPC + runtime policy in Lit Action |
| **Q1-Q2 2026 mainnet** | 60+ consortium · ~4 production pilots · AAIF handover 2026-Q2 | **Cloudflare GA Q1 + AWS GA Q2 · single-digit B req/mo · Vercel SDK · 10k+ Bazaar endpoints** | Series A · Visa partnership live · low-tens-M USD annualized | Niche AI compute marketplace · integrates x402 for inst. settlement | MetaMask + Coinbase Smart Wallet + Safe live · portability gap | Mature mainnet · production key custody for autonomous agents |
| **Target merchant** | Web2 enterprise SaaS · card-network retailers · financial institutions | AI compute / API providers · DeFi-native · per-call HTTP services | **Any Visa-accepting merchant** (merchant unaware of agent identity) | AI compute providers · model inference · GPU rental · dataset access | (any) — wallet scope layer | (any) — key custody layer |
| **Regulatory model** | **Open-loop interop** — pluggable settlement, AAIF as standard | **Open-loop crypto** — facilitator unregulated in most jdx · MiCA on issuer · GENIUS Act pending | **Closed-loop card issuance** — bank-sponsored BIN · KYC / AML / PCI all in scope | **Crypto-native marketplace** — smart-contract platform · DAO dispute | (none — wallet feature) | (none — key custody) |

**How to read the matrix**:
- Read horizontally for one protocol's 6 -axis profile · read vertically for the 4  protocols' differentiation on the same axis
- AP2 vs x402 diverge most on settlement asset — AP2 is multi rail · x402 is single rail (USDC) · this determines the difference in the merchant adoption curve (AP2 is slow but broad · x402 is fast but narrow)
- Skyfire is the only closed loop · it requires no crypto / agent integration from the merchant at all · hence "right now, any merchant" is possible · but the cost of KYC + bank sponsorship is high
- Nevermined is vertical (compute marketplace) · not a general-purpose rail · market capacity is small but per-transaction amount is high
- ERC-7715 + Lit PKP are not rails · they provide the wallet substrate to the 4  rails above · in implementation almost every production stack uses one of them

## Composition patterns observed in production

**Pattern A — "AI-native API marketplace"**:
- ERC-7715 (scope) + ERC-7702 / 4337 wallet + x402 transport + USDC on Base
- ~70% of startups that shipped agent-payment in 2026 年 (see [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]])
- Main implementations: Vercel AI SDK + Cloudflare Workers + AWS Bedrock AgentCore stacks

**Pattern B — "Enterprise commerce agent"**:
- AP2 mandate VC + ERC-7715 (scope) + card or USDC settlement
- ~20%, enterprise pilots (Mastercard / Salesforce / Amex)
- Strength: the merchant side already has PCI / KYC flows · the agent only needs to present a VC

**Pattern C — "Skyfire-issued agent card"**:
- Skyfire identity + virtual card + bank-sponsored BIN
- A small share of transaction count but **the highest amount per transaction**
- Main implementation: any Visa merchant · the agent requires no integration on the counterparty side

**Pattern D — "Compute marketplace"**:
- Nevermined escrow + access token + (optional x402 inner settlement)
- Niche but growing — AI compute providers monetizing fine-tuned models
- Overlapping scenario: an agent calling a fine-tuned model is Nevermined · that model calling an upstream API is x402

**Pattern E — "Autonomous agent with policy-bound key"**:
- Lit PKP (custody + runtime policy) + ERC-7715 (scope) + x402 (transport)
- Suited to long-running autonomous agents · the key cannot be phished away even when the user is absent
- When the centralized custody of Privy / Magic / Coinbase CDP is unacceptable (adversarial / cross-jurisdictional / open-source agent)

## Boundary cases / future trajectory

**AP2 vs x402 convergence path**:
- Short-term (2026-2027): AP2 's mandate VC can function as the inner attestation of x402 's `X-Payment` header — this lets the merchant simultaneously obtain a double guarantee of "the agent has authorization" (AP2) + "USDC has been settled" (x402). It is precisely this convergence path that OpenAI's SDK hedge is betting on (see [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption]])
- Long-term (2028+): after AAIF standardization, x402 facilitators can embed AAIF verification — AP2 vs x402 is no longer "which to choose" but "use both"

**Skyfire closed-loop vs open-loop tension**:
- Closed-loop strength: usable today · accepted by 60M+ Visa merchants globally · KYC / AML framework is mature
- Closed-loop weakness: Skyfire is a single issuer · each transaction carries Visa interchange ~1.5-2.5% · asymmetric in the long run compared to x402 's near-zero fee
- Actual strategy: Skyfire itself is also evaluating USDC as a backing asset · "Skyfire issuance + USDC settlement" is possible in the future (see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])

**Nevermined and x402 's eat / be-eaten relationship**:
- After x402 standardizes the transport layer · Nevermined's "per-call HTTP billing" use case can be directly replaced by x402 
- But Nevermined's "escrow + dispute + large compute job" use case (single job $1+ · requires SLA guarantee) cannot be substituted by x402  · because x402 is fire-and-forget by default and has no dispute mechanism
- Long-term division of labor: **x402 for < $0.10 fast settlement** · **Nevermined for $0.10+ large jobs + SLA**

**ERC-7715 portability-gap resolution path**:
- The permission-type registry proposed in 2026-Q3 is the key · if the schema cannot be unified · agents will be forced to fragment into "MetaMask-agents vs Coinbase-agents vs Safe-agents"
- Lit PKP offers another route: write the permission policy as Lit Action JavaScript · wallet-agnostic · but at the cost of throughput (Lit network MPC sign is 100-500ms slower than local sign)

**FIDO Alliance / AAIF compliance-ization**:
- If AAIF completes its 18-24 -month ratification track (similar to WebAuthn's history) · standardization is possible in 2027-Q4 
- The window until then is the market standoff of "Google + 60 partners oligopoly federation" vs "x402 + Cloudflare/AWS edge dominance"
- The real risk: AAIF stalls (like WebAuthn 2014-2016 ) · during which x402 + ERC-7715 completes de facto standardization · forming lock-in

**Lit PKP and institutional adoption**:
- Institutions (banks / asset management) prefer HSM / SOC2 custody · Lit PKP's "code-defined policy" is hard to explain in a SOC2 audit
- But regulatory requirements (MiCA's third-party custody) push multi-party custody · Lit PKP's threshold + transparent-code model instead gains an advantage on re-examination — a reversal is possible in 2027-2028 

**Visa Trusted Agent Protocol and Skyfire**:
- Visa announced the Trusted Agent Protocol (VTAP) in 2025-2026 — granting agents cryptographic identity attestation · merchants verify at authorization time
- Skyfire is an early VTAP issuer · deeply coupled with Visa
- But VTAP itself is an open standard · meaning competitors such as Stripe Issuing / Marqeta / Adyen Issuing can also become issuers · Skyfire's first-mover advantage may be diluted within 18-24 months

**Regulatory wildcard — 2026-Q3 GENIUS Act**:
- The US GENIUS Act's final stablecoin rules are expected to land 2026-Q3 · clarifying whether a "stablecoin facilitator" (such as Coinbase's role in x402 ) is regarded as a money transmitter
- If a facilitator is classified as a money transmitter · x402 's US-market cost structure will change drastically — facilitators will need 50 -state MTL licenses
- AP2 is relatively less affected because it is settlement-rail-agnostic · Skyfire is least affected because it already goes via a bank-sponsored BIN

**Relationship to the MCP layer**:
- Anthropic MCP is a tool-invocation layer · not a payment layer · but MCP can wrap any payment protocol as a tool
- Actual production: **an MCP tool wrapping an x402 client** is the most common pattern in Claude Code / agent SDK integration
- This means Anthropic does not need to first-party-integrate either AP2 vs x402 — MCP, as an abstraction layer, is compatible with all 4  protocols

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI agent payment seven layers]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|payment protocol commoditization]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability]]
- [[agent-economy/skill-market-monetization|skill market monetization]]
- [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[payments/INDEX|payments index]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol spec · https://x402.org/
- Coinbase x402 GitHub · https://github.com/coinbase/x402
- Google AP2 launch press · https://cloud.google.com/blog/products/ai-machine-learning/announcing-agent-payments-protocol-ap2
- Skyfire website · https://www.skyfire.xyz/
- Skyfire docs · https://docs.skyfire.xyz/
- Nevermined website · https://nevermined.io/
- Nevermined docs · https://docs.nevermined.io/
- ERC-7715 EIP draft · https://eips.ethereum.org/EIPS/eip-7715
- Lit Protocol website · https://litprotocol.com/
- Lit Protocol developer docs · https://developer.litprotocol.com/
- Cloudflare developer docs (x402 in Workers) · https://developers.cloudflare.com/
- AWS Bedrock AgentCore · https://aws.amazon.com/bedrock/agentcore/
- Stripe newsroom (Issuing + agent products) · https://stripe.com/newsroom
- Visa agentic commerce page · https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html
- FIDO Alliance · https://fidoalliance.org/
