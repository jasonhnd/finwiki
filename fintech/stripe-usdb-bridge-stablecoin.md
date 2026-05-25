---
title: Stripe USDB · Bridge 收购后的支付公司稳定币 · Tempo L1 + Agent 支付载体
aliases: [stripe-usdb-bridge-stablecoin, USDB, Stripe Bridge, Bridge USDB, Stripe stablecoin]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, stripe, bridge, usdb, tempo, agent-payment, vertical-integration]
status: candidate
sources:
  - https://stripe.com/
  - https://stripe.com/newsroom/news/stripe-acquires-bridge
  - https://www.bridge.xyz/
  - https://tempo.xyz/
  - https://stripe.com/use-cases/stablecoins
  - https://stripe.com/newsroom/news/usdb
  - https://www.paradigm.xyz/2025/09/announcing-tempo
---

# Stripe USDB · Bridge 收购后的支付公司稳定币 · Tempo L1 + Agent 支付载体

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/circle-usdc-stablecoin|Circle USDC]] and [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] for the payment-company-branded stablecoin trio, and with [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan Horse]] for the L3 position of USDB in Stripe's vertical stack.

> [!info] TL;DR
> Stripe 在 2024-10 以 ~ **$1.1B** 收购 Bridge (USDB 发行人),2025-Q2 起将 USDB 整合进 Stripe Connect / Checkout 后台,2026-Q1 完成与 [[agent-economy/privy-embedded-wallet-overview|Privy]] (2025-06 另一笔 $1.1B 收购) 的钱包栈集成。USDB 流通量 ~ **$800M+** (2026-Q2),主要场景是 Stripe 5M+ 商家跨境结算与 [[agent-economy/x402-http-payment-overview|x402]] / [[agent-economy/ap2-overview|AP2]] agent 支付。Tempo L1 (Stripe + Paradigm 联营) 是 USDB 的"主战场链",目标 ~ 5 秒结算 + ~0 fee 替代 SWIFT。USDB 是 [[fintech/embedded-wallet-fintech-disintermediation-overview|嵌入式钱包反向去中介化]] 战略的 L3 载体——与 USDC 形成"开放白圈 vs 垂直栈封闭白圈"对比。

## Key facts

- USDB 流通 **$800M+** (2026-Q2) · 主链 Ethereum + Base + 计划 Tempo L1 ^[extracted]
- 发行人: Bridge Inc. (Stripe 全资子公司,2024-10 收购,~$1.1B 现金 + 股票) ^[extracted]
- 储备: 100% 短期美债 + 隔夜回购 · 部分通过 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 持有获 yield ^[extracted]
- 月度 attestation: BPM LLP (与 USDC 不同审计所) ^[extracted]
- Stripe 双笔关键收购 2024-2025: Bridge $1.1B + Privy $1.1B = **$2.2B 战略垂直整合** ^[extracted]
- Tempo L1: Stripe + Paradigm 主导,2025-09 公开,2026-Q1 testnet,目标 EVM-compatible + sub-second + USDB native ^[extracted]
- USDB 跨境用例: Stripe 商家收款 → USDB 自动持仓 → 5 秒到目标国 (vs SWIFT 3 天 + $25 fee) ^[extracted]
- Agent 支付: USDB 是 x402 / AP2 推荐结算资产,Stripe agent toolkit 默认集成 ^[extracted]

## Mechanism / How it works

USDB 的核心差异化 = **不追求公开 DeFi 流动性 (USDC 强项),不追求零售消费者品牌 (PYUSD/RLUSD 路线),专注 Stripe 5M+ 商家后台的"自动 stablecoin"——商家不需要意识到自己在收 stablecoin**。这是 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 collapse]] 架构中 L3 位置的产品化:L5 Checkout (现有大本营) → L4 Privy (嵌入式钱包) → **L3 USDB (链上美元载体)** → L2 Tempo (专用链) → L1 AP2/x402 (agent 协议)。

USDB 与 [[fintech/circle-usdc-stablecoin|USDC]] 的根本对照:**USDC 是"开放白圈"——任何钱包、任何链、任何 issuer 都可以集成,Circle 通过 CCTP 提供 burn-and-mint 中立桥;USDB 是"封闭白圈"——只在 Stripe 栈内流通,Stripe 控制 issuance + chain + wallet + checkout 全栈**。这种差异让 USDB 在 Stripe 商家场景下"赢家全得",但在跨栈场景 (非 Stripe 商家) 几乎无渗透。经济模型上,Stripe 直接拿走 100% 储备 yield (vs Circle × Coinbase 50-50,vs Paxos × PayPal 80-90% 让给 PayPal) — Stripe 不需要分销激励,因为 Stripe 自营全部分销通道 ([[fintech/protocol-hedge-strategy-stripe-pattern|Stripe 协议对冲战法]])。

Agent 支付侧: USDB 在 [[agent-economy/x402-http-payment-overview|x402]] HTTP-native 支付协议中是推荐 settlement asset,Stripe agent toolkit (2025-09 公开) 默认通过 USDB + Privy 完成 per-call 微支付。这把 USDB 从"商家支付"扩展到"agent 经济结算资产",与 USDC 在 agent 场景的 native 地位 ([[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]) 形成正面竞争。

## Origin & evolution

2022 Bridge 创立 (Coinbase / Square 校友 Sean Yu / Zach Abrams,目标"用 stablecoin 简化跨境企业付款"). 2023 Bridge 完成 Sequoia 主导融资,推出 Bridge Orchestration API (跨链 stablecoin 转换). **2024-10 Stripe 以 ~$1.1B 现金+股票收购 Bridge** = 当时加密领域最大单笔收购之一,Stripe 公开口径 "we believe stablecoins are the future of payments". 2024-Q4 Bridge USDB 流通量 $200M → 2025-Q4 $800M (Stripe 集成驱动). **2025-06 Stripe 收购 Privy ~$1.1B** → 完成 L4 钱包 + L3 stablecoin 双默认. **2025-09 Tempo L1 公开** (Stripe + Paradigm,基于 [[systems/bft-validator-economy-overview|BFT validator economy]] 的 EVM-compatible PoS),2026-Q1 testnet,2026-Q3 mainnet 预定. 2026-Q1 Stripe agent toolkit 默认 USDB + Privy + x402,与 [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa/MA agentic commerce]] 形成 agent 支付双轨竞争. **USDB 启动了"垂直栈封闭白圈"模式**: 与 [[fintech/circle-usdc-stablecoin|USDC]] (开放白圈) 和 [[fintech/jpmorgan-jpmd-coin|JPMD]] (银行 TD) 三足并立,代表 GENIUS Act §501 后的第三条合规路径。

## Counterpoints

USDB $800M 仍远小于 USDC $65B / USDT $145B —— "封闭白圈"模式的天花板是 Stripe 商家总规模 (~$1.4T 年 GMV),即使 5-10% 切到 USDB 也只有 $70-140B,**且要求商家全栈都用 Stripe 才能达成最优体验**。与 Stripe 竞争的 Adyen / Block / PayPal 也在推自家路径,Stripe 的"五层 collapse" 在大型企业 (有自己金库 + 多 PSP) 场景渗透有限。Tempo L1 是 Stripe + Paradigm 联营,治理在主权链与 [[systems/canton-overview|Canton]] / Arc / Solana 等 4-5 个相似定位 L1 中并不突出,**链层赢家不一定是 Tempo**。Bridge USDB 储备审计所 BPM LLP 知名度低于 Deloitte (USDC) / WithumSmith+Brown (PYUSD),机构 LP 信任建立需要 2-3 年。USDB 与 Circle USDC 在 Stripe 商家场景内部存在路径冲突 —— Stripe 历史上也支持 USDC 收款,USDB 是替代 USDC 还是并行,2026-2027 数据将决定。

## Open questions

Tempo L1 mainnet (2026-Q3 预定) 上线后 USDB 是否真能从 Ethereum/Base 主迁过去,以及 Tempo 在 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极矩阵]] 中获得多少独立流动性?Stripe 是否会从 USDB 储备 100% 截留 yield 模式向"商家分润"演化以应对竞争压力?USDB 在 EU MiCA EMT / 日本 ECISB 框架下的牌照路径是否能在 2027 之前完成 (目前仅美国持牌)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 五层 Trojan Horse]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe 协议对冲战法]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 嵌入式钱包]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 支付协议]]
- [[agent-economy/ap2-overview|AP2 Agent Payments Protocol]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

- https://stripe.com/newsroom/news/stripe-acquires-bridge — Stripe 官方收购公告 (2024-10)
- https://stripe.com/use-cases/stablecoins — Stripe stablecoin 用例页
- https://www.bridge.xyz/ — Bridge (Stripe 子公司) 主页
- https://tempo.xyz/ — Tempo L1 主页
- https://www.paradigm.xyz/2025/09/announcing-tempo — Paradigm Tempo 公开说明
- https://stripe.com/newsroom/news/usdb — USDB 产品页 (合并入 Stripe 后)
