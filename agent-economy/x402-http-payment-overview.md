---
title: x402 · HTTP 402 复活的 AI agent 支付协议(总览)
aliases: [x402-http-payment-overview, x402, http-402, payment-required, coinbase-x402]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, payment, x402, coinbase, usdc, base, http-402, micropayment]
sources: []
status: candidate
---

# x402 · HTTP 402 复活的 AI agent 支付协议(总览)


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · 开发者平台 · AI agent on-chain 钱包基础设施]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2025-05 Coinbase 发布开源协议 · 复活 HTTP 402(1996 定义未启用) ^[extracted]
- 默认结算:USDC on Base · 也支持 Solana / 其他 L2 ^[extracted]
- 协议无关结算层 · 应用可换 Solana USDC / Tron USDT / 任意 EVM L2 ^[extracted]
- Facilitator 模式:Server 委托 facilitator(如 Coinbase)验证支付 ^[extracted]
- 支持 hot wallet + ERC-4337 SCW · agent 任何钱包都可以 ^[extracted]
- USDC on Base settlement < 2s · Facilitator 模式 < 100ms ^[extracted]
- 单笔 gas < $0.001(Base L2 + 4337 paymaster) ^[extracted]
- x402 Bazaar MCP 收录 10,000+ endpoints ^[extracted]

## Mechanism / How it works

AI agent 经济与 SaaS 订阅模式根本不匹配:agent 可能临时调用上百个不同 API,每个 API 走 "注册 + 信用卡 + 订阅 + API key 管理" 流程对 agent 不可能。需要 per-call micropayment + 即时鉴权 + 无账号注册。**x402 协议流程**:(1) 客户端请求 API endpoint;(2) Server 返回 `HTTP 402 Payment Required` + `X-Payment-Required` header(包含金额、地址、accepted assets);(3) 客户端构造 [[fintech/usd-stablecoin-interchange|USDC]] 转账;(4) 客户端重发请求带 `X-Payment` header(包含 tx hash / proof);(5) Server 验证支付 → 返回数据。Facilitator 模式让 Server 不必自己验证链上 tx —— 委托 Coinbase / Cloudflare 等 facilitator,降低实现门槛同时缩短到 < 100ms(agent 钱包通常基于 [[systems/erc-4337-overview|ERC-4337]] 或 [[systems/erc-7702-overview|ERC-7702]],由 [[systems/erc-4337-userop-bundler-flow|bundler]] 处理 UserOp)。

## Origin & evolution

RFC 7231 定义 HTTP 402 Payment Required 但留空 "reserved for future use" · 30 年无人启用因缺 universal payment rail。USDC + stablecoin 解决了这点(战略空间见 [[fintech/stablecoin-chain-token-strategy-trilemma|链 × 币 × 策略三难]])。2025-05 Coinbase 把 x402 作为 spec 开源(github.com/coinbase/x402)· 默认绑 USDC on Base。2025 H2 早期采用者包括 Vercel AI SDK / Cloudflare Workers 实验。2026-Q1 Cloudflare 把 x402 集成进 Workers 生产环境 → 全球 20%+ HTTP 流量层默认有了 payment rail。2026-Q2 AWS API Gateway 跟进。x402 Bazaar MCP 收录 10,000+ endpoints 作为 agent-discoverable 付费 API 目录。

## Counterpoints

- "30 年未启用的 HTTP 402" 叙事漂亮但 x402 实际只是用 header 模拟 · 不是真正激活 status code
- USDC + Base 默认会让协议绑定 Coinbase / Circle 体系 · 真正中立性待证
- AI agent 经济规模未达到 micropayment 真正爆发 · 协议先行可能等不到市场
- 与 AP2 / MPP / ACP 等竞争协议未必互斥但难以预测哪个胜出

## Open questions

- 2027 x402 是否会被 IETF 标准化 · 成为 HTTP 402 的官方扩展?
- OpenAI / Anthropic 是否会原生集成 x402 进 agent SDK?
- 是否会出现 x402 facilitator 寡头化 · Coinbase + Cloudflare 双头垄断?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS 边缘集成]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分叉]]
<!-- /wiki-links:managed -->

## Sources

- x402 spec on github.com/coinbase/x402
