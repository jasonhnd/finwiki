---
title: AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式
aliases: []
domain: fintech
kind: knowledge
topic: ai-payment-two-tracks
created: 2026-04-16
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-10-30
confidence: likely
tags: [fintech]
status: candidate
sources: []
---

# AI 产业的两条支付轨道


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 当前 AI 产业的跨境收款存在两条不对等的轨道：

**Stripe 轨道**（已通）：美国 AI 公司（OpenAI、Anthropic、Google）通过 Stripe 接全球信用卡，用户无感，资金直接到美国公司账户。覆盖全球绝大多数有信用卡的用户（同样路径的扩展见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan Horse]]）。

**稳定币轨道**（未通）：非美国 AI 公司出海卖 token/算力/订阅时，Stripe 轨道存在主体限制（需要海外公司持有 Stripe 账户）、外汇管制、合规复杂性等问题。稳定币（[[fintech/usd-stablecoin-interchange|USDC/USDT]]）在成本和速度上更优，但用户采纳率低，缺乏面向 AI 行业的收款基础设施。日本侧的 SC 法制度环境见 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]。

两条轨道的共存不是过渡状态。即使在远期 A2A 经济中，Agent 间微支付（$0.001-$1.00 级别）也无法承受 Stripe 的 $0.30 最低手续费，必须走稳定币轨道——这一规模化趋势也呼应了 [[fintech/stablecoin-crossborder-b2b-growth|B2B 稳定币跨境決済]] 的爆发性增长。Agent-side 协议侧的主战场是 [[agent-economy/ai-agent-payment-protocols-overview|AI agent 支付协议七层]] 与 [[agent-economy/x402-http-payment-overview|x402 HTTP 支付]];agent-issuer 层的具体玩家见 [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop agent issuer]] 与 [[agent-economy/nevermined-compute-payment-protocol|Nevermined 算力支付协议]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin 跨境決済の爆発的成長（733% YoY、$226B）]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire · closed-loop agent issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined · compute payment protocol]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-25): refreshed dates; added Wave 10 agent-economy peer wikilinks (Skyfire, Nevermined).
