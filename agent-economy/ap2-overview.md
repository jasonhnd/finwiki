---
title: AP2 · Google Agent Payments Protocol 概览
aliases: [ap2-overview, agent-payments-protocol-overview, google-ap2-overview]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, payment, google, ap2]
sources: []
status: candidate
---

# AP2 · Google Agent Payments Protocol 概览


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/ap2-adoption|AP2 采用版图 · Google 闭环 vs 协议四国杀]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- AP2 v1.0 在 2026-Q1 发布 ^[extracted]
- 与 MPP(Microsoft)、ACP(Anthropic)、x402(Cloudflare/Coinbase/AWS)、A2A(Linux Foundation)组成 **agent 经济"支付协议四国杀"** ^[extracted]
- 核心问题:**当 AI agent 代表用户付钱时,merchant 如何确认 agent 真有授权?** ^[extracted]
- 结算层中立:可走 Google Pay、card networks、USDC(via Coinbase)、银行 instant rails ^[extracted]
- 全程基于 W3C Verifiable Credentials 标准 ^[extracted]

## Mechanism / How it works

AP2 把传统 user-merchant 二元支付扩展为 user-agent-merchant 三元结构,引入四个核心组件:

1. **Authorization Mandate** — 用户签发的 verifiable credential,定义 agent 可花费的 scope(金额、merchant 类别、时间窗口)
2. **Payment Intent** — agent 向 merchant 提交的支付意图,引用 mandate
3. **Settlement Channel** — 可走 Google Pay、card networks、stablecoin(USDC via Coinbase · 详见 [[fintech/usd-stablecoin-interchange|USD 稳定币互换层]])、银行 instant rails
4. **Audit Trail** — 全程 verifiable,基于 W3C VC 标准

三个核心张力:授权边界(用户给 agent 多大支出权限?是否每笔需重新确认?)、身份可信(merchant 如何知道这个 agent 真代表用户?)、争议解决(agent 误操作了,谁负责?)。

## Origin & evolution

2025-09 Google 首次发布 AP2 草案,2026-Q1 进入 v1.0 稳定版。背景是 AI agent 经济兴起后,传统支付假设 user-merchant 二元结构,无法处理"agent 代付"场景。Google 作为同时拥有 Google Pay(全球第二大 mobile wallet · 6 亿用户)和 Gemini agent(数亿触点)的玩家,自然成为这一空白的占领者(对照 [[fintech/embedded-wallet-fintech-disintermediation-overview|嵌入式钱包对 fintech 的去中介化]])。

时间线上,与 MPP / ACP / x402 / A2A 几乎同步问世——agent 支付标准化是 2025-2026 行业共识压力下的并发产物。

## Counterpoints

AP2 强绑定 Google 生态(Gemini + Google Pay)虽然形成闭环优势,但也意味着 **OpenAI / Anthropic / Stripe 等竞争方不会直接采用**——他们各自有 MPP / ACP 路线。多协议并存可能让 merchant 集成成本上升,反而推迟 agent 经济落地。机构尚未表态——JPM / Goldman / BNY 仍在 [[fintech/institutional-stablecoin-deposit-token-thesis|institutional tokenization / deposit token]],agent payment 是 retail + SMB 战场。

## Open questions

- AP2 v1.0 稳定版的 merchant 采用速度?
- Visa Trusted Agent Protocol 与 AP2 的兼容协商何时落地?
- 与 stablecoin 阵营(Circle/Coinbase USDC settlement adapter)的实际流量分布?
- agent 误操作的法律责任归属是否会催生新的保险/担保模型?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2 spec(2026-Q1 v1.0)
