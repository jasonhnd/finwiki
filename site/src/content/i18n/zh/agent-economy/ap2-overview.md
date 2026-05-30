---
source: agent-economy/ap2-overview
source_hash: fbcc222dc6bf2174
lang: zh
status: machine
fidelity: ok
title: "AP2 · Google Agent Payments Protocol 概观"
translated_at: 2026-05-30T17:04:08.783Z
---

# AP2 · Google Agent Payments Protocol 概观

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/ap2-adoption|AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- AP2 v1.0 于 2026-Q1 发布 ^[extracted]
- 与 MPP(Microsoft)、ACP(Anthropic)、x402(Cloudflare/Coinbase/AWS)、A2A(Linux Foundation)一同构成 **agent 经济「支付协议四国大战」** ^[extracted]
- 核心问题:**AI agent 代理用户支付时,merchant 如何确认 agent 确实获得了授权?** ^[extracted]
- 结算层中立:Google Pay / card networks / USDC(via Coinbase)/ 银行 instant rails 均可 ^[extracted]
- 全流程基于 W3C Verifiable Credentials 标准 ^[extracted]

## Mechanism / How it works

AP2 把传统的 user-merchant 二元支付扩展为 user-agent-merchant 的三元结构,并引入 4  个核心组件:

1. **Authorization Mandate** — 用户签发的 verifiable credential,定义 agent 可支出的 scope(金额、merchant 类别、时间窗口)
2. **Payment Intent** — agent 向 merchant 提交的支付意图,引用 mandate
3. **Settlement Channel** — 可经由 Google Pay、card networks、稳定币(USDC via Coinbase · 参见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]])、银行 instant rails 中任意一种
4. **Audit Trail** — 全流程可验证,基于 W3C VC 标准

3  个核心张力:授权边界(用户给 agent 多大的支出权限?是否每次都需重新确认?)、身份可信度(merchant 如何知道这个 agent 确实代理着用户?)、纠纷解决(agent 误操作时,谁来担责?)。

## Origin & evolution

2025-09 Google 首次公开 AP2 草案,2026-Q1 达到 v1.0 稳定版。背景在于,AI agent 经济崛起后,传统支付以 user-merchant 二元结构为前提,无法处理「agent 代付」场景。同时拥有 Google Pay(全球第 2 位大 mobile wallet · 6 億用户)与 Gemini agent(数亿触点)的 Google,成为这一空白的天然占据者(与 [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]] 形成对照)。

从时间线看,与 MPP / ACP / x402 / A2A 几乎同期登场 — agent 支付的标准化是 2025-2026 业界共识压力下的并行产物。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2 spec(2026-Q1 v1.0)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2
