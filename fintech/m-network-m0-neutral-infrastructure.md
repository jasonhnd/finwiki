---
title: M^0 / M Network · 中性稳定币基础设施 · "瑞士银行模型"
aliases: [m-network-m0-neutral-infrastructure, M^0, M Network, M zero, neutral stablecoin infra]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, stablecoin-infra, m-network, m0, neutral-infra, blackrock, goldman, long-tail]
sources:
  - https://m0.org/
  - https://docs.m0.org/
  - https://www.m0.foundation/
  - https://github.com/m0-foundation
status: candidate
---

# M^0 / M Network · 中性稳定币基础设施 · "瑞士银行模型"


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> M^0 (M Network) 不发行自家品牌稳定币, 而是为多个 issuer 提供**共享、标准化的储备/铸造/治理基础设施**。类比"瑞士银行模型": 不卷入品牌竞争, 只提供中立金库。投资人 BlackRock + Goldman + Bain Capital + Pantera, 2025 H2 融资 **$40M+**。M^0 是 §501 后稳定币赛道**分层逻辑**的关键样本: 品牌层 (USDC / USDB / PYUSD) 继续竞争, 基础设施层 (M^0 / BUIDL / Bridge) 走中立化, 加速**长尾稳定币**市场形成。

## Key facts

- 融资 **$40M+** (2025 H2) · 投资人 BlackRock + Goldman + Bain Capital + Pantera ^[extracted]
- Token: $M (DAO governance) ^[extracted]
- 链: Ethereum + Base + Arbitrum + Solana (计划) ^[extracted]
- 储备资产接入: BUIDL + UST + 现金 ^[extracted]
- 智能合约审计: OpenZeppelin + Trail of Bits + Certora ^[extracted]
- Issuer 名单 (2026-05) ~8 家 (欧洲 2 银行 + 日本 1 Fintech + US 3 RWA 协议 · 部分未公开) ^[extracted]
- 总管理稳定币 MCap ~**$300M** (2026-05 · 快速增长) ^[extracted]
- 创始人 Greg Di Prisco (ex-MakerDAO 核心) + Luca Prosperi ^[extracted]

## Mechanism / How it works

传统模型 = issuer 同时管储备 + 写智能合约 + 自分销 (Circle / Paxos / Tether 都是垂直整合). **M^0 分层中立模型**: (1) **Infrastructure Layer** = M^0 统一接 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]]/UST/现金储备 + 统一智能合约 (EVM 兼容) + DAO 验证 issuer 资格; (2) **Brand Layer** = 多家 issuer 共享 M^0 基础设施, 各自带自有品牌 (银行 X 的 SC / Fintech Y 的 SC / 跨境支付公司 Z 的 SC). 任何想发稳定币的机构 / Fintech / 银行**不用自己造轮子**——直接接入 M^0 合规模板 + 储备接入 + 智能合约审计 + DAO 治理, 几周上线一个合规稳定币。收费按发行规模收 bps (类似 BUIDL 20bps 管理费), 不卷入品牌竞争, 与 [[fintech/wall-street-crypto-network-neutrality|Wall Street 加密网络中立]] 共享同一战略立场。

## Origin & evolution

2024-10 M^0 v1 主网上线. 2025 H2 完成 **BlackRock + Goldman + Bain Capital + Pantera** $40M+ 融资 = 同时拿到代币化 MMF 龙头 + 顶级投行 + 顶级 crypto VC 三方背书。2026-Q1 与 Bridge (Stripe) 探讨共建"基础设施联盟"(进度不明)。**$M token 设计类似 MakerDAO MKR**: 持有人参与 issuer 资格验证 + 风险参数治理。Greg Di Prisco 的 MakerDAO 履历直接为 M^0 提供了 DAO 治理基因。**BlackRock × Goldman × M^0 隐性闭环**: BlackRock 投 M^0 + BUIDL 作 M^0 默认储备 → 形成 "BlackRock 储备 + M^0 基础设施" 闭环; Goldman 投 M^0 + 与 BlackRock 共建 $1B 即时赎回设施 → 提供 yield infrastructure 的 T+0 流动性。两家通过 M^0 共同主导**长尾稳定币基础设施**。

## Counterpoints

M^0 总管理 $300M 仍是早期阶段, 距离"基础设施层标准"地位差至少 10x. 8 家 issuer 中只有 3 家公开 = 早期可能多为 "纸面合作", 真实流通量分布不明. **"分层中立"叙事的脆弱性**: BlackRock 投 M^0 = 不再绝对中立 (BlackRock 控制 M^0 储备资产偏好); Goldman 投 M^0 = 银行客户群体被绑定. 中性基础设施面临的真实竞争来自 **Bridge (Stripe)** —— Bridge 同样提供 "替你发稳定币" 服务但绑 Stripe 客户网络, 在分销层比 M^0 强, 与 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe Trojan Horse 路径]] 的"分销端 lock-in" 形成正面对抗。Circle Mint API 也允许第三方品牌化 USDC, 部分蚕食 M^0 长尾市场。

## Open questions

M^0 总管理 SC MCap 2027 能否突破 $5B?BlackRock + Goldman 在 M^0 治理中实际投票权多大,是否会出现"VC 主导 DAO"治理问题?Bridge / Circle Mint 等竞品在长尾市场的份额会否反向蚕食 M^0?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 采用矩阵]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]]
- [[fintech/three-circles-stablecoin-mra-framework|稳定币三圆 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密文化分离]]
<!-- /wiki-links:managed -->

## Sources

