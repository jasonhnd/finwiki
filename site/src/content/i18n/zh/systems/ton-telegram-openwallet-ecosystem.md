---
source: systems/ton-telegram-openwallet-ecosystem
source_hash: cc4ac621871946fc
lang: zh
status: machine
fidelity: ok
title: "TON · Telegram Open Network ecosystem"
translated_at: 2026-06-01T04:15:40.139Z
---

# TON · Telegram Open Network ecosystem

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/sui-aptos-move-l1-ecosystem|Sui and Aptos]] 和 [[systems/solana-firedancer-validator-economics|Solana]] 阅读同类 L1 背景，结合 [[systems/bft-validator-economy-overview|BFT validator economics]] 理解共识框架，并结合 [[agent-economy/INDEX|agent-economy index]] 理解 bot / agent UX 角度。

## Key facts

- **TON (The Open Network)** 是 L1 ，最初由 Telegram 团队（2018-2020）设计；SEC 和解阻止 Telegram 直接上线后，**TON Foundation + community** 作为开放网络继续开发
- **Telegram 集成**是结构性优势：900M+ Telegram 用户、原生 bot 框架、应用内 wallet 集成（TON Wallet / Wallet bot）
- **TON 上的 USDT** 是增长最快的 stablecoin 界面之一（到 2025-2026达到数十亿美元）
- **大众支付 UX** 优势：像发送消息一样向 Telegram 联系人发送 USDT —— 无需复制 / 粘贴地址
- **Agent / bot economy** 原生：Telegram bot 生态系统可以顺畅映射到经由 TON rails 的 AI-agent payment

## Telegram + TON architectural fit

| 层 | 机制 |
|---|---|
| 身份 | Telegram user ID（手机号验证，接近 KYC） |
| Wallet | TON Wallet bot（应用内）、Tonkeeper、MyTonWallet —— 均连接 Telegram 身份 |
| 发现 | Telegram bot directory；channel / group 路由 |
| 结算 | TON-native asset 或 USDT-TON |
| UX | 向 @username 发送 TON / USDT —— 无需地址 |
| Bot interaction | Telegram bot framework（已达到生产级） |

对于需要以下能力的 AI agent：
- 通过聊天从人类处收款
- 通过聊天向人类付款
- 无 Web3 摩擦地 onboarding
- 触达十亿级用户基础

……Telegram + TON 在结构上是可用的最简单 stack 之一，在不同维度上可与 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]（开发者友好的 stablecoin SDK）和 [[agent-economy/privy-embedded-wallet-overview|Privy]]（embedded-wallet UX）相比。

## TON architecture in brief

- **Workchain / shardchain model**：TON 的设计将 masterchain（共识、治理）与 workchains（应用执行）和 shardchains（用于扩展的 workchain 分区）分离
- **PoS consensus**：validator set 由 TON staking 选出
- **TVM (TON Virtual Machine) 中的 smart contracts**：不兼容 EVM；使用 Tact / FunC 语言
- **合约之间的异步消息**：消息可能需要多个区块才能送达，需要谨慎的应用设计

异步消息模型**不同于 EVM 的原子调用模型** —— 更接近 actor-model 架构。这塑造了 agent / bot 应用的流程结构。

## USDT-TON growth thesis

TON 上的 USDT 在 2023-2026 快速增长，原因是：

1. **Telegram 用户之间的无摩擦转账** —— 无需 Web3 onboarding
2. **新兴市场汇款**用例 —— TON 的交易成本为几美分
3. **Telegram bot commerce** —— bots 接受 USDT-TON 作为原生支付
4. **Tether 的战略分发** —— Tether 直接在 TON 上发行 USDT，将其作为与 Tron / Ethereum 并列的主要界面

到 2025-2026, ，USDT-TON 已是数十亿美元级界面，在结构上与 **USDT-Tron**（历史上的大众支付 USDT 链）竞争 —— 关于跨链 USDT 拓扑，请见 [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]。

## Agent-payment volume on TON

Telegram bot economy 使 TON 成为天然的 agent-payment 界面：

- **Bot-as-merchant**：任何 Telegram bot 都可以接受 TON / USDT-TON；这相当于低摩擦版的商户卡支付受理
- **嵌入 Telegram 的 AI agent**：由 Claude / GPT 驱动的 bot 可以在聊天中收款，无需单独 wallet onboarding
- **Mini-app frame**：Telegram Mini Apps + TON Connect 支持聊天内更丰富的交互
- **Tip / gift flows**：$1 以下的微支付在 TON 上具有经济可行性

这使 TON 区别于 x402 的“API-call payments”世界（[[agent-economy/x402-http-payment-overview|see x402]]）—— TON 是**人到 bot 到人**的支付界面，而 x402  是 **agent-to-API** 支付界面。

## TON vs Solana vs Tron for stablecoin mass distribution

| Chain | Stablecoin strength | UX entry point | Per-tx cost |
|---|---|---|---|
| **TON** | USDT-TON | Telegram chat（900M users） | 几美分 |
| **Solana** | USDC、USDT 增长中 | Phantom / Solflare；通过 [[agent-economy/solana-saga-seeker-mobile-stack-overview|Saga/Seeker]] 实现移动端 | 几分之一美分 |
| **Tron** | USDT 主导地位（$60B+） | OKX / Binance 提现为主 | 几美分（主要通过 fee-delegation） |
| **Ethereum L2** | USDC、USDT | Privy、MetaMask 等钱包 | [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base/Arbitrum]] 上为几美分 |

TON 的优势是**嵌入式用户基础**；Tron 的优势是**既有地位**；Solana 的优势是**吞吐量和移动端**；Ethereum L2 的优势是**开发者生态系统 + 机构接受度**。

## Related

- [[systems/INDEX]]
- [[systems/sui-aptos-move-l1-ecosystem]]
- [[systems/solana-firedancer-validator-economics]]
- [[systems/bft-validator-economy-overview]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/cctp-v2-overview]]
- [[agent-economy/INDEX]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview]]
- [[fintech/usd-stablecoin-interchange]]
- [[INDEX|FinWiki index]]

## Sources

- ton.org 和 docs.ton.org 的协议文档。
- github.com/ton-blockchain 的参考实现。
- Telegram 关于 Wallet 集成和 Mini Apps 的博客文章。
- Tonkeeper / Wallet bot 文档中的 UX patterns。
- Tether 关于 USDT-TON 发行量的披露页面。
