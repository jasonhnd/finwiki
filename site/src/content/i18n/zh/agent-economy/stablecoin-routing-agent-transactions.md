---
source: agent-economy/stablecoin-routing-agent-transactions
source_hash: 31eb206b13602bcb
lang: zh
status: machine
fidelity: ok
title: "AI agent 交易的 stablecoin 路由 · 究竟是哪种 stablecoin 在结算 agent 支付"
translated_at: 2026-05-30T17:31:02.646Z
---

# AI agent 交易的 stablecoin 路由 · 究竟是哪种 stablecoin 在结算 agent 支付

## TL;DR

当 AI agent 为一次 API 调用、一次工具调用或一项下游 agent 服务付款时，在 2026 年中实际在线上结算的资产：占主导份额的是 **Base 上的 USDC**，针对特定链用例的是**其他 L2 上的 USDC**（Arbitrum、Optimism、Polygon PoS、Solana），面向新兴市场和非正式 agent 轨道的是 **Tron / Ethereum L1 上的 USDT**，而面向 issuer 对齐的垂直栈则是 **USDB / RLUSD / PYUSD / FDUSD**。在大多数栈中，路由**并非** agent 的选择 —— 而是 wallet provider 与收款商户的选择。**Privy + Coinbase CDP 默认 USDC**，而 **Stripe / Bridge 经由 USDB 路由**，因此默认层级的钱包分裂（见 [[agent-economy/embedded-wallet-landscape-2026-consolidation|2026 embedded-wallet consolidation]]）实际上决定了 AI agent 用哪种 stablecoin 付款。经由 ERC-4337 paymaster 的无 gas 转账以及 Circle CCTP v2 （快速跨链最终性）决定了**多链 agent 支付的 UX**，而 [[agent-economy/x402-http-payment-overview|x402 protocol]] 是承载这一选择的主导 HTTP 层机制。更广泛的 stablecoin 市场见 [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]，issuer 策略见 [[fintech/stablecoin-chain-token-strategy-trilemma|chain × token × strategy trilemma]]。

## Wiki route

本条目归属于 [[agent-economy/INDEX|agent-economy index]]。请结合 [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]] 了解承载结算的协议，结合 [[agent-economy/ap2-overview|AP2 overview]] 了解 intent / mandate 层，结合 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]] 了解 Base 上 USDC 的默认地位，结合 [[fintech/INDEX|fintech index]] 了解更广泛的 stablecoin 储备与交换背景。

## 哪种 stablecoin · 2026 年中结算构成

依据公开来源粗略拆解 2026年中 agent 支付量按 stablecoin / 链组合实际落地的分布：

| Stablecoin × 链 | 大致路由份额 | 驱动因素 |
|---|---|---|
| Base 上的 USDC | 默认层级 embedded wallet 的主导份额 | Coinbase CDP 默认 + Base Paymaster + AgentKit |
| Ethereum L1 上的 USDC | 企业 / 机构 agent 流 | 合规姿态 + USDC 主发行 |
| Arbitrum 上的 USDC | DeFi 集成的 agent 流 | Arbitrum 深厚的 DeFi 流动性 |
| Optimism 上的 USDC | OP-Stack 对齐的 agent 流 | OP Superchain 协调 |
| Solana 上的 USDC | 高吞吐 agent 流 | Solana 的低延迟结算；Privy + CDP 多链支持 |
| Tron 上的 USDT | 新兴市场和非正式 agent 轨道 | USDT 的区域主导地位，Tron 上费用低 |
| Ethereum L1 上的 USDT | 传统和 CEX 路由的流 | USDT 仍是流通量最大的 stablecoin |
| Tempo 上的 USDB | Stripe 对齐的 agent 流 | Stripe 垂直栈默认 |
| XRP Ledger + Ethereum 上的 RLUSD | Ripple 对齐的流 | Ripple 通道与企业财资需求 |
| Ethereum + Solana 上的 PYUSD | PayPal 对齐的流 | PayPal 商户付款 |
| Ethereum + BNB 上的 FDUSD | 亚洲 CEX 对齐的流 | Binance 路由 |

两点观察：

1. **Base 上的 USDC 是事实上的默认**，因为 AWS AgentCore 默认钱包双头垄断（[[agent-economy/privy-aws-agentcore-default-wallet|Privy + CDP]]）将 agent 配置的长尾导向 Coinbase 对齐的链经济。
2. **USDT 对新兴市场 / 非正式轨道在结构上具有相关性**，尽管没有任何主要超大规模厂商的默认 agent 栈将其选为推荐默认。

## 结算最终性要求

一笔 agent 交易对结算最终性延迟的容忍度取决于用例：

| 用例 | 容忍度 | 典型链选择 |
|---|---|---|
| 面向公共端点的按 API 调用 x402 微支付 | 亚秒级感知最终性（概率性接受即可） | 出块快的 L2 ；Base、Solana |
| 多秒级工具调用的 agent 间结算 | 数秒最终性 | Base、Arbitrum、Optimism |
| agent 向持有托管的下游 agent 付款（类托管） | 需要硬最终性 | Ethereum L1, 或等待 L2 → L1 欺诈窗口确认 |
| 跨境 B2B agent 结算 | 最终性 + 合规 | Ethereum L1上的 USDC；CCTP v2 跨链 |
| 财资归集 | 硬最终性 + 对账 | Ethereum L1；链下对账至传统会计 |

这种品类取舍映射了支付网络平衡授权（快）与清算（慢）的方式。Agent 通常按 [[agent-economy/x402-http-payment-overview|x402 HTTP 402]] 语义运作，即把早期链上上链作为授权，将完整最终性视作可分离的对账步骤。

## 跨链抽象 · 多链 agent UX 如何运作

大多数 agent SDK 不向 agent 的推理层暴露底层链。链抽象栈：

1. **钱包余额 API。** Privy 的 Multichain Balances API 和 CDP 的钱包 API 返回跨 Ethereum、Base、Arbitrum、Optimism 和 Polygon 的统一 USDC 余额。agent 看到的是"你有 N 个 USDC 可用"，而非逐链余额。
2. **路由层。** 钱包将出账支付路由到商户接受的、费用最低、最终性最快的链。agent 不挑选链。
3. **Circle CCTP v2 （Cross-Chain Transfer Protocol）。** Circle 的 USDC 跨支持链的 burn-and-mint 机制。CCTP v2 （于 2025发布）支持跨 L2 的更快软最终性，并带有用于可编程铸后操作的 hooks 模型。CCTP 是默认层级钱包内大量多链 USDC 路由的基础。
4. **LayerZero / Wormhole / Hyperlane / Axelar。** 用于非 USDC stablecoin、更长尾的链以及跨栈代币 swap 的通用跨链消息层。这些通常被封装在钱包抽象之后。
5. **跨链 intent 层。** Across、Catalyst、Bungee 及类似的基于 intent 的路由协议允许 agent 的钱包发布一个 intent（"将 100 USDC 移到链 X"），并由一个 solver 网络竞争性地履行它。

默认层级 embedded wallet 的模式是**对跨链路由默认采用 USDC + CCTP v2**，仅在目标链缺乏 USDC + CCTP 支持时才回退到通用消息层。

## 无 gas 的 agent 交易 · paymaster 机制

在任何合理的生产部署中，agent 都不持有用于 gas 的 ETH。Gas 经由 ERC-4337 paymaster 代付：

- **Coinbase Base Paymaster。** 为 Base 上 CDP 发行的 Smart Wallet 内的交易代付 gas，以 USDC 支付或彻底赞助。是 [[agent-economy/coinbase-cdp-developer-platform|CDP / AgentKit]] 栈的结构性默认。
- **Pimlico、Stackup、Biconomy、Alchemy AA paymaster。** 任何 ERC-4337 钱包都可集成的第三方 paymaster。被 Privy 和其他 SDK 使用。
- **Stripe / Privy 自定义 paymaster。** 感知 Stripe 轨道的 paymaster，从商户的 Stripe Treasury 余额中计量扣取 USDC。
- **EIP-7702 混合模式。** EOA 可为单笔交易临时升级为智能账户（见 [[agent-economy/erc-7715-overview|ERC-7715]] 权限模型），从而在不永久迁移的情况下获得 paymaster 赞助。

对于每天进行数千笔微支付的 agent，paymaster 的 gas 成本模型是首要经济输入。Base 的 USDC 原生 gas + 每笔不到一美分的费用，是 Base 主导默认层级 agent 支付路由的结构性原因。

## Circle CCTP v2 · 跨链骨干

2025 发布的 CCTP v2 （Circle Cross-Chain Transfer Protocol 版本 2）是本年度对 agent 栈影响最深远的 stablecoin 基础设施变更。源自 Circle 开发者文档的关键属性：

- **Burn-and-mint，而非 bridge-and-wrap。** USDC 在源链上被销毁，并由 Circle 的认证在目标链上铸造。不存在桥接版 USDC —— 每条 CCTP 支持链上的每一枚 USDC 都是原生 USDC。
- **软最终性快速转账。** CCTP v2 引入了一种快速转账模式，使用最终性阈值认证而非等待硬 L1 最终性，对常见情形支持亚分钟级跨链结算。
- **Hooks。** 铸后 hook 允许目标链在 USDC 铸造后运行一个可编程操作。对 agent 支付而言，这实现了原子化的"收到 USDC + 调用下游工具"语义。
- **支持的链。** Ethereum L1, Base、Arbitrum、Optimism、Avalanche、Polygon PoS、Solana，以及在 2025-2026期间新增的链。

对于一个需要在其钱包当前持有 USDC 之外的另一条链上为工具付款的 AI agent，CCTP v2 是结构性默认。wallet provider 可在数秒内透明地解决跨链差异。

## x402 + USDC · 主导的 agent 支付 HTTP 栈

[[agent-economy/x402-http-payment-overview|x402 protocol]]（Coinbase，2025-05）复活了 HTTP 402 Payment Required 状态码，并在参考实现中默认将其绑定到 Base 上的 USDC。agent 流程：

1. agent 调用一个 API 端点。
2. 服务器以 HTTP 402 响应，附带支付指令（USDC 金额 + 收款链 + 地址）。
3. agent 钱包（Privy / CDP）签名并提交一笔 USDC 转账。
4. 服务器验证该转账（Circle CCTP 认证或链原生确认），返回所请求的资源。

该协议在设计上与资产无关，但参考实现 + AWS AgentCore 默认 + Cloudflare Agents 集成默认全都使用 USDC。x402 Bazaar MCP 目录（到 2026年中有 10,000+ 个端点）以 USDC 计价为主。

## issuer 对齐的垂直栈

agent 支付量中非 USDC、非 USDT 的 stablecoin 切片由 **issuer 对齐的垂直栈**驱动：

- **USDB（Stripe / Bridge）。** 在 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer stack]]（Connect → Privy → Bridge USDB → Tempo → AP2 / x402）内部，USDB 是 Stripe 轨道 agent 支付的默认结算资产。
- **RLUSD（Ripple）。** 用于 Ripple 通道以及 Ripple 集成的企业财资 agent 支付。
- **PYUSD（PayPal）。** 用于 Ethereum + Solana 上 PayPal 对齐的商户 agent 付款。
- **FDUSD（First Digital）。** 用于 Binance / FDIC 边界的亚洲 CEX agent 路由；在 Binance 的 BNB / FDUSD 对作为 on-ramp 的场景中相关。
- **JPYC / DCJPY / Progmat JPY（日本）。** 用于日本 [[exchanges/jp-cex-deposit-token-stablecoin-integration|deposit-token + EPI integration]] 流中以 JPY 计价的商业 agent。

其模式是**每个垂直整合的支付栈在该栈内运行自己的 stablecoin**作为默认，而 CCTP 式跨链互操作仅限 USDC 内部。跨 stablecoin 流动性位于 DEX（Curve）和 CEX 做市商处 —— 见 [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]。

## Agent 权限 · 谁挑选 stablecoin

典型 agent 支付中"由谁决定"的层级：

1. **超大规模厂商默认。** AgentCore Payments 默认 = Privy 或 CDP 钱包，这意味着钱包默认链上的 USDC（CDP 为 Base，Privy 为多链）。
2. **wallet provider 默认。** 在该钱包内，multichain balances API 告知 agent 它持有 USDC；钱包在路由时挑选链。
3. **商户接受。** 收款方公布它接受哪些 stablecoin / 链组合。钱包进行匹配。
4. **Agent intent。** 仅在少数情形下 agent 本身才对该选择进行推理 —— 例如在多种 stablecoin 间再平衡的财资 agent。
5. **经由 ERC-7715的用户 mandate。** 用户的 [[agent-economy/erc-7715-overview|ERC-7715 wallet permission]] 可约束 stablecoin / 链选择（面额与场所的允许列表）。

对大多数 agent runtime 而言，agent 既不知道也不关心底层 stablecoin / 链。该选择对钱包栈而言是结构性的。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded-wallet landscape 2026 consolidation]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol public documentation (x402.org)
- Coinbase Developer Platform public documentation (docs.cdp.coinbase.com)
- Privy public documentation (docs.privy.io)
- Circle Cross-Chain Transfer Protocol public documentation (circle.com, developers.circle.com/cctp)
- Ethereum EIPs: EIP-4337 (account abstraction), EIP-7702 (EOA upgrade), EIP-7715 (wallet permissions)
- Base, Arbitrum, Optimism public chain documentation
- Google Agentic Commerce AP2 public repository (github.com/google-agentic-commerce/AP2)
- US Federal Reserve, FSA Japan, FCA UK, and MAS Singapore public materials on stablecoin classification and settlement
