---
title: AP2 技术规范 · Mandate · Payment Intent · Settlement Adapter
aliases: [ap2-technical-spec, ap2-mandate-intent-settlement, google-ap2-spec]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, payment, ap2, technical-spec]
sources: []
status: candidate
---

# AP2 技术规范 · Mandate · Payment Intent · Settlement Adapter


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概览]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Authorization Mandate 是 W3C Verifiable Credential 格式 ^[extracted]
- Mandate scope 包含:金额、merchant 类别、时间窗口(典型 24h)、可选地址限定 ^[extracted]
- Wallet Adapter 抽象层:同一 mandate 可路由到 Google Pay(卡)或 USDC(via Coinbase Onchain Kit) ^[extracted]
- Risk Score 由 Google fraud detection AI 计算,merchant 自定阈值 ^[extracted]
- Audit trail 写回用户 Google 账号,可被 user/merchant/regulator 多方验证 ^[extracted]

## Mechanism / How it works

典型流程(5 步):

1. 用户对 Gemini 说"帮我订下周日航班,预算 $800"
2. Gemini 生成 Authorization Mandate(scope:航空公司类别 / limit:$800 / expire:24h)
3. Gemini 调用航司 API,提交 Payment Intent(引用 mandate)
4. 航司验证 mandate + 通过 AP2 settlement adapter(Google Pay 或 USDC)
5. Audit trail 写回用户 Google 账号

Wallet Adapter 是 AP2 的关键抽象——mandate 和 intent 都不绑定具体结算 rail,merchant 只需对接一份 AP2 API,即可同时接收卡支付和稳定币支付。这与 x402 协议(明确 USDC-first)形成路线差异:**AP2 是"rail-neutral"** · x402 是"USDC-native"。

## Origin & evolution

W3C Verifiable Credentials 标准本身已被 W3C 自 2019 起持续推进,Google 是核心贡献者。AP2 的 spec 设计把 VC 模型直接借用为 mandate 容器,而不是发明全新的授权对象——这降低了与既有 identity/DID 生态(如 Microsoft Entra Verified ID、Decentralized Identity Foundation)的集成成本。

2025-09 草案 → 2026-Q1 v1.0,期间主要调整在 settlement adapter 接口和 risk score schema。

## Counterpoints

Risk Score 由 Google 单方 AI 计算,这意味着 **Google 隐含成为 AP2 网络的 fraud arbiter**——merchant 信不信 Google 的判断?对非 Google 系 merchant(尤其欧盟)可能形成 vendor lock-in 顾虑。另外 W3C VC 本身的撤销机制依赖 status registry,在高 throughput agent 支付场景下,registry 性能是潜在瓶颈。

## Open questions

- mandate 撤销(用户事后取消)的实时性如何?Google 是否需要建中央 revocation registry?
- 多 agent 协同支付(MCP 跨 agent 调用链)的 mandate 嵌套语义?
- USDC settlement adapter 与 CCTP V2 的具体路由策略?
- merchant 侧 SDK 在 v1.0 后是否会开源?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[systems/cctp-v2-overview|CCTP V2(USDC settlement 路由)]]
<!-- /wiki-links:managed -->

## Sources

- W3C Verifiable Credentials Data Model
- Google AP2 spec v1.0
