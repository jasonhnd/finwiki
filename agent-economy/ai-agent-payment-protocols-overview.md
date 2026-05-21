---
title: AI Agent 支付协议总图 · 七协议格局概览
aliases: [ai-agent-payment-protocols-overview, agent payment seven protocols, AI agent 支付七协议]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, ai-agent, payments, protocol, ap2, x402, mcp]
sources: []
status: candidate
---

# AI Agent 支付协议总图 · 七协议格局概览


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 支付七协议分层表 · 意图 / 传输 / 上下文]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 行业速记"四协议"特指 AP2 + x402 + MCP + A2A,是最高引用的四个 ^[extracted]
- AP2 发布(2025.09)时已有 60+ 伙伴(Coinbase / MetaMask / Salesforce / American Express) ^[extracted]
- x402 走 HTTP 标准而非 chain-specific —— 任何 stablecoin 任何链皆可接入 ^[extracted]
- MCP 是 Anthropic 2024.11 发布的 LLM ↔ tools 协议,OpenAI 2025 跟进 ^[extracted]
- 2026 年中 FIDO Alliance 接管 AP2,重命名 AAIF(Agentic AI Identity Federation) ^[extracted]
- BIS Agorá 是协议层的官方背书 ^[inferred]

## Mechanism / How it works

七协议按层级分工:**意图层**(用户表达"我想花 X 买 Y")交由 AP2 / SPT / ACP 处理 mandate 三层信任链(Intent → Cart → Payment),用 VC + DPK 签名固化;**传输层**(实际转账)由 x402 复活 HTTP 402 Payment Required 头,实现 per-call USDC 微支付,Lite 版已落地 Cloudflare Agents / Vercel AI SDK;**上下文层**(LLM 怎么调工具)由 MCP 标准化 LLM ↔ tools / data sources 接口,A2A 处理 agent 间通信。三层互补,不互斥:一个完整 agent 支付流程通常同时调用 AP2(意图)+ x402(传输)+ MCP(上下文)。

## Origin & evolution

2024.11 MCP 首发,确立"LLM 接口"事实标准。2025.05 Coinbase 发 x402,复活 30 年前 HTTP 402 状态码,绑定 USDC。2025.09 Google 联合 60+ 伙伴发 AP2,定位为"agent 支付意图标准"。2025 内 SPT(Skyfire)/ ACP(Catena Labs · Sequoia 投)/ TAP(xpay)等次级竞争者涌现。2026 年中 FIDO 接管 AP2 重命名 AAIF,Apple / Microsoft / Mastercard 加入,联盟扩至 100+ —— 协议层进入 commoditization 通道,类比 WebAuthn / OAuth / OpenID Connect。

## Counterpoints

- "协议层注定 commoditization"假设 standardization 必然成功 —— 若 FIDO 接管失败(WebAuthn 早期就 stall 过 3 年),AP2/AAIF 可能长期分裂
- 上下文层 MCP 与 A2A 是否真互补尚未验证 —— OpenAI / Anthropic 可能分裂出竞争 stack
- "次级协议"(SPT/ACP/TAP)若被某大厂收购可能反超

## Open questions

- AAIF 真能在 2026-2027 内 ratify 并落地吗?
- 中国 / 欧盟 / 印度 是否会出地缘竞争性 agent 支付标准(类比 UPI vs Visa)?
- 监管(欧盟 AI Act / 美国 OCC)对 agent autonomous payment 的合规框架什么时候介入?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|七协议分层表]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|协议 commoditization 与价值上移]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

## Sources

