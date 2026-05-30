---
source: agent-economy/ap2-technical-spec
source_hash: fff23aa6c7bccbbe
lang: zh
status: machine
fidelity: ok
title: "AP2 技术规范 · Mandate · Payment Intent · Settlement Adapter"
translated_at: 2026-05-30T17:04:08.784Z
---

# AP2 技术规范 · Mandate · Payment Intent · Settlement Adapter

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Authorization Mandate 采用 W3C Verifiable Credential 格式 ^[extracted]
- Mandate scope 包含项:金额、merchant 类别、时间窗口(典型 24h)、可选地址限制 ^[extracted]
- Wallet Adapter 抽象层:同一 mandate 可路由到 Google Pay(卡)或 USDC(via Coinbase Onchain Kit) ^[extracted]
- Risk Score 由 Google fraud detection AI 算出,merchant 自定义阈值 ^[extracted]
- Audit trail 回写到用户的 Google 账户,user/merchant/regulator 多方均可验证 ^[extracted]

## Mechanism / How it works

典型流程(5 步):

1. 用户告诉 Gemini「帮我订下周日的航班,预算 $800」
2. Gemini 签发 Authorization Mandate(scope:航空公司类别 / limit:$800 / expire:24h)
3. Gemini 调用航空公司 API,提交 Payment Intent(引用 mandate)
4. 航空公司验证 mandate + 经由 AP2 settlement adapter(Google Pay 或 USDC)结算
5. Audit trail 回写到用户的 Google 账户

Wallet Adapter 是 AP2 的关键抽象 — mandate 与 intent 均不绑定到具体的 settlement rail,merchant 只需对接 AP2 API 1 条便可同时收受卡支付与稳定币支付(参见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])。这与 x402 协议(明确 USDC-first)路线不同:**AP2 是「rail-neutral」** · x402 是「USDC-native」。跨链 USDC settlement 需要 [[systems/cctp-v2-overview|CCTP V2]] 与 [[systems/chain-abstraction-pattern-overview|chain abstraction]] 的协调。

## Origin & evolution

W3C Verifiable Credentials 标准本身由 W3C 自 2019 起持续推进,Google 是核心贡献者。AP2 的 spec 设计直接借用 VC 模型作为 mandate 容器,没有发明新的授权对象 — 这降低了与既有 identity/DID 生态(Microsoft Entra Verified ID、Decentralized Identity Foundation 等)的集成成本。

2025-09 草案 → 2026-Q1 v1.0,这期间的主要调整集中在 settlement adapter 接口与 risk score schema 上。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[systems/cctp-v2-overview|CCTP V2(USDC settlement ルーティング)]]
<!-- /wiki-links:managed -->

## Sources

- W3C Verifiable Credentials Data Model
- Google AP2 spec v1.0
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2
