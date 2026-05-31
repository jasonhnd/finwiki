---
source: fintech/mica-emt-art-subcategories-deep-dive
source_hash: bd833cc8af1e7cb7
lang: zh
status: machine
fidelity: ok
title: "深入探讨 MiCA EMT 与 ART 子分类 · 基于监管负担的产品塑造"
translated_at: 2026-05-31T11:13:44.832Z
---

# 深入探讨 MiCA EMT 与 ART 子分类 · 基于监管负担的产品塑造

## 维基路线

该条目位于 [[fintech/INDEX|fintech index]] 下。使用 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 来读取相邻上下文，使用 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 来读取更广泛的系统边界。

> [!info] TL;DR
> MiCA将稳定币精确地分为EMT（单一法币挂钩）和ART（多资产/多币种挂钩），但表面上是一种分类技术，实际上是**因监管负担而进行的产品塑造**——迫使大部分项目进入EMT，而ART几乎从未被采用。 USDC/USDT 属于 EMT，BUIDL 等多资产基金类型属于 ART。 **MiCA EMT 的 ≥ 30% 银行存款要求与 GENIUS Act 的 ≤ 50% 银行存款 / ≤ 93  天国库券**有重要区别，这是跨大西洋 MRA 中必须调整的技术差距（2026-Q3）。

## 关键事实

- MiCA 3  层：法规 (EU) 2023/1114(L1)+ EBA/ESMA RTS/ITS(L2)+ 问答/指南(L3) ^[extracted]
- 2024-12-30:MiCA 全面施行 ^[extracted]
- 现有许可证 EMT 颁发者(2026-05):Circle EU / Société Générale-Forge / Banking Circle / Membrane / Quantoz / Schuman / StablR / Crypto.com (总计 8 社) ^[extracted]
- 几乎没有ART·监管负担过重·市场用脚投票^[extracted]
- USDT 欧盟份额：2024-12 ~28% → 2026-05 ~3% ^[extracted]
- 重大EMT/ART门槛：未偿≥ €700M · 或30 日均交易量≥ €500M · 或持有人≥ 1M ^[extracted]
- USDC 在 2025-09  之后被指定为重要 EMT · 仅在欧盟 ^[extracted]
- 与 GENIUS 的准备金差额：MiCA ≥ 30% 银行存款 · GENIUS ≤ 50% 存款 + ≤ 93  天数国库券限额 ^[extracted]

## 机制/如何运作

**EMT（电子货币代币·文章 3(1)(7))**：单一官方法定货币挂钩 (1:1) · 发行人必须拥有 EMI 或信贷机构许可证（欧盟指令） 2009/110/EC) · 准备金 ≥ 30% 银行存款（第 36(1)(a)）+ 剩余金额为高流动性低风险资产 · 破产-远程隔离 · 代表示例 USDC(Circle Europe)/ EURC / EURI / EURCV / EURØP。

**ART（资产参考代币·文章3（1）（6））**：与“任何其他价值或权利或其组合”挂钩（多货币篮子/商品篮子/多资产）·EBA直接监管（非国家NCA）·储备构成维持在参考资产比率·季度审计+每月储备认证·典型示例XAUT（星期五）/停止 Diem/Libra/理论上像 BUIDL 的多资产类型。

**重要EMT/ART阈值**（EBA RTS 2025-01-22）：未偿≥ €700M，或30 日均交易量≥ €500M，或持有人≥ 1M。要么EBA直接监管+更严格的资本要求+压力测试。自 2025-09 （欧盟唯一）以来，USDC 已被指定为重要 EMT。

**Reserve 与 GENIUS Act 之间的重要区别**：MiCA ≥ 30% 银行存款 + 允许的长期政府债券； GENIUS 允许 ≤ 93  天 国库券限额 + 存款限额 50% → MRA 始终需要相互验证。这就是USDC相对于USDT估值溢价的核心结构性原因（USDC同时满足三日元合规性）。有关 EMT 分发的二级市场 CASP 许可证相关要求，请参阅 [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概要]]。

## 起源与演变

MiCA的2 类型设计起源于2020-09 EU委员会数字金融包。 2023-06  法规（欧盟）EMT / ART 二分法在通过 2023/1114  后变得清晰。 2024-12-30 全面执行后，市场用脚投票：8 社牌照有EMT，但几乎没有ART → 通过监管负担塑造产品已经成功。 USDT既不是EMT（无EMI许可证）也不是ART（储备构成不合格）→从欧盟撤回。 Membrane Finance的Tether收购谈判2025-08 破裂=欧盟进入路线彻底关闭。请参阅 [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ概要]] 了解日本 EPI 类型 3 兼容版本。

＃＃ 有关的
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-overview|MiCA 概要]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
<!-- /wiki-links:managed -->

## 来源
