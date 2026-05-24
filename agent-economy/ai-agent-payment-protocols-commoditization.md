---
title: Agent 支付协议 commoditization 与价值上移 · Stripe 五层 + Privy 双默认
aliases: [agent-payment-commoditization, agent payment value capture, Stripe 五层 Privy 双默认]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, ai-agent, payments, commoditization, stripe, privy, value-capture]
sources: []
status: candidate
---

# Agent 支付协议 commoditization 与价值上移


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- 协议层 commoditization 类比 WebAuthn / OAuth / OpenID Connect 路径 ^[inferred]
- Stripe 五层 = Tempo(L1)+ Privy(wallet)+ USDB / Bridge(稳定币)+ Stripe Checkout(SDK)+ 5M+ 商户(流量) ^[extracted]
- Privy 2025 被 Stripe 收购,定位嵌入式 wallet 默认 ^[extracted]
- Coinbase 走对照路径:Base(L1)+ CDP(wallet)+ USDC(币)+ Commerce(SDK) ^[extracted]
- 协议层无 take rate,应用层走 SaaS / transaction fee / platform fee ^[inferred]

## Mechanism / How it works

协议 commoditization 后,take rate 不可能从开源 standard 收取(无法收取 HTTP 协议费)。价值捕获必须上移到**纵向 distribution 控制点**:谁控制用户登录的 [[fintech/embedded-wallet-fintech-disintermediation-overview|wallet 去中介化]] → 谁控制 agent 默认支付路径 → 谁收 transaction fee。

Stripe 五层全栈逻辑:
1. **L1 链**(Tempo · Stripe + Paradigm)—— 支付优化链,7-10 validator,机构高资质
2. **L2 / wallet**(Privy · Stripe 收购)—— [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|嵌入式 wallet 默认]],集成在 5M+ Stripe 商户 checkout
3. **稳定币**(USDB / Bridge · Stripe 旗下)—— 原生支付币(参见 [[fintech/stablecoin-chain-token-strategy-trilemma|链 × 币 × 策略三难]])
4. **SDK**(Stripe Checkout / Connect)—— 商户接入零代码
5. **商家流量**(5M+ 商户)—— 终端 distribution 实控

每加一层,纵向控制深一层 —— 协议公地越大,Stripe 私产网络效应越强。

## Origin & evolution

2024 Stripe 收购 Bridge(USDB 发行方)→ 进入稳定币层。2025.04 Stripe + Paradigm 合资创立 Tempo(支付 L1)→ 占链层。2025.07 Stripe 收购 Privy → 占 wallet 层。2025.09 AP2 发布时 Stripe 不在 60+ 伙伴名单 —— Stripe 战略明确"不参与协议博弈,只占 distribution"。2026 年中 FIDO 接管 AP2 → AAIF 后,Stripe 五层全栈位置基本不可挑战。

类比:Visa / Mastercard 也不写 ISO 8583 协议规范,但仍捕获主要支付价值 —— **协议是公地,distribution 是私产**(同模式见 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe 协议对冲策略]])。

## Counterpoints

- "Stripe 五层全栈"假设垂直整合优于横向开放 —— 历史上 AOL 全栈输给开放 Web,垂直整合可能反向 stall
- Privy / Bridge 收购整合风险尚未完全验证(2026.05 还在 18 个月内)
- Coinbase 全栈(Base + CDP + USDC + Commerce)是对等替代,胜负未定
- 监管可能强制 wallet portability(类比 OPEN BANKING)→ wallet 默认位失效

## Open questions

- 中国 Alipay / WeChat Pay 是否会出对应 agent 支付五层全栈?
- 印度 UPI 是否会延伸出 agent 支付层?
- 监管(OCC / FinCEN / 欧盟)对 wallet 默认位的反垄断态度何时显化?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|七协议总览]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|协议分层表]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

## Sources

