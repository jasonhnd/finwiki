---
title: AI Agent 支付七协议分层表 · 意图 / 传输 / 上下文
aliases: [ai-agent-payment-seven-layers, AP2 x402 MCP A2A SPT ACP TAP 分层]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, ai-agent, payments, protocol-stack, ap2, x402, mcp, a2a]
sources: []
status: candidate
---

# AI Agent 支付七协议分层表


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- 7 协议 = 意图 3 + 传输 2 + 上下文 2 ^[extracted]
- AP2(Google 主导)+ x402(Coinbase 主导)+ MCP(Anthropic 主导)+ A2A(Google 主导)= 行业速记"四协议" ^[extracted]
- SPT(Skyfire)/ ACP(Catena Labs · Sequoia)/ TAP(xpay)是次级竞争者 ^[extracted]
- AP2 用 VC(Verifiable Credentials)+ DPK(Decentralized Public Key)签名 mandate ^[extracted]
- x402 是 HTTP 标准,non-chain-specific ^[extracted]

## Mechanism / How it works

**意图层**响应"用户想做什么"。AP2 定义三层信任链 mandate:Intent(用户 ↦ agent · 我授权你买 X)→ Cart(agent ↦ 商家 · 我代表用户下单)→ Payment(商家 ↦ 支付网络 · 收款指令)。每一层都用 VC + DPK 签名,链式不可篡改。SPT / ACP 是类似设计的早期竞争者。

**传输层**响应"钱怎么从 A 到 B"。x402 复活 HTTP 402 Payment Required 状态码:服务器在响应中嵌入"付 X USDC 到 Y 地址",agent 钱包自动签名转账,per-call 微支付成立。底层钱包通常基于 [[systems/erc-4337-overview|ERC-4337 智能账户]] 或 [[systems/erc-7702-overview|ERC-7702 临时升级]],跨链时依赖 [[systems/chain-abstraction-pattern-overview|chain abstraction 模式]] 隐藏底层链差。TAP 走类似 token-based auth 路径但生态薄。

**上下文层**响应"LLM 怎么知道有哪些工具 / 数据可用"。MCP 标准化 server-side tool definitions + resources,LLM client 自动发现并调用。A2A 处理 agent 间通信(一个 agent 委托另一个 agent),与 MCP 是 server-tool 对 agent-agent 的两个方向互补。

## Origin & evolution

2024.11 Anthropic 发 MCP · 6 个月内 OpenAI / Google 跟进 · 事实标准。2025.04 Google 发 A2A 补 agent 间通信。2025.05 Coinbase 发 x402,引爆"HTTP 原生支付"叙事(USDC 作为默认结算币 · 详见 [[fintech/usd-stablecoin-interchange|USD 稳定币互换层]])。2025.09 Google 联 60+ 伙伴发 AP2,意图层定调。2026 年中 FIDO 接管 AP2 → AAIF,意图层走向中立标准。次级协议(SPT/ACP/TAP)在 2025 内涌现,但因 AP2 + FIDO 双重 commoditization 压力难以建立独立护城河 —— 与 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe 协议对冲策略]] 形成结构对照。

## Counterpoints

- "7 协议格局"是 2026.05 快照;FIDO 整合后可能压缩到 4-5 协议
- A2A 与 MCP 是否真要 2 个协议有争议 —— Anthropic 可能扩展 MCP 覆盖 agent-to-agent
- "意图 / 传输 / 上下文"三层是分析视角,不是协议方自定义的层级 —— 业界文档中常混用

## Open questions

- AAIF 接管 AP2 后,SPT / ACP 是否被收购或淘汰?
- 中国 / 欧盟 是否会推主权竞争性 agent 协议?
- 传输层是否还会冒出第三个标准(例如 stablecoin native 而非 HTTP native)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|七协议总览]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|协议 commoditization 与价值上移]]
<!-- /wiki-links:managed -->

## Sources

