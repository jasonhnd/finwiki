---
source: fintech/tether-business-model-short-treasury-yield
source_hash: e689a5eaad009b38
lang: zh
status: machine
fidelity: ok
title: "Tether (USDT) 的商业模式 = 用用户资金购买美国短期国债、将利息直接利润化，全年 1.5 兆円·40 人体制"
translated_at: 2026-06-18T23:59:13.094Z
---

# Tether (USDT) 的商业模式 = 用用户资金购买美国短期国债、将利息直接利润化，全年 1.5 兆円·40 人体制


## Wiki 路径

本项目位于 [[fintech/INDEX|fintech index]] 之下。请与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 对照阅读以了解相邻脉络，并与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 对照以了解更广泛的系统边界。

> [!info] TL;DR
> Tether（USDT 发行体）将所托管的用户资金用于运作美国短期国债，并将其利息直接计为利润，从而以 40 人体制每年赚取约 1.5 兆円的利润。其起源是将 BTC/ETH 担保化以发行 USDT 的灰色地带式起步，但歪打正着地实现了规模化。不过由于 KYC 层不一致，无法进入机构投资者市场。

## Conclusion

| 项目 | 数值 / 机制 |
|---|---|
| 体制人员 | ~40 人 |
| 年度利润 | ~1.5 兆円 |
| 利润来源 | 用户存入的美元等值资金 → 美国短期国债运作 → 利息直接成为利润 |
| 起源 | 接收 BTC/ETH 等加密资产以发行 USDT（并非直接接收 USD） |
| 附带运作 | 黄金、美国国债、其他 → 因升值带来额外收益 |
| 弱点 | 以无许可为前提的 KYC 层 → 与机构投资者市场的结算水准不一致，无法进入 institutional |

## Reasoning

- 业界相关人士的评价: 被评为"歪打正着地赚钱""最初像是诈骗式的生意"的起源
- 稳定币市场中将短期利率"直接利润化"的结构，受监管稳定币（USDC·[[payment-firms/jpyc|JPYC]]·银行发行存款代币）同样具备，但 Tether 以规模 × KYC 成本最小化实现利润率最大化
- 受美国短期利率上升期（2023-2025）的顺风推动利润骤增，在日元利率上升迟缓期间，日本 SC 发行体无法构建同等的利润结构（同样的"利息由谁取得"问题在 [[fintech/stablecoin-revenue-split-economics|稳定币利息分润経済学]] 中梳理）
- 由于 [[fintech/institutional-stablecoin-deposit-token-thesis|預金トークン論]]，在结构上无法进入机构投资者市场，主要用途为零售 / 交易所内 / 海外汇款

## Applicable When

- 讨论稳定币经济性时（日元计价 SC 发行设计 / 商业结算设计，参照 [[fintech/circular-reserve-asset-flywheel-overview|準備資産フライホイール]]）
- "日元 SC 是否赚钱？"的讨论 → 在日元短期利率较低期间，同样的商业模式无法成立，SC 经济性依赖于利率环境
- 用户资金的运作去向设计讨论 → 银行发行 SC 是"资金为存款、运作为银行业务"的同一结构
- 分析试图引入 USDT 的提案时 → 可作为无法进入机构市场的理由加以运用

## Source

- 公开: Tether 公开财务（年度利润·运作构成）
- 公开: Tether 设立经过（BTC/ETH 担保化起步）
- 整合: [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 三層構造]] USDT 提及部分

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
<!-- /wiki-links:managed -->
