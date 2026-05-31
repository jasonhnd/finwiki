---
source: fintech/sovereign-fund-crypto-allocation-pattern
source_hash: 23f619ab70243d66
lang: zh
status: machine
fidelity: ok
title: "主权基金的加密基础设施配置模式"
translated_at: 2026-05-31T07:28:06.192Z
---
# 主权基金的加密基础设施配置模式


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 中东主权基金 + 华尔街资管联合体在 2024-2026 年 进入加密基础设施层，规模为 **$200–500 億**，模型 = 主权基金作为 LP（匿名）+ 华尔街作为 GP（公开）+ 投向稳定币 / L1  / RWA tokenization 的 3  层基础设施。Mubadala 已公开向 Circle Arc 私募轮以 $15M 作为 LP 出资，这是首个公开化的典型案例。

**配置 3  层（典型 portfolio）**：

```
上层：协议 / 链级基础设施
  - L1 / L2  公链的股权 / 代币私募（Arc / Tempo / Solana 早期）
  - 共识层 staking validator（Visa / StanChart 模型）
中层：稳定币发行体 / 跨境支付
  - Circle / Bridge / Privy 型企业股权
  - 主权基金母国的稳定币（海湾 USD / AED 稳定币等）
底层：托管 / 合规 / 安全
  - Anchorage / Fireblocks / BitGo 型托管
  - 链上分析 / 合规（Chainalysis、TRM、Elliptic）
```

**Mubadala × Arc 案例（已公开）**：

- 2026-05-11 [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc]] 私募 $222M / FDV $3B 完成
- Mubadala 约以 $15M 作为 LP 出资（公开的最大主权基金 LP）
- 其他 LP 包括 Visa / StanChart / Apollo / ICE / BlackRock 等

**Aramco × BlackRock 中东数字资产基金（2025-Q4）** — 全口径主权资本上限分析见 [[fintech/sovereign-capital-pool-aramco-anchor|Aramco ソブリン資本プールアンカー]]：

- 目标规模 $200–500 億
- 共同 GP：BlackRock + Aramco Ventures
- 投资标的：L1  链 / 稳定币 / RWA tokenization / 区域金融科技

**配置驱动因素**：

1. **油气主权基金的多元化**：预期石油峰值到来 → 提前布置未来 30  年现金流资产
2. **绕开 USD / SWIFT 制裁风险**：稳定币 / CBDC 互操作性 = 新型清算渠道
3. **区域金融中心战略**：迪拜 / 沙特 / 阿布扎比争夺中东加密金融中心地位
4. **技术 leapfrog**：直接接入原生加密基础设施，跳过传统银行升级

**通用性 / 可扩展领域**：

- 挪威 GPFG（最大主权基金 $1.7T，已通过 ETF 开始间接持有）
- 新加坡 GIC / Temasek（早期已投资 Anchorage / Fireblocks）
- 韩国 NPS（与 Kaia / Krw One 政策联动）
- 加拿大 CPPIB（与 BlackRock crypto allocation 联动）
- 任何石油天然气 / 资源型主权基金（俄罗斯 NWF 例外，处于制裁下）

**反例 / 边界**：

- 中国国资委 / 主权基金 / 国家控制资本不参与（监管禁止 · CBDC 跨境由 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 替代）
- 在 EU ESG 框架下，部分主权基金（北欧）限制 PoW 加密资产配置
- 沙特 PIF 内部对加密风险偏好的分裂（Mubadala / PIF 立场不一致）
- 对制裁高度敏感的主权基金（俄罗斯、伊朗）的加密配置会放大制裁风险

**对估值 / 决策的含义**：

- 加密基础设施企业的“主权基金 LP 名单”是重要估值信号（Anchorage / Fireblocks 早期估值的 30–50% 来源于此，见 [[exchanges/global-institutional-custody-five-pillars|機関カストディ 5 柱]]）
- 主权基金入场时点 = 行业成熟标记（≈“传统资产中长期配置约束解除”）
- 监管沟通：主权基金 LP 名单可作为合规背书（OCC / FinCEN 审查时可引用）
- 地缘政治风险：主权基金入场后，跨境制裁 / 资产冻结风险会被放大（俄罗斯先例，机制细节见 [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC 凍結判例]]）


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号資産ネットワーク中立]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号 USD 化]]
<!-- /wiki-links:managed -->
