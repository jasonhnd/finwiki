---
source: fintech/maina-wallet-kyc-permissionless-ux-bridge
source_hash: 31b098766004fe7a
lang: zh
status: machine
fidelity: ok
title: "MyNa Wallet 模型是兼顾“已完成 KYC 水准 × 无许可 UX”的日本特有解法"
translated_at: 2026-05-31T07:28:06.190Z
---
# MyNa Wallet 模型是兼顾“已完成 KYC 水准 × 无许可 UX”的日本特有解法


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 如果把带有与 My Number Card 联动的身份核验功能的钱包，作为银行 App 内的 App 进行嵌入，就可以在满足银行 KYC 水准的同时，实现接近 permissionless 的 UX。这是打破日本零售 SC 所陷入 [[fintech/retail-stablecoin-dual-bind|二律背反]] 的有力解法。证券系与加密资产系业务者已在 2025 年 之内完成出资（公开信息）。

## Conclusion

MyNa Wallet 模型的结构:

```
用户 → 启动银行 App
       → App 内 App：MyNa Wallet
       → 通过轻触 My Number Card 完成本人确认
       → 已在银行完成 KYC + 通过 My Number 确认真实存在
       → 在已完成 KYC 的层上转账、使用 SC（接近 permissionless 的 UX）
```

**核心**:
- 轻触确认 My Number Card = 在 App 内对“真实存在的人”进行物理 grounding
- 银行 KYC + My Number 实在性确认 = 机构级身份核验水准
- 银行 App 内的 App 内 App 形态 → 实现“无需用户显式意识到钱包存在”的 UX

## Reasoning

- 已向多家银行和大型信用卡公司提出“嵌入 MyNa Wallet”的方案
- My Number Card 发放量已超过 1 億 = 已成为日本社会基础设施
- MyNa Wallet 公司的股东结构中，证券系（Monex）与加密资产系（Coincheck 集团）并列 → 加密资产业务 know-how 与证券业务 know-how 交叉
- 存在医院支付 PoC、票务转售防止、Mercari 假货对策等 ID + 支付组合 use case
- 占位于“ID × Wallet × KYC”这一银行与既有支付企业单独都无法构建的社会基础设施层（协议基础与 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] 方向一致，但以 KYC 为起点）

## Applicable When

- 设计日本零售 SC 的差异化方案时（My Number 联动等、考虑与 [[payment-firms/jpyc|JPYC]] 对接的场景）
- 在“USDC vs 国产 SC”的讨论中论述日本的结构性优势时 → 拥有 My Number 的日本，从一开始就能搭建 KYC 基础 SC，是一个“机会”
- 设计银行 BaaS × Wallet 联动结构时，可与 [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX × 預金トークン/SC 統合]] 组合，共享 KYC 层
- 作为 SC 发行体设计 KYC 层时
- 构建与 PayPay、Suica 等既有零售支付不同的差异化轴时

## Source

- 公开: Monex 集团对 MyNa Wallet 的投资（已公开）
- 公开: My Number Card 发放量超过 1 億（总务省）
- 一致性: [[banking/minna-bank-baas-model|みんなの銀行 BaaS]] App 内 App 形态与该结构同型
- 一致性: [[fintech/retail-stablecoin-dual-bind|retail-stablecoin-dual-bind]] 的解法

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
