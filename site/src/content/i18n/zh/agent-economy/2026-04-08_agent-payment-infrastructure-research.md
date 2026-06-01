---
source: agent-economy/2026-04-08_agent-payment-infrastructure-research
source_hash: d0e891a76a2dd092
lang: zh
status: machine
fidelity: ok
title: "Agent 支付基础设施调查报告"
translated_at: 2026-05-30T16:40:11.483Z
---

# Agent 支付基础设施调查报告


## Wiki 路径

本条目位于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议全景图：7 个协议俯瞰]] 之下。可与 [[agent-economy/skill-market-monetization|技能市场付费化]] 对照阅读，并结合 [[payments/INDEX|payments index]] 理解更广的支付系统与监管边界。

> [!info] TL;DR
> 公开资料协议快照 | 2026-04-08

## 一、协议标准格局

当前 Agent 支付领域已经形成 **4 大协议并立** 的格局:

1. **ACP (Agentic Commerce Protocol)** — Stripe 与 OpenAI 联合开发,Apache 2.0 开源。核心创新是 Shared Payment Token (SPT),使 ChatGPT 等应用能在不暴露用户支付凭证的情况下发起交易。已在 ChatGPT 中上线 Instant Checkout,支持 Etsy 卖家和数百万 Shopify 商家。目前处于 Beta 阶段。([来源](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce))

2. **x402 协议** — Coinbase 主导,2026 年 4 月在 Linux Foundation 内设立 x402 Foundation。将 HTTP 402 状态码复活为原生支付层,使 AI Agent 能在 HTTP 请求内直接以 USDC 稳定币结算。已在 Base 和 Solana 上线,Cloudflare Agent SDK 已集成。但实际日交易量仅约 $28,000 ,大部分为测试交易。([来源](https://www.x402.org/))

3. **AP2 (Agent Payments Protocol)** — Google 发起,60+ 合作方包括 Adyen、American Express、Mastercard、PayPal、Coinbase 等。设计为支付手段无关(支持信用卡、银行转账、加密货币)。已发布 A2A x402 Extension 以支持链上加密支付。([来源](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol))

4. **MPP (Machine Payments Protocol)** — Stripe 与 Tempo 联合开发,2026 年 3 月上线,已在 50+ 项服务中实现(包括 OpenAI、Anthropic、Google Gemini)。采用预付 Tab 模式:Agent 将资金预先存入托管合约,会话开始后通过 Voucher 逐次扣减。适合高频微交易。([来源](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/))

## 二、主要参与者

| 参与者 | 产品 | 状态 | 特征 |
|------|------|------|------|
| **Coinbase** | Agentic Wallets + x402 | 已上线(2026.2) | 50M+ 的交易量、Base L2 优先、支持 USDC/ETH/BTC |
| **Crossmint** | Embedded Agent Wallets | 已上线 | 双密钥模型(TEE)、同时支持稳定币与虚拟 Visa/MC 卡、覆盖 10 億+ 商品 |
| **Skyfire** | KYAPay | 已上线 | 支持法币与 USDC 充值、构建 Agent 信用层 |
| **Nevermined** | Agent 支付基础设施 | 已上线 | 内置计量、计费、卡代理,与 x402 集成 |
| **Human.tech** | Agentic WaaP | 2026 发布 | Wallet as a Protocol、以密码学强制人工监督 |
| **Circle** | Gateway + CCTP + x402 | 已上线 | USDC 覆盖 30 条链、CCTP 连接 19 条链、$1260 億的总处理量 |

## 三、ID 与信任层

- **ERC-8004**:Ethereum AI Agent ID 标准。包含 ID 注册 · 信用注册 · 验证注册 3 大模块。BNB Chain 已部署至主网。([来源](https://eips.ethereum.org/EIPS/eip-8004))
- **KYA (Know Your Agent)**:类比 KYC 的 Agent 验证框架。Mastercard 于 2026 年 3 月在澳大利亚完成首笔 Agent 支付,以 Verifiable Intent 生成防篡改审计链。Sumsub 等验证平台亦跟进。EU AI Act 的高风险条款于 2026 年 8 月生效,实质上要求 KYA 能力。([来源](https://sumsub.com/blog/know-your-agent/))
- **ERC-4337 + EIP-7702**:账户抽象为 Agent 钱包提供底层能力 — Session Key、委托支出、Guardian 机制。已部署 4000 万+ 个智能账户。

## 四、市场数据

- 2025 年 AI Agent 完成 **1.4 亿笔支付**，均值仅 $0.31/笔 ([来源](https://nevermined.ai/blog/ai-agent-payment-statistics))
- 稳定币 2025 年交易量达到 [[fintech/usd-stablecoin-interchange|**$33 兆**]],Agent 支付的 98.6% 以 USDC 结算
- AI Agent 市场预测从 2025 年 $78.4 億 → 2030 年 $526.2 億(CAGR 46.3%)
- a16z 的预测：定价将从“席位制”转向“成果制”，加密微支付成为 [[agent-economy/skill-market-monetization|Agent 间实时支付工具]] ([来源](https://a16z.com/newsletter/big-ideas-2026-part-2/))

## 五、对 Agent 支付项目的启示

1. **时间窗口存在但正在收窄**:4 大协议已经确立,Crossmint/Skyfire 等已抢得先机,但日活跃交易量极低(x402 仅 $28K/日),表明市场仍处于早期阶段。
2. **差异化方向**：现有解决方案大多集中于 crypto-native 场景。[[fintech/ai-payment-two-tracks|法币 - 稳定币桥接]]、合规 KYA 集成、中国 / 亚洲市场的支付手段（Alipay / WeChat -> 稳定币）仍是空白。
3. **协议兼容而非重新发明**:应支持 x402/ACP/AP2/MPP,在其之上构建增值层,而非另起炉灶。
4. **微交易的经济性**:Agent 支付均值为 $0.31 ,要求极低手续费。Base/Solana 的 sub-cent fee 已满足要求,但关键在于结算效率与批处理。
5. **ID + 支付的捆绑**:ERC-8004 + KYA 正成为合规底线,支付方案若内置 ID 层则具备监管优势。

---

## Sources
- [Google AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)
- [A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402)
- [Stripe ACP](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce)
- [x402 Foundation](https://www.x402.org/)
- [Coinbase Agentic Wallets](https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets)
- [Crossmint Agent Payments](https://www.crossmint.com/solutions/agentic-payments)
- [Skyfire KYAPay](https://skyfire.xyz/product/)
- [Nevermined](https://nevermined.ai/)
- [Circle Gateway x402](https://www.circle.com/blog/building-the-internet-financial-system-circles-product-vision-for-2026)
- [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004)
- [KYA Framework](https://sumsub.com/blog/know-your-agent/)
- [MPP by Stripe & Tempo](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/)
- [AI Agent Payment Stats](https://nevermined.ai/blog/ai-agent-payment-statistics)
- [a16z Big Ideas 2026](https://a16z.com/newsletter/big-ideas-2026-part-2/)
- [Agentic Protocol Landscape](https://www.tryellmo.ai/blog/agentic-commerce-protocol-landscape-2025-2026)
- [CoinDesk x402 Adoption](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/agent-actorship-debate|Agent 主体性争论：四个阵营]]
- [[agent-economy/claude-code-extension-architecture|Claude Code 扩展组件架构：Agent 生态系统基础设施层]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本稳定币法制的三层结构（JPYC・USDC・Project Pax）]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模型 vs 稳定币模型]]
<!-- /wiki-links:managed -->
