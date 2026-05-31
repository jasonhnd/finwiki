---
source: fintech/retail-stablecoin-dual-bind
source_hash: bee3291fa5b16599
lang: zh
status: machine
fidelity: ok
title: "零售稳定币陷入“银行发行 vs 无许可 UX”的两难困境：仅靠支付层没有胜算"
translated_at: 2026-05-31T07:28:06.124Z
---

# 零售稳定币陷入“银行发行 vs 无许可 UX”的两难困境：仅靠支付层没有胜算


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 在日本要让零售 SC 成立，(a) 如果是银行发行，则反洗钱监管使无许可 UX 不可能；(b) 如果追求无许可，UX 虽然顺滑，但监管又阻断银行发行。**仅靠单纯的支付层竞争不可能赢。** 差异化只能来自由智能合约 × KYC × 钱包联动构成的上位功能。

## Conclusion

零售 SC 面临如下两难：

| 路径 A：银行发行 SC | 路径 B：无许可 SC |
|---|---|
| 监管合规 ✅ | UX 顺滑 ✅ |
| 反洗钱监管会把 UX 变成“每次都要 KYC 检查” ❌ | 无法由银行发行 ❌（在日本，必须属于资金移动业 / 银行 / 信托三者之一） |
| → 输给 PayPay、Suica、借记卡和信用卡 | → 被银行与监管当局拒绝 |

**出路 = 放弃只在支付层单挑，转而通过以下组合形成上位差异化**：
- **KYC × 钱包联动** → My Number Wallet 型（[[fintech/maina-wallet-kyc-permissionless-ux-bridge|maina-wallet-kyc-permissionless-ux-bridge]]）
- **智能合约控制** → 托管、条件支付、可回滚性、大额结算的可控性
- **无金额上限 + ID 联动** → PayPay（预付式 5 万円 上限）无法实现的领域

## Reasoning

- PayPay 交易额 4 兆円、Docomo d 払い 4 兆円、日本消费总额 200 兆円 → 零售支付已经基本被满足
- 如果银行发行 SC “只是支付”，那么 PayPay 已经足够 → 几乎没有必要做
- 以无许可为前提的 USDC 在日本同样没有增长起来（羽田机场 Netstars 1  个月 40 件；整体流通通道参见 [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環]]）
- 必须提供“支付以外的价值”——“KYC + 钱包 + 智能合约”三件套被提出为差异化轴
- 现实 use case 例子包括类似世界杯门票 10 万円 规模的场景：即“有金额上限的电子货币无法实现 + 必须进行 ID 追踪”

## Applicable When

- 在开始零售 SC 的业务设计前，用于预先阻止走向纯支付层竞争的提案
- 准备回答“PayPay 不就够了吗？”这一反驳
- 设计商业 SC 的 retail 轴 / 零售 UC（协议 UX 基础见 [[systems/erc-7702-overview|ERC-7702]] / [[agent-economy/privy-embedded-wallet-overview|Privy 嵌入式钱包]]）
- 在与监管侧讨论“零售 SC 的社会价值是什么”时 → ID + 智能合约 + 解除金额上限

## Source

- 一致性：[[banking/minna-bank-baas-model|みんなの銀行 TD/SC 戦略]]（零售 SC 与零售 TD 处于同一两难轴）
- 一致性：[[fintech/ai-payment-two-tracks|AI 决済の二軌]]（与 Stripe vs SC 一样，差异化轴不在支付本身）
- 公开：PayPay 交易额 4 兆円（公开 IR）

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge|マイナウォレット KYC × UX bridge]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
