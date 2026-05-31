---
source: fintech/stripe-usdb-bridge-stablecoin
source_hash: ae5aefe234acc514
lang: zh
status: machine
fidelity: ok
title: "Stripe USDB · Bridge Payment公司收购后的稳定币 · Tempo L1 +代理支付载体"
translated_at: 2026-05-31T11:13:44.923Z
---

# Stripe USDB · Bridge Payment公司收购后的稳定币 · Tempo L1 +代理支付载体

## 维基路线

该条目位于[[fintech/INDEX|fintech index]]下。用 [[fintech/circle-usdc-stablecoin|Circle USDC]] 和 [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] 来解读支付公司品牌的稳定币三重奏，用 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層 Trojan Horse]] 来解读 USDB 在 Stripe 垂直堆栈中的 L3  位置。

> [!info] TL;DR
> Stripe は 2024-10 に ~ **$1.1B** で Bridge（USDB 発行体）を買収、2025-Q2 より USDB を Stripe Connect / Checkout のバックエンドへ統合、2026-Q1 に [[agent-economy/privy-embedded-wallet-overview|Privy]]（2025-06 のもう 1 件 $1.1B 買収）とのウォレットスタック統合を完了した。USDB 流通量 ~ **$800M+**（2026-Q2）で、主要シーンは Stripe 5M+ マーチャントのクロスボーダー決済および [[agent-economy/x402-http-payment-overview|x402]] / [[agent-economy/ap2-overview|AP2]] エージェント決済。Tempo L1（Stripe + Paradigm 共同運営）は USDB の「メイン戦場チェーン」で、~ 5 秒決済 + ~0 fee による SWIFT 代替を目標とする。USDB は [[fintech/embedded-wallet-fintech-disintermediation-overview|組込ウォレットによるリバース脱仲介化]] 戦略の L3 キャリア —— USDC と「オープンホワイトサークル vs 垂直スタッククローズドホワイトサークル」の対比を形成する。

## 关键事实

- USDB分配 **$800M+** (2026-Q2) 主链以太坊 + Base + Schedule Tempo L1 ^[extracted]
- 发行人：Bridge Inc.（Stripe的全资子公司，2024-10 收购，〜$1.1B现金+股票）^[extracted]
- 储备：100%短期国债+次日回购·部分通过[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]]持有，获得收益^[extracted]
- 每月鉴证：BPM LLP（与USDC不同的审计公司）^[extracted]
- Stripe 的战略收购2 件 2024-2025：Bridge $1.1B + Privy $1.1B = **$2.2B 战略垂直整合** ^[extracted]
- Tempo L1：Stripe + Paradigm 主导，2025-09  公开，2026-Q1 测试网，目标是 EVM 兼容 + 亚秒级 + USDB 原生^[extracted]
- USDB跨境使用案例：Stripe商户存储→USDB自动定位→在5 秒内到达目标国家（相对于SWIFT3 天+$25 费用）^[extracted]
- 代理结算：USDB是x402 / AP2 推荐清算资产，默认集成到Stripe代理工具包^[extracted]

## 机制/如何运作

USDB 的核心差异化 = **不追求公共 DeFi 流动性（USDC 的优势），不追求零售消费品牌（PYUSD/RLUSD 路径），专注于 Stripe 5M+ 商户后端的“自动化稳定币”——商户不需要知道他们正在接收稳定币**。这就是[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層 collapse]]架构的L3 位置的商业化：L5 Checkout（现有主基地）→L4 Privy（嵌入式钱包）→**L3 USDB（链上美元载体）**→L2 Tempo（专用链）→ L1 AP2/x402（代理协议）。

USDB与[[fintech/circle-usdc-stablecoin|USDC]]的根本对比： **USDC是一个“开放的白圈”——任何钱包、任何链、任何发行人都可以集成，而Circle通过CCTP为销毁和铸币提供了一个中立的桥梁； USDB是一个“封闭的白圈”——它只在Stripe堆栈内流通，Stripe控制着发行+链+钱包+结账的全堆栈**。这种差异使得USDB在Stripe商户场景中成为“赢家通吃”的玩家，但在跨栈场景（非Stripe商户）几乎没有渗透力。在经济模型中，Stripe 吸收了100%的储备收益率（对比 Circle × Coinbase 的50-50，对比 Paxos × PayPal 并给予 80-90%）——Stripe 不需要分销激励，因为所有分销渠道都是自营的（[[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコル対冲戦法]]）。

代理结算端：USDB是[[agent-economy/x402-http-payment-overview|x402]]HTTP原生支付协议推荐的结算资产，Stripe代理工具包（已发布2025-09 ）默认通过USDB+Privy完成每次调用的小额支付。这将USDB从“商户支付”扩展到“代理经济的清算资产”，并与USDC在代理场景的原生地位直接竞争（[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]）。

## 起源与演变

创立2022 Bridge（Coinbase/Square 校友 Sean Yu/Zach Abrams，目标是“用稳定币简化企业跨境支付”）。 2023 Bridge 完成红杉领投融资并推出 Bridge Orchestration API（跨链稳定币转换）。 **2024-10 Stripe 以 ~$1.1B 现金 + 股票收购 Bridge，= 这是当时加密货币领域最大的并购之一，Stripe 公开表示，“我们相信稳定币是支付的未来。” 2024-Q4 桥接USDB流通$200M→2025-Q4 $800M（由Stripe集成驱动）。 **2025-06 Stripe acquires Privy for ~$1.1B** → Completed double default of L4  wallet + L3  stablecoin. **2025-09 Tempo L1 发布**（Stripe + Paradigm，基于[[systems/bft-validator-economy-overview|BFT validator economy]]的EVM兼容PoS），2026-Q1 测试网，2026-Q3 主网计划中。 2026-Q1 Stripe代理工具包默认采用USDB+Privy+x402 ，与[[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa/MA agentic commerce]]形成代理支付双轨竞争。 **USDB推出了“垂直堆栈闭合白圈”模型**：与[[fintech/circle-usdc-stablecoin|USDC]]（开放白圈）和[[fintech/jpmorgan-jpmd-coin|JPMD]]（银行TD）并行，代表继GENIUS法案§501 之后的第三条合规路径。

＃＃ 有关的
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層 Trojan Horse]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコル対冲戦法]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 組込ウォレット]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 決済プロトコル]]
- [[agent-economy/ap2-overview|AP2 Agent Payments Protocol]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## 来源

- https://stripe.com/newsroom/news/stripe-acquires-bridge — Stripe 官方收购公告 (2024-10)
- https://stripe.com/use-cases/stablecoins — Stripe 稳定币用例页面
- https://www.bridge.xyz/ — Bridge（Stripe 子公司）主页
- https://tempo.xyz/ — Tempo L1  主页
- https://www.paradigm.xyz/2025/09/announcing-tempo — Paradigm Tempo 公开解释
- https://stripe.com/newsroom/news/usdb — USDB 产品页面（Stripe 集成后）
