---
title: mBridge 非美元清算环规模模式 · GDP 覆盖率作为 wholesale settlement 上限
aliases: [mbridge non-usd settlement ring scale, $35T mBridge coverage, GDP coverage non-dollar settlement, mBridge vs SWIFT]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, number, economic-pattern, mbridge, cbdc, non-usd-settlement, gdp-coverage, brics]
sources: []
status: candidate
---

# mBridge 非美元清算环规模模式 · GDP 覆盖率作为 wholesale settlement 上限


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 跨境清算环的规模不能用流量(SWIFT GPI 历史日均)评估,而是用**成员国 GDP 覆盖率**作为理论上限。mBridge 在 2026 H2 巴西 DREX 加入后,6 国成员 GDP $23.3T + 观察员 $11.7T = **$35T 影响范围(全球 GDP 33%)**。这是非美元 wholesale 清算的"理论天花板":若完全成熟,可绕过 SWIFT 处理 1/3 全球贸易。**$35T 与三圆 MRA $130B 形成镜像** —— 白圈是私营合规零售/机构,绿圈是央行级 wholesale 清算,两个量级、两套基础设施、互不替代。

## Key facts

- mBridge 正式 6 国成员: 中国 + 香港 + 泰国 + UAE + 沙特(2025 加入)+ 巴西(2026 H2 DREX)合计 GDP $23.3T ^[extracted]
- 含观察员(印度 / 俄罗斯 / 南非 / 伊朗)$11.7T,总影响范围 $35T = 全球 GDP 33% ^[extracted]
- 2025-09 BIS 宣布 mBridge 进入商业运营阶段(End of MVP),从 PoC 升级为 production ^[extracted]
- 实际 2030 mBridge 日均交易额预测 $50-200B,取决于巴西 / 印度参与深度 ^[inferred]
- SWIFT 当前覆盖 ~90% 全球贸易($95T / $105T) · mBridge 33% 是结构性 ceiling ^[extracted]

## Mechanism / How it works

GDP 覆盖率作为清算环规模锚的逻辑:

```
传统流量评估:    SWIFT GPI 日均 $5-7T → 推算年化清算量
                  (受现有渠道粘性约束 · 难评估新通道)

GDP 覆盖率评估:  成员国 GDP 总和 × 跨境贸易占比(~30%)× 渗透率上限
                  = 理论 wholesale 清算 ceiling
                  $35T × 30% × 30% = $3.15T 年化(成熟态)
```

mBridge 区别于私营稳定币三圆(详见 [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 架构]]): 直接央行级 RTGS 互联,wholesale only,不与 USDC / USDT 抢零售/DeFi 市场,而是抢 SWIFT 独占的"跨境贸易结算"领域。这构成**两层并行清算结构** —— 美元域走 SWIFT/FedNow,非美元域走 mBridge。央行 wholesale 与零售/机构 deposit token 的层级关系见 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]。

## Origin & evolution

mBridge 由 BIS Innovation Hub + 4 央行(中国 / 香港 / 泰国 / UAE)2021 创始,2024-10 沙特正式加入(标志中东加入金砖清算环 · 详见 [[fintech/sovereign-capital-pool-aramco-anchor|Aramco 主权资金池锚]]),2025-09 完成 MVP 进入商业运营,2026 H2 巴西 DREX 加入是关键转折点(首个非亚洲/非中东大国 · 标志从"区域试验"升级为"全球清算环")。

## Counterpoints

$35T 是上限估算 · 不是实际清算量 · 2030 现实清算量预计 $200-500B 年化。BIS 自身在 2024-11 一度宣布退出 mBridge 治理(美方政治压力)· 项目治理结构未稳定。e-CNY / DREX / Sarama 内部对"是否完全脱离美元结算"立场不一致 —— 部分成员仍希望同时保留 SWIFT 接入。GDP 覆盖率 ≠ 实际渗透率 · 商业银行对 wholesale CBDC 的采用速度受国内监管节奏严重制约。

## Open questions

mBridge 2030 实际日均交易额 $50B vs $200B 区间的关键变量(印度数字卢比是否加入 / 巴西 DREX 真实商业化程度)?BIS 治理 2024-11 退出后的接管方(IMF / G20 / BRICS Pay 直接接管)?与三圆 MRA 的潜在桥接通道(USDC / EURC 是否可在 mBridge 上结算)?Project Agora(BIS 西方版本)与 mBridge 的长期角色分工?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 架构]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|稳定币地缘货币五极对立]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- BIS Innovation Hub mBridge 公开报告 · 2025-09 商业运营公告
