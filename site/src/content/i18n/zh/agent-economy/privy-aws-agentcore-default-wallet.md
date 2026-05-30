---
source: agent-economy/privy-aws-agentcore-default-wallet
source_hash: e378cbc771a5fd8e
lang: zh
status: machine
fidelity: ok
title: "Privy x AWS Bedrock AgentCore · AI agent 经济中的默认钱包定位"
translated_at: 2026-05-30T17:31:02.641Z
---

# Privy x AWS Bedrock AgentCore · AI agent 经济中的默认钱包定位

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]。请对照 [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] 了解同类 / 对比背景，对照 [[payments/INDEX|payments index]] 了解更广泛的系统 / 监管边界。

## Key facts

- 2026-05-07 AWS Bedrock AgentCore Payments 发布于 ^[extracted]
- 默认 wallet provider：Privy（Stripe 子公司）+ Coinbase CDP 并列 ^[extracted]
- 明确不在默认列表中：Circle / Arc / Anchorage ^[extracted]
- 部署地区：US East / US West / EU Frankfurt / APAC Sydney ^[extracted]
- 协议：x402（HTTP 402）+ x402 Bazaar MCP（10,000+ endpoints） ^[extracted]
- Coinbase / Stripe = AWS 的战略联盟（Stripe 是 AWS 的大客户） ^[extracted]
- Circle / Coinbase 自 2023 解散 Centre Consortium 以来已走上不同的道路 ^[extracted]

## Mechanism / How it works

AWS Bedrock AgentCore 是 AWS 的 AI agent 编排平台，而 Payments 模块负责 agent 在执行任务时向外部 API 付款。选定默认 wallet provider 本质上是平台侧的一次性决定，左右着数百万 agent 的钱包归属。作为 Stripe 子公司，Privy 能够将 Stripe Connect 的 5M 商户收款侧直接连接到 agent 决济（这是 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] 的关键定位）。Coinbase CDP 是 Coinbase 自营的 wallet 服务，集成到 Base 上的 [[fintech/usd-stablecoin-interchange|USDC settlement]]。这 2 者是"并列"的，但在不同 region / 不同 use case 下各自占优 —— Privy 在 Web2 集成上强，Coinbase CDP 在 onchain 原生体验上强。Circle 未进入默认列表的根本原因：自 Coinbase 与 Circle 在 2023 分道扬镳以来，由于 AWS 的 Coinbase 合作关系，Circle 难以与之同居于默认列表。Anchorage 是 issuer 而非 wallet provider，其品类定位有所错位。

## Origin & evolution

2024 AWS 启动 Bedrock 平台，以 Anthropic + Mistral 等模型为主轴。2025 H2 AWS 决定添加 Agent Payments 模块，wallet provider 选定成为关键决断。2026-Q1 内部谈判：Stripe（AWS 大客户）+ Coinbase（AWS region 服务客户）力推 Privy / CDP，而 Circle 因与 AWS 没有战略关系被排除。2026-05-07 发布，Privy + Coinbase CDP 并列嵌入。USDB（Stripe 在 Base 上发行的 stablecoin）与 USDC 在 AgentCore 上均可使用，但默认 wallet 的选择实质上偏向哪套 stablecoin 体系将逐步显现（战略空间的分析见 [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]]）。Circle 的 2026-Q2 反应：发布自家的 Agent Wallets（Circle Agent Stack），采取 SDK 独立部署路径而非成为 AWS 默认。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 総覧]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS エッジ統合]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Privy docs — https://docs.privy.io/
