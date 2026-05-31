---
source: fintech/m-network-m0-neutral-infrastructure
source_hash: 81cb3e8e7ede7547
lang: zh
status: machine
fidelity: ok
title: "M^0  / M Network · 中立稳定币基础设施 · “瑞士银行模型”"
translated_at: 2026-05-31T07:28:06.170Z
---
# M^0  / M Network · 中立稳定币基础设施 · “瑞士银行模型”

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> M^0（M Network）不发行自有品牌稳定币，而是为多个 issuer 提供**共享、标准化的准备金 / 铸造 / 治理基础设施**。与“瑞士银行模型”的类比在于：它不卷入品牌竞争，只提供中立金库。投资者包括 BlackRock + Goldman + Bain Capital + Pantera，2025 H2 融资 **$40M+**。M^0  是 §501 后稳定币行业中**分层逻辑**的核心样本：品牌层（USDC / USDB / PYUSD）继续竞争，基础设施层（M^0  / BUIDL / Bridge）则趋于中立化，并加速**长尾稳定币**市场形成。

## Key facts

- 融资 **$40M+**（2025 H2）· 投资者为 BlackRock + Goldman + Bain Capital + Pantera ^[extracted]
- Token: $M（DAO 治理）^[extracted]
- 链：Ethereum + Base + Arbitrum + Solana（计划中）^[extracted]
- 准备金资产连接：BUIDL + UST + 现金 ^[extracted]
- 智能合约审计：OpenZeppelin + Trail of Bits + Certora ^[extracted]
- Issuer 名录（2026-05）~8 社（欧洲 2 银行 + 日本 1 Fintech + 美国 3 RWA 协议 · 部分未公开）^[extracted]
- 总管理稳定币市值约 **$300M**（2026-05 ，高速增长）^[extracted]
- 共同创始人 Greg Di Prisco（前 MakerDAO core）+ Luca Prosperi ^[extracted]

## Mechanism / How it works

传统模式 = issuer 同时负责准备金管理 + 智能合约 + 自有分发（Circle / Paxos / Tether 都是垂直整合）。**M^0  的分层中立模型**：（1）**Infrastructure Layer** = M^0  统一连接 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / UST / 现金准备金 + 统一智能合约（EVM 兼容）+ 由 DAO 进行 issuer 资格审查；（2）**Brand Layer** = 多个 issuer 在共享 M^0  基础设施的同时保留各自品牌（银行 X 的 SC / Fintech Y 的 SC / 跨境支付公司 Z 的 SC）。希望发行稳定币的机构 / Fintech / 银行**无需重新发明轮子** —— 可直接接入 M^0  的合规模板 + 准备金连接 + 智能合约审计 + DAO 治理，数周内即可上线合规稳定币。按发行规模收取 bps 费用（类似 BUIDL 的 20bps 管理费），且不卷入品牌竞争。其战略位置与 [[fintech/wall-street-crypto-network-neutrality|ウォール街暗号ネットワーク中立]] 相同。

## Origin & evolution

2024-10 M^0 v1  主网启动。2025 H2 完成 **BlackRock + Goldman + Bain Capital + Pantera** 的 $40M+ 融资，相当于同时拿到货币市场基金代币化龙头、一线投行和一线 crypto VC 的三重背书。2026-Q1  曾讨论与 Bridge（Stripe）共同构建“基础设施联盟”（进展不明）。**$M 代币设计类似 MakerDAO 的 MKR**：持有人参与 issuer 资格审查与风险参数治理。Greg Di Prisco 的 MakerDAO 背景，直接赋予 M^0  DAO 治理基因。**BlackRock × Goldman × M^0  的隐性闭环**：BlackRock 投资 M^0 ，并将 BUIDL 作为 M^0  的默认准备金 → 形成“BlackRock 准备金 + M^0  基础设施”的闭环；Goldman 投资 M^0 ，并与 BlackRock 共同构建 $1B 即时赎回设施 → 为收益型基础设施提供 T+0  流动性。两者正通过 M^0  共同主导**长尾稳定币基础设施**。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 採用マトリクス]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
<!-- /wiki-links:managed -->

## Sources
