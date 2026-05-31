---
source: fintech/tether-business-model-short-treasury-yield
source_hash: 5a86c092b399ba07
lang: zh
status: machine
fidelity: ok
title: "Tether (USDT) 的商业模式 = 用用户资金买入短期美国国债并将利息直接利润化，年均 1.5 兆円・40  人体制"
translated_at: 2026-05-31T07:28:06.193Z
---
# Tether (USDT) 的商业模式 = 用用户资金买入短期美国国债并将利息直接利润化，年均 1.5 兆円・40  人体制


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Tether（USDT 发行体）将收到的用户资金投资于短期美国国债，并将其利息直接计入利润，以约 40  人的组织规模赚取每年约 1.5 兆円 的利润。其起源是以 BTC/ETH 作为抵押发行 USDT 的灰色地带式起步，但最终借势做大。不过，由于 KYC 层级不匹配，它无法进入机构投资者市场。

## Conclusion

| 项目 | 数值 / 机制 |
|---|---|
| 组织人员 | ~40 人 |
| 年度利润 | ~1.5 兆円 |
| 利润来源 | 用户存入的美元等值资金 → 配置短期美国国债 → 利息直接形成利润 |
| 起源 | 收取 BTC/ETH 等加密资产后发行 USDT（并非直接收取 USD） |
| 次级运用 | 黄金、美国国债、其他资产 → 价格上涨带来额外收益 |
| 弱点 | 基于 permissionless 前提的 KYC 层 → 与机构投资者市场的结算水准不匹配，无法进入 institutional 市场 |

## Reasoning

- 行业相关者的评价：“结果论来看赚到了钱”“最初像诈骗一样的生意”——反映其起源背景
- 稳定币市场中，短期利率“直接利润化”的结构，监管型稳定币（USDC、[[JapanFG/jpyc|JPYC]]、银行发行存款代币）同样具备，但 Tether 通过规模 × 最小化 KYC 成本实现利润率最大化
- 在美国短期利率上行周期（2023-2025）中利润急增；在日元利率上升缓慢期间，日本 SC 发行体无法复制同等利润结构（同样的“利息归谁所有”问题在 [[fintech/stablecoin-revenue-split-economics|稳定币利息分润経済学]] 中已整理）
- 由于 [[fintech/institutional-stablecoin-deposit-token-thesis|預金トークン論]] 的存在，结构上无法进入机构投资者市场，因此主要用途是零售 / 交易所内 / 海外汇款

## Applicable When

- 讨论稳定币经济性时（圆计价 SC 发行设计 / 商业支付设计，参见 [[fintech/circular-reserve-asset-flywheel-overview|準備資産フライホイール]]）
- “日元 SC 能赚钱吗？”的讨论 → 在日元短期利率较低期间，同样的商业模式不成立，SC 经济性依赖利率环境
- 讨论用户资金投向设计时 → 银行发行 SC 的结构是“资金为存款，运用是银行业务”
- 分析试图引入 USDT 的提案时 → 可作为其无法进入机构市场的理由

## Source

- 公开: Tether 公布财务（年度利润、运用构成）
- 公开: Tether 创立经过（以 BTC/ETH 抵押起步）
- 一致性: [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 三層構造]] 中关于 USDT 的提及部分

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
<!-- /wiki-links:managed -->
