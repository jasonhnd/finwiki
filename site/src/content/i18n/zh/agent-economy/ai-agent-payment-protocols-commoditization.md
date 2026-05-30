---
source: agent-economy/ai-agent-payment-protocols-commoditization
source_hash: 49438a71ac5ef654
lang: zh
status: machine
fidelity: ok
title: "Agent 支付协议的 commoditization 与价值的上移"
translated_at: 2026-05-30T16:40:11.495Z
---

# Agent 支付协议的 commoditization 与价值的上移

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- Stripe 5层 = Tempo(L1)+ Privy(wallet)+ USDB / Bridge(稳定币)+ Stripe Checkout(SDK)+ 5M+ 商家(流量) ^[extracted]
- Privy 于 2025 被 Stripe 收购,被定位为嵌入式钱包的默认 ^[extracted]
- Coinbase 是对照路线:Base(L1)+ CDP(wallet)+ USDC(货币)+ Commerce(SDK) ^[extracted]

## Mechanism / How it works

协议 commoditization 之后,take rate 无法从开源 standard 中提取(HTTP 协议费无法征收)。价值捕获不得不上移到 **纵向 distribution 控制点**:谁控制用户登录的 [[fintech/embedded-wallet-fintech-disintermediation-overview|wallet 中抜き]] → 谁控制 agent 的默认支付路径 → 谁征收 transaction fee。

Stripe 5层全栈的逻辑:
1. **L1 链**(Tempo · Stripe + Paradigm)— 支付优化链、7-10 validator、机构级资质
2. **L2 / wallet**(Privy · Stripe 收购)— [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|埋込 wallet デフォルト]]、嵌入 5M+ Stripe 商家的 checkout
3. **稳定币**(USDB / Bridge · Stripe 旗下)— 原生结算货币(见 [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]])
4. **SDK**(Stripe Checkout / Connect)— 商家侧零代码嵌入
5. **商家流量**(5M+ 商家)— 对末端 distribution 的实际支配

每增加一层,纵向支配就更深一层 — 协议这一公共物品越大,Stripe 的私有物品网络效应就越强。

## Origin & evolution

2024 Stripe 收购 Bridge(USDB 发行体)→ 进入稳定币层。2025.04 Stripe + Paradigm 合资设立 Tempo(支付 L1)→ 占据链层。2025.07 Stripe 收购 Privy → 占据 wallet 层。2025.09 AP2 发布时 Stripe 不在 60+ 合作方名单中 — Stripe 的战略明确为「不参与协议霸权之争,只占据 distribution」。2026 年中盘 FIDO 接手 AP2  → 成为 AAIF 之后,Stripe 5层全栈的位置基本变得不可挑战。

类比:Visa / Mastercard 也不写 ISO 8583 协议规范,却依然捕获主要的支付价值 — **协议是公共物品,distribution 是私有物品**(见 [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]])。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|プロトコル分層表]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## Sources

- Privy「Privy and Stripe: Bringing crypto to everyone」(Stripe 对 wallet 层的收购)— https://privy.io/blog/announcing-our-acquisition-by-stripe
- Tempo 官方网站(Stripe + Paradigm 的支付 L1 · 链层)— https://tempo.xyz/
- Coinbase Developer Platform(对照路线 Base + CDP + USDC + Commerce)— https://docs.cdp.coinbase.com/
- Coinbase x402(协议层的公共物品 commoditization)— https://github.com/coinbase/x402
- Google AP2(协议霸权的对照 · Stripe 不参与)— https://github.com/google-agentic-commerce/AP2
