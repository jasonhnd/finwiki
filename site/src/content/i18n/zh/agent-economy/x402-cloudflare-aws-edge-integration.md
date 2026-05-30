---
source: agent-economy/x402-cloudflare-aws-edge-integration
source_hash: dce234af6bdf86f2
lang: zh
status: machine
fidelity: ok
title: "x402 x Cloudflare / AWS · 边缘层的默认决济组件"
translated_at: 2026-05-30T17:31:02.649Z
---

# x402 x Cloudflare / AWS · 边缘层的默认决济组件

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]。请对照 [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)]] 了解同类 / 对比背景，对照 [[payments/INDEX|payments index]] 了解更广泛的系统 / 监管边界。

## Key facts

- 2026-Q1 Cloudflare Workers 原生集成 x402  ^[extracted]
- 2026-Q2 AWS API Gateway 集成 x402 · 使 Bedrock agent 可调用有偿 API ^[extracted]
- Cloudflare 处理全球 HTTP 流量的 20%+ ^[extracted]
- 开发者用 5 行 的配置即可将 API 商业化 · Cloudflare 收取 1-2% 的 facilitator fee ^[extracted]
- Facilitator 模型的验证延迟 < 100ms（信用代付 · 异步链上结算） ^[extracted]
- 在 Cloudflare + AWS 的背书下，x402 不再是 crypto-only 的玩具 ^[extracted]
- 与 OpenAI / Anthropic agent SDK 兼容（正式集成尚未公布） ^[extracted]

## Mechanism / How it works

边缘层（edge layer）是 HTTP 流量必经的路径，Cloudflare Workers / AWS API Gateway 是其中最大的 2 社。将 x402 集成到边缘层意味着**开发者无需编写 payment 逻辑**。只需声明端点价格（例如"此 API 为 $0.001 USDC"）· 边缘层便自动：(1) 拦截无决济的请求 → 返回 HTTP 402 ；(2) 验证携带 X-Payment 头的请求（异步链上 settlement）；(3) 允许路由 → 后端处理。借助 facilitator 模型，边缘层执行信用代付：在链上 [[fintech/usd-stablecoin-interchange|USDC settlement]] 完成前 · facilitator 已经放行请求 · 将单次延迟压缩至 < 100ms。Cloudflare 的 1-2% 是 facilitator fee · 与传统 Stripe 的 2.9% + $0.30  相比 · 在低价 API 调用上极具优势（料率护城河见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] 对照）。AWS API Gateway + Bedrock 路径形成 agent 在 AWS 内部调用有偿 API 的闭环。

## Origin & evolution

2025-05 Coinbase 发布 x402 spec。2025 H2 Cloudflare 的工程师在 Workers 上进行 experimental 集成 · 验证 facilitator 模型的延迟可压缩至 100ms。2025-Q4 Cloudflare 决定 2026-Q1 投产。2026-Q1 Cloudflare Workers x402 集成正式发布 —— 这成为 x402 首个 enterprise-grade 集成。2026-Q2 AWS API Gateway 跟进，经由 x402 与 Bedrock AgentCore 形成闭环（AgentCore 的默认钱包为 Privy/CDP + 通过 API Gateway 的 x402 计费）。同步地，Vercel AI SDK 也支持 x402 客户端调用。OpenAI / Anthropic 尚未公布正式集成 · 但 SDK 与 x402 客户端调用兼容（只需 agent 能用钱包签名即可 · 下层依赖 [[systems/erc-4337-overview|ERC-4337]] 或 [[systems/erc-7702-overview|ERC-7702]]）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-http-payment-overview|x402 総覧]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol (Coinbase) — https://github.com/coinbase/x402
