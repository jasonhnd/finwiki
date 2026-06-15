---
source: agent-economy/skyfire-closed-loop-agent-issuer
source_hash: 7753cc75d717bba9
lang: zh
status: machine
fidelity: ok
title: "Skyfire · 闭环卡网络 agent 支付发行方"
translated_at: 2026-06-15T03:48:21.809Z
---

# Skyfire · 闭环卡网络 agent 支付发行方

## Wiki 路径

本条目位于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]] 之下。可对照 [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 stablecoin rail]] 与 [[agent-economy/ap2-overview|AP2 · Google mandate protocol]] 作同业 / 对比，对照 [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic-commerce pilots]] 了解卡网络框架，并对照 [[payments/INDEX|payments index]] 了解更广的监管边界。

## 关键事实

- Skyfire 于 2024-2025 完成 A 轮融资，作为 **agent payment issuer** 运营——一个让 AI agent 获得身份 + 已注资虚拟卡的闭环平台
- 与 **Visa** 合作提供卡 rails 并与 Visa Trusted Agent Protocol 对齐
- Stripe / Visa 发行的虚拟卡经由 Skyfire 的 agent-identity 层路由
- 与 [[agent-economy/x402-http-payment-overview|x402]]（HTTP + USDC stablecoin）和 [[agent-economy/ap2-overview|AP2]]（在多条 rails 上的 mandate VC）形成对比
- 闭环 = Skyfire 铸造 agent 身份、发卡、设定消费上限、监控商户授权于一体

## 机制——闭环在此处意味着什么

Skyfire 的架构将三项功能压缩到一个运营方中:

1. **Agent identity / KYA (Know-Your-Agent)** — Skyfire 对 agent 进行 onboarding、验证控制主体、存储身份凭证
2. **虚拟卡发行** — Visa 网络卡，带商户类别白名单、单笔交易上限、每日 / 每月上限
3. **授权网关** — 当 agent 调用商户 API 时，Skyfire 实时按 scoped 规则进行授权

与 **open-protocol stack** 相比:

| Layer | Open stack (x402 + AP2 + ERC-7715) | Skyfire closed loop |
|---|---|---|
| Agent identity | Issued by wallet / OS (Coinbase CDP, Privy, Solana Mobile) | Issued by Skyfire |
| Authorization mandate | AP2 W3C VC | Skyfire-internal card-control rules |
| Settlement rail | USDC on Base (x402) or Google Pay / cards (AP2) | Visa card rail, fiat |
| Discovery | [[agent-economy/x402-http-payment-overview|x402 Bazaar MCP]] | Skyfire merchant directory |
| Trust anchor | Coinbase / Cloudflare facilitator + chain consensus | Skyfire as single trust hub |

闭环模型以 **互操作性** 换取 **快速 onboarding + 清晰的责任归属**: 商户将 Skyfire 路由的卡作为普通卡交易接受，拒付 / 争议遵循标准 Visa rails（责任框架参见 [[agent-economy/agent-actorship-debate|agent actorship debate]]）。

## Skyfire 在七协议图谱中的位置

- **HTTP transport**: 不持立场（可在任意 agent runtime 上运行）
- **Authorization layer**: 专有（相对于 AP2 的 W3C VC 标准）
- **Settlement layer**: Visa 卡 rail（相对于 x402 的 USDC、AP2 的 multi-rail）
- **Identity layer**: Skyfire KYA（相对于经由 [[agent-economy/erc-7715-overview|ERC-7715]] 的去中心化 agent 身份）

实际含义: Skyfire 是 **通向「agent 拥有任何商户都已接受的支付工具」的最快路径**——但将 agent 锁定在 Skyfire 的风险边界内。与 [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] 形成对比，后者提供发卡原语而不带闭环的立场倾向。

## 竞争定位

| Player | Approach | Trade-off |
|---|---|---|
| **Skyfire** | Closed-loop agent issuer + Visa partner | Fast merchant acceptance, narrow rails |
| **Stripe Agent Toolkit** ([[agent-economy/stripe-agent-toolkit-position|see entry]]) | Issuing-as-a-service for any agent builder | Builder owns the closed loop, more work |
| **Visa Trusted Agent Protocol** | Network-level agent-authentication standard | Standardizes the auth handshake card networks need |
| **AP2** ([[agent-economy/ap2-overview|see entry]]) | W3C VC mandate, rail-agnostic | Open standard, slower acceptance curve |
| **x402** ([[agent-economy/x402-http-payment-overview|see entry]]) | HTTP-native USDC | Stablecoin rail, bypasses card networks |

## 起源与演进

Skyfire 与 Stripe Agent Toolkit、Visa 的 Trusted Agent Protocol 公告以及 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] 的 agent SDK 一道，诞生于 2024 「agents need payment instruments」浪潮。其押注: 卡网络在未来数年仍将是商户接受的默认选项，因此将 agent 包裹进一个 card-network-native 的发卡层是一门真实的生意——即便 x402 / stablecoin rails 在其下方成长。

A 轮投资方 / 合作方（Visa、此前的 Anthropic 生态信号）指向 **enterprise-issuer-distribution** 论点: 购买 AI agent 的企业想要一张账单、审计轨迹和受策略控制的卡——而非一个 USDC 钱包。Skyfire 填补了这个对采购友好的位置。

## 关联

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots]]
- [[agent-economy/stripe-agent-toolkit-position]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/agent-actorship-debate]]
- [[payments/INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- skyfire.xyz product pages and documentation.
- Visa: agentic-commerce program and Trusted Agent Protocol announcements.
- Stripe newsroom: agent-issuing partner program references.
- Coverage of Series A funding and Visa partnership.
