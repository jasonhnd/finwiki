---
title: Agent 支付基础设施研究报告
aliases: []
domain: agent-economy
kind: knowledge
created: 2026-04-08
last_updated: 2026-05-18
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: possible
tags: [needs-review]
status: candidate
---
# Agent 支付基础设施研究报告

> [!info] TL;DR
> 内部调研 | 2026-04-08

## 一、协议标准格局

当前 Agent 支付领域已形成**四大协议并立**的格局：

1. **ACP (Agentic Commerce Protocol)** — Stripe 与 OpenAI 联合开发，Apache 2.0 开源。核心创新是 Shared Payment Token (SPT)，让 ChatGPT 等应用在不暴露用户支付凭证的情况下发起交易。已在 ChatGPT 中上线 Instant Checkout，支持 Etsy 卖家及百万 Shopify 商户。当前处于 Beta 阶段。([来源](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce))

2. **x402 协议** — Coinbase 主导，2026年4月与 Linux Foundation 成立 x402 Foundation。复活 HTTP 402 状态码作为原生支付层，AI Agent 通过 USDC 稳定币直接在 HTTP 请求中完成支付。已在 Base 和 Solana 上线，Cloudflare Agent SDK 已集成。但实际日交易量仅约 $28,000，大部分为测试交易。([来源](https://www.x402.org/))

3. **AP2 (Agent Payments Protocol)** — Google 发起，60+ 合作方包括 Adyen、American Express、Mastercard、PayPal、Coinbase 等。设计为支付方式无关（支持信用卡、银行转账、加密货币）。已推出 A2A x402 Extension 支持链上加密支付。([来源](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol))

4. **MPP (Machine Payments Protocol)** — Stripe 与 Tempo 联合开发，2026年3月上线，已在 50+ 服务中实现（含 OpenAI、Anthropic、Google Gemini）。采用预付 Tab 模式：Agent 预存资金到托管合约，开启会话后通过 Voucher 逐笔扣款，适合高频微交易。([来源](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/))

## 二、关键玩家

| 玩家 | 产品 | 状态 | 特点 |
|------|------|------|------|
| **Coinbase** | Agentic Wallets + x402 | 已上线(2026.2) | 50M+ 交易量，Base L2 优先，支持 USDC/ETH/BTC |
| **Crossmint** | Embedded Agent Wallets | 已上线 | 双密钥模型(TEE)，同时支持稳定币和虚拟 Visa/MC 卡，覆盖 10 亿+ 商品 |
| **Skyfire** | KYAPay | 已上线 | 支持法币和 USDC 充值，构建 Agent 信誉层 |
| **Nevermined** | Agent 支付基础设施 | 已上线 | 内置计量、计费、卡代理，集成 x402 |
| **Human.tech** | Agentic WaaP | 2026 发布 | Wallet as a Protocol，密码学强制人类监督 |
| **Circle** | Gateway + CCTP + x402 | 已上线 | USDC 跨 30 条链，CCTP 连接 19 条链，$1260 亿总处理量 |

## 三、身份与信任层

- **ERC-8004**：以太坊 AI Agent 身份标准，含身份注册、信誉注册、验证注册三大模块。BNB Chain 已部署主网。([来源](https://eips.ethereum.org/EIPS/eip-8004))
- **KYA (Know Your Agent)**：类似 KYC 的 Agent 验证框架。Mastercard 2026年3月在澳洲完成首笔 Agent 支付，采用 Verifiable Intent 生成防篡改审计链。Sumsub 等验证平台已跟进。EU AI Act 高风险条款将于2026年8月生效，实质要求 KYA 能力。([来源](https://sumsub.com/blog/know-your-agent/))
- **ERC-4337 + EIP-7702**：账户抽象为 Agent 钱包提供底层能力——Session Key、委托支出、Guardian 机制。已部署 4000 万+ 智能账户。

## 四、市场数据

- 2025 年 AI Agent 完成 **1.4 亿笔支付**，均值仅 $0.31/笔 ([来源](https://nevermined.ai/blog/ai-agent-payment-statistics))
- 稳定币 2025 年交易量达 [[fintech/usd-stablecoin-interchange|**$33 万亿**]]，98.6% Agent 支付以 USDC 结算
- AI Agent 市场预计 2025 年 $78.4 亿 → 2030 年 $526.2 亿 (CAGR 46.3%)
- a16z 预测：定价将从"按席位"转向"按结果"，加密微支付将成为 [[agent-economy/skill-market-monetization|Agent 间实时结算工具]] ([来源](https://a16z.com/newsletter/big-ideas-2026-part-2/))

## 五、对 Agent 支付项目的启示

1. **时机窗口存在但在收窄**：四大协议已确立，Crossmint/Skyfire 等已抢占先机，但日活跃交易量极低（x402 仅 $28K/天），说明市场仍在早期。
2. **差异化方向**：现有方案多聚焦 crypto-native 场景。[[fintech/ai-payment-two-tracks|法币-稳定币桥接]]、合规 KYA 集成、中国/亚洲市场支付方式（支付宝/微信→稳定币）仍是空白。
3. **协议兼容而非重造**：应支持 x402/ACP/AP2/MPP 而非另起炉灶，在其上构建增值层。
4. **微交易经济性**：Agent 支付均值 $0.31，要求极低手续费。Base/Solana 的 sub-cent 费用已可满足，关键在于结算效率和批量处理。
5. **身份+支付捆绑**：ERC-8004 + KYA 正在成为合规底线，支付方案若内置身份层将具备监管优势。

---

Sources:
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
- [[agent-economy/agent-actorship-debate|Agent 主体性辩论：四个阵营]]
- [[agent-economy/claude-code-extension-architecture|Claude Code 扩展组件架构——Agent 生态的基础设施分层]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
<!-- /wiki-links:managed -->
