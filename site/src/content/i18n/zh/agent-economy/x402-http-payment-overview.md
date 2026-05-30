---
source: agent-economy/x402-http-payment-overview
source_hash: 2f5dd3bbc4779bba
lang: zh
status: machine
fidelity: ok
title: "x402 · 复活了 HTTP 402 的 AI agent 支付协议(总览)"
translated_at: 2026-05-30T18:10:53.977Z
---

# x402 · 复活了 HTTP 402 的 AI agent 支付协议(总览)

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2025-05 Coinbase 作为开源协议发布 · 复活了 HTTP 402(自 1996 年定义以来未使用)^[extracted]
- 默认结算:USDC on Base · 同时支持 Solana / 其他 L2  ^[extracted]
- 结算层与协议无关 · 应用可切换到 Solana USDC / Tron USDT / 任意 EVM L2  ^[extracted]
- Facilitator 模型:Server 将支付验证委托给 facilitator(如 Coinbase)^[extracted]
- 支持 hot wallet + ERC-4337 SCW · agent 可使用任意钱包 ^[extracted]
- USDC on Base settlement < 2s · Facilitator 模型 < 100ms ^[extracted]
- 单次 gas < $0.001(Base L2 + 4337 paymaster)^[extracted]
- x402 Bazaar MCP 收录 10,000+ endpoints ^[extracted]

## Mechanism / How it works

AI agent 经济与 SaaS 订阅模型从根本上无法契合。agent 可能临时调用数百个 API,而让 agent 对每个 API 都走一遍「注册 + 信用卡 + 订阅 + API key 管理」的流程是不可能的。所需要的是 per-call 微支付 + 即时认证 + 无需注册账户。**x402 协议流程**:(1) 客户端向 API 端点发起请求;(2) Server 返回 `HTTP 402 Payment Required` + `X-Payment-Required` 头(包含金额、收款地址、accepted assets);(3) 客户端构建 [[fintech/usd-stablecoin-interchange|USDC]] 转账;(4) 客户端附带 `X-Payment` 头(包含 tx hash / proof)重发请求;(5) Server 验证支付 → 返回数据。通过 Facilitator 模型,Server 无需自行验证链上 tx —— 委托给 Coinbase / Cloudflare 等 facilitator,既降低实现门槛又缩短至 < 100ms(agent 的钱包通常基于 [[systems/erc-4337-overview|ERC-4337]] 或 [[systems/erc-7702-overview|ERC-7702]],UserOp 由 [[systems/erc-4337-userop-bundler-flow|bundler]] 处理)。

## Origin & evolution

RFC 7231 虽定义了 HTTP 402 Payment Required,但作为 "reserved for future use" 留空 · 30 年间无人加以利用。原因在于缺乏 universal payment rail。USDC + 稳定币解决了这一点(战略空间参见 [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]])。2025-05 Coinbase 将 x402 作为 spec 开源化(github.com/coinbase/x402) · 默认绑定 USDC on Base。2025 H2 的早期采用者包括 Vercel AI SDK / Cloudflare Workers 的实验性实现。2026-Q1 Cloudflare 将 x402 集成进 Workers 的生产环境 → 全球 HTTP 流量的 20%+ 将默认具备 payment rail。2026-Q2 AWS API Gateway 也随之跟进。x402 Bazaar MCP 作为 agent-discoverable 的付费 API 目录,收录了 10,000+ 端点。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS エッジ統合]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol (Coinbase) — https://github.com/coinbase/x402
