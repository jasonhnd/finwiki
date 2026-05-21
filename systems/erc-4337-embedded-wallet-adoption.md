---
title: ERC-4337 embedded wallet 采用版图 · Privy/Coinbase/Alchemy/Safe
aliases: [erc-4337-adoption, aa-embedded-wallet, privy-coinbase-cdp-alchemy]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, erc-4337, embedded-wallet, privy, coinbase, alchemy]
sources: []
status: candidate
---

# ERC-4337 embedded wallet 采用版图 · Privy/Coinbase/Alchemy/Safe


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-overview|ERC-4337 概览 · Account Abstraction 的应用层实现]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Privy:全栈 4337 + Pimlico 合作 · 6000+ 应用 · 被 Stripe 收购 ^[extracted]
- Coinbase CDP Wallets:Base 原生 + smart wallet · 数百万用户 ^[extracted]
- Alchemy Account Kit:Modular Account 标准 · DeFi + GameFi 主流 ^[extracted]
- ZeroDev / Pimlico:Bundler + Paymaster 基础设施 B2B 层 ^[extracted]
- Safe{Core}:4337 适配 + Modular Safe · 机构 multi-sig 主流 ^[extracted]
- JPM Kinexys 不参与——Canton/DAML 路线 · 不用 EVM AA ^[extracted]

## Mechanism / How it works

embedded wallet 玩家分层:

| 玩家 | 4337 实现 | 客户规模 | 商业模式 |
|---|---|---|---|
| **Privy** | 全栈 4337 + Pimlico 合作 | 6000+ 应用 | SaaS 订阅 + 用量 |
| **Coinbase CDP Wallets** | Base 原生 + smart wallet | 数百万用户 | 嵌入 Coinbase 商业生态 |
| **Alchemy Account Kit** | Modular Account 标准 | DeFi + GameFi 主流 | infra 用量 |
| **ZeroDev / Pimlico** | Bundler + Paymaster 基础设施 | B2B infra | 基础设施 fee |
| **Safe{Core}** | 4337 适配 + Modular Safe | 机构 multi-sig | 开源 + 集成支持 |

**Stripe via Privy 战略路径**:Stripe 2024 收购 Privy 后 · 把 4337 wallet 能力打包进 Stripe Connect——merchant 客户可直接给终端用户发 self-custodial USDC wallet · 无需用户懂区块链。这是 Stripe 进入 stablecoin payment 的关键楔子。

**Coinbase 的矛盾点**:Coinbase 既运营托管(CEX 主业)· 又主推 self-custodial(CDP / Base / Smart Wallet)——4337 是它"左手砍右手"的工具。商业逻辑:即使部分用户流失到 self-custodial · Coinbase 通过 Base 收 gas + 流量 fee 仍可获益(且不流失到竞品 CEX)。

## Origin & evolution

2023-03 4337 主网激活后 6-12 个月内 · Privy / Coinbase CDP / Alchemy 都已上线集成产品。2024-2025 间 embedded wallet 进入"Web2 fintech 接入"阶段——Stripe / Robinhood / PayPal / Revolut 都在不同程度上探索。2024 年 Stripe 收购 Privy 是标志性事件 · 表明 Web2 支付巨头认可 4337 是下一代 wallet UX 基础。

2026 年随 v0.7 升级 · embedded wallet 落地速度进一步加快——客户体验进一步逼近 Web2 水平。

## Counterpoints

**Safe{Core} 与 Privy/Coinbase 的分工**:Safe 主打机构 multi-sig(已是 web3 机构标配)· Privy/Coinbase 主打 retail embedded——两者表面不竞争 · 但 Safe Modular 也在向 retail 渗透。长期可能合流。

**ERC-7702 的反向冲击**:7702 让"现有 EOA 一键升级 SCW"成为可能 · 降低 Privy/Coinbase CDP 的 UX 差异化壁垒。短期(2026-2027)对 4337 阵营商业模式构成挑战。

## Open questions

- Stripe + Privy 整合后的 merchant 接入速度?
- Coinbase CDP vs Privy 在 Base 上的市场份额?
- 7702 上线对 4337 embedded wallet 的实际侵蚀程度?
- 非 EVM(Solana / Move)的类 embedded wallet 标准如何与 4337 互通?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-7702-overview|ERC-7702(7702 vs 4337)]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Stripe-Privy acquisition announcement(2024)
