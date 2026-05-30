---
source: agent-economy/ai-agent-payment-protocols-overview
source_hash: 303898c53e142856
lang: en
status: machine
fidelity: ok
title: "AI Agent payment protocols overview · a 7-protocol survey"
translated_at: 2026-05-30T16:40:11.496Z
---

# AI Agent payment protocols overview · a 7-protocol survey

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy INDEX]]. Read it against [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 決済7プロトコル分層表 · 意図 / 伝送 / 文脈]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- The industry shorthand "4 protocols" refers to AP2 + x402 + MCP + A2A — the 4 most frequently cited ^[extracted]
- At the AP2 launch (2025.09) there were already 60+ partners (Coinbase / MetaMask / Salesforce / American Express) ^[extracted]
- x402 is not chain-specific but rides the HTTP standard — any stablecoin, any chain can connect ^[extracted]
- MCP is the LLM ↔ tools protocol released by Anthropic in 2024.11 , followed by OpenAI in 2025  ^[extracted]
- In mid-2026 年 the FIDO Alliance took over AP2 , renaming it AAIF (Agentic AI Identity Federation) ^[extracted]

## Mechanism / How it works

The 7 protocols divide labor by layer. The **intent layer** (where the user expresses "I want to buy Y for X yen") is handled by AP2 / SPT / ACP, which process the mandate's 3-layer trust chain (Intent → Cart → Payment), fixed in place with VC + DPK signatures. The **transport layer** (the actual money transfer) is handled by x402 , which revives the HTTP 402 Payment Required header to realize per-call USDC micropayments; the Lite version has already landed in Cloudflare Agents / Vercel AI SDK. The **context layer** (how the LLM invokes tools) is handled by MCP, which standardizes the LLM ↔ tools / data-sources interface, while A2A handles agent-to-agent communication. The 3 layers are complementary, not mutually exclusive. A complete agent payment flow usually invokes AP2(intent) + x402(transport) + MCP (context) simultaneously. The lower layer depends on [[systems/erc-4337-overview|ERC-4337 アカウント抽象化]] and [[systems/erc-7702-overview|ERC-7702 EOA アップグレード]], which provide programmable wallet capability.

## Origin & evolution

2024.11 MCP debuted, establishing the de facto standard for the "LLM interface." 2025.05 Coinbase launched x402 , reviving the 30-year-old HTTP 402 status code and binding it to USDC (for USDC's role see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]). 2025.09 Google, together with 60+ partners, launched AP2 , positioning it as "the standard for agent payment intent." Within 2025 年, secondary competing protocols such as SPT (Skyfire) / ACP (Catena Labs · Sequoia-backed) / TAP (xpay) appeared one after another. In mid-2026 年 FIDO took over AP2 and renamed it AAIF; Apple / Microsoft / Mastercard joined and the federation expanded to 100+ — the protocol layer entered the channel of commoditization, analogous to WebAuthn / OAuth / OpenID Connect (for detail see [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|7プロトコル分層表]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2(Agent Payments Protocol · intent-layer mandate) — https://github.com/google-agentic-commerce/AP2
- Coinbase x402(HTTP 402 -native payment · transport layer) — https://github.com/coinbase/x402
- Model Context Protocol (Anthropic · LLM ↔ tools · context layer) — https://github.com/modelcontextprotocol/modelcontextprotocol
- Agent2Agent (A2A) Protocol (agent-to-agent communication) — https://github.com/a2aproject/A2A
- Agent Commerce Kit (Catena Labs · ACK-ID / ACK-Pay) — https://www.agentcommercekit.com/overview/concepts
- BIS Project Agorá (official endorsement of the protocol layer) — https://www.bis.org/about/bisih/topics/fmis/agora.htm
