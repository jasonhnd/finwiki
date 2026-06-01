---
source: agent-economy/ai-agent-payment-protocols-commoditization
source_hash: 49438a71ac5ef654
lang: zh
status: machine
fidelity: ok
title: "Agent 支付协议商品化与价值上移"
translated_at: 2026-05-30T16:40:11.495Z
---

# Agent 支付协议商品化与价值上移

## Wiki 路线

本条目位于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议全景：7 个协议概览]]。请与 [[payments/INDEX|支付索引]] 和 [[systems/INDEX|系统索引]] 配套阅读，以把握支付业务边界和底层系统边界。

## 关键事实

- Stripe 五层栈 = Tempo（L1）+ Privy（wallet）+ USDB / Bridge（稳定币）+ Stripe Checkout（SDK）+ 500 万以上商家（流量）。^[extracted]
- Privy 于 2025 年被 Stripe 收购，并被定位为嵌入式钱包的默认基础设施。^[extracted]
- Coinbase 是对照路线：Base（L1）+ CDP（wallet）+ USDC（货币）+ Commerce（SDK）。^[extracted]

## 机制

协议商品化之后，take rate 很难从开源 standard 本身提取，正如 HTTP 协议费无法征收。价值捕获必须上移到**纵向分发控制点**：谁控制用户登录的 [[fintech/embedded-wallet-fintech-disintermediation-overview|wallet 中介层]]，谁就更有可能控制 agent 的默认支付路径，并征收 transaction fee。

Stripe 五层全栈的逻辑如下：

1. **L1 链**（Tempo · Stripe + Paradigm）：面向支付优化的链，强调少量验证者和机构级资质。
2. **L2 / wallet**（Privy · Stripe 收购）：[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|嵌入式 wallet 默认层]]，嵌入 500 万以上 Stripe 商家的 checkout。
3. **稳定币**（USDB / Bridge · Stripe 旗下）：原生结算货币，参见 [[fintech/stablecoin-chain-token-strategy-trilemma|链 x 代币 x 战略三难题]]。
4. **SDK**（Stripe Checkout / Connect）：商家侧零代码嵌入。
5. **商家流量**（500 万以上商家）：对末端 distribution 的实际支配。

每增加一层，纵向控制就更深一层。协议越成为公共物品，Stripe 这类拥有分发网络的私有物品越能捕获网络效应。

## 起源与演进

2024 年 Stripe 收购 Bridge，进入稳定币发行层。2025-04，Stripe + Paradigm 合资设立 Tempo，进入支付 L1 层。2025-07，Stripe 收购 Privy，补齐 wallet 层。2025-09 AP2 发布时 Stripe 不在 60 多家合作方名单中，说明其战略不是争夺协议治理，而是控制 distribution。2026 年中 FIDO 接手 AP2 并推进为 AAIF 后，Stripe 五层全栈的位置进一步稳固。

类比来看，Visa / Mastercard 并不编写 ISO 8583 规范，却仍然捕获主要支付价值。**协议是公共物品，distribution 是私有物品**。参见 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe 协议对冲战略]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki 索引]]
- [[agent-economy/ai-agent-payment-protocols-overview|7 个协议总览]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|协议分层表]]
- [[fintech/central-banking-function-unbundling|中央银行功能拆解五层]]
<!-- /wiki-links:managed -->

## Sources

- Privy「Privy and Stripe: Bringing crypto to everyone」（Stripe 对 wallet 层的收购）— https://privy.io/blog/announcing-our-acquisition-by-stripe
- Tempo 官方网站（Stripe + Paradigm 的支付 L1）— https://tempo.xyz/
- Coinbase Developer Platform（对照路线 Base + CDP + USDC + Commerce）— https://docs.cdp.coinbase.com/
- Coinbase x402（协议层公共物品商品化）— https://github.com/coinbase/x402
- Google AP2（协议霸权对照，Stripe 未参与）— https://github.com/google-agentic-commerce/AP2
