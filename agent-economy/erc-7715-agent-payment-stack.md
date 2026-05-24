---
title: ERC-7715 与 agent payment stack · x402 + AP2 + 4337/7702 协同
aliases: [erc-7715-stack, agent-payment-stack, x402-ap2-7715-4337]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, agent-payment, erc-7715, x402, ap2]
sources: []
status: candidate
---

# ERC-7715 与 agent payment stack · x402 + AP2 + 4337/7702 协同


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- agent payment stack 四层结构 ^[inferred]
- x402 处理 HTTP 层支付握手(Cloudflare/Coinbase/AWS 推动) ^[extracted]
- AP2 / MPP / ACP 处理 agent 间协商 metadata ^[extracted]
- ERC-7715 处理 wallet 给 agent 的授权 ^[extracted]
- ERC-4337 / 7702 提供可编程 wallet 底层 ^[extracted]
- 主流玩家:MetaMask Snaps / Coinbase Smart Wallet / Safe / Privy / Pimlico / ZeroDev ^[extracted]

## Mechanism / How it works

**四层 stack 架构**:

| 层 | 协议 | 作用 |
|---|---|---|
| **HTTP** | x402 | API 返回 402 + 支付指令 · client 完成支付后重试 |
| **Agent 协商** | AP2 / MPP / ACP / A2A | mandate / intent metadata 标准 |
| **Wallet 授权** | ERC-7715 | scoped permission 给 agent · 一次授权多次使用 |
| **Wallet 底层** | ERC-4337 / 7702 | 可编程钱包(详见 [[systems/erc-4337-overview|ERC-4337]] 与 [[systems/erc-7702-overview|ERC-7702]]) · 支持 module / delegation |

**典型 agent 自动支付流程**:
1. 用户授权 agent "每天可以花 $5 给 vercel.com API"(7715 scoped permission)
2. agent 调用 Vercel API · Vercel 返回 HTTP 402 + USDC 支付指令(x402)
3. agent 自动从 wallet 取出 $0.50 USDC 支付(在 7715 scope 内 · 无需用户签名)
4. Vercel 验证支付 + 返回 API 响应
5. 用户在 wallet UI 看到当日累计 $X.XX 给 Vercel · 可随时撤销 permission

**Stripe Privy 整合潜力**:Stripe 通过 Privy(收购的)已经接入 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 嵌入式钱包]]。如果 Stripe + Privy + 7715 + AP2 整合 · **任何 SaaS 都可以接收 agent 的自动支付** · 无需信用卡号、无需 OAuth、无需订阅管理——这把 SaaS 计费层从 Stripe Billing(基于卡)迁移到链上 permission(基于地址 + scope)。详见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan horse]]。

**主角分工**:
- **MetaMask Snaps**:2025 实装 7715 · EOA + 7702 双模式
- **Coinbase Smart Wallet**:原生支持 · 与 Coinbase Agent SDK 集成
- **Safe{Core}**:Module 形式实装 · 机构 multi-sig + 子权限
- **Privy**:集成 7715 + AP2 · Stripe agent 支付场景
- **Pimlico / ZeroDev**:提供 7715 ↔ 4337 bundler 中间件
- **Tempo / Arc**:潜在采用者——agent 经济是核心叙事
- **JPM Kinexys**:不参与——permissioned 网络 · 权限模型走自有标准

## Origin & evolution

agent payment stack 概念在 2024-2025 间逐步成型——早期各协议(x402 / AP2 / 7715)分别由不同团队推动 · 2025 后期开始有意识地协同。Coinbase Smart Wallet 2025 演示"原生 agent 支付"是关键演示事件 · 表明四层 stack 可以端到端跑通。

Stripe 收购 Privy(2024)是 Web2 支付巨头第一次明确押注链上 permission 模型。预期 2026-2027 间会看到第一批 production agent SaaS 集成案例。

## Counterpoints

**协议碎片化风险**:x402 / AP2 / MPP / ACP / A2A 五种 agent 协商协议并存 · 加上 7715 / 4337 / 7702 wallet 层 · merchant 集成成本爆炸。如果不形成事实标准 · agent payment 可能停留在 demo 阶段。

**Stripe Billing 替代假设**:虽然技术上 7715 + AP2 可替代 Stripe Billing · 但 Stripe Billing 的非技术价值(信用卡争议解决 / chargeback / 反欺诈 / 财务 SaaS 整合)在链上 permission 模型下尚未完全复现。短期不会大规模迁移。

## Open questions

- 五种 agent 协商协议(x402/AP2/MPP/ACP/A2A)的事实标准何时出现?
- Stripe + Privy + 7715 的具体产品形态?
- 链上 permission 是否能提供 chargeback 等同保障?
- 跨链 7715 permission(agent 在多链上花钱)的标准化?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-overview|ERC-7715 Overview]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Smart Wallet agent payment demo(2025)
