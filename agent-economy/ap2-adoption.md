---
title: AP2 采用版图 · Google 闭环 vs 协议四国杀
aliases: [ap2-adoption, ap2-ecosystem, ap2-protocol-landscape]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, payment, ap2, adoption, mpp, acp, x402]
sources: []
status: candidate
---

# AP2 采用版图 · Google 闭环 vs 协议四国杀

> [!info] TL;DR
> AP2 是 Google 在 agent 经济的 wallet 站位——靠 **Google Pay 6 亿用户 + Gemini 数亿触点 + W3C VC 标准影响力 + fraud detection AI** 四个底座形成 agent-payment 闭环,直接对标 OpenAI(暂无 wallet)+ Anthropic(ACP 但无 wallet)+ Stripe(via Privy 但无 agent)。2026-Q2 起 Shopify/Square 等 merchant pilot 启动。

## Key facts

- Coinbase 任 AP2 USDC settlement adapter 角色 ^[extracted]
- Shopify / Square 是早期 merchant 集成方(2026-Q2 起 pilot) ^[extracted]
- Stripe 观望中——Stripe Connect 有自己的 commerce stack ^[extracted]
- Visa Trusted Agent Protocol 正在协商与 AP2 兼容 ^[extracted]
- OpenAI / Anthropic 不直接采用——各自走 MPP / ACP 路线 ^[extracted]
- 机构(JPM Kinexys / Goldman / BNY)尚未表态——仍专注 institutional tokenization ^[inferred]

## Mechanism / How it works

Google 的四底座组合:**Google Pay(6 亿 mobile wallet 用户)** + **Gemini(数亿 Android/Chrome/Workspace 触点)** + **W3C VC 标准影响力(核心贡献者)** + **fraud detection AI(全球最大 ML 反欺诈基建)**——任何一个底座单独不足以推标准,组合起来形成 agent 支付的闭环。

与同期协议的位置:

| 协议 | 主推方 | 定位 | 结算层 |
|---|---|---|---|
| **AP2** | Google | Agent → Merchant 授权支付 | Google Pay / card / USDC |
| **MPP** | Microsoft | Merchant 侧 API 标准 | 多元 |
| **ACP** | Anthropic | Agent 与 commerce platform 交互 | Stripe / 通用 |
| **x402** | Cloudflare + Coinbase + AWS | HTTP 402 状态码复活 | USDC on Base 优先 |
| **A2A** | Linux Foundation | 通用 agent 间通信(含 payment) | 协议无关 |

## Origin & evolution

四国杀格局并非偶然——每家巨头都意识到 agent 经济兴起后,**谁掌握 agent-payment 标准谁就握住下一代 commerce gateway**。Google 选择押 wallet+identity(自家强项),Microsoft 押 merchant API,Anthropic 押 commerce platform 交互,Cloudflare/Coinbase/AWS 选最底层的 HTTP+stablecoin 通道。Linux Foundation 的 A2A 是中立 fallback。

Stripe 的观望姿态是关键变量——若 Stripe 通过 Privy(已收购)押 AP2,Google 阵营优势显著扩大;若 Stripe 自建 ACP 兼容栈,可能分裂市场。

## Counterpoints

四协议并存可能延长 merchant 集成周期,反而让大型电商优先观望——这是 agent 经济落地的最大障碍。另外 Google 自己的 Risk Score 央集化角色,会让欧盟监管(DMA / Digital Markets Act)介入概率上升。机构尚未表态是双刃剑——一方面 AP2 主要服务 retail + SMB,机构缺席不致命;另一方面缺少机构背书,可能影响"高额支付"信任建立。

## Open questions

- Stripe 最终选择(押 AP2 vs 自建 ACP 兼容)?
- Visa Trusted Agent Protocol 协商落地时间?
- AP2 在欧盟的 DMA 合规路径?
- merchant pilot(Shopify/Square)2026-Q2-Q3 的实际交易量?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ai-company-payment-landscape|AI 公司支付版图]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
<!-- /wiki-links:managed -->

## Sources

- Visa Trusted Agent Protocol announcements(2025-2026)
