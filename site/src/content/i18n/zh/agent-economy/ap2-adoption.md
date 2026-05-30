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

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- Coinbase 担任 AP2 USDC settlement adapter 的角色 ^[extracted]
- Shopify / Square 是早期的 merchant 整合方(从 2026-Q2 开始 pilot) ^[extracted]
- Stripe 处于观望中 — Stripe Connect 拥有自己的 commerce stack ^[extracted]
- Visa Trusted Agent Protocol 正与 AP2 协商互通 ^[extracted]
- OpenAI / Anthropic 不直接采用 — 各自走 MPP / ACP 路线 ^[extracted]

## Mechanism / How it works

Google 的4根支柱组合:**Google Pay(6 億 mobile wallet 用户)** + **Gemini(数亿 Android/Chrome/Workspace 触点)** + **W3C VC 标准的影响力(核心贡献者)** + **fraud detection AI(全球最大的 ML 反欺诈基础设施)** — 任何单独一项都无法把标准推上去,但组合起来便形成 agent 支付的闭环(与 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] 的纵向 distribution 支配形成对照)。

与同期协议的位置关系:

| 协议 | 主推动者 | 定位 | 结算层 |
|---|---|---|---|
| **AP2** | Google | Agent → Merchant 授权支付 | Google Pay / card / USDC |
| **MPP** | Microsoft | Merchant 侧 API 标准 | 多种 |
| **ACP** | Anthropic | Agent 与 commerce platform 的对话 | Stripe / 通用 |
| **x402** | Cloudflare + Coinbase + AWS | HTTP 402 状态码复活 | USDC on Base 优先 |
| **A2A** | Linux Foundation | 通用 agent 间通信(含 payment) | 协议无关 |

## Origin & evolution

四国大战的格局并非偶然 — 各大厂在 agent 经济崛起后认识到,**握住 agent-payment 标准者将握住下一代 commerce gateway**。Google 押注 wallet+identity(自身强项),Microsoft 押注 merchant API,Anthropic 押注 commerce platform 的对话,Cloudflare/Coinbase/AWS 押注最底层的 HTTP+stablecoin 通道(参见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])。Linux Foundation 的 A2A 是中立 fallback。

Stripe 的观望姿态是关键变量 — 若 Stripe 经由 Privy(已收购)押注 AP2 ,则 Google 阵营的优势将大幅扩大;若 Stripe 自建 ACP 兼容栈,则市场可能分裂。这条 [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる中抜き]] 战线将决定 fintech 价值链的霸权归属。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ai-company-payment-landscape|AI 企業の決済版図]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
<!-- /wiki-links:managed -->

## Sources

- Visa Trusted Agent Protocol announcements(2025-2026)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2
