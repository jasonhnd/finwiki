---
title: Privy x AWS Bedrock AgentCore · AI agent 经济默认钱包卡位
aliases: [privy-aws-agentcore-default-wallet, aws-agentcore-payments, privy-coinbase-cdp-aws-default]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, ai-agent, wallet, aws, bedrock, agentcore, privy, coinbase-cdp]
sources: []
status: candidate
---

# Privy x AWS Bedrock AgentCore · AI agent 经济默认钱包卡位


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 层 vs App 层路径之争]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2026-05-07 AWS Bedrock AgentCore Payments 发布 ^[extracted]
- 默认 wallet provider:Privy(Stripe 子公司)+ Coinbase CDP 并列 ^[extracted]
- 明确不在默认列表:Circle / Arc / Anchorage ^[extracted]
- 部署区域:US East / US West / EU Frankfurt / APAC Sydney ^[extracted]
- 协议:x402(HTTP 402)+ x402 Bazaar MCP(10,000+ endpoints) ^[extracted]
- Coinbase / Stripe = AWS 战略联盟(Stripe 是 AWS 大客户) ^[extracted]
- Circle / Coinbase 2023 解散 Centre Consortium 后分道扬镳 ^[extracted]

## Mechanism / How it works

AWS Bedrock AgentCore 是 AWS 的 AI agent 编排平台 · Payments 模块负责让 agent 在执行 task 时支付外部 API。默认 wallet provider 选择本质是平台一次决策决定 millions of agents 的钱包归属。Privy 作为 Stripe 子公司可让 Stripe Connect 5M 商户的接收侧直接对接 agent 支付([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan horse]] 的关键卡位);Coinbase CDP 作为 Coinbase 自营 wallet 服务集成 Base 上的 [[fintech/usd-stablecoin-interchange|USDC settlement]]。两者 "并列" 但在不同 region / 不同 use case 上互有优势 —— Privy 强 Web2 集成 / Coinbase CDP 强 onchain 原生体验。Circle 不在默认列表的根因:Coinbase 与 Circle 2023 分手后,AWS 的 Coinbase 联盟使 Circle 难以同时进入默认。Anchorage 是 issuer 而非 wallet provider · 类别错位。

## Origin & evolution

2024 AWS 启动 Bedrock 平台 · 主推 Anthropic + Mistral 等 model。2025 H2 AWS 决定加入 Agent Payments 模块 · 选 wallet provider 是关键决策。2026-Q1 内部协商:Stripe(AWS 大客户)+ Coinbase(AWS region 服务客户)推 Privy / CDP · Circle 由于无 AWS 战略关系被排除。2026-05-07 发布 · Privy + Coinbase CDP 并列。USDB(Stripe 在 Base 上发的 stablecoin)与 USDC 在 AgentCore 上都可用 · 但默认 wallet 的选择实际偏向哪个 stablecoin 体系将逐步显现(战略空间分析参考 [[fintech/stablecoin-chain-token-strategy-trilemma|链 × 币 × 策略三难]])。Circle 2026-Q2 响应:发布自有 Agent Wallets(Circle Agent Stack) · 走 SDK 独立部署路径而非 AWS 默认。

## Counterpoints

- "默认 wallet" 不等于 "唯一 wallet" · 开发者仍可手动接入 Circle / Anchorage / 任何 ERC-4337 wallet
- Privy + CDP 在 AWS 上的实际市场份额拆分未知 · 可能 CDP 蚕食 Privy
- Circle 通过 Solana / Arc / Anthropic / Cloudflare 等其他渠道仍可获得 agent 经济份额
- "AWS 选边站" 解释可能过度简化 · 也可能是技术成熟度差异

## Open questions

- 2027 Google Cloud / Azure 是否会跟进 · 选哪家做默认 wallet?
- Circle Agent Wallets 是否能在 SDK 独立路径上反超 AWS 默认?
- AWS Marketplace 中第三方 wallet provider 集成数会到多少?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 总览]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS 边缘集成]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet 对 CEX 的去中介化]]
<!-- /wiki-links:managed -->

## Sources

