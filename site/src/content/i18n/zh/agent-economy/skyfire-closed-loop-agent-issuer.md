---
source: agent-economy/skyfire-closed-loop-agent-issuer
source_hash: a8d1ad7ce96cd18d
lang: zh
status: machine
fidelity: ok
title: "Skyfire · 闭环卡网络 agent 支付发卡方"
translated_at: 2026-05-30T17:31:02.644Z
---

# Skyfire · 闭环卡网络 agent 支付发卡方

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]。请对照 [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 stablecoin rail]] 和 [[agent-economy/ap2-overview|AP2 · Google mandate protocol]] 了解同类 / 对比，对照 [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic-commerce pilots]] 了解卡网络框架，对照 [[payments/INDEX|payments index]] 了解更广泛的监管边界。

## Key facts

- Skyfire 于 2024-2025 完成 Series A 融资，运营为一家 **agent 支付发卡方** —— 一个让 AI agent 获得身份 + 已注资虚拟卡的闭环平台
- 与 **Visa** 合作，对接卡轨道并与 Visa Trusted Agent Protocol 对齐
- Stripe / Visa 发行的虚拟卡通过 Skyfire 的 agent 身份层进行路由
- 与 [[agent-economy/x402-http-payment-overview|x402]]（HTTP + USDC stablecoin）和 [[agent-economy/ap2-overview|AP2]]（跨多轨道的 mandate VC）形成对比
- 闭环 = Skyfire 在一个捆绑包中铸造 agent 身份、发卡、设定花费上限、监控商户授权

## Mechanism — 此处闭环的含义

Skyfire 的架构将三件事压缩进一个运营方：

1. **Agent 身份 / KYA（Know-Your-Agent）** —— Skyfire 接入 agent，验证控制主体，存储身份证明
2. **虚拟卡发行** —— Visa 网络卡，附带商户类别白名单、单笔交易上限、每日 / 每月上限
3. **授权网关** —— 当 agent 调用商户 API 时，Skyfire 实时根据限定范围的规则进行授权

与**开放协议栈**对比：

| 层 | 开放栈（x402 + AP2 + ERC-7715） | Skyfire 闭环 |
|---|---|---|
| Agent 身份 | 由钱包 / OS 发放（Coinbase CDP、Privy、Solana Mobile） | 由 Skyfire 发放 |
| 授权 mandate | AP2 W3C VC | Skyfire 内部卡控规则 |
| 结算轨道 | Base 上的 USDC（x402）或 Google Pay / 卡（AP2） | Visa 卡轨道，法币 |
| 发现 | [[agent-economy/x402-http-payment-overview|x402 Bazaar MCP]] | Skyfire 商户目录 |
| 信任锚 | Coinbase / Cloudflare facilitator + 链共识 | Skyfire 作为单一信任枢纽 |

闭环模型以**互操作性**换取**快速接入 + 清晰的责任划分**：商户将 Skyfire 路由的卡作为普通卡交易接受，拒付 / 争议遵循标准 Visa 轨道（责任框架见 [[agent-economy/agent-actorship-debate|agent actorship debate]]）。

## Skyfire 在七协议图谱中的位置

- **HTTP 传输**：不设限（可运行于任何 agent runtime 之上）
- **授权层**：专有（vs AP2 的 W3C VC 标准）
- **结算层**：Visa 卡轨道（vs x402 的 USDC、AP2 的多轨道）
- **身份层**：Skyfire KYA（vs 经由 [[agent-economy/erc-7715-overview|ERC-7715]] 的去中心化 agent 身份）

实际含义：Skyfire 是**通往"agent 拥有一个任何商户都已接受的支付工具"的最快路径** —— 但将 agent 锁在 Skyfire 的风险边界之内。与 [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] 形成对比，后者提供发卡原语而不带闭环的强主张。

## 竞争定位

| 参与者 | 路径 | 取舍 |
|---|---|---|
| **Skyfire** | 闭环 agent 发卡方 + Visa 合作伙伴 | 商户接受快，轨道窄 |
| **Stripe Agent Toolkit**（[[agent-economy/stripe-agent-toolkit-position|see entry]]） | 面向任何 agent 构建者的发卡即服务 | 构建者拥有闭环，工作量更大 |
| **Visa Trusted Agent Protocol** | 网络级 agent 认证标准 | 标准化卡网络所需的认证握手 |
| **AP2**（[[agent-economy/ap2-overview|see entry]]） | W3C VC mandate，轨道无关 | 开放标准，接受曲线较慢 |
| **x402**（[[agent-economy/x402-http-payment-overview|see entry]]） | HTTP 原生 USDC | Stablecoin 轨道，绕过卡网络 |

## Origin and evolution

Skyfire 诞生于 2024 "agent 需要支付工具"的浪潮，与 Stripe Agent Toolkit、Visa 的 Trusted Agent Protocol 公告以及 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] agent SDK 同期。其赌注：卡网络在未来数年内仍是商户接受的默认选项，因此把 agent 包裹进一个卡网络原生的发卡层是一门真实的生意 —— 即便 x402 / stablecoin 轨道在其下层成长。

Series A 投资人 / 合作伙伴（Visa、此前 Anthropic 生态信号）指向**企业发卡方分销**论题：购买 AI agent 的企业想要一张账单、审计轨迹和策略可控的卡 —— 而非一个 USDC 钱包。Skyfire 填补了这个利于采购的位置。

## Related

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

## Sources

- skyfire.xyz product pages and documentation.
- Visa: agentic-commerce program and Trusted Agent Protocol announcements.
- Stripe newsroom: agent-issuing partner program references.
- Coverage of Series A funding and Visa partnership.
