---
source: fintech/mbridge-non-usd-settlement-ring-scale
source_hash: a5b34cace775bdca
lang: zh
status: machine
fidelity: ok
title: "mBridge 非美元结算环规模模式 · 以 GDP 覆盖率作为批发结算上限"
translated_at: 2026-05-31T07:28:06.122Z
---

# mBridge 非美元结算环规模模式 · 以 GDP 覆盖率作为批发结算上限

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 跨境结算环的规模不能只用流量指标（如 SWIFT GPI 历史日均值）来评估，而应把**成员国 GDP 覆盖率**作为理论上限。若巴西 DREX 在 2026 H2  加入 mBridge，则成员国将达到 6  国、GDP $23.3T，加上观察员 $11.7T，总计形成 **$35T 的影响范围（占全球 GDP 的 33%）**。这就是非美元批发结算的“理论天花板”：一旦完全成熟，就可能绕开 SWIFT，处理全球贸易的 1/3 。**$35T 与三圆 MRA 的 $130B 形成镜像关系**：白圈是民间合规的零售/机构层，绿圈是央行层面的批发结算；两者相差 2  个数量级，依赖 2  套不同基础设施，彼此不可替代。

## Key facts

- mBridge 正式 6  国成员：中国 + 香港 + 泰国 + 阿联酋 + 沙特（2025  加入）+ 巴西（2026 H2  DREX），合计 GDP $23.3T ^[extracted]
- 若包含观察员（印度 / 俄罗斯 / 南非 / 伊朗），则为 $11.7T，总影响范围 $35T = 全球 GDP 的 33% ^[extracted]
- 在 2025-09 ，BIS 宣布 mBridge 已进入商业运营阶段（End of MVP），从 PoC 升级为生产级 ^[extracted]
- SWIFT 目前覆盖约 90% 的全球贸易（$95T / $105T）；mBridge 33% 则代表结构性上限 ^[extracted]

## Mechanism / How it works

以 GDP 覆盖率作为结算环规模锚点的逻辑：

```
传统流量评估法：    SWIFT GPI 日均 $5-7T → 推算年度结算量
                  （受既有渠道粘性约束；难以评估新渠道）

GDP 覆盖率法：     成员国 GDP 总和 × 跨境贸易占比（~30%）× 渗透率上限
                  = 理论上的批发结算 ceiling
                  $35T × 30% × 30% = 年度 $3.15T（成熟时）
```

mBridge 与民间稳定币三圆模型不同（详见 [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]）：它是央行层级 RTGS 的直接互联，仅用于批发结算，并不与 USDC / USDT 争夺零售或 DeFi 市场，而是要夺取目前被 SWIFT 垄断的“跨境贸易结算”领域。由此形成**双层并行结算结构**：美元区域通过 SWIFT/FedNow，非美元区域通过 mBridge。关于央行批发层与零售/机构存款代币之间的层级关系，参见 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]。

## Origin & evolution

mBridge 于 2021 年 由 BIS Innovation Hub 与 4  家央行（中国 / 香港 / 泰国 / 阿联酋）创设；沙特在 2024-10  正式加入（表明中东加入黄金/BRICS 结算环，详见 [[fintech/sovereign-capital-pool-aramco-anchor|Aramco 主権資金プール・アンカー]]）；2025-09  完成 MVP 并进入商业运营；而巴西 DREX 于 2026 H2  加入则是关键转折点：这是首个非亚洲/非中东的大国，使其从“区域实验”升级为“全球结算环”。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン地政学通貨 5 極対立]]
- [[fintech/cross-border-sc-via-swift-api|クロスボーダー SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- BIS Innovation Hub mBridge 公开报告 · 2025-09  商业运营公告
