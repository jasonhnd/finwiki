---
source: agent-economy/crossmint-agent-sdk
source_hash: e239366586682fe4
lang: zh
status: machine
fidelity: ok
title: "Crossmint agent SDK · 面向 AI agent 的 NFT 与钱包抽象"
translated_at: 2026-05-30T17:04:08.786Z
---

# Crossmint agent SDK · 面向 AI agent 的 NFT 与钱包抽象

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]. Read it against [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] and [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] for peer wallet stacks, [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet consolidation]] for market context, and [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet moat]] for value-capture framing.

## Key facts

- **Crossmint** 提供一个偏企业向的 embedded-wallet + NFT 铸造平台 — 信用卡出资的购买、服务端钱包置备、以及 **multi-chain support**(EVM, Solana, Polygon, Cardano, Aptos, Sui)
- 最初聚焦 NFT-checkout(2021-2022);到 2024
转向 **通用 embedded wallet + agent SDK** - Agent SDK 暴露钱包创建、签名、NFT 铸造 / 转移、支付,以及可供 AI agent 消费的 on-chain identity 原语
- 在 **面向 agent 的 embedded-wallet** 层中,与 [[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、Dynamic、Magic 并列

## Crossmint 为 AI agent 提供什么

| 能力 | Crossmint 原语 |
|---|---|
| 钱包置备 | 服务端钱包 API,无需终端用户设备 |
| 法币 onramp | 信用卡 / Apple Pay / Google Pay → on-chain 资产 |
| NFT 铸造 / 转移 | 带 metadata + royalty 的多链铸造端点 |
| 多链覆盖 | 单一 SDK 横跨 EVM + 非 EVM(Solana / Aptos / Sui / Cardano) |
| Gas 抽象 | Sponsored gas / paymaster 模式([[systems/erc-4337-userop-bundler-flow|ERC-4337 paymaster]]) |
| Custody 选项 | Custodial、MPC 或 non-custodial 多种风味 |
| 合规 | KYC / AML 模块;机构 KYB 路径 |

## Crossmint vs Privy vs Dynamic vs Magic

| 维度 | Crossmint | Privy | Dynamic | Magic |
|---|---|---|---|---|
| 最初聚焦 | NFT checkout / commerce | 面向消费者应用的 embedded wallet | 面向 DeFi / Web3 的 embedded wallet | Magic-link 认证 + 钱包 |
| 所有者 | 独立(私有) | Stripe 子公司([[agent-economy/privy-embedded-wallet-overview|see entry]]) | 独立 | 独立(post-Magic-Labs 时代) |
| 多链广度 | 广(EVM + Solana + Aptos + Sui + Cardano) | 偏 EVM + Solana | EVM + Solana | EVM + Bitcoin + Solana |
| 内置法币 onramp | 有(原生卡 / Apple Pay) | 经由合作方 | 经由合作方 | 经由合作方 |
| NFT 原语 | 原生 | 通用 | 通用 | 通用 |
| 服务端 agent 钱包 | 有 | 有(经由 App Wallets) | 有 | 有 |
| 企业销售动作 | 强(NFT 品牌、游戏) | 强(Stripe 渠道) | 强(DeFi) | 中 |

Crossmint 的 **利基**(niche)是需要以下三者拼接的企业 / 品牌客户:NFT 铸造 + 法币购买 + 多链。对 AI agent 而言,这映射到如下用例:

- 一个为品牌客户跨链 **买卖 NFT 的 agent**
- 一个在最便宜的链上(如用 Solana 做低成本大规模铸造)**以 NFT 形式发放忠诚度 / 奖励** 并接受法币的 agent
- 一个在游戏场景中跨玩家钱包 **铸造 / 转移游戏内资产的 agent**

## Crossmint 在 agent stack 中的位置

| 层 | Crossmint 所处之处 |
|---|---|
| 钱包 / identity | 有 — 服务端钱包 + KYC 模块 |
| Authorization mandate | 可插拔(可与 AP2 或专有方案协同) |
| Settlement rail | 法币(卡) → 稳定币 / 原生资产;多链范围比 Privy 更广 |
| NFT / 资产发行 | 原生头等原语 |
| Discovery / marketplace | 非核心(此项对比 [[agent-economy/nevermined-compute-payment-protocol|Nevermined]]) |
| 合规 | 集成 KYC / AML / KYB |

实用模式:一个 **AI commerce agent** 用 Crossmint 在首次交互时为终端用户置备钱包(无 seed phrase)、接受卡支付、铸造一张 NFT 收据,并把稳定币 settlement 路由给 merchant — 全部经由一个抽象掉底层链选择的 SDK。

## Origin and evolution

Crossmint 在 2021-2022 NFT 周期前后以「card-to-NFT」结账身份起步 — 解决多数 Web2 买家无法搞定 crypto onboarding 的问题。随着 NFT-only 论点降温(2023),Crossmint 到 2024扩展为 **通用 embedded wallet** 加 **面向 AI agent 的服务端钱包**。2025-2026 的定位瞄准:企业品牌、AI commerce,以及任何想用一个 SDK 横跨多链、又不愿在 [[agent-economy/embedded-wallet-landscape-2026-consolidation|consolidation]] 竞赛中选边站的构建者。

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/privy-embedded-wallet-overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation]]
- [[agent-economy/embedded-wallet-network-effects-moat]]
- [[agent-economy/skyfire-closed-loop-agent-issuer]]
- [[agent-economy/nevermined-compute-payment-protocol]]
- [[agent-economy/ap2-overview]]
- [[systems/erc-4337-userop-bundler-flow]]
- [[INDEX|FinWiki index]]

## Sources

- crossmint.com product pages and pricing.
- docs.crossmint.com SDK documentation including agent / server-wallet API.
- blog.crossmint.com on agent SDK and multi-chain support.
- github.com/crossmint reference repos.
