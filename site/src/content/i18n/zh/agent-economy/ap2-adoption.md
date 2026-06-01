---
source: agent-economy/ap2-adoption
source_hash: cb391e27df52c78c
lang: zh
status: machine
fidelity: ok
title: "AP2 采用版图 · Google 闭环 vs 协议四国大战"
translated_at: 2026-05-30T17:04:08.782Z
---

# AP2 采用版图 · Google 闭环 vs 协议四国大战

## Wiki 路径

本条目位于 [[agent-economy/ai-agent-payment-protocols-overview|AI agent 支付协议全景 · 7 协议概览]]。可与 [[payments/INDEX|payments index]] 对照理解支付层同业语境，并结合 [[systems/INDEX|systems index]] 阅读更大的系统与监管边界。

## 关键事实

- Coinbase 担任 AP2 的 USDC 结算适配器角色。^[extracted]
- Shopify / Square 是早期商户整合方，从 2026-Q2 开始试点。^[extracted]
- Stripe 仍处于观望状态，因为 Stripe Connect 拥有自己的 commerce stack。^[extracted]
- Visa Trusted Agent Protocol 正在与 AP2 协商互通。^[extracted]
- OpenAI / Anthropic 不直接采用 AP2，而是分别走 MPP / ACP 路线。^[extracted]

## 机制

Google 的四根支柱组合是：**Google Pay（6 亿移动钱包用户）**、**Gemini（数亿 Android / Chrome / Workspace 触点）**、**W3C VC 标准影响力（核心贡献者）**、以及 **fraud detection AI（全球最大的机器学习反欺诈基础设施之一）**。任何单项都不足以推动标准普及，但组合后形成 agent 支付闭环，并与 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan horse]] 的纵向 distribution 支配形成对照。

与同期协议的位置关系：

| 协议 | 主推动者 | 定位 | 结算层 |
|---|---|---|---|
| **AP2** | Google | Agent → Merchant 授权支付 | Google Pay / card / USDC |
| **MPP** | Microsoft | Merchant 侧 API 标准 | 多种 |
| **ACP** | Anthropic | Agent 与 commerce platform 的对话 | Stripe / 通用 |
| **x402** | Cloudflare + Coinbase + AWS | 复活 HTTP 402 状态码 | Base 上的 USDC 优先 |
| **A2A** | Linux Foundation | 通用 agent 间通信，含 payment | 协议无关 |

## 起源与演进

“四国大战”的格局并非偶然。各大厂在 agent 经济崛起后意识到，**掌握 agent-payment 标准者将掌握下一代 commerce gateway**。Google 押注 wallet + identity，Microsoft 押注 merchant API，Anthropic 押注 commerce platform 的对话层，Cloudflare / Coinbase / AWS 押注最底层的 HTTP + stablecoin 通道（参见 [[fintech/usd-stablecoin-interchange|USD 稳定币互换层]]）。Linux Foundation 的 A2A 则是中立 fallback。

Stripe 的观望姿态是关键变量。若 Stripe 经由 Privy（已收购）押注 AP2，Google 阵营优势将显著扩大；若 Stripe 自建 ACP 兼容栈，市场可能分裂。这条 [[fintech/embedded-wallet-fintech-disintermediation-overview|嵌入式钱包去中介化]] 战线将决定 fintech 价值链的主导权。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 概览]]
- [[agent-economy/ap2-technical-spec|AP2 技术规格]]
- [[agent-economy/ai-company-payment-landscape|AI 企业支付版图]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
<!-- /wiki-links:managed -->

## Sources

- Visa Trusted Agent Protocol announcements (2025-2026)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2
