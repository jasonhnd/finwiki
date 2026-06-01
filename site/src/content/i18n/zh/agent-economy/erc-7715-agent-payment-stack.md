---
source: agent-economy/erc-7715-agent-payment-stack
source_hash: 9397cf2ee13c7394
lang: zh
status: machine
fidelity: ok
title: "ERC-7715 与代理支付栈 · x402 + AP2 + 4337/7702 协调"
translated_at: 2026-05-30T17:04:08.793Z
---

# ERC-7715 与代理支付栈 · x402 + AP2 + 4337/7702 协调

## Wiki 路径

本条目位于 [[agent-economy/ai-agent-payment-protocols-overview|AI 代理支付协议全景 · 七类协议概览]] 下。可结合 [[payments/INDEX|支付索引]] 阅读同业与对比语境，并结合 [[systems/INDEX|系统索引]] 理解更广泛的系统与监管边界。

## 关键事实

- x402 承担 HTTP 层的支付握手(由 Cloudflare/Coinbase/AWS 推动) ^[extracted]
- AP2 / MPP / ACP 承担代理之间的交涉元数据 ^[extracted]
- ERC-7715 承担从钱包到代理的授权 ^[extracted]
- ERC-4337 / 7702 提供可编程钱包的基础 ^[extracted]
- 主要协议 / 钱包供应商：MetaMask Snaps / Coinbase Smart Wallet / Safe / Privy / Pimlico / ZeroDev ^[extracted]

## 机制与运作

**四层支付栈架构**:

| 层 | 协议 | 角色 |
|---|---|---|
| **HTTP** | x402 | API 返回 402 与支付指示，客户端完成支付后重试 |
| **代理交涉** | AP2 / MPP / ACP / A2A | mandate / intent 元数据标准 |
| **钱包授权** | ERC-7715 | 向代理授予 scoped permission，实现一次授权、多次使用 |
| **钱包基础** | ERC-4337 / 7702 | 可编程钱包(参见 [[systems/erc-4337-overview|ERC-4337]] 与 [[systems/erc-7702-overview|ERC-7702]])，支持 module / delegation |

**典型的代理自动支付流程**:
1. 用户向代理授权「每日最多可向 vercel.com API 支付 $5」(7715 scoped permission)。
2. 代理调用 Vercel API，Vercel 返回 HTTP 402 与 USDC 支付指示(x402)。
3. 代理在 7715 scope 内从钱包自动支出 $0.50 USDC 进行结算，无需用户逐笔签名。
4. Vercel 验证支付并返回 API 响应。
5. 用户在钱包 UI 中确认当日累计向 Vercel 支付的 $X.XX，并可随时撤回 permission。

**Stripe 与 Privy 集成的潜力**:Stripe 通过已收购的 Privy 接入 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 嵌入式钱包]]。若 Stripe + Privy + 7715 + AP2 完成集成，**任意 SaaS 都可接收来自代理的自动支付**，无需信用卡号、OAuth 或订阅管理；SaaS 计费层将从基于卡的 Stripe Billing 迁移到基于地址与 scope 的 on-chain permission。详见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan horse]]。

**主要参与者的基础设施分工**:
- **MetaMask Snaps**:于 2025 年实现 7715，支持 EOA + 7702 双模式。
- **Coinbase Smart Wallet**:原生支持，并与 Coinbase Agent SDK 集成。
- **Safe{Core}**:以 Module 形式实现，面向机构 multi-sig 与子权限管理。
- **Privy**:集成 7715 + AP2，服务 Stripe 代理支付场景。
- **Pimlico / ZeroDev**:提供 7715 ↔ 4337 bundler 中间件
- **Tempo / Arc**:潜在采用者，代理经济是其核心叙事。
- **JPM Kinexys**:不参与；其 permissioned 网络采用自有权限模型。

## 起源与演进

代理支付栈的概念在 2024-2025 年期间逐步成形。早期 x402、AP2 与 7715 由不同团队分别推动，但从 2025 年下半年起开始出现有意识的协议协调。Coinbase Smart Wallet 在 2025 年披露的「原生代理支付」demo 是关键实证事件，展示了四层支付栈端到端运行的可行性。

Stripe 于 2024 年收购 Privy，是 Web2 支付巨头明确押注 on-chain permission 模型的首批案例之一。预计 2026-2027 年将出现首批 production 级代理 SaaS 集成案例。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-overview|ERC-7715 概览]]
- [[agent-economy/ap2-overview|AP2 概览]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Smart Wallet 代理支付 demo (2025)
- ERC-7715 (Request Permissions from Wallets) — https://eips.ethereum.org/EIPS/eip-7715
