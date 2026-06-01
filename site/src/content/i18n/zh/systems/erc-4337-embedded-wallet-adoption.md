---
source: systems/erc-4337-embedded-wallet-adoption
source_hash: c2bfb19cf354fd53
lang: zh
status: machine
fidelity: ok
title: "ERC-4337  embedded wallet 采用地图 · Privy/Coinbase/Alchemy/Safe"
translated_at: 2026-06-01T04:15:40.137Z
---

# ERC-4337  embedded wallet 采用地图 · Privy/Coinbase/Alchemy/Safe

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] 阅读同类 / 对比背景，并结合 [[fintech/INDEX|fintech index]] 理解更广的系统 / 监管边界。

## Key facts

- Privy：全栈 4337 + Pimlico 合作 · 6000+ 个应用 · 被 Stripe 收购 ^[extracted]
- Coinbase CDP Wallets：Base 原生 + smart wallet · 数百万用户 ^[extracted]
- Alchemy Account Kit：Modular Account 标准 · DeFi + GameFi 主流 ^[extracted]
- ZeroDev / Pimlico：Bundler + Paymaster 基础设施的 B2B 层 ^[extracted]
- Safe{Core}：支持 4337  + Modular Safe · 面向机构的 multi-sig 主流 ^[extracted]
- JPM Kinexys 不参与 —— Canton/DAML 路线 · 不采用 EVM AA ^[extracted]

## Mechanism / How it works

embedded wallet 参与者的分层结构：

| 参与者 | 4337 实现 | 客户规模 | 商业模式 |
|---|---|---|---|
| **Privy** | 全栈 4337 + Pimlico 合作 | 6000+ 个应用 | SaaS 订阅 + 按量计费 |
| **Coinbase CDP Wallets** | Base 原生 + smart wallet | 数百万用户 | 嵌入 Coinbase 商业生态系统 |
| **Alchemy Account Kit** | Modular Account 标准 | DeFi + GameFi 主流 | 基础设施按量计费 |
| **ZeroDev / Pimlico** | Bundler + Paymaster 基础设施 | B2B 基础设施 | 基础设施手续费 |
| **Safe{Core}** | 支持 4337  + Modular Safe | 面向机构的 multi-sig | 开源 + 集成支持 |

**Stripe via Privy 战略的流程**：Stripe 于 2024 年收购 [[agent-economy/privy-embedded-wallet-overview|Privy]]，并将 4337 wallet 功能整合进 Stripe Connect —— 商户可以直接向自己的终端用户发行 self-custodial USDC wallet，即便用户并不了解区块链。这成为 Stripe 进入 stablecoin payment 领域的重要楔子（与 [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] 相对）。

**Coinbase 的矛盾点**：Coinbase 一边运营托管业务（CEX 主业），一边也推进 self-custodial（CDP / Base / Smart Wallet）—— 4337 正是“用左手砍右手”的工具。商业逻辑是，即使部分用户流向 self-custody，Coinbase 也可以通过 Base 的 gas + 流量手续费获得收入（且用户不会流向竞争 CEX），从而保住利润。

## Origin & evolution

2023-03 的 4337 mainnet 运行后 6-12 个月内，Privy / Coinbase CDP / Alchemy 都发布了集成产品。2024-2025 年期间，embedded wallet 进入“Web2 fintech 连接”阶段 —— Stripe / Robinhood / PayPal / Revolut 都在不同程度上推进探索。2024 年 Stripe 收购 Privy 是标志性事件 · 表明 Web2 支付巨头已将 4337 认定为下一代 wallet UX 的基础。

随着 2026 年 的 v0.7 升级，embedded wallet 的实现速度进一步加快 —— 客户体验更加接近 Web2 水平。进一步与 [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] 结合后，wallet 需要同时服务人类和 AI agent，4337 正在成为通用基础设施层。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-7702-overview|ERC-7702(7702 vs 4337)]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Stripe-Privy acquisition announcement（2024）
- EIP-4337: Account Abstraction Using Alt Mempool — https://eips.ethereum.org/EIPS/eip-4337
- eth-infinitism account-abstraction（EntryPoint / Bundler reference impl）— https://github.com/eth-infinitism/account-abstraction
- Privy docs（全栈 4337 embedded wallet）— https://docs.privy.io/
- Privy and Stripe: Bringing crypto to everyone（收购官方公告）— https://privy.io/blog/announcing-our-acquisition-by-stripe
- Coinbase Developer Platform（CDP Wallets / Smart Wallet）— https://docs.cdp.coinbase.com/
- Alchemy aa-sdk（Account Kit / Modular Account）— https://github.com/alchemyplatform/aa-sdk
- Safe{Core} SDK（4337 + Modular Safe）— https://github.com/safe-global/safe-core-sdk
- Pimlico permissionless.js（Bundler / Paymaster 基础设施）— https://github.com/pimlicolabs/permissionless.js
- Canton Network（JPM Kinexys 的非 EVM 路线）— https://www.canton.network/
