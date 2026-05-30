---
source: agent-economy/2026-04-08_agent-payment-infrastructure-research
source_hash: d0e891a76a2dd092
lang: en
status: machine
fidelity: ok
title: "Agent Payment Infrastructure Research Report"
translated_at: 2026-05-30T16:40:11.484Z
---

# Agent Payment Infrastructure Research Report


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/skill-market-monetization|Skill マーケット有料化]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

> [!info] TL;DR
> Public-source protocol snapshot | 2026-04-08

## 1. The protocol-standard landscape

The current Agent payments space has already formed a **4 -protocol coexistence** landscape:

1. **ACP (Agentic Commerce Protocol)** — Jointly developed by Stripe and OpenAI, Apache 2.0 open source. The core innovation is the Shared Payment Token (SPT), which lets apps such as ChatGPT initiate transactions without exposing the user's payment credentials. Instant Checkout has already launched in ChatGPT, supporting Etsy sellers and millions of Shopify merchants. Currently in Beta. ([Source](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce))

2. **x402 protocol** — Led by Coinbase; the x402 Foundation was established within the Linux Foundation in 2026 年 4 月. It revives the HTTP 402 status code as a native payment layer, letting AI agents settle directly in USDC stablecoin within an HTTP request. Already launched on Base and Solana, with the Cloudflare Agent SDK integrated. However, actual daily transaction volume is only around $28,000 , the majority being test transactions. ([Source](https://www.x402.org/))

3. **AP2 (Agent Payments Protocol)** — Initiated by Google; the 60+ partners include Adyen, American Express, Mastercard, PayPal, Coinbase, and others. Designed to be payment-method-agnostic (supporting credit cards, bank transfers, and crypto). It has already released the A2A x402 Extension to support on-chain crypto payments. ([Source](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol))

4. **MPP (Machine Payments Protocol)** — Jointly developed by Stripe and Tempo, launched in 2026 年 3 月, already implemented across 50+ services (including OpenAI, Anthropic, and Google Gemini). It adopts a prepaid Tab model: the agent pre-deposits funds into an escrow contract, then deducts incrementally via Vouchers once a session begins. Suited to high-frequency microtransactions. ([Source](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/))

## 2. Major players

| Player | Product | Status | Characteristics |
|------|------|------|------|
| **Coinbase** | Agentic Wallets + x402 | Launched (2026.2) | 50M+ transaction volume, Base L2 -first, supports USDC/ETH/BTC |
| **Crossmint** | Embedded Agent Wallets | Launched | Dual-key model (TEE), supports both stablecoins and virtual Visa/MC cards, covers 10 億+ products |
| **Skyfire** | KYAPay | Launched | Supports fiat and USDC top-up, builds an Agent credit layer |
| **Nevermined** | Agent payment infrastructure | Launched | Built-in metering, billing, and card agents; integrated with x402 |
| **Human.tech** | Agentic WaaP | Released 2026 | Wallet as a Protocol; enforces human oversight cryptographically |
| **Circle** | Gateway + CCTP + x402 | Launched | USDC covers 30 chains, CCTP connects 19 chains, $1260 億total throughput |

## 3. Identity and trust layer

- **ERC-8004**: Ethereum AI Agent ID standard. Includes 3 modules — identity registry, reputation registry, and validation registry. BNB Chain has already deployed it to mainnet. ([Source](https://eips.ethereum.org/EIPS/eip-8004))
- **KYA (Know Your Agent)**: An Agent-verification framework analogous to KYC. Mastercard completed the first Agent payment in Australia in 2026 年 3 月, generating a tamper-proof audit chain with Verifiable Intent. Verification platforms such as Sumsub are following suit. The EU AI Act's high-risk provisions take effect in 2026 年 8 月, effectively requiring KYA capability. ([Source](https://sumsub.com/blog/know-your-agent/))
- **ERC-4337 + EIP-7702**: Account abstraction provides the foundational capabilities for Agent wallets — Session Keys, delegated spending, and Guardian mechanisms. 4000 万+ smart accounts have already been deployed.

## 4. Market data

- In 2025 年, AI agents completed **1.4 億payments**, at an average of just $0.31 each ([Source](https://nevermined.ai/blog/ai-agent-payment-statistics))
- Stablecoin 2025 年transaction volume reached [[fintech/usd-stablecoin-interchange|**$33 兆**]], with 98.6% of Agent payments settled in USDC
- The AI Agent market is forecast to grow from 2025 年 $78.4 億 → 2030 年 $526.2 億 (CAGR 46.3%)
- a16z's forecast: pricing will shift from "seat-based" to "outcome-based," with crypto micropayments becoming [[agent-economy/skill-market-monetization|Agent 間リアルタイム決済ツール]] ([Source](https://a16z.com/newsletter/big-ideas-2026-part-2/))

## 5. Implications for Agent payment projects

1. **A timing window exists but is narrowing**: The 4 major protocols are already established, and Crossmint/Skyfire and others have taken the lead, but daily active transaction volume is extremely low (x402  is only $28K/day), indicating that the market is still in an early stage.
2. **Directions for differentiation**: Most existing solutions are concentrated on crypto-native scenarios. [[fintech/ai-payment-two-tracks|法定通貨 - ステーブルコインのブリッジ]], compliant KYA integration, and payment methods for the China/Asia market (Alipay/WeChat → stablecoin) remain a blank space.
3. **Protocol-compatible, not reinvented**: One should support x402/ACP/AP2/MPP and build a value-added layer on top of them rather than starting from scratch.
4. **The economics of microtransactions**: The average value of an Agent payment is $0.31 , demanding extremely low fees. The sub-cent fees on Base/Solana already meet the requirement, but the key lies in settlement efficiency and batching.
5. **Bundling ID + payment**: ERC-8004 + KYA is becoming the compliance baseline; a payment solution that embeds the identity layer holds a regulatory advantage.

---

Sources:
- [Google AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)
- [A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402)
- [Stripe ACP](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce)
- [x402 Foundation](https://www.x402.org/)
- [Coinbase Agentic Wallets](https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets)
- [Crossmint Agent Payments](https://www.crossmint.com/solutions/agentic-payments)
- [Skyfire KYAPay](https://skyfire.xyz/product/)
- [Nevermined](https://nevermined.ai/)
- [Circle Gateway x402](https://www.circle.com/blog/building-the-internet-financial-system-circles-product-vision-for-2026)
- [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004)
- [KYA Framework](https://sumsub.com/blog/know-your-agent/)
- [MPP by Stripe & Tempo](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/)
- [AI Agent Payment Stats](https://nevermined.ai/blog/ai-agent-payment-statistics)
- [a16z Big Ideas 2026](https://a16z.com/newsletter/big-ideas-2026-part-2/)
- [Agentic Protocol Landscape](https://www.tryellmo.ai/blog/agentic-commerce-protocol-landscape-2025-2026)
- [CoinDesk x402 Adoption](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]]
- [[agent-economy/claude-code-extension-architecture|Claude Code 拡張コンポーネントアーキテクチャ — Agent エコシステムのインフラ階層]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造(JPYC・USDC・Project Pax)]]
- [[fintech/ai-payment-two-tracks|AI 産業の二つの決済軌道:Stripe モデル vs ステーブルコインモデル]]
<!-- /wiki-links:managed -->
