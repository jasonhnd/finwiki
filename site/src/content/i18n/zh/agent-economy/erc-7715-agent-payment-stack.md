---
source: agent-economy/erc-7715-agent-payment-stack
source_hash: 9397cf2ee13c7394
lang: zh
status: machine
fidelity: ok
title: "ERC-7715 与 agent payment stack · x402 + AP2 + 4337/7702 协调"
translated_at: 2026-05-30T17:04:08.793Z
---

# ERC-7715 与 agent payment stack · x402 + AP2 + 4337/7702 协调

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- x402 承担 HTTP 层的支付握手(由 Cloudflare/Coinbase/AWS 推动) ^[extracted]
- AP2 / MPP / ACP 承担 agent 间的交涉元数据 ^[extracted]
- ERC-7715 承担从 wallet 到 agent 的授权 ^[extracted]
- ERC-4337 / 7702 提供可编程 wallet 的基础 ^[extracted]
- 主要玩家:MetaMask Snaps / Coinbase Smart Wallet / Safe / Privy / Pimlico / ZeroDev ^[extracted]

## Mechanism / How it works

**4层 stack 架构**:

| 层 | 协议 | 角色 |
|---|---|---|
| **HTTP** | x402 | API 返回 402 + 支付指示 · client 在支付完成后重试 |
| **Agent 交涉** | AP2 / MPP / ACP / A2A | mandate / intent 元数据标准 |
| **Wallet 授权** | ERC-7715 | 向 agent 授予 scoped permission · 一次授权多次使用 |
| **Wallet 基础** | ERC-4337 / 7702 | 可编程 wallet(参见 [[systems/erc-4337-overview|ERC-4337]] 与 [[systems/erc-7702-overview|ERC-7702]]) · 支持 module / delegation |

**典型的 agent 自动支付流程**:
1. 用户向 agent 授权「每日至多 $5 可支付给 vercel.com API」(7715 scoped permission)
2. agent 调用 Vercel API · Vercel 返回 HTTP 402 + USDC 支付指示(x402)
3. agent 从 wallet 自动取出 $0.50 USDC 结算(7715 scope 内 · 无需用户签名)
4. Vercel 验证支付 · 返回 API 响应
5. 用户在 wallet UI 确认当日累计 $X.XX 已支付给 Vercel · permission 可随时撤回

**Stripe Privy 集成的潜力**:Stripe 经由 Privy(已收购)已经接入 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット]]。一旦 Stripe + Privy + 7715 + AP2 被集成 · **任意 SaaS 便能接收来自 agent 的自动支付** · 无需信用卡号、无需 OAuth、无需订阅管理 — 把 SaaS 的计费层从 Stripe Billing(卡基础)迁移到 on-chain permission(地址 + scope 基础)。详见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]。

**主要玩家的分工**:
- **MetaMask Snaps**:于 2025 实现 7715 · EOA + 7702 双模式
- **Coinbase Smart Wallet**:原生支持 · 与 Coinbase Agent SDK 集成
- **Safe{Core}**:以 Module 形式实现 · 机构 multi-sig + 子权限
- **Privy**:集成 7715 + AP2 · Stripe agent 支付场景
- **Pimlico / ZeroDev**:提供 7715 ↔ 4337 bundler 中间件
- **Tempo / Arc**:潜在采用者 — agent 经济是其核心叙事
- **JPM Kinexys**:不参与 — permissioned 网络 · 权限模型采用自有标准

## Origin & evolution

agent payment stack 的概念在 2024-2025 期间逐步成形 — 早期各协议(x402 / AP2 / 7715)由不同团队推动,但从 2025 下半叶起开始有意识的协调。Coinbase Smart Wallet 于 2025 披露的「原生 agent 支付」demo 是决定性的实证事件,展示了 4层 stack 端到端的稼动。

Stripe 收购 Privy(2024)是 Web2 支付巨头明确押注 on-chain permission 模型的首例。预计在 2026-2027 期间将出现首批 production 级的 agent SaaS 集成案例。

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
- ERC-7715 (Request Permissions from Wallets) — https://eips.ethereum.org/EIPS/eip-7715
