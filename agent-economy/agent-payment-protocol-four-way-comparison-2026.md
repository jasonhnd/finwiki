---
title: Agent Payment Protocol 四方比較矩陣 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP
aliases:
  - agent-payment-protocol-four-way-comparison-2026
  - agent payment protocol four-way comparison 2026
  - ap2 x402 skyfire nevermined comparison
  - agent payment rail comparison 2026
  - agent payment six-axis matrix
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, matrix, payment, ap2, x402, skyfire, nevermined, erc-7715, lit-protocol, pkp, comparison]
status: active
sources:
  - https://x402.org/
  - https://github.com/coinbase/x402
  - https://cloud.google.com/blog/products/ai-machine-learning/announcing-agent-payments-protocol-ap2
  - https://www.skyfire.xyz/
  - https://docs.skyfire.xyz/
  - https://nevermined.io/
  - https://docs.nevermined.io/
  - https://eips.ethereum.org/EIPS/eip-7715
  - https://litprotocol.com/
  - https://developer.litprotocol.com/
  - https://developers.cloudflare.com/
  - https://aws.amazon.com/bedrock/agentcore/
  - https://stripe.com/newsroom
  - https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html
  - https://fidoalliance.org/
---

# Agent Payment Protocol 四方比較矩陣 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP

## TL;DR

- 2026 年中,agent 经济的支付协议格局已经从"七协议混战" ([[agent-economy/ai-agent-payment-protocols-overview|seven-protocol overview]]) 收敛为四条主鳄主线 — **AP2**(Google + FIDO/AAIF 联盟)、**x402**(Coinbase + Cloudflare + AWS edge)、**Skyfire**(闭环 card-network issuer + Visa Trusted Agent)、**Nevermined**(compute / inference marketplace)
- 四个协议沿 **transport / settlement asset / authorization / mainnet adoption / merchant target / regulatory model** 六维度差异化,没有 winner-takes-all 命题 — 它们解决不同 layer 的问题(transport vs identity vs issuance vs metering)
- **辅助层**:**ERC-7715** 提供 wallet-side `wallet_grantPermissions` scope 语义,**Lit Protocol PKP** 提供 threshold-cryptography 的 key custody,两者是横向 plug-in 而不是独立 rail
- 2026 mainnet 真实产销画像:**x402 single-digit billion req/月**(Cloudflare + AWS facilitator GA)· **AP2 ~4 production pilots**(60+ consortium 但 sparse production)· **Skyfire Series A 后 ~$X00M annualized**(visa + card-network closed loop)· **Nevermined niche compute marketplace**
- 路由:[[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]](production readiness)· [[agent-economy/ai-agent-payment-protocols-commoditization|协议 commoditization 与价值上移]](long-term thesis)· 本矩阵专注 four-way feature comparison

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]] for the broader seven-protocol landscape, [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]] for production-readiness deltas, and [[agent-economy/ai-agent-payment-protocols-commoditization|commoditization thesis]] for the value-capture trajectory. For protocol-specific deep dives see [[agent-economy/x402-http-payment-overview|x402 overview]] · [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge integration]] · [[agent-economy/ap2-overview|AP2 overview]] · [[agent-economy/ap2-adoption|AP2 adoption]] · [[agent-economy/ap2-technical-spec|AP2 technical spec]] · [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] · [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]] · [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] · [[agent-economy/erc-7715-overview|ERC-7715 overview]] · [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]. For wallet substrate see [[systems/erc-4337-overview|ERC-4337 overview]] · [[systems/erc-7702-overview|ERC-7702 overview]] · [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]. For regulatory framing see [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]] and [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability framework]].

## Why this matrix matters

Selecting an agent payment rail in 2026 is not "pick the best protocol" — it is "compose the layer cake correctly so the merchant accepts, the wallet authorizes, and the regulator does not block." Each of the four protocols answers a different question:

- **x402** answers "how does an HTTP request carry payment metadata at the API edge?"
- **AP2** answers "how does a merchant verify the agent really has user authorization with verifiable credentials?"
- **Skyfire** answers "how do we give an agent an actual fundable card-network identity so existing merchants without crypto integration still get paid?"
- **Nevermined** answers "how do compute / inference providers meter per-call usage and settle in stablecoin without per-customer accounts?"

Add **ERC-7715** (wallet permission scope) and **Lit PKP** (threshold key custody) as horizontal building blocks, and a production agent payment stack picks 2-4 of these to compose. This matrix exposes the six-axis comparison so teams choose the minimum-viable stack rather than over-engineering.

The bifurcation matters because 2026-Q4 will see the FIDO Alliance handover of AP2 to **AAIF** (Agentic AI Identity Federation), which could either commoditize AP2 (good for ecosystem) or fragment it further (bad for production teams) — see [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]] for the timeline.

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

**Target merchant**: **AI compute / API providers**(model APIs, scraping APIs, vector DBs, RAG services)· DeFi-native services · any HTTP API that wants per-call micropayment. Not card-network merchants.

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

| 维度 | **AP2 (Google → AAIF)** | **x402 (Coinbase / CF / AWS)** | **Skyfire (Visa closed-loop)** | **Nevermined (compute mp)** | **ERC-7715 (supp.)** | **Lit PKP (supp.)** |
|---|---|---|---|---|---|---|
| **Transport** | HTTPS + W3C Verifiable Credential mandate chain | HTTP 402 + `X-Payment` headers | Card-rail REST API (Visa) | Smart-contract escrow + token-gated endpoint | Wallet RPC `wallet_grantPermissions` | Lit-network threshold sign + Lit Actions JS |
| **Settlement asset** | Asset-agnostic (Google Pay / card / USDC / bank rails) | **USDC stablecoin** on Base / Solana / EVM L2 | **Fiat virtual card** (USD primarily; USDC topup possible) | **Stablecoin compute credit** (USDC / Nevermined credit) | n/a (gates other rails) | n/a (signs any chain) |
| **Authorization model** | OAuth-like VC mandate (Intent → Cart → Payment) | Delegated session key (ERC-7715 / 4337 / 7702) | Card issuance + bank-sponsored BIN | Token-gated escrow (NFT or ERC-20 access token) | Wallet pre-grant scope w/ cap + period + targets | Threshold MPC + runtime policy in Lit Action |
| **Q1-Q2 2026 mainnet** | 60+ consortium · ~4 production pilots · AAIF handover 2026-Q2 | **Cloudflare GA Q1 + AWS GA Q2 · single-digit B req/mo · Vercel SDK · 10k+ Bazaar endpoints** | Series A · Visa partnership live · low-tens-M USD annualized | Niche AI compute marketplace · integrates x402 for inst. settlement | MetaMask + Coinbase Smart Wallet + Safe live · portability gap | Mature mainnet · production key custody for autonomous agents |
| **Target merchant** | Web2 enterprise SaaS · card-network retailers · financial institutions | AI compute / API providers · DeFi-native · per-call HTTP services | **Any Visa-accepting merchant** (merchant unaware of agent identity) | AI compute providers · model inference · GPU rental · dataset access | (any) — wallet scope layer | (any) — key custody layer |
| **Regulatory model** | **Open-loop interop** — pluggable settlement, AAIF as standard | **Open-loop crypto** — facilitator unregulated in most jdx · MiCA on issuer · GENIUS Act pending | **Closed-loop card issuance** — bank-sponsored BIN · KYC / AML / PCI all in scope | **Crypto-native marketplace** — smart-contract platform · DAO dispute | (none — wallet feature) | (none — key custody) |

**矩阵读法**:
- 横向看一个协议在 6 维的画像 · 纵向看四协议在同一维度的差异化
- AP2 vs x402 在 settlement asset 上最分歧 — AP2 多 rail · x402 单 rail(USDC)· 这决定了它们在 merchant adoption 曲线上不同(AP2 慢但宽 · x402 快但窄)
- Skyfire 是唯一 closed-loop · 完全不依赖 merchant 任何 crypto / agent 集成 · 因此可以 "today, any merchant" · 但 KYC + bank sponsorship 成本高
- Nevermined 是 vertical(compute marketplace)· 不是通用 rail · 这个市场容量较小但单笔金额高
- ERC-7715 + Lit PKP 不是 rail · 是给上面四 rail 提供 wallet substrate · 真实部署里几乎所有 production stack 都会用其中一个

## Composition patterns observed in production

**Pattern A — "AI-native API marketplace"**:
- ERC-7715 (scope) + ERC-7702 / 4337 wallet + x402 transport + USDC on Base
- ~70% of agent-payment-shipped startups in 2026 (per [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]])
- 主要 hit: Vercel AI SDK + Cloudflare Workers + AWS Bedrock AgentCore stacks

**Pattern B — "Enterprise commerce agent"**:
- AP2 mandate VC + ERC-7715 (scope) + card or USDC settlement
- ~20%, enterprise pilots (Mastercard / Salesforce / Amex)
- 优势: merchant 已有 PCI / KYC 流程 · agent 仅需出示 VC

**Pattern C — "Skyfire-issued agent card"**:
- Skyfire identity + virtual card + bank-sponsored BIN
- Smaller % by transaction count but **highest dollar volume per transaction**
- 主要 hit: 任意 Visa merchant · agent 无需对方集成

**Pattern D — "Compute marketplace"**:
- Nevermined escrow + access token + (optional x402 inner settlement)
- Niche but growing — AI compute providers monetizing fine-tuned models
- 重叠场景: agent 调用 fine-tuned model 走 Nevermined · 然后 model 自己调用上游 API 走 x402

**Pattern E — "Autonomous agent with policy-bound key"**:
- Lit PKP (custody + runtime policy) + ERC-7715 (scope) + x402 (transport)
- 适用于长时间运行的自主 agent · 用户不在场也无法被 phish 取走 key
- 当 Privy / Magic / Coinbase CDP 的中心化 custody 不可接受时(adversarial / cross-jurisdictional / open-source agent)

## Boundary cases / future trajectory

**AP2 vs x402 convergence path**:
- 短期(2026-2027): AP2 的 mandate VC 可以作为 x402 `X-Payment` header 的 inner attestation — 这样 merchant 同时获得 "agent 有授权"(AP2) + "USDC 已结算"(x402)双重保证。OpenAI 的 SDK hedge 押注的就是这条收敛路径(参见 [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption]])
- 长期(2028+): AAIF 标准化后 · x402 facilitator 可能内嵌 AAIF 验证 — AP2 vs x402 不再是 "选哪个" · 而是 "都用"

**Skyfire 闭环 vs 开环的张力**:
- 闭环优势:今天就能用 · 全球 60M+ Visa merchant 都接受 · KYC / AML 框架成熟
- 闭环劣势:Skyfire 是单点 issuer · 每笔交易 Visa interchange ~1.5-2.5% · 长期 vs x402 的近零 fee 不对称
- 真实策略:Skyfire 自己也在评估把 USDC 作为 backing asset · 未来可能 "Skyfire issuance + USDC settlement"(参见 [[fintech/usd-stablecoin-interchange|USD 稳定币互换层]])

**Nevermined 与 x402 的吃 / 被吃关系**:
- x402 把 transport 层标准化后 · Nevermined 的 "per-call HTTP 付费" 用例直接被 x402 覆盖
- 但 Nevermined 的 "escrow + dispute + 大宗 compute job" 用例(单笔 $1+ · 需要 SLA 保证)x402 无法替代 · 因为 x402 默认 fire-and-forget 无 dispute 机制
- 长期分工:**x402 处理 < $0.10 fast settlement** · **Nevermined 处理 $0.10+ 大宗 + SLA**

**ERC-7715 portability gap 的解决路径**:
- 2026-Q3 提案中的 permission-type registry 是关键 · 如果不能统一 schema · agent 将被迫 fragment 成 "MetaMask-agents vs Coinbase-agents vs Safe-agents"
- Lit PKP 提供另一条路:把 permission policy 写成 Lit Action JavaScript · wallet-agnostic · 但代价是 throughput(Lit network MPC sign 比本地 sign 慢 100-500ms)

**FIDO Alliance / AAIF 的合规化**:
- AAIF 如果走完 18-24 个月 ratification track(类似 WebAuthn 历史)· 可能 2027-Q4 标准化
- 之前的窗口期是 "Google + 60 partners 寡头联盟" vs "x402 + Cloudflare/AWS edge dominance" 的市场拉锯
- 真正风险:AAIF stall(像 WebAuthn 2014-2016 那样)· 让 x402 + ERC-7715 完成事实标准化 · 形成 lock-in

**Lit PKP 与 institutional adoption**:
- 机构(银行 / 资产管理)倾向 HSM / SOC2 custody · Lit PKP 的 "code-defined policy" 在 SOC2 audit 中较难解释
- 但合规要求(MiCA 第三方托管)推动 multi-party custody · Lit PKP 的 threshold + transparent code 模型反而获得复审优势 — 2027-2028 可能反转

**Visa Trusted Agent Protocol 与 Skyfire**:
- Visa 2025-2026 推出 Trusted Agent Protocol(VTAP)— 给 agent 一个 cryptographic identity attestation · merchant 在 authorization 时校验
- Skyfire 是 VTAP 早期 issuer · 与 Visa 深度绑定
- 但 VTAP 本身是开放标准 · 意味着 Stripe Issuing / Marqeta / Adyen Issuing 等竞品也能成为 issuer · Skyfire 的先发优势可能 18-24 个月内被稀释

**Regulatory wildcard — 2026-Q3 GENIUS Act**:
- 美国 GENIUS Act 稳定币最终规则预期 2026-Q3 落地 · 会明确 "stablecoin facilitator"(如 Coinbase 在 x402 中的角色)是否被视为 money transmitter
- 如果 facilitator 被划入 money transmitter · x402 在美国市场 cost structure 将剧变 — facilitator 需要 50 州 MTL 牌照
- AP2 因为 settlement rail-agnostic 受冲击较小 · Skyfire 因为已经走 bank-sponsored BIN 受冲击最小

**MCP layer 的关系**:
- Anthropic MCP 是 tool-invocation 层 · 不是 payment 层 · 但 MCP 可以 wrap 任何 payment protocol 作为 tool
- 实际 production:**MCP tool wraps x402 client** 是最常见的 Claude Code / agent SDK 集成模式
- 这意味着 Anthropic 不需要选择 first-party 集成 AP2 vs x402 — MCP 作为 abstraction layer 兼容所有四协议

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
