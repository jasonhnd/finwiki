---
source: agent-economy/ai-agent-payment-protocols-seven-layers
source_hash: a9f1038c4510a942
lang: zh
status: machine
fidelity: ok
title: "AI Agent 支付 7协议分层表"
translated_at: 2026-05-30T16:40:11.497Z
---

# AI Agent 支付 7协议分层表

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- 7 协议 = 意图 3 + 传输 2 + 上下文 2 ^[extracted]
- AP2(Google 主导)+ x402(Coinbase 主导)+ MCP(Anthropic 主导)+ A2A(Google 主导)= 业界简称「4协议」 ^[extracted]
- SPT(Skyfire)/ ACK(Catena Labs · a16z)/ TAP(xpay)是二次竞争 ^[extracted]
- AP2 以 VC(Verifiable Credentials)+ DPK(Decentralized Public Key)为 mandate 签名 ^[extracted]
- x402 是 HTTP 标准,non-chain-specific ^[extracted]

## Mechanism / How it works

**意图层** 回应「用户想做什么」。AP2 定义 3层的信任链 mandate:Intent(用户 ↦ agent · 授权购买 X)→ Cart(agent ↦ 商家 · 代理用户下单)→ Payment(商家 ↦ 支付网络 · 收款指示)。每一层以 VC + DPK 签名,作为链条而不可篡改。SPT / ACP 是类似设计的早期竞争者。

**传输层** 回应「如何将金钱从 A 移到 B」。x402 复活 HTTP 402 Payment Required 状态码。服务器在响应中嵌入「向 Y 地址支付 X USDC」· agent 钱包自动签名 · 汇款。per-call 的微支付成立。底层钱包通常基于 [[systems/erc-4337-overview|ERC-4337 スマートアカウント]] 或 [[systems/erc-7702-overview|ERC-7702 一時アップグレード]],跨链时由 [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] 隐藏底层链的差异。TAP 是类似的 token-based auth 路径,但生态较薄。

**上下文层** 回应「LLM 如何知道可用的工具 / 数据」。MCP 标准化服务器侧 tool definitions + resources · LLM client 自动发现并调用。A2A 承担 agent 间通信(某 agent 委派给另一 agent)· 与 MCP 的 server-tool 在 agent-agent 这 2 个方向上构成互补关系。

## Origin & evolution

2024.11 Anthropic 发布 MCP · 6 个月内 OpenAI / Google 跟进 · 成为事实标准。2025.04 Google 发布 A2A 以补充 agent 间通信。2025.05 Coinbase 发布 x402 ,点燃了「HTTP 原生支付」的叙事(以 USDC 为默认结算货币的详情见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])。2025.09 Google 与 60+ 合作方发布 AP2 · 定调了意图层。2026 年中盘 FIDO 接手 AP2  → 转向 AAIF · 意图层走向中立标准。二次协议(SPT/ACP/TAP)在 2025 年内登场,但因 AP2 + FIDO 的双重 commoditization 压力而难以筑起独立的护城河 — 与 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]] 构成结构性对照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2(意图层 · Intent / Cart / Payment mandate · VC + DPK 签名)— https://github.com/google-agentic-commerce/AP2
- Coinbase x402(传输层 · HTTP 402 per-call 微支付)— https://github.com/coinbase/x402
- Model Context Protocol(上下文层 · server-tool 接口)— https://github.com/modelcontextprotocol/modelcontextprotocol
- Agent2Agent (A2A) Protocol(上下文层 · agent-agent 通信)— https://github.com/a2aproject/A2A
- Agent Commerce Kit(Catena Labs · ACP 系的意图 / 支付设计)— https://www.agentcommercekit.com/overview/concepts
- Skyfire Developer Docs(SPT 系 · Identity and Payments for AI)— https://docs.skyfire.xyz/
