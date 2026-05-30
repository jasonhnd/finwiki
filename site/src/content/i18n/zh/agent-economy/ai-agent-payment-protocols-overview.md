---
source: agent-economy/ai-agent-payment-protocols-overview
source_hash: 303898c53e142856
lang: zh
status: machine
fidelity: ok
title: "AI Agent 支付协议全景图 · 7协议俯瞰"
translated_at: 2026-05-30T16:40:11.496Z
---

# AI Agent 支付协议全景图 · 7协议俯瞰

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy INDEX]]. Read it against [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 決済7プロトコル分層表 · 意図 / 伝送 / 文脈]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 业界简称「4协议」指的是 AP2 + x402 + MCP + A2A,即引用频率最高的 4个 ^[extracted]
- AP2 发布时(2025.09)已有 60+ 合作方(Coinbase / MetaMask / Salesforce / American Express) ^[extracted]
- x402 并非 chain-specific 而是搭乘 HTTP 标准 — 任何 stablecoin、任何链皆可接入 ^[extracted]
- MCP 是 Anthropic 于 2024.11 发布的 LLM ↔ tools 协议,OpenAI 于 2025 跟进 ^[extracted]
- 2026 年中盘 FIDO Alliance 接手 AP2 ,更名为 AAIF(Agentic AI Identity Federation) ^[extracted]

## Mechanism / How it works

7协议按层级分工。**意图层**(用户表明「想以 X 元买 Y」)由 AP2 / SPT / ACP 处理 mandate 的 3层信任链(Intent → Cart → Payment),以 VC + DPK 签名固定化。**传输层**(实际汇款)由 x402 复活 HTTP 402 Payment Required 头,实现 per-call 的 USDC 微支付,Lite 版已落地 Cloudflare Agents / Vercel AI SDK。**上下文层**(LLM 如何调用工具)由 MCP 标准化 LLM ↔ tools / data sources 的接口,A2A 处理 agent 间通信。3层是互补关系而非排他。一个完整的 agent 支付流程通常同时调用 AP2(意图)+ x402(传输)+ MCP(上下文)。底层依赖 [[systems/erc-4337-overview|ERC-4337 アカウント抽象化]] 和 [[systems/erc-7702-overview|ERC-7702 EOA アップグレード]],提供可编程的 wallet 能力。

## Origin & evolution

2024.11 MCP 登场,确立了「LLM 接口」的事实标准。2025.05 Coinbase 发布 x402 ,复活了 30年前的 HTTP 402 状态码并将其与 USDC 绑定(USDC 的角色见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])。2025.09 Google 与 60+ 合作方一同发布 AP2 ,将其定位为「agent 支付意图的标准」。2025 年内 SPT(Skyfire)/ ACP(Catena Labs · Sequoia 出资)/ TAP(xpay)等二次竞争协议陆续登场。2026 年中盘 FIDO 接手 AP2 并更名为 AAIF,Apple / Microsoft / Mastercard 加入,联盟扩大至 100+ — 协议层进入 commoditization 的通道,类比于 WebAuthn / OAuth / OpenID Connect(详见 [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]])。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|7プロトコル分層表]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2(Agent Payments Protocol · 意图层 mandate)— https://github.com/google-agentic-commerce/AP2
- Coinbase x402(HTTP 402 原生支付 · 传输层)— https://github.com/coinbase/x402
- Model Context Protocol(Anthropic · LLM ↔ tools · 上下文层)— https://github.com/modelcontextprotocol/modelcontextprotocol
- Agent2Agent (A2A) Protocol(agent 间通信)— https://github.com/a2aproject/A2A
- Agent Commerce Kit(Catena Labs · ACK-ID / ACK-Pay)— https://www.agentcommercekit.com/overview/concepts
- BIS Project Agorá(对协议层的官方背书)— https://www.bis.org/about/bisih/topics/fmis/agora.htm
