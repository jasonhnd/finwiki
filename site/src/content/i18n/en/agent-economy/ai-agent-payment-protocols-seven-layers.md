---
source: agent-economy/ai-agent-payment-protocols-seven-layers
source_hash: a9f1038c4510a942
lang: en
status: machine
fidelity: ok
title: "AI Agent payment 7-protocol layering table"
translated_at: 2026-05-30T16:40:11.497Z
---

# AI Agent payment 7-protocol layering table

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- 7  protocols = intent 3 + transport 2 + context 2 ^[extracted]
- AP2(Google-led) + x402(Coinbase-led) + MCP (Anthropic-led) + A2A (Google-led) = the industry shorthand "4 protocols" ^[extracted]
- SPT (Skyfire) / ACK (Catena Labs · a16z) / TAP (xpay) are secondary competitors ^[extracted]
- AP2 signs mandates with VC (Verifiable Credentials) + DPK (Decentralized Public Key) ^[extracted]
- x402 is an HTTP standard, non-chain-specific ^[extracted]

## Mechanism / How it works

The **intent layer** answers "what does the user want to do." AP2 defines a 3-layer trust-chain mandate: Intent (user ↦ agent · authorize purchase of X) → Cart (agent ↦ merchant · place the order on the user's behalf) → Payment (merchant ↦ payment network · collection instruction). Each layer is signed with VC + DPK, forming a chain that is tamper-proof. SPT / ACP are early competitors of similar design.

The **transport layer** answers "how to move money from A to B." x402 revives the HTTP 402 Payment Required status code. The server embeds "pay X USDC to address Y" in the response · the agent wallet automatically signs · transfers. Per-call micropayment is established. The underlying wallet is usually based on [[systems/erc-4337-overview|ERC-4337 スマートアカウント]] or [[systems/erc-7702-overview|ERC-7702 一時アップグレード]], and when going cross-chain, [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] hides the differences of the underlying chains. TAP is a similar token-based auth path but with a thinner ecosystem.

The **context layer** answers "how does the LLM know the available tools / data." MCP standardizes server-side tool definitions + resources · the LLM client automatically discovers and invokes them. A2A takes on agent-to-agent communication (one agent delegating to another) · forming a complementary relationship with MCP's server-tool in the 2  direction of agent-agent.

## Origin & evolution

2024.11 Anthropic released MCP · within 6  months OpenAI / Google followed · it became the de facto standard. 2025.04 Google released A2A to complement agent-to-agent communication. 2025.05 Coinbase released x402 , igniting the "HTTP-native payment" narrative (for detail on USDC as the default settlement currency see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]). 2025.09 Google, with 60+ partners, released AP2 · setting the tone of the intent layer. In mid-2026 年 FIDO took over AP2  → pivoted to AAIF · the intent layer heads toward a neutral standard. Secondary protocols (SPT/ACP/TAP) appeared within 2025 年, but under the dual commoditization pressure of AP2 + FIDO they find it hard to build an independent moat — forming a structural contrast with [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2(intent layer · Intent / Cart / Payment mandate · VC + DPK signature) — https://github.com/google-agentic-commerce/AP2
- Coinbase x402(transport layer · HTTP 402 per-call micropayment) — https://github.com/coinbase/x402
- Model Context Protocol (context layer · server-tool interface) — https://github.com/modelcontextprotocol/modelcontextprotocol
- Agent2Agent (A2A) Protocol (context layer · agent-agent communication) — https://github.com/a2aproject/A2A
- Agent Commerce Kit (Catena Labs · ACP-family intent / payment design) — https://www.agentcommercekit.com/overview/concepts
- Skyfire Developer Docs (SPT-family · Identity and Payments for AI) — https://docs.skyfire.xyz/
