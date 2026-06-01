---
source: agent-economy/crossmint-agent-sdk
source_hash: e239366586682fe4
lang: zh
status: machine
fidelity: ok
title: "Crossmint Agent SDK：面向 AI 代理的 NFT 与钱包抽象"
translated_at: 2026-05-30T17:04:08.786Z
---

# Crossmint Agent SDK：面向 AI 代理的 NFT 与钱包抽象

## Wiki 路径

本条目位于 [[agent-economy/ai-agent-payment-protocols-overview|AI 代理支付协议七协议综述]]下。请与 [[agent-economy/privy-embedded-wallet-overview|Privy 嵌入式钱包]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] 对照阅读，以理解同业钱包栈；市场背景见 [[agent-economy/embedded-wallet-landscape-2026-consolidation|嵌入式钱包整合]]，价值捕获框架见 [[agent-economy/embedded-wallet-network-effects-moat|嵌入式钱包护城河]]。

## 核心事实

- **Crossmint** 提供偏企业级的嵌入式钱包与 NFT 铸造平台，覆盖信用卡购买、服务端钱包置备以及多链支持（EVM、Solana、Polygon、Cardano、Aptos、Sui）。
- 其最初聚焦 2021-2022 年 NFT 结账场景；到 2024 年转向通用嵌入式钱包和 Agent SDK。
- Agent SDK 暴露钱包创建、签名、NFT 铸造 / 转移、支付以及 AI 代理可调用的链上身份原语。
- 在面向代理的嵌入式钱包层中，Crossmint 与 [[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、Dynamic、Magic 并列。

## Crossmint 为 AI 代理提供什么

| 能力 | Crossmint 原语 |
|---|---|
| 钱包置备 | 服务端钱包 API，无需依赖终端用户设备 |
| 法币入金 | 信用卡 / Apple Pay / Google Pay 转换为链上资产 |
| NFT 铸造 / 转移 | 带元数据和版税参数的多链铸造端点 |
| 多链覆盖 | 单一 SDK 横跨 EVM 与非 EVM 网络（Solana / Aptos / Sui / Cardano） |
| Gas 抽象 | 赞助 gas / paymaster 模式（[[systems/erc-4337-userop-bundler-flow|ERC-4337 paymaster]]） |
| 托管选项 | 托管、MPC 或非托管等多种模式 |
| 合规 | KYC / AML 模块，以及面向机构的 KYB 路径 |

## Crossmint vs Privy vs Dynamic vs Magic

| 维度 | Crossmint | Privy | Dynamic | Magic |
|---|---|---|---|---|
| 最初聚焦 | NFT 结账 / 商业化场景 | 面向消费者应用的嵌入式钱包 | 面向 DeFi / Web3 的嵌入式钱包 | Magic-link 认证 + 钱包 |
| 所有者 | 独立私营公司 | Stripe 子公司（见 [[agent-economy/privy-embedded-wallet-overview|条目]]） | 独立 | 独立（后 Magic Labs 时代） |
| 多链广度 | 广（EVM + Solana + Aptos + Sui + Cardano） | 偏 EVM + Solana | EVM + Solana | EVM + Bitcoin + Solana |
| 内置法币入金 | 有（原生卡 / Apple Pay） | 经由合作方 | 经由合作方 | 经由合作方 |
| NFT 原语 | 原生 | 通用 | 通用 | 通用 |
| 服务端代理钱包 | 有 | 有（经由 App Wallets） | 有 | 有 |
| 企业销售动作 | 强（NFT 品牌、游戏） | 强（Stripe 渠道） | 强（DeFi） | 中等 |

Crossmint 的利基是需要同时拼接 NFT 铸造、法币购买和多链覆盖的企业 / 品牌客户。对 AI 代理而言，这映射到如下用例：

- 为品牌客户跨链买卖 NFT 的代理。
- 在低成本链上（例如使用 Solana 进行大规模低成本铸造）以 NFT 形式发放忠诚度 / 奖励并接受法币支付的代理。
- 在游戏场景中跨玩家钱包铸造 / 转移游戏内资产的代理。

## Crossmint 在代理技术栈中的位置

| 层 | Crossmint 所处之处 |
|---|---|
| 钱包 / 身份 | 服务端钱包 + KYC 模块 |
| 授权委托 | 可插拔，可与 AP2 或专有方案协同 |
| 结算轨道 | 法币（卡）转稳定币 / 原生资产；多链范围比 Privy 更广 |
| NFT / 资产发行 | 原生头等原语 |
| 发现 / 市场 | 非核心能力；此项可与 [[agent-economy/nevermined-compute-payment-protocol|Nevermined]] 对比 |
| 合规 | 集成 KYC / AML / KYB |

实用模式是：一个 AI 商务代理在首次交互时用 Crossmint 为终端用户置备钱包（无需 seed phrase）、接受卡支付、铸造一张 NFT 收据，并将稳定币结算路由给商户。所有步骤都通过一个抽象掉底层链选择的 SDK 完成。

## 起源与演进

Crossmint 在 2021-2022 年 NFT 周期前后以“card-to-NFT”结账方案起步，解决许多 Web2 买家无法完成加密资产 onboarding 的问题。随着 2023 年 NFT-only 叙事降温，Crossmint 到 2024 年扩展为通用嵌入式钱包和面向 AI 代理的服务端钱包。2025-2026 年的定位瞄准企业品牌、AI 商务，以及任何希望通过一个 SDK 横跨多链、又不愿在 [[agent-economy/embedded-wallet-landscape-2026-consolidation|整合]] 竞赛中过早选边站的构建者。

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
- [[INDEX|FinWiki 索引]]

## Sources

- crossmint.com 产品页面和定价。
- docs.crossmint.com SDK 文档，包括代理 / 服务端钱包 API。
- blog.crossmint.com 关于 Agent SDK 和多链支持的文章。
- github.com/crossmint 参考代码库。
